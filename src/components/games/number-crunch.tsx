"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import type { GameDifficulty, GameResult, MathProblem } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { MATH_PROBLEM_BANK, getItemsByDifficulty, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
const ROUNDS_PER_GAME = 10;

/* ─── helpers ─── */
function getProblems(difficulty: GameDifficulty): MathProblem[] {
  const byDifficulty = getItemsByDifficulty(MATH_PROBLEM_BANK, difficulty);
  if (byDifficulty.length >= ROUNDS_PER_GAME) return byDifficulty;
  // Fallback: use all items
  return [...MATH_PROBLEM_BANK.items];
}

function buildChoices(problem: MathProblem): number[] {
  const choices = [problem.answer, ...problem.wrongOptions];
  // Fisher-Yates shuffle
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j]!, choices[i]!];
  }
  return choices;
}

/* ─── operation helpers for display ─── */
function operationEmoji(op: string): string {
  switch (op) {
    case "addition":
      return "➕";
    case "subtraction":
      return "➖";
    case "multiplication":
      return "✖️";
    case "division":
      return "➗";
    default:
      return "🔢";
  }
}

/* ─── state ─── */
type ButtonFeedback = {
  [answerId: number]: "correct" | "wrong" | null;
};

type State = {
  phase: "ready" | "playing" | "feedback" | "complete";
  round: number;
  score: number;
  currentProblem: MathProblem | null;
  choices: number[];
  buttonFeedback: ButtonFeedback;
  startTime: number;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; problem: MathProblem; choices: number[] }
  | { type: "ANSWER"; choice: number }
  | { type: "NEXT_ROUND" }
  | { type: "COMPLETE" };

function initState(): State {
  return {
    phase: "ready",
    round: 0,
    score: 0,
    currentProblem: null,
    choices: [],
    buttonFeedback: {},
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
        currentProblem: action.problem,
        choices: action.choices,
        buttonFeedback: {},
      };
    case "ANSWER": {
      if (!state.currentProblem) return state;
      const correct = action.choice === state.currentProblem.answer;
      const feedback: ButtonFeedback = {};
      for (const c of state.choices) {
        if (c === state.currentProblem.answer) feedback[c] = "correct";
        else if (c === action.choice && !correct) feedback[c] = "wrong";
        else feedback[c] = null;
      }
      return {
        ...state,
        phase: "feedback",
        score: correct ? state.score + 1 : state.score,
        buttonFeedback: feedback,
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
export type NumberCrunchProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function NumberCrunch({ difficulty, onComplete }: NumberCrunchProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const problemPool = useMemo(() => getProblems(difficulty), [difficulty]);
  const roundProblems = useMemo(
    () => getRandomItems(problemPool, ROUNDS_PER_GAME),
    [problemPool],
  );
  const answeredRef = useRef(false);

  /* ── advance round ── */
  const advanceRound = useCallback(() => {
    if (state.round >= ROUNDS_PER_GAME) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    const problem = roundProblems[state.round];
    if (!problem) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    answeredRef.current = false;
    dispatch({
      type: "SET_ROUND",
      problem,
      choices: buildChoices(problem),
    });
  }, [state.round, roundProblems]);

  /* ── kick off first round ── */
  useEffect(() => {
    if (state.phase === "playing" && state.round === 0) {
      advanceRound();
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── handle answer ── */
  const handleAnswer = useCallback(
    (choice: number) => {
      if (state.phase !== "playing" || answeredRef.current) return;
      answeredRef.current = true;
      const correct = choice === state.currentProblem?.answer;
      if (correct) void hapticSuccess();
      else void hapticError();
      dispatch({ type: "ANSWER", choice });
    },
    [state.phase, state.currentProblem],
  );

  /* ── auto-advance after feedback ── */
  useEffect(() => {
    if (state.phase === "feedback") {
      const timer = setTimeout(() => {
        if (state.round >= ROUNDS_PER_GAME) {
          dispatch({ type: "COMPLETE" });
        } else {
          dispatch({ type: "NEXT_ROUND" });
          setTimeout(() => advanceRound(), 80);
        }
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── fire onComplete ── */
  useEffect(() => {
    if (state.phase === "complete") {
      const stars = calculateStars(state.score, ROUNDS_PER_GAME);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "number-crunch",
        score: state.score,
        maxScore: ROUNDS_PER_GAME,
        stars,
        timeMs: Date.now() - state.startTime,
        difficulty,
      });
    }
  }, [state.phase, state.score, state.startTime, difficulty, onComplete]);

  /* ─── RENDER ─── */

  if (state.phase === "ready") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-b from-violet-100 to-purple-200 p-8 shadow-sm dark:from-violet-900 dark:to-purple-950">
        <h2 className="text-3xl font-bold text-violet-800 dark:text-violet-200">
          🔢 Number Crunch
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          Solve the math equation and tap the right answer!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty:{" "}
          <span className="font-semibold capitalize">{difficulty}</span>
        </p>
        <button
          type="button"
          onClick={() => dispatch({ type: "START" })}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Number Crunch game"
        >
          Start Crunching! 🚀
        </button>
      </div>
    );
  }

  if (state.phase === "complete") {
    const stars = calculateStars(state.score, ROUNDS_PER_GAME);
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-100 p-8 shadow-sm dark:from-amber-900 dark:to-amber-950">
        <div className="text-5xl">
          {stars >= 3
            ? "🌟🌟🌟"
            : stars >= 2
              ? "⭐⭐"
              : stars >= 1
                ? "⭐"
                : "💪"}
        </div>
        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
          Math Genius!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          You got{" "}
          <span className="font-bold text-violet-600">{state.score}</span> of{" "}
          <span className="font-bold">{ROUNDS_PER_GAME}</span> correct!
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "START" });
            void hapticSuccess();
          }}
          className="mt-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-6 py-3 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[480px] flex-col gap-6 rounded-2xl bg-gradient-to-b from-violet-100 to-purple-100 p-6 shadow-sm dark:from-violet-900 dark:to-purple-950">
      {/* Score bar */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Problem {state.round}/{ROUNDS_PER_GAME}
        </span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold dark:bg-stone-800">
          {state.currentProblem && (
            <span className="text-stone-500 dark:text-stone-400">
              {operationEmoji(state.currentProblem.operation)}
            </span>
          )}
          <span className="text-violet-700 dark:text-violet-300">
            ✓ {state.score}
          </span>
        </span>
      </div>

      {/* Equation display */}
      {state.currentProblem && (
        <div className="text-center" aria-live="polite">
          <p className="text-5xl font-bold tracking-wide text-stone-800 dark:text-white">
            {state.currentProblem.equation} = ?
          </p>
        </div>
      )}

      {/* Answer buttons - 2×2 grid */}
      <div
        className="mx-auto grid w-full max-w-sm grid-cols-2 gap-4"
        role="group"
        aria-label="Answer choices"
      >
        {state.choices.map((choice, i) => {
          const fb = state.buttonFeedback[choice];
          return (
            <button
              key={`choice-${i}-${choice}`}
              type="button"
              onClick={() => handleAnswer(choice)}
              disabled={state.phase === "feedback"}
              aria-label={`Answer: ${choice}`}
              className={[
                "flex h-20 items-center justify-center rounded-2xl text-3xl font-bold shadow-md transition-all",
                "focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2",
                fb === "correct"
                  ? "scale-105 bg-emerald-400 text-white dark:bg-emerald-600"
                  : fb === "wrong"
                    ? "scale-95 bg-red-400 text-white animate-[shake_0.4s_ease-in-out] dark:bg-red-600"
                    : "bg-white text-stone-800 hover:bg-violet-50 active:scale-95 dark:bg-stone-700 dark:text-white",
              ].join(" ")}
            >
              {choice}
            </button>
          );
        })}
      </div>

      {/* Feedback text */}
      {state.phase === "feedback" && (
        <div className="text-center" aria-live="assertive">
          {state.buttonFeedback[state.currentProblem?.answer ?? 0] ===
          "correct" ? (
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-300">
              ✅ Correct!
            </p>
          ) : (
            <p className="text-xl font-bold text-red-600 dark:text-red-300">
              The answer was {state.currentProblem?.answer}
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
