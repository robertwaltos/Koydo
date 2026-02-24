export const learningEventTypes = [
  "lesson_viewed",
  "chunk_viewed",
  "flashcard_flipped",
  "activity_interacted",
  "quiz_answered",
  "lesson_completed",
] as const;

export type LearningEventType = (typeof learningEventTypes)[number];

export type LearningEventPayload = Record<
  string,
  string | number | boolean | null | Array<string | number | boolean | null>
>;

export type LearningEventInput = {
  eventType: LearningEventType;
  lessonId: string;
  moduleId?: string;
  eventAt?: string;
  payload?: LearningEventPayload;
};
