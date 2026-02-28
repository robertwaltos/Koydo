import { formatDate } from "@/lib/i18n/format";

export type SubscriptionSnapshot = {
  status: string | null;
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: string | null;
};

const ACTIVE_STATUSES = new Set(["active", "trialing"]);
const WARNING_STATUSES = new Set(["past_due", "incomplete"]);
const INACTIVE_STATUSES = new Set(["canceled", "unpaid", "incomplete_expired"]);
const PORTAL_MANAGED_STATUSES = new Set([
  "active",
  "trialing",
  "past_due",
  "incomplete",
  "unpaid",
  "paused",
]);

export function isBillableSubscription(status: string | null | undefined) {
  if (!status) return false;
  return ACTIVE_STATUSES.has(status);
}

export function getSubscriptionStatusLabel(status: string | null | undefined) {
  switch (status) {
    case "active":
      return "Active";
    case "trialing":
      return "Trial";
    case "past_due":
      return "Past Due";
    case "incomplete":
      return "Pending Setup";
    case "incomplete_expired":
      return "Setup Expired";
    case "canceled":
      return "Canceled";
    case "unpaid":
      return "Unpaid";
    case "paused":
      return "Paused";
    default:
      return "No Subscription";
  }
}

export function getSubscriptionStatusTone(status: string | null | undefined) {
  if (!status) return "neutral";
  if (ACTIVE_STATUSES.has(status)) return "good";
  if (WARNING_STATUSES.has(status)) return "warn";
  if (INACTIVE_STATUSES.has(status)) return "bad";
  return "neutral";
}

export function requiresPortalManagement(status: string | null | undefined) {
  if (!status) return false;
  return PORTAL_MANAGED_STATUSES.has(status);
}

export function formatSubscriptionDate(
  value: string | null | undefined,
  locale = "en",
) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return formatDate(date, locale, { month: "short", day: "numeric", year: "numeric" });
}
