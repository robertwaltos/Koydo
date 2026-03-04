"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Trophy, Binary, Lightbulb, Undo2 } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */

type Phase = "ready" | "playing" | "won";
type CellValue = 0 | 1 | null;

const SIZES = [4, 6, 6, 8];
const SIZE_LABELS = ["4×4 Easy", "6×6 Medium", "6×6 Hard", "8×8 Expert"];

/* ─── puzzle generation ─── */

function generatePuzzle(size: number): { solution: number[][]; puzzle: CellValue[][] } {
  // Generate a valid completed grid
  const solution = generateSolution(size);
  // Remove cells to create puzzle
  const puzzle: CellValue[][] = solution.map((row) => row.map((v) => v as CellValue));

  // Remove based on size (more blanks for larger grids)
  const blanks = Math.floor(size * size * 0.55);
  const positions: [number, number][] = [];
  for (let r = 0; r < size; r++)
    for (let c = 0; c < size; c++) positions.push([r, c]);

  // Shuffle and remove
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  for (let i = 0; i < blanks && i < positions.length; i++) {
    const [r, c] = positions[i];
    puzzle[r][c] = null;
  }

  return { solution, puzzle };
}

function generateSolution(size: number): number[][] {
  // Generate valid binary puzzle solution using backtracking
  const grid: (number | null)[][] = Array.from({ length: size }, () =>
    Array(size).fill(null),
  );

  function isValid(grid: (number | null)[][], r: number, c: number, val: number): boolean {
    grid[r][c] = val;

    // Check row count
    const rowVals = grid[r];
    const ones = rowVals.filter((v) => v === 1).length;
    const zeros = rowVals.filter((v) => v === 0).length;
    if (ones > size / 2 || zeros > size / 2) { grid[r][c] = null; return false; }

    // Check col count
    let colOnes = 0;
    let colZeros = 0;
    for (let i = 0; i < size; i++) {
      if (grid[i][c] === 1) colOnes++;
      if (grid[i][c] === 0) colZeros++;
    }
    if (colOnes > size / 2 || colZeros > size / 2) { grid[r][c] = null; return false; }

    // Check no three consecutive in row
    if (c >= 2 && grid[r][c - 1] === val && grid[r][c - 2] === val) { grid[r][c] = null; return false; }
    if (c >= 1 && c < size - 1 && grid[r][c - 1] === val && grid[r][c + 1] === val) { grid[r][c] = null; return false; }
    if (c < size - 2 && grid[r][c + 1] === val && grid[r][c + 2] === val) { grid[r][c] = null; return false; }

    // Check no three consecutive in col
    if (r >= 2 && grid[r - 1][c] === val && grid[r - 2][c] === val) { grid[r][c] = null; return false; }
    if (r >= 1 && r < size - 1 && grid[r - 1][c] === val && grid[r + 1]?.[c] === val) { grid[r][c] = null; return false; }
    if (r < size - 2 && grid[r + 1]?.[c] === val && grid[r + 2]?.[c] === val) { grid[r][c] = null; return false; }

    grid[r][c] = null;
    return true;
  }

  function solve(pos: number): boolean {
    if (pos === size * size) return true;
    const r = Math.floor(pos / size);
    const c = pos % size;

    const order = Math.random() > 0.5 ? [0, 1] : [1, 0];
    for (const val of order) {
      if (isValid(grid, r, c, val)) {
        grid[r][c] = val;
        if (solve(pos + 1)) return true;
        grid[r][c] = null;
      }
    }
    return false;
  }

  solve(0);
  return grid.map((row) => row.map((v) => v ?? 0));
}

/* ─── validation ─── */

function checkErrors(grid: CellValue[][], size: number): [number, number][] {
  const errors: Set<string> = new Set();

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === null) continue;
      const val = grid[r][c];

      // Three consecutive in row
      if (c >= 1 && c < size - 1 && grid[r][c - 1] === val && grid[r][c + 1] === val) {
        errors.add(`${r},${c - 1}`);
        errors.add(`${r},${c}`);
        errors.add(`${r},${c + 1}`);
      }

      // Three consecutive in col
      if (r >= 1 && r < size - 1 && grid[r - 1]?.[c] === val && grid[r + 1]?.[c] === val) {
        errors.add(`${r - 1},${c}`);
        errors.add(`${r},${c}`);
        errors.add(`${r + 1},${c}`);
      }
    }

    // Row count
    const rowOnes = grid[r].filter((v) => v === 1).length;
    const rowZeros = grid[r].filter((v) => v === 0).length;
    if (rowOnes > size / 2 || rowZeros > size / 2) {
      for (let c = 0; c < size; c++) if (grid[r][c] !== null) errors.add(`${r},${c}`);
    }
  }

  // Col counts
  for (let c = 0; c < size; c++) {
    let colOnes = 0;
    let colZeros = 0;
    for (let r = 0; r < size; r++) {
      if (grid[r][c] === 1) colOnes++;
      if (grid[r][c] === 0) colZeros++;
    }
    if (colOnes > size / 2 || colZeros > size / 2) {
      for (let r = 0; r < size; r++) if (grid[r][c] !== null) errors.add(`${r},${c}`);
    }
  }

  return [...errors].map((s) => {
    const [r, c] = s.split(",").map(Number);
    return [r, c] as [number, number];
  });
}

function isComplete(grid: CellValue[][]): boolean {
  return grid.every((row) => row.every((v) => v !== null));
}

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  startTime: number;
  interactions: number;
  sizeIdx: number;
  size: number;
  solution: number[][];
  puzzle: CellValue[][];
  grid: CellValue[][];
  locked: boolean[][];
  errors: [number, number][];
}

type Action =
  | { type: "SELECT_SIZE"; idx: number }
  | { type: "START" }
  | { type: "TOGGLE"; r: number; c: number }
  | { type: "CHECK" }
  | { type: "RESET" };

function initState(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    startTime: 0,
    interactions: 0,
    sizeIdx: 0,
    size: SIZES[0],
    solution: [],
    puzzle: [],
    grid: [],
    locked: [],
    errors: [],
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "SELECT_SIZE":
      return { ...s, sizeIdx: a.idx, size: SIZES[a.idx] };

    case "START": {
      const size = s.size;
      const { solution, puzzle } = generatePuzzle(size);
      const locked = puzzle.map((row) => row.map((v) => v !== null));
      return {
        ...s,
        phase: "playing",
        sessionId: createLegacySessionId(),
        startTime: Date.now(),
        interactions: 0,
        solution,
        puzzle,
        grid: puzzle.map((row) => [...row]),
        locked,
        errors: [],
      };
    }

    case "TOGGLE": {
      if (s.phase !== "playing" || s.locked[a.r][a.c]) return s;
      const newGrid = s.grid.map((row) => [...row]);
      const current = newGrid[a.r][a.c];
      newGrid[a.r][a.c] = current === null ? 0 : current === 0 ? 1 : null;

      const errors = checkErrors(newGrid, s.size);
      const complete = isComplete(newGrid) && errors.length === 0;

      return {
        ...s,
        grid: newGrid,
        errors,
        interactions: s.interactions + 1,
        phase: complete ? "won" : "playing",
      };
    }

    case "CHECK":
      return { ...s, errors: checkErrors(s.grid, s.size) };

    case "RESET":
      return initState();

    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameBinaryPuzzle() {
  const [s, dispatch] = useReducer(reducer, undefined, initState);
  const { setMood } = useMascot();

  // Emit on win
  useEffect(() => {
    if (s.phase === "won") {
      hapticCelebration();
      setMood("cheering");
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "binary-puzzle",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.interactions,
        maxScore: s.size * s.size,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.size, setMood]);

  const stars = useMemo(() => {
    if (s.phase !== "won") return 0;
    const ratio = s.interactions / (s.size * s.size);
    if (ratio <= 1.5) return 3;
    if (ratio <= 2.5) return 2;
    return 1;
  }, [s.phase, s.interactions, s.size]);

  const errorSet = useMemo(
    () => new Set(s.errors.map(([r, c]) => `${r},${c}`)),
    [s.errors],
  );

  const cellSize = s.size <= 4 ? 56 : s.size <= 6 ? 48 : 40;

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-violet-50 to-purple-50 p-6 dark:from-violet-950/40 dark:to-purple-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Binary className="h-6 w-6 text-violet-600" aria-hidden />
          <h2 className="text-xl font-bold text-violet-700 dark:text-violet-300">Binary Puzzle</h2>
        </div>
        <MascotFriend id="spark" mood="happy" size="sm" />
      </div>

      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-5 text-center"
        >
          <p className="max-w-sm text-base text-violet-700 dark:text-violet-300">
            Fill the grid with <span className="rounded bg-blue-200 px-1.5 font-bold text-blue-800 dark:bg-blue-800 dark:text-blue-200">0</span>s and{" "}
            <span className="rounded bg-red-200 px-1.5 font-bold text-red-800 dark:bg-red-800 dark:text-red-200">1</span>s following three rules:
          </p>
          <div className="space-y-2 text-left text-sm text-violet-600 dark:text-violet-400">
            <p>1️⃣ Equal number of 0s and 1s in each row & column</p>
            <p>2️⃣ No more than two consecutive 0s or 1s</p>
            <p>3️⃣ All rows unique, all columns unique</p>
          </div>

          <div className="flex gap-2">
            {SIZE_LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => dispatch({ type: "SELECT_SIZE", idx: i })}
                className={`rounded-xl px-3 py-2 text-xs font-bold transition-all ${
                  s.sizeIdx === i
                    ? "bg-violet-600 text-white shadow-lg"
                    : "bg-violet-200 text-violet-700 hover:bg-violet-300 dark:bg-violet-800 dark:text-violet-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Puzzle
          </PhysicalButton>
        </motion.div>
      )}

      {s.phase === "playing" && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-violet-500">Tap cells to cycle: empty → 0 → 1 → empty</p>

          <div className="rounded-xl bg-white/80 p-3 shadow-lg dark:bg-white/10">
            <div
              className="grid gap-1"
              style={{ gridTemplateColumns: `repeat(${s.size}, ${cellSize}px)` }}
            >
              {s.grid.map((row, r) =>
                row.map((val, c) => {
                  const locked = s.locked[r][c];
                  const hasError = errorSet.has(`${r},${c}`);
                  return (
                    <motion.button
                      key={`${r}-${c}`}
                      whileTap={locked ? {} : { scale: 0.9 }}
                      onClick={() => {
                        if (!locked) {
                          dispatch({ type: "TOGGLE", r, c });
                          hapticSelection();
                        }
                      }}
                      className={`flex items-center justify-center rounded-lg text-lg font-bold transition-colors ${
                        locked
                          ? val === 0
                            ? "bg-blue-300 text-blue-900 dark:bg-blue-700 dark:text-blue-100"
                            : "bg-red-300 text-red-900 dark:bg-red-700 dark:text-red-100"
                          : val === null
                            ? `bg-gray-100 dark:bg-gray-700 ${hasError ? "" : "hover:bg-gray-200 dark:hover:bg-gray-600"}`
                            : val === 0
                              ? `bg-blue-200 text-blue-800 dark:bg-blue-600 dark:text-blue-100 ${hasError ? "ring-2 ring-red-500" : ""}`
                              : `bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-100 ${hasError ? "ring-2 ring-red-500" : ""}`
                      }`}
                      style={{ width: cellSize, height: cellSize }}
                      disabled={locked}
                    >
                      {val !== null ? val : ""}
                    </motion.button>
                  );
                }),
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <PhysicalButton variant="secondary" onClick={() => dispatch({ type: "CHECK" })}>
              <Lightbulb className="mr-1 h-4 w-4" /> Check
            </PhysicalButton>
            <PhysicalButton variant="secondary" onClick={() => dispatch({ type: "RESET" })}>
              <RotateCcw className="mr-1 h-4 w-4" /> New
            </PhysicalButton>
          </div>
          {s.errors.length > 0 && (
            <p className="text-sm font-medium text-red-500">
              {s.errors.length} cell{s.errors.length !== 1 ? "s" : ""} violating rules
            </p>
          )}
        </div>
      )}

      {s.phase === "won" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-4 text-center"
        >
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-violet-700 dark:text-violet-300">Puzzle Solved!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}{"☆".repeat(3 - stars)}
          </div>
          <p className="text-sm text-violet-500">
            Completed in {s.interactions} moves · {SIZE_LABELS[s.sizeIdx]}
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> Play Again
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
