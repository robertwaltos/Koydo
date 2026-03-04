"use client";

import { useState, useCallback, useEffect, useRef } from "react";
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

const SESSION_ID = createLegacySessionId();
const HOLES = 9;
const GAME_DURATION = 30; // seconds
type Phase = "ready" | "playing" | "complete";

export default function Zone091TerraWhackSquad() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [active, setActive] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [interactions, setInteractions] = useState(0);
  const [showPop, setShowPop] = useState<number | null>(null);
  const startTimeRef = useRef(Date.now());
  const popTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseRef = useRef<Phase>("ready");

  const nextMole = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    setActive(null);
    const delay = 600 + Math.random() * 700;
    popTimerRef.current = setTimeout(() => {
      if (phaseRef.current !== "playing") return;
      const hole = Math.floor(Math.random() * HOLES);
      setActive(hole);
      // Auto-hide after 900ms
      popTimerRef.current = setTimeout(() => {
        setActive((cur) => {
          if (cur === hole) { setMisses((n) => n + 1); }
          return cur === hole ? null : cur;
        });
        nextMole();
      }, 900);
    }, delay);
  }, []);

  const endGame = useCallback((finalScore: number) => {
    phaseRef.current = "complete";
    setPhase("complete");
    if (popTimerRef.current) clearTimeout(popTimerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-091",
      score: finalScore,
      maxScore: 300,
      elapsedMs: Date.now() - startTimeRef.current,
      interactions,
      difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
    mascot.speak(finalScore >= 200 ? "Incredible watcher! Top score!" : `${finalScore} pts! Well whacked!`, "celebrate");
    hapticSuccess();
  }, [interactions, mascot]);

  const startGame = useCallback(() => {
    if (popTimerRef.current) clearTimeout(popTimerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
    setScore(0); setMisses(0); setTimeLeft(GAME_DURATION); setInteractions(0); setActive(null); setShowPop(null);
    startTimeRef.current = Date.now();
    phaseRef.current = "playing";
    setPhase("playing");
    mascot.speak("Whack those moles! You have 30 seconds!", "happy");
    nextMole();
    tickRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setScore((s) => { setTimeout(() => endGame(s), 50); return s; });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, [endGame, mascot, nextMole]);

  const whack = useCallback((idx: number) => {
    if (phase !== "playing" || active !== idx) return;
    hapticSelection();
    setInteractions((n) => n + 1);
    setActive(null);
    setShowPop(idx);
    setTimeout(() => setShowPop(null), 400);
    setScore((s) => {
      const next = s + 10;
      if (next % 50 === 0) mascot.speak(`${next} points!`, "happy");
      return next;
    });
    nextMole();
  }, [active, mascot, nextMole, phase]);

  useEffect(() => () => {
    if (popTimerRef.current) clearTimeout(popTimerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="terra" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Terra Whack Squad</h2>
          <p className="text-xs text-stone-500">Tap the moles before they hide!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-5xl">🐹</p>
            <h3 className="text-lg font-black text-stone-800">Whack-a-Mole!</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Tap moles when they pop out of holes! Each whack = 10 pts. You have 30 seconds!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Let's Whack!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="game" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* HUD */}
            <div className="flex gap-4">
              <div className="rounded-xl bg-amber-500 px-4 py-2 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Score</p>
                <p className="text-xl font-black">{score}</p>
              </div>
              <div className={`rounded-xl px-4 py-2 text-center text-white ${timeLeft <= 5 ? "bg-red-500 animate-pulse" : "bg-stone-600"}`}>
                <p className="text-[10px] font-bold uppercase">Time</p>
                <p className="text-xl font-black">{timeLeft}s</p>
              </div>
              <div className="rounded-xl bg-stone-300 px-4 py-2 text-center text-stone-700">
                <p className="text-[10px] font-bold uppercase">Missed</p>
                <p className="text-xl font-black">{misses}</p>
              </div>
            </div>

            {/* Mole grid */}
            <div className="rounded-2xl bg-green-700 p-4" style={{ display: "grid", gridTemplateColumns: "repeat(3, 96px)", gap: 12 }}>
              {Array.from({ length: HOLES }, (_, i) => (
                <div key={i}
                  className="w-24 h-24 rounded-full bg-amber-900 relative overflow-hidden cursor-pointer flex items-end justify-center pb-1"
                  onClick={() => whack(i)}>
                  {/* Hole shadow */}
                  <div className="absolute inset-0 rounded-full bg-stone-900 opacity-60" />
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        key="mole"
                        initial={{ y: 60 }}
                        animate={{ y: 0 }}
                        exit={{ y: 60 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="absolute bottom-0 z-10 text-5xl leading-none"
                      >🐹</motion.div>
                    )}
                    {showPop === i && (
                      <motion.div
                        key="pop"
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 1.8, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 flex items-center justify-center z-20 text-2xl font-black text-yellow-300 pointer-events-none"
                      >+10!</motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {phase === "complete" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-stone-800">🎉 Time's Up!</p>
                <p className="text-xl font-black text-amber-600">{score} pts · {misses} missed</p>
                <PhysicalButton onClick={startGame} variant="primary">
                  <RotateCcw className="mr-1.5 inline h-4 w-4" /> Play Again
                </PhysicalButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
