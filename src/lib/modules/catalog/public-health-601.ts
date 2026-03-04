import type { LearningModule } from "@/lib/modules/types";

export const PublicHealth601Module: LearningModule = {
  "id": "public-health-601",
  "title": "Public Health Research and Leadership",
  "description": "Post-401 specialization in Public Health, focused on population risk modeling, intervention architecture, outcome equity analytics, and health governance and trust through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "public-health",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply advanced methods for population risk modeling in high-constraint environments",
    "Design robust systems for intervention architecture with measurable control gates",
    "Evaluate interventions in outcome equity analytics with research-grade rigor",
    "Operationalize health governance and trust with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "public-health-601-l01",
      "title": "Public Health Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-601-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we will explore the advanced concepts of scope boundaries in Public Health. We will focus on how to assess risks faced by different populations and design effective interventions to address those risks. Understanding these boundaries helps us create better health strategies that can improve community well-being.\nContext recap: In this lesson, we will explore the advanced concepts of scope boundaries in Public Health. We will focus on how to assess risks faced by different populations and design effective interventions to address those risks. Understanding these boundaries helps us create better health strategies that can improve community well-being."
        },
        {
          "id": "public-health-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "In this section, learners will engage in mapping out causal pathways, which are the connections between different factors that can lead to health outcomes. Additionally, we will examine uncertainty ranges and how various systems depend on each other. This foundational knowledge is crucial for planning effective health interventions.\nContext recap: In this section, learners will engage in mapping out causal pathways, which are the connections between different factors that can lead to health outcomes. Additionally, we will examine uncertainty ranges and how various systems depend on each other. This foundational knowledge is crucial for planning effective health interventions."
        },
        {
          "id": "public-health-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "In our recap, we will emphasize the importance of ensuring that all claims made in public health are supported by measurable indicators. We will discuss how to establish confidence bounds and set up review checkpoints to verify our findings. This process is essential for maintaining the integrity of public health research.\nContext recap: In our recap, we will emphasize the importance of ensuring that all claims made in public health are supported by measurable indicators. We will discuss how to establish confidence bounds and set up review checkpoints to verify our findings. This process is essential for maintaining the integrity of public health research."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-601-l01-f1",
          "front": "population risk modeling",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "public-health-601-l01-f2",
          "front": "intervention architecture",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "public-health-601-l01-f3",
          "front": "outcome equity analytics",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "public-health-601-l02",
      "title": "Public Health Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "public-health-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, learners will have the opportunity to design specialized workflows that are essential for public health practice. They will also conduct stress tests on these workflows by simulating adverse scenarios to see how well they hold up under pressure. This hands-on experience is vital for understanding real-world applications.\nContext recap: In this interactive lab, learners will have the opportunity to design specialized workflows that are essential for public health practice. They will also conduct stress tests on these workflows by simulating adverse scenarios to see how well they hold up under pressure. This hands-on experience is vital for understanding real-world applications."
        },
        {
          "id": "public-health-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "In our recap, we will discuss how workflows can be structured to include important checkpoints, criteria for rolling back decisions, and thresholds that trigger escalation when necessary. This architecture is crucial for ensuring that public health interventions are effective and responsive to changing situations.\nContext recap: In our recap, we will discuss how workflows can be structured to include important checkpoints, criteria for rolling back decisions, and thresholds that trigger escalation when necessary. This architecture is crucial for ensuring that public health interventions are effective and responsive to changing situations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-601-l02-act1",
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
      "id": "public-health-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "public-health-601-l03-q1",
          "text": "Which practice most improves population risk modeling decision quality?",
          "skillId": "public-health-601-skill-core",
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
          "id": "public-health-601-l03-q2",
          "text": "At level 601, strong execution for intervention architecture requires:",
          "skillId": "public-health-601-skill-execution",
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
          "id": "public-health-601-l03-q3",
          "text": "A defensible approach to outcome equity analytics includes:",
          "skillId": "public-health-601-skill-eval",
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
          "id": "public-health-601-l03-q4",
          "text": "Mature health governance and trust systems connect:",
          "skillId": "public-health-601-skill-governance",
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
          "id": "public-health-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Health Science?",
          "skillId": "public-health-601-skill-advanced-5",
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
          "id": "public-health-601-l03-q6",
          "text": "In high-stakes Public Health Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "public-health-601-skill-advanced-6",
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
          "id": "public-health-601-l03-q7",
          "text": "A mature remediation loop in advanced Health Science should prioritize:",
          "skillId": "public-health-601-skill-advanced-7",
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
          "id": "public-health-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Public Health Research and Leadership?",
          "skillId": "public-health-601-skill-advanced-8",
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
      "id": "public-health-601-l04",
      "title": "Public Health Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-601-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this case study, we will explore the important role of a city health taskforce. This group is in charge of coordinating various efforts to prevent disease, communicate effectively with the public, and allocate resources wisely during an outbreak. As learners, you will dive into the challenges the taskforce encounters, examine the different types of risks they must manage, and gain insight into the governance boundaries that shape their decision-making process. By understanding these elements, you will appreciate the complexities of public health leadership during critical times.\nContext recap: In this case study, we will explore the important role of a city health taskforce. This group is in charge of coordinating various efforts to prevent disease, communicate effectively with the public, and allocate resources wisely during an outbreak. As learners, you will dive into the challenges the taskforce encounters, examine the different types of risks they must manage, and gain insight into the governance boundaries that shape their decision-making process. By understanding these elements, you will appreciate the complexities of public health leadership during critical times.\nContext recap: In this case study, we will explore the important role of a city health taskforce. This group is in charge of coordinating various efforts to prevent disease, communicate effectively with the public, and allocate resources wisely during an outbreak. As learners, you will dive into the challenges the taskforce encounters, examine the different types of risks they must manage, and gain insight into the governance boundaries that shape their decision-making process. By understanding these elements, you will appreciate the complexities of public health leadership during critical times.\nWhy this matters: Case Context and Stakes helps learners in Health Science connect ideas from Public Health Research and Leadership to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "public-health-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix, where different alternatives are evaluated based on several criteria. These criteria include effectiveness, feasibility, risk, equity, and the costs associated with implementation. This matrix helps in making informed decisions about public health strategies.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix, where different alternatives are evaluated based on several criteria. These criteria include effectiveness, feasibility, risk, equity, and the costs associated with implementation. This matrix helps in making informed decisions about public health strategies."
        },
        {
          "id": "public-health-601-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "In our recap, we will focus on how to map failure signatures to specific remediation actions. We will also discuss measurable recovery triggers that can indicate when an intervention is successful. This understanding is crucial for adapting strategies to improve public health outcomes.\nContext recap: In our recap, we will focus on how to map failure signatures to specific remediation actions. We will also discuss measurable recovery triggers that can indicate when an intervention is successful. This understanding is crucial for adapting strategies to improve public health outcomes.\nContext recap: In our recap, we will focus on how to map failure signatures to specific remediation actions. We will also discuss measurable recovery triggers that can indicate when an intervention is successful. This understanding is crucial for adapting strategies to improve public health outcomes. Context recap: In our recap, we will focus on how to map failure signatures to specific remediation actions.\nWhy this matters: Recovery and Adaptation Design helps learners in Health Science connect ideas from Public Health Research and Leadership to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-601-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured model for comparing alternatives under competing priorities."
        },
        {
          "id": "public-health-601-l04-f2",
          "front": "Failure signature",
          "back": "A recurring indicator of a predictable risk class."
        },
        {
          "id": "public-health-601-l04-f3",
          "front": "Recovery trigger",
          "back": "A measurable threshold that initiates corrective action."
        }
      ]
    },
    {
      "id": "public-health-601-l05",
      "title": "Public Health Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "public-health-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive session, learners will configure various interventions, set constraints, and establish escalation logic for high-stakes tests. This practical experience will help them understand how to effectively manage public health scenarios and respond to challenges.\nContext recap: In this interactive session, learners will configure various interventions, set constraints, and establish escalation logic for high-stakes tests. This practical experience will help them understand how to effectively manage public health scenarios and respond to challenges.\nWhy this matters: Scenario Simulation helps learners in Health Science connect ideas from Public Health Research and Leadership to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "public-health-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "In our recap, we will review the outcomes of the interventions implemented during the simulations. We will analyze the gains achieved, any side effects observed, and identify gaps in governance compliance. This reflection is essential for continuous improvement in public health practices.\nContext recap: In our recap, we will review the outcomes of the interventions implemented during the simulations. We will analyze the gains achieved, any side effects observed, and identify gaps in governance compliance. This reflection is essential for continuous improvement in public health practices.\nContext recap: In our recap, we will review the outcomes of the interventions implemented during the simulations. We will analyze the gains achieved, any side effects observed, and identify gaps in governance compliance. This reflection is essential for continuous improvement in public health practices. Context recap: In our recap, we will review the outcomes of the interventions implemented during the simulations.\nWhy this matters: Debrief and Adaptation helps learners in Health Science connect ideas from Public Health Research and Leadership to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across population risk modeling and health governance and trust priorities.",
          "instructions": [
            "Define objective and boundary conditions first.",
            "Document short- and long-term tradeoffs.",
            "Specify metrics and triggers that validate your recommendation."
          ]
        }
      ]
    },
    {
      "id": "public-health-601-l06",
      "title": "Checkpoint 2: Research and Governance Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "public-health-601-l06-q1",
          "text": "Which practice most improves population risk modeling decision quality?",
          "skillId": "public-health-601-skill-core",
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
          "id": "public-health-601-l06-q2",
          "text": "At level 601, strong execution for intervention architecture requires:",
          "skillId": "public-health-601-skill-execution",
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
          "id": "public-health-601-l06-q3",
          "text": "A defensible approach to outcome equity analytics includes:",
          "skillId": "public-health-601-skill-eval",
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
          "id": "public-health-601-l06-q4",
          "text": "Mature health governance and trust systems connect:",
          "skillId": "public-health-601-skill-governance",
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
          "id": "public-health-601-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Health Science?",
          "skillId": "public-health-601-skill-advanced-5",
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
          "id": "public-health-601-l06-q6",
          "text": "In high-stakes Public Health Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "public-health-601-skill-advanced-6",
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
          "id": "public-health-601-l06-q7",
          "text": "A mature remediation loop in advanced Health Science should prioritize:",
          "skillId": "public-health-601-skill-advanced-7",
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
          "id": "public-health-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Public Health Research and Leadership?",
          "skillId": "public-health-601-skill-advanced-8",
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
      "id": "public-health-601-l07",
      "title": "Public Health Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "public-health-601-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will explore how to map the distribution of benefits and burdens among different stakeholder groups. We will also examine the delayed effects that may arise from public health decisions. Understanding these dynamics is key to promoting equity in health outcomes.\nContext recap: In this lesson, learners will explore how to map the distribution of benefits and burdens among different stakeholder groups. We will also examine the delayed effects that may arise from public health decisions. Understanding these dynamics is key to promoting equity in health outcomes."
        },
        {
          "id": "public-health-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the architecture of accountability in public health. This includes the importance of decision traceability, the rights of stakeholders to review decisions, and the obligations to remediate any negative impacts. These elements are vital for maintaining trust and transparency in public health governance.\nContext recap: In this section, we will discuss the architecture of accountability in public health. This includes the importance of decision traceability, the rights of stakeholders to review decisions, and the obligations to remediate any negative impacts. These elements are vital for maintaining trust and transparency in public health governance."
        },
        {
          "id": "public-health-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "To ensure effective public health leadership, it is important to use a comprehensive checklist. This checklist should connect the outcomes of our actions with ethical considerations, adherence to policies, and the ability to adapt and recover from challenges. By following this checklist, leaders can promote positive public health impacts in their communities.\nContext recap: To ensure effective public health leadership, it is important to use a comprehensive checklist. This checklist should connect the outcomes of our actions with ethical considerations, adherence to policies, and the ability to adapt and recover from challenges. By following this checklist, leaders can promote positive public health impacts in their communities."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "public-health-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "public-health-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "public-health-601-l08",
      "title": "Public Health Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "public-health-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, learners will work together to create a detailed brief. This brief will include well-supported claims, evidence to back those claims, an understanding of the uncertainties involved, and clear pathways for remediation. This exercise helps develop critical thinking and communication skills essential for public health professionals.\nContext recap: In this interactive activity, learners will work together to create a detailed brief. This brief will include well-supported claims, evidence to back those claims, an understanding of the uncertainties involved, and clear pathways for remediation. This exercise helps develop critical thinking and communication skills essential for public health professionals."
        },
        {
          "id": "public-health-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During the expert panel rehearsal, learners will practice their responses to various critiques. These critiques may come from technical experts, governance representatives, and stakeholders. This practice is crucial for building confidence and ensuring that learners can effectively communicate their ideas and defend their positions in a professional setting.\nContext recap: During the expert panel rehearsal, learners will practice their responses to various critiques. These critiques may come from technical experts, governance representatives, and stakeholders. This practice is crucial for building confidence and ensuring that learners can effectively communicate their ideas and defend their positions in a professional setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
