import type { LearningModule } from "@/lib/modules/types";

export const mental_health_literacy_401_Module: LearningModule = {
  "id": "mental-health-literacy-401",
  "title": "Mental Health Literacy Leadership and Capstone",
  "description": "An advanced curriculum on Mental Health Literacy, focusing on foundational models, early risk recognition, support pathway design, and ethical governance. Learning is driven by case analysis, simulation, and a final capstone project.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mental-health",
    "wellbeing"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply foundational mental health models to practical scenarios.",
    "Develop systematic workflows for recognizing early risk signals.",
    "Evaluate and compare different support interventions using evidence.",
    "Implement ethical governance systems with clear review processes.",
    "Communicate complex risks and tradeoffs to diverse stakeholders.",
    "Defend strategic decisions with evidence-based reasoning and analysis."
  ],
  "lessons": [
    {
      "id": "mental-health-literacy-401-l01",
      "title": "Mental Health Literacy Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l01-a1",
          "type": "image",
          "title": "Causal Loop Diagram",
          "content": "A diagram illustrating the interconnected factors that influence mental health outcomes, helping to visualize relationships and assumptions."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-401-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will establish a shared vocabulary for discussing Mental Health Literacy. This common language is essential for clear communication. We will define mental health and explore the key signs that may indicate someone is experiencing challenges. Recognizing these early signals is a critical first step in supporting ourselves and others."
        },
        {
          "id": "mental-health-literacy-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "Here, you will learn to map the connections between different factors influencing mental health. This involves identifying key relationships, underlying assumptions, and potential limitations in any support plan. Understanding these connections is crucial for designing effective interventions."
        },
        {
          "id": "mental-health-literacy-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In this section, we will cover how to support claims with strong evidence. This includes using measurable indicators to gauge effectiveness, establishing confidence levels in our data, and setting up regular checkpoints to review progress. This process ensures our strategies are effective and adaptable."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-401-l01-f1",
          "front": "Mental Health Foundations",
          "back": "The core principles and models used for decision-making, requiring clear control over assumptions and biases."
        },
        {
          "id": "mental-health-literacy-401-l01-f2",
          "front": "Early Risk Signal Recognition",
          "back": "A systematic process for identifying potential mental health challenges in a reliable and repeatable way."
        },
        {
          "id": "mental-health-literacy-401-l01-f3",
          "front": "Support Pathway Design",
          "back": "The process of creating and evaluating interventions to distinguish genuine improvements from superficial results."
        }
      ]
    },
    {
      "id": "mental-health-literacy-401-l02",
      "title": "Mental Health Literacy Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l02-a1",
          "type": "image",
          "title": "Sample Workflow Diagram",
          "content": "A visual flowchart illustrating roles, control gates, and outcome metrics in a support pathway."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive activity, you will create a support workflow. This involves assigning responsibilities, setting up control points to monitor progress, and defining measurable outcomes to track success. This hands-on experience will help you learn to organize complex efforts effectively."
        },
        {
          "id": "mental-health-literacy-401-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "In this recap, we will discuss how to prepare systems for unexpected challenges. This includes stress-testing our plans to see how they might fail and defining clear criteria for when to pause or reverse a decision. This ensures we can adapt and respond effectively when things don't go as planned."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control to its strongest reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-commit review",
              "right": "Prevents avoidable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Contains impact during failures"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports defensible outcome claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l03-a1",
          "type": "image",
          "title": "Knowledge Check",
          "content": "An icon representing a quiz or assessment to test your understanding of core concepts and workflows."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-401-l03-q1",
          "text": "Which practice most improves decision quality in mental health foundations?",
          "skillId": "mental-health-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Use implicit assumptions and no baseline"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritize speed over evidence in all cases"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are explicit."
        },
        {
          "id": "mental-health-literacy-401-l03-q2",
          "text": "At level 401, high-quality execution in early risk signal recognition should include:",
          "skillId": "mental-health-literacy-401-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoints, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "No post-implementation review"
            },
            {
              "id": "d",
              "text": "Untracked process changes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution needs clear ownership and threshold-driven control points."
        },
        {
          "id": "mental-health-literacy-401-l03-q3",
          "text": "A defensible approach to support pathway design requires:",
          "skillId": "mental-health-literacy-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotal wins without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparison and side-effect analysis"
            },
            {
              "id": "c",
              "text": "Changing criteria after seeing results"
            },
            {
              "id": "d",
              "text": "Ignoring difficult cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparison and side-effect analysis prevent biased conclusions."
        },
        {
          "id": "mental-health-literacy-401-l03-q4",
          "text": "Mature ethical and systems governance systems connect:",
          "skillId": "mental-health-literacy-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy statements without accountability"
            },
            {
              "id": "c",
              "text": "Performance targets with no risk controls"
            },
            {
              "id": "d",
              "text": "Governance with no transparency"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective governance links policy intent to measurable controls and corrective action."
        }
      ]
    },
    {
      "id": "mental-health-literacy-401-l04",
      "title": "Mental Health Literacy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Example",
          "content": "A table comparing different intervention options across criteria like effectiveness, feasibility, and risk."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-401-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case analysis, we will explore a school-community network that is establishing early support pathways for students. The goal is to provide timely help while protecting student safety, dignity, and confidentiality. You will identify competing objectives and potential system risks to understand the complexities of creating a supportive environment."
        },
        {
          "id": "mental-health-literacy-401-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "We will introduce a tradeoff matrix to evaluate different options. Each option will be scored on its effectiveness, feasibility, potential risks, and stakeholder impact. This structured scoring system helps you make informed decisions when no single option is perfect."
        },
        {
          "id": "mental-health-literacy-401-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "In this recap, we will discuss how to turn patterns of failure into opportunities for improvement. This involves creating safeguards and clear response plans for when things go wrong. By learning from past challenges, we can build stronger, more resilient systems that better support mental health."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured method to compare options by evaluating them against a consistent set of important criteria."
        },
        {
          "id": "mental-health-literacy-401-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of problem that signals a predictable weakness or risk in a system."
        },
        {
          "id": "mental-health-literacy-401-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined set of actions to ensure a safe, timely, and consistent recovery from a known problem."
        }
      ]
    },
    {
      "id": "mental-health-literacy-401-l05",
      "title": "Mental Health Literacy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A mock-up of the simulation dashboard where you will run scenarios and analyze outcomes."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-401-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, you will run various intervention scenarios under conditions of uncertainty. You will compare the outcomes of these scenarios to understand which approaches work best in different situations. This practice helps develop critical thinking skills for real-world contexts."
        },
        {
          "id": "mental-health-literacy-401-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "In this debriefing session, each simulation run will be evaluated based on how well it achieved its goals, any unintended side effects, and its compliance with governance standards. This reflective process highlights the importance of accountability and continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for mental health foundations and ethical and systems governance.",
          "instructions": [
            "Define your objective and constraints before selecting an intervention.",
            "Document the potential near-term and long-term tradeoffs of your choice.",
            "Specify the metrics that will be used to validate your chosen path."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-401-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l06-a1",
          "type": "image",
          "title": "Knowledge Check",
          "content": "An icon representing a quiz or assessment to test your understanding of case analysis and simulation."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-401-l06-q1",
          "text": "When analyzing a complex case study, what is the primary function of a tradeoff matrix?",
          "skillId": "mental-health-literacy-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is universally superior"
            },
            {
              "id": "b",
              "text": "To systematically compare multiple options against consistent criteria like risk and feasibility"
            },
            {
              "id": "c",
              "text": "To document only the successful outcomes of past interventions"
            },
            {
              "id": "d",
              "text": "To speed up decision-making by ignoring stakeholder impact"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured comparison, helping to make an informed choice by weighing pros and cons systematically."
        },
        {
          "id": "mental-health-literacy-401-l06-q2",
          "text": "In a case analysis of a school support network, identifying a recurring 'failure pattern' is most useful for:",
          "skillId": "mental-health-literacy-401-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to individuals for past mistakes"
            },
            {
              "id": "b",
              "text": "Justifying the elimination of the entire program"
            },
            {
              "id": "c",
              "text": "Designing proactive safeguards and targeted response playbooks"
            },
            {
              "id": "d",
              "text": "Proving that all risks have been eliminated from the system"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Identifying patterns allows for proactive system improvements and better recovery plans, rather than being purely punitive or reactive."
        },
        {
          "id": "mental-health-literacy-401-l06-q3",
          "text": "After running an intervention simulation, the most critical step in the debriefing process is to:",
          "skillId": "mental-health-literacy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Focus only on the scenarios that produced the best results"
            },
            {
              "id": "b",
              "text": "Compare the actual outcomes against the intended goals, including any unintended side effects"
            },
            {
              "id": "c",
              "text": "Change the initial success criteria to match the final results"
            },
            {
              "id": "d",
              "text": "Disregard any data that suggests the intervention was not effective"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A proper debrief requires an honest evaluation of outcomes versus goals, including negative or unexpected consequences, to ensure learning."
        },
        {
          "id": "mental-health-literacy-401-l06-q4",
          "text": "A simulation reveals an intervention, while effective, disproportionately burdens a specific student group. A mature governance response would be to:",
          "skillId": "mental-health-literacy-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Implement it anyway because it is effective for the majority"
            },
            {
              "id": "b",
              "text": "Halt the project and ignore the findings to avoid complexity"
            },
            {
              "id": "c",
              "text": "Acknowledge the inequitable impact and redesign the intervention with better safeguards"
            },
            {
              "id": "d",
              "text": "Publish the results without any plan for corrective action"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mature governance involves using data to identify and correct ethical issues, such as unfair impact distribution, before implementation."
        }
      ]
    },
    {
      "id": "mental-health-literacy-401-l07",
      "title": "Mental Health Literacy Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram illustrating how a mental health initiative's benefits and burdens are distributed among different groups."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "In this lesson, you will explore how the benefits and burdens of mental health initiatives are distributed among different groups. By mapping these impacts, you will gain insight into how various parties are affected and learn how to balance these effects for more equitable outcomes."
        },
        {
          "id": "mental-health-literacy-401-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we will discuss the importance of accountability in decision-making. This includes ensuring decisions can be traced back to their source, respecting the rights of individuals to review those decisions, and clarifying the responsibilities of decision-makers. These elements are essential for effective and ethical governance."
        },
        {
          "id": "mental-health-literacy-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "To ensure responsible execution, it is essential to use a final checklist. This checklist should balance performance goals with risk management and ethical impact. By carefully considering these elements, we can make well-rounded decisions that positively affect individuals and communities."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-401-l07-f1",
          "front": "Impact Distribution",
          "back": "The way in which the positive and negative outcomes of a decision are allocated across different people, systems, and time."
        },
        {
          "id": "mental-health-literacy-401-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record that explains the evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "mental-health-literacy-401-l07-f3",
          "front": "Responsible Execution",
          "back": "A method of delivery that combines effectiveness with accountability and fairness."
        }
      ]
    },
    {
      "id": "mental-health-literacy-401-l08",
      "title": "Mental Health Literacy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-401-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A document template outlining the key sections of your project charter, including objectives, metrics, and governance."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will draft a charter for your capstone project. This involves defining clear objectives, identifying potential constraints, establishing metrics for success, and setting governance triggers to guide your project. This structured approach ensures your project is well-planned and effectively managed."
        },
        {
          "id": "mental-health-literacy-401-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As part of your capstone preparation, you will get ready to defend your decisions. This involves anticipating questions and critiques related to your project's technical design and its governance framework. Preparing for these discussions will build confidence and demonstrate a thorough understanding of your work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define the project's primary objective and operating boundaries.",
            "List at least three measurable indicators of success.",
            "Define the criteria for escalation and corrective action."
          ]
        }
      ]
    }
  ]
};
