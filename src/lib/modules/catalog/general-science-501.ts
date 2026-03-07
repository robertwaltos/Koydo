import type { LearningModule } from "@/lib/modules/types";

export const general_science_501_Module: LearningModule = {
  "id": "general-science-501",
  "title": "General Science Specialization Studio",
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
      "id": "general-science-501-l01",
      "title": "General Science Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "general-science-501-l01-a1",
          "type": "document",
          "title": "Key Concepts Guide",
          "content": "A printable PDF summarizing the core concepts of system boundaries, causal modeling, and evidence thresholds."
        }
      ],
      "chunks": [
        {
          "id": "general-science-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we will delve into the advanced concepts of scope and boundaries within General Science. We will learn how to identify and clearly define the limits of a scientific system for diagnostics, operations, and execution design. Grasping these boundaries is essential for effective problem-solving and innovation. By the end of this lesson, you will be able to map the complexities of scientific systems and apply this knowledge to real-world scenarios.",
          "visualPrompt": "A diagram illustrating a complex scientific system (e.g., a climate model). A dotted line clearly defines the 'Scope Boundary'. Arrows indicate 'Inputs' (data, resources) and 'Outputs' (predictions, results). Inside the boundary, components are labeled for 'Diagnostics' and 'Operations'."
        },
        {
          "id": "general-science-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "In this section, you will learn to map causal pathways—the connections between factors that lead to specific outcomes. We will also examine how to model uncertainty ranges and system dependencies to understand how various elements interact. This foundational knowledge is essential for planning effective interventions and anticipating a realistic range of outcomes.",
          "visualPrompt": "A causal loop diagram showing nodes like 'Funding', 'Research Activity', 'Published Papers', and 'Public Policy'. Arrows show relationships. A specific link, like 'Research Activity' to 'Published Papers', is highlighted with a confidence interval (e.g., '60-80% correlation') to represent uncertainty."
        },
        {
          "id": "general-science-501-l01-c3",
          "kind": "recap",
          "title": "Establishing Evidence Thresholds",
          "content": "It is critical to ensure that all claims are supported by measurable indicators. This means establishing clear confidence bounds and review checkpoints to validate findings. By doing so, we create a robust framework for assessing the reliability of our scientific assertions and making defensible decisions."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-501-l01-f1",
          "front": "General Science Systems Diagnostics",
          "back": "The systematic process of identifying and understanding the state of a scientific system by defining explicit assumptions and measurable constraints."
        },
        {
          "id": "general-science-501-l01-f2",
          "front": "General Science Operations Design",
          "back": "The design of a system or process that ensures it functions reliably, especially under pressure or unexpected conditions."
        },
        {
          "id": "general-science-501-l01-f3",
          "front": "General Science Impact and Tradeoff Analysis",
          "back": "A structured method for evaluating the positive outcomes (gains) and negative consequences (costs) of a scientific intervention."
        }
      ]
    },
    {
      "id": "general-science-501-l02",
      "title": "General Science Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "general-science-501-l02-a1",
          "type": "template",
          "title": "Workflow Design Canvas",
          "content": "An interactive template for designing a scientific workflow, including stages for hypothesis, experimentation, data analysis, and peer review."
        }
      ],
      "chunks": [
        {
          "id": "general-science-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive practice, you will design specialized workflows for specific scientific tasks. You will also conduct stress tests on these workflows by simulating adverse scenarios to evaluate their performance under pressure. This hands-on experience is vital for developing resilient and adaptable scientific methodologies.",
          "visualPrompt": "A flowchart of a scientific workflow. Certain points are marked with a 'stress test' icon (like a lightning bolt), with callouts describing simulated adverse scenarios: 'Data Corruption', 'Budget Cut', 'Key Personnel Unavailable'."
        },
        {
          "id": "general-science-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "In this recap, we will discuss how to enhance workflows by integrating control gates. These gates serve as checkpoints to manage processes effectively. We will also explore rollback criteria, which allow us to revert to previous states if necessary, and threshold-based escalation, which ensures that significant issues are addressed promptly by the appropriate authority.",
          "visualPrompt": "A process diagram showing a workflow with diamond-shaped 'Control Gates' at key decision points. One gate shows a 'Go' path and a 'No-Go' path leading to a 'Rollback' procedure. An alert icon indicates a 'Threshold-Based Escalation' to a higher authority."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-501-l02-act1",
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
      "id": "general-science-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "general-science-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "general-science-501-l03-q1",
          "text": "Which practice most improves decision quality in general science systems diagnostics?",
          "skillId": "general-science-501-diagnostics",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit from the start."
        },
        {
          "id": "general-science-501-l03-q2",
          "text": "At an advanced level, strong execution design for general science operations requires:",
          "skillId": "general-science-501-operations",
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
          "explanation": "Reliable advanced execution needs clear ownership, regular checkpoints, and threshold-driven governance."
        },
        {
          "id": "general-science-501-l03-q3",
          "text": "A defensible approach to general science impact and tradeoff analysis includes:",
          "skillId": "general-science-501-analysis",
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
              "text": "Changing success criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended side-effects, and honest disclosure of uncertainty."
        },
        {
          "id": "general-science-501-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "general-science-501-governance",
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
        },
        {
          "id": "general-science-501-l03-q5",
          "text": "What is the primary function of a 'control gate' in a specialist workflow?",
          "skillId": "general-science-501-operations",
          "options": [
            {
              "id": "a",
              "text": "To speed up the process at all costs"
            },
            {
              "id": "b",
              "text": "To provide a formal checkpoint for verifying conditions before proceeding"
            },
            {
              "id": "c",
              "text": "To eliminate the need for human oversight"
            },
            {
              "id": "d",
              "text": "To document the final outcome only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Control gates are formal checkpoints designed to ensure quality, manage risk, and verify that specific criteria are met before a process continues."
        }
      ]
    },
    {
      "id": "general-science-501-l04",
      "title": "General Science Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "general-science-501-l04-a1",
          "type": "document",
          "title": "Case Study: The Artemis Project",
          "content": "A detailed briefing document for a fictional large-scale scientific project, outlining its goals, budget, stakeholders, and inherent challenges."
        }
      ],
      "chunks": [
        {
          "id": "general-science-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This segment focuses on scenario architecture, where we will frame the competing constraints that exist in general science systems. We will analyze the impacts and trade-offs involved in various scientific decisions. Understanding these dynamics is essential for making informed choices that balance different objectives.",
          "visualPrompt": "A central topic 'Project Artemis Decision' is in the middle of a mind map. Radiating branches point to competing constraints: 'Launch Deadline', 'Budget Limits', 'Crew Safety Standards', 'Scientific Objectives', and 'Public Perception'."
        },
        {
          "id": "general-science-501-l04-c2",
          "kind": "practice",
          "title": "Framing Tradeoffs",
          "content": "In this practice session, you will compare different options across several important dimensions, including safety, reliability, cost, and governance. This comparative analysis will help you understand the implications of each choice and the importance of balancing these factors in scientific decision-making."
        },
        {
          "id": "general-science-501-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "In this recap, we will review the essential components of a decision memo. Each recommendation should clearly outline the underlying assumptions, supporting evidence, risk controls, and fallback plans. This structured approach ensures that decisions are well-reasoned, transparent, and accountable.",
          "visualPrompt": "A template for a 'Decision Memo'. It has clear sections for '1. Recommendation', '2. Supporting Evidence', '3. Key Assumptions', '4. Risk Analysis & Controls', and '5. Fallback Plan'."
        }
      ]
    },
    {
      "id": "general-science-501-l05",
      "title": "General Science Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "general-science-501-l05-a1",
          "type": "interactive_guide",
          "title": "Simulation Control Interface Guide",
          "content": "An interactive tutorial explaining the controls, metrics, and objectives of the upcoming simulation."
        }
      ],
      "chunks": [
        {
          "id": "general-science-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "During this interactive practice, you will operate scenario controls, managing various elements of a scientific project while balancing performance and governance constraints. This experience will help you understand the complexities of real-world scientific operations and the importance of maintaining oversight.",
          "visualPrompt": "A mock-up of a computer dashboard for a scientific simulation. It shows real-time graphs for 'Project Budget' and 'System Reliability'. There are sliders for 'Resource Allocation' and 'Safety Protocol Level' that the user can adjust."
        },
        {
          "id": "general-science-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "In this recap, we will discuss the importance of designing effective responses to unexpected events in scientific scenarios. These responses should activate pre-planned contingencies and update control gates without losing traceability or accountability. This ensures that all actions are documented and auditable, which is crucial for maintaining scientific integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure general science scenario where you must tune system controls to manage unexpected events and resource constraints."
        }
      ]
    },
    {
      "id": "general-science-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "general-science-501-l06-a1",
          "type": "document",
          "title": "Case & Simulation Debrief",
          "content": "A summary of the key decision points and outcomes from the case study and simulation exercises."
        }
      ],
      "questions": [
        {
          "id": "general-science-501-l06-q1",
          "text": "In a complex case study with multiple competing constraints (e.g., cost, safety, speed), what is the most effective first step?",
          "skillId": "general-science-501-analysis",
          "options": [
            {
              "id": "a",
              "text": "Choose the cheapest option immediately"
            },
            {
              "id": "b",
              "text": "Frame the tradeoffs explicitly using a shared set of metrics"
            },
            {
              "id": "c",
              "text": "Ignore the constraints that are hardest to measure"
            },
            {
              "id": "d",
              "text": "Wait for a perfect solution with no tradeoffs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced case analysis requires explicitly framing and comparing tradeoffs against common metrics to make a defensible decision."
        },
        {
          "id": "general-science-501-l06-q2",
          "text": "During a live simulation, an unexpected system failure occurs. What does an adaptive response design prioritize?",
          "skillId": "general-science-501-operations",
          "options": [
            {
              "id": "a",
              "text": "Immediately ending the simulation to avoid bad data"
            },
            {
              "id": "b",
              "text": "Ignoring the failure and continuing with the original plan"
            },
            {
              "id": "c",
              "text": "Activating a pre-defined fallback plan while maintaining traceability of the decision"
            },
            {
              "id": "d",
              "text": "Making undocumented, ad-hoc changes to the system controls"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A strong adaptive response involves using pre-planned contingencies (fallback plans) and ensuring all actions are documented for accountability and later review."
        },
        {
          "id": "general-science-501-l06-q3",
          "text": "When presenting a recommendation based on a case analysis, what is the purpose of including 'uncertainty bounds'?",
          "skillId": "general-science-501-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "To show a lack of confidence in the recommendation"
            },
            {
              "id": "b",
              "text": "To provide a realistic range of potential outcomes and honestly represent the limits of the analysis"
            },
            {
              "id": "c",
              "text": "To make the analysis seem more complicated than it is"
            },
            {
              "id": "d",
              "text": "To hide the most likely outcome"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Uncertainty bounds are crucial for intellectual honesty, showing the range of possibilities and preventing overconfidence in a single predicted outcome."
        },
        {
          "id": "general-science-501-l06-q4",
          "text": "What distinguishes a simple 'choice' from a 'tradeoff analysis' in an advanced scientific case?",
          "skillId": "general-science-501-analysis",
          "options": [
            {
              "id": "a",
              "text": "There is no difference"
            },
            {
              "id": "b",
              "text": "A tradeoff analysis systematically evaluates what is gained and lost across multiple options and dimensions"
            },
            {
              "id": "c",
              "text": "A choice is always based on emotion, while analysis is based on data"
            },
            {
              "id": "d",
              "text": "A tradeoff analysis only considers the positive aspects of each option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tradeoff analysis is a structured process of evaluating the pros and cons of different options, acknowledging that choosing one path means sacrificing the benefits of another."
        }
      ]
    },
    {
      "id": "general-science-501-l07",
      "title": "General Science Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "general-science-501-l07-a1",
          "type": "template",
          "title": "Stakeholder & Ethics Canvas",
          "content": "A worksheet to map stakeholders, their potential impacts (positive/negative), and relevant ethical principles for a given scientific project."
        }
      ],
      "chunks": [
        {
          "id": "general-science-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this section, you will learn to map the distribution of impacts among various stakeholders. This includes identifying the benefits, burdens, and any delayed or indirect effects that may arise from scientific decisions. Understanding these dynamics is essential for equitable and responsible decision-making.",
          "visualPrompt": "A diagram with concentric circles. The center is 'Scientific Project'. The first ring is 'Direct Stakeholders' (researchers, funders). The next ring is 'Indirect Stakeholders' (local community, general public). The outer ring is 'Long-term Stakeholders' (future generations, environment). Arrows indicate the flow of benefits and burdens."
        },
        {
          "id": "general-science-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we will explore the architecture of accountability in scientific governance. This includes ensuring decision traceability is maintained, review rights are established, and remediation obligations are clearly defined. These elements are vital for fostering public trust and institutional responsibility.",
          "visualPrompt": "A flowchart illustrating 'Accountability Architecture'. It starts with 'Decision Made', flows to 'Logged in Traceability System', then splits to 'Periodic Review' and 'Remediation Trigger'. All paths lead to 'Stakeholder Reporting'."
        },
        {
          "id": "general-science-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We will conclude with a practical checklist for responsible leadership. This tool connects project outcomes with ethical considerations, policy compliance, and system resilience. It serves as a guide to help you evaluate and improve your decision-making practices."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the benefits and burdens of a decision are allocated among different groups over time."
        },
        {
          "id": "general-science-501-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record linking a decision to the evidence, rationale, and individuals responsible for it."
        },
        {
          "id": "general-science-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "The practice of making decisions that balance high performance with ethical duties and public accountability."
        }
      ]
    },
    {
      "id": "general-science-501-l08",
      "title": "General Science Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "general-science-501-l08-a1",
          "type": "document",
          "title": "Capstone Defense Rubric",
          "content": "A detailed rubric outlining the evaluation criteria for the final defense, including clarity of claims, strength of evidence, and handling of critiques."
        }
      ],
      "chunks": [
        {
          "id": "general-science-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this activity, you will construct a comprehensive defense brief for your capstone recommendation. This brief must include your main claims, supporting evidence, the boundaries of uncertainty, and pathways for remediation. This exercise will hone your ability to organize and present a defensible scientific position.",
          "visualPrompt": "An infographic with four quadrants illustrating the core components of a defense brief. Quadrant 1: 'Claim' (a clear statement of the recommendation). Quadrant 2: 'Evidence' (key data points and charts). Quadrant 3: 'Uncertainty' (a graph with confidence intervals). Quadrant 4: 'Remediation' (a simple flowchart for a fallback plan)."
        },
        {
          "id": "general-science-501-l08-c2",
          "kind": "recap",
          "title": "Preparing for Expert Review",
          "content": "During this session, you will rehearse your responses to critiques from experts, governance representatives, and stakeholders. This rehearsal will prepare you for potential questions and challenges, ensuring that you can confidently and professionally defend your findings and recommendations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Engage in a simulated defense panel. You will present your capstone recommendation and respond to challenging questions from AI-driven personas representing an expert scientist, a budget director, and a public advocate."
        }
      ]
    }
  ]
};
