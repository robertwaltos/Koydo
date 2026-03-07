import type { LearningModule } from "@/lib/modules/types";

export const psychology_401_Module: LearningModule = {
  "id": "psychology-401",
  "title": "Psychology Mastery and Leadership",
  "description": "Level 401 curriculum in Psychology, emphasizing cognitive systems, development and learning, research methods, intervention design, and real-world decision quality through structured practice and assessment.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "behavioral-science",
    "research"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for cognitive systems, development, and learning.",
    "Apply structured methods to plan, execute, and review research tasks.",
    "Interpret evidence using metrics, constraints, and context.",
    "Diagnose common failure modes and design effective recovery actions.",
    "Communicate complex tradeoffs clearly to technical and non-technical audiences.",
    "Build repeatable systems for sustained improvement in psychological practice."
  ],
  "lessons": [
    {
      "id": "psychology-401-l01",
      "title": "Foundational Models for Psychological Inquiry",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "psychology-401-l01-a1",
          "type": "image",
          "title": "Conceptual Framework Diagram",
          "content": "Visualize how core concepts like scope, constraints, and evidence standards connect to form a coherent research plan."
        }
      ],
      "chunks": [
        {
          "id": "psychology-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In advanced psychology, precision is paramount. This section establishes a shared lexicon for our work. We will learn to define the scope of an inquiry, which sets clear boundaries for our study. We will also identify the specific 'unit of analysis'—the core entity or process being examined. Establishing this common ground ensures that our analyses are consistent, comparable, and built on a solid foundation."
        },
        {
          "id": "psychology-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Effective intervention requires understanding the 'why' behind a phenomenon, not just the 'what'. We will explore how to map the causal chain of behavior by identifying underlying assumptions, dependencies between variables, and operational constraints. By making these factors explicit, we can move beyond surface-level correlations to build more robust and effective models of human behavior."
        },
        {
          "id": "psychology-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "This section recaps the core principles of rigorous execution. We will reinforce the importance of setting high standards for evidence, maintaining a disciplined research log to document decisions and observations, and establishing clear accountability loops. These practices are essential for producing trustworthy and replicable results in any psychological study."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "psychology-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "psychology-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "psychology-401-l02",
      "title": "Designing a Research Workflow",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "psychology-401-l02-a1",
          "type": "image",
          "title": "Workflow Diagram Template",
          "content": "Use this visual template to map out the stages of your research process, including inputs, checkpoints, and outputs."
        }
      ],
      "chunks": [
        {
          "id": "psychology-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will construct a complete research workflow. This involves defining necessary inputs (e.g., data, literature), establishing quality checkpoints to monitor progress, specifying the expected outputs, and designing rollback triggers to correct course when issues arise. This hands-on exercise builds a practical understanding of systematic research management."
        },
        {
          "id": "psychology-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "We will review the critical practice of logging every key decision in the research process. Each entry should include the rationale, the expected effect, and a defined verification point. This discipline enables rigorous post-project analysis, transforming individual experiences into systematic improvements for future work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-401-l02-act1",
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
          "id": "psychology-401-l02-act2",
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
      "id": "psychology-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "psychology-401-l03-q1",
          "text": "Which action best improves decisions in cognitive systems work?",
          "skillId": "psychology-401-skill-core",
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
          "id": "psychology-401-l03-q2",
          "text": "In development and learning, what is the strongest indicator of process quality?",
          "skillId": "psychology-401-skill-process",
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
          "id": "psychology-401-l03-q3",
          "text": "When evaluating research methods, which practice supports trustworthy conclusions?",
          "skillId": "psychology-401-skill-eval",
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
          "id": "psychology-401-l03-q4",
          "text": "A mature intervention design strategy should prioritize:",
          "skillId": "psychology-401-skill-strategy",
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
      "id": "psychology-401-l04",
      "title": "Advanced Methods: Metrics and Failure Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "psychology-401-l04-a1",
          "type": "image",
          "title": "Failure Mode and Effects Analysis (FMEA) Chart",
          "content": "Use this chart to systematically identify potential failures, their causes, and their effects to design targeted mitigations."
        }
      ],
      "chunks": [
        {
          "id": "psychology-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right research method requires a careful trade-off analysis. We will learn to evaluate methods based on project constraints, the quality of available information, and the potential cost of error. This section equips you to justify your methodological choices in a clear, defensible manner, ensuring the best fit for each unique research scenario."
        },
        {
          "id": "psychology-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "Effective measurement goes beyond single data points. We will examine how to build a metric architecture that connects leading indicators (early signals of progress) with lagging outcomes (final results). This framework also includes diagnostic measures to help explain performance, enabling teams to detect deviations early and respond intelligently."
        },
        {
          "id": "psychology-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "This recap introduces a structured approach to learning from mistakes. We will classify common failures into a taxonomy—such as data integrity issues, process breakdowns, or interpretation errors. By categorizing failures, we can move from generic fixes to specific, high-leverage mitigation plans that prevent recurrence."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "psychology-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "psychology-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "psychology-401-l05",
      "title": "Case Study: Systemic Intervention Design",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "psychology-401-l05-a1",
          "type": "image",
          "title": "Case Decomposition Matrix",
          "content": "Use this matrix to break down the case study into its core components: objectives, context, constraints, and intervention options."
        }
      ],
      "chunks": [
        {
          "id": "psychology-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will deconstruct a realistic scenario. The task is to identify the primary objective, analyze the context, map the constraints, and evaluate potential intervention options. A key part of this exercise is to make the trade-offs for each option explicit, honing your critical and analytical skills."
        },
        {
          "id": "psychology-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Based on your case analysis, you will structure a staged improvement proposal. This recap focuses on presenting your plan with clear success criteria, a responsibility assignment matrix to ensure accountability, and a defined timeline for implementation and follow-up. This exercise simulates the real-world task of communicating and operationalizing a strategic plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-401-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve research methods outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "psychology-401-l05-act2",
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
      "id": "psychology-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "psychology-401-l06-q1",
          "text": "In a metric architecture, what is the primary role of a leading indicator?",
          "skillId": "psychology-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To provide a final, definitive measure of success"
            },
            {
              "id": "b",
              "text": "To offer an early signal of future outcomes, allowing for course correction"
            },
            {
              "id": "c",
              "text": "To diagnose the root cause of a past failure"
            },
            {
              "id": "d",
              "text": "To measure the total cost of the project"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators are predictive and allow for proactive adjustments before final results (lagging indicators) are known."
        },
        {
          "id": "psychology-401-l06-q2",
          "text": "What is the main advantage of using a failure taxonomy over a simple list of errors?",
          "skillId": "psychology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It guarantees that no failures will ever happen again"
            },
            {
              "id": "b",
              "text": "It is faster to create than a simple list"
            },
            {
              "id": "c",
              "text": "It groups failures by root cause, enabling targeted and systemic solutions"
            },
            {
              "id": "d",
              "text": "It focuses only on the most expensive failures"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A taxonomy allows for pattern recognition and the design of solutions that address entire classes of problems, not just individual symptoms."
        },
        {
          "id": "psychology-401-l06-q3",
          "text": "When selecting a research method, a high 'cost of error' for the project's outcome should lead you to prioritize:",
          "skillId": "psychology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The fastest and cheapest available method"
            },
            {
              "id": "b",
              "text": "A method that maximizes rigor and validity, even if it is slower"
            },
            {
              "id": "c",
              "text": "The newest, most experimental technique"
            },
            {
              "id": "d",
              "text": "A method that requires the least amount of data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When the consequences of being wrong are severe, the priority shifts from speed or cost to ensuring the reliability and accuracy of the findings."
        },
        {
          "id": "psychology-401-l06-q4",
          "text": "A strong improvement proposal, developed from a case study analysis, must include:",
          "skillId": "psychology-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "A vague goal without a timeline"
            },
            {
              "id": "b",
              "text": "A single solution with no consideration of trade-offs"
            },
            {
              "id": "c",
              "text": "A list of problems without any proposed actions"
            },
            {
              "id": "d",
              "text": "Measurable success criteria, clear responsibilities, and a follow-up plan"
            }
          ],
          "correctOptionId": "d",
          "explanation": "An actionable proposal must be specific, measurable, assign accountability, and include a mechanism for review to be effective."
        }
      ]
    }
  ]
};
