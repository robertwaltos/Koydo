import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
import { toTestingCatalogPath } from "@/lib/routing/paths";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import TestingExamClient from "./testing-exam-client";

type PageParams = {
  examId: string;
};

type PageSearchParams = {
  mode?: string | string[];
};

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

function resolveMode(value: string | string[] | undefined): "auto" | "sample" | "full" {
  const normalized = Array.isArray(value) ? value[0] : value;
  if (normalized === "sample") return "sample";
  if (normalized === "full") return "full";
  return "auto";
}

export const dynamic = "force-dynamic";

export default function TestingExamPage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams?: Promise<PageSearchParams>;
}) {
  return <TestingExamPageContent params={params} searchParams={searchParams} />;
}

async function TestingExamPageContent({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams?: Promise<PageSearchParams>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams
    ? await searchParams
    : {};
  if (!isUuid(resolvedParams.examId)) {
    notFound();
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    const next = encodeURIComponent(`/testing/${resolvedParams.examId}`);
    redirect(`/auth/sign-in?next=${next}`);
  }

  const mode = resolveMode(resolvedSearchParams.mode);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <SoftCard as="header" className="bg-[var(--gradient-hero)] p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Testing Session
            </p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
              Exam Simulator
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

      <TestingExamClient examId={resolvedParams.examId} initialMode={mode} />
    </main>
  );
}
