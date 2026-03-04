"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, ShieldAlert, Target } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "rescued" | "collapse";
type Coord = { x: number; y: number };

const GRID_SIZE = 6;
const TARGET_RESCUES = 8;
const START_HULL = 4;
const OXYGEN_MAX = 100;
const BASE: Coord = { x: 0, y: 0 };

function keyOf(coord: Coord) {
  return `${coord.x},${coord.y}`;
}

function sameCoord(a: Coord, b: Coord) {
  return a.x === b.x && a.y === b.y;
}

function randomCell(exclusions: Set<string>, seed: string): Coord {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 33 + seed.charCodeAt(index)) | 0;
  }

  for (let attempt = 0; attempt < 80; attempt += 1) {
    hash = (hash * 1664525 + 1013904223) | 0;
    const x = Math.abs(hash) % GRID_SIZE;
    hash = (hash * 22695477 + 1) | 0;
    const y = Math.abs(hash) % GRID_SIZE;
    const candidate = { x, y };
    if (!exclusions.has(keyOf(candidate))) return candidate;
  }

  for (let y = 0; y < GRID_SIZE; y += 1) {
    for (let x = 0; x < GRID_SIZE; x += 1) {
      const fallback = { x, y };
      if (!exclusions.has(keyOf(fallback))) return fallback;
    }
  }

  return { x: GRID_SIZE - 1, y: GRID_SIZE - 1 };
}

function spawnHazards(count: number, protectedKeys: Set<string>, salt: string): Coord[] {
  const hazards: Coord[] = [];
  for (let index = 0; index < count; index += 1) {
    const coord = randomCell(new Set([...protectedKeys, ...hazards.map((entry) => keyOf(entry))]), `${salt}:h${index}`);
    hazards.push(coord);
  }
  return hazards;
}

function bounded(value: number) {
  return Math.max(0, Math.min(GRID_SIZE - 1, value));
}

function moveHazards(current: Coord[], salt: string): Coord[] {
  return current.map((hazard, index) => {
    let hash = 0;
    const seed = `${salt}:${hazard.x}:${hazard.y}:${index}`;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash * 31 + seed.charCodeAt(i)) | 0;
    }
    hash = (hash * 1664525 + 1013904223) | 0;
    const direction = Math.abs(hash) % 5;

    if (direction === 0) return hazard;
    if (direction === 1) return { x: bounded(hazard.x + 1), y: hazard.y };
    if (direction === 2) return { x: bounded(hazard.x - 1), y: hazard.y };
    if (direction === 3) return { x: hazard.x, y: bounded(hazard.y + 1) };
    return { x: hazard.x, y: bounded(hazard.y - 1) };
  });
}

export default function Zone108TerraHabitatRescue() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [rover, setRover] = useState<Coord>(BASE);
  const [pod, setPod] = useState<Coord>({ x: 4, y: 4 });
  const [hazards, setHazards] = useState<Coord[]>([]);
  const [carrying, setCarrying] = useState(false);
  const [rescued, setRescued] = useState(0);
  const [hull, setHull] = useState(START_HULL);
  const [oxygen, setOxygen] = useState(OXYGEN_MAX);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("collapse");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const tickRef = useRef(0);

  const stormTier = 1 + Math.floor(rescued / 2);
  const progress = useMemo(
    () => Math.min(100, Math.round((rescued / TARGET_RESCUES) * 100)),
    [rescued],
  );

  const finalize = useCallback(
    (nextResolution: Resolution, finalScore: number) => {
      setResolution(nextResolution);
      setPhase("complete");
      setMood(nextResolution === "rescued" ? "cheering" : "sad");
      setMessage(
        nextResolution === "rescued"
          ? "Terra: all habitat pods rescued."
          : "Terra: habitat grid collapsed.",
      );
      if (completionSentRef.current) return;
      completionSentRef.current = true;
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "zone-108",
        difficulty: "medium",
        elapsedMs: Math.max(0, Date.now() - startedAt),
        interactions: Math.max(1, interactions),
        score: finalScore,
        maxScore: TARGET_RESCUES * 150,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    },
    [interactions, setMessage, setMood, startedAt],
  );

  const spawnPod = useCallback(
    (nextHazards: Coord[], rescueCount: number) => {
      const exclusion = new Set<string>([keyOf(BASE), ...nextHazards.map((entry) => keyOf(entry))]);
      return randomCell(exclusion, `zone-108:pod:${rescueCount}:${tickRef.current}`);
    },
    [],
  );

  const start = useCallback(() => {
    tickRef.current = 0;
    const firstHazards = spawnHazards(3, new Set([keyOf(BASE)]), "zone-108:start");
    const firstPod = spawnPod(firstHazards, 0);
    setPhase("playing");
    setRover(BASE);
    setPod(firstPod);
    setHazards(firstHazards);
    setCarrying(false);
    setRescued(0);
    setHull(START_HULL);
    setOxygen(OXYGEN_MAX);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setResolution("collapse");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Terra: recover pods and return them to base while storms escalate.");
    void hapticSelection();
  }, [setMessage, setMood, spawnPod]);

  const applyStormStep = useCallback(
    (nextRover: Coord, nextHazards: Coord[], nextHull: number, nextOxygen: number, nextScore: number) => {
      const collision = nextHazards.some((hazard) => sameCoord(hazard, nextRover));
      if (!collision) return { nextHull, nextRover, nextOxygen, nextScore };

      const damagedHull = nextHull - 1;
      setMessage("Storm contact damaged rover hull.");
      setMood("sad");
      void hapticError();
      return {
        nextHull: damagedHull,
        nextRover: BASE,
        nextOxygen: Math.max(12, nextOxygen - 8),
        nextScore: Math.max(0, nextScore - 10),
      };
    },
    [setMessage, setMood],
  );

  const step = useCallback(
    (dx: number, dy: number) => {
      if (phase !== "playing") return;

      tickRef.current += 1;
      setInteractions((value) => value + 1);

      const moved: Coord = { x: bounded(rover.x + dx), y: bounded(rover.y + dy) };
      const movedHazards = moveHazards(hazards, `zone-108:move:${tickRef.current}`);
      const drainedOxygen = Math.max(0, oxygen - (2 + Math.floor(stormTier / 2)));
      let nextHull = hull;
      let nextScore = score;
      let nextRover = moved;
      let nextCarrying = carrying;
      let nextRescued = rescued;
      let nextCombo = combo;
      let nextBestCombo = bestCombo;
      let nextPod = pod;

      const storm = applyStormStep(nextRover, movedHazards, nextHull, drainedOxygen, nextScore);
      nextHull = storm.nextHull;
      nextRover = storm.nextRover;
      nextScore = storm.nextScore;
      let nextOxygen = storm.nextOxygen;

      if (!nextCarrying && sameCoord(nextRover, nextPod)) {
        nextCarrying = true;
        nextScore += 18;
        nextCombo += 1;
        nextBestCombo = Math.max(nextBestCombo, nextCombo);
        setMessage("Pod secured. Return to base.");
        setMood("happy");
        void hapticSuccess();
      }

      if (nextCarrying && sameCoord(nextRover, BASE)) {
        nextRescued += 1;
        nextCarrying = false;
        nextScore += 26 + Math.min(12, nextCombo * 2);
        if (nextCombo % 3 === 0 && nextHull < START_HULL) {
          nextHull += 1;
          setMessage("Rescue streak restored one hull segment.");
        } else {
          setMessage("Pod delivered to habitat base.");
        }
        setMood("happy");
        void hapticSuccess();
        nextPod = spawnPod(movedHazards, nextRescued);
      }

      if (nextOxygen <= 0) {
        nextHull -= 1;
        nextOxygen = 64;
        nextCombo = 0;
        setMessage("Oxygen depleted. Emergency reset consumed hull.");
        setMood("sad");
        void hapticError();
      }

      setRover(nextRover);
      setHazards(movedHazards);
      setPod(nextPod);
      setCarrying(nextCarrying);
      setRescued(nextRescued);
      setHull(nextHull);
      setOxygen(nextOxygen);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBestCombo);

      if (nextHull <= 0) {
        finalize("collapse", nextScore);
        return;
      }
      if (nextRescued >= TARGET_RESCUES) {
        finalize("rescued", nextScore);
      }
    },
    [
      applyStormStep,
      bestCombo,
      carrying,
      combo,
      finalize,
      hazards,
      hull,
      oxygen,
      phase,
      pod,
      rescued,
      rover,
      score,
      spawnPod,
      stormTier,
      setMessage,
      setMood,
    ],
  );

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = window.setInterval(() => {
      step(0, 0);
    }, 1400);
    return () => window.clearInterval(interval);
  }, [phase, step]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "arrowup" || key === "w") {
        event.preventDefault();
        step(0, -1);
      } else if (key === "arrowdown" || key === "s") {
        event.preventDefault();
        step(0, 1);
      } else if (key === "arrowleft" || key === "a") {
        event.preventDefault();
        step(-1, 0);
      } else if (key === "arrowright" || key === "d") {
        event.preventDefault();
        step(1, 0);
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, step]);

  const gridCells = useMemo(() => {
    const cells: Array<{ coord: Coord; type: "base" | "rover" | "pod" | "hazard" | "empty" }> = [];
    const hazardSet = new Set(hazards.map((entry) => keyOf(entry)));

    for (let y = 0; y < GRID_SIZE; y += 1) {
      for (let x = 0; x < GRID_SIZE; x += 1) {
        const coord = { x, y };
        const key = keyOf(coord);
        let type: "base" | "rover" | "pod" | "hazard" | "empty" = "empty";
        if (sameCoord(coord, BASE)) type = "base";
        if (sameCoord(coord, pod) && !carrying) type = "pod";
        if (hazardSet.has(key)) type = "hazard";
        if (sameCoord(coord, rover)) type = "rover";
        cells.push({ coord, type });
      }
    }

    return cells;
  }, [carrying, hazards, pod, rover]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(74,222,128,0.22),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(16,185,129,0.22),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Zone 108</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Habitat Rescue</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-100">
            <span>Score {score}</span>
            <span>Hull {hull}/{START_HULL}</span>
            <span>Oxygen {oxygen}</span>
            <span>Rescued {rescued}/{TARGET_RESCUES}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-emerald-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-emerald-100/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="terra" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-emerald-100">Navigate storm hazards, pick up habitat pods, and return each to base.</p>
                <PhysicalButton onClick={start} className="h-12 bg-emerald-400 px-8 text-sm font-black text-slate-950">
                  Start Habitat Rescue
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key="playing" initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-emerald-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <Target className="h-3.5 w-3.5" />
                  Carrying {carrying ? "Yes" : "No"}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Storm Tier {stormTier}
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2 rounded-2xl border border-emerald-100/25 bg-black/30 p-3">
                {gridCells.map((cell) => {
                  const tone =
                    cell.type === "rover"
                      ? "border-emerald-200 bg-emerald-400/40"
                      : cell.type === "base"
                        ? "border-cyan-300/80 bg-cyan-400/30"
                        : cell.type === "pod"
                          ? "border-amber-300/80 bg-amber-400/35"
                          : cell.type === "hazard"
                            ? "border-violet-300/80 bg-violet-500/30"
                            : "border-emerald-100/15 bg-emerald-100/5";
                  const marker =
                    cell.type === "rover"
                      ? "R"
                      : cell.type === "base"
                        ? "B"
                        : cell.type === "pod"
                          ? "P"
                          : cell.type === "hazard"
                            ? "!"
                            : "";
                  return (
                    <button
                      key={`cell-${cell.coord.x}-${cell.coord.y}`}
                      type="button"
                      onClick={() => step(cell.coord.x - rover.x, cell.coord.y - rover.y)}
                      className={`flex h-11 items-center justify-center rounded-lg border text-xs font-black transition ${tone}`}
                    >
                      {marker}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <PhysicalButton onClick={() => step(0, -1)} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">Up</PhysicalButton>
                <PhysicalButton onClick={() => step(-1, 0)} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">Left</PhysicalButton>
                <PhysicalButton onClick={() => step(1, 0)} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">Right</PhysicalButton>
                <PhysicalButton onClick={() => step(0, 1)} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">Down</PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-emerald-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
                <div className="flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-200">
                  Combo {combo}
                </div>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="terra" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Habitat Rescue Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-emerald-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={start} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="terra" mood={resolution === "rescued" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "rescued" ? "Habitat Pods Rescued" : "Habitat Collapse"}
              </h3>
              <p className="mt-2 text-sm text-emerald-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-emerald-400 px-7 text-sm font-black text-slate-950">
                  Replay Habitat Rescue
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
