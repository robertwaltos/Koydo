import type { LearningModule } from "@/lib/modules/types";

export const organizational_behavior_601_Module: LearningModule = {
  "id": "organizational-behavior-601",
  "title": "Organizational Behavior Research and Leadership",
  "description": "Post-401 specialization in Organizational Behavior, focused on business systems diagnostics, business operations and execution design, business impact and tradeoff analysis, and business governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "organizational-behavior",
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
    "Design robust systems for business operations and execution design with measurable control gates",
    "Evaluate interventions in business impact and tradeoff analysis with research-grade rigor",
    "Operationalize business governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "organizational-behavior-601-l01",
      "title": "Advanced Foundations in Organizational Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l01-a1",
          "type": "image",
          "title": "Core Diagnostic Framework",
          "content": "A diagram illustrating the relationship between system boundaries, causal modeling, and evidence thresholds, showing how they form the basis for rigorous analysis."
        }
      ],
      "chunks": [
        {
          "id": "organizational-behavior-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Effective business system analysis begins with defining clear scope and boundaries. This involves identifying the limits of the system under review to diagnose issues accurately and design effective operational interventions. Mastering this skill is essential for understanding what is possible within an organization's constraints."
        },
        {
          "id": "organizational-behavior-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "This section focuses on mapping causal pathways to understand the connections between actions and outcomes. A key component is identifying and quantifying uncertainty and dependencies within the system. This foundational skill is crucial for planning effective interventions by anticipating how different factors influence one another."
        },
        {
          "id": "organizational-behavior-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds and Review Gates",
          "content": "All analytical claims must be supported by measurable indicators and validated evidence. This involves establishing confidence bounds for data and implementing review checkpoints to ensure findings are reliable. Maintaining high standards of evidence is critical for making defensible, high-impact decisions in complex organizational settings."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-601-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "organizational-behavior-601-l01-f2",
          "front": "Business Operations and Execution Design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "organizational-behavior-601-l01-f3",
          "front": "Business Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "organizational-behavior-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l02-a1",
          "type": "image",
          "title": "Workflow Design Template",
          "content": "A visual flowchart template showing a specialized workflow with embedded checkpoints, rollback triggers, and escalation paths based on performance thresholds."
        }
      ],
      "chunks": [
        {
          "id": "organizational-behavior-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this interactive lab, you will design specialized workflows for specific organizational tasks. You will then conduct stress tests by simulating adverse scenarios to evaluate their resilience. This hands-on experience is vital for learning how to create robust and reliable organizational processes."
        },
        {
          "id": "organizational-behavior-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap focuses on structuring workflows with robust control gates. Key architectural components include predefined checkpoints, clear rollback criteria, and threshold-based escalation procedures. This structure ensures continuous monitoring and effective response to emergent issues, maintaining control over complex processes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "organizational-behavior-601-l02-act1",
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
      "id": "organizational-behavior-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l03-a1",
          "type": "image",
          "title": "Key Diagnostic Principles",
          "content": "An infographic summarizing the core principles of diagnostics: explicit assumptions, measurable constraints, causal modeling, and evidence-based validation."
        }
      ],
      "questions": [
        {
          "id": "organizational-behavior-601-l03-q1",
          "text": "Which practice most improves business systems diagnostics decision quality?",
          "skillId": "organizational-behavior-601-skill-core",
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
          "id": "organizational-behavior-601-l03-q2",
          "text": "At level 601, strong execution for business operations and execution design requires:",
          "skillId": "organizational-behavior-601-skill-execution",
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
          "id": "organizational-behavior-601-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "organizational-behavior-601-skill-eval",
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
          "id": "organizational-behavior-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "organizational-behavior-601-skill-governance",
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
          "id": "organizational-behavior-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Business?",
          "skillId": "organizational-behavior-601-skill-advanced-5",
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
          "id": "organizational-behavior-601-l03-q6",
          "text": "In high-stakes Organizational Behavior Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "organizational-behavior-601-skill-advanced-6",
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
          "id": "organizational-behavior-601-l03-q7",
          "text": "A mature remediation loop in advanced Business should prioritize:",
          "skillId": "organizational-behavior-601-skill-advanced-7",
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
          "id": "organizational-behavior-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Organizational Behavior Research and Leadership?",
          "skillId": "organizational-behavior-601-skill-advanced-8",
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
      "id": "organizational-behavior-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A visual matrix for comparing decision options across multiple dimensions like cost, reliability, safety, and equity, with space to note assumptions and evidence."
        }
      ],
      "chunks": [
        {
          "id": "organizational-behavior-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture and Constraint Framing",
          "content": "This lesson deconstructs a complex case study to highlight competing constraints in business systems diagnostics. We will analyze the second- and third-order impacts of decisions and explore the necessary trade-offs, which is crucial for making informed choices that balance conflicting organizational needs."
        },
        {
          "id": "organizational-behavior-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing and Comparative Analysis",
          "content": "In this guided practice, you will compare alternative solutions across critical dimensions such as safety, reliability, cost, equity, and governance. This comparative analysis develops the skill of systematically evaluating the implications of each choice and prioritizing factors in a defensible manner."
        },
        {
          "id": "organizational-behavior-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "This recap introduces a structured format for decision memos. Every recommendation must clearly articulate the underlying assumptions, supporting evidence, risk mitigation controls, and contingency plans. This disciplined approach ensures that all facets of a decision are rigorously considered, documented, and communicated."
        }
      ]
    },
    {
      "id": "organizational-behavior-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l05-a1",
          "type": "image",
          "title": "Dynamic Simulation Dashboard",
          "content": "A mock-up of an interactive dashboard with controls to adjust variables (e.g., budget, staffing) and monitors displaying real-time outcomes (e.g., performance, risk levels)."
        }
      ],
      "chunks": [
        {
          "id": "organizational-behavior-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Control",
          "content": "In this interactive simulation, you will operate scenario controls to manage a business unit. The objective is to balance performance targets with governance constraints under changing conditions. This exercise hones the ability to make effective real-time decisions that align with strategic organizational goals."
        },
        {
          "id": "organizational-behavior-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap explores how to design effective responses to challenges encountered during the simulation. A key skill is updating control gates and operational parameters dynamically while maintaining full traceability and accountability. This adaptive capability is essential for building resilient systems and fostering organizational trust."
        }
      ],
      "interactiveActivities": [
        {
          "id": "organizational-behavior-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure organizational behavior scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "organizational-behavior-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l06-a1",
          "type": "image",
          "title": "Case Deconstruction Framework",
          "content": "A visual guide showing how to break down a case: identify core problems, map constraints, evaluate options using a tradeoff matrix, and structure a decision memo."
        }
      ],
      "questions": [
        {
          "id": "organizational-behavior-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "organizational-behavior-601-skill-case1",
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
          "id": "organizational-behavior-601-l06-q2",
          "text": "A resilient strategy for business operations and execution design should include:",
          "skillId": "organizational-behavior-601-skill-case2",
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
          "id": "organizational-behavior-601-l06-q3",
          "text": "When evaluating business impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "organizational-behavior-601-skill-case3",
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
          "id": "organizational-behavior-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "organizational-behavior-601-skill-case4",
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
          "id": "organizational-behavior-601-l06-q5",
          "text": "In a case analysis, you must choose between a low-cost, high-risk option and a high-cost, low-risk option. What is the most critical element of your recommendation memo?",
          "skillId": "organizational-behavior-601-skill-tradeoff-memo",
          "options": [
            {
              "id": "a",
              "text": "Advocating for one option without mentioning the other"
            },
            {
              "id": "b",
              "text": "An explicit tradeoff analysis comparing both options on shared metrics"
            },
            {
              "id": "c",
              "text": "Focusing only on the financial cost of each option"
            },
            {
              "id": "d",
              "text": "A decision based on which option is easier to implement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible recommendation requires explicitly stating and quantifying the tradeoffs between competing options."
        },
        {
          "id": "organizational-behavior-601-l06-q6",
          "text": "During a simulation, an unexpected external event causes performance metrics to drop sharply. What is the best initial response?",
          "skillId": "organizational-behavior-601-skill-adaptive-response",
          "options": [
            {
              "id": "a",
              "text": "Continue with the original plan without adjustments"
            },
            {
              "id": "b",
              "text": "Activate a pre-defined contingency plan and assess the new conditions"
            },
            {
              "id": "c",
              "text": "Immediately halt all operations indefinitely"
            },
            {
              "id": "d",
              "text": "Change the success metrics to make the current performance look better"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective adaptive response involves using pre-planned contingencies to stabilize the situation before designing a new strategy."
        },
        {
          "id": "organizational-behavior-601-l06-q7",
          "text": "What is the primary purpose of documenting fallback plans in a decision memo?",
          "skillId": "organizational-behavior-601-skill-contingency-planning",
          "options": [
            {
              "id": "a",
              "text": "To prove the primary recommendation is likely to fail"
            },
            {
              "id": "b",
              "text": "To create unnecessary work for the implementation team"
            },
            {
              "id": "c",
              "text": "To demonstrate comprehensive risk analysis and improve system resilience"
            },
            {
              "id": "d",
              "text": "To satisfy a bureaucratic requirement without intending to use them"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Fallback plans are a key part of risk management, showing that potential failures have been considered and mitigation strategies are in place."
        },
        {
          "id": "organizational-behavior-601-l06-q8",
          "text": "In a simulation clinic, 'maintaining traceability' means:",
          "skillId": "organizational-behavior-601-skill-traceability",
          "options": [
            {
              "id": "a",
              "text": "Making decisions based on intuition alone"
            },
            {
              "id": "b",
              "text": "Keeping a clear, auditable log of all decisions, data inputs, and control changes"
            },
            {
              "id": "c",
              "text": "Ensuring no one can find out who made a particular decision"
            },
            {
              "id": "d",
              "text": "Only recording the final outcome of the simulation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability is crucial for accountability and learning, requiring a clear record of the decision-making process."
        }
      ]
    },
    {
      "id": "organizational-behavior-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram mapping the distribution of benefits, costs, and risks of a decision across various stakeholder groups (e.g., employees, customers, community, environment)."
        }
      ],
      "chunks": [
        {
          "id": "organizational-behavior-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson focuses on mapping the distribution of benefits, burdens, and delayed effects of organizational decisions across all stakeholder groups. A comprehensive understanding of these impacts is a prerequisite for equitable and responsible leadership, ensuring all affected parties are considered."
        },
        {
          "id": "organizational-behavior-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we examine the architecture of accountability within organizations. This includes integrating decision traceability, stakeholder review rights, and clear remediation obligations into core processes. A robust accountability structure creates a culture of responsibility and ensures decisions are made with greater care and foresight."
        },
        {
          "id": "organizational-behavior-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides a practical checklist for responsible leadership. It connects performance outcomes with ethical guardrails, policy adherence, and system resilience. Applying this checklist helps ensure that leadership decisions are not only effective but also accountable and ethically sound."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "organizational-behavior-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "organizational-behavior-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "organizational-behavior-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "organizational-behavior-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Brief Template",
          "content": "A structured visual template for a defense brief, with sections for the core claim, supporting evidence, uncertainty bounds, risk analysis, and remediation pathways."
        }
      ],
      "chunks": [
        {
          "id": "organizational-behavior-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this capstone activity, you will assemble a comprehensive defense brief for a strategic recommendation. The brief must integrate your core claims, supporting evidence, quantified uncertainty, and proposed remediation pathways. This exercise synthesizes the course's core skills into a single, high-stakes deliverable."
        },
        {
          "id": "organizational-behavior-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session involves rehearsing your defense against critical inquiry. You will practice responding to expert challenges on technical methodology, governance implications, and stakeholder impacts. This rehearsal is designed to sharpen your ability to communicate complex ideas clearly and defend your analysis under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "organizational-behavior-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
