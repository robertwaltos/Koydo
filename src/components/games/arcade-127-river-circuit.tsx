"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { Gauge, PauseCircle, PlayCircle, Sigma, TimerReset, WandSparkles } from "lucide-react";
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
type Operation = "inc" | "dec" | "double" | "half";

type Packet = {
  id: number;
  lane: number;
  value: number;
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
  packets: Packet[];
  lane: number;
  targets: [number, number, number];
  score: number;
  lives: number;
  matches: number;
  combo: number;
  bestCombo: number;
  calibrateCharges: number;
  remainingMs: number;
  level: number;
  spawnBudgetMs: number;
  targetBudgetMs: number;
  rechargeBudgetMs: number;
  nextPacketId: number;
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
  | { type: "apply"; operation: Operation }
  | { type: "calibrate" }
  | { type: "togglePause" };

const LANES = 3;
const MISSION_MS = 180_000;
const TICK_MS = 80;
const START_LIVES = 4;
const START_CALIBRATE_CHARGES = 2;
const MAX_CALIBRATE_CHARGES = 3;
const CALIBRATE_RECHARGE_MS = 40_000;
const TARGET_MATCHES = 72;
const MAX_SCORE = 3000;

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

function randomTarget(level: number) {
  const max = 10 + level * 4;
  return 2 + Math.floor(Math.random() * max);
}

function spawnCadenceMs(level: number) {
  return Math.max(320, 880 - level * 85);
}

function targetCadenceMs(level: number) {
  return Math.max(2800, 7000 - level * 520);
}

function packetBaseSpeed(level: number) {
  return 1.25 + level * 0.23;
}

function nextPacketValue(level: number) {
  const max = 10 + level * 4;
  return 1 + Math.floor(Math.random() * max);
}

function createInitialTargets(level: number): [number, number, number] {
  return [randomTarget(level), randomTarget(level), randomTarget(level)];
}

function createPacket(nextId: number, level: number): Packet {
  return {
    id: nextId,
    lane: Math.floor(Math.random() * LANES),
    value: nextPacketValue(level),
    y: -8,
    speed: packetBaseSpeed(level) + Math.random() * 0.35,
  };
}

function applyOperation(value: number, operation: Operation) {
  if (operation === "inc") return clamp(value + 1, 0, 99);
  if (operation === "dec") return clamp(value - 1, 0, 99);
  if (operation === "double") return clamp(value * 2, 0, 99);
  return clamp(Math.floor(value / 2), 0, 99);
}

function operationLabel(operation: Operation) {
  if (operation === "inc") return "+1";
  if (operation === "dec") return "-1";
  if (operation === "double") return "x2";
  return "÷2";
}

function createBaseState(phase: Phase, eventCount = 0): GameState {
  return {
    phase,
    outcome: "fail",
    packets: [],
    lane: 1,
    targets: createInitialTargets(1),
    score: 0,
    lives: START_LIVES,
    matches: 0,
    combo: 0,
    bestCombo: 0,
    calibrateCharges: START_CALIBRATE_CHARGES,
    remainingMs: MISSION_MS,
    level: 1,
    spawnBudgetMs: 0,
    targetBudgetMs: 0,
    rechargeBudgetMs: 0,
    nextPacketId: 1,
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
        "Spark: transform packets so each lane hits its target at the dam.",
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
    case "apply": {
      if (state.phase !== "playing") return state;
      const lanePackets = state.packets
        .filter((packet) => packet.lane === state.lane)
        .sort((a, b) => b.y - a.y);
      const targetPacket = lanePackets[0];
      if (!targetPacket) {
        return withEvent(
          {
            ...state,
            score: Math.max(0, state.score - 3),
            interactions: state.interactions + 1,
          },
          "bad",
          "sad",
          "Spark: no packet in this lane to transform.",
        );
      }

      const target = state.targets[state.lane] ?? 0;
      const beforeDistance = Math.abs((targetPacket.value ?? 0) - target);
      const updatedValue = applyOperation(targetPacket.value, action.operation);
      const afterDistance = Math.abs(updatedValue - target);

      const packets = state.packets.map((packet) =>
        packet.id === targetPacket.id ? { ...packet, value: updatedValue } : packet,
      );
      const improved = afterDistance < beforeDistance;
      const score = state.score + (improved ? 6 : -4);
      const combo = improved ? state.combo + 1 : 0;
      const bestCombo = Math.max(state.bestCombo, combo);

      return withEvent(
        {
          ...state,
          packets,
          score: Math.max(0, score),
          combo,
          bestCombo,
          interactions: state.interactions + 1,
        },
        improved ? "good" : "bad",
        improved ? (combo >= 4 ? "cheering" : "happy") : "sad",
        improved
          ? `Spark: ${operationLabel(action.operation)} moved packet closer to ${target}.`
          : `Spark: ${operationLabel(action.operation)} increased error on lane ${state.lane + 1}.`,
      );
    }
    case "calibrate": {
      if (state.phase !== "playing") return state;
      if (state.calibrateCharges <= 0) return state;
      const lanePackets = state.packets
        .filter((packet) => packet.lane === state.lane)
        .sort((a, b) => b.y - a.y);
      const targetPacket = lanePackets[0];
      if (!targetPacket) {
        return withEvent(
          state,
          "bad",
          "sad",
          "Spark: no packet available for calibration.",
        );
      }
      const target = state.targets[state.lane] ?? 0;
      const packets = state.packets.map((packet) =>
        packet.id === targetPacket.id ? { ...packet, value: target } : packet,
      );

      return withEvent(
        {
          ...state,
          packets,
          calibrateCharges: state.calibrateCharges - 1,
          score: state.score + 10,
          interactions: state.interactions + 1,
        },
        "good",
        "happy",
        "Spark: calibration pulse snapped packet exactly to lane target.",
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
          "Spark: relay paused.",
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
          "Spark: relay resumed.",
        );
      }
      return state;
    }
    case "tick": {
      if (state.phase !== "playing") return state;

      const remainingMs = Math.max(0, state.remainingMs - TICK_MS);
      const level = levelFromRemainingMs(remainingMs);
      let spawnBudgetMs = state.spawnBudgetMs + TICK_MS;
      let targetBudgetMs = state.targetBudgetMs + TICK_MS;
      let rechargeBudgetMs = state.rechargeBudgetMs + TICK_MS;
      let nextPacketId = state.nextPacketId;
      let calibrateCharges = state.calibrateCharges;
      let score = state.score;
      let lives = state.lives;
      let matches = state.matches;
      let combo = state.combo;
      let bestCombo = state.bestCombo;
      let targets = state.targets;

      const packets = state.packets.map((packet) => ({
        ...packet,
        y: packet.y + packet.speed + (level - 1) * 0.08,
      }));

      while (spawnBudgetMs >= spawnCadenceMs(level)) {
        spawnBudgetMs -= spawnCadenceMs(level);
        packets.push(createPacket(nextPacketId, level));
        nextPacketId += 1;
      }

      if (targetBudgetMs >= targetCadenceMs(level)) {
        targetBudgetMs = 0;
        targets = createInitialTargets(level);
      }

      if (rechargeBudgetMs >= CALIBRATE_RECHARGE_MS && calibrateCharges < MAX_CALIBRATE_CHARGES) {
        calibrateCharges += 1;
        rechargeBudgetMs -= CALIBRATE_RECHARGE_MS;
      }

      const active: Packet[] = [];
      for (const packet of packets) {
        if (packet.y <= 102) {
          active.push(packet);
          continue;
        }
        const target = targets[packet.lane] ?? 0;
        if (packet.value === target) {
          matches += 1;
          combo += 1;
          bestCombo = Math.max(bestCombo, combo);
          score += 16 + level * 2 + Math.min(18, combo * 2);
        } else {
          lives = Math.max(0, lives - 1);
          combo = 0;
          score = Math.max(0, score - (10 + level));
        }
      }

      let phase = state.phase;
      let outcome = state.outcome;
      let pendingEvent: Omit<RuntimeEvent, "id"> | null = null;

      if (matches >= TARGET_MATCHES) {
        phase = "complete";
        outcome = "win";
        pendingEvent = {
          tone: "good",
          mood: "cheering",
          message: "Spark: target match count reached. River Circuit synchronized.",
        };
      } else if (lives <= 0) {
        phase = "complete";
        outcome = "fail";
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "Spark: dam integrity lost after repeated mismatches.",
        };
      } else if (remainingMs <= 0) {
        phase = "complete";
        outcome = "fail";
        pendingEvent = {
          tone: "bad",
          mood: "sad",
          message: "Spark: timer expired before target match count.",
        };
      }

      let nextState: GameState = {
        ...state,
        phase,
        outcome,
        packets: phase === "complete" ? [] : active,
        targets,
        score,
        lives,
        matches,
        combo,
        bestCombo,
        calibrateCharges,
        remainingMs,
        level,
        spawnBudgetMs,
        targetBudgetMs,
        rechargeBudgetMs,
        nextPacketId,
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


export default function Arcade127RiverCircuit() {
  const { setMessage, setMood } = useMascot();
  const [game, dispatch] = useReducer(reduceGame, undefined, () => createBaseState("ready"));
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const missionProgress = Math.min(100, Math.round(((MISSION_MS - game.remainingMs) / MISSION_MS) * 100));
  const matchProgress = Math.min(100, Math.round((game.matches / TARGET_MATCHES) * 100));

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
      gameId: "arcade-127",
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
      if (key === "q") {
        event.preventDefault();
        dispatch({ type: "apply", operation: "inc" });
        return;
      }
      if (key === "w") {
        event.preventDefault();
        dispatch({ type: "apply", operation: "dec" });
        return;
      }
      if (key === "e") {
        event.preventDefault();
        dispatch({ type: "apply", operation: "double" });
        return;
      }
      if (key === "r") {
        event.preventDefault();
        dispatch({ type: "apply", operation: "half" });
        return;
      }
      if (key === "c") {
        event.preventDefault();
        dispatch({ type: "calibrate" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [game.phase, restartRun, startRun]);

  const operations: Array<{ op: Operation; label: string }> = [
    { op: "inc", label: "+1" },
    { op: "dec", label: "-1" },
    { op: "double", label: "x2" },
    { op: "half", label: "/2" },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-teal-200/20 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.24),transparent_46%),radial-gradient(circle_at_84%_82%,rgba(20,184,166,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-100">Arcade 127</p>
            <h2 className="text-3xl font-black tracking-tight text-white">River Circuit: Delta Calibrator</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full border border-teal-200/30 bg-black/35 px-3 py-1 text-teal-100">Score {game.score}</span>
            <span className="rounded-full border border-rose-200/30 bg-black/35 px-3 py-1 text-rose-100">Lives {game.lives}</span>
            <span className="rounded-full border border-violet-200/30 bg-black/35 px-3 py-1 text-violet-100">Combo {game.combo}</span>
            <span className="rounded-full border border-amber-200/30 bg-black/35 px-3 py-1 text-amber-100">{formatClock(game.remainingMs)}</span>
          </div>
        </header>

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-teal-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-teal-100">
              <span>Mission Progress</span>
              <span>{missionProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-teal-300 transition-all duration-300" style={{ width: `${missionProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-200/25 bg-black/35 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-cyan-100">
              <span>Target Matches</span>
              <span>{game.matches}/{TARGET_MATCHES}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-cyan-300 transition-all duration-300" style={{ width: `${matchProgress}%` }} />
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200/25 bg-black/35 p-3 text-xs text-violet-100">
            <p className="font-bold">Calibration</p>
            <p className="mt-1 text-sm font-black">Charges: {game.calibrateCharges}</p>
            <p className="mt-1">Best combo: {game.bestCombo}</p>
          </div>
        </div>

        {game.phase === "ready" ? (
          <section className="rounded-3xl border border-teal-200/30 bg-black/40 p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <MascotFriend id="spark" mood="thinking" size="lg" />
              <p className="max-w-3xl text-sm text-teal-100">
                Numeric packets flow down three channels. Transform each packet so it exactly matches its lane target before it hits the dam.
              </p>
              <ul className="space-y-1 text-xs text-teal-50">
                <li>Win condition: reach 72 exact matches.</li>
                <li>Fail condition: lose all lives from mismatched packets or timer expiry.</li>
                <li>Controls: A/D or arrows switch lane, Q/W/E/R apply operations, C calibrates, P pauses.</li>
              </ul>
              <PhysicalButton onClick={startRun} variant="success" className="h-11 px-8 py-2 text-sm">
                <PlayCircle className="h-4 w-4" />
                Start River Circuit
              </PhysicalButton>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="rounded-3xl border border-teal-200/25 bg-black/35 p-4">
              <div className="mb-3 grid grid-cols-3 gap-2">
                {game.targets.map((target, lane) => {
                  const active = lane === game.lane;
                  return (
                    <button
                      key={`target-${lane}`}
                      type="button"
                      onClick={() => dispatch({ type: "selectLane", lane })}
                      disabled={game.phase !== "playing"}
                      className={`rounded-xl border p-2 text-left text-xs ${
                        active
                          ? "border-white/80 bg-white/15 text-white"
                          : "border-teal-200/30 bg-teal-200/10 text-teal-100"
                      }`}
                    >
                      <p className="font-black uppercase">Lane {lane + 1}</p>
                      <p className="mt-1 text-lg font-black">Target {target}</p>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {Array.from({ length: LANES }, (_, lane) => {
                  const lanePackets = game.packets.filter((packet) => packet.lane === lane);
                  const selected = lane === game.lane;
                  return (
                    <button
                      key={`lane-${lane}`}
                      type="button"
                      onClick={() => dispatch({ type: "selectLane", lane })}
                      disabled={game.phase !== "playing"}
                      className={`relative h-[300px] rounded-2xl border bg-black/40 p-2 text-left transition ${
                        selected ? "border-white/80 ring-2 ring-teal-200/70" : "border-teal-200/30"
                      }`}
                    >
                      <div className="absolute inset-x-2 bottom-[12%] h-1 rounded-full bg-white/35" />
                      {lanePackets.map((packet) => (
                        <div
                          key={`packet-${packet.id}`}
                          className="absolute left-1/2 w-[82%] -translate-x-1/2 rounded-lg border border-cyan-300/70 bg-cyan-400/20 px-2 py-1 text-center text-xs font-black text-cyan-50"
                          style={{ bottom: `${clamp(packet.y, 0, 94)}%` }}
                        >
                          {packet.value}
                        </div>
                      ))}
                      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-teal-200/40 px-2 py-1 text-[10px] font-black uppercase text-teal-100">
                        Lane {lane + 1}
                      </p>
                    </button>
                  );
                })}
              </div>

              {game.phase === "paused" ? (
                <div className="mt-4 rounded-2xl border border-teal-200/35 bg-black/60 px-6 py-4 text-center">
                  <p className="text-sm font-black text-teal-100">Paused</p>
                  <p className="mt-1 text-xs text-teal-50">Press P or tap Resume to continue.</p>
                </div>
              ) : null}

              {game.phase === "complete" ? (
                <div className="mt-4 rounded-2xl border border-teal-200/35 bg-black/60 p-5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-100">
                    {game.outcome === "win" ? "Delta Synced" : "Dam Breached"}
                  </p>
                  <p className="mt-2 text-xs text-teal-50">
                    Score {game.score} | Matches {game.matches}/{TARGET_MATCHES} | Best combo {game.bestCombo}
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
                {operations.map((entry) => (
                  <PhysicalButton
                    key={entry.op}
                    onClick={() => dispatch({ type: "apply", operation: entry.op })}
                    variant="success"
                    className="h-10 px-3 py-2 text-xs"
                    disabled={game.phase !== "playing"}
                  >
                    <Sigma className="h-4 w-4" />
                    {entry.label}
                  </PhysicalButton>
                ))}
                <PhysicalButton
                  onClick={() => dispatch({ type: "calibrate" })}
                  variant="primary"
                  className="h-10 px-4 py-2 text-xs"
                  disabled={game.phase !== "playing" || game.calibrateCharges <= 0}
                >
                  <WandSparkles className="h-4 w-4" />
                  Calibrate ({game.calibrateCharges})
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

            <aside className="rounded-3xl border border-teal-200/25 bg-black/35 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-100">Spark Console</p>
                <span className="rounded-full border border-teal-200/35 px-2 py-1 text-[10px] font-bold text-teal-100">L{game.level}</span>
              </div>

              <div className="mt-3 flex justify-center">
                <MascotFriend id="spark" mood={mascotMood} size="md" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-xl border border-teal-200/25 bg-teal-200/10 p-2 text-teal-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Gauge className="h-3.5 w-3.5" />
                    Active Lane
                  </p>
                  <p className="mt-1 text-sm font-black">{game.lane + 1}</p>
                </div>
                <div className="rounded-xl border border-cyan-200/25 bg-cyan-200/10 p-2 text-cyan-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <Sigma className="h-3.5 w-3.5" />
                    Matches
                  </p>
                  <p className="mt-1 text-sm font-black">{game.matches}/{TARGET_MATCHES}</p>
                </div>
                <div className="rounded-xl border border-violet-200/25 bg-violet-200/10 p-2 text-violet-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <WandSparkles className="h-3.5 w-3.5" />
                    Calibrate Charges
                  </p>
                  <p className="mt-1 text-sm font-black">{game.calibrateCharges}</p>
                </div>
                <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 p-2 text-amber-100">
                  <p className="inline-flex items-center gap-2 font-bold">
                    <TimerReset className="h-3.5 w-3.5" />
                    Mission Clock
                  </p>
                  <p className="mt-1 text-sm font-black">{formatClock(game.remainingMs)}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-teal-200/25 bg-teal-200/10 p-3 text-[11px] text-teal-50">
                <p className="font-bold uppercase tracking-[0.16em] text-teal-100">Keyboard</p>
                <p className="mt-1">A/D or arrows shift lane, 1-3 lane select, Q/W/E/R operations, C calibrate, P pause.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
