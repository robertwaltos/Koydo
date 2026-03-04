"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Scale } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "verified" | "compromised";
type Verdict = "evidence" | "claim" | "noise";

type ClaimRound = {
  id: string;
  text: string;
  verdict: Verdict;
  prompt: string;
};

const ROUND_COUNT = 18;
const START_TRUST = 4;
const MAX_REVEALS = 3;

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

function roundWindowMs(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 6);
  return Math.max(2200, 5600 - (tier - 1) * 700);
}

function buildRound(roundIndex: number): ClaimRound {
  const random = seeded(`arcade-063:${roundIndex + 1}`);
  const verdictPool: Verdict[] = ["evidence", "claim", "noise"];
  const verdict = verdictPool[Math.floor(random() * verdictPool.length)] ?? "claim";

  const evidenceText = [
    "Lab report: 82% of test samples showed the same trend.",
    "Survey data from 1,200 learners recorded a 14% gain.",
    "Direct quote from the source includes publication date and method.",
    "Official dataset lists measured outcomes across three semesters.",
    "Experiment log shows controls and repeated trial results.",
  ];
  const claimText = [
    "This strategy should improve results for most players.",
    "I think the new plan is better for class discussions.",
    "Our team may solve this challenge faster with practice.",
    "The lesson might be easier if we break it into steps.",
    "This approach probably works best for this topic.",
  ];
  const noiseText = [
    "A random rumor says this always works, trust me.",
    "Everyone knows this is true, no details needed.",
    "Someone online claimed this with zero citations.",
    "The answer felt right, so the method must be correct.",
    "No source, no numbers, just a loud opinion.",
  ];

  const promptPool = [
    "Classify this statement before credibility drops.",
    "Sort this signal into the correct reasoning bucket.",
    "Tag the statement type under pressure.",
    "Choose the strongest classification quickly.",
  ];

  return {
    id: `a063-r${roundIndex + 1}`,
    text:
      verdict === "evidence"
        ? evidenceText[Math.floor(random() * evidenceText.length)] ?? evidenceText[0]!
        : verdict === "claim"
          ? claimText[Math.floor(random() * claimText.length)] ?? claimText[0]!
          : noiseText[Math.floor(random() * noiseText.length)] ?? noiseText[0]!,
    verdict,
    prompt: promptPool[Math.floor(random() * promptPool.length)] ?? promptPool[0]!,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Arcade063EchoClaimCascade() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [trust, setTrust] = useState(START_TRUST);
  const [reveals, setReveals] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selected, setSelected] = useState<Verdict | null>(null);
  const [hint, setHint] = useState<string>("");
  const [timeLeftMs, setTimeLeftMs] = useState(roundWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("compromised");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "verified" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "verified"
        ? "Echo: credibility secured. Excellent evidence discipline."
        : "Echo: credibility collapsed. Rebuild your reasoning chain.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-063",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, finalInteractions),
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
    setReveals(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelected(null);
    setHint("");
    setTimeLeftMs(roundWindowMs(0));
    setOutcome("compromised");
    setInteractions(0);
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Echo: label each signal as evidence, claim, or noise.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerReveal = () => {
    if (phase !== "playing" || !round || reveals <= 0 || settlingRef.current) return;
    setReveals((value) => value - 1);
    setInteractions((value) => value + 1);
    setHint(
      round.verdict === "evidence"
        ? "Hint: references data, source, or measurable observation."
        : round.verdict === "claim"
          ? "Hint: prediction/opinion with plausible direction, but no hard proof."
          : "Hint: unsupported assertion with weak/no source quality.",
    );
    setScore((value) => Math.max(0, value - 2));
    setMood("thinking");
    setMessage("Echo: hint loaded. Keep credibility high.");
    void hapticSelection();
  };

  const resolve = (verdict: Verdict, timedOut = false) => {
    if (phase !== "playing" || !round || settlingRef.current) return;
    settlingRef.current = true;
    setSelected(verdict);
    const nextInteractions = interactions + 1;
    setInteractions(nextInteractions);

    const correct = !timedOut && verdict === round.verdict;
    let nextTrust = trust;
    let nextReveals = reveals;
    let nextScore = score;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    const finalRound = roundIndex >= ROUND_COUNT - 1;

    if (correct) {
      nextScore += 10 + Math.min(10, nextCombo * 2);
      if (nextCombo > 0 && nextCombo % 5 === 0) {
        nextReveals = Math.min(MAX_REVEALS, nextReveals + 1);
        setMessage("Credibility streak bonus: +1 reveal.");
      } else {
        setMessage("Correct classification.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextTrust = Math.max(0, nextTrust - 1);
      nextScore = Math.max(0, nextScore - (timedOut ? 8 : 6));
      setMessage(timedOut ? "Timeout. Unchecked signal hurt trust." : `Misclassified. Correct tag was ${round.verdict}.`);
      setMood("sad");
      void hapticError();
    }

    setTrust(nextTrust);
    setReveals(nextReveals);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextTrust <= 0) {
        settlingRef.current = false;
        finalize("compromised", nextScore, nextInteractions);
        return;
      }
      if (finalRound) {
        const finalScore = nextScore + nextTrust * 5 + nextBestCombo;
        setScore(finalScore);
        settlingRef.current = false;
        finalize("verified", finalScore, nextInteractions);
        return;
      }
      const nextRound = roundIndex + 1;
      setRoundIndex(nextRound);
      setSelected(null);
      setHint("");
      setTimeLeftMs(roundWindowMs(nextRound));
      settlingRef.current = false;
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing" || selected !== null || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selected]);

  useEffect(() => {
    if (phase !== "playing" || selected !== null || timeLeftMs > 0) return;
    const timeout = window.setTimeout(() => resolve("noise", true), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, selected, timeLeftMs]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key === "1") {
        event.preventDefault();
        resolve("evidence");
      } else if (event.key === "2") {
        event.preventDefault();
        resolve("claim");
      } else if (event.key === "3") {
        event.preventDefault();
        resolve("noise");
      } else if (lower === "h") {
        event.preventDefault();
        triggerReveal();
      } else if (lower === "p") {
        event.preventDefault();
        setPhase((value) => (value === "playing" ? "paused" : "playing"));
      } else if (lower === "r") {
        event.preventDefault();
        restart();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, resolve, restart, triggerReveal]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-indigo-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(129,140,248,0.24),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(99,102,241,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-indigo-100">Arcade 063</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Claim Cascade</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-indigo-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Trust {trust}</span>
            <span>Reveals {reveals}</span>
          </div>
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-indigo-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-indigo-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="echo" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-indigo-100">Classify each statement as Evidence `[1]`, Claim `[2]`, or Noise `[3]`. Hint key: `H`.</p>
                <PhysicalButton onClick={start} className="h-12 bg-indigo-300 px-8 text-sm font-black text-slate-950">Start Cascade</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-indigo-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200/30 px-3 py-1">
                  <Scale className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span>{Math.max(0, timeLeftMs / 1000).toFixed(1)}s</span>
              </div>
              <p className="text-sm text-indigo-100">{round.prompt}</p>
              <div className="mt-3 rounded-xl border border-indigo-100/25 bg-indigo-100/10 p-4">
                <p className="text-sm text-white">{round.text}</p>
              </div>
              {hint ? <p className="mt-2 text-xs text-indigo-200">{hint}</p> : null}

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { key: "evidence" as Verdict, label: "[1] Evidence" },
                  { key: "claim" as Verdict, label: "[2] Claim" },
                  { key: "noise" as Verdict, label: "[3] Noise" },
                ].map((option) => (
                  <button
                    key={`${round.id}-${option.key}`}
                    type="button"
                    disabled={selected !== null}
                    onClick={() => resolve(option.key)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selected === option.key
                        ? "border-indigo-300/80 bg-indigo-400/20"
                        : "border-indigo-100/25 bg-indigo-100/10 hover:bg-indigo-100/20"
                    }`}
                  >
                    <p className="text-sm font-black text-white">{option.label}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerReveal} disabled={reveals <= 0} className="h-10 bg-indigo-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  Hint Reveal [H]
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-zinc-800 text-xs font-black text-white">
                  <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" />Pause [P]</span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-indigo-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="echo" mood="thinking" size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">Cascade Paused</h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-indigo-300 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume</span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart [R]</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-indigo-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="echo" mood={outcome === "verified" ? "cheering" : "sad"} size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "verified" ? "Credibility Secured" : "Credibility Lost"}</h3>
              <p className="mt-2 text-sm text-indigo-100">Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}</p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-indigo-300 px-7 text-sm font-black text-slate-950">Run Again</PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
