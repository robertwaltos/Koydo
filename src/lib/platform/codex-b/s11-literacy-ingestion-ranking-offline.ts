import { z } from "zod";

// S11 tickets: B-C07, B-C08, B-C09

export const literacyCatalogItemSchema = z.object({
  itemId: z.string().trim().min(1).max(120),
  title: z.string().trim().min(1).max(240),
  rightsStatus: z.enum(["approved", "conditional", "blocked"]),
  rightsEvidenceRef: z.string().trim().min(1).max(240),
  readingLevel: z.number().int().min(0).max(20),
  tags: z.array(z.string().trim().min(1).max(60)).max(50).default([]),
});

export type LiteracyCatalogItem = z.infer<typeof literacyCatalogItemSchema>;

export function filterRightsApprovedCatalog(items: readonly LiteracyCatalogItem[]) {
  return items
    .map((item) => literacyCatalogItemSchema.parse(item))
    .filter((item) => item.rightsStatus === "approved" || item.rightsStatus === "conditional");
}

export type RankingSignal = {
  recencyScore: number;
  engagementScore: number;
  completionScore: number;
  rightsBoost: number;
};

export function scoreLiteracyItemRanking(signal: RankingSignal) {
  const score = (
    signal.recencyScore * 0.2
    + signal.engagementScore * 0.4
    + signal.completionScore * 0.3
    + signal.rightsBoost * 0.1
  );
  return Math.round(score * 1000) / 1000;
}

export type OfflinePackRecord = {
  packId: string;
  manifestHash: string;
  assetCount: number;
  downloadedAssetCount: number;
  checksumVerified: boolean;
};

export function evaluateOfflinePackReliability(records: readonly OfflinePackRecord[]) {
  const failed = records.filter(
    (record) => !record.checksumVerified || record.downloadedAssetCount < record.assetCount,
  );

  return {
    total: records.length,
    failed: failed.length,
    healthy: records.length - failed.length,
    reliabilityRate: records.length === 0 ? 0 : (records.length - failed.length) / records.length,
    failedPackIds: failed.map((record) => record.packId),
  };
}
