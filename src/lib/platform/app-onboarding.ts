/**
 * Per-App Onboarding Configuration
 *
 * Each micro-app has a distinct onboarding flow to satisfy Apple Guideline 4.3
 * (Spam — apps must have genuinely differentiated user experiences).
 */

import { getAppId } from "@/lib/platform/app-manifest";

export type OnboardingStep =
  | "age_check"
  | "parent_gate"
  | "avatar_pick"
  | "first_lesson"
  | "target_score"
  | "test_date"
  | "diagnostic"
  | "study_plan"
  | "subject_pick"
  | "skill_level"
  | "welcome"
  | "game_tutorial";

export type OnboardingTheme = "playful" | "focused" | "professional" | "energetic" | "standard";

export type OnboardingConfig = {
  steps: OnboardingStep[];
  theme: OnboardingTheme;
  heroTitle: string;
  heroSubtitle: string;
  skipAllowed: boolean;
};

const APP_ONBOARDING: Record<string, OnboardingConfig> = {
  koydo_main: {
    steps: ["welcome", "age_check", "subject_pick", "diagnostic"],
    theme: "standard",
    heroTitle: "Welcome to Koydo",
    heroSubtitle: "Your universal learning companion",
    skipAllowed: true,
  },
  koydo_junior: {
    steps: ["age_check", "parent_gate", "avatar_pick", "first_lesson"],
    theme: "playful",
    heroTitle: "Hi there, explorer!",
    heroSubtitle: "Let's start learning together",
    skipAllowed: false,
  },
  koydo_sat: {
    steps: ["target_score", "test_date", "diagnostic", "study_plan"],
    theme: "focused",
    heroTitle: "SAT Prep starts here",
    heroSubtitle: "Set your target and build your study plan",
    skipAllowed: false,
  },
  koydo_finance: {
    steps: ["welcome", "skill_level", "subject_pick", "diagnostic"],
    theme: "professional",
    heroTitle: "Master Finance & Accounting",
    heroSubtitle: "Professional-grade learning for your career",
    skipAllowed: true,
  },
  koydo_university: {
    steps: ["welcome", "target_score", "test_date", "study_plan"],
    theme: "professional",
    heroTitle: "Koydo University",
    heroSubtitle: "Exam prep and professional upskilling in one workspace",
    skipAllowed: true,
  },
  koydo_math: {
    steps: ["welcome", "age_check", "skill_level", "diagnostic"],
    theme: "focused",
    heroTitle: "Math Forge",
    heroSubtitle: "Sharpen your math skills from basics to advanced",
    skipAllowed: true,
  },
  koydo_cdl: {
    steps: ["welcome", "skill_level", "subject_pick", "diagnostic"],
    theme: "focused",
    heroTitle: "Pass Your CDL Test",
    heroSubtitle: "Study guides, practice tests, and endorsement prep",
    skipAllowed: false,
  },
  koydo_trades: {
    steps: ["welcome", "skill_level", "subject_pick", "diagnostic"],
    theme: "standard",
    heroTitle: "Master Your Trade",
    heroSubtitle: "Hands-on learning for skilled professionals",
    skipAllowed: true,
  },
  koydo_stem: {
    steps: ["welcome", "age_check", "skill_level", "subject_pick"],
    theme: "focused",
    heroTitle: "Welcome to STEM Lab",
    heroSubtitle: "Code, build, and explore the future",
    skipAllowed: true,
  },
  koydo_arena: {
    steps: ["welcome", "avatar_pick", "game_tutorial"],
    theme: "energetic",
    heroTitle: "Welcome to the Arena",
    heroSubtitle: "Challenge yourself with educational games",
    skipAllowed: true,
  },
  koydo_neuro: {
    steps: ["welcome", "age_check", "skill_level", "diagnostic"],
    theme: "focused",
    heroTitle: "Train Your Brain",
    heroSubtitle: "Science-backed exercises for memory, logic, and focus",
    skipAllowed: true,
  },

  // ── Regional variants ──────────────────────────────────────────────────────
  koydo_math_es: {
    steps: ["welcome", "age_check", "skill_level", "diagnostic"],
    theme: "focused",
    heroTitle: "Matemáticas para todos",
    heroSubtitle: "Domina las matemáticas desde primaria hasta preparatoria",
    skipAllowed: true,
  },
  koydo_exam_jp: {
    steps: ["target_score", "test_date", "diagnostic", "study_plan"],
    theme: "focused",
    heroTitle: "受験対策を始めよう",
    heroSubtitle: "目標スコアを設定して、学習プランを作成しましょう",
    skipAllowed: false,
  },
  koydo_junior_de: {
    steps: ["age_check", "parent_gate", "avatar_pick", "first_lesson"],
    theme: "playful",
    heroTitle: "Hallo, kleiner Entdecker!",
    heroSubtitle: "Lass uns zusammen lernen",
    skipAllowed: false,
  },
  koydo_ar: {
    steps: ["welcome", "age_check", "subject_pick", "diagnostic"],
    theme: "standard",
    heroTitle: "تعلم أي شيء",
    heroSubtitle: "أكثر من 800 درس تعليمي لجميع الأعمار",
    skipAllowed: true,
  },
  koydo_kr: {
    steps: ["welcome", "age_check", "skill_level", "diagnostic"],
    theme: "focused",
    heroTitle: "효과적으로 공부하세요",
    heroSubtitle: "수학, 과학, 코딩을 재미있게 배우세요",
    skipAllowed: true,
  },
  koydo_hi: {
    steps: ["welcome", "age_check", "subject_pick", "diagnostic"],
    theme: "standard",
    heroTitle: "कुछ भी सीखें",
    heroSubtitle: "सभी उम्र के लिए 800+ पाठ",
    skipAllowed: true,
  },
  koydo_math_zh: {
    steps: ["welcome", "age_check", "skill_level", "diagnostic"],
    theme: "focused",
    heroTitle: "数学学习平台",
    heroSubtitle: "从小学到高中的数学学习",
    skipAllowed: true,
  },
};

export function getOnboardingConfig(appId?: string): OnboardingConfig {
  const id = appId ?? getAppId();
  return APP_ONBOARDING[id] ?? APP_ONBOARDING.koydo_main;
}

/** Navigation layout varies per micro-app for Apple 4.3 compliance */
export type AppNavLayout = "full" | "icon_tabs" | "exam_dashboard" | "sidebar" | "game_grid";

const APP_NAV_LAYOUTS: Record<string, AppNavLayout> = {
  koydo_main: "full",
  koydo_junior: "icon_tabs",
  koydo_sat: "exam_dashboard",
  koydo_finance: "sidebar",
  koydo_university: "sidebar",
  koydo_math: "full",
  koydo_arena: "game_grid",
  koydo_cdl: "sidebar",
  koydo_trades: "sidebar",
  koydo_stem: "sidebar",
  koydo_neuro: "sidebar",
  // Regional variants inherit parent layout
  koydo_math_es: "full",
  koydo_exam_jp: "exam_dashboard",
  koydo_junior_de: "icon_tabs",
  koydo_ar: "full",
  koydo_kr: "full",
  koydo_hi: "full",
  koydo_math_zh: "full",
};

export function getNavLayout(appId?: string): AppNavLayout {
  const id = appId ?? getAppId();
  return APP_NAV_LAYOUTS[id] ?? "full";
}

/** Per-app home page hero content */
export type AppHeroConfig = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  showVoicePicker: boolean;
  showStageNav: boolean;
};

const APP_HERO_CONFIGS: Record<string, AppHeroConfig> = {
  koydo_main: {
    title: "Learn anything, at any age",
    subtitle: "800+ modules across every subject. 100% free.",
    ctaLabel: "Start Learning",
    ctaHref: "/explore",
    showVoicePicker: true,
    showStageNav: true,
  },
  koydo_junior: {
    title: "Learning is an adventure!",
    subtitle: "Fun lessons in Math, Reading, and Science for ages 3-8",
    ctaLabel: "Let's Go!",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: false,
  },
  koydo_sat: {
    title: "Ace your SAT",
    subtitle: "Personalized study plans, practice tests, and score tracking",
    ctaLabel: "Start Prep",
    ctaHref: "/student/onboarding",
    showVoicePicker: false,
    showStageNav: false,
  },
  koydo_finance: {
    title: "Finance & Accounting Mastery",
    subtitle: "From fundamentals to CPA-level content",
    ctaLabel: "Browse Courses",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: false,
  },
  koydo_university: {
    title: "Koydo University",
    subtitle: "High-stakes exam prep and career acceleration for adult learners",
    ctaLabel: "Open Dashboard",
    ctaHref: "/dashboard",
    showVoicePicker: false,
    showStageNav: false,
  },
  koydo_math: {
    title: "Math Forge",
    subtitle: "Build unshakeable math skills from K-12 and beyond",
    ctaLabel: "Start Learning",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: true,
  },
  koydo_arena: {
    title: "Game On!",
    subtitle: "Educational games that make learning irresistible",
    ctaLabel: "Play Now",
    ctaHref: "/games",
    showVoicePicker: false,
    showStageNav: false,
  },
  koydo_neuro: {
    title: "Train Your Brain",
    subtitle: "Science-backed exercises for memory, logic, and focus",
    ctaLabel: "Start Training",
    ctaHref: "/dashboard",
    showVoicePicker: false,
    showStageNav: false,
  },

  // ── Regional variants ──────────────────────────────────────────────────────
  koydo_math_es: {
    title: "Matemáticas para todos",
    subtitle: "Lecciones interactivas desde aritmética hasta cálculo",
    ctaLabel: "Comenzar",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: true,
  },
  koydo_exam_jp: {
    title: "受験対策を始めよう",
    subtitle: "AIが最適な学習プランを提案します",
    ctaLabel: "学習を始める",
    ctaHref: "/student/onboarding",
    showVoicePicker: false,
    showStageNav: false,
  },
  koydo_junior_de: {
    title: "Lernen mit Spaß!",
    subtitle: "Mathe, Lesen und Naturwissenschaften für 3-8 Jahre",
    ctaLabel: "Los geht's!",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: false,
  },
  koydo_ar: {
    title: "تعلم أي شيء، في أي عمر",
    subtitle: "أكثر من 800 وحدة تعليمية. مجاني 100%.",
    ctaLabel: "ابدأ التعلم",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: true,
  },
  koydo_kr: {
    title: "효과적으로 공부하세요",
    subtitle: "수학, 과학, 코딩 맞춤형 학습",
    ctaLabel: "학습 시작",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: true,
  },
  koydo_hi: {
    title: "कुछ भी सीखें, किसी भी उम्र में",
    subtitle: "800+ मॉड्यूल। 100% मुफ़्त।",
    ctaLabel: "सीखना शुरू करें",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: true,
  },
  koydo_math_zh: {
    title: "数学学习平台",
    subtitle: "从基础算术到高级微积分",
    ctaLabel: "开始学习",
    ctaHref: "/explore",
    showVoicePicker: false,
    showStageNav: true,
  },
};

export function getHeroConfig(appId?: string): AppHeroConfig {
  const id = appId ?? getAppId();
  return APP_HERO_CONFIGS[id] ?? APP_HERO_CONFIGS.koydo_main;
}
