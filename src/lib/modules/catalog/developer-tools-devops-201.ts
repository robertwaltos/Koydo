import type { LearningModule } from "@/lib/modules/types";

export const developer_tools_devops_201_Module: LearningModule = {
  "id": "developer-tools-devops-201",
  "title": "Developer Tools and DevOps Applied Practice",
  "description": "Level 201 curriculum in Developer Tools and DevOps, centered on delivery pipeline engineering, developer productivity systems, reliability automation, and platform governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "devops",
    "software-engineering"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
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
      "id": "developer-tools-devops-201-l01",
      "title": "Developer Tools and DevOps Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l01-a1",
          "type": "image",
          "title": "DevOps Lifecycle Infographic",
          "content": "A visual diagram showing the key stages of a modern software delivery pipeline, from coding to deployment and monitoring."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will build a common language for discussing Developer Tools and DevOps. We will define key terms and outline our focus on improving the delivery pipeline—the process of getting software to users—and boosting developer productivity. This shared vocabulary will help us communicate and collaborate effectively."
        },
        {
          "id": "developer-tools-devops-201-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "In this part of the lesson, learners will explore how to identify cause-and-effect relationships. This includes mapping out our assumptions and recognizing potential limitations before we design solutions. By doing this, we can create better interventions that address the root causes of problems."
        },
        {
          "id": "developer-tools-devops-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In this recap, we will emphasize the importance of grounding our claims in measurable evidence. Any assertions we make should be supported by clear, quantifiable indicators. We will also discuss using confidence ranges and regular review points to ensure our findings are reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-201-l01-f1",
          "front": "Delivery Pipeline Engineering",
          "back": "The process of building and managing how software is delivered, which requires clearly stating your assumptions to make good decisions."
        },
        {
          "id": "developer-tools-devops-201-l01-f2",
          "front": "Developer Productivity Systems",
          "back": "The tools and workflows that help developers build and ship software efficiently and reliably."
        },
        {
          "id": "developer-tools-devops-201-l01-f3",
          "front": "Reliability Automation",
          "back": "Using automated tools to check and improve system reliability, ensuring real gains are made, not just apparent ones."
        }
      ]
    },
    {
      "id": "developer-tools-devops-201-l02",
      "title": "Developer Tools and DevOps Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l02-a1",
          "type": "practice",
          "title": "Workflow Diagram Template",
          "content": "A fillable template for mapping process owners, control gates, and success metrics for a new workflow."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive activity, learners will create their own workflow. This involves mapping out who is responsible for each step, setting up quality control gates, and defining measurable outcomes to track success. This hands-on experience will solidify their understanding of workflow management."
        },
        {
          "id": "developer-tools-devops-201-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "In this recap, we will discuss the importance of testing our systems to ensure they can handle unexpected failures. We will explore how to establish clear thresholds for making rollback decisions—knowing when to revert to a previous version if something goes wrong. This is crucial for maintaining system reliability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-201-l02-act1",
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
      "id": "developer-tools-devops-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l03-a1",
          "type": "practice",
          "title": "Key Concepts Cheat Sheet",
          "content": "A one-page summary of core vocabulary and models from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "developer-tools-devops-201-l03-q1",
          "text": "Which practice most improves decision quality in delivery pipeline engineering?",
          "skillId": "developer-tools-devops-201-skill-pipeline-engineering",
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
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are made explicit and clear."
        },
        {
          "id": "developer-tools-devops-201-l03-q2",
          "text": "High-quality execution in developer productivity systems should include:",
          "skillId": "developer-tools-devops-201-skill-developer-productivity",
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
          "explanation": "Reliable execution needs clear ownership, defined control points, and pre-set thresholds for handling issues."
        },
        {
          "id": "developer-tools-devops-201-l03-q3",
          "text": "A defensible approach to reliability automation requires:",
          "skillId": "developer-tools-devops-201-skill-reliability-automation",
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
          "explanation": "To prove an improvement is real, you must compare it to a baseline and check for unintended negative consequences."
        },
        {
          "id": "developer-tools-devops-201-l03-q4",
          "text": "Mature platform governance systems connect:",
          "skillId": "developer-tools-devops-201-skill-platform-governance",
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
          "explanation": "Effective governance links the original goal of a policy to measurable controls and a clear plan for corrective action."
        }
      ]
    },
    {
      "id": "developer-tools-devops-201-l04",
      "title": "Developer Tools and DevOps Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l04-a1",
          "type": "mnemonic",
          "title": "Case Study Brief",
          "content": "A document outlining the case study's background, key stakeholders, and central conflict between speed and reliability."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-201-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case study, we will analyze a rapidly growing engineering organization trying to balance deployment speed with quality and reliability. Learners will identify the organization's competing goals and the potential risks that arise from these conflicting objectives. This analysis will highlight real-world challenges in DevOps."
        },
        {
          "id": "developer-tools-devops-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "We will introduce the tradeoff matrix, a tool that helps evaluate different options by scoring them on criteria like effectiveness, feasibility, risk, and stakeholder impact. By using this matrix, learners can make more informed and balanced decisions."
        },
        {
          "id": "developer-tools-devops-201-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "In this recap, we will discuss how to turn failure patterns into proactive safeguards. This involves creating response plans, or playbooks, that can be used when things go wrong. This preparation is essential for minimizing disruptions and ensuring smooth operations."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A chart used to weigh the pros and cons of different choices against important criteria like cost, risk, and impact."
        },
        {
          "id": "developer-tools-devops-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A problem that happens repeatedly, signaling a weak spot in a system or process."
        },
        {
          "id": "developer-tools-devops-201-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide created in advance to handle specific problems, ensuring a quick and safe recovery."
        }
      ]
    },
    {
      "id": "developer-tools-devops-201-l05",
      "title": "Developer Tools and DevOps Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard Guide",
          "content": "An overview of the simulation interface, explaining the variables you can control and the metrics used to measure outcomes."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-201-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, learners will run scenarios where they implement interventions while facing uncertainty. They will compare the outcomes of different choices to understand their effects. This practical experience will enhance their problem-solving skills in dynamic situations."
        },
        {
          "id": "developer-tools-devops-201-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "In this debriefing session, we will evaluate each simulation run by looking at how well targets were met, any unintended side effects, and whether governance rules were followed. This reflection will highlight the importance of accountability and continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for delivery pipeline engineering and platform governance.",
          "instructions": [
            "Define your objective and constraints before selecting an intervention.",
            "Document the near-term and long-term tradeoffs of your choice.",
            "Specify the metrics that will validate your chosen path."
          ]
        }
      ]
    },
    {
      "id": "developer-tools-devops-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l06-a1",
          "type": "practice",
          "title": "Decision Frameworks Review",
          "content": "A summary of the Tradeoff Matrix and Recovery Design concepts from the case analysis lesson."
        }
      ],
      "questions": [
        {
          "id": "developer-tools-devops-201-l06-q1",
          "text": "When using a tradeoff matrix to choose between deploying faster or improving stability, what is the most critical first step?",
          "skillId": "developer-tools-devops-201-skill-risk-communication",
          "options": [
            {
              "id": "a",
              "text": "Pick the cheapest option immediately"
            },
            {
              "id": "b",
              "text": "Agree on the evaluation criteria with stakeholders"
            },
            {
              "id": "c",
              "text": "Implement both options to see what happens"
            },
            {
              "id": "d",
              "text": "Ignore the risks associated with each option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is only effective if all stakeholders agree on the criteria (e.g., cost, risk, user impact) used to evaluate the options."
        },
        {
          "id": "developer-tools-devops-201-l06-q2",
          "text": "In a case study, you notice that deployments fail every Friday afternoon. This is best described as a:",
          "skillId": "developer-tools-devops-201-skill-reliability-automation",
          "options": [
            {
              "id": "a",
              "text": "Random event"
            },
            {
              "id": "b",
              "text": "Response playbook"
            },
            {
              "id": "c",
              "text": "Failure pattern"
            },
            {
              "id": "d",
              "text": "Successful outcome"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A recurring issue that can be predicted based on specific conditions (like time of week) is a failure pattern, which signals a root cause to investigate."
        },
        {
          "id": "developer-tools-devops-201-l06-q3",
          "text": "A well-designed response playbook for a critical system failure should primarily focus on:",
          "skillId": "developer-tools-devops-201-skill-pipeline-engineering",
          "options": [
            {
              "id": "a",
              "text": "Finding who to blame for the failure"
            },
            {
              "id": "b",
              "text": "Providing clear, step-by-step actions for safe and timely recovery"
            },
            {
              "id": "c",
              "text": "Documenting the failure after the system is fixed"
            },
            {
              "id": "d",
              "text": "Waiting for a manager to make all decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The main purpose of a playbook is to enable a fast, safe, and predictable recovery by outlining the exact steps to take during a crisis."
        },
        {
          "id": "developer-tools-devops-201-l06-q4",
          "text": "After running a simulation, your chosen intervention improved deployment speed but also increased failure rates. This outcome is an example of a:",
          "skillId": "developer-tools-devops-201-skill-evidence-based-defense",
          "options": [
            {
              "id": "a",
              "text": "Perfect solution with no downsides"
            },
            {
              "id": "b",
              "text": "Result that can't be explained"
            },
            {
              "id": "c",
              "text": "Tradeoff with an unintended side effect"
            },
            {
              "id": "d",
              "text": "Simulation error"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Simulations help reveal tradeoffs and unintended consequences, where improving one metric (speed) can negatively impact another (reliability)."
        }
      ]
    },
    {
      "id": "developer-tools-devops-201-l07",
      "title": "Developer Tools and DevOps Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map Template",
          "content": "A visual tool to map how a project's outcomes might positively or negatively affect different groups of people."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "In this lesson, learners will explore how to identify and map the distribution of benefits and burdens among different stakeholder groups. Understanding who gains and who may be negatively affected by a decision is crucial for making ethical and responsible choices."
        },
        {
          "id": "developer-tools-devops-201-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will discuss accountability architecture, which involves ensuring clear traceability of decisions, rights to review those decisions, and obligations to address any issues that arise. Integrating these elements is essential for maintaining trust and transparency."
        },
        {
          "id": "developer-tools-devops-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "At the end of a project, it's important to use a final checklist to review three key areas: how well the project performs, how risks are managed, and the ethical impact of the work. This ensures that we are not only successful but also responsible in our actions."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-201-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of who benefits and who bears the costs of a decision across different groups and over time."
        },
        {
          "id": "developer-tools-devops-201-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record of a decision, showing who made it, why they made it, and what evidence was used."
        },
        {
          "id": "developer-tools-devops-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A way of working that balances getting things done effectively with being accountable and fair to all stakeholders."
        }
      ]
    },
    {
      "id": "developer-tools-devops-201-l08",
      "title": "Developer Tools and DevOps Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "A structured document to define your capstone project's goals, constraints, success metrics, and governance rules."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will create a Capstone Charter. This involves defining your project's main objectives, identifying constraints, establishing metrics to measure success, and outlining governance triggers that will guide your decisions throughout the project."
        },
        {
          "id": "developer-tools-devops-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As part of your preparation, you will get ready to defend your project decisions. This means being able to explain your choices clearly and respond to technical questions or critiques regarding governance. This practice will help you build confidence and communicate effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define your objective and operating boundaries.",
            "List at least three measurable success indicators.",
            "Define escalation and corrective-action criteria."
          ]
        }
      ]
    },
    {
      "id": "developer-tools-devops-201-l09",
      "title": "Checkpoint 3: Governance and Synthesis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "developer-tools-devops-201-l09-a1",
          "type": "practice",
          "title": "Capstone Readiness Checklist",
          "content": "A checklist to review your capstone plan against the principles of stakeholder impact, accountability, and responsible execution."
        }
      ],
      "questions": [
        {
          "id": "developer-tools-devops-201-l09-q1",
          "text": "When analyzing stakeholder impact, what is a key ethical consideration?",
          "skillId": "developer-tools-devops-201-skill-risk-communication",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the benefits to the development team"
            },
            {
              "id": "b",
              "text": "Ensuring the distribution of benefits and burdens is fair"
            },
            {
              "id": "c",
              "text": "Ignoring any negative feedback from users"
            },
            {
              "id": "d",
              "text": "Maximizing profit without regard for consequences"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible execution requires considering the fairness of how a project's outcomes, both positive and negative, are distributed among all affected groups."
        },
        {
          "id": "developer-tools-devops-201-l09-q2",
          "text": "An effective 'accountability architecture' ensures that:",
          "skillId": "developer-tools-devops-201-skill-platform-governance",
          "options": [
            {
              "id": "a",
              "text": "Decisions are made in secret to move faster"
            },
            {
              "id": "b",
              "text": "There is a clear, auditable trail explaining why a decision was made"
            },
            {
              "id": "c",
              "text": "No one can question a decision after it has been made"
            },
            {
              "id": "d",
              "text": "Only one person is ever responsible for all outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accountability relies on decision traceability—the ability to review the evidence, rationale, and ownership behind any significant choice."
        },
        {
          "id": "developer-tools-devops-201-l09-q3",
          "text": "Which statement best describes 'responsible execution'?",
          "skillId": "developer-tools-devops-201-skill-evidence-based-defense",
          "options": [
            {
              "id": "a",
              "text": "Achieving project goals no matter the cost to others"
            },
            {
              "id": "b",
              "text": "Balancing project performance with risk management and ethical impact"
            },
            {
              "id": "c",
              "text": "Following the project plan without any deviation, even if it causes harm"
            },
            {
              "id": "d",
              "text": "Focusing only on technical performance metrics"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible execution is a holistic approach that combines achieving technical goals with proactive risk management and a commitment to fairness and accountability."
        },
        {
          "id": "developer-tools-devops-201-l09-q4",
          "text": "A strong Capstone Charter should always include:",
          "skillId": "developer-tools-devops-201-skill-developer-productivity",
          "options": [
            {
              "id": "a",
              "text": "A vague goal without any way to measure it"
            },
            {
              "id": "b",
              "text": "A list of every possible feature that could be built"
            },
            {
              "id": "c",
              "text": "Clear objectives, constraints, and measurable success indicators"
            },
            {
              "id": "d",
              "text": "A guarantee that the project will have no problems"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A charter is a foundational document that must clearly define the project's purpose, its limits (constraints), and how success will be concretely measured."
        }
      ]
    }
  ]
};
