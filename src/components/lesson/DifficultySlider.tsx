"use client";

import { useFeature } from "@/lib/platform/use-feature";

const LEVELS = [
  { value: "easy", label: "Easy", color: "bg-emerald-500" },
  { value: "medium", label: "Medium", color: "bg-amber-500" },
  { value: "hard", label: "Hard", color: "bg-rose-500" },
] as const;

type DifficultyLevel = "easy" | "medium" | "hard";

export default function DifficultySlider({
  value,
  onChange,
}: {
  value: DifficultyLevel;
  onChange: (level: DifficultyLevel) => void;
}) {
  const { allowed } = useFeature("difficulty_calibration");

  if (!allowed) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-zinc-500">Difficulty:</span>
      <div className="flex rounded-lg border border-border">
        {LEVELS.map((level) => (
          <button
            key={level.value}
            onClick={() => onChange(level.value)}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              value === level.value
                ? `${level.color} text-white`
                : "text-zinc-600 hover:bg-zinc-100"
            } ${level.value === "easy" ? "rounded-l-lg" : level.value === "hard" ? "rounded-r-lg" : ""}`}
          >
            {level.label}
          </button>
        ))}
      </div>
    </div>
  );
}
