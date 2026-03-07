import type { LearningModule } from "@/lib/modules/types";

export const biotechnology_301_Module: LearningModule = {
  "id": "biotechnology-301",
  "title": "Biotechnology Systems and Analysis",
  "description": "Level 301 curriculum in Biotechnology, emphasizing genetic engineering, bioprocess systems, clinical translation, bioethics, and real-world decision quality through structured practice and assessment.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "stem",
    "life-sciences"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for genetic engineering and bioprocess systems.",
    "Apply structured methods to plan, execute, and review clinical translation tasks.",
    "Interpret evidence using metrics, constraints, and context.",
    "Diagnose common failure modes and design targeted recovery actions.",
    "Communicate complex tradeoffs clearly to technical and non-technical audiences.",
    "Build repeatable systems for sustained improvement in Biotechnology."
  ],
  "lessons": [
    {
      "id": "biotechnology-301-l01",
      "title": "Core Models for Biotechnology",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "biotechnology-301-l01-a1",
          "type": "visual_prompt",
          "title": "Conceptual Framework Diagram",
          "content": "A diagram showing how a shared vocabulary, causal links, and evidence standards connect to form a robust decision-making framework."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In advanced biotechnology, precise language is critical. We will establish a clear operating vocabulary to define the scope of our work, identify the primary unit of analysis, and ensure consistent terminology. This allows for comparable decisions across different teams and projects, fostering effective collaboration and reliable outcomes."
        },
        {
          "id": "biotechnology-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To solve complex problems in biotechnology, we must understand the root causes of events, not just their symptoms. This lesson focuses on identifying assumptions, dependencies, and constraints that shape our system. By mapping these causal relationships, we can direct our efforts effectively and develop more sustainable solutions."
        },
        {
          "id": "biotechnology-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "This section introduces non-negotiable practices for reliable work. We will cover the importance of setting clear evidence standards, maintaining disciplined logging of all actions and decisions, and creating accountability loops for review. These practices are essential for ensuring that projects are executed with integrity and precision."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "biotechnology-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries and dependencies that shape feasible options."
        },
        {
          "id": "biotechnology-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "biotechnology-301-l02",
      "title": "Biotechnology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "biotechnology-301-l02-a1",
          "type": "visual_prompt",
          "title": "Workflow Blueprint",
          "content": "An interactive template for building a bioprocess workflow, with placeholders for inputs, checkpoints, outputs, and rollback triggers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will construct a complete workflow for a genetic engineering or bioprocess system. This involves defining necessary inputs, establishing quality checkpoints, specifying expected outputs, and setting rollback triggers to manage deviations. This hands-on exercise builds practical understanding of workflow design."
        },
        {
          "id": "biotechnology-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "We will reinforce the critical practice of logging every significant decision. Each log entry must include the rationale, the expected effect, and a clear verification point. This discipline enables rigorous post-project analysis, helping us learn from experience and systematically improve future performance."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-301-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Governance",
          "description": "Match each workflow component to its primary governance function.",
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
              "right": "Captures lessons for the next iteration"
            }
          ]
        },
        {
          "id": "biotechnology-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort each risk into its appropriate category: Strategic, Operational, or Quality.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Misaligned project goals",
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
              "text": "No performance baseline",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-301-l03-a1",
          "type": "visual_prompt",
          "title": "Reasoning Checklist",
          "content": "A checklist to review your thought process: 1. Identify the core concept being tested. 2. Eliminate incorrect options with justification. 3. Confirm the best answer aligns with course principles."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-301-l03-q1",
          "text": "Which action best improves decision quality in a genetic engineering project?",
          "skillId": "biotechnology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on a single, unverified data point"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip defining metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting the rationale to save time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria, systematic comparison, and tested assumptions improve reliability and transferability of decisions."
        },
        {
          "id": "biotechnology-301-l03-q2",
          "text": "In bioprocess systems, what is the strongest indicator of a high-quality process?",
          "skillId": "biotechnology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "High output speed, regardless of consistency"
            },
            {
              "id": "b",
              "text": "Traceable steps, defined checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without decision logs"
            },
            {
              "id": "d",
              "text": "Anecdotal reports of one-time success"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A high-quality process is observable, repeatable, and measurable, allowing for continuous improvement."
        }
      ]
    },
    {
      "id": "biotechnology-301-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-301-l04-a1",
          "type": "visual_prompt",
          "title": "The '3M' Framework",
          "content": "A visual mnemonic: Methods (Choosing the right tool), Metrics (Measuring what matters), and Modes of Failure (Anticipating problems)."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right method requires a disciplined approach. We must evaluate options based on project constraints, information quality, and the potential cost of error. In this lesson, you will learn to compare alternative methods and justify your selection for a given biotechnology scenario, ensuring your choice is both effective and defensible."
        },
        {
          "id": "biotechnology-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-designed metric architecture is vital for tracking progress. It connects leading indicators (early signals), lagging outcomes (final results), and diagnostic measures (explanatory data). This structure allows teams to detect deviations early and respond thoughtfully, keeping projects on track and improving predictability."
        },
        {
          "id": "biotechnology-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "We will classify failures into four key categories: data integrity, process design, execution error, and governance oversight. By organizing failures into a taxonomy, we can move beyond generic solutions and develop targeted, effective remedies for each class of problem, accelerating our learning and improvement cycles."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-301-l04-f1",
          "front": "Leading indicator",
          "back": "A predictive metric that signals probable future outcomes before final results are available."
        },
        {
          "id": "biotechnology-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted corrective actions."
        },
        {
          "id": "biotechnology-301-l04-f3",
          "front": "Cost of error",
          "back": "The total operational, financial, or reputational impact caused by an incorrect decision or action."
        }
      ]
    },
    {
      "id": "biotechnology-301-l05",
      "title": "Case Study: Improving a Biotechnology System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-301-l05-a1",
          "type": "visual_prompt",
          "title": "Case Analysis Canvas",
          "content": "A structured canvas with sections for Objective, Context, Constraints, Interventions, and Trade-offs to guide your analysis."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will deconstruct a realistic biotechnology scenario. Your task is to identify the core objective, map the operating context, define the constraints, and outline potential interventions. You will document the trade-offs for each option, developing your critical thinking and strategic planning skills."
        },
        {
          "id": "biotechnology-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Based on your case analysis, you will formulate a structured improvement proposal. This proposal must include clear success criteria, an accountability map (who is responsible for what), and a timeline for follow-up actions. This exercise hones your ability to translate analysis into a clear, actionable plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve clinical translation outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit for your chosen path.",
            "Specify a metric that will confirm success in the next cycle."
          ]
        },
        {
          "id": "biotechnology-301-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect each intervention with its most likely system-level effect.",
          "pairs": [
            {
              "left": "Tighter data intake criteria",
              "right": "Higher signal quality and less downstream rework"
            },
            {
              "left": "Automated checkpoint alerts",
              "right": "Faster detection of preventable defects"
            },
            {
              "left": "Mandatory post-run retrospective",
              "right": "Improved adaptation in subsequent cycles"
            },
            {
              "left": "Standardized cross-team briefing",
              "right": "Reduced ambiguity at process handoffs"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-301-l06-a1",
          "type": "visual_prompt",
          "title": "Reasoning Checklist",
          "content": "A checklist to review your thought process: 1. Identify the core concept being tested. 2. Eliminate incorrect options with justification. 3. Confirm the best answer aligns with course principles."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-301-l06-q1",
          "text": "When selecting a method for a new bioprocess, which factor is most critical to consider when the cost of error is very high?",
          "skillId": "biotechnology-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The novelty and speed of the method"
            },
            {
              "id": "b",
              "text": "The method's reliability and established validation data"
            },
            {
              "id": "c",
              "text": "The personal preference of the lead scientist"
            },
            {
              "id": "d",
              "text": "The lowest possible operational cost"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When the cost of error is high, prioritizing reliability and proven performance minimizes risk and ensures a higher probability of success."
        },
        {
          "id": "biotechnology-301-l06-q2",
          "text": "A team notices their protein yield is consistently low (a lagging outcome). What type of metric should they investigate first to diagnose the problem?",
          "skillId": "biotechnology-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "A new lagging outcome, like total project time"
            },
            {
              "id": "b",
              "text": "Leading indicators, like cell culture viability at 48 hours"
            },
            {
              "id": "c",
              "text": "A strategic metric, like market share"
            },
            {
              "id": "d",
              "text": "A financial metric, like return on investment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators are predictive and can help diagnose which upstream part of the process is failing and causing the poor lagging outcome."
        },
        {
          "id": "biotechnology-301-l06-q3",
          "text": "A clinical trial fails because the patient screening criteria were ambiguous, leading to an unsuitable cohort. How would this be classified in a failure taxonomy?",
          "skillId": "biotechnology-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Execution Error"
            },
            {
              "id": "b",
              "text": "Process Design Flaw"
            },
            {
              "id": "c",
              "text": "Data Integrity Issue"
            },
            {
              "id": "d",
              "text": "Governance Oversight"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The problem lies in how the process was designed (ambiguous criteria), not in how it was executed or the data itself. This is a flaw in the system's blueprint."
        },
        {
          "id": "biotechnology-301-l06-q4",
          "text": "What is the most critical component of a successful system improvement proposal?",
          "skillId": "biotechnology-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "A detailed description of the problem without a solution"
            },
            {
              "id": "b",
              "text": "A single, ambitious goal without any way to measure it"
            },
            {
              "id": "c",
              "text": "Clear success criteria and an accountable owner for the plan"
            },
            {
              "id": "d",
              "text": "A plan that assigns blame for past failures"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An actionable proposal must define what success looks like (criteria) and who is responsible for driving the plan forward (accountability)."
        }
      ]
    }
  ]
};
