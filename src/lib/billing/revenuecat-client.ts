import { Capacitor } from "@capacitor/core";
import { LOG_LEVEL, Purchases } from "@revenuecat/purchases-capacitor";
import { getRevenueCatApiKey } from "./revenuecat-config";

let revenueCatInitPromise: Promise<boolean> | null = null;

/**
 * One-time RevenueCat SDK initialization for native platforms.
 * Safe to call repeatedly; subsequent calls reuse the same promise.
 */
export async function initializeRevenueCat(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    return false;
  }

  if (revenueCatInitPromise) {
    return revenueCatInitPromise;
  }

  revenueCatInitPromise = (async () => {
    const apiKey = getRevenueCatApiKey();
    if (!apiKey) {
      return false;
    }

    const logLevel = process.env.NODE_ENV === "production" ? LOG_LEVEL.INFO : LOG_LEVEL.VERBOSE;
    await Purchases.setLogLevel({ level: logLevel });

    const { isConfigured } = await Purchases.isConfigured();
    if (!isConfigured) {
      await Purchases.configure({ apiKey });
    }

    return true;
  })().catch((error) => {
    // Allow a retry on the next call if initialization failed.
    revenueCatInitPromise = null;
    throw error;
  });

  return revenueCatInitPromise;
}
