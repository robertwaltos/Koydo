"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";

type Goal = {
  id: string;
  goal_type: string;
  target: number;
  current: number;
  period_start: string;
};

export default function GoalProgress({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("goal_setting");
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/goals?profileId=${profileId}`);
        if (res.ok) {
          const data = await res.json();
          setGoals(data.goals ?? []);
        }
      } catch { /* silent */ }
    }
    void load();
  }, [profileId, allowed]);

  if (!allowed || goals.length === 0) return null;

  return (
    <SoftCard className="space-y-3 p-5">
      <h3 className="text-sm font-semibold text-zinc-600">Goals</h3>
      {goals.map((g) => {
        const pct = Math.min(100, Math.round((g.current / g.target) * 100));
        const isComplete = g.current >= g.target;
        return (
          <div key={g.id}>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium">{g.goal_type.replace(/_/g, " ")}</span>
              <span className={isComplete ? "text-emerald-600 font-medium" : "text-zinc-500"}>
                {g.current}/{g.target} {isComplete ? "Done!" : ""}
              </span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-zinc-200">
              <div
                className={`h-full rounded-full transition-all ${isComplete ? "bg-emerald-500" : "bg-accent"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </SoftCard>
  );
}
