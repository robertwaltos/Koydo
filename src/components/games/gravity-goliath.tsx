"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Gauge, Rocket, RotateCcw, Wind } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "briefing" | "playing" | "won" | "lost";

type Round = {
  level: number;
  target: number;
  wind: number;
  gravity: number;
};

type LaunchResult = {
  landing: number;
  error: number;
  score: number;
};

const MAX_LEVEL = 8;
const MAX_MISSES = 3;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function createRound(level: number): Round {
  const targetRange = Math.max(15, 48 - level * 3);
  const targetCenter = 50 + Math.floor((Math.random() - 0.5) * targetRange);
  const wind = Number(((Math.random() * 2 - 1) * (2.5 + level * 0.4)).toFixed(1));
  const gravity = Number((0.45 + level * 0.07 + Math.random() * 0.2).toFixed(2));

  return {
    level,
    target: clamp(targetCenter, 8, 92),
    wind,
    gravity,
  };
}

function simulateLaunch(round: Round, thrust: number, angle: number): LaunchResult {
  const angleRad = (angle * Math.PI) / 180;
  const trajectoryBoost = Math.sin(angleRad) * 0.8 + 0.45;
  const windInfluence = round.wind * 1.7;
  const gravityPenalty = round.gravity * 9;

  const landing = clamp(thrust * trajectoryBoost + windInfluence - gravityPenalty, 0, 100);
  const error = Math.abs(landing - round.target);
  const score = error <= 2.5 ? 3 : error <= 6 ? 2 : error <= 10 ? 1 : 0;

  return { landing, error, score };
}

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

export default function GravityGoliath() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("briefing");
  const [level, setLevel] = useState(1);
  const [misses, setMisses] = useState(0);
  const [score, setScore] = useState(0);
  const [thrust, setThrust] = useState(62);
  const [angle, setAngle] = useState(47);
  const [lastLanding, setLastLanding] = useState<number | null>(null);
  const [lastResult, setLastResult] = useState<LaunchResult | null>(null);
  const [round, setRound] = useState<Round>(() => createRound(1));
  const sessionIdRef = useRef<string>(createLegacySessionId());
  const runStartedAtRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);
  const completionEmittedRef = useRef<boolean>(false);

  const progress = useMemo(() => Math.round(((level - 1) / MAX_LEVEL) * 100), [level]);

  const resetRunTracking = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    runStartedAtRef.current = getTimestampMs();
    interactionCountRef.current = 0;
    completionEmittedRef.current = false;
  }, []);

  const restart = () => {
    resetRunTracking();
    setLevel(1);
    setMisses(0);
    setScore(0);
    setThrust(62);
    setAngle(47);
    setLastLanding(null);
    setLastResult(null);
    setRound(createRound(1));
    setPhase("briefing");
  };

  const startMission = () => {
    resetRunTracking();
    setPhase("playing");
    setMood("thinking");
    setMessage("Gravity calibration active. Land each probe near the target zone to advance.");
    void hapticSelection();
  };

  const runLaunch = () => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;

    const result = simulateLaunch(round, thrust, angle);
    setLastLanding(result.landing);
    setLastResult(result);

    if (result.score > 0) {
      const bonus = result.score + round.level;
      const nextScore = score + bonus;
      setScore(nextScore);
      void hapticSuccess();
      setMood("happy");

      if (level >= MAX_LEVEL) {
        if (!completionEmittedRef.current) {
          completionEmittedRef.current = true;
          emitLegacyGameComplete({
            sessionId: sessionIdRef.current,
            gameId: "gravity-goliath",
            elapsedMs: getElapsedMs(runStartedAtRef.current),
            interactions: Math.max(1, interactionCountRef.current),
            score: nextScore,
            maxScore: 5000,
            source: "component",
            occurredAt: new Date().toISOString(),
          });
        }
        setPhase("won");
        setMessage(`Mission complete. Final score ${nextScore}. Precision profile locked in.`);
        return;
      }

      const nextLevel = level + 1;
      setLevel(nextLevel);
      setRound(createRound(nextLevel));
      setMessage(
        result.score === 3
          ? "Perfect launch. Proceeding to the next gravity tier."
          : "Probe landed inside the tolerance band. Keep calibrating.",
      );
      return;
    }

    const nextMisses = misses + 1;
    setMisses(nextMisses);
    void hapticError();
    setMood("sad");
    if (nextMisses >= MAX_MISSES) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "gravity-goliath",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 5000,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("lost");
      setMessage("Probe losses exceeded mission tolerance. Reset and try another launch profile.");
      return;
    }

    setMessage(`Missed target. ${MAX_MISSES - nextMisses} retries remaining.`);
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22)_0%,transparent_60%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300/80">Gravity Goliath</p>
            <h2 className="text-2xl font-black tracking-tight text-white">Orbital Landing Trials</h2>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-200">
            <Gauge className="h-4 w-4 text-cyan-300" />
            Level {level}/{MAX_LEVEL}
          </div>
        </div>

        <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-cyan-400"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 110, damping: 22 }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/30 p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Target</p>
                <p className="text-lg font-black text-cyan-300">{round.target.toFixed(1)} km</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Wind Drift</p>
                <p className="text-lg font-black text-zinc-100">{round.wind.toFixed(1)} m/s</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Gravity</p>
                <p className="text-lg font-black text-zinc-100">{round.gravity.toFixed(2)} g</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-bold text-zinc-200">Thrust</label>
                <span className="text-sm font-black text-cyan-300">{thrust}%</span>
              </div>
              <input
                type="range"
                min={25}
                max={100}
                value={thrust}
                onChange={(event) => setThrust(Number(event.target.value))}
                className="w-full accent-cyan-400"
                disabled={phase !== "playing"}
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-bold text-zinc-200">Launch Angle</label>
                <span className="text-sm font-black text-cyan-300">{angle} deg</span>
              </div>
              <input
                type="range"
                min={20}
                max={78}
                value={angle}
                onChange={(event) => setAngle(Number(event.target.value))}
                className="w-full accent-cyan-400"
                disabled={phase !== "playing"}
              />
            </div>

            <PhysicalButton
              onClick={runLaunch}
              className="h-12 w-full rounded-2xl border border-cyan-300/30 bg-cyan-500/20 font-black text-cyan-100"
            >
              <span className="inline-flex items-center gap-2">
                <Rocket className="h-4 w-4" /> Launch Probe
              </span>
            </PhysicalButton>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <div className="inline-flex items-center gap-2 text-zinc-200">
                <Crosshair className="h-4 w-4 text-cyan-300" />
                Landing Corridor
              </div>
              <div className="inline-flex items-center gap-2 text-zinc-300">
                <Wind className="h-4 w-4 text-cyan-300" />
                Misses {misses}/{MAX_MISSES}
              </div>
            </div>

            <div className="relative h-16 rounded-2xl border border-white/10 bg-slate-900/70">
              <div className="absolute inset-y-0 left-0 right-0 bg-[linear-gradient(90deg,rgba(244,63,94,0.15)_0%,rgba(34,211,238,0.2)_50%,rgba(244,63,94,0.15)_100%)]" />
              <motion.div
                className="absolute top-1/2 h-9 w-1.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
                animate={{ left: `calc(${round.target}% - 3px)` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
              {lastLanding !== null ? (
                <motion.div
                  className="absolute top-1/2 h-7 w-1.5 -translate-y-1/2 rounded-full bg-amber-300"
                  initial={{ opacity: 0.3 }}
                  animate={{ left: `calc(${lastLanding}% - 3px)`, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 130, damping: 16 }}
                />
              ) : null}
            </div>

            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <p>Score: <span className="font-black text-cyan-300">{score}</span></p>
              {lastResult ? (
                <p>
                  Last launch error: <span className="font-black text-zinc-100">{lastResult.error.toFixed(2)} km</span>
                </p>
              ) : (
                <p>Launch to generate your first telemetry sample.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {phase === "briefing" ? (
          <motion.div
            key="briefing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/90 p-6 text-center"
          >
            <div className="max-w-xl space-y-5">
              <h3 className="text-4xl font-black tracking-tight text-cyan-300">Mission Briefing</h3>
              <p className="text-sm text-zinc-300">
                Tune angle and thrust under changing wind and gravity. Reach level {MAX_LEVEL} before {MAX_MISSES} failed
                launches.
              </p>
              <PhysicalButton
                onClick={startMission}
                className="h-12 rounded-2xl border border-cyan-300/30 bg-cyan-500/20 px-8 font-black text-cyan-100"
              >
                Start Trials
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}

        {phase === "won" || phase === "lost" ? (
          <motion.div
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/92 p-6 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black tracking-tight text-cyan-300">
                {phase === "won" ? "Mission Success" : "Mission Failed"}
              </h3>
              <p className="text-sm text-zinc-300">Final score: {score}</p>
              <PhysicalButton
                onClick={restart}
                className="h-12 rounded-2xl border border-cyan-300/30 bg-cyan-500/20 px-8 font-black text-cyan-100"
              >
                <span className="inline-flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" /> Restart
                </span>
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
