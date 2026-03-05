"use client";

import { useFeature } from "@/lib/platform/use-feature";

type RubricCriterion = {
  name: string;
  levels: Array<{
    level: string;
    description: string;
    points: number;
  }>;
};

export default function RubricDisplay({
  criteria,
  highlightLevel,
}: {
  criteria: RubricCriterion[];
  highlightLevel?: Record<string, string>; // criterion name → level
}) {
  const { allowed } = useFeature("rubric_display");
  if (!allowed || criteria.length === 0) return null;

  const levels = criteria[0]?.levels.map((l) => l.level) ?? [];

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-zinc-50 dark:bg-zinc-900">
            <th className="px-3 py-2 text-left font-semibold">Criteria</th>
            {levels.map((level) => (
              <th key={level} className="px-3 py-2 text-center font-semibold">{level}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {criteria.map((c) => (
            <tr key={c.name}>
              <td className="px-3 py-2 font-medium">{c.name}</td>
              {c.levels.map((l) => {
                const isHighlighted = highlightLevel?.[c.name] === l.level;
                return (
                  <td
                    key={l.level}
                    className={`px-3 py-2 text-center ${
                      isHighlighted ? "bg-accent/10 font-medium text-accent" : "text-zinc-600"
                    }`}
                  >
                    <p>{l.description}</p>
                    <p className="mt-0.5 text-[10px] text-zinc-400">{l.points} pts</p>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
