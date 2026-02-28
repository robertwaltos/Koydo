import type { LearningModule } from "@/lib/modules/types";

export const SupplyChainManagement201Module: LearningModule = {
  id: "supply-chain-management-201",
  title: "Procurement & Supplier Management",
  description:
    "Master the strategic sourcing process, supplier evaluation frameworks, and relationship management techniques. Learn to apply the Kraljic matrix, calculate total cost of ownership, and build ethical, sustainable procurement strategies.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "supply-chain"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "intermediate",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Explain the strategic sourcing methodology and its phases",
    "Evaluate and select suppliers using weighted scoring models",
    "Apply the Kraljic matrix to categorize procurement items",
    "Calculate total cost of ownership beyond purchase price",
    "Describe key elements of effective contract management",
    "Distinguish transactional from strategic supplier relationships",
    "Assess ethical and sustainability considerations in sourcing decisions"
  ],
  lessons: [
    {
      id: "supply-chain-management-201-l01",
      title: "Strategic Sourcing Methodology",
      type: "video",
      duration: 13,
      objectives: [
        "Define strategic sourcing and how it differs from purchasing",
        "Outline the seven-step strategic sourcing process",
        "Explain the importance of spend analysis"
      ],
      chunks: [
        {
          id: "supply-chain-management-201-l01-c1",
          title: "From Purchasing to Strategic Sourcing",
          content:
            "Traditional purchasing is transactional — finding the lowest price for a given specification. Strategic sourcing is a systematic, data-driven process that continuously evaluates and improves the supply base to align procurement with business strategy. It shifts the focus from unit price to total value: quality, reliability, innovation capability, and risk mitigation. Companies that adopt strategic sourcing typically reduce procurement costs by 10–25%."
        },
        {
          id: "supply-chain-management-201-l01-c2",
          title: "The Seven-Step Process",
          content:
            "Strategic sourcing follows seven steps: (1) Profile the category — understand spend, specifications, and stakeholders. (2) Assess the supply market — map suppliers, trends, and risks. (3) Develop a sourcing strategy — decide single vs. multi-source, domestic vs. global. (4) Screen and qualify suppliers. (5) Conduct competitive bidding (RFP/RFQ). (6) Negotiate and select suppliers. (7) Implement and manage the relationship. Each step builds on the previous one."
        },
        {
          id: "supply-chain-management-201-l01-c3",
          title: "Spend Analysis",
          content:
            "Spend analysis is the foundation of strategic sourcing. It involves collecting, cleansing, classifying, and analyzing expenditure data to answer: What are we buying? From whom? At what price? How often? Pareto analysis typically reveals that 20% of suppliers account for 80% of spend. This insight allows procurement teams to prioritize categories for strategic attention and identify consolidation, standardization, and savings opportunities."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-201-l01-f1", front: "Strategic sourcing vs. purchasing", back: "Purchasing is transactional (lowest price); strategic sourcing is systematic, data-driven, and focused on total value — quality, reliability, innovation, and risk — typically reducing costs 10–25%" },
        { id: "supply-chain-management-201-l01-f2", front: "Seven steps of strategic sourcing", back: "Profile category → Assess supply market → Develop strategy → Screen suppliers → Competitive bidding → Negotiate and select → Implement and manage" },
        { id: "supply-chain-management-201-l01-f3", front: "Spend analysis", back: "Collecting, cleansing, classifying, and analyzing expenditure data to identify what is bought, from whom, and at what price — the foundation for prioritizing sourcing efforts" }
      ]
    },
    {
      id: "supply-chain-management-201-l02",
      title: "Supplier Evaluation & Selection",
      type: "video",
      duration: 12,
      objectives: [
        "Identify key criteria for evaluating suppliers",
        "Build a weighted scoring model for supplier selection",
        "Explain the role of supplier audits and site visits"
      ],
      chunks: [
        {
          id: "supply-chain-management-201-l02-c1",
          title: "Evaluation Criteria",
          content:
            "Supplier evaluation considers multiple dimensions: quality (defect rates, certifications like ISO 9001), cost (unit price, payment terms, volume discounts), delivery (on-time delivery rate, lead time consistency), capacity (ability to scale), financial stability (balance sheet health, credit ratings), and innovation capability (R&D investment, willingness to co-develop). The relative importance of each criterion depends on the category and business strategy."
        },
        {
          id: "supply-chain-management-201-l02-c2",
          title: "Weighted Scoring Model",
          content:
            "A weighted scoring model assigns importance weights to each criterion (summing to 100%), rates each supplier on every criterion (e.g., 1–5 scale), and calculates a weighted total score. For example, if quality has 30% weight and a supplier scores 4/5, their quality contribution is 0.30 × 4 = 1.20. The model makes subjective trade-offs explicit and defensible, and it provides a structured basis for comparing alternatives."
        },
        {
          id: "supply-chain-management-201-l02-c3",
          title: "Supplier Audits and Qualification",
          content:
            "Before awarding contracts, leading firms conduct on-site supplier audits to verify capabilities claimed in proposals. Audits assess production processes, quality systems, labor practices, environmental compliance, and financial records. A pre-qualification stage filters out suppliers that do not meet minimum thresholds before the full evaluation begins. Ongoing performance monitoring through scorecards ensures standards are maintained post-selection."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-201-l02-f1", front: "Key supplier evaluation dimensions", back: "Quality, cost, delivery, capacity, financial stability, and innovation capability — weighted differently depending on category and strategy" },
        { id: "supply-chain-management-201-l02-f2", front: "Weighted scoring model", back: "Assigns percentage weights to criteria, rates suppliers on each (e.g., 1–5), multiplies and sums for a total score — makes trade-offs explicit and comparable" },
        { id: "supply-chain-management-201-l02-f3", front: "Supplier audit", back: "On-site verification of a supplier's production processes, quality systems, labor practices, environmental compliance, and financial records before contract award" }
      ]
    },
    {
      id: "supply-chain-management-201-l03",
      title: "The Kraljic Matrix",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain the two dimensions of the Kraljic matrix",
        "Classify procurement items into four quadrants",
        "Recommend a sourcing strategy for each quadrant"
      ],
      chunks: [
        {
          id: "supply-chain-management-201-l03-c1",
          title: "The Kraljic Framework",
          content:
            "Peter Kraljic's 1983 matrix classifies procurement items along two dimensions: profit impact (how much the item affects the bottom line through cost, quality, or revenue contribution) and supply risk (how difficult the item is to source due to scarcity, few suppliers, substitution difficulty, or geopolitical factors). These two axes create four quadrants, each requiring a different procurement strategy."
        },
        {
          id: "supply-chain-management-201-l03-c2",
          title: "The Four Quadrants",
          content:
            "Non-critical items (low impact, low risk) — office supplies, standard fasteners. Simplify purchasing with automation and catalog buying. Leverage items (high impact, low risk) — commodity raw materials with many suppliers. Use competitive bidding to drive costs down. Bottleneck items (low impact, high risk) — specialized components with few suppliers. Secure supply through buffer stock and alternative development. Strategic items (high impact, high risk) — critical materials from limited sources. Build deep partnerships."
        },
        {
          id: "supply-chain-management-201-l03-c3",
          title: "Applying Kraljic to Procurement Strategy",
          content:
            "For non-critical items, automate and reduce transaction costs with e-procurement. For leverage items, aggregate volumes and negotiate aggressively. For bottleneck items, develop alternative suppliers and maintain safety stock. For strategic items, invest in long-term partnerships, joint development, and risk-sharing agreements. The matrix should be revisited regularly because items can shift quadrants as markets, technologies, and strategies evolve."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-201-l03-f1", front: "Kraljic matrix dimensions", back: "Profit impact (effect on bottom line) × Supply risk (difficulty of sourcing) — creating four quadrants for procurement strategy" },
        { id: "supply-chain-management-201-l03-f2", front: "Four Kraljic quadrants", back: "Non-critical (low/low — simplify), Leverage (high impact/low risk — compete), Bottleneck (low impact/high risk — secure supply), Strategic (high/high — partner deeply)" },
        { id: "supply-chain-management-201-l03-f3", front: "Strategy for bottleneck items", back: "Develop alternative suppliers, maintain safety stock, and reduce dependency — these items have high supply risk but lower profit impact" }
      ]
    },
    {
      id: "supply-chain-management-201-l04",
      title: "Total Cost of Ownership",
      type: "video",
      duration: 12,
      objectives: [
        "Define total cost of ownership (TCO) and its components",
        "Calculate TCO for a procurement decision",
        "Explain why the lowest purchase price often is not the lowest total cost"
      ],
      chunks: [
        {
          id: "supply-chain-management-201-l04-c1",
          title: "What Is Total Cost of Ownership?",
          content:
            "Total cost of ownership (TCO) captures all costs associated with acquiring, using, and disposing of a product or service over its entire lifecycle. It goes far beyond the purchase price to include acquisition costs (sourcing, ordering, shipping, customs), usage costs (installation, training, maintenance, energy consumption, quality losses), and end-of-life costs (disposal, recycling, environmental compliance). TCO reveals the true economic impact of sourcing decisions."
        },
        {
          id: "supply-chain-management-201-l04-c2",
          title: "Hidden Costs in Procurement",
          content:
            "Purchase price is often only 25–40% of total cost. Hidden costs include: quality failures (rework, scrap, warranty claims), delivery unreliability (expedited freight, production downtime from late deliveries), inventory carrying costs (warehousing, insurance, obsolescence for items ordered in bulk for discounts), and administrative costs (managing multiple invoices, resolving disputes). A supplier with a 5% lower price but 3× the defect rate may actually cost more."
        },
        {
          id: "supply-chain-management-201-l04-c3",
          title: "Building a TCO Model",
          content:
            "A TCO model identifies all cost elements, assigns monetary values (using actual data or estimates), and projects costs over the relevant time horizon. Steps: (1) Define the scope and time frame. (2) Identify all cost categories. (3) Gather data from accounting, operations, and quality systems. (4) Quantify each cost element. (5) Compare suppliers on total cost. The model makes cost trade-offs transparent — for example, a higher-quality supplier's premium may be offset by lower warranty and rework costs."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-201-l04-f1", front: "Total cost of ownership (TCO)", back: "All costs of acquiring, using, and disposing of a product over its lifecycle — including acquisition, usage, and end-of-life costs beyond purchase price" },
        { id: "supply-chain-management-201-l04-f2", front: "Why lowest price ≠ lowest total cost", back: "Purchase price is often only 25–40% of total cost — hidden costs from quality failures, delivery unreliability, inventory carrying, and administration can make a 'cheap' supplier the most expensive choice" },
        { id: "supply-chain-management-201-l04-f3", front: "Steps to build a TCO model", back: "Define scope/timeframe → Identify cost categories → Gather data → Quantify each element → Compare suppliers on total cost" }
      ]
    },
    {
      id: "supply-chain-management-201-l05",
      title: "Checkpoint: Procurement Strategy",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "supply-chain-management-201-l05-q1",
          text: "In the Kraljic matrix, a leverage item is characterized by:",
          options: [
            { id: "a", text: "Low profit impact and low supply risk" },
            { id: "b", text: "High profit impact and low supply risk" },
            { id: "c", text: "Low profit impact and high supply risk" },
            { id: "d", text: "High profit impact and high supply risk" }
          ],
          correctOptionId: "b",
          explanation: "Leverage items have high profit impact but low supply risk — many suppliers are available, so the buyer can use competitive bidding to drive costs down."
        },
        {
          id: "supply-chain-management-201-l05-q2",
          text: "Which of the following is NOT typically included in total cost of ownership?",
          options: [
            { id: "a", text: "Purchase price" },
            { id: "b", text: "Maintenance and repair costs" },
            { id: "c", text: "Competitor's profit margins" },
            { id: "d", text: "Disposal and recycling costs" }
          ],
          correctOptionId: "c",
          explanation: "TCO includes all costs the buyer incurs — acquisition, usage, and end-of-life. A competitor's profit margins are external and irrelevant to the buyer's total cost of ownership."
        },
        {
          id: "supply-chain-management-201-l05-q3",
          text: "The first step in strategic sourcing is to:",
          options: [
            { id: "a", text: "Negotiate with suppliers" },
            { id: "b", text: "Profile the category and analyze spend" },
            { id: "c", text: "Issue a request for proposal" },
            { id: "d", text: "Sign the contract" }
          ],
          correctOptionId: "b",
          explanation: "Strategic sourcing begins with profiling the category — understanding what is being spent, with whom, and why — before developing a strategy or engaging suppliers."
        },
        {
          id: "supply-chain-management-201-l05-q4",
          text: "A weighted scoring model for supplier selection is useful because it:",
          options: [
            { id: "a", text: "Eliminates the need for supplier audits" },
            { id: "b", text: "Always selects the cheapest supplier" },
            { id: "c", text: "Makes subjective trade-offs explicit and enables structured comparison" },
            { id: "d", text: "Guarantees that the selected supplier will perform well" }
          ],
          correctOptionId: "c",
          explanation: "The weighted scoring model does not guarantee performance or eliminate audits — its value is making trade-offs transparent by assigning explicit weights and scores to multiple criteria."
        }
      ]
    },
    {
      id: "supply-chain-management-201-l06",
      title: "Contract & Supplier Relationship Management",
      type: "video",
      duration: 13,
      objectives: [
        "Identify essential elements of a procurement contract",
        "Distinguish between arm's-length and partnership relationships",
        "Explain how supplier relationship management creates value"
      ],
      chunks: [
        {
          id: "supply-chain-management-201-l06-c1",
          title: "Procurement Contract Essentials",
          content:
            "A well-structured procurement contract specifies: scope and specifications (what is being purchased), pricing and payment terms (unit costs, escalation clauses, discounts), delivery requirements (schedules, Incoterms, penalties for late delivery), quality standards (acceptance criteria, inspection rights, warranty), intellectual property rights, confidentiality clauses, termination conditions, and dispute resolution mechanisms. Contracts must balance protecting the buyer with maintaining a workable relationship."
        },
        {
          id: "supply-chain-management-201-l06-c2",
          title: "Arm's-Length vs. Partnership Relationships",
          content:
            "Arm's-length relationships are transactional — focused on price, governed by short-term contracts, with minimal information sharing. They suit non-critical and leverage items. Partnership relationships involve long-term commitment, shared goals, joint problem-solving, and deep information exchange. They suit strategic and bottleneck items. The spectrum ranges from spot buying (most transactional) through preferred suppliers to strategic alliances and joint ventures (most collaborative)."
        },
        {
          id: "supply-chain-management-201-l06-c3",
          title: "Supplier Relationship Management (SRM)",
          content:
            "SRM is the systematic approach to evaluating and managing supplier interactions to maximize value. Key practices include regular performance reviews using scorecards, joint improvement initiatives (such as lean projects at supplier facilities), executive-level relationship governance, early supplier involvement in product design, and innovation days where suppliers present new technologies. Companies with mature SRM programs report 5–15% cost savings and measurably faster innovation cycles."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-201-l06-f1", front: "Key elements of a procurement contract", back: "Scope, pricing/payment terms, delivery requirements, quality standards, IP rights, confidentiality, termination conditions, and dispute resolution" },
        { id: "supply-chain-management-201-l06-f2", front: "Arm's-length vs. partnership supplier relationships", back: "Arm's-length: transactional, price-focused, short-term. Partnership: long-term commitment, shared goals, joint problem-solving — suited for strategic/bottleneck items" },
        { id: "supply-chain-management-201-l06-f3", front: "Supplier relationship management (SRM)", back: "Systematic approach to evaluating and managing supplier interactions — includes scorecards, joint improvement, executive governance, and early supplier involvement in design" }
      ]
    },
    {
      id: "supply-chain-management-201-l07",
      title: "Final Assessment: Procurement & Supplier Management",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "supply-chain-management-201-l07-q1",
          text: "A company discovers that a supplier with the lowest unit price has the highest defect rate and most delivery delays. This situation best illustrates the importance of:",
          options: [
            { id: "a", text: "Competitive bidding" },
            { id: "b", text: "Total cost of ownership analysis" },
            { id: "c", text: "The Kraljic matrix" },
            { id: "d", text: "Spend analysis" }
          ],
          correctOptionId: "b",
          explanation: "TCO reveals that the lowest purchase price does not equal the lowest total cost — quality failures and delivery problems add hidden costs that outweigh the unit price savings."
        },
        {
          id: "supply-chain-management-201-l07-q2",
          text: "For a strategic item in the Kraljic matrix, the recommended approach is to:",
          options: [
            { id: "a", text: "Automate purchasing with e-procurement catalogs" },
            { id: "b", text: "Use aggressive competitive bidding among many suppliers" },
            { id: "c", text: "Build deep, long-term partnerships with risk-sharing" },
            { id: "d", text: "Maintain minimal inventory to reduce costs" }
          ],
          correctOptionId: "c",
          explanation: "Strategic items have both high profit impact and high supply risk. The appropriate strategy is deep partnerships with shared risk, joint development, and long-term collaboration."
        },
        {
          id: "supply-chain-management-201-l07-q3",
          text: "Ethical sourcing practices in procurement include all of the following EXCEPT:",
          options: [
            { id: "a", text: "Verifying suppliers comply with labor laws" },
            { id: "b", text: "Prioritizing the lowest possible price above all other factors" },
            { id: "c", text: "Assessing environmental impact of supply operations" },
            { id: "d", text: "Ensuring transparency in the sourcing process" }
          ],
          correctOptionId: "b",
          explanation: "Ethical sourcing considers labor practices, environmental impact, and transparency — not just the lowest price. A price-only focus can incentivize suppliers to cut corners on worker welfare and environmental standards."
        },
        {
          id: "supply-chain-management-201-l07-q4",
          text: "Spend analysis typically reveals that approximately what percentage of suppliers account for 80% of procurement spend?",
          options: [
            { id: "a", text: "5%" },
            { id: "b", text: "20%" },
            { id: "c", text: "50%" },
            { id: "d", text: "80%" }
          ],
          correctOptionId: "b",
          explanation: "Pareto analysis (the 80/20 rule) typically shows that about 20% of suppliers account for 80% of total spend, helping procurement teams prioritize where to focus strategic efforts."
        }
      ]
    }
  ],
};
