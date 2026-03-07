"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type GameState = "menu" | "showing" | "input" | "feedback" | "gameover";

type Props = {
  width: number;
  height: number;
  onScore?: (score: number) => void;
  onExit?: () => void;
};

const GRID = 9; // 3x3
const FLASH_MS = 600;
const GAP_MS = 200;

export default function GameSequenceMemory({ width, height, onScore, onExit }: Props) {
  const [state, setState] = useState<GameState>("menu");
  const [level, setLevel] = useState(3);
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerInput, setPlayerInput] = useState<number[]>([]);
  const [activeCell, setActiveCell] = useState(-1);
  const [score, setScore] = useState(0);
  const [highLevel, setHighLevel] = useState(3);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generateSequence = useCallback((len: number) => {
    const seq: number[] = [];
    for (let i = 0; i < len; i++) {
      seq.push(Math.floor(Math.random() * GRID));
    }
    return seq;
  }, []);

  const showSequence = useCallback((seq: number[]) => {
    setState("showing");
    let i = 0;
    const show = () => {
      if (i < seq.length) {
        setActiveCell(seq[i]);
        timerRef.current = setTimeout(() => {
          setActiveCell(-1);
          timerRef.current = setTimeout(() => {
            i++;
            show();
          }, GAP_MS);
        }, FLASH_MS);
      } else {
        setState("input");
        setPlayerInput([]);
      }
    };
    show();
  }, []);

  const startRound = useCallback((lvl: number) => {
    const seq = generateSequence(lvl);
    setSequence(seq);
    setFeedback(null);
    showSequence(seq);
  }, [generateSequence, showSequence]);

  const startGame = useCallback(() => {
    setLevel(3);
    setScore(0);
    setHighLevel(3);
    startRound(3);
  }, [startRound]);

  const handleCellClick = (index: number) => {
    if (state !== "input") return;

    const newInput = [...playerInput, index];
    setPlayerInput(newInput);

    // Flash the clicked cell
    setActiveCell(index);
    setTimeout(() => setActiveCell(-1), 150);

    // Check against sequence
    const pos = newInput.length - 1;
    if (newInput[pos] !== sequence[pos]) {
      // Wrong
      setFeedback("wrong");
      setState("feedback");
      setTimeout(() => setState("gameover"), 800);
      return;
    }

    if (newInput.length === sequence.length) {
      // Completed the sequence!
      const newLevel = level + 1;
      const points = level * 10;
      setScore((s) => s + points);
      setLevel(newLevel);
      setHighLevel((h) => Math.max(h, newLevel));
      setFeedback("correct");
      setState("feedback");
      setTimeout(() => startRound(newLevel), 1000);
    }
  };

  useEffect(() => {
    if (state === "gameover" && onScore) {
      onScore(score);
    }
  }, [state, score, onScore]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const cellSize = Math.min(Math.floor((Math.min(width, height) - 160) / 3), 90);

  if (state === "menu") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 text-center" style={{ width, height }}>
        <div className="text-5xl">{"\uD83E\uDDE0"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Sequence Memory</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
          Watch the sequence of highlighted cells, then repeat it from memory.
          The sequence grows longer each round!
        </p>
        <button
          type="button"
          onClick={startGame}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Start
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
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 text-center" style={{ width, height }}>
        <div className="text-5xl">{"\uD83D\uDCAB"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Game Over!</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/30 p-4">
            <div className="text-3xl font-bold text-amber-600">{score}</div>
            <div className="text-xs text-amber-700 dark:text-amber-400">Score</div>
          </div>
          <div className="rounded-xl bg-violet-50 dark:bg-violet-900/30 p-4">
            <div className="text-3xl font-bold text-violet-600">{highLevel - 1}</div>
            <div className="text-xs text-violet-700 dark:text-violet-400">Max Sequence</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={startGame}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg"
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
      className="flex flex-col items-center justify-center gap-6 p-4"
      style={{ width, height, background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-xs text-white">
        <div className="text-sm">Level <span className="font-bold text-amber-400">{level}</span></div>
        <div className="text-sm">Score: <span className="font-bold">{score}</span></div>
      </div>

      {/* Status */}
      <div className="text-sm font-semibold text-white">
        {state === "showing" && "Watch carefully..."}
        {state === "input" && `Your turn! (${playerInput.length}/${sequence.length})`}
        {state === "feedback" && feedback === "correct" && (
          <span className="text-green-400">Correct! Next level...</span>
        )}
        {state === "feedback" && feedback === "wrong" && (
          <span className="text-red-400">Wrong!</span>
        )}
      </div>

      {/* Grid */}
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(3, ${cellSize}px)`,
          gridTemplateRows: `repeat(3, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: GRID }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleCellClick(i)}
            disabled={state !== "input"}
            className={[
              "rounded-xl border-2 transition-all duration-200",
              activeCell === i
                ? "bg-amber-400 border-amber-300 shadow-lg shadow-amber-400/40 scale-105"
                : "bg-slate-700/60 border-slate-600 hover:bg-slate-600/60",
              state === "input" ? "cursor-pointer" : "cursor-default",
            ].join(" ")}
            style={{ width: cellSize, height: cellSize }}
          />
        ))}
      </div>

      {/* Sequence indicator dots */}
      <div className="flex gap-1.5">
        {sequence.map((_, i) => (
          <div
            key={i}
            className={[
              "w-2.5 h-2.5 rounded-full transition-all",
              i < playerInput.length ? "bg-green-400" : "bg-slate-600",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
