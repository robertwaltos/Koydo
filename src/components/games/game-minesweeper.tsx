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

type Phase = "ready" | "playing" | "won" | "lost";

const ROWS = 9;
const COLS = 9;
const MINE_COUNT = 10;
const MAX_SCORE = 1000;

const NUMBER_COLORS: Record<number, string> = {
  1: "text-blue-600 dark:text-blue-400",
  2: "text-green-600 dark:text-green-400",
  3: "text-red-600 dark:text-red-400",
  4: "text-purple-700 dark:text-purple-400",
  5: "text-red-900 dark:text-red-300",
  6: "text-teal-600 dark:text-teal-400",
  7: "text-gray-900 dark:text-gray-100",
  8: "text-gray-500 dark:text-gray-400",
};

/* ─── types ─── */

interface CellData {
  mine: boolean;
  revealed: boolean;
  flagged: boolean;
  adjacent: number;
}

interface State {
  phase: Phase;
  board: CellData[][];
  minesPlaced: boolean;
  cellsRevealed: number;
  startTime: number;
  elapsedMs: number;
}

type Action =
  | { type: "START" }
  | { type: "REVEAL"; row: number; col: number }
  | { type: "FLAG"; row: number; col: number }
  | { type: "TICK"; now: number };

/* ─── helpers ─── */

function emptyBoard(): CellData[][] {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      mine: false,
      revealed: false,
      flagged: false,
      adjacent: 0,
    })),
  );
}

function placeMines(board: CellData[][], safeRow: number, safeCol: number): CellData[][] {
  const next = board.map((r) => r.map((c) => ({ ...c })));
  let placed = 0;
  while (placed < MINE_COUNT) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (next[r]![c]!.mine) continue;
    if (Math.abs(r - safeRow) <= 1 && Math.abs(c - safeCol) <= 1) continue;
    next[r]![c]!.mine = true;
    placed++;
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (next[r]![c]!.mine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && next[nr]![nc]!.mine) {
            count++;
          }
        }
      }
      next[r]![c]!.adjacent = count;
    }
  }
  return next;
}

function floodReveal(board: CellData[][], row: number, col: number): { board: CellData[][]; count: number } {
  const next = board.map((r) => r.map((c) => ({ ...c })));
  let count = 0;
  const stack: [number, number][] = [[row, col]];

  while (stack.length > 0) {
    const [r, c] = stack.pop()!;
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
    const cell = next[r]![c]!;
    if (cell.revealed || cell.flagged || cell.mine) continue;
    cell.revealed = true;
    count++;
    if (cell.adjacent === 0) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          stack.push([r + dr, c + dc]);
        }
      }
    }
  }
  return { board: next, count };
}

function countRevealed(board: CellData[][]): number {
  let count = 0;
  for (const row of board) {
    for (const cell of row) {
      if (cell.revealed) count++;
    }
  }
  return count;
}

function countFlags(board: CellData[][]): number {
  let count = 0;
  for (const row of board) {
    for (const cell of row) {
      if (cell.flagged) count++;
    }
  }
  return count;
}

function checkWin(board: CellData[][]): boolean {
  for (const row of board) {
    for (const cell of row) {
      if (!cell.mine && !cell.revealed) return false;
    }
  }
  return true;
}

function revealAllMines(board: CellData[][]): CellData[][] {
  return board.map((r) =>
    r.map((c) => (c.mine ? { ...c, revealed: true } : { ...c })),
  );
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      return {
        phase: "playing",
        board: emptyBoard(),
        minesPlaced: false,
        cellsRevealed: 0,
        startTime: Date.now(),
        elapsedMs: 0,
      };
    }
    case "REVEAL": {
      if (state.phase !== "playing") return state;
      const { row, col } = action;
      let board = state.board;

      if (!state.minesPlaced) {
        board = placeMines(board, row, col);
      }

      const cell = board[row]![col]!;
      if (cell.revealed || cell.flagged) return { ...state, board, minesPlaced: true };

      if (cell.mine) {
        return {
          ...state,
          phase: "lost",
          board: revealAllMines(board),
          minesPlaced: true,
          elapsedMs: Date.now() - state.startTime,
        };
      }

      const { board: nextBoard, count } = floodReveal(board, row, col);
      const totalRevealed = countRevealed(nextBoard);

      if (checkWin(nextBoard)) {
        return {
          ...state,
          phase: "won",
          board: nextBoard,
          minesPlaced: true,
          cellsRevealed: totalRevealed,
          elapsedMs: Date.now() - state.startTime,
        };
      }

      return {
        ...state,
        board: nextBoard,
        minesPlaced: true,
        cellsRevealed: totalRevealed,
        elapsedMs: Date.now() - state.startTime,
      };
    }
    case "FLAG": {
      if (state.phase !== "playing") return state;
      const { row, col } = action;
      const cell = state.board[row]![col]!;
      if (cell.revealed) return state;
      const nextBoard = state.board.map((r) => r.map((c) => ({ ...c })));
      nextBoard[row]![col]!.flagged = !cell.flagged;
      return { ...state, board: nextBoard };
    }
    case "TICK": {
      if (state.phase !== "playing") return state;
      return { ...state, elapsedMs: action.now - state.startTime };
    }
    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(phase: Phase, elapsedMs: number, cellsRevealed: number): number {
  const seconds = Math.floor(elapsedMs / 1000);
  if (phase === "won" && seconds < 60) return 3;
  if (phase === "won") return 2;
  if (cellsRevealed >= 30) return 1;
  return 0;
}

/* ─── score calc ─── */

function calcScore(phase: Phase, elapsedMs: number, cellsRevealed: number): number {
  const seconds = Math.floor(elapsedMs / 1000);
  if (phase === "won") return Math.max(100, MAX_SCORE - seconds * 5);
  return cellsRevealed * 5;
}

/* ─── component ─── */

export default function GameMinesweeper() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const longPressRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    board: emptyBoard(),
    minesPlaced: false,
    cellsRevealed: 0,
    startTime: 0,
    elapsedMs: 0,
  });

  /* ─── timer tick ─── */

  useEffect(() => {
    if (state.phase !== "playing") return;
    const interval = setInterval(() => dispatch({ type: "TICK", now: Date.now() }), 200);
    return () => clearInterval(interval);
  }, [state.phase]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "won" && state.phase !== "lost") return;
    if (completionSentRef.current) return;
    completionSentRef.current = true;

    const score = calcScore(state.phase, state.elapsedMs, state.cellsRevealed);
    const stars = calcStars(state.phase, state.elapsedMs, state.cellsRevealed);

    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Mine sweeping master!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Good effort!");
    } else if (state.phase === "won") {
      hapticSuccess();
      setMood("happy");
      setMessage("You cleared it!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Boom! Try again!");
    }

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-minesweeper",
      score,
      maxScore: MAX_SCORE,
      elapsedMs: state.elapsedMs,
      interactions: Math.max(1, state.cellsRevealed),
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.elapsedMs, state.cellsRevealed, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Find the mines!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── cell handlers ─── */

  const handleReveal = useCallback(
    (row: number, col: number) => {
      dispatch({ type: "REVEAL", row, col });
      hapticSelection();
    },
    [],
  );

  const handleFlag = useCallback(
    (row: number, col: number) => {
      dispatch({ type: "FLAG", row, col });
      hapticSelection();
    },
    [],
  );

  const handleContextMenu = useCallback(
    (e: React.MouseEvent, row: number, col: number) => {
      e.preventDefault();
      handleFlag(row, col);
    },
    [handleFlag],
  );

  const handleTouchStart = useCallback(
    (row: number, col: number) => {
      longPressRef.current = setTimeout(() => {
        handleFlag(row, col);
        longPressRef.current = null;
      }, 400);
    },
    [handleFlag],
  );

  const handleTouchEnd = useCallback(
    (row: number, col: number) => {
      if (longPressRef.current !== null) {
        clearTimeout(longPressRef.current);
        longPressRef.current = null;
        handleReveal(row, col);
      }
    },
    [handleReveal],
  );

  /* ─── derived values ─── */

  const elapsedSeconds = Math.floor(state.elapsedMs / 1000);
  const flagCount = countFlags(state.board);
  const minesRemaining = MINE_COUNT - flagCount;
  const isFinished = state.phase === "won" || state.phase === "lost";
  const score = isFinished ? calcScore(state.phase, state.elapsedMs, state.cellsRevealed) : 0;
  const stars = isFinished ? calcStars(state.phase, state.elapsedMs, state.cellsRevealed) : 0;

  /* ─── render cell content ─── */

  function renderCellContent(cell: CellData): React.ReactNode {
    if (cell.flagged && !cell.revealed) return "\u{1F6A9}";
    if (!cell.revealed) return null;
    if (cell.mine) return "\u{1F4A3}";
    if (cell.adjacent === 0) return null;
    return cell.adjacent;
  }

  function cellClasses(cell: CellData): string {
    const base =
      "flex items-center justify-center text-xs font-bold select-none transition-colors";
    if (!cell.revealed) {
      return `${base} bg-indigo-300/60 dark:bg-indigo-700/50 hover:bg-indigo-400/60 dark:hover:bg-indigo-600/50 cursor-pointer border border-indigo-400/30 dark:border-indigo-600/30`;
    }
    if (cell.mine) {
      return `${base} bg-red-300/60 dark:bg-red-800/50 border border-red-400/40 dark:border-red-600/40`;
    }
    const numColor = cell.adjacent > 0 ? NUMBER_COLORS[cell.adjacent] ?? "" : "";
    return `${base} bg-slate-100/60 dark:bg-slate-800/40 border border-slate-300/30 dark:border-slate-700/30 ${numColor}`;
  }

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Minesweeper
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Mines {minesRemaining} &middot; Time {elapsedSeconds}s &middot; Revealed{" "}
            {state.cellsRevealed}
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
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Reveal all safe cells without hitting a mine!
            </p>
            <p className="mt-1 text-xs text-indigo-500 dark:text-indigo-400">
              Right-click or long-press to flag mines
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
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
            <div
              className="relative mx-auto grid gap-px rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-1 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                maxWidth: "22rem",
              }}
              role="grid"
              aria-label="Minesweeper board"
            >
              {state.board.map((row, ri) =>
                row.map((cell, ci) => (
                  <button
                    key={`${ri}-${ci}`}
                    type="button"
                    className={`aspect-square rounded-sm ${cellClasses(cell)}`}
                    onClick={() => handleReveal(ri, ci)}
                    onContextMenu={(e) => handleContextMenu(e, ri, ci)}
                    onTouchStart={() => handleTouchStart(ri, ci)}
                    onTouchEnd={() => handleTouchEnd(ri, ci)}
                    disabled={cell.revealed}
                    role="gridcell"
                    aria-label={
                      cell.flagged
                        ? `Row ${ri + 1}, column ${ci + 1}, flagged`
                        : cell.revealed
                          ? `Row ${ri + 1}, column ${ci + 1}, ${cell.mine ? "mine" : cell.adjacent}`
                          : `Row ${ri + 1}, column ${ci + 1}, hidden`
                    }
                  >
                    {renderCellContent(cell)}
                  </button>
                )),
              )}
            </div>
          </motion.section>
        )}

        {/* ─── WON / LOST ─── */}
        {isFinished && (
          <motion.section
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            {/* Frozen board */}
            <div
              className="relative mx-auto grid gap-px rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-1 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                maxWidth: "22rem",
              }}
              role="grid"
              aria-label="Minesweeper board result"
            >
              {state.board.map((row, ri) =>
                row.map((cell, ci) => (
                  <div
                    key={`${ri}-${ci}`}
                    className={`aspect-square rounded-sm ${cellClasses(cell)}`}
                    role="gridcell"
                  >
                    {renderCellContent(cell)}
                  </div>
                )),
              )}
            </div>

            {/* Result panel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30"
            >
              <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
                {state.phase === "won" ? "You Win!" : "Game Over"}
              </div>
              <div className="flex justify-center">
                <MascotFriend
                  id="spark"
                  mood={state.phase === "won" ? "cheering" : "thinking"}
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
                Score {score} &middot; Time {elapsedSeconds}s &middot; Revealed{" "}
                {state.cellsRevealed} cells
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                  <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
                </PhysicalButton>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
