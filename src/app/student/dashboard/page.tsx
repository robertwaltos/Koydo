"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { getActiveProfileIdFromBrowser } from "@/lib/profiles/active-profile";
import { getLearningPathsForLearner, inferEducationStageId } from "@/lib/explorer/learning-paths";
import { getEducationStage } from "@/lib/explorer/scenes";
import { getAllLearningModules } from "@/lib/modules";

import { type StudentProfile } from "@/lib/profiles/types";
import { generateCurriculumModules } from "@/app/actions/student-curriculum";
import { WorldSelector } from "@/components/explorer/WorldSelector";
import SoftCard from "@/app/components/ui/soft-card";
import { useRevealOnScroll } from "@/lib/hooks/use-reveal-on-scroll";

function normalizePathAllowlist(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const normalized = value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
  return normalized.length > 0 ? normalized : null;
}

function normalizeObject(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function extractInterestPathIds(skillMap: Record<string, unknown> | null): string[] {
  if (!skillMap) return [];
  const candidate = skillMap.recommended_path_ids ?? skillMap.interest_path_ids ?? skillMap.top_interest_path_ids;
  if (!Array.isArray(candidate)) return [];
  const normalized = candidate.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
  return normalized.slice(0, 3);
}

function isMissingProfileColumn(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const maybeCode = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const maybeMessage = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = maybeMessage.toLowerCase();
  return maybeCode === "42703"
    || lowered.includes("path_allowlist")
    || lowered.includes("featured_module_ids")
    || lowered.includes("module_assignment_mode")
    || lowered.includes("ai_skill_level_map");
}

/* ── Stat-card accent colours (token-aware) ── */
const STAT_ACCENTS = [
  { text: "text-accent" },
  { text: "text-success" },
  { text: "text-warn" },
  { text: "text-foreground/70" },
] as const;

export default function StudentDashboardPage() {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const synthesizingRef = useRef(false);

  const [selectedWorldId, setSelectedWorldId] = useState<string | null>(null);
  const [selectedWorldLabel, setSelectedWorldLabel] = useState<string | null>(null);
  const [progress, setProgress] = useState<{
    completedLessons: number;
    totalLessons: number;
    completedModules: number;
    totalModules: number;
  } | null>(null);

  const revealRef = useRevealOnScroll<HTMLDivElement>();

  const interestPathIds = useMemo(
    () => extractInterestPathIds(profile?.ai_skill_level_map ?? null),
    [profile?.ai_skill_level_map],
  );
  const recommendedStageId = useMemo(
    () => (profile ? inferEducationStageId(profile) : null),
    [profile]
  );
  const recommendedStage = useMemo(
      () => (recommendedStageId ? getEducationStage(recommendedStageId) : null),
      [recommendedStageId]
  );

  useEffect(() => {
    const profileId = getActiveProfileIdFromBrowser();

    if (!profileId) {
      router.push("/who-is-learning");
      return;
    }

    const loadProfile = async () => {
      const normalizeProfile = (row: {
        id: string;
        display_name: string;
        grade_level: string | null;
        // age_years is optional — the column may not exist in older DB schemas.
        // All fallback queries omit it so they never error on a missing column.
        age_years?: number | null;
        avatar_url?: string;
        path_allowlist?: unknown;
        featured_module_ids?: unknown;
        module_assignment_mode?: unknown;
        ai_skill_level_map?: unknown;
      }): StudentProfile => ({
        id: row.id,
        display_name: row.display_name,
        grade_level: row.grade_level,
        age_years: row.age_years ?? null,
        avatar_url: row.avatar_url,
        path_allowlist: normalizePathAllowlist(row.path_allowlist),
        featured_module_ids: normalizePathAllowlist(row.featured_module_ids),
        module_assignment_mode: row.module_assignment_mode === "random" ? "random" : "guided",
        ai_skill_level_map: normalizeObject(row.ai_skill_level_map),
      });

      const primaryQuery = await supabase
        .from("student_profiles")
        .select("id, display_name, grade_level, age_years, avatar_url, path_allowlist, featured_module_ids, module_assignment_mode, ai_skill_level_map")
        .eq("id", profileId)
        .single();

      if (!primaryQuery.error && primaryQuery.data) {
        setProfile(normalizeProfile(primaryQuery.data));
        setLoading(false);
      } else if (isMissingProfileColumn(primaryQuery.error)) {
        // Secondary: drop newer optional columns but keep the safe core set.
        // age_years is intentionally OMITTED here so this query succeeds even
        // if that column hasn't been migrated yet in the user's DB.
        const secondaryQuery = await supabase
          .from("student_profiles")
          .select("id, display_name, grade_level, avatar_url, path_allowlist, ai_skill_level_map")
          .eq("id", profileId)
          .single();

        if (!secondaryQuery.error && secondaryQuery.data) {
          setProfile(normalizeProfile(secondaryQuery.data));
          setLoading(false);
        } else {
            // Absolute minimum — guaranteed stable columns only.
            // Do NOT include age_years to avoid 42703 loop on older schemas.
            const fallbackQuery = await supabase
            .from("student_profiles")
            .select("id, display_name, grade_level, avatar_url")
            .eq("id", profileId)
            .single();

            if (!fallbackQuery.error && fallbackQuery.data) {
                setProfile(normalizeProfile(fallbackQuery.data));
            } else {
                console.error(fallbackQuery.error ?? secondaryQuery.error ?? primaryQuery.error);
                router.push("/who-is-learning");
            }
            setLoading(false);
        }
      } else {
        console.error(primaryQuery.error);
        router.push("/who-is-learning");
        setLoading(false);
      }
    };

    loadProfile();
  }, [router, supabase]);

  useEffect(() => {
    if (!profile) return;

    const fetchProgress = async () => {
      const allModules = getAllLearningModules();
      const allLessonIds = allModules.flatMap((m) => m.lessons.map((l) => l.id));
      
      const { data: progressData, error } = await supabase
        .from("user_learning_progress")
        .select("lesson_id")
        .eq("user_id", profile.id)
        .in("lesson_id", allLessonIds);

      if (error) {
        console.error("Error fetching progress:", error);
        return;
      }

      const completedLessonIds = new Set(progressData.map((p) => p.lesson_id));
      const completedLessons = completedLessonIds.size;
      const totalLessons = allLessonIds.length;

      const completedModules = allModules.filter((m) =>
        m.lessons.every((l) => completedLessonIds.has(l.id))
      ).length;
      const totalModules = allModules.length;

      setProgress({
        completedLessons,
        totalLessons,
        completedModules,
        totalModules,
      });
    };

    fetchProgress();
  }, [profile, supabase]);


  useEffect(() => {
    if (!selectedWorldId || !profile?.path_allowlist || profile.path_allowlist.length === 0) return;
    if (profile.path_allowlist.includes(selectedWorldId)) return;
    setSelectedWorldId(null);
    setSelectedWorldLabel(null);
  }, [profile?.path_allowlist, selectedWorldId]);

  useEffect(() => {
    if (!profile || profile.module_assignment_mode !== "random" || selectedWorldId) return;

    const { paths } = getLearningPathsForLearner({
      age_years: profile.age_years,
      gradeLevel: profile.grade_level,
      interestPathIds,
    });
    const allowedSet =
      Array.isArray(profile.path_allowlist) && profile.path_allowlist.length > 0
        ? new Set(profile.path_allowlist)
        : null;
    const candidatePaths = allowedSet
      ? paths.filter((entry) => allowedSet.has(entry.id))
      : paths;

    if (candidatePaths.length === 0) return;

    const dayStamp = new Date().toISOString().slice(0, 10);
    const seed = `${profile.id}:${dayStamp}`;
    const hash = [...seed].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const selected = candidatePaths[hash % candidatePaths.length] ?? candidatePaths[0];

    if (!selected) return;
    // In random mode, auto-generate immediately so learners don't need to
    // interact with the selector at all.
    void handleWorldSelected(selected.id, selected.label);
  }, [
    interestPathIds,
    profile,
    selectedWorldId,
  ]);

  /**
   * Triggered when a learner taps a world card or when random mode
   * auto-selects a world. Immediately starts generation and navigates
   * to the resulting curriculum page — no extra button tap required.
   */
  const handleWorldSelected = useCallback(
    async (worldId: string, worldLabel: string) => {
      if (!profile || synthesizingRef.current) return;
      synthesizingRef.current = true;
      setIsSynthesizing(true);
      setSelectedWorldId(worldId);
      setSelectedWorldLabel(worldLabel);
      try {
        const result = await generateCurriculumModules(profile.id, worldId);
        if (result.sessionId) {
          // Navigate to the dedicated curriculum page — no page reload.
          router.push(`/student/curriculum/${result.sessionId}`);
        } else {
          // DB save failed (offline / permission issue): show inline fallback.
          // eslint-disable-next-line no-console
          console.warn("Curriculum session could not be saved; falling back to inline view.");
          synthesizingRef.current = false;
          setIsSynthesizing(false);
        }
      } catch (error) {
        console.error("Failed to synthesize curriculum:", error);
        synthesizingRef.current = false;
        setIsSynthesizing(false);
      }
    },
    [profile, router],
  );

  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 rounded-full border-4 border-accent/20 border-t-accent animate-spin" />
          <span className="text-foreground/50 text-sm tracking-widest uppercase">
            Preparing your learning space…
          </span>
        </div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  const lessonPct = progress
    ? progress.totalLessons > 0
      ? Math.round((progress.completedLessons / progress.totalLessons) * 100)
      : 0
    : null;

  return (
    <div ref={revealRef} className="min-h-[80vh] font-sans selection:bg-accent/15 selection:text-accent">

      {/* Synthesizing overlay */}
      {isSynthesizing && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-lg animate-in fade-in duration-300">
          <div className="flex flex-col items-center gap-6 text-center px-6">
            <div className="relative">
              <div className="size-20 rounded-full border-4 border-accent/20 border-t-accent animate-spin" />
              <span className="absolute inset-0 flex items-center justify-center text-3xl">
                {selectedWorldLabel ? "🌟" : "✨"}
              </span>
            </div>
            <div>
              <p className="text-foreground font-extrabold text-xl tracking-tight">
                Building{selectedWorldLabel ? ` your ${selectedWorldLabel} path` : " your path"}…
              </p>
              <p className="mt-2 text-foreground/50 text-sm">
                Personalising modules for you
              </p>
            </div>
          </div>
        </div>
      )}

      <main className="py-10 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">

        {/* Welcome banner */}
        {!isSynthesizing && (
          <header className="reveal-on-scroll text-center space-y-3">
            <div className="inline-flex items-center gap-3 mb-2">
              {profile.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.avatar_url} alt="" className="size-12 rounded-full ring-2 ring-accent/20" />
              ) : (
                <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-2xl">🧠</span>
              )}
              <div className="text-left">
                <h1
                  className="text-foreground font-black tracking-tight"
                  style={{ fontSize: "var(--type-heading-xl)" }}
                >
                  Welcome back, {profile.display_name}
                </h1>
                {recommendedStage && (
                  <Link
                    href={`/explore?stage=${recommendedStage.id}`}
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Recommended: {recommendedStage.label}
                  </Link>
                )}
              </div>
            </div>
            <p className="text-foreground/60 max-w-xl mx-auto" style={{ fontSize: "var(--type-body-lg)" }}>
              Tap a path below to begin — your modules are generated in seconds.
            </p>
          </header>
        )}

        {/* Stats grid */}
        {progress && (
          <section className="reveal-stagger">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {([
                { value: progress.completedLessons, label: "Lessons Done" },
                { value: progress.completedModules, label: "Modules Done" },
                { value: progress.totalLessons,     label: "Total Lessons" },
                { value: progress.totalModules,     label: "Total Modules" },
              ] as const).map((stat, i) => {
                const accent = STAT_ACCENTS[i % STAT_ACCENTS.length];
                return (
                  <SoftCard key={stat.label} glass className="reveal-on-scroll p-5 text-center">
                    <p className={`text-2xl font-extrabold ${accent.text}`}>{stat.value}</p>
                    <p className="text-sm text-foreground/55 mt-1">{stat.label}</p>
                  </SoftCard>
                );
              })}
            </div>

            {lessonPct !== null && (
              <div className="mt-4 reveal-on-scroll">
                <div className="flex items-center justify-between text-xs text-foreground/50 mb-1.5">
                  <span>Overall Progress</span>
                  <span className="font-semibold text-foreground/70">{lessonPct}%</span>
                </div>
                <progress
                  className="ui-progress ui-progress--accent w-full h-2.5"
                  value={progress.completedLessons}
                  max={progress.totalLessons}
                />
              </div>
            )}
          </section>
        )}

        {/* Recommended next step + world selector */}
        {!isSynthesizing && (
          <div className="space-y-8 reveal-stagger">
            <SoftCard glass className="reveal-on-scroll p-6 space-y-3">
              <h2 className="text-foreground font-bold" style={{ fontSize: "var(--type-heading-md)" }}>
                Recommended Next Step
              </h2>
              <p className="text-foreground/60 text-sm">
                Tap a path below — your personalised modules will be ready instantly.
              </p>
              {profile.module_assignment_mode === "random" && (
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  Daily path auto-selected for you
                </p>
              )}
              <div className="pt-1">
                <Link
                  href="/modules"
                  className="ui-soft-button inline-flex min-h-10 items-center border border-accent/25 bg-accent/8 px-5 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/15 dark:bg-accent/15 dark:hover:bg-accent/25"
                >
                  Browse All Paths
                </Link>
              </div>
            </SoftCard>

            <div className="reveal-on-scroll">
              <WorldSelector
                selectedWorldId={selectedWorldId || undefined}
                learner_age_years={profile.age_years}
                learnerGradeLevel={profile.grade_level}
                allowedPathIds={profile.path_allowlist}
                interestPathIds={interestPathIds}
                onSelectWorld={(worldId, worldLabel) => {
                  void handleWorldSelected(worldId, worldLabel);
                }}
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
