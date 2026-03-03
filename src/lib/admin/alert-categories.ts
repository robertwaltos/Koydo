/**
 * Alert category constants for admin notifications.
 * Use these with createAdminAlert({ category: ALERT_CATEGORIES.xxx, ... }).
 */

export const ALERT_CATEGORIES = {
  /* Safety & Compliance */
  AI_MODERATION_FLAG: "ai_moderation_flag",
  CONSENT_EXPIRATION: "consent_expiration",
  CHILD_PII_ACCESS: "child_pii_access",
  PARENT_GATE_FAILURE_SPIKE: "parent_gate_failure_spike",

  /* Operations */
  DATA_RETENTION_COMPLETED: "data_retention_completed",
  DATA_RETENTION_FAILED: "data_retention_failed",
  SYSTEM_HEALTH_DEGRADATION: "system_health_degradation",

  /* Billing & Access */
  SUBSCRIPTION_CHURN_SPIKE: "subscription_churn_spike",
  ACCESS_GRANT_CREATED: "access_grant_created",
  ACCESS_GRANT_REVOKED: "access_grant_revoked",

  /* Usage */
  RATE_LIMIT_SPIKE: "rate_limit_spike",
  DAILY_LIMIT_EXHAUSTED: "daily_limit_exhausted",
} as const;

export type AlertCategory = (typeof ALERT_CATEGORIES)[keyof typeof ALERT_CATEGORIES];
