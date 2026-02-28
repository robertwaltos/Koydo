"use client";

import { useEffect, useState } from "react";

type LevelProgressBarProps = {
  points: number;
  level: number;
  maxLevel?: number;
  animated?: boolean;
};

const POINTS_PER_LEVEL = 100;

function getLevelProgress(points: number, level: number) {
  const pointsIntoCurrentLevel = points - (level - 1) * POINTS_PER_LEVEL;
  return Math.min(1, Math.max(0, pointsIntoCurrentLevel / POINTS_PER_LEVEL));
}

const LEVEL_COLORS = [
  "from-emerald-400 to-emerald-500",
  "from-sky-400 to-sky-500",
  "from-violet-400 to-violet-500",
  "from-amber-400 to-amber-500",
  "from-rose-400 to-rose-500",
] as const;

function getLevelColor(level: number) {
  return LEVEL_COLORS[(level - 1) % LEVEL_COLORS.length];
}

export function LevelProgressBar({
  points,
  level,
  maxLevel = 20,
  animated = true,
}: LevelProgressBarProps) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const targetProgress = getLevelProgress(points, level);
  const isMaxLevel = level >= maxLevel;
  const colorClass = getLevelColor(level);

  useEffect(() => {
    if (!animated) {
      setDisplayProgress(targetProgress);
      return;
    }
    const timeout = setTimeout(() => setDisplayProgress(targetProgress), 100);
    return () => clearTimeout(timeout);
  }, [targetProgress, animated]);

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-sm font-bold text-white shadow-md">
        {level}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-baseline justify-between text-xs">
          <span className="font-semibold text-stone-700">
            Level {level}
            {isMaxLevel ? " (Max)" : ""}
          </span>
          <span className="text-stone-400">
            {points} pts
            {!isMaxLevel && ` / ${level * POINTS_PER_LEVEL}`}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-stone-100 shadow-inner">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${colorClass} transition-all duration-700 ease-out`}
            style={{ width: `${(isMaxLevel ? 1 : displayProgress) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
