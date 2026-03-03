"use client";

import { useCallback, useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

type AuditEntry = {
  id: string;
  admin_user_id: string;
  action_type: string;
  target_user_id: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

type AuditResponse = {
  logs: AuditEntry[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export default function AdminAuditPage() {
  const [logs, setLogs] = useState<AuditEntry[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [actionType, setActionType] = useState("");
  const [adminUserId, setAdminUserId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const loadLogs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("pageSize", "50");
      if (actionType.trim()) params.set("actionType", actionType.trim());
      if (adminUserId.trim()) params.set("adminUserId", adminUserId.trim());
      if (startDate) params.set("startDate", new Date(startDate).toISOString());
      if (endDate) params.set("endDate", new Date(endDate).toISOString());

      const res = await fetch(`/api/admin/audit-logs?${params.toString()}`);
      if (!res.ok) throw new Error();
      const data: AuditResponse = await res.json();
      setLogs(data.logs ?? []);
      setTotal(data.total ?? 0);
      setTotalPages(data.totalPages ?? 1);
    } catch {
      setLogs([]);
    } finally {
      setLoading(false);
    }
  }, [page, actionType, adminUserId, startDate, endDate]);

  useEffect(() => { loadLogs(); }, [loadLogs]);

  const exportCsv = () => {
    const header = "id,admin_user_id,action_type,target_user_id,created_at,metadata";
    const rows = logs.map((l) =>
      [l.id, l.admin_user_id, l.action_type, l.target_user_id ?? "", l.created_at, JSON.stringify(l.metadata ?? {}).replace(/"/g, '""')]
        .map((v) => `"${v}"`)
        .join(","),
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-logs-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Admin Audit Logs</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Immutable trace of operational actions taken by administrators.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Total" value={total} tone="info" />
          <ProgressChip label="Page" value={`${page} / ${totalPages}`} tone="info" />
        </div>
      </SoftCard>

      {/* Filters */}
      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-sm font-semibold">Filters</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <input
            placeholder="Action type"
            className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm"
            value={actionType}
            onChange={(e) => { setActionType(e.target.value); setPage(1); }}
          />
          <input
            placeholder="Admin user ID"
            className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm"
            value={adminUserId}
            onChange={(e) => { setAdminUserId(e.target.value); setPage(1); }}
          />
          <input
            type="date"
            className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm"
            value={startDate}
            onChange={(e) => { setStartDate(e.target.value); setPage(1); }}
          />
          <input
            type="date"
            className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm"
            value={endDate}
            onChange={(e) => { setEndDate(e.target.value); setPage(1); }}
          />
        </div>
        <div className="flex gap-2">
          <SoftButton variant="accent" onClick={() => { setPage(1); loadLogs(); }}>Apply</SoftButton>
          <SoftButton variant="ghost" onClick={() => { setActionType(""); setAdminUserId(""); setStartDate(""); setEndDate(""); setPage(1); }}>Reset</SoftButton>
          <SoftButton variant="neutral" onClick={exportCsv}>Export CSV</SoftButton>
        </div>
      </SoftCard>

      {/* Log entries */}
      <SoftCard as="section" className="space-y-3 p-5">
        {loading ? (
          <p className="text-sm text-zinc-500">Loading…</p>
        ) : logs.length === 0 ? (
          <p className="text-sm text-zinc-500">No admin actions match the current filters.</p>
        ) : (
          logs.map((entry) => (
            <SoftCard key={entry.id} as="article" className="border-border/70 p-3 text-sm">
              <p className="font-medium">{entry.action_type}</p>
              <p className="text-xs text-zinc-500">
                admin: {entry.admin_user_id} | target: {entry.target_user_id ?? "n/a"}
              </p>
              <p className="text-xs text-zinc-500">{new Date(entry.created_at).toLocaleString()}</p>
              <pre className="mt-2 overflow-x-auto rounded-2xl border border-border bg-surface-muted p-2 text-xs">
                {JSON.stringify(entry.metadata ?? {}, null, 2)}
              </pre>
            </SoftCard>
          ))
        )}
      </SoftCard>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          <SoftButton variant="neutral" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            ← Previous
          </SoftButton>
          <span className="text-sm text-zinc-600">
            Page {page} of {totalPages}
          </span>
          <SoftButton variant="neutral" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
            Next →
          </SoftButton>
        </div>
      )}
    </main>
  );
}
