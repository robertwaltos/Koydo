"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { GameDifficulty, GameResult, ShapeItem } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { SHAPE_BANK, getItemsByDifficulty, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
function roundCount(difficulty: GameDifficulty): number {
  if (difficulty === "easy") return 6;
  if (difficulty === "medium") return 8;
  return 10;
}

/* ─── state ─── */
type State = {
  phase: "ready" | "playing" | "feedback" | "complete";
  items: ShapeItem[];
  round: number;
  score: number;
  maxRounds: number;
  choices: string[];
  lastCorrect: boolean;
  lastAnswer: string;
  realWorldExample: string;
  startTime: number;
};

type Action =
  | { type: "START"; items: ShapeItem[] }
  | { type: "ANSWER"; answer: string }
  | { type: "NEXT" }
  | { type: "COMPLETE" };

function initState(): State {
  return {
    phase: "ready",
    items: [],
    round: 0,
    score: 0,
    maxRounds: 0,
    choices: [],
    lastCorrect: false,
    lastAnswer: "",
    realWorldExample: "",
    startTime: Date.now(),
  };
}

function shuffleChoices(correct: string, pool: ShapeItem[]): string[] {
  const wrongSet = new Set<string>();
  for (const item of pool) {
    if (item.name !== correct) wrongSet.add(item.name);
    if (wrongSet.size >= 3) break;
  }
  const opts = [correct, ...Array.from(wrongSet).slice(0, 3)];
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j]!, opts[i]!];
  }
  return opts;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...state,
        phase: "playing",
        items: action.items,
        round: 0,
        score: 0,
        maxRounds: action.items.length,
        choices: shuffleChoices(action.items[0]!.name, action.items),
        lastCorrect: false,
        lastAnswer: "",
        realWorldExample: "",
        startTime: Date.now(),
      };
    case "ANSWER": {
      const current = state.items[state.round];
      if (!current) return state;
      const correct = action.answer === current.name;
      return {
        ...state,
        phase: "feedback",
        score: correct ? state.score + 1 : state.score,
        lastCorrect: correct,
        lastAnswer: current.name,
        realWorldExample: current.realWorldExample,
      };
    }
    case "NEXT": {
      const nextRound = state.round + 1;
      if (nextRound >= state.maxRounds) {
        return { ...state, phase: "complete" };
      }
      const nextItem = state.items[nextRound];
      return {
        ...state,
        phase: "playing",
        round: nextRound,
        choices: nextItem
          ? shuffleChoices(nextItem.name, state.items)
          : [],
      };
    }
    case "COMPLETE":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── shape SVG renderer ─── */
function ShapeSVG({ path, name }: { path: string; name: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-32 w-32 drop-shadow-lg"
      role="img"
      aria-label={`Shape to identify: ${name}`}
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-teal-600 dark:text-teal-300"
      />
    </svg>
  );
}

/* ─── component ─── */
export type ShapeSafariProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function ShapeSafari({ difficulty, onComplete }: ShapeSafariProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const rounds = roundCount(difficulty);

  const selectedItems = useMemo(() => {
    const filtered = getItemsByDifficulty(SHAPE_BANK.items, difficulty);
    return getRandomItems([...filtered], rounds);
  }, [rounds, difficulty]);

  const startGame = useCallback(() => {
    dispatch({ type: "START", items: selectedItems });
  }, [selectedItems]);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (state.phase !== "playing") return;
      const current = state.items[state.round];
      if (!current) return;
      const correct = answer === current.name;
      if (correct) void hapticSuccess();
      else void hapticError();
      dispatch({ type: "ANSWER", answer });
    },
    [state.phase, state.items, state.round],
  );

  const handleNext = useCallback(() => {
    dispatch({ type: "NEXT" });
  }, []);

  /* ── fire onComplete ── */
  useEffect(() => {
    if (state.phase === "complete") {
      const stars = calculateStars(state.score, state.maxRounds);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "shape-safari",
        score: state.score,
        maxScore: state.maxRounds,
        stars,
        timeMs: Date.now() - state.startTime,
        difficulty,
      });
    }
  }, [state.phase, state.score, state.maxRounds, state.startTime, difficulty, onComplete]);

  const current = state.items[state.round] as ShapeItem | undefined;

  /* ─── RENDER ─── */

  if (state.phase === "ready") {
    return (
      <div className="flex min-h-105 flex-col items-center justify-center gap-6 rounded-2xl bg-linear-to-b from-teal-100 to-emerald-200 p-8 shadow-sm dark:from-teal-900 dark:to-emerald-950">
        <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-200">
          🔷 Shape Safari
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          Spot the shape and name it!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty:{" "}
          <span className="font-semibold capitalize">{difficulty}</span> —{" "}
          {rounds} rounds
        </p>
        <button
          type="button"
          onClick={startGame}
          className="rounded-xl bg-linear-to-r from-teal-500 to-emerald-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Shape Safari game"
        >
          Go on Safari! 🦁
        </button>
      </div>
    );
  }

  if (state.phase === "complete") {
    const stars = calculateStars(state.score, state.maxRounds);
    return (
      <div className="flex min-h-105 flex-col items-center justify-center gap-4 rounded-2xl bg-linear-to-b from-amber-50 to-amber-100 p-8 shadow-sm dark:from-amber-900 dark:to-amber-950">
        <div className="text-5xl">
          {stars >= 3 ? "🌟🌟🌟" : stars >= 2 ? "⭐⭐" : stars >= 1 ? "⭐" : "💪"}
        </div>
        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
          Shape Spotter!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          <span className="font-bold text-teal-600">{state.score}</span> /{" "}
          {state.maxRounds} correct
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-120 flex-col gap-5 rounded-2xl bg-linear-to-b from-teal-100 to-emerald-100 p-6 shadow-sm dark:from-teal-900 dark:to-emerald-950">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Round {state.round + 1}/{state.maxRounds}
        </span>
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-teal-700 dark:bg-stone-800 dark:text-teal-300">
          Score: {state.score}
        </span>
      </div>

      {current && state.phase === "playing" && (
        <>
          {/* Shape display */}
          <div className="flex flex-col items-center gap-2">
            <ShapeSVG path={current.svgPath} name={current.name} />
            <p className="text-sm text-stone-500 dark:text-stone-400">
              {current.sides >= 0
                ? `This shape has ${current.sides} side${current.sides !== 1 ? "s" : ""}`
                : "What shape is this?"}
            </p>
          </div>

          {/* Choices */}
          <div
            className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3"
            role="group"
            aria-label="Shape choices"
          >
            {state.choices.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => handleAnswer(name)}
                className="rounded-xl border-2 border-white bg-white/80 px-4 py-3 text-lg font-semibold capitalize text-stone-700 shadow-sm transition-transform hover:scale-105 active:scale-95 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200"
                aria-label={`Choose ${name}`}
              >
                {name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Feedback */}
      {state.phase === "feedback" && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-5xl">{state.lastCorrect ? "✅" : "❌"}</div>
          <p className="text-lg font-semibold text-stone-700 dark:text-stone-200">
            {state.lastCorrect
              ? `Yes! It's a ${state.lastAnswer}!`
              : `It was a ${state.lastAnswer}!`}
          </p>
          {state.realWorldExample && (
            <p className="max-w-xs text-center text-sm text-stone-500 dark:text-stone-400 italic">
              🌍 Real world: {state.realWorldExample}
            </p>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="rounded-xl bg-linear-to-r from-teal-500 to-emerald-500 px-6 py-3 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            {state.round + 1 < state.maxRounds ? "Next →" : "See Results 🎉"}
          </button>
        </div>
      )}
    </div>
  );
}
