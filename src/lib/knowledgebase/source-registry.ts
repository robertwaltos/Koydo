import sourcesJson from "@/lib/knowledgebase/source-registry.json";

export type SourceTier = "green" | "yellow" | "red";

export type KnowledgebaseSource = {
  id: string;
  name: string;
  region: string;
  category: "official_curriculum" | "free_course_transcripts";
  url: string;
  termsUrl?: string;
  licenseHint?: string;
  automationAllowed: boolean;
  tier: SourceTier;
  transcriptFormat?: "html" | "pdf" | "vtt" | "srt" | "mixed";
  notes?: string;
};

export const knowledgebaseSources: KnowledgebaseSource[] = sourcesJson as KnowledgebaseSource[];
