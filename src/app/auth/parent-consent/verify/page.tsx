import ParentConsentVerifyClient from "./verify-client";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ParentConsentVerifyPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const tokenParam = resolvedSearchParams.token;
  const token = typeof tokenParam === "string" ? tokenParam : "";

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Parent Verification</h1>
      <p className="mt-3 text-sm text-zinc-600">
        Complete parental consent verification to unlock the learner account.
      </p>

      <ParentConsentVerifyClient token={token} />
    </main>
  );
}
