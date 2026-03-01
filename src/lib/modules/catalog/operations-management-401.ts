import type { LearningModule } from "@/lib/modules/types";

export const OperationsManagement401Module: LearningModule = {
  "id": "operations-management-401",
  "title": "Operations Strategy & Digital Transformation",
  "description": "Align operations with business strategy and prepare for the future of manufacturing and services. Explore Industry 4.0, digital twins, predictive maintenance, service operations, circular economy principles, and the strategic decisions behind global operations and reshoring.",
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
    "Align operations strategy with corporate and business-level strategy",
    "Describe Industry 4.0 technologies and their impact on manufacturing",
    "Explain how digital twins simulate and optimize operational systems",
    "Design a predictive maintenance program using IoT and analytics",
    "Apply operations management principles to service environments",
    "Evaluate circular economy models for sustainable operations",
    "Analyze reshoring versus offshoring decisions using a total cost framework"
  ],
  "lessons": [
    {
      "id": "operations-management-401-l01",
      "title": "Operations Strategy and Competitive Priorities",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Define operations strategy and its link to business strategy",
        "Explain the four competitive priorities: cost, quality, speed, and flexibility",
        "Describe the concept of order winners and order qualifiers"
      ],
      "chunks": [
        {
          "id": "operations-management-401-l01-c1",
          "title": "What Is Operations Strategy?",
          "content": "Operations strategy is the pattern of decisions that shapes the long-term capabilities of an operation and its contribution to overall business strategy. It bridges the gap between high-level strategic intent and day-to-day operational execution. If a company's business strategy is to compete on innovation (like 3M), its operations strategy must prioritize flexible manufacturing systems, rapid prototyping capabilities, and cross-functional development teams. Misalignment between business strategy and operations capability is one of the most common reasons strategies fail in execution."
        },
        {
          "id": "operations-management-401-l01-c2",
          "title": "The Four Competitive Priorities",
          "content": "Operations compete on four dimensions. Cost: producing at the lowest total unit cost (Amazon's relentless efficiency). Quality: delivering products that meet or exceed specifications consistently (Toyota's zero-defect philosophy). Speed: minimizing the time from order to delivery (Domino's 30-minute guarantee). Flexibility: the ability to change volume, product mix, or design quickly (Zara's two-week design-to-shelf cycle). While world-class companies excel at multiple priorities, there are genuine trade-offs: extreme customization typically raises costs and slows delivery."
        },
        {
          "id": "operations-management-401-l01-c3",
          "title": "Order Winners and Order Qualifiers",
          "content": "Terry Hill's framework distinguishes order qualifiers from order winners. Order qualifiers are the minimum standards customers require just to consider your product — a car must meet safety regulations, a restaurant must pass health inspections. Meeting qualifiers does not win the sale; failing them loses it. Order winners are the criteria that actually persuade customers to choose you over competitors — the fastest delivery, the lowest price, or the best customization. Operations strategy must first ensure all qualifiers are met, then invest heavily in the capabilities that drive order winners."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l01-f1",
          "front": "Operations strategy",
          "back": "The pattern of long-term decisions that shapes operational capabilities and aligns them with business strategy — bridging strategic intent and daily execution"
        },
        {
          "id": "operations-management-401-l01-f2",
          "front": "Four competitive priorities",
          "back": "Cost (lowest unit cost), Quality (meeting/exceeding specs), Speed (fastest order-to-delivery), Flexibility (ability to change volume, mix, or design quickly)"
        },
        {
          "id": "operations-management-401-l01-f3",
          "front": "Order winners vs. order qualifiers",
          "back": "Qualifiers: minimum standards to be considered (failing disqualifies you). Winners: criteria that actually persuade customers to choose you over competitors"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-401-l02",
      "title": "Industry 4.0 and Smart Manufacturing",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Identify the core technologies of Industry 4.0",
        "Explain how cyber-physical systems transform manufacturing",
        "Evaluate the benefits and implementation challenges of smart factories"
      ],
      "chunks": [
        {
          "id": "operations-management-401-l02-c1",
          "title": "The Four Industrial Revolutions",
          "content": "Industry 1.0 introduced mechanization through water and steam power in the late 18th century. Industry 2.0 brought mass production via electrification and assembly lines in the early 20th century. Industry 3.0 added automation through computers and electronics starting in the 1970s. Industry 4.0, emerging now, connects the physical and digital worlds through the Internet of Things (IoT), artificial intelligence, cloud computing, and autonomous systems. Unlike previous revolutions that mechanized or automated individual tasks, Industry 4.0 creates entire self-optimizing production ecosystems."
        },
        {
          "id": "operations-management-401-l02-c2",
          "title": "Core Technologies",
          "content": "IoT sensors embedded throughout the factory floor generate real-time data on temperature, vibration, throughput, and energy consumption. Cloud platforms aggregate and store this data for analysis. AI and machine learning algorithms detect patterns, predict failures, and optimize scheduling. Additive manufacturing (3D printing) enables rapid prototyping and small-batch production of complex geometries. Collaborative robots (cobots) work alongside humans, handling repetitive or dangerous tasks. Augmented reality guides workers through complex assembly procedures with digital overlays on their field of vision."
        },
        {
          "id": "operations-management-401-l02-c3",
          "title": "Smart Factory Implementation",
          "content": "Siemens' Amberg electronics plant in Germany is a leading smart factory example: 75 percent of the production process is automated, machines handle 1,200 product variants with 99.99885 percent quality, and the factory produces one product per second. Yet implementation challenges are substantial. Legacy equipment often lacks connectivity. Cybersecurity risks multiply with every connected device. The skills gap is enormous — factories need data scientists alongside machinists. The investment is significant: McKinsey estimates that full Industry 4.0 implementation costs $150–300 million for a large manufacturer but yields 30–50 percent reductions in machine downtime."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l02-f1",
          "front": "Industry 4.0",
          "back": "The fourth industrial revolution connecting physical and digital worlds through IoT, AI, cloud computing, and autonomous systems to create self-optimizing production ecosystems"
        },
        {
          "id": "operations-management-401-l02-f2",
          "front": "Core Industry 4.0 technologies",
          "back": "IoT sensors, cloud computing, AI/machine learning, additive manufacturing (3D printing), collaborative robots (cobots), and augmented reality"
        },
        {
          "id": "operations-management-401-l02-f3",
          "front": "Smart factory implementation challenges",
          "back": "Legacy equipment connectivity, cybersecurity risks, workforce skills gaps, high investment costs ($150–300M for large manufacturers), and change management"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-401-l03",
      "title": "Digital Twins and Predictive Maintenance",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Define digital twins and explain their role in operations optimization",
        "Design a predictive maintenance program using sensor data and analytics",
        "Compare reactive, preventive, and predictive maintenance strategies"
      ],
      "chunks": [
        {
          "id": "operations-management-401-l03-c1",
          "title": "Digital Twins Explained",
          "content": "A digital twin is a virtual replica of a physical asset, process, or system that is continuously updated with real-time data from sensors. General Electric pioneered the concept for jet engines: a digital twin of a GE90 engine receives data from hundreds of sensors during flight — temperature, pressure, vibration, fuel flow — and simulates the engine's behavior to predict when components will degrade. Digital twins enable 'what-if' analysis without disrupting real operations: What happens to throughput if we change the line speed? What if ambient temperature rises 10 degrees? The simulation answers in minutes what physical testing would take months to determine."
        },
        {
          "id": "operations-management-401-l03-c2",
          "title": "From Reactive to Predictive Maintenance",
          "content": "Reactive maintenance (fix it when it breaks) is the most expensive approach — unplanned downtime costs manufacturers an estimated $50 billion annually. Preventive maintenance (scheduled service regardless of condition) reduces failures but wastes money servicing equipment that does not need it. Predictive maintenance uses sensor data, machine learning, and statistical models to forecast when a machine will fail, triggering maintenance just before the failure occurs. This optimizes the useful life of every component while minimizing unexpected breakdowns."
        },
        {
          "id": "operations-management-401-l03-c3",
          "title": "Building a Predictive Maintenance Program",
          "content": "Implementation follows four stages. First, instrument critical equipment with vibration, temperature, acoustic, and current sensors. Second, collect and clean historical data — including both normal operations and known failure events. Third, build models: machine learning algorithms like random forests or neural networks learn the patterns that precede failures, often detecting subtle changes weeks before human operators notice anything. Fourth, integrate predictions into the maintenance workflow with alerts, automated work orders, and spare parts planning. Rolls-Royce's TotalCare program monitors 13,000 jet engines in real time, predicting maintenance needs and charging airlines by the hour of flight rather than per service event."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l03-f1",
          "front": "Digital twin",
          "back": "A virtual replica of a physical asset or process continuously updated with real-time sensor data — enables simulation, prediction, and what-if analysis without disrupting operations"
        },
        {
          "id": "operations-management-401-l03-f2",
          "front": "Three maintenance strategies",
          "back": "Reactive (fix when broken — most expensive), Preventive (scheduled service — wastes some resources), Predictive (data-driven forecasting — optimizes component life)"
        },
        {
          "id": "operations-management-401-l03-f3",
          "front": "Four stages of predictive maintenance",
          "back": "1) Instrument equipment with sensors 2) Collect/clean historical data 3) Build ML models to detect failure patterns 4) Integrate predictions into maintenance workflows"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "operations-management-401-l04",
      "title": "Service Operations Management",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain how service operations differ from manufacturing operations",
        "Apply the service-profit chain to link employee satisfaction to financial results",
        "Design service delivery systems using the service blueprint methodology"
      ],
      "chunks": [
        {
          "id": "operations-management-401-l04-c1",
          "title": "How Services Differ from Manufacturing",
          "content": "Services have four distinctive characteristics that make operations management uniquely challenging. Intangibility: services cannot be touched, stored, or inventoried — a consulting session cannot sit on a shelf. Heterogeneity: every service encounter varies because humans are involved — two visits to the same doctor will never be identical. Perishability: unused service capacity is lost forever — an empty airline seat on today's flight generates zero revenue. Simultaneity (inseparability): production and consumption happen at the same time — the customer is present during delivery. These characteristics demand different approaches to capacity, quality, and scheduling."
        },
        {
          "id": "operations-management-401-l04-c2",
          "title": "The Service-Profit Chain",
          "content": "Heskett, Sasser, and Schlesinger at Harvard developed the service-profit chain linking internal operations to financial results: internal service quality (tools, training, workplace design) drives employee satisfaction, which drives employee retention and productivity, which drives external service value, which drives customer satisfaction and loyalty, which drives revenue and profitability. Southwest Airlines exemplifies this: investing in employee satisfaction produces enthusiastic service, which builds customer loyalty, which generates industry-leading profitability despite low fares."
        },
        {
          "id": "operations-management-401-l04-c3",
          "title": "Service Blueprinting",
          "content": "A service blueprint maps the entire service delivery process across five layers. Customer actions show what the customer does (enters the hotel, approaches the desk). Frontstage employee actions show visible interactions (receptionist greets the guest). Backstage employee actions show invisible support (preparing the room key). Support processes show systems and departments that enable delivery (reservation system, housekeeping). Physical evidence shows tangible elements the customer encounters (lobby decor, key card). The line of visibility separates what customers see from what they do not. Blueprinting reveals fail points, waits, and opportunities to enhance the experience."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l04-f1",
          "front": "Four characteristics of services (IHPS)",
          "back": "Intangibility (cannot be stored), Heterogeneity (every encounter varies), Perishability (unused capacity is lost), Simultaneity (production and consumption occur together)"
        },
        {
          "id": "operations-management-401-l04-f2",
          "front": "Service-profit chain",
          "back": "Internal quality → Employee satisfaction → Retention/productivity → Service value → Customer satisfaction/loyalty → Revenue/profit. Links operational investment to financial outcomes"
        },
        {
          "id": "operations-management-401-l04-f3",
          "front": "Service blueprint layers",
          "back": "Customer actions, Frontstage employee actions, Backstage employee actions, Support processes, Physical evidence — separated by the line of visibility"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-401-l05",
      "title": "Checkpoint: Digital Operations & Service Management",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "operations-management-401-l05-q1",
          "text": "A hotel room that goes unsold tonight can never be recovered. This illustrates which characteristic of services?",
          "options": [
            {
              "id": "a",
              "text": "Intangibility"
            },
            {
              "id": "b",
              "text": "Heterogeneity"
            },
            {
              "id": "c",
              "text": "Perishability"
            },
            {
              "id": "d",
              "text": "Simultaneity"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Perishability means unused service capacity is permanently lost — an unsold hotel room tonight cannot be stockpiled and sold tomorrow."
        },
        {
          "id": "operations-management-401-l05-q2",
          "text": "Which maintenance strategy uses sensor data and machine learning to forecast equipment failures before they occur?",
          "options": [
            {
              "id": "a",
              "text": "Reactive maintenance"
            },
            {
              "id": "b",
              "text": "Preventive maintenance"
            },
            {
              "id": "c",
              "text": "Corrective maintenance"
            },
            {
              "id": "d",
              "text": "Predictive maintenance"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Predictive maintenance uses IoT sensors and ML algorithms to detect patterns that precede failures, triggering maintenance just before breakdown — optimizing component life while minimizing unplanned downtime."
        },
        {
          "id": "operations-management-401-l05-q3",
          "text": "In Terry Hill's framework, what is an 'order qualifier'?",
          "options": [
            {
              "id": "a",
              "text": "The criterion that persuades customers to choose you over competitors"
            },
            {
              "id": "b",
              "text": "The minimum standard that must be met for customers to even consider your product"
            },
            {
              "id": "c",
              "text": "The most important competitive priority for your industry"
            },
            {
              "id": "d",
              "text": "A measure of product quality that qualifies for ISO certification"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Order qualifiers are minimum thresholds — failing to meet them disqualifies you. Meeting them gets you into consideration, but order winners are what actually secure the sale."
        },
        {
          "id": "operations-management-401-l05-q4",
          "text": "A digital twin of a jet engine receives real-time sensor data during flight to simulate performance. What is the primary benefit?",
          "options": [
            {
              "id": "a",
              "text": "It replaces the physical engine entirely"
            },
            {
              "id": "b",
              "text": "It enables what-if analysis and failure prediction without disrupting real operations"
            },
            {
              "id": "c",
              "text": "It eliminates the need for maintenance"
            },
            {
              "id": "d",
              "text": "It reduces the weight of the engine"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Digital twins enable simulation and prediction using real-time data — you can test scenarios and predict failures virtually without disrupting the physical asset."
        }
      ]
    },
    {
      "id": "operations-management-401-l06",
      "title": "Sustainability and the Circular Economy",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Contrast the linear and circular economy models",
        "Explain how operations can implement circular economy principles",
        "Evaluate the business case for sustainable operations"
      ],
      "chunks": [
        {
          "id": "operations-management-401-l06-c1",
          "title": "From Linear to Circular",
          "content": "The traditional linear economy follows a take-make-dispose model: extract resources, manufacture products, and discard them at end of life. This model is unsustainable — by 2050, the world will need three planets' worth of resources at current consumption rates. The circular economy redesigns this system so materials circulate continuously through loops of reuse, repair, remanufacturing, and recycling. Products are designed for disassembly, materials are chosen for recyclability, and business models shift from selling products to selling outcomes (lighting-as-a-service rather than selling lightbulbs)."
        },
        {
          "id": "operations-management-401-l06-c2",
          "title": "Circular Operations in Practice",
          "content": "Caterpillar's remanufacturing business (Cat Reman) takes back used engine components, disassembles them, restores them to original specifications, and resells them at 60 percent of new-part prices with full warranties. This operation generates over $2 billion in annual revenue while consuming 85 percent less energy and 86 percent less water than new manufacturing. Patagonia's Worn Wear program repairs and resells used clothing. Interface, the carpet manufacturer, has pioneered closed-loop recycling where old carpets become raw materials for new ones. These are not charity programs — they are profitable operations that create competitive advantage."
        },
        {
          "id": "operations-management-401-l06-c3",
          "title": "The Business Case for Sustainability",
          "content": "Sustainable operations deliver tangible financial returns beyond ethical benefits. Energy efficiency reduces operating costs — Unilever saved 1 billion euros through eco-efficiency programs. Waste reduction cuts material costs and disposal fees. Sustainable brands command price premiums — Nielsen research shows 66 percent of global consumers will pay more for sustainable products. Regulatory compliance avoids fines and legal costs as environmental regulations tighten globally. Supply chain resilience improves when operations reduce dependence on scarce or volatile-priced resources. Talent attraction benefits are significant as younger workers prefer employers with genuine environmental commitments."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l06-f1",
          "front": "Circular economy",
          "back": "An economic model where materials circulate through loops of reuse, repair, remanufacturing, and recycling — replacing the linear take-make-dispose model"
        },
        {
          "id": "operations-management-401-l06-f2",
          "front": "Caterpillar remanufacturing (Cat Reman)",
          "back": "Takes back used components, restores to original specs, resells at 60% of new price — $2B+ revenue using 85% less energy and 86% less water than new manufacturing"
        },
        {
          "id": "operations-management-401-l06-f3",
          "front": "Business case for sustainable operations",
          "back": "Lower energy/material costs, price premiums from consumers, regulatory compliance, supply chain resilience, and talent attraction — sustainability drives profitability"
        }
      ]
    },
    {
      "id": "operations-management-401-l07",
      "title": "Final Assessment: Operations Strategy & Digital Transformation",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "operations-management-401-l07-q1",
          "text": "A company's business strategy emphasizes rapid innovation and customization. Which operational capability should its operations strategy prioritize?",
          "options": [
            {
              "id": "a",
              "text": "Cost leadership through high-volume standardized production"
            },
            {
              "id": "b",
              "text": "Flexibility in product design and production volume"
            },
            {
              "id": "c",
              "text": "Maximum equipment utilization to minimize unit costs"
            },
            {
              "id": "d",
              "text": "Large batch sizes to achieve economies of scale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strategy based on innovation and customization requires operational flexibility — the ability to quickly change product designs and adjust production volumes. Cost-focused operations would constrain innovation."
        },
        {
          "id": "operations-management-401-l07-q2",
          "text": "Caterpillar remanufactures used engine components at 60% of new-part cost while using 85% less energy. This is an example of which model?",
          "options": [
            {
              "id": "a",
              "text": "Linear economy"
            },
            {
              "id": "b",
              "text": "Planned obsolescence"
            },
            {
              "id": "c",
              "text": "Circular economy"
            },
            {
              "id": "d",
              "text": "Vertical integration"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Remanufacturing is a core circular economy strategy — extending product life by restoring used components to original specifications, keeping materials in productive use rather than disposing of them."
        },
        {
          "id": "operations-management-401-l07-q3",
          "text": "Which Industry 4.0 technology allows factory workers to see digital assembly instructions overlaid on the physical parts they are working with?",
          "options": [
            {
              "id": "a",
              "text": "Digital twin"
            },
            {
              "id": "b",
              "text": "Augmented reality"
            },
            {
              "id": "c",
              "text": "Blockchain"
            },
            {
              "id": "d",
              "text": "Additive manufacturing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Augmented reality overlays digital information (instructions, diagrams, measurements) onto a worker's view of the physical world, guiding them through complex assembly tasks in real time."
        },
        {
          "id": "operations-management-401-l07-q4",
          "text": "According to the service-profit chain, what is the starting point that ultimately drives financial performance?",
          "options": [
            {
              "id": "a",
              "text": "Customer satisfaction"
            },
            {
              "id": "b",
              "text": "External service value"
            },
            {
              "id": "c",
              "text": "Internal service quality and employee satisfaction"
            },
            {
              "id": "d",
              "text": "Market share"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The service-profit chain starts with internal service quality (tools, training, design) driving employee satisfaction, which cascades through productivity, service value, customer loyalty, and ultimately revenue and profit."
        }
      ]
    }
  ]
};
