/* -------------------------------------------------------------------------- */
/*  Builder Engine — Bridge/Structure building (Physics puzzle)              */
/*  Place beams and supports to build structures that hold weight            */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, clamp } from "@/lib/games/engine/scoring";

export type BuilderPiece = {
  id: string;
  emoji: string;
  label: string;
  strength: number; // 1-10
  weight: number;
};

export type BuilderChallenge = {
  targetHeight: number;
  targetWidth: number;
  maxWeight: number;
  description: string;
};

export type BuilderConfig = {
  title: string;
  pieces: BuilderPiece[];
  challenges: BuilderChallenge[];
  infiniteMode?: boolean;
};

type PlacedPiece = BuilderPiece & { row: number; col: number; key: number };

type Props = {
  config: BuilderConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { gridRows: number; gridCols: number; timeLimit: number; budget: number }> = {
  easy:   { gridRows: 5, gridCols: 6,  timeLimit: 180_000, budget: 15 },
  medium: { gridRows: 6, gridCols: 8,  timeLimit: 150_000, budget: 12 },
  hard:   { gridRows: 8, gridCols: 10, timeLimit: 120_000, budget: 10 },
};

let _bk = 0;

export function BuilderEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const [challengeIdx, setChallengeIdx] = useState(0);
  const challenge = config.challenges[challengeIdx % config.challenges.length]!;
  const [placed, setPlaced] = useState<PlacedPiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<BuilderPiece | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"building" | "testing" | "result" | "complete">("building");
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  const budget = settings.budget + level * 2;
  const piecesUsed = placed.length;
  const totalWeight = placed.reduce((sum, p) => sum + p.weight, 0);
  const totalStrength = placed.reduce((sum, p) => sum + p.strength, 0);

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

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (phase !== "building" || !selectedPiece) return;
      if (piecesUsed >= budget) return;

      // Check if cell is already occupied
      const occupied = placed.some((p) => p.row === row && p.col === col);
      if (occupied) {
        // Remove piece
        setPlaced((prev) => prev.filter((p) => !(p.row === row && p.col === col)));
        return;
      }

      setPlaced((prev) => [
        ...prev,
        { ...selectedPiece, row, col, key: ++_bk },
      ]);
    },
    [phase, selectedPiece, piecesUsed, budget, placed],
  );

  const testStructure = useCallback(() => {
    if (phase !== "building") return;
    setPhase("testing");

    // Simple physics simulation:
    // 1. Check connectivity (pieces must form a path from bottom to top)
    // 2. Check weight capacity
    // 3. Check height requirement

    setTimeout(() => {
      const hasGround = placed.some((p) => p.row === settings.gridRows - 1);
      const maxHeight = settings.gridRows - Math.min(...placed.map((p) => p.row));
      const meetsHeight = maxHeight >= challenge.targetHeight;
      const withinWeight = totalWeight <= challenge.maxWeight;
      const strongEnough = totalStrength >= totalWeight * 1.2;

      // Check connectivity (BFS from any ground piece)
      const grid = new Map<string, PlacedPiece>();
      for (const p of placed) grid.set(`${p.row},${p.col}`, p);

      const visited = new Set<string>();
      const queue: string[] = [];
      const groundPiece = placed.find((p) => p.row === settings.gridRows - 1);
      if (groundPiece) {
        const key = `${groundPiece.row},${groundPiece.col}`;
        queue.push(key);
        visited.add(key);
      }

      while (queue.length > 0) {
        const current = queue.shift()!;
        const [r, c] = current.split(",").map(Number) as [number, number];
        for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
          const key = `${r + dr},${c + dc}`;
          if (grid.has(key) && !visited.has(key)) {
            visited.add(key);
            queue.push(key);
          }
        }
      }

      const allConnected = visited.size === placed.length;
      const success = hasGround && meetsHeight && withinWeight && strongEnough && allConnected && placed.length > 0;

      if (success) {
        const efficiency = 1 - piecesUsed / budget;
        const bonus = Math.round(efficiency * 200);
        setScore((s) => s + 300 + bonus);
        setTestResult({
          success: true,
          message: `Structure holds! +${300 + bonus} points`,
        });
      } else {
        const reasons: string[] = [];
        if (!hasGround) reasons.push("No foundation on ground");
        if (!meetsHeight) reasons.push("Not tall enough");
        if (!withinWeight) reasons.push("Too heavy");
        if (!strongEnough) reasons.push("Not strong enough");
        if (!allConnected) reasons.push("Pieces not connected");
        if (placed.length === 0) reasons.push("Nothing built!");
        setTestResult({
          success: false,
          message: reasons.join(", "),
        });
      }

      setPhase("result");

      setTimeout(() => {
        if (success) {
          const nextIdx = challengeIdx + 1;
          if (nextIdx >= config.challenges.length && !config.infiniteMode) {
            setPhase("complete");
          } else {
            setChallengeIdx(nextIdx);
            setPlaced([]);
            setPhase("building");
            setTestResult(null);
            if (nextIdx >= config.challenges.length) {
              setLevel((l) => l + 1);
              setChallengeIdx(0);
            }
          }
        } else {
          // Allow retry
          setPhase("building");
          setTestResult(null);
        }
      }, 2500);
    }, 1500);
  }, [phase, placed, settings, challenge, totalWeight, totalStrength, piecesUsed, budget, challengeIdx, config]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = config.challenges.length * 500;
      onComplete({
        score,
        maxScore,
        stars: calculateStars(score, maxScore),
        timeMs: Date.now() - startTime.current,
        level,
        difficulty,
      });
    }
  }, [phase, score, level, difficulty, onComplete, config.challenges.length]);

  const pct = clamp(timeLeft / settings.timeLimit, 0, 1);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>Level {level}</span>
        <span>{piecesUsed}/{budget} pieces</span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${pct * 100}%` }} />
      </div>

      {/* Challenge description */}
      <p className="text-center text-sm font-medium text-stone-600">
        🏗️ {challenge.description}
      </p>

      {/* Test result */}
      <AnimatePresence>
        {testResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full rounded-xl p-3 text-center text-sm font-bold ${
              testResult.success ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            }`}
          >
            {testResult.success ? "✓ " : "✗ "}{testResult.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Piece selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {config.pieces.map((piece) => (
          <button
            key={piece.id}
            type="button"
            onClick={() => setSelectedPiece(piece)}
            className={`flex flex-col items-center rounded-xl px-3 py-2 text-xs shadow transition-all ${
              selectedPiece?.id === piece.id
                ? "bg-sky-400 text-white ring-2 ring-sky-300"
                : "bg-white text-stone-700 hover:bg-stone-50"
            }`}
          >
            <span className="text-xl">{piece.emoji}</span>
            <span className="font-semibold">{piece.label}</span>
            <span className="text-[10px] opacity-70">str:{piece.strength} wt:{piece.weight}</span>
          </button>
        ))}
      </div>

      {/* Build grid */}
      <div className="rounded-xl bg-gradient-to-t from-amber-100 to-sky-50 p-2 shadow-inner">
        <div
          className="grid gap-0.5"
          style={{ gridTemplateColumns: `repeat(${settings.gridCols}, 1fr)` }}
        >
          {Array.from({ length: settings.gridRows * settings.gridCols }).map((_, i) => {
            const row = Math.floor(i / settings.gridCols);
            const col = i % settings.gridCols;
            const piece = placed.find((p) => p.row === row && p.col === col);
            const isGround = row === settings.gridRows - 1;

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleCellClick(row, col)}
                className={`flex h-8 w-8 items-center justify-center rounded text-lg transition-all sm:h-10 sm:w-10 ${
                  piece
                    ? "bg-amber-200 shadow"
                    : isGround
                      ? "bg-amber-100/60 hover:bg-amber-200/60"
                      : "bg-white/40 hover:bg-white/80"
                }`}
              >
                {piece?.emoji ?? ""}
              </button>
            );
          })}
        </div>
        <div className="mt-1 h-2 rounded bg-amber-800/30" />
      </div>

      {/* Test button */}
      {phase === "building" && (
        <button
          type="button"
          onClick={testStructure}
          disabled={placed.length === 0}
          className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-600 disabled:opacity-40"
        >
          🧪 Test Structure
        </button>
      )}

      {phase === "testing" && (
        <motion.div
          animate={{ rotate: [0, 5, -5, 5, -5, 0] }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <p className="text-2xl">🏗️</p>
          <p className="text-sm text-stone-500">Testing structure...</p>
        </motion.div>
      )}
    </div>
  );
}
