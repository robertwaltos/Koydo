"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, ShieldAlert } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "sealed" | "breach";
type Cursor = { x: number; y: number };

const GRID_SIZE = 6;
const CENTER_KEY = "2,2";
const WAVE_TARGET = 7;
const START_FIREWALL = 5;
const MAX_ENERGY = 5;

function keyOf(x: number, y: number) {
  return `${x},${y}`;
}

function parseKey(key: string): Cursor {
  const [x, y] = key.split(",").map((value) => Number(value));
  return { x: Number.isFinite(x) ? x : 0, y: Number.isFinite(y) ? y : 0 };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

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

function neighbors(key: string): string[] {
  const point = parseKey(key);
  const candidates = [
    { x: point.x + 1, y: point.y },
    { x: point.x - 1, y: point.y },
    { x: point.x, y: point.y + 1 },
    { x: point.x, y: point.y - 1 },
  ];
  return candidates
    .filter((coord) => coord.x >= 0 && coord.x < GRID_SIZE && coord.y >= 0 && coord.y < GRID_SIZE)
    .map((coord) => keyOf(coord.x, coord.y));
}

function buildInfection(wave: number): string[] {
  const rand = seeded(`zone-115:wave:${wave}`);
  const count = Math.min(10, 3 + wave);
  const infected = new Set<string>();
  while (infected.size < count) {
    const x = Math.floor(rand() * GRID_SIZE);
    const y = Math.floor(rand() * GRID_SIZE);
    const key = keyOf(x, y);
    if (key === CENTER_KEY) continue;
    infected.add(key);
  }
  return [...infected];
}

function decrementShields(shields: Record<string, number>) {
  const next: Record<string, number> = {};
  for (const [key, value] of Object.entries(shields)) {
    const remaining = value - 1;
    if (remaining > 0) next[key] = remaining;
  }
  return next;
}

function spreadInfection(infectedKeys: string[], shields: Record<string, number>, wave: number, tick: number) {
  const rand = seeded(`zone-115:spread:${wave}:${tick}:${infectedKeys.join("|")}`);
  const next = new Set(infectedKeys);
  const chance = Math.min(0.68, 0.24 + wave * 0.05);

  for (const key of infectedKeys) {
    for (const neighbor of neighbors(key)) {
      if (next.has(neighbor)) continue;
      if (shields[neighbor]) continue;
      if (rand() < chance) next.add(neighbor);
    }
  }

  return [...next];
}

export default function Zone115PixelBreachLattice() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [wave, setWave] = useState(1);
  const [infectedKeys, setInfectedKeys] = useState<string[]>(() => buildInfection(1));
  const [shields, setShields] = useState<Record<string, number>>({});
  const [firewall, setFirewall] = useState(START_FIREWALL);
  const [energy, setEnergy] = useState(2);
  const [corePressure, setCorePressure] = useState(0);
  const [cursor, setCursor] = useState<Cursor>({ x: 2, y: 2 });
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("breach");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const tickRef = useRef(0);

  const progress = useMemo(
    () => Math.min(100, Math.round(((wave - 1) / WAVE_TARGET) * 100)),
    [wave],
  );

  const finalize = useCallback(
    (nextResolution: Resolution, finalScore: number) => {
      setResolution(nextResolution);
      setPhase("complete");
      setMood(nextResolution === "sealed" ? "cheering" : "sad");
      setMessage(
        nextResolution === "sealed"
          ? "Pixel: breach lattice operations sealed all breach waves."
          : "Pixel: breach lattice operations breached at core pressure.",
      );
      if (completionSentRef.current) return;
      completionSentRef.current = true;
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "zone-115",
        difficulty: "medium",
        elapsedMs: Math.max(0, Date.now() - startedAt),
        interactions: Math.max(1, interactions),
        score: finalScore,
        maxScore: WAVE_TARGET * 180,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    },
    [interactions, setMessage, setMood, startedAt],
  );

  const resetWave = useCallback(
    (targetWave: number, nextFirewall: number, nextScore: number) => {
      if (nextFirewall <= 0) {
        finalize("breach", nextScore);
        return;
      }

      setWave(targetWave);
      setInfectedKeys(buildInfection(targetWave));
      setShields({});
      setCorePressure(0);
      setCombo(0);
      setCursor({ x: 2, y: 2 });
    },
    [finalize],
  );

  const start = useCallback(() => {
    tickRef.current = 0;
    setPhase("playing");
    setWave(1);
    setInfectedKeys(buildInfection(1));
    setShields({});
    setFirewall(START_FIREWALL);
    setEnergy(2);
    setCorePressure(0);
    setCursor({ x: 2, y: 2 });
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setResolution("breach");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: purge infections and shield nodes before core pressure spikes.");
    void hapticSelection();
  }, [setMessage, setMood]);

  const applyAtCell = useCallback(
    (target: Cursor) => {
      if (phase !== "playing") return;
      const key = keyOf(target.x, target.y);
      const infected = new Set(infectedKeys);
      const nextShields = { ...shields };
      let nextEnergy = energy;
      let nextScore = score;
      let nextCombo = combo;
      let nextBest = bestCombo;

      setInteractions((value) => value + 1);
      setCursor(target);

      if (infected.has(key)) {
        infected.delete(key);
        nextCombo += 1;
        nextBest = Math.max(nextBest, nextCombo);
        nextScore += 11 + Math.min(10, nextCombo * 2) + wave;

        if (nextCombo > 0 && nextCombo % 4 === 0) {
          nextEnergy = Math.min(MAX_ENERGY, nextEnergy + 1);
          setMessage("Purge streak granted +1 energy.");
        } else {
          setMessage("Infected node purged.");
        }
        setMood("happy");
        void hapticSuccess();
      } else if (nextEnergy > 0) {
        nextEnergy -= 1;
        nextShields[key] = 3;
        for (const neighbor of neighbors(key)) {
          nextShields[neighbor] = Math.max(nextShields[neighbor] ?? 0, 2);
        }
        nextScore = Math.max(0, nextScore - 1);
        setMessage("Shield lattice deployed.");
        setMood("thinking");
        void hapticSelection();
      } else {
        nextCombo = 0;
        nextScore = Math.max(0, nextScore - 5);
        setMessage("No energy for shield deployment.");
        setMood("sad");
        void hapticError();
      }

      setInfectedKeys([...infected]);
      setShields(nextShields);
      setEnergy(nextEnergy);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBest);

      if (infected.size === 0) {
        const nextWave = wave + 1;
        const waveBonus = nextScore + 28;
        setScore(waveBonus);
        setEnergy(Math.min(MAX_ENERGY, nextEnergy + 1));
        if (nextWave > WAVE_TARGET) {
          finalize("sealed", waveBonus);
          return;
        }
        setMessage("Wave cleared. Advancing breach tier.");
        resetWave(nextWave, firewall, waveBonus);
      }
    },
    [
      bestCombo,
      combo,
      energy,
      finalize,
      firewall,
      infectedKeys,
      phase,
      resetWave,
      score,
      shields,
      wave,
      setMessage,
      setMood,
    ],
  );

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = window.setInterval(() => {
      tickRef.current += 1;
      const nextShields = decrementShields(shields);
      const spread = spreadInfection(infectedKeys, nextShields, wave, tickRef.current);
      const centerInfected = spread.includes(CENTER_KEY);
      const nextPressure = centerInfected ? corePressure + 1 : Math.max(0, corePressure - 1);

      setShields(nextShields);
      setInfectedKeys(spread);
      setCorePressure(nextPressure);

      if (spread.length >= 16 || nextPressure >= 3) {
        const nextFirewall = firewall - 1;
        const nextScore = Math.max(0, score - 12);
        setFirewall(nextFirewall);
        setScore(nextScore);
        setMessage("Containment overload. Lattice segment lost.");
        setMood("sad");
        void hapticError();
        resetWave(wave, nextFirewall, nextScore);
      }
    }, 900);

    return () => window.clearInterval(interval);
  }, [
    corePressure,
    firewall,
    infectedKeys,
    phase,
    resetWave,
    score,
    shields,
    wave,
    setMessage,
    setMood,
  ]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "arrowup" || key === "w") {
        event.preventDefault();
        setCursor((current) => ({ ...current, y: clamp(current.y - 1, 0, GRID_SIZE - 1) }));
      } else if (key === "arrowdown" || key === "s") {
        event.preventDefault();
        setCursor((current) => ({ ...current, y: clamp(current.y + 1, 0, GRID_SIZE - 1) }));
      } else if (key === "arrowleft" || key === "a") {
        event.preventDefault();
        setCursor((current) => ({ ...current, x: clamp(current.x - 1, 0, GRID_SIZE - 1) }));
      } else if (key === "arrowright" || key === "d") {
        event.preventDefault();
        setCursor((current) => ({ ...current, x: clamp(current.x + 1, 0, GRID_SIZE - 1) }));
      } else if (key === " " || key === "enter") {
        event.preventDefault();
        applyAtCell(cursor);
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [applyAtCell, cursor, phase]);

  const cells = useMemo(() => {
    const infectedSet = new Set(infectedKeys);
    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
      const x = index % GRID_SIZE;
      const y = Math.floor(index / GRID_SIZE);
      const key = keyOf(x, y);
      return {
        key,
        x,
        y,
        infected: infectedSet.has(key),
        shield: shields[key] ?? 0,
        core: key === CENTER_KEY,
        cursor: cursor.x === x && cursor.y === y,
      };
    });
  }, [cursor, infectedKeys, shields]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">Zone 115</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Breach Lattice</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-sky-100">
            <span>Score {score}</span>
            <span>Wave {wave}/{WAVE_TARGET}</span>
            <span>Firewall {firewall}/{START_FIREWALL}</span>
            <span>Energy {energy}/{MAX_ENERGY}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-sky-100/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-sky-100">Purge infected nodes and deploy shields before pressure breaks the core.</p>
                <PhysicalButton onClick={start} className="h-12 bg-sky-400 px-8 text-sm font-black text-slate-950">
                  Start Breach Lattice
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key="playing" initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-sky-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-sky-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Core Pressure {corePressure}/3
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-200">Combo {combo}</span>
              </div>

              <div className="grid grid-cols-5 gap-2 rounded-2xl border border-sky-100/25 bg-black/30 p-3">
                {cells.map((cell) => {
                  const classes = cell.cursor
                    ? "border-sky-200 bg-sky-400/35"
                    : cell.infected
                      ? "border-rose-300/80 bg-rose-500/30"
                      : cell.shield > 0
                        ? "border-emerald-300/80 bg-emerald-500/25"
                        : cell.core
                          ? "border-amber-300/80 bg-amber-500/20"
                          : "border-sky-100/15 bg-sky-100/5";
                  const marker = cell.infected ? "!" : cell.shield > 0 ? `S${cell.shield}` : cell.core ? "C" : "";
                  return (
                    <button
                      key={cell.key}
                      type="button"
                      onClick={() => applyAtCell({ x: cell.x, y: cell.y })}
                      className={`flex h-12 items-center justify-center rounded-lg border text-xs font-black transition ${classes}`}
                    >
                      {marker}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <PhysicalButton onClick={() => applyAtCell(cursor)} className="h-10 bg-sky-300 text-xs font-black text-slate-950">Act At Cursor</PhysicalButton>
                <PhysicalButton onClick={() => setCursor((current) => ({ ...current, x: clamp(current.x - 1, 0, GRID_SIZE - 1) }))} className="h-10 bg-sky-300 text-xs font-black text-slate-950">Cursor Left</PhysicalButton>
                <PhysicalButton onClick={() => setCursor((current) => ({ ...current, x: clamp(current.x + 1, 0, GRID_SIZE - 1) }))} className="h-10 bg-sky-300 text-xs font-black text-slate-950">Cursor Right</PhysicalButton>
                <PhysicalButton onClick={() => setCursor((current) => ({ ...current, y: clamp(current.y - 1, 0, GRID_SIZE - 1) }))} className="h-10 bg-sky-300 text-xs font-black text-slate-950">Cursor Up</PhysicalButton>
                <PhysicalButton onClick={() => setCursor((current) => ({ ...current, y: clamp(current.y + 1, 0, GRID_SIZE - 1) }))} className="h-10 bg-sky-300 text-xs font-black text-slate-950">Cursor Down</PhysicalButton>
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
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Breach Lattice Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-sky-400 px-6 text-sm font-black text-slate-950">
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
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={resolution === "sealed" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "sealed" ? "Breach Lattice Sealed" : "Breach Lattice Breached"}
              </h3>
              <p className="mt-2 text-sm text-sky-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-sky-400 px-7 text-sm font-black text-slate-950">
                  Replay Breach Lattice
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
