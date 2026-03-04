/* -------------------------------------------------------------------------- */
/*  Word-Search Engine — Find hidden words in a letter grid                  */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type WordSearchConfig = {
  title: string;
  words: string[];
  gridSize?: number;
};

type Pos = [number, number];
type PlacedWord = { word: string; cells: Pos[]; found: boolean };

type Props = {
  config: WordSearchConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { gridSize: number; wordCount: number; timeLimit: number }> = {
  easy:   { gridSize: 8,  wordCount: 5,  timeLimit: 120_000 },
  medium: { gridSize: 10, wordCount: 8,  timeLimit: 150_000 },
  hard:   { gridSize: 12, wordCount: 12, timeLimit: 180_000 },
};

const DIRS: Pos[] = [[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function buildGrid(size: number, words: string[]): { grid: string[][]; placed: PlacedWord[] } {
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(""));
  const placed: PlacedWord[] = [];

  for (const rawWord of shuffle(words)) {
    const word = rawWord.toUpperCase();
    let didPlace = false;
    for (let attempt = 0; attempt < 100; attempt++) {
      const dir = DIRS[Math.floor(Math.random() * DIRS.length)]!;
      const sr = Math.floor(Math.random() * size);
      const sc = Math.floor(Math.random() * size);
      const cells: Pos[] = [];
      let ok = true;

      for (let i = 0; i < word.length; i++) {
        const r = sr + dir[0] * i;
        const c = sc + dir[1] * i;
        if (r < 0 || r >= size || c < 0 || c >= size) { ok = false; break; }
        if (grid[r]![c] !== "" && grid[r]![c] !== word[i]) { ok = false; break; }
        cells.push([r, c]);
      }

      if (ok && cells.length === word.length) {
        for (let i = 0; i < word.length; i++) {
          const [r, c] = cells[i]!;
          grid[r]![c] = word[i]!;
        }
        placed.push({ word, cells, found: false });
        didPlace = true;
        break;
      }
    }
    if (!didPlace) {
      // Skip words that can't fit
    }
  }

  // Fill empty cells
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r]![c] === "") grid[r]![c] = ALPHA[Math.floor(Math.random() * 26)]!;
    }
  }

  return { grid, placed };
}

export function WordSearchEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const size = config.gridSize ?? settings.gridSize;
  const wordsToUse = shuffle(config.words).slice(0, settings.wordCount);

  const { grid, placed: initialPlaced } = useMemo(
    () => buildGrid(size, wordsToUse),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, config.words.length],
  );

  const [placed, setPlaced] = useState<PlacedWord[]>(initialPlaced);
  const [selecting, setSelecting] = useState<Pos[]>([]);
  const [isDown, setIsDown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [score, setScore] = useState(0);
  const startTime = useRef(Date.now());

  const foundCells = useMemo(() => {
    const set = new Set<string>();
    for (const pw of placed) {
      if (pw.found) for (const [r, c] of pw.cells) set.add(`${r},${c}`);
    }
    return set;
  }, [placed]);

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

  // Check if all found
  useEffect(() => {
    if (placed.length > 0 && placed.every((p) => p.found)) {
      setPhase("complete");
    }
  }, [placed]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const foundCount = placed.filter((p) => p.found).length;
      onComplete({
        score,
        maxScore: placed.length * 100,
        stars: calculateStars(foundCount, placed.length),
        timeMs: Date.now() - startTime.current,
        level: 1,
        difficulty,
      });
    }
  }, [phase, score, placed, difficulty, onComplete]);

  const handleCellDown = useCallback((r: number, c: number) => {
    if (phase !== "playing") return;
    setIsDown(true);
    setSelecting([[r, c]]);
  }, [phase]);

  const handleCellEnter = useCallback((r: number, c: number) => {
    if (!isDown || phase !== "playing") return;
    setSelecting((prev) => {
      // Only allow straight lines
      if (prev.length === 0) return [[r, c]];
      const [sr, sc] = prev[0]!;
      const dr = Math.sign(r - sr);
      const dc = Math.sign(c - sc);
      if (dr === 0 && dc === 0) return prev;
      // Rebuild line from start to current
      const cells: Pos[] = [];
      const dist = Math.max(Math.abs(r - sr), Math.abs(c - sc));
      for (let i = 0; i <= dist; i++) {
        const nr = sr + dr * i;
        const nc = sc + dc * i;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size) cells.push([nr, nc]);
      }
      return cells;
    });
  }, [isDown, phase, size]);

  const handleUp = useCallback(() => {
    setIsDown(false);
    if (selecting.length < 2) { setSelecting([]); return; }

    const selectedStr = selecting.map(([r, c]) => grid[r]![c]).join("");
    const selectedRev = [...selectedStr].reverse().join("");

    setPlaced((prev) => {
      let matched = false;
      const next = prev.map((pw) => {
        if (pw.found) return pw;
        if (pw.word === selectedStr || pw.word === selectedRev) {
          matched = true;
          return { ...pw, found: true };
        }
        return pw;
      });
      if (matched) setScore((s) => s + 100);
      return next;
    });
    setSelecting([]);
  }, [selecting, grid]);

  const selectingSet = useMemo(
    () => new Set(selecting.map(([r, c]) => `${r},${c}`)),
    [selecting],
  );

  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>{placed.filter((p) => p.found).length}/{placed.length} found</span>
        <span>Score: {score}</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Word list */}
      <div className="flex flex-wrap justify-center gap-2">
        {placed.map((pw) => (
          <span
            key={pw.word}
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              pw.found
                ? "bg-emerald-100 text-emerald-600 line-through"
                : "bg-stone-100 text-stone-600"
            }`}
          >
            {pw.word}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div
        className="select-none rounded-xl bg-white p-2 shadow-lg"
        onPointerUp={handleUp}
        onPointerLeave={handleUp}
      >
        <div
          className="grid gap-0.5"
          style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
        >
          {grid.map((row, r) =>
            row.map((letter, c) => {
              const key = `${r},${c}`;
              const isFound = foundCells.has(key);
              const isSel = selectingSet.has(key);
              return (
                <motion.div
                  key={key}
                  onPointerDown={(e) => { e.preventDefault(); handleCellDown(r, c); }}
                  onPointerEnter={() => handleCellEnter(r, c)}
                  animate={{
                    scale: isSel ? 1.15 : 1,
                    backgroundColor: isFound ? "#d1fae5" : isSel ? "#bae6fd" : "#f5f5f4",
                  }}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-sm font-bold text-stone-700 sm:h-9 sm:w-9"
                >
                  {letter}
                </motion.div>
              );
            }),
          )}
        </div>
      </div>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(placed.filter((p) => p.found).length, placed.length))}</p>
          <p className="mt-1 font-bold text-stone-700">{score} points</p>
        </motion.div>
      )}
    </div>
  );
}
