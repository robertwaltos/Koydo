export interface SRSData {
  repetitions: number;
  easiness_factor: number;
  interval: number; // in days
}

export interface UpdatedSRSData extends SRSData {
  next_review_at: Date;
}

const MIN_EASINESS_FACTOR = 1.3;

/**
 * Calculates the next spaced repetition schedule based on the SM-2 algorithm.
 * @param quality The user's performance score (0-5, where 5 is best).
 * @param srsData The current SRS data for the item.
 * @returns The updated SRS data with the new next_review_at date.
 */
export function calculateSRS(quality: number, srsData: SRSData): UpdatedSRSData {
  if (quality < 0 || quality > 5) {
    throw new Error("Quality must be between 0 and 5.");
  }

  let { repetitions, easiness_factor, interval } = srsData;

  // 1. If quality is below 3, reset progress
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    // 2. If quality is 3 or above, increment repetitions and update interval
    repetitions += 1;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.ceil(interval * easiness_factor);
    }
  }

  // 3. Update easiness factor
  easiness_factor =
    easiness_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  if (easiness_factor < MIN_EASINESS_FACTOR) {
    easiness_factor = MIN_EASINESS_FACTOR;
  }

  // 4. Calculate next review date
  const next_review_at = new Date();
  next_review_at.setDate(next_review_at.getDate() + interval);

  return {
    repetitions,
    easiness_factor,
    interval,
    next_review_at,
  };
}
