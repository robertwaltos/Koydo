import { createHash } from "crypto";
import type { SupabaseClient } from "@supabase/supabase-js";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type EvidenceArtifactType =
  | "compliance_audit_report"
  | "report_export"
  | "moderation_run"
  | "policy_snapshot"
  | "security_event";

export type EvidenceStorageProvider =
  | "supabase_storage"
  | "google_vault_export"
  | "external_archive"
  | "inline";

type StoreEvidenceInput = {
  artifactType: EvidenceArtifactType;
  createdBy?: string | null;
  storageProvider?: EvidenceStorageProvider;
  storagePath?: string | null;
  content?: string | null;
  retentionDays?: number;
  immutable?: boolean;
  metadata?: Record<string, unknown>;
};

function normalizeRetentionDays(input?: number) {
  const fallback = serverEnv.COMPLIANCE_EVIDENCE_RETENTION_DAYS;
  const raw = Number.isFinite(input) ? Number(input) : fallback;
  return Math.max(30, Math.min(3650, Math.trunc(raw)));
}

function normalizeStorageProvider(
  provider?: string | null,
): EvidenceStorageProvider {
  const value = (provider ?? serverEnv.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER).trim();
  if (
    value === "supabase_storage"
    || value === "google_vault_export"
    || value === "external_archive"
    || value === "inline"
  ) {
    return value;
  }
  return "supabase_storage";
}

function checksumSha256(content: string | null | undefined) {
  if (!content) return null;
  return createHash("sha256").update(content).digest("hex");
}

export async function storeComplianceEvidenceArtifact(
  input: StoreEvidenceInput,
  adminClient?: SupabaseClient,
) {
  const admin = adminClient ?? createSupabaseAdminClient();
  const retentionDays = normalizeRetentionDays(input.retentionDays);
  const retentionUntil = new Date(Date.now() + retentionDays * 24 * 60 * 60 * 1000).toISOString();
  const checksum = checksumSha256(input.content ?? null);
  const provider = normalizeStorageProvider(input.storageProvider);

  const { data, error } = await admin
    .from("compliance_evidence_artifacts")
    .insert({
      artifact_type: input.artifactType,
      storage_provider: provider,
      storage_path: input.storagePath ?? null,
      checksum_sha256: checksum,
      immutable: input.immutable ?? true,
      retention_until: retentionUntil,
      metadata: {
        ...(input.metadata ?? {}),
        retentionDays,
        createdAt: new Date().toISOString(),
      },
      created_by: input.createdBy ?? null,
    })
    .select("id,artifact_type,storage_provider,storage_path,checksum_sha256,retention_until,created_at")
    .single<{
      id: string;
      artifact_type: string;
      storage_provider: EvidenceStorageProvider;
      storage_path: string | null;
      checksum_sha256: string | null;
      retention_until: string | null;
      created_at: string;
    }>();

  if (error || !data) {
    throw new Error(error?.message ?? "Failed to persist compliance evidence artifact.");
  }

  return data;
}
