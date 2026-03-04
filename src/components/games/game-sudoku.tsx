"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Hash } from "lucide-react";
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

/* ─── sudoku generator ─── */
type Phase = "ready" | "playing" | "won";

function solveSudoku(board: number[][]): boolean {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r]![c] !== 0) continue;
      for (let n = 1; n <= 9; n++) {
        if (isValid(board, r, c, n)) {
          board[r]![c] = n;
          if (solveSudoku(board)) return true;
          board[r]![c] = 0;
        }
      }
      return false;
    }
  }
  return true;
}

function isValid(board: number[][], r: number, c: number, n: number): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[r]![i] === n || board[i]![c] === n) return false;
    const br = 3 * Math.floor(r / 3) + Math.floor(i / 3);
    const bc = 3 * Math.floor(c / 3) + (i % 3);
    if (board[br]![bc] === n) return false;
  }
  return true;
}

function generatePuzzle(): { puzzle: number[][]; solution: number[][] } {
  const board: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0) as number[]);
  // fill diagonal 3x3 blocks
  for (let b = 0; b < 3; b++) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
    for (let i = 0; i < 9; i++) board[b * 3 + Math.floor(i / 3)]![b * 3 + (i % 3)] = nums[i]!;
  }
  solveSudoku(board);
  const solution = board.map((r) => [...r]);
  // remove cells
  let removed = 0;
  const target = 40;
  const positions = Array.from({ length: 81 }, (_, i) => i).sort(() => Math.random() - 0.5);
  for (const pos of positions) {
    if (removed >= target) break;
    const r = Math.floor(pos / 9), c = pos % 9;
    board[r]![c] = 0;
    removed++;
  }
  return { puzzle: board, solution };
}

interface State {
  phase: Phase;
  sessionId: string;
  puzzle: number[][];
  solution: number[][];
  board: number[][];
  given: boolean[][];
  selected: [number, number] | null;
  errors: number;
  startTime: number;
  interactions: number;
}

const init = (): State => {
  const { puzzle, solution } = generatePuzzle();
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    puzzle: puzzle.map((r) => [...r]),
    solution,
    board: puzzle.map((r) => [...r]),
    given: puzzle.map((r) => r.map((v) => v !== 0)),
    selected: null,
    errors: 0,
    startTime: 0,
    interactions: 0,
  };
};

type Action =
  | { type: "START" }
  | { type: "SELECT"; r: number; c: number }
  | { type: "INPUT"; n: number }
  | { type: "CLEAR" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const { puzzle, solution } = generatePuzzle();
      return {
        ...init(),
        phase: "playing",
        sessionId: createLegacySessionId(),
        puzzle: puzzle.map((r) => [...r]),
        solution,
        board: puzzle.map((r) => [...r]),
        given: puzzle.map((r) => r.map((v) => v !== 0)),
        startTime: Date.now(),
      };
    }
    case "SELECT":
      if (s.phase !== "playing") return s;
      return { ...s, selected: [a.r, a.c] };
    case "INPUT": {
      if (s.phase !== "playing" || !s.selected) return s;
      const [r, c] = s.selected;
      if (s.given[r]![c]) return s;
      const board = s.board.map((row) => [...row]);
      board[r]![c] = a.n;
      const correct = s.solution[r]![c] === a.n;
      const errors = correct ? s.errors : s.errors + 1;
      // check win
      let won = true;
      for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
          if (board[i]![j] !== s.solution[i]![j]) won = false;
      return { ...s, board, errors, interactions: s.interactions + 1, phase: won ? "won" : "playing" };
    }
    case "CLEAR": {
      if (s.phase !== "playing" || !s.selected) return s;
      const [r, c] = s.selected;
      if (s.given[r]![c]) return s;
      const board = s.board.map((row) => [...row]);
      board[r]![c] = 0;
      return { ...s, board };
    }
    default:
      return s;
  }
}

export default function GameSudoku({ width = 400, height = 560 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const isOver = s.phase === "won";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.errors === 0) return 3;
    if (s.errors <= 3) return 2;
    return 1;
  }, [isOver, s.errors]);

  useEffect(() => {
    if (!isOver) return;
    setMood("cheering");
    hapticCelebration();
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-sudoku", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: Math.max(0, 100 - s.errors * 10), maxScore: 100, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  // keyboard
  useEffect(() => {
    if (s.phase !== "playing") return;
    const handle = (e: KeyboardEvent) => {
      const n = parseInt(e.key);
      if (n >= 1 && n <= 9) { dispatch({ type: "INPUT", n }); hapticSelection(); }
      if (e.key === "Backspace" || e.key === "Delete") dispatch({ type: "CLEAR" });
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [s.phase]);

  const cellSize = Math.min(36, (width - 32) / 9);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="spark" mood={isOver ? "happy" : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
          <Hash className="h-4 w-4" /> Errors: {s.errors}
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-3xl font-bold text-slate-800">Sudoku</p>
          <p className="text-sm text-slate-600">Fill every row, column &amp; box with 1-9!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <>
          <div className="rounded-xl border-2 border-slate-800 bg-white p-1 shadow-lg" style={{ display: "grid", gridTemplateColumns: `repeat(9, ${cellSize}px)` }}>
            {s.board.flatMap((row, r) =>
              row.map((val, c) => {
                const isSelected = s.selected?.[0] === r && s.selected?.[1] === c;
                const isGiven = s.given[r]![c];
                const isWrong = val !== 0 && val !== s.solution[r]![c];
                const borderR = c === 2 || c === 5 ? "border-r-2 border-r-slate-800" : "";
                const borderB = r === 2 || r === 5 ? "border-b-2 border-b-slate-800" : "";
                return (
                  <button
                    key={`${r}-${c}`}
                    className={`flex items-center justify-center border border-slate-200 text-sm font-bold transition-colors ${borderR} ${borderB} ${
                      isSelected ? "bg-blue-200" : isWrong ? "bg-red-100" : isGiven ? "bg-slate-100" : "bg-white hover:bg-blue-50"
                    } ${isGiven ? "text-slate-800" : isWrong ? "text-red-600" : "text-blue-600"}`}
                    style={{ width: cellSize, height: cellSize }}
                    onClick={() => { dispatch({ type: "SELECT", r, c }); hapticSelection(); }}
                  >
                    {val || ""}
                  </button>
                );
              }),
            )}
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <button
                key={n}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold text-white shadow hover:bg-blue-400"
                onClick={() => { dispatch({ type: "INPUT", n }); hapticSelection(); }}
              >
                {n}
              </button>
            ))}
          </div>
        </>
      )}

      {isOver && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">Puzzle Complete!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> New Puzzle</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
