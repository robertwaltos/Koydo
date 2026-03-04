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
  "version": "2.0.0",
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
      "title": "Core Models for Gardening",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Gardening 301, using clear and specific language is essential for effective communication. We will explore how to establish well-defined boundaries for our gardening projects, which helps everyone understand the limits and goals of our work. Additionally, we will identify the main focus of our analysis, ensuring that we know exactly what we are studying or improving. Finally, we will learn the importance of using consistent terminology throughout our discussions. By doing this, we can make decisions that are easily compared and understood by all team members, fostering collaboration and clarity in our gardening efforts."
        },
        {
          "id": "gardening-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To achieve success in Gardening, it is essential to grasp the underlying reasons for various outcomes, rather than merely focusing on the results themselves. In this lesson, we will delve into our assumptions about gardening practices, examine how different factors are interconnected, and identify any limitations or challenges we may encounter. By doing so, we will be better equipped to develop effective solutions that tackle the root problems, rather than just addressing the surface issues. This deeper understanding will empower us to make informed decisions and improve our gardening strategies."
        },
        {
          "id": "gardening-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we will introduce important practices that ensure our gardening projects are carried out reliably. We will discuss the importance of maintaining high standards of evidence, keeping detailed records, and having clear accountability measures in place. These practices are essential for achieving consistent and trustworthy results.\nContext recap: In this section, we will introduce important practices that ensure our gardening projects are carried out reliably. We will discuss the importance of maintaining high standards of evidence, keeping detailed records, and having clear accountability measures in place. These practices are essential for achieving consistent and trustworthy results."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "gardening-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "gardening-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
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
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this engaging interactive lab, you will get the chance to design a comprehensive workflow for effectively managing soil systems and nurturing plants. You will start by identifying the essential inputs, such as nutrients and water, that your plants need to thrive. Next, you will establish key checkpoints to monitor the health and growth of your plants throughout the process. After that, you will define the expected outputs, which could include healthy plants or successful harvests. Finally, you will set up rollback triggers, which are important steps to take if any problems arise, ensuring that you can quickly address any issues and keep your plants healthy. This hands-on experience will help you understand the importance of each component in the gardening workflow and how they work together to support plant care."
        },
        {
          "id": "gardening-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during our gardening projects. Each decision should include the reasoning behind it, the expected outcome, and a point for verification. This will help us analyze our decisions after the project is completed and learn from our experiences.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during our gardening projects. Each decision should include the reasoning behind it, the expected outcome, and a point for verification. This will help us analyze our decisions after the project is completed and learn from our experiences."
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
          "text": "Which action best improves decisions in soil systems work?",
          "skillId": "gardening-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "gardening-301-l03-q2",
          "text": "In plant care, what is the strongest indicator of process quality?",
          "skillId": "gardening-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "gardening-301-l03-q3",
          "text": "When evaluating season planning, which practice supports trustworthy conclusions?",
          "skillId": "gardening-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "gardening-301-l03-q4",
          "text": "A mature integrated pest management strategy should prioritize:",
          "skillId": "gardening-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    },
    {
      "id": "gardening-301-l04",
      "title": "Methods, Metrics, and Failure Modes in Gardening",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When choosing the best methods for gardening, it’s important to think about several key factors. First, we need to recognize any limitations we might face, such as the space we have or the types of plants we want to grow. Next, we should evaluate the quality of the information we have; this means checking if the advice we find is reliable and based on good research. Finally, we must consider the potential cost of making mistakes, which can include wasted time, money, or resources. In this lesson, you will have the opportunity to compare different gardening methods and explain why some approaches work better than others in specific situations. This will help you make informed decisions in your gardening projects and improve your overall success as a gardener."
        },
        {
          "id": "gardening-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-organized metric architecture is like a roadmap for gardening success. It connects leading indicators, which are signs that show how well things are going, with lagging outcomes, which are the results we see after some time. Additionally, it includes diagnostic measures, which help us understand why things might not be going as planned. By using this structure, teams can spot any problems early on, allowing them to respond thoughtfully and effectively to keep their gardening projects on track.\nContext recap: A well-organized metric architecture is like a roadmap for gardening success. It connects leading indicators, which are signs that show how well things are going, with lagging outcomes, which are the results we see after some time. Additionally, it includes diagnostic measures, which help us understand why things might not be going as planned. By using this structure, teams can spot any problems early on, allowing them to respond thoughtfully and effectively to keep their gardening projects on track."
        },
        {
          "id": "gardening-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue rather than using a one-size-fits-all approach.\nContext recap: In this recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue rather than using a one-size-fits-all approach."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "gardening-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "gardening-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "gardening-301-l05",
      "title": "Case Studio: Improve a Gardening System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic gardening scenario into its key components: the main objective, the context in which it occurs, any constraints we need to consider, and the different options for intervention. Be sure to include notes on the trade-offs involved with each option.\nContext recap: In this interactive case study, you will break down a realistic gardening scenario into its key components: the main objective, the context in which it occurs, any constraints we need to consider, and the different options for intervention. Be sure to include notes on the trade-offs involved with each option."
        },
        {
          "id": "gardening-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a staged improvement proposal for the gardening system you analyzed. Your proposal should include clear criteria for success, identify who will be responsible for each part of the plan, and outline a timeline for follow-up actions to ensure everything stays on track.\nContext recap: In this recap, you will present a staged improvement proposal for the gardening system you analyzed. Your proposal should include clear criteria for success, identify who will be responsible for each part of the plan, and outline a timeline for follow-up actions to ensure everything stays on track."
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
          "text": "Which action best improves decisions in soil systems work?",
          "skillId": "gardening-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "gardening-301-l06-q2",
          "text": "In plant care, what is the strongest indicator of process quality?",
          "skillId": "gardening-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "gardening-301-l06-q3",
          "text": "When evaluating season planning, which practice supports trustworthy conclusions?",
          "skillId": "gardening-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "gardening-301-l06-q4",
          "text": "A mature integrated pest management strategy should prioritize:",
          "skillId": "gardening-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    }
  ]
};
