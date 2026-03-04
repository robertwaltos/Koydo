"use client";

import { useCallback, useEffect, useReducer, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Gamepad2 } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticSelection,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */

const W = 400;
const H = 300;
const PADDLE_W = 70;
const PADDLE_H = 10;
const BALL_R = 6;
const AI_SPEED = 3.2;
const WINNING_SCORE = 7;

type Phase = "ready" | "playing" | "won" | "lost";

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  startTime: number;
  interactions: number;
  playerY: number;
  aiY: number;
  ballX: number;
  ballY: number;
  ballDx: number;
  ballDy: number;
  ballSpeed: number;
  playerScore: number;
  aiScore: number;
  serving: boolean;
}

type Action =
  | { type: "START" }
  | { type: "TICK" }
  | { type: "PADDLE_MOVE"; y: number }
  | { type: "RESET" };

function init(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    startTime: 0,
    interactions: 0,
    playerY: H / 2,
    aiY: H / 2,
    ballX: W / 2,
    ballY: H / 2,
    ballDx: 3,
    ballDy: 2,
    ballSpeed: 4,
    playerScore: 0,
    aiScore: 0,
    serving: true,
  };
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now() };

    case "PADDLE_MOVE":
      return { ...s, playerY: clamp(a.y, PADDLE_H / 2, H - PADDLE_H / 2), interactions: s.interactions + 1 };

    case "TICK": {
      if (s.phase !== "playing") return s;

      let { ballX, ballY, ballDx, ballDy, playerScore, aiScore, playerY, aiY, serving, ballSpeed } = s;

      // Serve
      if (serving) {
        ballX = W / 2;
        ballY = H / 2;
        const angle = (Math.random() - 0.5) * Math.PI * 0.6;
        const dir = Math.random() > 0.5 ? 1 : -1;
        ballDx = Math.cos(angle) * ballSpeed * dir;
        ballDy = Math.sin(angle) * ballSpeed;
        serving = false;
      }

      // Move ball
      ballX += ballDx;
      ballY += ballDy;

      // Top/bottom walls
      if (ballY - BALL_R < 0) { ballY = BALL_R; ballDy = Math.abs(ballDy); }
      if (ballY + BALL_R > H) { ballY = H - BALL_R; ballDy = -Math.abs(ballDy); }

      // Player paddle (left side, x=20)
      const px = 20;
      if (
        ballDx < 0 &&
        ballX - BALL_R <= px + 4 &&
        ballX - BALL_R >= px - 4 &&
        ballY >= playerY - PADDLE_H / 2 - BALL_R &&
        ballY <= playerY + PADDLE_H / 2 + BALL_R
      ) {
        const offset = (ballY - playerY) / (PADDLE_H / 2);
        const angle = offset * (Math.PI / 4);
        const speed = Math.min(ballSpeed + 0.2, 7);
        ballDx = Math.cos(angle) * speed;
        ballDy = Math.sin(angle) * speed;
        ballX = px + 4 + BALL_R;
        ballSpeed = speed;
      }

      // AI paddle (right side, x=W-20)
      const ax = W - 20;
      if (
        ballDx > 0 &&
        ballX + BALL_R >= ax - 4 &&
        ballX + BALL_R <= ax + 4 &&
        ballY >= aiY - PADDLE_H / 2 - BALL_R &&
        ballY <= aiY + PADDLE_H / 2 + BALL_R
      ) {
        const offset = (ballY - aiY) / (PADDLE_H / 2);
        const angle = Math.PI - offset * (Math.PI / 4);
        const speed = Math.min(ballSpeed + 0.2, 7);
        ballDx = Math.cos(angle) * speed;
        ballDy = Math.sin(angle) * speed;
        ballX = ax - 4 - BALL_R;
        ballSpeed = speed;
      }

      // AI movement
      const aiTarget = ballY;
      if (aiY < aiTarget - 3) aiY = Math.min(aiY + AI_SPEED, H - PADDLE_H / 2);
      else if (aiY > aiTarget + 3) aiY = Math.max(aiY - AI_SPEED, PADDLE_H / 2);

      // Score
      if (ballX - BALL_R < 0) {
        aiScore++;
        serving = true;
        ballSpeed = 4;
      }
      if (ballX + BALL_R > W) {
        playerScore++;
        serving = true;
        ballSpeed = 4;
      }

      // Check win/lose
      if (playerScore >= WINNING_SCORE) return { ...s, phase: "won", playerScore, aiScore, ballX, ballY, ballDx, ballDy, aiY, ballSpeed };
      if (aiScore >= WINNING_SCORE) return { ...s, phase: "lost", playerScore, aiScore, ballX, ballY, ballDx, ballDy, aiY, ballSpeed };

      return { ...s, ballX, ballY, ballDx, ballDy, playerScore, aiScore, aiY, serving, ballSpeed };
    }

    case "RESET":
      return init();

    default:
      return s;
  }
}

/* ─── component ─── */

export default function GamePong() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const rafRef = useRef<number>(0);

  // Game loop
  useEffect(() => {
    if (s.phase !== "playing") return;
    let running = true;
    const tick = () => {
      if (!running) return;
      dispatch({ type: "TICK" });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { running = false; cancelAnimationFrame(rafRef.current); };
  }, [s.phase]);

  // Draw
  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, W, H);

    // Center line
    ctx.setLineDash([5, 8]);
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.beginPath();
    ctx.moveTo(W / 2, 0);
    ctx.lineTo(W / 2, H);
    ctx.stroke();
    ctx.setLineDash([]);

    // Player paddle
    ctx.fillStyle = "#60a5fa";
    ctx.shadowColor = "#3b82f6";
    ctx.shadowBlur = 8;
    ctx.fillRect(16, s.playerY - PADDLE_H / 2, 8, PADDLE_H);

    // AI paddle
    ctx.fillStyle = "#f87171";
    ctx.shadowColor = "#ef4444";
    ctx.fillRect(W - 24, s.aiY - PADDLE_H / 2, 8, PADDLE_H);

    // Ball
    ctx.fillStyle = "#fbbf24";
    ctx.shadowColor = "#f59e0b";
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(s.ballX, s.ballY, BALL_R, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;

    // Scores
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "bold 32px monospace";
    ctx.textAlign = "center";
    ctx.fillText(String(s.playerScore), W / 2 - 50, 40);
    ctx.fillText(String(s.aiScore), W / 2 + 50, 40);
  }, [s]);

  // Mouse/touch paddle control
  const handleMove = useCallback(
    (clientY: number) => {
      const cvs = canvasRef.current;
      if (!cvs) return;
      const rect = cvs.getBoundingClientRect();
      const ratio = H / rect.height;
      const y = (clientY - rect.top) * ratio;
      dispatch({ type: "PADDLE_MOVE", y });
    },
    [],
  );

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const onMouse = (e: MouseEvent) => handleMove(e.clientY);
    const onTouch = (e: TouchEvent) => { e.preventDefault(); handleMove(e.touches[0].clientY); };
    cvs.addEventListener("mousemove", onMouse);
    cvs.addEventListener("touchmove", onTouch, { passive: false });
    return () => { cvs.removeEventListener("mousemove", onMouse); cvs.removeEventListener("touchmove", onTouch); };
  }, [handleMove]);

  // Keyboard
  useEffect(() => {
    const keyState: Record<string, boolean> = {};
    const onDown = (e: KeyboardEvent) => { keyState[e.code] = true; };
    const onUp = (e: KeyboardEvent) => { keyState[e.code] = false; };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);

    const interval = setInterval(() => {
      if (s.phase !== "playing") return;
      if (keyState["ArrowUp"] || keyState["KeyW"]) dispatch({ type: "PADDLE_MOVE", y: s.playerY - 5 });
      if (keyState["ArrowDown"] || keyState["KeyS"]) dispatch({ type: "PADDLE_MOVE", y: s.playerY + 5 });
    }, 16);

    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      clearInterval(interval);
    };
  }, [s.phase, s.playerY]);

  // Emit on complete
  useEffect(() => {
    if (s.phase === "won") {
      hapticCelebration();
      setMood("cheering");
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "pong",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.playerScore,
        maxScore: WINNING_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
    if (s.phase === "lost") setMood("thinking");
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.playerScore, setMood]);

  const stars = useMemo(() => {
    if (s.phase !== "won") return 0;
    if (s.aiScore <= 1) return 3;
    if (s.aiScore <= 3) return 2;
    return 1;
  }, [s.phase, s.aiScore]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-indigo-50 to-blue-50 p-6 dark:from-indigo-950/40 dark:to-blue-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-blue-600" aria-hidden />
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">Pong</h2>
        </div>
        <MascotFriend id="pixel" mood="happy" size="sm" />
      </div>

      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col items-center gap-5 text-center"
        >
          <p className="max-w-sm text-lg text-blue-700 dark:text-blue-300">
            First to <span className="font-bold">{WINNING_SCORE}</span> wins!
          </p>
          <p className="text-sm text-blue-500">Move mouse, touch, or ↑↓ keys to control your paddle</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Game
          </PhysicalButton>
        </motion.div>
      )}

      {(s.phase === "playing" || s.phase === "won" || s.phase === "lost") && (
        <div className="flex flex-col items-center gap-3">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="cursor-none rounded-xl shadow-lg"
            style={{ maxWidth: "100%", touchAction: "none" }}
          />

          {(s.phase === "won" || s.phase === "lost") && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-2 flex flex-col items-center gap-3 text-center"
            >
              {s.phase === "won" ? (
                <>
                  <Trophy className="h-10 w-10 text-amber-500" />
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">You Win!</p>
                  <div className="text-4xl" aria-label={`${stars} stars`}>
                    {"★".repeat(stars)}{"☆".repeat(3 - stars)}
                  </div>
                </>
              ) : (
                <p className="text-2xl font-bold text-red-500">AI Wins!</p>
              )}
              <p className="text-sm text-blue-500">
                {s.playerScore} – {s.aiScore}
              </p>
              <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
                <RotateCcw className="mr-2 h-4 w-4" /> Play Again
              </PhysicalButton>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
