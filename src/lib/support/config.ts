import type { SupabaseClient } from "@supabase/supabase-js";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

type SettingRecord = {
  key: string;
  value: unknown;
};

export type SupportRuntimeConfig = {
  supportEmail: string;
  emergencyPhone: string;
  parentPortalPaidSlaHours: number;
  source: "env" | "app_settings";
};

const APP_SETTING_KEYS = [
  "support_email",
  "support_emergency_phone",
  "parent_portal_paid_response_sla_hours",
] as const;

function asRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value as Record<string, unknown>;
}

function parseSettingString(value: unknown) {
  if (typeof value === "string" && value.trim().length > 0) return value.trim();
  const record = asRecord(value);
  const nested = record.value;
  if (typeof nested === "string" && nested.trim().length > 0) return nested.trim();
  return "";
}

function parseSettingNumber(value: unknown, fallback: number) {
  if (typeof value === "number" && Number.isFinite(value)) return Math.trunc(value);
  const record = asRecord(value);
  const nested = record.value;
  const parsed =
    typeof nested === "number"
      ? nested
      : typeof nested === "string"
        ? Number(nested)
        : Number.NaN;
  if (!Number.isFinite(parsed)) return fallback;
  return Math.trunc(parsed);
}

export async function loadSupportRuntimeConfig(adminClient?: SupabaseClient): Promise<SupportRuntimeConfig> {
  const fallback: SupportRuntimeConfig = {
    supportEmail: serverEnv.SUPPORT_EMAIL,
    emergencyPhone: serverEnv.SUPPORT_EMERGENCY_PHONE,
    parentPortalPaidSlaHours: serverEnv.PARENT_PORTAL_PAID_RESPONSE_SLA_HOURS,
    source: "env",
  };

  try {
    const admin = adminClient ?? createSupabaseAdminClient();
    const { data, error } = await admin
      .from("app_settings")
      .select("key, value")
      .in("key", [...APP_SETTING_KEYS]);

    if (error) {
      console.error("Failed to load support runtime config from app_settings.", toSafeErrorRecord(error));
      return fallback;
    }

    const byKey = new Map<string, SettingRecord>();
    for (const row of (data ?? []) as SettingRecord[]) {
      byKey.set(row.key, row);
    }

    const supportEmail = parseSettingString(byKey.get("support_email")?.value) || fallback.supportEmail;
    const emergencyPhone =
      parseSettingString(byKey.get("support_emergency_phone")?.value) || fallback.emergencyPhone;
    const parentPortalPaidSlaHours = Math.max(
      1,
      Math.min(
        168,
        parseSettingNumber(
          byKey.get("parent_portal_paid_response_sla_hours")?.value,
          fallback.parentPortalPaidSlaHours,
        ),
      ),
    );

    return {
      supportEmail,
      emergencyPhone,
      parentPortalPaidSlaHours,
      source: byKey.size > 0 ? "app_settings" : "env",
    };
  } catch (error) {
    console.error("Unexpected support runtime config load error.", toSafeErrorRecord(error));
    return fallback;
  }
}
