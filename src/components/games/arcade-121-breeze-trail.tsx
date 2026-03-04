"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, type PointerEvent } from "react";
import { Gauge, PauseCircle, PlayCircle, Shield, TimerReset, Wind, Zap } from "lucide-react";
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
type FeedbackTone = "good" | "bad" | "neutral";
type SymbolKind = "sun" | "cloud" | "leaf" | "star";
type WindDirection = -1 | 0 | 1;

type SkyItem = {
  id: number;
  lane: number;
  y: number;
  velocity: number;
  kind: "symbol" | "storm";
  symbol?: SymbolKind;
};

type EventSnapshot = {
  id: number;
  tone: FeedbackTone;
  message: string;
  mood: "thinking" | "happy" | "sad" | "cheering";
};

type GameState = {
  phase: Phase;
  outcome: Outcome;
  lane: number;
  items: SkyItem[];
  score: number;
  lives: number;
  streak: number;
  bestStreak: number;
  burstCharges: number;
  burstMs: number;
  remainingMs: number;
  correctHits: number;
  expectedSymbolIndex: number;
  interactions: number;
  level: number;
  windDirection: WindDirection;
  spawnBudgetMs: number;
  windShiftBudgetMs: number;
  windChangeBudgetMs: number;
  rechargeBudgetMs: number;
  nextItemId: number;
  event: EventSnapshot | null;
  eventCount: number;
};

type Action =
  | { type: "start" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "move"; lane: number }
  | { type: "shift"; delta: -1 | 1 }
  | { type: "burst" }
  | { type: "togglePause" };

const LANE_COUNT = 5;
const MISSION_MS = 180_000;
const TICK_MS = 80;
const PLAYER_COLLISION_Y = 90;
const START_LIVES = 5;
const START_BURST_CHARGES = 2;
const MAX_BURST_CHARGES = 3;
const BURST_DURATION_MS = 2200;
const BURST_RECHARGE_MS = 38_000;
const FINAL_TARGET_HITS = 30;
const MAX_SCORE = 2800;
const STAGE_TARGETS = [10, 20, FINAL_TARGET_HITS] as const;
const SYMBOL_SEQUENCE: SymbolKind[] = ["sun", "cloud", "leaf", "star"];

const SYMBOL_GLYPH: Record<SymbolKind, string> = {
  sun: "☀",
  cloud: "☁",
  leaf: "🍃",
  star: "⭐",
};

const SYMBOL_LABEL: Record<SymbolKind, string> = {
  sun: "Sun",
  cloud: "Cloud",
  leaf: "Leaf",
  star: "Star",
};

const SYMBOL_STYLE: Record<SymbolKind, string> = {
  sun: "border-amber-300/70 bg-amber-300/30 text-amber-50",
  cloud: "border-sky-300/70 bg-sky-300/30 text-sky-50",
  leaf: "border-emerald-300/70 bg-emerald-300/30 text-emerald-50",
  star: "border-violet-300/70 bg-violet-300/30 text-violet-50",
};

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
  return Math.max(280, 760 - level * 60);
}

function windShiftCadenceMs(level: number) {
  return Math.max(920, 2300 - level * 180);
}

function windChangeCadenceMs(level: number) {
  return Math.max(3200, 6800 - level * 320);
}

function stormChance(level: number) {
  return Math.min(0.58, 0.18 + (level - 1) * 0.07);
}

function chooseWindDirection(): WindDirection {
  const roll = Math.random();
  if (roll < 0.3) return 0;
  return roll < 0.65 ? -1 : 1;
}

function pickSymbol(expectedIndex: number): SymbolKind {
  const expected = SYMBOL_SEQUENCE[expectedIndex] ?? SYMBOL_SEQUENCE[0];
  if (Math.random() < 0.45) return expected;
  const alternatives = SYMBOL_SEQUENCE.filter((value) => value !== expected);
  const index = Math.floor(Math.random() * alternatives.length);
  return alternatives[index] ?? expected;
}

function createSkyItem(nextId: number, level: number, expectedIndex: number): SkyItem {
  const lane = Math.floor(Math.random() * LANE_COUNT);
  const velocity = 1.5 + level * 0.34 + Math.random() * 0.45;
  const isStorm = Math.random() < stormChance(level);

  if (isStorm) {
    return {
      id: nextId,
      lane,
      y: -8,
      velocity: velocity + 0.35,
      kind: "storm",
    };
  }

  return {
    id: nextId,
    lane,
    y: -8,
    velocity,
    kind: "symbol",
    symbol: pickSymbol(expectedIndex),
  };
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    lane: Math.floor(LANE_COUNT / 2),
    items: [],
    score: 0,
    lives: START_LIVES,
    streak: 0,
    bestStreak: 0,
    burstCharges: START_BURST_CHARGES,
    burstMs: 0,
    remainingMs: MISSION_MS,
    correctHits: 0,
    expectedSymbolIndex: 0,
    interactions: 0,
    level: 1,
    windDirection: 0,
    spawnBudgetMs: 0,
    windShiftBudgetMs: 0,
    windChangeBudgetMs: 0,
    rechargeBudgetMs: 0,
    nextItemId: 1,
    event: null,
    eventCount,
  };
}

function withEvent(
  state: GameState,
  tone: FeedbackTone,
  mood: EventSnapshot["mood"],
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
        "Echo: Keep the symbol sequence in order while surfing three minutes of crosswinds.",
      );
    }
    case "move": {
      if (state.phase !== "playing") return state;
      const lane = clamp(action.lane, 0, LANE_COUNT - 1);
      if (lane === state.lane) return state;
      return {
        ...state,
        lane,
        interactions: state.interactions + 1,
      };
    }
    case "shift": {
      if (state.phase !== "playing") return state;
      const lane = clamp(state.lane + action.delta, 0, LANE_COUNT - 1);
      if (lane === state.lane) return state;
      return {
        ...state,
        lane,
        interactions: state.interactions + 1,
      };
    }
    case "burst": {
      if (state.phase !== "playing") return state;
      if (state.burstCharges <= 0 || state.burstMs > 0) return state;
      return withEvent(
        {
          ...state,
          burstCharges: state.burstCharges - 1,
          burstMs: BURST_DURATION_MS,
          interactions: state.interactions + 1,
        },
        "good",
        "happy",
        "Echo: Tailwind shield active. Adjacent symbols now count while burst lasts.",
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
          "Echo: Mission paused. Resume when you're ready.",
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
          "Echo: Back online. Follow the wind and keep the sequence clean.",
        );
      }
      return state;
    }
    case "tick": {
      if (state.phase !== "playing") return state;

      const remainingMs = Math.max(0, state.remainingMs - TICK_MS);
      const level = levelFromRemainingMs(remainingMs);
      let lane = state.lane;
      let score = state.score;
      let lives = state.lives;
      let streak = state.streak;
      let bestStreak = state.bestStreak;
      let burstCharges = state.burstCharges;
      const burstMs = Math.max(0, state.burstMs - TICK_MS);
      let correctHits = state.correctHits;
      let expectedSymbolIndex = state.expectedSymbolIndex;
      let windDirection = state.windDirection;
      let spawnBudgetMs = state.spawnBudgetMs + TICK_MS;
      let windShiftBudgetMs = state.windShiftBudgetMs + TICK_MS;
      let windChangeBudgetMs = state.windChangeBudgetMs + TICK_MS;
      let rechargeBudgetMs = state.rechargeBudgetMs + TICK_MS;
      let nextItemId = state.nextItemId;
      const items = state.items.map((item) => ({
        ...item,
        y: item.y + item.velocity + (level - 1) * 0.08,
      }));

      let pendingEvent: Omit<EventSnapshot, "id"> | null = null;

      if (rechargeBudgetMs >= BURST_RECHARGE_MS && burstCharges < MAX_BURST_CHARGES) {
        burstCharges += 1;
        rechargeBudgetMs -= BURST_RECHARGE_MS;
        pendingEvent = {
          tone: "neutral",
          mood: "thinking",
          message: "Echo: A burst charge recharged from thermal currents.",
        };
      }

      if (windChangeBudgetMs >= windChangeCadenceMs(level)) {
        windChangeBudgetMs = 0;
        windDirection = chooseWindDirection();
      }

      if (windShiftBudgetMs >= windShiftCadenceMs(level)) {
        windShiftBudgetMs = 0;
        if (windDirection !== 0 && burstMs <= 0) {
          lane = clamp(lane + windDirection, 0, LANE_COUNT - 1);
        }
      }

      const cadenceMs = spawnCadenceMs(level);
      while (spawnBudgetMs >= cadenceMs) {
        spawnBudgetMs -= cadenceMs;
        items.push(createSkyItem(nextItemId, level, expectedSymbolIndex));
        nextItemId += 1;
      }

      const nextItems: SkyItem[] = [];
      for (const item of items) {
        const captureRadius = burstMs > 0 && item.kind === "symbol" ? 1 : 0;
        const collides =
          item.y >= PLAYER_COLLISION_Y && Math.abs(item.lane - lane) <= captureRadius;

        if (!collides) {
          if (item.y <= 106) {
            nextItems.push(item);
          }
          continue;
        }

        if (item.kind === "storm") {
          if (burstMs > 0) {
            score += 2 + level;
            if (!pendingEvent) {
              pendingEvent = {
                tone: "neutral",
                mood: "happy",
                message: "Tailwind shield neutralized a storm cell.",
              };
            }
          } else {
            lives = Math.max(0, lives - 1);
            streak = 0;
            score = Math.max(0, score - (6 + level));
            pendingEvent = {
              tone: "bad",
              mood: "sad",
              message: "Storm impact. Shift lanes and recover the pattern.",
            };
          }
          continue;
        }

        const expected = SYMBOL_SEQUENCE[expectedSymbolIndex] ?? SYMBOL_SEQUENCE[0];
        if (item.symbol === expected) {
          correctHits += 1;
          expectedSymbolIndex = (expectedSymbolIndex + 1) % SYMBOL_SEQUENCE.length;
          streak += 1;
          bestStreak = Math.max(bestStreak, streak);

          const tempoBonus = Math.floor(remainingMs / 12_000);
          score +=
            10 +
            level * 2 +
            Math.min(16, streak * 2) +
            (burstMs > 0 ? 5 : 0) +
            tempoBonus;

          if (streak > 0 && streak % 6 === 0) {
            burstCharges = Math.min(MAX_BURST_CHARGES, burstCharges + 1);
          }

          const nextNeed = SYMBOL_SEQUENCE[expectedSymbolIndex] ?? SYMBOL_SEQUENCE[0];
          if (!pendingEvent || pendingEvent.tone !== "bad") {
            pendingEvent = {
              tone: "good",
              mood: streak >= 4 ? "cheering" : "happy",
              message: `Sequence locked. Next glyph: ${SYMBOL_LABEL[nextNeed]}.`,
            };
          }
        } else {
          lives = Math.max(0, lives - 1);
          streak = 0;
          score = Math.max(0, score - (5 + level));
          pendingEvent = {
            tone: "bad",
            mood: "sad",
            message: `Wrong glyph. Echo currently needs ${SYMBOL_LABEL[expected]}.`,
          };
        }
      }

      let phase: Phase = state.phase;
      let outcome = state.outcome;
      let resolvedItems = nextItems;

      if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        resolvedItems = [];
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "All gliders lost. Restart the route and stabilize your sequence.",
        };
      } else if (remainingMs <= 0) {
        const won = correctHits >= FINAL_TARGET_HITS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        resolvedItems = [];
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Breeze Trail secured. Echo confirms full route integrity.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Mission timer expired before target lock count. Try a steadier sequence.",
            };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        lane,
        items: resolvedItems,
        score,
        lives,
        streak,
        bestStreak,
        burstCharges,
        burstMs,
        remainingMs,
        correctHits,
        expectedSymbolIndex,
        level,
        windDirection,
        spawnBudgetMs,
        windShiftBudgetMs,
        windChangeBudgetMs,
        rechargeBudgetMs,
        nextItemId,
      };

      if (pendingEvent) {
        const eventId = nextState.eventCount + 1;
        nextState = {
          ...nextState,
          eventCount: eventId,
          event: {
            id: eventId,
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

export default function Arcade121BreezeTrail() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const boardRef = useRef<HTMLDivElement | null>(null);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const lanePercents = useMemo(
    () => Array.from({ length: LANE_COUNT }, (_, lane) => (lane / (LANE_COUNT - 1)) * 100),
    [],
  );

  const elapsedMs = MISSION_MS - game.remainingMs;
  const missionProgress = Math.min(100, Math.round((elapsedMs / MISSION_MS) * 100));
  const stageIndex = Math.min(2, Math.floor(elapsedMs / 60_000));
  const stageTarget = STAGE_TARGETS[stageIndex] ?? FINAL_TARGET_HITS;
  const stageStartTarget = stageIndex === 0 ? 0 : STAGE_TARGETS[stageIndex - 1] ?? 0;
  const stageHits = Math.max(0, game.correctHits - stageStartTarget);
  const stageGoal = Math.max(1, stageTarget - stageStartTarget);
  const stageProgress = Math.min(100, Math.round((stageHits / stageGoal) * 100));
  const neededSymbol = SYMBOL_SEQUENCE[game.expectedSymbolIndex] ?? SYMBOL_SEQUENCE[0];
  const windText =
    game.windDirection === -1 ? "West gust" : game.windDirection === 1 ? "East gust" : "Calm";

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.burstMs > 0) return "cheering";
    if (game.lives <= 2) return "sad";
    if (game.streak >= 4) return "happy";
    return "thinking";
  }, [game.burstMs, game.lives, game.outcome, game.phase, game.streak]);

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
    const currentEvent = game.event;
    if (!currentEvent) return;
    setMood(currentEvent.mood);
    setMessage(currentEvent.message);

    if (currentEvent.tone === "good") {
      void hapticSuccess();
      return;
    }
    if (currentEvent.tone === "bad") {
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
      gameId: "arcade-121",
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

      if (event.code === "Space" || event.key === " ") {
        event.preventDefault();
        dispatch({ type: "burst" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [game.phase, restartRun, startRun]);

  const handleBoardPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (game.phase !== "playing") return;
    const bounds = boardRef.current?.getBoundingClientRect();
    if (!bounds || bounds.width <= 0) return;
    const ratio = clamp((event.clientX - bounds.left) / bounds.width, 0, 0.999);
    const lane = Math.floor(ratio * LANE_COUNT);
    dispatch({ type: "move", lane });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-sky-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(125,211,252,0.22),transparent_48%),radial-gradient(circle_at_84%_82%,rgba(14,165,233,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-100">Arcade 121</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Breeze Trail: Sky Weave Relay</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-sky-200/30 bg-black/35 px-3 py-1 text-sky-100">
              Score {game.score}
            </span>
            <span className="rounded-full border border-emerald-200/30 bg-black/35 px-3 py-1 text-emerald-100">
              Lives {game.lives}
            </span>
            <span className="rounded-full border border-violet-200/30 bg-black/35 px-3 py-1 text-violet-100">
              Combo {game.streak}
            </span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">
              {formatClock(game.remainingMs)}
            </span>
          </div>
        </header>

        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-sky-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-sky-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-sky-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-emerald-100">
              <span>Chapter {stageIndex + 1} Target</span>
              <span>
                {Math.min(stageGoal, stageHits)}/{stageGoal}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-emerald-300 transition-all duration-300" style={{ width: `${stageProgress}%` }} />
            </div>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-sky-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="echo" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-sky-100">
                Crosswinds are scrambling Echo&apos;s sky archive. Move lane-to-lane, catch symbols in the required order, and
                survive a full three-minute relay.
              </p>
              <ul className="space-y-1 text-xs text-sky-50">
                <li>Win condition: finish the 3-minute run with at least 30 correct sequence catches.</li>
                <li>Fail condition: lose all gliders or end below the target catch count.</li>
                <li>Controls: Arrow keys / A-D, tap any lane, Space for burst shield, P to pause.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Launch Relay
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-sky-200/25 bg-black/35 p-4">
              <div
                ref={boardRef}
                onPointerDown={handleBoardPointerDown}
                className="relative h-[22rem] overflow-hidden rounded-2xl border border-sky-200/20 bg-gradient-to-b from-sky-400/15 via-slate-900/80 to-slate-950 touch-none"
              >
                {lanePercents.map((left, lane) => (
                  <div
                    key={`lane-${lane}`}
                    className="absolute inset-y-0 w-px bg-sky-100/15"
                    style={{ left: `${left}%` }}
                  />
                ))}

                {game.items.map((item) => {
                  const left = lanePercents[item.lane] ?? 0;
                  if (item.kind === "storm") {
                    return (
                      <div
                        key={item.id}
                        className="pointer-events-none absolute -translate-x-1/2 rounded-full border border-rose-300/70 bg-rose-400/30 px-2 py-0.5 text-xs font-black text-rose-50"
                        style={{ left: `${left}%`, top: `${item.y}%` }}
                      >
                        ⚡
                      </div>
                    );
                  }

                  const symbol = item.symbol ?? "sun";
                  return (
                    <div
                      key={item.id}
                      className={`pointer-events-none absolute -translate-x-1/2 rounded-full border px-2 py-0.5 text-xs font-black ${SYMBOL_STYLE[symbol]}`}
                      style={{ left: `${left}%`, top: `${item.y}%` }}
                    >
                      {SYMBOL_GLYPH[symbol]}
                    </div>
                  );
                })}

                <div
                  className="pointer-events-none absolute bottom-3 -translate-x-1/2 transition-all duration-150"
                  style={{ left: `${lanePercents[game.lane] ?? 50}%` }}
                >
                  <div className="rounded-xl border border-sky-200/45 bg-sky-300/25 px-3 py-1 text-lg shadow-[0_0_18px_rgba(125,211,252,0.45)]">
                    {game.burstMs > 0 ? "🪁" : "✦"}
                  </div>
                </div>

                {game.phase === "paused" ? (
                  <div className="absolute inset-0 grid place-items-center bg-black/60">
                    <div className="rounded-2xl border border-sky-200/35 bg-black/60 px-6 py-4 text-center">
                      <p className="text-sm font-black text-sky-100">Paused</p>
                      <p className="mt-1 text-xs text-sky-50">Press P or tap Resume to continue.</p>
                    </div>
                  </div>
                ) : null}

                {game.phase === "complete" ? (
                  <div className="absolute inset-0 grid place-items-center bg-black/65 p-4">
                    <div className="w-full max-w-sm rounded-2xl border border-sky-200/35 bg-black/60 p-5 text-center">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-100">
                        {game.outcome === "win" ? "Route Secured" : "Route Lost"}
                      </p>
                      <p className="mt-2 text-xs text-sky-50">
                        Score {game.score} | Correct glyphs {game.correctHits}/{FINAL_TARGET_HITS} | Best combo {game.bestStreak}
                      </p>
                      <div className="mt-4 flex justify-center">
                        <PhysicalButton onClick={restartRun} variant="success" className="h-10 px-6 py-2 text-xs">
                          <PlayCircle className="h-4 w-4" />
                          Replay
                        </PhysicalButton>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {lanePercents.map((_, lane) => (
                  <button
                    key={`lane-btn-${lane}`}
                    type="button"
                    disabled={game.phase !== "playing"}
                    onClick={() => dispatch({ type: "move", lane })}
                    className={`rounded-xl border px-2 py-2 text-xs font-black transition ${
                      game.lane === lane
                        ? "border-sky-200/80 bg-sky-300/30 text-sky-50"
                        : "border-sky-200/30 bg-sky-100/10 text-sky-100 hover:bg-sky-100/20"
                    }`}
                  >
                    L{lane + 1}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <PhysicalButton
                  onClick={() => dispatch({ type: "shift", delta: -1 })}
                  variant="secondary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  ◀ Drift
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "shift", delta: 1 })}
                  variant="secondary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  Drift ▶
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "burst" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.burstCharges <= 0}
                >
                  <Zap className="h-4 w-4" />
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
                <div className="rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-2 text-cyan-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Gauge className="h-3.5 w-3.5" />
                    Needed Next
                  </p>
                  <p className="mt-1 text-sm font-black">
                    {SYMBOL_GLYPH[neededSymbol]} {SYMBOL_LABEL[neededSymbol]}
                  </p>
                </div>

                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Wind className="h-3.5 w-3.5" />
                    Wind Pattern
                  </p>
                  <p className="mt-1 text-sm font-black">{windText}</p>
                </div>

                <div className="rounded-xl border border-emerald-200/25 bg-emerald-200/10 p-2 text-emerald-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Shield className="h-3.5 w-3.5" />
                    Route Lock
                  </p>
                  <p className="mt-1 text-sm font-black">
                    {game.correctHits}/{FINAL_TARGET_HITS} correct catches
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <TimerReset className="h-3.5 w-3.5" />
                    Mission Clock
                  </p>
                  <p className="mt-1 text-sm font-black">{formatClock(game.remainingMs)}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {SYMBOL_SEQUENCE.map((symbol, index) => (
                  <div
                    key={symbol}
                    className={`rounded-xl border px-2 py-2 text-center text-xs font-black ${
                      index === game.expectedSymbolIndex
                        ? "border-sky-200/80 bg-sky-300/30 text-sky-50"
                        : "border-sky-200/30 bg-sky-100/10 text-sky-100"
                    }`}
                  >
                    <p>{SYMBOL_GLYPH[symbol]}</p>
                    <p>{SYMBOL_LABEL[symbol]}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
