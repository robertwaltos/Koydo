import type { LearningModule } from "@/lib/modules/types";

export const SupplyChainManagement401Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Supply chain risks fall into several categories: (1) Operational risks — equipment failure, quality defects, capacity constraints. (2) Supply risks — supplier bankruptcy, single-source dependency, raw material shortages. (3) Demand risks — forecast errors, sudden demand spikes or drops, bullwhip effect. (4) Environmental risks — natural disasters, pandemics, climate events. (5) Geopolitical risks — trade wars, sanctions, regulatory changes. (6) Cyber risks — data breaches, ransomware attacks on logistics systems. Understanding risk categories is the first step toward managing them."
        },
        {
          "id": "supply-chain-management-401-l01-c2",
          "title": "Risk Assessment: Likelihood × Impact",
          "content": "Risk assessment involves identifying potential disruptions, estimating their likelihood (probability of occurrence), and evaluating their impact (severity if they occur). A risk heat map plots risks on a likelihood-impact matrix, allowing prioritization. High-likelihood, high-impact risks demand immediate mitigation. Low-likelihood, high-impact risks (black swans) require contingency planning. The assessment should cover all supply chain tiers — many disruptions originate at Tier 2 or beyond where visibility is limited."
        },
        {
          "id": "supply-chain-management-401-l01-c3",
          "title": "Risk Mitigation Strategies",
          "content": "Key mitigation strategies include: multi-sourcing (avoiding single-supplier dependency), safety stock buffers (extra inventory for critical items), geographic diversification (spreading production across regions), contractual protections (force majeure clauses, penalties for non-performance), supplier financial monitoring (tracking creditworthiness), business continuity planning (documented response procedures), and insurance. The right mix depends on risk appetite, industry, and the cost of mitigation versus the cost of disruption."
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
          "content": "Supply chain resilience is the ability to anticipate, prepare for, respond to, and recover from disruptions while maintaining continuous operations. It has two dimensions: resistance (the ability to withstand disruption with minimal impact) and recovery (the speed at which normal operations are restored). A resilient supply chain is not necessarily the most efficient — resilience requires investing in capabilities that may seem wasteful during normal times but prove invaluable during crises."
        },
        {
          "id": "supply-chain-management-401-l02-c2",
          "title": "Efficiency vs. Resilience Trade-off",
          "content": "Decades of lean optimization created brittle supply chains — just-in-time inventory, single sourcing, and offshore consolidation minimized costs but maximized vulnerability. The efficiency-resilience trade-off requires deliberate choices: lean where risk is low, resilient where risk is high. Toyota's response to the 2011 Fukushima disaster showed that even lean pioneers need resilience — the company subsequently increased safety stock of critical components and diversified its supplier base."
        },
        {
          "id": "supply-chain-management-401-l02-c3",
          "title": "Three Pillars of Resilience",
          "content": "Resilience rests on three pillars: (1) Redundancy — backup suppliers, safety stock, reserve capacity, and alternative transportation routes. Costly but provides immediate buffer. (2) Flexibility — the ability to rapidly switch suppliers, production sites, or logistics modes. Requires modular product designs and multi-skilled workforces. (3) Visibility — real-time knowledge of inventory, shipments, and supplier status across all tiers. Enables early warning and faster response. The most resilient supply chains invest in all three."
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
          "title": "Internet of Things (IoT) in Supply Chains",
          "content": "IoT connects physical assets — containers, pallets, vehicles, warehouse equipment — to the digital world through sensors, GPS trackers, and RFID tags. These devices generate continuous data on location, temperature, humidity, shock, and tilt. IoT enables real-time shipment tracking, automated inventory counts, predictive maintenance of equipment, and condition monitoring for cold chain compliance. Maersk tracks over 300,000 refrigerated containers globally using IoT sensors, preventing millions in spoilage losses annually."
        },
        {
          "id": "supply-chain-management-401-l03-c2",
          "title": "Blockchain for Traceability and Trust",
          "content": "Blockchain provides an immutable, shared ledger that records every transaction and handoff in the supply chain. Each participant adds verified records that cannot be altered retroactively. Applications include: provenance tracking (proving that diamonds are conflict-free or coffee is fair-trade), food safety traceability (Walmart reduced mango origin tracing from 7 days to 2.2 seconds using IBM Food Trust blockchain), counterfeit prevention in pharmaceuticals, and automated smart contracts that trigger payments upon delivery confirmation."
        },
        {
          "id": "supply-chain-management-401-l03-c3",
          "title": "AI and Machine Learning",
          "content": "AI transforms supply chains through: demand forecasting (machine learning models process hundreds of demand signals including weather, social media, and economic indicators to improve forecast accuracy by 20–50%), inventory optimization (dynamic safety stock and reorder points), autonomous warehousing (robotic picking and sorting), intelligent transportation routing (real-time route optimization considering traffic, weather, and delivery windows), and supplier risk prediction (analyzing news, financial data, and social sentiment to flag emerging risks)."
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
          "content": "Traditional demand forecasting relies on historical sales data and statistical models, updated monthly or quarterly. Demand sensing uses machine learning to incorporate real-time signals — point-of-sale data, web traffic, social media trends, weather forecasts, promotional calendars, and economic indicators — to generate short-term forecasts updated daily or even hourly. Companies using demand sensing report 30–40% reduction in forecast error and corresponding reductions in safety stock and stockouts."
        },
        {
          "id": "supply-chain-management-401-l04-c2",
          "title": "Supply Chain Control Towers",
          "content": "A supply chain control tower is a centralized platform that provides end-to-end visibility across the supply chain in real time. It integrates data from ERP systems, warehouse management, transportation management, IoT sensors, and supplier systems into a single dashboard. Control towers enable exception-based management — rather than monitoring everything, analysts focus on alerts for delays, inventory shortfalls, or quality issues. Advanced control towers use predictive analytics to flag problems before they occur."
        },
        {
          "id": "supply-chain-management-401-l04-c3",
          "title": "Reducing the Bullwhip Effect",
          "content": "The bullwhip effect amplifies demand variability upstream because each supply chain tier reacts to distorted signals rather than actual consumer demand. Real-time visibility counteracts this by sharing true demand data directly with upstream partners, eliminating information delays and distortions. Other remedies include smaller, more frequent orders (reducing batch sizes), collaborative planning with suppliers (CPFR — Collaborative Planning, Forecasting, and Replenishment), and vendor-managed inventory where suppliers access retail demand data directly."
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
          "title": "Supply Chain Carbon Footprint",
          "content": "Supply chains generate the majority of most companies' carbon emissions — often 70–90% of total footprint falls under Scope 3 (indirect emissions from the value chain). Measuring supply chain emissions requires tracking transportation fuel use, energy consumption in warehouses and factories, raw material extraction impacts, packaging waste, and product end-of-life disposal. The Greenhouse Gas Protocol provides the standard framework. Companies under increasing regulatory and investor pressure must measure, report, and reduce these emissions."
        },
        {
          "id": "supply-chain-management-401-l06-c2",
          "title": "Building Sustainable Supply Chains",
          "content": "Sustainability strategies include: switching to lower-emission transportation modes (ocean over air, rail over truck), optimizing route density and load utilization, using renewable energy in warehouses, designing packaging to minimize waste and enable recycling, sourcing from suppliers with strong environmental practices, implementing circular economy principles (take-back programs, refurbishment, remanufacturing), and nearshoring to reduce transportation distances. Companies like Unilever and Patagonia have demonstrated that supply chain sustainability can coexist with profitability."
        },
        {
          "id": "supply-chain-management-401-l06-c3",
          "title": "Lessons from Global Disruptions",
          "content": "The COVID-19 pandemic, Suez Canal blockage, semiconductor shortage, and Ukraine conflict exposed fundamental vulnerabilities: over-reliance on single-country sourcing (especially China for many categories), just-in-time inventory with no buffers, lack of visibility beyond Tier 1 suppliers, and insufficient scenario planning. Key lessons include: diversify geographically (China-plus-one strategies), hold strategic inventory buffers for critical items, invest in multi-tier visibility, build scenario planning into regular operations, and develop regional supply chain options alongside global networks."
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
