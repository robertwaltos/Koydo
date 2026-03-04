"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Heart, RotateCcw } from "lucide-react";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

type Phase = "ready" | "playing" | "complete";

export type QuizChoice = {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
};

export type QuizRound = {
  id: string;
  prompt: string;
  context: string;
  choices: QuizChoice[];
};

export type QuizGameTheme = {
  shellClass: string;
  panelClass: string;
  accentTextClass: string;
  accentBorderClass: string;
  buttonClass: string;
};

export type QuizGameConfig = {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  completion: string;
  lives: number;
  icon: LucideIcon;
  rounds: QuizRound[];
  theme: QuizGameTheme;
};

const ADVANCE_DELAY_MS = 650;

export default function QuizAdventureGame({ config }: { config: QuizGameConfig }) {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [lives, setLives] = useState(config.lives);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const sessionIdRef = useRef<string>(createLegacySessionId());
  const startedAtRef = useRef<number>(0);
  const completionEmittedRef = useRef<boolean>(false);

  const round = config.rounds[roundIndex];
  const progress = useMemo(() => {
    if (config.rounds.length === 0) return 0;
    return Math.min(100, Math.round((roundIndex / config.rounds.length) * 100));
  }, [config.rounds.length, roundIndex]);

  const performance = attempts === 0 ? 0 : Math.round((correct / attempts) * 100);

  const reset = () => {
    setPhase("ready");
    setRoundIndex(0);
    setLives(config.lives);
    setScore(0);
    setStreak(0);
    setAttempts(0);
    setCorrect(0);
    setSelectedChoiceId(null);
    sessionIdRef.current = createLegacySessionId();
    startedAtRef.current = Date.now();
    completionEmittedRef.current = false;
  };

  const start = () => {
    setPhase("playing");
    setMessage(config.intro);
    setMood("happy");
    startedAtRef.current = Date.now();
    completionEmittedRef.current = false;
    void hapticSelection();
  };

  const handleChoice = (choice: QuizChoice) => {
    if (phase !== "playing" || !round || selectedChoiceId) return;
    setSelectedChoiceId(choice.id);
    setAttempts((value) => value + 1);

    const finalRound = roundIndex >= config.rounds.length - 1;
    if (choice.isCorrect) {
      setCorrect((value) => value + 1);
      setStreak((value) => value + 1);
      setScore((value) => value + 10 + streak * 2);
      setMood("cheering");
      setMessage(choice.feedback);
      void hapticSuccess();

      if (finalRound) {
        setTimeout(() => setPhase("complete"), ADVANCE_DELAY_MS);
        return;
      }

      setTimeout(() => {
        setRoundIndex((value) => value + 1);
        setSelectedChoiceId(null);
      }, ADVANCE_DELAY_MS);
      return;
    }

    const remainingLives = lives - 1;
    setLives(remainingLives);
    setStreak(0);
    setMood("sad");
    setMessage(choice.feedback);
    void hapticError();

    if (remainingLives <= 0 || finalRound) {
      setTimeout(() => setPhase("complete"), ADVANCE_DELAY_MS);
      return;
    }

    setTimeout(() => {
      setRoundIndex((value) => value + 1);
      setSelectedChoiceId(null);
    }, ADVANCE_DELAY_MS);
  };

  const Icon = config.icon;

  useEffect(() => {
    if (phase !== "complete" || completionEmittedRef.current) return;
    completionEmittedRef.current = true;

    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: config.id,
      elapsedMs: Math.max(0, Date.now() - startedAtRef.current),
      interactions: Math.max(1, attempts),
      score,
      maxScore: Math.max(10, config.rounds.length * 10),
      source: "quiz-adventure-engine",
      occurredAt: new Date().toISOString(),
    });
  }, [attempts, config.id, config.rounds.length, phase, score]);

  return (
    <div className={`relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] border ${config.theme.shellClass}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12)_0%,transparent_65%)]" />
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className={`text-xs font-black uppercase tracking-[0.25em] ${config.theme.accentTextClass}`}>
              {config.subtitle}
            </p>
            <h2 className="text-3xl font-black text-white md:text-4xl">{config.title}</h2>
          </div>
          <div className="flex items-center gap-3 text-sm font-bold text-zinc-100">
            <span>Score {score}</span>
            <span>Streak {streak}</span>
            <span className="inline-flex items-center gap-1">
              <Heart className="h-4 w-4 text-rose-300" />
              {lives}
            </span>
          </div>
        </div>

        <div className="mb-6 h-2 overflow-hidden rounded-full bg-black/35">
          <motion.div
            className={`h-full ${config.theme.buttonClass}`}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>

        {phase === "playing" && round ? (
          <motion.div
            key={`${config.id}:${round.id}`}
            initial={{ opacity: 0.25, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-3xl border bg-black/35 p-6 ${config.theme.panelClass} ${config.theme.accentBorderClass}`}
          >
            <p className={`mb-2 text-xs font-black uppercase tracking-[0.2em] ${config.theme.accentTextClass}`}>
              Mission {roundIndex + 1} / {config.rounds.length}
            </p>
            <h3 className="text-xl font-black text-white md:text-2xl">{round.prompt}</h3>
            <p className="mt-2 text-sm text-zinc-300">{round.context}</p>

            <div className="mt-6 grid gap-3">
              {round.choices.map((choice) => {
                const isSelected = selectedChoiceId === choice.id;
                const selectedStyle = isSelected
                  ? choice.isCorrect
                    ? "border-emerald-300/60 bg-emerald-400/20"
                    : "border-rose-300/60 bg-rose-400/20"
                  : `border-white/20 bg-white/10 hover:border-white/40`;
                return (
                  <button
                    key={choice.id}
                    type="button"
                    disabled={Boolean(selectedChoiceId)}
                    onClick={() => handleChoice(choice)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold text-white transition ${selectedStyle}`}
                  >
                    {choice.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </div>

      <AnimatePresence>
        {phase === "ready" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/75 p-6 text-center"
          >
            <div className="space-y-4">
              <Icon className={`mx-auto h-12 w-12 ${config.theme.accentTextClass}`} />
              <h3 className="text-4xl font-black text-white">{config.title}</h3>
              <p className="max-w-lg text-sm text-zinc-300">{config.intro}</p>
              <PhysicalButton
                onClick={start}
                className={`h-12 rounded-2xl px-8 text-sm font-black text-white ${config.theme.buttonClass}`}
              >
                Start Mission
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}

        {phase === "complete" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 p-6 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-white">Session Complete</h3>
              <p className="text-sm text-zinc-300">{config.completion}</p>
              <p className="text-sm font-bold text-zinc-200">
                Score {score} | Correct {correct}/{attempts || config.rounds.length} | Accuracy {performance}%
              </p>
              <PhysicalButton
                onClick={reset}
                className={`h-12 rounded-2xl px-8 text-sm font-black text-white ${config.theme.buttonClass}`}
              >
                <span className="inline-flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Replay
                </span>
              </PhysicalButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
