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
const CW = 320;
const CH = 480;
const PLAYER_W = 24;
const PLAYER_H = 24;
const PLAT_H = 14;
const GRAVITY = 0.35;
const SCROLL_SPEED = 1.2;
const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "complete";

type Platform = {
  x: number;
  y: number;
  w: number;
  hasSpike: boolean;
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone082PixelShaftDrop() {
  const mascot = useMascot();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const phaseRef = useRef<Phase>("ready");
  const interactionsRef = useRef(0);

  const stateRef = useRef({
    px: CW / 2 - PLAYER_W / 2,
    py: 40,
    vy: 0,
    vx: 0,
    score: 0,
    platforms: [] as Platform[],
    scrollY: 0,
    onGround: false,
    keys: { left: false, right: false },
  });
  const rafRef = useRef<number>(0);

  const generatePlatform = useCallback((baseY: number): Platform => {
    const w = 60 + Math.random() * 80;
    const x = Math.random() * (CW - w - 10) + 5;
    const hasSpike = Math.random() < 0.2;
    return { x, y: baseY, w, hasSpike };
  }, []);

  const initPlatforms = useCallback((): Platform[] => {
    const plats: Platform[] = [];
    // Start platform under player
    plats.push({ x: CW / 2 - 60, y: 80, w: 120, hasSpike: false });
    for (let i = 1; i < 16; i++) {
      plats.push(generatePlatform(80 + i * 60));
    }
    return plats;
  }, [generatePlatform]);

  const endGame = useCallback((finalScore: number) => {
    cancelAnimationFrame(rafRef.current);
    setPhase("complete");
    phaseRef.current = "complete";
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-082",
      score: finalScore,
      maxScore: 300,
      elapsedMs: Date.now() - startTime,
      interactions: interactionsRef.current,
      difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
    if (finalScore >= 150) mascot.speak("Shaft master! Incredible depth!", "celebrate");
    else mascot.speak("You fell! Bounce off platforms to dive deeper.", "encourage");
  }, [mascot, startTime]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, CH);
    bgGrad.addColorStop(0, "#0f172a");
    bgGrad.addColorStop(1, "#1e3a5f");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, CW, CH);

    // Walls
    ctx.fillStyle = "#334155";
    ctx.fillRect(0, 0, 8, CH);
    ctx.fillRect(CW - 8, 0, 8, CH);

    // Platforms
    for (const p of s.platforms) {
      const sy = p.y - s.scrollY;
      if (sy < -PLAT_H || sy > CH + 10) continue;
      ctx.fillStyle = p.hasSpike ? "#ef4444" : "#22d3ee";
      ctx.beginPath();
      ctx.roundRect(p.x, sy, p.w, PLAT_H, 4);
      ctx.fill();
      if (p.hasSpike) {
        ctx.fillStyle = "#fef08a";
        for (let sx = p.x + 10; sx < p.x + p.w - 10; sx += 14) {
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + 7, sy - 10);
          ctx.lineTo(sx + 14, sy);
          ctx.fill();
        }
      }
    }

    // Player
    const screenPY = s.py - s.scrollY;
    const pGrad = ctx.createRadialGradient(s.px + PLAYER_W / 2, screenPY + PLAYER_H / 2, 4, s.px + PLAYER_W / 2, screenPY + PLAYER_H / 2, PLAYER_W / 2);
    pGrad.addColorStop(0, "#fde68a");
    pGrad.addColorStop(1, "#f59e0b");
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.roundRect(s.px, screenPY, PLAYER_W, PLAYER_H, 6);
    ctx.fill();

    // Score
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 14px monospace";
    ctx.fillText(`Depth: ${s.score}`, 16, 24);
  }, []);

  const gameLoop = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    const s = stateRef.current;

    // Input
    if (s.keys.left) s.vx = Math.max(s.vx - 0.5, -5);
    else if (s.keys.right) s.vx = Math.min(s.vx + 0.5, 5);
    else s.vx *= 0.85;

    // Physics
    s.vy += GRAVITY;
    s.px += s.vx;
    s.py += s.vy;

    // Wall clamp
    if (s.px < 8) { s.px = 8; s.vx = Math.abs(s.vx) * 0.6; }
    if (s.px + PLAYER_W > CW - 8) { s.px = CW - 8 - PLAYER_W; s.vx = -Math.abs(s.vx) * 0.6; }

    // Scroll
    s.scrollY += SCROLL_SPEED;
    s.score = Math.floor(s.scrollY / 30);
    setScore(s.score);

    // Platform collision (only falling down)
    s.onGround = false;
    for (const p of s.platforms) {
      const sy = p.y - s.scrollY;
      if (
        s.vy > 0 &&
        s.px + PLAYER_W > p.x &&
        s.px < p.x + p.w &&
        s.py + PLAYER_H >= p.y - s.scrollY &&
        s.py + PLAYER_H <= p.y - s.scrollY + PLAYER_H * 0.5 + s.vy
      ) {
        if (p.hasSpike) {
          draw();
          endGame(s.score);
          return;
        }
        s.py = p.y - s.scrollY - PLAYER_H;
        s.vy = 0;
        s.onGround = true;
        hapticSelection();
      }
      void sy;
    }

    // Death: scroll past top
    if (s.py - s.scrollY < -PLAYER_H * 2) {
      draw();
      endGame(s.score);
      return;
    }

    // Spawn new platforms
    const maxY = Math.max(...s.platforms.map((p) => p.y));
    if (maxY < s.scrollY + CH + 60) {
      s.platforms.push(generatePlatform(maxY + 55 + Math.random() * 20));
    }
    // Remove old platforms
    s.platforms = s.platforms.filter((p) => p.y > s.scrollY - 100);

    draw();
    rafRef.current = requestAnimationFrame(gameLoop);
  }, [draw, endGame, generatePlatform]);

  const startGame = useCallback(() => {
    const plats = initPlatforms();
    stateRef.current = {
      px: CW / 2 - PLAYER_W / 2,
      py: 50,
      vy: 0,
      vx: 0,
      score: 0,
      platforms: plats,
      scrollY: 0,
      onGround: false,
      keys: { left: false, right: false },
    };
    setScore(0);
    setPhase("playing");
    phaseRef.current = "playing";
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(gameLoop);
    mascot.speak("Fall as deep as you can! Avoid red spikes!", "happy");
  }, [gameLoop, initPlatforms, mascot]);

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (phaseRef.current !== "playing") return;
      interactionsRef.current++;
      if (e.key === "ArrowLeft" || e.key === "a") stateRef.current.keys.left = true;
      if (e.key === "ArrowRight" || e.key === "d") stateRef.current.keys.right = true;
    };
    const onUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") stateRef.current.keys.left = false;
      if (e.key === "ArrowRight" || e.key === "d") stateRef.current.keys.right = false;
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleTouchLeft = (pressed: boolean) => {
    stateRef.current.keys.left = pressed;
    if (pressed) interactionsRef.current++;
  };
  const handleTouchRight = (pressed: boolean) => {
    stateRef.current.keys.right = pressed;
    if (pressed) interactionsRef.current++;
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="pixel" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Pixel Shaft Drop</h2>
          <p className="text-xs text-stone-500">Fall as deep as possible — avoid the spikes!</p>
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
            <p className="text-4xl">⬇️</p>
            <h3 className="text-lg font-black text-stone-800">Shaft Drop</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Bounce on platforms and fall as deep as you can. Avoid spiked red platforms and don&apos;t get pushed off the top!
            </p>
            <p className="text-xs text-stone-400">← → or A D to move • Touch: use buttons below</p>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Falling!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2">
            <canvas
              ref={canvasRef}
              width={CW}
              height={CH}
              className="rounded-xl border border-slate-700 touch-none max-w-full"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            {/* Mobile controls */}
            <div className="flex gap-8">
              <button
                className="w-14 h-14 rounded-full bg-slate-700 text-white text-xl font-black"
                onPointerDown={() => handleTouchLeft(true)}
                onPointerUp={() => handleTouchLeft(false)}
                onPointerLeave={() => handleTouchLeft(false)}
              >←</button>
              <button
                className="w-14 h-14 rounded-full bg-slate-700 text-white text-xl font-black"
                onPointerDown={() => handleTouchRight(true)}
                onPointerUp={() => handleTouchRight(false)}
                onPointerLeave={() => handleTouchRight(false)}
              >→</button>
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-4xl">{score >= 150 ? "🏆" : "💫"}</p>
            <h3 className="text-lg font-black text-stone-800">Shaft Run Over!</h3>
            <p className="text-3xl font-black text-blue-600">{score}</p>
            <p className="text-sm text-stone-500">depth reached</p>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Drop Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
