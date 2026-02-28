import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
import { toTestingCatalogPath } from "@/lib/routing/paths";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import TestingResultClient from "./testing-result-client";

type PageParams = {
  attemptId: string;
};

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export const dynamic = "force-dynamic";

export default function TestingResultPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  return <TestingResultPageContent params={params} />;
}

async function TestingResultPageContent({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  if (!isUuid(resolvedParams.attemptId)) {
    notFound();
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    const next = encodeURIComponent(`/testing/results/${resolvedParams.attemptId}`);
    redirect(`/auth/sign-in?next=${next}`);
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <SoftCard as="header" className="bg-[var(--gradient-hero)] p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Testing Portal
            </p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
              Attempt Results
            </h1>
          </div>
          <Link
            href={toTestingCatalogPath()}
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
          >
            Back to Catalog
          </Link>
        </div>
      </SoftCard>

      <TestingResultClient attemptId={resolvedParams.attemptId} />
    </main>
  );
}
