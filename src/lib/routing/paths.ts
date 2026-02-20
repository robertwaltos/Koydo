export function toModulePath(moduleId: string) {
  return `/modules/${encodeURIComponent(moduleId)}`;
}

export function toLessonPath(lessonId: string) {
  return `/lessons/${encodeURIComponent(lessonId)}`;
}
