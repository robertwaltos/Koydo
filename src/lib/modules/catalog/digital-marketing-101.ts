import type { LearningModule } from "@/lib/modules/types";

export const DigitalMarketing101Module: LearningModule = {
  id: "digital-marketing-101",
  title: "Digital Marketing Fundamentals",
  description:
    "Master the foundations of digital marketing — from SEO and content strategy to paid advertising, email automation, analytics, and conversion optimization across the modern customer journey.",
  subject: "Digital Marketing",
  tags: ["core", "curriculum", "interactive", "business", "marketing"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Map the digital marketing landscape and trace the modern customer journey from awareness to advocacy",
    "Apply on-page and technical SEO fundamentals to improve organic search visibility",
    "Develop a content marketing strategy aligned with audience personas and funnel stages",
    "Design email marketing campaigns using segmentation, automation, and A/B testing",
    "Configure and optimize paid advertising campaigns across search, display, and social channels",
    "Interpret analytics dashboards and key performance indicators to measure marketing ROI",
    "Apply conversion rate optimization techniques to landing pages and campaign funnels"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Digital Marketing Landscape & Customer Journey  (video)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l01",
      title: "Digital Marketing Landscape & Customer Journey",
      type: "video",
      duration: 12,
      objectives: [
        "Identify the major digital marketing channels and their roles in a marketing mix",
        "Describe the stages of the modern customer journey from awareness to advocacy",
        "Explain the AIDA framework and how it maps to the marketing funnel"
      ],
      chunks: [
        {
          id: "digital-marketing-101-l01-c1",
          title: "The Digital Marketing Ecosystem",
          content:
            "Digital marketing encompasses all marketing efforts that use electronic devices or the internet to connect with current and prospective customers. The core channels include search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, content marketing, and affiliate marketing. Unlike traditional media such as TV or print, digital channels offer precise targeting, real-time performance data, and the ability to optimize campaigns on the fly. A well-rounded digital strategy integrates multiple channels so that each reinforces the others — for example, a blog post (content marketing) drives organic traffic (SEO), is promoted via social media, and captures leads through an email signup form."
        },
        {
          id: "digital-marketing-101-l01-c2",
          title: "The Modern Customer Journey",
          content:
            "The customer journey describes the path a buyer takes from first hearing about a brand to becoming a loyal advocate. The classic marketing funnel has five stages: Awareness (the customer discovers your brand through an ad, social post, or search result), Consideration (they research options, read reviews, and compare features), Conversion (they make a purchase or sign up), Retention (post-purchase engagement keeps them coming back), and Advocacy (they recommend your brand to others). Modern journeys are rarely linear — a customer may bounce between social media, review sites, and your website multiple times before converting. Touchpoint mapping helps marketers identify every interaction and ensure a consistent message across channels."
        },
        {
          id: "digital-marketing-101-l01-c3",
          title: "The AIDA Framework",
          content:
            "AIDA is one of the oldest and most enduring marketing frameworks: Attention — capture the audience's notice with a compelling headline, striking visual, or targeted ad placement. Interest — provide relevant information that resonates with their pain points or desires. Desire — build emotional connection by showing how your product solves their problem, using testimonials, case studies, or demonstrations. Action — include a clear call-to-action (CTA) that tells the audience exactly what to do next, whether it is 'Buy Now,' 'Sign Up,' or 'Download the Guide.' Every landing page, email, and ad creative should follow this progression to guide prospects toward conversion."
        }
      ],
      flashcards: [
        { id: "digital-marketing-101-l01-f1", front: "Marketing funnel stages", back: "Awareness → Consideration → Conversion → Retention → Advocacy — the path a customer follows from discovery to brand loyalty" },
        { id: "digital-marketing-101-l01-f2", front: "AIDA framework", back: "Attention, Interest, Desire, Action — a copywriting and advertising model that guides prospects toward a conversion step" },
        { id: "digital-marketing-101-l01-f3", front: "Touchpoint mapping", back: "Identifying every interaction a customer has with your brand across channels to ensure a consistent and coherent experience" },
        { id: "digital-marketing-101-l01-f4", front: "Omnichannel marketing", back: "An integrated approach where all digital and offline channels work together to deliver a seamless customer experience" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  SEO Fundamentals & On-Page Optimization  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l02",
      title: "SEO Fundamentals & On-Page Optimization",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain how search engines crawl, index, and rank web pages",
        "Apply on-page SEO techniques including title tags, meta descriptions, and header hierarchy",
        "Conduct basic keyword research using search intent categories"
      ],
      chunks: [
        {
          id: "digital-marketing-101-l02-c1",
          title: "How Search Engines Work",
          content:
            "Search engines like Google use automated programs called crawlers (or spiders) to discover web pages by following links. Discovered pages are analyzed and stored in a massive index — essentially a library of the web. When a user enters a query, Google's ranking algorithm evaluates hundreds of signals to determine which indexed pages best answer the query. Key ranking factors include relevance (does the content match the search intent?), authority (does the site have quality backlinks from trusted sources?), and user experience (does the page load fast and work on mobile?). Google processes over 8.5 billion searches per day, making organic search one of the highest-value marketing channels."
        },
        {
          id: "digital-marketing-101-l02-c2",
          title: "On-Page SEO Elements",
          content:
            "On-page SEO refers to optimizations you make directly on your web pages. The title tag (displayed in search results and browser tabs) should include your primary keyword and stay under 60 characters. The meta description (the snippet below the title in search results) should be a compelling 150–160 character summary with a call to action. Use a single H1 tag for the main heading, then H2 and H3 tags to create a logical content hierarchy. Place your target keyword naturally in the first 100 words, in at least one subheading, and in the URL slug. Image alt text should describe the image while incorporating relevant keywords, improving both accessibility and image search rankings."
        },
        {
          id: "digital-marketing-101-l02-c3",
          title: "Keyword Research & Search Intent",
          content:
            "Keyword research identifies the terms your target audience types into search engines. Tools like Google Keyword Planner, Ahrefs, and SEMrush reveal search volume (how many people search for a term monthly), keyword difficulty (how hard it is to rank), and related queries. Search intent falls into four categories: informational ('how to start a blog'), navigational ('Mailchimp login'), transactional ('buy running shoes online'), and commercial investigation ('best CRM software 2026'). Aligning your content with the correct search intent is more important than stuffing keywords — Google rewards pages that genuinely satisfy what the searcher is looking for. Long-tail keywords (three or more words) typically have lower volume but higher conversion rates because they reflect specific intent."
        }
      ],
      interactiveActivities: [
        {
          id: "digital-marketing-101-l02-a1",
          title: "Match SEO Element to Best Practice",
          type: "matching_pairs",
          pairs: [
            { left: "Title tag", right: "Primary keyword, under 60 characters" },
            { left: "Meta description", right: "Compelling summary, 150–160 characters" },
            { left: "H1 heading", right: "One per page, main topic" },
            { left: "Image alt text", right: "Descriptive text for accessibility and SEO" },
            { left: "URL slug", right: "Short, readable, includes target keyword" },
            { left: "Internal links", right: "Connect related pages to distribute authority" }
          ]
        }
      ],
      flashcards: [
        { id: "digital-marketing-101-l02-f1", front: "Organic search", back: "Unpaid search engine results earned through SEO — contrasted with paid results (PPC ads) that appear above or beside organic listings" },
        { id: "digital-marketing-101-l02-f2", front: "Search intent categories", back: "Informational (learn), navigational (find a site), transactional (buy), commercial investigation (compare options before buying)" },
        { id: "digital-marketing-101-l02-f3", front: "Long-tail keywords", back: "Specific, multi-word search phrases with lower volume but higher conversion rates — e.g., 'best vegan protein powder for runners'" },
        { id: "digital-marketing-101-l02-f4", front: "Backlinks", back: "Links from external websites pointing to your site — a major authority signal in Google's ranking algorithm" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  SEO & Digital Landscape Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l03",
      title: "SEO & Digital Landscape Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate understanding of the digital marketing ecosystem, customer journey, and SEO fundamentals"],
      questions: [
        {
          id: "digital-marketing-101-l03-q1",
          text: "In the AIDA framework, what does the 'D' stand for?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Distribution" },
            { id: "b", text: "Desire" },
            { id: "c", text: "Data" },
            { id: "d", text: "Demand" }
          ],
          correctOptionId: "b",
          explanation: "AIDA stands for Attention, Interest, Desire, Action — 'Desire' is the stage where you build emotional motivation to convert."
        },
        {
          id: "digital-marketing-101-l03-q2",
          text: "A user searching 'best CRM software 2026' most likely has which type of search intent?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Navigational" },
            { id: "b", text: "Informational" },
            { id: "c", text: "Commercial investigation" },
            { id: "d", text: "Transactional" }
          ],
          correctOptionId: "c",
          explanation: "Comparative queries ('best X') indicate commercial investigation — the user is researching before making a purchase decision."
        },
        {
          id: "digital-marketing-101-l03-q3",
          text: "Which on-page SEO element should be limited to one per page and contain the primary keyword?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Meta description" },
            { id: "b", text: "Image alt text" },
            { id: "c", text: "H1 heading" },
            { id: "d", text: "Footer link" }
          ],
          correctOptionId: "c",
          explanation: "The H1 tag serves as the main heading of the page and should appear only once, clearly signaling the topic to search engines."
        },
        {
          id: "digital-marketing-101-l03-q4",
          text: "Long-tail keywords typically offer:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "The highest search volume of any keyword type" },
            { id: "b", text: "Lower search volume but higher conversion rates" },
            { id: "c", text: "No value for SEO" },
            { id: "d", text: "Only navigational intent" }
          ],
          correctOptionId: "b",
          explanation: "Long-tail keywords are specific multi-word phrases — fewer people search for them, but those who do are closer to taking action."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Content Marketing & Social Media Strategy  (video)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l04",
      title: "Content Marketing & Social Media Strategy",
      type: "video",
      duration: 13,
      objectives: [
        "Define content marketing and explain its role at each stage of the funnel",
        "Develop a social media strategy aligned with audience personas and platform strengths",
        "Distinguish between organic and paid social media tactics"
      ],
      chunks: [
        {
          id: "digital-marketing-101-l04-c1",
          title: "Content Marketing Fundamentals",
          content:
            "Content marketing is the strategic creation and distribution of valuable, relevant content to attract and retain a clearly defined audience — and ultimately drive profitable action. Unlike direct advertising, content marketing educates or entertains first and sells second. Top-of-funnel (TOFU) content such as blog posts, infographics, and educational videos builds awareness. Middle-of-funnel (MOFU) content like case studies, webinars, and comparison guides nurtures consideration. Bottom-of-funnel (BOFU) content including free trials, product demos, and customer testimonials drives conversion. A documented content strategy increases effectiveness: companies with a written plan are 3× more likely to report success than those without one."
        },
        {
          id: "digital-marketing-101-l04-c2",
          title: "Social Media Platform Strategy",
          content:
            "Each social platform has unique demographics, content formats, and algorithmic preferences that shape your strategy. Instagram and TikTok favor short-form video and visual storytelling, skewing toward ages 18–34. LinkedIn is the dominant B2B platform for thought leadership, industry insights, and professional networking. X (formerly Twitter) excels at real-time conversation, news, and customer service. Facebook still commands the largest overall user base and offers the most sophisticated advertising tools through Meta Business Suite. Effective social strategy starts with audience research: identify where your target personas spend time, then create platform-native content rather than cross-posting identical material everywhere."
        },
        {
          id: "digital-marketing-101-l04-c3",
          title: "Organic vs. Paid Social Media",
          content:
            "Organic social media refers to free content posted to your profiles — posts, stories, reels, and community engagement. Organic reach has declined significantly on most platforms (Facebook organic reach averages 2–5% of followers), making consistency, quality, and community engagement essential. Paid social media uses the platforms' advertising systems to amplify content to targeted audiences beyond your followers. You can target by demographics, interests, behaviors, lookalike audiences, and retargeting lists. The most effective strategies blend both: use organic content to build brand voice and community, then amplify top-performing organic posts with paid budget to reach new audiences. Track engagement rate, reach, and cost per result to balance the mix."
        }
      ],
      flashcards: [
        { id: "digital-marketing-101-l04-f1", front: "TOFU / MOFU / BOFU", back: "Top, Middle, Bottom of Funnel — content marketing framework mapping content types to awareness, consideration, and conversion stages" },
        { id: "digital-marketing-101-l04-f2", front: "Organic social reach", back: "The number of unique users who see your unpaid social content — typically 2–5% of followers on Facebook due to algorithmic filtering" },
        { id: "digital-marketing-101-l04-f3", front: "Lookalike audience", back: "An ad targeting method that finds new users who share characteristics with your existing customers — available on Meta, LinkedIn, and other platforms" },
        { id: "digital-marketing-101-l04-f4", front: "Content calendar", back: "A planning document that schedules what content to publish, on which channels, and when — ensures consistency and strategic alignment" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Email Marketing & Marketing Automation  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l05",
      title: "Email Marketing & Marketing Automation",
      type: "interactive",
      duration: 14,
      objectives: [
        "Design effective email campaigns using segmentation and personalization",
        "Build automated email workflows for lead nurturing and onboarding",
        "Interpret email marketing KPIs including open rate, click-through rate, and list health"
      ],
      chunks: [
        {
          id: "digital-marketing-101-l05-c1",
          title: "Email Marketing Fundamentals",
          content:
            "Email marketing remains one of the highest-ROI digital channels, returning an average of $36 for every $1 spent. Success depends on three pillars: a quality list built through opt-in methods (never purchased lists), compelling content that provides value, and strategic timing. Key email types include welcome sequences (introduce new subscribers to your brand), newsletters (regular value-driven updates), promotional emails (sales, launches, limited offers), and transactional emails (order confirmations, shipping updates). Platforms like Mailchimp, ConvertKit, and HubSpot provide drag-and-drop editors, audience management, and performance analytics. Compliance with regulations like CAN-SPAM and GDPR is mandatory — every email must include an unsubscribe link and your physical address."
        },
        {
          id: "digital-marketing-101-l05-c2",
          title: "Segmentation, Personalization & A/B Testing",
          content:
            "Segmentation divides your email list into smaller groups based on shared characteristics — demographics, purchase history, engagement level, or funnel stage. Segmented campaigns generate 14% higher open rates and 100% higher click-through rates than non-segmented blasts. Personalization goes beyond inserting a first name: dynamic content blocks can display different product recommendations, images, or CTAs based on subscriber data. A/B testing (split testing) compares two versions of an email — varying subject lines, send times, CTA button colors, or content length — to determine which performs better. Test one variable at a time, run the test on a statistically significant portion of your list (typically 20–30%), then send the winner to the remainder."
        },
        {
          id: "digital-marketing-101-l05-c3",
          title: "Marketing Automation Workflows",
          content:
            "Marketing automation uses software to trigger pre-built email sequences based on user behavior or time-based rules. A welcome series might send five emails over two weeks after a signup, gradually introducing features and offering a first-purchase discount. An abandoned cart workflow triggers when a user adds items but leaves without purchasing — these emails recover an average of 10–15% of lost sales. Lead scoring assigns points based on actions (opened email +1, visited pricing page +5, downloaded whitepaper +10); when a lead crosses a threshold, they are automatically routed to sales. Tools like HubSpot, ActiveCampaign, and Mailchimp Automations let marketers build these workflows visually without writing code."
        }
      ],
      interactiveActivities: [
        {
          id: "digital-marketing-101-l05-a1",
          title: "Sort Email Types by Funnel Stage",
          type: "sorting_buckets",
          buckets: ["Awareness / TOFU", "Consideration / MOFU", "Conversion / BOFU"],
          items: [
            { text: "Welcome email introducing your brand story", bucket: "Awareness / TOFU" },
            { text: "Case study showcasing client results", bucket: "Consideration / MOFU" },
            { text: "Abandoned cart reminder with discount code", bucket: "Conversion / BOFU" },
            { text: "Educational newsletter with industry tips", bucket: "Awareness / TOFU" },
            { text: "Product comparison guide", bucket: "Consideration / MOFU" },
            { text: "Limited-time promotional offer email", bucket: "Conversion / BOFU" },
            { text: "Webinar invitation on industry trends", bucket: "Consideration / MOFU" },
            { text: "Free trial activation prompt", bucket: "Conversion / BOFU" }
          ]
        }
      ],
      flashcards: [
        { id: "digital-marketing-101-l05-f1", front: "Email open rate", back: "Percentage of delivered emails that recipients opened — industry average is 20–25%; affected primarily by subject line and sender name" },
        { id: "digital-marketing-101-l05-f2", front: "Click-through rate (CTR)", back: "Percentage of email recipients who clicked at least one link — measures content relevance and CTA effectiveness" },
        { id: "digital-marketing-101-l05-f3", front: "Lead scoring", back: "Assigning numerical values to prospect actions (email opens, page visits, downloads) to prioritize sales-ready leads automatically" },
        { id: "digital-marketing-101-l05-f4", front: "Abandoned cart email", back: "An automated email triggered when a user adds products to their cart but does not complete checkout — recovers 10–15% of lost revenue on average" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Content, Social & Email Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l06",
      title: "Content, Social & Email Marketing Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of content marketing strategy, social media channels, and email marketing best practices"],
      questions: [
        {
          id: "digital-marketing-101-l06-q1",
          text: "Which type of content is best suited for the bottom of the marketing funnel (BOFU)?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Awareness blog posts" },
            { id: "b", text: "Educational infographics" },
            { id: "c", text: "Product demos and free trials" },
            { id: "d", text: "Industry news roundups" }
          ],
          correctOptionId: "c",
          explanation: "BOFU content like demos, free trials, and testimonials targets prospects ready to convert — they need final reassurance, not education."
        },
        {
          id: "digital-marketing-101-l06-q2",
          text: "Segmented email campaigns compared to non-segmented blasts typically show:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Lower open rates and higher unsubscribes" },
            { id: "b", text: "No measurable difference in performance" },
            { id: "c", text: "Higher open rates and significantly higher click-through rates" },
            { id: "d", text: "Higher cost with no ROI improvement" }
          ],
          correctOptionId: "c",
          explanation: "Segmented campaigns deliver more relevant content, generating ~14% higher open rates and up to 100% higher CTR."
        },
        {
          id: "digital-marketing-101-l06-q3",
          text: "An abandoned cart email workflow is triggered when a user:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Opens a newsletter" },
            { id: "b", text: "Unsubscribes from the mailing list" },
            { id: "c", text: "Adds items to their cart but leaves without completing the purchase" },
            { id: "d", text: "Visits the homepage for the first time" }
          ],
          correctOptionId: "c",
          explanation: "Abandoned cart automations re-engage shoppers who showed purchase intent but didn't complete checkout."
        },
        {
          id: "digital-marketing-101-l06-q4",
          text: "When A/B testing an email campaign, the best practice is to:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Change every element at once to find the best combination" },
            { id: "b", text: "Test one variable at a time on a significant sample, then send the winner to the rest" },
            { id: "c", text: "Always test on your entire list simultaneously" },
            { id: "d", text: "Skip testing if your open rate is above 10%" }
          ],
          correctOptionId: "b",
          explanation: "Testing one variable at a time isolates its effect. Testing on a subset (20–30%) before rolling out the winner ensures reliable results."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Paid Advertising: PPC, Display & Social Ads  (video)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l07",
      title: "Paid Advertising: PPC, Display & Social Ads",
      type: "video",
      duration: 13,
      objectives: [
        "Explain how Google Ads auction-based bidding and Quality Score determine ad placement",
        "Compare search ads, display ads, and social media advertising formats",
        "Calculate and interpret key paid media metrics: CPC, CTR, ROAS, and CAC"
      ],
      chunks: [
        {
          id: "digital-marketing-101-l07-c1",
          title: "Search Advertising & Google Ads",
          content:
            "Pay-per-click (PPC) search advertising places text ads at the top of search engine results pages (SERPs) when users query targeted keywords. Google Ads uses an auction system: advertisers bid on keywords, but the highest bid alone does not win. Google calculates Ad Rank using your bid multiplied by your Quality Score — a 1–10 rating based on expected click-through rate, ad relevance, and landing page experience. A high Quality Score means you can pay less per click and still outrank competitors. Campaign structure follows a hierarchy: Account → Campaigns (budget and targeting settings) → Ad Groups (themed keyword clusters) → Ads (the actual copy). Match types (broad, phrase, exact) control which searches trigger your ads, and negative keywords exclude irrelevant queries to prevent wasted spend."
        },
        {
          id: "digital-marketing-101-l07-c2",
          title: "Display Advertising & Retargeting",
          content:
            "Display advertising places visual banner ads, responsive ads, or rich media across the Google Display Network (GDN), which spans over 2 million websites and reaches 90% of internet users. Unlike search ads (which target active intent), display ads build brand awareness by reaching users as they browse content. Targeting options include contextual (ads appear on pages related to your keywords), demographic (age, gender, income), affinity (users interested in topics like fitness or travel), and in-market (users actively researching a product category). Retargeting (remarketing) serves ads specifically to users who previously visited your website or interacted with your content — these campaigns typically achieve 2–3× higher click-through rates because they re-engage warm audiences. A retargeting pixel (a small JavaScript snippet) placed on your site tracks visitors for ad targeting."
        },
        {
          id: "digital-marketing-101-l07-c3",
          title: "Social Media Advertising & Metrics",
          content:
            "Social media advertising leverages platform-specific ad managers — Meta Ads Manager (Facebook and Instagram), LinkedIn Campaign Manager, TikTok Ads Manager — to target users based on demographics, interests, behaviors, and custom/lookalike audiences. Common ad formats include image ads, video ads, carousel ads (multiple scrollable images), and lead generation forms that capture contact information without leaving the platform. Key metrics every marketer must track: Cost Per Click (CPC) — the average price you pay for each click; Click-Through Rate (CTR) — clicks divided by impressions, indicating ad relevance; Return on Ad Spend (ROAS) — revenue generated per dollar spent on ads (a ROAS of 4:1 means $4 revenue per $1 spent); and Customer Acquisition Cost (CAC) — total marketing and sales spend divided by the number of new customers acquired."
        }
      ],
      flashcards: [
        { id: "digital-marketing-101-l07-f1", front: "Quality Score (Google Ads)", back: "A 1–10 rating based on expected CTR, ad relevance, and landing page experience — higher scores lower your CPC and improve ad position" },
        { id: "digital-marketing-101-l07-f2", front: "ROAS (Return on Ad Spend)", back: "Revenue generated divided by advertising cost — a ROAS of 4:1 means every $1 in ad spend generates $4 in revenue" },
        { id: "digital-marketing-101-l07-f3", front: "Retargeting / Remarketing", back: "Serving ads to users who previously visited your site or engaged with your content — achieves 2–3× higher CTR than prospecting campaigns" },
        { id: "digital-marketing-101-l07-f4", front: "CAC (Customer Acquisition Cost)", back: "Total marketing and sales expenditure divided by the number of new customers acquired during that period" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Analytics, KPIs & Conversion Optimization  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l08",
      title: "Analytics, KPIs & Conversion Optimization",
      type: "interactive",
      duration: 14,
      objectives: [
        "Navigate Google Analytics 4 to interpret traffic sources, user behavior, and conversion events",
        "Select and track the right KPIs for each marketing channel",
        "Apply conversion rate optimization (CRO) techniques to landing pages"
      ],
      chunks: [
        {
          id: "digital-marketing-101-l08-c1",
          title: "Google Analytics 4 Essentials",
          content:
            "Google Analytics 4 (GA4) is the industry-standard web analytics platform for measuring website and app performance. GA4 uses an event-based data model: every user interaction (page view, button click, form submission, purchase) is tracked as an event. Key reports include Acquisition (which channels drive traffic — organic search, paid, social, direct, referral), Engagement (which pages users visit, how long they stay, and what actions they take), and Monetization (revenue, transactions, and purchase journeys). UTM parameters — tagged onto URLs — allow marketers to track exactly which campaign, source, and medium drove each visit. For example, a URL tagged with utm_source=facebook&utm_medium=cpc&utm_campaign=spring_sale shows that a visitor came from a paid Facebook ad in the spring sale campaign."
        },
        {
          id: "digital-marketing-101-l08-c2",
          title: "Choosing the Right KPIs",
          content:
            "Key Performance Indicators (KPIs) are measurable values that demonstrate whether a marketing effort is meeting its objectives. Effective KPIs are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. For SEO, track organic sessions, keyword rankings, and organic conversion rate. For email, monitor open rate, CTR, and revenue per email. For paid ads, focus on CPC, ROAS, and CAC. For social media, measure engagement rate (likes + comments + shares divided by followers), reach, and referral traffic to your website. The critical mistake is tracking vanity metrics — numbers like total followers or page views that look impressive but do not indicate business impact. Always tie KPIs back to revenue or pipeline value."
        },
        {
          id: "digital-marketing-101-l08-c3",
          title: "Conversion Rate Optimization (CRO)",
          content:
            "Conversion rate optimization is the systematic process of increasing the percentage of website visitors who take a desired action — signing up, purchasing, or requesting a demo. The conversion rate formula is simple: conversions ÷ total visitors × 100. Average landing page conversion rates hover around 2–5%, but top performers exceed 10%. CRO techniques include: simplifying forms (every extra field reduces completions by ~10%), crafting clear and specific CTAs ('Start My Free Trial' outperforms 'Submit'), placing social proof (testimonials, trust badges, client logos) near the CTA, and improving page speed (a 1-second delay reduces conversions by 7%). A/B testing tools like Google Optimize, Optimizely, or VWO let you run controlled experiments comparing page variations to find statistically significant winners."
        }
      ],
      interactiveActivities: [
        {
          id: "digital-marketing-101-l08-a1",
          title: "Match KPI to Marketing Channel",
          type: "matching_pairs",
          pairs: [
            { left: "Organic sessions & keyword rankings", right: "SEO" },
            { left: "Open rate & revenue per email", right: "Email Marketing" },
            { left: "ROAS & Cost Per Click", right: "Paid Advertising" },
            { left: "Engagement rate & referral traffic", right: "Social Media" },
            { left: "Conversion rate & bounce rate", right: "Landing Page / CRO" },
            { left: "Customer Lifetime Value (CLV)", right: "Overall Business Health" }
          ]
        }
      ],
      flashcards: [
        { id: "digital-marketing-101-l08-f1", front: "UTM parameters", back: "Tags added to URLs (source, medium, campaign, term, content) that let Google Analytics track which campaigns drive traffic and conversions" },
        { id: "digital-marketing-101-l08-f2", front: "Conversion rate formula", back: "Conversions ÷ Total Visitors × 100 — average landing page rate is 2–5%, top performers exceed 10%" },
        { id: "digital-marketing-101-l08-f3", front: "Bounce rate", back: "Percentage of visitors who leave a page without taking any further action — high bounce rates often indicate poor content relevance or slow load times" },
        { id: "digital-marketing-101-l08-f4", front: "Vanity metrics", back: "Numbers (total followers, raw page views) that look impressive but don't indicate business impact — always prioritize KPIs tied to revenue" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Paid Ads & Analytics Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l09",
      title: "Paid Advertising & Analytics Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of paid advertising mechanics, analytics interpretation, and conversion optimization"],
      questions: [
        {
          id: "digital-marketing-101-l09-q1",
          text: "In Google Ads, Ad Rank is calculated using:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Budget size alone — the highest spender always wins" },
            { id: "b", text: "Bid amount multiplied by Quality Score" },
            { id: "c", text: "Number of keywords in the ad group" },
            { id: "d", text: "The age of the Google Ads account" }
          ],
          correctOptionId: "b",
          explanation: "Ad Rank = Bid × Quality Score. A high Quality Score (based on CTR, relevance, and landing page) can let you pay less and rank higher."
        },
        {
          id: "digital-marketing-101-l09-q2",
          text: "Retargeting campaigns typically achieve higher CTR because they:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Use larger ad budgets than prospecting campaigns" },
            { id: "b", text: "Target cold audiences who have never interacted with the brand" },
            { id: "c", text: "Re-engage users who have already shown interest by visiting the site" },
            { id: "d", text: "Only run on weekends when competition is lower" }
          ],
          correctOptionId: "c",
          explanation: "Retargeting serves ads to warm audiences — users who already visited your site — resulting in 2–3× higher CTR than cold prospecting."
        },
        {
          id: "digital-marketing-101-l09-q3",
          text: "Which CRO technique most directly reduces form abandonment?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Adding more form fields to gather comprehensive data" },
            { id: "b", text: "Removing the CTA button" },
            { id: "c", text: "Reducing the number of form fields" },
            { id: "d", text: "Using auto-playing background video" }
          ],
          correctOptionId: "c",
          explanation: "Each additional form field reduces completion rates by approximately 10%. Minimizing fields lowers friction and increases conversions."
        },
        {
          id: "digital-marketing-101-l09-q4",
          text: "UTM parameters in a URL allow marketers to:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Block bots from clicking ads" },
            { id: "b", text: "Improve page load speed" },
            { id: "c", text: "Track which specific campaign, source, and medium drove a visit in Google Analytics" },
            { id: "d", text: "Increase the Quality Score of Google Ads" }
          ],
          correctOptionId: "c",
          explanation: "UTM tags (source, medium, campaign) are appended to URLs so analytics tools can attribute traffic to specific marketing efforts."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Digital Marketing Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "digital-marketing-101-l10",
      title: "Mastery Quiz: Digital Marketing Foundations",
      type: "quiz",
      duration: 12,
      objectives: ["Synthesize all digital marketing foundations concepts across channels, strategy, and analytics"],
      questions: [
        {
          id: "digital-marketing-101-l10-q1",
          text: "A company's ROAS is 3:1. This means:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "They spent $3 for every $1 in revenue" },
            { id: "b", text: "They generated $3 in revenue for every $1 spent on ads" },
            { id: "c", text: "Their Quality Score is 3 out of 10" },
            { id: "d", text: "Three percent of visitors converted" }
          ],
          correctOptionId: "b",
          explanation: "ROAS (Return on Ad Spend) of 3:1 means every dollar invested in advertising produced three dollars in revenue."
        },
        {
          id: "digital-marketing-101-l10-q2",
          text: "Which combination of strategies best targets all stages of the marketing funnel?",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "Only paid search ads for every stage" },
            { id: "b", text: "Blog content for awareness, case studies for consideration, free trials for conversion" },
            { id: "c", text: "Only email marketing for all stages" },
            { id: "d", text: "Social media posts without any landing pages" }
          ],
          correctOptionId: "b",
          explanation: "An effective funnel uses TOFU content (blogs) for awareness, MOFU content (case studies) for consideration, and BOFU offers (trials) for conversion."
        },
        {
          id: "digital-marketing-101-l10-q3",
          text: "A landing page has 5,000 visitors and 200 conversions. The conversion rate is:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "2%" },
            { id: "b", text: "4%" },
            { id: "c", text: "20%" },
            { id: "d", text: "0.4%" }
          ],
          correctOptionId: "b",
          explanation: "Conversion rate = 200 ÷ 5,000 × 100 = 4%. This is at the higher end of the average 2–5% range for landing pages."
        },
        {
          id: "digital-marketing-101-l10-q4",
          text: "An email marketer notices low open rates. The MOST impactful element to A/B test first is:",
          skillId: "digital-marketing-101-skill-core",
          options: [
            { id: "a", text: "The footer disclaimer text" },
            { id: "b", text: "The subject line" },
            { id: "c", text: "The unsubscribe link placement" },
            { id: "d", text: "The email signature font" }
          ],
          correctOptionId: "b",
          explanation: "The subject line is the primary factor influencing whether a recipient opens an email — it should be tested first when open rates are low."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
