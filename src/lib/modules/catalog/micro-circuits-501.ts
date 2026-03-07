import type { LearningModule } from "@/lib/modules/types";

export const micro_circuits_501_Module: LearningModule = {
  "id": "micro-circuits-501",
  "title": "Micro Circuits Specialization Studio",
  "description": "This advanced specialization studio builds on core concepts to develop mastery in micro circuit systems. Learners will engage with complex case studies, high-fidelity simulations, and defense-style critiques to master diagnostics, operational design, impact analysis, and governance.",
  "subject": "Micro Circuits",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "micro-circuits",
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
    "Diagnose complex issues in micro circuit systems under realistic constraints.",
    "Design reliable operational workflows for micro circuits, including clear checkpoints and quality gates.",
    "Analyze the impacts and tradeoffs of different micro circuit interventions using evidence-based methods.",
    "Develop and implement governance frameworks for micro circuit projects, including clear accountability and escalation procedures.",
    "Lead decision-making meetings, clearly communicating complex tradeoffs to diverse stakeholders.",
    "Justify and defend technical and strategic recommendations to expert panels, using data and acknowledging uncertainty."
  ],
  "lessons": [
    {
      "id": "micro-circuits-501-l01",
      "title": "Advanced Foundations in Micro Circuit Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "micro-circuits-501-l01-a1",
          "type": "image",
          "title": "System Diagnostic Flowchart",
          "content": "A visual flowchart illustrating the process of diagnosing a micro circuit, from defining the problem scope to identifying root causes with evidence."
        }
      ],
      "chunks": [
        {
          "id": "micro-circuits-501-l01-c1",
          "kind": "concept",
          "title": "Defining the System: Scope and Boundaries",
          "content": "To analyze a complex micro circuit system, we first need to define its boundaries. This involves identifying the key components, inputs, and outputs, and understanding the operational constraints. This lesson teaches you how to map out a system clearly, which is the first step to effective troubleshooting and design."
        },
        {
          "id": "micro-circuits-501-l01-c2",
          "kind": "concept",
          "title": "Modeling Cause-and-Effect and Uncertainty",
          "content": "Nearly every system has variables that can affect its performance. Here, you'll learn to map cause-and-effect relationships and estimate potential uncertainty. Understanding these connections helps predict system behavior and plan for a range of possible outcomes, preventing surprises down the line."
        },
        {
          "id": "micro-circuits-501-l01-c3",
          "kind": "recap",
          "title": "Recap: The Role of Evidence",
          "content": "In this recap, we'll reinforce a core principle: every claim must be backed by measurable evidence. We'll review how to establish clear metrics and checkpoints to ensure your analysis is both accurate and credible."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-501-l01-f1",
          "front": "System Diagnostics",
          "back": "The structured process of identifying the root cause of a problem in a micro circuit system by defining scope, constraints, and evidence."
        },
        {
          "id": "micro-circuits-501-l01-f2",
          "front": "Operational Design",
          "back": "The plan for how a micro circuit system will function reliably, especially under stress or unexpected conditions."
        },
        {
          "id": "micro-circuits-501-l01-f3",
          "front": "Tradeoff Analysis",
          "back": "The process of evaluating choices by comparing their potential benefits against their costs and risks."
        }
      ]
    },
    {
      "id": "micro-circuits-501-l02",
      "title": "Lab: Designing and Testing Specialist Methods",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "micro-circuits-501-l02-a1",
          "type": "practice",
          "title": "Workflow Builder",
          "content": "Use an interactive tool to drag and drop components (checkpoints, rollback triggers) to build a resilient operational workflow for a given scenario."
        }
      ],
      "chunks": [
        {
          "id": "micro-circuits-501-l02-c1",
          "kind": "practice",
          "title": "Practice: Designing a Resilient Workflow",
          "content": "In this interactive lab, you'll design a specialized workflow for managing a micro circuit system. You will then stress-test your design by simulating challenging scenarios, like component failures or unexpected inputs, to identify and fix weaknesses."
        },
        {
          "id": "micro-circuits-501-l02-c2",
          "kind": "recap",
          "title": "Recap: Building Reliable Workflows",
          "content": "A recap of the key elements of a reliable workflow. We'll cover the importance of checkpoints to review progress, rollback plans to safely undo changes, and clear escalation paths for when problems exceed defined limits."
        }
      ],
      "interactiveActivities": [
        {
          "id": "micro-circuits-501-l02-act1",
          "type": "matching_pairs",
          "title": "Mapping Controls to Outcomes",
          "description": "Match the workflow control to the problem it is best suited to solve.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents predictable errors from moving forward."
            },
            {
              "left": "Rollback trigger",
              "right": "Contains the damage when something goes wrong."
            },
            {
              "left": "Baseline dashboard",
              "right": "Provides a clear 'before and after' to measure impact."
            },
            {
              "left": "Retrospective loop",
              "right": "Feeds lessons from one cycle into the next."
            }
          ]
        }
      ]
    },
    {
      "id": "micro-circuits-501-l03",
      "title": "Checkpoint 1: Methods and Design",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "micro-circuits-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "micro-circuits-501-l03-q1",
          "text": "Which practice most improves the quality of micro circuit system diagnostics?",
          "skillId": "micro-circuits-501-skill-core",
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are explicit."
        },
        {
          "id": "micro-circuits-501-l03-q2",
          "text": "At an advanced level, strong operational design for micro circuits requires:",
          "skillId": "micro-circuits-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, regular checkpoints, and escalation thresholds"
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
          "id": "micro-circuits-501-l03-q3",
          "text": "A defensible approach to impact and tradeoff analysis includes:",
          "skillId": "micro-circuits-501-skill-eval",
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
          "id": "micro-circuits-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "micro-circuits-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy goals, measurable controls, and clear remediation paths"
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
      "id": "micro-circuits-501-l04",
      "title": "Case Study: High-Stakes Tradeoffs",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "micro-circuits-501-l04-a1",
          "type": "image",
          "title": "Decision Matrix",
          "content": "An example of a decision matrix used to compare three potential solutions for the case study, scored against criteria like cost, performance, and safety."
        }
      ],
      "chunks": [
        {
          "id": "micro-circuits-501-l04-c1",
          "kind": "concept",
          "title": "Analyzing a Complex Case Study",
          "content": "This lesson walks through a real-world case study of a micro circuit system facing competing demands—like performance vs. power consumption, or speed vs. safety. We'll dissect the scenario to understand the technical and ethical constraints at play."
        },
        {
          "id": "micro-circuits-501-l04-c2",
          "kind": "practice",
          "title": "Practice: Framing the Tradeoffs",
          "content": "Using the case study, you'll practice comparing different solutions. You will evaluate each option against key criteria like safety, reliability, cost, and fairness to make a well-rounded decision."
        },
        {
          "id": "micro-circuits-501-l04-c3",
          "kind": "recap",
          "title": "Recap: Structuring a Recommendation",
          "content": "We'll recap how to structure a professional recommendation. A strong recommendation always states its assumptions, presents the supporting evidence, outlines risk mitigation plans, and includes a fallback option."
        }
      ]
    },
    {
      "id": "micro-circuits-501-l05",
      "title": "Clinic: Interactive Simulation",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "micro-circuits-501-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "Interact with a dashboard to monitor a micro circuit's performance, adjust control parameters, and respond to simulated system alerts in real-time."
        }
      ],
      "chunks": [
        {
          "id": "micro-circuits-501-l05-c1",
          "kind": "practice",
          "title": "Practice: Managing a Live Scenario",
          "content": "In this hands-on simulation, you'll take the controls of a micro circuit system. Your challenge is to manage its performance and meet operational targets while navigating unexpected events and adhering to governance rules."
        },
        {
          "id": "micro-circuits-501-l05-c2",
          "kind": "recap",
          "title": "Recap: Designing Adaptive Responses",
          "content": "After the simulation, we'll discuss how to design adaptive systems. Effective responses involve updating your operational rules based on new information, while ensuring every change is tracked and justified."
        }
      ],
      "interactiveActivities": [
        {
          "id": "micro-circuits-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure micro circuits scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "micro-circuits-501-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "micro-circuits-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "micro-circuits-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "micro-circuits-501-skill-case1",
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
          "id": "micro-circuits-501-l06-q2",
          "text": "A resilient strategy for micro circuits operations should include:",
          "skillId": "micro-circuits-501-skill-case2",
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
          "id": "micro-circuits-501-l06-q3",
          "text": "When evaluating micro circuit impacts, which method is most rigorous?",
          "skillId": "micro-circuits-501-skill-case3",
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
          "explanation": "Rigorous evaluation requires comparisons, side-effect analysis, and uncertainty disclosure."
        },
        {
          "id": "micro-circuits-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "micro-circuits-501-skill-case4",
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
          "id": "micro-circuits-501-l06-q5",
          "text": "When analyzing a case study with multiple stakeholders, what is the most critical first step?",
          "skillId": "micro-circuits-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the solution that benefits the most powerful stakeholder."
            },
            {
              "id": "b",
              "text": "Identify the goals and constraints of each stakeholder group."
            },
            {
              "id": "c",
              "text": "Ignore stakeholders who are not technical experts."
            },
            {
              "id": "d",
              "text": "Assume all stakeholders have the same priorities."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Understanding the unique needs and constraints of each stakeholder is essential for finding a balanced and defensible solution."
        },
        {
          "id": "micro-circuits-501-l06-q6",
          "text": "In a simulation where a system is performing unexpectedly, what is the best immediate action?",
          "skillId": "micro-circuits-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Immediately shut down the entire system."
            },
            {
              "id": "b",
              "text": "Ignore the anomaly and hope it resolves itself."
            },
            {
              "id": "c",
              "text": "Consult the operational playbook and escalate according to pre-defined thresholds."
            },
            {
              "id": "d",
              "text": "Make random adjustments to controls to see what happens."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A mature operational approach relies on established procedures and escalation paths to handle anomalies safely and effectively."
        },
        {
          "id": "micro-circuits-501-l06-q7",
          "text": "A 'decision memo' is used to recommend a course of action. What key element makes the recommendation trustworthy?",
          "skillId": "micro-circuits-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Using complex jargon to sound authoritative."
            },
            {
              "id": "b",
              "text": "Presenting only the data that supports the preferred option."
            },
            {
              "id": "c",
              "text": "Clearly stating the assumptions, evidence, and potential risks."
            },
            {
              "id": "d",
              "text": "Keeping the recommendation as brief as possible by omitting details."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Transparency about assumptions, evidence, and risks is crucial for building trust and making a defensible recommendation."
        },
        {
          "id": "micro-circuits-501-l06-q8",
          "text": "What does 'tradeoff analysis' in a micro circuits context primarily involve?",
          "skillId": "micro-circuits-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Finding a perfect solution with no downsides."
            },
            {
              "id": "b",
              "text": "Choosing the cheapest option regardless of consequences."
            },
            {
              "id": "c",
              "text": "Systematically evaluating what is gained and lost with each potential choice."
            },
            {
              "id": "d",
              "text": "Following the opinion of the most senior person in the room."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Tradeoff analysis is the disciplined process of weighing the pros and cons of different options to make an informed decision."
        }
      ]
    },
    {
      "id": "micro-circuits-501-l07",
      "title": "Governance and Ethical Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "micro-circuits-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing a central micro circuit project and its ripple effects on various stakeholders, color-coded for positive, negative, and neutral impacts."
        }
      ],
      "chunks": [
        {
          "id": "micro-circuits-501-l07-c1",
          "kind": "concept",
          "title": "Analyzing Impact on Different Groups",
          "content": "Decisions about technology are never neutral. In this lesson, you'll learn to map how the benefits and burdens of a micro circuit system are distributed among different groups of people, including users, operators, and the public."
        },
        {
          "id": "micro-circuits-501-l07-c2",
          "kind": "concept",
          "title": "Building Accountable Systems",
          "content": "Accountability means that decisions can be traced and reviewed. We'll explore how to design systems where every key decision is documented, subject to review, and includes clear responsibility for fixing problems."
        },
        {
          "id": "micro-circuits-501-l07-c3",
          "kind": "recap",
          "title": "Recap: A Checklist for Responsible Leadership",
          "content": "We'll conclude with a practical checklist for responsible leadership. This guide helps you connect your technical decisions to ethical principles, policy compliance, and long-term system resilience."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-501-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how a system's positive and negative effects are spread across different groups of people over time."
        },
        {
          "id": "micro-circuits-501-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record showing who made a decision, when, and based on what evidence and reasoning."
        },
        {
          "id": "micro-circuits-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Making decisions that balance high performance with ethical considerations and accountability."
        }
      ]
    },
    {
      "id": "micro-circuits-501-l08",
      "title": "Capstone: Defending Your Recommendation",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "micro-circuits-501-l08-a1",
          "type": "practice",
          "title": "Briefing Document Template",
          "content": "Fill out a structured template to build your capstone defense, with sections for your claim, evidence, risk assessment, and fallback plans."
        }
      ],
      "chunks": [
        {
          "id": "micro-circuits-501-l08-c1",
          "kind": "practice",
          "title": "Practice: Assembling Your Defense",
          "content": "In this final lab, you will synthesize everything you've learned. You'll prepare a comprehensive brief for a complex scenario, outlining your recommendation, supporting evidence, risk analysis, and remediation plans."
        },
        {
          "id": "micro-circuits-501-l08-c2",
          "kind": "recap",
          "title": "Rehearsal: Facing an Expert Panel",
          "content": "Prepare to defend your brief. This rehearsal simulates a review with an expert panel. You'll practice responding to challenging questions about your technical choices, governance plan, and stakeholder considerations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "micro-circuits-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
