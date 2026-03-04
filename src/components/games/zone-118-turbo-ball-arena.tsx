"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, RotateCcw, Trophy, Zap } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();
const W = 500, H = 320;
const GOAL_W = 60, GOAL_H = 80;
const CAR_W = 30, CAR_H = 16;
const BALL_R = 10;
const GAME_TIME = 90; // seconds

type Phase = "ready" | "playing" | "goal" | "complete";

export default function Zone118TurboBallArena() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [blueScore, setBlueScore] = useState(0);
  const [orangeScore, setOrangeScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [boost, setBoost] = useState(100);
  const [goalMsg, setGoalMsg] = useState("");

  const gameRef = useRef<{
    // Player car
    px: number; py: number; pvx: number; pvy: number; pAngle: number;
    // AI car
    ax: number; ay: number; avx: number; avy: number; aAngle: number;
    // Ball
    bx: number; by: number; bvx: number; bvy: number;
    // Boost pads
    pads: { x: number; y: number; active: boolean; timer: number }[];
    keys: Set<string>;
    running: boolean;
    lastTime: number;
    boost: number;
  }>({
    px: 120, py: H / 2, pvx: 0, pvy: 0, pAngle: 0,
    ax: W - 120, ay: H / 2, avx: 0, avy: 0, aAngle: Math.PI,
    bx: W / 2, by: H / 2, bvx: 0, bvy: 0,
    pads: [],
    keys: new Set(),
    running: false,
    lastTime: 0,
    boost: 100,
  });

  const resetField = useCallback(() => {
    const g = gameRef.current;
    g.px = 120; g.py = H / 2; g.pvx = 0; g.pvy = 0; g.pAngle = 0;
    g.ax = W - 120; g.ay = H / 2; g.avx = 0; g.avy = 0; g.aAngle = Math.PI;
    g.bx = W / 2; g.by = H / 2; g.bvx = 0; g.bvy = 0;
    g.boost = 100;
    setBoost(100);
    // Boost pads
    g.pads = [
      { x: W / 4, y: 30, active: true, timer: 0 },
      { x: W / 4, y: H - 30, active: true, timer: 0 },
      { x: (3 * W) / 4, y: 30, active: true, timer: 0 },
      { x: (3 * W) / 4, y: H - 30, active: true, timer: 0 },
      { x: W / 2, y: H / 2, active: true, timer: 0 },
    ];
  }, []);

  const startGame = useCallback(() => {
    setPhase("playing");
    setBlueScore(0); setOrangeScore(0); setTimeLeft(GAME_TIME);
    resetField();
    gameRef.current.running = true;
    gameRef.current.lastTime = Date.now();
    mascot.setMood("happy");
  }, [mascot, resetField]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const g = gameRef.current;
      if (e.type === "keydown") g.keys.add(e.key.toLowerCase());
      else g.keys.delete(e.key.toLowerCase());
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("keyup", handleKey);
    return () => { window.removeEventListener("keydown", handleKey); window.removeEventListener("keyup", handleKey); };
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const g = gameRef.current;
    let animId: number;

    const loop = () => {
      if (!g.running) return;
      const now = Date.now();
      const dt = Math.min((now - g.lastTime) / 16.67, 3); // normalize to ~60fps
      g.lastTime = now;

      // Timer
      setTimeLeft((t) => {
        const nt = t - dt / 60;
        if (nt <= 0) {
          g.running = false;
          setPhase("complete");
          mascot.setMood("cheering");
          const sc = blueScore > orangeScore ? 400 : blueScore === orangeScore ? 200 : 100;
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-118",
          difficulty: "medium", score: sc, maxScore: 500, interactions: 1, elapsedMs: GAME_TIME * 1000, source: "component", occurredAt: new Date().toISOString(), });
          return 0;
        }
        return nt;
      });

      // Player input
      const accel = 0.25;
      const turnSpeed = 0.05;
      const friction = 0.97;
      const boostAccel = 0.5;

      if (g.keys.has("a") || g.keys.has("arrowleft")) g.pAngle -= turnSpeed * dt;
      if (g.keys.has("d") || g.keys.has("arrowright")) g.pAngle += turnSpeed * dt;
      if (g.keys.has("w") || g.keys.has("arrowup")) {
        g.pvx += Math.cos(g.pAngle) * accel * dt;
        g.pvy += Math.sin(g.pAngle) * accel * dt;
      }
      if (g.keys.has("s") || g.keys.has("arrowdown")) {
        g.pvx -= Math.cos(g.pAngle) * accel * 0.5 * dt;
        g.pvy -= Math.sin(g.pAngle) * accel * 0.5 * dt;
      }
      if (g.keys.has("shift") && g.boost > 0) {
        g.pvx += Math.cos(g.pAngle) * boostAccel * dt;
        g.pvy += Math.sin(g.pAngle) * boostAccel * dt;
        g.boost = Math.max(0, g.boost - dt * 1.2);
        setBoost(g.boost);
      }

      // Player physics
      g.pvx *= friction; g.pvy *= friction;
      g.px += g.pvx * dt; g.py += g.pvy * dt;
      // Wall bounce
      if (g.py < 15) { g.py = 15; g.pvy *= -0.5; }
      if (g.py > H - 15) { g.py = H - 15; g.pvy *= -0.5; }
      if (g.px < 15) { g.px = 15; g.pvx *= -0.5; }
      if (g.px > W - 15) { g.px = W - 15; g.pvx *= -0.5; }

      // AI car — chase ball
      const aiTargetX = g.bx < g.ax ? g.bx - 30 : g.bx + 30;
      const aiTargetY = g.bx < g.ax ? g.by : H / 2;
      const aiDx = (g.bx < W / 2 ? g.bx : aiTargetX) - g.ax;
      const aiDy = (g.bx < W / 2 ? g.by : aiTargetY) - g.ay;
      const aiDist = Math.sqrt(aiDx * aiDx + aiDy * aiDy);
      if (aiDist > 5) {
        g.aAngle = Math.atan2(aiDy, aiDx);
        const aiSpeed = 0.18 * dt;
        g.avx += Math.cos(g.aAngle) * aiSpeed;
        g.avy += Math.sin(g.aAngle) * aiSpeed;
      }
      g.avx *= friction; g.avy *= friction;
      g.ax += g.avx * dt; g.ay += g.avy * dt;
      g.ax = Math.max(15, Math.min(W - 15, g.ax));
      g.ay = Math.max(15, Math.min(H - 15, g.ay));

      // Ball physics
      g.bvx *= 0.995; g.bvy *= 0.995;
      g.bx += g.bvx * dt; g.by += g.bvy * dt;
      // Wall bounce
      if (g.by < BALL_R) { g.by = BALL_R; g.bvy *= -0.8; }
      if (g.by > H - BALL_R) { g.by = H - BALL_R; g.bvy *= -0.8; }

      // Goal detection
      const goalYMin = H / 2 - GOAL_H / 2;
      const goalYMax = H / 2 + GOAL_H / 2;

      if (g.bx < BALL_R && g.by > goalYMin && g.by < goalYMax) {
        // Orange scores (left goal)
        setOrangeScore((s) => s + 1);
        setGoalMsg("🟠 Orange Scores!");
        setPhase("goal");
        g.running = false;
        hapticError();
        setTimeout(() => { resetField(); g.running = true; g.lastTime = Date.now(); setPhase("playing"); }, 2000);
        return;
      }
      if (g.bx > W - BALL_R && g.by > goalYMin && g.by < goalYMax) {
        // Blue scores!
        setBlueScore((s) => s + 1);
        setGoalMsg("🔵 GOAL!");
        setPhase("goal");
        g.running = false;
        hapticSuccess();
        setTimeout(() => { resetField(); g.running = true; g.lastTime = Date.now(); setPhase("playing"); }, 2000);
        return;
      }

      // Side walls (not goal area)
      if (g.bx < BALL_R) { g.bx = BALL_R; g.bvx *= -0.8; }
      if (g.bx > W - BALL_R) { g.bx = W - BALL_R; g.bvx *= -0.8; }

      // Car-ball collision
      const carBallCollide = (cx: number, cy: number, cvx: number, cvy: number) => {
        const dx = g.bx - cx, dy = g.by - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < BALL_R + 15) {
          const nx = dx / dist, ny = dy / dist;
          const relVx = cvx - g.bvx, relVy = cvy - g.bvy;
          const impulse = (relVx * nx + relVy * ny) * 1.2;
          g.bvx += nx * impulse;
          g.bvy += ny * impulse;
          g.bx = cx + nx * (BALL_R + 16);
          g.by = cy + ny * (BALL_R + 16);
        }
      };
      carBallCollide(g.px, g.py, g.pvx, g.pvy);
      carBallCollide(g.ax, g.ay, g.avx, g.avy);

      // Boost pads
      for (const pad of g.pads) {
        if (!pad.active) {
          pad.timer -= dt;
          if (pad.timer <= 0) pad.active = true;
          continue;
        }
        const dx = g.px - pad.x, dy = g.py - pad.y;
        if (dx * dx + dy * dy < 400) {
          g.boost = Math.min(100, g.boost + 30);
          setBoost(g.boost);
          pad.active = false;
          pad.timer = 300;
          hapticSelection();
        }
      }

      // Draw
      ctx.fillStyle = "#1a3a2a";
      ctx.fillRect(0, 0, W, H);

      // Field lines
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 50, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2, H);
      ctx.stroke();

      // Goals
      ctx.fillStyle = "#3366ff30";
      ctx.fillRect(0, goalYMin, 8, GOAL_H);
      ctx.fillStyle = "#ff660030";
      ctx.fillRect(W - 8, goalYMin, 8, GOAL_H);
      ctx.strokeStyle = "#3366ff";
      ctx.strokeRect(0, goalYMin, 8, GOAL_H);
      ctx.strokeStyle = "#ff6600";
      ctx.strokeRect(W - 8, goalYMin, 8, GOAL_H);

      // Walls
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, W - 2, H - 2);

      // Boost pads
      for (const pad of g.pads) {
        if (pad.active) {
          ctx.fillStyle = "#ffaa0080";
          ctx.beginPath();
          ctx.arc(pad.x, pad.y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#ffaa00";
          ctx.font = "10px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("⚡", pad.x, pad.y + 4);
        }
      }

      // Ball
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(g.bx, g.by, BALL_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#cccccc";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Player car (blue)
      ctx.save();
      ctx.translate(g.px, g.py);
      ctx.rotate(g.pAngle);
      ctx.fillStyle = "#3366ff";
      ctx.fillRect(-CAR_W / 2, -CAR_H / 2, CAR_W, CAR_H);
      ctx.fillStyle = "#88aaff";
      ctx.fillRect(CAR_W / 2 - 6, -CAR_H / 2 + 2, 6, CAR_H - 4);
      // Boost flame
      if (g.keys.has("shift") && g.boost > 0) {
        ctx.fillStyle = "#ff6600";
        ctx.fillRect(-CAR_W / 2 - 8, -3, 8, 6);
      }
      ctx.restore();

      // AI car (orange)
      ctx.save();
      ctx.translate(g.ax, g.ay);
      ctx.rotate(g.aAngle);
      ctx.fillStyle = "#ff6600";
      ctx.fillRect(-CAR_W / 2, -CAR_H / 2, CAR_W, CAR_H);
      ctx.fillStyle = "#ffaa44";
      ctx.fillRect(CAR_W / 2 - 6, -CAR_H / 2 + 2, 6, CAR_H - 4);
      ctx.restore();

      // HUD
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(W / 2 - 80, 0, 160, 24);
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      ctx.fillStyle = "#3366ff";
      ctx.fillText(String(blueScore), W / 2 - 30, 17);
      ctx.fillStyle = "#ffffff";
      ctx.fillText(`${Math.ceil(timeLeft)}`, W / 2, 17);
      ctx.fillStyle = "#ff6600";
      ctx.fillText(String(orangeScore), W / 2 + 30, 17);

      // Boost meter
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(5, H - 12, 80, 8);
      ctx.fillStyle = g.boost > 30 ? "#ffaa00" : "#ff4444";
      ctx.fillRect(5, H - 12, 80 * (g.boost / 100), 8);
      ctx.font = "8px monospace";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "left";
      ctx.fillText("BOOST", 6, H - 14);

      animId = requestAnimationFrame(loop);
    };

    g.lastTime = Date.now();
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [phase, blueScore, orangeScore, timeLeft, resetField, mascot]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-950 via-emerald-950 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-yellow-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Car className="mr-2 inline h-8 w-8" /> Turbo Ball Arena
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Car-ball arena. Drive into the ball to score goals. WASD to steer, Shift for boost. 90 seconds, most goals wins!
            </p>
            <PhysicalButton onClick={startGame}><Zap className="mr-2 h-5 w-5" /> Kick Off!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "goal") && (
          <motion.div key="playing" className="flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <canvas ref={canvasRef} width={W} height={H} className="rounded-xl border border-emerald-800/50" />
            {phase === "goal" && (
              <motion.div className="text-2xl font-black text-yellow-400" initial={{ scale: 0 }} animate={{ scale: 1.5 }}>
                {goalMsg}
              </motion.div>
            )}
            <p className="text-xs text-white/30">WASD steer • Shift boost • Score in orange goal →</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl"><Trophy className="inline h-12 w-12 text-yellow-400" /></p>
              <h2 className="mt-3 text-2xl font-black text-yellow-400">
                {blueScore > orangeScore ? "You Win!" : blueScore === orangeScore ? "Draw!" : "You Lose"}
              </h2>
              <p className="mt-2 text-3xl font-bold">
                <span className="text-blue-400">{blueScore}</span>
                <span className="text-white/40 mx-2">—</span>
                <span className="text-orange-400">{orangeScore}</span>
              </p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Rematch
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
