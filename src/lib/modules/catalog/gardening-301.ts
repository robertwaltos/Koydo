import type { LearningModule } from "@/lib/modules/types";

export const Gardening301Module: LearningModule = {
  "id": "gardening-301",
  "title": "Gardening Systems and Analysis",
  "description": "Level 301 curriculum in Gardening, emphasizing soil systems, plant care, season planning, integrated pest management, and real-world decision quality through structured practice and assessment.",
  "subject": "Agriculture",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "applied-science"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for soil systems and plant care",
    "Apply structured methods to plan, execute, and review season planning tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Gardening"
  ],
  "lessons": [
    {
      "id": "gardening-301-l01",
      "title": "Core Models for Garden Systems",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-301-l01-a1",
          "type": "image",
          "title": "Scope Diagram",
          "content": "A diagram showing the defined boundaries of a garden project, highlighting what is in-scope (e.g., tomato plant health) and out-of-scope (e.g., regional weather patterns)."
        },
        {
          "id": "gardening-301-l01-a2",
          "type": "image",
          "title": "Cause-and-Effect Diagram",
          "content": "A fishbone diagram illustrating potential causes (e.g., overwatering, poor soil, pests) for a specific effect (e.g., yellowing leaves)."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In advanced gardening, clear communication is key. We'll learn to define the scope of our projects by setting clear boundaries, which helps manage expectations. We will also define our 'unit of analysis'—the specific thing we are studying, like a single plant bed or a composting process. Finally, we'll establish consistent terminology so that when we discuss our observations and decisions, everyone understands them in the same way, leading to better collaboration and results."
        },
        {
          "id": "gardening-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Successful gardening requires understanding *why* things happen, not just observing *what* happens. We will practice thinking causally by examining our assumptions, mapping how different factors are connected, and identifying the constraints we're working with, such as budget, time, or sunlight. This approach helps us develop effective solutions that address root causes, like improving soil drainage, rather than just treating symptoms, like removing a single wilted leaf."
        },
        {
          "id": "gardening-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "To ensure our gardening projects are reliable and successful, we must commit to sound practices. This includes setting a high standard for the evidence we collect, keeping detailed records of our actions and observations, and establishing clear accountability for tasks. These habits are fundamental to achieving consistent, trustworthy results and learning from both our successes and failures."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions, such as a single plant's health or a compost pile's temperature."
        },
        {
          "id": "gardening-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries (like sunlight, water access, or budget) that shape your available options."
        },
        {
          "id": "gardening-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality and quantity of data required before you commit to a decision or action."
        }
      ]
    },
    {
      "id": "gardening-301-l02",
      "title": "Gardening Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "gardening-301-l02-a1",
          "type": "image",
          "title": "Workflow Diagram",
          "content": "A flowchart illustrating a gardening workflow, from preparing soil (input) to monitoring growth (checkpoint) and harvesting (output)."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a complete workflow for managing a small garden plot. You'll start by defining the necessary inputs (e.g., seeds, compost, water). Then, you will establish key checkpoints to monitor plant health and soil conditions. Next, you will define the desired outputs, such as a specific yield of vegetables. Finally, you'll set up 'rollback triggers'—pre-planned actions to take if something goes wrong, like signs of a pest infestation—to ensure you can respond quickly and effectively."
        },
        {
          "id": "gardening-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "We will review the critical practice of logging every significant decision. A good decision log includes the reasoning for the choice, the expected outcome, and how you will verify the result. This structured documentation is invaluable for post-season analysis, allowing you to learn from your experiences and improve your process for the next cycle."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-301-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Match",
          "description": "Match each workflow component to its strongest governance function.",
          "pairs": [
            {
              "left": "Input audit",
              "right": "Prevents low-quality data from entering the system"
            },
            {
              "left": "Checkpoint gate",
              "right": "Stops propagation of known defects"
            },
            {
              "left": "Outcome metric",
              "right": "Measures whether the objective was met"
            },
            {
              "left": "Retrospective log",
              "right": "Captures lessons for next iteration"
            }
          ]
        },
        {
          "id": "gardening-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort items into strategic, operational, and quality-risk groups.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Misaligned goals",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear handoff timing",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent acceptance criteria",
              "bucket": "Quality"
            },
            {
              "text": "No benchmark baseline",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "gardening-301-l03-q1",
          "text": "When analyzing poor crop yield, what is the best 'unit of analysis' to start with?",
          "skillId": "gardening-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The entire garden's performance over the last decade."
            },
            {
              "id": "b",
              "text": "The health and inputs of a single, representative plant bed."
            },
            {
              "id": "c",
              "text": "Global climate change patterns."
            },
            {
              "id": "d",
              "text": "The brand of fertilizer used, without context."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Starting with a well-defined, manageable unit of analysis like a single plant bed allows for focused investigation and defensible conclusions."
        },
        {
          "id": "gardening-301-l03-q2",
          "text": "You have limited sunlight in your garden. This is best described as a:",
          "skillId": "gardening-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Failure mode"
            },
            {
              "id": "b",
              "text": "Lagging indicator"
            },
            {
              "id": "c",
              "text": "Constraint"
            },
            {
              "id": "d",
              "text": "Desired output"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A constraint is a boundary or limitation that shapes your feasible options. Limited sunlight constrains which plants you can successfully grow."
        },
        {
          "id": "gardening-301-l03-q3",
          "text": "In a workflow for starting seeds indoors, what is the function of a 'checkpoint'?",
          "skillId": "gardening-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To purchase the seeds and soil."
            },
            {
              "id": "b",
              "text": "To periodically check germination rates and soil moisture before moving to the next step."
            },
            {
              "id": "c",
              "text": "To harvest the final produce."
            },
            {
              "id": "d",
              "text": "To log the decision after the entire process is complete."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A checkpoint is a verification step within a workflow to ensure quality and catch problems early, before they escalate."
        },
        {
          "id": "gardening-301-l03-q4",
          "text": "What is the primary purpose of a decision log in a gardening project?",
          "skillId": "gardening-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To create more work for the gardener."
            },
            {
              "id": "b",
              "text": "To prove you were right all along."
            },
            {
              "id": "c",
              "text": "To create a traceable record of reasoning for future review and learning."
            },
            {
              "id": "d",
              "text": "To share unstructured thoughts and feelings about the garden."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A decision log captures the 'why' behind your actions, which is essential for learning, improving your process, and avoiding repeated mistakes."
        }
      ]
    },
    {
      "id": "gardening-301-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-301-l04-a1",
          "type": "image",
          "title": "Metric Hierarchy",
          "content": "A pyramid diagram showing the relationship between leading indicators (e.g., daily soil moisture readings), lagging outcomes (e.g., total harvest weight), and diagnostic metrics (e.g., soil nutrient levels)."
        },
        {
          "id": "gardening-301-l04-a2",
          "type": "image",
          "title": "Failure Taxonomy Chart",
          "content": "A table classifying common gardening failures into categories like 'Process' (e.g., inconsistent watering schedule) and 'Execution' (e.g., planting seeds too deep)."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right gardening method requires careful thought. We must consider our constraints (like space or budget), evaluate the reliability of our information sources, and understand the 'cost of error'—the potential impact of a mistake. In this lesson, we will compare different methods, such as no-till vs. traditional tilling, and justify why one might be a better fit for a specific context, helping you make more strategic decisions in your garden."
        },
        {
          "id": "gardening-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A good set of metrics helps you manage your garden proactively. A strong 'metric architecture' connects leading indicators (early signs of progress, like seedling height) with lagging outcomes (the final results, like fruit production). It also includes diagnostic metrics (data that explains *why* you're seeing certain results, like pH levels). This structure allows you to spot potential issues early and respond thoughtfully, keeping your project on track."
        },
        {
          "id": "gardening-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "To get better at troubleshooting, we can classify failures into a 'taxonomy'. We'll organize common problems into categories like data issues (e.g., inaccurate soil tests), process flaws (e.g., no pest-scouting routine), execution errors (e.g., incorrect pruning), and governance gaps (e.g., unclear who is responsible for watering). This structured approach helps us design targeted, effective solutions instead of relying on guesswork."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-301-l04-f1",
          "front": "Leading indicator",
          "back": "An early metric that signals probable future outcomes, like the number of blossoms on a tomato plant."
        },
        {
          "id": "gardening-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to diagnose root causes and design targeted fixes."
        },
        {
          "id": "gardening-301-l04-f3",
          "front": "Cost of error",
          "back": "The total negative impact (e.g., lost crops, wasted time, environmental damage) caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "gardening-301-l05",
      "title": "Case Study: Improve a Gardening System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-301-l05-a1",
          "type": "image",
          "title": "Case Decomposition Template",
          "content": "A worksheet template with sections for 'Objective,' 'Context,' 'Constraints,' 'Intervention Options,' and 'Trade-offs' to guide analysis of the case study."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will analyze a realistic gardening scenario, such as a community garden with declining productivity. You will break the problem down into its core components: the primary objective, the surrounding context, key constraints, and several potential interventions. For each intervention, you will be required to identify the associated trade-offs."
        },
        {
          "id": "gardening-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Based on your analysis, you will formulate a staged improvement proposal. This proposal must include clear, measurable criteria for success, assign ownership for each action item, and establish a timeline for implementation and follow-up. This exercise simulates the real-world process of turning analysis into an actionable plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve season planning outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "gardening-301-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect interventions with the most likely system-level effects.",
          "pairs": [
            {
              "left": "Tighter intake criteria",
              "right": "Higher signal quality and lower downstream rework"
            },
            {
              "left": "Checkpoint automation",
              "right": "Faster detection of preventable defects"
            },
            {
              "left": "Post-run retrospective",
              "right": "Improved adaptation in later cycles"
            },
            {
              "left": "Cross-team briefing",
              "right": "Reduced ambiguity at handoff boundaries"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "gardening-301-l06-q1",
          "text": "To predict the final tomato harvest weight (a lagging outcome), which of the following is the most useful LEADING indicator to track?",
          "skillId": "gardening-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The total weight of last year's harvest."
            },
            {
              "id": "b",
              "text": "The number of healthy blossoms appearing on the plants each week."
            },
            {
              "id": "c",
              "text": "The final taste rating of the tomatoes."
            },
            {
              "id": "d",
              "text": "The cost of the fertilizer used."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A leading indicator is an early measure that signals future outcomes. The number of blossoms is a strong predictor of the potential number of fruits, long before the harvest."
        },
        {
          "id": "gardening-301-l06-q2",
          "text": "A gardener discovers their seedlings are failing. After investigation, they realize they wrote the planting depth instructions incorrectly. According to a failure taxonomy, this is best classified as a:",
          "skillId": "gardening-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Data issue (bad soil test)"
            },
            {
              "id": "b",
              "text": "Execution issue (planted them correctly but they still failed)"
            },
            {
              "id": "c",
              "text": "Process issue (flawed instructions)"
            },
            {
              "id": "d",
              "text": "Governance issue (unclear who should plant)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The failure originated from a flaw in the documented process (the instructions), not from the physical act of planting or bad data. Classifying it correctly helps fix the root cause."
        },
        {
          "id": "gardening-301-l06-q3",
          "text": "When choosing a pest control method, what is the most critical trade-off to consider between using a broad-spectrum chemical pesticide and introducing beneficial insects?",
          "skillId": "gardening-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "There is no trade-off; one is always better."
            },
            {
              "id": "b",
              "text": "The color of the packaging."
            },
            {
              "id": "c",
              "text": "Short-term speed and effectiveness vs. long-term ecosystem health and sustainability."
            },
            {
              "id": "d",
              "text": "The time of day the application occurs."
            }
          ],
          "correctOptionId": "c",
          "explanation": "This represents a classic trade-off. Chemical pesticides may offer a quick fix but can harm beneficial insects and soil life, while biological controls are more sustainable but may act slower."
        },
        {
          "id": "gardening-301-l06-q4",
          "text": "Which element is essential for a strong improvement proposal developed from a case study?",
          "skillId": "gardening-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "A vague goal, such as 'make the garden better.'"
            },
            {
              "id": "b",
              "text": "A plan with no timeline or accountability."
            },
            {
              "id": "c",
              "text": "A recommendation to use more expensive tools."
            },
            {
              "id": "d",
              "text": "Specific, measurable success criteria and a clear owner for the action items."
            }
          ],
          "correctOptionId": "d",
          "explanation": "An actionable proposal must be specific and measurable ('increase yield by 15%') and have clear ownership to ensure it is implemented and reviewed effectively."
        }
      ]
    }
  ]
};
