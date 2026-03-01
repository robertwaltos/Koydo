import catalogJson from "@/lib/audiobooks/public-domain-catalog.json";

export type PublicDomainRightsStatus =
  | "public_domain_verified"
  | "pending_verification"
  | "blocked";

export type PublicDomainAudiobookCatalogEntry = {
  moduleId: string;
  title: string;
  rightsStatus: PublicDomainRightsStatus;
  rightsEvidenceUrl?: string;
  reviewer?: string;
  reviewedAt?: string;
  notes?: string;
  enabled?: boolean;
};

type RawCatalog = {
  updatedAt?: unknown;
  entries?: unknown;
};

function toNormalizedEntry(value: unknown): PublicDomainAudiobookCatalogEntry | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const record = value as Record<string, unknown>;
  const moduleId = String(record.moduleId ?? "").trim();
  const title = String(record.title ?? "").trim();
  const rightsStatus = String(record.rightsStatus ?? "").trim();
  const allowedStatus: ReadonlySet<string> = new Set([
    "public_domain_verified",
    "pending_verification",
    "blocked",
  ]);

  if (!moduleId || !title || !allowedStatus.has(rightsStatus)) {
    return null;
  }

  return {
    moduleId,
    title,
    rightsStatus: rightsStatus as PublicDomainRightsStatus,
    rightsEvidenceUrl:
      typeof record.rightsEvidenceUrl === "string" && record.rightsEvidenceUrl.trim().length > 0
        ? record.rightsEvidenceUrl.trim()
        : undefined,
    reviewer:
      typeof record.reviewer === "string" && record.reviewer.trim().length > 0
        ? record.reviewer.trim()
        : undefined,
    reviewedAt:
      typeof record.reviewedAt === "string" && record.reviewedAt.trim().length > 0
        ? record.reviewedAt.trim()
        : undefined,
    notes:
      typeof record.notes === "string" && record.notes.trim().length > 0
        ? record.notes.trim()
        : undefined,
    enabled: typeof record.enabled === "boolean" ? record.enabled : true,
  };
}

function readCatalog() {
  const raw = catalogJson as RawCatalog;
  const entries = Array.isArray(raw.entries)
    ? raw.entries
        .map(toNormalizedEntry)
        .filter((entry): entry is PublicDomainAudiobookCatalogEntry => Boolean(entry))
    : [];

  return {
    updatedAt:
      typeof raw.updatedAt === "string" && raw.updatedAt.trim().length > 0
        ? raw.updatedAt.trim()
        : null,
    entries,
  };
}

export function getPublicDomainAudiobookCatalogEntries() {
  return readCatalog().entries;
}

export function getVerifiedPublicDomainAudiobookEntries() {
  return getPublicDomainAudiobookCatalogEntries().filter(
    (entry) => entry.rightsStatus === "public_domain_verified" && entry.enabled !== false,
  );
}

export function getVerifiedPublicDomainModuleIds() {
  return new Set(getVerifiedPublicDomainAudiobookEntries().map((entry) => entry.moduleId));
}

export function isVerifiedPublicDomainModuleId(moduleId: string) {
  return getVerifiedPublicDomainModuleIds().has(moduleId);
}
