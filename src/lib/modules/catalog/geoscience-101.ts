import type { LearningModule } from "@/lib/modules/types";

export const Geoscience101Module: LearningModule = {
  "id": "geoscience-101",
  "title": "Geoscience Foundations",
  "description": "Level 101 curriculum in Geoscience, centered on tectonic and surface processes, earth materials analysis, hazard and risk interpretation, and resource and stewardship governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geology",
    "earth-systems"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Explain and apply tectonic and surface processes under practical constraints",
    "Build repeatable workflows for earth materials analysis with measurable controls",
    "Evaluate interventions in hazard and risk interpretation using comparative evidence",
    "Operationalize resource and stewardship governance with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "geoscience-101-l01",
      "title": "Geoscience Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will dive into some key vocabulary that is essential for understanding Geoscience. These terms will help us communicate clearly about the exciting processes that shape our planet. We will also outline the specific areas we will focus on during our studies. This includes tectonic movements, which are the shifts and changes in the Earth's crust, surface processes that affect the landscape, and the analysis of different earth materials like rocks and minerals. By grasping these concepts and terms, we will build a strong foundation for our exploration of Geoscience and be better prepared to discuss and understand the world around us."
        },
        {
          "id": "geoscience-101-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "In this part of the lesson, students will learn how to identify and map out causal relationships. This means understanding how different factors influence one another, as well as recognizing any assumptions or limitations that might exist. Before designing any interventions or solutions, it is crucial to have a clear understanding of these relationships to ensure effective outcomes.\nContext recap: In this part of the lesson, students will learn how to identify and map out causal relationships. This means understanding how different factors influence one another, as well as recognizing any assumptions or limitations that might exist. Before designing any interventions or solutions, it is crucial to have a clear understanding of these relationships to ensure effective outcomes."
        },
        {
          "id": "geoscience-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In Geoscience, it is essential to support our claims with solid evidence. This means that any statements we make should be backed by measurable indicators, which help us gauge their accuracy. Additionally, we will discuss the importance of confidence ranges and review checkpoints to ensure that our findings are reliable and valid.\nContext recap: In Geoscience, it is essential to support our claims with solid evidence. This means that any statements we make should be backed by measurable indicators, which help us gauge their accuracy. Additionally, we will discuss the importance of confidence ranges and review checkpoints to ensure that our findings are reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-101-l01-f1",
          "front": "tectonic and surface processes",
          "back": "A core decision lens in Geoscience requiring explicit assumption control."
        },
        {
          "id": "geoscience-101-l01-f2",
          "front": "earth materials analysis",
          "back": "Execution systems that determine reliability and repeatability."
        },
        {
          "id": "geoscience-101-l01-f3",
          "front": "hazard and risk interpretation",
          "back": "Evaluation process for distinguishing real gains from superficial wins."
        }
      ]
    },
    {
      "id": "geoscience-101-l02",
      "title": "Geoscience Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive activity, students will have the opportunity to create their own workflow. This involves mapping out who is responsible for different tasks, establishing control gates to monitor progress, and defining measurable outcomes to assess success. This hands-on experience will help learners understand the importance of organization and planning in Geoscience projects.\nContext recap: In this interactive activity, students will have the opportunity to create their own workflow. This involves mapping out who is responsible for different tasks, establishing control gates to monitor progress, and defining measurable outcomes to assess success. This hands-on experience will help learners understand the importance of organization and planning in Geoscience projects."
        },
        {
          "id": "geoscience-101-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "In this recap, we will discuss how systems can be tested under stress to identify potential failure scenarios. Students will learn about the importance of having rollback decision thresholds, which are guidelines that help teams decide when to revert to a previous state if things do not go as planned. This practice is crucial in ensuring that projects remain on track and can adapt to challenges.\nContext recap: In this recap, we will discuss how systems can be tested under stress to identify potential failure scenarios. Students will learn about the importance of having rollback decision thresholds, which are guidelines that help teams decide when to revert to a previous state if things do not go as planned. This practice is crucial in ensuring that projects remain on track and can adapt to challenges."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-101-l02-act1",
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
      "id": "geoscience-101-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "geoscience-101-l03-q1",
          "text": "Which practice most improves decision quality in tectonic and surface processes?",
          "skillId": "geoscience-101-skill-core",
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
          "id": "geoscience-101-l03-q2",
          "text": "At level 101, high-quality execution in earth materials analysis should include:",
          "skillId": "geoscience-101-skill-execution",
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
          "id": "geoscience-101-l03-q3",
          "text": "A defensible approach to hazard and risk interpretation requires:",
          "skillId": "geoscience-101-skill-eval",
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
          "id": "geoscience-101-l03-q4",
          "text": "Mature resource and stewardship governance systems connect:",
          "skillId": "geoscience-101-skill-governance",
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
      "id": "geoscience-101-l04",
      "title": "Geoscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case study, we will focus on a specific region that is facing challenges such as earthquakes, erosion, and groundwater issues. These problems require careful decision-making that integrates various aspects of Geoscience. Students will work to identify the different objectives that may compete with one another and assess the risks associated with the systems in place.\nContext recap: In this case study, we will focus on a specific region that is facing challenges such as earthquakes, erosion, and groundwater issues. These problems require careful decision-making that integrates various aspects of Geoscience. Students will work to identify the different objectives that may compete with one another and assess the risks associated with the systems in place."
        },
        {
          "id": "geoscience-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. This tool allows students to evaluate different options based on several criteria, including effectiveness, feasibility, risk, and the impact on stakeholders. By scoring these options, learners can make informed decisions that consider both benefits and drawbacks.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. This tool allows students to evaluate different options based on several criteria, including effectiveness, feasibility, risk, and the impact on stakeholders. By scoring these options, learners can make informed decisions that consider both benefits and drawbacks."
        },
        {
          "id": "geoscience-101-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "In this recap, we will discuss how patterns of failure can be transformed into proactive measures. This means developing safeguards and response playbooks that outline steps to take in case of an emergency. By preparing for potential issues, we can enhance our resilience and response capabilities in Geoscience.\nContext recap: In this recap, we will discuss how patterns of failure can be transformed into proactive measures. This means developing safeguards and response playbooks that outline steps to take in case of an emergency. By preparing for potential issues, we can enhance our resilience and response capabilities in Geoscience."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured method to compare options under competing priorities."
        },
        {
          "id": "geoscience-101-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring signal indicating a predictable risk mode."
        },
        {
          "id": "geoscience-101-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action pathway for safe and timely recovery."
        }
      ]
    },
    {
      "id": "geoscience-101-l05",
      "title": "Geoscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, students will run various intervention scenarios while considering uncertainty. This means they will explore different possible outcomes based on their decisions and actions. By comparing these outcomes, learners will gain insights into the complexities of real-world Geoscience challenges.\nContext recap: In this interactive simulation, students will run various intervention scenarios while considering uncertainty. This means they will explore different possible outcomes based on their decisions and actions. By comparing these outcomes, learners will gain insights into the complexities of real-world Geoscience challenges."
        },
        {
          "id": "geoscience-101-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "In this debriefing session, we will evaluate each simulation run to determine how well the targets were met. Students will also assess any side effects that occurred and check for compliance with governance standards. This reflection is crucial for understanding the implications of their decisions and improving future simulations.\nContext recap: In this debriefing session, we will evaluate each simulation run to determine how well the targets were met. Students will also assess any side effects that occurred and check for compliance with governance standards. This reflection is crucial for understanding the implications of their decisions and improving future simulations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for tectonic and surface processes and resource and stewardship governance.",
          "instructions": [
            "Define objective and constraints before intervention selection.",
            "Document near-term and long-term tradeoffs.",
            "Specify metrics that validate your chosen path."
          ]
        }
      ]
    },
    {
      "id": "geoscience-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "geoscience-101-l06-q1",
          "text": "Which practice most improves decision quality in tectonic and surface processes?",
          "skillId": "geoscience-101-skill-core",
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
          "id": "geoscience-101-l06-q2",
          "text": "At level 101, high-quality execution in earth materials analysis should include:",
          "skillId": "geoscience-101-skill-execution",
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
          "id": "geoscience-101-l06-q3",
          "text": "A defensible approach to hazard and risk interpretation requires:",
          "skillId": "geoscience-101-skill-eval",
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
          "id": "geoscience-101-l06-q4",
          "text": "Mature resource and stewardship governance systems connect:",
          "skillId": "geoscience-101-skill-governance",
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
      "id": "geoscience-101-l07",
      "title": "Geoscience Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "geoscience-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "In this lesson, learners will explore how benefits and burdens are distributed among different stakeholder groups. By mapping these impacts, students will understand the importance of considering various perspectives in Geoscience decision-making, ensuring that all voices are heard and valued.\nContext recap: In this lesson, learners will explore how benefits and burdens are distributed among different stakeholder groups. By mapping these impacts, students will understand the importance of considering various perspectives in Geoscience decision-making, ensuring that all voices are heard and valued."
        },
        {
          "id": "geoscience-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the concept of accountability architecture. This involves ensuring that decisions made during Geoscience projects can be traced back to their origins. Students will learn about the rights to review decisions and the obligations to address any issues that arise, fostering a culture of responsibility and transparency.\nContext recap: In this section, we will discuss the concept of accountability architecture. This involves ensuring that decisions made during Geoscience projects can be traced back to their origins. Students will learn about the rights to review decisions and the obligations to address any issues that arise, fostering a culture of responsibility and transparency."
        },
        {
          "id": "geoscience-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "At the end of our project, it's important to have a checklist that helps us ensure we are performing well, managing risks effectively, and considering the ethical implications of our actions. This checklist will guide us in making responsible decisions that positively impact our community and environment.\nContext recap: At the end of our project, it's important to have a checklist that helps us ensure we are performing well, managing risks effectively, and considering the ethical implications of our actions. This checklist will guide us in making responsible decisions that positively impact our community and environment."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-101-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across people, systems, and time."
        },
        {
          "id": "geoscience-101-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, ownership, and rationale."
        },
        {
          "id": "geoscience-101-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery mode that combines effectiveness with accountability and fairness."
        }
      ]
    },
    {
      "id": "geoscience-101-l08",
      "title": "Geoscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will create a detailed plan for your capstone project. This plan will include clear objectives that outline what you want to achieve, any constraints that may limit your project, metrics to measure your success, and triggers for governance that will help you stay on track and make informed decisions throughout the process.\nContext recap: In this activity, you will create a detailed plan for your capstone project. This plan will include clear objectives that outline what you want to achieve, any constraints that may limit your project, metrics to measure your success, and triggers for governance that will help you stay on track and make informed decisions throughout the process."
        },
        {
          "id": "geoscience-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you work on your capstone project, it is essential to be ready to explain and defend your decisions. You will prepare to address any questions or critiques related to the technical aspects of your project and the governance processes you have chosen. This preparation will help you build confidence and ensure that your project meets the necessary standards.\nContext recap: As you work on your capstone project, it is essential to be ready to explain and defend your decisions. You will prepare to address any questions or critiques related to the technical aspects of your project and the governance processes you have chosen. This preparation will help you build confidence and ensure that your project meets the necessary standards."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-101-l08-act1",
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
