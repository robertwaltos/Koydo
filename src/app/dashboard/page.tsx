import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getOnboardingRedirect } from "@/lib/compliance/onboarding";
import SignOutButton from "./sign-out-button";
import RecommendedLesson from "./recommended-lesson";
import AiCoachCard from "./ai-coach-card";
import AiTutorPanel from "./ai-tutor-panel";
import AiWeeklyPlanCard from "./ai-weekly-plan-card";
import AiRemediationWorksheetCard from "./ai-remediation-worksheet-card";
import ModuleCoverImage from "@/app/components/module-cover-image";
import { toLessonPath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";

export const dynamic = "force-dynamic";

function letterGrade(score: number) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function achievementLevel(score: number) {
  if (score >= 90) return "Super Star";
  if (score >= 80) return "Trailblazer";
  if (score >= 70) return "Rising Star";
  if (score >= 60) return "Explorer";
  return "Starter";
}

export default async function DashboardPage() {
  const learningModules = getAllLearningModules();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/auth/sign-in");
  }

  const [profileResult, progressResult, masteryResult, examErrorResult] = await Promise.all([
    supabase
      .from("user_profiles")
      .select("birth_date, parental_consent_required, parental_consent_status")
      .eq("user_id", data.user.id)
      .maybeSingle(),
    supabase
      .from("user_learning_progress")
      .select("lesson_id, next_review_at")
      .eq("user_id", data.user.id),
    supabase
      .from("user_skill_mastery")
      .select("mastery_level, attempts, correct_attempts")
      .eq("user_id", data.user.id),
    supabase
      .from("user_exam_error_logs")
      .select("id", { head: true, count: "exact" })
      .eq("user_id", data.user.id)
      .eq("resolved", false),
  ]);

  const profile = profileResult.data;
  const progressData = progressResult.data ?? [];
  const masteryData = masteryResult.data ?? [];
  const openExamErrors = Math.max(0, Number(examErrorResult.count ?? 0));

  const onboardingRedirect = getOnboardingRedirect(profile ?? null);
  if (onboardingRedirect) {
    redirect(onboardingRedirect);
  }

  const progressMap = new Map(progressData?.map((p) => [p.lesson_id, p]) ?? []);
  const completedLessons = progressMap.size;
  const averageMasteryRaw =
    masteryData.length > 0
      ? masteryData.reduce((acc, row) => acc + Number(row.mastery_level ?? 0), 0) / masteryData.length
      : 0;
  const averageMasteryPercent = Math.round(averageMasteryRaw * 100);
  const grade = letterGrade(averageMasteryPercent);
  const level = achievementLevel(averageMasteryPercent);
  const totalAttempts = masteryData.reduce((acc, row) => acc + Number(row.attempts ?? 0), 0);
  const totalCorrect = masteryData.reduce((acc, row) => acc + Number(row.correct_attempts ?? 0), 0);
  const accuracyPercent = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const starsEarned = completedLessons * 3 + Math.floor(averageMasteryPercent / 10);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Learner Dashboard</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Signed in as {data.user.email ?? data.user.id}
          </p>
        </div>
        <SignOutButton />
      </header>

      <section className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <SoftCard as="article" className="border-rose-200 bg-rose-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Achievement Level</p>
            <p className="mt-2 text-3xl font-bold">{level}</p>
            <p className="mt-1 text-xs text-zinc-500">Progress band: {grade}</p>
          </SoftCard>
          <SoftCard as="article" className="border-sky-200 bg-sky-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Mastery Score</p>
            <p className="mt-2 text-3xl font-bold">{averageMasteryPercent}%</p>
          </SoftCard>
          <SoftCard as="article" className="border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Lessons Completed</p>
            <p className="mt-2 text-3xl font-bold">{completedLessons}</p>
          </SoftCard>
          <SoftCard as="article" className="border-amber-200 bg-amber-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Stars Earned</p>
            <p className="mt-2 text-3xl font-bold">{starsEarned}</p>
            <p className="mt-1 text-xs text-zinc-500">Accuracy: {accuracyPercent}%</p>
          </SoftCard>
          <SoftCard as="article" className="border-indigo-200 bg-indigo-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Open Exam Errors</p>
            <p className="mt-2 text-3xl font-bold">{openExamErrors}</p>
            <Link href="/exam-prep/error-log" className="mt-1 inline-block text-xs font-medium text-indigo-700 hover:underline">
              Review logbook
            </Link>
          </SoftCard>
        </div>

        <RecommendedLesson />
        <AiCoachCard />
        <AiRemediationWorksheetCard />
        <AiWeeklyPlanCard />
        <AiTutorPanel />

        <h2 className="mt-4 text-xl font-semibold">Your Learning Path</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningModules.map((learningModule) => (
            <SoftCard
              key={learningModule.id}
              as="article"
              interactive
              className="border-violet-200 p-6"
            >
              <ModuleCoverImage
                moduleId={learningModule.id}
                moduleTitle={learningModule.title}
                fallbackSrc={learningModule.thumbnail}
                className="h-32 w-full rounded-lg border border-violet-100 object-cover"
              />
              <h3 className="mt-3 text-lg font-bold text-violet-900">{learningModule.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">
                {learningModule.description}
              </p>
              <div className="mt-4 border-t border-violet-100 pt-4">
                <h4 className="font-semibold">Lessons</h4>
                <ul className="mt-2 flex flex-col gap-1">
                  {learningModule.lessons.map((lesson) => {
                    const isCompleted = progressMap.has(lesson.id);
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={toLessonPath(lesson.id)}
                          className="ui-focus-ring ui-soft-button flex min-h-11 items-center justify-between rounded-2xl border border-violet-100 bg-violet-50 p-2 text-sm hover:bg-violet-100"
                        >
                          <span className="flex items-center gap-2">
                            {isCompleted && (
                              <span className="text-green-500">✔</span>
                            )}
                            {lesson.title}
                          </span>
                          <span className="text-xs text-zinc-500">
                            {lesson.duration} min
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SoftCard>
          ))}
        </div>
      </section>
    </main>
  );
}
