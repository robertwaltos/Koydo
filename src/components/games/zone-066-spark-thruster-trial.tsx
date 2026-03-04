"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, Rocket } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "cleared" | "failure";

type TrialRound = {
  id: string;
  targetThrust: number;
  turbulence: number;
  prompt: string;
  options: [number, number, number, number];
};

const ROUND_COUNT = 15;
const START_THRUST = 52;
const START_HULL = 4;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function seeded(seed: string) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) | 0;
  }
  return () => {
    hash = (hash * 1664525 + 1013904223) | 0;
    return ((hash >>> 0) % 10_000) / 10_000;
  };
}

function buildRound(roundIndex: number): TrialRound {
  const rand = seeded(`zone-066:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 5);
  const targetThrust = 34 + Math.floor(rand() * 34);
  const turbulence = 6 + Math.floor(rand() * (7 + tier * 2));
  const base = 4 + tier;
  return {
    id: `z066-r${roundIndex + 1}`,
    targetThrust,
    turbulence,
    prompt: `Trial ${roundIndex + 1}: stabilize thruster output near ${targetThrust}.`,
    options: [-(base + 3), -(base - 1), base - 1, base + 3],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone066SparkThrusterTrial() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [thrust, setThrust] = useState(START_THRUST);
  const [hull, setHull] = useState(START_HULL);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("failure");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 5);
  const tolerance = Math.max(2, 7 - tier);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "cleared" ? "cheering" : "sad");
    setMessage(
      nextResolution === "cleared"
        ? "Spark: thruster trial cleared."
        : "Spark: thruster trial failed. stabilize faster on surge rounds.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-066",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 22,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setThrust(START_THRUST);
    setHull(START_HULL);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("failure");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Spark: tune output each trial and keep error inside tolerance.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const delta = round.options[optionIndex];
    if (typeof delta !== "number") return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const nextThrust = clamp(thrust + round.turbulence + delta, 0, 100);
    const error = Math.abs(nextThrust - round.targetThrust);
    const success = error <= tolerance;
    const severe = error >= tolerance + 8 || nextThrust <= 5 || nextThrust >= 95;
    const nextHull = success ? hull : Math.max(0, hull - (severe ? 2 : 1));
    const nextCombo = success ? combo + 1 : 0;
    const nextScore = success
      ? score + 10 + Math.min(6, nextCombo)
      : Math.max(0, score - (severe ? 8 : 5));

    setThrust(nextThrust);
    setHull(nextHull);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(success ? "happy" : "sad");
    setMessage(success ? "Thruster aligned." : `Error ${error} from target.`);
    if (success) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextHull <= 0) {
        finalize("failure", nextScore);
        return;
      }
      if (finalRound) {
        finalize("cleared", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedIndex(null);
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        choose(Number(event.key) - 1);
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(245,158,11,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(251,191,36,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Zone 066</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Spark Thruster Trial</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hull {hull}/{START_HULL}</span>
          </div>
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-amber-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-amber-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="spark" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-amber-100">Complete 15 thruster stabilization trials with tightening tolerances.</p>
                <PhysicalButton onClick={start} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Start Trial
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-amber-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Rocket className="h-3.5 w-3.5" />
                  Trial {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Tier {tier} | Target {round.targetThrust} | Tol ±{tolerance}
                </span>
              </div>
              <p className="text-sm text-amber-100">{round.prompt}</p>
              <p className="mt-2 text-xs text-amber-200">Current thrust {thrust} | Turbulence +{round.turbulence}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((delta, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-amber-300/80 bg-amber-400/20"
                    : "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20";
                  return (
                    <button key={`${round.id}-${delta}-${optionIndex}`} type="button" disabled={selectedIndex !== null} onClick={() => choose(optionIndex)} className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}>
                      <p className="text-sm font-black text-white"><span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>{delta >= 0 ? "+" : ""}{delta} thrust</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 flex justify-end">
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-amber-300 px-4 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="spark" mood="thinking" size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">Trial Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-amber-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume</span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-amber-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="spark" mood={resolution === "cleared" ? "cheering" : "sad"} size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">{resolution === "cleared" ? "Thruster Trial Cleared" : "Thruster Failure"}</h3>
              <p className="mt-2 text-sm text-amber-100">Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}</p>
              <div className="mt-5"><PhysicalButton onClick={restart} className="h-11 bg-amber-400 px-7 text-sm font-black text-slate-950">Replay Trial</PhysicalButton></div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
