"use client";

import { useEffect, useMemo, useReducer } from "react";
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

/* ─── constants ─── */
const SIZE = 6;
type CellType = "blue" | "red" | "empty";

interface Cell {
  type: CellType;
  value: number; // for red: sightline count; blue/empty: 0
}

type Phase = "ready" | "playing" | "won";

interface State {
  phase: Phase;
  sessionId: string;
  grid: Cell[][];
  solution: CellType[][];
  startTime: number;
  moves: number;
  interactions: number;
}

/* sightline count: how many blue cells a red cell can "see" (horiz+vert, blocked by other red) */
function countSight(grid: CellType[][], r: number, c: number): number {
  let count = 0;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (const [dr, dc] of dirs) {
    let nr = r + dr!, nc = c + dc!;
    while (nr >= 0 && nr < SIZE && nc >= 0 && nc < SIZE) {
      if (grid[nr]![nc] === "red") break;
      if (grid[nr]![nc] === "blue") count++;
      nr += dr!;
      nc += dc!;
    }
  }
  return count;
}

function generatePuzzle(): { grid: Cell[][]; solution: CellType[][] } {
  /* build a random valid board */
  const sol: CellType[][] = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => (Math.random() < 0.35 ? "blue" : "red")),
  );

  const grid: Cell[][] = sol.map((row, r) =>
    row.map((type, c) => {
      if (type === "red") {
        return { type: "red", value: countSight(sol, r, c) };
      }
      return { type: "empty", value: 0 };
    }),
  );

  return { grid, solution: sol };
}

function checkWin(grid: Cell[][], solution: CellType[][]): boolean {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (solution[r]![c] === "blue" && grid[r]![c]!.type !== "blue") return false;
      if (solution[r]![c] === "red" && grid[r]![c]!.type === "blue") return false;
    }
  }
  return true;
}

const init = (): State => {
  const { grid, solution } = generatePuzzle();
  return { phase: "ready", sessionId: createLegacySessionId(), grid, solution, startTime: 0, moves: 0, interactions: 0 };
};

type Action =
  | { type: "START" }
  | { type: "TOGGLE"; r: number; c: number };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const p = generatePuzzle();
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), grid: p.grid, solution: p.solution, startTime: Date.now() };
    }
    case "TOGGLE": {
      if (s.phase !== "playing") return s;
      const cell = s.grid[a.r]![a.c]!;
      if (cell.type === "red") return s; // can't toggle numbered cells
      const ng = s.grid.map((row) => row.map((c) => ({ ...c })));
      const current = ng[a.r]![a.c]!;
      current.type = current.type === "empty" ? "blue" : "empty";
      const won = checkWin(ng, s.solution);
      return { ...s, grid: ng, moves: s.moves + 1, interactions: s.interactions + 1, phase: won ? "won" : "playing" };
    }
    default:
      return s;
  }
}

export default function GameNumberDots({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  const stars = useMemo(() => {
    if (s.phase !== "won") return 0;
    if (s.moves <= SIZE * 2) return 3;
    if (s.moves <= SIZE * 4) return 2;
    return 1;
  }, [s.phase, s.moves]);

  useEffect(() => {
    if (s.phase !== "won") return;
    setMood("cheering");
    hapticCelebration();
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-number-dots", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: Math.max(0, 100 - s.moves), maxScore: 100,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  const cellSize = Math.min(56, (width - 48) / SIZE);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="spark" mood={s.phase === "won" ? "happy" : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
          <Hash className="h-4 w-4" /> Moves: {s.moves}
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-3xl font-bold text-slate-800">Number Dots</p>
          <p className="max-w-xs text-center text-sm text-slate-600">
            Mark cells blue so each numbered red cell sees exactly that many blue cells in its row and column.
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <div
          className="gap-[2px] rounded-xl bg-slate-300 p-1 shadow-lg"
          style={{ display: "grid", gridTemplateColumns: `repeat(${SIZE}, ${cellSize}px)` }}
        >
          {s.grid.flatMap((row, r) =>
            row.map((cell, c) => (
              <button
                key={`${r}-${c}`}
                onClick={() => { dispatch({ type: "TOGGLE", r, c }); hapticSelection(); }}
                disabled={cell.type === "red" || s.phase === "won"}
                className={`flex items-center justify-center rounded-md text-lg font-bold transition-colors
                  ${cell.type === "red" ? "bg-red-400 text-white cursor-default"
                    : cell.type === "blue" ? "bg-blue-400 text-white"
                    : "bg-white text-slate-400 hover:bg-blue-100"}`}
                style={{ width: cellSize, height: cellSize }}
              >
                {cell.type === "red" ? cell.value : cell.type === "blue" ? "●" : ""}
              </button>
            )),
          )}
        </div>
      )}

      {s.phase === "won" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">Solved!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
