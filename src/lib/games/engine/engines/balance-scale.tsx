/* -------------------------------------------------------------------------- */
/*  Balance-Scale Engine — Balance math equations / quantities                */
/*  Drag weights to balance both sides (algebra concepts)                    */
/* -------------------------------------------------------------------------- */
"use client";

/* eslint-disable react-hooks/purity, react-hooks/refs -- engine loop uses mutable refs and mount timestamps intentionally. */

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type BalanceProblem = {
  leftSide: { emoji: string; label: string; value: number }[];
  availableWeights: { emoji: string; label: string; value: number }[];
  targetSum: number;
};

export type BalanceScaleConfig = {
  title: string;
  problems: BalanceProblem[];
  infiniteMode?: boolean;
};

type Props = {
  config: BalanceScaleConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { problemCount: number; timeLimit: number }> = {
  easy:   { problemCount: 6,  timeLimit: 120_000 },
  medium: { problemCount: 10, timeLimit: 120_000 },
  hard:   { problemCount: 15, timeLimit: 120_000 },
};


export function BalanceScaleEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const problems = useRef(shuffle(config.problems).slice(0, settings.problemCount));
  const [probIdx, setProbIdx] = useState(0);
  const [rightSide, setRightSide] = useState<{ emoji: string; label: string; value: number }[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "checking" | "complete">("playing");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  const problem = problems.current[probIdx];
  const leftSum = problem?.leftSide.reduce((s, w) => s + w.value, 0) ?? 0;
  const rightSum = rightSide.reduce((s, w) => s + w.value, 0);
  const diff = leftSum - rightSum;
  const balanced = diff === 0;

  // Timer
  useEffect(() => {
    if (phase === "complete") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  const addWeight = useCallback(
    (weight: { emoji: string; label: string; value: number }) => {
      if (phase !== "playing") return;
      setRightSide((prev) => [...prev, weight]);
    },
    [phase],
  );

  const removeWeight = useCallback(
    (index: number) => {
      if (phase !== "playing") return;
      setRightSide((prev) => prev.filter((_, i) => i !== index));
    },
    [phase],
  );

  const checkBalance = useCallback(() => {
    if (phase !== "playing") return;
    setPhase("checking");

    setTimeout(() => {
      if (balanced) {
        setScore((s) => s + 150 + streak * 30);
        setStreak((s) => s + 1);
        setFeedback("✓ Perfectly balanced!");

        setTimeout(() => {
          const nextIdx = probIdx + 1;
          if (nextIdx >= problems.current.length) {
            if (config.infiniteMode) {
              problems.current = shuffle(config.problems);
              setProbIdx(0);
              setLevel((l) => l + 1);
            } else {
              setPhase("complete");
              return;
            }
          } else {
            setProbIdx(nextIdx);
          }
          setRightSide([]);
          setFeedback(null);
          setPhase("playing");
        }, 1200);
      } else {
        setStreak(0);
        setFeedback(diff > 0 ? "Too light! Add more →" : "Too heavy! Remove some →");
        setTimeout(() => {
          setFeedback(null);
          setPhase("playing");
        }, 1200);
      }
    }, 800);
  }, [phase, balanced, diff, streak, probIdx, config.infiniteMode]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = problems.current.length * 200;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  if (!problem) {
    return <div className="p-8 text-center text-stone-400">No problems available</div>;
  }

  const pct = timeLeft / settings.timeLimit;
  const tilt = Math.max(-20, Math.min(20, diff * 3)); // visual tilt

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Q{probIdx + 1}/{problems.current.length}</span>
        <span>Score: {score}</span>
        {streak > 1 && <span className="text-amber-500">🔥 {streak}</span>}
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`rounded-full px-4 py-1 text-sm font-bold ${
              balanced ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
            }`}
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scale visualization */}
      <div className="relative w-full">
        {/* Fulcrum */}
        <div className="mx-auto h-8 w-4 bg-stone-400 rounded-b-full" />

        {/* Beam */}
        <motion.div
          animate={{ rotate: tilt }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative mx-auto flex h-12 w-72 items-end justify-between rounded-t-lg bg-stone-300"
          style={{ transformOrigin: "center top" }}
        >
          {/* Left pan */}
          <div className="flex min-h-16 w-28 flex-wrap items-end justify-center gap-1 rounded-b-xl bg-sky-100 p-2 shadow-inner">
            {problem.leftSide.map((w, i) => (
              <span key={i} className="text-xl" title={`${w.label} (${w.value})`}>
                {w.emoji}
              </span>
            ))}
            <p className="w-full text-center text-[10px] font-bold text-sky-600">= {leftSum}</p>
          </div>

          {/* Right pan */}
          <div className="flex min-h-16 w-28 flex-wrap items-end justify-center gap-1 rounded-b-xl bg-amber-100 p-2 shadow-inner">
            {rightSide.map((w, i) => (
              <button
                key={i}
                type="button"
                onClick={() => removeWeight(i)}
                className="text-xl hover:opacity-60 transition"
                title={`Remove ${w.label}`}
              >
                {w.emoji}
              </button>
            ))}
            <p className="w-full text-center text-[10px] font-bold text-amber-600">= {rightSum}</p>
          </div>
        </motion.div>
      </div>

      {/* Available weights */}
      <div className="w-full">
        <h4 className="text-xs font-bold text-stone-500 mb-1">Available weights (tap to add):</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {problem.availableWeights.map((w, i) => (
            <button
              key={i}
              type="button"
              onClick={() => addWeight(w)}
              className="flex items-center gap-1 rounded-xl bg-white px-3 py-2 shadow-md transition hover:bg-stone-50"
            >
              <span className="text-xl">{w.emoji}</span>
              <span className="text-xs font-semibold text-stone-600">{w.label} ({w.value})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Check button */}
      <button
        type="button"
        onClick={checkBalance}
        disabled={phase !== "playing" || rightSide.length === 0}
        className="rounded-full bg-sky-500 px-6 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-sky-600 disabled:opacity-40"
      >
        ⚖️ Check Balance
      </button>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(score, problems.current.length * 200))}</p>
          <p className="mt-1 font-bold text-stone-700">{score} pts</p>
        </motion.div>
      )}
    </div>
  );
}



