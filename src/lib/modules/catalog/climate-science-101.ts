import type { LearningModule } from "@/lib/modules/types";

export const ClimateScience101Module: LearningModule = {
  "id": "climate-science-101",
  "title": "Climate Science Foundations",
  "description": "Level 101 curriculum in Climate Science, focused on earth energy balance, carbon cycle dynamics, impact attribution, and adaptation strategy, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "climate",
    "sustainability"
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
    "Explain and apply earth energy balance using clear assumptions and constraints",
    "Build repeatable workflows for carbon cycle dynamics with measurable checkpoints",
    "Evaluate impact attribution outcomes against baseline and target metrics",
    "Use governance patterns to improve adaptation strategy decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Climate Science methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "climate-science-101-l01",
      "title": "Climate Science Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "climate-science-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will create a shared vocabulary that is crucial for grasping the concepts of Climate Science. We will define the specific boundaries that guide our discussions, which will help us understand how energy from the Earth interacts with the carbon cycle in our everyday environments. By establishing this foundational language, we will be better equipped to communicate about climate issues and their complexities. This understanding is important for recognizing how different elements of our planet work together and influence each other, ultimately affecting our climate and environment."
        },
        {
          "id": "climate-science-101-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, learners will explore how to model causal paths, which means understanding how different factors influence each other. We will also identify any hidden assumptions that might affect our understanding. Before suggesting any changes or interventions, we will apply checks to ensure that our ideas are feasible and based on solid reasoning.\nContext recap: In this section, learners will explore how to model causal paths, which means understanding how different factors influence each other. We will also identify any hidden assumptions that might affect our understanding. Before suggesting any changes or interventions, we will apply checks to ensure that our ideas are feasible and based on solid reasoning."
        },
        {
          "id": "climate-science-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a methodical approach that prioritizes evidence. We will learn how to connect each claim we make to observable indicators, which are pieces of information we can see or measure. Additionally, we will discuss the uncertainties that may arise in our findings, helping us to think critically about the information we use.\nContext recap: This module introduces a methodical approach that prioritizes evidence. We will learn how to connect each claim we make to observable indicators, which are pieces of information we can see or measure. Additionally, we will discuss the uncertainties that may arise in our findings, helping us to think critically about the information we use."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-101-l01-f1",
          "front": "earth energy balance",
          "back": "A core mechanism in Climate Science requiring explicit assumptions and measurable controls."
        },
        {
          "id": "climate-science-101-l01-f2",
          "front": "carbon cycle dynamics",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "climate-science-101-l01-f3",
          "front": "impact attribution",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "climate-science-101-l02",
      "title": "Climate Science Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "climate-science-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this engaging interactive lab, students will have the opportunity to design a sequence of methods that are carefully crafted to enhance their understanding of essential vocabulary, key mechanisms, and fundamental analysis techniques in climate science. Once they have constructed this method sequence, we will challenge each step by testing it under various uncertain conditions. This process will help us ensure that our methods are not only effective but also resilient and dependable in real-world scenarios.\nContext recap: In this engaging interactive lab, students will have the opportunity to design a sequence of methods that are carefully crafted to enhance their understanding of essential vocabulary, key mechanisms, and fundamental analysis techniques in climate science. Once they have constructed this method sequence, we will challenge each step by testing it under various uncertain conditions. This process will help us ensure that our methods are not only effective but also resilient and dependable in real-world scenarios."
        },
        {
          "id": "climate-science-101-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure our methods are ready for implementation, we will conduct operational readiness checks. This involves mapping out who is responsible for each part of the process, establishing a schedule for checkpoints, identifying triggers for rolling back decisions, and maintaining evidence logs to track our progress and findings.\nContext recap: To ensure our methods are ready for implementation, we will conduct operational readiness checks. This involves mapping out who is responsible for each part of the process, establishing a schedule for checkpoints, identifying triggers for rolling back decisions, and maintaining evidence logs to track our progress and findings."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-101-l02-act1",
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
          "id": "climate-science-101-l02-act2",
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
      "id": "climate-science-101-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "climate-science-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-101-l03-q1",
          "text": "Which practice most strengthens earth energy balance in real deployments?",
          "skillId": "climate-science-101-skill-risk",
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
          "id": "climate-science-101-l03-q2",
          "text": "At level 101, Climate Science work should prioritize:",
          "skillId": "climate-science-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, core mechanisms, and baseline analysis"
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
          "explanation": "The 101 sequence is designed around foundational vocabulary, core mechanisms, and baseline analysis."
        },
        {
          "id": "climate-science-101-l03-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics?",
          "skillId": "climate-science-101-skill-ops",
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
          "id": "climate-science-101-l03-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-101-skill-eval",
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
          "id": "climate-science-101-l03-q5",
          "text": "A mature adaptation strategy strategy should include:",
          "skillId": "climate-science-101-skill-governance",
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
      "id": "climate-science-101-l04",
      "title": "Climate Science Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "climate-science-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will explore a coastal city that is working hard to find the right balance between two important goals: reducing the impacts of climate change and preparing for challenges like extreme heat and flooding. As we dive into this analysis, you will have the opportunity to practice critical thinking skills by distinguishing between solid evidence and personal assumptions. Additionally, you will identify high-stakes risks that could lead to serious consequences for the city's residents and environment. This exercise will help you understand the complexities of climate policy and the importance of informed decision-making in the face of climate challenges."
        },
        {
          "id": "climate-science-101-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will create a decision tradeoff matrix. This tool helps us evaluate different alternatives based on various criteria such as performance, reliability, cost, and fairness. By scoring each option, we can make informed decisions about which intervention path to take.\nContext recap: In this section, we will create a decision tradeoff matrix. This tool helps us evaluate different alternatives based on various criteria such as performance, reliability, cost, and fairness. By scoring each option, we can make informed decisions about which intervention path to take."
        },
        {
          "id": "climate-science-101-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "We will categorize different patterns of failure to learn from past mistakes. By analyzing these failure modes, we can transform isolated incidents into valuable lessons that inform our future designs and strategies, helping us to create safeguards that prevent similar issues from occurring again.\nContext recap: We will categorize different patterns of failure to learn from past mistakes. By analyzing these failure modes, we can transform isolated incidents into valuable lessons that inform our future designs and strategies, helping us to create safeguards that prevent similar issues from occurring again."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "climate-science-101-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "climate-science-101-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "climate-science-101-l05",
      "title": "Climate Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "climate-science-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation studio, learners will have the opportunity to create and configure a scenario model. This model will include specific assumptions about uncertainties that may arise in climate science. Additionally, learners will define success metrics that are directly related to the adaptation strategies they choose to explore. This hands-on experience is designed to immerse learners in real-world challenges, helping them understand the complexities of climate science and the importance of making informed decisions. By engaging in this simulation, learners will develop critical thinking skills and gain insights into how different strategies can impact our environment and communities."
        },
        {
          "id": "climate-science-101-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence gathered during the simulation. This will include checking for alignment with our policy goals and identifying actions for improvement. This iterative process helps us refine our strategies and make better decisions.\nContext recap: At the end of each simulation round, we will conduct a review of the evidence gathered during the simulation. This will include checking for alignment with our policy goals and identifying actions for improvement. This iterative process helps us refine our strategies and make better decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-101-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances earth energy balance and adaptation strategy.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "climate-science-101-l05-act2",
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
      "id": "climate-science-101-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "climate-science-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-101-l06-q1",
          "text": "Which practice most strengthens earth energy balance in real deployments?",
          "skillId": "climate-science-101-skill-risk",
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
          "id": "climate-science-101-l06-q2",
          "text": "At level 101, Climate Science work should prioritize:",
          "skillId": "climate-science-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, core mechanisms, and baseline analysis"
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
          "explanation": "The 101 sequence is designed around foundational vocabulary, core mechanisms, and baseline analysis."
        },
        {
          "id": "climate-science-101-l06-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics?",
          "skillId": "climate-science-101-skill-ops",
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
          "id": "climate-science-101-l06-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-101-skill-eval",
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
          "id": "climate-science-101-l06-q5",
          "text": "A mature adaptation strategy strategy should include:",
          "skillId": "climate-science-101-skill-governance",
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
      "id": "climate-science-101-l07",
      "title": "Climate Science Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "climate-science-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will analyze the various stakeholders involved in climate policy. We will identify who benefits from certain policies, who may face risks, and how different policy choices can impact various groups within society. Understanding these dynamics is crucial for making equitable decisions.\nContext recap: In this lesson, learners will analyze the various stakeholders involved in climate policy. We will identify who benefits from certain policies, who may face risks, and how different policy choices can impact various groups within society. Understanding these dynamics is crucial for making equitable decisions."
        },
        {
          "id": "climate-science-101-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore governance and accountability in climate science. This involves linking governance mechanisms to measurable controls, ensuring transparency in decision-making, and establishing pathways for remediation when issues arise. These elements are essential for building trust and ensuring responsible management of climate policies.\nContext recap: We will explore governance and accountability in climate science. This involves linking governance mechanisms to measurable controls, ensuring transparency in decision-making, and establishing pathways for remediation when issues arise. These elements are essential for building trust and ensuring responsible management of climate policies."
        },
        {
          "id": "climate-science-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making important decisions about climate science projects, it's essential to use a comprehensive checklist. This checklist should include various criteria such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully evaluating these factors, we can ensure that our actions are responsible and beneficial to society.\nContext recap: Before making important decisions about climate science projects, it's essential to use a comprehensive checklist. This checklist should include various criteria such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully evaluating these factors, we can ensure that our actions are responsible and beneficial to society."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-101-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "climate-science-101-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "climate-science-101-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "climate-science-101-l08",
      "title": "Climate Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "climate-science-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, students will create a detailed capstone charter. This document will outline the main objectives of their project, identify potential risks they might face, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and plan effectively.\nContext recap: In this activity, students will create a detailed capstone charter. This document will outline the main objectives of their project, identify potential risks they might face, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and plan effectively."
        },
        {
          "id": "climate-science-101-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "At the conclusion of the lesson, students will receive a defense template. This template is designed to help them prepare for presenting their projects. It will require them to support their claims with evidence and to clearly explain any trade-offs they considered during their planning. This exercise encourages thoughtful reasoning and effective communication skills.\nContext recap: At the conclusion of the lesson, students will receive a defense template. This template is designed to help them prepare for presenting their projects. It will require them to support their claims with evidence and to clearly explain any trade-offs they considered during their planning. This exercise encourages thoughtful reasoning and effective communication skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-101-l08-act1",
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
          "id": "climate-science-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
