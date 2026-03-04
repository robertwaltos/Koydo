"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Radio, ShieldAlert, TimerReset } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";

type SignalRound = {
  id: string;
  targetHz: number;
  optionsHz: number[];
  answerIndex: number;
  narrative: string;
};

type Resolution = "win" | "fail";

const TOTAL_ROUNDS = 12;
const STARTING_LIVES = 3;
const ROUND_DELAY_MS = 500;
const RUN_TIME_LIMIT_MS = 180_000;

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

function buildRound(index: number): SignalRound {
  const rand = seeded(`zone-041:${index + 1}`);
  const base = 220 + Math.floor(rand() * 480);
  const correct = base + Math.floor(rand() * 40);
  const offsetA = 18 + Math.floor(rand() * 35);
  const offsetB = 25 + Math.floor(rand() * 48);
  const offsetC = 32 + Math.floor(rand() * 55);
  const answerIndex = Math.floor(rand() * 4);
  const options = [
    correct + offsetA,
    correct - offsetB,
    correct + offsetC,
  ];
  options.splice(answerIndex, 0, correct);

  return {
    id: `z041-r${index + 1}`,
    targetHz: correct,
    optionsHz: options,
    answerIndex,
    narrative: `Rescue beacon ${index + 1} is drifting. Lock exactly ${correct}Hz before blackout.`,
  };
}

const SIGNAL_ROUNDS = Array.from({ length: TOTAL_ROUNDS }, (_, index) => buildRound(index));

function prettyMs(ms: number) {
  const safe = Math.max(0, ms);
  const minutes = Math.floor(safe / 60_000);
  const seconds = Math.floor((safe % 60_000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Zone041SignalRescue() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<Resolution>("fail");
  const [startedAt, setStartedAt] = useState(0);
  const [now, setNow] = useState(0);
  const [interactions, setInteractions] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const currentRound = SIGNAL_ROUNDS[roundIndex] ?? null;
  const elapsedMs = Math.max(0, now - startedAt);
  const remainingMs = Math.max(0, RUN_TIME_LIMIT_MS - elapsedMs);
  const progressPercent = useMemo(
    () => Math.min(100, Math.round((roundIndex / TOTAL_ROUNDS) * 100)),
    [roundIndex],
  );

  const finalize = (resolution: Resolution, finalScore: number) => {
    setResult(resolution);
    setPhase("complete");
    setMood(resolution === "win" ? "cheering" : "sad");
    setMessage(
      resolution === "win"
        ? "All rescue beacons restored. Excellent precision work."
        : "Signal network collapsed. Re-run calibration to stabilize the region.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-041",
      difficulty: "medium",
      elapsedMs,
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TOTAL_ROUNDS * 12,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const ticker = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(ticker);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    if (remainingMs > 0) return;
    const timer = window.setTimeout(() => finalize("fail", score), 0);
    return () => window.clearTimeout(timer);
  }, [phase, remainingMs, score, finalize]);

  const startMission = () => {
    setPhase("playing");
    setRoundIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setLives(STARTING_LIVES);
    setSelectedOption(null);
    setResult("fail");
    setInteractions(0);
    const start = Date.now();
    setStartedAt(start);
    setNow(start);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Pixel: Lock each beacon to the exact frequency. No approximations.");
    void hapticSelection();
  };

  const chooseFrequency = (choiceIndex: number) => {
    if (phase !== "playing" || !currentRound || selectedOption !== null) return;
    setSelectedOption(choiceIndex);
    setInteractions((value) => value + 1);

    const isCorrect = choiceIndex === currentRound.answerIndex;
    const nextStreak = isCorrect ? streak + 1 : 0;
    const nextScore = isCorrect ? score + 10 + Math.min(6, nextStreak) : score;
    const nextLives = isCorrect ? lives : lives - 1;

    setStreak(nextStreak);
    setBestStreak((value) => Math.max(value, nextStreak));
    setScore(nextScore);
    setLives(nextLives);
    setMood(isCorrect ? "happy" : "sad");
    setMessage(
      isCorrect
        ? `Beacon ${roundIndex + 1} stabilized at ${currentRound.targetHz}Hz.`
        : `Wrong frequency. Target was ${currentRound.targetHz}Hz.`,
    );
    if (isCorrect) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const reachedFinalRound = roundIndex >= TOTAL_ROUNDS - 1;
      if (nextLives <= 0) {
        finalize("fail", nextScore);
        return;
      }
      if (reachedFinalRound) {
        finalize("win", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedOption(null);
    }, ROUND_DELAY_MS);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Zone 041</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Signal Rescue Rush</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-cyan-100">
            <span>Score {score}</span>
            <span>Streak {streak}</span>
            <span>Lives {lives}</span>
            <span>{prettyMs(remainingMs)}</span>
          </div>
        </div>

        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div
            className="h-full bg-cyan-300"
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.25 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-cyan-200/25 bg-black/35 p-6"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-cyan-50">
                  Rescue trapped scouts by matching unstable beacon frequencies exactly. Missed locks cost signal lives.
                </p>
                <ul className="space-y-1 text-xs text-cyan-100">
                  <li>Win condition: stabilize all 12 beacons before timer expires.</li>
                  <li>Fail condition: lose all lives or run out of time.</li>
                  <li>Scoring: +10 base per correct lock plus streak bonus.</li>
                </ul>
                <PhysicalButton onClick={startMission} className="h-12 bg-cyan-400 px-8 text-sm font-black text-slate-950">
                  Start Rescue Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && currentRound ? (
            <motion.section
              key={currentRound.id}
              initial={{ opacity: 0.25, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.1, y: -8 }}
              className="rounded-3xl border border-cyan-100/30 bg-black/35 p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3 text-xs text-cyan-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <Radio className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{TOTAL_ROUNDS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <TimerReset className="h-3.5 w-3.5" />
                  {prettyMs(remainingMs)} left
                </span>
              </div>
              <p className="text-sm text-cyan-100">{currentRound.narrative}</p>
              <h3 className="mt-2 text-2xl font-black text-white">Target: {currentRound.targetHz}Hz</h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {currentRound.optionsHz.map((hz, index) => {
                  const isSelected = selectedOption === index;
                  const isCorrect = index === currentRound.answerIndex;
                  const stateClass = isSelected
                    ? isCorrect
                      ? "border-emerald-300/70 bg-emerald-400/20"
                      : "border-rose-300/70 bg-rose-400/20"
                    : "border-cyan-100/25 bg-cyan-100/10 hover:bg-cyan-100/20";
                  return (
                    <button
                      key={`${currentRound.id}-${hz}-${index}`}
                      type="button"
                      disabled={selectedOption !== null}
                      onClick={() => chooseFrequency(index)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${stateClass}`}
                    >
                      {hz}Hz
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
              className="rounded-3xl border border-cyan-100/35 bg-black/45 p-6 text-center"
            >
              <div className="mx-auto mb-4 w-fit rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2">
                {result === "win" ? "Network Stabilized" : "Network Lost"}
              </div>
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={result === "win" ? "cheering" : "sad"} size="lg" />
              </div>
              <p className="mt-3 text-sm text-cyan-100">
                Final score {score} | Best streak {bestStreak} | Interactions {Math.max(1, interactions)}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-cyan-200">
                <ShieldAlert className="h-3.5 w-3.5" />
                {result === "win"
                  ? "All rescue beacons were saved."
                  : "Re-run with tighter streak discipline to hold the network."}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={startMission} className="h-11 bg-cyan-400 px-7 text-sm font-black text-slate-950">
                  Replay Mission
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

