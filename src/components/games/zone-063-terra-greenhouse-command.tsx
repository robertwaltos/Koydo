"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, PauseCircle, PlayCircle, ShieldAlert, Thermometer } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "harvest" | "wilt";

type GreenhouseRound = {
  id: string;
  targetTemp: number;
  targetMoisture: number;
  weatherShift: { temp: number; moisture: number };
  prompt: string;
  options: Array<{
    label: string;
    tempDelta: number;
    moistureDelta: number;
    energyDelta: number;
    note: string;
  }>;
};

const ROUND_COUNT = 14;
const START_TEMP = 50;
const START_MOISTURE = 52;
const START_ENERGY = 68;
const START_STABILITY = 4;

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

function buildRound(roundIndex: number): GreenhouseRound {
  const rand = seeded(`zone-063:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const targetTemp = 38 + Math.floor(rand() * 28);
  const targetMoisture = 36 + Math.floor(rand() * 30);
  const weatherShift = {
    temp: -6 + Math.floor(rand() * 13),
    moisture: -7 + Math.floor(rand() * 15),
  };
  const base = 3 + tier;
  return {
    id: `z063-r${roundIndex + 1}`,
    targetTemp,
    targetMoisture,
    weatherShift,
    prompt: `Greenhouse sector ${roundIndex + 1}: align climate and preserve energy.`,
    options: [
      {
        label: "Irrigation Burst",
        tempDelta: -base,
        moistureDelta: base + 3,
        energyDelta: -(4 + tier),
        note: "Strong moisture correction.",
      },
      {
        label: "Solar Venting",
        tempDelta: base + 2,
        moistureDelta: -base,
        energyDelta: -(3 + tier),
        note: "Raises temp, dries air.",
      },
      {
        label: "Balanced Cycle",
        tempDelta: 1,
        moistureDelta: 1,
        energyDelta: -(2 + tier),
        note: "Low-volatility tune.",
      },
      {
        label: "Energy Reserve Mode",
        tempDelta: -1,
        moistureDelta: -1,
        energyDelta: 6,
        note: "Recovers energy but weak climate control.",
      },
    ],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone063TerraGreenhouseCommand() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [temp, setTemp] = useState(START_TEMP);
  const [moisture, setMoisture] = useState(START_MOISTURE);
  const [energy, setEnergy] = useState(START_ENERGY);
  const [stability, setStability] = useState(START_STABILITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("wilt");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 4);
  const tolerance = Math.max(3, 8 - tier);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "harvest" ? "cheering" : "sad");
    setMessage(
      nextResolution === "harvest"
        ? "Terra: greenhouse stabilized. Harvest window secured."
        : "Terra: greenhouse wilt event triggered. Rebalance climate sooner.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-063",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 22,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setTemp(START_TEMP);
    setMoisture(START_MOISTURE);
    setEnergy(START_ENERGY);
    setStability(START_STABILITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("wilt");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: keep temperature and moisture near target while managing energy.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextTemp = clamp(temp + round.weatherShift.temp + option.tempDelta, 0, 100);
    const nextMoisture = clamp(moisture + round.weatherShift.moisture + option.moistureDelta, 0, 100);
    const nextEnergy = clamp(energy + option.energyDelta, 0, 100);

    const tempError = Math.abs(nextTemp - round.targetTemp);
    const moistureError = Math.abs(nextMoisture - round.targetMoisture);
    const aligned = tempError <= tolerance && moistureError <= tolerance && nextEnergy >= 16;
    const severe = tempError >= tolerance + 8 || moistureError >= tolerance + 8 || nextEnergy <= 5;

    const nextStability = aligned ? stability : Math.max(0, stability - (severe ? 2 : 1));
    const nextCombo = aligned ? combo + 1 : 0;
    const nextScore = aligned
      ? score + 10 + Math.min(6, nextCombo)
      : Math.max(0, score - (severe ? 8 : 5));

    setTemp(nextTemp);
    setMoisture(nextMoisture);
    setEnergy(nextEnergy);
    setStability(nextStability);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(aligned ? "happy" : "sad");
    setMessage(aligned ? "Sector stabilized." : `Drift T${tempError}/M${moistureError}.`);
    if (aligned) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextStability <= 0) {
        finalize("wilt", nextScore);
        return;
      }
      if (finalRound) {
        finalize("harvest", nextScore);
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
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(16,185,129,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(34,197,94,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 063</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Greenhouse Command</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Stability {stability}/{START_STABILITY}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-emerald-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-emerald-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="terra" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-emerald-100">Stabilize 14 greenhouse sectors through shifting weather and energy limits.</p>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Greenhouse Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-emerald-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <Leaf className="h-3.5 w-3.5" />
                  Sector {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Tol ±{tolerance}
                </span>
              </div>
              <p className="text-sm text-emerald-100">{round.prompt}</p>
              <p className="mt-2 text-xs text-emerald-200">
                Target T{round.targetTemp}/M{round.targetMoisture}. Shift T{round.weatherShift.temp >= 0 ? "+" : ""}{round.weatherShift.temp}, M{round.weatherShift.moisture >= 0 ? "+" : ""}{round.weatherShift.moisture}.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Temp</p>
                  <p className="mt-1 text-xl font-black text-white">{temp}</p>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Moisture</p>
                  <p className="mt-1 text-xl font-black text-white">{moisture}</p>
                </div>
                <div className="rounded-2xl border border-emerald-100/25 bg-emerald-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Energy</p>
                  <p className="mt-1 text-xl font-black text-white">{energy}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-emerald-300/80 bg-emerald-400/20"
                    : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20";
                  return (
                    <button key={`${round.id}-${option.label}`} type="button" disabled={selectedIndex !== null} onClick={() => choose(optionIndex)} className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}>
                      <p className="text-sm font-black text-white"><span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>{option.label}</p>
                      <p className="mt-1 text-xs text-emerald-100">{option.note}</p>
                      <p className="mt-2 text-[11px] font-bold text-emerald-200">
                        T {option.tempDelta >= 0 ? "+" : ""}{option.tempDelta} | M {option.moistureDelta >= 0 ? "+" : ""}{option.moistureDelta} | E {option.energyDelta >= 0 ? "+" : ""}{option.energyDelta}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-emerald-200">
                  <Thermometer className="h-3.5 w-3.5" />
                  Keep climate near target without draining energy.
                </p>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-emerald-300 px-4 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="terra" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Greenhouse Run Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-emerald-400 px-6 text-sm font-black text-slate-950">
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
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="terra" mood={resolution === "harvest" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "harvest" ? "Harvest Window Secured" : "Greenhouse Wilt"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Greenhouse Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
