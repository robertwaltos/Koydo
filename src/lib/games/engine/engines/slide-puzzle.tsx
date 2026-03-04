/* -------------------------------------------------------------------------- */
/*  Slide-Puzzle Engine — 15-puzzle / sliding blocks                         */
/*  Arrange tiles in correct order by sliding them                           */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type SlideTile = {
  value: number;
  emoji?: string;
  label?: string;
};

export type SlidePuzzleConfig = {
  title: string;
  tiles?: SlideTile[];
  useEmoji?: boolean;
  infiniteMode?: boolean;
};

type Props = {
  config: SlidePuzzleConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { size: number; timeLimit: number; shuffleMoves: number }> = {
  easy:   { size: 3, timeLimit: 180_000, shuffleMoves: 20 },
  medium: { size: 4, timeLimit: 300_000, shuffleMoves: 50 },
  hard:   { size: 5, timeLimit: 420_000, shuffleMoves: 100 },
};

function createSolvedBoard(size: number): number[] {
  const board: number[] = [];
  for (let i = 1; i < size * size; i++) board.push(i);
  board.push(0); // 0 = empty
  return board;
}

function shuffleBoard(board: number[], size: number, moves: number): number[] {
  const result = [...board];
  let emptyIdx = result.indexOf(0);

  for (let m = 0; m < moves; m++) {
    const r = Math.floor(emptyIdx / size);
    const c = emptyIdx % size;
    const neighbors: number[] = [];
    if (r > 0) neighbors.push(emptyIdx - size);
    if (r < size - 1) neighbors.push(emptyIdx + size);
    if (c > 0) neighbors.push(emptyIdx - 1);
    if (c < size - 1) neighbors.push(emptyIdx + 1);

    const swap = neighbors[Math.floor(Math.random() * neighbors.length)]!;
    [result[emptyIdx], result[swap]] = [result[swap]!, result[emptyIdx]!];
    emptyIdx = swap;
  }

  return result;
}

function isSolved(board: number[], size: number): boolean {
  for (let i = 0; i < size * size - 1; i++) {
    if (board[i] !== i + 1) return false;
  }
  return board[size * size - 1] === 0;
}

export function SlidePuzzleEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const size = settings.size;
  const totalTiles = size * size;

  const [board, setBoard] = useState<number[]>(() =>
    shuffleBoard(createSolvedBoard(size), size, settings.shuffleMoves),
  );
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const startTime = useRef(Date.now());

  const tileLabels = useMemo(() => {
    if (config.tiles && config.tiles.length >= totalTiles - 1) {
      const map = new Map<number, SlideTile>();
      config.tiles.forEach((t) => map.set(t.value, t));
      return map;
    }
    return null;
  }, [config.tiles, totalTiles]);

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  // Check solved
  useEffect(() => {
    if (phase !== "playing") return;
    if (isSolved(board, size)) {
      const timeBonus = Math.round(timeLeft / 1000) * 5;
      const moveBonus = Math.max(0, 100 - moves);
      setScore((s) => s + 300 + timeBonus + moveBonus);

      if (config.infiniteMode) {
        setLevel((l) => l + 1);
        const nextSize = Math.min(size + 1, 6);
        setBoard(shuffleBoard(createSolvedBoard(nextSize), nextSize, settings.shuffleMoves + level * 20));
        setMoves(0);
      } else {
        setPhase("complete");
      }
    }
  }, [board, phase, size, timeLeft, moves, config.infiniteMode, settings.shuffleMoves, level]);

  const handleTileClick = useCallback(
    (idx: number) => {
      if (phase !== "playing") return;
      const emptyIdx = board.indexOf(0);
      const r1 = Math.floor(idx / size);
      const c1 = idx % size;
      const r2 = Math.floor(emptyIdx / size);
      const c2 = emptyIdx % size;

      const adjacent =
        (Math.abs(r1 - r2) === 1 && c1 === c2) ||
        (Math.abs(c1 - c2) === 1 && r1 === r2);

      if (!adjacent) return;

      setBoard((prev) => {
        const next = [...prev];
        [next[idx], next[emptyIdx]] = [next[emptyIdx]!, next[idx]!];
        return next;
      });
      setMoves((m) => m + 1);
    },
    [phase, board, size],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = 500;
      onComplete({
        score: Math.min(score, maxScore),
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  const pct = timeLeft / settings.timeLimit;
  const cellSize = Math.floor(280 / size);

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Moves: {moves}</span>
        <span>Level {level}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Board */}
      <div
        className="grid gap-1 rounded-xl bg-stone-200 p-2 shadow-inner"
        style={{ gridTemplateColumns: `repeat(${size}, ${cellSize}px)` }}
      >
        {board.map((value, idx) => {
          const tile = tileLabels?.get(value);
          const isCorrect = value === idx + 1;

          if (value === 0) {
            return (
              <div
                key={idx}
                style={{ width: cellSize, height: cellSize }}
                className="rounded-lg bg-stone-300/50"
              />
            );
          }

          return (
            <motion.button
              key={value}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => handleTileClick(idx)}
              className={`flex flex-col items-center justify-center rounded-lg font-bold shadow-md transition-colors ${
                isCorrect
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-white text-stone-700 hover:bg-stone-50"
              }`}
              style={{ width: cellSize, height: cellSize }}
            >
              {tile?.emoji ? (
                <>
                  <span className="text-xl">{tile.emoji}</span>
                  {tile.label && (
                    <span className="text-[9px] leading-tight">{tile.label}</span>
                  )}
                </>
              ) : (
                <span className="text-lg">{value}</span>
              )}
            </motion.button>
          );
        })}
      </div>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(score, 500))}</p>
          <p className="mt-1 font-bold text-stone-700">{score} pts · {moves} moves</p>
        </motion.div>
      )}
    </div>
  );
}
