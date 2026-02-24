"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { toLessonPath } from "@/lib/routing/paths";

type WorksheetShape = {
  title: string;
  objective: string;
  readinessCheck: string[];
  guidedPractice: Array<{ prompt: string; expected: string; hint?: string }>;
  correctionDrill: Array<{ mistake: string; fix: string }>;
  exitTicket: string[];
  reflection: string;
  estimatedMinutes: number;
};

type WorksheetMaterial = {
  lessonId: string;
  moduleId: string | null;
  lessonTitle: string;
  moduleTitle: string;
  status: "generating" | "completed" | "failed";
  generationMode: "rule_based" | "openai";
  model: string | null;
  worksheet: WorksheetShape;
  error: string | null;
  viewedAt: string | null;
  downloadedAt: string | null;
  completedAt: string | null;
  updatedAt: string;
};

type WorksheetResponse = {
  worksheet: WorksheetMaterial | null;
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

export default function AiRemediationWorksheetCard() {
  const [material, setMaterial] = useState<WorksheetMaterial | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [setupRequired, setSetupRequired] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorksheet = async () => {
      try {
        const response = await fetch("/api/ai/remediation-worksheet", { cache: "no-store" });
        const payload = (await response.json()) as WorksheetResponse;
        if (!response.ok) {
          throw new Error(payload.error ?? "Failed to load remediation worksheet.");
        }
        setMaterial(payload.worksheet ?? null);
        setSetupRequired(Boolean(payload.setupRequired));
        setMessage(payload.message ?? null);
      } catch (error) {
        const details =
          error instanceof Error ? error.message : "Failed to load remediation worksheet.";
        setMessage(details);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchWorksheet();
  }, []);

  const generate = async (force: boolean) => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const response = await fetch("/api/ai/remediation-worksheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ force }),
      });
      const payload = (await response.json()) as WorksheetResponse & { status?: string };
      if (!response.ok) {
        if (payload.setupRequired) {
          setSetupRequired(true);
          setMessage(payload.message ?? "Worksheet schema setup is required.");
          return;
        }
        throw new Error(payload.error ?? "Failed to generate remediation worksheet.");
      }
      setMaterial(payload.worksheet ?? null);
      setSetupRequired(Boolean(payload.setupRequired));
      setMessage(payload.message ?? null);
    } catch (error) {
      const details =
        error instanceof Error ? error.message : "Failed to generate remediation worksheet.";
      setMessage(details);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWorksheet = async (format: "txt" | "pdf") => {
    if (!material) return;
    try {
      await fetch("/api/ai/remediation-worksheet/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonId: material.lessonId,
          action: "downloaded",
        }),
      });
    } catch {
      // Non-blocking telemetry path.
    } finally {
      window.location.href = `/api/ai/remediation-worksheet?lessonId=${encodeURIComponent(material.lessonId)}&format=${format}`;
    }
  };

  if (isLoading) {
    return (
      <SoftCard className="h-28 w-full animate-pulse border-amber-200 bg-amber-50">
        <span className="sr-only">Loading remediation worksheet</span>
      </SoftCard>
    );
  }

  if (!material) {
    return (
      <SoftCard as="section" className="border-amber-200 bg-amber-50 p-4">
        <h3 className="text-lg font-bold text-amber-900">AI Remediation Worksheet</h3>
        <p className="mt-1 text-sm text-zinc-700">
          {message ?? "Generate a targeted worksheet based on your latest lesson and tutor context."}
        </p>
        {!setupRequired ? (
          <button
            type="button"
            onClick={() => void generate(false)}
            disabled={isGenerating}
            className="ui-focus-ring ui-soft-button mt-3 min-h-11 rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isGenerating ? "Generating..." : "Generate worksheet"}
          </button>
        ) : null}
      </SoftCard>
    );
  }

  return (
    <SoftCard as="section" className="border-amber-200 bg-amber-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-amber-900">AI Remediation Worksheet</h3>
        <ProgressChip label="Updated" value={formatRelativeTime(material.updatedAt)} tone="info" />
      </div>
      <p className="mt-2 text-sm text-zinc-700">
        {material.lessonTitle}
        {material.moduleTitle ? ` • ${material.moduleTitle}` : ""}
      </p>
      <p className="mt-2 text-sm font-semibold text-zinc-900">{material.worksheet.objective}</p>
      <div className="mt-3 space-y-1 text-sm text-zinc-700">
        {material.worksheet.readinessCheck.slice(0, 2).map((item) => (
          <p key={item}>- {item}</p>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={toLessonPath(material.lessonId)}
          className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
        >
          Open lesson worksheet
        </Link>
        <button
          type="button"
          onClick={() => void downloadWorksheet("txt")}
          className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
        >
          Download .txt
        </button>
        <button
          type="button"
          onClick={() => void downloadWorksheet("pdf")}
          className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
        >
          Download .pdf
        </button>
        <button
          type="button"
          onClick={() => void generate(true)}
          disabled={isGenerating}
          className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isGenerating ? "Refreshing..." : "Refresh worksheet"}
        </button>
      </div>
    </SoftCard>
  );
}
