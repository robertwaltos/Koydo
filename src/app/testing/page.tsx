import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import PageHeader from "@/app/components/page-header";
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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Testing" },
        ]}
        eyebrow="Testing"
        title="Practice Exams"
        description="Try 10-question sample tests, then unlock full simulators with scoring, domain analysis, and remediation pointers."
        actions={
          <Link
            href="/testing/classes"
            className="rounded-full border border-zinc-200 bg-surface-muted px-2.5 py-0.5 text-[11px] font-bold text-zinc-600 transition-colors hover:bg-zinc-100"
          >
            Teacher Classes →
          </Link>
        }
      />

      <TestingCatalogClient />
    </main>
  );
}
