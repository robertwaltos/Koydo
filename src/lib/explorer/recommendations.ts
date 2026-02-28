export type RecommendationType = "due_review" | "new_path" | "sequential" | "fallback";

type RecommendationMeta = {
  icon: string;
  label: string;
  hint: string;
  pageCue: string;
};

const recommendationMetaByType: Record<RecommendationType, RecommendationMeta> = {
  due_review: {
    icon: "⏰",
    label: "Review Due",
    hint: "Time to revisit this skill.",
    pageCue: "This lesson is ready for a quick review.",
  },
  new_path: {
    icon: "🧭",
    label: "New Step",
    hint: "A lesson not started yet.",
    pageCue: "This is a fresh lesson in your learning path.",
  },
  sequential: {
    icon: "➡️",
    label: "Next Step",
    hint: "Continue your latest path.",
    pageCue: "This lesson continues from your most recent progress.",
  },
  fallback: {
    icon: "⭐",
    label: "Suggested",
    hint: "A strong place to begin.",
    pageCue: "This lesson is a solid starting point.",
  },
};

export function getRecommendationMeta(type: RecommendationType): RecommendationMeta {
  return recommendationMetaByType[type];
}

export function isRecommendationType(value: string | null | undefined): value is RecommendationType {
  return value === "due_review" || value === "new_path" || value === "sequential" || value === "fallback";
}

export function toRecommendationType(
  value: string | null | undefined,
): RecommendationType | null {
  return isRecommendationType(value) ? value : null;
}
