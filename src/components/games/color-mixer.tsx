"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { ColorMix, GameDifficulty, GameResult } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { COLOR_MIXING_BANK, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
function roundCount(difficulty: GameDifficulty): number {
  if (difficulty === "easy") return 6;
  if (difficulty === "medium") return 8;
  return 10;
}

/* ─── CSS color mapping ─── */
const COLOR_CSS: Record<string, string> = {
  red: "#ef4444",
  blue: "#3b82f6",
  yellow: "#eab308",
  green: "#22c55e",
  orange: "#f97316",
  purple: "#a855f7",
  pink: "#ec4899",
  brown: "#92400e",
  white: "#f5f5f5",
  black: "#1c1917",
  gray: "#9ca3af",
  grey: "#9ca3af",
  teal: "#14b8a6",
  "light blue": "#7dd3fc",
  "light red": "#fca5a5",
  "light green": "#86efac",
  "dark blue": "#1e40af",
  "dark red": "#991b1b",
  "dark green": "#166534",
};

function getColorCSS(name: string): string {
  return COLOR_CSS[name.toLowerCase()] ?? "#6b7280";
}

/* ─── state ─── */
type State = {
  phase: "ready" | "playing" | "feedback" | "complete";
  items: ColorMix[];
  round: number;
  score: number;
  maxRounds: number;
  choices: string[];
  lastCorrect: boolean;
  lastAnswer: string;
  funFact: string;
  startTime: number;
};

type Action =
  | { type: "START"; items: ColorMix[] }
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
    funFact: "",
    startTime: Date.now(),
  };
}

function shuffleChoices(correct: string, pool: ColorMix[]): string[] {
  const wrongSet = new Set<string>();
  for (const item of pool) {
    if (item.result !== correct) wrongSet.add(item.result);
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
        choices: shuffleChoices(action.items[0]!.result, action.items),
        lastCorrect: false,
        lastAnswer: "",
        funFact: "",
        startTime: Date.now(),
      };
    case "ANSWER": {
      const current = state.items[state.round];
      if (!current) return state;
      const correct = action.answer === current.result;
      return {
        ...state,
        phase: "feedback",
        score: correct ? state.score + 1 : state.score,
        lastCorrect: correct,
        lastAnswer: current.result,
        funFact: current.funFact,
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
          ? shuffleChoices(nextItem.result, state.items)
          : [],
      };
    }
    case "COMPLETE":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── component ─── */
export type ColorMixerProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function ColorMixer({ difficulty, onComplete }: ColorMixerProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const rounds = roundCount(difficulty);

  const selectedItems = useMemo(
    () => getRandomItems([...COLOR_MIXING_BANK.items], rounds),
    [rounds],
  );

  const startGame = useCallback(() => {
    dispatch({ type: "START", items: selectedItems });
  }, [selectedItems]);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (state.phase !== "playing") return;
      const current = state.items[state.round];
      if (!current) return;
      const correct = answer === current.result;
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
        gameType: "color-mixer",
        score: state.score,
        maxScore: state.maxRounds,
        stars,
        timeMs: Date.now() - state.startTime,
        difficulty,
      });
    }
  }, [state.phase, state.score, state.maxRounds, state.startTime, difficulty, onComplete]);

  const current = state.items[state.round] as ColorMix | undefined;

  /* ─── RENDER ─── */

  if (state.phase === "ready") {
    return (
      <div className="flex min-h-105 flex-col items-center justify-center gap-6 rounded-2xl bg-linear-to-b from-fuchsia-100 to-pink-200 p-8 shadow-sm dark:from-fuchsia-900 dark:to-pink-950">
        <h2 className="text-3xl font-bold text-fuchsia-800 dark:text-fuchsia-200">
          🎨 Color Mixer
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          Mix two colors and guess what you get!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty:{" "}
          <span className="font-semibold capitalize">{difficulty}</span> —{" "}
          {rounds} rounds
        </p>
        <button
          type="button"
          onClick={startGame}
          className="rounded-xl bg-linear-to-r from-fuchsia-500 to-pink-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Color Mixer game"
        >
          Mix Colors! 🖌️
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
          Color Genius!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          <span className="font-bold text-fuchsia-600">{state.score}</span> /{" "}
          {state.maxRounds} correct
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-120 flex-col gap-5 rounded-2xl bg-linear-to-b from-fuchsia-100 to-pink-100 p-6 shadow-sm dark:from-fuchsia-900 dark:to-pink-950">
      {/* Progress bar */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Round {state.round + 1}/{state.maxRounds}
        </span>
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-fuchsia-700 dark:bg-stone-800 dark:text-fuchsia-300">
          Score: {state.score}
        </span>
      </div>

      {current && state.phase === "playing" && (
        <>
          {/* Color blobs */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white shadow-lg"
              style={{ backgroundColor: getColorCSS(current.color1) }}
              aria-label={`First color: ${current.color1}`}
            >
              <span className="text-xs font-bold text-white drop-shadow-md">
                {current.color1}
              </span>
            </div>
            <span className="text-3xl font-bold text-pink-600 dark:text-pink-300">+</span>
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white shadow-lg"
              style={{ backgroundColor: getColorCSS(current.color2) }}
              aria-label={`Second color: ${current.color2}`}
            >
              <span className="text-xs font-bold text-white drop-shadow-md">
                {current.color2}
              </span>
            </div>
            <span className="text-3xl font-bold text-pink-600 dark:text-pink-300">=</span>
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-stone-200 shadow-lg dark:bg-stone-700"
              aria-label="Result: unknown"
            >
              <span className="text-3xl">❓</span>
            </div>
          </div>

          {/* Answer choices */}
          <div
            className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3"
            role="group"
            aria-label="Color choices"
          >
            {state.choices.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => handleAnswer(color)}
                className="flex items-center gap-3 rounded-xl border-2 border-white bg-white/80 px-4 py-3 text-base font-semibold text-stone-700 shadow-sm transition-transform hover:scale-105 active:scale-95 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200"
                aria-label={`Choose ${color}`}
              >
                <span
                  className="inline-block h-6 w-6 rounded-full border border-stone-300"
                  style={{ backgroundColor: getColorCSS(color) }}
                />
                <span className="capitalize">{color}</span>
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
              ? "Correct! "
              : `Not quite — the answer is ${state.lastAnswer}. `}
          </p>
          {state.funFact && (
            <p className="max-w-xs text-center text-sm text-stone-500 dark:text-stone-400 italic">
              💡 {state.funFact}
            </p>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="rounded-xl bg-linear-to-r from-fuchsia-500 to-pink-500 px-6 py-3 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            {state.round + 1 < state.maxRounds ? "Next →" : "See Results 🎉"}
          </button>
        </div>
      )}
    </div>
  );
}
