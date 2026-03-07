import type { LearningModule } from "@/lib/modules/types";

export const medicine_501_Module: LearningModule = {
  "id": "medicine-501",
  "title": "Medicine Specialization Studio",
  "description": "Post-401 specialization in Medicine, focused on complex systems diagnostics, clinical operations design, impact and tradeoff analysis, and medical governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Medicine",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "medicine",
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
    "Apply advanced methods for diagnosing complex medical systems in high-constraint environments.",
    "Design robust systems for clinical operations and execution with measurable control gates.",
    "Evaluate medical interventions, analyzing their impact and tradeoffs with research-grade rigor.",
    "Operationalize medical governance and leadership with accountable oversight and clear escalation pathways.",
    "Lead cross-functional decision reviews, communicating explicit tradeoffs to all stakeholders.",
    "Defend clinical and policy recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "medicine-501-l01",
      "title": "Advanced Foundations in Medical Systems",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "medicine-501-l01-a1",
          "type": "image",
          "title": "The Four Axes of Medical Specialization",
          "content": "A diagram illustrating the four core topics of the course: 1. Systems Diagnostics, 2. Operations Design, 3. Impact Analysis, and 4. Governance & Leadership, showing how they interconnect."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Learn to define the boundaries of a complex medical problem, from a single patient with multi-organ failure to a community-wide public health crisis. We will explore how to accurately scope diagnostic systems and design effective operational plans to deliver care within established protocols and constraints."
        },
        {
          "id": "medicine-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "This section focuses on mapping causal pathways that connect interventions to health outcomes. We will also model uncertainty, identifying key variables and dependencies within medical systems. This foundational knowledge is essential for planning effective and resilient healthcare interventions."
        },
        {
          "id": "medicine-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds and Confidence",
          "content": "In this recap, we emphasize that all clinical and policy claims must be linked to measurable indicators. This includes establishing confidence bounds for data and setting up review checkpoints to ensure that all information is reliable, verifiable, and meets rigorous standards."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-501-l01-f1",
          "front": "Medical Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions, measurable constraints, and clear system boundaries."
        },
        {
          "id": "medicine-501-l01-f2",
          "front": "Clinical Operations Design",
          "back": "The architecture of care delivery that determines its reliability and quality under stress."
        },
        {
          "id": "medicine-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "The discipline of evaluating interventions to identify both their intended benefits and unintended consequences."
        }
      ]
    },
    {
      "id": "medicine-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "medicine-501-l02-a1",
          "type": "image",
          "title": "Clinical Workflow Diagram",
          "content": "A flowchart of a complex treatment protocol, highlighting decision points, escalation paths, and quality control checkpoints (control gates)."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this interactive lab, you will design a specialized clinical workflow for a hypothetical scenario. You will then conduct stress tests on your design by simulating adverse events, such as a sudden equipment failure or unexpected patient complication, to identify and mitigate weaknesses."
        },
        {
          "id": "medicine-501-l02-c2",
          "kind": "recap",
          "title": "Clinical Governance Checkpoints",
          "content": "We will recap how robust workflows must incorporate checkpoints, criteria for halting or reversing a procedure (rollback criteria), and clear escalation thresholds. These elements are vital for ensuring medical processes are safe, adaptable, and maintain high quality of care."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match the clinical governance control with its primary effect on reliability and patient safety.",
          "pairs": [
            {
              "left": "Pre-treatment peer review",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Adverse event protocol",
              "right": "Limits harm during an unexpected outcome"
            },
            {
              "left": "Patient monitoring dashboard",
              "right": "Supports defensible analysis of an intervention's impact"
            },
            {
              "left": "Morbidity & Mortality (M&M) review",
              "right": "Improves future decision quality by learning from past cases"
            }
          ]
        }
      ]
    },
    {
      "id": "medicine-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "medicine-501-l03-a1",
          "type": "image",
          "title": "Key Concepts Review",
          "content": "A one-page summary sheet with key terms and definitions from Lessons 1 and 2, such as 'Causal Modeling,' 'Evidence Thresholds,' and 'Clinical Governance Checkpoints.'"
        }
      ],
      "questions": [
        {
          "id": "medicine-501-l03-q1",
          "text": "Which practice most improves the quality of a complex medical diagnosis?",
          "skillId": "medicine-501-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Relying solely on initial intuition"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced diagnostic decisions improve when assumptions, constraints, and metrics are made explicit and transparent."
        },
        {
          "id": "medicine-501-l03-q2",
          "text": "A robust clinical operations plan requires:",
          "skillId": "medicine-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear role assignments, scheduled checkpoints, and defined escalation thresholds"
            },
            {
              "id": "b",
              "text": "Vague role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-procedure review"
            },
            {
              "id": "d",
              "text": "No protocols for handling adverse events"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution in a medical setting depends on ownership clarity, process controls, and threshold-driven governance."
        },
        {
          "id": "medicine-501-l03-q3",
          "text": "What is the primary purpose of modeling uncertainty in a clinical plan?",
          "skillId": "medicine-501-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "To prove the plan is perfect"
            },
            {
              "id": "b",
              "text": "To identify potential points of failure and prepare contingency plans"
            },
            {
              "id": "c",
              "text": "To make the plan seem more complex"
            },
            {
              "id": "d",
              "text": "To eliminate the need for expert judgment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Modeling uncertainty helps in creating more resilient plans by anticipating and preparing for potential challenges."
        },
        {
          "id": "medicine-501-l03-q4",
          "text": "A 'control gate' in a clinical workflow is best described as:",
          "skillId": "medicine-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "An unnecessary delay in patient care"
            },
            {
              "id": "b",
              "text": "A planned checkpoint to verify safety and quality before proceeding"
            },
            {
              "id": "c",
              "text": "A way to assign blame after a negative outcome"
            },
            {
              "id": "d",
              "text": "A physical barrier in a hospital"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Control gates are essential for governance, ensuring that standards are met at critical stages of a medical process."
        }
      ]
    },
    {
      "id": "medicine-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "medicine-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A table comparing three different treatment options for a patient. The rows are evaluation criteria (Efficacy, Safety, Cost, Equity) and the columns are the options, with cells filled in to show the tradeoffs."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l04-c1",
          "kind": "concept",
          "title": "Complex Case Deconstruction",
          "content": "In this lesson, we will deconstruct complex cases that highlight competing constraints in medical diagnostics and treatment. We will analyze the impacts and tradeoffs involved in making high-stakes medical decisions, developing a structured approach to managing complexity."
        },
        {
          "id": "medicine-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing and Evaluation",
          "content": "Learners will compare different intervention options for a given case. They will evaluate these options across multiple dimensions, including clinical efficacy, patient safety, cost, equity, and governance. This comparative analysis is crucial for making informed and balanced healthcare decisions."
        },
        {
          "id": "medicine-501-l04-c3",
          "kind": "recap",
          "title": "The Clinical Recommendation Framework",
          "content": "We will review the key components of a defensible recommendation. This includes stating assumptions, presenting evidence, outlining risk controls, and defining fallback plans. This structured approach ensures that decisions are well-reasoned, transparent, and prepared for potential challenges."
        }
      ]
    },
    {
      "id": "medicine-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "medicine-501-l05-a1",
          "type": "image",
          "title": "Simulated Patient Monitor",
          "content": "An interactive mock-up of a hospital patient monitor, showing fluctuating vital signs (heart rate, blood pressure, oxygen saturation) that the learner must respond to."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Decision-Making",
          "content": "In this interactive simulation, learners will manage a dynamically evolving clinical scenario. They must make real-time decisions, balancing treatment efficacy with patient safety and resource constraints, responding to new information as it becomes available."
        },
        {
          "id": "medicine-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "In our recap, we will discuss how effective responses in dynamic scenarios require updating plans and controls without losing traceability or accountability. This principle is vital for ensuring that all actions taken in a crisis are transparent, justified, and auditable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure clinical scenario where a patient's condition unexpectedly deteriorates. You must diagnose the new problem and adjust the treatment plan under time pressure and uncertainty."
        }
      ]
    },
    {
      "id": "medicine-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "medicine-501-l06-a1",
          "type": "image",
          "title": "Case Analysis Checklist",
          "content": "A graphic checklist summarizing the key steps for a rigorous case analysis: 1. Define Baseline & Constraints, 2. Identify Options, 3. Analyze Tradeoffs, 4. Formulate Recommendation, 5. Specify Controls."
        }
      ],
      "questions": [
        {
          "id": "medicine-501-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "medicine-501-skill-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and measurable success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without supporting evidence"
            },
            {
              "id": "d",
              "text": "Optimization based on a single metric only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with an explicit definition of the problem, including assumptions, constraints, and measurable targets."
        },
        {
          "id": "medicine-501-l06-q2",
          "text": "A resilient strategy for a complex medical intervention should include:",
          "skillId": "medicine-501-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback options and escalation criteria"
            },
            {
              "id": "b",
              "text": "A rigid plan that cannot be changed once started"
            },
            {
              "id": "c",
              "text": "No clear ownership mapping across the clinical team"
            },
            {
              "id": "d",
              "text": "Undocumented decisions made during the procedure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in complex operations depends on planned checkpoints, fallback options, and explicit escalation design."
        },
        {
          "id": "medicine-501-l06-q3",
          "text": "When evaluating a new treatment's impact, which method is most rigorous?",
          "skillId": "medicine-501-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "A single success story without a control group"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus analysis of side effects and uncertainty"
            },
            {
              "id": "c",
              "text": "An outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Changing the success criteria after seeing the outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons against a baseline, a full analysis of side effects, and a transparent disclosure of uncertainty."
        },
        {
          "id": "medicine-501-l06-q4",
          "text": "During a simulation of a patient crisis, 'adaptive response' means:",
          "skillId": "medicine-501-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Sticking to the original plan no matter what"
            },
            {
              "id": "b",
              "text": "Updating the treatment plan based on new data while maintaining accountability"
            },
            {
              "id": "c",
              "text": "Waiting for the crisis to resolve on its own"
            },
            {
              "id": "d",
              "text": "Trying random interventions until one works"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptive response is the ability to adjust to changing conditions in a structured, traceable, and accountable manner."
        }
      ]
    },
    {
      "id": "medicine-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "medicine-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "An infographic showing how a public health decision (e.g., a new vaccine policy) affects various stakeholders: patients, healthcare providers, public health agencies, and the community, highlighting benefits and burdens for each."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learners will map the distribution of benefits, burdens, and delayed effects of medical decisions across different stakeholder groups. Understanding these dynamics is essential for equitable and ethical decision-making in both clinical practice and public health."
        },
        {
          "id": "medicine-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the architecture of accountability in medicine. This includes ensuring decision traceability, defining review rights for stakeholders, and establishing clear remediation obligations when outcomes are poor. These elements are crucial for maintaining trust and integrity."
        },
        {
          "id": "medicine-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a checklist for responsible leadership. It connects clinical and policy outcomes with ethical duties, policy compliance, and system resilience. This serves as a practical guide for leaders navigating the complex responsibilities of the medical field."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a decision are allocated across different populations and over time."
        },
        {
          "id": "medicine-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of the evidence, ownership, and rationale behind a significant decision."
        },
        {
          "id": "medicine-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making that balances performance, accountability, and ethical considerations."
        }
      ]
    },
    {
      "id": "medicine-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "medicine-501-l08-a1",
          "type": "image",
          "title": "Capstone Defense Presentation Template",
          "content": "A slide deck template with pre-formatted slides for: 1. Problem Statement, 2. Proposed Intervention, 3. Evidence & Analysis, 4. Risk & Mitigation, 5. Recommendation."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive lab, learners will assemble a comprehensive defense brief for their capstone recommendation. The brief must include evidence-backed claims, an analysis of uncertainty, and clear pathways for remediation, preparing them to communicate their reasoning effectively."
        },
        {
          "id": "medicine-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this session, learners will rehearse their defense by responding to critiques from simulated expert panels, representing technical experts, governance bodies, and patient advocates. This rehearsal builds confidence and sharpens their ability to defend their position professionally."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendation to a simulated expert panel. Respond to adversarial cross-examination on your data, assumptions, and ethical considerations."
        }
      ]
    }
  ]
};
