"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Keyboard, RotateCcw, Timer } from "lucide-react";
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

type Phase = "ready" | "playing" | "complete";
const TEST_DURATION_MS = 60_000; // 60 seconds
const MAX_SCORE = 10000;

/* child-safe sentences — short, simple, educational */
const SENTENCES = [
  "The quick brown fox jumps over the lazy dog near the river bank.",
  "A bright rainbow appeared after the gentle spring rain stopped.",
  "The dolphin leaped gracefully through the sparkling ocean waves.",
  "Small kittens love to chase colorful butterflies in the garden.",
  "The old castle stood tall on top of the misty green mountain.",
  "Maple trees turn brilliant shades of orange and red each autumn.",
  "A curious rabbit hopped through the meadow looking for clover.",
  "Stars twinkle brightly in the clear night sky above the forest.",
  "The friendly turtle slowly walked across the sandy beach at dawn.",
  "Children played happily in the park while birds sang sweet songs.",
  "The sunflower field stretched far beyond the old wooden fence.",
  "A gentle breeze carried the scent of fresh lavender across town.",
  "The library was filled with amazing books about faraway places.",
  "Penguins waddle together on the icy shore near the frozen sea.",
  "The baker made delicious bread with flour and fresh rosemary.",
  "A comet streaked across the sky leaving a trail of bright light.",
  "The river flowed calmly through the valley between green hills.",
  "Honey bees buzzed around the garden collecting sweet golden nectar.",
  "The musician played a beautiful melody on her wooden guitar.",
  "Snowflakes danced in the wind before landing on the frozen pond.",
  "The explorer found an ancient map hidden inside a dusty old book.",
  "A parrot with bright feathers sat on a branch eating juicy fruit.",
  "The scientist looked through her telescope at the distant planet.",
  "Waves crashed against the rocky cliff as seagulls circled above.",
  "The farmer picked ripe strawberries from the garden every morning.",
];

/* ─── helpers ─── */

function pickSentences(): string {
  const shuffled = [...SENTENCES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 8).join(" ");
}

/* ─── state ─── */

interface State {
  phase: Phase;
  text: string;
  typed: string;
  startTime: number;
  endTime: number;
  errors: number;
  correctChars: number;
}

type Action =
  | { type: "START" }
  | { type: "TYPE"; char: string }
  | { type: "BACKSPACE" }
  | { type: "TIMEOUT" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return { phase: "playing", text: pickSentences(), typed: "", startTime: Date.now(), endTime: 0, errors: 0, correctChars: 0 };
    case "TYPE": {
      if (state.phase !== "playing") return state;
      const idx = state.typed.length;
      if (idx >= state.text.length) return state;
      const correct = action.char === state.text[idx];
      const newTyped = state.typed + action.char;
      const newErrors = correct ? state.errors : state.errors + 1;
      const newCorrect = correct ? state.correctChars + 1 : state.correctChars;
      // auto-complete if we reach the end
      if (newTyped.length >= state.text.length) {
        return { ...state, typed: newTyped, errors: newErrors, correctChars: newCorrect, phase: "complete", endTime: Date.now() };
      }
      return { ...state, typed: newTyped, errors: newErrors, correctChars: newCorrect };
    }
    case "BACKSPACE": {
      if (state.phase !== "playing" || state.typed.length === 0) return state;
      return { ...state, typed: state.typed.slice(0, -1) };
    }
    case "TIMEOUT":
      return state.phase === "playing" ? { ...state, phase: "complete", endTime: Date.now() } : state;
    default:
      return state;
  }
}

/* ─── WPM calc ─── */

function calcWPM(correctChars: number, durationMs: number): number {
  if (durationMs <= 0) return 0;
  const minutes = durationMs / 60_000;
  const words = correctChars / 5; // standard: 5 chars = 1 word
  return Math.round(words / minutes);
}

function calcAccuracy(correctChars: number, totalTyped: number): number {
  if (totalTyped === 0) return 100;
  return Math.round((correctChars / totalTyped) * 100);
}

/* ─── stars ─── */

function calcStars(wpm: number, accuracy: number): number {
  if (wpm >= 50 && accuracy >= 95) return 3;
  if (wpm >= 30 && accuracy >= 85) return 2;
  if (wpm >= 15 && accuracy >= 70) return 1;
  return 0;
}

/* ─── component ─── */

export default function GameTypingSpeed() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [now, setNow] = useReducer(() => Date.now(), 0);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    text: "",
    typed: "",
    startTime: 0,
    endTime: 0,
    errors: 0,
    correctChars: 0,
  });

  /* ─── timer ─── */

  useEffect(() => {
    if (state.phase === "playing") {
      timerRef.current = setTimeout(() => dispatch({ type: "TIMEOUT" }), TEST_DURATION_MS);
      const tick = setInterval(() => setNow(), 250);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        clearInterval(tick);
      };
    }
  }, [state.phase]);

  /* ─── input handling ─── */

  useEffect(() => {
    if (state.phase === "playing") {
      inputRef.current?.focus();
    }
  }, [state.phase]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (state.phase !== "playing") return;
      if (e.key === "Backspace") {
        e.preventDefault();
        dispatch({ type: "BACKSPACE" });
        return;
      }
      if (e.key.length === 1) {
        e.preventDefault();
        dispatch({ type: "TYPE", char: e.key });
      }
    },
    [state.phase],
  );

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const duration = state.endTime - state.startTime;
    const wpm = calcWPM(state.correctChars, duration);
    const accuracy = calcAccuracy(state.correctChars, state.typed.length);
    const stars = calcStars(wpm, accuracy);
    if (stars >= 2) { hapticCelebration(); setMood("cheering"); setMessage(`${wpm} WPM! Speed demon!`); }
    else if (stars === 1) { hapticSuccess(); setMood("happy"); setMessage(`${wpm} WPM! Keep practicing!`); }
    else { hapticError(); setMood("thinking"); setMessage("Try to type a bit faster!"); }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-typing-speed",
      score: Math.min(MAX_SCORE, wpm * 100 + accuracy * 20),
      maxScore: MAX_SCORE,
      elapsedMs: duration,
      interactions: Math.max(1, state.typed.length),
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.endTime, state.startTime, state.correctChars, state.typed.length, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Type the text as fast and accurately as you can!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── derived ─── */

  const duration = state.phase === "complete"
    ? state.endTime - state.startTime
    : state.phase === "playing"
      ? now - state.startTime
      : 0;
  const remainingSec = Math.max(0, Math.ceil((TEST_DURATION_MS - duration) / 1000));
  const wpm = calcWPM(state.correctChars, duration);
  const accuracy = calcAccuracy(state.correctChars, state.typed.length);
  const stars = calcStars(wpm, accuracy);
  const cursorIdx = state.typed.length;

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-2xl flex-col items-center justify-center gap-4 px-4">
      {/* Hidden input for mobile keyboard */}
      <input
        ref={inputRef}
        type="text"
        className="sr-only"
        aria-label="Type here"
        onKeyDown={handleKeyDown}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />

      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-violet-900 dark:text-violet-100">
          <Keyboard className="h-6 w-6" /> Typing Speed
        </h2>
        {state.phase === "playing" && (
          <p className="mt-1 text-sm text-violet-600 dark:text-violet-300">
            <Timer className="mr-1 inline h-4 w-4" /> {remainingSec}s · {wpm} WPM · {accuracy}% accuracy
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="spark" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-violet-700 dark:text-violet-300">
              Type the shown text as fast and accurately as you can in 60 seconds!
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <Keyboard className="mr-2 inline h-4 w-4" /> Start Typing Test
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Timer bar */}
            <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-violet-200/40 dark:bg-violet-800/30">
              <motion.div
                className="h-full rounded-full bg-violet-500 dark:bg-violet-400"
                style={{ width: `${(remainingSec / 60) * 100}%` }}
                transition={{ duration: 0.25 }}
              />
            </div>

            {/* Text display */}
            <div className="rounded-2xl border border-violet-200/40 bg-white/70 p-4 font-mono text-base leading-relaxed tracking-wide dark:border-violet-800/40 dark:bg-black/40 sm:text-lg" aria-label="Text to type">
              {[...state.text].map((ch, i) => {
                let className = "text-slate-400 dark:text-slate-500"; // untyped
                if (i < cursorIdx) {
                  className = state.typed[i] === ch
                    ? "text-emerald-600 dark:text-emerald-400" // correct
                    : "text-rose-500 bg-rose-100/60 dark:text-rose-400 dark:bg-rose-900/30"; // wrong
                }
                if (i === cursorIdx) {
                  className += " border-b-2 border-violet-500 dark:border-violet-400";
                }
                return (
                  <span key={i} className={className}>
                    {ch}
                  </span>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-violet-200/40 bg-white/60 p-6 text-center dark:border-violet-800/40 dark:bg-black/30">
            <div className="mx-auto mb-4 w-fit rounded-full border border-violet-300/40 bg-violet-200/20 px-4 py-2 text-sm font-bold dark:border-violet-700/40 dark:bg-violet-800/20">
              ⌨️ Test Complete!
            </div>
            <div className="flex justify-center">
              <MascotFriend id="spark" mood={stars >= 2 ? "cheering" : "thinking"} size="lg" />
            </div>
            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-black text-violet-800 dark:text-violet-200">{wpm}</div>
                <div className="text-xs text-violet-500 dark:text-violet-400">WPM</div>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-700 dark:text-emerald-300">{accuracy}%</div>
                <div className="text-xs text-emerald-500 dark:text-emerald-400">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-black text-rose-700 dark:text-rose-300">{state.errors}</div>
                <div className="text-xs text-rose-500 dark:text-rose-400">Errors</div>
              </div>
            </div>
            {/* Stars */}
            <div className="mt-4 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }} transition={{ delay: i * 0.2, type: "spring" }} className="text-5xl">⭐</motion.div>
              ))}
            </div>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <RotateCcw className="mr-2 inline h-4 w-4" /> Try Again
              </PhysicalButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
