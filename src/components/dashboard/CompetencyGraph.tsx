"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";

type CompetencyNode = {
  id: string;
  label: string;
  subject: string;
  mastery: number; // 0-100
};

const MASTERY_COLORS: Record<string, string> = {
  high: "#10b981",    // emerald
  medium: "#f59e0b",  // amber
  low: "#ef4444",     // red
  none: "#d4d4d8",    // zinc
};

function getMasteryColor(mastery: number): string {
  if (mastery >= 80) return MASTERY_COLORS.high;
  if (mastery >= 50) return MASTERY_COLORS.medium;
  if (mastery > 0) return MASTERY_COLORS.low;
  return MASTERY_COLORS.none;
}

function getMasteryLabel(mastery: number): string {
  if (mastery >= 80) return "Mastered";
  if (mastery >= 50) return "Developing";
  if (mastery > 0) return "Beginning";
  return "Not started";
}

export default function CompetencyGraph({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("competency_dashboard");
  const [nodes, setNodes] = useState<CompetencyNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/knowledge-graph/competency?profileId=${profileId}`);
        if (res.ok) {
          const data = await res.json();
          setNodes(data.competencies ?? []);
        }
      } catch { /* silent */ }
      setLoading(false);
    }
    void load();
  }, [profileId, allowed]);

  if (!allowed) return null;

  if (loading) {
    return <div className="animate-pulse rounded-xl bg-surface-muted p-8 text-center text-sm text-zinc-500">Loading competency data…</div>;
  }

  if (nodes.length === 0) {
    return (
      <SoftCard className="p-5 text-center text-sm text-zinc-500">
        Complete some lessons to see your competency map.
      </SoftCard>
    );
  }

  // Group by subject
  const bySubject = nodes.reduce<Record<string, CompetencyNode[]>>((acc, n) => {
    (acc[n.subject] ??= []).push(n);
    return acc;
  }, {});

  const overallMastery = Math.round(nodes.reduce((sum, n) => sum + n.mastery, 0) / nodes.length);

  return (
    <SoftCard className="space-y-4 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Competency Dashboard</h3>
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: getMasteryColor(overallMastery) }}
          />
          <span className="text-sm font-medium">{overallMastery}% Overall</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-zinc-500">
        {Object.entries(MASTERY_COLORS).map(([level, color]) => (
          <div key={level} className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
            <span className="capitalize">{level === "none" ? "Not started" : level}</span>
          </div>
        ))}
      </div>

      {/* Subject groups with skill bubbles */}
      {Object.entries(bySubject).map(([subject, skills]) => {
        const subjectMastery = Math.round(skills.reduce((s, n) => s + n.mastery, 0) / skills.length);
        return (
          <div key={subject}>
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-zinc-700">{subject}</h4>
              <span className="text-xs text-zinc-500">{subjectMastery}%</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="group relative rounded-lg border px-3 py-1.5 text-xs font-medium"
                  style={{
                    borderColor: getMasteryColor(skill.mastery),
                    backgroundColor: `${getMasteryColor(skill.mastery)}15`,
                  }}
                >
                  {skill.label}
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-zinc-900 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {skill.mastery}% — {getMasteryLabel(skill.mastery)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </SoftCard>
  );
}
