import type { LearningModule } from "@/lib/modules/types";

export const supply_chain_management_401_Module: LearningModule = {
  "id": "supply-chain-management-401",
  "title": "Digital Supply Chains & Resilience",
  "description": "Navigate supply chain disruptions and harness digital technologies. Learn to build resilient networks, leverage IoT, blockchain, and AI for real-time visibility, measure supply chain sustainability, and turn your supply chain into a competitive advantage.",
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
    "Identify major supply chain risks and mitigation strategies",
    "Design resilient supply chains that recover quickly from disruptions",
    "Evaluate digital technologies transforming supply chain operations",
    "Explain how demand sensing and real-time visibility improve decision-making",
    "Measure and reduce supply chain carbon footprint",
    "Apply lessons from global supply chain disruptions to future planning",
    "Articulate how supply chain excellence creates sustainable competitive advantage"
  ],
  "lessons": [
    {
      "id": "supply-chain-management-401-l01",
      "title": "Supply Chain Risk Management",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Categorize supply chain risks by type and source",
        "Apply a risk assessment framework to identify vulnerabilities",
        "Describe common risk mitigation strategies"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-401-l01-c1",
          "title": "Types of Supply Chain Risk",
          "content": "Effective supply chain management requires a comprehensive understanding of potential risks. These risks can be categorized into several key areas. (1) Operational risks arise from internal process failures, such as equipment breakdowns, quality control issues, or capacity constraints. (2) Supply risks involve upstream partners, including supplier insolvency, single-sourcing dependencies, or raw material shortages. (3) Demand risks stem from market volatility, such as inaccurate forecasting or sudden shifts in consumer behavior, which can trigger the bullwhip effect. (4) Environmental risks encompass external events like natural disasters, pandemics, and climate-related disruptions. (5) Geopolitical risks are linked to international relations, including trade disputes, tariffs, sanctions, and political instability. (6) Cyber risks involve threats to digital infrastructure, such as data breaches or ransomware attacks that can paralyze logistics and information systems. Recognizing these distinct categories is the first step toward developing a robust risk management framework.",
          "visualPrompt": "An infographic displaying six icons in a circle, each representing a risk category: a factory gear (Operational), a cargo ship (Supply), a demand graph (Demand), a storm cloud (Environmental), a globe with flags (Geopolitical), and a digital lock (Cyber)."
        },
        {
          "id": "supply-chain-management-401-l01-c2",
          "title": "Risk Assessment: Likelihood × Impact",
          "content": "Once risks are identified, they must be assessed to prioritize mitigation efforts. A standard methodology involves evaluating each risk along two dimensions: its likelihood of occurrence and its potential impact on operations. This analysis is often visualized using a risk heat map, a matrix that plots risks to reveal their relative severity. This tool helps managers focus resources on high-priority threats—those with high likelihood and high impact. It also highlights low-probability, high-impact 'black swan' events that require contingency planning. A critical component of this assessment is extending the analysis beyond tier-one suppliers, as many significant disruptions originate deeper within the supply network where visibility is often limited. A systematic assessment enables a targeted and efficient approach to building resilience.",
          "visualPrompt": "A 2x2 risk heat map matrix. The Y-axis is labeled 'Likelihood' (Low to High) and the X-axis is labeled 'Impact' (Low to High). The four quadrants are colored green (Low/Low), yellow, orange, and red (High/High), with example risks plotted within them."
        },
        {
          "id": "supply-chain-management-401-l01-c3",
          "title": "Risk Mitigation Strategies",
          "content": "After assessing risks, firms deploy mitigation strategies to reduce their exposure. Key strategies include: (1) Multi-sourcing to avoid dependency on a single supplier. (2) Maintaining safety stock buffers for critical components to absorb demand or supply shocks. (3) Geographic diversification of production and sourcing to insulate against regional disruptions. (4) Implementing strong contractual protections, such as force majeure clauses and supplier performance penalties. (5) Continuous financial monitoring of key suppliers to detect signs of instability. (6) Developing and testing comprehensive business continuity plans that outline responses to various disruption scenarios. (7) Utilizing insurance to transfer certain financial risks. The optimal mix of these strategies depends on a firm's risk appetite, industry dynamics, and the cost-benefit analysis of mitigation versus potential disruption losses.",
          "visualPrompt": "A diagram with a central shield icon labeled 'Risk Mitigation'. Spokes radiate out to smaller icons representing each strategy: multiple factories (Multi-sourcing), a stacked inventory pallet (Safety Stock), a world map (Diversification), and a signed contract (Contractual Protections)."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-401-l01-f1",
          "front": "Six categories of supply chain risk",
          "back": "Operational, Supply, Demand, Environmental (natural disasters/pandemics), Geopolitical (trade wars/sanctions), and Cyber (data breaches/ransomware)"
        },
        {
          "id": "supply-chain-management-401-l01-f2",
          "front": "Risk heat map",
          "back": "A matrix plotting risks by likelihood (probability) and impact (severity) — enabling prioritization of mitigation efforts on the highest-risk threats"
        },
        {
          "id": "supply-chain-management-401-l01-f3",
          "front": "Multi-sourcing as risk mitigation",
          "back": "Using multiple suppliers for critical items avoids single-source dependency — if one supplier fails, others can absorb demand, though it may reduce volume discounts"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-401-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-401-l02",
      "title": "Building Resilient Supply Chains",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define supply chain resilience and its dimensions",
        "Distinguish between efficiency and resilience strategies",
        "Explain how redundancy, flexibility, and visibility drive resilience"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-401-l02-c1",
          "title": "What Is Supply Chain Resilience?",
          "content": "Supply chain resilience is the capacity of a supply chain to anticipate, prepare for, respond to, and recover from disruptions to return to its original state or a more desirable one. It is defined by two key dimensions: resistance, the ability to withstand the impact of a disruption, and recovery, the speed at which operations are restored. A highly resilient supply chain can absorb shocks with minimal impact on performance and bounce back quickly. Importantly, resilience is not synonymous with efficiency. Investments in resilience, such as holding extra inventory or qualifying alternate suppliers, may seem inefficient during stable periods but provide critical value during a crisis, ensuring business continuity and protecting market share.",
          "visualPrompt": "A line graph showing performance over time. A vertical line marks a 'Disruption Event'. One curve (non-resilient) dips sharply and recovers slowly. A second curve (resilient) dips less and recovers quickly, with the 'resistance' and 'recovery' phases clearly labeled."
        },
        {
          "id": "supply-chain-management-401-l02-c2",
          "title": "The Efficiency vs. Resilience Trade-off",
          "content": "For decades, supply chain strategy was dominated by lean optimization paradigms focused on cost reduction. Practices like just-in-time (JIT) inventory, single-sourcing, and offshoring maximized efficiency but created inherent fragility. Recent global disruptions have exposed these vulnerabilities, forcing a strategic re-evaluation. The key challenge is now balancing efficiency with resilience. Firms must strategically decide where to remain lean and where to build in buffers. Toyota's response to the 2011 Fukushima earthquake serves as a prime example. Despite pioneering JIT, the company increased safety stocks of critical semiconductor components and mapped its deep-tier supplier network to enhance resilience, demonstrating that even the most efficient organizations must deliberately invest in robustness.",
          "visualPrompt": "A visual of a balance scale. On one side is 'Efficiency' with icons for JIT and cost reduction. On the other side is 'Resilience' with icons for safety stock and multi-sourcing. The scale is shown tipping slightly towards resilience, indicating a modern strategic shift."
        },
        {
          "id": "supply-chain-management-401-l02-c3",
          "title": "Three Pillars of Resilience",
          "content": "A resilient supply chain is built upon three foundational pillars. The first is Redundancy: creating intentional buffers such as safety stock, backup suppliers, and reserve production capacity. While costly, redundancy provides a critical safety net during disruptions. The second pillar is Flexibility: the ability to pivot rapidly in response to change. This is achieved through practices like modular product design for postponement, cross-trained labor, and adaptable logistics networks. The third pillar is Visibility: having real-time, end-to-end knowledge of inventory levels, shipment statuses, and supplier operations across all tiers. Enhanced visibility enables early detection of potential disruptions and facilitates a faster, more coordinated response. Investing across these three pillars creates a robust and adaptive supply chain capable of withstanding and recovering from shocks.",
          "visualPrompt": "An architectural graphic of a temple with three pillars. Each pillar is labeled: 'Redundancy', 'Flexibility', and 'Visibility'. Below each pillar, bullet points list key tactics (e.g., under Flexibility: 'Modular Design', 'Agile Logistics')."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-401-l02-f1",
          "front": "Supply chain resilience",
          "back": "The ability to anticipate, prepare for, respond to, and recover from disruptions — combining resistance (withstand impact) and recovery (speed of restoration)"
        },
        {
          "id": "supply-chain-management-401-l02-f2",
          "front": "Efficiency vs. resilience trade-off",
          "back": "Lean optimization minimizes cost but maximizes vulnerability — resilience requires deliberate investment in buffers and flexibility that appear wasteful during normal operations"
        },
        {
          "id": "supply-chain-management-401-l02-f3",
          "front": "Three pillars of supply chain resilience",
          "back": "Redundancy (backup capacity/stock), Flexibility (ability to switch rapidly), Visibility (real-time knowledge across all tiers)"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-401-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-401-l03",
      "title": "Digital Supply Chain Technologies",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how IoT enables supply chain visibility",
        "Describe blockchain applications in supply chain traceability",
        "Identify AI and machine learning use cases in supply chain management"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-401-l03-c1",
          "title": "Internet of Things (IoT) for Visibility",
          "content": "The Internet of Things (IoT) is a transformative technology that provides unprecedented visibility by connecting physical assets to digital networks. Through sensors, GPS trackers, and RFID tags, assets like containers, pallets, and vehicles can transmit real-time data on their location, condition, and environment. Key applications include real-time shipment tracking, automated inventory management, and predictive maintenance for equipment. In cold chains, IoT is critical for monitoring temperature and humidity to ensure product integrity. For example, shipping giant Maersk uses IoT sensors on its refrigerated containers to monitor conditions globally, preventing spoilage and saving millions. By converting physical events into digital data streams, IoT forms the foundation of a truly visible and responsive supply chain.",
          "visualPrompt": "An animated graphic showing a product's journey from factory to customer. As it moves, icons for GPS, temperature, and shock sensors appear on the package, feeding data into a central dashboard that visualizes the route and conditions in real-time."
        },
        {
          "id": "supply-chain-management-401-l03-c2",
          "title": "Blockchain for Traceability and Trust",
          "content": "Blockchain technology provides an immutable, distributed ledger that records every transaction and handoff in a product's journey. This creates a single, shared source of truth, enhancing trust and transparency among supply chain partners. Key applications include provenance tracking to verify the origin of goods like conflict-free diamonds or fair-trade coffee. In food safety, it enables rapid traceability; Walmart used blockchain to reduce the time to trace a mango's origin from 7 days to 2.2 seconds. It is also used to combat counterfeit pharmaceuticals by creating a verifiable chain of custody. Furthermore, smart contracts built on blockchain can automate processes like payments, which are executed automatically upon confirmed delivery, increasing efficiency and reducing disputes.",
          "visualPrompt": "A flowchart visualizing a product's journey. Each stage (Farm, Processor, Distributor, Retailer) is represented as a secure, linked 'block' in a chain, with each block containing transaction data and a timestamp, creating an unbreakable record."
        },
        {
          "id": "supply-chain-management-401-l03-c3",
          "title": "AI and Machine Learning for Optimization",
          "content": "Artificial Intelligence (AI) and Machine Learning (ML) are being deployed to optimize nearly every facet of supply chain management. In demand forecasting, AI analyzes diverse signals—such as weather, social media trends, and economic data—to improve accuracy by 20-50% over traditional methods. For inventory optimization, ML algorithms determine optimal stock levels and reorder points to minimize holding costs while preventing stockouts. In logistics, AI powers autonomous warehouse robots and optimizes transportation routes in real-time by factoring in traffic and delivery constraints. AI is also used for predictive risk management, analyzing news and financial data to flag potential supplier disruptions before they occur. These applications enable a shift from reactive decision-making to proactive, data-driven optimization.",
          "visualPrompt": "A mock-up of an AI-powered supply chain dashboard. One panel shows a demand forecast graph incorporating multiple data inputs (weather, social media icons). Another panel displays an optimized delivery route on a map, and a third shows a supplier risk score with contributing factors."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-401-l03-f1",
          "front": "IoT in supply chains",
          "back": "Sensors, GPS, and RFID on physical assets providing real-time data on location, temperature, and condition — enabling tracking, predictive maintenance, and cold chain compliance"
        },
        {
          "id": "supply-chain-management-401-l03-f2",
          "front": "Blockchain in supply chains",
          "back": "Immutable shared ledger recording every transaction — enables provenance tracking, food safety traceability (seconds vs. days), counterfeit prevention, and automated smart contracts"
        },
        {
          "id": "supply-chain-management-401-l03-f3",
          "front": "AI applications in supply chains",
          "back": "Demand forecasting (20–50% accuracy improvement), inventory optimization, autonomous warehousing, intelligent routing, and supplier risk prediction"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "supply-chain-management-401-l04",
      "title": "Demand Sensing & Real-Time Visibility",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define demand sensing and contrast it with traditional forecasting",
        "Explain the concept of a supply chain control tower",
        "Describe how real-time visibility reduces the bullwhip effect"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-401-l04-c1",
          "title": "From Forecasting to Demand Sensing",
          "content": "Traditional demand forecasting relies on historical sales data and statistical models, often updated on a monthly or quarterly basis, creating significant latency. Demand sensing represents a paradigm shift, using machine learning to analyze a wide array of real-time data signals. These include point-of-sale (POS) data, website traffic, social media sentiment, weather patterns, and promotional calendars. This approach generates highly accurate, short-term forecasts that can be updated daily or even hourly. By capturing near-real-time market shifts, companies can reduce forecast errors by 30-40%. This enhanced accuracy allows for more precise inventory management, leading to lower safety stock requirements and reduced instances of stockouts.",
          "visualPrompt": "A side-by-side comparison. Left: 'Traditional Forecasting' with a calendar icon and a simple historical bar chart. Right: 'Demand Sensing' with a funnel of real-time data icons (POS, social media, weather) feeding into an 'ML Algorithm' box, which outputs a dynamic, real-time forecast graph."
        },
        {
          "id": "supply-chain-management-401-l04-c2",
          "title": "Supply Chain Control Towers",
          "content": "A supply chain control tower is a centralized, data-driven hub that provides end-to-end, real-time visibility across the entire supply network. It integrates data from disparate sources—such as ERPs, warehouse management systems, transportation systems, and IoT devices—into a single, unified dashboard. This allows analysts to manage by exception, focusing on critical alerts for potential disruptions like shipment delays, inventory shortages, or quality issues, rather than monitoring every transaction. Advanced control towers incorporate predictive analytics to identify potential problems before they escalate, enabling proactive intervention. They serve as the nerve center for a modern, agile supply chain, facilitating faster and more informed decision-making.",
          "visualPrompt": "A sophisticated dashboard interface labeled 'Supply Chain Control Tower'. It features a world map with active shipping lanes, key performance indicators (KPIs), and a prominent 'Exception Alerts' panel with flashing red warnings for events like 'Port Congestion' or 'Low Inventory'."
        },
        {
          "id": "supply-chain-management-401-l04-c3",
          "title": "Reducing the Bullwhip Effect",
          "content": "The bullwhip effect describes how demand variability amplifies as one moves upstream in the supply chain, from retailer to manufacturer. This distortion is caused by information delays and lack of visibility, leading to inefficient inventory allocation, excess stock, and poor customer service. Real-time visibility is the primary antidote. By sharing actual end-customer demand data (e.g., POS data) across all tiers, partners can synchronize their planning based on reality rather than distorted order signals. Strategies to combat the effect include Collaborative Planning, Forecasting, and Replenishment (CPFR), where partners jointly manage forecasts, and Vendor-Managed Inventory (VMI), where suppliers take responsibility for replenishing stock based on shared retail data. These collaborative, data-sharing approaches dampen demand volatility and create a more stable, efficient supply chain.",
          "visualPrompt": "A diagram showing the bullwhip effect. A small, smooth wave labeled 'Consumer Demand' starts on the right. As it moves left (upstream) through 'Retailer', 'Distributor', and 'Manufacturer', the wave becomes progressively larger and more erratic, visually representing amplified demand variability."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-401-l04-f1",
          "front": "Demand sensing vs. traditional forecasting",
          "back": "Demand sensing uses ML on real-time signals (POS, social media, weather) for daily/hourly forecasts — reducing forecast error 30–40% vs. monthly historical-data-based models"
        },
        {
          "id": "supply-chain-management-401-l04-f2",
          "front": "Supply chain control tower",
          "back": "Centralized platform integrating data from all supply chain systems into real-time dashboards with exception alerts and predictive analytics"
        },
        {
          "id": "supply-chain-management-401-l04-f3",
          "front": "CPFR",
          "back": "Collaborative Planning, Forecasting, and Replenishment — a framework where trading partners share demand data and jointly plan inventory to reduce the bullwhip effect"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-401-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-401-l05",
      "title": "Checkpoint: Digital Supply Chains & Risk",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "supply-chain-management-401-l05-q1",
          "text": "Which digital technology reduced Walmart's mango origin tracing time from 7 days to 2.2 seconds?",
          "options": [
            {
              "id": "a",
              "text": "IoT sensors"
            },
            {
              "id": "b",
              "text": "Blockchain"
            },
            {
              "id": "c",
              "text": "Machine learning"
            },
            {
              "id": "d",
              "text": "RFID tags"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Walmart used IBM Food Trust blockchain to trace the provenance of mangoes, reducing the tracing time from 7 days to 2.2 seconds through an immutable, shared ledger of every supply chain handoff."
        },
        {
          "id": "supply-chain-management-401-l05-q2",
          "text": "The three pillars of supply chain resilience are:",
          "options": [
            {
              "id": "a",
              "text": "Cost, quality, and speed"
            },
            {
              "id": "b",
              "text": "Redundancy, flexibility, and visibility"
            },
            {
              "id": "c",
              "text": "Planning, sourcing, and delivery"
            },
            {
              "id": "d",
              "text": "Prevention, detection, and correction"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Supply chain resilience rests on redundancy (backup capacity), flexibility (ability to switch rapidly), and visibility (real-time knowledge across all tiers)."
        },
        {
          "id": "supply-chain-management-401-l05-q3",
          "text": "Demand sensing differs from traditional forecasting primarily because it:",
          "options": [
            {
              "id": "a",
              "text": "Uses only historical sales data"
            },
            {
              "id": "b",
              "text": "Is updated annually"
            },
            {
              "id": "c",
              "text": "Incorporates real-time signals like POS data, weather, and social media"
            },
            {
              "id": "d",
              "text": "Eliminates the need for any demand planning"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Demand sensing uses machine learning to process real-time signals — POS data, web traffic, social media, weather — for daily or hourly forecasts, unlike traditional methods that rely on historical data updated monthly."
        },
        {
          "id": "supply-chain-management-401-l05-q4",
          "text": "A supply chain control tower primarily provides:",
          "options": [
            {
              "id": "a",
              "text": "Physical storage for inventory buffers"
            },
            {
              "id": "b",
              "text": "End-to-end real-time visibility with exception alerts and predictive analytics"
            },
            {
              "id": "c",
              "text": "Air traffic control for drone deliveries"
            },
            {
              "id": "d",
              "text": "A communication channel for supplier negotiations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A supply chain control tower is a centralized digital platform that integrates data across the entire supply chain, providing real-time dashboards, exception-based alerts, and predictive analytics."
        }
      ]
    },
    {
      "id": "supply-chain-management-401-l06",
      "title": "Sustainability & Global Disruption Lessons",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Measure supply chain carbon footprint using Scope 3 emissions",
        "Describe strategies for building sustainable supply chains",
        "Apply lessons from post-pandemic global disruptions"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-401-l06-c1",
          "title": "The Supply Chain Carbon Footprint: Scope 3 Emissions",
          "content": "A company's environmental impact is overwhelmingly concentrated in its supply chain, which can account for 70-90% of its total carbon footprint. These are known as Scope 3 emissions—indirect emissions that occur across the entire value chain, from raw material extraction and supplier operations to transportation, packaging, and end-of-life product disposal. Measuring these emissions is complex but essential. The Greenhouse Gas Protocol provides a standardized framework for this accounting. As regulatory pressure and investor demands for environmental, social, and governance (ESG) transparency intensify, accurately measuring and reporting Scope 3 emissions has become a strategic imperative for credible corporate sustainability.",
          "visualPrompt": "A large pie chart where a massive slice, labeled 'Scope 3 Emissions (70-90%)', dominates. This slice is further subdivided into smaller segments like 'Purchased Goods', 'Transportation', 'Capital Goods', and 'Use of Sold Products'."
        },
        {
          "id": "supply-chain-management-401-l06-c2",
          "title": "Strategies for Sustainable Supply Chains",
          "content": "Building a sustainable supply chain involves integrating environmentally and socially responsible practices into operations. Key strategies include: optimizing logistics through route planning and modal shifting from air to sea or rail to reduce transport emissions; powering warehouses and factories with renewable energy; designing products and packaging for minimal waste and recyclability; and collaborating with suppliers to enforce sustainability standards. Adopting circular economy models—such as product take-back programs for reuse, refurbishment, or remanufacturing—is another powerful lever. Furthermore, nearshoring or regionalizing supply chains can reduce transportation distances. Leading companies like Unilever and Patagonia demonstrate that sustainability can be a source of innovation and competitive advantage, not just a cost.",
          "visualPrompt": "An infographic with several icons representing sustainability strategies: a circular arrow (Circular Economy), a train next to a ship (Modal Shifting), a factory with a solar panel (Renewable Energy), and a map with shorter supply routes (Nearshoring)."
        },
        {
          "id": "supply-chain-management-401-l06-c3",
          "title": "Lessons from Recent Global Disruptions",
          "content": "The convergence of the COVID-19 pandemic, the Suez Canal blockage, semiconductor shortages, and geopolitical conflicts exposed systemic vulnerabilities in global supply chains. Key weaknesses revealed include over-reliance on single-country sourcing (particularly China), the fragility of just-in-time inventory models with no buffers, and a critical lack of visibility beyond tier-one suppliers. In response, leading firms are adopting new strategies. These include geographic diversification through a 'China-plus-one' sourcing model, holding strategic inventory buffers of critical components, investing in multi-tier visibility platforms, embedding scenario planning into standard operations, and developing regional supply networks to complement global ones. The core lesson is that resilience must be a designed-in capability, not an afterthought.",
          "visualPrompt": "A timeline from 2020 to the present, highlighting major disruption events (Pandemic, Suez Blockage, Ukraine Conflict). Arrows point from each event to the specific supply chain vulnerability it exposed (e.g., from Pandemic to 'JIT Fragility'; from Suez Blockage to 'Chokepoint Risk')."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-401-l06-f1",
          "front": "Scope 3 emissions in supply chains",
          "back": "Indirect value chain emissions — typically 70–90% of a company's total carbon footprint — including supplier operations, transportation, packaging, and end-of-life disposal"
        },
        {
          "id": "supply-chain-management-401-l06-f2",
          "front": "China-plus-one strategy",
          "back": "Diversifying sourcing beyond a single country by maintaining primary production in China while developing alternative capacity in another country (Vietnam, India, Mexico) to reduce concentration risk"
        },
        {
          "id": "supply-chain-management-401-l06-f3",
          "front": "Key post-pandemic supply chain lessons",
          "back": "Diversify geographically, hold strategic buffers, invest in multi-tier visibility, build scenario planning, and develop regional alongside global networks"
        }
      ]
    },
    {
      "id": "supply-chain-management-401-l07",
      "title": "Final Assessment: Digital Supply Chains & Resilience",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "supply-chain-management-401-l07-q1",
          "text": "Supply chain Scope 3 emissions typically represent what percentage of a company's total carbon footprint?",
          "options": [
            {
              "id": "a",
              "text": "10–20%"
            },
            {
              "id": "b",
              "text": "30–40%"
            },
            {
              "id": "c",
              "text": "50–60%"
            },
            {
              "id": "d",
              "text": "70–90%"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Scope 3 (indirect value chain) emissions typically account for 70–90% of a company's total carbon footprint, making supply chain decarbonization essential for meaningful climate action."
        },
        {
          "id": "supply-chain-management-401-l07-q2",
          "text": "The 'resistance' dimension of supply chain resilience refers to:",
          "options": [
            {
              "id": "a",
              "text": "The speed at which normal operations are restored after disruption"
            },
            {
              "id": "b",
              "text": "The ability to withstand disruption with minimal impact"
            },
            {
              "id": "c",
              "text": "Resistance to adopting new technologies"
            },
            {
              "id": "d",
              "text": "Opposition from employees during organizational change"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Resilience has two dimensions: resistance (ability to absorb disruption with minimal impact) and recovery (speed of returning to normal). Together they determine how well a supply chain weathers shocks."
        },
        {
          "id": "supply-chain-management-401-l07-q3",
          "text": "Which strategy directly counteracts the bullwhip effect?",
          "options": [
            {
              "id": "a",
              "text": "Increasing batch order sizes"
            },
            {
              "id": "b",
              "text": "Sharing real-time point-of-sale data with upstream suppliers"
            },
            {
              "id": "c",
              "text": "Offering deeper volume discounts"
            },
            {
              "id": "d",
              "text": "Reducing the number of supply chain partners"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sharing real-time POS data gives upstream suppliers visibility into actual consumer demand, eliminating the information distortion that causes each tier to overreact — the root cause of the bullwhip effect."
        },
        {
          "id": "supply-chain-management-401-l07-q4",
          "text": "A company that turns supply chain excellence into competitive advantage does so by:",
          "options": [
            {
              "id": "a",
              "text": "Keeping the lowest possible inventory at all times"
            },
            {
              "id": "b",
              "text": "Outsourcing all logistics to the cheapest provider"
            },
            {
              "id": "c",
              "text": "Integrating resilience, digital capabilities, sustainability, and cost efficiency into a cohesive strategy"
            },
            {
              "id": "d",
              "text": "Focusing exclusively on transportation cost reduction"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Supply chain as competitive advantage requires balancing multiple dimensions — resilience, digital transformation, sustainability, and cost efficiency — into an integrated strategy, not optimizing any single factor in isolation."
        }
      ]
    }
  ]
};
