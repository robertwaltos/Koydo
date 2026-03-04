"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
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
import { useCompanionPreferences, type CompanionAvatarStyle } from "@/lib/greeter/companion-preferences";
import { COMPANIONS, COMPANION_STORAGE_KEY, type CompanionGender } from "@/lib/greeter/companion-config";
import CompanionAvatarSVG from "@/components/experience/CompanionAvatarSVG";

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
type VerificationScope = "student_profile_settings" | "account_delete";
type VerificationChannel = "email" | "sms" | "authenticator";

function normalizePathAllowlist(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const normalized = value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
  return normalized.length > 0 ? normalized : null;
}

export default function SettingsClient({ subscription, learnerProfiles }: SettingsClientProps) {
  const { t, locale } = useI18n();
  const { avatarStyle, setAvatarStyle } = useCompanionPreferences();
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
  const [verificationChannel, setVerificationChannel] = useState<VerificationChannel>("email");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationPhone, setVerificationPhone] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [verificationStatusTone, setVerificationStatusTone] = useState<StatusTone>("success");
  const [verificationBusy, setVerificationBusy] = useState(false);
  const [activeChallenges, setActiveChallenges] = useState<Partial<Record<VerificationScope, string>>>({});
  const [verifiedChallenges, setVerifiedChallenges] = useState<Partial<Record<VerificationScope, string>>>({});
  const [debugCodes, setDebugCodes] = useState<Partial<Record<VerificationScope, string>>>({});
  const [totpProvisionUri, setTotpProvisionUri] = useState("");
  const [totpProvisionSecret, setTotpProvisionSecret] = useState("");
  const [allowlistDrafts, setAllowlistDrafts] = useState<Record<string, string[] | null>>(() =>
    Object.fromEntries(
      learnerProfiles.map((profile) => [profile.id, normalizePathAllowlist(profile.path_allowlist)]),
    ),
  );

  const router = useRouter();

  const allPaths = useMemo(() => getAllLearningPaths(), []);
  const allPathIds = useMemo(() => allPaths.map((path) => path.id), [allPaths]);

  const subscriptionTone = getSubscriptionStatusTone(subscription.status);
  const statusLabel = getSubscriptionStatusLabel(subscription.status);
  const periodEndLabel = formatSubscriptionDate(subscription.currentPeriodEnd, locale);
  const hasPortalManagedSubscription = requiresPortalManagement(subscription.status);
  const canSubmitDelete = confirmationValue === "DELETE" && !isSubmitting && Boolean(verifiedChallenges.account_delete);

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

  const requestVerificationChallenge = async (scope: VerificationScope) => {
    setVerificationStatus("");
    setVerificationBusy(true);
    try {
      const response = await fetch("/api/account/security/change-confirmation/challenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scope,
          channel: verificationChannel,
          phoneNumber: verificationPhone || undefined,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        challenge?: { challengeId?: string; debugCode?: string; deliveryMode?: string };
      };
      if (!response.ok || !payload.challenge?.challengeId) {
        throw new Error(payload.error ?? "Unable to request a verification challenge.");
      }

      const challengeId = payload.challenge.challengeId;
      const debugCode = payload.challenge.debugCode;
      setActiveChallenges((current) => ({ ...current, [scope]: challengeId }));
      setVerifiedChallenges((current) => ({ ...current, [scope]: undefined }));
      if (debugCode) {
        setDebugCodes((current) => ({ ...current, [scope]: debugCode }));
      }

      setVerificationStatusTone("success");
      setVerificationStatus(
        payload.challenge.deliveryMode === "authenticator"
          ? "Authenticator challenge created. Enter your authenticator code to verify."
          : "Verification code sent. Enter the code to continue.",
      );
    } catch (error) {
      setVerificationStatusTone("error");
      setVerificationStatus(
        error instanceof Error ? error.message : "Unable to request a verification challenge.",
      );
    } finally {
      setVerificationBusy(false);
    }
  };

  const verifyChallengeCode = async (scope: VerificationScope) => {
    const challengeId = activeChallenges[scope];
    if (!challengeId) {
      setVerificationStatusTone("error");
      setVerificationStatus("Request a challenge before verifying a code.");
      return;
    }
    setVerificationStatus("");
    setVerificationBusy(true);
    try {
      const response = await fetch("/api/account/security/change-confirmation/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scope,
          challengeId,
          code: verificationCode,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to verify the code.");
      }

      setVerifiedChallenges((current) => ({ ...current, [scope]: challengeId }));
      setVerificationStatusTone("success");
      setVerificationStatus("Verification complete. You can now apply the sensitive change.");
      setVerificationCode("");
    } catch (error) {
      setVerificationStatusTone("error");
      setVerificationStatus(error instanceof Error ? error.message : "Unable to verify the code.");
    } finally {
      setVerificationBusy(false);
    }
  };

  const provisionAuthenticator = async () => {
    setVerificationStatus("");
    setVerificationBusy(true);
    try {
      const response = await fetch("/api/account/security/change-confirmation/totp/provision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: "Parent Authenticator" }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        provisioned?: { otpauthUri?: string; secret?: string };
      };
      if (!response.ok || !payload.provisioned?.otpauthUri || !payload.provisioned.secret) {
        throw new Error(payload.error ?? "Unable to provision authenticator factor.");
      }
      setTotpProvisionUri(payload.provisioned.otpauthUri);
      setTotpProvisionSecret(payload.provisioned.secret);
      setVerificationStatusTone("success");
      setVerificationStatus("Authenticator factor provisioned. Add it to your app, then request a challenge.");
    } catch (error) {
      setVerificationStatusTone("error");
      setVerificationStatus(
        error instanceof Error ? error.message : "Unable to provision authenticator factor.",
      );
    } finally {
      setVerificationBusy(false);
    }
  };

  const handleDeleteAccount = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDeleteStatus("");
    const challengeId = verifiedChallenges.account_delete;
    if (!challengeId) {
      setDeleteStatusTone("error");
      setDeleteStatus("Complete verification for account deletion before continuing.");
      return;
    }
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const confirmation = String(form.get("confirmation") ?? "");

    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation, challengeId }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setDeleteStatusTone("error");
        setDeleteStatus(data.error ?? t("account_settings_delete_unable"));
        return;
      }

      setDeleteStatusTone("success");
      setDeleteStatus(t("account_settings_delete_success_redirecting"));
      setVerifiedChallenges((current) => ({ ...current, account_delete: undefined }));
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
    const challengeId = verifiedChallenges.student_profile_settings;
    if (!challengeId) {
      setPathsStatusTone("error");
      setPathsStatus("Complete parent verification for learner settings before saving.");
      return;
    }
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
      const response = await fetch("/api/account/settings/learner-paths", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profileId: profile.id,
          pathAllowlist: payload,
          challengeId,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setPathsStatusTone("error");
        setPathsStatus(data.error ?? t("account_settings_paths_unable_save", { learner: profile.display_name }));
        return;
      }

      setAllowlistDrafts((current) => ({ ...current, [profile.id]: payload }));
      setVerifiedChallenges((current) => ({ ...current, student_profile_settings: undefined }));
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

      <CompanionSettingsCard avatarStyle={avatarStyle} setAvatarStyle={setAvatarStyle} />

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">Parent Security Verification</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Sensitive account changes require a fresh parent verification challenge.
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Verification channel</span>
            <select
              value={verificationChannel}
              onChange={(event) => setVerificationChannel(event.target.value as VerificationChannel)}
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            >
              <option value="email">Email code</option>
              <option value="sms">SMS code</option>
              <option value="authenticator">Authenticator app</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">SMS phone (optional)</span>
            <input
              value={verificationPhone}
              onChange={(event) => setVerificationPhone(event.target.value)}
              placeholder="+1..."
              className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </label>
        </div>
        {verificationChannel === "authenticator" ? (
          <div className="mt-3 rounded-lg border border-border bg-surface-muted p-3 text-sm">
            <button
              type="button"
              onClick={() => {
                void provisionAuthenticator();
              }}
              disabled={verificationBusy}
              className="ui-soft-button ui-focus-ring rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold"
            >
              {verificationBusy ? "Provisioning..." : "Provision/Rotate Authenticator Factor"}
            </button>
            {totpProvisionSecret ? (
              <p className="mt-2 text-xs text-zinc-700">Secret: {totpProvisionSecret}</p>
            ) : null}
            {totpProvisionUri ? (
              <p className="mt-1 break-all text-[11px] text-zinc-600">{totpProvisionUri}</p>
            ) : null}
          </div>
        ) : null}
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <div className="rounded-lg border border-border p-3 text-sm">
            <p className="font-semibold">Learner settings</p>
            <p className="mt-1 text-xs text-zinc-600">
              {verifiedChallenges.student_profile_settings ? "Verified" : "Verification required"}
            </p>
            <button
              type="button"
              onClick={() => {
                void requestVerificationChallenge("student_profile_settings");
              }}
              disabled={verificationBusy}
              className="ui-soft-button ui-focus-ring mt-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold"
            >
              {verificationBusy ? "Requesting..." : "Request Code"}
            </button>
          </div>
          <div className="rounded-lg border border-border p-3 text-sm">
            <p className="font-semibold">Account deletion</p>
            <p className="mt-1 text-xs text-zinc-600">
              {verifiedChallenges.account_delete ? "Verified" : "Verification required"}
            </p>
            <button
              type="button"
              onClick={() => {
                void requestVerificationChallenge("account_delete");
              }}
              disabled={verificationBusy}
              className="ui-soft-button ui-focus-ring mt-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold"
            >
              {verificationBusy ? "Requesting..." : "Request Code"}
            </button>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <input
            value={verificationCode}
            onChange={(event) => setVerificationCode(event.target.value)}
            placeholder="Enter verification code"
            className="ui-focus-ring rounded-md border border-border bg-surface px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => {
              void verifyChallengeCode("student_profile_settings");
            }}
            disabled={verificationBusy || !activeChallenges.student_profile_settings}
            className="ui-soft-button ui-focus-ring rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold disabled:opacity-70"
          >
            Verify Learner Settings
          </button>
          <button
            type="button"
            onClick={() => {
              void verifyChallengeCode("account_delete");
            }}
            disabled={verificationBusy || !activeChallenges.account_delete}
            className="ui-soft-button ui-focus-ring rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold disabled:opacity-70"
          >
            Verify Account Delete
          </button>
        </div>
        {(debugCodes.student_profile_settings || debugCodes.account_delete) ? (
          <p className="mt-2 text-xs text-amber-700">
            Debug codes (non-production): learner={debugCodes.student_profile_settings ?? "n/a"} | delete=
            {debugCodes.account_delete ?? "n/a"}
          </p>
        ) : null}
        {verificationStatus ? (
          <p
            role="status"
            className={`mt-2 text-sm ${verificationStatusTone === "success" ? "text-emerald-700" : "text-red-700"}`}
          >
            {verificationStatus}
          </p>
        ) : null}
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
        <p className="mt-2 text-sm text-red-700 dark:text-red-300">
          A verified parent security challenge for account deletion is required before submission.
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

function CompanionSettingsCard({
  avatarStyle,
  setAvatarStyle,
}: {
  avatarStyle: CompanionAvatarStyle;
  setAvatarStyle: (style: CompanionAvatarStyle) => void;
}) {
  const [currentGender, setCurrentGender] = useState<CompanionGender | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COMPANION_STORAGE_KEY) as CompanionGender | null;
    if (stored === "female" || stored === "male") setCurrentGender(stored);
  }, []);

  const companion = currentGender ? COMPANIONS[currentGender] : null;

  const handleSwitch = () => {
    const next: CompanionGender = currentGender === "female" ? "male" : "female";
    setCurrentGender(next);
    localStorage.setItem(COMPANION_STORAGE_KEY, next);
  };

  return (
    <SoftCard as="section" className="p-5">
      <h2 className="text-lg font-semibold">Companion Settings</h2>
      <p className="mt-2 text-sm text-zinc-600">
        Customize your child&apos;s learning companion appearance.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <p className="text-sm font-medium text-zinc-700">Companion Avatar Style</p>
          <div className="mt-2 flex gap-3">
            <label
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm transition-colors ${
                avatarStyle === "human"
                  ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
              }`}
            >
              <input
                type="radio"
                name="avatar-style"
                value="human"
                checked={avatarStyle === "human"}
                onChange={() => setAvatarStyle("human")}
                className="h-4 w-4 accent-emerald-600"
              />
              Human photo
            </label>
            <label
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm transition-colors ${
                avatarStyle === "animated"
                  ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
              }`}
            >
              <input
                type="radio"
                name="avatar-style"
                value="animated"
                checked={avatarStyle === "animated"}
                onChange={() => setAvatarStyle("animated")}
                className="h-4 w-4 accent-emerald-600"
              />
              Animated cartoon
            </label>
          </div>
        </div>

        {companion && currentGender && (
          <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
            <CompanionAvatarSVG
              gender={currentGender}
              size={48}
              previewImageUrl={companion.previewImageUrl}
              avatarStyle={avatarStyle}
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-zinc-800">
                Current companion: {companion.name}
              </p>
              <p className="text-xs text-zinc-500">{companion.tagline}</p>
            </div>
            <button
              type="button"
              onClick={handleSwitch}
              className="ui-soft-button ui-focus-ring rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:border-zinc-300"
            >
              Switch companion
            </button>
          </div>
        )}
      </div>
    </SoftCard>
  );
}
