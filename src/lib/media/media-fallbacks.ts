import { GENERATED_MEDIA_ASSETS } from "@/lib/media/generated-media-assets";
import { getLearningModuleById } from "@/lib/modules";

type MediaAssetType = "video" | "animation" | "image";

type GeneratedMediaAsset = {
  url: string;
  type: string;
  alt: string;
};

const generatedMediaAssets = GENERATED_MEDIA_ASSETS as Record<string, GeneratedMediaAsset>;

function matchesAssetType(asset: GeneratedMediaAsset, assetType: MediaAssetType) {
  const normalizedType = String(asset.type ?? "").toLowerCase();
  if (!normalizedType) return false;
  if (assetType === "video") return normalizedType.includes("video");
  if (assetType === "animation") return normalizedType.includes("animation");
  return normalizedType.includes("image");
}

export function resolveGeneratedLessonMedia(lessonId: string, assetType: MediaAssetType) {
  const normalizedLessonId = lessonId.trim();
  if (!normalizedLessonId) return null;
  const asset = generatedMediaAssets[normalizedLessonId];
  if (!asset) return null;
  if (!matchesAssetType(asset, assetType)) return null;
  return asset.url;
}

export function resolveGeneratedModuleMedia(moduleId: string, assetType: MediaAssetType) {
  const normalizedModuleId = moduleId.trim();
  if (!normalizedModuleId) return null;

  const moduleEntry = getLearningModuleById(normalizedModuleId);
  if (!moduleEntry) return null;

  for (const lesson of moduleEntry.lessons) {
    const resolved = resolveGeneratedLessonMedia(lesson.id, assetType);
    if (resolved) return resolved;
  }

  return null;
}

