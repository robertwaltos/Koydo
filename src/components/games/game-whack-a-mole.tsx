"use client";

import { useEffect, useMemo, useReducer, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Hammer } from "lucide-react";
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
const GRID = 3; // 3x3 grid of holes
const GAME_TIME = 30; // seconds
const MOLE_SHOW_MIN = 600;
const MOLE_SHOW_MAX = 1200;

type Phase = "ready" | "playing" | "done";

interface Mole {
  id: number;
  visible: boolean;
  whacked: boolean;
}

interface State {
  phase: Phase;
  sessionId: string;
  moles: Mole[];
  score: number;
  misses: number;
  timeLeft: number;
  startTime: number;
  interactions: number;
}

const initMoles = (): Mole[] =>
  Array.from({ length: GRID * GRID }, (_, i) => ({ id: i, visible: false, whacked: false }));

const init = (): State => ({
  phase: "ready", sessionId: createLegacySessionId(), moles: initMoles(),
  score: 0, misses: 0, timeLeft: GAME_TIME, startTime: 0, interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "SHOW_MOLE"; idx: number }
  | { type: "HIDE_MOLE"; idx: number }
  | { type: "WHACK"; idx: number }
  | { type: "TICK" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "playing", sessionId: createLegacySessionId(), startTime: Date.now(), timeLeft: GAME_TIME };
    case "SHOW_MOLE": {
      if (s.phase !== "playing") return s;
      const moles = s.moles.map((m) => m.id === a.idx ? { ...m, visible: true, whacked: false } : m);
      return { ...s, moles };
    }
    case "HIDE_MOLE": {
      if (s.phase !== "playing") return s;
      const mole = s.moles[a.idx]!;
      const missed = mole.visible && !mole.whacked;
      const moles = s.moles.map((m) => m.id === a.idx ? { ...m, visible: false, whacked: false } : m);
      return { ...s, moles, misses: s.misses + (missed ? 1 : 0) };
    }
    case "WHACK": {
      if (s.phase !== "playing") return s;
      const mole = s.moles[a.idx]!;
      if (!mole.visible || mole.whacked) return s;
      const moles = s.moles.map((m) => m.id === a.idx ? { ...m, whacked: true, visible: false } : m);
      return { ...s, moles, score: s.score + 1, interactions: s.interactions + 1 };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const tl = s.timeLeft - 1;
      return tl <= 0 ? { ...s, timeLeft: 0, phase: "done" } : { ...s, timeLeft: tl };
    }
    default:
      return s;
  }
}

export default function GameWhackAMole({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const stars = useMemo(() => {
    if (s.phase !== "done") return 0;
    if (s.score >= 20) return 3;
    if (s.score >= 12) return 2;
    if (s.score >= 5) return 1;
    return 0;
  }, [s.phase, s.score]);

  /* mole spawning */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const spawnMole = () => {
      const idx = Math.floor(Math.random() * GRID * GRID);
      dispatch({ type: "SHOW_MOLE", idx });
      const hideDelay = MOLE_SHOW_MIN + Math.random() * (MOLE_SHOW_MAX - MOLE_SHOW_MIN);
      const hideTimer = setTimeout(() => dispatch({ type: "HIDE_MOLE", idx }), hideDelay);
      timersRef.current.push(hideTimer);
    };
    const interval = setInterval(spawnMole, 800);
    return () => {
      clearInterval(interval);
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [s.phase]);

  /* timer */
  useEffect(() => {
    if (s.phase !== "playing") return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(id);
  }, [s.phase]);

  useEffect(() => {
    if (s.phase !== "done") return;
    if (s.score >= 5) { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-whack-a-mole", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.score, maxScore: 30,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  const holeSize = Math.min(90, (width - 64) / GRID);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={s.phase === "done" ? (s.score >= 5 ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">🎯 {s.score}</div>
          <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">{s.timeLeft}s</div>
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Hammer className="h-12 w-12 text-amber-600" />
          <p className="text-3xl font-bold text-slate-800">Whack-a-Mole</p>
          <p className="text-sm text-slate-600">Whack as many moles as you can in {GAME_TIME}s!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Game</PhysicalButton>
        </div>
      )}

      {s.phase === "playing" && (
        <div className="gap-3 rounded-xl bg-green-200 p-4" style={{ display: "grid", gridTemplateColumns: `repeat(${GRID}, ${holeSize}px)` }}>
          {s.moles.map((mole) => (
            <button
              key={mole.id}
              onClick={() => { dispatch({ type: "WHACK", idx: mole.id }); hapticSuccess(); }}
              className={`flex items-center justify-center rounded-full border-4 text-3xl transition-all duration-150
                ${mole.visible ? "border-amber-600 bg-amber-800 scale-110" : "border-amber-900 bg-amber-950"}
                ${mole.whacked ? "scale-90 opacity-50" : ""}`}
              style={{ width: holeSize, height: holeSize }}
            >
              {mole.visible ? "🐿️" : "⬤"}
            </button>
          ))}
        </div>
      )}

      {s.phase === "done" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2 py-4">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{s.score} Moles Whacked!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
