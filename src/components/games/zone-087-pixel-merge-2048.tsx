"use client";

import { useCallback, useEffect, useState } from "react";
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
const SIZE = 4;
const SESSION_ID = createLegacySessionId();

type Grid = number[][];
type Phase = "ready" | "playing" | "complete";

// ─── Tile Colors ──────────────────────────────────────────────────────────────
const TILE_STYLES: Record<number, { bg: string; text: string }> = {
  0:    { bg: "bg-stone-100", text: "text-transparent" },
  2:    { bg: "bg-amber-50",  text: "text-stone-700" },
  4:    { bg: "bg-amber-100", text: "text-stone-700" },
  8:    { bg: "bg-orange-300",text: "text-white" },
  16:   { bg: "bg-orange-400",text: "text-white" },
  32:   { bg: "bg-orange-500",text: "text-white" },
  64:   { bg: "bg-orange-600",text: "text-white" },
  128:  { bg: "bg-yellow-400",text: "text-white" },
  256:  { bg: "bg-yellow-500",text: "text-white" },
  512:  { bg: "bg-yellow-600",text: "text-white" },
  1024: { bg: "bg-sky-500",   text: "text-white" },
  2048: { bg: "bg-sky-600",   text: "text-white" },
};

function tileStyle(v: number): { bg: string; text: string } {
  return TILE_STYLES[v] ?? { bg: "bg-purple-600", text: "text-white" };
}

// ─── Game logic ───────────────────────────────────────────────────────────────
function emptyGrid(): Grid {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
}

function addRandom(grid: Grid): Grid {
  const next = grid.map((r) => [...r]);
  const empty: [number, number][] = [];
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) if (next[r][c] === 0) empty.push([r, c]);
  if (empty.length === 0) return next;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  next[r][c] = Math.random() < 0.9 ? 2 : 4;
  return next;
}

function slideRow(row: number[]): { row: number[]; score: number } {
  const filtered = row.filter((v) => v !== 0);
  let score = 0;
  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i] === filtered[i + 1]) {
      filtered[i] *= 2;
      score += filtered[i];
      filtered.splice(i + 1, 1);
    }
  }
  while (filtered.length < SIZE) filtered.push(0);
  return { row: filtered, score };
}

function moveGrid(grid: Grid, dir: "left" | "right" | "up" | "down"): { grid: Grid; score: number; moved: boolean } {
  let g = grid.map((r) => [...r]);
  let totalScore = 0;
  let moved = false;

  if (dir === "right") g = g.map((r) => r.reverse());
  if (dir === "up") g = transpose(g);
  if (dir === "down") g = transpose(g).map((r) => r.reverse());

  for (let r = 0; r < SIZE; r++) {
    const { row, score } = slideRow(g[r]);
    if (row.join(",") !== g[r].join(",")) moved = true;
    g[r] = row;
    totalScore += score;
  }

  if (dir === "right") g = g.map((r) => r.reverse());
  if (dir === "up") g = transpose(g);
  if (dir === "down") g = g.map((r) => r.reverse()).map((_, i, arr) => arr[i]);

  // Re-transpose for up/down
  if (dir === "up") g = transpose(g);
  if (dir === "down") { g = g.map((r) => r.reverse()); g = transpose(g); }

  return { grid: g, score: totalScore, moved };
}

function transpose(g: Grid): Grid {
  return Array.from({ length: SIZE }, (_, r) => Array.from({ length: SIZE }, (_, c) => g[c][r]));
}

function hasMovesLeft(grid: Grid): boolean {
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) {
    if (grid[r][c] === 0) return true;
    if (r < SIZE - 1 && grid[r][c] === grid[r + 1][c]) return true;
    if (c < SIZE - 1 && grid[r][c] === grid[r][c + 1]) return true;
  }
  return false;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone087PixelMerge2048() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [grid, setGrid] = useState<Grid>(emptyGrid());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);
  const [won, setWon] = useState(false);

  const startGame = useCallback(() => {
    let g = emptyGrid();
    g = addRandom(g);
    g = addRandom(g);
    setGrid(g);
    setScore(0);
    setWon(false);
    setInteractions(0);
    setPhase("playing");
    mascot.speak("Swipe tiles to merge matching numbers! Reach 2048!", "happy");
  }, [mascot]);

  const applyMove = useCallback((dir: "left" | "right" | "up" | "down") => {
    if (phase !== "playing") return;
    setInteractions((n) => n + 1);

    setGrid((prev) => {
      const { grid: next, score: earned, moved } = moveGrid(prev, dir);
      if (!moved) { hapticError(); return prev; }

      hapticSelection();
      const withNew = addRandom(next);
      const newScore = score + earned;
      setScore(newScore);
      setBest((b) => Math.max(b, newScore));

      if (earned > 0) {
        if (withNew.flat().includes(2048) && !won) {
          hapticSuccess();
          setWon(true);
          mascot.speak("2048 tile reached! You WIN!", "celebrate");
          setTimeout(() => {
            setPhase("complete");
            emitLegacyGameComplete({
              sessionId: SESSION_ID,
              gameId: "zone-087",
              score: newScore,
              maxScore: 20000,
              elapsedMs: Date.now() - startTime,
              interactions,
              difficulty: "medium",
            });
          }, 1500);
        } else if (earned >= 256) {
          mascot.speak(`${earned} pts! Huge merge!`, "celebrate");
        }
      }

      if (!hasMovesLeft(withNew)) {
        setTimeout(() => {
          setPhase("complete");
          emitLegacyGameComplete({
            sessionId: SESSION_ID,
            gameId: "zone-087",
            score: newScore,
            maxScore: 20000,
            elapsedMs: Date.now() - startTime,
            interactions,
            difficulty: "medium",
          });
          mascot.speak("No more moves! Great run!", "encourage");
        }, 500);
      }

      return withNew;
    });
  }, [interactions, mascot, phase, score, startTime, won]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") { e.preventDefault(); applyMove("left"); }
      if (e.key === "ArrowRight" || e.key === "d") { e.preventDefault(); applyMove("right"); }
      if (e.key === "ArrowUp" || e.key === "w") { e.preventDefault(); applyMove("up"); }
      if (e.key === "ArrowDown" || e.key === "s") { e.preventDefault(); applyMove("down"); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [applyMove]);

  // Touch swipe support
  const touchStartRef = { x: 0, y: 0 };
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.x = e.touches[0].clientX;
    touchStartRef.y = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartRef.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      applyMove(dx > 30 ? "right" : "left");
    } else if (Math.abs(dy) > 30) {
      applyMove(dy > 0 ? "down" : "up");
    }
  };

  const maxTile = Math.max(...grid.flat());

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="pixel" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Pixel Merge 2048</h2>
          <p className="text-xs text-stone-500">Swipe to merge tiles — reach 2048!</p>
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
            <p className="text-4xl">🔢</p>
            <h3 className="text-lg font-black text-stone-800">Pixel Merge 2048</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Slide tiles to merge matching numbers. Combine 1024+1024 to make 2048 and win! Use arrow keys or swipe.
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Merging!
            </PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="board" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* Score */}
            <div className="flex gap-6">
              <div className="rounded-xl bg-amber-500 px-4 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Score</p>
                <p className="text-xl font-black">{score}</p>
              </div>
              <div className="rounded-xl bg-stone-600 px-4 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Best</p>
                <p className="text-xl font-black">{best}</p>
              </div>
              {won && (
                <div className="rounded-xl bg-sky-500 px-4 py-2 text-center text-white">
                  <p className="text-[10px] font-bold uppercase">🏆</p>
                  <p className="text-xl font-black">2048!</p>
                </div>
              )}
            </div>

            {/* Grid */}
            <div
              className="rounded-2xl bg-stone-300 p-2 touch-none"
              style={{ display: "grid", gridTemplateColumns: `repeat(${SIZE}, 80px)`, gap: 8 }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {grid.map((row, r) =>
                row.map((val, c) => {
                  const style = tileStyle(val);
                  return (
                    <motion.div
                      key={`${r}-${c}`}
                      layout
                      className={`w-20 h-20 rounded-xl flex items-center justify-center font-black text-center ${style.bg} ${style.text}`}
                      style={{ fontSize: val >= 1024 ? 16 : val >= 128 ? 20 : 28 }}
                    >
                      {val !== 0 ? val : ""}
                    </motion.div>
                  );
                })
              )}
            </div>

            <p className="text-xs text-stone-400">Arrow keys or WASD to slide · Swipe on mobile</p>

            {phase === "complete" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm w-full max-w-xs"
              >
                <p className="font-black text-stone-800">{won ? "🏆 You reached 2048!" : "No more moves!"}</p>
                <p className="text-xl font-black text-amber-600">{score} pts · Best tile: {maxTile}</p>
                <PhysicalButton onClick={startGame} variant="primary">
                  <RotateCcw className="mr-1.5 inline h-4 w-4" /> New Game
                </PhysicalButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
