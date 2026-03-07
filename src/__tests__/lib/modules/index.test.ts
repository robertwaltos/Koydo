import { describe, it, expect } from "vitest";
import {
  getAllLearningModules,
  getAllModulesUnfiltered,
  getLearningModuleById,
  getLessonById,
  getLessonByLookupKey,
  getModuleRegistryCount,
} from "@/lib/modules";

describe("Module Registry", () => {
  it("loads modules from the generated registry", () => {
    const count = getModuleRegistryCount();
    expect(count).toBeGreaterThan(100);
  });

  it("getAllLearningModules excludes draft modules", () => {
    const published = getAllLearningModules();
    const all = getAllModulesUnfiltered();
    // Some modules are draft (version 1.0.0 with no explicit status)
    expect(published.length).toBeLessThanOrEqual(all.length);
    for (const mod of published) {
      expect(mod.status).not.toBe("draft");
    }
  });

  it("every module has required fields", () => {
    const all = getAllModulesUnfiltered();
    for (const mod of all) {
      expect(mod.id).toBeTruthy();
      expect(mod.title).toBeTruthy();
      expect(mod.subject).toBeTruthy();
      expect(mod.description).toBeTruthy();
      expect(Array.isArray(mod.lessons)).toBe(true);
    }
  });

  it("getLearningModuleById returns correct module", () => {
    const all = getAllModulesUnfiltered();
    const first = all[0];
    const found = getLearningModuleById(first.id);
    expect(found).not.toBeNull();
    expect(found!.id).toBe(first.id);
    expect(found!.title).toBe(first.title);
  });

  it("getLearningModuleById returns null for unknown id", () => {
    expect(getLearningModuleById("nonexistent-module-xyz")).toBeNull();
  });
});

describe("Lesson Lookup", () => {
  it("getLessonById returns lesson and parent module", () => {
    const modules = getAllModulesUnfiltered();
    const moduleWithLessons = modules.find((m) => m.lessons.length > 0);
    expect(moduleWithLessons).toBeTruthy();

    const lesson = moduleWithLessons!.lessons[0];
    const result = getLessonById(lesson.id);
    expect(result).not.toBeNull();
    expect(result!.lesson.id).toBe(lesson.id);
    expect(result!.learningModule.id).toBe(moduleWithLessons!.id);
  });

  it("getLessonById returns null for unknown lesson", () => {
    expect(getLessonById("nonexistent-lesson-xyz")).toBeNull();
  });

  it("getLessonByLookupKey finds by exact id", () => {
    const modules = getAllModulesUnfiltered();
    const moduleWithLessons = modules.find((m) => m.lessons.length > 0);
    const lesson = moduleWithLessons!.lessons[0];
    const result = getLessonByLookupKey(lesson.id);
    expect(result).not.toBeNull();
    expect(result!.lesson.id).toBe(lesson.id);
  });

  it("getLessonByLookupKey is case-insensitive", () => {
    const modules = getAllModulesUnfiltered();
    const moduleWithLessons = modules.find((m) => m.lessons.length > 0);
    const lesson = moduleWithLessons!.lessons[0];
    const result = getLessonByLookupKey(lesson.id.toUpperCase());
    expect(result).not.toBeNull();
    expect(result!.lesson.id).toBe(lesson.id);
  });

  it("every lesson has an id and title", () => {
    const modules = getAllModulesUnfiltered();
    for (const mod of modules) {
      for (const lesson of mod.lessons) {
        expect(lesson.id).toBeTruthy();
        expect(lesson.title).toBeTruthy();
      }
    }
  });
});
