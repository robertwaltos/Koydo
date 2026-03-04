"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "@/lib/modules/types";
import type { Locale } from "@/lib/i18n/translations";
import { loadModuleTranslations, translateLesson } from "@/lib/i18n/module-translations";

/**
 * React hook that loads curriculum translations for the current locale
 * and applies them to a lesson + module title.
 *
 * Returns the original English content while translations load (non-blocking).
 */
export function useTranslatedLesson(
  lesson: Lesson,
  moduleId: string,
  moduleTitle: string,
  locale: Locale | string,
): { lesson: Lesson; moduleTitle: string; loading: boolean } {
  const [loaded, setLoaded] = useState<{
    moduleId: string;
    locale: string;
    fields: Record<string, string> | null;
  } | null>(null);

  useEffect(() => {
    if (locale === "en") {
      return;
    }

    let cancelled = false;

    loadModuleTranslations(moduleId, locale).then((result) => {
      if (!cancelled) {
        setLoaded({ moduleId, locale, fields: result });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [moduleId, locale]);

  const activeFields =
    locale === "en"
      ? null
      : loaded && loaded.moduleId === moduleId && loaded.locale === locale
        ? loaded.fields
        : null;

  const loading = locale !== "en" && activeFields === null;

  const translated = useMemo(() => {
    if (!activeFields) return { lesson, moduleTitle };

    const lid = lesson.id || "l0";
    const tLesson = translateLesson(lesson, lid, activeFields);
    const tModuleTitle = activeFields["_:title"] ?? moduleTitle;

    return { lesson: tLesson, moduleTitle: tModuleTitle };
  }, [activeFields, lesson, moduleTitle]);

  return { ...translated, loading };
}
