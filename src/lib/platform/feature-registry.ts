/**
 * Universal Feature Registry — Static catalog of all gated features.
 *
 * Every feature in the platform is defined here with its default toggle state,
 * paywall tier, age tier range, and app variant availability.
 *
 * The feature-gate engine (feature-gate.ts) evaluates these definitions at
 * runtime against admin DB overrides, env kill switches, the current user's
 * age tier, subscription tier, and parent overrides.
 */

import type { AgeTier } from "@/lib/safety/age-tier";

// ── App Variant ─────────────────────────────────────────────────────────────

export type AppVariant = "kids" | "teen" | "adult" | "school" | "full";

export const APP_VARIANTS: AppVariant[] = ["kids", "teen", "adult", "school", "full"];

export function getCurrentAppVariant(): AppVariant {
  const v = process.env.NEXT_PUBLIC_APP_VARIANT;
  if (v && APP_VARIANTS.includes(v as AppVariant)) return v as AppVariant;
  return "full";
}

// ── Feature IDs ─────────────────────────────────────────────────────────────

export const APP_FEATURE_IDS = [
  // --- Existing rollout features (from rollout-governance.ts) ---
  "classroom_live_mode",
  "classroom_student_paced_mode",
  "classroom_front_of_class_mode",
  "lms_google_classroom",
  "lms_lti_grade_passback",
  "ai_content_ingestion",
  "family_school_messaging",
  // --- Content & Learning (Phase 2) ---
  "readings_viewer",
  "caption_renderer",
  "accessibility_controls",
  "goal_setting",
  "contextual_scaffolding",
  "learning_profile_accommodations",
  "difficulty_calibration",
  "competency_dashboard",
  "reflection_journal",
  // --- Social & Multiplayer (Phase 3) ---
  "discussion_forum",
  "quiz_live_multiplayer",
  "assignment_student_ui",
  "collaborative_whiteboard",
  // --- Gamification & Rewards (Phase 4) ---
  "quest_system",
  "reward_store",
  "avatar_customization",
  "review_interleaving",
  "peer_comparison",
  "community_activity_feed",
  // --- Advanced Learning (Phase 5) ---
  "study_planning",
  "math_solver",
  "rubric_display",
  "question_bank_browser",
  "downloadable_resources",
  "digital_library",
  "adaptive_difficulty",
  "writing_feedback",
  "instructor_feedback",
  // --- Operational (Phase 6) ---
  "offline_exports",
  "attendance_checkin",
] as const;

export type AppFeatureId = (typeof APP_FEATURE_IDS)[number];

// ── Feature Tier ────────────────────────────────────────────────────────────

export type FeatureTier = "free" | "premium" | "parent_opt_in";

// ── Feature Category (for admin UI grouping) ────────────────────────────────

export type FeatureCategory =
  | "classroom"
  | "integration"
  | "content"
  | "learning"
  | "social"
  | "gamification"
  | "advanced"
  | "operational";

// ── Feature Definition ──────────────────────────────────────────────────────

export type FeatureDefinition = {
  id: AppFeatureId;
  /** Default enabled state (can be overridden by admin via DB) */
  enabled: boolean;
  /** Paywall tier: free, premium (requires subscription), or parent_opt_in */
  tier: FeatureTier;
  /** Minimum age tier required */
  minAgeTier: AgeTier;
  /** Maximum age tier allowed */
  maxAgeTier: AgeTier;
  /** Which app variants include this feature */
  appVariants: AppVariant[];
  /** Human-readable description for admin UI */
  description: string;
  /** Category for grouping in admin UI */
  category: FeatureCategory;
};

// ── Variant exclusion map (from plan) ───────────────────────────────────────

const KIDS_EXCLUDED: AppFeatureId[] = [
  "digital_library", "math_solver", "study_planning", "discussion_forum",
  "peer_comparison", "community_activity_feed", "writing_feedback",
  "question_bank_browser", "collaborative_whiteboard", "offline_exports",
  "attendance_checkin",
];

const TEEN_EXCLUDED: AppFeatureId[] = ["attendance_checkin", "question_bank_browser"];

const ADULT_EXCLUDED: AppFeatureId[] = [
  "quest_system", "reward_store", "avatar_customization", "attendance_checkin",
];

const SCHOOL_EXCLUDED: AppFeatureId[] = [
  "reward_store", "avatar_customization", "community_activity_feed",
];

function variantsFor(id: AppFeatureId): AppVariant[] {
  const all: AppVariant[] = ["kids", "teen", "adult", "school", "full"];
  return all.filter((v) => {
    if (v === "kids" && KIDS_EXCLUDED.includes(id)) return false;
    if (v === "teen" && TEEN_EXCLUDED.includes(id)) return false;
    if (v === "adult" && ADULT_EXCLUDED.includes(id)) return false;
    if (v === "school" && SCHOOL_EXCLUDED.includes(id)) return false;
    return true;
  });
}

// ── Static Feature Catalog ──────────────────────────────────────────────────

export const FEATURE_CATALOG: Record<AppFeatureId, FeatureDefinition> = {
  // ─── Classroom (existing rollout) ──────────────────────────────────
  classroom_live_mode: {
    id: "classroom_live_mode", enabled: false, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("classroom_live_mode"),
    description: "Live classroom mode for real-time instruction",
    category: "classroom",
  },
  classroom_student_paced_mode: {
    id: "classroom_student_paced_mode", enabled: false, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("classroom_student_paced_mode"),
    description: "Student-paced classroom mode",
    category: "classroom",
  },
  classroom_front_of_class_mode: {
    id: "classroom_front_of_class_mode", enabled: false, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("classroom_front_of_class_mode"),
    description: "Front-of-class presentation mode",
    category: "classroom",
  },

  // ─── Integrations (existing rollout) ───────────────────────────────
  lms_google_classroom: {
    id: "lms_google_classroom", enabled: false, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("lms_google_classroom"),
    description: "Google Classroom LMS integration",
    category: "integration",
  },
  lms_lti_grade_passback: {
    id: "lms_lti_grade_passback", enabled: false, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("lms_lti_grade_passback"),
    description: "LTI grade passback to external LMS",
    category: "integration",
  },
  ai_content_ingestion: {
    id: "ai_content_ingestion", enabled: false, tier: "free",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("ai_content_ingestion"),
    description: "AI-powered content ingestion pipeline",
    category: "integration",
  },
  family_school_messaging: {
    id: "family_school_messaging", enabled: false, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("family_school_messaging"),
    description: "Family-school communication channel",
    category: "integration",
  },

  // ─── Content & Learning (Phase 2) ─────────────────────────────────
  readings_viewer: {
    id: "readings_viewer", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("readings_viewer"),
    description: "Article and reading content viewer",
    category: "content",
  },
  caption_renderer: {
    id: "caption_renderer", enabled: true, tier: "free",
    minAgeTier: "little", maxAgeTier: "adult",
    appVariants: variantsFor("caption_renderer"),
    description: "Closed captions on video content",
    category: "content",
  },
  accessibility_controls: {
    id: "accessibility_controls", enabled: true, tier: "free",
    minAgeTier: "little", maxAgeTier: "adult",
    appVariants: variantsFor("accessibility_controls"),
    description: "Text size, high contrast, reduced motion, dyslexia font",
    category: "content",
  },
  goal_setting: {
    id: "goal_setting", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("goal_setting"),
    description: "Daily/weekly learning goal targets",
    category: "learning",
  },
  contextual_scaffolding: {
    id: "contextual_scaffolding", enabled: true, tier: "free",
    minAgeTier: "little", maxAgeTier: "adult",
    appVariants: variantsFor("contextual_scaffolding"),
    description: "3-tier hint system (nudge, partial, full solution)",
    category: "learning",
  },
  learning_profile_accommodations: {
    id: "learning_profile_accommodations", enabled: true, tier: "free",
    minAgeTier: "little", maxAgeTier: "adult",
    appVariants: variantsFor("learning_profile_accommodations"),
    description: "Learning accommodations (extra time, text-to-speech, etc.)",
    category: "learning",
  },
  difficulty_calibration: {
    id: "difficulty_calibration", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("difficulty_calibration"),
    description: "Manual difficulty slider in lessons",
    category: "learning",
  },
  competency_dashboard: {
    id: "competency_dashboard", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("competency_dashboard"),
    description: "Visual competency/skill graph dashboard",
    category: "learning",
  },
  reflection_journal: {
    id: "reflection_journal", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("reflection_journal"),
    description: "Post-lesson self-reflection journal entries",
    category: "learning",
  },

  // ─── Social & Multiplayer (Phase 3) ───────────────────────────────
  discussion_forum: {
    id: "discussion_forum", enabled: true, tier: "free",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("discussion_forum"),
    description: "Discussion forums with upvotes, moderation, threading",
    category: "social",
  },
  quiz_live_multiplayer: {
    id: "quiz_live_multiplayer", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("quiz_live_multiplayer"),
    description: "Real-time multiplayer quiz with live leaderboard",
    category: "social",
  },
  assignment_student_ui: {
    id: "assignment_student_ui", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("assignment_student_ui"),
    description: "Student assignment view, submission, and grading",
    category: "social",
  },
  collaborative_whiteboard: {
    id: "collaborative_whiteboard", enabled: true, tier: "premium",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("collaborative_whiteboard"),
    description: "Real-time collaborative whiteboard with presence",
    category: "social",
  },

  // ─── Gamification & Rewards (Phase 4) ─────────────────────────────
  quest_system: {
    id: "quest_system", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "senior",
    appVariants: variantsFor("quest_system"),
    description: "Daily/weekly quests with XP rewards",
    category: "gamification",
  },
  reward_store: {
    id: "reward_store", enabled: true, tier: "parent_opt_in",
    minAgeTier: "explorer", maxAgeTier: "teen",
    appVariants: variantsFor("reward_store"),
    description: "XP-based reward store for unlockable items",
    category: "gamification",
  },
  avatar_customization: {
    id: "avatar_customization", enabled: true, tier: "parent_opt_in",
    minAgeTier: "explorer", maxAgeTier: "teen",
    appVariants: variantsFor("avatar_customization"),
    description: "Avatar customizer with unlockable items from reward store",
    category: "gamification",
  },
  review_interleaving: {
    id: "review_interleaving", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("review_interleaving"),
    description: "Subject-interleaved review queue for spaced repetition",
    category: "gamification",
  },
  peer_comparison: {
    id: "peer_comparison", enabled: true, tier: "free",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("peer_comparison"),
    description: "Percentile rank comparison against peers (COPPA: teen+ only)",
    category: "gamification",
  },
  community_activity_feed: {
    id: "community_activity_feed", enabled: true, tier: "free",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("community_activity_feed"),
    description: "Social activity feed (badges, quests, level-ups)",
    category: "gamification",
  },

  // ─── Advanced Learning (Phase 5) ──────────────────────────────────
  study_planning: {
    id: "study_planning", enabled: true, tier: "premium",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("study_planning"),
    description: "Manual weekly study planner with lesson slots",
    category: "advanced",
  },
  math_solver: {
    id: "math_solver", enabled: true, tier: "premium",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("math_solver"),
    description: "AI step-by-step math solver (uses OpenAI)",
    category: "advanced",
  },
  rubric_display: {
    id: "rubric_display", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("rubric_display"),
    description: "Criteria-by-level rubric grid for assignments",
    category: "advanced",
  },
  question_bank_browser: {
    id: "question_bank_browser", enabled: true, tier: "premium",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("question_bank_browser"),
    description: "Searchable question bank for teachers/schools",
    category: "advanced",
  },
  downloadable_resources: {
    id: "downloadable_resources", enabled: true, tier: "premium",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("downloadable_resources"),
    description: "Downloadable PDFs and resources per module",
    category: "advanced",
  },
  digital_library: {
    id: "digital_library", enabled: true, tier: "premium",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("digital_library"),
    description: "Document/ebook browser extending audiobook infra",
    category: "advanced",
  },
  adaptive_difficulty: {
    id: "adaptive_difficulty", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("adaptive_difficulty"),
    description: "Real-time difficulty adjustment based on recent scores",
    category: "advanced",
  },
  writing_feedback: {
    id: "writing_feedback", enabled: true, tier: "premium",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("writing_feedback"),
    description: "AI-powered writing and grammar analysis",
    category: "advanced",
  },
  instructor_feedback: {
    id: "instructor_feedback", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("instructor_feedback"),
    description: "Teacher feedback annotations on student submissions",
    category: "advanced",
  },

  // ─── Operational (Phase 6) ────────────────────────────────────────
  offline_exports: {
    id: "offline_exports", enabled: true, tier: "premium",
    minAgeTier: "teen", maxAgeTier: "adult",
    appVariants: variantsFor("offline_exports"),
    description: "Certificate PDF generation and notes export",
    category: "operational",
  },
  attendance_checkin: {
    id: "attendance_checkin", enabled: true, tier: "free",
    minAgeTier: "explorer", maxAgeTier: "adult",
    appVariants: variantsFor("attendance_checkin"),
    description: "One-tap class attendance check-in (school variant)",
    category: "operational",
  },
};

/** Get feature definition by ID (returns undefined for unknown IDs) */
export function getFeatureDefinition(id: string): FeatureDefinition | undefined {
  return FEATURE_CATALOG[id as AppFeatureId];
}

/** All feature definitions as an array, grouped by category */
export function getFeaturesByCategory(): Record<FeatureCategory, FeatureDefinition[]> {
  const grouped: Record<FeatureCategory, FeatureDefinition[]> = {
    classroom: [],
    integration: [],
    content: [],
    learning: [],
    social: [],
    gamification: [],
    advanced: [],
    operational: [],
  };
  for (const def of Object.values(FEATURE_CATALOG)) {
    grouped[def.category].push(def);
  }
  return grouped;
}
