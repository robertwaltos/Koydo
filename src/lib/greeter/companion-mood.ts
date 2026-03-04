/**
 * Companion Mood System
 *
 * Tracks the companion's emotional state based on user interactions.
 * The mood influences greeting tone, chat personality, and animations.
 *
 * Moods decay toward "neutral" after inactivity and shift based on:
 *  - Lesson completions → excited
 *  - Streaks → proud
 *  - Long absence → missed-you
 *  - Exam prep → focused
 *  - Daily first visit → warm-welcome
 */

export type CompanionMood =
  | "neutral"
  | "excited"
  | "proud"
  | "encouraging"
  | "missed-you"
  | "focused"
  | "celebrating"
  | "warm-welcome";

export interface MoodContext {
  /** Current mood */
  mood: CompanionMood;
  /** Unix timestamp when mood was last updated */
  updatedAt: number;
  /** Reason for current mood */
  reason: string;
}

const MOOD_STORAGE_KEY = "koydo.companion.mood";
const MOOD_DECAY_MS = 30 * 60 * 1000; // 30 minutes → decay to neutral
const ABSENCE_THRESHOLD_MS = 48 * 60 * 60 * 1000; // 48 hours → "missed-you"

/** Mood-specific emoji prefixes for greeting messages */
export const MOOD_EMOJI: Record<CompanionMood, string> = {
  neutral: "😊",
  excited: "🎉",
  proud: "🌟",
  encouraging: "💪",
  "missed-you": "🥺",
  focused: "🎯",
  celebrating: "🏆",
  "warm-welcome": "👋",
};

/** Mood-specific greeting modifiers (prepended to base messages) */
export const MOOD_GREETING_PREFIX: Record<CompanionMood, string[]> = {
  neutral: [],
  excited: [
    "Woohoo! ",
    "This is amazing! ",
    "I'm so excited! ",
  ],
  proud: [
    "I'm so proud of you! ",
    "Look at you go! ",
    "You're on fire! ",
  ],
  encouraging: [
    "You can do this! ",
    "I believe in you! ",
    "Don't give up! ",
  ],
  "missed-you": [
    "I missed you so much! ",
    "You're back! I was waiting! ",
    "So happy to see you again! ",
  ],
  focused: [
    "Let's stay focused! ",
    "You're in the zone! ",
    "Concentration mode! ",
  ],
  celebrating: [
    "Let's celebrate! ",
    "What an achievement! ",
    "You earned this! ",
  ],
  "warm-welcome": [
    "Welcome! So glad you're here! ",
    "Great to see you today! ",
  ],
};

/**
 * Determine the companion's current mood based on context signals.
 */
export function computeMood(signals: {
  lastVisitTimestamp?: number;
  currentStreak?: number;
  lessonsCompletedToday?: number;
  isFirstVisitToday?: boolean;
  isExamRoute?: boolean;
}): MoodContext {
  const now = Date.now();
  const { lastVisitTimestamp, currentStreak, lessonsCompletedToday, isFirstVisitToday, isExamRoute } = signals;

  // Long absence → missed-you
  if (lastVisitTimestamp && now - lastVisitTimestamp > ABSENCE_THRESHOLD_MS) {
    return { mood: "missed-you", updatedAt: now, reason: "Returning after >48h absence" };
  }

  // Just completed a lesson this session → celebrating
  if (lessonsCompletedToday && lessonsCompletedToday > 0) {
    if (lessonsCompletedToday >= 3) {
      return { mood: "celebrating", updatedAt: now, reason: `Completed ${lessonsCompletedToday} lessons today` };
    }
    return { mood: "excited", updatedAt: now, reason: `Completed ${lessonsCompletedToday} lesson(s) today` };
  }

  // Strong streak → proud
  if (currentStreak && currentStreak >= 7) {
    return { mood: "proud", updatedAt: now, reason: `${currentStreak}-day streak` };
  }

  // Exam route → focused
  if (isExamRoute) {
    return { mood: "focused", updatedAt: now, reason: "Exam/test route detected" };
  }

  // First visit of the day → warm-welcome
  if (isFirstVisitToday) {
    return { mood: "warm-welcome", updatedAt: now, reason: "First visit today" };
  }

  // Active streak → encouraging
  if (currentStreak && currentStreak >= 2) {
    return { mood: "encouraging", updatedAt: now, reason: `${currentStreak}-day streak` };
  }

  return { mood: "neutral", updatedAt: now, reason: "Default state" };
}

/**
 * Get saved mood from localStorage, applying decay if stale.
 */
export function getSavedMood(): MoodContext {
  if (typeof window === "undefined") {
    return { mood: "neutral", updatedAt: Date.now(), reason: "SSR default" };
  }

  try {
    const raw = localStorage.getItem(MOOD_STORAGE_KEY);
    if (!raw) return { mood: "neutral", updatedAt: Date.now(), reason: "No saved mood" };

    const saved: MoodContext = JSON.parse(raw);
    // Decay to neutral after 30 minutes of inactivity
    if (Date.now() - saved.updatedAt > MOOD_DECAY_MS) {
      return { mood: "neutral", updatedAt: Date.now(), reason: "Mood decayed" };
    }
    return saved;
  } catch {
    return { mood: "neutral", updatedAt: Date.now(), reason: "Parse error" };
  }
}

/**
 * Save mood to localStorage.
 */
export function saveMood(ctx: MoodContext): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(MOOD_STORAGE_KEY, JSON.stringify(ctx));
  } catch {
    // localStorage full or blocked — ignore
  }
}

/**
 * Apply mood modifier to a greeting message.
 */
export function applyMoodToGreeting(message: string, mood: CompanionMood): string {
  const prefixes = MOOD_GREETING_PREFIX[mood];
  if (!prefixes || prefixes.length === 0) return message;

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]!;
  return prefix + message;
}
