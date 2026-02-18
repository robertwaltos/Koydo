import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:px-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-zinc-500">EduForge MVP Starter</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Multilingual learning platform foundation is ready.
          </h1>
          <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">
            This starter includes Supabase and Stripe API scaffolding, token budget logic,
            offline progress utilities, analytics hooks, media placeholders, and a central AI
            media prompt catalog.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-black/10 p-4 dark:border-white/15">
            <Image
              src="/placeholders/lesson-robot.svg"
              alt="Lesson artwork placeholder"
              width={400}
              height={240}
              className="h-auto w-full"
              priority
            />
            <p className="mt-3 text-sm text-zinc-500">Artwork Placeholder</p>
          </div>
          <div className="rounded-xl border border-black/10 p-4 dark:border-white/15">
            <Image
              src="/placeholders/avatar-student.svg"
              alt="Avatar placeholder"
              width={400}
              height={240}
              className="h-auto w-full"
            />
            <p className="mt-3 text-sm text-zinc-500">Avatar Placeholder</p>
          </div>
          <div className="rounded-xl border border-black/10 p-4 dark:border-white/15">
            <Image
              src="/placeholders/video-placeholder.svg"
              alt="Video placeholder"
              width={400}
              height={240}
              className="h-auto w-full"
            />
            <p className="mt-3 text-sm text-zinc-500">Video Placeholder</p>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/api/health"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            API Health Check
          </Link>
          <Link
            href="/api/ai/analyze"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            AI Analyze Route (POST)
          </Link>
          <a
            href="/AI-MEDIA-PROMPTS.md"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            AI Media Prompt Catalog
          </a>
          <a
            href="https://supabase.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Supabase Docs
          </a>
          <Link
            href="/auth/age-gate"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            COPPA Age Gate
          </Link>
          <Link
            href="/auth/parent-consent"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Parent Consent Form
          </Link>
          <Link
            href="/auth/sign-up"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Create Account
          </Link>
          <Link
            href="/auth/sign-in"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Learner Dashboard
          </Link>
          <Link
            href="/billing/checkout"
            className="rounded-lg border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Start Subscription Checkout
          </Link>
        </section>
      </main>
    </div>
  );
}
