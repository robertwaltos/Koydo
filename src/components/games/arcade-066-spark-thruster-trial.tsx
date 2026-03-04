"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, Rocket } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "calibrated" | "drifted";

type ThrusterRound = {
  id: string;
  prompt: string;
  target: number;
  tolerance: number;
  options: [
    { label: string; delta: number },
    { label: string; delta: number },
    { label: string; delta: number },
    { label: string; delta: number },
  ];
  bestIndex: number;
};

const ROUND_COUNT = 15;
const START_INTEGRITY = 4;
const MAX_OVERDRIVES = 3;

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
  return Math.max(2300, 5200 - (tier - 1) * 650);
}

function buildRound(roundIndex: number): ThrusterRound {
  const random = seeded(`arcade-066:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const target = 22 + Math.floor(random() * 70);
  const baseTolerance = Math.max(6, 14 - tier * 2);
  const deltas = [-14, -8, 6, 12].map((value) => value + Math.floor((random() - 0.5) * 4));
  const rotation = (roundIndex + Math.floor(random() * 4)) % 4;
  const rotated = deltas.slice(rotation).concat(deltas.slice(0, rotation));

  const velocityProbe = 48 + Math.round((random() - 0.5) * 20);
  let bestIndex = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (let index = 0; index < rotated.length; index += 1) {
    const candidate = velocityProbe + rotated[index]!;
    const distance = Math.abs(candidate - target);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  }

  const prompts = [
    "Thruster rails destabilized in transit corridor.",
    "Vector lock slipped outside mission envelope.",
    "Course drift detected near plasma ring.",
    "Engine sync lagging behind checkpoint demand.",
    "Boost alignment required before rail transfer.",
  ];

  return {
    id: `a066-r${roundIndex + 1}`,
    prompt: `Trial ${roundIndex + 1}: ${prompts[Math.floor(random() * prompts.length)] ?? prompts[0]}`,
    target,
    tolerance: baseTolerance,
    options: [
      { label: `${rotated[0]! >= 0 ? "+" : ""}${rotated[0]}`, delta: rotated[0]! },
      { label: `${rotated[1]! >= 0 ? "+" : ""}${rotated[1]}`, delta: rotated[1]! },
      { label: `${rotated[2]! >= 0 ? "+" : ""}${rotated[2]}`, delta: rotated[2]! },
      { label: `${rotated[3]! >= 0 ? "+" : ""}${rotated[3]}`, delta: rotated[3]! },
    ],
    bestIndex,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Arcade066SparkThrusterTrial() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [overdrives, setOverdrives] = useState(1);
  const [velocity, setVelocity] = useState(48);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeftMs, setTimeLeftMs] = useState(roundWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("drifted");
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

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "calibrated" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "calibrated"
        ? "Spark: perfect burn chain. Thrusters are mission-ready."
        : "Spark: drift exceeded limits. Re-run calibration.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-066",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
      score: finalScore,
      maxScore: ROUND_COUNT * 25,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setIntegrity(START_INTEGRITY);
    setOverdrives(1);
    setVelocity(48);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedOption(null);
    setTimeLeftMs(roundWindowMs(0));
    setOutcome("drifted");
    setInteractions(0);
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Spark: keep velocity close to target every trial.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerOverdrive = () => {
    if (phase !== "playing" || overdrives <= 0 || settlingRef.current || !round) return;
    const correction = Math.round((round.target - velocity) * 0.5);
    setVelocity((value) => clamp(value + correction, 0, 100));
    setOverdrives((value) => value - 1);
    setScore((value) => Math.max(0, value - 2));
    setInteractions((value) => value + 1);
    setMood("thinking");
    setMessage("Spark: overdrive pulse applied.");
    void hapticSelection();
  };

  const resolveChoice = (choiceIndex: number, timedOut = false) => {
    if (phase !== "playing" || !round || settlingRef.current) return;
    settlingRef.current = true;
    setSelectedOption(choiceIndex);
    setInteractions((value) => value + 1);
    const nextInteractions = interactions + 1;

    const option = round.options[choiceIndex] ?? round.options[0];
    const nextVelocity = clamp(velocity + (timedOut ? 0 : option.delta), 0, 100);
    const deviation = Math.abs(nextVelocity - round.target);
    const bestDeviation = Math.abs(clamp(velocity + round.options[round.bestIndex]!.delta, 0, 100) - round.target);

    const success = !timedOut && deviation <= round.tolerance;
    const near = !timedOut && deviation <= bestDeviation + 2;
    const severe = timedOut || deviation > round.tolerance + 8;

    let nextIntegrity = integrity;
    let nextOverdrives = overdrives;
    let nextScore = score;
    const nextCombo = success ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    const finalRound = roundIndex >= ROUND_COUNT - 1;

    if (success) {
      nextScore += 12 + Math.min(12, nextCombo * 2) + tier;
      if (deviation <= 2 && nextCombo > 0 && nextCombo % 4 === 0) {
        nextOverdrives = clamp(nextOverdrives + 1, 0, MAX_OVERDRIVES);
        setMessage("Precision streak bonus. +1 overdrive.");
      } else {
        setMessage("Vector aligned inside tolerance.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextScore = Math.max(0, nextScore - (timedOut ? 8 : near ? 5 : 9));
      if (severe) {
        nextIntegrity = Math.max(0, nextIntegrity - 1);
      }
      setMessage(
        timedOut
          ? "No burn selected. Drift increased."
          : `Missed target by ${deviation}.`,
      );
      setMood("sad");
      void hapticError();
    }

    setVelocity(nextVelocity);
    setIntegrity(nextIntegrity);
    setOverdrives(nextOverdrives);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextIntegrity <= 0) {
        settlingRef.current = false;
        finalize("drifted", nextScore, nextInteractions);
        return;
      }
      if (finalRound) {
        const finalScore = nextScore + nextIntegrity * 7 + nextBestCombo;
        setScore(finalScore);
        settlingRef.current = false;
        finalize("calibrated", finalScore, nextInteractions);
        return;
      }
      const nextRound = roundIndex + 1;
      setRoundIndex(nextRound);
      setSelectedOption(null);
      setTimeLeftMs(roundWindowMs(nextRound));
      settlingRef.current = false;
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing" || selectedOption !== null || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selectedOption]);

  useEffect(() => {
    if (phase !== "playing" || selectedOption !== null || timeLeftMs > 0 || settlingRef.current) return;
    const timeout = window.setTimeout(() => resolveChoice(0, true), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, selectedOption, timeLeftMs, resolveChoice]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        resolveChoice(Number(event.key) - 1);
        return;
      }
      if (lower === "o") {
        event.preventDefault();
        triggerOverdrive();
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
  }, [phase, resolveChoice, restart, triggerOverdrive]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.24),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(245,158,11,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-100">Arcade 066</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Thruster Trial</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}</span>
            <span>Overdrive {overdrives}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-orange-300" animate={{ width: `${timeLeftMs / roundWindowMs(roundIndex) * 100}%` }} transition={{ duration: 0.1 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="spark" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-amber-100">Choose the burn vector that lands closest to target velocity. Keys: `1-4`, overdrive: `O`.</p>
                <PhysicalButton onClick={start} className="h-12 bg-amber-300 px-8 text-sm font-black text-slate-950">Start Trial</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-amber-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200/30 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT} | Tier {tier}
                </span>
                <span>{Math.max(0, timeLeftMs / 1000).toFixed(1)}s</span>
              </div>
              <p className="text-sm text-amber-100">{round.prompt}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <div className="rounded-xl border border-amber-100/25 bg-amber-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-amber-200">Velocity</p>
                  <p className="text-xl font-black text-white">{Math.round(velocity)}</p>
                </div>
                <div className="rounded-xl border border-amber-100/25 bg-amber-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-amber-200">Target</p>
                  <p className="text-xl font-black text-white">{round.target}</p>
                </div>
                <div className="rounded-xl border border-amber-100/25 bg-amber-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-amber-200">Tolerance</p>
                  <p className="text-xl font-black text-white">±{round.tolerance}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {round.options.map((option, optionIndex) => (
                  <button
                    key={`${round.id}-option-${optionIndex}`}
                    type="button"
                    disabled={selectedOption !== null}
                    onClick={() => resolveChoice(optionIndex)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selectedOption === optionIndex
                        ? "border-amber-300/80 bg-amber-400/20"
                        : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20"
                    }`}
                  >
                    <p className="text-sm font-black text-white">[{optionIndex + 1}] Burn {option.label}</p>
                    <p className="mt-1 text-xs text-amber-200">Projected velocity: {clamp(velocity + option.delta, 0, 100)}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerOverdrive} disabled={overdrives <= 0} className="h-10 bg-amber-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1"><Rocket className="h-4 w-4" />Overdrive [O]</span>
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
              <h3 className="mt-3 text-2xl font-black text-white">Trial Paused</h3>
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
              <div className="flex justify-center"><MascotFriend id="spark" mood={outcome === "calibrated" ? "cheering" : "sad"} size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "calibrated" ? "Calibration Complete" : "Calibration Failed"}</h3>
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
