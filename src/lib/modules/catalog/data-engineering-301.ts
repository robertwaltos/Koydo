import type { LearningModule } from "@/lib/modules/types";

export const DataEngineering301Module: LearningModule = {
  "id": "data-engineering-301",
  "title": "Data Engineering Systems and Governance",
  "description": "Level 301 curriculum in Data Engineering, focused on pipeline architecture, data quality contracts, orchestration reliability, and cost-performance tuning, with rigorous scenario analysis and assessment-backed mastery.",
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
      "id": "data-engineering-301-l01",
      "title": "Data Engineering Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "data-engineering-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will create a common vocabulary for Data Engineering. This means we will define important terms and concepts that everyone can understand. We will also discuss the boundaries of our systems, which helps us know where our data pipelines start and end. Additionally, we will explore how pipeline architecture interacts with data quality contracts in real-world situations, ensuring that we can effectively manage and maintain our data systems.\nContext recap: In this lesson, we will create a common vocabulary for Data Engineering. This means we will define important terms and concepts that everyone can understand. We will also discuss the boundaries of our systems, which helps us know where our data pipelines start and end. Additionally, we will explore how pipeline architecture interacts with data quality contracts in real-world situations, ensuring that we can effectively manage and maintain our data systems."
        },
        {
          "id": "data-engineering-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this part of the lesson, learners will practice modeling causal paths. This means they will learn how to identify the relationships between different events and outcomes. They will also uncover hidden assumptions that might affect their understanding. Before suggesting any changes or interventions, students will apply checks for constraints, ensuring that their ideas are realistic and feasible.\nContext recap: In this part of the lesson, learners will practice modeling causal paths. This means they will learn how to identify the relationships between different events and outcomes. They will also uncover hidden assumptions that might affect their understanding. Before suggesting any changes or interventions, students will apply checks for constraints, ensuring that their ideas are realistic and feasible."
        },
        {
          "id": "data-engineering-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence. In this approach, every claim made is connected to observable indicators, which are pieces of information we can see or measure. Additionally, we will discuss the expected uncertainty related to these claims, helping learners understand that not everything can be known for sure. This evidence-first mindset is crucial for making informed decisions in data engineering.\nContext recap: This module introduces a workflow that prioritizes evidence. In this approach, every claim made is connected to observable indicators, which are pieces of information we can see or measure. Additionally, we will discuss the expected uncertainty related to these claims, helping learners understand that not everything can be known for sure. This evidence-first mindset is crucial for making informed decisions in data engineering."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-301-l01-f1",
          "front": "pipeline architecture",
          "back": "A core mechanism in Data Engineering requiring explicit assumptions and measurable controls."
        },
        {
          "id": "data-engineering-301-l01-f2",
          "front": "data quality contracts",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "data-engineering-301-l01-f3",
          "front": "orchestration reliability",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "data-engineering-301-l02",
      "title": "Data Engineering Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "data-engineering-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods that are optimized for various system trade-offs. This means they will consider how different choices affect metrics architecture and governance decisions. After building their method sequence, students will stress-test each step to see how it performs under uncertain conditions, helping them understand the importance of resilience in data engineering.\nContext recap: In this interactive lab, learners will construct a sequence of methods that are optimized for various system trade-offs. This means they will consider how different choices affect metrics architecture and governance decisions. After building their method sequence, students will stress-test each step to see how it performs under uncertain conditions, helping them understand the importance of resilience in data engineering."
        },
        {
          "id": "data-engineering-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will assess the readiness of our systems through various checks. This includes mapping out who owns different parts of the system, establishing a schedule for regular checkpoints, identifying triggers for rolling back changes if necessary, and maintaining evidence logs. These practices ensure that our systems are prepared for operation and can adapt to changes effectively.\nContext recap: In this recap, we will assess the readiness of our systems through various checks. This includes mapping out who owns different parts of the system, establishing a schedule for regular checkpoints, identifying triggers for rolling back changes if necessary, and maintaining evidence logs. These practices ensure that our systems are prepared for operation and can adapt to changes effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-301-l02-act1",
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
          "id": "data-engineering-301-l02-act2",
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
      "id": "data-engineering-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-engineering-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-301-l03-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-301-skill-risk",
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
          "id": "data-engineering-301-l03-q2",
          "text": "At level 301, Data Engineering work should prioritize:",
          "skillId": "data-engineering-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoffs, metrics architecture, and governance decisions"
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
          "explanation": "The 301 sequence is designed around system tradeoffs, metrics architecture, and governance decisions."
        },
        {
          "id": "data-engineering-301-l03-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-301-skill-ops",
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
          "id": "data-engineering-301-l03-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-301-skill-eval",
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
          "id": "data-engineering-301-l03-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-301-skill-governance",
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
      "id": "data-engineering-301-l04",
      "title": "Data Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "data-engineering-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case analysis, we will dive into the workings of a multi-source analytics platform. This platform faces the challenge of late-arriving events, which can complicate data processing and analysis. Additionally, it operates under strict service level agreement (SLA) targets, which are essential for maintaining quality and reliability in data services. Throughout this exercise, learners will be encouraged to distinguish between evidence and assumptions, as well as to pinpoint high-consequence risks that could impact the platform's performance. By participating in this analysis, students will gain valuable insights into the complexities of managing data from various sources and the critical importance of making informed, data-driven decisions in the field of data engineering."
        },
        {
          "id": "data-engineering-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will use a decision tradeoff matrix to evaluate different alternatives. Each option will be scored based on its performance, reliability, cost, and implications for equity. This structured approach will help learners understand how to weigh the pros and cons of each choice before selecting the best intervention path for their data engineering projects.\nContext recap: In this section, we will use a decision tradeoff matrix to evaluate different alternatives. Each option will be scored based on its performance, reliability, cost, and implications for equity. This structured approach will help learners understand how to weigh the pros and cons of each choice before selecting the best intervention path for their data engineering projects."
        },
        {
          "id": "data-engineering-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different failure patterns that have occurred in past projects. By analyzing these incidents, we can transform one-off failures into reusable design safeguards. This means that learners will learn how to create systems that are more resilient and can prevent similar issues from happening in the future.\nContext recap: In this recap, we will categorize different failure patterns that have occurred in past projects. By analyzing these incidents, we can transform one-off failures into reusable design safeguards. This means that learners will learn how to create systems that are more resilient and can prevent similar issues from happening in the future."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "data-engineering-301-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "data-engineering-301-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "data-engineering-301-l05",
      "title": "Data Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "data-engineering-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation studio, learners will set up a scenario model that includes clear assumptions about uncertainty and specific success metrics related to cost-performance tuning. This hands-on experience will allow students to experiment with different variables and see how they affect the outcomes of their data engineering projects.\nContext recap: In this interactive simulation studio, learners will set up a scenario model that includes clear assumptions about uncertainty and specific success metrics related to cost-performance tuning. This hands-on experience will allow students to experiment with different variables and see how they affect the outcomes of their data engineering projects."
        },
        {
          "id": "data-engineering-301-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, learners will participate in a review loop. This involves examining the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This process encourages critical thinking and helps students understand the importance of continuous improvement in data engineering.\nContext recap: At the end of each simulation round, learners will participate in a review loop. This involves examining the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This process encourages critical thinking and helps students understand the importance of continuous improvement in data engineering."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-301-l05-act1",
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
          "id": "data-engineering-301-l05-act2",
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
      "id": "data-engineering-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-engineering-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "data-engineering-301-l06-q1",
          "text": "Which practice most strengthens pipeline architecture in real deployments?",
          "skillId": "data-engineering-301-skill-risk",
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
          "id": "data-engineering-301-l06-q2",
          "text": "At level 301, Data Engineering work should prioritize:",
          "skillId": "data-engineering-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoffs, metrics architecture, and governance decisions"
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
          "explanation": "The 301 sequence is designed around system tradeoffs, metrics architecture, and governance decisions."
        },
        {
          "id": "data-engineering-301-l06-q3",
          "text": "What is the strongest indicator of healthy data quality contracts?",
          "skillId": "data-engineering-301-skill-ops",
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
          "id": "data-engineering-301-l06-q4",
          "text": "When improving orchestration reliability, which approach is most defensible?",
          "skillId": "data-engineering-301-skill-eval",
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
          "id": "data-engineering-301-l06-q5",
          "text": "A mature cost-performance tuning strategy should include:",
          "skillId": "data-engineering-301-skill-governance",
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
      "id": "data-engineering-301-l07",
      "title": "Data Engineering Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-engineering-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will conduct a stakeholder analysis. They will identify who benefits from data engineering projects, who might bear risks, and how different policy choices can shape outcomes for various groups. This understanding is essential for making ethical decisions and ensuring that data engineering practices are fair and equitable.\nContext recap: In this lesson, learners will conduct a stakeholder analysis. They will identify who benefits from data engineering projects, who might bear risks, and how different policy choices can shape outcomes for various groups. This understanding is essential for making ethical decisions and ensuring that data engineering practices are fair and equitable."
        },
        {
          "id": "data-engineering-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this section, we will explore governance and accountability in data engineering. We will discuss how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation when issues arise. Understanding these concepts is crucial for ensuring that data engineering practices are responsible and trustworthy.\nContext recap: In this section, we will explore governance and accountability in data engineering. We will discuss how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation when issues arise. Understanding these concepts is crucial for ensuring that data engineering practices are responsible and trustworthy."
        },
        {
          "id": "data-engineering-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying a data engineering project, it is essential to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By evaluating these criteria, we can ensure that our project is responsible and beneficial to everyone involved.\nContext recap: Before making any decisions about deploying a data engineering project, it is essential to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By evaluating these criteria, we can ensure that our project is responsible and beneficial to everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "data-engineering-301-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "data-engineering-301-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "data-engineering-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "data-engineering-301-l08",
      "title": "Data Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "data-engineering-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "data-engineering-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges."
        },
        {
          "id": "data-engineering-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, students will receive a defense preparation template. This template will guide them in presenting their projects by requiring them to support their claims with evidence and clearly explain any trade-offs they had to consider. This practice helps students develop strong reasoning skills and prepares them for defending their work in front of an audience.\nContext recap: To conclude the lesson, students will receive a defense preparation template. This template will guide them in presenting their projects by requiring them to support their claims with evidence and clearly explain any trade-offs they had to consider. This practice helps students develop strong reasoning skills and prepares them for defending their work in front of an audience."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-engineering-301-l08-act1",
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
          "id": "data-engineering-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
