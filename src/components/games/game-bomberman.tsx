"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Bomb } from "lucide-react";
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
const COLS = 13;
const ROWS = 11;
const CELL = 36;
const W = COLS * CELL;
const H = ROWS * CELL;
const BOMB_TIMER = 2000;
const BLAST_TIME = 400;

type CellType = "empty" | "wall" | "brick" | "bomb" | "blast" | "exit";
type Phase = "ready" | "playing" | "won" | "lost";
type Dir = "up" | "down" | "left" | "right";

interface BombInfo { r: number; c: number; placed: number; range: number }

interface State {
  phase: Phase;
  sessionId: string;
  grid: CellType[][];
  playerR: number;
  playerC: number;
  bombs: BombInfo[];
  blasts: Set<string>;
  score: number;
  level: number;
  startTime: number;
  interactions: number;
}

function buildGrid(level: number): CellType[][] {
  const g: CellType[][] = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => {
      if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) return "wall";
      if (r % 2 === 0 && c % 2 === 0) return "wall";
      return "empty";
    }),
  );
  // bricks
  const brickChance = 0.35 + level * 0.05;
  for (let r = 1; r < ROWS - 1; r++) {
    for (let c = 1; c < COLS - 1; c++) {
      if (g[r]![c] !== "empty") continue;
      if ((r <= 2 && c <= 2) || (r >= ROWS - 3 && c >= COLS - 3)) continue;
      if (Math.random() < brickChance) g[r]![c] = "brick";
    }
  }
  // exit behind a random brick
  const bricks: [number, number][] = [];
  for (let r = 1; r < ROWS - 1; r++)
    for (let c = 1; c < COLS - 1; c++)
      if (g[r]![c] === "brick") bricks.push([r, c]);
  if (bricks.length > 0) {
    const [er, ec] = bricks[Math.floor(Math.random() * bricks.length)]!;
    g[er]![ec] = "brick"; // exit revealed when brick destroyed
  }
  return g;
}

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  grid: buildGrid(1),
  playerR: 1,
  playerC: 1,
  bombs: [],
  blasts: new Set(),
  score: 0,
  level: 1,
  startTime: 0,
  interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "MOVE"; dir: Dir }
  | { type: "PLACE_BOMB" }
  | { type: "DETONATE"; bomb: BombInfo }
  | { type: "CLEAR_BLAST" }
  | { type: "DIE" }
  | { type: "WIN" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const grid = buildGrid(1);
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), grid, startTime: Date.now() };
    }
    case "MOVE": {
      if (s.phase !== "playing") return s;
      let nr = s.playerR, nc = s.playerC;
      if (a.dir === "up") nr--;
      if (a.dir === "down") nr++;
      if (a.dir === "left") nc--;
      if (a.dir === "right") nc++;
      const cell = s.grid[nr]?.[nc];
      if (!cell || cell === "wall" || cell === "brick" || cell === "bomb") return s;
      if (cell === "blast") return { ...s, phase: "lost", playerR: nr, playerC: nc };
      const won = cell === "exit";
      return { ...s, playerR: nr, playerC: nc, interactions: s.interactions + 1, ...(won ? { phase: "won", score: s.score + 100 } : {}) };
    }
    case "PLACE_BOMB": {
      if (s.phase !== "playing") return s;
      if (s.bombs.length >= 1 + Math.floor(s.level / 3)) return s;
      if (s.grid[s.playerR]![s.playerC] === "bomb") return s;
      const newGrid = s.grid.map((row) => [...row]);
      newGrid[s.playerR]![s.playerC] = "bomb";
      const bomb: BombInfo = { r: s.playerR, c: s.playerC, placed: Date.now(), range: 2 + Math.floor(s.level / 2) };
      return { ...s, grid: newGrid, bombs: [...s.bombs, bomb], interactions: s.interactions + 1 };
    }
    case "DETONATE": {
      const newGrid = s.grid.map((row) => [...row]);
      const blasts = new Set(s.blasts);
      const { r, c, range } = a.bomb;
      newGrid[r]![c] = "empty";
      blasts.add(`${r},${c}`);
      let addScore = 0;
      const dirs: [number, number][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      for (const [dr, dc] of dirs) {
        for (let i = 1; i <= range; i++) {
          const br = r + dr * i, bc = c + dc * i;
          const t = newGrid[br]?.[bc];
          if (!t || t === "wall") break;
          if (t === "brick") {
            // 10% chance to reveal exit
            newGrid[br]![bc] = Math.random() < 0.1 ? "exit" : "empty";
            addScore += 10;
            blasts.add(`${br},${bc}`);
            break;
          }
          blasts.add(`${br},${bc}`);
        }
      }
      const playerHit = blasts.has(`${s.playerR},${s.playerC}`);
      return {
        ...s,
        grid: newGrid,
        bombs: s.bombs.filter((b) => b !== a.bomb),
        blasts,
        score: s.score + addScore,
        ...(playerHit ? { phase: "lost" as Phase } : {}),
      };
    }
    case "CLEAR_BLAST":
      return { ...s, blasts: new Set() };
    case "DIE":
      return { ...s, phase: "lost" };
    case "WIN":
      return { ...s, phase: "won", score: s.score + 100 };
    default:
      return s;
  }
}

export default function GameBomberman({ width = 500, height = 560 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (s.phase !== "won" && s.phase !== "lost") return 0;
    if (s.score >= 80) return 3;
    if (s.score >= 40) return 2;
    return s.score > 0 ? 1 : 0;
  }, [s.phase, s.score]);

  // keyboard
  useEffect(() => {
    if (s.phase !== "playing") return;
    const handle = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", w: "up", s: "down", a: "left", d: "right" };
      const dir = map[e.key];
      if (dir) { e.preventDefault(); dispatch({ type: "MOVE", dir }); hapticSelection(); }
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); dispatch({ type: "PLACE_BOMB" }); hapticSelection(); }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [s.phase]);

  // bomb timer
  useEffect(() => {
    if (s.phase !== "playing" || s.bombs.length === 0) return;
    const timers = s.bombs.map((bomb) => {
      const remaining = BOMB_TIMER - (Date.now() - bomb.placed);
      return setTimeout(() => {
        dispatch({ type: "DETONATE", bomb });
        hapticError();
        setTimeout(() => dispatch({ type: "CLEAR_BLAST" }), BLAST_TIME);
      }, Math.max(0, remaining));
    });
    return () => timers.forEach(clearTimeout);
  }, [s.phase, s.bombs]);

  // game complete
  useEffect(() => {
    if (!isOver) return;
    if (s.phase === "won") { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-bomberman", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score, maxScore: 100, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  // draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, W, H);
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * CELL, y = r * CELL;
        const t = s.grid[r]![c]!;
        if (t === "wall") { ctx.fillStyle = "#374151"; ctx.fillRect(x, y, CELL, CELL); }
        else if (t === "brick") { ctx.fillStyle = "#92400e"; ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2); }
        else if (t === "bomb") {
          ctx.fillStyle = "#1f2937"; ctx.fillRect(x, y, CELL, CELL);
          ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(x + CELL / 2, y + CELL / 2, CELL / 3, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "#f97316"; ctx.beginPath(); ctx.arc(x + CELL / 2, y + CELL / 4, 4, 0, Math.PI * 2); ctx.fill();
        }
        else if (t === "exit") {
          ctx.fillStyle = "#1f2937"; ctx.fillRect(x, y, CELL, CELL);
          ctx.fillStyle = "#22c55e"; ctx.fillRect(x + 6, y + 6, CELL - 12, CELL - 12);
        }
        else { ctx.fillStyle = "#1f2937"; ctx.fillRect(x, y, CELL, CELL); }
        if (s.blasts.has(`${r},${c}`)) { ctx.fillStyle = "rgba(251,146,60,0.7)"; ctx.fillRect(x, y, CELL, CELL); }
      }
    }
    // player
    const px = s.playerC * CELL + CELL / 2, py = s.playerR * CELL + CELL / 2;
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath(); ctx.arc(px, py, CELL / 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.font = "14px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("🧑", px, py);
  }, [s]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <MascotFriend id="pixel" mood={isOver ? (s.phase === "won" ? "happy" : "sad") : "idle"} size="sm" />
          <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">
            <Bomb className="h-4 w-4" /> {s.score}
          </div>
        </div>
        {s.phase === "playing" && (
          <div className="flex gap-1">
            {(["up", "down", "left", "right"] as Dir[]).map((d) => (
              <button key={d} className="rounded bg-slate-700 px-2 py-1 text-xs text-white" onClick={() => { dispatch({ type: "MOVE", dir: d }); hapticSelection(); }}>
                {d === "up" ? "↑" : d === "down" ? "↓" : d === "left" ? "←" : "→"}
              </button>
            ))}
            <button className="rounded bg-orange-600 px-2 py-1 text-xs text-white" onClick={() => { dispatch({ type: "PLACE_BOMB" }); hapticSelection(); }}>💣</button>
          </div>
        )}
      </div>
      <div className="relative">
        <canvas ref={canvasRef} width={W} height={H} className="rounded-2xl shadow-lg" />
        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Bomberman</p>
            <p className="mb-4 text-sm text-white/80">Place bombs to blast bricks &amp; find the exit!</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
          </div>
        )}
        {isOver && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/50">
            <Trophy className="mb-2 h-10 w-10 text-amber-400" />
            <p className="text-2xl font-bold text-white">{s.phase === "won" ? "Escape!" : "Boom!"}</p>
            <div className="my-2 text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
            <p className="mb-3 text-xl font-bold text-white">Score: {s.score}</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
