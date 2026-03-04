"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Radar, ShieldAlert, Target, Zap } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "secured" | "breach";

type SiegeRound = {
  id: string;
  hostileLane: 0 | 1 | 2;
  decoyLane: 0 | 1 | 2;
  intensity: number;
  hint: string;
};

type Action = "lane-1" | "lane-2" | "lane-3" | "emp";

const ROUND_COUNT = 15;
const START_INTEGRITY = 4;
const START_THREAT = 24;
const START_CHARGE = 35;

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

function buildRound(roundIndex: number): SiegeRound {
  const rand = seeded(`zone-060:${roundIndex + 1}`);
  const hostileLane = Math.floor(rand() * 3) as 0 | 1 | 2;
  const decoyLane = ((hostileLane + 1 + Math.floor(rand() * 2)) % 3) as 0 | 1 | 2;
  const intensity = 7 + Math.floor(rand() * (8 + Math.floor(roundIndex / 4) * 2));
  return {
    id: `z060-r${roundIndex + 1}`,
    hostileLane,
    decoyLane,
    intensity,
    hint: `Telemetry suggests lane ${hostileLane + 1} has sustained signal lock; lane ${decoyLane + 1} shows reflective decoys.`,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone060PixelCircuitSiege() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [integrity, setIntegrity] = useState(START_INTEGRITY);
  const [threat, setThreat] = useState(START_THREAT);
  const [charge, setCharge] = useState(START_CHARGE);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const [resolution, setResolution] = useState<Resolution>("breach");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 5);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "secured" ? "cheering" : "sad");
    setMessage(
      nextResolution === "secured"
        ? "Pixel: Circuit siege repelled. Core remains online."
        : "Pixel: Siege breach confirmed. Core integrity lost.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-060",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 24,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setIntegrity(START_INTEGRITY);
    setThreat(START_THREAT);
    setCharge(START_CHARGE);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedAction(null);
    setResolution("breach");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: jam the hostile lane each wave; EMP is powerful but charge-limited.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (action: Action) => {
    if (phase !== "playing" || !round || selectedAction !== null) return;
    setSelectedAction(action);
    setInteractions((value) => value + 1);

    const laneAction =
      action === "lane-1" ? 0 :
      action === "lane-2" ? 1 :
      action === "lane-3" ? 2 :
      null;

    const hasEmp = charge >= 45;
    const usedEmp = action === "emp";

    const baseThreatRise = round.intensity + tier;
    let nextThreat = clamp(threat + baseThreatRise, 0, 100);
    let nextIntegrity = integrity;
    let nextCharge = clamp(charge + 10 + tier, 0, 100);
    let nextScore = score;
    let nextCombo = combo;
    let success = false;
    let severe = false;
    let detail = "";

    if (usedEmp) {
      if (!hasEmp) {
        detail = "EMP misfire. Charge too low.";
        nextThreat = clamp(nextThreat + 8, 0, 100);
        nextIntegrity -= 1;
        nextCharge = clamp(nextCharge + 2, 0, 100);
        nextCombo = 0;
      } else {
        success = true;
        detail = "EMP sweep neutralized hostile and decoy clusters.";
        nextThreat = clamp(nextThreat - (20 + tier * 3), 0, 100);
        nextCharge = clamp(nextCharge - 45, 0, 100);
      }
    } else if (laneAction === round.hostileLane) {
      success = true;
      detail = `Lane ${round.hostileLane + 1} neutralized.`;
      nextThreat = clamp(nextThreat - (14 + tier * 2), 0, 100);
      if (laneAction === round.decoyLane) {
        // unreachable by construction but kept for robustness
        nextThreat = clamp(nextThreat + 4, 0, 100);
      }
    } else if (laneAction === round.decoyLane) {
      detail = `Decoy lane ${round.decoyLane + 1} intercepted.`;
      nextThreat = clamp(nextThreat + 6, 0, 100);
      nextIntegrity -= 1;
      nextCombo = 0;
      severe = true;
    } else {
      detail = `Wrong lane. Hostile in lane ${round.hostileLane + 1}.`;
      nextThreat = clamp(nextThreat + 4, 0, 100);
      nextIntegrity -= 1;
      nextCombo = 0;
    }

    if (success) {
      nextCombo += 1;
      nextScore += 12 + Math.min(6, nextCombo);
    } else {
      nextScore = Math.max(0, nextScore - (severe ? 8 : 5));
    }

    if (nextThreat >= 90) {
      nextIntegrity -= 1;
      nextThreat = clamp(nextThreat - 8, 0, 100);
      detail = `${detail} Threat spiked into core defenses.`;
    }

    nextIntegrity = clamp(nextIntegrity, 0, START_INTEGRITY);

    setThreat(nextThreat);
    setIntegrity(nextIntegrity);
    setCharge(nextCharge);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setMood(success ? "happy" : "sad");
    setMessage(detail);
    if (success) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextIntegrity <= 0 || nextThreat >= 100) {
        finalize("breach", nextScore);
        return;
      }
      if (finalRound) {
        finalize("secured", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedAction(null);
    }, 560);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        event.preventDefault();
        choose("lane-1");
      } else if (event.key === "2") {
        event.preventDefault();
        choose("lane-2");
      } else if (event.key === "3") {
        event.preventDefault();
        choose("lane-3");
      } else if (event.key === "4") {
        event.preventDefault();
        choose("emp");
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(14,165,233,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">Zone 060</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Circuit Siege</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-sky-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Integrity {integrity}/{START_INTEGRITY}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-sky-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-sky-100">
                  Defend the circuit core over 15 siege waves. Jam the correct lane or fire EMP when charge permits.
                </p>
                <ul className="space-y-1 text-xs text-sky-100">
                  <li>Win condition: survive all waves with integrity above zero.</li>
                  <li>Fail condition: core integrity collapses or threat reaches 100.</li>
                  <li>Controls: keys 1-3 for lanes, key 4 for EMP.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-sky-400 px-8 text-sm font-black text-slate-950">
                  Start Siege Defense
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section
              key={round.id}
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-sky-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-sky-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <Radar className="h-3.5 w-3.5" />
                  Wave {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Intensity {round.intensity}
                </span>
              </div>

              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-sky-100/25 bg-sky-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-sky-200">Threat</p>
                  <p className="mt-1 text-xl font-black text-white">{threat}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-rose-300" style={{ width: `${threat}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-sky-100/25 bg-sky-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-sky-200">EMP Charge</p>
                  <p className="mt-1 text-xl font-black text-white">{charge}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-emerald-300" style={{ width: `${charge}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-sky-100/25 bg-sky-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-sky-200">Hostile Lane</p>
                  <p className="mt-1 text-xl font-black text-white">{round.hostileLane + 1}</p>
                  <p className="text-[11px] text-sky-100">Decoy lane {round.decoyLane + 1}</p>
                </div>
              </div>

              <p className="text-sm text-sky-100">{round.hint}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  disabled={selectedAction !== null}
                  onClick={() => choose("lane-1")}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    selectedAction === "lane-1"
                      ? "border-sky-300/80 bg-sky-400/20"
                      : "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20"
                  }`}
                >
                  <p className="text-sm font-black text-white"><span className="mr-2 text-xs opacity-80">[1]</span>Jam Lane 1</p>
                  <p className="mt-1 text-xs text-sky-100">Single-lane precision intercept.</p>
                </button>
                <button
                  type="button"
                  disabled={selectedAction !== null}
                  onClick={() => choose("lane-2")}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    selectedAction === "lane-2"
                      ? "border-sky-300/80 bg-sky-400/20"
                      : "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20"
                  }`}
                >
                  <p className="text-sm font-black text-white"><span className="mr-2 text-xs opacity-80">[2]</span>Jam Lane 2</p>
                  <p className="mt-1 text-xs text-sky-100">Single-lane precision intercept.</p>
                </button>
                <button
                  type="button"
                  disabled={selectedAction !== null}
                  onClick={() => choose("lane-3")}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    selectedAction === "lane-3"
                      ? "border-sky-300/80 bg-sky-400/20"
                      : "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20"
                  }`}
                >
                  <p className="text-sm font-black text-white"><span className="mr-2 text-xs opacity-80">[3]</span>Jam Lane 3</p>
                  <p className="mt-1 text-xs text-sky-100">Single-lane precision intercept.</p>
                </button>
                <button
                  type="button"
                  disabled={selectedAction !== null}
                  onClick={() => choose("emp")}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    selectedAction === "emp"
                      ? "border-emerald-300/80 bg-emerald-400/20"
                      : "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20"
                  }`}
                >
                  <p className="text-sm font-black text-white"><span className="mr-2 text-xs opacity-80">[4]</span>EMP Sweep</p>
                  <p className="mt-1 text-xs text-emerald-100">Requires 45+ charge. Clears hostiles and decoys.</p>
                </button>
              </div>

              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-sky-200">
                  <Target className="h-3.5 w-3.5" />
                  Correct lane picks chain combo; EMP is high-impact resource spend.
                </p>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-sky-300 px-4 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section
              key="paused"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Siege Defense Paused</h3>
              <p className="mt-2 text-sm text-sky-100">Resume wave control or restart from wave one.</p>
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
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={resolution === "secured" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "secured" ? "Circuit Secured" : "Circuit Breach"}
              </h3>
              <p className="mt-2 text-sm text-sky-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-sky-200">
                <Zap className="h-3.5 w-3.5" />
                Final threat {threat} | Remaining charge {charge}.
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-sky-400 px-7 text-sm font-black text-slate-950">
                  Replay Siege Defense
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
