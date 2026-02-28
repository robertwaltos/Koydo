import type { LearningModule } from "@/lib/modules/types";

export const SupplyChainManagement101Module: LearningModule = {
  id: "supply-chain-management-101",
  title: "Supply Chain Fundamentals",
  description:
    "Understand how products move from raw materials to end consumers. Master the SCOR model, key supply chain metrics, and the critical role of information flow in designing efficient, responsive supply chains.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "supply-chain"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define supply chain management and its strategic importance",
    "Map the end-to-end supply chain from supplier to consumer",
    "Distinguish between supply chain management and logistics",
    "Explain the five SCOR model processes: Plan, Source, Make, Deliver, Return",
    "Calculate and interpret key supply chain metrics",
    "Describe how information flow improves supply chain performance",
    "Identify the bullwhip effect and strategies to mitigate it"
  ],
  lessons: [
    {
      id: "supply-chain-management-101-l01",
      title: "What Is Supply Chain Management?",
      type: "video",
      duration: 12,
      objectives: [
        "Define supply chain management in modern business",
        "Explain why supply chains matter for competitive advantage",
        "Identify the main participants in a supply chain"
      ],
      chunks: [
        {
          id: "supply-chain-management-101-l01-c1",
          title: "Defining Supply Chain Management",
          content:
            "Supply chain management (SCM) is the coordination of all activities involved in sourcing, procurement, production, and delivery of products from raw material origin to final consumer. It spans multiple organizations — suppliers, manufacturers, distributors, retailers, and customers — working together to satisfy end-customer demand. SCM is not a single function but an integrative discipline that links business processes across the entire value network."
        },
        {
          id: "supply-chain-management-101-l01-c2",
          title: "Why Supply Chains Matter",
          content:
            "Supply chains account for 60–70% of total product cost in most industries. Companies like Amazon, Zara, and Toyota have turned supply chain excellence into a decisive competitive weapon. A well-managed supply chain reduces costs, improves speed to market, enhances quality, and increases customer satisfaction. Conversely, supply chain failures — stockouts, delays, quality defects — directly erode revenue and brand trust."
        },
        {
          id: "supply-chain-management-101-l01-c3",
          title: "Key Participants in a Supply Chain",
          content:
            "Every supply chain involves upstream and downstream participants. Upstream includes raw material suppliers, component manufacturers, and sub-assemblers. The focal company performs core transformation. Downstream includes distributors, wholesalers, retailers, and end consumers. Supporting players — logistics providers, financial institutions, technology vendors — enable the flow of goods, information, and funds across the network."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-101-l01-f1", front: "Supply chain management (SCM)", back: "The coordination of sourcing, procurement, production, and delivery activities across multiple organizations from raw materials to the final consumer" },
        { id: "supply-chain-management-101-l01-f2", front: "Why do supply chains matter competitively?", back: "They account for 60–70% of total product cost and directly impact speed, quality, cost, and customer satisfaction — making them a key source of competitive advantage" },
        { id: "supply-chain-management-101-l01-f3", front: "Upstream vs. downstream supply chain", back: "Upstream: suppliers, component makers, sub-assemblers (toward raw materials). Downstream: distributors, retailers, consumers (toward the end customer)" }
      ]
    },
    {
      id: "supply-chain-management-101-l02",
      title: "The End-to-End Supply Chain",
      type: "video",
      duration: 11,
      objectives: [
        "Trace the journey of a product from raw material to consumer",
        "Identify the three main flows in a supply chain",
        "Explain the concept of supply chain tiers"
      ],
      chunks: [
        {
          id: "supply-chain-management-101-l02-c1",
          title: "Product Journey: Raw Material to Consumer",
          content:
            "Consider a smartphone: lithium is mined in Australia, refined into battery cells in China, assembled with chips from Taiwan and glass from Japan into a phone in Vietnam, shipped to distribution centers worldwide, and sold through retail stores or e-commerce. Each handoff adds value but also introduces cost, time, and risk. Understanding this journey reveals optimization opportunities at every stage."
        },
        {
          id: "supply-chain-management-101-l02-c2",
          title: "Three Flows in a Supply Chain",
          content:
            "Supply chains manage three critical flows: (1) Product flow — the physical movement of goods from suppliers through production to customers. (2) Information flow — demand forecasts, order status, inventory levels, and shipment tracking that move bidirectionally. (3) Financial flow — payments, credit terms, invoicing, and cost data. Optimizing all three flows simultaneously is the hallmark of supply chain excellence."
        },
        {
          id: "supply-chain-management-101-l02-c3",
          title: "Supply Chain Tiers",
          content:
            "Supply chains are structured in tiers. Tier 1 suppliers sell directly to the focal company. Tier 2 suppliers provide materials to Tier 1. This can extend to Tier 3 and beyond. Similarly, Tier 1 customers buy directly (distributors), while Tier 2 customers are further downstream (retailers). Most companies have limited visibility beyond Tier 1, which creates risk — disruptions at Tier 3 can cascade through the entire chain."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-101-l02-f1", front: "Three flows in a supply chain", back: "Product flow (physical goods), Information flow (data and forecasts, bidirectional), Financial flow (payments, credit, invoicing)" },
        { id: "supply-chain-management-101-l02-f2", front: "Supply chain tiers", back: "Tier 1 suppliers deal directly with the focal company; Tier 2 supply to Tier 1; Tier 3 supply to Tier 2 — visibility typically drops beyond Tier 1" },
        { id: "supply-chain-management-101-l02-f3", front: "Why is end-to-end visibility important?", back: "Disruptions at any tier can cascade through the entire chain — limited visibility beyond Tier 1 creates hidden risks and missed optimization opportunities" }
      ]
    },
    {
      id: "supply-chain-management-101-l03",
      title: "Supply Chain vs. Logistics",
      type: "interactive",
      duration: 10,
      objectives: [
        "Define logistics and its core functions",
        "Explain how logistics fits within the broader supply chain",
        "Distinguish between inbound, outbound, and reverse logistics"
      ],
      chunks: [
        {
          id: "supply-chain-management-101-l03-c1",
          title: "Logistics Defined",
          content:
            "Logistics is the planning, execution, and control of the movement and storage of goods, services, and related information from point of origin to point of consumption. It focuses on transportation, warehousing, inventory management, order fulfillment, and materials handling. Logistics is a critical subset of supply chain management, but it is not the whole picture."
        },
        {
          id: "supply-chain-management-101-l03-c2",
          title: "Supply Chain Management Is Broader",
          content:
            "While logistics handles physical movement and storage, supply chain management also encompasses strategic sourcing, supplier relationship management, demand planning, product design for manufacturability, and cross-organizational collaboration. SCM takes a systems-level view, optimizing across all partner organizations rather than within a single function. Think of logistics as 'how we move things' and SCM as 'how the entire network creates value.'"
        },
        {
          id: "supply-chain-management-101-l03-c3",
          title: "Types of Logistics",
          content:
            "Inbound logistics moves raw materials and components from suppliers to the manufacturer. Outbound logistics delivers finished goods from the manufacturer to customers. Reverse logistics handles returns, recalls, recycling, and disposal — flowing products backward through the chain. Each type requires different capabilities and has distinct cost drivers. Reverse logistics is often overlooked but can represent 5–10% of total supply chain cost."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-101-l03-f1", front: "Logistics", back: "The planning, execution, and control of the movement and storage of goods, services, and information from origin to consumption" },
        { id: "supply-chain-management-101-l03-f2", front: "How does SCM differ from logistics?", back: "SCM is broader — it includes strategic sourcing, demand planning, supplier relationships, and cross-organizational optimization, while logistics focuses on movement and storage" },
        { id: "supply-chain-management-101-l03-f3", front: "Three types of logistics", back: "Inbound (materials to manufacturer), Outbound (finished goods to customer), Reverse (returns, recycling, disposal — flowing backward through the chain)" }
      ]
    },
    {
      id: "supply-chain-management-101-l04",
      title: "The SCOR Model",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the five processes of the SCOR model",
        "Describe how Plan integrates the other four processes",
        "Apply SCOR to benchmark supply chain performance"
      ],
      chunks: [
        {
          id: "supply-chain-management-101-l04-c1",
          title: "Overview of the SCOR Model",
          content:
            "The Supply Chain Operations Reference (SCOR) model, developed by the Supply Chain Council (now ASCM), provides a standardized framework for describing, measuring, and improving supply chain processes. It defines five core processes: Plan, Source, Make, Deliver, and Return. SCOR enables companies to benchmark against industry peers, identify performance gaps, and implement best practices using a common vocabulary."
        },
        {
          id: "supply-chain-management-101-l04-c2",
          title: "Plan, Source, and Make",
          content:
            "Plan encompasses demand forecasting, supply planning, inventory strategy, and capacity planning — it orchestrates all other processes. Source covers supplier identification, qualification, purchasing, and receiving of materials. Make includes all production activities: manufacturing, assembly, testing, packaging, and quality control. Each process has sub-levels detailing specific workflows, inputs, outputs, and performance attributes."
        },
        {
          id: "supply-chain-management-101-l04-c3",
          title: "Deliver and Return",
          content:
            "Deliver manages order management, warehousing, transportation, and distribution to the customer. It includes picking, packing, shipping, and last-mile delivery. Return handles the reverse flow: defective products, warranty claims, excess inventory, and recycling. SCOR also defines Enable processes — the management activities (rules, data, workforce, contracts) that support the five core processes. Together, these provide a complete map of supply chain operations."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-101-l04-f1", front: "SCOR model", back: "Supply Chain Operations Reference — a standardized framework with five core processes (Plan, Source, Make, Deliver, Return) for describing, measuring, and improving supply chains" },
        { id: "supply-chain-management-101-l04-f2", front: "The five SCOR processes", back: "Plan (orchestrates all), Source (purchasing/receiving), Make (production/assembly), Deliver (order fulfillment/shipping), Return (reverse flow/returns)" },
        { id: "supply-chain-management-101-l04-f3", front: "SCOR Enable processes", back: "Management activities — business rules, data management, workforce skills, contracts — that support the five core SCOR processes" }
      ]
    },
    {
      id: "supply-chain-management-101-l05",
      title: "Checkpoint: Supply Chain Foundations",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "supply-chain-management-101-l05-q1",
          text: "Which of the following is NOT one of the five core SCOR model processes?",
          options: [
            { id: "a", text: "Plan" },
            { id: "b", text: "Source" },
            { id: "c", text: "Market" },
            { id: "d", text: "Return" }
          ],
          correctOptionId: "c",
          explanation: "The five SCOR processes are Plan, Source, Make, Deliver, and Return. 'Market' is not one of them."
        },
        {
          id: "supply-chain-management-101-l05-q2",
          text: "What is the key difference between logistics and supply chain management?",
          options: [
            { id: "a", text: "Logistics is broader than supply chain management" },
            { id: "b", text: "Supply chain management includes logistics plus strategic sourcing, demand planning, and cross-organizational coordination" },
            { id: "c", text: "They are identical concepts with different names" },
            { id: "d", text: "Logistics deals with information while SCM deals with physical goods" }
          ],
          correctOptionId: "b",
          explanation: "SCM is the broader discipline that encompasses logistics (movement and storage) plus strategic sourcing, supplier management, demand planning, and cross-organizational collaboration."
        },
        {
          id: "supply-chain-management-101-l05-q3",
          text: "Which type of logistics handles product returns, recalls, and recycling?",
          options: [
            { id: "a", text: "Inbound logistics" },
            { id: "b", text: "Outbound logistics" },
            { id: "c", text: "Reverse logistics" },
            { id: "d", text: "Forward logistics" }
          ],
          correctOptionId: "c",
          explanation: "Reverse logistics manages the backward flow of products — returns, recalls, recycling, and disposal — and can represent 5–10% of total supply chain cost."
        },
        {
          id: "supply-chain-management-101-l05-q4",
          text: "A Tier 2 supplier in a supply chain is best described as:",
          options: [
            { id: "a", text: "A company that sells directly to end consumers" },
            { id: "b", text: "A supplier that provides materials to the focal company's direct suppliers" },
            { id: "c", text: "The most important supplier in the network" },
            { id: "d", text: "A backup supplier used only during disruptions" }
          ],
          correctOptionId: "b",
          explanation: "Tier 2 suppliers provide materials to Tier 1 suppliers, who in turn sell directly to the focal company. The tier number indicates distance from the focal firm, not importance."
        }
      ]
    },
    {
      id: "supply-chain-management-101-l06",
      title: "Supply Chain Metrics & Performance",
      type: "video",
      duration: 13,
      objectives: [
        "Calculate fill rate, lead time, and inventory turns",
        "Explain the trade-offs between supply chain metrics",
        "Use metrics to diagnose supply chain problems"
      ],
      chunks: [
        {
          id: "supply-chain-management-101-l06-c1",
          title: "Fill Rate and Order Accuracy",
          content:
            "Fill rate measures the percentage of customer demand that is met immediately from available stock — a fill rate of 95% means 5% of orders face stockouts. Order accuracy tracks the percentage of orders delivered without errors (wrong item, wrong quantity, damage). World-class supply chains achieve fill rates above 98% and order accuracy above 99%. These metrics directly affect customer satisfaction and retention."
        },
        {
          id: "supply-chain-management-101-l06-c2",
          title: "Lead Time and Cycle Time",
          content:
            "Lead time is the total elapsed time from when a customer places an order to when they receive it. It includes processing time, production time, and transportation time. Cycle time is the time to complete one internal process — for example, manufacturing cycle time. Reducing lead time is a major competitive lever: Amazon's supply chain dominance is built on consistently shrinking delivery lead times from days to hours."
        },
        {
          id: "supply-chain-management-101-l06-c3",
          title: "Inventory Turns and Cash-to-Cash Cycle",
          content:
            "Inventory turns measure how many times inventory is sold and replaced in a period — calculated as cost of goods sold divided by average inventory. Higher turns mean less capital tied up in stock. The cash-to-cash cycle measures how long cash is committed from paying suppliers to receiving payment from customers. Dell revolutionized computing with negative cash-to-cash cycles — collecting from customers before paying suppliers."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-101-l06-f1", front: "Fill rate", back: "Percentage of customer demand met immediately from available stock — world-class supply chains achieve above 98%" },
        { id: "supply-chain-management-101-l06-f2", front: "Inventory turns", back: "Cost of goods sold ÷ average inventory — measures how often inventory is sold and replaced; higher turns mean less capital tied up" },
        { id: "supply-chain-management-101-l06-f3", front: "Cash-to-cash cycle", back: "Time from paying suppliers to collecting from customers — shorter (or negative) cycles free working capital for other investments" }
      ]
    },
    {
      id: "supply-chain-management-101-l07",
      title: "Final Assessment: Supply Chain Fundamentals",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "supply-chain-management-101-l07-q1",
          text: "A company has COGS of $10 million and average inventory of $2 million. What is its inventory turns?",
          options: [
            { id: "a", text: "2 turns" },
            { id: "b", text: "5 turns" },
            { id: "c", text: "8 turns" },
            { id: "d", text: "20 turns" }
          ],
          correctOptionId: "b",
          explanation: "Inventory turns = COGS ÷ Average Inventory = $10M ÷ $2M = 5 turns. The company sells and replaces its inventory five times per period."
        },
        {
          id: "supply-chain-management-101-l07-q2",
          text: "The bullwhip effect is best described as:",
          options: [
            { id: "a", text: "A reduction in demand variability as orders move upstream" },
            { id: "b", text: "An amplification of demand variability as orders move upstream through the supply chain" },
            { id: "c", text: "The tendency for lead times to decrease at each supply chain tier" },
            { id: "d", text: "A method for improving forecast accuracy" }
          ],
          correctOptionId: "b",
          explanation: "The bullwhip effect describes how small fluctuations in consumer demand get amplified as orders move upstream — each tier over-reacts, causing excessive inventory swings."
        },
        {
          id: "supply-chain-management-101-l07-q3",
          text: "Which of the three supply chain flows moves BIDIRECTIONALLY?",
          options: [
            { id: "a", text: "Product flow" },
            { id: "b", text: "Financial flow" },
            { id: "c", text: "Information flow" },
            { id: "d", text: "All three flows are strictly one-directional" }
          ],
          correctOptionId: "c",
          explanation: "Information flow moves bidirectionally — demand data flows upstream while supply status and tracking data flow downstream. Product flow is primarily downstream (with reverse logistics exceptions), and financial flow is primarily upstream."
        },
        {
          id: "supply-chain-management-101-l07-q4",
          text: "Which SCOR process orchestrates and integrates all other supply chain processes?",
          options: [
            { id: "a", text: "Source" },
            { id: "b", text: "Make" },
            { id: "c", text: "Plan" },
            { id: "d", text: "Deliver" }
          ],
          correctOptionId: "c",
          explanation: "Plan is the integrating process in SCOR — it encompasses demand forecasting, supply planning, inventory strategy, and capacity planning that coordinate Source, Make, Deliver, and Return."
        }
      ]
    }
  ],
};
