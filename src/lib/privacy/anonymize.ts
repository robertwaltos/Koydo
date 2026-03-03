/**
 * Child PII Anonymization
 *
 * Strips or masks personally identifiable information from child accounts
 * in reports, exports, and admin views.
 *
 * Child = user under 13 OR any student_profile (child learner).
 */

import crypto from "crypto";

/**
 * Generate an anonymized identifier for a child.
 * Deterministic — same input always produces same output.
 * Format: "learner-XXXX" where XXXX is first 8 chars of SHA-256.
 */
export function anonymizeChildId(realId: string): string {
  const hash = crypto.createHash("sha256").update(realId).digest("hex");
  return `learner-${hash.slice(0, 8)}`;
}

/**
 * Anonymize a display name for a child.
 * Returns a generic label like "Learner 1", "Learner 2", etc.
 * If index is not provided, returns "Learner" with truncated hash.
 */
export function anonymizeChildName(
  realName: string | null | undefined,
  index?: number,
): string {
  if (index !== undefined) {
    return `Learner ${index + 1}`;
  }
  if (!realName) return "Learner";
  const hash = crypto.createHash("sha256").update(realName).digest("hex");
  return `Learner ${hash.slice(0, 4).toUpperCase()}`;
}

/**
 * Anonymize a full learner record for reporting.
 * Replaces all PII fields with anonymized versions.
 */
export function anonymizeLearnerRecord<
  T extends Record<string, unknown>,
>(
  record: T,
  index?: number,
  piiFields: string[] = [
    "learnerUserId",
    "studentProfileId",
    "externalStudentId",
    "userId",
    "user_id",
    "display_name",
    "displayName",
    "email",
    "parent_email",
    "parentEmail",
  ],
): T {
  // Use a mutable copy typed as Record to avoid TS2862 on generic index writes
  const result: Record<string, unknown> = { ...record };

  for (const field of piiFields) {
    if (field in result && result[field] !== undefined && result[field] !== null) {
      const value = String(result[field]);

      if (
        field.toLowerCase().includes("name") ||
        field.toLowerCase().includes("display")
      ) {
        result[field] = anonymizeChildName(value, index);
      } else if (
        field.toLowerCase().includes("email")
      ) {
        result[field] = "***@***.***";
      } else {
        result[field] = anonymizeChildId(value);
      }
    }
  }

  return result as T;
}

/**
 * Anonymize an array of learner records.
 * Each record gets a sequential index for consistent "Learner 1", "Learner 2" labels.
 */
export function anonymizeLearnerRecords<T extends Record<string, unknown>>(
  records: T[],
  piiFields?: string[],
): T[] {
  return records.map((record, index) =>
    anonymizeLearnerRecord(record, index, piiFields),
  );
}

/**
 * Check if a user should be treated as a child for PII purposes.
 * Returns true for users under 13 or with parental consent requirements.
 */
export function isChildAccount(profile: {
  birth_date?: string | null;
  age_group?: string | null;
  parental_consent_required?: boolean;
}): boolean {
  // If parental consent is required, treat as child
  if (profile.parental_consent_required) return true;

  // Check birth date
  if (profile.birth_date) {
    const birthDate = new Date(profile.birth_date);
    const age = Math.floor(
      (Date.now() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
    );
    if (age < 13) return true;
  }

  // Check age group
  if (profile.age_group === "under_13") return true;

  return false;
}
