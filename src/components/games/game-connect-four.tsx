"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Circle, RotateCcw, Trophy } from "lucide-react";
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
type Player = 1 | 2; // 1 = human (red), 2 = AI (yellow)
type Cell = 0 | 1 | 2;

const ROWS = 6;
const COLS = 7;
const WIN_LENGTH = 4;
const MAX_SCORE = 10000;
const AI_DEPTH = 5;

/* ─── helpers ─── */

function emptyGrid(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0) as Cell[]);
}

function clone(grid: Cell[][]): Cell[][] {
  return grid.map((r) => [...r]);
}

function dropRow(grid: Cell[][], col: number): number {
  for (let r = ROWS - 1; r >= 0; r--) {
    if (grid[r]![col] === 0) return r;
  }
  return -1;
}

function dropPiece(grid: Cell[][], col: number, player: Player): Cell[][] | null {
  const r = dropRow(grid, col);
  if (r < 0) return null;
  const next = clone(grid);
  next[r]![col] = player;
  return next;
}

function checkWin(grid: Cell[][], player: Player): boolean {
  // horizontal
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c <= COLS - WIN_LENGTH; c++) {
      if (grid[r]![c] === player && grid[r]![c + 1] === player && grid[r]![c + 2] === player && grid[r]![c + 3] === player) return true;
    }
  }
  // vertical
  for (let r = 0; r <= ROWS - WIN_LENGTH; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r]![c] === player && grid[r + 1]![c] === player && grid[r + 2]![c] === player && grid[r + 3]![c] === player) return true;
    }
  }
  // diagonal ↘
  for (let r = 0; r <= ROWS - WIN_LENGTH; r++) {
    for (let c = 0; c <= COLS - WIN_LENGTH; c++) {
      if (grid[r]![c] === player && grid[r + 1]![c + 1] === player && grid[r + 2]![c + 2] === player && grid[r + 3]![c + 3] === player) return true;
    }
  }
  // diagonal ↗
  for (let r = WIN_LENGTH - 1; r < ROWS; r++) {
    for (let c = 0; c <= COLS - WIN_LENGTH; c++) {
      if (grid[r]![c] === player && grid[r - 1]![c + 1] === player && grid[r - 2]![c + 2] === player && grid[r - 3]![c + 3] === player) return true;
    }
  }
  return false;
}

function isFull(grid: Cell[][]): boolean {
  return grid[0]!.every((c) => c !== 0);
}

/* ─── minimax AI ─── */

function evaluate(grid: Cell[][]): number {
  if (checkWin(grid, 2)) return 1000;
  if (checkWin(grid, 1)) return -1000;
  let score = 0;
  // center column preference
  for (let r = 0; r < ROWS; r++) {
    if (grid[r]![3] === 2) score += 3;
    if (grid[r]![3] === 1) score -= 3;
  }
  return score;
}

function minimax(grid: Cell[][], depth: number, alpha: number, beta: number, maximising: boolean): number {
  if (checkWin(grid, 2)) return 1000 + depth;
  if (checkWin(grid, 1)) return -1000 - depth;
  if (isFull(grid) || depth === 0) return evaluate(grid);

  if (maximising) {
    let best = -Infinity;
    for (let c = 0; c < COLS; c++) {
      const next = dropPiece(grid, c, 2);
      if (!next) continue;
      const val = minimax(next, depth - 1, alpha, beta, false);
      best = Math.max(best, val);
      alpha = Math.max(alpha, val);
      if (beta <= alpha) break;
    }
    return best;
  } else {
    let best = Infinity;
    for (let c = 0; c < COLS; c++) {
      const next = dropPiece(grid, c, 1);
      if (!next) continue;
      const val = minimax(next, depth - 1, alpha, beta, true);
      best = Math.min(best, val);
      beta = Math.min(beta, val);
      if (beta <= alpha) break;
    }
    return best;
  }
}

function aiBestColumn(grid: Cell[][]): number {
  let bestCol = 3;
  let bestVal = -Infinity;
  // randomise column order to avoid predictability
  const cols = Array.from({ length: COLS }, (_, i) => i).sort(() => Math.random() - 0.5);
  for (const c of cols) {
    const next = dropPiece(grid, c, 2);
    if (!next) continue;
    const val = minimax(next, AI_DEPTH, -Infinity, Infinity, false);
    if (val > bestVal) { bestVal = val; bestCol = c; }
  }
  return bestCol;
}

/* ─── state ─── */

interface State {
  phase: Phase;
  grid: Cell[][];
  turn: Player;
  moves: number;
  winner: 0 | 1 | 2; // 0 = draw
  lastCol: number;
  aiThinking: boolean;
}

type Action =
  | { type: "START" }
  | { type: "DROP"; col: number }
  | { type: "AI_MOVE" }
  | { type: "SET_WINNER"; winner: 0 | 1 | 2 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return { phase: "playing", grid: emptyGrid(), turn: 1, moves: 0, winner: 0, lastCol: -1, aiThinking: false };
    case "DROP": {
      if (state.phase !== "playing" || state.turn !== 1) return state;
      const next = dropPiece(state.grid, action.col, 1);
      if (!next) return state;
      if (checkWin(next, 1)) return { ...state, grid: next, moves: state.moves + 1, phase: "complete", winner: 1, lastCol: action.col };
      if (isFull(next)) return { ...state, grid: next, moves: state.moves + 1, phase: "complete", winner: 0, lastCol: action.col };
      return { ...state, grid: next, turn: 2, moves: state.moves + 1, lastCol: action.col, aiThinking: true };
    }
    case "AI_MOVE": {
      if (state.phase !== "playing" || state.turn !== 2) return state;
      const col = aiBestColumn(state.grid);
      const next = dropPiece(state.grid, col, 2);
      if (!next) return state;
      if (checkWin(next, 2)) return { ...state, grid: next, moves: state.moves + 1, phase: "complete", winner: 2, lastCol: col, aiThinking: false };
      if (isFull(next)) return { ...state, grid: next, moves: state.moves + 1, phase: "complete", winner: 0, lastCol: col, aiThinking: false };
      return { ...state, grid: next, turn: 1, moves: state.moves + 1, lastCol: col, aiThinking: false };
    }
    default:
      return state;
  }
}

/* ─── stars ─── */

function calcStars(winner: 0 | 1 | 2, moves: number): number {
  if (winner === 1 && moves <= 14) return 3;
  if (winner === 1 && moves <= 24) return 2;
  if (winner === 1) return 1;
  if (winner === 0) return 1; // draw
  return 0; // AI wins
}

/* ─── component ─── */

export default function GameConnectFour() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    grid: emptyGrid(),
    turn: 1 as Player,
    moves: 0,
    winner: 0 as 0 | 1 | 2,
    lastCol: -1,
    aiThinking: false,
  });

  /* ─── AI turn ─── */

  useEffect(() => {
    if (state.phase !== "playing" || state.turn !== 2) return;
    const timer = setTimeout(() => dispatch({ type: "AI_MOVE" }), 400 + Math.random() * 300);
    return () => clearTimeout(timer);
  }, [state.phase, state.turn]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const stars = calcStars(state.winner, state.moves);
    if (state.winner === 1) { hapticCelebration(); setMood("cheering"); setMessage("You won! Brilliant strategy!"); }
    else if (state.winner === 0) { hapticSuccess(); setMood("thinking"); setMessage("A draw! Well matched!"); }
    else { hapticError(); setMood("sad"); setMessage("The AI won this time. Try again!"); }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-connect-four",
      score: state.winner === 1 ? Math.max(1000, MAX_SCORE - state.moves * 200) : state.winner === 0 ? 3000 : 500,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: Math.max(1, state.moves),
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.winner, state.moves, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Connect four in a row to win!");
    hapticSelection();
  }, [setMessage, setMood]);

  const handleDrop = useCallback(
    (col: number) => {
      if (state.turn !== 1 || state.phase !== "playing") return;
      hapticSelection();
      dispatch({ type: "DROP", col });
    },
    [state.turn, state.phase],
  );

  const stars = calcStars(state.winner, state.moves);

  const cellColor = (cell: Cell) => {
    if (cell === 1) return "bg-rose-500 dark:bg-rose-400 shadow-lg shadow-rose-500/30";
    if (cell === 2) return "bg-yellow-400 dark:bg-yellow-300 shadow-lg shadow-yellow-400/30";
    return "bg-slate-200/60 dark:bg-slate-700/40";
  };

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-blue-900 dark:text-blue-100">
          <Circle className="h-6 w-6" /> Connect Four
        </h2>
        {state.phase === "playing" && (
          <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">
            {state.aiThinking ? "AI is thinking..." : "Your turn — drop a red disc!"}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="luna" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-blue-700 dark:text-blue-300">
              Drop discs into columns. Connect four in a row — horizontally, vertically, or diagonally — to win!
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <Circle className="mr-2 inline h-4 w-4" /> Play vs AI
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            {/* Column drop buttons */}
            <div className="mx-auto mb-1 grid gap-1" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`, maxWidth: "22rem" }}>
              {Array.from({ length: COLS }, (_, c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleDrop(c)}
                  disabled={state.turn !== 1 || state.grid[0]![c] !== 0}
                  className="flex h-8 items-center justify-center rounded-t-xl text-lg text-rose-500 transition-colors hover:bg-blue-200/30 disabled:opacity-30 dark:text-rose-400 dark:hover:bg-blue-800/30"
                  aria-label={`Drop in column ${c + 1}`}
                >
                  ▼
                </button>
              ))}
            </div>

            {/* Board */}
            <div
              className="mx-auto grid gap-1.5 rounded-2xl border border-blue-300/40 bg-blue-600/90 p-2 dark:border-blue-700/40 dark:bg-blue-900/80"
              style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`, maxWidth: "22rem" }}
              role="grid"
              aria-label="Connect Four board"
            >
              {state.grid.map((row, ri) =>
                row.map((cell, ci) => (
                  <motion.div
                    key={`${ri}-${ci}`}
                    initial={false}
                    animate={cell !== 0 ? { scale: [0.5, 1.1, 1] } : {}}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`aspect-square rounded-full ${cellColor(cell)}`}
                    role="gridcell"
                    aria-label={cell === 1 ? "Red disc" : cell === 2 ? "Yellow disc" : "Empty"}
                  />
                )),
              )}
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-blue-200/40 bg-white/60 p-6 text-center dark:border-blue-800/40 dark:bg-black/30">
            <div className="mx-auto mb-4 w-fit rounded-full border border-blue-300/40 bg-blue-200/20 px-4 py-2 text-sm font-bold dark:border-blue-700/40 dark:bg-blue-800/20">
              {state.winner === 1 ? "🎉 You Win!" : state.winner === 2 ? "AI Wins!" : "🤝 Draw!"}
            </div>
            <div className="flex justify-center">
              <MascotFriend id="luna" mood={state.winner === 1 ? "cheering" : state.winner === 0 ? "thinking" : "sad"} size="lg" />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }} transition={{ delay: i * 0.2, type: "spring" }} className="text-5xl">⭐</motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-blue-800 dark:text-blue-200">
              {state.moves} moves played
            </p>
            {/* Show final board */}
            <div
              className="mx-auto mt-4 grid gap-1 rounded-xl bg-blue-600/70 p-1.5 dark:bg-blue-900/60"
              style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`, maxWidth: "16rem" }}
            >
              {state.grid.map((row, ri) =>
                row.map((cell, ci) => (
                  <div key={`${ri}-${ci}`} className={`aspect-square rounded-full ${cellColor(cell)}`} />
                )),
              )}
            </div>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <RotateCcw className="mr-2 inline h-4 w-4" /> Play Again
              </PhysicalButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
