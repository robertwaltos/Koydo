import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";

export default function RefundPolicyPage() {
  const policy = policyRegistry.refunds;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Refund Policy</h1>
      <p className="text-xs text-zinc-500">
        Version {policy.version} • Effective {policy.effectiveDate}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Refund requests are reviewed case-by-case with priority for billing errors and accidental
        purchases.
      </p>
      <PolicyAcceptance policyType="refunds" />

      <section className="space-y-3 rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">How to Request</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Open a support ticket from the Support Center and include your payment intent or order
          details.
        </p>
      </section>

      <section className="space-y-3 rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Processing</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Approved refunds are issued via the original payment method through Stripe and may take
          additional time to appear depending on the payment provider.
        </p>
      </section>
    </main>
  );
}
