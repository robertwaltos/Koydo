"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Shield } from "lucide-react";
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
const W = 400;
const H = 400;
const CITY_COUNT = 6;
const CITY_W = 30;
const CITY_H = 20;

type Phase = "ready" | "playing" | "won" | "lost";

interface Missile { x: number; y: number; tx: number; ty: number; speed: number; progress: number }
interface Explosion { x: number; y: number; r: number; maxR: number; growing: boolean }

interface State {
  phase: Phase;
  sessionId: string;
  missiles: Missile[];
  explosions: Explosion[];
  cities: boolean[];
  score: number;
  wave: number;
  missilesLeft: number;
  startTime: number;
  interactions: number;
}

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  missiles: [],
  explosions: [],
  cities: Array(CITY_COUNT).fill(true) as boolean[],
  score: 0,
  wave: 1,
  missilesLeft: 10,
  startTime: 0,
  interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "TICK" }
  | { type: "CLICK"; x: number; y: number }
  | { type: "SPAWN_MISSILE" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now() };
    case "CLICK": {
      if (s.phase !== "playing") return s;
      return {
        ...s,
        explosions: [...s.explosions, { x: a.x, y: a.y, r: 2, maxR: 30, growing: true }],
        interactions: s.interactions + 1,
      };
    }
    case "SPAWN_MISSILE": {
      if (s.phase !== "playing") return s;
      const aliveCities = s.cities.map((alive, i) => ({ alive, i })).filter((c) => c.alive);
      if (aliveCities.length === 0) return s;
      const target = aliveCities[Math.floor(Math.random() * aliveCities.length)]!;
      const citySpacing = W / (CITY_COUNT + 1);
      const tx = citySpacing * (target.i + 1);
      const ty = H - CITY_H;
      const sx = Math.random() * W;
      return {
        ...s,
        missiles: [...s.missiles, { x: sx, y: 0, tx, ty, speed: 0.5 + s.wave * 0.15, progress: 0 }],
        missilesLeft: s.missilesLeft - 1,
      };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      // move missiles
      const missiles = s.missiles.map((m) => ({ ...m, progress: Math.min(1, m.progress + m.speed / 400) })).filter((m) => m.progress < 1);
      // grow/shrink explosions
      let explosions = s.explosions.map((e) => {
        if (e.growing) {
          const r = e.r + 1.5;
          return r >= e.maxR ? { ...e, r, growing: false } : { ...e, r };
        }
        return { ...e, r: e.r - 1 };
      }).filter((e) => e.r > 0);
      // check missile-explosion collisions
      const surviving: Missile[] = [];
      let addScore = 0;
      for (const m of missiles) {
        const mx = m.x + (m.tx - m.x) * m.progress;
        const my = m.y + (m.ty - m.y) * m.progress;
        const hit = explosions.some((e) => Math.hypot(e.x - mx, e.y - my) < e.r);
        if (hit) { addScore += 25; } else { surviving.push(m); }
      }
      // check missiles hitting cities
      const cities = [...s.cities];
      const citySpacing = W / (CITY_COUNT + 1);
      for (const m of s.missiles) {
        if (m.progress >= 1) {
          for (let i = 0; i < CITY_COUNT; i++) {
            if (!cities[i]) continue;
            const cx = citySpacing * (i + 1);
            if (Math.abs(m.tx - cx) < CITY_W / 2 && Math.abs(m.ty - (H - CITY_H)) < CITY_H) {
              cities[i] = false;
            }
          }
        }
      }
      const aliveCities = cities.filter(Boolean).length;
      const waveComplete = s.missilesLeft <= 0 && surviving.length === 0;
      const lost = aliveCities === 0;

      if (waveComplete && !lost) {
        return {
          ...s, missiles: [], explosions, cities, score: s.score + addScore + aliveCities * 50,
          wave: s.wave + 1, missilesLeft: 10 + s.wave * 3,
          phase: s.wave >= 5 ? "won" : "playing",
        };
      }

      return { ...s, missiles: surviving, explosions, cities, score: s.score + addScore, phase: lost ? "lost" : "playing" };
    }
    default:
      return s;
  }
}

export default function GameMissileCommand({ width = 440, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.score >= 500) return 3;
    if (s.score >= 250) return 2;
    return s.score > 0 ? 1 : 0;
  }, [isOver, s.score]);

  // game loop
  useEffect(() => {
    if (s.phase !== "playing") return;
    const tid = setInterval(() => dispatch({ type: "TICK" }), 1000 / 60);
    const sid = setInterval(() => {
      if (s.missilesLeft > 0) dispatch({ type: "SPAWN_MISSILE" });
    }, 1200 - s.wave * 80);
    return () => { clearInterval(tid); clearInterval(sid); };
  }, [s.phase, s.wave, s.missilesLeft]);

  // complete
  useEffect(() => {
    if (!isOver) return;
    if (s.phase === "won") { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-missile-command", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score, maxScore: 800, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  // draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, W, H);

    // cities
    const citySpacing = W / (CITY_COUNT + 1);
    for (let i = 0; i < CITY_COUNT; i++) {
      const cx = citySpacing * (i + 1);
      if (s.cities[i]) {
        ctx.fillStyle = "#3b82f6";
        ctx.fillRect(cx - CITY_W / 2, H - CITY_H, CITY_W, CITY_H);
        ctx.fillStyle = "#60a5fa";
        ctx.fillRect(cx - 4, H - CITY_H - 8, 8, 8);
      } else {
        ctx.fillStyle = "#374151";
        ctx.fillRect(cx - CITY_W / 2, H - 6, CITY_W, 6);
      }
    }

    // ground
    ctx.fillStyle = "#065f46";
    ctx.fillRect(0, H - 4, W, 4);

    // missiles (incoming)
    for (const m of s.missiles) {
      const mx = m.x + (m.tx - m.x) * m.progress;
      const my = m.y + (m.ty - m.y) * m.progress;
      ctx.strokeStyle = "#ef4444";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(m.x, 0);
      ctx.lineTo(mx, my);
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(mx, my, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // explosions
    for (const e of s.explosions) {
      const gradient = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r);
      gradient.addColorStop(0, "rgba(251,191,36,0.9)");
      gradient.addColorStop(0.5, "rgba(239,68,68,0.6)");
      gradient.addColorStop(1, "rgba(239,68,68,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // HUD
    ctx.fillStyle = "#fff";
    ctx.font = "13px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Wave ${s.wave}/5`, 8, 18);
    ctx.textAlign = "right";
    ctx.fillText(`Score: ${s.score}`, W - 8, 18);
  }, [s]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (s.phase === "ready") { dispatch({ type: "START" }); return; }
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    const y = ((e.clientY - rect.top) / rect.height) * H;
    dispatch({ type: "CLICK", x, y });
    hapticSelection();
  }, [s.phase]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={isOver ? (s.phase === "won" ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
          <Shield className="h-4 w-4" /> Wave {s.wave}
        </div>
      </div>
      <div className="relative">
        <canvas ref={canvasRef} width={W} height={H} className="cursor-crosshair rounded-2xl shadow-lg" onClick={handleClick} />
        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Missile Command</p>
            <p className="mb-4 text-sm text-white/80">Click to create explosions &amp; destroy incoming missiles!</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
          </div>
        )}
        {isOver && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/50">
            <Trophy className="mb-2 h-10 w-10 text-amber-400" />
            <p className="text-2xl font-bold text-white">{s.phase === "won" ? "Cities Saved!" : "Cities Lost!"}</p>
            <div className="my-2 text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
            <p className="mb-3 text-xl font-bold text-white">Score: {s.score}</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
