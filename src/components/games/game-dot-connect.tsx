"use client";

import { useEffect, useMemo, useReducer, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, CircleDot } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticCelebration,
  hapticSuccess,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── Types ─── */
type Phase = "ready" | "playing" | "won";

interface Dot {
  x: number;
  y: number;
  n: number;
}

interface State {
  phase: Phase;
  sessionId: string;
  dots: Dot[];
  nextDot: number;
  connected: number[];
  startTime: number;
  elapsed: number;
  interactions: number;
  level: number;
}

function generateDots(count: number): Dot[] {
  const dots: Dot[] = [];
  const pad = 40;
  const w = 340;
  const h = 340;
  for (let i = 1; i <= count; i++) {
    let x: number, y: number, overlap: boolean;
    let attempts = 0;
    do {
      overlap = false;
      x = pad + Math.random() * (w - pad * 2);
      y = pad + Math.random() * (h - pad * 2);
      for (const d of dots) {
        if (Math.hypot(d.x - x, d.y - y) < 40) { overlap = true; break; }
      }
      attempts++;
    } while (overlap && attempts < 100);
    dots.push({ x, y, n: i });
  }
  return dots;
}

const LEVELS = [8, 12, 16, 20];

const init = (): State => ({
  phase: "ready", sessionId: createLegacySessionId(),
  dots: [], nextDot: 1, connected: [], startTime: 0, elapsed: 0,
  interactions: 0, level: 0,
});

type Action =
  | { type: "START" }
  | { type: "TAP"; n: number }
  | { type: "TICK" }
  | { type: "RESET" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const count = LEVELS[s.level] ?? 8;
      return {
        ...init(), phase: "playing", sessionId: createLegacySessionId(),
        dots: generateDots(count), nextDot: 1, connected: [], startTime: Date.now(),
        level: s.level,
      };
    }
    case "TAP": {
      if (s.phase !== "playing") return s;
      if (a.n !== s.nextDot) return { ...s, interactions: s.interactions + 1 };
      const connected = [...s.connected, a.n];
      const done = connected.length === s.dots.length;
      return {
        ...s,
        nextDot: s.nextDot + 1,
        connected,
        interactions: s.interactions + 1,
        phase: done ? "won" : "playing",
        elapsed: done ? Date.now() - s.startTime : s.elapsed,
        level: done ? Math.min(s.level + 1, LEVELS.length - 1) : s.level,
      };
    }
    case "TICK":
      if (s.phase !== "playing") return s;
      return { ...s, elapsed: Date.now() - s.startTime };
    case "RESET":
      return init();
    default:
      return s;
  }
}

export default function GameDotConnect({ width = 420, height = 520 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setMood } = useMascot();

  const stars = useMemo(() => {
    if (s.phase !== "won") return 0;
    const sec = s.elapsed / 1000;
    const count = s.dots.length;
    const ratio = sec / count;
    if (ratio <= 1) return 3;
    if (ratio <= 2) return 2;
    return 1;
  }, [s.phase, s.elapsed, s.dots.length]);

  /* timer */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 100);
    return () => clearInterval(id);
  }, [s.phase]);

  /* draw connections */
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const cw = 340;
    const ch = 340;
    ctx.clearRect(0, 0, cw, ch);

    /* lines */
    if (s.connected.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = "#6366f1";
      ctx.lineWidth = 3;
      ctx.lineJoin = "round";
      for (let i = 0; i < s.connected.length; i++) {
        const dot = s.dots.find((d) => d.n === s.connected[i]!)!;
        if (i === 0) ctx.moveTo(dot.x, dot.y);
        else ctx.lineTo(dot.x, dot.y);
      }
      ctx.stroke();
    }
  }, [s.connected, s.dots]);

  const handleDotClick = useCallback((n: number) => {
    if (n === s.nextDot) { hapticSuccess(); }
    else { hapticError(); }
    dispatch({ type: "TAP", n });
  }, [s.nextDot]);

  useEffect(() => {
    if (s.phase !== "won") return;
    setMood("cheering");
    hapticCelebration();
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-dot-connect", elapsedMs: s.elapsed,
      interactions: s.interactions, score: Math.max(0, 10000 - s.elapsed), maxScore: 10000,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  const secs = (s.elapsed / 1000).toFixed(1);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="spark" mood={s.phase === "won" ? "happy" : "idle"} size="sm" />
        <div className="flex gap-2">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-800">
            <CircleDot className="mr-1 inline h-4 w-4" />{s.connected.length}/{s.dots.length}
          </span>
          {s.phase === "playing" && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-mono text-slate-700">{secs}s</span>
          )}
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <CircleDot className="h-12 w-12 text-indigo-400" />
          <p className="text-3xl font-bold text-slate-800">Dot Connect</p>
          <p className="text-sm text-slate-600">Tap the dots in order, 1 → 2 → 3 …</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start</PhysicalButton>
        </div>
      )}

      {(s.phase === "playing" || s.phase === "won") && (
        <div className="relative rounded-2xl border-2 border-indigo-200 bg-white shadow-lg" style={{ width: 340, height: 340 }}>
          <canvas ref={canvasRef} width={340} height={340} className="absolute inset-0" />
          {s.dots.map((dot) => {
            const isCon = s.connected.includes(dot.n);
            const isNext = dot.n === s.nextDot;
            return (
              <motion.button
                key={dot.n}
                className={`absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-xs font-bold shadow-md transition-colors ${
                  isCon
                    ? "border-indigo-500 bg-indigo-500 text-white"
                    : isNext
                    ? "border-indigo-400 bg-indigo-100 text-indigo-700 ring-2 ring-indigo-300"
                    : "border-slate-300 bg-white text-slate-600"
                }`}
                style={{ left: dot.x, top: dot.y }}
                whileTap={{ scale: 0.85 }}
                onClick={() => handleDotClick(dot.n)}
                disabled={isCon}
              >
                {dot.n}
              </motion.button>
            );
          })}
        </div>
      )}

      {s.phase === "won" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{secs}s — {s.dots.length} dots!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
