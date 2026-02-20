import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { policyRegistry, type PolicyType } from "@/lib/compliance/policies";

const requestSchema = z.object({
  policyType: z.enum(["privacy", "terms", "refunds"]),
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const policyTypeParam = url.searchParams.get("policyType");
  const parseResult = requestSchema.safeParse({ policyType: policyTypeParam });
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
  const version = policyRegistry[policyType].version;
  const { data } = await supabase
    .from("policy_acceptances")
    .select("id, accepted_at")
    .eq("user_id", user.id)
    .eq("policy_type", policyType)
    .eq("policy_version", version)
    .maybeSingle();

  return NextResponse.json({
    policyType,
    version,
    accepted: Boolean(data),
    acceptedAt: data?.accepted_at ?? null,
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
  const version = policyRegistry[policyType].version;
  const { error } = await supabase.from("policy_acceptances").upsert({
    user_id: user.id,
    policy_type: policyType,
    policy_version: version,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, policyType, version });
}
