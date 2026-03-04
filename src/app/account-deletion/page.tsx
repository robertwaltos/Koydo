import type { Metadata } from "next";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";
import { loadSupportRuntimeConfig } from "@/lib/support/config";

export const metadata: Metadata = {
  title: "Account Deletion",
  description:
    "How to request account and data deletion for Koydo on iOS, Android, and web.",
};

export const dynamic = "force-dynamic";

export default async function AccountDeletionPage() {
  const support = await loadSupportRuntimeConfig();

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Account and Data Deletion</h1>
        <p className="mt-2 text-sm text-foreground">
          You can delete your account directly inside Koydo or request help from support.
        </p>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">Delete in the app</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground">
          <li>Sign in to your account.</li>
          <li>Open Account Settings.</li>
          <li>Complete the parent security verification challenge.</li>
          <li>Use the Delete Account section and confirm with <code>DELETE</code>.</li>
        </ol>
        <p className="text-sm text-foreground">
          Deletion requests are soft-deleted immediately and permanently purged after a 30-day grace period.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/account/settings"
            className="ui-soft-button ui-focus-ring inline-flex min-h-11 items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
          >
            Open Account Settings
          </Link>
          <Link
            href="/account/privacy"
            className="ui-soft-button ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
          >
            Open Privacy Center
          </Link>
        </div>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">Delete with support assistance</h2>
        <p className="text-sm text-foreground">
          If you cannot access your account, contact support and include the email used for your account.
        </p>
        <p className="text-sm text-foreground">
          <strong>Email:</strong>{" "}
          <a className="underline" href={`mailto:${support.supportEmail}`}>
            {support.supportEmail}
          </a>
        </p>
        <p className="text-sm text-foreground">
          <strong>Support center:</strong>{" "}
          <Link href="/support" className="underline">
            /support
          </Link>
        </p>
      </SoftCard>
    </main>
  );
}
