"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, type PointerEvent } from "react";
import { CircuitBoard, PauseCircle, PlayCircle, ShieldAlert, TimerReset, Zap } from "lucide-react";
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
type TokenKind = "seed" | "glitch";

type RuleSpec = {
  id: string;
  label: string;
  description: string;
  test: (value: number) => boolean;
};

type StreamToken = {
  id: number;
  lane: number;
  kind: TokenKind;
  value: number;
  y: number;
  velocity: number;
};

type RuntimeEvent = {
  id: number;
  mood: "thinking" | "happy" | "sad" | "cheering";
  tone: EventTone;
  message: string;
};

type GameState = {
  phase: Phase;
  outcome: Outcome;
  lane: number;
  tokens: StreamToken[];
  score: number;
  lives: number;
  streak: number;
  bestStreak: number;
  remainingMs: number;
  level: number;
  ruleIndex: number;
  ruleHits: number;
  ruleClears: number;
  pulseCharges: number;
  pulseMs: number;
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
  | { type: "move"; lane: number }
  | { type: "shift"; delta: -1 | 1 }
  | { type: "harvest" }
  | { type: "pulse" }
  | { type: "togglePause" };

const LANE_COUNT = 4;
const MISSION_MS = 180_000;
const TICK_MS = 80;
const START_LIVES = 5;
const START_PULSE_CHARGES = 2;
const MAX_PULSE_CHARGES = 3;
const PULSE_DURATION_MS = 2200;
const PULSE_RECHARGE_MS = 42_000;
const MAX_SCORE = 2600;
const HARVEST_WINDOW_MIN = 78;
const HARVEST_WINDOW_MAX = 98;
const TARGET_RULE_CLEARS = 7;

const RULES: RuleSpec[] = [
  {
    id: "even",
    label: "Even Seeds",
    description: "Harvest only even values.",
    test: (value) => value % 2 === 0,
  },
  {
    id: "odd",
    label: "Odd Seeds",
    description: "Harvest only odd values.",
    test: (value) => value % 2 !== 0,
  },
  {
    id: "mul3",
    label: "Multiples of 3",
    description: "Harvest values divisible by 3.",
    test: (value) => value % 3 === 0,
  },
  {
    id: "prime",
    label: "Prime Seeds",
    description: "Harvest only prime values.",
    test: (value) => {
      if (value < 2) return false;
      for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
        if (value % divisor === 0) return false;
      }
      return true;
    },
  },
  {
    id: "high",
    label: "10 or Higher",
    description: "Harvest values at least 10.",
    test: (value) => value >= 10,
  },
  {
    id: "not4",
    label: "Not Divisible by 4",
    description: "Avoid numbers divisible by 4.",
    test: (value) => value % 4 !== 0,
  },
];

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
  return Math.max(290, 810 - level * 75);
}

function ruleQuota(level: number) {
  return level < 3 ? 4 : 5;
}

function nextSeedValue(level: number) {
  const maxValue = 14 + level * 3;
  return 1 + Math.floor(Math.random() * maxValue);
}

function createToken(nextId: number, level: number): StreamToken {
  const glitchChance = Math.min(0.42, 0.12 + (level - 1) * 0.05);
  const isGlitch = Math.random() < glitchChance;

  return {
    id: nextId,
    lane: Math.floor(Math.random() * LANE_COUNT),
    kind: isGlitch ? "glitch" : "seed",
    value: isGlitch ? 0 : nextSeedValue(level),
    y: -10,
    velocity: 1.35 + level * 0.26 + Math.random() * 0.35,
  };
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    lane: Math.floor(LANE_COUNT / 2),
    tokens: [],
    score: 0,
    lives: START_LIVES,
    streak: 0,
    bestStreak: 0,
    remainingMs: MISSION_MS,
    level: 1,
    ruleIndex: 0,
    ruleHits: 0,
    ruleClears: 0,
    pulseCharges: START_PULSE_CHARGES,
    pulseMs: 0,
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
        "Pixel: Route the correct values and clear seven rule cards before mission timeout.",
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
    case "pulse": {
      if (state.phase !== "playing") return state;
      if (state.pulseCharges <= 0 || state.pulseMs > 0) return state;
      const filtered = state.tokens.filter((token) => token.kind !== "glitch");
      const removed = state.tokens.length - filtered.length;
      const nextScore = state.score + removed * 3;
      return withEvent(
        {
          ...state,
          tokens: filtered,
          score: nextScore,
          pulseCharges: state.pulseCharges - 1,
          pulseMs: PULSE_DURATION_MS,
          interactions: state.interactions + 1,
        },
        "good",
        "happy",
        removed > 0
          ? `Pixel: Pulse cleared ${removed} glitch${removed === 1 ? "" : "es"}.`
          : "Pixel: Pulse active. Use the slow-motion window to secure a combo.",
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
          "Pixel: Paused. Resume when you're ready to route again.",
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
          "Pixel: Routing resumed. Watch the current rule and harvest clean values.",
        );
      }
      return state;
    }
    case "harvest": {
      if (state.phase !== "playing") return state;
      const rule = RULES[state.ruleIndex % RULES.length] ?? RULES[0];
      const candidate = state.tokens
        .filter(
          (token) =>
            token.lane === state.lane &&
            token.y >= HARVEST_WINDOW_MIN &&
            token.y <= HARVEST_WINDOW_MAX,
        )
        .sort((a, b) => b.y - a.y)[0];

      if (!candidate) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 5),
            streak: 0,
            interactions: state.interactions + 1,
          },
          "bad",
          "sad",
          "Pixel: Empty grab. Wait for a packet to enter the harvest window.",
        );
      }

      const tokens = state.tokens.filter((token) => token.id !== candidate.id);
      let score = state.score;
      let lives = state.lives;
      let streak = state.streak;
      let bestStreak = state.bestStreak;
      let ruleHits = state.ruleHits;
      let ruleClears = state.ruleClears;
      let ruleIndex = state.ruleIndex;
      let pulseCharges = state.pulseCharges;
      let phase: Phase = state.phase;
      let outcome = state.outcome;
      let tone: EventTone = "good";
      let mood: RuntimeEvent["mood"] = "happy";
      let message = "Pixel: Clean harvest.";

      if (candidate.kind === "glitch") {
        lives = Math.max(0, lives - 1);
        streak = 0;
        score = Math.max(0, score - (11 + state.level));
        tone = "bad";
        mood = "sad";
        message = "Pixel: Glitch packet captured. Integrity shield lost.";
      } else if (rule.test(candidate.value)) {
        const nextStreak = streak + 1;
        streak = nextStreak;
        bestStreak = Math.max(bestStreak, nextStreak);
        score += 12 + state.level * 2 + Math.min(16, nextStreak * 2);
        ruleHits += 1;

        const required = ruleQuota(state.level);
        if (ruleHits >= required) {
          ruleHits = 0;
          ruleClears += 1;
          ruleIndex += 1;
          score += 30 + state.level * 4;
          if (ruleClears % 2 === 0) {
            pulseCharges = Math.min(MAX_PULSE_CHARGES, pulseCharges + 1);
          }
          const nextRule = RULES[ruleIndex % RULES.length] ?? RULES[0];
          mood = "cheering";
          message = `Pixel: Rule card cleared. New target: ${nextRule.label}.`;
        } else {
          message = `Pixel: Valid route. ${ruleHits}/${required} hits on ${rule.label}.`;
        }
      } else {
        lives = Math.max(0, lives - 1);
        streak = 0;
        score = Math.max(0, score - (9 + state.level));
        tone = "bad";
        mood = "sad";
        message = `Pixel: ${candidate.value} breaks ${rule.label}. Route carefully.`;
      }

      if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        tone = "bad";
        mood = "sad";
        message = "Pixel: Shield capacity depleted. Reset and route with cleaner timing.";
      } else if (ruleClears >= TARGET_RULE_CLEARS) {
        phase = "complete";
        outcome = "win";
        tone = "good";
        mood = "cheering";
        message = "Pixel: Seven rule cards cleared. Sprout Trail secured.";
      }

      return withEvent(
        {
          ...state,
          phase,
          outcome,
          tokens: phase === "complete" ? [] : tokens,
          score,
          lives,
          streak,
          bestStreak,
          ruleHits,
          ruleClears,
          ruleIndex,
          pulseCharges,
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
      const rule = RULES[state.ruleIndex % RULES.length] ?? RULES[0];

      const tokens = state.tokens.map((token) => ({
        ...token,
        y: token.y + token.velocity * (state.pulseMs > 0 ? 0.56 : 1),
      }));

      let score = state.score;
      let lives = state.lives;
      let streak = state.streak;
      let spawnBudgetMs = state.spawnBudgetMs + TICK_MS;
      let rechargeBudgetMs = state.rechargeBudgetMs + TICK_MS;
      let pulseCharges = state.pulseCharges;
      const pulseMs = Math.max(0, state.pulseMs - TICK_MS);
      let nextTokenId = state.nextTokenId;
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      while (spawnBudgetMs >= spawnCadenceMs(level)) {
        spawnBudgetMs -= spawnCadenceMs(level);
        tokens.push(createToken(nextTokenId, level));
        nextTokenId += 1;
      }

      if (rechargeBudgetMs >= PULSE_RECHARGE_MS && pulseCharges < MAX_PULSE_CHARGES) {
        pulseCharges += 1;
        rechargeBudgetMs -= PULSE_RECHARGE_MS;
        pendingEvent = {
          tone: "neutral",
          mood: "thinking",
          message: "Pixel: Pulse capacitor recharged.",
        };
      }

      const active: StreamToken[] = [];
      for (const token of tokens) {
        if (token.y <= 104) {
          active.push(token);
          continue;
        }

        if (token.kind === "seed" && rule.test(token.value)) {
          lives = Math.max(0, lives - 1);
          streak = 0;
          score = Math.max(0, score - (7 + level));
          pendingEvent = {
            tone: "bad",
            mood: "sad",
            message: `Pixel: Valid ${token.value} packet escaped the sorter.`,
          };
        }
      }

      let phase: Phase = state.phase;
      let outcome = state.outcome;
      if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "Pixel: Routing shield collapsed. Mission failed.",
        };
      } else if (state.ruleClears >= TARGET_RULE_CLEARS) {
        phase = "complete";
        outcome = "win";
        pendingEvent = {
          tone: "good",
          mood: "cheering",
          message: "Pixel: All required rule cards cleared. Mission complete.",
        };
      } else if (remainingMs <= 0) {
        const won = state.ruleClears >= TARGET_RULE_CLEARS;
        phase = "complete";
        outcome = won ? "win" : "fail";
        pendingEvent = won
          ? {
              tone: "good",
              mood: "cheering",
              message: "Pixel: Timer ended but routing objective is complete.",
            }
          : {
              tone: "bad",
              mood: "sad",
              message: "Pixel: Timer expired before seven rule cards. Try another run.",
            };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        tokens: phase === "complete" ? [] : active,
        score,
        lives,
        streak,
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

export default function Arcade122SproutTrail() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const boardRef = useRef<HTMLDivElement | null>(null);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const lanePercents = useMemo(
    () => Array.from({ length: LANE_COUNT }, (_, lane) => (lane / (LANE_COUNT - 1)) * 100),
    [],
  );
  const activeRule = RULES[game.ruleIndex % RULES.length] ?? RULES[0];
  const requiredHits = ruleQuota(game.level);
  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const ruleProgress = Math.min(100, Math.round((game.ruleHits / requiredHits) * 100));
  const clearsProgress = Math.min(100, Math.round((game.ruleClears / TARGET_RULE_CLEARS) * 100));

  const mascotMood = useMemo(() => {
    if (game.phase === "complete") return game.outcome === "win" ? "cheering" : "sad";
    if (game.phase === "paused") return "thinking";
    if (game.streak >= 4) return "cheering";
    if (game.lives <= 2) return "sad";
    return "happy";
  }, [game.lives, game.outcome, game.phase, game.streak]);

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
      gameId: "arcade-122",
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

      if (event.code === "Space") {
        event.preventDefault();
        dispatch({ type: "harvest" });
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

  const handleBoardPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (game.phase !== "playing") return;
    const bounds = boardRef.current?.getBoundingClientRect();
    if (!bounds || bounds.width <= 0) return;
    const ratio = clamp((event.clientX - bounds.left) / bounds.width, 0, 0.999);
    dispatch({ type: "move", lane: Math.floor(ratio * LANE_COUNT) });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-cyan-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.26),transparent_46%),radial-gradient(circle_at_86%_84%,rgba(14,165,233,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-100">Arcade 122</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Sprout Trail: Logic Router</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-cyan-200/30 bg-black/35 px-3 py-1 text-cyan-100">
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

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-cyan-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-cyan-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-cyan-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>

          <div className="rounded-2xl border border-sky-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-sky-100">
              <span>{activeRule.label}</span>
              <span>
                {game.ruleHits}/{requiredHits}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-sky-300 transition-all duration-300" style={{ width: `${ruleProgress}%` }} />
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-emerald-100">
              <span>Rule Cards Cleared</span>
              <span>
                {game.ruleClears}/{TARGET_RULE_CLEARS}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-emerald-300 transition-all duration-300" style={{ width: `${clearsProgress}%` }} />
            </div>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-cyan-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="pixel" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-cyan-100">
                Route number packets through Pixel&apos;s sorter. Each rule card changes what counts as valid.
                Clear seven cards before the mission clock ends.
              </p>
              <ul className="space-y-1 text-xs text-cyan-50">
                <li>Win condition: clear 7 rule cards by completing each rule quota.</li>
                <li>Fail condition: lose all lives or run out of time before seven clears.</li>
                <li>Controls: Arrow/A-D to move, Space to harvest, F for pulse, P to pause.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start Routing
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-cyan-200/25 bg-black/35 p-4">
              <div
                ref={boardRef}
                onPointerDown={handleBoardPointerDown}
                className="relative h-[22rem] overflow-hidden rounded-2xl border border-cyan-200/20 bg-gradient-to-b from-cyan-400/15 via-slate-900/80 to-slate-950 touch-none"
              >
                {lanePercents.map((left, lane) => (
                  <div
                    key={`lane-${lane}`}
                    className="absolute inset-y-0 w-px bg-cyan-100/15"
                    style={{ left: `${left}%` }}
                  />
                ))}

                <div className="absolute inset-x-0 border-t border-amber-200/60" style={{ top: `${HARVEST_WINDOW_MIN}%` }} />
                <div className="absolute inset-x-0 border-t border-amber-200/60" style={{ top: `${HARVEST_WINDOW_MAX}%` }} />

                {game.tokens.map((token) => {
                  const left = lanePercents[token.lane] ?? 50;
                  if (token.kind === "glitch") {
                    return (
                      <div
                        key={token.id}
                        className="pointer-events-none absolute -translate-x-1/2 rounded-full border border-rose-300/70 bg-rose-400/30 px-2 py-0.5 text-xs font-black text-rose-50"
                        style={{ left: `${left}%`, top: `${token.y}%` }}
                      >
                        ✖
                      </div>
                    );
                  }

                  const match = activeRule.test(token.value);
                  return (
                    <div
                      key={token.id}
                      className={`pointer-events-none absolute -translate-x-1/2 rounded-full border px-2 py-0.5 text-xs font-black ${
                        match
                          ? "border-emerald-300/70 bg-emerald-400/30 text-emerald-50"
                          : "border-slate-300/65 bg-slate-300/30 text-slate-50"
                      }`}
                      style={{ left: `${left}%`, top: `${token.y}%` }}
                    >
                      {token.value}
                    </div>
                  );
                })}

                <div
                  className="pointer-events-none absolute bottom-3 -translate-x-1/2 transition-all duration-150"
                  style={{ left: `${lanePercents[game.lane] ?? 50}%` }}
                >
                  <div className="rounded-xl border border-cyan-200/45 bg-cyan-300/25 px-3 py-1 text-lg shadow-[0_0_16px_rgba(56,189,248,0.45)]">
                    {game.pulseMs > 0 ? "🛡️" : "📡"}
                  </div>
                </div>

                {game.phase === "paused" ? (
                  <div className="absolute inset-0 grid place-items-center bg-black/60">
                    <div className="rounded-2xl border border-cyan-200/35 bg-black/60 px-6 py-4 text-center">
                      <p className="text-sm font-black text-cyan-100">Paused</p>
                      <p className="mt-1 text-xs text-cyan-50">Press P or tap Resume to continue.</p>
                    </div>
                  </div>
                ) : null}

                {game.phase === "complete" ? (
                  <div className="absolute inset-0 grid place-items-center bg-black/65 p-4">
                    <div className="w-full max-w-sm rounded-2xl border border-cyan-200/35 bg-black/60 p-5 text-center">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">
                        {game.outcome === "win" ? "Route Mastered" : "Route Failed"}
                      </p>
                      <p className="mt-2 text-xs text-cyan-50">
                        Score {game.score} | Cards {game.ruleClears}/{TARGET_RULE_CLEARS} | Best combo {game.bestStreak}
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

              <div className="mt-4 grid grid-cols-4 gap-2">
                {lanePercents.map((_, lane) => (
                  <button
                    key={`lane-btn-${lane}`}
                    type="button"
                    disabled={game.phase !== "playing"}
                    onClick={() => dispatch({ type: "move", lane })}
                    className={`rounded-xl border px-2 py-2 text-xs font-black transition ${
                      game.lane === lane
                        ? "border-cyan-200/80 bg-cyan-300/30 text-cyan-50"
                        : "border-cyan-200/30 bg-cyan-100/10 text-cyan-100 hover:bg-cyan-100/20"
                    }`}
                  >
                    Lane {lane + 1}
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
                  ◀ Shift
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "shift", delta: 1 })}
                  variant="secondary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  Shift ▶
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "harvest" })}
                  variant="success"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing"}
                >
                  <CircuitBoard className="h-4 w-4" />
                  Harvest
                </PhysicalButton>
                <PhysicalButton
                  onClick={() => dispatch({ type: "pulse" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.pulseCharges <= 0}
                >
                  <Zap className="h-4 w-4" />
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

            <aside className="rounded-3xl border border-cyan-200/25 bg-black/35 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">Pixel Console</p>
                <span className="rounded-full border border-cyan-200/35 px-2 py-1 text-[10px] font-bold text-cyan-100">
                  L{game.level}
                </span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="pixel" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-2 text-cyan-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <CircuitBoard className="h-3.5 w-3.5" />
                    Active Rule
                  </p>
                  <p className="mt-1 text-sm font-black">{activeRule.label}</p>
                  <p className="mt-1 text-[11px] text-cyan-50">{activeRule.description}</p>
                </div>

                <div className="rounded-xl border border-emerald-200/25 bg-emerald-200/10 p-2 text-emerald-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    Card Objective
                  </p>
                  <p className="mt-1 text-sm font-black">
                    {game.ruleHits}/{requiredHits} valid harvests
                  </p>
                </div>

                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Zap className="h-3.5 w-3.5" />
                    Pulse Status
                  </p>
                  <p className="mt-1 text-sm font-black">
                    {game.pulseCharges} charge{game.pulseCharges === 1 ? "" : "s"}
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

              <div className="mt-4 rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-3 text-[11px] text-cyan-50">
                <p className="font-bold uppercase tracking-[0.16em] text-cyan-100">Keyboard</p>
                <p className="mt-1">`A/D` or arrows move lanes, `Space` harvests, `F` triggers pulse, `P` pauses.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
