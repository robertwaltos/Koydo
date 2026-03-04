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
type Resolution = "verified" | "compromised";
type Verdict = "confirm" | "challenge" | "delay" | "escalate";

type TruthlineRound = {
  id: string;
  prompt: string;
  clarity: number;
  risk: number;
  options: [Verdict, Verdict, Verdict, Verdict];
  correct: Verdict;
};

const ROUND_COUNT = 16;
const START_TRUST = 4;
const MAX_RECOVERY = 3;

const VERDICT_LABELS: Record<Verdict, string> = {
  confirm: "Confirm signal",
  challenge: "Challenge claim",
  delay: "Request more data",
  escalate: "Escalate immediately",
};

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

function rotateOptions(offset: number): [Verdict, Verdict, Verdict, Verdict] {
  const base: Verdict[] = ["confirm", "challenge", "delay", "escalate"];
  const normalized = ((offset % base.length) + base.length) % base.length;
  const rotated = base.slice(normalized).concat(base.slice(0, normalized));
  return [rotated[0], rotated[1], rotated[2], rotated[3]];
}

function pickCorrectVerdict(clarity: number, risk: number): Verdict {
  if (clarity >= 68 && risk <= 58) return "confirm";
  if (clarity <= 38 && risk >= 48) return "challenge";
  if (risk >= 76) return "escalate";
  return "delay";
}

function buildRound(roundIndex: number): TruthlineRound {
  const rand = seeded(`zone-067:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const clarityBase = 28 + Math.floor(rand() * 52);
  const clarity = Math.min(96, Math.max(8, clarityBase + tier * 2 - Math.floor(rand() * (tier * 4))));
  const riskBase = 24 + Math.floor(rand() * 56);
  const risk = Math.min(96, Math.max(8, riskBase + Math.floor(rand() * tier * 6) - tier));
  const correct = pickCorrectVerdict(clarity, risk);
  const options = rotateOptions(roundIndex + Math.floor(rand() * 4));
  const prompts = [
    "Telemetry witness claim enters review channel.",
    "Relay witness transcript arrives with partial checksum.",
    "Archive packet reports contradictory coordinates.",
    "Refit memo claims emergency corridor is stable.",
    "Distress summary includes two unverified signatures.",
    "Sector log shows conflict between scout and station feed.",
  ];
  const prompt = prompts[Math.floor(rand() * prompts.length)] ?? prompts[0];
  return {
    id: `z067-r${roundIndex + 1}`,
    prompt: `Case ${roundIndex + 1}: ${prompt}`,
    clarity,
    risk,
    options,
    correct,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone067EchoTruthlineProtocol() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [trust, setTrust] = useState(START_TRUST);
  const [recovery, setRecovery] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("compromised");
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
    setMood(nextResolution === "verified" ? "cheering" : "sad");
    setMessage(
      nextResolution === "verified"
        ? "Echo: truthline protocol verified."
        : "Echo: protocol compromised. rebuild evidence discipline.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-067",
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
    setTrust(START_TRUST);
    setRecovery(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("compromised");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Echo: classify each signal correctly. recovery charges can save shaky rounds.");
    void hapticSelection();
  };

  const restart = () => start();

  const stabilize = () => {
    if (phase !== "playing" || recovery <= 0 || trust >= START_TRUST) return;
    const nextRecovery = recovery - 1;
    const nextTrust = Math.min(START_TRUST, trust + 1);
    setRecovery(nextRecovery);
    setTrust(nextTrust);
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Recovery buffer restored one trust segment.");
    void hapticSelection();
  };

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const verdict = round.options[optionIndex];
    if (!verdict) return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const correct = verdict === round.correct;
    const atFinalRound = roundIndex >= ROUND_COUNT - 1;

    let nextTrust = trust;
    let nextRecovery = recovery;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    let nextScore = score;

    if (correct) {
      nextScore += 11 + Math.min(8, nextCombo * 2);
      if (nextCombo > 0 && nextCombo % 4 === 0) {
        nextRecovery = Math.min(MAX_RECOVERY, nextRecovery + 1);
        setMessage("Precise chain. +1 recovery charge.");
      } else {
        setMessage("Verdict aligned.");
      }
      setMood("happy");
      void hapticSuccess();
    } else if (nextRecovery > 0) {
      nextRecovery -= 1;
      nextScore = Math.max(0, nextScore - 3);
      setMood("thinking");
      setMessage("Recovery buffer consumed to absorb mismatch.");
      void hapticSelection();
    } else {
      nextTrust = Math.max(0, nextTrust - 1);
      nextScore = Math.max(0, nextScore - 7);
      setMood("sad");
      setMessage(`Mismatch. Correct call was: ${VERDICT_LABELS[round.correct]}.`);
      void hapticError();
    }

    setTrust(nextTrust);
    setRecovery(nextRecovery);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setScore(nextScore);

    window.setTimeout(() => {
      if (nextTrust <= 0) {
        finalize("compromised", nextScore);
        return;
      }
      if (atFinalRound) {
        finalize("verified", nextScore);
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
      } else if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        stabilize();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose, stabilize]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(14,116,144,0.24),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Zone 067</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Truthline Protocol</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-cyan-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Trust {trust}/{START_TRUST}</span>
            <span>Recovery {recovery}/{MAX_RECOVERY}</span>
          </div>
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-cyan-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-cyan-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="echo" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-cyan-100">Run 16 truthline cases. Score streaks to bank recovery charges, then spend them to stay in control.</p>
                <PhysicalButton onClick={start} className="h-12 bg-cyan-400 px-8 text-sm font-black text-slate-950">
                  Start Protocol
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-cyan-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-cyan-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Case {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Clarity {round.clarity} | Risk {round.risk}
                </span>
              </div>
              <p className="text-sm text-cyan-100">{round.prompt}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {round.options.map((verdict, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-cyan-300/80 bg-cyan-400/20"
                    : "border-cyan-100/25 bg-cyan-100/10 hover:bg-cyan-100/20";
                  return (
                    <button
                      key={`${round.id}-${verdict}-${optionIndex}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                        {VERDICT_LABELS[verdict]}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton
                  onClick={stabilize}
                  disabled={recovery <= 0 || trust >= START_TRUST}
                  className="h-10 bg-cyan-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Stabilize (+1 trust)
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-cyan-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="echo" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Protocol Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-cyan-400 px-6 text-sm font-black text-slate-950">
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
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-cyan-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="echo" mood={resolution === "verified" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "verified" ? "Truthline Verified" : "Protocol Compromised"}
              </h3>
              <p className="mt-2 text-sm text-cyan-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-cyan-400 px-7 text-sm font-black text-slate-950">
                  Replay Protocol
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
