"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Drum, PauseCircle, PlayCircle, Sparkles, Timer } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "encore" | "breakdown";
type BeatState = "pending" | "hit" | "miss";

const TOTAL_BEATS = 32;
const START_HEARTS = 4;
const HIT_WINDOW_MS = 210;
const PERFECT_WINDOW_MS = 85;
const BASE_INTERVAL_MS = 860;

function marker(index: number) {
  const markers = ["♪", "♩", "♬", "♫"] as const;
  return markers[index % markers.length]!;
}

export default function Zone064LunaBeatlineRun() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [beatIndex, setBeatIndex] = useState(0);
  const [hearts, setHearts] = useState(START_HEARTS);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [dueAt, setDueAt] = useState(0);
  const [beatState, setBeatState] = useState<BeatState>("pending");
  const [resolution, setResolution] = useState<Resolution>("breakdown");
  const [lastDelta, setLastDelta] = useState<number | null>(null);
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const progress = useMemo(() => Math.min(100, Math.round((beatIndex / TOTAL_BEATS) * 100)), [beatIndex]);
  const tier = useMemo(() => 1 + Math.floor(beatIndex / 8), [beatIndex]);
  const beatInterval = Math.max(520, BASE_INTERVAL_MS - (tier - 1) * 80);

  const clearLoop = () => {
    if (!loopRef.current) return;
    clearInterval(loopRef.current);
    loopRef.current = null;
  };

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    clearLoop();
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "encore" ? "cheering" : "sad");
    setMessage(
      nextResolution === "encore"
        ? "Luna: beatline complete. Encore sequence unlocked."
        : "Luna: rhythm breakdown. Rebuild timing and combo control.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-064",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TOTAL_BEATS * 14,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const advance = (nextHearts: number, nextScore: number) => {
    const finalBeat = beatIndex >= TOTAL_BEATS - 1;
    if (nextHearts <= 0) {
      finalize("breakdown", nextScore);
      return;
    }
    if (finalBeat) {
      finalize("encore", nextScore);
      return;
    }
    const now = Date.now();
    setBeatIndex((value) => value + 1);
    setBeatState("pending");
    setDueAt(now + beatInterval);
  };

  const miss = () => {
    if (phase !== "playing" || beatState !== "pending") return;
    const nextHearts = hearts - 1;
    const nextScore = Math.max(0, score - 4);
    setHearts(nextHearts);
    setScore(nextScore);
    setCombo(0);
    setBeatState("miss");
    setMood("sad");
    setMessage("Missed pulse.");
    void hapticError();
    window.setTimeout(() => advance(nextHearts, nextScore), 150);
  };

  const tap = () => {
    if (phase !== "playing" || beatState !== "pending") return;
    setInteractions((value) => value + 1);
    const delta = Math.abs(Date.now() - dueAt);
    setLastDelta(delta);
    if (delta > HIT_WINDOW_MS) {
      miss();
      return;
    }
    const perfect = delta <= PERFECT_WINDOW_MS;
    const nextCombo = combo + 1;
    const nextScore = score + (perfect ? 12 : 8) + Math.min(5, nextCombo);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setBeatState("hit");
    setMood(perfect ? "cheering" : "happy");
    setMessage(perfect ? "Perfect hit." : "Clean hit.");
    void hapticSuccess();
    window.setTimeout(() => advance(hearts, nextScore), 150);
  };

  const start = () => {
    clearLoop();
    const now = Date.now();
    setPhase("playing");
    setBeatIndex(0);
    setHearts(START_HEARTS);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setDueAt(now + 1000);
    setBeatState("pending");
    setResolution("breakdown");
    setLastDelta(null);
    setInteractions(0);
    setStartedAt(now);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Luna: tap near center timing. Space/Enter works.");
    void hapticSelection();
  };

  useEffect(() => {
    if (phase !== "playing") {
      clearLoop();
      return;
    }
    loopRef.current = setInterval(() => {
      if (beatState !== "pending") return;
      if (Date.now() - dueAt > HIT_WINDOW_MS) {
        miss();
      }
    }, 70);
    return () => clearLoop();
  }, [phase, dueAt, beatState, hearts, score, beatInterval]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.key === "Enter") {
        event.preventDefault();
        tap();
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, beatState, dueAt, hearts, score, combo]);

  useEffect(() => () => clearLoop(), []);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(217,70,239,0.24),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(244,114,182,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 064</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Beatline Run</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}/{START_HEARTS}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.15 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="happy" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">Hit 32 accelerating beats with precise timing windows.</p>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Beatline
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section key={`beat-${beatIndex}`} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Drum className="h-3.5 w-3.5" />
                  Beat {beatIndex + 1}/{TOTAL_BEATS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Timer className="h-3.5 w-3.5" />
                  Tier {tier} | Interval {beatInterval}ms
                </span>
              </div>
              <div className="rounded-2xl border border-fuchsia-100/25 bg-fuchsia-100/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-200">Pulse Ring</p>
                <div className="mt-3 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: beatState === "pending" ? [1, 1.18, 1] : beatState === "hit" ? [1, 1.28, 1] : [1, 0.9, 1],
                    }}
                    transition={{ duration: Math.max(0.45, beatInterval / 1000), repeat: Infinity }}
                    className={`flex h-40 w-40 items-center justify-center rounded-full border-4 ${
                      beatState === "hit"
                        ? "border-emerald-300/80 bg-emerald-400/20"
                        : beatState === "miss"
                          ? "border-rose-300/80 bg-rose-400/20"
                          : "border-fuchsia-200/70 bg-fuchsia-200/15"
                    }`}
                  >
                    <span className="text-5xl font-black">{marker(beatIndex)}</span>
                  </motion.div>
                </div>
                <p className="mt-3 text-center text-xs text-fuchsia-200">Last delta: {lastDelta === null ? "--" : `${lastDelta}ms`}</p>
              </div>
              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-fuchsia-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  Hit window ±{HIT_WINDOW_MS}ms, perfect ±{PERFECT_WINDOW_MS}ms.
                </p>
                <div className="flex items-center gap-2">
                  <PhysicalButton onClick={tap} className="h-10 bg-fuchsia-400 px-4 text-xs font-black text-slate-950">
                    Tap Pulse
                  </PhysicalButton>
                  <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-fuchsia-300 px-4 text-xs font-black text-slate-950">
                    <span className="inline-flex items-center gap-1">
                      <PauseCircle className="h-4 w-4" />
                      Pause
                    </span>
                  </PhysicalButton>
                </div>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="luna" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Beatline Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-fuchsia-400 px-6 text-sm font-black text-slate-950">
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
            <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={resolution === "encore" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "encore" ? "Encore Beatline" : "Rhythm Breakdown"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Beatline
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
