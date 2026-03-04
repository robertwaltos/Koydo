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
const W = 360;
const H = 480;
const BIRD_X = 80;
const BIRD_R = 14;
const PIPE_W = 54;
const GAP = 130;
const GRAVITY = 0.45;
const FLAP_V = -8.5;
const PIPE_SPEED = 2.6;
const PIPE_INTERVAL = 160; // frames

type Phase = "ready" | "playing" | "complete";

interface Pipe {
  x: number;
  topH: number;
  passed: boolean;
}

interface State {
  birdY: number;
  velY: number;
  pipes: Pipe[];
  score: number;
  frame: number;
  startTime: number;
  interactions: number;
}

function initState(): State {
  return {
    birdY: H / 2,
    velY: 0,
    pipes: [],
    score: 0,
    frame: 0,
    startTime: Date.now(),
    interactions: 0,
  };
}

export default function Zone088SparkFlapSurge() {
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
    setDisplayScore(stateRef.current.score);
    hapticError();
    const s = stateRef.current;
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-088",
      score: s.score,
      maxScore: 50,
      elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions,
      difficulty: "medium",
    });
    mascot.speak(s.score >= 10 ? `${s.score} pipes! Great flappin'!` : "Keep flapping! You'll go further!", "encourage");
  }, [mascot]);

  const flap = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    stateRef.current.velY = FLAP_V;
    stateRef.current.interactions++;
    hapticSelection();
  }, []);

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    s.frame++;
    s.velY += GRAVITY;
    s.birdY += s.velY;

    // Spawn pipe
    if (s.frame % PIPE_INTERVAL === 0) {
      const topH = 80 + Math.random() * (H - GAP - 160);
      s.pipes.push({ x: W, topH, passed: false });
    }

    // Move pipes
    s.pipes = s.pipes.map((p) => ({ ...p, x: p.x - PIPE_SPEED }));

    // Score & collision
    for (const p of s.pipes) {
      if (!p.passed && p.x + PIPE_W < BIRD_X) {
        p.passed = true;
        s.score++;
        hapticSuccess();
        if (s.score === 5) mascot.speak("5 pipes! You're on fire!", "happy");
        if (s.score === 15) mascot.speak("15! Incredible flappin'!", "celebrate");
        setDisplayScore(s.score);
      }
      // Hit pipe
      if (
        BIRD_X + BIRD_R > p.x &&
        BIRD_X - BIRD_R < p.x + PIPE_W &&
        (s.birdY - BIRD_R < p.topH || s.birdY + BIRD_R > p.topH + GAP)
      ) {
        endGame(); return;
      }
    }

    // Hit top/bottom
    if (s.birdY - BIRD_R < 0 || s.birdY + BIRD_R > H) { endGame(); return; }

    // Remove off-screen pipes
    s.pipes = s.pipes.filter((p) => p.x + PIPE_W > 0);

    // Draw
    ctx.clearRect(0, 0, W, H);

    // Sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#87ceeb");
    sky.addColorStop(1, "#c9e8f5");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // Ground
    ctx.fillStyle = "#7ec850";
    ctx.fillRect(0, H - 20, W, 20);
    ctx.fillStyle = "#5a9e38";
    ctx.fillRect(0, H - 22, W, 4);

    // Pipes
    for (const p of s.pipes) {
      // Top pipe
      const pipeGrad = ctx.createLinearGradient(p.x, 0, p.x + PIPE_W, 0);
      pipeGrad.addColorStop(0, "#5cb85c");
      pipeGrad.addColorStop(1, "#3a7d3a");
      ctx.fillStyle = pipeGrad;
      ctx.fillRect(p.x, 0, PIPE_W, p.topH);
      ctx.fillRect(p.x - 4, p.topH - 16, PIPE_W + 8, 16);
      // Bottom pipe
      const botY = p.topH + GAP;
      ctx.fillStyle = pipeGrad;
      ctx.fillRect(p.x, botY, PIPE_W, H - botY);
      ctx.fillRect(p.x - 4, botY, PIPE_W + 8, 16);
    }

    // Bird
    const wing = Math.sin(s.frame * 0.3) * 5;
    ctx.save();
    ctx.translate(BIRD_X, s.birdY);
    ctx.rotate(Math.min(Math.max(s.velY * 0.06, -0.5), 0.8));
    ctx.fillStyle = "#fbbf24";
    ctx.beginPath();
    ctx.ellipse(0, 0, BIRD_R + 2, BIRD_R, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.ellipse(0, wing, BIRD_R - 2, BIRD_R - 4, 0, 0, Math.PI * 2);
    ctx.fill();
    // Eye
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(6, -3, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#1e3a5f";
    ctx.beginPath();
    ctx.arc(7, -3, 2.5, 0, Math.PI * 2);
    ctx.fill();
    // Beak
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(18, 2);
    ctx.lineTo(12, 5);
    ctx.fill();
    ctx.restore();

    // Score HUD
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.font = "bold 32px monospace";
    ctx.textAlign = "center";
    ctx.fillText(String(s.score), W / 2 + 1, 52);
    ctx.fillStyle = "white";
    ctx.fillText(String(s.score), W / 2, 50);

    rafRef.current = requestAnimationFrame(loop);
  }, [endGame, mascot]);

  const startGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    stateRef.current = initState();
    phaseRef.current = "playing";
    setPhase("playing");
    setDisplayScore(0);
    mascot.speak("Tap to flap! Dodge the pipes!", "happy");
    rafRef.current = requestAnimationFrame(loop);
  }, [loop, mascot]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") { e.preventDefault(); flap(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); cancelAnimationFrame(rafRef.current); };
  }, [flap]);

  return (
    <div className="flex flex-col items-center gap-3 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="spark" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Spark Flap Surge</h2>
          <p className="text-xs text-stone-500">Tap to flap · Dodge every pipe!</p>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden border-2 border-amber-200 shadow-md cursor-pointer"
           onClick={flap}>
        <canvas ref={canvasRef} width={W} height={H} className="block" />
        <AnimatePresence>
          {phase === "ready" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 gap-4">
              <p className="text-5xl">🐤</p>
              <p className="text-white font-black text-2xl">Spark Flap Surge</p>
              <p className="text-white/80 text-sm text-center px-6">Tap / Space to flap. Dodge green pipes. How far can you go?</p>
              <PhysicalButton onClick={startGame} variant="primary">Start Flapping!</PhysicalButton>
            </motion.div>
          )}
          {phase === "complete" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 gap-4">
              <p className="text-5xl">💥</p>
              <p className="text-white font-black text-2xl">Crash!</p>
              <p className="text-white text-lg font-bold">{displayScore} pipe{displayScore !== 1 ? "s" : ""} cleared</p>
              <PhysicalButton onClick={startGame} variant="primary">
                <RotateCcw className="mr-1.5 inline h-4 w-4" /> Try Again
              </PhysicalButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {phase === "playing" && (
        <PhysicalButton onClick={flap} variant="primary" className="w-40">
          FLAP ↑
        </PhysicalButton>
      )}
    </div>
  );
}
