import type { LearningModule } from "@/lib/modules/types";

export const Farming401Module: LearningModule = {
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
  "minAge": 12,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design integrated farming systems that balance productivity and ecological health",
    "Use precision data for irrigation, nutrient, and pest management decisions",
    "Evaluate climate risk scenarios and adaptation pathways",
    "Optimize resource allocation under economic and environmental constraints",
    "Build resilient farm operating plans with measurable sustainability indicators",
    "Communicate strategy across technical, financial, and community stakeholders"
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
          "title": "Farm as a System",
          "content": "When we think about a farm, it's important to see it as a whole system. This means that everything on the farm—like the soil, water, crops, animals, workers, and how we sell our products—works together. If we only focus on improving one part of the farm without considering the others, we might accidentally make the entire farm less strong and less able to handle challenges. So, it's crucial to plan carefully and think about how all these parts connect.\nContext recap: When we think about a farm, it's important to see it as a whole system. This means that everything on the farm—like the soil, water, crops, animals, workers, and how we sell our products—works together. If we only focus on improving one part of the farm without considering the others, we might accidentally make the entire farm less strong and less able to handle challenges. So, it's crucial to plan carefully and think about how all these parts connect."
        },
        {
          "id": "farming-401-l01-c2",
          "kind": "concept",
          "title": "Productivity-Resilience Trade-offs",
          "content": "Sometimes, farmers want to get the most crops in the shortest time, but this can lead to problems later on. For example, if we take too much from the soil or use too much water, we might hurt the land and make it harder to grow food in the future. Good farm planning looks at both the immediate needs and the long-term health of the farm. This means finding a balance between getting good crops now and making sure the farm can keep producing in the years to come."
        },
        {
          "id": "farming-401-l01-c3",
          "kind": "recap",
          "title": "Design Principles",
          "content": "To create a strong and resilient farm, there are some key ideas we should follow. These include diversifying what we grow, changing our planting schedules based on what the land needs, taking care of our water resources, and ensuring that we have different ways to earn money. By using these principles, we can design a farm that is better prepared for challenges and can thrive over time.\nContext recap: To create a strong and resilient farm, there are some key ideas we should follow. These include diversifying what we grow, changing our planting schedules based on what the land needs, taking care of our water resources, and ensuring that we have different ways to earn money. By using these principles, we can design a farm that is better prepared for challenges and can thrive over time."
        }
      ],
      "flashcards": [
        {
          "id": "farming-401-l01-f1",
          "front": "Agroecosystem",
          "back": "An integrated system of biological, environmental, and economic processes within farming operations."
        },
        {
          "id": "farming-401-l01-f2",
          "front": "Resilience",
          "back": "Capacity to absorb shocks, adapt, and sustain function over time."
        },
        {
          "id": "farming-401-l01-f3",
          "front": "Diversification",
          "back": "Risk-reduction strategy using variety in crops, practices, and income channels."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l01-a1",
          "type": "image",
          "title": "Whole-Farm Systems Map",
          "content": "Visual map linking soil, water, crop, labor, and market loops in strategic farm planning."
        }
      ]
    },
    {
      "id": "farming-401-l02",
      "title": "Precision Agriculture Decision Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "farming-401-l02-c1",
          "kind": "concept",
          "title": "Data-Informed Operations",
          "content": "Precision agriculture is a modern approach that uses advanced technology to make farming more efficient and effective. This involves using various tools such as sensors placed in the fields to monitor soil conditions, weather data to understand climate patterns, satellite images to track crop health, and telemetry from our farming equipment to gather important information. By analyzing this data, farmers can determine the best times to plant seeds, water their crops, and apply fertilizers or pesticides. The main goal of precision agriculture is to help farmers make informed decisions based on reliable information, rather than feeling confused by too much data. This way, they can ensure their crops grow healthy and strong while also being mindful of resources and the environment."
        },
        {
          "id": "farming-401-l02-c2",
          "kind": "practice",
          "title": "Decision Thresholds",
          "content": "In the world of farming, knowing the right time to take action is crucial for growing healthy crops. This is where we talk about something called 'action thresholds.' These thresholds help farmers decide when to water their plants, add nutrients to the soil, or check for pests. It's like having a guide that tells us the best moments to act. When we set these thresholds, we need to think carefully because sometimes things can be uncertain. We want to avoid jumping to conclusions based on small changes, which might lead us to make hasty decisions. Instead, we should create a thoughtful plan that allows us to respond wisely to the needs of our crops, ensuring they get the care they need without overreacting to minor issues."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-401-l02-act1",
          "type": "matching_pairs",
          "title": "Signal-to-Action Match",
          "description": "Match field signals with the most appropriate management response.",
          "pairs": [
            {
              "left": "Soil moisture trending below threshold",
              "right": "Targeted irrigation scheduling"
            },
            {
              "left": "Leaf chlorophyll decline with stable moisture",
              "right": "Nutrient status assessment"
            },
            {
              "left": "Localized canopy stress hotspot",
              "right": "Zone-specific scouting"
            },
            {
              "left": "Weather forecast indicates heat spike",
              "right": "Irrigation and shade-risk contingency review"
            }
          ]
        },
        {
          "id": "farming-401-l02-act2",
          "type": "scenario_practice",
          "title": "Input Optimization Drill",
          "description": "Prioritize interventions under constrained water and fertilizer budgets.",
          "instructions": [
            "Select one high-impact intervention now.",
            "Define one indicator that triggers escalation."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "How do you separate signal from noise in farm telemetry?",
          "What is one risk of over-automated decision-making in agriculture?",
          "Which metric best reflects irrigation efficiency outcome?"
        ]
      },
      "learningAids": [
        {
          "id": "farming-401-l02-a1",
          "type": "practice",
          "title": "Threshold Design Worksheet",
          "content": "Template for trigger values, confidence bounds, action owner, and review cadence."
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
          "text": "Why is whole-farm systems thinking essential at advanced levels?",
          "skillId": "farming-401-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "It ignores economic constraints"
            },
            {
              "id": "b",
              "text": "It captures cross-impact among ecological and operational variables"
            },
            {
              "id": "c",
              "text": "It removes weather uncertainty"
            },
            {
              "id": "d",
              "text": "It guarantees maximum yield every season"
            }
          ],
          "correctOptionId": "b",
          "explanation": "System interactions determine long-term performance and resilience."
        },
        {
          "id": "farming-401-l03-q2",
          "text": "Best use of precision data in farm operations?",
          "skillId": "farming-401-skill-precision",
          "options": [
            {
              "id": "a",
              "text": "Collect data without action thresholds"
            },
            {
              "id": "b",
              "text": "Inform decisions through defined triggers and validation"
            },
            {
              "id": "c",
              "text": "Replace all field observations"
            },
            {
              "id": "d",
              "text": "Increase interventions regardless of context"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Data value comes from actionable and validated operational decisions."
        },
        {
          "id": "farming-401-l03-q3",
          "text": "A sudden stress signal appears in only one zone. Best first action?",
          "skillId": "farming-401-skill-precision",
          "options": [
            {
              "id": "a",
              "text": "Apply whole-farm treatment immediately"
            },
            {
              "id": "b",
              "text": "Conduct targeted zone inspection before broad intervention"
            },
            {
              "id": "c",
              "text": "Ignore until next season"
            },
            {
              "id": "d",
              "text": "Reduce monitoring frequency"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Targeted verification limits unnecessary cost and intervention risk."
        },
        {
          "id": "farming-401-l03-q4",
          "text": "Which choice most improves long-term resilience?",
          "skillId": "farming-401-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "Single-input dependency"
            },
            {
              "id": "b",
              "text": "Diversified production and risk pathways"
            },
            {
              "id": "c",
              "text": "No rotation planning"
            },
            {
              "id": "d",
              "text": "Minimal record keeping"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Diversification reduces vulnerability to single-point shocks."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l03-a1",
          "type": "mnemonic",
          "title": "SCAN",
          "content": "System, Constraints, Action thresholds, Next review."
        }
      ]
    },
    {
      "id": "farming-401-l04",
      "title": "Climate Risk Adaptation and Resource Stewardship",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "farming-401-l04-c1",
          "kind": "concept",
          "title": "Climate Scenario Planning",
          "content": "Farm leaders need to be forward-thinking about how climate change might impact their farms in the future. Instead of only focusing on past weather patterns, they should explore various possible future climate scenarios. This means considering how rising temperatures, unpredictable rainfall, new pests, and potential supply chain disruptions could affect their farming practices. By preparing for these different situations, farm leaders can make smarter decisions and ensure their farms are ready for whatever challenges may come their way. This proactive approach helps them protect their crops, livestock, and overall farm health in an ever-changing environment."
        },
        {
          "id": "farming-401-l04-c2",
          "kind": "concept",
          "title": "Water and Soil Resilience",
          "content": "To keep our farms healthy and strong, we need to focus on how we manage water and soil. Important practices include making sure water is retained in the soil, allowing water to soak in properly, preventing soil erosion, and maintaining healthy organic matter in the soil. It's essential that the choices we make about our farming tools and practices work together, rather than trying to optimize each one separately.\nContext recap: To keep our farms healthy and strong, we need to focus on how we manage water and soil. Important practices include making sure water is retained in the soil, allowing water to soak in properly, preventing soil erosion, and maintaining healthy organic matter in the soil. It's essential that the choices we make about our farming tools and practices work together, rather than trying to optimize each one separately."
        },
        {
          "id": "farming-401-l04-c3",
          "kind": "recap",
          "title": "Adaptation Governance",
          "content": "When creating plans to adapt to climate changes, it's important to set clear goals and indicators. This means defining what success looks like, who is responsible for each part of the plan, and when we will review and update our strategies. As climate patterns change, having a structured approach helps ensure that we can adjust our plans effectively.\nContext recap: When creating plans to adapt to climate changes, it's important to set clear goals and indicators. This means defining what success looks like, who is responsible for each part of the plan, and when we will review and update our strategies. As climate patterns change, having a structured approach helps ensure that we can adjust our plans effectively."
        }
      ],
      "flashcards": [
        {
          "id": "farming-401-l04-f1",
          "front": "Scenario planning",
          "back": "Evaluating multiple plausible futures to design robust decisions under uncertainty."
        },
        {
          "id": "farming-401-l04-f2",
          "front": "Soil organic matter",
          "back": "Key indicator tied to water retention, nutrient dynamics, and long-term soil function."
        },
        {
          "id": "farming-401-l04-f3",
          "front": "Adaptive governance",
          "back": "A management approach that updates policy and operations based on new evidence."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l04-a1",
          "type": "image",
          "title": "Climate Adaptation Map",
          "content": "Visual linking climate stressors to operational adaptation levers and monitoring indicators."
        }
      ]
    },
    {
      "id": "farming-401-l05",
      "title": "Farm Economics and Risk Portfolio Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "farming-401-l05-c1",
          "kind": "concept",
          "title": "Economic Resilience",
          "content": "For a farm to be resilient, it needs to be strong both ecologically and financially. This means that how we manage our resources and finances can greatly affect our ability to survive tough times. Factors like keeping a stable profit margin, being aware of cost changes, understanding market demands, and having the right insurance can all play a role in helping a farm withstand challenges.\nContext recap: For a farm to be resilient, it needs to be strong both ecologically and financially. This means that how we manage our resources and finances can greatly affect our ability to survive tough times. Factors like keeping a stable profit margin, being aware of cost changes, understanding market demands, and having the right insurance can all play a role in helping a farm withstand challenges."
        },
        {
          "id": "farming-401-l05-c2",
          "kind": "practice",
          "title": "Portfolio Decisions",
          "content": "Farm leaders need to carefully consider their choices about what crops to grow, how to handle contracts, when to store products, and how to invest money. By analyzing different scenarios, they can make informed decisions that will help the farm perform well, even when faced with unpredictable weather or market conditions. The goal is to ensure the farm does well overall, rather than just trying to achieve the best possible outcome in perfect conditions.\nContext recap: Farm leaders need to carefully consider their choices about what crops to grow, how to handle contracts, when to store products, and how to invest money. By analyzing different scenarios, they can make informed decisions that will help the farm perform well, even when faced with unpredictable weather or market conditions. The goal is to ensure the farm does well overall, rather than just trying to achieve the best possible outcome in perfect conditions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Risk Lever Sort",
          "description": "Sort interventions by the primary risk they mitigate.",
          "buckets": [
            "Yield Risk",
            "Price Risk",
            "Input Cost Risk"
          ],
          "items": [
            {
              "text": "Drought-tolerant cultivar adoption",
              "bucket": "Yield Risk"
            },
            {
              "text": "Forward pricing contract",
              "bucket": "Price Risk"
            },
            {
              "text": "Fertilizer procurement hedge",
              "bucket": "Input Cost Risk"
            },
            {
              "text": "Diversified crop calendar",
              "bucket": "Yield Risk"
            }
          ]
        },
        {
          "id": "farming-401-l05-act2",
          "type": "scenario_practice",
          "title": "Season Planning Drill",
          "description": "Choose a robust farm plan under uncertain weather and market conditions.",
          "instructions": [
            "State one decision that protects downside risk.",
            "State one trade-off in expected upside."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why can a highest-yield strategy still be financially fragile?",
          "What indicator would trigger changing crop mix mid-season?",
          "How do ecological and financial resilience reinforce each other?"
        ]
      },
      "learningAids": [
        {
          "id": "farming-401-l05-a1",
          "type": "practice",
          "title": "Risk Dashboard Template",
          "content": "Template for key yield, water, cost, and market risk indicators with trigger actions."
        }
      ]
    },
    {
      "id": "farming-401-l06",
      "title": "Checkpoint 2: Climate and Economics",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "farming-401-l06-q1",
          "text": "Best reason to use scenario planning in climate-sensitive farming?",
          "skillId": "farming-401-skill-climate",
          "options": [
            {
              "id": "a",
              "text": "To avoid uncertainty discussions"
            },
            {
              "id": "b",
              "text": "To design robust plans across multiple plausible futures"
            },
            {
              "id": "c",
              "text": "To predict one exact season outcome"
            },
            {
              "id": "d",
              "text": "To eliminate all risk"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scenario planning improves decisions under uncertainty rather than assuming one future."
        },
        {
          "id": "farming-401-l06-q2",
          "text": "Which option most directly improves water resilience?",
          "skillId": "farming-401-skill-resources",
          "options": [
            {
              "id": "a",
              "text": "Ignoring infiltration trends"
            },
            {
              "id": "b",
              "text": "Practices that increase soil retention and reduce runoff"
            },
            {
              "id": "c",
              "text": "Single high-intensity irrigation schedule"
            },
            {
              "id": "d",
              "text": "Reducing all monitoring"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Retention and infiltration improvements stabilize water availability under stress."
        },
        {
          "id": "farming-401-l06-q3",
          "text": "A resilient economic farm strategy typically includes:",
          "skillId": "farming-401-skill-economics",
          "options": [
            {
              "id": "a",
              "text": "Single market dependency"
            },
            {
              "id": "b",
              "text": "Risk-diversified revenue and cost management levers"
            },
            {
              "id": "c",
              "text": "No contingency planning"
            },
            {
              "id": "d",
              "text": "Only short-term yield targets"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Diversified risk controls support stability when conditions shift."
        },
        {
          "id": "farming-401-l06-q4",
          "text": "Most useful trigger for adaptive governance updates is:",
          "skillId": "farming-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Annual tradition only"
            },
            {
              "id": "b",
              "text": "Indicator thresholds crossing planned bounds"
            },
            {
              "id": "c",
              "text": "Random schedule changes"
            },
            {
              "id": "d",
              "text": "No trigger needed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Evidence-based thresholds support timely adaptation decisions."
        },
        {
          "id": "farming-401-l06-q5",
          "text": "Why should precision interventions include validation loops?",
          "skillId": "farming-401-skill-precision",
          "options": [
            {
              "id": "a",
              "text": "To increase intervention frequency blindly"
            },
            {
              "id": "b",
              "text": "To confirm that actions improved target outcomes"
            },
            {
              "id": "c",
              "text": "To avoid documenting results"
            },
            {
              "id": "d",
              "text": "To remove field observations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Closed-loop validation ensures interventions are effective and efficient."
        }
      ],
      "learningAids": [
        {
          "id": "farming-401-l06-a1",
          "type": "mnemonic",
          "title": "GROW",
          "content": "Goals, Risks, Options, Watch indicators."
        }
      ]
    },
    {
      "id": "farming-401-l07",
      "title": "Capstone: Climate-Resilient Farm Strategy Proposal",
      "type": "interactive",
      "duration": 19,
      "chunks": [
        {
          "id": "farming-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "For your final project, you will design a detailed plan for a farm that spans several years. This plan should include specific goals that focus on protecting the environment, strategies to manage financial risks, and clear indicators that will help you know when it's time to make changes. Additionally, you will need to create a step-by-step guide on how to put your ideas into action. Remember to consider the practical limits of available workers and money as you work on your proposal. This will help ensure that your plan is not only ambitious but also achievable."
        },
        {
          "id": "farming-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "When you create your farm strategy proposals, it's important to blend together good farming practices, ways to adapt to climate changes, and plans for financial stability. Each proposal should have clear, measurable goals that help track progress and specific roles for everyone involved to ensure that everyone is accountable as the farm develops and grows.\nContext recap: When you create your farm strategy proposals, it's important to blend together good farming practices, ways to adapt to climate changes, and plans for financial stability. Each proposal should have clear, measurable goals that help track progress and specific roles for everyone involved to ensure that everyone is accountable as the farm develops and grows."
        }
      ],
      "metadata": {
        "prompts": [
          "Define top three farm resilience goals and metrics.",
          "List two adaptation triggers and response actions.",
          "Explain one trade-off between short-term profitability and long-term resilience."
        ]
      },
      "learningAids": [
        {
          "id": "farming-401-l07-a1",
          "type": "practice",
          "title": "Strategy Proposal Template",
          "content": "Template for goals, indicators, risk scenarios, action plan, and review cadence."
        }
      ]
    }
  ]
};
