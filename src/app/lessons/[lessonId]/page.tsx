import { getLessonByLookupKey } from "@/lib/modules";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { buildSeedanceAnimationPrompt, buildSeedanceVideoPrompt } from "@/lib/media/seedance-prompts";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toLessonPath } from "@/lib/routing/paths";
import LessonSessionTracker from "./lesson-session-tracker";
import LessonExperience from "./lesson-experience";
import OfflineLessonPackPill from "@/app/components/offline-lesson-pack-pill";

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

  const lessonIndex = learningModule.lessons.findIndex((entry) => entry.id === lesson.id);
  const nextLesson = lessonIndex >= 0 ? learningModule.lessons[lessonIndex + 1] ?? null : null;
  const nextLessonHref = nextLesson ? toLessonPath(nextLesson.id) : null;
  const offlinePackRoutes = [
    toLessonPath(lesson.id),
    "/dashboard",
    ...(nextLessonHref ? [nextLessonHref] : []),
  ];

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
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <LessonSessionTracker moduleId={learningModule.id} lessonId={lesson.id} />
      
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-6 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/40 to-cyan-100/40 pointer-events-none" />
        
        <div className="relative z-10">
          <Link
            href="/dashboard"
            className="ui-focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-white/80 bg-white/60 backdrop-blur-md px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm transition hover:bg-white hover:scale-[1.02]"
          >
            <span aria-hidden>🧭</span>
            <span>Back to Dashboard</span>
          </Link>
          
          <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-indigo-600">
            Adventure Path: {learningModule.subject}
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl drop-shadow-sm">
            {lesson.title} ✨
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-white/80 border border-white px-3 py-1.5 text-xs font-bold text-indigo-700 shadow-sm">
              📚 {learningModule.subject}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/80 border border-white px-3 py-1.5 text-xs font-bold text-amber-700 shadow-sm">
              ⏳ {lesson.duration} min
            </span>
            <OfflineLessonPackPill routes={offlinePackRoutes} compact />
          </div>
        </div>
      </header>

      <div className="w-full">
        <LessonExperience
          moduleId={learningModule.id}
          subject={learningModule.subject}
          lesson={lesson}
          isAdmin={isAdmin}
          lessonImagePrompt={lessonImagePrompt}
          seedanceVideoPrompt={seedanceVideoPrompt}
          seedanceAnimationPrompt={seedanceAnimationPrompt}
        />
      </div>
    </main>
  );
}

