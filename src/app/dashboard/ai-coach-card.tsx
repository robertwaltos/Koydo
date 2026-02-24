"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { toLessonPath } from "@/lib/routing/paths";

type FollowupPack = {
  summary: string;
  focusSkills: string[];
  nextLessonIds: string[];
};

type FollowupMaterial = {
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  status: "generating" | "completed" | "failed";
  generationMode: "rule_based" | "openai";
  model: string | null;
  updatedAt: string;
  pack: FollowupPack;
};

type FollowupResponse = {
  material: FollowupMaterial | null;
  setupRequired?: boolean;
  message?: string;
  error?: string;
};

function formatRelativeTime(value: string) {
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return "recently";
  const deltaMs = Date.now() - timestamp;
  if (deltaMs < 60_000) return "just now";
  const minutes = Math.floor(deltaMs / 60_000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function AiCoachCard() {
  const [material, setMaterial] = useState<FollowupMaterial | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBackfilling, setIsBackfilling] = useState(false);
  const [setupRequired, setSetupRequired] = useState(false);
  const [setupMessage, setSetupMessage] = useState<string | null>(null);
  const backfillAttemptedRef = useRef(false);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await fetch("/api/ai/follow-up", { cache: "no-store" });
        const payload = (await response.json()) as FollowupResponse;
        if (response.ok) {
          setMaterial(payload.material ?? null);
          setSetupRequired(Boolean(payload.setupRequired));
          setSetupMessage(payload.message ?? null);
        }
      } catch {
        // Non-blocking card.
      } finally {
        setIsLoading(false);
      }
    };

    void fetchLatest();
  }, []);

  useEffect(() => {
    if (isLoading || setupRequired || material || isBackfilling || backfillAttemptedRef.current) {
      return;
    }

    backfillAttemptedRef.current = true;
    const runBackfill = async () => {
      setIsBackfilling(true);
      try {
        const response = await fetch("/api/ai/follow-up/backfill", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ limit: 3 }),
        });
        const payload = (await response.json()) as {
          setupRequired?: boolean;
          message?: string;
        };
        if (payload.setupRequired) {
          setSetupRequired(true);
          setSetupMessage(payload.message ?? "AI follow-up storage is not ready.");
          return;
        }

        const refreshResponse = await fetch("/api/ai/follow-up", { cache: "no-store" });
        const refreshPayload = (await refreshResponse.json()) as FollowupResponse;
        if (refreshResponse.ok) {
          setMaterial(refreshPayload.material ?? null);
          setSetupRequired(Boolean(refreshPayload.setupRequired));
          setSetupMessage(refreshPayload.message ?? null);
        }
      } catch {
        // Silent fallback.
      } finally {
        setIsBackfilling(false);
      }
    };

    void runBackfill();
  }, [isBackfilling, isLoading, material, setupRequired]);

  if (isLoading) {
    return (
      <SoftCard className="h-28 w-full animate-pulse border-cyan-200 bg-cyan-50">
        <span className="sr-only">Loading AI coach card</span>
      </SoftCard>
    );
  }

  if (!material) {
    return (
      <SoftCard as="section" className="border-cyan-200 bg-cyan-50 p-4">
        <h3 className="text-lg font-bold text-cyan-900">AI Coach</h3>
        {setupRequired ? (
          <p className="mt-1 text-sm text-zinc-700">
            {setupMessage ?? "AI follow-up storage is not ready. Apply the latest Supabase schema."}
          </p>
        ) : (
          <p className="mt-1 text-sm text-zinc-700">
            {isBackfilling
              ? "AI coach is preparing your first personalized follow-up pack from recent completed lessons."
              : "Complete a lesson and your personalized follow-up study pack will appear here."}
          </p>
        )}
      </SoftCard>
    );
  }

  return (
    <SoftCard as="section" className="border-cyan-200 bg-cyan-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-cyan-900">AI Coach</h3>
        <ProgressChip label="Updated" value={formatRelativeTime(material.updatedAt)} tone="info" />
      </div>
      <p className="mt-2 text-sm text-zinc-700">
        Latest pack from <span className="font-semibold text-zinc-900">{material.lessonTitle}</span>
        {material.moduleTitle ? ` • ${material.moduleTitle}` : ""}
      </p>
      <p className="mt-2 text-sm text-zinc-700">{material.pack.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {material.pack.focusSkills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="inline-flex min-h-9 items-center rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={toLessonPath(material.lessonId)}
          className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-900 hover:bg-cyan-100"
        >
          Open follow-up lesson
        </Link>
        {material.pack.nextLessonIds[0] ? (
          <Link
            href={toLessonPath(material.pack.nextLessonIds[0])}
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
          >
            Start next suggested lesson
          </Link>
        ) : null}
      </div>
    </SoftCard>
  );
}
