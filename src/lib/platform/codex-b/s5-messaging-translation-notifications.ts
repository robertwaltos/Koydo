import { z } from "zod";

// S5 tickets: B-B01, B-B02, B-B03

export const messageThreadSchema = z.object({
  threadId: z.string().trim().min(1).max(120),
  organizationId: z.string().trim().min(1).max(80),
  participantIds: z.array(z.string().trim().min(1).max(80)).min(2).max(200),
  createdAt: z.string().datetime(),
});

export type MessageThread = z.infer<typeof messageThreadSchema>;

export const messageEntrySchema = z.object({
  messageId: z.string().trim().min(1).max(120),
  threadId: z.string().trim().min(1).max(120),
  senderId: z.string().trim().min(1).max(80),
  body: z.string().trim().min(1).max(4000),
  createdAt: z.string().datetime(),
  readByUserIds: z.array(z.string().trim().min(1).max(80)).max(200).default([]),
});

export type MessageEntry = z.infer<typeof messageEntrySchema>;

export function markMessageRead(message: MessageEntry, userId: string) {
  const readSet = new Set(message.readByUserIds);
  readSet.add(userId);
  return {
    ...message,
    readByUserIds: Array.from(readSet),
  };
}

const blockedPatterns = [
  /(?:\bkill\b|\bself\s*harm\b)/i,
  /(?:https?:\/\/\S+)/i,
  /(?:\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b)/i,
  /(?:\b\S+@\S+\.\S+\b)/i,
];

export function applyMessagingSafetyFilters(text: string) {
  const trimmed = text.trim();
  const violations = blockedPatterns
    .map((pattern, index) => (pattern.test(trimmed) ? `rule_${index + 1}` : null))
    .filter((value): value is string => Boolean(value));

  return {
    allowed: violations.length === 0,
    violations,
    sanitizedText: trimmed.replace(/\s+/g, " "),
  };
}

export type TranslationJobInput = {
  sourceLanguage: string;
  targetLanguage: string;
  text: string;
};

export function buildTranslationJob(input: TranslationJobInput) {
  const safe = applyMessagingSafetyFilters(input.text);
  return {
    canTranslate: safe.allowed,
    sourceLanguage: input.sourceLanguage.toLowerCase(),
    targetLanguage: input.targetLanguage.toLowerCase(),
    text: safe.sanitizedText,
    blockedBy: safe.violations,
  };
}

export type NotificationFanoutTarget = {
  userId: string;
  channels: Array<"in_app" | "email" | "sms" | "push">;
};

export function planNotificationFanout(input: {
  eventType: "thread_created" | "message_created" | "announcement";
  targets: readonly NotificationFanoutTarget[];
}) {
  const jobs = input.targets.flatMap((target) =>
    target.channels.map((channel) => ({
      channel,
      userId: target.userId,
      eventType: input.eventType,
    })),
  );

  return {
    totalTargets: input.targets.length,
    totalJobs: jobs.length,
    jobs,
  };
}
