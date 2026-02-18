export type ParentalConsentStatus = "not_required" | "pending" | "verified" | "denied" | null;

export type UserOnboardingProfile = {
  birth_date: string | null;
  parental_consent_required: boolean | null;
  parental_consent_status: ParentalConsentStatus;
} | null;

export function getOnboardingRedirect(profile: UserOnboardingProfile) {
  if (!profile || !profile.birth_date) {
    return "/auth/age-gate";
  }

  if (profile.parental_consent_required && profile.parental_consent_status !== "verified") {
    return "/auth/parent-consent";
  }

  return null;
}
