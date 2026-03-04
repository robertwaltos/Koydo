"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, Radio } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "resonant" | "offbeat";

const TARGET_HITS = 42;
const MISSION_MS = 100_000;
const TICK_MS = 50;
const START_LIVES = 4;
const MAX_PHASE_LOCKS = 3;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function formatClock(ms: number) {
  const safe = Math.max(0, ms);
  const minutes = Math.floor(safe / 60_000);
  const seconds = Math.floor((safe % 60_000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function pickTarget(avoid: number) {
  let value = Math.floor(Math.random() * 360);
  let guard = 0;
  while (Math.abs(value - avoid) < 30 && guard < 8) {
    value = Math.floor(Math.random() * 360);
    guard += 1;
  }
  return value;
}

function circularDistance(a: number, b: number) {
  const raw = Math.abs(a - b);
  return Math.min(raw, 360 - raw);
}

export default function Arcade069LunaPulseRally() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [outcome, setOutcome] = useState<Outcome>("offbeat");
  const [sweep, setSweep] = useState(0);
  const [target, setTarget] = useState(120);
  const [speed, setSpeed] = useState(3.6);
  const [timeLeftMs, setTimeLeftMs] = useState(MISSION_MS);
  const [lives, setLives] = useState(START_LIVES);
  const [phaseLocks, setPhaseLocks] = useState(1);
  const [phaseLockMs, setPhaseLockMs] = useState(0);
  const [hits, setHits] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const progress = useMemo(
    () => Math.min(100, Math.round((hits / TARGET_HITS) * 100)),
    [hits],
  );
  const windowDeg = phaseLockMs > 0 ? 18 : 10;

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "resonant" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "resonant"
        ? "Luna: pulse rally complete. The stage is fully synced."
        : "Luna: rhythm window closed. Rebuild timing flow.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-069",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
      score: finalScore,
      maxScore: TARGET_HITS * 22,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setOutcome("offbeat");
    setSweep(0);
    setTarget(pickTarget(0));
    setSpeed(3.6);
    setTimeLeftMs(MISSION_MS);
    setLives(START_LIVES);
    setPhaseLocks(1);
    setPhaseLockMs(0);
    setHits(0);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setInteractions(0);
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Luna: hit pulse when sweep overlaps target.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerPhaseLock = () => {
    if (phase !== "playing" || phaseLocks <= 0) return;
    setPhaseLocks((value) => value - 1);
    setPhaseLockMs(3600);
    setScore((value) => Math.max(0, value - 2));
    setInteractions((value) => value + 1);
    setMood("thinking");
    setMessage("Luna: phase lock engaged. Timing window widened.");
    void hapticSelection();
  };

  const triggerPulse = () => {
    if (phase !== "playing") return;
    setInteractions((value) => value + 1);
    const nextInteractions = interactions + 1;
    const distance = circularDistance(sweep, target);
    const success = distance <= windowDeg;

    if (success) {
      const nextHits = hits + 1;
      const nextCombo = combo + 1;
      const nextBestCombo = Math.max(bestCombo, nextCombo);
      const nextScore = score + 10 + Math.min(14, nextCombo * 2);
      const nextSpeed = clamp(speed + 0.09, 3.2, 8.2);
      const nextTarget = pickTarget(Math.round(sweep));
      const nextPhaseLocks = nextCombo > 0 && nextCombo % 7 === 0
        ? Math.min(MAX_PHASE_LOCKS, phaseLocks + 1)
        : phaseLocks;

      setHits(nextHits);
      setCombo(nextCombo);
      setBestCombo(nextBestCombo);
      setScore(nextScore);
      setSpeed(nextSpeed);
      setTarget(nextTarget);
      setPhaseLocks(nextPhaseLocks);
      setMood("happy");
      setMessage("Clean pulse. Keep cadence.");
      void hapticSuccess();

      if (nextHits >= TARGET_HITS) {
        const finalScore = nextScore + lives * 8 + nextBestCombo;
        setScore(finalScore);
        finalize("resonant", finalScore, nextInteractions);
      }
      return;
    }

    const nextLives = Math.max(0, lives - 1);
    const nextScore = Math.max(0, score - 8);
    setLives(nextLives);
    setCombo(0);
    setScore(nextScore);
    setMood("sad");
    setMessage(`Missed timing by ${Math.round(distance)} degrees.`);
    void hapticError();

    if (nextLives <= 0) {
      finalize("offbeat", nextScore, nextInteractions);
    }
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const timer = window.setInterval(() => {
      setSweep((value) => (value + speed) % 360);
      setTimeLeftMs((value) => Math.max(0, value - TICK_MS));
      setPhaseLockMs((value) => Math.max(0, value - TICK_MS));
    }, TICK_MS);
    return () => window.clearInterval(timer);
  }, [phase, speed]);

  useEffect(() => {
    if (phase !== "playing" || timeLeftMs > 0) return;
    const finalScore = score;
    finalize("offbeat", finalScore, interactions);
  }, [interactions, phase, score, timeLeftMs]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.code === "Space") {
        event.preventDefault();
        triggerPulse();
        return;
      }
      if (lower === "l") {
        event.preventDefault();
        triggerPhaseLock();
        return;
      }
      if (lower === "p") {
        event.preventDefault();
        setPhase((value) => (value === "playing" ? "paused" : "playing"));
        return;
      }
      if (lower === "r") {
        event.preventDefault();
        restart();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, restart, triggerPhaseLock, triggerPulse]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,114,182,0.26),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(217,70,239,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-100">Arcade 069</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Pulse Rally</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Lives {lives}</span>
            <span>Locks {phaseLocks}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-5 flex items-center justify-between text-xs font-bold text-fuchsia-100">
          <span>{formatClock(timeLeftMs)}</span>
          <span className="inline-flex items-center gap-1">
            <Gauge className="h-3.5 w-3.5" />
            Speed {speed.toFixed(1)}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">
                  Hit pulse when the sweep line overlaps target arc. Controls: `Space` pulse, `L` phase lock.
                </p>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-300 px-8 text-sm font-black text-slate-950">Start Rally</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {(phase === "playing" || phase === "paused") ? (
            <motion.section key={`play-${hits}`} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6">
              <div className="mx-auto max-w-md">
                <div className="relative aspect-square rounded-full border-4 border-fuchsia-200/40 bg-black/35">
                  <div className="absolute inset-0 rounded-full border border-fuchsia-300/25" />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-[45%] w-1 -translate-x-1/2 -translate-y-full origin-bottom rounded-full bg-fuchsia-300"
                    animate={{ rotate: sweep }}
                    transition={{ duration: 0.04, ease: "linear" }}
                  />
                  <motion.div
                    className={`absolute left-1/2 top-1/2 h-[40%] w-2 -translate-x-1/2 -translate-y-full origin-bottom rounded-full ${phaseLockMs > 0 ? "bg-rose-300" : "bg-violet-300"}`}
                    animate={{ rotate: target }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full border border-fuchsia-200/30 px-3 py-1 text-xs font-black text-fuchsia-100">
                      Window ±{windowDeg}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerPulse} disabled={phase !== "playing"} className="h-11 bg-fuchsia-300 text-sm font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1"><Radio className="h-4 w-4" />Pulse [Space]</span>
                </PhysicalButton>
                <PhysicalButton onClick={triggerPhaseLock} disabled={phase !== "playing" || phaseLocks <= 0} className="h-11 bg-violet-300 text-sm font-black text-slate-950 disabled:opacity-40">
                  Phase Lock [L]
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase((value) => (value === "playing" ? "paused" : "playing"))} className="h-10 bg-zinc-800 text-xs font-black text-white sm:col-span-1">
                  {phase === "playing"
                    ? <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" />Pause [P]</span>
                    : <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume [P]</span>}
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-10 bg-zinc-700 text-xs font-black text-white sm:col-span-1">
                  Restart [R]
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="luna" mood={outcome === "resonant" ? "cheering" : "sad"} size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "resonant" ? "Rally Complete" : "Rally Lost"}</h3>
              <p className="mt-2 text-sm text-fuchsia-100">Score {score} | Hits {hits}/{TARGET_HITS} | Best combo {bestCombo}</p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-300 px-7 text-sm font-black text-slate-950">Run Again</PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
