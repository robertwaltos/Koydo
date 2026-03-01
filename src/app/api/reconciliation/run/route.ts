import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import {
  isMissingLanguageUnlockTableError,
  runLanguageUnlockReconciliation,
} from "@/lib/language-learning";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const requestSchema = z.object({
  monthKey: z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])$/)
    .optional(),
  maxAutoFixAbsDrift: z.number().int().positive().max(10_000).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(
    await request.json().catch(() => null),
  );
  if (!payload.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: payload.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const admin = createSupabaseAdminClient();
    const result = await runLanguageUnlockReconciliation(admin, {
      monthKey: payload.data.monthKey,
      maxAutoFixAbsDrift: payload.data.maxAutoFixAbsDrift,
    });
    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    if (isMissingLanguageUnlockTableError(error)) {
      return NextResponse.json(
        { error: "Language unlock reconciliation tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Unexpected reconciliation run error.", toSafeErrorRecord(error));
    return NextResponse.json(
      {
        error: "Failed to run reconciliation.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  return NextResponse.json({
    route: "/api/reconciliation/run",
    method: "POST",
    bodyExample: {
      monthKey: "2026-02",
      maxAutoFixAbsDrift: 500,
    },
  });
}
