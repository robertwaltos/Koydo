"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, ScanSearch, Scale } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Outcome = "verified" | "contested";
type Relation = "supports" | "challenges" | "off-topic";

type TruthRound = {
  id: string;
  claim: string;
  evidence: string;
  relation: Relation;
  note: string;
};

const ROUND_COUNT = 17;
const START_CREDIBILITY = 4;
const MAX_PROBES = 3;

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

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundWindowMs(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 5);
  return Math.max(2100, 5600 - (tier - 1) * 750);
}

const CLAIMS = [
  "Community gardens improved weekly produce access in the district.",
  "Later school start times improved attendance for teens.",
  "Recycling incentives reduced cafeteria waste this semester.",
  "After-school coding clubs improved math confidence.",
  "Protected bike lanes reduced traffic incidents near campuses.",
];

const SUPPORTING_EVIDENCE = [
  "City records show a 23% rise in produce pickups after garden rollout.",
  "Attendance logs increased by 8% after start times shifted by 35 minutes.",
  "Waste audits measured 18% less landfill output after incentive launch.",
  "Survey results: students in coding club reported a 31% confidence jump.",
  "Police reports show a 19% decline in incidents along protected corridors.",
];

const CHALLENGING_EVIDENCE = [
  "Three comparable districts saw no attendance change after identical schedule shifts.",
  "Waste output increased at two schools that used the same incentive design.",
  "Control classrooms without coding clubs gained confidence at the same rate.",
  "Incident rates rose in neighborhoods where lane protection was only partial.",
  "Produce access fell in areas where gardens had low maintenance staffing.",
];

const OFF_TOPIC_EVIDENCE = [
  "A concert series sold out downtown after a weather break.",
  "New library furniture lowered average checkout wait by 12 seconds.",
  "A local app reached 10,000 downloads in its first month.",
  "Museum attendance increased after a weekend festival.",
  "Train station murals were completed ahead of schedule.",
];

function buildRound(roundIndex: number): TruthRound {
  const random = seeded(`arcade-067:${roundIndex + 1}`);
  const claimIndex = Math.floor(random() * CLAIMS.length);
  const relationRoll = random();
  const relation: Relation =
    relationRoll < 0.36 ? "supports" : relationRoll < 0.72 ? "challenges" : "off-topic";

  let evidence: string;
  if (relation === "supports") {
    evidence = SUPPORTING_EVIDENCE[claimIndex] ?? SUPPORTING_EVIDENCE[0]!;
  } else if (relation === "challenges") {
    evidence = CHALLENGING_EVIDENCE[claimIndex] ?? CHALLENGING_EVIDENCE[0]!;
  } else {
    evidence = OFF_TOPIC_EVIDENCE[Math.floor(random() * OFF_TOPIC_EVIDENCE.length)] ?? OFF_TOPIC_EVIDENCE[0]!;
  }

  const notes: Record<Relation, string> = {
    supports: "Aligned metric and direction with direct topic match.",
    challenges: "Same topic, opposite trend or conflicting measure.",
    "off-topic": "Evidence does not evaluate the claim's core topic.",
  };

  return {
    id: `a067-r${roundIndex + 1}`,
    claim: CLAIMS[claimIndex] ?? CLAIMS[0]!,
    evidence,
    relation,
    note: notes[relation],
  };
}

const ROUNDS = Array.from({ length: ROUND_COUNT }, (_, index) => buildRound(index));

export default function Arcade067EchoTruthlineProtocol() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [credibility, setCredibility] = useState(START_CREDIBILITY);
  const [probes, setProbes] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedRelation, setSelectedRelation] = useState<Relation | null>(null);
  const [hint, setHint] = useState("");
  const [timeLeftMs, setTimeLeftMs] = useState(roundWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("contested");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const tier = 1 + Math.floor(roundIndex / 5);
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)),
    [roundIndex],
  );

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "verified" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "verified"
        ? "Echo: protocol verified. You tracked evidence relationships cleanly."
        : "Echo: protocol contested. Rebuild argument discipline.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-067",
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
    setCredibility(START_CREDIBILITY);
    setProbes(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedRelation(null);
    setHint("");
    setTimeLeftMs(roundWindowMs(0));
    setOutcome("contested");
    setInteractions(0);
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("happy");
    setMessage("Echo: label each evidence relationship to the active claim.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerProbe = () => {
    if (phase !== "playing" || probes <= 0 || !round || settlingRef.current) return;
    setProbes((value) => value - 1);
    setInteractions((value) => value + 1);
    setScore((value) => Math.max(0, value - 2));
    setHint(round.note);
    setMood("thinking");
    setMessage("Echo: protocol probe surfaced argument metadata.");
    void hapticSelection();
  };

  const resolveRelation = (relation: Relation, timedOut = false) => {
    if (phase !== "playing" || !round || settlingRef.current) return;
    settlingRef.current = true;
    setSelectedRelation(relation);
    setInteractions((value) => value + 1);
    const nextInteractions = interactions + 1;

    const correct = !timedOut && relation === round.relation;
    let nextCredibility = credibility;
    let nextProbes = probes;
    let nextScore = score;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);
    const finalRound = roundIndex >= ROUND_COUNT - 1;

    if (correct) {
      nextScore += 11 + Math.min(10, nextCombo * 2) + tier;
      if (nextCombo > 0 && nextCombo % 5 === 0) {
        nextProbes = clamp(nextProbes + 1, 0, MAX_PROBES);
        setMessage("Reasoning streak bonus: +1 probe.");
      } else {
        setMessage("Correct relation identified.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextCredibility = Math.max(0, nextCredibility - 1);
      nextScore = Math.max(0, nextScore - (timedOut ? 9 : 7));
      setMessage(
        timedOut
          ? "Timeout. Relation unresolved."
          : `Incorrect relation. Protocol expected ${round.relation}.`,
      );
      setMood("sad");
      void hapticError();
    }

    setCredibility(nextCredibility);
    setProbes(nextProbes);
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextCredibility <= 0) {
        settlingRef.current = false;
        finalize("contested", nextScore, nextInteractions);
        return;
      }
      if (finalRound) {
        const finalScore = nextScore + nextCredibility * 6 + nextBestCombo;
        setScore(finalScore);
        settlingRef.current = false;
        finalize("verified", finalScore, nextInteractions);
        return;
      }
      const nextRound = roundIndex + 1;
      setRoundIndex(nextRound);
      setSelectedRelation(null);
      setHint("");
      setTimeLeftMs(roundWindowMs(nextRound));
      settlingRef.current = false;
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing" || selectedRelation !== null || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selectedRelation]);

  useEffect(() => {
    if (phase !== "playing" || selectedRelation !== null || timeLeftMs > 0 || settlingRef.current) return;
    const timeout = window.setTimeout(() => resolveRelation("off-topic", true), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, selectedRelation, timeLeftMs, resolveRelation]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key === "1") {
        event.preventDefault();
        resolveRelation("supports");
        return;
      }
      if (event.key === "2") {
        event.preventDefault();
        resolveRelation("challenges");
        return;
      }
      if (event.key === "3") {
        event.preventDefault();
        resolveRelation("off-topic");
        return;
      }
      if (lower === "h") {
        event.preventDefault();
        triggerProbe();
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
  }, [phase, resolveRelation, restart, triggerProbe]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-indigo-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(129,140,248,0.24),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(99,102,241,0.18),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-indigo-100">Arcade 067</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Truthline Protocol</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-indigo-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Credibility {credibility}</span>
            <span>Probes {probes}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-indigo-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-violet-300" animate={{ width: `${timeLeftMs / roundWindowMs(roundIndex) * 100}%` }} transition={{ duration: 0.1 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-indigo-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="echo" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-indigo-100">Judge whether the evidence `supports`, `challenges`, or is `off-topic` for each claim. Keys: `1/2/3`, probe: `H`.</p>
                <PhysicalButton onClick={start} className="h-12 bg-indigo-300 px-8 text-sm font-black text-slate-950">Start Protocol</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" && round ? (
            <motion.section key={round.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-indigo-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200/30 px-3 py-1">
                  <Scale className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT} | Tier {tier}
                </span>
                <span>{Math.max(0, timeLeftMs / 1000).toFixed(1)}s</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-indigo-100/25 bg-indigo-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-indigo-200">Claim</p>
                  <p className="text-sm text-white">{round.claim}</p>
                </div>
                <div className="rounded-xl border border-indigo-100/25 bg-indigo-100/10 p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-indigo-200">Evidence Snippet</p>
                  <p className="text-sm text-white">{round.evidence}</p>
                </div>
              </div>
              {hint ? <p className="mt-2 text-xs text-indigo-200">{hint}</p> : null}

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { key: "supports" as Relation, label: "[1] Supports" },
                  { key: "challenges" as Relation, label: "[2] Challenges" },
                  { key: "off-topic" as Relation, label: "[3] Off-topic" },
                ].map((option) => (
                  <button
                    key={`${round.id}-${option.key}`}
                    type="button"
                    disabled={selectedRelation !== null}
                    onClick={() => resolveRelation(option.key)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      selectedRelation === option.key
                        ? "border-indigo-300/80 bg-indigo-400/20"
                        : "border-indigo-100/25 bg-indigo-100/10 hover:bg-indigo-100/20"
                    }`}
                  >
                    <p className="text-sm font-black text-white">{option.label}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerProbe} disabled={probes <= 0} className="h-10 bg-indigo-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1"><ScanSearch className="h-4 w-4" />Probe Hint [H]</span>
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
              <h3 className="mt-3 text-2xl font-black text-white">Protocol Paused</h3>
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
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "verified" ? "Protocol Verified" : "Protocol Contested"}</h3>
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
