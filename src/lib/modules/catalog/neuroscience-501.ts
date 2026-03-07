import type { LearningModule } from "@/lib/modules/types";

export const neuroscience_501_Module: LearningModule = {
  "id": "neuroscience-501",
  "title": "Neuroscience Specialization Studio",
  "description": "Post-401 specialization in Neuroscience, focused on neural systems and circuit modeling, cognition-behavior experiment design, clinical-neuro translational reasoning, and neuroethics and societal impact governance through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "neuroscience",
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
    "Apply advanced methods for neural systems and circuit modeling in high-constraint environments.",
    "Design robust systems for cognition-behavior experiment design with measurable control gates.",
    "Evaluate interventions in clinical-neuro translational reasoning with research-grade rigor.",
    "Operationalize neuroethics and societal impact governance with accountable governance and escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "neuroscience-501-l01",
      "title": "Advanced Foundations of Neuroscience",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-501-l01-a1",
          "type": "image",
          "title": "Neural Circuit Modeling Canvas",
          "content": "A diagram of a neural circuit model with highlighted variables for assumptions, constraints, and measurable indicators."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces the advanced boundaries of neuroscience, focusing on how neural systems operate and interact within circuits. We will establish methods for designing experiments that link cognition to behavior, providing a framework for understanding how brain processes shape decisions and experiences."
        },
        {
          "id": "neuroscience-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learners will map causal pathways to identify how different factors influence one another. This section covers modeling uncertainty ranges and system dependencies, which is crucial foundational knowledge for planning and evaluating interventions."
        },
        {
          "id": "neuroscience-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap emphasizes that all claims must be supported by measurable indicators. We will review the importance of establishing confidence bounds and review checkpoints to ensure all findings are reliable, valid, and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-501-l01-f1",
          "front": "Neural Systems and Circuit Modeling",
          "back": "A specialization requiring explicit assumptions and measurable constraints to ensure model validity."
        },
        {
          "id": "neuroscience-501-l01-f2",
          "front": "Cognition-Behavior Experiment Design",
          "back": "An experimental architecture that must be designed for reliability and validity under stress conditions."
        },
        {
          "id": "neuroscience-501-l01-f3",
          "front": "Clinical-Neuro Translational Reasoning",
          "back": "An evaluation discipline for identifying true therapeutic gains versus hidden costs or side effects."
        }
      ]
    },
    {
      "id": "neuroscience-501-l02",
      "title": "Neuroscience Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "neuroscience-501-l02-a1",
          "type": "practice",
          "title": "Workflow Stress Test",
          "content": "A flowchart of an experimental workflow, showing checkpoints, rollback triggers, and escalation paths that are tested against simulated adverse conditions."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this interactive lab, learners will design specialized research workflows. They will then stress-test these workflows against challenging scenarios to evaluate their robustness and identify potential failure points, ensuring methods are effective under pressure."
        },
        {
          "id": "neuroscience-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap reviews how to incorporate control gates into workflows. Key components include progress-monitoring checkpoints, rollback criteria for reverting failed steps, and threshold-based escalation pathways for addressing significant deviations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-501-l02-act1",
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
      "id": "neuroscience-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-501-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-501-l03-q1",
          "text": "Which practice most improves the decision quality of neural systems and circuit modeling?",
          "skillId": "neuroscience-501-skill-core",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit and measurable."
        },
        {
          "id": "neuroscience-501-l03-q2",
          "text": "At the 501 level, strong execution for cognition-behavior experiment design requires:",
          "skillId": "neuroscience-501-skill-execution",
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
          "explanation": "Reliable advanced execution needs clear ownership and threshold-driven governance for checkpoints and escalations."
        },
        {
          "id": "neuroscience-501-l03-q3",
          "text": "A defensible approach to clinical-neuro translational reasoning includes:",
          "skillId": "neuroscience-501-skill-eval",
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
          "explanation": "Defensible analysis combines comparative baselines, comprehensive side-effect checks, and explicit disclosure of uncertainty."
        },
        {
          "id": "neuroscience-501-l03-q4",
          "text": "Mature governance systems for neuroethics connect:",
          "skillId": "neuroscience-501-skill-governance",
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
          "explanation": "Governance maturity is the operational link between ethical intent, measurable controls, and clear corrective action pathways."
        }
      ]
    },
    {
      "id": "neuroscience-501-l04",
      "title": "Advanced Case Analysis in Neuroscience",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Decision Matrix",
          "content": "A decision matrix comparing two clinical interventions across safety, reliability, cost, equity, and governance dimensions."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson frames complex cases that highlight the competing constraints in neural systems modeling and clinical-neuro translational reasoning. We will deconstruct scenarios to understand how theoretical knowledge translates into practical, high-stakes applications."
        },
        {
          "id": "neuroscience-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Learners will practice comparing different strategic options by evaluating them across multiple dimensions, including safety, efficacy, cost, equity, and governance. This exercise hones the ability to articulate and justify complex trade-offs in decision-making."
        },
        {
          "id": "neuroscience-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "This recap introduces a structured format for decision memos. Each recommendation must be supported by explicit assumptions, verifiable evidence, risk controls, and pre-defined fallback plans to ensure decisions are well-informed and rigorously considered."
        }
      ]
    },
    {
      "id": "neuroscience-501-l05",
      "title": "Neuroscience Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "neuroscience-501-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "A screenshot of the simulation interface showing real-time dashboards for performance metrics and governance compliance."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive simulation, learners operate scenario controls to manage a developing situation, balancing performance targets with governance constraints. This hands-on experience is crucial for navigating complex scenarios in real-time."
        },
        {
          "id": "neuroscience-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing effective responses within a live scenario. Learners will practice updating control gates and intervention strategies without losing traceability or accountability, ensuring all actions are transparent and auditable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure neuroscience scenario and tune controls under uncertainty to achieve the best possible outcome while adhering to ethical and safety protocols."
        }
      ]
    },
    {
      "id": "neuroscience-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "neuroscience-501-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-501-l06-q1",
          "text": "When analyzing a complex neuroscience case study, what is the most critical first step for a defensible recommendation?",
          "skillId": "neuroscience-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Immediately select the most familiar intervention"
            },
            {
              "id": "b",
              "text": "Establish a clear baseline, explicit constraints, and measurable success criteria"
            },
            {
              "id": "c",
              "text": "Focus only on the potential benefits, ignoring risks"
            },
            {
              "id": "d",
              "text": "Gather stakeholder opinions without supporting data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with a structured problem definition, including baselines, constraints, and clear targets."
        },
        {
          "id": "neuroscience-501-l06-q2",
          "text": "In a high-fidelity simulation of a clinical trial, what does an effective 'adaptive response' primarily involve?",
          "skillId": "neuroscience-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Adjusting the experimental protocol based on real-time data and pre-set rules"
            },
            {
              "id": "b",
              "text": "Strictly adhering to the initial plan regardless of incoming data"
            },
            {
              "id": "c",
              "text": "Halting the simulation at the first sign of an anomaly"
            },
            {
              "id": "d",
              "text": "Changing the primary success metric to match observed outcomes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "An adaptive response involves dynamically adjusting strategy based on real-time feedback, within a governed framework."
        },
        {
          "id": "neuroscience-501-l06-q3",
          "text": "A case study presents two potential neuro-interventions. A rigorous evaluation requires prioritizing:",
          "skillId": "neuroscience-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "The intervention with the most advanced technology"
            },
            {
              "id": "b",
              "text": "A multi-dimensional tradeoff analysis of efficacy, safety, cost, and equity"
            },
            {
              "id": "c",
              "text": "The option with the lowest short-term cost"
            },
            {
              "id": "d",
              "text": "A single performance metric, such as speed of effect"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation moves beyond single-metric optimization to a balanced analysis of competing factors and trade-offs."
        },
        {
          "id": "neuroscience-501-l06-q4",
          "text": "During a simulated crisis scenario, what action demonstrates mature decision-making?",
          "skillId": "neuroscience-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Making a unilateral decision without consulting the team or protocols"
            },
            {
              "id": "b",
              "text": "Using pre-defined escalation pathways and communicating uncertainty clearly"
            },
            {
              "id": "c",
              "text": "Waiting for the crisis to resolve on its own"
            },
            {
              "id": "d",
              "text": "Withholding information to avoid causing panic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature decision-making under pressure relies on established governance protocols and transparent communication about uncertainty."
        }
      ]
    },
    {
      "id": "neuroscience-501-l07",
      "title": "Neuroscience Governance and Societal Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "neuroscience-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "An infographic illustrating the distribution of benefits, burdens, and risks of a new neurotechnology across different stakeholder groups."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson focuses on mapping the distribution of benefits, burdens, and delayed effects of neuroscientific advances across different stakeholder groups. This analysis is critical for understanding the broader ethical and societal implications of our work."
        },
        {
          "id": "neuroscience-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will explore the concept of accountability architecture, which integrates decision traceability, stakeholder review rights, and remediation obligations. This framework is essential for establishing and maintaining ethical governance in neuroscience research and application."
        },
        {
          "id": "neuroscience-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides a checklist designed to link research outcomes with ethical considerations, policy adherence, and resilient leadership. It serves as a tool for reflecting on the responsibilities of a leader in the field of neuroscience."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The allocation of outcomes (benefits, risks, costs) across different populations and timescales."
        },
        {
          "id": "neuroscience-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of the evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "neuroscience-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making that balances performance, accountability, and ethical obligations."
        }
      ]
    },
    {
      "id": "neuroscience-501-l08",
      "title": "Neuroscience Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "neuroscience-501-l08-a1",
          "type": "practice",
          "title": "Capstone Defense Brief Template",
          "content": "A structured template for the capstone defense brief, with sections for the core thesis, supporting evidence, uncertainty analysis, and risk mitigation plans."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this collaborative activity, learners will assemble a defense brief for their capstone project. The brief must integrate their core thesis, supporting evidence, an honest assessment of uncertainty, and proposed mitigation strategies for potential risks."
        },
        {
          "id": "neuroscience-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This recap involves rehearsing responses to critiques from a simulated expert panel, representing scientific, governance, and public stakeholders. This practice prepares learners to defend their work clearly, confidently, and persuasively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination from a simulated panel of experts."
        }
      ]
    }
  ]
};
