import type { LearningModule } from "@/lib/modules/types";

export const SpaceMissionsEngineering201Module: LearningModule = {
  "id": "space-missions-engineering-201",
  "title": "Space Missions Engineering Applied Practice",
  "description": "Level 201 curriculum in Space Missions Engineering, focused on mission architecture, systems integration, risk and reliability modeling, and flight operations governance through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Aerospace Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "space",
    "engineering"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "space-missions-engineering-201-l01",
      "title": "Space Missions Engineering Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "In this lesson, we will dive into the fascinating field of Space Missions Engineering. We will define what this area of study includes and introduce some key vocabulary that is important for understanding the subject. Additionally, we will discuss how mission architecture, which is the overall design of a space mission, and systems integration, which involves making sure all parts of the mission work together smoothly, interact in real-life situations. Grasping these concepts is crucial for anyone who is passionate about the design and execution of space missions, as they lay the groundwork for successful exploration beyond our planet.\nContext recap: In this lesson, we will dive into the fascinating field of Space Missions Engineering. We will define what this area of study includes and introduce some key vocabulary that is important for understanding the subject. Additionally, we will discuss how mission architecture, which is the overall design of a space mission, and systems integration, which involves making sure all parts of the mission work together smoothly, interact in real-life situations. Grasping these concepts is crucial for anyone who is passionate about the design and execution of space missions, as they lay the groundwork for successful exploration beyond our planet.\nContext recap: In this lesson, we will dive into the fascinating field of Space Missions Engineering. We will define what this area of study includes and introduce some key vocabulary that is important for understanding the subject. Additionally, we will discuss how mission architecture, which is the overall design of a space mission, and systems integration, which involves making sure all parts of the mission work together smoothly, interact in real-life situations. Grasping these concepts is crucial for anyone who is passionate about the design and execution of space missions, as they lay the groundwork for successful exploration beyond our planet.\nWhy this matters: Scope and Shared Vocabulary helps learners in Aerospace Engineering connect ideas from Space Missions Engineering Applied Practice to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "space-missions-engineering-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "In this part of the lesson, learners will engage in mapping out causal pathways. This means identifying how different factors influence each other and testing any hidden assumptions we might have. Before we choose any interventions or solutions, it’s important to understand these relationships clearly to make informed decisions.\nContext recap: In this part of the lesson, learners will engage in mapping out causal pathways. This means identifying how different factors influence each other and testing any hidden assumptions we might have. Before we choose any interventions or solutions, it’s important to understand these relationships clearly to make informed decisions."
        },
        {
          "id": "space-missions-engineering-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "In this recap, we will emphasize the importance of evidence in our claims. Every claim we make should be supported by observable indicators, which are measurable signs that back up our statements. Additionally, we will note any uncertainties and establish review checkpoints to ensure our findings are accurate and reliable.\nContext recap: In this recap, we will emphasize the importance of evidence in our claims. Every claim we make should be supported by observable indicators, which are measurable signs that back up our statements. Additionally, we will note any uncertainties and establish review checkpoints to ensure our findings are accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-201-l01-f1",
          "front": "mission architecture",
          "back": "A core analytical lens in Space Missions Engineering requiring careful assumption control."
        },
        {
          "id": "space-missions-engineering-201-l01-f2",
          "front": "systems integration",
          "back": "Operational design practices that determine system reliability and execution quality."
        },
        {
          "id": "space-missions-engineering-201-l01-f3",
          "front": "risk and reliability modeling",
          "back": "The evaluation framework used to validate outcomes and detect hidden costs."
        }
      ]
    },
    {
      "id": "space-missions-engineering-201-l02",
      "title": "Space Missions Engineering Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive lab, learners will have the opportunity to design a workflow that highlights the importance of method execution, workflow discipline, and evidence-based reasoning. After creating their workflows, they will put them to the test by stress-testing their reliability under uncertain conditions, which is a crucial skill in engineering.\nContext recap: In this interactive lab, learners will have the opportunity to design a workflow that highlights the importance of method execution, workflow discipline, and evidence-based reasoning. After creating their workflows, they will put them to the test by stress-testing their reliability under uncertain conditions, which is a crucial skill in engineering."
        },
        {
          "id": "space-missions-engineering-201-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "In this recap, we will discuss the concept of readiness in project management. To ensure a project is ready to move forward, it is essential to map out the roles of different owners, establish clear gate criteria, define rollback conditions, and identify verification signals that confirm we are on the right track.\nContext recap: In this recap, we will discuss the concept of readiness in project management. To ensure a project is ready to move forward, it is essential to map out the roles of different owners, establish clear gate criteria, define rollback conditions, and identify verification signals that confirm we are on the right track."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-201-l02-act1",
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
          "id": "space-missions-engineering-201-l02-act2",
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
      "id": "space-missions-engineering-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-201-l03-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-201-skill-core",
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
          "id": "space-missions-engineering-201-l03-q2",
          "text": "The 201 level should emphasize:",
          "skillId": "space-missions-engineering-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, workflow discipline, and evidence-based reasoning"
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
          "explanation": "This level is explicitly structured around method execution, workflow discipline, and evidence-based reasoning."
        },
        {
          "id": "space-missions-engineering-201-l03-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-201-skill-reliability",
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
          "id": "space-missions-engineering-201-l03-q4",
          "text": "For risk and reliability modeling, which practice is most defensible?",
          "skillId": "space-missions-engineering-201-skill-eval",
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
          "id": "space-missions-engineering-201-l03-q5",
          "text": "A mature flight operations governance model should include:",
          "skillId": "space-missions-engineering-201-skill-governance",
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
      "id": "space-missions-engineering-201-l04",
      "title": "Space Missions Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this exciting case analysis, we will explore a multi-phase space mission that encounters several important challenges. These challenges include limitations on the payload, which is the equipment and materials we can send into space, as well as specific launch windows that determine when we can launch the mission. Additionally, we will consider potential in-flight anomalies, which are unexpected issues that may arise during the mission. As part of this learning experience, you will be responsible for mapping out the high-impact risks associated with the mission and understanding the competing constraints that could influence its overall success. This will help you develop critical thinking skills and a deeper understanding of aerospace engineering principles.\nContext recap: In this exciting case analysis, we will explore a multi-phase space mission that encounters several important challenges. These challenges include limitations on the payload, which is the equipment and materials we can send into space, as well as specific launch windows that determine when we can launch the mission. Additionally, we will consider potential in-flight anomalies, which are unexpected issues that may arise during the mission. As part of this learning experience, you will be responsible for mapping out the high-impact risks associated with the mission and understanding the competing constraints that could influence its overall success."
        },
        {
          "id": "space-missions-engineering-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the concept of a tradeoff matrix. This tool helps us evaluate different intervention options by scoring them based on their effectiveness, reliability, equity, and how feasible they are to implement. Understanding these tradeoffs is crucial for making informed decisions in engineering.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix. This tool helps us evaluate different intervention options by scoring them based on their effectiveness, reliability, equity, and how feasible they are to implement. Understanding these tradeoffs is crucial for making informed decisions in engineering."
        },
        {
          "id": "space-missions-engineering-201-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "In this recap, we will learn how to turn patterns of failure into valuable lessons. By analyzing failures, we can create safeguards, develop response playbooks, and implement monitoring updates to improve future missions. This process is essential for continuous improvement in engineering practices.\nContext recap: In this recap, we will learn how to turn patterns of failure into valuable lessons. By analyzing failures, we can create safeguards, develop response playbooks, and implement monitoring updates to improve future missions. This process is essential for continuous improvement in engineering practices.\nContext recap: In this recap, we will learn how to turn patterns of failure into valuable lessons. By analyzing failures, we can create safeguards, develop response playbooks, and implement monitoring updates to improve future missions. This process is essential for continuous improvement in engineering practices. Context recap: In this recap, we will learn how to turn patterns of failure into valuable lessons.\nWhy this matters: Failure Learning and Recovery helps learners in Aerospace Engineering connect ideas from Space Missions Engineering Applied Practice to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-201-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of alternatives under competing priorities."
        },
        {
          "id": "space-missions-engineering-201-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring risk signature used to design targeted mitigations."
        },
        {
          "id": "space-missions-engineering-201-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action sequence for safe and timely recovery."
        }
      ]
    },
    {
      "id": "space-missions-engineering-201-l05",
      "title": "Space Missions Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, learners will configure various intervention scenarios. They will set uncertainty parameters and define measurable success thresholds to assess the effectiveness of their interventions. This hands-on experience will help them understand how to prepare for different outcomes in engineering projects.\nContext recap: In this interactive practice, learners will configure various intervention scenarios. They will set uncertainty parameters and define measurable success thresholds to assess the effectiveness of their interventions. This hands-on experience will help them understand how to prepare for different outcomes in engineering projects."
        },
        {
          "id": "space-missions-engineering-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "In this recap, we will conduct a post-run review to evaluate the outcomes of our simulations. We will look at any side effects that occurred and check how well our results align with governance constraints. This evaluation is important for understanding the implications of our decisions.\nContext recap: In this recap, we will conduct a post-run review to evaluate the outcomes of our simulations. We will look at any side effects that occurred and check how well our results align with governance constraints. This evaluation is important for understanding the implications of our decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-201-l05-act1",
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
          "id": "space-missions-engineering-201-l05-act2",
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
      "id": "space-missions-engineering-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-201-l06-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-201-skill-core",
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
          "id": "space-missions-engineering-201-l06-q2",
          "text": "The 201 level should emphasize:",
          "skillId": "space-missions-engineering-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, workflow discipline, and evidence-based reasoning"
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
          "explanation": "This level is explicitly structured around method execution, workflow discipline, and evidence-based reasoning."
        },
        {
          "id": "space-missions-engineering-201-l06-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-201-skill-reliability",
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
          "id": "space-missions-engineering-201-l06-q4",
          "text": "For risk and reliability modeling, which practice is most defensible?",
          "skillId": "space-missions-engineering-201-skill-eval",
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
          "id": "space-missions-engineering-201-l06-q5",
          "text": "A mature flight operations governance model should include:",
          "skillId": "space-missions-engineering-201-skill-governance",
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
      "id": "space-missions-engineering-201-l07",
      "title": "Space Missions Engineering Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, learners will examine how the benefits and burdens of engineering decisions are distributed among different stakeholders and over time. Understanding stakeholder impact is crucial for making ethical decisions in engineering and ensuring that all voices are considered.\nContext recap: In this lesson, learners will examine how the benefits and burdens of engineering decisions are distributed among different stakeholders and over time. Understanding stakeholder impact is crucial for making ethical decisions in engineering and ensuring that all voices are considered.\nContext recap: In this lesson, learners will examine how the benefits and burdens of engineering decisions are distributed among different stakeholders and over time. Understanding stakeholder impact is crucial for making ethical decisions in engineering and ensuring that all voices are considered. Context recap: In this lesson, learners will examine how the benefits and burdens of engineering decisions are distributed among different stakeholders and over time. Understanding stakeholder impact is crucial for making ethical decisions in engineering and ensuring that all voices are considered."
        },
        {
          "id": "space-missions-engineering-201-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the concept of accountability in engineering projects. This includes understanding traceability, which is the ability to track decisions and actions, review rights that stakeholders have, and remediation obligations that ensure any issues are addressed. This framework is essential for responsible engineering practices.\nContext recap: In this section, we will discuss the concept of accountability in engineering projects. This includes understanding traceability, which is the ability to track decisions and actions, review rights that stakeholders have, and remediation obligations that ensure any issues are addressed. This framework is essential for responsible engineering practices."
        },
        {
          "id": "space-missions-engineering-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "At the end of our lesson, we will use a comprehensive checklist that connects the technical aspects of our space missions with important policies, ethical considerations, and the trust of those who are affected by our work. This checklist will help ensure that we are not only meeting our engineering goals but also acting responsibly and ethically in our mission planning.\nContext recap: At the end of our lesson, we will use a comprehensive checklist that connects the technical aspects of our space missions with important policies, ethical considerations, and the trust of those who are affected by our work. This checklist will help ensure that we are not only meeting our engineering goals but also acting responsibly and ethically in our mission planning."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-201-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes differ across stakeholder groups and timescales."
        },
        {
          "id": "space-missions-engineering-201-l07-f2",
          "front": "Decision traceability",
          "back": "The evidence chain showing how and why a decision was made."
        },
        {
          "id": "space-missions-engineering-201-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery behavior that balances effectiveness with ethical and policy safeguards."
        }
      ]
    },
    {
      "id": "space-missions-engineering-201-l08",
      "title": "Space Missions Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this interactive session, you will have the opportunity to create a detailed capstone charter. This document will outline your project's main objectives, any constraints you might face, the metrics you will use to measure success, and the governance gates that will guide your decision-making process. This exercise will help you think critically about how to plan and execute a successful space mission.\nContext recap: In this interactive session, you will have the opportunity to create a detailed capstone charter. This document will outline your project's main objectives, any constraints you might face, the metrics you will use to measure success, and the governance gates that will guide your decision-making process. This exercise will help you think critically about how to plan and execute a successful space mission."
        },
        {
          "id": "space-missions-engineering-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As part of our recap, you will prepare well-researched defenses for any critiques that may arise regarding your technical decisions, policy choices, and the perspectives of stakeholders involved in your project. This preparation will not only strengthen your arguments but also enhance your understanding of the complexities involved in space mission planning.\nContext recap: As part of our recap, you will prepare well-researched defenses for any critiques that may arise regarding your technical decisions, policy choices, and the perspectives of stakeholders involved in your project. This preparation will not only strengthen your arguments but also enhance your understanding of the complexities involved in space mission planning."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-201-l08-act1",
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
          "id": "space-missions-engineering-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    }
  ]
};
