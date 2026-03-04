"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Leaf } from "lucide-react";
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
const ROWS = 13;
const CELL = 32;
const W = COLS * CELL;
const H = ROWS * CELL;

type Phase = "ready" | "playing" | "won" | "lost";
type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";

// Lane types
type LaneType = "safe" | "road" | "water" | "goal";

interface Lane {
  row: number;
  type: LaneType;
  speed: number; // pixels per tick; negative = left
  items: { x: number; w: number }[]; // cars or logs
  color: string;
}

interface State {
  phase: Phase;
  sessionId: string;
  frogX: number;
  frogY: number;
  lives: number;
  score: number;
  bestRow: number;
  lanes: Lane[];
  interactions: number;
  startTime: number;
}

type Action =
  | { type: "START" }
  | { type: "MOVE"; dir: Dir }
  | { type: "TICK" }
  | { type: "RESET" };

function createLanes(): Lane[] {
  const lanes: Lane[] = [];
  // Row 0 = bottom start (safe)
  lanes.push({ row: 0, type: "safe", speed: 0, items: [], color: "#4CAF50" });
  // Road lanes (rows 1-5)
  const roadColors = ["#424242", "#616161", "#424242", "#616161", "#424242"];
  const roadSpeeds = [1.2, -1.5, 1.0, -1.8, 1.4];
  for (let i = 0; i < 5; i++) {
    const numCars = 2 + Math.floor(Math.random() * 2);
    const items: { x: number; w: number }[] = [];
    for (let c = 0; c < numCars; c++) {
      items.push({
        x: (c * W) / numCars + Math.random() * 30,
        w: 40 + Math.random() * 20,
      });
    }
    lanes.push({ row: i + 1, type: "road", speed: roadSpeeds[i], items, color: roadColors[i] });
  }
  // Middle safe zone (row 6)
  lanes.push({ row: 6, type: "safe", speed: 0, items: [], color: "#4CAF50" });
  // Water lanes (rows 7-11)
  const waterSpeeds = [1.0, -0.8, 1.3, -1.1, 0.9];
  for (let i = 0; i < 5; i++) {
    const numLogs = 2 + Math.floor(Math.random() * 2);
    const items: { x: number; w: number }[] = [];
    for (let c = 0; c < numLogs; c++) {
      items.push({
        x: (c * W) / numLogs + Math.random() * 20,
        w: 60 + Math.random() * 40,
      });
    }
    lanes.push({ row: i + 7, type: "water", speed: waterSpeeds[i], items, color: "#1565C0" });
  }
  // Goal row (row 12)
  lanes.push({ row: 12, type: "goal", speed: 0, items: [], color: "#66BB6A" });
  return lanes;
}

function init(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    frogX: Math.floor(COLS / 2) * CELL,
    frogY: (ROWS - 1) * CELL,
    lives: 3,
    score: 0,
    bestRow: 0,
    lanes: createLanes(),
    interactions: 0,
    startTime: 0,
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now() };

    case "MOVE": {
      if (s.phase !== "playing") return s;
      let nx = s.frogX;
      let ny = s.frogY;
      if (a.dir === "UP") ny -= CELL;
      if (a.dir === "DOWN") ny += CELL;
      if (a.dir === "LEFT") nx -= CELL;
      if (a.dir === "RIGHT") nx += CELL;

      // Bounds
      if (nx < 0 || nx >= W || ny < 0 || ny >= H) return s;

      const row = Math.round(ny / CELL);
      const rowIdx = ROWS - 1 - row;
      const newBest = Math.max(s.bestRow, rowIdx);
      const scoreGain = newBest > s.bestRow ? 10 : 0;

      hapticSelection();

      // Check if reached goal
      if (rowIdx >= ROWS - 1) {
        return {
          ...s,
          frogX: nx,
          frogY: ny,
          score: s.score + scoreGain + 50,
          bestRow: 0,
          phase: "won",
          interactions: s.interactions + 1,
        };
      }

      return {
        ...s,
        frogX: nx,
        frogY: ny,
        bestRow: newBest,
        score: s.score + scoreGain,
        interactions: s.interactions + 1,
      };
    }

    case "TICK": {
      if (s.phase !== "playing") return s;

      // Move lane items
      const newLanes = s.lanes.map((lane) => {
        if (lane.speed === 0) return lane;
        const newItems = lane.items.map((item) => {
          let nx = item.x + lane.speed;
          if (lane.speed > 0 && nx > W + 20) nx = -item.w - 10;
          if (lane.speed < 0 && nx + item.w < -20) nx = W + 10;
          return { ...item, x: nx };
        });
        return { ...lane, items: newItems };
      });

      // Check frog collision
      const frogRow = ROWS - 1 - Math.round(s.frogY / CELL);
      const lane = newLanes.find((l) => l.row === frogRow);
      let frogX = s.frogX;

      if (lane) {
        if (lane.type === "road") {
          // Car hit?
          const hit = lane.items.some(
            (item) => frogX + CELL * 0.7 > item.x && frogX + CELL * 0.3 < item.x + item.w,
          );
          if (hit) {
            hapticError();
            const newLives = s.lives - 1;
            if (newLives <= 0) return { ...s, lanes: newLanes, lives: 0, phase: "lost" };
            return {
              ...s,
              lanes: newLanes,
              lives: newLives,
              frogX: Math.floor(COLS / 2) * CELL,
              frogY: (ROWS - 1) * CELL,
              bestRow: 0,
            };
          }
        } else if (lane.type === "water") {
          // Must be on a log
          const onLog = lane.items.find(
            (item) => frogX + CELL * 0.5 > item.x && frogX + CELL * 0.5 < item.x + item.w,
          );
          if (onLog) {
            frogX += lane.speed;
            // Off screen on log?
            if (frogX < -CELL || frogX > W) {
              hapticError();
              const newLives = s.lives - 1;
              if (newLives <= 0) return { ...s, lanes: newLanes, lives: 0, phase: "lost" };
              return {
                ...s,
                lanes: newLanes,
                lives: newLives,
                frogX: Math.floor(COLS / 2) * CELL,
                frogY: (ROWS - 1) * CELL,
                bestRow: 0,
              };
            }
          } else {
            // In water = dead
            hapticError();
            const newLives = s.lives - 1;
            if (newLives <= 0) return { ...s, lanes: newLanes, lives: 0, phase: "lost" };
            return {
              ...s,
              lanes: newLanes,
              lives: newLives,
              frogX: Math.floor(COLS / 2) * CELL,
              frogY: (ROWS - 1) * CELL,
              bestRow: 0,
            };
          }
        }
      }

      return { ...s, lanes: newLanes, frogX: frogX };
    }

    case "RESET":
      return init();

    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameFrogger() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Game loop ~30fps
  useEffect(() => {
    if (s.phase === "playing") {
      let last = 0;
      const tick = (ts: number) => {
        if (ts - last >= 33) {
          dispatch({ type: "TICK" });
          last = ts;
        }
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [s.phase]);

  // Draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);

    // Draw lanes
    for (const lane of s.lanes) {
      const y = (ROWS - 1 - lane.row) * CELL;
      ctx.fillStyle = lane.color;
      ctx.fillRect(0, y, W, CELL);

      // Draw items
      for (const item of lane.items) {
        if (lane.type === "road") {
          // Car
          ctx.fillStyle = ["#E53935", "#FFB300", "#1E88E5", "#43A047"][Math.floor(item.w) % 4];
          ctx.beginPath();
          ctx.roundRect(item.x, y + 4, item.w, CELL - 8, 4);
          ctx.fill();
          // Windshield
          ctx.fillStyle = "rgba(255,255,255,0.4)";
          const windX = lane.speed > 0 ? item.x + item.w - 12 : item.x + 4;
          ctx.fillRect(windX, y + 7, 8, CELL - 14);
        } else if (lane.type === "water") {
          // Log
          ctx.fillStyle = "#795548";
          ctx.beginPath();
          ctx.roundRect(item.x, y + 3, item.w, CELL - 6, 6);
          ctx.fill();
          // Bark texture
          ctx.fillStyle = "#5D4037";
          for (let t = 0; t < item.w - 10; t += 15) {
            ctx.fillRect(item.x + t + 5, y + 8, 2, CELL - 16);
          }
        }
      }
    }

    // Lane markings for roads
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.setLineDash([8, 8]);
    for (let r = 1; r <= 5; r++) {
      const y = (ROWS - 1 - r) * CELL + CELL;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Goal markers
    const goalY = 0;
    ctx.fillStyle = "#2E7D32";
    for (let i = 0; i < COLS; i += 3) {
      ctx.fillRect(i * CELL + 4, goalY + 4, CELL - 8, CELL - 8);
    }

    // Frog
    const fx = s.frogX + CELL / 2;
    const fy = s.frogY + CELL / 2;
    // Body
    ctx.fillStyle = "#4CAF50";
    ctx.beginPath();
    ctx.ellipse(fx, fy, CELL / 2.5, CELL / 2.8, 0, 0, Math.PI * 2);
    ctx.fill();
    // Eyes
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(fx - 5, fy - 6, 4, 0, Math.PI * 2);
    ctx.arc(fx + 5, fy - 6, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(fx - 5, fy - 6, 2, 0, Math.PI * 2);
    ctx.arc(fx + 5, fy - 6, 2, 0, Math.PI * 2);
    ctx.fill();

    // HUD
    ctx.fillStyle = "white";
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${s.score}`, 4, H - 4);
    ctx.textAlign = "right";
    ctx.fillText(`${"❤️".repeat(s.lives)}`, W - 4, H - 4);
  }, [s.frogX, s.frogY, s.lanes, s.score, s.lives]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = {
        ArrowUp: "UP", ArrowDown: "DOWN", ArrowLeft: "LEFT", ArrowRight: "RIGHT",
        KeyW: "UP", KeyS: "DOWN", KeyA: "LEFT", KeyD: "RIGHT",
      };
      const dir = map[e.code];
      if (dir) {
        e.preventDefault();
        if (s.phase === "ready") dispatch({ type: "START" });
        dispatch({ type: "MOVE", dir });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [s.phase]);

  // Touch swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 15) return;
    let dir: Dir;
    if (Math.abs(dx) > Math.abs(dy)) dir = dx > 0 ? "RIGHT" : "LEFT";
    else dir = dy > 0 ? "DOWN" : "UP";
    if (s.phase === "ready") dispatch({ type: "START" });
    dispatch({ type: "MOVE", dir });
  }, [s.phase]);

  // Complete
  useEffect(() => {
    if (s.phase === "won" || s.phase === "lost") {
      if (s.phase === "won") hapticCelebration(); else hapticError();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "frogger",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.score,
        maxScore: 170,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.score]);

  const stars = useMemo(() => {
    if (s.phase === "won") return 3;
    if (s.score >= 80) return 2;
    if (s.score >= 30) return 1;
    return 0;
  }, [s.phase, s.score]);

  const isOver = s.phase === "won" || s.phase === "lost";

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-green-50 to-blue-50 p-6 dark:from-green-950/40 dark:to-blue-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-500" aria-hidden />
          <h2 className="text-xl font-bold text-green-700 dark:text-green-300">Frogger</h2>
        </div>
        <MascotFriend id="pixel" mood="happy" size="sm" />
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="rounded-2xl shadow-lg"
          onClick={() => s.phase === "ready" && dispatch({ type: "START" })}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />

        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Frogger</p>
            <p className="mb-4 text-sm text-white/80">Cross roads &amp; rivers to reach the top!</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
              Start Game
            </PhysicalButton>
          </div>
        )}

        {isOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/50"
          >
            <Trophy className="mb-2 h-10 w-10 text-amber-400" />
            <p className="text-2xl font-bold text-white">{s.phase === "won" ? "You Made It!" : "Splat!"}</p>
            <div className="my-2 text-4xl" aria-label={`${stars} stars`}>
              {"★".repeat(stars)}{"☆".repeat(3 - stars)}
            </div>
            <p className="mb-3 text-xl font-bold text-white">Score: {s.score}</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
              <RotateCcw className="mr-2 h-4 w-4" /> Play Again
            </PhysicalButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
