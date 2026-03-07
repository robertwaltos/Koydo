import type { LearningModule } from "@/lib/modules/types";

export const nursing_601_Module: LearningModule = {
  "id": "nursing-601",
  "title": "Nursing Research and Leadership",
  "description": "Post-401 specialization in Nursing, focused on nursing systems diagnostics, nursing operations and execution design, nursing impact and tradeoff analysis, and nursing governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Nursing",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nursing",
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
    "Apply advanced methods for nursing systems diagnostics in high-constraint environments.",
    "Design robust systems for nursing operations and execution with measurable control gates.",
    "Evaluate interventions in nursing impact and tradeoff analysis with research-grade rigor.",
    "Operationalize nursing governance and leadership with accountable governance and escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "nursing-601-l01",
      "title": "Advanced Foundations in Nursing Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nursing-601-l01-a1",
          "type": "diagram",
          "title": "Core Concepts Framework",
          "content": "A diagram illustrating the relationship between Systems Diagnostics, Operations Design, and Impact Analysis in a clinical setting."
        }
      ],
      "chunks": [
        {
          "id": "nursing-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Effective nursing leadership begins with clearly defining the problem space. This lesson explores the advanced scope of nursing systems, focusing on how to diagnose patient and system needs accurately and design effective operational workflows. Mastering these concepts is key to improving patient outcomes through a systematic, evidence-based approach."
        },
        {
          "id": "nursing-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "To plan effective interventions, we must understand cause and effect. This section covers mapping causal pathways—for example, how staffing levels might impact infection rates. We will also model uncertainty and system dependencies to create more resilient plans that account for real-world variability."
        },
        {
          "id": "nursing-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "All claims and recommendations must be supported by measurable indicators. This recap emphasizes the importance of establishing confidence bounds for your data and implementing review checkpoints to ensure all practices are evidence-based, reliable, and maintain the highest standards of care."
        }
      ],
      "flashcards": [
        {
          "id": "nursing-601-l01-f1",
          "front": "Nursing Systems Diagnostics",
          "back": "A specialization requiring explicit assumptions and measurable constraints to define a problem."
        },
        {
          "id": "nursing-601-l01-f2",
          "front": "Nursing Operations Design",
          "back": "The architecture of clinical execution that determines reliability and safety under stress."
        },
        {
          "id": "nursing-601-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "An evaluation discipline for identifying the true gains, hidden costs, and side effects of an intervention."
        }
      ]
    },
    {
      "id": "nursing-601-l02",
      "title": "Nursing Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "nursing-601-l02-a1",
          "type": "diagram",
          "title": "Control Gate Workflow",
          "content": "An example workflow for a high-risk procedure, highlighting checkpoints, rollback triggers, and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "nursing-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this hands-on lab, you will design a specialized workflow for managing a hospital-wide sepsis alert. You will then stress-test your design by simulating adverse scenarios, such as a sudden patient influx or equipment failure, to learn how to build resilient plans for real-world challenges."
        },
        {
          "id": "nursing-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap reinforces that robust workflows must include checkpoints for quality assurance, clear rollback criteria to safely undo a process, and threshold-based escalation pathways to alert leadership when problems arise. These elements are crucial for maintaining patient safety and care quality."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-601-l02-act1",
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
      "id": "nursing-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nursing-601-l03-a1",
          "type": "checklist",
          "title": "Pre-Quiz Review Checklist",
          "content": "Key concepts to review: explicit assumptions, measurable indicators, control gates, and defensible analysis."
        }
      ],
      "questions": [
        {
          "id": "nursing-601-l03-q1",
          "text": "Which practice most improves the decision quality of nursing systems diagnostics?",
          "skillId": "nursing-601-skill-core",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit."
        },
        {
          "id": "nursing-601-l03-q2",
          "text": "At an advanced level, strong execution design for nursing operations requires:",
          "skillId": "nursing-601-skill-execution",
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
          "id": "nursing-601-l03-q3",
          "text": "A defensible approach to nursing impact and tradeoff analysis includes:",
          "skillId": "nursing-601-skill-eval",
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
          "id": "nursing-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "nursing-601-skill-governance",
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
        }
      ]
    },
    {
      "id": "nursing-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nursing-601-l04-a1",
          "type": "infographic",
          "title": "Tradeoff Analysis Matrix",
          "content": "A visual matrix comparing two treatment options across safety, cost, reliability, and equity dimensions."
        }
      ],
      "chunks": [
        {
          "id": "nursing-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "We will analyze a case study of a rural clinic facing a budget shortfall and rising patient demand. This lesson frames the competing constraints within the clinic's nursing system and analyzes how these constraints affect any potential solution. Understanding these dynamics is vital for making informed, ethical decisions."
        },
        {
          "id": "nursing-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Using the rural clinic case, you will compare two proposed solutions: reducing staff hours versus limiting non-essential services. This comparative analysis across dimensions like patient safety, staff morale, cost, and community equity will help you articulate the complex tradeoffs involved in healthcare leadership."
        },
        {
          "id": "nursing-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "This recap highlights a structured approach for presenting recommendations. Each proposal must include clear assumptions, supporting evidence, risk controls to mitigate potential harm, and pre-planned fallback options. This ensures that all decisions are well-informed and prepared for potential challenges."
        }
      ]
    },
    {
      "id": "nursing-601-l05",
      "title": "Nursing Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "nursing-601-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "Screenshot of the interactive simulation interface, showing key performance indicators (KPIs) like patient wait times and staff fatigue, alongside control levers for resource allocation."
        }
      ],
      "chunks": [
        {
          "id": "nursing-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this simulation, you will manage a busy emergency department during a mass casualty event. Your goal is to adjust staffing, resources, and patient flow in real-time to balance performance metrics with governance constraints, such as maintaining standards of care and regulatory compliance."
        },
        {
          "id": "nursing-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Effective responses in a crisis require adapting your operational plan without losing control. This recap discusses how to update control gates and workflows on the fly while maintaining full traceability and accountability for every decision made under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure nursing scenario and tune controls under uncertainty.",
          "steps": [
            {
              "id": "s1",
              "title": "Initial State",
              "content": "Review the baseline state of the Emergency Department: current patient load, staffing levels, and resource availability."
            },
            {
              "id": "s2",
              "title": "Inject Event",
              "content": "A mass casualty event is announced. Patient influx is projected to triple in the next hour. Key staff members are delayed."
            },
            {
              "id": "s3",
              "title": "Decision Point",
              "content": "Using the control dashboard, reallocate staff, call in contingency teams, and adjust patient triage protocols. Justify your choices."
            },
            {
              "id": "s4",
              "title": "Review Outcome",
              "content": "Analyze the impact of your decisions on patient wait times, care quality metrics, and staff burnout. Identify what could be improved."
            }
          ]
        }
      ]
    },
    {
      "id": "nursing-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "nursing-601-l06-a1",
          "type": "checklist",
          "title": "Case & Sim Mastery Checklist",
          "content": "Review key skills: framing defensible recommendations, designing resilient operations, and conducting rigorous tradeoff analysis under pressure."
        }
      ],
      "questions": [
        {
          "id": "nursing-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "nursing-601-skill-case1",
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
          "id": "nursing-601-l06-q2",
          "text": "A resilient strategy for nursing operations, as practiced in the simulation, should include:",
          "skillId": "nursing-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "A single, rigid plan that cannot be changed"
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
          "explanation": "Resilience depends on checkpoints, fallback options, and explicit escalation design, especially under pressure."
        },
        {
          "id": "nursing-601-l06-q3",
          "text": "When evaluating competing solutions in a case study, which method is most rigorous?",
          "skillId": "nursing-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "A single success story without controls"
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
              "text": "Retrospective scope changes to fit outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons against a baseline, analysis of unintended consequences, and disclosure of uncertainty."
        },
        {
          "id": "nursing-601-l06-q4",
          "text": "In the simulation, you had to make rapid decisions. What is the best way to ensure accountability for those decisions?",
          "skillId": "nursing-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Hope that outcomes are good"
            },
            {
              "id": "b",
              "text": "Log decisions and their rationale, even if briefly"
            },
            {
              "id": "c",
              "text": "Delegate all hard choices to someone else"
            },
            {
              "id": "d",
              "text": "Make decisions without informing the team"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accountability in high-pressure situations is maintained by documenting decisions and their underlying rationale for later review."
        }
      ]
    },
    {
      "id": "nursing-601-l07",
      "title": "Nursing Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nursing-601-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Impact Map",
          "content": "A concentric circle diagram showing the impact of a new public health policy on patients, providers, hospital systems, and the community."
        }
      ],
      "chunks": [
        {
          "id": "nursing-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Nursing decisions have ripple effects. For a new policy on nurse-to-patient ratios, we will map the intended benefits (improved patient safety) against potential burdens (increased costs, staffing shortages in smaller hospitals). This analysis ensures care is equitable and just across all affected groups."
        },
        {
          "id": "nursing-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores how to build systems of accountability. This includes ensuring decision traceability through clear documentation, establishing review rights for stakeholders, and defining remediation obligations when things go wrong. These elements are essential for maintaining trust and transparency in healthcare."
        },
        {
          "id": "nursing-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a checklist for responsible leadership. This tool helps you connect clinical outcomes with ethical considerations, ensure compliance with relevant policies, and build resilience into your leadership practice, serving as a guide for complex decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "nursing-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How the benefits and burdens of a decision are allocated across different populations and timescales."
        },
        {
          "id": "nursing-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of the evidence, ownership, and rationale behind a significant decision."
        },
        {
          "id": "nursing-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making that balances performance, accountability, and ethical obligations to all stakeholders."
        }
      ]
    },
    {
      "id": "nursing-601-l08",
      "title": "Nursing Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nursing-601-l08-a1",
          "type": "template",
          "title": "Defense Brief Template",
          "content": "A structured document template for the capstone defense, with sections for Problem Statement, Proposed Solution, Evidence, Risk Analysis, and Remediation Plan."
        }
      ],
      "chunks": [
        {
          "id": "nursing-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this activity, you will assemble your capstone defense brief using the provided template. Your task is to present a solution to a complex nursing system challenge, including well-supported claims, evidence, an analysis of uncertainties, and clear pathways for remediation."
        },
        {
          "id": "nursing-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session is a rehearsal for your final defense. You will practice responding to critiques related to technical methods, governance issues, and stakeholder impact. This rehearsal will prepare you to confidently address tough questions and communicate effectively in a professional setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendations under adversarial cross-examination from a simulated expert panel.",
          "roles": [
            {
              "id": "r1",
              "title": "Presenter",
              "description": "The learner, who presents their capstone brief and defends their recommendations."
            },
            {
              "id": "r2",
              "title": "Clinical Operations Expert",
              "description": "Critiques the feasibility and operational impact of the proposal."
            },
            {
              "id": "r3",
              "title": "Research Methodologist",
              "description": "Challenges the evidence, data analysis, and uncertainty claims."
            },
            {
              "id": "r4",
              "title": "Ethics and Governance Officer",
              "description": "Questions the stakeholder impact, equity, and accountability framework."
            }
          ],
          "evaluationCriteria": [
            "Clarity of recommendation",
            "Strength of evidence",
            "Honesty about uncertainty and risks",
            "Coherence of responses to critique"
          ]
        }
      ]
    }
  ]
};
