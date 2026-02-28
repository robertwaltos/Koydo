import { createHmac } from "crypto";
import { serverEnv } from "@/lib/config/env";

function getTestingHashSecret() {
  return (
    serverEnv.TESTING_ITEM_HASH_SECRET
    ?? serverEnv.PARENT_CONSENT_TOKEN_SECRET
    ?? "koydo-testing-dev-secret-change-me"
  );
}

export function normalizeAnswerValue(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

export function hashTestingAnswer(answer: string) {
  return createHmac("sha256", getTestingHashSecret())
    .update(normalizeAnswerValue(answer))
    .digest("hex");
}
