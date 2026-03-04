"use client";

import { useCallback, useMemo, useRef, useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Gauge, RotateCcw } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Label = "plant" | "animal" | "machine";
type Phase = "briefing" | "playing" | "won" | "lost";

type Sample = {
  chlorophyll: number;
  mobility: number;
  metallic: number;
  label: Label;
};

const LABELS: Array<{ id: Label; text: string }> = [
  { id: "plant", text: "Plant" },
  { id: "animal", text: "Animal" },
  { id: "machine", text: "Machine" },
];

const MAX_ROUNDS = 12;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function jitter(amount: number) {
  return Math.floor((Math.random() * 2 - 1) * amount);
}

function buildSample(round: number): Sample {
  const labelCycle: Label[] = ["plant", "animal", "machine"];
  const label = labelCycle[(round - 1) % labelCycle.length];
  const difficulty = Math.min(28, 10 + Math.floor(round / 3) * 4);

  if (label === "plant") {
    return {
      label,
      chlorophyll: clamp(78 + jitter(difficulty), 0, 100),
      mobility: clamp(24 + jitter(difficulty), 0, 100),
      metallic: clamp(16 + jitter(difficulty), 0, 100),
    };
  }

  if (label === "animal") {
    return {
      label,
      chlorophyll: clamp(28 + jitter(difficulty), 0, 100),
      mobility: clamp(76 + jitter(difficulty), 0, 100),
      metallic: clamp(22 + jitter(difficulty), 0, 100),
    };
  }

  return {
    label,
    chlorophyll: clamp(12 + jitter(difficulty), 0, 100),
    mobility: clamp(42 + jitter(difficulty), 0, 100),
    metallic: clamp(82 + jitter(difficulty), 0, 100),
  };
}

function featureHint(sample: Sample) {
  const dominant = Math.max(sample.chlorophyll, sample.mobility, sample.metallic);
  if (dominant === sample.chlorophyll) return "Dominant chlorophyll signature.";
  if (dominant === sample.mobility) return "Dominant mobility signature.";
  return "Dominant metallic signature.";
}

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

export default function NeuralNet() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("briefing");
  const [round, setRound] = useState(1);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [sample, setSample] = useState<Sample>(() => buildSample(1));
  const [feedback, setFeedback] = useState<string>("Classify the specimen to train your model.");
  const sessionIdRef = useRef<string>(createLegacySessionId());
  const runStartedAtRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);
  const completionEmittedRef = useRef<boolean>(false);

  const progress = useMemo(() => Math.round(((round - 1) / MAX_ROUNDS) * 100), [round]);

  const resetRunTracking = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    runStartedAtRef.current = getTimestampMs();
    interactionCountRef.current = 0;
    completionEmittedRef.current = false;
  }, []);

  const reset = () => {
    resetRunTracking();
    setPhase("briefing");
    setRound(1);
    setLives(3);
    setScore(0);
    setStreak(0);
    setSample(buildSample(1));
    setFeedback("Classify the specimen to train your model.");
  };

  const start = () => {
    resetRunTracking();
    setPhase("playing");
    setMood("thinking");
    setMessage("Model training online. Read each signal profile and classify it.");
    void hapticSelection();
  };

  const classify = (guess: Label) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;

    const correct = guess === sample.label;
    if (correct) {
      const nextStreak = streak + 1;
      const awarded = 8 + nextStreak * 2;
      setScore((value) => value + awarded);
      setStreak(nextStreak);
      setFeedback(`Correct. +${awarded} points.`);
      setMood("happy");
      void hapticSuccess();
    } else {
      const nextLives = lives - 1;
      setLives(nextLives);
      setStreak(0);
      setFeedback(`Incorrect. Expected ${sample.label}.`);
      setMood("sad");
      void hapticError();

      if (nextLives <= 0) {
        if (!completionEmittedRef.current) {
          completionEmittedRef.current = true;
          emitLegacyGameComplete({
            sessionId: sessionIdRef.current,
            gameId: "neural-net",
            elapsedMs: getElapsedMs(runStartedAtRef.current),
            interactions: Math.max(1, interactionCountRef.current),
            score,
            maxScore: 3500,
            source: "component",
            occurredAt: new Date().toISOString(),
          });
        }
        setPhase("lost");
        setMessage("Training run failed. Model confidence collapsed.");
        return;
      }
    }

    const nextRound = round + 1;
    if (nextRound > MAX_ROUNDS) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "neural-net",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 3500,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("won");
      setMessage("Training complete. Classifier reached deployment grade.");
      return;
    }

    setRound(nextRound);
    setSample(buildSample(nextRound));
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2)_0%,transparent_60%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300/80">Neural Net</p>
            <h2 className="text-2xl font-black tracking-tight">Signal Classification Lab</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
            Round {Math.min(round, MAX_ROUNDS)}/{MAX_ROUNDS}
          </div>
        </div>

        <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-cyan-400"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <StatCard icon={Gauge} label="Score" value={score.toString()} />
          <StatCard icon={Brain} label="Lives" value={lives.toString()} />
          <StatCard icon={Cpu} label="Streak" value={streak.toString()} />
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-400">Input Vector</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <SignalGauge label="Chlorophyll" value={sample.chlorophyll} colorClass="bg-lime-400" />
            <SignalGauge label="Mobility" value={sample.mobility} colorClass="bg-sky-400" />
            <SignalGauge label="Metallic" value={sample.metallic} colorClass="bg-amber-400" />
          </div>
          <p className="mt-4 text-sm text-zinc-300">{featureHint(sample)}</p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {LABELS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => classify(option.id)}
              disabled={phase !== "playing"}
              className="rounded-2xl border border-cyan-300/25 bg-cyan-500/10 px-4 py-3 font-black text-cyan-100 transition hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {option.text}
            </button>
          ))}
        </div>

        <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">{feedback}</p>
      </div>

      <AnimatePresence>
        {phase === "briefing" ? (
          <Overlay
            title="Training Brief"
            description="Classify 12 samples with at most 3 mistakes. Feature overlap increases every few rounds."
            actionLabel="Start Training"
            onAction={start}
          />
        ) : null}

        {phase === "won" || phase === "lost" ? (
          <Overlay
            title={phase === "won" ? "Model Ready" : "Training Failed"}
            description={`Final score ${score}. Run another session to improve classifier consistency.`}
            actionLabel="Restart"
            onAction={reset}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <p className="mb-1 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
        <Icon className="h-4 w-4 text-cyan-300" />
        {label}
      </p>
      <p className="text-2xl font-black text-cyan-200">{value}</p>
    </div>
  );
}

function SignalGauge({
  label,
  value,
  colorClass,
}: {
  label: string;
  value: number;
  colorClass: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-bold text-zinc-300">{label}</span>
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

function Overlay({
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
      className="absolute inset-0 z-20 flex items-center justify-center bg-zinc-950/92 p-6 text-center"
    >
      <div className="max-w-lg space-y-4">
        <h3 className="text-4xl font-black text-cyan-300">{title}</h3>
        <p className="text-sm text-zinc-300">{description}</p>
        <PhysicalButton
          onClick={onAction}
          className="h-12 rounded-2xl border border-cyan-300/30 bg-cyan-500/20 px-8 font-black text-cyan-100"
        >
          <span className="inline-flex items-center gap-2">
            <RotateCcw className="h-4 w-4" /> {actionLabel}
          </span>
        </PhysicalButton>
      </div>
    </motion.div>
  );
}
