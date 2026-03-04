"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

// ─── Constants ────────────────────────────────────────────────────────────────
const COLS = 10;
const ROWS = 20;
const EMPTY = 0;
const BASE_INTERVAL = 600; // ms per drop tick
const SESSION_ID = createLegacySessionId();

// ─── Tetromino shapes ─────────────────────────────────────────────────────────
type TetrominoId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const SHAPES: Record<TetrominoId, number[][][]> = {
  1: [[[1,1,1,1]], [[1],[1],[1],[1]]], // I
  2: [[[2,2],[2,2]]], // O
  3: [[[0,3,0],[3,3,3]], [[3,0],[3,3],[3,0]], [[3,3,3],[0,3,0]], [[0,3],[3,3],[0,3]]], // T
  4: [[[0,4,4],[4,4,0]], [[4,0],[4,4],[0,4]]], // S
  5: [[[5,5,0],[0,5,5]], [[0,5],[5,5],[5,0]]], // Z
  6: [[[6,0],[6,0],[6,6]], [[6,6,6],[6,0,0]], [[6,6],[0,6],[0,6]], [[0,0,6],[6,6,6]]], // J
  7: [[[0,7],[0,7],[7,7]], [[7,0,0],[7,7,7]], [[7,7],[7,0],[7,0]], [[7,7,7],[0,0,7]]], // L
};

const COLORS: Record<number, string> = {
  0: "transparent",
  1: "#06b6d4", // cyan I
  2: "#eab308", // yellow O
  3: "#a855f7", // purple T
  4: "#22c55e", // green S
  5: "#ef4444", // red Z
  6: "#3b82f6", // blue J
  7: "#f97316", // orange L
};

// ─── Types ────────────────────────────────────────────────────────────────────
type Cell = number;
type Grid = Cell[][];
type Phase = "ready" | "playing" | "complete";

type Piece = {
  id: TetrominoId;
  rotation: number;
  row: number;
  col: number;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function makeGrid(): Grid {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY));
}

function getShape(piece: Piece): number[][] {
  const rotations = SHAPES[piece.id];
  return rotations[piece.rotation % rotations.length];
}

function isValid(grid: Grid, piece: Piece, dr = 0, dc = 0, newRot?: number): boolean {
  const shape = newRot !== undefined
    ? SHAPES[piece.id][newRot % SHAPES[piece.id].length]
    : getShape(piece);
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (!shape[r][c]) continue;
      const nr = piece.row + r + dr;
      const nc = piece.col + c + dc;
      if (nr >= ROWS || nc < 0 || nc >= COLS) return false;
      if (nr >= 0 && grid[nr][nc] !== EMPTY) return false;
    }
  }
  return true;
}

function placePiece(grid: Grid, piece: Piece): Grid {
  const next = grid.map((row) => [...row]);
  const shape = getShape(piece);
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (!shape[r][c]) continue;
      const nr = piece.row + r;
      const nc = piece.col + c;
      if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
        next[nr][nc] = piece.id;
      }
    }
  }
  return next;
}

function clearLines(grid: Grid): { grid: Grid; cleared: number } {
  const remaining = grid.filter((row) => row.some((c) => c === EMPTY));
  const cleared = ROWS - remaining.length;
  const newRows = Array.from({ length: cleared }, () => Array(COLS).fill(EMPTY));
  return { grid: [...newRows, ...remaining], cleared };
}

function randomPiece(): Piece {
  const ids: TetrominoId[] = [1, 2, 3, 4, 5, 6, 7];
  const id = ids[Math.floor(Math.random() * ids.length)];
  const shape = SHAPES[id][0];
  return { id, rotation: 0, row: -shape.length + 1, col: Math.floor((COLS - shape[0].length) / 2) };
}

function scoreForLines(lines: number): number {
  return [0, 100, 300, 500, 800][Math.min(lines, 4)];
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone077PixelBlockDrop() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [grid, setGrid] = useState<Grid>(makeGrid());
  const [current, setCurrent] = useState<Piece | null>(null);
  const [next, setNext] = useState<Piece | null>(null);
  const [score, setScore] = useState(0);
  const [linesCleared, setLinesCleared] = useState(0);
  const [level, setLevel] = useState(1);
  const [startTime] = useState(Date.now());
  const [interactionCount, setInteractionCount] = useState(0);

  const gridRef = useRef(grid);
  const currentRef = useRef(current);
  const scoreRef = useRef(score);
  const linesClearedRef = useRef(linesCleared);
  const phaseRef = useRef(phase);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => { gridRef.current = grid; }, [grid]);
  useEffect(() => { currentRef.current = current; }, [current]);
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { linesClearedRef.current = linesCleared; }, [linesCleared]);
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  const endGame = useCallback((finalScore: number, totalLines: number) => {
    if (tickRef.current) clearInterval(tickRef.current);
    setPhase("complete");
    const elapsedMs = Date.now() - startTime;
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-077",
      score: finalScore,
      maxScore: 5000,
      elapsedMs,
      interactions: interactionCount,
      difficulty: "medium",
    });
    if (totalLines >= 10) {
      mascot.speak("Pixel master! Incredible stacking!", "celebrate");
    } else if (finalScore > 500) {
      mascot.speak("Nice run! Keep sharpening those block skills.", "happy");
    } else {
      mascot.speak("Good try! Stack lines to score big.", "encourage");
    }
  }, [interactionCount, mascot, startTime]);

  const spawnNext = useCallback((currentGrid: Grid, nextPiece: Piece) => {
    const spawned = nextPiece;
    if (!isValid(currentGrid, spawned)) {
      endGame(scoreRef.current, linesClearedRef.current);
      return;
    }
    setCurrent(spawned);
    setNext(randomPiece());
  }, [endGame]);

  const lockAndSpawn = useCallback((lockedGrid: Grid, lockedPiece: Piece) => {
    const withPiece = placePiece(lockedGrid, lockedPiece);
    const { grid: clearedGrid, cleared } = clearLines(withPiece);
    const earned = scoreForLines(cleared);
    const newScore = scoreRef.current + earned;
    const newLines = linesClearedRef.current + cleared;
    const newLevel = Math.floor(newLines / 10) + 1;

    setGrid(clearedGrid);
    gridRef.current = clearedGrid;
    setScore(newScore);
    scoreRef.current = newScore;
    setLinesCleared(newLines);
    linesClearedRef.current = newLines;
    setLevel(newLevel);

    if (cleared > 0) {
      hapticSuccess();
      if (cleared >= 4) mascot.speak("TETRIS! Legendary clear!", "celebrate");
      else if (cleared >= 2) mascot.speak("Multi-clear! Well played!", "happy");
      else mascot.speak("Line clear!", "happy");
    }

    const nextSpawn = randomPiece();
    if (!isValid(clearedGrid, nextSpawn)) {
      endGame(newScore, newLines);
    } else {
      setCurrent(nextSpawn);
      setNext(randomPiece());
    }
  }, [endGame, mascot]);

  const tick = useCallback(() => {
    const piece = currentRef.current;
    const g = gridRef.current;
    if (!piece || phaseRef.current !== "playing") return;

    if (isValid(g, piece, 1)) {
      setCurrent((p) => p ? { ...p, row: p.row + 1 } : p);
    } else {
      lockAndSpawn(g, piece);
    }
  }, [lockAndSpawn]);

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = Math.max(100, BASE_INTERVAL - (level - 1) * 50);
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = setInterval(tick, interval);
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  }, [phase, level, tick]);

  const startGame = () => {
    const fresh = makeGrid();
    const firstPiece = randomPiece();
    const secondPiece = randomPiece();
    setGrid(fresh);
    gridRef.current = fresh;
    setCurrent(firstPiece);
    setNext(secondPiece);
    setScore(0);
    setLinesCleared(0);
    setLevel(1);
    setPhase("playing");
    mascot.speak("Drop and stack blocks! Clear full lines to score!", "happy");
  };

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (phaseRef.current !== "playing") return;
    const piece = currentRef.current;
    const g = gridRef.current;
    if (!piece) return;

    setInteractionCount((n) => n + 1);

    if (e.key === "ArrowLeft" || e.key === "a") {
      if (isValid(g, piece, 0, -1)) {
        hapticSelection();
        setCurrent((p) => p ? { ...p, col: p.col - 1 } : p);
      }
    } else if (e.key === "ArrowRight" || e.key === "d") {
      if (isValid(g, piece, 0, 1)) {
        hapticSelection();
        setCurrent((p) => p ? { ...p, col: p.col + 1 } : p);
      }
    } else if (e.key === "ArrowDown" || e.key === "s") {
      if (isValid(g, piece, 1)) {
        setCurrent((p) => p ? { ...p, row: p.row + 1 } : p);
      }
    } else if (e.key === "ArrowUp" || e.key === "w" || e.key === " ") {
      const newRot = (piece.rotation + 1) % SHAPES[piece.id].length;
      if (isValid(g, piece, 0, 0, newRot)) {
        hapticSelection();
        setCurrent((p) => p ? { ...p, rotation: newRot } : p);
      }
    } else if (e.key === "Enter") {
      // hard drop
      let dropRow = piece.row;
      while (isValid(g, { ...piece, row: dropRow + 1 })) dropRow++;
      const dropped = { ...piece, row: dropRow };
      hapticSuccess();
      lockAndSpawn(g, dropped);
    }
  }, [lockAndSpawn]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Build display grid (combine locked + falling piece)
  const displayGrid: Grid = current
    ? placePiece(grid, current)
    : grid.map((row) => [...row]);

  // Ghost piece (landing preview)
  const ghost: Piece | null = current ? (() => {
    let g = current;
    while (isValid(grid, { ...g, row: g.row + 1 })) g = { ...g, row: g.row + 1 };
    return g;
  })() : null;

  const ghostGrid: Grid = ghost ? placePiece(grid, { ...ghost, id: 8 as TetrominoId }) : grid.map((r) => [...r]);

  // Next piece preview
  const nextShape = next ? getShape(next) : null;

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="pixel" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Pixel Block Drop</h2>
          <p className="text-xs text-stone-500">Stack & clear lines to score!</p>
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
            <p className="text-4xl">🟦</p>
            <h3 className="text-lg font-black text-stone-800">Pixel Block Drop</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Drop falling blocks to fill complete rows. Clear lines to earn points. Don&apos;t let the stack reach the top!
            </p>
            <div className="text-xs text-stone-500 space-y-1">
              <p>← → : Move  |  ↑ / Space : Rotate  |  ↓ : Soft drop  |  Enter : Hard drop</p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Dropping!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            {/* Game board */}
            <div
              className="border-2 border-stone-300 bg-stone-900 rounded-lg overflow-hidden"
              style={{ display: "grid", gridTemplateColumns: `repeat(${COLS}, 28px)`, gridTemplateRows: `repeat(${ROWS}, 28px)` }}
            >
              {displayGrid.map((row, r) =>
                row.map((cell, c) => {
                  const ghostCell = ghostGrid[r]?.[c] ?? 0;
                  const isGhost = cell === EMPTY && ghostCell === 8;
                  return (
                    <div
                      key={`${r}-${c}`}
                      style={{
                        width: 28,
                        height: 28,
                        backgroundColor: cell !== EMPTY
                          ? COLORS[cell]
                          : isGhost
                          ? "rgba(255,255,255,0.12)"
                          : "transparent",
                        border: cell !== EMPTY
                          ? "1px solid rgba(255,255,255,0.25)"
                          : "1px solid rgba(255,255,255,0.04)",
                        borderRadius: 2,
                      }}
                    />
                  );
                })
              )}
            </div>

            {/* Side panel */}
            <div className="flex flex-col gap-3 min-w-[100px]">
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <p className="text-[10px] font-bold uppercase text-stone-400">Score</p>
                <p className="text-2xl font-black text-stone-800">{score}</p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <p className="text-[10px] font-bold uppercase text-stone-400">Level</p>
                <p className="text-xl font-black text-stone-800">{level}</p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <p className="text-[10px] font-bold uppercase text-stone-400">Lines</p>
                <p className="text-xl font-black text-stone-800">{linesCleared}</p>
              </div>

              {/* Next piece */}
              {nextShape && next && (
                <div className="rounded-xl border border-stone-200 bg-white p-3">
                  <p className="text-[10px] font-bold uppercase text-stone-400 mb-2">Next</p>
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${nextShape[0].length}, 20px)` }}>
                    {nextShape.map((row, r) =>
                      row.map((cell, c) => (
                        <div
                          key={`next-${r}-${c}`}
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: cell ? COLORS[cell] : "transparent",
                            border: cell ? "1px solid rgba(255,255,255,0.25)" : "none",
                            borderRadius: 2,
                          }}
                        />
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Mobile controls */}
              <div className="flex flex-col gap-1 sm:hidden">
                <div className="flex justify-center">
                  <button
                    className="w-10 h-10 rounded-lg bg-stone-700 text-white font-bold text-sm"
                    onPointerDown={() => handleKey({ key: "ArrowUp" } as KeyboardEvent)}
                  >↺</button>
                </div>
                <div className="flex gap-1 justify-center">
                  <button
                    className="w-10 h-10 rounded-lg bg-stone-700 text-white font-bold text-sm"
                    onPointerDown={() => handleKey({ key: "ArrowLeft" } as KeyboardEvent)}
                  >←</button>
                  <button
                    className="w-10 h-10 rounded-lg bg-stone-700 text-white font-bold text-sm"
                    onPointerDown={() => handleKey({ key: "ArrowDown" } as KeyboardEvent)}
                  >↓</button>
                  <button
                    className="w-10 h-10 rounded-lg bg-stone-700 text-white font-bold text-sm"
                    onPointerDown={() => handleKey({ key: "ArrowRight" } as KeyboardEvent)}
                  >→</button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="w-24 h-8 rounded-lg bg-sky-600 text-white font-bold text-xs"
                    onPointerDown={() => handleKey({ key: "Enter" } as KeyboardEvent)}
                  >Drop!</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{score >= 500 ? "🏆" : "🎯"}</p>
            <h3 className="text-lg font-black text-stone-800">Game Over!</h3>
            <div className="text-center space-y-1">
              <p className="text-3xl font-black text-sky-600">{score}</p>
              <p className="text-sm text-stone-500">{linesCleared} lines cleared · Level {level}</p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Play Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
