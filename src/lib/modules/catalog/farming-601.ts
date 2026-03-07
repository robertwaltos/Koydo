import type { LearningModule } from "@/lib/modules/types";

export const farming_601_Module: LearningModule = {
  "id": "farming-601",
  "title": "Farming Research and Leadership",
  "description": "Post-401 specialization in Farming, focused on farming systems diagnostics, farming operations and execution design, farming impact and tradeoff analysis, and farming governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Farming",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "farming",
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
    "Apply advanced methods for farming systems diagnostics in high-constraint environments",
    "Design robust systems for farming operations and execution design with measurable control gates",
    "Evaluate interventions in farming impact and tradeoff analysis with research-grade rigor",
    "Operationalize farming governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "farming-601-l01",
      "title": "Farming Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "farming-601-l01-a1",
          "type": "image",
          "title": "Core Pillars of Advanced Farming Analysis",
          "content": "A diagram showing the relationship between Systems Diagnostics, Operations Design, and Impact Analysis."
        }
      ],
      "chunks": [
        {
          "id": "farming-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Introduces the core disciplines of advanced farming analysis: diagnosing complex farming systems, designing robust operational workflows, and evaluating the resulting impacts and tradeoffs."
        },
        {
          "id": "farming-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Focuses on building causal models to understand system dynamics. Learners will map cause-and-effect relationships, quantify uncertainty ranges, and identify interdependencies between subsystems, such as soil health, water availability, and market prices."
        },
        {
          "id": "farming-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Establishes the importance of evidence-based decision-making. This involves setting clear evidence thresholds, using confidence bounds to express uncertainty, and implementing regular review checkpoints to validate claims and adapt strategies."
        }
      ],
      "flashcards": [
        {
          "id": "farming-601-l01-f1",
          "front": "Farming systems diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "farming-601-l01-f2",
          "front": "Farming operations and execution design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "farming-601-l01-f3",
          "front": "Farming impact and tradeoff analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "farming-601-l02",
      "title": "Farming Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "farming-601-l02-a1",
          "type": "image",
          "title": "Workflow with Control Gates",
          "content": "A flowchart illustrating a specialized farming workflow (e.g., integrated pest management) with embedded checkpoints, rollback triggers, and escalation thresholds."
        }
      ],
      "chunks": [
        {
          "id": "farming-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "Learners design a specialized workflow for a specific farming challenge, such as nutrient management or water conservation. They then apply simulated stress factors (e.g., drought, supply chain disruption) to test the workflow's resilience and identify failure points."
        },
        {
          "id": "farming-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Recaps the architectural principles of reliable systems. Focuses on integrating control gates into workflows, including pre-mortem checkpoints, criteria for rolling back failed interventions, and clear thresholds that trigger escalation to leadership."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-601-l02-act1",
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
      "id": "farming-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "farming-601-l03-a1",
          "type": "image",
          "title": "Knowledge Check",
          "content": "An icon representing a quiz or assessment, reinforcing the key concepts from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "farming-601-l03-q1",
          "text": "Which practice most improves farming systems diagnostics decision quality?",
          "skillId": "farming-601-skill-diagnostics",
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
          "id": "farming-601-l03-q2",
          "text": "At level 601, strong execution for farming operations and execution design requires:",
          "skillId": "farming-601-skill-operations",
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
          "id": "farming-601-l03-q3",
          "text": "A defensible approach to farming impact and tradeoff analysis includes:",
          "skillId": "farming-601-skill-analysis",
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
          "id": "farming-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "farming-601-skill-governance",
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
          "id": "farming-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Farming?",
          "skillId": "farming-601-skill-tradeoff-comparison",
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
          "id": "farming-601-l03-q6",
          "text": "In high-stakes Farming Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "farming-601-skill-stakeholder-communication",
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
          "id": "farming-601-l03-q7",
          "text": "A mature remediation loop in advanced Farming should prioritize:",
          "skillId": "farming-601-skill-remediation-design",
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
          "id": "farming-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Farming Research and Leadership?",
          "skillId": "farming-601-skill-portfolio-strategy",
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
      "id": "farming-601-l04",
      "title": "Farming Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "farming-601-l04-a1",
          "type": "image",
          "title": "Case Study Dossier",
          "content": "An icon of a folder or document representing a detailed case study, including data sets, stakeholder interviews, and environmental reports."
        }
      ],
      "chunks": [
        {
          "id": "farming-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Deconstructs a complex, multi-faceted farming scenario. Learners diagnose the interplay of agronomic, economic, and social constraints, such as water rights disputes, soil degradation, and market volatility."
        },
        {
          "id": "farming-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Learners practice framing and evaluating decisions with competing objectives. They compare potential interventions across key dimensions like yield, cost, environmental impact, and community fairness, making tradeoffs explicit."
        },
        {
          "id": "farming-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Introduces a structured format for communicating complex recommendations. The 'Decision Memo' pattern requires a clear problem statement, explicit assumptions, supporting evidence, risk mitigation controls, and pre-planned fallback options."
        }
      ],
      "flashcards": [
        {
          "id": "farming-601-l04-f1",
          "front": "Competing constraints",
          "back": "Multiple, often conflicting, goals or limits that must be balanced in a decision, such as maximizing profit while minimizing water usage."
        },
        {
          "id": "farming-601-l04-f2",
          "front": "Tradeoff framing",
          "back": "The process of explicitly defining and comparing the pros and cons of different options across a shared set of criteria."
        },
        {
          "id": "farming-601-l04-f3",
          "front": "Decision memo",
          "back": "A structured document that outlines a recommendation, its rationale, evidence, assumptions, and risks to support transparent decision-making."
        }
      ]
    },
    {
      "id": "farming-601-l05",
      "title": "Farming Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "farming-601-l05-a1",
          "type": "image",
          "title": "Interactive Simulation Dashboard",
          "content": "A mock-up of a computer dashboard showing real-time data feeds for a simulated farm (e.g., weather, crop growth, market prices) with controls for the user to adjust."
        }
      ],
      "chunks": [
        {
          "id": "farming-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In a dynamic simulation, learners act as farm managers facing an unfolding crisis (e.g., a pest outbreak). They must make time-sensitive decisions, adjusting operational controls to balance short-term performance with long-term sustainability and governance rules."
        },
        {
          "id": "farming-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Recaps the principles of adaptive management. Focuses on how to modify operational plans and control gates in response to new information, while ensuring all changes are documented for traceability and accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-601-l05-act1",
          "type": "scenario",
          "title": "Drought Crisis Simulation",
          "description": "Manage a multi-crop farm through a simulated multi-year drought. Make resource allocation decisions, tune irrigation controls, and manage financial and environmental impacts under high uncertainty."
        }
      ]
    },
    {
      "id": "farming-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "farming-601-l06-a1",
          "type": "image",
          "title": "Knowledge Check",
          "content": "An icon representing a quiz or assessment, focusing on the application of knowledge in case studies and simulations."
        }
      ],
      "questions": [
        {
          "id": "farming-601-l06-q1",
          "text": "When analyzing a case study involving a new irrigation technology, what is the most critical first step for a defensible analysis?",
          "skillId": "farming-601-skill-case-setup",
          "options": [
            {
              "id": "a",
              "text": "Immediately calculate the potential profit increase"
            },
            {
              "id": "b",
              "text": "Establish a baseline of current water usage and yield to enable comparison"
            },
            {
              "id": "c",
              "text": "Survey local farmers for their opinions"
            },
            {
              "id": "d",
              "text": "Assume the manufacturer's performance claims are accurate"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A rigorous case analysis requires establishing a clear, measurable baseline before evaluating the impact of any new intervention."
        },
        {
          "id": "farming-601-l06-q2",
          "text": "In a farm simulation, you notice soil moisture levels are dropping faster than projected despite following the plan. What is the best adaptive response?",
          "skillId": "farming-601-skill-simulation-response",
          "options": [
            {
              "id": "a",
              "text": "Ignore the data and continue with the original plan"
            },
            {
              "id": "b",
              "text": "Double the irrigation immediately without further analysis"
            },
            {
              "id": "c",
              "text": "Investigate the cause (e.g., sensor error, unexpected heat), adjust the irrigation plan based on new data, and document the change"
            },
            {
              "id": "d",
              "text": "End the simulation because the model is flawed"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective adaptive response involves diagnosing the anomaly, making an evidence-based adjustment, and maintaining traceability for accountability."
        },
        {
          "id": "farming-601-l06-q3",
          "text": "A case study presents a choice between a low-cost pesticide with minor environmental risks and a high-cost organic alternative. How should this tradeoff be framed in a decision memo?",
          "skillId": "farming-601-skill-tradeoff-framing",
          "options": [
            {
              "id": "a",
              "text": "Recommend the cheaper option to maximize profit"
            },
            {
              "id": "b",
              "text": "Only mention the benefits of the preferred option"
            },
            {
              "id": "c",
              "text": "Quantify the economic costs and environmental risks of both options, and state the assumption about the value of environmental protection"
            },
            {
              "id": "d",
              "text": "Recommend the organic option because it is more ethical"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Proper tradeoff framing requires quantifying all relevant dimensions for each option and making the underlying values and assumptions explicit."
        },
        {
          "id": "farming-601-l06-q4",
          "text": "During a simulation, a sudden market crash makes your high-value crop unprofitable. Your governance protocol includes a 'financial distress' escalation trigger. When should you activate it?",
          "skillId": "farming-601-skill-governance-application",
          "options": [
            {
              "id": "a",
              "text": "Wait until the farm is bankrupt"
            },
            {
              "id": "b",
              "text": "As soon as the projected losses cross the pre-defined threshold specified in the protocol"
            },
            {
              "id": "c",
              "text": "Never, because it shows a lack of confidence"
            },
            {
              "id": "d",
              "text": "Only after trying several undocumented, ad-hoc strategies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance relies on adhering to pre-defined control gates and escalation thresholds to manage risk systematically."
        },
        {
          "id": "farming-601-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Farming?",
          "skillId": "farming-601-skill-tradeoff-comparison",
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
          "id": "farming-601-l06-q6",
          "text": "In high-stakes Farming Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "farming-601-skill-stakeholder-communication",
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
          "id": "farming-601-l06-q7",
          "text": "A mature remediation loop in advanced Farming should prioritize:",
          "skillId": "farming-601-skill-remediation-design",
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
          "id": "farming-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Farming Research and Leadership?",
          "skillId": "farming-601-skill-portfolio-strategy",
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
      "id": "farming-601-l07",
      "title": "Farming Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "farming-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing a central farming decision with radiating lines to various stakeholders (e.g., farm workers, local community, consumers, ecosystem) detailing the positive and negative impacts for each."
        }
      ],
      "chunks": [
        {
          "id": "farming-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Analyzes how the benefits (e.g., food production, profit) and burdens (e.g., pollution, water use) of farming decisions are distributed across different stakeholder groups and over time. Considers both immediate and delayed, second-order effects."
        },
        {
          "id": "farming-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Examines the structures that ensure accountability. This includes creating auditable records of decisions (traceability), establishing rights for stakeholders to review and appeal decisions, and defining clear obligations to remediate negative impacts."
        },
        {
          "id": "farming-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Synthesizes the lesson into a practical checklist for responsible leadership. This tool guides decision-makers to align operational outcomes with ethical principles, policy compliance, and long-term system resilience."
        }
      ],
      "flashcards": [
        {
          "id": "farming-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "farming-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "farming-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "farming-601-l08",
      "title": "Farming Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "farming-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Presentation",
          "content": "An icon of a presentation slide with a title, a chart, and bullet points, representing the assembly of a defense brief."
        }
      ],
      "chunks": [
        {
          "id": "farming-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Learners synthesize their analysis of a complex farming problem into a formal defense brief. They must articulate a clear recommendation, support it with evidence, define the uncertainty bounds of their projections, and propose a robust remediation plan."
        },
        {
          "id": "farming-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Learners participate in a mock defense panel. They practice responding to critical questions and challenges from instructors role-playing as technical experts, governance officers, and community stakeholders, honing their ability to defend their work under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-601-l08-act1",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel Simulation",
          "description": "Present and defend your capstone recommendation to a simulated expert panel. Respond to adversarial cross-examination on your data, assumptions, and tradeoff analysis."
        }
      ]
    }
  ]
};
