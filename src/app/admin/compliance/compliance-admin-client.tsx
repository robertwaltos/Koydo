"use client";

import { useState } from "react";

type DsarRow = {
  id: string;
  user_id: string;
  request_type: string;
  status: "pending" | "in_progress" | "completed" | "rejected";
  requested_at: string;
  resolved_at: string | null;
};

type DbReadinessRow = {
  table: string;
  status: "present" | "missing" | "error";
  detail: string;
};

type DbReadinessResult = {
  generatedAt: string;
  healthy: boolean;
  totals: { present: number; missing: number; error: number; total: number };
  tables: DbReadinessRow[];
};

export default function ComplianceAdminClient({
  initialDsarRequests,
}: {
  initialDsarRequests: DsarRow[];
}) {
  const [rows, setRows] = useState(initialDsarRequests);
  const [status, setStatus] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkStatus, setBulkStatus] = useState<DsarRow["status"]>("in_progress");
  const [bulkConfirm, setBulkConfirm] = useState("");
  const [dbCheck, setDbCheck] = useState<DbReadinessResult | null>(null);
  const [dbCheckLoading, setDbCheckLoading] = useState(false);

  const updateStatus = async (requestId: string, nextStatus: DsarRow["status"]) => {
    setStatus("");
    try {
      const response = await fetch(`/api/admin/compliance/dsar/${requestId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to update DSAR status.");
        return;
      }
      setRows((previous) =>
        previous.map((entry) =>
          entry.id === requestId
            ? {
                ...entry,
                status: nextStatus,
                resolved_at:
                  nextStatus === "completed" || nextStatus === "rejected"
                    ? new Date().toISOString()
                    : null,
              }
            : entry
        )
      );
      setStatus(`DSAR ${requestId} updated to ${nextStatus}.`);
    } catch {
      setStatus("Unable to update DSAR status.");
    }
  };

  const toggleSelection = (requestId: string) => {
    setSelectedIds((previous) =>
      previous.includes(requestId)
        ? previous.filter((id) => id !== requestId)
        : [...previous, requestId]
    );
  };

  const applyBulkStatus = async () => {
    setStatus("");
    if (selectedIds.length === 0) {
      setStatus("Select at least one DSAR request.");
      return;
    }
    if (bulkConfirm !== "UPDATE_DSAR_BULK") {
      setStatus("Bulk update blocked. Type UPDATE_DSAR_BULK to confirm.");
      return;
    }

    try {
      const response = await fetch("/api/admin/compliance/dsar/bulk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestIds: selectedIds,
          status: bulkStatus,
          confirmText: bulkConfirm,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        updatedCount?: number;
      };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to run bulk update.");
        return;
      }

      setRows((previous) =>
        previous.map((entry) =>
          selectedIds.includes(entry.id)
            ? {
                ...entry,
                status: bulkStatus,
                resolved_at:
                  bulkStatus === "completed" || bulkStatus === "rejected"
                    ? new Date().toISOString()
                    : null,
              }
            : entry
        )
      );
      setStatus(`Updated ${data.updatedCount ?? selectedIds.length} DSAR request(s).`);
      setSelectedIds([]);
      setBulkConfirm("");
    } catch {
      setStatus("Unable to run bulk update.");
    }
  };

  const runDbReadinessCheck = async () => {
    setDbCheckLoading(true);
    setStatus("");
    try {
      const response = await fetch("/api/admin/system/db-readiness", { method: "GET" });
      const data = (await response.json().catch(() => ({}))) as DbReadinessResult & { error?: string };
      if (!response.ok && !data.tables) {
        setStatus(data.error ?? "Unable to run DB readiness check.");
        return;
      }
      setDbCheck(data);
      setStatus(
        data.healthy
          ? "DB readiness check passed."
          : `DB readiness check found issues: missing ${data.totals.missing}, errors ${data.totals.error}.`,
      );
    } catch {
      setStatus("Unable to run DB readiness check.");
    } finally {
      setDbCheckLoading(false);
    }
  };

  return (
    <section className="ui-soft-card p-5">
      <h2 className="text-lg font-semibold">DSAR Queue</h2>
      {status ? (
        <p className="mt-2 text-sm text-zinc-600" role="status" aria-live="polite">
          {status}
        </p>
      ) : null}
      <div className="mt-3 rounded-2xl border border-border p-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-medium">Live DB Readiness Check</p>
          <button
            type="button"
            onClick={runDbReadinessCheck}
            disabled={dbCheckLoading}
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground"
          >
            {dbCheckLoading ? "Running..." : "Run DB Check"}
          </button>
        </div>
        {dbCheck ? (
          <div className="mt-2 text-xs text-zinc-600">
            <p>
              Generated {new Date(dbCheck.generatedAt).toLocaleString()} | Present {dbCheck.totals.present} | Missing{" "}
              {dbCheck.totals.missing} | Error {dbCheck.totals.error}
            </p>
            <div className="mt-2 max-h-40 overflow-auto rounded-2xl border border-border p-2">
              {dbCheck.tables.map((row) => (
                <p key={row.table} className="mb-1">
                  [{row.status.toUpperCase()}] {row.table}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="mt-3 rounded-2xl border border-border p-3">
        <p className="text-sm font-medium">Bulk Update</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <select
            value={bulkStatus}
            onChange={(event) => setBulkStatus(event.target.value as DsarRow["status"])}
            aria-label="Bulk DSAR status"
            className="ui-focus-ring rounded-full border border-border bg-surface px-3 py-1 text-xs"
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In progress</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
          <input
            value={bulkConfirm}
            onChange={(event) => setBulkConfirm(event.target.value)}
            placeholder="Type UPDATE_DSAR_BULK"
            className="ui-focus-ring rounded-full border border-border bg-surface px-3 py-1 text-xs"
          />
          <button
            type="button"
            onClick={applyBulkStatus}
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground"
          >
            Apply to Selected ({selectedIds.length})
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-3">
        {rows.map((row) => (
          <article key={row.id} className="rounded-2xl border border-border p-3">
            <label className="mb-2 flex items-center gap-2 text-xs text-zinc-500">
              <input
                type="checkbox"
                checked={selectedIds.includes(row.id)}
                onChange={() => toggleSelection(row.id)}
              />
              Select for bulk update
            </label>
            <p className="font-medium capitalize">
              {row.request_type} ({row.status})
            </p>
            <p className="text-xs text-zinc-500">
              Request {row.id} | user {row.user_id}
            </p>
            <p className="text-xs text-zinc-500">
              Requested {new Date(row.requested_at).toLocaleString()}
            </p>
            {row.resolved_at ? (
              <p className="text-xs text-zinc-500">
                Resolved {new Date(row.resolved_at).toLocaleString()}
              </p>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => updateStatus(row.id, "in_progress")}
                className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground"
              >
                In Progress
              </button>
              <button
                type="button"
                onClick={() => updateStatus(row.id, "completed")}
                className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground"
              >
                Complete
              </button>
              <button
                type="button"
                onClick={() => updateStatus(row.id, "rejected")}
                className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground"
              >
                Reject
              </button>
            </div>
          </article>
        ))}
        {rows.length === 0 ? (
          <p className="text-sm text-zinc-500">No DSAR requests in queue.</p>
        ) : null}
      </div>
    </section>
  );
}
