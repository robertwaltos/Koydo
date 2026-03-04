"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Text } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import { useMascot } from "@/components/experience/MascotHost";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";

type SentenceChallenge = {
  prompt: string;
  correct: string;
  wrongA: string;
  wrongB: string;
};

const CHALLENGES: SentenceChallenge[] = [
  {
    prompt: "Pick the best sentence.",
    correct: "The little fox jumps over the log.",
    wrongA: "the little fox jumps over the log",
    wrongB: "The little fox jump over the log.",
  },
  {
    prompt: "Choose the clearest sentence.",
    correct: "Mia packed her lunch before school.",
    wrongA: "Mia packed she lunch before school.",
    wrongB: "mia packed her lunch before school",
  },
  {
    prompt: "Find the sentence with correct punctuation.",
    correct: "Can we read one more chapter tonight?",
    wrongA: "Can we read one more chapter tonight",
    wrongB: "can we read one more chapter tonight?",
  },
  {
    prompt: "Select the best grammar.",
    correct: "Our class planted flowers in the garden.",
    wrongA: "Our class plant flowers in the garden.",
    wrongB: "our class planted flowers in the garden",
  },
];

function getChallenge(round: number): SentenceChallenge {
  return CHALLENGES[round % CHALLENGES.length]!;
}

function buildOptions(challenge: SentenceChallenge, round: number): string[] {
  const options = [challenge.correct, challenge.wrongA, challenge.wrongB];
  const pivot = round % options.length;
  return [...options.slice(pivot), ...options.slice(0, pivot)];
}

const getTimestampMs = () => new Date().getTime();

const getElapsedMs = (startedAtMs: number) => Math.max(0, getTimestampMs() - startedAtMs);

export default function SentenceSafari() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const sessionIdRef = useRef<string>(createLegacySessionId());
  const runStartedAtRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);
  const completionEmittedRef = useRef<boolean>(false);

  const resetRunTracking = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    runStartedAtRef.current = getTimestampMs();
    interactionCountRef.current = 0;
    completionEmittedRef.current = false;
  }, []);

  const challenge = useMemo(() => getChallenge(round), [round]);
  const options = useMemo(() => buildOptions(challenge, round), [challenge, round]);

  const start = () => {
    resetRunTracking();
    setPhase("playing");
    setRound(0);
    setScore(0);
    setLives(3);
    setMood("happy");
    setMessage("Safari started. Pick the best sentence each round.");
    void hapticSelection();
  };

  const restart = () => {
    resetRunTracking();
    setPhase("ready");
    setRound(0);
    setScore(0);
    setLives(3);
  };

  const answer = (sentence: string) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;

    if (sentence === challenge.correct) {
      setScore((value) => value + 12 + Math.min(18, round));
      setRound((value) => value + 1);
      setMood("cheering");
      setMessage("Strong sentence choice.");
      void hapticSuccess();
      return;
    }

    const nextLives = lives - 1;
    setLives(nextLives);
    setRound((value) => value + 1);
    setMood("sad");
    setMessage("Not the best sentence. Keep going.");
    void hapticError();
    if (nextLives <= 0) {
      if (!completionEmittedRef.current) {
        completionEmittedRef.current = true;
        emitLegacyGameComplete({
          sessionId: sessionIdRef.current,
          gameId: "sentence-safari",
          elapsedMs: getElapsedMs(runStartedAtRef.current),
          interactions: Math.max(1, interactionCountRef.current),
          score,
          maxScore: 4000,
          source: "component",
          occurredAt: new Date().toISOString(),
        });
      }
      setPhase("complete");
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-emerald-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.28)_0%,transparent_65%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between text-sm">
          <p className="font-black uppercase tracking-[0.22em] text-emerald-200">Sentence Safari</p>
          <p className="font-bold">Round {round + 1} | Lives {lives} | Score {score}</p>
        </div>

        {phase === "playing" ? (
          <div className="rounded-3xl border border-white/15 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">{challenge.prompt}</p>
            <div className="mt-4 grid gap-3">
              {options.map((sentence) => (
                <button
                  key={sentence}
                  type="button"
                  onClick={() => answer(sentence)}
                  className="rounded-2xl border border-emerald-200/25 bg-emerald-500/10 px-4 py-3 text-left text-sm transition hover:bg-emerald-500/20"
                >
                  {sentence}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {phase === "ready" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-emerald-950/93 p-6 text-center"
          >
            <div className="space-y-5">
              <Text className="mx-auto h-12 w-12 text-emerald-300" />
              <h3 className="text-4xl font-black text-emerald-200">Grammar Trek</h3>
              <p className="max-w-md text-sm text-zinc-300">Endless sentence quality rounds for writing fluency.</p>
              <PhysicalButton
                onClick={start}
                className="h-12 rounded-2xl border border-emerald-300/30 bg-emerald-500/25 px-8 font-black text-emerald-100"
              >
                Start
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}

        {phase === "complete" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-emerald-950/94 p-6 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-emerald-200">Safari Complete</h3>
              <p className="text-sm text-zinc-300">Final score {score} after {round} rounds.</p>
              <PhysicalButton
                onClick={restart}
                className="h-12 rounded-2xl border border-emerald-300/30 bg-emerald-500/25 px-8 font-black text-emerald-100"
              >
                <span className="inline-flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Restart
                </span>
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
