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

const SESSION_ID = createLegacySessionId();
const COLS = 20;
const ROWS = 20;
const CELL = 18;
const W = COLS * CELL;
const H = ROWS * CELL;
const INIT_SPEED = 150;
type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Phase = "ready" | "playing" | "complete";

interface Pt { x: number; y: number; }

interface State {
  snake: Pt[];
  dir: Dir;
  nextDir: Dir;
  food: Pt;
  score: number;
  startTime: number;
  lastTick: number;
  speed: number;
}

function randFood(snake: Pt[]): Pt {
  let p: Pt;
  do { p = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) }; }
  while (snake.some((s) => s.x === p.x && s.y === p.y));
  return p;
}

function initState(): State {
  const snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
  return {
    snake,
    dir: "RIGHT",
    nextDir: "RIGHT",
    food: randFood(snake),
    score: 0,
    startTime: Date.now(),
    lastTick: 0,
    speed: INIT_SPEED,
  };
}

export default function Zone093SparkSnakeTrail() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef<State>(initState());
  const phaseRef = useRef<Phase>("ready");
  const [phase, setPhase] = useState<Phase>("ready");
  const [displayScore, setDisplayScore] = useState(0);

  const endGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    phaseRef.current = "complete";
    setPhase("complete");
    hapticError();
    const s = stateRef.current;
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-093",
      score: s.score,
      maxScore: 500,
      elapsedMs: Date.now() - s.startTime,
      interactions: s.score,
      difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
    mascot.speak(s.score >= 100 ? `${s.score} pts! Legendary snake!` : "Great run! Try to eat more!", "encourage");
  }, [mascot]);

  const loop = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    if (timestamp - s.lastTick >= s.speed) {
      s.lastTick = timestamp;
      s.dir = s.nextDir;

      const head = s.snake[0];
      const next: Pt = {
        x: (head.x + (s.dir === "RIGHT" ? 1 : s.dir === "LEFT" ? -1 : 0) + COLS) % COLS,
        y: (head.y + (s.dir === "DOWN" ? 1 : s.dir === "UP" ? -1 : 0) + ROWS) % ROWS,
      };

      // Self collision
      if (s.snake.some((p) => p.x === next.x && p.y === next.y)) {
        endGame(); return;
      }

      const ate = next.x === s.food.x && next.y === s.food.y;
      const newSnake = [next, ...s.snake];
      if (!ate) newSnake.pop();
      else {
        hapticSuccess();
        s.score += 10;
        setDisplayScore(s.score);
        s.food = randFood(newSnake);
        if (s.score % 50 === 0) { s.speed = Math.max(60, s.speed - 10); mascot.speak("Speeding up!", "happy"); }
      }
      s.snake = newSnake;
    }

    // Draw
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, W, H);

    // Grid dots
    ctx.fillStyle = "#1e1e3a";
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      ctx.fillRect(c * CELL + CELL / 2 - 1, r * CELL + CELL / 2 - 1, 2, 2);
    }

    // Food
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(s.food.x * CELL + CELL / 2, s.food.y * CELL + CELL / 2, CELL / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fca5a5";
    ctx.beginPath();
    ctx.arc(s.food.x * CELL + CELL / 2 - 2, s.food.y * CELL + CELL / 2 - 2, 3, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    s.snake.forEach((p, i) => {
      const t = 1 - i / s.snake.length;
      ctx.fillStyle = `hsl(${120 + t * 40}, 80%, ${40 + t * 20}%)`;
      const pad = i === 0 ? 1 : 2;
      ctx.beginPath();
      ctx.roundRect(p.x * CELL + pad, p.y * CELL + pad, CELL - pad * 2, CELL - pad * 2, 4);
      ctx.fill();
    });

    // Eyes on head
    const h = s.snake[0];
    ctx.fillStyle = "white";
    const ex = s.dir === "LEFT" ? -3 : s.dir === "RIGHT" ? 3 : 0;
    const ey = s.dir === "UP" ? -3 : s.dir === "DOWN" ? 3 : 0;
    ctx.beginPath();
    ctx.arc(h.x * CELL + CELL / 2 + ex - 2, h.y * CELL + CELL / 2 + ey - 2, 2.5, 0, Math.PI * 2);
    ctx.arc(h.x * CELL + CELL / 2 + ex + 2, h.y * CELL + CELL / 2 + ey + 2, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // HUD
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.font = "bold 14px monospace";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${s.score}`, 8, 18);

    rafRef.current = requestAnimationFrame(loop);
  }, [endGame, mascot]);

  const startGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    stateRef.current = initState();
    phaseRef.current = "playing";
    setPhase("playing");
    setDisplayScore(0);
    mascot.speak("Use arrows to guide your snake! Eat to grow!", "happy");
    rafRef.current = requestAnimationFrame(loop);
  }, [loop, mascot]);

  const setDir = useCallback((dir: Dir) => {
    const s = stateRef.current;
    const opposite: Record<Dir, Dir> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    if (s.dir !== opposite[dir]) { s.nextDir = dir; hapticSelection(); }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phaseRef.current !== "playing") return;
      if (e.key === "ArrowUp" || e.key === "w") { e.preventDefault(); setDir("UP"); }
      if (e.key === "ArrowDown" || e.key === "s") { e.preventDefault(); setDir("DOWN"); }
      if (e.key === "ArrowLeft" || e.key === "a") { e.preventDefault(); setDir("LEFT"); }
      if (e.key === "ArrowRight" || e.key === "d") { e.preventDefault(); setDir("RIGHT"); }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); cancelAnimationFrame(rafRef.current); };
  }, [setDir]);

  return (
    <div className="flex flex-col items-center gap-3 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="spark" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Spark Snake Trail</h2>
          <p className="text-xs text-stone-500">Eat the dots · Don't crash!</p>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700 shadow-md">
        <canvas ref={canvasRef} width={W} height={H} className="block" />
        <AnimatePresence>
          {phase === "ready" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 gap-4">
              <p className="text-4xl">🐍</p>
              <p className="text-white font-black text-xl">Spark Snake Trail</p>
              <p className="text-white/70 text-sm text-center px-6">Arrow keys or WASD. Eat red dots. Don't bite yourself!</p>
              <PhysicalButton onClick={startGame} variant="primary">Start Slithering!</PhysicalButton>
            </motion.div>
          )}
          {phase === "complete" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 gap-4">
              <p className="text-5xl">💥</p>
              <p className="text-white font-black text-xl">Crash!</p>
              <p className="text-white text-lg">{displayScore} pts</p>
              <PhysicalButton onClick={startGame} variant="primary">
                <RotateCcw className="mr-1.5 inline h-4 w-4" /> Try Again
              </PhysicalButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile D-pad */}
      {phase === "playing" && (
        <div className="flex flex-col items-center gap-1">
          <button onClick={() => setDir("UP")} className="w-12 h-10 rounded-xl bg-stone-700 text-white text-xl hover:bg-stone-600">↑</button>
          <div className="flex gap-1">
            <button onClick={() => setDir("LEFT")} className="w-12 h-10 rounded-xl bg-stone-700 text-white text-xl hover:bg-stone-600">←</button>
            <button onClick={() => setDir("DOWN")} className="w-12 h-10 rounded-xl bg-stone-700 text-white text-xl hover:bg-stone-600">↓</button>
            <button onClick={() => setDir("RIGHT")} className="w-12 h-10 rounded-xl bg-stone-700 text-white text-xl hover:bg-stone-600">→</button>
          </div>
        </div>
      )}
    </div>
  );
}
