import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function PrivacyPage() {
  const policy = policyRegistry.privacy;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-700">
          EduForge collects only the data required to provide learning, account
          security, billing, and support services.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Version" value={policy.version} tone="info" />
          <ProgressChip label="Effective" value={policy.effectiveDate} tone="neutral" />
        </div>
      </SoftCard>
      <PolicyAcceptance policyType="privacy" />

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">Data We Collect</h2>
        <p className="text-sm text-zinc-700">
          Account identifiers, progress metrics, support tickets, subscription metadata, and parent
          consent records when required.
        </p>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">Children and Families</h2>
        <p className="text-sm text-zinc-700">
          Age-gate and parental consent flows are enforced for child safety. Parents can request
          access, correction, or deletion through support.
        </p>
      </SoftCard>
    </main>
  );
}
