/* -------------------------------------------------------------------------- */
/*  Falling-Catch Engine — Tetris / Letter-Catcher style                     */
/*  Catch falling items, avoid wrong ones                                    */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle, clamp } from "@/lib/games/engine/scoring";

export type FallingItem = {
  id: string;
  emoji: string;
  label: string;
  correct: boolean;
  points?: number;
};

export type FallingCatchConfig = {
  title: string;
  prompt: string;
  items: FallingItem[];
  spawnInterval?: number;
  infiniteMode?: boolean;
};

type FallingObj = FallingItem & { key: number; x: number; y: number; speed: number };

type Props = {
  config: FallingCatchConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { duration: number; speed: number; spawnMs: number; lanes: number }> = {
  easy:   { duration: 45_000, speed: 1.5, spawnMs: 1500, lanes: 4 },
  medium: { duration: 60_000, speed: 2.2, spawnMs: 1100, lanes: 5 },
  hard:   { duration: 75_000, speed: 3.0, spawnMs: 800, lanes: 6 },
};

let _fk = 0;

export function FallingCatchEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const containerRef = useRef<HTMLDivElement>(null);
  const [catcher, setCatcher] = useState(50); // % position
  const [objects, setObjects] = useState<FallingObj[]>([]);
  const [score, setScore] = useState(0);
  const [caught, setCaught] = useState(0);
  const [missed, setMissed] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(settings.duration);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [flashes, setFlashes] = useState<{ key: number; x: number; correct: boolean }[]>([]);
  const startTime = useRef(Date.now());
  const animRef = useRef<number>(0);
  const lastSpawn = useRef(0);
  const lastFrame = useRef(performance.now());

  // Mouse/touch movement
  const handlePointer = useCallback((e: React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = clamp(((e.clientX - rect.left) / rect.width) * 100, 5, 95);
    setCatcher(pct);
  }, []);

  // Game loop
  useEffect(() => {
    if (phase !== "playing") return;

    const loop = (now: number) => {
      const dt = (now - lastFrame.current) / 1000;
      lastFrame.current = now;

      // Spawn
      if (now - lastSpawn.current > (config.spawnInterval ?? settings.spawnMs) / level) {
        const item = config.items[Math.floor(Math.random() * config.items.length)]!;
        const lane = Math.floor(Math.random() * settings.lanes);
        const x = ((lane + 0.5) / settings.lanes) * 100;
        setObjects((prev) => [
          ...prev,
          { ...item, key: ++_fk, x, y: -10, speed: settings.speed * (1 + level * 0.1) },
        ]);
        lastSpawn.current = now;
      }

      // Move objects
      setObjects((prev) => {
        const kept: FallingObj[] = [];
        for (const obj of prev) {
          const nextY = obj.y + obj.speed * dt * 60;
          if (nextY > 90) {
            // Check catch
            const dx = Math.abs(obj.x - catcher);
            if (dx < 12) {
              // Caught!
              if (obj.correct) {
                setScore((s) => s + (obj.points ?? 100));
                setCaught((c) => c + 1);
                setFlashes((f) => [...f, { key: _fk++, x: obj.x, correct: true }]);
              } else {
                setScore((s) => Math.max(0, s - 50));
                setFlashes((f) => [...f, { key: _fk++, x: obj.x, correct: false }]);
              }
            } else if (obj.correct) {
              setMissed((m) => m + 1);
            }
            // Remove
          } else {
            kept.push({ ...obj, y: nextY });
          }
        }
        return kept;
      });

      // Time
      setTimeLeft((t) => {
        const next = t - dt * 1000;
        if (next <= 0) {
          setPhase("complete");
          return 0;
        }
        return next;
      });

      animRef.current = requestAnimationFrame(loop);
    };

    lastFrame.current = performance.now();
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, catcher, config, settings, level]);

  // Level up
  useEffect(() => {
    if (caught > 0 && caught % 15 === 0) setLevel((l) => l + 1);
  }, [caught]);

  // Clear old flashes
  useEffect(() => {
    if (flashes.length === 0) return;
    const t = setTimeout(() => setFlashes((f) => f.slice(1)), 600);
    return () => clearTimeout(t);
  }, [flashes]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = (caught + missed) * 100 || 1;
      onComplete({
        score,
        maxScore: Math.max(score, maxScore),
        stars: calculateStars(score, Math.max(score, maxScore)),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, caught, missed, level, difficulty, onComplete]);

  const pct = clamp(timeLeft / settings.duration, 0, 1);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-2 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Level {level}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      {/* Timer */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      <p className="text-center text-sm font-medium text-stone-500">{config.prompt}</p>

      {/* Play area */}
      <div
        ref={containerRef}
        onPointerMove={handlePointer}
        className="relative h-80 w-full cursor-none overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 to-sky-50 shadow-inner"
      >
        {/* Falling objects */}
        <AnimatePresence>
          {objects.map((obj) => (
            <motion.div
              key={obj.key}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute text-2xl"
              style={{ left: `${obj.x}%`, top: `${obj.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {obj.emoji}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Hit flashes */}
        <AnimatePresence>
          {flashes.map((f) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -30, scale: 1.5 }}
              exit={{ opacity: 0 }}
              className={`absolute bottom-12 text-xl font-black ${f.correct ? "text-emerald-500" : "text-red-500"}`}
              style={{ left: `${f.x}%`, transform: "translateX(-50%)" }}
            >
              {f.correct ? "+100" : "-50"}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Catcher */}
        <div
          className="absolute bottom-2 h-8 w-16 rounded-xl bg-sky-500 shadow-lg transition-all"
          style={{ left: `${catcher}%`, transform: "translateX(-50%)" }}
        >
          <div className="flex h-full items-center justify-center text-lg">🧺</div>
        </div>
      </div>
    </div>
  );
}
