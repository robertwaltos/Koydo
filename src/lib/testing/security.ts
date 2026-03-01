import { createHmac } from "crypto";
import { serverEnv } from "@/lib/config/env";

function getTestingHashSecret() {
  const candidate =
    serverEnv.TESTING_ITEM_HASH_SECRET
    ?? serverEnv.PARENT_CONSENT_TOKEN_SECRET
    ?? serverEnv.SUPABASE_SERVICE_ROLE_KEY;

  if (!candidate) {
    throw new Error("Missing testing hash secret configuration.");
  }

  return candidate;
}

export function normalizeAnswerValue(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

export function hashTestingAnswer(answer: string) {
  return createHmac("sha256", getTestingHashSecret())
    .update(normalizeAnswerValue(answer))
    .digest("hex");
}
