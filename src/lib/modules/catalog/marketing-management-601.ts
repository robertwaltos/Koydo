import type { LearningModule } from "@/lib/modules/types";

export const marketing_management_601_Module: LearningModule = {
  "id": "marketing-management-601",
  "title": "Marketing Management: Research and Leadership",
  "description": "An advanced specialization in Marketing Management focusing on business systems diagnostics, operations design, impact analysis, and leadership. The module uses advanced casework, simulation, and defense-based checkpoints to build expert-level skills.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "marketing-management",
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
    "Apply advanced methods for business systems diagnostics in high-constraint environments.",
    "Design robust systems for business operations and execution with measurable control gates.",
    "Evaluate business interventions and their tradeoffs with research-grade rigor.",
    "Operationalize business governance with accountable leadership and clear escalation pathways.",
    "Lead cross-functional decision reviews with explicit communication of tradeoffs.",
    "Defend strategic recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "marketing-management-601-l01",
      "title": "Advanced Foundations in Marketing Management",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "marketing-management-601-l01-a1",
          "type": "diagram",
          "title": "System Boundaries Diagram",
          "content": "A visual chart illustrating how to define the scope of a marketing problem, showing internal systems, external factors, and their interdependencies."
        }
      ],
      "chunks": [
        {
          "id": "marketing-management-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces the advanced concept of defining scope boundaries in Marketing Management. Properly defining scope is crucial for focusing marketing strategies. We will learn to diagnose complex business systems by analyzing how different components interact, and design operations that align with strategic goals. This foundation is essential for making informed decisions in complex marketing environments."
        },
        {
          "id": "marketing-management-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Here, we will map the causal pathways that connect marketing actions to business outcomes. We will also explore how to model uncertainty and system dependencies, which are critical for planning effective interventions. This process prepares you to make strategic decisions based on a clear understanding of the variables at play and their potential impact."
        },
        {
          "id": "marketing-management-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds and Validation",
          "content": "This recap emphasizes the importance of backing all strategic claims with measurable indicators. We will review how to establish confidence bounds for your projections and set up review checkpoints to validate your strategy. This rigorous approach helps maintain credibility and ensures your marketing efforts are effective."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-601-l01-f1",
          "front": "What is business systems diagnostics?",
          "back": "A structured approach to analyzing business problems that requires clearly stated assumptions and measurable constraints."
        },
        {
          "id": "marketing-management-601-l01-f2",
          "front": "What is business operations and execution design?",
          "back": "The architectural design of business processes to ensure they perform reliably, especially under pressure or in adverse conditions."
        },
        {
          "id": "marketing-management-601-l01-f3",
          "front": "What is business impact and tradeoff analysis?",
          "back": "A rigorous evaluation discipline for identifying the true benefits, hidden costs, and secondary effects of a business decision."
        }
      ]
    },
    {
      "id": "marketing-management-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "marketing-management-601-l02-a1",
          "type": "template",
          "title": "Workflow Design Canvas",
          "content": "A structured template for designing and stress-testing a marketing workflow, including sections for control gates, rollback criteria, and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "marketing-management-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows for specific marketing tasks. You will then stress-test these workflows by simulating adverse scenarios to evaluate their resilience. This hands-on experience will sharpen your problem-solving skills and prepare you for real-world operational challenges."
        },
        {
          "id": "marketing-management-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap reviews how to structure workflows with essential checkpoints, clear rollback criteria, and threshold-based escalation procedures. Mastering these components will enable you to build robust, adaptable workflows that ensure quality and accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "marketing-management-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each operational control with its primary effect on system reliability and governance.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits the negative impact of an unexpected outcome"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible attribution of impact"
            },
            {
              "left": "Retrospective loop",
              "right": "Improves the quality of future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "marketing-management-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "marketing-management-601-l03-a1",
          "type": "review_guide",
          "title": "Key Concepts Summary",
          "content": "A one-page summary of the core concepts from Lessons 1 and 2, including system diagnostics, execution design, and control gate architecture."
        }
      ],
      "questions": [
        {
          "id": "marketing-management-601-l03-q1",
          "text": "Which practice most improves the quality of a business systems diagnosis?",
          "skillId": "mm601-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators upfront"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decision-making improves when assumptions, constraints, and metrics are made explicit from the start."
        },
        {
          "id": "marketing-management-601-l03-q2",
          "text": "At an advanced level, strong execution design requires:",
          "skillId": "mm601-execution-design",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, a regular checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "Skipping retrospectives or post-implementation reviews"
            },
            {
              "id": "d",
              "text": "No defined rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution depends on clear ownership and governance driven by pre-defined thresholds."
        },
        {
          "id": "marketing-management-601-l03-q3",
          "text": "A defensible approach to business impact and tradeoff analysis includes:",
          "skillId": "mm601-impact-analysis",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and stated uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing the success criteria after seeing the outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult or inconvenient scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended side-effects, and transparent disclosure of uncertainty."
        },
        {
          "id": "marketing-management-601-l03-q4",
          "text": "A mature governance system effectively connects:",
          "skillId": "mm601-governance",
          "options": [
            {
              "id": "a",
              "text": "The intent of a policy, measurable controls, and clear remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language that has no measurable enforcement mechanism"
            },
            {
              "id": "c",
              "text": "Ambitious targets without clear ownership or an escalation plan"
            },
            {
              "id": "d",
              "text": "Operations that lack transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance is the operational link between strategic intent, objective measurement, and corrective action."
        }
      ]
    },
    {
      "id": "marketing-management-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "marketing-management-601-l04-a1",
          "type": "case_study_document",
          "title": "Case Study: 'Global Launch Dilemma'",
          "content": "A detailed business case about a company facing competing constraints (budget, timeline, quality) for a new product launch."
        },
        {
          "id": "marketing-management-601-l04-a2",
          "type": "template",
          "title": "Decision Memo Template",
          "content": "A structured document for outlining a recommendation, including sections for assumptions, evidence, risks, and fallback plans."
        }
      ],
      "chunks": [
        {
          "id": "marketing-management-601-l04-c1",
          "kind": "concept",
          "title": "Structuring Case Scenarios",
          "content": "In this lesson, we will deconstruct case studies that feature competing constraints. We will analyze the potential impacts of various business decisions and conduct tradeoff analyses to understand the consequences of each choice. This will equip you with the skills to navigate complex business scenarios effectively."
        },
        {
          "id": "marketing-management-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice segment, you will compare strategic options across critical dimensions such as safety, reliability, cost, and governance. This comparative analysis will help you develop a multi-faceted perspective on decision-making and articulate the tradeoffs involved in different marketing strategies."
        },
        {
          "id": "marketing-management-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "This recap reviews the standard structure for a professional decision memo. A strong recommendation must clearly outline its underlying assumptions, provide supporting evidence, identify risk controls, and include fallback plans. This structured approach ensures your proposals are well-reasoned and actionable."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-601-l04-f1",
          "front": "What is tradeoff framing?",
          "back": "The process of systematically comparing strategic options across multiple, often competing, dimensions of value (e.g., cost vs. quality)."
        },
        {
          "id": "marketing-management-601-l04-f2",
          "front": "What are the key parts of a decision memo?",
          "back": "A clear recommendation, supporting evidence, stated assumptions, identified risks with mitigation plans, and a fallback strategy."
        }
      ]
    },
    {
      "id": "marketing-management-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "marketing-management-601-l05-a1",
          "type": "simulation_dashboard_guide",
          "title": "Simulation Interface Guide",
          "content": "An overview of the simulation dashboard, explaining the controls, key performance indicators (KPIs), and governance constraint monitors."
        }
      ],
      "chunks": [
        {
          "id": "marketing-management-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Simulation",
          "content": "In this interactive simulation, you will manage a marketing campaign in a dynamic environment. Your task is to operate scenario controls to balance performance objectives with governance constraints, making informed decisions as conditions change. This exercise connects theory to practice by highlighting the real-time impact of tradeoffs and assumptions."
        },
        {
          "id": "marketing-management-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing effective responses within a live system. We will review how to update control gates and adjust strategy without losing traceability or accountability. This ensures that all actions are documented and auditable, which is essential for maintaining operational integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "marketing-management-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure marketing scenario. Your goal is to tune operational controls to meet targets while navigating unexpected market shifts and resource constraints."
        }
      ]
    },
    {
      "id": "marketing-management-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "marketing-management-601-l06-a1",
          "type": "case_and_simulation_summary",
          "title": "Application Concepts Review",
          "content": "A summary of key principles from the case analysis and simulation lessons, focusing on tradeoff framing, adaptive response, and decision memos."
        }
      ],
      "questions": [
        {
          "id": "marketing-management-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "mm601-casework-foundations",
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
              "text": "High confidence without any supporting evidence logs"
            },
            {
              "id": "d",
              "text": "Optimization based on a single metric only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations must begin with explicit assumptions, constraints, and measurable targets to be credible."
        },
        {
          "id": "marketing-management-601-l06-q2",
          "text": "A resilient strategy for business operations should include:",
          "skillId": "mm601-casework-resilience",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with clear fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "A rigid, one-way execution path with no rollback capability"
            },
            {
              "id": "c",
              "text": "No clear ownership mapping across teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in operations depends on planned checkpoints, fallback options, and an explicit escalation design."
        },
        {
          "id": "marketing-management-601-l06-q3",
          "text": "When evaluating business impact in a case study, which method is most rigorous?",
          "skillId": "mm601-casework-evaluation",
          "options": [
            {
              "id": "a",
              "text": "A single success story without control groups"
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
              "text": "Changing the scope of the analysis retrospectively to fit the outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons against a baseline, analysis of unintended side-effects, and transparent disclosure of uncertainty."
        },
        {
          "id": "marketing-management-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "mm601-casework-governance",
          "options": [
            {
              "id": "a",
              "text": "Aligns decision-making authority, performance measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates high-level policy from day-to-day operational controls"
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
          "explanation": "Mature governance creates a closed loop that links authority, measurable controls, and corrective action."
        },
        {
          "id": "marketing-management-601-l06-q5",
          "text": "In a simulation where market conditions suddenly worsen, what is the best initial response?",
          "skillId": "mm601-simulation-response",
          "options": [
            {
              "id": "a",
              "text": "Double the investment to recover faster"
            },
            {
              "id": "b",
              "text": "Pause, assess the new conditions against your plan, and activate a pre-defined fallback strategy"
            },
            {
              "id": "c",
              "text": "Continue with the original plan without changes"
            },
            {
              "id": "d",
              "text": "Immediately cease all activity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective adaptive response involves pausing to assess new information and using pre-planned contingencies, rather than reacting impulsively."
        },
        {
          "id": "marketing-management-601-l06-q6",
          "text": "A key component of a strong Decision Memo, as practiced in the case analysis, is:",
          "skillId": "mm601-casework-memo",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the positive aspects of the recommendation"
            },
            {
              "id": "b",
              "text": "A section that explicitly identifies risks and proposes mitigation steps"
            },
            {
              "id": "c",
              "text": "Keeping the underlying assumptions secret to appear more confident"
            },
            {
              "id": "d",
              "text": "A recommendation without any supporting data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A robust decision memo must transparently address potential risks and outline how they will be managed."
        },
        {
          "id": "marketing-management-601-l06-q7",
          "text": "When managing a simulated project, 'traceability' refers to:",
          "skillId": "mm601-simulation-governance",
          "options": [
            {
              "id": "a",
              "text": "The ability to make decisions without anyone knowing who made them"
            },
            {
              "id": "b",
              "text": "The practice of documenting decisions, their rationale, and their outcomes for later review"
            },
            {
              "id": "c",
              "text": "Changing performance metrics halfway through the project"
            },
            {
              "id": "d",
              "text": "The final profit number, regardless of how it was achieved"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability is crucial for accountability and learning; it means maintaining a clear, auditable record of the decision-making process."
        },
        {
          "id": "marketing-management-601-l06-q8",
          "text": "The primary goal of the 'Tradeoff Framing' exercise in the case analysis is to:",
          "skillId": "mm601-casework-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "Prove that one option is perfect and has no downsides"
            },
            {
              "id": "b",
              "text": "Systematically compare options across multiple important dimensions to make the costs and benefits explicit"
            },
            {
              "id": "c",
              "text": "Choose the cheapest option regardless of other factors"
            },
            {
              "id": "d",
              "text": "Avoid difficult decisions by finding a compromise that is mediocre in all dimensions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tradeoff framing is not about finding a perfect solution, but about making an informed choice by clearly understanding what is gained and lost with each option."
        }
      ]
    },
    {
      "id": "marketing-management-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "marketing-management-601-l07-a1",
          "type": "visual_map",
          "title": "Stakeholder Impact Map",
          "content": "A visual diagram mapping how a business decision's benefits, costs, and risks are distributed across different stakeholder groups over time."
        },
        {
          "id": "marketing-management-601-l07-a2",
          "type": "checklist",
          "title": "Responsible Leadership Checklist",
          "content": "A checklist for evaluating a strategic decision against ethical guidelines, policy compliance, and accountability principles."
        }
      ],
      "chunks": [
        {
          "id": "marketing-management-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to map the distribution of benefits, burdens, and delayed effects of a marketing decision across various stakeholder groups. Understanding these dynamics is crucial for making ethical and sustainable choices that consider the full spectrum of impact."
        },
        {
          "id": "marketing-management-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the concept of accountability architecture. This involves designing systems that integrate decision traceability, clear review rights, and defined remediation obligations into your strategies. This framework helps ensure that all decisions are made transparently and responsibly."
        },
        {
          "id": "marketing-management-601-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Framework",
          "content": "This recap introduces a practical framework for responsible leadership. It connects performance outcomes with ethical considerations, ensures policy compliance, and builds resilience into your leadership practices. This framework serves as a guide for making sound, defensible decisions."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-601-l07-f1",
          "front": "What is impact distribution?",
          "back": "The analysis of how the positive and negative outcomes of a decision are allocated across different populations and over various timescales."
        },
        {
          "id": "marketing-management-601-l07-f2",
          "front": "What is decision traceability?",
          "back": "An auditable record connecting a decision to the evidence, rationale, and ownership behind it."
        },
        {
          "id": "marketing-management-601-l07-f3",
          "front": "What is responsible leadership?",
          "back": "A decision-making approach that balances performance goals with accountability and ethical obligations to all stakeholders."
        }
      ]
    },
    {
      "id": "marketing-management-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "marketing-management-601-l08-a1",
          "type": "defense_brief_template",
          "title": "Capstone Defense Brief Template",
          "content": "A structured template for assembling a final recommendation, including sections for key claims, supporting evidence, uncertainty analysis, and remediation plans."
        }
      ],
      "chunks": [
        {
          "id": "marketing-management-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this collaborative activity, you will construct a comprehensive defense brief for a strategic recommendation. The brief must include key claims supported by evidence, an honest assessment of uncertainties, and proposed pathways for remediation. This exercise hones the critical thinking and communication skills essential for executive leadership."
        },
        {
          "id": "marketing-management-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session is a rehearsal for a high-stakes review. You will practice responding to critiques from the perspective of technical experts, governance bodies, and external stakeholders. This rehearsal is crucial for building the confidence needed to defend complex positions in a professional setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "marketing-management-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendation to a simulated panel of experts who will conduct an adversarial cross-examination of your analysis and conclusions."
        }
      ]
    }
  ]
};
