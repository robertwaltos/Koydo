"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { setActiveProfile } from "@/lib/profiles/active-profile";
import { sanitizeNextPath } from "@/lib/routing/next-path";
import type { StudentProfile } from "@/lib/profiles/types";
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

type SupabaseErrorLike = {
  code?: string;
  message?: string;
  details?: string | null;
  hint?: string | null;
};

const PROFILE_THEMES = [
  { gradient: "from-emerald-400 to-teal-500", glow: "#34d399" },
  { gradient: "from-violet-400 to-purple-500", glow: "#a78bfa" },
  { gradient: "from-amber-400 to-orange-500", glow: "#fbbf24" },
  { gradient: "from-sky-400 to-blue-500", glow: "#38bdf8" },
  { gradient: "from-rose-400 to-pink-500", glow: "#fb7185" },
  { gradient: "from-lime-400 to-green-500", glow: "#a3e635" },
] as const;

function getTheme(index: number) {
  return PROFILE_THEMES[index % PROFILE_THEMES.length];
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toSupabaseError(error: unknown): SupabaseErrorLike | null {
  if (!isObject(error)) return null;
  return {
    code: typeof error.code === "string" ? error.code : undefined,
    message: typeof error.message === "string" ? error.message : undefined,
    details: typeof error.details === "string" ? error.details : null,
    hint: typeof error.hint === "string" ? error.hint : null,
  };
}

function formatSupabaseError(error: unknown) {
  const normalized = toSupabaseError(error);
  if (!normalized) return "Unknown Supabase error";

  const parts = [
    normalized.code ? `code=${normalized.code}` : null,
    normalized.message ?? null,
    normalized.details ?? null,
    normalized.hint ? `hint=${normalized.hint}` : null,
  ].filter((part): part is string => Boolean(part));

  return parts.length > 0 ? parts.join(" | ") : "Unknown Supabase error";
}

function isMissingStudentProfilesTable(error: unknown) {
  const normalized = toSupabaseError(error);
  if (!normalized) return false;
  return (
    normalized.code === "PGRST205"
    && typeof normalized.message === "string"
    && normalized.message.toLowerCase().includes("student_profiles")
  );
}

export default function SelectProfilePage() {
  const { t } = useI18n();
  return (
    <Suspense fallback={
      <main className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
        <AdaptiveBackground ageGroup="standard" />
        <div className="family-orbit-spinner z-10" role="status" aria-label={t("select_profile_loading_aria")} />
      </main>
    }>
      <SelectProfilePageInner />
    </Suspense>
  );
}

function SelectProfilePageInner() {
  const { t } = useI18n();
  const [profiles, setProfiles] = useState<StudentProfile[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const nextPath = sanitizeNextPath(searchParams.get("next"));

  useEffect(() => {
    const fetchProfiles = async () => {
      setFetchError(null);
      try {
        // Use getSession() first (reads local storage — no network round-trip).
        // If it returns null (e.g. token refresh race), fall back to getUser()
        // to avoid a false redirect-to-sign-in that would cause a loading loop.
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();
        if (sessionError) {
          console.error("Error fetching session for profile selection:", formatSupabaseError(sessionError));
        }
        let user = session?.user ?? null;

        if (!user) {
          // Fallback: validate via network (covers post-OAuth / token-refresh races)
          const { data: { user: networkUser } } = await supabase.auth.getUser();
          user = networkUser;
        }

        if (!user) {
          router.push("/auth/sign-in");
          return;
        }

        const { data, error } = await supabase
          .from("student_profiles")
          .select("id, display_name, grade_level, avatar_url")
          .eq("account_id", user.id);

        if (error) {
          const formattedError = formatSupabaseError(error);
          if (isMissingStudentProfilesTable(error)) {
            console.warn("Student profiles table unavailable:", formattedError);
            setFetchError(
              t("select_profile_table_unavailable"),
            );
          } else {
            console.error("Error fetching profiles:", formattedError);
            setFetchError(t("select_profile_error_load"));
          }
          setProfiles([]);
        } else {
          setProfiles(data || []);
        }
      } catch (error) {
        console.error(
          "Unexpected profile fetch failure:",
          error instanceof Error ? error.message : "Unknown error",
        );
        setFetchError(t("select_profile_error_unexpected"));
        setProfiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [router, supabase, t]);

  const handleSelectProfile = (profileId: string) => {
    setActiveProfile(profileId);
    if (nextPath && nextPath.startsWith("/student")) {
      router.push(nextPath);
      return;
    }

    router.push("/student/dashboard");
  };

  if (loading) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <AdaptiveBackground ageGroup="standard" />
        <div className="family-orbit-spinner z-10" role="status" aria-label={t("select_profile_loading_profiles_aria")} />
        <p className="mt-4 text-sm font-semibold text-zinc-600 z-10 drop-shadow-sm">{t("select_profile_loading_text")}</p>
      </main>
    );
  }

  const hasProfiles = profiles.length > 0;

  return (
    <main
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-12 sm:px-6 sm:justify-center"
      aria-labelledby="profile-heading"
    >
      <AdaptiveBackground ageGroup="standard" />

      {/* Header */}
      <header className="family-card-enter relative z-10 mb-8 text-center sm:mb-12">
        <h1
          id="profile-heading"
          className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 drop-shadow-md"
        >
          {t("select_profile_heading")}
        </h1>
        <p className="mt-3 text-base sm:text-lg font-medium text-zinc-700 drop-shadow-sm">
          {hasProfiles ? t("select_profile_subtitle_has_profiles") : t("select_profile_subtitle_no_profiles")}
        </p>
      </header>

      {/* Error banner */}
      {fetchError && (
        <div
          role="alert"
          className="family-banner relative z-10 mb-6 w-full max-w-2xl rounded-2xl border border-amber-200 bg-amber-50/90 backdrop-blur-xl px-6 py-5 text-sm font-semibold text-amber-900 shadow-sm"
        >
          <p className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-lg" aria-hidden="true">&#9888;</span>
            <span>{fetchError}</span>
          </p>
        </div>
      )}

      {/* Profile grid — primary CTA zone */}
      <div
        className="relative z-10 w-full max-w-3xl"
        role="group"
        aria-label={t("select_profile_group_aria")}
      >
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {profiles.map((profile, i) => {
            const theme = getTheme(i);
            return (
              <li key={profile.id} className="family-card-enter" style={{ animationDelay: `${i * 60}ms` }}>
                <button
                  type="button"
                  onClick={() => handleSelectProfile(profile.id)}
                  aria-label={t("select_profile_start_as_aria", {
                    name: profile.display_name,
                    gradePart: profile.grade_level
                      ? t("select_profile_grade_suffix", { grade: profile.grade_level })
                      : "",
                  })}
                  className="family-profile-card ui-focus-ring flex w-full flex-col items-center gap-4 rounded-[2rem] border border-white/60 bg-white/40 p-6 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
                  style={{ "--glow": `${theme.glow}40` } as React.CSSProperties}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${theme.gradient} shadow-lg sm:h-28 sm:w-28 transition-transform duration-300`}
                    style={{ boxShadow: `0 8px 24px ${theme.glow}40` }}
                  >
                    {profile.avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={profile.avatar_url}
                        alt=""
                        className="h-full w-full rounded-[1.5rem] object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-white sm:text-5xl drop-shadow-sm" aria-hidden="true">
                        {profile.display_name[0]?.toUpperCase() ?? "?"}
                      </span>
                    )}
                  </div>

                  {/* Name & grade */}
                  <div className="text-center w-full">
                    <span className="block text-lg font-black tracking-tight text-zinc-900 sm:text-xl truncate">
                      {profile.display_name}
                    </span>
                    {profile.grade_level && (
                      <span
                        className="mt-1.5 inline-block rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white shadow-sm"
                        style={{ backgroundColor: theme.glow }}
                      >
                        {t("select_profile_grade_chip", { grade: profile.grade_level })}
                      </span>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Empty state */}
        {!hasProfiles && !fetchError && (
          <div className="family-card-enter mx-auto max-w-sm rounded-[2rem] border border-emerald-200/60 bg-emerald-50/60 backdrop-blur-xl px-8 py-8 text-center shadow-sm">
            <p className="text-base font-bold text-emerald-800">
              {t("select_profile_empty_state")}
            </p>
          </div>
        )}
      </div>

      {/* Secondary actions — visually subordinate */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row">
        <Link
          href="/student/onboarding"
          className="ui-soft-button ui-focus-ring inline-flex min-h-[3.5rem] items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105 hover:bg-indigo-500 active:scale-95"
        >
          <span aria-hidden="true" className="text-lg leading-none">+</span>
          {t("select_profile_add_learner")}
        </Link>
        <Link
          href="/parent/dashboard"
          className="ui-focus-ring inline-flex min-h-[3.5rem] items-center gap-2 rounded-full border border-white/80 bg-white/50 backdrop-blur-xl px-6 py-3 text-sm font-bold text-zinc-700 shadow-sm transition-all hover:bg-white hover:text-zinc-900 hover:scale-105 active:scale-95"
        >
          {t("select_profile_parent_settings")}
        </Link>
      </div>
    </main>
  );
}

