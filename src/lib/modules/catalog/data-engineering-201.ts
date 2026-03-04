import type { LearningModule } from "@/lib/modules/types";

export const DataEngineering201Module: LearningModule = {
  "id": "data-engineering-201",
  "title": "Data Engineering Applied Practice",
  "description": "Level 201 curriculum in Data Engineering, focused on pipeline architecture, data quality contracts, orchestration reliability, and cost-performance tuning, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Data Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "data",
    "systems"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "data-engineering-201-l01",
      "title": "Data Engineering Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "data-engineering-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will dive into some key vocabulary that is essential for understanding Data Engineering. Knowing the right terms helps us communicate effectively about our work. We will also define the boundaries within which we operate, which is crucial for understanding how various components of data pipelines connect and function together. Furthermore, we will investigate how pipeline architecture interacts with data quality contracts in real-world scenarios. This exploration will ensure that we have a solid grasp of these important concepts and how they apply in practical situations."
        },
        {
          "id": "data-engineering-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, learners will model causal paths, which means they will create diagrams that show how different factors influence one another. They will also identify hidden assumptions that might affect their understanding of these relationships. Before suggesting any changes or interventions, students will apply checks to ensure that constraints are considered, helping them think critically about the impact of their decisions.\nContext recap: In this section, learners will model causal paths, which means they will create diagrams that show how different factors influence one another. They will also identify hidden assumptions that might affect their understanding of these relationships. Before suggesting any changes or interventions, students will apply checks to ensure that constraints are considered, helping them think critically about the impact of their decisions."
        },
        {
          "id": "data-engineering-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence, meaning that every claim made must be supported by observable indicators. Learners will understand how to connect their claims to expected uncertainties, which helps them make informed decisions based on solid evidence rather than assumptions. This approach encourages critical thinking and a deeper understanding of the data they are working with.\nContext recap: This module introduces a workflow that prioritizes evidence, meaning that every claim made must be supported by observable indicators. Learners will understand how to connect their claims to expected uncertainties, which helps them make informed decisions based on solid evidence rather than assumptions. This approach encourages critical thinking and a deeper understanding of the data they are working with."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-201-l01-f1",
          "front": "pipeline architecture",
          "back": "A core mechanism in Data Engineering requiring explicit assumptions and measurable controls."
        },
        {
          "id": "data-engineering-201-l01-f2",
          "front": "data quality contracts",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "data-engineering-201-l01-f3",
          "front": "orchestration reliability",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "data-engineering-201-l02",
      "title": "Data Engineering Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "data-engineering-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods that are optimized for effective execution. They will focus on ensuring that their workflow is reliable and can be interpreted correctly in various scenarios. After building their method sequence, students will stress-test each step to see how it performs under uncertain conditions, helping them learn how to adapt and improve their processes.\nContext recap: In this interactive lab, learners will construct a sequence of methods that are optimized for effective execution. They will focus on ensuring that their workflow is reliable and can be interpreted correctly in various scenarios. After building their method sequence, students will stress-test each step to see how it performs under uncertain conditions, helping them learn how to adapt and improve their processes."
        },
        {
          "id": "data-engineering-201-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure operational readiness, learners will assess their methods using several important criteria. They will create owner mappings to identify who is responsible for each part of the process, establish a cadence for checkpoints to monitor progress, set up rollback triggers to revert changes if needed, and maintain evidence logs to document their findings. This comprehensive approach helps ensure that everything is in place before moving forward.\nContext recap: To ensure operational readiness, learners will assess their methods using several important criteria. They will create owner mappings to identify who is responsible for each part of the process, establish a cadence for checkpoints to monitor progress, set up rollback triggers to revert changes if needed, and maintain evidence logs to document their findings. This comprehensive approach helps ensure that everything is in place before moving forward."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-201-l02-act1",
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
          "id": "data-engineering-201-l02-act2",
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
      "id": "data-engineering-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-engineering-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-201-l03-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-201-skill-risk",
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
          "id": "data-engineering-201-l03-q2",
          "text": "At level 201, Data Engineering work should prioritize:",
          "skillId": "data-engineering-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, workflow reliability, and scenario interpretation"
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
          "explanation": "The 201 sequence is designed around method execution, workflow reliability, and scenario interpretation."
        },
        {
          "id": "data-engineering-201-l03-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-201-skill-ops",
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
          "id": "data-engineering-201-l03-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-201-skill-eval",
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
          "id": "data-engineering-201-l03-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-201-skill-governance",
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
      "id": "data-engineering-201-l04",
      "title": "Data Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "data-engineering-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will dive into the world of a multi-source analytics platform that encounters some significant challenges. One of the main issues is dealing with late-arriving events, which can complicate the data analysis process. Additionally, the platform has strict Service Level Agreement (SLA) targets that must be met to ensure success. As learners, you will have the important task of distinguishing between evidence and assumptions, which is crucial for making informed decisions. Furthermore, you will identify high-consequence risks that could potentially affect the project's overall success. This exercise is designed to enhance your understanding of the complexities involved in managing data from various sources, preparing you for real-world data engineering scenarios."
        },
        {
          "id": "data-engineering-201-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, learners will use a Decision Tradeoff Matrix to evaluate different alternatives. Each option will be scored based on its performance, reliability, cost, and implications for equity. This structured approach will help students make informed decisions about which intervention path to select, considering the various factors that could affect the outcome.\nContext recap: In this section, learners will use a Decision Tradeoff Matrix to evaluate different alternatives. Each option will be scored based on its performance, reliability, cost, and implications for equity. This structured approach will help students make informed decisions about which intervention path to select, considering the various factors that could affect the outcome."
        },
        {
          "id": "data-engineering-201-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different failure patterns that have been observed in past projects. By analyzing these patterns, learners will be able to convert one-time incidents into reusable design safeguards. This process not only helps prevent future mistakes but also encourages a culture of learning and improvement within the field of data engineering.\nContext recap: In this recap, we will categorize different failure patterns that have been observed in past projects. By analyzing these patterns, learners will be able to convert one-time incidents into reusable design safeguards. This process not only helps prevent future mistakes but also encourages a culture of learning and improvement within the field of data engineering."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-201-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "data-engineering-201-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "data-engineering-201-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "data-engineering-201-l05",
      "title": "Data Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "data-engineering-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice session, learners will configure a scenario model that includes explicit assumptions about uncertainty and defines success metrics related to cost-performance tuning. This hands-on experience will allow students to apply theoretical concepts in a practical setting, enhancing their understanding of how to manage uncertainty in data engineering.\nContext recap: In this interactive practice session, learners will configure a scenario model that includes explicit assumptions about uncertainty and defines success metrics related to cost-performance tuning. This hands-on experience will allow students to apply theoretical concepts in a practical setting, enhancing their understanding of how to manage uncertainty in data engineering."
        },
        {
          "id": "data-engineering-201-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, learners will participate in a Decision Review Loop. This involves reviewing the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This iterative process helps students refine their approaches and ensures that they are continuously learning from their experiences.\nContext recap: At the end of each simulation round, learners will participate in a Decision Review Loop. This involves reviewing the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This iterative process helps students refine their approaches and ensures that they are continuously learning from their experiences."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-201-l05-act1",
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
          "id": "data-engineering-201-l05-act2",
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
      "id": "data-engineering-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-engineering-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-201-l06-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-201-skill-risk",
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
          "id": "data-engineering-201-l06-q2",
          "text": "At level 201, Data Engineering work should prioritize:",
          "skillId": "data-engineering-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, workflow reliability, and scenario interpretation"
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
          "explanation": "The 201 sequence is designed around method execution, workflow reliability, and scenario interpretation."
        },
        {
          "id": "data-engineering-201-l06-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-201-skill-ops",
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
          "id": "data-engineering-201-l06-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-201-skill-eval",
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
          "id": "data-engineering-201-l06-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-201-skill-governance",
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
      "id": "data-engineering-201-l07",
      "title": "Data Engineering Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-engineering-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, learners will conduct a Stakeholder Analysis to identify who benefits from data engineering projects, who might bear risks, and how different policy choices can shape outcomes for various groups. This analysis is crucial for understanding the broader impact of data engineering decisions on society and ensuring that all voices are considered.\nContext recap: In this section, learners will conduct a Stakeholder Analysis to identify who benefits from data engineering projects, who might bear risks, and how different policy choices can shape outcomes for various groups. This analysis is crucial for understanding the broader impact of data engineering decisions on society and ensuring that all voices are considered."
        },
        {
          "id": "data-engineering-201-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this lesson, we will explore the concepts of Governance and Accountability in data engineering. Learners will understand how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This knowledge is essential for ensuring that data engineering practices are ethical and responsible.\nContext recap: In this lesson, we will explore the concepts of Governance and Accountability in data engineering. Learners will understand how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This knowledge is essential for ensuring that data engineering practices are ethical and responsible."
        },
        {
          "id": "data-engineering-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying a project, it's important to use a final checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and how the project will affect users. By reviewing these criteria, we can ensure that our decisions are responsible and well-informed.\nContext recap: Before making any decisions about deploying a project, it's important to use a final checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and how the project will affect users. By reviewing these criteria, we can ensure that our decisions are responsible and well-informed."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-201-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "data-engineering-201-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "data-engineering-201-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "data-engineering-201-l08",
      "title": "Data Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "data-engineering-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish success metrics to measure progress, and set up governance checkpoints to ensure everything stays on track. This process helps in planning effectively and preparing for any challenges that may arise.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish success metrics to measure progress, and set up governance checkpoints to ensure everything stays on track. This process helps in planning effectively and preparing for any challenges that may arise."
        },
        {
          "id": "data-engineering-201-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, students will receive a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any trade-offs they make. This exercise will help them articulate their thoughts clearly and prepare for discussions about their projects.\nContext recap: To conclude the lesson, students will receive a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any trade-offs they make. This exercise will help them articulate their thoughts clearly and prepare for discussions about their projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-201-l08-act1",
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
          "id": "data-engineering-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
