"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Divide, RotateCcw } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import { useMascot } from "@/components/experience/MascotHost";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";
type Choice = "left" | "right" | "equal";

type FractionPair = {
  leftNum: number;
  leftDen: number;
  rightNum: number;
  rightDen: number;
  answer: Choice;
};

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function buildPair(level: number): FractionPair {
  const span = Math.min(9, 3 + Math.floor(level / 4));
  const leftDen = 2 + ((level * 3) % (span + 4));
  const rightDen = 2 + ((level * 5) % (span + 4));
  const leftNum = 1 + ((level * 7) % (leftDen - 1 || 1));
  const rightNum = 1 + ((level * 11) % (rightDen - 1 || 1));

  const leftValue = leftNum / leftDen;
  const rightValue = rightNum / rightDen;

  let answer: Choice = "equal";
  if (Math.abs(leftValue - rightValue) < 0.0001) answer = "equal";
  else answer = leftValue > rightValue ? "left" : "right";

  return { leftNum, leftDen, rightNum, rightDen, answer };
}

function simplify(num: number, den: number): string {
  const factor = gcd(num, den);
  return `${num / factor}/${den / factor}`;
}

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

export default function FractionFactory() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const sessionIdRef = useRef<string>(createLegacySessionId());
  const runStartedAtRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);
  const completionEmittedRef = useRef<boolean>(false);

  const resetRunTracking = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    runStartedAtRef.current = getTimestampMs();
    interactionCountRef.current = 0;
    completionEmittedRef.current = false;
  }, []);

  const pair = useMemo(() => buildPair(level), [level]);

  const start = () => {
    resetRunTracking();
    setPhase("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    setMood("happy");
    setMessage("Factory online. Compare fractions fast and accurately.");
    void hapticSelection();
  };

  const restart = () => {
    resetRunTracking();
    setPhase("ready");
    setLevel(1);
    setScore(0);
    setLives(3);
  };

  const choose = (choice: Choice) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;

    if (choice === pair.answer) {
      setScore((value) => value + 10 + Math.min(20, level));
      setLevel((value) => value + 1);
      setMood("cheering");
      setMessage("Correct ratio decision.");
      void hapticSuccess();
      return;
    }

    const nextLives = lives - 1;
    setLives(nextLives);
    setLevel((value) => value + 1);
    setMood("sad");
    setMessage(`Missed. Correct answer: ${pair.answer.toUpperCase()}.`);
    void hapticError();

    if (nextLives <= 0) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "fraction-factory",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 4000,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("complete");
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-amber-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.28)_0%,transparent_60%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between text-sm">
          <p className="font-black uppercase tracking-[0.22em] text-amber-200">Fraction Factory</p>
          <p className="font-bold">Level {level} | Lives {lives} | Score {score}</p>
        </div>

        {phase === "playing" ? (
          <div className="rounded-3xl border border-white/15 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">Which value is greater?</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <FractionCard label="Left" num={pair.leftNum} den={pair.leftDen} />
              <FractionCard label="Right" num={pair.rightNum} den={pair.rightDen} />
            </div>

            <p className="mt-4 text-xs text-zinc-300">
              Simplified forms: {simplify(pair.leftNum, pair.leftDen)} and {simplify(pair.rightNum, pair.rightDen)}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => choose("left")}
                className="rounded-2xl border border-amber-200/25 bg-amber-500/20 py-3 font-black hover:bg-amber-500/30"
              >
                Left Greater
              </button>
              <button
                type="button"
                onClick={() => choose("equal")}
                className="rounded-2xl border border-amber-200/25 bg-amber-500/20 py-3 font-black hover:bg-amber-500/30"
              >
                Equal
              </button>
              <button
                type="button"
                onClick={() => choose("right")}
                className="rounded-2xl border border-amber-200/25 bg-amber-500/20 py-3 font-black hover:bg-amber-500/30"
              >
                Right Greater
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {phase === "ready" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-amber-950/93 p-6 text-center"
          >
            <div className="space-y-5">
              <Divide className="mx-auto h-12 w-12 text-amber-200" />
              <h3 className="text-4xl font-black text-amber-200">Ratio Run</h3>
              <p className="max-w-md text-sm text-zinc-300">Endless fraction comparison rounds for fast math judgment.</p>
              <PhysicalButton
                onClick={start}
                className="h-12 rounded-2xl border border-amber-300/30 bg-amber-500/25 px-8 font-black text-amber-100"
              >
                Start
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}

        {phase === "complete" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-amber-950/94 p-6 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-amber-200">Factory Complete</h3>
              <p className="text-sm text-zinc-300">Final score {score} after level {level}.</p>
              <PhysicalButton
                onClick={restart}
                className="h-12 rounded-2xl border border-amber-300/30 bg-amber-500/25 px-8 font-black text-amber-100"
              >
                <span className="inline-flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Restart
                </span>
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function FractionCard({ label, num, den }: { label: string; num: number; den: number }) {
  return (
    <div className="rounded-2xl border border-amber-200/20 bg-amber-500/10 p-4 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">{label}</p>
      <p className="mt-3 text-4xl font-black">{num}</p>
      <div className="mx-auto my-2 h-0.5 w-12 bg-amber-200/60" />
      <p className="text-4xl font-black">{den}</p>
    </div>
  );
}
