import type { LearningModule } from "@/lib/modules/types";

export const project_management_601_Module: LearningModule = {
  "id": "project-management-601",
  "title": "Project Management Research and Leadership",
  "description": "Post-401 specialization in Project Management, focused on project management systems diagnostics, project management operations and execution design, project management impact and tradeoff analysis, and project management governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Project Management",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "project-management",
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
    "Apply advanced methods for project management systems diagnostics in high-constraint environments",
    "Design robust systems for project management operations and execution design with measurable control gates",
    "Evaluate interventions in project management impact and tradeoff analysis with research-grade rigor",
    "Operationalize project management governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "project-management-601-l01",
      "title": "Project Management Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "project-management-601-l01-a1",
          "type": "image",
          "title": "The Project Management Hexagon",
          "content": "A visual model showing the interconnected constraints of scope, time, cost, quality, risk, and resources. A change in one dimension requires tradeoffs in others."
        }
      ],
      "chunks": [
        {
          "id": "project-management-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces advanced techniques for defining a project's scope and boundaries. Clearly defining what is included and excluded is the first step to success. We will learn to diagnose existing project management systems to identify weaknesses and design robust operational plans. A structured approach is key: (1) define the project goal in a single, clear sentence, (2) identify the evidence needed to confirm the goal is met, (3) explain how each piece of evidence informs your conclusions, and (4) verify your final plan against the original goal and constraints."
        },
        {
          "id": "project-management-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Before intervening in a complex system, you must understand it. Here, you will learn to map causal pathways—the cause-and-effect relationships between project variables. We will also identify and quantify ranges of uncertainty for key factors and analyze how different systems are interdependent. This modeling is essential for anticipating challenges, managing risks, and making informed decisions before committing resources."
        },
        {
          "id": "project-management-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "In this recap, we emphasize a core principle of advanced project management: all claims must be supported by measurable evidence. This requires establishing clear performance indicators, setting confidence bounds for your forecasts, and designing review checkpoints. These evidence thresholds allow you to validate decisions, demonstrate progress, and make necessary adjustments with rigor and accountability."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-601-l01-f1",
          "front": "What are project management systems diagnostics?",
          "back": "A structured analysis of a project's processes and controls, requiring explicit assumptions and measurable constraints to identify points of failure."
        },
        {
          "id": "project-management-601-l01-f2",
          "front": "What is project management operations and execution design?",
          "back": "The architecture of how a project is run, including workflows, control gates, and communication protocols that determine its reliability under stress."
        },
        {
          "id": "project-management-601-l01-f3",
          "front": "What is project management impact and tradeoff analysis?",
          "back": "A rigorous evaluation discipline for identifying the true gains, hidden costs, and unintended consequences of a project decision."
        }
      ]
    },
    {
      "id": "project-management-601-l02",
      "title": "Project Management Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "project-management-601-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "A template for mapping out a project workflow, including stages, decision points, control gates, and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "project-management-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design a specialized workflow tailored to a specific project scenario. You will then conduct a stress test by simulating adverse conditions, such as budget cuts or unexpected technical failures. This hands-on experience is vital for learning how to build resilient workflows that can withstand real-world challenges."
        },
        {
          "id": "project-management-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap focuses on designing an effective control gate architecture. We will review how robust workflows must integrate checkpoints to review progress, clear rollback criteria to reverse failing actions, and pre-defined escalation thresholds to alert leadership when necessary. This structure ensures that when problems arise, there is a clear and predictable process for addressing them and protecting the project's integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "project-management-601-l02-act1",
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
      "id": "project-management-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "project-management-601-l03-a1",
          "type": "practice",
          "title": "Checkpoint Review",
          "content": "Review key concepts from the first two lessons. Focus on making assumptions explicit and using measurable evidence in your reasoning."
        }
      ],
      "questions": [
        {
          "id": "project-management-601-l03-q1",
          "text": "Which practice most improves the decision quality of project management systems diagnostics?",
          "skillId": "project-management-601-skill-diagnostics",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit and measurable from the start."
        },
        {
          "id": "project-management-601-l03-q2",
          "text": "At an advanced level, strong project execution design requires:",
          "skillId": "project-management-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear owner mapping, a regular checkpoint cadence, and defined escalation thresholds"
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
          "explanation": "Reliable advanced execution needs ownership clarity, a predictable review rhythm, and threshold-driven governance."
        },
        {
          "id": "project-management-601-l03-q3",
          "text": "A defensible approach to project impact and tradeoff analysis includes:",
          "skillId": "project-management-601-skill-analysis",
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
              "text": "Changing success criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended consequences, and transparent disclosure of uncertainty."
        },
        {
          "id": "project-management-601-l03-q4",
          "text": "Mature project governance systems effectively connect:",
          "skillId": "project-management-601-skill-governance",
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
          "explanation": "Governance maturity is the operational link between strategic intent, measurable controls, and a clear process for corrective action."
        },
        {
          "id": "project-management-601-l03-q5",
          "text": "What is the most rigorous way to compare competing project interventions?",
          "skillId": "project-management-601-skill-comparison",
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
              "text": "Switch metrics after results arrive to favor an outcome"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require scoring all options against the same pre-defined metrics, including an honest accounting of side effects and uncertainty."
        },
        {
          "id": "project-management-601-l03-q6",
          "text": "In high-stakes project execution, which communication protocol is strongest?",
          "skillId": "project-management-601-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without sharing assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only final outcomes after project completion"
            },
            {
              "id": "d",
              "text": "Limit updates to a single informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strong communication in high-stakes environments requires transparency about assumptions, confidence levels, and key decision points."
        },
        {
          "id": "project-management-601-l03-q7",
          "text": "A mature remediation loop in advanced project management should prioritize:",
          "skillId": "project-management-601-skill-remediation",
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
              "text": "One-time fixes without retesting under stress"
            },
            {
              "id": "d",
              "text": "Issue closure based on elapsed time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation focuses on systemic improvement by tying root causes to control redesign and verifying that the fix works."
        },
        {
          "id": "project-management-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience?",
          "skillId": "project-management-601-skill-portfolio",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and maintaining contingency capacity"
            },
            {
              "id": "c",
              "text": "Ignore correlated failure modes across projects"
            },
            {
              "id": "d",
              "text": "Commit all resources to one irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced portfolios combine value optimization with explicit risk limits and contingency options to ensure long-term resilience."
        }
      ]
    },
    {
      "id": "project-management-601-l04",
      "title": "Project Management Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "project-management-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A table for comparing project options across multiple criteria like cost, safety, reliability, and stakeholder impact."
        }
      ],
      "chunks": [
        {
          "id": "project-management-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson deconstructs a complex case study featuring competing project constraints. We will perform a deep diagnostic of the system's pressures and evaluate the impacts and tradeoffs of different decisions made by the project team. Understanding how to structure a scenario and identify its core tensions is essential for navigating complex project environments and making well-informed choices."
        },
        {
          "id": "project-management-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Using the case study, you will practice framing and comparing different strategic options. This involves evaluating choices across multiple dimensions such as safety, reliability, cost, equity, and governance. This comparative analysis is critical for understanding the full spectrum of consequences and ensuring all critical aspects are considered before a final recommendation is made."
        },
        {
          "id": "project-management-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "In this recap, we will review a structured pattern for documenting and communicating a high-stakes decision. Each recommendation should be presented in a clear memo that includes explicit assumptions, supporting evidence, proposed risk controls, and pre-planned fallbacks. This structured approach ensures that decisions are well-founded, transparent, and prepared for potential challenges."
        }
      ]
    },
    {
      "id": "project-management-601-l05",
      "title": "Project Management Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "project-management-601-l05-a1",
          "type": "practice",
          "title": "Simulation Control Dashboard",
          "content": "An interactive dashboard showing key project metrics (KPIs), risk indicators, and control levers for the simulation."
        }
      ],
      "chunks": [
        {
          "id": "project-management-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive simulation, you will take the controls of a project facing dynamic challenges. Your task is to balance performance targets with governance constraints in real-time. This experience will help you develop the skill of managing competing priorities effectively and making decisions that align with both project goals and regulatory requirements under pressure."
        },
        {
          "id": "project-management-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing adaptive responses to unexpected project events. Effective responses require updating control gates and operational plans while maintaining traceability and accountability. We will discuss how to make changes in a controlled manner, ensuring a clear record of what changed, why it changed, and who approved it, thereby preserving transparency and responsibility."
        }
      ],
      "interactiveActivities": [
        {
          "id": "project-management-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure project management scenario. Your goal is to tune controls, manage resources, and respond to unexpected events while balancing performance and governance constraints."
        }
      ]
    },
    {
      "id": "project-management-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "project-management-601-l06-a1",
          "type": "practice",
          "title": "Checkpoint Review",
          "content": "Review key concepts from the case analysis and simulation lessons. Focus on tradeoff analysis, resilient design, and adaptive responses."
        }
      ],
      "questions": [
        {
          "id": "project-management-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "project-management-601-skill-casework",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and pre-defined success criteria"
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
          "explanation": "Defensible recommendations begin with a clear and agreed-upon foundation of assumptions, constraints, and measurable targets."
        },
        {
          "id": "project-management-601-l06-q2",
          "text": "A resilient strategy for project operations should always include:",
          "skillId": "project-management-601-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback plans and escalation criteria"
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
          "explanation": "Resilience in project design depends on having checkpoints, pre-planned fallback options, and explicit escalation paths."
        },
        {
          "id": "project-management-601-l06-q3",
          "text": "When evaluating project impact, which method is most rigorous?",
          "skillId": "project-management-601-skill-analysis",
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
          "explanation": "Rigorous evaluation requires comparing outcomes to a baseline, analyzing unintended side effects, and disclosing uncertainty."
        },
        {
          "id": "project-management-601-l06-q4",
          "text": "Advanced project governance is strongest when it:",
          "skillId": "project-management-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Aligns decision-making authority, performance measurement, and remediation obligations"
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
          "explanation": "Mature governance creates a tight link between who has authority, how their performance is measured, and their responsibility for corrective action."
        },
        {
          "id": "project-management-601-l06-q5",
          "text": "In a project simulation, a key performance indicator (KPI) trends negatively. What is the most effective first step?",
          "skillId": "project-management-601-skill-simulation-diag",
          "options": [
            {
              "id": "a",
              "text": "Immediately implement a pre-planned solution"
            },
            {
              "id": "b",
              "text": "Diagnose the root cause of the deviation before taking action"
            },
            {
              "id": "c",
              "text": "Wait to see if the trend reverses on its own"
            },
            {
              "id": "d",
              "text": "Adjust the KPI target to make the trend look positive"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective crisis response starts with diagnosis. Before acting, you must understand the root cause of the problem to ensure your intervention is appropriate."
        },
        {
          "id": "project-management-601-l06-q6",
          "text": "When presenting a case analysis, what is the most critical component for establishing credibility?",
          "skillId": "project-management-601-skill-casework-defense",
          "options": [
            {
              "id": "a",
              "text": "A confident delivery style"
            },
            {
              "id": "b",
              "text": "Clearly linking your recommendations back to verifiable evidence"
            },
            {
              "id": "c",
              "text": "Using as much technical jargon as possible"
            },
            {
              "id": "d",
              "text": "Presenting only the data that supports your conclusion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Credibility in case analysis comes from the strength of the logical chain connecting evidence to recommendations."
        },
        {
          "id": "project-management-601-l06-q7",
          "text": "A 'fallback plan' within a case recommendation is primarily designed to:",
          "skillId": "project-management-601-skill-risk-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Serve as the primary project plan"
            },
            {
              "id": "b",
              "text": "Mitigate risk if the primary strategy fails or becomes unviable"
            },
            {
              "id": "c",
              "text": "Increase the project's overall budget"
            },
            {
              "id": "d",
              "text": "Document lessons learned after the project is over"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A fallback plan is a form of risk mitigation, providing a pre-approved alternative path if the main plan encounters critical issues."
        },
        {
          "id": "project-management-601-l06-q8",
          "text": "During a simulation, a sudden external event makes your primary strategy unviable. This scenario specifically tests your team's:",
          "skillId": "project-management-601-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Ability to follow the original plan perfectly"
            },
            {
              "id": "b",
              "text": "Initial forecasting accuracy"
            },
            {
              "id": "c",
              "text": "Adaptive capacity and decision-making under uncertainty"
            },
            {
              "id": "d",
              "text": "Reporting and documentation skills"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Responding to unforeseen, strategy-breaking events is a direct test of a team's ability to adapt and make sound decisions when the original plan is no longer valid."
        }
      ]
    },
    {
      "id": "project-management-601-l07",
      "title": "Project Management Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "project-management-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram that maps different stakeholder groups against their level of interest and influence, showing the distribution of project impacts."
        }
      ],
      "chunks": [
        {
          "id": "project-management-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson focuses on the ethical dimension of project management. You will learn to map the distribution of benefits, burdens, and delayed effects across all stakeholder groups, especially those who may not have a strong voice. Understanding who wins, who loses, and who bears the risk is essential for equitable and responsible project leadership."
        },
        {
          "id": "project-management-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we explore the architecture of accountability. This includes designing systems for tracking key decisions, establishing stakeholders' rights to review those decisions, and defining the project team's obligation to remediate negative outcomes. Establishing clear accountability is crucial for maintaining trust, ensuring fairness, and building a reputation for integrity."
        },
        {
          "id": "project-management-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a practical checklist for responsible leadership. This tool connects project outcomes with ethical guardrails, ensures compliance with governance policies, and promotes systemic resilience. This checklist serves as a final guide to help ensure your project management practices are not only effective but also ethical and accountable."
        }
      ],
      "flashcards": [
        {
          "id": "project-management-601-l07-f1",
          "front": "What is impact distribution?",
          "back": "An analysis of how project outcomes (benefits, costs, and risks) are allocated across different populations and timescales."
        },
        {
          "id": "project-management-601-l07-f2",
          "front": "What is decision traceability?",
          "back": "An auditable record of a decision, including the evidence used, the owners involved, and the rationale behind the final choice."
        },
        {
          "id": "project-management-601-l07-f3",
          "front": "What is responsible leadership in project management?",
          "back": "A decision-making behavior that consistently balances performance goals, accountability to stakeholders, and ethical principles."
        }
      ]
    },
    {
      "id": "project-management-601-l08",
      "title": "Project Management Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "project-management-601-l08-a1",
          "type": "practice",
          "title": "Defense Briefing Template",
          "content": "A structured template for assembling a capstone defense, including sections for the executive summary, problem statement, evidence, tradeoff analysis, and risk mitigation."
        }
      ],
      "chunks": [
        {
          "id": "project-management-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive lab, you will assemble a comprehensive defense brief for your capstone project. This brief must integrate well-supported claims, verifiable evidence, clearly stated uncertainty boundaries, and robust remediation pathways. This exercise synthesizes all the skills from the course into a single, high-stakes deliverable."
        },
        {
          "id": "project-management-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "To conclude, you will rehearse your defense by responding to critiques from a simulated expert panel. The panel will challenge you on technical details, governance issues, and stakeholder impacts. This rehearsal is crucial for building confidence and ensuring you are prepared to defend your work under rigorous, expert-level scrutiny."
        }
      ],
      "interactiveActivities": [
        {
          "id": "project-management-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone project recommendations against a simulated expert panel. Respond to adversarial cross-examination on your technical, financial, and ethical reasoning."
        }
      ]
    }
  ]
};
