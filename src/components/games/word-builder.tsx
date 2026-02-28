"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { CvcWord, GameDifficulty, GameResult } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { CVC_WORD_BANK, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
const ROUNDS_PER_GAME = 8;
const DISTRACTOR_COUNT = 2;

/* ─── helpers ─── */
function getWordPool(difficulty: GameDifficulty): CvcWord[] {
  const words = [...CVC_WORD_BANK.items];
  if (difficulty === "easy") return words.filter((w) => w.word.length <= 3);
  if (difficulty === "medium") return words.filter((w) => w.word.length <= 4);
  return words;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function buildTiles(word: string): { letter: string; id: string }[] {
  const wordLetters = word.toUpperCase().split("").map((l, i) => ({
    letter: l,
    id: `tile-${l}-${i}`,
  }));
  // Add distractor letters
  const distractors: { letter: string; id: string }[] = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const wordSet = new Set(word.toUpperCase().split(""));
  const available = alphabet.split("").filter((l) => !wordSet.has(l));
  const picked = getRandomItems(available, DISTRACTOR_COUNT);
  for (const [idx, l] of picked.entries()) {
    distractors.push({ letter: l, id: `dist-${l}-${idx}` });
  }
  return shuffleArray([...wordLetters, ...distractors]);
}

/* ─── state ─── */
type SlotState = {
  letter: string | null;
  tileId: string | null;
  correct: boolean | null;
};

type State = {
  phase: "ready" | "playing" | "feedback" | "complete";
  round: number;
  score: number;
  currentWord: CvcWord | null;
  tiles: { letter: string; id: string; used: boolean }[];
  slots: SlotState[];
  startTime: number;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; word: CvcWord; tiles: { letter: string; id: string }[] }
  | { type: "PLACE_TILE"; tileId: string; slotIndex: number }
  | { type: "REMOVE_TILE"; slotIndex: number }
  | { type: "CHECK" }
  | { type: "NEXT_ROUND" }
  | { type: "COMPLETE" };

function initState(): State {
  return {
    phase: "ready",
    round: 0,
    score: 0,
    currentWord: null,
    tiles: [],
    slots: [],
    startTime: Date.now(),
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return { ...state, phase: "playing", startTime: Date.now() };
    case "SET_ROUND": {
      const wordLen = action.word.word.length;
      return {
        ...state,
        phase: "playing",
        round: state.round + 1,
        currentWord: action.word,
        tiles: action.tiles.map((t) => ({ ...t, used: false })),
        slots: Array.from({ length: wordLen }, () => ({
          letter: null,
          tileId: null,
          correct: null,
        })),
      };
    }
    case "PLACE_TILE": {
      const tile = state.tiles.find((t) => t.id === action.tileId && !t.used);
      if (!tile) return state;
      const slot = state.slots[action.slotIndex];
      if (!slot || slot.letter !== null) return state;
      return {
        ...state,
        tiles: state.tiles.map((t) =>
          t.id === action.tileId ? { ...t, used: true } : t,
        ),
        slots: state.slots.map((s, i) =>
          i === action.slotIndex
            ? { letter: tile.letter, tileId: tile.id, correct: null }
            : s,
        ),
      };
    }
    case "REMOVE_TILE": {
      const slot = state.slots[action.slotIndex];
      if (!slot || slot.tileId === null) return state;
      const tileIdToFree = slot.tileId;
      return {
        ...state,
        tiles: state.tiles.map((t) =>
          t.id === tileIdToFree ? { ...t, used: false } : t,
        ),
        slots: state.slots.map((s, i) =>
          i === action.slotIndex
            ? { letter: null, tileId: null, correct: null }
            : s,
        ),
      };
    }
    case "CHECK": {
      if (!state.currentWord) return state;
      const target = state.currentWord.word.toUpperCase();
      const isFullyCorrect = state.slots.every(
        (s, i) => s.letter === target[i],
      );
      return {
        ...state,
        phase: "feedback",
        score: isFullyCorrect ? state.score + 1 : state.score,
        slots: state.slots.map((s, i) => ({
          ...s,
          correct: s.letter === target[i],
        })),
      };
    }
    case "NEXT_ROUND":
      return { ...state, phase: "playing" };
    case "COMPLETE":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── component ─── */
export type WordBuilderProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function WordBuilder({ difficulty, onComplete }: WordBuilderProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const wordPool = useMemo(() => getWordPool(difficulty), [difficulty]);
  const roundWords = useMemo(
    () => getRandomItems(wordPool, ROUNDS_PER_GAME),
    [wordPool],
  );

  /* ── advance round ── */
  const advanceRound = useCallback(() => {
    if (state.round >= ROUNDS_PER_GAME) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    const word = roundWords[state.round];
    if (!word) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    const tiles = buildTiles(word.word);
    dispatch({ type: "SET_ROUND", word, tiles });
  }, [state.round, roundWords]);

  /* ── start game ── */
  const startGame = useCallback(() => {
    dispatch({ type: "START" });
  }, []);

  /* kick off first round */
  useEffect(() => {
    if (state.phase === "playing" && state.round === 0) {
      advanceRound();
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── auto-check when all slots filled ── */
  useEffect(() => {
    if (
      state.phase === "playing" &&
      state.slots.length > 0 &&
      state.slots.every((s) => s.letter !== null)
    ) {
      const correct = state.currentWord
        ? state.slots.every(
            (s, i) =>
              s.letter === state.currentWord!.word.toUpperCase()[i],
          )
        : false;
      if (correct) void hapticSuccess();
      else void hapticError();
      dispatch({ type: "CHECK" });
    }
  }, [state.phase, state.slots, state.currentWord]);

  /* ── auto-advance after feedback ── */
  useEffect(() => {
    if (state.phase === "feedback") {
      const timer = setTimeout(() => {
        if (state.round >= ROUNDS_PER_GAME) {
          dispatch({ type: "COMPLETE" });
        } else {
          dispatch({ type: "NEXT_ROUND" });
          setTimeout(() => advanceRound(), 100);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── fire onComplete ── */
  useEffect(() => {
    if (state.phase === "complete") {
      const stars = calculateStars(state.score, ROUNDS_PER_GAME);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "word-builder",
        score: state.score,
        maxScore: ROUNDS_PER_GAME,
        stars,
        timeMs: Date.now() - state.startTime,
        difficulty,
      });
    }
  }, [state.phase, state.score, state.startTime, difficulty, onComplete]);

  /* ── handle tile tap → place in first empty slot ── */
  const handleTileTap = useCallback(
    (tileId: string) => {
      if (state.phase !== "playing") return;
      const firstEmptySlot = state.slots.findIndex((s) => s.letter === null);
      if (firstEmptySlot === -1) return;
      dispatch({ type: "PLACE_TILE", tileId, slotIndex: firstEmptySlot });
    },
    [state.phase, state.slots],
  );

  /* ── handle slot tap → remove tile ── */
  const handleSlotTap = useCallback(
    (slotIndex: number) => {
      if (state.phase !== "playing") return;
      dispatch({ type: "REMOVE_TILE", slotIndex });
    },
    [state.phase],
  );

  /* ─── RENDER ─── */

  if (state.phase === "ready") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-b from-emerald-100 to-teal-200 p-8 shadow-sm dark:from-emerald-900 dark:to-teal-950">
        <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200">
          📝 Word Builder
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          See the picture clue and tap the letters to spell the word!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty: <span className="font-semibold capitalize">{difficulty}</span>
        </p>
        <button
          type="button"
          onClick={startGame}
          className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Word Builder game"
        >
          Let&apos;s Spell! ✨
        </button>
      </div>
    );
  }

  if (state.phase === "complete") {
    const stars = calculateStars(state.score, ROUNDS_PER_GAME);
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-100 p-8 shadow-sm dark:from-amber-900 dark:to-amber-950">
        <div className="text-5xl">
          {stars >= 3 ? "🌟🌟🌟" : stars >= 2 ? "⭐⭐" : stars >= 1 ? "⭐" : "💪"}
        </div>
        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
          Awesome Spelling!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          You spelled{" "}
          <span className="font-bold text-emerald-600">{state.score}</span> of{" "}
          <span className="font-bold">{ROUNDS_PER_GAME}</span> words!
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[480px] flex-col gap-5 rounded-2xl bg-gradient-to-b from-emerald-100 to-teal-100 p-6 shadow-sm dark:from-emerald-900 dark:to-teal-950">
      {/* Score bar */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Word {state.round}/{ROUNDS_PER_GAME}
        </span>
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-stone-800 dark:text-emerald-300">
          ✓ {state.score}
        </span>
      </div>

      {/* Picture clue */}
      {state.currentWord && (
        <div className="text-center" aria-live="polite">
          <div className="mb-2 text-5xl">{state.currentWord.emojiHint}</div>
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
            {state.currentWord.family} family
          </p>
        </div>
      )}

      {/* Slots */}
      <div
        className="flex items-center justify-center gap-2"
        role="group"
        aria-label="Letter slots"
      >
        {state.slots.map((slot, i) => (
          <button
            key={`slot-${i}`}
            type="button"
            onClick={() => handleSlotTap(i)}
            disabled={slot.letter === null || state.phase !== "playing"}
            aria-label={
              slot.letter
                ? `Slot ${i + 1}: letter ${slot.letter}, tap to remove`
                : `Slot ${i + 1}: empty`
            }
            className={[
              "flex h-14 w-14 items-center justify-center rounded-xl border-2 border-dashed text-2xl font-bold transition-all",
              slot.letter === null
                ? "border-stone-300 bg-white/50 dark:border-stone-600 dark:bg-stone-800/50"
                : slot.correct === true
                  ? "border-emerald-400 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 scale-105"
                  : slot.correct === false
                    ? "border-red-400 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 animate-[shake_0.4s_ease-in-out]"
                    : "border-emerald-300 bg-white text-stone-800 dark:bg-stone-700 dark:text-white cursor-pointer hover:bg-red-50 active:scale-90",
            ].join(" ")}
          >
            {slot.letter ?? ""}
          </button>
        ))}
      </div>

      {/* Tile rack */}
      <div
        className="flex flex-wrap items-center justify-center gap-3"
        role="group"
        aria-label="Available letter tiles"
      >
        {state.tiles.map((tile) => (
          <button
            key={tile.id}
            type="button"
            onClick={() => handleTileTap(tile.id)}
            disabled={tile.used || state.phase !== "playing"}
            aria-label={`Letter tile ${tile.letter}`}
            className={[
              "flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold shadow-md transition-all",
              "focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2",
              tile.used
                ? "scale-75 bg-stone-200 text-stone-400 opacity-40 dark:bg-stone-700"
                : "bg-white text-stone-800 hover:bg-emerald-50 active:scale-90 dark:bg-stone-700 dark:text-white",
            ].join(" ")}
          >
            {tile.letter}
          </button>
        ))}
      </div>

      {/* Feedback overlay */}
      {state.phase === "feedback" && (
        <div className="mt-2 text-center" aria-live="assertive">
          {state.slots.every((s) => s.correct) ? (
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-300">
              ✅ Correct! &quot;{state.currentWord?.word.toUpperCase()}&quot;
            </p>
          ) : (
            <p className="text-xl font-bold text-red-600 dark:text-red-300">
              The word was &quot;{state.currentWord?.word.toUpperCase()}&quot;
            </p>
          )}
        </div>
      )}

      {/* Shake keyframe */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
