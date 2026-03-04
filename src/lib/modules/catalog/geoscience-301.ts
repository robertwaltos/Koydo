import type { LearningModule } from "@/lib/modules/types";

export const Geoscience301Module: LearningModule = {
  "id": "geoscience-301",
  "title": "Geoscience Systems and Governance",
  "description": "Level 301 curriculum in Geoscience, centered on tectonic and surface processes, earth materials analysis, hazard and risk interpretation, and resource and stewardship governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geology",
    "earth-systems"
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
    "Explain and apply tectonic and surface processes under practical constraints",
    "Build repeatable workflows for earth materials analysis with measurable controls",
    "Evaluate interventions in hazard and risk interpretation using comparative evidence",
    "Operationalize resource and stewardship governance with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "geoscience-301-l01",
      "title": "Geoscience Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will work together to create a common vocabulary that is crucial for grasping the concepts of Geoscience. By defining key terms and phrases, we will ensure that everyone is on the same page. Additionally, we will outline the specific areas we will be studying, which include tectonic processes—how the Earth's plates move and interact—surface processes like erosion and sedimentation, and the analysis of various earth materials such as rocks and minerals. Establishing this shared language will not only enhance our communication but also deepen our understanding of the fundamental ideas in Geoscience, making our learning experience more effective and enjoyable."
        },
        {
          "id": "geoscience-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "In this section, learners will explore how to identify and map out causal relationships. This means understanding how different factors are connected and recognizing any assumptions or limitations that may exist. Before designing any interventions, it is crucial to analyze these relationships to ensure effective solutions.\nContext recap: In this section, learners will explore how to identify and map out causal relationships. This means understanding how different factors are connected and recognizing any assumptions or limitations that may exist. Before designing any interventions, it is crucial to analyze these relationships to ensure effective solutions."
        },
        {
          "id": "geoscience-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In Geoscience, it is important to base our claims on solid evidence. This means that our statements should be supported by measurable indicators, which help us assess the reliability of our findings. Additionally, we will discuss the importance of establishing confidence ranges and review checkpoints to ensure that our conclusions are well-founded.\nContext recap: In Geoscience, it is important to base our claims on solid evidence. This means that our statements should be supported by measurable indicators, which help us assess the reliability of our findings. Additionally, we will discuss the importance of establishing confidence ranges and review checkpoints to ensure that our conclusions are well-founded."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-301-l01-f1",
          "front": "tectonic and surface processes",
          "back": "A core decision lens in Geoscience requiring explicit assumption control."
        },
        {
          "id": "geoscience-301-l01-f2",
          "front": "earth materials analysis",
          "back": "Execution systems that determine reliability and repeatability."
        },
        {
          "id": "geoscience-301-l01-f3",
          "front": "hazard and risk interpretation",
          "back": "Evaluation process for distinguishing real gains from superficial wins."
        }
      ]
    },
    {
      "id": "geoscience-301-l02",
      "title": "Geoscience Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive activity, learners will have the opportunity to build a workflow. This involves mapping out ownership roles, setting control gates to monitor progress, and defining measurable outcomes to evaluate success. This hands-on experience will help learners understand the importance of structured processes in Geoscience.\nContext recap: In this interactive activity, learners will have the opportunity to build a workflow. This involves mapping out ownership roles, setting control gates to monitor progress, and defining measurable outcomes to evaluate success. This hands-on experience will help learners understand the importance of structured processes in Geoscience."
        },
        {
          "id": "geoscience-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "In this recap, we will discuss how systems can be tested for potential failures. This involves stress-testing the systems to identify any weaknesses and determining rollback decision thresholds. Understanding these concepts is essential for ensuring that we can respond effectively to any challenges that may arise.\nContext recap: In this recap, we will discuss how systems can be tested for potential failures. This involves stress-testing the systems to identify any weaknesses and determining rollback decision thresholds. Understanding these concepts is essential for ensuring that we can respond effectively to any challenges that may arise."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-301-l02-act1",
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
      "id": "geoscience-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "geoscience-301-l03-q1",
          "text": "Which practice most improves decision quality in tectonic and surface processes?",
          "skillId": "geoscience-301-skill-core",
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
          "id": "geoscience-301-l03-q2",
          "text": "At level 301, high-quality execution in earth materials analysis should include:",
          "skillId": "geoscience-301-skill-execution",
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
          "id": "geoscience-301-l03-q3",
          "text": "A defensible approach to hazard and risk interpretation requires:",
          "skillId": "geoscience-301-skill-eval",
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
          "id": "geoscience-301-l03-q4",
          "text": "Mature resource and stewardship governance systems connect:",
          "skillId": "geoscience-301-skill-governance",
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
      "id": "geoscience-301-l04",
      "title": "Geoscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case analysis, we will explore a particular region that is experiencing significant challenges, including seismic activity, erosion, and pressures on groundwater resources. These complex issues necessitate thoughtful and integrated decisions in the field of geoscience. As learners, you will engage in identifying the various competing objectives that different stakeholders may have, as well as assessing the risks associated with the existing systems. This process will not only enhance your understanding of geoscience but also develop your critical thinking and problem-solving skills, which are essential for addressing real-world challenges."
        },
        {
          "id": "geoscience-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. This tool allows us to evaluate different options based on various criteria, including effectiveness, feasibility, risk, and the impact on stakeholders. By scoring these options, learners will gain insights into making informed decisions in geoscience.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. This tool allows us to evaluate different options based on various criteria, including effectiveness, feasibility, risk, and the impact on stakeholders. By scoring these options, learners will gain insights into making informed decisions in geoscience."
        },
        {
          "id": "geoscience-301-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "In this recap, we will discuss how we can learn from failure patterns. By analyzing these patterns, we can develop safeguards and create response playbooks that outline how to react in similar situations in the future. This proactive approach is essential for improving our strategies and ensuring better outcomes.\nContext recap: In this recap, we will discuss how we can learn from failure patterns. By analyzing these patterns, we can develop safeguards and create response playbooks that outline how to react in similar situations in the future. This proactive approach is essential for improving our strategies and ensuring better outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured method to compare options under competing priorities."
        },
        {
          "id": "geoscience-301-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring signal indicating a predictable risk mode."
        },
        {
          "id": "geoscience-301-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action pathway for safe and timely recovery."
        }
      ]
    },
    {
      "id": "geoscience-301-l05",
      "title": "Geoscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, learners will have the chance to run multiple intervention scenarios while considering uncertainty. By comparing the outcomes of these different scenarios, learners will develop a deeper understanding of how various factors can influence results in geoscience.\nContext recap: In this interactive simulation, learners will have the chance to run multiple intervention scenarios while considering uncertainty. By comparing the outcomes of these different scenarios, learners will develop a deeper understanding of how various factors can influence results in geoscience."
        },
        {
          "id": "geoscience-301-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "In this debrief, we will evaluate each simulation run based on how well we achieved our targets, any side effects that occurred, and whether we complied with governance standards. This reflective process will help learners understand the importance of assessment and accountability in geoscience practices.\nContext recap: In this debrief, we will evaluate each simulation run based on how well we achieved our targets, any side effects that occurred, and whether we complied with governance standards. This reflective process will help learners understand the importance of assessment and accountability in geoscience practices."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-301-l05-act1",
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
      "id": "geoscience-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "geoscience-301-l06-q1",
          "text": "Which practice most improves decision quality in tectonic and surface processes?",
          "skillId": "geoscience-301-skill-core",
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
          "id": "geoscience-301-l06-q2",
          "text": "At level 301, high-quality execution in earth materials analysis should include:",
          "skillId": "geoscience-301-skill-execution",
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
          "id": "geoscience-301-l06-q3",
          "text": "A defensible approach to hazard and risk interpretation requires:",
          "skillId": "geoscience-301-skill-eval",
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
          "id": "geoscience-301-l06-q4",
          "text": "Mature resource and stewardship governance systems connect:",
          "skillId": "geoscience-301-skill-governance",
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
      "id": "geoscience-301-l07",
      "title": "Geoscience Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "geoscience-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "In this section, learners will explore how to map the distribution of benefits and burdens among different stakeholder groups. Understanding the impact of decisions on various stakeholders is crucial for making informed and equitable choices in geoscience governance.\nContext recap: In this section, learners will explore how to map the distribution of benefits and burdens among different stakeholder groups. Understanding the impact of decisions on various stakeholders is crucial for making informed and equitable choices in geoscience governance."
        },
        {
          "id": "geoscience-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this concept, we will discuss the importance of accountability in decision-making processes. This includes ensuring that decisions are traceable, that stakeholders have review rights, and that there are clear obligations for remediation if necessary. These elements are vital for maintaining trust and integrity in geoscience governance.\nContext recap: In this concept, we will discuss the importance of accountability in decision-making processes. This includes ensuring that decisions are traceable, that stakeholders have review rights, and that there are clear obligations for remediation if necessary. These elements are vital for maintaining trust and integrity in geoscience governance."
        },
        {
          "id": "geoscience-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "At the end of our project, we will use a final checklist to ensure that we have carefully considered our performance, managed any risks, and thought about the ethical impact of our actions. This checklist will help us make responsible decisions that benefit everyone involved.\nContext recap: At the end of our project, we will use a final checklist to ensure that we have carefully considered our performance, managed any risks, and thought about the ethical impact of our actions. This checklist will help us make responsible decisions that benefit everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-301-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across people, systems, and time."
        },
        {
          "id": "geoscience-301-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, ownership, and rationale."
        },
        {
          "id": "geoscience-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery mode that combines effectiveness with accountability and fairness."
        }
      ]
    },
    {
      "id": "geoscience-301-l08",
      "title": "Geoscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will create a Capstone Charter. This document will outline your project's objectives, the constraints you might face, the metrics you will use to measure success, and the governance triggers that will guide your decisions throughout the project.\nContext recap: In this activity, you will create a Capstone Charter. This document will outline your project's objectives, the constraints you might face, the metrics you will use to measure success, and the governance triggers that will guide your decisions throughout the project."
        },
        {
          "id": "geoscience-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As part of your preparation, you will get ready to defend your decisions. This means you will practice explaining your choices and how they align with technical standards and governance rules. Being able to articulate your reasoning is important for gaining support and understanding from others.\nContext recap: As part of your preparation, you will get ready to defend your decisions. This means you will practice explaining your choices and how they align with technical standards and governance rules. Being able to articulate your reasoning is important for gaining support and understanding from others."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-301-l08-act1",
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
