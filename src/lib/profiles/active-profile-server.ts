import { cookies } from "next/headers";
import { ACTIVE_PROFILE_COOKIE_KEY } from "./active-profile";
import { verifyProfileOwnership } from "./server-profile";

/**
 * Returns the active profile id for the current authenticated account.
 * The id is read from cookie and validated against profile ownership.
 */
export async function getActiveProfileId(): Promise<string | null> {
  const cookieStore = await cookies();
  const rawProfileId = cookieStore.get(ACTIVE_PROFILE_COOKIE_KEY)?.value;

  if (!rawProfileId) {
    return null;
  }

  const decodedProfileId = decodeURIComponent(rawProfileId);
  const profile = await verifyProfileOwnership(decodedProfileId);
  return profile?.id ?? null;
}
