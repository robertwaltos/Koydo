import type { LearningModule, Lesson } from "@/lib/modules/types";
import { moduleRegistrySchema } from "@/lib/modules/schema";
import { generatedModuleRegistry } from "@/lib/modules/generated/registry";

const parsedRegistry = moduleRegistrySchema.safeParse(generatedModuleRegistry);
if (!parsedRegistry.success) {
  throw new Error(`Invalid module registry: ${parsedRegistry.error.message}`);
}

const moduleRegistry: LearningModule[] = parsedRegistry.data;

export function getAllLearningModules() {
  return moduleRegistry;
}

export function getLearningModuleById(moduleId: string) {
  return moduleRegistry.find((learningModule) => learningModule.id === moduleId) ?? null;
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
