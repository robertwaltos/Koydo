"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type GameState = "menu" | "playing" | "feedback" | "gameover";

type Props = {
  width: number;
  height: number;
  onScore?: (score: number) => void;
  onExit?: () => void;
};

const GRID_SIZE = 3;
const LETTERS = ["C", "H", "K", "L", "Q", "R", "S", "T"];
const STIMULUS_MS = 2500;
const FEEDBACK_MS = 800;
const TOTAL_ROUNDS = 20;

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function GameDualNBack({ width, height, onScore, onExit }: Props) {
  const [state, setState] = useState<GameState>("menu");
  const [nLevel, setNLevel] = useState(2);
  const [round, setRound] = useState(0);
  const [positions, setPositions] = useState<number[]>([]);
  const [letters, setLetters] = useState<string[]>([]);
  const [currentPos, setCurrentPos] = useState(-1);
  const [currentLetter, setCurrentLetter] = useState("");
  const [posMatch, setPosMatch] = useState(false);
  const [letterMatch, setLetterMatch] = useState(false);
  const [posPressed, setPosPressed] = useState(false);
  const [letterPressed, setLetterPressed] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startGame = useCallback(() => {
    setPositions([]);
    setLetters([]);
    setRound(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setPosPressed(false);
    setLetterPressed(false);
    setFeedback(null);
    setState("playing");
  }, []);

  const nextRound = useCallback(() => {
    const newPos = randomInt(GRID_SIZE * GRID_SIZE);
    const newLetter = LETTERS[randomInt(LETTERS.length)];

    setPositions((prev) => [...prev, newPos]);
    setLetters((prev) => [...prev, newLetter]);
    setCurrentPos(newPos);
    setCurrentLetter(newLetter);
    setPosPressed(false);
    setLetterPressed(false);
    setFeedback(null);
    setRound((prev) => prev + 1);

    setPosMatch(false);
    setLetterMatch(false);
  }, []);

  // Compute matches after state updates
  useEffect(() => {
    if (state !== "playing" || round === 0) return;
    const posArr = positions;
    const letArr = letters;
    if (posArr.length > nLevel) {
      setPosMatch(posArr[posArr.length - 1] === posArr[posArr.length - 1 - nLevel]);
    }
    if (letArr.length > nLevel) {
      setLetterMatch(letArr[letArr.length - 1] === letArr[letArr.length - 1 - nLevel]);
    }
  }, [positions, letters, nLevel, state, round]);

  // Start rounds
  useEffect(() => {
    if (state !== "playing") return;
    nextRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // Timed progression
  useEffect(() => {
    if (state !== "playing" || round === 0) return;

    timerRef.current = setTimeout(() => {
      // Evaluate round
      const posCorrect = posMatch === posPressed;
      const letCorrect = letterMatch === letterPressed;
      const bothCorrect = posCorrect && letCorrect;

      if (bothCorrect) {
        setScore((s) => s + 10 + streak * 2);
        setStreak((s) => {
          const next = s + 1;
          setBestStreak((b) => Math.max(b, next));
          return next;
        });
        setFeedback("correct");
      } else {
        setStreak(0);
        setFeedback("wrong");
      }

      setState("feedback");

      setTimeout(() => {
        if (round >= TOTAL_ROUNDS) {
          setState("gameover");
        } else {
          setState("playing");
          nextRound();
        }
      }, FEEDBACK_MS);
    }, STIMULUS_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [round, state, posMatch, letterMatch, posPressed, letterPressed, streak, nextRound]);

  useEffect(() => {
    if (state === "gameover" && onScore) {
      onScore(score);
    }
  }, [state, score, onScore]);

  // Keyboard controls
  useEffect(() => {
    if (state !== "playing") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "a" || e.key === "A") setPosPressed(true);
      if (e.key === "l" || e.key === "L") setLetterPressed(true);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [state]);

  const compact = width < 400;
  const cellSize = Math.min(Math.floor((Math.min(width, height) - 120) / GRID_SIZE), 80);

  if (state === "menu") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-6 text-center" style={{ width, height }}>
        <div className="text-5xl">{"\uD83E\uDDE0"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Dual N-Back</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
          Remember the position and letter from <strong>{nLevel} steps back</strong>.
          Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs font-mono">A</kbd> for position match,{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs font-mono">L</kbd> for letter match.
        </p>
        <div className="flex gap-3">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setNLevel(n)}
              className={[
                "px-4 py-2 rounded-lg font-bold transition-all",
                nLevel === n
                  ? "bg-cyan-600 text-white scale-110"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
              ].join(" ")}
            >
              {n}-Back
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={startGame}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Start Training
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
        <div className="text-5xl">{"\uD83C\uDFC6"}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Training Complete!</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-600">{score}</div>
            <div className="text-xs text-slate-500">Score</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-violet-600">{nLevel}</div>
            <div className="text-xs text-slate-500">N-Level</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">{bestStreak}</div>
            <div className="text-xs text-slate-500">Best Streak</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={startGame}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold shadow-lg"
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
      className="flex flex-col items-center justify-center gap-4 p-4"
      style={{ width, height, background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-sm text-white">
        <div className="text-sm">
          Round <span className="font-bold">{round}</span>/{TOTAL_ROUNDS}
        </div>
        <div className="text-sm">
          Score: <span className="font-bold text-cyan-400">{score}</span>
        </div>
        <div className="text-sm">
          {nLevel}-Back
        </div>
      </div>

      {/* Grid */}
      <div
        className="grid gap-1.5 relative"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
          <div
            key={i}
            className={[
              "rounded-lg border-2 flex items-center justify-center transition-all duration-200",
              currentPos === i
                ? "bg-cyan-500/40 border-cyan-400 shadow-lg shadow-cyan-500/30"
                : "bg-slate-800/50 border-slate-700",
            ].join(" ")}
            style={{ width: cellSize, height: cellSize }}
          />
        ))}
      </div>

      {/* Current letter */}
      <div className="text-4xl font-bold text-white tracking-widest">
        {currentLetter}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={[
          "text-sm font-bold",
          feedback === "correct" ? "text-green-400" : "text-red-400",
        ].join(" ")}>
          {feedback === "correct" ? "Correct!" : "Wrong"}
        </div>
      )}

      {/* Match buttons */}
      <div className={`flex gap-4 ${compact ? "flex-col" : ""}`}>
        <button
          type="button"
          onClick={() => setPosPressed(true)}
          disabled={state !== "playing"}
          className={[
            "px-6 py-3 rounded-xl font-bold text-sm transition-all",
            posPressed
              ? "bg-cyan-500 text-white scale-95"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600",
          ].join(" ")}
        >
          Position Match (A)
        </button>
        <button
          type="button"
          onClick={() => setLetterPressed(true)}
          disabled={state !== "playing"}
          className={[
            "px-6 py-3 rounded-xl font-bold text-sm transition-all",
            letterPressed
              ? "bg-violet-500 text-white scale-95"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600",
          ].join(" ")}
        >
          Letter Match (L)
        </button>
      </div>

      {/* Streak */}
      {streak > 0 && (
        <div className="text-xs text-amber-400 font-semibold">
          Streak: {streak}
        </div>
      )}
    </div>
  );
}
