import { notFound } from "next/navigation";
import { getLessonByLookupKey } from "@/lib/modules";
import { getExplorerTopicById } from "@/lib/explorer/topics";
import { getWorldScene } from "@/lib/explorer/scenes";
import ExploreLessonFlow from "./explore-lesson-flow";

type PageParams = {
  lessonId: string;
};

type PageSearchParams = {
  topicId?: string;
};

export default function ExploreLessonPage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}) {
  return (
    <ExploreLessonPageContent params={params} searchParams={searchParams} />
  );
}

async function ExploreLessonPageContent({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}) {
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;

  const result = getLessonByLookupKey(resolvedParams.lessonId);
  if (!result) notFound();

  const { lesson, learningModule } = result;

  // Resolve the world theme from the topicId query param
  const topicId = resolvedSearch.topicId ?? "";
  const topic = getExplorerTopicById(topicId);
  const scene = topic ? getWorldScene(topic.id) : null;

  // Fallback theme if no topic context
  const glowColor = scene?.glowColor ?? "#7b78ff";
  const borderColor = scene?.borderColor ?? "#cccfff";
  const gradient = scene?.gradient ?? "var(--gradient-hero)";
  const badge = scene?.badge ?? "✨";
  const worldHref = topic ? `/explore/${topic.id}` : "/explore";

  // Find next lesson in the module
  const lessonIndex = learningModule.lessons.findIndex(
    (l) => l.id === lesson.id,
  );
  const nextLesson = learningModule.lessons[lessonIndex + 1] ?? null;
  const nextLessonHref = nextLesson
    ? `/explore/learn/${encodeURIComponent(nextLesson.id)}${topicId ? `?topicId=${encodeURIComponent(topicId)}` : ""}`
    : null;

  return (
    <ExploreLessonFlow
      lesson={lesson}
      moduleId={learningModule.id}
      moduleTitle={learningModule.title}
      subject={learningModule.subject}
      glowColor={glowColor}
      borderColor={borderColor}
      gradient={gradient}
      badge={badge}
      worldHref={worldHref}
      nextLessonHref={nextLessonHref}
    />
  );
}
