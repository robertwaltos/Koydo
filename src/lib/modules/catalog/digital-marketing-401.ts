import type { LearningModule } from "@/lib/modules/types";

export const digital_marketing_401_Module: LearningModule = {
  "id": "digital-marketing-401",
  "title": "Digital Marketing Mastery and Leadership",
  "description": "Level 401 curriculum in Digital Marketing, emphasizing audience strategy, campaign analytics, channel optimization, growth experimentation, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "marketing",
    "analytics"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for audience strategy and campaign analytics.",
    "Apply structured methods to plan, execute, and review channel optimization tasks.",
    "Interpret evidence using metrics, constraints, and context.",
    "Diagnose common failure modes and design recovery actions.",
    "Communicate tradeoffs clearly to technical and non-technical audiences.",
    "Build repeatable systems for sustained improvement in Digital Marketing."
  ],
  "lessons": [
    {
      "id": "digital-marketing-401-l01",
      "title": "Core Models for Digital Marketing",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "digital-marketing-401-l01-a1",
          "type": "image",
          "title": "Mental Models",
          "content": "Use the structured prompt and write your reasoning before finalizing answers.",
          "visualPrompt": "Diagram of interconnected gears representing core concepts."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "Establish a shared language for digital marketing strategy. This lesson focuses on defining the scope of analysis and standardizing terminology to ensure every decision is clear, consistent, and comparable across teams. Mastering this foundation prevents miscommunication and enables effective collaboration."
        },
        {
          "id": "digital-marketing-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Move beyond surface-level observations to understand the root causes of marketing outcomes. Learn to identify hidden assumptions, dependencies, and constraints that shape your results. Focusing on causes rather than symptoms allows for the development of more robust and effective strategies."
        },
        {
          "id": "digital-marketing-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "This recap covers the importance of setting high standards for evidence, maintaining disciplined activity logs, and establishing clear accountability. These practices ensure your marketing strategies are reliable, transparent, and effective, building a foundation of trust and continuous improvement."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "digital-marketing-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "digital-marketing-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "digital-marketing-401-l02",
      "title": "Digital Marketing Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "digital-marketing-401-l02-a1",
          "type": "practice",
          "title": "Workflow Design",
          "content": "Use the structured prompt and write your reasoning before finalizing answers.",
          "visualPrompt": "Icon of a flowchart or process diagram."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a detailed workflow for audience strategy and campaign analysis. Define the necessary inputs, critical checkpoints, expected outputs, and rollback triggers to manage the process from start to finish. This hands-on exercise builds practical skills for real-world application."
        },
        {
          "id": "digital-marketing-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "This recap emphasizes the critical practice of documenting every decision with its rationale, expected outcome, and verification point. This discipline enables rigorous post-implementation analysis, helping you learn from both successes and failures to refine future strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-401-l02-act1",
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
          "id": "digital-marketing-401-l02-act2",
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
      "id": "digital-marketing-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-401-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Use the structured prompt and write your reasoning before finalizing answers.",
          "visualPrompt": "Icon of a checklist on a clipboard."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-401-l03-q1",
          "text": "Which action best improves decisions in audience strategy work?",
          "skillId": "audience-strategy",
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
          "explanation": "Explicit criteria and testable assumptions improve the reliability and transferability of strategic decisions."
        },
        {
          "id": "digital-marketing-401-l03-q2",
          "text": "In campaign analytics, what is the strongest indicator of process quality?",
          "skillId": "process-quality",
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
          "explanation": "High-quality processes are observable, repeatable, and measurable, ensuring consistency and reliability."
        },
        {
          "id": "digital-marketing-401-l03-q3",
          "text": "When evaluating channel optimization, which practice supports trustworthy conclusions?",
          "skillId": "channel-optimization",
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
          "explanation": "Baselines and failure analysis provide necessary context, prevent overclaiming success, and improve future design quality."
        },
        {
          "id": "digital-marketing-401-l03-q4",
          "text": "A mature growth experimentation strategy should prioritize:",
          "skillId": "growth-experimentation",
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
          "explanation": "A balanced scorecard approach aligns short-term experiments with long-term performance and accountability."
        }
      ]
    },
    {
      "id": "digital-marketing-401-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "digital-marketing-401-l04-a1",
          "type": "mnemonic",
          "title": "Diagnostic Tools",
          "content": "Use the structured prompt and write your reasoning before finalizing answers.",
          "visualPrompt": "Icon of a dashboard with various charts and metrics."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right method requires balancing constraints, information quality, and the cost of error. This lesson teaches you to compare alternative approaches and justify your selection in different marketing scenarios, ensuring you pick the most effective tool for the job."
        },
        {
          "id": "digital-marketing-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-designed metric architecture connects leading indicators (early warnings), lagging outcomes (final results), and diagnostic measures (the 'why'). This structure allows teams to detect deviations from the plan early and respond thoughtfully, rather than reacting to lagging results."
        },
        {
          "id": "digital-marketing-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "This recap introduces a framework for classifying failures into four categories: data, process, execution, and governance. By diagnosing the root cause accurately, you can design targeted and effective recovery plans instead of applying one-size-fits-all solutions."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "digital-marketing-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "digital-marketing-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "digital-marketing-401-l05",
      "title": "Case Studio: Improving a Marketing System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "digital-marketing-401-l05-a1",
          "type": "practice",
          "title": "Case Analysis",
          "content": "Use the structured prompt and write your reasoning before finalizing answers.",
          "visualPrompt": "Icon of a magnifying glass over a case file."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will deconstruct a realistic marketing scenario into its core components: objectives, context, constraints, and potential interventions. Practice identifying the key trade-offs associated with each option to inform your strategic recommendation."
        },
        {
          "id": "digital-marketing-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "This recap guides you in creating a structured proposal to improve the marketing system from the case study. Your proposal must define success criteria, assign ownership for key actions, and establish a timeline for follow-up to ensure accountability and measure progress."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-401-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve channel optimization outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "digital-marketing-401-l05-act2",
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
      "id": "digital-marketing-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-401-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Use the structured prompt and write your reasoning before finalizing answers.",
          "visualPrompt": "Icon of a brain with interconnected nodes."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-401-l06-q1",
          "text": "When selecting a new analytics tool, what is the most critical first step in a structured method selection process?",
          "skillId": "method-selection",
          "options": [
            {
              "id": "a",
              "text": "Choose the most popular tool on the market"
            },
            {
              "id": "b",
              "text": "Define the problem, constraints, and cost of error"
            },
            {
              "id": "c",
              "text": "Immediately start a free trial of the leading option"
            },
            {
              "id": "d",
              "text": "Ask a single team member for their opinion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A structured approach requires defining the problem space and constraints before evaluating solutions, minimizing risk and ensuring the tool fits the actual need."
        },
        {
          "id": "digital-marketing-401-l06-q2",
          "text": "A marketing team notices their 'Customer Lifetime Value' (a lagging indicator) is declining. To diagnose future problems earlier, what should they focus on improving?",
          "skillId": "metric-analysis",
          "options": [
            {
              "id": "a",
              "text": "The final quarterly revenue report"
            },
            {
              "id": "b",
              "text": "Leading indicators like 'Daily User Engagement' or 'Trial Conversion Rate'"
            },
            {
              "id": "c",
              "text": "The total number of ad impressions served last month"
            },
            {
              "id": "d",
              "text": "The previous year's overall profit margin"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators provide early signals about future outcomes, allowing teams to intervene proactively before lagging indicators like LTV are significantly impacted."
        },
        {
          "id": "digital-marketing-401-l06-q3",
          "text": "A campaign fails because the target audience was defined using outdated and incomplete data. According to a failure taxonomy, this is primarily a failure of:",
          "skillId": "failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "Execution"
            },
            {
              "id": "b",
              "text": "Governance"
            },
            {
              "id": "c",
              "text": "Process"
            },
            {
              "id": "d",
              "text": "Data"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The root cause is the quality of the input data, which is a distinct category in a failure taxonomy, separate from how the campaign was executed or managed."
        },
        {
          "id": "digital-marketing-401-l06-q4",
          "text": "In a case study about improving a marketing system, what is the primary goal of creating a structured 'Improvement Proposal'?",
          "skillId": "system-improvement",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for past failures"
            },
            {
              "id": "b",
              "text": "To document ideas without a plan for action"
            },
            {
              "id": "c",
              "text": "To secure a larger budget immediately"
            },
            {
              "id": "d",
              "text": "To define success criteria, assign ownership, and set a timeline for accountable change"
            }
          ],
          "correctOptionId": "d",
          "explanation": "An effective improvement proposal translates analysis into action by establishing clear goals, accountability, and a schedule for implementation and review."
        }
      ]
    }
  ]
};
