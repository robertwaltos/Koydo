"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import type { GameDifficulty, GameResult, MemoryPair } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { MEMORY_MATCH_BANK, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
function pairCount(difficulty: GameDifficulty): number {
  if (difficulty === "easy") return 4;
  if (difficulty === "medium") return 6;
  return 8;
}

/* ─── card type ─── */
type Card = {
  id: string;
  pairId: string;
  display: string;
  side: "front" | "match";
  flipped: boolean;
  matched: boolean;
};

/* ─── state ─── */
type State = {
  phase: "ready" | "playing" | "complete";
  cards: Card[];
  selected: number[];
  matchesFound: number;
  totalPairs: number;
  attempts: number;
  startTime: number;
};

type Action =
  | { type: "START"; cards: Card[]; totalPairs: number }
  | { type: "FLIP"; index: number }
  | { type: "CHECK_MATCH" }
  | { type: "COMPLETE" };

function initState(): State {
  return {
    phase: "ready",
    cards: [],
    selected: [],
    matchesFound: 0,
    totalPairs: 0,
    attempts: 0,
    startTime: Date.now(),
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...state,
        phase: "playing",
        cards: action.cards,
        totalPairs: action.totalPairs,
        selected: [],
        matchesFound: 0,
        attempts: 0,
        startTime: Date.now(),
      };
    case "FLIP": {
      if (state.selected.length >= 2) return state;
      const card = state.cards[action.index];
      if (!card || card.flipped || card.matched) return state;
      return {
        ...state,
        cards: state.cards.map((c, i) =>
          i === action.index ? { ...c, flipped: true } : c,
        ),
        selected: [...state.selected, action.index],
      };
    }
    case "CHECK_MATCH": {
      if (state.selected.length !== 2) return state;
      const [a, b] = state.selected;
      const cardA = state.cards[a!];
      const cardB = state.cards[b!];
      const isMatch = cardA && cardB && cardA.pairId === cardB.pairId;
      const newMatches = isMatch ? state.matchesFound + 1 : state.matchesFound;
      const newCards = state.cards.map((c, i) => {
        if (isMatch && (i === a || i === b)) return { ...c, matched: true };
        if (!isMatch && (i === a || i === b)) return { ...c, flipped: false };
        return c;
      });
      const allMatched = newMatches === state.totalPairs;
      return {
        ...state,
        cards: newCards,
        selected: [],
        matchesFound: newMatches,
        attempts: state.attempts + 1,
        phase: allMatched ? "complete" : "playing",
      };
    }
    case "COMPLETE":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── build cards from pairs ─── */
function buildCards(pairs: MemoryPair[]): Card[] {
  const cards: Card[] = [];
  for (const pair of pairs) {
    cards.push({
      id: `${pair.id}-front`,
      pairId: pair.id,
      display: pair.front,
      side: "front",
      flipped: false,
      matched: false,
    });
    cards.push({
      id: `${pair.id}-match`,
      pairId: pair.id,
      display: pair.match,
      side: "match",
      flipped: false,
      matched: false,
    });
  }
  // shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j]!, cards[i]!];
  }
  return cards;
}

/* ─── component ─── */
export type MemoryMatchProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function MemoryMatch({ difficulty, onComplete }: MemoryMatchProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const checkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pairs = pairCount(difficulty);

  const selectedPairs = useMemo(
    () => getRandomItems([...MEMORY_MATCH_BANK.items], pairs),
    [pairs],
  );

  /* ── start game ── */
  const startGame = useCallback(() => {
    const cards = buildCards(selectedPairs);
    dispatch({ type: "START", cards, totalPairs: selectedPairs.length });
  }, [selectedPairs]);

  /* ── handle card flip ── */
  const handleFlip = useCallback(
    (index: number) => {
      if (state.phase !== "playing" || state.selected.length >= 2) return;
      dispatch({ type: "FLIP", index });
    },
    [state.phase, state.selected.length],
  );

  /* ── check for match when 2 cards selected ── */
  useEffect(() => {
    if (state.selected.length === 2) {
      const [a, b] = state.selected;
      const cardA = state.cards[a!];
      const cardB = state.cards[b!];
      const isMatch = cardA && cardB && cardA.pairId === cardB.pairId;

      if (isMatch) void hapticSuccess();
      else void hapticError();

      checkTimeoutRef.current = setTimeout(() => {
        dispatch({ type: "CHECK_MATCH" });
      }, isMatch ? 600 : 1000);

      return () => {
        if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
      };
    }
  }, [state.selected, state.cards]);

  /* ── fire onComplete ── */
  useEffect(() => {
    if (state.phase === "complete") {
      // Score: perfect = pairs attempts, max penalty at 3× attempts
      const maxScore = state.totalPairs;
      const perfectAttempts = state.totalPairs;
      const score = Math.max(
        0,
        maxScore - Math.max(0, state.attempts - perfectAttempts),
      );
      const stars = calculateStars(score, maxScore);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "memory-match",
        score,
        maxScore,
        stars,
        timeMs: Date.now() - state.startTime,
        difficulty,
      });
    }
  }, [state.phase, state.totalPairs, state.attempts, state.startTime, difficulty, onComplete]);

  /* grid cols based on pair count */
  const gridCols =
    pairs <= 4 ? "grid-cols-4" : pairs <= 6 ? "grid-cols-4" : "grid-cols-4";

  /* ─── RENDER ─── */

  if (state.phase === "ready") {
    return (
      <div className="flex min-h-105 flex-col items-center justify-center gap-6 rounded-2xl bg-linear-to-b from-cyan-100 to-blue-200 p-8 shadow-sm dark:from-cyan-900 dark:to-blue-950">
        <h2 className="text-3xl font-bold text-cyan-800 dark:text-cyan-200">
          🧠 Memory Match
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          Flip cards and find matching pairs!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty:{" "}
          <span className="font-semibold capitalize">{difficulty}</span> —{" "}
          {pairs} pairs
        </p>
        <button
          type="button"
          onClick={startGame}
          className="rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Memory Match game"
        >
          Flip &amp; Match! 🃏
        </button>
      </div>
    );
  }

  if (state.phase === "complete") {
    const maxScore = state.totalPairs;
    const perfectAttempts = state.totalPairs;
    const score = Math.max(0, maxScore - Math.max(0, state.attempts - perfectAttempts));
    const stars = calculateStars(score, maxScore);
    return (
      <div className="flex min-h-105 flex-col items-center justify-center gap-4 rounded-2xl bg-linear-to-b from-amber-50 to-amber-100 p-8 shadow-sm dark:from-amber-900 dark:to-amber-950">
        <div className="text-5xl">
          {stars >= 3 ? "🌟🌟🌟" : stars >= 2 ? "⭐⭐" : stars >= 1 ? "⭐" : "💪"}
        </div>
        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
          Memory Master!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          Found all {state.totalPairs} pairs in{" "}
          <span className="font-bold text-cyan-600">{state.attempts}</span>{" "}
          attempts!
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-120 flex-col gap-4 rounded-2xl bg-linear-to-b from-cyan-100 to-blue-100 p-6 shadow-sm dark:from-cyan-900 dark:to-blue-950">
      {/* Score bar */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Pairs: {state.matchesFound}/{state.totalPairs}
        </span>
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-stone-800 dark:text-cyan-300">
          Tries: {state.attempts}
        </span>
      </div>

      {/* Card grid */}
      <div
        className={`mx-auto grid ${gridCols} gap-3 w-full max-w-sm`}
        role="group"
        aria-label="Memory cards"
      >
        {state.cards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            onClick={() => handleFlip(index)}
            disabled={card.flipped || card.matched || state.selected.length >= 2}
            aria-label={
              card.matched
                ? `Matched: ${card.display}`
                : card.flipped
                  ? `Card: ${card.display}`
                  : "Face-down card"
            }
            className={[
              "flex h-16 w-full items-center justify-center rounded-xl text-2xl font-bold shadow-sm transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2",
              card.matched
                ? "scale-90 bg-emerald-200 text-emerald-700 opacity-60 dark:bg-emerald-800 dark:text-emerald-200"
                : card.flipped
                  ? "scale-105 bg-white text-stone-800 dark:bg-stone-600 dark:text-white"
                  : "bg-cyan-500 text-white hover:bg-cyan-400 active:scale-95 dark:bg-cyan-700",
            ].join(" ")}
          >
            {card.flipped || card.matched ? card.display : "?"}
          </button>
        ))}
      </div>
    </div>
  );
}
