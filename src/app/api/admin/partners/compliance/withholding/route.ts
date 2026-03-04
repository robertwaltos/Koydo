import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logAdminAction } from "@/lib/admin/audit";

const upsertSchema = z.object({
  partnerId: z.string().uuid(),
  countryCode: z.string().trim().length(2),
  sourceIncomeType: z.enum(["service_commission", "royalty", "other"]).default("service_commission"),
  usSourceIncome: z.boolean().default(true),
  treatyClaimed: z.boolean().default(false),
  treatyCountryCode: z.string().trim().length(2).optional().nullable(),
  treatyArticle: z.string().trim().max(120).optional().nullable(),
  determinationStatus: z.enum(["pending", "approved", "rejected", "expired"]).default("pending"),
  approvedWithholdingRate: z.number().min(0).max(1).optional().nullable(),
  effectiveStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  effectiveEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  determinationReference: z.string().trim().max(200).optional().nullable(),
  rationale: z.string().trim().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const partnerId = searchParams.get("partnerId");

  const admin = createSupabaseAdminClient();
  let query = admin
    .from("partner_withholding_determinations")
    .select(
      "id, partner_id, country_code, source_income_type, us_source_income, treaty_claimed, treaty_country_code, treaty_article, determination_status, approved_withholding_rate, effective_start, effective_end, determination_reference, rationale, metadata, reviewed_by, reviewed_at, created_at, updated_at",
    )
    .order("updated_at", { ascending: false })
    .limit(5000);
  if (partnerId) query = query.eq("partner_id", partnerId);

  const { data, error } = await query;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  return NextResponse.json({ determinations: data ?? [] });
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
  const determinationRecord = {
    partner_id: parsed.data.partnerId,
    country_code: parsed.data.countryCode.toUpperCase(),
    source_income_type: parsed.data.sourceIncomeType,
    us_source_income: parsed.data.usSourceIncome,
    treaty_claimed: parsed.data.treatyClaimed,
    treaty_country_code: parsed.data.treatyCountryCode?.toUpperCase() || null,
    treaty_article: parsed.data.treatyArticle?.trim() || null,
    determination_status: parsed.data.determinationStatus,
    approved_withholding_rate: parsed.data.approvedWithholdingRate ?? null,
    effective_start: parsed.data.effectiveStart ?? null,
    effective_end: parsed.data.effectiveEnd ?? null,
    determination_reference: parsed.data.determinationReference?.trim() || null,
    rationale: parsed.data.rationale?.trim() || null,
    metadata: parsed.data.metadata ?? {},
    reviewed_by: auth.userId,
    reviewed_at: new Date().toISOString(),
  };

  const { data: existingActive, error: existingActiveError } = await admin
    .from("partner_withholding_determinations")
    .select("id")
    .eq("partner_id", parsed.data.partnerId)
    .in("determination_status", ["pending", "approved"])
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (existingActiveError) {
    console.error("Unexpected API error.", toSafeErrorRecord(existingActiveError));
    return NextResponse.json({ error: "Failed to resolve existing withholding determination." }, { status: 500 });
  }

  let existingRowId = existingActive?.id ?? null;
  if (!existingRowId) {
    const { data: latestRow, error: latestRowError } = await admin
      .from("partner_withholding_determinations")
      .select("id")
      .eq("partner_id", parsed.data.partnerId)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (latestRowError) {
      console.error("Unexpected API error.", toSafeErrorRecord(latestRowError));
      return NextResponse.json({ error: "Failed to resolve withholding determination history." }, { status: 500 });
    }
    existingRowId = latestRow?.id ?? null;
  }

  const writeQuery = existingRowId
    ? admin
        .from("partner_withholding_determinations")
        .update(determinationRecord)
        .eq("id", existingRowId)
    : admin
        .from("partner_withholding_determinations")
        .insert({
          ...determinationRecord,
          created_by: auth.userId,
        });

  const { data, error } = await writeQuery
    .select(
      "id, partner_id, country_code, source_income_type, us_source_income, treaty_claimed, treaty_country_code, treaty_article, determination_status, approved_withholding_rate, effective_start, effective_end, determination_reference, rationale, metadata, reviewed_by, reviewed_at, created_at, updated_at",
    )
    .single();
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to write withholding determination." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_withholding_determination_upsert",
    metadata: {
      partnerId: data.partner_id,
      countryCode: data.country_code,
      determinationStatus: data.determination_status,
      approvedWithholdingRate: data.approved_withholding_rate,
      treatyClaimed: data.treaty_claimed,
    },
  });

  return NextResponse.json({ success: true, determination: data });
}
