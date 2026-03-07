import type { LearningModule } from "@/lib/modules/types";

export const public_health_501_Module: LearningModule = {
  "id": "public-health-501",
  "title": "Public Health Specialization Studio",
  "description": "Post-401 specialization in Public Health, focused on population risk modeling, intervention architecture, outcome equity analytics, and health governance and trust through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "public-health",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply advanced methods for population risk modeling in high-constraint environments",
    "Design robust systems for intervention architecture with measurable control gates",
    "Evaluate interventions in outcome equity analytics with research-grade rigor",
    "Operationalize health governance and trust with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "public-health-501-l01",
      "title": "Public Health Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-501-l01-a1",
          "type": "image",
          "title": "Core Pillars of Public Health",
          "content": "A diagram illustrating the four core pillars of advanced public health: Population Risk Modeling, Intervention Architecture, Outcome Equity Analytics, and Health Governance."
        }
      ],
      "chunks": [
        {
          "id": "public-health-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Explore the advanced boundaries of Public Health. This lesson focuses on assessing population-level risks and designing effective interventions to improve health outcomes by analyzing the complex factors that influence community well-being."
        },
        {
          "id": "public-health-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Map the causal pathways connecting different factors to health outcomes. We will also define uncertainty ranges to understand the limits of our knowledge and identify critical system dependencies before designing health strategies."
        },
        {
          "id": "public-health-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Recap the principle that all public health claims must be supported by measurable indicators. We will review the importance of using confidence bounds and structured review checkpoints to ensure findings are reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-501-l01-f1",
          "front": "Population risk modeling",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "public-health-501-l01-f2",
          "front": "Intervention architecture",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "public-health-501-l01-f3",
          "front": "Outcome equity analytics",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "public-health-501-l02",
      "title": "Public Health Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "public-health-501-l02-a1",
          "type": "image",
          "title": "Workflow with Control Gates",
          "content": "A flowchart visualizing a public health workflow, highlighting key decision points, control gates, rollback triggers, and escalation pathways."
        }
      ],
      "chunks": [
        {
          "id": "public-health-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "Design specialized public health workflows in this interactive lab. You will conduct stress tests on your designs by simulating adverse scenarios to evaluate their resilience under pressure, providing vital hands-on experience."
        },
        {
          "id": "public-health-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Recap how effective workflows incorporate control gates. These checkpoints monitor progress, define rollback criteria for adverse events, and establish threshold-based escalation procedures to ensure issues are addressed promptly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius under adverse outcomes"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact attribution"
            },
            {
              "left": "Retrospective loop",
              "right": "Improves next-cycle decision quality"
            }
          ]
        }
      ]
    },
    {
      "id": "public-health-501-l03",
      "title": "Checkpoint 1: Foundations and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-501-l03-a1",
          "type": "image",
          "title": "Structured Evaluation",
          "content": "An icon representing a structured checklist, symbolizing the importance of methodical evaluation."
        }
      ],
      "questions": [
        {
          "id": "public-health-501-l03-q1",
          "text": "Which practice most improves population risk modeling decision quality?",
          "skillId": "public-health-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimize only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are explicit."
        },
        {
          "id": "public-health-501-l03-q2",
          "text": "At level 501, strong execution for intervention architecture requires:",
          "skillId": "public-health-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-run review"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity and threshold-driven governance."
        },
        {
          "id": "public-health-501-l03-q3",
          "text": "When mapping causal pathways for a health outcome, what is the primary purpose of defining uncertainty ranges?",
          "skillId": "public-health-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To ignore complex variables"
            },
            {
              "id": "b",
              "text": "To prove a single cause is responsible"
            },
            {
              "id": "c",
              "text": "To quantify the limits of current knowledge and potential forecast error"
            },
            {
              "id": "d",
              "text": "To make the model appear more scientific"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Uncertainty ranges are essential for honestly representing what is known and unknown, which is critical for robust decision-making."
        },
        {
          "id": "public-health-501-l03-q4",
          "text": "In an intervention workflow, what is the function of a 'rollback trigger'?",
          "skillId": "public-health-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To escalate a problem to senior leadership"
            },
            {
              "id": "b",
              "text": "To automatically reverse a process when a predefined failure threshold is met"
            },
            {
              "id": "c",
              "text": "To approve the initial project plan"
            },
            {
              "id": "d",
              "text": "To document the project's success after completion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A rollback trigger is a pre-planned control that limits damage by reversing an action when monitoring indicates a significant failure."
        }
      ]
    },
    {
      "id": "public-health-501-l04",
      "title": "Public Health Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix",
          "content": "A visual representation of a tradeoff matrix, with intervention options as rows and evaluation criteria (e.g., Efficacy, Cost, Equity, Feasibility) as columns, filled with sample scores."
        }
      ],
      "chunks": [
        {
          "id": "public-health-501-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "Analyze a case study of a city health taskforce coordinating prevention, communication, and resource allocation during an outbreak. You will map constraints, identify risk classes, and define the governance boundaries guiding their actions."
        },
        {
          "id": "public-health-501-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "Learn to use a tradeoff matrix to evaluate public health alternatives. Interventions will be scored against criteria like effectiveness, feasibility, risk, equity, and cost to facilitate structured, evidence-based decision-making."
        },
        {
          "id": "public-health-501-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "Recap how to map specific failure signatures to appropriate remediation actions. We will focus on establishing measurable recovery triggers that initiate corrective action, enabling strategies to adapt effectively to challenges."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-501-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured model for comparing alternatives under competing priorities."
        },
        {
          "id": "public-health-501-l04-f2",
          "front": "Failure signature",
          "back": "A recurring indicator of a predictable risk class."
        },
        {
          "id": "public-health-501-l04-f3",
          "front": "Recovery trigger",
          "back": "A measurable threshold that initiates corrective action."
        }
      ]
    },
    {
      "id": "public-health-501-l05",
      "title": "Public Health Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "public-health-501-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "A mock-up of a simulation dashboard showing user-configurable inputs (e.g., intervention type, budget constraints) and output graphs (e.g., infection rates, public trust levels)."
        }
      ],
      "chunks": [
        {
          "id": "public-health-501-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, you will configure interventions, set operational constraints, and design escalation logic for high-stakes scenarios. This exercise prepares you for real-world public health challenges by applying theory in a dynamic environment."
        },
        {
          "id": "public-health-501-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "Debrief the simulation outcomes by reviewing intervention results. You will analyze the health gains achieved, identify unintended side effects, and pinpoint gaps in governance compliance to inform future improvements."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-501-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across population risk modeling and health governance and trust priorities.",
          "instructions": [
            "Define objective and boundary conditions first.",
            "Document short- and long-term tradeoffs.",
            "Specify metrics and triggers that validate your recommendation."
          ]
        }
      ]
    },
    {
      "id": "public-health-501-l06",
      "title": "Checkpoint 2: Analysis and Simulation",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-501-l06-a1",
          "type": "image",
          "title": "Decision Pathways",
          "content": "A diagram of a decision tree, showing a primary choice branching into potential outcomes with associated risks and benefits."
        }
      ],
      "questions": [
        {
          "id": "public-health-501-l06-q1",
          "text": "What is the primary function of a tradeoff matrix in a public health case analysis?",
          "skillId": "public-health-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To select the cheapest option regardless of other factors"
            },
            {
              "id": "b",
              "text": "To provide a structured way to compare multiple intervention options against a consistent set of criteria"
            },
            {
              "id": "c",
              "text": "To prove that one option is perfect and has no downsides"
            },
            {
              "id": "d",
              "text": "To document the complete history of the public health problem"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix allows for a systematic, transparent comparison of different choices by scoring them on shared criteria like cost, efficacy, and equity."
        },
        {
          "id": "public-health-501-l06-q2",
          "text": "A 'failure signature' in a public health context is best described as:",
          "skillId": "public-health-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A document signed by leadership when a project fails"
            },
            {
              "id": "b",
              "text": "A random, unpredictable event that cannot be planned for"
            },
            {
              "id": "c",
              "text": "A predictable pattern of indicators that signals a specific type of system risk or failure"
            },
            {
              "id": "d",
              "text": "A universally positive outcome from an intervention"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Identifying failure signatures allows teams to anticipate and mitigate known risks before they cause significant harm."
        },
        {
          "id": "public-health-501-l06-q3",
          "text": "In the debrief phase of a simulation, why is it crucial to analyze unintended side effects?",
          "skillId": "public-health-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to the individuals responsible for poor outcomes"
            },
            {
              "id": "b",
              "text": "Because they are the only metric that matters for success"
            },
            {
              "id": "c",
              "text": "To prove that the simulation was inaccurate and should be ignored"
            },
            {
              "id": "d",
              "text": "To understand the full impact of an intervention, including hidden costs and potential harm to specific subgroups"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A complete analysis requires evaluating all significant outcomes, both positive and negative, to ensure a defensible and equitable recommendation."
        },
        {
          "id": "public-health-501-l06-q4",
          "text": "A 'recovery trigger' is a control designed to:",
          "skillId": "public-health-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Initiate a pre-planned corrective action once a specific, measurable negative threshold is crossed"
            },
            {
              "id": "b",
              "text": "Celebrate the success of an intervention with the team"
            },
            {
              "id": "c",
              "text": "Start the entire project over from the beginning"
            },
            {
              "id": "d",
              "text": "Request more funding without providing evidence of need"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Recovery triggers are proactive measures that operationalize a contingency plan based on data, not emotion, to limit the impact of a failure."
        }
      ]
    },
    {
      "id": "public-health-501-l07",
      "title": "Public Health Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "public-health-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A stakeholder map showing a central public health decision connected to various groups (e.g., elderly population, healthcare workers, small businesses), with arrows indicating the distribution of positive and negative impacts."
        }
      ],
      "chunks": [
        {
          "id": "public-health-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learn to map the distribution of impacts across stakeholders. This involves identifying the benefits, burdens, and delayed effects that different groups experience from public health decisions, which is essential for ensuring equitable outcomes."
        },
        {
          "id": "public-health-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Examine the architecture of accountability in public health. This includes ensuring decision processes are traceable, stakeholders have review rights, and clear remediation obligations exist, all of which are vital for maintaining public trust."
        },
        {
          "id": "public-health-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Review a responsible leadership checklist that connects key outcomes to ethical duties, policy compliance, and operational resilience. This checklist serves as a practical guide for navigating complex public health decisions."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-501-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "public-health-501-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "public-health-501-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "public-health-501-l08",
      "title": "Public Health Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "public-health-501-l08-a1",
          "type": "image",
          "title": "Expert Defense Panel",
          "content": "An illustration depicting a student presenting a proposal to a panel of three experts, with data charts and evidence displayed on a screen behind them."
        }
      ],
      "chunks": [
        {
          "id": "public-health-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Assemble a comprehensive defense brief that integrates well-supported claims, validating evidence, explicit uncertainty bounds, and proposed remediation pathways. This activity hones critical thinking and persuasive communication skills."
        },
        {
          "id": "public-health-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Rehearse responses to critical feedback from a mock expert panel. Critiques will cover technical methodology, governance protocols, and diverse stakeholder perspectives, building your confidence for real-world professional defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
