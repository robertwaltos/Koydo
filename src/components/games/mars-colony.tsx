"use client";

import { useCallback, useMemo, useRef, useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BatteryCharging, Droplets, Leaf, RefreshCw, ShieldCheck, Smile, Wind } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type ResourceKey = "oxygen" | "water" | "food" | "power" | "morale";
type Phase = "briefing" | "playing" | "won" | "lost";

type ColonyState = Record<ResourceKey, number>;
type ActionEffect = Partial<Record<ResourceKey, number>>;

type ActionDefinition = {
  id: string;
  label: string;
  note: string;
  effect: ActionEffect;
};

const MAX_SOLS = 12;

const ACTIONS: ActionDefinition[] = [
  {
    id: "mine-ice",
    label: "Mine Ice",
    note: "Large water gain, medium power cost.",
    effect: { water: 20, power: -10, morale: -2 },
  },
  {
    id: "repair-solar",
    label: "Repair Solar",
    note: "Recovers power but consumes supplies.",
    effect: { power: 22, water: -4, oxygen: -3 },
  },
  {
    id: "grow-food",
    label: "Grow Food",
    note: "Converts power and water into food.",
    effect: { food: 18, water: -8, power: -7, morale: 2 },
  },
  {
    id: "recycle-air",
    label: "Recycle Air",
    note: "Critical oxygen restore cycle.",
    effect: { oxygen: 16, power: -8, water: -3 },
  },
  {
    id: "community-night",
    label: "Community Night",
    note: "Boosts morale with light resource drain.",
    effect: { morale: 15, food: -6, power: -4 },
  },
];

const BASE_DRAIN: ColonyState = {
  oxygen: -8,
  water: -6,
  food: -5,
  power: -4,
  morale: -2,
};

const STARTING_STATE: ColonyState = {
  oxygen: 66,
  water: 62,
  food: 58,
  power: 64,
  morale: 60,
};

const SOL_EVENTS: Array<{ label: string; effect: ActionEffect }> = [
  { label: "Dust front reduced solar intake.", effect: { power: -8 } },
  { label: "Ice pocket found near habitat.", effect: { water: 10 } },
  { label: "Greenhouse fungal bloom.", effect: { food: -6, morale: -2 } },
  { label: "Crew engineering breakthrough.", effect: { power: 8, morale: 4 } },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function applyEffect(state: ColonyState, effect: ActionEffect) {
  return {
    oxygen: clamp(state.oxygen + (effect.oxygen ?? 0), 0, 100),
    water: clamp(state.water + (effect.water ?? 0), 0, 100),
    food: clamp(state.food + (effect.food ?? 0), 0, 100),
    power: clamp(state.power + (effect.power ?? 0), 0, 100),
    morale: clamp(state.morale + (effect.morale ?? 0), 0, 100),
  };
}

function formatDelta(value: number) {
  return `${value > 0 ? "+" : ""}${value}`;
}

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

export default function MarsColony() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("briefing");
  const [sol, setSol] = useState(1);
  const [state, setState] = useState<ColonyState>(STARTING_STATE);
  const [history, setHistory] = useState<string[]>([]);
  const sessionIdRef = useRef<string>(createLegacySessionId());
  const runStartedAtRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);
  const completionEmittedRef = useRef<boolean>(false);

  const score = useMemo(
    () => Math.round((state.oxygen + state.water + state.food + state.power + state.morale) / 5 + sol * 4),
    [sol, state],
  );

  const resetRunTracking = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    runStartedAtRef.current = getTimestampMs();
    interactionCountRef.current = 0;
    completionEmittedRef.current = false;
  }, []);

  const startCampaign = () => {
    resetRunTracking();
    setPhase("playing");
    setMood("thinking");
    setMessage("Mars campaign active. Keep the colony stable for twelve sols.");
    void hapticSelection();
  };

  const reset = () => {
    resetRunTracking();
    setPhase("briefing");
    setSol(1);
    setState(STARTING_STATE);
    setHistory([]);
  };

  const processTurn = (action: ActionDefinition) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;

    let nextState = applyEffect(state, action.effect);
    nextState = applyEffect(nextState, BASE_DRAIN);
    nextState = applyEffect(nextState, { oxygen: -(sol >= 8 ? 2 : 0) });

    const event = SOL_EVENTS[(sol - 1) % SOL_EVENTS.length];
    nextState = applyEffect(nextState, event.effect);

    const nextSol = sol + 1;
    const resources = Object.values(nextState);
    const collapsed = resources.some((value) => value <= 0);

    setState(nextState);
    setSol(nextSol);
    setHistory((previous) =>
      [`Sol ${sol}: ${action.label} -> ${event.label}`, ...previous].slice(0, 6),
    );

    if (collapsed) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "mars-colony",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 4200,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("lost");
      setMood("sad");
      setMessage("Colony systems collapsed. Stabilize priorities and try again.");
      void hapticError();
      return;
    }

    if (nextSol > MAX_SOLS) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "mars-colony",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 4200,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("won");
      setMood("cheering");
      setMessage("Colony stabilized through the full mission window. Excellent leadership.");
      void hapticSuccess();
      return;
    }

    setMood("happy");
    setMessage(
      `Action ${action.label} applied. ${event.label} O2 ${formatDelta(nextState.oxygen - state.oxygen)} this turn.`,
    );
    void hapticSelection();
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#1a120f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.2)_0%,transparent_60%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300/80">Mars Colony</p>
            <h2 className="text-2xl font-black tracking-tight">Survival Operations</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
            Sol {Math.min(sol, MAX_SOLS)}/{MAX_SOLS}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-3 rounded-3xl border border-white/10 bg-black/25 p-4">
            <ResourceBar icon={Wind} label="Oxygen" value={state.oxygen} colorClass="bg-cyan-400" />
            <ResourceBar icon={Droplets} label="Water" value={state.water} colorClass="bg-sky-400" />
            <ResourceBar icon={Leaf} label="Food" value={state.food} colorClass="bg-lime-400" />
            <ResourceBar icon={BatteryCharging} label="Power" value={state.power} colorClass="bg-amber-400" />
            <ResourceBar icon={Smile} label="Morale" value={state.morale} colorClass="bg-rose-400" />

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
              Mission score: <span className="font-black text-orange-300">{score}</span>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-white/10 bg-black/25 p-4">
            {ACTIONS.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={() => processTurn(action)}
                disabled={phase !== "playing"}
                className="w-full rounded-2xl border border-orange-300/20 bg-orange-500/10 px-4 py-3 text-left transition hover:bg-orange-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <p className="text-sm font-black text-orange-200">{action.label}</p>
                <p className="text-xs text-zinc-300">{action.note}</p>
              </button>
            ))}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Recent Log</p>
              <div className="space-y-1 text-xs text-zinc-300">
                {history.length === 0 ? <p>No turns yet.</p> : null}
                {history.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {phase === "briefing" ? (
          <OverlayCard
            title="Mission Briefing"
            description="Maintain oxygen, water, food, power, and morale through 12 sols. If any resource reaches zero, the colony fails."
            actionLabel="Start Campaign"
            onAction={startCampaign}
          />
        ) : null}

        {phase === "won" || phase === "lost" ? (
          <OverlayCard
            title={phase === "won" ? "Colony Stable" : "Colony Lost"}
            description={`Final score ${score}. Run another campaign to test a different survival strategy.`}
            actionLabel="Restart"
            onAction={reset}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ResourceBar({
  icon: Icon,
  label,
  value,
  colorClass,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: number;
  colorClass: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-2 font-bold text-zinc-200">
          <Icon className="h-4 w-4 text-orange-300" />
          {label}
        </span>
        <span className="font-black text-zinc-100">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={`h-full rounded-full ${colorClass}`}
          animate={{ width: `${value}%` }}
          transition={{ type: "spring", stiffness: 110, damping: 20 }}
        />
      </div>
    </div>
  );
}

function OverlayCard({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 flex items-center justify-center bg-[#0f0907]/90 p-6 text-center"
    >
      <div className="max-w-xl space-y-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-300/30 bg-orange-500/15">
          <ShieldCheck className="h-8 w-8 text-orange-300" />
        </div>
        <h3 className="text-4xl font-black tracking-tight text-orange-300">{title}</h3>
        <p className="text-sm text-zinc-300">{description}</p>
        <PhysicalButton
          onClick={onAction}
          className="h-12 rounded-2xl border border-orange-300/30 bg-orange-500/20 px-8 font-black text-orange-100"
        >
          <span className="inline-flex items-center gap-2">
            <RefreshCw className="h-4 w-4" /> {actionLabel}
          </span>
        </PhysicalButton>
      </div>
    </motion.div>
  );
}
