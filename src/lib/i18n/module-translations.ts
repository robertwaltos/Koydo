import type { LearningModule, Lesson, Flashcard, InteractiveActivity, LearningAid, LessonChunk, Question } from "@/lib/modules/types";
import type { Locale } from "@/lib/i18n/translations";

/* ------------------------------------------------------------------ */
/*  Translation file loader with cache                                 */
/* ------------------------------------------------------------------ */

const translationCache = new Map<string, Record<string, string> | null>();

/**
 * Loads translation JSON for a specific module + locale.
 * Returns null if translations are unavailable.
 * Results are cached for the session.
 */
export async function loadModuleTranslations(
  moduleId: string,
  locale: Locale | string,
): Promise<Record<string, string> | null> {
  if (locale === "en") return null; // English is the source language

  const cacheKey = `${locale}:${moduleId}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey) ?? null;

  try {
    const res = await fetch(`/translations/${locale}/${moduleId}.json`);
    if (!res.ok) {
      translationCache.set(cacheKey, null);
      return null;
    }
    const data = await res.json();
    const fields: Record<string, string> = data?.fields ?? {};
    translationCache.set(cacheKey, fields);
    return fields;
  } catch {
    translationCache.set(cacheKey, null);
    return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Apply translations to a LearningModule                             */
/* ------------------------------------------------------------------ */

function t(fields: Record<string, string>, key: string, fallback: string): string {
  return fields[key] ?? fallback;
}

export function translateLesson(lesson: Lesson, lid: string, fields: Record<string, string>): Lesson {
  const translated: Lesson = {
    ...lesson,
    title: t(fields, `${lid}:title`, lesson.title),
  };

  if (lesson.objectives) {
    translated.objectives = lesson.objectives.map((obj, i) =>
      t(fields, `${lid}:objectives.${i}`, obj)
    );
  }

  if (lesson.chunks) {
    translated.chunks = lesson.chunks.map((chunk, ci): LessonChunk => ({
      ...chunk,
      title: t(fields, `${lid}:chunks.${ci}.title`, chunk.title),
      content: t(fields, `${lid}:chunks.${ci}.content`, chunk.content),
    }));
  }

  if (lesson.questions) {
    translated.questions = lesson.questions.map((q, qi): Question => ({
      ...q,
      text: t(fields, `${lid}:questions.${qi}.text`, q.text),
      hint: q.hint ? t(fields, `${lid}:questions.${qi}.hint`, q.hint) : undefined,
      explanation: q.explanation ? t(fields, `${lid}:questions.${qi}.explanation`, q.explanation) : undefined,
      imageAlt: q.imageAlt ? t(fields, `${lid}:questions.${qi}.imageAlt`, q.imageAlt) : undefined,
      options: q.options.map((opt, oi) => ({
        ...opt,
        text: t(fields, `${lid}:questions.${qi}.options.${oi}.text`, opt.text),
        imageAlt: opt.imageAlt ? t(fields, `${lid}:questions.${qi}.options.${oi}.imageAlt`, opt.imageAlt) : undefined,
      })),
    }));
  }

  if (lesson.flashcards) {
    translated.flashcards = lesson.flashcards.map((fc, fi): Flashcard => ({
      ...fc,
      front: t(fields, `${lid}:flashcards.${fi}.front`, fc.front),
      back: t(fields, `${lid}:flashcards.${fi}.back`, fc.back),
      hint: fc.hint ? t(fields, `${lid}:flashcards.${fi}.hint`, fc.hint) : undefined,
      imageAlt: fc.imageAlt ? t(fields, `${lid}:flashcards.${fi}.imageAlt`, fc.imageAlt) : undefined,
    }));
  }

  if (lesson.interactiveActivities) {
    translated.interactiveActivities = lesson.interactiveActivities.map((act, ai): InteractiveActivity => {
      const a: InteractiveActivity = { ...act };
      if (act.title) a.title = t(fields, `${lid}:interactiveActivities.${ai}.title`, act.title);
      if (act.description) a.description = t(fields, `${lid}:interactiveActivities.${ai}.description`, act.description);
      if (act.prompt) a.prompt = t(fields, `${lid}:interactiveActivities.${ai}.prompt`, act.prompt);
      if (act.instructions) {
        a.instructions = act.instructions.map((ins, ii) =>
          t(fields, `${lid}:interactiveActivities.${ai}.instructions.${ii}`, ins)
        );
      }
      if (act.buckets) {
        a.buckets = act.buckets.map((b, bi) =>
          t(fields, `${lid}:interactiveActivities.${ai}.buckets.${bi}`, b)
        );
      }
      if (act.zones) {
        a.zones = act.zones.map((z, zi) =>
          t(fields, `${lid}:interactiveActivities.${ai}.zones.${zi}`, z)
        );
      }
      if (act.items) {
        a.items = act.items.map((item, ii) => {
          if (typeof item === "string") {
            return t(fields, `${lid}:interactiveActivities.${ai}.items.${ii}`, item);
          }
          return { ...item, text: t(fields, `${lid}:interactiveActivities.${ai}.items.${ii}`, item.text) };
        });
      }
      if (act.pairs) {
        a.pairs = act.pairs.map((pair, pi) => ({
          ...pair,
          left: t(fields, `${lid}:interactiveActivities.${ai}.pairs.${pi}.left`, pair.left),
          right: t(fields, `${lid}:interactiveActivities.${ai}.pairs.${pi}.right`, pair.right),
        }));
      }
      return a;
    });
  }

  if (lesson.learningAids) {
    translated.learningAids = lesson.learningAids.map((aid, lai): LearningAid => ({
      ...aid,
      title: t(fields, `${lid}:learningAids.${lai}.title`, aid.title),
      content: t(fields, `${lid}:learningAids.${lai}.content`, aid.content),
    }));
  }

  return translated;
}

/**
 * Apply translations to a LearningModule. Returns a new object with translated strings.
 * Falls back to English for any missing translations.
 */
export function applyModuleTranslations(
  mod: LearningModule,
  fields: Record<string, string>,
): LearningModule {
  const translated: LearningModule = {
    ...mod,
    title: t(fields, `_:title`, mod.title),
    description: t(fields, `_:description`, mod.description),
  };

  if (mod.learningObjectives) {
    translated.learningObjectives = mod.learningObjectives.map((obj, i) =>
      t(fields, `_:learningObjectives.${i}`, obj)
    );
  }

  if (mod.gradeBand) {
    translated.gradeBand = t(fields, `_:gradeBand`, mod.gradeBand);
  }

  if (mod.lessons) {
    translated.lessons = mod.lessons.map((lesson, li) => {
      const lid = lesson.id || `l${li}`;
      return translateLesson(lesson, lid, fields);
    });
  }

  return translated;
}
