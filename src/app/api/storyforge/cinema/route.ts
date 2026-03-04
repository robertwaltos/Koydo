import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isStoryForgeCinemaPremiumPending } from "@/lib/platform/features";
import {
  buildStoryForgeAcceptanceSnapshot,
  buildStoryForgePhase1Portfolio,
  getStoryForgePhase1Titles,
  getStoryForgeRightsCatalog,
  type StoryForgeTier,
} from "@/lib/forge/storyforge/phase1-cinema";

const querySchema = z.object({
  titleSlug: z.string().trim().min(1).max(140).optional(),
  tier: z.enum(["all", "tier1", "tier3"]).default("all"),
  includePortfolio: z.coerce.boolean().default(true),
});

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

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:storyforge:cinema:get", {
    max: 40,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  try {
    const url = new URL(request.url);
    const parsed = querySchema.safeParse({
      titleSlug: url.searchParams.get("titleSlug") ?? undefined,
      tier: url.searchParams.get("tier") ?? undefined,
      includePortfolio: url.searchParams.get("includePortfolio") ?? undefined,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const targetTiers: StoryForgeTier[] =
      parsed.data.tier === "all" ? ["tier1", "tier3"] : [parsed.data.tier];

    const portfolio = parsed.data.includePortfolio
      ? buildStoryForgePhase1Portfolio({
        titleSlug: parsed.data.titleSlug,
        targetTiers,
      })
      : [];

    if (parsed.data.titleSlug && parsed.data.includePortfolio && portfolio.length === 0) {
      return NextResponse.json(
        { error: "Unknown StoryForge Phase 1 title slug." },
        { status: 404 },
      );
    }

    const featureLocked = isStoryForgeCinemaPremiumPending();
    const acceptanceSnapshot = buildStoryForgeAcceptanceSnapshot(portfolio);

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      feature: {
        id: "storyforge-cinema",
        status: featureLocked ? "premium_pending" : "available",
        label: featureLocked ? "Premium Pending Feature" : "Available",
        userMessage: featureLocked
          ? "StoryForge Cinema is currently locked for users pending premium rollout."
          : "StoryForge Cinema is available.",
        paywallPath: featureLocked ? "/billing/paywall" : null,
      },
      phase1: {
        titleCount: getStoryForgePhase1Titles().length,
        titles: getStoryForgePhase1Titles(),
        rightsCatalog: getStoryForgeRightsCatalog(),
      },
      acceptanceSnapshot,
      portfolio,
    });
  } catch (error) {
    console.error("[api/storyforge/cinema]", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
