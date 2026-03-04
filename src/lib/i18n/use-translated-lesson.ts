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
  const [fields, setFields] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(locale !== "en");

  useEffect(() => {
    if (locale === "en") {
      setFields(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    loadModuleTranslations(moduleId, locale).then((result) => {
      if (!cancelled) {
        setFields(result);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [moduleId, locale]);

  const translated = useMemo(() => {
    if (!fields) return { lesson, moduleTitle };

    const lid = lesson.id || "l0";
    const tLesson = translateLesson(lesson, lid, fields);
    const tModuleTitle = fields["_:title"] ?? moduleTitle;

    return { lesson: tLesson, moduleTitle: tModuleTitle };
  }, [lesson, moduleTitle, fields]);

  return { ...translated, loading };
}
