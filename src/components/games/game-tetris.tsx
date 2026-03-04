"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, RotateCcw, Trophy, Pause, Play } from "lucide-react";
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

type Phase = "ready" | "playing" | "paused" | "complete";
type Cell = string | null; // null = empty, string = colour key

const COLS = 10;
const ROWS = 20;
const TICK_MS = 600; // base drop interval
const SPEED_FACTOR = 0.92; // multiplier per level
const LINES_PER_LEVEL = 10;
const MAX_SCORE = 50_000;

const PIECES: Record<string, { shape: number[][]; color: string }> = {
  I: { shape: [[1, 1, 1, 1]], color: "bg-cyan-400 dark:bg-cyan-500" },
  O: { shape: [[1, 1], [1, 1]], color: "bg-yellow-400 dark:bg-yellow-500" },
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: "bg-purple-400 dark:bg-purple-500" },
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: "bg-green-400 dark:bg-green-500" },
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: "bg-red-400 dark:bg-red-500" },
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: "bg-blue-400 dark:bg-blue-500" },
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: "bg-orange-400 dark:bg-orange-500" },
};

const PIECE_KEYS = Object.keys(PIECES);

/* ─── types ─── */

interface ActivePiece {
  key: string;
  shape: number[][];
  color: string;
  row: number;
  col: number;
}

interface State {
  phase: Phase;
  board: Cell[][];
  active: ActivePiece | null;
  next: string;
  score: number;
  lines: number;
  level: number;
}

type Action =
  | { type: "START" }
  | { type: "TICK" }
  | { type: "MOVE"; dir: "left" | "right" | "down" }
  | { type: "ROTATE" }
  | { type: "HARD_DROP" }
  | { type: "PAUSE" }
  | { type: "RESUME" }
  | { type: "GAME_OVER"; score: number };

/* ─── helpers ─── */

function emptyBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null) as Cell[]);
}

function randomPieceKey(): string {
  return PIECE_KEYS[Math.floor(Math.random() * PIECE_KEYS.length)]!;
}

function spawnPiece(key: string): ActivePiece {
  const p = PIECES[key]!;
  return {
    key,
    shape: p.shape.map((r) => [...r]),
    color: p.color,
    row: 0,
    col: Math.floor((COLS - p.shape[0]!.length) / 2),
  };
}

function rotateShape(shape: number[][]): number[][] {
  const rows = shape.length;
  const cols = shape[0]!.length;
  const rotated: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0));
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      rotated[c]![rows - 1 - r] = shape[r]![c]!;
    }
  }
  return rotated;
}

function collides(board: Cell[][], piece: ActivePiece): boolean {
  for (let r = 0; r < piece.shape.length; r++) {
    for (let c = 0; c < piece.shape[r]!.length; c++) {
      if (!piece.shape[r]![c]) continue;
      const br = piece.row + r;
      const bc = piece.col + c;
      if (br < 0 || br >= ROWS || bc < 0 || bc >= COLS) return true;
      if (board[br]![bc] !== null) return true;
    }
  }
  return false;
}

function lockPiece(board: Cell[][], piece: ActivePiece): Cell[][] {
  const next = board.map((r) => [...r]);
  for (let r = 0; r < piece.shape.length; r++) {
    for (let c = 0; c < piece.shape[r]!.length; c++) {
      if (!piece.shape[r]![c]) continue;
      const br = piece.row + r;
      const bc = piece.col + c;
      if (br >= 0 && br < ROWS && bc >= 0 && bc < COLS) {
        next[br]![bc] = piece.color;
      }
    }
  }
  return next;
}

function clearLines(board: Cell[][]): { board: Cell[][]; cleared: number } {
  const remaining = board.filter((row) => row.some((cell) => cell === null));
  const cleared = ROWS - remaining.length;
  const empty = Array.from({ length: cleared }, () => Array(COLS).fill(null) as Cell[]);
  return { board: [...empty, ...remaining], cleared };
}

function lineScore(cleared: number, level: number): number {
  const base = [0, 100, 300, 500, 800];
  return (base[cleared] ?? 800) * (level + 1);
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      const key = randomPieceKey();
      return {
        phase: "playing",
        board: emptyBoard(),
        active: spawnPiece(key),
        next: randomPieceKey(),
        score: 0,
        lines: 0,
        level: 0,
      };
    }
    case "TICK":
    case "MOVE": {
      if (state.phase !== "playing" || !state.active) return state;
      const dir = action.type === "TICK" ? "down" : action.dir;
      const moved: ActivePiece = {
        ...state.active,
        row: state.active.row + (dir === "down" ? 1 : 0),
        col: state.active.col + (dir === "left" ? -1 : dir === "right" ? 1 : 0),
      };
      if (!collides(state.board, moved)) {
        return { ...state, active: moved };
      }
      if (dir !== "down") return state; // lateral collision → ignore
      // lock piece
      const locked = lockPiece(state.board, state.active);
      const { board: clearedBoard, cleared } = clearLines(locked);
      const newLines = state.lines + cleared;
      const newLevel = Math.floor(newLines / LINES_PER_LEVEL);
      const newScore = state.score + lineScore(cleared, state.level);
      // spawn next
      const nextPiece = spawnPiece(state.next);
      if (collides(clearedBoard, nextPiece)) {
        return { ...state, phase: "complete", board: clearedBoard, active: null, score: newScore, lines: newLines, level: newLevel };
      }
      return {
        ...state,
        board: clearedBoard,
        active: nextPiece,
        next: randomPieceKey(),
        score: newScore,
        lines: newLines,
        level: newLevel,
      };
    }
    case "ROTATE": {
      if (state.phase !== "playing" || !state.active) return state;
      const rotated: ActivePiece = { ...state.active, shape: rotateShape(state.active.shape) };
      if (!collides(state.board, rotated)) return { ...state, active: rotated };
      // wall kick left/right
      for (const offset of [-1, 1, -2, 2]) {
        const kicked = { ...rotated, col: rotated.col + offset };
        if (!collides(state.board, kicked)) return { ...state, active: kicked };
      }
      return state;
    }
    case "HARD_DROP": {
      if (state.phase !== "playing" || !state.active) return state;
      let drop = { ...state.active };
      while (!collides(state.board, { ...drop, row: drop.row + 1 })) {
        drop = { ...drop, row: drop.row + 1 };
      }
      const locked = lockPiece(state.board, drop);
      const { board: clearedBoard, cleared } = clearLines(locked);
      const newLines = state.lines + cleared;
      const newLevel = Math.floor(newLines / LINES_PER_LEVEL);
      const newScore = state.score + lineScore(cleared, state.level) + (drop.row - state.active.row) * 2;
      const nextPiece = spawnPiece(state.next);
      if (collides(clearedBoard, nextPiece)) {
        return { ...state, phase: "complete", board: clearedBoard, active: null, score: newScore, lines: newLines, level: newLevel };
      }
      return { ...state, board: clearedBoard, active: nextPiece, next: randomPieceKey(), score: newScore, lines: newLines, level: newLevel };
    }
    case "PAUSE":
      return state.phase === "playing" ? { ...state, phase: "paused" } : state;
    case "RESUME":
      return state.phase === "paused" ? { ...state, phase: "playing" } : state;
    case "GAME_OVER":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(score: number, lines: number): number {
  if (lines >= 40 || score >= 20000) return 3;
  if (lines >= 20 || score >= 8000) return 2;
  if (lines >= 5 || score >= 1500) return 1;
  return 0;
}

/* ─── cell colours ─── */

const CELL_BG_EMPTY = "bg-slate-200/30 dark:bg-slate-800/30";

/* ─── component ─── */

export default function GameTetris() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    board: emptyBoard(),
    active: null,
    next: randomPieceKey(),
    score: 0,
    lines: 0,
    level: 0,
  });

  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ─── game tick ─── */

  useEffect(() => {
    if (state.phase === "playing") {
      const ms = TICK_MS * Math.pow(SPEED_FACTOR, state.level);
      tickRef.current = setInterval(() => dispatch({ type: "TICK" }), ms);
      return () => { if (tickRef.current) clearInterval(tickRef.current); };
    }
    if (tickRef.current) clearInterval(tickRef.current);
  }, [state.phase, state.level]);

  /* ─── keyboard ─── */

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (state.phase !== "playing") return;
      const map: Record<string, () => void> = {
        ArrowLeft: () => dispatch({ type: "MOVE", dir: "left" }),
        ArrowRight: () => dispatch({ type: "MOVE", dir: "right" }),
        ArrowDown: () => dispatch({ type: "MOVE", dir: "down" }),
        ArrowUp: () => dispatch({ type: "ROTATE" }),
        a: () => dispatch({ type: "MOVE", dir: "left" }),
        d: () => dispatch({ type: "MOVE", dir: "right" }),
        s: () => dispatch({ type: "MOVE", dir: "down" }),
        w: () => dispatch({ type: "ROTATE" }),
        " ": () => dispatch({ type: "HARD_DROP" }),
        p: () => dispatch({ type: "PAUSE" }),
      };
      const handler = map[e.key];
      if (handler) { e.preventDefault(); handler(); hapticSelection(); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const stars = calcStars(state.score, state.lines);
    if (stars >= 2) { hapticCelebration(); setMood("cheering"); setMessage("Amazing stacking!"); }
    else if (stars === 1) { hapticSuccess(); setMood("happy"); setMessage("Great game!"); }
    else { hapticError(); setMood("thinking"); setMessage("Keep practising!"); }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-tetris",
      score: state.score,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: Math.max(1, state.lines),
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.score, state.lines, state.level, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Stack the blocks!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── render board ─── */

  const renderBoard = useMemo(() => {
    const display = state.board.map((r) => [...r]);
    if (state.active && state.phase === "playing") {
      // ghost piece
      let ghostRow = state.active.row;
      while (!collides(state.board, { ...state.active, row: ghostRow + 1 })) ghostRow++;
      for (let r = 0; r < state.active.shape.length; r++) {
        for (let c = 0; c < state.active.shape[r]!.length; c++) {
          if (!state.active.shape[r]![c]) continue;
          const br = ghostRow + r;
          const bc = state.active.col + c;
          if (br >= 0 && br < ROWS && bc >= 0 && bc < COLS && display[br]![bc] === null) {
            display[br]![bc] = "__ghost__";
          }
        }
      }
      // active piece
      for (let r = 0; r < state.active.shape.length; r++) {
        for (let c = 0; c < state.active.shape[r]!.length; c++) {
          if (!state.active.shape[r]![c]) continue;
          const br = state.active.row + r;
          const bc = state.active.col + c;
          if (br >= 0 && br < ROWS && bc >= 0 && bc < COLS) {
            display[br]![bc] = state.active.color;
          }
        }
      }
    }
    return display;
  }, [state.board, state.active, state.phase]);

  const stars = calcStars(state.score, state.lines);
  const nextPiece = PIECES[state.next];

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Tetris
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Score {state.score} · Lines {state.lines} · Level {state.level}
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="pixel" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Stack blocks, clear lines, reach the top!
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <Gamepad2 className="mr-2 inline h-4 w-4" /> Start Game
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING / PAUSED ─── */}
        {(state.phase === "playing" || state.phase === "paused") && (
          <motion.section key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            {/* Next piece preview */}
            <div className="mb-2 flex items-center justify-between">
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                Next:
                {nextPiece && (
                  <span className="ml-1 inline-flex gap-px">
                    {nextPiece.shape.map((row, ri) => (
                      <span key={ri} className="flex flex-col gap-px">
                        {row.map((c, ci) => (
                          <span key={ci} className={`inline-block h-3 w-3 rounded-sm ${c ? nextPiece.color : "bg-transparent"}`} />
                        ))}
                      </span>
                    ))}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => dispatch(state.phase === "playing" ? { type: "PAUSE" } : { type: "RESUME" })}
                className="rounded-lg bg-indigo-200/50 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-800/50 dark:text-indigo-200"
                aria-label={state.phase === "playing" ? "Pause" : "Resume"}
              >
                {state.phase === "playing" ? <Pause className="inline h-3 w-3" /> : <Play className="inline h-3 w-3" />}
              </button>
            </div>

            {/* Board */}
            <div
              className="relative mx-auto grid gap-px rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-1 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`, maxWidth: "20rem" }}
              role="grid"
              aria-label="Tetris board"
            >
              {renderBoard.map((row, ri) =>
                row.map((cell, ci) => (
                  <div
                    key={`${ri}-${ci}`}
                    className={`aspect-square rounded-sm transition-colors ${
                      cell === "__ghost__"
                        ? "border border-dashed border-indigo-400/40 bg-indigo-200/10 dark:border-indigo-500/30 dark:bg-indigo-800/10"
                        : cell
                          ? `${cell} shadow-inner`
                          : CELL_BG_EMPTY
                    }`}
                    role="gridcell"
                  />
                )),
              )}
              {state.phase === "paused" && (
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40 backdrop-blur-sm">
                  <p className="text-2xl font-black text-white">PAUSED</p>
                </div>
              )}
            </div>

            {/* Mobile controls */}
            <div className="mt-3 grid grid-cols-5 gap-2 sm:hidden" role="group" aria-label="Game controls">
              <button type="button" onClick={() => dispatch({ type: "MOVE", dir: "left" })} className="col-span-1 flex h-12 items-center justify-center rounded-xl bg-indigo-300/50 text-xl font-bold dark:bg-indigo-700/50" aria-label="Move left">←</button>
              <button type="button" onClick={() => dispatch({ type: "MOVE", dir: "down" })} className="col-span-1 flex h-12 items-center justify-center rounded-xl bg-indigo-300/50 text-xl font-bold dark:bg-indigo-700/50" aria-label="Move down">↓</button>
              <button type="button" onClick={() => dispatch({ type: "ROTATE" })} className="col-span-1 flex h-12 items-center justify-center rounded-xl bg-indigo-300/50 text-xl font-bold dark:bg-indigo-700/50" aria-label="Rotate">⟲</button>
              <button type="button" onClick={() => dispatch({ type: "MOVE", dir: "right" })} className="col-span-1 flex h-12 items-center justify-center rounded-xl bg-indigo-300/50 text-xl font-bold dark:bg-indigo-700/50" aria-label="Move right">→</button>
              <button type="button" onClick={() => dispatch({ type: "HARD_DROP" })} className="col-span-1 flex h-12 items-center justify-center rounded-xl bg-rose-300/50 text-xl font-bold dark:bg-rose-700/50" aria-label="Hard drop">⤓</button>
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-indigo-200/40 bg-white/60 p-6 text-center dark:border-indigo-800/40 dark:bg-black/30">
            <div className="mx-auto mb-4 w-fit rounded-full border border-indigo-300/40 bg-indigo-200/20 px-4 py-2 text-sm font-bold dark:border-indigo-700/40 dark:bg-indigo-800/20">
              {stars >= 2 ? "🎉 Amazing!" : "Game Over"}
            </div>
            <div className="flex justify-center">
              <MascotFriend id="pixel" mood={stars >= 2 ? "cheering" : "thinking"} size="lg" />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }} transition={{ delay: i * 0.2, type: "spring" }} className="text-5xl">
                  ⭐
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
              Score {state.score} · Lines {state.lines} · Level {state.level}
            </p>
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
