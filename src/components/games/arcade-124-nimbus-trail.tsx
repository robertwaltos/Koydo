"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { CloudRain, PauseCircle, PlayCircle, Shield, Thermometer, TimerReset, Wind } from "lucide-react";
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

type RuntimeEvent = {
  id: number;
  tone: EventTone;
  mood: "thinking" | "happy" | "sad" | "cheering";
  message: string;
};

type StormFront = {
  id: number;
  axis: "row" | "col";
  index: number;
  intensity: number;
  ttlMs: number;
};

type BoardCell = {
  stress: number;
  shieldMs: number;
};

type Position = {
  row: number;
  col: number;
};

type GameState = {
  phase: Phase;
  outcome: Outcome;
  board: BoardCell[];
  cursor: Position;
  score: number;
  lives: number;
  combo: number;
  bestCombo: number;
  interventions: number;
  pulseCharges: number;
  pulseMs: number;
  remainingMs: number;
  level: number;
  storms: StormFront[];
  stormBudgetMs: number;
  passiveBudgetMs: number;
  rechargeBudgetMs: number;
  nextStormId: number;
  interactions: number;
  event: RuntimeEvent | null;
  eventCount: number;
};

type Action =
  | { type: "start" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "move"; deltaRow: -1 | 0 | 1; deltaCol: -1 | 0 | 1 }
  | { type: "selectCell"; row: number; col: number }
  | { type: "cool" }
  | { type: "shield" }
  | { type: "pulse" }
  | { type: "togglePause" };

const GRID = 4;
const CELL_COUNT = GRID * GRID;
const MISSION_MS = 180_000;
const TICK_MS = 100;
const START_LIVES = 3;
const START_PULSE_CHARGES = 2;
const MAX_PULSE_CHARGES = 3;
const PULSE_DURATION_MS = 2600;
const PULSE_RECHARGE_MS = 38_000;
const SHIELD_DURATION_MS = 10_000;
const TARGET_INTERVENTIONS = 70;
const MAX_SCORE = 2800;
const COLLAPSE_THRESHOLD = 100;
const SAFE_MIN = 35;
const SAFE_MAX = 70;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
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

function randomStressBase() {
  return 32 + Math.floor(Math.random() * 26);
}

function createInitialBoard(): BoardCell[] {
  return Array.from({ length: CELL_COUNT }, () => ({
    stress: randomStressBase(),
    shieldMs: 0,
  }));
}

function passiveCadenceMs(level: number) {
  return Math.max(280, 780 - level * 65);
}

function stormCadenceMs(level: number) {
  return Math.max(2100, 5400 - level * 420);
}

function ambientDelta(level: number) {
  return 1 + Math.floor((level - 1) / 2);
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    board: createInitialBoard(),
    cursor: { row: 1, col: 1 },
    score: 0,
    lives: START_LIVES,
    combo: 0,
    bestCombo: 0,
    interventions: 0,
    pulseCharges: START_PULSE_CHARGES,
    pulseMs: 0,
    remainingMs: MISSION_MS,
    level: 1,
    storms: [],
    stormBudgetMs: 0,
    passiveBudgetMs: 0,
    rechargeBudgetMs: 0,
    nextStormId: 1,
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

function reduceGame(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "start":
    case "restart": {
      const base = createBaseState("playing", state.eventCount);
      return withEvent(
        base,
        "good",
        "happy",
        "Terra: Keep all climate cells below collapse while completing 70 interventions.",
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
    case "selectCell": {
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
    case "cool": {
      if (state.phase !== "playing") return state;
      const cellIndex = indexOf(state.cursor.row, state.cursor.col);
      const nextBoard = state.board.slice();
      const current = nextBoard[cellIndex];
      if (!current) return state;
      const before = current.stress;
      const drop = state.pulseMs > 0 ? 22 : 16;
      const after = clamp(before - drop, 0, COLLAPSE_THRESHOLD);
      nextBoard[cellIndex] = {
        ...current,
        stress: after,
      };

      const wasSafe = before >= SAFE_MIN && before <= SAFE_MAX;
      const isSafe = after >= SAFE_MIN && after <= SAFE_MAX;
      let score = state.score + (isSafe && !wasSafe ? 10 : 6);
      const combo = state.combo + 1;
      const bestCombo = Math.max(state.bestCombo, combo);
      const interventions = state.interventions + 1;
      const tone: EventTone = "good";
      let mood: RuntimeEvent["mood"] = combo >= 4 ? "cheering" : "happy";
      let message = "Terra: Cooling jet applied.";

      if (isSafe) {
        message = "Terra: Cell stabilized within safe range.";
      }

      let phase: Phase = state.phase;
      let outcome = state.outcome;
      if (interventions >= TARGET_INTERVENTIONS && state.remainingMs > 0) {
        phase = "complete";
        outcome = "win";
        score += 120;
        message = "Terra: Target intervention count reached. Nimbus Trail secured.";
        mood = "cheering";
      }

      return withEvent(
        {
          ...state,
          phase,
          outcome,
          board: nextBoard,
          score,
          combo,
          bestCombo,
          interventions,
          interactions: state.interactions + 1,
        },
        tone,
        mood,
        message,
      );
    }
    case "shield": {
      if (state.phase !== "playing") return state;
      const cellIndex = indexOf(state.cursor.row, state.cursor.col);
      const nextBoard = state.board.slice();
      const current = nextBoard[cellIndex];
      if (!current) return state;
      nextBoard[cellIndex] = {
        ...current,
        shieldMs: SHIELD_DURATION_MS,
      };
      return withEvent(
        {
          ...state,
          board: nextBoard,
          score: state.score + 4,
          interventions: state.interventions + 1,
          combo: state.combo + 1,
          bestCombo: Math.max(state.bestCombo, state.combo + 1),
          interactions: state.interactions + 1,
        },
        "good",
        "happy",
        "Terra: Local shield deployed.",
      );
    }
    case "pulse": {
      if (state.phase !== "playing") return state;
      if (state.pulseCharges <= 0 || state.pulseMs > 0) return state;
      const nextBoard = state.board.map((cell) => ({
        ...cell,
        stress: clamp(cell.stress - 8, 0, COLLAPSE_THRESHOLD),
      }));
      return withEvent(
        {
          ...state,
          board: nextBoard,
          pulseCharges: state.pulseCharges - 1,
          pulseMs: PULSE_DURATION_MS,
          score: state.score + 18,
          interactions: state.interactions + 1,
        },
        "good",
        "happy",
        "Terra: Atmosphere pulse released across the grid.",
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
          "Terra: Mission paused.",
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
          "Terra: Mission resumed.",
        );
      }
      return state;
    }
    case "tick": {
      if (state.phase !== "playing") return state;

      const remainingMs = Math.max(0, state.remainingMs - TICK_MS);
      const level = levelFromRemainingMs(remainingMs);
      const pulseMs = Math.max(0, state.pulseMs - TICK_MS);
      let passiveBudgetMs = state.passiveBudgetMs + TICK_MS;
      let stormBudgetMs = state.stormBudgetMs + TICK_MS;
      let rechargeBudgetMs = state.rechargeBudgetMs + TICK_MS;
      let pulseCharges = state.pulseCharges;
      let lives = state.lives;
      let score = state.score;
      let combo = state.combo;
      let nextStormId = state.nextStormId;
      const storms = state.storms
        .map((storm) => ({
          ...storm,
          ttlMs: storm.ttlMs - TICK_MS,
        }))
        .filter((storm) => storm.ttlMs > 0);

      let board = state.board.map((cell) => ({
        ...cell,
        shieldMs: Math.max(0, cell.shieldMs - TICK_MS),
      }));

      while (passiveBudgetMs >= passiveCadenceMs(level)) {
        passiveBudgetMs -= passiveCadenceMs(level);
        board = board.map((cell) => {
          const shielded = cell.shieldMs > 0;
          const rise = shielded ? 0.4 : ambientDelta(level);
          return {
            ...cell,
            stress: clamp(cell.stress + rise, 0, COLLAPSE_THRESHOLD + 10),
          };
        });
      }

      while (stormBudgetMs >= stormCadenceMs(level)) {
        stormBudgetMs -= stormCadenceMs(level);
        const axis = Math.random() < 0.5 ? "row" : "col";
        const index = Math.floor(Math.random() * GRID);
        const intensity = 4 + Math.floor(Math.random() * (4 + level));
        storms.push({
          id: nextStormId,
          axis,
          index,
          intensity,
          ttlMs: 5000 + level * 300,
        });
        nextStormId += 1;
      }

      for (const storm of storms) {
        board = board.map((cell, idx) => {
          const row = rowOf(idx);
          const col = colOf(idx);
          const affected = storm.axis === "row" ? row === storm.index : col === storm.index;
          if (!affected) return cell;
          const dampened = cell.shieldMs > 0 ? storm.intensity * 0.35 : storm.intensity;
          return {
            ...cell,
            stress: clamp(cell.stress + dampened * 0.12, 0, COLLAPSE_THRESHOLD + 15),
          };
        });
      }

      if (rechargeBudgetMs >= PULSE_RECHARGE_MS && pulseCharges < MAX_PULSE_CHARGES) {
        pulseCharges += 1;
        rechargeBudgetMs -= PULSE_RECHARGE_MS;
      }

      let breaches = 0;
      board = board.map((cell) => {
        if (cell.stress < COLLAPSE_THRESHOLD) return cell;
        breaches += 1;
        return {
          ...cell,
          stress: 74,
          shieldMs: 0,
        };
      });

      if (breaches > 0) {
        lives = Math.max(0, lives - breaches);
        combo = 0;
        score = Math.max(0, score - breaches * (15 + level));
      } else {
        const safeCount = board.reduce((count, cell) => {
          const safe = cell.stress >= SAFE_MIN && cell.stress <= SAFE_MAX;
          return count + (safe ? 1 : 0);
        }, 0);
        score += safeCount >= 10 ? 2 : 1;
      }

      let phase: Phase = state.phase;
      let outcome = state.outcome;
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      if (breaches > 0) {
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: `${breaches} cell${breaches === 1 ? "" : "s"} collapsed under storm load.`,
        };
      }

      if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "Terra: Infrastructure collapsed. Mission failed.",
        };
      } else if (state.interventions >= TARGET_INTERVENTIONS && remainingMs > 0) {
        phase = "complete";
        outcome = "win";
        pendingEvent = {
          tone: "good",
          mood: "cheering",
          message: "Terra: Intervention target complete. System stabilized.",
        };
      } else if (remainingMs <= 0) {
        const won = state.interventions >= TARGET_INTERVENTIONS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Terra: Time ended with successful stabilization.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Terra: Time expired before target intervention count.",
            };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        board,
        score,
        lives,
        combo,
        remainingMs,
        level,
        pulseCharges,
        pulseMs,
        storms,
        stormBudgetMs,
        passiveBudgetMs,
        rechargeBudgetMs,
        nextStormId,
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

export default function Arcade124NimbusTrail() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const interventionProgress = Math.min(100, Math.round((game.interventions / TARGET_INTERVENTIONS) * 100));
  const safeCells = game.board.reduce((count, cell) => {
    const safe = cell.stress >= SAFE_MIN && cell.stress <= SAFE_MAX;
    return count + (safe ? 1 : 0);
  }, 0);

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.lives <= 1) return "sad";
    if (game.combo >= 5) return "cheering";
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
      gameId: "arcade-124",
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

      if (event.code === "Space") {
        event.preventDefault();
        dispatch({ type: "cool" });
        return;
      }

      if (key === "e") {
        event.preventDefault();
        dispatch({ type: "shield" });
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
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-emerald-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(34,197,94,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-100">Arcade 124</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Nimbus Trail: Climate Forge</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-emerald-200/30 bg-black/35 px-3 py-1 text-emerald-100">
              Score {game.score}
            </span>
            <span className="rounded-full border border-rose-200/30 bg-black/35 px-3 py-1 text-rose-100">
              Lives {game.lives}
            </span>
            <span className="rounded-full border border-cyan-200/30 bg-black/35 px-3 py-1 text-cyan-100">
              Safe Cells {safeCells}/{CELL_COUNT}
            </span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">
              {formatClock(game.remainingMs)}
            </span>
          </div>
        </header>

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-emerald-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-emerald-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-sky-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-sky-100">
              <span>Interventions</span>
              <span>
                {game.interventions}/{TARGET_INTERVENTIONS}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-sky-300 transition-all duration-300" style={{ width: `${interventionProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200/25 bg-black/35 p-3 text-xs text-violet-100">
            <p className="font-bold">Level {game.level}</p>
            <p className="mt-1">Storm fronts active: {game.storms.length}</p>
            <p className="mt-1">Pulse charges: {game.pulseCharges}</p>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-emerald-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="terra" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-emerald-100">
                Stabilize every climate cell as storms sweep rows and columns. Keep stress below collapse and complete 70 interventions.
              </p>
              <ul className="space-y-1 text-xs text-emerald-50">
                <li>Win condition: complete 70 interventions before timer runs out.</li>
                <li>Fail condition: lose all lives to cell collapses or timer ends before target.</li>
                <li>Controls: Arrows/WASD move, Space cools cell, E shields cell, F triggers global pulse.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start Stabilization
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-emerald-200/25 bg-black/35 p-4">
              <div className="grid grid-cols-4 gap-2">
                {game.board.map((cell, index) => {
                  const row = rowOf(index);
                  const col = colOf(index);
                  const isCursor = game.cursor.row === row && game.cursor.col === col;
                  const danger = cell.stress >= 80;
                  const safe = cell.stress >= SAFE_MIN && cell.stress <= SAFE_MAX;
                  const shielded = cell.shieldMs > 0;
                  const background = danger
                    ? "border-rose-300/70 bg-rose-400/25 text-rose-50"
                    : safe
                      ? "border-emerald-300/70 bg-emerald-400/25 text-emerald-50"
                      : "border-amber-300/65 bg-amber-400/20 text-amber-50";
                  return (
                    <button
                      key={`cell-${index}`}
                      type="button"
                      onClick={() => dispatch({ type: "selectCell", row, col })}
                      disabled={game.phase !== "playing"}
                      className={`aspect-square rounded-xl border p-2 text-left transition ${background} ${isCursor ? "ring-2 ring-white/80" : ""}`}
                    >
                      <p className="text-[11px] font-black uppercase">R{row + 1}C{col + 1}</p>
                      <p className="mt-1 text-lg font-black">{Math.round(cell.stress)}</p>
                      <p className="text-[10px] font-bold">{shielded ? "Shielded" : "Open"}</p>
                    </button>
                  );
                })}
              </div>

              {game.phase === "paused" ? (
                <div className="mt-4 rounded-2xl border border-emerald-200/35 bg-black/60 px-6 py-4 text-center">
                  <p className="text-sm font-black text-emerald-100">Paused</p>
                  <p className="mt-1 text-xs text-emerald-50">Press P or tap Resume to continue.</p>
                </div>
              ) : null}

              {game.phase === "complete" ? (
                <div className="mt-4 rounded-2xl border border-emerald-200/35 bg-black/60 p-5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-100">
                    {game.outcome === "win" ? "System Stable" : "System Collapse"}
                  </p>
                  <p className="mt-2 text-xs text-emerald-50">
                    Score {game.score} | Interventions {game.interventions}/{TARGET_INTERVENTIONS} | Best combo {game.bestCombo}
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
                  onClick={() => dispatch({ type: "cool" })}
                  variant="success"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Thermometer className="h-4 w-4" />
                  Cool Cell
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "shield" })}
                  variant="secondary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Shield className="h-4 w-4" />
                  Shield Cell
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "pulse" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.pulseCharges <= 0}
                >
                  <Wind className="h-4 w-4" />
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

            <aside className="rounded-3xl border border-emerald-200/25 bg-black/35 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Terra Console</p>
                <span className="rounded-full border border-emerald-200/35 px-2 py-1 text-[10px] font-bold text-emerald-100">
                  L{game.level}
                </span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="terra" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-emerald-200/25 bg-emerald-200/10 p-2 text-emerald-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <CloudRain className="h-3.5 w-3.5" />
                    Storm Monitor
                  </p>
                  <p className="mt-1 text-sm font-black">{game.storms.length} active fronts</p>
                </div>
                <div className="rounded-xl border border-sky-200/25 bg-sky-200/10 p-2 text-sky-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Shield className="h-3.5 w-3.5" />
                    Combo Integrity
                  </p>
                  <p className="mt-1 text-sm font-black">Combo {game.combo} / Best {game.bestCombo}</p>
                </div>
                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Wind className="h-3.5 w-3.5" />
                    Pulse Charges
                  </p>
                  <p className="mt-1 text-sm font-black">{game.pulseCharges}</p>
                </div>
                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <TimerReset className="h-3.5 w-3.5" />
                    Mission Clock
                  </p>
                  <p className="mt-1 text-sm font-black">{formatClock(game.remainingMs)}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-200/25 bg-emerald-200/10 p-3 text-[11px] text-emerald-50">
                <p className="font-bold uppercase tracking-[0.16em] text-emerald-100">Keyboard</p>
                <p className="mt-1">Arrows/WASD move cursor, Space cools, E shields, F pulses, P pauses.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
