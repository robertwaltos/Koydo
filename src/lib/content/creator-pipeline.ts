/**
 * Creator pipeline workflow: draft → submit → review → approve/reject → publish.
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import {
  evaluateRubric,
  autoScoreContent,
  extractContentMetrics,
  type RubricScores,
  type RubricResult,
} from "./quality-rubric";

export type SubmissionStatus =
  | "draft"
  | "submitted"
  | "in_review"
  | "revision_requested"
  | "approved"
  | "published"
  | "rejected"
  | "archived";

export interface ContentSubmission {
  id: string;
  creatorUserId: string;
  title: string;
  description: string;
  subject: string;
  gradeBand: string | null;
  difficultyBand: string | null;
  content: Record<string, unknown>;
  status: SubmissionStatus;
  sourceType: string;
  sourceAttribution: string;
  licenseType: string;
  rightsHolder: string;
  rightsVerified: boolean;
  rubricScore: number | null;
  rubricDetails: Record<string, unknown>;
  submittedAt: string | null;
  reviewedAt: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSubmissionInput {
  title: string;
  description?: string;
  subject: string;
  gradeBand?: string;
  difficultyBand?: string;
  content: Record<string, unknown>;
  sourceType?: string;
  sourceAttribution?: string;
  licenseType?: string;
  rightsHolder?: string;
}

/**
 * Create a draft submission.
 */
export async function createSubmission(
  supabase: SupabaseClient,
  userId: string,
  input: CreateSubmissionInput,
): Promise<{ submission: ContentSubmission | null; error: string | null }> {
  // Auto-score for preliminary quality feedback
  const metrics = extractContentMetrics(input.content);
  const autoScores = autoScoreContent(metrics);
  const rubricResult = evaluateRubric(autoScores);

  const { data, error } = await supabase
    .from("content_submissions")
    .insert({
      creator_user_id: userId,
      title: input.title.trim(),
      description: (input.description ?? "").trim(),
      subject: input.subject,
      grade_band: input.gradeBand || null,
      difficulty_band: input.difficultyBand || null,
      content: input.content,
      status: "draft",
      source_type: input.sourceType ?? "original",
      source_attribution: input.sourceAttribution ?? "",
      license_type: input.licenseType ?? "cc-by-4.0",
      rights_holder: input.rightsHolder ?? "",
      rubric_score: rubricResult.overall,
      rubric_details: {
        auto: true,
        scores: autoScores,
        feedback: rubricResult.feedback,
      },
    })
    .select()
    .single();

  if (error) return { submission: null, error: error.message };
  return { submission: mapRow(data), error: null };
}

/**
 * Submit a draft for review.
 */
export async function submitForReview(
  supabase: SupabaseClient,
  userId: string,
  submissionId: string,
): Promise<{ error: string | null }> {
  const { data: sub } = await supabase
    .from("content_submissions")
    .select("id, creator_user_id, status, content")
    .eq("id", submissionId)
    .single();

  if (!sub) return { error: "Submission not found." };
  if (sub.creator_user_id !== userId) return { error: "Not your submission." };
  if (sub.status !== "draft" && sub.status !== "revision_requested") {
    return { error: "Only drafts or revision-requested submissions can be submitted." };
  }

  // Re-score before submission
  const metrics = extractContentMetrics(sub.content as Record<string, unknown>);
  const autoScores = autoScoreContent(metrics);
  const result = evaluateRubric(autoScores);

  const { error } = await supabase
    .from("content_submissions")
    .update({
      status: "submitted",
      submitted_at: new Date().toISOString(),
      rubric_score: result.overall,
      rubric_details: { auto: true, scores: autoScores, feedback: result.feedback },
      updated_at: new Date().toISOString(),
    })
    .eq("id", submissionId);

  return { error: error?.message ?? null };
}

/**
 * Review a submission (reviewer action).
 */
export async function reviewSubmission(
  supabase: SupabaseClient,
  reviewerUserId: string,
  submissionId: string,
  scores: RubricScores,
  verdict: "approve" | "request_revision" | "reject",
  comments: string,
  revisionNotes?: string,
): Promise<{ result: RubricResult | null; error: string | null }> {
  const { data: sub } = await supabase
    .from("content_submissions")
    .select("id, status, creator_user_id")
    .eq("id", submissionId)
    .single();

  if (!sub) return { result: null, error: "Submission not found." };
  if (sub.creator_user_id === reviewerUserId) {
    return { result: null, error: "Cannot review your own submission." };
  }
  if (!["submitted", "in_review"].includes(sub.status)) {
    return { result: null, error: "Submission is not awaiting review." };
  }

  const rubricResult = evaluateRubric(scores);

  // Insert the review record
  const { error: reviewError } = await supabase.from("content_reviews").insert({
    submission_id: submissionId,
    reviewer_user_id: reviewerUserId,
    verdict,
    accuracy_score: scores.accuracy,
    clarity_score: scores.clarity,
    engagement_score: scores.engagement,
    age_appropriateness: scores.ageAppropriateness,
    standards_alignment: scores.standardsAlignment,
    comments: comments.trim(),
    revision_notes: (revisionNotes ?? "").trim(),
  });

  if (reviewError) return { result: null, error: reviewError.message };

  // Update submission status based on verdict
  const newStatus: SubmissionStatus =
    verdict === "approve"
      ? "approved"
      : verdict === "reject"
        ? "rejected"
        : "revision_requested";

  await supabase
    .from("content_submissions")
    .update({
      status: newStatus,
      reviewed_at: new Date().toISOString(),
      rubric_score: rubricResult.overall,
      rubric_details: {
        auto: false,
        scores,
        feedback: rubricResult.feedback,
        reviewer: reviewerUserId,
      },
      updated_at: new Date().toISOString(),
    })
    .eq("id", submissionId);

  return { result: rubricResult, error: null };
}

/**
 * Publish an approved submission (quality gate enforced).
 */
export async function publishSubmission(
  supabase: SupabaseClient,
  userId: string,
  submissionId: string,
): Promise<{ error: string | null }> {
  const { data: sub } = await supabase
    .from("content_submissions")
    .select("id, status, rubric_score, minimum_score, rights_verified")
    .eq("id", submissionId)
    .single();

  if (!sub) return { error: "Submission not found." };
  if (sub.status !== "approved") {
    return { error: "Only approved submissions can be published." };
  }

  const score = parseFloat(sub.rubric_score ?? "0");
  const minimum = parseFloat(sub.minimum_score ?? "70");

  if (score < minimum) {
    return {
      error: `Quality score ${score.toFixed(1)} is below minimum ${minimum}. Requires further revision.`,
    };
  }

  const { error } = await supabase
    .from("content_submissions")
    .update({
      status: "published",
      published_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", submissionId);

  return { error: error?.message ?? null };
}

/**
 * List submissions for a creator or for review queue.
 */
export async function listSubmissions(
  supabase: SupabaseClient,
  options: {
    creatorUserId?: string;
    status?: SubmissionStatus | SubmissionStatus[];
    limit?: number;
  },
): Promise<ContentSubmission[]> {
  let query = supabase
    .from("content_submissions")
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(options.limit ?? 50);

  if (options.creatorUserId) {
    query = query.eq("creator_user_id", options.creatorUserId);
  }

  if (options.status) {
    if (Array.isArray(options.status)) {
      query = query.in("status", options.status);
    } else {
      query = query.eq("status", options.status);
    }
  }

  const { data } = await query;
  if (!data) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((row: any) => mapRow(row));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRow(row: any): ContentSubmission {
  return {
    id: row.id,
    creatorUserId: row.creator_user_id,
    title: row.title,
    description: row.description ?? "",
    subject: row.subject,
    gradeBand: row.grade_band,
    difficultyBand: row.difficulty_band,
    content: row.content ?? {},
    status: row.status,
    sourceType: row.source_type ?? "original",
    sourceAttribution: row.source_attribution ?? "",
    licenseType: row.license_type ?? "cc-by-4.0",
    rightsHolder: row.rights_holder ?? "",
    rightsVerified: row.rights_verified ?? false,
    rubricScore: row.rubric_score ? parseFloat(row.rubric_score) : null,
    rubricDetails: row.rubric_details ?? {},
    submittedAt: row.submitted_at,
    reviewedAt: row.reviewed_at,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
