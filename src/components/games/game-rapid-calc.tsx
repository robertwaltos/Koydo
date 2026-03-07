"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type GameState = "menu" | "playing" | "gameover";
type Difficulty = "easy" | "medium" | "hard";
type Operation = "+" | "-" | "\u00D7" | "\u00F7";

type Props = {
  width: number;
  height: number;
  onScore?: (score: number) => void;
  onExit?: () => void;
};

const GAME_DURATION_MS = 60_000; // 60 seconds
const OPS: Operation[] = ["+", "-", "\u00D7", "\u00F7"];

function generateProblem(difficulty: Difficulty): { question: string; answer: number; options: number[] } {
  const op = OPS[Math.floor(Math.random() * (difficulty === "easy" ? 2 : difficulty === "medium" ? 3 : 4))];
  let a: number, b: number, answer: number;

  switch (op) {
    case "+":
      a = difficulty === "easy" ? Math.floor(Math.random() * 20) + 1 : Math.floor(Math.random() * 100) + 10;
      b = difficulty === "easy" ? Math.floor(Math.random() * 20) + 1 : Math.floor(Math.random() * 100) + 10;
      answer = a + b;
      break;
    case "-":
      b = difficulty === "easy" ? Math.floor(Math.random() * 20) + 1 : Math.floor(Math.random() * 50) + 10;
      a = b + (difficulty === "easy" ? Math.floor(Math.random() * 20) + 1 : Math.floor(Math.random() * 50) + 10);
      answer = a - b;
      break;
    case "\u00D7":
      a = difficulty === "medium" ? Math.floor(Math.random() * 12) + 2 : Math.floor(Math.random() * 15) + 2;
      b = difficulty === "medium" ? Math.floor(Math.random() * 12) + 2 : Math.floor(Math.random() * 15) + 2;
      answer = a * b;
      break;
    default: // ÷
      b = Math.floor(Math.random() * 12) + 2;
      answer = Math.floor(Math.random() * 12) + 1;
      a = b * answer;
      break;
  }

  // Generate 4 options including the correct answer
  const options = new Set<number>();
  options.add(answer);
  while (options.size < 4) {
    const offset = Math.floor(Math.random() * 10) + 1;
    const sign = Math.random() > 0.5 ? 1 : -1;
    const wrong = answer + offset * sign;
    if (wrong > 0) options.add(wrong);
  }

  return {
    question: `${a} ${op} ${b}`,
    answer,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
}

export default function GameRapidCalc({ width, height, onScore, onExit }: Props) {
  const [state, setState] = useState<GameState>("menu");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [problem, setProblem] = useState<ReturnType<typeof generateProblem> | null>(null);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_MS);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const startTimeRef = useRef(0);
  const animRef = useRef(0);

  const nextProblem = useCallback(() => {
    setProblem(generateProblem(difficulty));
    setFeedback(null);
  }, [difficulty]);

  const startGame = useCallback(() => {
    setScore(0);
    setCorrect(0);
    setWrong(0);
    setStreak(0);
    setBestStreak(0);
    setTimeLeft(GAME_DURATION_MS);
    startTimeRef.current = Date.now();
    setState("playing");
    nextProblem();
  }, [nextProblem]);

  // Timer
  useEffect(() => {
    if (state !== "playing") return;
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, GAME_DURATION_MS - elapsed);
      setTimeLeft(remaining);
      if (remaining <= 0) {
        setState("gameover");
        return;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [state]);

  useEffect(() => {
    if (state === "gameover" && onScore) {
      onScore(score);
    }
  }, [state, score, onScore]);

  const handleAnswer = (value: number) => {
    if (!problem || state !== "playing") return;

    if (value === problem.answer) {
      const streakBonus = streak * 2;
      setScore((s) => s + 10 + streakBonus);
      setCorrect((c) => c + 1);
      setStreak((s) => {
        const next = s + 1;
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
      setFeedback("correct");
    } else {
      setWrong((w) => w + 1);
      setStreak(0);
      setFeedback("wrong");
    }

    setTimeout(() => nextProblem(), 250);
  };

  const timePercent = (timeLeft / GAME_DURATION_MS) * 100;
  const seconds = Math.ceil(timeLeft / 1000);

  if (state === "menu") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 text-center" style={{ width, height }}>
        <div className="text-5xl">{"\u26A1"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Rapid Calculation</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
          Solve as many math problems as you can in 60 seconds! Build streaks for bonus points.
        </p>
        <div className="flex gap-3">
          {(["easy", "medium", "hard"] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDifficulty(d)}
              className={[
                "px-4 py-2 rounded-lg font-bold text-sm capitalize transition-all",
                difficulty === d
                  ? "bg-emerald-500 text-white scale-110"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
              ].join(" ")}
            >
              {d}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={startGame}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Start!
        </button>
        {onExit && (
          <button type="button" onClick={onExit} className="text-sm text-slate-500 hover:text-slate-700">
            Exit
          </button>
        )}
      </div>
    );
  }

  if (state === "gameover") {
    const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 text-center" style={{ width, height }}>
        <div className="text-5xl">{"\uD83C\uDFC6"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Time&apos;s Up!</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-4">
            <div className="text-3xl font-bold text-emerald-600">{score}</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-400">Score</div>
          </div>
          <div className="rounded-xl bg-blue-50 dark:bg-blue-900/30 p-4">
            <div className="text-3xl font-bold text-blue-600">{correct + wrong}</div>
            <div className="text-xs text-blue-700 dark:text-blue-400">Problems</div>
          </div>
          <div className="rounded-xl bg-violet-50 dark:bg-violet-900/30 p-4">
            <div className="text-3xl font-bold text-violet-600">{accuracy}%</div>
            <div className="text-xs text-violet-700 dark:text-violet-400">Accuracy</div>
          </div>
          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/30 p-4">
            <div className="text-3xl font-bold text-amber-600">{bestStreak}</div>
            <div className="text-xs text-amber-700 dark:text-amber-400">Best Streak</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={startGame}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg"
          >
            Play Again
          </button>
          {onExit && (
            <button
              type="button"
              onClick={onExit}
              className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold"
            >
              Exit
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center gap-5 p-4"
      style={{ width, height, background: "linear-gradient(135deg, #064e3b, #0f766e)" }}
    >
      {/* Timer bar */}
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-between text-white text-sm mb-1">
          <span>Score: <span className="font-bold text-emerald-300">{score}</span></span>
          <span className="font-mono font-bold text-lg">{seconds}s</span>
          <span>Streak: <span className="font-bold text-amber-300">{streak}</span></span>
        </div>
        <div className="h-2 rounded-full bg-white/20 overflow-hidden">
          <div
            className={[
              "h-full rounded-full transition-all",
              timePercent > 30 ? "bg-emerald-400" : timePercent > 10 ? "bg-amber-400" : "bg-red-400",
            ].join(" ")}
            style={{ width: `${timePercent}%` }}
          />
        </div>
      </div>

      {/* Problem */}
      {problem && (
        <>
          <div className="text-center">
            <div className="text-4xl font-bold text-white font-mono tracking-wider">
              {problem.question}
            </div>
            {feedback && (
              <div className={[
                "text-sm font-bold mt-2",
                feedback === "correct" ? "text-green-300" : "text-red-300",
              ].join(" ")}>
                {feedback === "correct" ? "Correct!" : `Wrong! It was ${problem.answer}`}
              </div>
            )}
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3 max-w-xs w-full">
            {problem.options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleAnswer(opt)}
                className="px-4 py-4 rounded-xl bg-white/15 backdrop-blur-sm text-white font-bold text-xl hover:bg-white/25 active:scale-95 transition-all border border-white/10"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}

      {streak >= 3 && (
        <div className="text-amber-300 text-sm font-bold animate-pulse">
          {"\uD83D\uDD25"} {streak}x Streak Bonus!
        </div>
      )}
    </div>
  );
}
