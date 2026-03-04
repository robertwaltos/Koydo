"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Crosshair } from "lucide-react";
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
const H = 350;
const DUCK_SIZE = 32;
const ROUND_TIME = 12000;
const DUCKS_PER_ROUND = 8;
const TOTAL_ROUNDS = 3;

type Phase = "ready" | "playing" | "won" | "lost";

interface Duck { x: number; y: number; dx: number; dy: number; alive: boolean; id: number }

interface State {
  phase: Phase;
  sessionId: string;
  ducks: Duck[];
  score: number;
  round: number;
  hits: number;
  shots: number;
  duckId: number;
  roundStart: number;
  startTime: number;
  interactions: number;
}

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  ducks: [],
  score: 0,
  round: 1,
  hits: 0,
  shots: 0,
  duckId: 0,
  roundStart: 0,
  startTime: 0,
  interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "TICK" }
  | { type: "SHOOT"; x: number; y: number }
  | { type: "SPAWN" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now(), roundStart: Date.now() };
    case "SPAWN": {
      if (s.phase !== "playing") return s;
      const side = Math.random() < 0.5;
      const duck: Duck = {
        x: side ? -DUCK_SIZE : W,
        y: 40 + Math.random() * (H - 120),
        dx: (side ? 1 : -1) * (2 + Math.random() * 2 + s.round * 0.5),
        dy: (Math.random() - 0.5) * 2,
        alive: true,
        id: s.duckId + 1,
      };
      return { ...s, ducks: [...s.ducks, duck], duckId: s.duckId + 1 };
    }
    case "SHOOT": {
      if (s.phase !== "playing") return s;
      let hit = false;
      const ducks = s.ducks.map((d) => {
        if (!d.alive) return d;
        if (Math.abs(a.x - d.x - DUCK_SIZE / 2) < DUCK_SIZE && Math.abs(a.y - d.y - DUCK_SIZE / 2) < DUCK_SIZE) {
          hit = true;
          return { ...d, alive: false };
        }
        return d;
      });
      return {
        ...s,
        ducks,
        shots: s.shots + 1,
        hits: s.hits + (hit ? 1 : 0),
        score: s.score + (hit ? 100 : 0),
        interactions: s.interactions + 1,
      };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const ducks = s.ducks
        .map((d) => {
          if (!d.alive) return d;
          let { x, y, dx, dy } = d;
          x += dx;
          y += dy;
          if (y < 20 || y > H - 60) dy = -dy;
          return { ...d, x, y, dx, dy };
        })
        .filter((d) => d.alive ? (d.x > -DUCK_SIZE * 2 && d.x < W + DUCK_SIZE * 2) : true);

      const elapsed = Date.now() - s.roundStart;
      if (elapsed >= ROUND_TIME) {
        if (s.round >= TOTAL_ROUNDS) {
          return { ...s, ducks, phase: s.hits >= DUCKS_PER_ROUND * TOTAL_ROUNDS * 0.3 ? "won" : "lost" };
        }
        return { ...s, ducks: [], round: s.round + 1, roundStart: Date.now() };
      }
      return { ...s, ducks };
    }
    default:
      return s;
  }
}

export default function GameDuckHunt({ width = 440, height = 460 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.hits >= 18) return 3;
    if (s.hits >= 12) return 2;
    return s.hits > 0 ? 1 : 0;
  }, [isOver, s.hits]);

  // game loop
  useEffect(() => {
    if (s.phase !== "playing") return;
    const tid = setInterval(() => dispatch({ type: "TICK" }), 1000 / 60);
    const sid = setInterval(() => dispatch({ type: "SPAWN" }), 1400 - s.round * 150);
    return () => { clearInterval(tid); clearInterval(sid); };
  }, [s.phase, s.round]);

  // complete
  useEffect(() => {
    if (!isOver) return;
    if (s.phase === "won") { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-duck-hunt", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score, maxScore: DUCKS_PER_ROUND * TOTAL_ROUNDS * 100, source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  // draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    // sky
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#7dd3fc");
    sky.addColorStop(1, "#bae6fd");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    // ground
    ctx.fillStyle = "#16a34a";
    ctx.fillRect(0, H - 50, W, 50);
    ctx.fillStyle = "#15803d";
    ctx.fillRect(0, H - 50, W, 6);
    // trees
    for (let i = 0; i < 5; i++) {
      const tx = 30 + i * 85;
      ctx.fillStyle = "#166534";
      ctx.beginPath(); ctx.moveTo(tx, H - 80); ctx.lineTo(tx - 20, H - 50); ctx.lineTo(tx + 20, H - 50); ctx.fill();
      ctx.fillStyle = "#713f12";
      ctx.fillRect(tx - 3, H - 55, 6, 10);
    }
    // ducks
    for (const d of s.ducks) {
      if (!d.alive) continue;
      ctx.fillStyle = "#854d0e";
      ctx.beginPath();
      ctx.ellipse(d.x + DUCK_SIZE / 2, d.y + DUCK_SIZE / 2, DUCK_SIZE / 2, DUCK_SIZE / 3, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.fillStyle = "#166534";
      ctx.beginPath();
      ctx.arc(d.x + (d.dx > 0 ? DUCK_SIZE - 4 : 4), d.y + DUCK_SIZE / 3, 8, 0, Math.PI * 2);
      ctx.fill();
      // beak
      ctx.fillStyle = "#f97316";
      ctx.beginPath();
      ctx.moveTo(d.x + (d.dx > 0 ? DUCK_SIZE + 4 : -4), d.y + DUCK_SIZE / 3);
      ctx.lineTo(d.x + (d.dx > 0 ? DUCK_SIZE + 12 : -12), d.y + DUCK_SIZE / 3 + 3);
      ctx.lineTo(d.x + (d.dx > 0 ? DUCK_SIZE + 4 : -4), d.y + DUCK_SIZE / 3 + 6);
      ctx.fill();
      // wing
      ctx.fillStyle = "#a16207";
      const wingY = d.y + DUCK_SIZE / 2 + Math.sin(Date.now() / 80 + d.id) * 4;
      ctx.beginPath();
      ctx.ellipse(d.x + DUCK_SIZE / 2, wingY, 10, 5, d.dx > 0 ? -0.3 : 0.3, 0, Math.PI * 2);
      ctx.fill();
    }
    // HUD
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Round ${s.round}/${TOTAL_ROUNDS}`, 8, 20);
    ctx.textAlign = "center";
    ctx.fillText(`Hits: ${s.hits}`, W / 2, 20);
    ctx.textAlign = "right";
    ctx.fillText(`Score: ${s.score}`, W - 8, 20);
  }, [s]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (s.phase === "ready") { dispatch({ type: "START" }); return; }
    if (s.phase !== "playing") return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    const y = ((e.clientY - rect.top) / rect.height) * H;
    dispatch({ type: "SHOOT", x, y });
    hapticSelection();
  }, [s.phase]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={isOver ? (s.phase === "won" ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-800">
          <Crosshair className="h-4 w-4" /> {s.hits} hits
        </div>
      </div>
      <div className="relative">
        <canvas ref={canvasRef} width={W} height={H} className="cursor-crosshair rounded-2xl shadow-lg" onClick={handleClick} />
        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Duck Hunt</p>
            <p className="mb-4 text-sm text-white/80">Click to shoot the flying ducks!</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
          </div>
        )}
        {isOver && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/50">
            <Trophy className="mb-2 h-10 w-10 text-amber-400" />
            <p className="text-2xl font-bold text-white">{s.phase === "won" ? "Sharpshooter!" : "They Got Away!"}</p>
            <div className="my-2 text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
            <p className="mb-3 text-xl font-bold text-white">Hits: {s.hits} | Score: {s.score}</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
