/* -------------------------------------------------------------------------- */
/*  Crossword Engine — Fill in crossword grids                               */
/*  Educational crossword puzzles with clue-based word filling               */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars } from "@/lib/games/engine/scoring";

export type CrosswordClue = {
  id: string;
  answer: string;        // uppercase
  clue: string;
  emoji?: string;
  row: number;
  col: number;
  direction: "across" | "down";
};

export type CrosswordConfig = {
  title: string;
  gridSize: number;
  clues: CrosswordClue[];
};

type CellData = {
  letter: string;
  clueIds: string[];
  revealed: boolean;
};

type Props = {
  config: CrosswordConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { timeLimit: number; hintCost: number; revealLetters: number }> = {
  easy:   { timeLimit: 300_000, hintCost: 10,  revealLetters: 2 },
  medium: { timeLimit: 240_000, hintCost: 25,  revealLetters: 1 },
  hard:   { timeLimit: 180_000, hintCost: 50,  revealLetters: 0 },
};

export function CrosswordEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];

  // Build grid
  const grid = useMemo(() => {
    const g: (CellData | null)[][] = Array.from({ length: config.gridSize }, () =>
      Array.from({ length: config.gridSize }, () => null),
    );
    for (const clue of config.clues) {
      for (let i = 0; i < clue.answer.length; i++) {
        const r = clue.direction === "down" ? clue.row + i : clue.row;
        const c = clue.direction === "across" ? clue.col + i : clue.col;
        if (r < config.gridSize && c < config.gridSize) {
          if (!g[r]![c]) {
            g[r]![c] = { letter: clue.answer[i]!, clueIds: [clue.id], revealed: false };
          } else {
            g[r]![c]!.clueIds.push(clue.id);
          }
        }
      }
    }
    // Reveal starting letters based on difficulty
    if (settings.revealLetters > 0) {
      for (const clue of config.clues) {
        for (let i = 0; i < Math.min(settings.revealLetters, clue.answer.length); i++) {
          const r = clue.direction === "down" ? clue.row + i : clue.row;
          const c = clue.direction === "across" ? clue.col + i : clue.col;
          if (g[r]?.[c]) g[r]![c]!.revealed = true;
        }
      }
    }
    return g;
  }, [config, settings.revealLetters]);

  const [userGrid, setUserGrid] = useState<string[][]>(() =>
    grid.map((row) =>
      row.map((cell) => (cell?.revealed ? cell.letter : "")),
    ),
  );
  const [selectedCell, setSelectedCell] = useState<{ r: number; c: number } | null>(null);
  const [activeClue, setActiveClue] = useState<CrosswordClue | null>(config.clues[0] ?? null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [solvedClues, setSolvedClues] = useState<Set<string>>(new Set());
  const startTime = useRef(Date.now());

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

  // Check clue completion
  const checkClues = useCallback(
    (g: string[][]) => {
      const newSolved = new Set(solvedClues);
      let points = 0;
      for (const clue of config.clues) {
        if (newSolved.has(clue.id)) continue;
        let complete = true;
        for (let i = 0; i < clue.answer.length; i++) {
          const r = clue.direction === "down" ? clue.row + i : clue.row;
          const c = clue.direction === "across" ? clue.col + i : clue.col;
          if ((g[r]?.[c] ?? "").toUpperCase() !== clue.answer[i]) {
            complete = false;
            break;
          }
        }
        if (complete) {
          newSolved.add(clue.id);
          points += 50;
        }
      }
      if (points > 0) {
        setSolvedClues(newSolved);
        setScore((s) => s + points);
        // Check if all solved
        if (newSolved.size === config.clues.length) {
          const timeBonus = Math.round(timeLeft / 1000) * 2;
          setScore((s) => s + timeBonus);
          setPhase("complete");
        }
      }
    },
    [config.clues, solvedClues, timeLeft],
  );

  const handleCellInput = useCallback(
    (r: number, c: number, value: string) => {
      if (phase !== "playing") return;
      const cell = grid[r]?.[c];
      if (!cell || cell.revealed) return;

      const letter = value.toUpperCase().slice(-1);
      setUserGrid((prev) => {
        const next = prev.map((row) => [...row]);
        next[r]![c] = letter;
        checkClues(next);
        return next;
      });

      // Auto-advance to next cell in direction
      if (activeClue && letter) {
        const nextR = activeClue.direction === "down" ? r + 1 : r;
        const nextC = activeClue.direction === "across" ? c + 1 : c;
        if (grid[nextR]?.[nextC]) {
          setSelectedCell({ r: nextR, c: nextC });
        }
      }
    },
    [phase, grid, activeClue, checkClues],
  );

  const handleHint = useCallback(() => {
    if (phase !== "playing" || !activeClue || score < settings.hintCost) return;
    setScore((s) => s - settings.hintCost);

    // Reveal first unrevealed letter of active clue
    for (let i = 0; i < activeClue.answer.length; i++) {
      const r = activeClue.direction === "down" ? activeClue.row + i : activeClue.row;
      const c = activeClue.direction === "across" ? activeClue.col + i : activeClue.col;
      if ((userGrid[r]?.[c] ?? "").toUpperCase() !== activeClue.answer[i]) {
        setUserGrid((prev) => {
          const next = prev.map((row) => [...row]);
          next[r]![c] = activeClue.answer[i]!;
          checkClues(next);
          return next;
        });
        break;
      }
    }
  }, [phase, activeClue, score, settings.hintCost, userGrid, checkClues]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = config.clues.length * 50 + 60;
      onComplete({
        score,
        maxScore: Math.max(score, maxScore),
        stars: calculateStars(score, Math.max(score, maxScore)),
        timeMs: Date.now() - startTime.current,
        level: 1,
        difficulty,
      });
    }
  }, [phase, score, difficulty, config.clues.length, onComplete]);

  const pct = timeLeft / settings.timeLimit;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>
          {solvedClues.size}/{config.clues.length} words
        </span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      {/* Grid */}
      <div
        className="grid gap-0.5"
        style={{
          gridTemplateColumns: `repeat(${config.gridSize}, minmax(0, 1fr))`,
        }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => {
            if (!cell) {
              return (
                <div
                  key={`${r}-${c}`}
                  className="h-8 w-8 bg-stone-900 sm:h-9 sm:w-9"
                />
              );
            }

            const isSolved = cell.clueIds.some((id) => solvedClues.has(id));
            const isSelected = selectedCell?.r === r && selectedCell?.c === c;

            return (
              <div
                key={`${r}-${c}`}
                className={`relative h-8 w-8 sm:h-9 sm:w-9 ${
                  isSelected
                    ? "ring-2 ring-sky-400"
                    : isSolved
                      ? "bg-emerald-50"
                      : "bg-white"
                } border border-stone-200`}
              >
                <input
                  type="text"
                  maxLength={1}
                  value={userGrid[r]?.[c] ?? ""}
                  onChange={(e) => handleCellInput(r, c, e.target.value)}
                  onFocus={() => {
                    setSelectedCell({ r, c });
                    const clue = config.clues.find((cl) => cell.clueIds.includes(cl.id));
                    if (clue) setActiveClue(clue);
                  }}
                  disabled={cell.revealed || phase !== "playing"}
                  className={`absolute inset-0 w-full text-center text-sm font-bold uppercase ${
                    cell.revealed ? "text-sky-500" : isSolved ? "text-emerald-600" : "text-stone-700"
                  } bg-transparent outline-none`}
                />
              </div>
            );
          }),
        )}
      </div>

      {/* Active clue */}
      {activeClue && (
        <div className="w-full rounded-xl bg-sky-50 p-3 text-center">
          <p className="text-sm font-bold text-sky-700">
            {activeClue.emoji ?? "📝"}{" "}
            {activeClue.direction === "across" ? "→ Across" : "↓ Down"}
          </p>
          <p className="text-sm text-stone-600">{activeClue.clue}</p>
        </div>
      )}

      {/* Clue list & Hint */}
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-1 overflow-x-auto">
          {config.clues.map((clue) => (
            <button
              key={clue.id}
              type="button"
              onClick={() => {
                setActiveClue(clue);
                setSelectedCell({ r: clue.row, c: clue.col });
              }}
              className={`whitespace-nowrap rounded-lg px-2 py-1 text-xs font-semibold transition ${
                solvedClues.has(clue.id)
                  ? "bg-emerald-100 text-emerald-600 line-through"
                  : activeClue?.id === clue.id
                    ? "bg-sky-200 text-sky-700"
                    : "bg-stone-100 text-stone-500"
              }`}
            >
              {clue.direction === "across" ? "→" : "↓"} {clue.answer.length}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleHint}
          disabled={score < settings.hintCost || phase !== "playing"}
          className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-white shadow transition hover:bg-amber-500 disabled:opacity-40"
        >
          💡 Hint (-{settings.hintCost})
        </button>
      </div>
    </div>
  );
}
