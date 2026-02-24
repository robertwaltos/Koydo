import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";
import ModuleCoverImage from "@/app/components/module-cover-image";
import { toModulePath } from "@/lib/routing/paths";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { type ExamRegion, getExamTrackProfileByModuleId } from "@/lib/exam/tracks";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

function getExamModules() {
  return getAllLearningModules()
    .filter((module) => module.tags?.includes("exam-prep"))
    .map((module) => {
      const trackProfile = getExamTrackProfileByModuleId(module.id);
      return {
        ...module,
        track: trackProfile?.displayName ?? module.title,
        region: trackProfile?.region ?? ("Other" as ExamRegion),
        trackProfile,
      };
    })
    .sort(
      (a, b) =>
        a.region.localeCompare(b.region) ||
        a.track.localeCompare(b.track) ||
        a.title.localeCompare(b.title),
    );
}

function durationTone(durationMinutes?: number): "neutral" | "info" | "warning" {
  if (!durationMinutes) return "neutral";
  if (durationMinutes >= 60) return "warning";
  if (durationMinutes >= 40) return "info";
  return "neutral";
}

export default async function ExamPrepPage() {
  const examModules = getExamModules();
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let unresolvedErrorCount: number | null = null;
  const topErrorSkills: Array<{ skillId: string; count: number }> = [];
  const topErrorTypes: Array<{ errorType: string; count: number }> = [];
  if (user) {
    const [countResult, rowsResult] = await Promise.all([
      supabase
        .from("user_exam_error_logs")
        .select("id", { head: true, count: "exact" })
        .eq("user_id", user.id)
        .eq("resolved", false),
      supabase
        .from("user_exam_error_logs")
        .select("skill_id, error_type")
        .eq("user_id", user.id)
        .eq("resolved", false)
        .order("created_at", { ascending: false })
        .limit(500),
    ]);

    unresolvedErrorCount = countResult.count ?? 0;

    const skillCounts = new Map<string, number>();
    const errorTypeCounts = new Map<string, number>();
    for (const row of rowsResult.data ?? []) {
      if (row.skill_id) {
        skillCounts.set(row.skill_id, (skillCounts.get(row.skill_id) ?? 0) + 1);
      }
      if (row.error_type) {
        errorTypeCounts.set(row.error_type, (errorTypeCounts.get(row.error_type) ?? 0) + 1);
      }
    }

    for (const [skillId, count] of Array.from(skillCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 3)) {
      topErrorSkills.push({ skillId, count });
    }
    for (const [errorType, count] of Array.from(errorTypeCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 3)) {
      topErrorTypes.push({ errorType, count });
    }
  }

  const regions: ExamRegion[] = ["Global", "US", "UK", "India", "China", "Australia", "Other"];
  const regionCounts = regions
    .map((region) => ({
      region,
      count: examModules.filter((module) => module.region === region).length,
    }))
    .filter((entry) => entry.count > 0);
  const uniqueTracks = new Set(examModules.map((module) => module.track));

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
          Exam Preparation Tracks
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          Global Exam Prep Hub
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">
          Structured pathways for major entrance and high-stakes exams. Each track
          includes guided lessons, interactive practice, quiz checkpoints, and
          full mock review cycles.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <SoftCard as="article" className="border-indigo-200 bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Tracks</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900">{uniqueTracks.size}</p>
          </SoftCard>
          <SoftCard as="article" className="border-indigo-200 bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Modules</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900">{examModules.length}</p>
          </SoftCard>
          <SoftCard as="article" className="border-indigo-200 bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Regions</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900">{regionCounts.length}</p>
          </SoftCard>
        </div>
        <SoftCard className="mt-4 border-indigo-200 bg-surface p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">Error Logbook</p>
              <p className="mt-1 text-sm text-zinc-700">
                {user
                  ? `You currently have ${unresolvedErrorCount ?? 0} open exam error log item(s).`
                  : "Sign in to track and review your exam error logbook."}
              </p>
              {user && topErrorSkills.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {topErrorSkills.map((entry) => (
                    <ProgressChip
                      key={entry.skillId}
                      label={entry.skillId}
                      value={entry.count}
                      tone="warning"
                    />
                  ))}
                </div>
              ) : null}
              {user && topErrorTypes.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {topErrorTypes.map((entry) => (
                    <ProgressChip
                      key={entry.errorType}
                      label={entry.errorType}
                      value={entry.count}
                      tone="info"
                    />
                  ))}
                </div>
              ) : null}
            </div>
            {user ? (
              <Link
                href="/exam-prep/error-log"
                className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
              >
                Open Error Logbook
              </Link>
            ) : (
              <Link
                href="/auth/sign-in"
                className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
              >
                Sign In
              </Link>
            )}
          </div>
        </SoftCard>
        <div className="mt-4 flex flex-wrap gap-2">
          {regionCounts.map((entry) => (
            <ProgressChip
              key={entry.region}
              label={entry.region}
              value={entry.count}
              tone="neutral"
            />
          ))}
        </div>
      </SoftCard>

      {regions
        .map((region) => ({
          region,
          modules: examModules.filter((module) => module.region === region),
        }))
        .filter((entry) => entry.modules.length > 0)
        .map((entry) => (
          <section key={entry.region} className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-zinc-900">{entry.region}</h2>
              <p className="text-xs text-zinc-500">{entry.modules.length} track(s)</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {entry.modules.map((module) => (
                <SoftCard key={module.id} as="article" interactive className="p-5">
                  <ModuleCoverImage
                    moduleId={module.id}
                    moduleTitle={module.title}
                    fallbackSrc={module.thumbnail}
                    className="h-36 w-full rounded-xl border border-border object-cover"
                  />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-700">
                    {module.track}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">{module.title}</h3>
                  <p className="mt-2 text-sm text-zinc-700">{module.description}</p>
                  <p className="mt-3 text-xs text-zinc-500">
                    Lessons: {module.lessons.length} | Ages {module.minAge ?? "?"}-{module.maxAge ?? "?"}
                  </p>
                  {module.trackProfile?.scoreScale ? (
                    <p className="mt-1 text-xs text-zinc-500">
                      Score Scale: {module.trackProfile.scoreScale}
                    </p>
                  ) : null}
                  {module.trackProfile?.sectionOrder?.length ? (
                    <div className="mt-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Sections
                      </p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {module.trackProfile.sectionOrder.slice(0, 3).map((section) => (
                          <span
                            key={section.id}
                            className="rounded-full border border-border bg-surface-muted px-2 py-1 text-[10px] font-medium text-zinc-700"
                            title={section.focus}
                          >
                            {section.title}
                            {section.durationMinutes ? ` (${section.durationMinutes}m)` : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {module.trackProfile?.skillDomains?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {module.trackProfile.skillDomains.slice(0, 3).map((domain) => (
                        <span
                          key={domain}
                          className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-800"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {module.trackProfile?.sectionOrder?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {module.trackProfile.sectionOrder
                        .slice(0, 2)
                        .map((section) => (
                          <ProgressChip
                            key={`${module.id}-${section.id}-prio`}
                            label={section.title}
                            value={section.durationMinutes ? `${section.durationMinutes}m` : "planned"}
                            tone={durationTone(section.durationMinutes)}
                          />
                        ))}
                    </div>
                  ) : null}
                  <div className="mt-4">
                    <Link
                      href={toModulePath(module.id)}
                      className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
                    >
                      Open Track
                    </Link>
                  </div>
                </SoftCard>
              ))}
            </div>
          </section>
        ))}

      {examModules.length === 0 ? (
        <SoftCard className="border-amber-300 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            No exam-prep tracks are currently registered. Run module generation
            and sync scripts to add them.
          </p>
        </SoftCard>
      ) : null}
    </main>
  );
}
