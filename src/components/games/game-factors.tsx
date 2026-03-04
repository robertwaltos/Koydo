"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Divide, RotateCcw, Trophy, Timer } from "lucide-react";
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

type Phase = "ready" | "playing" | "feedback" | "complete";

const ROUND_TIME_MS = 15_000; // 15 s per round
const TOTAL_ROUNDS = 10;
const MAX_SCORE = TOTAL_ROUNDS * 100;

/** generate a number that has interesting factors */
function randomTarget(): number {
  // Composite numbers between 12 and 120
  const composites = [
    12, 15, 16, 18, 20, 24, 28, 30, 32, 36, 40, 42, 45, 48, 50, 54, 56, 60, 63,
    64, 70, 72, 75, 80, 84, 90, 96, 100, 108, 112, 120,
  ];
  return composites[Math.floor(Math.random() * composites.length)];
}

/** all factors of n (ascending) */
function getFactors(n: number): number[] {
  const f: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) f.push(i);
  }
  return f;
}

/* ─── state ─── */

interface RoundResult {
  target: number;
  correctFactors: number[];
  selectedFactors: number[];
  score: number; // 0-100
}

interface State {
  phase: Phase;
  sessionId: string;
  round: number; // 0-indexed
  target: number;
  factors: number[]; // correct factors
  options: number[]; // displayed button options
  selected: Set<number>;
  roundScore: number;
  totalScore: number;
  results: RoundResult[];
  roundStartTime: number;
  elapsed: number;
  interactions: number;
}

type Action =
  | { type: "START" }
  | { type: "TOGGLE"; value: number }
  | { type: "SUBMIT" }
  | { type: "NEXT_ROUND" }
  | { type: "TICK"; now: number }
  | { type: "RESET" };

function buildRound() {
  const target = randomTarget();
  const factors = getFactors(target);
  // Build options: all factors + some non-factors
  const optionSet = new Set(factors);
  while (optionSet.size < Math.min(12, target)) {
    const candidate = Math.floor(Math.random() * target) + 1;
    optionSet.add(candidate);
  }
  const options = Array.from(optionSet).sort((a, b) => a - b);
  return { target, factors, options };
}

function init(): State {
  const { target, factors, options } = buildRound();
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    round: 0,
    target,
    factors,
    options,
    selected: new Set(),
    roundScore: 0,
    totalScore: 0,
    results: [],
    roundStartTime: 0,
    elapsed: 0,
    interactions: 0,
  };
}

function scoreRound(factors: number[], selected: Set<number>): number {
  const correctSet = new Set(factors);
  let right = 0;
  let wrong = 0;
  for (const s of selected) {
    if (correctSet.has(s)) right++;
    else wrong++;
  }
  const missed = factors.length - right;
  const raw = Math.max(0, right - wrong - missed);
  return Math.round((raw / factors.length) * 100);
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const st = init();
      return { ...st, phase: "playing", roundStartTime: Date.now() };
    }
    case "TOGGLE": {
      if (s.phase !== "playing") return s;
      const next = new Set(s.selected);
      if (next.has(a.value)) next.delete(a.value);
      else next.add(a.value);
      return { ...s, selected: next, interactions: s.interactions + 1 };
    }
    case "SUBMIT": {
      if (s.phase !== "playing") return s;
      const roundScore = scoreRound(s.factors, s.selected);
      const result: RoundResult = {
        target: s.target,
        correctFactors: s.factors,
        selectedFactors: Array.from(s.selected),
        score: roundScore,
      };
      return {
        ...s,
        phase: "feedback",
        roundScore,
        totalScore: s.totalScore + roundScore,
        results: [...s.results, result],
        interactions: s.interactions + 1,
      };
    }
    case "NEXT_ROUND": {
      const nextRound = s.round + 1;
      if (nextRound >= TOTAL_ROUNDS) {
        return { ...s, phase: "complete", round: nextRound };
      }
      const { target, factors, options } = buildRound();
      return {
        ...s,
        phase: "playing",
        round: nextRound,
        target,
        factors,
        options,
        selected: new Set(),
        roundScore: 0,
        roundStartTime: Date.now(),
        elapsed: 0,
      };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const elapsed = a.now - s.roundStartTime;
      if (elapsed >= ROUND_TIME_MS) {
        // auto-submit on time out
        const roundScore = scoreRound(s.factors, s.selected);
        const result: RoundResult = {
          target: s.target,
          correctFactors: s.factors,
          selectedFactors: Array.from(s.selected),
          score: roundScore,
        };
        return {
          ...s,
          phase: "feedback",
          elapsed: ROUND_TIME_MS,
          roundScore,
          totalScore: s.totalScore + roundScore,
          results: [...s.results, result],
        };
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

export default function GameFactors() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (s.phase === "playing") {
      timerRef.current = setInterval(() => dispatch({ type: "TICK", now: Date.now() }), 100);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [s.phase, s.round]);

  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "factors",
        elapsedMs: Date.now() - s.roundStartTime + s.round * ROUND_TIME_MS,
        interactions: s.interactions,
        score: s.totalScore,
        maxScore: MAX_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.totalScore, s.interactions, s.roundStartTime, s.round]);

  const toggle = useCallback(
    (v: number) => {
      hapticSelection();
      dispatch({ type: "TOGGLE", value: v });
    },
    [],
  );

  const submit = useCallback(() => {
    hapticSuccess();
    dispatch({ type: "SUBMIT" });
  }, []);

  const timePct = Math.max(0, 100 - (s.elapsed / ROUND_TIME_MS) * 100);

  const stars = useMemo(() => {
    const avg = s.totalScore / TOTAL_ROUNDS;
    if (avg >= 80) return 3;
    if (avg >= 50) return 2;
    if (avg >= 20) return 1;
    return 0;
  }, [s.totalScore]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-indigo-50 to-purple-50 p-6 dark:from-indigo-950/40 dark:to-purple-950/30">
      {/* header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Divide className="h-6 w-6 text-indigo-500" aria-hidden />
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">Factors</h2>
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
          <p className="max-w-sm text-lg text-indigo-700 dark:text-indigo-300">
            Find all the <span className="font-bold">factors</span> of each number.
            {" "}You have 15 seconds per round!
          </p>
          <p className="text-sm text-indigo-500">
            {TOTAL_ROUNDS} rounds · Tap all numbers that divide evenly
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Game
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── playing ─── */}
      {s.phase === "playing" && (
        <div className="flex w-full flex-1 flex-col items-center gap-3">
          {/* status */}
          <div className="flex w-full items-center justify-between text-sm text-indigo-600 dark:text-indigo-400">
            <span>
              Round {s.round + 1}/{TOTAL_ROUNDS}
            </span>
            <span className="flex items-center gap-1">
              <Timer className="h-4 w-4" />
              {Math.ceil((ROUND_TIME_MS - s.elapsed) / 1000)}s
            </span>
            <span>Score: {s.totalScore}</span>
          </div>

          {/* timer bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="h-full rounded-full bg-indigo-500"
              style={{ width: `${timePct}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* target */}
          <p className="text-center text-lg text-indigo-700 dark:text-indigo-300">
            Find all factors of:
          </p>
          <motion.div
            key={s.target}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-600 text-3xl font-bold text-white shadow-lg"
          >
            {s.target}
          </motion.div>

          {/* options grid */}
          <div className="grid w-full grid-cols-4 gap-2 sm:grid-cols-6">
            {s.options.map((n) => (
              <motion.button
                key={n}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(n)}
                className={`rounded-xl border-2 px-3 py-3 text-lg font-semibold transition-colors ${
                  s.selected.has(n)
                    ? "border-indigo-500 bg-indigo-500 text-white"
                    : "border-gray-300 bg-white text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                }`}
                aria-pressed={s.selected.has(n)}
                aria-label={`${n}`}
              >
                {n}
              </motion.button>
            ))}
          </div>

          <PhysicalButton variant="success" onClick={submit} className="mt-2 w-full">
            Submit
          </PhysicalButton>
        </div>
      )}

      {/* ─── feedback ─── */}
      {s.phase === "feedback" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex w-full flex-1 flex-col items-center gap-4"
        >
          <p className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
            Round Score: {s.roundScore}/100
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {s.factors.map((f) => {
              const hit = s.selected.has(f);
              return (
                <span
                  key={f}
                  className={`rounded-lg px-3 py-1 text-sm font-semibold ${
                    hit
                      ? "bg-green-500 text-white"
                      : "bg-red-200 text-red-700 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {f} {hit ? "✓" : "✗"}
                </span>
              );
            })}
          </div>
          <p className="text-sm text-indigo-500">
            Correct factors of {s.target}:{" "}
            {s.factors.join(", ")}
          </p>
          <PhysicalButton
            variant="primary"
            onClick={() => {
              hapticSelection();
              dispatch({ type: "NEXT_ROUND" });
            }}
          >
            {s.round + 1 >= TOTAL_ROUNDS ? "See Results" : "Next Round →"}
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── complete ─── */}
      {s.phase === "complete" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-4 text-center"
        >
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">All Done!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}
            {"☆".repeat(3 - stars)}
          </div>
          <p className="text-lg text-indigo-600 dark:text-indigo-400">
            Total Score: <span className="font-bold">{s.totalScore}</span> / {MAX_SCORE}
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> Play Again
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
