import type { LearningModule } from "@/lib/modules/types";

export const nursing_501_Module: LearningModule = {
  "id": "nursing-501",
  "title": "Nursing Specialization Studio",
  "description": "Post-401 specialization in Nursing, focused on nursing systems diagnostics, nursing operations and execution design, nursing impact and tradeoff analysis, and nursing governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Nursing",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nursing",
    "specialization"
  ],
  "minAge": 21,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply advanced diagnostic methods to complex nursing systems in high-constraint environments.",
    "Design robust and measurable systems for nursing operations and care delivery.",
    "Evaluate clinical and operational interventions with research-grade rigor, analyzing impacts and tradeoffs.",
    "Develop and implement accountable nursing governance structures with clear escalation pathways.",
    "Lead cross-functional decision reviews, communicating tradeoffs and evidence effectively.",
    "Defend system-level recommendations against expert critique using evidence and uncertainty analysis."
  ],
  "lessons": [
    {
      "id": "nursing-501-l01",
      "title": "Foundations of Advanced Nursing Systems",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "nursing-501-l01-a1",
          "type": "image",
          "title": "Systems Thinking Framework",
          "prompt": "A diagram showing a healthcare system with interconnected nodes representing patient flow, staffing, resources, and policies. Arrows indicate causal links and feedback loops."
        }
      ],
      "chunks": [
        {
          "id": "nursing-501-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Boundaries",
          "content": "To effectively diagnose and improve a nursing system, we must first define its scope and boundaries. This involves clearly stating the primary goal, identifying the key components of the system (e.g., patient intake, medication administration), and defining the constraints, such as budget, staffing, and regulatory requirements. A well-defined scope prevents scope creep and focuses analysis on the most critical areas for improvement."
        },
        {
          "id": "nursing-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "This section introduces methods for mapping the causal pathways that influence patient outcomes. Learners will create simple diagrams to trace how factors like nurse-to-patient ratios, technology availability, and communication protocols are interconnected. We will also learn to identify and quantify uncertainty in these systems, which is crucial for planning robust interventions that are effective under a range of conditions."
        },
        {
          "id": "nursing-501-l01-c3",
          "kind": "recap",
          "title": "Establishing Evidence Thresholds",
          "content": "In summary, all claims and decisions in advanced nursing practice must be supported by measurable evidence. This requires establishing clear performance indicators and confidence bounds before an intervention begins. Regular review checkpoints ensure that decisions are continuously validated against real-world data, allowing for timely course correction."
        }
      ],
      "flashcards": [
        {
          "id": "nursing-501-l01-f1",
          "front": "Nursing Systems Diagnostics",
          "back": "The systematic process of identifying root causes of performance issues within a clinical system by analyzing its components, interactions, and constraints."
        },
        {
          "id": "nursing-501-l01-f2",
          "front": "Nursing Operations Design",
          "back": "The architecture of clinical workflows and processes that determines their safety, efficiency, and reliability under both normal and high-stress conditions."
        },
        {
          "id": "nursing-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "An evaluation discipline for quantifying the intended benefits and unintended consequences of a nursing intervention across multiple dimensions like safety, cost, and equity."
        }
      ]
    },
    {
      "id": "nursing-501-l02",
      "title": "Nursing Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "nursing-501-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "prompt": "An interactive digital canvas where learners can drag and drop components (e.g., 'Triage', 'Assessment', 'Intervention', 'Escalation Point') to build a clinical workflow."
        }
      ],
      "chunks": [
        {
          "id": "nursing-501-l02-c1",
          "kind": "practice",
          "title": "Workflow Design and Stress Testing",
          "content": "In this interactive lab, learners will design a specialized nursing workflow for a given clinical challenge, such as reducing patient falls. They will then stress-test this workflow by running simulations with adverse scenarios, like a sudden staffing shortage or equipment failure, to identify and mitigate potential points of failure."
        },
        {
          "id": "nursing-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "To ensure safety and accountability, robust workflows must include control gates. These are predefined checkpoints that require certain criteria to be met before proceeding. Key elements include rollback criteria for reversing a process if adverse outcomes are detected, and threshold-based escalation pathways to alert leadership when key metrics deviate from the safe range."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each operational control with its primary effect on system reliability and governance.",
          "pairs": [
            {
              "left": "Pre-intervention checklist",
              "right": "Prevents predictable, avoidable errors"
            },
            {
              "left": "Automated alert trigger",
              "right": "Limits the scope of adverse impact from an emerging issue"
            },
            {
              "left": "Baseline performance dashboard",
              "right": "Supports defensible attribution of an intervention's impact"
            },
            {
              "left": "Post-incident review loop",
              "right": "Improves the quality of future decisions and protocols"
            }
          ]
        }
      ]
    },
    {
      "id": "nursing-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "nursing-501-l03-q1",
          "text": "Which practice most improves the quality of a nursing systems diagnostic?",
          "skillId": "nursing-501-systems-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or explicit assumptions"
            },
            {
              "id": "b",
              "text": "Defining clear assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed of diagnosis in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality diagnostics depend on making assumptions, constraints, and metrics explicit from the start, ensuring a rigorous and transparent analysis."
        },
        {
          "id": "nursing-501-l03-q2",
          "text": "A robust design for nursing operations requires:",
          "skillId": "nursing-501-operations-design",
          "options": [
            {
              "id": "a",
              "text": "Clear role ownership, a regular checkpoint cadence, and defined escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous role clarity and frequent ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "Eliminating retrospectives or post-implementation reviews"
            },
            {
              "id": "d",
              "text": "No predefined conditions for rollback or fallback procedures"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution at an advanced level requires clear ownership, scheduled reviews, and threshold-driven governance to manage complexity and risk."
        },
        {
          "id": "nursing-501-l03-q3",
          "text": "A defensible approach to nursing impact and tradeoff analysis includes:",
          "skillId": "nursing-501-impact-analysis",
          "options": [
            {
              "id": "a",
              "text": "Relying on anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and explicit uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing the success criteria after the outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding challenging scenarios from the analysis to simplify it"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible analysis is comprehensive, combining comparative baselines, a thorough check for unintended consequences (side effects), and honest disclosure of uncertainty."
        },
        {
          "id": "nursing-501-l03-q4",
          "text": "Mature nursing governance systems effectively connect:",
          "skillId": "nursing-501-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable operational controls, and clear remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language that has no measurable enforcement mechanism"
            },
            {
              "id": "c",
              "text": "Performance targets without clear ownership or an escalation plan"
            },
            {
              "id": "d",
              "text": "Clinical operations that lack transparent accountability structures"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance is the operational link between the intent of a policy, how it is measured and controlled in practice, and what happens when it fails."
        }
      ]
    },
    {
      "id": "nursing-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nursing-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "prompt": "A table comparing two proposed nursing interventions. Rows represent evaluation criteria (Patient Safety, Cost, Nurse Satisfaction, Equity), and cells are color-coded (green, yellow, red) to show how each option performs."
        }
      ],
      "chunks": [
        {
          "id": "nursing-501-l04-c1",
          "kind": "concept",
          "title": "Deconstructing Case Scenarios",
          "content": "In this lesson, we will deconstruct complex case scenarios that feature competing constraints, such as improving patient outcomes while facing budget cuts. We will analyze how to identify the core problem, map the stakeholders, and assess the potential impact of different nursing decisions and the tradeoffs they entail."
        },
        {
          "id": "nursing-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing and Communication",
          "content": "Using a case study, learners will practice framing and comparing different strategic options. This involves evaluating choices across key dimensions such as clinical safety, operational reliability, cost-effectiveness, equity, and governance. The goal is to learn how to communicate these complex tradeoffs clearly and concisely to other stakeholders."
        },
        {
          "id": "nursing-501-l04-c3",
          "kind": "recap",
          "title": "The Structured Decision Memo",
          "content": "We conclude by introducing a structured pattern for documenting recommendations. Each decision memo should articulate the core recommendation, the underlying assumptions, the supporting evidence, the identified risks with their mitigation controls, and a contingency or fallback plan. This structure ensures clarity, accountability, and preparedness."
        }
      ]
    },
    {
      "id": "nursing-501-l05",
      "title": "High-Fidelity Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "nursing-501-l05-a1",
          "type": "practice",
          "title": "Simulation Control Dashboard",
          "prompt": "A mock-up of a hospital operations dashboard with real-time data streams for patient wait times, bed availability, and staffing levels. The learner can adjust variables like 'staff allocation' to see the impact."
        }
      ],
      "chunks": [
        {
          "id": "nursing-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Management",
          "content": "In this interactive simulation, learners will manage a hospital unit during a crisis, such as an unexpected surge in patient admissions. They will operate scenario controls to allocate staff, manage resources, and make critical decisions in real-time, all while balancing clinical performance with governance constraints and safety protocols."
        },
        {
          "id": "nursing-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response and Control",
          "content": "Effective crisis management requires adaptive responses. This recap focuses on how to update operational controls and protocols during a live event without losing traceability or accountability. We emphasize the importance of clear communication and documentation, even under pressure, to ensure that adaptations are safe and effective."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Simulation",
          "description": "Manage a high-pressure nursing leadership scenario. Your goal is to maintain patient safety metrics while operating under evolving constraints like staff shortages and equipment malfunctions."
        }
      ]
    },
    {
      "id": "nursing-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [],
      "questions": [
        {
          "id": "nursing-501-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "nursing-501-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "A preferred option presented without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline for comparison, explicit constraints, and predefined success criteria"
            },
            {
              "id": "c",
              "text": "High confidence in a solution without providing evidence logs"
            },
            {
              "id": "d",
              "text": "Optimization based on a single metric, such as cost"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations are built on a solid foundation of explicit assumptions, constraints, and measurable targets established before analysis begins."
        },
        {
          "id": "nursing-501-l06-q2",
          "text": "A resilient strategy for nursing operations, especially under stress, should include:",
          "skillId": "nursing-501-simulation-strategy",
          "options": [
            {
              "id": "a",
              "text": "A checkpointed execution plan with clear fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "A rigid, one-way execution plan with no capability for rollback"
            },
            {
              "id": "c",
              "text": "No predefined ownership mapping across clinical teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented critical decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in operations depends on planned checkpoints, predefined fallback options, and explicit escalation pathways to manage unexpected events."
        },
        {
          "id": "nursing-501-l06-q3",
          "text": "During a simulation of a patient surge, you notice wait times exceeding the safety threshold. What is the most appropriate immediate action based on adaptive response design?",
          "skillId": "nursing-501-adaptive-response",
          "options": [
            {
              "id": "a",
              "text": "Wait for the situation to resolve itself at the end of the shift."
            },
            {
              "id": "b",
              "text": "Activate a pre-defined escalation protocol to bring in additional resources."
            },
            {
              "id": "c",
              "text": "Change the safety threshold in the system to make the metrics look better."
            },
            {
              "id": "d",
              "text": "Continue operating as normal but ask staff to work faster."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptive response relies on using predefined thresholds to trigger specific, planned actions, such as escalation protocols, to manage emerging risks."
        },
        {
          "id": "nursing-501-l06-q4",
          "text": "When presenting a tradeoff analysis between two staffing models, what is the most effective communication strategy?",
          "skillId": "nursing-501-tradeoff-communication",
          "options": [
            {
              "id": "a",
              "text": "Only present the data that supports your preferred model."
            },
            {
              "id": "b",
              "text": "Present a balanced view comparing both models against shared criteria like safety, cost, and staff satisfaction."
            },
            {
              "id": "c",
              "text": "Focus entirely on the financial costs and ignore clinical or staff-related impacts."
            },
            {
              "id": "d",
              "text": "Use complex jargon to demonstrate expertise without explaining the practical implications."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective tradeoff communication requires a transparent and balanced comparison of all viable options against a consistent set of relevant criteria."
        }
      ]
    },
    {
      "id": "nursing-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nursing-501-l07-a1",
          "type": "image",
          "title": "Accountability Flowchart",
          "prompt": "A flowchart illustrating a governance process. It starts with 'Policy Intent', moves to 'Operational Control' and 'Monitoring', and has branches for 'Remediation' and 'Stakeholder Reporting'."
        }
      ],
      "chunks": [
        {
          "id": "nursing-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Nursing leadership decisions have wide-ranging effects. In this lesson, learners will map the distribution of benefits, burdens, and delayed consequences across various stakeholder groups, including patients, families, clinical staff, and the broader community. This analysis is crucial for ensuring equitable and responsible practice."
        },
        {
          "id": "nursing-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the architecture of accountability. This includes systems for decision traceability (who made what decision and why), the rights of stakeholders to review those decisions, and the obligation of the organization to remediate failures. A strong accountability framework is essential for maintaining public trust and driving continuous improvement."
        },
        {
          "id": "nursing-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a practical checklist for responsible leadership. This tool helps connect key decisions to ethical principles, policy compliance, and organizational resilience. It serves as a guide to ensure that performance goals are pursued in a way that is transparent, accountable, and aligned with professional nursing values."
        }
      ],
      "flashcards": [
        {
          "id": "nursing-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the positive and negative outcomes of a decision are allocated across different populations and over various timescales."
        },
        {
          "id": "nursing-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record linking a specific decision to the evidence, rationale, and individuals responsible for it."
        },
        {
          "id": "nursing-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances the pursuit of performance with duties of accountability, ethical conduct, and stakeholder engagement."
        }
      ]
    },
    {
      "id": "nursing-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nursing-501-l08-a1",
          "type": "practice",
          "title": "Defense Presentation Template",
          "prompt": "A slide deck template with pre-defined sections: 'Problem Statement', 'Proposed Intervention', 'Evidence Base', 'Risk Analysis', 'Implementation Plan', and 'Evaluation Metrics'."
        }
      ],
      "chunks": [
        {
          "id": "nursing-501-l08-c1",
          "kind": "practice",
          "title": "Assembling the Defense Brief",
          "content": "In this activity, learners will assemble a comprehensive defense brief for a capstone project. This brief will synthesize their main claims, the supporting evidence, an honest assessment of uncertainty and limitations, and proposed pathways for implementation and remediation. This exercise hones the skill of organizing a complex argument into a clear, defensible proposal."
        },
        {
          "id": "nursing-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This final section is a rehearsal for the capstone defense. Learners will practice responding to critical questions and constructive feedback from a simulated expert panel. The questioning will cover technical methods, governance implications, and stakeholder concerns, building confidence and preparing learners to communicate their work effectively under professional scrutiny."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your specialization recommendations to a simulated panel of nursing executives and clinical experts. Respond to their critique and questioning in a professional setting."
        }
      ]
    }
  ]
};
