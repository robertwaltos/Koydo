"use client";

import { FormEvent, useState } from "react";

export type PartnerRow = {
  id: string;
  display_name: string;
  legal_name: string;
  partner_type: string;
  account_class?: "SCHOOL" | "TEACHER" | null;
  contact_email: string;
  country_code: string;
  onboarding_status: string;
  compliance_status: string;
  payout_status: string;
  kyc_status: string;
};

export type TierRow = {
  id: string;
  tier_code: string;
  tier_name: string;
  commission_rate: number;
};

export type JurisdictionRow = {
  id: string;
  country_code: string;
  jurisdiction_name: string;
  allow_engagement: boolean;
  allow_payouts: boolean;
  requires_manual_review: boolean;
  requires_w8: boolean;
  default_withholding_rate: number;
  sanctions_program: string | null;
};

function pct(value: number) {
  return `${(Number(value) * 100).toFixed(2)}%`;
}

function usd(cents: number) {
  return (Number(cents) / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function PartnersClient({
  initialPartners,
  initialTiers,
  initialJurisdictions,
}: {
  initialPartners: PartnerRow[];
  initialTiers: TierRow[];
  initialJurisdictions: JurisdictionRow[];
}) {
  const [status, setStatus] = useState("");
  const [partners, setPartners] = useState<PartnerRow[]>(initialPartners);
  const [tiers, setTiers] = useState<TierRow[]>(initialTiers);
  const [jurisdictions, setJurisdictions] = useState<JurisdictionRow[]>(initialJurisdictions);

  const [createPartner, setCreatePartner] = useState({
    displayName: "",
    legalName: "",
    partnerType: "influencer",
    accountClass: "SCHOOL",
    contactEmail: "",
    countryCode: "US",
    rewardTierCode: "",
  });
  const [createJurisdiction, setCreateJurisdiction] = useState({
    countryCode: "",
    jurisdictionName: "",
    allowEngagement: true,
    allowPayouts: true,
    requiresManualReview: false,
    requiresW8: false,
    defaultWithholdingRate: 0.3,
    sanctionsProgram: "",
  });
  const [withholding, setWithholding] = useState({
    partnerId: "",
    countryCode: "US",
    sourceIncomeType: "service_commission",
    usSourceIncome: true,
    treatyClaimed: false,
    treatyCountryCode: "",
    determinationStatus: "pending",
    approvedWithholdingRate: 0.3,
  });

  async function getJson(url: string) {
    const response = await fetch(url);
    const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;
    if (!response.ok) {
      throw new Error(String(payload.error ?? "Request failed."));
    }
    return payload;
  }

  async function postJson(url: string, body: unknown) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;
    if (!response.ok) {
      throw new Error(String(payload.error ?? "Request failed."));
    }
    return payload;
  }

  async function refresh() {
    const [partnerPayload, jurisdictionPayload] = await Promise.all([
      getJson("/api/admin/partners"),
      getJson("/api/admin/partners/compliance/jurisdictions"),
    ]);
    setPartners((partnerPayload.partners as PartnerRow[]) ?? []);
    setTiers((partnerPayload.tiers as TierRow[]) ?? []);
    setJurisdictions((jurisdictionPayload.jurisdictions as JurisdictionRow[]) ?? []);
  }

  async function submitPartner(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      await postJson("/api/admin/partners", {
        displayName: createPartner.displayName,
        legalName: createPartner.legalName,
        partnerType: createPartner.partnerType,
        accountClass: createPartner.partnerType === "school" ? createPartner.accountClass : null,
        contactEmail: createPartner.contactEmail,
        countryCode: createPartner.countryCode,
        rewardTierCode: createPartner.rewardTierCode || null,
      });
      setStatus("Partner created.");
      setCreatePartner({
        displayName: "",
        legalName: "",
        partnerType: "influencer",
        accountClass: "SCHOOL",
        contactEmail: "",
        countryCode: "US",
        rewardTierCode: "",
      });
      await refresh();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create partner.");
    }
  }

  async function submitJurisdiction(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      await postJson("/api/admin/partners/compliance/jurisdictions", createJurisdiction);
      setStatus("Jurisdiction rule saved.");
      setCreateJurisdiction({
        countryCode: "",
        jurisdictionName: "",
        allowEngagement: true,
        allowPayouts: true,
        requiresManualReview: false,
        requiresW8: false,
        defaultWithholdingRate: 0.3,
        sanctionsProgram: "",
      });
      await refresh();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to save jurisdiction rule.");
    }
  }

  async function submitWithholding(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      await postJson("/api/admin/partners/compliance/withholding", {
        partnerId: withholding.partnerId,
        countryCode: withholding.countryCode,
        sourceIncomeType: withholding.sourceIncomeType,
        usSourceIncome: withholding.usSourceIncome,
        treatyClaimed: withholding.treatyClaimed,
        treatyCountryCode: withholding.treatyCountryCode || null,
        determinationStatus: withholding.determinationStatus,
        approvedWithholdingRate:
          withholding.determinationStatus === "approved" ? withholding.approvedWithholdingRate : null,
      });
      setStatus("Withholding determination saved.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to save withholding determination.");
    }
  }

  async function runComplianceMonitor() {
    setStatus("");
    try {
      const payload = await postJson("/api/admin/partners/compliance/monitor/run", {});
      const summary = payload.summary as { openAlertCount?: number; partnerCount?: number } | undefined;
      setStatus(
        `Compliance monitor completed. Partners scanned: ${summary?.partnerCount ?? 0}, alerts opened/updated: ${summary?.openAlertCount ?? 0}.`,
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to run compliance monitor.");
    }
  }

  async function runPayoutScheduler(dryRun: boolean) {
    setStatus("");
    try {
      const payload = await postJson("/api/admin/partners/payouts/scheduler/run", { dryRun });
      const summary = payload.schedulerSummary as { eligibleCount?: number; totalEligibleCents?: number } | undefined;
      setStatus(
        `${dryRun ? "Payout dry run" : "Payout scheduler"} completed. Eligible: ${summary?.eligibleCount ?? 0}, total: ${usd(summary?.totalEligibleCents ?? 0)}.`,
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to run payout scheduler.");
    }
  }

  return (
    <main className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-zinc-100">Partner Program Console</h1>
        <p className="text-sm text-zinc-400">
          Manage partner onboarding, jurisdiction policies, withholding determinations, compliance monitor, and payout scheduling.
        </p>
        {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <form onSubmit={submitPartner} className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
          <h2 className="text-lg font-semibold text-zinc-100">Create Partner</h2>
          <input className="w-full rounded bg-zinc-800 p-2 text-sm" placeholder="Display name" value={createPartner.displayName} onChange={(event) => setCreatePartner((prev) => ({ ...prev, displayName: event.target.value }))} />
          <input className="w-full rounded bg-zinc-800 p-2 text-sm" placeholder="Legal name" value={createPartner.legalName} onChange={(event) => setCreatePartner((prev) => ({ ...prev, legalName: event.target.value }))} />
          <div className="grid grid-cols-2 gap-2">
            <select className="rounded bg-zinc-800 p-2 text-sm" value={createPartner.partnerType} onChange={(event) => setCreatePartner((prev) => ({ ...prev, partnerType: event.target.value }))}>
              <option value="influencer">influencer</option>
              <option value="affiliate">affiliate</option>
              <option value="agency">agency</option>
              <option value="school">school</option>
              <option value="creator">creator</option>
              <option value="other">other</option>
            </select>
            <select className="rounded bg-zinc-800 p-2 text-sm" value={createPartner.accountClass} disabled={createPartner.partnerType !== "school"} onChange={(event) => setCreatePartner((prev) => ({ ...prev, accountClass: event.target.value }))}>
              <option value="SCHOOL">SCHOOL</option>
              <option value="TEACHER">TEACHER</option>
            </select>
          </div>
          <input className="w-full rounded bg-zinc-800 p-2 text-sm" placeholder="Contact email" value={createPartner.contactEmail} onChange={(event) => setCreatePartner((prev) => ({ ...prev, contactEmail: event.target.value }))} />
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded bg-zinc-800 p-2 text-sm" placeholder="Country (US)" value={createPartner.countryCode} onChange={(event) => setCreatePartner((prev) => ({ ...prev, countryCode: event.target.value.toUpperCase() }))} />
            <input className="rounded bg-zinc-800 p-2 text-sm" placeholder="Tier code (e.g. SILVER)" value={createPartner.rewardTierCode} onChange={(event) => setCreatePartner((prev) => ({ ...prev, rewardTierCode: event.target.value.toUpperCase() }))} />
          </div>
          <button className="rounded bg-emerald-600 px-3 py-2 text-sm font-medium text-white" type="submit">Create Partner</button>
        </form>

        <form onSubmit={submitWithholding} className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
          <h2 className="text-lg font-semibold text-zinc-100">Withholding Determination</h2>
          <select className="w-full rounded bg-zinc-800 p-2 text-sm" value={withholding.partnerId} onChange={(event) => setWithholding((prev) => ({ ...prev, partnerId: event.target.value }))}>
            <option value="">Select partner</option>
            {partners.map((partner) => (
              <option key={partner.id} value={partner.id}>{partner.legal_name}</option>
            ))}
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded bg-zinc-800 p-2 text-sm" placeholder="Country" value={withholding.countryCode} onChange={(event) => setWithholding((prev) => ({ ...prev, countryCode: event.target.value.toUpperCase() }))} />
            <input className="rounded bg-zinc-800 p-2 text-sm" placeholder="Treaty country (optional)" value={withholding.treatyCountryCode} onChange={(event) => setWithholding((prev) => ({ ...prev, treatyCountryCode: event.target.value.toUpperCase() }))} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select className="rounded bg-zinc-800 p-2 text-sm" value={withholding.determinationStatus} onChange={(event) => setWithholding((prev) => ({ ...prev, determinationStatus: event.target.value }))}>
              <option value="pending">pending</option>
              <option value="approved">approved</option>
              <option value="rejected">rejected</option>
              <option value="expired">expired</option>
            </select>
            <input className="rounded bg-zinc-800 p-2 text-sm" type="number" min={0} max={1} step={0.0001} value={withholding.approvedWithholdingRate} onChange={(event) => setWithholding((prev) => ({ ...prev, approvedWithholdingRate: Number(event.target.value) }))} />
          </div>
          <label className="flex items-center gap-2 text-sm text-zinc-300">
            <input type="checkbox" checked={withholding.treatyClaimed} onChange={(event) => setWithholding((prev) => ({ ...prev, treatyClaimed: event.target.checked }))} />
            Treaty claimed
          </label>
          <button className="rounded bg-emerald-600 px-3 py-2 text-sm font-medium text-white" type="submit">Save Determination</button>
        </form>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <form onSubmit={submitJurisdiction} className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
          <h2 className="text-lg font-semibold text-zinc-100">Jurisdiction Rule</h2>
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded bg-zinc-800 p-2 text-sm" placeholder="Country code" value={createJurisdiction.countryCode} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, countryCode: event.target.value.toUpperCase() }))} />
            <input className="rounded bg-zinc-800 p-2 text-sm" placeholder="Name" value={createJurisdiction.jurisdictionName} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, jurisdictionName: event.target.value }))} />
          </div>
          <input className="w-full rounded bg-zinc-800 p-2 text-sm" placeholder="Sanctions program (optional)" value={createJurisdiction.sanctionsProgram} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, sanctionsProgram: event.target.value }))} />
          <input className="w-full rounded bg-zinc-800 p-2 text-sm" type="number" min={0} max={1} step={0.0001} value={createJurisdiction.defaultWithholdingRate} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, defaultWithholdingRate: Number(event.target.value) }))} />
          <div className="grid grid-cols-2 gap-2 text-sm text-zinc-300">
            <label className="flex items-center gap-2"><input type="checkbox" checked={createJurisdiction.allowEngagement} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, allowEngagement: event.target.checked }))} />Allow engagement</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={createJurisdiction.allowPayouts} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, allowPayouts: event.target.checked }))} />Allow payouts</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={createJurisdiction.requiresManualReview} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, requiresManualReview: event.target.checked }))} />Manual review required</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={createJurisdiction.requiresW8} onChange={(event) => setCreateJurisdiction((prev) => ({ ...prev, requiresW8: event.target.checked }))} />Require W-8</label>
          </div>
          <button className="rounded bg-emerald-600 px-3 py-2 text-sm font-medium text-white" type="submit">Save Jurisdiction Rule</button>
        </form>

        <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
          <h2 className="text-lg font-semibold text-zinc-100">Scheduled Jobs</h2>
          <p className="text-sm text-zinc-400">Run compliance monitoring and payout scheduling without manual ledger manipulation.</p>
          <div className="flex flex-wrap gap-2">
            <button className="rounded bg-zinc-700 px-3 py-2 text-sm text-zinc-100" onClick={runComplianceMonitor}>Run Compliance Monitor</button>
            <button className="rounded bg-zinc-700 px-3 py-2 text-sm text-zinc-100" onClick={() => runPayoutScheduler(true)}>Payout Dry Run</button>
            <button className="rounded bg-emerald-600 px-3 py-2 text-sm text-white" onClick={() => runPayoutScheduler(false)}>Run Payout Scheduler</button>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
        <h2 className="text-lg font-semibold text-zinc-100">Partner Snapshot</h2>
        <div className="grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
          {partners.slice(0, 100).map((partner) => (
            <div key={partner.id} className="rounded border border-zinc-800 p-2">
              <p className="font-medium text-zinc-100">{partner.legal_name}</p>
              <p>{partner.partner_type}{partner.account_class ? `/${partner.account_class}` : ""} | {partner.country_code}</p>
              <p>onboarding={partner.onboarding_status} | compliance={partner.compliance_status}</p>
              <p>payout={partner.payout_status} | kyc={partner.kyc_status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
        <h2 className="text-lg font-semibold text-zinc-100">Reward Tiers and Jurisdictions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            {tiers.map((tier) => (
              <p key={tier.id} className="text-sm text-zinc-300">
                {tier.tier_code} ({tier.tier_name}) commission {pct(tier.commission_rate)}
              </p>
            ))}
          </div>
          <div className="space-y-2">
            {jurisdictions.slice(0, 120).map((rule) => (
              <p key={rule.id} className="text-sm text-zinc-300">
                {rule.country_code}: {rule.allow_payouts ? "payout ok" : "payout blocked"}, default withholding {pct(rule.default_withholding_rate)}
                {rule.sanctions_program ? `, sanctions=${rule.sanctions_program}` : ""}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
