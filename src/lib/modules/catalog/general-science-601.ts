import type { LearningModule } from "@/lib/modules/types";

export const general_science_601_Module: LearningModule = {
  "id": "general-science-601",
  "title": "General Science Research and Leadership",
  "description": "Post-401 specialization in General Science, focused on general science systems diagnostics, general science operations and execution design, general science impact and tradeoff analysis, and general science governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "General Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "general-science",
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
    "Apply advanced methods for general science systems diagnostics in high-constraint environments",
    "Design robust systems for general science operations and execution design with measurable control gates",
    "Evaluate interventions in general science impact and tradeoff analysis with research-grade rigor",
    "Operationalize general science governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "general-science-601-l01",
      "title": "Advanced Foundations in General Science",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "general-science-601-l01-a1",
          "type": "image",
          "title": "Causal Loop Diagram",
          "content": "A diagram illustrating system dependencies and feedback loops, crucial for diagnostics."
        }
      ],
      "chunks": [
        {
          "id": "general-science-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces advanced scope boundaries in General Science. Learn to diagnose complex systems by understanding how scientific components interact. We will cover the design of effective operations and execution strategies, which are essential for managing the intricate complexities of scientific inquiry and tackling real-world challenges."
        },
        {
          "id": "general-science-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Explore how to map causal pathways that connect events and actions. You will learn to identify uncertainty ranges and system dependencies, which are critical for planning effective interventions and making informed decisions in scientific research."
        },
        {
          "id": "general-science-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "A recap on the importance of linking all scientific claims to measurable indicators. We will review how to establish confidence bounds and set up review checkpoints to ensure all findings are reliable and maintain a high standard of evidence."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-601-l01-f1",
          "front": "General Science Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "general-science-601-l01-f2",
          "front": "General Science Operations Design",
          "back": "The architecture for execution that determines reliability under stress."
        },
        {
          "id": "general-science-601-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "An evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "general-science-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "general-science-601-l02-a1",
          "type": "image",
          "title": "Workflow with Control Gates",
          "content": "Visual representation of a process with built-in checkpoints for quality and risk management."
        }
      ],
      "chunks": [
        {
          "id": "general-science-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized workflows for specific scientific tasks. Then, you'll conduct stress tests by simulating adverse scenarios to learn how to adapt and improve scientific methods under challenging conditions."
        },
        {
          "id": "general-science-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap covers how to structure workflows with essential components like checkpoints, rollback criteria, and threshold-based escalation. These elements are critical for monitoring processes and enhancing the reliability of scientific methods."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-601-l02-act1",
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
      "id": "general-science-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "general-science-601-l03-a1",
          "type": "image",
          "title": "Key Concepts Review",
          "content": "A one-page summary of core concepts from the first two lessons, including diagnostics, execution design, and control gates."
        }
      ],
      "questions": [
        {
          "id": "general-science-601-l03-q1",
          "text": "Which practice most improves the decision quality of general science systems diagnostics?",
          "skillId": "general-science-601-diagnostics",
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
          "id": "general-science-601-l03-q2",
          "text": "At an advanced level, strong execution design for general science operations requires:",
          "skillId": "general-science-601-execution",
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
          "id": "general-science-601-l03-q3",
          "text": "A defensible approach to impact and tradeoff analysis includes:",
          "skillId": "general-science-601-evaluation",
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
              "text": "Changing success criteria after seeing the outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "general-science-601-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "general-science-601-governance",
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
              "text": "Targets without ownership or an escalation design"
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
      "id": "general-science-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "general-science-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A structured table for comparing multiple options across criteria like cost, safety, and impact."
        }
      ],
      "chunks": [
        {
          "id": "general-science-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson teaches you to frame cases that highlight competing constraints in general science systems. You will analyze the impacts and trade-offs of different scientific decisions, a crucial skill for making informed choices that balance various scientific and societal needs."
        },
        {
          "id": "general-science-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Practice comparing different options based on criteria such as safety, reliability, cost, equity, and governance. This comparative analysis helps clarify the implications of choices and ensures all relevant factors are considered when making decisions in science."
        },
        {
          "id": "general-science-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We will recap the key components of a strong recommendation. This includes stating assumptions, presenting evidence, identifying risk controls, and outlining fallback plans. This structure ensures your decisions are well-supported and prepared for potential challenges."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-601-l04-f1",
          "front": "Competing Constraints",
          "back": "When the optimization of one system metric (e.g., speed) comes at the cost of another (e.g., safety)."
        },
        {
          "id": "general-science-601-l04-f2",
          "front": "Decision Memo",
          "back": "A structured document that outlines a recommendation, its evidence, assumptions, risks, and alternatives."
        },
        {
          "id": "general-science-601-l04-f3",
          "front": "Fallback Plan",
          "back": "A pre-defined alternative course of action to be taken if the primary plan fails or encounters unforeseen issues."
        }
      ]
    },
    {
      "id": "general-science-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "general-science-601-l05-a1",
          "type": "image",
          "title": "Simulation Control Dashboard",
          "content": "An interactive dashboard interface for managing variables and constraints in a live scenario."
        }
      ],
      "chunks": [
        {
          "id": "general-science-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive simulation, you will act as an operator managing scenario controls. You will learn to balance performance with governance constraints, an essential skill for effective decision-making in high-stakes scientific contexts."
        },
        {
          "id": "general-science-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap explains how effective responses in dynamic scenarios involve updating control gates while maintaining traceability and accountability. This is critical for tracking changes and ensuring all actions are transparent and justifiable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure general science scenario. Your task is to tune system controls in real-time to mitigate risks and achieve objectives under uncertainty and unexpected events."
        }
      ]
    },
    {
      "id": "general-science-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "general-science-601-l06-a1",
          "type": "image",
          "title": "Scenario Debrief Checklist",
          "content": "A checklist to guide the post-simulation analysis of decisions, outcomes, and lessons learned."
        }
      ],
      "questions": [
        {
          "id": "general-science-601-l06-q1",
          "text": "In advanced casework, what is the first requirement for a defensible recommendation?",
          "skillId": "general-science-601-case-framing",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and defined success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without evidence logs"
            },
            {
              "id": "d",
              "text": "Optimization of only a single metric"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with an explicit definition of the baseline, constraints, and measurable targets."
        },
        {
          "id": "general-science-601-l06-q2",
          "text": "When performing a tradeoff analysis between two scientific interventions, which approach is most rigorous?",
          "skillId": "general-science-601-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "Choosing the option with the most compelling narrative"
            },
            {
              "id": "b",
              "text": "Comparing them on a single, easy-to-measure metric"
            },
            {
              "id": "c",
              "text": "Evaluating both against a shared set of criteria, including risks and side effects"
            },
            {
              "id": "d",
              "text": "Selecting the one that requires the least amount of change"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Rigorous analysis requires comparing options against a consistent, multi-dimensional set of criteria that includes potential downsides."
        },
        {
          "id": "general-science-601-l06-q3",
          "text": "During a live simulation, an unexpected adverse event occurs. What is the most effective immediate response?",
          "skillId": "general-science-601-simulation-response",
          "options": [
            {
              "id": "a",
              "text": "Continue with the original plan regardless of the new event"
            },
            {
              "id": "b",
              "text": "Activate a pre-defined fallback plan or contingency protocol"
            },
            {
              "id": "c",
              "text": "Halt the simulation and wait for external guidance"
            },
            {
              "id": "d",
              "text": "Focus solely on assigning blame for the event"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective crisis management in a simulation relies on having and using pre-planned contingencies and fallback options."
        },
        {
          "id": "general-science-601-l06-q4",
          "text": "What is the primary goal of an adaptive response design in a dynamic system?",
          "skillId": "general-science-601-adaptive-design",
          "options": [
            {
              "id": "a",
              "text": "To ensure the system never deviates from its initial plan"
            },
            {
              "id": "b",
              "text": "To allow system controls to be updated in response to new information while maintaining accountability"
            },
            {
              "id": "c",
              "text": "To eliminate all forms of uncertainty from the system"
            },
            {
              "id": "d",
              "text": "To make changes without documenting the rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptive design is about creating systems that can change intelligently based on new data, without losing track of why changes were made."
        }
      ]
    },
    {
      "id": "general-science-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "general-science-601-l07-a1",
          "type": "image",
          "title": "Accountability Framework",
          "content": "A chart mapping decision authority, traceability requirements, and remediation pathways for stakeholders."
        }
      ],
      "chunks": [
        {
          "id": "general-science-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learn how to map the distribution of benefits, burdens, and delayed effects across different stakeholder groups. This is crucial for assessing the broader societal impact of scientific decisions and ensuring equitable outcomes."
        },
        {
          "id": "general-science-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section focuses on designing accountability into decision-making processes. This includes integrating decision traceability, review rights, and remediation obligations to ensure that decisions are made responsibly and that there are clear mechanisms for addressing issues."
        },
        {
          "id": "general-science-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This final recap provides a checklist for responsible leadership. It connects project outcomes, ethical considerations, policy compliance, and resilience strategies, ensuring you can demonstrate a holistic and accountable approach in your scientific work."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes, both positive and negative, are allocated across different populations and timescales."
        },
        {
          "id": "general-science-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of the evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "general-science-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making behavior that balances performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "general-science-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "general-science-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Rubric",
          "content": "A scoring rubric outlining the criteria for a successful defense, including evidence quality, logical rigor, and clarity."
        }
      ],
      "chunks": [
        {
          "id": "general-science-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this activity, you will construct a comprehensive defense brief. It must include your main claims, supporting evidence, the bounds of uncertainty, and proposed remediation pathways. This exercise hones your ability to build and present a rigorous scientific argument."
        },
        {
          "id": "general-science-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Practice responding to critiques from technical experts, governance representatives, and stakeholders. This rehearsal will refine your communication skills and prepare you to confidently address challenging questions and feedback during your final defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendations to a simulated panel of experts. You will face adversarial cross-examination designed to test the rigor and resilience of your work."
        }
      ]
    }
  ]
};
