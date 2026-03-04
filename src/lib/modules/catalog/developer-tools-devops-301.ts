import type { LearningModule } from "@/lib/modules/types";

export const DeveloperToolsDevops301Module: LearningModule = {
  "id": "developer-tools-devops-301",
  "title": "Developer Tools and DevOps Systems and Governance",
  "description": "Level 301 curriculum in Developer Tools and DevOps, centered on delivery pipeline engineering, developer productivity systems, reliability automation, and platform governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "devops",
    "software-engineering"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
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
      "id": "developer-tools-devops-301-l01",
      "title": "Developer Tools and DevOps Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will work together to develop a common language that everyone can understand when discussing Developer Tools and DevOps. This shared vocabulary is important because it helps us communicate more clearly and effectively with each other. Additionally, we will outline the specific areas we will focus on, particularly how to create efficient delivery pipelines and enhance developer productivity. By understanding these concepts and using the same terms, we can collaborate better and achieve our project goals more successfully.\nContext recap: In this lesson, we will work together to develop a common language that everyone can understand when discussing Developer Tools and DevOps. This shared vocabulary is important because it helps us communicate more clearly and effectively with each other. Additionally, we will outline the specific areas we will focus on, particularly how to create efficient delivery pipelines and enhance developer productivity. By understanding these concepts and using the same terms, we can collaborate better and achieve our project goals more successfully."
        },
        {
          "id": "developer-tools-devops-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "In this section, learners will explore how to identify and understand the relationships between different factors in a system. This involves mapping out causal relationships, which means figuring out how one thing can lead to another. Additionally, we will discuss the assumptions we make and the limitations we face before we design any interventions or solutions. This foundational understanding is crucial for effective problem-solving.\nContext recap: In this section, learners will explore how to identify and understand the relationships between different factors in a system. This involves mapping out causal relationships, which means figuring out how one thing can lead to another. Additionally, we will discuss the assumptions we make and the limitations we face before we design any interventions or solutions. This foundational understanding is crucial for effective problem-solving."
        },
        {
          "id": "developer-tools-devops-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In this recap, we emphasize the importance of grounding our claims in solid evidence. This means that any assertions we make should be backed by measurable indicators, which are specific data points we can track. We will also discuss the significance of having confidence ranges, which help us understand the reliability of our data, and review checkpoints to ensure that we are on the right path. This approach helps us make informed decisions.\nContext recap: In this recap, we emphasize the importance of grounding our claims in solid evidence. This means that any assertions we make should be backed by measurable indicators, which are specific data points we can track. We will also discuss the significance of having confidence ranges, which help us understand the reliability of our data, and review checkpoints to ensure that we are on the right path. This approach helps us make informed decisions."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-301-l01-f1",
          "front": "delivery pipeline engineering",
          "back": "A core decision lens in Developer Tools and DevOps requiring explicit assumption control."
        },
        {
          "id": "developer-tools-devops-301-l01-f2",
          "front": "developer productivity systems",
          "back": "Execution systems that determine reliability and repeatability."
        },
        {
          "id": "developer-tools-devops-301-l01-f3",
          "front": "reliability automation",
          "back": "Evaluation process for distinguishing real gains from superficial wins."
        }
      ]
    },
    {
      "id": "developer-tools-devops-301-l02",
      "title": "Developer Tools and DevOps Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive lab, learners will have the opportunity to build their own workflow. This involves mapping out who is responsible for each part of the process, establishing control gates to ensure quality, and defining measurable outcomes to assess success. By engaging in this hands-on activity, learners will gain practical experience in creating effective workflows that enhance productivity.\nContext recap: In this interactive lab, learners will have the opportunity to build their own workflow. This involves mapping out who is responsible for each part of the process, establishing control gates to ensure quality, and defining measurable outcomes to assess success. By engaging in this hands-on activity, learners will gain practical experience in creating effective workflows that enhance productivity."
        },
        {
          "id": "developer-tools-devops-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "In this recap, we will discuss the importance of preparing systems for potential failures. This involves stress-testing our systems to see how they perform under challenging conditions and establishing clear thresholds for when to roll back changes. By understanding these concepts, learners will be better equipped to make informed decisions about system reliability and recovery strategies.\nContext recap: In this recap, we will discuss the importance of preparing systems for potential failures. This involves stress-testing our systems to see how they perform under challenging conditions and establishing clear thresholds for when to roll back changes. By understanding these concepts, learners will be better equipped to make informed decisions about system reliability and recovery strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-301-l02-act1",
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
      "id": "developer-tools-devops-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "developer-tools-devops-301-l03-q1",
          "text": "Which practice most improves decision quality in delivery pipeline engineering?",
          "skillId": "developer-tools-devops-301-skill-core",
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
          "id": "developer-tools-devops-301-l03-q2",
          "text": "At level 301, high-quality execution in developer productivity systems should include:",
          "skillId": "developer-tools-devops-301-skill-execution",
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
          "id": "developer-tools-devops-301-l03-q3",
          "text": "A defensible approach to reliability automation requires:",
          "skillId": "developer-tools-devops-301-skill-eval",
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
          "id": "developer-tools-devops-301-l03-q4",
          "text": "Mature platform governance systems connect:",
          "skillId": "developer-tools-devops-301-skill-governance",
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
      "id": "developer-tools-devops-301-l04",
      "title": "Developer Tools and DevOps Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-301-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case analysis, we will focus on a rapidly growing engineering organization that is trying to balance the speed of deployments with the need for quality and reliability. Learners will identify the competing objectives that the organization faces and the risks associated with their systems. This analysis will help learners understand the complexities involved in managing growth while maintaining high standards.\nContext recap: In this case analysis, we will focus on a rapidly growing engineering organization that is trying to balance the speed of deployments with the need for quality and reliability. Learners will identify the competing objectives that the organization faces and the risks associated with their systems. This analysis will help learners understand the complexities involved in managing growth while maintaining high standards."
        },
        {
          "id": "developer-tools-devops-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. This tool helps us evaluate different options by scoring them based on their effectiveness, feasibility, risk, and impact on stakeholders. By using this matrix, learners will be able to make more informed decisions about which options to pursue in their projects.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. This tool helps us evaluate different options by scoring them based on their effectiveness, feasibility, risk, and impact on stakeholders. By using this matrix, learners will be able to make more informed decisions about which options to pursue in their projects."
        },
        {
          "id": "developer-tools-devops-301-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "In this recap, we will discuss how to turn patterns of failure into proactive measures. This involves creating safeguards and response playbooks that outline how to react when things go wrong. By preparing for potential issues in advance, learners will be better equipped to handle challenges effectively and minimize disruptions.\nContext recap: In this recap, we will discuss how to turn patterns of failure into proactive measures. This involves creating safeguards and response playbooks that outline how to react when things go wrong. By preparing for potential issues in advance, learners will be better equipped to handle challenges effectively and minimize disruptions."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured method to compare options under competing priorities."
        },
        {
          "id": "developer-tools-devops-301-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring signal indicating a predictable risk mode."
        },
        {
          "id": "developer-tools-devops-301-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action pathway for safe and timely recovery."
        }
      ]
    },
    {
      "id": "developer-tools-devops-301-l05",
      "title": "Developer Tools and DevOps Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, learners will run through various intervention scenarios while facing uncertainty. They will compare the outcomes of these different scenarios to understand how different decisions can lead to different results. This hands-on experience will help learners develop critical thinking skills and learn how to adapt to changing circumstances.\nContext recap: In this interactive simulation, learners will run through various intervention scenarios while facing uncertainty. They will compare the outcomes of these different scenarios to understand how different decisions can lead to different results. This hands-on experience will help learners develop critical thinking skills and learn how to adapt to changing circumstances."
        },
        {
          "id": "developer-tools-devops-301-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "In this recap, we will evaluate each simulation run based on how well it met the targets, any unintended side effects that occurred, and whether it complied with governance standards. This evaluation process is essential for understanding the effectiveness of our interventions and ensuring that we are making responsible decisions.\nContext recap: In this recap, we will evaluate each simulation run based on how well it met the targets, any unintended side effects that occurred, and whether it complied with governance standards. This evaluation process is essential for understanding the effectiveness of our interventions and ensuring that we are making responsible decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-301-l05-act1",
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
      "id": "developer-tools-devops-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "developer-tools-devops-301-l06-q1",
          "text": "Which practice most improves decision quality in delivery pipeline engineering?",
          "skillId": "developer-tools-devops-301-skill-core",
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
          "id": "developer-tools-devops-301-l06-q2",
          "text": "At level 301, high-quality execution in developer productivity systems should include:",
          "skillId": "developer-tools-devops-301-skill-execution",
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
          "id": "developer-tools-devops-301-l06-q3",
          "text": "A defensible approach to reliability automation requires:",
          "skillId": "developer-tools-devops-301-skill-eval",
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
          "id": "developer-tools-devops-301-l06-q4",
          "text": "Mature platform governance systems connect:",
          "skillId": "developer-tools-devops-301-skill-governance",
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
      "id": "developer-tools-devops-301-l07",
      "title": "Developer Tools and DevOps Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "In this section, learners will explore how to map out the benefits and burdens that different stakeholder groups experience. This mapping helps us understand who gains from our decisions and who might face challenges. By considering the perspectives of all stakeholders, learners will be better prepared to make balanced and fair decisions.\nContext recap: In this section, learners will explore how to map out the benefits and burdens that different stakeholder groups experience. This mapping helps us understand who gains from our decisions and who might face challenges. By considering the perspectives of all stakeholders, learners will be better prepared to make balanced and fair decisions."
        },
        {
          "id": "developer-tools-devops-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the concept of accountability architecture. This involves ensuring that there is a clear trace of decisions made, the rights to review those decisions, and the obligations to correct any issues that arise. By integrating these elements, learners will understand the importance of transparency and responsibility in decision-making processes.\nContext recap: In this section, we will discuss the concept of accountability architecture. This involves ensuring that there is a clear trace of decisions made, the rights to review those decisions, and the obligations to correct any issues that arise. By integrating these elements, learners will understand the importance of transparency and responsibility in decision-making processes."
        },
        {
          "id": "developer-tools-devops-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "At the end of our project, it's important to use a checklist that helps us think about three key areas: how well our project performs, how we can manage any risks, and the ethical effects of our work. This checklist ensures that we are responsible in our execution and that we consider all aspects of our project before finalizing it.\nContext recap: At the end of our project, it's important to use a checklist that helps us think about three key areas: how well our project performs, how we can manage any risks, and the ethical effects of our work. This checklist ensures that we are responsible in our execution and that we consider all aspects of our project before finalizing it."
        }
      ],
      "flashcards": [
        {
          "id": "developer-tools-devops-301-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across people, systems, and time."
        },
        {
          "id": "developer-tools-devops-301-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, ownership, and rationale."
        },
        {
          "id": "developer-tools-devops-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery mode that combines effectiveness with accountability and fairness."
        }
      ]
    },
    {
      "id": "developer-tools-devops-301-l08",
      "title": "Developer Tools and DevOps Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "developer-tools-devops-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "developer-tools-devops-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will create a Capstone Charter. This document will outline the objectives of your project, the constraints you might face, the metrics you will use to measure success, and the governance triggers that will guide your decisions. This is a crucial step in ensuring your project is well-planned and organized.\nContext recap: In this activity, you will create a Capstone Charter. This document will outline the objectives of your project, the constraints you might face, the metrics you will use to measure success, and the governance triggers that will guide your decisions. This is a crucial step in ensuring your project is well-planned and organized."
        },
        {
          "id": "developer-tools-devops-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you work on your project, it's essential to prepare for defending your decisions. This means thinking about how to respond to questions and critiques related to both the technical aspects of your work and the governance principles that guide it. Being ready to explain your choices will help you communicate effectively and demonstrate your understanding.\nContext recap: As you work on your project, it's essential to prepare for defending your decisions. This means thinking about how to respond to questions and critiques related to both the technical aspects of your work and the governance principles that guide it. Being ready to explain your choices will help you communicate effectively and demonstrate your understanding."
        }
      ],
      "interactiveActivities": [
        {
          "id": "developer-tools-devops-301-l08-act1",
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
