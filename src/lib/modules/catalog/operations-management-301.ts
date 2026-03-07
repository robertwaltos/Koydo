import type { LearningModule } from "@/lib/modules/types";

export const operations_management_301_Module: LearningModule = {
  "id": "operations-management-301",
  "title": "Supply Chain & Inventory Management",
  "description": "Design resilient supply chains and optimize inventory decisions. Master EOQ models, safety stock calculations, JIT delivery systems, demand forecasting, and supplier relationship strategies that balance cost, speed, and reliability across global networks.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "operations"
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
    "Design a supply chain network that balances cost, speed, and resilience",
    "Calculate Economic Order Quantity, reorder points, and safety stock levels",
    "Explain Just-in-Time delivery and the conditions required for its success",
    "Select and apply appropriate demand forecasting methods",
    "Describe the bullwhip effect and implement strategies to mitigate it",
    "Evaluate and structure supplier relationships from arm's length to strategic partnership",
    "Optimize logistics and distribution network design for cost and service"
  ],
  "lessons": [
    {
      "id": "operations-management-301-l01",
      "title": "Supply Chain Design and Architecture",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Define supply chain management and map a multi-tier supply chain",
        "Compare responsive versus efficient supply chain strategies",
        "Explain the concept of supply chain fit with product characteristics"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l01-c1",
          "title": "What Is a Supply Chain?",
          "content": "A supply chain is a network of organizations, people, activities, information, and resources involved in moving a product or service from supplier to customer. It encompasses the entire journey from raw material extraction to final delivery and consumption. For example, Apple's global supply chain involves cobalt mining in Congo, refining in China, component manufacturing in South Korea and Japan, assembly in China and India, and a global distribution and retail network. Effective supply chain management coordinates the flows of materials, information, and finances across this network to maximize value and efficiency."
        },
        {
          "id": "operations-management-301-l01-c2",
          "title": "Efficient vs. Responsive Supply Chains",
          "content": "Marshall Fisher's framework categorizes supply chains into two primary strategies: efficient and responsive. Efficient supply chains prioritize minimizing costs and are best suited for functional products with stable, predictable demand, such as Campbell's soup. Key characteristics include high asset utilization, minimal inventory, and a focus on economies of scale. In contrast, responsive supply chains prioritize speed and flexibility to react to unpredictable demand for innovative products, like fast fashion from Zara. They utilize buffer capacity, rapid fulfillment, and agile processes to meet fluctuating customer needs, even at a higher cost. The choice between strategies depends on the product's demand uncertainty and margin."
        },
        {
          "id": "operations-management-301-l01-c3",
          "title": "Supply Chain Fit",
          "content": "Achieving 'strategic fit' requires aligning a company's supply chain strategy with its product characteristics and competitive priorities. A mismatch creates inefficiency or lost sales. For example, using a highly responsive supply chain for a commodity like sugar incurs unnecessary costs, while using a purely efficient chain for fashion apparel leads to stockouts of popular items and markdowns on unsold inventory. Hau Lee's uncertainty framework expands on this by considering both demand and supply uncertainty. When both are high, as with new technology launches, an 'agile' supply chain is required. Agility combines responsiveness with risk-hedging strategies. Dell's use of postponement—delaying final product customization until a customer order is received—is a classic example of a strategy that balances upstream efficiency with downstream responsiveness to achieve strategic fit."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l01-f1",
          "front": "Supply chain management",
          "back": "Coordinating flows of materials, information, and money across all organizations from raw materials to end customer to maximize total value delivered."
        },
        {
          "id": "operations-management-301-l01-f2",
          "front": "Efficient vs. responsive supply chain",
          "back": "Efficient: minimizes cost for stable-demand products (low inventory, high utilization). Responsive: prioritizes speed and flexibility for uncertain-demand products (quick reaction, buffer capacity)."
        },
        {
          "id": "operations-management-301-l01-f3",
          "front": "Postponement strategy",
          "back": "Delaying final product customization until customer orders are received — combining upstream efficiency with downstream responsiveness (e.g., Dell's build-to-order model)."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l01-a1",
          "type": "diagram",
          "title": "Efficient vs. Responsive Supply Chains",
          "content": "Side-by-side comparison of an efficient supply chain (e.g., for salt) and a responsive supply chain (e.g., for smartphones), highlighting differences in inventory strategy, lead time, and product variety."
        }
      ]
    },
    {
      "id": "operations-management-301-l02",
      "title": "Inventory Management Models",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Calculate Economic Order Quantity and total inventory cost",
        "Determine reorder points and safety stock levels",
        "Apply ABC analysis to prioritize inventory management effort"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l02-c1",
          "title": "The Economic Order Quantity (EOQ)",
          "content": "The Economic Order Quantity (EOQ) model is a foundational inventory-management formula that determines the optimal order quantity to minimize total inventory costs. It balances two opposing costs: ordering costs (costs of placing an order, like administrative fees and shipping) and holding costs (costs of carrying inventory, like storage, insurance, and capital cost). Ordering in large batches reduces the frequency and cost of ordering but increases holding costs. The EOQ formula, EOQ = sqrt(2DS/H), identifies the order size where the sum of these costs is lowest. In the formula, D is the annual demand, S is the cost per order, and H is the annual holding cost per unit. For a distributor with an annual demand of 10,000 units, an ordering cost of $50, and a holding cost of $5 per unit, the EOQ would be sqrt(2 * 10,000 * 50 / 5) ≈ 447 units."
        },
        {
          "id": "operations-management-301-l02-c2",
          "title": "Reorder Point and Safety Stock",
          "content": "The Reorder Point (ROP) is the inventory level that triggers an action to replenish that particular stock item. It is designed to prevent stockouts during the lead time—the time between placing an order and receiving it. The basic formula is ROP = Average daily demand × Lead time in days. However, to account for uncertainty in demand or lead time, companies hold safety stock. The ROP formula is then adjusted to: ROP = (Average daily demand × Lead time) + Safety Stock. Safety stock is calculated as SS = z × σ_dLT, where 'z' is the z-score corresponding to the desired service level (e.g., 1.65 for 95%) and σ_dLT is the standard deviation of demand during lead time. A higher desired service level necessitates a larger safety stock."
        },
        {
          "id": "operations-management-301-l02-c3",
          "title": "ABC Analysis",
          "content": "ABC analysis is an inventory categorization technique based on the Pareto principle (the 80/20 rule). It classifies inventory items into three categories—A, B, and C—based on their annual consumption value. 'A' items are the most valuable; typically, 20% of items account for 80% of the total inventory value. These items require tight inventory control, accurate forecasting, and frequent review. 'B' items are of intermediate value, with about 30% of items accounting for 15% of the value. They warrant moderate control. 'C' items are the least valuable; the remaining 50% of items may only account for 5% of the value. These can be managed with simpler systems, such as a two-bin system or periodic ordering. For example, a hospital pharmacy would classify expensive chemotherapy drugs as 'A' items while common bandages would be 'C' items."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l02-f1",
          "front": "Economic Order Quantity (EOQ)",
          "back": "EOQ = sqrt(2DS/H) — the order size that minimizes total inventory cost by balancing ordering costs (S) and holding costs (H) for annual demand (D)."
        },
        {
          "id": "operations-management-301-l02-f2",
          "front": "Reorder point formula",
          "back": "ROP = (Average daily demand × Lead time) + Safety stock. Safety stock = z × σ of demand during lead time, where z reflects the desired service level."
        },
        {
          "id": "operations-management-301-l02-f3",
          "front": "ABC analysis",
          "back": "Pareto-based classification: A items (20% of SKUs, 80% of value) get tight controls; B items (30%, 15%) get moderate controls; C items (50%, 5%) use simple rules."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l02-a1",
          "type": "chart",
          "title": "EOQ Cost Trade-off Graph",
          "content": "A graph plotting ordering cost, holding cost, and total cost against order quantity, showing the EOQ at the minimum point of the total cost curve."
        }
      ]
    },
    {
      "id": "operations-management-301-l03",
      "title": "Just-in-Time Delivery and Pull Systems",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Contrast push and pull inventory systems",
        "Explain the prerequisites for successful JIT delivery",
        "Evaluate the risks and benefits of JIT in different contexts"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l03-c1",
          "title": "Push vs. Pull Systems",
          "content": "Supply chains can be driven by two distinct operating models: push and pull systems. In a push system, production decisions are based on long-term forecasts, and goods are 'pushed' through the supply chain to retailers in anticipation of customer demand. This model can achieve economies of scale but risks creating excess inventory if forecasts are inaccurate. In contrast, a pull system is driven by actual customer demand. Production and distribution are triggered by a customer's purchase, 'pulling' goods through the supply chain. This minimizes inventory and increases responsiveness. Walmart's Retail Link system is a classic example of a pull-based approach; when a product is scanned at checkout, the sale data is transmitted to suppliers, triggering a replenishment order."
        },
        {
          "id": "operations-management-301-l03-c2",
          "title": "JIT Delivery Requirements",
          "content": "Just-in-Time (JIT) is a pull-based inventory strategy that aims to receive goods only as they are needed in the production process, thereby reducing inventory holding costs. Successful implementation of JIT is contingent upon several prerequisites. First, highly reliable and geographically proximate suppliers are essential. Second, dependable and frequent transportation is required for smaller, regular shipments. Third, consistently high quality of incoming materials is critical, as there is no buffer inventory to absorb defects. Fourth, transparent information sharing between the manufacturer and suppliers is necessary for coordination. Finally, short production setup times are needed to enable the manufacturing of small batches efficiently. Failure in any of these areas can lead to production stoppages."
        },
        {
          "id": "operations-management-301-l03-c3",
          "title": "JIT Risks and Resilience",
          "content": "While JIT systems offer significant benefits in cost reduction, they are inherently vulnerable to disruptions. Events like the 2011 Tohoku earthquake and the 2021 Suez Canal blockage demonstrated how lean inventories can cripple global supply chains. In response, many firms are shifting from a pure JIT model to a more resilient 'just-in-case' strategy. This involves building strategic redundancies, such as maintaining buffer stocks for critical components and dual-sourcing from multiple suppliers or geographic regions. The modern approach is a risk-adjusted one: apply lean principles where supply is stable and disruption impact is low, but build in safety stock and diversification for high-risk, critical inputs to ensure operational continuity."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l03-f1",
          "front": "Push vs. pull inventory systems",
          "back": "Push: production driven by forecasts, products pushed to market. Pull: actual customer demand triggers replenishment backward through the supply chain."
        },
        {
          "id": "operations-management-301-l03-f2",
          "front": "JIT delivery prerequisites",
          "back": "Reliable nearby suppliers, frequent dependable transport, consistently high quality, transparent information sharing, and short setup times."
        },
        {
          "id": "operations-management-301-l03-f3",
          "front": "Just-in-case strategy",
          "back": "A resilience-focused approach involving strategic buffer stocks and dual-sourcing of critical components to mitigate supply chain disruptions."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l03-a1",
          "type": "diagram",
          "title": "Push vs. Pull System Flowchart",
          "content": "A flowchart illustrating the information and material flow in a push system (forecast-driven) versus a pull system (demand-driven, using Kanban signals)."
        }
      ]
    },
    {
      "id": "operations-management-301-l04",
      "title": "Demand Forecasting Methods",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Distinguish between qualitative and quantitative forecasting methods",
        "Apply moving averages and exponential smoothing techniques",
        "Measure forecast accuracy using MAD, MSE, and MAPE"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l04-c1",
          "title": "Qualitative Forecasting",
          "content": "Qualitative forecasting methods are used when historical data is scarce or irrelevant, such as for new product launches. These methods rely on expert judgment and subjective inputs. The Delphi method is a structured technique that solicits forecasts from a panel of experts over multiple anonymous rounds to facilitate consensus. Market research gathers data directly from potential customers through surveys and focus groups. Sales force composites aggregate forecasts from individual salespeople, who have direct customer insights. Executive opinion pools the insights of senior management to create a high-level strategic forecast. These methods were crucial for companies like Apple when forecasting initial demand for the iPhone."
        },
        {
          "id": "operations-management-301-l04-c2",
          "title": "Quantitative Forecasting",
          "content": "Quantitative forecasting relies on historical data and mathematical models. Time-series methods assume future demand is a function of past patterns. A simple moving average calculates the average demand over a fixed number of recent periods, smoothing out random fluctuations. Exponential smoothing is a sophisticated weighted average where the forecast is a combination of the most recent actual demand and the previous forecast. The formula is: New Forecast = α(latest actual) + (1-α)(previous forecast). The smoothing constant, alpha (α), ranges from 0 to 1 and determines the forecast's responsiveness to recent changes. A higher α makes the forecast more reactive, while a lower α makes it more stable."
        },
        {
          "id": "operations-management-301-l04-c3",
          "title": "Measuring Forecast Accuracy",
          "content": "Since no forecast is perfect, measuring forecast accuracy is critical for continuous improvement. Three common metrics are used. Mean Absolute Deviation (MAD) calculates the average absolute difference between forecasted and actual demand. Mean Squared Error (MSE) is the average of the squared forecast errors; by squaring errors, it penalizes larger errors more heavily. Mean Absolute Percentage Error (MAPE) expresses the average absolute error as a percentage of actual demand, making it useful for comparing accuracy across products with different sales volumes. Additionally, tracking forecast bias—the consistent tendency to over- or under-forecast—is essential for correcting systematic errors."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l04-f1",
          "front": "Delphi method",
          "back": "Qualitative forecasting technique using multiple anonymous rounds of expert surveys that converge toward consensus — useful when no historical data exists."
        },
        {
          "id": "operations-management-301-l04-f2",
          "front": "Exponential smoothing formula",
          "back": "Forecast = α × (latest actual) + (1 − α) × (previous forecast). Alpha (0–1) controls responsiveness: higher α reacts faster to changes."
        },
        {
          "id": "operations-management-301-l04-f3",
          "front": "MAPE (Mean Absolute Percentage Error)",
          "back": "Average of absolute forecast errors expressed as percentages of actual demand — enables comparison of accuracy across products with different volume levels."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l04-a1",
          "type": "chart",
          "title": "Forecasting Methods Comparison",
          "content": "A chart showing a time-series data plot with overlays of a 3-period moving average and an exponential smoothing forecast to visually compare their responsiveness and smoothing effects."
        }
      ]
    },
    {
      "id": "operations-management-301-l05",
      "title": "Checkpoint: Supply Chain & Inventory Decisions",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "operations-management-301-l05-q1",
          "text": "Annual demand is 5,000 units, ordering cost is $40 per order, and holding cost is $2 per unit per year. What is the EOQ?",
          "options": [
            {
              "id": "a",
              "text": "200 units"
            },
            {
              "id": "b",
              "text": "316 units"
            },
            {
              "id": "c",
              "text": "447 units"
            },
            {
              "id": "d",
              "text": "500 units"
            }
          ],
          "correctOptionId": "c",
          "explanation": "EOQ = sqrt(2 × 5,000 × 40 / 2) = sqrt(200,000) ≈ 447 units. This is the order quantity that minimizes total ordering plus holding costs."
        },
        {
          "id": "operations-management-301-l05-q2",
          "text": "Which supply chain strategy is best suited for fashion apparel with unpredictable demand?",
          "options": [
            {
              "id": "a",
              "text": "Efficient supply chain with lean inventory"
            },
            {
              "id": "b",
              "text": "Responsive supply chain with speed and flexibility"
            },
            {
              "id": "c",
              "text": "Cost-minimizing supply chain with large batch production"
            },
            {
              "id": "d",
              "text": "Stable supply chain with long planning horizons"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fashion products have uncertain demand, so a responsive supply chain that can quickly react to trends (like Zara's model) is the best fit."
        },
        {
          "id": "operations-management-301-l05-q3",
          "text": "In exponential smoothing, what happens when you increase the smoothing constant alpha toward 1?",
          "options": [
            {
              "id": "a",
              "text": "The forecast becomes more stable and ignores recent changes"
            },
            {
              "id": "b",
              "text": "The forecast reacts more quickly to recent actual demand"
            },
            {
              "id": "c",
              "text": "The forecast always equals the historical average"
            },
            {
              "id": "d",
              "text": "The forecast becomes a simple moving average"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Higher alpha gives more weight to the latest actual value and less to previous forecasts, making the forecast more responsive (but also more volatile)."
        },
        {
          "id": "operations-management-301-l05-q4",
          "text": "In ABC analysis, which category of items should receive the most management attention?",
          "options": [
            {
              "id": "a",
              "text": "A items — 20% of SKUs representing 80% of value"
            },
            {
              "id": "b",
              "text": "B items — 30% of SKUs representing 15% of value"
            },
            {
              "id": "c",
              "text": "C items — 50% of SKUs representing 5% of value"
            },
            {
              "id": "d",
              "text": "All items should receive equal attention"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A items account for the vast majority of inventory value, so they deserve tight controls including frequent counts, precise forecasting, and close supplier management."
        }
      ]
    },
    {
      "id": "operations-management-301-l06",
      "title": "The Bullwhip Effect and Supplier Management",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain the causes and consequences of the bullwhip effect",
        "Identify strategies to mitigate demand amplification",
        "Design supplier relationship structures from transactional to strategic partnerships"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l06-c1",
          "title": "The Bullwhip Effect Explained",
          "content": "The bullwhip effect describes the phenomenon where demand variability increases as one moves upstream in a supply chain. A small fluctuation in consumer demand can trigger progressively larger swings in orders placed by retailers, distributors, manufacturers, and raw material suppliers. This amplification leads to excess inventory, inefficient production scheduling, and increased costs throughout the chain. Procter & Gamble's classic study on Pampers diapers revealed that while consumer demand was relatively stable, factory orders fluctuated wildly, providing a clear real-world example of this costly dynamic."
        },
        {
          "id": "operations-management-301-l06-c2",
          "title": "Mitigating the Bullwhip Effect",
          "content": "The bullwhip effect is driven by four primary causes. 1) Demand Signal Processing: Firms react to local orders rather than end-customer demand. The solution is to share point-of-sale (POS) data across the supply chain. 2) Order Batching: Companies place large, infrequent orders. This can be countered with smaller, more frequent orders. 3) Price Fluctuations: Promotions cause forward buying. An everyday low pricing (EDLP) strategy can stabilize demand. 4) Shortage Gaming: Customers inflate orders during shortages. This can be managed by allocating supply based on past sales. Programs like Vendor Managed Inventory (VMI) directly address these issues by improving information flow."
        },
        {
          "id": "operations-management-301-l06-c3",
          "title": "Supplier Relationship Management",
          "content": "Supplier Relationship Management involves segmenting suppliers on a spectrum from transactional to strategic. At one end are arm's-length transactions, suitable for non-critical, standardized items where the primary driver is price. Further along are preferred supplier agreements, where a buyer commits to higher volumes for better terms. At the far end are strategic partnerships, which involve deep collaboration, joint planning, and long-term commitments for critical components. Toyota's 'Keiretsu' network is a prime example of a strategic partnership model, where investing in supplier capabilities creates a resilient, high-quality supply base that serves as a major competitive advantage."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l06-f1",
          "front": "Bullwhip effect",
          "back": "Amplification of demand variability as orders move upstream through a supply chain — small consumer demand changes create massive swings at the supplier level."
        },
        {
          "id": "operations-management-301-l06-f2",
          "front": "Four causes of the bullwhip effect",
          "back": "1) Demand signal processing (overreacting) 2) Order batching (lumpy orders) 3) Price fluctuations (forward-buying) 4) Shortage gaming (inflating orders)."
        },
        {
          "id": "operations-management-301-l06-f3",
          "front": "Vendor Managed Inventory (VMI)",
          "back": "Supplier manages the buyer's inventory levels using shared real-time demand data — reduces bullwhip effect and shifts replenishment decisions to the party with better supply-side information."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l06-a1",
          "type": "diagram",
          "title": "The Bullwhip Effect",
          "content": "A diagram showing how order variability amplifies at each upstream stage of the supply chain, from consumer to retailer to manufacturer to supplier."
        }
      ]
    },
    {
      "id": "operations-management-301-l07",
      "title": "Logistics and Distribution Network Design",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Identify the core functions of logistics, including transportation and warehousing",
        "Compare different distribution network models, such as direct shipping and cross-docking",
        "Analyze the trade-off between cost and customer service in network design"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l07-c1",
          "title": "Core Logistics Functions",
          "content": "Logistics is the part of supply chain management that plans, implements, and controls the efficient, effective forward and reverse flow and storage of goods and services. Its two primary functions are transportation and warehousing. Transportation involves the movement of products between locations, with key decisions revolving around the mode of transport (e.g., truck, rail, air, sea), which balances cost, speed, and capacity. Warehousing involves storing inventory and includes activities like receiving, storage, order picking, and shipping. Modern warehouses, often called distribution or fulfillment centers, are critical nodes for managing inventory flow."
        },
        {
          "id": "operations-management-301-l07-c2",
          "title": "Distribution Network Options",
          "content": "The design of a distribution network significantly impacts supply chain cost and performance. Common models include: 1) Direct Shipping, where products move directly from manufacturer to customer, minimizing inventory but incurring high transport costs. 2) Centralized Warehousing, using a single warehouse to serve the entire market, achieving economies of scale in inventory. 3) Decentralized Warehousing, which uses multiple regional warehouses closer to customers to reduce lead times. 4) Cross-Docking, where goods are received at a facility and immediately shipped out with minimal storage time. This model, used by Walmart, reduces inventory holding costs and speeds up delivery."
        },
        {
          "id": "operations-management-301-l07-c3",
          "title": "Network Design Trade-offs",
          "content": "The fundamental trade-off in distribution network design is between cost and customer service level. Increasing the number of warehouses generally improves customer service by reducing response time. However, it also increases total costs due to higher inventory holding costs (more safety stock is needed across the system), increased facility overhead, and potentially higher inbound transportation costs. The optimal network design finds the point that minimizes total logistics costs (inventory + transportation + facility costs) while meeting the company's strategic customer service goals."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l07-f1",
          "front": "Logistics",
          "back": "The part of supply chain management that plans, implements, and controls the flow and storage of goods and services from point of origin to point of consumption."
        },
        {
          "id": "operations-management-301-l07-f2",
          "front": "Cross-docking",
          "back": "A logistics practice where products from a supplier are distributed directly to a customer or retail chain with minimal to no handling or storage time, reducing inventory holding costs."
        },
        {
          "id": "operations-management-301-l07-f3",
          "front": "Cost-service trade-off (Logistics)",
          "back": "The core principle in network design where improving customer service levels (e.g., faster delivery via more warehouses) typically increases total logistics costs (inventory, facility, and transport)."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l07-a1",
          "type": "diagram",
          "title": "Distribution Network Models",
          "content": "A visual comparison of centralized warehousing, decentralized warehousing, and cross-docking network structures, showing product flows from factory to customer."
        }
      ]
    },
    {
      "id": "operations-management-301-l08",
      "title": "Final Assessment: Supply Chain & Inventory Management",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "operations-management-301-l08-q1",
          "text": "What is the primary vulnerability of a pure Just-in-Time delivery system?",
          "options": [
            {
              "id": "a",
              "text": "It requires too many workers"
            },
            {
              "id": "b",
              "text": "It is too expensive to implement"
            },
            {
              "id": "c",
              "text": "Minimal inventory buffers amplify the impact of supply disruptions"
            },
            {
              "id": "d",
              "text": "It only works for service industries"
            }
          ],
          "correctOptionId": "c",
          "explanation": "JIT's strength (minimal inventory) becomes a vulnerability during disruptions — with no buffer stock, even a small supply interruption can halt entire production lines, as seen during the 2011 Japan earthquake."
        },
        {
          "id": "operations-management-301-l08-q2",
          "text": "Which forecasting accuracy metric penalizes large errors more heavily than small ones?",
          "options": [
            {
              "id": "a",
              "text": "MAD (Mean Absolute Deviation)"
            },
            {
              "id": "b",
              "text": "MAPE (Mean Absolute Percentage Error)"
            },
            {
              "id": "c",
              "text": "MSE (Mean Squared Error)"
            },
            {
              "id": "d",
              "text": "Bias"
            }
          ],
          "correctOptionId": "c",
          "explanation": "MSE squares each error before averaging, so a single large error contributes disproportionately. MAD treats all errors linearly, and MAPE expresses errors as percentages."
        },
        {
          "id": "operations-management-301-l08-q3",
          "text": "Procter & Gamble found that Pampers diaper consumer usage was stable, but factory orders fluctuated wildly. This illustrates which phenomenon?",
          "options": [
            {
              "id": "a",
              "text": "Economies of scale"
            },
            {
              "id": "b",
              "text": "The bullwhip effect"
            },
            {
              "id": "c",
              "text": "Diminishing returns"
            },
            {
              "id": "d",
              "text": "Diseconomies of scope"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The bullwhip effect causes small demand fluctuations at the consumer level to amplify progressively at each upstream stage of the supply chain."
        },
        {
          "id": "operations-management-301-l08-q4",
          "text": "A company wants to minimize inventory holding costs and provide rapid delivery to dense urban markets. Which distribution strategy is most appropriate?",
          "options": [
            {
              "id": "a",
              "text": "Centralized warehousing in a remote location"
            },
            {
              "id": "b",
              "text": "Cross-docking facilities near major cities"
            },
            {
              "id": "c",
              "text": "Direct shipping from overseas factories"
            },
            {
              "id": "d",
              "text": "A single national distribution center"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cross-docking minimizes holding time as inventory is not stored long-term. Placing these facilities near cities enables rapid final-mile delivery, meeting both strategic goals. Centralized or remote options would slow down delivery."
        }
      ]
    }
  ]
};
