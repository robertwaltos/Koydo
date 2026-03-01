import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { buildAutoResolveCandidates } from "@/lib/exam/error-auto-resolve";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const autoResolveSchema = z.object({
  dryRun: z.boolean().optional(),
  limit: z.number().int().min(1).max(500).optional(),
});

async function buildEligibleAutoResolveItems(
  userId: string,
  limit: number,
): Promise<{
  success: boolean;
  error?: string;
  eligibleItems: ReturnType<typeof buildAutoResolveCandidates>;
}> {
  const supabase = await createSupabaseServerClient();

  const [errorsResult, masteryResult, progressResult] = await Promise.all([
    supabase
      .from("user_exam_error_logs")
      .select("id,lesson_id,skill_id,error_type,created_at,resolved")
      .eq("user_id", userId)
      .eq("resolved", false)
      .order("created_at", { ascending: false })
      .limit(2000),
    supabase
      .from("user_skill_mastery")
      .select("skill_id,mastery_level,attempts,correct_attempts")
      .eq("user_id", userId),
    supabase
      .from("user_learning_progress")
      .select("lesson_id,next_review_at")
      .eq("user_id", userId),
  ]);

  if (errorsResult.error) {
    console.error("Failed to query unresolved exam error rows.", toSafeErrorRecord(errorsResult.error));
    return { success: false, error: "Failed to query unresolved exam error rows.", eligibleItems: [] };
  }
  if (masteryResult.error) {
    console.error("Failed to query skill mastery rows for auto-resolve.", toSafeErrorRecord(masteryResult.error));
    return { success: false, error: "Failed to query skill mastery rows.", eligibleItems: [] };
  }
  if (progressResult.error) {
    console.error("Failed to query learning progress rows for auto-resolve.", toSafeErrorRecord(progressResult.error));
    return { success: false, error: "Failed to query learning progress rows.", eligibleItems: [] };
  }

  const eligibleItems = buildAutoResolveCandidates({
    errors: errorsResult.data ?? [],
    masteryRows: masteryResult.data ?? [],
    progressRows: progressResult.data ?? [],
    limit,
  });

  return { success: true, eligibleItems };
}

export async function GET(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const parsedLimit = Number(url.searchParams.get("limit") ?? 100);
    const limit = Number.isFinite(parsedLimit) ? Math.max(1, Math.min(500, Math.trunc(parsedLimit))) : 100;
    const eligibility = await buildEligibleAutoResolveItems(user.id, limit);
    if (!eligibility.success) {
      return NextResponse.json({ error: eligibility.error ?? "Database error" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      eligibleCount: eligibility.eligibleItems.length,
      preview: eligibility.eligibleItems,
    });
  } catch (error) {
    console.error("Unexpected exam auto-resolve GET error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const validation = autoResolveSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const dryRun = validation.data.dryRun ?? false;
    const limit = validation.data.limit ?? 100;
    const eligibility = await buildEligibleAutoResolveItems(user.id, limit);
    if (!eligibility.success) {
      return NextResponse.json({ error: eligibility.error ?? "Database error" }, { status: 500 });
    }

    if (dryRun || eligibility.eligibleItems.length === 0) {
      return NextResponse.json({
        success: true,
        dryRun,
        eligibleCount: eligibility.eligibleItems.length,
        updatedCount: 0,
        updatedIds: [] as string[],
        preview: eligibility.eligibleItems,
      });
    }

    const idsToUpdate = eligibility.eligibleItems.map((item) => item.id);
    const { data: updatedRows, error: updateError } = await supabase
      .from("user_exam_error_logs")
      .update({
        resolved: true,
        resolved_at: new Date().toISOString(),
      })
      .eq("user_id", user.id)
      .in("id", idsToUpdate)
      .select("id,resolved,resolved_at,updated_at");

    if (updateError) {
      console.error("Unexpected API error.", toSafeErrorRecord(updateError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      dryRun: false,
      eligibleCount: eligibility.eligibleItems.length,
      updatedCount: updatedRows?.length ?? 0,
      updatedIds: (updatedRows ?? []).map((row) => row.id),
      updatedRows: updatedRows ?? [],
      preview: eligibility.eligibleItems,
    });
  } catch (error) {
    console.error("Unexpected exam auto-resolve POST error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
