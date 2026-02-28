import Link from "next/link";
import { redirect } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import TestingClassesClient from "./testing-classes-client";

export const dynamic = "force-dynamic";

export default function TestingClassesPage() {
  return <TestingClassesPageContent />;
}

async function TestingClassesPageContent() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/sign-in?next=%2Ftesting%2Fclasses");
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <SoftCard as="header" className="bg-[var(--gradient-hero)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Classroom Mode
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900">
              Testing Classes
            </h1>
            <p className="mt-2 text-sm font-medium text-zinc-700">
              Create classes, enroll learners, assign exam paths, and inspect diagnostics.
            </p>
          </div>
          <Link
            href="/testing"
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
          >
            Back to Testing
          </Link>
        </div>
      </SoftCard>

      <TestingClassesClient />
    </main>
  );
}

