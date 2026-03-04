/* -------------------------------------------------------------------------- */
/*  Connect-Dots Engine — Connect numbered/labeled dots in order             */
/*  Tap dots in sequence to reveal a shape / answer                          */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type Dot = {
  id: string;
  x: number;        // 0-100 percentage
  y: number;        // 0-100 percentage
  label: string;    // displayed on dot (number, letter, word)
  order: number;    // correct sequence order (0-based)
  emoji?: string;
};

export type ConnectDotsChallenge = {
  title: string;
  emoji?: string;
  dots: Dot[];
  revealEmoji?: string; // shown when complete
  fact?: string;
};

export type ConnectDotsConfig = {
  title: string;
  challenges: ConnectDotsChallenge[];
  infiniteMode?: boolean;
};

type Props = {
  config: ConnectDotsConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { timeLimit: number; showOrder: boolean; tolerance: number }> = {
  easy:   { timeLimit: 180_000, showOrder: true,  tolerance: 2 },
  medium: { timeLimit: 150_000, showOrder: false, tolerance: 1 },
  hard:   { timeLimit: 120_000, showOrder: false, tolerance: 0 },
};

export function ConnectDotsEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const challenges = useRef(
    shuffle(config.challenges).slice(0, Math.min(config.challenges.length, 8)),
  );

  const [challengeIdx, setChallengeIdx] = useState(0);
  const [connected, setConnected] = useState<number[]>([]); // indices of dots connected so far
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "reveal" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showReveal, setShowReveal] = useState(false);
  const startTime = useRef(Date.now());

  const challenge = challenges.current[challengeIdx];

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

  const handleDotTap = useCallback(
    (dot: Dot) => {
      if (phase !== "playing" || !challenge) return;

      const nextOrder = connected.length;

      // Check if this is the correct next dot
      if (dot.order === nextOrder) {
        // Correct!
        setConnected((prev) => [...prev, nextOrder]);
        setStreak((s) => s + 1);
        setScore((s) => s + 10 + (streak >= 3 ? 5 : 0));

        // Check if all dots connected
        if (nextOrder === challenge.dots.length - 1) {
          // Challenge complete
          const timeBonus = Math.round(timeLeft / 1000);
          setScore((s) => s + 50 + timeBonus);
          setPhase("reveal");
          setShowReveal(true);

          setTimeout(() => {
            setShowReveal(false);
            if (challengeIdx + 1 < challenges.current.length) {
              setChallengeIdx((i) => i + 1);
              setConnected([]);
              setStreak(0);
              setPhase("playing");
            } else if (config.infiniteMode) {
              setLevel((l) => l + 1);
              challenges.current = shuffle(config.challenges);
              setChallengeIdx(0);
              setConnected([]);
              setStreak(0);
              setPhase("playing");
            } else {
              setPhase("complete");
            }
          }, 2500);
        }
      } else if (
        settings.tolerance > 0 &&
        Math.abs(dot.order - nextOrder) <= settings.tolerance
      ) {
        // Close enough, mild penalty
        setMistakes((m) => m + 1);
        setStreak(0);
      } else {
        // Wrong
        setMistakes((m) => m + 1);
        setStreak(0);
      }
    },
    [phase, challenge, connected, streak, timeLeft, challengeIdx, config, settings],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = challenges.current.length * 120;
      onComplete({
        score,
        maxScore: Math.max(score, maxScore),
        stars: calculateStars(score, Math.max(score, maxScore)),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  if (!challenge) return null;

  const pct = timeLeft / settings.timeLimit;
  const sortedDots = [...challenge.dots].sort((a, b) => a.order - b.order);

  // Build lines between connected dots
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 1; i < connected.length; i++) {
    const prev = sortedDots[connected[i - 1]!]!;
    const curr = sortedDots[connected[i]!]!;
    lines.push({ x1: prev.x, y1: prev.y, x2: curr.x, y2: curr.y });
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>
          {challengeIdx + 1}/{challenges.current.length}
        </span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      <p className="text-sm font-medium text-stone-600">
        {challenge.emoji ?? "✏️"} {challenge.title}
      </p>

      {/* Canvas */}
      <div className="relative aspect-square w-full max-w-[320px] rounded-2xl bg-white shadow-inner">
        {/* SVG lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          {lines.map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#3b82f6"
              strokeWidth="0.8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </svg>

        {/* Dots */}
        {challenge.dots.map((dot) => {
          const isConnected = connected.includes(dot.order);
          const isNext = dot.order === connected.length;

          return (
            <motion.button
              key={dot.id}
              type="button"
              onClick={() => handleDotTap(dot)}
              disabled={isConnected || phase !== "playing"}
              whileTap={{ scale: 1.3 }}
              className={`absolute flex flex-col items-center justify-center rounded-full transition ${
                isConnected
                  ? "bg-sky-400 text-white shadow-lg"
                  : isNext && settings.showOrder
                    ? "bg-amber-100 ring-2 ring-amber-400 text-amber-700"
                    : "bg-white text-stone-600 shadow hover:bg-sky-50"
              }`}
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                transform: "translate(-50%, -50%)",
                width: "32px",
                height: "32px",
              }}
            >
              {dot.emoji ? (
                <span className="text-sm">{dot.emoji}</span>
              ) : (
                <span className="text-xs font-bold">{dot.label}</span>
              )}
            </motion.button>
          );
        })}

        {/* Reveal overlay */}
        <AnimatePresence>
          {showReveal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white/90"
            >
              <span className="text-6xl">{challenge.revealEmoji ?? "⭐"}</span>
              {challenge.fact && (
                <p className="mt-2 px-4 text-center text-sm font-medium text-stone-600">
                  {challenge.fact}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <span>
          Connected: {connected.length}/{challenge.dots.length}
        </span>
        {streak >= 3 && <span className="text-amber-500">🔥 Streak ×{streak}</span>}
        {mistakes > 0 && <span className="text-red-400">Mistakes: {mistakes}</span>}
      </div>
    </div>
  );
}
