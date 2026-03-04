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
type Resolution = "certified" | "compromised";
type Verdict = "accept" | "challenge" | "defer" | "escalate";

type CircuitRound = {
  id: string;
  prompt: string;
  clarity: number;
  contradiction: number;
  urgency: number;
  options: [Verdict, Verdict, Verdict, Verdict];
  expected: Verdict;
};

const ROUND_COUNT = 16;
const START_CREDIBILITY = 4;
const MAX_BUFFER = 3;

const VERDICT_LABELS: Record<Verdict, string> = {
  accept: "Accept channel",
  challenge: "Challenge claim",
  defer: "Defer for cross-check",
  escalate: "Escalate chain",
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

function rotateVerdicts(offset: number): [Verdict, Verdict, Verdict, Verdict] {
  const base: Verdict[] = ["accept", "challenge", "defer", "escalate"];
  const normalized = ((offset % base.length) + base.length) % base.length;
  const rotated = base.slice(normalized).concat(base.slice(0, normalized));
  return [rotated[0]!, rotated[1]!, rotated[2]!, rotated[3]!];
}

function expectedVerdict(clarity: number, contradiction: number, urgency: number): Verdict {
  if (contradiction >= 72) return "challenge";
  if (urgency >= 78 && clarity >= 56 && contradiction <= 52) return "escalate";
  if (clarity >= 74 && contradiction <= 35) return "accept";
  return "defer";
}

function buildRound(roundIndex: number): CircuitRound {
  const rand = seeded(`zone-087:${roundIndex + 1}`);
  const tier = 1 + Math.floor(roundIndex / 4);
  const clarity = Math.min(96, Math.max(12, 30 + Math.floor(rand() * 58) + tier));
  const contradiction = Math.min(96, Math.max(8, 18 + Math.floor(rand() * 64) + Math.floor(rand() * tier * 5)));
  const urgency = Math.min(96, Math.max(12, 22 + Math.floor(rand() * 62) + Math.floor(rand() * tier * 3)));
  const options = rotateVerdicts(roundIndex + Math.floor(rand() * 4));
  const expected = expectedVerdict(clarity, contradiction, urgency);
  const prompts = [
    "Truth circuit receives disputed witness chain.",
    "Transit relay shows partial checksum mismatch.",
    "Archive memo carries conflicting route markers.",
    "Frontline report has valid hash and odd timing.",
    "Emergency packet includes unresolved signature.",
  ];
  return {
    id: `z087-r${roundIndex + 1}`,
    prompt: `Case ${roundIndex + 1}: ${prompts[Math.floor(rand() * prompts.length)] ?? prompts[0]}`,
    clarity,
    contradiction,
    urgency,
    options,
    expected,
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Zone087EchoTruthCircuit() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [credibility, setCredibility] = useState(START_CREDIBILITY);
  const [buffer, setBuffer] = useState(1);
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
    setMood(nextResolution === "certified" ? "cheering" : "sad");
    setMessage(
      nextResolution === "certified"
        ? "Echo: truth circuit certified."
        : "Echo: truth circuit compromised.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-087",
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
    setCredibility(START_CREDIBILITY);
    setBuffer(1);
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
    setMessage("Echo: keep every verdict aligned with evidence signals.");
    void hapticSelection();
  };

  const restart = () => start();

  const recover = () => {
    if (phase !== "playing" || buffer <= 0 || credibility >= START_CREDIBILITY) return;
    setBuffer((value) => value - 1);
    setCredibility((value) => Math.min(START_CREDIBILITY, value + 1));
    setScore((value) => Math.max(0, value - 2));
    setInteractions((value) => value + 1);
    setMood("thinking");
    setMessage("Evidence buffer restored one credibility.");
    void hapticSelection();
  };

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const verdict = round.options[optionIndex];
    if (!verdict) return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const correct = verdict === round.expected;
    const atFinalRound = roundIndex >= ROUND_COUNT - 1;

    let nextCredibility = credibility;
    let nextBuffer = buffer;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    let nextScore = score;

    if (correct) {
      nextScore += 11 + Math.min(8, nextCombo * 2) + Math.floor(tier / 2);
      if (nextCombo > 0 && nextCombo % 4 === 0) {
        nextBuffer = Math.min(MAX_BUFFER, nextBuffer + 1);
        setMessage("Precision chain. +1 evidence buffer.");
      } else {
        setMessage("Verdict confirmed.");
      }
      setMood("happy");
      void hapticSuccess();
    } else if (nextBuffer > 0) {
      nextBuffer -= 1;
      nextScore = Math.max(0, nextScore - 4);
      setMood("thinking");
      setMessage("Buffer consumed to prevent credibility loss.");
      void hapticSelection();
    } else {
      nextCredibility = Math.max(0, nextCredibility - 1);
      nextScore = Math.max(0, nextScore - 8);
      setMood("sad");
      setMessage(`Incorrect verdict. Expected: ${VERDICT_LABELS[round.expected]}.`);
      void hapticError();
    }

    setCredibility(nextCredibility);
    setBuffer(nextBuffer);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);
    setScore(nextScore);

    window.setTimeout(() => {
      if (nextCredibility <= 0) {
        finalize("compromised", nextScore);
        return;
      }
      if (atFinalRound) {
        finalize("certified", nextScore);
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
        recover();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose, recover]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(8,145,178,0.24),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Zone 087</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Truth Circuit</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-cyan-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Credibility {credibility}/{START_CREDIBILITY}</span>
            <span>Buffer {buffer}/{MAX_BUFFER}</span>
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
                <p className="max-w-2xl text-sm text-cyan-100">Process 16 truth-circuit verdicts and hold credibility under anomaly pressure.</p>
                <PhysicalButton onClick={start} className="h-12 bg-cyan-400 px-8 text-sm font-black text-slate-950">
                  Start Truth Circuit
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
                  Tier {tier}
                </span>
              </div>
              <p className="text-sm text-cyan-100">{round.prompt}</p>
              <div className="mt-3 grid gap-2 text-xs text-cyan-100 sm:grid-cols-3">
                <p className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 px-3 py-2">Clarity {round.clarity}</p>
                <p className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 px-3 py-2">Contradiction {round.contradiction}</p>
                <p className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 px-3 py-2">Urgency {round.urgency}</p>
              </div>
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
                  onClick={recover}
                  disabled={buffer <= 0 || credibility >= START_CREDIBILITY}
                  className="h-10 bg-cyan-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Recover Credibility
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
              <h3 className="mt-3 text-2xl font-black text-white">Truth Circuit Paused</h3>
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
                <MascotFriend id="echo" mood={resolution === "certified" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "certified" ? "Truth Circuit Certified" : "Truth Circuit Compromised"}
              </h3>
              <p className="mt-2 text-sm text-cyan-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-cyan-400 px-7 text-sm font-black text-slate-950">
                  Replay Truth Circuit
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
