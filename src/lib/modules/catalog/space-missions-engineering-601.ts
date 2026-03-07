import type { LearningModule } from "@/lib/modules/types";

export const space_missions_engineering_601_Module: LearningModule = {
  "id": "space-missions-engineering-601",
  "title": "Space Missions Engineering Research and Leadership",
  "description": "A post-401 specialization in Space Missions Engineering, focused on mission architecture, systems integration, navigation, autonomy, and fault-management. The curriculum emphasizes resource-risk tradeoff modeling under mission constraints, mission assurance governance, and public accountability through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "space-missions-engineering",
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
    "Apply advanced methods for mission architecture and systems integration in high-constraint environments.",
    "Design robust systems for navigation, autonomy, and fault-management with measurable control gates.",
    "Evaluate interventions in resource-risk tradeoff modeling under mission constraints with research-grade rigor.",
    "Operationalize mission assurance governance and public accountability with clear governance and escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend complex engineering recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "space-missions-engineering-601-l01",
      "title": "Advanced Mission Design Principles",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l01-a1",
          "type": "image",
          "title": "Mission Architecture Diagram",
          "content": "A visual representation of a complex interplanetary mission, showing interconnected subsystems, communication links, and operational phases. Use this to identify key integration points and potential failure modes."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-601-l01-c1",
          "kind": "concept",
          "title": "Mission Architecture and Systems Integration",
          "content": "This section introduces the foundational principles of designing complex space missions. We will analyze how to define mission scope and boundaries, establish a robust system architecture, and ensure seamless integration of disparate components, including navigation, autonomy, and fault-management subsystems. The focus is on creating a resilient framework that can withstand the rigors of the operational environment."
        },
        {
          "id": "space-missions-engineering-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Before planning interventions, it is critical to map the system's causal pathways, system dependencies, and uncertainty ranges. This modeling helps connect high-level mission objectives to specific engineering decisions by highlighting tradeoffs, assumptions, and necessary verification steps. A structured approach involves: (1) defining the goal, (2) identifying supporting evidence, (3) explaining how evidence modifies conclusions, and (4) verifying the final recommendation against original goals and constraints."
        },
        {
          "id": "space-missions-engineering-601-l01-c3",
          "kind": "recap",
          "title": "Establishing Evidence Thresholds",
          "content": "This recap emphasizes the necessity of evidence thresholds in mission design. Every claim must be supported by measurable indicators and qualified with confidence bounds. We will introduce the concept of formal review checkpoints, which are critical gates for assessing progress, validating data, and ensuring the integrity of the engineering process."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-601-l01-f1",
          "front": "Mission Architecture And Systems Integration",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "space-missions-engineering-601-l01-f2",
          "front": "Navigation, Autonomy, And Fault-Management Design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "space-missions-engineering-601-l01-f3",
          "front": "Resource-Risk Tradeoff Modeling Under Mission Constraints",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "space-missions-engineering-601-l02",
      "title": "Specialist Methods and Controls Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "An interactive canvas for designing a mission-critical workflow. Drag and drop components like 'Pre-commit Gate,' 'Rollback Trigger,' and 'Retrospective Loop' to build a resilient process."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress-Testing",
          "content": "In this interactive lab, learners will design specialized workflows for critical mission tasks. After designing the process, they will stress-test it against simulated adverse scenarios to identify weaknesses and validate its robustness. This practice is crucial for developing effective and reliable operational procedures."
        },
        {
          "id": "space-missions-engineering-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap reviews the principles of control gate architecture. We will discuss the integration of checkpoints for progress monitoring, the definition of clear rollback criteria for failure scenarios, and the implementation of threshold-based escalation pathways. These elements are essential for maintaining command and control in dynamic mission environments."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-601-l02-act1",
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
      "id": "space-missions-engineering-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of core concepts from the first two lessons, including control gate architecture, evidence thresholds, and causal modeling, to prepare for the assessment."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-601-l03-q1",
          "text": "Which practice most improves mission architecture and systems integration decision quality?",
          "skillId": "space-missions-engineering-601-skill-core",
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
          "id": "space-missions-engineering-601-l03-q2",
          "text": "At level 601, strong execution for navigation, autonomy, and fault-management design requires:",
          "skillId": "space-missions-engineering-601-skill-execution",
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
          "id": "space-missions-engineering-601-l03-q3",
          "text": "A defensible approach to resource-risk tradeoff modeling under mission constraints includes:",
          "skillId": "space-missions-engineering-601-skill-eval",
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
          "id": "space-missions-engineering-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "space-missions-engineering-601-skill-governance",
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
          "id": "space-missions-engineering-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Engineering?",
          "skillId": "space-missions-engineering-601-skill-advanced-5",
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
          "id": "space-missions-engineering-601-l03-q6",
          "text": "In high-stakes Space Missions Engineering Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "space-missions-engineering-601-skill-advanced-6",
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
          "id": "space-missions-engineering-601-l03-q7",
          "text": "A mature remediation loop in advanced Engineering should prioritize:",
          "skillId": "space-missions-engineering-601-skill-advanced-7",
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
          "id": "space-missions-engineering-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Space Missions Engineering Research and Leadership?",
          "skillId": "space-missions-engineering-601-skill-advanced-8",
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
      "id": "space-missions-engineering-601-l04",
      "title": "Advanced Case Analysis: Tradeoff and Decision Framing",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A matrix comparing three mission proposals across dimensions of safety, reliability, cost, and governance. Heat mapping indicates favorable and unfavorable attributes for each option."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson frames a complex case study highlighting the competing constraints inherent in mission architecture and systems integration. We will deconstruct the scenario to apply resource-risk tradeoff modeling, analyzing how to balance available resources against potential risks within strict mission constraints. This analysis is vital for making informed, defensible decisions."
        },
        {
          "id": "space-missions-engineering-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice segment, learners will compare alternative courses of action across multiple critical dimensions: safety, reliability, cost, schedule, and governance. This comprehensive comparison framework forces a holistic evaluation, moving beyond single-metric optimization to support well-rounded and resilient strategic choices."
        },
        {
          "id": "space-missions-engineering-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "This recap introduces a structured pattern for documenting engineering decisions. Each recommendation must be accompanied by its underlying assumptions, supporting evidence, proposed risk controls, and pre-planned fallback options. This structured approach ensures clarity, accountability, and preparedness for contingent outcomes."
        }
      ]
    },
    {
      "id": "space-missions-engineering-601-l05",
      "title": "Simulation Clinic: Dynamic Mission Control",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l05-a1",
          "type": "practice",
          "title": "Mission Simulation Dashboard",
          "content": "An interactive dashboard showing real-time mission telemetry. Learners can adjust parameters for propulsion, power allocation, and communication bandwidth to respond to simulated anomalies."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, learners operate controls within a high-fidelity mission simulation. The objective is to balance mission performance targets against dynamic governance constraints and unexpected system events. This hands-on experience is crucial for developing adaptive decision-making skills under pressure."
        },
        {
          "id": "space-missions-engineering-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing effective responses to evolving scenarios. A key principle of adaptive design is the ability to update control gates and operational parameters without losing traceability or accountability. This ensures that even rapid, in-mission adjustments are auditable and aligned with strategic goals, connecting tactical decisions to the broader principles of mission leadership."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure space missions engineering scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "space-missions-engineering-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l06-a1",
          "type": "practice",
          "title": "Case Study and Simulation Debrief Guide",
          "content": "A structured guide with questions to help learners debrief the case study and simulation, focusing on decision rationale, outcome analysis, and lessons learned."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "space-missions-engineering-601-skill-case1",
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
          "id": "space-missions-engineering-601-l06-q2",
          "text": "A resilient strategy for navigation, autonomy, and fault-management design should include:",
          "skillId": "space-missions-engineering-601-skill-case2",
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
          "id": "space-missions-engineering-601-l06-q3",
          "text": "When evaluating resource-risk tradeoff modeling under mission constraints, which method is most rigorous?",
          "skillId": "space-missions-engineering-601-skill-case3",
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
          "id": "space-missions-engineering-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "space-missions-engineering-601-skill-case4",
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
        },
        {
          "id": "space-missions-engineering-601-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Engineering?",
          "skillId": "space-missions-engineering-601-skill-advanced-5",
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
          "id": "space-missions-engineering-601-l06-q6",
          "text": "In high-stakes Space Missions Engineering Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "space-missions-engineering-601-skill-advanced-6",
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
          "id": "space-missions-engineering-601-l06-q7",
          "text": "A mature remediation loop in advanced Engineering should prioritize:",
          "skillId": "space-missions-engineering-601-skill-advanced-7",
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
          "id": "space-missions-engineering-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Space Missions Engineering Research and Leadership?",
          "skillId": "space-missions-engineering-601-skill-advanced-8",
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
      "id": "space-missions-engineering-601-l07",
      "title": "Governance, Ethics, and Public Accountability",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram mapping the primary, secondary, and tertiary stakeholders of a satellite constellation project, showing the distribution of benefits (e.g., connectivity) and burdens (e.g., orbital debris)."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson requires learners to map the distribution of mission impacts across diverse stakeholders. This includes identifying benefits, burdens, and delayed or second-order effects. Understanding these dynamics is a prerequisite for equitable and transparent decision-making, ensuring all affected parties are considered."
        },
        {
          "id": "space-missions-engineering-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the design of an accountability architecture. Key components include decision traceability, stakeholder review rights, and clear remediation obligations. Integrating these elements into the mission governance framework is essential for building public trust and ensuring ethical conduct. This architecture connects leadership decisions to their real-world consequences, highlighting the importance of verification and responsible oversight."
        },
        {
          "id": "space-missions-engineering-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude by developing a responsible leadership checklist. This tool synthesizes the lesson's concepts, prompting leaders to connect mission outcomes with ethical duties, policy compliance, and engineering resilience. It serves as a practical guide for making decisions that are not only technically sound but also socially and ethically responsible."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "space-missions-engineering-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "space-missions-engineering-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "space-missions-engineering-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "space-missions-engineering-601-l08-a1",
          "type": "practice",
          "title": "Defense Brief Template",
          "content": "A structured presentation template with sections for Executive Summary, Core Claims, Supporting Evidence, Uncertainty Analysis, and Remediation Pathways. Use this to build a compelling defense."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this collaborative lab, learners will assemble a comprehensive defense brief for their capstone recommendation. The brief must articulate core claims, present supporting evidence, quantify uncertainties, and outline remediation pathways for potential failure modes. This exercise hones skills in clear, evidence-based communication."
        },
        {
          "id": "space-missions-engineering-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session simulates a formal defense in front of an expert panel. Learners practice responding to critical cross-examination on technical, governance, and stakeholder-related issues. The rehearsal is designed to build confidence and refine the ability to defend complex work under intense scrutiny."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
