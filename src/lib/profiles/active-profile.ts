export const ACTIVE_PROFILE_COOKIE_KEY = "active_profile_id";
const ACTIVE_PROFILE_TTL_SECONDS = 60 * 60 * 24; // 24 hours

function getCookieValue(name: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const target = `${name}=`;
  const found = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(target));

  if (!found) {
    return null;
  }

  return decodeURIComponent(found.slice(target.length));
}

export function setActiveProfile(profileId: string) {
  if (typeof document === "undefined") {
    return;
  }

  const encoded = encodeURIComponent(profileId);
  document.cookie = `${ACTIVE_PROFILE_COOKIE_KEY}=${encoded}; path=/; max-age=${ACTIVE_PROFILE_TTL_SECONDS}; SameSite=Lax`;
  window.localStorage.setItem(ACTIVE_PROFILE_COOKIE_KEY, profileId);
}

export function getActiveProfileIdFromBrowser() {
  const fromCookie = getCookieValue(ACTIVE_PROFILE_COOKIE_KEY);
  if (fromCookie) {
    return fromCookie;
  }

  if (typeof window === "undefined") {
    return null;
  }

  const fromLocalStorage = window.localStorage.getItem(ACTIVE_PROFILE_COOKIE_KEY);
  return fromLocalStorage || null;
}

export function clearActiveProfile() {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${ACTIVE_PROFILE_COOKIE_KEY}=; path=/; max-age=0; SameSite=Lax`;
  window.localStorage.removeItem(ACTIVE_PROFILE_COOKIE_KEY);
}
