"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, Orbit, PauseCircle, PlayCircle, ShieldAlert } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "stabilized" | "overrun";

type SurgeOption = {
  label: string;
  heatDelta: number;
  shieldDelta: number;
  surgeDelta: number;
  note: string;
};

type SurgeRound = {
  id: string;
  targetOrbit: number;
  incomingSurge: number;
  summary: string;
  options: [SurgeOption, SurgeOption, SurgeOption, SurgeOption];
};

const ROUND_COUNT = 14;
const START_HEAT = 42;
const START_SHIELD = 68;
const START_SURGE = 26;
const START_INTEGRITY = 4;

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

function buildRound(roundIndex: number): SurgeRound {
  const tier = 1 + Math.floor(roundIndex / 4);
  const rand = seeded(`zone-056:${roundIndex + 1}`);
  const targetOrbit = 42 + Math.floor(rand() * 22);
  const incomingSurge = 8 + Math.floor(rand() * (8 + tier * 2));
  return {
    id: `z056-r${roundIndex + 1}`,
    targetOrbit,
    incomingSurge,
    summary: `Orbital band ${roundIndex + 1}: absorb surge while holding orbit near ${targetOrbit}.`,
    options: [
      {
        label: "Mag Shield Pulse",
        heatDelta: 5 + tier,
        shieldDelta: 6 + tier,
        surgeDelta: -(7 + tier),
        note: "High containment, higher thermal load.",
      },
      {
        label: "Radiator Sweep",
        heatDelta: -(8 + tier),
        shieldDelta: -3,
        surgeDelta: -(3 + Math.floor(tier / 2)),
        note: "Cools quickly, weaker containment.",
      },
      {
        label: "Core Redirect",
        heatDelta: 2,
        shieldDelta: -2,
        surgeDelta: -(5 + tier),
        note: "Balanced deflection profile.",
      },
      {
        label: "Boost Burn",
        heatDelta: 9 + tier,
        shieldDelta: -6,
        surgeDelta: 4 + tier,
        note: "Aggressive thrust, risky under surge.",
      },
    ],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone056SparkOrbitalSurge() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [heat, setHeat] = useState(START_HEAT);
  const [shield, setShield] = useState(START_SHIELD);
  const [surge, setSurge] = useState(START_SURGE);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("overrun");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 4);
  const orbitLevel = clamp(Math.round((shield * 0.55 + (100 - heat) * 0.45) - surge * 0.2), 0, 100);
  const orbitWindow = Math.max(4, 10 - tier);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "stabilized" ? "cheering" : "sad");
    setMessage(
      nextResolution === "stabilized"
        ? "Spark: Orbital surge stabilized. Ring network is secure."
        : "Spark: Orbital overrun detected. Rebalance heat/shield/surge faster.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-056",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 24,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setHeat(START_HEAT);
    setShield(START_SHIELD);
    setSurge(START_SURGE);
    setIntegrity(START_INTEGRITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("overrun");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Spark: Tune orbit by balancing heat, shield load, and surge pressure.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;

    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextHeat = clamp(heat + option.heatDelta + Math.floor(round.incomingSurge / 3), 0, 100);
    const nextShield = clamp(shield + option.shieldDelta - Math.floor(round.incomingSurge / 4), 0, 100);
    const nextSurge = clamp(surge + round.incomingSurge + option.surgeDelta, 0, 100);
    const nextOrbitLevel = clamp(
      Math.round((nextShield * 0.55 + (100 - nextHeat) * 0.45) - nextSurge * 0.2),
      0,
      100,
    );
    const drift = Math.abs(nextOrbitLevel - round.targetOrbit);
    const aligned = drift <= orbitWindow;
    const severe =
      nextHeat >= 94 || nextShield <= 6 || nextSurge >= 96;

    const nextIntegrity = aligned ? integrity : Math.max(0, integrity - (severe ? 2 : 1));
    const nextCombo = aligned ? combo + 1 : 0;
    const nextScore = aligned
      ? score + 11 + Math.min(6, nextCombo)
      : Math.max(0, score - (severe ? 8 : 5) - Math.floor(drift / 4));

    setHeat(nextHeat);
    setShield(nextShield);
    setSurge(nextSurge);
    setIntegrity(nextIntegrity);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(aligned ? "happy" : "sad");
    setMessage(aligned ? "Orbit aligned within tolerance." : `Drift ${drift}. ${option.note}`);
    if (aligned) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextIntegrity <= 0) {
        finalize("overrun", nextScore);
        return;
      }
      if (finalRound) {
        finalize("stabilized", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedIndex(null);
    }, 560);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        choose(Number(event.key) - 1);
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(245,158,11,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(251,191,36,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Zone 056</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Orbital Surge</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}/{START_INTEGRITY}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-amber-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="spark" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-amber-100">
                  Manage orbital surges across 14 bands. Keep orbit inside tolerance while preventing thermal and shield collapse.
                </p>
                <ul className="space-y-1 text-xs text-amber-100">
                  <li>Win condition: complete all bands with integrity above zero.</li>
                  <li>Fail condition: integrity reaches zero from severe drift.</li>
                  <li>Controls: click options or keys 1-4, press P to pause.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Start Orbital Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section
              key={round.id}
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-amber-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Orbit className="h-3.5 w-3.5" />
                  Band {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Tier {tier} | Target {round.targetOrbit} | Window ±{orbitWindow}
                </span>
              </div>

              <p className="text-sm text-amber-100">{round.summary}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-amber-100/25 bg-amber-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-amber-200">Heat</p>
                  <p className="mt-1 text-xl font-black text-white">{heat}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-rose-300" style={{ width: `${heat}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-amber-100/25 bg-amber-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-amber-200">Shield</p>
                  <p className="mt-1 text-xl font-black text-white">{shield}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-emerald-300" style={{ width: `${shield}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-amber-100/25 bg-amber-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-amber-200">Surge</p>
                  <p className="mt-1 text-xl font-black text-white">{surge}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-sky-300" style={{ width: `${surge}%` }} />
                  </div>
                </div>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 text-xs text-amber-200">
                <ShieldAlert className="h-3.5 w-3.5" />
                Current orbit level {orbitLevel}. Incoming surge +{round.incomingSurge}.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-amber-300/80 bg-amber-400/20"
                    : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20";
                  return (
                    <button
                      key={`${round.id}-${option.label}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                        {option.label}
                      </p>
                      <p className="mt-1 text-xs text-amber-100">{option.note}</p>
                      <p className="mt-2 text-[11px] font-bold text-amber-200">
                        Heat {option.heatDelta >= 0 ? "+" : ""}{option.heatDelta} | Shield {option.shieldDelta >= 0 ? "+" : ""}{option.shieldDelta} | Surge {option.surgeDelta >= 0 ? "+" : ""}{option.surgeDelta}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-end">
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-amber-300 px-4 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section
              key="paused"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-amber-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="spark" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Orbital Run Paused</h3>
              <p className="mt-2 text-sm text-amber-100">Resume this band or restart the full mission.</p>
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
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-amber-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="spark" mood={resolution === "stabilized" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "stabilized" ? "Orbital Surge Stabilized" : "Orbital Overrun"}
              </h3>
              <p className="mt-2 text-sm text-amber-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-amber-400 px-7 text-sm font-black text-slate-950">
                  Replay Orbital Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
