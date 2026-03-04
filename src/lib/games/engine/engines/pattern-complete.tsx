/* -------------------------------------------------------------------------- */
/*  Pattern-Complete Engine — Complete the pattern/sequence                   */
/*  Visual/logical pattern recognition game                                  */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type PatternItem = {
  id: string;
  emoji: string;
  label: string;
};

export type PatternPuzzle = {
  sequence: string[]; // item IDs in order
  missingIndex: number; // which one to guess
  distractors: string[]; // wrong answer IDs
};

export type PatternCompleteConfig = {
  title: string;
  items: PatternItem[];
  puzzles: PatternPuzzle[];
  infiniteMode?: boolean;
};

type Props = {
  config: PatternCompleteConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { puzzleCount: number; timeLimit: number; seqLength: number }> = {
  easy:   { puzzleCount: 6,  timeLimit: 120_000, seqLength: 4 },
  medium: { puzzleCount: 10, timeLimit: 120_000, seqLength: 6 },
  hard:   { puzzleCount: 15, timeLimit: 120_000, seqLength: 8 },
};

export function PatternCompleteEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const puzzles = useRef(
    config.puzzles.length > 0
      ? shuffle(config.puzzles).slice(0, settings.puzzleCount)
      : generatePuzzles(config.items, settings.puzzleCount, settings.seqLength),
  );

  const [puzzleIdx, setPuzzleIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "feedback" | "complete">("playing");
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean } | null>(null);
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  const puzzle = puzzles.current[puzzleIdx];

  const options = useMemo(() => {
    if (!puzzle) return [];
    const correctId = puzzle.sequence[puzzle.missingIndex]!;
    return shuffle([correctId, ...puzzle.distractors.slice(0, 3)]);
  }, [puzzle]);

  // Timer
  useEffect(() => {
    if (phase === "complete") return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) { setPhase("complete"); return 0; }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [phase]);

  const handleAnswer = useCallback(
    (itemId: string) => {
      if (phase !== "playing" || !puzzle) return;
      const correct = itemId === puzzle.sequence[puzzle.missingIndex];

      if (correct) {
        setScore((s) => s + 100 + streak * 25);
        setStreak((s) => s + 1);
      } else {
        setStreak(0);
      }

      setLastAnswer({ correct });
      setPhase("feedback");

      setTimeout(() => {
        const nextIdx = puzzleIdx + 1;
        if (nextIdx >= puzzles.current.length) {
          if (config.infiniteMode) {
            puzzles.current = generatePuzzles(config.items, settings.puzzleCount + level * 2, settings.seqLength + 1);
            setPuzzleIdx(0);
            setLevel((l) => l + 1);
          } else {
            setPhase("complete");
            return;
          }
        } else {
          setPuzzleIdx(nextIdx);
        }
        setLastAnswer(null);
        setPhase("playing");
      }, 1200);
    },
    [phase, puzzle, puzzleIdx, streak, config, settings, level],
  );

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = puzzles.current.length * 150;
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

  if (!puzzle) {
    return <div className="p-8 text-center text-stone-400">No puzzles available</div>;
  }

  const getItem = (id: string) => config.items.find((i) => i.id === id);
  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Q{puzzleIdx + 1}/{puzzles.current.length}</span>
        <span>Score: {score}</span>
        {streak > 1 && <span className="text-amber-500">🔥 {streak}</span>}
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      <h3 className="text-center text-sm font-medium text-stone-500">
        Complete the pattern:
      </h3>

      {/* Pattern sequence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={puzzleIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {puzzle.sequence.map((id, i) => {
            const isMissing = i === puzzle.missingIndex;
            const item = getItem(id);
            return (
              <motion.div
                key={i}
                className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl shadow ${
                  isMissing
                    ? "border-2 border-dashed border-sky-400 bg-sky-50"
                    : "bg-white"
                }`}
                animate={isMissing ? { scale: [1, 1.05, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                {isMissing ? (
                  lastAnswer ? (
                    <span>{getItem(puzzle.sequence[puzzle.missingIndex]!)?.emoji}</span>
                  ) : (
                    <span className="text-sky-400 text-lg">?</span>
                  )
                ) : (
                  item?.emoji ?? "?"
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {lastAnswer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`rounded-full px-4 py-1 text-sm font-bold ${
              lastAnswer.correct ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            }`}
          >
            {lastAnswer.correct ? "✓ Correct!" : "✗ Not quite!"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Answer options */}
      <div className="flex flex-wrap justify-center gap-3">
        {options.map((id) => {
          const item = getItem(id);
          if (!item) return null;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleAnswer(id)}
              disabled={phase !== "playing"}
              className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white shadow-md transition-all hover:shadow-lg hover:bg-stone-50 disabled:opacity-50"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-[10px] font-semibold text-stone-500">{item.label}</span>
            </button>
          );
        })}
      </div>

      {phase === "complete" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
          <p className="text-3xl">{"⭐".repeat(calculateStars(score, puzzles.current.length * 150))}</p>
          <p className="mt-1 font-bold text-stone-700">{score} pts</p>
        </motion.div>
      )}
    </div>
  );
}

/** Auto-generate puzzles from item pool */
function generatePuzzles(items: PatternItem[], count: number, seqLen: number): PatternPuzzle[] {
  const puzzles: PatternPuzzle[] = [];
  for (let i = 0; i < count; i++) {
    // Create a repeating pattern
    const patternLen = 2 + Math.floor(Math.random() * 3); // 2-4 unique items
    const pattern = shuffle(items).slice(0, patternLen).map((it) => it.id);
    const sequence: string[] = [];
    for (let j = 0; j < seqLen; j++) {
      sequence.push(pattern[j % patternLen]!);
    }
    const missingIndex = Math.floor(Math.random() * seqLen);
    const correctId = sequence[missingIndex]!;
    const distractors = shuffle(items.filter((it) => it.id !== correctId))
      .slice(0, 3)
      .map((it) => it.id);
    puzzles.push({ sequence, missingIndex, distractors });
  }
  return puzzles;
}
