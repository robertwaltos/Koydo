import type { LearningModule } from "@/lib/modules/types";

export const Gardening501Module: LearningModule = {
  "id": "gardening-501",
  "title": "Advanced Garden Systems & Management",
  "description": "A specialization course for experienced gardeners focusing on analyzing complex garden ecosystems, designing resilient operations, evaluating the impact of interventions, and leading community or small-scale agricultural projects. Learning is driven by advanced case studies, interactive simulations, and a final capstone defense.",
  "subject": "Agriculture",
  "tags": [
    "advanced",
    "systems-thinking",
    "interactive",
    "gardening",
    "management"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Analyze garden ecosystems by identifying key variables, constraints, and interdependencies.",
    "Design robust, multi-season garden operational plans that include contingencies for common challenges.",
    "Evaluate the true impact of gardening interventions using baseline data and tradeoff analysis.",
    "Develop fair and transparent governance models for community or small-scale agricultural projects.",
    "Lead decision-making processes, clearly communicating tradeoffs between competing goals like yield, cost, and ecological impact.",
    "Defend a comprehensive garden management plan to a panel of experts, using evidence and sound reasoning."
  ],
  "lessons": [
    {
      "id": "gardening-501-l01",
      "title": "Analyzing the Garden as a Complex System",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-501-l01-a1",
          "type": "image",
          "title": "Garden Ecosystem Diagram",
          "content": "A detailed illustration showing the interconnectedness of soil microbiology, water cycles, plant life, beneficial insects, pests, and external environmental factors like sun exposure and wind."
        }
      ],
      "chunks": [
        {
          "id": "gardening-501-l01-c1",
          "kind": "concept",
          "title": "Defining Your Garden Ecosystem",
          "content": "Every garden is a unique ecosystem. In this lesson, we'll learn to define the scope and boundaries of your specific gardening project. We will practice identifying key components—from soil composition to local climate—to create a solid foundation for advanced analysis and planning."
        },
        {
          "id": "gardening-501-l01-c2",
          "kind": "concept",
          "title": "Mapping Cause and Effect",
          "content": "Why did one crop thrive while another failed? We'll explore how to map the causal links between your actions and garden outcomes. This includes understanding dependencies, like how soil pH affects nutrient absorption, and accounting for uncertainties like weather patterns."
        },
        {
          "id": "gardening-501-l01-c3",
          "kind": "recap",
          "title": "Data-Driven Gardening Decisions",
          "content": "In our recap, we'll stress the importance of backing up your gardening claims with measurable data. We'll cover how to set evidence thresholds for your experiments, establish confidence in your results, and use regular checkpoints to ensure your strategies are working as planned."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-501-l01-f1",
          "front": "Garden Ecosystem Analysis",
          "back": "The practice of identifying and measuring the key variables and constraints within a garden to make informed decisions."
        },
        {
          "id": "gardening-501-l01-f2",
          "front": "Resilient Garden Operations",
          "back": "A plan for managing a garden that includes checkpoints, contingencies, and clear success metrics to ensure reliability under stress."
        },
        {
          "id": "gardening-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "A method for evaluating the results of a gardening choice by comparing it to a baseline and identifying both the intended benefits and unintended costs."
        }
      ]
    },
    {
      "id": "gardening-501-l02",
      "title": "Designing Resilient Garden Plans",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "gardening-501-l02-a1",
          "type": "practice",
          "title": "Interactive Planning Tool",
          "content": "A digital whiteboard or flowchart tool where users can drag and drop elements to design a multi-stage pest management or irrigation plan, complete with decision points and contingency routes."
        }
      ],
      "chunks": [
        {
          "id": "gardening-501-l02-c1",
          "kind": "practice",
          "title": "Designing and Stress-Testing Your Plan",
          "content": "In this interactive lab, you will design a detailed operational plan for a specific gardening challenge, like managing a tomato blight outbreak. We will then stress-test your plan by simulating unexpected events, such as a sudden heatwave or equipment failure, to see how it holds up."
        },
        {
          "id": "gardening-501-l02-c2",
          "kind": "recap",
          "title": "Building in Checkpoints for Success",
          "content": "A good plan is an adaptable one. We'll recap how to build control gates, or checkpoints, into your plan. These are pre-defined moments to review progress, decide whether to continue or change course (rollback), and know when to escalate a problem."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-501-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Garden Plans to Goals",
          "description": "Match the planning technique to its primary benefit for garden resilience and management.",
          "pairs": [
            {
              "left": "Soil testing before planting",
              "right": "Prevents choosing unsuitable crops and wasting resources."
            },
            {
              "left": "Drought contingency plan",
              "right": "Minimizes crop loss during unexpected dry spells."
            },
            {
              "left": "Regular photo-documentation",
              "right": "Provides a visual baseline to track plant health and attribute changes."
            },
            {
              "left": "End-of-season review",
              "right": "Improves the quality of next year's crop rotation and soil amendment plan."
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-501-l03",
      "title": "Checkpoint 1: Applying Advanced Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-501-l03-a1",
          "type": "practice",
          "title": "Review Your Plan",
          "content": "A checklist graphic reminding the user to review their assumptions, define measurable indicators, and validate their recommendations with evidence before proceeding."
        }
      ],
      "questions": [
        {
          "id": "gardening-501-l03-q1",
          "text": "When diagnosing a sudden pest problem in your garden, what is the most effective first step?",
          "skillId": "gardening-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately apply the strongest pesticide available."
            },
            {
              "id": "b",
              "text": "Clearly identify the pest, define the acceptable damage level, and establish a baseline of the current infestation."
            },
            {
              "id": "c",
              "text": "Assume it's the same pest you had last year and repeat that treatment."
            },
            {
              "id": "d",
              "text": "Wait and see if the problem resolves itself."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced diagnostics require defining the problem with explicit constraints and measurable indicators before acting."
        },
        {
          "id": "gardening-501-l03-q2",
          "text": "A robust plan for managing soil health over three years should always include:",
          "skillId": "gardening-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "A schedule for soil tests, clear owners for crop rotation, and thresholds for when to add specific amendments."
            },
            {
              "id": "b",
              "text": "A vague goal to 'improve the soil' with no specific roles or metrics."
            },
            {
              "id": "c",
              "text": "Planting the same crop in the same place each year."
            },
            {
              "id": "d",
              "text": "A plan that cannot be changed, even if soil tests show a problem."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable, long-term execution requires clear ownership, a regular cadence for checkpoints (tests), and threshold-driven actions."
        },
        {
          "id": "gardening-501-l03-q3",
          "text": "To defensibly claim your new composting method improved yield, you must:",
          "skillId": "gardening-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Share a photo of one particularly large tomato."
            },
            {
              "id": "b",
              "text": "Compare the total harvest weight from a composted bed against a non-composted control bed, while noting any side effects."
            },
            {
              "id": "c",
              "text": "State that the plants 'look healthier' than last year."
            },
            {
              "id": "d",
              "text": "Only measure the plants that grew well and ignore the ones that didn't."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis requires a baseline for comparison, analysis of potential side effects, and clear metrics."
        },
        {
          "id": "gardening-501-l03-q4",
          "text": "A mature governance plan for a community garden connects:",
          "skillId": "gardening-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The garden's mission statement, measurable rules for plot maintenance, and a clear process for resolving disputes."
            },
            {
              "id": "b",
              "text": "A mission statement with no enforceable rules."
            },
            {
              "id": "c",
              "text": "Rules that are enforced by a single person with no oversight."
            },
            {
              "id": "d",
              "text": "A system where there is no clear way to report or solve problems."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance operationally links the group's intent (mission), measurable controls (rules), and corrective action (dispute resolution)."
        }
      ]
    },
    {
      "id": "gardening-501-l04",
      "title": "Case Study: The High-Constraint Urban Farm",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-501-l04-a1",
          "type": "image",
          "title": "Urban Farm Case Study Map",
          "content": "An overhead map of the case study's urban farm, highlighting challenges like shade from adjacent buildings, potential soil contaminants, limited water access, and diverse community stakeholder needs."
        }
      ],
      "chunks": [
        {
          "id": "gardening-501-l04-c1",
          "kind": "concept",
          "title": "Understanding the Case Study",
          "content": "In this lesson, we'll analyze a case study of an urban farm facing competing constraints: maximizing food production for a local shelter, staying within a tight budget, and using only organic methods. We will diagnose the core challenges and identify key decision points."
        },
        {
          "id": "gardening-501-l04-c2",
          "kind": "practice",
          "title": "Weighing Competing Priorities",
          "content": "Using the case study, you will compare different strategies for the urban farm. We'll evaluate options for pest control, soil enrichment, and crop selection across dimensions like cost, labor, reliability, and community acceptance, forcing you to make difficult tradeoff decisions."
        },
        {
          "id": "gardening-501-l04-c3",
          "kind": "recap",
          "title": "Documenting Your Strategic Recommendation",
          "content": "In our recap, we'll introduce a template for a decision memo. We'll emphasize that every strong recommendation must clearly state its assumptions, provide supporting evidence, outline risk controls, and include a fallback plan if things don't go as expected."
        }
      ]
    },
    {
      "id": "gardening-501-l05",
      "title": "Interactive Simulation: Managing a Garden Crisis",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "gardening-501-l05-a1",
          "type": "practice",
          "title": "Garden Simulation Dashboard",
          "content": "A dashboard interface for the garden simulation, showing real-time data on soil moisture, plant health, pest levels, weather forecasts, and budget remaining. Users interact with controls to make decisions."
        }
      ],
      "chunks": [
        {
          "id": "gardening-501-l05-c1",
          "kind": "practice",
          "title": "Responding to a Live Crisis",
          "content": "In this interactive simulation, you will manage the urban farm from our case study through a full growing season. You'll be forced to make real-time decisions as you face unexpected events like a pest outbreak, a sudden drought, and a budget cut, all while trying to meet your harvest goals."
        },
        {
          "id": "gardening-501-l05-c2",
          "kind": "recap",
          "title": "Adapting Your Plan Under Pressure",
          "content": "After the simulation, we'll recap the principles of adaptive response. We'll discuss how effective crisis management involves updating your plans and control gates based on new information, while maintaining clear records of your decisions and their rationale for accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-501-l05-act1",
          "type": "scenario",
          "title": "The Unfolding Season",
          "description": "Manage the urban farm through a high-pressure simulated season. Tune your controls for irrigation, pest management, and harvesting under uncertain conditions to maximize positive impact and minimize negative outcomes."
        }
      ]
    },
    {
      "id": "gardening-501-l06",
      "title": "Checkpoint 2: Mastery of Complex Scenarios",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "gardening-501-l06-a1",
          "type": "practice",
          "title": "Review Your Decision",
          "content": "A graphic of a decision tree, prompting the user to consider their baseline, constraints, potential side effects, and fallback options before selecting an answer."
        }
      ],
      "questions": [
        {
          "id": "gardening-501-l06-q1",
          "text": "In the urban farm case study, the first step to a defensible recommendation for crop selection is:",
          "skillId": "gardening-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Choosing your favorite vegetables without analysis."
            },
            {
              "id": "b",
              "text": "Defining the baseline soil conditions, budget constraints, and the shelter's nutritional needs."
            },
            {
              "id": "c",
              "text": "Assuming all crops will grow perfectly."
            },
            {
              "id": "d",
              "text": "Optimizing only for the highest possible yield, ignoring cost and labor."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations must begin with an explicit definition of the baseline, constraints, and success criteria."
        },
        {
          "id": "gardening-501-l06-q2",
          "text": "A resilient water management plan for the urban farm, which has unreliable water access, must include:",
          "skillId": "gardening-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Checkpoints to measure soil moisture, a fallback plan using rainwater barrels, and criteria for when to ration water."
            },
            {
              "id": "b",
              "text": "A plan to water the same amount every day, regardless of weather or plant needs."
            },
            {
              "id": "c",
              "text": "No designated person responsible for monitoring water levels."
            },
            {
              "id": "d",
              "text": "Hoping for rain as the only strategy."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in operations depends on having checkpoints for monitoring, fallback options, and explicit criteria for action."
        },
        {
          "id": "gardening-501-l06-q3",
          "text": "When evaluating the success of a new companion planting strategy to reduce pests, the most rigorous method is:",
          "skillId": "gardening-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Noticing there 'seem to be fewer bugs' this year."
            },
            {
              "id": "b",
              "text": "Comparing pest counts in a bed with companion plants to a control bed without them, and noting any impact on yield."
            },
            {
              "id": "c",
              "text": "Claiming success because a blog post said it would work."
            },
            {
              "id": "d",
              "text": "Changing your definition of success to match whatever outcome you observe."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires a comparative baseline (a control group) and analysis of potential side effects (impact on yield)."
        },
        {
          "id": "gardening-501-l06-q4",
          "text": "Strong governance for the urban farm's volunteer program is best achieved when it:",
          "skillId": "gardening-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns volunteer roles with specific tasks, measures task completion, and has a clear process for providing feedback or retraining."
            },
            {
              "id": "b",
              "text": "Separates the farm's goals from what the volunteers actually do."
            },
            {
              "id": "c",
              "text": "Avoids any form of tracking or accountability for tasks."
            },
            {
              "id": "d",
              "text": "Has rules that are not communicated to the volunteers."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links authority (roles), measurement (task completion), and corrective action (feedback/retraining)."
        }
      ]
    },
    {
      "id": "gardening-501-l07",
      "title": "Community Gardening: Leadership and Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "An infographic showing how a community garden's decisions affect different groups: gardeners (food, recreation), neighbors (green space, noise), local government (water use), and food banks (donations)."
        }
      ],
      "chunks": [
        {
          "id": "gardening-501-l07-c1",
          "kind": "concept",
          "title": "Understanding Community Impact",
          "content": "A garden's impact extends beyond its fence. We will learn to map how the benefits (fresh food, green space) and burdens (water usage, volunteer time) of a gardening project are distributed across different community stakeholders, both now and in the future."
        },
        {
          "id": "gardening-501-l07-c2",
          "kind": "concept",
          "title": "Building a Fair and Transparent System",
          "content": "Good leadership requires accountability. In this segment, we will design systems that ensure decisions are traceable, community members have a voice and a right to review plans, and there are clear obligations for fixing problems when they arise."
        },
        {
          "id": "gardening-501-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Ethical Garden Leadership",
          "content": "We'll conclude with a practical checklist for responsible leadership. This tool connects your project's goals to your ethical responsibilities, ensuring your decisions are aligned with community values, fair policies, and the resilience of the garden itself."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-501-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative outcomes of a project are allocated across different groups and over time."
        },
        {
          "id": "gardening-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record showing who made a decision, when, and based on what evidence and rationale."
        },
        {
          "id": "gardening-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances achieving performance goals with ethical considerations and accountability to stakeholders."
        }
      ]
    },
    {
      "id": "gardening-501-l08",
      "title": "Capstone Project: Defending Your Garden Master Plan",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-501-l08-a1",
          "type": "practice",
          "title": "Capstone Proposal Template",
          "content": "A presentation slide template for the capstone defense, with pre-formatted sections for Problem Statement, Proposed Solution, Budget, Risk Analysis, and Impact Measurement Plan."
        }
      ],
      "chunks": [
        {
          "id": "gardening-501-l08-c1",
          "kind": "practice",
          "title": "Building Your Final Proposal",
          "content": "In this final interactive lab, you will assemble a comprehensive master plan for a complex gardening project of your choice. Your proposal must include evidence-based claims, acknowledge uncertainties, and propose clear pathways for managing risks and measuring success."
        },
        {
          "id": "gardening-501-l08-c2",
          "kind": "recap",
          "title": "Preparing for a Peer Review",
          "content": "To prepare for your defense, you will rehearse your presentation and practice responding to critical questions from different perspectives: a technical expert (e.g., a soil scientist), a governance expert (e.g., a community board member), and a key stakeholder (e.g., a neighbor)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present your capstone garden plan to a simulated panel of experts (a master gardener, a community organizer, and a water conservation specialist) and defend your recommendations against their critical questions."
        }
      ]
    }
  ]
};
