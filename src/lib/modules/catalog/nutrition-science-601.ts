import type { LearningModule } from "@/lib/modules/types";

export const nutrition_science_601_Module: LearningModule = {
  "id": "nutrition-science-601",
  "title": "Nutrition Science Research and Leadership",
  "description": "Post-401 specialization module in Nutrition Science, focused on metabolic evidence interpretation, intervention protocol design, outcome and adherence analytics, and nutrition equity governance with case simulation and defense-oriented assessment.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nutrition",
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
    "Apply advanced methods for metabolic evidence interpretation in high-constraint environments",
    "Design robust execution systems for intervention protocol design",
    "Evaluate interventions in outcome and adherence analytics with research-grade evidence standards",
    "Operationalize nutrition equity governance with transparent accountability loops",
    "Lead cross-functional review processes with explicit tradeoff reasoning",
    "Defend capstone recommendations under expert critique"
  ],
  "lessons": [
    {
      "id": "nutrition-science-601-l01",
      "title": "Advanced Foundations in Nutrition Science",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nutrition-science-601-l01-a1",
          "type": "image",
          "title": "Metabolic Pathways Diagram",
          "content": "A visual chart illustrating key metabolic pathways and their control points, used for interpreting evidence."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Decision Boundaries",
          "content": "This lesson explores the advanced boundaries of Nutrition Science, focusing on the key control points for interpreting metabolic evidence and designing science-based intervention protocols. You will learn to navigate the complexities of the field and make informed, defensible decisions.\nWhy this matters: Clearly defining scope and decision boundaries helps you connect core principles to practical application, forcing a rigorous evaluation of tradeoffs, assumptions, and verification criteria."
        },
        {
          "id": "nutrition-science-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Structure",
          "content": "Here, you will practice mapping causal pathways and identifying ranges of uncertainty before planning interventions. Understanding how different factors influence each other and recognizing where uncertainties lie is critical for creating effective and resilient nutrition strategies."
        },
        {
          "id": "nutrition-science-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap emphasizes linking claims to measurable indicators. We will review the importance of backing assertions with observable data, declaring uncertainties explicitly, and establishing review checkpoints to ensure findings are reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-601-l01-f1",
          "front": "Metabolic Evidence Interpretation",
          "back": "The discipline of analyzing metabolic data, requiring explicit constraints and measurable assumptions to draw valid conclusions."
        },
        {
          "id": "nutrition-science-601-l01-f2",
          "front": "Intervention Protocol Design",
          "back": "The architecture for executing a nutrition plan, which determines its repeatability, scalability, and performance under stress."
        },
        {
          "id": "nutrition-science-601-l01-f3",
          "front": "Outcome and Adherence Analytics",
          "back": "The evaluation discipline for determining an intervention's true impact and side effects, separating correlation from causation."
        }
      ]
    },
    {
      "id": "nutrition-science-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "nutrition-science-601-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "A structured template for designing, documenting, and stress-testing specialized nutrition science workflows."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows for specific nutrition science tasks. You will then stress-test these workflows against challenging conditions to ensure their robustness and identify potential failure points."
        },
        {
          "id": "nutrition-science-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Design",
          "content": "This recap reviews the essential control elements for any workflow: clear gate criteria to proceed, defined rollback conditions to reverse course, and specific escalation thresholds for seeking oversight. These components ensure your interventions are well-structured and adaptable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest system effect.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits impact under adverse outcomes"
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
      "id": "nutrition-science-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-601-l03-a1",
          "type": "practice",
          "title": "Pre-Quiz Concept Checklist",
          "content": "Review key concepts like evidence thresholds, causal mapping, and control gates before starting the assessment."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-601-l03-q1",
          "text": "Which practice most improves the decision quality of metabolic evidence interpretation?",
          "skillId": "nutrition-science-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without baselines or constraints"
            },
            {
              "id": "b",
              "text": "Define assumptions, stress-test scenarios, and monitor indicators"
            },
            {
              "id": "c",
              "text": "Ignore edge conditions and outliers"
            },
            {
              "id": "d",
              "text": "Prioritize speed over evidence in all cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions require explicit assumptions, proactive stress-testing, and disciplined measurement to be considered robust."
        },
        {
          "id": "nutrition-science-601-l03-q2",
          "text": "At an advanced level, high-quality execution for intervention protocol design requires:",
          "skillId": "nutrition-science-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoints, and threshold-based escalation"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc approvals"
            },
            {
              "id": "c",
              "text": "No retrospective or learning cycle"
            },
            {
              "id": "d",
              "text": "Untracked process variation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution depends on clear ownership, predefined control points, and rules for escalation."
        },
        {
          "id": "nutrition-science-601-l03-q3",
          "text": "A defensible approach to outcome and adherence analytics includes:",
          "skillId": "nutrition-science-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotal claims without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult or non-adherent cases from analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis requires comparison against a baseline, a thorough check for unintended side-effects, and explicit reporting of uncertainty."
        },
        {
          "id": "nutrition-science-601-l03-q4",
          "text": "Mature nutrition equity governance systems connect:",
          "skillId": "nutrition-science-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language without any enforcement mechanism"
            },
            {
              "id": "c",
              "text": "Ambitious targets without clear ownership"
            },
            {
              "id": "d",
              "text": "Operations without accountability logs or audit trails"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is defined by the linkage between policy goals, how they are measured and controlled, and what happens when they are not met."
        }
      ]
    },
    {
      "id": "nutrition-science-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nutrition-science-601-l04-a1",
          "type": "mnemonic",
          "title": "Tradeoff Matrix Criteria: PREF",
          "content": "Use 'PREF' to remember the core dimensions for evaluating options: Performance, Reliability, Equity, and Feasibility."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-601-l04-c1",
          "kind": "example",
          "title": "Case Context: Clinical-Community Nutrition Strategy",
          "content": "We will analyze a clinical-community nutrition strategy designed to balance metabolic outcomes, patient adherence, and food access realities. You will practice identifying constraints, risks, and governance boundaries to understand how nutrition science is applied in complex, real-world situations."
        },
        {
          "id": "nutrition-science-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will use a tradeoff matrix to systematically evaluate different intervention options. This tool helps assess each option across key dimensions like performance, reliability, equity, and feasibility, enabling more structured and defensible decision-making."
        },
        {
          "id": "nutrition-science-601-l04-c3",
          "kind": "recap",
          "title": "Failure and Recovery Design",
          "content": "This recap focuses on proactive risk management. We will discuss how to map potential 'failure signatures' (early warning signs) to pre-planned mitigation actions and measurable 'recovery triggers' that initiate a corrective response."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-601-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured decision-making tool used to score competing options against a common set of weighted criteria."
        },
        {
          "id": "nutrition-science-601-l04-f2",
          "front": "Failure Signature",
          "back": "A specific, recurring pattern of indicators that signals a known class of risk is materializing."
        },
        {
          "id": "nutrition-science-601-l04-f3",
          "front": "Recovery Trigger",
          "back": "A pre-defined, measurable threshold that, when crossed, automatically initiates a corrective action or contingency plan."
        }
      ]
    },
    {
      "id": "nutrition-science-601-l05",
      "title": "Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "nutrition-science-601-l05-a1",
          "type": "practice",
          "title": "Simulation Parameter Guide",
          "content": "A guide outlining how to define and configure scenarios, constraints, metrics, and escalation logic for testing interventions."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-601-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, you will configure a simulation to test a proposed intervention. This involves defining the scenario, setting constraints, selecting key performance metrics, and establishing the escalation logic for when things go wrong."
        },
        {
          "id": "nutrition-science-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "This recap covers the process of reviewing simulation outcomes. We will analyze the intended gains, unintended side effects, and overall compliance with governance standards. This reflective practice is essential for adapting strategies and driving continuous improvement.\nWhy this matters: The debrief and adaptation cycle is where learning solidifies, connecting simulation results to better real-world decisions by highlighting tradeoffs and verifying assumptions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across metabolic evidence interpretation and nutrition equity governance priorities.",
          "instructions": [
            "Define your primary objective and boundary conditions first.",
            "Record the near-term and long-term tradeoffs of your chosen path.",
            "Specify the metrics and triggers that will validate your recommendation."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-601-l06",
      "title": "Checkpoint 2: Application and Governance",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-601-l06-a1",
          "type": "practice",
          "title": "Case Analysis Review Sheet",
          "content": "A checklist to confirm you can identify tradeoffs, failure signatures, and recovery triggers in a case study."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-601-l06-q1",
          "text": "In a case study involving a community with limited food access, what is the first step in using a tradeoff matrix to compare interventions?",
          "skillId": "nutrition-science-601-skill-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Choose the cheapest option immediately"
            },
            {
              "id": "b",
              "text": "Define the evaluation criteria, such as equity, feasibility, and impact"
            },
            {
              "id": "c",
              "text": "Simulate the outcome without any defined criteria"
            },
            {
              "id": "d",
              "text": "Interview only the most successful participants"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is useless without first defining the clear, consistent criteria against which all options will be scored."
        },
        {
          "id": "nutrition-science-601-l06-q2",
          "text": "When stress-testing an intervention protocol in a simulation, what does a 'rollback trigger' help evaluate?",
          "skillId": "nutrition-science-601-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "The system's ability to detect a problem and limit the damage"
            },
            {
              "id": "b",
              "text": "The maximum possible positive outcome"
            },
            {
              "id": "c",
              "text": "The long-term popularity of the intervention"
            },
            {
              "id": "d",
              "text": "The initial cost of setting up the protocol"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A rollback trigger is a pre-defined condition that stops a failing process, helping to test and validate the safety and resilience of a system."
        },
        {
          "id": "nutrition-science-601-l06-q3",
          "text": "Identifying a 'failure signature' during a case analysis is most useful for designing what?",
          "skillId": "nutrition-science-601-skill-risk-mitigation",
          "options": [
            {
              "id": "a",
              "text": "A marketing campaign"
            },
            {
              "id": "b",
              "text": "Proactive monitoring dashboards and mitigation plans"
            },
            {
              "id": "c",
              "text": "The final report's success narrative"
            },
            {
              "id": "d",
              "text": "The budget for the next phase"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A failure signature is an early warning sign. Recognizing it allows you to build systems that monitor for those signs and trigger a pre-planned response."
        },
        {
          "id": "nutrition-science-601-l06-q4",
          "text": "A case analysis reveals an intervention improves metabolic outcomes for one group but worsens food security for another. This highlights a critical tradeoff in which dimension?",
          "skillId": "nutrition-science-601-skill-equity-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "Equity"
            },
            {
              "id": "b",
              "text": "Feasibility"
            },
            {
              "id": "c",
              "text": "Performance"
            },
            {
              "id": "d",
              "text": "Reliability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Equity concerns the fair distribution of benefits and burdens. When one group benefits at another's expense, it is a primary equity tradeoff."
        }
      ]
    },
    {
      "id": "nutrition-science-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nutrition-science-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing how an intervention's benefits and burdens are distributed across different stakeholder groups over time."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to map how benefits, costs, and risks are distributed among different stakeholders over time. Understanding this distribution is vital for assessing an intervention's true impact and ensuring equitable, responsible decision-making."
        },
        {
          "id": "nutrition-science-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we will explore the architecture of accountability in governance design. This includes mechanisms for decision traceability, rights of review, and obligations to remediate. This knowledge is crucial for building trust and ensuring responsibility in nutrition science."
        },
        {
          "id": "nutrition-science-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap introduces a checklist for responsible leadership, connecting technical outcomes to policy adherence, ethical principles, and system resilience. This framework ensures that decisions are not just effective, but also accountable and just.\nWhy this matters: A leadership checklist provides a practical tool to translate abstract principles of governance and ethics into concrete actions and verifiable decisions."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (positive and negative) are allocated across different populations and timescales."
        },
        {
          "id": "nutrition-science-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of a decision, including the evidence used, the owners involved, and the rationale behind it."
        },
        {
          "id": "nutrition-science-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that systematically balances performance objectives with accountability, ethical duties, and resilience."
        }
      ]
    },
    {
      "id": "nutrition-science-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nutrition-science-601-l08-a1",
          "type": "practice",
          "title": "Capstone Defense Rubric",
          "content": "A scoring guide detailing the criteria for a successful defense, including claim strength, evidence quality, and tradeoff analysis."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive lab, you will assemble a defense brief for your capstone recommendation. This involves formulating a clear claim, substantiating it with evidence, defining the uncertainty bounds, and outlining potential remediation pathways. This process hones the critical thinking and communication skills vital for professional advocacy.\nWhy this matters: Assembling a defense brief forces you to structure your argument logically, anticipate critiques, and present your case with clarity and rigor, a crucial leadership skill."
        },
        {
          "id": "nutrition-science-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this rehearsal, you will practice responding to challenges from an expert panel. Scenarios will include technical deep-dives, governance inquiries, and stakeholder critiques. This practice builds confidence and prepares you to engage with diverse perspectives in a professional setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your specialization recommendations under adversarial cross-examination from a simulated expert panel."
        }
      ]
    }
  ]
};
