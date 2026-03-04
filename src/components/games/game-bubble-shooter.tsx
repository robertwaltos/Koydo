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

const COLS = 8;
const INITIAL_ROWS = 5;
const MAX_ROWS = 12;
const MAX_SCORE = 5000;
const PUSH_INTERVAL = 5; // shots without a pop before a new row pushes down

const BUBBLE_COLORS = [
  "bg-red-400 dark:bg-red-500",
  "bg-blue-400 dark:bg-blue-500",
  "bg-green-400 dark:bg-green-500",
  "bg-yellow-400 dark:bg-yellow-500",
  "bg-purple-400 dark:bg-purple-500",
  "bg-cyan-400 dark:bg-cyan-500",
] as const;

type BubbleColor = (typeof BUBBLE_COLORS)[number];
type Cell = BubbleColor | null;

/* ─── types ─── */

interface State {
  phase: Phase;
  board: Cell[][]; // row-major, each row has COLS cells
  current: BubbleColor;
  nextColor: BubbleColor;
  score: number;
  shots: number;
  shotsSincePop: number;
}

type Action =
  | { type: "START" }
  | { type: "SHOOT"; col: number }
  | { type: "GAME_OVER" };

/* ─── helpers ─── */

function randomColor(): BubbleColor {
  return BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)]!;
}

function emptyBoard(): Cell[][] {
  return Array.from({ length: MAX_ROWS }, () =>
    Array(COLS).fill(null) as Cell[],
  );
}

function generateInitialBoard(): Cell[][] {
  const board = emptyBoard();
  for (let r = 0; r < INITIAL_ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      board[r]![c] = randomColor();
    }
  }
  return board;
}

/** Find all cells connected to (row, col) with the same color using flood fill. */
function findCluster(
  board: Cell[][],
  row: number,
  col: number,
  color: BubbleColor,
): [number, number][] {
  const visited = new Set<string>();
  const cluster: [number, number][] = [];
  const stack: [number, number][] = [[row, col]];

  while (stack.length > 0) {
    const [r, c] = stack.pop()!;
    const key = `${r},${c}`;
    if (visited.has(key)) continue;
    visited.add(key);

    if (r < 0 || r >= MAX_ROWS || c < 0 || c >= COLS) continue;
    if (board[r]![c] !== color) continue;

    cluster.push([r, c]);

    // six neighbors: up, down, left, right, and two diagonal offsets for hex-style
    const isOffsetRow = r % 2 === 1;
    const neighbors: [number, number][] = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
      [r - 1, isOffsetRow ? c + 1 : c - 1],
      [r + 1, isOffsetRow ? c + 1 : c - 1],
    ];

    for (const [nr, nc] of neighbors) {
      stack.push([nr, nc]);
    }
  }

  return cluster;
}

/** Find all bubbles connected to the ceiling (row 0). */
function findConnectedToCeiling(board: Cell[][]): Set<string> {
  const visited = new Set<string>();
  const stack: [number, number][] = [];

  for (let c = 0; c < COLS; c++) {
    if (board[0]![c] !== null) {
      stack.push([0, c]);
    }
  }

  while (stack.length > 0) {
    const [r, c] = stack.pop()!;
    const key = `${r},${c}`;
    if (visited.has(key)) continue;
    visited.add(key);

    const isOffsetRow = r % 2 === 1;
    const neighbors: [number, number][] = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
      [r - 1, isOffsetRow ? c + 1 : c - 1],
      [r + 1, isOffsetRow ? c + 1 : c - 1],
    ];

    for (const [nr, nc] of neighbors) {
      if (nr < 0 || nr >= MAX_ROWS || nc < 0 || nc >= COLS) continue;
      if (visited.has(`${nr},${nc}`)) continue;
      if (board[nr]![nc] !== null) {
        stack.push([nr, nc]);
      }
    }
  }

  return visited;
}

/** Remove clusters and orphans, returning the cleaned board and points earned. */
function popAndClean(
  board: Cell[][],
  row: number,
  col: number,
): { board: Cell[][]; popped: number } {
  const color = board[row]![col];
  if (color === null) return { board, popped: 0 };

  const cluster = findCluster(board, row, col, color);
  if (cluster.length < 3) return { board, popped: 0 };

  // Remove cluster
  const next = board.map((r) => [...r]);
  for (const [r, c] of cluster) {
    next[r]![c] = null;
  }

  // Remove orphans (bubbles not connected to ceiling)
  const connected = findConnectedToCeiling(next);
  let orphanCount = 0;
  for (let r = 0; r < MAX_ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (next[r]![c] !== null && !connected.has(`${r},${c}`)) {
        next[r]![c] = null;
        orphanCount++;
      }
    }
  }

  return { board: next, popped: cluster.length + orphanCount };
}

/** Push all existing bubbles down one row and fill top row with new bubbles. */
function pushRowDown(board: Cell[][]): Cell[][] {
  const next = emptyBoard();
  // Shift everything down by one
  for (let r = MAX_ROWS - 1; r >= 1; r--) {
    for (let c = 0; c < COLS; c++) {
      next[r]![c] = board[r - 1]![c];
    }
  }
  // New random top row
  for (let c = 0; c < COLS; c++) {
    next[0]![c] = randomColor();
  }
  return next;
}

/** Check if any bubble exists in the last row. */
function hasBottomBubble(board: Cell[][]): boolean {
  return board[MAX_ROWS - 1]!.some((cell) => cell !== null);
}

/** Check if the board is completely empty. */
function isBoardClear(board: Cell[][]): boolean {
  for (let r = 0; r < MAX_ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r]![c] !== null) return false;
    }
  }
  return true;
}

/** Find the first empty row position in a column, scanning from the top. */
function findLandingRow(board: Cell[][], col: number): number {
  for (let r = 0; r < MAX_ROWS; r++) {
    if (board[r]![col] !== null) {
      return r - 1;
    }
  }
  return MAX_ROWS - 1;
}

/* ─── reducer ─── */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      return {
        phase: "playing",
        board: generateInitialBoard(),
        current: randomColor(),
        nextColor: randomColor(),
        score: 0,
        shots: 0,
        shotsSincePop: 0,
      };
    }
    case "SHOOT": {
      if (state.phase !== "playing") return state;
      const col = action.col;
      if (col < 0 || col >= COLS) return state;

      const landingRow = findLandingRow(state.board, col);
      if (landingRow < 0) return state; // column full

      // Place the bubble
      const placed = state.board.map((r) => [...r]);
      placed[landingRow]![col] = state.current;

      // Attempt to pop
      const { board: cleaned, popped } = popAndClean(
        placed,
        landingRow,
        col,
      );

      const newShots = state.shots + 1;
      const newScore = state.score + popped * 50;
      const newShotsSincePop = popped > 0 ? 0 : state.shotsSincePop + 1;

      // Check win
      if (isBoardClear(cleaned)) {
        return {
          ...state,
          phase: "complete",
          board: cleaned,
          score: newScore + 500, // clear bonus
          shots: newShots,
          shotsSincePop: 0,
        };
      }

      // Push row down if too many shots without popping
      let finalBoard = cleaned;
      if (newShotsSincePop >= PUSH_INTERVAL) {
        finalBoard = pushRowDown(finalBoard);
        if (hasBottomBubble(finalBoard)) {
          return {
            ...state,
            phase: "complete",
            board: finalBoard,
            score: newScore,
            shots: newShots,
            shotsSincePop: 0,
          };
        }
      }

      // Check game over after placement
      if (hasBottomBubble(finalBoard)) {
        return {
          ...state,
          phase: "complete",
          board: finalBoard,
          score: newScore,
          shots: newShots,
          shotsSincePop: newShotsSincePop,
        };
      }

      return {
        ...state,
        board: finalBoard,
        current: state.nextColor,
        nextColor: randomColor(),
        score: newScore,
        shots: newShots,
        shotsSincePop:
          newShotsSincePop >= PUSH_INTERVAL ? 0 : newShotsSincePop,
      };
    }
    case "GAME_OVER":
      return { ...state, phase: "complete" };
    default:
      return state;
  }
}

/* ─── star calc ─── */

function calcStars(score: number, boardClear: boolean): number {
  if (boardClear || score >= 3000) return 3;
  if (score >= 1500) return 2;
  if (score >= 500) return 1;
  return 0;
}

/* ─── cell colours ─── */

const CELL_BG_EMPTY = "bg-slate-200/20 dark:bg-slate-800/20";

/* ─── component ─── */

export default function GameBubbleShooter() {
  const { setMessage, setMood } = useMascot();
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const [state, dispatch] = useReducer(reducer, {
    phase: "ready" as Phase,
    board: emptyBoard(),
    current: randomColor(),
    nextColor: randomColor(),
    score: 0,
    shots: 0,
    shotsSincePop: 0,
  });

  /* ─── keyboard (1-8 to pick column) ─── */

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (state.phase !== "playing") return;
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= COLS) {
        e.preventDefault();
        dispatch({ type: "SHOOT", col: num - 1 });
        hapticSelection();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase]);

  /* ─── completion ─── */

  useEffect(() => {
    if (state.phase !== "complete" || completionSentRef.current) return;
    completionSentRef.current = true;
    const boardClear = isBoardClear(state.board);
    const stars = calcStars(state.score, boardClear);
    if (stars >= 2) {
      hapticCelebration();
      setMood("cheering");
      setMessage("Amazing popping!");
    } else if (stars === 1) {
      hapticSuccess();
      setMood("happy");
      setMessage("Nice shooting!");
    } else {
      hapticError();
      setMood("thinking");
      setMessage("Keep practising!");
    }
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-bubble-shooter",
      score: state.score,
      maxScore: MAX_SCORE,
      elapsedMs: 0,
      interactions: state.shots,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, state.score, state.shots, state.board, setMessage, setMood]);

  /* ─── start ─── */

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    dispatch({ type: "START" });
    setMood("happy");
    setMessage("Pop the bubbles!");
    hapticSelection();
  }, [setMessage, setMood]);

  /* ─── shoot handler ─── */

  const shootColumn = useCallback(
    (col: number) => {
      if (state.phase !== "playing") return;
      dispatch({ type: "SHOOT", col });
      hapticSelection();
    },
    [state.phase],
  );

  const boardClear = isBoardClear(state.board);
  const stars = calcStars(state.score, boardClear);

  return (
    <div className="mx-auto flex min-h-[85vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-4">
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-900 dark:text-indigo-100">
          <Gamepad2 className="h-6 w-6" /> Bubble Shooter
        </h2>
        {state.phase !== "ready" && (
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">
            Score {state.score} · Shots {state.shots}
            {state.phase === "playing" && (
              <span className="ml-2 text-xs opacity-60">
                ({PUSH_INTERVAL - state.shotsSincePop} shots until push)
              </span>
            )}
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
            <MascotFriend id="luna" mood="happy" size="lg" />
            <p className="mt-3 text-sm text-indigo-700 dark:text-indigo-300">
              Tap a column to drop your bubble. Match 3 or more to pop!
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
            {/* Current + Next bubble preview */}
            <div className="mb-2 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                <span>Current:</span>
                <span
                  className={`inline-block h-6 w-6 rounded-full ${state.current} shadow-md ring-2 ring-white/50 dark:ring-black/30`}
                />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                <span>Next:</span>
                <span
                  className={`inline-block h-5 w-5 rounded-full ${state.nextColor} opacity-60 shadow-sm`}
                />
              </div>
            </div>

            {/* Board */}
            <div
              className="relative mx-auto rounded-2xl border border-indigo-200/40 bg-indigo-100/30 p-2 dark:border-indigo-800/40 dark:bg-indigo-950/30"
              style={{ maxWidth: "22rem" }}
              role="grid"
              aria-label="Bubble Shooter board"
            >
              {state.board.map((row, ri) => (
                <div
                  key={ri}
                  className="flex gap-px"
                  style={{
                    marginLeft: ri % 2 === 1 ? "0.75rem" : "0",
                  }}
                >
                  {row.map((cell, ci) => (
                    <button
                      key={`${ri}-${ci}`}
                      type="button"
                      onClick={() => shootColumn(ci)}
                      className={`aspect-square flex-1 rounded-full transition-all duration-150 ${
                        cell !== null
                          ? `${cell} shadow-inner ring-1 ring-white/20 dark:ring-black/20`
                          : CELL_BG_EMPTY
                      } hover:ring-2 hover:ring-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      role="gridcell"
                      aria-label={`Row ${ri + 1}, Column ${ci + 1}${cell !== null ? ", occupied" : ", empty"}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Column selector buttons (mobile-friendly) */}
            <div
              className="mx-auto mt-3 grid gap-1"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                maxWidth: "22rem",
              }}
              role="group"
              aria-label="Column selector"
            >
              {Array.from({ length: COLS }, (_, ci) => (
                <button
                  key={ci}
                  type="button"
                  onClick={() => shootColumn(ci)}
                  className="flex h-10 items-center justify-center rounded-xl bg-indigo-300/50 text-xs font-bold text-indigo-800 transition-colors hover:bg-indigo-400/60 dark:bg-indigo-700/50 dark:text-indigo-100 dark:hover:bg-indigo-600/60"
                  aria-label={`Shoot column ${ci + 1}`}
                >
                  {ci + 1}
                </button>
              ))}
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
              {boardClear ? "Board Cleared!" : stars >= 2 ? "Great Job!" : "Game Over"}
            </div>
            <div className="flex justify-center">
              <MascotFriend
                id="luna"
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
                  ⭐
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-sm text-indigo-800 dark:text-indigo-200">
              Score {state.score} · Shots {state.shots}
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
