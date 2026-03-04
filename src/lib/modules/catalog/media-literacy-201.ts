import type { LearningModule } from "@/lib/modules/types";

export const MediaLiteracy201Module: LearningModule = {
  "id": "media-literacy-201",
  "title": "Media Literacy Applied Practice",
  "description": "Level 201 curriculum in Media Literacy, focused on source credibility, narrative framing, misinformation analysis, and civic decision impact, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Media Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "communication",
    "critical-thinking"
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
    "Explain and apply source credibility using clear assumptions and constraints",
    "Build repeatable workflows for narrative framing with measurable checkpoints",
    "Evaluate misinformation analysis outcomes against baseline and target metrics",
    "Use governance patterns to improve civic decision impact decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Media Literacy methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "media-literacy-201-l01",
      "title": "Media Literacy Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "media-literacy-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a shared vocabulary that will enhance our understanding of Media Literacy. We will clearly define the boundaries that guide our discussions and learning. Additionally, we will investigate how the credibility of various sources and the way stories are presented can shape our perceptions in real-world contexts. By doing this, we aim to become more thoughtful and critical consumers of media, enabling us to navigate information more effectively and make informed decisions.\nContext recap: In this lesson, we will work together to build a shared vocabulary that will enhance our understanding of Media Literacy. We will clearly define the boundaries that guide our discussions and learning. Additionally, we will investigate how the credibility of various sources and the way stories are presented can shape our perceptions in real-world contexts. By doing this, we aim to become more thoughtful and critical consumers of media, enabling us to navigate information more effectively and make informed decisions."
        },
        {
          "id": "media-literacy-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, learners will practice modeling causal paths, which means they will learn how to trace the connections between different events and outcomes. They will also identify hidden assumptions that may not be immediately obvious and apply checks to understand any constraints before suggesting possible interventions. This process will help them think critically about cause and effect in media narratives.\nContext recap: In this section, learners will practice modeling causal paths, which means they will learn how to trace the connections between different events and outcomes. They will also identify hidden assumptions that may not be immediately obvious and apply checks to understand any constraints before suggesting possible interventions. This process will help them think critically about cause and effect in media narratives."
        },
        {
          "id": "media-literacy-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence. Learners will discover how to connect each claim they encounter to observable indicators, which are pieces of evidence that can be seen or measured. They will also learn to recognize the uncertainty that can come with different claims, helping them to approach information with a critical mindset.\nContext recap: This module introduces a workflow that prioritizes evidence. Learners will discover how to connect each claim they encounter to observable indicators, which are pieces of evidence that can be seen or measured. They will also learn to recognize the uncertainty that can come with different claims, helping them to approach information with a critical mindset."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-201-l01-f1",
          "front": "source credibility",
          "back": "A core mechanism in Media Literacy requiring explicit assumptions and measurable controls."
        },
        {
          "id": "media-literacy-201-l01-f2",
          "front": "narrative framing",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "media-literacy-201-l01-f3",
          "front": "misinformation analysis",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "media-literacy-201-l02",
      "title": "Media Literacy Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive practice, learners will construct a sequence of methods that are optimized for effective execution. They will focus on ensuring that their workflow is reliable and that they can interpret various scenarios accurately. After building their method sequence, they will stress-test each step to see how it holds up under uncertain conditions, which will enhance their problem-solving skills.\nContext recap: In this interactive practice, learners will construct a sequence of methods that are optimized for effective execution. They will focus on ensuring that their workflow is reliable and that they can interpret various scenarios accurately. After building their method sequence, they will stress-test each step to see how it holds up under uncertain conditions, which will enhance their problem-solving skills."
        },
        {
          "id": "media-literacy-201-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, learners will assess their readiness by mapping out who is responsible for each part of the process. They will check the timing of their checkpoints, identify triggers for rolling back decisions if necessary, and maintain evidence logs to track their findings. This will help them ensure that they are prepared for any challenges that may arise.\nContext recap: In this recap, learners will assess their readiness by mapping out who is responsible for each part of the process. They will check the timing of their checkpoints, identify triggers for rolling back decisions if necessary, and maintain evidence logs to track their findings. This will help them ensure that they are prepared for any challenges that may arise."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-201-l02-act1",
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
          "id": "media-literacy-201-l02-act2",
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
      "id": "media-literacy-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-201-l03-q1",
          "text": "Which practice most strengthens source credibility in real deployments?",
          "skillId": "media-literacy-201-skill-risk",
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
          "id": "media-literacy-201-l03-q2",
          "text": "At level 201, Media Literacy work should prioritize:",
          "skillId": "media-literacy-201-skill-level",
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
          "id": "media-literacy-201-l03-q3",
          "text": "What is the strongest indicator of healthy narrative framing?",
          "skillId": "media-literacy-201-skill-ops",
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
          "id": "media-literacy-201-l03-q4",
          "text": "When improving misinformation analysis, which approach is most defensible?",
          "skillId": "media-literacy-201-skill-eval",
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
          "id": "media-literacy-201-l03-q5",
          "text": "A mature civic decision impact strategy should include:",
          "skillId": "media-literacy-201-skill-governance",
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
      "id": "media-literacy-201-l04",
      "title": "Media Literacy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we will explore a fast-paced public event that has generated various media narratives. These narratives can significantly affect how individuals and communities respond to the situation. As learners, your goal will be to critically analyze the information presented, distinguishing between solid evidence and personal assumptions. Additionally, you will identify the potential high-stakes risks that arise from these narratives. This exercise is designed to deepen your understanding of how media influences public perception and behavior, encouraging you to think critically about the information you consume."
        },
        {
          "id": "media-literacy-201-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, learners will evaluate different alternatives using a decision tradeoff matrix. They will score each option based on its performance, reliability, cost, and fairness implications. This structured approach will guide them in selecting the best intervention path, encouraging thoughtful decision-making.\nContext recap: In this section, learners will evaluate different alternatives using a decision tradeoff matrix. They will score each option based on its performance, reliability, cost, and fairness implications. This structured approach will guide them in selecting the best intervention path, encouraging thoughtful decision-making."
        },
        {
          "id": "media-literacy-201-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, learners will categorize patterns of failure to transform isolated incidents into valuable lessons. By understanding these failure modes, they can create reusable design safeguards that help prevent similar issues in the future, fostering a proactive approach to problem-solving.\nContext recap: In this recap, learners will categorize patterns of failure to transform isolated incidents into valuable lessons. By understanding these failure modes, they can create reusable design safeguards that help prevent similar issues in the future, fostering a proactive approach to problem-solving."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-201-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "media-literacy-201-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "media-literacy-201-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "media-literacy-201-l05",
      "title": "Media Literacy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, learners will set up a scenario model that includes clear assumptions about uncertainty and metrics for success. These metrics will be linked to the impact of civic decisions, allowing learners to understand how their choices can affect the community and society at large.\nContext recap: In this interactive practice, learners will set up a scenario model that includes clear assumptions about uncertainty and metrics for success. These metrics will be linked to the impact of civic decisions, allowing learners to understand how their choices can affect the community and society at large."
        },
        {
          "id": "media-literacy-201-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, learners will engage in a review process. They will examine the evidence gathered, check for alignment with policy goals, and identify actions for improvement. This reflective practice will help them learn from their experiences and enhance their decision-making skills.\nContext recap: At the end of each simulation round, learners will engage in a review process. They will examine the evidence gathered, check for alignment with policy goals, and identify actions for improvement. This reflective practice will help them learn from their experiences and enhance their decision-making skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-201-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances source credibility and civic decision impact.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "media-literacy-201-l05-act2",
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
      "id": "media-literacy-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-201-l06-q1",
          "text": "Which practice most strengthens source credibility in real deployments?",
          "skillId": "media-literacy-201-skill-risk",
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
          "id": "media-literacy-201-l06-q2",
          "text": "At level 201, Media Literacy work should prioritize:",
          "skillId": "media-literacy-201-skill-level",
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
          "id": "media-literacy-201-l06-q3",
          "text": "What is the strongest indicator of healthy narrative framing?",
          "skillId": "media-literacy-201-skill-ops",
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
          "id": "media-literacy-201-l06-q4",
          "text": "When improving misinformation analysis, which approach is most defensible?",
          "skillId": "media-literacy-201-skill-eval",
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
          "id": "media-literacy-201-l06-q5",
          "text": "A mature civic decision impact strategy should include:",
          "skillId": "media-literacy-201-skill-governance",
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
      "id": "media-literacy-201-l07",
      "title": "Media Literacy Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, learners will conduct a stakeholder analysis to identify who benefits from certain decisions, who might face risks, and how different policy choices can shape outcomes for various groups. This understanding will help them appreciate the complexity of media impacts on society.\nContext recap: In this section, learners will conduct a stakeholder analysis to identify who benefits from certain decisions, who might face risks, and how different policy choices can shape outcomes for various groups. This understanding will help them appreciate the complexity of media impacts on society."
        },
        {
          "id": "media-literacy-201-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this concept segment, learners will explore governance and accountability. They will learn how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This knowledge will empower them to understand how policies can be structured to ensure fairness and accountability.\nContext recap: In this concept segment, learners will explore governance and accountability. They will learn how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This knowledge will empower them to understand how policies can be structured to ensure fairness and accountability."
        },
        {
          "id": "media-literacy-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying media projects, it is essential to use a comprehensive checklist. This checklist should include important factors such as legal considerations, ethical standards, technical requirements, and the potential impact on users. By carefully evaluating these criteria, we can ensure that our media practices are responsible and beneficial to the community.\nContext recap: Before making any decisions about deploying media projects, it is essential to use a comprehensive checklist. This checklist should include important factors such as legal considerations, ethical standards, technical requirements, and the potential impact on users. By carefully evaluating these criteria, we can ensure that our media practices are responsible and beneficial to the community."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-201-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "media-literacy-201-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "media-literacy-201-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "media-literacy-201-l08",
      "title": "Media Literacy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges."
        },
        {
          "id": "media-literacy-201-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, students will work with a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any trade-offs they make. This exercise encourages critical thinking and helps students articulate their ideas clearly and convincingly.\nContext recap: To conclude the lesson, students will work with a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any trade-offs they make. This exercise encourages critical thinking and helps students articulate their ideas clearly and convincingly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-201-l08-act1",
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
          "id": "media-literacy-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
