"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Gamepad2 } from "lucide-react";
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

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const CANVAS_W = GRID_SIZE * CELL_SIZE;
const CANVAS_H = GRID_SIZE * CELL_SIZE;
const TICK_MS_BASE = 140;
const TICK_MS_MIN = 60;
const MAX_SCORE = 50;

type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Phase = "ready" | "playing" | "complete";

interface Point {
  x: number;
  y: number;
}

interface State {
  phase: Phase;
  sessionId: string;
  snake: Point[];
  dir: Dir;
  nextDir: Dir;
  food: Point;
  score: number;
  bestScore: number;
  interactions: number;
  startTime: number;
}

type Action =
  | { type: "START" }
  | { type: "DIR"; dir: Dir }
  | { type: "TICK" }
  | { type: "RESET" };

function randomFood(snake: Point[]): Point {
  let pt: Point;
  do {
    pt = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
  } while (snake.some((s) => s.x === pt.x && s.y === pt.y));
  return pt;
}

function init(): State {
  const mid = Math.floor(GRID_SIZE / 2);
  const snake = [
    { x: mid, y: mid },
    { x: mid - 1, y: mid },
    { x: mid - 2, y: mid },
  ];
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    snake,
    dir: "RIGHT",
    nextDir: "RIGHT",
    food: randomFood(snake),
    score: 0,
    bestScore: 0,
    interactions: 0,
    startTime: 0,
  };
}

const OPPOSITE: Record<Dir, Dir> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const fresh = init();
      return {
        ...fresh,
        phase: "playing",
        sessionId: createLegacySessionId(),
        bestScore: s.bestScore,
        startTime: Date.now(),
      };
    }

    case "DIR": {
      if (s.phase !== "playing") return s;
      // Prevent 180-degree turn
      if (OPPOSITE[a.dir] === s.dir) return s;
      return { ...s, nextDir: a.dir, interactions: s.interactions + 1 };
    }

    case "TICK": {
      if (s.phase !== "playing") return s;

      const dir = s.nextDir;
      const head = s.snake[0];
      let nx = head.x;
      let ny = head.y;

      if (dir === "UP") ny--;
      if (dir === "DOWN") ny++;
      if (dir === "LEFT") nx--;
      if (dir === "RIGHT") nx++;

      // Wall collision
      if (nx < 0 || nx >= GRID_SIZE || ny < 0 || ny >= GRID_SIZE) {
        const best = Math.max(s.bestScore, s.score);
        return { ...s, phase: "complete", bestScore: best, dir };
      }

      // Self collision
      if (s.snake.some((seg) => seg.x === nx && seg.y === ny)) {
        const best = Math.max(s.bestScore, s.score);
        return { ...s, phase: "complete", bestScore: best, dir };
      }

      const newHead = { x: nx, y: ny };
      let newSnake: Point[];
      let newScore = s.score;
      let newFood = s.food;

      if (nx === s.food.x && ny === s.food.y) {
        newSnake = [newHead, ...s.snake];
        newScore = s.score + 1;
        newFood = randomFood(newSnake);
      } else {
        newSnake = [newHead, ...s.snake.slice(0, -1)];
      }

      return {
        ...s,
        snake: newSnake,
        dir,
        nextDir: dir,
        food: newFood,
        score: newScore,
      };
    }

    case "RESET":
      return { ...init(), bestScore: s.bestScore };

    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameSnake() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Game loop
  useEffect(() => {
    if (s.phase === "playing") {
      const speed = Math.max(TICK_MS_MIN, TICK_MS_BASE - s.score * 2);
      tickRef.current = setInterval(() => dispatch({ type: "TICK" }), speed);
      return () => { if (tickRef.current) clearInterval(tickRef.current); };
    }
  }, [s.phase, s.score]);

  // Draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // Background grid
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, CANVAS_H);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(CANVAS_W, i * CELL_SIZE);
      ctx.stroke();
    }

    // Food
    const fx = s.food.x * CELL_SIZE + CELL_SIZE / 2;
    const fy = s.food.y * CELL_SIZE + CELL_SIZE / 2;
    ctx.fillStyle = "#FF5252";
    ctx.beginPath();
    ctx.arc(fx, fy, CELL_SIZE / 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#FF8A80";
    ctx.beginPath();
    ctx.arc(fx - 2, fy - 2, CELL_SIZE / 6, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    s.snake.forEach((seg, i) => {
      const r = CELL_SIZE / 2 - 1;
      const cx = seg.x * CELL_SIZE + CELL_SIZE / 2;
      const cy = seg.y * CELL_SIZE + CELL_SIZE / 2;

      if (i === 0) {
        // Head
        ctx.fillStyle = "#66BB6A";
        ctx.beginPath();
        ctx.roundRect(seg.x * CELL_SIZE + 1, seg.y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2, 5);
        ctx.fill();

        // Eyes
        ctx.fillStyle = "white";
        const eyeOffsets = getEyeOffsets(s.dir);
        ctx.beginPath();
        ctx.arc(cx + eyeOffsets[0].dx, cy + eyeOffsets[0].dy, 2.5, 0, Math.PI * 2);
        ctx.arc(cx + eyeOffsets[1].dx, cy + eyeOffsets[1].dy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Body
        const shade = Math.max(0.4, 1 - i * 0.03);
        ctx.fillStyle = `rgba(76, 175, 80, ${shade})`;
        ctx.beginPath();
        ctx.roundRect(seg.x * CELL_SIZE + 1, seg.y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2, 4);
        ctx.fill();
      }
    });

    // Score overlay
    if (s.phase === "playing") {
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(`${s.score}`, CANVAS_W - 10, 22);
    }
  }, [s.snake, s.food, s.score, s.phase, s.dir]);

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
        if (s.phase === "ready" || s.phase === "complete") {
          dispatch({ type: "START" });
        }
        dispatch({ type: "DIR", dir });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [s.phase]);

  // Touch swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (Math.max(absDx, absDy) < 20) return; // ignore taps

    let dir: Dir;
    if (absDx > absDy) {
      dir = dx > 0 ? "RIGHT" : "LEFT";
    } else {
      dir = dy > 0 ? "DOWN" : "UP";
    }

    if (s.phase === "ready" || s.phase === "complete") {
      dispatch({ type: "START" });
    }
    dispatch({ type: "DIR", dir });
    hapticSelection();
  }, [s.phase]);

  // Complete emit
  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "snake",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.score,
        maxScore: MAX_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.score]);

  const stars = useMemo(() => {
    if (s.score >= 30) return 3;
    if (s.score >= 15) return 2;
    if (s.score >= 5) return 1;
    return 0;
  }, [s.score]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-emerald-50 to-teal-50 p-6 dark:from-emerald-950/40 dark:to-teal-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-emerald-500" aria-hidden />
          <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">Snake</h2>
        </div>
        <MascotFriend id="pixel" mood="happy" size="sm" />
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="rounded-2xl shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />

        {/* Ready overlay */}
        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Snake</p>
            <p className="mb-4 text-sm text-white/90">Swipe or use arrow keys</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
              Start Game
            </PhysicalButton>
          </div>
        )}

        {/* Game over overlay */}
        {s.phase === "complete" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/50"
          >
            <Trophy className="mb-2 h-10 w-10 text-amber-400" />
            <p className="text-2xl font-bold text-white">Game Over</p>
            <div className="my-2 text-4xl" aria-label={`${stars} stars`}>
              {"★".repeat(stars)}{"☆".repeat(3 - stars)}
            </div>
            <div className="mb-3 flex gap-6 text-white">
              <div className="text-center">
                <p className="text-sm opacity-80">Score</p>
                <p className="text-2xl font-bold">{s.score}</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-80">Best</p>
                <p className="text-2xl font-bold">{s.bestScore}</p>
              </div>
            </div>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
              <RotateCcw className="mr-2 h-4 w-4" /> Play Again
            </PhysicalButton>
          </motion.div>
        )}
      </div>

      {/* Mobile D-pad */}
      {s.phase === "playing" && (
        <div className="grid grid-cols-3 gap-1 md:hidden">
          <div />
          <button
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white active:bg-emerald-700"
            onTouchStart={() => dispatch({ type: "DIR", dir: "UP" })}
          >▲</button>
          <div />
          <button
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white active:bg-emerald-700"
            onTouchStart={() => dispatch({ type: "DIR", dir: "LEFT" })}
          >◄</button>
          <div className="h-12 w-12" />
          <button
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white active:bg-emerald-700"
            onTouchStart={() => dispatch({ type: "DIR", dir: "RIGHT" })}
          >►</button>
          <div />
          <button
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white active:bg-emerald-700"
            onTouchStart={() => dispatch({ type: "DIR", dir: "DOWN" })}
          >▼</button>
          <div />
        </div>
      )}
    </div>
  );
}

/* ─── helpers ─── */

function getEyeOffsets(dir: Dir): [{ dx: number; dy: number }, { dx: number; dy: number }] {
  switch (dir) {
    case "UP":    return [{ dx: -3, dy: -4 }, { dx: 3, dy: -4 }];
    case "DOWN":  return [{ dx: -3, dy: 4 }, { dx: 3, dy: 4 }];
    case "LEFT":  return [{ dx: -4, dy: -3 }, { dx: -4, dy: 3 }];
    case "RIGHT": return [{ dx: 4, dy: -3 }, { dx: 4, dy: 3 }];
  }
}
