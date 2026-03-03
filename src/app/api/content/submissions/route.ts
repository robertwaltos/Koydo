/**
 * POST /api/content/submissions — Create a draft submission
 * GET  /api/content/submissions — List submissions (creator or review queue)
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSubmission, listSubmissions } from "@/lib/content/creator-pipeline";

const createSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().max(2000).optional(),
  subject: z.string().min(1).max(60),
  gradeBand: z.string().max(20).optional(),
  difficultyBand: z.string().max(10).optional(),
  content: z.record(z.string(), z.unknown()),
  sourceType: z
    .enum(["original", "adapted", "curated", "ai_assisted", "translated", "remix"])
    .optional(),
  sourceAttribution: z.string().max(500).optional(),
  licenseType: z
    .enum([
      "cc-by-4.0",
      "cc-by-sa-4.0",
      "cc-by-nc-4.0",
      "cc0",
      "all-rights-reserved",
      "educational-use",
      "custom",
    ])
    .optional(),
  rightsHolder: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:content:submissions:create", {
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

    const body = await request.json().catch(() => ({}));
    const validation = createSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validation.error.issues },
        { status: 400 },
      );
    }

    const { submission, error } = await createSubmission(
      supabase,
      user.id,
      validation.data,
    );
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ submission }, { status: 201 });
  } catch (error) {
    console.error("Submission create error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:content:submissions:list", {
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

    const url = new URL(request.url);
    const role = url.searchParams.get("role"); // "creator" or "reviewer"
    const status = url.searchParams.get("status"); // comma-separated statuses

    const submissions = await listSubmissions(supabase, {
      creatorUserId: role === "reviewer" ? undefined : user.id,
      status: status
        ? (status.split(",").filter(Boolean) as import("@/lib/content/creator-pipeline").SubmissionStatus[])
        : undefined,
    });

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("Submissions list error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
