import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { getAllSettings, setAppSetting, setAppSettings, flushSettingsCache, SETTINGS_DEFAULTS } from "@/lib/settings/app-settings";
import { logAdminActionStrict } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const setSettingSchema = z.object({
  key: z.string().min(1).max(100),
  value: z.unknown(),
});

const setBulkSettingsSchema = z.object({
  settings: z.record(z.string(), z.unknown()),
});

/**
 * GET /api/admin/settings — Read all app settings with defaults
 */
export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const settings = await getAllSettings();
    return NextResponse.json({
      settings,
      defaults: SETTINGS_DEFAULTS,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

/**
 * POST /api/admin/settings — Upsert one or many settings
 *
 * Body: { key, value } for single, or { settings: { key1: val1, ... } } for bulk
 */
export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json().catch(() => ({}));

    // Try bulk first
    const bulkValidation = setBulkSettingsSchema.safeParse(body);
    if (bulkValidation.success) {
      const result = await setAppSettings(
        bulkValidation.data.settings,
        auth.userId,
      );

      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 500 });
      }

      await logAdminActionStrict({
        adminUserId: auth.userId,
        actionType: "settings.bulk_update",
        metadata: { keys: Object.keys(bulkValidation.data.settings) },
      });

      return NextResponse.json({ success: true });
    }

    // Try single
    const singleValidation = setSettingSchema.safeParse(body);
    if (!singleValidation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: singleValidation.error.issues },
        { status: 400 },
      );
    }

    const result = await setAppSetting(
      singleValidation.data.key,
      singleValidation.data.value,
      auth.userId,
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "settings.update",
      metadata: {
        key: singleValidation.data.key,
        value: singleValidation.data.value,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/settings — Flush settings cache
 */
export async function DELETE() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  flushSettingsCache();
  return NextResponse.json({ success: true, message: "Settings cache flushed." });
}
