/**
 * StoryForge Cinema — API route
 *
 * POST /api/storyforge/[storyId]
 *   Fetches the book from Gutenberg, decomposes into cinematic scenes,
 *   generates comprehension quiz breakpoints, and returns the full
 *   scene array + quiz data.
 *
 * GET /api/storyforge/[storyId]
 *   Returns cached film data from Supabase (if available).
 */

import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { STORYFORGE_PRIORITY_QUEUE } from "@/lib/storyforge/types";
import { fetchGutenbergBook, verifyPublicDomain } from "@/lib/storyforge/gutenberg-service";
import { decomposeBookIntoScenes } from "@/lib/storyforge/scene-decomposer";
import { generateQuizBreakpoints } from "@/lib/storyforge/comprehension-quiz";

type RouteContext = { params: Promise<{ storyId: string }> };

// ── POST: generate film from scratch ────────────────────────────────

export async function POST(req: NextRequest, ctx: RouteContext) {
  try {
    const rateLimit = await enforceIpRateLimit(req, "api:storyforge:generate", {
      max: 5,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const { storyId } = await ctx.params;

    // Validate story is in our priority queue
    const meta = STORYFORGE_PRIORITY_QUEUE.find((s) => s.id === storyId);
    if (!meta) {
      return NextResponse.json(
        { error: "Story not found in Phase 1 queue" },
        { status: 404 },
      );
    }

    // Verify public domain
    const pdCheck = verifyPublicDomain(meta);
    if (!pdCheck.verified) {
      return NextResponse.json(
        { error: `Story failed public-domain verification: ${pdCheck.reason}` },
        { status: 403 },
      );
    }

    // Auth check
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if already cached in DB
    const admin = createSupabaseAdminClient();
    const { data: cached } = await admin
      .from("storyforge_films")
      .select("scenes, quiz_breakpoints")
      .eq("story_id", storyId)
      .maybeSingle();

    if (cached?.scenes && cached?.quiz_breakpoints) {
      return NextResponse.json({
        scenes: cached.scenes,
        quizBreakpoints: cached.quiz_breakpoints,
        cached: true,
      });
    }

    // Fetch from Gutenberg
    const book = await fetchGutenbergBook(meta);

    // Decompose into cinematic scenes
    const scenes = decomposeBookIntoScenes(
      storyId,
      meta.title,
      book.chapters.map((ch) => ({ index: ch.index, text: ch.text })),
    );

    // Generate quiz breakpoints
    const quizBreakpoints = generateQuizBreakpoints(scenes);

    // Cache in DB
    await admin.from("storyforge_films").upsert(
      {
        story_id: storyId,
        user_id: user.id,
        title: meta.title,
        author: meta.author,
        scenes,
        quiz_breakpoints: quizBreakpoints,
        scene_count: scenes.length,
        status: "published",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "story_id" },
    );

    return NextResponse.json({
      scenes,
      quizBreakpoints,
      cached: false,
    });
  } catch (err: unknown) {
    console.error("[StoryForge POST]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal error" },
      { status: 500 },
    );
  }
}

// ── GET: retrieve cached film ───────────────────────────────────────

export async function GET(req: NextRequest, ctx: RouteContext) {
  try {
    const rateLimit = await enforceIpRateLimit(req, "api:storyforge:read", {
      max: 30,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const { storyId } = await ctx.params;

    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createSupabaseAdminClient();
    const { data: film, error: dbError } = await admin
      .from("storyforge_films")
      .select("story_id, title, author, scenes, quiz_breakpoints, scene_count, status, created_at")
      .eq("story_id", storyId)
      .maybeSingle();

    if (dbError) {
      console.error("[StoryForge GET]", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    if (!film) {
      return NextResponse.json(
        { error: "Film not found — launch StoryForge Cinema to generate it" },
        { status: 404 },
      );
    }

    return NextResponse.json(film);
  } catch (err: unknown) {
    console.error("[StoryForge GET]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal error" },
      { status: 500 },
    );
  }
}
