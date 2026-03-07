import type { LearningModule } from "@/lib/modules/types";

export const developer_tools_devops_101_Module: LearningModule = {
  "id": "developer-tools-devops-101",
  "title": "Developer Tools and DevOps Foundations",
  "description": "Level 101 curriculum in Developer Tools and DevOps, centered on delivery pipeline engineering, developer productivity systems, reliability automation, and platform governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "devops",
    "software-engineering"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply delivery pipeline engineering under practical constraints",
    "Build repeatable workflows for developer productivity systems with measurable controls",
    "Evaluate interventions in reliability automation using comparative evidence",
    "Operationalize platform governance with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "developer-tools-devops-101-l01",
      "title": "Developer Tools and DevOps Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l01-a1",
          "type": "image",
          "title": "Visual Prompt: The Pipeline",
          "content": "A split-screen graphic showing a messy, tangled wire (traditional development) on the left, versus a smooth, glowing assembly line (delivery pipeline) on the right, with a magnifying glass highlighting 'Metrics'."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-101-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "Welcome to the world of DevOps! In this lesson, we will explore key terms essential for understanding Developer Tools and DevOps. We will learn how to build effective 'delivery pipelines'—the automated assembly lines that help software move smoothly from a developer's computer to the real world. We will also look at ways to boost developer productivity. Mastering this vocabulary is your first step toward communicating like a pro software engineer."
        },
        {
          "id": "developer-tools-devops-101-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "Have you ever fixed one thing only to break another? That is where causal reasoning comes in. We will explore how to identify cause-and-effect relationships in software projects. By mapping out how one action leads to another, and recognizing the hidden assumptions in our designs, you will be better prepared to create solutions that actually work without causing unexpected crashes."
        },
        {
          "id": "developer-tools-devops-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In DevOps, we don't guess; we measure. We will learn how to support our technical claims with clear, measurable data. This includes setting up review checkpoints and defining what success actually looks like using numbers. By doing this, we can make informed decisions based on solid evidence rather than just hoping for the best."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-101-l01-f1",
          "front": "Delivery Pipeline",
          "back": "An automated set of processes that moves software from development into production reliably."
        },
        {
          "id": "developer-tools-devops-101-l01-f2",
          "front": "Developer Productivity Systems",
          "back": "Tools and workflows designed to make writing, testing, and releasing code faster and more repeatable."
        },
        {
          "id": "developer-tools-devops-101-l01-f3",
          "front": "Reliability Automation",
          "back": "Using code to automatically test and ensure systems stay online and function correctly."
        }
      ]
    },
    {
      "id": "developer-tools-devops-101-l02",
      "title": "Developer Tools and DevOps Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l02-a1",
          "type": "image",
          "title": "Visual Prompt: Workflow Builder",
          "content": "A flowchart diagram where a user drags and drops 'Code Commit', 'Testing', and 'Deployment' blocks, with a red 'Stop' sign representing a control gate."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "It is time to get hands-on! In this interactive activity, you will create your own software workflow. You will map out who is responsible for each step, set up 'control gates' (checkpoints that stop bad code from passing), and define measurable outcomes to track success. This will show you exactly how real-world engineering teams keep their projects organized."
        },
        {
          "id": "developer-tools-devops-101-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "What happens when things go wrong? You need an 'undo' button. We will discuss the importance of testing systems for potential failures and establishing thresholds for 'rollbacks'—reverting to a previous, stable version of your software. This ensures your system can recover smoothly when unexpected bugs slip through."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-101-l02-act1",
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
      "id": "developer-tools-devops-101-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Hook",
          "content": "Remember the 3 C's of Pipelines: Code, Control, and Continuous delivery!"
        }
      ],
      "questions": [
        {
          "id": "developer-tools-devops-101-l03-q1",
          "text": "Which practice most improves decision quality in delivery pipeline engineering?",
          "skillId": "developer-tools-devops-101-skill-core",
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
          "id": "developer-tools-devops-101-l03-q2",
          "text": "At level 101, high-quality execution in developer productivity systems should include:",
          "skillId": "developer-tools-devops-101-skill-execution",
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
          "id": "developer-tools-devops-101-l03-q3",
          "text": "A defensible approach to reliability automation requires:",
          "skillId": "developer-tools-devops-101-skill-eval",
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
          "id": "developer-tools-devops-101-l03-q4",
          "text": "Mature platform governance systems connect:",
          "skillId": "developer-tools-devops-101-skill-governance",
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
      "id": "developer-tools-devops-101-l04",
      "title": "Developer Tools and DevOps Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l04-a1",
          "type": "image",
          "title": "Visual Prompt: The Balancing Act",
          "content": "A scale balancing a rocket ship (Speed) on one side and a shield (Reliability) on the other, demonstrating the tradeoff matrix."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-101-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "Let's look at a real-world scenario: a rapidly growing tech company trying to balance lightning-fast software updates with the need for perfect reliability. You will identify competing objectives—like wanting to release a new feature today versus making sure it doesn't crash the servers tomorrow. This analysis reveals the daily challenges DevOps engineers face."
        },
        {
          "id": "developer-tools-devops-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "How do you choose between two good options? We use a 'tradeoff matrix'. You will learn how to evaluate different choices based on their effectiveness, feasibility, risks, and impact on users. This tool acts like a cheat sheet for making smart, defensible decisions when there is no perfect answer."
        },
        {
          "id": "developer-tools-devops-101-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "Failures will happen. The key is how you respond. We will discuss how to turn past failures into proactive safeguards. You will learn about 'response playbooks'—essentially fire drills for software—that guide teams on exactly what to do when an emergency strikes, minimizing downtime."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured method to compare options under competing priorities, like speed vs. safety."
        },
        {
          "id": "developer-tools-devops-101-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring signal or bug indicating a predictable risk that needs to be fixed."
        },
        {
          "id": "developer-tools-devops-101-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined, step-by-step action plan for safe and timely recovery during a system crash."
        }
      ]
    },
    {
      "id": "developer-tools-devops-101-l05",
      "title": "Developer Tools and DevOps Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l05-a1",
          "type": "image",
          "title": "Visual Prompt: Mission Control",
          "content": "A dashboard interface showing server health bars, with a big red 'Simulate Failure' button and a 'Deploy Fix' option."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "Step into the driver's seat! In this simulation, you will face unexpected system failures and have to choose how to intervene. You will compare the outcomes of different decisions in real-time to see how your choices impact the system's health. This safe environment lets you learn from mistakes without taking down a real website."
        },
        {
          "id": "developer-tools-devops-101-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "After the simulation, we will conduct a debrief. Did you hit your targets? Did your fix cause a new bug somewhere else? Did you follow the company's governance rules? Reflecting on these questions is how junior developers level up into senior engineers."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for delivery pipeline engineering and platform governance.",
          "instructions": [
            "Define objective and constraints before intervention selection.",
            "Document near-term and long-term tradeoffs.",
            "Specify metrics that validate your chosen path."
          ]
        }
      ]
    },
    {
      "id": "developer-tools-devops-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l06-a1",
          "type": "mnemonic",
          "title": "Memory Hook",
          "content": "Tradeoffs mean you can't have it all: Fast, Cheap, or Reliable—pick two and manage the risks!"
        }
      ],
      "questions": [
        {
          "id": "developer-tools-devops-101-l06-q1",
          "text": "What is the primary purpose of using a tradeoff matrix in DevOps?",
          "skillId": "developer-tools-devops-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To guarantee that software never experiences bugs"
            },
            {
              "id": "b",
              "text": "To compare different options under competing priorities"
            },
            {
              "id": "c",
              "text": "To automatically write code for new features"
            },
            {
              "id": "d",
              "text": "To bypass security checks for faster deployment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix helps teams systematically compare options when priorities like speed and safety compete."
        },
        {
          "id": "developer-tools-devops-101-l06-q2",
          "text": "Why do engineering teams create response playbooks?",
          "skillId": "developer-tools-devops-101-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To have a predefined action pathway for safe recovery during emergencies"
            },
            {
              "id": "b",
              "text": "To track the daily hours worked by developers"
            },
            {
              "id": "c",
              "text": "To replace the need for automated testing"
            },
            {
              "id": "d",
              "text": "To document the original source code of an application"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Playbooks act as emergency guides, ensuring teams know exactly what steps to take to recover a system safely."
        },
        {
          "id": "developer-tools-devops-101-l06-q3",
          "text": "When analyzing a failure pattern, what is the most important outcome?",
          "skillId": "developer-tools-devops-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Finding a specific developer to blame for the error"
            },
            {
              "id": "b",
              "text": "Deleting the feature that caused the failure"
            },
            {
              "id": "c",
              "text": "Identifying the recurring signal to build proactive safeguards"
            },
            {
              "id": "d",
              "text": "Ignoring it if the system eventually restarts on its own"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Identifying patterns allows teams to build safeguards that prevent the same failure from happening again."
        },
        {
          "id": "developer-tools-devops-101-l06-q4",
          "text": "During a simulation debrief, what should a team primarily focus on evaluating?",
          "skillId": "developer-tools-devops-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only the speed at which the simulation was completed"
            },
            {
              "id": "b",
              "text": "Target achievement, side effects, and governance compliance"
            },
            {
              "id": "c",
              "text": "Which team member typed the fastest"
            },
            {
              "id": "d",
              "text": "How to make the simulation graphics look better"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A proper debrief looks at whether goals were met, if unintended consequences occurred, and if rules were followed."
        }
      ]
    },
    {
      "id": "developer-tools-devops-101-l07",
      "title": "Developer Tools and DevOps Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l07-a1",
          "type": "image",
          "title": "Visual Prompt: The Ripple Effect",
          "content": "A web of connected nodes showing how a single code change ripples out to affect developers, users, and business stakeholders."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "Every line of code you deploy affects someone. In this lesson, we will map out how the benefits and burdens of technical decisions are distributed among different groups—like users, developers, and business owners. Understanding this 'ripple effect' is essential for making choices that are fair and effective."
        },
        {
          "id": "developer-tools-devops-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Who approved this update? Why was it deployed? 'Accountability architecture' is about tracking decisions. You will learn how to maintain an auditable trail of evidence, understand who has the right to review code, and know who is obligated to fix things if they break. It keeps everyone honest and responsible."
        },
        {
          "id": "developer-tools-devops-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "Before we finish a project, we run through a final checklist covering three areas: performance, risk management, and ethical impact. This ensures our execution is responsible. It is not just about whether the code works; it is about whether it is safe, secure, and fair to the people using it."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-101-l07-f1",
          "front": "Impact Distribution",
          "back": "How the outcomes of a technical decision affect different people, systems, and timelines."
        },
        {
          "id": "developer-tools-devops-101-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, recorded trail explaining who made a decision, what evidence they used, and why."
        },
        {
          "id": "developer-tools-devops-101-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivering software in a way that balances technical success with accountability and fairness."
        }
      ]
    },
    {
      "id": "developer-tools-devops-101-l08",
      "title": "Developer Tools and DevOps Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "developer-tools-devops-101-l08-a1",
          "type": "image",
          "title": "Visual Prompt: The Blueprint",
          "content": "A blueprint document titled 'Capstone Charter' with sections for Objectives, Constraints, and Metrics, waiting to be filled in."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "It is time to plan your final project! You will create a 'Capstone Charter' by writing down your main objectives, identifying constraints (like time or budget), and establishing metrics to measure your success. You will also outline governance triggers—rules that dictate when you need to stop and ask for help. This blueprint will guide your entire project."
        },
        {
          "id": "developer-tools-devops-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "A great engineer can build a system; a senior engineer can defend why they built it that way. You will practice explaining your technical choices, showing how they align with governance standards, and responding to critiques. This builds the confidence and communication skills you need to succeed in the tech industry."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define objective and operating boundaries.",
            "List at least three measurable success indicators.",
            "Define escalation and corrective-action criteria."
          ]
        }
      ]
    }
  ]
};
