"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { setActiveProfile } from "@/lib/profiles/active-profile";
import { sanitizeNextPath } from "@/lib/routing/next-path";
import type { StudentProfile } from "@/lib/profiles/types";

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
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="family-orbit-spinner" role="status" aria-label={t("select_profile_loading_aria")} />
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
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();
        if (userError) {
          console.error("Error fetching user for profile selection:", formatSupabaseError(userError));
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
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="family-ambient-bg" aria-hidden="true" />
        <div className="family-orbit-spinner" role="status" aria-label={t("select_profile_loading_profiles_aria")} />
        <p className="mt-4 text-sm text-zinc-500">{t("select_profile_loading_text")}</p>
      </main>
    );
  }

  const hasProfiles = profiles.length > 0;

  return (
    <main
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-4 py-12 sm:px-6 sm:justify-center"
      aria-labelledby="profile-heading"
    >
      <div className="family-ambient-bg" aria-hidden="true" />

      {/* Header */}
      <header className="family-card-enter relative mb-8 text-center sm:mb-10">
        <h1
          id="profile-heading"
          className="ui-type-display-lg font-extrabold tracking-tight text-zinc-900"
        >
          {t("select_profile_heading")}
        </h1>
        <p className="ui-type-body-md mt-2 text-zinc-500">
          {hasProfiles ? t("select_profile_subtitle_has_profiles") : t("select_profile_subtitle_no_profiles")}
        </p>
      </header>

      {/* Error banner */}
      {fetchError && (
        <div
          role="alert"
          className="family-banner relative mb-6 w-full max-w-2xl rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900"
        >
          <p className="flex items-start gap-2.5">
            <span className="mt-0.5 shrink-0 text-base" aria-hidden="true">&#9888;</span>
            <span>{fetchError}</span>
          </p>
        </div>
      )}

      {/* Profile grid — primary CTA zone */}
      <div
        className="relative w-full max-w-2xl"
        role="group"
        aria-label={t("select_profile_group_aria")}
      >
        <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
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
                  className="family-profile-card ui-focus-ring flex w-full flex-col items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-5 backdrop-blur-sm"
                  style={{ "--glow": `${theme.glow}40` } as React.CSSProperties}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} shadow-md sm:h-24 sm:w-24`}
                    style={{ boxShadow: `0 6px 20px ${theme.glow}30` }}
                  >
                    {profile.avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={profile.avatar_url}
                        alt=""
                        className="h-full w-full rounded-2xl object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white sm:text-4xl" aria-hidden="true">
                        {profile.display_name[0]?.toUpperCase() ?? "?"}
                      </span>
                    )}
                  </div>

                  {/* Name & grade */}
                  <div className="text-center">
                    <span className="block text-base font-bold text-zinc-800 sm:text-lg">
                      {profile.display_name}
                    </span>
                    {profile.grade_level && (
                      <span
                        className="mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
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
          <div className="family-card-enter mx-auto max-w-sm rounded-2xl border border-emerald-200 bg-emerald-50/80 px-6 py-6 text-center backdrop-blur-sm">
            <p className="text-sm font-medium text-emerald-800">
              {t("select_profile_empty_state")}
            </p>
          </div>
        )}
      </div>

      {/* Secondary actions — visually subordinate */}
      <div className="relative mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
        <Link
          href="/student/onboarding"
          className="ui-soft-button ui-focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm"
        >
          <span aria-hidden="true">+</span>
          {t("select_profile_add_learner")}
        </Link>
        <Link
          href="/parent/dashboard"
          className="ui-focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-zinc-500 backdrop-blur-sm transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-700"
        >
          {t("select_profile_parent_settings")}
        </Link>
      </div>
    </main>
  );
}
