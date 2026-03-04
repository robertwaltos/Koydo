import type { LearningModule } from "@/lib/modules/types";

export const MediaLiteracy301Module: LearningModule = {
  "id": "media-literacy-301",
  "title": "Media Literacy Systems and Governance",
  "description": "Level 301 curriculum in Media Literacy, focused on source credibility, narrative framing, misinformation analysis, and civic decision impact, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Media Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "communication",
    "critical-thinking"
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
    "Explain and apply source credibility using clear assumptions and constraints",
    "Build repeatable workflows for narrative framing with measurable checkpoints",
    "Evaluate misinformation analysis outcomes against baseline and target metrics",
    "Use governance patterns to improve civic decision impact decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Media Literacy methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "media-literacy-301-l01",
      "title": "Media Literacy Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "media-literacy-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a shared vocabulary that enhances our understanding of Media Literacy. We will clearly define the boundaries that guide our discussions and examine how the credibility of different sources and the framing of narratives influence our perceptions in real-world contexts. By doing this, we aim to improve our ability to communicate effectively about media and its significant impact on society. This understanding will empower us to critically analyze the information we encounter every day.\nContext recap: In this lesson, we will work together to build a shared vocabulary that enhances our understanding of Media Literacy. We will clearly define the boundaries that guide our discussions and examine how the credibility of different sources and the framing of narratives influence our perceptions in real-world contexts. By doing this, we aim to improve our ability to communicate effectively about media and its significant impact on society. This understanding will empower us to critically analyze the information we encounter every day."
        },
        {
          "id": "media-literacy-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this part of the lesson, learners will explore how to model causal paths, which are the connections between different events or actions. They will also identify hidden assumptions that might influence their thinking. Before suggesting any changes or interventions, students will apply checks to understand the constraints they face. This process encourages critical thinking and careful analysis.\nContext recap: In this part of the lesson, learners will explore how to model causal paths, which are the connections between different events or actions. They will also identify hidden assumptions that might influence their thinking. Before suggesting any changes or interventions, students will apply checks to understand the constraints they face. This process encourages critical thinking and careful analysis."
        },
        {
          "id": "media-literacy-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a workflow that prioritizes evidence. Each claim we make will be connected to observable indicators, which are pieces of evidence we can see or measure. Additionally, we will discuss the expected uncertainty that comes with these claims. This approach helps us to think critically and base our conclusions on solid evidence.\nContext recap: This module introduces a workflow that prioritizes evidence. Each claim we make will be connected to observable indicators, which are pieces of evidence we can see or measure. Additionally, we will discuss the expected uncertainty that comes with these claims. This approach helps us to think critically and base our conclusions on solid evidence."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-301-l01-f1",
          "front": "source credibility",
          "back": "A core mechanism in Media Literacy requiring explicit assumptions and measurable controls."
        },
        {
          "id": "media-literacy-301-l01-f2",
          "front": "narrative framing",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "media-literacy-301-l01-f3",
          "front": "misinformation analysis",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "media-literacy-301-l02",
      "title": "Media Literacy Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods that are designed to optimize trade-offs within systems. They will consider metrics architecture, which is how we measure success, and make informed governance decisions. After building their method sequence, students will stress-test each step to see how it holds up under uncertainty, ensuring they are prepared for real-world challenges.\nContext recap: In this interactive lab, learners will construct a sequence of methods that are designed to optimize trade-offs within systems. They will consider metrics architecture, which is how we measure success, and make informed governance decisions. After building their method sequence, students will stress-test each step to see how it holds up under uncertainty, ensuring they are prepared for real-world challenges."
        },
        {
          "id": "media-literacy-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will assess our readiness by mapping out who is responsible for each part of our project. We will establish a schedule for checkpoints, identify triggers for rolling back decisions if necessary, and maintain evidence logs to track our progress. This systematic approach ensures that we are prepared and accountable throughout our process.\nContext recap: In this recap, we will assess our readiness by mapping out who is responsible for each part of our project. We will establish a schedule for checkpoints, identify triggers for rolling back decisions if necessary, and maintain evidence logs to track our progress. This systematic approach ensures that we are prepared and accountable throughout our process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-301-l02-act1",
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
          "id": "media-literacy-301-l02-act2",
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
      "id": "media-literacy-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-301-l03-q1",
          "text": "Which practice most strengthens source credibility in real deployments?",
          "skillId": "media-literacy-301-skill-risk",
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
          "id": "media-literacy-301-l03-q2",
          "text": "At level 301, Media Literacy work should prioritize:",
          "skillId": "media-literacy-301-skill-level",
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
          "id": "media-literacy-301-l03-q3",
          "text": "What is the strongest indicator of healthy narrative framing?",
          "skillId": "media-literacy-301-skill-ops",
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
          "id": "media-literacy-301-l03-q4",
          "text": "When improving misinformation analysis, which approach is most defensible?",
          "skillId": "media-literacy-301-skill-eval",
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
          "id": "media-literacy-301-l03-q5",
          "text": "A mature civic decision impact strategy should include:",
          "skillId": "media-literacy-301-skill-governance",
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
      "id": "media-literacy-301-l04",
      "title": "Media Literacy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will explore a fast-paced public event that has generated various media narratives, each telling a different story about what is happening. As we dive into this analysis, learners will have the opportunity to practice their critical thinking skills by distinguishing between what is factual evidence and what are mere assumptions. Additionally, they will identify potential high-stakes risks that may arise from these conflicting narratives. This exercise is designed to enhance their understanding of how media influences public perception and behavior, emphasizing the importance of being a discerning consumer of information."
        },
        {
          "id": "media-literacy-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will create a decision tradeoff matrix where we evaluate different alternatives based on various criteria such as performance, reliability, cost, and equity implications. By scoring these alternatives, learners will be better equipped to select the most effective intervention path. This structured approach helps in making informed decisions.\nContext recap: In this section, we will create a decision tradeoff matrix where we evaluate different alternatives based on various criteria such as performance, reliability, cost, and equity implications. By scoring these alternatives, learners will be better equipped to select the most effective intervention path. This structured approach helps in making informed decisions."
        },
        {
          "id": "media-literacy-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize patterns of failure that we observe in our case studies. By analyzing these patterns, we can transform isolated incidents into reusable design safeguards. This practice not only helps us learn from past mistakes but also improves our future decision-making processes.\nContext recap: In this recap, we will categorize patterns of failure that we observe in our case studies. By analyzing these patterns, we can transform isolated incidents into reusable design safeguards. This practice not only helps us learn from past mistakes but also improves our future decision-making processes."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "media-literacy-301-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "media-literacy-301-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "media-literacy-301-l05",
      "title": "Media Literacy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation, learners will set up a scenario model that includes clear assumptions about uncertainty and metrics for success. These metrics will be directly linked to the impact of civic decisions. This hands-on experience allows students to apply theoretical knowledge in a practical context.\nContext recap: In this interactive simulation, learners will set up a scenario model that includes clear assumptions about uncertainty and metrics for success. These metrics will be directly linked to the impact of civic decisions. This hands-on experience allows students to apply theoretical knowledge in a practical context."
        },
        {
          "id": "media-literacy-301-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence collected during the simulation. This will include checking for alignment with our policy goals and identifying actions for improvement. This iterative process encourages continuous learning and adaptation.\nContext recap: At the end of each simulation round, we will conduct a review of the evidence collected during the simulation. This will include checking for alignment with our policy goals and identifying actions for improvement. This iterative process encourages continuous learning and adaptation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-301-l05-act1",
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
          "id": "media-literacy-301-l05-act2",
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
      "id": "media-literacy-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-301-l06-q1",
          "text": "Which practice most strengthens source credibility in real deployments?",
          "skillId": "media-literacy-301-skill-risk",
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
          "id": "media-literacy-301-l06-q2",
          "text": "At level 301, Media Literacy work should prioritize:",
          "skillId": "media-literacy-301-skill-level",
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
          "id": "media-literacy-301-l06-q3",
          "text": "What is the strongest indicator of healthy narrative framing?",
          "skillId": "media-literacy-301-skill-ops",
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
          "id": "media-literacy-301-l06-q4",
          "text": "When improving misinformation analysis, which approach is most defensible?",
          "skillId": "media-literacy-301-skill-eval",
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
          "id": "media-literacy-301-l06-q5",
          "text": "A mature civic decision impact strategy should include:",
          "skillId": "media-literacy-301-skill-governance",
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
      "id": "media-literacy-301-l07",
      "title": "Media Literacy Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will analyze the various stakeholders involved in media decisions. They will identify who benefits from certain policies, who may face risks, and how different policy choices can affect outcomes for various groups. This understanding is crucial for responsible media engagement.\nContext recap: In this lesson, learners will analyze the various stakeholders involved in media decisions. They will identify who benefits from certain policies, who may face risks, and how different policy choices can affect outcomes for various groups. This understanding is crucial for responsible media engagement."
        },
        {
          "id": "media-literacy-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this section, we will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. Understanding these connections is essential for ensuring accountability and trust in media systems.\nContext recap: In this section, we will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. Understanding these connections is essential for ensuring accountability and trust in media systems.\nWhy this matters: Governance and Accountability helps learners in Media Studies connect ideas from Media Literacy Systems and Governance to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "media-literacy-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying media projects, it is important to use a comprehensive checklist. This checklist should include considerations related to legal requirements, ethical standards, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our media practices are responsible and beneficial to the community.\nContext recap: Before making any decisions about deploying media projects, it is important to use a comprehensive checklist. This checklist should include considerations related to legal requirements, ethical standards, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our media practices are responsible and beneficial to the community."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-301-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "media-literacy-301-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "media-literacy-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "media-literacy-301-l08",
      "title": "Media Literacy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set up governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world challenges."
        },
        {
          "id": "media-literacy-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, students will work with a defense template that guides them in presenting their projects. This template will require them to support their claims with evidence and to clearly explain any trade-offs they have considered. This exercise encourages thoughtful reasoning and helps students articulate their ideas effectively.\nContext recap: To conclude the lesson, students will work with a defense template that guides them in presenting their projects. This template will require them to support their claims with evidence and to clearly explain any trade-offs they have considered. This exercise encourages thoughtful reasoning and helps students articulate their ideas effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-301-l08-act1",
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
          "id": "media-literacy-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
