"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { toLessonPath } from "@/lib/routing/paths";

type WeeklyPlanDay = {
  dayOffset: number;
  dayLabel: string;
  isoDate: string;
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string | null;
  tasks: string[];
};

type WeeklyPlanResponse = {
  source?: string;
  setupRequired?: boolean;
  message?: string;
  generatedAt?: string;
  days?: WeeklyPlanDay[];
  error?: string;
};

export default function AiWeeklyPlanCard() {
  const [days, setDays] = useState<WeeklyPlanDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [setupRequired, setSetupRequired] = useState(false);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch("/api/ai/study-plan/week", { cache: "no-store" });
        const payload = (await response.json()) as WeeklyPlanResponse;
        if (!response.ok) {
          throw new Error(payload.error ?? "Failed to load weekly plan.");
        }
        setDays(Array.isArray(payload.days) ? payload.days : []);
        setMessage(payload.message ?? null);
        setSetupRequired(Boolean(payload.setupRequired));
      } catch (error) {
        const details = error instanceof Error ? error.message : "Failed to load weekly plan.";
        setMessage(details);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchPlan();
  }, []);

  if (isLoading) {
    return (
      <SoftCard className="h-28 w-full animate-pulse border-indigo-200 bg-indigo-50">
        <span className="sr-only">Loading weekly plan</span>
      </SoftCard>
    );
  }

  if (days.length === 0) {
    return (
      <SoftCard as="section" className="border-indigo-200 bg-indigo-50 p-4">
        <h3 className="text-lg font-bold text-indigo-900">AI Weekly Plan</h3>
        <p className="mt-1 text-sm text-zinc-700">
          {message ?? "Complete lessons to unlock your weekly AI study plan."}
        </p>
        {setupRequired ? (
          <ProgressChip label="Setup" value="Schema required" tone="warning" className="mt-2" />
        ) : null}
      </SoftCard>
    );
  }

  return (
    <SoftCard as="section" className="border-indigo-200 bg-indigo-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-indigo-900">AI Weekly Plan</h3>
        <ProgressChip label="Days" value={days.length} tone="info" />
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {days.slice(0, 6).map((day) => (
          <SoftCard key={`${day.isoDate}-${day.lessonId}`} className="border-indigo-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800">{day.dayLabel}</p>
            <Link href={toLessonPath(day.lessonId)} className="ui-focus-ring mt-1 inline-block rounded px-1 text-sm font-semibold text-zinc-900 hover:underline">
              {day.lessonTitle}
            </Link>
            {day.moduleTitle ? (
              <p className="mt-1 text-xs text-zinc-600">{day.moduleTitle}</p>
            ) : null}
            <ul className="mt-2 space-y-1 text-xs text-zinc-700">
              {day.tasks.slice(0, 3).map((task) => (
                <li key={task}>• {task}</li>
              ))}
            </ul>
          </SoftCard>
        ))}
      </div>
    </SoftCard>
  );
}
