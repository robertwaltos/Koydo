"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, Scale, Search } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "verdict" | "misled";
type Category = "evidence" | "inference" | "noise";

type EvidenceRound = {
  id: string;
  statement: string;
  context: string;
  correct: Category;
};

const ROUND_COUNT = 15;
const STARTING_CREDIBILITY = 4;

const ROUNDS: EvidenceRound[] = [
  { id: "z048-r1", statement: "Sensor log shows 18C to 42C in seven minutes.", context: "Thermal chamber review.", correct: "evidence" },
  { id: "z048-r2", statement: "The team probably skipped calibration due to schedule pressure.", context: "No direct record yet.", correct: "inference" },
  { id: "z048-r3", statement: "Someone said the room felt unlucky this morning.", context: "Informal hallway chatter.", correct: "noise" },
  { id: "z048-r4", statement: "Access report confirms two admin logins at 07:32.", context: "Security record export.", correct: "evidence" },
  { id: "z048-r5", statement: "If two admins logged in, they may have been patching a live issue.", context: "Patch status not yet verified.", correct: "inference" },
  { id: "z048-r6", statement: "Purple folders are always risky.", context: "Color preference comment only.", correct: "noise" },
  { id: "z048-r7", statement: "Audit snapshot includes checksum mismatch on block 3.", context: "Forensics panel.", correct: "evidence" },
  { id: "z048-r8", statement: "Mismatch likely means transfer was interrupted mid-stream.", context: "No packet trace yet.", correct: "inference" },
  { id: "z048-r9", statement: "The office plant looked sad before the outage.", context: "Unrelated observation.", correct: "noise" },
  { id: "z048-r10", statement: "Lab camera timestamp places the crate at dock B.", context: "Video frame with metadata.", correct: "evidence" },
  { id: "z048-r11", statement: "Dock B placement suggests courier followed standard route.", context: "Route logs pending.", correct: "inference" },
  { id: "z048-r12", statement: "My instinct says the night shift is cursed.", context: "No factual support.", correct: "noise" },
  { id: "z048-r13", statement: "Voltage monitor confirms three surges above safety threshold.", context: "Automated monitor log.", correct: "evidence" },
  { id: "z048-r14", statement: "Repeated surges imply insulation wear over time.", context: "Maintenance report missing.", correct: "inference" },
  { id: "z048-r15", statement: "Old rumors about haunted wiring are probably true.", context: "Rumor with no data source.", correct: "noise" },
];

const CATEGORIES: Array<{ id: Category; label: string; description: string }> = [
  { id: "evidence", label: "Evidence", description: "Directly observed or recorded fact." },
  { id: "inference", label: "Inference", description: "Reasoned interpretation from facts." },
  { id: "noise", label: "Noise", description: "Irrelevant or unsupported input." },
];

export default function Zone048EchoEvidenceJudge() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [credibility, setCredibility] = useState(STARTING_CREDIBILITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selected, setSelected] = useState<Category | null>(null);
  const [resolution, setResolution] = useState<Resolution>("misled");
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
    setMood(nextResolution === "verdict" ? "cheering" : "sad");
    setMessage(
      nextResolution === "verdict"
        ? "Echo: Clean verdict. Your reasoning chain held under ambiguity."
        : "Echo: Signal-to-noise ratio collapsed. Rebuild evidence discipline.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-048",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: ROUND_COUNT * 12,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("playing");
    setRoundIndex(0);
    setCredibility(STARTING_CREDIBILITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelected(null);
    setResolution("misled");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Echo: Classify each statement. Keys 1/2/3 map to evidence/inference/noise.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (category: Category) => {
    if (phase !== "playing" || !round || selected) return;
    setSelected(category);
    setInteractions((value) => value + 1);

    const correct = category === round.correct;
    const penalty = tier >= 3 ? 2 : 1;
    const nextCredibility = correct ? credibility : credibility - penalty;
    const nextCombo = correct ? combo + 1 : 0;
    const nextScore = correct ? score + 8 + Math.min(5, nextCombo) : Math.max(0, score - 2);

    setCredibility(nextCredibility);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(correct ? "happy" : "sad");
    setMessage(correct ? "Classification confirmed." : `Incorrect. This was ${round.correct}.`);
    if (correct) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextCredibility <= 0) {
        finalize("misled", nextScore);
        return;
      }
      if (finalRound) {
        finalize("verdict", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelected(null);
    }, 560);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        event.preventDefault();
        choose("evidence");
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(167,139,250,0.24),transparent_45%),radial-gradient(circle_at_84%_82%,rgba(217,70,239,0.2),transparent_48%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">Zone 048</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Evidence Judge</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-violet-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Credibility {credibility}/{STARTING_CREDIBILITY}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-violet-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-violet-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="echo" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-violet-100">
                  Separate facts from inferences and noise across incident statements. Classification quality drives the verdict.
                </p>
                <ul className="space-y-1 text-xs text-violet-100">
                  <li>Win condition: complete all 15 statements with credibility above zero.</li>
                  <li>Fail condition: credibility drops to zero.</li>
                  <li>Controls: click options or keys 1,2,3.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-violet-400 px-8 text-sm font-black text-slate-950">
                  Start Review Session
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
              className="rounded-3xl border border-violet-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-violet-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <Search className="h-3.5 w-3.5" />
                  Statement {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <Scale className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
              </div>

              <p className="text-sm text-violet-200">{round.context}</p>
              <h3 className="mt-2 text-xl font-black text-white">{round.statement}</h3>

              <div className="mt-6 grid gap-3">
                {CATEGORIES.map((category, categoryIndex) => {
                  const isSelected = selected === category.id;
                  const stateClass = isSelected
                    ? category.id === round.correct
                      ? "border-emerald-300/70 bg-emerald-400/20"
                      : "border-rose-300/70 bg-rose-400/20"
                    : "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20";
                  return (
                    <button
                      key={category.id}
                      type="button"
                      disabled={selected !== null}
                      onClick={() => choose(category.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{categoryIndex + 1}]</span>
                        {category.label}
                      </p>
                      <p className="mt-1 text-xs text-violet-100">{category.description}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-end">
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
            <motion.section
              key="paused"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-violet-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="echo" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Review Paused</h3>
              <p className="mt-2 text-sm text-violet-100">Resume the current statement or restart the evidence run.</p>
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
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-violet-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="echo" mood={resolution === "verdict" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "verdict" ? "Verdict Verified" : "Analysis Misled"}
              </h3>
              <p className="mt-2 text-sm text-violet-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-violet-400 px-7 text-sm font-black text-slate-950">
                  Replay Review
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

