"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { getAllLearningPaths } from "@/lib/explorer/learning-paths";
import {
  formatSubscriptionDate,
  getSubscriptionStatusLabel,
  getSubscriptionStatusTone,
  requiresPortalManagement,
  type SubscriptionSnapshot,
} from "@/lib/billing/subscription";
import { Capacitor } from "@capacitor/core";
import { Purchases } from "@revenuecat/purchases-capacitor";
import { canUseStripe, isIOS, isAndroid, canUseIAP } from "@/lib/platform/features";
import { useI18n } from "@/lib/i18n/provider";
import { initializeRevenueCat } from "@/lib/billing/revenuecat-client";
import { hasRevenueCatProEntitlement } from "@/lib/billing/revenuecat-config";

type LearnerPathProfile = {
  id: string;
  display_name: string;
  grade_level: string | null;
  age_years: number | null;
  path_allowlist: string[] | null;
};

type SettingsClientProps = {
  subscription: SubscriptionSnapshot;
  learnerProfiles: LearnerPathProfile[];
};

type StatusTone = "error" | "success";

function normalizePathAllowlist(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const normalized = value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
  return normalized.length > 0 ? normalized : null;
}

export default function SettingsClient({ subscription, learnerProfiles }: SettingsClientProps) {
  const { t, locale } = useI18n();
  const externalBillingAllowed = canUseStripe();
  const iapBillingAllowed = canUseIAP();

  const [billingStatus, setBillingStatus] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");
  const [deleteStatusTone, setDeleteStatusTone] = useState<StatusTone>("error");
  const [pathsStatus, setPathsStatus] = useState("");
  const [pathsStatusTone, setPathsStatusTone] = useState<StatusTone>("success");
  const [confirmationValue, setConfirmationValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpeningPortal, setIsOpeningPortal] = useState(false);
  const [savingLearnerId, setSavingLearnerId] = useState<string | null>(null);
  const [allowlistDrafts, setAllowlistDrafts] = useState<Record<string, string[] | null>>(() =>
    Object.fromEntries(
      learnerProfiles.map((profile) => [profile.id, normalizePathAllowlist(profile.path_allowlist)]),
    ),
  );

  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const allPaths = useMemo(() => getAllLearningPaths(), []);
  const allPathIds = useMemo(() => allPaths.map((path) => path.id), [allPaths]);

  const subscriptionTone = getSubscriptionStatusTone(subscription.status);
  const statusLabel = getSubscriptionStatusLabel(subscription.status);
  const periodEndLabel = formatSubscriptionDate(subscription.currentPeriodEnd, locale);
  const hasPortalManagedSubscription = requiresPortalManagement(subscription.status);
  const canSubmitDelete = confirmationValue === "DELETE" && !isSubmitting;

  const subscriptionToneClass =
    subscriptionTone === "good"
      ? "bg-emerald-100 text-emerald-700"
      : subscriptionTone === "warn"
        ? "bg-amber-100 text-amber-700"
        : subscriptionTone === "bad"
          ? "bg-rose-100 text-rose-700"
          : "bg-zinc-100 text-zinc-600";

  const openBillingPortal = async () => {
    if (isIOS()) {
      window.location.href = "https://apps.apple.com/account/subscriptions";
      return;
    }
    if (isAndroid()) {
      window.location.href = "https://play.google.com/store/account/subscriptions";
      return;
    }
    setBillingStatus("");
    setIsOpeningPortal(true);
    try {
      const response = await fetch("/api/stripe/portal", { method: "POST" });
      const data = (await response.json().catch(() => ({}))) as {
        portalUrl?: string;
        error?: string;
      };
      if (!response.ok || !data.portalUrl) {
        setBillingStatus(data.error ?? t("account_settings_billing_unable_open_portal"));
        return;
      }
      window.location.href = data.portalUrl;
    } catch {
      setBillingStatus(t("account_settings_billing_unable_open_portal"));
    } finally {
      setIsOpeningPortal(false);
    }
  };

  const handleRestorePurchases = async () => {
    setBillingStatus(t("account_settings_billing_restoring"));
    setIsSubmitting(true);
    try {
      if (Capacitor.isNativePlatform()) {
        const initialized = await initializeRevenueCat();
        if (!initialized) {
          setBillingStatus(t("billing_checkout_not_configured"));
          return;
        }

        const { customerInfo } = await Purchases.restorePurchases();
        const isActive = hasRevenueCatProEntitlement(customerInfo);

        if (isActive) {
          // Sync the restored subscription to the backend
          const platform = Capacitor.getPlatform();
          const endpoint = platform === 'ios'
            ? '/api/receipt/verify/apple'
            : '/api/receipt/verify/google';

          try {
            const syncResp = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ restored: true }),
            });
            if (syncResp.status === 501) {
              // Stub not yet implemented — warn but don't block the user
              console.warn('[Restore] Backend receipt sync not yet implemented.');
              setBillingStatus(t("account_settings_billing_restore_success_backend_pending"));
            } else if (!syncResp.ok) {
              setBillingStatus(t("account_settings_billing_restore_backend_failed"));
              return;
            } else {
              setBillingStatus(t("account_settings_billing_restore_success"));
            }
          } catch {
            setBillingStatus(t("account_settings_billing_restore_server_sync_failed"));
            return;
          }

          // Refresh so UI reflects the newly restored subscription
          router.refresh();
        } else {
          setBillingStatus(t("account_settings_billing_restore_none_found"));
        }
      }
    } catch (error: unknown) {
      setBillingStatus(t("account_settings_billing_restore_failed"));
      console.error('[Restore] Failed to restore purchases:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteAccount = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDeleteStatus("");
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const confirmation = String(form.get("confirmation") ?? "");

    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setDeleteStatusTone("error");
        setDeleteStatus(data.error ?? t("account_settings_delete_unable"));
        return;
      }

      setDeleteStatusTone("success");
      setDeleteStatus(t("account_settings_delete_success_redirecting"));
      router.push("/");
      router.refresh();
    } catch {
      setDeleteStatusTone("error");
      setDeleteStatus(t("account_settings_delete_unable"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const setAllowAllPaths = (profileId: string) => {
    setPathsStatus("");
    setAllowlistDrafts((current) => ({ ...current, [profileId]: null }));
  };

  const setCustomPathMode = (profileId: string) => {
    setPathsStatus("");
    setAllowlistDrafts((current) => {
      const existing = normalizePathAllowlist(current[profileId]);
      if (existing) return current;
      return { ...current, [profileId]: [...allPathIds] };
    });
  };

  const togglePath = (profileId: string, pathId: string) => {
    setPathsStatus("");
    setAllowlistDrafts((current) => {
      const currentList = normalizePathAllowlist(current[profileId]) ?? [...allPathIds];
      const nextSet = new Set(currentList);
      if (nextSet.has(pathId)) {
        nextSet.delete(pathId);
      } else {
        nextSet.add(pathId);
      }
      return { ...current, [profileId]: [...nextSet] };
    });
  };

  const saveAllowlist = async (profile: LearnerPathProfile) => {
    setPathsStatus("");
    const draft = normalizePathAllowlist(allowlistDrafts[profile.id]);

    if (draft && draft.length === 0) {
      setPathsStatusTone("error");
      setPathsStatus(
        t("account_settings_paths_select_at_least_one", { learner: profile.display_name }),
      );
      return;
    }

    setSavingLearnerId(profile.id);
    const payload = draft && draft.length === allPathIds.length ? null : draft;

    try {
      const { error } = await supabase
        .from("student_profiles")
        .update({ path_allowlist: payload })
        .eq("id", profile.id);

      if (error) {
        setPathsStatusTone("error");
        setPathsStatus(
          error.message || t("account_settings_paths_unable_save", { learner: profile.display_name }),
        );
        return;
      }

      setAllowlistDrafts((current) => ({ ...current, [profile.id]: payload }));
      setPathsStatusTone("success");
      setPathsStatus(t("account_settings_paths_saved", { learner: profile.display_name }));
    } catch {
      setPathsStatusTone("error");
      setPathsStatus(t("account_settings_paths_unable_save", { learner: profile.display_name }));
    } finally {
      setSavingLearnerId(null);
    }
  };

  return (
    <div className="space-y-6">
      <SoftCard as="section" className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">{t("account_settings_subscription_management")}</h2>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${subscriptionToneClass}`}>
            {statusLabel}
          </span>
        </div>

        <p className="mt-3 text-sm text-zinc-700">
          {subscription.cancelAtPeriodEnd && periodEndLabel
            ? t("account_settings_subscription_cancel_on", { date: periodEndLabel })
            : periodEndLabel
              ? t("account_settings_subscription_period_ends_on", { date: periodEndLabel })
              : t("account_settings_subscription_no_active_period")}
        </p>

        <p className="mt-2 text-sm text-zinc-600">
          {externalBillingAllowed
            ? t("account_settings_subscription_stripe_portal_desc")
            : t("account_settings_subscription_iap_mode_desc")}
        </p>

        {externalBillingAllowed && hasPortalManagedSubscription ? (
          <button
            type="button"
            onClick={openBillingPortal}
            disabled={isOpeningPortal}
            className="ui-soft-button ui-focus-ring mt-4 min-h-11 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm disabled:opacity-70"
          >
            {isOpeningPortal
              ? t("account_settings_subscription_opening_portal")
              : t("account_settings_subscription_manage")}
          </button>
        ) : null}

        {externalBillingAllowed && !hasPortalManagedSubscription ? (
          <Link
            href="/billing/language"
            className="ui-soft-button ui-focus-ring mt-4 inline-flex min-h-11 items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
          >
            {t("account_settings_subscription_choose_language_plan")}
          </Link>
        ) : null}

        {iapBillingAllowed && !externalBillingAllowed ? (
          <div className="flex gap-3">
             <button
                type="button"
                onClick={openBillingPortal}
                className="ui-soft-button ui-focus-ring mt-4 min-h-11 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm"
              >
                {t("account_settings_subscription_manage_plural")}
              </button>
              <button
                type="button"
                onClick={() => void handleRestorePurchases()}
                disabled={isSubmitting}
                className="ui-soft-button ui-focus-ring mt-4 min-h-11 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm disabled:opacity-70"
              >
                {isSubmitting
                  ? t("account_settings_billing_restoring_short")
                  : t("account_settings_billing_restore_purchases")}
              </button>
          </div>
        ) : null}

        {billingStatus ? <p role="status" className="mt-3 text-sm text-zinc-700">{billingStatus}</p> : null}
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">{t("account_settings_learner_path_controls")}</h2>
        <p className="mt-2 text-sm text-zinc-600">
          {t("account_settings_learner_path_controls_desc_prefix")}{" "}
          <strong>{t("account_settings_paths_allow_all")}</strong>{" "}
          {t("account_settings_learner_path_controls_desc_suffix")}
        </p>

        {learnerProfiles.length === 0 ? (
          <p className="mt-4 rounded-lg border border-zinc-200 bg-surface-muted p-3 text-sm text-zinc-600">
            {t("account_settings_no_learners")}
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {learnerProfiles.map((profile) => {
              const draft = normalizePathAllowlist(allowlistDrafts[profile.id]);
              const isAllMode = draft === null;
              const selected = new Set(draft ?? allPathIds);
              return (
                <article key={profile.id} className="rounded-xl border border-zinc-200 bg-surface-muted p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-800">
                        {profile.display_name}
                        {profile.grade_level
                          ? t("account_settings_profile_grade", { grade: profile.grade_level })
                          : ""}
                        {profile.age_years
                          ? t("account_settings_profile_age", { age: profile.age_years })
                          : ""}
                      </h3>
                      <p className="text-xs text-zinc-500">
                        {isAllMode
                          ? t("account_settings_paths_all_enabled")
                          : t("account_settings_paths_count_enabled", { count: selected.size })}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setAllowAllPaths(profile.id)}
                        className={`ui-focus-ring rounded-full px-3 py-1.5 text-xs font-semibold ${
                          isAllMode ? "bg-emerald-100 text-emerald-700" : "bg-white text-zinc-600 border border-zinc-200"
                        }`}
                      >
                        {t("account_settings_paths_allow_all")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setCustomPathMode(profile.id)}
                        className={`ui-focus-ring rounded-full px-3 py-1.5 text-xs font-semibold ${
                          !isAllMode ? "bg-blue-100 text-blue-700" : "bg-white text-zinc-600 border border-zinc-200"
                        }`}
                      >
                        {t("account_settings_paths_custom")}
                      </button>
                    </div>
                  </div>

                  {!isAllMode ? (
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {allPaths.map((path) => {
                        const checked = selected.has(path.id);
                        return (
                          <label
                            key={`${profile.id}-${path.id}`}
                            className={`flex items-center gap-2 rounded-md border px-2.5 py-2 text-xs ${
                              checked ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-zinc-200 bg-white text-zinc-700"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => togglePath(profile.id, path.id)}
                              className="h-4 w-4 accent-emerald-600"
                            />
                            <span className="font-medium">{path.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  ) : null}

                  <div className="mt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => void saveAllowlist(profile)}
                      disabled={savingLearnerId === profile.id}
                      className="ui-soft-button ui-focus-ring min-h-10 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white disabled:opacity-70"
                    >
                      {savingLearnerId === profile.id
                        ? t("account_settings_paths_saving")
                        : t("account_settings_paths_save")}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {pathsStatus ? (
          <p
            role="status"
            className={`mt-3 text-sm ${pathsStatusTone === "success" ? "text-emerald-700" : "text-red-700"}`}
          >
            {pathsStatus}
          </p>
        ) : null}
      </SoftCard>

      <SoftCard as="section" className="border-red-300 bg-red-50 p-5 dark:bg-red-900/20">
        <h2 className="text-lg font-semibold text-red-800 dark:text-red-300">{t("account_settings_delete_title")}</h2>
        <p className="mt-2 text-sm text-red-700 dark:text-red-300">
          {t("account_settings_delete_desc_prefix")} <code>DELETE</code> {t("account_settings_delete_desc_suffix")}
        </p>

        <form onSubmit={handleDeleteAccount} className="mt-4 flex flex-wrap items-center gap-3">
          <input
            name="confirmation"
            className="ui-focus-ring rounded-md border border-red-300 px-3 py-2 text-sm"
            placeholder={t("account_settings_delete_placeholder")}
            value={confirmationValue}
            onChange={(event) => setConfirmationValue(event.target.value)}
            required
          />
          <button
            type="submit"
            disabled={!canSubmitDelete}
            className="ui-soft-button ui-focus-ring min-h-11 rounded-full bg-red-600 px-4 py-2 text-sm text-white disabled:opacity-70"
          >
            {isSubmitting ? t("account_settings_delete_deleting") : t("account_settings_delete_cta")}
          </button>
        </form>

        {deleteStatus ? (
          <p
            role="status"
            className={`mt-3 text-sm ${
              deleteStatusTone === "success"
                ? "text-emerald-700 dark:text-emerald-300"
                : "text-red-800 dark:text-red-300"
            }`}
          >
            {deleteStatus}
          </p>
        ) : null}
      </SoftCard>
    </div>
  );
}
