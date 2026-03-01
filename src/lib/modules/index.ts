import type { LearningModule, Lesson } from "@/lib/modules/types";
import { generatedModuleRegistry } from "@/lib/modules/generated/registry";
import { GENERATED_MEDIA_ASSETS } from "@/lib/media/generated-media-assets";

// Registry is already type-checked at compile time (every catalog file
// is typed as LearningModule). Runtime Zod validation moved to the
// build-time sync-modules script to avoid parsing 300+ modules on startup.
const moduleRegistry: LearningModule[] = generatedModuleRegistry;

// Auto-mark template/scaffold modules as draft
// and fix inflated localeSupport (templates claim 10 locales but only have English)
for (const mod of moduleRegistry) {
  if (!mod.status && mod.version === "1.0.0") {
    mod.status = "draft";
    // Templates only contain English content
    if (mod.localeSupport && mod.localeSupport.length > 2) {
      mod.localeSupport = ["en"];
    }
  }
}

const generatedMediaAssets = GENERATED_MEDIA_ASSETS as Record<
  string,
  { url: string; type: string; alt: string }
>;

// Autonomously inject generated media assets into the curriculum
if (typeof generatedMediaAssets === "object" && generatedMediaAssets !== null) {
  for (const mod of moduleRegistry) {
    if (mod.lessons) {
      for (const les of mod.lessons) {
        if (Object.prototype.hasOwnProperty.call(generatedMediaAssets, les.id)) {
          const asset = generatedMediaAssets[les.id];
          if (!les.contentTiers) les.contentTiers = {};
          if (!les.contentTiers.tier1Essential) les.contentTiers.tier1Essential = {};
          
          const newAsset = {
            assetId: "gen-" + les.id,
            url: asset.url,
            type: asset.type,
            purpose: "immersive_hero",
            altText: { en: asset.alt },
          };
          
          if (asset.type.includes("video")) {
            if (!les.contentTiers.tier1Essential.videos) les.contentTiers.tier1Essential.videos = [];
            les.contentTiers.tier1Essential.videos.unshift(newAsset);
          } else {
            if (!les.contentTiers.tier1Essential.staticImages) les.contentTiers.tier1Essential.staticImages = [];
            les.contentTiers.tier1Essential.staticImages.unshift(newAsset);
          }
        }
      }
    }
  }
}


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
  return moduleRegistry.filter((m) => m.status !== "draft");
}

/** Returns every module, including drafts – for admin/debug use only */
export function getAllModulesUnfiltered() {
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

export function getLessonByLookupKey(lessonKey: string): {
  lesson: Lesson;
  learningModule: LearningModule;
} | null {
  const normalizedLookup = normalizeLookupKey(lessonKey);

  for (const learningModule of moduleRegistry) {
    for (const lesson of learningModule.lessons) {
      if (normalizeLookupKey(lesson.id) === normalizedLookup) {
        return { lesson, learningModule };
      }
    }
  }

  const scopedMatch = normalizedLookup.match(/^([^:\/]+)[:\/]([\s\S]+)$/);
  if (scopedMatch) {
    const scopedModuleId = scopedMatch[1];
    const scopedLessonLookup = scopedMatch[2];
    const targetModule = moduleRegistry.find(
      (learningModule) => normalizeLookupKey(learningModule.id) === scopedModuleId,
    );
    if (targetModule) {
      const normalizedScopedLessonLookup = normalizeLookupKey(scopedLessonLookup);
      for (const lesson of targetModule.lessons) {
        const normalizedId = normalizeLookupKey(lesson.id);
        const normalizedTitle = normalizeLookupKey(lesson.title);
        const titleSlug = slugify(lesson.title);
        if (
          normalizedId === normalizedScopedLessonLookup ||
          normalizedTitle === normalizedScopedLessonLookup ||
          titleSlug === normalizedScopedLessonLookup
        ) {
          return { lesson, learningModule: targetModule };
        }
      }
    }
  }

  const plainTitleMatches: Array<{ lesson: Lesson; learningModule: LearningModule }> = [];
  for (const learningModule of moduleRegistry) {
    for (const lesson of learningModule.lessons) {
      const normalizedTitle = normalizeLookupKey(lesson.title);
      const titleSlug = slugify(lesson.title);
      if (normalizedTitle === normalizedLookup || titleSlug === normalizedLookup) {
        plainTitleMatches.push({ lesson, learningModule });
      }
    }
  }
  if (plainTitleMatches.length === 1) {
    return plainTitleMatches[0] ?? null;
  }

  for (const learningModule of moduleRegistry) {
    const normalizedModuleId = normalizeLookupKey(learningModule.id);
    for (const lesson of learningModule.lessons) {
      const normalizedId = normalizeLookupKey(lesson.id);
      const normalizedTitle = normalizeLookupKey(lesson.title);
      const titleSlug = slugify(lesson.title);
      const scopedNormalizedTitle = `${normalizedModuleId}:${normalizedTitle}`;
      const scopedTitleSlug = `${normalizedModuleId}:${titleSlug}`;
      const scopedSlashNormalizedTitle = `${normalizedModuleId}/${normalizedTitle}`;
      const scopedSlashTitleSlug = `${normalizedModuleId}/${titleSlug}`;

      if (
        normalizedId === normalizedLookup ||
        scopedNormalizedTitle === normalizedLookup ||
        scopedTitleSlug === normalizedLookup ||
        scopedSlashNormalizedTitle === normalizedLookup ||
        scopedSlashTitleSlug === normalizedLookup
      ) {
        return { lesson, learningModule };
      }
    }
  }

  return null;
}

export function getModuleRegistryCount() {
  return moduleRegistry.length;
}

export type { LearningModule, Lesson } from "@/lib/modules/types";
