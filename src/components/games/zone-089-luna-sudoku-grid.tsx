"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, CheckCircle } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();
type Phase = "ready" | "playing" | "complete";

// ─── Puzzles: 0 = empty ───────────────────────────────────────────────────────
const PUZZLES: { puzzle: number[]; solution: number[] }[] = [
  {
    puzzle:   [5,3,0, 0,7,0, 0,0,0,  6,0,0, 1,9,5, 0,0,0,  0,9,8, 0,0,0, 0,6,0,
               8,0,0, 0,6,0, 0,0,3,  4,0,0, 8,0,3, 0,0,1,  7,0,0, 0,2,0, 0,0,6,
               0,6,0, 0,0,0, 2,8,0,  0,0,0, 4,1,9, 0,0,5,  0,0,0, 0,8,0, 0,7,9],
    solution: [5,3,4, 6,7,8, 9,1,2,  6,7,2, 1,9,5, 3,4,8,  1,9,8, 3,4,2, 5,6,7,
               8,5,9, 7,6,1, 4,2,3,  4,2,6, 8,5,3, 7,9,1,  7,1,3, 9,2,4, 8,5,6,
               9,6,1, 5,3,7, 2,8,4,  2,8,7, 4,1,9, 6,3,5,  3,4,5, 2,8,6, 1,7,9],
  },
  {
    puzzle:   [0,0,0, 2,6,0, 7,0,1,  6,8,0, 0,7,0, 0,9,0,  1,9,0, 0,0,4, 5,0,0,
               8,2,0, 1,0,0, 0,4,0,  0,0,4, 6,0,2, 9,0,0,  0,5,0, 0,0,3, 0,2,8,
               0,0,9, 3,0,0, 0,7,4,  0,4,0, 0,5,0, 0,3,6,  7,0,3, 0,1,8, 0,0,0],
    solution: [4,3,5, 2,6,9, 7,8,1,  6,8,2, 5,7,1, 4,9,3,  1,9,7, 8,3,4, 5,6,2,
               8,2,6, 1,9,5, 3,4,7,  3,7,4, 6,8,2, 9,1,5,  9,5,1, 7,4,3, 6,2,8,
               5,1,9, 3,2,6, 8,7,4,  2,4,8, 9,5,7, 1,3,6,  7,6,3, 4,1,8, 2,5,9],
  },
];

function puzzleCells(puzzle: number[]): (number | null)[] {
  return puzzle.map((v) => (v === 0 ? null : v));
}

function isFixed(cells: (number | null)[], idx: number): boolean {
  return cells[idx] !== null;
}

function checkConflict(cells: (number | null)[], idx: number, val: number): boolean {
  const row = Math.floor(idx / 9);
  const col = idx % 9;
  const boxR = Math.floor(row / 3) * 3;
  const boxC = Math.floor(col / 3) * 3;
  for (let i = 0; i < 9; i++) {
    const rIdx = row * 9 + i;
    const cIdx = i * 9 + col;
    const bIdx = (boxR + Math.floor(i / 3)) * 9 + (boxC + (i % 3));
    if (rIdx !== idx && cells[rIdx] === val) return true;
    if (cIdx !== idx && cells[cIdx] === val) return true;
    if (bIdx !== idx && cells[bIdx] === val) return true;
  }
  return false;
}

export default function Zone089LunaSudokuGrid() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [cells, setCells] = useState<(number | null)[]>([]);
  const [fixed, setFixed] = useState<boolean[]>([]);
  const [solution, setSolution] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [errors, setErrors] = useState<Set<number>>(new Set());
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);

  const startGame = useCallback(() => {
    const p = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
    const initCells = puzzleCells(p.puzzle);
    const initFixed = p.puzzle.map((v) => v !== 0);
    setCells(initCells);
    setFixed(initFixed);
    setSolution(p.solution);
    setSelected(null);
    setErrors(new Set());
    setInteractions(0);
    setMistakeCount(0);
    setPhase("playing");
    mascot.speak("Fill the grid! Every row, column, and box needs 1–9.", "happy");
  }, [mascot]);

  const placeNumber = useCallback((num: number) => {
    if (selected === null || phase !== "playing") return;
    if (fixed[selected]) return;
    setInteractions((n) => n + 1);
    hapticSelection();

    setCells((prev) => {
      const next = [...prev];
      next[selected] = num;

      // Check conflict
      const hasConflict = checkConflict(next, selected, num);
      const isWrong = num !== solution[selected];

      if (hasConflict || isWrong) {
        hapticError();
        setErrors((e) => new Set(e).add(selected));
        setMistakeCount((n) => n + 1);
        if (isWrong) mascot.speak("That doesn't fit there!", "confused");
      } else {
        setErrors((e) => { const s = new Set(e); s.delete(selected); return s; });
        // Check win
        const filled = next.every((v) => v !== null);
        const correct = next.every((v, i) => v === solution[i]);
        if (filled && correct) {
          hapticSuccess();
          setPhase("complete");
          mascot.speak("Sudoku solved! Amazing logic!", "celebrate");
          emitLegacyGameComplete({
            sessionId: SESSION_ID,
            gameId: "zone-089",
            score: Math.max(100 - mistakeCount * 5, 10),
            maxScore: 100,
            elapsedMs: Date.now() - startTime,
            interactions,
            difficulty: "hard",
          });
        }
      }
      return next;
    });
  }, [fixed, interactions, mascot, mistakeCount, phase, selected, solution, startTime]);

  const clearSelected = useCallback(() => {
    if (selected === null || fixed[selected]) return;
    setCells((prev) => { const n = [...prev]; n[selected] = null; return n; });
    setErrors((e) => { const s = new Set(e); s.delete(selected!); return s; });
  }, [fixed, selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase !== "playing") return;
      if (e.key >= "1" && e.key <= "9") placeNumber(parseInt(e.key));
      if (e.key === "Backspace" || e.key === "Delete") clearSelected();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clearSelected, phase, placeNumber]);

  const getCellStyle = (idx: number): string => {
    const row = Math.floor(idx / 9), col = idx % 9;
    const boxR = Math.floor(row / 3), boxC = Math.floor(col / 3);
    const boxColor = (boxR + boxC) % 2 === 0 ? "bg-sky-50" : "bg-indigo-50";
    if (selected === idx) return "bg-amber-200 border-amber-500";
    if (errors.has(idx)) return "bg-red-100 border-red-400";
    if (fixed[idx]) return `${boxColor} border-stone-300`;
    return `${boxColor} border-stone-200 hover:bg-amber-50`;
  };

  const borderRight = (col: number) => col === 2 || col === 5 ? "border-r-2 border-r-stone-500" : "";
  const borderBottom = (row: number) => row === 2 || row === 5 ? "border-b-2 border-b-stone-500" : "";

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="luna" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Luna Sudoku Grid</h2>
          <p className="text-xs text-stone-500">Fill 1–9 in every row, column & box</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">🔢</p>
            <h3 className="text-lg font-black text-stone-800">Sudoku Challenge</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Each row, column, and 3×3 box must contain 1–9 exactly once. Tap a cell, then tap a number. Fewest mistakes wins!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Puzzle!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="board" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            {/* Stats */}
            <div className="flex gap-4">
              <div className="rounded-xl bg-sky-500 px-3 py-1.5 text-center text-white">
                <p className="text-[10px] font-bold uppercase">Mistakes</p>
                <p className="text-lg font-black">{mistakeCount}/10</p>
              </div>
            </div>

            {/* Grid */}
            <div className="rounded-xl border-2 border-stone-500 overflow-hidden" style={{ display: "grid", gridTemplateColumns: "repeat(9, 36px)" }}>
              {cells.map((val, idx) => {
                const row = Math.floor(idx / 9), col = idx % 9;
                return (
                  <div
                    key={idx}
                    onClick={() => { if (!fixed[idx]) setSelected(idx); }}
                    className={`w-9 h-9 flex items-center justify-center border text-sm cursor-pointer transition-colors
                      ${getCellStyle(idx)} ${borderRight(col)} ${borderBottom(row)}`}
                  >
                    <span className={`font-bold ${fixed[idx] ? "text-stone-800" : errors.has(idx) ? "text-red-600" : "text-sky-700"}`}>
                      {val ?? ""}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Number pad */}
            {phase === "playing" && (
              <div className="flex gap-1.5">
                {[1,2,3,4,5,6,7,8,9].map((n) => (
                  <button
                    key={n}
                    onClick={() => placeNumber(n)}
                    className="w-8 h-8 rounded-lg bg-sky-500 text-white font-black text-sm hover:bg-sky-600 active:scale-95 transition-all"
                  >{n}</button>
                ))}
                <button onClick={clearSelected}
                  className="w-8 h-8 rounded-lg bg-stone-300 text-stone-700 font-black text-xs hover:bg-stone-400 active:scale-95 transition-all">✕</button>
              </div>
            )}

            {phase === "complete" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                <CheckCircle className="w-10 h-10 text-sky-500" />
                <p className="font-black text-stone-800">Puzzle Solved! 🎉</p>
                <p className="text-stone-600 text-sm">{mistakeCount} mistake{mistakeCount !== 1 ? "s" : ""} · Score: {Math.max(100 - mistakeCount * 5, 10)}</p>
                <PhysicalButton onClick={startGame} variant="primary">
                  <RotateCcw className="mr-1.5 inline h-4 w-4" /> New Puzzle
                </PhysicalButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
