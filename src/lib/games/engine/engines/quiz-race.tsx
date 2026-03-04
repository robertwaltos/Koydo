/* -------------------------------------------------------------------------- */
/*  Quiz Race Engine — Timed multiple-choice quiz                            */
/*  Supports: any subject with question/answer pairs                         */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type QuizQuestion = {
  id: string;
  question: string;
  emoji?: string;
  correctAnswer: string;
  wrongAnswers: string[];
  explanation?: string;
};

export type QuizRaceConfig = {
  title: string;
  questions: QuizQuestion[];
  infiniteMode?: boolean;
};

type Props = {
  config: QuizRaceConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { timePerQ: number; questionsCount: number }> = {
  easy:   { timePerQ: 15_000, questionsCount: 8 },
  medium: { timePerQ: 10_000, questionsCount: 12 },
  hard:   { timePerQ: 7_000, questionsCount: 15 },
};

export function QuizRaceEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const allQuestions = useRef(
    config.infiniteMode
      ? shuffle(config.questions)
      : shuffle(config.questions).slice(0, settings.questionsCount),
  );

  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timePerQ);
  const [phase, setPhase] = useState<"playing" | "feedback" | "complete">("playing");
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean; explanation?: string } | null>(null);
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  const currentQ = allQuestions.current[qIndex];
  const options = useRef<string[]>([]);

  // Shuffle options for current question
  useEffect(() => {
    if (!currentQ) return;
    options.current = shuffle([currentQ.correctAnswer, ...currentQ.wrongAnswers]);
  }, [currentQ]);

  // Timer countdown
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) {
          handleAnswer(null);
          return 0;
        }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, qIndex]);

  const handleAnswer = useCallback(
    (answer: string | null) => {
      if (phase !== "playing" || !currentQ) return;
      const correct = answer === currentQ.correctAnswer;

      if (correct) {
        const bonus = Math.max(1, Math.ceil(timeLeft / 1000));
        setScore((s) => s + 100 + bonus * 10);
        setStreak((s) => {
          const next = s + 1;
          setBestStreak((b) => Math.max(b, next));
          return next;
        });
      } else {
        setStreak(0);
      }

      setLastAnswer({ correct, explanation: currentQ.explanation });
      setPhase("feedback");

      setTimeout(() => {
        const nextIdx = qIndex + 1;
        if (config.infiniteMode && nextIdx >= allQuestions.current.length) {
          // Reshuffle and continue (infinite)
          allQuestions.current = shuffle(config.questions);
          setQIndex(0);
          setLevel((l) => l + 1);
        } else if (nextIdx >= allQuestions.current.length) {
          setPhase("complete");
          return;
        } else {
          setQIndex(nextIdx);
        }
        setTimeLeft(settings.timePerQ);
        setPhase("playing");
        setLastAnswer(null);
      }, 1500);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phase, currentQ, qIndex, timeLeft],
  );

  // Completion callback
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = allQuestions.current.length * 150;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  if (!currentQ) {
    return (
      <div className="flex h-64 items-center justify-center text-stone-400">
        No questions available
      </div>
    );
  }

  const pct = timeLeft / settings.timePerQ;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 p-4">
      {/* Progress */}
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Q{qIndex + 1}/{config.infiniteMode ? "∞" : allQuestions.current.length}</span>
        <span>Score: {score}</span>
        {streak > 1 && (
          <motion.span
            key={streak}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-amber-500"
          >
            🔥 {streak}
          </motion.span>
        )}
      </div>

      {/* Timer */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <motion.div
          className={`h-full ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          animate={{ width: `${pct * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={qIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="w-full rounded-2xl bg-white p-6 shadow-lg"
        >
          <p className="text-center text-3xl">{currentQ.emoji ?? "❓"}</p>
          <h3 className="mt-3 text-center text-lg font-bold text-stone-800">
            {currentQ.question}
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {options.current.map((opt) => {
              const isCorrect = lastAnswer && opt === currentQ.correctAnswer;
              const isWrong = lastAnswer && !lastAnswer.correct && opt !== currentQ.correctAnswer;
              return (
                <button
                  key={opt}
                  type="button"
                  disabled={phase !== "playing"}
                  onClick={() => handleAnswer(opt)}
                  className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                    isCorrect
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : isWrong
                        ? "border-red-300 bg-red-50 text-red-400"
                        : "border-stone-200 bg-stone-50 text-stone-700 hover:border-sky-300 hover:bg-sky-50"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {lastAnswer && lastAnswer.explanation && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-center text-xs text-stone-500"
            >
              💡 {lastAnswer.explanation}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-4 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(score, allQuestions.current.length * 150))}</p>
          <p className="mt-2 text-lg font-bold">{score} points · Best streak: {bestStreak}🔥</p>
        </motion.div>
      )}
    </div>
  );
}
