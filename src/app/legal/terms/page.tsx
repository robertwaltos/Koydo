import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function TermsPage() {
  const policy = policyRegistry.terms;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-zinc-700">
          By using EduForge, users agree to use the service lawfully and in
          accordance with child safety and educational conduct rules.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Version" value={policy.version} tone="info" />
          <ProgressChip label="Effective" value={policy.effectiveDate} tone="neutral" />
        </div>
      </SoftCard>
      <PolicyAcceptance policyType="terms" />

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">Subscriptions</h2>
        <p className="text-sm text-zinc-700">
          Paid plans renew automatically unless canceled prior to the next billing cycle.
          Promotional pricing may be time-limited and subject to eligibility requirements.
        </p>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">Account Controls</h2>
        <p className="text-sm text-zinc-700">
          Users can request support, access account settings, and delete accounts in-app.
        </p>
      </SoftCard>
    </main>
  );
}
