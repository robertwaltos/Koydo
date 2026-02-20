import Link from "next/link";

export default function BillingSuccessPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-4 px-6 py-12">
      <h1 className="text-2xl font-semibold">Subscription Activated</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Your checkout completed successfully. You can now continue learning.
      </p>
      <div className="flex gap-3">
        <Link href="/dashboard" className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">
          Go to Dashboard
        </Link>
        <Link href="/account/settings" className="rounded-md border border-black/15 px-4 py-2 text-sm">
          Manage Subscription
        </Link>
      </div>
    </main>
  );
}
