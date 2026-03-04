import type { Metadata } from "next";
import Link from "next/link";
import ComingSoonBanner from "@/app/components/coming-soon-banner";

type ComingSoonPageProps = {
  searchParams: Promise<{
    from?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Coming Soon — Koydo",
  description: "More exciting features coming soon.",
};

export default async function ComingSoonPage({ searchParams }: ComingSoonPageProps) {
  const params = await searchParams;
  const fallbackHref = params.from && params.from.startsWith("/") ? params.from : "/dashboard";

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center px-6 py-12">
      <ComingSoonBanner
        title="New Experience"
        description="More exciting features coming soon. Stay tuned!"
        primaryHref="/explore"
        primaryLabel="Explore available experiences"
        secondaryHref={fallbackHref}
        secondaryLabel="Go back"
      />
      <p className="mt-2 text-center text-xs text-zinc-500 dark:text-foreground/60">
        Need early access for testing?{" "}
        <Link href="/support" className="font-semibold underline">
          Contact support
        </Link>
        .
      </p>
    </main>
  );
}

