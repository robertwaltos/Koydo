"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  // Admin and parent routes use DashShell — no student footer needed.
  if (pathname.startsWith("/admin") || pathname.startsWith("/parent")) {
    return null;
  }

  return (
    <footer style={{ paddingBottom: "env(safe-area-inset-bottom)" }} className="mt-12 border-t border-border px-4 py-6 text-sm text-zinc-600">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4">
        <span>Koydo</span>
        <Link href="/legal/privacy" className="hover:underline">
          Privacy
        </Link>
        <Link href="/legal/terms" className="hover:underline">
          Terms
        </Link>
        <Link href="/legal/refunds" className="hover:underline">
          Refunds
        </Link>
        <Link href="/support" className="hover:underline">
          Support
        </Link>
      </div>
    </footer>
  );
}
