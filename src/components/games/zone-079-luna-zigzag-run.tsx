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
const CW = 360;
const CH = 500;
const PATH_W = 90;
const BALL_R = 12;
const SPEED = 3.5;
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "complete";

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone079LunaZigzagRun() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const phaseRef = useRef<Phase>("ready");
  const interactionsRef = useRef(0);

  const stateRef = useRef({
    ballX: CW / 2,
    ballY: CH - 60,
    dir: 1 as 1 | -1, // +1 = right, -1 = left
    score: 0,
    // path: array of wall X segments scrolling downward
    walls: [] as Array<{ x: number; y: number }>,
    // camera offset (world scrolled up)
    cameraY: 0,
  });

  const rafRef = useRef<number>(0);

  const buildWalls = useCallback(() => {
    const walls: Array<{ x: number; y: number }> = [];
    let curX = CW / 2 - PATH_W / 2 - 20;
    let dir = 1;
    for (let y = 0; y > -2000; y -= 40) {
      walls.push({ x: curX, y });
      curX += dir * 45;
      if (curX < 10 || curX > CW - PATH_W - 10) dir = -dir;
    }
    return walls;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, CW, CH);

    // Draw path walls
    for (const seg of s.walls) {
      const sy = seg.y + s.cameraY;
      if (sy < -50 || sy > CH + 10) continue;
      // left wall
      ctx.fillStyle = "#7c3aed";
      ctx.fillRect(0, sy, seg.x, 40);
      // right wall
      ctx.fillRect(seg.x + PATH_W, sy, CW - seg.x - PATH_W, 40);
    }

    // HUD
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 16px monospace";
    ctx.fillText(`${s.score}`, CW / 2 - 15, 28);

    // Ball
    const ballScreenY = CH - 60;
    const gradient = ctx.createRadialGradient(s.ballX, ballScreenY, 2, s.ballX, ballScreenY, BALL_R);
    gradient.addColorStop(0, "#fde68a");
    gradient.addColorStop(1, "#f59e0b");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(s.ballX, ballScreenY, BALL_R, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  const getWallAtBall = useCallback(() => {
    const s = stateRef.current;
    const ballWorldY = CH - 60 - s.cameraY;
    let closest: (typeof s.walls)[0] | null = null;
    let minDist = 999;
    for (const w of s.walls) {
      const d = Math.abs(w.y - ballWorldY);
      if (d < minDist) { minDist = d; closest = w; }
    }
    return closest;
  }, []);

  const gameLoop = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    const s = stateRef.current;

    // Move ball horizontally
    s.ballX += s.dir * SPEED;

    // Scroll camera
    s.cameraY += SPEED * 0.6;
    s.score = Math.floor(s.cameraY / 20);
    setScore(s.score);

    // Check collision with walls
    const wall = getWallAtBall();
    if (wall) {
      if (s.ballX - BALL_R < wall.x || s.ballX + BALL_R > wall.x + PATH_W) {
        hapticError();
        cancelAnimationFrame(rafRef.current);
        setPhase("complete");
        phaseRef.current = "complete";
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-079",
          score: s.score,
          maxScore: 500,
          elapsedMs: Date.now() - startTime,
          interactions: interactionsRef.current,
          difficulty: "medium",
        });
        if (s.score >= 200) mascot.speak("Amazing run! Zigzag master!", "celebrate");
        else mascot.speak("Good try! Tap to turn before hitting walls.", "encourage");
        draw();
        return;
      }
    }

    draw();
    rafRef.current = requestAnimationFrame(gameLoop);
  }, [draw, getWallAtBall, mascot, startTime]);

  const startGame = useCallback(() => {
    const walls = buildWalls();
    stateRef.current = {
      ballX: CW / 2,
      ballY: CH - 60,
      dir: 1,
      score: 0,
      walls,
      cameraY: 0,
    };
    setScore(0);
    setPhase("playing");
    phaseRef.current = "playing";
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(gameLoop);
    mascot.speak("Tap to flip direction! Stay on the path!", "happy");
  }, [buildWalls, gameLoop, mascot]);

  const flipDirection = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    stateRef.current.dir = (stateRef.current.dir === 1 ? -1 : 1) as 1 | -1;
    hapticSelection();
    interactionsRef.current++;
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowLeft" || e.key === "ArrowRight") flipDirection();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(rafRef.current);
    };
  }, [flipDirection]);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="luna" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Luna Zigzag Run</h2>
          <p className="text-xs text-stone-500">Tap to flip direction — stay on the path!</p>
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
            <p className="text-4xl">🌙</p>
            <h3 className="text-lg font-black text-stone-800">Zigzag Run</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              The ball bounces left and right automatically. Tap the screen (or press Space) to flip its direction and keep it inside the zigzag path!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Running!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2">
            <canvas
              ref={canvasRef}
              width={CW}
              height={CH}
              className="rounded-xl border border-violet-700 cursor-pointer touch-none max-w-full"
              style={{ maxWidth: "100%", height: "auto" }}
              onClick={flipDirection}
              onTouchStart={flipDirection}
            />
            <p className="text-xs text-stone-500">Tap / Space to flip direction</p>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{score >= 200 ? "🏆" : "🌙"}</p>
            <h3 className="text-lg font-black text-stone-800">You went off-path!</h3>
            <p className="text-3xl font-black text-violet-600">{score} m</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Run Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
