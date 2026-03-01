import type { LearningModule } from "@/lib/modules/types";

export const OperationsManagement301Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "A supply chain encompasses every organization, activity, and resource involved in moving a product from raw materials to the end customer. It extends far beyond a company's own walls: Apple's supply chain includes mining companies in Congo extracting cobalt, refineries in China, component manufacturers in South Korea and Japan, assembly plants in China and India, and retail stores and logistics networks worldwide. Supply chain management coordinates flows of materials, information, and money across this network to maximize total value delivered to the customer."
        },
        {
          "id": "operations-management-301-l01-c2",
          "title": "Efficient vs. Responsive Supply Chains",
          "content": "Marshall Fisher's framework distinguishes two strategies. Efficient supply chains minimize cost for predictable, mature products with stable demand — think commodity goods like canned soup, where the priority is low inventory, high utilization, and lean operations. Responsive supply chains prioritize speed and flexibility for innovative products with uncertain demand — like fashion apparel, where the ability to react quickly to trends matters more than minimizing unit cost. Zara's responsive chain delivers new designs in two weeks; a commodity chemical producer optimizes for cost over months."
        },
        {
          "id": "operations-management-301-l01-c3",
          "title": "Supply Chain Fit",
          "content": "Mismatch between product type and supply chain strategy destroys value. A responsive supply chain for a commodity product adds unnecessary cost. An efficient supply chain for a fashion product leads to stockouts on hot items and markdowns on cold ones. Hau Lee's uncertainty framework adds supply-side uncertainty: when both demand and supply are uncertain (like new technology products), an agile supply chain that combines responsiveness with supply-risk hedging is needed. Companies like Dell pioneered postponement — delaying customization until orders arrive — to achieve both efficiency and responsiveness."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l01-f1",
          "front": "Supply chain management",
          "back": "Coordinating flows of materials, information, and money across all organizations from raw materials to end customer to maximize total value delivered"
        },
        {
          "id": "operations-management-301-l01-f2",
          "front": "Efficient vs. responsive supply chain",
          "back": "Efficient: minimizes cost for stable-demand products (low inventory, high utilization). Responsive: prioritizes speed and flexibility for uncertain-demand products (quick reaction, buffer capacity)"
        },
        {
          "id": "operations-management-301-l01-f3",
          "front": "Postponement strategy",
          "back": "Delaying final product customization until customer orders are received — combining upstream efficiency with downstream responsiveness (e.g., Dell's build-to-order model)"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "EOQ answers a fundamental question: how much should we order each time? Ordering in large batches reduces ordering costs (fewer purchase orders, deliveries, and receiving inspections) but increases holding costs (warehouse space, capital tied up, obsolescence risk). EOQ finds the sweet spot where total cost is minimized: EOQ = sqrt(2DS/H), where D is annual demand, S is the cost per order, and H is the annual holding cost per unit. A distributor with annual demand of 10,000 units, $50 per order, and $5 holding cost per unit would calculate EOQ = sqrt(2 × 10,000 × 50 / 5) = 447 units per order."
        },
        {
          "id": "operations-management-301-l02-c2",
          "title": "Reorder Point and Safety Stock",
          "content": "The reorder point tells you when to place an order: ROP = (average daily demand × lead time) + safety stock. If demand is 40 units per day and lead time is 5 days, the base reorder point is 200 units. But demand and lead time both vary. Safety stock is the buffer that protects against these uncertainties. It is calculated based on the desired service level and the standard deviation of demand during lead time: SS = z × σ_dLT, where z is the number of standard deviations for the target service level (e.g., z = 1.65 for 95% service). Higher service levels require exponentially more safety stock."
        },
        {
          "id": "operations-management-301-l02-c3",
          "title": "ABC Analysis",
          "content": "Not all inventory items deserve the same attention. ABC analysis applies the Pareto principle: A items (roughly 20% of SKUs) account for about 80% of total inventory value and receive the tightest controls — frequent cycle counts, precise forecasting, and close supplier management. B items (30% of SKUs, 15% of value) get moderate attention. C items (50% of SKUs, 5% of value) are managed with simple rules like two-bin systems. A hospital pharmacy might closely manage expensive chemotherapy drugs (A items) while using automated reorder for bandages (C items)."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l02-f1",
          "front": "Economic Order Quantity (EOQ)",
          "back": "EOQ = sqrt(2DS/H) — the order size that minimizes total inventory cost by balancing ordering costs (S) and holding costs (H) for annual demand (D)"
        },
        {
          "id": "operations-management-301-l02-f2",
          "front": "Reorder point formula",
          "back": "ROP = (Average daily demand × Lead time) + Safety stock. Safety stock = z × σ of demand during lead time, where z reflects the desired service level"
        },
        {
          "id": "operations-management-301-l02-f3",
          "front": "ABC analysis",
          "back": "Pareto-based classification: A items (20% of SKUs, 80% of value) get tight controls; B items (30%, 15%) get moderate controls; C items (50%, 5%) use simple rules"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "In a push system, production and distribution are driven by forecasts — you make products and push them through the supply chain hoping customers buy them. In a pull system, actual customer demand triggers replenishment backward through the chain. Walmart's Retail Link system exemplifies pull: when a tube of toothpaste is scanned at checkout, the data flows to Procter & Gamble, triggering manufacturing and shipping of a replacement. Pull systems dramatically reduce inventory because they respond to real demand rather than forecasted demand."
        },
        {
          "id": "operations-management-301-l03-c2",
          "title": "JIT Delivery Requirements",
          "content": "Just-in-time delivery requires a supporting ecosystem. Suppliers must be reliable and often geographically close — Toyota's suppliers cluster within 60 miles of its assembly plants. Transportation must be frequent and dependable: small, frequent shipments replace large, infrequent ones. Quality must be consistently high because there is no buffer stock to absorb defective deliveries. Information sharing must be transparent so suppliers see real-time demand. Setup times must be short to enable small-batch production. Without these foundations, JIT creates stockouts rather than savings."
        },
        {
          "id": "operations-management-301-l03-c3",
          "title": "JIT Risks and Resilience",
          "content": "JIT's greatest strength — minimal inventory — is also its greatest vulnerability. The 2011 Tohoku earthquake in Japan and the 2021 Suez Canal blockage exposed how thin inventories amplify disruptions across global supply chains. Auto manufacturers idled plants for weeks waiting for a single missing component. Post-pandemic, many companies shifted to 'just-in-case' strategies, adding strategic buffer stocks and dual-sourcing critical components. The key is risk-adjusted JIT: applying lean inventory management where disruptions are unlikely and consequences are manageable, while maintaining safety buffers for critical and sole-sourced items."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l03-f1",
          "front": "Push vs. pull inventory systems",
          "back": "Push: production driven by forecasts, products pushed to market. Pull: actual customer demand triggers replenishment backward through the supply chain"
        },
        {
          "id": "operations-management-301-l03-f2",
          "front": "JIT delivery prerequisites",
          "back": "Reliable nearby suppliers, frequent dependable transport, consistently high quality, transparent information sharing, and short setup times"
        },
        {
          "id": "operations-management-301-l03-f3",
          "front": "Just-in-case strategy",
          "back": "Post-pandemic shift from pure JIT to maintaining strategic buffer stocks and dual-sourcing critical components to improve supply chain resilience"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "Qualitative methods rely on expert judgment when historical data is unavailable or unreliable — new product launches, market disruptions, or emerging technologies. The Delphi method surveys a panel of experts through multiple anonymous rounds, converging toward consensus. Market research uses surveys, focus groups, and test markets. Sales force composites aggregate individual sales representatives' estimates. Executive opinion pools senior leadership's strategic insights. These methods are subjective but invaluable when launching a product with no sales history, such as when Apple forecasted initial iPhone demand."
        },
        {
          "id": "operations-management-301-l04-c2",
          "title": "Quantitative Forecasting",
          "content": "Time-series methods use historical patterns to predict the future. A simple moving average smooths fluctuations by averaging the last n periods — a 3-month moving average of sales of 100, 120, and 110 forecasts 110. Weighted moving averages assign more importance to recent data. Exponential smoothing is the workhorse of demand planning: Forecast = α × (latest actual) + (1 − α) × (previous forecast), where α (0 to 1) controls how quickly the forecast reacts to new data. High α values (0.3–0.5) respond quickly to changes; low values (0.05–0.1) produce stable forecasts."
        },
        {
          "id": "operations-management-301-l04-c3",
          "title": "Measuring Forecast Accuracy",
          "content": "No forecast is perfect, so measuring error is essential. Mean Absolute Deviation (MAD) averages the absolute differences between forecasted and actual values — easy to interpret as the typical error in the same units as demand. Mean Squared Error (MSE) squares errors before averaging, penalizing large misses more heavily. Mean Absolute Percentage Error (MAPE) expresses errors as percentages, making it easy to compare accuracy across products with different demand volumes. A MAPE of 15% means forecasts are typically off by 15%. Tracking bias (consistently over- or under-forecasting) is equally important."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l04-f1",
          "front": "Delphi method",
          "back": "Qualitative forecasting technique using multiple anonymous rounds of expert surveys that converge toward consensus — useful when no historical data exists"
        },
        {
          "id": "operations-management-301-l04-f2",
          "front": "Exponential smoothing formula",
          "back": "Forecast = α × (latest actual) + (1 − α) × (previous forecast). Alpha (0–1) controls responsiveness: higher α reacts faster to changes"
        },
        {
          "id": "operations-management-301-l04-f3",
          "front": "MAPE (Mean Absolute Percentage Error)",
          "back": "Average of absolute forecast errors expressed as percentages of actual demand — enables comparison of accuracy across products with different volume levels"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "explanation": "EOQ = sqrt(2 × 5,000 × 40 / 2) = sqrt(200,000) = 447 units. This is the order quantity that minimizes total ordering plus holding costs."
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
          "content": "The bullwhip effect describes how small fluctuations in consumer demand get amplified as orders move upstream through the supply chain. A 5% increase in retail sales might trigger a 10% order increase by the distributor, a 20% increase by the manufacturer, and a 40% surge at the raw materials supplier. Each stage adds safety margins and rounds up orders, creating wild swings in production and inventory. Procter & Gamble discovered this when studying Pampers diapers: while consumer usage was stable, factory orders fluctuated dramatically."
        },
        {
          "id": "operations-management-301-l06-c2",
          "title": "Mitigating the Bullwhip Effect",
          "content": "Four root causes drive the bullwhip effect, each with a remedy. Demand signal processing (overreacting to short-term demand) is countered by sharing point-of-sale data across the chain. Order batching (placing large infrequent orders) is reduced by smaller, more frequent orders and consolidated shipments. Price fluctuations (forward-buying during promotions) are addressed by everyday low pricing strategies. Shortage gaming (inflating orders during supply constraints) is managed through allocation based on actual sales history. Walmart's Vendor Managed Inventory program, where suppliers manage shelf stock based on real-time data, exemplifies these solutions."
        },
        {
          "id": "operations-management-301-l06-c3",
          "title": "Supplier Relationship Management",
          "content": "Supplier relationships exist on a spectrum. Arm's-length transactions work for commodity purchases where switching costs are low — buying office supplies from the cheapest vendor. Preferred supplier agreements offer better terms in exchange for volume commitments. Strategic partnerships involve deep integration: shared systems, joint product development, and long-term contracts. Toyota maintains strategic partnerships with key suppliers, investing in their capabilities and sharing productivity gains. Keiretsu-style relationships built Toyota's supplier base into a competitive weapon, reducing costs 3% annually while improving quality."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l06-f1",
          "front": "Bullwhip effect",
          "back": "Amplification of demand variability as orders move upstream through a supply chain — small consumer demand changes create massive swings at the supplier level"
        },
        {
          "id": "operations-management-301-l06-f2",
          "front": "Four causes of the bullwhip effect",
          "back": "1) Demand signal processing (overreacting) 2) Order batching (lumpy orders) 3) Price fluctuations (forward-buying) 4) Shortage gaming (inflating orders)"
        },
        {
          "id": "operations-management-301-l06-f3",
          "front": "Vendor Managed Inventory (VMI)",
          "back": "Supplier manages the buyer's inventory levels using shared real-time demand data — reduces bullwhip effect and shifts replenishment decisions to the party with better supply-side information"
        }
      ]
    },
    {
      "id": "operations-management-301-l07",
      "title": "Final Assessment: Supply Chain & Inventory Management",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "operations-management-301-l07-q1",
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
          "id": "operations-management-301-l07-q2",
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
          "id": "operations-management-301-l07-q3",
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
          "id": "operations-management-301-l07-q4",
          "text": "Dell's build-to-order model, where computers are customized only after customer orders are placed, is an example of which strategy?",
          "options": [
            {
              "id": "a",
              "text": "Forward integration"
            },
            {
              "id": "b",
              "text": "Postponement"
            },
            {
              "id": "c",
              "text": "Vertical integration"
            },
            {
              "id": "d",
              "text": "Push-based manufacturing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Postponement delays final product configuration until actual demand is known. Dell holds generic components and assembles customized computers only when orders arrive, combining upstream efficiency with downstream responsiveness."
        }
      ]
    }
  ]
};
