export function toModulePath(moduleId: string) {
  return `/modules/${encodeURIComponent(moduleId)}`;
}

export type ModuleCatalogSortKey = "title" | "lessons" | "age" | "difficulty";

export type ModuleCatalogPathOptions = {
  query?: string;
  subject?: string;
  difficulty?: string;
  sort?: ModuleCatalogSortKey;
  direction?: "asc" | "desc";
};

export function toModuleCatalogPath(options?: ModuleCatalogPathOptions) {
  const params = new URLSearchParams();
  if (options?.query?.trim()) {
    params.set("q", options.query.trim());
  }
  if (options?.subject?.trim()) {
    params.set("subject", options.subject.trim());
  }
  if (options?.difficulty?.trim()) {
    params.set("difficulty", options.difficulty.trim());
  }
  if (options?.sort) {
    params.set("sort", options.sort);
  }
  if (options?.direction) {
    params.set("dir", options.direction);
  }

  const queryString = params.toString();
  return queryString ? `/modules?${queryString}` : "/modules";
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
