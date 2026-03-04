import type { LearningModule } from "@/lib/modules/types";

export const Geoscience201Module: LearningModule = {
  "id": "geoscience-201",
  "title": "Geoscience Applied Practice",
  "description": "Level 201 curriculum in Geoscience, centered on tectonic and surface processes, earth materials analysis, hazard and risk interpretation, and resource and stewardship governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geology",
    "earth-systems"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "geoscience-201-l01",
      "title": "Geoscience Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will work together to build a common vocabulary that everyone can use when discussing Geoscience. This shared language is essential for clear communication and understanding. We will also outline the key areas we will explore throughout our studies. These areas include tectonic movements, which are the shifts and changes in the Earth's crust, surface processes that shape our landscapes, and the examination of various earth materials, such as rocks and minerals. By defining these topics, we can better understand the scope of our discussions and the exciting concepts we will learn about in Geoscience."
        },
        {
          "id": "geoscience-201-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "In this part of the lesson, students will learn how to identify and map out the relationships between different causes and effects. They will explore the assumptions we make and the limitations we face when designing interventions. This understanding is crucial for developing effective solutions in Geoscience.\nContext recap: In this part of the lesson, students will learn how to identify and map out the relationships between different causes and effects. They will explore the assumptions we make and the limitations we face when designing interventions. This understanding is crucial for developing effective solutions in Geoscience."
        },
        {
          "id": "geoscience-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In Geoscience, it is important to support our claims with solid evidence. This means that we will use measurable indicators to back up what we say. Additionally, we will establish confidence ranges and set up review checkpoints to ensure that our findings are reliable and can be trusted.\nContext recap: In Geoscience, it is important to support our claims with solid evidence. This means that we will use measurable indicators to back up what we say. Additionally, we will establish confidence ranges and set up review checkpoints to ensure that our findings are reliable and can be trusted."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-201-l01-f1",
          "front": "tectonic and surface processes",
          "back": "A core decision lens in Geoscience requiring explicit assumption control."
        },
        {
          "id": "geoscience-201-l01-f2",
          "front": "earth materials analysis",
          "back": "Execution systems that determine reliability and repeatability."
        },
        {
          "id": "geoscience-201-l01-f3",
          "front": "hazard and risk interpretation",
          "back": "Evaluation process for distinguishing real gains from superficial wins."
        }
      ]
    },
    {
      "id": "geoscience-201-l02",
      "title": "Geoscience Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive activity, students will work together to create a workflow. This involves mapping out who is responsible for different tasks, setting up control gates to monitor progress, and defining measurable outcomes to assess success. This hands-on experience will help students understand how workflows function in real-world scenarios.\nContext recap: In this interactive activity, students will work together to create a workflow. This involves mapping out who is responsible for different tasks, setting up control gates to monitor progress, and defining measurable outcomes to assess success. This hands-on experience will help students understand how workflows function in real-world scenarios."
        },
        {
          "id": "geoscience-201-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "In this recap, we will discuss how systems can be tested under stress to identify potential failure points. Students will learn about rollback decision thresholds, which are important for knowing when to revert to a previous state if things do not go as planned. This knowledge is essential for ensuring the reliability of geoscience systems.\nContext recap: In this recap, we will discuss how systems can be tested under stress to identify potential failure points. Students will learn about rollback decision thresholds, which are important for knowing when to revert to a previous state if things do not go as planned. This knowledge is essential for ensuring the reliability of geoscience systems."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-201-l02-act1",
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
      "id": "geoscience-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "geoscience-201-l03-q1",
          "text": "Which practice most improves decision quality in tectonic and surface processes?",
          "skillId": "geoscience-201-skill-core",
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
          "id": "geoscience-201-l03-q2",
          "text": "At level 201, high-quality execution in earth materials analysis should include:",
          "skillId": "geoscience-201-skill-execution",
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
          "id": "geoscience-201-l03-q3",
          "text": "A defensible approach to hazard and risk interpretation requires:",
          "skillId": "geoscience-201-skill-eval",
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
          "id": "geoscience-201-l03-q4",
          "text": "Mature resource and stewardship governance systems connect:",
          "skillId": "geoscience-201-skill-governance",
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
      "id": "geoscience-201-l04",
      "title": "Geoscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this engaging case study, we will explore a particular region that is experiencing significant challenges, including the threat of earthquakes, the impact of erosion, and concerns related to groundwater availability. Students will have the opportunity to analyze these issues and identify the competing objectives that different stakeholders might have, as well as the risks associated with making integrated geoscience decisions. This exercise is designed to deepen their understanding of the complexities involved in real-world geoscience problems and the importance of considering multiple perspectives when addressing environmental challenges.\nContext recap: In this engaging case study, we will explore a particular region that is experiencing significant challenges, including the threat of earthquakes, the impact of erosion, and concerns related to groundwater availability. Students will have the opportunity to analyze these issues and identify the competing objectives that different stakeholders might have, as well as the risks associated with making integrated geoscience decisions. This exercise is designed to deepen their understanding of the complexities involved in real-world geoscience problems and the importance of considering multiple perspectives when addressing environmental challenges."
        },
        {
          "id": "geoscience-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. Students will learn how to evaluate different options based on criteria such as effectiveness, feasibility, risk, and the impact on stakeholders. This process will help them make informed decisions in geoscience projects.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. Students will learn how to evaluate different options based on criteria such as effectiveness, feasibility, risk, and the impact on stakeholders. This process will help them make informed decisions in geoscience projects."
        },
        {
          "id": "geoscience-201-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "In this recap, we will discuss how to turn patterns of failure into proactive measures. Students will learn how to create safeguards and response playbooks that can be used in future situations. This knowledge is vital for improving resilience in geoscience practices.\nContext recap: In this recap, we will discuss how to turn patterns of failure into proactive measures. Students will learn how to create safeguards and response playbooks that can be used in future situations. This knowledge is vital for improving resilience in geoscience practices."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-201-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured method to compare options under competing priorities."
        },
        {
          "id": "geoscience-201-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring signal indicating a predictable risk mode."
        },
        {
          "id": "geoscience-201-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action pathway for safe and timely recovery."
        }
      ]
    },
    {
      "id": "geoscience-201-l05",
      "title": "Geoscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, students will have the opportunity to run various intervention scenarios while dealing with uncertainty. They will compare the outcomes of each scenario to understand the potential impacts of their decisions. This practical experience will enhance their problem-solving skills in geoscience.\nContext recap: In this interactive simulation, students will have the opportunity to run various intervention scenarios while dealing with uncertainty. They will compare the outcomes of each scenario to understand the potential impacts of their decisions. This practical experience will enhance their problem-solving skills in geoscience."
        },
        {
          "id": "geoscience-201-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "After running the simulations, we will conduct a debriefing session. During this time, students will evaluate their performance based on target attainment, any side effects that occurred, and whether they adhered to governance standards. This reflection will help them learn from their experiences.\nContext recap: After running the simulations, we will conduct a debriefing session. During this time, students will evaluate their performance based on target attainment, any side effects that occurred, and whether they adhered to governance standards. This reflection will help them learn from their experiences."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-201-l05-act1",
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
      "id": "geoscience-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "geoscience-201-l06-q1",
          "text": "Which practice most improves decision quality in tectonic and surface processes?",
          "skillId": "geoscience-201-skill-core",
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
          "id": "geoscience-201-l06-q2",
          "text": "At level 201, high-quality execution in earth materials analysis should include:",
          "skillId": "geoscience-201-skill-execution",
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
          "id": "geoscience-201-l06-q3",
          "text": "A defensible approach to hazard and risk interpretation requires:",
          "skillId": "geoscience-201-skill-eval",
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
          "id": "geoscience-201-l06-q4",
          "text": "Mature resource and stewardship governance systems connect:",
          "skillId": "geoscience-201-skill-governance",
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
      "id": "geoscience-201-l07",
      "title": "Geoscience Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "geoscience-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "In this lesson, students will learn how to map out the distribution of benefits and burdens among different stakeholder groups. This understanding is crucial for ensuring that all voices are heard and considered in geoscience projects, promoting fairness and equity.\nContext recap: In this lesson, students will learn how to map out the distribution of benefits and burdens among different stakeholder groups. This understanding is crucial for ensuring that all voices are heard and considered in geoscience projects, promoting fairness and equity."
        },
        {
          "id": "geoscience-201-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will explore the concept of accountability architecture. Students will learn about the importance of decision traceability, review rights, and obligations for remediation. This knowledge will help them understand how to create transparent and responsible governance structures in geoscience.\nContext recap: In this section, we will explore the concept of accountability architecture. Students will learn about the importance of decision traceability, review rights, and obligations for remediation. This knowledge will help them understand how to create transparent and responsible governance structures in geoscience."
        },
        {
          "id": "geoscience-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "At the end of our project, it's important to use a final checklist. This checklist helps us ensure that we are performing well, managing risks effectively, and considering the ethical impact of our actions. By balancing these elements, we can make responsible decisions that benefit everyone involved.\nContext recap: At the end of our project, it's important to use a final checklist. This checklist helps us ensure that we are performing well, managing risks effectively, and considering the ethical impact of our actions. By balancing these elements, we can make responsible decisions that benefit everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-201-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across people, systems, and time."
        },
        {
          "id": "geoscience-201-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, ownership, and rationale."
        },
        {
          "id": "geoscience-201-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery mode that combines effectiveness with accountability and fairness."
        }
      ]
    },
    {
      "id": "geoscience-201-l08",
      "title": "Geoscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, learners will work on creating a detailed capstone charter. This includes writing clear objectives, identifying any constraints we might face, establishing metrics for success, and outlining governance triggers that will guide our project. This process helps ensure that everyone understands the goals and rules of our project.\nContext recap: In this activity, learners will work on creating a detailed capstone charter. This includes writing clear objectives, identifying any constraints we might face, establishing metrics for success, and outlining governance triggers that will guide our project. This process helps ensure that everyone understands the goals and rules of our project."
        },
        {
          "id": "geoscience-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we move forward, learners will get ready to defend their decisions regarding the project. This means preparing to explain and justify their choices in front of others, addressing any technical questions or governance critiques that may arise. This practice helps build confidence and critical thinking skills.\nContext recap: As we move forward, learners will get ready to defend their decisions regarding the project. This means preparing to explain and justify their choices in front of others, addressing any technical questions or governance critiques that may arise. This practice helps build confidence and critical thinking skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-201-l08-act1",
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
