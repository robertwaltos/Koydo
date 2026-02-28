import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";
import { buildAdaptiveRemediationQueue } from "@/lib/exam/remediation-queue";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

function parseLimit(value: string | null, fallback = 15) {
  if (!value) return fallback;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(1, Math.min(100, Math.trunc(numeric)));
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

    const learningModules = getAllLearningModules();
    const url = new URL(request.url);
    const limit = parseLimit(url.searchParams.get("limit"));

    const [progressResult, errorResult, masteryResult] = await Promise.all([
      supabase
        .from("user_learning_progress")
        .select("lesson_id,next_review_at")
        .eq("user_id", user.id),
      supabase
        .from("user_exam_error_logs")
        .select("lesson_id,skill_id,error_type,created_at")
        .eq("user_id", user.id)
        .eq("resolved", false)
        .order("created_at", { ascending: false })
        .limit(1000),
      supabase
        .from("user_skill_mastery")
        .select("skill_id,mastery_level")
        .eq("user_id", user.id),
    ]);

    if (progressResult.error) {
      return NextResponse.json({ error: progressResult.error.message }, { status: 500 });
    }
    if (errorResult.error) {
      return NextResponse.json({ error: errorResult.error.message }, { status: 500 });
    }
    if (masteryResult.error) {
      return NextResponse.json({ error: masteryResult.error.message }, { status: 500 });
    }

    const remediation = buildAdaptiveRemediationQueue({
      learningModules,
      progressRows: progressResult.data ?? [],
      unresolvedErrors: errorResult.data ?? [],
      masteryRows: masteryResult.data ?? [],
      maxItems: limit,
    });

    return NextResponse.json({
      success: true,
      generatedAt: new Date().toISOString(),
      summary: remediation.summary,
      queue: remediation.queue,
    });
  } catch (error) {
    console.error("Unexpected remediation queue error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
