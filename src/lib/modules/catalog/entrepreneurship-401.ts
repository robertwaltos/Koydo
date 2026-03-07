import type { LearningModule } from "@/lib/modules/types";

export const entrepreneurship_401_Module: LearningModule = {
  "id": "entrepreneurship-401",
  "title": "Entrepreneurship Mastery and Leadership",
  "description": "Level 401 curriculum in Entrepreneurship, emphasizing opportunity discovery, business modeling, capital strategy, venture operations, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "innovation",
    "leadership"
  ],
  "minAge": 16,
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
      "id": "entrepreneurship-401-l01",
      "title": "Core Models for Entrepreneurship",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l01-a1",
          "type": "image",
          "title": "Visual Prompt: Constraint Map",
          "content": "Visual: A dynamic mind map showing a central business idea surrounded by nodes representing constraints (budget, time, regulations) with connecting arrows highlighting dependencies."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Entrepreneurship 401, precision in language is foundational. We must clearly define the boundaries of our work and identify the specific 'unit of analysis' we are evaluating. By establishing a shared operating vocabulary, teams can make defensible decisions, compare results accurately, and maintain alignment across complex projects. Clear communication ensures that strategic intent translates directly into operational execution."
        },
        {
          "id": "entrepreneurship-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To build resilient ventures, entrepreneurs must understand not just the results of their actions, but the underlying mechanisms driving them. This requires mapping out assumptions, dependencies, and operational constraints. By identifying the root causes of friction rather than merely treating symptoms, leaders can design robust solutions that scale effectively under pressure."
        },
        {
          "id": "entrepreneurship-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Reliable execution demands strict standards for evidence and accountability. This involves setting minimum quality thresholds for data before taking action, maintaining a disciplined approach to decision logging, and establishing tight accountability loops. These practices ensure that progress is measurable and that teams remain responsible for their strategic choices."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "entrepreneurship-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "entrepreneurship-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "entrepreneurship-401-l02",
      "title": "Entrepreneurship Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l02-a1",
          "type": "practice",
          "title": "Visual Prompt: Workflow Builder",
          "content": "Visual: A drag-and-drop interface showing raw inputs on the left, processing stages in the middle, and output metrics on the right, with warning icons for missing checkpoints."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will architect a comprehensive workflow for discovering opportunities and validating business models. You will identify necessary inputs, establish quality checkpoints to monitor progress, define expected outputs, and set rollback triggers to mitigate risks. This hands-on experience demonstrates how structured processes transform chaotic ideas into predictable, scalable operations."
        },
        {
          "id": "entrepreneurship-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "A critical component of workflow management is the decision log. Every strategic choice must be documented with its underlying rationale, expected effect, and a specific verification point. This practice creates an institutional memory, allowing teams to conduct post-mortems, learn from miscalculations, and continuously refine their decision-making frameworks."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-401-l02-act1",
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
          "id": "entrepreneurship-401-l02-act2",
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
      "id": "entrepreneurship-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l03-a1",
          "type": "practice",
          "title": "Visual Prompt: Decision Matrix",
          "content": "Visual: A 2x2 decision matrix highlighting 'High Impact / Low Effort' in the top right quadrant to guide strategic prioritization."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-401-l03-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-401-skill-core",
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
          "id": "entrepreneurship-401-l03-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-401-skill-process",
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
          "id": "entrepreneurship-401-l03-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-401-skill-eval",
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
          "id": "entrepreneurship-401-l03-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-401-skill-strategy",
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
      "id": "entrepreneurship-401-l04",
      "title": "Methods, Metrics, and Failure Modes in Entrepreneurship",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l04-a1",
          "type": "mnemonic",
          "title": "Visual Prompt: Metric Dashboard",
          "content": "Visual: A dashboard with three gauges: Leading (speedometer), Lagging (finish line flag), and Diagnostic (check-engine light)."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Selecting the right operational methods requires balancing constraints, information quality, and the cost of error. In this module, you will learn to evaluate competing methodologies and justify your selections based on specific entrepreneurial scenarios. Critical thinking at this stage prevents costly pivots later and ensures resource allocation aligns with strategic priorities."
        },
        {
          "id": "entrepreneurship-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A robust metric architecture is the nervous system of a venture. It links leading indicators (which predict future performance) with lagging outcomes (which confirm past results) and diagnostic measures (which explain the 'why' behind the data). This tri-fold framework enables leaders to detect deviations early and pivot proactively rather than reacting to stale data."
        },
        {
          "id": "entrepreneurship-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "Not all failures are created equal. By categorizing failures into a taxonomy—such as data-related issues, process breakdowns, execution errors, and governance gaps—teams can design highly targeted interventions. This structured approach to failure analysis transforms setbacks into systemic upgrades, fostering a culture of continuous, intelligent iteration."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "entrepreneurship-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "entrepreneurship-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "entrepreneurship-401-l05",
      "title": "Case Studio: Improve an Entrepreneurship System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l05-a1",
          "type": "practice",
          "title": "Visual Prompt: Case Decomposition",
          "content": "Visual: A magnifying glass hovering over a business case document, revealing hidden layers of constraints and trade-offs underneath."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive studio, you will deconstruct a complex entrepreneurial scenario. Your task is to isolate the primary objective, map the operational context, and identify binding constraints. You will evaluate multiple intervention strategies, explicitly documenting the trade-offs of each. This mirrors the high-stakes, ambiguous environments founders navigate daily."
        },
        {
          "id": "entrepreneurship-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Following your analysis, you will synthesize your findings into a formal improvement proposal. This requires defining unambiguous success criteria, assigning clear ownership for execution, and establishing a timeline for post-implementation review. Mastering this format ensures your strategic insights translate into accountable, measurable action."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-401-l05-act1",
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
          "id": "entrepreneurship-401-l05-act2",
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
      "id": "entrepreneurship-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l06-a1",
          "type": "practice",
          "title": "Visual Prompt: System Feedback Loop",
          "content": "Visual: An infinity loop diagram showing 'Action', 'Measurement', 'Failure Analysis', and 'Adjustment' flowing seamlessly into one another."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-401-l06-q1",
          "text": "Which of the following best describes a leading indicator in a new venture?",
          "skillId": "entrepreneurship-401-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Total revenue earned last quarter"
            },
            {
              "id": "b",
              "text": "Number of qualified customer discovery interviews scheduled"
            },
            {
              "id": "c",
              "text": "The final cost of goods sold"
            },
            {
              "id": "d",
              "text": "Employee turnover rate over the past year"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators predict future performance and allow for proactive adjustments before final outcomes are realized."
        },
        {
          "id": "entrepreneurship-401-l06-q2",
          "text": "When diagnosing a recurring defect in product delivery, applying a failure taxonomy helps a team to:",
          "skillId": "entrepreneurship-401-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "Assign personal blame to the lowest-performing employee"
            },
            {
              "id": "b",
              "text": "Categorize the root cause to design a specific, targeted fix"
            },
            {
              "id": "c",
              "text": "Ignore data-related issues"
            },
            {
              "id": "d",
              "text": "Increase the marketing budget to offset losses"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A failure taxonomy structures the analysis of errors, moving teams from generic reactions to targeted systemic fixes."
        },
        {
          "id": "entrepreneurship-401-l06-q3",
          "text": "During case decomposition, why is it critical to document the trade-offs of a proposed intervention?",
          "skillId": "entrepreneurship-401-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To prove that the chosen intervention has zero risks"
            },
            {
              "id": "b",
              "text": "To ensure stakeholders understand what is being sacrificed to achieve the primary goal"
            },
            {
              "id": "c",
              "text": "To delay the decision-making process"
            },
            {
              "id": "d",
              "text": "To hide operational constraints from investors"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Every strategic choice involves trade-offs; documenting them ensures transparent, informed decision-making and manages expectations."
        },
        {
          "id": "entrepreneurship-401-l06-q4",
          "text": "Implementing a 'post-run retrospective' after a product launch primarily improves the system by:",
          "skillId": "entrepreneurship-401-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "Capturing lessons learned to enhance adaptation in future cycles"
            },
            {
              "id": "b",
              "text": "Automatically generating new sales leads"
            },
            {
              "id": "c",
              "text": "Preventing any future defects from occurring"
            },
            {
              "id": "d",
              "text": "Reducing the need for leading indicators"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Retrospectives create a feedback loop that captures insights, driving continuous improvement and adaptation in subsequent iterations."
        }
      ]
    }
  ]
};
