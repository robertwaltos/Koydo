import type { LearningModule } from "@/lib/modules/types";

export const Gardening401Module: LearningModule = {
  "id": "gardening-401",
  "title": "Gardening Mastery and Leadership",
  "description": "Level 401 curriculum in Gardening, emphasizing soil systems, plant care, season planning, integrated pest management, and real-world decision quality through structured practice and assessment.",
  "subject": "Agriculture",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "applied-science"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for soil systems and plant care",
    "Apply structured methods to plan, execute, and review season planning tasks",
    "Interpret garden data using metrics, constraints, and context",
    "Diagnose common garden failures and design effective recovery actions",
    "Communicate gardening plans and tradeoffs clearly",
    "Build repeatable systems for sustained improvement in the garden"
  ],
  "lessons": [
    {
      "id": "gardening-401-l01",
      "title": "Core Models for Gardening",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-401-l01-a1",
          "type": "image",
          "title": "Garden Constraint Map",
          "content": "Sketch your garden plot. Draw and label the key constraints like hours of direct sunlight, water access, soil type zones, and prevailing winds."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l01-c1",
          "kind": "concept",
          "title": "Defining Your Garden System",
          "content": "To make smart decisions, we first need to define the scope of our work. Are we focused on a single plant, a raised bed, or an entire compost system? This focus is our 'unit of analysis.' Establishing clear boundaries and a shared vocabulary ensures everyone involved understands the project's goals and limits, which is the foundation for effective planning and problem-solving."
        },
        {
          "id": "gardening-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Successful gardening is about understanding cause and effect. Instead of just treating symptoms like yellow leaves, we need to find the root cause, such as a soil pH imbalance. This lesson teaches you to map the relationships between actions and outcomes and to identify the constraints—like your climate, budget, or time—that limit your options. This approach helps you solve the right problems effectively."
        },
        {
          "id": "gardening-401-l01-c3",
          "kind": "concept",
          "title": "Evidence and Accountability",
          "content": "Making reliable improvements requires good data. We will explore the importance of keeping a detailed garden log, setting standards for the evidence you collect (e.g., photos, measurements), and establishing clear ownership for tasks. These practices ensure your conclusions are based on facts, not just guesses, leading to more consistent and successful outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-401-l01-f1",
          "front": "Unit of Analysis",
          "back": "The specific garden element (e.g., a single plant, a compost pile, a raised bed) you are evaluating to make a decision."
        },
        {
          "id": "gardening-401-l01-f2",
          "front": "Constraint Mapping",
          "back": "A visual method for identifying the boundaries and limitations (like sunlight, water, or soil type) that shape your available gardening options."
        },
        {
          "id": "gardening-401-l01-f3",
          "front": "Evidence Standard",
          "back": "The quality threshold that information (e.g., soil test results, pest counts) must meet before you use it to make a decision."
        }
      ]
    },
    {
      "id": "gardening-401-l02",
      "title": "Gardening Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "gardening-401-l02-a1",
          "type": "image",
          "title": "Process Flowchart",
          "content": "Use a flowchart template to map a key garden process, like 'Seasonal Bed Preparation,' from start to finish. Include inputs, actions, and decision points."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l02-c1",
          "kind": "practice",
          "title": "Building a Garden Workflow",
          "content": "In this activity, you'll design a step-by-step workflow for a core gardening task, such as amending soil or managing a greenhouse. You will define the necessary inputs (e.g., compost, tools), quality checkpoints (e.g., soil moisture test), expected outputs (e.g., soil ready for planting), and rollback triggers (e.g., stopping if pests are found)."
        },
        {
          "id": "gardening-401-l02-c2",
          "kind": "recap",
          "title": "Keeping a Decision Log",
          "content": "A crucial part of any systematic process is documenting your decisions. For every choice made, log the reason, what you expect to happen, and how you'll verify the result. This practice transforms your experience into a valuable dataset you can analyze later to learn and improve."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-401-l02-act1",
          "type": "matching_pairs",
          "title": "Garden Process and Purpose",
          "description": "Match each workflow component to its primary function in the garden.",
          "pairs": [
            {
              "left": "Soil Test (Input Audit)",
              "right": "Prevents starting with incorrect soil amendments"
            },
            {
              "left": "Seedling Health Check (Checkpoint)",
              "right": "Stops diseased plants from being transplanted"
            },
            {
              "left": "Harvest Weight (Outcome Metric)",
              "right": "Measures whether the yield objective was met"
            },
            {
              "left": "End-of-Season Review (Log)",
              "right": "Captures lessons for the next growing season"
            }
          ]
        },
        {
          "id": "gardening-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Identifying Garden Risks",
          "description": "Sort each gardening risk into the correct category.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Planting crops unsuitable for the climate",
              "bucket": "Strategic"
            },
            {
              "text": "Forgetting a scheduled watering day",
              "bucket": "Operational"
            },
            {
              "text": "Using uncalibrated soil pH meter",
              "bucket": "Quality"
            },
            {
              "text": "No baseline data from previous seasons",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-401-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting, briefly review your notes on core models and workflow design. Write down one key concept from each lesson."
        }
      ],
      "questions": [
        {
          "id": "gardening-401-l03-q1",
          "text": "Which action best improves decisions in soil systems work?",
          "skillId": "gardening-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example from a neighbor"
            },
            {
              "id": "b",
              "text": "Define success criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip soil testing and move directly to planting"
            },
            {
              "id": "d",
              "text": "Avoid documenting the rationale for fertilizer choices"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve the reliability and transferability of your gardening decisions."
        },
        {
          "id": "gardening-401-l03-q2",
          "text": "In plant care, what is the strongest indicator of a high-quality process?",
          "skillId": "gardening-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "How fast you can water the plants"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Trying different things randomly without a log"
            },
            {
              "id": "d",
              "text": "A single story about a great harvest one year"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality processes are observable, repeatable, and measurable, allowing for consistent results and continuous improvement."
        },
        {
          "id": "gardening-401-l03-q3",
          "text": "When evaluating your season plan, which practice supports trustworthy conclusions?",
          "skillId": "gardening-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore unexpected plant failures"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and analyze failures"
            },
            {
              "id": "c",
              "text": "Change your yield goals after the harvest is complete"
            },
            {
              "id": "d",
              "text": "Remove context like weather conditions from your findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing to a baseline and analyzing failures prevent inaccurate claims and lead to better planning in the future."
        },
        {
          "id": "gardening-401-l03-q4",
          "text": "A mature integrated pest management (IPM) strategy should prioritize:",
          "skillId": "gardening-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Eliminating all insects at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across plant health, ecosystem impact, and effort"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition without scouting"
            },
            {
              "id": "d",
              "text": "No review of whether the strategy worked"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced approach aligns long-term garden health with accountability and sustainability."
        }
      ]
    },
    {
      "id": "gardening-401-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-401-l04-a1",
          "type": "image",
          "title": "Garden Health Dashboard",
          "content": "Sketch a simple dashboard for a crop. Include one leading indicator (e.g., weekly flower count), one lagging outcome (e.g., total harvest weight), and one diagnostic metric (e.g., soil moisture)."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l04-c1",
          "kind": "concept",
          "title": "Selecting the Right Method",
          "content": "Choosing the right gardening technique—like no-till vs. double-digging—requires careful thought. We must weigh factors like our constraints (time, space, energy), the quality of our information, and the potential cost of error (e.g., losing a crop). This lesson teaches you to justify your choice of method based on a clear-eyed assessment of your specific situation."
        },
        {
          "id": "gardening-401-l04-c2",
          "kind": "example",
          "title": "Tracking Garden Health with Metrics",
          "content": "Effective gardeners use metrics to monitor plant health. We'll explore how to link leading indicators (early signs like germination rate) with lagging outcomes (final results like crop yield). We also use diagnostic metrics (like soil pH) to understand why something is happening. This system allows you to detect problems early and respond intelligently."
        },
        {
          "id": "gardening-401-l04-c3",
          "kind": "concept",
          "title": "Diagnosing Garden Problems",
          "content": "When things go wrong, it's important to diagnose the problem accurately. We will learn to categorize common garden failures into groups like 'Nutrient Issues,' 'Pest & Disease,' 'Environmental Stress,' and 'Process Errors.' This structured approach helps you apply targeted fixes instead of relying on guesswork."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-401-l04-f1",
          "front": "Leading Indicator",
          "back": "An early measurement (e.g., weekly pest count) that helps predict a future result (e.g., final crop damage) before it is too late to act."
        },
        {
          "id": "gardening-401-l04-f2",
          "front": "Failure Taxonomy",
          "back": "A structured classification of problem types (e.g., nutrient, pest, water) used to design targeted and effective solutions."
        },
        {
          "id": "gardening-401-l04-f3",
          "front": "Cost of Error",
          "back": "The total negative impact (e.g., lost crops, wasted time, environmental damage) caused by an incorrect gardening decision."
        }
      ]
    },
    {
      "id": "gardening-401-l05",
      "title": "Case Studio: Improve a Gardening System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-401-l05-a1",
          "type": "practice",
          "title": "Problem-Solving Framework",
          "content": "Use a simple framework to structure your case analysis: 1. Problem Statement, 2. Potential Solutions, 3. Recommended Action, 4. Implementation Plan."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l05-c1",
          "kind": "practice",
          "title": "Analyzing a Garden Challenge",
          "content": "In this interactive case study, you'll analyze a realistic gardening scenario, such as a community garden with declining tomato yields. You will identify the core objectives, context, constraints (e.g., limited budget), and potential interventions, carefully considering the trade-offs of each option."
        },
        {
          "id": "gardening-401-l05-c2",
          "kind": "recap",
          "title": "Creating an Action Plan",
          "content": "Based on your analysis, you will develop a structured improvement plan. This proposal will include clear success criteria (e.g., 'increase yield by 15%'), assigned responsibilities for each task, and a timeline for implementation and follow-up. This exercise hones your planning and communication skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-401-l05-act1",
          "type": "scenario_practice",
          "title": "Solving the Tomato Decline",
          "description": "Choose one of three interventions to improve tomato yields, balancing time, cost, and quality constraints.",
          "instructions": [
            "Define what a 'successful' outcome looks like before choosing.",
            "Document one short-term tradeoff and one long-term benefit of your choice.",
            "Specify one leading indicator you will track to confirm your plan is working."
          ]
        },
        {
          "id": "gardening-401-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Actions to Garden Results",
          "description": "Connect each intervention with its most likely system-level effect.",
          "pairs": [
            {
              "left": "Stricter compost input rules",
              "right": "Higher soil quality and fewer weed seeds"
            },
            {
              "left": "Automated drip irrigation",
              "right": "More consistent soil moisture and less water waste"
            },
            {
              "left": "Mandatory end-of-season review",
              "right": "Improved planning and adaptation in later seasons"
            },
            {
              "left": "Standardized planting diagram",
              "right": "Reduced confusion and errors on planting day"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-401-l06-a1",
          "type": "practice",
          "title": "Synthesize Your Learning",
          "content": "Review your notes from the case study. How did the concepts of metrics and failure modes apply to the scenario? Jot down two connections."
        }
      ],
      "questions": [
        {
          "id": "gardening-401-l06-q1",
          "text": "A garden's bean crop has low yield. A soil test is expensive. What is the most systematic first step?",
          "skillId": "gardening-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Immediately apply a generic all-purpose fertilizer."
            },
            {
              "id": "b",
              "text": "Assume it was bad weather and do nothing."
            },
            {
              "id": "c",
              "text": "Analyze past garden logs for patterns and research common bean pests and diseases."
            },
            {
              "id": "d",
              "text": "Remove the beans and plant something else."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A systematic approach prioritizes low-cost data gathering and analysis before committing to expensive or irreversible actions."
        },
        {
          "id": "gardening-401-l06-q2",
          "text": "To better predict your final tomato harvest weight (a lagging outcome), which of the following is the best *leading indicator* to track?",
          "skillId": "gardening-401-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "The total weight of last year's harvest."
            },
            {
              "id": "b",
              "text": "The number of flowers that appear on the plants each week."
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
          "explanation": "A leading indicator is an early measure that predicts a future outcome. Flower count directly precedes fruit production and can signal potential yield early on."
        },
        {
          "id": "gardening-401-l06-q3",
          "text": "A gardener observes yellowing leaves on their plants. Using a failure taxonomy, how should they classify this problem initially?",
          "skillId": "gardening-401-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "As a 'Process Error' because they must have done something wrong."
            },
            {
              "id": "b",
              "text": "As a 'Symptom' that requires further diagnosis to find the root cause."
            },
            {
              "id": "c",
              "text": "As a 'Pest & Disease' problem without looking for evidence of pests."
            },
            {
              "id": "d",
              "text": "As an unsolvable problem."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Yellow leaves are a symptom, not a root cause. It could be a nutrient issue, a watering issue, or a disease. Proper diagnosis must come before classification and action."
        },
        {
          "id": "gardening-401-l06-q4",
          "text": "When proposing a new community composting system, which element is most critical for ensuring long-term success and accountability?",
          "skillId": "gardening-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Buying the most expensive compost bins available."
            },
            {
              "id": "b",
              "text": "A clear plan that defines success metrics, assigns ownership, and schedules regular reviews."
            },
            {
              "id": "c",
              "text": "A verbal agreement that everyone will help out when they have time."
            },
            {
              "id": "d",
              "text": "Hoping for the best without any formal plan."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Long-term success depends on a robust system that includes clear goals, accountability, and a feedback loop for continuous improvement."
        }
      ]
    }
  ]
};
