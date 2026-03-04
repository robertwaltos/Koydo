"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, Thermometer } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "forged" | "melted";

type FurnaceRound = {
  id: string;
  prompt: string;
  current: number;
  target: number;
  options: [
    { label: string; next: number },
    { label: string; next: number },
    { label: string; next: number },
    { label: string; next: number },
  ];
  bestIndex: number;
};

const ROUND_COUNT = 14;
const START_INTEGRITY = 4;
const MAX_COOLANT = 3;

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
  return Math.max(2200, 5200 - (tier - 1) * 650);
}

function buildRound(roundIndex: number): FurnaceRound {
  const random = seeded(`arcade-062:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const current = 8 + Math.floor(random() * 18) + tier * 2;
  const target = current + (Math.floor(random() * 8) + 3) * (random() > 0.5 ? 1 : -1);
  const candidate = [
    { label: "+2", next: current + 2 },
    { label: "-3", next: current - 3 },
    { label: "x2", next: current * 2 },
    { label: "+5", next: current + 5 },
  ];

  // Rotate options so correct index is not fixed.
  const rotation = (roundIndex + Math.floor(random() * 4)) % 4;
  const rotated = candidate.slice(rotation).concat(candidate.slice(0, rotation));
  const distances = rotated.map((option) => Math.abs(option.next - target));
  let bestIndex = 0;
  for (let i = 1; i < distances.length; i += 1) {
    if (distances[i]! < distances[bestIndex]!) bestIndex = i;
  }

  const prompts = [
    "Furnace channels are diverging.",
    "Factor rails report unstable alignment.",
    "Heat transfer no longer matches output goals.",
    "Catalyst chamber needs rapid correction.",
    "Compute path drift detected in the forge.",
  ];

  return {
    id: `a062-r${roundIndex + 1}`,
    prompt: `Forge cycle ${roundIndex + 1}: ${prompts[Math.floor(random() * prompts.length)] ?? prompts[0]}`,
    current,
    target,
    options: [rotated[0]!, rotated[1]!, rotated[2]!, rotated[3]!],
    bestIndex,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Arcade062SparkFactorFurnace() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [coolant, setCoolant] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [heat, setHeat] = useState(34);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeftMs, setTimeLeftMs] = useState(roundWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("melted");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 4);
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "forged" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "forged"
        ? "Spark: factor furnace calibrated. Output curve is stable."
        : "Spark: forge integrity failed. Reset and re-balance.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-062",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
      score: finalScore,
      maxScore: ROUND_COUNT * 24,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setIntegrity(START_INTEGRITY);
    setCoolant(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setHeat(34);
    setSelectedOption(null);
    setTimeLeftMs(roundWindowMs(0));
    setOutcome("melted");
    setInteractions(0);
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Spark: choose the operation that gets closest to target output.");
    void hapticSelection();
  };

  const restart = () => start();

  const ventCoolant = () => {
    if (phase !== "playing" || coolant <= 0 || settlingRef.current) return;
    setCoolant((value) => value - 1);
    setHeat((value) => clamp(value - 16, 0, 100));
    setInteractions((value) => value + 1);
    setMood("thinking");
    setMessage("Coolant vent deployed. Heat reduced.");
    void hapticSelection();
  };

  const resolveChoice = (choiceIndex: number, timedOut = false) => {
    if (phase !== "playing" || !round || settlingRef.current) return;
    settlingRef.current = true;
    setSelectedOption(choiceIndex);
    const nextInteractions = interactions + 1;
    setInteractions(nextInteractions);

    const choice = round.options[choiceIndex] ?? round.options[0];
    const choiceError = Math.abs(choice.next - round.target);
    const bestChoiceError = Math.abs(round.options[round.bestIndex]!.next - round.target);
    const good = !timedOut && choiceError <= bestChoiceError + 1;
    const perfect = !timedOut && choiceError === bestChoiceError;
    const severe = timedOut || choiceError > bestChoiceError + 3;

    let nextIntegrity = integrity;
    let nextCoolant = coolant;
    let nextHeat = clamp(heat + (timedOut ? 20 : severe ? 16 : 10), 0, 100);
    let nextScore = score;
    const nextCombo = good ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    const finalRound = roundIndex >= ROUND_COUNT - 1;

    if (good) {
      nextScore += 11 + Math.min(10, nextCombo * 2) + tier;
      nextHeat = clamp(nextHeat - (perfect ? 14 : 8), 0, 100);
      if (perfect && nextCombo > 0 && nextCombo % 4 === 0) {
        nextCoolant = clamp(nextCoolant + 1, 0, MAX_COOLANT);
        setMessage("Perfect correction streak. +1 coolant.");
      } else {
        setMessage("Output curve moved toward target.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextScore = Math.max(0, nextScore - (timedOut ? 9 : severe ? 8 : 5));
      if (nextHeat >= 84) {
        nextIntegrity = Math.max(0, nextIntegrity - 1);
        nextHeat = clamp(nextHeat - 18, 0, 100);
      }
      setMessage(timedOut ? "Timeout. Furnace drift intensified." : "Weak correction. Heat climbed.");
      setMood("sad");
      void hapticError();
    }

    setIntegrity(nextIntegrity);
    setCoolant(nextCoolant);
    setHeat(nextHeat);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextIntegrity <= 0) {
        settlingRef.current = false;
        finalize("melted", nextScore, nextInteractions);
        return;
      }
      if (finalRound) {
        const finalScore = nextScore + nextIntegrity * 5 + nextBestCombo;
        setScore(finalScore);
        settlingRef.current = false;
        finalize("forged", finalScore, nextInteractions);
        return;
      }
      const nextRound = roundIndex + 1;
      setRoundIndex(nextRound);
      setSelectedOption(null);
      setTimeLeftMs(roundWindowMs(nextRound));
      settlingRef.current = false;
    }, 540);
  };

  useEffect(() => {
    if (phase !== "playing" || selectedOption !== null || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selectedOption]);

  useEffect(() => {
    if (phase !== "playing" || selectedOption !== null || timeLeftMs > 0) return;
    const timeout = window.setTimeout(() => resolveChoice(0, true), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, selectedOption, timeLeftMs]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        resolveChoice(Number(event.key) - 1);
        return;
      }
      if (lower === "c") {
        event.preventDefault();
        ventCoolant();
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
  }, [phase, resolveChoice, restart, ventCoolant]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.24),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(245,158,11,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-100">Arcade 062</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Factor Furnace</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}</span>
            <span>Coolant {coolant}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-rose-400" animate={{ width: `${heat}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="spark" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-amber-100">Pick the operation that gets closest to target output before time runs out. Coolant key: `C`.</p>
                <PhysicalButton onClick={start} className="h-12 bg-amber-300 px-8 text-sm font-black text-slate-950">
                  Ignite Forge
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-amber-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200/30 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Cycle {roundIndex + 1}/{ROUND_COUNT} | Tier {tier}
                </span>
                <span>{Math.max(0, timeLeftMs / 1000).toFixed(1)}s</span>
              </div>
              <p className="text-sm text-amber-100">{round.prompt}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-amber-100/25 bg-amber-100/10 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-amber-200">Current</p>
                  <p className="text-xl font-black text-white">{round.current}</p>
                </div>
                <div className="rounded-xl border border-amber-100/25 bg-amber-100/10 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-amber-200">Target</p>
                  <p className="text-xl font-black text-white">{round.target}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => (
                  <button
                    key={`${round.id}-opt-${optionIndex}`}
                    type="button"
                    disabled={selectedOption !== null}
                    onClick={() => resolveChoice(optionIndex)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selectedOption === optionIndex
                        ? "border-amber-300/80 bg-amber-400/20"
                        : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20"
                    }`}
                  >
                    <p className="text-sm font-black text-white">[{optionIndex + 1}] {option.label}</p>
                    <p className="mt-1 text-xs text-amber-200">Result: {option.next}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={ventCoolant} disabled={coolant <= 0} className="h-10 bg-amber-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1"><Thermometer className="h-4 w-4" />Coolant Vent [C]</span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-zinc-800 text-xs font-black text-white">
                  <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" />Pause [P]</span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="spark" mood="thinking" size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">Forge Paused</h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-amber-300 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume</span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart [R]</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="spark" mood={outcome === "forged" ? "cheering" : "sad"} size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "forged" ? "Forge Stabilized" : "Forge Melted"}</h3>
              <p className="mt-2 text-sm text-amber-100">Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}</p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-amber-300 px-7 text-sm font-black text-slate-950">Run Again</PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
