"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

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

type Props = {
  lessonId: string;
  moduleId: string;
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

export default function AiRemediationWorksheetPanel({ lessonId, moduleId }: Props) {
  const [material, setMaterial] = useState<WorksheetMaterial | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [setupRequired, setSetupRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isMarkingComplete, setIsMarkingComplete] = useState(false);
  const [viewTracked, setViewTracked] = useState(false);
  const autoAttemptedRef = useRef(false);

  const fetchWorksheet = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/ai/remediation-worksheet?lessonId=${encodeURIComponent(lessonId)}`,
        {
          cache: "no-store",
        },
      );
      const payload = (await response.json()) as WorksheetResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to load remediation worksheet.");
      }
      setMaterial(payload.worksheet);
      setSetupRequired(Boolean(payload.setupRequired));
      if (payload.message) {
        setErrorMessage(payload.message);
      } else {
        setErrorMessage(null);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to load remediation worksheet.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  }, [lessonId]);

  useEffect(() => {
    void fetchWorksheet();
  }, [fetchWorksheet]);

  const generateWorksheet = useCallback(
    async (force: boolean) => {
      setIsGenerating(true);
      try {
        const response = await fetch("/api/ai/remediation-worksheet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lessonId,
            moduleId,
            force,
          }),
        });
        const payload = (await response.json()) as WorksheetResponse;
        if (!response.ok) {
          if (payload.setupRequired) {
            setSetupRequired(true);
            setErrorMessage(payload.message ?? "Worksheet schema is not ready yet.");
            return;
          }
          throw new Error(payload.error ?? "Unable to generate remediation worksheet.");
        }
        setMaterial(payload.worksheet ?? null);
        setSetupRequired(Boolean(payload.setupRequired));
        setErrorMessage(payload.message ?? null);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Unable to generate remediation worksheet.";
        setErrorMessage(message);
      } finally {
        setIsGenerating(false);
      }
    },
    [lessonId, moduleId],
  );

  useEffect(() => {
    if (isLoading || setupRequired || material || isGenerating || autoAttemptedRef.current) {
      return;
    }
    autoAttemptedRef.current = true;
    void generateWorksheet(false);
  }, [generateWorksheet, isGenerating, isLoading, material, setupRequired]);

  useEffect(() => {
    if (!material || !material.worksheet || viewTracked) {
      return;
    }

    setViewTracked(true);
    const run = async () => {
      try {
        await fetch("/api/ai/remediation-worksheet/progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lessonId,
            action: "viewed",
          }),
        });
      } catch {
        // Non-blocking tracking.
      }
    };
    void run();
  }, [lessonId, material, viewTracked]);

  const trackAndDownload = async (format: "txt" | "pdf") => {
    try {
      await fetch("/api/ai/remediation-worksheet/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonId,
          action: "downloaded",
        }),
      });
    } catch {
      // Non-blocking tracking.
    } finally {
      window.location.href = `/api/ai/remediation-worksheet?lessonId=${encodeURIComponent(lessonId)}&format=${format}`;
    }
  };

  const markWorksheetComplete = async () => {
    if (isMarkingComplete) return;
    setIsMarkingComplete(true);
    try {
      const response = await fetch("/api/ai/remediation-worksheet/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonId,
          action: "completed",
        }),
      });
      const payload = (await response.json()) as {
        error?: string;
        completedAt?: string | null;
      };
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to mark worksheet complete.");
      }
      setMaterial((previous) =>
        previous
          ? {
              ...previous,
              completedAt: payload.completedAt ?? previous.completedAt,
            }
          : previous,
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to mark worksheet complete.";
      setErrorMessage(message);
    } finally {
      setIsMarkingComplete(false);
    }
  };

  const worksheet = material?.worksheet ?? null;
  const readinessCheck = useMemo(
    () => (worksheet ? worksheet.readinessCheck.slice(0, 4) : []),
    [worksheet],
  );
  const guidedPractice = useMemo(
    () => (worksheet ? worksheet.guidedPractice.slice(0, 4) : []),
    [worksheet],
  );
  const correctionDrill = useMemo(
    () => (worksheet ? worksheet.correctionDrill.slice(0, 3) : []),
    [worksheet],
  );
  const exitTicket = useMemo(
    () => (worksheet ? worksheet.exitTicket.slice(0, 3) : []),
    [worksheet],
  );

  if (isLoading) {
    return (
      <SoftCard className="h-40 animate-pulse border-amber-200 bg-amber-50">
        <span className="sr-only">Loading remediation worksheet</span>
      </SoftCard>
    );
  }

  return (
    <SoftCard as="section" className="border-amber-200 bg-amber-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-amber-900">AI Remediation Worksheet</h2>
          <p className="text-sm text-zinc-700">
            Targeted review tasks generated from your follow-up + tutor signals.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {material?.updatedAt ? (
            <ProgressChip label="Updated" value={formatRelativeTime(material.updatedAt)} tone="info" />
          ) : null}
          {worksheet ? (
            <ProgressChip label="Minutes" value={worksheet.estimatedMinutes} tone="neutral" />
          ) : null}
          {material?.completedAt ? (
            <ProgressChip label="Worksheet" value="Completed" tone="success" />
          ) : null}
        </div>
      </div>

      {setupRequired ? (
        <p className="mt-3 rounded-xl border border-amber-300 bg-white px-3 py-2 text-sm text-amber-900">
          {errorMessage ?? "AI remediation worksheet storage is not ready. Apply latest Supabase schema."}
        </p>
      ) : null}

      {errorMessage && !setupRequired ? (
        <p className="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">
          {errorMessage}
        </p>
      ) : null}

      {!worksheet && !setupRequired ? (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-zinc-700">
            Generate a worksheet to rehearse weak spots from this lesson.
          </p>
          <button
            type="button"
            disabled={isGenerating}
            onClick={() => void generateWorksheet(false)}
            className="ui-focus-ring ui-soft-button min-h-11 rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isGenerating ? "Generating..." : "Generate worksheet"}
          </button>
        </div>
      ) : null}

      {worksheet ? (
        <div className="mt-4 space-y-4">
          <SoftCard className="border-amber-200 bg-white p-4">
            <p className="text-sm font-semibold text-zinc-900">{worksheet.title}</p>
            <p className="mt-1 text-sm text-zinc-700">{worksheet.objective}</p>
            <p className="mt-2 text-xs text-zinc-600">{worksheet.reflection}</p>
          </SoftCard>

          <div className="grid gap-3 md:grid-cols-2">
            <SoftCard className="border-amber-200 bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Readiness Check</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                {readinessCheck.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </SoftCard>
            <SoftCard className="border-amber-200 bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Exit Ticket</p>
              <ol className="mt-2 space-y-1 text-sm text-zinc-700">
                {exitTicket.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </SoftCard>
          </div>

          <SoftCard className="border-amber-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Guided Practice</p>
            <div className="mt-2 space-y-3">
              {guidedPractice.map((item, index) => (
                <div key={`${item.prompt}-${index}`} className="rounded-xl border border-amber-100 bg-amber-50 p-3">
                  <p className="text-sm font-semibold text-zinc-900">{index + 1}. {item.prompt}</p>
                  <p className="mt-1 text-sm text-zinc-700">Expected: {item.expected}</p>
                  {item.hint ? <p className="mt-1 text-xs text-zinc-600">Hint: {item.hint}</p> : null}
                </div>
              ))}
            </div>
          </SoftCard>

          <SoftCard className="border-amber-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Correction Drill</p>
            <div className="mt-2 space-y-3">
              {correctionDrill.map((item, index) => (
                <div key={`${item.mistake}-${index}`} className="rounded-xl border border-amber-100 bg-amber-50 p-3">
                  <p className="text-sm font-semibold text-zinc-900">Mistake: {item.mistake}</p>
                  <p className="mt-1 text-sm text-zinc-700">Fix: {item.fix}</p>
                </div>
              ))}
            </div>
          </SoftCard>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void trackAndDownload("txt")}
              className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
            >
              Download .txt worksheet
            </button>
            <button
              type="button"
              onClick={() => void trackAndDownload("pdf")}
              className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
            >
              Download .pdf worksheet
            </button>
            <button
              type="button"
              disabled={Boolean(material?.completedAt) || isMarkingComplete}
              onClick={() => void markWorksheetComplete()}
              className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {material?.completedAt ? "Completed" : isMarkingComplete ? "Saving..." : "Mark worksheet complete"}
            </button>
            <button
              type="button"
              disabled={isGenerating}
              onClick={() => void generateWorksheet(true)}
              className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isGenerating ? "Refreshing..." : "Refresh worksheet"}
            </button>
          </div>
        </div>
      ) : null}
    </SoftCard>
  );
}
