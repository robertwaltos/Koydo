import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { serverEnv } from "@/lib/config/env";
import {
  formatSubscriptionDate,
  getSubscriptionStatusLabel,
  getSubscriptionStatusTone,
  requiresPortalManagement,
} from "@/lib/billing/subscription";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getLanguagePlanById, getScoredAttemptLimitForPlan } from "@/lib/language-learning";
import { summarizeLanguageProgress } from "@/lib/language-learning/progress-metrics";
import { formatDate } from "@/lib/i18n/format";
import {
  isSupportedLocale,
  translate,
  type Locale,
} from "@/lib/i18n/translations";
import type { StudentProfile } from "@/lib/profiles/types";

export const dynamic = "force-dynamic";

function formatLastUpdated(
  value: string | null,
  t: (key: string, vars?: Record<string, string | number>) => string,
  locale: Locale,
) {
  if (!value) return t("parent_dashboard_no_recent_updates");
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return t("parent_dashboard_no_recent_updates");
  return formatDate(date, locale, { month: "short", day: "numeric", year: "numeric" });
}

function formatCompactDate(
  value: string | null,
  t: (key: string, vars?: Record<string, string | number>) => string,
  locale: Locale,
) {
  if (!value) return t("parent_dashboard_no_activity_yet");
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return t("parent_dashboard_no_activity_yet");
  return formatDate(date, locale, { month: "short", day: "numeric" });
}

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

export default async function ParentDashboardPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) => translate(locale, key, vars);

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const [profilesResult, subscriptionResult] = await Promise.all([
    supabase
      .from("student_profiles")
      .select("id, display_name, grade_level, age_years, initial_assessment_status, updated_at")
      .eq("account_id", user.id)
      .order("created_at", { ascending: true }),
    supabase
      .from("subscriptions")
      .select("status, cancel_at_period_end, current_period_end")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const { data: profiles, error: profilesError } = profilesResult;
  const { data: subscription, error: subscriptionError } = subscriptionResult;

  if (profilesError) {
    console.error("Error fetching profiles for parent dashboard:", profilesError);
  }
  if (subscriptionError) {
    console.error("Error fetching subscription for parent dashboard:", subscriptionError);
  }

  const learnerProfiles = (profiles ?? []) as StudentProfile[];
  const learnerProfileIds = learnerProfiles.map((profile) => profile.id);
  const currentMonthKey = monthKeyFromDate(new Date());

  const [profileAttemptsResult, profileStateResult, profileEventsResult, profileUsageResult] =
    learnerProfileIds.length > 0
      ? await Promise.all([
          supabase
            .from("pronunciation_attempts")
            .select("student_profile_id, grading_mode, overall_score, created_at")
            .in("student_profile_id", learnerProfileIds)
            .order("created_at", { ascending: false })
            .limit(300),
          supabase
            .from("gamification_states")
            .select("student_profile_id, points, level, badges, quests_completed, last_activity_at")
            .in("student_profile_id", learnerProfileIds),
          supabase
            .from("gamification_events")
            .select("student_profile_id, event_type, created_at")
            .in("student_profile_id", learnerProfileIds)
            .order("created_at", { ascending: false })
            .limit(300),
          supabase
            .from("language_usage_tracking")
            .select("student_profile_id, month_key, plan_tier, scored_attempts")
            .in("student_profile_id", learnerProfileIds)
            .eq("month_key", currentMonthKey),
        ])
      : [
          { data: [], error: null },
          { data: [], error: null },
          { data: [], error: null },
          { data: [], error: null },
        ];

  const languageErrors = [
    profileAttemptsResult.error,
    profileStateResult.error,
    profileEventsResult.error,
    profileUsageResult.error,
  ].filter((error): error is NonNullable<typeof profileAttemptsResult.error> => Boolean(error));
  const languageTablesMissing = languageErrors.some((error) =>
    isMissingTableError(error.message),
  );
  if (!languageTablesMissing) {
    for (const error of languageErrors) {
      console.error("Parent dashboard language progress query failed:", error);
    }
  }

  const attemptsByProfile = new Map<
    string,
    { grading_mode: string | null; overall_score: number | string | null; created_at: string | null }[]
  >();
  const stateByProfile = new Map<
    string,
    {
      points: number | null;
      level: number | null;
      badges: unknown;
      quests_completed: unknown;
      last_activity_at: string | null;
    }
  >();
  const latestEventByProfile = new Map<string, { event_type: string | null; created_at: string | null }>();
  const usageByProfile = new Map<
    string,
    { planTier: string; scoredAttemptsUsed: number; scoredAttemptsLimit: number }
  >();

  if (!languageTablesMissing) {
    for (const row of profileAttemptsResult.data ?? []) {
      const profileId = row.student_profile_id;
      if (!profileId) continue;
      const rows = attemptsByProfile.get(profileId) ?? [];
      rows.push({
        grading_mode: row.grading_mode,
        overall_score: row.overall_score,
        created_at: row.created_at,
      });
      attemptsByProfile.set(profileId, rows);
    }

    for (const row of profileStateResult.data ?? []) {
      if (!row.student_profile_id) continue;
      stateByProfile.set(row.student_profile_id, {
        points: row.points,
        level: row.level,
        badges: row.badges,
        quests_completed: row.quests_completed,
        last_activity_at: row.last_activity_at,
      });
    }

    for (const row of profileEventsResult.data ?? []) {
      if (!row.student_profile_id || latestEventByProfile.has(row.student_profile_id)) continue;
      latestEventByProfile.set(row.student_profile_id, {
        event_type: row.event_type,
        created_at: row.created_at,
      });
    }

    for (const row of profileUsageResult.data ?? []) {
      if (!row.student_profile_id) continue;
      const planTier = getLanguagePlanById(row.plan_tier)?.id ?? "core_practice";
      const scoredAttemptsLimit = getScoredAttemptLimitForPlan(planTier);
      usageByProfile.set(row.student_profile_id, {
        planTier,
        scoredAttemptsUsed: Math.max(0, Number(row.scored_attempts ?? 0)),
        scoredAttemptsLimit,
      });
    }
  }

  const learnerLanguageSummaries = learnerProfiles.map((profile) => {
    const summary = summarizeLanguageProgress(
      attemptsByProfile.get(profile.id) ?? [],
      stateByProfile.get(profile.id) ?? null,
    );
    const latestEvent = latestEventByProfile.get(profile.id) ?? null;
    return {
      profileId: profile.id,
      displayName: profile.display_name,
      summary,
      latestEvent,
      usage:
        usageByProfile.get(profile.id) ?? {
          planTier: "core_practice",
          scoredAttemptsUsed: 0,
          scoredAttemptsLimit: getScoredAttemptLimitForPlan("core_practice"),
        },
    };
  });

  const totalProfiles = learnerProfiles.length;
  const completedAssessmentCount = learnerProfiles.filter(
    (profile) => profile.initial_assessment_status === "completed",
  ).length;
  const pendingAssessmentCount = totalProfiles - completedAssessmentCount;
  const subscriptionStatus = subscription?.status ?? null;
  const subscriptionTone = getSubscriptionStatusTone(subscriptionStatus);
  const subscriptionLabel = getSubscriptionStatusLabel(subscriptionStatus);
  const periodEndLabel = formatSubscriptionDate(subscription?.current_period_end ?? null, locale);
  const externalBillingAllowed = serverEnv.BILLING_PROVIDER_MODE !== "app_store_iap";
  const hasPortalManagedSubscription = requiresPortalManagement(subscriptionStatus);
  const subscriptionToneClass =
    subscriptionTone === "good"
      ? "bg-emerald-100 text-emerald-700"
      : subscriptionTone === "warn"
        ? "bg-amber-100 text-amber-700"
        : subscriptionTone === "bad"
          ? "bg-rose-100 text-rose-700"
          : "bg-zinc-100 text-zinc-600";
  const billingCtaHref = externalBillingAllowed
    ? hasPortalManagedSubscription
      ? "/account/settings"
      : "/billing/language"
    : "/account/settings";
  const billingCtaLabel = externalBillingAllowed
    ? hasPortalManagedSubscription
      ? t("parent_dashboard_billing_cta_manage")
      : t("parent_dashboard_billing_cta_choose_plan")
    : t("parent_dashboard_billing_cta_settings");

  return (
    <div className="p-6 md:p-8">
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#697386]">
            {t("parent_dashboard_header_eyebrow")}
          </p>
          <h1 className="mt-1 text-[22px] font-semibold text-[#1a1f36]">
            {t("parent_dashboard_title")}
          </h1>
          <p className="mt-1 text-[13px] text-[#697386]">
            {t("parent_dashboard_subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/student/onboarding"
            className="ui-focus-ring inline-flex items-center justify-center rounded-md bg-[#635bff] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#5a52f0]"
          >
            {t("parent_dashboard_add_learner")}
          </Link>
          <Link
            href="/who-is-learning"
            className="ui-focus-ring inline-flex items-center justify-center rounded-md border border-[#e3e8ee] bg-white px-4 py-2 text-[13px] font-semibold text-[#3c4257] shadow-sm transition hover:bg-[#f6f9fc]"
          >
            {t("parent_dashboard_switch_learner")}
          </Link>
        </div>
      </div>

      {/* ── Stat cards ───────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#697386]">
            {t("parent_dashboard_stat_learners")}
          </p>
          <p className="mt-2 text-[26px] font-semibold leading-none text-[#1a1f36]">{totalProfiles}</p>
          <p className="mt-2 text-[12px] text-[#697386]">
            {t("parent_dashboard_stat_learners_desc")}
          </p>
        </div>

        <div className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#697386]">
            {t("parent_dashboard_stat_assessment_done")}
          </p>
          <p className="mt-2 text-[26px] font-semibold leading-none text-[#0e9f6e]">{completedAssessmentCount}</p>
          <p className="mt-2 text-[12px] text-[#697386]">
            {t("parent_dashboard_stat_assessment_done_desc")}
          </p>
        </div>

        <div className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#697386]">
            {t("parent_dashboard_stat_needs_setup")}
          </p>
          <p className="mt-2 text-[26px] font-semibold leading-none text-[#c27803]">{pendingAssessmentCount}</p>
          <p className="mt-2 text-[12px] text-[#697386]">
            {t("parent_dashboard_stat_needs_setup_desc")}
          </p>
        </div>

        <div className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[11px] font-medium uppercase tracking-wider text-[#697386]">
              {t("parent_dashboard_stat_subscription")}
            </p>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${subscriptionToneClass}`}
            >
              {subscriptionLabel}
            </span>
          </div>
          <p className="mt-2 text-[12px] text-[#697386]">
            {!externalBillingAllowed
              ? t("parent_dashboard_subscription_iap_mode")
              : subscription?.cancel_at_period_end && periodEndLabel
                ? t("parent_dashboard_subscription_cancels", { date: periodEndLabel })
                : periodEndLabel
                  ? t("parent_dashboard_subscription_renews", { date: periodEndLabel })
                  : t("parent_dashboard_subscription_none")}
          </p>
          <Link
            href={billingCtaHref}
            className="ui-focus-ring mt-3 inline-flex items-center rounded-md border border-[#e3e8ee] bg-[#f6f9fc] px-3 py-1.5 text-[12px] font-semibold text-[#3c4257] hover:bg-[#edf0f7]"
          >
            {billingCtaLabel}
          </Link>
        </div>
      </section>

      {/* ── Learner Profiles ─────────────────────────────────────────────── */}
      <section className="mt-6 rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[14px] font-semibold text-[#1a1f36]">
            {t("parent_dashboard_learner_profiles_title")}
          </h2>
          <Link
            href="/parent/reports"
            className="ui-focus-ring rounded-md border border-[#e3e8ee] bg-[#f6f9fc] px-3 py-1.5 text-[12px] font-semibold text-[#3c4257] hover:bg-[#edf0f7]"
          >
            {t("parent_dashboard_reports_button")}
          </Link>
        </div>

        {learnerProfiles.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[#c4cdd8] bg-[#f6f9fc] p-8 text-center">
            <p className="text-[14px] font-semibold text-[#3c4257]">
              {t("parent_dashboard_no_learners_title")}
            </p>
            <p className="mt-1 text-[13px] text-[#697386]">
              {t("parent_dashboard_no_learners_desc")}
            </p>
            <Link
              href="/student/onboarding"
              className="ui-focus-ring mt-4 inline-flex items-center justify-center rounded-md bg-[#1a1f36] px-5 py-2 text-[13px] font-semibold text-white hover:bg-[#2d3654]"
            >
              {t("parent_dashboard_start_onboarding")}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {learnerProfiles.map((profile) => {
              const initial = profile.display_name.trim().charAt(0).toUpperCase() || "L";
              const statusComplete = profile.initial_assessment_status === "completed";
              return (
                <article
                  key={profile.id}
                  className="rounded-lg border border-[#e3e8ee] bg-white p-4 transition hover:border-[#c4cdd8] hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-emerald-400 to-sky-500 text-base font-bold text-white">
                        {initial}
                      </div>
                      <div>
                        <h3 className="text-[14px] font-semibold text-[#1a1f36]">
                          {profile.display_name}
                        </h3>
                        <p className="text-[12px] text-[#697386]">
                          {t("parent_dashboard_grade", {
                            grade: profile.grade_level ?? t("parent_dashboard_unassigned"),
                          })}
                          {profile.age_years
                            ? ` · ${t("parent_dashboard_age", { age: profile.age_years })}`
                            : ""}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        statusComplete
                          ? "bg-[#d1fae5] text-[#065f46]"
                          : "bg-[#fef3c7] text-[#92400e]"
                      }`}
                    >
                      {statusComplete
                        ? t("parent_dashboard_status_ready")
                        : t("parent_dashboard_status_setup_needed")}
                    </span>
                  </div>

                  <p className="mt-3 border-t border-[#f4f6f8] pt-3 text-[11px] text-[#697386]">
                    {t("parent_dashboard_last_update", {
                      date: formatLastUpdated(profile.updated_at ?? null, t, locale),
                    })}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/who-is-learning"
                      className="ui-focus-ring rounded-md border border-[#e3e8ee] bg-[#f6f9fc] px-3 py-1.5 text-[12px] font-semibold text-[#3c4257] hover:bg-[#edf0f7]"
                    >
                      {t("parent_dashboard_launch")}
                    </Link>
                    <Link
                      href={`/parent/reports?student=${profile.id}`}
                      className="ui-focus-ring rounded-md border border-[#e3e8ee] bg-[#f6f9fc] px-3 py-1.5 text-[12px] font-semibold text-[#3c4257] hover:bg-[#edf0f7]"
                    >
                      {t("parent_dashboard_report")}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Language Progress ─────────────────────────────────────────────── */}
      <section className="mt-6 rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[14px] font-semibold text-[#1a1f36]">
            {t("parent_dashboard_language_progress_title")}
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/language/speaking-lab"
              className="ui-focus-ring rounded-md border border-[#e3e8ee] bg-[#f6f9fc] px-3 py-1.5 text-[12px] font-semibold text-[#3c4257] hover:bg-[#edf0f7]"
            >
              {t("parent_dashboard_speaking_lab")}
            </Link>
            <Link
              href="/modules"
              className="ui-focus-ring rounded-md border border-[#e3e8ee] bg-[#f6f9fc] px-3 py-1.5 text-[12px] font-semibold text-[#3c4257] hover:bg-[#edf0f7]"
            >
              {t("parent_dashboard_modules")}
            </Link>
          </div>
        </div>

        {languageTablesMissing ? (
          <div className="rounded-lg border border-dashed border-[#c4cdd8] bg-[#f6f9fc] p-4 text-[13px] text-[#697386]">
            {t("parent_dashboard_language_data_pending")}
          </div>
        ) : learnerLanguageSummaries.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[#c4cdd8] bg-[#f6f9fc] p-4 text-[13px] text-[#697386]">
            {t("parent_dashboard_add_learner_to_track")}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {learnerLanguageSummaries.map((row) => {
              const scoredLimit = row.usage.scoredAttemptsLimit;
              const scoredUsed = row.usage.scoredAttemptsUsed;
              const hasScoredAccess = scoredLimit > 0;
              const scoredRemaining = Math.max(0, scoredLimit - scoredUsed);
              const usageMode: "graded" | "practice_only" =
                hasScoredAccess && scoredRemaining > 0 ? "graded" : "practice_only";
              const usageHint = !hasScoredAccess
                ? t("parent_dashboard_usage_practice_only_hint")
                : scoredRemaining === 0
                  ? t("parent_dashboard_usage_limit_reached")
                  : t("parent_dashboard_usage_remaining", { count: scoredRemaining });

              return (
                <article
                  key={row.profileId}
                  className="rounded-lg border border-[#e3e8ee] bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#1a1f36]">
                        {row.displayName}
                      </h3>
                      <p className="mt-0.5 text-[12px] text-[#697386]">
                        {t("parent_dashboard_last_attempt", {
                          date: formatCompactDate(row.summary.latestAttemptAt, t, locale),
                        })}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#e0f2fe] px-2 py-0.5 text-[11px] font-semibold text-[#0369a1]">
                      {t("parent_dashboard_level_points", {
                        level: row.summary.level,
                        points: row.summary.points,
                      })}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      {
                        label: t("parent_dashboard_metric_avg_score"),
                        value:
                          row.summary.averageScore !== null
                            ? `${Math.round(row.summary.averageScore)}%`
                            : t("parent_dashboard_not_available"),
                      },
                      { label: t("parent_dashboard_metric_attempts"), value: String(row.summary.totalAttempts) },
                      { label: t("parent_dashboard_metric_practice"), value: String(row.summary.practiceOnlyAttempts) },
                      {
                        label: t("parent_dashboard_metric_rewards"),
                        value: `${row.summary.badgesCount}B · ${row.summary.questsCompletedCount}Q`,
                      },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="rounded-lg border border-[#f4f6f8] bg-[#f6f9fc] p-2.5"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-[#697386]">{label}</p>
                        <p className="mt-1 text-[13px] font-semibold text-[#1a1f36]">{value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-[11px] text-[#697386]">
                    {t("parent_dashboard_scored_line", {
                      used: row.usage.scoredAttemptsUsed,
                      limit: row.usage.scoredAttemptsLimit,
                      tier: row.usage.planTier,
                      hint: usageHint,
                    })}
                  </p>

                  {usageMode === "practice_only" && (
                    <Link
                      href="/billing/language"
                      className="ui-focus-ring mt-3 inline-flex items-center rounded-md border border-[#bae6fd] bg-[#e0f2fe] px-3 py-1.5 text-[12px] font-semibold text-[#0369a1] hover:bg-[#bae6fd]"
                    >
                      {t("parent_dashboard_upgrade_language_plan")}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

