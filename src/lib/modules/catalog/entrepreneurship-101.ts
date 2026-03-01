import type { LearningModule } from "@/lib/modules/types";

export const Entrepreneurship101Module: LearningModule = {
  id: "entrepreneurship-101",
  title: "Entrepreneurship Fundamentals",
  description:
    "Master the foundations of building a startup — from identifying real customer problems and validating solutions to crafting business models, securing funding, and scaling a venture.",
  subject: "Entrepreneurship",
  tags: ["core", "curriculum", "interactive", "startup", "business"],
  minAge: 14,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Identify genuine customer pain points using structured discovery frameworks",
    "Apply customer development and validation techniques before building a product",
    "Design and evaluate business models using the Lean Canvas and Business Model Canvas",
    "Build and test a minimum viable product using Lean Startup methodology",
    "Articulate a compelling investor pitch and understand key funding mechanisms",
    "Analyze unit economics including CAC, LTV, burn rate, and runway",
    "Plan a scaling strategy encompassing growth levers, hiring, and culture"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Problem Discovery & Customer Pain Points  (video)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l01",
      title: "Problem Discovery and Customer Pain Points",
      type: "video",
      duration: 12,
      objectives: [
        "Distinguish between real customer problems and assumed problems",
        "Apply the Jobs-to-be-Done framework to uncover unmet needs",
        "Evaluate problem severity using frequency, intensity, and willingness-to-pay criteria"
      ],
      chunks: [
        {
          id: "entrepreneurship-101-l01-c1",
          title: "Why Problems Come First",
          content:
            "The most common reason startups fail is building something nobody wants. CB Insights data consistently shows 'no market need' as the top cause of failure, ahead of running out of cash. Successful founders start by deeply understanding a customer pain point before writing a single line of code. Airbnb's founders didn't set out to build a tech platform — they noticed conference attendees in San Francisco couldn't find affordable lodging, and they tested the idea by renting air mattresses in their own apartment. The lesson: fall in love with the problem, not the solution."
        },
        {
          id: "entrepreneurship-101-l01-c2",
          title: "The Jobs-to-be-Done Framework",
          content:
            "Clayton Christensen's Jobs-to-be-Done (JTBD) framework says customers 'hire' products to accomplish a specific job in their lives. The job has functional, emotional, and social dimensions. A morning commuter doesn't just buy coffee for caffeine (functional) — they want a comforting ritual (emotional) and to feel productive (social). Milkshake sales at a fast-food chain doubled after researchers discovered commuters 'hired' milkshakes to make boring drives more interesting — not as a dessert. JTBD forces founders to ask 'what progress is the customer trying to make?' rather than 'what features should we build?'"
        },
        {
          id: "entrepreneurship-101-l01-c3",
          title: "Evaluating Problem Severity",
          content:
            "Not all problems are worth solving as a business. A strong startup problem passes three tests: Frequency — how often does the customer encounter it? (daily beats yearly). Intensity — how painful is it when it occurs? (migraine beats mild annoyance). Willingness-to-pay — are customers already spending money, time, or effort on workarounds? If people are using spreadsheets, hiring assistants, or duct-taping three apps together to solve a problem, there's a real market. Dropbox succeeded because people were already emailing files to themselves — a clear signal of a high-frequency, high-friction pain point."
        }
      ],
      flashcards: [
        { id: "entrepreneurship-101-l01-f1", front: "Jobs-to-be-Done (JTBD)", back: "A framework stating customers 'hire' products to make progress — jobs have functional, emotional, and social dimensions" },
        { id: "entrepreneurship-101-l01-f2", front: "Top reason startups fail", back: "No market need — building something nobody wants, per CB Insights analysis of 100+ startup post-mortems" },
        { id: "entrepreneurship-101-l01-f3", front: "Problem severity criteria", back: "Frequency (how often), Intensity (how painful), Willingness-to-pay (are customers already using workarounds?)" },
        { id: "entrepreneurship-101-l01-f4", front: "Problem-first mindset", back: "Start by deeply understanding the customer pain point before designing any solution — fall in love with the problem, not the solution" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Customer Development & Validation  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l02",
      title: "Customer Development and Validation",
      type: "interactive",
      duration: 14,
      objectives: [
        "Conduct effective customer discovery interviews using open-ended questions",
        "Distinguish between vanity signals and genuine validation evidence",
        "Design a concierge or Wizard-of-Oz test to validate demand before building"
      ],
      chunks: [
        {
          id: "entrepreneurship-101-l02-c1",
          title: "The Mom Test: Asking the Right Questions",
          content:
            "Rob Fitzpatrick's 'The Mom Test' reveals that most founders ask leading questions that produce false positives — even your mom will say your idea is great. Instead, ask about past behavior, not hypothetical futures: 'How do you currently solve this problem?' beats 'Would you use an app that does X?' Good questions uncover facts: 'Tell me about the last time you dealt with [problem],' 'What have you tried?', 'How much did that cost you?' If a customer hasn't actively tried to solve the problem, it probably isn't painful enough to build a business around."
        },
        {
          id: "entrepreneurship-101-l02-c2",
          title: "Validation Evidence Hierarchy",
          content:
            "Not all signals are equal. From weakest to strongest: (1) People say 'That's a cool idea' — nearly worthless. (2) People sign up for a waitlist — slightly better but costs them nothing. (3) People give you their email and time for an interview — moderate signal. (4) People pre-order or put down a deposit — strong signal. (5) People pay for a rough prototype — the gold standard. Kickstarter campaigns demonstrate this hierarchy: Pebble Watch raised $10M from 69,000 backers before having a finished product, proving market demand with real money. Always seek the strongest validation you can get before investing in development."
        },
        {
          id: "entrepreneurship-101-l02-c3",
          title: "Concierge and Wizard-of-Oz Testing",
          content:
            "A concierge MVP delivers the value proposition manually to a small number of customers. Food on the Table started by having the founder personally visit customers' homes to plan meals and shop for groceries before building any software. A Wizard-of-Oz MVP looks automated to the customer but is powered by humans behind the scenes — Zappos tested online shoe demand by photographing shoes in local stores and buying them at retail when orders came in. Both methods validate demand at minimal cost. The goal is learning, not efficiency: you scale only after confirming that customers actually value what you deliver."
        }
      ],
      interactiveActivities: [
        {
          id: "entrepreneurship-101-l02-a1",
          title: "Sort Validation Signals",
          type: "sorting_buckets",
          buckets: ["Weak Signal", "Strong Signal"],
          items: [
            { text: "A friend says 'That's a great idea!'", bucket: "Weak Signal" },
            { text: "A stranger pre-pays $50 for early access", bucket: "Strong Signal" },
            { text: "500 people sign up for a free waitlist", bucket: "Weak Signal" },
            { text: "A pilot customer uses the MVP daily for two weeks", bucket: "Strong Signal" },
            { text: "An investor says the market is big", bucket: "Weak Signal" },
            { text: "A customer switches from their current tool to your prototype", bucket: "Strong Signal" },
            { text: "A survey shows 80% of respondents 'like' the concept", bucket: "Weak Signal" },
            { text: "A business signs a letter of intent to purchase", bucket: "Strong Signal" }
          ]
        }
      ],
      flashcards: [
        { id: "entrepreneurship-101-l02-f1", front: "The Mom Test", back: "Ask about past behavior and real problems, not hypothetical interest — 'How do you currently solve this?' instead of 'Would you use this?'" },
        { id: "entrepreneurship-101-l02-f2", front: "Concierge MVP", back: "Delivering the value proposition manually to early customers to test demand before building technology — e.g., Food on the Table" },
        { id: "entrepreneurship-101-l02-f3", front: "Wizard-of-Oz MVP", back: "A product that appears automated to the user but is powered by humans behind the scenes — e.g., early Zappos" },
        { id: "entrepreneurship-101-l02-f4", front: "Strongest validation signal", back: "Customers paying real money for a rough prototype — far more meaningful than verbal interest or free signups" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Problem Discovery & Validation Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l03",
      title: "Problem Discovery & Validation Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate understanding of problem discovery, JTBD, and customer validation techniques"],
      questions: [
        {
          id: "entrepreneurship-101-l03-q1",
          text: "According to CB Insights, the number-one reason startups fail is:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Running out of cash" },
            { id: "b", text: "No market need — building something nobody wants" },
            { id: "c", text: "Hiring the wrong team" },
            { id: "d", text: "Legal or regulatory issues" }
          ],
          correctOptionId: "b",
          explanation: "CB Insights consistently finds 'no market need' as the top failure cause, even ahead of running out of money."
        },
        {
          id: "entrepreneurship-101-l03-q2",
          text: "The Jobs-to-be-Done framework focuses on:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "The technical features of a product" },
            { id: "b", text: "The progress a customer is trying to make in their life" },
            { id: "c", text: "Competitor analysis and market share" },
            { id: "d", text: "Pricing strategy optimization" }
          ],
          correctOptionId: "b",
          explanation: "JTBD says customers 'hire' products to accomplish a job — understanding that job (functional, emotional, social) drives innovation."
        },
        {
          id: "entrepreneurship-101-l03-q3",
          text: "Which is the strongest form of customer validation?",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "A friend saying 'Great idea!'" },
            { id: "b", text: "High waitlist signups" },
            { id: "c", text: "Customers paying for a rough prototype" },
            { id: "d", text: "Positive survey responses" }
          ],
          correctOptionId: "c",
          explanation: "Real money is the strongest validation signal — it proves willingness to pay, unlike free signups or verbal encouragement."
        },
        {
          id: "entrepreneurship-101-l03-q4",
          text: "The Mom Test recommends founders should:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Ask friends and family if they would buy the product" },
            { id: "b", text: "Ask about real past behavior and current pain points, not hypothetical interest" },
            { id: "c", text: "Only survey strangers anonymously online" },
            { id: "d", text: "Avoid talking to customers until the product is ready" }
          ],
          correctOptionId: "b",
          explanation: "The Mom Test says to ask about past behavior ('How do you currently solve this?') because hypothetical questions produce misleading answers."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Business Models & Revenue Strategies  (video)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l04",
      title: "Business Models and Revenue Strategies",
      type: "video",
      duration: 13,
      objectives: [
        "Map the nine building blocks of the Business Model Canvas",
        "Compare common revenue models: subscription, marketplace, freemium, and transactional",
        "Use the Lean Canvas to rapidly articulate a startup hypothesis"
      ],
      chunks: [
        {
          id: "entrepreneurship-101-l04-c1",
          title: "The Business Model Canvas",
          content:
            "Alexander Osterwalder's Business Model Canvas (BMC) breaks any business into nine interconnected blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partners, and Cost Structure. The canvas forces founders to think holistically — a brilliant product fails if the channel can't reach customers or the cost structure doesn't support the price point. Amazon's BMC reveals a flywheel: lower prices attract more customers, which attracts more sellers, which drives selection, which attracts more customers. The canvas is a living document that evolves as you learn."
        },
        {
          id: "entrepreneurship-101-l04-c2",
          title: "Revenue Models",
          content:
            "Choosing the right revenue model shapes everything from product design to customer relationships. Subscription (Netflix, SaaS): predictable recurring revenue with focus on retention. Marketplace (Airbnb, Uber): the platform takes a commission connecting supply and demand — requires solving the chicken-and-egg problem. Freemium (Spotify, Slack): free tier acquires users, premium tier monetizes power users — typically 2–5% convert to paid. Transactional (e-commerce): one-time purchases with focus on repeat buying. Ad-supported (Google, Instagram): free product monetized through user attention. Each model has distinct unit economics, and many successful companies blend multiple models."
        },
        {
          id: "entrepreneurship-101-l04-c3",
          title: "The Lean Canvas",
          content:
            "Ash Maurya adapted the BMC into the Lean Canvas, specifically designed for startups operating under uncertainty. It replaces Key Partners with Problem, Key Activities with Solution, Key Resources with Key Metrics, and Customer Relationships with Unfair Advantage. The Lean Canvas is filled in under 20 minutes and serves as a one-page business plan. Critically, it starts with Problem and Customer Segments — ensuring the founder thinks about the customer before the solution. Your Unfair Advantage is something that cannot be easily copied: insider knowledge, a proprietary dataset, network effects, or community. If you can't name one, you're vulnerable to fast followers."
        }
      ],
      flashcards: [
        { id: "entrepreneurship-101-l04-f1", front: "Business Model Canvas (BMC)", back: "A strategic tool with nine blocks — Customer Segments, Value Props, Channels, Relationships, Revenue, Resources, Activities, Partners, Costs — for mapping an entire business" },
        { id: "entrepreneurship-101-l04-f2", front: "Freemium model", back: "Free basic tier to acquire users, premium paid tier to monetize — typically 2–5% convert; used by Spotify, Slack, Dropbox" },
        { id: "entrepreneurship-101-l04-f3", front: "Lean Canvas", back: "Ash Maurya's startup-focused adaptation of the BMC — starts with Problem, adds Key Metrics and Unfair Advantage, fits on one page" },
        { id: "entrepreneurship-101-l04-f4", front: "Marketplace chicken-and-egg problem", back: "A marketplace needs supply to attract demand and demand to attract supply — solving this cold-start problem is the critical early challenge" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Lean Startup & MVP Development  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l05",
      title: "Lean Startup and MVP Development",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain the Build-Measure-Learn feedback loop and identify each stage",
        "Design a minimum viable product that tests the riskiest assumption first",
        "Analyze pivot-or-persevere decisions using actionable metrics"
      ],
      chunks: [
        {
          id: "entrepreneurship-101-l05-c1",
          title: "The Build-Measure-Learn Loop",
          content:
            "Eric Ries's Lean Startup method treats a startup as a series of experiments. The core engine is the Build-Measure-Learn (BML) feedback loop: (1) Build — create the simplest possible test of your hypothesis (an MVP). (2) Measure — collect data on customer behavior using actionable metrics. (3) Learn — decide whether the data validates your hypothesis or forces a pivot. The goal is to cycle through this loop as fast as possible. Ries emphasizes that learning is the unit of progress for a startup, not lines of code shipped or features launched. Speed of learning determines who wins."
        },
        {
          id: "entrepreneurship-101-l05-c2",
          title: "Designing an Effective MVP",
          content:
            "A minimum viable product is not a crappy product — it's the smallest thing you can build to learn whether your value hypothesis is true. Drew Houston's Dropbox MVP was a three-minute demo video showing how the product would work: signups jumped from 5,000 to 75,000 overnight, validating demand before engineering began. Buffer started as a two-page landing page describing pricing tiers — if visitors clicked 'buy,' they saw a 'coming soon' message, and the click-through rate validated willingness to pay. The key principle: identify your riskiest assumption (usually 'will anyone want this?') and design the cheapest test that addresses it directly."
        },
        {
          id: "entrepreneurship-101-l05-c3",
          title: "Pivot or Persevere",
          content:
            "After running experiments, founders face the pivot-or-persevere decision. A pivot is a structured course correction — not a random change, but a specific shift in one element of the business model while keeping what's working. Common pivot types include: customer segment pivot (Slack started as an internal gaming tool), zoom-in pivot (Instagram stripped down from a check-in app called Burbn to focus only on photo filters), channel pivot, and revenue model pivot. Vanity metrics (total signups, page views) obscure truth; actionable metrics (activation rate, retention, revenue per user) reveal it. The discipline to pivot based on data, not ego, separates successful founders from those who burn through their runway."
        }
      ],
      interactiveActivities: [
        {
          id: "entrepreneurship-101-l05-a1",
          title: "Match the Concept",
          type: "matching_pairs",
          pairs: [
            { left: "Build", right: "Create the smallest test of a hypothesis" },
            { left: "Measure", right: "Collect actionable metrics on customer behavior" },
            { left: "Learn", right: "Decide to pivot or persevere based on data" },
            { left: "Customer segment pivot", right: "Slack pivoting from gamers to enterprise teams" },
            { left: "Zoom-in pivot", right: "Instagram stripping Burbn down to photo filters only" },
            { left: "Vanity metric", right: "Total signups with no retention context" }
          ]
        }
      ],
      flashcards: [
        { id: "entrepreneurship-101-l05-f1", front: "Build-Measure-Learn loop", back: "The core Lean Startup engine: build an MVP, measure customer behavior with actionable metrics, learn whether to pivot or persevere" },
        { id: "entrepreneurship-101-l05-f2", front: "Minimum Viable Product (MVP)", back: "The smallest thing you can build to learn whether your value hypothesis is true — e.g., Dropbox's demo video, Buffer's landing page" },
        { id: "entrepreneurship-101-l05-f3", front: "Pivot", back: "A structured course correction in one element of the business model based on validated learning — not a random change" },
        { id: "entrepreneurship-101-l05-f4", front: "Vanity metrics vs. actionable metrics", back: "Vanity: total signups, page views (look good, don't inform decisions). Actionable: retention rate, activation rate, revenue per user (drive decisions)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Business Models & Lean Startup Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l06",
      title: "Business Models & Lean Startup Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of business model design, MVP strategy, and Lean Startup methodology"],
      questions: [
        {
          id: "entrepreneurship-101-l06-q1",
          text: "The Lean Canvas differs from the Business Model Canvas by:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Removing all financial considerations" },
            { id: "b", text: "Adding Problem, Solution, Key Metrics, and Unfair Advantage blocks" },
            { id: "c", text: "Focusing exclusively on revenue models" },
            { id: "d", text: "Being designed only for large corporations" }
          ],
          correctOptionId: "b",
          explanation: "Ash Maurya replaced Partners, Activities, Resources, and Relationships with Problem, Solution, Key Metrics, and Unfair Advantage to better suit startups."
        },
        {
          id: "entrepreneurship-101-l06-q2",
          text: "Dropbox validated demand by:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Building the full product and launching it publicly" },
            { id: "b", text: "Creating a three-minute demo video that drove signups from 5,000 to 75,000" },
            { id: "c", text: "Conducting focus groups with enterprise customers" },
            { id: "d", text: "Running paid advertising before building anything" }
          ],
          correctOptionId: "b",
          explanation: "Drew Houston's demo video was a classic MVP — it tested demand with minimal investment before engineering the full product."
        },
        {
          id: "entrepreneurship-101-l06-q3",
          text: "A 'zoom-in pivot' means:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Expanding into many new markets simultaneously" },
            { id: "b", text: "Focusing on a single feature that gets the most traction and making it the whole product" },
            { id: "c", text: "Increasing the price to target premium customers" },
            { id: "d", text: "Copying a competitor's business model exactly" }
          ],
          correctOptionId: "b",
          explanation: "Instagram zoom-pivoted from Burbn (a feature-rich check-in app) to focus exclusively on photo sharing and filters — the feature users loved most."
        },
        {
          id: "entrepreneurship-101-l06-q4",
          text: "In the freemium model, the typical paid conversion rate is:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "50–70% of users convert to paid" },
            { id: "b", text: "2–5% of users convert to paid" },
            { id: "c", text: "Less than 0.1% of users" },
            { id: "d", text: "100% — all users eventually pay" }
          ],
          correctOptionId: "b",
          explanation: "Freemium businesses typically convert 2–5% to paid, so they need very large free user bases to generate meaningful revenue."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Funding, Pitching & Financial Basics  (video)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l07",
      title: "Funding, Pitching, and Financial Basics",
      type: "video",
      duration: 12,
      objectives: [
        "Compare bootstrapping, angel investment, venture capital, and crowdfunding",
        "Structure a compelling investor pitch using a proven framework",
        "Calculate and interpret burn rate, runway, CAC, and LTV"
      ],
      chunks: [
        {
          id: "entrepreneurship-101-l07-c1",
          title: "Funding Sources and Stages",
          content:
            "Startups have multiple funding paths, each with tradeoffs. Bootstrapping (self-funding) preserves full ownership but limits growth speed — Mailchimp bootstrapped to $12B. Angel investors are wealthy individuals who invest $25K–$500K in early-stage startups, often providing mentorship alongside capital. Venture capital (VC) firms invest larger amounts ($1M–$100M+) across stages: Pre-seed and Seed fund the idea, Series A funds product-market fit, Series B+ funds scaling. VCs seek 10x+ returns and typically require board seats and equity. Crowdfunding (Kickstarter, Indiegogo) validates demand and raises capital simultaneously but suits consumer products best. Each path has different implications for control, speed, and dilution."
        },
        {
          id: "entrepreneurship-101-l07-c2",
          title: "The Investor Pitch",
          content:
            "A strong pitch deck follows a proven sequence: Problem (what pain exists), Solution (your unique approach), Market Size (TAM/SAM/SOM — total addressable, serviceable addressable, serviceable obtainable market), Business Model (how you make money), Traction (proof it's working — revenue, users, growth rate), Team (why you're the ones to win), Ask (how much you're raising and what you'll do with it). Investors see thousands of pitches — yours must hook in 30 seconds. Lead with the problem, not the product. Show, don't tell: 'We have 2,000 paying users growing 20% month-over-month' is worth more than any adjective. Guy Kawasaki's 10/20/30 rule: 10 slides, 20 minutes, 30-point minimum font."
        },
        {
          id: "entrepreneurship-101-l07-c3",
          title: "Unit Economics: The Numbers That Matter",
          content:
            "Four metrics determine startup viability. Customer Acquisition Cost (CAC): total sales and marketing spend divided by the number of new customers acquired. Lifetime Value (LTV): the total net revenue a customer generates over their entire relationship with you — for subscriptions, LTV = average revenue per user × gross margin × average lifespan. The LTV:CAC ratio should be at least 3:1 to build a sustainable business. Burn rate is monthly cash outflow minus inflow. Runway is cash in the bank divided by monthly burn rate — it tells you how many months you can survive. Founders should begin fundraising when they have 6+ months of runway remaining."
        }
      ],
      flashcards: [
        { id: "entrepreneurship-101-l07-f1", front: "Burn rate", back: "Monthly cash outflow minus inflow — measures how fast a startup is spending its capital" },
        { id: "entrepreneurship-101-l07-f2", front: "LTV:CAC ratio", back: "Lifetime Value divided by Customer Acquisition Cost — should be at least 3:1 for a sustainable business" },
        { id: "entrepreneurship-101-l07-f3", front: "TAM / SAM / SOM", back: "Total Addressable Market (everyone), Serviceable Addressable Market (reachable with your model), Serviceable Obtainable Market (realistic near-term capture)" },
        { id: "entrepreneurship-101-l07-f4", front: "Runway", back: "Cash in the bank divided by monthly burn rate — the number of months a startup can survive before needing more funding" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Scaling, Growth & Team Building  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l08",
      title: "Scaling, Growth, and Team Building",
      type: "interactive",
      duration: 14,
      objectives: [
        "Identify the key growth levers: viral, paid, and sticky engines of growth",
        "Design an early hiring plan prioritizing the right roles at the right stage",
        "Recognize common scaling pitfalls and how to avoid them"
      ],
      chunks: [
        {
          id: "entrepreneurship-101-l08-c1",
          title: "Engines of Growth",
          content:
            "Eric Ries identifies three engines of growth. The Sticky Engine relies on high retention — if your monthly churn is 2% and new user acquisition is 3%, you grow 1% net each month. SaaS companies like Notion depend on this. The Viral Engine depends on each user naturally bringing in others — Hotmail's 'Get your free email' tagline in every sent message is the classic example; the viral coefficient (K) must exceed 1 for exponential growth. The Paid Engine works when customer LTV exceeds CAC with enough margin to reinvest — if you spend $50 to acquire a customer worth $200, you can profitably scale spend. Most successful companies master one engine before layering in others."
        },
        {
          id: "entrepreneurship-101-l08-c2",
          title: "Building the Founding Team",
          content:
            "The first 10 hires define a startup's culture and trajectory. Paul Graham advises startups to hire slowly and fire fast — a single bad early hire can poison culture for years. Ideal founding teams combine complementary skills: a builder (technical) and a hustler (business/sales) is the classic pairing. Early-stage roles to prioritize: a product engineer who ships fast, a growth/marketing lead who understands the customer acquisition funnel, and a customer success person who converts feedback into product improvements. Equity splits should reflect long-term contribution, vest over four years with a one-year cliff, and be agreed upon early to prevent co-founder conflicts."
        },
        {
          id: "entrepreneurship-101-l08-c3",
          title: "Scaling Pitfalls",
          content:
            "Premature scaling is the number-one killer of startups that have found initial traction. The Startup Genome Project found that 74% of high-growth startups fail due to scaling too early — hiring aggressively, spending on marketing, or expanding to new markets before achieving true product-market fit. Signs of product-market fit include: organic word-of-mouth growth, retention curves that flatten (users keep coming back), and customers complaining when the product is down. Reid Hoffman's concept of 'blitzscaling' — prioritizing speed over efficiency — only applies after product-market fit is proven. Before that, efficiency and learning speed matter more than headcount or revenue growth."
        }
      ],
      interactiveActivities: [
        {
          id: "entrepreneurship-101-l08-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Before Product-Market Fit", "After Product-Market Fit"],
          items: [
            { text: "Run Build-Measure-Learn loops rapidly", bucket: "Before Product-Market Fit" },
            { text: "Aggressively scale paid acquisition spending", bucket: "After Product-Market Fit" },
            { text: "Conduct customer development interviews weekly", bucket: "Before Product-Market Fit" },
            { text: "Expand to international markets", bucket: "After Product-Market Fit" },
            { text: "Keep the team small and iterate fast", bucket: "Before Product-Market Fit" },
            { text: "Hire a VP of Sales and build a sales team", bucket: "After Product-Market Fit" },
            { text: "Test multiple value propositions", bucket: "Before Product-Market Fit" },
            { text: "Invest in brand marketing and PR", bucket: "After Product-Market Fit" }
          ]
        }
      ],
      flashcards: [
        { id: "entrepreneurship-101-l08-f1", front: "Viral coefficient (K)", back: "The number of new users each existing user generates — K > 1 means exponential growth; Hotmail and Dropbox referrals are classic examples" },
        { id: "entrepreneurship-101-l08-f2", front: "Premature scaling", back: "Hiring, spending, or expanding before achieving product-market fit — the Startup Genome Project found 74% of fast-growing startups fail from this" },
        { id: "entrepreneurship-101-l08-f3", front: "Four-year vesting with one-year cliff", back: "Standard equity vesting schedule — nothing vests in year one, then 25% vests at the cliff, remaining vests monthly over 3 more years" },
        { id: "entrepreneurship-101-l08-f4", front: "Product-market fit signals", back: "Organic word-of-mouth, retention curves that flatten, customers upset when product is unavailable, pull exceeding push" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Funding & Scaling Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l09",
      title: "Funding & Scaling Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of funding mechanisms, unit economics, and scaling strategy"],
      questions: [
        {
          id: "entrepreneurship-101-l09-q1",
          text: "A startup has $600,000 in the bank and burns $50,000 per month. Its runway is:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "6 months" },
            { id: "b", text: "12 months" },
            { id: "c", text: "18 months" },
            { id: "d", text: "24 months" }
          ],
          correctOptionId: "b",
          explanation: "Runway = cash ÷ monthly burn = $600,000 ÷ $50,000 = 12 months. Founders should start fundraising with 6+ months remaining."
        },
        {
          id: "entrepreneurship-101-l09-q2",
          text: "The viral engine of growth requires a viral coefficient (K) that is:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Less than 0.5" },
            { id: "b", text: "Exactly 1.0" },
            { id: "c", text: "Greater than 1.0" },
            { id: "d", text: "Negative" }
          ],
          correctOptionId: "c",
          explanation: "When K > 1, each user brings in more than one new user, creating exponential growth — the defining feature of viral growth."
        },
        {
          id: "entrepreneurship-101-l09-q3",
          text: "Premature scaling refers to:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Growing too slowly after finding product-market fit" },
            { id: "b", text: "Hiring, spending, or expanding before achieving product-market fit" },
            { id: "c", text: "Raising too much venture capital" },
            { id: "d", text: "Launching in only one market" }
          ],
          correctOptionId: "b",
          explanation: "The Startup Genome Project found that 74% of high-growth startup failures result from scaling before product-market fit is proven."
        },
        {
          id: "entrepreneurship-101-l09-q4",
          text: "A healthy LTV:CAC ratio for a sustainable business is at least:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "1:1" },
            { id: "b", text: "3:1" },
            { id: "c", text: "0.5:1" },
            { id: "d", text: "10:1 minimum" }
          ],
          correctOptionId: "b",
          explanation: "An LTV:CAC ratio of at least 3:1 ensures enough margin to cover overhead and reinvest in growth after acquisition costs."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Entrepreneurship Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "entrepreneurship-101-l10",
      title: "Mastery Quiz: Entrepreneurship Foundations",
      type: "quiz",
      duration: 12,
      objectives: ["Synthesize all entrepreneurship foundations concepts"],
      questions: [
        {
          id: "entrepreneurship-101-l10-q1",
          text: "A founder discovers that users love one specific feature of their multi-feature app and decides to make it the entire product. This is an example of:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "A customer segment pivot" },
            { id: "b", text: "A zoom-in pivot" },
            { id: "c", text: "Premature scaling" },
            { id: "d", text: "A revenue model pivot" }
          ],
          correctOptionId: "b",
          explanation: "A zoom-in pivot focuses on one high-traction feature and makes it the whole product — exactly what Instagram did by stripping Burbn down to photo filters."
        },
        {
          id: "entrepreneurship-101-l10-q2",
          text: "Which combination correctly represents the Build-Measure-Learn loop in order?",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "Learn → Measure → Build" },
            { id: "b", text: "Build → Measure → Learn" },
            { id: "c", text: "Measure → Build → Learn" },
            { id: "d", text: "Build → Learn → Measure" }
          ],
          correctOptionId: "b",
          explanation: "The Lean Startup loop proceeds: Build an MVP, Measure customer behavior with actionable metrics, Learn whether to pivot or persevere."
        },
        {
          id: "entrepreneurship-101-l10-q3",
          text: "An investor asks about your SAM. This refers to:",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "The total global demand for all products in every category" },
            { id: "b", text: "The portion of the total market you can reach with your current business model and channels" },
            { id: "c", text: "Your startup's current annual revenue" },
            { id: "d", text: "The number of employees in your startup" }
          ],
          correctOptionId: "b",
          explanation: "Serviceable Addressable Market (SAM) is the segment of TAM targeted by your product and reachable with your business model."
        },
        {
          id: "entrepreneurship-101-l10-q4",
          text: "A startup's monthly burn rate is $80,000, it acquires 200 customers per month at $100 CAC each, and the average customer LTV is $450. Which statement is most accurate?",
          skillId: "entrepreneurship-101-skill-core",
          options: [
            { id: "a", text: "The LTV:CAC ratio is 4.5:1, which is healthy" },
            { id: "b", text: "The LTV:CAC ratio is 1:4.5, which indicates the business is unsustainable" },
            { id: "c", text: "Burn rate is irrelevant if LTV:CAC is positive" },
            { id: "d", text: "CAC cannot be calculated without knowing the total market size" }
          ],
          correctOptionId: "a",
          explanation: "LTV:CAC = $450 ÷ $100 = 4.5:1 — above the 3:1 threshold, indicating healthy unit economics. Burn rate still matters for runway planning."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
