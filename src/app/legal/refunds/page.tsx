import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function RefundPolicyPage() {
  const policy = policyRegistry.refunds;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Refund Policy</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Refund requests are reviewed case-by-case with priority for billing
          errors and accidental purchases.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Version" value={policy.version} tone="info" />
          <ProgressChip label="Effective" value={policy.effectiveDate} tone="neutral" />
        </div>
      </SoftCard>
      <PolicyAcceptance policyType="refunds" />

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">How to Request</h2>
        <p className="text-sm text-zinc-700">
          Open a support ticket from the Support Center and include your payment intent or order
          details.
        </p>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">Processing</h2>
        <p className="text-sm text-zinc-700">
          Approved refunds are issued via the original payment method through Stripe and may take
          additional time to appear depending on the payment provider.
        </p>
      </SoftCard>
    </main>
  );
}
