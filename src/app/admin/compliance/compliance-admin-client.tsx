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

  return (
    <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold">DSAR Queue</h2>
      {status ? (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{status}</p>
      ) : null}
      <div className="mt-3 rounded-md border border-black/10 p-3 dark:border-white/10">
        <p className="text-sm font-medium">Bulk Update</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <select
            value={bulkStatus}
            onChange={(event) => setBulkStatus(event.target.value as DsarRow["status"])}
            className="rounded border border-black/15 px-2 py-1 text-xs"
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
            className="rounded border border-black/15 px-2 py-1 text-xs"
          />
          <button
            type="button"
            onClick={applyBulkStatus}
            className="rounded border border-black/15 px-2 py-1 text-xs"
          >
            Apply to Selected ({selectedIds.length})
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-3">
        {rows.map((row) => (
          <article key={row.id} className="rounded-md border border-black/10 p-3 dark:border-white/10">
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
                className="rounded border border-black/15 px-2 py-1 text-xs"
              >
                In Progress
              </button>
              <button
                type="button"
                onClick={() => updateStatus(row.id, "completed")}
                className="rounded border border-black/15 px-2 py-1 text-xs"
              >
                Complete
              </button>
              <button
                type="button"
                onClick={() => updateStatus(row.id, "rejected")}
                className="rounded border border-black/15 px-2 py-1 text-xs"
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
