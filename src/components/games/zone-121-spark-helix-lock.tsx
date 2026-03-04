"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, ShieldAlert, ShieldPlus, Target } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "charged" | "fracture";

type ReactorChallenge = {
  id: string;
  requiredRail: number;
  windowCenter: number;
  windowSize: number;
  ticks: number;
  note: string;
};

const TOTAL_ROUNDS = 24;
const START_INTEGRITY = 7;
const MAX_COOLANT = 6;
const RAIL_LABELS = ["A", "S", "D", "F"];

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

function buildChallenge(roundIndex: number): ReactorChallenge {
  const rand = seeded(`zone-121:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const windowSize = Math.max(8, 17 - tier * 2);
  const ticks = Math.max(14, 32 - tier * 2);
  const prompts = [
    "Sentinel rail requires precision lock.",
    "Thermal sleeve drift detected on outer ring.",
    "Flux gate reports asymmetric cadence.",
    "Bastion relay entered compression mode.",
    "Charge corridor shows unstable resonance.",
  ];

  return {
    id: `z121-r${roundIndex + 1}`,
    requiredRail: Math.floor(rand() * 4),
    windowCenter: 48 + Math.floor(rand() * 22),
    windowSize,
    ticks,
    note: prompts[Math.floor(rand() * prompts.length)] ?? prompts[0],
  };
}

export default function Zone121SparkHelixLock() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [challenge, setChallenge] = useState<ReactorChallenge>(() => buildChallenge(0));
  const [ticksRemaining, setTicksRemaining] = useState(() => buildChallenge(0).ticks);
  const [selectedRail, setSelectedRail] = useState(0);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [coolant, setCoolant] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("fracture");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const roundResolvedRef = useRef(false);

  const pointer = useMemo(() => {
    const pct = ((challenge.ticks - ticksRemaining) / challenge.ticks) * 100;
    return Math.max(0, Math.min(100, pct));
  }, [challenge.ticks, ticksRemaining]);

  const tier = 1 + Math.floor(roundIndex / 4);
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / TOTAL_ROUNDS) * 100)),
    [roundIndex],
  );

  const finalize = useCallback(
    (nextResolution: Resolution, finalScore: number) => {
      setResolution(nextResolution);
      setPhase("complete");
      setMood(nextResolution === "charged" ? "cheering" : "sad");
      setMessage(
        nextResolution === "charged"
        ? "Spark: helix lock fully charged."
        : "Spark: helix lock fractured.",
      );
      if (completionSentRef.current) return;
      completionSentRef.current = true;
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "zone-121",
        difficulty: "medium",
        elapsedMs: Math.max(0, Date.now() - startedAt),
        interactions: Math.max(1, interactions),
        score: finalScore,
        maxScore: TOTAL_ROUNDS * 28,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    },
    [interactions, setMessage, setMood, startedAt],
  );

  const advanceRound = useCallback(
    (nextScore: number) => {
      const nextRoundIndex = roundIndex + 1;
      if (nextRoundIndex >= TOTAL_ROUNDS) {
        finalize("charged", nextScore);
        return;
      }
      const nextChallenge = buildChallenge(nextRoundIndex);
      roundResolvedRef.current = false;
      setRoundIndex(nextRoundIndex);
      setChallenge(nextChallenge);
      setTicksRemaining(nextChallenge.ticks);
      setSelectedRail(Math.floor(Math.random() * 4));
    },
    [finalize, roundIndex],
  );

  const failStep = useCallback(
    (message: string, penalty: number) => {
      const scoreAfterPenalty = Math.max(0, score - penalty);
      setScore(scoreAfterPenalty);
      setCombo(0);

      if (coolant > 0) {
        setCoolant((value) => Math.max(0, value - 1));
        setMood("thinking");
        setMessage(`${message} Coolant absorbed the shock.`);
        void hapticSelection();
        window.setTimeout(() => advanceRound(scoreAfterPenalty), 260);
        return;
      }

      const nextIntegrity = integrity - 1;
      setIntegrity(nextIntegrity);
      setMood("sad");
      setMessage(`${message} Integrity lost.`);
      void hapticError();

      if (nextIntegrity <= 0) {
        finalize("fracture", scoreAfterPenalty);
        return;
      }

      window.setTimeout(() => advanceRound(scoreAfterPenalty), 260);
    },
    [advanceRound, coolant, finalize, integrity, score, setMessage, setMood],
  );

  const lockRail = useCallback(() => {
    if (phase !== "playing" || roundResolvedRef.current) return;
    roundResolvedRef.current = true;
    setInteractions((value) => value + 1);

    const inWindow = Math.abs(pointer - challenge.windowCenter) <= challenge.windowSize;
    const correctRail = selectedRail === challenge.requiredRail;

    if (inWindow && correctRail) {
      const nextCombo = combo + 1;
      const nextBestCombo = Math.max(bestCombo, nextCombo);
      const nextScore = score + 12 + Math.min(12, nextCombo * 2) + tier;
      let nextCoolant = coolant;

      if (nextCombo > 0 && nextCombo % 4 === 0) {
        nextCoolant = Math.min(MAX_COOLANT, coolant + 1);
        setMessage("Perfect relay chain. +1 coolant.");
      } else {
        setMessage("Rail lock confirmed.");
      }

      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBestCombo);
      setCoolant(nextCoolant);
      setMood("happy");
      void hapticSuccess();

      window.setTimeout(() => advanceRound(nextScore), 260);
      return;
    }

    failStep("Lock missed the relay window.", 7);
  }, [
    advanceRound,
    bestCombo,
    challenge.requiredRail,
    challenge.windowCenter,
    challenge.windowSize,
    combo,
    coolant,
    failStep,
    phase,
    pointer,
    score,
    selectedRail,
    setMessage,
    setMood,
    tier,
  ]);

  const restoreIntegrity = useCallback(() => {
    if (phase !== "playing" || coolant <= 0 || integrity >= START_INTEGRITY) return;
    setCoolant((value) => value - 1);
    setIntegrity((value) => Math.min(START_INTEGRITY, value + 1));
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Coolant restoration repaired one integrity segment.");
    void hapticSelection();
  }, [coolant, integrity, phase, setMessage, setMood]);

  const start = useCallback(() => {
    const firstChallenge = buildChallenge(0);
    setPhase("playing");
    setRoundIndex(0);
    setChallenge(firstChallenge);
    setTicksRemaining(firstChallenge.ticks);
    setSelectedRail(Math.floor(Math.random() * 4));
    setIntegrity(START_INTEGRITY);
    setCoolant(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setResolution("fracture");
    setInteractions(0);
    roundResolvedRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Spark: route each pulse into the highlighted rail and lock on beat.");
    void hapticSelection();
  }, [setMessage, setMood]);

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = window.setInterval(() => {
      setTicksRemaining((previous) => {
        if (roundResolvedRef.current) return previous;
        const next = previous - 1;
        if (next <= 0) {
          roundResolvedRef.current = true;
          window.setTimeout(() => failStep("Pulse escaped the lock window.", 8), 0);
          return 0;
        }
        return next;
      });
    }, 120);
    return () => window.clearInterval(interval);
  }, [failStep, phase, challenge.id]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "1" || key === "a") {
        event.preventDefault();
        setSelectedRail(0);
      } else if (key === "2" || key === "s") {
        event.preventDefault();
        setSelectedRail(1);
      } else if (key === "3" || key === "d") {
        event.preventDefault();
        setSelectedRail(2);
      } else if (key === "4" || key === "f") {
        event.preventDefault();
        setSelectedRail(3);
      } else if (key === " " || key === "enter") {
        event.preventDefault();
        lockRail();
      } else if (key === "r") {
        event.preventDefault();
        restoreIntegrity();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lockRail, phase, restoreIntegrity]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(251,191,36,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(245,158,11,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Zone 121</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Helix Lock</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}/{START_INTEGRITY}</span>
            <span>Coolant {coolant}/{MAX_COOLANT}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-amber-100/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="spark" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-amber-100">Switch rails, then lock inside the moving pulse window before it escapes.</p>
                <PhysicalButton onClick={start} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Start Helix Lock
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key={challenge.id} initial={{ opacity: 0.2, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-3xl border border-amber-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Cycle {roundIndex + 1}/{TOTAL_ROUNDS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
              </div>

              <p className="text-sm text-amber-100">{challenge.note}</p>

              <div className="mt-4 rounded-2xl border border-amber-100/25 bg-black/30 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">
                  <span>Lock Window</span>
                  <span>Rail {challenge.requiredRail + 1}</span>
                </div>
                <div className="relative h-6 rounded-full bg-amber-100/10">
                  <div
                    className="absolute top-0 h-full rounded-full border border-amber-300/60 bg-amber-300/20"
                    style={{
                      left: `${Math.max(0, challenge.windowCenter - challenge.windowSize)}%`,
                      width: `${Math.min(100, challenge.windowSize * 2)}%`,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full border border-amber-200 bg-amber-300"
                    animate={{ left: `calc(${pointer}% - 8px)` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {RAIL_LABELS.map((label, railIndex) => {
                  const active = selectedRail === railIndex;
                  const required = challenge.requiredRail === railIndex;
                  return (
                    <button
                      key={`rail-${railIndex}`}
                      type="button"
                      onClick={() => setSelectedRail(railIndex)}
                      className={`rounded-2xl border px-3 py-4 text-center transition ${
                        active
                          ? "border-amber-200 bg-amber-300/30"
                          : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20"
                      }`}
                    >
                      <p className="text-2xl font-black text-white">{railIndex + 1}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-100">{label}</p>
                      {required ? <p className="mt-1 text-[10px] font-bold text-amber-200">Target</p> : null}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <PhysicalButton onClick={lockRail} className="h-10 bg-amber-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    Lock Pulse
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={restoreIntegrity} disabled={coolant <= 0 || integrity >= START_INTEGRITY} className="h-10 bg-amber-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Restore
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
              <h3 className="mt-3 text-2xl font-black text-white">Helix Lock Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-amber-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={start} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">
                  Restart
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="spark" mood={resolution === "charged" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "charged" ? "Helix Lock Charged" : "Helix Lock Fracture"}
              </h3>
              <p className="mt-2 text-sm text-amber-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-amber-400 px-7 text-sm font-black text-slate-950">
                  Replay Helix Lock
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
