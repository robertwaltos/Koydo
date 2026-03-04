export function isMissingSocialTableError(error: unknown) {
  if (!error || typeof error !== "object") return false;

  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = message.toLowerCase();

  if (code === "42P01" || code === "PGRST205") return true;

  return (
    lowered.includes("social_cohorts")
    || lowered.includes("social_cohort_members")
    || lowered.includes("social_challenges")
    || lowered.includes("social_challenge_participants")
    || lowered.includes("social_challenge_events")
    || lowered.includes("social_challenge_leaderboard")
  );
}