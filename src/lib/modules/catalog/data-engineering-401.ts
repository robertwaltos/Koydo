import type { LearningModule } from "@/lib/modules/types";

export const DataEngineering401Module: LearningModule = {
  "id": "data-engineering-401",
  "title": "Data Engineering Leadership and Capstone",
  "description": "Level 401 curriculum in Data Engineering, focused on pipeline architecture, data quality contracts, orchestration reliability, and cost-performance tuning, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Data Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "data",
    "systems"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply pipeline architecture using clear assumptions and constraints",
    "Build repeatable workflows for data quality contracts with measurable checkpoints",
    "Evaluate orchestration reliability outcomes against baseline and target metrics",
    "Use governance patterns to improve cost-performance tuning decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Data Engineering methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "data-engineering-401-l01",
      "title": "Data Engineering Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "data-engineering-401-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-401-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a common vocabulary that everyone in the field of Data Engineering can easily understand. This shared language is important because it helps us communicate clearly and work effectively as a team. We will also define the boundaries of our operations, which means understanding what we can and cannot do within our projects. Additionally, we will explore how the architecture of data pipelines connects with data quality agreements in real-world situations. Understanding these interactions is essential for ensuring that our data is reliable and meets the necessary standards. This foundational knowledge will help us collaborate better and achieve our goals more efficiently."
        },
        {
          "id": "data-engineering-401-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, learners will practice modeling causal paths, which are the connections between different events or actions. They will also work on identifying hidden assumptions that might affect their conclusions. Additionally, students will learn to apply checks for constraints, which are the limits or rules that must be followed, before suggesting any changes or interventions. This process helps ensure that proposed solutions are well thought out and based on solid reasoning.\nContext recap: In this section, learners will practice modeling causal paths, which are the connections between different events or actions. They will also work on identifying hidden assumptions that might affect their conclusions. Additionally, students will learn to apply checks for constraints, which are the limits or rules that must be followed, before suggesting any changes or interventions. This process helps ensure that proposed solutions are well thought out and based on solid reasoning."
        },
        {
          "id": "data-engineering-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence, meaning that every claim made must be supported by observable indicators and an understanding of the uncertainties involved. By focusing on evidence first, learners can make more informed decisions and develop a clearer understanding of the data they are working with. This approach encourages critical thinking and helps students learn how to substantiate their ideas effectively.\nContext recap: This module introduces a workflow that prioritizes evidence, meaning that every claim made must be supported by observable indicators and an understanding of the uncertainties involved. By focusing on evidence first, learners can make more informed decisions and develop a clearer understanding of the data they are working with. This approach encourages critical thinking and helps students learn how to substantiate their ideas effectively."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-401-l01-f1",
          "front": "pipeline architecture",
          "back": "A core mechanism in Data Engineering requiring explicit assumptions and measurable controls."
        },
        {
          "id": "data-engineering-401-l01-f2",
          "front": "data quality contracts",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "data-engineering-401-l01-f3",
          "front": "orchestration reliability",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "data-engineering-401-l02",
      "title": "Data Engineering Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "data-engineering-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-401-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods that are optimized for effective leadership, collaboration across different teams, and preparing for their capstone project defense. After building their method sequence, they will stress-test each step to see how it holds up under uncertain conditions. This practice helps students understand the importance of resilience and adaptability in their strategies.\nContext recap: In this interactive lab, learners will construct a sequence of methods that are optimized for effective leadership, collaboration across different teams, and preparing for their capstone project defense. After building their method sequence, they will stress-test each step to see how it holds up under uncertain conditions. This practice helps students understand the importance of resilience and adaptability in their strategies."
        },
        {
          "id": "data-engineering-401-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure that everything is ready for action, learners will assess operational readiness through various checks. This includes mapping out who is responsible for different tasks, establishing a schedule for regular checkpoints, identifying triggers for rolling back decisions if necessary, and maintaining logs of evidence. These practices help ensure that all aspects of a project are well-prepared and that any potential issues can be addressed promptly.\nContext recap: To ensure that everything is ready for action, learners will assess operational readiness through various checks. This includes mapping out who is responsible for different tasks, establishing a schedule for regular checkpoints, identifying triggers for rolling back decisions if necessary, and maintaining logs of evidence. These practices help ensure that all aspects of a project are well-prepared and that any potential issues can be addressed promptly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-401-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each design choice to the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-release stress tests",
              "right": "Lower severe failure probability"
            },
            {
              "left": "Checkpoint gating",
              "right": "Prevents defect propagation"
            },
            {
              "left": "Baseline comparison",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective review",
              "right": "Improves next-iteration decisions"
            }
          ]
        },
        {
          "id": "data-engineering-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraints into technical, policy, and user-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Latency budget",
              "bucket": "Technical"
            },
            {
              "text": "Audit retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Accessibility burden",
              "bucket": "User Impact"
            },
            {
              "text": "Human review threshold",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "data-engineering-401-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-engineering-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-401-l03-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-401-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Use assumptions without documenting them"
            },
            {
              "id": "b",
              "text": "Define failure criteria and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Evaluate outcomes only once per year"
            },
            {
              "id": "d",
              "text": "Avoid stress-testing edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response."
        },
        {
          "id": "data-engineering-401-l03-q2",
          "text": "At level 401, Data Engineering work should prioritize:",
          "skillId": "data-engineering-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "strategic leadership, cross-functional alignment, and capstone defense"
            },
            {
              "id": "b",
              "text": "Speed over traceability in all cases"
            },
            {
              "id": "c",
              "text": "No validation loops after release"
            },
            {
              "id": "d",
              "text": "Single-metric optimization without context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 401 sequence is designed around strategic leadership, cross-functional alignment, and capstone defense."
        },
        {
          "id": "data-engineering-401-l03-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-401-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Untracked interventions and ad-hoc approvals"
            },
            {
              "id": "b",
              "text": "Clear owner mapping, review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "Skipping post-incident analysis"
            },
            {
              "id": "d",
              "text": "Changing targets after observing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls."
        },
        {
          "id": "data-engineering-401-l03-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins as sole evidence"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include failure analysis"
            },
            {
              "id": "c",
              "text": "Remove difficult test scenarios"
            },
            {
              "id": "d",
              "text": "Ignore lagging outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance."
        },
        {
          "id": "data-engineering-401-l03-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No escalation path for critical defects"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to impact tiers"
            },
            {
              "id": "c",
              "text": "One-time governance review only"
            },
            {
              "id": "d",
              "text": "Separation between metrics and decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects policy intent to measurement and response action."
        }
      ]
    },
    {
      "id": "data-engineering-401-l04",
      "title": "Data Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "data-engineering-401-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-401-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will delve into the workings of a multi-source analytics platform that encounters difficulties due to late-arriving events and has strict service level agreement (SLA) targets to meet. As learners, you will be tasked with identifying and differentiating between various elements such as evidence, assumptions, and potential risks that could lead to significant consequences if not addressed properly. This exercise is designed to enhance your understanding of the complexities involved in real-world data engineering scenarios and to highlight the critical importance of thorough analysis and decision-making in the field."
        },
        {
          "id": "data-engineering-401-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, learners will use a decision tradeoff matrix to evaluate different alternatives. Each option will be scored based on its performance, reliability, cost, and fairness implications. This structured approach helps students make informed choices about which intervention path to take, ensuring that they consider all relevant factors before making a decision.\nContext recap: In this section, learners will use a decision tradeoff matrix to evaluate different alternatives. Each option will be scored based on its performance, reliability, cost, and fairness implications. This structured approach helps students make informed choices about which intervention path to take, ensuring that they consider all relevant factors before making a decision."
        },
        {
          "id": "data-engineering-401-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different failure patterns to help transform isolated incidents into valuable design safeguards. By analyzing what went wrong in past situations, learners can develop strategies to prevent similar issues in the future. This practice emphasizes the importance of learning from mistakes and using those lessons to improve future designs.\nContext recap: In this recap, we will categorize different failure patterns to help transform isolated incidents into valuable design safeguards. By analyzing what went wrong in past situations, learners can develop strategies to prevent similar issues in the future. This practice emphasizes the importance of learning from mistakes and using those lessons to improve future designs."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-401-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "data-engineering-401-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "data-engineering-401-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "data-engineering-401-l05",
      "title": "Data Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "data-engineering-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-401-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation, learners will set up a scenario model that includes clear assumptions about uncertainties and defines success metrics related to cost and performance. This setup is crucial for understanding how different variables can affect outcomes and helps students practice making data-driven decisions in a controlled environment.\nContext recap: In this interactive simulation, learners will set up a scenario model that includes clear assumptions about uncertainties and defines success metrics related to cost and performance. This setup is crucial for understanding how different variables can affect outcomes and helps students practice making data-driven decisions in a controlled environment."
        },
        {
          "id": "data-engineering-401-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, learners will engage in a review process where they examine the evidence collected, check for alignment with established policies, and identify actions for improvement. This reflective practice encourages continuous learning and adaptation, ensuring that students are always looking for ways to enhance their strategies and outcomes.\nContext recap: At the end of each simulation round, learners will engage in a review process where they examine the evidence collected, check for alignment with established policies, and identify actions for improvement. This reflective practice encourages continuous learning and adaptation, ensuring that students are always looking for ways to enhance their strategies and outcomes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-401-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances pipeline architecture and cost-performance tuning.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "data-engineering-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Mapping",
          "description": "Match each failure condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Unreliable input stream",
              "right": "Introduce quality contracts and quarantine checks"
            },
            {
              "left": "Policy ambiguity",
              "right": "Define decision authority and escalation rules"
            },
            {
              "left": "Metric drift",
              "right": "Re-baseline and monitor leading indicators"
            },
            {
              "left": "User trust decline",
              "right": "Increase transparency and corrective feedback loops"
            }
          ]
        }
      ]
    },
    {
      "id": "data-engineering-401-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-engineering-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-401-l06-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-401-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Use assumptions without documenting them"
            },
            {
              "id": "b",
              "text": "Define failure criteria and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Evaluate outcomes only once per year"
            },
            {
              "id": "d",
              "text": "Avoid stress-testing edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response."
        },
        {
          "id": "data-engineering-401-l06-q2",
          "text": "At level 401, Data Engineering work should prioritize:",
          "skillId": "data-engineering-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "strategic leadership, cross-functional alignment, and capstone defense"
            },
            {
              "id": "b",
              "text": "Speed over traceability in all cases"
            },
            {
              "id": "c",
              "text": "No validation loops after release"
            },
            {
              "id": "d",
              "text": "Single-metric optimization without context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 401 sequence is designed around strategic leadership, cross-functional alignment, and capstone defense."
        },
        {
          "id": "data-engineering-401-l06-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-401-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Untracked interventions and ad-hoc approvals"
            },
            {
              "id": "b",
              "text": "Clear owner mapping, review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "Skipping post-incident analysis"
            },
            {
              "id": "d",
              "text": "Changing targets after observing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls."
        },
        {
          "id": "data-engineering-401-l06-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins as sole evidence"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include failure analysis"
            },
            {
              "id": "c",
              "text": "Remove difficult test scenarios"
            },
            {
              "id": "d",
              "text": "Ignore lagging outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance."
        },
        {
          "id": "data-engineering-401-l06-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No escalation path for critical defects"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to impact tiers"
            },
            {
              "id": "c",
              "text": "One-time governance review only"
            },
            {
              "id": "d",
              "text": "Separation between metrics and decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects policy intent to measurement and response action."
        }
      ]
    },
    {
      "id": "data-engineering-401-l07",
      "title": "Data Engineering Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-engineering-401-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, learners will conduct a stakeholder analysis to identify who benefits from various decisions, who might face risks, and how different policy choices can influence outcomes for different groups. Understanding these dynamics is essential for making ethical and informed decisions in data engineering.\nContext recap: In this section, learners will conduct a stakeholder analysis to identify who benefits from various decisions, who might face risks, and how different policy choices can influence outcomes for different groups. Understanding these dynamics is essential for making ethical and informed decisions in data engineering."
        },
        {
          "id": "data-engineering-401-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "This lesson will explore governance and accountability in data engineering. Learners will discover how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. Understanding these concepts is vital for ensuring responsible and ethical practices in the field.\nContext recap: This lesson will explore governance and accountability in data engineering. Learners will discover how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. Understanding these concepts is vital for ensuring responsible and ethical practices in the field."
        },
        {
          "id": "data-engineering-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying a data project, it is important to use a final checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and how the project will impact users. By reviewing these criteria, we can ensure that our decisions are responsible and beneficial for everyone involved.\nContext recap: Before making any decisions about deploying a data project, it is important to use a final checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and how the project will impact users. By reviewing these criteria, we can ensure that our decisions are responsible and beneficial for everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-401-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "data-engineering-401-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "data-engineering-401-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "data-engineering-401-l08",
      "title": "Data Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "data-engineering-401-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish success metrics to measure progress, and set governance checkpoints to ensure everything stays on track. This practice will help students think critically about their projects and plan effectively.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish success metrics to measure progress, and set governance checkpoints to ensure everything stays on track. This practice will help students think critically about their projects and plan effectively."
        },
        {
          "id": "data-engineering-401-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "At the conclusion of this lesson, students will receive a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any tradeoffs they make. This exercise will help learners develop their argumentation skills and prepare them for presenting their projects confidently.\nContext recap: At the conclusion of this lesson, students will receive a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any tradeoffs they make. This exercise will help learners develop their argumentation skills and prepare them for presenting their projects confidently."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page capstone charter with metrics, controls, and success criteria.",
          "instructions": [
            "State the primary objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Identify one ethical or policy risk and mitigation plan."
          ]
        },
        {
          "id": "data-engineering-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
