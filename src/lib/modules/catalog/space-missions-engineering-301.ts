import type { LearningModule } from "@/lib/modules/types";

export const SpaceMissionsEngineering301Module: LearningModule = {
  "id": "space-missions-engineering-301",
  "title": "Space Missions Engineering Systems and Governance",
  "description": "Level 301 curriculum in Space Missions Engineering, focused on mission architecture, systems integration, risk and reliability modeling, and flight operations governance through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Aerospace Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "space",
    "engineering"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply mission architecture using explicit assumptions and constraints",
    "Design and execute workflows for systems integration with reliable control points",
    "Evaluate risk and reliability modeling decisions using baseline and side-effect analysis",
    "Strengthen flight operations governance with accountable governance mechanisms",
    "Communicate uncertainty and tradeoffs across stakeholder groups",
    "Build defensible recommendations resilient to critical review"
  ],
  "lessons": [
    {
      "id": "space-missions-engineering-301-l01",
      "title": "Space Missions Engineering Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "In this lesson, we will dive into the fascinating world of Space Missions Engineering. This field is all about planning and executing missions that explore outer space. We will start by defining what Space Missions Engineering includes, which is crucial for anyone who wants to work in this area. Next, we will introduce some key vocabulary that professionals use, helping you become familiar with the language of space exploration. Finally, we will discuss how mission architecture, which is the overall design of a space mission, and systems integration, which involves making sure all the different parts of a mission work together smoothly, interact in real-world scenarios. Grasping these concepts is vital for anyone interested in the exciting challenges of designing and carrying out space missions.\nContext recap: In this lesson, we will dive into the fascinating world of Space Missions Engineering. This field is all about planning and executing missions that explore outer space. We will start by defining what Space Missions Engineering includes, which is crucial for anyone who wants to work in this area. Next, we will introduce some key vocabulary that professionals use, helping you become familiar with the language of space exploration.\nWhy this matters: Scope and Shared Vocabulary helps learners in Aerospace Engineering connect ideas from Space Missions Engineering Systems and Governance to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "space-missions-engineering-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "In this section, learners will engage in mapping out causal pathways, which means identifying how different factors influence one another. They will also learn to test hidden assumptions that may affect their decisions. This process is crucial before choosing any interventions, as it helps ensure that the selected actions will lead to the desired outcomes.\nContext recap: In this section, learners will engage in mapping out causal pathways, which means identifying how different factors influence one another. They will also learn to test hidden assumptions that may affect their decisions. This process is crucial before choosing any interventions, as it helps ensure that the selected actions will lead to the desired outcomes."
        },
        {
          "id": "space-missions-engineering-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "In this recap, we emphasize the importance of grounding claims in observable indicators. This means that any statements made must be supported by evidence that can be seen or measured. Additionally, we will discuss the significance of noting uncertainties and establishing review checkpoints to ensure that the information remains accurate and reliable throughout the mission.\nContext recap: In this recap, we emphasize the importance of grounding claims in observable indicators. This means that any statements made must be supported by evidence that can be seen or measured. Additionally, we will discuss the significance of noting uncertainties and establishing review checkpoints to ensure that the information remains accurate and reliable throughout the mission."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-301-l01-f1",
          "front": "mission architecture",
          "back": "A core analytical lens in Space Missions Engineering requiring careful assumption control."
        },
        {
          "id": "space-missions-engineering-301-l01-f2",
          "front": "systems integration",
          "back": "Operational design practices that determine system reliability and execution quality."
        },
        {
          "id": "space-missions-engineering-301-l01-f3",
          "front": "risk and reliability modeling",
          "back": "The evaluation framework used to validate outcomes and detect hidden costs."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l02",
      "title": "Space Missions Engineering Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive lab, learners will have the opportunity to design a workflow that focuses on analyzing system trade-offs. They will integrate metrics governance and ensure that different teams work together effectively. After creating their workflows, learners will put them to the test by stress-testing their designs to see how reliable they are under uncertain conditions.\nContext recap: In this interactive lab, learners will have the opportunity to design a workflow that focuses on analyzing system trade-offs. They will integrate metrics governance and ensure that different teams work together effectively. After creating their workflows, learners will put them to the test by stress-testing their designs to see how reliable they are under uncertain conditions."
        },
        {
          "id": "space-missions-engineering-301-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "In this recap, we will discuss the concept of readiness in project management. This involves mapping out who is responsible for what, establishing criteria for decision-making gates, understanding rollback conditions, and identifying verification signals. These elements are essential to ensure that the project is on track and ready for the next steps.\nContext recap: In this recap, we will discuss the concept of readiness in project management. This involves mapping out who is responsible for what, establishing criteria for decision-making gates, understanding rollback conditions, and identifying verification signals. These elements are essential to ensure that the project is on track and ready for the next steps."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-301-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match controls to the strongest expected reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Reduces preventable failures"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains blast radius quickly"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports impact attribution"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "space-missions-engineering-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraint types into technical, policy, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Throughput budget",
              "bucket": "Technical"
            },
            {
              "text": "Regulatory retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Public trust erosion risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Audit evidence requirement",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-301-l03-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test failure modes, and monitor indicators"
            },
            {
              "id": "c",
              "text": "Treat all contexts as identical"
            },
            {
              "id": "d",
              "text": "Avoid uncertainty analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require explicit constraints, failure tests, and measured signals."
        },
        {
          "id": "space-missions-engineering-301-l03-q2",
          "text": "The 301 level should emphasize:",
          "skillId": "space-missions-engineering-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoff analysis, metrics-governance integration, and cross-functional coordination"
            },
            {
              "id": "b",
              "text": "Execution speed without review"
            },
            {
              "id": "c",
              "text": "No baselines or controls"
            },
            {
              "id": "d",
              "text": "Single perspective decision-making"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is explicitly structured around system tradeoff analysis, metrics-governance integration, and cross-functional coordination."
        },
        {
          "id": "space-missions-engineering-301-l03-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unowned workflows and unclear escalation"
            },
            {
              "id": "b",
              "text": "Control checkpoints, ownership mapping, and response thresholds"
            },
            {
              "id": "c",
              "text": "Untracked changes"
            },
            {
              "id": "d",
              "text": "No incident review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on clear controls, owners, and threshold-driven responses."
        },
        {
          "id": "space-missions-engineering-301-l03-q4",
          "text": "For risk and reliability modeling, which practice is most defensible?",
          "skillId": "space-missions-engineering-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins only"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include side-effect checks"
            },
            {
              "id": "c",
              "text": "Ignore difficult scenarios"
            },
            {
              "id": "d",
              "text": "Adjust criteria after results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline and side-effect analysis prevents biased or incomplete conclusions."
        },
        {
          "id": "space-missions-engineering-301-l03-q5",
          "text": "A mature flight operations governance model should include:",
          "skillId": "space-missions-engineering-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy disconnected from measurement"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and corrective pathways"
            },
            {
              "id": "c",
              "text": "No transparency obligations"
            },
            {
              "id": "d",
              "text": "No remediation expectations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance maturity connects intention, measurement, and corrective response."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l04",
      "title": "Space Missions Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this engaging case analysis, we will explore a multi-phase space mission that encounters several significant challenges. These challenges include limitations on the payload, which refers to the equipment and materials that can be carried, as well as specific launch windows that dictate when the mission can take off. Additionally, we will examine potential risks that may arise during the flight itself. Learners will have the important task of identifying high-impact risks and competing constraints that could influence the mission's success. This exercise is designed to deepen their understanding of the intricate complexities involved in planning and executing space missions, highlighting the importance of careful decision-making in aerospace engineering.\nContext recap: In this engaging case analysis, we will explore a multi-phase space mission that encounters several significant challenges. These challenges include limitations on the payload, which refers to the equipment and materials that can be carried, as well as specific launch windows that dictate when the mission can take off. Additionally, we will examine potential risks that may arise during the flight itself. Learners will have the important task of identifying high-impact risks and competing constraints that could influence the mission's success."
        },
        {
          "id": "space-missions-engineering-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. Here, learners will evaluate different intervention options based on several criteria, including their effectiveness, reliability, fairness, and how feasible they are to implement. This scoring system will help learners make informed decisions when faced with multiple choices.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. Here, learners will evaluate different intervention options based on several criteria, including their effectiveness, reliability, fairness, and how feasible they are to implement. This scoring system will help learners make informed decisions when faced with multiple choices."
        },
        {
          "id": "space-missions-engineering-301-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "In this recap, we will discuss how to learn from failures in a constructive way. The lesson will focus on transforming patterns of failure into proactive safeguards, creating response playbooks, and updating monitoring systems. This approach ensures that future missions can benefit from past experiences and improve overall success rates.\nContext recap: In this recap, we will discuss how to learn from failures in a constructive way. The lesson will focus on transforming patterns of failure into proactive safeguards, creating response playbooks, and updating monitoring systems. This approach ensures that future missions can benefit from past experiences and improve overall success rates."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of alternatives under competing priorities."
        },
        {
          "id": "space-missions-engineering-301-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring risk signature used to design targeted mitigations."
        },
        {
          "id": "space-missions-engineering-301-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action sequence for safe and timely recovery."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l05",
      "title": "Space Missions Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice session, learners will configure various intervention scenarios. They will set parameters for uncertainty and establish measurable thresholds for success. This hands-on experience will allow them to understand how to prepare for different outcomes in space missions.\nContext recap: In this interactive practice session, learners will configure various intervention scenarios. They will set parameters for uncertainty and establish measurable thresholds for success. This hands-on experience will allow them to understand how to prepare for different outcomes in space missions.\nContext recap: In this interactive practice session, learners will configure various intervention scenarios. They will set parameters for uncertainty and establish measurable thresholds for success. This hands-on experience will allow them to understand how to prepare for different outcomes in space missions. Context recap: In this interactive practice session, learners will configure various intervention scenarios.\nWhy this matters: Simulation Setup helps learners in Aerospace Engineering connect ideas from Space Missions Engineering Systems and Governance to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "space-missions-engineering-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "In this recap, we will conduct a post-run review to evaluate the outcomes of the simulations. Learners will analyze any side effects that occurred and assess how well the results align with governance constraints. This reflective process is vital for understanding the implications of their decisions.\nContext recap: In this recap, we will conduct a post-run review to evaluate the outcomes of the simulations. Learners will analyze any side effects that occurred and assess how well the results align with governance constraints. This reflective process is vital for understanding the implications of their decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies and justify which best advances mission architecture and flight operations governance.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record near-term and long-term tradeoffs for each option.",
            "Select confirmation metrics and escalation triggers."
          ]
        },
        {
          "id": "space-missions-engineering-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match risk conditions to the strongest mitigation responses.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Define role map and escalation authority"
            },
            {
              "left": "Weak signal quality",
              "right": "Strengthen intake validation and monitoring"
            },
            {
              "left": "Policy drift",
              "right": "Re-anchor controls to explicit standards"
            },
            {
              "left": "Stakeholder opposition",
              "right": "Increase transparency and feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-301-l06-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test failure modes, and monitor indicators"
            },
            {
              "id": "c",
              "text": "Treat all contexts as identical"
            },
            {
              "id": "d",
              "text": "Avoid uncertainty analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require explicit constraints, failure tests, and measured signals."
        },
        {
          "id": "space-missions-engineering-301-l06-q2",
          "text": "The 301 level should emphasize:",
          "skillId": "space-missions-engineering-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoff analysis, metrics-governance integration, and cross-functional coordination"
            },
            {
              "id": "b",
              "text": "Execution speed without review"
            },
            {
              "id": "c",
              "text": "No baselines or controls"
            },
            {
              "id": "d",
              "text": "Single perspective decision-making"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is explicitly structured around system tradeoff analysis, metrics-governance integration, and cross-functional coordination."
        },
        {
          "id": "space-missions-engineering-301-l06-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unowned workflows and unclear escalation"
            },
            {
              "id": "b",
              "text": "Control checkpoints, ownership mapping, and response thresholds"
            },
            {
              "id": "c",
              "text": "Untracked changes"
            },
            {
              "id": "d",
              "text": "No incident review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on clear controls, owners, and threshold-driven responses."
        },
        {
          "id": "space-missions-engineering-301-l06-q4",
          "text": "For risk and reliability modeling, which practice is most defensible?",
          "skillId": "space-missions-engineering-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins only"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include side-effect checks"
            },
            {
              "id": "c",
              "text": "Ignore difficult scenarios"
            },
            {
              "id": "d",
              "text": "Adjust criteria after results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline and side-effect analysis prevents biased or incomplete conclusions."
        },
        {
          "id": "space-missions-engineering-301-l06-q5",
          "text": "A mature flight operations governance model should include:",
          "skillId": "space-missions-engineering-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy disconnected from measurement"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and corrective pathways"
            },
            {
              "id": "c",
              "text": "No transparency obligations"
            },
            {
              "id": "d",
              "text": "No remediation expectations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance maturity connects intention, measurement, and corrective response."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l07",
      "title": "Space Missions Engineering Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this section, learners will explore how the benefits and burdens of space missions are distributed among different stakeholders. They will examine the impact of these missions over various time horizons, helping them understand the broader implications of their work in aerospace engineering.\nContext recap: In this section, learners will explore how the benefits and burdens of space missions are distributed among different stakeholders. They will examine the impact of these missions over various time horizons, helping them understand the broader implications of their work in aerospace engineering.\nContext recap: In this section, learners will explore how the benefits and burdens of space missions are distributed among different stakeholders. They will examine the impact of these missions over various time horizons, helping them understand the broader implications of their work in aerospace engineering. Context recap: In this section, learners will explore how the benefits and burdens of space missions are distributed among different stakeholders. They will examine the impact of these missions over various time horizons, helping them understand the broader implications of their work in aerospace engineering."
        },
        {
          "id": "space-missions-engineering-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this concept discussion, we will frame accountability in terms of traceability, review rights, and obligations for remediation. This framework is essential for ensuring that all stakeholders are held responsible for their roles and that there are clear paths for addressing any issues that arise during missions.\nContext recap: In this concept discussion, we will frame accountability in terms of traceability, review rights, and obligations for remediation. This framework is essential for ensuring that all stakeholders are held responsible for their roles and that there are clear paths for addressing any issues that arise during missions."
        },
        {
          "id": "space-missions-engineering-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "At the end of our lesson, we will use a comprehensive checklist that connects the technical aspects of our space missions with important elements like policy, ethics, and the trust of those involved. This checklist will help ensure that we are not only achieving our technical goals but also acting responsibly and ethically in our work.\nContext recap: At the end of our lesson, we will use a comprehensive checklist that connects the technical aspects of our space missions with important elements like policy, ethics, and the trust of those involved. This checklist will help ensure that we are not only achieving our technical goals but also acting responsibly and ethically in our work."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-301-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes differ across stakeholder groups and timescales."
        },
        {
          "id": "space-missions-engineering-301-l07-f2",
          "front": "Decision traceability",
          "back": "The evidence chain showing how and why a decision was made."
        },
        {
          "id": "space-missions-engineering-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery behavior that balances effectiveness with ethical and policy safeguards."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l08",
      "title": "Space Missions Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this interactive activity, you will have the opportunity to create a detailed capstone charter. This document will outline your project's main objectives, any constraints you might face, the metrics you will use to measure success, and the governance gates that will guide your decision-making process. This is a crucial step in planning your capstone project effectively.\nContext recap: In this interactive activity, you will have the opportunity to create a detailed capstone charter. This document will outline your project's main objectives, any constraints you might face, the metrics you will use to measure success, and the governance gates that will guide your decision-making process. This is a crucial step in planning your capstone project effectively."
        },
        {
          "id": "space-missions-engineering-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As part of our recap, you will prepare well-researched and evidence-backed defenses for your project. This means you will think critically about potential critiques related to technical aspects, policy considerations, and stakeholder perspectives. Being ready to defend your work is essential in the field of aerospace engineering, as it demonstrates your understanding and commitment to your project.\nContext recap: As part of our recap, you will prepare well-researched and evidence-backed defenses for your project. This means you will think critically about potential critiques related to technical aspects, policy considerations, and stakeholder perspectives. Being ready to defend your work is essential in the field of aerospace engineering, as it demonstrates your understanding and commitment to your project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define objective and boundary conditions.",
            "List at least three measurable success indicators.",
            "Define escalation and corrective action criteria."
          ]
        },
        {
          "id": "space-missions-engineering-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    }
  ]
};
