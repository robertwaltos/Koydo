"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bird, RotateCcw, Trophy } from "lucide-react";
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

const CANVAS_W = 320;
const CANVAS_H = 480;
const GRAVITY = 0.45;
const FLAP_FORCE = -7;
const BIRD_SIZE = 28;
const BIRD_X = 80;
const PIPE_WIDTH = 50;
const PIPE_GAP = 140;
const PIPE_SPEED = 2.5;
const PIPE_SPAWN_X = CANVAS_W + 20;
const PIPE_SPAWN_INTERVAL = 100; // frames
const MAX_SCORE = 50;

type Phase = "ready" | "playing" | "complete";

interface Pipe {
  x: number;
  gapTop: number; // top of the gap
  scored: boolean;
}

interface State {
  phase: Phase;
  sessionId: string;
  birdY: number;
  velocity: number;
  pipes: Pipe[];
  score: number;
  frame: number;
  bestScore: number;
  interactions: number;
  startTime: number;
}

type Action =
  | { type: "FLAP" }
  | { type: "TICK" }
  | { type: "START" }
  | { type: "RESET" };

function init(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    birdY: CANVAS_H / 2 - BIRD_SIZE / 2,
    velocity: 0,
    pipes: [],
    score: 0,
    frame: 0,
    bestScore: 0,
    interactions: 0,
    startTime: 0,
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return {
        ...init(),
        phase: "playing",
        sessionId: createLegacySessionId(),
        bestScore: s.bestScore,
        startTime: Date.now(),
        velocity: FLAP_FORCE,
        interactions: 1,
      };

    case "FLAP": {
      if (s.phase !== "playing") return s;
      return { ...s, velocity: FLAP_FORCE, interactions: s.interactions + 1 };
    }

    case "TICK": {
      if (s.phase !== "playing") return s;

      const newFrame = s.frame + 1;
      const newVelocity = s.velocity + GRAVITY;
      const newBirdY = s.birdY + newVelocity;

      // Move pipes
      let newPipes = s.pipes.map((p) => ({ ...p, x: p.x - PIPE_SPEED }));

      // Spawn new pipe
      if (newFrame % PIPE_SPAWN_INTERVAL === 0) {
        const minGapTop = 60;
        const maxGapTop = CANVAS_H - PIPE_GAP - 60;
        const gapTop = minGapTop + Math.floor(Math.random() * (maxGapTop - minGapTop));
        newPipes.push({ x: PIPE_SPAWN_X, gapTop, scored: false });
      }

      // Remove off-screen pipes
      newPipes = newPipes.filter((p) => p.x + PIPE_WIDTH > -10);

      // Score passed pipes
      let newScore = s.score;
      newPipes = newPipes.map((p) => {
        if (!p.scored && p.x + PIPE_WIDTH < BIRD_X) {
          newScore++;
          return { ...p, scored: true };
        }
        return p;
      });

      // Collision detection
      const birdTop = newBirdY;
      const birdBottom = newBirdY + BIRD_SIZE;
      const birdRight = BIRD_X + BIRD_SIZE;
      const birdLeft = BIRD_X;

      // Floor / ceiling
      if (birdBottom >= CANVAS_H || birdTop <= 0) {
        const best = Math.max(s.bestScore, newScore);
        return { ...s, phase: "complete", pipes: newPipes, score: newScore, bestScore: best, birdY: newBirdY };
      }

      // Pipe collision
      for (const p of newPipes) {
        if (birdRight > p.x && birdLeft < p.x + PIPE_WIDTH) {
          if (birdTop < p.gapTop || birdBottom > p.gapTop + PIPE_GAP) {
            const best = Math.max(s.bestScore, newScore);
            return { ...s, phase: "complete", pipes: newPipes, score: newScore, bestScore: best, birdY: newBirdY };
          }
        }
      }

      return {
        ...s,
        birdY: newBirdY,
        velocity: newVelocity,
        pipes: newPipes,
        score: newScore,
        frame: newFrame,
      };
    }

    case "RESET":
      return { ...init(), bestScore: s.bestScore };

    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameFlappy() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loopRef = useRef<number>(0);

  // Game loop
  useEffect(() => {
    if (s.phase === "playing") {
      const tick = () => {
        dispatch({ type: "TICK" });
        loopRef.current = requestAnimationFrame(tick);
      };
      loopRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(loopRef.current);
    }
  }, [s.phase]);

  // Draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // Sky
    const grad = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
    grad.addColorStop(0, "#87CEEB");
    grad.addColorStop(1, "#E0F7FA");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Ground line
    ctx.fillStyle = "#8BC34A";
    ctx.fillRect(0, CANVAS_H - 4, CANVAS_W, 4);

    // Pipes
    for (const p of s.pipes) {
      // Top pipe
      ctx.fillStyle = "#4CAF50";
      ctx.fillRect(p.x, 0, PIPE_WIDTH, p.gapTop);
      ctx.fillStyle = "#388E3C";
      ctx.fillRect(p.x - 3, p.gapTop - 20, PIPE_WIDTH + 6, 20);

      // Bottom pipe
      ctx.fillStyle = "#4CAF50";
      ctx.fillRect(p.x, p.gapTop + PIPE_GAP, PIPE_WIDTH, CANVAS_H - p.gapTop - PIPE_GAP);
      ctx.fillStyle = "#388E3C";
      ctx.fillRect(p.x - 3, p.gapTop + PIPE_GAP, PIPE_WIDTH + 6, 20);
    }

    // Bird
    const cx = BIRD_X + BIRD_SIZE / 2;
    const cy = s.birdY + BIRD_SIZE / 2;
    const angle = Math.min(Math.max(s.velocity * 3, -30), 60) * (Math.PI / 180);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    // Body
    ctx.fillStyle = "#FFD600";
    ctx.beginPath();
    ctx.ellipse(0, 0, BIRD_SIZE / 2, BIRD_SIZE / 2.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eye
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(6, -4, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(7, -4, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.fillStyle = "#FF6F00";
    ctx.beginPath();
    ctx.moveTo(BIRD_SIZE / 2 - 2, -2);
    ctx.lineTo(BIRD_SIZE / 2 + 8, 2);
    ctx.lineTo(BIRD_SIZE / 2 - 2, 5);
    ctx.closePath();
    ctx.fill();

    // Wing
    ctx.fillStyle = "#FFC107";
    ctx.beginPath();
    ctx.ellipse(-4, 3, 7, 4, -0.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Score (during play)
    if (s.phase === "playing") {
      ctx.fillStyle = "white";
      ctx.strokeStyle = "rgba(0,0,0,0.3)";
      ctx.lineWidth = 3;
      ctx.font = "bold 40px sans-serif";
      ctx.textAlign = "center";
      ctx.strokeText(String(s.score), CANVAS_W / 2, 60);
      ctx.fillText(String(s.score), CANVAS_W / 2, 60);
    }
  }, [s.birdY, s.pipes, s.score, s.phase, s.velocity]);

  // Handle flap via tap / keyboard
  const handleFlap = useCallback(() => {
    if (s.phase === "ready" || s.phase === "complete") {
      dispatch({ type: "START" });
      hapticSelection();
    } else {
      dispatch({ type: "FLAP" });
      hapticSelection();
    }
  }, [s.phase]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleFlap();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleFlap]);

  // Complete emit
  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "flappy",
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
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-sky-50 to-cyan-50 p-6 dark:from-sky-950/40 dark:to-cyan-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Bird className="h-6 w-6 text-amber-500" aria-hidden />
          <h2 className="text-xl font-bold text-sky-700 dark:text-sky-300">Flappy Bird</h2>
        </div>
        <MascotFriend id="pixel" mood="happy" size="sm" />
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="cursor-pointer rounded-2xl shadow-lg"
          onClick={handleFlap}
          onTouchStart={(e) => { e.preventDefault(); handleFlap(); }}
        />

        {/* Ready overlay */}
        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/30">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Flappy Bird</p>
            <p className="mb-4 text-white/90">Tap or press Space to flap!</p>
            <PhysicalButton variant="primary" onClick={handleFlap}>
              Tap to Start
            </PhysicalButton>
          </div>
        )}

        {/* Game over overlay */}
        {s.phase === "complete" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40"
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
    </div>
  );
}
