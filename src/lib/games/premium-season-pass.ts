export type SeasonPassTierDefinition = {
  tierIndex: number;
  pointsRequired: number;
  rewardCode: string;
  rewardLabel: string;
  rewardPayload: Record<string, unknown>;
};

export type SeasonPassTierProgress = SeasonPassTierDefinition & {
  unlocked: boolean;
  claimed: boolean;
};

export type SeasonPassNextTier = {
  tierIndex: number;
  pointsRequired: number;
  pointsRemaining: number;
  rewardLabel: string;
} | null;

export const SEASON_PASS_TIER_DEFINITIONS: readonly SeasonPassTierDefinition[] = [
  {
    tierIndex: 0,
    pointsRequired: 0,
    rewardCode: "season-starter-badge",
    rewardLabel: "Starter Badge",
    rewardPayload: { cosmetic: "badge:starter", rarity: "common" },
  },
  {
    tierIndex: 1,
    pointsRequired: 150,
    rewardCode: "xp-boost-30m",
    rewardLabel: "30m XP Boost",
    rewardPayload: { boost: "xp", multiplier: 1.25, durationMinutes: 30 },
  },
  {
    tierIndex: 2,
    pointsRequired: 350,
    rewardCode: "clan-boost-1h",
    rewardLabel: "Clan Boost (1h)",
    rewardPayload: { boost: "clan_contribution", multiplier: 1.2, durationMinutes: 60 },
  },
  {
    tierIndex: 3,
    pointsRequired: 650,
    rewardCode: "room-skin-neon",
    rewardLabel: "Neon Room Skin",
    rewardPayload: { cosmetic: "room_skin:neon_grid", rarity: "rare" },
  },
  {
    tierIndex: 4,
    pointsRequired: 1000,
    rewardCode: "tournament-token-1",
    rewardLabel: "Tournament Entry Token",
    rewardPayload: { token: "tournament_entry", quantity: 1 },
  },
  {
    tierIndex: 5,
    pointsRequired: 1400,
    rewardCode: "xp-boost-2h",
    rewardLabel: "2h XP Boost",
    rewardPayload: { boost: "xp", multiplier: 1.35, durationMinutes: 120 },
  },
  {
    tierIndex: 6,
    pointsRequired: 1900,
    rewardCode: "clan-banner-cosmic",
    rewardLabel: "Cosmic Clan Banner",
    rewardPayload: { cosmetic: "clan_banner:cosmic_flare", rarity: "epic" },
  },
  {
    tierIndex: 7,
    pointsRequired: 2500,
    rewardCode: "room-capacity-boost",
    rewardLabel: "Room Capacity Boost",
    rewardPayload: { unlock: "room_capacity_plus_2", durationDays: 7 },
  },
  {
    tierIndex: 8,
    pointsRequired: 3200,
    rewardCode: "tournament-token-2",
    rewardLabel: "2 Tournament Tokens",
    rewardPayload: { token: "tournament_entry", quantity: 2 },
  },
  {
    tierIndex: 9,
    pointsRequired: 4000,
    rewardCode: "season-legend-badge",
    rewardLabel: "Season Legend Badge",
    rewardPayload: { cosmetic: "badge:season_legend", rarity: "legendary" },
  },
] as const;

export function getSeasonPassTierByIndex(tierIndex: number) {
  return SEASON_PASS_TIER_DEFINITIONS.find((tier) => tier.tierIndex === tierIndex);
}

export function getCurrentSeasonPassTier(points: number): number {
  let currentTier = 0;
  for (const tier of SEASON_PASS_TIER_DEFINITIONS) {
    if (points >= tier.pointsRequired) {
      currentTier = tier.tierIndex;
    }
  }
  return currentTier;
}

export function buildSeasonPassProgress(
  points: number,
  claimedTierIndexes: readonly number[],
): {
  currentTier: number;
  tiers: SeasonPassTierProgress[];
  nextTier: SeasonPassNextTier;
  claimableCount: number;
} {
  const claimedSet = new Set(claimedTierIndexes);
  const currentTier = getCurrentSeasonPassTier(points);
  const tiers: SeasonPassTierProgress[] = SEASON_PASS_TIER_DEFINITIONS.map((tier) => {
    const unlocked = points >= tier.pointsRequired;
    const claimed = claimedSet.has(tier.tierIndex);
    return {
      ...tier,
      unlocked,
      claimed,
    };
  });

  const nextLockedTier = tiers.find((tier) => !tier.unlocked) ?? null;
  const nextTier: SeasonPassNextTier = nextLockedTier
    ? {
      tierIndex: nextLockedTier.tierIndex,
      pointsRequired: nextLockedTier.pointsRequired,
      pointsRemaining: Math.max(0, nextLockedTier.pointsRequired - points),
      rewardLabel: nextLockedTier.rewardLabel,
    }
    : null;

  const claimableCount = tiers.filter((tier) => tier.unlocked && !tier.claimed).length;
  return {
    currentTier,
    tiers,
    nextTier,
    claimableCount,
  };
}
