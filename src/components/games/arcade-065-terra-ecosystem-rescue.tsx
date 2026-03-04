"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, PauseCircle, PlayCircle, ShieldPlus } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "thriving" | "collapsed";

type HabitatVector = {
  water: number;
  canopy: number;
  wildlife: number;
};

type HabitatAction = {
  label: string;
  note: string;
  effect: HabitatVector;
};

type HabitatRound = {
  id: string;
  prompt: string;
  pressure: HabitatVector;
  actions: HabitatAction[];
};

const ROUND_COUNT = 16;
const START_STABILITY = 4;
const MAX_STABILIZERS = 3;

const SCENARIOS: Array<{ prompt: string; pressure: HabitatVector }> = [
  {
    prompt: "Heat dome is drying wetlands and stressing migration routes.",
    pressure: { water: -16, canopy: -8, wildlife: -10 },
  },
  {
    prompt: "Invasive blight is stripping canopy density and shelter.",
    pressure: { water: -5, canopy: -17, wildlife: -9 },
  },
  {
    prompt: "Runoff surge polluted streams and disrupted spawning zones.",
    pressure: { water: -14, canopy: -6, wildlife: -13 },
  },
  {
    prompt: "Storm burst flooded roots and displaced habitat corridors.",
    pressure: { water: 11, canopy: -12, wildlife: -8 },
  },
  {
    prompt: "Tourism overload is compacting soil and wildlife trails.",
    pressure: { water: -7, canopy: -10, wildlife: -15 },
  },
];

const ACTION_LIBRARY: HabitatAction[] = [
  {
    label: "Deploy Rain Nets",
    note: "Fast hydration boost with minor habitat turbulence.",
    effect: { water: 14, canopy: 3, wildlife: -2 },
  },
  {
    label: "Rewild Corridors",
    note: "Restores species movement and canopy regrowth.",
    effect: { water: 4, canopy: 10, wildlife: 13 },
  },
  {
    label: "Canopy Shield Lattice",
    note: "Protects upper layers and moderates climate swings.",
    effect: { water: -3, canopy: 15, wildlife: 4 },
  },
  {
    label: "River Cleanup Swarm",
    note: "Improves water quality and aquatic resilience.",
    effect: { water: 11, canopy: 5, wildlife: 10 },
  },
  {
    label: "Soil Recovery Drones",
    note: "Repairs roots and long-term moisture retention.",
    effect: { water: 8, canopy: 12, wildlife: 2 },
  },
  {
    label: "Sanctuary Lighting Grid",
    note: "Supports pollinators and safe-night migration.",
    effect: { water: 2, canopy: 7, wildlife: 14 },
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function seeded(seed: string) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) | 0;
  }
  return () => {
    hash = (hash * 1664525 + 1013904223) | 0;
    return ((hash >>> 0) % 10_000) / 10_000;
  };
}

function roundWindowMs(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 4);
  return Math.max(2600, 5600 - (tier - 1) * 700);
}

function applyVector(source: HabitatVector, delta: HabitatVector): HabitatVector {
  return {
    water: clamp(source.water + delta.water, 0, 100),
    canopy: clamp(source.canopy + delta.canopy, 0, 100),
    wildlife: clamp(source.wildlife + delta.wildlife, 0, 100),
  };
}

function ecosystemHealth(metrics: HabitatVector) {
  const deviation = Math.abs(metrics.water - 50) + Math.abs(metrics.canopy - 50) + Math.abs(metrics.wildlife - 50);
  return clamp(Math.round(100 - deviation / 1.8), 0, 100);
}

function safeZoneCount(metrics: HabitatVector) {
  let total = 0;
  if (metrics.water >= 32 && metrics.water <= 68) total += 1;
  if (metrics.canopy >= 32 && metrics.canopy <= 68) total += 1;
  if (metrics.wildlife >= 32 && metrics.wildlife <= 68) total += 1;
  return total;
}

function buildRound(roundIndex: number): HabitatRound {
  const random = seeded(`arcade-065:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const scenario = SCENARIOS[Math.floor(random() * SCENARIOS.length)] ?? SCENARIOS[0]!;
  const pressureScale = 1 + (tier - 1) * 0.18;

  const pressure: HabitatVector = {
    water: Math.round(scenario.pressure.water * pressureScale),
    canopy: Math.round(scenario.pressure.canopy * pressureScale),
    wildlife: Math.round(scenario.pressure.wildlife * pressureScale),
  };

  const shuffled = ACTION_LIBRARY.slice();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    const current = shuffled[index]!;
    shuffled[index] = shuffled[swapIndex]!;
    shuffled[swapIndex] = current;
  }

  const actions = shuffled.slice(0, 4).map((action) => {
    const jitter = () => Math.round((random() - 0.5) * 4);
    return {
      ...action,
      effect: {
        water: action.effect.water + jitter(),
        canopy: action.effect.canopy + jitter(),
        wildlife: action.effect.wildlife + jitter(),
      },
    };
  });

  return {
    id: `a065-r${roundIndex + 1}`,
    prompt: `Cycle ${roundIndex + 1}: ${scenario.prompt}`,
    pressure,
    actions,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Arcade065TerraEcosystemRescue() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [stability, setStability] = useState(START_STABILITY);
  const [stabilizers, setStabilizers] = useState(1);
  const [metrics, setMetrics] = useState<HabitatVector>({ water: 50, canopy: 50, wildlife: 50 });
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedAction, setSelectedAction] = useState<number | null>(null);
  const [timeLeftMs, setTimeLeftMs] = useState(roundWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("collapsed");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 4);
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)),
    [roundIndex],
  );
  const health = useMemo(() => ecosystemHealth(metrics), [metrics]);

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "thriving" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "thriving"
        ? "Terra: ecosystem stabilized. Balance restored across all habitats."
        : "Terra: ecosystem collapsed. Re-run with tighter interventions.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-065",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
      score: finalScore,
      maxScore: ROUND_COUNT * 26,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setStability(START_STABILITY);
    setStabilizers(1);
    setMetrics({ water: 50, canopy: 50, wildlife: 50 });
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedAction(null);
    setTimeLeftMs(roundWindowMs(0));
    setOutcome("collapsed");
    setInteractions(0);
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Terra: keep water, canopy, and wildlife near balanced range.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerStabilizer = () => {
    if (phase !== "playing" || stabilizers <= 0 || settlingRef.current) return;
    const tuned: HabitatVector = {
      water: metrics.water + (metrics.water < 50 ? 10 : metrics.water > 50 ? -10 : 0),
      canopy: metrics.canopy + (metrics.canopy < 50 ? 10 : metrics.canopy > 50 ? -10 : 0),
      wildlife: metrics.wildlife + (metrics.wildlife < 50 ? 10 : metrics.wildlife > 50 ? -10 : 0),
    };
    setMetrics({
      water: clamp(tuned.water, 0, 100),
      canopy: clamp(tuned.canopy, 0, 100),
      wildlife: clamp(tuned.wildlife, 0, 100),
    });
    setStabilizers((value) => value - 1);
    setScore((value) => Math.max(0, value - 3));
    setInteractions((value) => value + 1);
    setMood("thinking");
    setMessage("Terra: emergency stabilizer engaged.");
    void hapticSelection();
  };

  const resolveAction = (actionIndex: number, timedOut = false) => {
    if (phase !== "playing" || !round || settlingRef.current) return;
    settlingRef.current = true;
    setSelectedAction(actionIndex);
    setInteractions((value) => value + 1);
    const nextInteractions = interactions + 1;

    const plans = round.actions.map((action, index) => {
      const afterPressure = applyVector(metrics, round.pressure);
      const afterAction = applyVector(afterPressure, action.effect);
      const deviation =
        Math.abs(afterAction.water - 50) +
        Math.abs(afterAction.canopy - 50) +
        Math.abs(afterAction.wildlife - 50);
      return {
        index,
        action,
        afterAction,
        deviation,
      };
    });

    const bestDeviation = Math.min(...plans.map((plan) => plan.deviation));
    const selectedPlan = plans[actionIndex] ?? plans[0]!;
    const nearOptimal = !timedOut && selectedPlan.deviation <= bestDeviation + 10;
    const perfect = !timedOut && selectedPlan.deviation === bestDeviation;
    const severeMiss = timedOut || selectedPlan.deviation > bestDeviation + 24;

    const postMetrics = selectedPlan.afterAction;
    const safeCount = safeZoneCount(postMetrics);

    let nextStability = stability;
    let nextStabilizers = stabilizers;
    let nextScore = score;
    const nextCombo = nearOptimal ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    const finalRound = roundIndex >= ROUND_COUNT - 1;

    if (nearOptimal) {
      nextScore += 12 + safeCount * 3 + Math.min(12, nextCombo * 2);
      if (perfect && nextCombo > 0 && nextCombo % 4 === 0) {
        nextStabilizers = clamp(nextStabilizers + 1, 0, MAX_STABILIZERS);
        setMessage("Perfect eco-cycle. +1 stabilizer charge.");
      } else {
        setMessage("Solid intervention. Habitat metrics moved toward balance.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextScore = Math.max(0, nextScore - (timedOut ? 9 : severeMiss ? 8 : 5));
      setMessage(
        timedOut
          ? "No response in time. Pressure wave intensified."
          : "Intervention drifted away from balance target.",
      );
      setMood("sad");
      void hapticError();
    }

    if (
      postMetrics.water < 20 || postMetrics.water > 80 ||
      postMetrics.canopy < 20 || postMetrics.canopy > 80 ||
      postMetrics.wildlife < 20 || postMetrics.wildlife > 80
    ) {
      nextStability = Math.max(0, nextStability - 1);
    }
    if (severeMiss) {
      nextStability = Math.max(0, nextStability - 1);
    }

    setMetrics(postMetrics);
    setStability(nextStability);
    setStabilizers(nextStabilizers);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextStability <= 0) {
        settlingRef.current = false;
        finalize("collapsed", nextScore, nextInteractions);
        return;
      }
      if (finalRound) {
        const finalScore = nextScore + nextStability * 8 + ecosystemHealth(postMetrics);
        setScore(finalScore);
        settlingRef.current = false;
        finalize("thriving", finalScore, nextInteractions);
        return;
      }
      const nextRound = roundIndex + 1;
      setRoundIndex(nextRound);
      setSelectedAction(null);
      setTimeLeftMs(roundWindowMs(nextRound));
      settlingRef.current = false;
    }, 540);
  };

  useEffect(() => {
    if (phase !== "playing" || selectedAction !== null || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selectedAction]);

  useEffect(() => {
    if (phase !== "playing" || selectedAction !== null || timeLeftMs > 0 || settlingRef.current) return;
    const timeout = window.setTimeout(() => resolveAction(0, true), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, selectedAction, timeLeftMs, resolveAction]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        resolveAction(Number(event.key) - 1);
        return;
      }
      if (lower === "e") {
        event.preventDefault();
        triggerStabilizer();
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
  }, [phase, resolveAction, restart, triggerStabilizer]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(74,222,128,0.24),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(16,185,129,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-100">Arcade 065</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Ecosystem Rescue</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Stability {stability}</span>
            <span>Stabilizers {stabilizers}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-emerald-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-lime-300" animate={{ width: `${health}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="terra" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-emerald-100">
                  Choose interventions to keep water, canopy, and wildlife balanced. Keys: `1-4`, emergency stabilizer `E`.
                </p>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-300 px-8 text-sm font-black text-slate-950">
                  Launch Rescue
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-emerald-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/30 px-3 py-1">
                  <Leaf className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT} | Tier {tier}
                </span>
                <span>{Math.max(0, timeLeftMs / 1000).toFixed(1)}s</span>
              </div>
              <p className="text-sm text-emerald-100">{round.prompt}</p>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { label: "Water", value: metrics.water, pressure: round.pressure.water },
                  { label: "Canopy", value: metrics.canopy, pressure: round.pressure.canopy },
                  { label: "Wildlife", value: metrics.wildlife, pressure: round.pressure.wildlife },
                ].map((metric) => (
                  <div key={`${round.id}-${metric.label}`} className="rounded-xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-emerald-200">{metric.label}</p>
                    <p className="text-xl font-black text-white">{Math.round(metric.value)}</p>
                    <p className="text-[11px] text-emerald-200">
                      Pressure {metric.pressure >= 0 ? `+${metric.pressure}` : metric.pressure}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {round.actions.map((action, actionIndex) => (
                  <button
                    key={`${round.id}-action-${actionIndex}`}
                    type="button"
                    disabled={selectedAction !== null}
                    onClick={() => resolveAction(actionIndex)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selectedAction === actionIndex
                        ? "border-emerald-300/80 bg-emerald-400/20"
                        : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20"
                    }`}
                  >
                    <p className="text-sm font-black text-white">[{actionIndex + 1}] {action.label}</p>
                    <p className="mt-1 text-xs text-emerald-200">{action.note}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerStabilizer} disabled={stabilizers <= 0} className="h-10 bg-emerald-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1"><ShieldPlus className="h-4 w-4" />Stabilizer [E]</span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-zinc-800 text-xs font-black text-white">
                  <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" />Pause [P]</span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="terra" mood="thinking" size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">Rescue Paused</h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-emerald-300 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume</span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart [R]</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="terra" mood={outcome === "thriving" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "thriving" ? "Ecosystem Thriving" : "Ecosystem Collapsed"}</h3>
              <p className="mt-2 text-sm text-emerald-100">Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}</p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-300 px-7 text-sm font-black text-slate-950">Run Again</PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
