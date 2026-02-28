import type { LearningModule } from "@/lib/modules/types";

export const StrategicManagement201Module: LearningModule = {
  id: "strategic-management-201",
  title: "Corporate & Business-Level Strategy",
  description:
    "Dive deeper into multi-business strategy. Master diversification, vertical integration, mergers & acquisitions, strategic alliances, and the Boston Consulting Group matrix for portfolio management.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "strategy"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "intermediate",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Distinguish between corporate-level and business-level strategy",
    "Evaluate diversification strategies: related vs. unrelated",
    "Analyze vertical integration decisions and their trade-offs",
    "Apply the BCG growth-share matrix to a multi-business portfolio",
    "Assess mergers and acquisitions for strategic fit and synergy",
    "Design strategic alliances and joint ventures",
    "Evaluate market entry modes for growth"
  ],
  lessons: [
    {
      id: "strategic-management-201-l01",
      title: "Corporate vs. Business Strategy",
      type: "video",
      duration: 12,
      objectives: [
        "Define corporate-level strategy and its scope",
        "Explain how business-level strategy differs",
        "Map the hierarchy: corporate → business → functional"
      ],
      chunks: [
        {
          id: "strategic-management-201-l01-c1",
          title: "Levels of Strategy",
          content:
            "Corporate strategy asks 'What businesses should we be in?' — it deals with the overall scope of the organization. Business-level strategy asks 'How do we compete in each business?' — it focuses on competitive positioning within a specific market. Functional strategy (marketing, finance, operations) asks 'How do we support the business strategy?' These three levels must be aligned for success."
        },
        {
          id: "strategic-management-201-l01-c2",
          title: "The Corporate Advantage Test",
          content:
            "A multi-business firm creates value only if its businesses are worth more together than apart. This is the 'better-off test.' A diversified company must ask: Does the parent company add value that businesses couldn't achieve independently? If not, the market would be better served by independent companies. Corporate strategy must pass three tests: attractiveness (is the industry structurally attractive?), cost-of-entry (can we enter profitably?), and better-off (are we better together?)."
        },
        {
          id: "strategic-management-201-l01-c3",
          title: "Growth Vectors",
          content:
            "Ansoff's Growth Matrix identifies four strategic options: market penetration (existing products, existing markets), market development (existing products, new markets), product development (new products, existing markets), and diversification (new products, new markets). Each carries increasing risk, with diversification being the highest-risk strategy."
        }
      ],
      flashcards: [
        { id: "strategic-management-201-l01-f1", front: "Corporate-level strategy", back: "Determines which businesses and industries a multi-business firm should compete in — 'What businesses should we be in?'" },
        { id: "strategic-management-201-l01-f2", front: "Better-off test", back: "A diversified firm creates value only if its businesses are worth more together than apart (synergy must exist)" },
        { id: "strategic-management-201-l01-f3", front: "Ansoff's Growth Matrix", back: "Four growth options: market penetration, market development, product development, and diversification — ordered by increasing risk" }
      ]
    },
    {
      id: "strategic-management-201-l02",
      title: "Diversification Strategies",
      type: "video",
      duration: 13,
      objectives: [
        "Compare related and unrelated diversification",
        "Identify sources of synergy in related diversification",
        "Evaluate the risks of over-diversification"
      ],
      chunks: [
        {
          id: "strategic-management-201-l02-c1",
          title: "Related Diversification",
          content:
            "Related diversification means entering industries that share strategic fit with existing businesses — common resources, distribution channels, technology, or customers. Disney exemplifies this: theme parks, movies, streaming, merchandise, and cruise lines all leverage the Disney brand and characters. The value comes from economies of scope — sharing resources across businesses to reduce costs or increase revenue."
        },
        {
          id: "strategic-management-201-l02-c2",
          title: "Unrelated Diversification",
          content:
            "Unrelated diversification (conglomerate strategy) means entering industries with no strategic fit. Berkshire Hathaway owns insurance, railroads, energy utilities, and candy companies. The logic is financial: superior capital allocation across businesses. The parent company acts as an internal capital market. This strategy works when management has exceptional capital allocation skills, but research shows unrelated diversification often destroys value — the 'diversification discount.'"
        },
        {
          id: "strategic-management-201-l02-c3",
          title: "Vertical Integration",
          content:
            "Vertical integration means owning stages of the value chain — upstream (backward) toward suppliers or downstream (forward) toward customers. Tesla's vertical integration (battery factories, direct sales, charging network) gives control but requires massive capital. The trade-offs: integration reduces dependency and transaction costs but decreases flexibility and increases fixed costs. Many firms use 'taper integration' — partial ownership of adjacent stages."
        }
      ],
      flashcards: [
        { id: "strategic-management-201-l02-f1", front: "Related diversification", back: "Entering industries that share strategic fit (common resources, technology, customers) to capture economies of scope" },
        { id: "strategic-management-201-l02-f2", front: "Diversification discount", back: "The tendency for conglomerates (unrelated diversification) to be valued less than the sum of their parts by the market" },
        { id: "strategic-management-201-l02-f3", front: "Vertical integration", back: "Owning stages of the value chain — backward (toward suppliers) or forward (toward customers) — trading flexibility for control" }
      ]
    },
    {
      id: "strategic-management-201-l03",
      title: "BCG Matrix & Portfolio Management",
      type: "interactive",
      duration: 14,
      objectives: [
        "Classify businesses using the BCG growth-share matrix",
        "Prescribe strategies for Stars, Cash Cows, Question Marks, and Dogs",
        "Critique the limitations of portfolio models"
      ],
      chunks: [
        {
          id: "strategic-management-201-l03-c1",
          title: "The BCG Growth-Share Matrix",
          content:
            "The Boston Consulting Group matrix plots business units on two dimensions: market growth rate (vertical) and relative market share (horizontal). Stars: high growth + high share — invest to maintain leadership. Cash Cows: low growth + high share — harvest cash to fund Stars. Question Marks: high growth + low share — invest selectively or divest. Dogs: low growth + low share — divest or liquidate."
        },
        {
          id: "strategic-management-201-l03-c2",
          title: "Strategic Prescriptions",
          content:
            "The ideal portfolio has a balance: Cash Cows generate funds to invest in Stars and promising Question Marks. Stars eventually become Cash Cows as markets mature. Question Marks need careful analysis — only invest in those with realistic paths to leadership. Dogs drain resources and should be divested unless they serve a strategic purpose (like maintaining a full product line)."
        },
        {
          id: "strategic-management-201-l03-c3",
          title: "Limitations",
          content:
            "The BCG matrix oversimplifies: market share isn't the only driver of profitability, growth rate isn't the only measure of attractiveness, and the four-box classification ignores nuance. Businesses in 'Dog' positions may still be profitable in niches. The GE-McKinsey Matrix improves on BCG by using multi-factor assessments for industry attractiveness and competitive strength."
        }
      ],
      flashcards: [
        { id: "strategic-management-201-l03-f1", front: "BCG Matrix: Stars", back: "High growth + high market share — invest heavily to maintain leadership; eventually become Cash Cows" },
        { id: "strategic-management-201-l03-f2", front: "BCG Matrix: Cash Cows", back: "Low growth + high market share — harvest cash flow to fund Stars and Question Marks" },
        { id: "strategic-management-201-l03-f3", front: "BCG Matrix: Question Marks", back: "High growth + low market share — invest selectively if path to leadership exists, otherwise divest" }
      ]
    },
    {
      id: "strategic-management-201-l04",
      title: "Mergers, Acquisitions & Strategic Alliances",
      type: "video",
      duration: 14,
      objectives: [
        "Distinguish between mergers, acquisitions, and alliances",
        "Evaluate M&A deals for strategic fit and synergy",
        "Design effective alliance governance structures"
      ],
      chunks: [
        {
          id: "strategic-management-201-l04-c1",
          title: "M&A Strategy",
          content:
            "Mergers combine two firms into one; acquisitions involve one firm buying another. Strategic motivations include: gaining market share, acquiring capabilities, entering new markets, achieving economies of scale, or eliminating a competitor. Despite their popularity, 60-80% of M&A deals fail to create expected value — usually due to overpayment, cultural clashes, or integration failures."
        },
        {
          id: "strategic-management-201-l04-c2",
          title: "Synergy Assessment",
          content:
            "Synergy means the combined entity is worth more than the sum of parts. Revenue synergies come from cross-selling, new market access, or combined IP. Cost synergies come from eliminating duplicate functions, shared purchasing power, or facility consolidation. Financial synergies come from lower cost of capital or tax benefits. The acquirer must ensure the premium paid doesn't exceed expected synergies."
        },
        {
          id: "strategic-management-201-l04-c3",
          title: "Strategic Alliances",
          content:
            "Alliances are cooperative arrangements between independent firms. Types include joint ventures (shared ownership entity), equity alliances (one firm takes a stake in another), and non-equity alliances (contractual partnerships). Alliances are preferred when: the goal is learning or capability access, risks need sharing, or full integration isn't necessary. Key success factors: complementary resources, compatible goals, and strong governance."
        }
      ],
      flashcards: [
        { id: "strategic-management-201-l04-f1", front: "Why 60-80% of M&A deals fail", back: "Overpayment for the target, cultural clashes during integration, and failure to realize expected synergies" },
        { id: "strategic-management-201-l04-f2", front: "Three types of synergy", back: "Revenue synergies (cross-selling, new markets), Cost synergies (eliminating duplication), Financial synergies (lower cost of capital, tax benefits)" },
        { id: "strategic-management-201-l04-f3", front: "Strategic alliance vs. M&A", back: "Alliances preserve independence and are preferred for learning, risk-sharing, or when full integration isn't needed" }
      ]
    },
    {
      id: "strategic-management-201-l05",
      title: "Checkpoint: Corporate Strategy",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "strategic-management-201-l05-q1",
          text: "Disney's expansion into theme parks, streaming, and merchandise is an example of:",
          options: [
            { id: "a", text: "Unrelated diversification" },
            { id: "b", text: "Related diversification" },
            { id: "c", text: "Market penetration" },
            { id: "d", text: "Backward vertical integration" }
          ],
          correctOptionId: "b",
          explanation: "Disney's businesses share strategic fit through the Disney brand, characters, and storytelling IP — this is related diversification leveraging economies of scope."
        },
        {
          id: "strategic-management-201-l05-q2",
          text: "In the BCG Matrix, which business unit should be harvested for cash?",
          options: [
            { id: "a", text: "Stars" },
            { id: "b", text: "Question Marks" },
            { id: "c", text: "Cash Cows" },
            { id: "d", text: "Dogs" }
          ],
          correctOptionId: "c",
          explanation: "Cash Cows have high market share in mature (low-growth) markets — they generate excess cash that should be harvested to fund Stars and promising Question Marks."
        },
        {
          id: "strategic-management-201-l05-q3",
          text: "Tesla building its own battery factories is an example of:",
          options: [
            { id: "a", text: "Forward vertical integration" },
            { id: "b", text: "Backward vertical integration" },
            { id: "c", text: "Unrelated diversification" },
            { id: "d", text: "Horizontal integration" }
          ],
          correctOptionId: "b",
          explanation: "Battery manufacturing is upstream (supplier-side) in Tesla's value chain — building its own factories is backward vertical integration."
        },
        {
          id: "strategic-management-201-l05-q4",
          text: "According to Ansoff's Matrix, which growth strategy carries the HIGHEST risk?",
          options: [
            { id: "a", text: "Market penetration" },
            { id: "b", text: "Product development" },
            { id: "c", text: "Market development" },
            { id: "d", text: "Diversification" }
          ],
          correctOptionId: "d",
          explanation: "Diversification (new products + new markets) carries the highest risk because the firm has no existing experience with either the product or the market."
        }
      ]
    },
    {
      id: "strategic-management-201-l06",
      title: "Market Entry & Expansion Strategies",
      type: "video",
      duration: 12,
      objectives: [
        "Compare organic growth vs. acquisitive growth",
        "Evaluate market entry modes for international expansion",
        "Assess first-mover vs. fast-follower advantages"
      ],
      chunks: [
        {
          id: "strategic-management-201-l06-c1",
          title: "Organic vs. Acquisitive Growth",
          content:
            "Organic growth builds from within — investing in R&D, hiring, and marketing to expand existing operations. It's slower but maintains culture and control. Acquisitive growth buys existing businesses for speed and scale. The choice depends on urgency, available targets, integration capability, and risk tolerance. Most successful firms use a blend of both."
        },
        {
          id: "strategic-management-201-l06-c2",
          title: "International Entry Modes",
          content:
            "Firms expanding internationally choose from a spectrum of entry modes: exporting (low risk, low control), licensing/franchising (moderate risk, shared control), joint ventures (shared investment and risk), wholly-owned subsidiaries (high control, high risk). The choice depends on: desired control level, resource commitment, risk tolerance, and local market knowledge. The Uppsala model suggests firms internationalize incrementally."
        },
        {
          id: "strategic-management-201-l06-c3",
          title: "First-Mover vs. Fast-Follower",
          content:
            "First movers gain early market share, set industry standards, and build switching costs. But they also bear pioneering costs, face technology uncertainty, and may be leapfrogged by later entrants. Fast followers learn from first-movers' mistakes, benefit from reduced uncertainty, and can imitate at lower cost. Google wasn't the first search engine, nor was Facebook the first social network — both were fast followers who executed better."
        }
      ],
      flashcards: [
        { id: "strategic-management-201-l06-f1", front: "Organic vs. acquisitive growth", back: "Organic: build from within (slower, maintains culture). Acquisitive: buy existing businesses (faster, integration risk)" },
        { id: "strategic-management-201-l06-f2", front: "Uppsala internationalization model", back: "Firms expand internationally in incremental steps — starting with psychically close markets and low-commitment modes, gradually increasing commitment" },
        { id: "strategic-management-201-l06-f3", front: "First-mover advantage", back: "Early entry benefits (market share, standards, switching costs) but carries pioneering costs and technology uncertainty" }
      ]
    },
    {
      id: "strategic-management-201-l07",
      title: "Final Assessment: Corporate & Business Strategy",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "strategic-management-201-l07-q1",
          text: "Berkshire Hathaway owning insurance, railroads, and candy companies is an example of:",
          options: [
            { id: "a", text: "Related diversification" },
            { id: "b", text: "Unrelated diversification" },
            { id: "c", text: "Vertical integration" },
            { id: "d", text: "Market development" }
          ],
          correctOptionId: "b",
          explanation: "These businesses have no strategic fit — Berkshire uses superior capital allocation (financial logic) rather than operational synergies, making this unrelated diversification."
        },
        {
          id: "strategic-management-201-l07-q2",
          text: "Which M&A synergy type involves eliminating duplicate back-office functions?",
          options: [
            { id: "a", text: "Revenue synergy" },
            { id: "b", text: "Cost synergy" },
            { id: "c", text: "Financial synergy" },
            { id: "d", text: "Strategic synergy" }
          ],
          correctOptionId: "b",
          explanation: "Eliminating duplicate functions (HR departments, IT systems, office space) reduces costs — this is a cost synergy."
        },
        {
          id: "strategic-management-201-l07-q3",
          text: "A franchising agreement for international expansion represents:",
          options: [
            { id: "a", text: "High control, high risk" },
            { id: "b", text: "Moderate control, moderate risk" },
            { id: "c", text: "Low control, low risk" },
            { id: "d", text: "High control, low risk" }
          ],
          correctOptionId: "b",
          explanation: "Franchising shares control and risk between franchisor and franchisee — it's a middle-ground entry mode between exporting (low) and wholly-owned subsidiaries (high)."
        }
      ]
    }
  ],
};
