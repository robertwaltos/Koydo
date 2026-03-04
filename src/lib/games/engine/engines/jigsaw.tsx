/* -------------------------------------------------------------------------- */
/*  Jigsaw Engine — Reassemble scrambled tiles into a picture                */
/*  Educational jigsaw/image-tile puzzle with grid-swap mechanics            */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type JigsawTile = {
  id: string;
  emoji: string;
  label?: string;
};

export type JigsawConfig = {
  title: string;
  tiles: JigsawTile[];   // flat array in correct order, length must be a perfect square
  gridSize?: number;      // auto-detected from tiles if omitted
  infiniteMode?: boolean;
};

type Props = {
  config: JigsawConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { extraShuffle: number; timeLimit: number; showNumbers: boolean }> = {
  easy:   { extraShuffle: 8,   timeLimit: 180_000, showNumbers: true },
  medium: { extraShuffle: 20,  timeLimit: 150_000, showNumbers: false },
  hard:   { extraShuffle: 40,  timeLimit: 120_000, showNumbers: false },
};

export function JigsawEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];

  const gridSize = config.gridSize ?? Math.round(Math.sqrt(config.tiles.length));
  const tileCount = gridSize * gridSize;
  const tiles = useMemo(
    () => config.tiles.slice(0, tileCount),
    [config.tiles, tileCount],
  );

  // Shuffled state — store indices into tiles array
  const [board, setBoard] = useState<number[]>(() => {
    const indices = tiles.map((_, i) => i);
    // Fisher-Yates shove that guarantees not already solved
    let arr = shuffle(indices);
    // Do more random swaps based on difficulty
    for (let s = 0; s < settings.extraShuffle; s++) {
      const a = Math.floor(Math.random() * arr.length);
      const b = Math.floor(Math.random() * arr.length);
      if (a !== b) [arr[a], arr[b]] = [arr[b]!, arr[a]!];
    }
    // Ensure it's not solved
    if (arr.every((v, i) => v === i)) {
      [arr[0], arr[1]] = [arr[1]!, arr[0]!];
    }
    return arr;
  });

  const [selected, setSelected] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

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

  // Check if solved
  const isSolved = useCallback(
    (b: number[]) => b.every((v, i) => v === i),
    [],
  );

  const handleTap = useCallback(
    (index: number) => {
      if (phase !== "playing") return;

      if (selected === null) {
        setSelected(index);
        return;
      }

      if (selected === index) {
        setSelected(null);
        return;
      }

      // Swap
      setBoard((prev) => {
        const next = [...prev];
        [next[selected], next[index]] = [next[index]!, next[selected]!];

        if (isSolved(next)) {
          const timeBonus = Math.round(timeLeft / 1000) * 3;
          const moveBonus = Math.max(0, 200 - moves * 2);
          setScore((s) => s + 300 + timeBonus + moveBonus);

          if (config.infiniteMode) {
            setLevel((l) => l + 1);
            setTimeout(() => {
              const indices = tiles.map((_, i) => i);
              let arr = shuffle(indices);
              for (let s = 0; s < settings.extraShuffle + level * 5; s++) {
                const a = Math.floor(Math.random() * arr.length);
                const b = Math.floor(Math.random() * arr.length);
                if (a !== b) [arr[a], arr[b]] = [arr[b]!, arr[a]!];
              }
              setBoard(arr);
              setMoves(0);
              setSelected(null);
            }, 1500);
          } else {
            setTimeout(() => setPhase("complete"), 1000);
          }
        }

        return next;
      });

      setMoves((m) => m + 1);
      setSelected(null);
    },
    [phase, selected, isSolved, timeLeft, moves, config.infiniteMode, tiles, settings, level],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = 600;
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

  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Moves: {moves}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      <p className="text-xs text-stone-500">Tap two tiles to swap them • Level {level}</p>

      {/* Grid */}
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
        {board.map((tileIdx, pos) => {
          const tile = tiles[tileIdx]!;
          const isCorrect = tileIdx === pos;
          const isSelected = selected === pos;

          return (
            <motion.button
              key={pos}
              layout
              type="button"
              onClick={() => handleTap(pos)}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center justify-center rounded-xl p-2 text-center transition ${
                isSelected
                  ? "ring-3 ring-sky-400 bg-sky-50 scale-105"
                  : isCorrect
                    ? "bg-emerald-50 ring-1 ring-emerald-300"
                    : "bg-white shadow-sm hover:bg-stone-50"
              }`}
              style={{
                width: `${Math.min(72, 280 / gridSize)}px`,
                height: `${Math.min(72, 280 / gridSize)}px`,
              }}
            >
              <span className="text-2xl leading-none">{tile.emoji}</span>
              {settings.showNumbers && (
                <span className="mt-0.5 text-[10px] font-bold text-stone-400">
                  {tileIdx + 1}
                </span>
              )}
              {tile.label && (
                <span className="mt-0.5 text-[9px] font-medium text-stone-500 leading-tight line-clamp-1">
                  {tile.label}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Reference — show correct order hint on easy */}
      {settings.showNumbers && (
        <div className="w-full rounded-xl bg-amber-50 p-2 text-center">
          <p className="text-xs font-bold text-amber-700">📋 Correct order:</p>
          <div className="mt-1 flex flex-wrap justify-center gap-1">
            {tiles.map((t, i) => (
              <span key={i} className="text-sm">
                {t.emoji}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
