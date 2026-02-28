import type { LearningModule } from "@/lib/modules/types";

export const StrategicManagement401Module: LearningModule = {
  id: "strategic-management-401",
  title: "Global Strategy & Strategic Leadership",
  description:
    "Master the highest level of strategic thinking. Navigate global competitive dynamics, lead strategic transformation, govern corporate boards, manage stakeholder ecosystems, and craft strategies for emerging markets and digital disruption.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "strategy", "leadership", "global"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Analyze global competitive dynamics using Ghemawat's CAGE framework",
    "Design strategies for emerging and developing markets",
    "Lead strategic transformation and organizational change",
    "Apply stakeholder theory to corporate governance decisions",
    "Evaluate corporate social responsibility as a strategic tool",
    "Synthesize multiple frameworks into coherent strategic recommendations",
    "Develop a strategic leadership mindset for complex environments"
  ],
  lessons: [
    {
      id: "strategic-management-401-l01",
      title: "Global Competitive Dynamics",
      type: "video",
      duration: 14,
      objectives: [
        "Apply the CAGE distance framework to international strategy",
        "Evaluate global integration vs. local responsiveness",
        "Design entry strategies for diverse institutional environments"
      ],
      chunks: [
        {
          id: "strategic-management-401-l01-c1",
          title: "The CAGE Distance Framework",
          content:
            "Pankaj Ghemawat's CAGE framework identifies four types of distance between countries that affect international business: Cultural (language, norms, values), Administrative (political systems, regulations, colonial ties), Geographic (physical distance, time zones, borders), and Economic (income levels, infrastructure, cost of labor). Greater distance on any dimension reduces trade and investment flows. A company entering Japan from France faces high cultural and geographic distance but relatively low economic distance."
        },
        {
          id: "strategic-management-401-l01-c2",
          title: "Integration-Responsiveness Framework",
          content:
            "Bartlett and Ghoshal's framework maps two pressures: global integration (standardizing products and processes for efficiency) vs. local responsiveness (adapting to local tastes and regulations). Four strategies emerge: Global (high integration, low responsiveness — Intel), Multidomestic (low integration, high responsiveness — Nestlé food products), Transnational (high both — Unilever's glocal approach), and International (low both — early exporters). The optimal position depends on industry characteristics and competitive dynamics."
        },
        {
          id: "strategic-management-401-l01-c3",
          title: "Institutional Voids",
          content:
            "In emerging markets, institutions that facilitate business in developed economies may be absent: reliable legal systems, credit reporting agencies, talent intermediaries, or distribution networks. Khanna and Palepu call these 'institutional voids.' Successful firms fill these voids strategically — Tata Group built its own management training institutes in India; Alibaba created Alipay because China lacked online payment infrastructure. Understanding institutional voids is crucial for emerging market strategy."
        }
      ],
      flashcards: [
        { id: "strategic-management-401-l01-f1", front: "CAGE distance framework", back: "Cultural, Administrative, Geographic, Economic — four dimensions of distance between countries that affect international business success" },
        { id: "strategic-management-401-l01-f2", front: "Transnational strategy", back: "Simultaneously pursuing high global integration (efficiency) and high local responsiveness (adaptation) — the most challenging but often most effective international approach" },
        { id: "strategic-management-401-l01-f3", front: "Institutional voids", back: "Absence of market-facilitating institutions in emerging economies (legal systems, intermediaries, infrastructure) — strategic firms fill these voids to create advantage" }
      ]
    },
    {
      id: "strategic-management-401-l02",
      title: "Strategic Leadership & Governance",
      type: "video",
      duration: 13,
      objectives: [
        "Define the role of strategic leaders in shaping organizational direction",
        "Evaluate board governance structures and their effectiveness",
        "Apply agency theory to executive compensation design"
      ],
      chunks: [
        {
          id: "strategic-management-401-l02-c1",
          title: "The Strategic Leader's Role",
          content:
            "Strategic leaders shape the direction of the organization through three mechanisms: setting the strategic direction (vision, values, and major strategic choices), designing the organizational architecture (structure, systems, and culture), and allocating resources across competing priorities. Upper echelons theory suggests that a CEO's cognitive base and values filter how they interpret strategic situations — meaning leadership quality profoundly affects strategic outcomes."
        },
        {
          id: "strategic-management-401-l02-c2",
          title: "Corporate Governance",
          content:
            "Corporate governance is the system of rules, practices, and processes by which a company is directed and controlled. The board of directors represents shareholders' interests and oversees management. Key governance mechanisms include: board composition (independent vs. inside directors), CEO duality (should the CEO also chair the board?), audit committees, executive compensation design, and shareholder rights. Poor governance contributed to scandals at Enron, WorldCom, and more recently Wirecard."
        },
        {
          id: "strategic-management-401-l02-c3",
          title: "Agency Theory & Incentive Alignment",
          content:
            "Agency theory examines the relationship between principals (shareholders) and agents (managers). The core problem: managers may pursue their own interests (empire building, risk aversion, perks) at shareholders' expense. Solutions include: performance-based pay (stock options, bonuses tied to metrics), board oversight, market discipline (hostile takeovers), and transparent reporting. But poorly designed incentives can backfire — Enron's stock-based compensation encouraged short-term manipulation."
        }
      ],
      flashcards: [
        { id: "strategic-management-401-l02-f1", front: "Upper echelons theory", back: "A CEO's cognitive base, values, and experiences filter strategic interpretation — leadership quality profoundly shapes strategic outcomes" },
        { id: "strategic-management-401-l02-f2", front: "Agency problem", back: "Managers (agents) may pursue self-interest rather than shareholder (principal) interests — solved through incentive alignment, oversight, and governance" },
        { id: "strategic-management-401-l02-f3", front: "CEO duality", back: "When the CEO also serves as board chair — criticized for reducing board independence but defended for unity of command" }
      ]
    },
    {
      id: "strategic-management-401-l03",
      title: "Stakeholder Strategy & CSR",
      type: "interactive",
      duration: 14,
      objectives: [
        "Apply stakeholder mapping to real organizations",
        "Evaluate CSR as a strategic competitive tool",
        "Design shared value strategies following Porter and Kramer"
      ],
      chunks: [
        {
          id: "strategic-management-401-l03-c1",
          title: "Stakeholder Theory",
          content:
            "R. Edward Freeman's stakeholder theory argues that firms should create value for all stakeholders — not just shareholders. Stakeholders include employees, customers, suppliers, communities, governments, and the environment. Stakeholder mapping classifies groups by their power to influence the firm and the legitimacy and urgency of their claims. The key insight: firms that balance stakeholder interests outperform those that focus solely on shareholder returns over the long term."
        },
        {
          id: "strategic-management-401-l03-c2",
          title: "Creating Shared Value",
          content:
            "Porter and Kramer introduced the concept of 'creating shared value' (CSV) — generating economic value in a way that also produces value for society. Unlike traditional CSR (philanthropy, compliance), CSV integrates social impact into core business strategy. Examples: Nestlé helping cocoa farmers improve yields (securing supply while improving livelihoods), Toyota developing hybrid vehicles (addressing emissions while capturing market share), and Unilever's sustainable sourcing reducing costs and environmental impact."
        },
        {
          id: "strategic-management-401-l03-c3",
          title: "ESG & Strategic Risk",
          content:
            "Environmental, Social, and Governance (ESG) factors are increasingly material to firm value. Climate risk affects physical assets and supply chains. Social factors (labor practices, diversity, community impact) affect brand value and talent attraction. Governance quality predicts management integrity. Investors managing over $100 trillion now incorporate ESG criteria. Firms that ignore ESG face regulatory risk, reputational damage, and capital access restrictions. ESG is no longer optional — it's a strategic imperative."
        }
      ],
      flashcards: [
        { id: "strategic-management-401-l03-f1", front: "Stakeholder theory", back: "Firms should create value for all stakeholders (employees, customers, suppliers, communities) — not just shareholders — for long-term success" },
        { id: "strategic-management-401-l03-f2", front: "Creating Shared Value (CSV)", back: "Generating economic value while also producing societal value — integrating social impact into core business strategy (Porter & Kramer)" },
        { id: "strategic-management-401-l03-f3", front: "ESG factors", back: "Environmental, Social, and Governance criteria — increasingly material to firm value, investor decisions, and regulatory compliance" }
      ]
    },
    {
      id: "strategic-management-401-l04",
      title: "Checkpoint: Global Strategy & Leadership",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "strategic-management-401-l04-q1",
          text: "Alibaba creating Alipay because China lacked online payment infrastructure is an example of:",
          options: [
            { id: "a", text: "Blue Ocean Strategy" },
            { id: "b", text: "Filling an institutional void" },
            { id: "c", text: "Vertical integration" },
            { id: "d", text: "Related diversification" }
          ],
          correctOptionId: "b",
          explanation: "Alibaba strategically filled an institutional void — a missing market-facilitating institution (online payments) in China's emerging economy."
        },
        {
          id: "strategic-management-401-l04-q2",
          text: "In the integration-responsiveness framework, Unilever adapting products to local tastes while maintaining global efficiency represents:",
          options: [
            { id: "a", text: "Global strategy" },
            { id: "b", text: "Multidomestic strategy" },
            { id: "c", text: "Transnational strategy" },
            { id: "d", text: "International strategy" }
          ],
          correctOptionId: "c",
          explanation: "Transnational strategy simultaneously pursues high global integration and high local responsiveness — the most challenging but potentially most effective approach."
        },
        {
          id: "strategic-management-401-l04-q3",
          text: "According to agency theory, stock options for executives are designed to:",
          options: [
            { id: "a", text: "Reduce employee turnover" },
            { id: "b", text: "Align manager interests with shareholder interests" },
            { id: "c", text: "Satisfy government regulations" },
            { id: "d", text: "Increase corporate social responsibility" }
          ],
          correctOptionId: "b",
          explanation: "Stock options address the agency problem by making managers partial owners — aligning their financial interests with shareholders' desire for stock price appreciation."
        }
      ]
    },
    {
      id: "strategic-management-401-l05",
      title: "Strategic Transformation & Change",
      type: "video",
      duration: 13,
      objectives: [
        "Apply Kotter's 8-step change model to strategic transformation",
        "Identify sources of resistance and how to overcome them",
        "Evaluate turnaround strategies for failing businesses"
      ],
      chunks: [
        {
          id: "strategic-management-401-l05-c1",
          title: "Kotter's Change Model",
          content:
            "John Kotter identified eight steps for successful organizational transformation: (1) Establish urgency — identify threats and opportunities. (2) Build a guiding coalition — assemble a team with power to lead change. (3) Create a vision — develop a clear strategic vision and strategies to achieve it. (4) Communicate the vision — use every vehicle possible. (5) Empower broad-based action — remove obstacles. (6) Generate short-term wins — plan and create visible improvements. (7) Consolidate gains — use credibility to change systems and policies. (8) Anchor new approaches in culture — embed changes in organizational DNA."
        },
        {
          id: "strategic-management-401-l05-c2",
          title: "Overcoming Resistance",
          content:
            "Resistance to strategic change is natural and predictable. Sources include: fear of the unknown, loss of status or control, disruption of routines, perceived threats to job security, and cognitive inertia. Effective strategies to overcome resistance: early involvement of affected stakeholders, transparent communication about the reasons for change, addressing emotional concerns (not just rational ones), providing training and support, and celebrating early wins that build confidence."
        },
        {
          id: "strategic-management-401-l05-c3",
          title: "Corporate Turnaround Strategy",
          content:
            "When a firm faces decline, turnaround strategies follow two phases. The retrenchment phase stabilizes the firm: cutting costs, divesting underperforming units, reducing headcount, and generating cash. The recovery phase repositions the firm for growth: investing in competitive strengths, entering attractive markets, and rebuilding organizational capabilities. Successful turnarounds (Apple under Steve Jobs, LEGO after 2003, Marvel pre-Disney acquisition) combine decisive cost action with a compelling strategic vision."
        }
      ],
      flashcards: [
        { id: "strategic-management-401-l05-f1", front: "Kotter's 8-step change model", back: "Urgency → Guiding coalition → Vision → Communicate → Empower action → Short-term wins → Consolidate → Anchor in culture" },
        { id: "strategic-management-401-l05-f2", front: "Sources of resistance to change", back: "Fear of unknown, loss of status/control, routine disruption, job security threats, and cognitive inertia" },
        { id: "strategic-management-401-l05-f3", front: "Turnaround strategy phases", back: "Retrenchment (stabilize: cut costs, divest, generate cash) → Recovery (reposition: invest in strengths, enter attractive markets)" }
      ]
    },
    {
      id: "strategic-management-401-l06",
      title: "Strategy Capstone: Case Analysis Framework",
      type: "interactive",
      duration: 15,
      objectives: [
        "Apply a structured framework to analyze business strategy cases",
        "Synthesize multiple strategic tools into recommendations",
        "Defend strategic choices with evidence-based reasoning"
      ],
      chunks: [
        {
          id: "strategic-management-401-l06-c1",
          title: "The Case Analysis Method",
          content:
            "MBA strategy cases are analyzed systematically: (1) Identify the key strategic issue — what decision must be made? (2) Conduct external analysis (Five Forces + PESTEL). (3) Conduct internal analysis (VRIN resources + value chain). (4) Evaluate the current strategy — is it working? Why or why not? (5) Generate strategic alternatives using frameworks (TOWS, Ansoff, generic strategies). (6) Evaluate alternatives against criteria (feasibility, suitability, acceptability). (7) Recommend and justify your chosen strategy."
        },
        {
          id: "strategic-management-401-l06-c2",
          title: "Integrating Multiple Frameworks",
          content:
            "No single framework tells the whole story. Effective strategic analysis layers multiple perspectives: use Five Forces for industry context, VRIN for internal resources, the value chain for activities, and dynamic capabilities for adaptability. The art of strategy is synthesis — connecting insights from different frameworks into a coherent narrative about where the firm is, where it should go, and how it should get there. Contradictions between frameworks often reveal the most important strategic tensions."
        },
        {
          id: "strategic-management-401-l06-c3",
          title: "Evidence-Based Recommendations",
          content:
            "Strong strategic recommendations share common traits: they are specific (not vague platitudes), actionable (with concrete steps), prioritized (what to do first, second, third), resourced (identifying required investments), and time-bound (with milestones). Every recommendation should be backed by analysis — 'We should pursue differentiation because Five Forces shows intense price competition, and our VRIN analysis reveals unique design capabilities that competitors cannot replicate.' Always consider implementation risks and contingency plans."
        }
      ],
      flashcards: [
        { id: "strategic-management-401-l06-f1", front: "7 steps of case analysis", back: "Key issue → External analysis → Internal analysis → Evaluate current strategy → Generate alternatives → Evaluate alternatives → Recommend and justify" },
        { id: "strategic-management-401-l06-f2", front: "Criteria for evaluating strategic alternatives", back: "Feasibility (can we do it?), Suitability (does it address the issue?), Acceptability (will stakeholders support it?)" },
        { id: "strategic-management-401-l06-f3", front: "Strong strategic recommendations are...", back: "Specific, actionable, prioritized, resourced, time-bound, and backed by analysis from multiple frameworks" }
      ]
    },
    {
      id: "strategic-management-401-l07",
      title: "Final Assessment: Global Strategy & Strategic Leadership",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "strategic-management-401-l07-q1",
          text: "Porter and Kramer's 'Creating Shared Value' differs from traditional CSR because it:",
          options: [
            { id: "a", text: "Focuses solely on philanthropy and donations" },
            { id: "b", text: "Integrates social impact into core business strategy for mutual benefit" },
            { id: "c", text: "Prioritizes shareholder value above all else" },
            { id: "d", text: "Is voluntary and unrelated to competitive advantage" }
          ],
          correctOptionId: "b",
          explanation: "CSV integrates social value creation into the company's core profit-generating activities — unlike traditional CSR which treats social responsibility as separate from business strategy."
        },
        {
          id: "strategic-management-401-l07-q2",
          text: "Which step in Kotter's model addresses the risk of declaring victory too soon?",
          options: [
            { id: "a", text: "Generate short-term wins" },
            { id: "b", text: "Consolidate gains and produce more change" },
            { id: "c", text: "Establish urgency" },
            { id: "d", text: "Build a guiding coalition" }
          ],
          correctOptionId: "b",
          explanation: "Step 7 — Consolidate gains — uses the credibility from early wins to tackle bigger problems. Declaring victory too soon is one of Kotter's most common change failure modes."
        },
        {
          id: "strategic-management-401-l07-q3",
          text: "The CAGE framework's 'A' dimension — Administrative distance — includes:",
          options: [
            { id: "a", text: "Language and religion differences" },
            { id: "b", text: "Physical distance and climate" },
            { id: "c", text: "Political systems, regulations, and colonial ties" },
            { id: "d", text: "Income levels and cost of labor" }
          ],
          correctOptionId: "c",
          explanation: "Administrative distance encompasses governmental and institutional factors: political systems, trade policies, regulatory frameworks, and historical colonial relationships that affect business interactions."
        },
        {
          id: "strategic-management-401-l07-q4",
          text: "A successful corporate turnaround typically follows which sequence?",
          options: [
            { id: "a", text: "Growth investment → cost cutting → restructuring" },
            { id: "b", text: "Retrenchment (stabilize) → Recovery (reposition for growth)" },
            { id: "c", text: "Vision → Hiring → Expansion" },
            { id: "d", text: "Diversification → Integration → Divestiture" }
          ],
          correctOptionId: "b",
          explanation: "Turnarounds require first stabilizing the firm through retrenchment (cost cuts, divestitures, cash generation), then repositioning for growth through recovery strategies."
        }
      ]
    }
  ],
};
