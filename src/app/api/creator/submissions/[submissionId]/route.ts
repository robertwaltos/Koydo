import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  MINIMUM_PUBLISH_RUBRIC_SCORE,
  RIGHTS_BASIS_OPTIONS,
  buildRubricScoreFromBreakdown,
  canPublishSubmission,
  isValidSubmissionTransition,
  moderateCreatorText,
  normalizeProvenanceMetadata,
  normalizeRightsMetadata,
  type CreatorSubmissionStatus,
  type RightsBasis,
  type RubricBreakdown,
} from "@/lib/creator/pipeline";
import { isMissingCreatorTableError } from "@/lib/creator/errors";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const actionSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("update_draft"),
    title: z.string().trim().min(1).max(140).optional(),
    summary: z.string().trim().max(500).nullable().optional(),
    draftPayload: z.record(z.string(), z.unknown()).optional(),
    assignedReviewerUserId: z.string().uuid().nullable().optional(),
    provenance: z.object({
      sourceType: z.enum(["original", "adapted", "licensed", "public_domain"]),
      sourceUri: z.string().trim().url().max(500).nullable().optional(),
      sourceLicense: z.string().trim().min(2).max(120),
      sourceAttribution: z.string().trim().max(180).nullable().optional(),
    }).optional(),
    rights: z.object({
      rightsOwner: z.string().trim().min(2).max(160),
      rightsBasis: z.enum(RIGHTS_BASIS_OPTIONS),
      rightsVerified: z.boolean(),
      evidenceRef: z.string().trim().max(280).nullable().optional(),
    }).optional(),
  }),
  z.object({
    action: z.literal("submit_for_review"),
    assignedReviewerUserId: z.string().uuid().optional(),
  }),
  z.object({
    action: z.literal("record_review"),
    decision: z.enum(["approve", "request_changes", "reject"]),
    rubricBreakdown: z.object({
      instructionalQuality: z.number().min(0).max(5),
      factualAccuracy: z.number().min(0).max(5),
      originality: z.number().min(0).max(5),
      safetyCompliance: z.number().min(0).max(5),
    }),
    notes: z.string().trim().max(1200).optional(),
  }),
  z.object({
    action: z.literal("publish"),
  }),
]);

type SubmissionRow = {
  id: string;
  creator_user_id: string;
  assigned_reviewer_user_id: string | null;
  title: string;
  summary: string | null;
  content_type: string;
  draft_payload: Record<string, unknown>;
  workflow_status: CreatorSubmissionStatus;
  provenance_metadata: Record<string, unknown>;
  rights_metadata: Record<string, unknown>;
  rubric_score: number | null;
  rubric_breakdown: Record<string, unknown> | null;
  last_review_decision: "approve" | "request_changes" | "reject" | null;
  review_notes: string | null;
  reviewed_by_user_id: string | null;
  reviewed_at: string | null;
  published_by_user_id: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

type ReviewRow = {
  id: string;
  submission_id: string;
  reviewer_user_id: string;
  decision: "approve" | "request_changes" | "reject";
  rubric_score: number;
  rubric_breakdown: Record<string, unknown>;
  notes: string | null;
  created_at: string;
};

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

function mapSubmission(row: SubmissionRow) {
  return {
    id: row.id,
    creatorUserId: row.creator_user_id,
    assignedReviewerUserId: row.assigned_reviewer_user_id,
    title: row.title,
    summary: row.summary,
    contentType: row.content_type,
    draftPayload: row.draft_payload,
    workflowStatus: row.workflow_status,
    provenance: row.provenance_metadata,
    rights: row.rights_metadata,
    rubricScore: row.rubric_score,
    rubricBreakdown: row.rubric_breakdown,
    lastReviewDecision: row.last_review_decision,
    reviewNotes: row.review_notes,
    reviewedByUserId: row.reviewed_by_user_id,
    reviewedAt: row.reviewed_at,
    publishedByUserId: row.published_by_user_id,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function parseRightsMetadata(input: Record<string, unknown>) {
  const rightsOwner = typeof input.rightsOwner === "string" ? input.rightsOwner : "";
  const rightsBasis = typeof input.rightsBasis === "string" ? input.rightsBasis : "fair_use_pending";
  const rightsVerified = input.rightsVerified === true;
  const evidenceRef = typeof input.evidenceRef === "string" ? input.evidenceRef : null;

  return normalizeRightsMetadata({
    rightsOwner,
    rightsBasis: rightsBasis as RightsBasis,
    rightsVerified,
    evidenceRef,
  });
}

function normalizeReviewNotes(value: string | undefined): string | null {
  if (!value) return null;
  const moderated = moderateCreatorText(value, {
    maxLength: 1200,
    allowEmpty: true,
  });
  if (!moderated.ok) {
    throw new Error(moderated.reason ?? "Review notes failed moderation.");
  }
  return moderated.sanitized || null;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ submissionId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:creator:submission:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { submissionId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const { data: submissionData, error: submissionError } = await admin
    .from("creator_submissions")
    .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
    .eq("id", submissionId)
    .maybeSingle();

  if (submissionError) {
    if (isMissingCreatorTableError(submissionError)) {
      return NextResponse.json(
        { error: "Creator pipeline tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load creator submission.", toSafeErrorRecord(submissionError));
    return NextResponse.json({ error: "Failed to load creator submission." }, { status: 500 });
  }

  const submission = submissionData as SubmissionRow | null;
  if (!submission) {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }

  const canAccess = submission.creator_user_id === user.id || submission.assigned_reviewer_user_id === user.id;
  if (!canAccess) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { data: reviewRows, error: reviewsError } = await admin
    .from("creator_submission_reviews")
    .select("id, submission_id, reviewer_user_id, decision, rubric_score, rubric_breakdown, notes, created_at")
    .eq("submission_id", submissionId)
    .order("created_at", { ascending: false })
    .limit(30);

  if (reviewsError) {
    if (isMissingCreatorTableError(reviewsError)) {
      return NextResponse.json(
        { error: "Creator pipeline tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load creator submission reviews.", toSafeErrorRecord(reviewsError));
    return NextResponse.json({ error: "Failed to load creator submission reviews." }, { status: 500 });
  }

  return NextResponse.json({
    submission: mapSubmission(submission),
    reviews: (reviewRows ?? []) as ReviewRow[],
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ submissionId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:creator:submission:post", {
    max: 70,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { submissionId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = actionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: submissionData, error: submissionError } = await admin
    .from("creator_submissions")
    .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
    .eq("id", submissionId)
    .maybeSingle();

  if (submissionError) {
    if (isMissingCreatorTableError(submissionError)) {
      return NextResponse.json(
        { error: "Creator pipeline tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load creator submission.", toSafeErrorRecord(submissionError));
    return NextResponse.json({ error: "Failed to load creator submission." }, { status: 500 });
  }

  const submission = submissionData as SubmissionRow | null;
  if (!submission) {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }

  if (parsed.data.action === "update_draft") {
    if (submission.creator_user_id !== user.id) {
      return NextResponse.json({ error: "Only the creator can update draft content." }, { status: 403 });
    }

    if (!(submission.workflow_status === "draft" || submission.workflow_status === "rejected")) {
      return NextResponse.json(
        { error: "Only draft or rejected submissions can be edited." },
        { status: 409 },
      );
    }

    const patch: Record<string, unknown> = {};

    if (typeof parsed.data.title === "string") {
      const moderatedTitle = moderateCreatorText(parsed.data.title, { maxLength: 140 });
      if (!moderatedTitle.ok) {
        return NextResponse.json(
          { error: "Submission title failed moderation.", details: moderatedTitle.reason },
          { status: 400 },
        );
      }
      patch.title = moderatedTitle.sanitized;
    }

    if (Object.prototype.hasOwnProperty.call(parsed.data, "summary")) {
      const summaryCandidate = parsed.data.summary ?? "";
      const moderatedSummary = moderateCreatorText(summaryCandidate, {
        maxLength: 500,
        allowEmpty: true,
      });
      if (!moderatedSummary.ok) {
        return NextResponse.json(
          { error: "Submission summary failed moderation.", details: moderatedSummary.reason },
          { status: 400 },
        );
      }
      patch.summary = moderatedSummary.sanitized || null;
    }

    if (parsed.data.draftPayload) {
      patch.draft_payload = parsed.data.draftPayload;
    }

    if (Object.prototype.hasOwnProperty.call(parsed.data, "assignedReviewerUserId")) {
      patch.assigned_reviewer_user_id = parsed.data.assignedReviewerUserId ?? null;
    }

    if (parsed.data.provenance) {
      patch.provenance_metadata = normalizeProvenanceMetadata({
        sourceType: parsed.data.provenance.sourceType,
        sourceUri: parsed.data.provenance.sourceUri ?? null,
        sourceLicense: parsed.data.provenance.sourceLicense,
        sourceAttribution: parsed.data.provenance.sourceAttribution ?? null,
      });
    }

    if (parsed.data.rights) {
      patch.rights_metadata = normalizeRightsMetadata({
        rightsOwner: parsed.data.rights.rightsOwner,
        rightsBasis: parsed.data.rights.rightsBasis as RightsBasis,
        rightsVerified: parsed.data.rights.rightsVerified,
        evidenceRef: parsed.data.rights.evidenceRef ?? null,
      });
    }

    const { data, error } = await admin
      .from("creator_submissions")
      .update(patch)
      .eq("id", submissionId)
      .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
      .maybeSingle();

    if (error) {
      if (isMissingCreatorTableError(error)) {
        return NextResponse.json(
          { error: "Creator pipeline tables are not migrated yet." },
          { status: 503 },
        );
      }

      console.error("Failed to update creator submission draft.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to update creator submission." }, { status: 500 });
    }

    return NextResponse.json({ submission: mapSubmission(data as SubmissionRow) });
  }

  if (parsed.data.action === "submit_for_review") {
    if (submission.creator_user_id !== user.id) {
      return NextResponse.json({ error: "Only the creator can submit for review." }, { status: 403 });
    }

    if (!isValidSubmissionTransition(submission.workflow_status, "in_review")) {
      return NextResponse.json(
        {
          error: "Invalid submission workflow transition.",
          currentStatus: submission.workflow_status,
          nextStatus: "in_review",
        },
        { status: 409 },
      );
    }

    const updatePayload: Record<string, unknown> = {
      workflow_status: "in_review",
    };

    if (parsed.data.assignedReviewerUserId) {
      updatePayload.assigned_reviewer_user_id = parsed.data.assignedReviewerUserId;
    }

    const { data, error } = await admin
      .from("creator_submissions")
      .update(updatePayload)
      .eq("id", submissionId)
      .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
      .maybeSingle();

    if (error) {
      if (isMissingCreatorTableError(error)) {
        return NextResponse.json(
          { error: "Creator pipeline tables are not migrated yet." },
          { status: 503 },
        );
      }

      console.error("Failed to submit creator submission for review.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to submit for review." }, { status: 500 });
    }

    return NextResponse.json({ submission: mapSubmission(data as SubmissionRow) });
  }

  if (parsed.data.action === "record_review") {
    if (submission.creator_user_id === user.id) {
      return NextResponse.json({ error: "Creators cannot review their own submissions." }, { status: 403 });
    }

    const isAssignedReviewer = submission.assigned_reviewer_user_id === user.id;
    if (!isAssignedReviewer) {
      return NextResponse.json({ error: "Only the assigned reviewer can record review." }, { status: 403 });
    }

    if (submission.workflow_status !== "in_review") {
      return NextResponse.json(
        { error: "Submission must be in_review before recording review." },
        { status: 409 },
      );
    }

    const rubricScore = buildRubricScoreFromBreakdown(parsed.data.rubricBreakdown as RubricBreakdown);
    let nextStatus: CreatorSubmissionStatus = submission.workflow_status;

    if (parsed.data.decision === "approve") {
      nextStatus = rubricScore >= MINIMUM_PUBLISH_RUBRIC_SCORE ? "approved" : "in_review";
    } else if (parsed.data.decision === "request_changes") {
      nextStatus = "draft";
    } else {
      nextStatus = "rejected";
    }

    if (!isValidSubmissionTransition(submission.workflow_status, nextStatus)) {
      return NextResponse.json(
        {
          error: "Invalid review transition.",
          currentStatus: submission.workflow_status,
          nextStatus,
        },
        { status: 409 },
      );
    }

    let reviewNotes: string | null = null;
    try {
      reviewNotes = normalizeReviewNotes(parsed.data.notes);
    } catch (error) {
      return NextResponse.json(
        {
          error: "Review notes failed moderation.",
          details: error instanceof Error ? error.message : "Invalid review notes",
        },
        { status: 400 },
      );
    }

    const now = new Date().toISOString();

    const { error: reviewInsertError } = await admin
      .from("creator_submission_reviews")
      .insert({
        submission_id: submissionId,
        reviewer_user_id: user.id,
        decision: parsed.data.decision,
        rubric_score: rubricScore,
        rubric_breakdown: parsed.data.rubricBreakdown,
        notes: reviewNotes,
      });

    if (reviewInsertError) {
      if (isMissingCreatorTableError(reviewInsertError)) {
        return NextResponse.json(
          { error: "Creator pipeline tables are not migrated yet." },
          { status: 503 },
        );
      }

      console.error("Failed to insert creator submission review.", toSafeErrorRecord(reviewInsertError));
      return NextResponse.json({ error: "Failed to save review." }, { status: 500 });
    }

    const { data, error } = await admin
      .from("creator_submissions")
      .update({
        workflow_status: nextStatus,
        rubric_score: rubricScore,
        rubric_breakdown: parsed.data.rubricBreakdown,
        last_review_decision: parsed.data.decision,
        review_notes: reviewNotes,
        reviewed_by_user_id: user.id,
        reviewed_at: now,
      })
      .eq("id", submissionId)
      .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
      .maybeSingle();

    if (error) {
      if (isMissingCreatorTableError(error)) {
        return NextResponse.json(
          { error: "Creator pipeline tables are not migrated yet." },
          { status: 503 },
        );
      }

      console.error("Failed to update creator submission after review.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to update submission review state." }, { status: 500 });
    }

    return NextResponse.json({
      submission: mapSubmission(data as SubmissionRow),
      review: {
        decision: parsed.data.decision,
        rubricScore,
        rubricBreakdown: parsed.data.rubricBreakdown,
        notes: reviewNotes,
      },
    });
  }

  if (submission.creator_user_id !== user.id) {
    return NextResponse.json({ error: "Only the creator can publish this submission." }, { status: 403 });
  }

  const rights = parseRightsMetadata(submission.rights_metadata ?? {});
  const publishCheck = canPublishSubmission({
    status: submission.workflow_status,
    rubricScore: submission.rubric_score,
    rights,
  });

  if (!publishCheck.ok) {
    return NextResponse.json(
      {
        error: "Submission failed publish requirements.",
        reason: publishCheck.reason,
      },
      { status: 409 },
    );
  }

  const now = new Date().toISOString();
  const { data, error } = await admin
    .from("creator_submissions")
    .update({
      workflow_status: "published",
      published_by_user_id: user.id,
      published_at: now,
    })
    .eq("id", submissionId)
    .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
    .maybeSingle();

  if (error) {
    if (isMissingCreatorTableError(error)) {
      return NextResponse.json(
        { error: "Creator pipeline tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to publish creator submission.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to publish submission." }, { status: 500 });
  }

  return NextResponse.json({
    submission: mapSubmission(data as SubmissionRow),
  });
}