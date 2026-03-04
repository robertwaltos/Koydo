"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, PauseCircle, PlayCircle, ShieldAlert, ShieldPlus, Timer } from "lucide-react";
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
type Action = "approve" | "question" | "escalate";

type Claim = {
  id: string;
  text: string;
  evidence: number;
  risk: number;
  urgency: number;
  expected: Action;
  timeLimit: number;
};

const TOTAL_CLAIMS = 20;
const START_CREDIBILITY = 6;
const MAX_FOCUS = 5;
const ACTIONS: Array<{ id: Action; label: string; hint: string }> = [
  { id: "approve", label: "Approve", hint: "1 / A" },
  { id: "question", label: "Question", hint: "2 / S" },
  { id: "escalate", label: "Escalate", hint: "3 / D" },
];

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

function expectedAction(evidence: number, risk: number, urgency: number): Action {
  if (risk >= 70 || evidence <= 34) return "question";
  if (urgency >= 78 && evidence >= 60 && risk <= 54) return "escalate";
  return "approve";
}

function buildClaim(claimIndex: number): Claim {
  const rand = seeded(`zone-117:${claimIndex + 1}`);
  const tier = 1 + Math.floor(claimIndex / 4);
  const evidence = clamp(28 + Math.floor(rand() * 56) + tier, 10, 96);
  const risk = clamp(18 + Math.floor(rand() * 62) + Math.floor(rand() * tier * 4), 8, 96);
  const urgency = clamp(20 + Math.floor(rand() * 64) + Math.floor(rand() * tier * 3), 10, 96);
  const prompts = [
    "Transit witness log arrives with uneven metadata.",
    "Frontline packet reports high urgency with partial proofs.",
    "Archive synthesis memo includes conflicting references.",
    "Relay testimony carries strong evidence but odd timing.",
    "Critical alert includes verified chain and elevated risk.",
  ];
  const expected = expectedAction(evidence, risk, urgency);
  const timeLimit = Math.max(5, 10 - tier);

  return {
    id: `z117-c${claimIndex + 1}`,
    text: prompts[Math.floor(rand() * prompts.length)] ?? prompts[0],
    evidence,
    risk,
    urgency,
    expected,
    timeLimit,
  };
}

export default function Zone117EchoVerityCourt() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [claimIndex, setClaimIndex] = useState(0);
  const [claim, setClaim] = useState<Claim>(() => buildClaim(0));
  const [secondsLeft, setSecondsLeft] = useState(() => buildClaim(0).timeLimit);
  const [credibility, setCredibility] = useState(START_CREDIBILITY);
  const [focus, setFocus] = useState(1);
  const [evidenceMeter, setEvidenceMeter] = useState(52);
  const [riskMeter, setRiskMeter] = useState(48);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("compromised");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const claimResolvedRef = useRef(false);

  const tier = 1 + Math.floor(claimIndex / 4);
  const progress = useMemo(
    () => Math.min(100, Math.round((claimIndex / TOTAL_CLAIMS) * 100)),
    [claimIndex],
  );

  const finalize = useCallback(
    (nextResolution: Resolution, finalScore: number) => {
      setResolution(nextResolution);
      setPhase("complete");
      setMood(nextResolution === "certified" ? "cheering" : "sad");
      setMessage(
        nextResolution === "certified"
          ? "Echo: verity court certified."
          : "Echo: verity court compromised.",
      );
      if (completionSentRef.current) return;
      completionSentRef.current = true;
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "zone-117",
        difficulty: "medium",
        elapsedMs: Math.max(0, Date.now() - startedAt),
        interactions: Math.max(1, interactions),
        score: finalScore,
        maxScore: TOTAL_CLAIMS * 30,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    },
    [interactions, setMessage, setMood, startedAt],
  );

  const advanceClaim = useCallback(
    (nextScore: number, nextCredibility: number, nextEvidence: number, nextRisk: number) => {
      if (nextCredibility <= 0 || nextEvidence < 16 || nextRisk > 86) {
        finalize("compromised", nextScore);
        return;
      }

      const nextClaimIndex = claimIndex + 1;
      if (nextClaimIndex >= TOTAL_CLAIMS) {
        finalize("certified", nextScore);
        return;
      }

      const nextClaim = buildClaim(nextClaimIndex);
      claimResolvedRef.current = false;
      setClaimIndex(nextClaimIndex);
      setClaim(nextClaim);
      setSecondsLeft(nextClaim.timeLimit);
    },
    [claimIndex, finalize],
  );

  const timeoutClaim = useCallback(() => {
    const nextScore = Math.max(0, score - 8);
    setScore(nextScore);
    setCombo(0);

    if (focus > 0) {
      setFocus((value) => value - 1);
      setMessage("Timeout absorbed by focus reserve.");
      setMood("thinking");
      void hapticSelection();
      window.setTimeout(() => {
        advanceClaim(nextScore, credibility, evidenceMeter, riskMeter);
      }, 260);
      return;
    }

    const nextCredibility = credibility - 1;
    const nextRisk = clamp(riskMeter + 4, 0, 100);
    setCredibility(nextCredibility);
    setRiskMeter(nextRisk);
    setMessage("No ruling submitted. Credibility dropped.");
    setMood("sad");
    void hapticError();

    window.setTimeout(() => {
      advanceClaim(nextScore, nextCredibility, evidenceMeter, nextRisk);
    }, 260);
  }, [
    advanceClaim,
    credibility,
    evidenceMeter,
    focus,
    riskMeter,
    score,
    setMessage,
    setMood,
  ]);

  const chooseAction = useCallback(
    (action: Action) => {
      if (phase !== "playing" || claimResolvedRef.current) return;
      claimResolvedRef.current = true;
      setInteractions((value) => value + 1);

      const correct = action === claim.expected;
      const actionEvidenceDelta =
        action === "approve"
          ? Math.round(claim.evidence / 10)
          : action === "question"
            ? 4
            : -2;
      const actionRiskDelta =
        action === "approve"
          ? Math.round(claim.risk / 12)
          : action === "question"
            ? -Math.round(claim.risk / 10)
            : -Math.round(8 + claim.urgency / 10);

      const nextEvidence = clamp(evidenceMeter + actionEvidenceDelta, 0, 100);
      let nextRisk = clamp(riskMeter + actionRiskDelta, 0, 100);
      let nextCredibility = credibility;
      let nextFocus = focus;
      let nextScore = score;
      let nextCombo = combo;
      let nextBest = bestCombo;

      if (correct) {
        nextCombo += 1;
        nextBest = Math.max(nextBest, nextCombo);
        nextScore += 13 + Math.min(10, nextCombo * 2) + Math.floor(tier / 2);

        if (nextCombo > 0 && nextCombo % 3 === 0) {
          nextFocus = Math.min(MAX_FOCUS, nextFocus + 1);
          setMessage("Cascade streak secured. +1 focus.");
        } else {
          setMessage("Ruling aligned with evidence pattern.");
        }
        setMood("happy");
        void hapticSuccess();
      } else {
        nextCombo = 0;
        nextScore = Math.max(0, nextScore - 6);
        nextRisk = clamp(nextRisk + 4, 0, 100);

        if (nextFocus > 0) {
          nextFocus -= 1;
          setMessage("Focus reserve softened incorrect ruling.");
          setMood("thinking");
          void hapticSelection();
        } else {
          nextCredibility -= 1;
          setMessage(`Incorrect ruling. Expected ${claim.expected}.`);
          setMood("sad");
          void hapticError();
        }
      }

      setEvidenceMeter(nextEvidence);
      setRiskMeter(nextRisk);
      setCredibility(nextCredibility);
      setFocus(nextFocus);
      setScore(nextScore);
      setCombo(nextCombo);
      setBestCombo(nextBest);

      window.setTimeout(() => {
        advanceClaim(nextScore, nextCredibility, nextEvidence, nextRisk);
      }, 280);
    },
    [
      advanceClaim,
      bestCombo,
      claim,
      combo,
      credibility,
      evidenceMeter,
      focus,
      phase,
      riskMeter,
      score,
      setMessage,
      setMood,
      tier,
    ],
  );

  const stabilize = useCallback(() => {
    if (phase !== "playing" || focus <= 0 || credibility >= START_CREDIBILITY) return;
    setFocus((value) => value - 1);
    setCredibility((value) => Math.min(START_CREDIBILITY, value + 1));
    setRiskMeter((value) => clamp(value - 3, 0, 100));
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Dossier stabilization restored one credibility.");
    void hapticSelection();
  }, [credibility, focus, phase, setMessage, setMood]);

  const start = useCallback(() => {
    const firstClaim = buildClaim(0);
    setPhase("playing");
    setClaimIndex(0);
    setClaim(firstClaim);
    setSecondsLeft(firstClaim.timeLimit);
    setCredibility(START_CREDIBILITY);
    setFocus(1);
    setEvidenceMeter(52);
    setRiskMeter(48);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setResolution("compromised");
    setInteractions(0);
    claimResolvedRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Echo: classify each claim before the docket timer expires.");
    void hapticSelection();
  }, [setMessage, setMood]);

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = window.setInterval(() => {
      setSecondsLeft((value) => {
        if (claimResolvedRef.current) return value;
        const next = value - 1;
        if (next <= 0) {
          claimResolvedRef.current = true;
          window.setTimeout(() => timeoutClaim(), 0);
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [phase, claim.id, timeoutClaim]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "1" || key === "a") {
        event.preventDefault();
        chooseAction("approve");
      } else if (key === "2" || key === "s") {
        event.preventDefault();
        chooseAction("question");
      } else if (key === "3" || key === "d") {
        event.preventDefault();
        chooseAction("escalate");
      } else if (key === "r") {
        event.preventDefault();
        stabilize();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [chooseAction, phase, stabilize]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(34,211,238,0.22),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(8,145,178,0.22),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Zone 117</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Verity Court</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-cyan-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Credibility {credibility}/{START_CREDIBILITY}</span>
            <span>Focus {focus}/{MAX_FOCUS}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-cyan-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-cyan-100/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="echo" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-cyan-100">Balance evidence and risk while issuing fast, accurate rulings.</p>
                <PhysicalButton onClick={start} className="h-12 bg-cyan-400 px-8 text-sm font-black text-slate-950">
                  Start Verity Court
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key={claim.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-cyan-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-cyan-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Claim {claimIndex + 1}/{TOTAL_CLAIMS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <Timer className="h-3.5 w-3.5" />
                  {secondsLeft}s
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
              </div>

              <p className="text-sm text-cyan-100">{claim.text}</p>

              <div className="mt-3 grid gap-2 text-xs text-cyan-100 sm:grid-cols-3">
                <p className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 px-3 py-2">Evidence Signal: {claim.evidence}</p>
                <p className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 px-3 py-2">Risk Load: {claim.risk}</p>
                <p className="rounded-xl border border-cyan-100/25 bg-cyan-100/10 px-3 py-2">Urgency: {claim.urgency}</p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-100/25 bg-black/30 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200">Evidence Meter {evidenceMeter}</p>
                  <div className="mt-2 h-2 rounded-full bg-cyan-100/15">
                    <motion.div className="h-full bg-cyan-300" animate={{ width: `${evidenceMeter}%` }} transition={{ duration: 0.2 }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-cyan-100/25 bg-black/30 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200">Risk Meter {riskMeter}</p>
                  <div className="mt-2 h-2 rounded-full bg-cyan-100/15">
                    <motion.div className="h-full bg-cyan-500" animate={{ width: `${riskMeter}%` }} transition={{ duration: 0.2 }} />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {ACTIONS.map((action) => (
                  <PhysicalButton key={action.id} onClick={() => chooseAction(action.id)} className="h-11 bg-cyan-300 text-xs font-black text-slate-950">
                    <span className="flex flex-col leading-tight">
                      <span>{action.label}</span>
                      <span className="text-[10px] opacity-70">{action.hint}</span>
                    </span>
                  </PhysicalButton>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={stabilize} disabled={focus <= 0 || credibility >= START_CREDIBILITY} className="h-10 bg-cyan-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Stabilize
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
              <h3 className="mt-3 text-2xl font-black text-white">Verity Court Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-cyan-400 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Resume
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={start} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">
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
                {resolution === "certified" ? "Verity Court Certified" : "Verity Court Compromised"}
              </h3>
              <p className="mt-2 text-sm text-cyan-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-cyan-400 px-7 text-sm font-black text-slate-950">
                  Replay Verity Court
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
