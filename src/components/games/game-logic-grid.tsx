"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, RotateCcw } from "lucide-react";
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

type Phase = "ready" | "playing" | "complete";
type CellValue = 0 | 1 | null;

const SIZE = 6;
const MAX_SCORE = 600;

/* ─── types ─── */

interface PuzzleCell {
  value: CellValue;
  locked: boolean;
}

interface State {
  phase: Phase;
  board: PuzzleCell[][];
  solution: CellValue[][];
  errors: boolean[][];
  score: number;
  errorCount: number;
  cellsFilled: number;
}

type Action =
  | { type: "START" }
  | { type: "TOGGLE_CELL"; row: number; col: number }
  | { type: "VALIDATE" }
  | { type: "COMPLETE"; score: number };

/* ─── puzzle generation ─── */

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function isValidPlacement(
  board: (CellValue)[],
  size: number,
  row: number,
  col: number,
  val: 0 | 1,
): boolean {
  const idx = row * size + col;
  const testBoard = [...board];
  testBoard[idx] = val;

  // Check row for three consecutive
  if (col >= 2) {
    if (testBoard[row * size + col - 2] === val && testBoard[row * size + col - 1] === val) {
      return false;
    }
  }
  if (col >= 1 && col < size - 1) {
    if (testBoard[row * size + col - 1] === val && testBoard[row * size + col + 1] === val) {
      return false;
    }
  }
  if (col < size - 2) {
    if (testBoard[row * size + col + 1] === val && testBoard[row * size + col + 2] === val) {
      return false;
    }
  }

  // Check column for three consecutive
  if (row >= 2) {
    if (testBoard[(row - 2) * size + col] === val && testBoard[(row - 1) * size + col] === val) {
      return false;
    }
  }
  if (row >= 1 && row < size - 1) {
    if (testBoard[(row - 1) * size + col] === val && testBoard[(row + 1) * size + col] === val) {
      return false;
    }
  }
  if (row < size - 2) {
    if (testBoard[(row + 1) * size + col] === val && testBoard[(row + 2) * size + col] === val) {
      return false;
    }
  }

  // Check row count (no more than SIZE/2 of either value)
  const half = size / 2;
  let rowCount = 0;
  for (let c = 0; c < size; c++) {
    if (testBoard[row * size + c] === val) rowCount++;
  }
  if (rowCount > half) return false;

  // Check column count
  let colCount = 0;
  for (let r = 0; r < size; r++) {
    if (testBoard[r * size + col] === val) colCount++;
  }
  if (colCount > half) return false;

  return true;
}

function generateSolution(size: number): CellValue[][] | null {
  const flat: CellValue[] = Array(size * size).fill(null);

  function solve(pos: number): boolean {
    if (pos === size * size) return true;
    const row = Math.floor(pos / size);
    const col = pos % size;
    const values = shuffleArray([0, 1] as (0 | 1)[]);

    for (const val of values) {
      if (isValidPlacement(flat, size, row, col, val)) {
        flat[pos] = val;
        if (solve(pos + 1)) return true;
        flat[pos] = null;
      }
    }
    return false;
  }

  if (!solve(0)) return null;

  const grid: CellValue[][] = [];
  for (let r = 0; r < size; r++) {
    grid.push(flat.slice(r * size, (r + 1) * size));
  }
  return grid;
}

function hasUniqueSolution(puzzle: PuzzleCell[][], solution: CellValue[][]): boolean {
  const size = puzzle.length;
  const flat: CellValue[] = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      flat.push(puzzle[r]![c]!.locked ? puzzle[r]![c]!.value : null);
    }
  }

  let solutionCount = 0;

  function solve(pos: number): boolean {
    if (solutionCount > 1) return true;
    if (pos === size * size) {
      solutionCount++;
      return solutionCount > 1;
    }
    const row = Math.floor(pos / size);
    const col = pos % size;
    if (flat[pos] !== null) return solve(pos + 1);

    for (const val of [0, 1] as (0 | 1)[]) {
      if (isValidPlacement(flat, size, row, col, val)) {
        flat[pos] = val;
        if (solve(pos + 1) && solutionCount > 1) {
          flat[pos] = null;
          return true;
        }
        flat[pos] = null;
      }
    }
    return false;
  }

  solve(0);
  return solutionCount === 1;
}

function generatePuzzle(): { board: PuzzleCell[][]; solution: CellValue[][] } {
  // Retry until we get a valid puzzle with a unique solution
  for (let attempt = 0; attempt < 50; attempt++) {
    const solution = generateSolution(SIZE);
    if (!solution) continue;

    // Start with all cells locked, then remove cells
    const board: PuzzleCell[][] = solution.map((row) =>
      row.map((val) => ({ value: val, locked: true })),
    );

    // Shuffle cell positions to remove in random order
    const positions: [number, number][] = [];
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        positions.push([r, c]);
      }
    }
    const shuffled = shuffleArray(positions);

    // Remove cells one by one, keeping ~40-50% as clues
    const targetRemoved = Math.floor(SIZE * SIZE * 0.55);
    let removed = 0;

    for (const [r, c] of shuffled) {
      if (removed >= targetRemoved) break;

      const saved = { ...board[r]![c]! };
      board[r]![c] = { value: null, locked: false };

      if (hasUniqueSolution(board, solution)) {
        removed++;
      } else {
        board[r]![c] = saved;
      }
    }

    if (removed >= Math.floor(SIZE * SIZE * 0.35)) {
      return { board, solution };
    }
  }

  // Fallback: generate a simple puzzle with more clues
  const solution = generateSolution(SIZE)!;
  const board: PuzzleCell[][] = solution.map((row) =>
    row.map((val) => ({ value: val, locked: true })),
  );
  const positions = shuffleArray(
    Array.from({ length: SIZE * SIZE }, (_, i) => [Math.floor(i / SIZE), i % SIZE] as [number, number]),
  );
  for (let i = 0; i < Math.floor(SIZE * SIZE * 0.45); i++) {
    const [r, c] = positions[i]!;
    board[r]![c] = { value: null, locked: false };
  }
  return { board, solution };
}

/* ─── validation ─── */

function validateBoard(board: PuzzleCell[][]): { errors: boolean[][]; valid: boolean } {
  const size = board.length;
  const errors: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));
  let valid = true;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const val = board[r]![c]!.value;
      if (val === null) {
        valid = false;
        continue;
      }

      // Three consecutive in row
      if (c >= 1 && c < size - 1) {
        if (board[r]![c - 1]!.value === val && board[r]![c + 1]!.value === val) {
          errors[r]![c - 1] = true;
          errors[r]![c] = true;
          errors[r]![c + 1] = true;
        }
      }

      // Three consecutive in column
      if (r >= 1 && r < size - 1) {
        if (board[r - 1]![c]!.value === val && board[r + 1]![c]!.value === val) {
          errors[r - 1]![c] = true;
          errors[r]![c] = true;
          errors[r + 1]![c] = true;
        }
      }
    }
  }

  // Check row counts
  const half = size / 2;
  for (let r = 0; r < size; r++) {
    let zeros = 0;
    let ones = 0;
    for (let c = 0; c < size; c++) {
      const val = board[r]![c]!.value;
      if (val === 0) zeros++;
      if (val === 1) ones++;
    }
    if (zeros > half || ones > half) {
      for (let c = 0; c < size; c++) {
        if (board[r]![c]!.value !== null) errors[r]![c] = true;
      }
    }
  }

  // Check column counts
  for (let c = 0; c < size; c++) {
    let zeros = 0;
    let ones = 0;
    for (let r = 0; r < size; r++) {
      const val = board[r]![c]!.value;
      if (val === 0) zeros++;
      if (val === 1) ones++;
    }
    if (zeros > half || ones > half) {
      for (let r = 0; r < size; r++) {
        if (board[r]![c]!.value !== null) errors[r]![c] = true;
      }
    }
  }

  // Check if any error cell exists
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (errors[r]![c]) valid = false;
    }
  }

  return { errors, valid };
}

function isBoardComplete(board: PuzzleCell[][]): boolean {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r]!.length; c++) {
      if (board[r]![c]!.value === null) return false;
    }
  }
  return true;
}

/* ─── reducer ─── */

function emptyErrors(): boolean[][] {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
}

const INITIAL_STATE: State = {
  phase: "ready",
  board: [],
  solution: [],
  errors: emptyErrors(),
  score: 0,
  errorCount: 0,
  cellsFilled: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      const { board, solution } = generatePuzzle();
      return {
        phase: "playing",
        board,
        solution,
        errors: emptyErrors(),
        score: 0,
        errorCount: 0,
        cellsFilled: 0,
      };
    }
    case "TOGGLE_CELL": {
      if (state.phase !== "playing") return state;
      const { row, col } = action;
      const cell = state.board[row]![col]!;
      if (cell.locked) return state;

      const newBoard = state.board.map((r) => r.map((c) => ({ ...c })));
      let nextValue: CellValue;
      if (cell.value === null) {
        nextValue = 0;
      } else if (cell.value === 0) {
        nextValue = 1;
      } else {
        nextValue = null;
      }
      newBoard[row]![col] = { value: nextValue, locked: false };

      const filledDelta = nextValue !== null && cell.value === null
        ? 1
        : nextValue === null && cell.value !== null
          ? -1
          : 0;
      const newFilled = state.cellsFilled + filledDelta;

      // Validate after every change
      const { errors, valid } = validateBoard(newBoard);
      const hasError = errors.some((r) => r.some((e) => e));
      const newErrorCount = state.errorCount + (hasError && nextValue !== null ? 1 : 0);
      const complete = isBoardComplete(newBoard) && valid;

      if (complete) {
        const score = Math.max(0, MAX_SCORE - newErrorCount * 50);
        return {
          ...state,
          phase: "complete",
          board: newBoard,
          errors: emptyErrors(),
          score,
          errorCount: newErrorCount,
          cellsFilled: newFilled,
        };
      }

      return {
        ...state,
        board: newBoard,
        errors,
        errorCount: newErrorCount,
        cellsFilled: newFilled,
      };
    }
    case "COMPLETE":
      return { ...state, phase: "complete", score: action.score };
    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(score: number, errorCount: number, cellsFilled: number, totalEmpty: number): number {
  if (score > 0 && errorCount === 0) return 3;
  if (score > 0) return 2;
  if (cellsFilled >= totalEmpty * 0.5) return 1;
  return 0;
}

/* ─── cell colours ─── */

const CELL_EMPTY = "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700";
const CELL_ZERO = "bg-sky-400 dark:bg-sky-600 text-white";
const CELL_ONE = "bg-amber-400 dark:bg-amber-500 text-white";
const CELL_ZERO_LOCKED = "bg-sky-500 dark:bg-sky-700 text-white font-black";
const CELL_ONE_LOCKED = "bg-amber-500 dark:bg-amber-600 text-white font-black";
const CELL_ERROR = "ring-2 ring-red-500 dark:ring-red-400";

/* ─── component ─── */

export default function GameLogicGrid() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const totalEmpty = useRef(0);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const stars = calcStars(state.score, state.errorCount, state.cellsFilled, totalEmpty.current);
    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Brilliant logic!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Great effort!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep practising!");
    }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-logic-grid",
      score: state.score,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: state.cellsFilled,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.score, state.errorCount, state.cellsFilled, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Fill the grid with 0s and 1s!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── track total empty cells after START ─── */

  useEffect(() => {
    if (state.phase === "playing" && state.cellsFilled === 0) {
      let empty = 0;
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (!state.board[r]![c]!.locked) empty++;
        }
      }
      totalEmpty.current = empty;
    }
  }, [state.phase, state.board, state.cellsFilled]);

  /* ─── cell click ─── */

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (state.phase !== "playing") return;
      if (state.board[row]![col]!.locked) {
        hapticError();
        return;
      }
      hapticSelection();
      dispatch({ type: "TOGGLE_CELL", row, col });
    },
    [state.phase, state.board],
  );

  /* ─── keyboard navigation ─── */

  const focusRef = useRef<{ row: number; col: number }>({ row: 0, col: 0 });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (state.phase !== "playing") return;
      const { row, col } = focusRef.current;
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          focusRef.current = { row: Math.max(0, row - 1), col };
          break;
        case "ArrowDown":
          e.preventDefault();
          focusRef.current = { row: Math.min(SIZE - 1, row + 1), col };
          break;
        case "ArrowLeft":
          e.preventDefault();
          focusRef.current = { row, col: Math.max(0, col - 1) };
          break;
        case "ArrowRight":
          e.preventDefault();
          focusRef.current = { row, col: Math.min(SIZE - 1, col + 1) };
          break;
        case " ":
        case "Enter":
          e.preventDefault();
          handleCellClick(focusRef.current.row, focusRef.current.col);
          break;
        default:
          return;
      }
      // Focus the corresponding button
      const btn = document.querySelector(
        `[data-cell="${focusRef.current.row}-${focusRef.current.col}"]`,
      ) as HTMLButtonElement | null;
      btn?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase, handleCellClick]);

  const stars = calcStars(state.score, state.errorCount, state.cellsFilled, totalEmpty.current);

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Logic Grid
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Errors {state.errorCount} · Filled {state.cellsFilled}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section
            key="ready"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <MascotFriend id="spark" mood="happy" size="lg" />
            <p className="mt-3 max-w-xs text-sm text-indigo-700 dark:text-indigo-300">
              Fill the grid with 0s and 1s. No three in a row, and equal
              numbers in every row and column!
            </p>
            <div className="mt-5">
              <PhysicalButton
                onClick={startGame}
                variant="primary"
                className="px-8 py-3"
              >
                <Gamepad2 className="mr-2 inline h-4 w-4" /> Start Game
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {/* Rules reminder */}
            <div className="mb-3 rounded-xl bg-indigo-50/50 px-3 py-2 text-center text-xs text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
              Click to cycle: empty → 0 → 1 → empty
            </div>

            {/* Board */}
            <div
              className="relative mx-auto grid gap-1 rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-2 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{
                gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`,
                maxWidth: "22rem",
              }}
              role="grid"
              aria-label="Logic grid"
            >
              {state.board.map((row, ri) =>
                row.map((cell, ci) => {
                  const hasError = state.errors[ri]![ci];
                  let cellStyle: string;
                  if (cell.value === null) {
                    cellStyle = CELL_EMPTY;
                  } else if (cell.value === 0) {
                    cellStyle = cell.locked ? CELL_ZERO_LOCKED : CELL_ZERO;
                  } else {
                    cellStyle = cell.locked ? CELL_ONE_LOCKED : CELL_ONE;
                  }

                  return (
                    <motion.button
                      key={`${ri}-${ci}`}
                      data-cell={`${ri}-${ci}`}
                      type="button"
                      onClick={() => handleCellClick(ri, ci)}
                      disabled={cell.locked}
                      className={`aspect-square rounded-lg text-lg font-bold transition-all select-none ${cellStyle} ${hasError ? CELL_ERROR : ""} ${cell.locked ? "cursor-default opacity-90" : "cursor-pointer active:scale-95"}`}
                      whileTap={cell.locked ? undefined : { scale: 0.9 }}
                      role="gridcell"
                      aria-label={`Row ${ri + 1} Column ${ci + 1}: ${cell.value === null ? "empty" : cell.value}${cell.locked ? " (locked)" : ""}`}
                    >
                      {cell.value !== null ? cell.value : ""}
                    </motion.button>
                  );
                }),
              )}
            </div>

            {/* Legend */}
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-indigo-600 dark:text-indigo-400">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-sky-400 dark:bg-sky-600" /> 0
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-amber-400 dark:bg-amber-500" /> 1
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-slate-100 dark:bg-slate-800" /> empty
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded ring-2 ring-red-500" /> error
              </span>
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30"
          >
            <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
              {stars >= 2 ? "Brilliant!" : "Puzzle Complete!"}
            </div>
            <div className="flex justify-center">
              <MascotFriend
                id="spark"
                mood={stars >= 2 ? "cheering" : "thinking"}
                size="lg"
              />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{
                    scale: i < stars ? 1 : 0.5,
                    rotate: 0,
                    opacity: i < stars ? 1 : 0.3,
                  }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  className="text-5xl"
                >
                  {"\u2B50"}
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
              Score {state.score} / {MAX_SCORE} · Errors {state.errorCount}
            </p>
            <div className="mt-5">
              <PhysicalButton
                onClick={startGame}
                variant="primary"
                className="px-8 py-3"
              >
                <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
