"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Zap, RotateCcw, Trophy, Timer, CheckCircle, XCircle } from "lucide-react";
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
type Op = "+" | "−" | "×" | "÷";

interface Equation {
  text: string;
  answer: number;
  shown: number; // what we display (may be wrong)
  isCorrect: boolean;
}

const OPS: Op[] = ["+", "−", "×", "÷"];
const GAME_DURATION_MS = 60_000;
const MAX_SCORE = 30;

function generateEquation(): Equation {
  const op = OPS[Math.floor(Math.random() * OPS.length)];
  let a: number, b: number, answer: number;

  switch (op) {
    case "+":
      a = Math.floor(Math.random() * 50) + 1;
      b = Math.floor(Math.random() * 50) + 1;
      answer = a + b;
      break;
    case "−":
      a = Math.floor(Math.random() * 50) + 10;
      b = Math.floor(Math.random() * a) + 1;
      answer = a - b;
      break;
    case "×":
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      answer = a * b;
      break;
    case "÷":
      b = Math.floor(Math.random() * 11) + 2;
      answer = Math.floor(Math.random() * 12) + 1;
      a = b * answer;
      break;
    default:
      a = 1;
      b = 1;
      answer = 2;
  }

  const isCorrect = Math.random() > 0.4; // 60% correct
  let shown = answer;
  if (!isCorrect) {
    const offset = Math.floor(Math.random() * 10) + 1;
    shown = Math.random() > 0.5 ? answer + offset : Math.max(0, answer - offset);
    if (shown === answer) shown = answer + 1;
  }

  return {
    text: `${a} ${op} ${b} = ${shown}`,
    answer,
    shown,
    isCorrect,
  };
}

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  equations: Equation[];
  currentIndex: number;
  correct: number;
  wrong: number;
  streak: number;
  bestStreak: number;
  startTime: number;
  elapsed: number;
}

type Action =
  | { type: "START" }
  | { type: "ANSWER"; userSaysCorrect: boolean }
  | { type: "TICK"; now: number }
  | { type: "RESET" };

function init(): State {
  const eqs: Equation[] = [];
  for (let i = 0; i < 100; i++) eqs.push(generateEquation());
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    equations: eqs,
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    bestStreak: 0,
    startTime: 0,
    elapsed: 0,
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", startTime: Date.now() };
    case "ANSWER": {
      if (s.phase !== "playing") return s;
      const eq = s.equations[s.currentIndex];
      if (!eq) return { ...s, phase: "complete" };
      const isRight = a.userSaysCorrect === eq.isCorrect;
      const newStreak = isRight ? s.streak + 1 : 0;
      const newCorrect = s.correct + (isRight ? 1 : 0);
      const newWrong = s.wrong + (isRight ? 0 : 1);
      const nextIndex = s.currentIndex + 1;
      if (nextIndex >= s.equations.length) {
        return {
          ...s,
          correct: newCorrect,
          wrong: newWrong,
          streak: newStreak,
          bestStreak: Math.max(s.bestStreak, newStreak),
          currentIndex: nextIndex,
          phase: "complete",
        };
      }
      return {
        ...s,
        correct: newCorrect,
        wrong: newWrong,
        streak: newStreak,
        bestStreak: Math.max(s.bestStreak, newStreak),
        currentIndex: nextIndex,
      };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const elapsed = a.now - s.startTime;
      if (elapsed >= GAME_DURATION_MS) {
        return { ...s, elapsed: GAME_DURATION_MS, phase: "complete" };
      }
      return { ...s, elapsed };
    }
    case "RESET":
      return init();
    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameMathSprint() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* timer */
  useEffect(() => {
    if (s.phase === "playing") {
      timerRef.current = setInterval(() => dispatch({ type: "TICK", now: Date.now() }), 100);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [s.phase]);

  /* emit on complete */
  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "math-sprint",
        elapsedMs: s.elapsed,
        interactions: s.correct + s.wrong,
        score: s.correct,
        maxScore: MAX_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.elapsed, s.correct, s.wrong]);

  /* keyboard */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "f") {
        e.preventDefault();
        dispatch({ type: "ANSWER", userSaysCorrect: false });
        hapticSelection();
      } else if (e.key === "ArrowRight" || e.key === "j") {
        e.preventDefault();
        dispatch({ type: "ANSWER", userSaysCorrect: true });
        hapticSelection();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [s.phase]);

  const answer = useCallback(
    (userSaysCorrect: boolean) => {
      const eq = s.equations[s.currentIndex];
      if (!eq) return;
      const isRight = userSaysCorrect === eq.isCorrect;
      if (isRight) hapticSuccess();
      else hapticError();
      dispatch({ type: "ANSWER", userSaysCorrect });
    },
    [s.equations, s.currentIndex],
  );

  const timeLeft = Math.max(0, GAME_DURATION_MS - s.elapsed);
  const timeLeftSec = Math.ceil(timeLeft / 1000);
  const timePct = (timeLeft / GAME_DURATION_MS) * 100;

  const stars = useMemo(() => {
    if (s.correct >= 25) return 3;
    if (s.correct >= 15) return 2;
    if (s.correct >= 5) return 1;
    return 0;
  }, [s.correct]);

  const eq = s.equations[s.currentIndex];

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-orange-50 to-amber-50 p-6 dark:from-orange-950/40 dark:to-amber-950/30">
      {/* header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-orange-500" aria-hidden />
          <h2 className="text-xl font-bold text-orange-700 dark:text-orange-300">Math Sprint</h2>
        </div>
        <MascotFriend id="spark" mood="happy" size="sm" />
      </div>

      {/* ─── ready ─── */}
      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col items-center gap-6 text-center"
        >
          <p className="text-lg text-orange-700 dark:text-orange-300">
            60 seconds — is the equation <span className="font-bold text-green-600">TRUE</span> or{" "}
            <span className="font-bold text-red-500">FALSE</span>?
          </p>
          <p className="text-sm text-orange-500 dark:text-orange-400">
            Keyboard: <kbd className="rounded bg-white/70 px-1 dark:bg-white/10">←</kbd> False /{" "}
            <kbd className="rounded bg-white/70 px-1 dark:bg-white/10">→</kbd> True
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Sprint!
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── playing ─── */}
      {s.phase === "playing" && eq && (
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          {/* timer bar */}
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="h-full rounded-full bg-orange-500"
              style={{ width: `${timePct}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex w-full items-center justify-between text-sm text-orange-600 dark:text-orange-400">
            <span className="flex items-center gap-1">
              <Timer className="h-4 w-4" /> {timeLeftSec}s
            </span>
            <span>
              ✅ {s.correct} / ❌ {s.wrong} / 🔥 {s.streak}
            </span>
          </div>

          {/* equation card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={s.currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="flex min-h-[120px] w-full items-center justify-center rounded-2xl bg-white text-3xl font-bold text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white sm:text-4xl"
            >
              {eq.text}
            </motion.div>
          </AnimatePresence>

          {/* answer buttons */}
          <div className="flex w-full gap-4">
            <PhysicalButton
              variant="danger"
              onClick={() => answer(false)}
              className="flex-1 py-6 text-lg"
            >
              <XCircle className="mr-2 h-6 w-6" /> FALSE
            </PhysicalButton>
            <PhysicalButton
              variant="success"
              onClick={() => answer(true)}
              className="flex-1 py-6 text-lg"
            >
              <CheckCircle className="mr-2 h-6 w-6" /> TRUE
            </PhysicalButton>
          </div>
        </div>
      )}

      {/* ─── complete ─── */}
      {s.phase === "complete" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-4 text-center"
        >
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">Time's Up!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}
            {"☆".repeat(3 - stars)}
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-xl bg-white/70 p-4 text-sm dark:bg-white/10">
            <div>
              <p className="font-semibold text-green-600">Correct</p>
              <p className="text-2xl font-bold">{s.correct}</p>
            </div>
            <div>
              <p className="font-semibold text-red-500">Wrong</p>
              <p className="text-2xl font-bold">{s.wrong}</p>
            </div>
            <div>
              <p className="font-semibold text-orange-600">Best Streak</p>
              <p className="text-2xl font-bold">{s.bestStreak}</p>
            </div>
            <div>
              <p className="font-semibold text-orange-600">Total</p>
              <p className="text-2xl font-bold">{s.correct + s.wrong}</p>
            </div>
          </div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> Sprint Again
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
