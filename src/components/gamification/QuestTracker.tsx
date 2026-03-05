"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import { type QuestProgress, questCompletionPct } from "@/lib/gamification/quests";
import SoftCard from "@/app/components/ui/soft-card";

export default function QuestTracker({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("quest_system");
  const [quests, setQuests] = useState<QuestProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/quests?profileId=${profileId}`);
        if (res.ok) {
          const data = await res.json();
          setQuests(data.quests ?? []);
        }
      } catch {}
      setLoading(false);
    }
    void load();
  }, [profileId, allowed]);

  if (!allowed) return null;
  if (loading) return null;

  const active = quests.filter((q) => q.status === "active");
  const completed = quests.filter((q) => q.status === "completed");

  return (
    <SoftCard className="space-y-3 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-600">Quests</h3>
        {completed.length > 0 && (
          <span className="text-xs text-emerald-600 font-medium">{completed.length} completed</span>
        )}
      </div>

      {active.length === 0 && completed.length === 0 && (
        <p className="text-xs text-zinc-500">No active quests. Check back soon!</p>
      )}

      {active.map((q) => {
        const pct = questCompletionPct(q);
        return (
          <div key={q.id} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">{q.questTemplateId.replace(/^[dw]_/, "").replace(/_/g, " ")}</span>
              <span className="text-[10px] text-zinc-500">
                {q.currentCount}/{q.targetCount} (+{q.xpReward} XP)
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-200">
              <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}

      {completed.slice(0, 3).map((q) => (
        <div key={q.id} className="flex items-center justify-between text-xs">
          <span className="text-zinc-500 line-through">
            {q.questTemplateId.replace(/^[dw]_/, "").replace(/_/g, " ")}
          </span>
          <span className="text-emerald-600 font-medium">+{q.xpReward} XP</span>
        </div>
      ))}
    </SoftCard>
  );
}
