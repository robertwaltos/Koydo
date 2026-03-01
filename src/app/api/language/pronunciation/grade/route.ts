import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  getLanguageLearningPolicySnapshot,
  getLanguageProviderStatuses,
  getLanguagePlanById,
  gradePronunciation,
  recordLanguageUsageAttempt,
  resolveLanguageUsageEntitlement,
  resolvePronunciationGradingMode,
} from "@/lib/language-learning";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  targetText: z.string().min(1).max(1_000),
  transcriptText: z.string().min(1).max(1_000),
  language: z.string().min(2).max(16).default("en"),
  moduleId: z.string().min(1).max(200).optional(),
  studentProfileId: z.string().uuid().optional(),
  audioDurationMs: z.number().int().positive().max(10 * 60 * 1_000).optional(),
  asrConfidence: z.number().min(0).max(1).optional(),
  preferredProviderId: z.enum(["auto", "mock", "licensed"]).optional(),
});

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid request payload",
        details: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  try {
    const policy = getLanguageLearningPolicySnapshot();
    const confidenceGateMode = resolvePronunciationGradingMode(parsed.data.asrConfidence);
    let usageEntitlement: Awaited<ReturnType<typeof resolveLanguageUsageEntitlement>> | null = null;
    let usageTracking: { tracked: boolean; reason?: string } = { tracked: false };

    try {
      usageEntitlement = await resolveLanguageUsageEntitlement(supabase, {
        userId: user.id,
        studentProfileId: parsed.data.studentProfileId,
      });
    } catch (usageError) {
      if (usageError instanceof Error && isMissingTableError(usageError.message)) {
        usageTracking = { tracked: false, reason: "usage_table_missing" };
      } else {
        usageTracking = { tracked: false, reason: "usage_resolution_failed" };
      }
    }

    const usageGateMode =
      usageEntitlement && confidenceGateMode === "graded"
        ? usageEntitlement.mode
        : "graded";
    const gradingMode =
      confidenceGateMode === "practice_only" || usageGateMode === "practice_only"
        ? "practice_only"
        : "graded";
    const grading = await gradePronunciation(parsed.data);
    const planTier = usageEntitlement?.planTier ?? "core_practice";
    const plan = getLanguagePlanById(planTier);

    const gradingMetadata = {
      ...(grading.metadata ?? {}),
      gradingMode,
      confidenceGateMode,
      usageGateMode,
      policyVersion: policy.version,
      asrConfidence: parsed.data.asrConfidence ?? null,
      minConfidenceForGrade: policy.pronunciation.minConfidenceForGrade,
      entitlement: usageEntitlement
        ? {
            monthKey: usageEntitlement.monthKey,
            planTier: usageEntitlement.planTier,
            planName: plan?.name ?? usageEntitlement.planTier,
            scoredAttemptsLimit: usageEntitlement.scoredAttemptsLimit,
            scoredAttemptsUsed: usageEntitlement.scoredAttemptsUsed,
            scoredAttemptsRemaining: usageEntitlement.scoredAttemptsRemaining,
            aiCostUsdThisMonth: usageEntitlement.aiCostUsdThisMonth,
            reason: usageEntitlement.reason,
          }
        : null,
    };

    let persistence: { persisted: boolean; attemptId: string | null; reason?: string } = {
      persisted: false,
      attemptId: null,
    };

    const { data: insertedAttempt, error: insertError } = await supabase
      .from("pronunciation_attempts")
      .insert({
        user_id: user.id,
        student_profile_id: parsed.data.studentProfileId ?? null,
        module_id: parsed.data.moduleId ?? null,
        language: parsed.data.language,
        target_text: parsed.data.targetText,
        transcript_text: parsed.data.transcriptText,
        audio_duration_ms: parsed.data.audioDurationMs ?? null,
        asr_confidence: parsed.data.asrConfidence ?? null,
        provider_id: grading.providerId,
        grading_mode: gradingMode,
        overall_score: gradingMode === "graded" ? grading.overallScore : null,
        dimensions: grading.dimensions,
        feedback: grading.feedback,
        metadata: gradingMetadata,
      })
      .select("id")
      .maybeSingle();

    if (insertError) {
      if (isMissingTableError(insertError.message)) {
        persistence = {
          persisted: false,
          attemptId: null,
          reason: "table_missing",
        };
      } else {
        persistence = {
          persisted: false,
          attemptId: null,
          reason: "insert_failed",
        };
      }
    } else {
      persistence = {
        persisted: true,
        attemptId: insertedAttempt?.id ?? null,
      };
    }

    if (usageEntitlement) {
      try {
        await recordLanguageUsageAttempt(supabase, {
          userId: user.id,
          studentProfileId: parsed.data.studentProfileId,
          gradingMode,
          monthKey: usageEntitlement.monthKey,
          planTier: usageEntitlement.planTier,
          audioDurationMs: parsed.data.audioDurationMs,
          estimatedAiCostUsd: 0,
        });
        usageTracking = { tracked: true };
      } catch (usageUpdateError) {
        if (
          usageUpdateError instanceof Error &&
          isMissingTableError(usageUpdateError.message)
        ) {
          usageTracking = { tracked: false, reason: "usage_table_missing" };
        } else {
          usageTracking = { tracked: false, reason: "usage_update_failed" };
        }
      }
    }

    return NextResponse.json({
      grading: {
        ...grading,
        metadata: gradingMetadata,
      },
      gradingMode,
      gradeRecorded: gradingMode === "graded",
      entitlement: usageEntitlement
        ? {
            ...usageEntitlement,
            planName: plan?.name ?? usageEntitlement.planTier,
          }
        : null,
      usageTracking,
      persistence,
      policy,
    });
  } catch (error) {
    console.error("Pronunciation grading failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      {
        error: "Pronunciation grading failed",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  const policy = getLanguageLearningPolicySnapshot();
  return NextResponse.json({
    route: "/api/language/pronunciation/grade",
    method: "POST",
    auth: "required",
    providers: getLanguageProviderStatuses().pronunciation,
    policy,
    bodyExample: {
      targetText: "The quick brown fox jumps over the lazy dog.",
      transcriptText: "The quick brown fox jump over the lazy dog.",
      language: "en",
      moduleId: "language-arts-101",
      studentProfileId: "00000000-0000-0000-0000-000000000000",
      audioDurationMs: 2900,
      asrConfidence: 0.83,
      preferredProviderId: "auto",
    },
  });
}
