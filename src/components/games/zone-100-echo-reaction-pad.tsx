"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Zap } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();
const ROUNDS = 5;
type PadPhase = "waiting" | "ready" | "go" | "result";
type Phase = "intro" | "playing" | "complete";

function msToScore(ms: number): number {
  if (ms < 150) return 100;
  if (ms < 200) return 90;
  if (ms < 250) return 80;
  if (ms < 300) return 70;
  if (ms < 400) return 60;
  if (ms < 500) return 50;
  return 30;
}

function rating(ms: number): string {
  if (ms < 150) return "⚡ Superhuman!";
  if (ms < 200) return "🚀 Lightning!";
  if (ms < 250) return "🔥 Blazing!";
  if (ms < 300) return "✅ Good";
  if (ms < 400) return "👍 Average";
  return "🐢 Slow";
}

export default function Zone100EchoReactionPad() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("intro");
  const [padPhase, setPadPhase] = useState<PadPhase>("waiting");
  const [round, setRound] = useState(1);
  const [roundTimes, setRoundTimes] = useState<number[]>([]);
  const [lastMs, setLastMs] = useState<number | null>(null);
  const [falseTap, setFalseTap] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const signalTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef(Date.now());

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
  }, []);

  const startRound = useCallback(() => {
    clearTimer();
    setPadPhase("waiting");
    setLastMs(null);
    setFalseTap(false);

    // Random delay 1.5 – 4.5s
    const delay = 1500 + Math.random() * 3000;
    timerRef.current = setTimeout(() => {
      setPadPhase("go");
      signalTimeRef.current = performance.now();
    }, delay);
    setPadPhase("ready");
  }, [clearTimer]);

  const startGame = useCallback(() => {
    setRound(1);
    setRoundTimes([]);
    setTotalScore(0);
    setLastMs(null);
    setFalseTap(false);
    startTimeRef.current = Date.now();
    setPhase("playing");
    setTimeout(() => startRound(), 500);
    mascot.speak("Wait for GREEN, then tap as fast as you can!", "happy");
  }, [mascot, startRound]);

  const handleTap = useCallback(() => {
    if (phase !== "playing") return;

    if (padPhase === "ready") {
      // Too early!
      clearTimer();
      setPadPhase("result");
      setFalseTap(true);
      setLastMs(null);
      hapticError();
      mascot.speak("Too early! Wait for green!", "confused");
      timerRef.current = setTimeout(() => startRound(), 1800);
      return;
    }

    if (padPhase === "go") {
      const ms = Math.round(performance.now() - signalTimeRef.current);
      setLastMs(ms);
      setPadPhase("result");
      const pts = msToScore(ms);
      hapticSuccess();
      setTotalScore((s) => s + pts);

      const newTimes = [...roundTimes, ms];
      setRoundTimes(newTimes);

      if (round >= ROUNDS) {
        const avg = Math.round(newTimes.reduce((a, b) => a + b, 0) / newTimes.length);
        const finalScore = newTimes.reduce((a, b) => a + msToScore(b), 0);
        mascot.speak(`Average: ${avg}ms! ${rating(avg)}`, avg < 250 ? "celebrate" : "encourage");
        timerRef.current = setTimeout(() => {
          setPhase("complete");
          emitLegacyGameComplete({
            sessionId: SESSION_ID,
            gameId: "zone-100",
            score: finalScore,
            maxScore: ROUNDS * 100,
            elapsedMs: Date.now() - startTimeRef.current,
            interactions: ROUNDS,
            difficulty: "easy",
          });
        }, 2000);
      } else {
        mascot.speak(`${ms}ms! ${rating(ms)}`, ms < 250 ? "happy" : "encourage");
        timerRef.current = setTimeout(() => {
          setRound((n) => n + 1);
          startRound();
        }, 1500);
      }
    }
  }, [clearTimer, mascot, padPhase, phase, round, roundTimes, startRound]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") { e.preventDefault(); handleTap(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); clearTimer(); };
  }, [clearTimer, handleTap]);

  const avgMs = roundTimes.length > 0 ? Math.round(roundTimes.reduce((a, b) => a + b, 0) / roundTimes.length) : null;

  const padColors: Record<PadPhase, string> = {
    waiting: "bg-stone-800",
    ready: "bg-red-500",
    go: "bg-green-500",
    result: "bg-stone-600",
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="echo" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Echo Reaction Pad</h2>
          <p className="text-xs text-stone-500">Tap when it turns GREEN!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div key="intro" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <Zap className="w-12 h-12 text-amber-500" />
            <h3 className="text-lg font-black text-stone-800">Reaction Test!</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Wait for the pad to turn GREEN, then tap as fast as you can! Don't tap too early. 5 rounds, best average wins!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Test My Reactions!</PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
            {/* Round progress */}
            <div className="flex gap-1.5">
              {Array.from({ length: ROUNDS }, (_, i) => (
                <div key={i} className={`w-8 h-2 rounded-full transition-colors ${i < round - 1 ? "bg-green-500" : i === round - 1 ? "bg-amber-500" : "bg-stone-200"}`} />
              ))}
            </div>
            <p className="text-sm font-bold text-stone-600">Round {round} of {ROUNDS}</p>

            {/* Big reaction pad */}
            <motion.button
              onClick={handleTap}
              animate={{ scale: padPhase === "go" ? [1, 1.02, 1] : 1 }}
              transition={{ repeat: padPhase === "go" ? Infinity : 0, duration: 0.5 }}
              className={`w-56 h-56 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-3 transition-colors duration-100 cursor-pointer
                ${padColors[padPhase]}`}
            >
              {padPhase === "waiting" && <p className="text-stone-400 font-black text-lg">•••</p>}
              {padPhase === "ready" && <p className="text-white font-black text-xl">Wait…</p>}
              {padPhase === "go" && (
                <>
                  <Zap className="w-16 h-16 text-white animate-bounce" />
                  <p className="text-white font-black text-2xl">TAP!</p>
                </>
              )}
              {padPhase === "result" && (
                <div className="text-center">
                  {falseTap ? (
                    <>
                      <p className="text-4xl">❌</p>
                      <p className="text-white font-black mt-1">Too early!</p>
                    </>
                  ) : (
                    <>
                      <p className="text-white font-black text-4xl">{lastMs}ms</p>
                      <p className="text-white/80 text-sm mt-1">{lastMs !== null ? rating(lastMs) : ""}</p>
                    </>
                  )}
                </div>
              )}
            </motion.button>

            <p className="text-xs text-stone-400">Space bar also works!</p>

            {/* Times bar */}
            {roundTimes.length > 0 && (
              <div className="flex gap-2">
                {roundTimes.map((ms, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-8 rounded-t text-[10px] font-black text-white flex items-end justify-center pb-0.5 ${ms < 250 ? "bg-green-500" : ms < 350 ? "bg-amber-500" : "bg-red-400"}`}
                         style={{ height: Math.max(12, 60 - ms / 10) }}>
                    </div>
                    <p className="text-[10px] text-stone-500">{ms}ms</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <Zap className="w-12 h-12 text-amber-500" />
            <h3 className="text-xl font-black text-stone-800">Results!</h3>
            <div className="flex gap-3">
              <div className="rounded-xl bg-amber-500 px-4 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Avg</p>
                <p className="text-xl font-black">{avgMs}ms</p>
              </div>
              <div className="rounded-xl bg-sky-500 px-4 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Best</p>
                <p className="text-xl font-black">{Math.min(...roundTimes)}ms</p>
              </div>
              <div className="rounded-xl bg-stone-600 px-4 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Score</p>
                <p className="text-xl font-black">{totalScore}</p>
              </div>
            </div>
            <p className="text-lg font-black text-stone-700">{avgMs !== null ? rating(avgMs) : ""}</p>
            <div className="flex gap-2">
              {roundTimes.map((ms, i) => (
                <div key={i} className="text-center">
                  <div className={`w-8 rounded-t text-[10px] font-black text-white flex items-end justify-center pb-0.5 ${ms < 250 ? "bg-green-500" : ms < 350 ? "bg-amber-500" : "bg-red-400"}`}
                       style={{ height: Math.max(12, 60 - ms / 10) }} />
                  <p className="text-[10px] text-stone-500">{ms}</p>
                </div>
              ))}
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              <RotateCcw className="mr-1.5 inline h-4 w-4" /> Test Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
