import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getOnboardingRedirect } from "@/lib/compliance/onboarding";
import SignOutButton from "./sign-out-button";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("birth_date, parental_consent_required, parental_consent_status")
    .eq("user_id", data.user.id)
    .maybeSingle();

  const onboardingRedirect = getOnboardingRedirect(profile ?? null);
  if (onboardingRedirect) {
    redirect(onboardingRedirect);
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Learner Dashboard</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Signed in as {data.user.email ?? data.user.id}
          </p>
        </div>
        <SignOutButton />
      </header>

      <section className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/auth/age-gate"
          className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Complete Age Gate
        </Link>
        <Link
          href="/auth/parent-consent"
          className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Submit Parent Consent
        </Link>
        <Link
          href="/api/auth/me"
          className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          View Session JSON
        </Link>
        <Link
          href="/billing/checkout"
          className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Start Subscription Checkout
        </Link>
      </section>
    </main>
  );
}
