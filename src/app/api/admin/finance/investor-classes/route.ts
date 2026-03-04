import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const createSchema = z.object({
  classCode: z.string().min(2).max(40),
  className: z.string().min(2).max(200),
  rightsSummary: z.string().max(4000).optional().nullable(),
  dividendPolicy: z.string().max(4000).optional().nullable(),
  liquidationPreferenceMultiple: z.number().min(0).max(100).default(1),
  votingRights: z.boolean().default(true),
  isActive: z.boolean().default(true),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("investor_classes")
    .select(
      "id, class_code, class_name, rights_summary, dividend_policy, liquidation_preference_multiple, voting_rights, is_active, metadata, created_at, updated_at",
    )
    .order("class_code", { ascending: true });

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ classes: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("investor_classes")
    .insert({
      class_code: parsed.data.classCode.trim().toUpperCase(),
      class_name: parsed.data.className.trim(),
      rights_summary: parsed.data.rightsSummary?.trim() || null,
      dividend_policy: parsed.data.dividendPolicy?.trim() || null,
      liquidation_preference_multiple: parsed.data.liquidationPreferenceMultiple,
      voting_rights: parsed.data.votingRights,
      is_active: parsed.data.isActive,
      metadata: parsed.data.metadata ?? {},
    })
    .select(
      "id, class_code, class_name, rights_summary, dividend_policy, liquidation_preference_multiple, voting_rights, is_active, metadata, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_investor_class_create",
    metadata: {
      investorClassId: data.id,
      classCode: data.class_code,
      className: data.class_name,
    },
  });

  return NextResponse.json({ success: true, investorClass: data });
}
