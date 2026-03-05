#!/usr/bin/env node
/**
 * generate-executive-summary.mjs
 *
 * Generates professional DOCX executive summary documents in EN and PL.
 * Uses the `docx` npm package for native DOCX generation.
 *
 * Usage:
 *   node scripts/generate-executive-summary.mjs
 *   node scripts/generate-executive-summary.mjs --lang en
 *   node scripts/generate-executive-summary.mjs --lang pl
 */

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  TableRow,
  TableCell,
  Table,
  WidthType,
  PageBreak,
  ShadingType,
  TableLayoutType,
  BorderStyle,
} from "docx";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

// ─── Parse Args ──────────────────────────────────────────────────────
function parseArgs(argv) {
  const opts = { lang: "both" };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--lang" && argv[i + 1]) opts.lang = argv[++i];
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));

// ─── Top 20 Competitors Data ──────────────────────────────────────
const COMPETITORS = [
  { name: "Duolingo", revenue: 1050, mau: 113000, paid: 11500, price: "$7.99–$13.99/mo", ages: "13+", subjects: "Languages (40+)", ai: "No", games: "Gamified", offline: "Limited", year: 2011 },
  { name: "Coursera", revenue: 757, mau: 197000, paid: 4200, price: "$49–$59/mo", ages: "16+", subjects: "University courses", ai: "Limited", games: "No", offline: "Limited", year: 2012 },
  { name: "IXL Learning", revenue: 600, mau: 14000, paid: 3500, price: "$9.95–$19.95/mo", ages: "K-12", subjects: "Math, ELA, Science", ai: "No", games: "Limited", offline: "No", year: 1998 },
  { name: "Byju's", revenue: 500, mau: 35000, paid: 6800, price: "$6–$12/mo", ages: "K-12", subjects: "Math, Science (India)", ai: "Yes (1)", games: "Interactive", offline: "Yes", year: 2011 },
  { name: "ABCmouse", revenue: 400, mau: 40000, paid: 2500, price: "$12.99/mo", ages: "2–8", subjects: "Pre-K curriculum", ai: "No", games: "~2,000", offline: "Limited", year: 2007 },
  { name: "Kahoot!", revenue: 195, mau: 9000, paid: 9000, price: "$3.99–$9.99/mo", ages: "All", subjects: "Quiz platform", ai: "No", games: "Gamified quizzes", offline: "No", year: 2012 },
  { name: "Quizlet", revenue: 120, mau: 60000, paid: 3000, price: "$7.99/mo", ages: "13+", subjects: "Flashcards (all)", ai: "Q-Chat AI", games: "Study games", offline: "Limited", year: 2005 },
  { name: "Prodigy", revenue: 80, mau: 50000, paid: 1200, price: "$8.33/mo", ages: "6–14", subjects: "Math game", ai: "No", games: "RPG game", offline: "No", year: 2011 },
  { name: "Outschool", revenue: 75, mau: 1500, paid: 800, price: "$10–70/class", ages: "3–18", subjects: "Live classes (all)", ai: "No", games: "No", offline: "No", year: 2015 },
  { name: "Brilliant", revenue: 55, mau: 10000, paid: 1500, price: "$24.99/mo", ages: "13+", subjects: "STEM only", ai: "No", games: "Interactive", offline: "No", year: 2012 },
  { name: "SplashLearn", revenue: 35, mau: 40000, paid: 1000, price: "$7.99/mo", ages: "4–10", subjects: "Math, Reading", ai: "Adaptive", games: "Math games", offline: "No", year: 2012 },
  { name: "Epic!", revenue: 40, mau: 50000, paid: 900, price: "$9.99/mo", ages: "4–12", subjects: "Digital library", ai: "No", games: "No", offline: "Limited", year: 2014 },
  { name: "Brainly", revenue: 40, mau: 350000, paid: 500, price: "$18/yr", ages: "10+", subjects: "Q&A (all)", ai: "AI answers", games: "No", offline: "No", year: 2009 },
  { name: "Khan Academy", revenue: 100, mau: 120000, paid: 200, price: "Free / $44/yr AI", ages: "All", subjects: "Math, Science, Econ", ai: "Khanmigo ($)", games: "Limited", offline: "No", year: 2008 },
  { name: "Homer/Begin", revenue: 25, mau: 5000, paid: 600, price: "$7.99/mo", ages: "2–8", subjects: "Reading", ai: "No", games: "Interactive", offline: "Limited", year: 2013 },
  { name: "Lingokids", revenue: 18, mau: 5000, paid: 400, price: "$14.99/mo", ages: "2–8", subjects: "Language (kids)", ai: "No", games: "Games", offline: "Limited", year: 2016 },
  { name: "StudySmarter", revenue: 12, mau: 8000, paid: 300, price: "$9.99/mo", ages: "14+", subjects: "Study tools", ai: "AI flashcards", games: "No", offline: "Yes", year: 2018 },
  { name: "Mathway", revenue: 10, mau: 15000, paid: 250, price: "$9.99/mo", ages: "13+", subjects: "Math solver", ai: "AI solver", games: "No", offline: "No", year: 2002 },
  { name: "Photomath", revenue: 8, mau: 25000, paid: 200, price: "Free / premium", ages: "All", subjects: "Math solver", ai: "AI solver", games: "No", offline: "Partial", year: 2014 },
  { name: "Socratic", revenue: 0, mau: 20000, paid: 0, price: "Free", ages: "All", subjects: "AI homework help", ai: "Google AI", games: "No", offline: "No", year: 2013 },
];

// ─── Content Data (EN) ──────────────────────────────────────────────
const EN = {
  fileName: "KOYDO-EXECUTIVE-SUMMARY-2026-Q1.docx",
  cover: {
    title: "KOYDO",
    subtitle: "Executive Summary — Q1 2026",
    confidential: "CONFIDENTIAL — For Authorized Recipients Only",
    date: "March 2026",
  },
  sections: {
    executiveOverview: {
      title: "1. Executive Overview",
      paragraphs: [
        "Koydo is an AI-powered adaptive learning platform that delivers personalized education across 800+ structured learning modules, spanning subjects from Pre-K phonics to MBA-level finance. The platform combines interactive lessons, video content, quiz assessments, and 225+ educational games to create an engaging learning experience for users aged 3 to adult.",
        "Mission: To democratize quality education by making personalized, AI-tutored learning accessible and affordable for every family, in every language — targeting 50 languages worldwide.",
        "Target Market: Families with children ages 3-18 (primary), adult learners and professional development (secondary). Initial geographic focus on English-speaking markets with active expansion into Spanish, Chinese (Mandarin), and Polish markets, scaling to 50 languages.",
        "Koydo differentiates through: (1) unprecedented content breadth — over 800 modules with 8,000+ lessons — far exceeding competitors; (2) multi-LLM AI tutoring powered by OpenAI, Anthropic, Google Gemini, and xAI Grok; (3) COPPA-compliant child safety by design; (4) cross-platform delivery via web, iOS, and Android; (5) games-as-reward system fully controlled by parents; (6) proprietary custom game engine for immersive educational experiences.",
      ],
    },
    productStatus: {
      title: "2. Product Status (as of March 2026)",
      items: [
        ["Learning Modules", "822 structured modules with ~8,200 lessons (10 lessons per module: 6 video + 2 interactive + 2 quiz)"],
        ["Educational Games", "225+ games across multiple categories — powered by custom game engine, used as parent-controlled rewards"],
        ["Languages", "4 languages live (EN, ES, ZH, PL) with infrastructure for 50 total languages planned"],
        ["Platforms", "Web application live at koydo.com — iOS and Android builds in app store submission pipeline"],
        ["AI Tutoring", "Multi-provider AI tutoring: OpenAI GPT-4o, Anthropic Claude, Google Gemini, xAI Grok"],
        ["Compliance", "COPPA-compliant (parental gates, age-tiered content, analytics suppression for children under 13)"],
        ["Parental Dashboard", "Analytics dashboard for parents — lesson progress, time tracking, game reward controls"],
        ["Offline Support", "Service worker with IndexedDB-backed offline lesson packs and progress sync"],
        ["Audiobook Library", "Open-license audiobook library integrated for supplementary reading ($4.99/mo subscription)"],
        ["White-Label Ready", "White-label licensing infrastructure ready for institutional partners at launch"],
        ["Partner Portal", "Partners/Influencers portal for affiliate and content collaboration"],
        ["Custom Game Engine", "Proprietary game engine for educational games — expandable with new game modes and genres"],
      ],
    },
    marketAnalysis: {
      title: "3. Market Analysis",
      overview: [
        "The global K-12 EdTech market is valued at $295.6 billion in 2025, projected to reach $908.1 billion by 2034 at a CAGR of 13.3%. The broader education technology market exceeds $233 billion globally with a 20.5% CAGR through 2035.",
        "The education app sector generated $6.3 billion in mobile revenue alone in 2024, with ~750 million active education app users worldwide. K-12 represents the largest and fastest-growing segment.",
      ],
      marketSize: {
        title: "Total Addressable Market (TAM):",
        items: [
          ["Global K-12 EdTech (2025)", "$295.6 billion"],
          ["Projected K-12 EdTech (2034)", "$908.1 billion"],
          ["CAGR (2025-2034)", "13.3%"],
          ["Education App Revenue (2024)", "$6.3 billion (mobile only)"],
          ["Global Education Users", "~750 million active learners"],
          ["Koydo Serviceable Market (EN+ES+ZH+PL)", "~$85 billion (28.7% of TAM)"],
          ["Koydo Serviceable Obtainable (Year 1)", "~$2.4 million (0.003% capture)"],
        ],
      },
    },
    pricing: {
      title: "4. Pricing Matrix",
      subtitle: "Launch Tiers (Tier 1 & Tier 2 Markets — Same Pricing):",
      tiers: [
        { name: "Core Practice", price: "Free", description: "All 225+ educational games as parent-controlled rewards, limited lesson previews" },
        { name: "Learning Plus (Monthly)", price: "$8.88/mo", description: "Full access to all modules in English + 1 additional language" },
        { name: "Learning Plus (Annual)", price: "$99.99/yr", description: "Annual plan — $8.33/mo effective (6% savings)" },
        { name: "Learning Family (Monthly)", price: "$12.99/mo", description: "Full access for up to 4 family members in English + 1 language" },
        { name: "Learning Family (Annual)", price: "$129.99/yr", description: "Annual family plan — $10.83/mo effective (17% savings)" },
        { name: "Household All-Access (Monthly)", price: "$29.99/mo", description: "Up to 6 learners, all languages, priority AI tutoring, all add-ons included" },
        { name: "Household All-Access (Annual)", price: "$299.00/yr", description: "Annual household plan — $24.92/mo effective (17% savings)" },
      ],
      addons: [
        { name: "Additional Language Module", price: "$2.99/mo or $14.99/yr", description: "Unlock one additional language beyond the included pair" },
        { name: "Master Level Courses", price: "$9.99/yr per course", description: "Advanced/specialized course modules (3-pack: $22.99)" },
        { name: "Exam Prep Pack", price: "$6.99/yr per exam", description: "SAT, ACT, GCSE, AP, and national exam preparation (3-pack: $17.99)" },
        { name: "Audiobook Library Access", price: "$4.99/mo or $39.99/yr", description: "Full access to curated open-license audiobook library" },
      ],
      institutional: [
        { name: "School / Institution License", price: "$5.88/seat/mo (billed annually)", description: "Teacher + pupil access, fully unlocked during school hours at child level ±2 levels" },
        { name: "White-Label License", price: "Custom pricing", description: "Branded platform for institutional partners — ready at launch" },
      ],
      geographic: {
        title: "Geographic Pricing Tiers:",
        tiers: [
          ["Tier 1 (US, Canada, EU, Australia)", "1.0×", "$8.88/mo base"],
          ["Tier 2 (Western Europe, UK, AU/NZ)", "1.0×", "$8.88/mo (same as Tier 1)"],
          ["Tier 3 (LATAM, Eastern Europe, selected MENA)", "0.88×", "$7.77/mo base"],
          ["Tier 4 (India, Southeast Asia)", "0.75×", "$6.66/mo base"],
          ["Tier 5 (Sub-Saharan Africa)", "0.50×", "$4.44/mo base"],
        ],
      },
    },
    competitive: {
      title: "5. Competitive Landscape — Top 20 Analysis",
      featureHeaders: ["Feature", "Koydo", "Duolingo", "Khan Academy", "ABCmouse", "IXL", "Brilliant"],
      featureRows: [
        ["Content Modules", "822+", "~40 langs", "~180 courses", "~850 lessons", "~8,000 skills", "~60 courses"],
        ["Subject Breadth", "60+ subjects", "Languages only", "Math/Science/Econ", "Pre-K to 2nd", "K-12 Math/ELA", "STEM only"],
        ["Age Range", "3 to adult", "13+", "All ages", "2-8", "K-12", "13+"],
        ["AI Tutoring", "Multi-LLM (4)", "None", "Khanmigo ($44/yr)", "None", "None", "None"],
        ["Educational Games", "225+ (custom engine)", "Gamified streaks", "Limited", "~2,000", "Limited", "Interactive"],
        ["Languages", "4 (50 planned)", "40+", "47 (UI only)", "EN/ES", "EN/ES", "EN only"],
        ["Offline Mode", "Full (IndexedDB)", "Limited", "No", "Limited", "No", "No"],
        ["Parent Controls", "Full dashboard", "None", "Limited", "Basic", "Reports", "None"],
        ["School Licensing", "Yes ($5.88/seat)", "Free (schools)", "Districts", "Schools", "Districts", "Teams"],
        ["Monthly Price", "$8.88–$29.99", "$7.99–$13.99", "Free/$3.67", "$12.99", "$9.95–$19.95", "$24.99"],
        ["COPPA Compliant", "Full", "No (13+)", "Yes", "Yes", "Partial", "No (13+)"],
        ["Custom Game Engine", "Yes", "No", "No", "No", "No", "No"],
      ],
      top20Headers: ["#", "Company", "Est. Revenue", "MAU (K)", "Paid Subs (K)", "Price Range", "Age Range", "Founded"],
      migrationAnalysis: {
        title: "Competitor Migration & Switching Analysis",
        paragraphs: [
          "EdTech has an average churn rate of 9.6% — significantly higher than enterprise SaaS (0.25%). Some segments see 13.2% monthly churn. Early retention is the biggest challenge: 73-96% of users churn within the first 30-90 days.",
          "When a cheaper alternative with comparable or superior features enters the market, historical data shows 15-25% of users will trial the new platform within 6 months, and 8-12% will fully switch within 12 months. Key switching triggers: (1) lower price with same features, (2) broader content, (3) better child safety, (4) superior AI tutoring.",
          "Koydo's switching advantages vs. top competitors:",
        ],
        advantages: [
          ["vs. Duolingo ($7.99-$13.99)", "Koydo offers 60+ subjects vs. languages only, full COPPA compliance, parental dashboard — at competitive $8.88/mo. Migration target: Duolingo families with children under 13 who need broader curriculum (est. 3-5% of Duolingo paid base = 345K-575K potential switchers)."],
          ["vs. ABCmouse ($12.99)", "Koydo extends to adult learning (ABCmouse caps at age 8), includes AI tutoring and 50 planned languages. Migration target: Families whose children outgrow ABCmouse (est. 15-20% annual = 375K-500K)."],
          ["vs. IXL ($9.95-$19.95)", "Koydo offers 225+ games (vs limited), AI tutoring, multilingual — at lower price. Migration target: Price-sensitive IXL families (est. 8-12% = 280K-420K)."],
          ["vs. Brilliant ($24.99)", "Koydo covers all ages (Brilliant is 13+) at 65% lower price with broader subjects. Migration target: Brilliant families seeking younger child coverage (est. 5-8% = 75K-120K)."],
        ],
        totalAddressable: "Conservative migration target across all competitors: 500K-1M potential switchers within Year 1, representing $4.4M-$8.8M in annual recurring revenue opportunity.",
      },
    },
    expansion: {
      title: "6. Product Roadmap",
      phases: [
        {
          name: "Launch (March 2026) — Included at Day 1",
          items: [
            "Full learning platform: 822 modules, 8,200+ lessons, 225+ games (custom game engine)",
            "Parental analytics dashboard with game reward controls",
            "Household All-Access subscription tier",
            "School/Institutional licensing with teacher-pupil access (child level ±2 levels during school hours)",
            "White-label licensing infrastructure for institutional partners",
            "Partners/Influencers portal for affiliate and content collaboration",
            "Audiobook library of open-license books ($4.99/mo)",
            "Games-as-reward system fully controlled by parents",
            "4 languages live (EN, ES, ZH, PL), infrastructure for 50",
          ],
        },
        {
          name: "Phase 2 — Q2-Q3 2026",
          items: [
            "Exam preparation unlocks (SAT, ACT, GCSE, AP — add-on pricing)",
            "Google Classroom / Canvas LMS / Schoology integration for school adoption",
            "Microsoft Teams for Education integration",
            "Meta (Facebook/Instagram) social sharing and parent community features",
            "ClassDojo integration for elementary school adoption",
            "Completion certificates with verifiable credential system",
            "Advanced content moderation and safety AI (multi-layer filtering)",
            "Expanded custom game engine: new game genres (puzzle, strategy, simulation)",
            "Expand to 15 languages",
          ],
        },
        {
          name: "Phase 3 — Q4 2026 - Q1 2027",
          items: [
            "Cinematic game modes (story-driven educational narratives) via custom engine",
            "Peer learning / collaborative challenges",
            "Expand to 30 languages",
            "Offline-first mobile architecture for emerging markets (Tier 4/5)",
            "More educational games: custom engine expansion with user-generated game templates",
          ],
        },
        {
          name: "Phase 4 — 2027+",
          items: [
            "XR experiences (Apple Vision Pro, Meta Quest) — immersive science labs",
            "Adaptive learning engine — real-time difficulty adjustment based on performance",
            "Creator marketplace — allow educators to publish supplementary content",
            "Full custom game engine SDK for third-party educational game developers",
            "Expand to 50 languages",
          ],
        },
      ],
      recommendations: [
        "Leverage school licensing channel ($5.88/seat) for predictable B2B revenue — higher LTV, lower CAC",
        "Scale parent engagement features — push notifications, weekly progress reports, goal setting",
        "Build creator marketplace for educator-published content — network effects and retention",
        "Expand white-label licensing as a low-marginal-cost revenue stream for institutions",
        "Target Duolingo/ABCmouse family segments with migration campaigns emphasizing breadth + safety",
      ],
    },
    financial: {
      title: "7. Financial Projections (Moderately Optimistic, 8 Quarters)",
      costNote: "Note: Koydo operates as a lean, single-developer operation. Costs are primarily AI inference and cloud infrastructure — approximately 1/3 of typical startup overhead.",
      assumptions: [
        "Base MAU growth: 20% month-over-month for first 6 months, tapering to 10% MoM",
        "Free-to-paid conversion: 4.5% (justified by broader content than single-subject competitors)",
        "Blended ARPPU: $11.01/mo (weighted: 50% Learning Plus $8.88, 20% Family $12.99, 10% Household $29.99, 15% add-ons ~$4.50, 5% institutional $5.88)",
        "Net ARPPU after platform fees (22% blended): $8.59/mo",
        "Monthly churn: 5.5% (below industry 9.6% avg — driven by parent dashboard engagement + family plans)",
        "Lean cost structure: single developer, no office, no payroll — costs = AI API + infrastructure only",
        "AI API costs: $0.05/active learner/month (declining with caching and model optimization)",
        "Infrastructure: Vercel Pro (~$20/mo) + Supabase Pro (~$25/mo) + scaling charges",
      ],
      quarters: [
        { q: "Q2 2026", mau: "8,000", paid: "360", revenue: "$6,190", costs: "$940", net: "+$5,250" },
        { q: "Q3 2026", mau: "22,000", paid: "990", revenue: "$17,010", costs: "$1,680", net: "+$15,330" },
        { q: "Q4 2026", mau: "50,000", paid: "2,250", revenue: "$38,700", costs: "$3,220", net: "+$35,480" },
        { q: "Q1 2027", mau: "90,000", paid: "4,050", revenue: "$69,600", costs: "$5,520", net: "+$64,080" },
        { q: "Q2 2027", mau: "145,000", paid: "6,525", revenue: "$112,200", costs: "$8,280", net: "+$103,920" },
        { q: "Q3 2027", mau: "210,000", paid: "9,450", revenue: "$162,450", costs: "$11,640", net: "+$150,810" },
        { q: "Q4 2027", mau: "285,000", paid: "12,825", revenue: "$220,400", costs: "$15,560", net: "+$204,840" },
        { q: "Q1 2028", mau: "370,000", paid: "16,650", revenue: "$286,200", costs: "$20,120", net: "+$266,080" },
      ],
      breakeven: "Break-even from launch quarter (Q2 2026). Lean single-developer cost structure means profitability is achieved immediately once paid conversions begin. Cumulative profit by Q1 2028: ~$845,790.",
      summaryLine: "Year 1 cumulative revenue (Q2-Q4 2026): ~$61,900 | Year 1 net profit: ~$56,060",
      competitionVariations: {
        title: "Scenario Analysis: Competitive Capture Rates",
        scenarios: [
          { name: "Conservative (0.5% capture)", subscribers: "2,400", arr: "$312,000", description: "Organic growth only, minimal marketing, word-of-mouth" },
          { name: "Moderate (1.5% capture)", subscribers: "7,200", arr: "$950,000", description: "ASO + social media + school channel marketing" },
          { name: "Aggressive (3% capture)", subscribers: "14,400", arr: "$1,900,000", description: "Paid acquisition + migration campaigns + school partnerships" },
          { name: "Viral (5% capture)", subscribers: "24,000", arr: "$3,160,000", description: "Product-led growth, referral programs, media coverage" },
        ],
        note: "Based on combined paid subscriber base of ~480K across direct competitors (ABCmouse, IXL, Prodigy, SplashLearn, Brilliant, Epic!, Lingokids) serving overlapping age ranges. Capture rate = % of competitor paid users who switch to Koydo within 12 months.",
      },
    },
    risks: {
      title: "8. Risk Factors",
      items: [
        ["COPPA/Privacy Liability", "HIGH", "Non-compliance fines up to $50,000 per violation. Mitigated by dedicated compliance architecture, parental gates, and analytics suppression."],
        ["App Store Rejection", "MEDIUM", "Apple/Google review cycles average 2-7 days. Risk of rejection for IAP enforcement, content policy, or metadata issues. Mitigated by comprehensive compliance checklist."],
        ["LLM API Cost Volatility", "MEDIUM", "AI tutoring costs depend on third-party API pricing. Mitigated by multi-provider strategy (4 LLMs), response caching, and fallback to simpler models."],
        ["Competitive Pressure", "MEDIUM", "Duolingo ($1B+ rev) and Khan Academy (120M users) have established brand recognition. Mitigated by broader content coverage (60+ subjects) and unique multi-LLM tutoring."],
        ["User Churn", "MEDIUM", "Education apps average 9.6% monthly churn. Mitigated by gamification, progress tracking, parent engagement dashboard, and family subscription lock-in. Target: 5.5%."],
        ["Key Person Risk", "MEDIUM", "Single-developer operation. Mitigated by automated CI/CD, comprehensive documentation, and modular architecture enabling team scaling."],
        ["Translation Quality", "LOW", "AI-generated translations across 50 languages may contain errors. Mitigated by human review pipeline and community feedback mechanisms."],
        ["Infrastructure Scaling", "LOW", "Supabase + Vercel architecture scales well to 500K MAU. Beyond that, may require infrastructure migration planning."],
      ],
    },
    metrics: {
      title: "9. Key Metrics Dashboard (Targets)",
      items: [
        ["Monthly Active Users (MAU)", "8K → 370K over 8 quarters"],
        ["Free-to-Paid Conversion", "4.5% target (industry benchmark: 2-5%)"],
        ["Blended ARPPU", "$11.01/month gross, $8.59/month net of platform fees"],
        ["Monthly Churn Rate", "< 5.5% (industry avg: 9.6%)"],
        ["Customer Acquisition Cost (CAC)", "< $12 (organic + ASO focused, lean marketing)"],
        ["Lifetime Value (LTV)", "$156 (at 5.5% churn, $8.59 net ARPPU)"],
        ["LTV:CAC Ratio", "> 13:1 (healthy threshold: > 3:1)"],
        ["Gross Margin", "> 88% (lean cost structure, no payroll overhead)"],
        ["Lessons Completed per MAU/Month", "> 8 (engagement proxy)"],
        ["Game Reward Sessions per MAU/Week", "> 3 (retention driver, parent-controlled)"],
      ],
    },
    appendix: {
      title: "10. Appendices",
      techStack: {
        title: "A. Technology Stack",
        items: [
          ["Frontend", "Next.js 16 (React 19), TypeScript, Tailwind CSS 4"],
          ["Backend", "Supabase (PostgreSQL, Auth, Storage, Edge Functions)"],
          ["Payments", "Stripe (web), RevenueCat + StoreKit/Play Billing (native)"],
          ["AI Providers", "OpenAI GPT-4o, Anthropic Claude, Google Gemini, xAI Grok"],
          ["Hosting", "Vercel (web), Capacitor (iOS/Android native)"],
          ["Analytics", "Mixpanel (COPPA-compliant, suppressed for children)"],
          ["CI/CD", "GitHub Actions (lint, type check, a11y, build, deploy)"],
          ["Offline", "Service Worker + IndexedDB + Cache API"],
          ["Game Engine", "Custom proprietary educational game engine"],
        ],
      },
      compliance: {
        title: "B. Compliance Status",
        items: [
          ["COPPA (Children under 13)", "Implemented — parental gates, analytics suppression, chat restrictions"],
          ["GDPR (EU Users)", "Implemented — cookie consent banner, data deletion, privacy policy"],
          ["Apple App Store Guidelines", "Implemented — RevenueCat IAP, parental gates, COPPA age-gating, content rating declared"],
          ["Google Play Policies", "Implemented — data safety form complete, IARC rating, families program enrollment ready"],
          ["Accessibility (WCAG 2.1 AA)", "Implemented — axe-core e2e tests, jsx-a11y ESLint rules, ARIA labels, keyboard navigation"],
        ],
      },
      pricingFull: {
        title: "C. Complete Pricing Schedule",
        headers: ["SKU", "Monthly", "Annual", "Notes"],
        rows: [
          ["Core Practice", "Free", "Free", "Games + limited previews"],
          ["Learning Plus", "$8.88", "$99.99", "EN + 1 language"],
          ["Learning Family (4 users)", "$12.99", "$129.99", "EN + 1 language"],
          ["Household All-Access (6 users)", "$29.99", "$299.00", "All languages + all add-ons"],
          ["Additional Language Module", "$2.99", "$14.99", "Per language add-on"],
          ["Master Level Course", "—", "$9.99", "Per course (3-pack: $22.99)"],
          ["Exam Prep Pack", "—", "$6.99", "Per exam (3-pack: $17.99)"],
          ["Audiobook Library", "$4.99", "$39.99", "Full library access"],
          ["School License", "$5.88/seat", "$70.56/seat", "Annual contract, PO/wire/ACH"],
          ["White-Label License", "Custom", "Custom", "Institutional branding"],
        ],
      },
    },
  },
};

// ─── Content Data (PL) ──────────────────────────────────────────────
const PL = {
  fileName: "KOYDO-EXECUTIVE-SUMMARY-2026-Q1-PL.docx",
  cover: {
    title: "KOYDO",
    subtitle: "Podsumowanie Wykonawcze — Q1 2026",
    confidential: "POUFNE — Tylko dla Uprawnionych Odbiorców",
    date: "Marzec 2026",
  },
  sections: {
    executiveOverview: {
      title: "1. Przegląd Wykonawczy",
      paragraphs: [
        "Koydo to platforma edukacyjna wspierana sztuczną inteligencją, która dostarcza spersonalizowaną edukację w ponad 800 strukturyzowanych modułach edukacyjnych — od fonetyki przedszkolnej po finanse na poziomie MBA. Platforma łączy interaktywne lekcje, treści wideo, quizy i ponad 225 gier edukacyjnych (napędzanych własnym silnikiem gier), tworząc angażujące doświadczenie edukacyjne dla użytkowników w wieku od 3 lat do dorosłych.",
        "Misja: Demokratyzacja wysokiej jakości edukacji poprzez udostępnienie spersonalizowanego, prowadzonego przez AI nauczania — dostępnego i przystępnego cenowo dla każdej rodziny, w każdym języku — docelowo 50 języków na świecie.",
        "Rynek docelowy: Rodziny z dziećmi w wieku 3-18 lat (segment podstawowy), dorośli uczniowie i rozwój zawodowy (segment wtórny). Początkowy fokus geograficzny na rynki anglojęzyczne z aktywną ekspansją na rynki hiszpańskojęzyczne, chińskojęzyczne (mandaryński) i polskie, skalując do 50 języków.",
        "Koydo wyróżnia się: (1) bezprecedensową szerokością treści — ponad 800 modułów z ponad 8 000 lekcjami; (2) wielomodelowym korepetytorem AI (OpenAI, Anthropic, Google Gemini, xAI Grok); (3) zgodnością z COPPA; (4) wieloplatformowym dostarczaniem treści (web, iOS, Android); (5) systemem gier-jako-nagrody w pełni kontrolowanym przez rodziców; (6) własnym silnikiem gier do immersyjnych doświadczeń edukacyjnych.",
      ],
    },
    productStatus: {
      title: "2. Status Produktu (stan na marzec 2026)",
      items: [
        ["Moduły edukacyjne", "822 strukturyzowane moduły z ~8 200 lekcjami (10 lekcji na moduł: 6 wideo + 2 interaktywne + 2 quizy)"],
        ["Gry edukacyjne", "Ponad 225 gier — napędzane własnym silnikiem gier, wykorzystywane jako nagrody kontrolowane przez rodziców"],
        ["Języki", "4 języki aktywne (EN, ES, ZH, PL) z infrastrukturą dla łącznie 50 planowanych języków"],
        ["Platformy", "Aplikacja webowa na koydo.com — kompilacje iOS i Android w procesie składania"],
        ["Korepetycje AI", "Wielodostawcowe korepetycje AI: OpenAI GPT-4o, Anthropic Claude, Google Gemini, xAI Grok"],
        ["Zgodność", "Zgodność z COPPA (bramki rodzicielskie, treści warstwowane wiekowo, wygaszanie analityki dla dzieci poniżej 13 lat)"],
        ["Panel rodzicielski", "Panel analityczny dla rodziców — postępy w lekcjach, śledzenie czasu, kontrola nagród w grach"],
        ["Tryb offline", "Service worker z pakietami lekcji opartymi na IndexedDB i synchronizacją postępów"],
        ["Biblioteka audiobooków", "Biblioteka audiobooków z otwartą licencją — subskrypcja $4,99/mies."],
        ["White-Label", "Infrastruktura licencjonowania white-label gotowa dla partnerów instytucjonalnych na premierę"],
        ["Portal partnerski", "Portal partnerów/influencerów do współpracy afiliacyjnej i treściowej"],
        ["Silnik gier", "Własny silnik gier edukacyjnych — rozszerzalny o nowe tryby i gatunki gier"],
      ],
    },
    marketAnalysis: {
      title: "3. Analiza Rynku",
      overview: [
        "Globalny rynek EdTech K-12 jest wart $295,6 miliarda w 2025 roku, z prognozą wzrostu do $908,1 miliarda do 2034 roku przy CAGR 13,3%. Szerszy rynek technologii edukacyjnych przekracza $233 miliardy globalnie z CAGR 20,5% do 2035 roku.",
        "Sektor aplikacji edukacyjnych wygenerował $6,3 miliarda przychodów mobilnych w 2024 roku, z ~750 milionami aktywnych użytkowników aplikacji edukacyjnych na świecie. K-12 stanowi największy i najszybciej rosnący segment.",
      ],
      marketSize: {
        title: "Całkowity Rynek Adresowalny (TAM):",
        items: [
          ["Globalny K-12 EdTech (2025)", "$295,6 miliarda"],
          ["Prognozowany K-12 EdTech (2034)", "$908,1 miliarda"],
          ["CAGR (2025-2034)", "13,3%"],
          ["Przychody aplikacji edukacyjnych (2024)", "$6,3 miliarda (tylko mobile)"],
          ["Globalni użytkownicy edukacji", "~750 milionów aktywnych"],
          ["Rynek osiągalny Koydo (EN+ES+ZH+PL)", "~$85 miliardów (28,7% TAM)"],
          ["Rynek uzyskiwalny Koydo (Rok 1)", "~$2,4 miliona (0,003% penetracja)"],
        ],
      },
    },
    pricing: {
      title: "4. Matryca Cenowa",
      subtitle: "Poziomy Premierowe (Rynki Tier 1 i Tier 2 — Jednolite Ceny):",
      tiers: [
        { name: "Core Practice", price: "Bezpłatnie", description: "Wszystkie 225+ gier edukacyjnych jako nagrody kontrolowane przez rodziców, ograniczone podglądy lekcji" },
        { name: "Learning Plus (Miesięcznie)", price: "$8,88/mies.", description: "Pełny dostęp do wszystkich modułów w języku angielskim + 1 dodatkowy język" },
        { name: "Learning Plus (Roczny)", price: "$99,99/rok", description: "Plan roczny — $8,33/mies. efektywnie (6% oszczędności)" },
        { name: "Learning Family (Miesięcznie)", price: "$12,99/mies.", description: "Pełny dostęp dla maks. 4 członków rodziny w angielskim + 1 język" },
        { name: "Learning Family (Roczny)", price: "$129,99/rok", description: "Roczny plan rodzinny — $10,83/mies. efektywnie (17% oszczędności)" },
        { name: "Household All-Access (Miesięcznie)", price: "$29,99/mies.", description: "Maks. 6 uczniów, wszystkie języki, priorytetowe korepetycje AI, wszystkie dodatki" },
        { name: "Household All-Access (Roczny)", price: "$299,00/rok", description: "Roczny plan domowy — $24,92/mies. efektywnie (17% oszczędności)" },
      ],
      addons: [
        { name: "Dodatkowy moduł językowy", price: "$2,99/mies. lub $14,99/rok", description: "Odblokowanie jednego dodatkowego języka" },
        { name: "Kursy poziomu Master", price: "$9,99/rok za kurs", description: "Zaawansowane moduły kursowe (pakiet 3: $22,99)" },
        { name: "Pakiet przygotowania do egzaminu", price: "$6,99/rok za egzamin", description: "SAT, ACT, GCSE, AP i egzaminy krajowe (pakiet 3: $17,99)" },
        { name: "Dostęp do biblioteki audiobooków", price: "$4,99/mies. lub $39,99/rok", description: "Pełny dostęp do kuratorowanej biblioteki audiobooków" },
      ],
      institutional: [
        { name: "Licencja szkolna / instytucjonalna", price: "$5,88/stanowisko/mies. (rozliczane rocznie)", description: "Dostęp nauczyciel + uczeń, pełne odblokowanie w godzinach szkolnych na poziomie dziecka ±2 poziomy" },
        { name: "Licencja White-Label", price: "Cena indywidualna", description: "Platforma z brandingiem dla partnerów instytucjonalnych — gotowa na premierę" },
      ],
      geographic: {
        title: "Geograficzne poziomy cenowe:",
        tiers: [
          ["Tier 1 (USA, Kanada, UE, Australia)", "1,0×", "$8,88/mies. baza"],
          ["Tier 2 (Europa Zachodnia, UK, AU/NZ)", "1,0×", "$8,88/mies. (jak Tier 1)"],
          ["Tier 3 (LATAM, Europa Wsch., wybrane MENA)", "0,88×", "$7,77/mies. baza"],
          ["Tier 4 (Indie, Azja Płd.-Wsch.)", "0,75×", "$6,66/mies. baza"],
          ["Tier 5 (Afryka Subsaharyjska)", "0,50×", "$4,44/mies. baza"],
        ],
      },
    },
    competitive: {
      title: "5. Krajobraz Konkurencyjny — Analiza Top 20",
      featureHeaders: ["Cecha", "Koydo", "Duolingo", "Khan Academy", "ABCmouse", "IXL", "Brilliant"],
      featureRows: EN.sections.competitive.featureRows,
      top20Headers: EN.sections.competitive.top20Headers,
      migrationAnalysis: {
        title: "Analiza Migracji i Przełączania Konkurencji",
        paragraphs: [
          "EdTech ma średni wskaźnik churnu 9,6% — znacznie wyższy niż enterprise SaaS (0,25%). Niektóre segmenty odnotowują 13,2% miesięcznego churnu. Wczesna retencja to największe wyzwanie: 73-96% użytkowników odchodzi w ciągu pierwszych 30-90 dni.",
          "Gdy tańsza alternatywa z porównywalnym lub lepszym zestawem funkcji wchodzi na rynek, dane historyczne pokazują, że 15-25% użytkowników przetestuje nową platformę w ciągu 6 miesięcy, a 8-12% w pełni się przełączy w ciągu 12 miesięcy.",
          "Przewagi Koydo w przełączaniu vs. główni konkurenci:",
        ],
        advantages: EN.sections.competitive.migrationAnalysis.advantages,
        totalAddressable: "Konserwatywny cel migracji z wszystkich konkurentów: 500K-1M potencjalnych przełączeń w Roku 1, reprezentujących $4,4M-$8,8M rocznej powtarzalnej okazji przychodowej.",
      },
    },
    expansion: {
      title: "6. Mapa Produktu",
      phases: [
        {
          name: "Premiera (Marzec 2026) — Dostępne od Dnia 1",
          items: [
            "Pełna platforma edukacyjna: 822 moduły, 8 200+ lekcji, 225+ gier (własny silnik gier)",
            "Panel analityczny dla rodziców z kontrolą nagród w grach",
            "Poziom subskrypcji Household All-Access",
            "Licencjonowanie szkolne/instytucjonalne z dostępem nauczyciel-uczeń (poziom dziecka ±2 poziomy, $5,88/stanowisko)",
            "Infrastruktura licencjonowania white-label dla partnerów instytucjonalnych",
            "Portal partnerów/influencerów do współpracy afiliacyjnej",
            "Biblioteka audiobooków z otwartą licencją ($4,99/mies.)",
            "System gier-jako-nagrody w pełni kontrolowany przez rodziców",
            "4 języki aktywne (EN, ES, ZH, PL), infrastruktura dla 50",
          ],
        },
        {
          name: "Faza 2 — Q2-Q3 2026",
          items: [
            "Odblokowania przygotowania do egzaminów (SAT, ACT, GCSE, AP — cennik dodatkowy)",
            "Integracja z Google Classroom / Canvas LMS / Schoology",
            "Integracja z Microsoft Teams for Education",
            "Meta (Facebook/Instagram) — udostępnianie społecznościowe i społeczność rodziców",
            "Integracja z ClassDojo dla szkół podstawowych",
            "Certyfikaty ukończenia z systemem weryfikowalnych poświadczeń",
            "Zaawansowana moderacja treści i AI bezpieczeństwa (wielowarstwowe filtrowanie)",
            "Rozszerzony silnik gier: nowe gatunki (puzzle, strategia, symulacja)",
            "Ekspansja do 15 języków",
          ],
        },
        {
          name: "Faza 3 — Q4 2026 - Q1 2027",
          items: [
            "Kinematograficzne tryby gier (narracje edukacyjne) via własny silnik",
            "Nauka rówieśnicza / wyzwania współpracy",
            "Ekspansja do 30 języków",
            "Architektura mobile offline-first dla rynków wschodzących (Tier 4/5)",
            "Więcej gier edukacyjnych: szablony gier generowane przez użytkowników",
          ],
        },
        {
          name: "Faza 4 — 2027+",
          items: [
            "Doświadczenia XR (Apple Vision Pro, Meta Quest) — immersyjne laboratoria naukowe",
            "Silnik adaptacyjnego uczenia — dostosowywanie trudności w czasie rzeczywistym",
            "Rynek twórców — umożliwienie edukatorom publikowania dodatkowych treści",
            "Pełne SDK silnika gier dla zewnętrznych deweloperów gier edukacyjnych",
            "Ekspansja do 50 języków",
          ],
        },
      ],
      recommendations: [
        "Wykorzystanie kanału licencji szkolnych ($5,88/stanowisko) dla przewidywalnych przychodów B2B",
        "Skalowanie funkcji zaangażowania rodziców — powiadomienia push, raporty tygodniowe, ustalanie celów",
        "Budowa rynku twórców dla treści publikowanych przez edukatorów — efekty sieciowe i retencja",
        "Ekspansja licencjonowania white-label jako strumienia przychodów o niskim koszcie marginalnym",
        "Kampanie migracyjne z Duolingo/ABCmouse podkreślające szerokość treści + bezpieczeństwo dzieci",
      ],
    },
    financial: {
      title: "7. Projekcje Finansowe (Umiarkowanie Optymistyczne, 8 Kwartałów)",
      costNote: "Uwaga: Koydo działa jako szczupła operacja jednego developera. Koszty to głównie inferencja AI i infrastruktura chmurowa — około 1/3 typowych kosztów startupu.",
      assumptions: [
        "Bazowy wzrost MAU: 20% miesiąc do miesiąca przez pierwsze 6 miesięcy, malejąc do 10% MoM",
        "Konwersja free-to-paid: 4,5% (uzasadniona szerszą treścią niż konkurencja jednodziedzinowa)",
        "Mieszany ARPPU: $11,01/mies. (ważony: 50% Learning Plus, 20% Family, 10% Household, 15% dodatki, 5% instytucjonalne)",
        "ARPPU netto po prowizjach platform (22% mieszane): $8,59/mies.",
        "Miesięczny churn: 5,5% (poniżej średniej branżowej 9,6% — napędzany panelem rodzicielskim + planami rodzinnymi)",
        "Szczupła struktura kosztów: jeden developer, brak biura, brak wynagrodzeń — koszty = API AI + infrastruktura",
        "Koszty API AI: $0,05/aktywny uczeń/miesiąc (malejące dzięki cachowaniu)",
        "Infrastruktura: Vercel Pro (~$20/mies.) + Supabase Pro (~$25/mies.) + opłaty skalowania",
      ],
      quarters: EN.sections.financial.quarters,
      breakeven: "Próg rentowności od kwartału premierowego (Q2 2026). Szczupła struktura kosztów jednego developera oznacza natychmiastową rentowność. Skumulowany zysk do Q1 2028: ~$845 790.",
      summaryLine: "Skumulowany przychód Rok 1 (Q2-Q4 2026): ~$61 900 | Zysk netto Rok 1: ~$56 060",
      competitionVariations: {
        title: "Analiza Scenariuszy: Wskaźniki Przejęcia Konkurencji",
        scenarios: EN.sections.financial.competitionVariations.scenarios,
        note: "Na podstawie łącznej bazy płacących subskrybentów ~480K u bezpośrednich konkurentów (ABCmouse, IXL, Prodigy, SplashLearn, Brilliant, Epic!, Lingokids) obsługujących pokrywające się grupy wiekowe.",
      },
    },
    risks: {
      title: "8. Czynniki Ryzyka",
      items: [
        ["Odpowiedzialność COPPA/Prywatność", "WYSOKI", "Kary za niezgodność do $50 000 za naruszenie. Ograniczone przez dedykowaną architekturę zgodności."],
        ["Odrzucenie przez App Store", "ŚREDNI", "Cykle przeglądu Apple/Google 2-7 dni. Ryzyko odrzucenia ze względu na IAP lub politykę treści."],
        ["Zmienność kosztów API LLM", "ŚREDNI", "Koszty korepetycji AI zależą od cen API. Ograniczone przez strategię wielu dostawców (4 LLM)."],
        ["Presja konkurencyjna", "ŚREDNI", "Duolingo ($1 mld+ przychodów) i Khan Academy (120M użytkowników) mają rozpoznawalność marki."],
        ["Churn użytkowników", "ŚREDNI", "Edukacja: średnio 9,6% churn/mies. Cel Koydo: 5,5% dzięki grywalizacji i panelowi rodzicielskiemu."],
        ["Ryzyko kluczowej osoby", "ŚREDNI", "Operacja jednego developera. Ograniczone przez CI/CD, dokumentację i modularną architekturę."],
        ["Jakość tłumaczeń", "NISKI", "Tłumaczenia AI w 50 językach mogą zawierać błędy. Ograniczone przez pipeline przeglądu ludzkiego."],
        ["Skalowanie infrastruktury", "NISKI", "Architektura Supabase + Vercel skaluje się do 500K MAU."],
      ],
    },
    metrics: {
      title: "9. Panel Kluczowych Wskaźników (Cele)",
      items: [
        ["Miesięczni Aktywni Użytkownicy (MAU)", "8K → 370K w ciągu 8 kwartałów"],
        ["Konwersja Free-to-Paid", "Cel 4,5% (benchmark: 2-5%)"],
        ["Mieszany ARPPU", "$11,01/mies. brutto, $8,59/mies. netto po prowizjach"],
        ["Miesięczny Wskaźnik Churnu", "< 5,5% (średnia edukacji: 9,6%)"],
        ["Koszt Pozyskania Klienta (CAC)", "< $12 (organiczne + ASO, szczupły marketing)"],
        ["Wartość Życiowa Klienta (LTV)", "$156 (przy 5,5% churnu, $8,59 netto ARPPU)"],
        ["Współczynnik LTV:CAC", "> 13:1 (zdrowy próg: > 3:1)"],
        ["Marża brutto", "> 88% (szczupła struktura kosztów, brak wynagrodzeń)"],
        ["Lekcje ukończone na MAU/miesiąc", "> 8 (wskaźnik zaangażowania)"],
        ["Sesje nagrodowe gier na MAU/tydzień", "> 3 (czynnik retencji, kontrolowane przez rodziców)"],
      ],
    },
    appendix: {
      title: "10. Załączniki",
      techStack: {
        title: "A. Stos Technologiczny",
        items: EN.sections.appendix.techStack.items,
      },
      compliance: {
        title: "B. Status Zgodności",
        items: [
          ["COPPA (Dzieci poniżej 13 lat)", "Wdrożone — bramki rodzicielskie, wygaszanie analityki, ograniczenia czatu"],
          ["RODO (Użytkownicy UE)", "Wdrożone — baner zgody na cookies, usuwanie danych, polityka prywatności"],
          ["Wytyczne Apple App Store", "Wdrożone — RevenueCat IAP, bramki rodzicielskie, weryfikacja wieku COPPA, ocena treści"],
          ["Polityki Google Play", "Wdrożone — formularz bezpieczeństwa danych, ocena IARC, gotowość programu dla rodzin"],
          ["Dostępność (WCAG 2.1 AA)", "Wdrożone — testy e2e axe-core, reguły ESLint jsx-a11y, etykiety ARIA, nawigacja klawiaturowa"],
        ],
      },
      pricingFull: {
        title: "C. Pełny Cennik",
        headers: ["SKU", "Miesięcznie", "Rocznie", "Uwagi"],
        rows: [
          ["Core Practice", "Bezpłatnie", "Bezpłatnie", "Gry + ograniczone podglądy"],
          ["Learning Plus", "$8,88", "$99,99", "EN + 1 język"],
          ["Learning Family (4 użytkow.)", "$12,99", "$129,99", "EN + 1 język"],
          ["Household All-Access (6 użytkow.)", "$29,99", "$299,00", "Wszystkie języki + dodatki"],
          ["Dodatkowy moduł językowy", "$2,99", "$14,99", "Dodatek za język"],
          ["Kurs poziomu Master", "—", "$9,99", "Za kurs (pakiet 3: $22,99)"],
          ["Pakiet egzaminacyjny", "—", "$6,99", "Za egzamin (pakiet 3: $17,99)"],
          ["Biblioteka audiobooków", "$4,99", "$39,99", "Pełny dostęp do biblioteki"],
          ["Licencja szkolna", "$5,88/stan.", "$70,56/stan.", "Umowa roczna, PO/przelew"],
          ["Licencja White-Label", "Indywid.", "Indywid.", "Branding instytucjonalny"],
        ],
      },
    },
  },
};

// ─── Document Builder ────────────────────────────────────────────────

const BRAND_COLOR = "1a1a2e";
const ACCENT_COLOR = "6366f1";
const HEADER_BG = "f1f5f9";
const CHART_COLORS = {
  emerald: "34d399",
  violet: "8b5cf6",
  sky: "38bdf8",
  amber: "f59e0b",
  rose: "f43f5e",
  indigo: "6366f1",
};

const NO_BORDER = {
  top: { style: BorderStyle.NONE, size: 0, color: "ffffff" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "ffffff" },
  left: { style: BorderStyle.NONE, size: 0, color: "ffffff" },
  right: { style: BorderStyle.NONE, size: 0, color: "ffffff" },
};

// Full usable page width in DXA (8.5" = 12240 DXA, minus 0.75" margins = ~9960 DXA)
const PAGE_WIDTH = 9960;

function createStyledParagraph(text, options = {}) {
  const { bold, size, color, spacing, alignment, font } = {
    bold: false,
    size: 24,
    color: "333333",
    spacing: { after: 120 },
    alignment: AlignmentType.LEFT,
    font: "Calibri",
    ...options,
  };

  return new Paragraph({
    alignment,
    spacing,
    children: [
      new TextRun({
        text,
        bold,
        size,
        color,
        font,
      }),
    ],
  });
}

function createTable(headers, rows, colPcts) {
  const totalPct = colPcts.reduce((a, b) => a + b, 0);
  const colWidths = colPcts.map((pct) => Math.round((pct / totalPct) * PAGE_WIDTH));

  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) =>
      new TableCell({
        width: { size: colWidths[i], type: WidthType.DXA },
        shading: { type: ShadingType.SOLID, color: HEADER_BG, fill: HEADER_BG },
        children: [
          new Paragraph({
            children: [new TextRun({ text: h, bold: true, size: 20, font: "Calibri", color: BRAND_COLOR })],
            spacing: { before: 60, after: 60 },
          }),
        ],
      }),
    ),
  });

  const dataRows = rows.map(
    (row) =>
      new TableRow({
        children: row.map((cell, i) =>
          new TableCell({
            width: { size: colWidths[i], type: WidthType.DXA },
            children: [
              new Paragraph({
                children: [new TextRun({ text: String(cell), size: 20, font: "Calibri", color: "333333" })],
                spacing: { before: 40, after: 40 },
              }),
            ],
          }),
        ),
      }),
  );

  return new Table({
    rows: [headerRow, ...dataRows],
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
  });
}

/**
 * Creates a horizontal bar chart using colored table cells.
 * Each row: Label | Colored bar (proportional width) | Value
 */
function createBarChart(title, data, options = {}) {
  const { color = CHART_COLORS.emerald, barLabel = "Value" } = options;
  const maxValue = Math.max(...data.map((d) => d.value));

  // Title row
  const titleRow = new TableRow({
    children: [
      new TableCell({
        columnSpan: 3,
        borders: NO_BORDER,
        children: [
          new Paragraph({
            children: [new TextRun({ text: title, bold: true, size: 22, font: "Calibri", color: BRAND_COLOR })],
            spacing: { before: 100, after: 80 },
          }),
        ],
      }),
    ],
  });

  const barRows = data.map((d) => {
    const barPct = Math.max(Math.round((d.value / maxValue) * 100), 2);
    // Create a bar using a filled cell + empty cell
    const barWidthDxa = Math.round((barPct / 100) * PAGE_WIDTH * 0.55);
    const emptyWidthDxa = Math.round(PAGE_WIDTH * 0.55) - barWidthDxa;

    return new TableRow({
      children: [
        // Label cell (20%)
        new TableCell({
          width: { size: Math.round(PAGE_WIDTH * 0.22), type: WidthType.DXA },
          borders: NO_BORDER,
          children: [
            new Paragraph({
              children: [new TextRun({ text: d.label, size: 18, font: "Calibri", color: "555555" })],
              spacing: { before: 20, after: 20 },
            }),
          ],
        }),
        // Colored bar cell
        new TableCell({
          width: { size: barWidthDxa, type: WidthType.DXA },
          borders: NO_BORDER,
          shading: { type: ShadingType.SOLID, color, fill: color },
          children: [
            new Paragraph({
              children: [new TextRun({ text: "", size: 16 })],
              spacing: { before: 6, after: 6 },
            }),
          ],
        }),
        // Value cell (remaining)
        new TableCell({
          width: { size: emptyWidthDxa + Math.round(PAGE_WIDTH * 0.23), type: WidthType.DXA },
          borders: NO_BORDER,
          children: [
            new Paragraph({
              children: [new TextRun({ text: `  ${d.displayValue}`, bold: true, size: 18, font: "Calibri", color: "333333" })],
              spacing: { before: 20, after: 20 },
            }),
          ],
        }),
      ],
    });
  });

  return new Table({
    rows: [titleRow, ...barRows],
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
  });
}

/**
 * Creates a dual-bar chart for comparing two metrics side by side.
 */
function createDualBarChart(title, data, options = {}) {
  const { color1 = CHART_COLORS.emerald, color2 = CHART_COLORS.violet, label1 = "A", label2 = "B" } = options;
  const maxValue = Math.max(...data.flatMap((d) => [d.value1, d.value2]));

  const titleRow = new TableRow({
    children: [
      new TableCell({
        columnSpan: 3,
        borders: NO_BORDER,
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: title, bold: true, size: 22, font: "Calibri", color: BRAND_COLOR }),
              new TextRun({ text: `    `, size: 18 }),
              new TextRun({ text: `■ ${label1}`, size: 18, font: "Calibri", color: color1 }),
              new TextRun({ text: `   ■ ${label2}`, size: 18, font: "Calibri", color: color2 }),
            ],
            spacing: { before: 100, after: 80 },
          }),
        ],
      }),
    ],
  });

  const barRows = data.flatMap((d) => {
    const barPct1 = Math.max(Math.round((d.value1 / maxValue) * 100), 2);
    const barPct2 = Math.max(Math.round((d.value2 / maxValue) * 100), 2);
    const barW1 = Math.round((barPct1 / 100) * PAGE_WIDTH * 0.55);
    const barW2 = Math.round((barPct2 / 100) * PAGE_WIDTH * 0.55);
    const totalBar = Math.round(PAGE_WIDTH * 0.55);

    return [
      new TableRow({
        children: [
          new TableCell({
            width: { size: Math.round(PAGE_WIDTH * 0.22), type: WidthType.DXA },
            borders: NO_BORDER,
            children: [
              new Paragraph({
                children: [new TextRun({ text: d.label, size: 18, font: "Calibri", color: "555555" })],
                spacing: { before: 16, after: 4 },
              }),
            ],
          }),
          new TableCell({
            width: { size: barW1, type: WidthType.DXA },
            borders: NO_BORDER,
            shading: { type: ShadingType.SOLID, color: color1, fill: color1 },
            children: [new Paragraph({ children: [new TextRun({ text: "", size: 14 })], spacing: { before: 4, after: 4 } })],
          }),
          new TableCell({
            width: { size: totalBar - barW1 + Math.round(PAGE_WIDTH * 0.23), type: WidthType.DXA },
            borders: NO_BORDER,
            children: [
              new Paragraph({
                children: [new TextRun({ text: `  ${d.display1}`, bold: true, size: 16, font: "Calibri", color: color1 })],
                spacing: { before: 4, after: 4 },
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: Math.round(PAGE_WIDTH * 0.22), type: WidthType.DXA },
            borders: NO_BORDER,
            children: [new Paragraph({ children: [new TextRun({ text: "", size: 14 })], spacing: { before: 2, after: 12 } })],
          }),
          new TableCell({
            width: { size: barW2, type: WidthType.DXA },
            borders: NO_BORDER,
            shading: { type: ShadingType.SOLID, color: color2, fill: color2 },
            children: [new Paragraph({ children: [new TextRun({ text: "", size: 14 })], spacing: { before: 4, after: 4 } })],
          }),
          new TableCell({
            width: { size: totalBar - barW2 + Math.round(PAGE_WIDTH * 0.23), type: WidthType.DXA },
            borders: NO_BORDER,
            children: [
              new Paragraph({
                children: [new TextRun({ text: `  ${d.display2}`, bold: true, size: 16, font: "Calibri", color: color2 })],
                spacing: { before: 4, after: 12 },
              }),
            ],
          }),
        ],
      }),
    ];
  });

  return new Table({
    rows: [titleRow, ...barRows],
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
  });
}

function buildDocument(content) {
  const isEN = content === EN;
  const children = [];

  // Cover Page
  children.push(
    createStyledParagraph("", { spacing: { before: 3000 } }),
    createStyledParagraph(content.cover.title, {
      bold: true, size: 72, color: BRAND_COLOR, alignment: AlignmentType.CENTER, spacing: { after: 200 },
    }),
    createStyledParagraph(content.cover.subtitle, {
      size: 32, color: ACCENT_COLOR, alignment: AlignmentType.CENTER, spacing: { after: 600 },
    }),
    createStyledParagraph(content.cover.date, {
      size: 24, color: "666666", alignment: AlignmentType.CENTER, spacing: { after: 200 },
    }),
    createStyledParagraph(content.cover.confidential, {
      bold: true, size: 20, color: "cc0000", alignment: AlignmentType.CENTER, spacing: { after: 400 },
    }),
    new Paragraph({ children: [new PageBreak()] }),
  );

  const s = content.sections;

  // 1. Executive Overview
  children.push(createStyledParagraph(s.executiveOverview.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  for (const p of s.executiveOverview.paragraphs) {
    children.push(createStyledParagraph(p, { spacing: { after: 160 } }));
  }
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 2. Product Status
  children.push(createStyledParagraph(s.productStatus.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  children.push(createTable(
    [isEN ? "Component" : "Komponent", isEN ? "Details" : "Szczegóły"],
    s.productStatus.items,
    [25, 75],
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 3. Market Analysis (NEW)
  children.push(createStyledParagraph(s.marketAnalysis.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  for (const p of s.marketAnalysis.overview) {
    children.push(createStyledParagraph(p, { spacing: { after: 160 } }));
  }
  children.push(createStyledParagraph(s.marketAnalysis.marketSize.title, { bold: true, size: 24, spacing: { after: 100 } }));
  children.push(createTable(
    [isEN ? "Metric" : "Wskaźnik", isEN ? "Value" : "Wartość"],
    s.marketAnalysis.marketSize.items,
    [45, 55],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 120 } }));

  // Market Size Bar Chart
  children.push(createBarChart(
    isEN ? "Global K-12 EdTech Market Growth ($B)" : "Wzrost Globalnego Rynku EdTech K-12 ($mld)",
    [
      { label: "2020", value: 89, displayValue: "$89B" },
      { label: "2022", value: 145, displayValue: "$145B" },
      { label: "2025", value: 296, displayValue: "$296B" },
      { label: "2028 (est.)", value: 480, displayValue: "$480B" },
      { label: "2030 (est.)", value: 650, displayValue: "$650B" },
      { label: "2034 (est.)", value: 908, displayValue: "$908B" },
    ],
    { color: CHART_COLORS.indigo },
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 4. Pricing
  children.push(createStyledParagraph(s.pricing.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  children.push(createStyledParagraph(s.pricing.subtitle, { bold: true, size: 24, spacing: { after: 120 } }));
  children.push(createTable(
    [isEN ? "Tier" : "Poziom", isEN ? "Price" : "Cena", isEN ? "Description" : "Opis"],
    s.pricing.tiers.map((t) => [t.name, t.price, t.description]),
    [25, 18, 57],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 160 } }));

  // Add-ons
  children.push(createStyledParagraph(isEN ? "Add-On Modules:" : "Moduły Dodatkowe:", { bold: true, size: 24, spacing: { after: 100 } }));
  children.push(createTable(
    [isEN ? "Add-On" : "Dodatek", isEN ? "Price" : "Cena", isEN ? "Description" : "Opis"],
    s.pricing.addons.map((a) => [a.name, a.price, a.description]),
    [25, 22, 53],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 160 } }));

  // Institutional
  children.push(createStyledParagraph(isEN ? "Institutional Licensing:" : "Licencjonowanie Instytucjonalne:", { bold: true, size: 24, spacing: { after: 100 } }));
  children.push(createTable(
    [isEN ? "License" : "Licencja", isEN ? "Price" : "Cena", isEN ? "Description" : "Opis"],
    s.pricing.institutional.map((inst) => [inst.name, inst.price, inst.description]),
    [25, 22, 53],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 160 } }));

  // Geographic pricing
  children.push(createStyledParagraph(s.pricing.geographic.title, { bold: true, size: 24, spacing: { after: 100 } }));
  children.push(createTable(
    [isEN ? "Region" : "Region", isEN ? "Multiplier" : "Mnożnik", isEN ? "Base Price" : "Cena Bazowa"],
    s.pricing.geographic.tiers,
    [40, 15, 45],
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 5. Competitive Landscape
  children.push(createStyledParagraph(s.competitive.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));

  // Top 20 Competitor Table
  children.push(createStyledParagraph(isEN ? "Top 20 EdTech Competitors by Revenue:" : "Top 20 Konkurentów EdTech wg Przychodów:", { bold: true, size: 24, spacing: { after: 100 } }));
  const sortedCompetitors = [...COMPETITORS].sort((a, b) => b.revenue - a.revenue);
  children.push(createTable(
    s.competitive.top20Headers,
    sortedCompetitors.map((c, i) => [
      String(i + 1),
      c.name,
      `$${c.revenue}M`,
      c.mau >= 1000 ? `${(c.mau / 1000).toFixed(0)}M` : `${c.mau}K`,
      c.paid >= 1000 ? `${(c.paid / 1000).toFixed(1)}M` : `${c.paid}K`,
      c.price,
      c.ages,
      String(c.year),
    ]),
    [5, 14, 12, 10, 10, 18, 13, 9],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 160 } }));

  // Revenue Bar Chart - Top 10
  children.push(createBarChart(
    isEN ? "Competitor Revenue ($M Annual)" : "Przychody Konkurentów ($M Rocznie)",
    sortedCompetitors.slice(0, 12).map((c) => ({
      label: c.name,
      value: c.revenue,
      displayValue: `$${c.revenue}M`,
    })),
    { color: CHART_COLORS.violet },
  ));
  children.push(createStyledParagraph("", { spacing: { after: 160 } }));

  // MAU vs Paid Subscribers Chart
  children.push(createDualBarChart(
    isEN ? "MAU vs Paid Subscribers (Top 10)" : "MAU vs Płatni Subskrybenci (Top 10)",
    sortedCompetitors.slice(0, 10).map((c) => ({
      label: c.name,
      value1: c.mau,
      value2: c.paid * 10, // Scale paid up for visibility
      display1: c.mau >= 1000 ? `${(c.mau / 1000).toFixed(0)}M MAU` : `${c.mau}K MAU`,
      display2: c.paid >= 1000 ? `${(c.paid / 1000).toFixed(1)}M paid` : `${c.paid}K paid`,
    })),
    { color1: CHART_COLORS.sky, color2: CHART_COLORS.amber, label1: "MAU", label2: "Paid" },
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // Feature comparison grid
  children.push(createStyledParagraph(isEN ? "Feature Comparison (Koydo vs. Top 5):" : "Porównanie Funkcji (Koydo vs. Top 5):", { bold: true, size: 24, spacing: { after: 100 } }));
  children.push(createTable(
    s.competitive.featureHeaders,
    s.competitive.featureRows,
    [16, 14, 14, 14, 14, 14, 14],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 200 } }));

  // Where Koydo fits
  children.push(createStyledParagraph(
    isEN
      ? "Koydo's Position: Koydo occupies a unique niche — the only platform offering 60+ subjects, multi-LLM AI tutoring, 225+ games (custom engine), COPPA compliance, and 50-language roadmap at $8.88/mo. No competitor offers this combination."
      : "Pozycja Koydo: Koydo zajmuje unikalną niszę — jedyna platforma oferująca 60+ przedmiotów, wielomodelowe korepetycje AI, 225+ gier (własny silnik), zgodność z COPPA i plan 50 języków za $8,88/mies. Żaden konkurent nie oferuje takiej kombinacji.",
    { bold: true, color: ACCENT_COLOR, spacing: { after: 200 } },
  ));

  // Pricing comparison chart
  children.push(createBarChart(
    isEN ? "Monthly Subscription Price Comparison" : "Porównanie Miesięcznych Cen Subskrypcji",
    [
      { label: "Brilliant", value: 24.99, displayValue: "$24.99" },
      { label: "IXL Learning", value: 14.95, displayValue: "$14.95 (avg)" },
      { label: "Lingokids", value: 14.99, displayValue: "$14.99" },
      { label: "Duolingo", value: 10.99, displayValue: "$10.99 (avg)" },
      { label: "ABCmouse", value: 12.99, displayValue: "$12.99" },
      { label: "Epic!", value: 9.99, displayValue: "$9.99" },
      { label: "KOYDO", value: 8.88, displayValue: "$8.88 ★" },
      { label: "Prodigy", value: 8.33, displayValue: "$8.33" },
      { label: "SplashLearn", value: 7.99, displayValue: "$7.99" },
      { label: "Khan Academy", value: 3.67, displayValue: "$3.67 (AI only)" },
    ],
    { color: CHART_COLORS.emerald },
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // Migration Analysis
  const mig = s.competitive.migrationAnalysis;
  children.push(createStyledParagraph(mig.title, { bold: true, size: 26, color: ACCENT_COLOR, spacing: { before: 160, after: 120 } }));
  for (const p of mig.paragraphs) {
    children.push(createStyledParagraph(p, { spacing: { after: 120 } }));
  }
  children.push(createTable(
    [isEN ? "Competitor" : "Konkurent", isEN ? "Migration Opportunity" : "Okazja Migracji"],
    mig.advantages,
    [28, 72],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 100 } }));
  children.push(createStyledParagraph(mig.totalAddressable, { bold: true, color: ACCENT_COLOR, spacing: { after: 200 } }));

  // Migration rate chart
  children.push(createBarChart(
    isEN ? "Estimated Migration Potential (K users, Year 1)" : "Szacowany Potencjał Migracji (tys. użytkowników, Rok 1)",
    [
      { label: "From Duolingo", value: 460, displayValue: "345K-575K families" },
      { label: "From ABCmouse", value: 438, displayValue: "375K-500K outgrown" },
      { label: "From IXL", value: 350, displayValue: "280K-420K price-sens." },
      { label: "From Brilliant", value: 98, displayValue: "75K-120K age gap" },
      { label: "From Others", value: 250, displayValue: "150K-350K various" },
    ],
    { color: CHART_COLORS.rose },
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 6. Expansion Roadmap
  children.push(createStyledParagraph(s.expansion.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  for (const phase of s.expansion.phases) {
    children.push(createStyledParagraph(phase.name, { bold: true, size: 26, color: ACCENT_COLOR, spacing: { before: 160, after: 100 } }));
    for (const item of phase.items) {
      children.push(createStyledParagraph(`  •  ${item}`, { spacing: { after: 60 } }));
    }
  }
  children.push(createStyledParagraph("", { spacing: { after: 120 } }));
  children.push(createStyledParagraph(isEN ? "Strategic Recommendations:" : "Rekomendacje Strategiczne:", { bold: true, size: 24, spacing: { after: 100 } }));
  for (const rec of s.expansion.recommendations) {
    children.push(createStyledParagraph(`  ▸  ${rec}`, { color: ACCENT_COLOR, spacing: { after: 80 } }));
  }
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 7. Financial Projections
  children.push(createStyledParagraph(s.financial.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  children.push(createStyledParagraph(s.financial.costNote, { bold: true, size: 22, color: ACCENT_COLOR, spacing: { after: 160 } }));
  children.push(createStyledParagraph(isEN ? "Key Assumptions:" : "Kluczowe Założenia:", { bold: true, size: 24, spacing: { after: 100 } }));
  for (const a of s.financial.assumptions) {
    children.push(createStyledParagraph(`  •  ${a}`, { spacing: { after: 60 } }));
  }
  children.push(createStyledParagraph("", { spacing: { after: 120 } }));
  children.push(createTable(
    [isEN ? "Quarter" : "Kwartał", "MAU", isEN ? "Paid" : "Płacący", isEN ? "Revenue" : "Przychód", isEN ? "Costs" : "Koszty", isEN ? "Net" : "Netto"],
    s.financial.quarters.map((q) => [q.q, q.mau, q.paid, q.revenue, q.costs, q.net]),
    [17, 17, 17, 17, 16, 16],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 120 } }));

  // Revenue Growth Chart
  children.push(createBarChart(
    isEN ? "Quarterly Revenue Growth" : "Kwartalny Wzrost Przychodów",
    EN.sections.financial.quarters.map((q) => ({
      label: q.q,
      value: parseInt(q.revenue.replace(/[$,]/g, "")),
      displayValue: q.revenue,
    })),
    { color: CHART_COLORS.emerald },
  ));
  children.push(createStyledParagraph("", { spacing: { after: 120 } }));

  // MAU Growth Chart
  children.push(createBarChart(
    isEN ? "MAU Growth Trajectory" : "Trajektoria Wzrostu MAU",
    EN.sections.financial.quarters.map((q) => ({
      label: q.q,
      value: parseInt(q.mau.replace(/,/g, "")),
      displayValue: q.mau,
    })),
    { color: CHART_COLORS.sky },
  ));
  children.push(createStyledParagraph("", { spacing: { after: 120 } }));

  // Revenue vs Costs dual bar chart
  children.push(createDualBarChart(
    isEN ? "Revenue vs. Costs (Quarterly)" : "Przychody vs. Koszty (Kwartalnie)",
    EN.sections.financial.quarters.map((q) => ({
      label: q.q,
      value1: parseInt(q.revenue.replace(/[$,]/g, "")),
      value2: parseInt(q.costs.replace(/[$,]/g, "")),
      display1: q.revenue,
      display2: q.costs,
    })),
    { color1: CHART_COLORS.emerald, color2: CHART_COLORS.rose, label1: isEN ? "Revenue" : "Przychód", label2: isEN ? "Costs" : "Koszty" },
  ));
  children.push(createStyledParagraph("", { spacing: { after: 160 } }));

  children.push(createStyledParagraph(s.financial.breakeven, { bold: true, color: ACCENT_COLOR, spacing: { after: 100 } }));
  children.push(createStyledParagraph(s.financial.summaryLine, { bold: true, size: 22, color: "333333", spacing: { after: 200 } }));

  // Competition-based scenarios
  const cv = s.financial.competitionVariations;
  children.push(createStyledParagraph(cv.title, { bold: true, size: 26, color: ACCENT_COLOR, spacing: { before: 160, after: 120 } }));
  children.push(createTable(
    [isEN ? "Scenario" : "Scenariusz", isEN ? "Subscribers" : "Subskrybenci", "ARR", isEN ? "Description" : "Opis"],
    cv.scenarios.map((s) => [s.name, s.subscribers, s.arr, s.description]),
    [20, 14, 14, 52],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 80 } }));
  children.push(createStyledParagraph(cv.note, { size: 20, color: "666666", spacing: { after: 120 } }));

  // Scenario bar chart
  children.push(createBarChart(
    isEN ? "Competitive Capture Scenarios (ARR)" : "Scenariusze Przejęcia Konkurencji (ARR)",
    cv.scenarios.map((s) => ({
      label: s.name.split(" (")[0],
      value: parseInt(s.arr.replace(/[$,]/g, "")),
      displayValue: s.arr,
    })),
    { color: CHART_COLORS.amber },
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 8. Risk Factors
  children.push(createStyledParagraph(s.risks.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  children.push(createTable(
    [isEN ? "Risk" : "Ryzyko", isEN ? "Level" : "Poziom", isEN ? "Description & Mitigation" : "Opis i Ograniczenie"],
    s.risks.items,
    [22, 10, 68],
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 9. Key Metrics
  children.push(createStyledParagraph(s.metrics.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));
  children.push(createTable(
    [isEN ? "Metric" : "Wskaźnik", isEN ? "Target" : "Cel"],
    s.metrics.items,
    [40, 60],
  ));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // 10. Appendices
  children.push(createStyledParagraph(s.appendix.title, { bold: true, size: 32, color: BRAND_COLOR, spacing: { before: 200, after: 200 } }));

  // A. Tech Stack
  children.push(createStyledParagraph(s.appendix.techStack.title, { bold: true, size: 26, color: ACCENT_COLOR, spacing: { before: 160, after: 120 } }));
  children.push(createTable(
    [isEN ? "Layer" : "Warstwa", isEN ? "Technology" : "Technologia"],
    s.appendix.techStack.items,
    [25, 75],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 200 } }));

  // B. Compliance
  children.push(createStyledParagraph(s.appendix.compliance.title, { bold: true, size: 26, color: ACCENT_COLOR, spacing: { before: 160, after: 120 } }));
  children.push(createTable(
    [isEN ? "Regulation" : "Regulacja", "Status"],
    s.appendix.compliance.items,
    [35, 65],
  ));
  children.push(createStyledParagraph("", { spacing: { after: 200 } }));

  // C. Full Pricing Schedule
  children.push(createStyledParagraph(s.appendix.pricingFull.title, { bold: true, size: 26, color: ACCENT_COLOR, spacing: { before: 160, after: 120 } }));
  children.push(createTable(
    s.appendix.pricingFull.headers,
    s.appendix.pricingFull.rows,
    [28, 18, 18, 36],
  ));

  return new Document({
    creator: "Koydo Executive Report Generator",
    title: `${content.cover.title} — ${content.cover.subtitle}`,
    description: "Koydo Executive Summary Q1 2026",
    sections: [{
      properties: {
        page: {
          margin: {
            top: 1440,    // 1 inch
            right: 1080,  // 0.75 inch
            bottom: 1440,
            left: 1080,
          },
        },
      },
      children,
    }],
  });
}

// ─── Main ────────────────────────────────────────────────────────────

async function generateDoc(content) {
  const doc = buildDocument(content);
  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(ROOT, content.fileName);
  await fs.writeFile(outPath, buffer);
  console.log(`Generated: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

async function main() {
  console.log("=== Koydo Executive Summary Generator ===\n");

  if (opts.lang === "en" || opts.lang === "both") {
    await generateDoc(EN);
  }
  if (opts.lang === "pl" || opts.lang === "both") {
    await generateDoc(PL);
  }

  console.log("\nDone. Open the .docx files in Microsoft Word or LibreOffice.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
