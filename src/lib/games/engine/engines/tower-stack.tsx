/* -------------------------------------------------------------------------- */
/*  Tower-Stack Engine — Stack blocks as precisely as possible               */
/*  Timing-based precision game with infinite levels                         */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, clamp } from "@/lib/games/engine/scoring";

export type TowerBlock = {
  emoji?: string;
  label?: string;
  color: string;
};

export type TowerStackConfig = {
  title: string;
  blocks: TowerBlock[];
  questionsPerBlock?: { question: string; answer: string }[];
};

type PlacedBlock = { x: number; width: number; color: string; key: number; perfect: boolean };

type Props = {
  config: TowerStackConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { speed: number; tolerance: number; lives: number }> = {
  easy:   { speed: 2, tolerance: 15, lives: 5 },
  medium: { speed: 3.5, tolerance: 8, lives: 3 },
  hard:   { speed: 5, tolerance: 4, lives: 2 },
};

let _stk = 0;
const CANVAS_W = 300;
const BLOCK_H = 20;

export function TowerStackEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const [stack, setStack] = useState<PlacedBlock[]>([
    { x: CANVAS_W / 2, width: 80, color: config.blocks[0]?.color ?? "#60a5fa", key: ++_stk, perfect: false },
  ]);
  const [currentBlock, setCurrentBlock] = useState<{ x: number; width: number; dir: number; color: string }>({
    x: 0,
    width: 80,
    dir: 1,
    color: config.blocks[1 % config.blocks.length]?.color ?? "#34d399",
  });
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(settings.lives);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());
  const animRef = useRef(0);
  const lastFrame = useRef(performance.now());

  // Animate current block
  useEffect(() => {
    if (phase !== "playing") return;
    const loop = (now: number) => {
      const dt = (now - lastFrame.current) / 1000;
      lastFrame.current = now;

      setCurrentBlock((prev) => {
        let nx = prev.x + prev.dir * settings.speed * (1 + level * 0.15) * dt * 60;
        let dir = prev.dir;
        if (nx > CANVAS_W - prev.width / 2) { nx = CANVAS_W - prev.width / 2; dir = -1; }
        if (nx < prev.width / 2) { nx = prev.width / 2; dir = 1; }
        return { ...prev, x: nx, dir };
      });

      animRef.current = requestAnimationFrame(loop);
    };
    lastFrame.current = performance.now();
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, settings.speed, level]);

  const handleDrop = useCallback(() => {
    if (phase !== "playing") return;

    const topBlock = stack[stack.length - 1]!;
    const overlap = getOverlap(topBlock, currentBlock);

    if (overlap <= 0) {
      // Complete miss
      setLives((l) => {
        const next = l - 1;
        if (next <= 0) setPhase("complete");
        return next;
      });
      setStreak(0);
    } else {
      const perfect = Math.abs(currentBlock.x - topBlock.x) < settings.tolerance;
      const newWidth = perfect ? currentBlock.width : overlap;
      const newX = perfect ? topBlock.x : (Math.max(currentBlock.x - currentBlock.width / 2, topBlock.x - topBlock.width / 2) + overlap / 2);

      const points = perfect ? 200 : Math.round((overlap / currentBlock.width) * 100);
      setScore((s) => s + points + (perfect ? streak * 50 : 0));
      setStreak((s) => perfect ? s + 1 : 0);
      setLevel((l) => l + 1);

      setStack((prev) => [
        ...prev,
        { x: newX, width: newWidth, color: currentBlock.color, key: ++_stk, perfect },
      ]);

      // Next block
      const nextColor = config.blocks[(level + 1) % config.blocks.length]?.color ?? "#60a5fa";
      setCurrentBlock({
        x: 0,
        width: newWidth,
        dir: 1,
        color: nextColor,
      });
    }
  }, [phase, stack, currentBlock, settings.tolerance, streak, level, config.blocks]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = level * 200;
      onComplete({
        score,
        maxScore: Math.max(score, maxScore),
        stars: calculateStars(level, 20),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  const visibleStack = stack.slice(-12);
  const stackHeight = visibleStack.length * BLOCK_H;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Floor {level}</span>
        <span>{"❤️".repeat(lives)}</span>
      </div>

      {streak > 1 && (
        <motion.div
          key={streak}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-lg font-black text-amber-500"
        >
          🎯 Perfect x{streak}!
        </motion.div>
      )}

      {/* Tower view */}
      <button
        type="button"
        onClick={handleDrop}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 to-sky-200 shadow-inner focus:outline-none"
        style={{ width: CANVAS_W + 20, height: 300 }}
      >
        {/* Stacked blocks */}
        {visibleStack.map((block, i) => (
          <motion.div
            key={block.key}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute rounded-sm shadow-sm"
            style={{
              width: block.width,
              height: BLOCK_H - 2,
              left: 10 + block.x - block.width / 2,
              bottom: i * BLOCK_H + 10,
              backgroundColor: block.color,
            }}
          >
            {block.perfect && (
              <span className="absolute -right-1 -top-1 text-xs">✨</span>
            )}
          </motion.div>
        ))}

        {/* Moving block */}
        <motion.div
          className="absolute rounded-sm shadow-lg ring-2 ring-white/50"
          style={{
            width: currentBlock.width,
            height: BLOCK_H - 2,
            left: 10 + currentBlock.x - currentBlock.width / 2,
            bottom: visibleStack.length * BLOCK_H + 10,
            backgroundColor: currentBlock.color,
          }}
        />

        {/* Tap hint */}
        <div className="absolute inset-x-0 bottom-2 text-center text-xs text-stone-500/50">
          Tap to drop!
        </div>
      </button>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(level, 20))}</p>
          <p className="mt-1 font-bold text-stone-700">{level} floors · {score} pts</p>
        </motion.div>
      )}
    </div>
  );
}

function getOverlap(bottom: PlacedBlock, top: { x: number; width: number }): number {
  const bLeft = bottom.x - bottom.width / 2;
  const bRight = bottom.x + bottom.width / 2;
  const tLeft = top.x - top.width / 2;
  const tRight = top.x + top.width / 2;
  const overlapLeft = Math.max(bLeft, tLeft);
  const overlapRight = Math.min(bRight, tRight);
  return Math.max(0, overlapRight - overlapLeft);
}
