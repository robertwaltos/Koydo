"use client";

import { useState } from "react";

type AlertRow = {
  id: string;
  severity: "info" | "warning" | "critical";
  category: string;
  message: string;
  metadata: Record<string, unknown>;
  acknowledged: boolean;
  acknowledged_at: string | null;
  created_at: string;
};

export default function AlertsClient({ initialAlerts }: { initialAlerts: AlertRow[] }) {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [status, setStatus] = useState("");

  const refreshAlerts = async () => {
    const response = await fetch("/api/admin/alerts");
    const data = (await response.json().catch(() => ({}))) as { alerts?: AlertRow[]; error?: string };
    if (!response.ok) {
      throw new Error(data.error ?? "Unable to refresh alerts.");
    }
    setAlerts(data.alerts ?? []);
  };

  const runChecks = async () => {
    setStatus("");
    try {
      const response = await fetch("/api/admin/alerts/run", { method: "POST" });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        triggeredCount?: number;
      };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to run alert checks.");
        return;
      }
      setStatus(`Alert checks completed. New alerts triggered: ${data.triggeredCount ?? 0}.`);
      await refreshAlerts();
    } catch {
      setStatus("Unable to run alert checks.");
    }
  };

  const acknowledgeAlert = async (alertId: string) => {
    setStatus("");
    try {
      const response = await fetch("/api/admin/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alertId }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to acknowledge alert.");
        return;
      }
      setAlerts((previous) =>
        previous.map((entry) =>
          entry.id === alertId
            ? { ...entry, acknowledged: true, acknowledged_at: new Date().toISOString() }
            : entry
        )
      );
      setStatus(`Alert ${alertId} acknowledged.`);
    } catch {
      setStatus("Unable to acknowledge alert.");
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => void runChecks()}
          className="rounded border border-black/15 px-2 py-1 text-xs"
        >
          Run Checks
        </button>
        <button
          type="button"
          onClick={() => void refreshAlerts()}
          className="rounded border border-black/15 px-2 py-1 text-xs"
        >
          Refresh
        </button>
      </div>
      {status ? <p className="text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}
      {alerts.map((entry) => (
        <article key={entry.id} className="rounded-md border border-black/10 p-3 dark:border-white/10">
          <p className="font-medium">
            [{entry.severity}] {entry.message}
          </p>
          <p className="text-xs text-zinc-500">
            category: {entry.category} | created: {new Date(entry.created_at).toLocaleString()}
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-zinc-100 p-2 text-xs dark:bg-zinc-800">
            {JSON.stringify(entry.metadata ?? {}, null, 2)}
          </pre>
          {entry.acknowledged ? (
            <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-300">
              Acknowledged {entry.acknowledged_at ? new Date(entry.acknowledged_at).toLocaleString() : ""}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => acknowledgeAlert(entry.id)}
              className="mt-2 rounded border border-black/15 px-2 py-1 text-xs"
            >
              Acknowledge
            </button>
          )}
        </article>
      ))}
      {alerts.length === 0 ? <p className="text-sm text-zinc-500">No alerts.</p> : null}
    </div>
  );
}
