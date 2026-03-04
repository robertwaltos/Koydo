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
type Resolution = "restored" | "collapse";

type ActionCard = {
  label: string;
  adjust: [number, number, number];
};

type HabitatRound = {
  id: string;
  prompt: string;
  drift: [number, number, number];
  options: [ActionCard, ActionCard, ActionCard, ActionCard];
};

const ROUND_COUNT = 15;
const START_INTEGRITY = 4;
const MAX_RESERVE = 3;
const TARGET_METRIC = 52;

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

function buildRound(roundIndex: number): HabitatRound {
  const rand = seeded(`zone-068:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 5);
  const surge = 6 + tier * 2;
  const drift: [number, number, number] = [
    Math.floor(rand() * (surge * 2 + 1)) - surge,
    Math.floor(rand() * (surge * 2 + 1)) - surge,
    Math.floor(rand() * (surge * 2 + 1)) - surge,
  ];
  const boost = 4 + tier;
  const options: [ActionCard, ActionCard, ActionCard, ActionCard] = [
    {
      label: "Divert river gates",
      adjust: [boost + 2, -(boost - 1), -(boost - 2)],
    },
    {
      label: "Soil nutrient pulse",
      adjust: [-(boost - 2), boost + 2, boost - 3],
    },
    {
      label: "Canopy mist cycle",
      adjust: [-(boost - 1), boost - 3, boost + 2],
    },
    {
      label: "Balanced emergency mix",
      adjust: [1, 1, 1],
    },
  ];
  const rotateBy = (roundIndex + Math.floor(rand() * 4)) % 4;
  const rotated = options.slice(rotateBy).concat(options.slice(0, rotateBy));
  const prompts = [
    "Glacier runoff timing shifted overnight.",
    "Pollen corridor destabilized after dust burst.",
    "Subsoil sensors show mixed saturation and heat.",
    "Canopy oxygen exchange trending off baseline.",
    "Reservoir and root-bed cadence drift detected.",
  ];
  return {
    id: `z068-r${roundIndex + 1}`,
    prompt: `Cycle ${roundIndex + 1}: ${prompts[Math.floor(rand() * prompts.length)] ?? prompts[0]}`,
    drift,
    options: [rotated[0]!, rotated[1]!, rotated[2]!, rotated[3]!],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone068TerraWildsRecovery() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [water, setWater] = useState(56);
  const [soil, setSoil] = useState(52);
  const [canopy, setCanopy] = useState(54);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [reserve, setReserve] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("collapse");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 5);
  const tolerance = Math.max(9, 17 - tier * 2);
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "restored" ? "cheering" : "sad");
    setMessage(
      nextResolution === "restored"
        ? "Terra: biome recovery stabilized."
        : "Terra: wilds collapsed. rebuild your balancing rhythm.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-068",
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
    setWater(56);
    setSoil(52);
    setCanopy(54);
    setIntegrity(START_INTEGRITY);
    setReserve(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("collapse");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: keep all habitat metrics inside the safe corridor.");
    void hapticSelection();
  };

  const restart = () => start();

  const deployReserve = () => {
    if (phase !== "playing" || reserve <= 0 || integrity >= START_INTEGRITY) return;
    const nextReserve = reserve - 1;
    const nextIntegrity = Math.min(START_INTEGRITY, integrity + 1);
    const soften = (value: number) => clamp(value + Math.round((TARGET_METRIC - value) * 0.35), 0, 100);
    setReserve(nextReserve);
    setIntegrity(nextIntegrity);
    setWater((value) => soften(value));
    setSoil((value) => soften(value));
    setCanopy((value) => soften(value));
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Emergency reserve deployed. Integrity recovered.");
    void hapticSelection();
  };

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const action = round.options[optionIndex];
    if (!action) return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextWater = clamp(water + round.drift[0] + action.adjust[0], 0, 100);
    const nextSoil = clamp(soil + round.drift[1] + action.adjust[1], 0, 100);
    const nextCanopy = clamp(canopy + round.drift[2] + action.adjust[2], 0, 100);
    const distances = [
      Math.abs(nextWater - TARGET_METRIC),
      Math.abs(nextSoil - TARGET_METRIC),
      Math.abs(nextCanopy - TARGET_METRIC),
    ];
    const success = distances.every((distance) => distance <= tolerance);
    const perfect = distances.every((distance) => distance <= Math.max(4, Math.floor(tolerance / 2)));
    const severe = distances.some((distance) => distance >= tolerance + 10);
    const atFinalRound = roundIndex >= ROUND_COUNT - 1;

    let nextIntegrity = integrity;
    let nextReserve = reserve;
    const nextCombo = success ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    let nextScore = score;

    if (success) {
      nextScore += 12 + Math.min(8, nextCombo);
      if (perfect) {
        nextReserve = Math.min(MAX_RESERVE, nextReserve + 1);
        setMessage("Perfect stabilization. +1 reserve charge.");
      } else {
        setMessage("Habitat metrics stable.");
      }
      setMood("happy");
      void hapticSuccess();
    } else if (nextReserve > 0) {
      nextReserve -= 1;
      nextScore = Math.max(0, nextScore - (severe ? 5 : 3));
      setMood("thinking");
      setMessage("Reserve absorbed imbalance this cycle.");
      void hapticSelection();
    } else {
      nextIntegrity = Math.max(0, nextIntegrity - 1);
      nextScore = Math.max(0, nextScore - (severe ? 9 : 6));
      setMood("sad");
      setMessage("Stability breach. Integrity lost.");
      void hapticError();
    }

    setWater(nextWater);
    setSoil(nextSoil);
    setCanopy(nextCanopy);
    setIntegrity(nextIntegrity);
    setReserve(nextReserve);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setScore(nextScore);

    window.setTimeout(() => {
      if (nextIntegrity <= 0) {
        finalize("collapse", nextScore);
        return;
      }
      if (atFinalRound) {
        finalize("restored", nextScore);
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
        deployReserve();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose, deployReserve]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(74,222,128,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(16,185,129,0.22),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 068</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Wilds Recovery</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}/{START_INTEGRITY}</span>
            <span>Reserve {reserve}/{MAX_RESERVE}</span>
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
                <p className="max-w-2xl text-sm text-emerald-100">Balance water, soil, and canopy through 15 heavy drift cycles without integrity collapse.</p>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Recovery
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-emerald-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Cycle {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Safe range {TARGET_METRIC - tolerance}..{TARGET_METRIC + tolerance}
                </span>
              </div>
              <p className="text-sm text-emerald-100">{round.prompt}</p>
              <p className="mt-2 text-xs text-emerald-200">
                Drift W {round.drift[0] >= 0 ? "+" : ""}{round.drift[0]} | S {round.drift[1] >= 0 ? "+" : ""}{round.drift[1]} | C {round.drift[2] >= 0 ? "+" : ""}{round.drift[2]}
              </p>
              <div className="mt-3 grid gap-2 text-xs text-emerald-100 sm:grid-cols-3">
                <p className="rounded-xl border border-emerald-100/25 bg-emerald-100/10 px-3 py-2">Water: {water}</p>
                <p className="rounded-xl border border-emerald-100/25 bg-emerald-100/10 px-3 py-2">Soil: {soil}</p>
                <p className="rounded-xl border border-emerald-100/25 bg-emerald-100/10 px-3 py-2">Canopy: {canopy}</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((action, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-emerald-300/80 bg-emerald-400/20"
                    : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20";
                  return (
                    <button
                      key={`${round.id}-${action.label}-${optionIndex}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                        {action.label}
                      </p>
                      <p className="mt-1 text-xs text-emerald-100">
                        W {action.adjust[0] >= 0 ? "+" : ""}{action.adjust[0]} | S {action.adjust[1] >= 0 ? "+" : ""}{action.adjust[1]} | C {action.adjust[2] >= 0 ? "+" : ""}{action.adjust[2]}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton
                  onClick={deployReserve}
                  disabled={reserve <= 0 || integrity >= START_INTEGRITY}
                  className="h-10 bg-emerald-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Deploy Reserve
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">
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
              <h3 className="mt-3 text-2xl font-black text-white">Recovery Paused</h3>
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
                <MascotFriend id="terra" mood={resolution === "restored" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "restored" ? "Wilds Restored" : "Wilds Collapsed"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Recovery
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
