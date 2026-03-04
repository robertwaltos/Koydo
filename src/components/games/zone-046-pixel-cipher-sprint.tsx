"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseCircle, PlayCircle, ShieldAlert, Timer } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "paused" | "complete";
type Resolution = "decrypted" | "breached";

type CipherRound = {
  id: string;
  encoded: string;
  clue: string;
  options: string[];
  answerIndex: number;
};

const STARTING_LIVES = 4;
const ROUND_COUNT = 12;
const START_TIMER_MS = 220_000;

const ROUNDS: CipherRound[] = [
  {
    id: "z046-r1",
    encoded: "B34C0N",
    clue: "Emergency relay object",
    options: ["beacon", "battery", "barcode"],
    answerIndex: 0,
  },
  {
    id: "z046-r2",
    encoded: "C1PH3R",
    clue: "Obfuscated message format",
    options: ["cinder", "cipher", "circle"],
    answerIndex: 1,
  },
  {
    id: "z046-r3",
    encoded: "GU4RD",
    clue: "Protective role",
    options: ["guard", "guild", "gauge"],
    answerIndex: 0,
  },
  {
    id: "z046-r4",
    encoded: "L0CKD0WN",
    clue: "Security containment action",
    options: ["lockdown", "lookout", "lockstep"],
    answerIndex: 0,
  },
  {
    id: "z046-r5",
    encoded: "V3R1FY",
    clue: "Validate before publish",
    options: ["version", "verify", "vector"],
    answerIndex: 1,
  },
  {
    id: "z046-r6",
    encoded: "M4TR1X",
    clue: "Structured grid system",
    options: ["matrix", "metrics", "matter"],
    answerIndex: 0,
  },
  {
    id: "z046-r7",
    encoded: "R3C0V3R",
    clue: "Restore after failure",
    options: ["recover", "recorder", "recolor"],
    answerIndex: 0,
  },
  {
    id: "z046-r8",
    encoded: "D3F3ND",
    clue: "Protect against attack",
    options: ["defend", "define", "depend"],
    answerIndex: 0,
  },
  {
    id: "z046-r9",
    encoded: "P4YL04D",
    clue: "Core data package",
    options: ["payload", "palisade", "palmtree"],
    answerIndex: 0,
  },
  {
    id: "z046-r10",
    encoded: "S1GN4L",
    clue: "Actionable transmission",
    options: ["single", "signal", "singer"],
    answerIndex: 1,
  },
  {
    id: "z046-r11",
    encoded: "F41LS4F3",
    clue: "Safety fallback mechanism",
    options: ["failsafe", "falsehood", "fastline"],
    answerIndex: 0,
  },
  {
    id: "z046-r12",
    encoded: "UPL1NK",
    clue: "Final communication bridge",
    options: ["uplink", "uplift", "upland"],
    answerIndex: 0,
  },
];

function prettyMs(ms: number) {
  const safe = Math.max(0, ms);
  const minutes = Math.floor(safe / 60_000);
  const seconds = Math.floor((safe % 60_000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Zone046PixelCipherSprint() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [remainingMs, setRemainingMs] = useState(START_TIMER_MS);
  const [resolution, setResolution] = useState<Resolution>("breached");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const round = ROUNDS[roundIndex] ?? null;
  const progress = useMemo(
    () => Math.min(100, Math.round((roundIndex / ROUND_COUNT) * 100)),
    [roundIndex],
  );
  const difficultyTier = 1 + Math.floor(roundIndex / 4);

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "decrypted" ? "cheering" : "sad");
    setMessage(
      nextResolution === "decrypted"
        ? "Pixel: Cipher network restored. Your decode chain held under pressure."
        : "Pixel: Cipher breach detected. Re-run and protect the uplink.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-046",
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
    setLives(STARTING_LIVES);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setSelectedIndex(null);
    setRemainingMs(START_TIMER_MS);
    setResolution("breached");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Pixel: Decode each token quickly. Keys 1/2/3 also select options.");
    void hapticSelection();
  };

  const restart = () => {
    start();
  };

  const choose = (optionIndex: number) => {
    if (phase !== "playing" || !round || selectedIndex !== null) return;
    setSelectedIndex(optionIndex);
    setInteractions((value) => value + 1);

    const correct = optionIndex === round.answerIndex;
    const wrongPenalty = difficultyTier >= 3 ? 2 : 1;
    const nextLives = correct ? lives : lives - wrongPenalty;
    const nextCombo = correct ? combo + 1 : 0;
    const nextScore = correct
      ? score + 8 + Math.min(5, nextCombo)
      : Math.max(0, score - (difficultyTier >= 3 ? 3 : 2));
    const nextRemaining = correct
      ? remainingMs
      : Math.max(0, remainingMs - (1200 + difficultyTier * 400));

    setLives(nextLives);
    setCombo(nextCombo);
    setBestCombo((value) => Math.max(value, nextCombo));
    setScore(nextScore);
    setRemainingMs(nextRemaining);
    setMood(correct ? "happy" : "sad");
    setMessage(
      correct
        ? `Decoded: ${round.options[round.answerIndex]}.`
        : `Incorrect. Correct token was ${round.options[round.answerIndex]}.`,
    );
    if (correct) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const isFinalRound = roundIndex >= ROUND_COUNT - 1;
      if (nextRemaining <= 0 || nextLives <= 0) {
        finalize("breached", nextScore);
        return;
      }
      if (isFinalRound) {
        finalize("decrypted", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedIndex(null);
    }, 520);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const ticker = setInterval(() => {
      setRemainingMs((prev) => {
        if (prev <= 250) return 0;
        return prev - 250;
      });
    }, 250);
    return () => clearInterval(ticker);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    if (remainingMs > 0) return;
    const timeout = window.setTimeout(() => {
      finalize("breached", score);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [phase, remainingMs, score]);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        event.preventDefault();
        choose(0);
      } else if (event.key === "2") {
        event.preventDefault();
        choose(1);
      } else if (event.key === "3") {
        event.preventDefault();
        choose(2);
      } else if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPhase("paused");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, choose]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-sky-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.24),transparent_45%),radial-gradient(circle_at_84%_78%,rgba(14,165,233,0.2),transparent_50%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">Zone 046</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Pixel Cipher Sprint</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-sky-100">
            <span>Score {score}</span>
            <span>Combo {combo}</span>
            <span>Lives {lives}</span>
            <span>{prettyMs(remainingMs)}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-sky-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.25 }} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-sky-200/25 bg-black/35 p-6 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
                <p className="max-w-2xl text-sm text-sky-100">
                  Decode tactical ciphers under time pressure. Wrong answers reduce lives and burn clock.
                </p>
                <ul className="space-y-1 text-xs text-sky-100">
                  <li>Win condition: decode all 12 ciphers.</li>
                  <li>Fail condition: timer expires or lives drop to zero.</li>
                  <li>Controls: tap/click options or press keys 1,2,3.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-sky-400 px-8 text-sm font-black text-slate-950">
                  Start Cipher Run
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
              className="rounded-3xl border border-sky-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-sky-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Cipher {roundIndex + 1}/{ROUND_COUNT}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/35 px-3 py-1">
                  <Timer className="h-3.5 w-3.5" />
                  Difficulty tier {difficultyTier}
                </span>
              </div>

              <p className="text-sm text-sky-100">{round.clue}</p>
              <h3 className="mt-2 text-3xl font-black tracking-[0.25em] text-white">{round.encoded}</h3>

              <div className="mt-6 grid gap-3">
                {round.options.map((option, optionIndex) => {
                  const selected = selectedIndex === optionIndex;
                  const selectedClass = selected
                    ? optionIndex === round.answerIndex
                      ? "border-emerald-300/70 bg-emerald-400/20"
                      : "border-rose-300/70 bg-rose-400/20"
                    : "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20";
                  return (
                    <button
                      key={`${round.id}-${option}`}
                      type="button"
                      disabled={selectedIndex !== null}
                      onClick={() => choose(optionIndex)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${selectedClass}`}
                    >
                      <span className="mr-2 text-xs opacity-80">[{optionIndex + 1}]</span>
                      {option}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-end gap-2">
                <PhysicalButton
                  onClick={() => setPhase("paused")}
                  className="h-10 bg-sky-300 px-4 text-xs font-black text-slate-950"
                >
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
              className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood="thinking" size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">Mission Paused</h3>
              <p className="mt-2 text-sm text-sky-100">Resume when ready, or restart from cipher one.</p>
              <div className="mt-5 flex justify-center gap-3">
                <PhysicalButton onClick={() => setPhase("playing")} className="h-11 bg-sky-400 px-6 text-sm font-black text-slate-950">
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
              className="rounded-3xl border border-sky-100/30 bg-black/45 p-6 text-center"
            >
              <div className="flex justify-center">
                <MascotFriend id="pixel" mood={resolution === "decrypted" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "decrypted" ? "Cipher Network Restored" : "Cipher Network Breached"}
              </h3>
              <p className="mt-2 text-sm text-sky-100">
                Score {score} | Best combo {bestCombo} | Interactions {Math.max(1, interactions)}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={restart} className="h-11 bg-sky-400 px-7 text-sm font-black text-slate-950">
                  Replay Cipher Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
