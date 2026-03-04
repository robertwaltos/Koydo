"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, ShieldAlert, ShieldPlus } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "secured" | "breached";

type LatticeRound = {
  id: string;
  prompt: string;
  channels: [number, number, number, number];
  breachLane: number;
  spoofIntensity: number;
};

const ROUND_COUNT = 16;
const START_FIREWALL = 4;
const MAX_PATCH = 3;

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

function buildRound(roundIndex: number): LatticeRound {
  const rand = seeded(`zone-156:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const breachLane = Math.floor(rand() * 4);
  const spoofIntensity = 32 + Math.floor(rand() * 38) + tier * 2;
  const channels: [number, number, number, number] = [0, 0, 0, 0];
  for (let lane = 0; lane < channels.length; lane += 1) {
    channels[lane] = 22 + Math.floor(rand() * 36) + Math.floor(rand() * tier * 5);
  }

  channels[breachLane] = Math.min(98, 64 + Math.floor(rand() * 22) + tier * 2);
  const decoyLane = (breachLane + 1 + Math.floor(rand() * 3)) % 4;
  channels[decoyLane] = Math.min(97, channels[breachLane] - 4 + Math.floor(rand() * 6));

  const prompts = [
    "Sentinel mesh detected mirrored traffic burst.",
    "Core gateway is receiving layered spoof packets.",
    "Boundary node reports asymmetric handshake storm.",
    "Transit lattice flagged multi-hop intrusion chain.",
    "Edge validators disagree on route authenticity.",
  ];

  return {
    id: `z156-r${roundIndex + 1}`,
    prompt: `Sweep ${roundIndex + 1}: ${prompts[Math.floor(rand() * prompts.length)] ?? prompts[0]}`,
    channels,
    breachLane,
    spoofIntensity,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone156PixelSentinelLattice() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [firewall, setFirewall] = useState(START_FIREWALL);
  const [patch, setPatch] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedLane, setSelectedLane] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("breached");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 4);
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Pixel: sentinel lattice fully secured."
        : "Pixel: breach reached the core lattice.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-156",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 25,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setFirewall(START_FIREWALL);
    setPatch(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedLane(null);
    setResolution("breached");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: lock the true breach lane before spoof traffic breaks through.");
    void hapticSelection();
  };

  const restart = () => start();

  const recompile = () => {
    if (phase !== "playing" || patch <= 0 || firewall >= START_FIREWALL) return;
    const nextPatch = patch - 1;
    const nextFirewall = Math.min(START_FIREWALL, firewall + 1);
    setPatch(nextPatch);
    setFirewall(nextFirewall);
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Patch injected. Firewall segment restored.");
    void hapticSelection();
  };

  const lockLane = (lane: number) => {
    if (phase !== "playing" || !round || selectedLane !== null) return;
    setSelectedLane(lane);
    setInteractions((value) => value + 1);
    const correct = lane === round.breachLane;
    const laneDistance = Math.abs(lane - round.breachLane);
    const atFinalRound = roundIndex >= ROUND_COUNT - 1;

    let nextFirewall = firewall;
    let nextPatch = patch;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    let nextScore = score;

    if (correct) {
      nextScore += 12 + Math.min(8, nextCombo * 2) + Math.floor(tier / 2);
      if (nextCombo > 0 && nextCombo % 4 === 0) {
        nextPatch = Math.min(MAX_PATCH, nextPatch + 1);
        setMessage("Four-lock streak secured. +1 patch.");
      } else {
        setMessage("Breach lane locked.");
      }
      setMood("happy");
      void hapticSuccess();
    } else if (nextPatch > 0 && laneDistance <= 1) {
      nextPatch -= 1;
      nextScore = Math.max(0, nextScore - 4);
      setMood("thinking");
      setMessage("Near miss absorbed by patch buffer.");
      void hapticSelection();
    } else {
      nextFirewall = Math.max(0, nextFirewall - 1);
      nextScore = Math.max(0, nextScore - (laneDistance >= 2 ? 10 : 7));
      setMood("sad");
      setMessage(`Wrong lock. Breach came through lane ${round.breachLane + 1}.`);
      void hapticError();
    }

    setFirewall(nextFirewall);
    setPatch(nextPatch);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setScore(nextScore);

    window.setTimeout(() => {
      if (nextFirewall <= 0) {
        finalize("breached", nextScore);
        return;
      }
      if (atFinalRound) {
        finalize("secured", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedLane(null);
    }, 500);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        lockLane(Number(event.key) - 1);
      } else if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        recompile();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, lockLane, recompile]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">Zone 156</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Sentinel Lattice</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-sky-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Firewall {firewall}/{START_FIREWALL}</span>
            <span>Patch {patch}/{MAX_PATCH}</span>
          </div>
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-sky-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-sky-100">Run 16 intrusion sweeps, isolate the true breach lane, and hold firewall integrity to the finish.</p>
                <PhysicalButton onClick={start} className="h-12 bg-sky-400 px-8 text-sm font-black text-slate-950">
                  Start Sweep
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-sky-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-sky-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Sweep {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Spoof {round.spoofIntensity}
                </span>
              </div>
              <p className="text-sm text-sky-100">{round.prompt}</p>
              <p className="mt-2 text-xs text-sky-200">Channel pressure signature:</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-4">
                {round.channels.map((value, lane) => (
                  <div key={`channel-${round.id}-${lane}`} className="rounded-xl border border-sky-100/25 bg-sky-100/10 px-3 py-2 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sky-200">Lane {lane + 1}</p>
                    <p className="text-lg font-black text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[0, 1, 2, 3].map((lane) => {
                  const selected = selectedLane === lane;
                  const stateClass = selected
                    ? "border-sky-300/80 bg-sky-400/20"
                    : "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20";
                  return (
                    <button
                      key={`lane-lock-${lane}`}
                      type="button"
                      disabled={selectedLane !== null}
                      onClick={() => lockLane(lane)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">[{lane + 1}] Lock Lane {lane + 1}</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton
                  onClick={recompile}
                  disabled={patch <= 0 || firewall >= START_FIREWALL}
                  className="h-10 bg-sky-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Recompile Firewall
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-sky-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Sweep Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-sky-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">
                  Restart
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={resolution === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "secured" ? "Lattice Secured" : "Lattice Breached"}
              </h3>
              <p className="mt-2 text-sm text-sky-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-sky-400 px-7 text-sm font-black text-slate-950">
                  Replay Sweep
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

