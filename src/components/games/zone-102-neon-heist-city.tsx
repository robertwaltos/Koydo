"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, DollarSign, Shield, RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const CW = 480;
const CH = 480;
const SESSION_ID = createLegacySessionId();
const BLOCK = 60;
const PLAYER_SIZE = 14;
const COP_SIZE = 12;
const LOOT_SIZE = 8;
const WANTED_MAX = 5;

type Phase = "ready" | "playing" | "paused" | "busted" | "complete";
type Vec2 = { x: number; y: number };
type Loot = Vec2 & { collected: boolean };
type Cop = Vec2 & { dx: number; dy: number; speed: number };

function isRoad(x: number, y: number): boolean {
  const gx = x % BLOCK;
  const gy = y % BLOCK;
  return gx < 16 || gy < 16;
}

function randomRoadPos(): Vec2 {
  const bx = Math.floor(Math.random() * (CW / BLOCK));
  const by = Math.floor(Math.random() * (CH / BLOCK));
  return { x: bx * BLOCK + 8, y: by * BLOCK + 8 };
}

export default function Zone102NeonHeistCity() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [wanted, setWanted] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  const playerRef = useRef<Vec2>({ x: CW / 2, y: CH / 2 });
  const velRef = useRef<Vec2>({ x: 0, y: 0 });
  const keysRef = useRef(new Set<string>());
  const lootRef = useRef<Loot[]>([]);
  const copsRef = useRef<Cop[]>([]);
  const scoreRef = useRef(0);
  const wantedRef = useRef(0);
  const phaseRef = useRef<Phase>("ready");
  const animRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const spawnLoot = useCallback(() => {
    lootRef.current = Array.from({ length: 12 }, () => ({
      ...randomRoadPos(),
      collected: false,
    }));
  }, []);

  const spawnCops = useCallback((count: number) => {
    copsRef.current = Array.from({ length: count }, () => {
      const pos = randomRoadPos();
      const angle = Math.random() * Math.PI * 2;
      return {
        ...pos,
        dx: Math.cos(angle),
        dy: Math.sin(angle),
        speed: 1.2 + Math.random() * 0.8,
      };
    });
  }, []);

  const startGame = useCallback(() => {
    playerRef.current = { x: CW / 2, y: CH / 2 };
    velRef.current = { x: 0, y: 0 };
    scoreRef.current = 0;
    wantedRef.current = 0;
    setScore(0);
    setWanted(0);
    setTimeLeft(60);
    spawnLoot();
    spawnCops(3);
    phaseRef.current = "playing";
    setPhase("playing");
    mascot.setMood("happy");
  }, [mascot, spawnLoot, spawnCops]);

  // Keyboard handlers
  useEffect(() => {
    const down = (e: KeyboardEvent) => keysRef.current.add(e.key.toLowerCase());
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key.toLowerCase());
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  // Countdown timer
  useEffect(() => {
    if (phase !== "playing") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          phaseRef.current = "complete";
          setPhase("complete");
          mascot.setMood("cheering");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-102",
          difficulty: "medium",
            score: scoreRef.current,
            maxScore: 12000,
            interactions: 1,
            elapsedMs: 60000,
          source: "component",
          occurredAt: new Date().toISOString(),
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase, mascot]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      if (phaseRef.current !== "playing") {
        animRef.current = requestAnimationFrame(loop);
        return;
      }

      const keys = keysRef.current;
      const accel = 0.5;
      const friction = 0.92;

      // Player movement
      if (keys.has("w") || keys.has("arrowup")) velRef.current.y -= accel;
      if (keys.has("s") || keys.has("arrowdown")) velRef.current.y += accel;
      if (keys.has("a") || keys.has("arrowleft")) velRef.current.x -= accel;
      if (keys.has("d") || keys.has("arrowright")) velRef.current.x += accel;

      velRef.current.x *= friction;
      velRef.current.y *= friction;

      const nextX = playerRef.current.x + velRef.current.x;
      const nextY = playerRef.current.y + velRef.current.y;

      // Constrain to roads (soft — slow down off-road)
      if (!isRoad(nextX, nextY)) {
        velRef.current.x *= 0.5;
        velRef.current.y *= 0.5;
      }

      playerRef.current.x = Math.max(PLAYER_SIZE, Math.min(CW - PLAYER_SIZE, nextX));
      playerRef.current.y = Math.max(PLAYER_SIZE, Math.min(CH - PLAYER_SIZE, nextY));

      // Loot pickup
      for (const loot of lootRef.current) {
        if (loot.collected) continue;
        const dx = playerRef.current.x - loot.x;
        const dy = playerRef.current.y - loot.y;
        if (Math.sqrt(dx * dx + dy * dy) < PLAYER_SIZE + LOOT_SIZE) {
          loot.collected = true;
          scoreRef.current += 1000;
          setScore(scoreRef.current);
          wantedRef.current = Math.min(WANTED_MAX, wantedRef.current + 1);
          setWanted(wantedRef.current);
          hapticSuccess();
          // Spawn more cops as wanted increases
          if (wantedRef.current > copsRef.current.length) {
            const pos = randomRoadPos();
            copsRef.current.push({
              ...pos,
              dx: Math.random() > 0.5 ? 1 : -1,
              dy: Math.random() > 0.5 ? 1 : -1,
              speed: 1.5 + Math.random(),
            });
          }
        }
      }

      // Respawn loot when all collected
      if (lootRef.current.every((l) => l.collected)) {
        lootRef.current = Array.from({ length: 12 }, () => ({
          ...randomRoadPos(),
          collected: false,
        }));
      }

      // Cop AI — chase player
      for (const cop of copsRef.current) {
        const dx = playerRef.current.x - cop.x;
        const dy = playerRef.current.y - cop.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          cop.x += (dx / dist) * cop.speed;
          cop.y += (dy / dist) * cop.speed;
        }
        // Busted check
        if (dist < PLAYER_SIZE + COP_SIZE) {
          phaseRef.current = "busted";
          setPhase("busted");
          hapticError();
          mascot.setMood("sad");
          break;
        }
      }

      // ─── Draw ─────────────────────────────────────────────────────
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, CW, CH);

      // Draw city grid (roads)
      for (let bx = 0; bx < CW / BLOCK; bx++) {
        for (let by = 0; by < CH / BLOCK; by++) {
          // Building
          ctx.fillStyle = `hsl(${(bx * 37 + by * 53) % 360}, 40%, 20%)`;
          ctx.fillRect(bx * BLOCK + 16, by * BLOCK + 16, BLOCK - 16, BLOCK - 16);
          // Road H
          ctx.fillStyle = "#334155";
          ctx.fillRect(bx * BLOCK, by * BLOCK, BLOCK, 14);
          // Road V
          ctx.fillRect(bx * BLOCK, by * BLOCK, 14, BLOCK);
          // Road markings
          ctx.strokeStyle = "#facc15";
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(bx * BLOCK, by * BLOCK + 7);
          ctx.lineTo(bx * BLOCK + BLOCK, by * BLOCK + 7);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(bx * BLOCK + 7, by * BLOCK);
          ctx.lineTo(bx * BLOCK + 7, by * BLOCK + BLOCK);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Draw loot
      for (const loot of lootRef.current) {
        if (loot.collected) continue;
        ctx.fillStyle = "#22c55e";
        ctx.shadowColor = "#22c55e";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(loot.x, loot.y, LOOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#fff";
        ctx.font = "bold 8px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("$", loot.x, loot.y + 3);
      }

      // Draw cops
      for (const cop of copsRef.current) {
        ctx.fillStyle = "#ef4444";
        ctx.shadowColor = "#ef4444";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(cop.x, cop.y, COP_SIZE, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#fff";
        ctx.font = "bold 8px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("🚔", cop.x, cop.y + 3);
      }

      // Draw player
      const p = playerRef.current;
      ctx.fillStyle = "#3b82f6";
      ctx.shadowColor = "#3b82f6";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, PLAYER_SIZE, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#fff";
      ctx.font = "bold 10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("🚗", p.x, p.y + 4);

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase, mascot]);

  const resetGame = () => {
    phaseRef.current = "ready";
    setPhase("ready");
    setScore(0);
    setWanted(0);
    setTimeLeft(60);
    mascot.setMood("idle");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : phase === "busted" ? "sad" : "idle"} />

      <motion.h1
        className="mb-3 text-3xl font-black tracking-tight text-cyan-400 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Neon Heist City
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Race through neon streets, grab loot, and evade the cops. WASD or Arrow keys to drive. Higher wanted = more cops!
            </p>
            <PhysicalButton onClick={startGame}>
              <Car className="mr-2 h-5 w-5" />
              Start Heist
            </PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "busted" || phase === "complete") && (
          <motion.div key="game" className="flex flex-col items-center gap-3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            {/* HUD */}
            <div className="flex items-center gap-4 rounded-xl bg-black/50 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
              <span className="text-green-400">💰 ${score.toLocaleString()}</span>
              <span className="text-red-400">
                ⭐ {"★".repeat(wanted)}{"☆".repeat(WANTED_MAX - wanted)}
              </span>
              <span className="text-yellow-400">⏱ {timeLeft}s</span>
            </div>

            <canvas
              ref={canvasRef}
              width={CW}
              height={CH}
              className="rounded-xl border-2 border-cyan-500/30 shadow-2xl"
            />

            {/* Touch controls */}
            <div className="grid grid-cols-3 gap-1 sm:hidden">
              <div />
              <button onTouchStart={() => keysRef.current.add("w")} onTouchEnd={() => keysRef.current.delete("w")} className="rounded bg-white/20 p-3 text-white font-bold">▲</button>
              <div />
              <button onTouchStart={() => keysRef.current.add("a")} onTouchEnd={() => keysRef.current.delete("a")} className="rounded bg-white/20 p-3 text-white font-bold">◀</button>
              <button onTouchStart={() => keysRef.current.add("s")} onTouchEnd={() => keysRef.current.delete("s")} className="rounded bg-white/20 p-3 text-white font-bold">▼</button>
              <button onTouchStart={() => keysRef.current.add("d")} onTouchEnd={() => keysRef.current.delete("d")} className="rounded bg-white/20 p-3 text-white font-bold">▶</button>
            </div>

            {phase === "busted" && (
              <motion.div className="mt-2 rounded-xl bg-red-900/80 p-6 text-center backdrop-blur-sm" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                <p className="text-4xl">🚨</p>
                <h2 className="mt-2 text-2xl font-black text-red-300">BUSTED!</h2>
                <p className="text-white/70">Final Score: ${score.toLocaleString()}</p>
                <div className="mt-3 flex gap-2">
                  <PhysicalButton onClick={startGame}>Retry</PhysicalButton>
                  <PhysicalButton onClick={resetGame}><RotateCcw className="mr-1 h-4 w-4" /> Menu</PhysicalButton>
                </div>
              </motion.div>
            )}

            {phase === "complete" && (
              <motion.div className="mt-2 rounded-xl bg-emerald-900/80 p-6 text-center backdrop-blur-sm" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                <p className="text-4xl">🏆</p>
                <h2 className="mt-2 text-2xl font-black text-emerald-300">Heist Complete!</h2>
                <p className="text-white/70">Total Loot: ${score.toLocaleString()}</p>
                <PhysicalButton onClick={resetGame}><RotateCcw className="mr-1 h-4 w-4" /> Play Again</PhysicalButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
