import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import PartnersClient from "./partners-console-client";
import type { JurisdictionRow, PartnerRow, TierRow } from "./partners-console-client";

export const dynamic = "force-dynamic";

function parseAccountClassFromMetadata(metadata: unknown): "SCHOOL" | "TEACHER" | null {
  if (!metadata || typeof metadata !== "object") return null;
  const candidate = (metadata as Record<string, unknown>).accountClass;
  if (typeof candidate !== "string") return null;
  const normalized = candidate.trim().toUpperCase();
  return normalized === "SCHOOL" || normalized === "TEACHER" ? normalized : null;
}

export default async function AdminPartnersPage() {
  const admin = createSupabaseAdminClient();
  const [partnerPayload, jurisdictionPayload] = await Promise.all([
    admin
      .from("partners")
      .select(
        "id, display_name, legal_name, partner_type, contact_email, country_code, onboarding_status, compliance_status, payout_status, kyc_status, metadata",
      )
      .order("created_at", { ascending: false })
      .limit(5000),
    admin
      .from("partner_reward_tiers")
      .select("id, tier_code, tier_name, commission_rate")
      .order("commission_rate", { ascending: true }),
  ]);

  const jurisdictionResult = await admin
    .from("partner_jurisdiction_rules")
    .select(
      "id, country_code, jurisdiction_name, allow_engagement, allow_payouts, requires_manual_review, requires_w8, default_withholding_rate, sanctions_program",
    )
    .order("country_code", { ascending: true });
  const initialPartners = ((partnerPayload.data ?? []) as Array<
    PartnerRow & { metadata?: Record<string, unknown> | null }
  >).map((partner) => ({
    id: partner.id,
    display_name: partner.display_name,
    legal_name: partner.legal_name,
    partner_type: partner.partner_type,
    contact_email: partner.contact_email,
    country_code: partner.country_code,
    onboarding_status: partner.onboarding_status,
    compliance_status: partner.compliance_status,
    payout_status: partner.payout_status,
    kyc_status: partner.kyc_status,
    account_class: parseAccountClassFromMetadata(partner.metadata),
  }));

  return (
    <PartnersClient
      initialPartners={initialPartners}
      initialTiers={(jurisdictionPayload.data ?? []) as TierRow[]}
      initialJurisdictions={(jurisdictionResult.data ?? []) as JurisdictionRow[]}
    />
  );
}
