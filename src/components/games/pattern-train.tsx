"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import type { GameDifficulty, GameResult, PatternItem } from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { PATTERN_BANK, getItemsByDifficulty, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
const ROUNDS_PER_GAME = 8;

/* ─── helpers ─── */
function getPatterns(difficulty: GameDifficulty): PatternItem[] {
  const byDifficulty = getItemsByDifficulty(PATTERN_BANK, difficulty);
  if (byDifficulty.length >= ROUNDS_PER_GAME) return byDifficulty;
  return [...PATTERN_BANK.items];
}

function buildOptions(pattern: PatternItem): string[] {
  const options = [pattern.correctAnswer, ...pattern.wrongOptions];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j]!, options[i]!];
  }
  return options;
}

/* ─── state ─── */
type State = {
  phase: "ready" | "playing" | "feedback" | "complete";
  round: number;
  score: number;
  currentPattern: PatternItem | null;
  options: string[];
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  startTime: number;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; pattern: PatternItem; options: string[] }
  | { type: "ANSWER"; choice: string }
  | { type: "NEXT_ROUND" }
  | { type: "COMPLETE" };

function initState(): State {
  return {
    phase: "ready",
    round: 0,
    score: 0,
    currentPattern: null,
    options: [],
    selectedAnswer: null,
    isCorrect: null,
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
        currentPattern: action.pattern,
        options: action.options,
        selectedAnswer: null,
        isCorrect: null,
      };
    case "ANSWER": {
      if (!state.currentPattern) return state;
      const correct = action.choice === state.currentPattern.correctAnswer;
      return {
        ...state,
        phase: "feedback",
        score: correct ? state.score + 1 : state.score,
        selectedAnswer: action.choice,
        isCorrect: correct,
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
export type PatternTrainProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function PatternTrain({ difficulty, onComplete }: PatternTrainProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const patternPool = useMemo(() => getPatterns(difficulty), [difficulty]);
  const roundPatterns = useMemo(
    () => getRandomItems(patternPool, ROUNDS_PER_GAME),
    [patternPool],
  );
  const answeredRef = useRef(false);

  /* ── advance round ── */
  const advanceRound = useCallback(() => {
    if (state.round >= ROUNDS_PER_GAME) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    const pattern = roundPatterns[state.round];
    if (!pattern) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    answeredRef.current = false;
    dispatch({
      type: "SET_ROUND",
      pattern,
      options: buildOptions(pattern),
    });
  }, [state.round, roundPatterns]);

  /* ── kick off first round ── */
  useEffect(() => {
    if (state.phase === "playing" && state.round === 0) {
      advanceRound();
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── handle answer ── */
  const handleAnswer = useCallback(
    (choice: string) => {
      if (state.phase !== "playing" || answeredRef.current) return;
      answeredRef.current = true;
      const correct = choice === state.currentPattern?.correctAnswer;
      if (correct) void hapticSuccess();
      else void hapticError();
      dispatch({ type: "ANSWER", choice });
    },
    [state.phase, state.currentPattern],
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
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── fire onComplete ── */
  useEffect(() => {
    if (state.phase === "complete") {
      const stars = calculateStars(state.score, ROUNDS_PER_GAME);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "pattern-train",
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
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-b from-orange-100 to-amber-200 p-8 shadow-sm dark:from-orange-900 dark:to-amber-950">
        <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-200">
          🚂 Pattern Train
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          Find the missing piece to complete the pattern train!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty:{" "}
          <span className="font-semibold capitalize">{difficulty}</span>
        </p>
        <button
          type="button"
          onClick={() => dispatch({ type: "START" })}
          className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Pattern Train game"
        >
          All Aboard! 🚃
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
          Pattern Master!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          You completed{" "}
          <span className="font-bold text-orange-600">{state.score}</span> of{" "}
          <span className="font-bold">{ROUNDS_PER_GAME}</span> patterns!
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "START" });
            void hapticSuccess();
          }}
          className="mt-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          Play Again
        </button>
      </div>
    );
  }

  const pattern = state.currentPattern;

  return (
    <div className="flex min-h-[480px] flex-col gap-5 rounded-2xl bg-gradient-to-b from-orange-100 to-amber-100 p-6 shadow-sm dark:from-orange-900 dark:to-amber-950">
      {/* Score bar */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Pattern {state.round}/{ROUNDS_PER_GAME}
        </span>
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-orange-700 dark:bg-stone-800 dark:text-orange-300">
          ✓ {state.score}
        </span>
      </div>

      {/* Train cars — the pattern sequence */}
      {pattern && (
        <>
          <p className="text-center text-lg font-semibold text-stone-600 dark:text-stone-300">
            What goes in the missing car?
          </p>

          <div
            className="mx-auto flex items-end gap-0"
            role="group"
            aria-label="Pattern sequence"
          >
            {/* Locomotive */}
            <div className="flex h-16 w-14 flex-col items-center justify-center rounded-l-xl bg-stone-700 text-2xl text-white shadow-md dark:bg-stone-600">
              🚂
            </div>

            {/* Cars */}
            {pattern.sequence.map((item, idx) => {
              const isMissing = idx === pattern.missingPosition;
              const showCorrectAnswer =
                isMissing &&
                state.phase === "feedback" &&
                !state.isCorrect;

              return (
                <div
                  key={`car-${idx}`}
                  className={[
                    "relative flex h-16 w-14 flex-col items-center justify-center border-l-2 border-dashed text-2xl font-bold shadow-md transition-all",
                    idx === pattern.sequence.length - 1
                      ? "rounded-r-xl"
                      : "",
                    isMissing
                      ? state.phase === "feedback"
                        ? state.isCorrect
                          ? "border-emerald-400 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                          : "border-red-400 bg-red-100 dark:bg-red-900"
                        : "border-amber-400 bg-amber-50 dark:border-amber-600 dark:bg-amber-900/50"
                      : "border-stone-300 bg-white dark:border-stone-600 dark:bg-stone-700",
                  ].join(" ")}
                  aria-label={
                    isMissing
                      ? "Missing car – choose the correct piece"
                      : `Car with ${item}`
                  }
                >
                  {isMissing ? (
                    state.phase === "feedback" ? (
                      <span>
                        {state.isCorrect
                          ? state.selectedAnswer
                          : showCorrectAnswer
                            ? pattern.correctAnswer
                            : "❓"}
                      </span>
                    ) : (
                      <span className="animate-pulse text-amber-500">❓</span>
                    )
                  ) : (
                    <span>{item}</span>
                  )}
                  {/* Wheels */}
                  <div className="absolute -bottom-2 flex gap-4">
                    <div className="h-3 w-3 rounded-full bg-stone-500" />
                    <div className="h-3 w-3 rounded-full bg-stone-500" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Answer options */}
          <div
            className="mx-auto flex flex-wrap items-center justify-center gap-4 pt-4"
            role="group"
            aria-label="Pattern answer choices"
          >
            {state.options.map((opt, i) => {
              const isSelected = state.selectedAnswer === opt;
              const isCorrectAnswer = opt === pattern.correctAnswer;
              const inFeedback = state.phase === "feedback";

              return (
                <button
                  key={`opt-${i}`}
                  type="button"
                  onClick={() => handleAnswer(opt)}
                  disabled={inFeedback}
                  aria-label={`Choose ${opt}`}
                  className={[
                    "flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold shadow-md transition-all",
                    "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2",
                    inFeedback && isCorrectAnswer
                      ? "scale-110 bg-emerald-400 text-white ring-2 ring-emerald-300 dark:bg-emerald-600"
                      : inFeedback && isSelected && !isCorrectAnswer
                        ? "scale-90 bg-red-400 text-white animate-[shake_0.4s_ease-in-out] dark:bg-red-600"
                        : "bg-white text-stone-800 hover:bg-orange-50 active:scale-90 dark:bg-stone-700 dark:text-white",
                  ].join(" ")}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback text */}
          {state.phase === "feedback" && (
            <div className="text-center" aria-live="assertive">
              {state.isCorrect ? (
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-300">
                  ✅ Great pattern spotting!
                </p>
              ) : (
                <p className="text-xl font-bold text-red-600 dark:text-red-300">
                  The answer was {pattern.correctAnswer}
                </p>
              )}
            </div>
          )}
        </>
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
