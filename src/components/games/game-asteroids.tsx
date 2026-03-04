"use client";

import { useEffect, useMemo, useReducer, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Rocket } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */
const W = 400;
const H = 400;
const SHIP_SIZE = 12;
const TURN_SPEED = 0.1;
const THRUST = 0.15;
const FRICTION = 0.99;
const BULLET_SPEED = 5;
const BULLET_LIFE = 50;
const MAX_ASTEROIDS = 12;

interface Vec { x: number; y: number }
interface Ship { x: number; y: number; angle: number; vx: number; vy: number }
interface Bullet { x: number; y: number; vx: number; vy: number; life: number }
interface Asteroid { x: number; y: number; vx: number; vy: number; radius: number }

type Phase = "ready" | "playing" | "done";

interface State {
  phase: Phase;
  sessionId: string;
  ship: Ship;
  bullets: Bullet[];
  asteroids: Asteroid[];
  score: number;
  lives: number;
  keys: Set<string>;
  startTime: number;
  interactions: number;
}

function spawnAsteroid(avoidX?: number, avoidY?: number): Asteroid {
  let x: number, y: number;
  do {
    x = Math.random() * W;
    y = Math.random() * H;
  } while (avoidX !== undefined && Math.hypot(x - avoidX, y - avoidY!) < 80);
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.5 + Math.random() * 1.5;
  return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, radius: 25 + Math.random() * 15 };
}

const initShip = (): Ship => ({ x: W / 2, y: H / 2, angle: -Math.PI / 2, vx: 0, vy: 0 });

const init = (): State => ({
  phase: "ready", sessionId: createLegacySessionId(), ship: initShip(),
  bullets: [], asteroids: [], score: 0, lives: 3, keys: new Set(),
  startTime: 0, interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "KEY_DOWN"; key: string }
  | { type: "KEY_UP"; key: string }
  | { type: "TICK" };

function wrap(v: number, max: number): number {
  return ((v % max) + max) % max;
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const asteroids: Asteroid[] = [];
      for (let i = 0; i < 5; i++) asteroids.push(spawnAsteroid(W / 2, H / 2));
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), asteroids, startTime: Date.now() };
    }
    case "KEY_DOWN": {
      const keys = new Set(s.keys);
      keys.add(a.key);
      return { ...s, keys };
    }
    case "KEY_UP": {
      const keys = new Set(s.keys);
      keys.delete(a.key);
      return { ...s, keys };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      let ship = { ...s.ship };
      let bullets = [...s.bullets];
      let asteroids = [...s.asteroids];
      let score = s.score;
      let lives = s.lives;
      let interactions = s.interactions;

      /* steer */
      if (s.keys.has("ArrowLeft") || s.keys.has("a")) ship.angle -= TURN_SPEED;
      if (s.keys.has("ArrowRight") || s.keys.has("d")) ship.angle += TURN_SPEED;
      if (s.keys.has("ArrowUp") || s.keys.has("w")) {
        ship.vx += Math.cos(ship.angle) * THRUST;
        ship.vy += Math.sin(ship.angle) * THRUST;
      }
      ship.vx *= FRICTION;
      ship.vy *= FRICTION;
      ship.x = wrap(ship.x + ship.vx, W);
      ship.y = wrap(ship.y + ship.vy, H);

      /* shoot */
      if (s.keys.has(" ") && bullets.length < 5) {
        bullets.push({
          x: ship.x + Math.cos(ship.angle) * SHIP_SIZE,
          y: ship.y + Math.sin(ship.angle) * SHIP_SIZE,
          vx: Math.cos(ship.angle) * BULLET_SPEED,
          vy: Math.sin(ship.angle) * BULLET_SPEED,
          life: BULLET_LIFE,
        });
        interactions++;
      }

      /* update bullets */
      bullets = bullets
        .map((b) => ({ ...b, x: wrap(b.x + b.vx, W), y: wrap(b.y + b.vy, H), life: b.life - 1 }))
        .filter((b) => b.life > 0);

      /* bullet-asteroid collision */
      const newAsteroids: Asteroid[] = [];
      const removedBullets = new Set<number>();
      asteroids = asteroids.filter((ast) => {
        for (let bi = 0; bi < bullets.length; bi++) {
          if (removedBullets.has(bi)) continue;
          const b = bullets[bi]!;
          if (Math.hypot(b.x - ast.x, b.y - ast.y) < ast.radius) {
            removedBullets.add(bi);
            score += 10;
            if (ast.radius > 15) {
              const angle1 = Math.random() * Math.PI * 2;
              const speed = 1 + Math.random();
              newAsteroids.push(
                { x: ast.x, y: ast.y, vx: Math.cos(angle1) * speed, vy: Math.sin(angle1) * speed, radius: ast.radius * 0.6 },
                { x: ast.x, y: ast.y, vx: -Math.cos(angle1) * speed, vy: -Math.sin(angle1) * speed, radius: ast.radius * 0.6 },
              );
            }
            return false;
          }
        }
        return true;
      });
      bullets = bullets.filter((_, i) => !removedBullets.has(i));
      asteroids.push(...newAsteroids);

      /* ship-asteroid collision */
      for (const ast of asteroids) {
        if (Math.hypot(ship.x - ast.x, ship.y - ast.y) < ast.radius + SHIP_SIZE * 0.5) {
          lives--;
          ship = initShip();
          break;
        }
      }

      /* update asteroids */
      asteroids = asteroids.map((a) => ({ ...a, x: wrap(a.x + a.vx, W), y: wrap(a.y + a.vy, H) }));

      /* spawn more if needed */
      while (asteroids.length < 3) {
        asteroids.push(spawnAsteroid(ship.x, ship.y));
      }

      const done = lives <= 0;
      return { ...s, ship, bullets, asteroids, score, lives, interactions, phase: done ? "done" : "playing" };
    }
    default:
      return s;
  }
}

export default function GameAsteroids({ width = 420, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setMood } = useMascot();

  const stars = useMemo(() => {
    if (s.phase !== "done") return 0;
    if (s.score >= 200) return 3;
    if (s.score >= 100) return 2;
    if (s.score >= 30) return 1;
    return 0;
  }, [s.phase, s.score]);

  /* key handling */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const down = (e: KeyboardEvent) => { e.preventDefault(); dispatch({ type: "KEY_DOWN", key: e.key }); };
    const up = (e: KeyboardEvent) => dispatch({ type: "KEY_UP", key: e.key });
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, [s.phase]);

  /* game loop */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 16);
    return () => clearInterval(id);
  }, [s.phase]);

  /* draw */
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, W, H);

    /* ship */
    const { x, y, angle } = s.ship;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(SHIP_SIZE, 0);
    ctx.lineTo(-SHIP_SIZE * 0.7, -SHIP_SIZE * 0.5);
    ctx.lineTo(-SHIP_SIZE * 0.5, 0);
    ctx.lineTo(-SHIP_SIZE * 0.7, SHIP_SIZE * 0.5);
    ctx.closePath();
    ctx.strokeStyle = "#22d3ee";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    /* bullets */
    ctx.fillStyle = "#facc15";
    s.bullets.forEach((b) => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    /* asteroids */
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 1.5;
    s.asteroids.forEach((a) => {
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
      ctx.stroke();
    });

    /* HUD */
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "14px monospace";
    ctx.fillText(`Score: ${s.score}`, 10, 20);
    ctx.fillText(`Lives: ${"♥".repeat(s.lives)}`, 10, 38);
  }, [s.ship, s.bullets, s.asteroids, s.score, s.lives]);

  useEffect(() => {
    if (s.phase !== "done") return;
    if (s.score >= 30) { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-asteroids", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score, maxScore: 300,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={s.phase === "done" ? (s.score >= 30 ? "happy" : "sad") : "idle"} size="sm" />
        <div className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800">
          <Rocket className="mr-1 inline h-4 w-4" />Score: {s.score}
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Rocket className="h-12 w-12 text-cyan-400" />
          <p className="text-3xl font-bold text-slate-800">Asteroids</p>
          <p className="text-sm text-slate-600">Arrow keys or WASD to move, Space to shoot!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Launch</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <canvas ref={canvasRef} width={W} height={H} className="rounded-xl border-2 border-slate-700 shadow-lg" />
      )}

      {s.phase === "done" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">Score: {s.score}</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
