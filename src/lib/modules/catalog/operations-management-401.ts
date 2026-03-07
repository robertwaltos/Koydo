import type { LearningModule } from "@/lib/modules/types";

export const operations_management_401_Module: LearningModule = {
  "id": "operations-management-401",
  "title": "Operations Strategy & Digital Transformation",
  "description": "Align operations with business strategy and prepare for the future of manufacturing and services. This module explores the integration of Industry 4.0, digital twins, and predictive maintenance with core operational principles. Topics include service operations, circular economy models, and the strategic analysis of global supply chains, including reshoring decisions.",
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
          "content": "Operations strategy defines the pattern of long-term decisions that shape a company's operational capabilities. It acts as the crucial link between high-level corporate strategy and the day-to-day execution on the factory floor or in the service center. An effective operations strategy translates business objectives into a coherent set of structural decisions (e.g., capacity, facilities, technology) and infrastructural decisions (e.g., quality control, workforce policies, planning). For example, a company like 3M, which competes on innovation, must build an operations strategy that prioritizes manufacturing flexibility, rapid prototyping capabilities, and cross-functional collaboration. A misalignment between business goals and operational capabilities is a common cause of strategic failure."
        },
        {
          "id": "operations-management-401-l01-c2",
          "title": "The Four Competitive Priorities",
          "content": "Firms compete along four primary dimensions, known as competitive priorities. 1) Cost: The ability to provide goods and services at the lowest possible price, exemplified by Amazon's relentless focus on process efficiency. 2) Quality: Consistently meeting or exceeding customer expectations. This includes both high-performance design (e.g., a luxury car) and high conformance to specifications (e.g., Toyota's zero-defect philosophy). 3) Speed: The lead time from order placement to delivery. Domino's Pizza built its brand on rapid delivery. 4) Flexibility: The ability to adapt to changes in demand, product mix, or product design. Zara's agile supply chain, which can move a design from concept to store in two weeks, is a classic example of flexibility. Strategically, firms often face trade-offs; excelling in one priority, like customization (flexibility), may compromise another, like cost. The key is to align priorities with the target market's needs."
        },
        {
          "id": "operations-management-401-l01-c3",
          "title": "Order Winners and Order Qualifiers",
          "content": "Terry Hill's framework distinguishes between 'order qualifiers' and 'order winners' to clarify how customers make purchasing decisions. Order qualifiers are the minimum performance criteria a product must meet to even be considered a viable option by the customer. For example, a new car must meet federal safety standards, and a restaurant must pass health inspections. Failing to meet these baseline requirements disqualifies a product from competition. Order winners, in contrast, are the specific criteria that persuade a customer to choose one product over its competitors. These are the dimensions where a company seeks to excel, such as superior speed, lower price, or unique features. An effective operations strategy must first ensure all order qualifiers are met consistently and then allocate resources to develop and sustain the capabilities that create order winners."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l01-f1",
          "front": "Operations strategy",
          "back": "The pattern of long-term decisions that shapes operational capabilities and aligns them with business strategy — bridging strategic intent and daily execution."
        },
        {
          "id": "operations-management-401-l01-f2",
          "front": "Four competitive priorities",
          "back": "Cost (lowest unit cost), Quality (meeting/exceeding specs), Speed (fastest order-to-delivery), Flexibility (ability to change volume, mix, or design quickly)."
        },
        {
          "id": "operations-management-401-l01-f3",
          "front": "Order winners vs. order qualifiers",
          "back": "Qualifiers: minimum standards to be considered (failing disqualifies you). Winners: criteria that actually persuade customers to choose you over competitors."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l01-a1",
          "type": "image",
          "title": "Competitive Priorities Trade-off Matrix",
          "content": "A 2x2 matrix visualizing the inherent trade-offs between Cost, Quality, Speed, and Flexibility, with examples like Amazon and Zara plotted."
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
          "content": "The evolution of manufacturing is marked by four industrial revolutions. Industry 1.0 (late 18th century) introduced mechanization through water and steam power. Industry 2.0 (early 20th century) brought mass production, enabled by electricity and the assembly line. Industry 3.0 (1970s) involved automation using computers and electronics. We are now in Industry 4.0, characterized by the integration of the physical and digital worlds through cyber-physical systems. This revolution leverages technologies like the Internet of Things (IoT), AI, and cloud computing to create 'smart factories' where systems can monitor, analyze, and self-optimize, moving beyond simple automation to intelligent, interconnected ecosystems."
        },
        {
          "id": "operations-management-401-l02-c2",
          "title": "Core Technologies",
          "content": "The smart factory is built upon a stack of core technologies. At the base is the Internet of Things (IoT), where sensors embedded in machinery collect real-time data on parameters like temperature, vibration, and output. This data is transmitted to cloud computing platforms for storage and processing. Artificial Intelligence (AI) and Machine Learning (ML) algorithms then analyze this data to identify patterns, predict failures, and optimize production schedules. Other key technologies include additive manufacturing (3D printing) for rapid prototyping and complex part creation, collaborative robots (cobots) that work safely alongside humans on repetitive or hazardous tasks, and augmented reality (AR), which overlays digital instructions onto a worker's view of the physical world to guide complex assembly or maintenance procedures."
        },
        {
          "id": "operations-management-401-l02-c3",
          "title": "Smart Factory Implementation",
          "content": "Siemens' Amberg electronics plant in Germany is a benchmark for smart factory implementation. With 75% of its value chain automated, it produces 1,200 different product types at a rate of one per second, achieving a quality rate of 99.99885%. However, transitioning to a smart factory presents significant challenges. These include integrating modern systems with legacy equipment that lacks connectivity, mitigating heightened cybersecurity risks from thousands of connected devices, addressing the workforce skills gap by finding data scientists and digitally-literate technicians, and managing the substantial capital investment, which McKinsey estimates can be $150–$300 million for large manufacturers. Despite these hurdles, the returns—such as a 30-50% reduction in machine downtime—often justify the investment."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l02-f1",
          "front": "Industry 4.0",
          "back": "The fourth industrial revolution connecting physical and digital worlds through IoT, AI, cloud computing, and autonomous systems to create self-optimizing production ecosystems."
        },
        {
          "id": "operations-management-401-l02-f2",
          "front": "Core Industry 4.0 technologies",
          "back": "IoT sensors, cloud computing, AI/machine learning, additive manufacturing (3D printing), collaborative robots (cobots), and augmented reality."
        },
        {
          "id": "operations-management-401-l02-f3",
          "front": "Smart factory implementation challenges",
          "back": "Legacy equipment connectivity, cybersecurity risks, workforce skills gaps, high capital investment, and change management."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l02-a1",
          "type": "image",
          "title": "Industry 4.0 Technology Stack",
          "content": "A diagram showing how IoT, Cloud, AI/ML, and other technologies interrelate in a smart factory, from data collection at the sensor level to insights at the application level."
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
          "content": "A digital twin is a dynamic, virtual replica of a physical asset, process, or system, continuously updated with real-time data from IoT sensors. Pioneered by companies like General Electric for complex assets like jet engines, a digital twin mirrors the state and behavior of its physical counterpart. For a GE90 engine in flight, sensors feed data on temperature, pressure, and vibration to its digital twin. This allows for sophisticated analysis of the engine's health and performance. The primary value lies in simulation; engineers can run 'what-if' scenarios—such as testing the impact of different fuel grades or operating conditions—on the virtual model without disrupting physical operations. This accelerates innovation and allows for the prediction of component wear and potential failures, optimizing the asset's lifecycle."
        },
        {
          "id": "operations-management-401-l03-c2",
          "title": "From Reactive to Predictive Maintenance",
          "content": "Maintenance strategies have evolved from reactive to predictive. Reactive maintenance (or 'run-to-failure') involves fixing equipment only after it breaks down, a costly approach that causes unplanned downtime estimated to cost manufacturers $50 billion annually. Preventive maintenance is a proactive, time-based strategy where service is scheduled at regular intervals, regardless of the equipment's actual condition. While it reduces failures, it can lead to unnecessary servicing of healthy components. Predictive maintenance (PdM) is the most advanced approach. It uses IoT sensor data and machine learning models to continuously monitor equipment health and forecast failures before they occur. This data-driven strategy allows maintenance to be performed at the optimal moment—just in time—maximizing component life and minimizing unplanned downtime."
        },
        {
          "id": "operations-management-401-l03-c3",
          "title": "Building a Predictive Maintenance Program",
          "content": "Building a robust predictive maintenance program involves four key stages. 1) Instrument: Equip critical assets with sensors to capture relevant data (e.g., vibration, temperature, acoustics). 2) Collect & Clean: Aggregate and prepare historical data, including normal operating data and known failure events, to train the models. 3) Model: Develop and train machine learning models (e.g., regression models, random forests, neural networks) to detect anomalies and predict failure patterns, often weeks before a human could. 4) Integrate: Embed the model's predictions into the maintenance workflow by creating automated alerts, work orders, and spare parts planning. Rolls-Royce's TotalCare program, which monitors 13,000 jet engines in real-time and charges airlines per flying hour, is a premier example of predictive maintenance integrated into a service model."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l03-f1",
          "front": "Digital twin",
          "back": "A virtual replica of a physical asset or process continuously updated with real-time sensor data — enables simulation, prediction, and what-if analysis without disrupting operations."
        },
        {
          "id": "operations-management-401-l03-f2",
          "front": "Three maintenance strategies",
          "back": "Reactive (fix when broken — most expensive), Preventive (scheduled service — wastes some resources), Predictive (data-driven forecasting — optimizes component life)."
        },
        {
          "id": "operations-management-401-l03-f3",
          "front": "Four stages of predictive maintenance",
          "back": "1) Instrument equipment with sensors 2) Collect/clean historical data 3) Build ML models to detect failure patterns 4) Integrate predictions into maintenance workflows."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l03-a1",
          "type": "interactive",
          "title": "Maintenance Strategy Simulator",
          "content": "An interactive tool where users choose a maintenance strategy (Reactive, Preventive, Predictive) for a virtual factory and see the impact on cost, downtime, and output over time."
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
          "content": "Service operations are fundamentally different from manufacturing due to four distinct characteristics, often remembered by the acronym IHPS. 1) Intangibility: Services cannot be physically touched or inventoried. A consulting session cannot be stored on a shelf. 2) Heterogeneity: Service quality varies with each encounter due to human interaction. Two visits to the same doctor can be different experiences. 3) Perishability: Unused service capacity is lost forever. An empty airline seat or an unsold hotel room represents lost revenue that cannot be recovered. 4) Simultaneity: Services are produced and consumed at the same time, with the customer often present and participating in the process (e.g., a haircut). These characteristics create unique operational challenges in capacity management, quality assurance, and scheduling."
        },
        {
          "id": "operations-management-401-l04-c2",
          "title": "The Service-Profit Chain",
          "content": "The service-profit chain, developed by researchers at Harvard, provides a framework linking operational investments to financial performance. It posits a clear causal chain: high internal service quality (providing employees with the right tools, training, and support) leads to higher employee satisfaction. Satisfied employees are more productive and less likely to leave, which drives greater external service value for the customer. This, in turn, increases customer satisfaction and loyalty. Loyal customers are the engine of revenue growth and profitability. Southwest Airlines exemplifies this model by fostering a culture of high employee satisfaction, which translates into enthusiastic customer service and sustained profitability, even with a low-cost business model."
        },
        {
          "id": "operations-management-401-l04-c3",
          "title": "Service Blueprinting",
          "content": "Service blueprinting is a visualization technique used to design and analyze service delivery processes. A blueprint is structured in five layers, separated by key boundaries. 1) Customer Actions: The steps the customer takes. 2) Frontstage Employee Actions: The visible interactions between employees and customers (separated from the customer by the 'line of interaction'). 3) Backstage Employee Actions: Employee actions that are invisible to the customer but support the frontstage (separated from the frontstage by the 'line of visibility'). 4) Support Processes: Internal systems and activities that support the employees. 5) Physical Evidence: The tangible elements of the service environment. By mapping the process, managers can identify potential 'fail points,' bottlenecks, and opportunities to improve the customer experience."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l04-f1",
          "front": "Four characteristics of services (IHPS)",
          "back": "Intangibility (cannot be stored), Heterogeneity (every encounter varies), Perishability (unused capacity is lost), Simultaneity (production and consumption occur together)."
        },
        {
          "id": "operations-management-401-l04-f2",
          "front": "Service-profit chain",
          "back": "Internal quality → Employee satisfaction → Retention/productivity → Service value → Customer satisfaction/loyalty → Revenue/profit. Links operational investment to financial outcomes."
        },
        {
          "id": "operations-management-401-l04-f3",
          "front": "Service blueprint layers",
          "back": "Customer actions, Frontstage employee actions, Backstage employee actions, Support processes, Physical evidence — separated by the line of visibility."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l04-a1",
          "type": "image",
          "title": "Service Blueprint Example",
          "content": "A detailed service blueprint for a coffee shop, clearly showing the five layers, lines of visibility/interaction, and potential fail points."
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
          "content": "The traditional linear economy follows a 'take-make-dispose' model, extracting raw materials to create products that are discarded after use. This model is unsustainable; by 2050, it is projected to require the resources of three Earths. The circular economy offers an alternative framework designed to eliminate waste and keep materials in use. It emphasizes strategies like reuse, repair, remanufacturing, and recycling. Products are designed for disassembly and material recovery ('design for circularity'). Business models also shift, for example, from selling products to offering 'product-as-a-service' (e.g., Philips selling 'lighting as a service' instead of lightbulbs). This decouples revenue from material consumption and aligns incentives toward durability and resource efficiency."
        },
        {
          "id": "operations-management-401-l06-c2",
          "title": "Circular Operations in Practice",
          "content": "Several leading companies have successfully implemented circular operations. Caterpillar's remanufacturing division, Cat Reman, takes back used engine components, restores them to original specifications, and resells them at a 60% discount. This highly profitable $2B+ business uses 85% less energy and relies on a sophisticated reverse logistics network. Patagonia's Worn Wear program extends the life of garments through repair and resale, building brand loyalty and reducing environmental impact. Interface, a carpet manufacturer, pioneered a closed-loop system where old carpet tiles are collected and recycled into raw materials for new products. These examples demonstrate that circularity is not just an environmental initiative but a powerful business strategy that can create value, reduce costs, and build competitive advantage."
        },
        {
          "id": "operations-management-401-l06-c3",
          "title": "The Business Case for Sustainability",
          "content": "The business case for sustainable operations is compelling and multifaceted. Key drivers include: 1) Cost Reduction: Improved energy and material efficiency directly lowers operating costs. Unilever, for example, saved over €1 billion through eco-efficiency initiatives. 2) Revenue Growth: A significant portion of consumers (66% globally) are willing to pay a premium for sustainable products, enhancing brand equity and market share. 3) Risk Mitigation: Proactive compliance with increasingly stringent environmental regulations avoids fines, while reducing dependence on volatile raw materials enhances supply chain resilience. 4) Talent Attraction: A strong commitment to sustainability is a key factor for attracting and retaining top talent, particularly among younger generations. Together, these factors demonstrate that sustainability is a driver of profitability and long-term value creation."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-401-l06-f1",
          "front": "Circular economy",
          "back": "An economic model where materials circulate through loops of reuse, repair, remanufacturing, and recycling — replacing the linear take-make-dispose model."
        },
        {
          "id": "operations-management-401-l06-f2",
          "front": "Caterpillar remanufacturing (Cat Reman)",
          "back": "Takes back used components, restores to original specs, resells at 60% of new price — $2B+ revenue using 85% less energy and 86% less water than new manufacturing."
        },
        {
          "id": "operations-management-401-l06-f3",
          "front": "Business case for sustainable operations",
          "back": "Lower energy/material costs, price premiums from consumers, regulatory compliance, supply chain resilience, and talent attraction — sustainability drives profitability."
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-401-l06-a1",
          "type": "image",
          "title": "Linear vs. Circular Economy Diagram",
          "content": "A visual comparison showing the linear 'take-make-dispose' flow versus the circular model with loops for reuse, repair, remanufacturing, and recycling."
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
