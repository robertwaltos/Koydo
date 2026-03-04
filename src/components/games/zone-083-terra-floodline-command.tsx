"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Radar, ShieldAlert, ShieldPlus, Target } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "secured" | "breach";
type SurgeKind = "flood" | "debris" | "lightning" | "supply";

type Surge = {
  id: number;
  lane: number;
  y: number;
  kind: SurgeKind;
  speed: number;
};

const LANE_COUNT = 4;
const START_BARRIER = 4;
const TARGET_DISTANCE = 1520;
const TICK_MS = 115;
const MAX_CREW = 4;

function surgeGlyph(kind: SurgeKind) {
  if (kind === "flood") return "W";
  if (kind === "debris") return "D";
  if (kind === "lightning") return "L";
  return "+";
}

function surgeClass(kind: SurgeKind) {
  if (kind === "supply") return "border-emerald-300/80 bg-emerald-400/25 text-emerald-100";
  if (kind === "flood") return "border-cyan-300/80 bg-cyan-400/25 text-cyan-100";
  if (kind === "debris") return "border-amber-300/80 bg-amber-400/25 text-amber-100";
  return "border-violet-300/80 bg-violet-400/25 text-violet-100";
}

function isHostile(kind: SurgeKind) {
  return kind !== "supply";
}

export default function Zone083TerraFloodlineCommand() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [barrier, setBarrier] = useState(START_BARRIER);
  const [crew, setCrew] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [distance, setDistance] = useState(0);
  const [surges, setSurges] = useState<Surge[]>([]);
  const [resolution, setResolution] = useState<Resolution>("breach");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const surgeIdRef = useRef(0);
  const barrierRef = useRef(barrier);
  const crewRef = useRef(crew);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const distanceRef = useRef(distance);
  const surgesRef = useRef(surges);

  useEffect(() => {
    barrierRef.current = barrier;
    crewRef.current = crew;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    distanceRef.current = distance;
    surgesRef.current = surges;
  }, [barrier, crew, score, combo, bestCombo, distance, surges]);

  const progressPct = useMemo(() => Math.min(100, Math.round((distance / TARGET_DISTANCE) * 100)), [distance]);
  const tier = useMemo(() => 1 + Math.floor(distance / 250), [distance]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Terra: floodline secured."
        : "Terra: floodline breached.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-083",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TARGET_DISTANCE * 2,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setBarrier(START_BARRIER);
    setCrew(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setDistance(0);
    setSurges([]);
    setResolution("breach");
    setInteractions(0);
    surgeIdRef.current = 0;
    barrierRef.current = START_BARRIER;
    crewRef.current = 1;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    distanceRef.current = 0;
    surgesRef.current = [];
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: intercept floodline surges and harvest supply pods for crew support.");
    void hapticSelection();
  };

  const restart = () => start();

  const reinforce = () => {
    if (phase !== "playing" || crew <= 0 || barrier >= START_BARRIER) return;
    const nextCrew = crew - 1;
    const nextBarrier = Math.min(START_BARRIER, barrier + 1);
    setCrew(nextCrew);
    setBarrier(nextBarrier);
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Crew reinforcement restored one barrier segment.");
    void hapticSelection();
  };

  const intercept = (lane: number) => {
    if (phase !== "playing") return;
    const current = [...surgesRef.current];
    const hitTop = 81;
    const hitBottom = 102;

    let targetIndex = -1;
    for (let index = 0; index < current.length; index += 1) {
      const surge = current[index];
      if (!surge || surge.lane !== lane) continue;
      if (surge.y >= hitTop && surge.y <= hitBottom) {
        targetIndex = index;
        break;
      }
    }

    const nextBarrier = barrierRef.current;
    let nextCrew = crewRef.current;
    let nextScore = scoreRef.current;
    let nextCombo = comboRef.current;
    let nextBest = bestComboRef.current;
    let nextSurges = current;

    if (targetIndex === -1) {
      nextCombo = 0;
      nextScore = Math.max(0, nextScore - 2);
      setMood("thinking");
      setMessage("No surge in intercept window.");
      void hapticError();
    } else {
      const surge = current[targetIndex];
      nextSurges = current.filter((_, idx) => idx !== targetIndex);
      if (surge?.kind === "supply") {
        nextCrew = Math.min(MAX_CREW, nextCrew + 1);
        nextScore += 5;
        setMood("happy");
        setMessage("Supply pod secured. +1 crew.");
        void hapticSelection();
      } else {
        nextCombo += 1;
        nextBest = Math.max(nextBest, nextCombo);
        nextScore += 10 + Math.min(7, nextCombo);
        if (nextCombo > 0 && nextCombo % 5 === 0) {
          nextCrew = Math.min(MAX_CREW, nextCrew + 1);
          setMessage("Defense streak. +1 crew.");
        } else {
          setMessage("Surge intercepted.");
        }
        setMood("happy");
        void hapticSuccess();
      }
    }

    barrierRef.current = nextBarrier;
    crewRef.current = nextCrew;
    scoreRef.current = nextScore;
    comboRef.current = nextCombo;
    bestComboRef.current = nextBest;
    surgesRef.current = nextSurges;

    setBarrier(nextBarrier);
    setCrew(nextCrew);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBest);
    setSurges(nextSurges);
    setInteractions((value) => value + 1);

    if (nextBarrier <= 0) {
      finalize("breach", nextScore);
    }
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const loop = window.setInterval(() => {
      const currentBarrier = barrierRef.current;
      const currentCrew = crewRef.current;
      const currentScore = scoreRef.current;
      const currentCombo = comboRef.current;
      const currentBest = bestComboRef.current;
      const currentDistance = distanceRef.current;
      const currentSurges = surgesRef.current;

      const currentTier = 1 + Math.floor(currentDistance / 250);
      const baseSpeed = 3.1 + currentTier * 0.7;
      const spawnChance = Math.min(0.72, 0.24 + currentTier * 0.05);
      const hostileChance = Math.max(0.54, 0.8 - currentTier * 0.03);

      let nextBarrier = currentBarrier;
      let nextCrew = currentCrew;
      let nextScore = currentScore;
      let nextCombo = currentCombo;
      const nextBest = currentBest;
      const nextDistance = Math.min(TARGET_DISTANCE, currentDistance + 1 + currentTier * 0.42);

      let shifted = currentSurges.map((surge) => ({
        ...surge,
        y: surge.y + surge.speed + currentTier * 0.35,
      }));

      let breached = false;
      const kept: Surge[] = [];
      for (const surge of shifted) {
        if (surge.y > 104) {
          if (isHostile(surge.kind)) {
            if (nextCrew > 0) {
              nextCrew -= 1;
              nextScore = Math.max(0, nextScore - 1);
            } else {
              nextBarrier -= 1;
              nextCombo = 0;
              nextScore = Math.max(0, nextScore - 7);
              breached = true;
            }
          }
          continue;
        }
        kept.push(surge);
      }
      shifted = kept;

      if (Math.random() < spawnChance) {
        const lane = Math.floor(Math.random() * LANE_COUNT);
        const kind: SurgeKind =
          Math.random() < hostileChance
            ? (["flood", "debris", "lightning"][Math.floor(Math.random() * 3)] as SurgeKind)
            : "supply";
        surgeIdRef.current += 1;
        shifted.push({
          id: surgeIdRef.current,
          lane,
          y: -12,
          kind,
          speed: baseSpeed + Math.random() * 1.4,
        });
      }

      barrierRef.current = nextBarrier;
      crewRef.current = nextCrew;
      scoreRef.current = nextScore;
      comboRef.current = nextCombo;
      bestComboRef.current = nextBest;
      distanceRef.current = nextDistance;
      surgesRef.current = shifted;

      setBarrier(nextBarrier);
      setCrew(nextCrew);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBest);
      setDistance(nextDistance);
      setSurges(shifted);

      if (breached) {
        setMood("sad");
        setMessage("Floodline breached a protection gate.");
      }

      if (nextBarrier <= 0) {
        finalize("breach", nextScore);
        return;
      }
      if (nextDistance >= TARGET_DISTANCE) {
        finalize("secured", nextScore);
      }
    }, TICK_MS);
    return () => window.clearInterval(loop);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "1" || key === "a") {
        event.preventDefault();
        intercept(0);
      } else if (key === "2" || key === "s") {
        event.preventDefault();
        intercept(1);
      } else if (key === "3" || key === "d") {
        event.preventDefault();
        intercept(2);
      } else if (key === "4" || key === "f") {
        event.preventDefault();
        intercept(3);
      } else if (key === "r") {
        event.preventDefault();
        reinforce();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, intercept, reinforce]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(74,222,128,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(16,185,129,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 083</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Floodline Command</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Barrier {barrier}/{START_BARRIER}</span>
            <span>Crew {crew}/{MAX_CREW}</span>
          </div>
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-emerald-300" animate={{ width: `${progressPct}%` }} transition={{ duration: 0.15 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-emerald-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="terra" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-emerald-100">Defend four floodline lanes and keep barriers intact through the full evacuation window.</p>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Floodline
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key="playing" initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-emerald-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <Radar className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Distance {Math.floor(distance)}/{TARGET_DISTANCE}
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-4">
                {Array.from({ length: LANE_COUNT }, (_, lane) => (
                  <div key={`lane-${lane}`} className="relative h-72 overflow-hidden rounded-2xl border border-emerald-100/25 bg-black/30">
                    <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-200">Lane {lane + 1}</p>
                    {surges.filter((entry) => entry.lane === lane).map((entry) => (
                      <div
                        key={entry.id}
                        className={`absolute left-1/2 z-10 h-8 w-8 -translate-x-1/2 rounded-full border text-center text-xs font-black leading-8 ${surgeClass(entry.kind)}`}
                        style={{ top: `${entry.y}%` }}
                      >
                        {surgeGlyph(entry.kind)}
                      </div>
                    ))}
                    <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 0.55, repeat: Infinity }} className="absolute bottom-3 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-300/80 bg-emerald-400/30 text-base font-black">
                      {lane + 1}
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-5">
                {[0, 1, 2, 3].map((lane) => (
                  <PhysicalButton key={`lane-btn-${lane}`} onClick={() => intercept(lane)} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">
                    <span className="inline-flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      Lane {lane + 1}
                    </span>
                  </PhysicalButton>
                ))}
                <PhysicalButton onClick={reinforce} disabled={crew <= 0 || barrier >= START_BARRIER} className="h-10 bg-emerald-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Reinforce
                  </span>
                </PhysicalButton>
              </div>
              <div className="mt-3 flex justify-end">
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
              <h3 className="mt-3 text-2xl font-black text-white">Floodline Paused</h3>
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
                <MascotFriend id="terra" mood={resolution === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "secured" ? "Floodline Secured" : "Floodline Breach"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Floodline
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
