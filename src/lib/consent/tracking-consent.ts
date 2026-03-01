/**
 * Tracking consent management for GDPR / ePrivacy compliance.
 *
 * Consent categories:
 * - "necessary" — always allowed (locale cookie, auth tokens)
 * - "analytics" — Mixpanel, xAPI-lite telemetry
 *
 * Consent is stored in localStorage under `koydo.trackingConsent`.
 * On native iOS, App Tracking Transparency (ATT) overrides analytics consent.
 */

export type ConsentCategory = "necessary" | "analytics";

export interface ConsentState {
  /** Whether the user has made a choice (banner dismissed). */
  decided: boolean;
  /** Allowed categories. "necessary" is always implicitly allowed. */
  analytics: boolean;
  /** ISO timestamp of when consent was recorded. */
  timestamp: string;
}

const STORAGE_KEY = "koydo.trackingConsent";

const DEFAULT_STATE: ConsentState = {
  decided: false,
  analytics: false,
  timestamp: "",
};

/** Read the persisted consent state, or return the undecided default. */
export function getConsentState(): ConsentState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed.decided !== "boolean") return DEFAULT_STATE;
    return parsed;
  } catch {
    return DEFAULT_STATE;
  }
}

/** Persist a consent decision. */
export function setConsentState(analytics: boolean): ConsentState {
  const state: ConsentState = {
    decided: true,
    analytics,
    timestamp: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private browsing may block localStorage; consent is still applied in-memory.
  }
  return state;
}

/** Returns true if analytics tracking is currently permitted. */
export function isAnalyticsAllowed(): boolean {
  const state = getConsentState();
  if (!state.decided) return false; // Default to deny until explicit consent
  return state.analytics;
}

/** Check if the consent banner should be shown. */
export function shouldShowConsentBanner(): boolean {
  const state = getConsentState();
  return !state.decided;
}
