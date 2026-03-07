import type { LearningModule } from "@/lib/modules/types";

export const psychology_301_Module: LearningModule = {
  "id": "psychology-301",
  "title": "Psychology Systems and Analysis",
  "description": "Level 301 curriculum in Psychology, emphasizing cognitive systems, development and learning, research methods, intervention design, and real-world decision quality through structured practice and assessment.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "behavioral-science",
    "research"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for cognitive systems and development and learning",
    "Apply structured methods to plan, execute, and review research methods tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Psychology"
  ],
  "lessons": [
    {
      "id": "psychology-301-l01",
      "title": "Core Models for Psychological Analysis",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "psychology-301-l01-a1",
          "type": "image",
          "title": "Scope Diagram",
          "content": "A Venn diagram illustrating 'in-scope' vs. 'out-of-scope' elements for a research question."
        },
        {
          "id": "psychology-301-l01-a2",
          "type": "image",
          "title": "Causal Chain",
          "content": "A flowchart showing a causal chain from root cause to observable behavior, highlighting potential points of intervention."
        }
      ],
      "chunks": [
        {
          "id": "psychology-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In advanced psychology, precision is paramount. We begin by establishing an 'operating vocabulary'—a shared set of precise terms to avoid ambiguity. We then define the 'scope' of our analysis, clearly delineating the boundaries of our inquiry. This involves identifying the primary 'unit of analysis' (e.g., an individual's cognitive process, a group's dynamic). Defining scope prevents 'scope creep' and ensures our research remains focused and comparable to other studies, forming a solid foundation for any investigation."
        },
        {
          "id": "psychology-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Effective analysis moves beyond correlation to causation. This requires us to practice 'causal thinking' by mapping the chain of events that leads to a specific behavior or outcome. We must explicitly state our assumptions and identify dependencies between variables. Furthermore, every system operates under 'constraints'—limitations such as time, resources, or ethical guidelines. Recognizing these constraints is crucial for designing realistic and effective interventions, as it defines the space of possible solutions."
        },
        {
          "id": "psychology-301-l01-c3",
          "kind": "concept",
          "title": "Evidence and Accountability",
          "content": "Rigorous conclusions are built on strong evidence. We will establish clear 'evidence standards'—the criteria data must meet to be considered valid. This is supported by disciplined 'decision logging,' where we document not just what we decided, but why, based on the available evidence. This creates an 'accountability loop,' allowing us to review our reasoning, learn from errors, and verify that our outcomes align with our original goals. This systematic approach ensures our work is transparent, defensible, and continuously improving."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "psychology-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "psychology-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "psychology-301-l02",
      "title": "Psychology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "psychology-301-l02-a1",
          "type": "practice",
          "title": "Workflow Template",
          "content": "A blank workflow template with sections for Inputs, Checkpoints, Outputs, and Rollback Triggers for you to fill in."
        }
      ],
      "chunks": [
        {
          "id": "psychology-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this lab, you will design a research workflow from start to finish. Using the provided template, define the necessary 'inputs' (e.g., participant data, literature review), establish critical 'checkpoints' to assess progress and quality, specify the desired 'outputs' (e.g., a research paper, a validated model), and plan 'rollback triggers'—conditions that would require you to return to a previous stage. This exercise simulates the process of building a repeatable and reliable system for psychological inquiry."
        },
        {
          "id": "psychology-301-l02-c2",
          "kind": "recap",
          "title": "The Value of Decision Logging",
          "content": "As you build your workflow, remember to log each design choice. For every decision—from selecting an input source to setting a checkpoint criterion—document your rationale, the expected effect, and how you will verify the outcome. This log is not just a record; it is a powerful tool for post-project analysis. It allows you to trace successes and failures back to their root decisions, enabling systematic improvement in future projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-301-l02-act1",
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
          "id": "psychology-301-l02-act2",
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
              "text": "Misaligned research goals",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear handoff timing between research phases",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent data coding criteria",
              "bucket": "Quality"
            },
            {
              "text": "No control group for comparison",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "psychology-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Review the Causal Chain flowchart and Workflow Template from the previous lessons before starting."
        }
      ],
      "questions": [
        {
          "id": "psychology-301-l03-q1",
          "text": "Which action best improves decisions in cognitive systems work?",
          "skillId": "psychology-301-skill-core",
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
          "id": "psychology-301-l03-q2",
          "text": "In development and learning, what is the strongest indicator of process quality?",
          "skillId": "psychology-301-skill-process",
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
          "id": "psychology-301-l03-q3",
          "text": "When evaluating research methods, which practice supports trustworthy conclusions?",
          "skillId": "psychology-301-skill-eval",
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
          "id": "psychology-301-l03-q4",
          "text": "A mature intervention design strategy should prioritize:",
          "skillId": "psychology-301-skill-strategy",
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
      "id": "psychology-301-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "psychology-301-l04-a1",
          "type": "image",
          "title": "Method Selection Tree",
          "content": "A decision tree diagram guiding the selection between experimental, correlational, and observational research methods based on the research question and constraints."
        }
      ],
      "chunks": [
        {
          "id": "psychology-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right research method is a critical decision. The optimal choice depends on your research question, constraints (e.g., time, ethics), and the required quality of evidence. We will learn to evaluate alternatives like experiments, surveys, and case studies by comparing their strengths and weaknesses in specific scenarios. Justifying your method selection is a key skill for defending your research findings."
        },
        {
          "id": "psychology-301-l04-c2",
          "kind": "concept",
          "title": "Metric Architecture",
          "content": "Effective measurement requires a well-designed metric architecture. This includes 'leading indicators' (predictive measures, like hours spent studying), 'lagging outcomes' (results, like exam scores), and 'diagnostic metrics' (explanatory measures, like understanding of a key concept). A robust architecture connects these metrics, allowing teams to monitor progress, predict outcomes, and diagnose problems early, rather than waiting for the final result."
        },
        {
          "id": "psychology-301-l04-c3",
          "kind": "concept",
          "title": "Failure Taxonomy",
          "content": "When things go wrong, a systematic response is more effective than a generic one. A 'failure taxonomy' helps us classify problems into distinct categories, such as 'data failures' (e.g., missing data), 'process failures' (e.g., a skipped step), 'execution failures' (e.g., incorrect procedure), or 'governance failures' (e.g., poor oversight). By categorizing the failure, we can apply targeted, effective solutions instead of one-size-fits-all fixes."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "psychology-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "psychology-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "psychology-301-l05",
      "title": "Case Studio: Improve a Psychology System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "psychology-301-l05-a1",
          "type": "practice",
          "title": "Case Decomposition Worksheet",
          "content": "Use the provided Case Decomposition worksheet to structure your analysis of the scenario."
        }
      ],
      "chunks": [
        {
          "id": "psychology-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will analyze a realistic research scenario facing a challenge. Your first task is to decompose the problem using the provided worksheet. Identify the core objective, the surrounding context, the operational constraints, and the potential intervention options. For each option, you must articulate the primary trade-offs (e.g., improving data quality might increase collection time). This structured analysis is the foundation for a strong recommendation."
        },
        {
          "id": "psychology-301-l05-c2",
          "kind": "recap",
          "title": "Crafting an Improvement Proposal",
          "content": "Based on your decomposition, you will now formulate a structured improvement proposal. This is not just an idea, but an actionable plan. Your proposal must include specific success criteria (how you'll measure improvement), a responsibility assignment matrix (who does what), and a clear timeline for implementation and follow-up. This exercise hones your ability to translate analysis into a compelling, organized plan for action."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-301-l05-act1",
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
          "id": "psychology-301-l05-act2",
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
      "id": "psychology-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Review the Failure Taxonomy chart and Method Selection Tree from Lesson 4 before starting."
        }
      ],
      "questions": [
        {
          "id": "psychology-301-l06-q1",
          "text": "A research team wants to understand the direct causal effect of a new therapy on anxiety. Which method should they select if they have ethical approval and sufficient resources?",
          "skillId": "psychology-301-skill-methods",
          "options": [
            {
              "id": "a",
              "text": "A correlational study tracking therapy attendance and anxiety levels."
            },
            {
              "id": "b",
              "text": "A randomized controlled trial (RCT) with a treatment and control group."
            },
            {
              "id": "c",
              "text": "A series of unstructured interviews with participants."
            },
            {
              "id": "d",
              "text": "A naturalistic observation of people in a clinic waiting room."
            }
          ],
          "correctOptionId": "b",
          "explanation": "An RCT is the gold standard for establishing causality because random assignment minimizes the influence of confounding variables."
        },
        {
          "id": "psychology-301-l06-q2",
          "text": "In a study on student learning, the final exam score is a classic example of a:",
          "skillId": "psychology-301-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Leading indicator"
            },
            {
              "id": "b",
              "text": "Diagnostic metric"
            },
            {
              "id": "c",
              "text": "Lagging outcome"
            },
            {
              "id": "d",
              "text": "Process constraint"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A lagging outcome is a result metric that can only be measured after an event is complete. Leading indicators (like homework completion) predict this outcome."
        },
        {
          "id": "psychology-301-l06-q3",
          "text": "A researcher discovers that the equipment used to measure reaction times was miscalibrated for the first half of the study. According to a failure taxonomy, this is best classified as a(n):",
          "skillId": "psychology-301-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Governance failure"
            },
            {
              "id": "b",
              "text": "Process failure"
            },
            {
              "id": "c",
              "text": "Execution failure"
            },
            {
              "id": "d",
              "text": "Data failure"
            }
          ],
          "correctOptionId": "d",
          "explanation": "This is a data failure because the source of the data itself is flawed due to faulty equipment, compromising its integrity."
        },
        {
          "id": "psychology-301-l06-q4",
          "text": "When proposing an intervention, what is the primary purpose of identifying trade-offs?",
          "skillId": "psychology-301-skill-intervention",
          "options": [
            {
              "id": "a",
              "text": "To prove that the proposed intervention has no downsides."
            },
            {
              "id": "b",
              "text": "To make an informed decision by acknowledging the costs and benefits of a choice."
            },
            {
              "id": "c",
              "text": "To focus exclusively on the financial cost of the intervention."
            },
            {
              "id": "d",
              "text": "To delay the decision-making process by introducing complexity."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Acknowledging trade-offs (e.g., increased cost for higher accuracy) is essential for transparent and strategic decision-making."
        }
      ]
    }
  ]
};
