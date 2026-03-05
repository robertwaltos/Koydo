"use client";

import { useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

const FAQ_ITEMS: FaqItem[] = [
  // Account
  { category: "Account", question: "How do I create an account?", answer: "Tap 'Start Learning Free' on the home page, enter your email and password, and verify your email. You can also sign up with Google or Apple." },
  { category: "Account", question: "How do I reset my password?", answer: "Go to the Sign In page and tap 'Forgot Password'. Enter your email address and we'll send you a reset link." },
  { category: "Account", question: "Can I have multiple learner profiles?", answer: "Yes! KOYDO supports family accounts. After signing in, go to 'Who is Learning?' to create profiles for each learner in your household. Free accounts get 1 profile; premium accounts get unlimited profiles." },
  { category: "Account", question: "How do I delete my account?", answer: "Go to Account Settings, scroll to the bottom, and follow the account deletion process. You'll need to type 'DELETE' and verify your identity. All data will be permanently removed." },

  // Learning
  { category: "Learning", question: "How many modules are available?", answer: "KOYDO offers 800+ learning modules covering Pre-K through College and beyond, including Math, Science, Languages, History, Coding, and specialized topics like Medicine, Law, and Engineering." },
  { category: "Learning", question: "What is spaced repetition?", answer: "Spaced repetition is a scientifically proven learning technique. KOYDO automatically schedules review sessions at optimal intervals to help you remember what you've learned long-term." },
  { category: "Learning", question: "Can I learn offline?", answer: "Yes! Go to Parent Dashboard > Airplane Mode to download lesson packs for offline learning. Up to 6 hours of content can be stored for use without internet." },
  { category: "Learning", question: "How does the AI tutor work?", answer: "Our AI tutor uses Socratic questioning to guide you through problems without giving direct answers. It adapts to your level and provides personalized explanations." },

  // Billing
  { category: "Billing", question: "Is KOYDO free?", answer: "KOYDO offers a generous free tier with access to modules, games, and basic features. Premium plans unlock scored exams, unlimited AI tutoring, additional learner profiles, and more." },
  { category: "Billing", question: "How do I manage my subscription?", answer: "If you subscribed through the App Store or Google Play, manage it through your device's subscription settings. For web subscriptions, go to Account Settings > Subscription Management." },
  { category: "Billing", question: "Can I get a refund?", answer: "Refund policies depend on your subscription platform. App Store and Google Play handle their own refund processes. For web subscriptions, see our Refund Policy page or contact support." },

  // Parents
  { category: "Parents", question: "How does KOYDO protect my child's privacy?", answer: "KOYDO is COPPA-compliant. We require verified parental consent for children under 13, disable tracking for child accounts, and never show ads. Parents can monitor all activity from the Parent Dashboard." },
  { category: "Parents", question: "What is the Parent Dashboard?", answer: "The Parent Dashboard gives you a complete view of your child's learning activity, including time spent, subjects covered, scores, streaks, and AI usage. Access it from the hamburger menu." },
  { category: "Parents", question: "Can I restrict what my child accesses?", answer: "Yes. In Account Settings > Learner Path Controls, you can enable or disable specific subjects and learning paths for each learner profile." },
  { category: "Parents", question: "What is Airplane Mode?", answer: "Airplane Mode lets you download lesson packs for offline learning. It's perfect for travel, areas with poor connectivity, or limiting screen time to pre-approved content." },

  // Games
  { category: "Games", question: "Are the games educational?", answer: "Yes! KOYDO has two game tracks: Educational Core (scored learning games) and Reward Realm (fun games unlocked by meeting learning goals). Educational games cover math, literacy, science, logic, and more." },
  { category: "Games", question: "What is the Reward Realm?", answer: "The Reward Realm is a collection of fun games that unlock when learners meet educational milestones. It motivates consistent learning by rewarding effort with playtime." },

  // Technical
  { category: "Technical", question: "Which browsers are supported?", answer: "KOYDO works on all modern browsers including Chrome, Safari, Firefox, and Edge. We also offer native apps for iOS and Android via the App Store and Google Play." },
  { category: "Technical", question: "Why isn't my audio working?", answer: "Make sure your browser has microphone permission enabled for KOYDO. Check your device volume and ensure no other apps are using the microphone. For the Speaking Lab, you may need to grant microphone access in your browser settings." },
  { category: "Technical", question: "How do I report a bug?", answer: "Go to the Support page and submit a ticket with a description of the issue. Include what you were doing when it happened and any error messages you see." },

  // Accessibility
  { category: "Accessibility", question: "Is KOYDO accessible for learners with disabilities?", answer: "Yes. KOYDO targets WCAG 2.1 AA compliance with keyboard navigation, screen reader support, high contrast mode, reduced motion mode, and minimum 44x44px touch targets. Visit Account Settings to configure accessibility preferences." },
  { category: "Accessibility", question: "Can I change the text size?", answer: "KOYDO respects your browser's text size settings. Increase your browser's default font size to make all KOYDO text larger." },
];

const CATEGORIES = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));

export default function FaqPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchesCategory = !activeCategory || item.category === activeCategory;
    const matchesSearch = !search || item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-foreground/70">
          Find answers to common questions about KOYDO.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden="true">🔍</span>
        <input
          type="search"
          placeholder="Search FAQ..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setOpenIndex(null); }}
          className="ui-focus-ring w-full rounded-2xl border border-border bg-surface-muted py-3 pl-10 pr-4 text-sm"
        />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setActiveCategory(null); setOpenIndex(null); }}
          className={`ui-focus-ring rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
            !activeCategory
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-zinc-600 hover:bg-zinc-50 dark:text-foreground/70 dark:hover:bg-surface-muted"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
            className={`ui-focus-ring rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
              activeCategory === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-zinc-600 hover:bg-zinc-50 dark:text-foreground/70 dark:hover:bg-surface-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <SoftCard className="p-6 text-center text-sm text-zinc-500">
            No results found. Try a different search term or{" "}
            <Link href="/support" className="font-semibold text-accent underline">contact support</Link>.
          </SoftCard>
        ) : (
          filtered.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <SoftCard key={i} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="ui-focus-ring flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-foreground dark:hover:bg-surface-muted/50"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="shrink-0 text-zinc-400 transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-border/40 px-5 py-4 text-sm text-zinc-700 dark:text-foreground/80">
                    <span className="mb-2 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:bg-surface-muted dark:text-foreground/60">{item.category}</span>
                    <p className="mt-1">{item.answer}</p>
                  </div>
                )}
              </SoftCard>
            );
          })
        )}
      </div>

      {/* CTA */}
      <SoftCard className="p-6 text-center">
        <p className="text-sm text-zinc-600 dark:text-foreground/70">
          Can&apos;t find what you&apos;re looking for?
        </p>
        <Link
          href="/support"
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
        >
          Contact Support
        </Link>
      </SoftCard>
    </main>
  );
}
