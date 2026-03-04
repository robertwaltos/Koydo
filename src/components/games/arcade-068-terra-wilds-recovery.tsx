"use client";

import { useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, PauseCircle, PlayCircle, ShieldPlus } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";
import { clamp, seeded } from "./reward-realm-runtime-utils";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "recovered" | "collapsed";
type EventTone = "good" | "bad" | "neutral";

type RuntimeEvent = {
  id: number;
  tone: EventTone;
  mood: "thinking" | "happy" | "sad" | "cheering";
  message: string;
};

type GameState = {
  phase: Phase;
  outcome: Outcome;
  zones: number[];
  cycle: number;
  score: number;
  stability: number;
  combo: number;
  bestCombo: number;
  stabilizers: number;
  cooldownMs: number;
  selectedZone: number | null;
  interactions: number;
  event: RuntimeEvent | null;
  eventCount: number;
};

type Action =
  | { type: "start" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "dispatch"; zone: number }
  | { type: "stabilizer" }
  | { type: "togglePause" };

const ZONE_COUNT = 6;
const CYCLES_MAX = 34;
const TICK_MS = 650;
const START_STABILITY = 4;
const MAX_STABILIZERS = 3;

function withEvent(
  state: GameState,
  tone: EventTone,
  mood: RuntimeEvent["mood"],
  message: string,
): GameState {
  const id = state.eventCount + 1;
  return {
    ...state,
    eventCount: id,
    event: { id, tone, mood, message },
  };
}

function averageHealth(zones: number[]) {
  if (zones.length === 0) return 0;
  return zones.reduce((sum, value) => sum + value, 0) / zones.length;
}

function collapsedZones(zones: number[]) {
  return zones.filter((value) => value < 16).length;
}

function safeZones(zones: number[]) {
  return zones.filter((value) => value >= 38).length;
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "collapsed",
    zones: Array.from({ length: ZONE_COUNT }, () => 62),
    cycle: 0,
    score: 0,
    stability: START_STABILITY,
    combo: 0,
    bestCombo: 0,
    stabilizers: 1,
    cooldownMs: 0,
    selectedZone: null,
    interactions: 0,
    event: null,
    eventCount,
  };
}

function recoverNeighbors(zones: number[], zone: number) {
  const next = zones.slice();
  const neighbors = [zone, (zone + ZONE_COUNT - 1) % ZONE_COUNT, (zone + 1) % ZONE_COUNT];
  for (const index of neighbors) {
    const boost = index === zone ? 16 : 8;
    next[index] = clamp(next[index]! + boost, 0, 100);
  }
  return next;
}

function degradeByHazards(zones: number[], cycle: number) {
  const random = seeded(`arcade-068:${cycle}`);
  const tier = 1 + Math.floor(cycle / 9);
  const ambient = 1 + Math.floor(tier / 2);
  const hazardCount = tier >= 3 ? 2 : random() > 0.6 ? 2 : 1;

  const next = zones.map((value) => clamp(value - ambient, 0, 100));
  const chosen = new Set<number>();
  while (chosen.size < hazardCount) {
    chosen.add(Math.floor(random() * ZONE_COUNT));
  }

  for (const zone of chosen) {
    const damage = 7 + Math.floor(random() * 8) + tier * 2;
    next[zone] = clamp(next[zone]! - damage, 0, 100);
  }

  return next;
}

function reduceGame(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "start":
    case "restart": {
      const base = createBaseState("playing", state.eventCount);
      return withEvent(base, "good", "happy", "Terra: dispatch teams to keep all six zones alive.");
    }
    case "togglePause": {
      if (state.phase === "playing") {
        return withEvent({ ...state, phase: "paused" }, "neutral", "thinking", "Terra: operations paused.");
      }
      if (state.phase === "paused") {
        return withEvent({ ...state, phase: "playing" }, "neutral", "happy", "Terra: operations resumed.");
      }
      return state;
    }
    case "dispatch": {
      if (state.phase !== "playing" || state.cooldownMs > 0) return state;
      const zone = clamp(action.zone, 0, ZONE_COUNT - 1);
      const zones = recoverNeighbors(state.zones, zone);
      return withEvent(
        {
          ...state,
          zones,
          selectedZone: zone,
          cooldownMs: 1200,
          interactions: state.interactions + 1,
          score: state.score + 8,
        },
        "good",
        "happy",
        `Terra: recovery team routed to zone ${zone + 1}.`,
      );
    }
    case "stabilizer": {
      if (state.phase !== "playing" || state.stabilizers <= 0) return state;
      return withEvent(
        {
          ...state,
          zones: state.zones.map((value) => clamp(value + 6, 0, 100)),
          stabilizers: state.stabilizers - 1,
          interactions: state.interactions + 1,
          score: Math.max(0, state.score - 2),
        },
        "neutral",
        "thinking",
        "Terra: emergency stabilizer boosted all habitats.",
      );
    }
    case "tick": {
      if (state.phase !== "playing") return state;

      const cycle = state.cycle + 1;
      const zones = degradeByHazards(state.zones, cycle);
      const average = averageHealth(zones);
      const safe = safeZones(zones);
      const collapsed = collapsedZones(zones);

      const cooldownMs = Math.max(0, state.cooldownMs - TICK_MS);
      let stability = state.stability;
      let score = state.score + safe * 2;
      const combo = safe >= 4 ? state.combo + 1 : 0;
      const bestCombo = Math.max(state.bestCombo, combo);
      let stabilizers = state.stabilizers;
      let phase = state.phase;
      let outcome = state.outcome;
      let tone: EventTone = "neutral";
      let mood: RuntimeEvent["mood"] = "thinking";
      let message = "Terra: maintain balance across water, canopy, and wildlife corridors.";

      if (collapsed >= 3 || average < 26) {
        stability = Math.max(0, stability - 1);
      }
      if (safe >= 5) {
        score += 6;
      }
      if (combo > 0 && combo % 6 === 0) {
        stabilizers = Math.min(MAX_STABILIZERS, stabilizers + 1);
      }

      if (collapsed >= 3 && stability <= 1) {
        phase = "complete";
        outcome = "collapsed";
        tone = "bad";
        mood = "sad";
        message = "Terra: three zones collapsed. Wilds recovery failed.";
      } else if (cycle >= CYCLES_MAX) {
        const recovered = collapsed <= 1 && average >= 42;
        phase = "complete";
        outcome = recovered ? "recovered" : "collapsed";
        tone = recovered ? "good" : "bad";
        mood = recovered ? "cheering" : "sad";
        if (recovered) {
          score += 120 + stability * 10 + bestCombo * 2;
          message = "Terra: wilds stabilized. Recovery corridor secured.";
        } else {
          message = "Terra: recovery window ended below safe threshold.";
        }
      } else if (collapsed >= 2) {
        tone = "bad";
        mood = "sad";
        message = "Terra: multiple zones critical. Dispatch teams immediately.";
      } else if (safe >= 5) {
        tone = "good";
        mood = "happy";
        message = "Terra: strong coverage. Keep this recovery pace.";
      }

      const nextState: GameState = {
        ...state,
        phase,
        outcome,
        zones: phase === "complete" ? zones : zones,
        cycle,
        score,
        stability,
        combo,
        bestCombo,
        stabilizers,
        cooldownMs,
        selectedZone: state.selectedZone,
      };
      return withEvent(nextState, tone, mood, message);
    }
    default:
      return state;
  }
}

export default function Arcade068TerraWildsRecovery() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const progress = useMemo(
    () => Math.min(100, Math.round((game.cycle / CYCLES_MAX) * 100)),
    [game.cycle],
  );
  const avgHealth = useMemo(() => Math.round(averageHealth(game.zones)), [game.zones]);

  useEffect(() => {
    if (game.phase !== "playing") return;
    const timer = window.setInterval(() => dispatch({ type: "tick" }), TICK_MS);
    return () => window.clearInterval(timer);
  }, [game.phase]);

  useEffect(() => {
    const event = game.event;
    if (!event) return;
    setMood(event.mood);
    setMessage(event.message);
    if (event.tone === "good") {
      void hapticSuccess();
      return;
    }
    if (event.tone === "bad") {
      void hapticError();
      return;
    }
    void hapticSelection();
  }, [game.event, setMessage, setMood]);

  useEffect(() => {
    if (game.phase !== "complete") return;
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-068",
      difficulty: "medium",
      elapsedMs: game.cycle * TICK_MS,
      interactions: Math.max(1, game.interactions),
      score: game.score,
      maxScore: CYCLES_MAX * 22,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [game.cycle, game.interactions, game.phase, game.score]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key === "Enter" && game.phase === "ready") {
        event.preventDefault();
        sessionIdRef.current = createLegacySessionId();
        completionSentRef.current = false;
        dispatch({ type: "start" });
        return;
      }
      if (event.key === "Enter" && game.phase === "complete") {
        event.preventDefault();
        sessionIdRef.current = createLegacySessionId();
        completionSentRef.current = false;
        dispatch({ type: "restart" });
        return;
      }
      if (lower === "p") {
        event.preventDefault();
        dispatch({ type: "togglePause" });
        return;
      }
      if (game.phase !== "playing") return;
      if (lower === "e") {
        event.preventDefault();
        dispatch({ type: "stabilizer" });
        return;
      }
      if (event.key >= "1" && event.key <= "6") {
        event.preventDefault();
        dispatch({ type: "dispatch", zone: Number.parseInt(event.key, 10) - 1 });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [game.phase]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-emerald-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(74,222,128,0.24),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(16,185,129,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-100">Arcade 068</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Terra Wilds Recovery</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-emerald-100">
            <span>Score {game.score}</span>
            <span>Combo {game.combo}</span>
            <span>Stability {game.stability}</span>
            <span>Stabilizers {game.stabilizers}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-emerald-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-lime-300" animate={{ width: `${avgHealth}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {game.phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="terra" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-emerald-100">
                  Keep six habitats alive through hazard waves. Dispatch by clicking zones or pressing `1-6`. Stabilizer key: `E`.
                </p>
                <PhysicalButton onClick={() => {
                  sessionIdRef.current = createLegacySessionId();
                  completionSentRef.current = false;
                  dispatch({ type: "start" });
                }} className="h-12 bg-emerald-300 px-8 text-sm font-black text-slate-950">
                  Start Recovery
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {(game.phase === "playing" || game.phase === "paused") ? (
            <motion.section key={`mission-${game.cycle}`} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-emerald-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/30 px-3 py-1">
                  <Leaf className="h-3.5 w-3.5" />
                  Cycle {game.cycle}/{CYCLES_MAX}
                </span>
                <span>Cooldown {Math.ceil(game.cooldownMs / 1000)}s</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {game.zones.map((health, index) => (
                  <button
                    key={`zone-${index}`}
                    type="button"
                    disabled={game.phase !== "playing" || game.cooldownMs > 0}
                    onClick={() => dispatch({ type: "dispatch", zone: index })}
                    className={`rounded-2xl border px-3 py-3 text-left transition ${
                      game.selectedZone === index
                        ? "border-emerald-300/80 bg-emerald-400/20"
                        : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20"
                    } disabled:opacity-45`}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-emerald-200">Zone {index + 1}</p>
                    <p className="mt-1 text-xl font-black text-white">{Math.round(health)}%</p>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                      <motion.div className="h-full bg-emerald-300" animate={{ width: `${health}%` }} transition={{ duration: 0.2 }} />
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={() => dispatch({ type: "stabilizer" })} disabled={game.phase !== "playing" || game.stabilizers <= 0} className="h-10 bg-emerald-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1"><ShieldPlus className="h-4 w-4" />Global Stabilizer [E]</span>
                </PhysicalButton>
                <PhysicalButton onClick={() => dispatch({ type: "togglePause" })} className="h-10 bg-zinc-800 text-xs font-black text-white">
                  {game.phase === "playing"
                    ? <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" />Pause [P]</span>
                    : <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume [P]</span>}
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {game.phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-emerald-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="terra" mood={game.outcome === "recovered" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">{game.outcome === "recovered" ? "Wilds Recovered" : "Wilds Collapsed"}</h3>
              <p className="mt-2 text-sm text-emerald-100">Score {game.score} | Best combo {game.bestCombo} | Interactions {Math.max(1, game.interactions)}</p>
              <div className="mt-5">
                <PhysicalButton onClick={() => {
                  sessionIdRef.current = createLegacySessionId();
                  completionSentRef.current = false;
                  dispatch({ type: "restart" });
                }} className="h-11 bg-emerald-300 px-7 text-sm font-black text-slate-950">
                  Run Again
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
