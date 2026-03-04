"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Grid3X3, RotateCcw, Trophy } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess, hapticCelebration } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */

type Phase = "ready" | "playing" | "complete";
type Direction = "up" | "down" | "left" | "right";
type Cell = number; // 0 = empty, else power of 2
type Grid = Cell[][];

const GRID_SIZE = 4;
const WIN_TILE = 2048;
const MAX_SCORE = 20000; // normalisation anchor for star calc

const TILE_COLORS: Record<number, { bg: string; text: string }> = {
  0:    { bg: "bg-cyan-100/20 dark:bg-cyan-900/20", text: "" },
  2:    { bg: "bg-amber-100 dark:bg-amber-900/70", text: "text-amber-900 dark:text-amber-100" },
  4:    { bg: "bg-amber-200 dark:bg-amber-800/70", text: "text-amber-900 dark:text-amber-100" },
  8:    { bg: "bg-orange-300 dark:bg-orange-700", text: "text-white" },
  16:   { bg: "bg-orange-400 dark:bg-orange-600", text: "text-white" },
  32:   { bg: "bg-rose-400 dark:bg-rose-600", text: "text-white" },
  64:   { bg: "bg-rose-500 dark:bg-rose-500", text: "text-white" },
  128:  { bg: "bg-yellow-300 dark:bg-yellow-600", text: "text-yellow-900 dark:text-yellow-100" },
  256:  { bg: "bg-yellow-400 dark:bg-yellow-500", text: "text-yellow-900 dark:text-white" },
  512:  { bg: "bg-yellow-500 dark:bg-yellow-400", text: "text-white dark:text-yellow-950" },
  1024: { bg: "bg-yellow-600 dark:bg-yellow-300", text: "text-white dark:text-yellow-950" },
  2048: { bg: "bg-gradient-to-br from-amber-400 to-yellow-500 dark:from-amber-500 dark:to-yellow-400", text: "text-white dark:text-yellow-950" },
};

function getTileStyle(value: number) {
  return TILE_COLORS[value] ?? { bg: "bg-fuchsia-500 dark:bg-fuchsia-600", text: "text-white" };
}

function tileFontSize(value: number): string {
  if (value < 100) return "text-3xl sm:text-4xl";
  if (value < 1000) return "text-2xl sm:text-3xl";
  return "text-lg sm:text-2xl";
}

/* ─── grid helpers ─── */

function createEmptyGrid(): Grid {
  return Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0) as Cell[]);
}

function cloneGrid(grid: Grid): Grid {
  return grid.map((row) => [...row]);
}

function emptyPositions(grid: Grid): [number, number][] {
  const positions: [number, number][] = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (grid[r][c] === 0) positions.push([r, c]);
    }
  }
  return positions;
}

function addRandomTile(grid: Grid): Grid {
  const empty = emptyPositions(grid);
  if (empty.length === 0) return grid;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  const next = cloneGrid(grid);
  next[r][c] = Math.random() < 0.9 ? 2 : 4;
  return next;
}

function rotateGridCW(grid: Grid): Grid {
  return grid[0].map((_, c) => grid.map((row) => row[c]).reverse());
}

function rotateGridCCW(grid: Grid): Grid {
  return grid[0].map((_, c) => [...grid.map((row) => row[GRID_SIZE - 1 - c])]);
}

/** Slide all tiles left, merge adjacent equal tiles. Returns new grid + points earned. */
function slideLeft(grid: Grid): { grid: Grid; points: number; moved: boolean } {
  let points = 0;
  let moved = false;
  const next = createEmptyGrid();

  for (let r = 0; r < GRID_SIZE; r++) {
    const row = grid[r].filter((v) => v !== 0);
    const merged: Cell[] = [];
    let skip = false;
    for (let i = 0; i < row.length; i++) {
      if (skip) { skip = false; continue; }
      if (i + 1 < row.length && row[i] === row[i + 1]) {
        const val = row[i] * 2;
        merged.push(val);
        points += val;
        skip = true;
      } else {
        merged.push(row[i]);
      }
    }
    while (merged.length < GRID_SIZE) merged.push(0);
    next[r] = merged;
    for (let c = 0; c < GRID_SIZE; c++) {
      if (next[r][c] !== grid[r][c]) moved = true;
    }
  }

  return { grid: next, points, moved };
}

function move(grid: Grid, direction: Direction): { grid: Grid; points: number; moved: boolean } {
  let rotated = cloneGrid(grid);
  const rotations: Record<Direction, number> = { left: 0, up: 1, right: 2, down: 3 };
  const nRot = rotations[direction];
  for (let i = 0; i < nRot; i++) rotated = rotateGridCCW(rotated);
  const result = slideLeft(rotated);
  let final = result.grid;
  for (let i = 0; i < nRot; i++) final = rotateGridCW(final);
  return { grid: final, points: result.points, moved: result.moved };
}

function hasWon(grid: Grid): boolean {
  return grid.some((row) => row.some((cell) => cell >= WIN_TILE));
}

function canMove(grid: Grid): boolean {
  if (emptyPositions(grid).length > 0) return true;
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const v = grid[r][c];
      if (c + 1 < GRID_SIZE && grid[r][c + 1] === v) return true;
      if (r + 1 < GRID_SIZE && grid[r + 1][c] === v) return true;
    }
  }
  return false;
}

function highestTile(grid: Grid): number {
  return Math.max(...grid.flat());
}

/* ─── state machine ─── */

type State = {
  phase: Phase;
  grid: Grid;
  score: number;
  bestScore: number;
  moves: number;
  startTime: number;
  mascotMood: "idle" | "happy" | "thinking" | "sad" | "cheering" | "surprised";
};

type Action =
  | { type: "START" }
  | { type: "MOVE"; direction: Direction }
  | { type: "SET_MOOD"; mood: State["mascotMood"] };

function initState(): State {
  return {
    phase: "ready",
    grid: createEmptyGrid(),
    score: 0,
    bestScore: 0,
    moves: 0,
    startTime: 0,
    mascotMood: "idle",
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      let grid = createEmptyGrid();
      grid = addRandomTile(grid);
      grid = addRandomTile(grid);
      return {
        ...state,
        phase: "playing",
        grid,
        score: 0,
        moves: 0,
        startTime: Date.now(),
        mascotMood: "happy",
      };
    }
    case "MOVE": {
      if (state.phase !== "playing") return state;
      const result = move(state.grid, action.direction);
      if (!result.moved) return state;
      const nextGrid = addRandomTile(result.grid);
      const nextScore = state.score + result.points;
      const nextMoves = state.moves + 1;
      const won = hasWon(nextGrid);
      const stuck = !canMove(nextGrid);
      const nextPhase: Phase = won || stuck ? "complete" : "playing";
      return {
        ...state,
        phase: nextPhase,
        grid: nextGrid,
        score: nextScore,
        bestScore: Math.max(state.bestScore, nextScore),
        moves: nextMoves,
        mascotMood: won ? "cheering" : stuck ? "sad" : result.points > 0 ? "happy" : "thinking",
      };
    }
    case "SET_MOOD":
      return { ...state, mascotMood: action.mood };
    default:
      return state;
  }
}

/* ─── component ─── */

export default function Game2048() {
  const { setMessage, setMood } = useMascot();
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const elapsedMs = state.phase === "complete" ? Date.now() - state.startTime : 0;
  const won = hasWon(state.grid);
  const highest = highestTile(state.grid);

  const starsRaw = won ? 3 : state.score >= 5000 ? 2 : state.score >= 1000 ? 1 : 0;
  const stars = Math.min(3, starsRaw);

  // Emit completion
  useEffect(() => {
    if (state.phase !== "complete") return;
    setMood(won ? "cheering" : "sad");
    setMessage(
      won
        ? "Incredible! You reached 2048! Mathematical mastery!"
        : `Game over! Your best tile was ${highest}. Try again!`,
    );
    if (won) void hapticCelebration();
    else void hapticError();

    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "game-2048",
      difficulty: "medium",
      elapsedMs,
      interactions: Math.max(1, state.moves),
      score: state.score,
      maxScore: MAX_SCORE,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase]);

  const handleDirection = useCallback(
    (dir: Direction) => {
      dispatch({ type: "MOVE", direction: dir });
      void hapticSelection();
    },
    [],
  );

  // Keyboard input
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const map: Record<string, Direction> = {
        ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
        w: "up", s: "down", a: "left", d: "right",
      };
      const dir = map[e.key];
      if (dir) { e.preventDefault(); handleDirection(dir); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleDirection]);

  // Touch / swipe input
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStartRef.current.x;
      const dy = t.clientY - touchStartRef.current.y;
      touchStartRef.current = null;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      if (Math.max(absDx, absDy) < 30) return;
      if (absDx > absDy) handleDirection(dx > 0 ? "right" : "left");
      else handleDirection(dy > 0 ? "down" : "up");
    },
    [handleDirection],
  );

  const startGame = () => {
    dispatch({ type: "START" });
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Spark: Merge the numbers! Slide tiles and combine powers of 2.");
    void hapticSelection();
  };

  /* ─── RENDER ─── */

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-gradient-to-br from-amber-50 to-orange-100 text-amber-950 dark:border-amber-600/25 dark:from-amber-950 dark:to-orange-950 dark:text-amber-50">
      {/* ambient orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-500/20"
      />
      <div className="relative z-10 p-6 md:p-8">
        {/* HUD */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-600 dark:text-amber-300">Math Puzzle</p>
            <h2 className="text-3xl font-black tracking-tight">2048</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-700 dark:text-amber-200">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/50 bg-amber-200/30 px-3 py-1 dark:border-amber-700/50 dark:bg-amber-800/30">
              <Trophy className="h-3.5 w-3.5" /> {state.score}
            </span>
            <span>Best {state.bestScore}</span>
            <span>Moves {state.moves}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ─── READY ─── */}
          {state.phase === "ready" && (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-amber-200/40 bg-white/60 p-6 dark:border-amber-800/40 dark:bg-black/30"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <MascotFriend id="spark" mood="thinking" size="lg" />
                <Grid3X3 className="h-10 w-10 text-amber-500" />
                <h3 className="text-2xl font-black">Merge to 2048!</h3>
                <p className="max-w-md text-sm text-amber-800 dark:text-amber-200">
                  Swipe or use arrow keys to slide tiles. When two tiles with the same number touch, they merge into one with double the value. Reach 2048 to win!
                </p>
                <ul className="space-y-1 text-xs text-amber-700 dark:text-amber-300">
                  <li>⭐⭐⭐ — Reach 2048</li>
                  <li>⭐⭐ — Score 5,000+</li>
                  <li>⭐ — Score 1,000+</li>
                </ul>
                <PhysicalButton onClick={startGame} variant="primary" className="px-10 py-4 text-lg">
                  Start Game 🧮
                </PhysicalButton>
              </div>
            </motion.section>
          )}

          {/* ─── PLAYING ─── */}
          {state.phase === "playing" && (
            <motion.section
              key="playing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex flex-col items-center gap-4"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* 4x4 grid */}
              <div
                className="grid grid-cols-4 gap-2 rounded-2xl border border-amber-300/40 bg-amber-200/30 p-3 dark:border-amber-700/40 dark:bg-amber-900/30 sm:gap-3 sm:p-4"
                style={{ touchAction: "none" }}
                role="group"
                aria-label="2048 puzzle grid"
              >
                {state.grid.flat().map((value, index) => {
                  const style = getTileStyle(value);
                  return (
                    <motion.div
                      key={index}
                      layout
                      initial={value > 0 ? { scale: 0.5 } : false}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`flex aspect-square w-16 items-center justify-center rounded-xl font-black sm:w-20 md:w-24 ${style.bg} ${style.text} ${tileFontSize(value)} shadow-md`}
                      aria-label={value > 0 ? `Tile ${value}` : "Empty cell"}
                    >
                      {value > 0 ? value : ""}
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile direction buttons */}
              <div className="grid grid-cols-3 gap-2 sm:hidden" role="group" aria-label="Direction controls">
                <div />
                <button type="button" onClick={() => handleDirection("up")} className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/50 text-xl font-bold dark:bg-amber-700/50" aria-label="Move up">↑</button>
                <div />
                <button type="button" onClick={() => handleDirection("left")} className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/50 text-xl font-bold dark:bg-amber-700/50" aria-label="Move left">←</button>
                <button type="button" onClick={() => handleDirection("down")} className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/50 text-xl font-bold dark:bg-amber-700/50" aria-label="Move down">↓</button>
                <button type="button" onClick={() => handleDirection("right")} className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/50 text-xl font-bold dark:bg-amber-700/50" aria-label="Move right">→</button>
              </div>
            </motion.section>
          )}

          {/* ─── COMPLETE ─── */}
          {state.phase === "complete" && (
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-amber-200/40 bg-white/60 p-6 text-center dark:border-amber-800/40 dark:bg-black/30"
            >
              <div className="mx-auto mb-4 w-fit rounded-full border border-amber-300/40 bg-amber-200/20 px-4 py-2 text-sm font-bold dark:border-amber-700/40 dark:bg-amber-800/20">
                {won ? "🎉 You Win!" : "Game Over"}
              </div>
              <div className="flex justify-center">
                <MascotFriend id="spark" mood={won ? "cheering" : "sad"} size="lg" />
              </div>
              {/* Stars */}
              <div className="mt-3 flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className="text-5xl"
                  >
                    ⭐
                  </motion.div>
                ))}
              </div>
              <p className="mt-3 text-sm text-amber-800 dark:text-amber-200">
                Score {state.score} | Best Tile {highest} | Moves {state.moves}
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
    </div>
  );
}
