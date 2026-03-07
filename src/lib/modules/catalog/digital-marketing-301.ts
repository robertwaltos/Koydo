import type { LearningModule } from "@/lib/modules/types";

export const digital_marketing_301_Module: LearningModule = {
  "id": "digital-marketing-301",
  "title": "Digital Marketing Systems and Analysis",
  "description": "Level 301 curriculum in Digital Marketing, emphasizing audience strategy, campaign analytics, channel optimization, growth experimentation, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "marketing",
    "analytics"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for audience strategy and campaign analytics",
    "Apply structured methods to plan, execute, and review channel optimization tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Digital Marketing"
  ],
  "lessons": [
    {
      "id": "digital-marketing-301-l01",
      "title": "Core Models for Digital Marketing",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "digital-marketing-301-l01-a1",
          "type": "visual_prompt",
          "title": "Visualizing the Core Model",
          "content": "Visual Prompt: A funnel diagram transforming raw data into a structured decision matrix, highlighting 'Vocabulary', 'Constraints', and 'Evidence'."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Digital Marketing, clear communication is your superpower. We start by defining our 'Operating Vocabulary'—the exact terms we use to describe campaigns, audiences, and goals. When everyone speaks the same language, teams can compare ideas easily, avoid costly misunderstandings, and build strategies that actually work."
        },
        {
          "id": "digital-marketing-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Great marketers don't just look at the final sales numbers; they ask why those numbers happened. This is called causal thinking. By mapping out our constraints (like budget or time limits) and understanding the dependencies between different campaign parts, we can solve problems at their root instead of just treating the symptoms."
        },
        {
          "id": "digital-marketing-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "To execute plans reliably, we need proof that our ideas work. This means setting high standards for evidence, keeping a disciplined log of our marketing activities, and creating accountability loops. These practices ensure we aren't just guessing, but actually learning from real data to improve future campaigns."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "digital-marketing-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries (like budget or time) that shape feasible options."
        },
        {
          "id": "digital-marketing-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "digital-marketing-301-l02",
      "title": "Digital Marketing Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "digital-marketing-301-l02-a1",
          "type": "visual_prompt",
          "title": "Workflow Builder Interface",
          "content": "Visual Prompt: An interactive drag-and-drop interface showing a campaign timeline with empty slots for 'Inputs', 'Checkpoints', and 'Rollback Triggers'."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this lab, you will build a complete workflow for a digital marketing campaign. You will identify necessary inputs (like target audience data), set up checkpoints to monitor progress, define expected outputs, and create 'rollback triggers'—safety nets that pause a campaign if things go wrong. This hands-on practice builds your campaign management muscles."
        },
        {
          "id": "digital-marketing-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "Every choice you make in a campaign should be tracked in a 'Decision Log'. You will document your reasoning, the expected outcome, and how you plan to verify it. This isn't just busywork; it is the secret to analyzing your successes and failures so you can level up your skills for the next campaign."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-301-l02-act1",
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
          "id": "digital-marketing-301-l02-act2",
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
      "id": "digital-marketing-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-301-l03-a1",
          "type": "visual_prompt",
          "title": "Data-Driven vs. Guessing",
          "content": "Visual Prompt: A split-screen graphic showing a guessing marketer looking confused vs. a data-driven marketer confidently using a decision log."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-301-l03-q1",
          "text": "Which action best improves decisions in audience strategy work?",
          "skillId": "digital-marketing-301-skill-core",
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
          "explanation": "Explicit criteria and testable assumptions improve reliability and make your strategies easier to transfer to new campaigns."
        },
        {
          "id": "digital-marketing-301-l03-q2",
          "text": "In campaign analytics, what is the strongest indicator of process quality?",
          "skillId": "digital-marketing-301-skill-process",
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
          "explanation": "Quality processes are observable, repeatable, and measurable, allowing teams to catch errors early."
        },
        {
          "id": "digital-marketing-301-l03-q3",
          "text": "When evaluating channel optimization, which practice supports trustworthy conclusions?",
          "skillId": "digital-marketing-301-skill-eval",
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
          "explanation": "Baselines and failure analysis prevent overclaiming success and improve the design quality of future tests."
        },
        {
          "id": "digital-marketing-301-l03-q4",
          "text": "A mature growth experimentation strategy should prioritize:",
          "skillId": "digital-marketing-301-skill-strategy",
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
          "explanation": "Balanced scorecards align long-term performance with accountability, ensuring you don't break one part of the system while fixing another."
        }
      ]
    },
    {
      "id": "digital-marketing-301-l04",
      "title": "Methods, Metrics, and Failure Modes in Digital Marketing",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "digital-marketing-301-l04-a1",
          "type": "visual_prompt",
          "title": "Metrics Dashboard",
          "content": "Visual Prompt: A dashboard mockup highlighting 'Leading Indicators' in yellow (predictive) and 'Lagging Outcomes' in blue (historical), with a red alert icon for 'Failure Modes'."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right marketing method depends on your budget, data quality, and the 'cost of error' (how bad it is if you mess up). In this lesson, you will learn how to weigh these factors and justify your choices. Comparing different approaches sharpens your critical thinking and helps you pick the best tool for the job."
        },
        {
          "id": "digital-marketing-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A strong 'metric architecture' is like a car's dashboard. It connects 'leading indicators' (early signs that predict future success, like click-through rates) with 'lagging outcomes' (past results, like total sales). By adding diagnostic metrics to spot engine trouble early, your team can steer campaigns back on track before they crash."
        },
        {
          "id": "digital-marketing-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "Even the best campaigns fail sometimes. We categorize these failures into four buckets: data issues, process problems, execution errors, and governance challenges. By organizing mistakes into this 'Failure Taxonomy', we can design specific, targeted fixes instead of guessing what went wrong."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear (e.g., ad clicks)."
        },
        {
          "id": "digital-marketing-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes rather than generic solutions."
        },
        {
          "id": "digital-marketing-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by making an incorrect decision."
        }
      ]
    },
    {
      "id": "digital-marketing-301-l05",
      "title": "Case Studio: Improve a Digital Marketing System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "digital-marketing-301-l05-a1",
          "type": "visual_prompt",
          "title": "Digital Whiteboard",
          "content": "Visual Prompt: A digital whiteboard with sticky notes categorizing a marketing scenario into 'Objectives', 'Constraints', 'Interventions', and 'Trade-offs'."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will act as a marketing detective. You will break down a realistic scenario into its core parts: the main objective, the surrounding context, the constraints holding you back, and your options for fixing the issue. You will also weigh the trade-offs of each choice to find the most balanced solution."
        },
        {
          "id": "digital-marketing-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Now it is time to pitch your solution. You will create a staged improvement proposal that includes clear success criteria, assigns responsibilities to team members, and sets a timeline for follow-up. This structured approach turns your analysis into an actionable, measurable plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-301-l05-act1",
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
          "id": "digital-marketing-301-l05-act2",
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
      "id": "digital-marketing-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-301-l06-a1",
          "type": "visual_prompt",
          "title": "Uncovering the System",
          "content": "Visual Prompt: A magnifying glass hovering over a campaign report, revealing the hidden systems, metrics, and failure modes driving the results."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-301-l06-q1",
          "text": "Which of the following is the best example of a leading indicator in a digital marketing campaign?",
          "skillId": "digital-marketing-301-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Total quarterly revenue"
            },
            {
              "id": "b",
              "text": "Early click-through rates on a new ad"
            },
            {
              "id": "c",
              "text": "The final cost of the campaign"
            },
            {
              "id": "d",
              "text": "The number of products returned"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early click-through rates predict future success (leading), whereas revenue and final costs are historical results (lagging)."
        },
        {
          "id": "digital-marketing-301-l06-q2",
          "text": "If a campaign fails because the team used outdated customer email lists, which failure category does this best fit?",
          "skillId": "digital-marketing-301-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "Execution error"
            },
            {
              "id": "b",
              "text": "Data issue"
            },
            {
              "id": "c",
              "text": "Governance challenge"
            },
            {
              "id": "d",
              "text": "Process problem"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using outdated or incorrect inputs like an old email list is a fundamental data issue that corrupts the rest of the workflow."
        },
        {
          "id": "digital-marketing-301-l06-q3",
          "text": "When deciding which marketing method to use, why is it important to consider the 'cost of error'?",
          "skillId": "digital-marketing-301-skill-methods",
          "options": [
            {
              "id": "a",
              "text": "To ensure the cheapest method is always chosen"
            },
            {
              "id": "b",
              "text": "To understand the potential negative impact if the decision is wrong"
            },
            {
              "id": "c",
              "text": "To guarantee the campaign will go viral"
            },
            {
              "id": "d",
              "text": "To avoid logging decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The cost of error helps you weigh risks. If a mistake would be catastrophic, you need a more rigorous, cautious method."
        },
        {
          "id": "digital-marketing-301-l06-q4",
          "text": "When proposing a system improvement, why is it necessary to document trade-offs?",
          "skillId": "digital-marketing-301-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "It proves that the chosen intervention has no downsides"
            },
            {
              "id": "b",
              "text": "It helps stakeholders understand what is being sacrificed to gain a specific benefit"
            },
            {
              "id": "c",
              "text": "It allows the team to skip the retrospective log"
            },
            {
              "id": "d",
              "text": "It hides the constraints from the client"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Every choice has a cost (like spending more time to get higher quality). Documenting trade-offs ensures everyone agrees on what is being sacrificed."
        }
      ]
    }
  ]
};
