import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";

export default function TermsPage() {
  const policy = policyRegistry.terms;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="text-xs text-zinc-500">
        Version {policy.version} • Effective {policy.effectiveDate}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        By using EduForge, users agree to use the service lawfully and in accordance with child
        safety and educational conduct rules.
      </p>
      <PolicyAcceptance policyType="terms" />

      <section className="space-y-3 rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Subscriptions</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Paid plans renew automatically unless canceled prior to the next billing cycle.
          Promotional pricing may be time-limited and subject to eligibility requirements.
        </p>
      </section>

      <section className="space-y-3 rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Account Controls</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Users can request support, access account settings, and delete accounts in-app.
        </p>
      </section>
    </main>
  );
}
