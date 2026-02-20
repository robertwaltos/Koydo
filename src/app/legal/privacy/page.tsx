import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";

export default function PrivacyPage() {
  const policy = policyRegistry.privacy;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="text-xs text-zinc-500">
        Version {policy.version} • Effective {policy.effectiveDate}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        EduForge collects only the data required to provide learning, account security, billing,
        and support services.
      </p>
      <PolicyAcceptance policyType="privacy" />

      <section className="space-y-3 rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Data We Collect</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Account identifiers, progress metrics, support tickets, subscription metadata, and parent
          consent records when required.
        </p>
      </section>

      <section className="space-y-3 rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Children and Families</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Age-gate and parental consent flows are enforced for child safety. Parents can request
          access, correction, or deletion through support.
        </p>
      </section>
    </main>
  );
}
