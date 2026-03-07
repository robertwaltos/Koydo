import type { LearningModule } from "@/lib/modules/types";

export const science_601_Module: LearningModule = {
  "id": "science-601",
  "title": "Science Research and Leadership",
  "description": "Post-401 specialization in Science, focused on science systems diagnostics, science operations and execution design, science impact and tradeoff analysis, and science governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "science",
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
    "Apply advanced methods for science systems diagnostics in high-constraint environments",
    "Design robust systems for science operations and execution design with measurable control gates",
    "Evaluate interventions in science impact and tradeoff analysis with research-grade rigor",
    "Operationalize science governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "science-601-l01",
      "title": "Science Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-601-l01-a1",
          "type": "image",
          "title": "System Diagnostics Model",
          "content": "A diagram showing a complex system with inputs, outputs, and internal causal loops clearly marked."
        }
      ],
      "chunks": [
        {
          "id": "science-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, you will learn to define clear scope and boundaries for complex scientific problems. We will focus on diagnosing science systems and designing robust operational plans, providing a crucial foundation for leadership in research and development."
        },
        {
          "id": "science-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Here, you will map the causal pathways connecting different factors within a system. You will also learn to identify and quantify ranges of uncertainty. This analysis is essential for making well-informed decisions before planning any intervention."
        },
        {
          "id": "science-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap emphasizes the importance of backing all scientific claims with measurable evidence. We will review how to use confidence bounds and review checkpoints to maintain high standards of evidence, ensuring your conclusions are reliable and trustworthy."
        }
      ],
      "flashcards": [
        {
          "id": "science-601-l01-f1",
          "front": "Science Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "science-601-l01-f2",
          "front": "Science Operations and Execution Design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "science-601-l01-f3",
          "front": "Science Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "science-601-l02",
      "title": "Science Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "science-601-l02-a1",
          "type": "image",
          "title": "Robust Workflow Design",
          "content": "A process flowchart illustrating decision points, control gates, and escalation pathways."
        }
      ],
      "chunks": [
        {
          "id": "science-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows for specific scientific tasks. You will then stress-test these workflows by simulating adverse conditions to evaluate their resilience, building practical skills in robust method design."
        },
        {
          "id": "science-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap covers how to structure workflows with essential checkpoints, criteria for rolling back to previous states, and threshold-based escalation procedures. Mastering these components is crucial for building robust and adaptive scientific processes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-601-l02-act1",
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
      "id": "science-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "science-601-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Apply the principles of system diagnostics and control gate architecture to answer the following questions."
        }
      ],
      "questions": [
        {
          "id": "science-601-l03-q1",
          "text": "Which practice most improves science systems diagnostics decision quality?",
          "skillId": "science-601-skill-core",
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
          "id": "science-601-l03-q2",
          "text": "At level 601, strong execution for science operations and execution design requires:",
          "skillId": "science-601-skill-execution",
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
          "id": "science-601-l03-q3",
          "text": "A defensible approach to science impact and tradeoff analysis includes:",
          "skillId": "science-601-skill-eval",
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
          "id": "science-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "science-601-skill-governance",
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
        },
        {
          "id": "science-601-l03-q5",
          "text": "What is the primary purpose of causal and uncertainty modeling before an intervention?",
          "skillId": "science-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To guarantee a successful outcome"
            },
            {
              "id": "b",
              "text": "To identify potential failure modes and dependencies"
            },
            {
              "id": "c",
              "text": "To create a more complex plan"
            },
            {
              "id": "d",
              "text": "To assign blame after a failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Causal modeling helps map system dependencies and potential risks, allowing for better-informed planning and intervention design."
        },
        {
          "id": "science-601-l03-q6",
          "text": "In a control gate architecture, what is the function of a 'rollback trigger'?",
          "skillId": "science-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To ensure the project never fails"
            },
            {
              "id": "b",
              "text": "To automatically approve the next stage"
            },
            {
              "id": "c",
              "text": "To provide a pre-defined condition for reverting to a previous safe state"
            },
            {
              "id": "d",
              "text": "To escalate a decision to senior leadership"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A rollback trigger is a pre-defined safety mechanism that reverts a process to a known good state when adverse conditions are met, limiting potential damage."
        }
      ]
    },
    {
      "id": "science-601-l04",
      "title": "Science Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A matrix comparing three different scientific interventions across criteria like cost, impact, and risk."
        }
      ],
      "chunks": [
        {
          "id": "science-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson introduces scenario architecture, a method for framing the competing constraints within a science system. You will analyze the impacts and tradeoffs of different decisions, deepening your understanding of complex scientific analysis."
        },
        {
          "id": "science-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice section, you will compare alternative solutions across critical dimensions like safety, reliability, cost, and equity. This comparative analysis is essential for making balanced, informed decisions in scientific research and leadership."
        },
        {
          "id": "science-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "This recap reinforces a structured pattern for decision memos. We will review the importance of including explicit assumptions, supporting evidence, risk controls, and fallback plans in every recommendation to ensure they are well-supported and resilient."
        }
      ],
      "flashcards": [
        {
          "id": "science-601-l04-f1",
          "front": "Scenario Architecture",
          "back": "The practice of framing a problem by defining its key variables, constraints, and potential states."
        },
        {
          "id": "science-601-l04-f2",
          "front": "Tradeoff Framing",
          "back": "A structured method for comparing options by evaluating their performance against a shared set of critical dimensions (e.g., cost, safety, impact)."
        },
        {
          "id": "science-601-l04-f3",
          "front": "Decision Memo Pattern",
          "back": "A standardized format for recommendations that includes assumptions, evidence, risk controls, and fallback plans."
        }
      ]
    },
    {
      "id": "science-601-l05",
      "title": "Science Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "science-601-l05-a1",
          "type": "image",
          "title": "Interactive Simulation Dashboard",
          "content": "A dashboard with adjustable levers for variables like 'Resource Allocation' and 'Safety Thresholds' and real-time feedback graphs."
        }
      ],
      "chunks": [
        {
          "id": "science-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, you will operate a simulated system, using scenario controls to balance performance metrics against governance constraints. This hands-on practice develops your ability to manage complex, high-pressure situations in real-time."
        },
        {
          "id": "science-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on adaptive response design. You will learn how to update control gates and operational plans in response to new information, while maintaining full traceability and accountability for every decision."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure science scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "science-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "science-601-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Apply case analysis and simulation principles to answer the following questions."
        }
      ],
      "questions": [
        {
          "id": "science-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "science-601-skill-case1",
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
          "explanation": "Defensible recommendations begin with explicit assumptions, constraints, and measurable targets."
        },
        {
          "id": "science-601-l06-q2",
          "text": "A resilient strategy for science operations and execution design should include:",
          "skillId": "science-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "One-way execution with no rollback capability"
            },
            {
              "id": "c",
              "text": "No ownership mapping across teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience depends on checkpoints, fallback options, and explicit escalation design."
        },
        {
          "id": "science-601-l06-q3",
          "text": "When evaluating science impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "science-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Single success story without controls"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "Outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Retrospective scope changes to fit outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons, side-effect analysis, and uncertainty disclosure."
        },
        {
          "id": "science-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "science-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns authority, measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates policy from operational controls"
            },
            {
              "id": "c",
              "text": "Avoids external review and transparency"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links authority, measurable controls, and corrective action."
        },
        {
          "id": "science-601-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Science?",
          "skillId": "science-601-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the option with the most persuasive narrative"
            },
            {
              "id": "b",
              "text": "Score alternatives against shared metrics, side effects, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Switch metrics after results arrive"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require shared metrics, side-effect accounting, and uncertainty disclosure."
        },
        {
          "id": "science-601-l06-q6",
          "text": "In high-stakes Science Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "science-601-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only final outcomes after completion"
            },
            {
              "id": "d",
              "text": "Limit updates to a single informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints."
        },
        {
          "id": "science-601-l06-q7",
          "text": "A mature remediation loop in advanced Science should prioritize:",
          "skillId": "science-601-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Blame assignment without system updates"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, control redesign, and measurable follow-up verification"
            },
            {
              "id": "c",
              "text": "One-time fixes without retesting"
            },
            {
              "id": "d",
              "text": "Issue closure based on elapsed time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation ties root causes to control redesign and verification."
        },
        {
          "id": "science-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Science Research and Leadership?",
          "skillId": "science-601-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and contingency capacity"
            },
            {
              "id": "c",
              "text": "Ignore correlated failure modes"
            },
            {
              "id": "d",
              "text": "Commit all resources to one irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced portfolios combine value optimization with explicit risk limits and contingency options."
        }
      ]
    },
    {
      "id": "science-601-l07",
      "title": "Science Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "science-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual map showing how a scientific project's outcomes (positive and negative) are distributed across different community groups."
        }
      ],
      "chunks": [
        {
          "id": "science-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to map the distribution of benefits, burdens, and long-term effects of scientific work across different stakeholder groups. This is a crucial skill for responsible governance and ethical public engagement."
        },
        {
          "id": "science-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section introduces accountability architecture. You will explore systems for decision traceability, stakeholder review rights, and the obligation to remediate negative outcomes. This framework is essential for transparent and responsible scientific practice."
        },
        {
          "id": "science-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We will conclude by developing a responsible leadership checklist. This tool will help you connect project outcomes with ethical duties, policy compliance, and operational resilience, reinforcing your role as a responsible leader in the scientific community."
        }
      ],
      "flashcards": [
        {
          "id": "science-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "science-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "science-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "science-601-l08",
      "title": "Science Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "science-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Structure",
          "content": "A presentation slide template showing sections for 'Claim', 'Evidence', 'Uncertainty', and 'Remediation Plan'."
        }
      ],
      "chunks": [
        {
          "id": "science-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this capstone activity, you will assemble a defense brief for a complex scientific recommendation. You will structure your core claims, present the supporting evidence, explicitly state uncertainties, and propose clear remediation pathways."
        },
        {
          "id": "science-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "To prepare for your final defense, you will rehearse responding to critical questions from a simulated expert panel. This will cover technical details, governance protocols, and stakeholder concerns, building your confidence and readiness."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
