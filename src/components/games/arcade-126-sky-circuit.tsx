"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { Compass, PauseCircle, PlayCircle, Radar, TimerReset, WandSparkles } from "lucide-react";
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
type FragmentKind = "claim" | "evidence" | "context";

type SignalToken = {
  id: number;
  lane: number;
  kind: FragmentKind;
  text: string;
  y: number;
  speed: number;
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
  tokens: SignalToken[];
  lane: number;
  sequence: FragmentKind[];
  sequenceIndex: number;
  score: number;
  lives: number;
  combo: number;
  bestCombo: number;
  roundsCleared: number;
  pulseCharges: number;
  pulseMs: number;
  remainingMs: number;
  level: number;
  spawnBudgetMs: number;
  rechargeBudgetMs: number;
  nextTokenId: number;
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
  | { type: "capture" }
  | { type: "pulse" }
  | { type: "togglePause" };

const LANES = 3;
const MISSION_MS = 180_000;
const TICK_MS = 80;
const START_LIVES = 4;
const TARGET_ROUNDS = 22;
const START_PULSE_CHARGES = 2;
const MAX_PULSE_CHARGES = 3;
const PULSE_DURATION_MS = 2600;
const PULSE_RECHARGE_MS = 34_000;
const CAPTURE_FLOOR_Y = 50;
const MAX_SCORE = 3400;

const KIND_LABEL: Record<FragmentKind, string> = {
  claim: "Claim",
  evidence: "Evidence",
  context: "Context",
};

const WORD_BANK: Record<FragmentKind, string[]> = {
  claim: ["species adapt", "author argues", "storm weakens", "reader infers", "team predicts", "signal holds"],
  evidence: ["data table", "field sample", "chapter quote", "lab result", "timeline mark", "control trial"],
  context: ["over time", "in this habitat", "under pressure", "during testing", "within chapter two", "across regions"],
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

function spawnCadenceMs(level: number) {
  return Math.max(300, 900 - level * 86);
}

function makeSequence(level: number): FragmentKind[] {
  if (level <= 2) return ["claim", "evidence", "context"];
  if (level <= 4) return randomFrom([
    ["context", "claim", "evidence"],
    ["claim", "context", "evidence"],
  ]);
  return randomFrom([
    ["claim", "evidence", "context", "evidence"],
    ["context", "claim", "evidence", "context"],
  ]);
}

function pickSpawnKind(expected: FragmentKind, level: number): FragmentKind {
  const roll = Math.random();
  const expectedWeight = Math.max(0.38, 0.62 - level * 0.04);
  if (roll <= expectedWeight) return expected;
  const decoys = (Object.keys(KIND_LABEL) as FragmentKind[]).filter((kind) => kind !== expected);
  return randomFrom(decoys);
}

function createToken(nextId: number, lane: number, level: number, kind: FragmentKind): SignalToken {
  return {
    id: nextId,
    lane,
    kind,
    text: randomFrom(WORD_BANK[kind]),
    y: -8,
    speed: 1.2 + level * 0.22 + Math.random() * 0.28,
  };
}

function tokenTone(kind: FragmentKind) {
  if (kind === "claim") return "border-sky-300/70 bg-sky-400/25 text-sky-50";
  if (kind === "evidence") return "border-emerald-300/70 bg-emerald-400/25 text-emerald-50";
  return "border-violet-300/70 bg-violet-400/25 text-violet-50";
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    tokens: [],
    lane: 1,
    sequence: makeSequence(1),
    sequenceIndex: 0,
    score: 0,
    lives: START_LIVES,
    combo: 0,
    bestCombo: 0,
    roundsCleared: 0,
    pulseCharges: START_PULSE_CHARGES,
    pulseMs: 0,
    remainingMs: MISSION_MS,
    level: 1,
    spawnBudgetMs: 0,
    rechargeBudgetMs: 0,
    nextTokenId: 1,
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
        "Echo: capture language fragments in the exact order shown by the route pattern.",
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
    case "pulse": {
      if (state.phase !== "playing") return state;
      if (state.pulseCharges <= 0 || state.pulseMs > 0) return state;
      return withEvent(
        {
          ...state,
          pulseCharges: state.pulseCharges - 1,
          pulseMs: PULSE_DURATION_MS,
          score: state.score + 8,
          interactions: state.interactions + 1,
        },
        "neutral",
        "thinking",
        "Echo: pulse active. Token drift temporarily slowed.",
      );
    }
    case "capture": {
      if (state.phase !== "playing") return state;
      const laneTokens = state.tokens
        .filter((token) => token.lane === state.lane)
        .sort((a, b) => b.y - a.y);
      const target = laneTokens[0];
      const expected = state.sequence[state.sequenceIndex] ?? "claim";

      if (!target) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 3),
            interactions: state.interactions + 1,
          },
          "bad",
          "sad",
          "Echo: no token in this lane.",
        );
      }

      if (target.y < CAPTURE_FLOOR_Y) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 2),
            interactions: state.interactions + 1,
          },
          "neutral",
          "thinking",
          "Echo: too early. Capture near the gate line.",
        );
      }

      const success = target.kind === expected;
      const tokens = state.tokens.filter((token) => token.id !== target.id);
      let score = state.score;
      let lives = state.lives;
      let combo = state.combo;
      let bestCombo = state.bestCombo;
      let roundsCleared = state.roundsCleared;
      let sequenceIndex = state.sequenceIndex;
      let sequence = state.sequence;
      let pulseCharges = state.pulseCharges;
      let phase = state.phase;
      let outcome = state.outcome;
      const tone: EventTone = success ? "good" : "bad";
      let mood: RuntimeEvent["mood"] = success ? "happy" : "sad";
      let message = success ? "Echo: fragment accepted." : "Echo: wrong fragment kind.";

      if (success) {
        combo += 1;
        bestCombo = Math.max(bestCombo, combo);
        score += 18 + state.level * 2 + Math.min(18, combo * 2);
        sequenceIndex += 1;

        if (sequenceIndex >= sequence.length) {
          roundsCleared += 1;
          sequence = makeSequence(state.level);
          sequenceIndex = 0;
          score += 30 + state.level * 3;
          if (roundsCleared % 4 === 0) {
            pulseCharges = Math.min(MAX_PULSE_CHARGES, pulseCharges + 1);
          }

          if (roundsCleared >= TARGET_ROUNDS) {
            phase = "complete";
            outcome = "win";
            score += 140;
            mood = "cheering";
            message = "Echo: all routes complete. Sky Circuit stabilized.";
          } else {
            message = `Echo: route ${roundsCleared} complete. New pattern online.`;
          }
        } else {
          const nextKind = sequence[sequenceIndex] ?? "claim";
          message = `Echo: next target is ${KIND_LABEL[nextKind]}.`;
        }
      } else {
        lives = Math.max(0, lives - 1);
        combo = 0;
        score = Math.max(0, score - (12 + state.level));
        message = `Echo: expected ${KIND_LABEL[expected]}, received ${KIND_LABEL[target.kind]}.`;
        if (lives <= 0) {
          phase = "complete";
          outcome = "fail";
          message = "Echo: route integrity lost.";
        }
      }

      return withEvent(
        {
          ...state,
          phase,
          outcome,
          tokens: phase === "complete" ? [] : tokens,
          score,
          lives,
          combo,
          bestCombo,
          roundsCleared,
          sequence,
          sequenceIndex,
          pulseCharges,
          interactions: state.interactions + 1,
        },
        tone,
        mood,
        message,
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
      let spawnBudgetMs = state.spawnBudgetMs + TICK_MS;
      let rechargeBudgetMs = state.rechargeBudgetMs + TICK_MS;
      let pulseCharges = state.pulseCharges;
      let nextTokenId = state.nextTokenId;
      let lives = state.lives;
      let combo = state.combo;
      let score = state.score;

      const tokens = state.tokens.map((token) => ({
        ...token,
        y: token.y + token.speed * (pulseMs > 0 ? 0.55 : 1) + (level - 1) * 0.05,
      }));

      while (spawnBudgetMs >= spawnCadenceMs(level)) {
        spawnBudgetMs -= spawnCadenceMs(level);
        const expected = state.sequence[state.sequenceIndex] ?? "claim";
        const kind = pickSpawnKind(expected, level);
        const lane = Math.floor(Math.random() * LANES);
        tokens.push(createToken(nextTokenId, lane, level, kind));
        nextTokenId += 1;
      }

      if (rechargeBudgetMs >= PULSE_RECHARGE_MS && pulseCharges < MAX_PULSE_CHARGES) {
        pulseCharges += 1;
        rechargeBudgetMs -= PULSE_RECHARGE_MS;
      }

      const expected = state.sequence[state.sequenceIndex] ?? "claim";
      let missedRequired = 0;
      const active: SignalToken[] = [];
      for (const token of tokens) {
        if (token.y <= 102) {
          active.push(token);
          continue;
        }
        if (token.kind === expected) {
          missedRequired += 1;
        }
      }

      if (missedRequired > 0) {
        lives = Math.max(0, lives - missedRequired);
        combo = 0;
        score = Math.max(0, score - missedRequired * (10 + level));
      } else {
        score += 1;
      }

      let phase = state.phase;
      let outcome = state.outcome;
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      if (missedRequired > 0) {
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: `${missedRequired} required token${missedRequired === 1 ? "" : "s"} drifted past the gate.`,
        };
      }

      if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "Echo: all lives exhausted.",
        };
      } else if (remainingMs <= 0) {
        const won = state.roundsCleared >= TARGET_ROUNDS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Echo: timer ended with route target complete.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Echo: timer expired before completing route quota.",
            };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        tokens: phase === "complete" ? [] : active,
        score,
        lives,
        combo,
        remainingMs,
        level,
        pulseCharges,
        pulseMs,
        spawnBudgetMs,
        rechargeBudgetMs,
        nextTokenId,
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

export default function Arcade126SkyCircuit() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const roundsProgress = Math.min(100, Math.round((game.roundsCleared / TARGET_ROUNDS) * 100));
  const nextKind = game.sequence[game.sequenceIndex] ?? "claim";

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.combo >= 4) return "cheering";
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
      gameId: "arcade-126",
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
      if (key === "1" || key === "2" || key === "3") {
        event.preventDefault();
        dispatch({ type: "selectLane", lane: Number.parseInt(key, 10) - 1 });
        return;
      }
      if (event.code === "Space") {
        event.preventDefault();
        dispatch({ type: "capture" });
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
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-sky-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.24),transparent_46%),radial-gradient(circle_at_84%_82%,rgba(14,165,233,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-100">Arcade 126</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Sky Circuit: Meaning Routes</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-sky-200/30 bg-black/35 px-3 py-1 text-sky-100">Score {game.score}</span>
            <span className="rounded-full border border-rose-200/30 bg-black/35 px-3 py-1 text-rose-100">Lives {game.lives}</span>
            <span className="rounded-full border border-violet-200/30 bg-black/35 px-3 py-1 text-violet-100">Combo {game.combo}</span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">{formatClock(game.remainingMs)}</span>
          </div>
        </header>

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-sky-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-sky-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-cyan-100">
              <span>Routes Cleared</span>
              <span>{game.roundsCleared}/{TARGET_ROUNDS}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-cyan-300 transition-all duration-300" style={{ width: `${roundsProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200/25 bg-black/35 p-3 text-xs text-violet-100">
            <p className="font-bold">Next Fragment</p>
            <p className="mt-1 text-sm font-black">{KIND_LABEL[nextKind]}</p>
            <p className="mt-1">Pulse charges: {game.pulseCharges}</p>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-sky-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="echo" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-sky-100">
                Build strong meaning routes by capturing fragments in the required order as they descend through the sky lanes.
              </p>
              <ul className="space-y-1 text-xs text-sky-50">
                <li>Win condition: clear 22 routes before the mission clock expires.</li>
                <li>Fail condition: lose all lives from wrong captures or missed required fragments.</li>
                <li>Controls: Left/Right or A/D to change lane, Space capture, F pulse, P pause.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start Sky Circuit
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-sky-200/25 bg-black/35 p-4">
              <div className="mb-3 rounded-2xl border border-sky-200/25 bg-sky-200/10 p-3 text-xs text-sky-100">
                <p className="font-black uppercase tracking-[0.18em]">Route Pattern</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {game.sequence.map((kind, index) => {
                    const active = index === game.sequenceIndex;
                    return (
                      <span
                        key={`pattern-${kind}-${index}`}
                        className={`rounded-full border px-2 py-1 text-[10px] font-black uppercase ${
                          active
                            ? "border-white/80 bg-white/20 text-white"
                            : "border-sky-200/30 bg-sky-200/10 text-sky-100"
                        }`}
                      >
                        {KIND_LABEL[kind]}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {Array.from({ length: LANES }, (_, lane) => {
                  const laneTokens = game.tokens.filter((token) => token.lane === lane);
                  const selected = lane === game.lane;
                  return (
                    <button
                      key={`lane-${lane}`}
                      type="button"
                      onClick={() => dispatch({ type: "selectLane", lane })}
                      disabled={game.phase !== "playing"}
                      className={`relative h-[300px] rounded-2xl border bg-black/40 p-2 text-left transition ${
                        selected ? "border-white/80 ring-2 ring-sky-200/70" : "border-sky-200/30"
                      }`}
                    >
                      <div className="absolute inset-x-2 bottom-[12%] h-1 rounded-full bg-white/35" />
                      {laneTokens.map((token) => (
                        <div
                          key={`token-${token.id}`}
                          className={`absolute left-1/2 w-[88%] -translate-x-1/2 rounded-lg border px-2 py-1 text-[10px] font-bold ${tokenTone(token.kind)}`}
                          style={{ bottom: `${clamp(token.y, 0, 94)}%` }}
                        >
                          <p className="truncate leading-tight">{token.text}</p>
                          <p className="uppercase opacity-85">{KIND_LABEL[token.kind]}</p>
                        </div>
                      ))}
                      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-sky-200/40 px-2 py-1 text-[10px] font-black uppercase text-sky-100">
                        Lane {lane + 1}
                      </p>
                    </button>
                  );
                })}
              </div>

              {game.phase === "paused" ? (
                <div className="mt-4 rounded-2xl border border-sky-200/35 bg-black/60 px-6 py-4 text-center">
                  <p className="text-sm font-black text-sky-100">Paused</p>
                  <p className="mt-1 text-xs text-sky-50">Press P or tap Resume to continue.</p>
                </div>
              ) : null}

              {game.phase === "complete" ? (
                <div className="mt-4 rounded-2xl border border-sky-200/35 bg-black/60 p-5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-100">
                    {game.outcome === "win" ? "Route Stable" : "Route Lost"}
                  </p>
                  <p className="mt-2 text-xs text-sky-50">
                    Score {game.score} | Routes {game.roundsCleared}/{TARGET_ROUNDS} | Best combo {game.bestCombo}
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
                  onClick={() => dispatch({ type: "capture" })}
                  variant="success"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <Compass className="h-4 w-4" />
                  Capture
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "pulse" })}
                  variant="primary"
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

            <aside className="rounded-3xl border border-sky-200/25 bg-black/35 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-100">Echo Console</p>
                <span className="rounded-full border border-sky-200/35 px-2 py-1 text-[10px] font-bold text-sky-100">
                  L{game.level}
                </span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="echo" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-sky-200/25 bg-sky-200/10 p-2 text-sky-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Radar className="h-3.5 w-3.5" />
                    Current Target
                  </p>
                  <p className="mt-1 text-sm font-black">{KIND_LABEL[nextKind]}</p>
                </div>
                <div className="rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-2 text-cyan-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Compass className="h-3.5 w-3.5" />
                    Active Lane
                  </p>
                  <p className="mt-1 text-sm font-black">{game.lane + 1}</p>
                </div>
                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <WandSparkles className="h-3.5 w-3.5" />
                    Pulse Field
                  </p>
                  <p className="mt-1 text-sm font-black">{game.pulseMs > 0 ? "Active" : "Idle"}</p>
                </div>
                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <TimerReset className="h-3.5 w-3.5" />
                    Mission Clock
                  </p>
                  <p className="mt-1 text-sm font-black">{formatClock(game.remainingMs)}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-sky-200/25 bg-sky-200/10 p-3 text-[11px] text-sky-50">
                <p className="font-bold uppercase tracking-[0.16em] text-sky-100">Keyboard</p>
                <p className="mt-1">A/D or arrows move lane, 1-3 direct lane pick, Space capture, F pulse, P pause.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
