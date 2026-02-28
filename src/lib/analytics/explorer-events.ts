"use client";

import { trackLearningEvent } from "@/lib/analytics/xapi-lite";

type ExplorerSurface = "lobby" | "topic" | "module" | "shared";

export type ExplorerAction =
  | "world_selected"
  | "question_selected"
  | "world_portal_selected"
  | "module_selected"
  | "module_lesson_selected"
  | "module_recommended_selected"
  | "pre_reader_mode_toggled"
  | "picture_choice_selected"
  | "picture_path_started"
  | "movement_adventure_selected"
  | "chant_adventure_selected"
  | "calm_moment_selected"
  | "mission_prep_sheet_selected"
  | "mission_prep_opened"
  | "mission_prep_printed";

type PrimitivePayloadValue =
  | string
  | number
  | boolean
  | null
  | Array<string | number | boolean | null>;

const EXPLORER_MODULE_ID = "explorer";
const LOBBY_LESSON_ID = "explore:lobby";

function sanitizeToken(value: string | null | undefined, fallback = "unknown") {
  const normalized = String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return normalized || fallback;
}

function getTopicLessonId(topicId: string) {
  return `explore:topic:${sanitizeToken(topicId, "unknown")}`;
}

function getModuleLessonId(moduleId: string) {
  return `explore:module:${sanitizeToken(moduleId, "unknown")}`;
}

type TrackExplorerViewInput = {
  surface: ExplorerSurface;
  topicId?: string;
  moduleId?: string;
  payload?: Record<string, PrimitivePayloadValue>;
};

export function trackExplorerView({
  surface,
  topicId,
  moduleId,
  payload,
}: TrackExplorerViewInput) {
  const lessonId =
    surface === "lobby" || surface === "shared"
      ? LOBBY_LESSON_ID
      : surface === "module"
        ? getModuleLessonId(moduleId ?? "unknown")
        : getTopicLessonId(topicId ?? "unknown");

  void trackLearningEvent({
    eventType: "lesson_viewed",
    lessonId,
    moduleId: EXPLORER_MODULE_ID,
    payload: {
      surface,
      topicId: topicId ? sanitizeToken(topicId) : null,
      moduleId: moduleId ? sanitizeToken(moduleId) : null,
      ...(payload ?? {}),
    },
  });
}

type TrackExplorerInteractionInput = {
  surface: ExplorerSurface;
  action: ExplorerAction;
  topicId?: string;
  moduleId?: string;
  choiceId?: string;
  targetTopicId?: string;
  selectedLessonId?: string;
  suggestionType?: string;
  destination?: string;
  prompt?: string;
  promptIndex?: number;
  mode?: "on" | "off";
};

export function trackExplorerInteraction({
  surface,
  action,
  topicId,
  moduleId,
  choiceId,
  targetTopicId,
  selectedLessonId,
  suggestionType,
  destination,
  prompt,
  promptIndex,
  mode,
}: TrackExplorerInteractionInput) {
  const lessonId =
    surface === "lobby" || surface === "shared"
      ? LOBBY_LESSON_ID
      : surface === "module"
        ? getModuleLessonId(moduleId ?? "unknown")
        : getTopicLessonId(topicId ?? "unknown");

  void trackLearningEvent({
    eventType: "activity_interacted",
    lessonId,
    moduleId: EXPLORER_MODULE_ID,
    payload: {
      surface,
      action,
      topicId: topicId ? sanitizeToken(topicId) : null,
      moduleId: moduleId ? sanitizeToken(moduleId) : null,
      choiceId: choiceId ? sanitizeToken(choiceId) : null,
      targetTopicId: targetTopicId ? sanitizeToken(targetTopicId) : null,
      selectedLessonId: selectedLessonId
        ? sanitizeToken(selectedLessonId)
        : null,
      suggestionType: suggestionType
        ? sanitizeToken(suggestionType)
        : null,
      destination: destination ?? null,
      prompt: prompt ?? null,
      promptIndex: typeof promptIndex === "number" ? promptIndex : null,
      mode: mode ?? null,
    },
  });
}
