"use client";

import { useCallback, useEffect, useState } from "react";

/* ── Types ──────────────────────────────────────────────────────────────────── */

type Provision = {
  id: string;
  email: string;
  access_level: "read_only" | "full_access";
  provisioned_by: string | null;
  notes: string | null;
  claimed_at: string | null;
  claimed_by: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

type AccessLevel = "read_only" | "full_access";

const ACCESS_LABELS: Record<AccessLevel, string> = {
  read_only: "View Only",
  full_access: "Full Access",
};

const ACCESS_COLORS: Record<AccessLevel, string> = {
  read_only:
    "bg-amber-100 text-amber-800 border-amber-200",
  full_access:
    "bg-emerald-100 text-emerald-800 border-emerald-200",
};

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function formatDate(d: string | null): string {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ── Component ──────────────────────────────────────────────────────────────── */

export default function AdminProvisioningPage() {
  const [provisions, setProvisions] = useState<Provision[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [revoking, setRevoking] = useState<string | null>(null);
  const [toast, setToast] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "revoked" | "claimed">("all");

  // Form state
  const [email, setEmail] = useState("");
  const [accessLevel, setAccessLevel] = useState<AccessLevel>("read_only");
  const [notes, setNotes] = useState("");

  const flash = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 4000);
  }, []);

  /* ── Fetch ── */
  const loadProvisions = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/provisioning", { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as { provisions: Provision[] };
        setProvisions(data.provisions);
      } else {
        flash("Failed to load provisions");
      }
    } catch {
      flash("Error loading provisions");
    } finally {
      setLoading(false);
    }
  }, [flash]);

  useEffect(() => {
    void loadProvisions();
  }, [loadProvisions]);

  /* ── Create ── */
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/provisioning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          access_level: accessLevel,
          notes: notes.trim() || undefined,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (res.ok) {
        flash(`Provisioned ${email.trim()} as ${ACCESS_LABELS[accessLevel]}`);
        setEmail("");
        setNotes("");
        void loadProvisions();
      } else {
        flash(data.error ?? "Failed to provision");
      }
    } catch {
      flash("Network error");
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Revoke ── */
  const handleRevoke = async (id: string) => {
    if (!confirm("Revoke this admin provision? The user will lose admin access on next login."))
      return;

    setRevoking(id);
    try {
      const res = await fetch("/api/admin/provisioning", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        flash("Provision revoked");
        void loadProvisions();
      } else {
        flash("Revoke failed");
      }
    } catch {
      flash("Network error");
    } finally {
      setRevoking(null);
    }
  };

  /* ── Filter ── */
  const filteredProvisions = provisions.filter((p) => {
    if (filter === "active") return p.is_active && !p.claimed_at;
    if (filter === "revoked") return !p.is_active;
    if (filter === "claimed") return !!p.claimed_at;
    return true;
  });

  const counts = {
    all: provisions.length,
    active: provisions.filter((p) => p.is_active && !p.claimed_at).length,
    claimed: provisions.filter((p) => !!p.claimed_at).length,
    revoked: provisions.filter((p) => !p.is_active).length,
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
      {/* Toast */}
      {toast && (
        <div className="fixed right-6 top-6 z-50 rounded-2xl border border-blue-300 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-800 shadow-lg">
          {toast}
        </div>
      )}

      {/* ── Header ── */}
      <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          📧 Admin Provisioning
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
          Pre-provision email addresses with administrative access. When a user with a provisioned
          email signs up or already exists, they will automatically receive the specified
          access level. <strong>View Only</strong> users can browse all admin panels but
          cannot modify data. <strong>Full Access</strong> users have complete admin privileges.
        </p>
      </header>

      {/* ── Provision Form ── */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-slate-800">
          Add Provisioned Email
        </h2>
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Access Level */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Access Level
              </label>
              <select
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value as AccessLevel)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="read_only">🔍 View Only (Read-Only)</option>
                <option value="full_access">🔓 Full Access</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Notes
              </label>
              <input
                type="text"
                placeholder="Optional note"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                maxLength={500}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting || !email.trim()}
            className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-50"
          >
            {submitting ? "Provisioning…" : "Provision Email"}
          </button>
        </form>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="flex flex-wrap gap-2">
        {(["all", "active", "claimed", "revoked"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
              filter === f
                ? "border-indigo-300 bg-indigo-100 text-indigo-800"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {f === "all" ? "All" : f === "active" ? "Pending" : f === "claimed" ? "Claimed" : "Revoked"}
            <span className="ml-1.5 text-[10px] opacity-70">({counts[f]})</span>
          </button>
        ))}
      </div>

      {/* ── Provisions Table ── */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <p className="text-sm text-slate-500">Loading provisions…</p>
          </div>
        ) : filteredProvisions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-3xl">📭</p>
            <p className="mt-2 text-sm text-slate-500">
              {filter === "all"
                ? "No provisioned emails yet. Add one above."
                : `No ${filter} provisions.`}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="px-5 py-3 font-semibold text-slate-600">Email</th>
                  <th className="px-5 py-3 font-semibold text-slate-600">Access Level</th>
                  <th className="px-5 py-3 font-semibold text-slate-600">Status</th>
                  <th className="px-5 py-3 font-semibold text-slate-600">Notes</th>
                  <th className="px-5 py-3 font-semibold text-slate-600">Provisioned</th>
                  <th className="px-5 py-3 font-semibold text-slate-600">Claimed</th>
                  <th className="px-5 py-3 text-right font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProvisions.map((p) => (
                  <tr
                    key={p.id}
                    className={`transition hover:bg-slate-50 ${!p.is_active ? "opacity-50" : ""}`}
                  >
                    <td className="px-5 py-3 font-mono text-sm text-slate-800">
                      {p.email}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                          ACCESS_COLORS[p.access_level]
                        }`}
                      >
                        {p.access_level === "full_access" ? "🔓 " : "🔍 "}
                        {ACCESS_LABELS[p.access_level]}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      {!p.is_active ? (
                        <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                          Revoked
                        </span>
                      ) : p.claimed_at ? (
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                          ✓ Claimed
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="max-w-[200px] truncate px-5 py-3 text-xs text-slate-500">
                      {p.notes ?? "—"}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-xs text-slate-500">
                      {formatDate(p.created_at)}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-xs text-slate-500">
                      {formatDate(p.claimed_at)}
                    </td>
                    <td className="px-5 py-3 text-right">
                      {p.is_active && (
                        <button
                          type="button"
                          onClick={() => handleRevoke(p.id)}
                          disabled={revoking === p.id}
                          className="rounded-lg border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:opacity-50"
                        >
                          {revoking === p.id ? "Revoking…" : "Revoke"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ── Info Box ── */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5">
        <h3 className="mb-2 text-sm font-semibold text-blue-800">
          How Provisioning Works
        </h3>
        <ul className="space-y-1.5 text-xs leading-relaxed text-blue-700">
          <li>
            <strong>View Only (Read-Only):</strong> User can access all admin pages and view
            dashboards, reports, and configuration — but cannot modify, create, or delete anything.
          </li>
          <li>
            <strong>Full Access:</strong> User has complete administrative privileges — identical
            to the owner. Use sparingly.
          </li>
          <li>
            <strong>Auto-Claim:</strong> When a provisioned user signs up or already has an account,
            the system will detect the matching email and automatically apply their access level.
          </li>
          <li>
            <strong>Revoke:</strong> Revoking a provision marks it inactive. The user&apos;s existing
            admin access is removed on their next session refresh.
          </li>
        </ul>
      </section>
    </main>
  );
}
