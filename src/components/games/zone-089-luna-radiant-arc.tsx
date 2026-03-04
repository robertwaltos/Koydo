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
type Resolution = "encore" | "break";

type ArcWave = {
  id: string;
  sequence: number[];
  prompt: string;
};

const PAD_COUNT = 4;
const WAVE_COUNT = 13;
const START_HEARTS = 3;
const MAX_FOCUS = 3;

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

function buildWave(waveIndex: number): ArcWave {
  const rand = seeded(`zone-089:${waveIndex + 1}`);
  const length = 3 + Math.floor(waveIndex / 2);
  const sequence: number[] = [];
  for (let index = 0; index < length; index += 1) {
    sequence.push(Math.floor(rand() * PAD_COUNT));
  }
  const prompts = [
    "Radiant arc line requires exact replay.",
    "Harmony bridge entered accelerated mode.",
    "Crowd-response loop shifted one beat ahead.",
    "Final arc stack demands full focus chain.",
  ];
  return {
    id: `z089-w${waveIndex + 1}`,
    sequence,
    prompt: prompts[Math.floor(rand() * prompts.length)] ?? prompts[0],
  };
}

const WAVES = Array.from({ length: WAVE_COUNT }, (_, index) => buildWave(index));
const PAD_LABELS = ["A", "S", "D", "F"];

export default function Zone089LunaRadiantArc() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [waveIndex, setWaveIndex] = useState(0);
  const [inputIndex, setInputIndex] = useState(0);
  const [hearts, setHearts] = useState(START_HEARTS);
  const [focus, setFocus] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [highlightedPad, setHighlightedPad] = useState<number | null>(null);
  const [lastPressedPad, setLastPressedPad] = useState<number | null>(null);
  const [resolution, setResolution] = useState<Resolution>("break");
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
        ? "Luna: radiant arc cleared."
        : "Luna: radiant arc broke before finale.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-089",
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
    setFocus(1);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setHighlightedPad(null);
    setLastPressedPad(null);
    setResolution("break");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Luna: mirror each radiant sequence exactly.");
    void hapticSelection();
  };

  const restart = () => start();

  const focusReset = () => {
    if (phase === "ready" || phase === "complete" || focus <= 0 || hearts >= START_HEARTS) return;
    setFocus((value) => value - 1);
    setHearts((value) => Math.min(START_HEARTS, value + 1));
    setInteractions((value) => value + 1);
    setMood("happy");
    setMessage("Focus reset restored one heart.");
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
        let nextFocus = focus;
        const nextScore = score + 14 + Math.min(10, nextCombo * 2) + tier;

        if (nextCombo > 0 && nextCombo % 3 === 0) {
          nextFocus = Math.min(MAX_FOCUS, nextFocus + 1);
          setMessage("Radiant chain perfect. +1 focus.");
        } else {
          setMessage("Sequence cleared.");
        }

        setScore(nextScore);
        setCombo(nextCombo);
        setBestCombo(nextBestCombo);
        setFocus(nextFocus);

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

    let nextHearts = hearts;
    let nextFocus = focus;
    let nextScore = Math.max(0, score - 6);
    const nextCombo = 0;

    if (nextFocus > 0) {
      nextFocus -= 1;
      nextScore = Math.max(0, score - 3);
      setMood("thinking");
      setMessage("Focus absorbed the miss.");
      void hapticSelection();
    } else {
      nextHearts = Math.max(0, hearts - 1);
      setMood("sad");
      setMessage("Wrong note. Heart lost.");
      void hapticError();
    }

    setHearts(nextHearts);
    setFocus(nextFocus);
    setScore(nextScore);
    setCombo(nextCombo);

    if (nextHearts <= 0) {
      finalize("break", nextScore);
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
    setMessage("Watch and memorize.");

    const timeouts: number[] = [];
    const beatMs = Math.max(250, 460 - tier * 35);
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
        focusReset();
      } else if (key === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, pressPad, focusReset]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(232,121,249,0.26),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(192,132,252,0.2),transparent_52%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 089</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Radiant Arc</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}/{START_HEARTS}</span>
            <span>Focus {focus}/{MAX_FOCUS}</span>
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
                <p className="max-w-2xl text-sm text-fuchsia-100">Memorize and replay 13 escalating radiant arc waves.</p>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Radiant Arc
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
                {phase === "preview" ? "Preview phase." : `Input phase: ${inputIndex}/${wave.sequence.length}.`}
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
                  onClick={focusReset}
                  disabled={focus <= 0 || hearts >= START_HEARTS}
                  className="h-10 bg-fuchsia-300 text-xs font-black text-slate-950 disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-1">
                    <ShieldPlus className="h-4 w-4" />
                    Focus Reset
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
              <h3 className="mt-3 text-2xl font-black text-white">Radiant Arc Paused</h3>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase(wave ? "preview" : "ready")} className="h-11 bg-fuchsia-400 px-6 text-sm font-black text-slate-950">
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
                {resolution === "encore" ? "Radiant Encore" : "Radiant Break"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Radiant Arc
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
