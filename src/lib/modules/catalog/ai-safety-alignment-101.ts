import type { LearningModule } from "@/lib/modules/types";

export const AiSafetyAlignment101Module: LearningModule = {
  "id": "ai-safety-alignment-101",
  "title": "AI Safety and Alignment Foundations",
  "description": "Level 101 curriculum in AI Safety and Alignment, focused on risk modeling, alignment objectives, evaluation harnesses, and governance controls, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "AI Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai",
    "safety"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply risk modeling using clear assumptions and constraints",
    "Build repeatable workflows for alignment objectives with measurable checkpoints",
    "Evaluate evaluation harnesses outcomes against baseline and target metrics",
    "Use governance patterns to improve governance controls decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize AI Safety and Alignment methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "ai-safety-alignment-101-l01",
      "title": "AI Safety and Alignment Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a common vocabulary that is essential for understanding the key ideas behind AI Safety and Alignment. By establishing this shared language, we can better discuss the important topics related to the safe development of artificial intelligence. Additionally, we will define the specific boundaries within which AI systems operate, helping us understand their limitations and capabilities. Furthermore, we will investigate how risk modeling, which helps us identify potential dangers, interacts with alignment objectives, which are the goals we set to ensure AI behaves in ways that are beneficial and safe in real-world scenarios. This foundational knowledge will empower us to communicate effectively about the challenges and responsibilities that come with creating and managing AI technologies."
        },
        {
          "id": "ai-safety-alignment-101-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, learners will practice modeling causal paths, which are the connections between causes and effects in a system. They will identify hidden assumptions that may influence outcomes and apply checks to ensure constraints are met before suggesting any interventions. This process helps us think critically about how our actions can impact the system and ensures that we are making informed decisions.\nContext recap: In this section, learners will practice modeling causal paths, which are the connections between causes and effects in a system. They will identify hidden assumptions that may influence outcomes and apply checks to ensure constraints are met before suggesting any interventions. This process helps us think critically about how our actions can impact the system and ensures that we are making informed decisions."
        },
        {
          "id": "ai-safety-alignment-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a methodical approach to evidence gathering, where every claim we make is supported by observable indicators. We will learn how to connect our claims to expected uncertainties, which helps us understand the reliability of our information. By focusing on evidence, we can make better decisions and reduce the chances of errors in our assessments.\nContext recap: This module introduces a methodical approach to evidence gathering, where every claim we make is supported by observable indicators. We will learn how to connect our claims to expected uncertainties, which helps us understand the reliability of our information. By focusing on evidence, we can make better decisions and reduce the chances of errors in our assessments."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-101-l01-f1",
          "front": "risk modeling",
          "back": "A core mechanism in AI Safety and Alignment requiring explicit assumptions and measurable controls."
        },
        {
          "id": "ai-safety-alignment-101-l01-f2",
          "front": "alignment objectives",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "ai-safety-alignment-101-l01-f3",
          "front": "evaluation harnesses",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l02",
      "title": "AI Safety and Alignment Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this engaging interactive lab, students will have the opportunity to create a method sequence that focuses on key vocabulary, important mechanisms, and basic analysis techniques. Once they have constructed their sequence, they will put each step to the test by examining how it performs in uncertain situations. This hands-on practice is designed to help students grasp the significance of being well-prepared and flexible when it comes to ensuring safety in artificial intelligence. By understanding these concepts, learners will be better equipped to navigate the complexities of AI systems and their potential challenges."
        },
        {
          "id": "ai-safety-alignment-101-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will assess our readiness by mapping out ownership, establishing a cadence for checkpoints, identifying rollback triggers, and maintaining evidence logs. These elements are crucial for ensuring that our systems are prepared for any challenges that may arise, and they help us keep track of our progress and decisions.\nContext recap: In this recap, we will assess our readiness by mapping out ownership, establishing a cadence for checkpoints, identifying rollback triggers, and maintaining evidence logs. These elements are crucial for ensuring that our systems are prepared for any challenges that may arise, and they help us keep track of our progress and decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-101-l02-act1",
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
          "id": "ai-safety-alignment-101-l02-act2",
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
      "id": "ai-safety-alignment-101-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-101-l03-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-101-skill-risk",
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
          "id": "ai-safety-alignment-101-l03-q2",
          "text": "At level 101, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-101-skill-level",
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
          "id": "ai-safety-alignment-101-l03-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-101-skill-ops",
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
          "id": "ai-safety-alignment-101-l03-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-101-skill-eval",
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
          "id": "ai-safety-alignment-101-l03-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-101-skill-governance",
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
      "id": "ai-safety-alignment-101-l04",
      "title": "AI Safety and Alignment Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we will dive into the role of an AI assistant that is designed to help students in their learning journey. However, this AI sometimes gives answers that sound convincing but are not always correct. As learners, it will be your job to distinguish between what is true and what is just an assumption. We will also discuss the potential risks that can arise from relying on inaccurate information, especially in important situations. This activity will enhance our understanding of how AI makes decisions and highlight the need for critical thinking when we assess the information provided by AI systems."
        },
        {
          "id": "ai-safety-alignment-101-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will use a decision tradeoff matrix to evaluate different alternatives based on their performance, reliability, cost, and fairness. By scoring each option, learners will be able to make informed choices about which intervention path to take. This method emphasizes the importance of considering multiple factors when making decisions in AI development.\nContext recap: In this section, we will use a decision tradeoff matrix to evaluate different alternatives based on their performance, reliability, cost, and fairness. By scoring each option, learners will be able to make informed choices about which intervention path to take. This method emphasizes the importance of considering multiple factors when making decisions in AI development."
        },
        {
          "id": "ai-safety-alignment-101-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize failure patterns to transform isolated incidents into reusable design safeguards. By learning from past mistakes, we can create better systems that are less likely to fail in the future. This approach encourages a culture of continuous improvement and resilience in AI design.\nContext recap: In this recap, we will categorize failure patterns to transform isolated incidents into reusable design safeguards. By learning from past mistakes, we can create better systems that are less likely to fail in the future. This approach encourages a culture of continuous improvement and resilience in AI design."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "ai-safety-alignment-101-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "ai-safety-alignment-101-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l05",
      "title": "AI Safety and Alignment Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive session, learners will set up a scenario model that includes clear assumptions about uncertainty and defines success metrics linked to governance controls. This setup is essential for understanding how different factors can influence outcomes and helps prepare learners for real-world applications of AI.\nContext recap: In this interactive session, learners will set up a scenario model that includes clear assumptions about uncertainty and defines success metrics linked to governance controls. This setup is essential for understanding how different factors can influence outcomes and helps prepare learners for real-world applications of AI."
        },
        {
          "id": "ai-safety-alignment-101-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence, check for alignment with policies, and identify actions for improvement. This process ensures that we are learning from each simulation and making necessary adjustments to enhance our understanding and effectiveness in AI safety.\nContext recap: At the end of each simulation round, we will conduct a review of the evidence, check for alignment with policies, and identify actions for improvement. This process ensures that we are learning from each simulation and making necessary adjustments to enhance our understanding and effectiveness in AI safety."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-101-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances risk modeling and governance controls.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "ai-safety-alignment-101-l05-act2",
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
      "id": "ai-safety-alignment-101-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-101-l06-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-101-skill-risk",
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
          "id": "ai-safety-alignment-101-l06-q2",
          "text": "At level 101, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-101-skill-level",
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
          "id": "ai-safety-alignment-101-l06-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-101-skill-ops",
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
          "id": "ai-safety-alignment-101-l06-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-101-skill-eval",
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
          "id": "ai-safety-alignment-101-l06-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-101-skill-governance",
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
      "id": "ai-safety-alignment-101-l07",
      "title": "AI Safety and Alignment Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, learners will analyze stakeholders involved in AI systems to identify who benefits from these technologies, who may face risks, and how policy decisions can affect different groups. Understanding these dynamics is crucial for developing fair and responsible AI solutions.\nContext recap: In this section, learners will analyze stakeholders involved in AI systems to identify who benefits from these technologies, who may face risks, and how policy decisions can affect different groups. Understanding these dynamics is crucial for developing fair and responsible AI solutions."
        },
        {
          "id": "ai-safety-alignment-101-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this part of the lesson, we will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This understanding is vital for ensuring accountability in AI systems and fostering trust among users and stakeholders.\nContext recap: In this part of the lesson, we will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This understanding is vital for ensuring accountability in AI systems and fostering trust among users and stakeholders."
        },
        {
          "id": "ai-safety-alignment-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying artificial intelligence systems, it is important to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our decisions are responsible and beneficial to everyone involved.\nContext recap: Before making any decisions about deploying artificial intelligence systems, it is important to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our decisions are responsible and beneficial to everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-101-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "ai-safety-alignment-101-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "ai-safety-alignment-101-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l08",
      "title": "AI Safety and Alignment Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish success metrics to measure progress, and set up governance checkpoints to ensure everything stays on track. This exercise helps students think critically about their projects and prepares them for real-world challenges.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish success metrics to measure progress, and set up governance checkpoints to ensure everything stays on track. This exercise helps students think critically about their projects and prepares them for real-world challenges."
        },
        {
          "id": "ai-safety-alignment-101-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, students will work with a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any trade-offs they make. This process encourages critical thinking and helps students articulate their ideas clearly and effectively.\nContext recap: To conclude the lesson, students will work with a defense preparation template. This template will guide them in making claims that are supported by evidence and require them to explain the reasoning behind any trade-offs they make. This process encourages critical thinking and helps students articulate their ideas clearly and effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-101-l08-act1",
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
          "id": "ai-safety-alignment-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
