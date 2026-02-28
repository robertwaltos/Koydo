import type { LearningModule } from "@/lib/modules/types";

export const SupplyChainManagement301Module: LearningModule = {
  id: "supply-chain-management-301",
  title: "Logistics & Distribution Strategy",
  description:
    "Design efficient logistics networks from warehouse to doorstep. Compare transportation modes, optimize distribution networks, tackle last-mile delivery challenges, and decide between third-party logistics providers and in-house operations.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "supply-chain"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Compare transportation modes and select the right one for each shipment",
    "Explain warehouse design principles and operational workflows",
    "Design a distribution network balancing cost, speed, and coverage",
    "Analyze last-mile delivery challenges and emerging solutions",
    "Describe reverse logistics processes and their cost implications",
    "Explain cold chain management requirements for temperature-sensitive goods",
    "Evaluate the trade-offs between 3PL outsourcing and in-house logistics"
  ],
  lessons: [
    {
      id: "supply-chain-management-301-l01",
      title: "Transportation Modes & Selection",
      type: "video",
      duration: 13,
      objectives: [
        "Describe the five primary transportation modes",
        "Compare modes on cost, speed, capacity, and reliability",
        "Apply mode selection criteria to real shipping scenarios"
      ],
      chunks: [
        {
          id: "supply-chain-management-301-l01-c1",
          title: "The Five Transportation Modes",
          content:
            "The five primary transportation modes are: (1) Truck (road) — most flexible, door-to-door capability, dominates short-to-medium distances. (2) Rail — cost-effective for heavy, bulk cargo over long distances. (3) Ocean — lowest cost per ton-mile, essential for international trade, but slowest. (4) Air — fastest but most expensive, used for high-value or time-sensitive goods. (5) Pipeline — dedicated to liquids and gases (oil, natural gas, chemicals), lowest per-unit cost but inflexible."
        },
        {
          id: "supply-chain-management-301-l01-c2",
          title: "Comparing Modes: Trade-offs",
          content:
            "Mode selection involves trade-offs between cost, speed, capacity, reliability, and environmental impact. Air freight costs 4–5 times more than trucking and 12–16 times more than ocean shipping, but transit time drops from weeks to hours. Intermodal transportation — combining modes such as rail plus truck — offers cost savings of 10–40% over truck-only while extending reach. The optimal mode depends on product value density, perishability, delivery urgency, and shipment size."
        },
        {
          id: "supply-chain-management-301-l01-c3",
          title: "Mode Selection Decision Framework",
          content:
            "To select a transportation mode, evaluate: (1) Value density — high-value goods justify air freight. (2) Weight and volume — heavy, bulky shipments favor rail or ocean. (3) Time sensitivity — perishable or urgent goods need air or express truck. (4) Distance — rail and ocean for long haul, truck for short haul. (5) Accessibility — truck provides door-to-door; rail and ocean require terminal connections. (6) Sustainability goals — rail produces 75% fewer emissions per ton-mile than truck."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-301-l01-f1", front: "Five primary transportation modes", back: "Truck (flexible, door-to-door), Rail (bulk, long-distance), Ocean (lowest cost, slowest), Air (fastest, most expensive), Pipeline (liquids/gases, inflexible)" },
        { id: "supply-chain-management-301-l01-f2", front: "Intermodal transportation", back: "Combining two or more transportation modes (e.g., rail + truck) to optimize cost and reach — typically saving 10–40% over truck-only for long distances" },
        { id: "supply-chain-management-301-l01-f3", front: "Key factors in mode selection", back: "Value density, weight/volume, time sensitivity, distance, accessibility (door-to-door vs. terminal), and sustainability goals" }
      ]
    },
    {
      id: "supply-chain-management-301-l02",
      title: "Warehouse Design & Operations",
      type: "video",
      duration: 12,
      objectives: [
        "Identify the core functions of a warehouse",
        "Explain key warehouse layout and design principles",
        "Describe order picking strategies and their efficiency"
      ],
      chunks: [
        {
          id: "supply-chain-management-301-l02-c1",
          title: "Core Warehouse Functions",
          content:
            "Warehouses perform five core functions: (1) Receiving — unloading, inspecting, and recording incoming goods. (2) Put-away — moving goods to designated storage locations. (3) Storage — holding inventory in organized, accessible locations. (4) Order picking — retrieving items to fill customer orders (typically 50–65% of warehouse operating cost). (5) Shipping — packing, labeling, loading, and dispatching outbound orders. Cross-docking bypasses storage entirely, moving inbound goods directly to outbound trucks."
        },
        {
          id: "supply-chain-management-301-l02-c2",
          title: "Warehouse Layout Principles",
          content:
            "Effective layout minimizes travel distance, maximizes space utilization, and supports efficient material flow. Fast-moving items (A-items) are placed near shipping docks to reduce pick travel. Slow-moving items (C-items) go to upper levels or distant zones. Common layouts include U-flow (receiving and shipping on the same side), through-flow (receiving on one side, shipping on the opposite), and L-flow. Slotting optimization — placing products in the best locations based on velocity and size — can improve picking productivity by 10–30%."
        },
        {
          id: "supply-chain-management-301-l02-c3",
          title: "Order Picking Strategies",
          content:
            "Picking strategies vary in efficiency. Discrete picking (one order at a time) is simple but slow. Batch picking (multiple orders simultaneously) reduces travel. Zone picking assigns pickers to specific areas; orders are assembled after picking. Wave picking combines batch and zone methods with scheduled release times. Goods-to-person systems use automation (conveyors, robots, AS/RS) to bring items to stationary pickers, dramatically increasing throughput and accuracy."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-301-l02-f1", front: "Five core warehouse functions", back: "Receiving, Put-away, Storage, Order picking (50–65% of operating cost), and Shipping — plus cross-docking as an alternative that bypasses storage" },
        { id: "supply-chain-management-301-l02-f2", front: "Slotting optimization", back: "Placing products in optimal warehouse locations based on velocity and size — fast movers near docks, slow movers in distant areas — improving pick productivity 10–30%" },
        { id: "supply-chain-management-301-l02-f3", front: "Goods-to-person picking", back: "Automated systems (robots, conveyors, AS/RS) bring items to stationary pickers instead of pickers traveling to items — dramatically increasing throughput and accuracy" }
      ]
    },
    {
      id: "supply-chain-management-301-l03",
      title: "Distribution Network Design",
      type: "interactive",
      duration: 14,
      objectives: [
        "Identify common distribution network configurations",
        "Analyze the trade-off between number of facilities and total cost",
        "Evaluate centralized vs. decentralized distribution strategies"
      ],
      chunks: [
        {
          id: "supply-chain-management-301-l03-c1",
          title: "Network Configuration Options",
          content:
            "Distribution networks can take several forms: (1) Direct shipping from manufacturer to customer (Dell's original model). (2) Manufacturer storage with direct shipping and in-transit merge. (3) Distributor storage with carrier delivery (Amazon fulfillment centers). (4) Distributor storage with last-mile delivery. (5) Retail storage with customer pickup. (6) Retail storage with home delivery. Each configuration balances inventory cost, transportation cost, facility cost, and responsiveness differently."
        },
        {
          id: "supply-chain-management-301-l03-c2",
          title: "The Facility-Transportation Cost Trade-off",
          content:
            "Adding distribution facilities reduces outbound transportation costs (shorter distances to customers) and improves delivery speed. However, more facilities increase fixed costs (rent, equipment, staff) and total inventory (safety stock multiplied across locations). The total cost curve typically has a U-shape — costs decrease as you add facilities up to a point, then rise. The optimal number of facilities minimizes total landed cost while meeting service requirements."
        },
        {
          id: "supply-chain-management-301-l03-c3",
          title: "Centralized vs. Decentralized Distribution",
          content:
            "Centralized distribution uses fewer, larger facilities to serve wide geographies. Benefits include lower inventory (risk pooling — demand variability reduces when aggregated), economies of scale, and simpler management. Drawbacks are longer delivery times and higher outbound transport costs. Decentralized distribution uses many smaller facilities close to customers. Benefits include faster delivery and lower transport costs. Drawbacks are higher total inventory and facility costs. Many companies use a hybrid approach with regional hubs."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-301-l03-f1", front: "Six distribution network configurations", back: "Direct ship, manufacturer storage with merge, distributor storage with carrier delivery, distributor with last-mile, retail with pickup, retail with home delivery" },
        { id: "supply-chain-management-301-l03-f2", front: "Facility-transportation cost trade-off", back: "More facilities reduce transport cost and improve speed but increase fixed costs and inventory — total cost follows a U-shape curve with an optimal point" },
        { id: "supply-chain-management-301-l03-f3", front: "Risk pooling in centralized distribution", back: "Aggregating demand across regions into fewer facilities reduces demand variability and required safety stock — a key advantage of centralized distribution" }
      ]
    },
    {
      id: "supply-chain-management-301-l04",
      title: "Last-Mile Delivery & Reverse Logistics",
      type: "video",
      duration: 13,
      objectives: [
        "Explain why last-mile delivery is the most expensive logistics segment",
        "Describe emerging last-mile solutions",
        "Outline the reverse logistics process and its business importance"
      ],
      chunks: [
        {
          id: "supply-chain-management-301-l04-c1",
          title: "The Last-Mile Challenge",
          content:
            "Last-mile delivery — the final leg from distribution center to the customer's door — accounts for 40–53% of total shipping costs. It is expensive because of low drop density (many individual stops), failed delivery attempts (customer not home), traffic congestion in urban areas, and narrow delivery windows demanded by consumers. The rise of e-commerce has intensified these challenges, with customers expecting free, fast, and flexible delivery."
        },
        {
          id: "supply-chain-management-301-l04-c2",
          title: "Emerging Last-Mile Solutions",
          content:
            "Companies are innovating to reduce last-mile costs: parcel lockers and pick-up points aggregate deliveries at convenient locations. Crowdsourced delivery platforms use gig workers for flexible capacity. Micro-fulfillment centers in urban areas shorten the last mile. Autonomous delivery vehicles and drones are being piloted for suburban and rural deliveries. Route optimization software uses AI to sequence stops and reduce miles driven, saving 10–20% on fuel and time."
        },
        {
          id: "supply-chain-management-301-l04-c3",
          title: "Reverse Logistics",
          content:
            "Reverse logistics manages the flow of products from consumers back through the supply chain for returns, repairs, refurbishment, recycling, or disposal. E-commerce return rates average 20–30%, making reverse logistics a significant cost center. An effective reverse logistics program includes gatekeeping (determining if a return is warranted), disposition (deciding whether to restock, refurbish, liquidate, or recycle), and value recovery (extracting maximum value from returned goods). Circular economy principles are making reverse logistics a strategic priority."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-301-l04-f1", front: "Why is last-mile delivery so expensive?", back: "It accounts for 40–53% of shipping costs due to low drop density, failed deliveries, urban congestion, and customer demands for free/fast delivery" },
        { id: "supply-chain-management-301-l04-f2", front: "Micro-fulfillment centers", back: "Small, automated warehouses located in urban areas that shorten the last mile and enable faster delivery — often in existing retail or warehouse space" },
        { id: "supply-chain-management-301-l04-f3", front: "Three components of effective reverse logistics", back: "Gatekeeping (is the return warranted?), Disposition (restock, refurbish, liquidate, or recycle?), Value recovery (extract maximum value from returned goods)" }
      ]
    },
    {
      id: "supply-chain-management-301-l05",
      title: "Checkpoint: Logistics & Distribution",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "supply-chain-management-301-l05-q1",
          text: "Which warehouse activity typically accounts for 50–65% of total operating cost?",
          options: [
            { id: "a", text: "Receiving" },
            { id: "b", text: "Put-away" },
            { id: "c", text: "Order picking" },
            { id: "d", text: "Shipping" }
          ],
          correctOptionId: "c",
          explanation: "Order picking is the most labor-intensive and costly warehouse activity, typically consuming 50–65% of operating costs — which is why picking optimization strategies are critical."
        },
        {
          id: "supply-chain-management-301-l05-q2",
          text: "What percentage of total shipping costs does last-mile delivery typically account for?",
          options: [
            { id: "a", text: "10–15%" },
            { id: "b", text: "20–25%" },
            { id: "c", text: "40–53%" },
            { id: "d", text: "70–80%" }
          ],
          correctOptionId: "c",
          explanation: "Last-mile delivery accounts for 40–53% of total shipping costs due to low drop density, failed deliveries, congestion, and rising consumer expectations."
        },
        {
          id: "supply-chain-management-301-l05-q3",
          text: "Risk pooling in centralized distribution reduces costs primarily by:",
          options: [
            { id: "a", text: "Eliminating the need for transportation" },
            { id: "b", text: "Reducing total safety stock through demand aggregation" },
            { id: "c", text: "Increasing the number of warehouse locations" },
            { id: "d", text: "Shortening delivery times to all customers" }
          ],
          correctOptionId: "b",
          explanation: "Risk pooling reduces total safety stock because aggregated demand variability is lower than the sum of individual location variabilities — fewer facilities need less total buffer inventory."
        },
        {
          id: "supply-chain-management-301-l05-q4",
          text: "Intermodal transportation typically saves how much compared to truck-only shipping over long distances?",
          options: [
            { id: "a", text: "1–5%" },
            { id: "b", text: "10–40%" },
            { id: "c", text: "50–70%" },
            { id: "d", text: "80–90%" }
          ],
          correctOptionId: "b",
          explanation: "Intermodal combinations (e.g., rail + truck) typically save 10–40% versus truck-only for long-distance shipments by leveraging rail's lower cost per ton-mile for the long-haul segment."
        }
      ]
    },
    {
      id: "supply-chain-management-301-l06",
      title: "Cold Chain & 3PL vs. In-House Logistics",
      type: "video",
      duration: 13,
      objectives: [
        "Explain cold chain management and its critical requirements",
        "Compare advantages of 3PL outsourcing vs. in-house logistics",
        "Identify the different levels of logistics outsourcing (1PL to 5PL)"
      ],
      chunks: [
        {
          id: "supply-chain-management-301-l06-c1",
          title: "Cold Chain Management",
          content:
            "The cold chain is a temperature-controlled supply chain for perishable products — food, pharmaceuticals, vaccines, and chemicals. It requires unbroken refrigeration from production through storage, transportation, and delivery. Key challenges include maintaining precise temperatures (vaccines may require -70°C), monitoring and documenting temperature at every handoff point, managing the higher energy costs of refrigerated transport and storage, and handling regulatory compliance (FDA, EU food safety). A single temperature excursion can render an entire shipment worthless."
        },
        {
          id: "supply-chain-management-301-l06-c2",
          title: "Third-Party Logistics (3PL)",
          content:
            "A 3PL provider manages outsourced logistics functions — warehousing, transportation, order fulfillment, and value-added services. Benefits of 3PL include access to expertise and technology, scalability during demand peaks, conversion of fixed costs to variable costs, and geographic coverage without capital investment. Risks include loss of direct control, potential service quality issues, dependency on the provider, and sharing sensitive data. The global 3PL market exceeds $1 trillion annually."
        },
        {
          id: "supply-chain-management-301-l06-c3",
          title: "Levels of Logistics Outsourcing",
          content:
            "Logistics outsourcing has multiple levels: 1PL — the shipper handles its own logistics. 2PL — a carrier provides a single transportation service. 3PL — a provider manages multiple logistics functions. 4PL — a lead logistics provider manages the entire supply chain, coordinating multiple 3PLs and carriers. 5PL — a supply chain integrator that designs and operates the entire network using advanced technology and analytics. The decision to outsource depends on logistics complexity, core competency fit, volume, and strategic importance."
        }
      ],
      flashcards: [
        { id: "supply-chain-management-301-l06-f1", front: "Cold chain management", back: "Temperature-controlled supply chain for perishables (food, pharma, vaccines) requiring unbroken refrigeration, precise monitoring, and regulatory compliance at every handoff" },
        { id: "supply-chain-management-301-l06-f2", front: "Benefits of using a 3PL", back: "Access to expertise/technology, scalability, fixed-to-variable cost conversion, and geographic coverage without capital investment" },
        { id: "supply-chain-management-301-l06-f3", front: "1PL through 5PL", back: "1PL: self-managed. 2PL: single carrier. 3PL: multiple logistics functions. 4PL: manages entire supply chain coordinating multiple providers. 5PL: designs and operates entire network" }
      ]
    },
    {
      id: "supply-chain-management-301-l07",
      title: "Final Assessment: Logistics & Distribution Strategy",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "supply-chain-management-301-l07-q1",
          text: "A company shipping high-value, time-sensitive electronics from Asia to the US should primarily use which transportation mode?",
          options: [
            { id: "a", text: "Ocean freight" },
            { id: "b", text: "Rail" },
            { id: "c", text: "Air freight" },
            { id: "d", text: "Pipeline" }
          ],
          correctOptionId: "c",
          explanation: "High-value, time-sensitive goods justify the premium cost of air freight because the speed advantage reduces inventory carrying costs, avoids stockouts, and gets products to market faster."
        },
        {
          id: "supply-chain-management-301-l07-q2",
          text: "Cross-docking in a warehouse means:",
          options: [
            { id: "a", text: "Storing products in multiple zones for redundancy" },
            { id: "b", text: "Moving inbound goods directly to outbound docks without storage" },
            { id: "c", text: "Using two docking stations for the same truck" },
            { id: "d", text: "Consolidating shipments over several weeks before dispatch" }
          ],
          correctOptionId: "b",
          explanation: "Cross-docking bypasses the storage function entirely — goods are received, sorted, and immediately loaded onto outbound vehicles, reducing handling costs and speeding throughput."
        },
        {
          id: "supply-chain-management-301-l07-q3",
          text: "A 4PL provider differs from a 3PL in that a 4PL:",
          options: [
            { id: "a", text: "Owns all trucks and warehouses" },
            { id: "b", text: "Only handles a single transportation mode" },
            { id: "c", text: "Manages the entire supply chain, coordinating multiple 3PLs and carriers" },
            { id: "d", text: "Operates exclusively in domestic markets" }
          ],
          correctOptionId: "c",
          explanation: "A 4PL acts as a lead logistics provider that manages and coordinates the entire supply chain including multiple 3PLs, carriers, and other service providers on behalf of the client."
        },
        {
          id: "supply-chain-management-301-l07-q4",
          text: "E-commerce return rates average 20–30%. An effective reverse logistics program includes all of the following EXCEPT:",
          options: [
            { id: "a", text: "Gatekeeping to determine if a return is warranted" },
            { id: "b", text: "Disposition decisions for returned goods" },
            { id: "c", text: "Refusing all returns to minimize costs" },
            { id: "d", text: "Value recovery through restocking, refurbishment, or recycling" }
          ],
          correctOptionId: "c",
          explanation: "Refusing all returns is not a viable strategy — it damages customer relationships and may violate consumer protection laws. Effective reverse logistics manages returns efficiently through gatekeeping, disposition, and value recovery."
        }
      ]
    }
  ],
};
