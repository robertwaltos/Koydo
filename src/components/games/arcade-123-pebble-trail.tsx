"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { Brain, PauseCircle, PlayCircle, ShieldAlert, TimerReset, WandSparkles } from "lucide-react";
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
  mood: "thinking" | "happy" | "sad" | "cheering";
  tone: EventTone;
  message: string;
};

type GameState = {
  phase: Phase;
  outcome: Outcome;
  score: number;
  lives: number;
  combo: number;
  bestCombo: number;
  remainingMs: number;
  level: number;
  roundsCleared: number;
  roundIndex: number;
  roundRemainingMs: number;
  previewMs: number;
  pattern: number[];
  patternStep: number;
  patternTail: number | null;
  cursor: number;
  focusCharges: number;
  focusMs: number;
  interactions: number;
  event: RuntimeEvent | null;
  eventCount: number;
};

type Action =
  | { type: "start" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "moveCursor"; deltaRow: -1 | 0 | 1; deltaCol: -1 | 0 | 1 }
  | { type: "tap"; index: number }
  | { type: "focus" }
  | { type: "togglePause" };

type RoundConfig = {
  pattern: number[];
  roundMs: number;
  previewMs: number;
  tail: number;
};

const GRID_SIZE = 4;
const CELL_COUNT = GRID_SIZE * GRID_SIZE;
const MISSION_MS = 180_000;
const TICK_MS = 80;
const START_LIVES = 5;
const TARGET_ROUNDS = 18;
const START_FOCUS_CHARGES = 2;
const MAX_FOCUS_CHARGES = 3;
const FOCUS_DURATION_MS = 2200;
const MAX_SCORE = 3000;

const CELL_GLYPHS = ["◆", "●", "▲", "■", "✦", "✿", "⬟", "⬢", "⬤", "◇", "◉", "☘", "☀", "☾", "⚑", "♫"] as const;
const CELL_SKINS = [
  "border-rose-200/40 bg-rose-300/20 text-rose-50",
  "border-orange-200/40 bg-orange-300/20 text-orange-50",
  "border-amber-200/40 bg-amber-300/20 text-amber-50",
  "border-lime-200/40 bg-lime-300/20 text-lime-50",
  "border-emerald-200/40 bg-emerald-300/20 text-emerald-50",
  "border-cyan-200/40 bg-cyan-300/20 text-cyan-50",
  "border-sky-200/40 bg-sky-300/20 text-sky-50",
  "border-blue-200/40 bg-blue-300/20 text-blue-50",
  "border-indigo-200/40 bg-indigo-300/20 text-indigo-50",
  "border-violet-200/40 bg-violet-300/20 text-violet-50",
  "border-fuchsia-200/40 bg-fuchsia-300/20 text-fuchsia-50",
  "border-pink-200/40 bg-pink-300/20 text-pink-50",
  "border-teal-200/40 bg-teal-300/20 text-teal-50",
  "border-purple-200/40 bg-purple-300/20 text-purple-50",
  "border-slate-200/40 bg-slate-300/20 text-slate-50",
  "border-zinc-200/40 bg-zinc-300/20 text-zinc-50",
] as const;

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

function patternLength(level: number) {
  return clamp(3 + Math.floor((level - 1) / 2), 3, 6);
}

function previewDurationMs(level: number) {
  return Math.max(650, 1650 - level * 120);
}

function roundDurationMs(level: number) {
  return Math.max(2500, 6500 - level * 260);
}

function generatePattern(length: number, previousTail: number | null): number[] {
  const pattern: number[] = [];
  for (let index = 0; index < length; index += 1) {
    let candidate = Math.floor(Math.random() * CELL_COUNT);
    const recent = pattern[index - 1] ?? previousTail;
    let guard = 0;
    while (candidate === recent && guard < 8) {
      candidate = Math.floor(Math.random() * CELL_COUNT);
      guard += 1;
    }
    pattern.push(candidate);
  }
  return pattern;
}

function makeRound(level: number, previousTail: number | null): RoundConfig {
  const length = patternLength(level);
  const pattern = generatePattern(length, previousTail);
  const tail = pattern[pattern.length - 1] ?? 0;
  return {
    pattern,
    roundMs: roundDurationMs(level),
    previewMs: previewDurationMs(level),
    tail,
  };
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    score: 0,
    lives: START_LIVES,
    combo: 0,
    bestCombo: 0,
    remainingMs: MISSION_MS,
    level: 1,
    roundsCleared: 0,
    roundIndex: 0,
    roundRemainingMs: 0,
    previewMs: 0,
    pattern: [],
    patternStep: 0,
    patternTail: null,
    cursor: 0,
    focusCharges: START_FOCUS_CHARGES,
    focusMs: 0,
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
      const firstRound = makeRound(1, null);
      return withEvent(
        {
          ...base,
          level: 1,
          pattern: firstRound.pattern,
          patternTail: firstRound.tail,
          roundRemainingMs: firstRound.roundMs,
          previewMs: firstRound.previewMs,
          cursor: firstRound.pattern[0] ?? 0,
        },
        "good",
        "happy",
        "Luna: Memorize the constellation rhythm, then tap each glyph in order.",
      );
    }
    case "moveCursor": {
      if (state.phase !== "playing") return state;
      const row = Math.floor(state.cursor / GRID_SIZE);
      const col = state.cursor % GRID_SIZE;
      const nextRow = clamp(row + action.deltaRow, 0, GRID_SIZE - 1);
      const nextCol = clamp(col + action.deltaCol, 0, GRID_SIZE - 1);
      const nextCursor = nextRow * GRID_SIZE + nextCol;
      if (nextCursor === state.cursor) return state;
      return {
        ...state,
        cursor: nextCursor,
        interactions: state.interactions + 1,
      };
    }
    case "focus": {
      if (state.phase !== "playing") return state;
      if (state.focusCharges <= 0 || state.focusMs > 0) return state;
      return withEvent(
        {
          ...state,
          focusCharges: state.focusCharges - 1,
          focusMs: FOCUS_DURATION_MS,
          interactions: state.interactions + 1,
        },
        "good",
        "happy",
        "Luna: Focus mode active. Tempo slows for a short precision window.",
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
          "Luna: Session paused. Resume when you are ready.",
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
          "Luna: Back in rhythm. Follow the sequence with steady timing.",
        );
      }
      return state;
    }
    case "tap": {
      if (state.phase !== "playing") return state;
      if (state.previewMs > 0) return state;

      const expected = state.pattern[state.patternStep];
      if (typeof expected !== "number") return state;

      const tapped = clamp(action.index, 0, CELL_COUNT - 1);
      let score = state.score;
      let lives = state.lives;
      let combo = state.combo;
      let bestCombo = state.bestCombo;
      let roundsCleared = state.roundsCleared;
      let roundIndex = state.roundIndex;
      let roundRemainingMs = state.roundRemainingMs;
      let previewMs = state.previewMs;
      let pattern = state.pattern;
      let patternStep = state.patternStep;
      let patternTail = state.patternTail;
      let cursor = tapped;
      let focusCharges = state.focusCharges;
      let focusMs = state.focusMs;
      let phase = state.phase;
      let outcome = state.outcome;
      let tone: EventTone = "good";
      let mood: RuntimeEvent["mood"] = "happy";
      let message = "Luna: Correct note.";

      if (tapped === expected) {
        patternStep += 1;
        score += 10 + state.level + Math.min(14, state.combo * 2);

        if (patternStep >= pattern.length) {
          roundsCleared += 1;
          roundIndex += 1;
          const nextCombo = combo + 1;
          combo = nextCombo;
          bestCombo = Math.max(bestCombo, nextCombo);
          score += 24 + state.level * 3 + Math.min(20, nextCombo * 2);

          if (roundsCleared % 4 === 0) {
            focusCharges = Math.min(MAX_FOCUS_CHARGES, focusCharges + 1);
          }

          if (roundsCleared >= TARGET_ROUNDS) {
            phase = "complete";
            outcome = "win";
            mood = "cheering";
            message = "Luna: Constellation score complete. Pebble Trail mastered.";
            pattern = [];
            patternStep = 0;
            previewMs = 0;
            roundRemainingMs = 0;
            focusMs = 0;
          } else {
            const nextLevel = levelFromRemainingMs(state.remainingMs);
            const nextRound = makeRound(nextLevel, patternTail);
            pattern = nextRound.pattern;
            patternStep = 0;
            previewMs = nextRound.previewMs;
            roundRemainingMs = nextRound.roundMs;
            patternTail = nextRound.tail;
            cursor = nextRound.pattern[0] ?? cursor;
            message = `Luna: Round ${roundIndex + 1} ready. Memorize the new phrase.`;
            mood = nextCombo >= 3 ? "cheering" : "happy";
          }
        } else {
          message = `Luna: Step ${patternStep}/${pattern.length} confirmed.`;
        }
      } else {
        lives = Math.max(0, lives - 1);
        combo = 0;
        score = Math.max(0, score - (9 + state.level));
        tone = "bad";
        mood = "sad";

        if (lives <= 0) {
          phase = "complete";
          outcome = "fail";
          message = "Luna: Focus lost and lives depleted. Try a calmer tempo.";
          pattern = [];
          patternStep = 0;
          previewMs = 0;
          roundRemainingMs = 0;
          focusMs = 0;
        } else {
          const nextLevel = levelFromRemainingMs(state.remainingMs);
          const nextRound = makeRound(nextLevel, patternTail);
          pattern = nextRound.pattern;
          patternStep = 0;
          previewMs = nextRound.previewMs;
          roundRemainingMs = nextRound.roundMs;
          patternTail = nextRound.tail;
          cursor = nextRound.pattern[0] ?? cursor;
          message = "Luna: Off-beat tap. New phrase loaded.";
        }
      }

      return withEvent(
        {
          ...state,
          phase,
          outcome,
          score,
          lives,
          combo,
          bestCombo,
          roundsCleared,
          roundIndex,
          roundRemainingMs,
          previewMs,
          pattern,
          patternStep,
          patternTail,
          cursor,
          focusCharges,
          focusMs,
          interactions: state.interactions + 1,
        },
        tone,
        mood,
        message,
      );
    }
    case "tick": {
      if (state.phase !== "playing") return state;

      const remainingMs = Math.max(0, state.remainingMs - TICK_MS);
      const level = levelFromRemainingMs(remainingMs);
      const focusMs = Math.max(0, state.focusMs - TICK_MS);
      let previewMs = Math.max(0, state.previewMs - TICK_MS);
      let roundRemainingMs = state.roundRemainingMs;
      let lives = state.lives;
      let combo = state.combo;
      let score = state.score;
      let pattern = state.pattern;
      let patternStep = state.patternStep;
      let patternTail = state.patternTail;
      let cursor = state.cursor;
      let phase = state.phase;
      let outcome = state.outcome;
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      if (previewMs <= 0) {
        const drain = focusMs > 0 ? TICK_MS * 0.45 : TICK_MS;
        roundRemainingMs = Math.max(0, roundRemainingMs - drain);
      }

      if (roundRemainingMs <= 0 && phase === "playing") {
        lives = Math.max(0, lives - 1);
        combo = 0;
        score = Math.max(0, score - (8 + level));

        if (lives <= 0) {
          phase = "complete";
          outcome = "fail";
          pattern = [];
          patternStep = 0;
          previewMs = 0;
          roundRemainingMs = 0;
          pendingEvent = {
            tone: "bad",
            mood: "sad",
            message: "Luna: Tempo collapse. Mission failed.",
          };
        } else {
          const nextRound = makeRound(level, patternTail);
          pattern = nextRound.pattern;
          patternStep = 0;
          previewMs = nextRound.previewMs;
          roundRemainingMs = nextRound.roundMs;
          patternTail = nextRound.tail;
          cursor = nextRound.pattern[0] ?? cursor;
          pendingEvent = {
            tone: "bad",
            mood: "sad",
            message: "Luna: Round timeout. New phrase queued.",
          };
        }
      }

      if (remainingMs <= 0 && phase === "playing") {
        const won = state.roundsCleared >= TARGET_ROUNDS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        pattern = [];
        patternStep = 0;
        previewMs = 0;
        roundRemainingMs = 0;
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Luna: Time complete and score target achieved.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Luna: Time expired before all rhythm rounds were cleared.",
            };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        score,
        lives,
        combo,
        remainingMs,
        level,
        roundRemainingMs,
        previewMs,
        pattern,
        patternStep,
        patternTail,
        cursor,
        focusMs,
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

export default function Arcade123PebbleTrail() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const roundProgress = game.pattern.length > 0 ? Math.min(100, Math.round((game.patternStep / game.pattern.length) * 100)) : 0;
  const roundsProgress = Math.min(100, Math.round((game.roundsCleared / TARGET_ROUNDS) * 100));
  const previewActive = game.previewMs > 0;
  const expectedCell = game.pattern[game.patternStep] ?? null;

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.focusMs > 0) return "happy";
    if (game.combo >= 3) return "cheering";
    if (game.lives <= 2) return "sad";
    return "thinking";
  }, [game.combo, game.focusMs, game.lives, game.outcome, game.phase]);

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
      gameId: "arcade-123",
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

      if (key === "r") {
        event.preventDefault();
        restartRun();
        return;
      }

      if (game.phase !== "playing") return;

      if (event.key === "ArrowUp" || key === "w") {
        event.preventDefault();
        dispatch({ type: "moveCursor", deltaRow: -1, deltaCol: 0 });
        return;
      }

      if (event.key === "ArrowDown" || key === "s") {
        event.preventDefault();
        dispatch({ type: "moveCursor", deltaRow: 1, deltaCol: 0 });
        return;
      }

      if (event.key === "ArrowLeft" || key === "a") {
        event.preventDefault();
        dispatch({ type: "moveCursor", deltaRow: 0, deltaCol: -1 });
        return;
      }

      if (event.key === "ArrowRight" || key === "d") {
        event.preventDefault();
        dispatch({ type: "moveCursor", deltaRow: 0, deltaCol: 1 });
        return;
      }

      if (event.code === "Space" || event.key === "Enter") {
        event.preventDefault();
        dispatch({ type: "tap", index: game.cursor });
        return;
      }

      if (key === "f") {
        event.preventDefault();
        dispatch({ type: "focus" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [game.cursor, game.phase, restartRun, startRun]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-fuchsia-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(217,70,239,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-100">Arcade 123</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pebble Trail: Rhythm Mosaic</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-fuchsia-200/30 bg-black/35 px-3 py-1 text-fuchsia-100">
              Score {game.score}
            </span>
            <span className="rounded-full border border-emerald-200/30 bg-black/35 px-3 py-1 text-emerald-100">
              Lives {game.lives}
            </span>
            <span className="rounded-full border border-violet-200/30 bg-black/35 px-3 py-1 text-violet-100">
              Combo {game.combo}
            </span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">
              {formatClock(game.remainingMs)}
            </span>
          </div>
        </header>

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-fuchsia-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-fuchsia-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-fuchsia-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>

          <div className="rounded-2xl border border-violet-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-violet-100">
              <span>Current Phrase</span>
              <span>
                {game.patternStep}/{game.pattern.length || 0}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-violet-300 transition-all duration-300" style={{ width: `${roundProgress}%` }} />
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-emerald-100">
              <span>Rounds Cleared</span>
              <span>
                {game.roundsCleared}/{TARGET_ROUNDS}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-emerald-300 transition-all duration-300" style={{ width: `${roundsProgress}%` }} />
            </div>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-fuchsia-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="luna" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-fuchsia-100">
                Luna will flash a glyph phrase. Memorize it, then tap the 4x4 mosaic in order before the round timer expires.
              </p>
              <ul className="space-y-1 text-xs text-fuchsia-50">
                <li>Win condition: clear 18 rhythm rounds in one mission.</li>
                <li>Fail condition: lose all lives or run out of time before target rounds.</li>
                <li>Controls: Arrows/WASD move cursor, Space/Enter selects, F uses Focus, P pauses.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start Session
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-4">
              <div className="mb-3 flex items-center justify-between rounded-2xl border border-fuchsia-200/20 bg-fuchsia-200/10 px-3 py-2 text-xs text-fuchsia-100">
                <span>Round {game.roundIndex + 1}</span>
                <span>{previewActive ? `Preview ${formatClock(game.previewMs)}` : `Round Clock ${formatClock(game.roundRemainingMs)}`}</span>
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                {game.pattern.map((cell, index) => {
                  const glyph = CELL_GLYPHS[cell] ?? "•";
                  const done = index < game.patternStep;
                  const active = index === game.patternStep && !previewActive;
                  return (
                    <div
                      key={`pattern-${index}-${cell}`}
                      className={`rounded-lg border px-2 py-1 text-xs font-black ${
                        done
                          ? "border-emerald-300/70 bg-emerald-400/25 text-emerald-50"
                          : active
                            ? "border-fuchsia-300/80 bg-fuchsia-400/25 text-fuchsia-50"
                            : "border-fuchsia-200/35 bg-fuchsia-200/10 text-fuchsia-100"
                      }`}
                    >
                      {glyph}
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: CELL_COUNT }, (_, index) => {
                  const skin = CELL_SKINS[index] ?? CELL_SKINS[0];
                  const isCursor = game.cursor === index;
                  const isExpected = !previewActive && expectedCell === index;
                  const inPreview = previewActive && game.pattern.includes(index);
                  return (
                    <button
                      key={`cell-${index}`}
                      type="button"
                      onClick={() => dispatch({ type: "tap", index })}
                      disabled={game.phase !== "playing"}
                      className={`aspect-square rounded-xl border text-lg font-black transition ${skin} ${
                        isCursor ? "ring-2 ring-white/80" : ""
                      } ${isExpected ? "ring-2 ring-fuchsia-300/90" : ""} ${inPreview ? "shadow-[0_0_16px_rgba(244,114,182,0.55)]" : ""}`}
                    >
                      {CELL_GLYPHS[index]}
                    </button>
                  );
                })}
              </div>

              {game.phase === "paused" ? (
                <div className="mt-4 rounded-2xl border border-fuchsia-200/35 bg-black/60 px-6 py-4 text-center">
                  <p className="text-sm font-black text-fuchsia-100">Paused</p>
                  <p className="mt-1 text-xs text-fuchsia-50">Press P or tap Resume to continue.</p>
                </div>
              ) : null}

              {game.phase === "complete" ? (
                <div className="mt-4 rounded-2xl border border-fuchsia-200/35 bg-black/60 p-5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-fuchsia-100">
                    {game.outcome === "win" ? "Mosaic Complete" : "Mosaic Fractured"}
                  </p>
                  <p className="mt-2 text-xs text-fuchsia-50">
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
                  onClick={() => dispatch({ type: "tap", index: game.cursor })}
                  variant="success"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Brain className="h-4 w-4" />
                  Select
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "focus" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.focusCharges <= 0}
                >
                  <WandSparkles className="h-4 w-4" />
                  Focus ({game.focusCharges})
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

            <aside className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-100">Luna Console</p>
                <span className="rounded-full border border-fuchsia-200/35 px-2 py-1 text-[10px] font-bold text-fuchsia-100">
                  L{game.level}
                </span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="luna" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-fuchsia-200/25 bg-fuchsia-200/10 p-2 text-fuchsia-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Brain className="h-3.5 w-3.5" />
                    Phrase Status
                  </p>
                  <p className="mt-1 text-sm font-black">
                    {previewActive ? "Memorize mode" : `Step ${game.patternStep + 1}/${Math.max(1, game.pattern.length)}`}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200/25 bg-emerald-200/10 p-2 text-emerald-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    Accuracy Run
                  </p>
                  <p className="mt-1 text-sm font-black">Best combo {game.bestCombo}</p>
                </div>

                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <WandSparkles className="h-3.5 w-3.5" />
                    Focus Charges
                  </p>
                  <p className="mt-1 text-sm font-black">{game.focusCharges}</p>
                </div>

                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <TimerReset className="h-3.5 w-3.5" />
                    Mission Clock
                  </p>
                  <p className="mt-1 text-sm font-black">{formatClock(game.remainingMs)}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-fuchsia-200/25 bg-fuchsia-200/10 p-3 text-[11px] text-fuchsia-50">
                <p className="font-bold uppercase tracking-[0.16em] text-fuchsia-100">Keyboard</p>
                <p className="mt-1">Arrows/WASD move cursor, Space or Enter selects, F toggles Focus, P pauses.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
