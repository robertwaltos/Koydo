"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Radar, ShieldAlert, Target } from "lucide-react";
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
type DroneKind = "hostile" | "decoy";

type Drone = {
  id: number;
  lane: number;
  eta: number;
  kind: DroneKind;
};

const LANE_COUNT = 3;
const START_LIVES = 4;
const TARGET_PROGRESS = 2800;
const TICK_MS = 120;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function droneClass(kind: DroneKind) {
  return kind === "hostile"
    ? "border-rose-300/80 bg-rose-400/25 text-rose-100"
    : "border-amber-300/80 bg-amber-400/25 text-amber-100";
}

function droneGlyph(kind: DroneKind) {
  return kind === "hostile" ? "H" : "D";
}

export default function Zone055PixelDroneIntercept() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [lives, setLives] = useState(START_LIVES);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [intercepts, setIntercepts] = useState(0);
  const [progress, setProgress] = useState(0);
  const [drones, setDrones] = useState<Drone[]>([]);
  const [resolution, setResolution] = useState<Resolution>("breach");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const droneIdRef = useRef(0);
  const livesRef = useRef(lives);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const interceptsRef = useRef(intercepts);
  const progressRef = useRef(progress);
  const dronesRef = useRef(drones);

  useEffect(() => {
    livesRef.current = lives;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    interceptsRef.current = intercepts;
    progressRef.current = progress;
    dronesRef.current = drones;
  }, [lives, score, combo, bestCombo, intercepts, progress, drones]);

  const progressPct = useMemo(() => Math.min(100, Math.round((progress / TARGET_PROGRESS) * 100)), [progress]);
  const tier = useMemo(() => 1 + Math.floor(progress / 500), [progress]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Pixel: Drone corridor secured. Convoy reached destination."
        : "Pixel: Drone breach confirmed. Intercept discipline collapsed.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-055",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TARGET_PROGRESS * 2,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setLives(START_LIVES);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setIntercepts(0);
    setProgress(0);
    setDrones([]);
    setResolution("breach");
    setInteractions(0);

    droneIdRef.current = 0;
    livesRef.current = START_LIVES;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    interceptsRef.current = 0;
    progressRef.current = 0;
    dronesRef.current = [];

    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: Intercept hostiles in the hit window. Avoid decoys.");
    void hapticSelection();
  };

  const restart = () => start();

  const interceptLane = (lane: number) => {
    if (phase !== "playing") return;
    const currentDrones = [...dronesRef.current];
    const currentTier = 1 + Math.floor(progressRef.current / 500);
    const hitWindow = Math.max(7, 16 - currentTier);

    let targetIndex = -1;
    let bestDelta = Number.POSITIVE_INFINITY;
    for (let index = 0; index < currentDrones.length; index += 1) {
      const drone = currentDrones[index];
      if (!drone || drone.lane !== lane) continue;
      const delta = Math.abs(drone.eta);
      if (delta <= hitWindow && delta < bestDelta) {
        targetIndex = index;
        bestDelta = delta;
      }
    }

    let nextLives = livesRef.current;
    let nextScore = scoreRef.current;
    let nextCombo = comboRef.current;
    let nextBestCombo = bestComboRef.current;
    let nextIntercepts = interceptsRef.current;
    let nextDrones = currentDrones;

    if (targetIndex === -1) {
      nextCombo = 0;
      nextScore = Math.max(0, nextScore - 2);
      setMood("thinking");
      setMessage("No lock in intercept window.");
      void hapticError();
    } else {
      const drone = currentDrones[targetIndex];
      nextDrones = currentDrones.filter((_, idx) => idx !== targetIndex);
      if (drone?.kind === "hostile") {
        nextCombo += 1;
        nextBestCombo = Math.max(nextBestCombo, nextCombo);
        nextIntercepts += 1;
        nextScore += 11 + Math.min(6, nextCombo);
        setMood("happy");
        setMessage("Hostile intercepted.");
        void hapticSuccess();
      } else {
        nextLives -= 1;
        nextCombo = 0;
        nextScore = Math.max(0, nextScore - 7);
        setMood("sad");
        setMessage("Decoy hit. Integrity damage.");
        void hapticError();
      }
    }

    livesRef.current = nextLives;
    scoreRef.current = nextScore;
    comboRef.current = nextCombo;
    bestComboRef.current = nextBestCombo;
    interceptsRef.current = nextIntercepts;
    dronesRef.current = nextDrones;

    setLives(nextLives);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setIntercepts(nextIntercepts);
    setDrones(nextDrones);
    setInteractions((value) => value + 1);

    if (nextLives <= 0) {
      finalize("breach", nextScore);
    }
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const loop = window.setInterval(() => {
      const currentLives = livesRef.current;
      const currentScore = scoreRef.current;
      const currentCombo = comboRef.current;
      const currentBestCombo = bestComboRef.current;
      const currentProgress = progressRef.current;
      const currentIntercepts = interceptsRef.current;
      const currentDrones = dronesRef.current;

      const currentTier = 1 + Math.floor(currentProgress / 500);
      const speed = 4 + currentTier * 0.9;
      const spawnChance = Math.min(0.58, 0.22 + currentTier * 0.05);
      const hostileRatio = Math.max(0.62, 0.82 - currentTier * 0.03);

      let nextLives = currentLives;
      let nextScore = currentScore;
      let nextCombo = currentCombo;
      const nextBestCombo = currentBestCombo;
      const nextIntercepts = currentIntercepts;
      const nextProgress = Math.min(TARGET_PROGRESS, currentProgress + 1 + currentTier * 0.35);

      const shifted = currentDrones.map((drone) => ({ ...drone, eta: drone.eta - speed }));
      let event: "breach" | null = null;

      const remaining: Drone[] = [];
      for (const drone of shifted) {
        if (drone.eta <= -18) {
          if (drone.kind === "hostile") {
            nextLives -= 1;
            nextCombo = 0;
            nextScore = Math.max(0, nextScore - 5);
            event = "breach";
          }
          continue;
        }
        remaining.push(drone);
      }

      if (Math.random() < spawnChance) {
        const lane = Math.floor(Math.random() * LANE_COUNT);
        const kind: DroneKind = Math.random() < hostileRatio ? "hostile" : "decoy";
        droneIdRef.current += 1;
        remaining.push({
          id: droneIdRef.current,
          lane,
          eta: 100 + Math.random() * 18,
          kind,
        });
      }

      if (event === "breach") {
        setMood("sad");
        setMessage("Hostile slipped through corridor.");
        void hapticError();
      }

      livesRef.current = nextLives;
      scoreRef.current = nextScore;
      comboRef.current = nextCombo;
      bestComboRef.current = nextBestCombo;
      interceptsRef.current = nextIntercepts;
      progressRef.current = nextProgress;
      dronesRef.current = remaining;

      setLives(nextLives);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBestCombo);
      setIntercepts(nextIntercepts);
      setProgress(nextProgress);
      setDrones(remaining);

      if (nextLives <= 0) {
        finalize("breach", nextScore);
        return;
      }
      if (nextProgress >= TARGET_PROGRESS) {
        const bonusScore = nextScore + nextIntercepts * 3;
        scoreRef.current = bonusScore;
        setScore(bonusScore);
        finalize("secured", bonusScore);
      }
    }, TICK_MS);
    return () => window.clearInterval(loop);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (event.key === "1" || key === "a") {
        event.preventDefault();
        interceptLane(0);
      } else if (event.key === "2" || key === "s") {
        event.preventDefault();
        interceptLane(1);
      } else if (event.key === "3" || key === "d") {
        event.preventDefault();
        interceptLane(2);
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, interceptLane]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">Zone 055</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Drone Intercept</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-sky-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Lives {lives}/{START_LIVES}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${progressPct}%` }} transition={{ duration: 0.15 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-sky-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-sky-100">
                  Intercept hostile drones in three lanes while avoiding decoys. Survive until corridor progress is complete.
                </p>
                <ul className="space-y-1 text-xs text-sky-100">
                  <li>Win condition: reach corridor progress {TARGET_PROGRESS}.</li>
                  <li>Fail condition: hostile breaches or decoy mistakes deplete all lives.</li>
                  <li>Controls: keys A/S/D or 1/2/3, and tap lane intercept buttons.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-sky-400 px-8 text-sm font-black text-slate-950">
                  Start Intercept Run
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
              className="rounded-3xl border border-sky-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-sky-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <Radar className="h-3.5 w-3.5" />
                  Intercepts {intercepts}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                {Array.from({ length: LANE_COUNT }, (_, lane) => (
                  <div key={`lane-${lane}`} className="relative h-72 overflow-hidden rounded-2xl border border-sky-100/25 bg-black/30">
                    <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-200">
                      Lane {lane + 1}
                    </p>
                    {drones
                      .filter((drone) => drone.lane === lane)
                      .map((drone) => (
                        <div
                          key={drone.id}
                          className={`absolute left-1/2 z-10 h-8 w-8 -translate-x-1/2 rounded-full border text-center text-xs font-black leading-8 ${droneClass(drone.kind)}`}
                          style={{ top: `${clamp(100 - drone.eta, 4, 94)}%` }}
                        >
                          {droneGlyph(drone.kind)}
                        </div>
                      ))}

                    <motion.div
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="absolute bottom-3 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-sky-300/80 bg-sky-400/30 text-base font-black"
                    >
                      {lane + 1}
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {[0, 1, 2].map((lane) => (
                  <PhysicalButton
                    key={`intercept-${lane}`}
                    onClick={() => interceptLane(lane)}
                    className="h-10 bg-sky-300 text-xs font-black text-slate-950"
                  >
                    <span className="inline-flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      Lane {lane + 1}
                    </span>
                  </PhysicalButton>
                ))}
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-sky-300 text-xs font-black text-slate-950">
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
              className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Intercept Paused</h3>
              <p className="mt-2 text-sm text-sky-100">Resume drone defense or restart from checkpoint zero.</p>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-sky-400 px-6 text-sm font-black text-slate-950">
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
              className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={resolution === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "secured" ? "Corridor Secured" : "Corridor Breach"}
              </h3>
              <p className="mt-2 text-sm text-sky-100">
                Score {score} | Best combo {bestCombo} | Intercepts {intercepts}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-sky-400 px-7 text-sm font-black text-slate-950">
                  Replay Intercept Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
