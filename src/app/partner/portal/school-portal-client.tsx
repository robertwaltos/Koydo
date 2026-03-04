"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

type SchoolApiDataset =
  | "license_summary"
  | "classroom_policy"
  | "provisioning_summary"
  | "learner_aggregate"
  | "learner_roster_pii";

type SchoolPortalPayload = {
  partner: {
    id: string;
    displayName: string;
    legalName: string;
    partnerType: string;
    accountClass: "SCHOOL" | "TEACHER" | null;
    countryCode: string;
    onboardingStatus: string;
    complianceStatus: string;
    payoutStatus: string;
  };
  linkedOrganization: {
    id: string;
    name: string;
    organizationType: string;
    billingEmail: string | null;
  } | null;
  seatSummary: {
    purchasedSeats: number;
    assignedSeats: number;
    reservedSeats: number;
    availableSeats: number;
  } | null;
  eligibility: {
    eligible: boolean;
    reasons: string[];
    regulatoryMode: string;
    allowedDatasets: SchoolApiDataset[];
  };
  apiKeys: Array<{
    id: string;
    label: string;
    keyPrefix: string;
    keyPreview: string;
    scopes: SchoolApiDataset[];
    status: string;
    expiresAt: string | null;
    lastUsedAt: string | null;
    revokedAt: string | null;
    createdAt: string;
  }>;
  documentation: {
    endpoint: string;
    markdown: string;
  };
  usageSummary: {
    totalRequests30d: number;
    deniedRequests30d: number;
    dataRows30d: number;
    responseBytes30d: number;
  };
};

const DATASET_LABELS: Record<SchoolApiDataset, string> = {
  license_summary: "License Summary",
  classroom_policy: "Classroom Policy",
  provisioning_summary: "Provisioning Summary",
  learner_aggregate: "Learner Aggregate",
  learner_roster_pii: "Learner Roster (PII)",
};

function fmtDate(value: string | null) {
  if (!value) return "n/a";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString();
}

export default function SchoolPortalClient({ initialPartnerId }: { initialPartnerId: string | null }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState<SchoolPortalPayload | null>(null);
  const [keyLabel, setKeyLabel] = useState("Primary School API Key");
  const [keyExpiresAt, setKeyExpiresAt] = useState("");
  const [selectedScopes, setSelectedScopes] = useState<SchoolApiDataset[]>([]);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const query = useMemo(
    () => (initialPartnerId ? `?partnerId=${encodeURIComponent(initialPartnerId)}` : ""),
    [initialPartnerId],
  );

  const loadPortal = useCallback(async () => {
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch(`/api/partner/portal/school-api${query}`, { cache: "no-store" });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      if (!response.ok) {
        throw new Error(String(body.error ?? "Failed to load School Portal data."));
      }
      const nextPayload = body as unknown as SchoolPortalPayload;
      setPayload(nextPayload);
      setSelectedScopes(nextPayload.eligibility?.allowedDatasets ?? []);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to load School Portal data.");
      setPayload(null);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    void loadPortal();
  }, [loadPortal]);

  async function handleCreateKey(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    setGeneratedKey(null);
    try {
      const response = await fetch(`/api/partner/portal/school-api${query}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create_key",
          partnerId: initialPartnerId,
          label: keyLabel,
          expiresAt: keyExpiresAt ? new Date(keyExpiresAt).toISOString() : null,
          scopes: selectedScopes,
        }),
      });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      if (!response.ok) {
        throw new Error(String(body.error ?? "Failed to create School API key."));
      }
      const keyValue =
        body &&
        typeof body === "object" &&
        "key" in body &&
        body.key &&
        typeof body.key === "object" &&
        "value" in body.key
          ? String((body.key as { value?: unknown }).value ?? "")
          : "";
      if (!keyValue) {
        throw new Error("API key created but response did not include plaintext key.");
      }
      setGeneratedKey(keyValue);
      setStatus("School API key created. Copy the key now; it will not be shown again.");
      await loadPortal();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create School API key.");
    }
  }

  async function handleRevokeKey(keyId: string) {
    setStatus("");
    try {
      const response = await fetch(`/api/partner/portal/school-api${query}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "revoke_key",
          partnerId: initialPartnerId,
          keyId,
        }),
      });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      if (!response.ok) {
        throw new Error(String(body.error ?? "Failed to revoke School API key."));
      }
      setStatus("School API key revoked.");
      await loadPortal();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to revoke School API key.");
    }
  }

  function toggleScope(scope: SchoolApiDataset) {
    setSelectedScopes((previous) =>
      previous.includes(scope)
        ? previous.filter((entry) => entry !== scope)
        : [...previous, scope],
    );
  }

  const allowedDatasets = payload?.eligibility?.allowedDatasets ?? [];
  const canCreateKey = Boolean(payload?.eligibility?.eligible);

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 text-zinc-100">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">School Portal API Access</h1>
        <p className="text-sm text-zinc-400">
          Generate and manage School API keys, review jurisdiction export limits, and copy live API usage documentation.
        </p>
        {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
      </header>

      {loading ? (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm text-zinc-300">
          Loading school portal data...
        </section>
      ) : null}

      {!loading && payload ? (
        <>
          <section className="grid gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 md:grid-cols-2">
            <div className="space-y-1 text-sm">
              <p className="text-zinc-300">Partner: <span className="font-medium text-zinc-100">{payload.partner.legalName}</span></p>
              <p className="text-zinc-300">Type: {payload.partner.partnerType}{payload.partner.accountClass ? `/${payload.partner.accountClass}` : ""}</p>
              <p className="text-zinc-300">Country: {payload.partner.countryCode}</p>
              <p className="text-zinc-300">Regulatory mode: <span className="font-medium text-zinc-100">{payload.eligibility.regulatoryMode}</span></p>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-zinc-300">Linked organization: <span className="font-medium text-zinc-100">{payload.linkedOrganization?.name ?? "not linked"}</span></p>
              <p className="text-zinc-300">Purchased seats: {payload.seatSummary?.purchasedSeats ?? 0}</p>
              <p className="text-zinc-300">Available seats: {payload.seatSummary?.availableSeats ?? 0}</p>
              <p className="text-zinc-300">School API eligible: <span className="font-medium text-zinc-100">{payload.eligibility.eligible ? "yes" : "no"}</span></p>
            </div>
          </section>

          {!payload.eligibility.eligible ? (
            <section className="rounded-2xl border border-amber-700/50 bg-amber-950/40 p-4 text-sm text-amber-100">
              <p className="font-medium">School API access is currently blocked</p>
              <ul className="mt-2 list-disc pl-5">
                {payload.eligibility.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <h2 className="text-lg font-semibold">Create School API Key</h2>
            <form className="mt-3 space-y-3" onSubmit={handleCreateKey}>
              <input
                className="w-full rounded bg-zinc-800 p-2 text-sm"
                placeholder="Key label"
                value={keyLabel}
                onChange={(event) => setKeyLabel(event.target.value)}
                disabled={!canCreateKey}
              />
              <input
                className="w-full rounded bg-zinc-800 p-2 text-sm"
                type="datetime-local"
                value={keyExpiresAt}
                onChange={(event) => setKeyExpiresAt(event.target.value)}
                disabled={!canCreateKey}
              />
              <div className="grid gap-2 md:grid-cols-2">
                {allowedDatasets.map((scope) => (
                  <label key={scope} className="flex items-center gap-2 rounded border border-zinc-800 p-2 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      checked={selectedScopes.includes(scope)}
                      onChange={() => toggleScope(scope)}
                      disabled={!canCreateKey}
                    />
                    {DATASET_LABELS[scope]}
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="rounded bg-emerald-600 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!canCreateKey}
              >
                Generate API Key
              </button>
            </form>
            {generatedKey ? (
              <div className="mt-4 rounded border border-emerald-700/50 bg-emerald-950/40 p-3">
                <p className="text-xs text-emerald-200">Copy now (only shown once):</p>
                <code className="mt-1 block break-all text-sm text-emerald-100">{generatedKey}</code>
              </div>
            ) : null}
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <h2 className="text-lg font-semibold">Active and Historical Keys</h2>
            <div className="mt-3 grid gap-2">
              {payload.apiKeys.length === 0 ? (
                <p className="text-sm text-zinc-400">No School API keys yet.</p>
              ) : (
                payload.apiKeys.map((key) => (
                  <div key={key.id} className="rounded border border-zinc-800 p-3 text-sm">
                    <p className="font-medium text-zinc-100">{key.label}</p>
                    <p className="text-zinc-300">Prefix: {key.keyPrefix}</p>
                    <p className="text-zinc-300">Scopes: {key.scopes.map((scope) => DATASET_LABELS[scope]).join(", ") || "none"}</p>
                    <p className="text-zinc-300">Status: {key.status}</p>
                    <p className="text-zinc-300">Created: {fmtDate(key.createdAt)} | Last used: {fmtDate(key.lastUsedAt)}</p>
                    <p className="text-zinc-300">Expires: {fmtDate(key.expiresAt)}</p>
                    {key.status === "active" ? (
                      <button
                        type="button"
                        className="mt-2 rounded bg-red-600 px-3 py-1.5 text-xs font-medium text-white"
                        onClick={() => handleRevokeKey(key.id)}
                      >
                        Revoke Key
                      </button>
                    ) : null}
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <h2 className="text-lg font-semibold">Usage (Last 30 Days)</h2>
            <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
              <p className="text-zinc-300">Requests: <span className="font-medium text-zinc-100">{payload.usageSummary.totalRequests30d}</span></p>
              <p className="text-zinc-300">Denied: <span className="font-medium text-zinc-100">{payload.usageSummary.deniedRequests30d}</span></p>
              <p className="text-zinc-300">Rows exported: <span className="font-medium text-zinc-100">{payload.usageSummary.dataRows30d}</span></p>
              <p className="text-zinc-300">Bytes transferred: <span className="font-medium text-zinc-100">{payload.usageSummary.responseBytes30d}</span></p>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <h2 className="text-lg font-semibold">API Usage Document</h2>
            <p className="mt-1 text-sm text-zinc-400">Endpoint: {payload.documentation.endpoint}</p>
            <pre className="mt-3 max-h-[520px] overflow-auto rounded bg-zinc-950 p-3 text-xs leading-5 text-zinc-200">
              {payload.documentation.markdown}
            </pre>
          </section>
        </>
      ) : null}
    </main>
  );
}
