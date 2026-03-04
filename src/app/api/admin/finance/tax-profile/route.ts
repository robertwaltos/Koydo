import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const upsertSchema = z.object({
  id: z.string().uuid().optional(),
  ownerName: z.string().min(1).max(120),
  filingStatus: z.enum(["single", "married_joint", "married_separate", "head_household"]),
  federalTaxRate: z.number().min(0).max(1),
  stateTaxRate: z.number().min(0).max(1),
  selfEmploymentTaxRate: z.number().min(0).max(1),
  localTaxRate: z.number().min(0).max(1).default(0),
  additionalTaxRate: z.number().min(0).max(1).default(0),
  deductionRate: z.number().min(0).max(1).default(0),
  notes: z.string().max(2000).optional().nullable(),
  isActive: z.boolean().default(true),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const [activeResult, historyResult] = await Promise.all([
    admin
      .from("owner_tax_profiles")
      .select(
        "id, owner_name, filing_status, federal_tax_rate, state_tax_rate, self_employment_tax_rate, local_tax_rate, additional_tax_rate, deduction_rate, notes, is_active, updated_by, created_at, updated_at",
      )
      .eq("is_active", true)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    admin
      .from("owner_tax_profiles")
      .select(
        "id, owner_name, filing_status, federal_tax_rate, state_tax_rate, self_employment_tax_rate, local_tax_rate, additional_tax_rate, deduction_rate, notes, is_active, updated_by, created_at, updated_at",
      )
      .order("updated_at", { ascending: false })
      .limit(20),
  ]);

  const error = activeResult.error ?? historyResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    activeProfile: activeResult.data ?? null,
    profiles: historyResult.data ?? [],
  });
}

export async function PUT(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = upsertSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: activeProfile, error: activeError } = await admin
    .from("owner_tax_profiles")
    .select("id")
    .eq("is_active", true)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (activeError) {
    console.error("Unexpected API error.", toSafeErrorRecord(activeError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const candidateId = parsed.data.id ?? activeProfile?.id ?? null;
  let writeResult;
  if (candidateId) {
    writeResult = await admin
      .from("owner_tax_profiles")
      .update({
        owner_name: parsed.data.ownerName.trim(),
        filing_status: parsed.data.filingStatus,
        federal_tax_rate: parsed.data.federalTaxRate,
        state_tax_rate: parsed.data.stateTaxRate,
        self_employment_tax_rate: parsed.data.selfEmploymentTaxRate,
        local_tax_rate: parsed.data.localTaxRate,
        additional_tax_rate: parsed.data.additionalTaxRate,
        deduction_rate: parsed.data.deductionRate,
        notes: parsed.data.notes?.trim() || null,
        is_active: parsed.data.isActive,
        updated_by: auth.userId,
      })
      .eq("id", candidateId)
      .select(
        "id, owner_name, filing_status, federal_tax_rate, state_tax_rate, self_employment_tax_rate, local_tax_rate, additional_tax_rate, deduction_rate, notes, is_active, updated_by, created_at, updated_at",
      )
      .single();
  } else {
    writeResult = await admin
      .from("owner_tax_profiles")
      .insert({
        owner_name: parsed.data.ownerName.trim(),
        filing_status: parsed.data.filingStatus,
        federal_tax_rate: parsed.data.federalTaxRate,
        state_tax_rate: parsed.data.stateTaxRate,
        self_employment_tax_rate: parsed.data.selfEmploymentTaxRate,
        local_tax_rate: parsed.data.localTaxRate,
        additional_tax_rate: parsed.data.additionalTaxRate,
        deduction_rate: parsed.data.deductionRate,
        notes: parsed.data.notes?.trim() || null,
        is_active: parsed.data.isActive,
        updated_by: auth.userId,
      })
      .select(
        "id, owner_name, filing_status, federal_tax_rate, state_tax_rate, self_employment_tax_rate, local_tax_rate, additional_tax_rate, deduction_rate, notes, is_active, updated_by, created_at, updated_at",
      )
      .single();
  }

  if (writeResult.error) {
    console.error("Unexpected API error.", toSafeErrorRecord(writeResult.error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (writeResult.data.is_active) {
    await admin
      .from("owner_tax_profiles")
      .update({ is_active: false, updated_by: auth.userId })
      .neq("id", writeResult.data.id)
      .eq("is_active", true);
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_tax_profile_upsert",
    metadata: {
      profileId: writeResult.data.id,
      ownerName: writeResult.data.owner_name,
      filingStatus: writeResult.data.filing_status,
      federalTaxRate: writeResult.data.federal_tax_rate,
      stateTaxRate: writeResult.data.state_tax_rate,
      selfEmploymentTaxRate: writeResult.data.self_employment_tax_rate,
      isActive: writeResult.data.is_active,
    },
  });

  return NextResponse.json({ success: true, profile: writeResult.data });
}
