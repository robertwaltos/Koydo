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

type Phase = "ready" | "preview" | "input" | "paused" | "complete";
type Resolution = "encore" | "breakdown";

type RallyWave = {
  id: string;
  sequence: number[];
  prompt: string;
};

const PAD_COUNT = 4;
const WAVE_COUNT = 12;
const START_HEARTS = 3;
const MAX_RECOVERY = 3;

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

function buildWave(waveIndex: number): RallyWave {
  const rand = seeded(`zone-069:${waveIndex + 1}`);
  const length = 3 + Math.floor(waveIndex / 2);
  const sequence: number[] = [];
  for (let index = 0; index < length; index += 1) {
    const lane = Math.floor(rand() * PAD_COUNT);
    sequence.push(lane);
  }
  const prompts = [
    "Bridge the chorus with perfect recall.",
    "Mirror the relay pulse before fadeout.",
    "Echo the cadence while tempo accelerates.",
    "Stitch the stage line from memory.",
  ];
  return {
    id: `z069-w${waveIndex + 1}`,
    sequence,
    prompt: prompts[Math.floor(rand() * prompts.length)] ?? prompts[0],
  };
}

const WAVES = Array.from({ length: WAVE_COUNT }, (_, index) => buildWave(index));
const PAD_LABELS = ["A", "S", "D", "F"];

export default function Zone069LunaPulseRally() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [waveIndex, setWaveIndex] = useState(0);
  const [inputIndex, setInputIndex] = useState(0);
  const [hearts, setHearts] = useState(START_HEARTS);
  const [recovery, setRecovery] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [highlightedPad, setHighlightedPad] = useState<number | null>(null);
  const [lastPressedPad, setLastPressedPad] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("breakdown");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const wave = WAVES[waveIndex] ?? null;
  const tier = 1 + Math.floor(waveIndex / 3);
  const progress = useMemo(() => Math.min(100, Math.round((waveIndex / WAVE_COUNT) * 100)), [waveIndex]);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "encore" ? "cheering" : "sad");
    setMessage(
      nextResolution === "encore"
        ? "Luna: pulse rally hit full encore."
        : "Luna: rhythm broke. rebuild your sequence focus.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-069",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: WAVE_COUNT * 30,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const start = () => {
    setPhase("preview");
    setWaveIndex(0);
    setInputIndex(0);
    setHearts(START_HEARTS);
    setRecovery(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setHighlightedPad(null);
    setLastPressedPad(null);
    setResolution("breakdown");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Luna: watch the pulse, then replay it exactly.");
    void hapticSelection();
  };

  const restart = () => start();

  const deployRecovery = () => {
    if (phase === "ready" || phase === "complete" || recovery <= 0 || hearts >= START_HEARTS) return;
    const nextRecovery = recovery - 1;
    const nextHearts = Math.min(START_HEARTS, hearts + 1);
    setRecovery(nextRecovery);
    setHearts(nextHearts);
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Recovery pulse restored one heart.");
    void hapticSelection();
  };

  const pressPad = (padIndex: number) => {
    if (phase !== "input" || !wave) return;
    const expected = wave.sequence[inputIndex];
    if (typeof expected !== "number") return;
    setLastPressedPad(padIndex);
    setInteractions((value) => value + 1);

    if (padIndex === expected) {
      const nextInputIndex = inputIndex + 1;
      setInputIndex(nextInputIndex);
      setMood("happy");
      void hapticSuccess();

      if (nextInputIndex >= wave.sequence.length) {
        const nextCombo = combo + 1;
        const nextBestCombo = Math.max(bestCombo, nextCombo);
        const nextScore = score + 14 + Math.min(10, nextCombo * 2) + tier;
        let nextRecovery = recovery;
        if (nextCombo > 0 && nextCombo % 3 === 0) {
          nextRecovery = Math.min(MAX_RECOVERY, nextRecovery + 1);
          setMessage("Combo chain secured. +1 recovery pulse.");
        } else {
          setMessage("Sequence landed.");
        }
        setScore(nextScore);
        setCombo(nextCombo);
        setBestCombo(nextBestCombo);
        setRecovery(nextRecovery);

        window.setTimeout(() => {
          if (waveIndex >= WAVE_COUNT - 1) {
            finalize("encore", nextScore);
            return;
          }
          setWaveIndex((value) => value + 1);
          setInputIndex(0);
          setLastPressedPad(null);
          setPhase("preview");
        }, 340);
      }
      return;
    }

    const nextCombo = 0;
    let nextScore = Math.max(0, score - 6);
    let nextHearts = hearts;
    let nextRecovery = recovery;

    if (nextRecovery > 0) {
      nextRecovery -= 1;
      nextScore = Math.max(0, score - 3);
      setMessage("Recovery pulse triggered. Replay this wave.");
      setMood("thinking");
      void hapticSelection();
    } else {
      nextHearts = Math.max(0, hearts - 1);
      setMessage("Wrong note. Heart lost.");
      setMood("sad");
      void hapticError();
    }

    setScore(nextScore);
    setCombo(nextCombo);
    setHearts(nextHearts);
    setRecovery(nextRecovery);

    if (nextHearts <= 0) {
      finalize("breakdown", nextScore);
      return;
    }

    window.setTimeout(() => {
      setInputIndex(0);
      setLastPressedPad(null);
      setPhase("preview");
    }, 320);
  };

  useEffect(() => {
    if (phase !== "preview" || !wave) return;
    setMessage("Watch the pulse pattern.");

    const timeouts: number[] = [];
    const beatMs = Math.max(260, 460 - tier * 35);
    let cursor = 220;

    for (const lane of wave.sequence) {
      const showTimeout = window.setTimeout(() => {
        setHighlightedPad(lane);
        void hapticSelection();
      }, cursor);
      timeouts.push(showTimeout);

      const hideTimeout = window.setTimeout(() => {
        setHighlightedPad(null);
      }, cursor + Math.floor(beatMs * 0.65));
      timeouts.push(hideTimeout);
      cursor += beatMs;
    }

    const doneTimeout = window.setTimeout(() => {
      setHighlightedPad(null);
      setPhase("input");
      setMessage("Replay now.");
    }, cursor + 140);
    timeouts.push(doneTimeout);

    return () => {
      for (const timeout of timeouts) {
        window.clearTimeout(timeout);
      }
    };
  }, [phase, wave, tier, setMessage]);

  useEffect(() => {
    if (phase !== "input") return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "1" || key === "a") {
        event.preventDefault();
        pressPad(0);
      } else if (key === "2" || key === "s") {
        event.preventDefault();
        pressPad(1);
      } else if (key === "3" || key === "d") {
        event.preventDefault();
        pressPad(2);
      } else if (key === "4" || key === "f") {
        event.preventDefault();
        pressPad(3);
      } else if (key === "r") {
        event.preventDefault();
        deployRecovery();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, pressPad, deployRecovery]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,114,182,0.26),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(232,121,249,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 069</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Pulse Rally</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}/{START_HEARTS}</span>
            <span>Recovery {recovery}/{MAX_RECOVERY}</span>
          </div>
        </div>
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-fuchsia-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-fuchsia-200/25 bg-black/35 p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="luna" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-fuchsia-100">Memorize and replay 12 pulse waves. Recovery pulses can rescue mistakes mid-run.</p>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Rally
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {(phase === "preview" || phase === "input") && wave ? (
            <motion.section key={wave.id} initial={{ opacity: 0.2, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Gauge className="h-3.5 w-3.5" />
                  Wave {waveIndex + 1}/{WAVE_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Tier {tier} | Sequence {wave.sequence.length}
                </span>
              </div>
              <p className="text-sm text-fuchsia-100">{wave.prompt}</p>
              <p className="mt-2 text-xs text-fuchsia-200">
                {phase === "preview" ? "Preview phase: watch and remember." : `Input phase: ${inputIndex}/${wave.sequence.length} notes entered.`}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {Array.from({ length: PAD_COUNT }, (_, padIndex) => {
                  const highlighted = highlightedPad === padIndex;
                  const pressed = lastPressedPad === padIndex;
                  const stateClass = highlighted
                    ? "border-fuchsia-200 bg-fuchsia-300/45"
                    : pressed
                      ? "border-fuchsia-300/70 bg-fuchsia-400/20"
                      : "border-fuchsia-100/25 bg-fuchsia-100/10";
                  return (
                    <button
                      key={`pad-${padIndex}`}
                      type="button"
                      disabled={phase !== "input"}
                      onClick={() => pressPad(padIndex)}
                      className={`rounded-2xl border px-3 py-7 text-center transition ${stateClass} ${phase === "input" ? "hover:bg-fuchsia-100/20" : "opacity-80"}`}
                    >
                      <p className="text-2xl font-black text-white">{padIndex + 1}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-fuchsia-100">{PAD_LABELS[padIndex]}</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PhysicalButton
                  onClick={deployRecovery}
                  disabled={recovery <= 0 || hearts >= START_HEARTS}
                  className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Recovery Pulse
                  </span>
                </PhysicalButton>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950">
                  <span className="inline-flex items-center gap-1">
                    <PauseCircle className="h-4 w-4" />
                    Pause
                  </span>
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "paused" ? (
            <motion.section key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center">
              <div className="flex justify-center">
                <MascotFriend id="luna" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Pulse Rally Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton
                  onClick={() => setPhase(wave ? "preview" : "ready")}
                  className="h-11 bg-fuchsia-400 px-6 text-sm font-black text-slate-950"
                >
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
                {resolution === "encore" ? "Encore Locked In" : "Rhythm Breakdown"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Rally
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
