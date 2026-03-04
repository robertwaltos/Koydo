/**
 * Greeter messages — maps current pathname to a contextual greeting message
 * for the companion widget.
 */

export interface GreeterConfig {
  message: string;
}

type PathPattern = {
  pattern: RegExp | string;
  messages: string[];
};

const PATH_MESSAGES: PathPattern[] = [
  {
    pattern: /^\/dashboard/,
    messages: [
      "Welcome back! Ready to keep the streak going? 🔥",
      "Great to see you again! What are we learning today?",
      "You're doing amazing — let's dive back in! 📚",
    ],
  },
  {
    pattern: /^\/lessons/,
    messages: [
      "You're in a lesson — nice! Let me know if you need help. 💡",
      "Learning mode activated! I'm right here if you get stuck. 🎓",
      "Focus up! This lesson is going to be great. 🚀",
    ],
  },
  {
    pattern: /^\/explore|^\/catalog/,
    messages: [
      "Exploring new topics? So exciting! 🌍",
      "There's so much to discover here! Can I help you find something? 🔍",
      "Curiosity is your superpower! What looks interesting? ✨",
    ],
  },
  {
    pattern: /^\/experience-hub/,
    messages: [
      "Time to level up with some challenges! 🎮",
      "The experience hub is where learning gets fun! Ready? 🏆",
      "Let's play and learn at the same time! 🌟",
    ],
  },
  {
    pattern: /^\/profile/,
    messages: [
      "Looking at your profile? You've come so far! 🌟",
      "Your learning journey is really impressive! Keep going! 💪",
    ],
  },
  {
    pattern: /^\/exams|^\/test/,
    messages: [
      "Exam prep time! You've totally got this. 💪",
      "Let's make sure you're fully ready! I believe in you! 🎯",
    ],
  },
  {
    pattern: /^\/audiobooks/,
    messages: [
      "Ready to listen and learn? Audiobooks are so cozy! 📖",
      "Sit back, relax, and let the knowledge flow in! 🎧",
    ],
  },
];

const DEFAULT_MESSAGES = [
  "Hi! I'm here if you need anything. 😊",
  "Hey! Let me know if I can help with anything! 💬",
  "I'm your learning buddy — always here for you! 🌟",
];

const LANDING_MESSAGES = [
  "Hi! I'm here to help you learn anything, at any age!",
];

/**
 * Maps a pathname to a route slug used for static greeting audio filenames.
 * Slugs match those in scripts/generate-greeting-audio.mjs.
 */
export function getRouteSlug(pathname: string): string {
  if (pathname === "/") return "landing";
  if (/^\/dashboard/.test(pathname)) return "dashboard";
  if (/^\/lessons/.test(pathname)) return "lessons";
  if (/^\/explore|^\/catalog/.test(pathname)) return "explore";
  if (/^\/experience-hub/.test(pathname)) return "experience-hub";
  if (/^\/profile/.test(pathname)) return "profile";
  if (/^\/exams|^\/test/.test(pathname)) return "exams";
  if (/^\/audiobooks/.test(pathname)) return "audiobooks";
  return "default";
}

/**
 * Returns the number of pre-recorded greeting variants for a given route slug.
 * Must stay in sync with scripts/generate-greeting-audio.mjs.
 */
export function getRouteMessageCount(slug: string): number {
  for (const { pattern, messages } of PATH_MESSAGES) {
    const slugForPattern = getRouteSlugFromPattern(pattern);
    if (slugForPattern === slug) return messages.length;
  }
  if (slug === "landing") return LANDING_MESSAGES.length;
  return DEFAULT_MESSAGES.length;
}

function getRouteSlugFromPattern(pattern: RegExp | string): string {
  const s = typeof pattern === "string" ? pattern : pattern.source;
  if (s.includes("dashboard")) return "dashboard";
  if (s.includes("lessons")) return "lessons";
  if (s.includes("explore")) return "explore";
  if (s.includes("experience-hub")) return "experience-hub";
  if (s.includes("profile")) return "profile";
  if (s.includes("exams")) return "exams";
  if (s.includes("audiobooks")) return "audiobooks";
  return "default";
}

function pickMessage(messages: string[], seed: number): string {
  return messages[seed % messages.length]!;
}

/**
 * Returns a contextual greeting message for the given pathname.
 * @param pathname  - current URL pathname
 * @param displayName - user's display name (unused for now, for personalisation later)
 */
export function getGreeterConfig(pathname: string, displayName: string): GreeterConfig {
  // Use displayName to personalise on first render where possible
  const name = displayName.trim();

  // Deterministic seed from pathname length + char sum to vary messages across navigation
  const seed = pathname.split("").reduce((acc, c) => acc + c.charCodeAt(0), pathname.length);

  for (const { pattern, messages } of PATH_MESSAGES) {
    const matches =
      typeof pattern === "string" ? pathname.startsWith(pattern) : pattern.test(pathname);
    if (matches) {
      const base = pickMessage(messages, seed);
      const message =
        name && Math.random() > 0.5 ? base.replace(/^(Hi|Hey|Welcome)/, `$1, ${name}`) : base;
      return { message };
    }
  }

  const base = pickMessage(DEFAULT_MESSAGES, seed);
  const message =
    name && Math.random() > 0.5 ? base.replace(/^(Hi|Hey)/, `$1, ${name}`) : base;
  return { message };
}
