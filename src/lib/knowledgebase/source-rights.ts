import rightsJson from "@/lib/knowledgebase/source-rights.json";

export type SourceRightsStatus = "approved" | "conditional" | "blocked";

export type SourceIngestionPolicy =
  | "full_text_with_attribution"
  | "transcript_only_with_attribution"
  | "manual_review_required";

export type SourceRightsPolicy = {
  sourceId: string;
  rightsStatus: SourceRightsStatus;
  ingestionPolicy: SourceIngestionPolicy;
  allowedAssetTypes: string[];
  requiresAttribution: boolean;
  requiresManualReview: boolean;
  notes?: string;
};

export const sourceRightsPolicies: SourceRightsPolicy[] = rightsJson as SourceRightsPolicy[];

export const sourceRightsById = new Map(
  sourceRightsPolicies.map((policy) => [policy.sourceId, policy] as const),
);
