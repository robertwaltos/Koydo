"use client";

import React, { useEffect, useMemo, useState } from "react";
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
import { LessonPlayer } from "@/components/explorer/LessonPlayer"; 

type GeneratedCurriculumModule = Awaited<
  ReturnType<typeof generateCurriculumModules>
>["modules"][number];

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

export default function StudentDashboardPage() {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  
  const [selectedWorldId, setSelectedWorldId] = useState<string | null>(null);
  const [selectedWorldLabel, setSelectedWorldLabel] = useState<string | null>(null);
  const [modules, setModules] = useState<GeneratedCurriculumModule[]>([]);
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<{
    completedLessons: number;
    totalLessons: number;
    completedModules: number;
    totalModules: number;
  } | null>(null);
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
        age_years: number | null;
        avatar_url?: string;
        path_allowlist?: unknown;
        featured_module_ids?: unknown;
        module_assignment_mode?: unknown;
        ai_skill_level_map?: unknown;
      }): StudentProfile => ({
        id: row.id,
        display_name: row.display_name,
        grade_level: row.grade_level,
        age_years: row.age_years,
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
        const secondaryQuery = await supabase
          .from("student_profiles")
          .select("id, display_name, grade_level, age_years, avatar_url, path_allowlist, ai_skill_level_map")
          .eq("id", profileId)
          .single();

        if (!secondaryQuery.error && secondaryQuery.data) {
          setProfile(normalizeProfile(secondaryQuery.data));
          setLoading(false);
        } else {
            const fallbackQuery = await supabase
            .from("student_profiles")
            .select("id, display_name, grade_level, age_years, avatar_url")
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
    setSelectedWorldId(selected.id);
    setSelectedWorldLabel(selected.label);
  }, [
    interestPathIds,
    profile,
    selectedWorldId,
  ]);

  const initiateSynthesis = async () => {
    if (!profile) return;
    setIsSynthesizing(true);
    try {
      // Pass the selected world to the AI action
      const { modules } = await generateCurriculumModules(profile.id, selectedWorldId || undefined);
      setModules(modules);
    } catch (error) {
      console.error("Failed to synthesize curriculum:", error);
    } finally {
      setIsSynthesizing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
             <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mb-4" />
             <div className="text-stone-400 text-sm tracking-widest uppercase">Preparing your learning space...</div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center gap-4">
                    {profile?.avatar_url ? (
                        // External avatar URLs are user-provided and not guaranteed to be in Next image allowlists.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={profile.avatar_url} alt="Avatar" className="w-10 h-10 rounded-full" />
                    ) : (
                        <span className="text-2xl">🧠</span>
                    )}
                    <div>
                        <span className="font-bold text-xl tracking-tight text-stone-700">{profile.display_name}</span>
                        <span className="text-sm text-stone-500 block">Learning Dashboard</span>
                    </div>
                </div>
                {recommendedStage && (
                    <Link href={`/explore?stage=${recommendedStage.id}`} className="text-sm text-teal-600 font-semibold hover:underline">
                        Recommended Stage: {recommendedStage.label}
                    </Link>
                )}
            </div>
        </div>
      </nav>

      {/* Interface Wrapper */}
      <main className="py-12 px-4 max-w-6xl mx-auto min-h-screen">
        
        {/* Active Lesson Player Overlay */}
        {activeModuleIndex !== null && modules[activeModuleIndex] && (
           <div className="fixed inset-0 z-50 bg-stone-900/90 backdrop-blur flex items-center justify-center p-4 animate-in fade-in duration-300">
              <div className="w-full max-w-5xl">
                 <button 
                   onClick={() => setActiveModuleIndex(null)}
                   className="absolute top-4 right-4 text-white/50 hover:text-white"
                 >
                   ESC
                 </button>
                 <LessonPlayer 
                   module={modules[activeModuleIndex]} 
                   onComplete={() => setActiveModuleIndex(null)} 
                 />
              </div>
           </div>
        )}

        {/* Intro / Welcome */}
        {!modules.length && (
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-3xl font-bold mb-4">Welcome back, {profile.display_name}.</h2>
                <p className="text-stone-600 max-w-xl mx-auto">
                Choose a path that matches your level and goals.
                </p>
            </div>
        )}
        
        {/* Progress Summary */}
        {progress && (
          <section className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                <p className="text-2xl font-bold text-teal-600">{progress.completedLessons}</p>
                <p className="text-sm text-stone-500">Lessons Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                <p className="text-2xl font-bold text-teal-600">{progress.completedModules}</p>
                <p className="text-sm text-stone-500">Modules Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                <p className="text-2xl font-bold text-stone-500">{progress.totalLessons}</p>
                <p className="text-sm text-stone-500">Total Lessons</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                <p className="text-2xl font-bold text-stone-500">{progress.totalModules}</p>
                <p className="text-sm text-stone-500">Total Modules</p>
              </div>
            </div>
          </section>
        )}

        {/* World Selector & Synthesis Control */}
        {!modules.length && (
            <div className="animate-in zoom-in-95 duration-500 space-y-8">
                <section className="rounded-2xl border border-teal-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-stone-800">
                    Recommended Next Step
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    Core curriculum paths are shown first for this learner&apos;s age and baseline. Additional topics are listed below.
                  </p>
                  {profile.module_assignment_mode === "random" ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
                      Random additional module mode enabled
                    </p>
                  ) : null}
                  <div className="mt-4">
                    <Link
                      href="/modules"
                      className="inline-flex min-h-10 items-center rounded-full border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-100"
                    >
                      Additional Paths
                    </Link>
                  </div>
                </section>

                <WorldSelector 
                  selectedWorldId={selectedWorldId || undefined}
                  learner_age_years={profile.age_years}
                  learnerGradeLevel={profile.grade_level}
                  allowedPathIds={profile.path_allowlist}
                  interestPathIds={interestPathIds}
                  onSelectWorld={(worldId, worldLabel) => {
                    setSelectedWorldId(worldId);
                    setSelectedWorldLabel(worldLabel);
                  }}
                />

                <div className="flex justify-center pt-8 border-t border-stone-200/50">
                    <button 
                      onClick={initiateSynthesis}
                      disabled={!selectedWorldId || isSynthesizing}
                      className={`
                        group relative flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all
                        ${selectedWorldId && !isSynthesizing
                            ? 'bg-teal-600 text-white hover:bg-teal-500 hover:scale-105 hover:shadow-teal-200'
                            : 'bg-stone-200 text-stone-400 cursor-not-allowed'}
                      `}
                    >
                        {isSynthesizing ? (
                           <>
                             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                             <span>Building your curriculum...</span>
                           </>
                        ) : (
                           <>
                             <span>Generate {selectedWorldLabel || "Curriculum"}</span>
                             <span className="group-hover:translate-x-1 transition-transform">→</span>
                           </>
                        )}
                    </button>
                </div>
            </div>
        )}

        {/* Generated Modules List */}
        {modules.length > 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="flex justify-between items-end border-b border-stone-200 pb-6 mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-stone-800">Your Learning Path</h2>
                        <p className="text-stone-500 mt-2">
                           Tailored for {profile.display_name} in <span className="font-bold text-teal-600">{selectedWorldLabel || selectedWorldId}</span>.
                        </p>
                    </div>
                    <button 
                        onClick={() => {
                          setModules([]);
                          setActiveModuleIndex(null);
                          setSelectedWorldId(null);
                          setSelectedWorldLabel(null);
                        }}
                        className="text-stone-400 hover:text-stone-600 font-bold text-sm"
                    >
                        START OVER
                    </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {modules.map((mod, i) => (
                        <div 
                          key={i} 
                          onClick={() => setActiveModuleIndex(i)}
                          className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group flex flex-col h-full"
                        >
                            <div className="mb-4 flex justify-between items-start">
                                <span className="text-5xl filter drop-shadow-sm">{mod.icon}</span>
                                {mod.media?.introVideoId && (
                                    <span className="text-[10px] font-mono bg-stone-100 text-stone-500 px-2 py-1 rounded border border-stone-200">
                                        MEDIA READY
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-teal-700 transition-colors">
                                {mod.title}
                            </h3>
                            <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">
                                {mod.desc}
                            </p>
                            
                            <div className="pt-4 border-t border-stone-100 flex justify-between items-center mt-auto">
                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                                   {mod.media?.animationStyle || "Module"}
                                </span>
                                <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                   ▶
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </main>

    </div>
  );
}
