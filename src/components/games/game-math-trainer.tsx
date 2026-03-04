"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, RotateCcw, Trophy, Timer, ArrowRight } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */

type Phase = "ready" | "playing" | "feedback" | "complete";
type Difficulty = "easy" | "medium" | "hard";
type Op = "+" | "−" | "×" | "÷";

const OPS_BY_DIFF: Record<Difficulty, Op[]> = {
  easy: ["+", "−"],
  medium: ["+", "−", "×"],
  hard: ["+", "−", "×", "÷"],
};

const RANGE_BY_DIFF: Record<Difficulty, [number, number]> = {
  easy: [1, 20],
  medium: [1, 50],
  hard: [1, 100],
};

const ROUNDS = 15;
const ROUND_TIME_MS = 12_000;
const MAX_SCORE = ROUNDS * 100;
const CHOICES_COUNT = 4;

interface Problem {
  text: string;
  answer: number;
  choices: number[];
}

function generate(diff: Difficulty): Problem {
  const ops = OPS_BY_DIFF[diff];
  const [lo, hi] = RANGE_BY_DIFF[diff];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a: number, b: number, answer: number;

  switch (op) {
    case "+":
      a = Math.floor(Math.random() * (hi - lo + 1)) + lo;
      b = Math.floor(Math.random() * (hi - lo + 1)) + lo;
      answer = a + b;
      break;
    case "−":
      a = Math.floor(Math.random() * (hi - lo + 1)) + lo;
      b = Math.floor(Math.random() * a) + 1;
      answer = a - b;
      break;
    case "×":
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      answer = a * b;
      break;
    case "÷":
      b = Math.floor(Math.random() * 11) + 2;
      answer = Math.floor(Math.random() * 12) + 1;
      a = b * answer;
      break;
    default:
      a = 1; b = 1; answer = 2;
  }

  // Build answer choices
  const choiceSet = new Set<number>([answer]);
  while (choiceSet.size < CHOICES_COUNT) {
    const offset = Math.floor(Math.random() * 10) + 1;
    const fake = Math.random() > 0.5 ? answer + offset : Math.max(0, answer - offset);
    choiceSet.add(fake);
  }
  const choices = Array.from(choiceSet).sort(() => Math.random() - 0.5);

  return { text: `${a} ${op} ${b}`, answer, choices };
}

/* ─── state ─── */

interface State {
  phase: Phase;
  sessionId: string;
  difficulty: Difficulty;
  round: number;
  problem: Problem;
  correct: number;
  wrong: number;
  streak: number;
  bestStreak: number;
  roundStartTime: number;
  elapsed: number;
  lastAnswer: { chosen: number; correct: number; isRight: boolean } | null;
  interactions: number;
  startTime: number;
}

type Action =
  | { type: "SET_DIFFICULTY"; difficulty: Difficulty }
  | { type: "START" }
  | { type: "ANSWER"; chosen: number }
  | { type: "NEXT" }
  | { type: "TICK"; now: number }
  | { type: "RESET" };

function init(): State {
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    difficulty: "easy",
    round: 0,
    problem: generate("easy"),
    correct: 0,
    wrong: 0,
    streak: 0,
    bestStreak: 0,
    roundStartTime: 0,
    elapsed: 0,
    lastAnswer: null,
    interactions: 0,
    startTime: 0,
  };
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "SET_DIFFICULTY":
      return { ...s, difficulty: a.difficulty };
    case "START": {
      const st = init();
      return {
        ...st,
        phase: "playing",
        difficulty: s.difficulty,
        problem: generate(s.difficulty),
        startTime: Date.now(),
        roundStartTime: Date.now(),
      };
    }
    case "ANSWER": {
      if (s.phase !== "playing") return s;
      const isRight = a.chosen === s.problem.answer;
      const timeBonus = Math.max(0, Math.round((1 - s.elapsed / ROUND_TIME_MS) * 50));
      const score = isRight ? 50 + timeBonus : 0;
      return {
        ...s,
        phase: "feedback",
        correct: s.correct + (isRight ? score : 0),
        wrong: s.wrong + (isRight ? 0 : 1),
        streak: isRight ? s.streak + 1 : 0,
        bestStreak: Math.max(s.bestStreak, isRight ? s.streak + 1 : s.streak),
        lastAnswer: { chosen: a.chosen, correct: s.problem.answer, isRight },
        interactions: s.interactions + 1,
      };
    }
    case "NEXT": {
      const next = s.round + 1;
      if (next >= ROUNDS) return { ...s, phase: "complete" };
      return {
        ...s,
        phase: "playing",
        round: next,
        problem: generate(s.difficulty),
        lastAnswer: null,
        roundStartTime: Date.now(),
        elapsed: 0,
      };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const elapsed = a.now - s.roundStartTime;
      if (elapsed >= ROUND_TIME_MS) {
        return {
          ...s,
          phase: "feedback",
          elapsed: ROUND_TIME_MS,
          wrong: s.wrong + 1,
          streak: 0,
          lastAnswer: { chosen: -1, correct: s.problem.answer, isRight: false },
          interactions: s.interactions + 1,
        };
      }
      return { ...s, elapsed };
    }
    case "RESET":
      return init();
    default:
      return s;
  }
}

/* ─── component ─── */

const DIFF_COLORS: Record<Difficulty, string> = {
  easy: "bg-green-500",
  medium: "bg-amber-500",
  hard: "bg-red-500",
};

export default function GameMathTrainer() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const { setMood } = useMascot();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (s.phase === "playing") {
      timerRef.current = setInterval(() => dispatch({ type: "TICK", now: Date.now() }), 100);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [s.phase, s.round]);

  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "math-trainer",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.correct,
        maxScore: MAX_SCORE,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.correct]);

  const answer = useCallback(
    (chosen: number) => {
      if (chosen === s.problem.answer) hapticSuccess();
      else hapticError();
      dispatch({ type: "ANSWER", chosen });
    },
    [s.problem.answer],
  );

  const stars = useMemo(() => {
    const pct = s.correct / MAX_SCORE;
    if (pct >= 0.7) return 3;
    if (pct >= 0.4) return 2;
    if (pct >= 0.15) return 1;
    return 0;
  }, [s.correct]);

  const timePct = Math.max(0, 100 - (s.elapsed / ROUND_TIME_MS) * 100);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-sky-50 to-cyan-50 p-6 dark:from-sky-950/40 dark:to-cyan-950/30">
      {/* header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-sky-500" aria-hidden />
          <h2 className="text-xl font-bold text-sky-700 dark:text-sky-300">Math Trainer</h2>
        </div>
        <MascotFriend id="spark" mood="happy" size="sm" />
      </div>

      {/* ─── ready ─── */}
      {s.phase === "ready" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col items-center gap-6 text-center"
        >
          <p className="text-lg text-sky-700 dark:text-sky-300">
            Solve {ROUNDS} problems as fast as you can!
          </p>
          <div className="flex gap-2">
            {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
              <motion.button
                key={d}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  hapticSelection();
                  dispatch({ type: "SET_DIFFICULTY", difficulty: d });
                }}
                className={`rounded-xl px-4 py-2 text-sm font-bold capitalize text-white transition-all ${
                  s.difficulty === d
                    ? `${DIFF_COLORS[d]} ring-2 ring-offset-2 ring-sky-400`
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                {d}
              </motion.button>
            ))}
          </div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Training
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── playing ─── */}
      {s.phase === "playing" && (
        <div className="flex w-full flex-1 flex-col items-center gap-3">
          <div className="flex w-full items-center justify-between text-sm text-sky-600 dark:text-sky-400">
            <span>
              Q{s.round + 1}/{ROUNDS}
            </span>
            <span className="flex items-center gap-1">
              <Timer className="h-4 w-4" />
              {Math.ceil((ROUND_TIME_MS - s.elapsed) / 1000)}s
            </span>
            <span>🔥 {s.streak}</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div className="h-full rounded-full bg-sky-500" style={{ width: `${timePct}%` }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={s.round}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex min-h-[80px] w-full items-center justify-center rounded-2xl bg-white text-3xl font-bold text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white sm:text-4xl"
            >
              {s.problem.text} = ?
            </motion.div>
          </AnimatePresence>

          <div className="grid w-full grid-cols-2 gap-3">
            {s.problem.choices.map((c) => (
              <motion.button
                key={c}
                whileTap={{ scale: 0.93 }}
                onClick={() => answer(c)}
                className="rounded-xl bg-sky-100 py-4 text-xl font-bold text-sky-800 shadow transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-200 dark:hover:bg-sky-800"
              >
                {c}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* ─── feedback ─── */}
      {s.phase === "feedback" && s.lastAnswer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className={`text-2xl font-bold ${s.lastAnswer.isRight ? "text-green-600" : "text-red-500"}`}>
            {s.lastAnswer.isRight ? "Correct! 🎉" : `Wrong — answer was ${s.lastAnswer.correct}`}
          </p>
          <PhysicalButton
            variant="primary"
            onClick={() => {
              hapticSelection();
              dispatch({ type: "NEXT" });
            }}
          >
            <ArrowRight className="mr-1 h-4 w-4" />
            {s.round + 1 >= ROUNDS ? "See Results" : "Next"}
          </PhysicalButton>
        </motion.div>
      )}

      {/* ─── complete ─── */}
      {s.phase === "complete" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col items-center gap-4 text-center"
        >
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-sky-700 dark:text-sky-300">Training Complete!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}{"☆".repeat(3 - stars)}
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-xl bg-white/70 p-4 text-sm dark:bg-white/10">
            <div>
              <p className="font-semibold text-green-600">Score</p>
              <p className="text-2xl font-bold">{s.correct}</p>
            </div>
            <div>
              <p className="font-semibold text-red-500">Errors</p>
              <p className="text-2xl font-bold">{s.wrong}</p>
            </div>
            <div>
              <p className="font-semibold text-sky-600">Best Streak</p>
              <p className="text-2xl font-bold">{s.bestStreak}</p>
            </div>
            <div>
              <p className="font-semibold text-sky-600">Difficulty</p>
              <p className="text-2xl font-bold capitalize">{s.difficulty}</p>
            </div>
          </div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> Train Again
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
