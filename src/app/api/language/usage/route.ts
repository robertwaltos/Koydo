import { NextRequest, NextResponse } from "next/server";
import {
  getLanguageLearningPolicySnapshot,
  getLanguagePricingSnapshot,
  getLanguageRuntimeConfig,
  resolveLanguageUsageEntitlement,
} from "@/lib/language-learning";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return (
    lower.includes("could not find the table") ||
    (lower.includes("relation") && lower.includes("does not exist"))
  );
}

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const studentProfileId = request.nextUrl.searchParams.get("studentProfileId") ?? undefined;

  try {
    const runtimeConfig = await getLanguageRuntimeConfig();
    const entitlement = await resolveLanguageUsageEntitlement(supabase, {
      userId: user.id,
      studentProfileId: studentProfileId ?? undefined,
    });

    return NextResponse.json({
      entitlement,
      policy: getLanguageLearningPolicySnapshot(),
      pricing: getLanguagePricingSnapshot(),
      runtimeConfig,
    });
  } catch (error) {
    if (error instanceof Error && isMissingTableError(error.message)) {
      return NextResponse.json(
        {
          error: "Language usage tracking tables are not migrated yet.",
          policy: getLanguageLearningPolicySnapshot(),
          pricing: getLanguagePricingSnapshot(),
          runtimeConfig: await getLanguageRuntimeConfig(),
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to resolve language usage entitlement.",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
