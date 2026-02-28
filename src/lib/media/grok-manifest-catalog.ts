import fs from "node:fs/promises";
import path from "node:path";

export type GrokManifestAsset = {
  id: string;
  group: string;
  file_name: string;
  usage_path: string;
  width: number;
  height: number;
  prompt: string;
  negative_prompt: string;
};

type GrokManifestFile = {
  project?: string;
  total?: number;
  assets?: GrokManifestAsset[];
};

export type GrokManifestQuery = {
  group?: string;
  usagePath?: string;
  q?: string;
  limit?: number;
  offset?: number;
};

type GrokManifestCache = {
  loadedAt: number;
  manifestPath: string;
  manifest: GrokManifestFile;
} | null;

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;
const cacheTtlMs = 10_000;
let manifestCache: GrokManifestCache = null;

function normalizePath(value: string) {
  const raw = value.trim();
  if (!raw) return "";
  const withLeadingSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeadingSlash.replace(/\/+$/, "/");
}

function toPublicUrl(asset: GrokManifestAsset) {
  const usagePath = normalizePath(String(asset.usage_path ?? ""));
  const fileName = String(asset.file_name ?? "").trim();
  if (!usagePath || !fileName) return null;
  return `${usagePath}${fileName}`;
}

function toSafeLimit(value: number | undefined) {
  if (!Number.isFinite(value)) return DEFAULT_LIMIT;
  return Math.max(1, Math.min(MAX_LIMIT, Math.floor(value ?? DEFAULT_LIMIT)));
}

function toSafeOffset(value: number | undefined) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.floor(value ?? 0));
}

export async function loadGrokManifest() {
  const manifestPath = path.join(process.cwd(), "public", "GROK-IMAGE-MANIFEST-NORMALIZED.json");
  const now = Date.now();

  if (
    manifestCache &&
    manifestCache.manifestPath === manifestPath &&
    now - manifestCache.loadedAt <= cacheTtlMs
  ) {
    return manifestCache.manifest;
  }

  const raw = await fs.readFile(manifestPath, "utf8");
  const manifest = JSON.parse(raw) as GrokManifestFile;
  manifestCache = {
    loadedAt: now,
    manifestPath,
    manifest,
  };
  return manifest;
}

export async function queryGrokManifestAssets(query: GrokManifestQuery) {
  const manifest = await loadGrokManifest();
  const assets = Array.isArray(manifest.assets) ? manifest.assets : [];
  const normalizedGroup = query.group?.trim().toUpperCase() || "";
  const normalizedUsagePath = query.usagePath ? normalizePath(query.usagePath) : "";
  const normalizedSearch = query.q?.trim().toLowerCase() || "";
  const limit = toSafeLimit(query.limit);
  const offset = toSafeOffset(query.offset);

  const filtered = assets.filter((asset) => {
    if (normalizedGroup && String(asset.group ?? "").toUpperCase() !== normalizedGroup) {
      return false;
    }

    if (normalizedUsagePath && normalizePath(String(asset.usage_path ?? "")) !== normalizedUsagePath) {
      return false;
    }

    if (!normalizedSearch) return true;

    const searchBlob = [
      asset.id,
      asset.file_name,
      asset.group,
      asset.usage_path,
      asset.prompt,
    ]
      .join(" ")
      .toLowerCase();

    return searchBlob.includes(normalizedSearch);
  });

  const paged = filtered.slice(offset, offset + limit);
  const items = paged.map((asset) => ({
    ...asset,
    public_url: toPublicUrl(asset),
  }));

  return {
    project: manifest.project ?? "unknown",
    totalAssets: assets.length,
    filteredCount: filtered.length,
    limit,
    offset,
    hasMore: offset + items.length < filtered.length,
    items,
  };
}

