import type { LearningModule } from "@/lib/modules/types";

export const macos_601_Module: LearningModule = {
  "id": "macos-601",
  "title": "Macos Research and Leadership",
  "description": "A post-401 specialization in macOS, focusing on systems diagnostics, operations design, impact analysis, and governance. Develop leadership skills through advanced casework, high-fidelity simulations, and defense-based checkpoints.",
  "subject": "Macos",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "macos",
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
    "Apply advanced methods for macos systems diagnostics in high-constraint environments",
    "Design robust systems for macos operations and execution design with measurable control gates",
    "Evaluate interventions in macos impact and tradeoff analysis with research-grade rigor",
    "Operationalize macos governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "macos-601-l01",
      "title": "Macos Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "macos-601-l01-a1",
          "type": "image",
          "title": "Causal Model Diagram",
          "content": "A diagram showing system components, their causal relationships, and identified areas of uncertainty."
        }
      ],
      "chunks": [
        {
          "id": "macos-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Explore advanced scope and boundary design in macOS. This lesson covers system diagnostics for identifying and resolving issues, and the design of operations and execution for ensuring smooth, efficient performance. Mastering these concepts is key to managing the complexities of macOS systems."
        },
        {
          "id": "macos-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learn to map causal pathways, identify ranges of uncertainty, and understand system dependencies. This foundational skill is essential for planning effective interventions and predicting outcomes in complex scenarios."
        },
        {
          "id": "macos-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Establish rigorous standards for analysis by ensuring all claims are supported by measurable indicators. This includes setting confidence bounds and using review checkpoints to validate findings and maintain the integrity of your work."
        }
      ],
      "flashcards": [
        {
          "id": "macos-601-l01-f1",
          "front": "macos systems diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "macos-601-l01-f2",
          "front": "macos operations and execution design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "macos-601-l01-f3",
          "front": "macos impact and tradeoff analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "macos-601-l02",
      "title": "Macos Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "macos-601-l02-a1",
          "type": "image",
          "title": "Control Gate Workflow Template",
          "content": "A visual template for designing a process with explicit checkpoints, rollback criteria, and escalation triggers."
        }
      ],
      "chunks": [
        {
          "id": "macos-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design and stress-test specialized workflows. The goal is to build robust operational plans that perform reliably even under adverse conditions, preparing you for high-stakes execution."
        },
        {
          "id": "macos-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Review how to structure workflows with essential checkpoints, rollback criteria, and threshold-based escalation procedures. This architecture is crucial for maintaining control and ensuring processes run smoothly and safely."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-601-l02-act1",
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
      "id": "macos-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "macos-601-l03-a1",
          "type": "image",
          "title": "Checklist: Defensible Decision-Making",
          "content": "A checklist covering key elements: explicit assumptions, measurable indicators, baseline comparisons, and risk controls."
        }
      ],
      "questions": [
        {
          "id": "macos-601-l03-q1",
          "text": "Which practice most improves macos systems diagnostics decision quality?",
          "skillId": "macos-601-skill-diagnostics",
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
          "id": "macos-601-l03-q2",
          "text": "At level 601, strong execution for macos operations and execution design requires:",
          "skillId": "macos-601-skill-operations",
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
          "id": "macos-601-l03-q3",
          "text": "A defensible approach to macos impact and tradeoff analysis includes:",
          "skillId": "macos-601-skill-analysis",
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
          "id": "macos-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "macos-601-skill-governance",
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
      "id": "macos-601-l04",
      "title": "Macos Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "macos-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A matrix for comparing multiple options across shared criteria like cost, reliability, and safety, with scores and justifications."
        }
      ],
      "chunks": [
        {
          "id": "macos-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Analyze a case study focused on the competing constraints that emerge during macOS systems diagnostics. By examining these constraints, you will learn to identify and navigate the critical impacts and trade-offs that decision-makers face in complex, real-world situations."
        },
        {
          "id": "macos-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Practice comparing alternative solutions across key dimensions like safety, reliability, cost, and governance. This tradeoff framing is a critical skill for making well-rounded, defensible decisions by making assumptions and verification criteria explicit."
        },
        {
          "id": "macos-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Master a structured approach for documenting recommendations. Each proposal must include clear assumptions, supporting evidence, risk controls, and fallback plans to ensure decisions are well-founded, transparent, and auditable."
        }
      ]
    },
    {
      "id": "macos-601-l05",
      "title": "Macos Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "macos-601-l05-a1",
          "type": "image",
          "title": "Simulation Control Dashboard",
          "content": "An example of a dashboard for monitoring key performance indicators and governance constraints during a live scenario."
        }
      ],
      "chunks": [
        {
          "id": "macos-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this hands-on session, you will operate scenario controls in a high-fidelity simulation. Your task is to balance competing performance metrics and governance constraints, honing your ability to make effective decisions under pressure."
        },
        {
          "id": "macos-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Learn to design effective responses that adapt to changing conditions. This involves updating control gates in real-time while maintaining full traceability and accountability, which is crucial for building trust and ensuring transparency."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure macos scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "macos-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "macos-601-l06-a1",
          "type": "image",
          "title": "Framework: Case to Recommendation",
          "content": "A visual flow diagram showing the steps from analyzing a case study to formulating a defensible recommendation."
        }
      ],
      "questions": [
        {
          "id": "macos-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "macos-601-skill-analysis",
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
          "id": "macos-601-l06-q2",
          "text": "A resilient strategy for macos operations and execution design should include:",
          "skillId": "macos-601-skill-operations",
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
          "id": "macos-601-l06-q3",
          "text": "During a simulation of a system failure, two recovery options are presented. Option A is faster but has a 20% chance of data corruption. Option B is slower but safer. What is the most critical element of your decision-making process?",
          "skillId": "macos-601-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Choosing the fastest option to restore service immediately."
            },
            {
              "id": "b",
              "text": "Explicitly stating the tradeoff between speed and data integrity to stakeholders."
            },
            {
              "id": "c",
              "text": "Waiting for more data indefinitely."
            },
            {
              "id": "d",
              "text": "Picking an option based on gut feeling."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In advanced analysis, communicating the explicit tradeoffs and risks is as important as the choice itself."
        },
        {
          "id": "macos-601-l06-q4",
          "text": "In a live, high-pressure simulation, what is the most effective way to maintain stakeholder trust?",
          "skillId": "macos-601-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Withholding information to avoid causing panic."
            },
            {
              "id": "b",
              "text": "Providing periodic updates with clear data, knowns, unknowns, and next steps."
            },
            {
              "id": "c",
              "text": "Communicating only after the issue is fully resolved."
            },
            {
              "id": "d",
              "text": "Blaming external factors for the situation."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent, regular communication that includes uncertainty builds trust and enables collaborative problem-solving."
        }
      ]
    },
    {
      "id": "macos-601-l07",
      "title": "Macos Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "macos-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A map visualizing how a decision's benefits and burdens are distributed across different stakeholder groups over time."
        }
      ],
      "chunks": [
        {
          "id": "macos-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learn to map the distribution of benefits, burdens, and delayed effects across different stakeholder groups. Understanding these dynamics is essential for equitable and effective governance, ensuring that decisions are fair and just."
        },
        {
          "id": "macos-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Explore the architecture of accountability, which includes decision traceability, stakeholder review rights, and clear remediation obligations. This framework is vital for ensuring responsible governance and building public trust."
        },
        {
          "id": "macos-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Use a comprehensive checklist to connect strategic goals with ethical principles, compliance requirements, and operational resilience. This tool will help you integrate responsible leadership practices into every decision you make."
        }
      ],
      "flashcards": [
        {
          "id": "macos-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "macos-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "macos-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "macos-601-l08",
      "title": "Macos Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "macos-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Brief Template",
          "content": "A structured template for a defense brief, with sections for claims, evidence, uncertainty analysis, and remediation plans."
        }
      ],
      "chunks": [
        {
          "id": "macos-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Assemble a comprehensive defense brief for your capstone recommendation. This brief must articulate your core claims, supporting evidence, identified uncertainties, and clear remediation pathways for potential risks."
        },
        {
          "id": "macos-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Rehearse your defense by responding to critiques from technical, governance, and stakeholder perspectives. This practice will build your confidence and prepare you to defend your work under rigorous, expert cross-examination."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
