/**
 * App Manifest Client — reads from `app_manifests` DB table to determine
 * the current micro-app's identity, theme, subject scope, and age range.
 *
 * Every micro-app deployment sets `NEXT_PUBLIC_APP_ID` at build time.
 * This module fetches the matching manifest and derives the AppVariant
 * so the feature-gate engine and module catalog work automatically.
 */

import { publicEnv } from "@/lib/config/env";
import type { AppVariant } from "@/lib/platform/feature-registry";
import koydoJuniorTheme from "@/tenants/koydo-junior/theme/koydo-junior.theme.json";
import koydoUniversityTheme from "@/tenants/koydo-university/theme/koydo-university.theme.json";
import koydoTradesTheme from "@/tenants/koydo-trades/theme/koydo-trades.theme.json";
import koydoStemTheme from "@/tenants/koydo-stem/theme/koydo-stem.theme.json";
import koydoCdlTheme from "@/tenants/koydo-cdl/theme/koydo-cdl.theme.json";
import koydoArenaTheme from "@/tenants/koydo-arena/theme/koydo-arena.theme.json";
import koydoSatTheme from "@/tenants/koydo-sat/theme/koydo-sat.theme.json";
import koydoFinanceTheme from "@/tenants/koydo-finance/theme/koydo-finance.theme.json";
import koydoMathTheme from "@/tenants/koydo-math/theme/koydo-math.theme.json";
import koydoNeuroTheme from "@/tenants/koydo-neuro/theme/koydo-neuro.theme.json";

// ── Types ────────────────────────────────────────────────────────────────────

export type AppManifest = {
  appId: string;
  displayName: string;
  themeConfig: Record<string, string>;
  darkThemeConfig?: Record<string, string>;
  enabledSubjects: string[]; // ["*"] = all subjects, or ["Math","Finance",...]
  minAge: number;
  maxAge: number;
  isActive: boolean;
  // ── i18n ────────────────────────────────────────────────────────────────
  /** Locales this app supports. ["*"] = all ACTIVE_LOCALES. */
  supportedLocales: string[];
  /** Default locale for this app (shown on first visit). */
  defaultLocale: string;
  /** Primary market region for ASO/store listing targeting. */
  region: string;
  // ── Pricing ─────────────────────────────────────────────────────────────
  /** Default currency code (ISO 4217). Falls back to "USD". */
  defaultCurrency: string;
  /** Pricing tier key for RevenueCat offerings. */
  pricingTier: AppPricingTier;
  // ── Store listing ───────────────────────────────────────────────────────
  /** Localized store metadata keyed by locale. */
  storeListing?: Record<string, AppStoreListing>;
};

export type AppPricingTier = "free" | "freemium" | "premium_9.99" | "premium_19.99" | "custom";

export type AppStoreListing = {
  title: string;
  subtitle: string;
  keywords: string[];
  description: string;
};

// ── App ID ───────────────────────────────────────────────────────────────────

export function getAppId(): string {
  return publicEnv.NEXT_PUBLIC_APP_ID ?? "koydo_main";
}

export function isMainApp(): boolean {
  return getAppId() === "koydo_main";
}

// ── Manifest cache (5-min TTL) ───────────────────────────────────────────────

let cachedManifest: AppManifest | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

/** Default manifest when DB is unreachable or app_id is koydo_main */
const DEFAULT_MANIFEST: AppManifest = {
  appId: "koydo_main",
  displayName: "Koydo",
  themeConfig: {},
  enabledSubjects: ["*"],
  minAge: 0,
  maxAge: 99,
  isActive: true,
  supportedLocales: ["*"],
  defaultLocale: "en",
  region: "global",
  defaultCurrency: "USD",
  pricingTier: "freemium",
};

type TenantThemeSchema = {
  css_variables?: Record<string, string>;
  dark_mode?: Record<string, string>;
};

type AppManifestRow = {
  app_id: string;
  display_name: string;
  theme_config?: Record<string, string> | null;
  enabled_subjects?: string[] | null;
  min_age?: number | null;
  max_age?: number | null;
  is_active?: boolean | null;
  supported_locales?: string[] | null;
  default_locale?: string | null;
  region?: string | null;
  default_currency?: string | null;
  pricing_tier?: AppPricingTier | null;
  store_listing?: Record<string, AppStoreListing> | null;
};

const PRICING_TIERS = new Set<AppPricingTier>([
  "free",
  "freemium",
  "premium_9.99",
  "premium_19.99",
  "custom",
]);

function normalizeCssVariables(input: Record<string, string> | null | undefined): Record<string, string> {
  if (!input || typeof input !== "object") return {};
  const normalized: Record<string, string> = {};
  for (const [key, value] of Object.entries(input)) {
    if (!key.startsWith("--") || typeof value !== "string") continue;
    normalized[key] = value;
  }
  return normalized;
}

function normalizeStoreListing(
  input: Record<string, AppStoreListing> | null | undefined,
): Record<string, AppStoreListing> | undefined {
  if (!input || typeof input !== "object") return undefined;
  const normalized: Record<string, AppStoreListing> = {};
  for (const [locale, listing] of Object.entries(input)) {
    if (
      !listing
      || typeof listing.title !== "string"
      || typeof listing.subtitle !== "string"
      || !Array.isArray(listing.keywords)
      || typeof listing.description !== "string"
    ) {
      continue;
    }
    normalized[locale] = {
      title: listing.title,
      subtitle: listing.subtitle,
      keywords: listing.keywords.filter((entry): entry is string => typeof entry === "string"),
      description: listing.description,
    };
  }
  return Object.keys(normalized).length > 0 ? normalized : undefined;
}

function manifestFromDbRow(row: AppManifestRow): AppManifest {
  const pricingTier = row.pricing_tier && PRICING_TIERS.has(row.pricing_tier)
    ? row.pricing_tier
    : "freemium";

  return {
    appId: row.app_id,
    displayName: row.display_name,
    themeConfig: normalizeCssVariables(row.theme_config),
    enabledSubjects: Array.isArray(row.enabled_subjects) && row.enabled_subjects.length > 0
      ? row.enabled_subjects
      : ["*"],
    minAge: Number.isFinite(row.min_age) ? Number(row.min_age) : 0,
    maxAge: Number.isFinite(row.max_age) ? Number(row.max_age) : 99,
    isActive: row.is_active !== false,
    supportedLocales: Array.isArray(row.supported_locales) && row.supported_locales.length > 0
      ? row.supported_locales
      : ["*"],
    defaultLocale: row.default_locale || "en",
    region: row.region || "global",
    defaultCurrency: row.default_currency || "USD",
    pricingTier,
    storeListing: normalizeStoreListing(row.store_listing),
  };
}

function buildTenantThemeConfig(theme: TenantThemeSchema, fallbackAccent: string) {
  const light = normalizeCssVariables(theme.css_variables);
  if (!light["--color-primary"]) {
    light["--color-primary"] = theme.css_variables?.["--accent"] ?? fallbackAccent;
  }
  return {
    light,
    dark: normalizeCssVariables(theme.dark_mode),
  };
}

const juniorThemeConfig = buildTenantThemeConfig(koydoJuniorTheme as TenantThemeSchema, "#ff5fa2");
const universityThemeConfig = buildTenantThemeConfig(
  koydoUniversityTheme as TenantThemeSchema,
  "#1d3557",
);
const tradesThemeConfig = buildTenantThemeConfig(koydoTradesTheme as TenantThemeSchema, "#e67e22");
const stemThemeConfig = buildTenantThemeConfig(koydoStemTheme as TenantThemeSchema, "#00b894");

const JUNIOR_THEME_CONFIG = juniorThemeConfig.light;
const JUNIOR_DARK_THEME_CONFIG = juniorThemeConfig.dark;
const UNIVERSITY_THEME_CONFIG = universityThemeConfig.light;
const UNIVERSITY_DARK_THEME_CONFIG = universityThemeConfig.dark;
const TRADES_THEME_CONFIG = tradesThemeConfig.light;
const TRADES_DARK_THEME_CONFIG = tradesThemeConfig.dark;
const STEM_THEME_CONFIG = stemThemeConfig.light;
const STEM_DARK_THEME_CONFIG = stemThemeConfig.dark;
const cdlThemeConfig = buildTenantThemeConfig(koydoCdlTheme as TenantThemeSchema, "#1e3a5f");
const CDL_THEME_CONFIG = cdlThemeConfig.light;
const CDL_DARK_THEME_CONFIG = cdlThemeConfig.dark;
const arenaThemeConfig = buildTenantThemeConfig(koydoArenaTheme as TenantThemeSchema, "#7c3aed");
const ARENA_THEME_CONFIG = arenaThemeConfig.light;
const ARENA_DARK_THEME_CONFIG = arenaThemeConfig.dark;
const satThemeConfig = buildTenantThemeConfig(koydoSatTheme as TenantThemeSchema, "#1d4ed8");
const SAT_THEME_CONFIG = satThemeConfig.light;
const SAT_DARK_THEME_CONFIG = satThemeConfig.dark;
const financeThemeConfig = buildTenantThemeConfig(koydoFinanceTheme as TenantThemeSchema, "#065f46");
const FINANCE_THEME_CONFIG = financeThemeConfig.light;
const FINANCE_DARK_THEME_CONFIG = financeThemeConfig.dark;
const mathThemeConfig = buildTenantThemeConfig(koydoMathTheme as TenantThemeSchema, "#6c5ce7");
const MATH_THEME_CONFIG = mathThemeConfig.light;
const MATH_DARK_THEME_CONFIG = mathThemeConfig.dark;
const neuroThemeConfig = buildTenantThemeConfig(koydoNeuroTheme as TenantThemeSchema, "#0891b2");
const NEURO_THEME_CONFIG = neuroThemeConfig.light;
const NEURO_DARK_THEME_CONFIG = neuroThemeConfig.dark;

/**
 * Fetch manifest from `app_manifests` table via the admin API.
 * Falls back to DEFAULT_MANIFEST on error or for the main app.
 */
export async function fetchManifest(appId?: string): Promise<AppManifest> {
  const id = appId ?? getAppId();

  if (id === "koydo_main") return DEFAULT_MANIFEST;

  // Check in-memory cache
  if (cachedManifest?.appId === id && Date.now() - cacheTimestamp < CACHE_TTL_MS) {
    return cachedManifest;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || publicEnv.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && serviceKey) {
    try {
      const endpoint = `${supabaseUrl}/rest/v1/app_manifests?app_id=eq.${encodeURIComponent(id)}&select=*`;
      const response = await fetch(endpoint, {
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
        },
        cache: "no-store",
      });

      if (response.ok) {
        const rows = (await response.json()) as AppManifestRow[];
        const row = Array.isArray(rows) ? rows[0] : null;
        if (row && row.is_active !== false) {
          const manifest = manifestFromDbRow(row);
          cachedManifest = manifest;
          cacheTimestamp = Date.now();
          return manifest;
        }
      }
    } catch {
      // Fall back to static manifest.
    }
  }

  // Try local static fallback (works at build time and when DB is down)
  const staticManifest = STATIC_MANIFESTS[id];
  if (staticManifest) {
    cachedManifest = staticManifest;
    cacheTimestamp = Date.now();
    return staticManifest;
  }

  return DEFAULT_MANIFEST;
}

/**
 * Synchronous manifest getter — returns cached value or static fallback.
 * Use this in contexts where async is not available (e.g., module-level code).
 */
export function getManifestSync(appId?: string): AppManifest {
  const id = appId ?? getAppId();
  if (id === "koydo_main") return DEFAULT_MANIFEST;
  if (cachedManifest?.appId === id && Date.now() - cacheTimestamp < CACHE_TTL_MS) {
    return cachedManifest;
  }
  return STATIC_MANIFESTS[id] ?? DEFAULT_MANIFEST;
}

// ── Static manifest fallbacks (used at build time & as DB cache seed) ────────

export const STATIC_MANIFESTS: Record<string, AppManifest> = {
  koydo_main: DEFAULT_MANIFEST,

  // ── Global micro-apps ──────────────────────────────────────────────────────
  koydo_junior: {
    appId: "koydo_junior",
    displayName: "Koydo Junior",
    themeConfig: JUNIOR_THEME_CONFIG,
    darkThemeConfig: JUNIOR_DARK_THEME_CONFIG,
    enabledSubjects: ["Math", "Reading", "Science"],
    minAge: 3, maxAge: 8, isActive: true,
    supportedLocales: ["en", "es", "fr", "de"],
    defaultLocale: "en",
    region: "global",
    defaultCurrency: "USD",
    pricingTier: "freemium",
  },
  koydo_sat: {
    appId: "koydo_sat",
    displayName: "Koydo SAT Prep",
    themeConfig: SAT_THEME_CONFIG,
    darkThemeConfig: SAT_DARK_THEME_CONFIG,
    enabledSubjects: ["Math", "Reading", "Science", "Languages"],
    minAge: 14, maxAge: 19, isActive: true,
    supportedLocales: ["en"],
    defaultLocale: "en",
    region: "us",
    defaultCurrency: "USD",
    pricingTier: "premium_19.99",
    storeListing: {
      en: {
        title: "Koydo SAT Prep",
        subtitle: "Personalized SAT study plans and practice tests",
        description: "Ace your Digital SAT with adaptive practice tests, score tracking, and AI-powered study plans. Covers Math (Algebra, Advanced Math, Problem Solving, Geometry & Trig) and Reading & Writing (Craft & Structure, Information & Ideas, Standard English, Expression of Ideas).",
        keywords: ["SAT prep", "SAT practice test", "college prep", "SAT math", "SAT reading", "digital SAT", "test prep", "college admission"],
      },
    },
  },
  koydo_finance: {
    appId: "koydo_finance",
    displayName: "Koydo Finance Pro",
    themeConfig: FINANCE_THEME_CONFIG,
    darkThemeConfig: FINANCE_DARK_THEME_CONFIG,
    enabledSubjects: ["Finance", "Accounting", "Economics", "Entrepreneurship"],
    minAge: 16, maxAge: 99, isActive: true,
    supportedLocales: ["en", "es", "de", "ja", "zh"],
    defaultLocale: "en",
    region: "global",
    defaultCurrency: "USD",
    pricingTier: "premium_19.99",
    storeListing: {
      en: {
        title: "Koydo Finance Pro",
        subtitle: "Master finance, accounting, and economics",
        description: "Professional-grade finance education from fundamentals to CPA-level content. 16 courses covering Accounting & Finance, Economics, Entrepreneurship, and Financial Literacy with certification tracking.",
        keywords: ["finance", "accounting", "CPA", "economics", "financial literacy", "business", "investing", "budgeting"],
      },
    },
  },
  koydo_university: {
    appId: "koydo_university",
    displayName: "Koydo University",
    themeConfig: UNIVERSITY_THEME_CONFIG,
    darkThemeConfig: UNIVERSITY_DARK_THEME_CONFIG,
    enabledSubjects: ["Exam Prep", "Finance", "Accounting", "Coding"],
    minAge: 18,
    maxAge: 99,
    isActive: true,
    supportedLocales: ["en"],
    defaultLocale: "en",
    region: "us",
    defaultCurrency: "USD",
    pricingTier: "premium_19.99",
  },
  koydo_math: {
    appId: "koydo_math",
    displayName: "Koydo Math Forge",
    themeConfig: MATH_THEME_CONFIG,
    darkThemeConfig: MATH_DARK_THEME_CONFIG,
    enabledSubjects: ["Math"],
    minAge: 8, maxAge: 18, isActive: true,
    supportedLocales: ["en", "es", "fr", "de", "zh", "ja", "ko"],
    defaultLocale: "en",
    region: "global",
    defaultCurrency: "USD",
    pricingTier: "freemium",
    storeListing: {
      en: {
        title: "Koydo Math Forge",
        subtitle: "Build unshakeable math skills from K-12 and beyond",
        description: "Master math from basic arithmetic to calculus with interactive lessons, practice problems, and a graphing calculator. Tracks covering Number Sense, Algebra, Geometry, Trigonometry, and Calculus.",
        keywords: ["math", "algebra", "geometry", "calculus", "math practice", "math tutor", "K-12 math", "STEM"],
      },
    },
  },
  koydo_neuro: {
    appId: "koydo_neuro",
    displayName: "Koydo Neuro",
    themeConfig: NEURO_THEME_CONFIG,
    darkThemeConfig: NEURO_DARK_THEME_CONFIG,
    enabledSubjects: ["Neuroscience", "Psychology", "Brain Training"],
    minAge: 12, maxAge: 99, isActive: true,
    supportedLocales: ["en", "es", "de", "ja"],
    defaultLocale: "en",
    region: "global",
    defaultCurrency: "USD",
    pricingTier: "freemium",
    storeListing: {
      en: {
        title: "Koydo Neuro",
        subtitle: "Train your brain with science-backed exercises",
        description: "Brain training app with exercises targeting Memory, Logic, Processing Speed, Attention, and Verbal skills. Includes neuroscience courses on brain health, cognitive psychology, and sleep science. Track your Brain Performance Index over time.",
        keywords: ["brain training", "neuroscience", "memory", "cognitive", "brain games", "mental fitness", "focus", "attention"],
      },
    },
  },
  koydo_arena: {
    appId: "koydo_arena",
    displayName: "Koydo Arena",
    themeConfig: ARENA_THEME_CONFIG,
    darkThemeConfig: ARENA_DARK_THEME_CONFIG,
    enabledSubjects: ["*"],
    minAge: 5, maxAge: 99, isActive: true,
    supportedLocales: ["*"],
    defaultLocale: "en",
    region: "global",
    defaultCurrency: "USD",
    pricingTier: "free",
    storeListing: {
      en: {
        title: "Koydo Arena",
        subtitle: "231 educational games — play, learn, compete",
        description: "The ultimate educational gaming hub. 231 games covering math, science, language arts, coding, music, strategy, and more. Daily challenges, leaderboards, and social competition make learning addictive.",
        keywords: ["educational games", "learning games", "trivia", "math games", "science games", "kids games", "brain training"],
      },
    },
  },

  // ── Vertical micro-apps ──────────────────────────────────────────────────
  koydo_trades: {
    appId: "koydo_trades",
    displayName: "Koydo Trades",
    themeConfig: TRADES_THEME_CONFIG,
    darkThemeConfig: TRADES_DARK_THEME_CONFIG,
    enabledSubjects: ["Electrical", "Plumbing", "HVAC", "Civil Engineering", "Farming", "CDL"],
    minAge: 16, maxAge: 99, isActive: true,
    supportedLocales: ["en", "es"],
    defaultLocale: "en",
    region: "global",
    defaultCurrency: "USD",
    pricingTier: "freemium",
    storeListing: {
      en: {
        title: "Koydo Trades",
        subtitle: "Master skilled trades with hands-on lessons",
        keywords: ["trades", "electrician", "plumbing", "HVAC", "vocational", "apprentice", "certification"],
        description: "Learn electrical, plumbing, HVAC, and more with interactive lessons, AR wiring diagrams, and NEC/UPC code reference. Built for apprentices and trade school students.",
      },
    },
  },
  koydo_stem: {
    appId: "koydo_stem",
    displayName: "Koydo STEM Lab",
    themeConfig: STEM_THEME_CONFIG,
    darkThemeConfig: STEM_DARK_THEME_CONFIG,
    enabledSubjects: ["Coding", "Data Science", "AI", "Cybersecurity", "Cloud Computing", "Robotics"],
    minAge: 10, maxAge: 25, isActive: true,
    supportedLocales: ["en", "es", "zh", "ja"],
    defaultLocale: "en",
    region: "global",
    defaultCurrency: "USD",
    pricingTier: "freemium",
    storeListing: {
      en: {
        title: "Koydo STEM Lab",
        subtitle: "Code, build, and explore science & tech",
        keywords: ["STEM", "coding", "programming", "data science", "AI", "cybersecurity", "engineering"],
        description: "Comprehensive STEM education from coding basics to advanced AI and cybersecurity. Project-based learning with a code playground and terminal simulator.",
      },
    },
  },

  koydo_cdl: {
    appId: "koydo_cdl",
    displayName: "Koydo CDL Prep",
    themeConfig: CDL_THEME_CONFIG,
    darkThemeConfig: CDL_DARK_THEME_CONFIG,
    enabledSubjects: ["CDL"],
    minAge: 18, maxAge: 99, isActive: true,
    supportedLocales: ["en", "es"],
    defaultLocale: "en",
    region: "us",
    defaultCurrency: "USD",
    pricingTier: "freemium",
    storeListing: {
      en: {
        title: "Koydo CDL Prep",
        subtitle: "Pass your CDL test on the first try",
        keywords: ["CDL", "commercial driver license", "truck driver", "CDL test", "CDL practice test", "FMCSA", "hazmat", "endorsement", "DMV"],
        description: "Complete CDL study guide with practice tests for Class A, B, and C licenses. Covers General Knowledge, Air Brakes, Combination Vehicles, and all endorsements (Hazmat, Tanker, Passenger, School Bus, Doubles/Triples). Based on the official FMCSA CDL manual with state-specific supplements.",
      },
      es: {
        title: "Koydo CDL Prep",
        subtitle: "Pasa tu examen CDL al primer intento",
        keywords: ["CDL", "licencia comercial", "camionero", "examen CDL", "practica CDL", "FMCSA", "hazmat", "DMV"],
        description: "Guia completa de estudio CDL con examenes de practica para licencias Clase A, B y C. Cubre Conocimiento General, Frenos de Aire, Vehiculos Combinados y todos los endorsements.",
      },
    },
  },

  // ── Regional micro-apps (locale-specific store listings) ───────────────────

  // Latin America — Spanish Math
  koydo_math_es: {
    appId: "koydo_math_es",
    displayName: "Koydo Matemáticas",
    themeConfig: { "--color-primary": "#6c5ce7" },
    enabledSubjects: ["Math"],
    minAge: 8, maxAge: 18, isActive: true,
    supportedLocales: ["es"],
    defaultLocale: "es",
    region: "latam",
    defaultCurrency: "USD",
    pricingTier: "freemium",
    storeListing: {
      es: {
        title: "Koydo Matemáticas",
        subtitle: "Domina las matemáticas desde primaria hasta preparatoria",
        keywords: ["matematicas", "algebra", "geometria", "calculo", "educacion", "primaria", "secundaria"],
        description: "Aprende matemáticas con lecciones interactivas, videos y ejercicios adaptados a tu nivel. Desde aritmética básica hasta cálculo avanzado.",
      },
    },
  },

  // Japan — Exam Prep (university entrance)
  koydo_exam_jp: {
    appId: "koydo_exam_jp",
    displayName: "Koydo 受験対策",
    themeConfig: { "--color-primary": "#2d3436" },
    enabledSubjects: ["Math", "Science", "Reading"],
    minAge: 15, maxAge: 19, isActive: true,
    supportedLocales: ["ja"],
    defaultLocale: "ja",
    region: "jp",
    defaultCurrency: "JPY",
    pricingTier: "premium_19.99",
    storeListing: {
      ja: {
        title: "Koydo 受験対策",
        subtitle: "大学入試に向けた総合学習アプリ",
        keywords: ["受験", "大学入試", "数学", "理科", "英語", "勉強", "学習アプリ"],
        description: "大学入学共通テストに向けた数学・理科・英語の総合対策。AIが最適な学習プランを提案します。",
      },
    },
  },

  // Germany — Junior (German-speaking markets)
  koydo_junior_de: {
    appId: "koydo_junior_de",
    displayName: "Koydo Junior DE",
    themeConfig: JUNIOR_THEME_CONFIG,
    enabledSubjects: ["Math", "Reading", "Science"],
    minAge: 3, maxAge: 8, isActive: true,
    supportedLocales: ["de"],
    defaultLocale: "de",
    region: "dach",
    defaultCurrency: "EUR",
    pricingTier: "freemium",
    storeListing: {
      de: {
        title: "Koydo Junior",
        subtitle: "Lernen mit Spaß für Kinder von 3-8 Jahren",
        keywords: ["kinder", "lernen", "mathe", "lesen", "vorschule", "grundschule", "bildung"],
        description: "Spielerisch Mathe, Lesen und Naturwissenschaften lernen. Altersgerechte Inhalte für Vorschule und Grundschule.",
      },
    },
  },

  // Arabic-speaking markets — full app
  koydo_ar: {
    appId: "koydo_ar",
    displayName: "كويدو",
    themeConfig: { "--color-primary": "#1abc9c" },
    enabledSubjects: ["*"],
    minAge: 0, maxAge: 99, isActive: true,
    supportedLocales: ["ar"],
    defaultLocale: "ar",
    region: "mena",
    defaultCurrency: "AED",
    pricingTier: "freemium",
    storeListing: {
      ar: {
        title: "كويدو - تعلم أي شيء",
        subtitle: "أكثر من 800 درس تعليمي لجميع الأعمار",
        keywords: ["تعليم", "تعلم", "رياضيات", "علوم", "قراءة", "أطفال", "مدرسة"],
        description: "منصة تعليمية شاملة بأكثر من 800 وحدة تعليمية. تعلم الرياضيات والعلوم والبرمجة والمزيد.",
      },
    },
  },

  // Korea — Math + Science
  koydo_kr: {
    appId: "koydo_kr",
    displayName: "코이도 학습",
    themeConfig: { "--color-primary": "#6c5ce7" },
    enabledSubjects: ["Math", "Science", "Coding"],
    minAge: 8, maxAge: 18, isActive: true,
    supportedLocales: ["ko"],
    defaultLocale: "ko",
    region: "kr",
    defaultCurrency: "KRW",
    pricingTier: "freemium",
    storeListing: {
      ko: {
        title: "코이도 학습",
        subtitle: "수학, 과학, 코딩을 재미있게 배우세요",
        keywords: ["수학", "과학", "코딩", "학습", "교육", "중학교", "고등학교"],
        description: "수학, 과학, 코딩 학습을 위한 맞춤형 교육 앱. AI 기반 학습 플랜으로 효과적으로 공부하세요.",
      },
    },
  },

  // Hindi-speaking India — full app
  koydo_hi: {
    appId: "koydo_hi",
    displayName: "Koydo हिंदी",
    themeConfig: { "--color-primary": "#e67e22" },
    enabledSubjects: ["*"],
    minAge: 0, maxAge: 99, isActive: true,
    supportedLocales: ["hi", "en"],
    defaultLocale: "hi",
    region: "in",
    defaultCurrency: "INR",
    pricingTier: "freemium",
    storeListing: {
      hi: {
        title: "Koydo - कुछ भी सीखें",
        subtitle: "सभी उम्र के लिए 800+ पाठ",
        keywords: ["शिक्षा", "सीखना", "गणित", "विज्ञान", "पढ़ाई", "हिंदी", "स्कूल"],
        description: "800+ इंटरैक्टिव पाठों के साथ व्यापक शिक्षण मंच। गणित, विज्ञान, कोडिंग और बहुत कुछ सीखें।",
      },
    },
  },

  // China — Math focus
  koydo_math_zh: {
    appId: "koydo_math_zh",
    displayName: "Koydo 数学",
    themeConfig: { "--color-primary": "#6c5ce7" },
    enabledSubjects: ["Math"],
    minAge: 8, maxAge: 18, isActive: true,
    supportedLocales: ["zh"],
    defaultLocale: "zh",
    region: "cn",
    defaultCurrency: "CNY",
    pricingTier: "freemium",
    storeListing: {
      zh: {
        title: "Koydo 数学",
        subtitle: "从小学到高中的数学学习平台",
        keywords: ["数学", "学习", "教育", "小学", "中学", "高中", "练习"],
        description: "全面的数学学习应用。从基础算术到高级微积分，AI驱动的个性化学习计划。",
      },
    },
  },
};

// ── Variant derivation ───────────────────────────────────────────────────────

/** Static mapping from app_id to AppVariant */
export const APP_ID_TO_VARIANT: Record<string, AppVariant> = {
  koydo_main: "full",
  koydo_junior: "kids",
  koydo_sat: "teen",
  koydo_finance: "adult",
  koydo_university: "adult",
  koydo_math: "teen",
  koydo_arena: "full",
  // Vertical variants
  koydo_trades: "adult",
  koydo_stem: "teen",
  koydo_cdl: "adult",
  koydo_neuro: "teen",
  // Regional variants
  koydo_math_es: "teen",
  koydo_exam_jp: "teen",
  koydo_junior_de: "kids",
  koydo_ar: "full",
  koydo_kr: "teen",
  koydo_hi: "full",
  koydo_math_zh: "teen",
};

/**
 * Get the locales available for the current micro-app.
 * Returns ACTIVE_LOCALES if manifest says ["*"], otherwise the manifest's list.
 */
export function getAppLocales(appId?: string): string[] {
  const manifest = getManifestSync(appId);
  if (manifest.supportedLocales.includes("*")) {
    // Defer to global ACTIVE_LOCALES — import avoided to prevent circular dep.
    // Caller should use ACTIVE_LOCALES from translations.ts directly.
    return ["*"];
  }
  return manifest.supportedLocales;
}

/** Get the default locale for the current micro-app. */
export function getAppDefaultLocale(appId?: string): string {
  return getManifestSync(appId).defaultLocale;
}

/** Get the default currency for the current micro-app. */
export function getAppDefaultCurrency(appId?: string): string {
  return getManifestSync(appId).defaultCurrency;
}

/** Get store listing metadata for the current app + locale. */
export function getAppStoreListing(locale: string, appId?: string): AppStoreListing | null {
  const manifest = getManifestSync(appId);
  return manifest.storeListing?.[locale] ?? null;
}

/**
 * Derive AppVariant from a manifest's age range + subject scope.
 * Used when a manifest doesn't have a static mapping above.
 */
export function getAppVariantFromManifest(manifest: AppManifest): AppVariant {
  // Check static mapping first
  const staticVariant = APP_ID_TO_VARIANT[manifest.appId];
  if (staticVariant) return staticVariant;

  // Heuristic: derive from age range
  if (manifest.maxAge <= 10) return "kids";
  if (manifest.minAge >= 16) return "adult";
  if (manifest.minAge >= 10 && manifest.maxAge <= 20) return "teen";
  return "full";
}
