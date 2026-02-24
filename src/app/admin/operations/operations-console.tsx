"use client";

import { FormEvent, useMemo, useState } from "react";

type SupportTicket = {
  id: string;
  user_id: string;
  subject: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "normal" | "high" | "urgent";
  created_at: string;
};

type ExamMaintenanceAlert = {
  id: string;
  severity: "info" | "warning" | "critical";
  category: string;
  message: string;
  acknowledged: boolean;
  created_at: string;
  metadata: Record<string, unknown> | null;
};

type ExamMaintenanceRun = {
  id: string;
  admin_user_id: string;
  action_type: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

type ExamMaintenanceRunSummaryAlert = {
  id: string;
  severity: "info" | "warning" | "critical";
  category: string;
  message: string;
  acknowledged: boolean;
  created_at: string;
  metadata: Record<string, unknown> | null;
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ui-soft-card p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

async function postJson(url: string, payload: unknown) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) {
    throw new Error(typeof data.error === "string" ? data.error : "Request failed.");
  }
  return data;
}

type ParsedRunSummary = {
  dryRun?: boolean;
  totals: { eligible: number; updated: number; erroredUsers: number };
  runUrl: string | null;
  artifactName: string | null;
  artifactHint: string | null;
  workflow: {
    workflow: string | null;
    runId: string | null;
    runNumber: string | null;
    repository: string | null;
    actor: string | null;
    ref: string | null;
    sha: string | null;
  };
  diagnostics: {
    generatedAt: string | null;
    topEligibleUsers: Array<{ userId: string; eligibleCount: number }>;
    topUpdatedUsers: Array<{ userId: string; updatedCount: number }>;
    topErroredUsers: Array<{ userId: string; error: string }>;
  };
};

function toRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function toNumber(value: unknown, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

function toStringValue(value: unknown) {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function toUserCountList(
  value: unknown,
  countKey: "eligibleCount" | "updatedCount",
): Array<{ userId: string; eligibleCount?: number; updatedCount?: number }> {
  if (!Array.isArray(value)) return [];
  const rows: Array<{ userId: string; eligibleCount?: number; updatedCount?: number }> = [];
  for (const entry of value.slice(0, 5)) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const userId = toStringValue((entry as Record<string, unknown>).userId);
    if (!userId) continue;
    const rawCount = toNumber((entry as Record<string, unknown>)[countKey], 0);
    if (countKey === "eligibleCount") {
      rows.push({ userId, eligibleCount: rawCount });
    } else {
      rows.push({ userId, updatedCount: rawCount });
    }
  }
  return rows;
}

function toErroredUsers(value: unknown): Array<{ userId: string; error: string }> {
  if (!Array.isArray(value)) return [];
  const rows: Array<{ userId: string; error: string }> = [];
  for (const entry of value.slice(0, 5)) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const userId = toStringValue((entry as Record<string, unknown>).userId);
    const error = toStringValue((entry as Record<string, unknown>).error);
    if (!userId || !error) continue;
    rows.push({ userId, error });
  }
  return rows;
}

function formatUserId(userId: string) {
  if (userId.length <= 8) return userId;
  return `${userId.slice(0, 8)}...`;
}

function parseRunSummaryFromMetadata(metadata: Record<string, unknown> | null): ParsedRunSummary {
  const totalsRecord = toRecord(metadata?.totals);
  const workflowRecord = toRecord(metadata?.workflow);
  const artifactRecord = toRecord(metadata?.artifact);
  const diagnosticsRecord = toRecord(metadata?.diagnostics);

  return {
    dryRun: typeof metadata?.dryRun === "boolean" ? metadata.dryRun : undefined,
    totals: {
      eligible: toNumber(totalsRecord?.eligible),
      updated: toNumber(totalsRecord?.updated),
      erroredUsers: toNumber(totalsRecord?.erroredUsers),
    },
    runUrl:
      toStringValue(metadata?.runUrl) ??
      toStringValue(workflowRecord?.runUrl),
    artifactName: toStringValue(artifactRecord?.name),
    artifactHint: toStringValue(artifactRecord?.note),
    workflow: {
      workflow: toStringValue(workflowRecord?.workflow),
      runId: toStringValue(workflowRecord?.runId),
      runNumber: toStringValue(workflowRecord?.runNumber),
      repository: toStringValue(workflowRecord?.repository),
      actor: toStringValue(workflowRecord?.actor),
      ref: toStringValue(workflowRecord?.ref),
      sha: toStringValue(workflowRecord?.sha),
    },
    diagnostics: {
      generatedAt: toStringValue(diagnosticsRecord?.generatedAt),
      topEligibleUsers: toUserCountList(diagnosticsRecord?.topEligibleUsers, "eligibleCount").map((entry) => ({
        userId: entry.userId,
        eligibleCount: entry.eligibleCount ?? 0,
      })),
      topUpdatedUsers: toUserCountList(diagnosticsRecord?.topUpdatedUsers, "updatedCount").map((entry) => ({
        userId: entry.userId,
        updatedCount: entry.updatedCount ?? 0,
      })),
      topErroredUsers: toErroredUsers(diagnosticsRecord?.topErroredUsers),
    },
  };
}

export default function OperationsConsole({
  initialTickets,
  initialExamMaintenanceAlerts,
  initialExamMaintenanceRuns,
  initialExamMaintenanceRunSummaries,
}: {
  initialTickets: SupportTicket[];
  initialExamMaintenanceAlerts: ExamMaintenanceAlert[];
  initialExamMaintenanceRuns: ExamMaintenanceRun[];
  initialExamMaintenanceRunSummaries: ExamMaintenanceRunSummaryAlert[];
}) {
  const [status, setStatus] = useState("");
  const [tickets, setTickets] = useState(initialTickets);
  const [approvalStatus, setApprovalStatus] = useState("");
  const [examMaintenanceStatus, setExamMaintenanceStatus] = useState("");
  const [examMaintenanceBusy, setExamMaintenanceBusy] = useState(false);
  const [examMaintenanceRuns, setExamMaintenanceRuns] = useState(initialExamMaintenanceRuns);
  const [examMaintenanceAlerts, setExamMaintenanceAlerts] = useState(initialExamMaintenanceAlerts);
  const [examMaintenanceRunSummaries, setExamMaintenanceRunSummaries] = useState(
    initialExamMaintenanceRunSummaries,
  );

  const activeTicketCount = useMemo(
    () => tickets.filter((ticket) => ticket.status === "open" || ticket.status === "in_progress").length,
    [tickets]
  );
  const openExamMaintenanceAlerts = useMemo(
    () => examMaintenanceAlerts.filter((alert) => !alert.acknowledged).length,
    [examMaintenanceAlerts],
  );
  const unacknowledgedRunSummaries = useMemo(
    () => examMaintenanceRunSummaries.filter((alert) => !alert.acknowledged).length,
    [examMaintenanceRunSummaries],
  );

  const handleCreateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/users/create", {
        email: form.get("email"),
        password: form.get("password"),
        displayName: form.get("displayName") || undefined,
        isAdmin: form.get("isAdmin") === "on",
        isParent: form.get("isParent") === "on",
      });
      setStatus(`User created: ${String(result.userId)}`);
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create user.");
    }
  };

  const handleUpdateRoles = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "UPDATE_ROLES") {
      setStatus("Role update blocked. Type UPDATE_ROLES to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/update-roles", {
        userId: form.get("userId"),
        isAdmin: form.get("setIsAdmin") === "on",
        isParent: form.get("setIsParent") === "on",
        confirmText,
      });
      setStatus("User roles updated.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to update roles.");
    }
  };

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/users/reset-password", {
        email: form.get("email"),
      });
      setStatus(`Reset link generated: ${String(result.actionLink)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to generate reset link.");
    }
  };

  const handleDeleteUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "DELETE_USER") {
      setStatus("Deletion blocked. Type DELETE_USER to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/delete", {
        userId: form.get("userId"),
        hardDelete: form.get("hardDelete") === "on",
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus("User deletion request completed.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to delete user.");
    }
  };

  const handleResetProgress = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "RESET_PROGRESS") {
      setStatus("Reset blocked. Type RESET_PROGRESS to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/reset-progress", {
        userId: form.get("userId"),
        scope: form.get("scope"),
        confirmText,
      });
      setStatus("Learner progress reset completed.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to reset progress.");
    }
  };

  const handleRefund = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "PROCESS_REFUND") {
      setStatus("Refund blocked. Type PROCESS_REFUND to confirm.");
      return;
    }
    try {
      const amount = Number(form.get("amountCents"));
      const result = await postJson("/api/admin/billing/refund", {
        paymentIntentId: form.get("paymentIntentId"),
        amountCents: Number.isFinite(amount) && amount > 0 ? amount : undefined,
        reason: form.get("reason"),
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus(`Refund created: ${String(result.refundId)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create refund.");
    }
  };

  const handlePromoCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const percentOff = Number(form.get("percentOff"));
      const result = await postJson("/api/admin/billing/promo-code", {
        code: form.get("code"),
        percentOff: Number.isFinite(percentOff) && percentOff > 0 ? percentOff : undefined,
        duration: form.get("duration"),
      });
      setStatus(`Promo code created: ${String(result.code)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create promo code.");
    }
  };

  const handleSalesEvent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/billing/sales-event", {
        name: form.get("name"),
        code: form.get("code"),
        discountPercent: Number(form.get("discountPercent")),
        endsAtIso: form.get("endsAtIso"),
      });
      setStatus(`Sales event created with code: ${String(result.code)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create sales event.");
    }
  };

  const handleSetPrice = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "SET_PRICE") {
      setStatus("Price update blocked. Type SET_PRICE to confirm.");
      return;
    }
    try {
      const result = await postJson("/api/admin/billing/set-price", {
        productId: form.get("productId"),
        monthlyPriceUsd: Number(form.get("monthlyPriceUsd")),
        nickname: form.get("nickname") || undefined,
        makeDefault: form.get("makeDefault") === "on",
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus(`New Stripe price created: ${String(result.priceId)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create price.");
    }
  };

  const handleResolveTicket = async (ticketId: string, statusValue: "in_progress" | "resolved" | "closed") => {
    try {
      await postJson(`/api/admin/support/tickets/${ticketId}/resolve`, {
        status: statusValue,
      });
      setTickets((previous) =>
        previous.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, status: statusValue } : ticket
        )
      );
      setStatus(`Ticket ${ticketId} updated to ${statusValue}.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to update ticket.");
    }
  };

  const handleCreateApprovalRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/approvals", {
        actionType: form.get("actionType"),
        reason: form.get("reason"),
      });
      setApprovalStatus(`Approval created: ${String((result.approval as { id?: string })?.id ?? "unknown")}`);
      event.currentTarget.reset();
    } catch (error) {
      setApprovalStatus(error instanceof Error ? error.message : "Failed to create approval request.");
    }
  };

  const handleUpdateApprovalStatus = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const approvalId = String(form.get("approvalId") ?? "");
    try {
      await postJson(`/api/admin/approvals/${approvalId}`, {
        status: form.get("status"),
        note: form.get("note"),
      });
      setApprovalStatus(`Approval ${approvalId} updated.`);
      event.currentTarget.reset();
    } catch (error) {
      setApprovalStatus(error instanceof Error ? error.message : "Failed to update approval.");
    }
  };

  const runExamMaintenance = async (dryRun: boolean) => {
    setExamMaintenanceBusy(true);
    setExamMaintenanceStatus("");
    try {
      const result = await postJson("/api/admin/exam/error-log/auto-resolve", {
        dryRun,
        limitUsers: 150,
        limitItemsPerUser: 200,
      });
      const totals = (result.totals ?? {}) as { eligible?: number; updated?: number; erroredUsers?: number };
      setExamMaintenanceStatus(
        `${dryRun ? "Dry run" : "Apply run"} complete. Eligible: ${Number(totals.eligible ?? 0)}, updated: ${Number(
          totals.updated ?? 0,
        )}, errored users: ${Number(totals.erroredUsers ?? 0)}.`,
      );
      setExamMaintenanceRuns((previous) => [
        {
          id: `local-${Date.now()}`,
          admin_user_id: "current",
          action_type: "exam_error_auto_resolve_run",
          metadata: {
            dryRun,
            totals,
            userCount: result.userCount,
            diagnostics:
              result && typeof result === "object"
                ? (result as { diagnostics?: Record<string, unknown> }).diagnostics
                : undefined,
          },
          created_at: new Date().toISOString(),
        },
        ...previous,
      ]);
    } catch (error) {
      setExamMaintenanceStatus(error instanceof Error ? error.message : "Failed to run exam maintenance.");
    } finally {
      setExamMaintenanceBusy(false);
    }
  };

  const acknowledgeExamMaintenanceAlert = async (alertId: string) => {
    setExamMaintenanceStatus("");
    try {
      await postJson("/api/admin/alerts", { alertId });
      setExamMaintenanceAlerts((previous) =>
        previous.map((alert) =>
          alert.id === alertId
            ? { ...alert, acknowledged: true, created_at: alert.created_at }
            : alert,
        ),
      );
      setExamMaintenanceStatus(`Alert ${alertId} acknowledged.`);
    } catch (error) {
      setExamMaintenanceStatus(error instanceof Error ? error.message : "Failed to acknowledge alert.");
    }
  };

  const acknowledgeExamMaintenanceRunSummary = async (alertId: string) => {
    setExamMaintenanceStatus("");
    try {
      await postJson("/api/admin/alerts", { alertId });
      setExamMaintenanceRunSummaries((previous) =>
        previous.map((alert) =>
          alert.id === alertId
            ? { ...alert, acknowledged: true, created_at: alert.created_at }
            : alert,
        ),
      );
      setExamMaintenanceStatus(`Run summary ${alertId} acknowledged.`);
    } catch (error) {
      setExamMaintenanceStatus(error instanceof Error ? error.message : "Failed to acknowledge run summary.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="ui-soft-card rounded-2xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
        Active support tickets: {activeTicketCount}
      </div>
      {status ? (
        <div className="rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm">
          {status}
        </div>
      ) : null}

      <Section title="Create Account">
        <form onSubmit={handleCreateUser} className="grid gap-3 md:grid-cols-2">
          <input name="email" type="email" placeholder="email@example.com" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="password" type="password" placeholder="Temporary password" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="displayName" placeholder="Display name (optional)" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2" />
          <label className="flex items-center gap-2 text-sm">
            <input name="isAdmin" type="checkbox" />
            Grant admin access
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="isParent" type="checkbox" />
            Grant parent role
          </label>
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md bg-accent px-4 py-2 text-sm text-white">Create User</button>
        </form>
      </Section>

      <Section title="Approvals">
        {approvalStatus ? <p className="mb-3 text-sm text-zinc-600">{approvalStatus}</p> : null}
        <form onSubmit={handleCreateApprovalRequest} className="mb-4 grid gap-3 md:grid-cols-2">
          <select name="actionType" aria-label="Approval action type" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="user_delete">User delete</option>
            <option value="billing_refund">Billing refund</option>
            <option value="billing_set_price">Set billing price</option>
          </select>
          <input
            name="reason"
            placeholder="Why this action is needed"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring w-fit rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">
            Create Approval Request
          </button>
        </form>

        <form onSubmit={handleUpdateApprovalStatus} className="grid gap-3 md:grid-cols-3">
          <input name="approvalId" placeholder="Approval UUID" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <select name="status" aria-label="Approval status" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
          </select>
          <input name="note" placeholder="Optional note" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" />
          <button type="submit" className="ui-soft-button ui-focus-ring w-fit rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">
            Update Approval Status
          </button>
        </form>
      </Section>

      <Section title="Exam Maintenance">
        <div className="mb-3 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          Open exam-maintenance failure alerts: {openExamMaintenanceAlerts} | unacknowledged run summaries:{" "}
          {unacknowledgedRunSummaries}
        </div>
        {examMaintenanceStatus ? (
          <p className="mb-3 text-sm text-zinc-700">{examMaintenanceStatus}</p>
        ) : null}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void runExamMaintenance(true)}
            disabled={examMaintenanceBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm disabled:opacity-60"
          >
            {examMaintenanceBusy ? "Running..." : "Run Auto-Resolve (Dry Run)"}
          </button>
          <button
            type="button"
            onClick={() => void runExamMaintenance(false)}
            disabled={examMaintenanceBusy}
            className="ui-soft-button ui-focus-ring rounded-md bg-accent px-3 py-2 text-sm text-white disabled:opacity-60"
          >
            {examMaintenanceBusy ? "Running..." : "Run Auto-Resolve (Apply)"}
          </button>
        </div>

        <div className="space-y-2">
          {examMaintenanceAlerts.length === 0 ? (
            <p className="text-sm text-zinc-500">No recent exam-maintenance failure alerts.</p>
          ) : (
            examMaintenanceAlerts.slice(0, 5).map((alert) => (
              <div key={alert.id} className="rounded-2xl border border-border p-3 text-sm">
                <p className="font-medium">
                  [{alert.severity.toUpperCase()}] {alert.message}
                </p>
                <p className="text-xs text-zinc-500">
                  {new Date(alert.created_at).toLocaleString()} | acknowledged: {alert.acknowledged ? "yes" : "no"}
                </p>
                {!alert.acknowledged ? (
                  <button
                    type="button"
                    onClick={() => void acknowledgeExamMaintenanceAlert(alert.id)}
                    className="ui-soft-button ui-focus-ring mt-2 rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                  >
                    Acknowledge
                  </button>
                ) : null}
              </div>
            ))
          )}
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm font-semibold">Workflow Run Summaries</p>
          {examMaintenanceRunSummaries.length === 0 ? (
            <p className="text-sm text-zinc-500">No workflow run summaries yet.</p>
          ) : (
            examMaintenanceRunSummaries.slice(0, 8).map((summaryAlert) => {
              const parsed = parseRunSummaryFromMetadata(summaryAlert.metadata);
              return (
                <div key={summaryAlert.id} className="rounded-2xl border border-border p-3 text-xs">
                  <p className="font-semibold">
                    [{summaryAlert.severity.toUpperCase()}] {summaryAlert.message}
                  </p>
                  <p className="mt-1 text-zinc-500">
                    {new Date(summaryAlert.created_at).toLocaleString()} | acknowledged:{" "}
                    {summaryAlert.acknowledged ? "yes" : "no"}
                  </p>
                  <p className="mt-1 text-zinc-500">
                    Mode: {parsed.dryRun === undefined ? "n/a" : parsed.dryRun ? "dry-run" : "apply"} | eligible:{" "}
                    {parsed.totals.eligible} | updated: {parsed.totals.updated} | errored users:{" "}
                    {parsed.totals.erroredUsers}
                  </p>
                  {(parsed.workflow.workflow || parsed.workflow.runNumber || parsed.workflow.actor) ? (
                    <p className="mt-1 text-zinc-500">
                      Workflow: {parsed.workflow.workflow ?? "n/a"}
                      {parsed.workflow.runNumber ? ` #${parsed.workflow.runNumber}` : ""}
                      {parsed.workflow.actor ? ` | actor: ${parsed.workflow.actor}` : ""}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topEligibleUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top eligible users:{" "}
                      {parsed.diagnostics.topEligibleUsers
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.eligibleCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topUpdatedUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top updated users:{" "}
                      {parsed.diagnostics.topUpdatedUsers
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.updatedCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topErroredUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top errored users:{" "}
                      {parsed.diagnostics.topErroredUsers
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.error})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {parsed.runUrl ? (
                      <a
                        href={parsed.runUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Workflow Run
                      </a>
                    ) : null}
                    {parsed.runUrl && parsed.artifactName ? (
                      <a
                        href={`${parsed.runUrl}#artifacts`}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Artifacts
                      </a>
                    ) : null}
                    {!summaryAlert.acknowledged ? (
                      <button
                        type="button"
                        onClick={() => void acknowledgeExamMaintenanceRunSummary(summaryAlert.id)}
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Acknowledge
                      </button>
                    ) : null}
                  </div>
                  {parsed.artifactHint ? <p className="mt-1 text-zinc-500">{parsed.artifactHint}</p> : null}
                </div>
              );
            })
          )}
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm font-semibold">Recent Auto-Resolve Runs</p>
          {examMaintenanceRuns.length === 0 ? (
            <p className="text-sm text-zinc-500">No run history yet.</p>
          ) : (
            examMaintenanceRuns.slice(0, 6).map((run) => {
              const parsed = parseRunSummaryFromMetadata(run.metadata);
              return (
                <div key={run.id} className="rounded-2xl border border-border p-3 text-xs">
                  <p className="font-semibold">
                    {parsed.dryRun ? "Dry run" : "Apply run"} | eligible: {parsed.totals.eligible} | updated:{" "}
                    {parsed.totals.updated} | errored users: {parsed.totals.erroredUsers}
                  </p>
                  <p className="text-zinc-500">{new Date(run.created_at).toLocaleString()}</p>
                  {(parsed.workflow.workflow || parsed.workflow.runNumber || parsed.workflow.actor) ? (
                    <p className="mt-1 text-zinc-500">
                      Workflow: {parsed.workflow.workflow ?? "n/a"}
                      {parsed.workflow.runNumber ? ` #${parsed.workflow.runNumber}` : ""}
                      {parsed.workflow.actor ? ` | actor: ${parsed.workflow.actor}` : ""}
                    </p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {parsed.runUrl ? (
                      <a
                        href={parsed.runUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Workflow Run
                      </a>
                    ) : null}
                    {parsed.runUrl && parsed.artifactName ? (
                      <a
                        href={`${parsed.runUrl}#artifacts`}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Artifacts
                      </a>
                    ) : null}
                  </div>
                  {parsed.diagnostics.topEligibleUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top eligible users:{" "}
                      {parsed.diagnostics.topEligibleUsers
                        .slice(0, 2)
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.eligibleCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topUpdatedUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top updated users:{" "}
                      {parsed.diagnostics.topUpdatedUsers
                        .slice(0, 2)
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.updatedCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topErroredUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Sample user errors:{" "}
                      {parsed.diagnostics.topErroredUsers
                        .slice(0, 2)
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.error})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </Section>

      <Section title="Role Management">
        <form onSubmit={handleUpdateRoles} className="grid gap-3 md:grid-cols-2">
          <input name="userId" placeholder="User UUID" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2" required />
          <label className="flex items-center gap-2 text-sm">
            <input name="setIsAdmin" type="checkbox" />
            Set admin role
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="setIsParent" type="checkbox" />
            Set parent role
          </label>
          <input
            name="confirmText"
            placeholder="Type UPDATE_ROLES"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <button type="submit" className="ui-soft-button w-fit ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm">
            Apply Role Updates
          </button>
        </form>
      </Section>

      <Section title="Account Recovery">
        <form onSubmit={handleResetPassword} className="flex flex-wrap gap-3">
          <input name="email" type="email" placeholder="User email" className="min-w-80 ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Generate Password Reset Link</button>
        </form>
      </Section>

      <Section title="Account Reset / Deletion">
        <form onSubmit={handleResetProgress} className="mb-4 flex flex-wrap gap-3">
          <input name="userId" placeholder="User UUID" className="min-w-80 ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <select name="scope" aria-label="Reset scope" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="all">All learning data</option>
            <option value="progress">Only progress</option>
            <option value="mastery">Only mastery</option>
          </select>
          <input
            name="confirmText"
            placeholder="Type RESET_PROGRESS"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Reset Learning Data</button>
        </form>
        <form onSubmit={handleDeleteUser} className="flex flex-wrap gap-3">
          <input name="userId" placeholder="User UUID" className="min-w-80 ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <label className="flex items-center gap-2 text-sm">
            <input name="hardDelete" type="checkbox" />
            Hard delete
          </label>
          <input
            name="confirmText"
            placeholder="Type DELETE_USER"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md bg-red-600 px-4 py-2 text-sm text-white">Delete User</button>
        </form>
      </Section>

      <Section title="Refunds">
        <form onSubmit={handleRefund} className="grid gap-3 md:grid-cols-3">
          <input name="paymentIntentId" placeholder="pi_..." className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2" required />
          <input name="amountCents" type="number" min={0} placeholder="Amount cents (optional)" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" />
          <select name="reason" aria-label="Refund reason" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="requested_by_customer">Requested by customer</option>
            <option value="duplicate">Duplicate</option>
            <option value="fraudulent">Fraudulent</option>
          </select>
          <input
            name="confirmText"
            placeholder="Type PROCESS_REFUND"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Process Refund</button>
        </form>
      </Section>

      <Section title="Promotions and Sales">
        <form onSubmit={handlePromoCode} className="mb-4 grid gap-3 md:grid-cols-3">
          <input name="code" placeholder="PROMO2026" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="percentOff" type="number" min={1} max={100} placeholder="Percent off" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <select name="duration" aria-label="Promotion duration" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="once">Once</option>
            <option value="forever">Forever</option>
            <option value="repeating">Repeating</option>
          </select>
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm md:col-span-3">Create Promo Code</button>
        </form>

        <form onSubmit={handleSalesEvent} className="grid gap-3 md:grid-cols-4">
          <input name="name" placeholder="Back to School Sale" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="code" placeholder="SCHOOL2026" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="discountPercent" type="number" min={1} max={100} placeholder="Discount %" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="endsAtIso" aria-label="Sales event end date and time" type="datetime-local" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm md:col-span-4">Create Sales Event</button>
        </form>
      </Section>

      <Section title="Pricing">
        <form onSubmit={handleSetPrice} className="grid gap-3 md:grid-cols-3">
          <input name="productId" placeholder="prod_..." className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="monthlyPriceUsd" type="number" step="0.01" min={0.01} placeholder="Monthly USD" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="nickname" placeholder="Plan nickname (optional)" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" />
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input name="makeDefault" type="checkbox" defaultChecked />
            Make this the default checkout price
          </label>
          <input
            name="confirmText"
            placeholder="Type SET_PRICE"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Create Price</button>
        </form>
      </Section>

      <Section title="Support Queue">
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="rounded-2xl border border-border p-3">
              <p className="font-medium">{ticket.subject}</p>
              <p className="text-xs text-zinc-500">
                {ticket.id} | user: {ticket.user_id} | priority: {ticket.priority} | status: {ticket.status}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "in_progress")}
                  className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                >
                  Mark In Progress
                </button>
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "resolved")}
                  className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                >
                  Resolve
                </button>
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "closed")}
                  className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ))}
          {tickets.length === 0 ? <p className="text-sm text-zinc-500">No support tickets in queue.</p> : null}
        </div>
      </Section>
    </div>
  );
}


