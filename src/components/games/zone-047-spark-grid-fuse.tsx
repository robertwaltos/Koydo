"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, Zap } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "stabilized" | "overload";

type FuseRound = {
  id: string;
  targetLoad: number;
  prompt: string;
  deltas: number[];
};

const ROUND_COUNT = 14;
const START_LOAD = 40;
const START_STABILITY = 4;

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

function buildRound(roundIndex: number): FuseRound {
  const rand = seeded(`zone-047:${roundIndex + 1}`);
  const targetLoad = 36 + Math.floor(rand() * 34);
  const rangeBoost = Math.floor(roundIndex / 4);
  const deltaA = -8 - Math.floor(rand() * (5 + rangeBoost));
  const deltaB = -2 + Math.floor(rand() * (4 + rangeBoost));
  const deltaC = 3 + Math.floor(rand() * (6 + rangeBoost));
  const deltaD = 7 + Math.floor(rand() * (8 + rangeBoost));
  return {
    id: `z047-r${roundIndex + 1}`,
    targetLoad,
    prompt: `Relay node ${roundIndex + 1}: align grid load near ${targetLoad}.`,
    deltas: [deltaA, deltaB, deltaC, deltaD],
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone047SparkGridFuse() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [load, setLoad] = useState(START_LOAD);
  const [stability, setStability] = useState(START_STABILITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("overload");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 4);
  const tolerance = Math.max(2, 6 - tier);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "stabilized" ? "cheering" : "sad");
    setMessage(
      nextResolution === "stabilized"
        ? "Spark: Grid fused clean. Relay city stays online."
        : "Spark: Overload chain triggered. Rebalance with tighter vectors.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-047",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 13,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setLoad(START_LOAD);
    setStability(START_STABILITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("overload");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Spark: Keep load close to target each relay. Keys 1-4 choose vectors.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const delta = round.deltas[optionIndex];
    if (typeof delta !== "number") return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextLoad = clamp(load + delta, 10, 95);
    const error = Math.abs(nextLoad - round.targetLoad);
    const success = error <= tolerance;
    const nextStability = success ? stability : stability - 1;
    const nextCombo = success ? combo + 1 : 0;
    const nextScore = success ? score + 9 + Math.min(5, nextCombo) : Math.max(0, score - 2);

    setLoad(nextLoad);
    setStability(nextStability);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(success ? "happy" : "sad");
    setMessage(success ? "Stable fuse." : `Drift ${error}. Stability core damaged.`);
    if (success) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextStability <= 0) {
        finalize("overload", nextScore);
        return;
      }
      if (finalRound) {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.24),transparent_42%),radial-gradient(circle_at_84%_80%,rgba(249,115,22,0.2),transparent_48%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Zone 047</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Grid Fuse</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Stability {stability}/{START_STABILITY}</span>
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
                  Apply vector changes to keep the electrical grid near target load across 14 relay nodes.
                </p>
                <ul className="space-y-1 text-xs text-amber-100">
                  <li>Win condition: finish all relay nodes with stability above zero.</li>
                  <li>Fail condition: stability drops to zero.</li>
                  <li>Difficulty scales by tighter tolerance every tier.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Start Grid Run
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
                  <Zap className="h-3.5 w-3.5" />
                  Relay {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Load {load} | target {round.targetLoad} | tol ±{tolerance}
                </span>
              </div>

              <p className="text-sm text-amber-100">{round.prompt}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {round.deltas.map((delta, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-sky-300/70 bg-sky-400/20"
                    : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20";
                  return (
                    <button
                      key={`${round.id}-${delta}-${optionIndex}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${stateClass}`}
                    >
                      <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                      {delta >= 0 ? "+" : ""}{delta} load
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
              <h3 className="mt-3 text-2xl font-black text-white">Grid Run Paused</h3>
              <p className="mt-2 text-sm text-amber-100">Resume current relay or restart the full run.</p>
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
                {resolution === "stabilized" ? "Grid Stabilized" : "Grid Overload"}
              </h3>
              <p className="mt-2 text-sm text-amber-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-amber-400 px-7 text-sm font-black text-slate-950">
                  Replay Grid Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

