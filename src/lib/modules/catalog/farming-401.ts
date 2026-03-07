import type { LearningModule } from "@/lib/modules/types";

export const farming_401_Module: LearningModule = {
  "id": "farming-401",
  "title": "Farming Systems Leadership and Climate Resilience",
  "description": "Expert-level farming curriculum on agroecosystem strategy, precision decision systems, climate risk adaptation, resource economics, and long-term farm resilience planning.",
  "subject": "Farming",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "farming",
    "agroecology",
    "resilience"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design integrated farming systems that balance productivity and ecological health.",
    "Utilize precision data for irrigation, nutrient, and pest management decisions.",
    "Evaluate climate risk scenarios and formulate robust adaptation pathways.",
    "Optimize resource allocation under economic and environmental constraints.",
    "Develop resilient farm operating plans with measurable sustainability indicators.",
    "Communicate strategic plans effectively to technical, financial, and community stakeholders."
  ],
  "lessons": [
    {
      "id": "farming-401-l01",
      "title": "Agroecosystem Strategy and Whole-Farm Design",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "farming-401-l01-c1",
          "kind": "concept",
          "title": "The Farm as an Integrated System",
          "content": "An advanced approach to farm management views the entire operation as an integrated agroecosystem. This perspective recognizes that all components—soil biology, water cycles, crop and livestock genetics, labor, and market dynamics—are interconnected. Optimizing one component in isolation can create unintended negative consequences elsewhere, compromising the resilience of the whole system. Strategic planning, therefore, requires a holistic understanding of these complex interactions."
        },
        {
          "id": "farming-401-l01-c2",
          "kind": "concept",
          "title": "Balancing Productivity and Resilience",
          "content": "A common strategic challenge involves the trade-off between maximizing short-term yield and ensuring long-term resilience. Aggressive production strategies can deplete natural capital like soil organic matter or water resources, increasing future vulnerability. Effective farm design seeks to balance immediate productivity with the capacity to withstand shocks and stresses, ensuring the farm's viability and ecological integrity for years to come."
        },
        {
          "id": "farming-401-l01-c3",
          "kind": "recap",
          "title": "Core Design Principles for Resilience",
          "content": "Key principles for designing a resilient agroecosystem include enhancing biodiversity through crop diversification and habitat integration, implementing adaptive rotational planning, optimizing water stewardship, and building diversified revenue streams. Applying these principles systematically creates a farm structure that is robust, adaptable, and capable of thriving amidst uncertainty."
        }
      ],
      "flashcards": [
        {
          "id": "farming-401-l01-f1",
          "front": "Agroecosystem",
          "back": "An integrated system of biological, environmental, and economic processes that constitute a farming operation."
        },
        {
          "id": "farming-401-l01-f2",
          "front": "Resilience",
          "back": "The capacity of a system to absorb disturbances, adapt to change, and maintain core functions over time."
        },
        {
          "id": "farming-401-l01-f3",
          "front": "Diversification",
          "back": "A primary risk-management strategy that utilizes variety in crops, livestock, management practices, and income channels."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l01-a1",
          "type": "image",
          "title": "Whole-Farm Systems Map",
          "content": "A dynamic infographic illustrating the interconnected feedback loops between soil health, water cycles, crop selection, labor inputs, and market access in a resilient agroecosystem."
        }
      ]
    },
    {
      "id": "farming-401-l02",
      "title": "Precision Agriculture and Decision Systems",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "farming-401-l02-c1",
          "kind": "concept",
          "title": "From Data to Actionable Intelligence",
          "content": "Precision agriculture leverages technology to transform raw data into actionable intelligence for farm management. By integrating inputs from in-field sensors, satellite imagery, weather models, and equipment telemetry, farmers can move beyond intuition-based decisions. The goal is not simply to collect data, but to establish a clear decision-support system that guides precise interventions, such as variable-rate application of water and nutrients, optimizing resource use and improving outcomes."
        },
        {
          "id": "farming-401-l02-c2",
          "kind": "practice",
          "title": "Establishing Decision Thresholds",
          "content": "Effective precision agriculture relies on pre-defined action thresholds—specific data points that trigger a management response. For example, a soil moisture level dropping below a certain percentage might trigger an irrigation event. Setting these thresholds requires careful calibration to avoid overreacting to minor fluctuations (noise) while ensuring timely responses to meaningful trends (signals). This structured approach ensures that interventions are necessary, targeted, and efficient."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-401-l02-act1",
          "type": "matching_pairs",
          "title": "Signal-to-Action Match",
          "description": "Match the field data signal with the most appropriate management response.",
          "pairs": [
            {
              "left": "Soil moisture trending below threshold",
              "right": "Initiate targeted irrigation cycle"
            },
            {
              "left": "Leaf chlorophyll decline with stable moisture",
              "right": "Schedule nutrient status assessment"
            },
            {
              "left": "Localized canopy stress hotspot via NDVI",
              "right": "Deploy zone-specific pest/disease scouting"
            },
            {
              "left": "Weather forecast indicates imminent heat spike",
              "right": "Review and adjust irrigation and shade-risk contingency plans"
            }
          ]
        },
        {
          "id": "farming-401-l02-act2",
          "type": "scenario_practice",
          "title": "Input Optimization Drill",
          "description": "Given a scenario with constrained water and fertilizer budgets, prioritize interventions for maximum impact.",
          "instructions": [
            "Select one high-impact intervention to implement immediately.",
            "Define one key performance indicator (KPI) that would trigger an escalation or change in strategy."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "How do you differentiate between signal and noise in farm telemetry data?",
          "What is a primary risk of over-automating decision-making in agriculture?",
          "Which metric best reflects the outcome of irrigation efficiency, beyond just application rates?"
        ]
      },
      "learningAids": [
        {
          "id": "farming-401-l02-a1",
          "type": "practice",
          "title": "Threshold Design Worksheet",
          "content": "A template for defining operational thresholds, including trigger values, confidence bounds, action owners, and the cadence for review and recalibration."
        }
      ]
    },
    {
      "id": "farming-401-l03",
      "title": "Checkpoint 1: Systems and Precision Decisions",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "farming-401-l03-q1",
          "text": "Why is whole-farm systems thinking essential for advanced farm management?",
          "skillId": "farming-401-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "It allows managers to ignore economic constraints."
            },
            {
              "id": "b",
              "text": "It captures the critical cross-impacts among ecological, economic, and operational variables."
            },
            {
              "id": "c",
              "text": "It completely removes weather-related uncertainty."
            },
            {
              "id": "d",
              "text": "It guarantees maximum possible yield in every season."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Systems thinking is crucial because it acknowledges that farm performance and resilience are determined by the complex interactions between its parts, not by optimizing components in isolation."
        },
        {
          "id": "farming-401-l03-q2",
          "text": "What is the most effective use of precision data in farm operations?",
          "skillId": "farming-401-skill-precision",
          "options": [
            {
              "id": "a",
              "text": "To collect as much data as possible without establishing action thresholds."
            },
            {
              "id": "b",
              "text": "To inform timely and targeted decisions through defined triggers and subsequent validation."
            },
            {
              "id": "c",
              "text": "To replace all direct field observations and human judgment."
            },
            {
              "id": "d",
              "text": "To increase the frequency of interventions regardless of context."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The value of precision data is realized when it is used to drive specific, validated actions based on pre-defined thresholds, leading to more efficient and effective management."
        },
        {
          "id": "farming-401-l03-q3",
          "text": "A satellite image reveals a sudden stress signal in a single management zone. What is the best first action?",
          "skillId": "farming-401-skill-precision",
          "options": [
            {
              "id": "a",
              "text": "Apply a corrective treatment to the entire farm immediately."
            },
            {
              "id": "b",
              "text": "Conduct a targeted ground-truth inspection of that zone before any broad intervention."
            },
            {
              "id": "c",
              "text": "Ignore the signal until the end of the season."
            },
            {
              "id": "d",
              "text": "Reduce the frequency of satellite monitoring to avoid false alarms."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Targeted verification (ground-truthing) is essential to diagnose the specific cause of the signal and avoid the cost and potential harm of an unnecessary or incorrect farm-wide intervention."
        },
        {
          "id": "farming-401-l03-q4",
          "text": "Which of the following strategic choices most improves a farm's long-term resilience?",
          "skillId": "farming-401-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "Dependency on a single crop and a single market channel."
            },
            {
              "id": "b",
              "text": "Diversified production, practices, and market pathways."
            },
            {
              "id": "c",
              "text": "Elimination of crop rotation planning to specialize."
            },
            {
              "id": "d",
              "text": "Minimal record-keeping to reduce administrative overhead."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Diversification is a cornerstone of resilience, as it reduces vulnerability to any single point of failure, whether it's a pest outbreak, a market downturn, or a climate shock."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l03-a1",
          "type": "mnemonic",
          "title": "SCAN",
          "content": "A decision-making framework: assess the whole System, identify Constraints, apply Action thresholds, and schedule the Next review."
        }
      ]
    },
    {
      "id": "farming-401-l04",
      "title": "Climate Risk Adaptation and Resource Stewardship",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "farming-401-l04-c1",
          "kind": "concept",
          "title": "Climate Scenario Planning",
          "content": "Effective farm leadership requires moving beyond reliance on historical weather data. Climate scenario planning involves evaluating a range of plausible future climate conditions—such as increased temperature variability, altered rainfall patterns, and new pest pressures. By stress-testing operational plans against these scenarios, leaders can develop more robust and adaptive strategies that are prepared for a wider range of potential futures."
        },
        {
          "id": "farming-401-l04-c2",
          "kind": "concept",
          "title": "Building Water and Soil Resilience",
          "content": "Water and soil health are foundational to climate resilience. Key strategies focus on enhancing the entire soil-water system, including maximizing water infiltration, increasing soil water-holding capacity through organic matter, and minimizing erosion. Practices like cover cropping, conservation tillage, and integrated water harvesting work synergistically to create a buffer against both drought and extreme rainfall events."
        },
        {
          "id": "farming-401-l04-c3",
          "kind": "recap",
          "title": "Adaptive Governance Frameworks",
          "content": "An adaptation plan is a living document. Adaptive governance provides the framework for its execution, defining clear performance indicators, assigning accountability for specific actions, and establishing a regular cadence for reviewing progress and updating the strategy. This structured, iterative process ensures that the farm's adaptation efforts remain relevant and effective as climate conditions and scientific understanding evolve."
        }
      ],
      "flashcards": [
        {
          "id": "farming-401-l04-f1",
          "front": "Scenario Planning",
          "back": "A strategic planning method that involves evaluating multiple plausible futures to design robust decisions under deep uncertainty."
        },
        {
          "id": "farming-401-l04-f2",
          "front": "Soil Organic Matter (SOM)",
          "back": "A critical component of soil health that is strongly correlated with water retention, nutrient cycling, and long-term soil function."
        },
        {
          "id": "farming-401-l04-f3",
          "front": "Adaptive Governance",
          "back": "A management approach that systematically updates policies and operations based on monitoring, new evidence, and learning."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l04-a1",
          "type": "image",
          "title": "Climate Adaptation Pathways Map",
          "content": "A strategic diagram mapping potential climate stressors (e.g., drought, heatwaves) to specific operational adaptations (e.g., new crop varieties, adjusted irrigation schedules) and the key performance indicators (KPIs) used to monitor effectiveness."
        }
      ]
    },
    {
      "id": "farming-401-l05",
      "title": "Farm Economics and Risk Portfolio Management",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "farming-401-l05-c1",
          "kind": "concept",
          "title": "Integrating Economic and Ecological Resilience",
          "content": "True farm resilience is both ecological and financial. Economic resilience is the ability to withstand financial shocks, which is directly linked to operational decisions. Key factors include maintaining healthy profit margins, managing input cost volatility, securing diverse market channels, and strategically using financial instruments like crop insurance and hedging. These financial buffers provide the capacity to invest in long-term ecological health."
        },
        {
          "id": "farming-401-l05-c2",
          "kind": "practice",
          "title": "Managing a Portfolio of Enterprises",
          "content": "Farm leaders should view their operation as a portfolio of enterprises, including different crops, livestock, and value-added products. Strategic decisions about this mix—along with choices in contracting, storage, and capital investment—should be analyzed across various scenarios. The objective is to optimize for robust performance across a range of weather and market conditions, rather than maximizing returns in a single, idealized scenario."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Risk Mitigation Levers",
          "description": "Categorize each intervention by the primary type of risk it is designed to mitigate.",
          "buckets": [
            "Yield Risk",
            "Price Risk",
            "Input Cost Risk"
          ],
          "items": [
            {
              "text": "Adoption of drought-tolerant cultivars",
              "bucket": "Yield Risk"
            },
            {
              "text": "Executing a forward pricing contract",
              "bucket": "Price Risk"
            },
            {
              "text": "Hedging fertilizer procurement costs",
              "bucket": "Input Cost Risk"
            },
            {
              "text": "Implementing a diversified crop calendar",
              "bucket": "Yield Risk"
            },
            {
              "text": "Investing in on-farm storage capacity",
              "bucket": "Price Risk"
            }
          ]
        },
        {
          "id": "farming-401-l05-act2",
          "type": "scenario_practice",
          "title": "Seasonal Planning Simulation",
          "description": "Choose a robust farm plan given a scenario with uncertain weather forecasts and volatile market prices.",
          "instructions": [
            "State one decision that explicitly protects against downside risk.",
            "Identify the primary trade-off you are making in terms of potential upside."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why can a strategy focused solely on maximizing yield be financially fragile?",
          "What financial or operational indicator would trigger a decision to change your crop mix mid-season?",
          "Provide one example of how ecological and financial resilience can be mutually reinforcing."
        ]
      },
      "learningAids": [
        {
          "id": "farming-401-l05-a1",
          "type": "practice",
          "title": "Integrated Risk Dashboard Template",
          "content": "A template for tracking key yield, water, cost, and market risk indicators, with pre-defined trigger levels and corresponding response actions."
        }
      ]
    },
    {
      "id": "farming-401-l06",
      "title": "Checkpoint 2: Climate, Economics, and Adaptation",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "farming-401-l06-q1",
          "text": "What is the primary benefit of using scenario planning for climate adaptation in farming?",
          "skillId": "farming-401-skill-climate",
          "options": [
            {
              "id": "a",
              "text": "To avoid discussing uncertainty with stakeholders."
            },
            {
              "id": "b",
              "text": "To design robust operational plans that perform well across multiple plausible futures."
            },
            {
              "id": "c",
              "text": "To predict the exact outcome of a single future season."
            },
            {
              "id": "d",
              "text": "To completely eliminate all potential risks from climate change."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scenario planning is a tool for making better decisions under uncertainty; its strength is in building strategies that are resilient to a range of possible outcomes, not in predicting one specific future."
        },
        {
          "id": "farming-401-l06-q2",
          "text": "Which of the following actions most directly improves a farm's water resilience?",
          "skillId": "farming-401-skill-resources",
          "options": [
            {
              "id": "a",
              "text": "Ignoring trends in soil water infiltration rates."
            },
            {
              "id": "b",
              "text": "Implementing practices that increase soil organic matter and reduce runoff."
            },
            {
              "id": "c",
              "text": "Relying on a single, high-intensity irrigation schedule regardless of conditions."
            },
            {
              "id": "d",
              "text": "Reducing all environmental monitoring to cut costs."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Improving soil's ability to capture and store water is a fundamental strategy for stabilizing water availability and buffering against both drought and heavy rainfall."
        },
        {
          "id": "farming-401-l06-q3",
          "text": "A resilient economic strategy for a farm typically includes:",
          "skillId": "farming-401-skill-economics",
          "options": [
            {
              "id": "a",
              "text": "Dependence on a single buyer or market channel."
            },
            {
              "id": "b",
              "text": "A diversified portfolio of revenue streams and cost management levers."
            },
            {
              "id": "c",
              "text": "An absence of financial contingency planning."
            },
            {
              "id": "d",
              "text": "A singular focus on short-term yield targets."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Economic resilience is built on diversification and proactive risk management, which provide stability and options when market or production conditions shift unexpectedly."
        },
        {
          "id": "farming-401-l06-q4",
          "text": "What is the most useful trigger for making updates within an adaptive governance framework?",
          "skillId": "farming-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Adherence to an unchanging annual tradition."
            },
            {
              "id": "b",
              "text": "Key performance indicators crossing pre-defined threshold boundaries."
            },
            {
              "id": "c",
              "text": "Random changes to the operational schedule."
            },
            {
              "id": "d",
              "text": "No trigger is needed; plans should not be changed."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptive management relies on evidence. Using pre-defined indicator thresholds ensures that strategic adjustments are timely, data-driven, and responsive to changing conditions."
        },
        {
          "id": "farming-401-l06-q5",
          "text": "Why is it critical for precision agriculture interventions to include validation loops?",
          "skillId": "farming-401-skill-precision",
          "options": [
            {
              "id": "a",
              "text": "To increase the frequency of interventions without justification."
            },
            {
              "id": "b",
              "text": "To confirm that the actions taken actually improved the targeted outcomes and to refine future thresholds."
            },
            {
              "id": "c",
              "text": "To avoid the need to document results and outcomes."
            },
            {
              "id": "d",
              "text": "To completely remove the need for any further field observations."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A closed-loop system of action and validation (e.g., check strips, yield analysis) is essential for learning, ensuring interventions are effective, and continuously improving the decision-making model."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l06-a1",
          "type": "mnemonic",
          "title": "GROW",
          "content": "A strategic review framework: define Goals, assess Risks, evaluate Options, and Watch key indicators."
        }
      ]
    },
    {
      "id": "farming-401-l07",
      "title": "Capstone: Climate-Resilient Farm Strategy Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "farming-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Project Brief",
          "content": "Your capstone project is to develop a comprehensive, multi-year strategic plan for a case-study farm. This proposal must integrate ecological goals, financial risk management strategies, and climate adaptation pathways. You will define clear, measurable objectives, establish indicator thresholds that trigger adaptive actions, and outline a phased implementation plan, considering realistic operational and capital constraints."
        },
        {
          "id": "farming-401-l07-c2",
          "kind": "recap",
          "title": "Evaluation Criteria",
          "content": "Proposals will be evaluated on the sophisticated integration of systems thinking, data-driven decision principles, and robust risk mitigation. Success is demonstrated by the clarity of the strategic vision, the inclusion of measurable KPIs, a well-defined governance structure with clear accountabilities, and a realistic assessment of trade-offs."
        }
      ],
      "metadata": {
        "prompts": [
          "Define the top three resilience goals for your farm and the primary metric for each.",
          "Identify two critical adaptation triggers (e.g., 'three consecutive weeks with soil moisture below X%') and the corresponding response actions.",
          "Explain one significant trade-off your plan makes between short-term profitability and long-term resilience."
        ]
      },
      "learningAids": [
        {
          "id": "farming-401-l07-a1",
          "type": "practice",
          "title": "Strategic Plan Proposal Template",
          "content": "A structured document template for outlining strategic goals, key performance indicators, risk scenario analysis, a phased action plan, and a governance and review cadence."
        }
      ]
    },
    {
      "id": "farming-401-l08",
      "title": "Leadership and Stakeholder Communication",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "farming-401-l08-c1",
          "kind": "concept",
          "title": "Translating Strategy into a Compelling Narrative",
          "content": "A robust strategy is only effective if it can be communicated clearly. Farm leaders must be able to translate their complex plans into a compelling narrative for diverse audiences. This involves articulating the 'why' behind the strategy—framing it in terms of long-term value, sustainability, and resilience—to secure buy-in from investors, employees, and the wider community."
        },
        {
          "id": "farming-401-l08-c2",
          "kind": "concept",
          "title": "Engaging Key Stakeholders",
          "content": "Effective communication requires identifying key stakeholders and tailoring the message to their specific interests and concerns. Financial partners need to understand the risk-adjusted returns of resilience investments. Operational teams need clear direction on new practices. Community members and regulators may be focused on environmental stewardship. A targeted approach ensures the right message reaches the right audience."
        },
        {
          "id": "farming-401-l08-c3",
          "kind": "recap",
          "title": "Building Trust and Alignment",
          "content": "Ultimately, the goal of strategic communication is to build trust and alignment. Clear, consistent, and transparent communication fosters a shared understanding of the farm's vision and challenges. This alignment is a critical asset, strengthening the farm's social license to operate and enhancing its ability to navigate complex challenges as a cohesive team."
        }
      ],
      "flashcards": [
        {
          "id": "farming-401-l08-f1",
          "front": "Stakeholder Mapping",
          "back": "The process of identifying and analyzing the interests, influence, and impact of individuals or groups affected by the farm's operations."
        },
        {
          "id": "farming-401-l08-f2",
          "front": "Social License to Operate",
          "back": "The ongoing acceptance and approval of a farm's operations and practices by its local community and other stakeholders."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l08-a1",
          "type": "practice",
          "title": "Stakeholder Communication Plan Template",
          "content": "A worksheet to outline key strategic messages, target audiences, preferred communication channels, and a delivery schedule for a major farm initiative."
        }
      ]
    }
  ]
};
