import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";
import { buildAdaptiveRemediationQueue } from "@/lib/exam/remediation-queue";
import ErrorLogClient from "./error-log-client";
import { toLessonPath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

function priorityTone(
  priority: "critical" | "high" | "medium" | "low",
): "warning" | "info" | "success" | "neutral" {
  if (priority === "critical" || priority === "high") return "warning";
  if (priority === "medium") return "info";
  if (priority === "low") return "success";
  return "neutral";
}

export default async function ExamErrorLogPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const [rowsResult, unresolvedResult, progressResult, masteryResult] = await Promise.all([
    supabase
      .from("user_exam_error_logs")
      .select(
        "id,module_id,lesson_id,question_id,skill_id,error_type,selected_option_id,correct_option_id,question_text,notes,resolved,resolved_at,created_at,updated_at",
      )
      .eq("user_id", user.id)
      .order("resolved", { ascending: true })
      .order("created_at", { ascending: false })
      .limit(250),
    supabase
      .from("user_exam_error_logs")
      .select("lesson_id,skill_id,error_type,created_at")
      .eq("user_id", user.id)
      .eq("resolved", false)
      .order("created_at", { ascending: false })
      .limit(1000),
    supabase
      .from("user_learning_progress")
      .select("lesson_id,next_review_at")
      .eq("user_id", user.id),
    supabase
      .from("user_skill_mastery")
      .select("skill_id,mastery_level")
      .eq("user_id", user.id),
  ]);

  const firstError =
    rowsResult.error ?? unresolvedResult.error ?? progressResult.error ?? masteryResult.error ?? null;
  if (firstError) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10">
        <Link
          href="/exam-prep"
          className="ui-focus-ring inline-flex w-fit rounded-full px-2 py-1 text-sm text-zinc-700 hover:underline"
        >
          &larr; Back to Exam Prep
        </Link>
        <SoftCard className="border-rose-200 bg-rose-50 px-4 py-3">
          <p className="text-sm text-rose-700">
            Unable to load error logbook: {firstError.message}
          </p>
        </SoftCard>
      </main>
    );
  }

  const safeRows = rowsResult.data ?? [];
  const openCount = safeRows.filter((row) => !row.resolved).length;
  const resolvedCount = safeRows.length - openCount;
  const impactedLessons = new Set(safeRows.map((row) => row.lesson_id)).size;
  const learningModules = getAllLearningModules();
  const remediation = buildAdaptiveRemediationQueue({
    learningModules,
    progressRows: progressResult.data ?? [],
    unresolvedErrors: unresolvedResult.data ?? [],
    masteryRows: masteryResult.data ?? [],
    maxItems: 10,
  });
  const remediationQueue = remediation.queue;
  const priorityCounts = remediation.summary.priorityCounts;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-5">
        <Link
          href="/exam-prep"
          className="ui-focus-ring inline-flex w-fit rounded-full px-2 py-1 text-sm text-zinc-700 hover:underline"
        >
          &larr; Back to Exam Prep
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-900">Exam Error Logbook</h1>
        <p className="mt-1 text-sm text-zinc-700">
          Review missed questions, mark resolved items, and focus your next
          revision cycle.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <SoftCard as="article" className="border-amber-200 bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Open Errors</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900">{openCount}</p>
          </SoftCard>
          <SoftCard as="article" className="border-emerald-200 bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Resolved</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900">{resolvedCount}</p>
          </SoftCard>
          <SoftCard as="article" className="border-sky-200 bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Impacted Lessons</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900">{impactedLessons}</p>
          </SoftCard>
        </div>
      </SoftCard>

      <SoftCard as="section" className="border-sky-200 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Adaptive Remediation Queue
            </p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900">What to review next</h2>
            <p className="mt-1 text-sm text-zinc-700">
              Sequenced using open-error recurrence, weak-skill overlap, and
              spaced-review timing.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ProgressChip label="Critical" value={priorityCounts.critical} tone="warning" />
            <ProgressChip label="High" value={priorityCounts.high} tone="warning" />
            <ProgressChip label="Medium" value={priorityCounts.medium} tone="info" />
            <ProgressChip label="Low" value={priorityCounts.low} tone="success" />
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {remediationQueue.length === 0 ? (
            <SoftCard className="border-border bg-surface-muted px-3 py-2">
              <p className="text-sm text-zinc-700">
                No remediation queue items right now. Keep practicing and revisit
                when new errors are logged.
              </p>
            </SoftCard>
          ) : null}
          {remediationQueue.map((item) => (
            <SoftCard
              key={item.lessonId}
              as="article"
              className="border-border bg-surface-muted p-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <Link
                    href={toLessonPath(item.lessonId)}
                    className="ui-focus-ring rounded px-1 text-sm font-semibold text-zinc-900 hover:underline"
                  >
                    {item.lessonTitle}
                  </Link>
                  <p className="text-xs text-zinc-600">{item.moduleTitle}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <ProgressChip
                    label="Priority"
                    value={item.priority}
                    tone={priorityTone(item.priority)}
                  />
                  <ProgressChip label="Score" value={item.urgencyScore} tone="info" />
                </div>
              </div>
              <p className="mt-2 text-xs text-zinc-700">{item.reason}</p>
              <p className="mt-1 text-xs text-zinc-600">Focus: {item.suggestedFocus}</p>
            </SoftCard>
          ))}
        </div>
      </SoftCard>

      <ErrorLogClient initialRows={safeRows} />
    </main>
  );
}
