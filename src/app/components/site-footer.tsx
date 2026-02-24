import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border px-4 py-6 text-sm text-zinc-600">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4">
        <span>EduForge</span>
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
