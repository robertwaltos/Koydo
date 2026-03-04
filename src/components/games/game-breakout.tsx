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
const PADDLE_W = 70;
const PADDLE_H = 12;
const PADDLE_Y = H - 30;
const BALL_R = 6;
const BALL_SPEED = 4;
const BRICK_ROWS = 6;
const BRICK_COLS = 8;
const BRICK_W = W / BRICK_COLS - 4;
const BRICK_H = 16;
const BRICK_PAD = 4;
const BRICK_TOP = 50;
const MAX_LIVES = 3;

type Phase = "ready" | "playing" | "won" | "lost";

const ROW_COLORS = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#8B5CF6"];

interface Brick {
  x: number;
  y: number;
  w: number;
  h: number;
  alive: boolean;
  color: string;
  row: number;
}

interface State {
  phase: Phase;
  sessionId: string;
  paddleX: number;
  ballX: number;
  ballY: number;
  dx: number;
  dy: number;
  bricks: Brick[];
  score: number;
  lives: number;
  interactions: number;
  startTime: number;
}

type Action =
  | { type: "START" }
  | { type: "PADDLE"; x: number }
  | { type: "TICK" }
  | { type: "RESET" };

function makeBricks(): Brick[] {
  const bricks: Brick[] = [];
  for (let r = 0; r < BRICK_ROWS; r++) {
    for (let c = 0; c < BRICK_COLS; c++) {
      bricks.push({
        x: c * (BRICK_W + BRICK_PAD) + BRICK_PAD / 2 + 2,
        y: BRICK_TOP + r * (BRICK_H + BRICK_PAD),
        w: BRICK_W,
        h: BRICK_H,
        alive: true,
        color: ROW_COLORS[r],
        row: r,
      });
    }
  }
  return bricks;
}

function init(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    paddleX: W / 2 - PADDLE_W / 2,
    ballX: W / 2,
    ballY: PADDLE_Y - BALL_R - 2,
    dx: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
    dy: -BALL_SPEED,
    bricks: makeBricks(),
    score: 0,
    lives: MAX_LIVES,
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
        startTime: Date.now(),
        dx: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
        dy: -BALL_SPEED,
      };

    case "PADDLE": {
      if (s.phase !== "playing") return s;
      const x = Math.max(0, Math.min(W - PADDLE_W, a.x - PADDLE_W / 2));
      return { ...s, paddleX: x, interactions: s.interactions + 1 };
    }

    case "TICK": {
      if (s.phase !== "playing") return s;

      let { ballX, ballY, dx, dy, bricks, score, lives, paddleX } = s;
      let nx = ballX + dx;
      let ny = ballY + dy;

      // Wall bounces
      if (nx - BALL_R <= 0 || nx + BALL_R >= W) {
        dx = -dx;
        nx = ballX + dx;
      }
      if (ny - BALL_R <= 0) {
        dy = -dy;
        ny = ballY + dy;
      }

      // Paddle bounce
      if (
        dy > 0 &&
        ny + BALL_R >= PADDLE_Y &&
        ny + BALL_R <= PADDLE_Y + PADDLE_H + 4 &&
        nx >= paddleX &&
        nx <= paddleX + PADDLE_W
      ) {
        dy = -Math.abs(dy);
        // Angle based on hit position
        const hitPos = (nx - paddleX) / PADDLE_W; // 0..1
        const angle = (hitPos - 0.5) * 1.2; // -0.6..0.6
        const speed = Math.sqrt(dx * dx + dy * dy);
        dx = speed * Math.sin(angle * Math.PI);
        dy = -speed * Math.cos(angle * Math.PI);
        ny = PADDLE_Y - BALL_R - 1;
      }

      // Brick collision
      let newBricks = bricks;
      let hitBrick = false;
      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];
        if (!b.alive) continue;
        if (nx + BALL_R > b.x && nx - BALL_R < b.x + b.w && ny + BALL_R > b.y && ny - BALL_R < b.y + b.h) {
          if (!hitBrick) {
            newBricks = [...bricks];
            hitBrick = true;
          }
          newBricks[i] = { ...b, alive: false };
          score += (BRICK_ROWS - b.row) * 10;

          // Determine bounce direction
          const overlapLeft = nx + BALL_R - b.x;
          const overlapRight = b.x + b.w - (nx - BALL_R);
          const overlapTop = ny + BALL_R - b.y;
          const overlapBottom = b.y + b.h - (ny - BALL_R);
          const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);
          if (minOverlap === overlapTop || minOverlap === overlapBottom) {
            dy = -dy;
          } else {
            dx = -dx;
          }
          break; // one brick per frame
        }
      }

      // Ball lost (bottom)
      if (ny + BALL_R >= H) {
        const newLives = lives - 1;
        if (newLives <= 0) {
          return { ...s, phase: "lost", bricks: newBricks, score, lives: 0 };
        }
        return {
          ...s,
          bricks: newBricks,
          score,
          lives: newLives,
          ballX: W / 2,
          ballY: PADDLE_Y - BALL_R - 2,
          dx: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
          dy: -BALL_SPEED,
        };
      }

      // All bricks cleared?
      const allCleared = (hitBrick ? newBricks : bricks).every((b) => !b.alive);
      if (allCleared) {
        return { ...s, phase: "won", bricks: newBricks, score, ballX: nx, ballY: ny };
      }

      return {
        ...s,
        ballX: nx,
        ballY: ny,
        dx,
        dy,
        bricks: hitBrick ? newBricks : bricks,
        score,
      };
    }

    case "RESET":
      return init();

    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameBreakout() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Game loop
  useEffect(() => {
    if (s.phase === "playing") {
      const tick = () => {
        dispatch({ type: "TICK" });
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [s.phase]);

  // Draw
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, W, H);

    // Bricks
    for (const b of s.bricks) {
      if (!b.alive) continue;
      ctx.fillStyle = b.color;
      ctx.beginPath();
      ctx.roundRect(b.x, b.y, b.w, b.h, 3);
      ctx.fill();
      // Highlight
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillRect(b.x + 2, b.y + 1, b.w - 4, b.h / 3);
    }

    // Paddle
    const grad = ctx.createLinearGradient(s.paddleX, PADDLE_Y, s.paddleX, PADDLE_Y + PADDLE_H);
    grad.addColorStop(0, "#60A5FA");
    grad.addColorStop(1, "#2563EB");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(s.paddleX, PADDLE_Y, PADDLE_W, PADDLE_H, 4);
    ctx.fill();

    // Ball
    ctx.fillStyle = "#FBBF24";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#FBBF24";
    ctx.beginPath();
    ctx.arc(s.ballX, s.ballY, BALL_R, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // HUD
    ctx.fillStyle = "white";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${s.score}`, 8, 20);
    ctx.textAlign = "right";
    ctx.fillText(`${"❤️".repeat(s.lives)}`, W - 8, 20);
  }, [s.ballX, s.ballY, s.paddleX, s.bricks, s.score, s.lives]);

  // Mouse / touch paddle control
  const handlePointer = useCallback(
    (clientX: number) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((clientX - rect.left) / rect.width) * W;
      dispatch({ type: "PADDLE", x });
    },
    [],
  );

  // Keyboard
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    let keyDir = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft") keyDir = -1;
      if (e.code === "ArrowRight") keyDir = 1;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" && keyDir === -1) keyDir = 0;
      if (e.code === "ArrowRight" && keyDir === 1) keyDir = 0;
    };
    if (s.phase === "playing") {
      interval = setInterval(() => {
        if (keyDir !== 0) {
          dispatch({ type: "PADDLE", x: (canvasRef.current ? 0 : 0) + s.paddleX + PADDLE_W / 2 + keyDir * 12 });
        }
      }, 16);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKeyUp);
      if (interval) clearInterval(interval);
    };
  }, [s.phase, s.paddleX]);

  // Emit on complete
  const totalBricks = BRICK_ROWS * BRICK_COLS;
  useEffect(() => {
    if (s.phase === "won" || s.phase === "lost") {
      if (s.phase === "won") hapticCelebration();
      else hapticError();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "breakout",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.score,
        maxScore: totalBricks * BRICK_ROWS * 10,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.score, totalBricks]);

  const stars = useMemo(() => {
    const cleared = s.bricks.filter((b) => !b.alive).length;
    const pct = cleared / totalBricks;
    if (pct >= 1) return 3;
    if (pct >= 0.6) return 2;
    if (pct >= 0.3) return 1;
    return 0;
  }, [s.bricks, totalBricks]);

  const isOver = s.phase === "won" || s.phase === "lost";

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-indigo-50 to-slate-50 p-6 dark:from-indigo-950/40 dark:to-slate-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-yellow-500" aria-hidden />
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">Breakout</h2>
        </div>
        <MascotFriend id="pixel" mood="happy" size="sm" />
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="cursor-pointer rounded-2xl shadow-lg"
          onClick={() => s.phase === "ready" && dispatch({ type: "START" })}
          onMouseMove={(e) => handlePointer(e.clientX)}
          onTouchMove={(e) => { e.preventDefault(); handlePointer(e.touches[0].clientX); }}
        />

        {s.phase === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/40">
            <p className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Breakout</p>
            <p className="mb-4 text-sm text-white/80">Move your paddle to bounce the ball &amp; break bricks!</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
              Start Game
            </PhysicalButton>
          </div>
        )}

        {isOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/50"
          >
            <Trophy className="mb-2 h-10 w-10 text-amber-400" />
            <p className="text-2xl font-bold text-white">{s.phase === "won" ? "You Win!" : "Game Over"}</p>
            <div className="my-2 text-4xl" aria-label={`${stars} stars`}>
              {"★".repeat(stars)}{"☆".repeat(3 - stars)}
            </div>
            <p className="mb-3 text-xl font-bold text-white">Score: {s.score}</p>
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
              <RotateCcw className="mr-2 h-4 w-4" /> Play Again
            </PhysicalButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
