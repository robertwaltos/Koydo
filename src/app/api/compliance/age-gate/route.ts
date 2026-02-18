import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const MIN_PARENTAL_CONSENT_AGE = 13;

const requestSchema = z.object({
  birthYear: z.coerce.number().int().min(1900),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - parsed.data.birthYear;

  if (age < 0 || age > 120) {
    return NextResponse.json({ error: "Invalid age." }, { status: 400 });
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parentalConsentRequired = age < MIN_PARENTAL_CONSENT_AGE;
    const admin = createSupabaseAdminClient();

    const { error: profileError } = await admin.from("user_profiles").upsert(
      {
        user_id: userData.user.id,
        birth_date: `${parsed.data.birthYear}-01-01`,
        parental_consent_required: parentalConsentRequired,
        parental_consent_status: parentalConsentRequired ? "pending" : "not_required",
      },
      { onConflict: "user_id" },
    );

    if (profileError) {
      return NextResponse.json(
        { error: "Failed to update age-gate profile", details: profileError.message },
        { status: 500 },
      );
    }

    return NextResponse.json({
      age,
      parentalConsentRequired,
      nextRoute: parentalConsentRequired ? "/auth/parent-consent" : "/dashboard",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Server configuration error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
