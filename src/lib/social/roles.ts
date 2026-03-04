export const SOCIAL_COHORT_ROLES = ["owner", "moderator", "member"] as const;

export type SocialCohortRole = (typeof SOCIAL_COHORT_ROLES)[number];

export function hasSocialCohortRole(
  role: string,
  allowedRoles: readonly SocialCohortRole[],
) {
  return allowedRoles.some((entry) => entry === role);
}