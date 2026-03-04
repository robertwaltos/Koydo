"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { Gauge, PauseCircle, PlayCircle, TimerReset, WandSparkles } from "lucide-react";
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
type Accent = "soft" | "strong";

type Note = {
  id: number;
  lane: number;
  accent: Accent;
  y: number;
  speed: number;
};

type Phrase = {
  id: number;
  lanes: number[];
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
  notes: Note[];
  lane: number;
  phrase: Phrase;
  phraseIndex: number;
  phrasesCleared: number;
  hits: number;
  score: number;
  lives: number;
  combo: number;
  bestCombo: number;
  burstCharges: number;
  remainingMs: number;
  level: number;
  spawnBudgetMs: number;
  rechargeBudgetMs: number;
  nextNoteId: number;
  nextPhraseId: number;
  interactions: number;
  event: RuntimeEvent | null;
  eventCount: number;
};

type Action =
  | { type: "start" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "shift"; delta: -1 | 1 }
  | { type: "selectLane"; lane: number }
  | { type: "hit" }
  | { type: "burst" }
  | { type: "togglePause" };

const LANES = 4;
const MISSION_MS = 180_000;
const TICK_MS = 70;
const START_LIVES = 5;
const TARGET_HITS = 96;
const START_BURST_CHARGES = 1;
const MAX_BURST_CHARGES = 3;
const BURST_RECHARGE_MS = 36_000;
const HIT_LOW = 82;
const HIT_HIGH = 98;
const MAX_SCORE = 3600;

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

function spawnCadenceMs(level: number) {
  return Math.max(250, 760 - level * 72);
}

function phraseLength(level: number) {
  return clamp(3 + Math.floor(level / 2), 3, 6);
}

function createPhrase(nextId: number, level: number): Phrase {
  const length = phraseLength(level);
  const lanes: number[] = [];
  for (let index = 0; index < length; index += 1) {
    if (index === 0) {
      lanes.push(Math.floor(Math.random() * LANES));
      continue;
    }
    const previous = lanes[index - 1] ?? 0;
    if (Math.random() < 0.4) {
      lanes.push(previous);
      continue;
    }
    lanes.push(Math.floor(Math.random() * LANES));
  }
  return {
    id: nextId,
    lanes,
  };
}

function createNote(nextId: number, level: number, expectedLane: number): Note {
  const lane = Math.random() < Math.max(0.38, 0.62 - level * 0.04)
    ? expectedLane
    : Math.floor(Math.random() * LANES);
  const accent: Accent = Math.random() < Math.max(0.16, 0.32 - level * 0.03) ? "strong" : "soft";
  return {
    id: nextId,
    lane,
    accent,
    y: -8,
    speed: 1.25 + level * 0.23 + Math.random() * 0.35,
  };
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    notes: [],
    lane: 1,
    phrase: createPhrase(1, 1),
    phraseIndex: 0,
    phrasesCleared: 0,
    hits: 0,
    score: 0,
    lives: START_LIVES,
    combo: 0,
    bestCombo: 0,
    burstCharges: START_BURST_CHARGES,
    remainingMs: MISSION_MS,
    level: 1,
    spawnBudgetMs: 0,
    rechargeBudgetMs: 0,
    nextNoteId: 1,
    nextPhraseId: 2,
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

function loadNextPhrase(state: GameState): GameState {
  return {
    ...state,
    phrase: createPhrase(state.nextPhraseId, state.level),
    phraseIndex: 0,
    nextPhraseId: state.nextPhraseId + 1,
  };
}

function resolveHit(state: GameState, note: Note, notes: Note[]): GameState {
  const expectedLane = state.phrase.lanes[state.phraseIndex] ?? 0;
  const success = note.lane === expectedLane;

  let phraseIndex = state.phraseIndex;
  let phrasesCleared = state.phrasesCleared;
  let hits = state.hits;
  let score = state.score;
  let lives = state.lives;
  let combo = state.combo;
  let bestCombo = state.bestCombo;
  let burstCharges = state.burstCharges;
  let phase: Phase = state.phase;
  let outcome = state.outcome;
  let mood: RuntimeEvent["mood"] = success ? "happy" : "sad";
  let message = success ? "Luna: timing window captured." : "Luna: phrase lane mismatch.";

  if (success) {
    hits += 1;
    combo += 1;
    bestCombo = Math.max(bestCombo, combo);
    score += 18 + state.level * 2 + Math.min(20, combo * 2);
    phraseIndex += 1;

    if (phraseIndex >= state.phrase.lanes.length) {
      phrasesCleared += 1;
      phraseIndex = 0;
      score += 32 + state.level * 3;
      if (phrasesCleared % 3 === 0) {
        burstCharges = Math.min(MAX_BURST_CHARGES, burstCharges + 1);
      }
      message = `Luna: phrase ${phrasesCleared} cleared. New motif loaded.`;
      mood = "cheering";
    } else {
      const nextLane = state.phrase.lanes[phraseIndex] ?? expectedLane;
      message = `Luna: good strike. Next lane ${nextLane + 1}.`;
    }

    if (hits >= TARGET_HITS) {
      phase = "complete";
      outcome = "win";
      score += 150;
      message = "Luna: full set complete. Harmonic circuit secured.";
      mood = "cheering";
    }
  } else {
    lives = Math.max(0, lives - 1);
    combo = 0;
    score = Math.max(0, score - (12 + state.level));
    if (lives <= 0) {
      phase = "complete";
      outcome = "fail";
      message = "Luna: stage control lost.";
    }
  }

  let nextState: GameState = {
    ...state,
    phase,
    outcome,
    notes,
    phraseIndex,
    phrasesCleared,
    hits,
    score,
    lives,
    combo,
    bestCombo,
    burstCharges,
    interactions: state.interactions + 1,
  };

  if (success && phase === "playing" && phraseIndex === 0 && phrasesCleared > state.phrasesCleared) {
    nextState = loadNextPhrase(nextState);
  }

  return withEvent(nextState, success ? "good" : "bad", mood, message);
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
        "Luna: follow the phrase lanes and strike notes inside the timing gate.",
      );
    }
    case "shift": {
      if (state.phase !== "playing") return state;
      const lane = clamp(state.lane + action.delta, 0, LANES - 1);
      if (lane === state.lane) return state;
      return {
        ...state,
        lane,
        interactions: state.interactions + 1,
      };
    }
    case "selectLane": {
      if (state.phase !== "playing") return state;
      const lane = clamp(action.lane, 0, LANES - 1);
      if (lane === state.lane) return state;
      return {
        ...state,
        lane,
        interactions: state.interactions + 1,
      };
    }
    case "hit": {
      if (state.phase !== "playing") return state;
      const laneNotes = state.notes
        .filter((note) => note.lane === state.lane)
        .sort((a, b) => b.y - a.y);
      const target = laneNotes[0];

      if (!target) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 4),
            interactions: state.interactions + 1,
          },
          "bad",
          "sad",
          "Luna: no note in this lane.",
        );
      }

      if (target.y < HIT_LOW || target.y > HIT_HIGH) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 5),
            interactions: state.interactions + 1,
          },
          "neutral",
          "thinking",
          "Luna: strike inside the gate window for full sync.",
        );
      }

      const notes = state.notes.filter((note) => note.id !== target.id);
      return resolveHit(state, target, notes);
    }
    case "burst": {
      if (state.phase !== "playing") return state;
      if (state.burstCharges <= 0) return state;

      const expectedLane = state.phrase.lanes[state.phraseIndex] ?? 0;
      const inWindow = state.notes.filter((note) => note.y >= HIT_LOW - 4 && note.y <= HIT_HIGH + 2);
      const target = inWindow
        .filter((note) => note.lane === expectedLane)
        .sort((a, b) => b.y - a.y)[0];

      if (!target) {
        return withEvent(
          {
            ...state,
            burstCharges: state.burstCharges - 1,
            score: Math.max(0, state.score - 8),
            interactions: state.interactions + 1,
          },
          "bad",
          "sad",
          "Luna: burst fired without the expected lane note in gate.",
        );
      }

      const notes = state.notes.filter((note) => {
        const inGate = note.y >= HIT_LOW - 4 && note.y <= HIT_HIGH + 2;
        if (!inGate) return true;
        return note.id === target.id ? false : note.lane === expectedLane;
      });

      const resolved = resolveHit(state, target, notes);
      return {
        ...resolved,
        burstCharges: Math.max(0, resolved.burstCharges - 1),
        score: resolved.score + 6,
      };
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
          "Luna: set paused.",
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
          "Luna: set resumed.",
        );
      }
      return state;
    }
    case "tick": {
      if (state.phase !== "playing") return state;

      const remainingMs = Math.max(0, state.remainingMs - TICK_MS);
      const level = levelFromRemainingMs(remainingMs);
      let spawnBudgetMs = state.spawnBudgetMs + TICK_MS;
      let rechargeBudgetMs = state.rechargeBudgetMs + TICK_MS;
      let burstCharges = state.burstCharges;
      let lives = state.lives;
      let combo = state.combo;
      let score = state.score;
      let nextNoteId = state.nextNoteId;

      const notes = state.notes.map((note) => ({
        ...note,
        y: note.y + note.speed + (level - 1) * 0.06,
      }));

      while (spawnBudgetMs >= spawnCadenceMs(level)) {
        spawnBudgetMs -= spawnCadenceMs(level);
        const expectedLane = state.phrase.lanes[state.phraseIndex] ?? 0;
        notes.push(createNote(nextNoteId, level, expectedLane));
        nextNoteId += 1;
      }

      if (rechargeBudgetMs >= BURST_RECHARGE_MS && burstCharges < MAX_BURST_CHARGES) {
        burstCharges += 1;
        rechargeBudgetMs -= BURST_RECHARGE_MS;
      }

      let hardMisses = 0;
      let softMisses = 0;
      const active: Note[] = [];
      const expectedLane = state.phrase.lanes[state.phraseIndex] ?? 0;

      for (const note of notes) {
        if (note.y <= 102) {
          active.push(note);
          continue;
        }
        if (note.lane === expectedLane || note.accent === "strong") {
          hardMisses += 1;
        } else {
          softMisses += 1;
        }
      }

      if (hardMisses > 0) {
        lives = Math.max(0, lives - hardMisses);
        combo = 0;
        score = Math.max(0, score - hardMisses * (11 + level));
      }
      if (softMisses > 0) {
        score = Math.max(0, score - softMisses * 4);
      }
      if (hardMisses === 0 && softMisses === 0) {
        score += 1;
      }

      let phase: Phase = state.phase;
      let outcome = state.outcome;
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      if (hardMisses > 0) {
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: `${hardMisses} critical note${hardMisses === 1 ? "" : "s"} missed at gate.`,
        };
      }

      if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "Luna: stage integrity depleted.",
        };
      } else if (remainingMs <= 0) {
        const won = state.hits >= TARGET_HITS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Luna: time complete with target hits secured.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Luna: time expired before hit target.",
            };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        notes: phase === "complete" ? [] : active,
        score,
        lives,
        combo,
        remainingMs,
        level,
        burstCharges,
        spawnBudgetMs,
        rechargeBudgetMs,
        nextNoteId,
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

export default function Arcade129LunaCircuit() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const hitProgress = Math.min(100, Math.round((game.hits / TARGET_HITS) * 100));
  const expectedLane = game.phrase.lanes[game.phraseIndex] ?? 0;

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.combo >= 6) return "cheering";
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
      gameId: "arcade-129",
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

      if (event.key === "ArrowLeft" || key === "a") {
        event.preventDefault();
        dispatch({ type: "shift", delta: -1 });
        return;
      }
      if (event.key === "ArrowRight" || key === "d") {
        event.preventDefault();
        dispatch({ type: "shift", delta: 1 });
        return;
      }
      if (key === "1" || key === "2" || key === "3" || key === "4") {
        event.preventDefault();
        dispatch({ type: "selectLane", lane: Number.parseInt(key, 10) - 1 });
        return;
      }
      if (event.code === "Space") {
        event.preventDefault();
        dispatch({ type: "hit" });
        return;
      }
      if (key === "f") {
        event.preventDefault();
        dispatch({ type: "burst" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [game.phase, restartRun, startRun]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-fuchsia-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(217,70,239,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-100">Arcade 129</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Circuit: Harmonic Relay</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-fuchsia-200/30 bg-black/35 px-3 py-1 text-fuchsia-100">Score {game.score}</span>
            <span className="rounded-full border border-rose-200/30 bg-black/35 px-3 py-1 text-rose-100">Lives {game.lives}</span>
            <span className="rounded-full border border-cyan-200/30 bg-black/35 px-3 py-1 text-cyan-100">Combo {game.combo}</span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">{formatClock(game.remainingMs)}</span>
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
          <div className="rounded-2xl border border-cyan-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-cyan-100">
              <span>Hit Target</span>
              <span>{game.hits}/{TARGET_HITS}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-cyan-300 transition-all duration-300" style={{ width: `${hitProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-fuchsia-200/25 bg-black/35 p-3 text-xs text-fuchsia-100">
            <p className="font-bold">Expected Lane</p>
            <p className="mt-1 text-sm font-black">Lane {expectedLane + 1}</p>
            <p className="mt-1">Burst charges: {game.burstCharges}</p>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-fuchsia-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="luna" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-fuchsia-100">
                Follow Luna&apos;s phrase lanes and strike notes inside the timing gate. Keep rhythm under rising tempo pressure.
              </p>
              <ul className="space-y-1 text-xs text-fuchsia-50">
                <li>Win condition: reach 96 synced hits.</li>
                <li>Fail condition: lose all lives from critical misses or run out of mission time.</li>
                <li>Controls: A/D or arrows shift lane, Space hit, F burst, P pause, 1-4 direct lane.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start Harmonic Relay
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-4">
              <div className="mb-3 rounded-2xl border border-fuchsia-200/25 bg-fuchsia-200/10 p-3 text-xs text-fuchsia-100">
                <p className="font-black uppercase tracking-[0.18em]">Phrase Pattern</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {game.phrase.lanes.map((lane, index) => {
                    const active = index === game.phraseIndex;
                    return (
                      <span
                        key={`phrase-${index}`}
                        className={`rounded-full border px-2 py-1 text-[10px] font-black uppercase ${
                          active
                            ? "border-white/80 bg-white/20 text-white"
                            : "border-fuchsia-200/30 bg-fuchsia-200/10 text-fuchsia-100"
                        }`}
                      >
                        Lane {lane + 1}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {Array.from({ length: LANES }, (_, lane) => {
                  const laneNotes = game.notes.filter((note) => note.lane === lane);
                  const selected = lane === game.lane;
                  return (
                    <button
                      key={`lane-${lane}`}
                      type="button"
                      onClick={() => dispatch({ type: "selectLane", lane })}
                      disabled={game.phase !== "playing"}
                      className={`relative h-[300px] rounded-2xl border bg-black/40 p-2 text-left transition ${
                        selected ? "border-white/80 ring-2 ring-fuchsia-200/70" : "border-fuchsia-200/30"
                      }`}
                    >
                      <div className="absolute inset-x-2 bottom-[10%] h-1 rounded-full bg-white/45" />
                      {laneNotes.map((note) => (
                        <div
                          key={`note-${note.id}`}
                          className={`absolute left-1/2 w-[82%] -translate-x-1/2 rounded-lg border px-2 py-1 text-center text-[10px] font-black ${
                            note.accent === "strong"
                              ? "border-amber-300/70 bg-amber-400/25 text-amber-50"
                              : "border-cyan-300/70 bg-cyan-400/25 text-cyan-50"
                          }`}
                          style={{ bottom: `${clamp(note.y, 0, 94)}%` }}
                        >
                          {note.accent === "strong" ? "Strong" : "Soft"}
                        </div>
                      ))}
                      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-fuchsia-200/40 px-2 py-1 text-[10px] font-black uppercase text-fuchsia-100">
                        Lane {lane + 1}
                      </p>
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
                    {game.outcome === "win" ? "Stage Cleared" : "Stage Lost"}
                  </p>
                  <p className="mt-2 text-xs text-fuchsia-50">
                    Score {game.score} | Hits {game.hits}/{TARGET_HITS} | Best combo {game.bestCombo}
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
                  onClick={() => dispatch({ type: "hit" })}
                  variant="success"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Gauge className="h-4 w-4" />
                  Hit
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "burst" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.burstCharges <= 0}
                >
                  <WandSparkles className="h-4 w-4" />
                  Burst ({game.burstCharges})
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
                <span className="rounded-full border border-fuchsia-200/35 px-2 py-1 text-[10px] font-bold text-fuchsia-100">L{game.level}</span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="luna" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-fuchsia-200/25 bg-fuchsia-200/10 p-2 text-fuchsia-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Gauge className="h-3.5 w-3.5" />
                    Active Lane
                  </p>
                  <p className="mt-1 text-sm font-black">{game.lane + 1}</p>
                </div>
                <div className="rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-2 text-cyan-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Gauge className="h-3.5 w-3.5" />
                    Phrases Cleared
                  </p>
                  <p className="mt-1 text-sm font-black">{game.phrasesCleared}</p>
                </div>
                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <WandSparkles className="h-3.5 w-3.5" />
                    Burst Charges
                  </p>
                  <p className="mt-1 text-sm font-black">{game.burstCharges}</p>
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
                <p className="mt-1">A/D or arrows lane shift, 1-4 lane select, Space hit, F burst, P pause.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
