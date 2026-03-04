/* -------------------------------------------------------------------------- */
/*  Coding Blocks Engine — Visual block-based programming                    */
/*  Scratch/Blockly-inspired: arrange instruction blocks to solve puzzles    */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type CodeBlock = {
  id: string;
  emoji: string;
  label: string;
  action: string; // e.g., "move_right", "turn_left", "jump", "collect", "if_wall"
};

export type CodingPuzzle = {
  description: string;
  availableBlocks: CodeBlock[];
  solution: string[];        // ordered action ids — the correct program
  maxBlocks: number;
  bonusForMinimal?: boolean;
};

export type CodingBlocksConfig = {
  title: string;
  puzzles: CodingPuzzle[];
  infiniteMode?: boolean;
};

type Props = {
  config: CodingBlocksConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { puzzleCount: number; timeLimit: number; maxAttempts: number }> = {
  easy:   { puzzleCount: 3, timeLimit: 180_000, maxAttempts: 5 },
  medium: { puzzleCount: 5, timeLimit: 150_000, maxAttempts: 3 },
  hard:   { puzzleCount: 7, timeLimit: 120_000, maxAttempts: 2 },
};

export function CodingBlocksEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const puzzles = useRef(
    shuffle(config.puzzles).slice(0, Math.min(settings.puzzleCount, config.puzzles.length)),
  );

  const [puzzleIdx, setPuzzleIdx] = useState(0);
  const [program, setProgram] = useState<CodeBlock[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "running" | "complete">("playing");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [level, setLevel] = useState(1);
  const [runStep, setRunStep] = useState(-1);
  const startTime = useRef(Date.now());

  const puzzle = puzzles.current[puzzleIdx];

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

  const addBlock = useCallback(
    (block: CodeBlock) => {
      if (phase !== "playing" || !puzzle) return;
      if (program.length >= puzzle.maxBlocks) return;
      setProgram((prev) => [...prev, { ...block, id: `${block.id}-${Date.now()}` }]);
    },
    [phase, program.length, puzzle],
  );

  const removeBlock = useCallback(
    (index: number) => {
      if (phase !== "playing") return;
      setProgram((prev) => prev.filter((_, i) => i !== index));
    },
    [phase],
  );

  const runProgram = useCallback(() => {
    if (phase !== "playing" || !puzzle) return;
    setPhase("running");
    setAttempts((a) => a + 1);

    // Animate step by step
    let step = 0;
    const iv = setInterval(() => {
      if (step < program.length) {
        setRunStep(step);
        step++;
      } else {
        clearInterval(iv);
        // Check solution
        const programActions = program.map((b) => b.action);
        const isCorrect =
          programActions.length === puzzle.solution.length &&
          programActions.every((a, i) => a === puzzle.solution[i]);

        if (isCorrect) {
          const minimalBonus =
            puzzle.bonusForMinimal && program.length === puzzle.solution.length ? 50 : 0;
          setScore((s) => s + 100 + minimalBonus);
          setFeedback("✓ Program works!");

          setTimeout(() => {
            setFeedback(null);
            setRunStep(-1);

            if (puzzleIdx + 1 < puzzles.current.length) {
              setPuzzleIdx((i) => i + 1);
              setProgram([]);
              setAttempts(0);
              setPhase("playing");
            } else if (config.infiniteMode) {
              setLevel((l) => l + 1);
              puzzles.current = shuffle(config.puzzles).slice(
                0,
                Math.min(settings.puzzleCount + level, config.puzzles.length),
              );
              setPuzzleIdx(0);
              setProgram([]);
              setAttempts(0);
              setPhase("playing");
            } else {
              setPhase("complete");
            }
          }, 1500);
        } else {
          setFeedback(
            attempts + 1 >= settings.maxAttempts
              ? "✗ Out of attempts — moving on"
              : "✗ Bug detected! Try again.",
          );

          setTimeout(() => {
            setFeedback(null);
            setRunStep(-1);

            if (attempts + 1 >= settings.maxAttempts) {
              if (puzzleIdx + 1 < puzzles.current.length) {
                setPuzzleIdx((i) => i + 1);
                setProgram([]);
                setAttempts(0);
                setPhase("playing");
              } else {
                setPhase("complete");
              }
            } else {
              setPhase("playing");
            }
          }, 1500);
        }
      }
    }, 400);

    return () => clearInterval(iv);
  }, [phase, puzzle, program, puzzleIdx, config, settings, attempts, level]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = puzzles.current.length * 150;
      onComplete({
        score,
        maxScore: Math.max(score, maxScore),
        stars: calculateStars(score, Math.max(score, maxScore)),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete]);

  if (!puzzle) return null;

  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>
          Puzzle {puzzleIdx + 1}/{puzzles.current.length}
        </span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Mission */}
      <div className="w-full rounded-xl bg-violet-50 p-3 text-center text-sm font-medium text-violet-700">
        💻 {puzzle.description}
      </div>

      {/* Program area */}
      <div className="w-full rounded-xl border-2 border-dashed border-violet-200 bg-white p-3">
        <p className="mb-1 text-xs font-bold text-stone-500">
          Your Program ({program.length}/{puzzle.maxBlocks} blocks):
        </p>
        <div className="flex flex-wrap gap-1">
          <AnimatePresence>
            {program.map((block, i) => (
              <motion.button
                key={block.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: runStep === i ? 1.15 : 1,
                  boxShadow:
                    runStep === i
                      ? "0 0 12px rgba(139,92,246,0.5)"
                      : "0 1px 2px rgba(0,0,0,0.05)",
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                type="button"
                onClick={() => removeBlock(i)}
                disabled={phase === "running"}
                className="flex items-center gap-1 rounded-lg bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700 transition hover:bg-red-100"
              >
                <span>{block.emoji}</span>
                <span>{block.label}</span>
              </motion.button>
            ))}
          </AnimatePresence>
          {program.length === 0 && (
            <p className="py-2 text-xs text-stone-400">Add blocks from below...</p>
          )}
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`rounded-full px-4 py-1 text-sm font-bold ${
              feedback.startsWith("✓")
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Available blocks */}
      <div className="w-full">
        <p className="mb-1 text-xs font-bold text-stone-500">Available blocks:</p>
        <div className="flex flex-wrap gap-2">
          {puzzle.availableBlocks.map((block) => (
            <button
              key={block.id}
              type="button"
              onClick={() => addBlock(block)}
              disabled={phase !== "playing"}
              className="flex items-center gap-1 rounded-xl bg-violet-500 px-3 py-2 text-sm font-bold text-white shadow transition hover:bg-violet-600 disabled:opacity-40"
            >
              <span>{block.emoji}</span>
              <span>{block.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {phase === "playing" && program.length > 0 && (
          <>
            <button
              type="button"
              onClick={runProgram}
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-600"
            >
              ▶ Run
            </button>
            <button
              type="button"
              onClick={() => setProgram([])}
              className="rounded-full bg-stone-200 px-5 py-2 text-sm font-bold text-stone-600 shadow transition hover:bg-stone-300"
            >
              🗑 Clear
            </button>
          </>
        )}
      </div>

      <p className="text-xs text-stone-400">
        Attempts: {attempts}/{settings.maxAttempts}
      </p>
    </div>
  );
}
