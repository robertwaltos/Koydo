"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Drum, Music2, Sparkles, TriangleAlert } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";
type Resolution = "encore" | "flatline";
type BeatState = "pending" | "hit" | "miss";

const TOTAL_BEATS = 28;
const BEAT_INTERVAL_MS = 900;
const HIT_WINDOW_MS = 220;
const PERFECT_WINDOW_MS = 90;
const STARTING_HEARTS = 4;

const BEAT_MARKERS = ["♩", "♪", "♬", "♭", "♯", "♫"] as const;

function markerForBeat(index: number) {
  return BEAT_MARKERS[index % BEAT_MARKERS.length]!;
}

export default function Zone045LunaRhythmForge() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [beatIndex, setBeatIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [hearts, setHearts] = useState(STARTING_HEARTS);
  const [beatDueAt, setBeatDueAt] = useState(0);
  const [beatState, setBeatState] = useState<BeatState>("pending");
  const [resolution, setResolution] = useState<Resolution>("flatline");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [lastDelta, setLastDelta] = useState<number | null>(null);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const progress = useMemo(() => Math.min(100, Math.round((beatIndex / TOTAL_BEATS) * 100)), [beatIndex]);
  const currentMarker = markerForBeat(beatIndex);

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
        ? "Luna: Rhythm locked. The forge stage is alive."
        : "Luna: Timing collapsed. Breathe, reset, and rebuild your tempo.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-045",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TOTAL_BEATS * 12,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const advanceBeat = (nextHearts: number, nextScore: number) => {
    const finalBeat = beatIndex >= TOTAL_BEATS - 1;
    if (nextHearts <= 0) {
      finalize("flatline", nextScore);
      return;
    }
    if (finalBeat) {
      finalize("encore", nextScore);
      return;
    }
    const now = Date.now();
    setBeatIndex((value) => value + 1);
    setBeatState("pending");
    setBeatDueAt(now + BEAT_INTERVAL_MS);
  };

  const registerMiss = () => {
    if (phase !== "playing" || beatState !== "pending") return;
    const nextHearts = hearts - 1;
    setBeatState("miss");
    setHearts(nextHearts);
    setCombo(0);
    setMood("sad");
    setMessage("Late beat. Tempo dropped.");
    void hapticError();
    window.setTimeout(() => advanceBeat(nextHearts, score), 180);
  };

  const tapBeat = () => {
    if (phase !== "playing" || beatState !== "pending") return;
    setInteractions((value) => value + 1);
    const delta = Math.abs(Date.now() - beatDueAt);
    setLastDelta(delta);

    if (delta > HIT_WINDOW_MS) {
      registerMiss();
      return;
    }

    const perfect = delta <= PERFECT_WINDOW_MS;
    const nextCombo = combo + 1;
    const gained = perfect ? 12 : 8;
    const nextScore = score + gained + Math.min(4, nextCombo);

    setBeatState("hit");
    setScore(nextScore);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setMood(perfect ? "cheering" : "happy");
    setMessage(perfect ? "Perfect hit." : "Great timing.");
    void hapticSuccess();

    window.setTimeout(() => advanceBeat(hearts, nextScore), 160);
  };

  const start = () => {
    clearLoop();
    setPhase("playing");
    setBeatIndex(0);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setHearts(STARTING_HEARTS);
    setBeatState("pending");
    setResolution("flatline");
    setInteractions(0);
    setLastDelta(null);
    const now = Date.now();
    setStartedAt(now);
    setBeatDueAt(now + 1000);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Luna: Hit each pulse near center timing. Space key also works.");
    void hapticSelection();
  };

  useEffect(() => {
    if (phase !== "playing") {
      clearLoop();
      return;
    }
    loopRef.current = setInterval(() => {
      if (phase !== "playing") return;
      const lateBy = Date.now() - beatDueAt;
      if (beatState === "pending" && lateBy > HIT_WINDOW_MS) {
        registerMiss();
      }
    }, 70);
    return () => clearLoop();
  }, [phase, beatDueAt, beatState, hearts, score]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "Space" && event.code !== "Enter") return;
      event.preventDefault();
      tapBeat();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, beatState, beatDueAt, combo, score, hearts]);

  useEffect(
    () => () => {
      clearLoop();
    },
    [],
  );

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(232,121,249,0.24),transparent_44%),radial-gradient(circle_at_84%_80%,rgba(192,132,252,0.2),transparent_48%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 045</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Rhythm Forge</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}/{STARTING_HEARTS}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="happy" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">
                  Perform precision rhythm taps across 28 beats. Space/Enter or tap the pulse button to hit the tempo window.
                </p>
                <ul className="space-y-1 text-xs text-fuchsia-100">
                  <li>Win condition: complete all beats before hearts drop to zero.</li>
                  <li>Fail condition: miss enough pulses to lose all hearts.</li>
                  <li>Scoring: perfect and near-perfect hits plus combo bonus.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Rhythm Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section
              key={`beat-${beatIndex}`}
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Music2 className="h-3.5 w-3.5" />
                  Beat {beatIndex + 1}/{TOTAL_BEATS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Drum className="h-3.5 w-3.5" />
                  Marker {currentMarker}
                </span>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-fuchsia-100/25 bg-fuchsia-100/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-200">Pulse Ring</p>
                  <div className="mt-3 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: beatState === "pending" ? [1, 1.18, 1] : beatState === "hit" ? [1, 1.3, 1] : [1, 0.9, 1],
                        opacity: beatState === "miss" ? [1, 0.6, 1] : [0.85, 1, 0.85],
                      }}
                      transition={{ duration: 0.65, repeat: Infinity }}
                      className={`flex h-40 w-40 items-center justify-center rounded-full border-4 ${
                        beatState === "hit"
                          ? "border-emerald-300/80 bg-emerald-400/20"
                          : beatState === "miss"
                            ? "border-rose-300/80 bg-rose-400/20"
                            : "border-fuchsia-200/70 bg-fuchsia-200/15"
                      }`}
                    >
                      <span className="text-5xl font-black">{currentMarker}</span>
                    </motion.div>
                  </div>
                </div>

                <div className="rounded-2xl border border-fuchsia-100/25 bg-fuchsia-100/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-200">Timing Deck</p>
                  <p className="mt-2 text-sm text-fuchsia-100">
                    Hit inside ±{HIT_WINDOW_MS}ms. Perfect window ±{PERFECT_WINDOW_MS}ms.
                  </p>
                  <p className="mt-1 text-xs text-fuchsia-200">
                    Last delta: {lastDelta === null ? "--" : `${lastDelta}ms`}
                  </p>
                  <div className="mt-4">
                    <PhysicalButton
                      onClick={tapBeat}
                      className={`h-12 w-full px-6 text-sm font-black ${
                        beatState === "pending"
                          ? "bg-fuchsia-400 text-slate-950"
                          : "bg-zinc-700 text-zinc-100"
                      }`}
                    >
                      Tap Pulse (Space/Enter)
                    </PhysicalButton>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={resolution === "encore" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "encore" ? "Encore Unlocked" : "Rhythm Flatline"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-fuchsia-200">
                {resolution === "encore" ? (
                  <>
                    <Sparkles className="h-3.5 w-3.5" />
                    Timing and endurance stayed stable across the full set.
                  </>
                ) : (
                  <>
                    <TriangleAlert className="h-3.5 w-3.5" />
                    Miss chain exceeded heart budget before final beat.
                  </>
                )}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Set
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

