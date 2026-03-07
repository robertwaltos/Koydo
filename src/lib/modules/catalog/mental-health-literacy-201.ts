import type { LearningModule } from "@/lib/modules/types";

export const mental_health_literacy_201_Module: LearningModule = {
  "id": "mental-health-literacy-201",
  "title": "Mental Health Literacy Applied Practice",
  "description": "Level 201 curriculum in Mental Health Literacy, centered on mental health foundations, early risk signal recognition, support pathway design, and ethical and systems governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mental-health",
    "wellbeing"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply mental health foundations under practical constraints",
    "Build repeatable workflows for early risk signal recognition with measurable controls",
    "Evaluate interventions in support pathway design using comparative evidence",
    "Operationalize ethical and systems governance with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "mental-health-literacy-201-l01",
      "title": "Mental Health Literacy: Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l01-a1",
          "type": "image",
          "title": "The Biopsychosocial Model",
          "content": "A visual diagram showing how biological, psychological, and social factors interact to influence mental health."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-201-l01-c1",
          "kind": "concept",
          "title": "Building a Shared Vocabulary",
          "content": "In this lesson, we'll establish a clear and shared vocabulary for discussing mental health. Understanding key terms helps us talk openly and accurately. We will explore the definition of mental health and learn to spot early signs that someone might need support. This foundational knowledge empowers us to create a more caring and informed community."
        },
        {
          "id": "mental-health-literacy-201-l01-c2",
          "kind": "concept",
          "title": "Understanding Causes and Effects",
          "content": "Here, we'll learn to identify and map the relationships between different factors affecting mental health. This includes recognizing our own assumptions and the limitations we might face. Understanding these connections is the first step toward designing effective ways to help ourselves and others."
        },
        {
          "id": "mental-health-literacy-201-l01-c3",
          "kind": "recap",
          "title": "The Importance of Evidence",
          "content": "In this recap, we'll review why it's crucial to support our ideas with evidence. We will focus on using measurable signs to check if our support strategies are working. We'll also discuss how to be confident in our conclusions and the importance of setting up regular checkpoints to review our progress."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-201-l01-f1",
          "front": "Mental Health Foundations",
          "back": "The core principles used to make decisions about mental health, requiring us to be clear about our assumptions and evidence."
        },
        {
          "id": "mental-health-literacy-201-l01-f2",
          "front": "Early Risk Signal Recognition",
          "back": "A reliable and repeatable process for identifying early signs of mental health challenges."
        },
        {
          "id": "mental-health-literacy-201-l01-f3",
          "front": "Support Pathway Design",
          "back": "The process of creating and evaluating plans to help someone, ensuring we can tell the difference between real progress and wishful thinking."
        }
      ]
    },
    {
      "id": "mental-health-literacy-201-l02",
      "title": "Lab: Designing a Support Workflow",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l02-a1",
          "type": "image",
          "title": "Workflow Diagram Template",
          "content": "A blank flowchart template to help you map out the steps, decision points, and responsibilities in your support workflow."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-201-l02-c1",
          "kind": "practice",
          "title": "Building Your Workflow",
          "content": "In this interactive activity, you will create a support workflow. This involves deciding who is responsible for each task, setting up checkpoints to ensure things run smoothly, and defining clear, measurable goals. This hands-on practice will strengthen your ability to put mental health strategies into action."
        },
        {
          "id": "mental-health-literacy-201-l02-c2",
          "kind": "recap",
          "title": "Preparing for Problems",
          "content": "In this recap, we'll discuss how to test our plans to see how they hold up under pressure. This includes thinking about what could go wrong and deciding in advance when we might need to pause or go back to a previous step. Being prepared is key to building resilient mental health support systems."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-201-l02-act1",
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
      "id": "mental-health-literacy-201-l03",
      "title": "Checkpoint 1: Concepts and Workflows",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review",
          "content": "A one-page summary of the key terms and workflow components from Lessons 1 and 2."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-201-l03-q1",
          "text": "Which practice most improves decision quality in mental health foundations?",
          "skillId": "mental-health-literacy-201-skill-core",
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
          "id": "mental-health-literacy-201-l03-q2",
          "text": "At level 201, high-quality execution in early risk signal recognition should include:",
          "skillId": "mental-health-literacy-201-skill-execution",
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
          "id": "mental-health-literacy-201-l03-q3",
          "text": "A defensible approach to support pathway design requires:",
          "skillId": "mental-health-literacy-201-skill-eval",
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
          "id": "mental-health-literacy-201-l03-q4",
          "text": "Mature ethical and systems governance systems connect:",
          "skillId": "mental-health-literacy-201-skill-governance",
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
      "id": "mental-health-literacy-201-l04",
      "title": "Case Analysis: A School Support Network",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "An example of a matrix used to compare different support options by weighing their pros, cons, and potential risks."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-201-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case study, we'll examine a school-community network trying to provide early support while protecting student privacy and dignity. We will explore how different goals can sometimes conflict and identify potential risks in the system. This analysis will help us understand the real-world complexities of mental health support."
        },
        {
          "id": "mental-health-literacy-201-l04-c2",
          "kind": "concept",
          "title": "Using a Tradeoff Matrix",
          "content": "We will introduce a tool called a tradeoff matrix to evaluate different support options. Each option will be scored on factors like its effectiveness, cost, potential risks, and impact on students and staff. This structured approach helps us make more informed and balanced decisions."
        },
        {
          "id": "mental-health-literacy-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Mistakes",
          "content": "In this recap, we'll discuss how to learn from past failures by turning those experiences into safeguards for the future. This involves creating response plans, or 'playbooks,' that outline what to do when things go wrong. By preparing for challenges, we can improve our ability to recover and strengthen our overall approach."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured method to compare options by weighing their pros and cons across different criteria."
        },
        {
          "id": "mental-health-literacy-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring problem that signals a predictable risk in a system or plan."
        },
        {
          "id": "mental-health-literacy-201-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide for responding to a problem, ensuring a safe and timely recovery."
        }
      ]
    },
    {
      "id": "mental-health-literacy-201-l05",
      "title": "Simulation Studio: Intervention Practice",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "An interactive dashboard where you can adjust variables for different scenarios and see the projected outcomes."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-201-l05-c1",
          "kind": "practice",
          "title": "Running Scenarios",
          "content": "In this interactive simulation, you'll test different support strategies in various scenarios with uncertain outcomes. By comparing the results, you'll learn which approaches work best in different situations. This practical experience will deepen your understanding of how to choose effective interventions."
        },
        {
          "id": "mental-health-literacy-201-l05-c2",
          "kind": "recap",
          "title": "Debrief and Reflection",
          "content": "After the simulation, we will debrief as a group. We'll evaluate each scenario by looking at how well we met our goals, any unintended side effects, and whether we followed our ethical guidelines. This reflection helps us learn from experience and improve our decision-making in the future."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for mental health foundations and ethical and systems governance.",
          "instructions": [
            "Define your objective and constraints before selecting an intervention.",
            "Document the potential short-term and long-term tradeoffs of your choice.",
            "Specify the metrics you would use to validate that your chosen path was successful."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-201-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l06-a1",
          "type": "practice",
          "title": "Case Study Quick Sheet",
          "content": "A summary of the key challenges and decision points from the case analysis and simulation exercises."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-201-l06-q1",
          "text": "When using a tradeoff matrix in a case analysis, what is the primary goal?",
          "skillId": "mental-health-literacy-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect in every way"
            },
            {
              "id": "b",
              "text": "To systematically compare options across multiple important criteria"
            },
            {
              "id": "c",
              "text": "To choose the option that is fastest, regardless of risks"
            },
            {
              "id": "d",
              "text": "To avoid making a difficult decision"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured comparison to make an informed, balanced decision, not to find a perfect solution."
        },
        {
          "id": "mental-health-literacy-201-l06-q2",
          "text": "What is the most constructive way to use a 'failure pattern' identified in a system?",
          "skillId": "mental-health-literacy-201-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to the person responsible"
            },
            {
              "id": "b",
              "text": "To ignore it and hope it doesn't happen again"
            },
            {
              "id": "c",
              "text": "To design safeguards and response playbooks to prevent or manage it in the future"
            },
            {
              "id": "d",
              "text": "To stop the project entirely"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Identifying failure patterns is valuable for learning and building more resilient systems by creating proactive safeguards."
        },
        {
          "id": "mental-health-literacy-201-l06-q3",
          "text": "Running simulations is most helpful for:",
          "skillId": "mental-health-literacy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Getting a single, guaranteed right answer"
            },
            {
              "id": "b",
              "text": "Practicing decisions in a safe environment and seeing potential outcomes"
            },
            {
              "id": "c",
              "text": "Proving that your first idea is always the best one"
            },
            {
              "id": "d",
              "text": "Avoiding the need to collect real-world evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations provide a safe space to practice decision-making and explore the potential consequences of different choices under uncertainty."
        },
        {
          "id": "mental-health-literacy-201-l06-q4",
          "text": "An effective debrief after a simulation should focus on:",
          "skillId": "mental-health-literacy-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only discussing what went right"
            },
            {
              "id": "b",
              "text": "Comparing results to goals, analyzing side effects, and reflecting on the process"
            },
            {
              "id": "c",
              "text": "Deciding who won the simulation"
            },
            {
              "id": "d",
              "text": "Quickly moving on to the next task without discussion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A debrief is a structured reflection to maximize learning by evaluating outcomes, side effects, and the decision-making process itself."
        }
      ]
    },
    {
      "id": "mental-health-literacy-201-l07",
      "title": "Governance, Ethics, and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual map showing how a mental health initiative can positively or negatively affect different groups like students, families, and staff."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-201-l07-c1",
          "kind": "concept",
          "title": "Understanding Stakeholder Impact",
          "content": "In this lesson, we'll explore how the benefits and burdens of a mental health plan are spread across different groups of people (stakeholders). By mapping this impact, we can better understand who is affected by our decisions and work to make our plans fair and equitable for everyone involved."
        },
        {
          "id": "mental-health-literacy-201-l07-c2",
          "kind": "concept",
          "title": "Building Accountable Systems",
          "content": "Here, we will discuss the importance of accountability in our decision-making. This means keeping a clear record of why decisions were made, giving people the right to review those decisions, and having a clear plan to fix any problems that arise. These elements create a more transparent and trustworthy system."
        },
        {
          "id": "mental-health-literacy-201-l07-c3",
          "kind": "recap",
          "title": "Putting It All Together Responsibly",
          "content": "To ensure our actions are both responsible and effective, we can use a final checklist. This helps us evaluate our performance, manage risks, and consider the ethical impact of our decisions. By balancing these elements, we can make better choices that help ourselves and others."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-201-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a decision are shared among different people and groups."
        },
        {
          "id": "mental-health-literacy-201-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record of who made a decision, why they made it, and what evidence they used."
        },
        {
          "id": "mental-health-literacy-201-l07-f3",
          "front": "Responsible Execution",
          "back": "Carrying out a plan in a way that is effective, accountable, and fair to everyone involved."
        }
      ]
    },
    {
      "id": "mental-health-literacy-201-l08",
      "title": "Lab: Planning Your Capstone Project",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l08-a1",
          "type": "practice",
          "title": "Capstone Project Charter Template",
          "content": "A downloadable document to guide you in defining your project's goals, scope, success metrics, and ethical considerations."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-201-l08-c1",
          "kind": "practice",
          "title": "Creating Your Project Charter",
          "content": "In this activity, you will create a detailed plan, or 'charter,' for your final project. This includes writing clear goals, identifying any limitations, setting up metrics to measure success, and defining the ethical rules that will guide your work."
        },
        {
          "id": "mental-health-literacy-201-l08-c2",
          "kind": "recap",
          "title": "Getting Ready to Share Your Work",
          "content": "As part of our preparation, you will get ready to present and defend your project decisions. This means practicing how to explain your choices and show how they align with the course's technical and ethical standards. This will build your confidence in responding to questions and feedback."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define your project's main objective and its operating boundaries.",
            "List at least three measurable indicators of success.",
            "Define the criteria for escalating a problem or taking corrective action."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-201-l09",
      "title": "Capstone Project: Presentation and Review",
      "type": "interactive",
      "duration": 25,
      "learningAids": [
        {
          "id": "mental-health-literacy-201-l09-a1",
          "type": "image",
          "title": "Peer Review Rubric",
          "content": "A structured rubric for providing constructive feedback on capstone projects, focusing on evidence, clarity, and ethical considerations."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-201-l09-c1",
          "kind": "practice",
          "title": "Project Presentation",
          "content": "Present your capstone project to the group. Explain your design choices, defend your reasoning, and share your findings using the evidence you've gathered. This is your chance to showcase what you've learned and created."
        },
        {
          "id": "mental-health-literacy-201-l09-c2",
          "kind": "practice",
          "title": "Peer Review and Feedback",
          "content": "Engage in a constructive peer review process. Use the provided rubric to evaluate your classmates' projects and provide thoughtful, helpful feedback. This process helps everyone learn from different perspectives and approaches."
        },
        {
          "id": "mental-health-literacy-201-l09-c3",
          "kind": "recap",
          "title": "Course Reflection and Next Steps",
          "content": "Reflect on the entire course, from core concepts to your final project. We'll summarize the key skills you've developed and discuss how you can continue to apply mental health literacy in your school, work, or community."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-201-l09-act1",
          "type": "peer_review",
          "title": "Capstone Peer Review",
          "description": "Review and provide feedback on two other capstone project charters.",
          "instructions": [
            "Use the provided rubric to score the project's clarity, feasibility, and governance plan.",
            "Write at least one constructive comment for improvement.",
            "Identify one key strength of the project."
          ]
        }
      ]
    }
  ]
};
