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
type FeatureEntry = {
  id: string;
  description: string;
  enabled: boolean;
  tier: string;
  min_age_tier: string;
  max_age_tier: string;
  app_variants: string[];
  category: string;
  source: "db" | "default";
  updated_by: string | null;
  updated_at: string | null;
};

type Tab = "settings" | "overrides" | "access" | "features";

const TABS: Array<{ id: Tab; label: string }> = [
  { id: "settings", label: "App Settings" },
  { id: "overrides", label: "User Overrides" },
  { id: "access", label: "Access Grants" },
  { id: "features", label: "Feature Manager" },
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

const CATEGORY_LABELS: Record<string, string> = {
  classroom: "Classroom",
  integration: "Integrations",
  content: "Content",
  learning: "Learning",
  social: "Social & Multiplayer",
  gamification: "Gamification & Rewards",
  advanced: "Advanced Learning",
  operational: "Operational",
};

const TIER_COLORS: Record<string, string> = {
  free: "bg-emerald-100 text-emerald-800",
  premium: "bg-amber-100 text-amber-800",
  parent_opt_in: "bg-violet-100 text-violet-800",
};

const CATEGORY_ORDER = ["classroom", "integration", "content", "learning", "social", "gamification", "advanced", "operational"];

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
  const [features, setFeatures] = useState<FeatureEntry[]>([]);
  const [featureFilter, setFeatureFilter] = useState<string>("all");
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

  /* ---------- Features ---------- */
  const loadFeatures = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/features");
      if (!res.ok) throw new Error("Failed to load features");
      const data = await res.json();
      setFeatures(data.features ?? []);
    } catch {
      flash("Error loading features");
    } finally {
      setLoading(false);
    }
  }, [flash]);

  const toggleFeature = async (id: string, enabled: boolean) => {
    const res = await fetch("/api/admin/features", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, enabled }),
    });
    if (res.ok) {
      flash(`${id} ${enabled ? "enabled" : "disabled"}`);
      setFeatures((prev) => prev.map((f) => f.id === id ? { ...f, enabled, source: "db" } : f));
    } else {
      flash("Toggle failed");
    }
  };

  const updateFeatureTier = async (id: string, tier: string) => {
    const res = await fetch("/api/admin/features", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, tier }),
    });
    if (res.ok) {
      flash(`${id} tier → ${tier}`);
      setFeatures((prev) => prev.map((f) => f.id === id ? { ...f, tier, source: "db" } : f));
    } else {
      flash("Update failed");
    }
  };

  const flushFeatureCache = async () => {
    await fetch("/api/admin/features", { method: "DELETE" });
    flash("Feature cache flushed");
  };

  /* ---------- Auto-load on tab change ---------- */
  useEffect(() => { if (tab === "settings") loadSettings(); }, [tab, loadSettings]);
  useEffect(() => { if (tab === "access") loadGrants(); }, [tab, grantType, loadGrants]);
  useEffect(() => { if (tab === "features") loadFeatures(); }, [tab, loadFeatures]);

  const filteredFeatures = featureFilter === "all"
    ? features
    : features.filter((f) => f.category === featureFilter);

  const groupedFeatures = CATEGORY_ORDER.reduce<Record<string, FeatureEntry[]>>((acc, cat) => {
    const items = filteredFeatures.filter((f) => f.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

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
        <p className="mt-2 text-sm text-zinc-700">Runtime application settings, per-user overrides, access grants, and feature management.</p>
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

      {/* ===== Feature Manager Tab ===== */}
      {tab === "features" && (
        <SoftCard as="section" className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Feature Manager</h2>
            <SoftButton variant="ghost" onClick={flushFeatureCache}>Flush Cache</SoftButton>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <SoftButton variant={featureFilter === "all" ? "accent" : "neutral"} onClick={() => setFeatureFilter("all")}>
              All ({features.length})
            </SoftButton>
            {CATEGORY_ORDER.map((cat) => {
              const count = features.filter((f) => f.category === cat).length;
              if (count === 0) return null;
              return (
                <SoftButton key={cat} variant={featureFilter === cat ? "accent" : "neutral"} onClick={() => setFeatureFilter(cat)}>
                  {CATEGORY_LABELS[cat]} ({count})
                </SoftButton>
              );
            })}
          </div>

          {loading ? <p className="text-sm text-zinc-500">Loading…</p> : (
            <div className="space-y-6">
              {Object.entries(groupedFeatures).map(([category, items]) => (
                <div key={category}>
                  <h3 className="mb-3 text-sm font-semibold text-zinc-600 uppercase tracking-wider">
                    {CATEGORY_LABELS[category] ?? category}
                  </h3>
                  <div className="divide-y divide-border rounded-xl border border-border">
                    {items.map((f) => (
                      <div key={f.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                        {/* Toggle */}
                        <button
                          onClick={() => toggleFeature(f.id, !f.enabled)}
                          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
                            f.enabled ? "bg-emerald-500" : "bg-zinc-300"
                          }`}
                          aria-label={`Toggle ${f.id}`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                              f.enabled ? "translate-x-5" : "translate-x-0.5"
                            } mt-0.5`}
                          />
                        </button>

                        {/* ID + description */}
                        <div className="min-w-[200px] flex-1">
                          <code className="text-sm font-medium">{f.id}</code>
                          <p className="text-xs text-zinc-500">{f.description}</p>
                        </div>

                        {/* Tier badge */}
                        <select
                          value={f.tier}
                          onChange={(e) => updateFeatureTier(f.id, e.target.value)}
                          className={`rounded-lg px-2 py-1 text-xs font-medium ${TIER_COLORS[f.tier] ?? "bg-zinc-100"}`}
                        >
                          <option value="free">Free</option>
                          <option value="premium">Premium</option>
                          <option value="parent_opt_in">Parent Opt-in</option>
                        </select>

                        {/* Age range */}
                        <span className="text-xs text-zinc-500">
                          {f.min_age_tier}–{f.max_age_tier}
                        </span>

                        {/* Variant pills */}
                        <div className="flex gap-1">
                          {f.app_variants.slice(0, 3).map((v) => (
                            <span key={v} className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600">
                              {v}
                            </span>
                          ))}
                          {f.app_variants.length > 3 && (
                            <span className="text-[10px] text-zinc-400">+{f.app_variants.length - 3}</span>
                          )}
                        </div>

                        {/* Source indicator */}
                        {f.source === "db" && (
                          <span className="text-[10px] text-blue-500 font-medium">DB</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {filteredFeatures.length === 0 && (
                <p className="py-4 text-center text-sm text-zinc-500">No features found.</p>
              )}
            </div>
          )}
        </SoftCard>
      )}
    </main>
  );
}
