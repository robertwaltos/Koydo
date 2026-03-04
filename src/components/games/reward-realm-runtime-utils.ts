export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function seeded(seed: string) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) | 0;
  }
  return () => {
    hash = (hash * 1664525 + 1013904223) | 0;
    return ((hash >>> 0) % 10_000) / 10_000;
  };
}

export function tierForRound(roundIndex: number, roundsPerTier: number) {
  return 1 + Math.floor(roundIndex / roundsPerTier);
}
