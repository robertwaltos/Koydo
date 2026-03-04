"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */

type Phase = "ready" | "showing" | "input" | "complete";
type PadColor = "red" | "blue" | "green" | "yellow";

const PAD_COLORS: PadColor[] = ["red", "blue", "green", "yellow"];
const SHOW_DELAY_MS = 600;
const MAX_SCORE = 2000;

const PAD_STYLES: Record<PadColor, { base: string; active: string; label: string }> = {
  red: {
    base: "bg-red-600 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-600",
    active: "bg-red-400 dark:bg-red-400 scale-105 shadow-lg shadow-red-400/40",
    label: "Red",
  },
  blue: {
    base: "bg-blue-600 dark:bg-blue-700 hover:bg-blue-500 dark:hover:bg-blue-600",
    active: "bg-blue-400 dark:bg-blue-400 scale-105 shadow-lg shadow-blue-400/40",
    label: "Blue",
  },
  green: {
    base: "bg-green-600 dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600",
    active: "bg-green-400 dark:bg-green-400 scale-105 shadow-lg shadow-green-400/40",
    label: "Green",
  },
  yellow: {
    base: "bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-400 dark:hover:bg-yellow-500",
    active: "bg-yellow-300 dark:bg-yellow-300 scale-105 shadow-lg shadow-yellow-300/40",
    label: "Yellow",
  },
};

/* ─── types ─── */

interface State {
  phase: Phase;
  sequence: PadColor[];
  inputIndex: number;
  round: number;
  activePad: PadColor | null;
  totalClicks: number;
}

type Action =
  | { type: "START" }
  | { type: "BEGIN_SHOWING" }
  | { type: "HIGHLIGHT_PAD"; pad: PadColor }
  | { type: "CLEAR_HIGHLIGHT" }
  | { type: "BEGIN_INPUT" }
  | { type: "PAD_PRESS"; pad: PadColor }
  | { type: "ROUND_COMPLETE" }
  | { type: "GAME_OVER" };

/* ─── helpers ─── */

function randomPad(): PadColor {
  return PAD_COLORS[Math.floor(Math.random() * PAD_COLORS.length)]!;
}

function calcStars(round: number): number {
  if (round >= 10) return 3;
  if (round >= 6) return 2;
  if (round >= 3) return 1;
  return 0;
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      const firstPad = randomPad();
      return {
        phase: "showing",
        sequence: [firstPad],
        inputIndex: 0,
        round: 1,
        activePad: null,
        totalClicks: 0,
      };
    }
    case "BEGIN_SHOWING":
      return { ...state, phase: "showing", inputIndex: 0 };
    case "HIGHLIGHT_PAD":
      return { ...state, activePad: action.pad };
    case "CLEAR_HIGHLIGHT":
      return { ...state, activePad: null };
    case "BEGIN_INPUT":
      return { ...state, phase: "input", activePad: null, inputIndex: 0 };
    case "PAD_PRESS": {
      if (state.phase !== "input") return state;
      const expected = state.sequence[state.inputIndex];
      if (action.pad !== expected) {
        return { ...state, phase: "complete", activePad: null, totalClicks: state.totalClicks + 1 };
      }
      const nextIndex = state.inputIndex + 1;
      if (nextIndex >= state.sequence.length) {
        return {
          ...state,
          inputIndex: nextIndex,
          activePad: action.pad,
          totalClicks: state.totalClicks + 1,
        };
      }
      return {
        ...state,
        inputIndex: nextIndex,
        activePad: action.pad,
        totalClicks: state.totalClicks + 1,
      };
    }
    case "ROUND_COMPLETE": {
      const nextPad = randomPad();
      return {
        ...state,
        phase: "showing",
        sequence: [...state.sequence, nextPad],
        round: state.round + 1,
        inputIndex: 0,
        activePad: null,
      };
    }
    case "GAME_OVER":
      return { ...state, phase: "complete", activePad: null };
    default:
      return state;
  }
}

/* ─── component ─── */

export default function GameSimon() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const showingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    sequence: [],
    inputIndex: 0,
    round: 0,
    activePad: null,
    totalClicks: 0,
  });

  /* ─── showing sequence playback ─── */

  useEffect(() => {
    if (state.phase !== "showing") return;

    let stepIndex = 0;
    let cancelled = false;

    function playStep(): void {
      if (cancelled) return;

      if (stepIndex >= state.sequence.length) {
        dispatch({ type: "BEGIN_INPUT" });
        return;
      }

      const pad = state.sequence[stepIndex]!;
      dispatch({ type: "HIGHLIGHT_PAD", pad });

      showingTimerRef.current = setTimeout(() => {
        if (cancelled) return;
        dispatch({ type: "CLEAR_HIGHLIGHT" });

        showingTimerRef.current = setTimeout(() => {
          if (cancelled) return;
          stepIndex++;
          playStep();
        }, 200);
      }, SHOW_DELAY_MS);
    }

    const initialDelay = setTimeout(() => {
      if (!cancelled) playStep();
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(initialDelay);
      if (showingTimerRef.current) clearTimeout(showingTimerRef.current);
    };
  }, [state.phase, state.sequence.length]);

  /* ─── handle successful round ─── */

  useEffect(() => {
    if (state.phase !== "input") return;
    if (state.inputIndex < state.sequence.length) return;

    hapticSuccess();
    const timer = setTimeout(() => {
      dispatch({ type: "ROUND_COMPLETE" });
    }, 500);

    return () => clearTimeout(timer);
  }, [state.phase, state.inputIndex, state.sequence.length]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;

    const stars = calcStars(state.round);
    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Amazing memory!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Good effort!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep practising!");
    }

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-simon",
      score: state.round * 100,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: state.totalClicks,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.round, state.totalClicks, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Watch the pattern!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── pad press ─── */

  const handlePadPress = useCallback(
    (pad: PadColor) => {
      if (state.phase !== "input") return;
      hapticSelection();
      dispatch({ type: "PAD_PRESS", pad });
    },
    [state.phase],
  );

  /* ─── clear active highlight after player tap ─── */

  useEffect(() => {
    if (state.phase !== "input" || state.activePad === null) return;
    const timer = setTimeout(() => dispatch({ type: "CLEAR_HIGHLIGHT" }), 250);
    return () => clearTimeout(timer);
  }, [state.phase, state.activePad, state.totalClicks]);

  /* ─── keyboard support ─── */

  useEffect(() => {
    function onKey(e: KeyboardEvent): void {
      if (state.phase !== "input") return;
      const map: Record<string, PadColor> = {
        "1": "red",
        "2": "blue",
        "3": "green",
        "4": "yellow",
        q: "red",
        w: "blue",
        a: "green",
        s: "yellow",
      };
      const pad = map[e.key];
      if (pad) {
        e.preventDefault();
        handlePadPress(pad);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase, handlePadPress]);

  const stars = calcStars(state.round);

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Simon Says
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Round {state.round}
            {state.phase === "showing" && " · Watch carefully..."}
            {state.phase === "input" && " · Your turn!"}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section
            key="ready"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <MascotFriend id="luna" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Watch the pattern, then repeat it!
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <Gamepad2 className="mr-2 inline h-4 w-4" /> Start Game
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── SHOWING / INPUT ─── */}
        {(state.phase === "showing" || state.phase === "input") && (
          <motion.section
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {/* Pad grid */}
            <div
              className="mx-auto grid max-w-xs grid-cols-2 gap-3 rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-4 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              role="grid"
              aria-label="Simon pads"
            >
              {(["red", "blue", "green", "yellow"] as const).map((color) => {
                const isActive = state.activePad === color;
                const style = PAD_STYLES[color];
                const isDisabled = state.phase === "showing";

                return (
                  <button
                    key={color}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handlePadPress(color)}
                    className={`aspect-square rounded-2xl transition-all duration-150 ${
                      isActive ? style.active : style.base
                    } ${isDisabled ? "cursor-not-allowed opacity-80" : "cursor-pointer active:scale-95"}`}
                    aria-label={style.label}
                    role="gridcell"
                  />
                );
              })}
            </div>

            {/* Phase indicator */}
            <p className="mt-3 text-center text-xs font-semibold text-indigo-500 dark:text-indigo-400">
              {state.phase === "showing"
                ? `Showing ${state.sequence.length} pad${state.sequence.length !== 1 ? "s" : ""}...`
                : `Tap ${state.inputIndex} / ${state.sequence.length}`}
            </p>

            {/* Keyboard hint (desktop) */}
            <p className="mt-1 hidden text-center text-xs text-indigo-400/60 dark:text-indigo-500/60 sm:block">
              Keys: Q = Red · W = Blue · A = Green · S = Yellow
            </p>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30"
          >
            <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
              {stars >= 2 ? "Amazing!" : "Game Over"}
            </div>
            <div className="flex justify-center">
              <MascotFriend id="luna" mood={stars >= 2 ? "cheering" : "thinking"} size="lg" />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{
                    scale: i < stars ? 1 : 0.5,
                    rotate: 0,
                    opacity: i < stars ? 1 : 0.3,
                  }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  className="text-5xl"
                >
                  &#11088;
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
              Reached Round {state.round} · Score {state.round * 100}
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
