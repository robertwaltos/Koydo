import type { LearningModule } from "@/lib/modules/types";

export const operations_management_501_Module: LearningModule = {
  "id": "operations-management-501",
  "title": "Operations Management Specialization Studio",
  "description": "A specialization in Operations Management focusing on diagnosing business systems, designing robust operations, analyzing impacts and tradeoffs, and leading with effective governance. This module uses advanced casework, simulation, and defense-based checkpoints to build expert-level skills.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "operations-management",
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
    "Apply advanced methods for business systems diagnostics in high-constraint environments",
    "Design robust systems for business operations and execution with measurable control gates",
    "Evaluate interventions and their tradeoffs with research-grade rigor",
    "Operationalize business governance with accountable leadership and clear escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "operations-management-501-l01",
      "title": "Advanced Foundations in Operations Management",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "operations-management-501-l01-a1",
          "type": "image",
          "title": "System Boundary Map",
          "content": "A diagram illustrating the inputs, processes, and outputs of a business system, with clear boundaries and external dependencies."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces advanced concepts of scope boundaries in Operations Management, which define the limits and capabilities of business processes. We will focus on effective methods for diagnosing business systems, analyzing how well they function, and identifying areas for improvement. You will learn how to design operations that enhance execution and align with overall organizational goals."
        },
        {
          "id": "operations-management-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "In this section, you will learn to map causal pathways—the connections between factors that influence outcomes. We will also examine how to model uncertainty ranges and system dependencies, which are crucial for planning effective interventions and making informed decisions when addressing complex business challenges."
        },
        {
          "id": "operations-management-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "It is essential that all claims in an analysis are supported by measurable indicators. This recap emphasizes the importance of establishing confidence bounds and setting up review checkpoints to ensure findings are reliable. By maintaining a high standard of evidence, we can support our conclusions and recommendations with confidence."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-501-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "A specialization focused on analyzing business processes by defining explicit assumptions and measurable constraints."
        },
        {
          "id": "operations-management-501-l01-f2",
          "front": "Execution Design",
          "back": "The architecture of business operations that determines their reliability and performance under stress."
        },
        {
          "id": "operations-management-501-l01-f3",
          "front": "Tradeoff Analysis",
          "back": "An evaluation discipline for identifying the true gains and hidden costs of a decision or intervention."
        }
      ]
    },
    {
      "id": "operations-management-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "operations-management-501-l02-a1",
          "type": "image",
          "title": "Workflow Stress Test",
          "content": "An interactive diagram of a business workflow with highlighted control gates, rollback triggers, and escalation paths under simulated stress conditions."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows tailored to specific business needs. You will then stress-test these workflows by simulating adverse scenarios to evaluate their resilience under pressure. This practice will help you build robust and reliable operational systems."
        },
        {
          "id": "operations-management-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap reviews how to structure workflows with essential control gates, rollback criteria, and threshold-based escalation procedures. These elements are crucial for maintaining operational control, ensuring that issues are addressed promptly, and limiting the impact of failures."
        }
      ],
      "interactiveActivities": [
        {
          "id": "operations-management-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each operational control with its primary effect on system reliability and governance.",
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
      "id": "operations-management-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "operations-management-501-l03-a1",
          "type": "image",
          "title": "Knowledge Check",
          "content": "An icon of a target with an arrow in the center, representing the assessment of specialist methods."
        }
      ],
      "questions": [
        {
          "id": "operations-management-501-l03-q1",
          "text": "Which practice most improves the decision quality of business systems diagnostics?",
          "skillId": "operations-management-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or assumptions"
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit."
        },
        {
          "id": "operations-management-501-l03-q2",
          "text": "At an advanced level, strong execution design requires:",
          "skillId": "operations-management-501-skill-execution",
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
          "id": "operations-management-501-l03-q3",
          "text": "A defensible approach to tradeoff analysis includes:",
          "skillId": "operations-management-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "operations-management-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "operations-management-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement"
            },
            {
              "id": "c",
              "text": "Targets without ownership or escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between intent, measurement, and corrective action."
        }
      ]
    },
    {
      "id": "operations-management-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "operations-management-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A matrix comparing multiple strategic options across dimensions like cost, reliability, safety, and governance, with color-coded scoring."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson focuses on how to structure scenarios that frame competing constraints within business systems. We will analyze how different factors impact performance and the tradeoffs that must be considered when making decisions. Understanding these dynamics is key to effective operations management."
        },
        {
          "id": "operations-management-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice session, you will compare various options across multiple dimensions, including safety, reliability, cost, and governance. This comparative analysis will help you understand the complexities involved in making balanced decisions that consider all relevant factors."
        },
        {
          "id": "operations-management-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "This recap emphasizes that every recommendation should clearly outline its underlying assumptions, supporting evidence, risk controls, and fallback plans. This structured approach ensures the decision-making process is transparent, accountable, and defensible."
        }
      ]
    },
    {
      "id": "operations-management-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "operations-management-501-l05-a1",
          "type": "image",
          "title": "Operations Simulation Dashboard",
          "content": "A dynamic dashboard with KPIs, resource allocation sliders, and real-time feedback graphs for the interactive simulation."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "During this interactive session, you will operate scenario controls to balance performance metrics against governance constraints. This hands-on experience provides direct insight into the challenges of managing operations effectively while adhering to necessary regulations and standards. This practice connects theory to the decisions you will make during assessment by highlighting tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "In this recap, we will discuss how to design effective responses to operational challenges by updating control gates without losing traceability or accountability. This ensures that all actions are documented and can be reviewed, maintaining a high level of integrity in operations management."
        }
      ],
      "interactiveActivities": [
        {
          "id": "operations-management-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure operations scenario by tuning system controls in real-time to mitigate risks and achieve targets under uncertainty."
        }
      ]
    },
    {
      "id": "operations-management-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "operations-management-501-l06-a1",
          "type": "image",
          "title": "Mastery Checkpoint",
          "content": "An icon of a medal or certificate, representing the assessment of case and simulation mastery."
        }
      ],
      "questions": [
        {
          "id": "operations-management-501-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "operations-management-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without evidence logs"
            },
            {
              "id": "d",
              "text": "Single-metric optimization only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with explicit assumptions, constraints, and measurable targets, which are core to case analysis."
        },
        {
          "id": "operations-management-501-l06-q2",
          "text": "During a simulation of adverse conditions, what is the most critical capability of an operational system?",
          "skillId": "operations-management-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "The ability to adapt controls and execute fallback plans"
            },
            {
              "id": "b",
              "text": "Maintaining the original plan regardless of new data"
            },
            {
              "id": "c",
              "text": "Focusing only on long-term goals, ignoring immediate alerts"
            },
            {
              "id": "d",
              "text": "Waiting for a full retrospective before taking any action"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in simulations is demonstrated by the ability to adapt controls and use pre-planned contingencies."
        },
        {
          "id": "operations-management-501-l06-q3",
          "text": "When evaluating tradeoffs in a case study, which method is most rigorous?",
          "skillId": "operations-management-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "A single success story without controls"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "An outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Retrospectively changing the scope to fit outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons against a baseline, analysis of side-effects, and disclosure of uncertainty."
        },
        {
          "id": "operations-management-501-l06-q4",
          "text": "In a simulation, an 'adaptive response' refers to:",
          "skillId": "operations-management-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Updating control gates based on real-time data while maintaining accountability"
            },
            {
              "id": "b",
              "text": "Ignoring alerts until the end of the simulation run"
            },
            {
              "id": "c",
              "text": "Making undocumented changes to the system"
            },
            {
              "id": "d",
              "text": "Pausing the simulation to ask for the correct answer"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Adaptive response is about making traceable, data-driven adjustments to controls during live operations."
        }
      ]
    },
    {
      "id": "operations-management-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "operations-management-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A network diagram showing how a central business decision distributes benefits and burdens across various internal and external stakeholder groups."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to map the distribution of benefits, burdens, and delayed effects across different stakeholder groups. Understanding these impacts is crucial for making responsible decisions that consider the well-being of all parties involved and connects your operational choices to their real-world consequences."
        },
        {
          "id": "operations-management-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the architecture of accountability, which includes decision traceability, review rights, and obligations for remediation. These components are essential for ensuring that decisions are made responsibly and that a clear process exists for addressing any issues that arise."
        },
        {
          "id": "operations-management-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides a checklist for responsible leadership, connecting key outcomes with ethical considerations, policy compliance, and organizational resilience. This tool helps ensure that your operational decisions are not only effective but also principled and sustainable."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How the outcomes of a decision are allocated across different populations and over various timescales."
        },
        {
          "id": "operations-management-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of the evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "operations-management-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making that balances performance, accountability, and ethical considerations."
        }
      ]
    },
    {
      "id": "operations-management-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "operations-management-501-l08-a1",
          "type": "image",
          "title": "Capstone Defense Panel",
          "content": "An illustration of a presenter defending their analysis in front of a panel of experts, with data visualizations in the background."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, you will assemble a comprehensive defense brief for your capstone recommendation. This includes articulating your main claims, presenting supporting evidence, defining the limits of your analysis, and proposing contingency plans. This exercise hones your critical thinking and communication skills."
        },
        {
          "id": "operations-management-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session simulates a defense in front of an expert panel. You will practice responding to critical questions about technical details, governance implications, and stakeholder impacts. This rehearsal is essential for building the confidence and clarity needed to defend high-stakes recommendations effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "operations-management-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendations to a simulated panel of experts who will conduct an adversarial cross-examination of your analysis."
        }
      ]
    }
  ]
};
