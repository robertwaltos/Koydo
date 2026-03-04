"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookAudio, Eye, MessagesSquare, Siren } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "revealing" | "answering" | "complete";
type Resolution = "decoded" | "lost";

type StoryRound = {
  id: string;
  clues: string[];
  prompt: string;
  options: Array<{ id: string; label: string; isCorrect: boolean }>;
};

const STARTING_LIVES = 3;
const TOTAL_ROUNDS = 8;
const CLUE_REVEAL_MS = 2800;

const STORY_ROUNDS: StoryRound[] = [
  {
    id: "z043-r1",
    clues: ["bridge", "storm", "lantern", "north"],
    prompt: "Which signal should the team send first?",
    options: [
      { id: "a", label: "Guide everyone north across the lit bridge.", isCorrect: true },
      { id: "b", label: "Wait in darkness until the storm doubles.", isCorrect: false },
      { id: "c", label: "Split the team without communication.", isCorrect: false },
    ],
  },
  {
    id: "z043-r2",
    clues: ["archive", "code", "mentor", "index"],
    prompt: "What is the safest narrative action?",
    options: [
      { id: "a", label: "Ask the mentor to validate the archive index code.", isCorrect: true },
      { id: "b", label: "Publish unverified code from memory.", isCorrect: false },
      { id: "c", label: "Delete the archive and improvise.", isCorrect: false },
    ],
  },
  {
    id: "z043-r3",
    clues: ["forest", "echo", "beacon", "return"],
    prompt: "How do you avoid losing the rescue group?",
    options: [
      { id: "a", label: "Answer the beacon echo and return on marked path.", isCorrect: true },
      { id: "b", label: "Ignore all echoes and wander.", isCorrect: false },
      { id: "c", label: "Turn off beacons for stealth.", isCorrect: false },
    ],
  },
  {
    id: "z043-r4",
    clues: ["clinic", "dose", "schedule", "guardian"],
    prompt: "Which message is responsible?",
    options: [
      { id: "a", label: "Confirm schedule and guardian before dose change.", isCorrect: true },
      { id: "b", label: "Double dose without confirmation.", isCorrect: false },
      { id: "c", label: "Skip schedule checks during rush.", isCorrect: false },
    ],
  },
  {
    id: "z043-r5",
    clues: ["harbor", "tide", "rope", "team"],
    prompt: "What keeps the mission coherent?",
    options: [
      { id: "a", label: "Synchronize team timing with tide and safety rope.", isCorrect: true },
      { id: "b", label: "Launch individually at random times.", isCorrect: false },
      { id: "c", label: "Cut rope checks to save seconds.", isCorrect: false },
    ],
  },
  {
    id: "z043-r6",
    clues: ["server", "backup", "checksum", "night"],
    prompt: "Choose the highest-integrity move.",
    options: [
      { id: "a", label: "Run checksum and verify backup before night deploy.", isCorrect: true },
      { id: "b", label: "Deploy first and document later.", isCorrect: false },
      { id: "c", label: "Skip backup because uptime is high.", isCorrect: false },
    ],
  },
  {
    id: "z043-r7",
    clues: ["classroom", "translation", "context", "review"],
    prompt: "How should the team finalize the lesson signal?",
    options: [
      { id: "a", label: "Review translation context before publishing.", isCorrect: true },
      { id: "b", label: "Push literal translation without review.", isCorrect: false },
      { id: "c", label: "Ignore context and remove examples.", isCorrect: false },
    ],
  },
  {
    id: "z043-r8",
    clues: ["summit", "map", "oxygen", "guide"],
    prompt: "Final call before ascent?",
    options: [
      { id: "a", label: "Confirm map, oxygen, and guide route.", isCorrect: true },
      { id: "b", label: "Start ascent without route check.", isCorrect: false },
      { id: "c", label: "Drop oxygen reserve to move faster.", isCorrect: false },
    ],
  },
];

export default function Zone043EchoStorySignal() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [resolution, setResolution] = useState<Resolution>("lost");
  const [interactions, setInteractions] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const round = STORY_ROUNDS[roundIndex] ?? null;
  const progress = useMemo(() => Math.min(100, Math.round((roundIndex / TOTAL_ROUNDS) * 100)), [roundIndex]);

  const clearRevealTimer = () => {
    if (!revealTimeoutRef.current) return;
    clearTimeout(revealTimeoutRef.current);
    revealTimeoutRef.current = null;
  };

  const finalize = (nextResolution: Resolution, finalScore: number) => {
    clearRevealTimer();
    setResolution(nextResolution);
    setPhase("complete");
    setMood(nextResolution === "decoded" ? "cheering" : "sad");
    setMessage(
      nextResolution === "decoded"
        ? "Echo: Narrative signal decoded. Your team can trust your calls."
        : "Echo: We lost story coherence. Rebuild recall discipline and try again.",
    );
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "zone-043",
      difficulty: "medium",
      elapsedMs: Math.max(0, Date.now() - startedAt),
      interactions: Math.max(1, interactions),
      score: finalScore,
      maxScore: TOTAL_ROUNDS * 14,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  };

  const armRevealPhase = () => {
    clearRevealTimer();
    setPhase("revealing");
    revealTimeoutRef.current = setTimeout(() => {
      setPhase("answering");
      setMessage("Echo: Recall the clues and choose the coherent action.");
      setMood("thinking");
    }, CLUE_REVEAL_MS);
  };

  const start = () => {
    setPhase("revealing");
    setRoundIndex(0);
    setLives(STARTING_LIVES);
    setScore(0);
    setStreak(0);
    setSelectedOption(null);
    setResolution("lost");
    setInteractions(0);
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    const now = Date.now();
    setStartedAt(now);
    setMood("happy");
    setMessage("Echo: Watch each clue set, then respond with the strongest narrative decision.");
    void hapticSelection();
    armRevealPhase();
  };

  const chooseOption = (optionId: string) => {
    if (phase !== "answering" || !round || selectedOption) return;
    const choice = round.options.find((entry) => entry.id === optionId);
    if (!choice) return;
    setSelectedOption(optionId);
    setInteractions((value) => value + 1);

    const isCorrect = choice.isCorrect;
    const nextStreak = isCorrect ? streak + 1 : 0;
    const nextScore = isCorrect ? score + 10 + Math.min(4, nextStreak) : Math.max(0, score - 1);
    const nextLives = isCorrect ? lives : lives - 1;

    setStreak(nextStreak);
    setScore(nextScore);
    setLives(nextLives);
    setMood(isCorrect ? "happy" : "sad");
    setMessage(
      isCorrect
        ? "Strong coherence. The squad receives a clear signal."
        : "That signal contradicts the clue network.",
    );
    if (isCorrect) {
      void hapticSuccess();
    } else {
      void hapticError();
    }

    window.setTimeout(() => {
      const isFinalRound = roundIndex >= TOTAL_ROUNDS - 1;
      if (nextLives <= 0) {
        finalize("lost", nextScore);
        return;
      }
      if (isFinalRound) {
        finalize("decoded", nextScore);
        return;
      }
      setRoundIndex((value) => value + 1);
      setSelectedOption(null);
      armRevealPhase();
    }, 650);
  };

  useEffect(
    () => () => {
      clearRevealTimer();
    },
    [],
  );

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-violet-300/25 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(167,139,250,0.24),transparent_42%),radial-gradient(circle_at_84%_80%,rgba(217,70,239,0.2),transparent_48%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">Zone 043</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Echo Story Signal</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-violet-100">
            <span>Score {score}</span>
            <span>Streak {streak}</span>
            <span>Lives {lives}</span>
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-black/40">
          <motion.div className="h-full bg-violet-300" animate={{ width: `${progress}%` }} transition={{ duration: 0.25 }} />
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
                  Decode briefing clues under pressure and choose the coherent team message. This mission trains memory + reasoning.
                </p>
                <ul className="space-y-1 text-xs text-violet-100">
                  <li>Win condition: clear all 8 narrative signals.</li>
                  <li>Fail condition: lose all 3 lives.</li>
                  <li>Scoring: coherent decisions earn base points + streak bonus.</li>
                </ul>
                <PhysicalButton onClick={start} className="h-12 bg-violet-400 px-8 text-sm font-black text-slate-950">
                  Start Decode Mission
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {(phase === "revealing" || phase === "answering") && round ? (
            <motion.section
              key={round.id}
              initial={{ opacity: 0.2, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-violet-100/30 bg-black/35 p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-violet-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <BookAudio className="h-3.5 w-3.5" />
                  Signal {roundIndex + 1}/{TOTAL_ROUNDS}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/35 px-3 py-1">
                  <Eye className="h-3.5 w-3.5" />
                  {phase === "revealing" ? "Clues visible" : "Recall mode"}
                </span>
              </div>

              <p className="text-sm text-violet-100">{round.prompt}</p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {round.clues.map((clue) => (
                  <div
                    key={`${round.id}-${clue}`}
                    className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                      phase === "revealing"
                        ? "border-violet-200/45 bg-violet-200/15 text-white"
                        : "border-violet-200/20 bg-violet-200/5 text-violet-200/35"
                    }`}
                  >
                    {phase === "revealing" ? clue : "••••"}
                  </div>
                ))}
              </div>

              {phase === "answering" ? (
                <div className="mt-5 grid gap-3">
                  {round.options.map((option) => {
                    const selected = selectedOption === option.id;
                    const selectedClass = selected
                      ? option.isCorrect
                        ? "border-emerald-300/70 bg-emerald-400/20"
                        : "border-rose-300/70 bg-rose-400/20"
                      : "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20";
                    return (
                      <button
                        key={option.id}
                        type="button"
                        disabled={selectedOption !== null}
                        onClick={() => chooseOption(option.id)}
                        className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${selectedClass}`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <MessagesSquare className="h-4 w-4" />
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-5 text-xs text-violet-200">Memorize now. Options unlock in a moment.</p>
              )}
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
                <MascotFriend id="echo" mood={resolution === "decoded" ? "cheering" : "sad"} size="lg" />
              </div>
              <h3 className="mt-3 text-2xl font-black text-white">
                {resolution === "decoded" ? "Signal Fully Decoded" : "Signal Collapsed"}
              </h3>
              <p className="mt-2 text-sm text-violet-100">
                Score {score} | Lives left {lives} | Interactions {Math.max(1, interactions)}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-violet-200">
                <Siren className="h-3.5 w-3.5" />
                {resolution === "decoded"
                  ? "Narrative coherence maintained through all rounds."
                  : "Clue recall broke down before mission completion."}
              </p>
              <div className="mt-5">
                <PhysicalButton onClick={start} className="h-11 bg-violet-400 px-7 text-sm font-black text-slate-950">
                  Replay Decode Run
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

