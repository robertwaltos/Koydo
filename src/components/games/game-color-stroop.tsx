"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type GameState = "menu" | "playing" | "gameover";

type Props = {
  width: number;
  height: number;
  onScore?: (score: number) => void;
  onExit?: () => void;
};

const COLORS = [
  { name: "RED", hex: "#ef4444" },
  { name: "BLUE", hex: "#3b82f6" },
  { name: "GREEN", hex: "#22c55e" },
  { name: "YELLOW", hex: "#eab308" },
  { name: "PURPLE", hex: "#a855f7" },
  { name: "ORANGE", hex: "#f97316" },
];

const ROUND_TIME_MS = 3000;
const TOTAL_ROUNDS = 25;

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function GameColorStroop({ width, height, onScore, onExit }: Props) {
  const [state, setState] = useState<GameState>("menu");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [word, setWord] = useState("");
  const [displayColor, setDisplayColor] = useState("");
  const [actualColorName, setActualColorName] = useState("");
  const [options, setOptions] = useState<typeof COLORS>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const roundStartRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generateRound = useCallback(() => {
    const wordColor = pickRandom(COLORS);
    const inkColor = pickRandom(COLORS);

    setWord(wordColor.name);
    setDisplayColor(inkColor.hex);
    setActualColorName(inkColor.name);

    // Create 4 options including the correct answer (ink color)
    const opts = new Set<(typeof COLORS)[number]>();
    opts.add(inkColor);
    while (opts.size < Math.min(4, COLORS.length)) {
      opts.add(pickRandom(COLORS));
    }
    setOptions(Array.from(opts).sort(() => Math.random() - 0.5));
    setFeedback(null);
    roundStartRef.current = Date.now();
  }, []);

  const startGame = useCallback(() => {
    setRound(0);
    setScore(0);
    setCorrect(0);
    setWrong(0);
    setReactionTimes([]);
    setState("playing");
  }, []);

  useEffect(() => {
    if (state !== "playing") return;
    if (round >= TOTAL_ROUNDS) {
      setState("gameover");
      return;
    }
    generateRound();

    timerRef.current = setTimeout(() => {
      // Time ran out — count as wrong
      setWrong((w) => w + 1);
      setFeedback("wrong");
      setTimeout(() => {
        setRound((r) => r + 1);
      }, 400);
    }, ROUND_TIME_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state, round, generateRound]);

  useEffect(() => {
    if (state === "gameover" && onScore) {
      onScore(score);
    }
  }, [state, score, onScore]);

  const handleAnswer = (colorName: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const reactionMs = Date.now() - roundStartRef.current;
    setReactionTimes((prev) => [...prev, reactionMs]);

    if (colorName === actualColorName) {
      const timeBonus = Math.max(0, Math.floor((ROUND_TIME_MS - reactionMs) / 100));
      setScore((s) => s + 10 + timeBonus);
      setCorrect((c) => c + 1);
      setFeedback("correct");
    } else {
      setWrong((w) => w + 1);
      setFeedback("wrong");
    }

    setTimeout(() => {
      setRound((r) => r + 1);
    }, 400);
  };

  const avgReaction = reactionTimes.length > 0
    ? Math.round(reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length)
    : 0;

  if (state === "menu") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 text-center" style={{ width, height }}>
        <div className="text-5xl">{"\uD83C\uDFA8"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Color Stroop Test</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
          A word will appear in a <strong>colored ink</strong>. Select the <strong>color of the ink</strong>, not what the word says.
          This tests your processing speed and selective attention.
        </p>
        <div className="flex flex-col items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 p-4">
          <p className="text-xs text-slate-500">Example: if you see</p>
          <span className="text-3xl font-black" style={{ color: "#3b82f6" }}>RED</span>
          <p className="text-xs text-slate-500">the answer is <strong>BLUE</strong> (the ink color)</p>
        </div>
        <button
          type="button"
          onClick={startGame}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Start Test
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
        <div className="text-5xl">{"\u26A1"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Results</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-4">
            <div className="text-3xl font-bold text-emerald-600">{score}</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-400">Score</div>
          </div>
          <div className="rounded-xl bg-blue-50 dark:bg-blue-900/30 p-4">
            <div className="text-3xl font-bold text-blue-600">{avgReaction}ms</div>
            <div className="text-xs text-blue-700 dark:text-blue-400">Avg Reaction</div>
          </div>
          <div className="rounded-xl bg-violet-50 dark:bg-violet-900/30 p-4">
            <div className="text-3xl font-bold text-violet-600">{accuracy}%</div>
            <div className="text-xs text-violet-700 dark:text-violet-400">Accuracy</div>
          </div>
          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/30 p-4">
            <div className="text-3xl font-bold text-amber-600">{correct}/{correct + wrong}</div>
            <div className="text-xs text-amber-700 dark:text-amber-400">Correct</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={startGame}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold shadow-lg"
          >
            Try Again
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
      className="flex flex-col items-center justify-center gap-6 p-6"
      style={{ width, height, background: "linear-gradient(135deg, #0f172a, #1e1b2e)" }}
    >
      {/* Progress */}
      <div className="flex items-center justify-between w-full max-w-sm text-white">
        <div className="text-sm">Round {round + 1}/{TOTAL_ROUNDS}</div>
        <div className="text-sm">Score: <span className="font-bold text-cyan-400">{score}</span></div>
      </div>
      <div className="w-full max-w-sm h-1.5 rounded-full bg-slate-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose-500 to-purple-500 transition-all"
          style={{ width: `${((round + 1) / TOTAL_ROUNDS) * 100}%` }}
        />
      </div>

      {/* Stimulus */}
      <div className="flex items-center justify-center h-32">
        <span
          className="font-black tracking-wider select-none"
          style={{ color: displayColor, fontSize: Math.min(width / 6, 72) }}
        >
          {word}
        </span>
      </div>

      {/* Feedback flash */}
      {feedback && (
        <div className={[
          "text-lg font-bold",
          feedback === "correct" ? "text-green-400" : "text-red-400",
        ].join(" ")}>
          {feedback === "correct" ? "Correct!" : "Wrong!"}
        </div>
      )}

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 max-w-sm w-full">
        {options.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => handleAnswer(color.name)}
            className="px-4 py-4 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ backgroundColor: color.hex }}
          >
            {color.name}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-400">Select the INK COLOR, not the word</p>
    </div>
  );
}
