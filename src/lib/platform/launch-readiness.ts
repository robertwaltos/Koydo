export type LaunchFeatureId =
  | "experience-hub"
  | "experience-hub-games"
  | "science-lab-immersive";

type LaunchFeatureConfig = {
  id: LaunchFeatureId;
  envVar: string;
  defaultPending: boolean;
  href: string;
  title: string;
  description: string;
};

const LAUNCH_FEATURES: readonly LaunchFeatureConfig[] = [
  {
    id: "experience-hub",
    envVar: "NEXT_PUBLIC_EXPERIENCE_HUB_LAUNCH_PENDING",
    defaultPending: true,
    href: "/experience-hub",
    title: "New Experience",
    description: "More exciting features coming soon. Stay tuned!",
  },
  {
    id: "experience-hub-games",
    envVar: "NEXT_PUBLIC_EXPERIENCE_HUB_GAMES_LAUNCH_PENDING",
    defaultPending: true,
    href: "/experience-hub/games",
    title: "New Experience",
    description: "More exciting features coming soon. Stay tuned!",
  },
  {
    id: "science-lab-immersive",
    envVar: "NEXT_PUBLIC_SCIENCE_LAB_IMMERSIVE_PENDING",
    defaultPending: true,
    href: "/science-lab",
    title: "New Experience",
    description: "More exciting features coming soon. Stay tuned!",
  },
] as const;

function getFeatureConfigByHref(href: string) {
  return LAUNCH_FEATURES.find((feature) => feature.href === href) ?? null;
}

function getFeatureConfigById(id: LaunchFeatureId) {
  return LAUNCH_FEATURES.find((feature) => feature.id === id) ?? null;
}

function isPendingByEnv(envVar: string, defaultPending: boolean) {
  const flag = process.env[envVar];
  if (flag === "false") return false;
  if (flag === "true") return true;
  return defaultPending;
}

export function isLaunchFeaturePending(featureId: LaunchFeatureId): boolean {
  const feature = getFeatureConfigById(featureId);
  if (!feature) return false;
  return isPendingByEnv(feature.envVar, feature.defaultPending);
}

export function isLaunchRouteLocked(href: string): boolean {
  const feature = getFeatureConfigByHref(href);
  if (!feature) return false;
  return isPendingByEnv(feature.envVar, feature.defaultPending);
}

export function resolveLaunchHref(href: string): string {
  const feature = getFeatureConfigByHref(href);
  if (!feature) return href;
  if (!isPendingByEnv(feature.envVar, feature.defaultPending)) return href;
  return `/coming-soon?from=${encodeURIComponent(href)}`;
}

export function getLaunchFeatureMeta(featureId: LaunchFeatureId) {
  const feature = getFeatureConfigById(featureId);
  if (!feature) return null;
  return {
    id: feature.id,
    href: feature.href,
    title: feature.title,
    description: feature.description,
  };
}

