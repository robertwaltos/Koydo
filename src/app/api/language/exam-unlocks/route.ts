import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  checkLanguageExamUnlockEntitlement,
  getLanguageExamUnlockPrice,
  getLanguageRuntimeConfig,
  isMissingLanguageUnlockTableError,
} from "@/lib/language-learning";

const querySchema = z.object({
  level: z.enum(["beginner", "intermediate", "advanced"]),
  studentProfileId: z.string().uuid().optional(),
});

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = querySchema.safeParse({
    level: request.nextUrl.searchParams.get("level") ?? undefined,
    studentProfileId: request.nextUrl.searchParams.get("studentProfileId") ?? undefined,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.studentProfileId) {
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("id")
      .eq("id", parsed.data.studentProfileId)
      .eq("account_id", user.id)
      .maybeSingle();
    if (!profile) {
      return NextResponse.json(
        { error: "Student profile not found for current account." },
        { status: 403 },
      );
    }
  }

  const admin = createSupabaseAdminClient();
  try {
    const [runtimeConfig, quote, entitlement] = await Promise.all([
      getLanguageRuntimeConfig(),
      getLanguageExamUnlockPrice(admin, {
        userId: user.id,
        studentProfileId: parsed.data.studentProfileId,
        level: parsed.data.level,
      }),
      checkLanguageExamUnlockEntitlement(admin, {
        userId: user.id,
        studentProfileId: parsed.data.studentProfileId,
        level: parsed.data.level,
      }),
    ]);

    return NextResponse.json({
      level: parsed.data.level,
      quote,
      entitlement,
      runtimeConfig,
    });
  } catch (error) {
    if (isMissingLanguageUnlockTableError(error)) {
      return NextResponse.json(
        {
          error: "Language exam unlock tables are not migrated yet.",
          runtimeConfig: await getLanguageRuntimeConfig(),
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to load language exam unlock quote.",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
