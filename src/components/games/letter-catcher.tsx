"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import type { GameDifficulty, GameResult, LetterItem } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
// TODO: import { letterBank } from "@/lib/games/content-banks" once stable
import { LETTER_BANK, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
const ROUNDS_PER_GAME = 10;
const FALLING_LETTERS_COUNT = 6;
const FALL_DURATION_MS: Record<GameDifficulty, number> = {
  easy: 6000,
  medium: 4500,
  hard: 3200,
};

/* ─── helpers ─── */
function getLetterPool(difficulty: GameDifficulty): LetterItem[] {
  const upperOnly = LETTER_BANK.items.filter((l) => l.case === "upper");
  if (difficulty === "easy") return upperOnly.filter((l) => l.letter <= "F");
  if (difficulty === "medium") return upperOnly.filter((l) => l.letter <= "M");
  return upperOnly;
}

function pickRound(
  pool: LetterItem[],
  count: number,
): { target: LetterItem; falling: LetterItem[] } {
  const shuffled = getRandomItems(pool, Math.min(count, pool.length));
  const target = shuffled[0]!;
  // Ensure the target is always among the falling set
  const rest = shuffled.slice(1, count);
  const falling = getRandomItems([target, ...rest], count);
  return { target, falling };
}

/* ─── state machine ─── */
type FallingLetter = LetterItem & {
  lane: number; // 0-based column index
  delayMs: number;
  status: "falling" | "correct" | "wrong" | "idle";
};

type State = {
  phase: "ready" | "playing" | "feedback" | "complete";
  round: number;
  score: number;
  target: LetterItem | null;
  falling: FallingLetter[];
  feedbackCorrect: boolean | null;
  startTime: number;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; target: LetterItem; falling: FallingLetter[] }
  | { type: "TAP"; letterId: string }
  | { type: "TIMEOUT" }
  | { type: "NEXT_ROUND" }
  | { type: "COMPLETE" };

function initState(): State {
  return {
    phase: "ready",
    round: 0,
    score: 0,
    target: null,
    falling: [],
    feedbackCorrect: null,
    startTime: Date.now(),
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return { ...state, phase: "playing", startTime: Date.now() };
    case "SET_ROUND":
      return {
        ...state,
        phase: "playing",
        round: state.round + 1,
        target: action.target,
        falling: action.falling,
        feedbackCorrect: null,
      };
    case "TAP": {
      const isCorrect =
        state.target !== null &&
        state.falling.some(
          (f) =>
            f.id === action.letterId &&
            f.letter === state.target!.letter,
        );
      return {
        ...state,
        phase: "feedback",
        score: isCorrect ? state.score + 1 : state.score,
        feedbackCorrect: isCorrect,
        falling: state.falling.map((f) =>
          f.id === action.letterId
            ? { ...f, status: isCorrect ? "correct" : "wrong" }
            : f,
        ),
      };
    }
    case "TIMEOUT":
      return { ...state, phase: "feedback", feedbackCorrect: false };
    case "NEXT_ROUND":
      return { ...state, phase: "playing" };
    case "COMPLETE":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── component ─── */
export type LetterCatcherProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function LetterCatcher({ difficulty, onComplete }: LetterCatcherProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const pool = useMemo(() => getLetterPool(difficulty), [difficulty]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── advance to next round ── */
  const advanceRound = useCallback(() => {
    if (state.round >= ROUNDS_PER_GAME) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    const { target, falling } = pickRound(pool, FALLING_LETTERS_COUNT);
    const mapped: FallingLetter[] = falling.map((l, i) => ({
      ...l,
      lane: i % FALLING_LETTERS_COUNT,
      delayMs: Math.random() * 1200,
      status: "falling" as const,
    }));
    dispatch({ type: "SET_ROUND", target, falling: mapped });
  }, [pool, state.round]);

  /* ── start game ── */
  const startGame = useCallback(() => {
    dispatch({ type: "START" });
  }, []);

  /* kick off first round after START */
  useEffect(() => {
    if (state.phase === "playing" && state.round === 0) {
      advanceRound();
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── auto-advance after feedback ── */
  useEffect(() => {
    if (state.phase === "feedback") {
      timerRef.current = setTimeout(() => {
        if (state.round >= ROUNDS_PER_GAME) {
          dispatch({ type: "COMPLETE" });
        } else {
          dispatch({ type: "NEXT_ROUND" });
          // small delay then advance
          setTimeout(() => advanceRound(), 100);
        }
      }, 1200);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── fire onComplete ── */
  useEffect(() => {
    if (state.phase === "complete") {
      const stars = calculateStars(state.score, ROUNDS_PER_GAME);
      if (stars === 3) void hapticCelebration();
      const result: GameResult = {
        gameType: "letter-catcher",
        score: state.score,
        maxScore: ROUNDS_PER_GAME,
        stars,
        timeMs: Date.now() - state.startTime,
        difficulty,
      };
      onComplete(result);
    }
  }, [state.phase, state.score, state.startTime, difficulty, onComplete]);

  /* ── handle tap ── */
  const handleTap = useCallback(
    (letterId: string) => {
      if (state.phase !== "playing") return;
      const tapped = state.falling.find((f) => f.id === letterId);
      if (!tapped) return;
      const isCorrect = tapped.letter === state.target?.letter;
      if (isCorrect) void hapticSuccess();
      else void hapticError();
      dispatch({ type: "TAP", letterId });
    },
    [state.phase, state.falling, state.target],
  );

  /* ─── RENDER ─── */

  /* Ready screen */
  if (state.phase === "ready") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-b from-sky-100 to-sky-200 p-8 shadow-sm dark:from-sky-900 dark:to-sky-950">
        <h2 className="text-3xl font-bold text-sky-800 dark:text-sky-200">
          🔤 Letter Catcher
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          Letters will fall from above. Tap the letter that matches!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty: <span className="font-semibold capitalize">{difficulty}</span>
        </p>
        <button
          type="button"
          onClick={startGame}
          className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Letter Catcher game"
        >
          Let&apos;s Go! 🚀
        </button>
      </div>
    );
  }

  /* Complete screen */
  if (state.phase === "complete") {
    const stars = calculateStars(state.score, ROUNDS_PER_GAME);
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-100 p-8 shadow-sm dark:from-amber-900 dark:to-amber-950">
        <div className="text-5xl">
          {stars >= 3 ? "🌟🌟🌟" : stars >= 2 ? "⭐⭐" : stars >= 1 ? "⭐" : "💪"}
        </div>
        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
          Great Job!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          You caught{" "}
          <span className="font-bold text-sky-600">{state.score}</span> of{" "}
          <span className="font-bold">{ROUNDS_PER_GAME}</span> letters!
        </p>
      </div>
    );
  }

  /* Playing / Feedback screen */
  const fallDuration = FALL_DURATION_MS[difficulty];

  return (
    <div className="relative flex min-h-[480px] flex-col gap-4 overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 to-indigo-100 p-6 shadow-sm dark:from-sky-900 dark:to-indigo-950">
      {/* Score bar */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Round {state.round}/{ROUNDS_PER_GAME}
        </span>
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-stone-800 dark:text-emerald-300">
          ✓ {state.score}
        </span>
      </div>

      {/* Target prompt */}
      {state.target && (
        <div className="text-center" aria-live="polite">
          <p className="text-lg font-semibold text-stone-700 dark:text-stone-200">
            Find the letter that starts{" "}
            <span className="text-2xl font-bold text-sky-600 dark:text-sky-300">
              &quot;{state.target.word}&quot;
            </span>{" "}
            {state.target.emoji}
          </p>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Sound: {state.target.sound}
          </p>
        </div>
      )}

      {/* Falling letters area */}
      <div
        className="relative flex-1 min-h-[260px]"
        role="group"
        aria-label="Falling letters area"
      >
        {state.falling.map((fl) => {
          const leftPercent = (fl.lane / FALLING_LETTERS_COUNT) * 100 + 5;
          const isCorrectHit = fl.status === "correct";
          const isWrongHit = fl.status === "wrong";

          return (
            <button
              key={fl.id}
              type="button"
              disabled={state.phase !== "playing"}
              onClick={() => handleTap(fl.id)}
              aria-label={`Letter ${fl.letter}`}
              className={[
                "absolute flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold shadow-md transition-all",
                "focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",
                isCorrectHit
                  ? "scale-125 bg-emerald-400 text-white animate-bounce"
                  : isWrongHit
                    ? "bg-red-300 text-white animate-[shake_0.4s_ease-in-out]"
                    : "bg-white text-stone-800 hover:bg-sky-50 active:scale-95 dark:bg-stone-700 dark:text-white",
              ].join(" ")}
              style={{
                left: `${leftPercent}%`,
                animation:
                  fl.status === "falling"
                    ? `fall ${fallDuration}ms ${fl.delayMs}ms linear forwards`
                    : undefined,
                top: fl.status === "falling" ? "-60px" : undefined,
              }}
            >
              {fl.letter}
            </button>
          );
        })}
      </div>

      {/* Feedback overlay */}
      {state.phase === "feedback" && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-2xl"
          aria-live="assertive"
        >
          <div
            className={[
              "rounded-2xl px-8 py-4 text-center shadow-lg",
              state.feedbackCorrect
                ? "bg-emerald-100 dark:bg-emerald-900"
                : "bg-red-50 dark:bg-red-900",
            ].join(" ")}
          >
            <p className="text-2xl font-bold">
              {state.feedbackCorrect ? "✅ Correct!" : "❌ Not quite!"}
            </p>
            {!state.feedbackCorrect && state.target && (
              <p className="mt-1 text-lg text-stone-600 dark:text-stone-300">
                The answer was{" "}
                <span className="font-bold text-sky-600">{state.target.letter}</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Keyframe for falling animation */}
      <style>{`
        @keyframes fall {
          from { top: -60px; }
          to   { top: calc(100% + 20px); }
        }
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
