"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music4, PauseCircle, PlayCircle, Repeat } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "preview" | "playing" | "paused" | "complete";
type Outcome = "harmonized" | "fractured";

const ROUND_COUNT = 14;
const START_HEARTS = 4;
const MAX_REPLAYS = 3;

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

function buildStep(roundIndex: number) {
  const random = seeded(`arcade-064:${roundIndex + 1}`);
  return Math.floor(random() * 4);
}

const MASTER_SEQUENCE = Array.from({ length: ROUND_COUNT }, (_, index) => buildStep(index));

function inputWindowMs(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 4);
  return Math.max(2200, 5200 - (tier - 1) * 650);
}

function previewStepMs(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 4);
  return Math.max(260, 540 - (tier - 1) * 60);
}

export default function Arcade064LunaSequenceSymphony() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [hearts, setHearts] = useState(START_HEARTS);
  const [replays, setReplays] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [activeLane, setActiveLane] = useState<number | null>(null);
  const [previewLane, setPreviewLane] = useState<number | null>(null);
  const [timeLeftMs, setTimeLeftMs] = useState(inputWindowMs(0));
  const [outcome, setOutcome] = useState<Outcome>("fractured");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const settlingRef = useRef(false);

  const currentSequence = useMemo(
    () => MASTER_SEQUENCE.slice(0, roundIndex + 1),
    [roundIndex],
  );
  const tier = 1 + Math.floor(roundIndex / 4);
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)),
    [roundIndex],
  );

  const finalize = (nextOutcome: Outcome, finalScore: number, finalInteractions: number) => {
    setOutcome(nextOutcome);
    setPhase("complete");
    setMood(nextOutcome === "harmonized" ? "cheering" : "sad");
    setMessage(
      nextOutcome === "harmonized"
        ? "Luna: complete sequence harmonized. Stage is fully stable."
        : "Luna: sequence fractured. Restart and rebuild the rhythm.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "arcade-064",
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
    setPhase("preview");
    setRoundIndex(0);
    setSequenceIndex(0);
    setHearts(START_HEARTS);
    setReplays(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setActiveLane(null);
    setPreviewLane(null);
    setTimeLeftMs(inputWindowMs(0));
    setOutcome("fractured");
    setInteractions(0);
    settlingRef.current = false;
    completionSentRef.current = false;
    sessionIdRef.current = createLegacySessionId();
    setStartedAt(Date.now());
    setMood("thinking");
    setMessage("Luna: memorize the lane melody, then mirror it exactly.");
    void hapticSelection();
  };

  const restart = () => start();

  const triggerReplay = () => {
    if (phase !== "playing" || replays <= 0 || settlingRef.current) return;
    setReplays((value) => value - 1);
    setScore((value) => Math.max(0, value - 4));
    setSequenceIndex(0);
    setPhase("preview");
    setInteractions((value) => value + 1);
    setMood("thinking");
    setMessage("Luna: replaying the phrase. Watch each lane cue.");
    void hapticSelection();
  };

  const resolveInput = (lane: number, timedOut = false) => {
    if (phase !== "playing" || settlingRef.current) return;
    const expectedLane = currentSequence[sequenceIndex] ?? 0;
    settlingRef.current = true;
    setInteractions((value) => value + 1);

    const nextInteractions = interactions + 1;
    const correct = !timedOut && lane === expectedLane;
    const completedRound = sequenceIndex >= currentSequence.length - 1;

    let nextScore = score;
    let nextHearts = hearts;
    let nextReplays = replays;
    const nextCombo = correct ? combo + 1 : 0;
    const nextBestCombo = Math.max(bestCombo, nextCombo);

    setActiveLane(lane);

    if (correct) {
      nextScore += 10 + Math.min(12, nextCombo * 2) + tier;
      if (nextCombo > 0 && nextCombo % 5 === 0) {
        nextReplays = clamp(nextReplays + 1, 0, MAX_REPLAYS);
        setMessage("Luna: harmony streak bonus. +1 replay.");
      } else {
        setMessage("Correct lane. Keep the melody intact.");
      }
      setMood("happy");
      void hapticSuccess();
    } else {
      nextHearts = Math.max(0, nextHearts - 1);
      nextScore = Math.max(0, nextScore - (timedOut ? 8 : 7));
      setMessage(
        timedOut
          ? "Timing window collapsed. Phrase slipped."
          : `Wrong lane. Expected ${expectedLane + 1}.`,
      );
      setMood("sad");
      void hapticError();
    }

    setScore(nextScore);
    setHearts(nextHearts);
    setReplays(nextReplays);
    setCombo(nextCombo);
    setBestCombo(nextBestCombo);

    window.setTimeout(() => {
      if (nextHearts <= 0) {
        setActiveLane(null);
        settlingRef.current = false;
        finalize("fractured", nextScore, nextInteractions);
        return;
      }

      if (!correct) {
        setSequenceIndex(0);
        setPhase("preview");
        setActiveLane(null);
        settlingRef.current = false;
        return;
      }

      if (completedRound) {
        const isFinalRound = roundIndex >= ROUND_COUNT - 1;
        if (isFinalRound) {
          const finalScore = nextScore + nextHearts * 6 + nextBestCombo;
          setScore(finalScore);
          setActiveLane(null);
          settlingRef.current = false;
          finalize("harmonized", finalScore, nextInteractions);
          return;
        }
        const nextRound = roundIndex + 1;
        setRoundIndex(nextRound);
        setSequenceIndex(0);
        setPhase("preview");
        setTimeLeftMs(inputWindowMs(nextRound));
        setActiveLane(null);
        settlingRef.current = false;
        return;
      }

      setSequenceIndex((value) => value + 1);
      setTimeLeftMs(inputWindowMs(roundIndex));
      setActiveLane(null);
      settlingRef.current = false;
    }, 240);
  };

  useEffect(() => {
    if (phase !== "preview") return;
    const timers: number[] = [];
    const sequence = MASTER_SEQUENCE.slice(0, roundIndex + 1);
    const beatMs = previewStepMs(roundIndex);
    let cursor = 0;

    setMood("thinking");
    setMessage("Luna: watch the phrase, then replay it.");
    const resetFrame = window.setTimeout(() => {
      setPreviewLane(null);
      setActiveLane(null);
    }, 0);
    timers.push(resetFrame);

    const runBeat = () => {
      if (cursor >= sequence.length) {
        const handoff = window.setTimeout(() => {
          setPreviewLane(null);
          setActiveLane(null);
          setPhase("playing");
          setTimeLeftMs(inputWindowMs(roundIndex));
          setMood("happy");
          setMessage("Luna: your turn. Repeat the sequence.");
        }, 240);
        timers.push(handoff);
        return;
      }

      const lane = sequence[cursor] ?? 0;
      setPreviewLane(lane);
      setActiveLane(lane);

      const clearPulse = window.setTimeout(() => {
        setPreviewLane(null);
      }, Math.max(120, beatMs - 130));
      timers.push(clearPulse);

      const next = window.setTimeout(() => {
        cursor += 1;
        runBeat();
      }, beatMs);
      timers.push(next);
    };

    const startPreview = window.setTimeout(runBeat, 280);
    timers.push(startPreview);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [phase, roundIndex, setMessage, setMood]);

  useEffect(() => {
    if (phase !== "playing" || settlingRef.current) return;
    const timer = window.setInterval(() => {
      setTimeLeftMs((value) => Math.max(0, value - 100));
    }, 100);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, sequenceIndex]);

  useEffect(() => {
    if (phase !== "playing" || settlingRef.current || timeLeftMs > 0) return;
    const timeout = window.setTimeout(() => resolveInput(0, true), 0);
    return () => window.clearTimeout(timeout);
  }, [phase, timeLeftMs, resolveInput]);

  useEffect(() => {
    if (phase !== "playing" && phase !== "paused") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const lower = event.key.toLowerCase();
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        resolveInput(Number(event.key) - 1);
        return;
      }
      if (lower === "h") {
        event.preventDefault();
        triggerReplay();
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
  }, [phase, resolveInput, restart, triggerReplay]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-200/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,114,182,0.26),transparent_44%),radial-gradient(circle_at_84%_84%,rgba(192,132,252,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-100">Arcade 064</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Sequence Symphony</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}</span>
            <span>Replays {replays}</span>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div
            className="h-full bg-rose-300"
            animate={{ width: `${Math.max(0, (timeLeftMs / inputWindowMs(roundIndex)) * 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">
                  Watch Luna&apos;s lane melody, then mirror it with keys `1-4`. Use replay hint on `H`.
                </p>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-300 px-8 text-sm font-black text-slate-950">
                  Start Symphony
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "preview" ? (
            <motion.section key={`preview-${roundIndex}`} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6">
              <div className="mb-4 flex items-center justify-between text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-200/30 px-3 py-1">
                  <Music4 className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT} | Tier {tier}
                </span>
                <span>Previewing phrase</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                {[0, 1, 2, 3].map((lane) => (
                  <div
                    key={`preview-lane-${lane}`}
                    className={`rounded-2xl border px-3 py-5 text-center transition ${
                      previewLane === lane || activeLane === lane
                        ? "border-fuchsia-300/80 bg-fuchsia-400/20"
                        : "border-fuchsia-100/25 bg-fuchsia-100/10"
                    }`}
                  >
                    <p className="text-sm font-black text-white">Lane {lane + 1}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key={`playing-${roundIndex}-${sequenceIndex}`} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-200/30 px-3 py-1">
                  <Music4 className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT} | Step {sequenceIndex + 1}/{currentSequence.length}
                </span>
                <span>{Math.max(0, timeLeftMs / 1000).toFixed(1)}s</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                {[0, 1, 2, 3].map((lane) => (
                  <button
                    key={`play-lane-${lane}`}
                    type="button"
                    onClick={() => resolveInput(lane)}
                    className={`rounded-2xl border px-3 py-5 text-center transition ${
                      activeLane === lane
                        ? "border-fuchsia-300/80 bg-fuchsia-400/20"
                        : "border-fuchsia-100/25 bg-fuchsia-100/10 hover:bg-fuchsia-100/20"
                    }`}
                  >
                    <p className="text-sm font-black text-white">[{lane + 1}] Pulse</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <PhysicalButton onClick={triggerReplay} disabled={replays <= 0} className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950 disabled:opacity-40">
                  <span className="inline-flex items-center gap-1"><Repeat className="h-4 w-4" />Replay Hint [H]</span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-zinc-800 text-xs font-black text-white">
                  <span className="inline-flex items-center gap-1"><PauseCircle className="h-4 w-4" />Pause [P]</span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center"><MascotFriend id="luna" mood="thinking" size="lg" /></div>
              <h3 className="mt-3 text-2xl font-black text-white">Symphony Paused</h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-fuchsia-300 px-6 text-sm font-black text-slate-950">
                  <span className="inline-flex items-center gap-1"><PlayCircle className="h-4 w-4" />Resume</span>
                </PhysicalButton>
                <PhysicalButton onClick={restart} className="h-11 bg-zinc-800 px-6 text-sm font-black text-white">Restart [R]</PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-200/30 bg-black/35 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={outcome === "harmonized" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">{outcome === "harmonized" ? "Symphony Harmonized" : "Symphony Fractured"}</h3>
              <p className="mt-2 text-sm text-fuchsia-100">Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}</p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-300 px-7 text-sm font-black text-slate-950">Run Again</PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
