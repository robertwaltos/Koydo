import type { LearningModule } from "@/lib/modules/types";

export const ClimateScience301Module: LearningModule = {
  "id": "climate-science-301",
  "title": "Climate Science Systems and Governance",
  "description": "Level 301 curriculum in Climate Science, focused on earth energy balance, carbon cycle dynamics, impact attribution, and adaptation strategy, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "climate",
    "sustainability"
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
    "Explain and apply earth energy balance using clear assumptions and constraints",
    "Build repeatable workflows for carbon cycle dynamics with measurable checkpoints",
    "Evaluate impact attribution outcomes against baseline and target metrics",
    "Use governance patterns to improve adaptation strategy decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Climate Science methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "climate-science-301-l01",
      "title": "Climate Science Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "climate-science-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a shared vocabulary that will enhance our understanding of Climate Science. We will clearly define the boundaries that guide our study of climate systems, which is crucial for grasping the complexities of this field. Additionally, we will investigate how the balance of energy on Earth interacts with the carbon cycle. By mapping these interactions, we will gain insights into how they manifest in real-world environments. This understanding is vital for recognizing the challenges posed by climate change and its effects on our planet and communities."
        },
        {
          "id": "climate-science-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this part of the lesson, students will learn how to model causal paths, which are the connections between different factors in climate systems. They will also identify any hidden assumptions that might affect their understanding. Before suggesting any changes or interventions, learners will apply checks to ensure that these constraints are considered, helping them to think critically about the implications of their proposals.\nContext recap: In this part of the lesson, students will learn how to model causal paths, which are the connections between different factors in climate systems. They will also identify any hidden assumptions that might affect their understanding. Before suggesting any changes or interventions, learners will apply checks to ensure that these constraints are considered, helping them to think critically about the implications of their proposals."
        },
        {
          "id": "climate-science-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence in our understanding of climate science. Each claim made will be linked to observable indicators, which are measurable signs that support our statements. Additionally, we will discuss the concept of uncertainty, which acknowledges that not all outcomes can be predicted with complete confidence. This approach helps us build a more reliable understanding of climate issues.\nContext recap: This module introduces a workflow that prioritizes evidence in our understanding of climate science. Each claim made will be linked to observable indicators, which are measurable signs that support our statements. Additionally, we will discuss the concept of uncertainty, which acknowledges that not all outcomes can be predicted with complete confidence. This approach helps us build a more reliable understanding of climate issues."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-301-l01-f1",
          "front": "earth energy balance",
          "back": "A core mechanism in Climate Science requiring explicit assumptions and measurable controls."
        },
        {
          "id": "climate-science-301-l01-f2",
          "front": "carbon cycle dynamics",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "climate-science-301-l01-f3",
          "front": "impact attribution",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "climate-science-301-l02",
      "title": "Climate Science Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "climate-science-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods that are optimized for making trade-offs in climate systems. They will consider various metrics and how these decisions impact governance. After building their method sequence, students will stress-test each step to see how it holds up under uncertain conditions, ensuring that their approach is robust and adaptable.\nContext recap: In this interactive lab, learners will construct a sequence of methods that are optimized for making trade-offs in climate systems. They will consider various metrics and how these decisions impact governance. After building their method sequence, students will stress-test each step to see how it holds up under uncertain conditions, ensuring that their approach is robust and adaptable."
        },
        {
          "id": "climate-science-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will assess the readiness of our methods by mapping out who is responsible for each part of the process. We will establish a cadence for checkpoints to ensure everything is on track, identify triggers for rolling back decisions if necessary, and maintain evidence logs to document our findings. This thorough approach helps ensure that our methods are prepared for real-world application.\nContext recap: In this recap, we will assess the readiness of our methods by mapping out who is responsible for each part of the process. We will establish a cadence for checkpoints to ensure everything is on track, identify triggers for rolling back decisions if necessary, and maintain evidence logs to document our findings. This thorough approach helps ensure that our methods are prepared for real-world application."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-301-l02-act1",
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
          "id": "climate-science-301-l02-act2",
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
      "id": "climate-science-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "climate-science-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-301-l03-q1",
          "text": "Which practice most strengthens earth energy balance in real deployments?",
          "skillId": "climate-science-301-skill-risk",
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
          "id": "climate-science-301-l03-q2",
          "text": "At level 301, Climate Science work should prioritize:",
          "skillId": "climate-science-301-skill-level",
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
          "id": "climate-science-301-l03-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics?",
          "skillId": "climate-science-301-skill-ops",
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
          "id": "climate-science-301-l03-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-301-skill-eval",
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
          "id": "climate-science-301-l03-q5",
          "text": "A mature adaptation strategy strategy should include:",
          "skillId": "climate-science-301-skill-governance",
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
      "id": "climate-science-301-l04",
      "title": "Climate Science Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "climate-science-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will delve into the challenges faced by a coastal city as it strives to find a balance between implementing effective policies to mitigate the impacts of climate change and developing strategies to adapt to the increasing risks of heatwaves and flooding. As part of this analysis, learners will be encouraged to critically separate factual evidence from assumptions and to pinpoint the high-stakes risks that could significantly influence the city's future. This exercise will enhance our understanding of the intricate decision-making processes involved in addressing climate-related issues and the importance of informed policy-making."
        },
        {
          "id": "climate-science-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will create a decision tradeoff matrix where different alternatives are evaluated based on their performance, reliability, cost, and implications for equity. By scoring these alternatives, learners will be better equipped to select the most effective intervention path. This structured approach helps ensure that decisions are made thoughtfully and with consideration for all stakeholders involved.\nContext recap: In this section, we will create a decision tradeoff matrix where different alternatives are evaluated based on their performance, reliability, cost, and implications for equity. By scoring these alternatives, learners will be better equipped to select the most effective intervention path. This structured approach helps ensure that decisions are made thoughtfully and with consideration for all stakeholders involved."
        },
        {
          "id": "climate-science-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize patterns of failure that have occurred in past climate interventions. By analyzing these failure modes, we can learn valuable lessons that will help us convert one-time incidents into reusable design safeguards. This proactive approach allows us to improve future strategies and avoid repeating mistakes.\nContext recap: In this recap, we will categorize patterns of failure that have occurred in past climate interventions. By analyzing these failure modes, we can learn valuable lessons that will help us convert one-time incidents into reusable design safeguards. This proactive approach allows us to improve future strategies and avoid repeating mistakes."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "climate-science-301-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "climate-science-301-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "climate-science-301-l05",
      "title": "Climate Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "climate-science-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive session, learners will set up a simulation scenario that includes clear assumptions about uncertainties and metrics for success related to their adaptation strategies. By configuring these elements, students will gain insights into how different factors can influence outcomes in climate scenarios, enhancing their understanding of the complexities involved.\nContext recap: In this interactive session, learners will set up a simulation scenario that includes clear assumptions about uncertainties and metrics for success related to their adaptation strategies. By configuring these elements, students will gain insights into how different factors can influence outcomes in climate scenarios, enhancing their understanding of the complexities involved."
        },
        {
          "id": "climate-science-301-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence gathered during the simulation. This will include checking for alignment with policy goals and identifying actions for improvement. This iterative process helps learners refine their strategies and ensures that they are making informed decisions based on the latest data.\nContext recap: At the end of each simulation round, we will conduct a review of the evidence gathered during the simulation. This will include checking for alignment with policy goals and identifying actions for improvement. This iterative process helps learners refine their strategies and ensures that they are making informed decisions based on the latest data."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-301-l05-act1",
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
          "id": "climate-science-301-l05-act2",
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
      "id": "climate-science-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "climate-science-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "climate-science-301-l06-q1",
          "text": "Which practice most strengthens earth energy balance in real deployments?",
          "skillId": "climate-science-301-skill-risk",
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
          "id": "climate-science-301-l06-q2",
          "text": "At level 301, Climate Science work should prioritize:",
          "skillId": "climate-science-301-skill-level",
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
          "id": "climate-science-301-l06-q3",
          "text": "What is the strongest indicator of healthy carbon cycle dynamics?",
          "skillId": "climate-science-301-skill-ops",
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
          "id": "climate-science-301-l06-q4",
          "text": "When improving impact attribution, which approach is most defensible?",
          "skillId": "climate-science-301-skill-eval",
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
          "id": "climate-science-301-l06-q5",
          "text": "A mature adaptation strategy strategy should include:",
          "skillId": "climate-science-301-skill-governance",
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
      "id": "climate-science-301-l07",
      "title": "Climate Science Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "climate-science-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this part of the lesson, learners will analyze the various stakeholders involved in climate policy. They will identify who benefits from certain policies, who might bear the risks, and how different policy choices can shape outcomes for various groups. This understanding is crucial for developing equitable and effective climate solutions.\nContext recap: In this part of the lesson, learners will analyze the various stakeholders involved in climate policy. They will identify who benefits from certain policies, who might bear the risks, and how different policy choices can shape outcomes for various groups. This understanding is crucial for developing equitable and effective climate solutions."
        },
        {
          "id": "climate-science-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this section, we will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. Understanding these links is essential for ensuring accountability in climate policy and for fostering trust among stakeholders. This knowledge empowers learners to advocate for responsible governance in climate action.\nContext recap: In this section, we will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. Understanding these links is essential for ensuring accountability in climate policy and for fostering trust among stakeholders. This knowledge empowers learners to advocate for responsible governance in climate action."
        },
        {
          "id": "climate-science-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying a project, it is important to complete a final checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our decisions are responsible and beneficial for everyone involved.\nContext recap: Before making any decisions about deploying a project, it is important to complete a final checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our decisions are responsible and beneficial for everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "climate-science-301-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "climate-science-301-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "climate-science-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "climate-science-301-l08",
      "title": "Climate Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "climate-science-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "climate-science-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges."
        },
        {
          "id": "climate-science-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "At the conclusion of this lesson, students will receive a defense preparation template. This template is designed to help them articulate their claims with supporting evidence and to clearly explain any trade-offs involved in their decisions. This exercise encourages critical thinking and helps students prepare for presenting their ideas effectively.\nContext recap: At the conclusion of this lesson, students will receive a defense preparation template. This template is designed to help them articulate their claims with supporting evidence and to clearly explain any trade-offs involved in their decisions. This exercise encourages critical thinking and helps students prepare for presenting their ideas effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "climate-science-301-l08-act1",
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
          "id": "climate-science-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
