"use client";

import { FormEvent, useState } from "react";
import type {
  BusinessAccountRow,
  FinanceAnalyticsOverview,
  FinanceExpenseCategorySummary,
  FinanceLedgerLine,
  FinanceMonthlySummary,
  FinanceRevenueChannelSummary,
  FinanceTaxProjection,
  OwnerTaxProfileRow,
} from "@/lib/finance/types";
import type {
  BankAuditFinding,
  CapTableRow,
  DividendRegisterRow,
} from "@/lib/finance/investor-reporting";

type InvestorClassOption = {
  id: string;
  class_code: string;
  class_name: string;
  is_active: boolean;
};

type DividendDeclarationOption = {
  id: string;
  declaration_name: string;
  status: string;
  payment_date: string;
  record_date: string;
};

type InvestorOption = {
  id: string;
  legal_name: string;
  contact_email: string | null;
};

type PortalAccessRow = {
  id: string;
  investor_id: string;
  user_id: string;
  role: string;
  status: string;
  created_at: string;
};

type BankConnectionRow = {
  id: string;
  provider: string;
  institution_name: string;
  account_name: string | null;
  account_mask: string | null;
  status: string;
  created_at: string;
};

type BankImportRow = {
  id: string;
  source_type: string;
  period_start: string;
  period_end: string;
  line_count: number;
  import_status: string;
  created_at: string;
};

type BankRunRow = {
  id: string;
  period_start: string;
  period_end: string;
  status: string;
  matched_count: number;
  review_count: number;
  unmatched_count: number;
  created_at: string;
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function usd(cents: number) {
  return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default function FinanceClient({
  initialAccounts,
  initialInvestors,
  initialTaxProfile,
  initialLineItems,
  initialRevenueChannels,
  initialExpenseCategories,
  initialMonthly,
  initialTaxProjection,
  initialClasses,
  initialCapTableRows,
  initialDividendRows,
  initialFindings,
  initialDeclarations,
  initialPortalAccess,
  initialBankConnections,
  initialBankImports,
  initialBankRuns,
  initialAnalytics,
  initialAnalyticsError,
}: {
  initialAccounts: BusinessAccountRow[];
  initialInvestors: InvestorOption[];
  initialTaxProfile: OwnerTaxProfileRow | null;
  initialLineItems: FinanceLedgerLine[];
  initialRevenueChannels: FinanceRevenueChannelSummary[];
  initialExpenseCategories: FinanceExpenseCategorySummary[];
  initialMonthly: FinanceMonthlySummary[];
  initialTaxProjection: FinanceTaxProjection | null;
  initialClasses: InvestorClassOption[];
  initialCapTableRows: CapTableRow[];
  initialDividendRows: DividendRegisterRow[];
  initialFindings: BankAuditFinding[];
  initialDeclarations: DividendDeclarationOption[];
  initialPortalAccess: PortalAccessRow[];
  initialBankConnections: BankConnectionRow[];
  initialBankImports: BankImportRow[];
  initialBankRuns: BankRunRow[];
  initialAnalytics: FinanceAnalyticsOverview | null;
  initialAnalyticsError: string | null;
}) {
  const [classes, setClasses] = useState(initialClasses);
  const [declarations, setDeclarations] = useState(initialDeclarations);
  const [status, setStatus] = useState("");
  const [portalStatus, setPortalStatus] = useState("");
  const [bankStatus, setBankStatus] = useState("");
  const [portalAccess, setPortalAccess] = useState(initialPortalAccess);
  const [bankConnections, setBankConnections] = useState(initialBankConnections);
  const [bankImports, setBankImports] = useState(initialBankImports);
  const [bankRuns, setBankRuns] = useState(initialBankRuns);
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const [analyticsStatus, setAnalyticsStatus] = useState(initialAnalyticsError ?? "");
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  const [tx, setTx] = useState({
    occurredOn: today(),
    description: "",
    amountCents: 0,
    debitAccountCode: initialAccounts[0]?.code ?? "",
    creditAccountCode: initialAccounts[1]?.code ?? initialAccounts[0]?.code ?? "",
  });
  const [tax, setTax] = useState({
    ownerName: initialTaxProfile?.owner_name ?? "Owner",
    filingStatus: initialTaxProfile?.filing_status ?? "single",
    federalTaxRate: initialTaxProfile?.federal_tax_rate ?? 0.24,
    stateTaxRate: initialTaxProfile?.state_tax_rate ?? 0.05,
    selfEmploymentTaxRate: initialTaxProfile?.self_employment_tax_rate ?? 0.153,
    localTaxRate: initialTaxProfile?.local_tax_rate ?? 0,
    additionalTaxRate: initialTaxProfile?.additional_tax_rate ?? 0,
    deductionRate: initialTaxProfile?.deduction_rate ?? 0,
    notes: initialTaxProfile?.notes ?? "",
  });
  const [invClass, setInvClass] = useState({ classCode: "", className: "" });
  const [investor, setInvestor] = useState({
    legalName: "",
    contactEmail: "",
    classId: "",
    sharesOwned: 0,
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    routingNumber: "",
  });
  const [dividend, setDividend] = useState({
    declarationName: "",
    investorClassId: "",
    recordDate: today(),
    paymentDate: today(),
    amountPerShareCents: 0,
    withholdingRate: 0,
  });
  const [settle, setSettle] = useState({
    declarationId: initialDeclarations[0]?.id ?? "",
    paymentReferencePrefix: "",
  });
  const [portalAccessForm, setPortalAccessForm] = useState({
    investorId: initialInvestors[0]?.id ?? "",
    userId: "",
    role: "owner",
    status: "active",
  });
  const [bankConnectionForm, setBankConnectionForm] = useState({
    provider: "manual_api",
    institutionName: "",
    accountName: "",
    accountMask: "",
    status: "pending",
  });
  const [plaid, setPlaid] = useState({
    linkToken: "",
    publicToken: "",
    syncConnectionId:
      initialBankConnections.find((entry) => entry.provider === "plaid")?.id ?? "",
    periodStart: today(),
    periodEnd: today(),
  });
  const [statementImport, setStatementImport] = useState({
    bankConnectionId: initialBankConnections[0]?.id ?? "",
    sourceType: "manual_entry",
    periodStart: today(),
    periodEnd: today(),
    statementDate: today(),
    fileReference: "",
    linesJson:
      '[{"lineDate":"2026-01-02","description":"ACH CREDIT","amountCents":125000,"direction":"credit"}]',
  });
  const [reconciliation, setReconciliation] = useState({
    periodStart: today(),
    periodEnd: today(),
    importId: initialBankImports[0]?.id ?? "",
    dateToleranceDays: 3,
  });

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

  async function refreshBanking() {
    const [connectionsResponse, reconciliationResponse] = await Promise.all([
      fetch("/api/admin/finance/banking/connections"),
      fetch("/api/admin/finance/banking/reconciliation?limit=200"),
    ]);
    const connectionsPayload = (await connectionsResponse.json().catch(() => ({}))) as {
      error?: string;
      connections?: BankConnectionRow[];
    };
    if (!connectionsResponse.ok) {
      throw new Error(connectionsPayload.error ?? "Failed to refresh bank connections.");
    }
    setBankConnections(connectionsPayload.connections ?? []);

    const reconciliationPayload = (await reconciliationResponse.json().catch(() => ({}))) as {
      error?: string;
      imports?: BankImportRow[];
      runs?: BankRunRow[];
    };
    if (!reconciliationResponse.ok) {
      throw new Error(reconciliationPayload.error ?? "Failed to refresh reconciliation data.");
    }
    setBankImports(reconciliationPayload.imports ?? []);
    setBankRuns(reconciliationPayload.runs ?? []);
  }

  async function refreshAnalytics(runPipeline = false) {
    setAnalyticsLoading(true);
    setAnalyticsStatus("");
    try {
      if (runPipeline) {
        const payload = (await postJson("/api/admin/finance/analytics/pipeline/run", {
          windowDays: 30,
          reconciliationDays: 120,
          maxRowsPerSource: 12000,
          runReconciliation: true,
        })) as {
          snapshot?: FinanceAnalyticsOverview;
        };
        if (payload.snapshot) {
          setAnalytics(payload.snapshot);
          setAnalyticsStatus(`Analytics pipeline completed at ${payload.snapshot.generated_at}.`);
        } else {
          setAnalyticsStatus("Analytics pipeline completed but no snapshot payload was returned.");
        }
        return;
      }

      const response = await fetch("/api/admin/finance/analytics/overview?windowDays=30&refresh=0");
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        snapshot?: FinanceAnalyticsOverview;
      };
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to refresh analytics snapshot.");
      }
      if (payload.snapshot) {
        setAnalytics(payload.snapshot);
      }
      setAnalyticsStatus("Analytics snapshot refreshed.");
    } catch (error) {
      setAnalyticsStatus(
        error instanceof Error ? error.message : "Failed to refresh finance analytics.",
      );
    } finally {
      setAnalyticsLoading(false);
    }
  }

  async function savePortalAccess(event: FormEvent) {
    event.preventDefault();
    setPortalStatus("");
    try {
      const payload = (await postJson("/api/admin/finance/investor-access", {
        investorId: portalAccessForm.investorId,
        userId: portalAccessForm.userId,
        role: portalAccessForm.role,
        status: portalAccessForm.status,
      })) as { access?: PortalAccessRow };
      if (payload.access) {
        setPortalAccess((prev) => {
          const filtered = prev.filter((entry) => entry.id !== payload.access!.id);
          return [payload.access!, ...filtered].slice(0, 2000);
        });
      }
      setPortalStatus("Investor portal access updated.");
    } catch (error) {
      setPortalStatus(error instanceof Error ? error.message : "Failed to update investor portal access.");
    }
  }

  async function saveBankConnection(event: FormEvent) {
    event.preventDefault();
    setBankStatus("");
    try {
      const payload = (await postJson("/api/admin/finance/banking/connections", {
        provider: bankConnectionForm.provider,
        institutionName: bankConnectionForm.institutionName,
        accountName: bankConnectionForm.accountName || null,
        accountMask: bankConnectionForm.accountMask || null,
        status: bankConnectionForm.status,
      })) as { connection?: BankConnectionRow };
      if (payload.connection) {
        setBankConnections((prev) => [payload.connection!, ...prev].slice(0, 500));
      }
      setBankStatus("Bank connection saved.");
      setBankConnectionForm((prev) => ({ ...prev, institutionName: "", accountName: "", accountMask: "" }));
    } catch (error) {
      setBankStatus(error instanceof Error ? error.message : "Failed to save bank connection.");
    }
  }

  async function createPlaidLinkToken() {
    setBankStatus("");
    try {
      const payload = (await postJson("/api/admin/finance/banking/plaid/link-token", {})) as {
        linkToken?: string;
        environment?: string;
      };
      setPlaid((prev) => ({ ...prev, linkToken: payload.linkToken ?? "" }));
      setBankStatus(
        payload.linkToken
          ? `Plaid link token created (${payload.environment ?? "unknown"}).`
          : "Plaid link token missing.",
      );
    } catch (error) {
      setBankStatus(error instanceof Error ? error.message : "Failed to create Plaid link token.");
    }
  }

  async function exchangePlaidPublicToken(event: FormEvent) {
    event.preventDefault();
    setBankStatus("");
    try {
      const payload = (await postJson("/api/admin/finance/banking/plaid/exchange-public-token", {
        publicToken: plaid.publicToken,
      })) as { connections?: BankConnectionRow[] };
      if (payload.connections && payload.connections.length > 0) {
        setBankConnections((prev) => [...payload.connections!, ...prev].slice(0, 500));
        setPlaid((prev) => ({
          ...prev,
          publicToken: "",
          syncConnectionId: prev.syncConnectionId || payload.connections![0].id,
        }));
      }
      setBankStatus("Plaid accounts stored.");
    } catch (error) {
      setBankStatus(error instanceof Error ? error.message : "Failed to exchange Plaid public token.");
    }
  }

  async function syncPlaidStatements(event: FormEvent) {
    event.preventDefault();
    setBankStatus("");
    if (!plaid.syncConnectionId) {
      setBankStatus("Select a Plaid connection first.");
      return;
    }
    try {
      const payload = (await postJson("/api/admin/finance/banking/plaid/transactions/sync", {
        bankConnectionId: plaid.syncConnectionId,
        periodStart: plaid.periodStart,
        periodEnd: plaid.periodEnd,
      })) as { import?: BankImportRow; totals?: { pulledTransactions?: number } };
      if (payload.import) {
        setBankImports((prev) => [payload.import!, ...prev].slice(0, 500));
        setReconciliation((prev) => ({ ...prev, importId: payload.import!.id }));
      }
      setBankStatus(`Plaid sync complete (${payload.totals?.pulledTransactions ?? 0} transactions).`);
    } catch (error) {
      setBankStatus(error instanceof Error ? error.message : "Failed to sync Plaid statements.");
    }
  }

  async function importStatements(event: FormEvent) {
    event.preventDefault();
    setBankStatus("");
    try {
      const parsedLines = JSON.parse(statementImport.linesJson) as unknown;
      if (!Array.isArray(parsedLines) || parsedLines.length === 0) {
        throw new Error("linesJson must be a non-empty JSON array.");
      }
      const payload = (await postJson("/api/admin/finance/banking/statements/import", {
        bankConnectionId: statementImport.bankConnectionId || null,
        sourceType: statementImport.sourceType,
        periodStart: statementImport.periodStart,
        periodEnd: statementImport.periodEnd,
        statementDate: statementImport.statementDate,
        fileReference: statementImport.fileReference || null,
        lines: parsedLines,
      })) as { import?: BankImportRow };
      if (payload.import) {
        setBankImports((prev) => [payload.import!, ...prev].slice(0, 500));
        setReconciliation((prev) => ({ ...prev, importId: payload.import!.id }));
      }
      setBankStatus("Statement import completed.");
    } catch (error) {
      setBankStatus(error instanceof Error ? error.message : "Failed to import statement lines.");
    }
  }

  async function runReconciliation(event: FormEvent) {
    event.preventDefault();
    setBankStatus("");
    try {
      const payload = (await postJson("/api/admin/finance/banking/reconciliation/run", {
        periodStart: reconciliation.periodStart,
        periodEnd: reconciliation.periodEnd,
        importId: reconciliation.importId || undefined,
        dateToleranceDays: Number(reconciliation.dateToleranceDays),
      })) as { totals?: { matchedCount?: number; reviewCount?: number; unmatchedCount?: number } };
      await refreshBanking();
      setBankStatus(
        `Run complete: matched ${payload.totals?.matchedCount ?? 0}, review ${payload.totals?.reviewCount ?? 0}, unmatched ${payload.totals?.unmatchedCount ?? 0}.`,
      );
    } catch (error) {
      setBankStatus(error instanceof Error ? error.message : "Failed to run reconciliation.");
    }
  }

  async function saveTransaction(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      await postJson("/api/admin/finance/transactions", {
        ...tx,
        amountCents: Number(tx.amountCents),
        entryKind: "manual",
      });
      setStatus("Ledger transaction created.");
      setTx((prev) => ({ ...prev, description: "", amountCents: 0 }));
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create transaction.");
    }
  }

  async function saveTaxProfile(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      const response = await fetch("/api/admin/finance/tax-profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tax),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to update tax profile.");
      }
      setStatus("Tax profile updated.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to update tax profile.");
    }
  }

  async function saveInvestorClass(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      const payload = (await postJson("/api/admin/finance/investor-classes", invClass)) as {
        investorClass?: InvestorClassOption;
      };
      if (payload.investorClass) {
        setClasses((prev) =>
          [...prev, payload.investorClass!].sort((a, b) => a.class_code.localeCompare(b.class_code)),
        );
      }
      setStatus("Investor class created.");
      setInvClass({ classCode: "", className: "" });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create investor class.");
    }
  }

  async function saveInvestor(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      await postJson("/api/admin/finance/investors", {
        legalName: investor.legalName,
        contactEmail: investor.contactEmail || null,
        holdings:
          investor.classId && Number(investor.sharesOwned) > 0
            ? [{ investorClassId: investor.classId, sharesOwned: Number(investor.sharesOwned) }]
            : [],
        primaryBankAccount:
          investor.bankName && investor.accountHolderName
            ? {
                bankName: investor.bankName,
                accountHolderName: investor.accountHolderName,
                accountNumber: investor.accountNumber || null,
                routingNumber: investor.routingNumber || null,
              }
            : undefined,
      });
      setStatus("Investor created.");
      setInvestor({
        legalName: "",
        contactEmail: "",
        classId: "",
        sharesOwned: 0,
        bankName: "",
        accountHolderName: "",
        accountNumber: "",
        routingNumber: "",
      });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create investor.");
    }
  }

  async function saveDividend(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    try {
      const payload = (await postJson("/api/admin/finance/dividends", {
        ...dividend,
        amountPerShareCents: Number(dividend.amountPerShareCents),
        withholdingRate: Number(dividend.withholdingRate),
      })) as { declaration?: DividendDeclarationOption };
      if (payload.declaration) {
        setDeclarations((prev) => [payload.declaration!, ...prev]);
      }
      setStatus("Dividend declaration created.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create dividend declaration.");
    }
  }

  async function settleDividend(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    if (!settle.declarationId) {
      setStatus("Pick a declaration first.");
      return;
    }
    try {
      await postJson(`/api/admin/finance/dividends/${settle.declarationId}/pay`, {
        status: "paid",
        paymentReferencePrefix: settle.paymentReferencePrefix || undefined,
      });
      setStatus("Dividend payouts settled.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to settle dividend payouts.");
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border p-4">
        <h2 className="text-lg font-semibold">Actions</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Create ledger entries, configure tax profile, manage investors, and process dividends.
        </p>
        {status ? <p className="mt-2 text-sm">{status}</p> : null}
        <div className="mt-4 grid gap-4 xl:grid-cols-3">
          <form className="space-y-2 rounded border border-border p-3" onSubmit={saveTransaction}>
            <p className="font-semibold text-sm">Ledger Transaction</p>
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={tx.occurredOn} onChange={(e) => setTx((p) => ({ ...p, occurredOn: e.target.value }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Description" value={tx.description} onChange={(e) => setTx((p) => ({ ...p, description: e.target.value }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="number" min={0} placeholder="Amount cents" value={tx.amountCents} onChange={(e) => setTx((p) => ({ ...p, amountCents: Number(e.target.value) }))} />
            <select className="w-full rounded border border-border px-2 py-1 text-sm" value={tx.debitAccountCode} onChange={(e) => setTx((p) => ({ ...p, debitAccountCode: e.target.value }))}>
              {initialAccounts.map((account) => <option key={`d-${account.code}`} value={account.code}>{account.code} - {account.name}</option>)}
            </select>
            <select className="w-full rounded border border-border px-2 py-1 text-sm" value={tx.creditAccountCode} onChange={(e) => setTx((p) => ({ ...p, creditAccountCode: e.target.value }))}>
              {initialAccounts.map((account) => <option key={`c-${account.code}`} value={account.code}>{account.code} - {account.name}</option>)}
            </select>
            <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Create</button>
          </form>

          <form className="space-y-2 rounded border border-border p-3" onSubmit={saveTaxProfile}>
            <p className="font-semibold text-sm">Tax Profile</p>
            <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Owner name" value={tax.ownerName} onChange={(e) => setTax((p) => ({ ...p, ownerName: e.target.value }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="number" step="0.0001" min={0} max={1} value={tax.federalTaxRate} onChange={(e) => setTax((p) => ({ ...p, federalTaxRate: Number(e.target.value) }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="number" step="0.0001" min={0} max={1} value={tax.stateTaxRate} onChange={(e) => setTax((p) => ({ ...p, stateTaxRate: Number(e.target.value) }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="number" step="0.0001" min={0} max={1} value={tax.selfEmploymentTaxRate} onChange={(e) => setTax((p) => ({ ...p, selfEmploymentTaxRate: Number(e.target.value) }))} />
            <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Save</button>
          </form>

          <div className="space-y-4 rounded border border-border p-3">
            <form className="space-y-2" onSubmit={saveInvestorClass}>
              <p className="font-semibold text-sm">Investor Class</p>
              <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Class code" value={invClass.classCode} onChange={(e) => setInvClass((p) => ({ ...p, classCode: e.target.value }))} />
              <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Class name" value={invClass.className} onChange={(e) => setInvClass((p) => ({ ...p, className: e.target.value }))} />
              <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Create Class</button>
            </form>
            <form className="space-y-2" onSubmit={saveInvestor}>
              <p className="font-semibold text-sm">Investor</p>
              <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Legal name" value={investor.legalName} onChange={(e) => setInvestor((p) => ({ ...p, legalName: e.target.value }))} />
              <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Email" value={investor.contactEmail} onChange={(e) => setInvestor((p) => ({ ...p, contactEmail: e.target.value }))} />
              <select className="w-full rounded border border-border px-2 py-1 text-sm" value={investor.classId} onChange={(e) => setInvestor((p) => ({ ...p, classId: e.target.value }))}>
                <option value="">No holding yet</option>
                {classes.filter((c) => c.is_active).map((entry) => <option key={entry.id} value={entry.id}>{entry.class_code}</option>)}
              </select>
              <input className="w-full rounded border border-border px-2 py-1 text-sm" type="number" min={0} step="0.000001" placeholder="Shares" value={investor.sharesOwned} onChange={(e) => setInvestor((p) => ({ ...p, sharesOwned: Number(e.target.value) }))} />
              <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Bank name" value={investor.bankName} onChange={(e) => setInvestor((p) => ({ ...p, bankName: e.target.value }))} />
              <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Account holder" value={investor.accountHolderName} onChange={(e) => setInvestor((p) => ({ ...p, accountHolderName: e.target.value }))} />
              <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Create Investor</button>
            </form>
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-2">
          <form className="space-y-2 rounded border border-border p-3" onSubmit={saveDividend}>
            <p className="font-semibold text-sm">Dividend Declaration</p>
            <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Name" value={dividend.declarationName} onChange={(e) => setDividend((p) => ({ ...p, declarationName: e.target.value }))} />
            <select className="w-full rounded border border-border px-2 py-1 text-sm" value={dividend.investorClassId} onChange={(e) => setDividend((p) => ({ ...p, investorClassId: e.target.value }))}>
              <option value="">All classes</option>
              {classes.filter((c) => c.is_active).map((entry) => <option key={entry.id} value={entry.id}>{entry.class_code}</option>)}
            </select>
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={dividend.recordDate} onChange={(e) => setDividend((p) => ({ ...p, recordDate: e.target.value }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={dividend.paymentDate} onChange={(e) => setDividend((p) => ({ ...p, paymentDate: e.target.value }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" type="number" min={0} placeholder="Amount/share cents" value={dividend.amountPerShareCents} onChange={(e) => setDividend((p) => ({ ...p, amountPerShareCents: Number(e.target.value) }))} />
            <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Declare</button>
          </form>
          <form className="space-y-2 rounded border border-border p-3" onSubmit={settleDividend}>
            <p className="font-semibold text-sm">Settle Dividend</p>
            <select className="w-full rounded border border-border px-2 py-1 text-sm" value={settle.declarationId} onChange={(e) => setSettle((p) => ({ ...p, declarationId: e.target.value }))}>
              <option value="">Select declaration</option>
              {declarations.map((entry) => <option key={entry.id} value={entry.id}>{entry.declaration_name} ({entry.status})</option>)}
            </select>
            <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Payment ref prefix" value={settle.paymentReferencePrefix} onChange={(e) => setSettle((p) => ({ ...p, paymentReferencePrefix: e.target.value }))} />
            <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Settle</button>
          </form>
        </div>
      </section>

      <section className="rounded-2xl border border-border p-4">
        <h2 className="text-lg font-semibold">Investor Portal Access</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Grant/revoke investor user access for `/investor/portal`.
        </p>
        {portalStatus ? <p className="mt-2 text-sm">{portalStatus}</p> : null}
        <form className="mt-4 grid gap-3 md:grid-cols-4" onSubmit={savePortalAccess}>
          <select className="rounded border border-border px-2 py-1 text-sm" value={portalAccessForm.investorId} onChange={(e) => setPortalAccessForm((p) => ({ ...p, investorId: e.target.value }))}>
            <option value="">Select investor</option>
            {initialInvestors.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.legal_name}
              </option>
            ))}
          </select>
          <input className="rounded border border-border px-2 py-1 text-sm" placeholder="Supabase user UUID" value={portalAccessForm.userId} onChange={(e) => setPortalAccessForm((p) => ({ ...p, userId: e.target.value }))} />
          <select className="rounded border border-border px-2 py-1 text-sm" value={portalAccessForm.role} onChange={(e) => setPortalAccessForm((p) => ({ ...p, role: e.target.value }))}>
            <option value="owner">owner</option>
            <option value="finance_contact">finance_contact</option>
            <option value="auditor">auditor</option>
            <option value="viewer">viewer</option>
          </select>
          <div className="flex gap-2">
            <select className="flex-1 rounded border border-border px-2 py-1 text-sm" value={portalAccessForm.status} onChange={(e) => setPortalAccessForm((p) => ({ ...p, status: e.target.value }))}>
              <option value="active">active</option>
              <option value="invited">invited</option>
              <option value="revoked">revoked</option>
            </select>
            <button className="rounded border border-border px-3 py-1 text-sm font-semibold" type="submit">
              Save
            </button>
          </div>
        </form>
        <div className="mt-4 space-y-1 text-xs">
          {portalAccess.slice(0, 15).map((entry) => {
            const investor = initialInvestors.find((candidate) => candidate.id === entry.investor_id);
            return (
              <p key={entry.id}>
                {investor?.legal_name ?? entry.investor_id} | user={entry.user_id} | {entry.role} |{" "}
                {entry.status}
              </p>
            );
          })}
          {portalAccess.length === 0 ? <p className="text-zinc-500">No portal access mappings yet.</p> : null}
        </div>
      </section>

      <section className="rounded-2xl border border-border p-4">
        <h2 className="text-lg font-semibold">Banking Reconciliation Ops</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Direct login statement pull via Plaid plus manual/PDF/scan statement import and reconciliation.
        </p>
        {bankStatus ? <p className="mt-2 text-sm">{bankStatus}</p> : null}
        <div className="mt-4 grid gap-4 xl:grid-cols-3">
          <form className="space-y-2 rounded border border-border p-3" onSubmit={saveBankConnection}>
            <p className="font-semibold text-sm">Connection</p>
            <select className="w-full rounded border border-border px-2 py-1 text-sm" value={bankConnectionForm.provider} onChange={(e) => setBankConnectionForm((p) => ({ ...p, provider: e.target.value }))}>
              <option value="manual_api">manual_api</option>
              <option value="plaid">plaid</option>
              <option value="pdf_upload">pdf_upload</option>
              <option value="paper_scan">paper_scan</option>
              <option value="csv_manual">csv_manual</option>
              <option value="other">other</option>
            </select>
            <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Institution name" value={bankConnectionForm.institutionName} onChange={(e) => setBankConnectionForm((p) => ({ ...p, institutionName: e.target.value }))} />
            <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Account name" value={bankConnectionForm.accountName} onChange={(e) => setBankConnectionForm((p) => ({ ...p, accountName: e.target.value }))} />
            <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Save</button>
          </form>

          <div className="space-y-2 rounded border border-border p-3">
            <p className="font-semibold text-sm">Plaid</p>
            <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="button" onClick={createPlaidLinkToken}>
              Create Link Token
            </button>
            <p className="break-all rounded bg-zinc-100 p-2 text-[11px]">
              {plaid.linkToken || "No token created yet."}
            </p>
            <form className="space-y-2" onSubmit={exchangePlaidPublicToken}>
              <input className="w-full rounded border border-border px-2 py-1 text-sm" placeholder="Plaid public_token" value={plaid.publicToken} onChange={(e) => setPlaid((p) => ({ ...p, publicToken: e.target.value }))} />
              <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">
                Exchange + Store Accounts
              </button>
            </form>
            <form className="space-y-2" onSubmit={syncPlaidStatements}>
              <select className="w-full rounded border border-border px-2 py-1 text-sm" value={plaid.syncConnectionId} onChange={(e) => setPlaid((p) => ({ ...p, syncConnectionId: e.target.value }))}>
                <option value="">Select Plaid connection</option>
                {bankConnections.filter((entry) => entry.provider === "plaid").map((entry) => <option key={entry.id} value={entry.id}>{entry.institution_name} {entry.account_name ? `- ${entry.account_name}` : ""}</option>)}
              </select>
              <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={plaid.periodStart} onChange={(e) => setPlaid((p) => ({ ...p, periodStart: e.target.value }))} />
              <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={plaid.periodEnd} onChange={(e) => setPlaid((p) => ({ ...p, periodEnd: e.target.value }))} />
              <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Pull Statements</button>
            </form>
          </div>

          <div className="space-y-2 rounded border border-border p-3">
            <p className="font-semibold text-sm">Import + Reconcile</p>
            <form className="space-y-2" onSubmit={importStatements}>
              <select className="w-full rounded border border-border px-2 py-1 text-sm" value={statementImport.sourceType} onChange={(e) => setStatementImport((p) => ({ ...p, sourceType: e.target.value }))}>
                <option value="manual_entry">manual_entry</option>
                <option value="csv_manual">csv_manual</option>
                <option value="pdf_upload">pdf_upload</option>
                <option value="paper_scan">paper_scan</option>
                <option value="plaid_api">plaid_api</option>
              </select>
              <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={statementImport.periodStart} onChange={(e) => setStatementImport((p) => ({ ...p, periodStart: e.target.value }))} />
              <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={statementImport.periodEnd} onChange={(e) => setStatementImport((p) => ({ ...p, periodEnd: e.target.value }))} />
              <textarea className="h-24 w-full rounded border border-border px-2 py-1 text-[11px]" value={statementImport.linesJson} onChange={(e) => setStatementImport((p) => ({ ...p, linesJson: e.target.value }))} />
              <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Import Lines</button>
            </form>
            <form className="space-y-2" onSubmit={runReconciliation}>
              <select className="w-full rounded border border-border px-2 py-1 text-sm" value={reconciliation.importId} onChange={(e) => setReconciliation((p) => ({ ...p, importId: e.target.value }))}>
                <option value="">All imports in date window</option>
                {bankImports.map((entry) => <option key={entry.id} value={entry.id}>{entry.source_type} {entry.period_start}..{entry.period_end}</option>)}
              </select>
              <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={reconciliation.periodStart} onChange={(e) => setReconciliation((p) => ({ ...p, periodStart: e.target.value }))} />
              <input className="w-full rounded border border-border px-2 py-1 text-sm" type="date" value={reconciliation.periodEnd} onChange={(e) => setReconciliation((p) => ({ ...p, periodEnd: e.target.value }))} />
              <button className="rounded border border-border px-2 py-1 text-sm font-semibold" type="submit">Run Reconciliation</button>
              <button className="rounded border border-border px-2 py-1 text-sm" type="button" onClick={() => {
                void refreshBanking().catch((error) =>
                  setBankStatus(error instanceof Error ? error.message : "Failed to refresh banking data."),
                );
              }}>Refresh</button>
            </form>
          </div>
        </div>
        <div className="mt-4 grid gap-4 xl:grid-cols-3 text-xs">
          <article className="rounded border border-border p-3">
            <h3 className="font-semibold">Connections</h3>
            <div className="mt-2 space-y-1">
              {bankConnections.slice(0, 12).map((entry) => (
                <p key={entry.id}>
                  {entry.provider} | {entry.institution_name} | {entry.status}
                </p>
              ))}
              {bankConnections.length === 0 ? <p>No connections.</p> : null}
            </div>
          </article>
          <article className="rounded border border-border p-3">
            <h3 className="font-semibold">Imports</h3>
            <div className="mt-2 space-y-1">
              {bankImports.slice(0, 12).map((entry) => (
                <p key={entry.id}>
                  {entry.source_type} | {entry.period_start}..{entry.period_end} | {entry.import_status}
                </p>
              ))}
              {bankImports.length === 0 ? <p>No imports.</p> : null}
            </div>
          </article>
          <article className="rounded border border-border p-3">
            <h3 className="font-semibold">Runs</h3>
            <div className="mt-2 space-y-1">
              {bankRuns.slice(0, 12).map((entry) => (
                <p key={entry.id}>
                  {entry.period_start}..{entry.period_end} | {entry.status} | m={entry.matched_count} r=
                  {entry.review_count} u={entry.unmatched_count}
                </p>
              ))}
              {bankRuns.length === 0 ? <p>No runs.</p> : null}
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-border p-4">
        <h2 className="text-lg font-semibold">Revenue Optimization Analytics</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Service-aware billing intelligence, DAU/MAU, tier/source performance, and pricing funnel analytics.
          Regulated child data handling follows compliance mode; only de-identified internal aggregates are used.
        </p>
        {analyticsStatus ? <p className="mt-2 text-sm">{analyticsStatus}</p> : null}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className="rounded border border-border px-3 py-1 text-sm font-semibold"
            type="button"
            onClick={() => {
              void refreshAnalytics(false);
            }}
            disabled={analyticsLoading}
          >
            {analyticsLoading ? "Refreshing..." : "Refresh Snapshot"}
          </button>
          <button
            className="rounded border border-border px-3 py-1 text-sm font-semibold"
            type="button"
            onClick={() => {
              void refreshAnalytics(true);
            }}
            disabled={analyticsLoading}
          >
            {analyticsLoading ? "Running..." : "Run Pipeline + Reconcile"}
          </button>
        </div>

        {analytics ? (
          <>
            <div className="mt-4 grid gap-3 xl:grid-cols-4 text-xs">
              <article className="rounded border border-border p-3">
                <p className="font-semibold">DAU / MAU</p>
                <p className="mt-1">{analytics.kpis.dau} / {analytics.kpis.mau}</p>
              </article>
              <article className="rounded border border-border p-3">
                <p className="font-semibold">MRR / ARR</p>
                <p className="mt-1">{usd(analytics.kpis.mrr_cents)} / {usd(analytics.kpis.arr_cents)}</p>
              </article>
              <article className="rounded border border-border p-3">
                <p className="font-semibold">Gross Margin</p>
                <p className="mt-1">{usd(analytics.kpis.gross_margin_cents)}</p>
              </article>
              <article className="rounded border border-border p-3">
                <p className="font-semibold">Coverage</p>
                <p className="mt-1">
                  src {(analytics.coverage.acquisition_source_coverage * 100).toFixed(1)}% | region{" "}
                  {(analytics.coverage.region_coverage * 100).toFixed(1)}%
                </p>
              </article>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-3 text-xs">
              <article className="rounded border border-border p-3">
                <h3 className="font-semibold">Tier Performance</h3>
                <div className="mt-2 space-y-1">
                  {analytics.tier_performance.slice(0, 8).map((entry) => (
                    <p key={entry.tier_key}>
                      {entry.tier_key}: active {entry.active_subscriptions}, churn {entry.churn_count}, rev{" "}
                      {usd(entry.revenue_cents)}
                    </p>
                  ))}
                  {analytics.tier_performance.length === 0 ? <p>No tier rows yet.</p> : null}
                </div>
              </article>
              <article className="rounded border border-border p-3">
                <h3 className="font-semibold">Marketing Source / Region</h3>
                <div className="mt-2 space-y-1">
                  {analytics.marketing_performance.slice(0, 8).map((entry) => (
                    <p key={`${entry.source}:${entry.region}`}>
                      {entry.source}/{entry.region}: conv {entry.conversions}, spend {usd(entry.spend_cents)}, roi{" "}
                      {entry.roi_ratio === null ? "n/a" : `${(entry.roi_ratio * 100).toFixed(1)}%`}
                    </p>
                  ))}
                  {analytics.marketing_performance.length === 0 ? <p>No attribution rows yet.</p> : null}
                </div>
              </article>
              <article className="rounded border border-border p-3">
                <h3 className="font-semibold">Service Costs</h3>
                <div className="mt-2 space-y-1">
                  {analytics.service_performance.slice(0, 8).map((entry) => (
                    <p key={entry.service_key}>
                      {entry.service_name}: billed {usd(entry.billed_cost_cents)}, est {usd(entry.estimated_cost_cents)}
                    </p>
                  ))}
                  {analytics.service_performance.length === 0 ? <p>No service rows yet.</p> : null}
                </div>
              </article>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-2 text-xs">
              <article className="rounded border border-border p-3">
                <h3 className="font-semibold">Pricing Funnel</h3>
                <div className="mt-2 space-y-1">
                  <p>views {analytics.pricing_funnel.pricing_views}</p>
                  <p>checkout views {analytics.pricing_funnel.checkout_views}</p>
                  <p>checkout starts {analytics.pricing_funnel.checkout_starts}</p>
                  <p>success views {analytics.pricing_funnel.success_views}</p>
                  <p>checkout success rate {(analytics.pricing_funnel.checkout_success_rate * 100).toFixed(1)}%</p>
                </div>
              </article>
              <article className="rounded border border-border p-3">
                <h3 className="font-semibold">Optimization Insights</h3>
                <div className="mt-2 space-y-1">
                  {analytics.optimization_insights.map((entry, index) => (
                    <p key={`${index}:${entry}`}>{entry}</p>
                  ))}
                  {analytics.optimization_insights.length === 0 ? <p>No automated insights yet.</p> : null}
                  {analytics.warnings.length > 0 ? <p className="pt-2 font-semibold">Warnings</p> : null}
                  {analytics.warnings.slice(0, 4).map((entry, index) => (
                    <p key={`warning:${index}:${entry}`}>{entry}</p>
                  ))}
                </div>
              </article>
            </div>
          </>
        ) : (
          <p className="mt-3 text-sm text-zinc-500">
            No analytics snapshot is available yet. Run the pipeline to generate one.
          </p>
        )}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border border-border p-3 text-xs">
          <h3 className="font-semibold">Revenue Channels</h3>
          <div className="mt-2 space-y-1">
            {initialRevenueChannels.map((entry) => (
              <p key={entry.channel}>
                {entry.channel}: {usd(entry.revenue_cents)} ({(entry.share_of_revenue * 100).toFixed(1)}%)
              </p>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-border p-3 text-xs">
          <h3 className="font-semibold">Expense Categories</h3>
          <div className="mt-2 space-y-1">
            {initialExpenseCategories.map((entry) => (
              <p key={entry.category}>
                {entry.category}: {usd(entry.expense_cents)}
              </p>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-border p-3 text-xs">
          <h3 className="font-semibold">Tax Projection</h3>
          {initialTaxProjection ? (
            <div className="mt-2 space-y-1">
              <p>Owner: {initialTaxProjection.owner_name}</p>
              <p>Rate: {(initialTaxProjection.effective_total_rate * 100).toFixed(2)}%</p>
              <p>Projected tax: {usd(initialTaxProjection.projected_tax_cents)}</p>
            </div>
          ) : (
            <p className="mt-2 text-zinc-500">No active profile.</p>
          )}
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-border p-3 text-xs">
          <h3 className="font-semibold">Cap Table Snapshot</h3>
          <div className="mt-2 space-y-1">
            {initialCapTableRows.slice(0, 12).map((entry) => (
              <p key={`${entry.investor_id}:${entry.investor_class_code}`}>
                {entry.investor_name} - {entry.investor_class_code}: {entry.shares_owned} shares ({entry.ownership_percent.toFixed(5)}%)
              </p>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-border p-3 text-xs">
          <h3 className="font-semibold">Audit Findings Snapshot</h3>
          <div className="mt-2 space-y-1">
            {initialFindings.slice(0, 12).map((entry, index) => (
              <p key={`${entry.related_entity_id}:${index}`}>
                [{entry.severity}] {entry.finding_title}
              </p>
            ))}
            {initialFindings.length === 0 ? <p>No findings.</p> : null}
          </div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-border p-3 text-xs">
          <h3 className="font-semibold">Dividend Register</h3>
          <div className="mt-2 space-y-1">
            {initialDividendRows.slice(0, 12).map((entry) => (
              <p key={`${entry.declaration_id}:${entry.investor_name}:${entry.created_at}`}>
                {entry.declaration_name} - {entry.investor_name}: {usd(entry.net_amount_cents)} ({entry.payment_status})
              </p>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-border p-3 text-xs">
          <h3 className="font-semibold">Monthly Trend</h3>
          <div className="mt-2 space-y-1">
            {initialMonthly.slice(-12).map((entry) => (
              <p key={entry.month_key}>
                {entry.month_key}: revenue {usd(entry.revenue_cents)} | pre-tax {usd(entry.net_income_pre_tax_cents)}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-border p-3 text-xs">
        <h3 className="font-semibold">Recent Ledger Lines</h3>
        <div className="mt-2 space-y-1">
          {initialLineItems.slice(0, 20).map((entry) => (
            <p key={`${entry.transaction_id}:${entry.side}:${entry.account_code}`}>
              {entry.occurred_on} {entry.side} {entry.account_code} {usd(entry.signed_amount_cents)} - {entry.description}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
