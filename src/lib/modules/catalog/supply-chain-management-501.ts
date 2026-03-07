import type { LearningModule } from "@/lib/modules/types";

export const supply_chain_management_501_Module: LearningModule = {
  "id": "supply-chain-management-501",
  "title": "Supply Chain Management Specialization Studio",
  "description": "A post-401 specialization in Supply Chain Management focusing on business systems diagnostics, operations design, tradeoff analysis, and governance. This module uses advanced casework, simulation, and defense-based checkpoints to build expert-level skills.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "supply-chain-management",
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
      "id": "supply-chain-management-501-l01",
      "title": "Supply Chain Management Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l01-a1",
          "type": "image",
          "title": "System Boundary Diagram",
          "content": "A visual representation of a supply chain system, highlighting internal components, external dependencies, and key interfaces to define the scope of analysis."
        }
      ],
      "chunks": [
        {
          "id": "supply-chain-management-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Defining clear scope and boundaries is the first step in diagnosing any complex business system. This process involves identifying what is inside your system of analysis versus what is external, which is crucial for focusing your efforts. We'll learn a step-by-step approach to map these boundaries, making your assumptions explicit and ensuring your analysis is built on a solid foundation."
        },
        {
          "id": "supply-chain-management-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Before intervening in a system, we must understand its dynamics. This involves mapping causal pathways—how one action leads to another—and identifying the inherent uncertainties. By modeling these relationships and their potential variability, we can better predict the outcomes of our decisions and prepare for a range of possibilities."
        },
        {
          "id": "supply-chain-management-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "A key principle in advanced analysis is that every claim must be backed by measurable evidence. In this recap, we'll solidify the concept of setting 'evidence thresholds' and confidence bounds. This practice ensures our conclusions are robust, verifiable, and can withstand critical review."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-501-l01-f1",
          "front": "Business systems diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "supply-chain-management-501-l01-f2",
          "front": "Business operations and execution design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "supply-chain-management-501-l01-f3",
          "front": "Business impact and tradeoff analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "supply-chain-management-501-l02",
      "title": "Supply Chain Management Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "An interactive canvas to drag-and-drop components, design a custom workflow, and define control gates for a given supply chain challenge."
        }
      ],
      "chunks": [
        {
          "id": "supply-chain-management-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "Theory meets practice in this interactive lab. You will design a specialized workflow for a specific supply chain task, such as inventory management. Then, you'll put it to the test by running simulations of adverse scenarios, like a supplier delay or a demand spike, to identify weak points and improve its resilience."
        },
        {
          "id": "supply-chain-management-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We'll recap the critical role of 'control gates' in any robust workflow. These are predefined checkpoints designed to monitor progress, trigger rollbacks if things go wrong, and escalate issues based on set thresholds. A well-designed control gate architecture is the difference between a fragile process and a resilient one."
        }
      ],
      "interactiveActivities": [
        {
          "id": "supply-chain-management-501-l02-act1",
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
      "id": "supply-chain-management-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review",
          "content": "Review the definitions of business systems diagnostics, execution design, and tradeoff analysis before you begin."
        }
      ],
      "questions": [
        {
          "id": "supply-chain-management-501-l03-q1",
          "text": "Which practice most improves business systems diagnostics decision quality?",
          "skillId": "supply-chain-management-501-skill-core",
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
          "id": "supply-chain-management-501-l03-q2",
          "text": "At level 501, strong execution for business operations and execution design requires:",
          "skillId": "supply-chain-management-501-skill-execution",
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
          "id": "supply-chain-management-501-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "supply-chain-management-501-skill-eval",
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
          "id": "supply-chain-management-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "supply-chain-management-501-skill-governance",
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
      "id": "supply-chain-management-501-l04",
      "title": "Supply Chain Management Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Example",
          "content": "A visual matrix comparing three strategic options across dimensions like cost, speed, reliability, and environmental impact, with scores and justifications."
        }
      ],
      "chunks": [
        {
          "id": "supply-chain-management-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "We will now apply our foundational knowledge to a complex case study. This scenario is designed to mirror real-world challenges, featuring competing constraints such as cost pressures versus sustainability goals. We'll dissect the case to understand the intricate dynamics at play."
        },
        {
          "id": "supply-chain-management-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice segment, you will frame the central tradeoffs presented in the case. This involves systematically comparing the available strategic options across key dimensions like safety, reliability, cost, and governance. The goal is to learn how to articulate and weigh the pros and cons of each potential decision."
        },
        {
          "id": "supply-chain-management-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "A powerful tool for communicating complex decisions is the 'Decision Memo'. We'll recap a structured pattern for writing one, ensuring every recommendation is presented with its underlying assumptions, supporting evidence, identified risks, and contingency plans. This structure promotes clarity and defensibility."
        }
      ]
    },
    {
      "id": "supply-chain-management-501-l05",
      "title": "Supply Chain Management Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l05-a1",
          "type": "practice",
          "title": "Simulation Control Dashboard",
          "content": "An interactive dashboard mockup showing key performance indicators (KPIs) and control levers (e.g., inventory levels, logistics budget) for the upcoming simulation."
        }
      ],
      "chunks": [
        {
          "id": "supply-chain-management-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "This interactive clinic puts you in the driver's seat. You will manage a live supply chain simulation, making real-time decisions to balance performance metrics like delivery speed with governance constraints like budget limits. This hands-on experience is designed to build your intuition for managing dynamic, high-pressure situations."
        },
        {
          "id": "supply-chain-management-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "We'll recap the principles of 'Adaptive Response Design'. Effective leadership in a crisis involves more than just reacting; it means updating your operational rules and control gates based on new information. We'll emphasize how to make these adjustments while maintaining full traceability and accountability for every decision."
        }
      ],
      "interactiveActivities": [
        {
          "id": "supply-chain-management-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure supply chain management scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "supply-chain-management-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l06-a1",
          "type": "practice",
          "title": "Case Study Synopsis",
          "content": "A one-page summary of the case study from Lesson 4 to refresh your memory on the key constraints and tradeoffs."
        }
      ],
      "questions": [
        {
          "id": "supply-chain-management-501-l06-q1",
          "text": "When analyzing a complex supply chain case study, what is the most effective first step?",
          "skillId": "supply-chain-management-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Immediately choose a solution"
            },
            {
              "id": "b",
              "text": "Identify the core problem and map the competing constraints and stakeholders"
            },
            {
              "id": "c",
              "text": "Focus only on the financial data"
            },
            {
              "id": "d",
              "text": "Wait for a perfect dataset"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective case analysis starts with a thorough diagnosis of the problem, constraints, and stakeholder interests before jumping to solutions."
        },
        {
          "id": "supply-chain-management-501-l06-q2",
          "text": "A strong decision memo, as covered in the case analysis, must contain which set of elements to be defensible?",
          "skillId": "supply-chain-management-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Only the final recommendation"
            },
            {
              "id": "b",
              "text": "A compelling story without data"
            },
            {
              "id": "c",
              "text": "The recommendation, key assumptions, supporting evidence, and risk mitigation plans"
            },
            {
              "id": "d",
              "text": "A list of people who agree with the decision"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A defensible decision memo provides a complete, transparent rationale, including assumptions, evidence, and contingency planning."
        },
        {
          "id": "supply-chain-management-501-l06-q3",
          "text": "In the simulation clinic, what is the primary challenge when managing live scenario controls?",
          "skillId": "supply-chain-management-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Following a single, predefined plan without deviation"
            },
            {
              "id": "b",
              "text": "Making real-time tradeoffs between conflicting goals like speed and cost under uncertainty"
            },
            {
              "id": "c",
              "text": "Optimizing for one metric at the expense of all others"
            },
            {
              "id": "d",
              "text": "Pausing the simulation to wait for more information"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations test a leader's ability to dynamically balance competing objectives as conditions change."
        },
        {
          "id": "supply-chain-management-501-l06-q4",
          "text": "What does 'Adaptive Response Design' mean in the context of a supply chain simulation?",
          "skillId": "supply-chain-management-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Sticking to the original plan no matter what"
            },
            {
              "id": "b",
              "text": "Making random changes to see what happens"
            },
            {
              "id": "c",
              "text": "Updating operational controls and decision rules based on real-time feedback, while maintaining accountability"
            },
            {
              "id": "d",
              "text": "Blaming external factors for poor outcomes"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Adaptive response is about learning and adjusting systematically based on performance data, with clear traceability."
        },
        {
          "id": "supply-chain-management-501-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Business?",
          "skillId": "supply-chain-management-501-skill-advanced-5",
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
          "id": "supply-chain-management-501-l06-q6",
          "text": "In high-stakes Supply Chain Management Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "supply-chain-management-501-skill-advanced-6",
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
        }
      ]
    },
    {
      "id": "supply-chain-management-501-l07",
      "title": "Supply Chain Management Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram illustrating how a major logistics decision (e.g., moving a warehouse) affects various stakeholders, including employees, customers, local communities, and the environment."
        }
      ],
      "chunks": [
        {
          "id": "supply-chain-management-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Decisions in a supply chain don't happen in a vacuum. In this lesson, we will learn to map the distribution of impacts—both positive and negative—across all stakeholders. This includes analyzing the immediate benefits and burdens, as well as delayed or second-order effects, to foster a more equitable and responsible decision-making process."
        },
        {
          "id": "supply-chain-management-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "True accountability requires a deliberate structure. We will explore the components of an 'Accountability Architecture,' which includes systems for decision traceability, stakeholder rights for review, and clear obligations for remediation when things go wrong. This framework builds trust and ensures that power is exercised responsibly."
        },
        {
          "id": "supply-chain-management-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude by consolidating our learnings into a 'Responsible Leadership Checklist'. This practical tool helps leaders integrate key considerations—performance outcomes, ethical duties, policy compliance, and system resilience—into their final decision-making process, ensuring a holistic and conscientious approach."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-501-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "supply-chain-management-501-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "supply-chain-management-501-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "supply-chain-management-501-l08",
      "title": "Supply Chain Management Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "supply-chain-management-501-l08-a1",
          "type": "practice",
          "title": "Defense Brief Template",
          "content": "A structured document template for assembling the capstone defense, with sections for the core claim, evidence summary, uncertainty analysis, and remediation plan."
        }
      ],
      "chunks": [
        {
          "id": "supply-chain-management-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this final lab, you will synthesize everything you've learned by assembling a capstone defense brief. This involves formulating a clear, evidence-backed recommendation for a complex supply chain problem, explicitly stating your uncertainty bounds, and proposing a robust remediation pathway. This is the core artifact you will defend."
        },
        {
          "id": "supply-chain-management-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Preparation is key to a successful defense. You will participate in a rehearsal where you present your brief and field critiques from a simulated expert panel, representing technical, governance, and stakeholder perspectives. This exercise is designed to sharpen your arguments and build your confidence for the final defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "supply-chain-management-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
