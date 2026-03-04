import type { LearningModule } from "@/lib/modules/types";

export const NutritionScience301Module: LearningModule = {
  "id": "nutrition-science-301",
  "title": "Nutrition Science Systems and Governance",
  "description": "Level 301 curriculum in Nutrition Science, centered on metabolic foundations, dietary pattern analysis, evidence-based intervention design, and nutrition policy and equity through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nutrition",
    "public-health"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Explain and apply metabolic foundations under practical constraints",
    "Build repeatable workflows for dietary pattern analysis with measurable controls",
    "Evaluate interventions in evidence-based intervention design using comparative evidence",
    "Operationalize nutrition policy and equity with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "nutrition-science-301-l01",
      "title": "Nutrition Science Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nutrition-science-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will establish a common vocabulary that is essential for understanding Nutrition Science. We will also clarify the boundaries of our discussion, focusing on the foundational aspects of metabolism and how we analyze different dietary patterns. This shared language will help us communicate effectively about nutrition concepts and ensure everyone is on the same page as we explore this important field.\nContext recap: In this lesson, we will establish a common vocabulary that is essential for understanding Nutrition Science. We will also clarify the boundaries of our discussion, focusing on the foundational aspects of metabolism and how we analyze different dietary patterns. This shared language will help us communicate effectively about nutrition concepts and ensure everyone is on the same page as we explore this important field."
        },
        {
          "id": "nutrition-science-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "In this part of the lesson, learners will engage in mapping out causal relationships. This means identifying how different factors influence each other, along with the assumptions we make and the limitations we face. Understanding these connections is crucial before we design any interventions aimed at improving nutrition. By doing this, we can create more effective strategies that consider all relevant factors.\nContext recap: In this part of the lesson, learners will engage in mapping out causal relationships. This means identifying how different factors influence each other, along with the assumptions we make and the limitations we face. Understanding these connections is crucial before we design any interventions aimed at improving nutrition. By doing this, we can create more effective strategies that consider all relevant factors.\nContext recap: In this part of the lesson, learners will engage in mapping out causal relationships. This means identifying how different factors influence each other, along with the assumptions we make and the limitations we face. Understanding these connections is crucial before we design any interventions aimed at improving nutrition. By doing this, we can create more effective strategies that consider all relevant factors.\nWhy this matters: Causal Reasoning helps learners in Health Science connect ideas from Nutrition Science Systems and Governance to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "nutrition-science-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In this section, we will discuss the importance of evidence standards in Nutrition Science. Claims made in this field should be supported by measurable indicators, which are specific data points that can be observed and quantified. Additionally, we will explore confidence ranges, which help us understand the reliability of our claims, and review checkpoints that ensure our findings are accurate and trustworthy.\nContext recap: In this section, we will discuss the importance of evidence standards in Nutrition Science. Claims made in this field should be supported by measurable indicators, which are specific data points that can be observed and quantified. Additionally, we will explore confidence ranges, which help us understand the reliability of our claims, and review checkpoints that ensure our findings are accurate and trustworthy."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-301-l01-f1",
          "front": "metabolic foundations",
          "back": "A core decision lens in Nutrition Science requiring explicit assumption control."
        },
        {
          "id": "nutrition-science-301-l01-f2",
          "front": "dietary pattern analysis",
          "back": "Execution systems that determine reliability and repeatability."
        },
        {
          "id": "nutrition-science-301-l01-f3",
          "front": "evidence-based intervention design",
          "back": "Evaluation process for distinguishing real gains from superficial wins."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l02",
      "title": "Nutrition Science Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive segment, learners will have the opportunity to build a workflow. This involves mapping out who is responsible for different tasks (owner mapping), establishing control gates to monitor progress, and defining measurable outcomes that indicate success. By creating a structured workflow, learners will gain practical skills that are essential for managing nutrition projects effectively.\nContext recap: In this interactive segment, learners will have the opportunity to build a workflow. This involves mapping out who is responsible for different tasks (owner mapping), establishing control gates to monitor progress, and defining measurable outcomes that indicate success. By creating a structured workflow, learners will gain practical skills that are essential for managing nutrition projects effectively."
        },
        {
          "id": "nutrition-science-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "In this recap, we will focus on the importance of testing systems for potential failures. This involves stress-testing our workflows to identify possible failure scenarios and establishing rollback decision thresholds. By preparing for these situations, we can ensure that our nutrition initiatives are resilient and can adapt to challenges that may arise.\nContext recap: In this recap, we will focus on the importance of testing systems for potential failures. This involves stress-testing our workflows to identify possible failure scenarios and establishing rollback decision thresholds. By preparing for these situations, we can ensure that our nutrition initiatives are resilient and can adapt to challenges that may arise."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-301-l02-act1",
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
      "id": "nutrition-science-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-301-l03-q1",
          "text": "Which practice most improves decision quality in metabolic foundations?",
          "skillId": "nutrition-science-301-skill-core",
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
          "id": "nutrition-science-301-l03-q2",
          "text": "At level 301, high-quality execution in dietary pattern analysis should include:",
          "skillId": "nutrition-science-301-skill-execution",
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
          "id": "nutrition-science-301-l03-q3",
          "text": "A defensible approach to evidence-based intervention design requires:",
          "skillId": "nutrition-science-301-skill-eval",
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
          "id": "nutrition-science-301-l03-q4",
          "text": "Mature nutrition policy and equity systems connect:",
          "skillId": "nutrition-science-301-skill-governance",
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
      "id": "nutrition-science-301-l04",
      "title": "Nutrition Science Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nutrition-science-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case analysis, we will explore a community nutrition initiative that seeks to find a balance between achieving positive clinical outcomes, respecting cultural values, and addressing challenges related to food access. Throughout this lesson, learners will engage in identifying the various competing objectives that may arise and the potential risks that could impact the success of the initiative. By understanding these complexities, we can better appreciate the importance of designing effective nutrition programs that cater to the needs of diverse communities, ensuring that everyone has access to healthy food options.\nContext recap: In this case analysis, we will explore a community nutrition initiative that seeks to find a balance between achieving positive clinical outcomes, respecting cultural values, and addressing challenges related to food access. Throughout this lesson, learners will engage in identifying the various competing objectives that may arise and the potential risks that could impact the success of the initiative. By understanding these complexities, we can better appreciate the importance of designing effective nutrition programs that cater to the needs of diverse communities, ensuring that everyone has access to healthy food options."
        },
        {
          "id": "nutrition-science-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. Here, options will be evaluated based on their effectiveness, feasibility, associated risks, and the impact they have on stakeholders. This scoring system will help learners make informed decisions when considering different approaches to nutrition initiatives.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. Here, options will be evaluated based on their effectiveness, feasibility, associated risks, and the impact they have on stakeholders. This scoring system will help learners make informed decisions when considering different approaches to nutrition initiatives."
        },
        {
          "id": "nutrition-science-301-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "In this recap, we will discuss how we can turn failure patterns into proactive safeguards and response strategies. By analyzing what went wrong in previous scenarios, we can create playbooks that outline how to respond effectively in the future. This approach helps ensure that we are prepared for challenges and can maintain the integrity of our nutrition programs.\nContext recap: In this recap, we will discuss how we can turn failure patterns into proactive safeguards and response strategies. By analyzing what went wrong in previous scenarios, we can create playbooks that outline how to respond effectively in the future. This approach helps ensure that we are prepared for challenges and can maintain the integrity of our nutrition programs."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured method to compare options under competing priorities."
        },
        {
          "id": "nutrition-science-301-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring signal indicating a predictable risk mode."
        },
        {
          "id": "nutrition-science-301-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action pathway for safe and timely recovery."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l05",
      "title": "Nutrition Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nutrition-science-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive practice, learners will simulate various intervention scenarios while dealing with uncertainty. They will run multiple scenarios and compare the outcomes to understand how different approaches can lead to different results. This hands-on experience will enhance their ability to think critically about nutrition interventions.\nContext recap: In this interactive practice, learners will simulate various intervention scenarios while dealing with uncertainty. They will run multiple scenarios and compare the outcomes to understand how different approaches can lead to different results. This hands-on experience will enhance their ability to think critically about nutrition interventions."
        },
        {
          "id": "nutrition-science-301-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "In this debriefing session, each simulation run will be evaluated based on how well it achieved its targets, any side effects that occurred, and whether it complied with governance standards. This evaluation process is crucial for understanding the effectiveness of our interventions and ensuring that they align with best practices in nutrition science.\nContext recap: In this debriefing session, each simulation run will be evaluated based on how well it achieved its targets, any side effects that occurred, and whether it complied with governance standards. This evaluation process is crucial for understanding the effectiveness of our interventions and ensuring that they align with best practices in nutrition science."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for metabolic foundations and nutrition policy and equity.",
          "instructions": [
            "Define objective and constraints before intervention selection.",
            "Document near-term and long-term tradeoffs.",
            "Specify metrics that validate your chosen path."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-301-l06-q1",
          "text": "Which practice most improves decision quality in metabolic foundations?",
          "skillId": "nutrition-science-301-skill-core",
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
          "id": "nutrition-science-301-l06-q2",
          "text": "At level 301, high-quality execution in dietary pattern analysis should include:",
          "skillId": "nutrition-science-301-skill-execution",
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
          "id": "nutrition-science-301-l06-q3",
          "text": "A defensible approach to evidence-based intervention design requires:",
          "skillId": "nutrition-science-301-skill-eval",
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
          "id": "nutrition-science-301-l06-q4",
          "text": "Mature nutrition policy and equity systems connect:",
          "skillId": "nutrition-science-301-skill-governance",
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
      "id": "nutrition-science-301-l07",
      "title": "Nutrition Science Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "nutrition-science-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "In this lesson, learners will explore how to map the distribution of benefits and burdens among different stakeholder groups. Understanding who gains and who may be negatively impacted by nutrition initiatives is essential for creating fair and effective programs. This mapping will help us consider the perspectives of all involved parties.\nContext recap: In this lesson, learners will explore how to map the distribution of benefits and burdens among different stakeholder groups. Understanding who gains and who may be negatively impacted by nutrition initiatives is essential for creating fair and effective programs. This mapping will help us consider the perspectives of all involved parties."
        },
        {
          "id": "nutrition-science-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the concept of accountability architecture. This includes ensuring that decisions made during nutrition initiatives are traceable, that there are rights for review, and that obligations for remediation are clearly defined. By integrating these elements, we can foster transparency and trust in our nutrition governance processes.\nContext recap: In this section, we will discuss the concept of accountability architecture. This includes ensuring that decisions made during nutrition initiatives are traceable, that there are rights for review, and that obligations for remediation are clearly defined. By integrating these elements, we can foster transparency and trust in our nutrition governance processes."
        },
        {
          "id": "nutrition-science-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "At the end of our project, it's important to use a checklist that helps us ensure we are performing well, managing risks effectively, and considering the ethical implications of our actions. This checklist will guide us in making responsible decisions that positively impact our community and environment.\nContext recap: At the end of our project, it's important to use a checklist that helps us ensure we are performing well, managing risks effectively, and considering the ethical implications of our actions. This checklist will guide us in making responsible decisions that positively impact our community and environment."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-301-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across people, systems, and time."
        },
        {
          "id": "nutrition-science-301-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, ownership, and rationale."
        },
        {
          "id": "nutrition-science-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery mode that combines effectiveness with accountability and fairness."
        }
      ]
    },
    {
      "id": "nutrition-science-301-l08",
      "title": "Nutrition Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will create a detailed plan for your capstone project. This includes writing down clear objectives, identifying any constraints you might face, establishing metrics to measure success, and outlining governance triggers that will help guide your decisions throughout the project.\nContext recap: In this activity, you will create a detailed plan for your capstone project. This includes writing down clear objectives, identifying any constraints you might face, establishing metrics to measure success, and outlining governance triggers that will help guide your decisions throughout the project.\nContext recap: In this activity, you will create a detailed plan for your capstone project. This includes writing down clear objectives, identifying any constraints you might face, establishing metrics to measure success, and outlining governance triggers that will help guide your decisions throughout the project. Context recap: In this activity, you will create a detailed plan for your capstone project. This includes writing down clear objectives, identifying any constraints you might face, establishing metrics to measure success, and outlining governance triggers that will help guide your decisions throughout the project."
        },
        {
          "id": "nutrition-science-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you work on your capstone project, it's essential to be ready to explain and defend your decisions. This means preparing to answer questions and critiques related to technical aspects and governance issues. Being well-prepared will help you communicate your ideas effectively and demonstrate your understanding.\nContext recap: As you work on your capstone project, it's essential to be ready to explain and defend your decisions. This means preparing to answer questions and critiques related to technical aspects and governance issues. Being well-prepared will help you communicate your ideas effectively and demonstrate your understanding."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-301-l08-act1",
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
