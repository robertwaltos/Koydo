import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const upsertEnrollmentSchema = z.object({
  learnerUserId: z.string().uuid(),
  learnerProfileId: z.string().uuid().nullable().optional(),
  parentConsent: z.boolean().optional(),
});

async function verifyTeacherOwnership(classId: string, teacherUserId: string) {
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("classroom_entities")
    .select("id, teacher_user_id")
    .eq("id", classId)
    .maybeSingle();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      status: 500,
      error: "Failed to verify classroom ownership.",
    };
  }
  if (!data) return { ok: false as const, status: 404, error: "Classroom not found." };
  if (data.teacher_user_id !== teacherUserId) {
    return { ok: false as const, status: 403, error: "Forbidden" };
  }
  return { ok: true as const };
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const { classId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ownership = await verifyTeacherOwnership(classId, user.id);
  if (!ownership.ok) {
    return NextResponse.json({ error: ownership.error }, { status: ownership.status });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("class_enrollments")
    .select("id, learner_user_id, learner_profile_id, parent_consent, enrolled_at, updated_at")
    .eq("class_id", classId)
    .order("enrolled_at", { ascending: false });

  if (error) {
    if (isMissingTestingTableError(error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    enrollments: (data ?? []).map((entry) => ({
      id: entry.id,
      learnerUserId: entry.learner_user_id,
      learnerProfileId: entry.learner_profile_id,
      parentConsent: entry.parent_consent,
      enrolledAt: entry.enrolled_at,
      updatedAt: entry.updated_at,
    })),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const { classId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ownership = await verifyTeacherOwnership(classId, user.id);
  if (!ownership.ok) {
    return NextResponse.json({ error: ownership.error }, { status: ownership.status });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = upsertEnrollmentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("class_enrollments")
    .upsert(
      {
        class_id: classId,
        learner_user_id: parsed.data.learnerUserId,
        learner_profile_id: parsed.data.learnerProfileId ?? null,
        parent_consent: parsed.data.parentConsent ?? false,
      },
      { onConflict: "class_id,learner_user_id" },
    )
    .select("id, learner_user_id, learner_profile_id, parent_consent, enrolled_at, updated_at")
    .single();

  if (error) {
    if (isMissingTestingTableError(error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    enrollment: {
      id: data.id,
      learnerUserId: data.learner_user_id,
      learnerProfileId: data.learner_profile_id,
      parentConsent: data.parent_consent,
      enrolledAt: data.enrolled_at,
      updatedAt: data.updated_at,
    },
  });
}

