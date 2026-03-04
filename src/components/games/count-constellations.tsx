"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Star } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import { useMascot } from "@/components/experience/MascotHost";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";

type StarField = {
  count: number;
  positions: Array<{ x: number; y: number; size: number }>;
  options: number[];
};

function createStarField(level: number): StarField {
  const count = Math.min(22, 4 + (level % 12) + Math.floor(level / 6));
  const seed = level * 7919 + 17;
  let state = seed;
  const rand = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0xffffffff;
  };

  const positions = Array.from({ length: count }, () => ({
    x: 8 + Math.floor(rand() * 84),
    y: 10 + Math.floor(rand() * 75),
    size: 2 + Math.floor(rand() * 4),
  }));

  const deltas = [-2, -1, 1, 2].map((delta) => Math.max(1, count + delta));
  const options = [count, ...deltas.filter((value, index, array) => array.indexOf(value) === index)].slice(0, 4);
  const rotated = [...options.slice(level % options.length), ...options.slice(0, level % options.length)];

  return { count, positions, options: rotated };
}

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

export default function CountConstellations() {
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

  const field = useMemo(() => createStarField(level), [level]);

  const start = () => {
    resetRunTracking();
    setPhase("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    setMood("happy");
    setMessage("Constellation count mode active. Count stars quickly and accurately.");
    void hapticSelection();
  };

  const restart = () => {
    resetRunTracking();
    setPhase("ready");
    setLevel(1);
    setScore(0);
    setLives(3);
  };

  const submit = (value: number) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;

    if (value === field.count) {
      setScore((current) => current + 8 + Math.min(15, level));
      setLevel((current) => current + 1);
      setMood("cheering");
      setMessage("Accurate count locked.");
      void hapticSuccess();
      return;
    }

    const nextLives = lives - 1;
    setLives(nextLives);
    setLevel((current) => current + 1);
    setMood("sad");
    setMessage(`Missed count. Correct answer was ${field.count}.`);
    void hapticError();

    if (nextLives <= 0) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "count-constellations",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 3500,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("complete");
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-indigo-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.3)_0%,transparent_60%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between text-sm">
          <p className="font-black uppercase tracking-[0.22em] text-indigo-200">Count Constellations</p>
          <p className="font-bold">Level {level} | Lives {lives} | Score {score}</p>
        </div>

        {phase === "playing" ? (
          <div className="rounded-3xl border border-white/15 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">How many stars are visible?</p>
            <div className="relative mt-4 h-64 rounded-2xl border border-indigo-200/20 bg-indigo-900/35">
              {field.positions.map((starPoint, index) => (
                <motion.span
                  key={`${level}-${index}`}
                  className="absolute rounded-full bg-indigo-100"
                  style={{
                    left: `${starPoint.x}%`,
                    top: `${starPoint.y}%`,
                    width: starPoint.size,
                    height: starPoint.size,
                  }}
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.2 + (index % 5) * 0.2, repeat: Infinity }}
                />
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {field.options.map((value) => (
                <button
                  key={`${level}-${value}`}
                  type="button"
                  onClick={() => submit(value)}
                  className="rounded-2xl border border-indigo-200/25 bg-indigo-500/20 py-3 text-lg font-black transition hover:bg-indigo-500/30"
                >
                  {value}
                </button>
              ))}
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
            className="absolute inset-0 z-20 flex items-center justify-center bg-indigo-950/93 p-6 text-center"
          >
            <div className="space-y-5">
              <Star className="mx-auto h-12 w-12 text-indigo-200" />
              <h3 className="text-4xl font-black text-indigo-200">Star Count</h3>
              <p className="max-w-md text-sm text-zinc-300">Endless constellation counting for attention and number sense.</p>
              <PhysicalButton
                onClick={start}
                className="h-12 rounded-2xl border border-indigo-300/30 bg-indigo-500/25 px-8 font-black text-indigo-100"
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
            className="absolute inset-0 z-20 flex items-center justify-center bg-indigo-950/94 p-6 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-indigo-200">Session Complete</h3>
              <p className="text-sm text-zinc-300">Final score {score} after level {level}.</p>
              <PhysicalButton
                onClick={restart}
                className="h-12 rounded-2xl border border-indigo-300/30 bg-indigo-500/25 px-8 font-black text-indigo-100"
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
