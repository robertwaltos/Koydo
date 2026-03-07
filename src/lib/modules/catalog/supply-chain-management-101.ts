import type { LearningModule } from "@/lib/modules/types";

export const supply_chain_management_101_Module: LearningModule = {
  "id": "supply-chain-management-101",
  "title": "Supply Chain Fundamentals",
  "description": "Understand how products move from raw materials to end consumers. Master the SCOR model, key supply chain metrics, and the critical role of information flow in designing efficient, responsive supply chains.",
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
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define supply chain management and its strategic importance",
    "Map the end-to-end supply chain from supplier to consumer",
    "Distinguish between supply chain management and logistics",
    "Explain the five SCOR model processes: Plan, Source, Make, Deliver, Return",
    "Calculate and interpret key supply chain metrics",
    "Describe how information flow improves supply chain performance",
    "Identify the bullwhip effect and strategies to mitigate it"
  ],
  "lessons": [
    {
      "id": "supply-chain-management-101-l01",
      "title": "What Is Supply Chain Management?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define supply chain management in modern business",
        "Explain why supply chains matter for competitive advantage",
        "Identify the main participants in a supply chain"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l01-c1",
          "title": "Defining Supply Chain Management",
          "content": "Supply Chain Management (SCM) is the management of the flow of goods and services. Think of it as the entire journey a product takes, from its initial raw materials to its arrival in a customer's hands. This journey involves sourcing materials, manufacturing products, and delivering them to the final destination. SCM connects many different organizations—like suppliers, manufacturers, and retailers—to ensure this process runs smoothly and efficiently, meeting customer demands while keeping costs down."
        },
        {
          "id": "supply-chain-management-101-l01-c2",
          "title": "Why Supply Chains Matter",
          "content": "A company's supply chain can account for 60-70% of its total costs, making it a powerful source of competitive advantage. Companies like Amazon, Zara, and Toyota dominate their industries because they have mastered their supply chains. An efficient supply chain leads to lower costs, faster delivery, higher quality, and greater customer satisfaction. Conversely, a poorly managed supply chain can lead to stockouts, delays, and quality issues, resulting in lost sales and a damaged reputation."
        },
        {
          "id": "supply-chain-management-101-l01-c3",
          "title": "Key Participants in a Supply Chain",
          "content": "A supply chain involves many players. 'Upstream' participants are closer to the raw materials and include suppliers of raw materials (like miners or farmers) and component manufacturers. The main 'focal company' assembles the final product. 'Downstream' participants move the product toward the customer and include distributors, wholesalers, and retailers. Supporting these core players are logistics providers who handle transportation, financial institutions for payments, and technology vendors who provide essential software and systems."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l01-f1",
          "front": "Supply chain management (SCM)",
          "back": "The coordination of sourcing, procurement, production, and delivery activities across multiple organizations from raw materials to the final consumer."
        },
        {
          "id": "supply-chain-management-101-l01-f2",
          "front": "Why do supply chains matter competitively?",
          "back": "They account for 60–70% of total product cost and directly impact speed, quality, cost, and customer satisfaction — making them a key source of competitive advantage."
        },
        {
          "id": "supply-chain-management-101-l01-f3",
          "front": "Upstream vs. Downstream",
          "back": "Upstream: Activities closer to raw materials (e.g., suppliers). Downstream: Activities closer to the end customer (e.g., distributors, retailers)."
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l01-a1",
          "type": "image",
          "title": "Supply Chain Participants",
          "content": "An infographic showing the flow from upstream (raw material suppliers) to a central focal company (manufacturer) and then downstream (distributors, retailers, consumers)."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l02",
      "title": "The End-to-End Supply Chain",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Trace the journey of a product from raw material to consumer",
        "Identify the three main flows in a supply chain",
        "Explain the concept of supply chain tiers"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l02-c1",
          "title": "Product Journey: From Raw Material to Consumer",
          "content": "Let's trace a smartphone's journey. It begins with raw materials like lithium mined in Australia. This lithium is processed into battery cells in China. The phone is then assembled in Vietnam using components from around the world, like chips from Taiwan and glass from Japan. Once assembled, the phones are shipped to global distribution centers and then sent to retail stores or directly to online customers. Each step adds value, but also introduces cost, time, and risk."
        },
        {
          "id": "supply-chain-management-101-l02-c2",
          "title": "The Three Core Flows",
          "content": "Every supply chain is defined by three essential flows. The Product Flow is the physical movement of goods from suppliers to customers. The Information Flow is the bidirectional exchange of data, such as demand forecasts, order status, and shipment tracking. The Financial Flow involves the movement of money, including payments, credit terms, and invoices. To be successful, a company must manage and optimize all three flows simultaneously."
        },
        {
          "id": "supply-chain-management-101-l02-c3",
          "title": "Understanding Supply Chain Tiers",
          "content": "Supply chains are structured in levels, or 'tiers.' Tier 1 suppliers sell directly to the main (focal) company. Tier 2 suppliers provide materials to Tier 1 suppliers, and so on. Similarly, Tier 1 customers (like distributors) buy directly from the focal company, while Tier 2 customers (like retailers) buy from them. Most companies only have good visibility into their Tier 1 partners. This lack of end-to-end visibility can hide significant risks, as a disruption at a Tier 3 supplier can ripple through the entire chain."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l02-f1",
          "front": "Three flows in a supply chain",
          "back": "Product flow (physical goods), Information flow (data and forecasts, bidirectional), Financial flow (payments, credit, invoicing)."
        },
        {
          "id": "supply-chain-management-101-l02-f2",
          "front": "Supply chain tiers",
          "back": "Tier 1 suppliers deal directly with the focal company; Tier 2 supply to Tier 1; Tier 3 supply to Tier 2. Visibility typically drops beyond Tier 1."
        },
        {
          "id": "supply-chain-management-101-l02-f3",
          "front": "Why is end-to-end visibility important?",
          "back": "Disruptions at any tier can cascade through the entire chain. Limited visibility beyond Tier 1 creates hidden risks and missed optimization opportunities."
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l02-a1",
          "type": "image",
          "title": "The Three Flows Diagram",
          "content": "A diagram showing a simple supply chain with three arrows: a 'Product' arrow flowing downstream, a 'Financial' arrow flowing upstream, and a bidirectional 'Information' arrow."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l03",
      "title": "Supply Chain vs. Logistics",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Define logistics and its core functions",
        "Explain how logistics fits within the broader supply chain",
        "Distinguish between inbound, outbound, and reverse logistics"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l03-c1",
          "title": "What is Logistics?",
          "content": "Logistics is the part of the supply chain that plans, implements, and controls the efficient flow and storage of goods from their point of origin to the point of consumption. Its core functions include transportation, warehousing, inventory management, order fulfillment, and materials handling. While it's a critical component, logistics is just one piece of the larger supply chain puzzle."
        },
        {
          "id": "supply-chain-management-101-l03-c2",
          "title": "SCM is Broader Than Logistics",
          "content": "Think of logistics as the 'movement' part of the supply chain. Supply Chain Management is much broader. SCM includes logistics, but also covers strategic activities like supplier selection and relationship management, demand planning, product design, and collaboration across the entire network of companies. In short, logistics is about moving and storing things efficiently, while SCM is about managing the entire network to deliver value."
        },
        {
          "id": "supply-chain-management-101-l03-c3",
          "title": "Types of Logistics",
          "content": "Logistics can be broken down into three main types. Inbound Logistics manages the flow of raw materials and components from suppliers into the manufacturing plant. Outbound Logistics handles the delivery of finished goods from the manufacturer to the end customer. Reverse Logistics manages the backward flow of products for returns, repairs, recycling, or disposal. This last category is often overlooked but can account for 5-10% of total supply chain costs."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l03-f1",
          "front": "Logistics",
          "back": "The planning, execution, and control of the movement and storage of goods, services, and information from origin to consumption."
        },
        {
          "id": "supply-chain-management-101-l03-f2",
          "front": "How does SCM differ from logistics?",
          "back": "SCM is broader—it includes strategic sourcing, demand planning, and supplier relationships, while logistics focuses on the execution of movement and storage."
        },
        {
          "id": "supply-chain-management-101-l03-f3",
          "front": "Three types of logistics",
          "back": "Inbound (materials to manufacturer), Outbound (finished goods to customer), and Reverse (returns, recycling, disposal)."
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l03-a1",
          "type": "image",
          "title": "SCM vs. Logistics",
          "content": "A Venn diagram where a large circle labeled 'Supply Chain Management' contains a smaller circle labeled 'Logistics', illustrating that logistics is a component of SCM."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l04",
      "title": "The SCOR Model",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain the five processes of the SCOR model",
        "Describe how Plan integrates the other four processes",
        "Apply SCOR to benchmark supply chain performance"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l04-c1",
          "title": "Overview of the SCOR Model",
          "content": "The Supply Chain Operations Reference (SCOR) model is a standard framework used to describe, measure, and improve supply chain processes. Developed by the Association for Supply Chain Management (ASCM), it provides a common language and set of best practices. The model is built around five core management processes: Plan, Source, Make, Deliver, and Return. Companies use SCOR to benchmark their performance against industry standards and identify areas for improvement."
        },
        {
          "id": "supply-chain-management-101-l04-c2",
          "title": "Plan, Source, and Make",
          "content": "Plan is the strategic process that coordinates all other activities. It includes demand forecasting, supply planning, and setting inventory and capacity strategies. Source involves all activities related to procuring goods and services, from qualifying suppliers to purchasing and receiving materials. Make covers all activities that transform raw materials into finished products, including manufacturing, assembly, testing, and packaging."
        },
        {
          "id": "supply-chain-management-101-l04-c3",
          "title": "Deliver, Return, and Enable",
          "content": "Deliver encompasses all order management, warehousing, and transportation activities required to get finished products to customers, including last-mile delivery. Return manages the reverse flow of goods for repairs, warranties, excess inventory, or recycling. Supporting these five core processes are Enable processes, which are management activities like establishing business rules, managing data, overseeing the workforce, and handling contracts."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l04-f1",
          "front": "SCOR model",
          "back": "A standardized framework with five core processes (Plan, Source, Make, Deliver, Return) for describing, measuring, and improving supply chains."
        },
        {
          "id": "supply-chain-management-101-l04-f2",
          "front": "The five SCOR processes",
          "back": "Plan (orchestrates all), Source (purchasing/receiving), Make (production/assembly), Deliver (order fulfillment/shipping), Return (reverse flow/returns)."
        },
        {
          "id": "supply-chain-management-101-l04-f3",
          "front": "SCOR Enable processes",
          "back": "Management activities—business rules, data management, workforce skills, contracts—that support the five core SCOR processes."
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l04-a1",
          "type": "image",
          "title": "The SCOR Framework",
          "content": "A pentagonal diagram with 'Plan' in the center and 'Source', 'Make', 'Deliver', and 'Return' at the points, showing how Plan connects to all other processes."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l05",
      "title": "Checkpoint: Supply Chain Foundations",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "supply-chain-management-101-l05-q1",
          "text": "Which of the following is NOT one of the five core SCOR model processes?",
          "options": [
            {
              "id": "a",
              "text": "Plan"
            },
            {
              "id": "b",
              "text": "Source"
            },
            {
              "id": "c",
              "text": "Market"
            },
            {
              "id": "d",
              "text": "Return"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The five SCOR processes are Plan, Source, Make, Deliver, and Return. 'Market' is a business function but not a core SCOR process."
        },
        {
          "id": "supply-chain-management-101-l05-q2",
          "text": "What is the key difference between logistics and supply chain management?",
          "options": [
            {
              "id": "a",
              "text": "Logistics is broader than supply chain management."
            },
            {
              "id": "b",
              "text": "Supply chain management includes logistics plus strategic sourcing, demand planning, and cross-organizational coordination."
            },
            {
              "id": "c",
              "text": "They are identical concepts with different names."
            },
            {
              "id": "d",
              "text": "Logistics deals with information while SCM deals with physical goods."
            }
          ],
          "correctOptionId": "b",
          "explanation": "SCM is the broader discipline that encompasses logistics (movement and storage) plus strategic sourcing, supplier management, demand planning, and cross-organizational collaboration."
        },
        {
          "id": "supply-chain-management-101-l05-q3",
          "text": "Which type of logistics handles product returns, recalls, and recycling?",
          "options": [
            {
              "id": "a",
              "text": "Inbound logistics"
            },
            {
              "id": "b",
              "text": "Outbound logistics"
            },
            {
              "id": "c",
              "text": "Reverse logistics"
            },
            {
              "id": "d",
              "text": "Forward logistics"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Reverse logistics manages the backward flow of products—returns, recalls, recycling, and disposal."
        },
        {
          "id": "supply-chain-management-101-l05-q4",
          "text": "A Tier 2 supplier in a supply chain is best described as:",
          "options": [
            {
              "id": "a",
              "text": "A company that sells directly to end consumers."
            },
            {
              "id": "b",
              "text": "A supplier that provides materials to the focal company's direct suppliers."
            },
            {
              "id": "c",
              "text": "The most important supplier in the network."
            },
            {
              "id": "d",
              "text": "A backup supplier used only during disruptions."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tier 2 suppliers provide materials to Tier 1 suppliers, who in turn sell directly to the focal company. The tier number indicates distance from the focal firm, not importance."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l06",
      "title": "Supply Chain Metrics & Performance",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Calculate fill rate, lead time, and inventory turns",
        "Explain the trade-offs between supply chain metrics",
        "Use metrics to diagnose supply chain problems"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l06-c1",
          "title": "Fill Rate and Order Accuracy",
          "content": "Fill Rate measures the percentage of customer demand that is met immediately from available stock. A 95% fill rate means 5% of orders could not be fulfilled on the spot. Order Accuracy measures the percentage of orders delivered correctly—the right item, right quantity, and no damage. World-class supply chains aim for fill rates above 98% and order accuracy over 99%, as these metrics directly impact customer satisfaction and loyalty."
        },
        {
          "id": "supply-chain-management-101-l06-c2",
          "title": "Lead Time and Cycle Time",
          "content": "Lead Time is the total time from when a customer places an order until they receive it. It includes order processing, production, and transportation time. Cycle Time, in contrast, is the time it takes to complete a single internal process, like manufacturing one unit. Reducing lead time is a major competitive advantage. Amazon, for example, has built its dominance by systematically shrinking delivery lead times from days to hours."
        },
        {
          "id": "supply-chain-management-101-l06-c3",
          "title": "Inventory Turns and Cash-to-Cash Cycle",
          "content": "Inventory Turns measures how many times a company sells and replaces its inventory in a given period. It's calculated as Cost of Goods Sold divided by Average Inventory. Higher turns are better, as they indicate efficient inventory management. The Cash-to-Cash Cycle is the time between paying suppliers for materials and collecting payment from customers. A shorter cycle is ideal. Dell famously achieved a negative cash-to-cash cycle, collecting from customers before paying its suppliers."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l06-f1",
          "front": "Fill rate",
          "back": "Percentage of customer demand met immediately from available stock. World-class supply chains achieve above 98%."
        },
        {
          "id": "supply-chain-management-101-l06-f2",
          "front": "Inventory turns",
          "back": "Cost of Goods Sold ÷ Average Inventory. Measures how often inventory is sold and replaced; higher turns mean less capital is tied up."
        },
        {
          "id": "supply-chain-management-101-l06-f3",
          "front": "Cash-to-cash cycle",
          "back": "Time from paying suppliers to collecting from customers. Shorter (or negative) cycles free up working capital for other investments."
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l06-a1",
          "type": "image",
          "title": "Performance Dashboard",
          "content": "A visual dashboard with gauges or charts displaying key metrics like Fill Rate (98%), Inventory Turns (8.5), and Cash-to-Cash Cycle (25 days)."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l07",
      "title": "Information Flow & The Bullwhip Effect",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe how information sharing improves supply chain performance",
        "Define the bullwhip effect and its causes",
        "Identify strategies to mitigate the bullwhip effect"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l07-c1",
          "title": "Information: The Supply Chain's Nervous System",
          "content": "Accurate and timely information is the lifeblood of a modern supply chain. Sharing data like real-time sales figures, inventory levels, and production schedules allows all partners to synchronize their activities. This visibility reduces uncertainty, allowing companies to hold less safety stock, respond faster to market changes, and improve overall efficiency. Without good information flow, partners are forced to guess, leading to costly errors."
        },
        {
          "id": "supply-chain-management-101-l07-c2",
          "title": "The Bullwhip Effect Explained",
          "content": "The bullwhip effect describes how small fluctuations in demand at the retail level can become amplified as they move upstream in the supply chain. A retailer might see a slight increase in sales and place a slightly larger order with the distributor. The distributor, seeing this larger order, places an even larger one with the manufacturer, who in turn orders even more raw materials. This creates massive swings in inventory and production that are disconnected from actual end-customer demand."
        },
        {
          "id": "supply-chain-management-101-l07-c3",
          "title": "Taming the Bullwhip",
          "content": "The key to mitigating the bullwhip effect is to reduce uncertainty and improve coordination. Strategies include: direct information sharing (like giving suppliers access to point-of-sale data), reducing lead times so partners don't have to forecast as far into the future, and collaborative planning, forecasting, and replenishment (CPFR) programs where partners work together to align their plans."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l07-f1",
          "front": "Bullwhip effect",
          "back": "The amplification of demand variability as orders move upstream from the customer to the raw material supplier."
        },
        {
          "id": "supply-chain-management-101-l07-f2",
          "front": "What causes the bullwhip effect?",
          "back": "Lack of information sharing, long lead times, and independent forecasting at each stage of the supply chain."
        },
        {
          "id": "supply-chain-management-101-l07-f3",
          "front": "How can you mitigate the bullwhip effect?",
          "back": "By sharing real-time demand data, reducing lead times, and collaborating with supply chain partners on forecasting and planning."
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l07-a1",
          "type": "image",
          "title": "Visualizing the Bullwhip Effect",
          "content": "A graph showing four lines. The bottom line (Consumer Demand) has small variations. Each line above it (Retailer Orders, Distributor Orders, Manufacturer Orders) shows progressively larger and more erratic swings."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l08",
      "title": "Final Assessment: Supply Chain Fundamentals",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "supply-chain-management-101-l08-q1",
          "text": "A company has a Cost of Goods Sold (COGS) of $10 million and an average inventory of $2 million. What are its inventory turns?",
          "options": [
            {
              "id": "a",
              "text": "2 turns"
            },
            {
              "id": "b",
              "text": "5 turns"
            },
            {
              "id": "c",
              "text": "8 turns"
            },
            {
              "id": "d",
              "text": "20 turns"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Inventory turns = COGS ÷ Average Inventory = $10M ÷ $2M = 5 turns. The company sells and replaces its entire inventory five times per period."
        },
        {
          "id": "supply-chain-management-101-l08-q2",
          "text": "The bullwhip effect is best described as:",
          "options": [
            {
              "id": "a",
              "text": "A reduction in demand variability as orders move upstream."
            },
            {
              "id": "b",
              "text": "An amplification of demand variability as orders move upstream through the supply chain."
            },
            {
              "id": "c",
              "text": "The tendency for lead times to decrease at each supply chain tier."
            },
            {
              "id": "d",
              "text": "A method for improving forecast accuracy."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The bullwhip effect describes how small fluctuations in consumer demand get amplified as orders move upstream—each tier over-reacts, causing excessive inventory swings."
        },
        {
          "id": "supply-chain-management-101-l08-q3",
          "text": "Which of the three supply chain flows is typically BIDIRECTIONAL?",
          "options": [
            {
              "id": "a",
              "text": "Product flow"
            },
            {
              "id": "b",
              "text": "Financial flow"
            },
            {
              "id": "c",
              "text": "Information flow"
            },
            {
              "id": "d",
              "text": "All three flows are strictly one-directional."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Information flow moves bidirectionally—demand data flows upstream while supply status and tracking data flow downstream. Product flow is primarily downstream (with reverse logistics exceptions), and financial flow is primarily upstream."
        },
        {
          "id": "supply-chain-management-101-l08-q4",
          "text": "Which SCOR process orchestrates and integrates all other supply chain processes?",
          "options": [
            {
              "id": "a",
              "text": "Source"
            },
            {
              "id": "b",
              "text": "Make"
            },
            {
              "id": "c",
              "text": "Plan"
            },
            {
              "id": "d",
              "text": "Deliver"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Plan is the integrating process in SCOR—it encompasses demand forecasting, supply planning, and inventory strategy that coordinate Source, Make, Deliver, and Return."
        }
      ]
    }
  ]
};
