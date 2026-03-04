import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  CREATOR_CONTENT_TYPES,
  RIGHTS_BASIS_OPTIONS,
  moderateCreatorText,
  normalizeProvenanceMetadata,
  normalizeRightsMetadata,
  type CreatorContentType,
  type RightsBasis,
} from "@/lib/creator/pipeline";
import { isMissingCreatorTableError } from "@/lib/creator/errors";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(30),
  scope: z.enum(["mine", "assigned"]).default("mine"),
});

const postSchema = z.object({
  title: z.string().trim().min(1).max(140),
  summary: z.string().trim().max(500).optional(),
  contentType: z.enum(CREATOR_CONTENT_TYPES).default("lesson_pack"),
  draftPayload: z.record(z.string(), z.unknown()).default({}),
  assignedReviewerUserId: z.string().uuid().nullable().optional(),
  provenance: z.object({
    sourceType: z.enum(["original", "adapted", "licensed", "public_domain"]),
    sourceUri: z.string().trim().url().max(500).nullable().optional(),
    sourceLicense: z.string().trim().min(2).max(120),
    sourceAttribution: z.string().trim().max(180).nullable().optional(),
  }),
  rights: z.object({
    rightsOwner: z.string().trim().min(2).max(160),
    rightsBasis: z.enum(RIGHTS_BASIS_OPTIONS),
    rightsVerified: z.boolean(),
    evidenceRef: z.string().trim().max(280).nullable().optional(),
  }),
});

type SubmissionRow = {
  id: string;
  creator_user_id: string;
  assigned_reviewer_user_id: string | null;
  title: string;
  summary: string | null;
  content_type: CreatorContentType;
  draft_payload: Record<string, unknown>;
  workflow_status: "draft" | "in_review" | "approved" | "published" | "rejected";
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

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:creator:submissions:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const query = querySchema.safeParse({
    limit: new URL(request.url).searchParams.get("limit") ?? undefined,
    scope: new URL(request.url).searchParams.get("scope") ?? undefined,
  });
  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  let submissionsQuery = admin
    .from("creator_submissions")
    .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
    .order("updated_at", { ascending: false })
    .limit(query.data.limit);

  if (query.data.scope === "assigned") {
    submissionsQuery = submissionsQuery.eq("assigned_reviewer_user_id", user.id);
  } else {
    submissionsQuery = submissionsQuery.eq("creator_user_id", user.id);
  }

  const { data, error } = await submissionsQuery;
  if (error) {
    if (isMissingCreatorTableError(error)) {
      return NextResponse.json(
        { error: "Creator pipeline tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load creator submissions.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load creator submissions." }, { status: 500 });
  }

  return NextResponse.json({
    submissions: ((data ?? []) as SubmissionRow[]).map(mapSubmission),
  });
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:creator:submissions:post", {
    max: 40,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const moderatedTitle = moderateCreatorText(parsed.data.title, { maxLength: 140 });
  if (!moderatedTitle.ok) {
    return NextResponse.json(
      { error: "Submission title failed moderation.", details: moderatedTitle.reason },
      { status: 400 },
    );
  }

  const moderatedSummary = moderateCreatorText(parsed.data.summary ?? "", {
    maxLength: 500,
    allowEmpty: true,
  });
  if (!moderatedSummary.ok) {
    return NextResponse.json(
      { error: "Submission summary failed moderation.", details: moderatedSummary.reason },
      { status: 400 },
    );
  }

  const provenance = normalizeProvenanceMetadata({
    sourceType: parsed.data.provenance.sourceType,
    sourceUri: parsed.data.provenance.sourceUri ?? null,
    sourceLicense: parsed.data.provenance.sourceLicense,
    sourceAttribution: parsed.data.provenance.sourceAttribution ?? null,
  });

  const rights = normalizeRightsMetadata({
    rightsOwner: parsed.data.rights.rightsOwner,
    rightsBasis: parsed.data.rights.rightsBasis as RightsBasis,
    rightsVerified: parsed.data.rights.rightsVerified,
    evidenceRef: parsed.data.rights.evidenceRef ?? null,
  });

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("creator_submissions")
    .insert({
      creator_user_id: user.id,
      assigned_reviewer_user_id: parsed.data.assignedReviewerUserId ?? null,
      title: moderatedTitle.sanitized,
      summary: moderatedSummary.sanitized || null,
      content_type: parsed.data.contentType,
      draft_payload: parsed.data.draftPayload,
      workflow_status: "draft",
      provenance_metadata: provenance,
      rights_metadata: rights,
    })
    .select("id, creator_user_id, assigned_reviewer_user_id, title, summary, content_type, draft_payload, workflow_status, provenance_metadata, rights_metadata, rubric_score, rubric_breakdown, last_review_decision, review_notes, reviewed_by_user_id, reviewed_at, published_by_user_id, published_at, created_at, updated_at")
    .maybeSingle();

  if (error) {
    if (isMissingCreatorTableError(error)) {
      return NextResponse.json(
        { error: "Creator pipeline tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to create creator submission.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create creator submission." }, { status: 500 });
  }

  return NextResponse.json({
    submission: mapSubmission(data as SubmissionRow),
  });
}