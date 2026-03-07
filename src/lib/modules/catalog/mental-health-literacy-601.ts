import type { LearningModule } from "@/lib/modules/types";

export const mental_health_literacy_601_Module: LearningModule = {
  "id": "mental-health-literacy-601",
  "title": "Mental Health Literacy Research and Leadership",
  "description": "Post-401 specialization module in Mental Health Literacy, focused on risk signal interpretation, support pathway architecture, outcome and safety monitoring, and ethical escalation governance with case simulation and defense-oriented assessment.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mental-health",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for risk signal interpretation in high-constraint environments",
    "Design robust execution systems for support pathway architecture",
    "Evaluate interventions in outcome and safety monitoring with research-grade evidence standards",
    "Operationalize ethical escalation governance with transparent accountability loops",
    "Lead cross-functional review processes with explicit tradeoff reasoning",
    "Defend capstone recommendations under expert critique"
  ],
  "lessons": [
    {
      "id": "mental-health-literacy-601-l01",
      "title": "Advanced Foundations in Mental Health Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l01-a1",
          "type": "image",
          "title": "Decision Boundary Flowchart",
          "content": "A flowchart illustrating key decision points and control gates in a support pathway, distinguishing between in-scope and out-of-scope responsibilities."
        },
        {
          "id": "mental-health-literacy-601-l01-a2",
          "type": "image",
          "title": "Causal Loop Diagram",
          "content": "A diagram showing the interconnected factors influencing a mental health outcome, highlighting feedback loops and points of intervention."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Decision Boundaries",
          "content": "Define the operational scope of a mental health literacy initiative. This involves establishing clear control points for interpreting risk signals and designing the architecture for support pathways to ensure individuals are guided effectively and responsibly."
        },
        {
          "id": "mental-health-literacy-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Structure",
          "content": "Map the causal pathways and quantify the ranges of uncertainty inherent in a mental health context before planning an intervention. Understanding these structures is critical for developing robust, evidence-based strategies and anticipating potential complexities."
        },
        {
          "id": "mental-health-literacy-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Establish the principle that all claims must be linked to measurable indicators. This requires declaring uncertainties explicitly and setting predetermined review checkpoints to ensure interventions are grounded in evidence and can be evaluated rigorously."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-601-l01-f1",
          "front": "Risk Signal Interpretation",
          "back": "A specialization axis requiring explicit constraints and measurable assumptions to differentiate signal from noise."
        },
        {
          "id": "mental-health-literacy-601-l01-f2",
          "front": "Support Pathway Architecture",
          "back": "The execution system that determines the reliability, scalability, and repeatability of a support process under stress."
        },
        {
          "id": "mental-health-literacy-601-l01-f3",
          "front": "Outcome and Safety Monitoring",
          "back": "The evaluation discipline for determining the true impact and unintended side effects of an intervention against a baseline."
        }
      ]
    },
    {
      "id": "mental-health-literacy-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l02-a1",
          "type": "image",
          "title": "Workflow Design Template",
          "content": "A visual template for designing a specialized mental health support workflow, including stages for intake, assessment, intervention, and monitoring."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "Design specialized workflows for complex mental health challenges. Stress-test these workflows against adverse conditions and resource constraints to evaluate their resilience, adaptability, and failure points."
        },
        {
          "id": "mental-health-literacy-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Design",
          "content": "Integrate explicit control gates into the workflow design. This includes defining gate criteria for progression, rollback conditions for adverse events, and escalation thresholds for systemic issues, ensuring a robust and safe operational process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-601-l02-act1",
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
      "id": "mental-health-literacy-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l03-a1",
          "type": "image",
          "title": "Key Concepts Review",
          "content": "A one-page graphic summarizing the core concepts of risk signal interpretation, support pathway architecture, and outcome monitoring."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-601-l03-q1",
          "text": "Which practice most improves risk signal interpretation decision quality?",
          "skillId": "mental-health-literacy-601-skill-core",
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
              "text": "Ignore edge conditions"
            },
            {
              "id": "d",
              "text": "Prioritize speed over evidence always"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions require explicit assumptions and stress-tested measurement discipline."
        },
        {
          "id": "mental-health-literacy-601-l03-q2",
          "text": "At level 601, high-quality execution for support pathway architecture requires:",
          "skillId": "mental-health-literacy-601-skill-execution",
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
              "text": "No retrospective cycle"
            },
            {
              "id": "d",
              "text": "Untracked process variation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution depends on clear ownership and threshold-driven control points."
        },
        {
          "id": "mental-health-literacy-601-l03-q3",
          "text": "A defensible approach to outcome and safety monitoring includes:",
          "skillId": "mental-health-literacy-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotal claims without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis requires comparison, side-effect checks, and explicit uncertainty reporting."
        },
        {
          "id": "mental-health-literacy-601-l03-q4",
          "text": "Mature ethical escalation governance systems connect:",
          "skillId": "mental-health-literacy-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language without enforcement"
            },
            {
              "id": "c",
              "text": "Targets without ownership"
            },
            {
              "id": "d",
              "text": "Operations without accountability logs"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the linkage between policy, measurement, and corrective execution."
        }
      ]
    },
    {
      "id": "mental-health-literacy-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l04-a1",
          "type": "image",
          "title": "Case Study Network Map",
          "content": "An infographic visualizing the collaborative support network, its member institutions, and the flow of information and referrals."
        },
        {
          "id": "mental-health-literacy-601-l04-a2",
          "type": "image",
          "title": "Example Tradeoff Matrix",
          "content": "A sample matrix scoring three different intervention options against criteria like efficacy, cost, equity, and implementation feasibility."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-601-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "Analyze a multi-institutional collaborative support network tasked with developing early intervention and crisis management protocols. Identify the operational constraints, stakeholder risks, and governance boundaries that define the problem space."
        },
        {
          "id": "mental-health-literacy-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "Utilize a tradeoff matrix to systematically evaluate competing intervention options. Assess each option against critical dimensions such as clinical performance, operational reliability, equity of access, and implementation feasibility to inform a defensible recommendation."
        },
        {
          "id": "mental-health-literacy-601-l04-c3",
          "kind": "recap",
          "title": "Failure and Recovery Design",
          "content": "Map potential failure signatures (e.g., low adoption, adverse outcomes) to pre-defined mitigation actions and measurable recovery triggers. This proactive design is crucial for building resilient systems that can adapt when faced with predictable challenges."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-601-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured scoring model for comparing competing decision pathways against a common set of weighted criteria."
        },
        {
          "id": "mental-health-literacy-601-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring pattern of indicators or data points that signals a known class of system risk or failure mode."
        },
        {
          "id": "mental-health-literacy-601-l04-f3",
          "front": "Recovery Trigger",
          "back": "A measurable, pre-defined threshold that, when crossed, automatically initiates a specific corrective action or contingency plan."
        }
      ]
    },
    {
      "id": "mental-health-literacy-601-l05",
      "title": "Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A screenshot of the interactive simulation tool, highlighting the configurable parameters for scenarios, constraints, and metrics."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-601-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "Configure and run simulations to test proposed interventions. Set up scenarios with varying constraints, define success metrics, and establish the escalation logic to model how the system would perform under a range of real-world conditions."
        },
        {
          "id": "mental-health-literacy-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "Conduct a structured debrief of simulation outcomes. Analyze performance gains, unintended side effects, and compliance with governance standards. Use this analysis to refine the intervention design and adapt the strategy based on simulated evidence."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across risk signal interpretation and ethical escalation governance priorities.",
          "instructions": [
            "Define objective and boundary conditions first.",
            "Record near-term and long-term tradeoffs.",
            "Specify metrics and triggers that validate your recommended path."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-601-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l06-a1",
          "type": "image",
          "title": "Application Methods Review",
          "content": "A summary graphic comparing the use of tradeoff matrices, failure mode analysis, and simulation debriefing in case evaluation."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-601-l06-q1",
          "text": "When using a tradeoff matrix to compare interventions, what is the most critical first step?",
          "skillId": "mental-health-literacy-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Select the option with the highest initial performance score."
            },
            {
              "id": "b",
              "text": "Ensure all stakeholders agree on the evaluation criteria and their weights."
            },
            {
              "id": "c",
              "text": "Assign scores based on anecdotal evidence."
            },
            {
              "id": "d",
              "text": "Focus exclusively on financial cost as the primary criterion."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible tradeoff analysis depends on a pre-agreed, shared set of criteria and weights to prevent bias."
        },
        {
          "id": "mental-health-literacy-601-l06-q2",
          "text": "A 'failure signature' in a mental health support system is best described as:",
          "skillId": "mental-health-literacy-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Any single negative outcome."
            },
            {
              "id": "b",
              "text": "A random, unpredictable event."
            },
            {
              "id": "c",
              "text": "A recurring pattern of indicators that predicts a specific type of system failure."
            },
            {
              "id": "d",
              "text": "Feedback from a dissatisfied stakeholder."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A failure signature is a predictable pattern, not a random event, allowing for proactive mitigation."
        },
        {
          "id": "mental-health-literacy-601-l06-q3",
          "text": "What is the primary purpose of a 'recovery trigger' in system design?",
          "skillId": "mental-health-literacy-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To assign blame after a failure has occurred."
            },
            {
              "id": "b",
              "text": "To initiate a pre-planned corrective action when a specific, measurable threshold is crossed."
            },
            {
              "id": "c",
              "text": "To manually review performance at the end of a project."
            },
            {
              "id": "d",
              "text": "To generate a report for senior leadership."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Recovery triggers are automated or semi-automated mechanisms for timely, evidence-based corrective action, not for manual or punitive processes."
        },
        {
          "id": "mental-health-literacy-601-l06-q4",
          "text": "In a simulation debrief, what is the most productive focus?",
          "skillId": "mental-health-literacy-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Confirming that the initial hypothesis was correct."
            },
            {
              "id": "b",
              "text": "Identifying discrepancies between expected and actual outcomes to refine the model."
            },
            {
              "id": "c",
              "text": "Ignoring negative side effects to focus on positive gains."
            },
            {
              "id": "d",
              "text": "Proving one intervention is universally superior in all scenarios."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of a debrief is learning and adaptation, which comes from analyzing the gap between the model's predictions and its simulated results."
        }
      ]
    },
    {
      "id": "mental-health-literacy-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram mapping the distribution of benefits, costs, and risks across different stakeholder groups (e.g., clients, practitioners, administrators, community) over short-term and long-term horizons."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Analyze and map the distribution of benefits, costs, and burdens across all relevant stakeholder groups over time. A responsible design must account for and justify these distributions, particularly regarding equity and fairness."
        },
        {
          "id": "mental-health-literacy-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Design the architecture for accountability within a governance framework. This includes mechanisms for decision traceability, clear assignment of review rights, and defined remediation obligations to ensure that actions and outcomes are auditable and owned."
        },
        {
          "id": "mental-health-literacy-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Synthesize the module's concepts into a checklist for responsible leadership. This tool connects technical outcomes (performance, safety) with obligations to policy, ethical standards, and community resilience, serving as a guide for high-stakes decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The allocation of positive and negative outcomes (benefits, costs, risks) across different populations and timescales."
        },
        {
          "id": "mental-health-literacy-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable and unbroken record linking a decision to its underlying evidence, rationale, ownership, and subsequent outcomes."
        },
        {
          "id": "mental-health-literacy-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making framework that systematically balances performance objectives with accountability, ethical duties, and systemic resilience."
        }
      ]
    },
    {
      "id": "mental-health-literacy-601-l08",
      "title": "Checkpoint 3: Governance and Synthesis",
      "type": "quiz",
      "duration": 12,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l08-a1",
          "type": "image",
          "title": "Module Synthesis Framework",
          "content": "A comprehensive diagram linking all major module concepts: Foundations -> Methods -> Application -> Governance -> Leadership."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-601-l08-q1",
          "text": "Analyzing stakeholder impact distribution is essential for ensuring an intervention is:",
          "skillId": "mental-health-literacy-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only beneficial to the primary user group."
            },
            {
              "id": "b",
              "text": "The lowest possible cost."
            },
            {
              "id": "c",
              "text": "Equitable and does not create unintended burdens on vulnerable populations."
            },
            {
              "id": "d",
              "text": "Completed as quickly as possible."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The core of stakeholder analysis in this context is to evaluate fairness and prevent unintended harm across the entire affected community."
        },
        {
          "id": "mental-health-literacy-601-l08-q2",
          "text": "A robust accountability architecture primarily enables:",
          "skillId": "mental-health-literacy-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Flexible, undocumented decision-making."
            },
            {
              "id": "b",
              "text": "Clear traceability from decision to outcome, facilitating review and remediation."
            },
            {
              "id": "c",
              "text": "The avoidance of responsibility for negative outcomes."
            },
            {
              "id": "d",
              "text": "A focus on individual blame rather than system improvement."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accountability architecture is about creating transparent, auditable systems for learning and correction, not about blame."
        },
        {
          "id": "mental-health-literacy-601-l08-q3",
          "text": "Synthesizing the module's concepts, how should a leader defend a high-stakes recommendation?",
          "skillId": "mental-health-literacy-601-skill-advanced-synthesis",
          "options": [
            {
              "id": "a",
              "text": "By presenting a compelling narrative without disclosing data or assumptions."
            },
            {
              "id": "b",
              "text": "By focusing only on the best-case scenario from simulations."
            },
            {
              "id": "c",
              "text": "By demonstrating a rigorous process: defining the problem, analyzing tradeoffs, monitoring outcomes, and establishing clear governance."
            },
            {
              "id": "d",
              "text": "By asserting their authority and expertise as sufficient justification."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A defensible recommendation integrates all elements of the course: a well-defined problem, evidence-based analysis, risk management, and a strong ethical and governance framework."
        },
        {
          "id": "mental-health-literacy-601-l08-q4",
          "text": "Connecting outcome monitoring (L01) with stakeholder impact (L07) requires leaders to:",
          "skillId": "mental-health-literacy-601-skill-advanced-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Measure only aggregate outcomes for the entire population."
            },
            {
              "id": "b",
              "text": "Disaggregate outcome data to assess if specific subgroups are being disproportionately harmed or helped."
            },
            {
              "id": "c",
              "text": "Stop monitoring after the initial launch of the intervention."
            },
            {
              "id": "d",
              "text": "Only collect qualitative feedback without quantitative metrics."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible governance requires moving beyond averages to understand the specific impact on different stakeholder groups, which is a direct synthesis of monitoring and impact analysis."
        }
      ]
    },
    {
      "id": "mental-health-literacy-601-l09",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "mental-health-literacy-601-l09-a1",
          "type": "image",
          "title": "Capstone Defense Rubric",
          "content": "A detailed rubric outlining the evaluation criteria for the capstone defense, including claim strength, evidence quality, risk assessment, and response to critique."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-601-l09-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Construct a comprehensive defense brief for your capstone recommendation. This document must articulate your central claims, present the supporting evidence, explicitly state uncertainties and limitations, and detail proposed pathways for remediation and governance."
        },
        {
          "id": "mental-health-literacy-601-l09-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Engage in a simulated defense before an expert panel. Practice responding to adversarial cross-examination covering technical methodology, governance design, ethical implications, and stakeholder critiques to sharpen your reasoning and communication under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-601-l09-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
