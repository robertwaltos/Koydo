"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

// ─── Constants ────────────────────────────────────────────────────────────────
const ROWS = 9;
const COLS = 9;
const MINES = 10;
const SESSION_ID = createLegacySessionId();

type CellState = {
  isMine: boolean;
  revealed: boolean;
  flagged: boolean;
  adjacentMines: number;
};

type Phase = "ready" | "playing" | "complete";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function createGrid(firstRow: number, firstCol: number): CellState[][] {
  const grid: CellState[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      isMine: false,
      revealed: false,
      flagged: false,
      adjacentMines: 0,
    }))
  );

  // Place mines (avoid first click)
  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!grid[r][c].isMine && !(Math.abs(r - firstRow) <= 1 && Math.abs(c - firstCol) <= 1)) {
      grid[r][c].isMine = true;
      placed++;
    }
  }

  // Calculate adjacent counts
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c].isMine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc].isMine) count++;
        }
      }
      grid[r][c].adjacentMines = count;
    }
  }
  return grid;
}

function revealCells(grid: CellState[][], row: number, col: number): CellState[][] {
  const next = grid.map((r) => r.map((c) => ({ ...c })));
  const stack: [number, number][] = [[row, col]];
  while (stack.length > 0) {
    const [r, c] = stack.pop()!;
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
    const cell = next[r][c];
    if (cell.revealed || cell.flagged || cell.isMine) continue;
    cell.revealed = true;
    if (cell.adjacentMines === 0) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          stack.push([r + dr, c + dc]);
        }
      }
    }
  }
  return next;
}

const NUM_COLORS: Record<number, string> = {
  1: "text-blue-600",
  2: "text-green-600",
  3: "text-red-600",
  4: "text-purple-800",
  5: "text-red-800",
  6: "text-teal-600",
  7: "text-black",
  8: "text-stone-500",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone081TerraMinefieldMap() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [grid, setGrid] = useState<CellState[][]>([]);
  const [initialized, setInitialized] = useState(false);
  const [flagMode, setFlagMode] = useState(false);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);
  const [minesLeft, setMinesLeft] = useState(MINES);

  const countFlags = useCallback((g: CellState[][]): number => {
    return g.flat().filter((c) => c.flagged).length;
  }, []);

  const checkWin = useCallback((g: CellState[][]): boolean => {
    return g.flat().every((c) => c.isMine || c.revealed);
  }, []);

  const handleWin = useCallback((finalGrid: CellState[][]) => {
    setPhase("complete");
    hapticSuccess();
    const elapsed = Date.now() - startTime;
    const timeBonus = Math.max(0, 600 - Math.floor(elapsed / 1000)) * 2;
    const sc = 500 + timeBonus;
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-081",
      score: sc,
      maxScore: 1100,
      elapsedMs: elapsed,
      interactions,
      difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
    mascot.speak("All mines found! Terra Minefield Master!", "celebrate");
  }, [interactions, mascot, startTime]);

  const handleLoss = useCallback((finalGrid: CellState[][]) => {
    // Reveal all mines
    const next = finalGrid.map((r) => r.map((c) => ({
      ...c,
      revealed: c.isMine ? true : c.revealed,
    })));
    setGrid(next);
    setPhase("complete");
    hapticError();
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-081",
      score: 0,
      maxScore: 1100,
      elapsedMs: Date.now() - startTime,
      interactions,
      difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
    mascot.speak("BOOM! You hit a mine. Flag suspicious cells first next time!", "encourage");
  }, [interactions, mascot, startTime]);

  const startGame = () => {
    setGrid([]);
    setInitialized(false);
    setFlagMode(false);
    setMinesLeft(MINES);
    setInteractions(0);
    setPhase("playing");
    mascot.speak("Reveal safe cells, flag the mines! First click is always safe.", "happy");
  };

  const handleCellClick = useCallback((row: number, col: number) => {
    if (phase !== "playing") return;
    setInteractions((n) => n + 1);

    let currentGrid = grid;

    // First click: initialize grid
    if (!initialized) {
      currentGrid = createGrid(row, col);
      setInitialized(true);
    }

    const cell = currentGrid[row][col];
    if (cell.revealed) return;

    if (flagMode) {
      // Toggle flag
      const next = currentGrid.map((r) => r.map((c) => ({ ...c })));
      next[row][col].flagged = !next[row][col].flagged;
      hapticSelection();
      setMinesLeft(MINES - countFlags(next));
      setGrid(next);
      return;
    }

    if (cell.flagged) return;

    if (cell.isMine) {
      handleLoss(currentGrid);
      return;
    }

    const next = revealCells(currentGrid, row, col);
    hapticSelection();
    setGrid(next);

    if (checkWin(next)) {
      handleWin(next);
    }
  }, [checkWin, countFlags, flagMode, grid, handleLoss, handleWin, initialized, phase]);

  const handleCellRightClick = useCallback((e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault();
    if (phase !== "playing" || !initialized) return;
    const cell = grid[row][col];
    if (cell.revealed) return;
    const next = grid.map((r) => r.map((c) => ({ ...c })));
    next[row][col].flagged = !next[row][col].flagged;
    hapticSelection();
    setMinesLeft(MINES - countFlags(next));
    setGrid(next);
    setInteractions((n) => n + 1);
  }, [countFlags, grid, initialized, phase]);

  const safeRevealed = grid.flat().filter((c) => !c.isMine && c.revealed).length;
  const totalSafe = ROWS * COLS - MINES;

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="terra" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Terra Minefield Map</h2>
          <p className="text-xs text-stone-500">Reveal safe squares, flag the mines!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">💣</p>
            <h3 className="text-lg font-black text-stone-800">Minefield Map</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Reveal all safe cells without hitting a mine. Numbers show how many mines are nearby. Right-click or use Flag Mode to mark mines.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Enter the Field!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* HUD */}
            <div className="flex items-center justify-between w-full max-w-xs px-2">
              <div className="flex items-center gap-1 text-sm font-bold text-stone-700">
                <span>💣</span>
                <span>{minesLeft}</span>
              </div>
              <div className="text-xs text-stone-500">{safeRevealed}/{totalSafe} safe</div>
              <button
                onClick={() => setFlagMode((f) => !f)}
                className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold transition-colors ${
                  flagMode ? "bg-amber-500 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                <Flag className="h-3 w-3" />
                {flagMode ? "Flag ON" : "Flag"}
              </button>
            </div>

            {/* Grid */}
            <div
              className="border border-stone-300 rounded-xl overflow-hidden"
              style={{ display: "grid", gridTemplateColumns: `repeat(${COLS}, 32px)` }}
            >
              {(initialized ? grid : Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => ({ revealed: false, isMine: false, flagged: false, adjacentMines: 0 })))).map((row, r) =>
                row.map((cell, c) => (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => handleCellClick(r, c)}
                    onContextMenu={(e) => handleCellRightClick(e, r, c)}
                    className={`w-8 h-8 flex items-center justify-center text-xs font-black border border-stone-300 transition-colors
                      ${cell.revealed
                        ? cell.isMine
                          ? "bg-red-500 text-white"
                          : "bg-stone-100"
                        : cell.flagged
                        ? "bg-amber-100"
                        : "bg-stone-600 hover:bg-stone-500 active:scale-95"
                      }`}
                  >
                    {cell.revealed
                      ? cell.isMine
                        ? "💣"
                        : cell.adjacentMines > 0
                        ? <span className={NUM_COLORS[cell.adjacentMines] ?? "text-stone-800"}>{cell.adjacentMines}</span>
                        : ""
                      : cell.flagged
                      ? "🚩"
                      : ""}
                  </button>
                ))
              )}
            </div>
            <p className="text-[11px] text-stone-400">Right-click or toggle Flag to mark mines</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{safeRevealed === totalSafe ? "🏆" : "💥"}</p>
            <h3 className="text-lg font-black text-stone-800">
              {safeRevealed === totalSafe ? "Field Cleared!" : "Mine Hit!"}
            </h3>
            <p className="text-sm text-stone-600">{safeRevealed}/{totalSafe} safe squares revealed</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> New Field
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
