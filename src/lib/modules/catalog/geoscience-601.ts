import type { LearningModule } from "@/lib/modules/types";

export const geoscience_601_Module: LearningModule = {
  "id": "geoscience-601",
  "title": "Geoscience Research and Leadership",
  "description": "A post-401 specialization module in Geoscience, focused on earth system diagnostics, hazard forecasting design, resource-risk tradeoff analysis, and stewardship governance with case simulation and defense-oriented assessment.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geoscience",
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
    "Apply advanced methods for earth system diagnostics in high-constraint environments.",
    "Design robust execution systems for hazard forecasting.",
    "Evaluate resource-risk tradeoffs using research-grade evidence standards.",
    "Operationalize stewardship governance with transparent accountability loops.",
    "Lead cross-functional reviews with explicit tradeoff reasoning.",
    "Defend capstone recommendations under expert critique."
  ],
  "lessons": [
    {
      "id": "geoscience-601-l01",
      "title": "Advanced Geoscience Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-601-l01-a1",
          "type": "image",
          "title": "Earth System Model",
          "content": "Diagram showing interconnected earth systems (atmosphere, hydrosphere, lithosphere, biosphere) with key control points and feedback loops highlighted."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Decision Boundaries",
          "content": "This lesson explores the advanced boundaries defining the field of Geoscience. We will identify the critical control points for diagnosing earth systems and designing effective hazard forecasting strategies, providing insight into how scientists assess and manage risks related to natural events."
        },
        {
          "id": "geoscience-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Structure",
          "content": "Learners will map causal pathways and quantify ranges of uncertainty before planning interventions. This process is crucial for understanding the relationships between variables and the potential impacts of actions, ensuring informed decisions."
        },
        {
          "id": "geoscience-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap connects scientific claims to measurable indicators. We will review how uncertainty is formally declared and why review checkpoints are vital for ensuring that findings are reliable and trustworthy."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-601-l01-f1",
          "front": "Earth System Diagnostics",
          "back": "A specialization requiring explicit constraints and measurable assumptions to analyze complex planetary systems."
        },
        {
          "id": "geoscience-601-l01-f2",
          "front": "Hazard Forecasting Design",
          "back": "The architecture of an execution system that determines its repeatability and reliability under stress."
        },
        {
          "id": "geoscience-601-l01-f3",
          "front": "Resource-Risk Tradeoff Analysis",
          "back": "An evaluation discipline for determining the true impact and unintended side effects of an intervention."
        }
      ]
    },
    {
      "id": "geoscience-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "geoscience-601-l02-a1",
          "type": "image",
          "title": "Workflow Stress Test",
          "content": "A visualization of a geoscience workflow with potential failure points (e.g., data corruption, model drift) highlighted for stress-testing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, learners will design specialized workflows for specific geoscience challenges. They will then stress-test these workflows against adversarial conditions to ensure their effectiveness and resilience in real-world scenarios."
        },
        {
          "id": "geoscience-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Design",
          "content": "This recap focuses on integrating key control elements into the workflow design, including gate criteria, rollback conditions, and escalation thresholds. These components are essential for creating robust systems that can adapt and ensure safety."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each specialist control with its strongest system effect.",
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
      "id": "geoscience-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-601-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review the concepts of earth system diagnostics, hazard forecasting, and tradeoff analysis before starting."
        }
      ],
      "questions": [
        {
          "id": "geoscience-601-l03-q1",
          "text": "Which practice most improves the decision quality of earth system diagnostics?",
          "skillId": "geoscience-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without baselines or constraints"
            },
            {
              "id": "b",
              "text": "Defining assumptions, stress-testing scenarios, and monitoring key indicators"
            },
            {
              "id": "c",
              "text": "Ignoring edge conditions and outliers"
            },
            {
              "id": "d",
              "text": "Prioritizing speed over evidence in all cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions require explicit assumptions, rigorous stress-testing, and disciplined measurement."
        },
        {
          "id": "geoscience-601-l03-q2",
          "text": "At an advanced level, high-quality execution for hazard forecasting design requires:",
          "skillId": "geoscience-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear owner mapping, defined checkpoints, and threshold-based escalation"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc approvals"
            },
            {
              "id": "c",
              "text": "Eliminating retrospective cycles"
            },
            {
              "id": "d",
              "text": "Allowing untracked process variation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution depends on clear ownership and threshold-driven control points."
        },
        {
          "id": "geoscience-601-l03-q3",
          "text": "A defensible approach to resource-risk tradeoff analysis includes:",
          "skillId": "geoscience-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Relying on anecdotal claims without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect analysis, and explicit uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing evaluation criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult or inconvenient cases from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis requires comparison against a baseline, checking for side-effects, and explicitly reporting uncertainty."
        },
        {
          "id": "geoscience-601-l03-q4",
          "text": "Mature stewardship governance systems effectively connect:",
          "skillId": "geoscience-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and clear remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language that has no enforcement mechanism"
            },
            {
              "id": "c",
              "text": "Performance targets without assigned ownership"
            },
            {
              "id": "d",
              "text": "Operations that lack accountability logs"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is defined by the linkage between policy, measurement, and corrective execution."
        }
      ]
    },
    {
      "id": "geoscience-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A sample matrix comparing three intervention options across criteria like Cost, Public Safety, Environmental Impact, and Implementation Time."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-601-l04-c1",
          "kind": "example",
          "title": "Case Context: Regional Geoscience Board",
          "content": "This case analysis examines a regional geoscience board tasked with coordinating responses to seismic, flood, and groundwater risks. Learners will identify the constraints, stakeholder interests, and governance boundaries that shape the board's decisions."
        },
        {
          "id": "geoscience-601-l04-c2",
          "kind": "concept",
          "title": "Applying the Tradeoff Matrix",
          "content": "We will evaluate different response options using a tradeoff matrix. This tool helps weigh multiple dimensions such as performance, reliability, equity, and feasibility, which is crucial for making balanced decisions that account for various stakeholder needs."
        },
        {
          "id": "geoscience-601-l04-c3",
          "kind": "recap",
          "title": "Failure and Recovery Design",
          "content": "This recap focuses on mapping potential failure signatures to specific mitigation actions and measurable recovery triggers. Understanding these connections is essential for developing effective strategies that enhance community resilience."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-601-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured scoring model for comparing competing decision pathways against a consistent set of criteria."
        },
        {
          "id": "geoscience-601-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring pattern of indicators that signals a known class of risk is materializing."
        },
        {
          "id": "geoscience-601-l04-f3",
          "front": "Recovery Trigger",
          "back": "A measurable threshold that, when crossed, automatically initiates a pre-planned corrective action."
        }
      ]
    },
    {
      "id": "geoscience-601-l05",
      "title": "Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "geoscience-601-l05-a1",
          "type": "practice",
          "title": "Simulation Design Canvas",
          "content": "A template for learners to define their simulation's scenario, key variables, success metrics, and escalation triggers."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-601-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, learners will configure scenarios, constraints, metrics, and escalation logic for intervention tests. This hands-on experience builds skill in designing simulations that can effectively test geoscience strategies."
        },
        {
          "id": "geoscience-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "This recap involves reviewing simulation outcomes to identify intended gains, unintended side effects, and compliance with governance standards. This reflection is essential for refining interventions and making necessary adjustments."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across earth system diagnostics and stewardship governance priorities.",
          "instructions": [
            "Define your objective and boundary conditions first.",
            "Record both near-term and long-term tradeoffs.",
            "Specify the metrics and triggers that would validate your recommended path."
          ]
        }
      ]
    },
    {
      "id": "geoscience-601-l06",
      "title": "Checkpoint 2: Case Analysis and Simulation",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-601-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review the concepts of tradeoff matrices, failure signatures, and simulation design before starting."
        }
      ],
      "questions": [
        {
          "id": "geoscience-601-l06-q1",
          "text": "When using a tradeoff matrix for case analysis, what is the primary goal?",
          "skillId": "geoscience-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To select the option with the lowest initial cost"
            },
            {
              "id": "b",
              "text": "To systematically evaluate multiple options against a consistent set of weighted criteria"
            },
            {
              "id": "c",
              "text": "To confirm a pre-selected favorite option"
            },
            {
              "id": "d",
              "text": "To find the fastest possible solution to implement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured, objective way to compare options across multiple important dimensions, not just one."
        },
        {
          "id": "geoscience-601-l06-q2",
          "text": "In a regional flood management plan, which of the following best represents a 'failure signature'?",
          "skillId": "geoscience-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A single, isolated sensor malfunction"
            },
            {
              "id": "b",
              "text": "A pattern of rising upstream river levels combined with communication outages, which has previously preceded levee breaches"
            },
            {
              "id": "c",
              "text": "A press release announcing the success of the plan after a minor storm"
            },
            {
              "id": "d",
              "text": "The annual budget report for the management board"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A failure signature is a recurring pattern of indicators that warns of an impending system failure."
        },
        {
          "id": "geoscience-601-l06-q3",
          "text": "What is the function of a 'recovery trigger' in a hazard response simulation?",
          "skillId": "geoscience-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To start the simulation"
            },
            {
              "id": "b",
              "text": "To automatically initiate a pre-defined corrective action once a specific, measurable threshold is crossed"
            },
            {
              "id": "c",
              "text": "To generate the final report after the simulation ends"
            },
            {
              "id": "d",
              "text": "To randomly introduce errors into the system"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A recovery trigger operationalizes a response, moving from monitoring to action based on pre-set conditions."
        },
        {
          "id": "geoscience-601-l06-q4",
          "text": "Your simulation shows a proposed coastal barrier prevents flooding but increases erosion 5km down the coast. This erosion is an example of a:",
          "skillId": "geoscience-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Primary benefit"
            },
            {
              "id": "b",
              "text": "Simulation error"
            },
            {
              "id": "c",
              "text": "Side effect that must be included in the tradeoff analysis"
            },
            {
              "id": "d",
              "text": "Boundary condition"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A defensible analysis must account for unintended consequences (side effects), not just the primary intended effects."
        }
      ]
    },
    {
      "id": "geoscience-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual map showing how a major geoscience decision (e.g., building a dam) affects different groups (farmers, city residents, wildlife) over short and long-term horizons."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This section focuses on mapping the distribution of benefits and burdens from a geoscience intervention across different stakeholder groups and time horizons. This analysis is critical for understanding the equity and social impact of decisions."
        },
        {
          "id": "geoscience-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will explore the architecture of accountability within governance design. This includes integrating decision traceability, review rights, and remediation obligations to ensure responsible and transparent decision-making in geoscience."
        },
        {
          "id": "geoscience-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "The final checklist connects technical outcomes with policy compliance, ethical considerations, and adaptive capacity. It serves as a tool to ensure all aspects of responsible leadership in geoscience are addressed."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (both positive and negative) are allocated across different populations and timescales."
        },
        {
          "id": "geoscience-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record connecting a decision to its underlying evidence, ownership, and rationale."
        },
        {
          "id": "geoscience-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making behavior that balances performance with accountability, transparency, and ethical considerations."
        }
      ]
    },
    {
      "id": "geoscience-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-601-l08-a1",
          "type": "practice",
          "title": "Capstone Defense Rubric",
          "content": "A scoring rubric outlining the criteria for a successful defense: clarity of claims, strength of evidence, handling of uncertainty, and robustness of recommendations."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this collaborative activity, learners will construct a comprehensive defense brief. The brief must include a well-supported claim, relevant evidence, clearly stated uncertainty boundaries, and proposed remediation pathways."
        },
        {
          "id": "geoscience-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this rehearsal, learners will practice responding to adversarial questions involving technical details, governance challenges, and stakeholder critiques. This preparation builds confidence for the final capstone defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendation under adversarial cross-examination from a panel of simulated experts."
        }
      ]
    }
  ]
};
