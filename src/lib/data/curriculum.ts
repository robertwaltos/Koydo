import { getAllLearningModules } from "@/lib/modules";
import { skills } from "@/lib/modules/skills";
import type { LearningModule, Lesson, Question, Skill } from "@/lib/modules/types";

export type Module = LearningModule;

export const curriculum: Module[] = getAllLearningModules();

export { skills };
export type { Lesson, Question, Skill };
