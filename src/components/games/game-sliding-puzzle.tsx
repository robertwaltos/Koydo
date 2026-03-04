"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Grid3X3, RotateCcw, Trophy } from "lucide-react";
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
type Tile = number; // 1-15 or 0 for empty

const SIZE = 4;
const TOTAL = SIZE * SIZE;

/* ─── helpers ─── */

function goalBoard(): Tile[] {
  const b: Tile[] = [];
  for (let i = 1; i < TOTAL; i++) b.push(i);
  b.push(0);
  return b;
}

function isSolvable(board: Tile[]): boolean {
  let inversions = 0;
  const flat = board.filter((t) => t !== 0);
  for (let i = 0; i < flat.length; i++) {
    for (let j = i + 1; j < flat.length; j++) {
      if (flat[i]! > flat[j]!) inversions++;
    }
  }
  const emptyRow = Math.floor(board.indexOf(0) / SIZE);
  // for even-sized grid: inversions + row of blank from bottom must be odd
  return (inversions + (SIZE - emptyRow)) % 2 === 1;
}

function shuffleBoard(): Tile[] {
  const board = goalBoard();
  for (let i = board.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [board[i], board[j]] = [board[j]!, board[i]!];
  }
  if (!isSolvable(board)) {
    // swap first two non-zero tiles to fix parity
    const a = board.findIndex((t) => t !== 0);
    let b = board.findIndex((t, i) => t !== 0 && i !== a);
    [board[a], board[b]] = [board[b]!, board[a]!];
  }
  // make sure it's not already solved
  if (board.every((t, i) => t === goalBoard()[i])) {
    [board[0], board[1]] = [board[1]!, board[0]!];
  }
  return board;
}

function isSolved(board: Tile[]): boolean {
  const goal = goalBoard();
  return board.every((t, i) => t === goal[i]);
}

function getNeighbors(emptyIdx: number): number[] {
  const r = Math.floor(emptyIdx / SIZE);
  const c = emptyIdx % SIZE;
  const n: number[] = [];
  if (r > 0) n.push(emptyIdx - SIZE);
  if (r < SIZE - 1) n.push(emptyIdx + SIZE);
  if (c > 0) n.push(emptyIdx - 1);
  if (c < SIZE - 1) n.push(emptyIdx + 1);
  return n;
}

/* ─── state ─── */

interface State {
  phase: Phase;
  board: Tile[];
  moves: number;
  startTime: number;
  endTime: number;
}

type Action =
  | { type: "START" }
  | { type: "MOVE_TILE"; idx: number }
  | { type: "COMPLETE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return { phase: "playing", board: shuffleBoard(), moves: 0, startTime: Date.now(), endTime: 0 };
    case "MOVE_TILE": {
      if (state.phase !== "playing") return state;
      const emptyIdx = state.board.indexOf(0);
      const neighbors = getNeighbors(emptyIdx);
      if (!neighbors.includes(action.idx)) return state;
      const next = [...state.board];
      [next[emptyIdx], next[action.idx]] = [next[action.idx]!, next[emptyIdx]!];
      const solved = isSolved(next);
      return {
        ...state,
        board: next,
        moves: state.moves + 1,
        phase: solved ? "complete" : "playing",
        endTime: solved ? Date.now() : 0,
      };
    }
    case "COMPLETE":
      return { ...state, phase: "complete", endTime: Date.now() };
    default:
      return state;
  }
}

/* ─── stars ─── */

function calcStars(moves: number): number {
  if (moves <= 60) return 3;
  if (moves <= 120) return 2;
  if (moves <= 200) return 1;
  return 0;
}

/* ─── tile colour ─── */

function tileColor(value: number): string {
  if (value === 0) return "";
  const hue = Math.round((value / 15) * 280);
  // tailwind approach with gradient based on position
  const colors = [
    "bg-rose-400 dark:bg-rose-600",
    "bg-orange-400 dark:bg-orange-600",
    "bg-amber-400 dark:bg-amber-600",
    "bg-yellow-400 dark:bg-yellow-600",
    "bg-lime-400 dark:bg-lime-600",
    "bg-green-400 dark:bg-green-600",
    "bg-emerald-400 dark:bg-emerald-600",
    "bg-teal-400 dark:bg-teal-600",
    "bg-cyan-400 dark:bg-cyan-600",
    "bg-sky-400 dark:bg-sky-600",
    "bg-blue-400 dark:bg-blue-600",
    "bg-indigo-400 dark:bg-indigo-600",
    "bg-violet-400 dark:bg-violet-600",
    "bg-purple-400 dark:bg-purple-600",
    "bg-fuchsia-400 dark:bg-fuchsia-600",
  ];
  return colors[(value - 1) % colors.length]!;
}

/* ─── component ─── */

export default function GameSlidingPuzzle() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    board: goalBoard(),
    moves: 0,
    startTime: 0,
    endTime: 0,
  });

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const stars = calcStars(state.moves);
    if (stars >= 2) { hapticCelebration(); setMood("cheering"); setMessage("Brilliant puzzle solving!"); }
    else if (stars === 1) { hapticSuccess(); setMood("happy"); setMessage("Puzzle solved!"); }
    else { hapticError(); setMood("thinking"); setMessage("Solved! Try fewer moves next time!"); }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-sliding-puzzle",
      score: Math.max(0, 200 - state.moves) * 50,
      maxScore: 10000,
      elapsedMs: state.endTime - state.startTime,
      interactions: Math.max(1, state.moves),
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.moves, state.endTime, state.startTime, setMessage, setMood]);

  /* ─── actions ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Slide tiles to solve the puzzle!");
    hapticSelection();
  }, [setMessage, setMood]);

  const handleTile = useCallback(
    (idx: number) => {
      if (state.phase !== "playing") return;
      const emptyIdx = state.board.indexOf(0);
      const neighbors = getNeighbors(emptyIdx);
      if (!neighbors.includes(idx)) return;
      hapticSelection();
      dispatch({ type: "MOVE_TILE", idx });
    },
    [state.phase, state.board],
  );

  const stars = calcStars(state.moves);
  const elapsed = state.phase === "complete"
    ? state.endTime - state.startTime
    : state.phase === "playing"
      ? Date.now() - state.startTime
      : 0;
  const elapsedSec = Math.round(elapsed / 1000);

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-md flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-teal-900 dark:text-teal-100">
          <Grid3X3 className="h-6 w-6" /> Sliding Puzzle
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-teal-600 dark:text-teal-300">
            Moves {state.moves} · Time {elapsedSec}s
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ─── READY ─── */}
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <MascotFriend id="echo" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-teal-700 dark:text-teal-300">
              Arrange the numbers 1-15 in order. Tap a tile next to the empty space to slide it.
            </p>
            <div className="mt-5">
              <PhysicalButton onClick={startGame} variant="primary" className="px-8 py-3">
                <Grid3X3 className="mr-2 inline h-4 w-4" /> Start Puzzle
              </PhysicalButton>
            </div>
          </motion.section>
        )}

        {/* ─── PLAYING ─── */}
        {state.phase === "playing" && (
          <motion.section key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <div
              className="mx-auto grid gap-1.5 rounded-2xl border border-teal-200/40 bg-teal-100/30 p-2 dark:border-teal-800/40 dark:bg-teal-950/30"
              style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`, maxWidth: "20rem" }}
              role="grid"
              aria-label="Sliding puzzle board"
            >
              {state.board.map((tile, idx) => (
                <motion.button
                  key={tile || "empty"}
                  type="button"
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  onClick={() => handleTile(idx)}
                  disabled={tile === 0}
                  className={`flex aspect-square items-center justify-center rounded-xl text-xl font-extrabold shadow-md transition-transform ${
                    tile === 0
                      ? "bg-transparent shadow-none"
                      : `${tileColor(tile)} cursor-pointer text-white hover:scale-[1.04] active:scale-95`
                  }`}
                  role="gridcell"
                  aria-label={tile === 0 ? "Empty space" : `Tile ${tile}`}
                >
                  {tile !== 0 && tile}
                </motion.button>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── COMPLETE ─── */}
        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-teal-200/40 bg-white/60 p-6 text-center dark:border-teal-800/40 dark:bg-black/30">
            <div className="mx-auto mb-4 w-fit rounded-full border border-teal-300/40 bg-teal-200/20 px-4 py-2 text-sm font-bold dark:border-teal-700/40 dark:bg-teal-800/20">
              🎉 Puzzle Solved!
            </div>
            <div className="flex justify-center">
              <MascotFriend id="echo" mood="cheering" size="lg" />
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }} transition={{ delay: i * 0.2, type: "spring" }} className="text-5xl">⭐</motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-teal-800 dark:text-teal-200">
              {state.moves} moves · {Math.round((state.endTime - state.startTime) / 1000)}s
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
