import type { LearningModule } from "@/lib/modules/types";

export const quantum_computing_601_Module: LearningModule = {
  "id": "quantum-computing-601",
  "title": "Quantum Computing Research and Leadership",
  "description": "A post-401 specialization in Quantum Computing. This module covers advanced quantum algorithm design, fault-tolerant architecture, hybrid quantum-classical workflows, and strategic governance. Learning is driven by advanced casework, high-fidelity simulations, and defense-based capstone projects.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "quantum-computing",
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
    "Apply advanced methods for quantum algorithm design and complexity reasoning in high-constraint environments",
    "Design robust systems for error mitigation and fault-tolerant architecture with measurable control gates",
    "Evaluate interventions in hybrid quantum-classical optimization workflows with research-grade rigor",
    "Operationalize deployment governance and strategic risk management with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "quantum-computing-601-l01",
      "title": "Advanced Quantum Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "quantum-computing-601-l01-a1",
          "type": "diagram",
          "title": "Key Concepts Map",
          "content": "A visual diagram connecting quantum algorithm design, error mitigation, and fault-tolerant architectures."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "We will dive into the advanced boundaries of Quantum Computing, focusing on the design of quantum algorithms—specialized instructions for solving complex problems. Understanding algorithm complexity is essential to grasp how quantum computers operate differently from classical ones. We will also explore error mitigation techniques and the design of fault-tolerant architectures, which are crucial for ensuring quantum computers can perform reliably. This foundational knowledge is vital for making strategic decisions and highlighting the tradeoffs, assumptions, and verification methods required in the field."
        },
        {
          "id": "quantum-computing-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "In this section, we will map causal pathways to understand how different factors influence one another in a quantum system. By exploring uncertainty ranges and system dependencies, we can identify the limits of our knowledge and see how various components interact. This foundational understanding is essential for planning effective interventions and making robust decisions during practice and assessment, forcing us to make assumptions and tradeoffs explicit."
        },
        {
          "id": "quantum-computing-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap emphasizes that all claims must be supported by measurable indicators and confidence bounds to ensure the reliability of our results. We will establish review checkpoints to continually assess and validate findings, maintaining the integrity of our research. A structured approach involves: (1) defining the goal, (2) identifying supporting evidence, (3) explaining how evidence shapes the conclusion, and (4) verifying the final answer against original goals and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-601-l01-f1",
          "front": "Quantum Algorithm Design",
          "back": "The practice of creating quantum instruction sets, requiring explicit assumptions about constraints and complexity."
        },
        {
          "id": "quantum-computing-601-l01-f2",
          "front": "Fault-Tolerant Architecture",
          "back": "A system design that ensures computational reliability and manages errors, especially under stress conditions."
        },
        {
          "id": "quantum-computing-601-l01-f3",
          "front": "Hybrid Optimization Workflows",
          "back": "A structured evaluation discipline for identifying the true performance gains and hidden costs of combining quantum and classical systems."
        }
      ]
    },
    {
      "id": "quantum-computing-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "quantum-computing-601-l02-a1",
          "type": "template",
          "title": "Workflow Design Canvas",
          "content": "A structured template for designing and stress-testing a quantum workflow, including sections for controls and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows for quantum computing tasks. You will then conduct stress tests on these workflows to evaluate their performance under challenging or adverse scenarios. This hands-on experience is vital for understanding how to create robust and resilient systems for real-world applications."
        },
        {
          "id": "quantum-computing-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap focuses on integrating essential governance elements into workflows. These include checkpoints to monitor progress, rollback criteria to revert to previous states if needed, and threshold-based escalation to ensure appropriate responses when limits are breached. These components are crucial for maintaining control and ensuring the reliability of quantum processes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-601-l02-act1",
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
      "id": "quantum-computing-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "quantum-computing-601-l03-a1",
          "type": "cheatsheet",
          "title": "Key Concepts Review",
          "content": "A one-page summary of core concepts from lessons 1 and 2, including definitions and key formulas."
        }
      ],
      "questions": [
        {
          "id": "quantum-computing-601-l03-q1",
          "text": "Which practice most improves the decision quality of quantum algorithm design?",
          "skillId": "quantum-computing-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators upfront"
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit before starting."
        },
        {
          "id": "quantum-computing-601-l03-q2",
          "text": "At a 601-level, strong execution for fault-tolerant architecture requires:",
          "skillId": "quantum-computing-601-skill-execution",
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
          "explanation": "Reliable advanced execution needs ownership clarity, regular checkpoints, and threshold-driven governance."
        },
        {
          "id": "quantum-computing-601-l03-q3",
          "text": "A defensible approach to evaluating hybrid quantum-classical optimization workflows includes:",
          "skillId": "quantum-computing-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after seeing the outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended side-effects, and disclosure of uncertainty."
        },
        {
          "id": "quantum-computing-601-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "quantum-computing-601-skill-governance",
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
              "text": "Targets without ownership or an escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between strategic intent, measurable controls, and corrective action."
        },
        {
          "id": "quantum-computing-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Computer Science?",
          "skillId": "quantum-computing-601-skill-advanced-5",
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
          "explanation": "Defensible comparisons require shared metrics, accounting for side-effects, and disclosing uncertainty."
        },
        {
          "id": "quantum-computing-601-l03-q6",
          "text": "In high-stakes Quantum Computing execution, which communication protocol is strongest?",
          "skillId": "quantum-computing-601-skill-advanced-6",
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
          "explanation": "High-stakes communication must be transparent about assumptions, confidence levels, and review checkpoints."
        },
        {
          "id": "quantum-computing-601-l03-q7",
          "text": "A mature remediation loop in advanced Computer Science should prioritize:",
          "skillId": "quantum-computing-601-skill-advanced-7",
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
          "explanation": "Mature remediation connects identifying root causes to redesigning controls and verifying the fix works."
        },
        {
          "id": "quantum-computing-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Quantum Computing?",
          "skillId": "quantum-computing-601-skill-advanced-8",
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
      "id": "quantum-computing-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "quantum-computing-601-l04-a1",
          "type": "document",
          "title": "Case Study Dossier",
          "content": "A detailed document outlining the case scenario, stakeholder profiles, and key data for analysis."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "In this lesson, we will frame a case study that highlights the competing constraints in quantum algorithm design and hybrid optimization workflows. We will delve into complexity reasoning to understand how to balance various requirements effectively. Mastering this is essential for making informed, strategic decisions in the development of quantum technologies."
        },
        {
          "id": "quantum-computing-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice session, you will compare different strategic options based on multiple dimensions, including safety, reliability, cost, equity, and governance. This comparative analysis will help you understand and articulate the complex trade-offs involved in high-stakes decision-making, equipping you to make more informed choices in your own projects."
        },
        {
          "id": "quantum-computing-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "This recap outlines a structured pattern for presenting recommendations. Each recommendation must detail the underlying assumptions, supporting evidence, risk controls, and fallback plans. This structured approach ensures that your proposals are well-founded, transparent, and actionable for leadership and stakeholders."
        }
      ]
    },
    {
      "id": "quantum-computing-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "quantum-computing-601-l05-a1",
          "type": "guide",
          "title": "Simulation Interface Guide",
          "content": "An interactive tutorial on how to use the simulation's control panel, read dashboards, and execute decisions."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, you will act as an operator managing a live quantum computing scenario. Your task is to balance performance objectives with governance constraints, ensuring your actions align with established guidelines. This experience provides valuable insights into the complexities of managing high-stakes technology in real-time."
        },
        {
          "id": "quantum-computing-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap discusses the importance of designing effective responses that can adaptively update system controls during a live scenario. It is crucial that these updates maintain full traceability and accountability, ensuring all changes are documented and auditable. This practice is essential for maintaining transparency and trust in complex operations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure quantum computing deployment scenario and tune system controls under uncertainty and unexpected events."
        }
      ]
    },
    {
      "id": "quantum-computing-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "quantum-computing-601-l06-a1",
          "type": "document",
          "title": "Case and Simulation Debrief",
          "content": "A summary of key decision points from the case study and simulation, highlighting best practices and common pitfalls."
        }
      ],
      "questions": [
        {
          "id": "quantum-computing-601-l06-q1",
          "text": "When framing an advanced quantum case study, what is the most critical first step?",
          "skillId": "quantum-computing-601-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Immediately selecting a solution"
            },
            {
              "id": "b",
              "text": "Defining the scope, stakeholders, and competing constraints"
            },
            {
              "id": "c",
              "text": "Focusing only on the technical aspects"
            },
            {
              "id": "d",
              "text": "Gathering as much data as possible without a clear goal"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong case analysis begins with clearly defining the problem's boundaries, who is affected, and what goals are in conflict."
        },
        {
          "id": "quantum-computing-601-l06-q2",
          "text": "In the 'Tradeoff Framing' practice, why is it important to compare options across multiple dimensions like safety, cost, and reliability?",
          "skillId": "quantum-computing-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is universally superior"
            },
            {
              "id": "b",
              "text": "To make the decision-making process more complex"
            },
            {
              "id": "c",
              "text": "To make tradeoffs explicit and justify a balanced decision"
            },
            {
              "id": "d",
              "text": "To satisfy a bureaucratic requirement"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Multi-dimensional analysis forces a clear and defensible discussion about which tradeoffs are acceptable to achieve a strategic goal."
        },
        {
          "id": "quantum-computing-601-l06-q3",
          "text": "What is the primary purpose of the 'Decision Memo Pattern' taught in the case analysis lesson?",
          "skillId": "quantum-computing-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "To hide the assumptions behind a recommendation"
            },
            {
              "id": "b",
              "text": "To provide a long narrative history of the project"
            },
            {
              "id": "c",
              "text": "To structure a recommendation with explicit assumptions, evidence, risks, and fallbacks"
            },
            {
              "id": "d",
              "text": "To create a formal record for legal purposes only"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The pattern is a tool for clear, transparent, and defensible communication of a strategic recommendation."
        },
        {
          "id": "quantum-computing-601-l06-q4",
          "text": "In the 'Live Scenario Controls' simulation, what is the core tension the operator must manage?",
          "skillId": "quantum-computing-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Maximizing performance at all costs"
            },
            {
              "id": "b",
              "text": "Balancing the achievement of performance targets with adherence to governance constraints"
            },
            {
              "id": "c",
              "text": "Strictly following the pre-approved plan, regardless of changing conditions"
            },
            {
              "id": "d",
              "text": "Communicating with as few stakeholders as possible to maintain speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The simulation tests the ability to make decisions that are both effective (performance) and responsible (governance)."
        },
        {
          "id": "quantum-computing-601-l06-q5",
          "text": "What does 'Adaptive Response Design' require when updating controls during a simulation?",
          "skillId": "quantum-computing-601-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Making changes quickly without documentation"
            },
            {
              "id": "b",
              "text": "Ensuring all changes are traceable and accountable"
            },
            {
              "id": "c",
              "text": "Getting unanimous approval before any adjustment"
            },
            {
              "id": "d",
              "text": "Resetting the simulation to the beginning after each change"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective adaptive response demands that even rapid changes are made within a framework of accountability and can be audited later."
        },
        {
          "id": "quantum-computing-601-l06-q6",
          "text": "During a simulation of a quantum system failure, what is the most critical immediate action in an adaptive response?",
          "skillId": "quantum-computing-601-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Conducting a full root-cause analysis"
            },
            {
              "id": "b",
              "text": "Isolating the failure to limit its impact and activating fallback plans"
            },
            {
              "id": "c",
              "text": "Writing a report for senior leadership"
            },
            {
              "id": "d",
              "text": "Waiting for the system to self-correct"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The first priority in a crisis is containment and stabilization, which involves isolating the problem and using pre-planned contingencies."
        },
        {
          "id": "quantum-computing-601-l06-q7",
          "text": "When presenting a case analysis, what is the most effective way to communicate complex tradeoffs to a leadership audience?",
          "skillId": "quantum-computing-601-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "A detailed spreadsheet with hundreds of rows of raw data"
            },
            {
              "id": "b",
              "text": "A visual scorecard comparing options against key criteria like cost, performance, and risk"
            },
            {
              "id": "c",
              "text": "A long, text-only document explaining every technical detail"
            },
            {
              "id": "d",
              "text": "Focusing only on the benefits of the recommended option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Visual scorecards and dashboards are highly effective tools for communicating complex, multi-dimensional comparisons to decision-makers."
        },
        {
          "id": "quantum-computing-601-l06-q8",
          "text": "What is the primary learning objective of the 'Adverse-Condition Decision Run' simulation?",
          "skillId": "quantum-computing-601-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "To memorize technical specifications of a quantum computer"
            },
            {
              "id": "b",
              "text": "To test a leader's ability to make sound judgments under pressure and with incomplete information"
            },
            {
              "id": "c",
              "text": "To practice public speaking skills"
            },
            {
              "id": "d",
              "text": "To prove that a single, static plan is always best"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The simulation is designed to build and test decision-making resilience in realistic, high-pressure environments characterized by uncertainty."
        }
      ]
    },
    {
      "id": "quantum-computing-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "quantum-computing-601-l07-a1",
          "type": "template",
          "title": "Stakeholder Impact Map",
          "content": "A worksheet to map the distribution of benefits, burdens, and delayed effects across different stakeholder groups."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to map the distribution of impacts from a quantum computing project across various stakeholders. This includes identifying the benefits, burdens, and delayed effects that different groups may experience. Understanding these dynamics is essential for equitable and responsible decision-making."
        },
        {
          "id": "quantum-computing-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the architecture of accountability in decision-making. We will cover how to ensure traceability for key decisions, establish rights for independent review, and define clear obligations for remediation when things go wrong. Integrating these elements is vital for fostering a culture of responsibility and transparency."
        },
        {
          "id": "quantum-computing-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "At the end of the lesson, we will provide a comprehensive checklist for responsible leadership. This tool connects strategic outcomes with ethical considerations, ensures compliance with relevant policies, and promotes resilience in decision-making. It serves as a practical guide for leading quantum computing initiatives responsibly."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (both positive and negative) are allocated across different populations and over various timescales."
        },
        {
          "id": "quantum-computing-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable and transparent record linking a decision to its evidence, ownership, and underlying rationale."
        },
        {
          "id": "quantum-computing-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that systematically balances performance goals with accountability and ethical considerations."
        }
      ]
    },
    {
      "id": "quantum-computing-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "quantum-computing-601-l08-a1",
          "type": "template",
          "title": "Defense Briefing Template",
          "content": "A structured document for assembling claims, evidence, uncertainty bounds, and remediation pathways for the capstone defense."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, you will collaborate to create a detailed defense brief for your capstone recommendation. This brief must include well-supported claims, relevant evidence, a clear statement of uncertainty bounds, and proposed pathways for remediation. This exercise develops the critical thinking and communication skills essential for presenting complex ideas."
        },
        {
          "id": "quantum-computing-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this rehearsal, you will practice responding to a variety of critiques from a simulated expert panel. These critiques will cover technical feasibility, governance risks, and stakeholder concerns. This preparation is crucial for building confidence and ensuring you can effectively communicate your ideas and defend your position under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendation under adversarial cross-examination from a panel of simulated technical, governance, and business experts."
        }
      ]
    }
  ]
};
