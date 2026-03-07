import type { LearningModule } from "@/lib/modules/types";

export const Gardening201Module: LearningModule = {
  "id": "gardening-201",
  "title": "Gardening Applied Practice",
  "description": "Level 201 curriculum in Gardening, emphasizing soil systems, plant care, season planning, integrated pest management, and real-world decision quality through structured practice and assessment.",
  "subject": "Agriculture",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "applied-science"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
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
      "id": "gardening-201-l01",
      "title": "Foundations of a Healthy Garden",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-201-l01-a1",
          "type": "image",
          "title": "Garden System Diagram",
          "content": "A visual diagram showing inputs (sun, water, compost), processes (photosynthesis, decomposition), and outputs (vegetables, flowers, healthy soil)."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l01-c1",
          "kind": "concept",
          "title": "Defining Your Garden's Scope",
          "content": "To start any successful gardening project, we first need to set clear boundaries. This means deciding exactly what we'll be focusing on—is it a single raised bed, a container garden on a patio, or a whole backyard plot? By defining our scope, we can manage our resources effectively and make focused decisions. We'll also establish a shared vocabulary, ensuring that when we talk about 'soil health' or 'yield,' everyone understands what we mean. This clarity is the first step to a well-managed and productive garden."
        },
        {
          "id": "gardening-201-l01-c2",
          "kind": "concept",
          "title": "Cause and Effect in the Garden",
          "content": "Great gardeners understand why things happen, not just what happens. In this section, we'll learn to think critically about the relationships between our actions and the garden's results. We'll explore common assumptions (like 'more water is always better') and identify the real-world constraints we face, such as limited sunlight or poor soil drainage. By focusing on the root causes of problems instead of just treating symptoms, we can make smarter, more effective decisions that lead to a healthier garden."
        },
        {
          "id": "gardening-201-l01-c3",
          "kind": "recap",
          "title": "Tracking and Learning",
          "content": "This lesson introduces the core practices for continuous improvement in the garden. We'll cover how to set standards for the information we trust, the importance of keeping a detailed garden journal, and how to create simple systems for accountability. These habits are essential for turning observations into reliable knowledge, ensuring our gardening efforts become more effective season after season."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-201-l01-f1",
          "front": "Unit of Analysis",
          "back": "The specific part of your garden you are focusing on to make a decision, like a single tomato plant, a raised bed, or the compost pile."
        },
        {
          "id": "gardening-201-l01-f2",
          "front": "Constraint Mapping",
          "back": "A method for identifying the limits you're working with, such as available sunlight, space, budget, or time."
        },
        {
          "id": "gardening-201-l01-f3",
          "front": "Evidence Standard",
          "back": "The quality of information you need before making a decision, like checking multiple sources before trying a new fertilizer."
        }
      ]
    },
    {
      "id": "gardening-201-l02",
      "title": "Designing Your Garden Workflow",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "gardening-201-l02-a1",
          "type": "template",
          "title": "Garden Workflow Template",
          "content": "A downloadable template to plan your weekly gardening tasks, including inputs, checks, and expected results."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l02-c1",
          "kind": "practice",
          "title": "Building a Soil and Plant Care Plan",
          "content": "In this activity, you'll design a complete workflow for managing your garden. You will identify necessary inputs like compost and water, set specific checkpoints to monitor plant health, define your desired outputs like a successful harvest, and plan for potential setbacks. This hands-on exercise will help you create a structured, repeatable process for taking care of your plants and soil, making you a more organized and effective gardener."
        },
        {
          "id": "gardening-201-l02-c2",
          "kind": "recap",
          "title": "Keeping a Garden Journal",
          "content": "We'll recap the importance of logging your gardening decisions. A good garden journal doesn't just track what you did; it includes why you did it, what you expected to happen, and how you'll verify the result. This practice is key to learning from both your successes and failures, allowing you to refine your approach over time."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-201-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Garden Tasks to Goals",
          "description": "Match each gardening task to its primary purpose in a workflow.",
          "pairs": [
            {
              "left": "Testing soil pH",
              "right": "Ensures correct nutrients are available to plants"
            },
            {
              "left": "Weekly pest inspection",
              "right": "Stops infestations before they spread"
            },
            {
              "left": "Measuring vegetable yield",
              "right": "Measures whether the season's objective was met"
            },
            {
              "left": "Reviewing season notes",
              "right": "Captures lessons for the next planting cycle"
            }
          ]
        },
        {
          "id": "gardening-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Classifying Garden Challenges",
          "description": "Sort each gardening challenge into the correct risk category.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Planting sun-loving plants in a shady area",
              "bucket": "Strategic"
            },
            {
              "text": "Forgetting when to apply fertilizer",
              "bucket": "Operational"
            },
            {
              "text": "Using un-composted manure that burns plants",
              "bucket": "Quality"
            },
            {
              "text": "Not knowing what a 'good' harvest size is",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-201-l03-a1",
          "type": "checklist",
          "title": "Pre-Quiz Review",
          "content": "A checklist of key concepts from Lessons 1 and 2, including garden scope, constraints, and workflow components."
        }
      ],
      "questions": [
        {
          "id": "gardening-201-l03-q1",
          "text": "Which action best improves decisions about your garden's soil health?",
          "skillId": "gardening-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Copying a method from a single online video"
            },
            {
              "id": "b",
              "text": "Defining success, comparing options, and testing your assumptions"
            },
            {
              "id": "c",
              "text": "Skipping measurements and adding amendments randomly"
            },
            {
              "id": "d",
              "text": "Avoiding writing down your plan or results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A structured approach with clear criteria and testing improves the reliability of your decisions."
        },
        {
          "id": "gardening-201-l03-q2",
          "text": "In plant care, what is the strongest indicator of a high-quality process?",
          "skillId": "gardening-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "How fast you can water all the plants"
            },
            {
              "id": "b",
              "text": "A plan with traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Trying different things each week without taking notes"
            },
            {
              "id": "d",
              "text": "Remembering one time you had a great harvest"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A quality process is observable, repeatable, and measurable, which allows for consistent results and learning."
        },
        {
          "id": "gardening-201-l03-q3",
          "text": "When evaluating your season plan, which practice leads to the most trustworthy conclusions?",
          "skillId": "gardening-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignoring plants that didn't grow well"
            },
            {
              "id": "b",
              "text": "Using baseline comparisons and analyzing failures"
            },
            {
              "id": "c",
              "text": "Changing your goals after you see the results"
            },
            {
              "id": "d",
              "text": "Forgetting to consider the weather that season"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing to a baseline and analyzing what went wrong helps you learn and improve future plans."
        },
        {
          "id": "gardening-201-l03-q4",
          "text": "A mature integrated pest management (IPM) strategy should prioritize:",
          "skillId": "gardening-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Eliminating all insects at any cost"
            },
            {
              "id": "b",
              "text": "Balancing plant health, environmental impact, and effort"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "Never reviewing if the strategy worked"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced approach ensures long-term sustainability and aligns with responsible gardening practices."
        }
      ]
    },
    {
      "id": "gardening-201-l04",
      "title": "Advanced Gardening Techniques",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-201-l04-a1",
          "type": "image",
          "title": "Problem-Solving Flowchart",
          "content": "A flowchart that guides you from identifying a problem (e.g., yellow leaves) to diagnosing the cause (e.g., nutrient deficiency, overwatering) and finding a solution."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l04-c1",
          "kind": "concept",
          "title": "Choosing the Right Gardening Method",
          "content": "When deciding how to garden, it's important to match your method to your situation. We'll evaluate different techniques like container gardening, raised beds, or no-till farming by considering key factors. These include your specific constraints (like space or soil type), the quality of information you have, and the potential cost of mistakes. You will learn to compare the pros and cons of various methods and justify why one approach is a better fit for a given scenario."
        },
        {
          "id": "gardening-201-l04-c2",
          "kind": "example",
          "title": "Measuring Your Garden's Success",
          "content": "A good measurement system helps you understand your garden's health. It connects leading indicators (early signs of progress, like germination rates), with lagging outcomes (the final harvest). It also includes diagnostic measures to help you understand why you got those results. By linking these metrics, you can spot deviations from your plan early, make thoughtful adjustments, and improve your gardening practices. We will walk through building a simple but effective measurement system for your garden."
        },
        {
          "id": "gardening-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Garden Problems",
          "content": "In this recap, we'll classify common gardening failures into useful categories: information gaps, process flaws, execution mistakes, and planning oversights. By understanding the type of problem you're facing, you can develop a targeted solution instead of relying on guesswork. This structured approach to problem-solving is a key skill for any advanced gardener."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-201-l04-f1",
          "front": "Leading Indicator",
          "back": "An early sign that predicts future results, like healthy leaf growth suggesting a good harvest later."
        },
        {
          "id": "gardening-201-l04-f2",
          "front": "Failure Taxonomy",
          "back": "A way to categorize garden problems to find the right solution, e.g., pest problems, soil problems, or watering problems."
        },
        {
          "id": "gardening-201-l04-f3",
          "front": "Cost of Error",
          "back": "The negative impact of a bad decision, like losing a crop due to using the wrong pesticide."
        }
      ]
    },
    {
      "id": "gardening-201-l05",
      "title": "Case Study: Reviving a Community Garden",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-201-l05-a1",
          "type": "document",
          "title": "Case Study Brief",
          "content": "A one-page document outlining the challenges of the 'Sunnyvale Community Garden', including photos, soil test results, and gardener interviews."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l05-c1",
          "kind": "practice",
          "title": "Analyzing the Garden's Situation",
          "content": "In this interactive case study, you will analyze a realistic gardening scenario. Your task is to break down the situation into its key components: the garden's main objectives, its environmental context, the constraints it faces (like budget or volunteer time), and the available options for improvement. You will also identify the important trade-offs for each option."
        },
        {
          "id": "gardening-201-l05-c2",
          "kind": "recap",
          "title": "Creating an Improvement Plan",
          "content": "Based on your analysis, you will develop a structured proposal to improve the community garden. This plan must include clear criteria for success, assign responsibility for key tasks, and set a timeline for follow-up actions to ensure the plan is implemented effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-201-l05-act1",
          "type": "scenario_practice",
          "title": "Community Garden Turnaround",
          "description": "Choose one of three interventions to improve the community garden's harvest, while working under time and budget constraints.",
          "instructions": [
            "First, define what a 'successful harvest' means for this garden.",
            "Document one short-term tradeoff and one long-term benefit of your chosen intervention.",
            "Specify one key metric you will use to confirm your intervention worked."
          ]
        },
        {
          "id": "gardening-201-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Solutions to Problems",
          "description": "Connect each intervention with its most likely positive effect on the garden system.",
          "pairs": [
            {
              "left": "Testing new compost for contaminants",
              "right": "Healthier soil and fewer plant diseases"
            },
            {
              "left": "Automating the watering schedule",
              "right": "Faster detection of irrigation problems"
            },
            {
              "left": "Holding a season-end review meeting",
              "right": "Better planning and adaptation for next year"
            },
            {
              "left": "Creating a shared planting calendar",
              "right": "Reduced confusion and better coordination"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-201-l06",
      "title": "Checkpoint 2: Advanced Techniques & Problem-Solving",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-201-l06-a1",
          "type": "summary",
          "title": "Key Takeaways",
          "content": "A summary of key concepts from Lessons 4 and 5, including how to choose methods, measure success, and analyze case studies."
        }
      ],
      "questions": [
        {
          "id": "gardening-201-l06-q1",
          "text": "You have a small, sunny balcony and want to grow tomatoes. Which gardening method is the most appropriate choice based on these constraints?",
          "skillId": "gardening-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A large, in-ground tilled plot"
            },
            {
              "id": "b",
              "text": "Container gardening with large pots"
            },
            {
              "id": "c",
              "text": "Hydroponics with no direct sunlight"
            },
            {
              "id": "d",
              "text": "A no-till farm-scale approach"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Container gardening is the best method for a small, constrained space like a balcony."
        },
        {
          "id": "gardening-201-l06-q2",
          "text": "Which of the following is a 'leading indicator' of a healthy garden?",
          "skillId": "gardening-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The total weight of your final harvest"
            },
            {
              "id": "b",
              "text": "The number of bees you see visiting your flowers"
            },
            {
              "id": "c",
              "text": "The flavor of the vegetables after cooking"
            },
            {
              "id": "d",
              "text": "A journal entry from last year about a pest problem"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Pollinator activity is an early sign (a leading indicator) that predicts a successful fruit and vegetable yield (a lagging outcome)."
        },
        {
          "id": "gardening-201-l06-q3",
          "text": "Your tomato plants have yellow leaves with green veins. After checking your journal, you see you've been watering consistently and there are no visible pests. What is the most likely type of failure?",
          "skillId": "gardening-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "An execution error (e.g., overwatering)"
            },
            {
              "id": "b",
              "text": "A pest problem"
            },
            {
              "id": "c",
              "text": "An information gap (e.g., a nutrient deficiency in the soil)"
            },
            {
              "id": "d",
              "text": "A planning oversight (e.g., planting in the wrong season)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The symptoms point to a nutrient deficiency, which is a problem related to the soil's condition—an information gap that a soil test could resolve."
        },
        {
          "id": "gardening-201-l06-q4",
          "text": "In the community garden case study, the primary goal is to increase the harvest for a food bank. Which intervention offers the most direct path to achieving this goal?",
          "skillId": "gardening-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Painting the tool shed"
            },
            {
              "id": "b",
              "text": "Planting only flowers instead of vegetables"
            },
            {
              "id": "c",
              "text": "Improving the soil quality with high-quality compost"
            },
            {
              "id": "d",
              "text": "Creating a new logo for the garden"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Improving soil quality is a fundamental action that directly impacts plant health and yield, aligning perfectly with the goal of increasing the harvest."
        }
      ]
    }
  ]
};
