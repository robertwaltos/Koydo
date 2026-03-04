/* -------------------------------------------------------------------------- */
/*  Color-Fill Engine — Flood-fill region coloring puzzle                    */
/*  Fill regions with correct colors based on clues (maps, diagrams, etc.)  */
/* -------------------------------------------------------------------------- */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Difficulty, GameRoundResult } from "@/lib/games/engine/types";
import { calculateStars, shuffle } from "@/lib/games/engine/scoring";

export type ColorOption = {
  id: string;
  name: string;
  hex: string;
  emoji?: string;
};

export type FillRegion = {
  id: string;
  label: string;
  emoji?: string;
  correctColorId: string;
  clue: string;           // hint about which color belongs here
  x: number;              // grid column
  y: number;              // grid row
  width?: number;         // grid columns span (default 1)
  height?: number;        // grid rows span (default 1)
};

export type ColorFillChallenge = {
  title: string;
  emoji?: string;
  regions: FillRegion[];
  colors: ColorOption[];
  gridCols: number;
  gridRows: number;
  fact?: string;
};

export type ColorFillConfig = {
  title: string;
  challenges: ColorFillChallenge[];
  infiniteMode?: boolean;
};

type Props = {
  config: ColorFillConfig;
  difficulty: Difficulty;
  onComplete: (result: GameRoundResult) => void;
};

const DIFF: Record<Difficulty, { challengeCount: number; timeLimit: number; showClues: boolean }> = {
  easy:   { challengeCount: 3, timeLimit: 180_000, showClues: true },
  medium: { challengeCount: 5, timeLimit: 150_000, showClues: true },
  hard:   { challengeCount: 7, timeLimit: 120_000, showClues: false },
};

export function ColorFillEngine({ config, difficulty, onComplete }: Props) {
  const settings = DIFF[difficulty];
  const challengeList = useRef(
    shuffle(config.challenges).slice(0, Math.min(settings.challengeCount, config.challenges.length)),
  );

  const [challengeIdx, setChallengeIdx] = useState(0);
  const [regionColors, setRegionColors] = useState<Record<string, string>>({});
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.timeLimit);
  const [phase, setPhase] = useState<"playing" | "checking" | "complete">("playing");
  const [feedback, setFeedback] = useState<{ correct: number; total: number } | null>(null);
  const [level, setLevel] = useState(1);
  const startTime = useRef(Date.now());

  const challenge = challengeList.current[challengeIdx];

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

  const paintRegion = useCallback(
    (regionId: string) => {
      if (phase !== "playing" || !selectedColor) return;
      setRegionColors((prev) => ({ ...prev, [regionId]: selectedColor }));
    },
    [phase, selectedColor],
  );

  const checkAnswer = useCallback(() => {
    if (phase !== "playing" || !challenge) return;
    setPhase("checking");

    let correct = 0;
    for (const region of challenge.regions) {
      if (regionColors[region.id] === region.correctColorId) correct++;
    }

    setFeedback({ correct, total: challenge.regions.length });

    setTimeout(() => {
      if (correct === challenge.regions.length) {
        const timeBonus = Math.round(timeLeft / 1000) * 2;
        setScore((s) => s + 100 + timeBonus);

        if (challengeIdx + 1 < challengeList.current.length) {
          setChallengeIdx((i) => i + 1);
          setRegionColors({});
          setSelectedColor(null);
          setFeedback(null);
          setPhase("playing");
        } else if (config.infiniteMode) {
          setLevel((l) => l + 1);
          challengeList.current = shuffle(config.challenges).slice(
            0,
            Math.min(settings.challengeCount + level, config.challenges.length),
          );
          setChallengeIdx(0);
          setRegionColors({});
          setSelectedColor(null);
          setFeedback(null);
          setPhase("playing");
        } else {
          setPhase("complete");
        }
      } else {
        // Reset wrong ones
        setRegionColors((prev) => {
          const next = { ...prev };
          for (const region of challenge.regions) {
            if (next[region.id] !== region.correctColorId) {
              delete next[region.id];
            }
          }
          return next;
        });
        setFeedback(null);
        setPhase("playing");
      }
    }, 2000);
  }, [phase, challenge, regionColors, timeLeft, challengeIdx, config, settings, level]);

  // Completion
  useEffect(() => {
    if (phase === "complete") {
      const maxScore = challengeList.current.length * 160;
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

  if (!challenge) return null;

  const pct = timeLeft / settings.timeLimit;
  const allFilled = challenge.regions.every((r) => regionColors[r.id]);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-3 p-4">
      <div className="flex w-full items-center justify-between text-sm font-bold text-stone-600">
        <span>Score: {score}</span>
        <span>
          {challengeIdx + 1}/{challengeList.current.length}
        </span>
        <span>{Math.ceil(timeLeft / 1000)}s</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full transition-all ${pct > 0.5 ? "bg-emerald-500" : pct > 0.2 ? "bg-amber-500" : "bg-red-500"}`}
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      <p className="text-sm font-medium text-stone-600">
        {challenge.emoji ?? "🎨"} {challenge.title}
      </p>

      {/* Color palette */}
      <div className="flex flex-wrap justify-center gap-2">
        {challenge.colors.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => setSelectedColor(color.id)}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-white shadow transition ${
              selectedColor === color.id ? "ring-3 ring-offset-1 ring-stone-400 scale-110" : "hover:scale-105"
            }`}
            style={{ backgroundColor: color.hex }}
          >
            {color.emoji && <span>{color.emoji}</span>}
            {color.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className="grid gap-1 rounded-2xl bg-stone-100 p-2"
        style={{
          gridTemplateColumns: `repeat(${challenge.gridCols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${challenge.gridRows}, minmax(0, 1fr))`,
        }}
      >
        {challenge.regions.map((region) => {
          const colorId = regionColors[region.id];
          const color = colorId
            ? challenge.colors.find((c) => c.id === colorId)
            : null;

          return (
            <motion.button
              key={region.id}
              type="button"
              onClick={() => paintRegion(region.id)}
              whileTap={{ scale: 0.95 }}
              className="flex min-h-[56px] flex-col items-center justify-center rounded-xl border-2 border-stone-200 p-2 transition"
              style={{
                gridColumn: `span ${region.width ?? 1}`,
                gridRow: `span ${region.height ?? 1}`,
                backgroundColor: color ? color.hex : "#fafaf9",
                borderColor: color ? color.hex : undefined,
                color: color ? "#fff" : "#57534e",
              }}
            >
              <span className="text-lg">{region.emoji ?? "📍"}</span>
              <span className="text-[10px] font-bold leading-tight">{region.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Clues */}
      {settings.showClues && (
        <div className="w-full space-y-1">
          <p className="text-xs font-bold text-stone-500">Clues:</p>
          {challenge.regions.map((region) => (
            <p
              key={region.id}
              className={`text-xs ${
                regionColors[region.id] === region.correctColorId
                  ? "text-emerald-500 line-through"
                  : "text-stone-500"
              }`}
            >
              {region.emoji ?? "•"} {region.label}: {region.clue}
            </p>
          ))}
        </div>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`rounded-full px-4 py-1 text-sm font-bold ${
              feedback.correct === feedback.total
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {feedback.correct === feedback.total
              ? "✓ Perfect coloring!"
              : `${feedback.correct}/${feedback.total} correct — wrong colors cleared`}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Check button */}
      {allFilled && phase === "playing" && (
        <button
          type="button"
          onClick={checkAnswer}
          className="rounded-full bg-sky-500 px-6 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-sky-600"
        >
          🎨 Check Colors
        </button>
      )}
    </div>
  );
}
