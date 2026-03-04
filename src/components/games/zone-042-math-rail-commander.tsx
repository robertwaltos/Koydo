"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, Route, TriangleAlert } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";
type Resolution = "arrived" | "derailed";

type RailRound = {
  id: string;
  prompt: string;
  currentSpeed: number;
  choices: Array<{
    id: string;
    label: string;
    nextSpeed: number;
    safe: boolean;
    explanation: string;
  }>;
};

const START_SPEED = 42;
const SAFE_MIN = 38;
const SAFE_MAX = 68;
const MAX_RAIL_WARNINGS = 3;
const TOTAL_ROUNDS = 10;

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

function buildRound(index: number, currentSpeed: number): RailRound {
  const rand = seeded(`zone-042:${index + 1}:${currentSpeed}`);
  const targetBandMid = SAFE_MIN + Math.floor(rand() * (SAFE_MAX - SAFE_MIN));
  const safeDelta = targetBandMid - currentSpeed;
  const mildDelta = Math.max(-8, Math.min(8, safeDelta));
  const riskyDeltaA = mildDelta + (rand() > 0.5 ? 16 : -16);
  const riskyDeltaB = mildDelta + (rand() > 0.5 ? 22 : -22);
  const answerIndex = Math.floor(rand() * 3);

  const options = [
    {
      id: `safe-${index + 1}`,
      label: `${mildDelta >= 0 ? "+" : ""}${mildDelta} speed`,
      nextSpeed: currentSpeed + mildDelta,
      safe: true,
      explanation: "Stable adjustment keeps the rail in control.",
    },
    {
      id: `risky-a-${index + 1}`,
      label: `${riskyDeltaA >= 0 ? "+" : ""}${riskyDeltaA} speed`,
      nextSpeed: currentSpeed + riskyDeltaA,
      safe: false,
      explanation: "Aggressive shift increases derail risk.",
    },
    {
      id: `risky-b-${index + 1}`,
      label: `${riskyDeltaB >= 0 ? "+" : ""}${riskyDeltaB} speed`,
      nextSpeed: currentSpeed + riskyDeltaB,
      safe: false,
      explanation: "This move overshoots the safe rail envelope.",
    },
  ];

  const correct = options[0]!;
  const shuffled = options.filter((item) => item.id !== correct.id);
  shuffled.splice(answerIndex, 0, correct);
  return {
    id: `z042-r${index + 1}`,
    prompt: `Signal bend ${index + 1}: hold speed within ${SAFE_MIN}-${SAFE_MAX}.`,
    currentSpeed,
    choices: shuffled,
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function Zone042MathRailCommander() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [speed, setSpeed] = useState(START_SPEED);
  const [warnings, setWarnings] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [resolution, setResolution] = useState<Resolution>("derailed");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const activeRound = useMemo(
    () => buildRound(roundIndex, speed),
    [roundIndex, speed],
  );

  const progress = Math.min(100, Math.round((roundIndex / TOTAL_ROUNDS) * 100));
  const riskLevel = clamp(Math.round(((warnings + (speed < SAFE_MIN || speed > SAFE_MAX ? 1 : 0)) / MAX_RAIL_WARNINGS) * 100), 0, 100);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "arrived" ? "cheering" : "sad");
    setMessage(
      nextResolution === "arrived"
        ? "Spark: Perfect rail math. Passenger pods reached the station."
        : "Spark: Rail stability collapsed. Recalculate with safer deltas.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-042",
      difficulty: "medium",
      elapsedMs: Math.max(0, new Date().getTime() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TOTAL_ROUNDS * 14,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setSpeed(START_SPEED);
    setWarnings(0);
    setScore(0);
    setCombo(0);
    setSelectedChoiceId(null);
    setResolution("derailed");
    setInteractions(0);
    const now = new Date().getTime();
    setStartedAt(now);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Spark: Keep the train in the safe speed band every bend.");
    void hapticSelection();
  };

  const choose = (choiceId: string) => {
    if (phase !== "playing" || selectedChoiceId) return;
    const choice = activeRound.choices.find((item) => item.id === choiceId);
    if (!choice) return;
    setSelectedChoiceId(choice.id);
    setInteractions((value) => value + 1);

    const withinBand = choice.nextSpeed >= SAFE_MIN && choice.nextSpeed <= SAFE_MAX;
    const safeMove = choice.safe && withinBand;
    const nextSpeed = choice.nextSpeed;
    const nextWarnings = safeMove ? warnings : warnings + 1;
    const nextCombo = safeMove ? combo + 1 : 0;
    const nextScore = safeMove ? score + 10 + Math.min(4, nextCombo) : Math.max(0, score - 2);

    setSpeed(nextSpeed);
    setWarnings(nextWarnings);
    setCombo(nextCombo);
    setScore(nextScore);
    setMood(safeMove ? "happy" : "thinking");
    setMessage(choice.explanation);
    if (safeMove) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const isFinalRound = roundIndex >= TOTAL_ROUNDS - 1;
      if (nextWarnings >= MAX_RAIL_WARNINGS) {
        finalize("derailed", nextScore);
        return;
      }
      if (isFinalRound) {
        finalize("arrived", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedChoiceId(null);
    }, 600);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    if (speed >= SAFE_MIN && speed <= SAFE_MAX) return;
    setMessage("Spark: Speed outside band. Next bad choice triggers warning escalation.");
  }, [phase, speed, setMessage]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.28),transparent_42%),radial-gradient(circle_at_82%_78%,rgba(249,115,22,0.2),transparent_45%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Zone 042</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Math Rail Commander</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Warnings {warnings}/{MAX_RAIL_WARNINGS}</span>
          </div>
        </div>

        <div className="mb-2 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.25 }} />
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/35">
          <motion.div className="h-full bg-rose-300" animate={{ width: `${riskLevel}%` }} transition={{ duration: 0.25 }} />
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
                <MascotFriend id="spark" mood="happy" size="lg" />
                <p className="max-w-2xl text-sm text-amber-100">
                  Use math decisions to keep the rail line stable through ten bends. Three warning spikes and the train derails.
                </p>
                <ul className="space-y-1 text-xs text-amber-100">
                  <li>Win condition: complete 10 bends without reaching 3 warnings.</li>
                  <li>Fail condition: warning counter reaches 3.</li>
                  <li>Scoring: safe moves build combo bonus.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Start Rail Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section
              key={activeRound.id}
              initial={{ opacity: 0.25, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-amber-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Route className="h-3.5 w-3.5" />
                  Bend {roundIndex + 1}/{TOTAL_ROUNDS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Current speed: {speed}
                </span>
              </div>
              <p className="text-sm text-amber-100">{activeRound.prompt}</p>
              <p className="mt-1 text-lg font-black text-white">Safe band: {SAFE_MIN}-{SAFE_MAX}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {activeRound.choices.map((choice) => {
                  const selected = selectedChoiceId === choice.id;
                  const selectedClass = selected
                    ? choice.safe && choice.nextSpeed >= SAFE_MIN && choice.nextSpeed <= SAFE_MAX
                      ? "border-emerald-300/70 bg-emerald-400/20"
                      : "border-rose-300/70 bg-rose-400/20"
                    : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20";
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      disabled={selectedChoiceId !== null}
                      onClick={() => choose(choice.id)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${selectedClass}`}
                    >
                      <p>{choice.label}</p>
                      <p className="mt-1 text-xs opacity-80">Result speed {choice.nextSpeed}</p>
                    </button>
                  );
                })}
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
                <MascotFriend id="spark" mood={resolution === "arrived" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "arrived" ? "Station Arrival Complete" : "Rail Derailment"}
              </h3>
              <p className="mt-2 text-sm text-amber-100">
                Score {score} | Final speed {speed} | Warnings {warnings}/{MAX_RAIL_WARNINGS}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-amber-200">
                <TriangleAlert className="h-3.5 w-3.5" />
                {resolution === "arrived"
                  ? "Stable math decisions kept the line safe."
                  : "Too many risky deltas caused a derail."}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-amber-400 px-7 text-sm font-black text-slate-950">
                  Replay Route
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

