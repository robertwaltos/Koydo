import type { LearningModule } from "@/lib/modules/types";

export const international_business_601_Module: LearningModule = {
  "id": "international-business-601",
  "title": "International Business Research and Leadership",
  "description": "Post-401 specialization in International Business, focused on business systems diagnostics, business operations and execution design, business impact and tradeoff analysis, and business governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "international-business",
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
      "id": "international-business-601-l01",
      "title": "Advanced Foundations in International Business",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "international-business-601-l01-a1",
          "type": "image",
          "title": "Systems Thinking Framework",
          "content": "A diagram illustrating a complex business system with interconnected nodes for finance, operations, marketing, and HR, highlighting external pressures from regulatory and market forces."
        }
      ],
      "chunks": [
        {
          "id": "international-business-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Defining the scope and boundaries of an international business system. This involves diagnosing system components, interdependencies, and designing operational frameworks for effective strategy execution. Understanding these boundaries is critical for identifying constraints and opportunities in global markets."
        },
        {
          "id": "international-business-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Techniques for mapping causal relationships within a business system. This includes identifying key variables, modeling their interactions, and quantifying uncertainty. This modeling forms the basis for predicting the impact of potential interventions."
        },
        {
          "id": "international-business-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Establishing rigorous standards for evidence in decision-making. All claims and recommendations must be supported by measurable indicators, with clearly defined confidence bounds and scheduled review checkpoints to ensure data-driven governance."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-601-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints to analyze business performance."
        },
        {
          "id": "international-business-601-l01-f2",
          "front": "Business Operations and Execution Design",
          "back": "The architecture of processes and controls that determines operational reliability under stress."
        },
        {
          "id": "international-business-601-l01-f3",
          "front": "Business Impact and Tradeoff Analysis",
          "back": "An evaluation discipline for identifying the true gains, hidden costs, and secondary effects of a decision."
        }
      ]
    },
    {
      "id": "international-business-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "international-business-601-l02-a1",
          "type": "image",
          "title": "Control Gate Flowchart",
          "content": "A flowchart of a new product launch process, with designated 'control gate' diamonds where go/no-go decisions must be made based on specific KPIs."
        }
      ],
      "chunks": [
        {
          "id": "international-business-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "An interactive lab for designing and stress-testing specialized business workflows. Learners will build operational models tailored to specific international scenarios and simulate adverse conditions, such as supply chain disruptions or regulatory changes, to evaluate their resilience."
        },
        {
          "id": "international-business-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "The principles of designing control gates within business processes. These checkpoints are used to monitor progress against key metrics, define criteria for rolling back failed initiatives, and establish threshold-based escalation pathways for risk management."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-business-601-l02-act1",
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
      "id": "international-business-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-business-601-l03-a1",
          "type": "image",
          "title": "Key Concepts Review",
          "content": "A summary infographic of the key concepts from Lessons 1 & 2: Systems Diagnostics, Causal Modeling, and Control Gate Architecture."
        }
      ],
      "questions": [
        {
          "id": "international-business-601-l03-q1",
          "text": "Which practice most improves the decision quality of business systems diagnostics?",
          "skillId": "international-business-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit, forming a solid foundation for analysis."
        },
        {
          "id": "international-business-601-l03-q2",
          "text": "At an advanced level, strong execution design requires:",
          "skillId": "international-business-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "Eliminating retrospectives or post-run reviews"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs clear ownership, regular checkpoints, and threshold-driven governance to manage complexity."
        },
        {
          "id": "international-business-601-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "international-business-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotes without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after observing outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended consequences (side-effects), and transparently discloses uncertainty."
        },
        {
          "id": "international-business-601-l03-q4",
          "text": "Mature business governance systems effectively connect:",
          "skillId": "international-business-601-skill-governance",
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
          "explanation": "Governance maturity is the operational link between the intent of a policy, how it is measured, and what actions are taken to correct deviations."
        }
      ]
    },
    {
      "id": "international-business-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "international-business-601-l04-a1",
          "type": "image",
          "title": "Decision Matrix Template",
          "content": "A decision matrix comparing three strategic options (e.g., 'Build', 'Buy', 'Partner') against weighted criteria like Cost, Speed to Market, and Risk."
        }
      ],
      "chunks": [
        {
          "id": "international-business-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Deconstructing a complex international business case study. This involves framing the core problem, identifying competing constraints (e.g., market growth vs. regulatory compliance), and analyzing the potential impacts and tradeoffs of different strategic choices."
        },
        {
          "id": "international-business-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "A structured practice for evaluating strategic options. Learners will compare alternatives across multiple dimensions, such as financial cost, operational reliability, market equity, and governance risk, to understand the multifaceted consequences of each potential decision."
        },
        {
          "id": "international-business-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Mastering the structure of a professional decision memorandum. A template is provided emphasizing the clear articulation of recommendations, underlying assumptions, supporting evidence, risk mitigation controls, and contingency plans."
        }
      ]
    },
    {
      "id": "international-business-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "international-business-601-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "A screenshot of the simulation's dashboard, showing key performance indicators (KPIs), risk alerts, and control levers that the learner can manipulate."
        }
      ],
      "chunks": [
        {
          "id": "international-business-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "A hands-on simulation where learners manage a virtual international business unit. Participants will adjust operational controls (e.g., pricing, supply chain logistics, marketing spend) in real-time to balance performance targets against dynamic governance constraints and market events."
        },
        {
          "id": "international-business-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Developing strategies for adaptive response within the simulation. This involves modifying control gates and operational plans in response to unexpected events, while maintaining clear accountability and a traceable decision log."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-business-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure international business scenario and tune controls under uncertainty to achieve strategic objectives."
        }
      ]
    },
    {
      "id": "international-business-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "international-business-601-l06-a1",
          "type": "image",
          "title": "Adaptive Strategy Map",
          "content": "A side-by-side comparison of a static business plan versus an adaptive strategy map that shows decision trees based on potential simulation outcomes."
        }
      ],
      "questions": [
        {
          "id": "international-business-601-l06-q1",
          "text": "When analyzing a complex international business case, what is the most critical first step for a defensible recommendation?",
          "skillId": "international-business-601-skill-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Selecting a solution before analyzing the data"
            },
            {
              "id": "b",
              "text": "Clearly defining the core problem, constraints, and success criteria"
            },
            {
              "id": "c",
              "text": "Focusing only on the financial data provided"
            },
            {
              "id": "d",
              "text": "Assuming the provided information is complete and certain"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible recommendation starts with a precise definition of the problem and the boundaries for a successful solution, which guides all subsequent analysis."
        },
        {
          "id": "international-business-601-l06-q2",
          "text": "In a business simulation, if a sudden tariff is imposed on your key supply chain, what is the most effective 'adaptive response'?",
          "skillId": "international-business-601-skill-simulation-strategy",
          "options": [
            {
              "id": "a",
              "text": "Immediately cease all operations to avoid losses"
            },
            {
              "id": "b",
              "text": "Ignore the tariff and hope it is temporary"
            },
            {
              "id": "c",
              "text": "Analyze the cost impact, evaluate alternative sourcing, and adjust pricing models"
            },
            {
              "id": "d",
              "text": "Focus exclusively on increasing marketing to offset the new cost"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An effective adaptive response is analytical and multi-faceted, addressing the root cause (sourcing) and its effects (cost and pricing) systemically."
        },
        {
          "id": "international-business-601-l06-q3",
          "text": "What is the primary purpose of a decision memo's 'Risks and Mitigations' section in a case analysis?",
          "skillId": "international-business-601-skill-decision-memo",
          "options": [
            {
              "id": "a",
              "text": "To argue that the recommended plan has no risks"
            },
            {
              "id": "b",
              "text": "To demonstrate foresight and build credibility by showing you have prepared for potential failures"
            },
            {
              "id": "c",
              "text": "To list every possible negative outcome, no matter how unlikely"
            },
            {
              "id": "d",
              "text": "To assign blame for future problems"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This section proves that the recommendation is not naive. It builds trust with stakeholders by acknowledging uncertainty and presenting a proactive plan to manage it."
        },
        {
          "id": "international-business-601-l06-q4",
          "text": "During a simulation, your team's project is failing to meet its targets. How should a 'control gate' be used to manage the situation?",
          "skillId": "international-business-601-skill-adaptive-response",
          "options": [
            {
              "id": "a",
              "text": "To automatically cancel the project without review"
            },
            {
              "id": "b",
              "text": "To trigger a formal review against pre-defined criteria to decide whether to pivot, remediate, or terminate the project"
            },
            {
              "id": "c",
              "text": "To hide the poor performance data until the next reporting cycle"
            },
            {
              "id": "d",
              "text": "To allocate more resources to the project without analyzing the root cause of failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A control gate is not an automated stop, but a structured decision point to force a deliberate, evidence-based choice about a project's future."
        }
      ]
    },
    {
      "id": "international-business-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "international-business-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A stakeholder map for a fictional energy company, showing the interests and influence of different groups (investors, employees, local community, government, NGOs) regarding a new project."
        }
      ],
      "chunks": [
        {
          "id": "international-business-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Analyzing the distribution of impacts from business operations across various stakeholder groups. This involves mapping the allocation of benefits (e.g., jobs, investment) and burdens (e.g., environmental impact, market disruption), including second-order and long-term effects."
        },
        {
          "id": "international-business-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Designing robust accountability systems for global operations. Key components include auditable decision traceability, formal review processes for stakeholders, and clear obligations for remediation when negative impacts occur."
        },
        {
          "id": "international-business-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "A capstone checklist for responsible leadership. This framework integrates ethical guidelines, policy compliance, and operational resilience into a practical tool for evaluating high-level strategic decisions."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a business decision are allocated across different populations and timescales."
        },
        {
          "id": "international-business-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record connecting a decision to the evidence, rationale, and ownership behind it."
        },
        {
          "id": "international-business-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance objectives with accountability and ethical duties."
        }
      ]
    },
    {
      "id": "international-business-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "international-business-601-l08-a1",
          "type": "image",
          "title": "Pyramid Principle Slide",
          "content": "An example slide from a defense presentation, using the 'Pyramid Principle' to state the main recommendation first, followed by supporting arguments and data."
        }
      ],
      "chunks": [
        {
          "id": "international-business-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "A practical workshop on constructing a capstone defense brief. Learners will synthesize their analysis into a structured document that presents a central thesis, supporting evidence, acknowledged limitations and uncertainties, and proposed remediation plans."
        },
        {
          "id": "international-business-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "A simulated defense session where learners present their brief and respond to critical questioning from an expert panel. The rehearsal focuses on defending technical assumptions, justifying governance structures, and addressing diverse stakeholder concerns under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-business-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendations under adversarial cross-examination from a simulated panel of experts."
        }
      ]
    }
  ]
};
