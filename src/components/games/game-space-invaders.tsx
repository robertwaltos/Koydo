"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Zap } from "lucide-react";
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
const W = 360;
const H = 480;
const ALIEN_COLS = 8;
const ALIEN_ROWS = 4;
const ALIEN_W = 28;
const ALIEN_H = 20;
const ALIEN_PAD = 10;
const PLAYER_W = 36;
const PLAYER_H = 14;
const BULLET_W = 3;
const BULLET_H = 10;
const BULLET_SPEED = 6;
const ALIEN_DROP = 12;

type Phase = "ready" | "playing" | "won" | "lost";

interface Alien { x: number; y: number; alive: boolean; row: number }
interface Bullet { x: number; y: number }

interface State {
  phase: Phase;
  sessionId: string;
  playerX: number;
  aliens: Alien[];
  bullets: Bullet[];
  alienBullets: Bullet[];
  alienDx: number;
  score: number;
  lives: number;
  startTime: number;
  interactions: number;
}

function buildAliens(): Alien[] {
  const aliens: Alien[] = [];
  const startX = (W - (ALIEN_COLS * (ALIEN_W + ALIEN_PAD) - ALIEN_PAD)) / 2;
  for (let r = 0; r < ALIEN_ROWS; r++)
    for (let c = 0; c < ALIEN_COLS; c++)
      aliens.push({ x: startX + c * (ALIEN_W + ALIEN_PAD), y: 40 + r * (ALIEN_H + ALIEN_PAD), alive: true, row: r });
  return aliens;
}

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  playerX: W / 2 - PLAYER_W / 2,
  aliens: buildAliens(),
  bullets: [],
  alienBullets: [],
  alienDx: 1.2,
  score: 0,
  lives: 3,
  startTime: 0,
  interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "TICK" }
  | { type: "MOVE"; dx: number }
  | { type: "SHOOT" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now() };
    case "MOVE": {
      if (s.phase !== "playing") return s;
      return { ...s, playerX: Math.max(0, Math.min(W - PLAYER_W, s.playerX + a.dx)) };
    }
    case "SHOOT": {
      if (s.phase !== "playing" || s.bullets.length >= 2) return s;
      return { ...s, bullets: [...s.bullets, { x: s.playerX + PLAYER_W / 2, y: H - 30 }], interactions: s.interactions + 1 };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      // move bullets
      let bullets = s.bullets.map((b) => ({ ...b, y: b.y - BULLET_SPEED })).filter((b) => b.y > 0);
      let alienBullets = s.alienBullets.map((b) => ({ ...b, y: b.y + 3 })).filter((b) => b.y < H);

      // move aliens
      const aliens = s.aliens.map((a) => ({ ...a, x: a.x + s.alienDx }));
      let dx = s.alienDx;
      let drop = false;
      for (const al of aliens) {
        if (al.alive && (al.x <= 0 || al.x + ALIEN_W >= W)) { dx = -dx; drop = true; break; }
      }
      if (drop) aliens.forEach((a) => { a.x += dx; a.y += ALIEN_DROP; });

      // collisions: bullet → alien
      let addScore = 0;
      for (const b of bullets) {
        for (const al of aliens) {
          if (!al.alive) continue;
          if (b.x >= al.x && b.x <= al.x + ALIEN_W && b.y >= al.y && b.y <= al.y + ALIEN_H) {
            al.alive = false;
            b.y = -100;
            addScore += (ALIEN_ROWS - al.row) * 10;
          }
        }
      }
      bullets = bullets.filter((b) => b.y > 0);

      // alien shoots (random)
      const alive = aliens.filter((a) => a.alive);
      if (alive.length > 0 && Math.random() < 0.02) {
        const shooter = alive[Math.floor(Math.random() * alive.length)]!;
        alienBullets = [...alienBullets, { x: shooter.x + ALIEN_W / 2, y: shooter.y + ALIEN_H }];
      }

      // alien bullet → player
      let lives = s.lives;
      for (const b of alienBullets) {
        if (b.y >= H - 28 && b.y <= H - 10 && b.x >= s.playerX && b.x <= s.playerX + PLAYER_W) {
          b.y = H + 100;
          lives--;
        }
      }
      alienBullets = alienBullets.filter((b) => b.y < H);

      // aliens reach bottom
      const reachedBottom = alive.some((a) => a.y + ALIEN_H >= H - 40);

      const allDead = alive.length === 0 && aliens.length > 0;
      const lost = lives <= 0 || reachedBottom;

      return {
        ...s,
        aliens,
        bullets,
        alienBullets,
        alienDx: dx,
        score: s.score + addScore,
        lives,
        phase: allDead ? "won" : lost ? "lost" : "playing",
      };
    }
    default:
      return s;
  }
}

export default function GameSpaceInvaders({ width = 400, height = 560 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keysRef = useRef<Set<string>>(new Set());
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.score >= 200) return 3;
    if (s.score >= 100) return 2;
    return s.score > 0 ? 1 : 0;
  }, [isOver, s.score]);

  // keyboard
  useEffect(() => {
    const down = (e: KeyboardEvent) => { keysRef.current.add(e.key); if (e.key === " ") { e.preventDefault(); dispatch({ type: "SHOOT" }); hapticSelection(); } };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  // game loop
  useEffect(() => {
    if (s.phase !== "playing") return;
    const id = setInterval(() => {
      const keys = keysRef.current;
      if (keys.has("ArrowLeft") || keys.has("a")) dispatch({ type: "MOVE", dx: -5 });
      if (keys.has("ArrowRight") || keys.has("d")) dispatch({ type: "MOVE", dx: 5 });
      dispatch({ type: "TICK" });
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [s.phase]);

  // complete
  useEffect(() => {
    if (!isOver) return;
    if (s.phase === "won") { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-space-invaders", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score, maxScore: ALIEN_COLS * ALIEN_ROWS * 25, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  // draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0a0a1a";
    ctx.fillRect(0, 0, W, H);

    // aliens
    const colors = ["#ef4444", "#f97316", "#22c55e", "#3b82f6"];
    for (const al of s.aliens) {
      if (!al.alive) continue;
      ctx.fillStyle = colors[al.row % colors.length]!;
      ctx.fillRect(al.x, al.y, ALIEN_W, ALIEN_H);
      ctx.fillStyle = "#fff";
      ctx.fillRect(al.x + 6, al.y + 6, 4, 4);
      ctx.fillRect(al.x + ALIEN_W - 10, al.y + 6, 4, 4);
    }

    // player
    ctx.fillStyle = "#3b82f6";
    ctx.fillRect(s.playerX, H - 28, PLAYER_W, PLAYER_H);
    ctx.fillStyle = "#60a5fa";
    ctx.fillRect(s.playerX + PLAYER_W / 2 - 3, H - 34, 6, 8);

    // bullets
    ctx.fillStyle = "#facc15";
    for (const b of s.bullets) ctx.fillRect(b.x - 1, b.y, BULLET_W, BULLET_H);
    ctx.fillStyle = "#f87171";
    for (const b of s.alienBullets) ctx.fillRect(b.x - 1, b.y, BULLET_W, BULLET_H);

    // lives
    ctx.fillStyle = "#fff";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Lives: ${"♥".repeat(s.lives)}`, 8, H - 4);
    ctx.textAlign = "right";
    ctx.fillText(`Score: ${s.score}`, W - 8, H - 4);
  }, [s]);

  const handlePointer = useCallback((clientX: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * W - PLAYER_W / 2;
    dispatch({ type: "MOVE", dx: x - s.playerX });
  }, [s.playerX]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={isOver ? (s.phase === "won" ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-800">
          <Zap className="h-4 w-4" /> {s.score}
        </div>
      </div>
      <div className="relative">
        <canvas
          ref={canvasRef} width={W} height={H}
          className="cursor-crosshair rounded-2xl shadow-lg"
          onClick={() => { if (s.phase === "playing") { dispatch({ type: "SHOOT" }); hapticSelection(); } else if (s.phase === "ready") dispatch({ type: "START" }); }}
          onMouseMove={(e) => s.phase === "playing" && handlePointer(e.clientX)}
          onTouchMove={(e) => { e.preventDefault(); s.phase === "playing" && handlePointer(e.touches[0]!.clientX); }}
          onTouchStart={() => { if (s.phase === "playing") { dispatch({ type: "SHOOT" }); hapticSelection(); } }}
        />
        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Space Invaders</p>
            <p className="mb-4 text-sm text-white/80">Shoot all aliens before they reach Earth!</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
          </div>
        )}
        {isOver && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/50">
            <Trophy className="mb-2 h-10 w-10 text-amber-400" />
            <p className="text-2xl font-bold text-white">{s.phase === "won" ? "Victory!" : "Invaded!"}</p>
            <div className="my-2 text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
            <p className="mb-3 text-xl font-bold text-white">Score: {s.score}</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
