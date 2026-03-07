import type { LearningModule } from "@/lib/modules/types";

export const operations_management_601_Module: LearningModule = {
  "id": "operations-management-601",
  "title": "Operations Management Research and Leadership",
  "description": "Post-401 specialization in Operations Management, focused on business systems diagnostics, business operations and execution design, business impact and tradeoff analysis, and business governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
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
    "Design robust systems for business operations and execution design with measurable control gates",
    "Evaluate interventions in business impact and tradeoff analysis with research-grade rigor",
    "Operationalize business governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "operations-management-601-l01",
      "title": "Advanced Foundations in Operations Management",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "operations-management-601-l01-a1",
          "type": "image",
          "title": "System Boundaries",
          "content": "A flowchart of a business process with clearly defined scope boundaries, inputs, and outputs, highlighting dependencies on other systems."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces the advanced concept of scope boundaries in Operations Management. Defining these boundaries is the first step in diagnosing complex business systems. We will learn to design operations with clear perimeters to improve execution, ensuring all components work together harmoniously and enabling targeted analysis for performance improvement."
        },
        {
          "id": "operations-management-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Here, you will learn to map causal pathways—the chain of events and dependencies that lead to specific outcomes. We will also explore how to model uncertainty ranges for key variables. This foundational knowledge is crucial for planning effective interventions, allowing you to anticipate challenges and develop robust strategies."
        },
        {
          "id": "operations-management-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "In this recap, we emphasize a core principle: all analytical claims must be linked to measurable indicators. We will establish methods for setting confidence bounds and implementing review checkpoints to ensure our findings are reliable and valid, maintaining a high standard of evidence in all operational analysis."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-601-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "The discipline of analyzing a business system by defining explicit assumptions, measurable constraints, and performance indicators."
        },
        {
          "id": "operations-management-601-l01-f2",
          "front": "Execution Design",
          "back": "The architecture of an operational plan, including roles, checkpoints, and contingencies, that determines its reliability under stress."
        },
        {
          "id": "operations-management-601-l01-f3",
          "front": "Tradeoff Analysis",
          "back": "A structured evaluation method for identifying the true gains and hidden costs of a decision by comparing it against alternatives."
        }
      ]
    },
    {
      "id": "operations-management-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "operations-management-601-l02-a1",
          "type": "practice",
          "title": "Workflow Stress Test",
          "content": "An animated diagram of a workflow being 'stress-tested,' showing bottlenecks and failure points appearing in red under high load."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this interactive lab, you will design a specialized workflow for a given business scenario. After designing the process, you will conduct a stress test to evaluate its performance under challenging conditions. This hands-on experience will teach you how to build resilient systems that can withstand operational pressures."
        },
        {
          "id": "operations-management-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap covers the importance of integrating a control gate architecture into any workflow. This includes establishing clear checkpoints, defining criteria for rolling back decisions, and setting thresholds for escalating issues. By embedding these controls, we ensure workflows are both efficient and robust."
        }
      ],
      "interactiveActivities": [
        {
          "id": "operations-management-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their primary reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commit Gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback Trigger",
              "right": "Limits the blast radius of an adverse outcome"
            },
            {
              "left": "Baseline Dashboard",
              "right": "Supports defensible impact attribution"
            },
            {
              "left": "Retrospective Loop",
              "right": "Improves next-cycle decision quality"
            }
          ]
        }
      ]
    },
    {
      "id": "operations-management-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "operations-management-601-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review your notes on scope, causality, and control gates before you begin this assessment."
        }
      ],
      "questions": [
        {
          "id": "operations-management-601-l03-q1",
          "text": "Which practice most improves the decision quality of business systems diagnostics?",
          "skillId": "operations-management-601-skill-core",
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
          "id": "operations-management-601-l03-q2",
          "text": "At an advanced level, strong execution design requires:",
          "skillId": "operations-management-601-skill-execution",
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
          "id": "operations-management-601-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "operations-management-601-skill-eval",
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
              "text": "Changing success criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "operations-management-601-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "operations-management-601-skill-governance",
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
      "id": "operations-management-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "operations-management-601-l04-a1",
          "type": "image",
          "title": "Decision Tree",
          "content": "A decision tree diagram illustrating multiple strategic pathways and their potential outcomes for a sample case, with risks highlighted."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "In this lesson, we will deconstruct a complex case study that highlights the competing constraints common in business systems. We will analyze the cascading impacts of key decisions and the tradeoffs that leaders must navigate. Understanding these dynamics is essential for making informed strategic choices."
        },
        {
          "id": "operations-management-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "You will now practice comparing different strategic options from the case study. This comparative analysis will focus on key dimensions such as safety, reliability, cost, and governance, helping you understand the complexities of multi-objective decision-making."
        },
        {
          "id": "operations-management-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "We conclude by outlining the essential components of a professional decision memo. This pattern helps you structure a defensible recommendation by requiring you to state the underlying assumptions, present supporting evidence, define risk controls, and prepare fallback plans. This ensures all facets of a decision are carefully considered and documented."
        }
      ]
    },
    {
      "id": "operations-management-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "operations-management-601-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "A screenshot of the simulation interface, showing a dashboard with real-time performance metrics (KPIs) and risk alerts."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Management",
          "content": "In this interactive clinic, you will act as an operations manager navigating a live scenario. You will be responsible for tuning system controls to balance performance metrics with governance constraints, making sound decisions in real-time as conditions change."
        },
        {
          "id": "operations-management-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing adaptive responses in dynamic environments. Effective responses require updating control gates based on new information while maintaining full traceability and accountability for every decision, preserving the integrity of the process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "operations-management-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure operations scenario by tuning controls under uncertainty and responding to unexpected events."
        }
      ]
    },
    {
      "id": "operations-management-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "operations-management-601-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Recall the case study and simulation. Focus on how you evaluated tradeoffs and adapted your strategy under pressure."
        }
      ],
      "questions": [
        {
          "id": "operations-management-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "operations-management-601-skill-case1",
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
          "explanation": "Defensible recommendations begin with an explicit problem frame, including baselines, constraints, and measurable targets."
        },
        {
          "id": "operations-management-601-l06-q2",
          "text": "During a live simulation, an unexpected external event causes a key metric to drop. What is the most resilient response?",
          "skillId": "operations-management-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Immediately commit to a single, large-scale correction"
            },
            {
              "id": "b",
              "text": "Wait for the system to self-correct without intervention"
            },
            {
              "id": "c",
              "text": "Analyze the event, consider activating a pre-planned fallback, and communicate the change"
            },
            {
              "id": "d",
              "text": "Change the success metric to make the current performance look better"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Resilience in simulations and real-world operations depends on analysis, use of contingency plans, and clear communication."
        },
        {
          "id": "operations-management-601-l06-q3",
          "text": "When evaluating tradeoffs between cost and safety in a case study, which method is most rigorous?",
          "skillId": "operations-management-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Choosing the lowest cost option regardless of safety data"
            },
            {
              "id": "b",
              "text": "Quantifying the impact of each option on both metrics and analyzing the marginal benefit of increased spending on safety"
            },
            {
              "id": "c",
              "text": "Relying solely on anecdotal evidence about safety"
            },
            {
              "id": "d",
              "text": "Prioritizing the option with the most persuasive narrative"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous tradeoff analysis requires quantifying impacts on all critical dimensions to make an informed, evidence-based decision."
        },
        {
          "id": "operations-management-601-l06-q4",
          "text": "The 'Decision Memo Pattern' is designed to ensure that recommendations are:",
          "skillId": "operations-management-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "As brief as possible, omitting risks and assumptions"
            },
            {
              "id": "b",
              "text": "Structured, evidence-based, and accountable"
            },
            {
              "id": "c",
              "text": "Final and cannot be revisited"
            },
            {
              "id": "d",
              "text": "Focused only on the best-case scenario"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The pattern enforces a structure that includes evidence, assumptions, risks, and fallbacks, promoting accountability."
        }
      ]
    },
    {
      "id": "operations-management-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "operations-management-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "An infographic mapping the ripple effects of a business decision on various stakeholder groups (employees, customers, community, environment)."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson explores how to map the distribution of impacts across various stakeholders. This includes identifying the benefits, burdens, and any delayed or indirect effects that decisions may have on different groups. Understanding these dynamics is crucial for responsible and ethical decision-making."
        },
        {
          "id": "operations-management-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we focus on designing accountability into decision-making processes. This architecture includes ensuring traceability for every decision, establishing rights for review, and defining clear obligations for remediation. Integrating these elements fosters a culture of responsibility and transparency."
        },
        {
          "id": "operations-management-601-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "This final checklist is a practical tool that connects operational outcomes with ethical responsibilities, policy adherence, and adaptability. It ensures that we are not only meeting performance goals but also doing so in a way that is accountable, sustainable, and socially responsible."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (both positive and negative) are allocated across different populations and over time."
        },
        {
          "id": "operations-management-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record linking a decision to its evidence, ownership, rationale, and subsequent outcomes."
        },
        {
          "id": "operations-management-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability, ethical considerations, and stakeholder impact."
        }
      ]
    },
    {
      "id": "operations-management-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "operations-management-601-l08-a1",
          "type": "practice",
          "title": "Defense Brief Template",
          "content": "A template for a defense brief, with clearly marked sections for claims, evidence, uncertainty analysis, and remediation plans."
        }
      ],
      "chunks": [
        {
          "id": "operations-management-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this capstone activity, you will assemble a comprehensive defense brief for a complex operational recommendation. This brief must integrate your core claims, the evidence backing them, the boundaries of uncertainty, and clear pathways for remediation if risks materialize."
        },
        {
          "id": "operations-management-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This final practice session prepares you for the defense simulation. You will rehearse responses to critiques from multiple perspectives, including technical, governance, and stakeholder experts. This rehearsal is crucial for building confidence and communicating effectively under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "operations-management-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendation under adversarial cross-examination from a simulated panel of experts."
        }
      ]
    }
  ]
};
