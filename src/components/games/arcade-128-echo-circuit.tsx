"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { Activity, Compass, PauseCircle, PlayCircle, Radar, TimerReset, WandSparkles } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "win" | "fail";
type EventTone = "good" | "bad" | "neutral";
type NodeKind = "claim" | "evidence" | "context";

type GridNode = {
  kind: NodeKind;
  clarity: number;
  fortifiedMs: number;
};

type NoisePulse = {
  id: number;
  axis: "row" | "col";
  index: number;
  intensity: number;
  ttlMs: number;
};

type RoutePlan = {
  id: number;
  sequence: NodeKind[];
  label: string;
};

type RuntimeEvent = {
  id: number;
  tone: EventTone;
  mood: "thinking" | "happy" | "sad" | "cheering";
  message: string;
};

type GameState = {
  phase: Phase;
  outcome: Outcome;
  grid: GridNode[];
  cursor: { row: number; col: number };
  routePlan: RoutePlan;
  routeIndex: number;
  linksCompleted: number;
  score: number;
  lives: number;
  combo: number;
  bestCombo: number;
  pulseCharges: number;
  pulseMs: number;
  remainingMs: number;
  level: number;
  noise: NoisePulse[];
  decayBudgetMs: number;
  noiseBudgetMs: number;
  rechargeBudgetMs: number;
  nextNoiseId: number;
  nextPlanId: number;
  interactions: number;
  event: RuntimeEvent | null;
  eventCount: number;
};

type Action =
  | { type: "start" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "move"; deltaRow: -1 | 0 | 1; deltaCol: -1 | 0 | 1 }
  | { type: "select"; row: number; col: number }
  | { type: "stabilize" }
  | { type: "link" }
  | { type: "pulse" }
  | { type: "togglePause" };

const GRID = 3;
const CELL_COUNT = GRID * GRID;
const MISSION_MS = 180_000;
const TICK_MS = 100;
const START_LIVES = 4;
const TARGET_LINKS = 26;
const START_PULSE_CHARGES = 2;
const MAX_PULSE_CHARGES = 3;
const PULSE_DURATION_MS = 2600;
const PULSE_RECHARGE_MS = 36_000;
const COLLAPSE_THRESHOLD = 0;
const MAX_SCORE = 3600;

const KIND_LABEL: Record<NodeKind, string> = {
  claim: "Claim",
  evidence: "Evidence",
  context: "Context",
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function randomFrom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)] ?? items[0];
}

function formatClock(ms: number) {
  const safe = Math.max(0, ms);
  const minutes = Math.floor(safe / 60_000);
  const seconds = Math.floor((safe % 60_000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function levelFromRemainingMs(remainingMs: number) {
  return clamp(1 + Math.floor((MISSION_MS - remainingMs) / 30_000), 1, 6);
}

function indexOf(row: number, col: number) {
  return row * GRID + col;
}

function rowOf(index: number) {
  return Math.floor(index / GRID);
}

function colOf(index: number) {
  return index % GRID;
}

function decayCadenceMs(level: number) {
  return Math.max(260, 780 - level * 70);
}

function noiseCadenceMs(level: number) {
  return Math.max(2200, 5600 - level * 440);
}

function ambientDrop(level: number, pulseMs: number, fortifiedMs: number) {
  let drop = 1 + Math.floor((level - 1) / 2);
  if (pulseMs > 0) {
    drop *= 0.55;
  }
  if (fortifiedMs > 0) {
    drop *= 0.35;
  }
  return drop;
}

function randomClarity() {
  return 52 + Math.floor(Math.random() * 26);
}

function randomKind() {
  return randomFrom(["claim", "evidence", "context"] as NodeKind[]);
}

function createGrid(): GridNode[] {
  return Array.from({ length: CELL_COUNT }, () => ({
    kind: randomKind(),
    clarity: randomClarity(),
    fortifiedMs: 0,
  }));
}

function createRoutePlan(nextId: number, level: number): RoutePlan {
  const patterns: NodeKind[][] = [
    ["claim", "evidence", "context"],
    ["context", "claim", "evidence"],
    ["claim", "context", "evidence", "claim"],
    ["evidence", "context", "claim", "evidence"],
    ["context", "claim", "evidence", "context", "claim"],
  ];
  const maxIndex = clamp(level - 1, 0, patterns.length - 1);
  const bank = patterns.slice(0, maxIndex + 1);
  const sequence = randomFrom(bank) ?? patterns[0] ?? ["claim", "evidence", "context"];
  return {
    id: nextId,
    sequence,
    label: sequence.map((kind) => KIND_LABEL[kind]).join(" -> "),
  };
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    grid: createGrid(),
    cursor: { row: 1, col: 1 },
    routePlan: createRoutePlan(1, 1),
    routeIndex: 0,
    linksCompleted: 0,
    score: 0,
    lives: START_LIVES,
    combo: 0,
    bestCombo: 0,
    pulseCharges: START_PULSE_CHARGES,
    pulseMs: 0,
    remainingMs: MISSION_MS,
    level: 1,
    noise: [],
    decayBudgetMs: 0,
    noiseBudgetMs: 0,
    rechargeBudgetMs: 0,
    nextNoiseId: 1,
    nextPlanId: 2,
    interactions: 0,
    event: null,
    eventCount,
  };
}

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
    event: {
      id,
      tone,
      mood,
      message,
    },
  };
}

function nextPlanState(state: GameState): GameState {
  return {
    ...state,
    routePlan: createRoutePlan(state.nextPlanId, state.level),
    routeIndex: 0,
    nextPlanId: state.nextPlanId + 1,
  };
}

function reduceGame(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "start":
    case "restart": {
      const base = createBaseState("playing", state.eventCount);
      return withEvent(
        base,
        "good",
        "happy",
        "Echo: stabilize argument nodes and link them in the exact route order.",
      );
    }
    case "move": {
      if (state.phase !== "playing") return state;
      const row = clamp(state.cursor.row + action.deltaRow, 0, GRID - 1);
      const col = clamp(state.cursor.col + action.deltaCol, 0, GRID - 1);
      if (row === state.cursor.row && col === state.cursor.col) return state;
      return {
        ...state,
        cursor: { row, col },
        interactions: state.interactions + 1,
      };
    }
    case "select": {
      if (state.phase !== "playing") return state;
      const row = clamp(action.row, 0, GRID - 1);
      const col = clamp(action.col, 0, GRID - 1);
      if (row === state.cursor.row && col === state.cursor.col) return state;
      return {
        ...state,
        cursor: { row, col },
        interactions: state.interactions + 1,
      };
    }
    case "stabilize": {
      if (state.phase !== "playing") return state;
      const idx = indexOf(state.cursor.row, state.cursor.col);
      const node = state.grid[idx];
      if (!node) return state;
      const raise = state.pulseMs > 0 ? 22 : 15;
      const clarity = clamp(node.clarity + raise, 0, 100);
      const grid = state.grid.slice();
      grid[idx] = {
        ...node,
        clarity,
        fortifiedMs: 9_000,
      };
      const expected = state.routePlan.sequence[state.routeIndex] ?? "claim";
      const bonus = node.kind === expected ? 5 : 0;
      const combo = state.combo + 1;
      const bestCombo = Math.max(state.bestCombo, combo);
      return withEvent(
        {
          ...state,
          grid,
          score: state.score + 8 + bonus,
          combo,
          bestCombo,
          interactions: state.interactions + 1,
        },
        "good",
        combo >= 4 ? "cheering" : "happy",
        node.kind === expected
          ? "Echo: stabilization aligned with the active route target."
          : "Echo: node stabilized. Route target still pending.",
      );
    }
    case "link": {
      if (state.phase !== "playing") return state;
      const idx = indexOf(state.cursor.row, state.cursor.col);
      const node = state.grid[idx];
      if (!node) return state;

      const expected = state.routePlan.sequence[state.routeIndex] ?? "claim";
      if (node.clarity < 22) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 6),
            interactions: state.interactions + 1,
          },
          "bad",
          "sad",
          "Echo: node clarity is too low to link. Stabilize it first.",
        );
      }

      const success = node.kind === expected;
      const grid = state.grid.slice();
      let routeIndex = state.routeIndex;
      let linksCompleted = state.linksCompleted;
      let score = state.score;
      let lives = state.lives;
      let combo = state.combo;
      let bestCombo = state.bestCombo;
      let pulseCharges = state.pulseCharges;
      let phase = state.phase;
      let outcome = state.outcome;
      let mood: RuntimeEvent["mood"] = success ? "happy" : "sad";
      let message = success
        ? "Echo: node linked into route chain."
        : `Echo: route expected ${KIND_LABEL[expected]}, not ${KIND_LABEL[node.kind]}.`;

      grid[idx] = {
        ...node,
        clarity: clamp(node.clarity - 12, 0, 100),
      };

      if (success) {
        combo += 1;
        bestCombo = Math.max(bestCombo, combo);
        score += 20 + state.level * 2 + Math.min(20, combo * 2);
        routeIndex += 1;

        if (routeIndex >= state.routePlan.sequence.length) {
          linksCompleted += 1;
          routeIndex = 0;
          score += 34 + state.level * 3;
          if (linksCompleted % 4 === 0) {
            pulseCharges = Math.min(MAX_PULSE_CHARGES, pulseCharges + 1);
          }

          if (linksCompleted >= TARGET_LINKS) {
            phase = "complete";
            outcome = "win";
            score += 150;
            mood = "cheering";
            message = "Echo: all route chains resolved. Echo Circuit secured.";
          } else {
            message = `Echo: route ${linksCompleted} completed. New pattern online.`;
          }
        } else {
          const nextKind = state.routePlan.sequence[routeIndex] ?? "claim";
          message = `Echo: next required node is ${KIND_LABEL[nextKind]}.`;
        }
      } else {
        lives = Math.max(0, lives - 1);
        combo = 0;
        score = Math.max(0, score - (12 + state.level));
        if (lives <= 0) {
          phase = "complete";
          outcome = "fail";
          message = "Echo: route integrity collapsed under repeated mismatch.";
        }
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        grid,
        routeIndex,
        linksCompleted,
        score,
        lives,
        combo,
        bestCombo,
        pulseCharges,
        interactions: state.interactions + 1,
      };

      if (success && phase === "playing" && routeIndex === 0 && linksCompleted > state.linksCompleted) {
        nextState = nextPlanState(nextState);
      }

      return withEvent(nextState, success ? "good" : "bad", mood, message);
    }
    case "pulse": {
      if (state.phase !== "playing") return state;
      if (state.pulseCharges <= 0 || state.pulseMs > 0) return state;
      const grid = state.grid.map((node) => ({
        ...node,
        clarity: clamp(node.clarity + 8, 0, 100),
      }));
      return withEvent(
        {
          ...state,
          grid,
          pulseCharges: state.pulseCharges - 1,
          pulseMs: PULSE_DURATION_MS,
          score: state.score + 10,
          interactions: state.interactions + 1,
        },
        "neutral",
        "thinking",
        "Echo: clarity pulse distributed across all nodes.",
      );
    }
    case "togglePause": {
      if (state.phase === "playing") {
        return withEvent(
          {
            ...state,
            phase: "paused",
          },
          "neutral",
          "thinking",
          "Echo: circuit paused.",
        );
      }
      if (state.phase === "paused") {
        return withEvent(
          {
            ...state,
            phase: "playing",
          },
          "neutral",
          "happy",
          "Echo: circuit resumed.",
        );
      }
      return state;
    }
    case "tick": {
      if (state.phase !== "playing") return state;

      const remainingMs = Math.max(0, state.remainingMs - TICK_MS);
      const level = levelFromRemainingMs(remainingMs);
      const pulseMs = Math.max(0, state.pulseMs - TICK_MS);
      let decayBudgetMs = state.decayBudgetMs + TICK_MS;
      let noiseBudgetMs = state.noiseBudgetMs + TICK_MS;
      let rechargeBudgetMs = state.rechargeBudgetMs + TICK_MS;
      let pulseCharges = state.pulseCharges;
      let lives = state.lives;
      let combo = state.combo;
      let score = state.score;
      let nextNoiseId = state.nextNoiseId;

      const noise = state.noise
        .map((entry) => ({
          ...entry,
          ttlMs: entry.ttlMs - TICK_MS,
        }))
        .filter((entry) => entry.ttlMs > 0);

      let grid = state.grid.map((node) => ({
        ...node,
        fortifiedMs: Math.max(0, node.fortifiedMs - TICK_MS),
      }));

      while (decayBudgetMs >= decayCadenceMs(level)) {
        decayBudgetMs -= decayCadenceMs(level);
        grid = grid.map((node) => ({
          ...node,
          clarity: clamp(node.clarity - ambientDrop(level, pulseMs, node.fortifiedMs), 0, 100),
        }));
      }

      while (noiseBudgetMs >= noiseCadenceMs(level)) {
        noiseBudgetMs -= noiseCadenceMs(level);
        noise.push({
          id: nextNoiseId,
          axis: Math.random() < 0.5 ? "row" : "col",
          index: Math.floor(Math.random() * GRID),
          intensity: 6 + Math.floor(Math.random() * (5 + level)),
          ttlMs: 4300 + level * 260,
        });
        nextNoiseId += 1;
      }

      for (const pulse of noise) {
        grid = grid.map((node, idx) => {
          const row = rowOf(idx);
          const col = colOf(idx);
          const affected = pulse.axis === "row" ? row === pulse.index : col === pulse.index;
          if (!affected) return node;
          const dampened = node.fortifiedMs > 0 ? pulse.intensity * 0.45 : pulse.intensity;
          const pulseScale = pulseMs > 0 ? 0.55 : 1;
          return {
            ...node,
            clarity: clamp(node.clarity - dampened * 0.12 * pulseScale, 0, 100),
          };
        });
      }

      if (rechargeBudgetMs >= PULSE_RECHARGE_MS && pulseCharges < MAX_PULSE_CHARGES) {
        pulseCharges += 1;
        rechargeBudgetMs -= PULSE_RECHARGE_MS;
      }

      let collapses = 0;
      grid = grid.map((node) => {
        if (node.clarity > COLLAPSE_THRESHOLD) return node;
        collapses += 1;
        return {
          kind: randomKind(),
          clarity: 48,
          fortifiedMs: 0,
        };
      });

      if (collapses > 0) {
        lives = Math.max(0, lives - collapses);
        combo = 0;
        score = Math.max(0, score - collapses * (14 + level));
      } else {
        score += 1;
      }

      let phase = state.phase;
      let outcome = state.outcome;
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      if (collapses > 0) {
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: `${collapses} node${collapses === 1 ? "" : "s"} collapsed under noise pressure.`,
        };
      }

      if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "Echo: no integrity lives remaining.",
        };
      } else if (remainingMs <= 0) {
        const won = state.linksCompleted >= TARGET_LINKS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Echo: timer complete with route quota secured.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Echo: timer expired before route quota.",
            };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        grid,
        score,
        lives,
        combo,
        remainingMs,
        level,
        pulseCharges,
        pulseMs,
        noise,
        decayBudgetMs,
        noiseBudgetMs,
        rechargeBudgetMs,
        nextNoiseId,
      };

      if (pendingEvent) {
        const id = nextState.eventCount + 1;
        nextState = {
          ...nextState,
          eventCount: id,
          event: {
            id,
            ...pendingEvent,
          },
        };
      }

      return nextState;
    }
    default:
      return state;
  }
}

export default function Arcade128EchoCircuit() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const linkProgress = Math.min(100, Math.round((game.linksCompleted / TARGET_LINKS) * 100));
  const expectedKind = game.routePlan.sequence[game.routeIndex] ?? "claim";

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.combo >= 5) return "cheering";
    if (game.lives <= 1) return "sad";
    return "happy";
  }, [game.combo, game.lives, game.outcome, game.phase]);

  const resetSession = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
  }, []);

  const startRun = useCallback(() => {
    resetSession();
    dispatch({ type: "start" });
  }, [resetSession]);

  const restartRun = useCallback(() => {
    resetSession();
    dispatch({ type: "restart" });
  }, [resetSession]);

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
  }, [game.event?.id, game.event, setMessage, setMood]);

  useEffect(() => {
    if (game.phase !== "complete") return;
    if (completionSentRef.current) return;
    completionSentRef.current = true;

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-128",
      difficulty: "medium",
      elapsedMs: MISSION_MS - game.remainingMs,
      interactions: Math.max(1, game.interactions),
      score: game.score,
      maxScore: MAX_SCORE,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [game.interactions, game.phase, game.remainingMs, game.score]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (event.key === "Enter" && game.phase === "ready") {
        event.preventDefault();
        startRun();
        return;
      }
      if (event.key === "Enter" && game.phase === "complete") {
        event.preventDefault();
        restartRun();
        return;
      }
      if (key === "p") {
        event.preventDefault();
        dispatch({ type: "togglePause" });
        return;
      }
      if (game.phase !== "playing") return;

      if (event.key === "ArrowUp" || key === "w") {
        event.preventDefault();
        dispatch({ type: "move", deltaRow: -1, deltaCol: 0 });
        return;
      }
      if (event.key === "ArrowDown" || key === "s") {
        event.preventDefault();
        dispatch({ type: "move", deltaRow: 1, deltaCol: 0 });
        return;
      }
      if (event.key === "ArrowLeft" || key === "a") {
        event.preventDefault();
        dispatch({ type: "move", deltaRow: 0, deltaCol: -1 });
        return;
      }
      if (event.key === "ArrowRight" || key === "d") {
        event.preventDefault();
        dispatch({ type: "move", deltaRow: 0, deltaCol: 1 });
        return;
      }
      if (key >= "1" && key <= "9") {
        event.preventDefault();
        const index = Number.parseInt(key, 10) - 1;
        dispatch({ type: "select", row: rowOf(index), col: colOf(index) });
        return;
      }
      if (event.code === "Space") {
        event.preventDefault();
        dispatch({ type: "link" });
        return;
      }
      if (key === "e") {
        event.preventDefault();
        dispatch({ type: "stabilize" });
        return;
      }
      if (key === "f") {
        event.preventDefault();
        dispatch({ type: "pulse" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [game.phase, restartRun, startRun]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-violet-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(167,139,250,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(139,92,246,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-100">Arcade 128</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Circuit: Argument Mesh</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-violet-200/30 bg-black/35 px-3 py-1 text-violet-100">Score {game.score}</span>
            <span className="rounded-full border border-rose-200/30 bg-black/35 px-3 py-1 text-rose-100">Lives {game.lives}</span>
            <span className="rounded-full border border-cyan-200/30 bg-black/35 px-3 py-1 text-cyan-100">Combo {game.combo}</span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">{formatClock(game.remainingMs)}</span>
          </div>
        </header>

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-violet-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-violet-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-violet-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-cyan-100">
              <span>Routes Completed</span>
              <span>{game.linksCompleted}/{TARGET_LINKS}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-cyan-300 transition-all duration-300" style={{ width: `${linkProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200/25 bg-black/35 p-3 text-xs text-violet-100">
            <p className="font-bold">Expected Node</p>
            <p className="mt-1 text-sm font-black">{KIND_LABEL[expectedKind]}</p>
            <p className="mt-1">Pulse charges: {game.pulseCharges}</p>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-violet-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="echo" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-violet-100">
                Keep the argument mesh coherent. Stabilize noisy nodes, then link nodes in the required route order.
              </p>
              <ul className="space-y-1 text-xs text-violet-50">
                <li>Win condition: complete 26 route chains.</li>
                <li>Fail condition: lose all integrity lives or run out of mission time.</li>
                <li>Controls: Arrows/WASD move, Space link, E stabilize, F global pulse, P pause.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start Argument Mesh
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-violet-200/25 bg-black/35 p-4">
              <div className="mb-3 rounded-2xl border border-violet-200/25 bg-violet-200/10 p-3 text-xs text-violet-100">
                <p className="font-black uppercase tracking-[0.18em]">Route Pattern</p>
                <p className="mt-1">{game.routePlan.label}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {game.routePlan.sequence.map((kind, index) => {
                    const active = index === game.routeIndex;
                    return (
                      <span
                        key={`route-${kind}-${index}`}
                        className={`rounded-full border px-2 py-1 text-[10px] font-black uppercase ${
                          active
                            ? "border-white/80 bg-white/20 text-white"
                            : "border-violet-200/30 bg-violet-200/10 text-violet-100"
                        }`}
                      >
                        {KIND_LABEL[kind]}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {game.grid.map((node, index) => {
                  const row = rowOf(index);
                  const col = colOf(index);
                  const selected = row === game.cursor.row && col === game.cursor.col;
                  const kindTone =
                    node.kind === "claim"
                      ? "border-sky-300/70 bg-sky-400/25 text-sky-50"
                      : node.kind === "evidence"
                        ? "border-emerald-300/70 bg-emerald-400/25 text-emerald-50"
                        : "border-violet-300/70 bg-violet-400/25 text-violet-50";
                  const clarityTone =
                    node.clarity >= 65
                      ? "text-emerald-200"
                      : node.clarity >= 35
                        ? "text-amber-200"
                        : "text-rose-200";
                  return (
                    <button
                      key={`node-${index}`}
                      type="button"
                      onClick={() => dispatch({ type: "select", row, col })}
                      disabled={game.phase !== "playing"}
                      className={`rounded-xl border p-2 text-left transition ${kindTone} ${selected ? "ring-2 ring-white/80" : ""}`}
                    >
                      <p className="text-[10px] font-black uppercase">{KIND_LABEL[node.kind]}</p>
                      <p className={`mt-1 text-lg font-black ${clarityTone}`}>{Math.round(node.clarity)}</p>
                      <p className="text-[10px] font-bold">{node.fortifiedMs > 0 ? "Fortified" : "Open"}</p>
                    </button>
                  );
                })}
              </div>

              {game.phase === "paused" ? (
                <div className="mt-4 rounded-2xl border border-violet-200/35 bg-black/60 px-6 py-4 text-center">
                  <p className="text-sm font-black text-violet-100">Paused</p>
                  <p className="mt-1 text-xs text-violet-50">Press P or tap Resume to continue.</p>
                </div>
              ) : null}

              {game.phase === "complete" ? (
                <div className="mt-4 rounded-2xl border border-violet-200/35 bg-black/60 p-5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-100">
                    {game.outcome === "win" ? "Mesh Stable" : "Mesh Collapse"}
                  </p>
                  <p className="mt-2 text-xs text-violet-50">
                    Score {game.score} | Routes {game.linksCompleted}/{TARGET_LINKS} | Best combo {game.bestCombo}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <PhysicalButton onClick={restartRun} variant="success" className="h-10 px-6 py-2 text-xs">
                      <PlayCircle className="h-4 w-4" />
                      Replay
                    </PhysicalButton>
                  </div>
                </div>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                <PhysicalButton
                  onClick={() => dispatch({ type: "stabilize" })}
                  variant="success"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Activity className="h-4 w-4" />
                  Stabilize
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "link" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Compass className="h-4 w-4" />
                  Link Node
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "pulse" })}
                  variant="secondary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.pulseCharges <= 0}
                >
                  <WandSparkles className="h-4 w-4" />
                  Pulse ({game.pulseCharges})
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "togglePause" })}
                  variant="danger"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" && game.phase !== "paused"}
                >
                  {game.phase === "paused" ? <PlayCircle className="h-4 w-4" /> : <PauseCircle className="h-4 w-4" />}
                  {game.phase === "paused" ? "Resume" : "Pause"}
                </PhysicalButton>
                <PhysicalButton onClick={restartRun} variant="success" className="h-10 px-4 py-2 text-xs">
                  Restart
                </PhysicalButton>
              </div>
            </section>

            <aside className="rounded-3xl border border-violet-200/25 bg-black/35 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-100">Echo Console</p>
                <span className="rounded-full border border-violet-200/35 px-2 py-1 text-[10px] font-bold text-violet-100">L{game.level}</span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="echo" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Radar className="h-3.5 w-3.5" />
                    Target Node Type
                  </p>
                  <p className="mt-1 text-sm font-black">{KIND_LABEL[expectedKind]}</p>
                </div>
                <div className="rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-2 text-cyan-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Compass className="h-3.5 w-3.5" />
                    Cursor
                  </p>
                  <p className="mt-1 text-sm font-black">R{game.cursor.row + 1} C{game.cursor.col + 1}</p>
                </div>
                <div className="rounded-xl border border-rose-200/25 bg-rose-200/10 p-2 text-rose-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Activity className="h-3.5 w-3.5" />
                    Noise Fronts
                  </p>
                  <p className="mt-1 text-sm font-black">{game.noise.length} active</p>
                </div>
                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <TimerReset className="h-3.5 w-3.5" />
                    Mission Clock
                  </p>
                  <p className="mt-1 text-sm font-black">{formatClock(game.remainingMs)}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-violet-200/25 bg-violet-200/10 p-3 text-[11px] text-violet-50">
                <p className="font-bold uppercase tracking-[0.16em] text-violet-100">Keyboard</p>
                <p className="mt-1">Arrows/WASD move, Space links, E stabilizes, F pulse, P pauses, 1-9 quick select.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
