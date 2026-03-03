/**
 * GET   /api/content/submissions/[id]             — Get submission details
 * PATCH /api/content/submissions/[id]             — Update draft content
 * POST  /api/content/submissions/[id]?action=...  — Workflow actions:
 *        action=submit   → submit for review
 *        action=review   → submit a review (reviewer)
 *        action=publish  → publish approved submission
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  submitForReview,
  reviewSubmission,
  publishSubmission,
} from "@/lib/content/creator-pipeline";

type RouteContext = { params: Promise<{ id: string }> };

const reviewSchema = z.object({
  scores: z.object({
    accuracy: z.number().int().min(0).max(100),
    clarity: z.number().int().min(0).max(100),
    engagement: z.number().int().min(0).max(100),
    ageAppropriateness: z.number().int().min(0).max(100),
    standardsAlignment: z.number().int().min(0).max(100),
  }),
  verdict: z.enum(["approve", "request_revision", "reject"]),
  comments: z.string().max(5000),
  revisionNotes: z.string().max(2000).optional(),
});

export async function GET(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const rl = await enforceIpRateLimit(request, "api:content:submissions:get", {
      max: 30,
      windowMs: 60_000,
    });
    if (!rl.allowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { data: submission } = await supabase
      .from("content_submissions")
      .select("*")
      .eq("id", id)
      .single();

    if (!submission) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Fetch reviews for this submission
    const { data: reviews } = await supabase
      .from("content_reviews")
      .select("*")
      .eq("submission_id", id)
      .order("created_at", { ascending: false });

    return NextResponse.json({ submission, reviews: reviews ?? [] });
  } catch (error) {
    console.error("Submission GET error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const rl = await enforceIpRateLimit(request, "api:content:submissions:update", {
      max: 15,
      windowMs: 60_000,
    });
    if (!rl.allowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json().catch(() => ({}));

    // Only allow editing drafts or revision-requested
    const { data: existing } = await supabase
      .from("content_submissions")
      .select("id, creator_user_id, status")
      .eq("id", id)
      .single();

    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (existing.creator_user_id !== user.id) {
      return NextResponse.json({ error: "Not your submission" }, { status: 403 });
    }
    if (!["draft", "revision_requested"].includes(existing.status)) {
      return NextResponse.json({ error: "Cannot edit in current status" }, { status: 400 });
    }

    const updateFields: Record<string, unknown> = {};
    if (body.title) updateFields.title = body.title;
    if (body.description !== undefined) updateFields.description = body.description;
    if (body.content) updateFields.content = body.content;
    if (body.subject) updateFields.subject = body.subject;
    if (body.gradeBand !== undefined) updateFields.grade_band = body.gradeBand;
    if (body.sourceType) updateFields.source_type = body.sourceType;
    if (body.sourceAttribution !== undefined) updateFields.source_attribution = body.sourceAttribution;
    if (body.licenseType) updateFields.license_type = body.licenseType;
    if (body.rightsHolder !== undefined) updateFields.rights_holder = body.rightsHolder;
    updateFields.updated_at = new Date().toISOString();

    const { error } = await supabase
      .from("content_submissions")
      .update(updateFields)
      .eq("id", id);

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ updated: true });
  } catch (error) {
    console.error("Submission PATCH error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const rl = await enforceIpRateLimit(request, "api:content:submissions:action", {
      max: 10,
      windowMs: 60_000,
    });
    if (!rl.allowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const url = new URL(request.url);
    const action = url.searchParams.get("action");

    switch (action) {
      case "submit": {
        const { error } = await submitForReview(supabase, user.id, id);
        if (error) return NextResponse.json({ error }, { status: 400 });
        return NextResponse.json({ status: "submitted" });
      }

      case "review": {
        const body = await request.json().catch(() => ({}));
        const validation = reviewSchema.safeParse(body);
        if (!validation.success) {
          return NextResponse.json(
            { error: "Invalid review data", details: validation.error.issues },
            { status: 400 },
          );
        }
        const { result, error } = await reviewSubmission(
          supabase,
          user.id,
          id,
          validation.data.scores,
          validation.data.verdict,
          validation.data.comments,
          validation.data.revisionNotes,
        );
        if (error) return NextResponse.json({ error }, { status: 400 });
        return NextResponse.json({ result });
      }

      case "publish": {
        const { error } = await publishSubmission(supabase, user.id, id);
        if (error) return NextResponse.json({ error }, { status: 400 });
        return NextResponse.json({ status: "published" });
      }

      default:
        return NextResponse.json(
          { error: "Invalid action. Use: submit, review, or publish" },
          { status: 400 },
        );
    }
  } catch (error) {
    console.error("Submission action error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
