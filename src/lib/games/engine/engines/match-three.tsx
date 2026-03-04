/* -------------------------------------------------------------------------- */
/*  Match-Three Engine — Candy Crush / Bejeweled style                       */
/*  Supports: math facts, vocabulary, chemistry elements, etc.               */
/* -------------------------------------------------------------------------- */
"use client";

/* eslint-disable react-hooks/purity, react-hooks/refs -- engine loop uses mutable refs and mount timestamps intentionally. */

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle, clamp, makeGrid } from "@/lib/games/engine/scoring";

export type MatchThreeItem = {
  id: string;
  emoji: string;
  label: string;
  value?: string;
};

export type MatchThreeConfig = {
  title: string;
  items: MatchThreeItem[];
  rows?: number;
  cols?: number;
  matchSize?: number;
  palette?: readonly string[];
};

type Cell = { item: MatchThreeItem; key: string; popping: boolean };

type Props = {
  config: MatchThreeConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF_SETTINGS: Record<Difficulty, { rows: number; cols: number; targetScore: number; timeLimit: number }> = {
  easy:   { rows: 6, cols: 6, targetScore: 300, timeLimit: 120_000 },
  medium: { rows: 7, cols: 7, targetScore: 600, timeLimit: 90_000 },
  hard:   { rows: 8, cols: 8, targetScore: 1000, timeLimit: 60_000 },
};

let cellKeyCounter = 0;
function nextKey() { return `c-${++cellKeyCounter}`; }

function randomItem(items: MatchThreeItem[]): MatchThreeItem {
  return items[Math.floor(Math.random() * items.length)]!;
}

function createBoard(rows: number, cols: number, items: MatchThreeItem[]): Cell[][] {
  return makeGrid(rows, cols, () => ({ item: randomItem(items), key: nextKey(), popping: false }));
}

function findMatches(board: Cell[][], matchSize: number): [number, number][] {
  const matched = new Set<string>();
  const rows = board.length;
  const cols = board[0]?.length ?? 0;

  // Horizontal
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - matchSize; c++) {
      const id = board[r]![c]!.item.id;
      let streak = 1;
      for (let k = 1; k < cols - c; k++) {
        if (board[r]![c + k]!.item.id === id) streak++;
        else break;
      }
      if (streak >= matchSize) {
        for (let k = 0; k < streak; k++) matched.add(`${r},${c + k}`);
      }
    }
  }
  // Vertical
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - matchSize; r++) {
      const id = board[r]![c]!.item.id;
      let streak = 1;
      for (let k = 1; k < rows - r; k++) {
        if (board[r + k]![c]!.item.id === id) streak++;
        else break;
      }
      if (streak >= matchSize) {
        for (let k = 0; k < streak; k++) matched.add(`${r + k},${c}`);
      }
    }
  }

  return [...matched].map((s) => {
    const [r, c] = s.split(",").map(Number);
    return [r!, c!];
  });
}

function dropAndFill(board: Cell[][], items: MatchThreeItem[]): Cell[][] {
  const rows = board.length;
  const cols = board[0]?.length ?? 0;
  const next: Cell[][] = board.map((row) => row.map((cell) => ({ ...cell })));

  for (let c = 0; c < cols; c++) {
    // Collect non-popping cells bottom-up
    const column: Cell[] = [];
    for (let r = rows - 1; r >= 0; r--) {
      if (!next[r]![c]!.popping) column.push(next[r]![c]!);
    }
    column.reverse();
    // Fill from top
    while (column.length < rows) {
      column.unshift({ item: randomItem(items), key: nextKey(), popping: false });
    }
    for (let r = 0; r < rows; r++) {
      next[r]![c] = { ...column[r]!, popping: false };
    }
  }
  return next;
}

export function MatchThreeEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF_SETTINGS[difficulty];
  const rows = config.rows ?? settings.rows;
  const cols = config.cols ?? settings.cols;
  const matchSize = config.matchSize ?? 3;

  const [board, setBoard] = useState<Cell[][]>(() => createBoard(rows, cols, config.items));
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [combo, setCombo] = useState(0);
  const startTime = useRef(Date.now());

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        const next = t - 100;
        if (next <= 0) {
          setPhase("complete");
          return 0;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  // Check for matches after board changes
  useEffect(() => {
    if (phase !== "playing") return;
    const timer = setTimeout(() => {
      const matches = findMatches(board, matchSize);
      if (matches.length > 0) {
        // Mark cells as popping
        setBoard((prev) => {
          const next = prev.map((row) => row.map((cell) => ({ ...cell })));
          for (const [r, c] of matches) next[r]![c]!.popping = true;
          return next;
        });
        const pts = matches.length * 10 * (1 + combo * 0.5);
        setScore((s) => s + Math.round(pts));
        setCombo((c) => c + 1);

        // Drop after animation
        setTimeout(() => {
          setBoard((prev) => dropAndFill(prev, config.items));
        }, 300);
      } else {
        setCombo(0);
        // Check level up
        if (score >= settings.targetScore * level) {
          setLevel((l) => l + 1);
        }
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [board, phase, matchSize, combo, config.items, level, score, settings.targetScore]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const result: GameRoundResult = {
        score,
        maxScore: settings.targetScore * level,
        stars: calculateStars(score, settings.targetScore * level),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      };
      const timer = setTimeout(() => onComplete(result), 800);
      return () => clearTimeout(timer);
    }
  }, [phase, score, level, difficulty, onComplete, settings.targetScore]);

  const handleCellClick = useCallback(
    (r: number, c: number) => {
      if (phase !== "playing") return;
      if (!selected) {
        setSelected([r, c]);
        return;
      }
      const [sr, sc] = selected;
      const adjacent =
        (Math.abs(sr - r) === 1 && sc === c) ||
        (Math.abs(sc - c) === 1 && sr === r);

      if (adjacent) {
        // Swap
        setBoard((prev) => {
          const next = prev.map((row) => row.map((cell) => ({ ...cell })));
          const tmp = next[sr]![sc]!;
          next[sr]![sc] = next[r]![c]!;
          next[r]![c] = tmp;
          return next;
        });
        setMoves((m) => m + 1);
      }
      setSelected(null);
    },
    [selected, phase],
  );

  const pct = clamp(timeLeft / settings.timeLimit, 0, 1);
  const timerColor = pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500";

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      {/* HUD */}
      <div className="flex w-full max-w-md items-center justify-between text-sm font-bold">
        <span>Score: {score}</span>
        <span>Level {level}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>
      {/* Timer bar */}
      <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-stone-200">
        <div className={`h-full transition-all duration-100 ${timerColor}`} style={{ width: `${pct * 100}%` }} />
      </div>
      {combo > 1 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-lg font-black text-amber-500"
        >
          {combo}x Combo!
        </motion.div>
      )}

      {/* Board */}
      <div
        className="grid gap-1 rounded-2xl bg-stone-100 p-2 shadow-inner"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        <AnimatePresence mode="popLayout">
          {board.flatMap((row, r) =>
            row.map((cell, c) => (
              <motion.button
                key={cell.key}
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: cell.popping ? 1.3 : 1,
                  opacity: cell.popping ? 0 : 1,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => handleCellClick(r, c)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-xl transition-colors sm:h-12 sm:w-12 sm:text-2xl ${
                  selected && selected[0] === r && selected[1] === c
                    ? "ring-2 ring-sky-400 bg-sky-50"
                    : "bg-white hover:bg-stone-50"
                } shadow-sm`}
              >
                {cell.item.emoji}
              </motion.button>
            )),
          )}
        </AnimatePresence>
      </div>

      {phase === "complete" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center"
        >
          <p className="text-2xl font-black">
            {"⭐".repeat(calculateStars(score, settings.targetScore * level))}
          </p>
          <p className="mt-1 text-lg font-bold text-stone-700">
            {score} points in {moves} moves!
          </p>
        </motion.div>
      )}
    </div>
  );
}



