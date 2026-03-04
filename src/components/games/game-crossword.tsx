"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Grid2X2, RotateCcw, Trophy, CheckCircle, HelpCircle } from "lucide-react";
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

/* ─── crossword generator ─── */

interface Clue {
  word: string;
  hint: string;
  row: number;
  col: number;
  direction: "across" | "down";
  number: number;
}

interface Puzzle {
  grid: string[][]; // letters or ""
  clues: Clue[];
  rows: number;
  cols: number;
}

const WORD_BANK: { word: string; hint: string }[] = [
  { word: "PLANET", hint: "A body that orbits a star" },
  { word: "OCEAN", hint: "A vast body of salt water" },
  { word: "LIGHT", hint: "What the sun gives us" },
  { word: "MUSIC", hint: "Art of organized sound" },
  { word: "CLOUD", hint: "White fluffy shape in the sky" },
  { word: "APPLE", hint: "A red or green fruit" },
  { word: "BRAIN", hint: "The organ inside your head" },
  { word: "STORM", hint: "Bad weather with wind and rain" },
  { word: "TIGER", hint: "Striped big cat" },
  { word: "EARTH", hint: "Our home planet" },
  { word: "FROST", hint: "Ice crystals on a cold morning" },
  { word: "GRAPE", hint: "Small round fruit, often purple" },
  { word: "PLANT", hint: "A living thing that grows in soil" },
  { word: "RIVER", hint: "A natural stream of water" },
  { word: "SPACE", hint: "The area beyond Earth's atmosphere" },
  { word: "STONE", hint: "A hard solid piece of rock" },
  { word: "TRAIN", hint: "It runs on tracks" },
  { word: "WHALE", hint: "Largest mammal in the ocean" },
  { word: "BEACH", hint: "Sandy area by the sea" },
  { word: "CLOCK", hint: "It tells the time" },
  { word: "DANCE", hint: "Moving to rhythm" },
  { word: "EAGLE", hint: "A large bird of prey" },
  { word: "FIELD", hint: "An open area of land" },
  { word: "HORSE", hint: "Animal you can ride" },
  { word: "JUICE", hint: "Liquid from fruits" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generatePuzzle(): Puzzle {
  const GRID_SIZE = 12;
  const grid: string[][] = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(""));
  const placed: Clue[] = [];
  const words = shuffle(WORD_BANK);
  let clueNum = 1;

  // Place first word horizontally in center
  const first = words[0];
  const startCol = Math.floor((GRID_SIZE - first.word.length) / 2);
  const startRow = Math.floor(GRID_SIZE / 2);
  for (let i = 0; i < first.word.length; i++) {
    grid[startRow][startCol + i] = first.word[i];
  }
  placed.push({ ...first, row: startRow, col: startCol, direction: "across", number: clueNum++ });

  // Try to place remaining words by intersection
  for (let wi = 1; wi < words.length && placed.length < 6; wi++) {
    const w = words[wi];
    let bestFit: { row: number; col: number; direction: "across" | "down" } | null = null;

    for (const p of placed) {
      for (let pi = 0; pi < p.word.length; pi++) {
        for (let wi2 = 0; wi2 < w.word.length; wi2++) {
          if (p.word[pi] !== w.word[wi2]) continue;

          if (p.direction === "across") {
            // Try placing new word DOWN crossing p at pi
            const r = p.row - wi2;
            const c = p.col + pi;
            if (r < 0 || r + w.word.length > GRID_SIZE) continue;
            let ok = true;
            for (let k = 0; k < w.word.length; k++) {
              const cr = r + k;
              const existing = grid[cr][c];
              if (existing && existing !== w.word[k]) { ok = false; break; }
              // Check left/right neighbors for non-intersection cells
              if (cr !== p.row) {
                if (c > 0 && grid[cr][c - 1]) { ok = false; break; }
                if (c < GRID_SIZE - 1 && grid[cr][c + 1]) { ok = false; break; }
              }
            }
            // Check above/below endpoints
            if (ok && r > 0 && grid[r - 1][c]) ok = false;
            if (ok && r + w.word.length < GRID_SIZE && grid[r + w.word.length][c]) ok = false;
            if (ok) bestFit = { row: r, col: c, direction: "down" };
          } else {
            // Try placing new word ACROSS crossing p at pi
            const r = p.row + pi;
            const c = p.col - wi2;
            if (c < 0 || c + w.word.length > GRID_SIZE) continue;
            let ok = true;
            for (let k = 0; k < w.word.length; k++) {
              const cc = c + k;
              const existing = grid[r][cc];
              if (existing && existing !== w.word[k]) { ok = false; break; }
              if (r !== p.row + pi || cc !== p.col) {
                if (r > 0 && grid[r - 1][cc]) { ok = false; break; }
                if (r < GRID_SIZE - 1 && grid[r + 1][cc]) { ok = false; break; }
              }
            }
            if (ok && c > 0 && grid[r][c - 1]) ok = false;
            if (ok && c + w.word.length < GRID_SIZE && grid[r][c + w.word.length]) ok = false;
            if (ok) bestFit = { row: r, col: c, direction: "across" };
          }

          if (bestFit) break;
        }
        if (bestFit) break;
      }
      if (bestFit) break;
    }

    if (bestFit) {
      for (let k = 0; k < w.word.length; k++) {
        if (bestFit.direction === "across") {
          grid[bestFit.row][bestFit.col + k] = w.word[k];
        } else {
          grid[bestFit.row + k][bestFit.col] = w.word[k];
        }
      }
      placed.push({ ...w, row: bestFit.row, col: bestFit.col, direction: bestFit.direction, number: clueNum++ });
    }
  }

  return { grid, clues: placed, rows: GRID_SIZE, cols: GRID_SIZE };
}

/* ─── state ─── */

type Phase = "ready" | "playing" | "complete";

interface State {
  phase: Phase;
  sessionId: string;
  puzzle: Puzzle;
  userGrid: string[][]; // user's typed letters
  selectedClue: number | null; // index in puzzle.clues
  cursor: { row: number; col: number } | null;
  solved: Set<number>; // indices of solved clues
  interactions: number;
  startTime: number;
  hintUsed: number;
}

type Action =
  | { type: "START" }
  | { type: "SELECT_CLUE"; index: number }
  | { type: "TYPE"; letter: string }
  | { type: "BACKSPACE" }
  | { type: "CELL_CLICK"; row: number; col: number }
  | { type: "HINT" }
  | { type: "RESET" };

function initState(): State {
  const puzzle = generatePuzzle();
  return {
    phase: "ready",
    sessionId: createLegacySessionId(),
    puzzle,
    userGrid: Array.from({ length: puzzle.rows }, () => Array(puzzle.cols).fill("")),
    selectedClue: null,
    cursor: null,
    solved: new Set(),
    interactions: 0,
    startTime: 0,
    hintUsed: 0,
  };
}

function checkClue(clue: Clue, userGrid: string[][]): boolean {
  for (let i = 0; i < clue.word.length; i++) {
    const r = clue.direction === "down" ? clue.row + i : clue.row;
    const c = clue.direction === "across" ? clue.col + i : clue.col;
    if (userGrid[r][c].toUpperCase() !== clue.word[i]) return false;
  }
  return true;
}

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const st = initState();
      return { ...st, phase: "playing", startTime: Date.now() };
    }
    case "SELECT_CLUE": {
      const clue = s.puzzle.clues[a.index];
      if (!clue) return s;
      return { ...s, selectedClue: a.index, cursor: { row: clue.row, col: clue.col } };
    }
    case "CELL_CLICK": {
      if (s.phase !== "playing") return s;
      // Find which clue this cell belongs to
      for (let ci = 0; ci < s.puzzle.clues.length; ci++) {
        const c = s.puzzle.clues[ci];
        for (let i = 0; i < c.word.length; i++) {
          const r = c.direction === "down" ? c.row + i : c.row;
          const col = c.direction === "across" ? c.col + i : c.col;
          if (r === a.row && col === a.col) {
            return { ...s, selectedClue: ci, cursor: { row: a.row, col: a.col } };
          }
        }
      }
      return s;
    }
    case "TYPE": {
      if (s.phase !== "playing" || s.selectedClue === null || !s.cursor) return s;
      const clue = s.puzzle.clues[s.selectedClue];
      const letter = a.letter.toUpperCase();
      if (!/^[A-Z]$/.test(letter)) return s;

      const newGrid = s.userGrid.map((r) => [...r]);
      newGrid[s.cursor.row][s.cursor.col] = letter;

      // Advance cursor
      let nextRow = s.cursor.row;
      let nextCol = s.cursor.col;
      if (clue.direction === "across" && nextCol < clue.col + clue.word.length - 1) nextCol++;
      else if (clue.direction === "down" && nextRow < clue.row + clue.word.length - 1) nextRow++;

      // Check if clue is now solved
      const newSolved = new Set(s.solved);
      for (let ci = 0; ci < s.puzzle.clues.length; ci++) {
        if (!newSolved.has(ci) && checkClue(s.puzzle.clues[ci], newGrid)) {
          newSolved.add(ci);
        }
      }

      const done = newSolved.size === s.puzzle.clues.length;

      return {
        ...s,
        userGrid: newGrid,
        cursor: { row: nextRow, col: nextCol },
        solved: newSolved,
        interactions: s.interactions + 1,
        phase: done ? "complete" : s.phase,
      };
    }
    case "BACKSPACE": {
      if (s.phase !== "playing" || s.selectedClue === null || !s.cursor) return s;
      const clue = s.puzzle.clues[s.selectedClue];
      const newGrid = s.userGrid.map((r) => [...r]);
      newGrid[s.cursor.row][s.cursor.col] = "";
      // Move cursor back
      let prevRow = s.cursor.row;
      let prevCol = s.cursor.col;
      if (clue.direction === "across" && prevCol > clue.col) prevCol--;
      else if (clue.direction === "down" && prevRow > clue.row) prevRow--;

      return {
        ...s,
        userGrid: newGrid,
        cursor: { row: prevRow, col: prevCol },
        interactions: s.interactions + 1,
      };
    }
    case "HINT": {
      if (s.selectedClue === null || s.phase !== "playing") return s;
      const clue = s.puzzle.clues[s.selectedClue];
      const newGrid = s.userGrid.map((r) => [...r]);
      // Reveal first empty cell
      for (let i = 0; i < clue.word.length; i++) {
        const r = clue.direction === "down" ? clue.row + i : clue.row;
        const c = clue.direction === "across" ? clue.col + i : clue.col;
        if (!newGrid[r][c]) {
          newGrid[r][c] = clue.word[i];
          break;
        }
      }
      const newSolved = new Set(s.solved);
      for (let ci = 0; ci < s.puzzle.clues.length; ci++) {
        if (!newSolved.has(ci) && checkClue(s.puzzle.clues[ci], newGrid)) newSolved.add(ci);
      }
      const done = newSolved.size === s.puzzle.clues.length;
      return { ...s, userGrid: newGrid, hintUsed: s.hintUsed + 1, solved: newSolved, phase: done ? "complete" : s.phase };
    }
    case "RESET":
      return initState();
    default:
      return s;
  }
}

/* ─── component ─── */

export default function GameCrossword() {
  const [s, dispatch] = useReducer(reducer, undefined, initState);
  const { setMood } = useMascot();

  useEffect(() => {
    if (s.phase !== "playing") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        dispatch({ type: "BACKSPACE" });
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        dispatch({ type: "TYPE", letter: e.key });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [s.phase, s.selectedClue]);

  useEffect(() => {
    if (s.phase === "complete") {
      hapticCelebration();
      emitLegacyGameComplete({
        sessionId: s.sessionId,
        gameId: "crossword",
        elapsedMs: Date.now() - s.startTime,
        interactions: s.interactions,
        score: s.puzzle.clues.length - s.hintUsed,
        maxScore: s.puzzle.clues.length,
        source: "component",
        occurredAt: new Date().toISOString(),
      });
    }
  }, [s.phase, s.sessionId, s.startTime, s.interactions, s.puzzle.clues.length, s.hintUsed]);

  const stars = useMemo(() => {
    if (s.hintUsed === 0) return 3;
    if (s.hintUsed <= 2) return 2;
    return 1;
  }, [s.hintUsed]);

  // Determine which cells belong to puzzle
  const cellInPuzzle = useMemo(() => {
    const set = new Set<string>();
    for (const c of s.puzzle.clues) {
      for (let i = 0; i < c.word.length; i++) {
        const r = c.direction === "down" ? c.row + i : c.row;
        const col = c.direction === "across" ? c.col + i : c.col;
        set.add(`${r},${col}`);
      }
    }
    return set;
  }, [s.puzzle]);

  // Number labels for cells
  const cellNumbers = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of s.puzzle.clues) {
      const key = `${c.row},${c.col}`;
      if (!map.has(key)) map.set(key, c.number);
    }
    return map;
  }, [s.puzzle]);

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 rounded-3xl bg-gradient-to-b from-amber-50 to-yellow-50 p-6 dark:from-amber-950/40 dark:to-yellow-950/30">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Grid2X2 className="h-6 w-6 text-amber-500" aria-hidden />
          <h2 className="text-xl font-bold text-amber-700 dark:text-amber-300">Crossword</h2>
        </div>
        <MascotFriend id="echo" mood="happy" size="sm" />
      </div>

      {s.phase === "ready" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex flex-col items-center gap-6 text-center">
          <p className="text-lg text-amber-700 dark:text-amber-300">Solve the crossword puzzle!</p>
          <p className="text-sm text-amber-500">Tap a clue, then type letters · Hints available</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>
            Start Puzzle
          </PhysicalButton>
        </motion.div>
      )}

      {s.phase === "playing" && (
        <div className="flex w-full flex-1 flex-col gap-3 lg:flex-row">
          {/* grid */}
          <div className="flex-1">
            <div
              className="mx-auto grid gap-0 border border-gray-400 dark:border-gray-600"
              style={{
                gridTemplateColumns: `repeat(${s.puzzle.cols}, minmax(0, 1fr))`,
                maxWidth: `${s.puzzle.cols * 32}px`,
              }}
            >
              {Array.from({ length: s.puzzle.rows * s.puzzle.cols }, (_, idx) => {
                const r = Math.floor(idx / s.puzzle.cols);
                const c = idx % s.puzzle.cols;
                const key = `${r},${c}`;
                const inPuzzle = cellInPuzzle.has(key);
                const num = cellNumbers.get(key);
                const isCursor = s.cursor?.row === r && s.cursor?.col === c;
                const letter = s.userGrid[r][c];
                const solutionLetter = s.puzzle.grid[r][c];

                if (!inPuzzle) {
                  return <div key={idx} className="aspect-square bg-gray-800 dark:bg-gray-900" />;
                }

                return (
                  <button
                    key={idx}
                    onClick={() => dispatch({ type: "CELL_CLICK", row: r, col: c })}
                    className={`relative aspect-square border border-gray-300 text-center text-sm font-bold dark:border-gray-600 ${
                      isCursor
                        ? "bg-sky-200 dark:bg-sky-800"
                        : letter === solutionLetter && letter
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-white dark:bg-gray-800"
                    } text-gray-800 dark:text-white`}
                  >
                    {num && (
                      <span className="absolute left-0.5 top-0 text-[8px] text-gray-500">{num}</span>
                    )}
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* clues sidebar */}
          <div className="flex max-h-[300px] flex-col gap-2 overflow-y-auto pr-1 lg:max-h-none lg:w-56">
            <p className="text-xs font-bold text-amber-600 dark:text-amber-400">CLUES</p>
            {s.puzzle.clues.map((clue, ci) => (
              <button
                key={ci}
                onClick={() => {
                  hapticSelection();
                  dispatch({ type: "SELECT_CLUE", index: ci });
                }}
                className={`rounded-lg px-2 py-1 text-left text-xs transition-colors ${
                  s.selectedClue === ci
                    ? "bg-sky-200 dark:bg-sky-800"
                    : s.solved.has(ci)
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-white dark:bg-gray-800"
                } text-gray-700 dark:text-gray-300`}
              >
                <span className="font-bold">
                  {clue.number}
                  {clue.direction === "across" ? "A" : "D"}.
                </span>{" "}
                {clue.hint} ({clue.word.length})
              </button>
            ))}
            <PhysicalButton
              variant="secondary"
              onClick={() => {
                hapticSelection();
                dispatch({ type: "HINT" });
              }}
              className="mt-1 text-xs"
              disabled={s.selectedClue === null}
            >
              <HelpCircle className="mr-1 h-3 w-3" /> Hint ({s.hintUsed} used)
            </PhysicalButton>
          </div>

          {/* mobile keyboard row for touch */}
          <div className="flex flex-wrap justify-center gap-1 lg:hidden">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
              <button
                key={l}
                onClick={() => dispatch({ type: "TYPE", letter: l })}
                className="rounded bg-gray-200 px-2 py-1 text-xs font-bold dark:bg-gray-700"
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => dispatch({ type: "BACKSPACE" })}
              className="rounded bg-red-200 px-2 py-1 text-xs font-bold dark:bg-red-800"
            >
              ⌫
            </button>
          </div>
        </div>
      )}

      {s.phase === "complete" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex flex-col items-center gap-4 text-center">
          <Trophy className="h-12 w-12 text-amber-500" />
          <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">Puzzle Complete!</p>
          <div className="text-5xl" aria-label={`${stars} stars`}>
            {"★".repeat(stars)}{"☆".repeat(3 - stars)}
          </div>
          <p className="text-sm text-amber-600 dark:text-amber-400">
            Words: {s.puzzle.clues.length} · Hints used: {s.hintUsed}
          </p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "RESET" })}>
            <RotateCcw className="mr-2 h-4 w-4" /> New Puzzle
          </PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
