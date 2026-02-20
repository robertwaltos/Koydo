import Link from "next/link";

export default function BillingCancelPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-4 px-6 py-12">
      <h1 className="text-2xl font-semibold">Checkout Canceled</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        No charge was completed. You can restart checkout at any time.
      </p>
      <div className="flex gap-3">
        <Link href="/billing/checkout" className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">
          Retry Checkout
        </Link>
        <Link href="/legal/terms" className="rounded-md border border-black/15 px-4 py-2 text-sm">
          View Terms
        </Link>
      </div>
    </main>
  );
}
