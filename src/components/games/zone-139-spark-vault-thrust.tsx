"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, ShieldAlert, ShieldPlus } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "stabilized" | "cascade";

type PulseOption = {
  label: string;
  thrustAdjust: number;
  heatAdjust: number;
};

type VaultRound = {
  id: string;
  prompt: string;
  targetThrust: number;
  targetHeat: number;
  driftThrust: number;
  driftHeat: number;
  options: [PulseOption, PulseOption, PulseOption, PulseOption];
};

const ROUND_COUNT = 16;
const START_HULL = 4;
const MAX_CHARGE = 3;

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

function buildRound(roundIndex: number): VaultRound {
  const rand = seeded(`zone-139:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const targetThrust = 42 + Math.floor(rand() * 20) + tier;
  const targetHeat = 40 + Math.floor(rand() * 20) + Math.floor(tier / 2);
  const swing = 5 + tier * 2;
  const driftThrust = Math.floor(rand() * (swing * 2 + 1)) - swing;
  const driftHeat = Math.floor(rand() * (swing * 2 + 1)) - swing;
  const base = 4 + tier;
  const options: PulseOption[] = [
    {
      label: "Vector burst",
      thrustAdjust: base + 2,
      heatAdjust: -(base - 2),
    },
    {
      label: "Cooling sweep",
      thrustAdjust: -(base - 3),
      heatAdjust: base + 2,
    },
    {
      label: "Balanced pulse",
      thrustAdjust: 1,
      heatAdjust: 1,
    },
    {
      label: "Dampening loop",
      thrustAdjust: -(base - 1),
      heatAdjust: -(base - 1),
    },
  ];
  const rotateBy = (roundIndex + Math.floor(rand() * 4)) % 4;
  const rotated = options.slice(rotateBy).concat(options.slice(0, rotateBy));
  const prompts = [
    "Vault conduits are desynchronizing.",
    "Thermal feedback hit the aft chamber.",
    "Thrust rail and coolant rail diverged.",
    "Pulse vault reports unstable transfer curve.",
    "Containment sleeve is lagging one cycle.",
  ];
  return {
    id: `z139-r${roundIndex + 1}`,
    prompt: `Vault cycle ${roundIndex + 1}: ${prompts[Math.floor(rand() * prompts.length)] ?? prompts[0]}`,
    targetThrust,
    targetHeat,
    driftThrust,
    driftHeat,
    options: [rotated[0]!, rotated[1]!, rotated[2]!, rotated[3]!],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone139SparkVaultThrust() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [thrust, setThrust] = useState(55);
  const [heat, setHeat] = useState(52);
  const [hull, setHull] = useState(START_HULL);
  const [charge, setCharge] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("cascade");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 4);
  const tolerance = Math.max(5, 12 - tier);
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "stabilized" ? "cheering" : "sad");
    setMessage(
      nextResolution === "stabilized"
        ? "Spark: vault thrust stabilized."
        : "Spark: vault cascade breached containment.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-139",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 26,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setThrust(55);
    setHeat(52);
    setHull(START_HULL);
    setCharge(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("cascade");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Spark: keep thrust and heat aligned through all vault cycles.");
    void hapticSelection();
  };

  const restart = () => start();

  const ventCharge = () => {
    if (phase !== "playing" || charge <= 0 || hull >= START_HULL) return;
    const nextCharge = charge - 1;
    const nextHull = Math.min(START_HULL, hull + 1);
    setCharge(nextCharge);
    setHull(nextHull);
    setThrust((value) => clamp(value + Math.round((52 - value) * 0.3), 0, 100));
    setHeat((value) => clamp(value + Math.round((52 - value) * 0.3), 0, 100));
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Emergency vent restored one hull segment.");
    void hapticSelection();
  };

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextThrust = clamp(thrust + round.driftThrust + option.thrustAdjust, 0, 100);
    const nextHeat = clamp(heat + round.driftHeat + option.heatAdjust, 0, 100);
    const thrustError = Math.abs(nextThrust - round.targetThrust);
    const heatError = Math.abs(nextHeat - round.targetHeat);
    const success = thrustError <= tolerance && heatError <= tolerance;
    const perfect = thrustError <= Math.max(3, Math.floor(tolerance / 2)) && heatError <= Math.max(3, Math.floor(tolerance / 2));
    const severe = thrustError >= tolerance + 8 || heatError >= tolerance + 8;
    const atFinalRound = roundIndex >= ROUND_COUNT - 1;

    let nextHull = hull;
    let nextCharge = charge;
    const nextCombo = success ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    let nextScore = score;

    if (success) {
      nextScore += 12 + Math.min(9, nextCombo);
      if (perfect) {
        nextCharge = Math.min(MAX_CHARGE, nextCharge + 1);
        setMessage("Perfect sync. +1 vent charge.");
      } else {
        setMessage("Vault cycle synchronized.");
      }
      setMood("happy");
      void hapticSuccess();
    } else if (nextCharge > 0) {
      nextCharge -= 1;
      nextScore = Math.max(0, nextScore - (severe ? 6 : 4));
      setMood("thinking");
      setMessage("Vent charge absorbed instability.");
      void hapticSelection();
    } else {
      nextHull = Math.max(0, nextHull - 1);
      nextScore = Math.max(0, nextScore - (severe ? 10 : 7));
      setMood("sad");
      setMessage("Containment hit. Hull segment lost.");
      void hapticError();
    }

    setThrust(nextThrust);
    setHeat(nextHeat);
    setHull(nextHull);
    setCharge(nextCharge);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setScore(nextScore);

    window.setTimeout(() => {
      if (nextHull <= 0) {
        finalize("cascade", nextScore);
        return;
      }
      if (atFinalRound) {
        finalize("stabilized", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedIndex(null);
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        choose(Number(event.key) - 1);
      } else if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        ventCharge();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose, ventCharge]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(251,191,36,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(245,158,11,0.22),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Zone 139</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Vault Thrust</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hull {hull}/{START_HULL}</span>
            <span>Charge {charge}/{MAX_CHARGE}</span>
          </div>
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-amber-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="spark" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-amber-100">Calibrate 16 vault cycles under escalating drift and hold containment to the end.</p>
                <PhysicalButton onClick={start} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Start Vault
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-amber-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Cycle {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Tol ±{tolerance}
                </span>
              </div>
              <p className="text-sm text-amber-100">{round.prompt}</p>
              <div className="mt-3 grid gap-2 text-xs text-amber-100 sm:grid-cols-2">
                <p className="rounded-xl border border-amber-100/25 bg-amber-100/10 px-3 py-2">
                  Thrust {thrust} | Target {round.targetThrust} | Drift {round.driftThrust >= 0 ? "+" : ""}{round.driftThrust}
                </p>
                <p className="rounded-xl border border-amber-100/25 bg-amber-100/10 px-3 py-2">
                  Heat {heat} | Target {round.targetHeat} | Drift {round.driftHeat >= 0 ? "+" : ""}{round.driftHeat}
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-amber-300/80 bg-amber-400/20"
                    : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20";
                  return (
                    <button
                      key={`${round.id}-${option.label}-${optionIndex}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                        {option.label}
                      </p>
                      <p className="mt-1 text-xs text-amber-100">
                        T {option.thrustAdjust >= 0 ? "+" : ""}{option.thrustAdjust} | H {option.heatAdjust >= 0 ? "+" : ""}{option.heatAdjust}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton
                  onClick={ventCharge}
                  disabled={charge <= 0 || hull >= START_HULL}
                  className="h-10 bg-amber-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Emergency Vent
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-amber-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="spark" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Vault Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-amber-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">
                  Restart
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="spark" mood={resolution === "stabilized" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "stabilized" ? "Vault Stabilized" : "Vault Cascade"}
              </h3>
              <p className="mt-2 text-sm text-amber-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-amber-400 px-7 text-sm font-black text-slate-950">
                  Replay Vault
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

