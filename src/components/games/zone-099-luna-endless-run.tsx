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
const H = 280;
const GROUND_Y = H - 50;
const RUNNER_X = 60;
const RUNNER_W = 28;
const RUNNER_H = 40;
const GRAVITY = 0.7;
const JUMP_V = -14;
const OBS_W = 22;
type Phase = "ready" | "playing" | "complete";

interface Obs { x: number; h: number; }

interface State {
  runnerY: number;
  velY: number;
  onGround: boolean;
  obstacles: Obs[];
  score: number;
  speed: number;
  frame: number;
  startTime: number;
  spawnTimer: number;
  interactions: number;
  legPhase: number;
}

function initState(): State {
  return {
    runnerY: GROUND_Y - RUNNER_H,
    velY: 0,
    onGround: true,
    obstacles: [],
    score: 0,
    speed: 4,
    frame: 0,
    startTime: Date.now(),
    spawnTimer: 80,
    interactions: 0,
    legPhase: 0,
  };
}

export default function Zone099LunaEndlessRun() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef<State>(initState());
  const phaseRef = useRef<Phase>("ready");
  const [phase, setPhase] = useState<Phase>("ready");
  const [displayScore, setDisplayScore] = useState(0);

  const jump = useCallback(() => {
    const s = stateRef.current;
    if (phaseRef.current !== "playing") return;
    if (s.onGround) {
      s.velY = JUMP_V;
      s.onGround = false;
      s.interactions++;
      hapticSelection();
    }
  }, []);

  const endGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    phaseRef.current = "complete";
    setPhase("complete");
    hapticError();
    const s = stateRef.current;
    setDisplayScore(s.score);
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-099",
      score: s.score,
      maxScore: 300,
      elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions,
      difficulty: "medium",
    });
    mascot.speak(s.score >= 100 ? `${s.score} pts! Incredible runner!` : "Keep jumping! You'll go further!", "encourage");
  }, [mascot]);

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    s.frame++;
    s.legPhase = (s.legPhase + 0.25) % (Math.PI * 2);

    // Physics
    s.velY += GRAVITY;
    s.runnerY += s.velY;
    if (s.runnerY >= GROUND_Y - RUNNER_H) {
      s.runnerY = GROUND_Y - RUNNER_H;
      s.velY = 0;
      s.onGround = true;
    }

    // Score
    s.score = Math.floor(s.frame / 6);
    if (s.frame % 360 === 0) { s.speed = Math.min(s.speed + 0.3, 9); }
    setDisplayScore(s.score);

    // Spawn obstacles
    s.spawnTimer--;
    if (s.spawnTimer <= 0) {
      const h = 25 + Math.random() * 35;
      s.obstacles.push({ x: W, h });
      s.spawnTimer = 55 + Math.floor(Math.random() * 60);
    }

    // Move obstacles
    s.obstacles = s.obstacles.map((o) => ({ ...o, x: o.x - s.speed })).filter((o) => o.x + OBS_W > 0);

    // Collision
    for (const o of s.obstacles) {
      if (RUNNER_X + RUNNER_W - 4 > o.x &&
          RUNNER_X + 4 < o.x + OBS_W &&
          s.runnerY + RUNNER_H - 2 > GROUND_Y - o.h) {
        endGame(); return;
      }
    }

    // Animate score milestones
    if (s.score === 50) mascot.speak("50! Keep running!", "happy");
    if (s.score === 100) { hapticSuccess(); mascot.speak("100 pts! Awesome!", "celebrate"); }

    // Draw background
    const sky = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
    sky.addColorStop(0, "#87ceeb");
    sky.addColorStop(1, "#c9e8f5");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // Clouds (moving slowly)
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    const cloudOffset = (s.frame * 0.4) % W;
    [[W - cloudOffset, 30, 50, 20], [W * 0.6 - cloudOffset, 20, 40, 16], [W - cloudOffset + W * 0.4, 40, 55, 18]].forEach(([x, y, w, h]) => {
      ctx.beginPath(); ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2); ctx.fill();
    });

    // Ground
    ctx.fillStyle = "#7ec850";
    ctx.fillRect(0, GROUND_Y, W, H - GROUND_Y);
    ctx.fillStyle = "#5a9e38";
    ctx.fillRect(0, GROUND_Y, W, 4);

    // Obstacles (cacti)
    for (const o of s.obstacles) {
      ctx.fillStyle = "#2d6a2d";
      ctx.fillRect(o.x + 6, GROUND_Y - o.h, OBS_W - 12, o.h);
      ctx.fillRect(o.x, GROUND_Y - o.h * 0.55, OBS_W, o.h * 0.18);
      ctx.fillRect(o.x, GROUND_Y - o.h * 0.7 - 10, 7, 15);
      ctx.fillRect(o.x + OBS_W - 7, GROUND_Y - o.h * 0.5 - 8, 7, 12);
    }

    // Runner (stick figure)
    const ry = s.runnerY;
    const legSwing = Math.sin(s.legPhase) * 10;
    ctx.strokeStyle = "#1e3a5f";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    // Body
    ctx.beginPath(); ctx.moveTo(RUNNER_X + 14, ry + 10); ctx.lineTo(RUNNER_X + 14, ry + 28); ctx.stroke();
    // Head
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath(); ctx.arc(RUNNER_X + 14, ry + 6, 8, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#d97706"; ctx.lineWidth = 2;
    ctx.stroke();
    // Arms
    ctx.strokeStyle = "#1e3a5f"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(RUNNER_X + 14, ry + 16); ctx.lineTo(RUNNER_X + 2, ry + 24); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(RUNNER_X + 14, ry + 16); ctx.lineTo(RUNNER_X + 26, ry + 22); ctx.stroke();
    // Legs
    ctx.beginPath(); ctx.moveTo(RUNNER_X + 14, ry + 28); ctx.lineTo(RUNNER_X + 14 - legSwing, ry + 40); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(RUNNER_X + 14, ry + 28); ctx.lineTo(RUNNER_X + 14 + legSwing, ry + 40); ctx.stroke();

    // Score HUD
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.font = "bold 18px monospace";
    ctx.textAlign = "right";
    ctx.fillText(`${s.score} pts`, W - 8, 24);
    ctx.fillStyle = "white";
    ctx.fillText(`${s.score} pts`, W - 9, 23);

    rafRef.current = requestAnimationFrame(loop);
  }, [endGame, mascot]);

  const startGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    stateRef.current = initState();
    phaseRef.current = "playing";
    setPhase("playing");
    setDisplayScore(0);
    mascot.speak("Tap to jump! Avoid the cacti!", "happy");
    rafRef.current = requestAnimationFrame(loop);
  }, [loop, mascot]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " " || e.key === "ArrowUp" || e.key === "w") {
        e.preventDefault(); jump();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); cancelAnimationFrame(rafRef.current); };
  }, [jump]);

  return (
    <div className="flex flex-col items-center gap-3 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="luna" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Luna Endless Run</h2>
          <p className="text-xs text-stone-500">Jump over obstacles — keep running!</p>
        </div>
      </div>

      <div
        className="relative rounded-2xl overflow-hidden border-2 border-green-400 shadow-md cursor-pointer"
        onClick={jump}
      >
        <canvas ref={canvasRef} width={W} height={H} className="block" />
        <AnimatePresence>
          {phase === "ready" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 gap-4">
              <p className="text-5xl">🏃</p>
              <p className="text-white font-black text-xl">Endless Run!</p>
              <p className="text-white/80 text-sm text-center px-8">Tap / Space / click to jump over cacti. The runner speeds up over time!</p>
              <PhysicalButton onClick={startGame} variant="primary">Start Running!</PhysicalButton>
            </motion.div>
          )}
          {phase === "complete" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 gap-4">
              <p className="text-5xl">💥</p>
              <p className="text-white font-black text-xl">Crashed!</p>
              <p className="text-white text-lg">{displayScore} pts</p>
              <PhysicalButton onClick={startGame} variant="primary">
                <RotateCcw className="mr-1.5 inline h-4 w-4" /> Run Again
              </PhysicalButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {phase === "playing" && (
        <PhysicalButton onClick={jump} variant="primary" className="w-36">
          JUMP ↑
        </PhysicalButton>
      )}
    </div>
  );
}
