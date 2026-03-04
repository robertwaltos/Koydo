import type { LearningModule } from "@/lib/modules/types";

export const SpaceMissionsEngineering101Module: LearningModule = {
  "id": "space-missions-engineering-101",
  "title": "Space Missions Engineering Foundations",
  "description": "Level 101 curriculum in Space Missions Engineering, focused on mission architecture, systems integration, risk and reliability modeling, and flight operations governance through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Aerospace Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "space",
    "engineering"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
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
      "id": "space-missions-engineering-101-l01",
      "title": "Space Missions Engineering Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "In this lesson, we will dive into the fascinating world of Space Missions Engineering! First, we will define what this field is all about and what it includes. Then, we will introduce some important vocabulary that you will often hear when discussing space missions. Finally, we will explain how mission architecture, which is the overall design of a space mission, and systems integration, which is how different parts of the mission work together, interact in real-life scenarios. Understanding these concepts is crucial for anyone who dreams of being involved in the design and execution of space missions, as they form the foundation of how we explore the universe.\nContext recap: In this lesson, we will dive into the fascinating world of Space Missions Engineering! First, we will define what this field is all about and what it includes. Then, we will introduce some important vocabulary that you will often hear when discussing space missions. Finally, we will explain how mission architecture, which is the overall design of a space mission, and systems integration, which is how different parts of the mission work together, interact in real-life scenarios."
        },
        {
          "id": "space-missions-engineering-101-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "In this part of the lesson, students will learn how to identify and map out causal pathways. This means understanding how different factors influence each other and testing any hidden assumptions we might have before deciding on the best actions to take. This skill is crucial for making informed decisions in engineering and problem-solving.\nContext recap: In this part of the lesson, students will learn how to identify and map out causal pathways. This means understanding how different factors influence each other and testing any hidden assumptions we might have before deciding on the best actions to take. This skill is crucial for making informed decisions in engineering and problem-solving."
        },
        {
          "id": "space-missions-engineering-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "In this recap, we will emphasize the importance of connecting our claims to observable indicators. This means that when we make a statement or claim, we should be able to back it up with evidence that can be seen or measured. Additionally, we will discuss the significance of noting any uncertainties and having checkpoints for review to ensure our work is accurate and reliable.\nContext recap: In this recap, we will emphasize the importance of connecting our claims to observable indicators. This means that when we make a statement or claim, we should be able to back it up with evidence that can be seen or measured. Additionally, we will discuss the significance of noting any uncertainties and having checkpoints for review to ensure our work is accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-101-l01-f1",
          "front": "mission architecture",
          "back": "A core analytical lens in Space Missions Engineering requiring careful assumption control."
        },
        {
          "id": "space-missions-engineering-101-l01-f2",
          "front": "systems integration",
          "back": "Operational design practices that determine system reliability and execution quality."
        },
        {
          "id": "space-missions-engineering-101-l01-f3",
          "front": "risk and reliability modeling",
          "back": "The evaluation framework used to validate outcomes and detect hidden costs."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l02",
      "title": "Space Missions Engineering Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive activity, learners will have the opportunity to design their own workflow. This will involve using foundational vocabulary, understanding how different mechanisms work, and interpreting basic scenarios. After creating their workflows, students will put them to the test to see how reliable they are when faced with uncertainty. This hands-on experience will help solidify their understanding of the concepts.\nContext recap: In this interactive activity, learners will have the opportunity to design their own workflow. This will involve using foundational vocabulary, understanding how different mechanisms work, and interpreting basic scenarios. After creating their workflows, students will put them to the test to see how reliable they are when faced with uncertainty. This hands-on experience will help solidify their understanding of the concepts.\nContext recap: In this interactive activity, learners will have the opportunity to design their own workflow. This will involve using foundational vocabulary, understanding how different mechanisms work, and interpreting basic scenarios. After creating their workflows, students will put them to the test to see how reliable they are when faced with uncertainty. This hands-on experience will help solidify their understanding of the concepts.\nWhy this matters: Workflow Construction and Test helps learners in Aerospace Engineering connect ideas from Space Missions Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "space-missions-engineering-101-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "In this recap, we will discuss the importance of readiness in engineering projects. This includes mapping out who is responsible for different tasks, setting criteria for control gates, understanding rollback conditions, and establishing verification signals. These elements are crucial for ensuring that a project is on track and ready for the next steps.\nContext recap: In this recap, we will discuss the importance of readiness in engineering projects. This includes mapping out who is responsible for different tasks, setting criteria for control gates, understanding rollback conditions, and establishing verification signals. These elements are crucial for ensuring that a project is on track and ready for the next steps."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-101-l02-act1",
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
          "id": "space-missions-engineering-101-l02-act2",
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
      "id": "space-missions-engineering-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-101-l03-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-101-skill-core",
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
          "id": "space-missions-engineering-101-l03-q2",
          "text": "The 101 level should emphasize:",
          "skillId": "space-missions-engineering-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, mechanism comprehension, and basic scenario interpretation"
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
          "explanation": "This level is explicitly structured around foundational vocabulary, mechanism comprehension, and basic scenario interpretation."
        },
        {
          "id": "space-missions-engineering-101-l03-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-101-skill-reliability",
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
          "id": "space-missions-engineering-101-l03-q4",
          "text": "For risk and reliability modeling, which practice is most defensible?",
          "skillId": "space-missions-engineering-101-skill-eval",
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
          "id": "space-missions-engineering-101-l03-q5",
          "text": "A mature flight operations governance model should include:",
          "skillId": "space-missions-engineering-101-skill-governance",
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
      "id": "space-missions-engineering-101-l04",
      "title": "Space Missions Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this exciting case analysis, we will explore a multi-phase space mission that encounters several important challenges. These challenges include limitations on the payload, which is the equipment and materials we can send into space, the timing of launch windows, which are specific periods when it is safe to launch, and the risks that can arise during the flight itself. Students will engage in identifying high-impact risks, which are significant threats to the mission's success, and will learn to navigate the competing constraints that engineers must consider. This analysis will encourage critical thinking and problem-solving skills as students tackle real-world engineering scenarios in the field of aerospace.\nContext recap: In this exciting case analysis, we will explore a multi-phase space mission that encounters several important challenges. These challenges include limitations on the payload, which is the equipment and materials we can send into space, the timing of launch windows, which are specific periods when it is safe to launch, and the risks that can arise during the flight itself. Students will engage in identifying high-impact risks, which are significant threats to the mission's success, and will learn to navigate the competing constraints that engineers must consider. This analysis will encourage critical thinking and problem-solving skills as students tackle real-world engineering scenarios in the field of aerospace.\nContext recap: In this exciting case analysis, we will explore a multi-phase space mission that encounters several important challenges. These challenges include limitations on the payload, which is the equipment and materials we can send into space, the timing of launch windows, which are specific periods when it is safe to launch, and the risks that can arise during the flight itself. Students will engage in identifying high-impact risks, which are significant threats to the mission's success, and will learn to navigate the competing constraints that engineers must consider. This analysis will encourage critical thinking and problem-solving skills as students tackle real-world engineering scenarios in the field of aerospace.\nWhy this matters: Case Context and Decision Stakes helps learners in Aerospace Engineering connect ideas from Space Missions Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "space-missions-engineering-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. This tool helps us evaluate different intervention options by scoring them based on their effectiveness, reliability, fairness, and how feasible they are to implement. Understanding how to use a tradeoff matrix is essential for making informed decisions in engineering.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. This tool helps us evaluate different intervention options by scoring them based on their effectiveness, reliability, fairness, and how feasible they are to implement. Understanding how to use a tradeoff matrix is essential for making informed decisions in engineering."
        },
        {
          "id": "space-missions-engineering-101-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "In this recap, we will discuss how to learn from failures in engineering projects. We will explore how to transform patterns of failure into safeguards, create response playbooks for future incidents, and implement monitoring updates to improve our processes. This approach helps ensure that we continuously learn and adapt in our engineering practices.\nContext recap: In this recap, we will discuss how to learn from failures in engineering projects. We will explore how to transform patterns of failure into safeguards, create response playbooks for future incidents, and implement monitoring updates to improve our processes. This approach helps ensure that we continuously learn and adapt in our engineering practices."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of alternatives under competing priorities."
        },
        {
          "id": "space-missions-engineering-101-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring risk signature used to design targeted mitigations."
        },
        {
          "id": "space-missions-engineering-101-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action sequence for safe and timely recovery."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l05",
      "title": "Space Missions Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, learners will set up their own simulation scenarios. This includes configuring different intervention options, defining uncertainty parameters, and establishing measurable success thresholds. This activity will allow students to apply their knowledge in a practical way and see how different factors can influence outcomes.\nContext recap: In this interactive practice, learners will set up their own simulation scenarios. This includes configuring different intervention options, defining uncertainty parameters, and establishing measurable success thresholds. This activity will allow students to apply their knowledge in a practical way and see how different factors can influence outcomes."
        },
        {
          "id": "space-missions-engineering-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "In this recap, we will conduct a review after running our simulations. This will involve evaluating the outcomes, identifying any side effects, and checking how well our results align with established governance constraints. This process is important for understanding the implications of our decisions and ensuring responsible engineering practices.\nContext recap: In this recap, we will conduct a review after running our simulations. This will involve evaluating the outcomes, identifying any side effects, and checking how well our results align with established governance constraints. This process is important for understanding the implications of our decisions and ensuring responsible engineering practices."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-101-l05-act1",
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
          "id": "space-missions-engineering-101-l05-act2",
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
      "id": "space-missions-engineering-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-101-l06-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-101-skill-core",
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
          "id": "space-missions-engineering-101-l06-q2",
          "text": "The 101 level should emphasize:",
          "skillId": "space-missions-engineering-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, mechanism comprehension, and basic scenario interpretation"
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
          "explanation": "This level is explicitly structured around foundational vocabulary, mechanism comprehension, and basic scenario interpretation."
        },
        {
          "id": "space-missions-engineering-101-l06-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-101-skill-reliability",
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
          "id": "space-missions-engineering-101-l06-q4",
          "text": "For risk and reliability modeling, which practice is most defensible?",
          "skillId": "space-missions-engineering-101-skill-eval",
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
          "id": "space-missions-engineering-101-l06-q5",
          "text": "A mature flight operations governance model should include:",
          "skillId": "space-missions-engineering-101-skill-governance",
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
      "id": "space-missions-engineering-101-l07",
      "title": "Space Missions Engineering Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, learners will examine how the benefits and burdens of engineering projects are distributed among different stakeholders and over time. This understanding is crucial for ensuring that all voices are heard and considered in the decision-making process, promoting fairness and equity in engineering.\nContext recap: In this lesson, learners will examine how the benefits and burdens of engineering projects are distributed among different stakeholders and over time. This understanding is crucial for ensuring that all voices are heard and considered in the decision-making process, promoting fairness and equity in engineering."
        },
        {
          "id": "space-missions-engineering-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the concept of accountability in engineering. This includes understanding how to trace decisions back to their origins, the rights of individuals to review decisions, and the obligations to correct any issues that arise. Establishing a strong accountability framework is essential for ethical engineering practices.\nContext recap: In this section, we will discuss the concept of accountability in engineering. This includes understanding how to trace decisions back to their origins, the rights of individuals to review decisions, and the obligations to correct any issues that arise. Establishing a strong accountability framework is essential for ethical engineering practices."
        },
        {
          "id": "space-missions-engineering-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "At the end of our lesson, we will use a comprehensive checklist that connects the technical aspects of our space missions with important elements like policy, ethics, and the trust of those involved. This checklist will help ensure that we are not only achieving our technical goals but also acting responsibly and ethically in our work.\nContext recap: At the end of our lesson, we will use a comprehensive checklist that connects the technical aspects of our space missions with important elements like policy, ethics, and the trust of those involved. This checklist will help ensure that we are not only achieving our technical goals but also acting responsibly and ethically in our work."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-101-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes differ across stakeholder groups and timescales."
        },
        {
          "id": "space-missions-engineering-101-l07-f2",
          "front": "Decision traceability",
          "back": "The evidence chain showing how and why a decision was made."
        },
        {
          "id": "space-missions-engineering-101-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery behavior that balances effectiveness with ethical and policy safeguards."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l08",
      "title": "Space Missions Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this interactive activity, you will have the opportunity to create a detailed capstone charter. This charter will include your main objectives for the project, any constraints you might face, the metrics you will use to measure success, and the governance gates that will guide your decision-making process. This is an important step in planning your capstone project effectively.\nContext recap: In this interactive activity, you will have the opportunity to create a detailed capstone charter. This charter will include your main objectives for the project, any constraints you might face, the metrics you will use to measure success, and the governance gates that will guide your decision-making process. This is an important step in planning your capstone project effectively."
        },
        {
          "id": "space-missions-engineering-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As part of our recap, you will prepare well-researched defenses for any critiques that may arise regarding your technical decisions, policy choices, and the perspectives of stakeholders involved in your project. This preparation will help you articulate your ideas clearly and confidently, ensuring that you can address any concerns effectively.\nContext recap: As part of our recap, you will prepare well-researched defenses for any critiques that may arise regarding your technical decisions, policy choices, and the perspectives of stakeholders involved in your project. This preparation will help you articulate your ideas clearly and confidently, ensuring that you can address any concerns effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-101-l08-act1",
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
          "id": "space-missions-engineering-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    }
  ]
};
