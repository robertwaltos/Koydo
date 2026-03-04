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
type Resolution = "secured" | "overrun";
type ThreatKind = "wildfire" | "flood" | "landslide" | "supply";

type Threat = {
  id: number;
  lane: number;
  y: number;
  kind: ThreatKind;
  speed: number;
};

const LANE_COUNT = 3;
const START_STABILITY = 4;
const TARGET_DISTANCE = 1450;
const TICK_MS = 120;
const MAX_CREWS = 4;

function threatGlyph(kind: ThreatKind) {
  if (kind === "wildfire") return "F";
  if (kind === "flood") return "W";
  if (kind === "landslide") return "L";
  return "+";
}

function threatClass(kind: ThreatKind) {
  if (kind === "supply") {
    return "border-emerald-300/80 bg-emerald-400/25 text-emerald-100";
  }
  if (kind === "wildfire") {
    return "border-orange-300/80 bg-orange-400/25 text-orange-100";
  }
  if (kind === "flood") {
    return "border-cyan-300/80 bg-cyan-400/25 text-cyan-100";
  }
  return "border-amber-300/80 bg-amber-400/25 text-amber-100";
}

function isHostile(kind: ThreatKind) {
  return kind !== "supply";
}

export default function Zone124TerraFrontlineWardens() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [stability, setStability] = useState(START_STABILITY);
  const [crews, setCrews] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [distance, setDistance] = useState(0);
  const [threats, setThreats] = useState<Threat[]>([]);
  const [resolution, setResolution] = useState<Resolution>("overrun");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const threatIdRef = useRef(0);
  const stabilityRef = useRef(stability);
  const crewsRef = useRef(crews);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const distanceRef = useRef(distance);
  const threatsRef = useRef(threats);

  useEffect(() => {
    stabilityRef.current = stability;
    crewsRef.current = crews;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    distanceRef.current = distance;
    threatsRef.current = threats;
  }, [stability, crews, score, combo, bestCombo, distance, threats]);

  const progressPct = useMemo(() => Math.min(100, Math.round((distance / TARGET_DISTANCE) * 100)), [distance]);
  const tier = useMemo(() => 1 + Math.floor(distance / 260), [distance]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Terra: frontline corridors secured."
        : "Terra: frontline overrun by cascading hazards.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-124",
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
    setStability(START_STABILITY);
    setCrews(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setDistance(0);
    setThreats([]);
    setResolution("overrun");
    setInteractions(0);
    threatIdRef.current = 0;
    stabilityRef.current = START_STABILITY;
    crewsRef.current = 1;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    distanceRef.current = 0;
    threatsRef.current = [];
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: intercept hazard waves and route supply pods for recovery.");
    void hapticSelection();
  };

  const restart = () => start();

  const deployCrew = () => {
    if (phase !== "playing" || crews <= 0 || stability >= START_STABILITY) return;
    const nextCrews = crews - 1;
    const nextStability = Math.min(START_STABILITY, stability + 1);
    setCrews(nextCrews);
    setStability(nextStability);
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Field crew restored regional stability.");
    void hapticSelection();
  };

  const intercept = (lane: number) => {
    if (phase !== "playing") return;
    const current = [...threatsRef.current];
    const hitTop = 82;
    const hitBottom = 102;

    let targetIndex = -1;
    for (let index = 0; index < current.length; index += 1) {
      const threat = current[index];
      if (!threat || threat.lane !== lane) continue;
      if (threat.y >= hitTop && threat.y <= hitBottom) {
        targetIndex = index;
        break;
      }
    }

    const nextStability = stabilityRef.current;
    let nextCrews = crewsRef.current;
    let nextScore = scoreRef.current;
    let nextCombo = comboRef.current;
    let nextBest = bestComboRef.current;
    let nextThreats = current;

    if (targetIndex === -1) {
      nextCombo = 0;
      nextScore = Math.max(0, nextScore - 2);
      setMood("thinking");
      setMessage("No intercept window in that lane.");
      void hapticError();
    } else {
      const threat = current[targetIndex];
      nextThreats = current.filter((_, idx) => idx !== targetIndex);
      if (threat?.kind === "supply") {
        nextCrews = Math.min(MAX_CREWS, nextCrews + 1);
        nextScore += 5;
        setMood("happy");
        setMessage("Supply pod captured. +1 crew.");
        void hapticSelection();
      } else {
        nextCombo += 1;
        nextBest = Math.max(nextBest, nextCombo);
        nextScore += 10 + Math.min(7, nextCombo);
        if (nextCombo > 0 && nextCombo % 6 === 0) {
          nextCrews = Math.min(MAX_CREWS, nextCrews + 1);
          setMessage("Long chain secured. +1 crew.");
        } else {
          setMessage("Hazard neutralized.");
        }
        setMood("happy");
        void hapticSuccess();
      }
    }

    stabilityRef.current = nextStability;
    crewsRef.current = nextCrews;
    scoreRef.current = nextScore;
    comboRef.current = nextCombo;
    bestComboRef.current = nextBest;
    threatsRef.current = nextThreats;

    setStability(nextStability);
    setCrews(nextCrews);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBest);
    setThreats(nextThreats);
    setInteractions((value) => value + 1);

    if (nextStability <= 0) {
      finalize("overrun", nextScore);
    }
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const loop = window.setInterval(() => {
      const currentStability = stabilityRef.current;
      const currentCrews = crewsRef.current;
      const currentScore = scoreRef.current;
      const currentCombo = comboRef.current;
      const currentBest = bestComboRef.current;
      const currentDistance = distanceRef.current;
      const currentThreats = threatsRef.current;

      const currentTier = 1 + Math.floor(currentDistance / 260);
      const baseSpeed = 3.1 + currentTier * 0.65;
      const spawnChance = Math.min(0.68, 0.22 + currentTier * 0.05);
      const hostileChance = Math.max(0.56, 0.78 - currentTier * 0.03);

      let nextStability = currentStability;
      let nextCrews = currentCrews;
      let nextScore = currentScore;
      let nextCombo = currentCombo;
      const nextBest = currentBest;
      const nextDistance = Math.min(TARGET_DISTANCE, currentDistance + 1 + currentTier * 0.38);

      let shifted = currentThreats.map((threat) => ({
        ...threat,
        y: threat.y + threat.speed + currentTier * 0.35,
      }));

      let breached = false;
      const kept: Threat[] = [];
      for (const threat of shifted) {
        if (threat.y > 104) {
          if (isHostile(threat.kind)) {
            if (nextCrews > 0) {
              nextCrews -= 1;
              nextScore = Math.max(0, nextScore - 1);
            } else {
              nextStability -= 1;
              nextCombo = 0;
              nextScore = Math.max(0, nextScore - 7);
              breached = true;
            }
          }
          continue;
        }
        kept.push(threat);
      }
      shifted = kept;

      if (Math.random() < spawnChance) {
        const lane = Math.floor(Math.random() * LANE_COUNT);
        const kind: ThreatKind =
          Math.random() < hostileChance
            ? (["wildfire", "flood", "landslide"][Math.floor(Math.random() * 3)] as ThreatKind)
            : "supply";
        threatIdRef.current += 1;
        shifted.push({
          id: threatIdRef.current,
          lane,
          y: -12,
          kind,
          speed: baseSpeed + Math.random() * 1.2,
        });
      }

      stabilityRef.current = nextStability;
      crewsRef.current = nextCrews;
      scoreRef.current = nextScore;
      comboRef.current = nextCombo;
      bestComboRef.current = nextBest;
      distanceRef.current = nextDistance;
      threatsRef.current = shifted;

      setStability(nextStability);
      setCrews(nextCrews);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBest);
      setDistance(nextDistance);
      setThreats(shifted);

      if (breached) {
        setMood("sad");
        setMessage("Uncontained hazard hit civilian corridor.");
      }

      if (nextStability <= 0) {
        finalize("overrun", nextScore);
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
      } else if (key === "r") {
        event.preventDefault();
        deployCrew();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, intercept, deployCrew]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(74,222,128,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(16,185,129,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 124</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Frontline Wardens</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Stability {stability}/{START_STABILITY}</span>
            <span>Crews {crews}/{MAX_CREWS}</span>
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
                <p className="max-w-2xl text-sm text-emerald-100">Defend three frontier lanes, intercept hostile waves, and capture supply pods for recovery crews.</p>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Frontline
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
              <div className="grid gap-2 sm:grid-cols-3">
                {Array.from({ length: LANE_COUNT }, (_, lane) => (
                  <div key={`lane-${lane}`} className="relative h-72 overflow-hidden rounded-2xl border border-emerald-100/25 bg-black/30">
                    <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-200">Lane {lane + 1}</p>
                    {threats.filter((entry) => entry.lane === lane).map((entry) => (
                      <div
                        key={entry.id}
                        className={`absolute left-1/2 z-10 h-8 w-8 -translate-x-1/2 rounded-full border text-center text-xs font-black leading-8 ${threatClass(entry.kind)}`}
                        style={{ top: `${entry.y}%` }}
                      >
                        {threatGlyph(entry.kind)}
                      </div>
                    ))}
                    <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 0.55, repeat: Infinity }} className="absolute bottom-3 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-300/80 bg-emerald-400/30 text-base font-black">
                      {lane + 1}
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {[0, 1, 2].map((lane) => (
                  <PhysicalButton key={`lane-btn-${lane}`} onClick={() => intercept(lane)} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">
                    <span className="inline-flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      Lane {lane + 1}
                    </span>
                  </PhysicalButton>
                ))}
                <PhysicalButton onClick={deployCrew} disabled={crews <= 0 || stability >= START_STABILITY} className="h-10 bg-emerald-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Rebuild
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
              <h3 className="mt-3 text-2xl font-black text-white">Frontline Paused</h3>
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
                {resolution === "secured" ? "Frontline Secured" : "Frontline Overrun"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Frontline
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

