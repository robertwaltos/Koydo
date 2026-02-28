import { getLessonByLookupKey } from "@/lib/modules";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { buildSeedanceAnimationPrompt, buildSeedanceVideoPrompt } from "@/lib/media/seedance-prompts";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toLessonPath } from "@/lib/routing/paths";
import LessonSessionTracker from "./lesson-session-tracker";
import LessonExperience from "./lesson-experience";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  return <LessonPageContent params={params} />;
}

async function LessonPageContent({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const resolvedParams = await params;
  const resolvedLesson = getLessonByLookupKey(resolvedParams.lessonId);

  if (!resolvedLesson) {
    notFound();
  }

  const { lesson, learningModule } = resolvedLesson;
  if (resolvedParams.lessonId !== lesson.id) {
    redirect(toLessonPath(lesson.id));
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  let isAdmin = false;
  if (!userError && user) {
    const { data: profile } = await supabase
      .from("user_profiles")
      .select("is_admin")
      .eq("user_id", user.id)
      .maybeSingle();
    isAdmin = Boolean(profile?.is_admin);
  }

  const lessonImagePrompt = `Create a warm, child-friendly educational illustration for a ${learningModule.subject} lesson about ${lesson.title}. Style: clean 2D digital illustration, soft shapes, high readability.`;
  const seedanceVideoPrompt = buildSeedanceVideoPrompt(learningModule, lesson);
  const seedanceAnimationPrompt = buildSeedanceAnimationPrompt(learningModule, lesson);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-8 sm:px-6 sm:py-10">
      <LessonSessionTracker moduleId={learningModule.id} lessonId={lesson.id} />
      <SoftCard as="header" organicCorners className="overflow-hidden bg-[var(--gradient-hero)] p-6 sm:p-8">
        <Link
          href="/dashboard"
          className="ui-soft-button ui-focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-zinc-700 hover:bg-white"
        >
          <span aria-hidden>🧭</span>
          <span>Back to Dashboard</span>
        </Link>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-600">
          Adventure Path: {learningModule.subject}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {lesson.title} ✨
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <ProgressChip label="Subject" value={learningModule.subject} tone="info" />
          <ProgressChip label="Duration" value={`${lesson.duration} min`} tone="warning" />
        </div>
      </SoftCard>
      <LessonExperience
        moduleId={learningModule.id}
        subject={learningModule.subject}
        lesson={lesson}
        isAdmin={isAdmin}
        lessonImagePrompt={lessonImagePrompt}
        seedanceVideoPrompt={seedanceVideoPrompt}
        seedanceAnimationPrompt={seedanceAnimationPrompt}
      />
    </main>
  );
}
