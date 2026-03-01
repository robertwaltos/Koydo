import type { LearningModule } from "@/lib/modules/types";

export const MarketingManagement401Module: LearningModule = {
  id: "marketing-management-401",
  title: "Strategic Marketing & Global Markets",
  description:
    "Synthesize advanced marketing strategy for complex global environments. Master product innovation management, global marketing adaptation, luxury and premium marketing, growth hacking, and the intersection of marketing with corporate strategy.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "marketing", "global", "strategy"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Design go-to-market strategies for new product launches",
    "Adapt marketing strategies across diverse cultural markets",
    "Apply growth hacking frameworks for rapid customer acquisition",
    "Evaluate luxury and premium brand marketing principles",
    "Build marketing strategies aligned with corporate business strategy",
    "Manage product portfolios and innovation pipelines",
    "Analyze marketing's role in shareholder value creation"
  ],
  lessons: [
    {
      id: "marketing-management-401-l01",
      title: "New Product Development & Launch Strategy",
      type: "video",
      duration: 14,
      objectives: ["Map the new product development process", "Design go-to-market strategies", "Apply diffusion of innovations theory"],
      chunks: [
        { id: "marketing-management-401-l01-c1", title: "The NPD Process", content: "New product development follows stages: idea generation (brainstorming, customer insights, technology push), screening (filtering using criteria like market size, feasibility, strategic fit), concept development and testing (presenting the concept to target customers for feedback), business analysis (financial projections, break-even analysis), product development (building prototypes), test marketing (limited market launch to validate), and full commercialization. At each gate, the team decides: go, kill, hold, or recycle. Only about 15% of product ideas survive to market." },
        { id: "marketing-management-401-l01-c2", title: "Go-To-Market Strategy", content: "A GTM strategy defines how to bring a new product to market. Key elements: target market definition (which segment first?), value proposition (why buy this vs. alternatives?), channel strategy (direct, retail, online, partners?), pricing model (penetration vs. skimming?), and launch sequence (which geography, timing, phasing?). Successful GTM requires cross-functional alignment: product, marketing, sales, and customer success must coordinate on messaging, training, and support readiness." },
        { id: "marketing-management-401-l01-c3", title: "Diffusion of Innovations", content: "Everett Rogers' theory explains how innovations spread through populations in an S-curve pattern. Five adopter categories: Innovators (2.5% — risk-tolerant technology enthusiasts), Early Adopters (13.5% — visionary opinion leaders), Early Majority (34% — pragmatic, wait for proof), Late Majority (34% — skeptical, follow the crowd), and Laggards (16% — resist change). Geoffrey Moore identified a 'chasm' between Early Adopters and Early Majority that many products fail to cross — crossing requires shifting messaging from vision to practical benefits." }
      ],
      flashcards: [
        { id: "marketing-management-401-l01-f1", front: "NPD success rate", back: "Only about 15% of product ideas survive the development process to reach market — stage-gate discipline is critical" },
        { id: "marketing-management-401-l01-f2", front: "Crossing the chasm", back: "The gap between Early Adopters (vision-driven) and Early Majority (pragmatic) — requires shifting from technology excitement to proven practical benefits" },
        { id: "marketing-management-401-l01-f3", front: "Five adopter categories", back: "Innovators (2.5%) → Early Adopters (13.5%) → Early Majority (34%) → Late Majority (34%) → Laggards (16%)" }
      ]
    },
    {
      id: "marketing-management-401-l02",
      title: "Global Marketing Adaptation",
      type: "video",
      duration: 13,
      objectives: ["Evaluate standardization vs. adaptation strategies", "Navigate cultural dimensions in marketing", "Design market entry marketing strategies"],
      chunks: [
        { id: "marketing-management-401-l02-c1", title: "Standardize vs. Adapt", content: "The central tension in global marketing: standardize for efficiency (one campaign worldwide — Coca-Cola's universal brand) or adapt for local relevance (different products, prices, and promotions for each market — McDonald's menu varies by country). The answer is usually 'both' — standardize the brand promise and core identity while adapting execution. Geert Hofstede's cultural dimensions (individualism, power distance, uncertainty avoidance, masculinity, long-term orientation) explain why adaptation is often necessary." },
        { id: "marketing-management-401-l02-c2", title: "Cultural Considerations", content: "Marketing fails when cultural context is ignored. Color symbolism varies (white means purity in the West, mourning in parts of Asia). Humor doesn't translate well. Celebrity endorsements must use locally relevant figures. Religious and social norms affect what can be shown in advertising. Brand names must be checked for unintended meanings (Chevrolet's 'Nova' allegedly sounded like 'no go' in Spanish markets). Successful global marketers invest in local consumer insights and employ local talent in creative development." },
        { id: "marketing-management-401-l02-c3", title: "Growth Hacking for Rapid Expansion", content: "Growth hacking combines marketing, product, and engineering to achieve rapid, scalable growth. Techniques include: viral loops (Dropbox's referral program giving free storage for inviting friends), product-led growth (Slack's freemium model where teams adopt it organically), network effects (each new user makes the product more valuable), SEO content at scale (HubSpot's blog empire), and activation optimization (reducing time-to-value for new users). The key mindset: every product feature is a marketing opportunity, and growth is everyone's responsibility." }
      ],
      flashcards: [
        { id: "marketing-management-401-l02-f1", front: "Standardize vs. adapt in global marketing", back: "Standardize brand promise and core identity for efficiency; adapt execution for local cultural relevance — the 'glocal' approach" },
        { id: "marketing-management-401-l02-f2", front: "Hofstede's cultural dimensions", back: "Individualism, Power Distance, Uncertainty Avoidance, Masculinity, Long-Term Orientation — explain cross-cultural differences in consumer behavior" },
        { id: "marketing-management-401-l02-f3", front: "Growth hacking", back: "Combining marketing, product, and engineering for rapid scalable growth — viral loops, product-led growth, network effects, activation optimization" }
      ]
    },
    {
      id: "marketing-management-401-l03",
      title: "Premium & Luxury Brand Marketing",
      type: "video",
      duration: 12,
      objectives: ["Distinguish luxury marketing from mass marketing", "Apply the luxury brand paradox to pricing and distribution", "Evaluate the democratization of luxury through digital"],
      chunks: [
        { id: "marketing-management-401-l03-c1", title: "The Luxury Paradox", content: "Luxury marketing inverts conventional rules: scarcity increases demand (limited editions, waitlists), higher prices increase desire (Veblen goods where price signals status), controlled distribution reduces accessibility (no discount outlets — Louis Vuitton destroys unsold goods rather than discounting), and advertising creates dream value rather than product information. The luxury brand equation: Heritage × Craftsmanship × Exclusivity × Dream = Brand Value. Destroying the dream through over-distribution or discounting destroys the brand." },
        { id: "marketing-management-401-l03-c2", title: "Digital Luxury", content: "Digital platforms both threaten and enable luxury brands. The threat: ubiquitous online access undermines exclusivity and scarcity. The opportunity: storytelling through immersive digital experiences (virtual fashion shows, behind-the-scenes craftsmanship videos), direct-to-consumer relationships bypassing wholesale, and data-driven personalization at the individual level. Successful luxury digital strategies maintain brand elevation through selective presence — Hermès has minimal social media; Burberry pioneered luxury live-streaming. The key: use digital to enhance the dream, never to discount it." }
      ],
      flashcards: [
        { id: "marketing-management-401-l03-f1", front: "Veblen goods", back: "Products where demand increases as price increases — higher price signals status and exclusivity (luxury watches, designer handbags)" },
        { id: "marketing-management-401-l03-f2", front: "Luxury brand equation", back: "Heritage × Craftsmanship × Exclusivity × Dream = Brand Value — destroying any element (especially through discounting) diminishes the brand" }
      ]
    },
    {
      id: "marketing-management-401-l04",
      title: "Checkpoint: Advanced Marketing Strategy",
      type: "quiz",
      duration: 12,
      questions: [
        { id: "marketing-management-401-l04-q1", text: "The 'chasm' in technology adoption exists between:", options: [{ id: "a", text: "Innovators and Early Adopters" }, { id: "b", text: "Early Adopters and Early Majority" }, { id: "c", text: "Early Majority and Late Majority" }, { id: "d", text: "Late Majority and Laggards" }], correctOptionId: "b", explanation: "Geoffrey Moore's chasm exists between visionary Early Adopters and pragmatic Early Majority — crossing it requires shifting from technology vision to proven practical benefits." },
        { id: "marketing-management-401-l04-q2", text: "Dropbox offering free storage for inviting friends is an example of:", options: [{ id: "a", text: "Penetration pricing" }, { id: "b", text: "A viral loop growth hack" }, { id: "c", text: "Traditional advertising" }, { id: "d", text: "Price skimming" }], correctOptionId: "b", explanation: "Dropbox's referral program is a textbook viral loop — each user has incentive to invite others, creating exponential growth through the product itself." },
        { id: "marketing-management-401-l04-q3", text: "Louis Vuitton destroying unsold goods rather than discounting demonstrates:", options: [{ id: "a", text: "Poor inventory management" }, { id: "b", text: "Protecting brand exclusivity and the luxury paradox" }, { id: "c", text: "Environmental irresponsibility" }, { id: "d", text: "Cost leadership strategy" }], correctOptionId: "b", explanation: "In luxury marketing, discounting destroys the dream and brand value. Destroying unsold goods protects exclusivity and ensures the brand is never associated with bargain pricing." }
      ]
    },
    {
      id: "marketing-management-401-l05",
      title: "Marketing & Corporate Strategy Integration",
      type: "video",
      duration: 13,
      objectives: ["Connect marketing strategy to shareholder value creation", "Design marketing-led growth strategies for boardroom presentation", "Evaluate the CMO role in corporate leadership"],
      chunks: [
        { id: "marketing-management-401-l05-c1", title: "Marketing as Value Creation", content: "Marketing creates shareholder value through three mechanisms: customer equity (the total CLV of all current and future customers), brand equity (the premium value from brand recognition and associations), and market position (market share, growth rate, and competitive barriers). McKinsey research shows companies with strong marketing capabilities outperform peers by 20% in total shareholder returns. The CFO increasingly demands marketing accountability — connecting every marketing investment to financial outcomes." },
        { id: "marketing-management-401-l05-c2", title: "Marketing Strategy for the C-Suite", content: "Marketing at the strategic level answers: Where should we play? (market selection), How do we win? (value proposition and positioning), and What capabilities do we need? (marketing assets and competencies). Board-level marketing presentations should speak the language of finance: market sizing (TAM/SAM/SOM), customer economics (CAC, CLV, payback period), competitive dynamics (share of voice, share of market), and growth projections (pipeline coverage, conversion funnel metrics)." },
        { id: "marketing-management-401-l05-c3", title: "The Future of Marketing", content: "Marketing is being reshaped by AI (generative content, predictive targeting, conversational commerce), the creator economy (shifting influence from brands to individuals), sustainability demands (consumers punishing greenwashing and rewarding authentic environmental commitment), and community-led growth (brand communities driving advocacy beyond traditional marketing). The winning marketing organizations of the future will be data-literate, culturally fluent, ethically grounded, and technology-native — while never losing sight of the fundamentally human art of understanding what people want and why." }
      ],
      flashcards: [
        { id: "marketing-management-401-l05-f1", front: "Three mechanisms of marketing value creation", back: "Customer equity (total CLV), Brand equity (premium from brand strength), Market position (share, growth, barriers)" },
        { id: "marketing-management-401-l05-f2", front: "TAM / SAM / SOM", back: "Total Addressable Market (everyone possible), Serviceable Available Market (reachable with your model), Serviceable Obtainable Market (realistic near-term capture)" },
        { id: "marketing-management-401-l05-f3", front: "Creator economy impact on marketing", back: "Influence shifting from brand-controlled channels to individual creators — brands must collaborate with rather than control the narrative" }
      ]
    },
    {
      id: "marketing-management-401-l06",
      title: "Final Assessment: Strategic Marketing & Global Markets",
      type: "quiz",
      duration: 15,
      questions: [
        { id: "marketing-management-401-l06-q1", text: "Which metric set would most impress a CFO evaluating marketing performance?", options: [{ id: "a", text: "Social media followers and likes" }, { id: "b", text: "CAC, CLV, payback period, and marketing ROI" }, { id: "c", text: "Email open rates and click-through rates" }, { id: "d", text: "Website traffic and page views" }], correctOptionId: "b", explanation: "CFOs care about financial outcomes: Customer Acquisition Cost, Customer Lifetime Value, payback period, and marketing ROI directly connect marketing spending to financial results." },
        { id: "marketing-management-401-l06-q2", text: "According to diffusion theory, what percentage of a market are 'Innovators'?", options: [{ id: "a", text: "2.5%" }, { id: "b", text: "13.5%" }, { id: "c", text: "34%" }, { id: "d", text: "16%" }], correctOptionId: "a", explanation: "Rogers' diffusion curve: Innovators 2.5%, Early Adopters 13.5%, Early Majority 34%, Late Majority 34%, Laggards 16% — Innovators are the smallest but most risk-tolerant group." },
        { id: "marketing-management-401-l06-q3", text: "SOM (Serviceable Obtainable Market) represents:", options: [{ id: "a", text: "The entire global market for your product category" }, { id: "b", text: "The portion of the market you can realistically capture in the near term" }, { id: "c", text: "Your current customer base" }, { id: "d", text: "The market your competitors serve" }], correctOptionId: "b", explanation: "SOM is the realistic near-term capture — the subset of SAM you can actually win given current resources, competition, and distribution. It's what investors most care about." }
      ]
    }
  ],
};
