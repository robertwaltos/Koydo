import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";
import ModuleCoverImage from "@/app/components/module-cover-image";
import { toModulePath } from "@/lib/routing/paths";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { type ExamRegion, getExamTrackProfileByModuleId } from "@/lib/exam/tracks";
import SoftCard from "@/app/components/ui/soft-card";
import PageHeader from "@/app/components/page-header";

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
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Exam Prep" },
        ]}
        eyebrow="Exam Preparation"
        title="Global Exam Prep Hub"
        description="Structured pathways for major entrance and high-stakes exams with guided lessons, practice, and mock review cycles."
        stats={[
          { label: "tracks", value: uniqueTracks.size },
          { label: "modules", value: examModules.length },
          { label: "regions", value: regionCounts.length },
        ]}
      >
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {regionCounts.map((entry) => (
            <a
              key={entry.region}
              href={`#region-${entry.region.toLowerCase()}`}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-surface-muted px-2.5 py-0.5 text-[11px] font-semibold text-zinc-600 transition-colors hover:bg-zinc-100"
            >
              {entry.region} <span className="ml-1 text-zinc-400">{entry.count}</span>
            </a>
          ))}
        </div>

        {user && unresolvedErrorCount != null && unresolvedErrorCount > 0 ? (
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-amber-800">
                {unresolvedErrorCount} open error{unresolvedErrorCount !== 1 ? "s" : ""} to review
              </p>
              {topErrorSkills.length > 0 ? (
                <div className="mt-1 flex flex-wrap gap-1">
                  {topErrorSkills.map((entry) => (
                    <span
                      key={entry.skillId}
                      className="rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800"
                    >
                      {entry.skillId} ({entry.count})
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <Link
              href="/exam-prep/error-log"
              className="ui-focus-ring inline-flex min-h-9 items-center rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-semibold text-amber-800 hover:bg-amber-50"
            >
              Open Logbook →
            </Link>
          </div>
        ) : null}
      </PageHeader>

      {/* Region sections */}
      {regions
        .map((region) => ({
          region,
          modules: examModules.filter((module) => module.region === region),
        }))
        .filter((entry) => entry.modules.length > 0)
        .map((entry) => (
          <section key={entry.region} id={`region-${entry.region.toLowerCase()}`} className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-zinc-900">{entry.region}</h2>
              <span className="text-xs text-zinc-500">{entry.modules.length} track{entry.modules.length !== 1 ? "s" : ""}</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {entry.modules.map((module) => (
                <SoftCard key={module.id} as="article" interactive className="p-4">
                  <ModuleCoverImage
                    moduleId={module.id}
                    moduleTitle={module.title}
                    fallbackSrc={module.thumbnail}
                    className="h-32 w-full rounded-xl border border-border object-cover"
                  />
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                    {module.track}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-zinc-900 line-clamp-2">{module.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{module.description}</p>

                  {/* Metadata row — deduplicated */}
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className="rounded-full border border-zinc-200 bg-surface-muted px-2 py-0.5 text-[10px] font-semibold text-zinc-600">
                      {module.lessons.length} lessons
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-surface-muted px-2 py-0.5 text-[10px] font-semibold text-zinc-600">
                      Ages {module.minAge ?? "?"}–{module.maxAge ?? "?"}
                    </span>
                    {module.trackProfile?.scoreScale ? (
                      <span className="rounded-full border border-zinc-200 bg-surface-muted px-2 py-0.5 text-[10px] font-semibold text-zinc-600">
                        {module.trackProfile.scoreScale}
                      </span>
                    ) : null}
                  </div>

                  {/* Skill domains (single display, not duplicated) */}
                  {module.trackProfile?.skillDomains?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {module.trackProfile.skillDomains.slice(0, 4).map((domain) => (
                        <span
                          key={domain}
                          className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-800"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-4">
                    <Link
                      href={toModulePath(module.id)}
                      className="ui-focus-ring inline-flex w-full min-h-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-sm font-bold text-indigo-800 transition-colors hover:bg-indigo-100"
                    >
                      Open Track →
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
