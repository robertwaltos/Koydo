"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, PauseCircle, PlayCircle, Radio, Sparkles } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "harmonized" | "dissonance";
type Stage = "preview" | "input";

const ROUND_COUNT = 12;
const START_HEARTS = 4;
const NOTE_KEYS = ["▲", "◆", "●", "■"] as const;

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

function buildSequence(roundIndex: number) {
  const tier = 1 + Math.floor(roundIndex / 3);
  const length = 3 + tier;
  const rand = seeded(`zone-051:${roundIndex + 1}`);
  return Array.from({ length }, () => Math.floor(rand() * NOTE_KEYS.length));
}

export default function Zone051LunaChorusCascade() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [stage, setStage] = useState<Stage>("preview");
  const [roundIndex, setRoundIndex] = useState(0);
  const [previewStep, setPreviewStep] = useState(0);
  const [inputIndex, setInputIndex] = useState(0);
  const [hearts, setHearts] = useState(START_HEARTS);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [resolution, setResolution] = useState<Resolution>("dissonance");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const sequence = useMemo(() => buildSequence(roundIndex), [roundIndex]);
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)), [roundIndex]);
  const tier = 1 + Math.floor(roundIndex / 3);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "harmonized" ? "cheering" : "sad");
    setMessage(
      nextResolution === "harmonized"
        ? "Luna: Chorus alignment complete. The cascade is stable."
        : "Luna: Dissonance chain broke the run. Rebuild the pattern with calmer timing.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-051",
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
    setStage("preview");
    setRoundIndex(0);
    setPreviewStep(0);
    setInputIndex(0);
    setHearts(START_HEARTS);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setResolution("dissonance");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Luna: Watch the chorus pattern, then replay it note by note.");
    void hapticSelection();
  };

  const restart = () => start();

  const choose = (noteIndex: number) => {
    if (phase !== "playing" || stage !== "input") return;
    const expected = sequence[inputIndex];
    if (typeof expected !== "number") return;

    setInteractions((value) => value + 1);
    if (noteIndex === expected) {
      const nextCombo = combo + 1;
      const nextScore = score + 5 + Math.min(6, nextCombo);
      const nextInputIndex = inputIndex + 1;
      setCombo(nextCombo);
      setBestCombo((value) => Math.max(value, nextCombo));
      setScore(nextScore);
      setInputIndex(nextInputIndex);
      setMood("happy");
      setMessage("Correct note.");
      void hapticSuccess();

      if (nextInputIndex >= sequence.length) {
        const roundBonus = 10 + tier * 2;
        const finalScore = nextScore + roundBonus;
        setScore(finalScore);
        setMood("cheering");
        setMessage("Round harmonized.");
        window.setTimeout(() => {
          const finalRound = roundIndex >= ROUND_COUNT - 1;
          if (finalRound) {
            finalize("harmonized", finalScore);
            return;
          }
          setRoundIndex((value) => value + 1);
          setStage("preview");
          setPreviewStep(0);
          setInputIndex(0);
        }, 520);
      }
      return;
    }

    const nextHearts = hearts - 1;
    const nextScore = Math.max(0, score - (tier >= 3 ? 5 : 3));
    setHearts(nextHearts);
    setScore(nextScore);
    setCombo(0);
    setMood("sad");
    setMessage("Wrong note. Sequence restarts.");
    void hapticError();

    window.setTimeout(() => {
      if (nextHearts <= 0) {
        finalize("dissonance", nextScore);
        return;
      }
      setStage("preview");
      setPreviewStep(0);
      setInputIndex(0);
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing" || stage !== "preview") return;
    let step = 0;
    setMessage("Luna: Listen and watch the cascade.");
    const interval = window.setInterval(() => {
      step += 1;
      if (step >= sequence.length) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setStage("input");
          setPreviewStep(-1);
          setInputIndex(0);
          setMood("thinking");
          setMessage("Replay the sequence.");
        }, 280);
        return;
      }
      setPreviewStep(step);
      void hapticSelection();
    }, Math.max(380, 640 - tier * 40));
    return () => window.clearInterval(interval);
  }, [phase, stage, sequence.length, tier]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        event.preventDefault();
        choose(Number(event.key) - 1);
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, stage, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-fuchsia-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(217,70,239,0.24),transparent_44%),radial-gradient(circle_at_84%_78%,rgba(244,114,182,0.2),transparent_48%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">Zone 051</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Luna Chorus Cascade</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-fuchsia-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Hearts {hearts}/{START_HEARTS}</span>
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
                  Memorize each chorus sequence, then replay it perfectly under increasing pattern length.
                </p>
                <ul className="space-y-1 text-xs text-fuchsia-100">
                  <li>Win condition: complete all 12 chorus rounds.</li>
                  <li>Fail condition: hearts drop to zero after wrong inputs.</li>
                  <li>Controls: click/tap note pads or keys 1-4.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-fuchsia-400 px-8 text-sm font-black text-slate-950">
                  Start Chorus Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" ? (
            <motion.section
              key={`play-${roundIndex}-${stage}`}
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-fuchsia-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fuchsia-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Music2 className="h-3.5 w-3.5" />
                  Round {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/35 px-3 py-1">
                  <Radio className="h-3.5 w-3.5" />
                  Tier {tier} | Sequence {sequence.length}
                </span>
              </div>

              <div className="rounded-2xl border border-fuchsia-100/25 bg-fuchsia-100/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-200">Cascade Track</p>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {sequence.map((note, noteIdx) => {
                    const active = stage === "preview" && previewStep === noteIdx;
                    const solved = stage === "input" && inputIndex > noteIdx;
                    return (
                      <motion.div
                        key={`seq-${roundIndex}-${noteIdx}`}
                        animate={{ scale: active ? 1.08 : 1 }}
                        className={`rounded-xl border px-2 py-3 text-center text-sm font-black ${
                          active
                            ? "border-fuchsia-300/80 bg-fuchsia-300/30"
                            : solved
                              ? "border-emerald-300/70 bg-emerald-400/20"
                              : "border-fuchsia-100/25 bg-black/30"
                        }`}
                      >
                        {stage === "preview" || solved ? NOTE_KEYS[note] : "?"}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {NOTE_KEYS.map((note, noteIndex) => (
                  <button
                    key={note}
                    type="button"
                    onClick={() => choose(noteIndex)}
                    disabled={stage !== "input"}
                    className={`rounded-2xl border px-4 py-3 text-center text-lg font-black transition ${
                      stage === "input"
                        ? "border-fuchsia-100/25 bg-fuchsia-100/10 hover:bg-fuchsia-100/20"
                        : "border-zinc-700 bg-zinc-800/70 text-zinc-400"
                    }`}
                  >
                    <span className="mr-1 text-xs opacity-80">[{noteIndex + 1}]</span>
                    {note}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs text-fuchsia-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  {stage === "preview" ? "Watch phase" : `Input ${inputIndex + 1}/${sequence.length}`}
                </p>
                <PhysicalButton onClick={() => setPhase("paused")} className="h-10 bg-fuchsia-300 px-4 text-xs font-black text-slate-950">
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
              className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="luna" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Chorus Paused</h3>
              <p className="mt-2 text-sm text-fuchsia-100">Resume this sequence or restart from round one.</p>
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
            <motion.section
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-fuchsia-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={resolution === "harmonized" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "harmonized" ? "Chorus Harmonized" : "Dissonance Cascade"}
              </h3>
              <p className="mt-2 text-sm text-fuchsia-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-fuchsia-400 px-7 text-sm font-black text-slate-950">
                  Replay Chorus
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
