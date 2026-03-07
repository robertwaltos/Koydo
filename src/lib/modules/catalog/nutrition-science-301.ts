import type { LearningModule } from "@/lib/modules/types";

export const nutrition_science_301_Module: LearningModule = {
  "id": "nutrition-science-301",
  "title": "Nutrition Science: Systems and Governance",
  "description": "An advanced curriculum in Nutrition Science focused on metabolic foundations, dietary pattern analysis, evidence-based intervention design, and nutrition policy. Learning is driven by case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nutrition",
    "public-health"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Explain and apply metabolic foundations under practical constraints.",
    "Build repeatable workflows for dietary pattern analysis with measurable controls.",
    "Evaluate interventions in evidence-based intervention design using comparative evidence.",
    "Operationalize nutrition policy and equity with transparent governance loops.",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders.",
    "Defend decisions through evidence-backed reasoning and post-run review."
  ],
  "lessons": [
    {
      "id": "nutrition-science-301-l01",
      "title": "Core Models in Nutrition Science",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nutrition-science-301-l01-a1",
          "type": "image",
          "title": "Core Concepts Map",
          "content": "A visual diagram connecting metabolic foundations, dietary patterns, and evidence-based design."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "This lesson establishes a common vocabulary for Nutrition Science. We will define the scope of our study, focusing on metabolic foundations and the analysis of dietary patterns to ensure clear communication throughout the course."
        },
        {
          "id": "nutrition-science-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "Learners will map causal relationships to understand how different factors influence nutritional outcomes. This includes identifying assumptions and limitations, which is a critical step before designing effective interventions."
        },
        {
          "id": "nutrition-science-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "We will review the standards for evidence in Nutrition Science. Claims must be supported by measurable indicators and fall within defined confidence ranges. We will also introduce review checkpoints to ensure findings are accurate and trustworthy."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-301-l01-f1",
          "front": "Metabolic Foundations",
          "back": "The biochemical processes underlying nutrition. A core lens for decision-making that requires explicit control over assumptions."
        },
        {
          "id": "nutrition-science-301-l01-f2",
          "front": "Dietary Pattern Analysis",
          "back": "A systematic method for evaluating food consumption. Its reliability depends on well-defined, repeatable processes."
        },
        {
          "id": "nutrition-science-301-l01-f3",
          "front": "Evidence-Based Intervention",
          "back": "A program or policy designed using the best available evidence. Its success is evaluated by comparing outcomes against a baseline."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l02",
      "title": "Workflow Design Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-301-l02-a1",
          "type": "practice",
          "title": "Workflow Diagram Builder",
          "content": "An interactive tool to drag and drop steps, assign owners, and set control gates for a sample nutrition project."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l02-c1",
          "kind": "practice",
          "title": "Building a Workflow",
          "content": "In this interactive lab, you will build a project workflow. This includes mapping owners to tasks, setting up control gates to monitor progress, and defining measurable outcomes to evaluate success."
        },
        {
          "id": "nutrition-science-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback Planning",
          "content": "This section focuses on system resilience. We will discuss how to stress-test workflows to identify potential failure points and establish clear decision thresholds for when to roll back a change or intervention."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-301-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control to its strongest reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-commit review",
              "right": "Prevents avoidable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Contains impact during failures"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports defensible outcome claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "nutrition-science-301-l03-q1",
          "text": "Which practice most improves decision quality when analyzing metabolic foundations?",
          "skillId": "nutrition-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Relying on implicit assumptions and no baseline data"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritizing speed over evidence in all cases"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are made explicit and transparent."
        },
        {
          "id": "nutrition-science-301-l03-q2",
          "text": "A high-quality workflow for dietary pattern analysis should include:",
          "skillId": "nutrition-science-301-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear owner mapping, checkpoints, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and purely ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "Skipping any post-implementation review"
            },
            {
              "id": "d",
              "text": "Making process changes without documentation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear ownership, defined control points, and pre-planned responses to problems."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l04",
      "title": "Case Analysis: Community Nutrition",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nutrition-science-301-l04-a1",
          "type": "image",
          "title": "Sample Tradeoff Matrix",
          "content": "A visual table comparing three intervention options across criteria like cost, effectiveness, equity, and feasibility."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "We will analyze a community nutrition initiative aiming to balance clinical outcomes, cultural values, and food access. Learners will identify competing objectives and potential risks to understand the complexity of designing effective, equitable programs."
        },
        {
          "id": "nutrition-science-301-l04-c2",
          "kind": "concept",
          "title": "The Tradeoff Matrix",
          "content": "A tradeoff matrix is a tool for making informed decisions. We will use it to evaluate options based on their effectiveness, feasibility, risks, and stakeholder impact, helping to clarify difficult choices."
        },
        {
          "id": "nutrition-science-301-l04-c3",
          "kind": "recap",
          "title": "Designing for Recovery",
          "content": "This section covers how to turn past failures into future strengths. By analyzing what can go wrong, we can create proactive safeguards and response playbooks to ensure programs are resilient."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured method to compare options across multiple, often competing, priorities."
        },
        {
          "id": "nutrition-science-301-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring set of events or signals that indicate a predictable type of risk."
        },
        {
          "id": "nutrition-science-301-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined action plan designed for safe and timely recovery from a known failure pattern."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l05",
      "title": "Simulation Studio: Intervention Design",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nutrition-science-301-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "An interactive dashboard showing real-time outcomes, side effects, and budget adherence as you adjust intervention variables."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive practice, you will run multiple intervention scenarios under conditions of uncertainty. By comparing the outcomes, you will develop a deeper understanding of how different variables affect results."
        },
        {
          "id": "nutrition-science-301-l05-c2",
          "kind": "recap",
          "title": "Debrief and Evaluation",
          "content": "After each simulation, we will debrief the results. Runs will be evaluated based on target achievement, unintended side effects, and compliance with governance standards, reinforcing best practices in intervention design."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for improving community health outcomes while adhering to policy and equity goals.",
          "instructions": [
            "Define your primary objective and key constraints before selecting an intervention.",
            "Document the expected near-term and long-term tradeoffs of your chosen path.",
            "Specify the metrics you will use to validate that your intervention was successful."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "nutrition-science-301-l06-q1",
          "text": "When analyzing a nutrition case study, what is the primary purpose of a tradeoff matrix?",
          "skillId": "nutrition-science-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect and has no downsides"
            },
            {
              "id": "b",
              "text": "To systematically compare multiple options against a common set of critical criteria"
            },
            {
              "id": "c",
              "text": "To focus only on the financial cost of each option"
            },
            {
              "id": "d",
              "text": "To select the option that is fastest to implement, regardless of risk"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate different choices based on multiple important factors, not just one."
        },
        {
          "id": "nutrition-science-301-l06-q2",
          "text": "In a simulation of a public health intervention, why is it important to run multiple scenarios?",
          "skillId": "nutrition-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To find the one, single correct answer"
            },
            {
              "id": "b",
              "text": "To prove that the initial hypothesis is always correct"
            },
            {
              "id": "c",
              "text": "To understand the range of potential outcomes and test the plan's resilience"
            },
            {
              "id": "d",
              "text": "To make the project appear more complex"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Running multiple scenarios helps account for uncertainty and shows how an intervention might perform under different real-world conditions."
        },
        {
          "id": "nutrition-science-301-l06-q3",
          "text": "Identifying a 'failure pattern' in a community nutrition program allows planners to:",
          "skillId": "nutrition-science-301-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Assign blame to specific individuals for mistakes"
            },
            {
              "id": "b",
              "text": "Immediately cancel the entire program"
            },
            {
              "id": "c",
              "text": "Develop proactive safeguards and response playbooks for predictable risks"
            },
            {
              "id": "d",
              "text": "Ignore the problem, as failures are inevitable"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Recognizing recurring failure patterns enables teams to build preventative measures and planned responses, making the system more robust."
        },
        {
          "id": "nutrition-science-301-l06-q4",
          "text": "A key step in responsible intervention design involves mapping potential risks. This should primarily focus on:",
          "skillId": "nutrition-science-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Financial risks to the funding organization only"
            },
            {
              "id": "b",
              "text": "Negative side-effects and inequitable burden on different stakeholder groups"
            },
            {
              "id": "c",
              "text": "Risks to the personal careers of the research team"
            },
            {
              "id": "d",
              "text": "Only the most obvious, easily preventable risks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible design requires a broad view of risk that includes potential harm and unfair outcomes for the people the intervention is meant to serve."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l07",
      "title": "Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "nutrition-science-301-l07-a1",
          "type": "image",
          "title": "Governance Feedback Loop",
          "content": "A diagram illustrating how policy intent, implementation, impact measurement, and stakeholder review connect in a continuous cycle."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "This lesson explores how to map the distribution of benefits and burdens across different stakeholder groups. Understanding who is affected, and how, is essential for creating fair and effective programs."
        },
        {
          "id": "nutrition-science-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Systems",
          "content": "We will discuss how to build systems for accountability. This includes ensuring decisions are traceable, stakeholders have rights to review, and there are clear obligations for correcting negative outcomes."
        },
        {
          "id": "nutrition-science-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "We conclude by introducing a checklist for responsible execution. This framework helps ensure that projects are not only effective but also managed with high standards for risk, ethics, and accountability."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-301-l07-f1",
          "front": "Impact Distribution",
          "back": "The way in which outcomes (both positive and negative) are allocated across different people, systems, and timeframes."
        },
        {
          "id": "nutrition-science-301-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record explaining the evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "nutrition-science-301-l07-f3",
          "front": "Responsible Execution",
          "back": "A mode of delivery that combines effectiveness with strong accountability and a commitment to fairness."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-301-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "A downloadable document with structured sections for project objectives, scope, metrics, risks, and a governance plan."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l08-c1",
          "kind": "practice",
          "title": "The Capstone Charter",
          "content": "In this activity, you will create a detailed plan for your capstone project. This charter will define your objectives, constraints, success metrics, and the governance triggers that will guide your decisions."
        },
        {
          "id": "nutrition-science-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you finalize your plan, prepare to defend your decisions. This involves anticipating questions and critiques related to both the technical and governance aspects of your proposed project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and corrective action plans.",
          "instructions": [
            "Define your project's primary objective and operating boundaries.",
            "List at least three measurable success indicators.",
            "Define the criteria for escalation and corrective action if the project deviates from its plan."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-301-l09",
      "title": "Capstone Project: Defense and Review",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "nutrition-science-301-l09-a1",
          "type": "practice",
          "title": "Peer Review Rubric",
          "content": "A structured rubric to evaluate a capstone project based on evidence quality, clarity of reasoning, and soundness of the governance plan."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l09-c1",
          "kind": "practice",
          "title": "Project Submission and Defense",
          "content": "Submit your completed capstone charter and a presentation defending your proposed nutrition intervention. Your defense should address the core principles of the course, including metabolic foundations, workflow controls, evidence standards, and governance."
        },
        {
          "id": "nutrition-science-301-l09-c2",
          "kind": "recap",
          "title": "Post-Mortem and Reflection",
          "content": "Review your project and the decisions you made. Identify the strongest parts of your plan and areas for improvement. This reflective practice is key to continuous learning in public health and nutrition science."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-301-l09-act1",
          "type": "peer_review",
          "title": "Capstone Self-Assessment",
          "description": "Use the course rubric to score your own capstone project, providing a rationale for each score.",
          "instructions": [
            "Evaluate your project's objective clarity and alignment with course principles.",
            "Assess the quality of your evidence and tradeoff analysis.",
            "Justify the robustness of your proposed governance and risk mitigation plan."
          ]
        }
      ]
    }
  ]
};
