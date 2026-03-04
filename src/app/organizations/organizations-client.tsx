"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type OrganizationRow = {
  id: string;
  name: string;
  slug: string;
  organizationType: string;
  role: string;
  seats: {
    purchasedSeats: number;
    assignedSeats: number;
    reservedSeats: number;
    availableSeats: number;
  };
};

type ClassroomPolicy = {
  enabled: boolean;
  accountClass: "SCHOOL" | "TEACHER";
  timeZone: string;
  startHourLocal: number;
  endHourLocal: number;
  requireCountryMatch: boolean;
  requireTimeZoneMatch: boolean;
  allowedCountryCodes: string[];
  allowedTimeZones: string[];
  note: string | null;
};

type ClassroomPolicyPayload = {
  organization: { id: string; name: string };
  policy: ClassroomPolicy;
  antiCheatModel: {
    serverUtcCorrelation: boolean;
    localTimeSource: string;
    localTimeHeaders: string[];
    geoCountryHeaders: string[];
  };
};

function canEditClassroomPolicy(role: string) {
  return role === "owner" || role === "admin" || role === "teacher" || role === "it_manager";
}

function toCsvList(value: string[]) {
  return value.join(", ");
}

function fromCsvList(value: string) {
  return Array.from(
    new Set(
      value
        .split(",")
        .map((entry) => entry.trim())
        .filter((entry) => entry.length > 0),
    ),
  );
}

export default function OrganizationsClient() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [organizations, setOrganizations] = useState<OrganizationRow[]>([]);
  const [selectedOrgId, setSelectedOrgId] = useState<string>("");
  const [policyPayload, setPolicyPayload] = useState<ClassroomPolicyPayload | null>(null);
  const [countryCodesInput, setCountryCodesInput] = useState("");
  const [timeZonesInput, setTimeZonesInput] = useState("");

  const selectedOrg = useMemo(
    () => organizations.find((org) => org.id === selectedOrgId) ?? null,
    [organizations, selectedOrgId],
  );

  async function loadOrganizations() {
    setLoading(true);
    try {
      const response = await fetch("/api/organizations", { cache: "no-store" });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      if (!response.ok) {
        throw new Error(String(body.error ?? "Failed to load organizations."));
      }
      const rows = ((body.organizations as OrganizationRow[] | undefined) ?? []).filter(Boolean);
      setOrganizations(rows);
      setSelectedOrgId((previous) => previous || rows[0]?.id || "");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to load organizations.");
    } finally {
      setLoading(false);
    }
  }

  async function loadClassroomPolicy(organizationId: string) {
    setStatus("");
    try {
      const response = await fetch(`/api/organizations/${organizationId}/classroom-access`, { cache: "no-store" });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      if (!response.ok) {
        throw new Error(String(body.error ?? "Failed to load classroom access policy."));
      }
      const payload = body as unknown as ClassroomPolicyPayload;
      setPolicyPayload(payload);
      setCountryCodesInput(toCsvList(payload.policy.allowedCountryCodes));
      setTimeZonesInput(toCsvList(payload.policy.allowedTimeZones));
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to load classroom policy.");
      setPolicyPayload(null);
    }
  }

  useEffect(() => {
    void loadOrganizations();
  }, []);

  useEffect(() => {
    if (!selectedOrgId) return;
    void loadClassroomPolicy(selectedOrgId);
  }, [selectedOrgId]);

  async function savePolicy(event: FormEvent) {
    event.preventDefault();
    if (!selectedOrgId || !policyPayload) return;

    setStatus("");
    try {
      const payload = {
        ...policyPayload.policy,
        allowedCountryCodes: fromCsvList(countryCodesInput).map((entry) => entry.toUpperCase()),
        allowedTimeZones: fromCsvList(timeZonesInput),
      };

      const response = await fetch(`/api/organizations/${selectedOrgId}/classroom-access`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
      if (!response.ok) {
        throw new Error(String(body.error ?? "Failed to save classroom policy."));
      }
      setStatus("Classroom access policy saved.");
      await loadClassroomPolicy(selectedOrgId);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to save classroom policy.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 text-zinc-100">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Organizations</h1>
        <p className="text-sm text-zinc-400">
          Configure classroom free-window policy (7AM-3PM local by default) with server UTC and geo-time correlation controls.
        </p>
        {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
      </header>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
        {loading ? (
          <p className="text-sm text-zinc-400">Loading organizations...</p>
        ) : organizations.length === 0 ? (
          <p className="text-sm text-zinc-400">No organizations found for this account.</p>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-sm text-zinc-300" htmlFor="organization-picker">Organization</label>
            <select
              id="organization-picker"
              className="rounded bg-zinc-800 p-2 text-sm"
              value={selectedOrgId}
              onChange={(event) => setSelectedOrgId(event.target.value)}
            >
              {organizations.map((organization) => (
                <option key={organization.id} value={organization.id}>
                  {organization.name} ({organization.role})
                </option>
              ))}
            </select>
          </div>
        )}
      </section>

      {selectedOrg ? (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm text-zinc-300">
          <p>Name: <span className="font-medium text-zinc-100">{selectedOrg.name}</span></p>
          <p>Type: {selectedOrg.organizationType}</p>
          <p>Role: {selectedOrg.role}</p>
          <p>Purchased seats: {selectedOrg.seats.purchasedSeats} | Assigned: {selectedOrg.seats.assignedSeats} | Available: {selectedOrg.seats.availableSeats}</p>
        </section>
      ) : null}

      {policyPayload && selectedOrg ? (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
          <h2 className="text-lg font-semibold">Classroom Access Policy</h2>
          <form className="mt-4 space-y-3" onSubmit={savePolicy}>
            <div className="grid gap-2 md:grid-cols-2">
              <label className="flex items-center gap-2 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  checked={policyPayload.policy.enabled}
                  disabled={!canEditClassroomPolicy(selectedOrg.role)}
                  onChange={(event) => setPolicyPayload((previous) => previous ? ({
                    ...previous,
                    policy: {
                      ...previous.policy,
                      enabled: event.target.checked,
                    },
                  }) : previous)}
                />
                Enable classroom free window
              </label>
              <select
                className="rounded bg-zinc-800 p-2 text-sm"
                value={policyPayload.policy.accountClass}
                disabled={!canEditClassroomPolicy(selectedOrg.role)}
                onChange={(event) => setPolicyPayload((previous) => previous ? ({
                  ...previous,
                  policy: {
                    ...previous.policy,
                    accountClass: event.target.value as "SCHOOL" | "TEACHER",
                  },
                }) : previous)}
              >
                <option value="SCHOOL">SCHOOL</option>
                <option value="TEACHER">TEACHER</option>
              </select>
            </div>

            <input
              className="w-full rounded bg-zinc-800 p-2 text-sm"
              placeholder="IANA time zone (e.g., America/Chicago)"
              value={policyPayload.policy.timeZone}
              disabled={!canEditClassroomPolicy(selectedOrg.role)}
              onChange={(event) => setPolicyPayload((previous) => previous ? ({
                ...previous,
                policy: {
                  ...previous.policy,
                  timeZone: event.target.value,
                },
              }) : previous)}
            />

            <div className="grid gap-2 md:grid-cols-2">
              <input
                className="rounded bg-zinc-800 p-2 text-sm"
                type="number"
                min={0}
                max={23}
                value={policyPayload.policy.startHourLocal}
                disabled={!canEditClassroomPolicy(selectedOrg.role)}
                onChange={(event) => setPolicyPayload((previous) => previous ? ({
                  ...previous,
                  policy: {
                    ...previous.policy,
                    startHourLocal: Number(event.target.value),
                  },
                }) : previous)}
              />
              <input
                className="rounded bg-zinc-800 p-2 text-sm"
                type="number"
                min={1}
                max={24}
                value={policyPayload.policy.endHourLocal}
                disabled={!canEditClassroomPolicy(selectedOrg.role)}
                onChange={(event) => setPolicyPayload((previous) => previous ? ({
                  ...previous,
                  policy: {
                    ...previous.policy,
                    endHourLocal: Number(event.target.value),
                  },
                }) : previous)}
              />
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <label className="flex items-center gap-2 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  checked={policyPayload.policy.requireCountryMatch}
                  disabled={!canEditClassroomPolicy(selectedOrg.role)}
                  onChange={(event) => setPolicyPayload((previous) => previous ? ({
                    ...previous,
                    policy: {
                      ...previous.policy,
                      requireCountryMatch: event.target.checked,
                    },
                  }) : previous)}
                />
                Require country match
              </label>
              <label className="flex items-center gap-2 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  checked={policyPayload.policy.requireTimeZoneMatch}
                  disabled={!canEditClassroomPolicy(selectedOrg.role)}
                  onChange={(event) => setPolicyPayload((previous) => previous ? ({
                    ...previous,
                    policy: {
                      ...previous.policy,
                      requireTimeZoneMatch: event.target.checked,
                    },
                  }) : previous)}
                />
                Require timezone match
              </label>
            </div>

            <input
              className="w-full rounded bg-zinc-800 p-2 text-sm"
              placeholder="Allowed country codes (comma separated, e.g. US,CA)"
              value={countryCodesInput}
              disabled={!canEditClassroomPolicy(selectedOrg.role)}
              onChange={(event) => setCountryCodesInput(event.target.value.toUpperCase())}
            />

            <input
              className="w-full rounded bg-zinc-800 p-2 text-sm"
              placeholder="Allowed time zones (comma separated, e.g. America/Chicago)"
              value={timeZonesInput}
              disabled={!canEditClassroomPolicy(selectedOrg.role)}
              onChange={(event) => setTimeZonesInput(event.target.value)}
            />

            <textarea
              className="w-full rounded bg-zinc-800 p-2 text-sm"
              placeholder="Policy notes (optional)"
              value={policyPayload.policy.note ?? ""}
              disabled={!canEditClassroomPolicy(selectedOrg.role)}
              onChange={(event) => setPolicyPayload((previous) => previous ? ({
                ...previous,
                policy: {
                  ...previous.policy,
                  note: event.target.value || null,
                },
              }) : previous)}
            />

            <button
              type="submit"
              className="rounded bg-emerald-600 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
              disabled={!canEditClassroomPolicy(selectedOrg.role)}
            >
              Save Classroom Policy
            </button>
          </form>

          <div className="mt-6 rounded border border-zinc-800 p-3 text-xs text-zinc-400">
            <p className="font-medium text-zinc-200">Anti-cheat model</p>
            <p>UTC correlation: {policyPayload.antiCheatModel.serverUtcCorrelation ? "enabled" : "disabled"}</p>
            <p>Local time source: {policyPayload.antiCheatModel.localTimeSource}</p>
            <p>Timezone headers: {policyPayload.antiCheatModel.localTimeHeaders.join(", ")}</p>
            <p>Country headers: {policyPayload.antiCheatModel.geoCountryHeaders.join(", ")}</p>
          </div>
        </section>
      ) : null}
    </main>
  );
}
