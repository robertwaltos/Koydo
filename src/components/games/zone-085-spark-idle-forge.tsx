"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

// ─── Types & Constants ─────────────────────────────────────────────────────────
const SESSION_ID = createLegacySessionId();
const GOAL_SPARKS = 10000;
const GOAL_TIME = 90; // seconds to reach goal

type Phase = "ready" | "playing" | "complete";

type Upgrade = {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  level: number;
  sparkPerSecond: number;
  sparkPerClick: number;
  emoji: string;
};

const BASE_UPGRADES: Upgrade[] = [
  { id: "click",   name: "Click Amp",    description: "+1 spark per click",      baseCost: 10,   level: 0, sparkPerSecond: 0,  sparkPerClick: 1,  emoji: "👆" },
  { id: "forge",   name: "Spark Forge",  description: "+0.5 sparks/sec",         baseCost: 50,   level: 0, sparkPerSecond: 0.5, sparkPerClick: 0, emoji: "🔥" },
  { id: "coil",    name: "Coil Array",   description: "+2 sparks/sec",           baseCost: 200,  level: 0, sparkPerSecond: 2,   sparkPerClick: 0, emoji: "🌀" },
  { id: "reactor", name: "Mini Reactor", description: "+8 sparks/sec",           baseCost: 1000, level: 0, sparkPerSecond: 8,   sparkPerClick: 0, emoji: "⚛️" },
  { id: "hyper",   name: "Hyper Clicker",description: "+5 sparks per click",     baseCost: 500,  level: 0, sparkPerSecond: 0,   sparkPerClick: 5, emoji: "⚡" },
];

function upgradeCost(upgrade: Upgrade): number {
  return Math.floor(upgrade.baseCost * Math.pow(1.5, upgrade.level));
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Zone085SparkIdleForge() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [sparks, setSparks] = useState(0);
  const [totalSparks, setTotalSparks] = useState(0);
  const [upgrades, setUpgrades] = useState<Upgrade[]>(BASE_UPGRADES.map((u) => ({ ...u })));
  const [timeLeft, setTimeLeft] = useState(GOAL_TIME);
  const [interactions, setInteractions] = useState(0);
  const [startTime] = useState(Date.now());
  const [clickParticles, setClickParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const sparksRef = useRef(sparks);
  const totalRef = useRef(totalSparks);
  const upgradesRef = useRef(upgrades);
  const phaseRef = useRef<Phase>("ready");
  const tickRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const countdownRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => { sparksRef.current = sparks; }, [sparks]);
  useEffect(() => { totalRef.current = totalSparks; }, [totalSparks]);
  useEffect(() => { upgradesRef.current = upgrades; }, [upgrades]);

  const getSPS = useCallback(() => {
    return upgradesRef.current.reduce((sum, u) => sum + u.sparkPerSecond * u.level, 0);
  }, []);

  const getSPC = useCallback(() => {
    return 1 + upgradesRef.current.reduce((sum, u) => sum + u.sparkPerClick * u.level, 0);
  }, []);

  const endGame = useCallback((finalSparks: number) => {
    clearInterval(tickRef.current);
    clearInterval(countdownRef.current);
    setPhase("complete");
    phaseRef.current = "complete";
    const score = Math.min(1000, Math.floor((finalSparks / GOAL_SPARKS) * 1000));
    emitLegacyGameComplete({
      sessionId: SESSION_ID,
      gameId: "zone-085",
      score,
      maxScore: 1000,
      elapsedMs: Date.now() - startTime,
      interactions,
      difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
    if (finalSparks >= GOAL_SPARKS) mascot.speak("GOAL REACHED! Spark Forge Master!", "celebrate");
    else mascot.speak(`Time's up! ${Math.floor(finalSparks).toLocaleString()} sparks generated. Not bad!`, "happy");
  }, [interactions, mascot, startTime]);

  const startGame = useCallback(() => {
    setSparks(0);
    setTotalSparks(0);
    setUpgrades(BASE_UPGRADES.map((u) => ({ ...u })));
    setTimeLeft(GOAL_TIME);
    setInteractions(0);
    setPhase("playing");
    phaseRef.current = "playing";
    sparksRef.current = 0;
    totalRef.current = 0;

    // Passive income tick (10/s)
    tickRef.current = setInterval(() => {
      if (phaseRef.current !== "playing") return;
      const sps = getSPS() / 10;
      const newVal = sparksRef.current + sps;
      const newTotal = totalRef.current + sps;
      sparksRef.current = newVal;
      totalRef.current = newTotal;
      setSparks(newVal);
      setTotalSparks(newTotal);
      if (newTotal >= GOAL_SPARKS) endGame(newTotal);
    }, 100);

    // Countdown
    countdownRef.current = setInterval(() => {
      setTimeLeft((t) => {
        const next = t - 1;
        if (next <= 0) {
          endGame(totalRef.current);
          return 0;
        }
        return next;
      });
    }, 1000);

    mascot.speak("Click to generate sparks! Buy upgrades to automate!", "happy");
  }, [endGame, getSPS, mascot]);

  useEffect(() => () => { clearInterval(tickRef.current); clearInterval(countdownRef.current); }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (phaseRef.current !== "playing") return;
    const spc = getSPC();
    const newVal = sparksRef.current + spc;
    const newTotal = totalRef.current + spc;
    sparksRef.current = newVal;
    totalRef.current = newTotal;
    setSparks(newVal);
    setTotalSparks(newTotal);
    setInteractions((n) => n + 1);
    hapticSelection();
    // Particle
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setClickParticles((p) => [...p.slice(-6), { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    if (newTotal >= GOAL_SPARKS) endGame(newTotal);
  }, [endGame, getSPC]);

  const buyUpgrade = useCallback((id: string) => {
    const up = upgradesRef.current.find((u) => u.id === id);
    if (!up) return;
    const cost = upgradeCost(up);
    if (sparksRef.current < cost) {
      mascot.speak("Not enough sparks yet!", "encourage");
      return;
    }
    hapticSuccess();
    const newSparks = sparksRef.current - cost;
    sparksRef.current = newSparks;
    setSparks(newSparks);
    setUpgrades((prev) => prev.map((u) => u.id === id ? { ...u, level: u.level + 1 } : u));
    mascot.speak(`${up.name} upgraded to level ${up.level + 1}!`, "happy");
    setInteractions((n) => n + 1);
  }, [mascot]);

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="spark" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Spark Idle Forge</h2>
          <p className="text-xs text-stone-500">Click to forge sparks — buy upgrades to automate!</p>
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
            <p className="text-4xl">⚡</p>
            <h3 className="text-lg font-black text-stone-800">Idle Forge</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Click the forge button to generate sparks. Spend them on upgrades to increase passive income. Reach {GOAL_SPARKS.toLocaleString()} sparks in {GOAL_TIME}s!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">
              Fire Up the Forge!
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3 w-full max-w-sm">
            {/* HUD */}
            <div className="flex items-center justify-between w-full px-1">
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-400">Sparks</p>
                <p className="text-2xl font-black text-amber-600">{Math.floor(sparks).toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-stone-400">Goal</p>
                <div className="w-24 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 transition-all"
                    style={{ width: `${Math.min(100, (totalSparks / GOAL_SPARKS) * 100)}%` }}
                  />
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">{Math.floor((totalSparks / GOAL_SPARKS) * 100)}%</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-bold text-stone-400">Time</p>
                <p className={`text-xl font-black ${timeLeft <= 15 ? "text-red-600" : "text-stone-800"}`}>{timeLeft}s</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 text-xs text-stone-500 w-full justify-center">
              <span>👆 {getSPC()} / click</span>
              <span>⚡ {getSPS().toFixed(1)} / sec</span>
            </div>

            {/* Big click button */}
            <div className="relative">
              <motion.button
                onClick={handleClick}
                whileTap={{ scale: 0.93 }}
                className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl flex flex-col items-center justify-center text-white font-black text-4xl border-4 border-amber-300"
              >
                <Zap className="w-10 h-10" />
                <span className="text-sm mt-1">FORGE</span>
              </motion.button>
              <AnimatePresence>
                {clickParticles.map((p) => (
                  <motion.span
                    key={p.id}
                    initial={{ opacity: 1, y: 0. }}
                    animate={{ opacity: 0, y: -40 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute pointer-events-none text-sm font-black text-amber-300"
                    style={{ left: p.x, top: p.y }}
                  >
                    +{getSPC()}⚡
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>

            {/* Upgrades */}
            <div className="w-full space-y-2">
              {upgrades.map((up) => {
                const cost = upgradeCost(up);
                const canAfford = sparks >= cost;
                return (
                  <button
                    key={up.id}
                    onClick={() => buyUpgrade(up.id)}
                    disabled={!canAfford}
                    className={`w-full flex items-center justify-between rounded-xl border px-3 py-2 transition-colors text-left ${
                      canAfford ? "border-amber-200 bg-amber-50 hover:bg-amber-100" : "border-stone-200 bg-stone-50 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{up.emoji}</span>
                      <div>
                        <p className="text-xs font-black text-stone-800">{up.name} <span className="font-normal text-stone-400">Lv.{up.level}</span></p>
                        <p className="text-[10px] text-stone-500">{up.description}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-black text-amber-700">{cost.toLocaleString()} ⚡</p>
                    </div>
                  </button>
                );
              })}
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
            <p className="text-4xl">{totalSparks >= GOAL_SPARKS ? "🏆" : "⚡"}</p>
            <h3 className="text-lg font-black text-stone-800">
              {totalSparks >= GOAL_SPARKS ? "Goal Reached!" : "Time Up!"}
            </h3>
            <p className="text-3xl font-black text-amber-600">{Math.floor(totalSparks).toLocaleString()}</p>
            <p className="text-sm text-stone-500">sparks forged total</p>
            <PhysicalButton onClick={startGame} variant="primary">
              Forge Again!
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
