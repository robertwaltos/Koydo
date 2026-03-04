import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { buildCapTableRows, loadInvestorDataset } from "@/lib/finance/investor-reporting";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const holdingSchema = z.object({
  investorClassId: z.string().uuid(),
  sharesOwned: z.number().min(0),
  ownershipPercent: z.number().min(0).max(100).optional().nullable(),
  acquisitionDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  acquisitionPriceCents: z.number().int().min(0).optional().nullable(),
  costBasisCents: z.number().int().min(0).optional().nullable(),
  status: z.enum(["active", "transferred", "redeemed", "canceled"]).default("active"),
  vestingTerms: z.string().max(2000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

const bankAccountSchema = z.object({
  accountHolderName: z.string().min(2).max(200),
  bankName: z.string().min(2).max(200),
  accountType: z.enum(["checking", "savings", "custodial", "other"]).default("checking"),
  payoutMethod: z.enum(["ach", "wire", "swift", "sepa", "check", "other"]).default("ach"),
  currency: z.string().length(3).default("USD"),
  countryCode: z.string().length(2).default("US"),
  routingNumber: z.string().max(40).optional().nullable(),
  accountNumber: z.string().max(40).optional().nullable(),
  iban: z.string().max(40).optional().nullable(),
  swiftBic: z.string().max(20).optional().nullable(),
  verificationStatus: z.enum(["pending", "verified", "failed", "rejected"]).default("pending"),
  isPrimary: z.boolean().default(true),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

const createSchema = z.object({
  legalName: z.string().min(2).max(200),
  investorType: z.enum(["individual", "entity", "fund", "trust", "other"]).default("individual"),
  contactEmail: z.string().email().optional().nullable(),
  contactPhone: z.string().max(80).optional().nullable(),
  contactAddress: z.string().max(2000).optional().nullable(),
  taxIdentifier: z.string().max(32).optional().nullable(),
  accreditationStatus: z
    .enum(["pending", "verified", "rejected", "not_required"])
    .default("pending"),
  kycStatus: z.enum(["pending", "verified", "rejected"]).default("pending"),
  amlStatus: z.enum(["pending", "clear", "flagged"]).default("pending"),
  onboardingStatus: z.enum(["prospect", "active", "paused", "offboarded"]).default("prospect"),
  notes: z.string().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  primaryBankAccount: bankAccountSchema.optional(),
  holdings: z.array(holdingSchema).optional(),
});

function toLast4(value: string | null | undefined) {
  if (!value) return null;
  const normalized = value.replace(/\s+/g, "");
  if (!normalized) return null;
  return normalized.slice(-4);
}

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const admin = createSupabaseAdminClient();
    const dataset = await loadInvestorDataset(admin, { limit: 20000 });
    const capTable = buildCapTableRows(dataset);

    return NextResponse.json({
      investors: dataset.investors,
      classes: dataset.investorClasses,
      holdings: dataset.holdings,
      bankAccounts: dataset.bankAccounts,
      capTable,
      summary: {
        investorCount: dataset.investors.length,
        activeHoldingCount: dataset.holdings.filter((holding) => holding.status === "active").length,
        verifiedPrimaryBankCount: dataset.bankAccounts.filter(
          (bankAccount) => bankAccount.is_primary && bankAccount.verification_status === "verified",
        ).length,
      },
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: investor, error: investorError } = await admin
    .from("investors")
    .insert({
      legal_name: parsed.data.legalName.trim(),
      investor_type: parsed.data.investorType,
      contact_email: parsed.data.contactEmail?.trim() || null,
      contact_phone: parsed.data.contactPhone?.trim() || null,
      contact_address: parsed.data.contactAddress?.trim() || null,
      tax_identifier_last4: toLast4(parsed.data.taxIdentifier),
      accreditation_status: parsed.data.accreditationStatus,
      kyc_status: parsed.data.kycStatus,
      aml_status: parsed.data.amlStatus,
      onboarding_status: parsed.data.onboardingStatus,
      notes: parsed.data.notes?.trim() || null,
      metadata: parsed.data.metadata ?? {},
    })
    .select(
      "id, legal_name, investor_type, contact_email, contact_phone, contact_address, accreditation_status, kyc_status, aml_status, onboarding_status, notes, metadata, created_at, updated_at",
    )
    .single();

  if (investorError) {
    console.error("Unexpected API error.", toSafeErrorRecord(investorError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  let bankAccount = null;
  if (parsed.data.primaryBankAccount) {
    const bank = parsed.data.primaryBankAccount;
    const { data: insertedBankAccount, error: bankError } = await admin
      .from("investor_bank_accounts")
      .insert({
        investor_id: investor.id,
        account_holder_name: bank.accountHolderName.trim(),
        bank_name: bank.bankName.trim(),
        account_type: bank.accountType,
        payout_method: bank.payoutMethod,
        currency: bank.currency.toUpperCase(),
        country_code: bank.countryCode.toUpperCase(),
        routing_number_last4: toLast4(bank.routingNumber),
        account_number_last4: toLast4(bank.accountNumber),
        iban_last4: toLast4(bank.iban),
        swift_bic: bank.swiftBic?.trim() || null,
        verification_status: bank.verificationStatus,
        is_primary: bank.isPrimary,
        metadata: bank.metadata ?? {},
      })
      .select(
        "id, investor_id, account_holder_name, bank_name, account_type, payout_method, currency, country_code, routing_number_last4, account_number_last4, iban_last4, swift_bic, verification_status, is_primary, metadata, created_at, updated_at",
      )
      .single();

    if (bankError) {
      console.error("Unexpected API error.", toSafeErrorRecord(bankError));
      return NextResponse.json({ error: "Failed to create investor bank account." }, { status: 500 });
    }
    bankAccount = insertedBankAccount;
  }

  let holdings: unknown[] = [];
  if (parsed.data.holdings && parsed.data.holdings.length > 0) {
    const { data: insertedHoldings, error: holdingsError } = await admin
      .from("investor_holdings")
      .insert(
        parsed.data.holdings.map((holding) => ({
          investor_id: investor.id,
          investor_class_id: holding.investorClassId,
          shares_owned: holding.sharesOwned,
          ownership_percent: holding.ownershipPercent ?? null,
          acquisition_date: holding.acquisitionDate ?? null,
          acquisition_price_cents: holding.acquisitionPriceCents ?? null,
          cost_basis_cents: holding.costBasisCents ?? null,
          status: holding.status,
          vesting_terms: holding.vestingTerms?.trim() || null,
          metadata: holding.metadata ?? {},
        })),
      )
      .select(
        "id, investor_id, investor_class_id, shares_owned, ownership_percent, acquisition_date, acquisition_price_cents, cost_basis_cents, status, vesting_terms, metadata, created_at, updated_at",
      );

    if (holdingsError) {
      console.error("Unexpected API error.", toSafeErrorRecord(holdingsError));
      return NextResponse.json({ error: "Failed to create investor holdings." }, { status: 500 });
    }
    holdings = insertedHoldings ?? [];
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_investor_create",
    metadata: {
      investorId: investor.id,
      legalName: investor.legal_name,
      investorType: investor.investor_type,
      holdingCount: holdings.length,
      createdPrimaryBankAccount: Boolean(bankAccount),
    },
  });

  return NextResponse.json({
    success: true,
    investor,
    primaryBankAccount: bankAccount,
    holdings,
  });
}
