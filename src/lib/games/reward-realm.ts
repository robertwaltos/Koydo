import { getRegisteredGame } from "@/lib/games/catalog";

export const REWARD_REALM_UNLOCK_POLICY = {
  minEducationalRuns: 12,
  minDistinctEducationalGames: 4,
  minPerfectEducationalRuns: 3,
  minAverageEducationalStars: 2.2,
} as const;

export type RewardRealmUnlockPolicy = typeof REWARD_REALM_UNLOCK_POLICY;

export type RewardRealmProgress = {
  educationalRuns: number;
  distinctEducationalGames: number;
  perfectEducationalRuns: number;
  averageEducationalStars: number;
};

export type RewardRealmRequirementCompletion = {
  educationalRuns: boolean;
  distinctEducationalGames: boolean;
  perfectEducationalRuns: boolean;
  averageEducationalStars: boolean;
};

export type RewardRealmProgressRatios = {
  educationalRuns: number;
  distinctEducationalGames: number;
  perfectEducationalRuns: number;
  averageEducationalStars: number;
};

export type RewardRealmMasterySnapshot = {
  unlocked: boolean;
  policy: RewardRealmUnlockPolicy;
  progress: RewardRealmProgress;
  completed: RewardRealmRequirementCompletion;
  ratios: RewardRealmProgressRatios;
};

type EventRowWithMetadata = {
  metadata: unknown;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function toFiniteNumber(input: unknown): number | null {
  return typeof input === "number" && Number.isFinite(input) ? input : null;
}

function toNonEmptyString(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const trimmed = input.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function parseGameTelemetry(metadata: unknown): { gameId: string; stars: number } | null {
  if (!metadata || typeof metadata !== "object") return null;
  const record = metadata as Record<string, unknown>;
  const source = toNonEmptyString(record.source);
  if (source !== "mini_game" && source !== "daily_challenge") return null;

  const customGameId = toNonEmptyString(record.customGameId);
  const topLevelGameType = toNonEmptyString(record.gameType);

  const result = record.result;
  const resultRecord = result && typeof result === "object"
    ? result as Record<string, unknown>
    : null;

  const resultGameType = resultRecord ? toNonEmptyString(resultRecord.gameType) : null;
  const rawStars = resultRecord ? toFiniteNumber(resultRecord.stars) : null;
  const stars = rawStars === null ? 0 : clamp(Math.round(rawStars), 0, 3);
  const gameId = customGameId ?? resultGameType ?? topLevelGameType;

  if (!gameId) return null;
  return { gameId, stars };
}

function ratio(value: number, target: number): number {
  if (target <= 0) return 1;
  return Number(clamp(value / target, 0, 1).toFixed(2));
}

export function computeRewardRealmMasteryFromEvents(
  events: readonly EventRowWithMetadata[],
): RewardRealmMasterySnapshot {
  const educationalGameSet = new Set<string>();
  let educationalRuns = 0;
  let perfectEducationalRuns = 0;
  let educationalStarsTotal = 0;

  for (const event of events) {
    const telemetry = parseGameTelemetry(event.metadata);
    if (!telemetry) continue;

    const game = getRegisteredGame(telemetry.gameId);
    if (!game || game.track !== "Educational Core") continue;

    educationalRuns += 1;
    educationalStarsTotal += telemetry.stars;
    if (telemetry.stars >= 3) {
      perfectEducationalRuns += 1;
    }
    educationalGameSet.add(game.id);
  }

  const distinctEducationalGames = educationalGameSet.size;
  const averageEducationalStars = educationalRuns > 0
    ? Number((educationalStarsTotal / educationalRuns).toFixed(2))
    : 0;

  const completed = {
    educationalRuns: educationalRuns >= REWARD_REALM_UNLOCK_POLICY.minEducationalRuns,
    distinctEducationalGames:
      distinctEducationalGames >= REWARD_REALM_UNLOCK_POLICY.minDistinctEducationalGames,
    perfectEducationalRuns:
      perfectEducationalRuns >= REWARD_REALM_UNLOCK_POLICY.minPerfectEducationalRuns,
    averageEducationalStars:
      averageEducationalStars >= REWARD_REALM_UNLOCK_POLICY.minAverageEducationalStars,
  };

  const unlocked = Object.values(completed).every(Boolean);

  return {
    unlocked,
    policy: REWARD_REALM_UNLOCK_POLICY,
    progress: {
      educationalRuns,
      distinctEducationalGames,
      perfectEducationalRuns,
      averageEducationalStars,
    },
    completed,
    ratios: {
      educationalRuns: ratio(
        educationalRuns,
        REWARD_REALM_UNLOCK_POLICY.minEducationalRuns,
      ),
      distinctEducationalGames: ratio(
        distinctEducationalGames,
        REWARD_REALM_UNLOCK_POLICY.minDistinctEducationalGames,
      ),
      perfectEducationalRuns: ratio(
        perfectEducationalRuns,
        REWARD_REALM_UNLOCK_POLICY.minPerfectEducationalRuns,
      ),
      averageEducationalStars: ratio(
        averageEducationalStars,
        REWARD_REALM_UNLOCK_POLICY.minAverageEducationalStars,
      ),
    },
  };
}

