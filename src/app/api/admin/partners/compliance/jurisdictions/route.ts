import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logAdminAction } from "@/lib/admin/audit";

const upsertSchema = z.object({
  countryCode: z.string().trim().length(2),
  jurisdictionName: z.string().trim().min(2).max(200),
  allowEngagement: z.boolean().default(true),
  allowPayouts: z.boolean().default(true),
  requiresManualReview: z.boolean().default(false),
  requiresW8: z.boolean().default(false),
  defaultWithholdingRate: z.number().min(0).max(1).default(0),
  sanctionsProgram: z.string().trim().max(120).optional().nullable(),
  sanctionsBasis: z.string().trim().max(500).optional().nullable(),
  notes: z.string().trim().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("partner_jurisdiction_rules")
    .select(
      "id, country_code, jurisdiction_name, allow_engagement, allow_payouts, requires_manual_review, requires_w8, default_withholding_rate, sanctions_program, sanctions_basis, notes, metadata, updated_at",
    )
    .order("country_code", { ascending: true });
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  return NextResponse.json({ jurisdictions: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = upsertSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("partner_jurisdiction_rules")
    .upsert(
      {
        country_code: parsed.data.countryCode.toUpperCase(),
        jurisdiction_name: parsed.data.jurisdictionName,
        allow_engagement: parsed.data.allowEngagement,
        allow_payouts: parsed.data.allowPayouts,
        requires_manual_review: parsed.data.requiresManualReview,
        requires_w8: parsed.data.requiresW8,
        default_withholding_rate: parsed.data.defaultWithholdingRate,
        sanctions_program: parsed.data.sanctionsProgram?.trim() || null,
        sanctions_basis: parsed.data.sanctionsBasis?.trim() || null,
        notes: parsed.data.notes?.trim() || null,
        metadata: parsed.data.metadata ?? {},
      },
      { onConflict: "country_code" },
    )
    .select(
      "id, country_code, jurisdiction_name, allow_engagement, allow_payouts, requires_manual_review, requires_w8, default_withholding_rate, sanctions_program, sanctions_basis, notes, metadata, updated_at",
    )
    .single();
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to upsert jurisdiction rule." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_jurisdiction_rule_upsert",
    metadata: {
      countryCode: data.country_code,
      allowEngagement: data.allow_engagement,
      allowPayouts: data.allow_payouts,
      requiresManualReview: data.requires_manual_review,
    },
  });

  return NextResponse.json({ success: true, jurisdiction: data });
}
