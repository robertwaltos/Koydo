"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Shield, Timer, TriangleAlert } from "lucide-react";
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
type ObstacleKind = "hazard" | "data" | "shield";

type Obstacle = {
  id: number;
  lane: number;
  y: number;
  kind: ObstacleKind;
};

const LANE_COUNT = 3;
const START_LIVES = 4;
const TARGET_DISTANCE = 1200;
const TICK_MS = 120;
const BASE_SPEED = 3;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function obstacleGlyph(kind: ObstacleKind) {
  if (kind === "hazard") return "!";
  if (kind === "shield") return "S";
  return "D";
}

function obstacleClass(kind: ObstacleKind) {
  if (kind === "hazard") return "border-rose-300/80 bg-rose-400/25 text-rose-100";
  if (kind === "shield") return "border-cyan-300/80 bg-cyan-400/25 text-cyan-100";
  return "border-emerald-300/80 bg-emerald-400/25 text-emerald-100";
}

export default function Zone050PixelLaneDefender() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [lane, setLane] = useState(1);
  const [lives, setLives] = useState(START_LIVES);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [distance, setDistance] = useState(0);
  const [guardCharge, setGuardCharge] = useState(0);
  const [shieldTicks, setShieldTicks] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [resolution, setResolution] = useState<Resolution>("breach");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const obstacleIdRef = useRef(0);
  const laneRef = useRef(lane);
  const livesRef = useRef(lives);
  const scoreRef = useRef(score);
  const comboRef = useRef(combo);
  const bestComboRef = useRef(bestCombo);
  const distanceRef = useRef(distance);
  const guardChargeRef = useRef(guardCharge);
  const shieldTicksRef = useRef(shieldTicks);
  const obstaclesRef = useRef(obstacles);

  const progress = useMemo(
    () => Math.min(100, Math.round((distance / TARGET_DISTANCE) * 100)),
    [distance],
  );
  const tier = useMemo(() => 1 + Math.floor(distance / 220), [distance]);

  useEffect(() => {
    laneRef.current = lane;
    livesRef.current = lives;
    scoreRef.current = score;
    comboRef.current = combo;
    bestComboRef.current = bestCombo;
    distanceRef.current = distance;
    guardChargeRef.current = guardCharge;
    shieldTicksRef.current = shieldTicks;
    obstaclesRef.current = obstacles;
  }, [lane, lives, score, combo, bestCombo, distance, guardCharge, shieldTicks, obstacles]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Pixel: Lane corridor secured. Delivery beacon is online."
        : "Pixel: Corridor breach confirmed. Re-run with tighter lane control.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-050",
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
    setLane(1);
    setLives(START_LIVES);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setDistance(0);
    setGuardCharge(0);
    setShieldTicks(0);
    setObstacles([]);
    setResolution("breach");
    setInteractions(0);

    obstacleIdRef.current = 0;
    laneRef.current = 1;
    livesRef.current = START_LIVES;
    scoreRef.current = 0;
    comboRef.current = 0;
    bestComboRef.current = 0;
    distanceRef.current = 0;
    guardChargeRef.current = 0;
    shieldTicksRef.current = 0;
    obstaclesRef.current = [];

    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: Dodge hazards, collect data cores, and use guard charge at 40+.");
    void hapticSelection();
  };

  const restart = () => start();

  const moveLane = (delta: number) => {
    if (phase !== "playing") return;
    const nextLane = clamp(laneRef.current + delta, 0, LANE_COUNT - 1);
    if (nextLane === laneRef.current) return;
    laneRef.current = nextLane;
    setLane(nextLane);
    setInteractions((value) => value + 1);
    void hapticSelection();
  };

  const selectLane = (laneIndex: number) => {
    if (phase !== "playing") return;
    const nextLane = clamp(laneIndex, 0, LANE_COUNT - 1);
    if (nextLane === laneRef.current) return;
    laneRef.current = nextLane;
    setLane(nextLane);
    setInteractions((value) => value + 1);
    void hapticSelection();
  };

  const activateGuard = () => {
    if (phase !== "playing") return;
    if (guardChargeRef.current < 40) {
      setMood("thinking");
      setMessage("Guard charge below 40. Collect more data cores.");
      void hapticError();
      return;
    }
    const nextCharge = clamp(guardChargeRef.current - 40, 0, 100);
    const nextShieldTicks = Math.max(shieldTicksRef.current, 16);
    guardChargeRef.current = nextCharge;
    shieldTicksRef.current = nextShieldTicks;
    setGuardCharge(nextCharge);
    setShieldTicks(nextShieldTicks);
    setInteractions((value) => value + 1);
    setMood("cheering");
    setMessage("Barrier engaged.");
    void hapticSuccess();
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const loop = setInterval(() => {
      const currentLane = laneRef.current;
      const currentLives = livesRef.current;
      const currentScore = scoreRef.current;
      const currentCombo = comboRef.current;
      const currentBestCombo = bestComboRef.current;
      const currentDistance = distanceRef.current;
      const currentGuardCharge = guardChargeRef.current;
      const currentShieldTicks = shieldTicksRef.current;
      const currentObstacles = obstaclesRef.current;

      const currentTier = 1 + Math.floor(currentDistance / 220);
      const speed = BASE_SPEED + currentTier * 0.7;
      const spawnChance = Math.min(0.52, 0.18 + currentTier * 0.04);

      let nextLives = currentLives;
      let nextScore = currentScore;
      let nextCombo = currentCombo;
      let nextBestCombo = currentBestCombo;
      const nextDistance = currentDistance + 1 + currentTier * 0.2;
      let nextGuardCharge = clamp(currentGuardCharge + 0.25, 0, 100);
      let nextShieldTicks = Math.max(0, currentShieldTicks - 1);
      let nextObstacles = currentObstacles.map((obstacle) => ({
        ...obstacle,
        y: obstacle.y + speed,
      }));
      let lastEvent: "hit" | "collect" | "block" | "shield" | null = null;

      if (Math.random() < spawnChance) {
        const roll = Math.random();
        const kind: ObstacleKind = roll < 0.56 ? "hazard" : roll < 0.86 ? "data" : "shield";
        const spawnLane = Math.floor(Math.random() * LANE_COUNT);
        obstacleIdRef.current += 1;
        nextObstacles.push({
          id: obstacleIdRef.current,
          lane: spawnLane,
          y: -8,
          kind,
        });
      }

      const keep: Obstacle[] = [];
      for (const obstacle of nextObstacles) {
        const inPlayerZone = obstacle.y >= 86 && obstacle.y <= 102;
        if (inPlayerZone && obstacle.lane === currentLane) {
          if (obstacle.kind === "hazard") {
            if (nextShieldTicks > 0) {
              nextScore += 5 + Math.min(4, nextCombo);
              nextCombo += 1;
              nextBestCombo = Math.max(nextBestCombo, nextCombo);
              lastEvent = "block";
            } else {
              nextLives -= 1;
              nextCombo = 0;
              nextScore = Math.max(0, nextScore - 4);
              lastEvent = "hit";
            }
          } else if (obstacle.kind === "data") {
            nextScore += 10 + Math.min(6, nextCombo + 1);
            nextCombo += 1;
            nextBestCombo = Math.max(nextBestCombo, nextCombo);
            nextGuardCharge = clamp(nextGuardCharge + 18, 0, 100);
            lastEvent = "collect";
          } else {
            nextScore += 7;
            nextCombo += 1;
            nextBestCombo = Math.max(nextBestCombo, nextCombo);
            nextShieldTicks = Math.max(nextShieldTicks, 12);
            nextGuardCharge = clamp(nextGuardCharge + 8, 0, 100);
            lastEvent = "shield";
          }
          continue;
        }

        if (obstacle.y > 108) {
          if (obstacle.kind === "data") {
            nextCombo = 0;
            nextScore = Math.max(0, nextScore - 2);
          }
          continue;
        }

        keep.push(obstacle);
      }
      nextObstacles = keep;

      if (lastEvent === "collect") {
        setMood("happy");
        setMessage("Data core captured.");
        void hapticSuccess();
      } else if (lastEvent === "shield") {
        setMood("cheering");
        setMessage("Shield cache collected.");
        void hapticSuccess();
      } else if (lastEvent === "block") {
        setMood("happy");
        setMessage("Barrier blocked incoming hazard.");
        void hapticSelection();
      } else if (lastEvent === "hit") {
        setMood("sad");
        setMessage("Hazard impact detected. Shift lanes.");
        void hapticError();
      }

      livesRef.current = nextLives;
      scoreRef.current = nextScore;
      comboRef.current = nextCombo;
      bestComboRef.current = nextBestCombo;
      distanceRef.current = nextDistance;
      guardChargeRef.current = nextGuardCharge;
      shieldTicksRef.current = nextShieldTicks;
      obstaclesRef.current = nextObstacles;

      setLives(nextLives);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBestCombo);
      setDistance(Math.min(nextDistance, TARGET_DISTANCE));
      setGuardCharge(nextGuardCharge);
      setShieldTicks(nextShieldTicks);
      setObstacles(nextObstacles);

      if (nextLives <= 0) {
        finalize("breach", nextScore);
        return;
      }
      if (nextDistance >= TARGET_DISTANCE) {
        finalize("secured", nextScore);
      }
    }, TICK_MS);
    return () => clearInterval(loop);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (event.key === "ArrowLeft" || key === "a") {
        event.preventDefault();
        moveLane(-1);
      } else if (event.key === "ArrowRight" || key === "d") {
        event.preventDefault();
        moveLane(1);
      } else if (event.key === "1" || event.key === "2" || event.key === "3") {
        event.preventDefault();
        selectLane(Number(event.key) - 1);
      } else if (event.code === "Space" || event.key === "Enter") {
        event.preventDefault();
        activateGuard();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, moveLane, selectLane, activateGuard]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(59,130,246,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Zone 050</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Lane Defender</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-cyan-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Lives {lives}/{START_LIVES}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-cyan-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.15 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-cyan-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-cyan-100">
                  Defend the corridor: dodge hazards, capture data cores, and activate guard when charge reaches 40.
                </p>
                <ul className="space-y-1 text-xs text-cyan-100">
                  <li>Win condition: survive until route distance reaches {TARGET_DISTANCE}.</li>
                  <li>Fail condition: all lives lost from hazard impacts.</li>
                  <li>Controls: arrow keys/A-D, keys 1-3 lane select, Space/Enter for guard.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-cyan-400 px-8 text-sm font-black text-slate-950">
                  Start Defense Run
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
              className="rounded-3xl border border-cyan-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-cyan-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <Timer className="h-3.5 w-3.5" />
                  Distance {Math.floor(distance)}/{TARGET_DISTANCE}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <Shield className="h-3.5 w-3.5" />
                  Guard {Math.floor(guardCharge)} | Shield ticks {shieldTicks}
                </span>
              </div>

              <div className="mb-3 rounded-2xl border border-cyan-100/25 bg-cyan-100/10 p-3 text-xs text-cyan-100">
                Tier {tier} speed online. Hazard frequency increases each tier.
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                {Array.from({ length: LANE_COUNT }, (_, laneIndex) => (
                  <div
                    key={`lane-${laneIndex}`}
                    className={`relative h-72 overflow-hidden rounded-2xl border ${
                      lane === laneIndex ? "border-cyan-300/70 bg-cyan-200/10" : "border-cyan-100/25 bg-black/30"
                    }`}
                  >
                    <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200">
                      Lane {laneIndex + 1}
                    </p>

                    {obstacles
                      .filter((obstacle) => obstacle.lane === laneIndex)
                      .map((obstacle) => (
                        <div
                          key={obstacle.id}
                          className={`absolute left-1/2 z-10 h-8 w-8 -translate-x-1/2 rounded-full border text-center text-xs font-black leading-8 ${obstacleClass(obstacle.kind)}`}
                          style={{ top: `${obstacle.y}%` }}
                        >
                          {obstacleGlyph(obstacle.kind)}
                        </div>
                      ))}

                    {lane === laneIndex ? (
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 0.45, repeat: Infinity }}
                        className="absolute bottom-3 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/80 bg-cyan-400/30 text-lg"
                      >
                        P
                      </motion.div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-5">
                <PhysicalButton onClick={() => moveLane(-1)} className="h-10 bg-cyan-300 text-xs font-black text-slate-950 sm:col-span-1">
                  Left
                </PhysicalButton>
                <PhysicalButton onClick={() => moveLane(1)} className="h-10 bg-cyan-300 text-xs font-black text-slate-950 sm:col-span-1">
                  Right
                </PhysicalButton>
                <PhysicalButton
                  onClick={activateGuard}
                  className={`h-10 text-xs font-black sm:col-span-2 ${guardCharge >= 40 ? "bg-emerald-400 text-slate-950" : "bg-zinc-700 text-zinc-100"}`}
                >
                  Activate Guard (40)
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-cyan-300 text-xs font-black text-slate-950 sm:col-span-1">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((laneIndex) => (
                  <button
                    key={`select-${laneIndex}`}
                    type="button"
                    onClick={() => selectLane(laneIndex)}
                    className={`rounded-xl border px-3 py-2 text-xs font-black transition ${
                      lane === laneIndex
                        ? "border-cyan-300/80 bg-cyan-400/25 text-cyan-100"
                        : "border-cyan-100/25 bg-cyan-100/10 text-cyan-100 hover:bg-cyan-100/20"
                    }`}
                  >
                    Lane {laneIndex + 1}
                  </button>
                ))}
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section
              key="paused"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-cyan-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Defense Run Paused</h3>
              <p className="mt-2 text-sm text-cyan-100">Resume corridor defense or restart from checkpoint zero.</p>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-cyan-400 px-6 text-sm font-black text-slate-950">
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
              className="rounded-3xl border border-cyan-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={resolution === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "secured" ? "Corridor Secured" : "Corridor Breached"}
              </h3>
              <p className="mt-2 text-sm text-cyan-100">
                Score {score} | Best combo {bestCombo} | Distance {Math.floor(distance)}
              </p>
              <p className="mt-2 text-xs text-cyan-200">
                {resolution === "secured"
                  ? "Data convoy delivered without corridor collapse."
                  : "Hazard chain overwhelmed the lane defense."}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-cyan-200">
                {resolution === "secured" ? (
                  <>
                    <Shield className="h-3.5 w-3.5" />
                    Guard timing and lane discipline remained stable.
                  </>
                ) : (
                  <>
                    <TriangleAlert className="h-3.5 w-3.5" />
                    Impacts exceeded life budget before route completion.
                  </>
                )}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-cyan-400 px-7 text-sm font-black text-slate-950">
                  Replay Defense Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
