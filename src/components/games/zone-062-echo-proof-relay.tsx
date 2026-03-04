"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Search, ShieldAlert, Timer } from "lucide-react";
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
type Category = "proof" | "inference" | "noise";

type RelayRound = {
  id: string;
  statement: string;
  context: string;
  correct: Category;
  pressure: number;
};

const ROUND_COUNT = 15;
const START_TRUST = 4;
const START_TIMER_MS = 190_000;

const ROUNDS: RelayRound[] = [
  { id: "z062-r1", statement: "Audit log shows three failed auth attempts at 03:12.", context: "Security console", correct: "proof", pressure: 6 },
  { id: "z062-r2", statement: "The attacker probably used an inside account.", context: "No account evidence yet", correct: "inference", pressure: 7 },
  { id: "z062-r3", statement: "Everyone knows night shifts are cursed.", context: "Rumor stream", correct: "noise", pressure: 6 },
  { id: "z062-r4", statement: "Checksum mismatch appears in block 44 and 45.", context: "Forensics report", correct: "proof", pressure: 8 },
  { id: "z062-r5", statement: "Mismatch likely came from interrupted transfer.", context: "Packet trace pending", correct: "inference", pressure: 8 },
  { id: "z062-r6", statement: "Blue cables fail more because blue is unlucky.", context: "Casual speculation", correct: "noise", pressure: 7 },
  { id: "z062-r7", statement: "Camera metadata confirms crate moved at 09:03.", context: "Video record", correct: "proof", pressure: 9 },
  { id: "z062-r8", statement: "Crate timing suggests dispatch error in routing.", context: "Route confirmation pending", correct: "inference", pressure: 9 },
  { id: "z062-r9", statement: "A meme says servers reboot when sneezed at.", context: "Social feed", correct: "noise", pressure: 8 },
  { id: "z062-r10", statement: "Sensor trend shows rising vibration for 11 minutes.", context: "Machine telemetry", correct: "proof", pressure: 10 },
  { id: "z062-r11", statement: "Rising vibration implies bearing fatigue onset.", context: "Inspection not complete", correct: "inference", pressure: 10 },
  { id: "z062-r12", statement: "My instinct says this floor hates updates.", context: "Personal feeling", correct: "noise", pressure: 9 },
  { id: "z062-r13", statement: "Signed patch receipt verifies deployment hash.", context: "Release manifest", correct: "proof", pressure: 11 },
  { id: "z062-r14", statement: "Given receipt timing, rollback likely occurred first.", context: "Rollback log missing", correct: "inference", pressure: 11 },
  { id: "z062-r15", statement: "Final rumor claims ghosts route network packets.", context: "Unverified audio clip", correct: "noise", pressure: 10 },
];

const CATEGORIES: Array<{ id: Category; label: string; desc: string }> = [
  { id: "proof", label: "Proof", desc: "Directly observed, logged, or measured." },
  { id: "inference", label: "Inference", desc: "Reasoned interpretation from data." },
  { id: "noise", label: "Noise", desc: "Unsupported or irrelevant claim." },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function prettyMs(ms: number) {
  const safe = Math.max(0, ms);
  const minutes = Math.floor(safe / 60_000);
  const seconds = Math.floor((safe % 60_000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Zone062EchoProofRelay() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [trust, setTrust] = useState(START_TRUST);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selected, setSelected] = useState<Category | null>(null);
  const [remainingMs, setRemainingMs] = useState(START_TIMER_MS);
  const [resolution, setResolution] = useState<Resolution>("compromised");
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
    setMood(nextResolution === "verified" ? "cheering" : "sad");
    setMessage(
      nextResolution === "verified"
        ? "Echo: proof relay completed. Analysis integrity held."
        : "Echo: relay compromised. Re-run with tighter signal discipline.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-062",
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
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelected(null);
    setRemainingMs(START_TIMER_MS);
    setResolution("compromised");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Echo: classify each statement as proof, inference, or noise.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (category: Category) => {
    if (phase !== "playing" || !round || selected !== null) return;
    setSelected(category);
    setInteractions((value) => value + 1);

    const correct = category === round.correct;
    const nextTrust = correct ? trust : Math.max(0, trust - (tier >= 3 ? 2 : 1));
    const nextCombo = correct ? combo + 1 : 0;
    const nextScore = correct
      ? score + 10 + Math.min(6, nextCombo)
      : Math.max(0, score - (tier >= 3 ? 7 : 5));
    const nextRemaining = clamp(remainingMs + (correct ? 900 : -(1200 + round.pressure * 40)), 0, 10 * 60 * 1000);

    setTrust(nextTrust);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setRemainingMs(nextRemaining);
    setMood(correct ? "happy" : "sad");
    setMessage(correct ? "Classification confirmed." : `Incorrect. This signal is ${round.correct}.`);
    if (correct) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextTrust <= 0 || nextRemaining <= 0) {
        finalize("compromised", nextScore);
        return;
      }
      if (finalRound) {
        finalize("verified", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelected(null);
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const timer = window.setInterval(() => {
      setRemainingMs((value) => Math.max(0, value - 250));
    }, 250);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    if (remainingMs > 0) return;
    const timeout = window.setTimeout(() => finalize("compromised", score), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, remainingMs, score]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        event.preventDefault();
        choose("proof");
      } else if (event.key === "2") {
        event.preventDefault();
        choose("inference");
      } else if (event.key === "3") {
        event.preventDefault();
        choose("noise");
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-violet-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(139,92,246,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(167,139,250,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">Zone 062</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Proof Relay</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-violet-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>{prettyMs(remainingMs)}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-violet-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-violet-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="echo" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-violet-100">Process 15 signals and preserve trust under time pressure.</p>
                <PhysicalButton onClick={start} className="h-12 bg-violet-400 px-8 text-sm font-black text-slate-950">
                  Start Relay
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-violet-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-violet-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <Search className="h-3.5 w-3.5" />
                  Signal {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Trust {trust}/{START_TRUST}
                </span>
              </div>
              <p className="text-xs text-violet-200">{round.context}</p>
              <h3 className="mt-1 text-xl font-black text-white">{round.statement}</h3>
              <div className="mt-5 grid gap-3">
                {CATEGORIES.map((entry, index) => {
                  const isSelected = selected === entry.id;
                  const stateClass = isSelected
                    ? "border-violet-300/80 bg-violet-400/20"
                    : "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20";
                  return (
                    <button
                      key={entry.id}
                      type="button"
                      disabled={selected !== null}
                      onClick={() => choose(entry.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{index + 1}]</span>
                        {entry.label}
                      </p>
                      <p className="mt-1 text-xs text-violet-100">{entry.desc}</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-violet-200">
                  <Timer className="h-3.5 w-3.5" />
                  Wrong picks drain trust and time.
                </p>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-violet-300 px-4 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-violet-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="echo" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Relay Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-violet-400 px-6 text-sm font-black text-slate-950">
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
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-violet-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="echo" mood={resolution === "verified" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "verified" ? "Relay Verified" : "Relay Compromised"}
              </h3>
              <p className="mt-2 text-sm text-violet-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-violet-400 px-7 text-sm font-black text-slate-950">
                  Replay Relay
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
