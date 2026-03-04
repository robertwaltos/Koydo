import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { policyRegistry, type PolicyType } from "@/lib/compliance/policies";
import {
  resolveTermsDocumentForState,
} from "@/lib/legal/terms-of-service";
import { normalizeUSStateCode } from "@/lib/legal/us-states";

const requestSchema = z.object({
  policyType: z.enum(["privacy", "terms", "refunds"]),
  billingState: z.string().trim().optional(),
});

function toClientSafeIp(request: Request) {
  const xForwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const forwardedIp = xForwardedFor.split(",")[0]?.trim();
  return forwardedIp || request.headers.get("x-real-ip") || null;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const policyTypeParam = url.searchParams.get("policyType");
  const billingStateParam = url.searchParams.get("billingState") ?? undefined;
  const parseResult = requestSchema.safeParse({
    policyType: policyTypeParam,
    billingState: billingStateParam,
  });

  if (!parseResult.success) {
    return NextResponse.json({ error: "Invalid policy type." }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ accepted: false, requiresAuth: true });
  }

  const policyType = parseResult.data.policyType as PolicyType;
  const normalizedBillingState = normalizeUSStateCode(parseResult.data.billingState);
  const termsDocument =
    policyType === "terms"
      ? resolveTermsDocumentForState(normalizedBillingState)
      : null;
  const version = termsDocument?.version ?? policyRegistry[policyType].version;

  let query = supabase
    .from("policy_acceptances")
    .select("id, accepted_at, billing_state, document_hash")
    .eq("user_id", user.id)
    .eq("policy_type", policyType)
    .eq("policy_version", version);

  if (policyType === "terms" && normalizedBillingState) {
    query = query.eq("billing_state", normalizedBillingState);
  }

  const { data } = await query.maybeSingle();

  return NextResponse.json({
    policyType,
    version,
    accepted: Boolean(data),
    acceptedAt: data?.accepted_at ?? null,
    billingState: data?.billing_state ?? termsDocument?.stateCode ?? null,
    documentHash: data?.document_hash ?? termsDocument?.documentHash ?? null,
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const policyType = parsed.data.policyType as PolicyType;
  const normalizedBillingState = normalizeUSStateCode(parsed.data.billingState);

  if (policyType === "terms" && !normalizedBillingState) {
    return NextResponse.json(
      { error: "billingState is required for terms acceptance." },
      { status: 400 },
    );
  }

  const termsDocument =
    policyType === "terms"
      ? resolveTermsDocumentForState(normalizedBillingState)
      : null;

  const version = termsDocument?.version ?? policyRegistry[policyType].version;
  const ipAddress = toClientSafeIp(request);
  const userAgent = request.headers.get("user-agent");
  const referer = request.headers.get("referer");

  const { error } = await supabase.from("policy_acceptances").upsert(
    {
      user_id: user.id,
      policy_type: policyType,
      policy_version: version,
      billing_state: termsDocument?.stateCode ?? null,
      document_key: termsDocument?.documentKey ?? null,
      document_hash: termsDocument?.documentHash ?? null,
      acceptance_metadata:
        termsDocument
          ? {
              effectiveDate: termsDocument.effectiveDate,
              stateSpecific: true,
              acceptedFrom: referer,
            }
          : {
              acceptedFrom: referer,
            },
      evidence_ip: ipAddress,
      evidence_user_agent: userAgent,
    },
    { onConflict: "user_id,policy_type,policy_version" },
  );

  if (error) {
    console.error("Failed to persist policy acceptance.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to persist policy acceptance." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    policyType,
    version,
    billingState: termsDocument?.stateCode ?? null,
    documentHash: termsDocument?.documentHash ?? null,
    documentKey: termsDocument?.documentKey ?? null,
  });
}
