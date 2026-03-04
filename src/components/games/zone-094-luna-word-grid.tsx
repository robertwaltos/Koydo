"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
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
const SIZE = 10;

const WORD_LIST = ["ATOM","CELL","GENE","WAVE","ACID","BASE","MASS","HEAT","FORCE","LIGHT","ORBIT","MAGNET"];
const COLORS = ["bg-red-300","bg-blue-300","bg-green-300","bg-yellow-300","bg-purple-300","bg-pink-300","bg-orange-300","bg-teal-300","bg-indigo-300","bg-rose-300","bg-lime-300","bg-cyan-300"];

const DIRECTIONS: [number,number][] = [[0,1],[1,0],[1,1],[-1,1],[0,-1],[-1,0],[-1,-1],[1,-1]];

interface PlacedWord {
  word: string;
  cells: number[];
  colorClass: string;
}

function buildGrid(words: string[]): { grid: string[]; placed: PlacedWord[] } {
  const grid = Array(SIZE * SIZE).fill("");
  const placed: PlacedWord[] = [];

  for (let wi = 0; wi < words.length; wi++) {
    const word = words[wi];
    let success = false;
    for (let attempt = 0; attempt < 200 && !success; attempt++) {
      const [dr, dc] = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      const r = Math.floor(Math.random() * SIZE);
      const c = Math.floor(Math.random() * SIZE);
      const cells: number[] = [];
      let ok = true;
      for (let i = 0; i < word.length; i++) {
        const nr = r + dr * i, nc = c + dc * i;
        if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) { ok = false; break; }
        const idx = nr * SIZE + nc;
        if (grid[idx] && grid[idx] !== word[i]) { ok = false; break; }
        cells.push(idx);
      }
      if (ok) {
        cells.forEach((idx, i) => { grid[idx] = word[i]; });
        placed.push({ word, cells, colorClass: COLORS[wi % COLORS.length] });
        success = true;
      }
    }
  }

  // Fill blanks
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < grid.length; i++) {
    if (!grid[i]) grid[i] = alpha[Math.floor(Math.random() * alpha.length)];
  }
  return { grid, placed };
}

export default function Zone094LunaWordGrid() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [grid, setGrid] = useState<string[]>([]);
  const [placed, setPlaced] = useState<PlacedWord[]>([]);
  const [found, setFound] = useState<Set<string>>(new Set());
  const [selecting, setSelecting] = useState<number[]>([]);
  const [foundCells, setFoundCells] = useState<Map<number, string>>(new Map());
  const [startTime] = useState(Date.now());
  const [isDragging, setIsDragging] = useState(false);

  const startGame = useCallback(() => {
    // Pick 8 words
    const words = [...WORD_LIST].sort(() => Math.random() - 0.5).slice(0, 8);
    const { grid: g, placed: p } = buildGrid(words);
    setGrid(g);
    setPlaced(p);
    setFound(new Set());
    setSelecting([]);
    setFoundCells(new Map());
    setPhase("playing");
    mascot.speak("Find the hidden science words in the grid!", "happy");
  }, [mascot]);

  const checkSelection = useCallback((cells: number[]) => {
    for (const pw of placed) {
      if (found.has(pw.word)) continue;
      const fwd = pw.cells.every((c, i) => cells[i] === c);
      const rev = pw.cells.every((c, i) => cells[cells.length - 1 - i] === c);
      if ((fwd || rev) && cells.length === pw.cells.length) {
        hapticSuccess();
        const newFound = new Set(found).add(pw.word);
        setFound(newFound);
        const newFC = new Map(foundCells);
        pw.cells.forEach((c) => newFC.set(c, pw.colorClass));
        setFoundCells(newFC);
        mascot.speak(`Found "${pw.word}"!`, "happy");
        if (newFound.size === placed.length) {
          setPhase("complete");
          emitLegacyGameComplete({
            sessionId: SESSION_ID,
            gameId: "zone-094",
            score: placed.length * 20,
            maxScore: 160,
            elapsedMs: Date.now() - startTime,
            interactions: newFound.size,
            difficulty: "medium",
          });
          mascot.speak("All words found! Incredible search skills!", "celebrate");
        }
        return;
      }
    }
    hapticError();
  }, [found, foundCells, mascot, placed, startTime]);

  const getColRow = (idx: number) => ({ r: Math.floor(idx / SIZE), c: idx % SIZE });

  const isLinear = (cells: number[]) => {
    if (cells.length < 2) return true;
    const first = getColRow(cells[0]);
    const second = getColRow(cells[1]);
    const dr = second.r - first.r, dc = second.c - first.c;
    for (let i = 2; i < cells.length; i++) {
      const prev = getColRow(cells[i - 1]);
      const cur = getColRow(cells[i]);
      if (cur.r - prev.r !== dr || cur.c - prev.c !== dc) return false;
    }
    return true;
  };

  const handleMouseDown = (idx: number) => {
    setIsDragging(true);
    setSelecting([idx]);
    hapticSelection();
  };

  const handleMouseEnter = (idx: number) => {
    if (!isDragging) return;
    setSelecting((prev) => {
      if (prev.includes(idx)) return prev;
      const next = [...prev, idx];
      return isLinear(next) ? next : prev;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (selecting.length >= 2) checkSelection(selecting);
    setSelecting([]);
  };

  const getCellClass = (idx: number): string => {
    if (foundCells.has(idx)) return foundCells.get(idx)! + " text-stone-800";
    if (selecting.includes(idx)) return "bg-amber-300 text-stone-800";
    return "bg-stone-100 text-stone-700 hover:bg-amber-100";
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 select-none">
      <div className="flex items-center gap-3">
        <MascotFriend friendId="luna" size="sm" />
        <div className="text-center">
          <h2 className="text-xl font-black text-stone-800">Luna Word Grid</h2>
          <p className="text-xs text-stone-500">Drag to find hidden science words!</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-4xl">🔍</p>
            <h3 className="text-lg font-black text-stone-800">Word Search</h3>
            <p className="max-w-xs text-center text-sm text-stone-600">
              Click and drag across letters to select hidden science words (horizontal, vertical, or diagonal).
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Start Search!</PhysicalButton>
          </motion.div>
        )}

        {(phase === "playing" || phase === "complete") && (
          <motion.div key="board" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
            <div className="flex gap-3 items-center text-sm text-stone-600">
              <span className="font-bold">{found.size}/{placed.length} found</span>
            </div>

            {/* Grid */}
            <div
              className="rounded-xl border border-stone-200 bg-white overflow-hidden cursor-crosshair"
              style={{ display: "grid", gridTemplateColumns: `repeat(${SIZE}, 32px)`, gap: 0 }}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
            >
              {grid.map((letter, idx) => (
                <div key={idx}
                  className={`w-8 h-8 flex items-center justify-center text-xs font-black border border-stone-100 transition-colors ${getCellClass(idx)}`}
                  onMouseDown={() => handleMouseDown(idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onTouchStart={() => handleMouseDown(idx)}
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* Word list */}
            <div className="flex flex-wrap gap-1.5 max-w-xs justify-center">
              {placed.map((pw) => (
                <span key={pw.word}
                  className={`text-xs font-bold px-2 py-1 rounded-full border ${found.has(pw.word) ? pw.colorClass + " line-through opacity-60" : "bg-stone-100 text-stone-700"}`}>
                  {pw.word}
                </span>
              ))}
            </div>

            {phase === "complete" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                <p className="text-2xl">🎉</p>
                <p className="font-black text-stone-800">All words found!</p>
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
