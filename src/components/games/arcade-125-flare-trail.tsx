"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { Brain, PauseCircle, PlayCircle, Sigma, Sparkles, Target, TimerReset, Zap } from "lucide-react";
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
type Operation = "sum" | "difference" | "product" | "mod";

type PuzzleRound = {
  operation: Operation;
  target: number;
  numbers: number[];
  solutions: Array<[number, number]>;
  roundMs: number;
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
  round: PuzzleRound | null;
  selected: number[];
  cursor: number;
  score: number;
  lives: number;
  combo: number;
  bestCombo: number;
  roundsCleared: number;
  hints: number;
  highlightedHint: number[];
  roundRemainingMs: number;
  remainingMs: number;
  level: number;
  interactions: number;
  event: RuntimeEvent | null;
  eventCount: number;
};

type Action =
  | { type: "start" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "move"; deltaRow: -1 | 0 | 1; deltaCol: -1 | 0 | 1 }
  | { type: "selectCell"; index: number }
  | { type: "toggleIndex"; index: number }
  | { type: "submit" }
  | { type: "hint" }
  | { type: "togglePause" };

const GRID_ROWS = 3;
const GRID_COLS = 4;
const CELL_COUNT = GRID_ROWS * GRID_COLS;
const MISSION_MS = 180_000;
const TICK_MS = 100;
const START_LIVES = 4;
const START_HINTS = 2;
const TARGET_ROUNDS = 18;
const MAX_SCORE = 3200;

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

function rowOf(index: number) {
  return Math.floor(index / GRID_COLS);
}

function colOf(index: number) {
  return index % GRID_COLS;
}

function indexOf(row: number, col: number) {
  return row * GRID_COLS + col;
}

function roundTimeMs(level: number) {
  return Math.max(3500, 8600 - level * 380);
}

function pickOperation(level: number): Operation {
  if (level <= 2) return "sum";
  if (level === 3) return Math.random() < 0.5 ? "difference" : "sum";
  if (level === 4) return Math.random() < 0.5 ? "product" : "difference";
  return (["sum", "difference", "product", "mod"] as Operation[])[Math.floor(Math.random() * 4)] ?? "sum";
}

function evaluate(operation: Operation, left: number, right: number) {
  switch (operation) {
    case "sum":
      return left + right;
    case "difference":
      return Math.abs(left - right);
    case "product":
      return left * right;
    case "mod":
      return right === 0 ? Number.NaN : left % right;
    default:
      return Number.NaN;
  }
}

function opLabel(operation: Operation) {
  if (operation === "sum") return "Sum";
  if (operation === "difference") return "Difference";
  if (operation === "product") return "Product";
  return "Modulo";
}

function buildRound(level: number): PuzzleRound {
  const operation = pickOperation(level);
  const maxValue = 8 + level * 2;

  let numbers = Array.from({ length: CELL_COUNT }, () => 1 + Math.floor(Math.random() * maxValue));
  if (operation === "mod") {
    numbers = numbers.map((value) => (value === 0 ? 1 : value));
  }

  const solutions: Array<[number, number]> = [];
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const result = evaluate(operation, numbers[i] ?? 0, numbers[j] ?? 0);
      if (Number.isFinite(result)) {
        solutions.push([i, j]);
      }
      if (operation === "mod") {
        const inverse = evaluate(operation, numbers[j] ?? 0, numbers[i] ?? 0);
        if (Number.isFinite(inverse)) {
          solutions.push([j, i]);
        }
      }
    }
  }

  if (solutions.length === 0) {
    return buildRound(level);
  }

  const chosenSolution = solutions[Math.floor(Math.random() * solutions.length)] ?? solutions[0] ?? [0, 1];
  const target = evaluate(
    operation,
    numbers[chosenSolution[0]] ?? 0,
    numbers[chosenSolution[1]] ?? 0,
  );
  const targetSafe = Number.isFinite(target) ? target : 0;

  const validSolutions = solutions.filter(([a, b]) => {
    const result = evaluate(operation, numbers[a] ?? 0, numbers[b] ?? 0);
    return result === targetSafe;
  });

  return {
    operation,
    target: targetSafe,
    numbers,
    solutions: validSolutions.length > 0 ? validSolutions : [chosenSolution],
    roundMs: roundTimeMs(level),
  };
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    round: null,
    selected: [],
    cursor: 0,
    score: 0,
    lives: START_LIVES,
    combo: 0,
    bestCombo: 0,
    roundsCleared: 0,
    hints: START_HINTS,
    highlightedHint: [],
    roundRemainingMs: 0,
    remainingMs: MISSION_MS,
    level: 1,
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

function nextRoundState(state: GameState, remainingMs: number): GameState {
  const level = levelFromRemainingMs(remainingMs);
  const round = buildRound(level);
  return {
    ...state,
    round,
    selected: [],
    highlightedHint: [],
    roundRemainingMs: round.roundMs,
    level,
    cursor: round.solutions[0]?.[0] ?? 0,
  };
}

function reduceGame(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "start":
    case "restart": {
      const base = createBaseState("playing", state.eventCount);
      return withEvent(
        nextRoundState(base, MISSION_MS),
        "good",
        "happy",
        "Spark: pair two values to match the active target operation.",
      );
    }
    case "move": {
      if (state.phase !== "playing") return state;
      const row = clamp(rowOf(state.cursor) + action.deltaRow, 0, GRID_ROWS - 1);
      const col = clamp(colOf(state.cursor) + action.deltaCol, 0, GRID_COLS - 1);
      const cursor = indexOf(row, col);
      if (cursor === state.cursor) return state;
      return {
        ...state,
        cursor,
        interactions: state.interactions + 1,
      };
    }
    case "selectCell": {
      if (state.phase !== "playing") return state;
      const cursor = clamp(action.index, 0, CELL_COUNT - 1);
      if (cursor === state.cursor) return state;
      return {
        ...state,
        cursor,
        interactions: state.interactions + 1,
      };
    }
    case "toggleIndex": {
      if (state.phase !== "playing" || !state.round) return state;
      const index = clamp(action.index, 0, CELL_COUNT - 1);
      const exists = state.selected.includes(index);
      let selected = state.selected;
      if (exists) {
        selected = state.selected.filter((value) => value !== index);
      } else if (state.selected.length < 2) {
        selected = [...state.selected, index];
      } else {
        selected = [state.selected[1] ?? index, index];
      }
      return {
        ...state,
        selected,
        highlightedHint: [],
        interactions: state.interactions + 1,
      };
    }
    case "hint": {
      if (state.phase !== "playing" || !state.round) return state;
      if (state.hints <= 0) return state;
      const pick = state.round.solutions[Math.floor(Math.random() * state.round.solutions.length)] ?? state.round.solutions[0];
      if (!pick) return state;
      return withEvent(
        {
          ...state,
          hints: state.hints - 1,
          highlightedHint: [pick[0], pick[1]],
          score: Math.max(0, state.score - 6),
          interactions: state.interactions + 1,
        },
        "neutral",
        "thinking",
        "Spark: hint activated. Follow the highlighted pair.",
      );
    }
    case "submit": {
      if (state.phase !== "playing" || !state.round) return state;
      if (state.selected.length !== 2) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 4),
            interactions: state.interactions + 1,
          },
          "bad",
          "sad",
          "Spark: select exactly two cells before submitting.",
        );
      }

      const leftIndex = state.selected[0] ?? 0;
      const rightIndex = state.selected[1] ?? 0;
      const left = state.round.numbers[leftIndex] ?? 0;
      const right = state.round.numbers[rightIndex] ?? 0;
      const result = evaluate(state.round.operation, left, right);
      const success = Number.isFinite(result) && result === state.round.target;

      let score = state.score;
      let lives = state.lives;
      let combo = state.combo;
      let bestCombo = state.bestCombo;
      let roundsCleared = state.roundsCleared;
      let hints = state.hints;
      let phase: Phase = state.phase;
      let outcome = state.outcome;
      let tone: EventTone = "good";
      let mood: RuntimeEvent["mood"] = "happy";
      let message = "Spark: Correct equation pair.";
      let nextState: GameState = {
        ...state,
        selected: [],
        highlightedHint: [],
        interactions: state.interactions + 1,
      };

      if (success) {
        const nextCombo = combo + 1;
        combo = nextCombo;
        bestCombo = Math.max(bestCombo, nextCombo);
        roundsCleared += 1;
        score += 22 + state.level * 3 + Math.min(20, nextCombo * 2);
        if (roundsCleared % 5 === 0) {
          hints = Math.min(4, hints + 1);
        }

        if (roundsCleared >= TARGET_ROUNDS) {
          phase = "complete";
          outcome = "win";
          score += 140;
          mood = "cheering";
          message = "Spark: Target rounds complete. Flare Trail synchronized.";
          nextState = {
            ...nextState,
            phase,
            outcome,
            score,
            combo,
            bestCombo,
            roundsCleared,
            hints,
            round: null,
            roundRemainingMs: 0,
          };
        } else {
          nextState = nextRoundState(
            {
              ...nextState,
              score,
              combo,
              bestCombo,
              roundsCleared,
              hints,
            },
            state.remainingMs,
          );
          message = `Spark: Round ${roundsCleared} cleared. Next target loaded.`;
          mood = nextCombo >= 3 ? "cheering" : "happy";
        }
      } else {
        lives = Math.max(0, lives - 1);
        combo = 0;
        score = Math.max(0, score - (12 + state.level));
        tone = "bad";
        mood = "sad";

        if (lives <= 0) {
          phase = "complete";
          outcome = "fail";
          message = "Spark: Core matrix drifted out. Mission failed.";
          nextState = {
            ...nextState,
            phase,
            outcome,
            lives,
            combo,
            score,
            round: null,
            roundRemainingMs: 0,
          };
        } else {
          nextState = nextRoundState(
            {
              ...nextState,
              lives,
              combo,
              score,
            },
            state.remainingMs,
          );
          message = "Spark: Incorrect pair. New equation incoming.";
        }
      }

      return withEvent(nextState, tone, mood, message);
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
          "Spark: Session paused.",
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
          "Spark: Session resumed.",
        );
      }
      return state;
    }
    case "tick": {
      if (state.phase !== "playing") return state;
      if (!state.round) return state;

      const remainingMs = Math.max(0, state.remainingMs - TICK_MS);
      const roundRemainingMs = Math.max(0, state.roundRemainingMs - TICK_MS);
      let phase: Phase = state.phase;
      let outcome = state.outcome;
      let lives = state.lives;
      let combo = state.combo;
      let score = state.score;
      let nextState: GameState = {
        ...state,
        remainingMs,
        level: levelFromRemainingMs(remainingMs),
        roundRemainingMs,
      };
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      if (roundRemainingMs <= 0 && phase === "playing") {
        lives = Math.max(0, lives - 1);
        combo = 0;
        score = Math.max(0, score - (10 + state.level));
        if (lives <= 0) {
          phase = "complete";
          outcome = "fail";
          nextState = {
            ...nextState,
            phase,
            outcome,
            lives,
            combo,
            score,
            round: null,
            roundRemainingMs: 0,
          };
          pendingEvent = {
            tone: "bad",
            mood: "sad",
            message: "Spark: Timeout collapse. Mission failed.",
          };
        } else {
          nextState = nextRoundState(
            {
              ...nextState,
              lives,
              combo,
              score,
            },
            remainingMs,
          );
          pendingEvent = {
            tone: "bad",
            mood: "sad",
            message: "Spark: Round timed out. Next equation loaded.",
          };
        }
      }

      if (remainingMs <= 0 && phase === "playing") {
        const won = state.roundsCleared >= TARGET_ROUNDS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        nextState = {
          ...nextState,
          phase,
          outcome,
          round: null,
          roundRemainingMs: 0,
        };
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Spark: Time complete with enough solved rounds.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Spark: Time expired before the round target.",
            };
      }

      if (!pendingEvent) return nextState;
      const id = nextState.eventCount + 1;
      return {
        ...nextState,
        eventCount: id,
        event: {
          id,
          ...pendingEvent,
        },
      };
    }
    default:
      return state;
  }
}

export default function Arcade125FlareTrail() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const roundsProgress = Math.min(100, Math.round((game.roundsCleared / TARGET_ROUNDS) * 100));
  const roundProgress = game.round && game.round.roundMs > 0
    ? Math.min(100, Math.round((1 - game.roundRemainingMs / game.round.roundMs) * 100))
    : 0;

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.combo >= 3) return "cheering";
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
      gameId: "arcade-125",
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
        dispatch({ type: "toggleIndex", index: game.cursor });
        return;
      }
      if (key === "h") {
        event.preventDefault();
        dispatch({ type: "hint" });
        return;
      }
      if (key === "f" || event.key === "Enter") {
        event.preventDefault();
        dispatch({ type: "submit" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [game.cursor, game.phase, restartRun, startRun]);

  const activeRound = game.round;

  return (
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-amber-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(245,158,11,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-100">Arcade 125</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Flare Trail: Equation Relay</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">
              Score {game.score}
            </span>
            <span className="rounded-full border border-rose-200/30 bg-black/35 px-3 py-1 text-rose-100">
              Lives {game.lives}
            </span>
            <span className="rounded-full border border-violet-200/30 bg-black/35 px-3 py-1 text-violet-100">
              Combo {game.combo}
            </span>
            <span className="rounded-full border border-sky-200/30 bg-black/35 px-3 py-1 text-sky-100">
              Hints {game.hints}
            </span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">
              {formatClock(game.remainingMs)}
            </span>
          </div>
        </header>

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-amber-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-amber-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-cyan-100">
              <span>Rounds Cleared</span>
              <span>{game.roundsCleared}/{TARGET_ROUNDS}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-cyan-300 transition-all duration-300" style={{ width: `${roundsProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-violet-100">
              <span>Round Clock</span>
              <span>{activeRound ? formatClock(game.roundRemainingMs) : "--:--"}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-violet-300 transition-all duration-300" style={{ width: `${roundProgress}%` }} />
            </div>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-amber-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="spark" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-amber-100">
                Each round gives an operation and target. Pick exactly two numbers that satisfy it before time runs out.
              </p>
              <ul className="space-y-1 text-xs text-amber-50">
                <li>Win condition: clear 18 rounds.</li>
                <li>Fail condition: lose all lives or run out of mission time before target rounds.</li>
                <li>Controls: Arrows/WASD move cursor, Space toggles selection, F submits, H hint, P pause.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start Relay
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-amber-200/25 bg-black/35 p-4">
              <div className="mb-3 rounded-2xl border border-amber-200/25 bg-amber-200/10 p-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">Active Equation</p>
                <p className="mt-1 text-sm text-amber-50">
                  {activeRound ? `${opLabel(activeRound.operation)} target:` : "No active round"}
                </p>
                <p className="text-2xl font-black text-white">{activeRound?.target ?? "--"}</p>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: CELL_COUNT }, (_, index) => {
                  const value = activeRound?.numbers[index] ?? 0;
                  const selected = game.selected.includes(index);
                  const cursor = game.cursor === index;
                  const hinted = game.highlightedHint.includes(index);
                  return (
                    <button
                      key={`num-${index}`}
                      type="button"
                      onClick={() => dispatch({ type: "toggleIndex", index })}
                      onMouseEnter={() => dispatch({ type: "selectCell", index })}
                      disabled={game.phase !== "playing" || !activeRound}
                      className={`aspect-square rounded-xl border text-lg font-black transition ${
                        selected
                          ? "border-emerald-300/80 bg-emerald-400/25 text-emerald-50"
                          : hinted
                            ? "border-sky-300/80 bg-sky-400/25 text-sky-50"
                            : "border-amber-200/35 bg-amber-200/10 text-amber-50"
                      } ${cursor ? "ring-2 ring-white/80" : ""}`}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>

              {game.phase === "paused" ? (
                <div className="mt-4 rounded-2xl border border-amber-200/35 bg-black/60 px-6 py-4 text-center">
                  <p className="text-sm font-black text-amber-100">Paused</p>
                  <p className="mt-1 text-xs text-amber-50">Press P or tap Resume to continue.</p>
                </div>
              ) : null}

              {game.phase === "complete" ? (
                <div className="mt-4 rounded-2xl border border-amber-200/35 bg-black/60 p-5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-100">
                    {game.outcome === "win" ? "Relay Complete" : "Relay Lost"}
                  </p>
                  <p className="mt-2 text-xs text-amber-50">
                    Score {game.score} | Rounds {game.roundsCleared}/{TARGET_ROUNDS} | Best combo {game.bestCombo}
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
                  onClick={() => dispatch({ type: "submit" })}
                  variant="success"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Target className="h-4 w-4" />
                  Submit Pair
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "hint" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.hints <= 0}
                >
                  <Sparkles className="h-4 w-4" />
                  Hint ({game.hints})
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

            <aside className="rounded-3xl border border-amber-200/25 bg-black/35 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-100">Spark Console</p>
                <span className="rounded-full border border-amber-200/35 px-2 py-1 text-[10px] font-bold text-amber-100">
                  L{game.level}
                </span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="spark" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Sigma className="h-3.5 w-3.5" />
                    Operation
                  </p>
                  <p className="mt-1 text-sm font-black">{activeRound ? opLabel(activeRound.operation) : "--"}</p>
                </div>
                <div className="rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-2 text-cyan-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Brain className="h-3.5 w-3.5" />
                    Selected
                  </p>
                  <p className="mt-1 text-sm font-black">{game.selected.length}/2 cells</p>
                </div>
                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Zap className="h-3.5 w-3.5" />
                    Combo
                  </p>
                  <p className="mt-1 text-sm font-black">{game.combo} (best {game.bestCombo})</p>
                </div>
                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <TimerReset className="h-3.5 w-3.5" />
                    Mission Clock
                  </p>
                  <p className="mt-1 text-sm font-black">{formatClock(game.remainingMs)}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-amber-200/25 bg-amber-200/10 p-3 text-[11px] text-amber-50">
                <p className="font-bold uppercase tracking-[0.16em] text-amber-100">Keyboard</p>
                <p className="mt-1">Arrows/WASD move cursor, Space toggles selection, F submits, H hints, P pauses.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
