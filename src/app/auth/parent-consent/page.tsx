import ParentConsentForm from "./parent-consent-form";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ParentConsentPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const childAgeParam = resolvedSearchParams.childAge;
  const childAge = typeof childAgeParam === "string" ? childAgeParam : undefined;

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Parent Consent</h1>
      <p className="mt-3 text-sm text-zinc-600">
        {childAge
          ? `Child age ${childAge} requires verified parental consent before access is granted.`
          : "Parental consent is required before account activation."}
      </p>

      <ParentConsentForm />
    </main>
  );
}
