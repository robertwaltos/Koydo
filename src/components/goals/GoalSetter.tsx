"use client";

import { useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type GoalType = "daily_lessons" | "daily_minutes" | "weekly_lessons" | "weekly_xp";

const GOAL_PRESETS: Array<{ type: GoalType; label: string; defaultTarget: number; unit: string }> = [
  { type: "daily_lessons", label: "Daily Lessons", defaultTarget: 3, unit: "lessons" },
  { type: "daily_minutes", label: "Daily Study Time", defaultTarget: 30, unit: "minutes" },
  { type: "weekly_lessons", label: "Weekly Lessons", defaultTarget: 15, unit: "lessons" },
  { type: "weekly_xp", label: "Weekly XP", defaultTarget: 500, unit: "XP" },
];

export default function GoalSetter({
  profileId,
  onSaved,
}: {
  profileId: string;
  onSaved?: () => void;
}) {
  const { allowed } = useFeature("goal_setting");
  const [selectedType, setSelectedType] = useState<GoalType>("daily_lessons");
  const [target, setTarget] = useState(3);
  const [saving, setSaving] = useState(false);

  if (!allowed) return null;

  const preset = GOAL_PRESETS.find((p) => p.type === selectedType)!;

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch("/api/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId, goalType: selectedType, target }),
      });
      onSaved?.();
    } finally {
      setSaving(false);
    }
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Set a Goal</h3>

      <div className="flex flex-wrap gap-2">
        {GOAL_PRESETS.map((p) => (
          <SoftButton
            key={p.type}
            variant={selectedType === p.type ? "accent" : "neutral"}
            onClick={() => { setSelectedType(p.type); setTarget(p.defaultTarget); }}
          >
            {p.label}
          </SoftButton>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="number"
          min={1}
          max={999}
          value={target}
          onChange={(e) => setTarget(Math.max(1, Number(e.target.value)))}
          className="w-24 rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm"
        />
        <span className="text-sm text-zinc-500">{preset.unit} per {selectedType.startsWith("daily") ? "day" : "week"}</span>
      </div>

      <SoftButton variant="accent" onClick={handleSave} disabled={saving}>
        {saving ? "Saving…" : "Save Goal"}
      </SoftButton>
    </SoftCard>
  );
}
