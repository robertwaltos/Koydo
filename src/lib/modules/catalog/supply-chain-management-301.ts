import type { LearningModule } from "@/lib/modules/types";

export const supply_chain_management_301_Module: LearningModule = {
  "id": "supply-chain-management-301",
  "title": "Logistics & Distribution Strategy",
  "description": "Design efficient logistics networks from warehouse to doorstep. Compare transportation modes, optimize distribution networks, tackle last-mile delivery challenges, and decide between third-party logistics providers and in-house operations.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "supply-chain"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Compare transportation modes and select the right one for each shipment",
    "Explain warehouse design principles and operational workflows",
    "Design a distribution network balancing cost, speed, and coverage",
    "Analyze last-mile delivery challenges and emerging solutions",
    "Describe reverse logistics processes and their cost implications",
    "Explain cold chain management requirements for temperature-sensitive goods",
    "Evaluate the trade-offs between 3PL outsourcing and in-house logistics"
  ],
  "lessons": [
    {
      "id": "supply-chain-management-301-l01",
      "title": "Transportation Modes & Selection",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Describe the five primary transportation modes",
        "Compare modes on cost, speed, capacity, and reliability",
        "Apply mode selection criteria to real shipping scenarios"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-301-l01-c1",
          "title": "The Five Primary Transportation Modes",
          "content": "Logistics relies on five primary modes of transportation to move goods efficiently. [Visual: Animated icons for truck, train, ship, plane, and pipeline appearing on screen.]\n\nFirst, trucks offer high versatility and door-to-door service, making them ideal for short to medium distances and final delivery. Second, rail transport is highly effective for moving heavy and bulk commodities over long terrestrial distances at a low cost.\n\nThird, ocean shipping is the most economical mode for international trade, essential for moving large volumes of goods globally, though it is the slowest. Fourth, air transport is the fastest option, best suited for high-value, time-sensitive, or perishable goods, despite its high cost.\n\nFinally, pipelines are designed for the low-cost, continuous transport of liquids and gases like oil and natural gas, but they lack route flexibility. Understanding the unique advantages and constraints of each mode is fundamental to designing an effective logistics strategy."
        },
        {
          "id": "supply-chain-management-301-l01-c2",
          "title": "Comparing Modes: Key Trade-offs",
          "content": "Selecting a transportation mode requires balancing several key factors. [Visual: A comparison chart with columns for Mode, Cost, Speed, Capacity, and Reliability.] Speed and cost are often the primary trade-off. For example, air freight can be 4-5 times more expensive than trucking and 12-16 times more than ocean shipping, but it reduces transit time from weeks to hours.\n\nIntermodal transportation, which combines modes like rail and truck, offers a powerful way to optimize this trade-off. It can generate cost savings of 10-40% compared to using trucks alone for long distances, while also expanding network reach.\n\nThe optimal choice depends on the specific context: the value of the product, its urgency, its physical characteristics, and the total shipment size. A strategic decision balances cost, speed, and reliability to meet business and customer requirements."
        },
        {
          "id": "supply-chain-management-301-l01-c3",
          "title": "Mode Selection Decision Framework",
          "content": "A structured framework helps in selecting the optimal transportation mode. [Visual: A decision matrix with factors on one axis and modes on the other.] Key criteria include:\n\n1.  **Value Density**: High-value goods like electronics may justify the cost of air freight to minimize inventory carrying costs and risk.\n2.  **Weight & Volume**: Heavy or bulky shipments favor rail or ocean transport due to their high capacity and low per-unit cost.\n3.  **Time Sensitivity**: Perishable goods or items needed for just-in-time manufacturing require the speed of air or express truck services.\n4.  **Distance & Accessibility**: Trucks excel at short-haul, door-to-door delivery, while rail and ocean are better for long-haul routes between terminals.\n5.  **Sustainability**: Rail transport produces approximately 75% fewer greenhouse gas emissions per ton-mile than trucks, making it a strong choice for companies focused on reducing their carbon footprint."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-301-l01-f1",
          "front": "Five primary transportation modes",
          "back": "Truck (flexible, door-to-door), Rail (bulk, long-distance), Ocean (lowest cost, slowest), Air (fastest, most expensive), Pipeline (liquids/gases, inflexible)"
        },
        {
          "id": "supply-chain-management-301-l01-f2",
          "front": "Intermodal transportation",
          "back": "Combining two or more transportation modes (e.g., rail + truck) to optimize cost and reach — typically saving 10–40% over truck-only for long distances"
        },
        {
          "id": "supply-chain-management-301-l01-f3",
          "front": "Key factors in mode selection",
          "back": "Value density, weight/volume, time sensitivity, distance, accessibility (door-to-door vs. terminal), and sustainability goals"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-301-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-301-l02",
      "title": "Warehouse Design & Operations",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the core functions of a warehouse",
        "Explain key warehouse layout and design principles",
        "Describe order picking strategies and their efficiency"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-301-l02-c1",
          "title": "Core Warehouse Functions",
          "content": "Warehouses perform five core functions to manage the flow of goods. [Visual: An animated flowchart showing the five functions in sequence.]\n\n1.  **Receiving**: Unloading goods, inspecting for quality and accuracy, and logging them into the inventory system.\n2.  **Put-away**: Moving received goods from the dock to their designated storage locations.\n3.  **Storage**: Holding inventory in an organized manner to ensure security and accessibility.\n4.  **Order Picking**: Retrieving items from storage to fulfill customer orders. This is the most critical function, often accounting for 50-65% of a warehouse's total operating costs.\n5.  **Shipping**: Packing, labeling, and loading picked orders onto outbound vehicles for dispatch.\n\nAn alternative process, **cross-docking**, bypasses storage by moving goods directly from receiving to shipping, maximizing throughput speed for certain types of inventory."
        },
        {
          "id": "supply-chain-management-301-l02-c2",
          "title": "Warehouse Layout Principles",
          "content": "An efficient warehouse layout minimizes travel time and maximizes space utilization. [Visual: Top-down diagrams of U-flow, through-flow, and L-flow layouts.] The primary goal is to reduce the distance workers travel, especially during order picking. Fast-moving products (A-items) should be placed near shipping docks, while slow-moving products (C-items) can be stored in more distant or less accessible areas.\n\nCommon layouts include the U-flow (receiving and shipping on the same side), through-flow (receiving and shipping on opposite sides), and L-flow. The choice depends on the building shape and operational needs.\n\nFurthermore, **slotting optimization**—the strategic placement of products based on their velocity and size—is critical. Effective slotting can improve picking productivity by 10-30% by ensuring the right items are in the most efficient locations."
        },
        {
          "id": "supply-chain-management-301-l02-c3",
          "title": "Order Picking Strategies",
          "content": "Warehouses employ various order picking strategies to enhance efficiency. [Visual: Animation comparing a picker's path for discrete, batch, and zone picking.]\n\n*   **Discrete Picking**: A picker fulfills one complete order at a time. It's simple but often inefficient due to extensive travel.\n*   **Batch Picking**: A picker retrieves items for multiple orders simultaneously, reducing total travel time.\n*   **Zone Picking**: Pickers are assigned to specific warehouse zones and only pick items from their area. Orders are then consolidated before shipping.\n*   **Wave Picking**: A hybrid approach where orders are released in scheduled waves, often combining batch and zone logic to coordinate picking and shipping activities.\n\nAdvanced **goods-to-person** systems use automation like robots and conveyors to bring items to stationary pickers, dramatically increasing picking speed and accuracy."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-301-l02-f1",
          "front": "Five core warehouse functions",
          "back": "Receiving, Put-away, Storage, Order picking (50–65% of operating cost), and Shipping — plus cross-docking as an alternative that bypasses storage"
        },
        {
          "id": "supply-chain-management-301-l02-f2",
          "front": "Slotting optimization",
          "back": "Placing products in optimal warehouse locations based on velocity and size — fast movers near docks, slow movers in distant areas — improving pick productivity 10–30%"
        },
        {
          "id": "supply-chain-management-301-l02-f3",
          "front": "Goods-to-person picking",
          "back": "Automated systems (robots, conveyors, AS/RS) bring items to stationary pickers instead of pickers traveling to items — dramatically increasing throughput and accuracy"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-301-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-301-l03",
      "title": "Distribution Network Design",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Identify common distribution network configurations",
        "Analyze the trade-off between number of facilities and total cost",
        "Evaluate centralized vs. decentralized distribution strategies"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-301-l03-c1",
          "title": "Network Configuration Options",
          "content": "Businesses can choose from several distribution network configurations, each with different performance characteristics. [Visual: Diagrams illustrating each network type.]\n\n*   **Direct Shipping**: Products move directly from the manufacturer to the end customer, minimizing handling (e.g., Dell's original model).\n*   **Manufacturer Storage**: Goods are stored at the factory and shipped directly to customers.\n*   **Distributor Storage**: Inventory is held in regional fulfillment centers and delivered by carriers (e.g., Amazon).\n*   **Distributor Storage with Last-Mile Delivery**: A variation where the distributor also manages the final delivery to the customer's home.\n*   **Retail Storage**: Customers pick up items from a local retail store or receive home delivery from that store.\n\nEach design represents a trade-off between inventory costs, transportation costs, facility costs, and customer responsiveness."
        },
        {
          "id": "supply-chain-management-301-l03-c2",
          "title": "The Facility-Transportation Cost Trade-off",
          "content": "A core challenge in network design is determining the optimal number of facilities. [Visual: A U-shaped curve graph plotting Total Cost vs. Number of Facilities, with separate lines for Transportation, Inventory, and Facility costs.]\n\nAdding more distribution centers generally decreases outbound transportation costs and improves delivery speed by placing inventory closer to customers. However, it increases fixed facility costs (rent, labor) and total inventory costs, as each location requires safety stock.\n\nThis relationship creates a U-shaped total cost curve. The goal is to find the sweet spot—the number of facilities that minimizes the total logistics cost, balancing the opposing cost drivers."
        },
        {
          "id": "supply-chain-management-301-l03-c3",
          "title": "Centralized vs. Decentralized Distribution",
          "content": "The choice between a centralized and decentralized network involves significant trade-offs. [Visual: A map comparing a single national DC (centralized) to multiple regional DCs (decentralized).]\n\n**Centralized distribution** uses fewer, larger facilities. Its main advantage is **risk pooling**: aggregating demand across many regions reduces overall demand variability, which lowers the required safety stock. This leads to lower inventory costs and economies of scale. The downside is longer delivery times and higher outbound transportation costs.\n\n**Decentralized distribution** uses many smaller facilities located closer to customers. This strategy provides faster delivery and lower last-mile transport costs. However, it results in higher total inventory and facility costs.\n\nMany companies use a hybrid approach, such as regional hubs, to balance these competing objectives."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-301-l03-f1",
          "front": "Six distribution network configurations",
          "back": "Direct ship, manufacturer storage with merge, distributor storage with carrier delivery, distributor with last-mile, retail with pickup, retail with home delivery"
        },
        {
          "id": "supply-chain-management-301-l03-f2",
          "front": "Facility-transportation cost trade-off",
          "back": "More facilities reduce transport cost and improve speed but increase fixed costs and inventory — total cost follows a U-shape curve with an optimal point"
        },
        {
          "id": "supply-chain-management-301-l03-f3",
          "front": "Risk pooling in centralized distribution",
          "back": "Aggregating demand across regions into fewer facilities reduces demand variability and required safety stock — a key advantage of centralized distribution"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "supply-chain-management-301-l04",
      "title": "Last-Mile Delivery & Reverse Logistics",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain why last-mile delivery is the most expensive logistics segment",
        "Describe emerging last-mile solutions",
        "Outline the reverse logistics process and its business importance"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-301-l04-c1",
          "title": "The Last-Mile Challenge",
          "content": "Last-mile delivery, the final step from a distribution center to the customer's doorstep, is the most expensive and complex part of the supply chain, accounting for 40-53% of total shipping costs. [Visual: A pie chart showing the cost breakdown of shipping, with the 'Last Mile' segment being the largest.]\n\nSeveral factors contribute to this high cost: low drop density (many individual stops with few items per stop), failed delivery attempts, urban traffic congestion, and rising customer expectations for fast, free, and precise delivery windows. The rapid growth of e-commerce has intensified these challenges, putting immense pressure on logistics providers to innovate and optimize this critical final leg of the journey."
        },
        {
          "id": "supply-chain-management-301-l04-c2",
          "title": "Emerging Last-Mile Solutions",
          "content": "To combat last-mile challenges, companies are adopting innovative solutions. [Visual: Icons representing parcel lockers, crowdsourcing, micro-fulfillment centers, and drones.]\n\n*   **Parcel Lockers & Pick-up Points**: Consolidate deliveries to a single location, increasing drop density and offering customer flexibility.\n*   **Crowdsourced Delivery**: Gig-economy platforms provide a flexible and scalable delivery workforce.\n*   **Micro-Fulfillment Centers (MFCs)**: Small, automated fulfillment centers in urban areas reduce the distance to the end customer, enabling faster delivery.\n*   **Autonomous Vehicles & Drones**: Emerging technologies for automated delivery in certain environments.\n*   **Route Optimization Software**: AI-powered tools plan the most efficient delivery routes, saving 10-20% in fuel and time."
        },
        {
          "id": "supply-chain-management-301-l04-c3",
          "title": "Reverse Logistics",
          "content": "Reverse logistics manages the flow of products from customers back into the supply chain for returns, repairs, refurbishment, or recycling. [Visual: A circular diagram showing the reverse logistics flow from customer back to the supplier.]\n\nWith e-commerce return rates often reaching 20-30%, managing this process effectively is a significant cost driver and a strategic priority. An effective reverse logistics program has three key components:\n\n1.  **Gatekeeping**: Determining if a return is warranted and authorizing it.\n2.  **Disposition**: Deciding the fate of the returned item: restock, refurbish, liquidate, or recycle.\n3.  **Value Recovery**: Maximizing the value extracted from returned assets.\n\nAs the circular economy gains prominence, efficient reverse logistics is becoming essential for both financial performance and corporate sustainability."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-301-l04-f1",
          "front": "Why is last-mile delivery so expensive?",
          "back": "It accounts for 40–53% of shipping costs due to low drop density, failed deliveries, urban congestion, and customer demands for free/fast delivery"
        },
        {
          "id": "supply-chain-management-301-l04-f2",
          "front": "Micro-fulfillment centers",
          "back": "Small, automated warehouses located in urban areas that shorten the last mile and enable faster delivery — often in existing retail or warehouse space"
        },
        {
          "id": "supply-chain-management-301-l04-f3",
          "front": "Three components of effective reverse logistics",
          "back": "Gatekeeping (is the return warranted?), Disposition (restock, refurbish, liquidate, or recycle?), Value recovery (extract maximum value from returned goods)"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-301-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-301-l05",
      "title": "Checkpoint: Logistics & Distribution",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "supply-chain-management-301-l05-q1",
          "text": "Which warehouse activity typically accounts for 50–65% of total operating cost?",
          "options": [
            {
              "id": "a",
              "text": "Receiving"
            },
            {
              "id": "b",
              "text": "Put-away"
            },
            {
              "id": "c",
              "text": "Order picking"
            },
            {
              "id": "d",
              "text": "Shipping"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Order picking is the most labor-intensive and costly warehouse activity, typically consuming 50–65% of operating costs — which is why picking optimization strategies are critical."
        },
        {
          "id": "supply-chain-management-301-l05-q2",
          "text": "What percentage of total shipping costs does last-mile delivery typically account for?",
          "options": [
            {
              "id": "a",
              "text": "10–15%"
            },
            {
              "id": "b",
              "text": "20–25%"
            },
            {
              "id": "c",
              "text": "40–53%"
            },
            {
              "id": "d",
              "text": "70–80%"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Last-mile delivery accounts for 40–53% of total shipping costs due to low drop density, failed deliveries, congestion, and rising consumer expectations."
        },
        {
          "id": "supply-chain-management-301-l05-q3",
          "text": "Risk pooling in centralized distribution reduces costs primarily by:",
          "options": [
            {
              "id": "a",
              "text": "Eliminating the need for transportation"
            },
            {
              "id": "b",
              "text": "Reducing total safety stock through demand aggregation"
            },
            {
              "id": "c",
              "text": "Increasing the number of warehouse locations"
            },
            {
              "id": "d",
              "text": "Shortening delivery times to all customers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Risk pooling reduces total safety stock because aggregated demand variability is lower than the sum of individual location variabilities — fewer facilities need less total buffer inventory."
        },
        {
          "id": "supply-chain-management-301-l05-q4",
          "text": "Intermodal transportation typically saves how much compared to truck-only shipping over long distances?",
          "options": [
            {
              "id": "a",
              "text": "1–5%"
            },
            {
              "id": "b",
              "text": "10–40%"
            },
            {
              "id": "c",
              "text": "50–70%"
            },
            {
              "id": "d",
              "text": "80–90%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Intermodal combinations (e.g., rail + truck) typically save 10–40% versus truck-only for long-distance shipments by leveraging rail's lower cost per ton-mile for the long-haul segment."
        }
      ]
    },
    {
      "id": "supply-chain-management-301-l06",
      "title": "Cold Chain & 3PL vs. In-House Logistics",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain cold chain management and its critical requirements",
        "Compare advantages of 3PL outsourcing vs. in-house logistics",
        "Identify the different levels of logistics outsourcing (1PL to 5PL)"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-301-l06-c1",
          "title": "Cold Chain Management",
          "content": "The cold chain is a specialized, temperature-controlled supply chain for perishable products like food, pharmaceuticals, and chemicals. [Visual: An animated graphic showing a vaccine moving from a refrigerated factory, to a cold truck, to a pharmacy refrigerator.]\n\nMaintaining an unbroken chain of refrigeration is critical; a single temperature excursion can render an entire shipment worthless. Key challenges include maintaining precise temperatures (e.g., -70°C for some vaccines), continuous temperature monitoring and data logging, higher energy costs, and adherence to strict regulations from bodies like the FDA.\n\nEffective cold chain management is essential for ensuring product safety and efficacy, protecting public health, and preventing significant financial loss."
        },
        {
          "id": "supply-chain-management-301-l06-c2",
          "title": "Third-Party Logistics (3PL) vs. In-House",
          "content": "Companies face a strategic choice: manage logistics in-house or outsource to a Third-Party Logistics (3PL) provider. [Visual: A split screen comparing an in-house warehouse with a 3PL provider's multi-client facility.]\n\n**Outsourcing to a 3PL** offers access to expertise, technology, and scalability. It converts fixed costs (like owning a warehouse) into variable costs and allows for geographic expansion without large capital investments. The global 3PL market exceeds $1 trillion annually.\n\n**In-house logistics** provides greater control over operations and customer experience, and can be a core competitive advantage. However, it requires significant capital, expertise, and management attention.\n\nThe decision involves weighing the benefits of control and specialization against the flexibility and cost advantages of outsourcing."
        },
        {
          "id": "supply-chain-management-301-l06-c3",
          "title": "Levels of Logistics Outsourcing",
          "content": "Logistics outsourcing exists on a spectrum, commonly defined by levels from 1PL to 5PL. [Visual: A pyramid diagram with 1PL at the base and 5PL at the top.]\n\n*   **1PL (First-Party Logistics)**: The company handles its own logistics entirely in-house.\n*   **2PL (Second-Party Logistics)**: The company outsources a specific transportation function to a carrier (e.g., a trucking or shipping line).\n*   **3PL (Third-Party Logistics)**: A provider manages a bundle of logistics services, such as warehousing, transportation, and order fulfillment.\n*   **4PL (Fourth-Party Logistics)**: A lead logistics provider acts as a strategic integrator, managing the entire supply chain, including coordinating multiple 3PLs.\n*   **5PL (Fifth-Party Logistics)**: A provider that designs, builds, and runs entire logistics networks using advanced technologies like AI and blockchain.\n\nThe appropriate level of outsourcing depends on a company's strategic goals, operational complexity, and core competencies."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-301-l06-f1",
          "front": "Cold chain management",
          "back": "Temperature-controlled supply chain for perishables (food, pharma, vaccines) requiring unbroken refrigeration, precise monitoring, and regulatory compliance at every handoff"
        },
        {
          "id": "supply-chain-management-301-l06-f2",
          "front": "Benefits of using a 3PL",
          "back": "Access to expertise/technology, scalability, fixed-to-variable cost conversion, and geographic coverage without capital investment"
        },
        {
          "id": "supply-chain-management-301-l06-f3",
          "front": "1PL through 5PL",
          "back": "1PL: self-managed. 2PL: single carrier. 3PL: multiple logistics functions. 4PL: manages entire supply chain coordinating multiple providers. 5PL: designs and operates entire network"
        }
      ]
    },
    {
      "id": "supply-chain-management-301-l07",
      "title": "Final Assessment: Logistics & Distribution Strategy",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "supply-chain-management-301-l07-q1",
          "text": "A company shipping high-value, time-sensitive electronics from Asia to the US should primarily use which transportation mode?",
          "options": [
            {
              "id": "a",
              "text": "Ocean freight"
            },
            {
              "id": "b",
              "text": "Rail"
            },
            {
              "id": "c",
              "text": "Air freight"
            },
            {
              "id": "d",
              "text": "Pipeline"
            }
          ],
          "correctOptionId": "c",
          "explanation": "High-value, time-sensitive goods justify the premium cost of air freight because the speed advantage reduces inventory carrying costs, avoids stockouts, and gets products to market faster."
        },
        {
          "id": "supply-chain-management-301-l07-q2",
          "text": "Cross-docking in a warehouse means:",
          "options": [
            {
              "id": "a",
              "text": "Storing products in multiple zones for redundancy"
            },
            {
              "id": "b",
              "text": "Moving inbound goods directly to outbound docks without storage"
            },
            {
              "id": "c",
              "text": "Using two docking stations for the same truck"
            },
            {
              "id": "d",
              "text": "Consolidating shipments over several weeks before dispatch"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cross-docking bypasses the storage function entirely — goods are received, sorted, and immediately loaded onto outbound vehicles, reducing handling costs and speeding throughput."
        },
        {
          "id": "supply-chain-management-301-l07-q3",
          "text": "A 4PL provider differs from a 3PL in that a 4PL:",
          "options": [
            {
              "id": "a",
              "text": "Owns all trucks and warehouses"
            },
            {
              "id": "b",
              "text": "Only handles a single transportation mode"
            },
            {
              "id": "c",
              "text": "Manages the entire supply chain, coordinating multiple 3PLs and carriers"
            },
            {
              "id": "d",
              "text": "Operates exclusively in domestic markets"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A 4PL acts as a lead logistics provider that manages and coordinates the entire supply chain including multiple 3PLs, carriers, and other service providers on behalf of the client."
        },
        {
          "id": "supply-chain-management-301-l07-q4",
          "text": "E-commerce return rates average 20–30%. An effective reverse logistics program includes all of the following EXCEPT:",
          "options": [
            {
              "id": "a",
              "text": "Gatekeeping to determine if a return is warranted"
            },
            {
              "id": "b",
              "text": "Disposition decisions for returned goods"
            },
            {
              "id": "c",
              "text": "Refusing all returns to minimize costs"
            },
            {
              "id": "d",
              "text": "Value recovery through restocking, refurbishment, or recycling"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Refusing all returns is not a viable strategy — it damages customer relationships and may violate consumer protection laws. Effective reverse logistics manages returns efficiently through gatekeeping, disposition, and value recovery."
        }
      ]
    }
  ]
};
