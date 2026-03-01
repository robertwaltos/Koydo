"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import type {
  GameDifficulty,
  GameResult,
  StoryScene,
  StoryStep,
} from "@/lib/games/types";
import { calculateStars } from "@/lib/games/scoring";
import { hapticSuccess, hapticError, hapticCelebration } from "@/lib/platform/haptics";
import { STORY_SCENE_BANK, getRandomItems } from "@/lib/games/content-banks";

/* ─── constants ─── */
const ROUNDS_PER_GAME = 5;

/* ─── helpers ─── */
function shuffleSteps(steps: StoryStep[]): StoryStep[] {
  const copy = [...steps];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function isCorrectOrder(steps: StoryStep[]): boolean {
  return steps.every((s, i) => s.order === i + 1);
}

/* ─── state ─── */
type State = {
  phase: "ready" | "playing" | "feedback" | "complete";
  round: number;
  score: number;
  currentScene: StoryScene | null;
  orderedSteps: StoryStep[];
  isCorrect: boolean | null;
  startTime: number;
  selectedIndex: number | null;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; scene: StoryScene; shuffled: StoryStep[] }
  | { type: "SELECT"; index: number }
  | { type: "SWAP"; indexA: number; indexB: number }
  | { type: "CHECK" }
  | { type: "NEXT_ROUND" }
  | { type: "COMPLETE" };

function initState(): State {
  return {
    phase: "ready",
    round: 0,
    score: 0,
    currentScene: null,
    orderedSteps: [],
    isCorrect: null,
    startTime: Date.now(),
    selectedIndex: null,
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
        currentScene: action.scene,
        orderedSteps: action.shuffled,
        isCorrect: null,
        selectedIndex: null,
      };
    case "SELECT":
      return { ...state, selectedIndex: action.index };
    case "SWAP": {
      const steps = [...state.orderedSteps];
      [steps[action.indexA], steps[action.indexB]] = [
        steps[action.indexB]!,
        steps[action.indexA]!,
      ];
      return { ...state, orderedSteps: steps, selectedIndex: null };
    }
    case "CHECK": {
      const correct = isCorrectOrder(state.orderedSteps);
      return {
        ...state,
        phase: "feedback",
        score: correct ? state.score + 1 : state.score,
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
export type StorySequencerProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

export function StorySequencer({ difficulty, onComplete }: StorySequencerProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const roundScenes = useMemo(
    () => getRandomItems([...STORY_SCENE_BANK.items], ROUNDS_PER_GAME),
    [],
  );
  const checkedRef = useRef(false);

  /* ── advance round ── */
  const advanceRound = useCallback(() => {
    if (state.round >= ROUNDS_PER_GAME) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    const scene = roundScenes[state.round];
    if (!scene) {
      dispatch({ type: "COMPLETE" });
      return;
    }
    checkedRef.current = false;
    // Ensure shuffled is not already in order
    let shuffled = shuffleSteps(scene.scenes);
    let attempts = 0;
    while (isCorrectOrder(shuffled) && attempts < 10) {
      shuffled = shuffleSteps(scene.scenes);
      attempts++;
    }
    dispatch({ type: "SET_ROUND", scene, shuffled });
  }, [state.round, roundScenes]);

  /* ── kick off first round ── */
  useEffect(() => {
    if (state.phase === "playing" && state.round === 0) {
      advanceRound();
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── handle card tap ── */
  const handleCardTap = useCallback(
    (index: number) => {
      if (state.phase !== "playing") return;
      if (state.selectedIndex === null) {
        dispatch({ type: "SELECT", index });
      } else if (state.selectedIndex === index) {
        dispatch({ type: "SELECT", index: -1 }); // deselect
        dispatch({ type: "SELECT", index: -1 }); // clear
        // actually just deselect
      } else {
        dispatch({
          type: "SWAP",
          indexA: state.selectedIndex,
          indexB: index,
        });
      }
    },
    [state.phase, state.selectedIndex],
  );

  /* ── handle check button ── */
  const handleCheck = useCallback(() => {
    if (state.phase !== "playing" || checkedRef.current) return;
    checkedRef.current = true;
    const correct = isCorrectOrder(state.orderedSteps);
    if (correct) void hapticSuccess();
    else void hapticError();
    dispatch({ type: "CHECK" });
  }, [state.phase, state.orderedSteps]);

  /* ── move up / down ── */
  const handleMoveUp = useCallback(
    (index: number) => {
      if (state.phase !== "playing" || index <= 0) return;
      dispatch({ type: "SWAP", indexA: index, indexB: index - 1 });
    },
    [state.phase],
  );

  const handleMoveDown = useCallback(
    (index: number) => {
      if (state.phase !== "playing" || index >= state.orderedSteps.length - 1)
        return;
      dispatch({ type: "SWAP", indexA: index, indexB: index + 1 });
    },
    [state.phase, state.orderedSteps.length],
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
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [state.phase, state.round, advanceRound]);

  /* ── fire onComplete ── */
  useEffect(() => {
    if (state.phase === "complete") {
      const stars = calculateStars(state.score, ROUNDS_PER_GAME);
      if (stars === 3) void hapticCelebration();
      onComplete({
        gameType: "story-sequencer",
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
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-b from-rose-100 to-pink-200 p-8 shadow-sm dark:from-rose-900 dark:to-pink-950">
        <h2 className="text-3xl font-bold text-rose-800 dark:text-rose-200">
          📖 Story Sequencer
        </h2>
        <p className="max-w-xs text-center text-lg text-stone-600 dark:text-stone-300">
          Put the story scenes in the right order!
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Difficulty:{" "}
          <span className="font-semibold capitalize">{difficulty}</span>
        </p>
        <button
          type="button"
          onClick={() => dispatch({ type: "START" })}
          className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Start Story Sequencer game"
        >
          Start the Story! 📚
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
          Story Expert!
        </h2>
        <p className="text-lg text-stone-700 dark:text-stone-300">
          You sequenced{" "}
          <span className="font-bold text-rose-600">{state.score}</span> of{" "}
          <span className="font-bold">{ROUNDS_PER_GAME}</span> stories
          correctly!
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[480px] flex-col gap-4 rounded-2xl bg-gradient-to-b from-rose-100 to-pink-100 p-6 shadow-sm dark:from-rose-900 dark:to-pink-950">
      {/* Score bar */}
      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
          Story {state.round}/{ROUNDS_PER_GAME}
        </span>
        <span className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-rose-700 dark:bg-stone-800 dark:text-rose-300">
          ✓ {state.score}
        </span>
      </div>

      {/* Story title */}
      {state.currentScene && (
        <h3 className="text-center text-xl font-bold text-stone-800 dark:text-white">
          {state.currentScene.title}
        </h3>
      )}

      {/* Scene cards */}
      <div className="flex flex-col gap-3" role="list" aria-label="Story scenes to reorder">
        {state.orderedSteps.map((step, idx) => {
          const isInCorrectPosition = step.order === idx + 1;
          const showFeedback = state.phase === "feedback";
          const isSelected = state.selectedIndex === idx;

          return (
            <div
              key={`step-${step.order}`}
              role="listitem"
              className={[
                "flex items-center gap-3 rounded-xl border-2 p-3 transition-all",
                showFeedback && isInCorrectPosition
                  ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/50"
                  : showFeedback && !isInCorrectPosition
                    ? "border-red-400 bg-red-50 dark:bg-red-900/50"
                    : isSelected
                      ? "border-rose-400 bg-rose-50 ring-2 ring-rose-300 dark:bg-rose-900/50"
                      : "border-stone-200 bg-white dark:border-stone-600 dark:bg-stone-800",
              ].join(" ")}
            >
              {/* Position number */}
              <div
                className={[
                  "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold",
                  showFeedback && isInCorrectPosition
                    ? "bg-emerald-400 text-white"
                    : showFeedback && !isInCorrectPosition
                      ? "bg-red-400 text-white"
                      : "bg-stone-200 text-stone-600 dark:bg-stone-600 dark:text-stone-200",
                ].join(" ")}
              >
                {idx + 1}
              </div>

              {/* Emoji + text */}
              <button
                type="button"
                onClick={() => handleCardTap(idx)}
                disabled={state.phase !== "playing"}
                className="flex flex-1 items-center gap-3 text-left"
                aria-label={`Scene: ${step.text}. Tap to select, then tap another to swap.`}
              >
                <span className="text-3xl">{step.emoji}</span>
                <span className="text-base font-medium text-stone-700 dark:text-stone-200">
                  {step.text}
                </span>
              </button>

              {/* Reorder arrows */}
              {state.phase === "playing" && (
                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => handleMoveUp(idx)}
                    disabled={idx === 0}
                    aria-label={`Move scene up`}
                    className="rounded p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-700 disabled:opacity-30 dark:hover:bg-stone-700"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveDown(idx)}
                    disabled={idx === state.orderedSteps.length - 1}
                    aria-label={`Move scene down`}
                    className="rounded p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-700 disabled:opacity-30 dark:hover:bg-stone-700"
                  >
                    ▼
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Check / Submit button */}
      {state.phase === "playing" && (
        <button
          type="button"
          onClick={handleCheck}
          className="mx-auto mt-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          aria-label="Check your story order"
        >
          Check Order ✓
        </button>
      )}

      {/* Feedback text */}
      {state.phase === "feedback" && (
        <div className="text-center" aria-live="assertive">
          {state.isCorrect ? (
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-300">
              ✅ Perfect sequence!
            </p>
          ) : (
            <p className="text-lg font-bold text-red-600 dark:text-red-300">
              Not quite — the correct order is shown by the numbers
            </p>
          )}
        </div>
      )}
    </div>
  );
}
