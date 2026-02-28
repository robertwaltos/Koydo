export function toModulePath(moduleId: string) {
  return `/modules/${encodeURIComponent(moduleId)}`;
}

export function toLessonPath(lessonId: string) {
  return `/lessons/${encodeURIComponent(lessonId)}`;
}

export function toExploreModulePath(moduleId: string, topicId?: string) {
  const base = `/explore/module/${encodeURIComponent(moduleId)}`;
  return topicId ? `${base}?topicId=${encodeURIComponent(topicId)}` : base;
}

export function toExploreLessonPath(lessonId: string, topicId?: string) {
  const base = `/explore/learn/${encodeURIComponent(lessonId)}`;
  return topicId ? `${base}?topicId=${encodeURIComponent(topicId)}` : base;
}

export function toTestingCatalogPath() {
  return "/testing";
}

export function toTestingExamPath(examId: string, mode?: "sample" | "full") {
  const base = `/testing/${encodeURIComponent(examId)}`;
  if (!mode) return base;
  return `${base}?mode=${encodeURIComponent(mode)}`;
}

export function toTestingResultPath(attemptId: string) {
  return `/testing/results/${encodeURIComponent(attemptId)}`;
}
