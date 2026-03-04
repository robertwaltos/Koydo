export const CLASSROOM_DELIVERY_MODES = [
  "live",
  "student_paced",
  "front_of_class",
] as const;

export type ClassroomDeliveryMode = (typeof CLASSROOM_DELIVERY_MODES)[number];

export const CLASSROOM_SESSION_STATUSES = [
  "draft",
  "scheduled",
  "live",
  "paused",
  "ended",
] as const;

export type ClassroomSessionStatus = (typeof CLASSROOM_SESSION_STATUSES)[number];

export const CLASSROOM_SESSION_ACTIONS = [
  "save",
  "start",
  "pause",
  "resume",
  "end",
  "reset",
] as const;

export type ClassroomSessionAction = (typeof CLASSROOM_SESSION_ACTIONS)[number];

export const CLASSROOM_DELIVERY_MODE_LABELS: Record<ClassroomDeliveryMode, string> = {
  live: "Live",
  student_paced: "Student-Paced",
  front_of_class: "Front-of-Class",
};

export const CLASSROOM_SESSION_STATUS_LABELS: Record<ClassroomSessionStatus, string> = {
  draft: "Draft",
  scheduled: "Scheduled",
  live: "Live",
  paused: "Paused",
  ended: "Ended",
};

export function applySessionStatusTransition(params: {
  currentStatus: ClassroomSessionStatus;
  action: ClassroomSessionAction;
  nowIso: string;
  currentStartedAt: string | null;
  currentEndedAt: string | null;
}) {
  const { action, currentStatus, nowIso, currentStartedAt, currentEndedAt } = params;

  switch (action) {
    case "save":
      return {
        nextStatus: currentStatus,
        startedAt: currentStartedAt,
        endedAt: currentStatus === "ended" ? currentEndedAt ?? nowIso : null,
      };
    case "start":
      return {
        nextStatus: "live" as const,
        startedAt: currentStartedAt ?? nowIso,
        endedAt: null,
      };
    case "pause":
      return {
        nextStatus: "paused" as const,
        startedAt: currentStartedAt ?? nowIso,
        endedAt: null,
      };
    case "resume":
      return {
        nextStatus: "live" as const,
        startedAt: currentStartedAt ?? nowIso,
        endedAt: null,
      };
    case "end":
      return {
        nextStatus: "ended" as const,
        startedAt: currentStartedAt ?? nowIso,
        endedAt: nowIso,
      };
    case "reset":
      return {
        nextStatus: "draft" as const,
        startedAt: null,
        endedAt: null,
      };
    default:
      return {
        nextStatus: currentStatus,
        startedAt: currentStartedAt,
        endedAt: currentEndedAt,
      };
  }
}
