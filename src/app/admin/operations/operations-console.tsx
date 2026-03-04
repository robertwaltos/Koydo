"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import ConsoleAiChatbox from "./console-ai-chatbox";

type SupportTicket = {
  id: string;
  user_id: string;
  subject: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "normal" | "high" | "urgent";
  created_at: string;
};

type ExamMaintenanceAlert = {
  id: string;
  severity: "info" | "warning" | "critical";
  category: string;
  message: string;
  acknowledged: boolean;
  created_at: string;
  metadata: Record<string, unknown> | null;
};

type ExamMaintenanceRun = {
  id: string;
  admin_user_id: string;
  action_type: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

type ExamMaintenanceRunSummaryAlert = {
  id: string;
  severity: "info" | "warning" | "critical";
  category: string;
  message: string;
  acknowledged: boolean;
  created_at: string;
  metadata: Record<string, unknown> | null;
};

type StripeWebhookFailedEvent = {
  eventId: string;
  eventType: string;
  attemptCount: number;
  updatedAt: string;
  lastError: string | null;
};

type StripeWebhookHealthReport = {
  generatedAt: string;
  windowHours: number;
  staleMinutes: number;
  trackingEnabled: boolean;
  healthy: boolean;
  detail: string;
  totals: {
    received: number;
    processed: number;
    failed: number;
    processing: number;
    retries: number;
    staleProcessing: number;
  };
  latestProcessedAt: string | null;
  recentFailed: StripeWebhookFailedEvent[];
  failedByEventType: Array<{ eventType: string; count: number }>;
};

type DbReadinessRow = {
  table: string;
  status: "present" | "missing" | "error";
  detail: string;
};

type DbReadinessReport = {
  generatedAt: string;
  tables: DbReadinessRow[];
  totals: {
    present: number;
    missing: number;
    error: number;
    total: number;
  };
  healthy: boolean;
};

type EnvReadinessCheck = {
  id: string;
  label: string;
  status: "pass" | "warn" | "fail";
  detail: string;
};

type EnvReadinessReport = {
  generatedAt: string;
  healthy: boolean;
  degraded: boolean;
  totals: {
    pass: number;
    warn: number;
    fail: number;
    total: number;
  };
  checks: EnvReadinessCheck[];
};

type SystemHealthReport = {
  generatedAt: string;
  healthy: boolean;
  degraded: boolean;
  summary: {
    blockingIssues: number;
    warningIssues: number;
  };
  envReadiness: EnvReadinessReport;
  dbReadiness: DbReadinessReport;
  webhookHealth: StripeWebhookHealthReport;
};

type RunbookHint = {
  id: string;
  severity: "critical" | "warning";
  title: string;
  description: string;
  commands: string[];
  href?: string;
  hrefLabel?: string;
};

type LanguagePricingAnalyticsReport = {
  generatedAt: string;
  windowDays: number;
  eventCount: number;
  byAction: Array<{ action: string; count: number }>;
  planActions: Array<{ key: string; count: number }>;
  interactionSummary: {
    planSelectClicks: number;
    checkoutStarts: number;
    manageSubscriptionClicks: number;
  };
  funnel: {
    pricingViews: number;
    checkoutViews: number;
    checkoutStarts: number;
    successViews: number;
    pricingToCheckoutViewRate: number | null;
    checkoutStartRateFromCheckoutViews: number | null;
    checkoutToSuccessViewRate: number | null;
  };
};

type LanguagePricePlanId =
  | "language_plus_conservative"
  | "language_family_conservative"
  | "language_plus_growth"
  | "language_family_growth"
  | "language_school_annual";

type LanguagePriceMap = Record<LanguagePricePlanId, string>;

type LanguageRuntimeConfig = {
  source: "default" | "app_settings";
  phase: "1" | "2" | "3";
  pricingProfile: "conservative" | "growth";
  attemptCap: 250 | 300 | 350;
  freeSamplerAttempts: 5 | 10;
  geoTierDefault: "tier_1" | "tier_2" | "tier_3" | "tier_4" | "tier_5";
  activeExperimentVariantId: string | null;
};

type LanguageUnlockPricingRow = {
  geoTier: "tier_1" | "tier_2" | "tier_3" | "tier_4" | "tier_5";
  beginnerPriceCents: number;
  intermediatePriceCents: number;
  advancedPriceCents: number;
  currency: string;
  updatedAt?: string | null;
};

type LanguageUnlockReconciliationResult = {
  runAt: string;
  monthKey: string;
  rowsScanned: number;
  driftDetected: number;
  autoFixed: number;
  queuedForReview: number;
};

type OwnerSecurityStatusResponse = {
  owner: {
    userId: string;
    email: string | null;
    dataMode: "live" | "beta";
  };
  security: {
    ownerConfigured: boolean;
    factors: Array<{
      id: string;
      factorType: "totp" | "secondary_email" | "yubikey_otp";
      label: string | null;
      emailAddress: string | null;
      yubikeyPublicId: string | null;
      verifiedAt: string | null;
      lastUsedAt: string | null;
      createdAt: string;
    }>;
    activeStepUpSessions: Array<{
      id: string;
      scope: string;
      factorType: "totp" | "secondary_email" | "yubikey_otp";
      expiresAt: string;
    }>;
    recentEvents: Array<{
      id: string;
      eventType: string;
      factorType: "totp" | "secondary_email" | "yubikey_otp" | null;
      severity: "info" | "warning" | "critical";
      createdAt: string;
    }>;
  };
};

type ModuleBaselineSummary = {
  baselineVersion: string | null;
  totalModules: number;
  modulesRequiringBaseline: number;
  modulesWithoutBaselineNeed: number;
  capturedAt: string | null;
};

type FactoryResetRunSummary = {
  id: string;
  mode: "dry_run" | "apply";
  scope: "beta_only" | "all_non_owner";
  status: "running" | "completed" | "failed";
  reason: string | null;
  target_user_count: number;
  rows_scanned: number;
  rows_deleted: number;
  baseline_version: string | null;
  error: string | null;
  created_at: string;
  completed_at: string | null;
};

type FactoryResetStatusResponse = {
  baselineSummary: ModuleBaselineSummary;
  runs: FactoryResetRunSummary[];
};

type OwnershipTransferPlaybook = {
  id: string;
  status: "planned" | "ready" | "executed" | "cancelled";
  current_owner_user_id: string;
  candidate_owner_user_id: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  executed_at: string | null;
};

const DEFAULT_LANGUAGE_RUNTIME_CONFIG: LanguageRuntimeConfig = {
  source: "default",
  phase: "1",
  pricingProfile: "conservative",
  attemptCap: 300,
  freeSamplerAttempts: 10,
  geoTierDefault: "tier_1",
  activeExperimentVariantId: null,
};

const DEFAULT_LANGUAGE_UNLOCK_PRICING_ROWS: LanguageUnlockPricingRow[] = [
  {
    geoTier: "tier_1",
    beginnerPriceCents: 999,
    intermediatePriceCents: 1999,
    advancedPriceCents: 2999,
    currency: "USD",
  },
  {
    geoTier: "tier_2",
    beginnerPriceCents: 799,
    intermediatePriceCents: 1599,
    advancedPriceCents: 2399,
    currency: "USD",
  },
  {
    geoTier: "tier_3",
    beginnerPriceCents: 499,
    intermediatePriceCents: 999,
    advancedPriceCents: 1499,
    currency: "USD",
  },
  {
    geoTier: "tier_4",
    beginnerPriceCents: 299,
    intermediatePriceCents: 599,
    advancedPriceCents: 899,
    currency: "USD",
  },
  {
    geoTier: "tier_5",
    beginnerPriceCents: 199,
    intermediatePriceCents: 399,
    advancedPriceCents: 599,
    currency: "USD",
  },
];

const LANGUAGE_PRICE_PLAN_FIELDS: Array<{
  id: LanguagePricePlanId;
  label: string;
  placeholder: string;
}> = [
  {
    id: "language_plus_conservative",
    label: "Language Plus (Conservative)",
    placeholder: "price_...",
  },
  {
    id: "language_family_conservative",
    label: "Language Family (Conservative)",
    placeholder: "price_...",
  },
  {
    id: "language_plus_growth",
    label: "Language Plus (Growth)",
    placeholder: "price_...",
  },
  {
    id: "language_family_growth",
    label: "Language Family (Growth)",
    placeholder: "price_...",
  },
  {
    id: "language_school_annual",
    label: "Language School (Annual Seat)",
    placeholder: "price_...",
  },
];

const EMPTY_LANGUAGE_PRICE_MAP: LanguagePriceMap = {
  language_plus_conservative: "",
  language_family_conservative: "",
  language_plus_growth: "",
  language_family_growth: "",
  language_school_annual: "",
};

// ── Console section navigation definition ────────────────────────────────────

type ConsoleSectionDef = { id: string; title: string; description: string; tip?: string };
type ConsoleCategoryDef = { id: string; label: string; icon: string; sections: ConsoleSectionDef[] };

const CONSOLE_NAV: ConsoleCategoryDef[] = [
  {
    id: "system", label: "System Status", icon: "⬡",
    sections: [
      { id: "system-health", title: "System Health",
        description: "An all-in-one view of your platform health. Use this first whenever something seems broken — it combines environment, database, and payment checks in a single summary.",
        tip: "Green = everything working. Yellow = warnings that may limit some features. Red = a blocking problem needing urgent attention. Click 'Refresh All' to get the latest status." },
      { id: "env-checks", title: "Environment Checks",
        description: "Verifies that all required configuration values (such as API keys and connection strings) are correctly set on the server. Missing settings quietly disable features.",
        tip: "'Warn' means the feature still runs in a reduced mode. 'Fail' means the feature is completely off until the setting is added. A developer can add these in the .env file and redeploy." },
      { id: "db-status", title: "Database Status",
        description: "Checks that the database has all the tables the platform needs. A missing table usually means a database update needs to be applied.",
        tip: "If tables are missing, ask your developer to run 'npx supabase db push'. This applies any pending database structure updates without affecting existing data." },
      { id: "stripe-webhooks", title: "Payment Webhooks",
        description: "Monitors whether payment notifications from Stripe are arriving and being processed correctly. This ensures subscriptions, upgrades, and cancellations take effect promptly.",
        tip: "Failed events mean a billing action may not have reached the user's account. Use 'Mark Stale as Failed' to clean up stuck events, then replay from the Stripe Dashboard if needed." },
    ],
  },
  {
    id: "users", label: "User Management", icon: "◎",
    sections: [
      { id: "create-account", title: "Create Account",
        description: "Manually create a new user account — useful for setting up admin access, test accounts, or assisting a parent who cannot complete registration on their own.",
        tip: "Only grant Admin access if this person truly needs to manage platform settings. Granting admin to the wrong person gives full access to this console." },
      { id: "approvals", title: "Approvals",
        description: "Some sensitive actions (like deleting a user or issuing a refund) require a pre-approved request. Create and approve the request here, then use its ID when performing the action.",
        tip: "The approval ID links the action to the approval record. Always create and approve the request before attempting the action — otherwise it will be blocked by the system." },
      { id: "role-management", title: "Role Management",
        description: "Change what a user is allowed to do: grant or remove admin access and parent-portal access for any existing account.",
        tip: "Type UPDATE_ROLES exactly in the confirmation box to prevent accidental changes. Be careful not to remove your own admin access — you would be locked out of this console." },
      { id: "account-recovery", title: "Account Recovery",
        description: "Generate a secure password-reset link for a user who is locked out of their account. The link will appear in the result — copy and send it to the user by email.",
        tip: "The link is single-use and expires quickly. If the user misses it, simply generate a new one here at any time." },
      { id: "account-reset", title: "Account Reset / Deletion",
        description: "Reset a learner's progress data, or permanently delete an account. These actions cannot be undone — always verify the correct user ID before proceeding.",
        tip: "Soft delete hides the account but keeps data for compliance reporting. Hard delete permanently removes everything. For a GDPR erasure request, use hard delete alongside a DSAR record in the Compliance section." },
    ],
  },
  {
    id: "exam", label: "Exam Operations", icon: "✎",
    sections: [
      { id: "exam-maintenance", title: "Exam Maintenance",
        description: "Automatically find and fix common errors in learners' exam records — such as inconsistent scores or stale attempt data. Always run a Dry Run first to review what would change.",
        tip: "The Dry Run shows you exactly what would be affected without changing anything. Only click 'Run Apply' once you are satisfied with the dry run results." },
    ],
  },
  {
    id: "finance", label: "Finance & Billing", icon: "$",
    sections: [
      { id: "refunds", title: "Refunds",
        description: "Issue a partial or full refund for a payment. You need the Stripe payment ID (starts with 'pi_') and a pre-approved refund request ID.",
        tip: "Leave the amount blank for a full refund. Enter the amount in cents for a partial refund (999 = $9.99). You must create and approve a refund request before using this form." },
      { id: "promotions", title: "Promotions & Sales",
        description: "Create discount codes or limited-time sales events. Promo codes are entered by learners at checkout; sales events apply discounts automatically within a date range.",
        tip: "A promo code is reusable and can be shared publicly. A sales event applies automatically during a set time window — ideal for seasonal promotions." },
      { id: "pricing", title: "Base Product Pricing",
        description: "Create a new Stripe price for an existing product. Use this when you need to update the subscription price for a plan.",
        tip: "Creating a new price does not change existing subscribers — only new checkouts will use it. Tick 'Make this the default checkout price' so all new sign-ups use the updated amount." },
      { id: "lang-price-map", title: "Language Price Map",
        description: "Maps each subscription plan to its Stripe Price ID. This controls which Stripe prices are charged when learners subscribe to language learning plans.",
        tip: "Stripe Price IDs always start with 'price_'. Find them in your Stripe Dashboard under Products. After updating, verify by running a test checkout session." },
      { id: "lang-runtime", title: "Language Runtime Config",
        description: "Controls live settings for the language feature — pricing phase, free practice attempts, and default regional pricing tier — without requiring a code deployment.",
        tip: "Phase 1 is introductory pricing. Phase 2 and 3 progressively increase prices as the feature matures. The geo tier default sets the pricing region shown when a user's location cannot be detected." },
      { id: "lang-pricing-ladders", title: "Unlock Pricing Ladders",
        description: "Sets the one-time cost to unlock individual exam levels (Beginner, Intermediate, Advanced) by geographic region. All prices are entered in cents.",
        tip: "The 5 tiers reflect global purchasing-power differences — Tier 1 is highest (e.g. USA/EU) and Tier 5 is lowest. Enter prices in cents (e.g. 999 = $9.99)." },
      { id: "lang-reconciliation", title: "Unlock Reconciliation",
        description: "Checks for and repairs discrepancies between what learners paid for and what their accounts show as unlocked. Runs automatically monthly but can be triggered manually.",
        tip: "If a learner reports paying for an exam level but not having access, run this reconciliation. 'Drift' means records were out of sync. 'Auto-fixed' means they were corrected automatically." },
    ],
  },
  {
    id: "support-cat", label: "Support Queue", icon: "✉",
    sections: [
      { id: "support-queue", title: "Support Queue",
        description: "View and manage support tickets submitted by parents or learners. Update each ticket's status as you work through the requests.",
        tip: "Set tickets to 'In Progress' while investigating and 'Resolved' once the issue is fixed. Closed tickets are archived and no longer shown to the original submitter." },
    ],
  },
];

// ── Info tooltip ──────────────────────────────────────────────────────────────

function InfoTip({ tip }: { tip: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative ml-1.5 inline-block align-middle">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700 hover:bg-blue-200 transition-colors"
        aria-label="More information"
      >
        ?
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="absolute left-0 top-6 z-50 w-72 rounded-xl border border-blue-200 bg-white p-3 text-xs leading-relaxed text-slate-600 shadow-xl">
            {tip}
            <button type="button" onClick={() => setOpen(false)} className="mt-2 block text-[10px] text-slate-400 hover:text-slate-600">Close</button>
          </div>
        </>
      )}
    </span>
  );
}

// ── Console secondary nav category ───────────────────────────────────────────

function ConsoleNavCategory({
  category, selectedId, onSelect, badges,
}: {
  category: ConsoleCategoryDef;
  selectedId: string;
  onSelect: (id: string) => void;
  badges: Record<string, number>;
}) {
  const hasActive = category.sections.some((s) => s.id === selectedId);
  const [open, setOpen] = useState(hasActive);
  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-center gap-1.5"><span aria-hidden="true">{category.icon}</span>{category.label}</span>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true" className={`shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
          <path d="M1 2.5 4 5.5 7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="mt-0.5 space-y-0.5 pl-1 pb-1">
          {category.sections.map((section) => {
            const isActive = section.id === selectedId;
            const badge = badges[section.id] ?? 0;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-1.5 text-left text-[12px] font-medium transition-colors ${
                  isActive ? "bg-blue-100 text-blue-900" : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                <span className="truncate">{section.title}</span>
                {badge > 0 && (
                  <span className="ml-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] font-bold text-white">{badge}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Section card ──────────────────────────────────────────────────────────────

function Section({
  title,
  description,
  tip,
  children,
}: {
  title: string;
  description?: string;
  tip?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-1 flex items-center">
        <h2 className="text-[15px] font-semibold text-slate-800">{title}</h2>
        {tip && <InfoTip tip={tip} />}
      </div>
      {description && <p className="mb-4 text-sm leading-relaxed text-slate-500">{description}</p>}
      <div>{children}</div>
    </section>
  );
}

async function postJson(url: string, payload: unknown) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) {
    throw new Error(typeof data.error === "string" ? data.error : "Request failed.");
  }
  return data;
}

type ParsedRunSummary = {
  dryRun?: boolean;
  totals: { eligible: number; updated: number; erroredUsers: number };
  runUrl: string | null;
  artifactName: string | null;
  artifactHint: string | null;
  workflow: {
    workflow: string | null;
    runId: string | null;
    runNumber: string | null;
    repository: string | null;
    actor: string | null;
    ref: string | null;
    sha: string | null;
  };
  diagnostics: {
    generatedAt: string | null;
    topEligibleUsers: Array<{ userId: string; eligibleCount: number }>;
    topUpdatedUsers: Array<{ userId: string; updatedCount: number }>;
    topErroredUsers: Array<{ userId: string; error: string }>;
  };
};

function toRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function toNumber(value: unknown, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

function toStringValue(value: unknown) {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function toUserCountList(
  value: unknown,
  countKey: "eligibleCount" | "updatedCount",
): Array<{ userId: string; eligibleCount?: number; updatedCount?: number }> {
  if (!Array.isArray(value)) return [];
  const rows: Array<{ userId: string; eligibleCount?: number; updatedCount?: number }> = [];
  for (const entry of value.slice(0, 5)) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const userId = toStringValue((entry as Record<string, unknown>).userId);
    if (!userId) continue;
    const rawCount = toNumber((entry as Record<string, unknown>)[countKey], 0);
    if (countKey === "eligibleCount") {
      rows.push({ userId, eligibleCount: rawCount });
    } else {
      rows.push({ userId, updatedCount: rawCount });
    }
  }
  return rows;
}

function toErroredUsers(value: unknown): Array<{ userId: string; error: string }> {
  if (!Array.isArray(value)) return [];
  const rows: Array<{ userId: string; error: string }> = [];
  for (const entry of value.slice(0, 5)) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const userId = toStringValue((entry as Record<string, unknown>).userId);
    const error = toStringValue((entry as Record<string, unknown>).error);
    if (!userId || !error) continue;
    rows.push({ userId, error });
  }
  return rows;
}

function formatUserId(userId: string) {
  if (userId.length <= 8) return userId;
  return `${userId.slice(0, 8)}...`;
}

function formatShortId(value: string) {
  if (value.length <= 10) return value;
  return `${value.slice(0, 6)}...${value.slice(-4)}`;
}

function formatDateTime(value: string | null) {
  if (!value) return "n/a";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "n/a";
  return parsed.toLocaleString();
}

function isStripeWebhookHealthReport(value: unknown): value is StripeWebhookHealthReport {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.generatedAt === "string"
    && typeof record.trackingEnabled === "boolean"
    && typeof record.healthy === "boolean"
    && typeof record.detail === "string"
    && typeof record.totals === "object"
    && record.totals !== null
    && !Array.isArray(record.totals)
    && Array.isArray(record.recentFailed)
    && Array.isArray(record.failedByEventType)
  );
}

function isDbReadinessReport(value: unknown): value is DbReadinessReport {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.generatedAt === "string"
    && typeof record.healthy === "boolean"
    && typeof record.totals === "object"
    && record.totals !== null
    && !Array.isArray(record.totals)
    && Array.isArray(record.tables)
  );
}

function isEnvReadinessReport(value: unknown): value is EnvReadinessReport {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.generatedAt === "string"
    && typeof record.healthy === "boolean"
    && typeof record.degraded === "boolean"
    && typeof record.totals === "object"
    && record.totals !== null
    && !Array.isArray(record.totals)
    && Array.isArray(record.checks)
  );
}

function isSystemHealthReport(value: unknown): value is SystemHealthReport {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.generatedAt === "string"
    && typeof record.healthy === "boolean"
    && typeof record.degraded === "boolean"
    && typeof record.summary === "object"
    && record.summary !== null
    && !Array.isArray(record.summary)
    && typeof record.envReadiness === "object"
    && record.envReadiness !== null
    && typeof record.dbReadiness === "object"
    && record.dbReadiness !== null
    && typeof record.webhookHealth === "object"
    && record.webhookHealth !== null
  );
}

function isLanguagePricingAnalyticsReport(
  value: unknown,
): value is LanguagePricingAnalyticsReport {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.generatedAt === "string" &&
    typeof record.windowDays === "number" &&
    typeof record.eventCount === "number" &&
    Array.isArray(record.byAction) &&
    Array.isArray(record.planActions) &&
    typeof record.interactionSummary === "object" &&
    record.interactionSummary !== null &&
    typeof record.funnel === "object" &&
    record.funnel !== null
  );
}

function findEnvCheck(report: EnvReadinessReport, id: string) {
  return report.checks.find((check) => check.id === id) ?? null;
}

function buildRunbookHints(
  envReadiness: EnvReadinessReport,
  dbReadiness: DbReadinessReport,
  webhookHealth: StripeWebhookHealthReport,
) {
  const hints: RunbookHint[] = [];
  const hasHint = (id: string) => hints.some((hint) => hint.id === id);
  const pushHint = (hint: RunbookHint) => {
    if (!hasHint(hint.id)) hints.push(hint);
  };

  const supabaseUrl = findEnvCheck(envReadiness, "supabase_url");
  if (supabaseUrl?.status === "fail") {
    pushHint({
      id: "env_supabase_url",
      severity: "critical",
      title: "Configure Supabase URL",
      description: "Core Supabase URL is missing or invalid, which blocks auth and API calls.",
      commands: [
        "Set NEXT_PUBLIC_SUPABASE_URL (or EXPO_PUBLIC_SUPABASE_URL) in .env",
        "Restart the app server",
        "Run: npm run env:check",
      ],
      href: "/api/admin/system/env-readiness",
      hrefLabel: "Inspect Env JSON",
    });
  }

  const supabaseAnon = findEnvCheck(envReadiness, "supabase_anon_key");
  if (supabaseAnon?.status === "fail") {
    pushHint({
      id: "env_supabase_anon",
      severity: "critical",
      title: "Configure Supabase anon key",
      description: "Public Supabase anon key is required for client auth/session flows.",
      commands: [
        "Set NEXT_PUBLIC_SUPABASE_ANON_KEY (or EXPO_PUBLIC_SUPABASE_KEY) in .env",
        "Restart the app server",
        "Run: npm run env:check",
      ],
      href: "/api/admin/system/env-readiness",
      hrefLabel: "Inspect Env JSON",
    });
  }

  const stripeSecretWebhook = findEnvCheck(envReadiness, "stripe_secret_webhook");
  if (stripeSecretWebhook?.status === "fail") {
    pushHint({
      id: "env_stripe_keys",
      severity: "critical",
      title: "Stripe billing is blocked",
      description: stripeSecretWebhook.detail,
      commands: [
        "Set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET in .env",
        "Restart the app server",
        "Run: npm run env:check",
      ],
      href: "/api/admin/system/env-readiness",
      hrefLabel: "Inspect Env JSON",
    });
  } else if (stripeSecretWebhook?.status === "warn") {
    pushHint({
      id: "env_stripe_keys",
      severity: "warning",
      title: "Complete Stripe server configuration",
      description: "Stripe keys are partially configured; checkout/webhook flows stay limited.",
      commands: [
        "Set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET in .env",
        "Restart the app server",
        "Run: npm run env:check",
      ],
      href: "/api/admin/system/env-readiness",
      hrefLabel: "Inspect Env JSON",
    });
  }

  const parentConsentEmail = findEnvCheck(envReadiness, "parent_consent_email");
  if (parentConsentEmail?.status === "warn") {
    pushHint({
      id: "env_parent_consent_email",
      severity: "warning",
      title: "Enable parent consent email delivery",
      description: "Consent requests currently fall back to simulation links without email sender config.",
      commands: [
        "Set RESEND_API_KEY and PARENT_CONSENT_FROM_EMAIL in .env",
        "Restart the app server",
        "Run: npm run env:check",
      ],
      href: "/api/admin/system/env-readiness",
      hrefLabel: "Inspect Env JSON",
    });
  }

  const mixpanelToken = findEnvCheck(envReadiness, "mixpanel_token");
  if (mixpanelToken?.status === "warn") {
    pushHint({
      id: "env_mixpanel",
      severity: "warning",
      title: "Enable Mixpanel telemetry",
      description: "Product analytics are currently disabled.",
      commands: [
        "Set NEXT_PUBLIC_MIXPANEL_TOKEN in .env",
        "Restart the app server",
        "Run: npm run env:check",
      ],
      href: "/api/admin/system/env-readiness",
      hrefLabel: "Inspect Env JSON",
    });
  }

  const missingStripeWebhookTable = dbReadiness.tables.some(
    (row) => row.table === "stripe_webhook_events" && row.status !== "present",
  );
  if (missingStripeWebhookTable) {
    pushHint({
      id: "db_stripe_webhook_events",
      severity: "critical",
      title: "Apply Stripe webhook tracking table",
      description: "Webhook observability cannot function until the tracking table is reachable via Supabase API.",
      commands: [
        "Apply: supabase/migrations/20260225_stripe_webhook_events.sql",
        "Refresh Supabase API schema cache",
        "Run: npm run db:check -- no-fail",
      ],
      href: "/api/admin/system/db-readiness",
      hrefLabel: "Inspect DB JSON",
    });
  } else if (dbReadiness.totals.missing > 0 || dbReadiness.totals.error > 0) {
    pushHint({
      id: "db_general_missing",
      severity: "critical",
      title: "Resolve database readiness gaps",
      description: "One or more required tables are missing/unreachable.",
      commands: [
        "Review missing tables in the DB Readiness panel",
        "Apply pending migrations in Supabase",
        "Run: npm run db:check -- no-fail",
      ],
      href: "/api/admin/system/db-readiness",
      hrefLabel: "Inspect DB JSON",
    });
  }

  if (!webhookHealth.trackingEnabled) {
    pushHint({
      id: "webhook_tracking_disabled",
      severity: "critical",
      title: "Restore webhook tracking availability",
      description: "Webhook health is degraded because tracking storage is not available through Supabase API.",
      commands: [
        "Confirm stripe_webhook_events exists and is exposed to Supabase API",
        "Refresh schema cache if recently migrated",
        "Run: npm run webhooks:health -- no-fail",
      ],
      href: "/api/admin/system/stripe-webhook-health",
      hrefLabel: "Inspect Webhook JSON",
    });
  } else {
    if (webhookHealth.totals.failed > 0) {
      pushHint({
        id: "webhook_failed_events",
        severity: "critical",
        title: "Investigate failed webhook events",
        description: "Recent webhook failures indicate billing lifecycle events are not processing cleanly.",
        commands: [
          "Open webhook health JSON and inspect recentFailed entries",
          "Fix root cause and replay events from Stripe Dashboard if needed",
          "Run: npm run webhooks:health -- no-fail",
        ],
        href: "/api/admin/system/stripe-webhook-health",
        hrefLabel: "Inspect Webhook JSON",
      });
    }

    if (webhookHealth.totals.staleProcessing > 0) {
      pushHint({
        id: "webhook_stale_processing",
        severity: "warning",
        title: "Reconcile stale processing webhooks",
        description: "Some webhook events have remained in processing longer than the stale threshold.",
        commands: [
          "Use 'Mark Stale as Failed' in Stripe Webhook Health",
          "Investigate processing path for long-running events",
          "Run: npm run webhooks:health -- no-fail",
        ],
        href: "/api/admin/system/stripe-webhook-health",
        hrefLabel: "Inspect Webhook JSON",
      });
    }
  }

  return hints;
}

function parseRunSummaryFromMetadata(metadata: Record<string, unknown> | null): ParsedRunSummary {
  const totalsRecord = toRecord(metadata?.totals);
  const workflowRecord = toRecord(metadata?.workflow);
  const artifactRecord = toRecord(metadata?.artifact);
  const diagnosticsRecord = toRecord(metadata?.diagnostics);

  return {
    dryRun: typeof metadata?.dryRun === "boolean" ? metadata.dryRun : undefined,
    totals: {
      eligible: toNumber(totalsRecord?.eligible),
      updated: toNumber(totalsRecord?.updated),
      erroredUsers: toNumber(totalsRecord?.erroredUsers),
    },
    runUrl:
      toStringValue(metadata?.runUrl) ??
      toStringValue(workflowRecord?.runUrl),
    artifactName: toStringValue(artifactRecord?.name),
    artifactHint: toStringValue(artifactRecord?.note),
    workflow: {
      workflow: toStringValue(workflowRecord?.workflow),
      runId: toStringValue(workflowRecord?.runId),
      runNumber: toStringValue(workflowRecord?.runNumber),
      repository: toStringValue(workflowRecord?.repository),
      actor: toStringValue(workflowRecord?.actor),
      ref: toStringValue(workflowRecord?.ref),
      sha: toStringValue(workflowRecord?.sha),
    },
    diagnostics: {
      generatedAt: toStringValue(diagnosticsRecord?.generatedAt),
      topEligibleUsers: toUserCountList(diagnosticsRecord?.topEligibleUsers, "eligibleCount").map((entry) => ({
        userId: entry.userId,
        eligibleCount: entry.eligibleCount ?? 0,
      })),
      topUpdatedUsers: toUserCountList(diagnosticsRecord?.topUpdatedUsers, "updatedCount").map((entry) => ({
        userId: entry.userId,
        updatedCount: entry.updatedCount ?? 0,
      })),
      topErroredUsers: toErroredUsers(diagnosticsRecord?.topErroredUsers),
    },
  };
}

function parseLanguagePriceMap(value: unknown): LanguagePriceMap {
  const record = toRecord(value);
  const next: LanguagePriceMap = { ...EMPTY_LANGUAGE_PRICE_MAP };

  for (const field of LANGUAGE_PRICE_PLAN_FIELDS) {
    const raw = record ? record[field.id] : null;
    next[field.id] = typeof raw === "string" ? raw.trim() : "";
  }

  return next;
}

function parseLanguageRuntimeConfig(value: unknown): LanguageRuntimeConfig {
  const record = toRecord(value);
  const config: LanguageRuntimeConfig = {
    ...DEFAULT_LANGUAGE_RUNTIME_CONFIG,
  };

  if (!record) return config;

  const source = record.source;
  if (source === "default" || source === "app_settings") {
    config.source = source;
  }

  if (record.phase === "1" || record.phase === "2" || record.phase === "3") {
    config.phase = record.phase;
  }

  if (record.pricingProfile === "conservative" || record.pricingProfile === "growth") {
    config.pricingProfile = record.pricingProfile;
  }

  if (record.attemptCap === 250 || record.attemptCap === 300 || record.attemptCap === 350) {
    config.attemptCap = record.attemptCap;
  }

  if (record.freeSamplerAttempts === 5 || record.freeSamplerAttempts === 10) {
    config.freeSamplerAttempts = record.freeSamplerAttempts;
  }

  if (
    record.geoTierDefault === "tier_1" ||
    record.geoTierDefault === "tier_2" ||
    record.geoTierDefault === "tier_3" ||
    record.geoTierDefault === "tier_4" ||
    record.geoTierDefault === "tier_5"
  ) {
    config.geoTierDefault = record.geoTierDefault;
  }

  if (record.activeExperimentVariantId === null) {
    config.activeExperimentVariantId = null;
  } else if (
    typeof record.activeExperimentVariantId === "string" &&
    record.activeExperimentVariantId.trim().length > 0
  ) {
    config.activeExperimentVariantId = record.activeExperimentVariantId.trim();
  }

  return config;
}

function parseLanguageUnlockPricingRows(value: unknown): LanguageUnlockPricingRow[] {
  if (!Array.isArray(value)) {
    return [...DEFAULT_LANGUAGE_UNLOCK_PRICING_ROWS];
  }

  const rows: LanguageUnlockPricingRow[] = [];
  for (const entry of value) {
    const record = toRecord(entry);
    if (!record) continue;

    const geoTier = toStringValue(record.geoTier);
    if (
      geoTier !== "tier_1" &&
      geoTier !== "tier_2" &&
      geoTier !== "tier_3" &&
      geoTier !== "tier_4" &&
      geoTier !== "tier_5"
    ) {
      continue;
    }

    rows.push({
      geoTier,
      beginnerPriceCents: Math.max(1, Math.trunc(toNumber(record.beginnerPriceCents, 0))),
      intermediatePriceCents: Math.max(1, Math.trunc(toNumber(record.intermediatePriceCents, 0))),
      advancedPriceCents: Math.max(1, Math.trunc(toNumber(record.advancedPriceCents, 0))),
      currency: (toStringValue(record.currency) ?? "USD").toUpperCase(),
      updatedAt: toStringValue(record.updatedAt),
    });
  }

  if (rows.length === 0) {
    return [...DEFAULT_LANGUAGE_UNLOCK_PRICING_ROWS];
  }

  return rows.sort((a, b) => a.geoTier.localeCompare(b.geoTier));
}

export default function OperationsConsole({
  initialTickets,
  initialExamMaintenanceAlerts,
  initialExamMaintenanceRuns,
  initialExamMaintenanceRunSummaries,
  initialEnvReadiness,
  initialDbReadiness,
  initialStripeWebhookHealth,
}: {
  initialTickets: SupportTicket[];
  initialExamMaintenanceAlerts: ExamMaintenanceAlert[];
  initialExamMaintenanceRuns: ExamMaintenanceRun[];
  initialExamMaintenanceRunSummaries: ExamMaintenanceRunSummaryAlert[];
  initialEnvReadiness: EnvReadinessReport;
  initialDbReadiness: DbReadinessReport;
  initialStripeWebhookHealth: StripeWebhookHealthReport;
}) {
  const [status, setStatus] = useState("");
  const [tickets, setTickets] = useState(initialTickets);
  const [approvalStatus, setApprovalStatus] = useState("");
  const [examMaintenanceStatus, setExamMaintenanceStatus] = useState("");
  const [examMaintenanceBusy, setExamMaintenanceBusy] = useState(false);
  const [examMaintenanceRuns, setExamMaintenanceRuns] = useState(initialExamMaintenanceRuns);
  const [examMaintenanceAlerts, setExamMaintenanceAlerts] = useState(initialExamMaintenanceAlerts);
  const [examMaintenanceRunSummaries, setExamMaintenanceRunSummaries] = useState(
    initialExamMaintenanceRunSummaries,
  );
  const [envReadiness, setEnvReadiness] = useState(initialEnvReadiness);
  const [envReadinessBusy, setEnvReadinessBusy] = useState(false);
  const [envReadinessStatus, setEnvReadinessStatus] = useState("");
  const [systemHealthBusy, setSystemHealthBusy] = useState(false);
  const [systemHealthStatus, setSystemHealthStatus] = useState("");
  const [dbReadiness, setDbReadiness] = useState(initialDbReadiness);
  const [dbReadinessBusy, setDbReadinessBusy] = useState(false);
  const [dbReadinessStatus, setDbReadinessStatus] = useState("");
  const [stripeWebhookHealth, setStripeWebhookHealth] = useState(initialStripeWebhookHealth);
  const [stripeWebhookBusy, setStripeWebhookBusy] = useState(false);
  const [stripeWebhookStatus, setStripeWebhookStatus] = useState("");
  const [languagePriceMap, setLanguagePriceMap] = useState<LanguagePriceMap>(
    EMPTY_LANGUAGE_PRICE_MAP,
  );
  const [languagePriceStatus, setLanguagePriceStatus] = useState("");
  const [languagePriceBusy, setLanguagePriceBusy] = useState(false);
  const [languageRuntimeConfig, setLanguageRuntimeConfig] = useState<LanguageRuntimeConfig>(
    DEFAULT_LANGUAGE_RUNTIME_CONFIG,
  );
  const [languageRuntimeStatus, setLanguageRuntimeStatus] = useState("");
  const [languageRuntimeBusy, setLanguageRuntimeBusy] = useState(false);
  const [languageUnlockPricingRows, setLanguageUnlockPricingRows] = useState<LanguageUnlockPricingRow[]>(
    DEFAULT_LANGUAGE_UNLOCK_PRICING_ROWS,
  );
  const [languageUnlockPricingStatus, setLanguageUnlockPricingStatus] = useState("");
  const [languageUnlockPricingBusy, setLanguageUnlockPricingBusy] = useState(false);
  const [languageUnlockReconciliationStatus, setLanguageUnlockReconciliationStatus] = useState("");
  const [languageUnlockReconciliationBusy, setLanguageUnlockReconciliationBusy] = useState(false);
  const [languageUnlockReconciliationResult, setLanguageUnlockReconciliationResult] =
    useState<LanguageUnlockReconciliationResult | null>(null);
  const [languagePricingReport, setLanguagePricingReport] =
    useState<LanguagePricingAnalyticsReport | null>(null);
  const [languagePricingReportStatus, setLanguagePricingReportStatus] = useState("");
  const [languagePricingReportBusy, setLanguagePricingReportBusy] = useState(false);
  const [ownerSecurityStatus, setOwnerSecurityStatus] = useState<OwnerSecurityStatusResponse | null>(null);
  const [ownerSecurityBusy, setOwnerSecurityBusy] = useState(false);
  const [ownerSecurityMessage, setOwnerSecurityMessage] = useState("");
  const [ownerTotpProvision, setOwnerTotpProvision] = useState<{
    factorId: string;
    secret: string;
    otpauthUri: string;
  } | null>(null);
  const [ownerEmailChallenge, setOwnerEmailChallenge] = useState<{
    challengeId: string;
    scope: "owner_console" | "factory_reset" | "ownership_transfer" | "security_admin";
    expiresAt: string;
    debugCode?: string | null;
  } | null>(null);
  const [factoryResetStatus, setFactoryResetStatus] = useState<FactoryResetStatusResponse | null>(null);
  const [factoryResetBusy, setFactoryResetBusy] = useState(false);
  const [factoryResetMessage, setFactoryResetMessage] = useState("");
  const [transferPlaybooks, setTransferPlaybooks] = useState<OwnershipTransferPlaybook[]>([]);
  const [transferBusy, setTransferBusy] = useState(false);
  const [transferMessage, setTransferMessage] = useState("");

  // Support direct deep-linking via ?s= URL parameter from the sidebar
  const searchParams = useSearchParams();
  const urlSectionParam = searchParams.get("s");
  const allSectionIds = useMemo(
    () => CONSOLE_NAV.flatMap((cat) => cat.sections.map((s) => s.id)),
    [],
  );
  const initialSection = urlSectionParam && allSectionIds.includes(urlSectionParam)
    ? urlSectionParam
    : "system-health";
  const [selectedSectionId, setSelectedSectionId] = useState(initialSection);

  // Sync when URL param changes (sidebar click while console is already open)
  useEffect(() => {
    if (urlSectionParam && allSectionIds.includes(urlSectionParam)) {
      setSelectedSectionId(urlSectionParam);
    }
  }, [urlSectionParam, allSectionIds]);

  const activeTicketCount = useMemo(
    () => tickets.filter((ticket) => ticket.status === "open" || ticket.status === "in_progress").length,
    [tickets]
  );
  const openExamMaintenanceAlerts = useMemo(
    () => examMaintenanceAlerts.filter((alert) => !alert.acknowledged).length,
    [examMaintenanceAlerts],
  );
  const unacknowledgedRunSummaries = useMemo(
    () => examMaintenanceRunSummaries.filter((alert) => !alert.acknowledged).length,
    [examMaintenanceRunSummaries],
  );
  const hasStripeWebhookIssues = useMemo(
    () =>
      !stripeWebhookHealth.trackingEnabled
      || stripeWebhookHealth.totals.failed > 0
      || stripeWebhookHealth.totals.staleProcessing > 0,
    [stripeWebhookHealth],
  );
  const dbReadinessIssues = useMemo(
    () => dbReadiness.tables.filter((row) => row.status !== "present"),
    [dbReadiness],
  );
  const envReadinessIssues = useMemo(
    () => envReadiness.checks.filter((row) => row.status !== "pass"),
    [envReadiness],
  );
  const systemBlockingIssues = useMemo(
    () =>
      envReadiness.totals.fail
      + dbReadiness.totals.missing
      + dbReadiness.totals.error
      + (stripeWebhookHealth.healthy ? 0 : 1),
    [dbReadiness, envReadiness, stripeWebhookHealth],
  );
  const systemWarningIssues = useMemo(
    () => envReadiness.totals.warn,
    [envReadiness],
  );
  const runbookHints = useMemo(
    () => buildRunbookHints(envReadiness, dbReadiness, stripeWebhookHealth),
    [dbReadiness, envReadiness, stripeWebhookHealth],
  );

  const handleCreateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/users/create", {
        email: form.get("email"),
        password: form.get("password"),
        displayName: form.get("displayName") || undefined,
        isAdmin: form.get("isAdmin") === "on",
        isOwner: form.get("isOwner") === "on",
        isParent: form.get("isParent") === "on",
        dataMode: form.get("dataMode"),
      });
      setStatus(`User created: ${String(result.userId)}`);
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create user.");
    }
  };

  const handleUpdateRoles = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "UPDATE_ROLES") {
      setStatus("Role update blocked. Type UPDATE_ROLES to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/update-roles", {
        userId: form.get("userId"),
        isAdmin: form.get("setIsAdmin") === "on",
        isOwner: form.get("setIsOwner") === "on",
        isParent: form.get("setIsParent") === "on",
        dataMode: form.get("setDataMode"),
        confirmText,
      });
      setStatus("User roles updated.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to update roles.");
    }
  };

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/users/reset-password", {
        email: form.get("email"),
      });
      setStatus(`Reset link generated: ${String(result.actionLink)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to generate reset link.");
    }
  };

  const handleDeleteUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "DELETE_USER") {
      setStatus("Deletion blocked. Type DELETE_USER to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/delete", {
        userId: form.get("userId"),
        hardDelete: form.get("hardDelete") === "on",
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus("User deletion request completed.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to delete user.");
    }
  };

  const handleResetProgress = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "RESET_PROGRESS") {
      setStatus("Reset blocked. Type RESET_PROGRESS to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/reset-progress", {
        userId: form.get("userId"),
        scope: form.get("scope"),
        confirmText,
      });
      setStatus("Learner progress reset completed.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to reset progress.");
    }
  };

  const handleRefund = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "PROCESS_REFUND") {
      setStatus("Refund blocked. Type PROCESS_REFUND to confirm.");
      return;
    }
    try {
      const amount = Number(form.get("amountCents"));
      const result = await postJson("/api/admin/billing/refund", {
        paymentIntentId: form.get("paymentIntentId"),
        amountCents: Number.isFinite(amount) && amount > 0 ? amount : undefined,
        reason: form.get("reason"),
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus(`Refund created: ${String(result.refundId)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create refund.");
    }
  };

  const handlePromoCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const percentOff = Number(form.get("percentOff"));
      const result = await postJson("/api/admin/billing/promo-code", {
        code: form.get("code"),
        percentOff: Number.isFinite(percentOff) && percentOff > 0 ? percentOff : undefined,
        duration: form.get("duration"),
      });
      setStatus(`Promo code created: ${String(result.code)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create promo code.");
    }
  };

  const handleSalesEvent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/billing/sales-event", {
        name: form.get("name"),
        code: form.get("code"),
        discountPercent: Number(form.get("discountPercent")),
        endsAtIso: form.get("endsAtIso"),
      });
      setStatus(`Sales event created with code: ${String(result.code)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create sales event.");
    }
  };

  const handleSetPrice = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "SET_PRICE") {
      setStatus("Price update blocked. Type SET_PRICE to confirm.");
      return;
    }
    try {
      const result = await postJson("/api/admin/billing/set-price", {
        productId: form.get("productId"),
        monthlyPriceUsd: Number(form.get("monthlyPriceUsd")),
        nickname: form.get("nickname") || undefined,
        makeDefault: form.get("makeDefault") === "on",
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus(`New Stripe price created: ${String(result.priceId)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create price.");
    }
  };

  const refreshLanguagePriceMap = useCallback(async () => {
    setLanguagePriceStatus("");
    setLanguagePriceBusy(true);
    try {
      const response = await fetch("/api/admin/billing/language-prices");
      const payload = (await response.json().catch(() => null)) as {
        values?: unknown;
        error?: string;
      } | null;

      if (!response.ok) {
        setLanguagePriceStatus(payload?.error ?? "Failed to load language price map.");
        return;
      }

      setLanguagePriceMap(parseLanguagePriceMap(payload?.values));
      setLanguagePriceStatus(`Language price map refreshed ${new Date().toLocaleTimeString()}.`);
    } catch {
      setLanguagePriceStatus("Failed to load language price map.");
    } finally {
      setLanguagePriceBusy(false);
    }
  }, []);

  const refreshLanguagePricingAnalytics = useCallback(async () => {
    setLanguagePricingReportStatus("");
    setLanguagePricingReportBusy(true);
    try {
      const response = await fetch("/api/admin/reports/language-pricing?days=30");
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        const errorMessage =
          payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Failed to load language pricing analytics.";
        setLanguagePricingReportStatus(errorMessage);
        return;
      }

      if (!isLanguagePricingAnalyticsReport(payload)) {
        setLanguagePricingReportStatus("Received unexpected language pricing analytics payload.");
        return;
      }

      setLanguagePricingReport(payload);
      setLanguagePricingReportStatus(`Pricing analytics refreshed ${new Date().toLocaleTimeString()}.`);
    } catch {
      setLanguagePricingReportStatus("Failed to load language pricing analytics.");
    } finally {
      setLanguagePricingReportBusy(false);
    }
  }, []);

  const refreshLanguageRuntimeConfig = useCallback(async () => {
    setLanguageRuntimeStatus("");
    setLanguageRuntimeBusy(true);
    try {
      const response = await fetch("/api/admin/billing/language-runtime");
      const payload = (await response.json().catch(() => null)) as {
        runtimeConfig?: unknown;
        error?: string;
      } | null;

      if (!response.ok) {
        setLanguageRuntimeStatus(payload?.error ?? "Failed to load language runtime config.");
        return;
      }

      setLanguageRuntimeConfig(parseLanguageRuntimeConfig(payload?.runtimeConfig));
      setLanguageRuntimeStatus(
        `Language runtime config refreshed ${new Date().toLocaleTimeString()}.`,
      );
    } catch {
      setLanguageRuntimeStatus("Failed to load language runtime config.");
    } finally {
      setLanguageRuntimeBusy(false);
    }
  }, []);

  const refreshLanguageUnlockPricing = useCallback(async () => {
    setLanguageUnlockPricingStatus("");
    setLanguageUnlockPricingBusy(true);
    try {
      const response = await fetch("/api/admin/billing/language-unlock-pricing");
      const payload = (await response.json().catch(() => null)) as {
        rows?: unknown;
        error?: string;
      } | null;

      if (!response.ok) {
        setLanguageUnlockPricingStatus(payload?.error ?? "Failed to load unlock pricing ladders.");
        return;
      }

      setLanguageUnlockPricingRows(parseLanguageUnlockPricingRows(payload?.rows));
      setLanguageUnlockPricingStatus(
        `Unlock pricing ladders refreshed ${new Date().toLocaleTimeString()}.`,
      );
    } catch {
      setLanguageUnlockPricingStatus("Failed to load unlock pricing ladders.");
    } finally {
      setLanguageUnlockPricingBusy(false);
    }
  }, []);

  const handleLanguageUnlockPricingFieldChange = useCallback(
    (
      geoTier: LanguageUnlockPricingRow["geoTier"],
      field: "beginnerPriceCents" | "intermediatePriceCents" | "advancedPriceCents" | "currency",
      value: string,
    ) => {
      setLanguageUnlockPricingRows((current) =>
        current.map((row) => {
          if (row.geoTier !== geoTier) return row;
          if (field === "currency") {
            return {
              ...row,
              currency: value.toUpperCase().slice(0, 3),
            };
          }
          const parsed = Number(value);
          return {
            ...row,
            [field]: Number.isFinite(parsed) && parsed > 0 ? Math.trunc(parsed) : row[field],
          };
        }),
      );
    },
    [],
  );

  const handleSetLanguageUnlockPricing = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "SET_LANGUAGE_UNLOCK_PRICING") {
      setLanguageUnlockPricingStatus(
        "Unlock pricing update blocked. Type SET_LANGUAGE_UNLOCK_PRICING to confirm.",
      );
      return;
    }

    setLanguageUnlockPricingStatus("");
    setLanguageUnlockPricingBusy(true);
    try {
      const result = await postJson("/api/admin/billing/language-unlock-pricing", {
        rows: languageUnlockPricingRows.map((row) => ({
          geoTier: row.geoTier,
          beginnerPriceCents: row.beginnerPriceCents,
          intermediatePriceCents: row.intermediatePriceCents,
          advancedPriceCents: row.advancedPriceCents,
          currency: row.currency,
        })),
        confirmText,
      });

      setLanguageUnlockPricingRows(
        parseLanguageUnlockPricingRows((result as { rows?: unknown }).rows),
      );
      setLanguageUnlockPricingStatus("Language unlock pricing ladders updated.");
      event.currentTarget.reset();
    } catch (error) {
      setLanguageUnlockPricingStatus(
        error instanceof Error ? error.message : "Failed to update unlock pricing ladders.",
      );
    } finally {
      setLanguageUnlockPricingBusy(false);
    }
  };

  const handleRunLanguageUnlockReconciliation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "RUN_LANGUAGE_UNLOCK_RECONCILIATION") {
      setLanguageUnlockReconciliationStatus(
        "Reconciliation run blocked. Type RUN_LANGUAGE_UNLOCK_RECONCILIATION to confirm.",
      );
      return;
    }

    const monthKeyInput = String(form.get("monthKey") ?? "").trim();
    const maxAutoFixRaw = String(form.get("maxAutoFixAbsDrift") ?? "").trim();
    const maxAutoFixAbsDrift =
      maxAutoFixRaw.length > 0 ? Math.max(1, Math.trunc(Number(maxAutoFixRaw))) : undefined;

    setLanguageUnlockReconciliationStatus("");
    setLanguageUnlockReconciliationBusy(true);
    try {
      const result = await postJson("/api/reconciliation/run", {
        monthKey: monthKeyInput.length > 0 ? monthKeyInput : undefined,
        maxAutoFixAbsDrift:
          Number.isFinite(maxAutoFixAbsDrift ?? Number.NaN) ? maxAutoFixAbsDrift : undefined,
      });
      const parsed = (result as { result?: LanguageUnlockReconciliationResult }).result ?? null;
      setLanguageUnlockReconciliationResult(parsed);
      setLanguageUnlockReconciliationStatus(
        parsed
          ? `Reconciliation completed. Drift: ${parsed.driftDetected}, fixed: ${parsed.autoFixed}, queued: ${parsed.queuedForReview}.`
          : "Reconciliation completed.",
      );
      event.currentTarget.reset();
    } catch (error) {
      setLanguageUnlockReconciliationStatus(
        error instanceof Error ? error.message : "Failed to run unlock reconciliation.",
      );
    } finally {
      setLanguageUnlockReconciliationBusy(false);
    }
  };

  const handleLanguagePriceInputChange = (planId: LanguagePricePlanId, value: string) => {
    setLanguagePriceMap((current) => ({ ...current, [planId]: value }));
  };

  const handleSetLanguagePrices = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "SET_LANGUAGE_PRICES") {
      setLanguagePriceStatus("Language pricing update blocked. Type SET_LANGUAGE_PRICES to confirm.");
      return;
    }

    setLanguagePriceStatus("");
    setLanguagePriceBusy(true);
    try {
      const result = await postJson("/api/admin/billing/language-prices", {
        ...languagePriceMap,
        confirmText,
      });
      setLanguagePriceMap(parseLanguagePriceMap((result as { values?: unknown }).values));
      setLanguagePriceStatus("Language Stripe price map updated.");
      event.currentTarget.reset();
    } catch (error) {
      setLanguagePriceStatus(
        error instanceof Error ? error.message : "Failed to update language price map.",
      );
    } finally {
      setLanguagePriceBusy(false);
    }
  };

  const handleResolveTicket = async (ticketId: string, statusValue: "in_progress" | "resolved" | "closed") => {
    try {
      await postJson(`/api/admin/support/tickets/${ticketId}/resolve`, {
        status: statusValue,
      });
      setTickets((previous) =>
        previous.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, status: statusValue } : ticket
        )
      );
      setStatus(`Ticket ${ticketId} updated to ${statusValue}.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to update ticket.");
    }
  };

  const handleCreateApprovalRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/approvals", {
        actionType: form.get("actionType"),
        reason: form.get("reason"),
      });
      setApprovalStatus(`Approval created: ${String((result.approval as { id?: string })?.id ?? "unknown")}`);
      event.currentTarget.reset();
    } catch (error) {
      setApprovalStatus(error instanceof Error ? error.message : "Failed to create approval request.");
    }
  };

  const handleUpdateApprovalStatus = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const approvalId = String(form.get("approvalId") ?? "");
    try {
      await postJson(`/api/admin/approvals/${approvalId}`, {
        status: form.get("status"),
        note: form.get("note"),
      });
      setApprovalStatus(`Approval ${approvalId} updated.`);
      event.currentTarget.reset();
    } catch (error) {
      setApprovalStatus(error instanceof Error ? error.message : "Failed to update approval.");
    }
  };

  const runExamMaintenance = async (dryRun: boolean) => {
    setExamMaintenanceBusy(true);
    setExamMaintenanceStatus("");
    try {
      const result = await postJson("/api/admin/exam/error-log/auto-resolve", {
        dryRun,
        limitUsers: 150,
        limitItemsPerUser: 200,
      });
      const totals = (result.totals ?? {}) as { eligible?: number; updated?: number; erroredUsers?: number };
      setExamMaintenanceStatus(
        `${dryRun ? "Dry run" : "Apply run"} complete. Eligible: ${Number(totals.eligible ?? 0)}, updated: ${Number(
          totals.updated ?? 0,
        )}, errored users: ${Number(totals.erroredUsers ?? 0)}.`,
      );
      setExamMaintenanceRuns((previous) => [
        {
          id: `local-${Date.now()}`,
          admin_user_id: "current",
          action_type: "exam_error_auto_resolve_run",
          metadata: {
            dryRun,
            totals,
            userCount: result.userCount,
            diagnostics:
              result && typeof result === "object"
                ? (result as { diagnostics?: Record<string, unknown> }).diagnostics
                : undefined,
          },
          created_at: new Date().toISOString(),
        },
        ...previous,
      ]);
    } catch (error) {
      setExamMaintenanceStatus(error instanceof Error ? error.message : "Failed to run exam maintenance.");
    } finally {
      setExamMaintenanceBusy(false);
    }
  };

  const acknowledgeExamMaintenanceAlert = async (alertId: string) => {
    setExamMaintenanceStatus("");
    try {
      await postJson("/api/admin/alerts", { alertId });
      setExamMaintenanceAlerts((previous) =>
        previous.map((alert) =>
          alert.id === alertId
            ? { ...alert, acknowledged: true, created_at: alert.created_at }
            : alert,
        ),
      );
      setExamMaintenanceStatus(`Alert ${alertId} acknowledged.`);
    } catch (error) {
      setExamMaintenanceStatus(error instanceof Error ? error.message : "Failed to acknowledge alert.");
    }
  };

  const acknowledgeExamMaintenanceRunSummary = async (alertId: string) => {
    setExamMaintenanceStatus("");
    try {
      await postJson("/api/admin/alerts", { alertId });
      setExamMaintenanceRunSummaries((previous) =>
        previous.map((alert) =>
          alert.id === alertId
            ? { ...alert, acknowledged: true, created_at: alert.created_at }
            : alert,
        ),
      );
      setExamMaintenanceStatus(`Run summary ${alertId} acknowledged.`);
    } catch (error) {
      setExamMaintenanceStatus(error instanceof Error ? error.message : "Failed to acknowledge run summary.");
    }
  };

  const refreshSystemHealth = async () => {
    setSystemHealthStatus("");
    setSystemHealthBusy(true);
    try {
      const response = await fetch("/api/admin/system/health");
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        const errorMessage =
          payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Failed to refresh system health.";
        setSystemHealthStatus(errorMessage);
        return;
      }

      if (!isSystemHealthReport(payload)) {
        setSystemHealthStatus("Received unexpected system health payload.");
        return;
      }

      if (!isEnvReadinessReport(payload.envReadiness)) {
        setSystemHealthStatus("System payload missing environment readiness data.");
        return;
      }
      if (!isDbReadinessReport(payload.dbReadiness)) {
        setSystemHealthStatus("System payload missing DB readiness data.");
        return;
      }
      if (!isStripeWebhookHealthReport(payload.webhookHealth)) {
        setSystemHealthStatus("System payload missing webhook health data.");
        return;
      }

      setEnvReadiness(payload.envReadiness);
      setDbReadiness(payload.dbReadiness);
      setStripeWebhookHealth(payload.webhookHealth);
      setSystemHealthStatus(
        `Updated ${new Date().toLocaleTimeString()} | blocking: ${payload.summary.blockingIssues}, warnings: ${payload.summary.warningIssues}.`,
      );
    } catch {
      setSystemHealthStatus("Failed to refresh system health.");
    } finally {
      setSystemHealthBusy(false);
    }
  };

  const refreshEnvReadiness = async () => {
    setEnvReadinessStatus("");
    setEnvReadinessBusy(true);
    try {
      const response = await fetch("/api/admin/system/env-readiness");
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        const errorMessage =
          payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Failed to refresh environment readiness.";
        setEnvReadinessStatus(errorMessage);
        return;
      }

      if (!isEnvReadinessReport(payload)) {
        setEnvReadinessStatus("Received unexpected environment readiness payload.");
        return;
      }

      setEnvReadiness(payload);
      setEnvReadinessStatus(`Updated ${new Date().toLocaleTimeString()}.`);
    } catch {
      setEnvReadinessStatus("Failed to refresh environment readiness.");
    } finally {
      setEnvReadinessBusy(false);
    }
  };

  const refreshDbReadiness = async () => {
    setDbReadinessStatus("");
    setDbReadinessBusy(true);
    try {
      const response = await fetch("/api/admin/system/db-readiness");
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        const errorMessage =
          payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Failed to refresh DB readiness.";
        setDbReadinessStatus(errorMessage);
        return;
      }

      if (!isDbReadinessReport(payload)) {
        setDbReadinessStatus("Received unexpected DB readiness payload.");
        return;
      }

      setDbReadiness(payload);
      setDbReadinessStatus(`Updated ${new Date().toLocaleTimeString()}.`);
    } catch {
      setDbReadinessStatus("Failed to refresh DB readiness.");
    } finally {
      setDbReadinessBusy(false);
    }
  };

  const refreshStripeWebhookHealth = async () => {
    setStripeWebhookStatus("");
    setStripeWebhookBusy(true);
    try {
      const response = await fetch("/api/admin/system/stripe-webhook-health");
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        const errorMessage =
          payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Failed to refresh Stripe webhook health.";
        setStripeWebhookStatus(errorMessage);
        return;
      }

      if (!isStripeWebhookHealthReport(payload)) {
        setStripeWebhookStatus("Received unexpected Stripe webhook health payload.");
        return;
      }

      setStripeWebhookHealth(payload);
      setStripeWebhookStatus(`Updated ${new Date().toLocaleTimeString()}.`);
    } catch {
      setStripeWebhookStatus("Failed to refresh Stripe webhook health.");
    } finally {
      setStripeWebhookBusy(false);
    }
  };

  const reconcileStaleStripeWebhooks = async () => {
    setStripeWebhookStatus("");
    setStripeWebhookBusy(true);
    try {
      const payload = await postJson("/api/admin/system/stripe-webhook-health/reconcile-stale", {
        staleMinutes: stripeWebhookHealth.staleMinutes,
      });
      const updatedCount =
        typeof payload.updatedCount === "number" ? payload.updatedCount : Number(payload.updatedCount ?? 0);
      setStripeWebhookStatus(
        `Stale reconcile complete: ${Number.isFinite(updatedCount) ? updatedCount : 0} event(s) updated.`,
      );
      await refreshStripeWebhookHealth();
    } catch (error) {
      setStripeWebhookStatus(error instanceof Error ? error.message : "Failed to reconcile stale events.");
    } finally {
      setStripeWebhookBusy(false);
    }
  };

  const handleSetLanguageRuntimeConfig = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "SET_LANGUAGE_RUNTIME_CONFIG") {
      setLanguageRuntimeStatus(
        "Runtime config update blocked. Type SET_LANGUAGE_RUNTIME_CONFIG to confirm.",
      );
      return;
    }

    setLanguageRuntimeStatus("");
    setLanguageRuntimeBusy(true);
    try {
      const result = await postJson("/api/admin/billing/language-runtime", {
        phase: languageRuntimeConfig.phase,
        pricingProfile: languageRuntimeConfig.pricingProfile,
        attemptCap: languageRuntimeConfig.attemptCap,
        freeSamplerAttempts: languageRuntimeConfig.freeSamplerAttempts,
        geoTierDefault: languageRuntimeConfig.geoTierDefault,
        activeExperimentVariantId:
          languageRuntimeConfig.activeExperimentVariantId &&
          languageRuntimeConfig.activeExperimentVariantId.trim().length > 0
            ? languageRuntimeConfig.activeExperimentVariantId.trim()
            : null,
        confirmText,
      });

      setLanguageRuntimeConfig(
        parseLanguageRuntimeConfig((result as { runtimeConfig?: unknown }).runtimeConfig),
      );
      setLanguageRuntimeStatus("Language runtime config updated.");
      event.currentTarget.reset();
    } catch (error) {
      setLanguageRuntimeStatus(
        error instanceof Error ? error.message : "Failed to update language runtime config.",
      );
    } finally {
      setLanguageRuntimeBusy(false);
    }
  };

  const refreshOwnerSecurity = useCallback(async () => {
    setOwnerSecurityMessage("");
    setOwnerSecurityBusy(true);
    try {
      const response = await fetch("/api/admin/owner/security/status");
      const payload = (await response.json().catch(() => null)) as
        | OwnerSecurityStatusResponse
        | { error?: string }
        | null;
      if (!response.ok) {
        const message = payload && "error" in payload && typeof payload.error === "string"
          ? payload.error
          : "Failed to load owner security status.";
        setOwnerSecurityMessage(message);
        return;
      }
      if (!payload || !("owner" in payload) || !("security" in payload)) {
        setOwnerSecurityMessage("Received unexpected owner security payload.");
        return;
      }
      setOwnerSecurityStatus(payload);
    } catch {
      setOwnerSecurityMessage("Failed to load owner security status.");
    } finally {
      setOwnerSecurityBusy(false);
    }
  }, []);

  const refreshFactoryResetStatus = useCallback(async () => {
    setFactoryResetMessage("");
    setFactoryResetBusy(true);
    try {
      const response = await fetch("/api/admin/owner/factory-reset/status");
      const payload = (await response.json().catch(() => null)) as
        | FactoryResetStatusResponse
        | { error?: string }
        | null;
      if (!response.ok) {
        const message = payload && "error" in payload && typeof payload.error === "string"
          ? payload.error
          : "Failed to load factory reset status.";
        setFactoryResetMessage(message);
        return;
      }
      if (!payload || !("runs" in payload) || !("baselineSummary" in payload)) {
        setFactoryResetMessage("Received unexpected factory reset payload.");
        return;
      }
      setFactoryResetStatus(payload);
    } catch {
      setFactoryResetMessage("Failed to load factory reset status.");
    } finally {
      setFactoryResetBusy(false);
    }
  }, []);

  const refreshTransferPlaybooks = useCallback(async () => {
    setTransferMessage("");
    setTransferBusy(true);
    try {
      const response = await fetch("/api/admin/owner/transfer/playbook");
      const payload = (await response.json().catch(() => null)) as
        | { playbooks?: OwnershipTransferPlaybook[]; error?: string }
        | null;
      if (!response.ok) {
        setTransferMessage(payload?.error ?? "Failed to load ownership transfer playbooks.");
        return;
      }
      setTransferPlaybooks(payload?.playbooks ?? []);
    } catch {
      setTransferMessage("Failed to load ownership transfer playbooks.");
    } finally {
      setTransferBusy(false);
    }
  }, []);

  const handleProvisionOwnerTotp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/security/totp/provision", {
        label: String(form.get("label") ?? "").trim() || undefined,
        confirmText: "PROVISION_OWNER_TOTP",
      })) as {
        factorId: string;
        secret: string;
        otpauthUri: string;
      };
      setOwnerTotpProvision({
        factorId: result.factorId,
        secret: result.secret,
        otpauthUri: result.otpauthUri,
      });
      setOwnerSecurityMessage("Authenticator factor provisioned. Verify a code to activate step-up.");
      await refreshOwnerSecurity();
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to provision authenticator factor.");
    }
  };

  const handleVerifyOwnerTotp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/security/totp/verify", {
        code: form.get("code"),
        scope: form.get("scope"),
      })) as { scope: string; expiresAt: string };
      setOwnerSecurityMessage(`Owner step-up verified via authenticator for ${result.scope} until ${formatDateTime(result.expiresAt)}.`);
      event.currentTarget.reset();
      await refreshOwnerSecurity();
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to verify authenticator code.");
    }
  };

  const handleSetSecondaryOwnerEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/security/email-factor", {
        email: form.get("email"),
        confirmText: "SET_OWNER_SECONDARY_EMAIL",
      })) as { email: string };
      setOwnerSecurityMessage(`Secondary owner security email set to ${result.email}.`);
      await refreshOwnerSecurity();
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to set secondary owner email.");
    }
  };

  const handleSendOwnerEmailChallenge = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/security/email/challenge", {
        scope: form.get("scope"),
        confirmText: "SEND_OWNER_EMAIL_CHALLENGE",
      })) as {
        challengeId: string;
        scope: "owner_console" | "factory_reset" | "ownership_transfer" | "security_admin";
        expiresAt: string;
        deliveryMode: string;
        debugCode?: string | null;
      };
      setOwnerEmailChallenge({
        challengeId: result.challengeId,
        scope: result.scope,
        expiresAt: result.expiresAt,
        debugCode: result.debugCode ?? null,
      });
      setOwnerSecurityMessage(`Email challenge sent (${result.deliveryMode}) for scope ${result.scope}.`);
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to send owner email challenge.");
    }
  };

  const handleVerifyOwnerEmailChallenge = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const challengeId = String(form.get("challengeId") ?? ownerEmailChallenge?.challengeId ?? "");
    if (!challengeId) {
      setOwnerSecurityMessage("Email challenge ID is required.");
      return;
    }
    try {
      const result = (await postJson("/api/admin/owner/security/email/verify", {
        challengeId,
        code: form.get("code"),
        scope: form.get("scope") ?? ownerEmailChallenge?.scope ?? "owner_console",
      })) as { scope: string; expiresAt: string };
      setOwnerSecurityMessage(`Owner step-up verified via secondary email for ${result.scope} until ${formatDateTime(result.expiresAt)}.`);
      event.currentTarget.reset();
      setOwnerEmailChallenge(null);
      await refreshOwnerSecurity();
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to verify owner email challenge.");
    }
  };

  const handleRegisterOwnerYubikey = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/security/yubikey/register", {
        otp: form.get("otp"),
        label: String(form.get("label") ?? "").trim() || undefined,
        confirmText: "REGISTER_YUBIKEY_FACTOR",
      })) as { publicId: string };
      setOwnerSecurityMessage(`YubiKey factor registered (${result.publicId}).`);
      event.currentTarget.reset();
      await refreshOwnerSecurity();
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to register YubiKey factor.");
    }
  };

  const handleVerifyOwnerYubikey = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/security/yubikey/verify", {
        otp: form.get("otp"),
        scope: form.get("scope"),
      })) as { scope: string; expiresAt: string };
      setOwnerSecurityMessage(`Owner step-up verified via YubiKey for ${result.scope} until ${formatDateTime(result.expiresAt)}.`);
      event.currentTarget.reset();
      await refreshOwnerSecurity();
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to verify YubiKey OTP.");
    }
  };

  const handleRevokeOwnerStepUp = async () => {
    try {
      await postJson("/api/admin/owner/security/step-up/revoke", {});
      setOwnerSecurityMessage("Owner step-up sessions revoked.");
      await refreshOwnerSecurity();
    } catch (error) {
      setOwnerSecurityMessage(error instanceof Error ? error.message : "Failed to revoke owner step-up session.");
    }
  };

  const handleCaptureModuleBaseline = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/baseline/capture", {
        confirmText: "CAPTURE_MODULE_BASELINE",
        baselineVersion: String(form.get("baselineVersion") ?? "").trim() || undefined,
      })) as {
        summary?: {
          baselineVersion: string;
          totalModules: number;
          modulesRequiringBaseline: number;
        };
      };
      setFactoryResetMessage(
        result.summary
          ? `Baseline captured (${result.summary.baselineVersion}) across ${result.summary.totalModules} modules.`
          : "Baseline captured.",
      );
      await refreshFactoryResetStatus();
    } catch (error) {
      setFactoryResetMessage(error instanceof Error ? error.message : "Failed to capture module baseline.");
    }
  };

  const handleRunFactoryReset = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "FACTORY_RESET_APP") {
      setFactoryResetMessage("Factory reset blocked. Type FACTORY_RESET_APP to confirm.");
      return;
    }
    try {
      const result = (await postJson("/api/admin/owner/factory-reset/run", {
        mode: form.get("mode"),
        scope: form.get("scope"),
        reason: form.get("reason"),
        resetPassword: form.get("resetPassword"),
        includeModuleBaselineRefresh: form.get("includeModuleBaselineRefresh") === "on",
        promoteBetaUsersToLive: form.get("promoteBetaUsersToLive") === "on",
        userChunkSize: Number(form.get("userChunkSize")),
        confirmText,
      })) as {
        result?: {
          runId: string;
          mode: string;
          targetUserCount: number;
          rowsScanned: number;
          rowsDeleted: number;
        };
      };
      const run = result.result;
      if (run) {
        setFactoryResetMessage(
          `Factory reset ${run.mode} completed (run ${run.runId}). Target users: ${run.targetUserCount}, scanned: ${run.rowsScanned}, deleted: ${run.rowsDeleted}.`,
        );
      } else {
        setFactoryResetMessage("Factory reset request completed.");
      }
      await refreshFactoryResetStatus();
    } catch (error) {
      setFactoryResetMessage(error instanceof Error ? error.message : "Failed to execute factory reset.");
    }
  };

  const handleCreateTransferPlaybook = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = (await postJson("/api/admin/owner/transfer/playbook", {
        candidateOwnerUserId: form.get("candidateOwnerUserId"),
        notes: form.get("notes"),
        confirmText: "PREPARE_OWNERSHIP_TRANSFER",
      })) as { playbook?: { id: string; candidate_owner_user_id: string } };
      if (result.playbook) {
        setTransferMessage(
          `Ownership transfer playbook created (${result.playbook.id}) for candidate ${formatShortId(result.playbook.candidate_owner_user_id)}.`,
        );
      } else {
        setTransferMessage("Ownership transfer playbook created.");
      }
      event.currentTarget.reset();
      await refreshTransferPlaybooks();
    } catch (error) {
      setTransferMessage(error instanceof Error ? error.message : "Failed to create ownership transfer playbook.");
    }
  };

  const handleExecuteTransferPlaybook = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "EXECUTE_OWNERSHIP_TRANSFER") {
      setTransferMessage("Ownership transfer blocked. Type EXECUTE_OWNERSHIP_TRANSFER to confirm.");
      return;
    }
    try {
      const result = (await postJson("/api/admin/owner/transfer/execute", {
        playbookId: form.get("playbookId"),
        mode: form.get("mode"),
        transferPassword: form.get("transferPassword"),
        confirmText,
      })) as { result?: { playbookId: string; executionMode: string } };
      setTransferMessage(
        result.result
          ? `Ownership transfer executed (${result.result.playbookId}) in ${result.result.executionMode} mode.`
          : "Ownership transfer executed.",
      );
      event.currentTarget.reset();
      await refreshTransferPlaybooks();
      await refreshOwnerSecurity();
    } catch (error) {
      setTransferMessage(error instanceof Error ? error.message : "Failed to execute ownership transfer.");
    }
  };

  useEffect(() => {
    void refreshLanguagePriceMap();
    void refreshLanguageRuntimeConfig();
    void refreshLanguageUnlockPricing();
    void refreshLanguagePricingAnalytics();
    void refreshOwnerSecurity();
    void refreshFactoryResetStatus();
    void refreshTransferPlaybooks();
  }, [
    refreshLanguagePriceMap,
    refreshLanguageRuntimeConfig,
    refreshLanguageUnlockPricing,
    refreshLanguagePricingAnalytics,
    refreshOwnerSecurity,
    refreshFactoryResetStatus,
    refreshTransferPlaybooks,
  ]);

  return (
    <div className="space-y-6">
      <div className="ui-soft-card rounded-2xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
        Active support tickets: {activeTicketCount}
      </div>
      {status ? (
        <div className="rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm">
          {status}
        </div>
      ) : null}
      <ConsoleAiChatbox />

        <div
          className={`mb-3 rounded-md border px-3 py-2 text-sm ${
            systemBlockingIssues > 0
              ? "border-rose-300 bg-rose-50 text-rose-900"
              : systemWarningIssues > 0
                ? "border-amber-300 bg-amber-50 text-amber-900"
                : "border-emerald-300 bg-emerald-50 text-emerald-900"
          }`}
        >
          {systemBlockingIssues > 0
            ? `System has ${systemBlockingIssues} blocking issue(s).`
            : systemWarningIssues > 0
              ? `System has ${systemWarningIssues} warning(s).`
              : "System health is currently clear."}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshSystemHealth()}
            disabled={systemHealthBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm disabled:opacity-60"
          >
            {systemHealthBusy ? "Refreshing..." : "Refresh All Health Checks"}
          </button>
          <a
            href="/api/admin/system/health"
            target="_blank"
            rel="noreferrer"
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            Open System JSON
          </a>
        </div>

        {systemHealthStatus ? <p className="mb-3 text-sm text-zinc-700">{systemHealthStatus}</p> : null}

        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Blocking</p>
            <p className="mt-1 font-semibold">{systemBlockingIssues}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Warnings</p>
            <p className="mt-1 font-semibold">{systemWarningIssues}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Env Checks</p>
            <p className="mt-1 font-semibold">
              {envReadiness.totals.pass}/{envReadiness.totals.total} pass
            </p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">DB Tables</p>
            <p className="mt-1 font-semibold">
              {dbReadiness.totals.present}/{dbReadiness.totals.total} present
            </p>
          </div>
        </div>

        {runbookHints.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">No runbook actions required right now.</p>
        ) : (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Runbook Hints</p>
            {runbookHints.map((hint) => (
              <div
                key={hint.id}
                className={`rounded-2xl border p-3 text-xs ${
                  hint.severity === "critical" ? "border-rose-200 bg-rose-50" : "border-amber-200 bg-amber-50"
                }`}
              >
                <p className="font-semibold">
                  {hint.title} | {hint.severity}
                </p>
                <p className="mt-1 text-zinc-700">{hint.description}</p>
                <div className="mt-2 space-y-1">
                  {hint.commands.map((command) => (
                    <code key={command} className="block rounded border border-border bg-white px-2 py-1 text-[11px]">
                      {command}
                    </code>
                  ))}
                </div>
                {hint.href && hint.hrefLabel ? (
                  <div className="mt-2">
                    <a
                      href={hint.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ui-soft-button ui-focus-ring rounded border border-border bg-surface px-2 py-1 text-[11px]"
                    >
                      {hint.hrefLabel}
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Section>
      )}

      {selectedSectionId === "env-checks" && (<Section title="Environment Readiness" description="Verifies that all required configuration values (such as API keys and connection strings) are correctly set on the server. Missing settings quietly disable features." tip="Warn means the feature still runs in a reduced mode. Fail means the feature is completely off until the setting is added. A developer can add these in the .env file and redeploy.">
        <div
          className={`mb-3 rounded-md border px-3 py-2 text-sm ${
            envReadiness.totals.fail > 0
              ? "border-rose-300 bg-rose-50 text-rose-900"
              : envReadiness.totals.warn > 0
                ? "border-amber-300 bg-amber-50 text-amber-900"
                : "border-emerald-300 bg-emerald-50 text-emerald-900"
          }`}
        >
          {envReadiness.totals.fail > 0
            ? `Environment checks found ${envReadiness.totals.fail} blocking issue(s).`
            : envReadiness.totals.warn > 0
              ? `Environment checks found ${envReadiness.totals.warn} warning(s).`
              : "All required environment checks are passing."}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshEnvReadiness()}
            disabled={envReadinessBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm disabled:opacity-60"
          >
            {envReadinessBusy ? "Refreshing..." : "Refresh Environment"}
          </button>
          <a
            href="/api/admin/system/env-readiness"
            target="_blank"
            rel="noreferrer"
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            Open Env JSON
          </a>
        </div>

        {envReadinessStatus ? <p className="mb-3 text-sm text-zinc-700">{envReadinessStatus}</p> : null}

        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Pass</p>
            <p className="mt-1 font-semibold">{envReadiness.totals.pass}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Warn</p>
            <p className="mt-1 font-semibold">{envReadiness.totals.warn}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Fail</p>
            <p className="mt-1 font-semibold">{envReadiness.totals.fail}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Generated</p>
            <p className="mt-1 font-semibold">{formatDateTime(envReadiness.generatedAt)}</p>
          </div>
        </div>

        {envReadinessIssues.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">No environment warnings or failures.</p>
        ) : (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Environment Issues</p>
            {envReadinessIssues.slice(0, 10).map((check) => (
              <div key={check.id} className="rounded-2xl border border-border p-3 text-xs">
                <p className="font-semibold">
                  {check.label} | {check.status}
                </p>
                <p className="mt-1 text-zinc-600">{check.detail}</p>
              </div>
            ))}
          </div>
        )}
      </Section>
      )}

      {selectedSectionId === "stripe-webhooks" && (<Section title="Stripe Webhook Health" description="Monitors whether payment notifications from Stripe are arriving and being processed correctly. This ensures subscriptions, upgrades, and cancellations take effect promptly." tip="Failed events mean a billing action may not have reached the user account. Use Mark Stale as Failed to clean up stuck events, then replay from the Stripe Dashboard if needed.">
        <div
          className={`mb-3 rounded-md border px-3 py-2 text-sm ${
            hasStripeWebhookIssues
              ? "border-amber-300 bg-amber-50 text-amber-900"
              : "border-emerald-300 bg-emerald-50 text-emerald-900"
          }`}
        >
          {stripeWebhookHealth.detail}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshStripeWebhookHealth()}
            disabled={stripeWebhookBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm disabled:opacity-60"
          >
            {stripeWebhookBusy ? "Refreshing..." : "Refresh Webhook Health"}
          </button>
          <a
            href="/api/admin/system/stripe-webhook-health"
            target="_blank"
            rel="noreferrer"
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            Open Health JSON
          </a>
          <button
            type="button"
            onClick={() => void reconcileStaleStripeWebhooks()}
            disabled={stripeWebhookBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm disabled:opacity-60"
          >
            {stripeWebhookBusy ? "Running..." : "Mark Stale as Failed"}
          </button>
        </div>

        {stripeWebhookStatus ? <p className="mb-3 text-sm text-zinc-700">{stripeWebhookStatus}</p> : null}

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Window</p>
            <p className="mt-1 font-semibold">{stripeWebhookHealth.windowHours}h</p>
            <p className="mt-1 text-xs text-zinc-500">Stale threshold: {stripeWebhookHealth.staleMinutes}m</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Totals</p>
            <p className="mt-1 text-zinc-700">
              received {stripeWebhookHealth.totals.received} | processed {stripeWebhookHealth.totals.processed}
            </p>
            <p className="mt-1 text-zinc-700">
              failed {stripeWebhookHealth.totals.failed} | stale {stripeWebhookHealth.totals.staleProcessing}
            </p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Latest Processed</p>
            <p className="mt-1 font-semibold">{formatDateTime(stripeWebhookHealth.latestProcessedAt)}</p>
            <p className="mt-1 text-xs text-zinc-500">
              retries in window: {stripeWebhookHealth.totals.retries}
            </p>
          </div>
        </div>

        {!stripeWebhookHealth.trackingEnabled ? (
          <p className="mt-4 text-sm text-zinc-700">
            Tracking is disabled because `stripe_webhook_events` is unavailable via the Supabase API. Confirm the
            migration was applied and the API schema cache has been refreshed before relying on webhook metrics.
          </p>
        ) : null}

        {stripeWebhookHealth.trackingEnabled && stripeWebhookHealth.failedByEventType.length > 0 ? (
          <div className="mt-4 rounded-2xl border border-border p-3 text-xs">
            <p className="font-semibold">Failed Events by Type (window)</p>
            <p className="mt-1 text-zinc-600">
              {stripeWebhookHealth.failedByEventType
                .slice(0, 6)
                .map((entry) => `${entry.eventType}: ${entry.count}`)
                .join(" | ")}
            </p>
          </div>
        ) : null}

        {stripeWebhookHealth.trackingEnabled && stripeWebhookHealth.recentFailed.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">No failed webhook events in the selected window.</p>
        ) : stripeWebhookHealth.trackingEnabled ? (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Recent Failed Events</p>
            {stripeWebhookHealth.recentFailed.map((eventRow) => (
              <div key={eventRow.eventId} className="rounded-2xl border border-border p-3 text-xs">
                <p className="font-semibold">
                  {eventRow.eventType} | attempts: {eventRow.attemptCount}
                </p>
                <p className="mt-1 text-zinc-500">{eventRow.eventId}</p>
                <p className="mt-1 text-zinc-500">Updated: {formatDateTime(eventRow.updatedAt)}</p>
                {eventRow.lastError ? <p className="mt-1 text-rose-700">Error: {eventRow.lastError}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </Section>
      )}

      {selectedSectionId === "db-status" && (<Section title="Database Readiness" description="Checks that the database has all the tables the platform needs. A missing table usually means a database update needs to be applied." tip="If tables are missing, ask your developer to run 'npx supabase db push'. This applies any pending database structure updates without affecting existing data.">
        <div
          className={`mb-3 rounded-md border px-3 py-2 text-sm ${
            dbReadiness.healthy
              ? "border-emerald-300 bg-emerald-50 text-emerald-900"
              : "border-amber-300 bg-amber-50 text-amber-900"
          }`}
        >
          {dbReadiness.healthy
            ? "All required database tables are reachable via Supabase API."
            : `Database checks require attention: ${dbReadiness.totals.missing} missing, ${dbReadiness.totals.error} error.`}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshDbReadiness()}
            disabled={dbReadinessBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm disabled:opacity-60"
          >
            {dbReadinessBusy ? "Refreshing..." : "Refresh DB Readiness"}
          </button>
          <a
            href="/api/admin/system/db-readiness"
            target="_blank"
            rel="noreferrer"
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            Open DB JSON
          </a>
        </div>

        {dbReadinessStatus ? <p className="mb-3 text-sm text-zinc-700">{dbReadinessStatus}</p> : null}

        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Present</p>
            <p className="mt-1 font-semibold">{dbReadiness.totals.present}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Missing</p>
            <p className="mt-1 font-semibold">{dbReadiness.totals.missing}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Errors</p>
            <p className="mt-1 font-semibold">{dbReadiness.totals.error}</p>
          </div>
          <div className="rounded-2xl border border-border p-3 text-sm">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Generated</p>
            <p className="mt-1 font-semibold">{formatDateTime(dbReadiness.generatedAt)}</p>
          </div>
        </div>

        {dbReadinessIssues.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">All required tables are present.</p>
        ) : (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Table Issues</p>
            {dbReadinessIssues.slice(0, 10).map((issue) => (
              <div key={issue.table} className="rounded-2xl border border-border p-3 text-xs">
                <p className="font-semibold">
                  {issue.table} | {issue.status}
                </p>
                <p className="mt-1 text-zinc-600">{issue.detail}</p>
              </div>
            ))}
          </div>
        )}
      </Section>
      )}

      {selectedSectionId === "create-account" && (<Section title="Create Account" description="Manually create a new user account — useful for setting up admin access, test accounts, or assisting a parent who cannot complete registration on their own." tip="Only grant Admin access if this person truly needs to manage platform settings. Granting admin to the wrong person gives full access to this console.">
        <form onSubmit={handleCreateUser} className="grid gap-3 md:grid-cols-2">
          <input name="email" type="email" placeholder="email@example.com" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="password" type="password" placeholder="Temporary password" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="displayName" placeholder="Display name (optional)" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2" />
          <label className="flex flex-col gap-1 text-xs text-zinc-600 md:col-span-2">
            <span className="font-semibold text-zinc-700">Initial data mode</span>
            <select
              name="dataMode"
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
              defaultValue="live"
            >
              <option value="live">live</option>
              <option value="beta">beta</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="isAdmin" type="checkbox" />
            Grant admin access
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="isOwner" type="checkbox" />
            Grant owner role
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="isParent" type="checkbox" />
            Grant parent role
          </label>
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md bg-accent px-4 py-2 text-sm text-white">Create User</button>
        </form>
      </Section>
      )}

      {selectedSectionId === "approvals" && (<Section title="Approvals" description="Some sensitive actions (like deleting a user or issuing a refund) require a pre-approved request first. Create and approve the request here, then use its ID when performing the action." tip="The approval ID links the action to the approval record. Always create and approve the request before attempting the action — otherwise it will be blocked by the system.">
        {approvalStatus ? <p className="mb-3 text-sm text-zinc-600">{approvalStatus}</p> : null}
        <form onSubmit={handleCreateApprovalRequest} className="mb-4 grid gap-3 md:grid-cols-2">
          <select name="actionType" aria-label="Approval action type" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="user_delete">User delete</option>
            <option value="billing_refund">Billing refund</option>
            <option value="billing_set_price">Set billing price</option>
          </select>
          <input
            name="reason"
            placeholder="Why this action is needed"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring w-fit rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">
            Create Approval Request
          </button>
        </form>

        <form onSubmit={handleUpdateApprovalStatus} className="grid gap-3 md:grid-cols-3">
          <input name="approvalId" placeholder="Approval UUID" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <select name="status" aria-label="Approval status" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
          </select>
          <input name="note" placeholder="Optional note" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" />
          <button type="submit" className="ui-soft-button ui-focus-ring w-fit rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">
            Update Approval Status
          </button>
        </form>
      </Section>
      )}

      {selectedSectionId === "exam-maintenance" && (<Section title="Exam Maintenance" description="Automatically find and fix common errors in learners' exam records — such as inconsistent scores or stale attempt data. Always run a Dry Run first to review what would change." tip="The Dry Run shows exactly what would be affected without changing anything. Only click Run Apply once you are satisfied with the dry run results.">
        <div className={`mb-3 rounded-md border px-3 py-2 text-sm ${openExamMaintenanceAlerts === 0 && unacknowledgedRunSummaries === 0 ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-amber-300 bg-amber-50 text-amber-900"}`}>
          {openExamMaintenanceAlerts === 0 && unacknowledgedRunSummaries === 0
            ? "No open alerts and no unacknowledged run summaries — everything looks clean."
            : `Open exam-maintenance failure alerts: ${openExamMaintenanceAlerts} | unacknowledged run summaries: ${unacknowledgedRunSummaries}`}
        </div>
        {examMaintenanceStatus ? (
          <p className="mb-3 text-sm text-zinc-700">{examMaintenanceStatus}</p>
        ) : null}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void runExamMaintenance(true)}
            disabled={examMaintenanceBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm disabled:opacity-60"
          >
            {examMaintenanceBusy ? "Running..." : "Run Auto-Resolve (Dry Run)"}
          </button>
          <button
            type="button"
            onClick={() => void runExamMaintenance(false)}
            disabled={examMaintenanceBusy}
            className="ui-soft-button ui-focus-ring rounded-md bg-accent px-3 py-2 text-sm text-white disabled:opacity-60"
          >
            {examMaintenanceBusy ? "Running..." : "Run Auto-Resolve (Apply)"}
          </button>
        </div>

        <div className="space-y-2">
          {examMaintenanceAlerts.length === 0 ? (
            <p className="text-sm text-zinc-500">No recent exam-maintenance failure alerts.</p>
          ) : (
            examMaintenanceAlerts.slice(0, 5).map((alert) => (
              <div key={alert.id} className="rounded-2xl border border-border p-3 text-sm">
                <p className="font-medium">
                  [{alert.severity.toUpperCase()}] {alert.message}
                </p>
                <p className="text-xs text-zinc-500">
                  {new Date(alert.created_at).toLocaleString()} | acknowledged: {alert.acknowledged ? "yes" : "no"}
                </p>
                {!alert.acknowledged ? (
                  <button
                    type="button"
                    onClick={() => void acknowledgeExamMaintenanceAlert(alert.id)}
                    className="ui-soft-button ui-focus-ring mt-2 rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                  >
                    Acknowledge
                  </button>
                ) : null}
              </div>
            ))
          )}
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm font-semibold">Workflow Run Summaries</p>
          {examMaintenanceRunSummaries.length === 0 ? (
            <p className="text-sm text-zinc-500">No workflow run summaries yet.</p>
          ) : (
            examMaintenanceRunSummaries.slice(0, 8).map((summaryAlert) => {
              const parsed = parseRunSummaryFromMetadata(summaryAlert.metadata);
              return (
                <div key={summaryAlert.id} className="rounded-2xl border border-border p-3 text-xs">
                  <p className="font-semibold">
                    [{summaryAlert.severity.toUpperCase()}] {summaryAlert.message}
                  </p>
                  <p className="mt-1 text-zinc-500">
                    {new Date(summaryAlert.created_at).toLocaleString()} | acknowledged:{" "}
                    {summaryAlert.acknowledged ? "yes" : "no"}
                  </p>
                  <p className="mt-1 text-zinc-500">
                    Mode: {parsed.dryRun === undefined ? "n/a" : parsed.dryRun ? "dry-run" : "apply"} | eligible:{" "}
                    {parsed.totals.eligible} | updated: {parsed.totals.updated} | errored users:{" "}
                    {parsed.totals.erroredUsers}
                  </p>
                  {(parsed.workflow.workflow || parsed.workflow.runNumber || parsed.workflow.actor) ? (
                    <p className="mt-1 text-zinc-500">
                      Workflow: {parsed.workflow.workflow ?? "n/a"}
                      {parsed.workflow.runNumber ? ` #${parsed.workflow.runNumber}` : ""}
                      {parsed.workflow.actor ? ` | actor: ${parsed.workflow.actor}` : ""}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topEligibleUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top eligible users:{" "}
                      {parsed.diagnostics.topEligibleUsers
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.eligibleCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topUpdatedUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top updated users:{" "}
                      {parsed.diagnostics.topUpdatedUsers
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.updatedCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topErroredUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top errored users:{" "}
                      {parsed.diagnostics.topErroredUsers
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.error})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {parsed.runUrl ? (
                      <a
                        href={parsed.runUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Workflow Run
                      </a>
                    ) : null}
                    {parsed.runUrl && parsed.artifactName ? (
                      <a
                        href={`${parsed.runUrl}#artifacts`}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Artifacts
                      </a>
                    ) : null}
                    {!summaryAlert.acknowledged ? (
                      <button
                        type="button"
                        onClick={() => void acknowledgeExamMaintenanceRunSummary(summaryAlert.id)}
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Acknowledge
                      </button>
                    ) : null}
                  </div>
                  {parsed.artifactHint ? <p className="mt-1 text-zinc-500">{parsed.artifactHint}</p> : null}
                </div>
              );
            })
          )}
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm font-semibold">Recent Auto-Resolve Runs</p>
          {examMaintenanceRuns.length === 0 ? (
            <p className="text-sm text-zinc-500">No run history yet.</p>
          ) : (
            examMaintenanceRuns.slice(0, 6).map((run) => {
              const parsed = parseRunSummaryFromMetadata(run.metadata);
              return (
                <div key={run.id} className="rounded-2xl border border-border p-3 text-xs">
                  <p className="font-semibold">
                    {parsed.dryRun ? "Dry run" : "Apply run"} | eligible: {parsed.totals.eligible} | updated:{" "}
                    {parsed.totals.updated} | errored users: {parsed.totals.erroredUsers}
                  </p>
                  <p className="text-zinc-500">{new Date(run.created_at).toLocaleString()}</p>
                  {(parsed.workflow.workflow || parsed.workflow.runNumber || parsed.workflow.actor) ? (
                    <p className="mt-1 text-zinc-500">
                      Workflow: {parsed.workflow.workflow ?? "n/a"}
                      {parsed.workflow.runNumber ? ` #${parsed.workflow.runNumber}` : ""}
                      {parsed.workflow.actor ? ` | actor: ${parsed.workflow.actor}` : ""}
                    </p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {parsed.runUrl ? (
                      <a
                        href={parsed.runUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Workflow Run
                      </a>
                    ) : null}
                    {parsed.runUrl && parsed.artifactName ? (
                      <a
                        href={`${parsed.runUrl}#artifacts`}
                        target="_blank"
                        rel="noreferrer"
                        className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                      >
                        Open Artifacts
                      </a>
                    ) : null}
                  </div>
                  {parsed.diagnostics.topEligibleUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top eligible users:{" "}
                      {parsed.diagnostics.topEligibleUsers
                        .slice(0, 2)
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.eligibleCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topUpdatedUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Top updated users:{" "}
                      {parsed.diagnostics.topUpdatedUsers
                        .slice(0, 2)
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.updatedCount})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                  {parsed.diagnostics.topErroredUsers.length > 0 ? (
                    <p className="mt-1 text-zinc-500">
                      Sample user errors:{" "}
                      {parsed.diagnostics.topErroredUsers
                        .slice(0, 2)
                        .map((entry) => `${formatUserId(entry.userId)} (${entry.error})`)
                        .join(" | ")}
                    </p>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </Section>
      )}

      {selectedSectionId === "role-management" && (<Section title="Role Management" description="Change what a user is allowed to do: grant or remove admin access and parent-portal access for any existing account." tip="Type UPDATE_ROLES exactly in the confirmation box to prevent accidental changes. Be careful not to remove your own admin access.">
        <form onSubmit={handleUpdateRoles} className="grid gap-3 md:grid-cols-2">
          <input name="userId" placeholder="User UUID" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2" required />
          <label className="flex items-center gap-2 text-sm">
            <input name="setIsAdmin" type="checkbox" />
            Set admin role
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="setIsOwner" type="checkbox" />
            Set owner role
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="setIsParent" type="checkbox" />
            Set parent role
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600 md:col-span-2">
            <span className="font-semibold text-zinc-700">Data mode</span>
            <select
              name="setDataMode"
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
              defaultValue="live"
            >
              <option value="live">live</option>
              <option value="beta">beta</option>
            </select>
          </label>
          <input
            name="confirmText"
            placeholder="Type UPDATE_ROLES"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <button type="submit" className="ui-soft-button w-fit ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm">
            Apply Role Updates
          </button>
        </form>
      </Section>
      )}

      <Section title="Owner Security (MFA + Step-Up)">
        <div className="mb-3 rounded-md border border-indigo-300 bg-indigo-50 px-3 py-2 text-sm text-indigo-900">
          Password sign-in is required first; owner-sensitive actions require step-up via authenticator, secondary email, or YubiKey OTP.
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshOwnerSecurity()}
            disabled={ownerSecurityBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm disabled:opacity-60"
          >
            {ownerSecurityBusy ? "Refreshing..." : "Refresh Owner Security"}
          </button>
          <button
            type="button"
            onClick={() => void handleRevokeOwnerStepUp()}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-3 py-2 text-sm"
          >
            Revoke Step-Up Sessions
          </button>
          <a
            href="/api/admin/owner/security/status"
            target="_blank"
            rel="noreferrer"
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            Open Owner Security JSON
          </a>
        </div>

        {ownerSecurityMessage ? <p className="mb-3 text-sm text-zinc-700">{ownerSecurityMessage}</p> : null}

        {ownerSecurityStatus ? (
          <div className="mb-4 grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Owner</p>
              <p className="mt-1 font-semibold text-zinc-900">{ownerSecurityStatus.owner.email ?? "unknown"}</p>
              <p className="mt-1 text-zinc-600">mode: {ownerSecurityStatus.owner.dataMode}</p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Configured Factors</p>
              <p className="mt-1 font-semibold text-zinc-900">{ownerSecurityStatus.security.factors.length}</p>
              <p className="mt-1 text-zinc-600">
                {ownerSecurityStatus.security.ownerConfigured ? "ready" : "not verified"}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Active Step-Up</p>
              <p className="mt-1 font-semibold text-zinc-900">
                {ownerSecurityStatus.security.activeStepUpSessions.length}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Recent Events</p>
              <p className="mt-1 font-semibold text-zinc-900">{ownerSecurityStatus.security.recentEvents.length}</p>
            </div>
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <form onSubmit={handleSetSecondaryOwnerEmail} className="space-y-2 rounded-2xl border border-border p-3">
            <p className="text-sm font-semibold">Secondary Email Factor</p>
            <input
              name="email"
              type="email"
              placeholder="owner-security@example.com"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
            <button
              type="submit"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              Set Secondary Email
            </button>
          </form>

          <form onSubmit={handleProvisionOwnerTotp} className="space-y-2 rounded-2xl border border-border p-3">
            <p className="text-sm font-semibold">Authenticator (TOTP)</p>
            <input
              name="label"
              placeholder="Authenticator App"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              Provision Authenticator
            </button>
            {ownerTotpProvision ? (
              <div className="rounded-md border border-border bg-surface-muted p-2 text-xs text-zinc-700">
                <p>Secret: <code>{ownerTotpProvision.secret}</code></p>
                <p className="mt-1">URI:</p>
                <code className="block overflow-x-auto">{ownerTotpProvision.otpauthUri}</code>
              </div>
            ) : null}
          </form>

          <form onSubmit={handleVerifyOwnerTotp} className="space-y-2 rounded-2xl border border-border p-3">
            <p className="text-sm font-semibold">Verify Authenticator Step-Up</p>
            <input
              name="code"
              placeholder="123456"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
            <select name="scope" className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm">
              <option value="owner_console">owner_console</option>
              <option value="factory_reset">factory_reset</option>
              <option value="ownership_transfer">ownership_transfer</option>
              <option value="security_admin">security_admin</option>
            </select>
            <button
              type="submit"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              Verify Authenticator
            </button>
          </form>

          <form onSubmit={handleSendOwnerEmailChallenge} className="space-y-2 rounded-2xl border border-border p-3">
            <p className="text-sm font-semibold">Email Step-Up Challenge</p>
            <select name="scope" className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm">
              <option value="owner_console">owner_console</option>
              <option value="factory_reset">factory_reset</option>
              <option value="ownership_transfer">ownership_transfer</option>
              <option value="security_admin">security_admin</option>
            </select>
            <button
              type="submit"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              Send Email Challenge
            </button>
            {ownerEmailChallenge?.debugCode ? (
              <p className="text-xs text-zinc-600">Debug code (non-production): <code>{ownerEmailChallenge.debugCode}</code></p>
            ) : null}
          </form>

          <form onSubmit={handleVerifyOwnerEmailChallenge} className="space-y-2 rounded-2xl border border-border p-3">
            <p className="text-sm font-semibold">Verify Email Challenge</p>
            <input
              name="challengeId"
              defaultValue={ownerEmailChallenge?.challengeId ?? ""}
              placeholder="Challenge UUID"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
            <input
              name="code"
              placeholder="123456"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
            <select
              name="scope"
              defaultValue={ownerEmailChallenge?.scope ?? "owner_console"}
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <option value="owner_console">owner_console</option>
              <option value="factory_reset">factory_reset</option>
              <option value="ownership_transfer">ownership_transfer</option>
              <option value="security_admin">security_admin</option>
            </select>
            <button
              type="submit"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              Verify Email Challenge
            </button>
          </form>

          <form onSubmit={handleRegisterOwnerYubikey} className="space-y-2 rounded-2xl border border-border p-3">
            <p className="text-sm font-semibold">Register YubiKey OTP</p>
            <input
              name="label"
              placeholder="YubiKey OTP"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
            <input
              name="otp"
              placeholder="Paste YubiKey OTP"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
            <button
              type="submit"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              Register YubiKey
            </button>
          </form>

          <form onSubmit={handleVerifyOwnerYubikey} className="space-y-2 rounded-2xl border border-border p-3">
            <p className="text-sm font-semibold">Verify YubiKey Step-Up</p>
            <input
              name="otp"
              placeholder="Paste YubiKey OTP"
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
            <select name="scope" className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm">
              <option value="owner_console">owner_console</option>
              <option value="factory_reset">factory_reset</option>
              <option value="ownership_transfer">ownership_transfer</option>
              <option value="security_admin">security_admin</option>
            </select>
            <button
              type="submit"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              Verify YubiKey
            </button>
          </form>
        </div>

        {ownerSecurityStatus && ownerSecurityStatus.security.factors.length > 0 ? (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Configured Factors</p>
            {ownerSecurityStatus.security.factors.map((factor) => (
              <div key={factor.id} className="rounded-2xl border border-border p-3 text-xs">
                <p className="font-semibold">
                  {factor.factorType} | {factor.label ?? "n/a"}
                </p>
                <p className="mt-1 text-zinc-600">
                  {factor.emailAddress ? `email: ${factor.emailAddress}` : ""}
                  {factor.yubikeyPublicId ? `publicId: ${factor.yubikeyPublicId}` : ""}
                </p>
                <p className="mt-1 text-zinc-500">
                  verified: {formatDateTime(factor.verifiedAt)} | last used: {formatDateTime(factor.lastUsedAt)}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </Section>

      <Section title="Factory Reset + Module Baselines">
        {factoryResetMessage ? <p className="mb-3 text-sm text-zinc-700">{factoryResetMessage}</p> : null}

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshFactoryResetStatus()}
            disabled={factoryResetBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm disabled:opacity-60"
          >
            {factoryResetBusy ? "Refreshing..." : "Refresh Reset Status"}
          </button>
          <a
            href="/api/admin/owner/factory-reset/status"
            target="_blank"
            rel="noreferrer"
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            Open Factory Reset JSON
          </a>
        </div>

        {factoryResetStatus ? (
          <div className="mb-4 grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Baseline Version</p>
              <p className="mt-1 font-semibold text-zinc-900">
                {factoryResetStatus.baselineSummary.baselineVersion ?? "not captured"}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Modules</p>
              <p className="mt-1 font-semibold text-zinc-900">
                {factoryResetStatus.baselineSummary.totalModules}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Requires Baseline</p>
              <p className="mt-1 font-semibold text-zinc-900">
                {factoryResetStatus.baselineSummary.modulesRequiringBaseline}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Captured</p>
              <p className="mt-1 font-semibold text-zinc-900">
                {formatDateTime(factoryResetStatus.baselineSummary.capturedAt)}
              </p>
            </div>
          </div>
        ) : null}

        <form onSubmit={handleCaptureModuleBaseline} className="mb-4 grid gap-3 md:grid-cols-2">
          <input
            name="baselineVersion"
            placeholder="Baseline version (optional)"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="ui-soft-button ui-focus-ring w-fit rounded-md border border-border bg-surface-muted px-4 py-2 text-sm"
          >
            Capture Module Baseline
          </button>
        </form>

        <form onSubmit={handleRunFactoryReset} className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Mode</span>
            <select name="mode" defaultValue="dry_run" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
              <option value="dry_run">dry_run</option>
              <option value="apply">apply</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Scope</span>
            <select name="scope" defaultValue="beta_only" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
              <option value="beta_only">beta_only</option>
              <option value="all_non_owner">all_non_owner</option>
            </select>
          </label>
          <input
            name="reason"
            placeholder="Reason (required)"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <input
            name="resetPassword"
            type="password"
            placeholder="Factory reset password"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <input
            name="userChunkSize"
            type="number"
            min={25}
            max={500}
            defaultValue={100}
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          />
          <label className="flex items-center gap-2 text-sm">
            <input name="includeModuleBaselineRefresh" type="checkbox" defaultChecked />
            Refresh module baseline after run
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="promoteBetaUsersToLive" type="checkbox" defaultChecked />
            Promote beta users to live (beta_only apply)
          </label>
          <input
            name="confirmText"
            placeholder="Type FACTORY_RESET_APP"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <button
            type="submit"
            className="ui-soft-button ui-focus-ring w-fit rounded-md border border-rose-300 bg-rose-50 px-4 py-2 text-sm text-rose-900"
          >
            Run Factory Reset
          </button>
        </form>

        {factoryResetStatus && factoryResetStatus.runs.length > 0 ? (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Recent Reset Runs</p>
            {factoryResetStatus.runs.map((run) => (
              <div key={run.id} className="rounded-2xl border border-border p-3 text-xs">
                <p className="font-semibold">
                  {run.status.toUpperCase()} | {run.mode} | {run.scope}
                </p>
                <p className="mt-1 text-zinc-600">
                  run: {formatShortId(run.id)} | users: {run.target_user_count} | scanned: {run.rows_scanned} | deleted: {run.rows_deleted}
                </p>
                <p className="mt-1 text-zinc-500">
                  started: {formatDateTime(run.created_at)} | completed: {formatDateTime(run.completed_at)}
                </p>
                {run.error ? <p className="mt-1 text-rose-700">error: {run.error}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </Section>

      <Section title="Ownership Transfer Playbooks">
        {transferMessage ? <p className="mb-3 text-sm text-zinc-700">{transferMessage}</p> : null}

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshTransferPlaybooks()}
            disabled={transferBusy}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm disabled:opacity-60"
          >
            {transferBusy ? "Refreshing..." : "Refresh Transfer Playbooks"}
          </button>
          <a
            href="/api/admin/owner/transfer/playbook"
            target="_blank"
            rel="noreferrer"
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            Open Transfer JSON
          </a>
        </div>

        <form onSubmit={handleCreateTransferPlaybook} className="mb-4 grid gap-3 md:grid-cols-2">
          <input
            name="candidateOwnerUserId"
            placeholder="Candidate owner user UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <input
            name="notes"
            placeholder="Notes (optional)"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="ui-soft-button ui-focus-ring w-fit rounded-md border border-border bg-surface-muted px-4 py-2 text-sm"
          >
            Create Transfer Playbook
          </button>
        </form>

        <form onSubmit={handleExecuteTransferPlaybook} className="grid gap-3 md:grid-cols-2">
          <input
            name="playbookId"
            placeholder="Playbook UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <select
            name="mode"
            defaultValue="replace_owner"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            <option value="replace_owner">replace_owner</option>
            <option value="co_owner">co_owner</option>
          </select>
          <input
            name="transferPassword"
            type="password"
            placeholder="Ownership transfer password"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <input
            name="confirmText"
            placeholder="Type EXECUTE_OWNERSHIP_TRANSFER"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button
            type="submit"
            className="ui-soft-button ui-focus-ring w-fit rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900"
          >
            Execute Ownership Transfer
          </button>
        </form>

        {transferPlaybooks.length > 0 ? (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Recent Playbooks</p>
            {transferPlaybooks.map((playbook) => (
              <div key={playbook.id} className="rounded-2xl border border-border p-3 text-xs">
                <p className="font-semibold">
                  {playbook.status.toUpperCase()} | {formatShortId(playbook.id)}
                </p>
                <p className="mt-1 text-zinc-600">
                  current: {formatShortId(playbook.current_owner_user_id)} | candidate: {formatShortId(playbook.candidate_owner_user_id)}
                </p>
                <p className="mt-1 text-zinc-500">
                  created: {formatDateTime(playbook.created_at)} | executed: {formatDateTime(playbook.executed_at)}
                </p>
                {playbook.notes ? <p className="mt-1 text-zinc-600">{playbook.notes}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </Section>

      <Section title="Account Recovery">
        <form onSubmit={handleResetPassword} className="flex flex-wrap gap-3">
          <input name="email" type="email" placeholder="User email" className="min-w-80 ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Generate Password Reset Link</button>
        </form>
      </Section>
      )}

      {selectedSectionId === "account-reset" && (<Section title="Account Reset / Deletion" description="Reset a learner's progress data, or permanently delete an account. These actions cannot be undone — always verify the correct user ID before proceeding." tip="Soft delete hides the account but keeps data for compliance reporting. Hard delete permanently removes everything. For a GDPR erasure request, use hard delete alongside a DSAR record in Compliance.">
        <form onSubmit={handleResetProgress} className="mb-4 flex flex-wrap gap-3">
          <input name="userId" placeholder="User UUID" className="min-w-80 ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <select name="scope" aria-label="Reset scope" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="all">All learning data</option>
            <option value="progress">Only progress</option>
            <option value="mastery">Only mastery</option>
          </select>
          <input
            name="confirmText"
            placeholder="Type RESET_PROGRESS"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Reset Learning Data</button>
        </form>
        <form onSubmit={handleDeleteUser} className="flex flex-wrap gap-3">
          <input name="userId" placeholder="User UUID" className="min-w-80 ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <label className="flex items-center gap-2 text-sm">
            <input name="hardDelete" type="checkbox" />
            Hard delete
          </label>
          <input
            name="confirmText"
            placeholder="Type DELETE_USER"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md bg-red-600 px-4 py-2 text-sm text-white">Delete User</button>
        </form>
      </Section>
      )}

      {selectedSectionId === "refunds" && (<Section title="Refunds" description="Issue a partial or full refund for a payment. You need the Stripe payment ID (starts with pi_) and a pre-approved refund request ID." tip="Leave the amount blank for a full refund. Enter the amount in cents for a partial refund (999 = 9.99). You must create and approve a refund request before using this form.">
        <form onSubmit={handleRefund} className="grid gap-3 md:grid-cols-3">
          <input name="paymentIntentId" placeholder="pi_..." className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2" required />
          <input name="amountCents" type="number" min={0} placeholder="Amount cents (optional)" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" />
          <select name="reason" aria-label="Refund reason" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="requested_by_customer">Requested by customer</option>
            <option value="duplicate">Duplicate</option>
            <option value="fraudulent">Fraudulent</option>
          </select>
          <input
            name="confirmText"
            placeholder="Type PROCESS_REFUND"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Process Refund</button>
        </form>
      </Section>
      )}

      {selectedSectionId === "promotions" && (<Section title="Promotions and Sales" description="Create discount codes or limited-time sales events. Promo codes are entered by learners at checkout; sales events apply discounts automatically within a date range." tip="A promo code is reusable and can be shared publicly. A sales event applies automatically during a set time window — ideal for seasonal promotions.">
        <form onSubmit={handlePromoCode} className="mb-4 grid gap-3 md:grid-cols-3">
          <input name="code" placeholder="PROMO2026" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="percentOff" type="number" min={1} max={100} placeholder="Percent off" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <select name="duration" aria-label="Promotion duration" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm">
            <option value="once">Once</option>
            <option value="forever">Forever</option>
            <option value="repeating">Repeating</option>
          </select>
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm md:col-span-3">Create Promo Code</button>
        </form>

        <form onSubmit={handleSalesEvent} className="grid gap-3 md:grid-cols-4">
          <input name="name" placeholder="Back to School Sale" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="code" placeholder="SCHOOL2026" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="discountPercent" type="number" min={1} max={100} placeholder="Discount %" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="endsAtIso" aria-label="Sales event end date and time" type="datetime-local" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm md:col-span-4">Create Sales Event</button>
        </form>
      </Section>
      )}

      {selectedSectionId === "pricing" && (<Section title="Pricing" description="Create a new Stripe price for an existing product. Use this when you need to update the subscription price for a plan." tip="Creating a new price does not change existing subscribers — only new checkouts will use it. Tick Make this the default checkout price so all new sign-ups use the updated amount.">
        <form onSubmit={handleSetPrice} className="grid gap-3 md:grid-cols-3">
          <input name="productId" placeholder="prod_..." className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="monthlyPriceUsd" type="number" step="0.01" min={0.01} placeholder="Monthly USD" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" required />
          <input name="nickname" placeholder="Plan nickname (optional)" className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm" />
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input name="makeDefault" type="checkbox" defaultChecked />
            Make this the default checkout price
          </label>
          <input
            name="confirmText"
            placeholder="Type SET_PRICE"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">Create Price</button>
        </form>
      </Section>
      )}

      {selectedSectionId === "lang-price-map" && (<Section title="Language Price Map" description="Maps each subscription plan to its Stripe Price ID. This controls which Stripe prices are charged when learners subscribe to language learning plans." tip="Stripe Price IDs always start with price_. Find them in your Stripe Dashboard under Products. After updating, verify by running a test checkout session.">
        <p className="mb-3 text-sm text-zinc-600">
          Configure per-plan Stripe Price IDs used by language checkout (`stripe_language_price_ids` in
          `app_settings`).
        </p>
        <form onSubmit={handleSetLanguagePrices} className="grid gap-3 md:grid-cols-2">
          {LANGUAGE_PRICE_PLAN_FIELDS.map((field) => (
            <label key={field.id} className="flex flex-col gap-1 text-xs text-zinc-600">
              <span className="font-semibold text-zinc-700">{field.label}</span>
              <input
                name={field.id}
                value={languagePriceMap[field.id]}
                onChange={(event) => handleLanguagePriceInputChange(field.id, event.target.value)}
                placeholder={field.placeholder}
                className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
              />
            </label>
          ))}
          <input
            name="confirmText"
            placeholder="Type SET_LANGUAGE_PRICES"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <div className="flex flex-wrap gap-2 md:col-span-2">
            <button
              type="submit"
              disabled={languagePriceBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm disabled:opacity-60"
            >
              {languagePriceBusy ? "Saving..." : "Save Language Price Map"}
            </button>
            <button
              type="button"
              onClick={() => void refreshLanguagePriceMap()}
              disabled={languagePriceBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm disabled:opacity-60"
            >
              {languagePriceBusy ? "Loading..." : "Refresh Language Price Map"}
            </button>
            <a
              href="/api/admin/reports/language-pricing?days=30"
              target="_blank"
              rel="noreferrer"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm"
            >
              Open Pricing Analytics JSON
            </a>
            <button
              type="button"
              onClick={() => void refreshLanguagePricingAnalytics()}
              disabled={languagePricingReportBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm disabled:opacity-60"
            >
              {languagePricingReportBusy ? "Loading analytics..." : "Refresh Pricing Analytics"}
            </button>
          </div>
        </form>
        {languagePriceStatus ? (
          <p className="mt-3 text-sm text-zinc-700">{languagePriceStatus}</p>
        ) : null}
        {languagePricingReportStatus ? (
          <p className="mt-2 text-sm text-zinc-700">{languagePricingReportStatus}</p>
        ) : null}
        {languagePricingReport ? (
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Events (30d)</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">{languagePricingReport.eventCount}</p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Pricing Views</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                {languagePricingReport.funnel.pricingViews}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Checkout Starts</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                {languagePricingReport.funnel.checkoutStarts}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs">
              <p className="uppercase tracking-wide text-zinc-500">Success Views</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                {languagePricingReport.funnel.successViews}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs md:col-span-2">
              <p className="uppercase tracking-wide text-zinc-500">Top Actions</p>
              <p className="mt-1 text-zinc-700">
                {languagePricingReport.byAction.length === 0
                  ? "No interaction events yet."
                  : languagePricingReport.byAction
                      .slice(0, 4)
                      .map((entry) => `${entry.action}: ${entry.count}`)
                      .join(" | ")}
              </p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-xs md:col-span-2">
              <p className="uppercase tracking-wide text-zinc-500">Top Plan Actions</p>
              <p className="mt-1 text-zinc-700">
                {languagePricingReport.planActions.length === 0
                  ? "No plan-action events yet."
                  : languagePricingReport.planActions
                      .slice(0, 4)
                      .map((entry) => `${entry.key}: ${entry.count}`)
                      .join(" | ")}
              </p>
            </div>
          </div>
        ) : null}
      </Section>
      )}

      {selectedSectionId === "lang-runtime" && (<Section title="Language Runtime Config" description="Controls live settings for the language feature — pricing phase, free practice attempts, and default regional pricing tier — without requiring a code deployment." tip="Phase 1 is introductory pricing. Phase 2 and 3 progressively increase prices as the feature matures. The geo tier default sets the pricing region shown when a user location cannot be detected.">
        <p className="mb-3 text-sm text-zinc-600">
          Control phase/profile/cap defaults in runtime (`language_pricing_runtime` in
          `app_settings`) without redeploying.
        </p>
        <form onSubmit={handleSetLanguageRuntimeConfig} className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Phase</span>
            <select
              value={languageRuntimeConfig.phase}
              onChange={(event) =>
                setLanguageRuntimeConfig((current) => ({
                  ...current,
                  phase: event.target.value as LanguageRuntimeConfig["phase"],
                }))
              }
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <option value="1">Phase 1</option>
              <option value="2">Phase 2</option>
              <option value="3">Phase 3</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Pricing profile</span>
            <select
              value={languageRuntimeConfig.pricingProfile}
              onChange={(event) =>
                setLanguageRuntimeConfig((current) => ({
                  ...current,
                  pricingProfile: event.target.value as LanguageRuntimeConfig["pricingProfile"],
                }))
              }
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <option value="conservative">Conservative</option>
              <option value="growth">Growth</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Attempt cap</span>
            <select
              value={languageRuntimeConfig.attemptCap}
              onChange={(event) =>
                setLanguageRuntimeConfig((current) => ({
                  ...current,
                  attemptCap: Number(event.target.value) as LanguageRuntimeConfig["attemptCap"],
                }))
              }
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <option value={250}>250</option>
              <option value={300}>300</option>
              <option value={350}>350</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Free sampler attempts</span>
            <select
              value={languageRuntimeConfig.freeSamplerAttempts}
              onChange={(event) =>
                setLanguageRuntimeConfig((current) => ({
                  ...current,
                  freeSamplerAttempts: Number(
                    event.target.value,
                  ) as LanguageRuntimeConfig["freeSamplerAttempts"],
                }))
              }
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Default geo tier</span>
            <select
              value={languageRuntimeConfig.geoTierDefault}
              onChange={(event) =>
                setLanguageRuntimeConfig((current) => ({
                  ...current,
                  geoTierDefault: event.target.value as LanguageRuntimeConfig["geoTierDefault"],
                }))
              }
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <option value="tier_1">Tier 1</option>
              <option value="tier_2">Tier 2</option>
              <option value="tier_3">Tier 3</option>
              <option value="tier_4">Tier 4</option>
              <option value="tier_5">Tier 5</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Experiment variant ID (optional)</span>
            <input
              value={languageRuntimeConfig.activeExperimentVariantId ?? ""}
              onChange={(event) =>
                setLanguageRuntimeConfig((current) => ({
                  ...current,
                  activeExperimentVariantId: event.target.value,
                }))
              }
              placeholder="phase1-control"
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </label>
          <input
            name="confirmText"
            placeholder="Type SET_LANGUAGE_RUNTIME_CONFIG"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <div className="flex flex-wrap gap-2 md:col-span-2">
            <button
              type="submit"
              disabled={languageRuntimeBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm disabled:opacity-60"
            >
              {languageRuntimeBusy ? "Saving..." : "Save Runtime Config"}
            </button>
            <button
              type="button"
              onClick={() => void refreshLanguageRuntimeConfig()}
              disabled={languageRuntimeBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm disabled:opacity-60"
            >
              {languageRuntimeBusy ? "Loading..." : "Refresh Runtime Config"}
            </button>
            <a
              href="/api/admin/billing/language-runtime"
              target="_blank"
              rel="noreferrer"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm"
            >
              Open Runtime JSON
            </a>
          </div>
        </form>
        <p className="mt-3 text-xs text-zinc-600">
          Current source:{" "}
          <span className="font-semibold text-zinc-700">{languageRuntimeConfig.source}</span>
        </p>
        {languageRuntimeStatus ? (
          <p className="mt-2 text-sm text-zinc-700">{languageRuntimeStatus}</p>
        ) : null}
      </Section>
      )}

      {selectedSectionId === "lang-pricing-ladders" && (<Section title="Language Unlock Pricing Ladders" description="Sets the one-time cost to unlock individual exam levels (Beginner, Intermediate, Advanced) by geographic region. All prices are entered in cents." tip="The 5 tiers reflect global purchasing-power differences — Tier 1 is highest (e.g. USA/EU) and Tier 5 is lowest. Enter prices in cents (999 = 9.99).">
        <p className="mb-3 text-sm text-zinc-600">
          Manage geo-tier one-time exam unlock pricing (stored in `pricing_ladders`).
        </p>
        <form onSubmit={handleSetLanguageUnlockPricing} className="grid gap-3">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-border text-zinc-600">
                  <th className="px-2 py-2 font-semibold">Geo Tier</th>
                  <th className="px-2 py-2 font-semibold">Beginner (cents)</th>
                  <th className="px-2 py-2 font-semibold">Intermediate (cents)</th>
                  <th className="px-2 py-2 font-semibold">Advanced (cents)</th>
                  <th className="px-2 py-2 font-semibold">Currency</th>
                </tr>
              </thead>
              <tbody>
                {languageUnlockPricingRows.map((row) => (
                  <tr key={row.geoTier} className="border-b border-border/60">
                    <td className="px-2 py-2 font-semibold text-zinc-800">{row.geoTier}</td>
                    <td className="px-2 py-2">
                      <input
                        type="number"
                        min={1}
                        value={row.beginnerPriceCents}
                        onChange={(event) =>
                          handleLanguageUnlockPricingFieldChange(
                            row.geoTier,
                            "beginnerPriceCents",
                            event.target.value,
                          )
                        }
                        className="ui-focus-ring w-28 rounded-md border border-border bg-surface px-2 py-1"
                      />
                    </td>
                    <td className="px-2 py-2">
                      <input
                        type="number"
                        min={1}
                        value={row.intermediatePriceCents}
                        onChange={(event) =>
                          handleLanguageUnlockPricingFieldChange(
                            row.geoTier,
                            "intermediatePriceCents",
                            event.target.value,
                          )
                        }
                        className="ui-focus-ring w-28 rounded-md border border-border bg-surface px-2 py-1"
                      />
                    </td>
                    <td className="px-2 py-2">
                      <input
                        type="number"
                        min={1}
                        value={row.advancedPriceCents}
                        onChange={(event) =>
                          handleLanguageUnlockPricingFieldChange(
                            row.geoTier,
                            "advancedPriceCents",
                            event.target.value,
                          )
                        }
                        className="ui-focus-ring w-28 rounded-md border border-border bg-surface px-2 py-1"
                      />
                    </td>
                    <td className="px-2 py-2">
                      <input
                        value={row.currency}
                        onChange={(event) =>
                          handleLanguageUnlockPricingFieldChange(
                            row.geoTier,
                            "currency",
                            event.target.value,
                          )
                        }
                        className="ui-focus-ring w-20 rounded-md border border-border bg-surface px-2 py-1 uppercase"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <input
            name="confirmText"
            placeholder="Type SET_LANGUAGE_UNLOCK_PRICING"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            required
          />

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={languageUnlockPricingBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm disabled:opacity-60"
            >
              {languageUnlockPricingBusy ? "Saving..." : "Save Unlock Ladders"}
            </button>
            <button
              type="button"
              onClick={() => void refreshLanguageUnlockPricing()}
              disabled={languageUnlockPricingBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm disabled:opacity-60"
            >
              {languageUnlockPricingBusy ? "Loading..." : "Refresh Unlock Ladders"}
            </button>
            <a
              href="/api/admin/billing/language-unlock-pricing"
              target="_blank"
              rel="noreferrer"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm"
            >
              Open Unlock Ladders JSON
            </a>
          </div>
        </form>
        {languageUnlockPricingStatus ? (
          <p className="mt-3 text-sm text-zinc-700">{languageUnlockPricingStatus}</p>
        ) : null}
      </Section>
      )}

      {selectedSectionId === "lang-reconciliation" && (<Section title="Language Unlock Reconciliation" description="Checks for and repairs discrepancies between what learners paid for and what their accounts show as unlocked. Runs automatically monthly but can be triggered manually." tip="If a learner reports paying for an exam level but not having access, run this reconciliation. Drift means records were out of sync. Auto-fixed means they were corrected automatically.">
        <p className="mb-3 text-sm text-zinc-600">
          Run ledger-to-usage reconciliation for exam unlock attempts and queue unresolved drift.
        </p>
        <form onSubmit={handleRunLanguageUnlockReconciliation} className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Month key (optional)</span>
            <input
              name="monthKey"
              placeholder="YYYY-MM"
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-700">Max auto-fix absolute drift</span>
            <input
              name="maxAutoFixAbsDrift"
              type="number"
              min={1}
              defaultValue={500}
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </label>
          <input
            name="confirmText"
            placeholder="Type RUN_LANGUAGE_UNLOCK_RECONCILIATION"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm md:col-span-2"
            required
          />
          <div className="flex flex-wrap gap-2 md:col-span-2">
            <button
              type="submit"
              disabled={languageUnlockReconciliationBusy}
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm disabled:opacity-60"
            >
              {languageUnlockReconciliationBusy ? "Running..." : "Run Reconciliation"}
            </button>
            <a
              href="/api/reconciliation/run"
              target="_blank"
              rel="noreferrer"
              className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface px-4 py-2 text-sm"
            >
              Open Reconciliation API JSON
            </a>
          </div>
        </form>
        {languageUnlockReconciliationStatus ? (
          <p className="mt-3 text-sm text-zinc-700">{languageUnlockReconciliationStatus}</p>
        ) : null}
        {languageUnlockReconciliationResult ? (
          <div className="mt-3 grid gap-2 rounded-2xl border border-border bg-surface p-3 text-xs text-zinc-700 md:grid-cols-3">
            <p>
              <span className="font-semibold text-zinc-900">Month:</span>{" "}
              {languageUnlockReconciliationResult.monthKey}
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Rows scanned:</span>{" "}
              {languageUnlockReconciliationResult.rowsScanned}
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Drift detected:</span>{" "}
              {languageUnlockReconciliationResult.driftDetected}
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Auto-fixed:</span>{" "}
              {languageUnlockReconciliationResult.autoFixed}
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Queued:</span>{" "}
              {languageUnlockReconciliationResult.queuedForReview}
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Run at:</span>{" "}
              {formatDateTime(languageUnlockReconciliationResult.runAt)}
            </p>
          </div>
        ) : null}
      </Section>
      )}

      {selectedSectionId === "support-queue" && (<Section title="Support Queue" description="View and manage support tickets submitted by parents or learners. Update each ticket status as you work through the requests." tip="Set tickets to In Progress while investigating and Resolved once the issue is fixed. Closed tickets are archived and no longer shown to the original submitter.">
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="rounded-2xl border border-border p-3">
              <p className="font-medium">{ticket.subject}</p>
              <p className="text-xs text-zinc-500">
                {ticket.id} | user: {ticket.user_id} | priority: {ticket.priority} | status: {ticket.status}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "in_progress")}
                  className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                >
                  Mark In Progress
                </button>
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "resolved")}
                  className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                >
                  Resolve
                </button>
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "closed")}
                  className="ui-soft-button ui-focus-ring rounded border border-border bg-surface-muted px-2 py-1 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ))}
          {tickets.length === 0 ? <p className="text-sm text-zinc-500">No support tickets in queue.</p> : null}
        </div>
      </Section>
      )}
        </div>
      </div>
    </div>
  );
}
