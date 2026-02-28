import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { SupportedTestingLanguage, TestingExamCatalogEntry } from "@/lib/testing/types";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";

function resolveLanguage(value: string | null): SupportedTestingLanguage {
  return value === "pl" ? "pl" : "en";
}

export async function GET(request: Request) {
  const language = resolveLanguage(new URL(request.url).searchParams.get("language"));

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const { data: exams, error: examsError } = await admin
    .from("testing_exams")
    .select("id, exam_code, name, name_pl, timing_minutes, question_count, passing_score, cover_image_url, blueprint, language, is_active")
    .eq("is_active", true)
    .eq("language", "en")
    .order("name", { ascending: true });

  if (examsError) {
    if (isMissingTestingTableError(examsError)) {
      return NextResponse.json(
        { error: "Testing database tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: examsError.message }, { status: 500 });
  }

  const { data: entitlements, error: entitlementReadError } = await supabase
    .from("user_exam_entitlements")
    .select("exam_id, entitlement_type")
    .eq("user_id", user.id);

  if (entitlementReadError && !isMissingTestingTableError(entitlementReadError)) {
    return NextResponse.json({ error: entitlementReadError.message }, { status: 500 });
  }

  const entitlementMap = new Map(
    (entitlements ?? []).map((entry) => [entry.exam_id, entry.entitlement_type as "sample" | "full"]),
  );

  const missingExamIds = (exams ?? [])
    .filter((exam) => !entitlementMap.has(exam.id))
    .map((exam) => exam.id);

  if (missingExamIds.length > 0) {
    const seedRows = missingExamIds.map((examId) => ({
      user_id: user.id,
      exam_id: examId,
      entitlement_type: "sample" as const,
    }));
    const { error: seedError } = await admin
      .from("user_exam_entitlements")
      .upsert(seedRows, { onConflict: "user_id,exam_id" });

    if (!seedError) {
      for (const examId of missingExamIds) {
        entitlementMap.set(examId, "sample");
      }
    }
  }

  const payload: TestingExamCatalogEntry[] = (exams ?? []).map((exam) => {
    const entitlementType = entitlementMap.get(exam.id) === "full" ? "full" : "sample";
    return {
      id: exam.id,
      examCode: exam.exam_code,
      name: exam.name,
      localizedName: language === "pl" ? exam.name_pl ?? null : null,
      timingMinutes: exam.timing_minutes,
      questionCount: exam.question_count,
      passingScore: exam.passing_score,
      coverImageUrl: exam.cover_image_url,
      blueprint:
        exam.blueprint && typeof exam.blueprint === "object" && !Array.isArray(exam.blueprint)
          ? (exam.blueprint as Record<string, unknown>)
          : {},
      entitlementType,
      hasFullAccess: entitlementType === "full",
    };
  });

  return NextResponse.json({ exams: payload });
}
