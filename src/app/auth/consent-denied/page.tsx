import Link from "next/link";

export const metadata = {
  title: "Access Restricted — KOYDO",
};

export default function ConsentDeniedPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12 text-center">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">
        <h1 className="text-2xl font-semibold text-red-700 dark:text-red-400">
          Access Restricted
        </h1>
        <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
          A parent or guardian has declined consent for this account. To protect
          children&apos;s privacy, access to KOYDO is restricted until a parent
          or guardian grants consent.
        </p>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          If you believe this is an error, ask your parent or guardian to update
          consent from their parent dashboard.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Return Home
          </Link>
          <Link
            href="/auth/sign-in"
            className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Sign In as Parent
          </Link>
        </div>
      </div>
    </main>
  );
}
