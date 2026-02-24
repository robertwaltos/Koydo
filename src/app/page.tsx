import Image from "next/image";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type QuickLink = {
  href: string;
  label: string;
  external?: boolean;
};

const quickLinks: QuickLink[] = [
  { href: "/api/health", label: "API Health Check" },
  { href: "/api/ai/analyze", label: "AI Analyze Route (POST)" },
  { href: "/AI-MEDIA-PROMPTS.md", label: "AI Media Prompt Catalog", external: true },
  { href: "https://supabase.com/docs", label: "Supabase Docs", external: true },
  { href: "/auth/age-gate", label: "COPPA Age Gate" },
  { href: "/auth/parent-consent", label: "Parent Consent Form" },
  { href: "/auth/sign-up", label: "Create Account" },
  { href: "/auth/sign-in", label: "Sign In" },
  { href: "/dashboard", label: "Learner Dashboard" },
  { href: "/modules", label: "Module Catalog" },
  { href: "/science-lab", label: "Science Lab (Apple Vision)" },
  { href: "/support", label: "Support Center" },
  { href: "/admin/operations", label: "Owner Operations" },
  { href: "/admin/compliance", label: "App Store Compliance" },
  { href: "/admin/audit", label: "Admin Audit Logs" },
  { href: "/admin/reports", label: "Admin Reports" },
  { href: "/admin/alerts", label: "Admin Alerts" },
  { href: "/account/settings", label: "Account Settings" },
  { href: "/account/privacy", label: "Privacy Center" },
  { href: "/parent/compliance", label: "Parent Compliance" },
];

const artworkCards = [
  {
    src: "/placeholders/lesson-robot.svg",
    alt: "Lesson artwork placeholder",
    label: "Artwork Placeholder",
  },
  {
    src: "/placeholders/avatar-student.svg",
    alt: "Avatar placeholder",
    label: "Avatar Placeholder",
  },
  {
    src: "/placeholders/video-placeholder.svg",
    alt: "Video placeholder",
    label: "Video Placeholder",
  },
];

export default function Home() {
  const externalCheckoutAllowed =
    (process.env.NEXT_PUBLIC_BILLING_PROVIDER_MODE ?? "stripe_external") !==
    "app_store_iap";

  const links = externalCheckoutAllowed
    ? [...quickLinks, { href: "/billing/checkout", label: "Start Subscription Checkout" }]
    : quickLinks;

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 sm:px-10">
        <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
          <p className="text-sm uppercase tracking-wide text-zinc-600">
            EduForge MVP Starter
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Multilingual learning platform foundation is ready.
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-zinc-700">
            This starter includes Supabase and Stripe API scaffolding, token
            budget logic, offline progress utilities, analytics hooks, media
            placeholders, and a central AI media prompt catalog.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <ProgressChip label="Backend" value="Supabase" tone="info" />
            <ProgressChip label="Billing" value="Stripe" tone="neutral" />
            <ProgressChip label="Media" value="AI prompt packs" tone="success" />
          </div>
        </SoftCard>

        <section className="grid gap-4 sm:grid-cols-3">
          {artworkCards.map((card, index) => (
            <SoftCard
              key={card.src}
              as="article"
              interactive
              organicCorners={index % 2 === 0}
              className="p-4"
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={400}
                height={240}
                className="h-auto w-full"
                priority={index === 0}
              />
              <p className="mt-3 text-sm text-zinc-600">{card.label}</p>
            </SoftCard>
          ))}
        </section>

        <SoftCard as="section" className="p-5">
          <h2 className="text-lg font-semibold text-zinc-900">Quick Access</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Core routes and operational tools used during development and QA.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-4 py-3 text-sm text-foreground hover:bg-surface"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-4 py-3 text-sm text-foreground hover:bg-surface"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </SoftCard>
      </main>
    </div>
  );
}
