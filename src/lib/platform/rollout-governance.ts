import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const ROLLOUT_GOVERNANCE_APP_SETTINGS_KEY = "rollout_governance_v1";

export const ROLLOUT_FEATURE_IDS = [
  "classroom_live_mode",
  "classroom_student_paced_mode",
  "classroom_front_of_class_mode",
  "lms_google_classroom",
  "lms_lti_grade_passback",
  "ai_content_ingestion",
  "family_school_messaging",
] as const;

export type RolloutFeatureId = (typeof ROLLOUT_FEATURE_IDS)[number];

export const ROLLOUT_KILL_SWITCH_IDS = [
  "global",
  "lms_writes",
  "grade_passback",
  "ai_ingestion",
] as const;

export type RolloutKillSwitchId = (typeof ROLLOUT_KILL_SWITCH_IDS)[number];

const FEATURE_ENV_KEYS: Record<RolloutFeatureId, string> = {
  classroom_live_mode: "KOYDO_FEATURE_CLASSROOM_LIVE_MODE",
  classroom_student_paced_mode: "KOYDO_FEATURE_CLASSROOM_STUDENT_PACED_MODE",
  classroom_front_of_class_mode: "KOYDO_FEATURE_CLASSROOM_FRONT_OF_CLASS_MODE",
  lms_google_classroom: "KOYDO_FEATURE_LMS_GOOGLE_CLASSROOM",
  lms_lti_grade_passback: "KOYDO_FEATURE_LMS_LTI_GRADE_PASSBACK",
  ai_content_ingestion: "KOYDO_FEATURE_AI_CONTENT_INGESTION",
  family_school_messaging: "KOYDO_FEATURE_FAMILY_SCHOOL_MESSAGING",
};

const KILL_SWITCH_ENV_KEYS: Record<RolloutKillSwitchId, string> = {
  global: "KOYDO_KILL_SWITCH_GLOBAL",
  lms_writes: "KOYDO_KILL_SWITCH_LMS_WRITES",
  grade_passback: "KOYDO_KILL_SWITCH_GRADE_PASSBACK",
  ai_ingestion: "KOYDO_KILL_SWITCH_AI_INGESTION",
};

type RolloutFeatureMap = Record<RolloutFeatureId, boolean>;
type RolloutPercentageMap = Record<RolloutFeatureId, number>;
type RolloutKillSwitchMap = Record<RolloutKillSwitchId, boolean>;

export type RolloutGovernanceConfig = {
  source: "default" | "app_settings" | "env";
  loadedAt: string;
  features: RolloutFeatureMap;
  rolloutPercentages: RolloutPercentageMap;
  killSwitches: RolloutKillSwitchMap;
  emergencyReason: string | null;
};

export type RolloutOperation =
  | "lms_write"
  | "grade_passback"
  | "ai_ingestion"
  | "classroom_live_session";

const appSettingsSchema = z
  .object({
    features: z.record(z.string(), z.union([z.boolean(), z.string(), z.number()])).optional(),
    rolloutPercentages: z.record(z.string(), z.union([z.number(), z.string()])).optional(),
    killSwitches: z.record(z.string(), z.union([z.boolean(), z.string(), z.number()])).optional(),
    emergencyReason: z.string().trim().max(240).nullable().optional(),
  })
  .partial();

type RuntimeCache = {
  value: RolloutGovernanceConfig;
  expiresAtMs: number;
};

let runtimeCache: RuntimeCache | null = null;

function parseBooleanLike(value: unknown) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") {
    if (value === 1) return true;
    if (value === 0) return false;
    return null;
  }
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  if (["1", "true", "yes", "on", "enabled", "enable"].includes(normalized)) return true;
  if (["0", "false", "no", "off", "disabled", "disable"].includes(normalized)) return false;
  return null;
}

function parseIntegerLike(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return Math.trunc(value);
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return Math.trunc(parsed);
  }
  return null;
}

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, Math.trunc(value)));
}

function buildDefaultFeatureMap(): RolloutFeatureMap {
  return {
    classroom_live_mode: false,
    classroom_student_paced_mode: false,
    classroom_front_of_class_mode: false,
    lms_google_classroom: false,
    lms_lti_grade_passback: false,
    ai_content_ingestion: false,
    family_school_messaging: false,
  };
}

function buildDefaultPercentageMap(): RolloutPercentageMap {
  return {
    classroom_live_mode: 100,
    classroom_student_paced_mode: 100,
    classroom_front_of_class_mode: 100,
    lms_google_classroom: 100,
    lms_lti_grade_passback: 100,
    ai_content_ingestion: 100,
    family_school_messaging: 100,
  };
}

function buildDefaultKillSwitchMap(): RolloutKillSwitchMap {
  return {
    global: false,
    lms_writes: false,
    grade_passback: false,
    ai_ingestion: false,
  };
}

function buildDefaultConfig(): RolloutGovernanceConfig {
  return {
    source: "default",
    loadedAt: new Date().toISOString(),
    features: buildDefaultFeatureMap(),
    rolloutPercentages: buildDefaultPercentageMap(),
    killSwitches: buildDefaultKillSwitchMap(),
    emergencyReason: null,
  };
}

function cloneConfig(config: RolloutGovernanceConfig): RolloutGovernanceConfig {
  return {
    source: config.source,
    loadedAt: config.loadedAt,
    features: { ...config.features },
    rolloutPercentages: { ...config.rolloutPercentages },
    killSwitches: { ...config.killSwitches },
    emergencyReason: config.emergencyReason,
  };
}

function applyAppSettingOverrides(base: RolloutGovernanceConfig, value: unknown) {
  const parsed = appSettingsSchema.safeParse(value);
  if (!parsed.success) {
    return { config: base, changed: false };
  }

  const next = cloneConfig(base);
  let changed = false;

  for (const featureId of ROLLOUT_FEATURE_IDS) {
    const maybeValue = parsed.data.features?.[featureId];
    const booleanValue = parseBooleanLike(maybeValue);
    if (booleanValue === null) continue;
    if (next.features[featureId] !== booleanValue) {
      next.features[featureId] = booleanValue;
      changed = true;
    }
  }

  for (const featureId of ROLLOUT_FEATURE_IDS) {
    const maybeValue = parsed.data.rolloutPercentages?.[featureId];
    const intValue = parseIntegerLike(maybeValue);
    if (intValue === null) continue;
    const percent = clampPercent(intValue);
    if (next.rolloutPercentages[featureId] !== percent) {
      next.rolloutPercentages[featureId] = percent;
      changed = true;
    }
  }

  for (const killSwitchId of ROLLOUT_KILL_SWITCH_IDS) {
    const maybeValue = parsed.data.killSwitches?.[killSwitchId];
    const booleanValue = parseBooleanLike(maybeValue);
    if (booleanValue === null) continue;
    if (next.killSwitches[killSwitchId] !== booleanValue) {
      next.killSwitches[killSwitchId] = booleanValue;
      changed = true;
    }
  }

  if (typeof parsed.data.emergencyReason === "string") {
    const normalized = parsed.data.emergencyReason.trim();
    const reason = normalized.length > 0 ? normalized : null;
    if (next.emergencyReason !== reason) {
      next.emergencyReason = reason;
      changed = true;
    }
  }

  return { config: next, changed };
}

function applyEnvOverrides(base: RolloutGovernanceConfig) {
  const next = cloneConfig(base);
  let changed = false;

  for (const featureId of ROLLOUT_FEATURE_IDS) {
    const envKey = FEATURE_ENV_KEYS[featureId];
    const value = parseBooleanLike(process.env[envKey]);
    if (value === null) continue;
    if (next.features[featureId] !== value) {
      next.features[featureId] = value;
      changed = true;
    }
  }

  for (const killSwitchId of ROLLOUT_KILL_SWITCH_IDS) {
    const envKey = KILL_SWITCH_ENV_KEYS[killSwitchId];
    const value = parseBooleanLike(process.env[envKey]);
    if (value === null) continue;
    if (next.killSwitches[killSwitchId] !== value) {
      next.killSwitches[killSwitchId] = value;
      changed = true;
    }
  }

  const emergencyReasonEnv = process.env.KOYDO_KILL_SWITCH_REASON;
  if (typeof emergencyReasonEnv === "string" && emergencyReasonEnv.trim().length > 0) {
    const normalizedReason = emergencyReasonEnv.trim().slice(0, 240);
    if (next.emergencyReason !== normalizedReason) {
      next.emergencyReason = normalizedReason;
      changed = true;
    }
  }

  return { config: next, changed };
}

function hasAdminDbAccess() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function getRolloutGovernanceConfig(options?: {
  forceRefresh?: boolean;
  cacheTtlMs?: number;
  adminClient?: SupabaseClient;
}): Promise<RolloutGovernanceConfig> {
  const nowMs = Date.now();
  const forceRefresh = Boolean(options?.forceRefresh);
  const cacheTtlMs = Math.max(1_000, options?.cacheTtlMs ?? 60_000);

  if (!forceRefresh && runtimeCache && runtimeCache.expiresAtMs > nowMs) {
    return runtimeCache.value;
  }

  const defaults = buildDefaultConfig();
  let working = cloneConfig(defaults);
  let appSettingApplied = false;

  if (hasAdminDbAccess()) {
    try {
      const admin = options?.adminClient ?? createSupabaseAdminClient();
      const { data, error } = await admin
        .from("app_settings")
        .select("value")
        .eq("key", ROLLOUT_GOVERNANCE_APP_SETTINGS_KEY)
        .maybeSingle();

      if (error) {
        console.error("Failed to load rollout governance from app_settings.", toSafeErrorRecord(error));
      } else if (data && typeof data.value !== "undefined") {
        const merged = applyAppSettingOverrides(working, data.value);
        working = merged.config;
        appSettingApplied = merged.changed;
      }
    } catch (error) {
      console.error("Unexpected rollout governance load failure.", toSafeErrorRecord(error));
    }
  }

  const envMerged = applyEnvOverrides(working);
  working = envMerged.config;

  working.loadedAt = new Date(nowMs).toISOString();
  working.source = envMerged.changed ? "env" : appSettingApplied ? "app_settings" : "default";

  runtimeCache = {
    value: working,
    expiresAtMs: nowMs + cacheTtlMs,
  };

  return working;
}

export function clearRolloutGovernanceCache() {
  runtimeCache = null;
}

export function isKillSwitchActive(
  config: Pick<RolloutGovernanceConfig, "killSwitches">,
  killSwitchId: RolloutKillSwitchId,
) {
  if (config.killSwitches.global) return true;
  return config.killSwitches[killSwitchId];
}

function hashToPercentile(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) % 100;
}

export function isRolloutFeatureEnabled(
  config: Pick<RolloutGovernanceConfig, "features" | "rolloutPercentages" | "killSwitches">,
  featureId: RolloutFeatureId,
  options?: { subjectKey?: string | null },
) {
  if (config.killSwitches.global) return false;
  if (!config.features[featureId]) return false;

  const percent = clampPercent(config.rolloutPercentages[featureId]);
  if (percent >= 100) return true;
  if (percent <= 0) return false;

  const subjectKey = options?.subjectKey?.trim();
  if (!subjectKey) return false;

  return hashToPercentile(`${featureId}:${subjectKey}`) < percent;
}

const OPERATION_REQUIREMENTS: Record<
  RolloutOperation,
  {
    featureId: RolloutFeatureId;
    killSwitchId?: RolloutKillSwitchId;
  }
> = {
  lms_write: {
    featureId: "lms_google_classroom",
    killSwitchId: "lms_writes",
  },
  grade_passback: {
    featureId: "lms_lti_grade_passback",
    killSwitchId: "grade_passback",
  },
  ai_ingestion: {
    featureId: "ai_content_ingestion",
    killSwitchId: "ai_ingestion",
  },
  classroom_live_session: {
    featureId: "classroom_live_mode",
  },
};

export function evaluateRolloutOperation(
  config: Pick<RolloutGovernanceConfig, "features" | "rolloutPercentages" | "killSwitches" | "emergencyReason">,
  operation: RolloutOperation,
  options?: { subjectKey?: string | null },
) {
  const requirement = OPERATION_REQUIREMENTS[operation];

  if (config.killSwitches.global) {
    return {
      allowed: false,
      reason: "kill_switch_global",
      emergencyReason: config.emergencyReason,
    };
  }

  if (requirement.killSwitchId && config.killSwitches[requirement.killSwitchId]) {
    return {
      allowed: false,
      reason: `kill_switch_${requirement.killSwitchId}`,
      emergencyReason: config.emergencyReason,
    };
  }

  const featureAllowed = isRolloutFeatureEnabled(config, requirement.featureId, {
    subjectKey: options?.subjectKey,
  });

  if (!featureAllowed) {
    return {
      allowed: false,
      reason: "feature_disabled_or_not_in_rollout_cohort",
      emergencyReason: config.emergencyReason,
    };
  }

  return {
    allowed: true,
    reason: "allowed",
    emergencyReason: config.emergencyReason,
  };
}
