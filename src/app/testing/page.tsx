import { redirect } from "next/navigation";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import TestingCatalogClient from "./testing-catalog-client";

export const dynamic = "force-dynamic";

export default function TestingCatalogPage() {
  return <TestingCatalogPageContent />;
}

async function TestingCatalogPageContent() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/sign-in?next=%2Ftesting");
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Testing Portal
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Practice Exams
            </h1>
            <p className="mt-2 max-w-3xl text-sm font-medium text-zinc-700">
              Try 10-question sample tests, then unlock full exam simulators with
              scoring, domain analysis, and remediation pointers.
            </p>
          </div>
          <Link
            href="/testing/classes"
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
          >
            Teacher Classes
          </Link>
        </div>
      </SoftCard>

      <TestingCatalogClient />
    </main>
  );
}
