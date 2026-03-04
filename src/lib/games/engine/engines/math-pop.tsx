/* -------------------------------------------------------------------------- */
/*  Math-Pop Engine — Pop bubbles containing correct answers                 */
/*  Fast-paced mental math / number sense game                               */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle, clamp } from "@/lib/games/engine/scoring";

export type MathProblem = {
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
};

export type MathPopConfig = {
  title: string;
  problems: MathProblem[];
  infiniteMode?: boolean;
};

type Bubble = {
  key: number;
  answer: string;
  correct: boolean;
  x: number;
  y: number;
  speed: number;
  size: number;
  hue: number;
};

type Props = {
  config: MathPopConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { bubbleCount: number; speed: number; duration: number; problemCount: number }> = {
  easy:   { bubbleCount: 4, speed: 0.5, duration: 90_000,  problemCount: 10 },
  medium: { bubbleCount: 6, speed: 0.8, duration: 90_000,  problemCount: 15 },
  hard:   { bubbleCount: 8, speed: 1.2, duration: 90_000,  problemCount: 20 },
};

let _mpk = 0;

function makeBubbles(problem: MathProblem, count: number, speed: number): Bubble[] {
  const answers = shuffle([problem.correctAnswer, ...problem.wrongAnswers]).slice(0, count);
  // Ensure correct answer is included
  if (!answers.includes(problem.correctAnswer)) {
    answers[0] = problem.correctAnswer;
  }
  return shuffle(answers).map((answer, i) => ({
    key: ++_mpk,
    answer,
    correct: answer === problem.correctAnswer,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 70,
    speed: speed * (0.5 + Math.random()),
    size: 44 + Math.floor(Math.random() * 16),
    hue: Math.floor(Math.random() * 360),
  }));
}

export function MathPopEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const problems = useRef(shuffle(config.problems).slice(0, settings.problemCount));
  const [probIdx, setProbIdx] = useState(0);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.duration);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [level, setLevel] = useState(1);
  const [popFlash, setPopFlash] = useState<{ key: number; x: number; y: number; correct: boolean } | null>(null);
  const startTime = useRef(Date.now());
  const animRef = useRef(0);
  const lastFrame = useRef(performance.now());

  // Initialize bubbles for current problem
  useEffect(() => {
    const prob = problems.current[probIdx];
    if (!prob) return;
    setBubbles(makeBubbles(prob, settings.bubbleCount, settings.speed));
  }, [probIdx, settings.bubbleCount, settings.speed]);

  // Animate bubbles
  useEffect(() => {
    if (phase !== "playing") return;
    const loop = (now: number) => {
      const dt = (now - lastFrame.current) / 1000;
      lastFrame.current = now;
      setBubbles((prev) =>
        prev.map((b) => ({
          ...b,
          y: b.y - b.speed * dt * 10,
          x: b.x + Math.sin(now / 1000 + b.key) * 0.3,
        })).map((b) => (b.y < -15 ? { ...b, y: 110, x: 10 + Math.random() * 80 } : b)),
      );
      animRef.current = requestAnimationFrame(loop);
    };
    lastFrame.current = performance.now();
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase]);

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  const handlePop = useCallback(
    (bubble: Bubble) => {
      if (phase !== "playing") return;

      setPopFlash({ key: bubble.key, x: bubble.x, y: bubble.y, correct: bubble.correct });
      setTimeout(() => setPopFlash(null), 600);

      if (bubble.correct) {
        setScore((s) => s + 100 + streak * 30);
        setStreak((s) => s + 1);
        setCorrect((c) => c + 1);

        // Next problem
        const nextIdx = probIdx + 1;
        if (nextIdx >= problems.current.length) {
          if (config.infiniteMode) {
            problems.current = shuffle(config.problems).slice(0, settings.problemCount + level * 3);
            setProbIdx(0);
            setLevel((l) => l + 1);
          } else {
            setPhase("complete");
          }
        } else {
          setProbIdx(nextIdx);
        }
      } else {
        setStreak(0);
        setWrong((w) => w + 1);
        setScore((s) => Math.max(0, s - 25));
        // Remove wrong bubble
        setBubbles((prev) => prev.filter((b) => b.key !== bubble.key));
      }
    },
    [phase, streak, probIdx, config, settings, level],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = problems.current.length * 200;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(correct, problems.current.length),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, correct, level, difficulty, onComplete]);

  const problem = problems.current[probIdx];
  const pct = clamp(timeLeft / settings.duration, 0, 1);

  if (!problem) {
    return <div className="p-8 text-center text-stone-400">No problems available</div>;
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-2 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Q{probIdx + 1}/{problems.current.length}</span>
        {streak > 1 && <span className="text-amber-500">🔥 {streak}</span>}
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={probIdx}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="w-full rounded-xl bg-white p-4 text-center shadow-lg"
        >
          <p className="text-lg font-black text-stone-800">{problem.question}</p>
          <p className="text-xs text-stone-500 mt-1">Pop the correct answer!</p>
        </motion.div>
      </AnimatePresence>

      {/* Bubble field */}
      <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-indigo-100 to-purple-100 shadow-inner">
        {bubbles.map((b) => (
          <motion.button
            key={b.key}
            type="button"
            onClick={() => handlePop(b)}
            className="absolute flex items-center justify-center rounded-full font-bold text-white shadow-lg transition-transform hover:scale-110"
            style={{
              left: `${clamp(b.x, 5, 90)}%`,
              top: `${clamp(b.y, 5, 90)}%`,
              width: b.size,
              height: b.size,
              backgroundColor: `hsl(${b.hue}, 70%, 60%)`,
              transform: "translate(-50%, -50%)",
              fontSize: b.size * 0.35,
            }}
          >
            {b.answer}
          </motion.button>
        ))}

        {/* Pop effect */}
        <AnimatePresence>
          {popFlash && (
            <motion.div
              key={popFlash.key}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 2 }}
              exit={{ opacity: 0 }}
              className={`absolute text-2xl font-black ${
                popFlash.correct ? "text-emerald-500" : "text-red-500"
              }`}
              style={{
                left: `${popFlash.x}%`,
                top: `${popFlash.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {popFlash.correct ? "💥" : "💨"}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 text-xs text-stone-500">
        <span>✓ {correct}</span>
        <span>✗ {wrong}</span>
      </div>
    </div>
  );
}
