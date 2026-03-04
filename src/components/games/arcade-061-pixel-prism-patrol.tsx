"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, Radar } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "secured" | "breached";

type PatrolRound = {
  id: string;
  prompt: string;
  telemetry: [number, number, number, number];
  safeLane: number;
};

const ROUND_COUNT = 16;
const START_SHIELDS = 4;
const MAX_SCANS = 3;

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

function buildRound(roundIndex: number): PatrolRound {
  const random = seeded(`arcade-061:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const safeLane = Math.floor(random() * 4);
  const telemetry: [number, number, number, number] = [0, 0, 0, 0];

  for (let lane = 0; lane < 4; lane += 1) {
    telemetry[lane] = 35 + Math.floor(random() * 48) + tier * 2;
  }
  telemetry[safeLane] = 12 + Math.floor(random() * 22) + tier;

  const prompts = [
    "Mirror shards are converging on the prism vault.",
    "Refracted signal burst detected across patrol lanes.",
    "False-spectrum sweep is flooding control channels.",
    "Prism lattice is jittering under multi-lane pressure.",
    "Cross-talk surge spotted near shield relays.",
  ];

  return {
    id: `a061-r${roundIndex + 1}`,
    prompt: `Wave ${roundIndex + 1}: ${prompts[Math.floor(random() * prompts.length)] ?? prompts[0]}`,
    telemetry,
    safeLane,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

function roundWindowMs(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 4);
  return Math.max(1900, 4700 - (tier - 1) * 600);
}

export default function Arcade061PixelPrismPatrol() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [shields, setShields] = useState(START_SHIELDS);
  const [scans, setScans] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedLane, setSelectedLane] = useState<number | null>(null);
  const [scanReveal, setScanReveal] = useState<boolean>(false);
  const [timeLeftMs, setTimeLeftMs] = useState(roundWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("breached");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 4);
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)),
    [roundIndex],
  );

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "secured" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "secured"
        ? "Pixel: prism patrol stabilized. Great lane discipline."
        : "Pixel: prism shield broke. Recalibrate and patrol again.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-061",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
      score: finalScore,
      maxScore: ROUND_COUNT * 24,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setShields(START_SHIELDS);
    setScans(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedLane(null);
    setScanReveal(false);
    setTimeLeftMs(roundWindowMs(0));
    setOutcome("breached");
    setInteractions(0);
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Pixel: choose the safest lane before shard impact.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerScan = () => {
    if (phase !== "playing" || scans <= 0 || scanReveal || settlingRef.current) return;
    setScans((value) => value - 1);
    setScanReveal(true);
    setInteractions((value) => value + 1);
    setScore((value) => value + 2);
    setMood("thinking");
    setMessage("Pixel: scan pulse confirms the lowest-risk lane.");
    void hapticSelection();
  };

  const resolveLane = (lane: number, timedOut = false) => {
    if (phase !== "playing" || !round || settlingRef.current) return;
    settlingRef.current = true;
    setSelectedLane(lane);
    const nextInteractions = interactions + 1;
    setInteractions(nextInteractions);

    const correct = !timedOut && lane === round.safeLane;
    const nearMiss = !timedOut && Math.abs(lane - round.safeLane) === 1;

    let nextScore = score;
    let nextShields = shields;
    let nextScans = scans;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    const isFinalRound = roundIndex >= ROUND_COUNT - 1;

    if (correct) {
      nextScore += 12 + Math.min(10, nextCombo * 2) + tier;
      if (nextCombo > 0 && nextCombo % 4 === 0) {
        nextScans = clamp(nextScans + 1, 0, MAX_SCANS);
        setMessage("Perfect patrol streak. +1 scan charge.");
      } else {
        setMessage("Lane secured before impact.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextScore = Math.max(0, nextScore - (timedOut ? 8 : nearMiss ? 6 : 9));
      nextShields = Math.max(0, nextShields - 1);
      setMood("sad");
      setMessage(
        timedOut
          ? "Timeout. Shard impact on unprotected lane."
          : `Wrong lane. Safe lane was ${round.safeLane + 1}.`,
      );
      void hapticError();
    }

    setScore(nextScore);
    setShields(nextShields);
    setScans(nextScans);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextShields <= 0) {
        settlingRef.current = false;
        finalize("breached", nextScore, nextInteractions);
        return;
      }
      if (isFinalRound) {
        const finalScore = nextScore + nextShields * 4 + nextBestCombo;
        setScore(finalScore);
        settlingRef.current = false;
        finalize("secured", finalScore, nextInteractions);
        return;
      }

      const nextRound = roundIndex + 1;
      setRoundIndex(nextRound);
      setSelectedLane(null);
      setScanReveal(false);
      setTimeLeftMs(roundWindowMs(nextRound));
      settlingRef.current = false;
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing" || selectedLane !== null || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selectedLane]);

  useEffect(() => {
    if (phase !== "playing" || selectedLane !== null || timeLeftMs > 0) return;
    const timeout = window.setTimeout(() => {
      resolveLane(0, true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [phase, selectedLane, timeLeftMs]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        resolveLane(Number(event.key) - 1);
        return;
      }
      if (lower === "x") {
        event.preventDefault();
        triggerScan();
        return;
      }
      if (lower === "p") {
        event.preventDefault();
        setPhase((value) => (value === "playing" ? "paused" : "playing"));
        return;
      }
      if (lower === "r") {
        event.preventDefault();
        restart();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, resolveLane, restart, triggerScan]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.26),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(14,165,233,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-100">Arcade 061</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Prism Patrol</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-cyan-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Shields {shields}</span>
            <span>Scans {scans}</span>
          </div>
        </div>

        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-cyan-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-cyan-100">Pick the safest lane each wave before timer collapse. Use scan on `X` to reveal risk.</p>
                <PhysicalButton onClick={start} className="h-12 bg-cyan-300 px-8 text-sm font-black text-slate-950">
                  Start Patrol
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-cyan-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200/30 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Wave {roundIndex + 1}/{ROUND_COUNT} | Tier {tier}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200/30 px-3 py-1">
                  {Math.max(0, timeLeftMs / 1000).toFixed(1)}s
                </span>
              </div>
              <p className="text-sm text-cyan-100">{round.prompt}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-4">
                {round.telemetry.map((value, lane) => (
                  <div key={`telemetry-${round.id}-${lane}`} className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 px-3 py-2 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200">Lane {lane + 1}</p>
                    <p className="text-lg font-black text-white">{value}</p>
                    {scanReveal && lane === round.safeLane ? (
                      <p className="text-[10px] font-bold text-emerald-200">Scan safe</p>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[0, 1, 2, 3].map((lane) => (
                  <button
                    key={`lane-${round.id}-${lane}`}
                    type="button"
                    disabled={selectedLane !== null}
                    onClick={() => resolveLane(lane)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selectedLane === lane
                        ? "border-cyan-300/80 bg-cyan-400/20"
                        : "border-cyan-100/25 bg-cyan-100/10 hover:bg-cyan-100/20"
                    }`}
                  >
                    <p className="text-sm font-black text-white">[{lane + 1}] Deploy Shield</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerScan} disabled={scans <= 0 || scanReveal} className="h-10 bg-cyan-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1">
                    <Radar className="h-4 w-4" />
                    Scan Pulse [X]
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-zinc-800 text-xs font-black text-white">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause [P]
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Patrol Paused</h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-cyan-300 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume</span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart [R]</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={outcome === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "secured" ? "Prism Secured" : "Prism Breached"}</h3>
              <p className="mt-2 text-sm text-cyan-100">Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}</p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-cyan-300 px-7 text-sm font-black text-slate-950">Replay Patrol</PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
