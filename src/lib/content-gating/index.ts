/**
 * Content gating — resolves which modules a user can access
 * based on their education stage and subscription tier.
 */

export {
  getAllStageCurations,
  getFreeTierModuleIds,
  getAllFreeTierModuleIds,
  isModuleFree,
  inferStagesForModule,
} from "./stage-curation";

export type { StageCuration } from "./stage-curation";

import type { LearningModule } from "@/lib/modules/types";
import { getAllLearningModules } from "@/lib/modules";
import {
  getFreeTierModuleIds,
  isModuleFree,
  inferStagesForModule,
} from "./stage-curation";

export type GatedModule = LearningModule & {
  /** Whether this module is in the free tier. */
  isFree: boolean;
  /** Education stage IDs this module belongs to. */
  educationStageIds: string[];
};

/**
 * Get all modules for a given education stage, with free/premium marking.
 * Includes explicitly curated modules + any that match by age range.
 */
export function getModulesForStage(stageId: string): GatedModule[] {
  const allModules = getAllLearningModules();
  const freeIds = new Set(getFreeTierModuleIds(stageId));

  const stageAgeRanges: Record<string, [number, number]> = {
    "pre-k": [3, 5],
    "early-elem": [5, 8],
    "upper-elem": [8, 11],
    "middle": [11, 14],
    "high": [14, 18],
    "college": [18, 99],
  };

  const [stageLo, stageHi] = stageAgeRanges[stageId] ?? [0, 99];

  const stageModules: GatedModule[] = [];
  const seen = new Set<string>();

  for (const mod of allModules) {
    // Explicitly curated free modules always appear in this stage
    if (freeIds.has(mod.id) && !seen.has(mod.id)) {
      seen.add(mod.id);
      stageModules.push({
        ...mod,
        isFree: true,
        educationStageIds: inferStagesForModule(mod.minAge, mod.maxAge),
      });
      continue;
    }

    // Auto-map by age range overlap
    const minAge = mod.minAge ?? 0;
    const maxAge = mod.maxAge ?? 99;
    if (minAge < stageHi && maxAge > stageLo && !seen.has(mod.id)) {
      seen.add(mod.id);
      stageModules.push({
        ...mod,
        isFree: isModuleFree(mod.id),
        educationStageIds: inferStagesForModule(mod.minAge, mod.maxAge),
      });
    }
  }

  // Sort: free modules first, then alphabetical by title
  stageModules.sort((a, b) => {
    if (a.isFree !== b.isFree) return a.isFree ? -1 : 1;
    return a.title.localeCompare(b.title);
  });

  return stageModules;
}

/**
 * Count of free and premium modules for a stage (for UI badges).
 */
export function getStageModuleCounts(stageId: string): {
  free: number;
  premium: number;
  total: number;
} {
  const modules = getModulesForStage(stageId);
  const free = modules.filter((m) => m.isFree).length;
  return { free, premium: modules.length - free, total: modules.length };
}
