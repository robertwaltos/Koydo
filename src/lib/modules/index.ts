import type { LearningModule, Lesson } from "@/lib/modules/types";
import { moduleRegistrySchema } from "@/lib/modules/schema";
import { generatedModuleRegistry } from "@/lib/modules/generated/registry";

const parsedRegistry = moduleRegistrySchema.safeParse(generatedModuleRegistry);
if (!parsedRegistry.success) {
  throw new Error(`Invalid module registry: ${parsedRegistry.error.message}`);
}

const moduleRegistry: LearningModule[] = parsedRegistry.data;

function normalizeLookupKey(value: string) {
  try {
    return decodeURIComponent(value).trim().toLowerCase();
  } catch {
    return value.trim().toLowerCase();
  }
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAllLearningModules() {
  return moduleRegistry;
}

export function getLearningModuleById(moduleId: string) {
  return moduleRegistry.find((learningModule) => learningModule.id === moduleId) ?? null;
}

export function getLearningModuleByLookupKey(moduleKey: string) {
  const normalizedLookup = normalizeLookupKey(moduleKey);
  return (
    moduleRegistry.find((learningModule) => {
      const normalizedId = normalizeLookupKey(learningModule.id);
      const normalizedTitle = normalizeLookupKey(learningModule.title);
      const titleSlug = slugify(learningModule.title);
      return (
        normalizedId === normalizedLookup ||
        normalizedTitle === normalizedLookup ||
        titleSlug === normalizedLookup
      );
    }) ?? null
  );
}

export function getAllLessons() {
  return moduleRegistry.flatMap((learningModule) => learningModule.lessons);
}

export function getLessonById(lessonId: string): {
  lesson: Lesson;
  learningModule: LearningModule;
} | null {
  for (const learningModule of moduleRegistry) {
    const lesson = learningModule.lessons.find((entry) => entry.id === lessonId);
    if (lesson) {
      return { lesson, learningModule };
    }
  }

  return null;
}

export function getModuleRegistryCount() {
  return moduleRegistry.length;
}

export type { LearningModule, Lesson } from "@/lib/modules/types";
