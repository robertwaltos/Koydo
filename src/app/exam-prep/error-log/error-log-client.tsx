"use client";

import { useMemo, useState } from "react";

type ExamErrorLogRow = {
  id: string;
  module_id: string | null;
  lesson_id: string;
  question_id: string;
  skill_id: string | null;
  error_type: string;
  selected_option_id: string | null;
  correct_option_id: string | null;
  question_text: string | null;
  notes: string | null;
  resolved: boolean;
  resolved_at: string | null;
  created_at: string;
  updated_at: string;
};

type ErrorLogClientProps = {
  initialRows: ExamErrorLogRow[];
};

type FilterMode = "all" | "open" | "resolved";

export default function ErrorLogClient({ initialRows }: ErrorLogClientProps) {
  const [rows, setRows] = useState(initialRows);
  const [filter, setFilter] = useState<FilterMode>("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [autoResolving, setAutoResolving] = useState(false);
  const [autoResolveMessage, setAutoResolveMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const filteredRows = useMemo(() => {
    if (filter === "open") return rows.filter((row) => !row.resolved);
    if (filter === "resolved") return rows.filter((row) => row.resolved);
    return rows;
  }, [filter, rows]);

  const openCount = rows.filter((row) => !row.resolved).length;

  const toggleResolved = async (row: ExamErrorLogRow) => {
    setUpdatingId(row.id);
    setErrorMessage(null);
    try {
      const response = await fetch(`/api/exam/error-log/${encodeURIComponent(row.id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resolved: !row.resolved }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        row?: { resolved: boolean; resolved_at: string | null; updated_at: string };
      };
      if (!response.ok || !payload.row) {
        throw new Error(payload.error ?? "Unable to update error log item.");
      }
      setRows((previous) =>
        previous.map((entry) =>
          entry.id === row.id
            ? {
                ...entry,
                resolved: payload.row?.resolved ?? entry.resolved,
                resolved_at: payload.row?.resolved_at ?? entry.resolved_at,
                updated_at: payload.row?.updated_at ?? entry.updated_at,
              }
            : entry,
        ),
      );
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update error log item.");
    } finally {
      setUpdatingId(null);
    }
  };

  const runAutoResolve = async () => {
    setAutoResolving(true);
    setErrorMessage(null);
    setAutoResolveMessage(null);
    try {
      const response = await fetch("/api/exam/error-log/auto-resolve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit: 200 }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        success?: boolean;
        eligibleCount?: number;
        updatedCount?: number;
        updatedIds?: string[];
      };
      if (!response.ok || !payload.success) {
        throw new Error(payload.error ?? "Unable to auto-resolve error log items.");
      }

      const updatedIds = Array.isArray(payload.updatedIds) ? payload.updatedIds : [];
      if (updatedIds.length > 0) {
        const idSet = new Set(updatedIds);
        const resolvedAt = new Date().toISOString();
        setRows((previous) =>
          previous.map((row) =>
            idSet.has(row.id)
              ? {
                  ...row,
                  resolved: true,
                  resolved_at: resolvedAt,
                  updated_at: resolvedAt,
                }
              : row,
          ),
        );
      }

      const updatedCount = Math.max(0, Number(payload.updatedCount ?? 0));
      const eligibleCount = Math.max(0, Number(payload.eligibleCount ?? 0));
      if (updatedCount > 0) {
        setAutoResolveMessage(`Auto-resolved ${updatedCount} mastered item(s).`);
      } else if (eligibleCount > 0) {
        setAutoResolveMessage("Items are eligible, but no updates were applied in this run.");
      } else {
        setAutoResolveMessage("No mastered items are ready for auto-resolve yet.");
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to auto-resolve error log items.");
    } finally {
      setAutoResolving(false);
    }
  };

  return (
    <section className="ui-soft-card space-y-4 rounded-2xl border border-indigo-200 bg-surface p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`ui-soft-button ui-focus-ring rounded-full border px-3 py-1 text-xs font-semibold ${
              filter === "all" ? "border-indigo-300 bg-indigo-50 text-indigo-800" : "border-border bg-surface text-zinc-700"
            }`}
          >
            All ({rows.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("open")}
            className={`ui-soft-button ui-focus-ring rounded-full border px-3 py-1 text-xs font-semibold ${
              filter === "open" ? "border-amber-300 bg-amber-50 text-amber-800" : "border-border bg-surface text-zinc-700"
            }`}
          >
            Open ({openCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter("resolved")}
            className={`ui-soft-button ui-focus-ring rounded-full border px-3 py-1 text-xs font-semibold ${
              filter === "resolved" ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-border bg-surface text-zinc-700"
            }`}
          >
            Resolved ({rows.length - openCount})
          </button>
        </div>
        <button
          type="button"
          onClick={() => void runAutoResolve()}
          disabled={autoResolving}
          className="ui-soft-button ui-focus-ring rounded-full border border-indigo-300 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {autoResolving ? "Auto-resolving..." : "Auto-resolve mastered"}
        </button>
      </div>

      {errorMessage ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{errorMessage}</p>
      ) : null}
      {autoResolveMessage ? (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
          {autoResolveMessage}
        </p>
      ) : null}

      <div className="space-y-3">
        {filteredRows.length === 0 ? (
          <p className="rounded-lg border border-border bg-surface-muted px-3 py-3 text-sm text-zinc-600">
            No error log entries for this filter.
          </p>
        ) : null}
        {filteredRows.map((row) => (
          <article key={row.id} className="rounded-xl border border-border bg-surface p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {row.module_id ?? "module"} / {row.lesson_id}
              </p>
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  row.resolved ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                }`}
              >
                {row.resolved ? "Resolved" : "Open"}
              </span>
            </div>
            <h3 className="mt-2 text-sm font-semibold text-zinc-900">{row.question_text || row.question_id}</h3>
            <div className="mt-2 grid gap-1 text-xs text-zinc-600 sm:grid-cols-2">
              <p>Error Type: {row.error_type}</p>
              <p>Skill: {row.skill_id ?? "n/a"}</p>
              <p>Selected: {row.selected_option_id ?? "n/a"}</p>
              <p>Correct: {row.correct_option_id ?? "n/a"}</p>
              <p>Created: {new Date(row.created_at).toLocaleString()}</p>
              <p>Updated: {new Date(row.updated_at).toLocaleString()}</p>
            </div>
            {row.notes ? <p className="mt-2 text-xs text-zinc-700">Notes: {row.notes}</p> : null}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => void toggleResolved(row)}
                disabled={updatingId === row.id}
                className="ui-soft-button ui-focus-ring rounded-full border border-indigo-300 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updatingId === row.id ? "Saving..." : row.resolved ? "Mark Open" : "Mark Resolved"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
