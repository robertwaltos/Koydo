"use client";

import { useEffect, useMemo, useReducer, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Zap } from "lucide-react";
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
type Phase = "ready" | "waiting" | "go" | "result" | "done";

interface State {
  phase: Phase;
  sessionId: string;
  round: number;
  maxRounds: number;
  times: number[];
  goAt: number;
  tooEarly: boolean;
  startTime: number;
  interactions: number;
}

const MAX_ROUNDS = 5;

const init = (): State => ({
  phase: "ready",
  sessionId: createLegacySessionId(),
  round: 0,
  maxRounds: MAX_ROUNDS,
  times: [],
  goAt: 0,
  tooEarly: false,
  startTime: 0,
  interactions: 0,
});

type Action =
  | { type: "START" }
  | { type: "BEGIN_WAIT" }
  | { type: "SHOW_GO" }
  | { type: "TAP"; at: number }
  | { type: "NEXT" }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...init(), phase: "waiting", sessionId: createLegacySessionId(), round: 1, startTime: Date.now() };
    case "BEGIN_WAIT":
      return { ...s, phase: "waiting", tooEarly: false };
    case "SHOW_GO":
      return { ...s, phase: "go", goAt: Date.now() };
    case "TAP": {
      if (s.phase === "waiting") {
        return { ...s, tooEarly: true, phase: "result", interactions: s.interactions + 1 };
      }
      if (s.phase === "go") {
        const reaction = a.at - s.goAt;
        return { ...s, phase: "result", times: [...s.times, reaction], interactions: s.interactions + 1 };
      }
      return s;
    }
    case "NEXT": {
      if (s.round >= s.maxRounds) return { ...s, phase: "done" };
      return { ...s, phase: "waiting", round: s.round + 1, tooEarly: false };
    }
    case "FINISH":
      return { ...s, phase: "done" };
    default:
      return s;
  }
}

export default function GameReactionTime({ width = 420, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();

  const avgTime = useMemo(() => {
    if (s.times.length === 0) return 0;
    return Math.round(s.times.reduce((a, b) => a + b, 0) / s.times.length);
  }, [s.times]);

  const stars = useMemo(() => {
    if (s.phase !== "done") return 0;
    if (s.times.length === 0) return 0;
    if (avgTime <= 250) return 3;
    if (avgTime <= 400) return 2;
    if (avgTime <= 600) return 1;
    return 0;
  }, [s.phase, avgTime, s.times.length]);

  /* schedule "go" signal after random delay */
  useEffect(() => {
    if (s.phase !== "waiting") return;
    const delay = 1500 + Math.random() * 3000;
    const t = setTimeout(() => dispatch({ type: "SHOW_GO" }), delay);
    return () => clearTimeout(t);
  }, [s.phase, s.round]);

  /* advance after result */
  useEffect(() => {
    if (s.phase !== "result") return;
    const t = setTimeout(() => {
      if (s.round >= s.maxRounds) dispatch({ type: "FINISH" });
      else dispatch({ type: "NEXT" });
    }, 1500);
    return () => clearTimeout(t);
  }, [s.phase, s.round, s.maxRounds]);

  const handleTap = useCallback(() => {
    if (s.phase === "waiting" || s.phase === "go") {
      dispatch({ type: "TAP", at: Date.now() });
      if (s.phase === "waiting") hapticError();
      else hapticSuccess();
    }
  }, [s.phase]);

  useEffect(() => {
    if (s.phase !== "done") return;
    if (s.times.length > 0 && avgTime <= 600) { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-reaction-time", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.times.length > 0 ? Math.max(0, 1000 - avgTime) : 0, maxScore: 1000,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [s.phase]);

  const lastTime = s.times.length > 0 ? s.times[s.times.length - 1] : null;

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="pixel" mood={s.phase === "done" ? (stars >= 2 ? "happy" : "sad") : "idle"} size="sm" />
        <div className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800">
          <Zap className="mr-1 inline h-4 w-4" />Round {s.round}/{s.maxRounds}
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Zap className="h-12 w-12 text-amber-400" />
          <p className="text-3xl font-bold text-slate-800">Reaction Time</p>
          <p className="text-sm text-slate-600">Tap as fast as you can when the screen turns green!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start</PhysicalButton>
        </div>
      )}

      {s.phase === "waiting" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-64 w-full cursor-pointer items-center justify-center rounded-2xl bg-red-400 shadow-lg"
          onClick={handleTap}
        >
          <p className="text-2xl font-bold text-white">Wait for green…</p>
        </motion.div>
      )}

      {s.phase === "go" && (
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="flex h-64 w-full cursor-pointer items-center justify-center rounded-2xl bg-green-400 shadow-lg"
          onClick={handleTap}
        >
          <p className="text-3xl font-extrabold text-white">TAP NOW!</p>
        </motion.div>
      )}

      {s.phase === "result" && (
        <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-slate-200 shadow-lg">
          {s.tooEarly ? (
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">Too early! ⚡</p>
              <p className="text-sm text-slate-600">Wait for green next time</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-extrabold text-emerald-600">{lastTime} ms</p>
              <p className="text-sm text-slate-500">{lastTime! < 250 ? "Lightning!" : lastTime! < 400 ? "Quick!" : "Keep practising"}</p>
            </div>
          )}
        </div>
      )}

      {s.phase === "done" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2 py-6">
          <Trophy className="h-10 w-10 text-amber-400" />
          {s.times.length > 0 ? (
            <>
              <p className="text-2xl font-bold text-slate-800">Average: {avgTime} ms</p>
              <div className="flex gap-1 text-xs text-slate-500">
                {s.times.map((t, i) => <span key={i} className="rounded bg-slate-100 px-2 py-0.5">{t}ms</span>)}
              </div>
            </>
          ) : (
            <p className="text-lg text-slate-600">No valid taps</p>
          )}
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
