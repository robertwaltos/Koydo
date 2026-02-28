"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProgressChip from "@/app/components/ui/progress-chip";
import SoftCard from "@/app/components/ui/soft-card";
import { toTestingCatalogPath, toTestingExamPath } from "@/lib/routing/paths";
import type { TestingAttemptResultResponse } from "@/lib/testing/types";

type TestingResultClientProps = {
  attemptId: string;
};

type DomainEntry = {
  name: string;
  correct: number;
  total: number;
  score: number;
};

export default function TestingResultClient({ attemptId }: TestingResultClientProps) {
  const [result, setResult] = useState<TestingAttemptResultResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadResult = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/testing/attempts/${encodeURIComponent(attemptId)}`, {
          cache: "no-store",
        });
        const payload = (await response.json().catch(() => null)) as TestingAttemptResultResponse & {
          error?: string;
        };

        if (!response.ok) {
          if (!cancelled) {
            setError(payload?.error ?? "Failed to load attempt result.");
          }
          return;
        }

        if (!cancelled) {
          setResult(payload);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load attempt result.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void loadResult();
    return () => {
      cancelled = true;
    };
  }, [attemptId]);

  const domainEntries = useMemo<DomainEntry[]>(() => {
    if (!result) return [];
    return Object.entries(result.domainBreakdown)
      .map(([name, snapshot]) => ({
        name,
        correct: snapshot.correct,
        total: snapshot.total,
        score: snapshot.score,
      }))
      .sort((left, right) => right.score - left.score);
  }, [result]);

  if (isLoading) {
    return (
      <SoftCard className="p-5">
        <p className="text-sm font-semibold text-zinc-700">Loading results...</p>
      </SoftCard>
    );
  }

  if (error || !result) {
    return (
      <SoftCard className="border-red-200 bg-red-50 p-5">
        <p className="text-sm font-semibold text-red-800">{error ?? "Result not found."}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={toTestingCatalogPath()}
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-bold text-red-800 hover:bg-red-100"
          >
            Back to Catalog
          </Link>
        </div>
      </SoftCard>
    );
  }

  return (
    <div className="space-y-4">
      <SoftCard className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {result.examCode.replace(/-/g, " ").toUpperCase()}
            </p>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900">
              {result.score.toFixed(2)}%
            </h2>
            <p
              className={`mt-2 text-sm font-bold ${
                result.pass ? "text-emerald-700" : "text-amber-700"
              }`}
            >
              {result.pass ? "Pass threshold met" : "Keep practicing"}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ProgressChip label="Mode" value={result.attemptType} tone="neutral" />
            <ProgressChip label="Attempt" value={result.attemptId.slice(0, 8)} tone="info" />
          </div>
        </div>
      </SoftCard>

      <SoftCard className="p-5 sm:p-6">
        <h3 className="text-lg font-bold text-zinc-900">Domain Breakdown</h3>
        {domainEntries.length === 0 ? (
          <p className="mt-2 text-sm font-medium text-zinc-600">No domain analytics recorded.</p>
        ) : (
          <div className="mt-3 space-y-3">
            {domainEntries.map((entry) => (
              <div key={entry.name} className="space-y-1">
                <div className="flex items-center justify-between gap-2 text-sm">
                  <p className="font-semibold text-zinc-800">{entry.name}</p>
                  <p className="font-bold text-zinc-700">
                    {entry.correct}/{entry.total} ({entry.score.toFixed(2)}%)
                  </p>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className={`h-full rounded-full ${
                      entry.score >= 70 ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                    style={{ width: `${Math.max(0, Math.min(100, entry.score))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </SoftCard>

      <SoftCard className="p-5 sm:p-6">
        <h3 className="text-lg font-bold text-zinc-900">Diagnosis</h3>
        {result.diagnosis.weakDomains.length === 0 ? (
          <p className="mt-2 text-sm font-medium text-zinc-700">
            No weak domains detected in this attempt.
          </p>
        ) : (
          <div className="mt-3 space-y-2">
            <p className="text-sm font-semibold text-zinc-800">Weak domains:</p>
            <div className="flex flex-wrap gap-2">
              {result.diagnosis.weakDomains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        )}

        {result.diagnosis.remediationModules.length > 0 ? (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-zinc-800">Suggested remediation modules:</p>
            <div className="flex flex-wrap gap-2">
              {result.diagnosis.remediationModules.map((moduleId) => (
                <span
                  key={moduleId}
                  className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800"
                >
                  {moduleId}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </SoftCard>

      <SoftCard className="p-4">
        <div className="flex flex-wrap gap-2">
          <Link
            href={toTestingExamPath(result.examId, result.attemptType)}
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100"
          >
            Retake
          </Link>
          <Link
            href={toTestingCatalogPath()}
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
          >
            Back to Catalog
          </Link>
        </div>
      </SoftCard>
    </div>
  );
}

