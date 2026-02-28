"use client";

import { useEffect, useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { getActiveProfileIdFromBrowser } from "@/lib/profiles/active-profile";

type ModulePreferenceEntry = {
  id: string;
  title: string;
  subject: string;
  minAge?: number;
  maxAge?: number;
  topicId: string | null;
};

type ModulesPreferencesPanelProps = {
  modules: ModulePreferenceEntry[];
};

type LearnerProfileSnapshot = {
  id: string;
  display_name: string;
  grade_level: string | null;
  age_years: number | null;
  path_allowlist: string[] | null;
  featured_module_ids: string[] | null;
  module_assignment_mode: "guided" | "random";
  ai_skill_level_map: Record<string, unknown> | null;
};

function normalizeStringList(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const normalized = value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
  return normalized.length > 0 ? normalized : null;
}

function normalizeObject(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function isMissingProfileColumn(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const maybeCode = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const maybeMessage = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = maybeMessage.toLowerCase();
  return maybeCode === "42703"
    || lowered.includes("featured_module_ids")
    || lowered.includes("module_assignment_mode")
    || lowered.includes("path_allowlist");
}

function parseGradeValue(gradeLevel?: string | null) {
  if (!gradeLevel) return null;
  const normalized = gradeLevel.trim().toLowerCase();
  if (normalized === "k" || normalized === "kindergarten") return 0;
  const match = normalized.match(/\d{1,2}/);
  if (!match) return null;
  const grade = Number(match[0]);
  return Number.isFinite(grade) ? grade : null;
}

function isAgeAppropriate(moduleEntry: ModulePreferenceEntry, age: number | null, gradeLevel: string | null) {
  if (typeof age === "number") {
    if (typeof moduleEntry.minAge === "number" && age < moduleEntry.minAge) return false;
    if (typeof moduleEntry.maxAge === "number" && age > moduleEntry.maxAge) return false;
    return true;
  }

  const grade = parseGradeValue(gradeLevel);
  if (grade === null) return true;
  const inferredAge = grade === 0 ? 5 : grade + 5;
  if (typeof moduleEntry.minAge === "number" && inferredAge < moduleEntry.minAge) return false;
  if (typeof moduleEntry.maxAge === "number" && inferredAge > moduleEntry.maxAge) return false;
  return true;
}

export default function ModulesPreferencesPanel({ modules }: ModulesPreferencesPanelProps) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [profile, setProfile] = useState<LearnerProfileSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mode, setMode] = useState<"guided" | "random">("guided");
  const [selectedModuleIds, setSelectedModuleIds] = useState<Set<string>>(new Set());
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("");
  const [statusTone, setStatusTone] = useState<"success" | "error">("success");
  const [supportsModuleColumns, setSupportsModuleColumns] = useState(true);

  useEffect(() => {
    const load = async () => {
      const activeProfileId = getActiveProfileIdFromBrowser();
      if (!activeProfileId) {
        setLoading(false);
        return;
      }

      const primary = await supabase
        .from("student_profiles")
        .select("id, display_name, grade_level, age_years, path_allowlist, featured_module_ids, module_assignment_mode, ai_skill_level_map")
        .eq("id", activeProfileId)
        .maybeSingle();

      if (!primary.error && primary.data) {
        const nextProfile: LearnerProfileSnapshot = {
          id: primary.data.id,
          display_name: primary.data.display_name,
          grade_level: primary.data.grade_level,
          age_years: primary.data.age_years,
          path_allowlist: normalizeStringList(primary.data.path_allowlist),
          featured_module_ids: normalizeStringList(primary.data.featured_module_ids),
          module_assignment_mode: primary.data.module_assignment_mode === "random" ? "random" : "guided",
          ai_skill_level_map: normalizeObject(primary.data.ai_skill_level_map),
        };
        setProfile(nextProfile);
        setMode(nextProfile.module_assignment_mode);
        setSelectedModuleIds(new Set(nextProfile.featured_module_ids ?? []));
        setSupportsModuleColumns(true);
        setLoading(false);
        return;
      }

      if (!isMissingProfileColumn(primary.error)) {
        setStatusTone("error");
        setStatus(primary.error?.message ?? "Unable to load learner module settings.");
        setLoading(false);
        return;
      }

      const fallback = await supabase
        .from("student_profiles")
        .select("id, display_name, grade_level, age_years, path_allowlist, ai_skill_level_map")
        .eq("id", activeProfileId)
        .maybeSingle();

      if (fallback.error || !fallback.data) {
        setStatusTone("error");
        setStatus(fallback.error?.message ?? "Unable to load learner module settings.");
        setLoading(false);
        return;
      }

      setSupportsModuleColumns(false);
      setStatusTone("error");
      setStatus("Module pinning columns are not in DB yet. Run Supabase migration to fully enable this panel.");
      setProfile({
        id: fallback.data.id,
        display_name: fallback.data.display_name,
        grade_level: fallback.data.grade_level,
        age_years: fallback.data.age_years,
        path_allowlist: normalizeStringList(fallback.data.path_allowlist),
        featured_module_ids: null,
        module_assignment_mode: "guided",
        ai_skill_level_map: normalizeObject(fallback.data.ai_skill_level_map),
      });
      setMode("guided");
      setLoading(false);
    };

    void load();
  }, [supabase]);

  const visibleModules = useMemo(() => {
    if (!profile) return [];
    const normalizedSearch = searchValue.trim().toLowerCase();
    return modules
      .filter((moduleEntry) =>
        isAgeAppropriate(moduleEntry, profile.age_years, profile.grade_level),
      )
      .filter((moduleEntry) => {
        if (!normalizedSearch) return true;
        const text = `${moduleEntry.title} ${moduleEntry.subject}`.toLowerCase();
        return text.includes(normalizedSearch);
      });
  }, [modules, profile, searchValue]);

  const moduleTopicById = useMemo(
    () => new Map(modules.map((entry) => [entry.id, entry.topicId])),
    [modules],
  );

  const toggleModule = (moduleId: string) => {
    setSelectedModuleIds((current) => {
      const next = new Set(current);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  const savePreferences = async () => {
    if (!profile) return;

    setSaving(true);
    setStatus("");

    const selectedIds = [...selectedModuleIds];
    const selectedTopicIds = Array.from(
      new Set(
        selectedIds
          .map((moduleId) => moduleTopicById.get(moduleId))
          .filter((entry): entry is string => typeof entry === "string" && entry.length > 0),
      ),
    );

    const payload: Record<string, unknown> = {};

    if (supportsModuleColumns) {
      payload.featured_module_ids = selectedIds.length > 0 ? selectedIds : null;
      payload.module_assignment_mode = mode;
    }

    if (Array.isArray(profile.path_allowlist)) {
      const pathSet = new Set(profile.path_allowlist);
      for (const topicId of selectedTopicIds) pathSet.add(topicId);
      payload.path_allowlist = pathSet.size > 0 ? [...pathSet] : null;
    }

    const existingSkillMap = profile.ai_skill_level_map ?? {};
    const existingRecommended = normalizeStringList(existingSkillMap.recommended_path_ids) ?? [];
    payload.ai_skill_level_map = {
      ...existingSkillMap,
      recommendation_source: "module_preferences",
      recommended_path_ids: Array.from(new Set([...existingRecommended, ...selectedTopicIds])).slice(0, 8),
    };

    if (Object.keys(payload).length === 0) {
      setStatusTone("error");
      setStatus("Nothing to save for this learner yet.");
      setSaving(false);
      return;
    }

    const { error } = await supabase
      .from("student_profiles")
      .update(payload)
      .eq("id", profile.id);

    if (error) {
      setStatusTone("error");
      setStatus(error.message || "Failed to save module preferences.");
      setSaving(false);
      return;
    }

    setProfile((current) =>
      current
        ? {
            ...current,
            path_allowlist:
              "path_allowlist" in payload
                ? normalizeStringList(payload.path_allowlist)
                : current.path_allowlist,
            featured_module_ids:
              supportsModuleColumns
                ? normalizeStringList(payload.featured_module_ids)
                : current.featured_module_ids,
            module_assignment_mode:
              supportsModuleColumns
                ? (payload.module_assignment_mode as "guided" | "random")
                : current.module_assignment_mode,
            ai_skill_level_map: normalizeObject(payload.ai_skill_level_map),
          }
        : current,
    );
    setStatusTone("success");
    setStatus("Saved learner module preferences.");
    setSaving(false);
  };

  if (loading) {
    return (
      <section className="mt-5 rounded-2xl border border-zinc-200 bg-white/90 p-4">
        <p className="text-sm text-zinc-500">Loading learner module controls...</p>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-900">
          Select a learner first, then return to Modules to choose what appears on the learner dashboard.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-5 rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-zinc-900">Learner Module Controls</h2>
          <p className="text-sm text-zinc-600">
            Active learner: <strong>{profile.display_name}</strong>
            {profile.grade_level ? ` • Grade ${profile.grade_level}` : ""}
            {profile.age_years ? ` • Age ${profile.age_years}` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSelectedModuleIds(new Set())}
          className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50"
        >
          Clear Selection
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Assignment Mode</span>
        <button
          type="button"
          onClick={() => setMode("guided")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            mode === "guided"
              ? "bg-emerald-100 text-emerald-700"
              : "border border-zinc-200 bg-white text-zinc-600"
          }`}
        >
          Guided
        </button>
        <button
          type="button"
          onClick={() => setMode("random")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            mode === "random"
              ? "bg-violet-100 text-violet-700"
              : "border border-zinc-200 bg-white text-zinc-600"
          }`}
        >
          Random
        </button>
      </div>

      <div className="mt-4">
        <input
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search modules"
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="mt-4 max-h-72 space-y-2 overflow-y-auto pr-1">
        {visibleModules.map((moduleEntry) => {
          const checked = selectedModuleIds.has(moduleEntry.id);
          return (
            <label
              key={moduleEntry.id}
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs ${
                checked ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-zinc-200 bg-white text-zinc-700"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleModule(moduleEntry.id)}
                className="h-4 w-4 accent-emerald-600"
              />
              <span className="font-medium">{moduleEntry.title}</span>
              <span className="ml-auto rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                {moduleEntry.subject}
              </span>
            </label>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-zinc-500">
          Selected modules are pinned for this learner and influence the main dashboard path list.
        </p>
        <button
          type="button"
          onClick={() => void savePreferences()}
          disabled={saving}
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white disabled:opacity-70"
        >
          {saving ? "Saving..." : "Save Module Preferences"}
        </button>
      </div>

      {status ? (
        <p className={`mt-3 text-sm ${statusTone === "success" ? "text-emerald-700" : "text-red-700"}`}>
          {status}
        </p>
      ) : null}
    </section>
  );
}
