import type { LearningModule } from "@/lib/modules/types";

export const hvac_501_Module: LearningModule = {
  "id": "hvac-501",
  "title": "HVAC Specialization Studio",
  "description": "Post-401 specialization in HVAC, focused on systems diagnostics, operations and execution design, impact and tradeoff analysis, and governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "HVAC",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "hvac",
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
    "Apply advanced methods for HVAC systems diagnostics in high-constraint environments.",
    "Design robust systems for HVAC operations and execution with measurable control gates.",
    "Evaluate interventions and tradeoffs in HVAC systems with research-grade rigor.",
    "Operationalize HVAC governance and leadership with accountable escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "hvac-501-l01",
      "title": "HVAC Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "hvac-501-l01-a1",
          "type": "downloadable",
          "title": "Diagnostic Framework",
          "content": "A structured framework for diagnosing complex HVAC systems, emphasizing explicit assumptions and measurable evidence."
        }
      ],
      "visualPrompts": [
        {
          "type": "diagram",
          "description": "Schematic of a complex commercial HVAC system, highlighting potential points of failure and diagnostic sensor locations."
        },
        {
          "type": "animation",
          "description": "Animated causal loop diagram showing how a change in one variable (e.g., refrigerant pressure) affects system-wide performance."
        },
        {
          "type": "chart",
          "description": "Graph of a system performance metric over time, illustrating the concept of confidence bounds and acceptable operating ranges."
        }
      ],
      "chunks": [
        {
          "id": "hvac-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson explores the advanced boundaries of HVAC systems. We will focus on how to effectively diagnose system-level problems and design operational plans that ensure optimal, reliable performance. This foundation is essential for tackling more complex challenges."
        },
        {
          "id": "hvac-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learners will map causal pathways to understand how different factors influence one another within an HVAC system. We will also model uncertainty ranges and system dependencies, which are crucial for planning effective and resilient interventions."
        },
        {
          "id": "hvac-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "We will recap the importance of linking all claims to measurable indicators. This means every assertion must be backed by quantifiable evidence. We will also review how to establish confidence bounds and checkpoints to ensure conclusions are reliable and well-supported."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-501-l01-f1",
          "front": "HVAC Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "hvac-501-l01-f2",
          "front": "HVAC Operations and Execution Design",
          "back": "An execution architecture that determines system reliability under stress."
        },
        {
          "id": "hvac-501-l01-f3",
          "front": "HVAC Impact and Tradeoff Analysis",
          "back": "An evaluation discipline for identifying true gains and hidden costs of an intervention."
        }
      ]
    },
    {
      "id": "hvac-501-l02",
      "title": "HVAC Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "hvac-501-l02-a1",
          "type": "template",
          "title": "Workflow Design Canvas",
          "content": "A canvas for designing and stress-testing specialized HVAC workflows with built-in control gates."
        }
      ],
      "visualPrompts": [
        {
          "type": "interactive_diagram",
          "description": "A drag-and-drop interface for building a workflow, allowing users to place checkpoints, rollback triggers, and escalation paths."
        },
        {
          "type": "simulation",
          "description": "A simulated dashboard showing key performance indicators (KPIs) reacting in real-time to adverse scenarios."
        }
      ],
      "chunks": [
        {
          "id": "hvac-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows for HVAC system management. You will then stress-test these workflows by simulating adverse scenarios to evaluate their resilience. This hands-on experience is vital for preparing for real-world challenges."
        },
        {
          "id": "hvac-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will recap how robust workflows must include essential components such as checkpoints, rollback criteria, and threshold-based escalation. These elements are crucial for maintaining control and ensuring issues can be addressed promptly and effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-501-l02-act1",
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
      "id": "hvac-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "hvac-501-l03-a1",
          "type": "downloadable",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of core concepts from Lessons 1 and 2, including diagnostics, execution design, and control gates."
        }
      ],
      "questions": [
        {
          "id": "hvac-501-l03-q1",
          "text": "Which practice most improves HVAC systems diagnostics decision quality?",
          "skillId": "hvac-501-skill-core",
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
          "id": "hvac-501-l03-q2",
          "text": "At level 501, strong execution for HVAC operations and execution design requires:",
          "skillId": "hvac-501-skill-execution",
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
          "id": "hvac-501-l03-q3",
          "text": "A defensible approach to HVAC impact and tradeoff analysis includes:",
          "skillId": "hvac-501-skill-eval",
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
          "id": "hvac-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "hvac-501-skill-governance",
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
          "id": "hvac-501-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced HVAC?",
          "skillId": "hvac-501-skill-advanced-5",
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
          "id": "hvac-501-l03-q6",
          "text": "In high-stakes HVAC execution, which communication protocol is strongest?",
          "skillId": "hvac-501-skill-advanced-6",
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
          "id": "hvac-501-l03-q7",
          "text": "A mature remediation loop in advanced HVAC should prioritize:",
          "skillId": "hvac-501-skill-advanced-7",
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
          "id": "hvac-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in HVAC?",
          "skillId": "hvac-501-skill-advanced-8",
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
      "id": "hvac-501-l04",
      "title": "HVAC Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "hvac-501-l04-a1",
          "type": "downloadable",
          "title": "Case Study Dossier",
          "content": "A detailed brief of the case study, including stakeholder profiles, system constraints, and historical performance data."
        }
      ],
      "visualPrompts": [
        {
          "type": "infographic",
          "description": "An infographic outlining the key stakeholders in the case study, their primary motivations, and their constraints."
        },
        {
          "type": "chart",
          "description": "A spider chart or tradeoff matrix visually comparing three proposed solutions across dimensions like cost, safety, reliability, and public impact."
        },
        {
          "type": "template",
          "description": "A visual template of a structured decision memo, showing sections for Recommendation, Assumptions, Evidence, and Risks."
        }
      ],
      "chunks": [
        {
          "id": "hvac-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson frames a case study highlighting the competing constraints common in HVAC systems diagnostics. We will analyze the impact of various decisions and conduct tradeoff analyses to understand how different choices affect the overall system and its stakeholders."
        },
        {
          "id": "hvac-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Learners will compare different strategic options available in the case study. You will evaluate these options based on critical dimensions, including safety, reliability, cost, equity, and governance. This comprehensive approach reveals the broader implications of each choice."
        },
        {
          "id": "hvac-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We will recap the essential components of a professional decision memo. Each recommendation must include clear assumptions, supporting evidence, risk controls, and fallback plans. This structured approach enhances the clarity and defensibility of your decisions."
        }
      ]
    },
    {
      "id": "hvac-501-l05",
      "title": "HVAC Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "hvac-501-l05-a1",
          "type": "guide",
          "title": "Simulation Control Guide",
          "content": "A user guide for the simulation interface, explaining the available controls, performance dashboards, and scenario objectives."
        }
      ],
      "visualPrompts": [
        {
          "type": "interactive_dashboard",
          "description": "A dynamic dashboard for the simulation, featuring sliders to adjust inputs, real-time graphs for outputs, and alerts for constraint violations."
        },
        {
          "type": "animation",
          "description": "An animated flowchart showing how an adaptive response (e.g., triggering a fallback) alters the system state and brings metrics back into the safe zone."
        }
      ],
      "chunks": [
        {
          "id": "hvac-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, you will operate scenario controls while balancing performance and governance constraints. This experience will help you manage different aspects of HVAC systems effectively, ensuring you can respond to challenges while maintaining high standards."
        },
        {
          "id": "hvac-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "We will recap the importance of updating control gates in response to changing conditions. Effective responses must maintain traceability and accountability, ensuring all actions are documented and auditable. This practice is crucial for maintaining operational integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure HVAC scenario and tune controls under uncertainty to maintain system stability and performance."
        }
      ]
    },
    {
      "id": "hvac-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "hvac-501-l06-a1",
          "type": "guide",
          "title": "Case & Sim Debrief Guide",
          "content": "A guide with key questions to debrief the case analysis and simulation exercises, focusing on decision quality and strategy."
        }
      ],
      "questions": [
        {
          "id": "hvac-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "hvac-501-skill-case1",
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
          "id": "hvac-501-l06-q2",
          "text": "During an HVAC simulation, you observe performance metrics drifting outside safe operating limits. What is the most effective immediate action according to adaptive response design?",
          "skillId": "hvac-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Continue the simulation to gather more data"
            },
            {
              "id": "b",
              "text": "Trigger a pre-defined fallback procedure to a known-safe state"
            },
            {
              "id": "c",
              "text": "Manually adjust a single variable and hope for the best"
            },
            {
              "id": "d",
              "text": "End the simulation and write a report"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptive response requires pre-planned control gates and fallback options to manage emerging risks effectively."
        },
        {
          "id": "hvac-501-l06-q3",
          "text": "When evaluating HVAC impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "hvac-501-skill-case3",
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
          "id": "hvac-501-l06-q4",
          "text": "In a complex case study involving multiple stakeholders, a robust tradeoff analysis must:",
          "skillId": "hvac-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the single most vocal stakeholder's preference"
            },
            {
              "id": "b",
              "text": "Use a consistent framework to evaluate all options against shared dimensions like cost, safety, and equity"
            },
            {
              "id": "c",
              "text": "Focus exclusively on financial cost-benefit analysis"
            },
            {
              "id": "d",
              "text": "Present only the final recommendation without showing the alternatives considered"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous tradeoff analysis requires a consistent, multi-dimensional framework to ensure fair and transparent comparison of options for all stakeholders."
        },
        {
          "id": "hvac-501-l06-q5",
          "text": "What is the primary purpose of running an HVAC system simulation under 'adverse conditions'?",
          "skillId": "hvac-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "To prove the system works perfectly under ideal circumstances"
            },
            {
              "id": "b",
              "text": "To identify hidden failure modes and test the resilience of control strategies"
            },
            {
              "id": "c",
              "text": "To generate marketing materials showing system uptime"
            },
            {
              "id": "d",
              "text": "To minimize the use of computational resources"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stress-testing simulations are designed to uncover weaknesses and validate the effectiveness of safety and fallback mechanisms before they are needed in the real world."
        },
        {
          "id": "hvac-501-l06-q6",
          "text": "A standard 'Decision Memo Pattern' for a case analysis recommendation should always include:",
          "skillId": "hvac-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "A single, confident recommendation with no mention of risks"
            },
            {
              "id": "b",
              "text": "A list of personal opinions about the case"
            },
            {
              "id": "c",
              "text": "Explicit assumptions, evidence, risk controls, and fallback plans"
            },
            {
              "id": "d",
              "text": "A detailed technical appendix but no executive summary"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A professional decision memo provides a complete, defensible argument by making assumptions explicit, linking claims to evidence, and proactively planning for risks."
        },
        {
          "id": "hvac-501-l06-q7",
          "text": "In the Simulation Clinic, if a control change produces an unexpected negative outcome, what does 'traceability' allow you to do?",
          "skillId": "hvac-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Blame the software for the error"
            },
            {
              "id": "b",
              "text": "Immediately identify the specific change, the rationale behind it, and revert it if necessary"
            },
            {
              "id": "c",
              "text": "Ignore the outcome and hope it resolves itself"
            },
            {
              "id": "d",
              "text": "Change the success metrics to make the outcome look positive"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability ensures that every action is logged and linked to its rationale, enabling rapid diagnosis and correction when outcomes deviate from expectations."
        },
        {
          "id": "hvac-501-l06-q8",
          "text": "When analyzing a case study with significant public impact, which factor is crucial to include in the tradeoff analysis beyond technical performance?",
          "skillId": "hvac-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "The aesthetic design of the HVAC units"
            },
            {
              "id": "b",
              "text": "The distribution of costs and benefits across different community groups"
            },
            {
              "id": "c",
              "text": "The personal preferences of the engineering team"
            },
            {
              "id": "d",
              "text": "The popularity of the chosen solution on social media"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced case analysis, especially with public impact, requires an ethical dimension, evaluating how outcomes are distributed and ensuring equitable consideration for all stakeholders."
        }
      ]
    },
    {
      "id": "hvac-501-l07",
      "title": "HVAC Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "hvac-501-l07-a1",
          "type": "checklist",
          "title": "Ethical Framework Checklist",
          "content": "A checklist for evaluating decisions against ethical principles, including stakeholder impact, transparency, and accountability."
        }
      ],
      "visualPrompts": [
        {
          "type": "map",
          "description": "A map visualization showing the geographic distribution of positive (e.g., improved air quality) and negative (e.g., noise pollution) impacts on different communities."
        },
        {
          "type": "flowchart",
          "description": "A flowchart illustrating an accountability architecture, with clear roles, decision points, review rights, and escalation pathways."
        },
        {
          "type": "icon_based_graphic",
          "description": "An icon-based graphic summarizing the key pillars of responsible leadership: Performance, Ethics, Accountability, and Resilience."
        }
      ],
      "chunks": [
        {
          "id": "hvac-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learners will map the distribution of benefits and burdens of an HVAC project among different stakeholder groups. This exercise reveals the delayed and second-order effects of technical decisions, which is essential for responsible and equitable planning."
        },
        {
          "id": "hvac-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the architecture of accountability in decision-making. We will discuss how to integrate decision traceability, review rights, and remediation obligations into project workflows to ensure all parties are held accountable for their actions."
        },
        {
          "id": "hvac-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "To ensure responsible leadership, a comprehensive checklist should connect key outcomes to ethical considerations, policy adherence, and system resilience. Using this checklist helps leaders make informed decisions that benefit the community and environment."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a project are allocated across different populations and timescales."
        },
        {
          "id": "hvac-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of who made a decision, when, and based on what evidence and rationale."
        },
        {
          "id": "hvac-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making that balances performance, accountability, and ethical considerations for all stakeholders."
        }
      ]
    },
    {
      "id": "hvac-501-l08",
      "title": "HVAC Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "hvac-501-l08-a1",
          "type": "template",
          "title": "Defense Brief Template",
          "content": "A structured template for assembling a capstone defense brief, with sections for claims, evidence, uncertainty analysis, and remediation plans."
        }
      ],
      "visualPrompts": [
        {
          "type": "simulation",
          "description": "A simulated video conference interface where learners present their findings to an 'Expert Panel' of AI-driven avatars who ask critical questions."
        },
        {
          "type": "template",
          "description": "A presentation slide template structured around the core defense components: Claim, Evidence, Uncertainty, and Remediation."
        }
      ],
      "chunks": [
        {
          "id": "hvac-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, you will assemble a detailed defense brief for your capstone recommendation. The brief must include well-supported claims, verifiable evidence, a clear statement of uncertainty, and actionable remediation pathways."
        },
        {
          "id": "hvac-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During the rehearsal, you will practice responding to critiques covering technical rigor, governance, and stakeholder concerns. This is a valuable opportunity to refine your communication skills and prepare for real-world expert reviews in the HVAC field."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your specialization recommendations under adversarial cross-examination from a simulated panel of experts."
        }
      ]
    }
  ]
};
