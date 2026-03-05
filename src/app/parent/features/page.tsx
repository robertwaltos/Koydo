"use client";

import { useCallback, useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type ChildProfile = {
  id: string;
  display_name: string;
  age_years: number | null;
};

type Override = {
  feature_id: string;
  enabled: boolean;
  updated_at: string;
};

type OverridableFeature = {
  id: string;
  description: string;
  tier: string;
  category: string;
};

export default function ParentFeaturesPage() {
  const [children, setChildren] = useState<ChildProfile[]>([]);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [overrides, setOverrides] = useState<Override[]>([]);
  const [overridableFeatures, setOverridableFeatures] = useState<OverridableFeature[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const flash = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }, []);

  // Load children on mount
  useEffect(() => {
    async function loadChildren() {
      try {
        const res = await fetch("/api/profiles/list");
        if (!res.ok) return;
        const data = await res.json();
        const profiles = data.profiles ?? [];
        setChildren(profiles);
        if (profiles.length > 0 && !selectedChild) {
          setSelectedChild(profiles[0].id);
        }
      } catch {
        // Profiles API may not exist yet — silent fail
      }
    }
    void loadChildren();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Load overrides when child changes
  const loadOverrides = useCallback(async () => {
    if (!selectedChild) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/parent/features?childProfileId=${selectedChild}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setOverrides(data.overrides ?? []);
      setOverridableFeatures(data.overridableFeatures ?? []);
    } catch {
      flash("Error loading feature controls");
    } finally {
      setLoading(false);
    }
  }, [selectedChild, flash]);

  useEffect(() => { loadOverrides(); }, [loadOverrides]);

  const toggleFeature = async (featureId: string, enabled: boolean) => {
    if (!selectedChild) return;
    const res = await fetch("/api/parent/features", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ childProfileId: selectedChild, featureId, enabled }),
    });
    if (res.ok) {
      flash(`${featureId} ${enabled ? "enabled" : "disabled"}`);
      setOverrides((prev) => {
        const existing = prev.find((o) => o.feature_id === featureId);
        if (existing) {
          return prev.map((o) => o.feature_id === featureId ? { ...o, enabled } : o);
        }
        return [...prev, { feature_id: featureId, enabled, updated_at: new Date().toISOString() }];
      });
    } else {
      flash("Failed to update");
    }
  };

  const removeOverride = async (featureId: string) => {
    if (!selectedChild) return;
    const res = await fetch("/api/parent/features", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ childProfileId: selectedChild, featureId }),
    });
    if (res.ok) {
      flash(`Reset ${featureId} to default`);
      setOverrides((prev) => prev.filter((o) => o.feature_id !== featureId));
    } else {
      flash("Failed to reset");
    }
  };

  const getOverrideState = (featureId: string): boolean | null => {
    const o = overrides.find((o) => o.feature_id === featureId);
    return o ? o.enabled : null;
  };

  const selectedChildName = children.find((c) => c.id === selectedChild)?.display_name ?? "Learner";

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      {toast && (
        <div className="fixed right-6 top-6 z-50 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-accent shadow-lg">
          {toast}
        </div>
      )}

      <SoftCard as="header" className="p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Feature Controls</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Control which optional features are available for each child. Features marked &quot;Parent Opt-in&quot; are disabled by default and require your approval.
        </p>
      </SoftCard>

      {/* Child selector */}
      {children.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {children.map((child) => (
            <SoftButton
              key={child.id}
              variant={selectedChild === child.id ? "accent" : "neutral"}
              onClick={() => setSelectedChild(child.id)}
            >
              {child.display_name} {child.age_years ? `(${child.age_years})` : ""}
            </SoftButton>
          ))}
        </div>
      )}

      {loading ? (
        <p className="text-sm text-zinc-500">Loading…</p>
      ) : (
        <SoftCard as="section" className="p-5">
          <h2 className="mb-4 text-lg font-semibold">
            Features for {selectedChildName}
          </h2>

          {overridableFeatures.length === 0 ? (
            <p className="text-sm text-zinc-500">No controllable features available.</p>
          ) : (
            <div className="divide-y divide-border">
              {overridableFeatures.map((f) => {
                const state = getOverrideState(f.id);
                const isEnabled = state === true;
                const isOverridden = state !== null;

                return (
                  <div key={f.id} className="flex items-center gap-4 py-4">
                    {/* Toggle */}
                    <button
                      onClick={() => toggleFeature(f.id, !isEnabled)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
                        isEnabled ? "bg-emerald-500" : "bg-zinc-300"
                      }`}
                      aria-label={`Toggle ${f.id}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                          isEnabled ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </button>

                    {/* Info */}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{f.id.replace(/_/g, " ")}</p>
                      <p className="text-xs text-zinc-500">{f.description}</p>
                    </div>

                    {/* Tier badge */}
                    <span className="rounded-lg bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800">
                      {f.tier.replace(/_/g, " ")}
                    </span>

                    {/* Reset button */}
                    {isOverridden && (
                      <SoftButton variant="ghost" onClick={() => removeOverride(f.id)}>
                        Reset
                      </SoftButton>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </SoftCard>
      )}
    </main>
  );
}
