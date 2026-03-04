import type { LearningModule } from "@/lib/modules/types";

export const AiWorkflows201Module: LearningModule = {
  "id": "ai-workflows-201",
  "title": "AI Workflows Applied Practice",
  "description": "Level 201 curriculum in AI Workflows, emphasizing prompt design, retrieval pipelines, agent orchestration, evaluation metrics, and real-world decision quality through structured practice and assessment.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai-engineering"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for prompt design and retrieval pipelines",
    "Apply structured methods to plan, execute, and review agent orchestration tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in AI Workflows"
  ],
  "lessons": [
    {
      "id": "ai-workflows-201-l01",
      "title": "Core Models for AI Workflows",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-workflows-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In AI Workflows at level 201, using clear and precise language is essential for effective communication. This involves defining the boundaries of our work, which helps us understand what is included and what is not. We also need to identify the specific unit we are analyzing, whether it's data, processes, or outcomes. Additionally, it is crucial that everyone involved uses the same terminology. When we all speak the same language, we can make informed decisions and compare our results across different teams more effectively. This clarity not only enhances collaboration but also ensures that everyone is on the same page, leading to better outcomes in our AI projects."
        },
        {
          "id": "ai-workflows-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To truly excel in AI Workflows, it's essential to grasp the reasons behind events, rather than merely observing the outcomes. In this lesson, we will delve into the assumptions we often make, the dependencies that connect different elements, and the constraints we encounter in our work. By concentrating on the root causes of challenges, we can develop solutions that effectively tackle the real issues at hand, rather than just addressing the superficial symptoms. This deeper understanding will empower you to create more impactful and lasting changes in your AI projects."
        },
        {
          "id": "ai-workflows-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this lesson, we will explore some important practices that help us achieve reliable results in our work. First, we will discuss the importance of maintaining high standards for evidence. This means that we should always collect and present information that is accurate and trustworthy. Next, we will talk about logging discipline, which involves keeping detailed records of our processes and decisions. This helps us track our progress and understand how we arrived at our conclusions. Finally, we will establish clear accountability loops, which are systems that ensure everyone involved knows their responsibilities and can be held accountable for their actions. By following these practices, we can build trust in our results and make better, informed decisions in our projects."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ai-workflows-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "ai-workflows-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "ai-workflows-201-l02",
      "title": "AI Workflows Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-workflows-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive activity, you will have the opportunity to construct a complete workflow for designing prompts and retrieving information. This includes identifying the inputs you will use, setting up checkpoints to monitor progress, determining the expected outputs, and establishing rollback triggers to revert to previous states if needed.\nContext recap: In this interactive activity, you will have the opportunity to construct a complete workflow for designing prompts and retrieving information. This includes identifying the inputs you will use, setting up checkpoints to monitor progress, determining the expected outputs, and establishing rollback triggers to revert to previous states if needed."
        },
        {
          "id": "ai-workflows-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we emphasize the importance of logging every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice allows us to analyze our decisions after the workflow has run, helping us learn and improve in the future.\nContext recap: In this recap, we emphasize the importance of logging every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice allows us to analyze our decisions after the workflow has run, helping us learn and improve in the future."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-201-l02-act1",
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
          "id": "ai-workflows-201-l02-act2",
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
      "id": "ai-workflows-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-workflows-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-201-l03-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-201-skill-core",
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
          "id": "ai-workflows-201-l03-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-201-skill-process",
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
          "id": "ai-workflows-201-l03-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-201-skill-eval",
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
          "id": "ai-workflows-201-l03-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-201-skill-strategy",
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
      "id": "ai-workflows-201-l04",
      "title": "Methods, Metrics, and Failure Modes in AI Workflows",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-workflows-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right methods for AI Workflows is a crucial step that involves careful consideration of several important factors. First, you need to think about any constraints that might affect your choices, such as time limits or resource availability. Next, evaluate the quality of the information you have; high-quality data can lead to better outcomes. Lastly, consider the potential cost of errors—mistakes can be expensive and time-consuming to fix. In this lesson, you will have the opportunity to compare various methods and explain why a specific method is the best fit for different scenarios in AI Workflows. This process will help you develop critical thinking skills and make informed decisions in your future projects."
        },
        {
          "id": "ai-workflows-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture is like a roadmap for teams working on AI projects. It connects leading indicators, which are signs that help us predict how well we might do in the future, with lagging outcomes, which show us how we performed in the past. Additionally, it includes diagnostic measures that help us understand why we achieved those results. By having this clear structure, teams can spot any changes or problems early on and respond thoughtfully to keep their projects on the right path.\nContext recap: A well-structured metric architecture is like a roadmap for teams working on AI projects. It connects leading indicators, which are signs that help us predict how well we might do in the future, with lagging outcomes, which show us how we performed in the past. Additionally, it includes diagnostic measures that help us understand why we achieved those results. By having this clear structure, teams can spot any changes or problems early on and respond thoughtfully to keep their projects on the right path."
        },
        {
          "id": "ai-workflows-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can create specific plans to address each type of issue, rather than applying generic solutions that may not be effective.\nContext recap: In this recap, we categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can create specific plans to address each type of issue, rather than applying generic solutions that may not be effective."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ai-workflows-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ai-workflows-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "ai-workflows-201-l05",
      "title": "Case Studio: Improve a AI Workflows System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-workflows-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic scenario into its key components. This includes identifying the main objective, understanding the context in which it occurs, recognizing any constraints that may limit options, and exploring various intervention strategies. Be sure to note the trade-offs involved in each option.\nContext recap: In this interactive case study, you will break down a realistic scenario into its key components. This includes identifying the main objective, understanding the context in which it occurs, recognizing any constraints that may limit options, and exploring various intervention strategies. Be sure to note the trade-offs involved in each option."
        },
        {
          "id": "ai-workflows-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured improvement proposal based on your analysis. This proposal should include clear criteria for success, a mapping of who will be responsible for each part of the plan, and a timeline for follow-up actions. This structured approach helps ensure that everyone knows their roles and the timeline for achieving improvements.\nContext recap: In this recap, you will present a structured improvement proposal based on your analysis. This proposal should include clear criteria for success, a mapping of who will be responsible for each part of the plan, and a timeline for follow-up actions. This structured approach helps ensure that everyone knows their roles and the timeline for achieving improvements."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-201-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve agent orchestration outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "ai-workflows-201-l05-act2",
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
      "id": "ai-workflows-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-workflows-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-201-l06-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-201-skill-core",
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
          "id": "ai-workflows-201-l06-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-201-skill-process",
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
          "id": "ai-workflows-201-l06-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-201-skill-eval",
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
          "id": "ai-workflows-201-l06-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-201-skill-strategy",
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
