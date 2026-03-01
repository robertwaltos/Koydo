"use client";

import { useEffect, useMemo, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import { useI18n } from "@/lib/i18n/provider";
import { formatCurrency, formatDate as formatLocaleDate } from "@/lib/i18n/format";

type ReportUsage = {
  monthKey: string;
  planName: string;
  planTier: string;
  scoredAttempts: number;
  scoredAttemptsLimit: number;
  scoredAttemptsRemaining: number;
  practiceAttempts: number;
  audioMinutes: number;
  aiCostUsd: number;
};

type ReportProgress = {
  totalAttempts: number;
  gradedAttempts: number;
  practiceAttempts: number;
  averageScore: number | null;
  mastery: number;
  points: number;
  level: number;
  badgeCount: number;
  questsCompleted: number;
  lastActivityAt: string | null;
};

type ProfileReport = {
  studentProfileId: string;
  displayName: string;
  gradeLevel: string | null;
  currentUsage: ReportUsage;
  progress: ReportProgress;
};

type ParentLanguageReportsPayload = {
  generatedAt: string;
  monthsWindow: number;
  reports: ProfileReport[];
  warnings: string[];
};

function formatPercent(
  value: number | null,
  t: (key: string, vars?: Record<string, string | number>) => string,
) {
  if (typeof value !== "number" || !Number.isFinite(value)) return t("parent_reports_not_available_short");
  return `${Math.round(value)}%`;
}

function formatReportDate(
  value: string | null,
  t: (key: string, vars?: Record<string, string | number>) => string,
  locale: string,
) {
  if (!value) return t("parent_reports_no_activity_yet");
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return t("parent_reports_no_activity_yet");
  return formatLocaleDate(parsed, locale, { month: "short", day: "numeric" });
}

function formatUsd(value: number, locale: string) {
  if (!Number.isFinite(value)) return "$0.00";
  return formatCurrency(value, "USD", locale);
}

export default function ParentReportsClient() {
  const { t, locale } = useI18n();
  const [payload, setPayload] = useState<ParentLanguageReportsPayload | null>(null);
  const [busy, setBusy] = useState(true);
  const [status, setStatus] = useState(t("parent_reports_loading_status"));

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setBusy(true);
      setStatus(t("parent_reports_loading_status"));

      try {
        const response = await fetch("/api/parent/reports/language?months=6", {
          method: "GET",
          cache: "no-store",
        });
        const data = (await response.json().catch(() => null)) as
          | ParentLanguageReportsPayload
          | { error?: string; message?: string }
          | null;

        if (!response.ok) {
          const message =
            (data && "error" in data && typeof data.error === "string" && data.error) ||
            (data && "message" in data && typeof data.message === "string" && data.message) ||
            t("parent_reports_failed_load");
          throw new Error(message);
        }

        if (!data || !("reports" in data) || !Array.isArray(data.reports)) {
          throw new Error(t("parent_reports_unexpected_shape"));
        }

        if (!cancelled) {
          setPayload(data as ParentLanguageReportsPayload);
          setStatus(t("parent_reports_loaded_status"));
        }
      } catch (error) {
        if (!cancelled) {
          setPayload(null);
          setStatus(error instanceof Error ? error.message : t("parent_reports_failed_load"));
        }
      } finally {
        if (!cancelled) {
          setBusy(false);
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [t]);

  const totals = useMemo(() => {
    if (!payload?.reports?.length) {
      return {
        learners: 0,
        gradedAttempts: 0,
        practiceAttempts: 0,
        avgMastery: null as number | null,
      };
    }

    const learners = payload.reports.length;
    let gradedAttempts = 0;
    let practiceAttempts = 0;
    let masterySum = 0;

    for (const report of payload.reports) {
      gradedAttempts += report.currentUsage.scoredAttempts;
      practiceAttempts += report.currentUsage.practiceAttempts;
      masterySum += Number.isFinite(report.progress.mastery) ? report.progress.mastery : 0;
    }

    return {
      learners,
      gradedAttempts,
      practiceAttempts,
      avgMastery: learners > 0 ? masterySum / learners : null,
    };
  }, [payload]);

  return (
    <div className="space-y-5">
      <SoftCard className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">{t("parent_reports_language_reports")}</p>
            <p className="mt-1 text-sm text-zinc-700">{status}</p>
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="ui-focus-ring rounded-full border border-zinc-200 bg-surface-muted px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            {t("parent_reports_refresh")}
          </button>
        </div>
      </SoftCard>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <SoftCard className="p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">{t("parent_reports_learners")}</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">{totals.learners}</p>
        </SoftCard>
        <SoftCard className="p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">{t("parent_reports_scored_attempts")}</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">{totals.gradedAttempts}</p>
        </SoftCard>
        <SoftCard className="p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">{t("parent_reports_practice_attempts")}</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">{totals.practiceAttempts}</p>
        </SoftCard>
        <SoftCard className="p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">{t("parent_reports_avg_mastery")}</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">{formatPercent(totals.avgMastery, t)}</p>
        </SoftCard>
      </section>

      {payload?.warnings && payload.warnings.length > 0 ? (
        <SoftCard className="border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-800">{t("parent_reports_warnings")}</p>
          <ul className="mt-2 space-y-1 text-sm text-amber-700">
            {payload.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </SoftCard>
      ) : null}

      <section className="space-y-3">
        {busy && !payload ? (
          <SoftCard className="p-5 text-sm text-zinc-600">{t("parent_reports_loading_reports")}</SoftCard>
        ) : null}

        {!busy && payload && payload.reports.length === 0 ? (
          <SoftCard className="p-5 text-sm text-zinc-600">
            {t("parent_reports_no_data")}
          </SoftCard>
        ) : null}

        {payload?.reports.map((report) => (
          <SoftCard key={report.studentProfileId} className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{report.displayName}</h2>
                <p className="text-xs text-zinc-500">
                  {t("parent_reports_grade_plan", {
                    grade: report.gradeLevel ?? t("parent_reports_not_available_short"),
                    plan: report.currentUsage.planName,
                  })}
                </p>
              </div>
              <p className="text-xs text-zinc-500">
                {t("parent_reports_last_activity", {
                  date: formatReportDate(report.progress.lastActivityAt, t, locale),
                })}
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Metric label={t("parent_reports_metric_mastery")} value={formatPercent(report.progress.mastery, t)} />
              <Metric label={t("parent_reports_metric_average_score")} value={formatPercent(report.progress.averageScore, t)} />
              <Metric
                label={t("parent_reports_metric_scored_remaining")}
                value={`${report.currentUsage.scoredAttemptsRemaining}/${report.currentUsage.scoredAttemptsLimit}`}
              />
              <Metric
                label={t("parent_reports_metric_ai_cost_month")}
                value={formatUsd(report.currentUsage.aiCostUsd, locale)}
              />
            </div>
          </SoftCard>
        ))}
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-surface-muted p-3">
      <p className="text-xs uppercase tracking-wide text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-zinc-900">{value}</p>
    </div>
  );
}
