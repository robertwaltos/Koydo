import type { LearningModule } from "@/lib/modules/types";

export const entrepreneurship_301_Module: LearningModule = {
  "id": "entrepreneurship-301",
  "title": "Entrepreneurship Systems and Analysis",
  "description": "Level 301 curriculum in Entrepreneurship, emphasizing opportunity discovery, business modeling, capital strategy, venture operations, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "innovation"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for opportunity discovery and business modeling",
    "Apply structured methods to plan, execute, and review capital strategy tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Entrepreneurship"
  ],
  "lessons": [
    {
      "id": "entrepreneurship-301-l01",
      "title": "Core Models for Entrepreneurship",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l01-a1",
          "type": "image",
          "title": "Visualizing the Entrepreneurial Scope",
          "content": "Visual Prompt: A Venn diagram showing 'What is included' and 'What is excluded' in a project scope, with 'Core Objectives' clearly defined in the center."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In this course, clear language is essential. We will explore how to define the boundaries of our projects—understanding exactly what is included and what is left out. By establishing a shared vocabulary, we ensure everyone understands each other, making it easier to compare ideas, collaborate effectively, and reach our goals without confusion."
        },
        {
          "id": "entrepreneurship-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To succeed as an entrepreneur, you must look at why things happen, not just what happens. We will dive into identifying our assumptions (what we believe to be true), dependencies (what we rely on), and constraints (our limits). Understanding these deeper causes helps us design solutions that tackle root problems rather than just fixing surface symptoms."
        },
        {
          "id": "entrepreneurship-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Strong evidence standards are crucial. This means backing up claims with solid proof rather than just guessing. We also need a disciplined approach to logging our activities and establishing clear accountability. When everyone knows their responsibilities and tracks their progress, projects run much more smoothly and reliably."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "entrepreneurship-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "entrepreneurship-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "entrepreneurship-301-l02",
      "title": "Entrepreneurship Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l02-a1",
          "type": "practice",
          "title": "Workflow Diagramming",
          "content": "Visual Prompt: A flowchart template with blank nodes for Inputs, Checkpoints, Outputs, and Rollback Triggers, encouraging students to map out their process visually."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a workflow to discover business opportunities. You will outline the essential inputs to start, identify checkpoints to monitor progress, define expected outputs, and establish 'rollback triggers' to help manage challenges. This hands-on practice will show you how to navigate the entrepreneurial journey step-by-step."
        },
        {
          "id": "entrepreneurship-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "Documenting decisions is a superpower. Every major choice should include a clear rationale, an expected effect, and a way to verify if it worked. This practice allows us to analyze our decisions after a project ends, turning both successes and failures into valuable lessons for the future."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-301-l02-act1",
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
          "id": "entrepreneurship-301-l02-act2",
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
      "id": "entrepreneurship-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l03-a1",
          "type": "practice",
          "title": "Decision Matrix",
          "content": "Visual Prompt: A 2x2 grid showing 'High/Low Impact' vs 'High/Low Effort' to help evaluate opportunity discovery choices before answering."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-301-l03-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-301-skill-core",
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
          "id": "entrepreneurship-301-l03-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-301-skill-process",
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
          "id": "entrepreneurship-301-l03-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-301-skill-eval",
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
          "id": "entrepreneurship-301-l03-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-301-skill-strategy",
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
      "id": "entrepreneurship-301-l04",
      "title": "Methods, Metrics, and Failure Modes in Entrepreneurship",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l04-a1",
          "type": "mnemonic",
          "title": "Metric Architecture Pyramid",
          "content": "Visual Prompt: A pyramid graphic with 'Leading Indicators' at the base, 'Diagnostic Measures' in the middle, and 'Lagging Outcomes' at the top."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When choosing methods for our entrepreneurial projects, we must weigh several factors. First, we look at constraints like time, budget, or regulations. Next, we evaluate the quality of our information—better data leads to better decisions. Lastly, we consider the 'cost of error,' meaning how expensive or damaging a mistake would be. Learning to compare these factors helps you pick the right tool for the job."
        },
        {
          "id": "entrepreneurship-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A 'metric architecture' is a framework that connects three vital types of data: leading indicators (early signs of progress), lagging outcomes (final results of past actions), and diagnostic measures (tools to analyze performance). By tracking all three, teams can spot problems early and adjust their strategy before it's too late."
        },
        {
          "id": "entrepreneurship-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "Not all failures are the same. We can categorize them into four main groups: data-related, process-related, execution-related, and governance-related. By organizing failures into this 'taxonomy,' we can create specific, targeted plans to fix them instead of relying on a one-size-fits-all approach."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "entrepreneurship-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "entrepreneurship-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "entrepreneurship-301-l05",
      "title": "Case Studio: Improve a Entrepreneurship System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l05-a1",
          "type": "practice",
          "title": "Case Decomposition Canvas",
          "content": "Visual Prompt: A four-quadrant canvas labeled 'Objective', 'Context', 'Constraints', and 'Intervention Options' for structured note-taking."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic business scenario into its core parts: the main objective, the surrounding context, the constraints, and the available options for intervention. You will also weigh the trade-offs—the pros and cons—of each choice."
        },
        {
          "id": "entrepreneurship-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Based on your analysis, you will present a structured improvement proposal. This should include clear success criteria, a map of who is responsible for each task, and a timeline for follow-up actions to ensure your improvements actually stick."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve capital strategy outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "entrepreneurship-301-l05-act2",
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
      "id": "entrepreneurship-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l06-a1",
          "type": "practice",
          "title": "System Feedback Loop",
          "content": "Visual Prompt: A circular diagram showing 'Action -> Measurement -> Feedback -> Adjustment' to reinforce systems thinking before answering."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-301-l06-q1",
          "text": "A startup tracks daily website visitors to predict future sales. What type of metric is 'daily website visitors'?",
          "skillId": "entrepreneurship-301-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "A lagging outcome"
            },
            {
              "id": "b",
              "text": "A leading indicator"
            },
            {
              "id": "c",
              "text": "A failure taxonomy"
            },
            {
              "id": "d",
              "text": "A rollback trigger"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators signal probable future outcomes before the final results (like sales) appear."
        },
        {
          "id": "entrepreneurship-301-l06-q2",
          "text": "If a team fails to document their decisions, causing confusion during the next project phase, which failure category does this best represent?",
          "skillId": "entrepreneurship-301-skill-failure-modes",
          "options": [
            {
              "id": "a",
              "text": "Data-related failure"
            },
            {
              "id": "b",
              "text": "Governance/Process-related failure"
            },
            {
              "id": "c",
              "text": "Market-related failure"
            },
            {
              "id": "d",
              "text": "Financial failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Failing to document decisions is a breakdown in process and governance, not a direct data or market issue."
        },
        {
          "id": "entrepreneurship-301-l06-q3",
          "text": "When breaking down a business case, a strict budget limit of $10,000 is best classified as a:",
          "skillId": "entrepreneurship-301-skill-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Constraint"
            },
            {
              "id": "b",
              "text": "Objective"
            },
            {
              "id": "c",
              "text": "Intervention"
            },
            {
              "id": "d",
              "text": "Leading indicator"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Constraints are the boundaries or limits (like budget or time) within which a project must operate."
        },
        {
          "id": "entrepreneurship-301-l06-q4",
          "text": "What is the most likely system-level benefit of implementing tighter intake criteria for new project ideas?",
          "skillId": "entrepreneurship-301-skill-interventions",
          "options": [
            {
              "id": "a",
              "text": "Increased volume of low-quality ideas"
            },
            {
              "id": "b",
              "text": "Higher signal quality and lower downstream rework"
            },
            {
              "id": "c",
              "text": "Faster detection of preventable defects"
            },
            {
              "id": "d",
              "text": "Reduced ambiguity at handoff boundaries"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tighter intake criteria filter out bad ideas early, improving the overall quality of projects and reducing the need to fix mistakes later."
        }
      ]
    }
  ]
};
