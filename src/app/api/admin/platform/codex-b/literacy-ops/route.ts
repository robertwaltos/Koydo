import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  evaluateOfflinePackReliability,
  filterRightsApprovedCatalog,
  literacyCatalogItemSchema,
  scoreLiteracyItemRanking,
} from "@/lib/platform/codex-b/s11-literacy-ingestion-ranking-offline";

const requestSchema = z.object({
  catalogItems: z.array(literacyCatalogItemSchema).max(2000).default([]),
  rankingSignals: z
    .array(
      z.object({
        recencyScore: z.number().min(0).max(1),
        engagementScore: z.number().min(0).max(1),
        completionScore: z.number().min(0).max(1),
        rightsBoost: z.number().min(0).max(1),
      }),
    )
    .max(2000)
    .default([]),
  offlinePacks: z
    .array(
      z.object({
        packId: z.string().trim().min(1).max(120),
        manifestHash: z.string().trim().min(1).max(120),
        assetCount: z.number().int().min(0).max(100000),
        downloadedAssetCount: z.number().int().min(0).max(100000),
        checksumVerified: z.boolean(),
      }),
    )
    .max(2000)
    .default([]),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:literacy-ops:post", {
    max: 20,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many literacy ops requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const approvedCatalog = filterRightsApprovedCatalog(parsed.data.catalogItems);
    const rankingScores = parsed.data.rankingSignals.map((signal, index) => ({
      index,
      score: scoreLiteracyItemRanking(signal),
    }));
    const offlineReliability = evaluateOfflinePackReliability(parsed.data.offlinePacks);

    return NextResponse.json({
      approvedCatalogCount: approvedCatalog.length,
      rankingScores,
      offlineReliability,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
