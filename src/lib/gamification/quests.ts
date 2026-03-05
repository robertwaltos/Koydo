/**
 * Quest System — Templates and progress evaluation for daily/weekly quests.
 *
 * Quests are short-lived goals (daily/weekly) that award XP on completion.
 * They differ from learning goals in that they're system-assigned, varied,
 * and designed to encourage exploration of different features.
 */

export type QuestFrequency = "daily" | "weekly";
export type QuestStatus = "active" | "completed" | "expired";

export type QuestTemplate = {
  id: string;
  title: string;
  description: string;
  frequency: QuestFrequency;
  targetCount: number;
  xpReward: number;
  /** The event type to count (e.g., "lesson_completed", "quiz_passed") */
  eventType: string;
  /** Optional subject filter */
  subject?: string;
};

export type QuestProgress = {
  id: string;
  questTemplateId: string;
  profileId: string;
  currentCount: number;
  targetCount: number;
  status: QuestStatus;
  xpReward: number;
  startedAt: string;
  completedAt: string | null;
};

// ── Quest Templates ─────────────────────────────────────────────────────────

export const DAILY_QUEST_TEMPLATES: QuestTemplate[] = [
  { id: "d_complete_3_lessons", title: "Lesson Streak", description: "Complete 3 lessons", frequency: "daily", targetCount: 3, xpReward: 50, eventType: "lesson_completed" },
  { id: "d_pass_quiz", title: "Quiz Champion", description: "Pass a quiz with 80%+", frequency: "daily", targetCount: 1, xpReward: 30, eventType: "quiz_passed" },
  { id: "d_earn_100xp", title: "XP Hunter", description: "Earn 100 XP today", frequency: "daily", targetCount: 100, xpReward: 25, eventType: "xp_earned" },
  { id: "d_practice_pronunciation", title: "Voice Practice", description: "Complete 5 pronunciation attempts", frequency: "daily", targetCount: 5, xpReward: 40, eventType: "pronunciation_attempt" },
  { id: "d_read_article", title: "Bookworm", description: "Read an article", frequency: "daily", targetCount: 1, xpReward: 20, eventType: "reading_completed" },
  { id: "d_write_reflection", title: "Deep Thinker", description: "Write a journal reflection", frequency: "daily", targetCount: 1, xpReward: 30, eventType: "journal_entry" },
];

export const WEEKLY_QUEST_TEMPLATES: QuestTemplate[] = [
  { id: "w_complete_15_lessons", title: "Weekly Scholar", description: "Complete 15 lessons this week", frequency: "weekly", targetCount: 15, xpReward: 200, eventType: "lesson_completed" },
  { id: "w_try_3_subjects", title: "Explorer", description: "Study 3 different subjects", frequency: "weekly", targetCount: 3, xpReward: 150, eventType: "unique_subject" },
  { id: "w_7_day_streak", title: "Consistency King", description: "Log in 7 days in a row", frequency: "weekly", targetCount: 7, xpReward: 300, eventType: "daily_login" },
  { id: "w_earn_500xp", title: "XP Marathon", description: "Earn 500 XP this week", frequency: "weekly", targetCount: 500, xpReward: 100, eventType: "xp_earned" },
];

/**
 * Select random quests for a new period (2 daily + 1 weekly).
 */
export function selectQuestsForPeriod(): { daily: QuestTemplate[]; weekly: QuestTemplate[] } {
  const shuffledDaily = [...DAILY_QUEST_TEMPLATES].sort(() => Math.random() - 0.5);
  const shuffledWeekly = [...WEEKLY_QUEST_TEMPLATES].sort(() => Math.random() - 0.5);
  return {
    daily: shuffledDaily.slice(0, 2),
    weekly: shuffledWeekly.slice(0, 1),
  };
}

/**
 * Check if a quest is complete.
 */
export function isQuestComplete(progress: QuestProgress): boolean {
  return progress.currentCount >= progress.targetCount;
}

/**
 * Calculate completion percentage.
 */
export function questCompletionPct(progress: QuestProgress): number {
  return Math.min(100, Math.round((progress.currentCount / progress.targetCount) * 100));
}
