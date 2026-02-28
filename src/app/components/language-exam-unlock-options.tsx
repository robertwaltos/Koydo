"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { trackLanguageBillingInteraction } from "@/lib/analytics/language-billing-events";
import { useI18n } from "@/lib/i18n/provider";

type LanguageExamUnlockLevel = "beginner" | "intermediate" | "advanced";

type UnlockQuote = {
  level: LanguageExamUnlockLevel;
  geoTier: "tier_1" | "tier_2" | "tier_3" | "tier_4" | "tier_5";
  currency: string;
  priceCents: number;
  priceUsd: number;
  additionalAttempts: number;
};

type UnlockEntitlement = {
  hasActiveUnlock: boolean;
  totalPurchasesActive: number;
  unlockAttemptsRemaining: number;
};

type UnlockOffer = {
  quote: UnlockQuote;
  entitlement: UnlockEntitlement;
};

type FetchErrorPayload = {
  error?: string;
  message?: string;
};

type BillingSurface = "language_pricing" | "checkout" | "success";

const LEVEL_LABELS: Record<LanguageExamUnlockLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const LEVEL_DESCRIPTIONS: Record<LanguageExamUnlockLevel, string> = {
  beginner: "A1-A2 exam-style practice",
  intermediate: "B1-B2 fluency and prosody",
  advanced: "C1+ certification simulation",
};

const LEVEL_ORDER: LanguageExamUnlockLevel[] = [
  "beginner",
  "intermediate",
  "advanced",
];

function formatMoney(priceCents: number, currency: string, locale: string) {
  const normalizedCurrency = currency.trim().length === 3 ? currency.toUpperCase() : "USD";
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: normalizedCurrency,
      maximumFractionDigits: 2,
    }).format(priceCents / 100);
  } catch {
    return `$${(priceCents / 100).toFixed(2)}`;
  }
}

async function parseError(response: Response) {
  const payload = (await response.json().catch(() => ({}))) as FetchErrorPayload;
  return payload.message ?? payload.error ?? `Request failed (${response.status})`;
}

export default function LanguageExamUnlockOptions({
  studentProfileId,
  analyticsSurface,
  title = "One-time exam unlocks",
  description = "Add scored attempts without changing your monthly subscription.",
  compact = false,
}: {
  studentProfileId?: string;
  analyticsSurface?: BillingSurface;
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  const { locale } = useI18n();
  const [offers, setOffers] = useState<Record<LanguageExamUnlockLevel, UnlockOffer | null>>({
    beginner: null,
    intermediate: null,
    advanced: null,
  });
  const [status, setStatus] = useState("Loading unlock offers...");
  const [loading, setLoading] = useState(false);
  const [checkoutLevel, setCheckoutLevel] = useState<LanguageExamUnlockLevel | null>(null);

  const hasOffers = useMemo(
    () => LEVEL_ORDER.some((level) => offers[level] !== null),
    [offers],
  );

  const refreshOffers = useCallback(async () => {
    setLoading(true);
    setStatus("Loading unlock offers...");
    try {
      const responses = await Promise.all(
        LEVEL_ORDER.map(async (level) => {
          const params = new URLSearchParams({ level });
          if (studentProfileId) {
            params.set("studentProfileId", studentProfileId);
          }

          const response = await fetch(`/api/language/exam-unlocks?${params.toString()}`, {
            method: "GET",
            cache: "no-store",
          });
          if (!response.ok) {
            throw new Error(await parseError(response));
          }

          const payload = (await response.json()) as {
            quote?: UnlockQuote;
            entitlement?: UnlockEntitlement;
          };
          if (!payload.quote || !payload.entitlement) {
            throw new Error("Unlock offer payload missing quote or entitlement.");
          }

          return { level, offer: { quote: payload.quote, entitlement: payload.entitlement } };
        }),
      );

      const next: Record<LanguageExamUnlockLevel, UnlockOffer | null> = {
        beginner: null,
        intermediate: null,
        advanced: null,
      };
      for (const row of responses) {
        next[row.level] = row.offer;
      }
      setOffers(next);
      setStatus("Unlock offers refreshed.");
    } catch (error) {
      setOffers({
        beginner: null,
        intermediate: null,
        advanced: null,
      });
      setStatus(error instanceof Error ? error.message : "Failed to load unlock offers.");
    } finally {
      setLoading(false);
    }
  }, [studentProfileId]);

  const handleCheckout = useCallback(
    async (level: LanguageExamUnlockLevel) => {
      setCheckoutLevel(level);
      setStatus(`Starting ${LEVEL_LABELS[level]} checkout...`);
      try {
        if (analyticsSurface) {
          trackLanguageBillingInteraction({
            surface: analyticsSurface,
            action: "exam_unlock_checkout_selected",
            planId: `exam_unlock_${level}`,
            payload: {
              level,
              studentScoped: Boolean(studentProfileId),
            },
          });
        }

        const response = await fetch("/api/language/exam-unlocks/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            level,
            ...(studentProfileId ? { studentProfileId } : {}),
          }),
        });
        if (!response.ok) {
          throw new Error(await parseError(response));
        }

        const payload = (await response.json()) as { checkoutUrl?: string };
        if (!payload.checkoutUrl) {
          throw new Error("Checkout URL was not returned.");
        }

        window.location.assign(payload.checkoutUrl);
      } catch (error) {
        setStatus(error instanceof Error ? error.message : "Failed to start checkout.");
      } finally {
        setCheckoutLevel(null);
      }
    },
    [analyticsSurface, studentProfileId],
  );

  useEffect(() => {
    void refreshOffers();
  }, [refreshOffers]);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className={compact ? "text-sm font-semibold text-zinc-900" : "text-base font-semibold text-zinc-900"}>
            {title}
          </h3>
          <p className="mt-1 text-xs text-zinc-600">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => void refreshOffers()}
          disabled={loading || checkoutLevel !== null}
          className="ui-focus-ring rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 disabled:opacity-60"
        >
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      {hasOffers ? (
        <div className={compact ? "mt-3 grid gap-2" : "mt-3 grid gap-3 md:grid-cols-3"}>
          {LEVEL_ORDER.map((level) => {
            const offer = offers[level];
            if (!offer) {
              return (
                <div key={level} className="rounded-xl border border-zinc-200 bg-white p-3 text-xs text-zinc-500">
                  {LEVEL_LABELS[level]} unavailable.
                </div>
              );
            }

            const isBusy = checkoutLevel === level;
            const hasActiveUnlock =
              offer.entitlement.hasActiveUnlock && offer.entitlement.unlockAttemptsRemaining > 0;

            return (
              <article key={level} className="rounded-xl border border-zinc-200 bg-white p-3">
                <p className="text-sm font-semibold text-zinc-900">{LEVEL_LABELS[level]}</p>
                <p className="mt-1 text-xs text-zinc-600">{LEVEL_DESCRIPTIONS[level]}</p>
                <p className="mt-2 text-lg font-bold text-zinc-900">
                  {formatMoney(offer.quote.priceCents, offer.quote.currency, locale)}
                </p>
                <p className="text-xs text-zinc-600">
                  {offer.quote.additionalAttempts} scored attempts
                </p>
                {hasActiveUnlock ? (
                  <p className="mt-1 text-xs font-medium text-emerald-700">
                    Active unlock: {offer.entitlement.unlockAttemptsRemaining} attempts remaining
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={() => void handleCheckout(level)}
                  disabled={isBusy || loading}
                  className="ui-focus-ring mt-3 inline-flex min-h-9 items-center rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white hover:brightness-110 disabled:opacity-60"
                >
                  {isBusy ? "Starting..." : hasActiveUnlock ? "Buy Again" : "Unlock"}
                </button>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="mt-3 text-xs text-zinc-600">Unlock offers are not available yet in this environment.</p>
      )}

      <p className="mt-3 text-xs text-zinc-600">{status}</p>
    </div>
  );
}
