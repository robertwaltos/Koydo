export type RewardRealmMasteryPolicy = {
  minEducationalRuns: number;
  minDistinctEducationalGames: number;
  minPerfectEducationalRuns: number;
  minAverageEducationalStars: number;
};

export type RewardRealmMasteryProgress = {
  educationalRuns: number;
  distinctEducationalGames: number;
  perfectEducationalRuns: number;
  averageEducationalStars: number;
};

export type RewardRealmMasterySnapshot = {
  unlocked: boolean;
  policy: RewardRealmMasteryPolicy;
  progress: RewardRealmMasteryProgress;
};