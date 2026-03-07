"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eraser, Trophy } from "lucide-react";
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

/* ─── types ─── */
type Phase = "ready" | "drawing" | "scored" | "complete";

type Target = {
  name: string;
  emoji: string;
  // SVG path for left-half target silhouette (drawn in 0-150, 0-300 space)
  path: string;
};

const TARGETS: Target[] = [
  {
    name: "Butterfly",
    emoji: "🦋",
    path: "M 140 80 Q 100 20 60 80 Q 20 140 60 180 Q 100 220 140 160 L 140 80 Z",
  },
  {
    name: "Heart",
    emoji: "❤️",
    path: "M 140 100 Q 140 50 100 50 Q 60 50 60 100 Q 60 160 140 230 L 140 100 Z",
  },
  {
    name: "Star",
    emoji: "⭐",
    path: "M 140 40 L 110 120 L 30 120 L 95 170 L 75 250 L 140 200 L 140 40 Z",
  },
  {
    name: "Tree",
    emoji: "🌲",
    path: "M 140 40 L 80 120 L 100 120 L 60 200 L 90 200 L 40 280 L 140 280 Z",
  },
  {
    name: "Snowflake",
    emoji: "❄️",
    path: "M 140 30 L 120 80 L 70 60 L 100 110 L 50 130 L 100 150 L 70 200 L 120 180 L 140 230 L 140 30 Z",
  },
];

/* ─── state ─── */
type State = {
  phase: Phase;
  targetIndex: number;
  overlapScore: number;
  completedTargets: number;
  totalScore: number;
  startTime: number;
  interactions: number;
};

type Action =
  | { type: "START" }
  | { type: "SCORE"; overlap: number }
  | { type: "NEXT" };

function initState(): State {
  return {
    phase: "ready",
    targetIndex: 0,
    overlapScore: 0,
    completedTargets: 0,
    totalScore: 0,
    startTime: 0,
    interactions: 0,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...initState(),
        phase: "drawing",
        startTime: Date.now(),
      };
    case "SCORE":
      return {
        ...state,
        phase: "scored",
        overlapScore: action.overlap,
        totalScore: state.totalScore + action.overlap,
        completedTargets: state.completedTargets + 1,
        interactions: state.interactions + 1,
      };
    case "NEXT": {
      const next = state.targetIndex + 1;
      if (next >= TARGETS.length) return { ...state, phase: "complete" };
      return { ...state, phase: "drawing", targetIndex: next };
    }
    default:
      return state;
  }
}

/* ─── canvas helpers ─── */
const CANVAS_W = 300;
const CANVAS_H = 300;
const HALF = CANVAS_W / 2;

function mirrorPath(ctx: CanvasRenderingContext2D, pathStr: string): void {
  // Simple path parser for drawing the target on canvas
  const path = new Path2D(pathStr);
  ctx.fill(path);
}

/* ─── component ─── */
export default function GameMirrorDraw() {
  const { setMessage, setMood } = useMascot();
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const target = TARGETS[state.targetIndex]!;
  const elapsedMs = state.phase === "complete" ? Date.now() - state.startTime : 0;
  const avgScore = state.completedTargets > 0 ? Math.round(state.totalScore / state.completedTargets) : 0;
  const MAX_SCORE = 500;
  const stars = avgScore >= 60 ? 3 : avgScore >= 35 ? 2 : avgScore >= 15 ? 1 : 0;

  // clear canvas
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // draw center line
    ctx.strokeStyle = "rgba(148,163,184,0.5)";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(HALF, 0);
    ctx.lineTo(HALF, CANVAS_H);
    ctx.stroke();
    ctx.setLineDash([]);

    // draw target silhouette (faint)
    ctx.fillStyle = "rgba(148,163,184,0.12)";
    mirrorPath(ctx, target.path);

    // mirror target on right
    ctx.save();
    ctx.translate(CANVAS_W, 0);
    ctx.scale(-1, 1);
    ctx.fillStyle = "rgba(148,163,184,0.12)";
    mirrorPath(ctx, target.path);
    ctx.restore();
  }, [target]);

  // re-draw silhouette on target change
  useEffect(() => {
    if (state.phase === "drawing") clearCanvas();
  }, [state.phase, state.targetIndex, clearCanvas]);

  const getPos = useCallback((e: React.PointerEvent): { x: number; y: number } => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, []);

  const drawLine = useCallback((from: { x: number; y: number }, to: { x: number; y: number }) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Only draw on left half
    const clampedFromX = Math.min(from.x, HALF - 1);
    const clampedToX = Math.min(to.x, HALF - 1);

    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Draw on left
    ctx.beginPath();
    ctx.moveTo(clampedFromX, from.y);
    ctx.lineTo(clampedToX, to.y);
    ctx.stroke();

    // Mirror on right
    ctx.strokeStyle = "#8b5cf6";
    ctx.beginPath();
    ctx.moveTo(CANVAS_W - clampedFromX, from.y);
    ctx.lineTo(CANVAS_W - clampedToX, to.y);
    ctx.stroke();
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (state.phase !== "drawing") return;
    isDrawingRef.current = true;
    const pos = getPos(e);
    lastPosRef.current = pos;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, [state.phase, getPos]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDrawingRef.current || state.phase !== "drawing") return;
    const pos = getPos(e);
    if (lastPosRef.current) drawLine(lastPosRef.current, pos);
    lastPosRef.current = pos;
  }, [state.phase, getPos, drawLine]);

  const handlePointerUp = useCallback(() => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
  }, []);

  const scoreDrawing = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Sample overlap: check pixels on left half that match the silhouette area
    const imageData = ctx.getImageData(0, 0, HALF, CANVAS_H);
    let drawnPixels = 0;
    let totalChecked = 0;

    for (let i = 0; i < imageData.data.length; i += 4) {
      const a = imageData.data[i + 3]!;
      if (a > 20) drawnPixels++;
      totalChecked++;
    }

    // Simple score: percentage of canvas covered (normalized)
    const coverage = (drawnPixels / totalChecked) * 100;
    const overlap = Math.min(100, Math.round(coverage * 5)); // scale up for scoring
    void hapticSuccess();
    dispatch({ type: "SCORE", overlap });
  }, []);

  // completion
  useEffect(() => {
    if (state.phase !== "complete") return;
    setMood("cheering");
    setMessage("Beautiful symmetry! Great artist!");
    void hapticCelebration();
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "mirror-draw",
      difficulty: "medium",
      elapsedMs,
      interactions: state.interactions,
      score: state.totalScore,
      maxScore: MAX_SCORE,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, elapsedMs, state.interactions, state.totalScore, setMessage, setMood]);

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Draw on the left half — watch the mirror!");
    dispatch({ type: "START" });
  }, [setMood, setMessage]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-gradient-to-br from-fuchsia-950/90 via-slate-900/95 to-purple-950/90 shadow-2xl backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="luna" mood="thinking" size="lg" />
            <h3 className="text-2xl font-black text-white">Mirror Draw</h3>
            <p className="text-fuchsia-200/80">Draw on the left — the right mirrors in real time! Match the target shape.</p>
            <PhysicalButton onClick={startGame} variant="primary" className="px-10 py-4">
              Start Drawing ✏️
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "drawing" && (
          <motion.section key="drawing" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 px-4 py-5">
            <div className="flex w-full items-center justify-between px-2">
              <span className="text-sm font-bold text-fuchsia-200">
                {target.emoji} {target.name} ({state.targetIndex + 1}/{TARGETS.length})
              </span>
              <button onClick={clearCanvas} className="flex items-center gap-1 rounded-lg bg-slate-700/60 px-2 py-1 text-xs text-slate-300 hover:bg-slate-600">
                <Eraser className="h-3 w-3" /> Clear
              </button>
            </div>

            <canvas
              ref={canvasRef}
              width={CANVAS_W}
              height={CANVAS_H}
              className="w-full max-w-[340px] touch-none rounded-2xl bg-slate-800/60"
              style={{ aspectRatio: "1/1" }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            />

            <div className="flex gap-2">
              <PhysicalButton onClick={scoreDrawing} variant="success" className="px-6 py-2 text-sm">
                Done — Score It!
              </PhysicalButton>
            </div>

            <p className="text-xs text-fuchsia-300/60">Draw on the LEFT side &bull; Right side mirrors automatically</p>
          </motion.section>
        )}

        {state.phase === "scored" && (
          <motion.section key="scored" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 px-6 py-8 text-center">
            <MascotFriend id="luna" mood={state.overlapScore >= 40 ? "cheering" : "thinking"} size="md" />
            <h3 className="text-xl font-bold text-white">
              {target.emoji} {target.name}: {state.overlapScore}%
            </h3>
            <p className="text-fuchsia-200/80">
              {state.overlapScore >= 60 ? "Amazing symmetry!" : state.overlapScore >= 30 ? "Good effort!" : "Keep practicing!"}
            </p>
            <PhysicalButton onClick={() => dispatch({ type: "NEXT" })} variant="primary" className="px-8 py-3">
              {state.targetIndex >= TARGETS.length - 1 ? "See Results" : "Next Shape →"}
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="luna" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Mirror Master!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}>
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-fuchsia-200/80">Average symmetry: {avgScore}%</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again ✏️</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
