"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Droplets } from "lucide-react";
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
const SIZE = 10;
const COLORS = ["#EF4444", "#3B82F6", "#22C55E", "#EAB308", "#A855F7", "#EC4899"];
const MAX_MOVES = 22;

type Phase = "ready" | "playing" | "won" | "lost";

interface State {
  phase: Phase;
  sessionId: string;
  grid: number[][];
  moves: number;
  startTime: number;
  interactions: number;
}

function buildGrid(): number[][] {
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => Math.floor(Math.random() * COLORS.length)),
  );
}

function floodFill(grid: number[][], newColor: number): number[][] {
  const g = grid.map((r) => [...r]);
  const oldColor = g[0]![0]!;
  if (oldColor === newColor) return g;
  const q: [number, number][] = [[0, 0]];
  const visited = new Set<string>();
  while (q.length > 0) {
    const [r, c] = q.pop()!;
    const key = `${r},${c}`;
    if (visited.has(key)) continue;
    visited.add(key);
    if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) continue;
    if (g[r]![c] !== oldColor) continue;
    g[r]![c] = newColor;
    q.push([r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]);
  }
  return g;
}

function isWon(grid: number[][]): boolean {
  const first = grid[0]![0];
  return grid.every((row) => row.every((c) => c === first));
}

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  grid: buildGrid(),
  moves: 0,
  startTime: 0,
  interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "PICK"; color: number };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), grid: buildGrid(), startTime: Date.now() };
    case "PICK": {
      if (s.phase !== "playing") return s;
      if (a.color === s.grid[0]![0]) return s;
      const grid = floodFill(s.grid, a.color);
      const moves = s.moves + 1;
      const won = isWon(grid);
      const lost = !won && moves >= MAX_MOVES;
      return { ...s, grid, moves, interactions: s.interactions + 1, phase: won ? "won" : lost ? "lost" : "playing" };
    }
    default:
      return s;
  }
}

export default function GameColorFlood({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.phase === "lost") return 0;
    if (s.moves <= 14) return 3;
    if (s.moves <= 18) return 2;
    return 1;
  }, [isOver, s.phase, s.moves]);

  useEffect(() => {
    if (!isOver) return;
    if (s.phase === "won") { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-color-flood", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.phase === "won" ? Math.max(0, 100 - (s.moves - SIZE) * 5) : 0,
      maxScore: 100, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  const cellSize = Math.min(34, (width - 48) / SIZE);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="spark" mood={isOver ? (s.phase === "won" ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-pink-100 px-3 py-1 text-sm font-bold text-pink-800">
          <Droplets className="h-4 w-4" /> {s.moves}/{MAX_MOVES}
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-3xl font-bold text-slate-800">Color Flood</p>
          <p className="text-sm text-slate-600">Fill the board with one color in {MAX_MOVES} moves!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <>
          <div className="rounded-xl border-2 border-slate-300 bg-slate-100 p-1 shadow-lg" style={{ display: "grid", gridTemplateColumns: `repeat(${SIZE}, ${cellSize}px)` }}>
            {s.grid.flatMap((row, r) =>
              row.map((colorIdx, c) => (
                <div key={`${r}-${c}`} className="rounded-sm" style={{ width: cellSize, height: cellSize, backgroundColor: COLORS[colorIdx] }} />
              )),
            )}
          </div>
          <div className="flex gap-2">
            {COLORS.map((color, i) => (
              <button
                key={i}
                className="h-10 w-10 rounded-full border-2 border-white shadow-md transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
                onClick={() => { dispatch({ type: "PICK", color: i }); hapticSelection(); }}
              />
            ))}
          </div>
        </>
      )}

      {isOver && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{s.phase === "won" ? "Flooded!" : "Out of Moves!"}</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
