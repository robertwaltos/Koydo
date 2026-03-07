import type { LearningModule } from "@/lib/modules/types";

export const international_business_501_Module: LearningModule = {
  "id": "international-business-501",
  "title": "International Business Specialization Studio",
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
      "id": "international-business-501-l01",
      "title": "International Business Advanced Foundations",
      "type": "video",
      "duration": 14,
      "visualPrompts": [
        "Diagram of a complex business system with interconnected components and external factors.",
        "Causal loop diagram illustrating feedback effects between marketing spend, sales, and production capacity.",
        "Graph showing a business forecast with confidence interval bands to visualize uncertainty."
      ],
      "learningAids": [
        {
          "id": "international-business-501-l01-a1",
          "type": "image",
          "title": "Diagnostic Framework Example",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "international-business-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Defines the advanced principles of scoping international business problems. Covers methods for diagnosing complex business systems and designing efficient, robust operations and execution strategies for global markets."
        },
        {
          "id": "international-business-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Introduces techniques for mapping causal pathways between business variables, identifying and quantifying ranges of uncertainty, and analyzing system interdependencies. This modeling is foundational for planning effective interventions."
        },
        {
          "id": "international-business-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Establishes the requirement for linking all strategic claims to measurable indicators. This includes defining confidence bounds for forecasts and implementing review checkpoints to ensure decisions are evidence-based."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-501-l01-f1",
          "front": "Business Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "international-business-501-l01-f2",
          "front": "Business Operations and Execution Design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "international-business-501-l01-f3",
          "front": "Business Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "international-business-501-l02",
      "title": "International Business Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "visualPrompts": [
        "Flowchart of a business workflow with decision gates, feedback loops, and rollback paths.",
        "Dashboard showing key performance indicators (KPIs) changing in real-time during a stress test simulation.",
        "Diagram of an escalation pathway, from an operational team alert to executive-level review."
      ],
      "learningAids": [
        {
          "id": "international-business-501-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "international-business-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "Learners design specialized business workflows and then stress-test them by simulating adverse scenarios, such as supply chain disruptions or sudden market shifts, to evaluate their resilience and identify failure points."
        },
        {
          "id": "international-business-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Summarizes the principles of integrating control gates into workflows to monitor progress and quality. Covers the design of clear rollback criteria and threshold-based escalation protocols to manage deviations from the plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-business-501-l02-act1",
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
      "id": "international-business-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-business-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "international-business-501-l03-q1",
          "text": "Which practice most improves business systems diagnostics decision quality?",
          "skillId": "international-business-501-skill-core",
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
          "id": "international-business-501-l03-q2",
          "text": "At level 501, strong execution for business operations and execution design requires:",
          "skillId": "international-business-501-skill-execution",
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
          "id": "international-business-501-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "international-business-501-skill-eval",
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
          "id": "international-business-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "international-business-501-skill-governance",
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
      "id": "international-business-501-l04",
      "title": "International Business Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "visualPrompts": [
        "A complex case study mind map showing interconnected challenges across finance, logistics, and marketing.",
        "A multi-axis spider chart comparing three strategic options across cost, risk, speed, and market share.",
        "Template of a structured one-page decision memorandum, highlighting sections for assumptions, evidence, and risks."
      ],
      "learningAids": [
        {
          "id": "international-business-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "international-business-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Frames a multi-faceted case study highlighting competing constraints in international business. The analysis focuses on the cascading impacts of strategic decisions and the trade-offs required to navigate them."
        },
        {
          "id": "international-business-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Learners compare strategic options across critical dimensions, including safety, reliability, cost, equity, and governance. This exercise hones the ability to identify and articulate the core trade-offs in any complex decision."
        },
        {
          "id": "international-business-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Outlines a professional structure for a decision memo. Each recommendation must be supported by explicit assumptions, verifiable evidence, pre-defined risk controls, and viable fallback plans."
        }
      ]
    },
    {
      "id": "international-business-501-l05",
      "title": "International Business Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "visualPrompts": [
        "Screenshot of a simulation dashboard with adjustable levers (e.g., pricing, inventory) and real-time data feeds.",
        "An animated graph showing the impact of a decision on multiple KPIs (e.g., profit, market share, CO2 emissions) over time.",
        "A decision tree interface showing adaptive response options after an unexpected event in the simulation."
      ],
      "learningAids": [
        {
          "id": "international-business-501-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "international-business-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "Learners operate controls within a dynamic business simulation, tasked with balancing performance metrics (like profit and growth) against critical governance constraints (like regulatory compliance and ethical standards)."
        },
        {
          "id": "international-business-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Explores how effective leaders adapt to changing conditions by updating control gates and operational plans in real-time, while maintaining full traceability and accountability for every decision made under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-business-501-l05-act1",
          "type": "scenario",
          "title": "High-Stakes Simulation: Managing a Global Supply Chain Crisis",
          "description": "Run a high-pressure international business scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "international-business-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "international-business-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "international-business-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "international-business-501-skill-case1",
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
          "id": "international-business-501-l06-q2",
          "text": "A resilient strategy for business operations and execution design should include:",
          "skillId": "international-business-501-skill-case2",
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
          "id": "international-business-501-l06-q3",
          "text": "When evaluating business impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "international-business-501-skill-case3",
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
          "id": "international-business-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "international-business-501-skill-case4",
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
        }
      ]
    },
    {
      "id": "international-business-501-l07",
      "title": "International Business Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "visualPrompts": [
        "Infographic showing the ripple effects of a corporate decision on different communities, the environment, and the economy.",
        "Flowchart of an accountability process, from incident detection through investigation, remediation, and verification.",
        "A checklist graphic for responsible leadership, with items for ethics, compliance, and resilience."
      ],
      "learningAids": [
        {
          "id": "international-business-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "international-business-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Focuses on mapping the distribution of benefits, burdens, and delayed effects of business decisions across various stakeholder groups. This analysis is vital for responsible and sustainable business practices."
        },
        {
          "id": "international-business-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Details the architecture of robust accountability systems. This includes ensuring end-to-end traceability for decisions, establishing rights for independent review, and defining clear obligations for remediation."
        },
        {
          "id": "international-business-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Provides a comprehensive checklist that connects performance outcomes with ethical guardrails, policy compliance, and system resilience. This tool helps integrate these elements into a coherent leadership framework."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "international-business-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "international-business-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "international-business-501-l08",
      "title": "International Business Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "visualPrompts": [
        "A structured template for a defense brief document, with clearly marked sections for claims, evidence, and risks.",
        "Video clips of simulated expert cross-examination, with on-screen text highlighting the type of critique (e.g., technical, ethical).",
        "An interface showing a 'critique' from a simulated panelist and a timer for the user's response."
      ],
      "learningAids": [
        {
          "id": "international-business-501-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "international-business-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Learners assemble a capstone defense brief, synthesizing their primary claims, supporting evidence, boundaries of uncertainty, and potential remediation pathways into a clear and persuasive document."
        },
        {
          "id": "international-business-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Learners rehearse responses to a range of expert critiques, preparing for questions related to technical feasibility, governance implications, and stakeholder concerns to build confidence and sharpen communication."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-business-501-l08-act1",
          "type": "debate_simulator",
          "title": "Capstone Defense Simulation: Expert Panel Review",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    },
    {
      "id": "international-business-501-l09",
      "title": "Checkpoint 3: Capstone Defense & Synthesis",
      "type": "quiz",
      "duration": 12,
      "learningAids": [
        {
          "id": "international-business-501-l09-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "international-business-501-l09-q1",
          "text": "During a capstone defense, an expert panelist questions the negative impact of your proposal on a local community. What is the strongest response?",
          "skillId": "international-business-501-skill-defense-stakeholder",
          "options": [
            {
              "id": "a",
              "text": "Dismiss the concern as out of scope for a business decision."
            },
            {
              "id": "b",
              "text": "Acknowledge the impact, present the mitigation plan included in your analysis, and explain the trade-offs."
            },
            {
              "id": "c",
              "text": "State that all business decisions have winners and losers."
            },
            {
              "id": "d",
              "text": "Pivot to discussing the financial benefits of the proposal."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong defense acknowledges stakeholder impacts, demonstrates foresight with a mitigation plan, and transparently discusses trade-offs."
        },
        {
          "id": "international-business-501-l09-q2",
          "text": "Your recommendation relies on a forecast with high uncertainty. How should you present this in your defense?",
          "skillId": "international-business-501-skill-defense-uncertainty",
          "options": [
            {
              "id": "a",
              "text": "Present the forecast as a certainty to appear more confident."
            },
            {
              "id": "b",
              "text": "Avoid mentioning the forecast and focus on other areas."
            },
            {
              "id": "c",
              "text": "Explicitly state the uncertainty bounds, explain the contingency plans, and define the monitoring thresholds."
            },
            {
              "id": "d",
              "text": "Suggest delaying the decision indefinitely until the uncertainty is resolved."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mature leadership involves transparently communicating uncertainty and demonstrating preparedness with contingency plans and monitoring."
        },
        {
          "id": "international-business-501-l09-q3",
          "text": "What is the primary function of an accountability architecture in a defended business proposal?",
          "skillId": "international-business-501-skill-defense-governance",
          "options": [
            {
              "id": "a",
              "text": "To assign blame if the project fails."
            },
            {
              "id": "b",
              "text": "To ensure that decisions are traceable, reviewable, and that there are clear obligations for remediation."
            },
            {
              "id": "c",
              "text": "To increase bureaucracy and slow down execution."
            },
            {
              "id": "d",
              "text": "To satisfy a legal requirement with no operational impact."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accountability architecture is a proactive governance system for ensuring transparency, review, and corrective action, not a punitive tool."
        },
        {
          "id": "international-business-501-l09-q4",
          "text": "Which statement best synthesizes the core principles of this International Business Specialization Studio?",
          "skillId": "international-business-501-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Success in international business is solely about maximizing quarterly profits."
            },
            {
              "id": "b",
              "text": "The best strategy is always the one with the most advanced technology."
            },
            {
              "id": "c",
              "text": "Effective international business leadership requires defending evidence-based decisions within a resilient, accountable, and ethical framework."
            },
            {
              "id": "d",
              "text": "Following a rigid, unchanging plan is the key to reliable execution."
            }
          ],
          "correctOptionId": "c",
          "explanation": "This course synthesizes evidence-based analysis, resilient design, accountable governance, and ethical considerations as the pillars of advanced international business leadership."
        }
      ]
    }
  ]
};
