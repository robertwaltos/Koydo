"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, ShieldAlert, Zap } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "stabilized" | "meltdown";
type Action = "cool" | "balance" | "boost";

const START_LEVELS = [50, 50, 50] as const;
const START_INTEGRITY = 4;
const TARGET_STABILITY = 2000;
const TICK_MS = 220;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function applyActionDelta(level: number, action: Action) {
  if (action === "cool") return clamp(level - 12, 0, 100);
  if (action === "boost") return clamp(level + 12, 0, 100);
  if (level > 50) return clamp(level - Math.min(10, level - 50), 0, 100);
  return clamp(level + Math.min(10, 50 - level), 0, 100);
}

export default function Zone052SparkReactorGrid() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [selectedReactor, setSelectedReactor] = useState(0);
  const [levels, setLevels] = useState<number[]>([...START_LEVELS]);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [stabilityProgress, setStabilityProgress] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("meltdown");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const selectedReactorRef = useRef(selectedReactor);
  const levelsRef = useRef(levels);
  const integrityRef = useRef(integrity);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const progressRef = useRef(stabilityProgress);
  const stressTicksRef = useRef(0);

  useEffect(() => {
    selectedReactorRef.current = selectedReactor;
    levelsRef.current = levels;
    integrityRef.current = integrity;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    progressRef.current = stabilityProgress;
  }, [selectedReactor, levels, integrity, score, combo, bestCombo, stabilityProgress]);

  const progressPct = useMemo(
    () => Math.min(100, Math.round((stabilityProgress / TARGET_STABILITY) * 100)),
    [stabilityProgress],
  );
  const tier = useMemo(() => 1 + Math.floor(stabilityProgress / 360), [stabilityProgress]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "stabilized" ? "cheering" : "sad");
    setMessage(
      nextResolution === "stabilized"
        ? "Spark: Reactor lattice stabilized. Grid city is online."
        : "Spark: Reactor meltdown chain triggered. Stabilize faster next run.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-052",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TARGET_STABILITY * 2,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setSelectedReactor(0);
    setLevels([...START_LEVELS]);
    setIntegrity(START_INTEGRITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setStabilityProgress(0);
    setResolution("meltdown");
    setInteractions(0);

    selectedReactorRef.current = 0;
    levelsRef.current = [...START_LEVELS];
    integrityRef.current = START_INTEGRITY;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    progressRef.current = 0;
    stressTicksRef.current = 0;

    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Spark: Keep all three reactors in safe range while stability charges.");
    void hapticSelection();
  };

  const restart = () => start();

  const pickReactor = (index: number) => {
    if (phase !== "playing") return;
    const next = clamp(index, 0, 2);
    selectedReactorRef.current = next;
    setSelectedReactor(next);
    setInteractions((value) => value + 1);
    void hapticSelection();
  };

  const triggerAction = (action: Action) => {
    if (phase !== "playing") return;
    const reactor = selectedReactorRef.current;
    const currentLevels = levelsRef.current;
    const nextLevels = [...currentLevels];
    const before = currentLevels[reactor] ?? 50;
    const after = applyActionDelta(before, action);
    nextLevels[reactor] = after;

    const beforeError = Math.abs(before - 50);
    const afterError = Math.abs(after - 50);
    const improved = afterError < beforeError;
    const nextCombo = improved ? comboRef.current + 1 : 0;
    const nextScore = improved
      ? scoreRef.current + 8 + Math.min(6, nextCombo)
      : Math.max(0, scoreRef.current + 2 - Math.floor(afterError / 18));

    levelsRef.current = nextLevels;
    comboRef.current = nextCombo;
    bestComboRef.current = Math.max(bestComboRef.current, nextCombo);
    scoreRef.current = nextScore;

    setLevels(nextLevels);
    setCombo(nextCombo);
    setBestCombo(bestComboRef.current);
    setScore(nextScore);
    setInteractions((value) => value + 1);
    setMood(improved ? "happy" : "thinking");
    setMessage(
      improved
        ? `Reactor ${reactor + 1} tuned closer to nominal.`
        : `Reactor ${reactor + 1} adjustment drifted from nominal.`,
    );
    if (improved) {
      void hapticSuccess();
    } else {
      void hapticSelection();
    }
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const loop = window.setInterval(() => {
      const currentLevels = levelsRef.current;
      const currentIntegrity = integrityRef.current;
      const currentScore = scoreRef.current;
      const currentCombo = comboRef.current;
      const currentBestCombo = bestComboRef.current;
      const currentProgress = progressRef.current;

      const currentTier = 1 + Math.floor(currentProgress / 360);
      const driftMagnitude = 2 + currentTier;
      const safeMin = Math.max(20, 28 - currentTier);
      const safeMax = Math.min(80, 72 + currentTier);
      const stressThreshold = Math.max(4, 8 - Math.floor(currentTier / 2));

      const driftedLevels = currentLevels.map((level) => {
        const drift = Math.round((Math.random() * 2 - 1) * driftMagnitude);
        return clamp(level + drift, 0, 100);
      });

      let nextIntegrity = currentIntegrity;
      let nextScore = currentScore + 1;
      let nextCombo = currentCombo;
      let nextBestCombo = currentBestCombo;
      const nextProgress = Math.min(TARGET_STABILITY, currentProgress + 2 + currentTier * 0.4);

      const outOfSafeCount = driftedLevels.filter((level) => level < safeMin || level > safeMax).length;
      if (outOfSafeCount > 0) {
        stressTicksRef.current += 1 + (outOfSafeCount > 1 ? 1 : 0);
        nextCombo = 0;
      } else {
        stressTicksRef.current = Math.max(0, stressTicksRef.current - 1);
        nextCombo = currentCombo + 1;
        nextBestCombo = Math.max(nextBestCombo, nextCombo);
        nextScore += Math.min(4, Math.floor(nextCombo / 3));
      }

      if (stressTicksRef.current >= stressThreshold) {
        stressTicksRef.current = 0;
        nextIntegrity -= 1;
        nextScore = Math.max(0, nextScore - 6);
        setMood("sad");
        setMessage("Spark: Containment stress spike. Integrity reduced.");
        void hapticError();
      }

      levelsRef.current = driftedLevels;
      integrityRef.current = nextIntegrity;
      scoreRef.current = nextScore;
      comboRef.current = nextCombo;
      bestComboRef.current = nextBestCombo;
      progressRef.current = nextProgress;

      setLevels(driftedLevels);
      setIntegrity(nextIntegrity);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBestCombo);
      setStabilityProgress(nextProgress);

      if (nextIntegrity <= 0) {
        finalize("meltdown", nextScore);
        return;
      }
      if (nextProgress >= TARGET_STABILITY) {
        finalize("stabilized", nextScore);
      }
    }, TICK_MS);
    return () => window.clearInterval(loop);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (event.key === "1" || event.key === "2" || event.key === "3") {
        event.preventDefault();
        pickReactor(Number(event.key) - 1);
      } else if (key === "q") {
        event.preventDefault();
        triggerAction("cool");
      } else if (key === "w") {
        event.preventDefault();
        triggerAction("balance");
      } else if (key === "e") {
        event.preventDefault();
        triggerAction("boost");
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, pickReactor, triggerAction]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.24),transparent_44%),radial-gradient(circle_at_84%_78%,rgba(245,158,11,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Zone 052</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Reactor Grid</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}/{START_INTEGRITY}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progressPct}%` }} transition={{ duration: 0.15 }} />
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
                  Stabilize three drifting reactors in real time while charging the city grid to full capacity.
                </p>
                <ul className="space-y-1 text-xs text-amber-100">
                  <li>Win condition: reach stability target {TARGET_STABILITY}.</li>
                  <li>Fail condition: integrity drops to zero from sustained stress.</li>
                  <li>Controls: select reactor with 1-3, then use Q/W/E to cool/balance/boost.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Start Reactor Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section
              key="playing"
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-amber-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Stability {Math.floor(stabilityProgress)}/{TARGET_STABILITY}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {levels.map((level, index) => {
                  const selected = selectedReactor === index;
                  const safe = level >= Math.max(20, 28 - tier) && level <= Math.min(80, 72 + tier);
                  return (
                    <button
                      key={`reactor-${index}`}
                      type="button"
                      onClick={() => pickReactor(index)}
                      className={`rounded-2xl border p-3 text-left transition ${
                        selected
                          ? "border-amber-300/80 bg-amber-300/20"
                          : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20"
                      }`}
                    >
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-amber-200">Reactor {index + 1}</p>
                      <p className="mt-1 text-2xl font-black text-white">{level}</p>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                        <div className={`h-full ${safe ? "bg-emerald-300" : "bg-rose-300"}`} style={{ width: `${level}%` }} />
                      </div>
                      <p className="mt-2 text-[11px] text-amber-100">{safe ? "In safe range" : "Out of safe range"}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                <PhysicalButton onClick={() => triggerAction("cool")} className="h-10 bg-cyan-300 text-xs font-black text-slate-950">
                  Q: Cool
                </PhysicalButton>
                <PhysicalButton onClick={() => triggerAction("balance")} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">
                  W: Balance
                </PhysicalButton>
                <PhysicalButton onClick={() => triggerAction("boost")} className="h-10 bg-rose-300 text-xs font-black text-slate-950">
                  E: Boost
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-amber-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 text-xs text-amber-200">
                <Zap className="h-3.5 w-3.5" />
                Selected reactor: {selectedReactor + 1}. Tight correction keeps combo alive.
              </p>
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
              <h3 className="mt-3 text-2xl font-black text-white">Reactor Run Paused</h3>
              <p className="mt-2 text-sm text-amber-100">Resume stabilization or restart the run.</p>
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
                {resolution === "stabilized" ? "Grid Stabilized" : "Grid Meltdown"}
              </h3>
              <p className="mt-2 text-sm text-amber-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-amber-400 px-7 text-sm font-black text-slate-950">
                  Replay Reactor Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
