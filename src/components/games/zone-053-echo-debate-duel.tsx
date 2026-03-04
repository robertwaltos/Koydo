"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareWarning, PauseCircle, PlayCircle, Scale, Sword } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "verdict" | "overruled";

type DebateOption = {
  label: string;
  playerDelta: number;
  rivalDelta: number;
  credibilityDelta: number;
  note: string;
};

type DebateRound = {
  id: string;
  claim: string;
  context: string;
  options: [DebateOption, DebateOption, DebateOption];
};

const START_PLAYER_INFLUENCE = 22;
const START_RIVAL_INFLUENCE = 26;
const START_CREDIBILITY = 4;

const ROUNDS: DebateRound[] = [
  {
    id: "z053-r1",
    claim: "The outage happened because everyone ignored protocol.",
    context: "Opening statement in town hall hearing.",
    options: [
      { label: "Request log evidence before assigning blame", playerDelta: 10, rivalDelta: 2, credibilityDelta: 1, note: "Evidence-first framing." },
      { label: "Mock the speaker personally", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Escalates hostility." },
      { label: "Agree without checking details", playerDelta: 3, rivalDelta: 6, credibilityDelta: -1, note: "Weak concession." },
    ],
  },
  {
    id: "z053-r2",
    claim: "Repair budget should be cut despite increased failures.",
    context: "Budget committee challenge.",
    options: [
      { label: "Present trend chart linking failures to underfunding", playerDelta: 11, rivalDelta: 2, credibilityDelta: 1, note: "Data-backed rebuttal." },
      { label: "Repeat slogan about efficiency", playerDelta: 4, rivalDelta: 6, credibilityDelta: -1, note: "No direct argument." },
      { label: "Call the plan impossible with no numbers", playerDelta: 3, rivalDelta: 7, credibilityDelta: -1, note: "Unsupported pushback." },
    ],
  },
  {
    id: "z053-r3",
    claim: "Student performance dropped because homework is too easy.",
    context: "School board cross-exam.",
    options: [
      { label: "Differentiate by citing attendance and sleep data", playerDelta: 9, rivalDelta: 3, credibilityDelta: 1, note: "Multi-factor explanation." },
      { label: "Dismiss concern as overreaction", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Deflective response." },
      { label: "Blame social media only", playerDelta: 4, rivalDelta: 6, credibilityDelta: -1, note: "Single-cause oversimplification." },
    ],
  },
  {
    id: "z053-r4",
    claim: "Transit emissions are irrelevant to local climate planning.",
    context: "City climate forum.",
    options: [
      { label: "Show local emissions inventory and impact model", playerDelta: 10, rivalDelta: 2, credibilityDelta: 1, note: "Direct causal evidence." },
      { label: "Say everyone already knows this", playerDelta: 3, rivalDelta: 7, credibilityDelta: -1, note: "No proof presented." },
      { label: "Attack the moderator’s neutrality", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Ad hominem fallacy." },
    ],
  },
  {
    id: "z053-r5",
    claim: "Cybersecurity drills are unnecessary after one calm quarter.",
    context: "Operations risk review.",
    options: [
      { label: "Reference attack frequency baselines and near misses", playerDelta: 11, rivalDelta: 3, credibilityDelta: 1, note: "Prevention argument." },
      { label: "Promise everything is safe forever", playerDelta: 2, rivalDelta: 9, credibilityDelta: -2, note: "Overconfident claim." },
      { label: "Pivot to unrelated staffing topic", playerDelta: 4, rivalDelta: 6, credibilityDelta: -1, note: "Topic drift." },
    ],
  },
  {
    id: "z053-r6",
    claim: "Public parks have no measurable health value.",
    context: "Community investment debate.",
    options: [
      { label: "Cite longitudinal activity and health outcome data", playerDelta: 10, rivalDelta: 3, credibilityDelta: 1, note: "Outcome-driven rebuttal." },
      { label: "Argue parks just feel nice", playerDelta: 4, rivalDelta: 6, credibilityDelta: -1, note: "Subjective framing." },
      { label: "Ridicule opposing experts", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Damages trust." },
    ],
  },
  {
    id: "z053-r7",
    claim: "AI tutoring should replace all human teachers now.",
    context: "Education technology hearing.",
    options: [
      { label: "Propose hybrid model with evidence on outcomes", playerDelta: 9, rivalDelta: 3, credibilityDelta: 1, note: "Balanced policy case." },
      { label: "Insist change is inevitable", playerDelta: 4, rivalDelta: 7, credibilityDelta: -1, note: "Appeal to inevitability." },
      { label: "Dismiss teacher feedback entirely", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Alienates stakeholders." },
    ],
  },
  {
    id: "z053-r8",
    claim: "Water testing can be skipped if water looks clear.",
    context: "Public safety briefing.",
    options: [
      { label: "Explain invisible contaminants and testing thresholds", playerDelta: 11, rivalDelta: 2, credibilityDelta: 1, note: "Scientific clarification." },
      { label: "Respond with panic language", playerDelta: 3, rivalDelta: 7, credibilityDelta: -1, note: "Low trust response." },
      { label: "Agree and move on quickly", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Concedes harmful claim." },
    ],
  },
  {
    id: "z053-r9",
    claim: "Emergency drills waste time because disasters are rare.",
    context: "District preparedness review.",
    options: [
      { label: "Frame drills as low-frequency high-impact mitigation", playerDelta: 10, rivalDelta: 3, credibilityDelta: 1, note: "Risk literacy framing." },
      { label: "Counter with fear-heavy rhetoric", playerDelta: 3, rivalDelta: 7, credibilityDelta: -1, note: "Emotion over reasoning." },
      { label: "Shift blame to previous teams", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Avoids present evidence." },
    ],
  },
  {
    id: "z053-r10",
    claim: "Nutrition programs have no effect on student concentration.",
    context: "Education policy panel.",
    options: [
      { label: "Cite trial data on meal access and focus metrics", playerDelta: 11, rivalDelta: 3, credibilityDelta: 1, note: "Evidence-backed policy response." },
      { label: "Use anecdote from one classroom", playerDelta: 4, rivalDelta: 6, credibilityDelta: -1, note: "Insufficient sample." },
      { label: "Question whether concentration matters", playerDelta: 1, rivalDelta: 9, credibilityDelta: -2, note: "Undermines own position." },
    ],
  },
  {
    id: "z053-r11",
    claim: "Bridge inspections can be delayed to save costs.",
    context: "Infrastructure budget debate.",
    options: [
      { label: "Present failure-risk cost model for delayed maintenance", playerDelta: 10, rivalDelta: 3, credibilityDelta: 1, note: "Long-horizon economics." },
      { label: "Say engineers worry too much", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Dismisses expertise." },
      { label: "Offer no alternative timeline", playerDelta: 4, rivalDelta: 6, credibilityDelta: -1, note: "Incomplete plan." },
    ],
  },
  {
    id: "z053-r12",
    claim: "Heat alerts are exaggerated and reduce productivity.",
    context: "Workplace safety hearing.",
    options: [
      { label: "Show injury data and productivity rebound after protections", playerDelta: 11, rivalDelta: 2, credibilityDelta: 1, note: "Safety + performance framing." },
      { label: "Claim everyone should tough it out", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Ignores evidence." },
      { label: "Argue alerts are a trend", playerDelta: 3, rivalDelta: 7, credibilityDelta: -1, note: "Vague dismissal." },
    ],
  },
  {
    id: "z053-r13",
    claim: "Battery recycling policy is too complex to enforce.",
    context: "Environmental compliance hearing.",
    options: [
      { label: "Provide phased rollout with measurable checkpoints", playerDelta: 9, rivalDelta: 3, credibilityDelta: 1, note: "Implementable roadmap." },
      { label: "Insist complexity means inaction", playerDelta: 3, rivalDelta: 7, credibilityDelta: -1, note: "False dilemma." },
      { label: "Blame consumers only", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "No systems solution." },
    ],
  },
  {
    id: "z053-r14",
    claim: "Mental health supports are outside school responsibility.",
    context: "School governance debate.",
    options: [
      { label: "Link supports to attendance and achievement outcomes", playerDelta: 10, rivalDelta: 3, credibilityDelta: 1, note: "Outcome and duty alignment." },
      { label: "Say families should handle all issues", playerDelta: 3, rivalDelta: 7, credibilityDelta: -1, note: "Oversimplified stance." },
      { label: "Ignore student data and repeat policy slogans", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Non-responsive." },
    ],
  },
  {
    id: "z053-r15",
    claim: "Final claim: long-term planning is impossible in uncertain times.",
    context: "Closing exchange before verdict.",
    options: [
      { label: "Argue for adaptive planning with scenario branches", playerDelta: 12, rivalDelta: 2, credibilityDelta: 1, note: "Strong strategic close." },
      { label: "Concede uncertainty means no plan", playerDelta: 2, rivalDelta: 8, credibilityDelta: -2, note: "Surrenders framework." },
      { label: "Counter with vague optimism", playerDelta: 4, rivalDelta: 6, credibilityDelta: -1, note: "Weak closing argument." },
    ],
  },
];

const ROUND_COUNT = ROUNDS.length;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function Zone053EchoDebateDuel() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [playerInfluence, setPlayerInfluence] = useState(START_PLAYER_INFLUENCE);
  const [rivalInfluence, setRivalInfluence] = useState(START_RIVAL_INFLUENCE);
  const [credibility, setCredibility] = useState(START_CREDIBILITY);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("overruled");
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
        ? "Echo: Debate discipline held. Verdict is in your favor."
        : "Echo: Opponent narrative dominated. Rebuild evidence-first flow.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-053",
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
    setPlayerInfluence(START_PLAYER_INFLUENCE);
    setRivalInfluence(START_RIVAL_INFLUENCE);
    setCredibility(START_CREDIBILITY);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setResolution("overruled");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Echo: Build influence through evidence-backed responses.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    const option = round.options[optionIndex];
    if (!option) return;

    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const evidenceAdvantage = option.playerDelta - option.rivalDelta;
    const strongResponse = evidenceAdvantage >= 6 && option.credibilityDelta >= 0;
    const passiveRivalPressure = 2 + tier;

    const nextPlayerInfluence = clamp(
      playerInfluence + option.playerDelta + (strongResponse ? Math.min(3, combo + 1) : 0),
      0,
      100,
    );
    const nextRivalInfluence = clamp(
      rivalInfluence + option.rivalDelta + (strongResponse ? 0 : passiveRivalPressure),
      0,
      100,
    );
    const nextCredibility = clamp(
      credibility + option.credibilityDelta - (strongResponse ? 0 : 1),
      0,
      6,
    );

    const nextCombo = strongResponse ? combo + 1 : 0;
    const nextScore = strongResponse
      ? score + 11 + Math.min(6, nextCombo)
      : Math.max(0, score - (tier >= 3 ? 6 : 4));

    setPlayerInfluence(nextPlayerInfluence);
    setRivalInfluence(nextRivalInfluence);
    setCredibility(nextCredibility);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setMood(strongResponse ? "happy" : "sad");
    setMessage(strongResponse ? "Point secured with evidence." : `Weak rebuttal. ${option.note}`);
    if (strongResponse) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const finalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextCredibility <= 0 || nextRivalInfluence >= 100) {
        finalize("overruled", nextScore);
        return;
      }
      if (nextPlayerInfluence >= 100) {
        finalize("verdict", nextScore);
        return;
      }
      if (finalRound) {
        if (nextPlayerInfluence > nextRivalInfluence && nextCredibility > 0) {
          finalize("verdict", nextScore);
        } else {
          finalize("overruled", nextScore);
        }
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedIndex(null);
    }, 560);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1" || event.key === "2" || event.key === "3") {
        event.preventDefault();
        choose(Number(event.key) - 1);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(167,139,250,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(139,92,246,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">Zone 053</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Debate Duel</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-violet-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Credibility {credibility}/{START_CREDIBILITY}</span>
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
                  Duel through 15 public claims. Win influence with disciplined, evidence-driven rebuttals.
                </p>
                <ul className="space-y-1 text-xs text-violet-100">
                  <li>Win condition: reach influence 100 or finish ahead on final round.</li>
                  <li>Fail condition: rival influence reaches 100 or credibility drops to zero.</li>
                  <li>Controls: click options or keys 1-3.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-violet-400 px-8 text-sm font-black text-slate-950">
                  Start Debate
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
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-violet-100/25 bg-violet-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-violet-200">Your Influence</p>
                  <p className="mt-1 text-xl font-black text-white">{playerInfluence}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-emerald-300" style={{ width: `${playerInfluence}%` }} />
                  </div>
                </div>
                <div className="rounded-2xl border border-violet-100/25 bg-violet-100/10 p-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-violet-200">Rival Influence</p>
                  <p className="mt-1 text-xl font-black text-white">{rivalInfluence}</p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/40">
                    <div className="h-full bg-rose-300" style={{ width: `${rivalInfluence}%` }} />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-violet-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <Scale className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <Sword className="h-3.5 w-3.5" />
                  Tier {tier}
                </span>
              </div>

              <p className="text-xs text-violet-200">{round.context}</p>
              <h3 className="mt-1 text-xl font-black text-white">{round.claim}</h3>

              <div className="mt-5 grid gap-3">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const stateClass = selected
                    ? "border-violet-300/80 bg-violet-400/20"
                    : "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20";
                  return (
                    <button
                      key={`${round.id}-${option.label}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${stateClass}`}
                    >
                      <p className="text-sm font-black text-white">
                        <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                        {option.label}
                      </p>
                      <p className="mt-1 text-xs text-violet-100">{option.note}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-violet-200">
                  <MessageSquareWarning className="h-3.5 w-3.5" />
                  Evidence advantage drives combo and score.
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
            <motion.section
              key="paused"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-violet-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="echo" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Debate Paused</h3>
              <p className="mt-2 text-sm text-violet-100">Resume this exchange or restart from opening arguments.</p>
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
                {resolution === "verdict" ? "Verdict Won" : "Overruled"}
              </h3>
              <p className="mt-2 text-sm text-violet-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <p className="mt-2 text-xs text-violet-200">
                Final influence: you {playerInfluence} vs rival {rivalInfluence}.
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-violet-400 px-7 text-sm font-black text-slate-950">
                  Replay Debate
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
