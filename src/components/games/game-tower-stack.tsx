"use client";

import { useEffect, useMemo, useReducer, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Building2 } from "lucide-react";
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
const BLOCK_HEIGHT = 20;
const BLOCK_SPEED_INIT = 2;
const BLOCK_WIDTH_INIT = 100;

type Phase = "ready" | "playing" | "done";

interface Block {
  x: number;
  width: number;
  y: number;
}

interface State {
  phase: Phase;
  sessionId: string;
  stack: Block[];
  moving: Block | null;
  direction: number;
  speed: number;
  score: number;
  startTime: number;
  interactions: number;
}

const init = (): State => ({
  phase: "ready", sessionId: createLegacySessionId(),
  stack: [{ x: (CANVAS_W - BLOCK_WIDTH_INIT) / 2, width: BLOCK_WIDTH_INIT, y: CANVAS_H - BLOCK_HEIGHT }],
  moving: null, direction: 1, speed: BLOCK_SPEED_INIT, score: 0, startTime: 0, interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "PLACE" }
  | { type: "TICK" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const base: Block = { x: (CANVAS_W - BLOCK_WIDTH_INIT) / 2, width: BLOCK_WIDTH_INIT, y: CANVAS_H - BLOCK_HEIGHT };
      const moving: Block = { x: 0, width: BLOCK_WIDTH_INIT, y: CANVAS_H - BLOCK_HEIGHT * 2 };
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), stack: [base], moving, startTime: Date.now() };
    }
    case "TICK": {
      if (s.phase !== "playing" || !s.moving) return s;
      let x = s.moving.x + s.speed * s.direction;
      let dir = s.direction;
      if (x + s.moving.width > CANVAS_W) { x = CANVAS_W - s.moving.width; dir = -1; }
      if (x < 0) { x = 0; dir = 1; }
      return { ...s, moving: { ...s.moving, x }, direction: dir };
    }
    case "PLACE": {
      if (s.phase !== "playing" || !s.moving) return s;
      const top = s.stack[s.stack.length - 1]!;
      const m = s.moving;
      /* calculate overlap */
      const overlapLeft = Math.max(top.x, m.x);
      const overlapRight = Math.min(top.x + top.width, m.x + m.width);
      const overlapWidth = overlapRight - overlapLeft;
      if (overlapWidth <= 0) {
        /* missed entirely */
        return { ...s, phase: "done", moving: null };
      }
      const placed: Block = { x: overlapLeft, width: overlapWidth, y: m.y };
      const stack = [...s.stack, placed];
      const nextY = m.y - BLOCK_HEIGHT;
      const nextSpeed = s.speed + 0.15;
      const next: Block = { x: 0, width: overlapWidth, y: nextY };
      return {
        ...s, stack, moving: next, speed: nextSpeed,
        score: s.score + 1, interactions: s.interactions + 1,
        phase: nextY < 0 ? "done" : "playing",
      };
    }
    default:
      return s;
  }
}

export default function GameTowerStack({ width = 400, height = 520 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setMood } = useMascot();

  const stars = useMemo(() => {
    if (s.phase !== "done") return 0;
    if (s.score >= 20) return 3;
    if (s.score >= 10) return 2;
    if (s.score >= 3) return 1;
    return 0;
  }, [s.phase, s.score]);

  /* game loop */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 16);
    return () => clearInterval(id);
  }, [s.phase]);

  /* draw */
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    /* sky gradient */
    const grad = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
    grad.addColorStop(0, "#bfe6ff");
    grad.addColorStop(1, "#e0f2fe");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    /* offset to keep top visible */
    const topBlock = s.stack[s.stack.length - 1]!;
    const offsetY = Math.max(0, CANVAS_H - BLOCK_HEIGHT * 3 - topBlock.y);

    const colors = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#8B5CF6", "#EC4899"];

    s.stack.forEach((b, i) => {
      ctx.fillStyle = colors[i % colors.length]!;
      ctx.fillRect(b.x, b.y + offsetY, b.width, BLOCK_HEIGHT - 1);
      ctx.strokeStyle = "rgba(0,0,0,0.2)";
      ctx.strokeRect(b.x, b.y + offsetY, b.width, BLOCK_HEIGHT - 1);
    });

    if (s.moving) {
      ctx.fillStyle = colors[s.stack.length % colors.length]!;
      ctx.globalAlpha = 0.8;
      ctx.fillRect(s.moving.x, s.moving.y + offsetY, s.moving.width, BLOCK_HEIGHT - 1);
      ctx.globalAlpha = 1;
    }
  }, [s.stack, s.moving]);

  useEffect(() => {
    if (s.phase !== "done") return;
    if (s.score >= 3) { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-tower-stack", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score, maxScore: 25,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  /* keyboard / touch */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === "Enter") dispatch({ type: "PLACE" });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [s.phase]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={s.phase === "done" ? (s.score >= 3 ? "happy" : "sad") : "idle"} size="sm" />
        <div className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-800">
          <Building2 className="mr-1 inline h-4 w-4" />{s.score} floors
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Building2 className="h-12 w-12 text-indigo-500" />
          <p className="text-3xl font-bold text-slate-800">Tower Stack</p>
          <p className="text-sm text-slate-600">Tap to stack blocks as high as you can!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Building</PhysicalButton>
        </div>
      )}

      {s.phase !== "ready" && (
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="cursor-pointer rounded-xl border-2 border-slate-300 shadow-lg"
          onClick={() => { dispatch({ type: "PLACE" }); hapticSelection(); }}
        />
      )}

      {s.phase === "done" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{s.score} Floors Tall!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
