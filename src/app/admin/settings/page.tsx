"use client";

import { useCallback, useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";
import SoftTabBar from "@/app/components/ui/soft-tab-bar";

/* ---------- types ---------- */
type SettingEntry = { key: string; value: unknown; default: unknown; source: "db" | "default" };
type OverrideEntry = { setting_key: string; value: unknown; reason: string | null; set_by: string | null; updated_at: string };
type GrantEntry = {
  id: string;
  user_id: string;
  grant_type: string;
  is_active: boolean;
  granted_by: string | null;
  expires_at: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

type Tab = "settings" | "overrides" | "access";

const TABS: Array<{ id: Tab; label: string }> = [
  { id: "settings", label: "App Settings" },
  { id: "overrides", label: "User Overrides" },
  { id: "access", label: "Access Grants" },
];

const GRANT_TYPES = [
  "beta_tester",
  "teacher",
  "school",
  "influencer",
  "press",
  "investor",
  "employee",
] as const;

/* ================================================================== */
export default function AdminSettingsPage() {
  const [tab, setTab] = useState<Tab>("settings");
  const [settings, setSettings] = useState<SettingEntry[]>([]);
  const [editDrafts, setEditDrafts] = useState<Record<string, string>>({});
  const [overrideUserId, setOverrideUserId] = useState("");
  const [overrides, setOverrides] = useState<OverrideEntry[]>([]);
  const [newOverride, setNewOverride] = useState({ userId: "", key: "", value: "", reason: "" });
  const [grantType, setGrantType] = useState<string>("beta_tester");
  const [grants, setGrants] = useState<GrantEntry[]>([]);
  const [newGrant, setNewGrant] = useState({ userId: "", grantType: "beta_tester", reason: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const flash = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }, []);

  /* ---------- Settings ---------- */
  const loadSettings = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings");
      if (!res.ok) throw new Error("Failed to load settings");
      const data = await res.json();
      setSettings(data.settings ?? []);
    } catch {
      flash("Error loading settings");
    } finally {
      setLoading(false);
    }
  }, [flash]);

  const saveSettingValue = async (key: string) => {
    const raw = editDrafts[key];
    if (raw === undefined) return;
    let parsed: unknown;
    try { parsed = JSON.parse(raw); } catch { parsed = raw; }
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value: parsed }),
    });
    if (res.ok) {
      flash(`Saved ${key}`);
      setEditDrafts((prev) => { const next = { ...prev }; delete next[key]; return next; });
      loadSettings();
    } else {
      flash("Save failed");
    }
  };

  const flushCache = async () => {
    await fetch("/api/admin/settings", { method: "DELETE" });
    flash("Cache flushed");
  };

  /* ---------- Overrides ---------- */
  const loadOverrides = useCallback(async () => {
    if (!overrideUserId.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/settings/user-overrides?userId=${encodeURIComponent(overrideUserId)}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setOverrides(data.overrides ?? []);
    } catch {
      flash("Error loading overrides");
    } finally {
      setLoading(false);
    }
  }, [overrideUserId, flash]);

  const createOverride = async () => {
    let parsed: unknown;
    try { parsed = JSON.parse(newOverride.value); } catch { parsed = newOverride.value; }
    const res = await fetch("/api/admin/settings/user-overrides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: newOverride.userId, settingKey: newOverride.key, value: parsed, reason: newOverride.reason || undefined }),
    });
    if (res.ok) {
      flash("Override created");
      setNewOverride({ userId: "", key: "", value: "", reason: "" });
      if (newOverride.userId === overrideUserId) loadOverrides();
    } else {
      flash("Failed to create override");
    }
  };

  const deleteOverride = async (userId: string, key: string) => {
    const res = await fetch("/api/admin/settings/user-overrides", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, settingKey: key }),
    });
    if (res.ok) { flash("Deleted"); loadOverrides(); } else flash("Delete failed");
  };

  /* ---------- Access Grants ---------- */
  const loadGrants = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/access-grants?type=${encodeURIComponent(grantType)}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setGrants(data.grants ?? []);
    } catch {
      flash("Error loading grants");
    } finally {
      setLoading(false);
    }
  }, [grantType, flash]);

  const createGrant = async () => {
    const res = await fetch("/api/admin/access-grants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: newGrant.userId, grantType: newGrant.grantType, reason: newGrant.reason || undefined }),
    });
    if (res.ok) {
      flash("Grant created");
      setNewGrant((g) => ({ ...g, userId: "", reason: "" }));
      loadGrants();
    } else {
      const data = await res.json().catch(() => ({}));
      flash(data.error || "Failed to create grant");
    }
  };

  const revokeGrant = async (userId: string, gt: string) => {
    const res = await fetch("/api/admin/access-grants", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, grantType: gt }),
    });
    if (res.ok) { flash("Revoked"); loadGrants(); } else flash("Revoke failed");
  };

  /* ---------- Auto-load on tab change ---------- */
  useEffect(() => { if (tab === "settings") loadSettings(); }, [tab, loadSettings]);
  useEffect(() => { if (tab === "access") loadGrants(); }, [tab, grantType, loadGrants]);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      {/* Toast */}
      {toast && (
        <div className="fixed right-6 top-6 z-50 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-accent shadow-lg">
          {toast}
        </div>
      )}

      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Settings &amp; Access</h1>
        <p className="mt-2 text-sm text-zinc-700">Runtime application settings, per-user overrides, and access grants.</p>
      </SoftCard>

      <SoftTabBar value={tab} tabs={TABS} onChange={setTab} ariaLabel="Settings sections" />

      {/* ===== Settings Tab ===== */}
      {tab === "settings" && (
        <SoftCard as="section" className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Application Settings</h2>
            <SoftButton variant="ghost" onClick={flushCache}>Flush Cache</SoftButton>
          </div>
          {loading ? <p className="text-sm text-zinc-500">Loading…</p> : (
            <div className="divide-y divide-border">
              {settings.map((s) => (
                <div key={s.key} className="flex flex-wrap items-center gap-3 py-3">
                  <code className="min-w-[220px] text-sm font-medium">{s.key}</code>
                  <span className="text-xs text-zinc-500">(default: {JSON.stringify(s.default)})</span>
                  <input
                    className="flex-1 rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm"
                    value={editDrafts[s.key] ?? JSON.stringify(s.value)}
                    onChange={(e) => setEditDrafts((d) => ({ ...d, [s.key]: e.target.value }))}
                  />
                  {editDrafts[s.key] !== undefined && (
                    <SoftButton variant="accent" onClick={() => saveSettingValue(s.key)}>Save</SoftButton>
                  )}
                </div>
              ))}
            </div>
          )}
        </SoftCard>
      )}

      {/* ===== Overrides Tab ===== */}
      {tab === "overrides" && (
        <SoftCard as="section" className="space-y-4 p-5">
          <h2 className="text-lg font-semibold">Per-User Overrides</h2>

          <div className="flex gap-2">
            <input
              placeholder="User ID to look up"
              className="flex-1 rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm"
              value={overrideUserId}
              onChange={(e) => setOverrideUserId(e.target.value)}
            />
            <SoftButton variant="accent" onClick={loadOverrides}>Look up</SoftButton>
          </div>

          {overrides.length > 0 && (
            <div className="divide-y divide-border">
              {overrides.map((o) => (
                <div key={o.setting_key} className="flex flex-wrap items-center gap-3 py-2">
                  <code className="text-sm">{o.setting_key}</code>
                  <span className="text-sm text-zinc-700">{JSON.stringify(o.value)}</span>
                  {o.reason && <span className="text-xs text-zinc-500">({o.reason})</span>}
                  <SoftButton variant="ghost" onClick={() => deleteOverride(overrideUserId, o.setting_key)}>
                    Remove
                  </SoftButton>
                </div>
              ))}
            </div>
          )}

          <h3 className="pt-4 text-sm font-semibold">Create Override</h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <input placeholder="User ID" className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm" value={newOverride.userId} onChange={(e) => setNewOverride((n) => ({ ...n, userId: e.target.value }))} />
            <input placeholder="Setting key" className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm" value={newOverride.key} onChange={(e) => setNewOverride((n) => ({ ...n, key: e.target.value }))} />
            <input placeholder="Value (JSON)" className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm" value={newOverride.value} onChange={(e) => setNewOverride((n) => ({ ...n, value: e.target.value }))} />
            <input placeholder="Reason (optional)" className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm" value={newOverride.reason} onChange={(e) => setNewOverride((n) => ({ ...n, reason: e.target.value }))} />
          </div>
          <SoftButton variant="accent" onClick={createOverride}>Create Override</SoftButton>
        </SoftCard>
      )}

      {/* ===== Access Grants Tab ===== */}
      {tab === "access" && (
        <SoftCard as="section" className="space-y-4 p-5">
          <h2 className="text-lg font-semibold">Access Grants</h2>

          <div className="flex flex-wrap gap-2">
            {GRANT_TYPES.map((gt) => (
              <SoftButton key={gt} variant={grantType === gt ? "accent" : "neutral"} onClick={() => setGrantType(gt)}>
                {gt.replace(/_/g, " ")}
              </SoftButton>
            ))}
          </div>

          {loading ? <p className="text-sm text-zinc-500">Loading…</p> : (
            <div className="divide-y divide-border">
              {grants.map((g) => (
                <div key={g.id} className="flex flex-wrap items-center gap-3 py-2">
                  <code className="text-sm">{g.user_id}</code>
                  <span className={`text-xs font-medium ${g.is_active ? "text-emerald-600" : "text-rose-600"}`}>
                    {g.is_active ? "Active" : "Revoked"}
                  </span>
                  {g.expires_at && <span className="text-xs text-zinc-500">expires {new Date(g.expires_at).toLocaleDateString()}</span>}
                  {g.is_active && (
                    <SoftButton variant="ghost" onClick={() => revokeGrant(g.user_id, g.grant_type)}>
                      Revoke
                    </SoftButton>
                  )}
                </div>
              ))}
              {grants.length === 0 && <p className="py-3 text-sm text-zinc-500">No {grantType.replace(/_/g, " ")} grants found.</p>}
            </div>
          )}

          <h3 className="pt-4 text-sm font-semibold">Grant Access</h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <input placeholder="User ID" className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm" value={newGrant.userId} onChange={(e) => setNewGrant((n) => ({ ...n, userId: e.target.value }))} />
            <select className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm" value={newGrant.grantType} onChange={(e) => setNewGrant((n) => ({ ...n, grantType: e.target.value }))}>
              {GRANT_TYPES.map((gt) => <option key={gt} value={gt}>{gt.replace(/_/g, " ")}</option>)}
            </select>
            <input placeholder="Reason (optional)" className="rounded-xl border border-border bg-surface-muted px-3 py-1.5 text-sm" value={newGrant.reason} onChange={(e) => setNewGrant((n) => ({ ...n, reason: e.target.value }))} />
          </div>
          <SoftButton variant="accent" onClick={createGrant}>Grant Access</SoftButton>
        </SoftCard>
      )}
    </main>
  );
}
