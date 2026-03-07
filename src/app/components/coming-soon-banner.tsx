import Link from "next/link";

type ComingSoonBannerProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function ComingSoonBanner({
  title,
  description,
  primaryHref = "/explore",
  primaryLabel = "Continue learning",
  secondaryHref = "/support",
  secondaryLabel = "Contact support",
}: ComingSoonBannerProps) {
  return (
    <section className="mx-auto my-8 w-full max-w-3xl rounded-3xl border border-amber-300/40 bg-amber-50/90 p-8 text-zinc-900 shadow-sm dark:border-amber-700/40 dark:bg-amber-950/30 dark:text-foreground">
      <span className="inline-flex rounded-full border border-indigo-300 bg-indigo-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-800 dark:border-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
        Preview
      </span>
      <h1 className="mt-4 text-3xl font-black tracking-tight">{title}</h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-foreground/80">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="inline-flex min-h-11 items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-transparent dark:text-foreground dark:hover:bg-zinc-900/30"
        >
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}

