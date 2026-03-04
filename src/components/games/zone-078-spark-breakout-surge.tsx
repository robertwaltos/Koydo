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

// ─── Constants ────────────────────────────────────────────────────────────────
const CW = 480;
const CH = 360;
const PADDLE_W = 80;
const PADDLE_H = 12;
const BALL_R = 8;
const BRICK_ROWS = 4;
const BRICK_COLS = 10;
const BRICK_W = (CW - 20) / BRICK_COLS;
const BRICK_H = 22;
const BRICK_GAP = 3;
const BRICK_TOP = 40;
const BALL_SPEED = 5;
const SESSION_ID = createLegacySessionId();

const BRICK_COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e"];

type Phase = "ready" | "playing" | "complete";

type BrickState = { alive: boolean; hits: number };

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone078SparkBreakoutSurge() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [startTime] = useState(Date.now());
  const interactionsRef = useRef(0);
  const phaseRef = useRef<Phase>("ready");

  // Game state refs (mutable for rAF loop)
  const stateRef = useRef({
    px: CW / 2 - PADDLE_W / 2,
    bx: CW / 2,
    by: CH - 60,
    vx: BALL_SPEED * 0.7,
    vy: -BALL_SPEED,
    bricks: [] as BrickState[][],
    score: 0,
    lives: 3,
    launched: false,
  });
  const rafRef = useRef<number>(0);
  const mouseXRef = useRef(CW / 2);

  const initBricks = useCallback((): BrickState[][] => {
    return Array.from({ length: BRICK_ROWS }, () =>
      Array.from({ length: BRICK_COLS }, () => ({ alive: true, hits: 0 }))
    );
  }, []);

  const totalBricks = BRICK_ROWS * BRICK_COLS;

  function bricksAlive(bricks: BrickState[][]): number {
    return bricks.flat().filter((b) => b.alive).length;
  }

  const endRound = useCallback((won: boolean) => {
    cancelAnimationFrame(rafRef.current);
    setPhase("complete");
    phaseRef.current = "complete";
    const finalScore = stateRef.current.score;
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-078",
      score: finalScore,
      maxScore: totalBricks * 10 * 3,
      elapsedMs: Date.now() - startTime,
      interactions: interactionsRef.current,
      difficulty: "medium",
    });
    if (won) {
      hapticSuccess();
      mascot.speak("All bricks cleared! Spark champion!", "celebrate");
    } else {
      mascot.speak("Nice effort! Keep the ball alive next time.", "encourage");
    }
  }, [mascot, startTime, totalBricks]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    // Background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, CW, CH);

    // Bricks
    for (let r = 0; r < BRICK_ROWS; r++) {
      for (let c = 0; c < BRICK_COLS; c++) {
        if (!s.bricks[r]?.[c]?.alive) continue;
        const x = 10 + c * BRICK_W + BRICK_GAP / 2;
        const y = BRICK_TOP + r * (BRICK_H + BRICK_GAP);
        ctx.fillStyle = BRICK_COLORS[r] ?? "#ccc";
        ctx.beginPath();
        ctx.roundRect(x, y, BRICK_W - BRICK_GAP, BRICK_H, 4);
        ctx.fill();
      }
    }

    // Paddle
    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.roundRect(s.px, CH - PADDLE_H - 10, PADDLE_W, PADDLE_H, 6);
    ctx.fill();

    // Ball
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(s.bx, s.by, BALL_R, 0, Math.PI * 2);
    ctx.fill();

    // HUD
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 13px monospace";
    ctx.fillText(`Score: ${s.score}`, 10, 22);
    ctx.fillText(`Lives: ${"❤️".repeat(s.lives)}`, CW - 90, 22);
  }, []);

  const gameLoop = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    const s = stateRef.current;

    // Move paddle toward mouse
    const targetPX = Math.max(0, Math.min(CW - PADDLE_W, mouseXRef.current - PADDLE_W / 2));
    s.px += (targetPX - s.px) * 0.18;

    if (!s.launched) {
      s.bx = s.px + PADDLE_W / 2;
      s.by = CH - PADDLE_H - 10 - BALL_R;
    } else {
      // Move ball
      s.bx += s.vx;
      s.by += s.vy;

      // Wall bounces
      if (s.bx - BALL_R < 0) { s.bx = BALL_R; s.vx = Math.abs(s.vx); }
      if (s.bx + BALL_R > CW) { s.bx = CW - BALL_R; s.vx = -Math.abs(s.vx); }
      if (s.by - BALL_R < 0) { s.by = BALL_R; s.vy = Math.abs(s.vy); }

      // Paddle bounce
      if (
        s.by + BALL_R >= CH - PADDLE_H - 10 &&
        s.bx >= s.px - BALL_R &&
        s.bx <= s.px + PADDLE_W + BALL_R &&
        s.vy > 0
      ) {
        hapticSelection();
        const rel = (s.bx - (s.px + PADDLE_W / 2)) / (PADDLE_W / 2);
        s.vx = rel * BALL_SPEED * 1.2;
        s.vy = -Math.sqrt(BALL_SPEED * BALL_SPEED - s.vx * s.vx || BALL_SPEED);
        s.by = CH - PADDLE_H - 10 - BALL_R;
      }

      // Fell off bottom
      if (s.by - BALL_R > CH) {
        s.lives -= 1;
        setLives(s.lives);
        hapticError();
        if (s.lives <= 0) {
          draw();
          endRound(false);
          return;
        }
        // Reset ball
        s.launched = false;
        s.bx = s.px + PADDLE_W / 2;
        s.by = CH - PADDLE_H - 10 - BALL_R;
        mascot.speak("Ball lost! Keep going!", "encourage");
      }

      // Brick collisions
      let hitAny = false;
      for (let r = 0; r < BRICK_ROWS; r++) {
        for (let c = 0; c < BRICK_COLS; c++) {
          const brick = s.bricks[r]?.[c];
          if (!brick?.alive) continue;
          const bx = 10 + c * BRICK_W + BRICK_GAP / 2;
          const by = BRICK_TOP + r * (BRICK_H + BRICK_GAP);
          const bw = BRICK_W - BRICK_GAP;

          if (
            s.bx + BALL_R > bx &&
            s.bx - BALL_R < bx + bw &&
            s.by + BALL_R > by &&
            s.by - BALL_R < by + BRICK_H
          ) {
            brick.alive = false;
            s.score += 10;
            setScore(s.score);
            hitAny = true;
            const midX = bx + bw / 2;
            const midY = by + BRICK_H / 2;
            if (Math.abs(s.bx - midX) > Math.abs(s.by - midY)) {
              s.vx = -s.vx;
            } else {
              s.vy = -s.vy;
            }
            break;
          }
        }
        if (hitAny) break;
      }

      if (hitAny && bricksAlive(s.bricks) === 0) {
        draw();
        endRound(true);
        return;
      }
    }

    draw();
    rafRef.current = requestAnimationFrame(gameLoop);
  }, [draw, endRound, mascot]);

  const startGame = useCallback(() => {
    const bricks = initBricks();
    stateRef.current = {
      px: CW / 2 - PADDLE_W / 2,
      bx: CW / 2,
      by: CH - 60,
      vx: BALL_SPEED * 0.7,
      vy: -BALL_SPEED,
      bricks,
      score: 0,
      lives: 3,
      launched: false,
    };
    setScore(0);
    setLives(3);
    setPhase("playing");
    phaseRef.current = "playing";
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(gameLoop);
    mascot.speak("Move the paddle to catch the ball! Break all bricks!", "happy");
  }, [gameLoop, initBricks, mascot]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseXRef.current = ((e.clientX - rect.left) / rect.width) * CW;
    interactionsRef.current++;
  };

  const handleCanvasTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !e.touches[0]) return;
    mouseXRef.current = ((e.touches[0].clientX - rect.left) / rect.width) * CW;
    interactionsRef.current++;
  };

  const handleLaunch = () => {
    if (stateRef.current.launched) return;
    stateRef.current.launched = true;
    stateRef.current.vx = BALL_SPEED * 0.7;
    stateRef.current.vy = -BALL_SPEED;
    interactionsRef.current++;
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="spark" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Spark Breakout Surge</h2>
          <p className="text-xs text-stone-500">Smash all the bricks — don't drop the ball!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">🧱</p>
            <h3 className="text-lg font-black text-stone-800">Breakout Surge</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Move your paddle left and right to bounce the ball and smash all the bricks. You have 3 lives!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Launch Ball!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2">
            <canvas
              ref={canvasRef}
              width={CW}
              height={CH}
              className="rounded-xl border border-stone-700 cursor-none touch-none max-w-full"
              style={{ maxWidth: "100%", height: "auto" }}
              onMouseMove={handleCanvasMouseMove}
              onTouchMove={handleCanvasTouchMove}
              onClick={handleLaunch}
              onTouchStart={handleLaunch}
            />
            <p className="text-xs text-stone-500">Move mouse/finger to steer paddle · Tap/click to launch</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{score >= totalBricks * 10 ? "🏆" : "🎯"}</p>
            <h3 className="text-lg font-black text-stone-800">
              {score >= totalBricks * 10 ? "All Bricks Cleared!" : "Game Over"}
            </h3>
            <p className="text-3xl font-black text-orange-500">{score} pts</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Play Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
