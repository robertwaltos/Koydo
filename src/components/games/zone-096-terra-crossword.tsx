"use client";

import { useState, useCallback, useRef, useEffect } from "react";
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

// 5×5 mini crossword puzzles (one letter per cell, " " = black block)
const PUZZLES = [
  {
    grid: [
      "ATOM ",
      "C    ",
      "IDEA ",
      "D    ",
      "     ",
    ],
    answers: [
      "ATOM ",
      "C    ",
      "IDEA ",
      "D    ",
      "     ",
    ],
    clues: {
      across: [
        { num: 1, row: 0, col: 0, len: 4, clue: "1A: Smallest unit of matter" },
        { num: 3, row: 2, col: 0, len: 4, clue: "3A: Thought or concept" },
      ],
      down: [
        { num: 1, row: 0, col: 0, len: 4, clue: "1D: Atom makes up a ___" },
        { num: 2, row: 0, col: 3, len: 1, clue: "" },
      ],
    },
  },
  {
    grid: [
      "GENE ",
      "R    ",
      "OVAL ",
      "W    ",
      "     ",
    ],
    answers: [
      "GENE ",
      "R    ",
      "OVAL ",
      "W    ",
      "     ",
    ],
    clues: {
      across: [
        { num: 1, row: 0, col: 0, len: 4, clue: "1A: DNA unit of heredity" },
        { num: 3, row: 2, col: 0, len: 4, clue: "3A: Egg shape" },
      ],
      down: [
        { num: 1, row: 0, col: 0, len: 4, clue: "1D: Development" },
      ],
    },
  },
];

// Simple free-text crossword: just type answers, letter by letter
export default function Zone096TerraCrossword() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const puzzleRef = useRef(PUZZLES[0]);
  const [inputs, setInputs] = useState<string[][]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [startTime] = useState(Date.now());
  const [interactions, setInteractions] = useState(0);

  const startGame = useCallback(() => {
    const p = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
    puzzleRef.current = p;
    setInputs(p.grid.map((row) => row.split("").map(() => "")));
    setMistakes(0);
    setInteractions(0);
    setPhase("playing");
    mascot.speak("Fill in the crossword! Read the clues carefully.", "happy");
  }, [mascot]);

  const handleInput = useCallback((r: number, c: number, val: string) => {
    const p = puzzleRef.current;
    if (p.grid[r][c] === " ") return;
    const letter = val.slice(-1).toUpperCase();
    setInteractions((n) => n + 1);
    hapticSelection();

    const next = inputs.map((row) => [...row]);
    next[r][c] = letter;
    setInputs(next);

    // Check full grid
    const correct = next.every((row, ri) =>
      row.every((cell, ci) => {
        const expected = p.answers[ri][ci];
        return expected === " " || cell === expected;
      })
    );

    if (correct && next.flat().filter((c) => c !== "").length > 0) {
      const allFilled = next.every((row, ri) =>
        row.every((cell, ci) => p.grid[ri][ci] === " " || cell !== "")
      );
      if (allFilled) {
        hapticSuccess();
        setPhase("complete");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-096",
          score: Math.max(100 - mistakes * 10, 10),
          maxScore: 100,
          elapsedMs: Date.now() - startTime,
          interactions,
          difficulty: "medium",
      source: "component",
      occurredAt: new Date().toISOString(),
    });
        mascot.speak("Crossword complete! Brilliant solver!", "celebrate");
      }
    }
  }, [inputs, interactions, mascot, mistakes, startTime]);

  const getCellStyle = (r: number, c: number): string => {
    const p = puzzleRef.current;
    if (!inputs[r]) return "";
    if (p.grid[r][c] === " ") return "bg-stone-800";
    const expected = p.answers[r][c];
    if (inputs[r][c] && inputs[r][c] !== expected) return "bg-red-100 border-red-400";
    if (inputs[r][c] === expected) return "bg-green-100 border-green-400";
    return "bg-white border-stone-300";
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend id="terra" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Terra Crossword</h2>
          <p className="text-xs text-stone-500">Fill in the mini crossword!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">✏️</p>
            <h3 className="text-lg font-black text-stone-800">Mini Crossword</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Read the clues and type letters into the grid squares. Science-themed clues!
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Puzzle!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="board" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 w-full max-w-sm">
            {/* Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 52px)", gap: 3 }}>
              {Array.from({ length: 5 }, (_, r) =>
                Array.from({ length: 5 }, (_, c) => {
                  const p = puzzleRef.current;
                  const isBlack = !inputs[r] || p.grid[r]?.[c] === " ";
                  return (
                    <div key={`${r}-${c}`} className={`w-[52px] h-[52px] rounded flex items-center justify-center border-2 ${getCellStyle(r, c)}`}>
                      {!isBlack ? (
                        <input
                          type="text"
                          maxLength={1}
                          value={inputs[r]?.[c] ?? ""}
                          onChange={(e) => handleInput(r, c, e.target.value)}
                          className="w-full h-full text-center font-black text-lg uppercase bg-transparent outline-none"
                          disabled={phase === "complete"}
                        />
                      ) : null}
                    </div>
                  );
                })
              )}
            </div>

            {/* Clues */}
            <div className="w-full rounded-xl bg-stone-50 border border-stone-200 p-3 text-sm text-stone-700 space-y-1">
              {puzzleRef.current.clues.across.filter((cl) => cl.clue).map((cl) => (
                <p key={cl.clue}><span className="font-bold">{cl.clue.split(":")[0]}:</span> {cl.clue.split(":")[1]}</p>
              ))}
              {puzzleRef.current.clues.down.filter((cl) => cl.clue).map((cl) => (
                <p key={cl.clue}><span className="font-bold">{cl.clue.split(":")[0]}:</span> {cl.clue.split(":")[1]}</p>
              ))}
            </div>

            {phase === "complete" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm w-full">
                <CheckCircle className="w-10 h-10 text-green-500" />
                <p className="font-black text-stone-800">Crossword Solved!</p>
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
