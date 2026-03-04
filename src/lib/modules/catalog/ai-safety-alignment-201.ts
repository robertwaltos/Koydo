import type { LearningModule } from "@/lib/modules/types";

export const AiSafetyAlignment201Module: LearningModule = {
  "id": "ai-safety-alignment-201",
  "title": "AI Safety and Alignment Applied Practice",
  "description": "Level 201 curriculum in AI Safety and Alignment, focused on risk modeling, alignment objectives, evaluation harnesses, and governance controls, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "AI Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai",
    "safety"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "ai-safety-alignment-201-l01",
      "title": "AI Safety and Alignment Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a common vocabulary that is essential for understanding the important ideas surrounding AI Safety and Alignment. This vocabulary will help us discuss these concepts clearly and effectively. We will also define the specific boundaries within which AI systems operate, which is crucial for understanding their limitations and capabilities. Furthermore, we will delve into how risk modeling interacts with alignment objectives in real-world situations, helping us see how these elements work together to ensure that AI technologies are safe and ethical. By the end of this lesson, you will have a better grasp of how to communicate about the safety and ethical considerations of AI technologies, which is vital in today's rapidly evolving digital landscape."
        },
        {
          "id": "ai-safety-alignment-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this part of the lesson, learners will engage in modeling causal paths, which means they will trace the connections between different events and outcomes. They will also identify any hidden assumptions that might affect their understanding. Before suggesting any interventions or changes, students will apply checks to constraints, ensuring that their ideas are grounded in reality and are likely to be effective.\nContext recap: In this part of the lesson, learners will engage in modeling causal paths, which means they will trace the connections between different events and outcomes. They will also identify any hidden assumptions that might affect their understanding. Before suggesting any interventions or changes, students will apply checks to constraints, ensuring that their ideas are grounded in reality and are likely to be effective."
        },
        {
          "id": "ai-safety-alignment-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a methodical approach called an evidence-first workflow. In this approach, every claim or statement made is directly linked to observable indicators, which are pieces of evidence that can be measured or seen. Additionally, we will discuss the concept of expected uncertainty, which helps us understand that not all outcomes can be predicted with complete accuracy. This focus on evidence is crucial for making informed decisions.\nContext recap: This module introduces a methodical approach called an evidence-first workflow. In this approach, every claim or statement made is directly linked to observable indicators, which are pieces of evidence that can be measured or seen. Additionally, we will discuss the concept of expected uncertainty, which helps us understand that not all outcomes can be predicted with complete accuracy. This focus on evidence is crucial for making informed decisions."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-201-l01-f1",
          "front": "risk modeling",
          "back": "A core mechanism in AI Safety and Alignment requiring explicit assumptions and measurable controls."
        },
        {
          "id": "ai-safety-alignment-201-l01-f2",
          "front": "alignment objectives",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "ai-safety-alignment-201-l01-f3",
          "front": "evaluation harnesses",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l02",
      "title": "AI Safety and Alignment Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct a sequence of methods that are optimized for effective execution. This means they will design a workflow that is reliable and can be interpreted in various scenarios. After building their method sequence, students will stress-test each step to see how it holds up under conditions of uncertainty, ensuring that their methods are robust and adaptable.\nContext recap: In this interactive lab, learners will construct a sequence of methods that are optimized for effective execution. This means they will design a workflow that is reliable and can be interpreted in various scenarios. After building their method sequence, students will stress-test each step to see how it holds up under conditions of uncertainty, ensuring that their methods are robust and adaptable."
        },
        {
          "id": "ai-safety-alignment-201-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure that our methods are ready for implementation, we will conduct operational readiness checks. This involves mapping out who is responsible for each part of the process, determining how often we need to check our progress, identifying triggers that would prompt us to revert to a previous state, and maintaining logs of evidence. These checks help us confirm that everything is in place before we proceed.\nContext recap: To ensure that our methods are ready for implementation, we will conduct operational readiness checks. This involves mapping out who is responsible for each part of the process, determining how often we need to check our progress, identifying triggers that would prompt us to revert to a previous state, and maintaining logs of evidence. These checks help us confirm that everything is in place before we proceed."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-201-l02-act1",
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
          "id": "ai-safety-alignment-201-l02-act2",
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
      "id": "ai-safety-alignment-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-201-l03-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-201-skill-risk",
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
          "id": "ai-safety-alignment-201-l03-q2",
          "text": "At level 201, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-201-skill-level",
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
          "id": "ai-safety-alignment-201-l03-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-201-skill-ops",
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
          "id": "ai-safety-alignment-201-l03-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-201-skill-eval",
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
          "id": "ai-safety-alignment-201-l03-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-201-skill-governance",
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
      "id": "ai-safety-alignment-201-l04",
      "title": "AI Safety and Alignment Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we will delve into the use of an AI assistant in schools and other educational environments. This AI is intended to help students by providing persuasive and informative answers to their questions. However, there are times when it produces incorrect or even made-up information. As learners, it is crucial for you to develop the skills to distinguish between solid evidence and mere assumptions. Additionally, you will need to recognize the serious risks that can arise from relying on inaccurate information. By analyzing this case, we will gain a deeper understanding of why accuracy and reliability are vital in AI systems, especially in education, where the stakes can be quite high."
        },
        {
          "id": "ai-safety-alignment-201-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will use a decision tradeoff matrix to evaluate different alternatives. Each option will be scored based on several criteria, including performance, reliability, cost, and the implications for equity among different groups. This systematic approach will help us make informed decisions about which intervention path to choose, ensuring that we consider all relevant factors.\nContext recap: In this section, we will use a decision tradeoff matrix to evaluate different alternatives. Each option will be scored based on several criteria, including performance, reliability, cost, and the implications for equity among different groups. This systematic approach will help us make informed decisions about which intervention path to choose, ensuring that we consider all relevant factors."
        },
        {
          "id": "ai-safety-alignment-201-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "We will categorize different failure patterns that we observe in AI systems. By doing this, we can learn from one-off incidents and develop reusable design safeguards. This means that instead of viewing failures as isolated events, we will use them as opportunities to improve our designs and prevent similar issues in the future.\nContext recap: We will categorize different failure patterns that we observe in AI systems. By doing this, we can learn from one-off incidents and develop reusable design safeguards. This means that instead of viewing failures as isolated events, we will use them as opportunities to improve our designs and prevent similar issues in the future."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-201-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "ai-safety-alignment-201-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "ai-safety-alignment-201-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l05",
      "title": "AI Safety and Alignment Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation studio, learners will set up a scenario model that includes clear assumptions about uncertainties and defines success metrics that are linked to governance controls. This setup will allow students to explore how different factors influence the outcomes of their simulations and understand the importance of governance in AI systems.\nContext recap: In this interactive simulation studio, learners will set up a scenario model that includes clear assumptions about uncertainties and defines success metrics that are linked to governance controls. This setup will allow students to explore how different factors influence the outcomes of their simulations and understand the importance of governance in AI systems."
        },
        {
          "id": "ai-safety-alignment-201-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a decision review loop. This involves reviewing the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This reflective process is essential for continuous learning and adaptation in our approach to AI safety and alignment.\nContext recap: At the end of each simulation round, we will conduct a decision review loop. This involves reviewing the evidence gathered during the simulation, checking for alignment with established policies, and identifying actions for improvement. This reflective process is essential for continuous learning and adaptation in our approach to AI safety and alignment."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-201-l05-act1",
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
          "id": "ai-safety-alignment-201-l05-act2",
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
      "id": "ai-safety-alignment-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-201-l06-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-201-skill-risk",
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
          "id": "ai-safety-alignment-201-l06-q2",
          "text": "At level 201, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-201-skill-level",
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
          "id": "ai-safety-alignment-201-l06-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-201-skill-ops",
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
          "id": "ai-safety-alignment-201-l06-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-201-skill-eval",
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
          "id": "ai-safety-alignment-201-l06-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-201-skill-governance",
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
      "id": "ai-safety-alignment-201-l07",
      "title": "AI Safety and Alignment Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will perform a stakeholder analysis to identify who benefits from AI systems, who might bear the risks, and how different policy choices can shape outcomes for various groups. Understanding these dynamics is crucial for ensuring that AI technologies are developed and implemented in a fair and responsible manner.\nContext recap: In this lesson, learners will perform a stakeholder analysis to identify who benefits from AI systems, who might bear the risks, and how different policy choices can shape outcomes for various groups. Understanding these dynamics is crucial for ensuring that AI technologies are developed and implemented in a fair and responsible manner."
        },
        {
          "id": "ai-safety-alignment-201-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore governance and accountability mechanisms that are essential for managing AI systems. These mechanisms are linked to measurable controls, which help ensure transparency and establish clear pathways for remediation when issues arise. Understanding governance is vital for maintaining trust and responsibility in AI technologies.\nContext recap: We will explore governance and accountability mechanisms that are essential for managing AI systems. These mechanisms are linked to measurable controls, which help ensure transparency and establish clear pathways for remediation when issues arise. Understanding governance is vital for maintaining trust and responsibility in AI technologies."
        },
        {
          "id": "ai-safety-alignment-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before we make any decisions about deploying artificial intelligence systems, it is crucial to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By carefully evaluating these criteria, we can ensure that our deployment decisions are responsible and beneficial for everyone involved.\nContext recap: Before we make any decisions about deploying artificial intelligence systems, it is crucial to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By carefully evaluating these criteria, we can ensure that our deployment decisions are responsible and beneficial for everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-201-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "ai-safety-alignment-201-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "ai-safety-alignment-201-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l08",
      "title": "AI Safety and Alignment Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, you will create a detailed capstone charter that outlines the main objectives of your project. This charter will also identify potential risks, establish metrics for measuring success, and include governance checkpoints to ensure everything stays on track. By drafting this charter, you will gain a clearer understanding of your project and how to manage it effectively.\nContext recap: In this activity, you will create a detailed capstone charter that outlines the main objectives of your project. This charter will also identify potential risks, establish metrics for measuring success, and include governance checkpoints to ensure everything stays on track. By drafting this charter, you will gain a clearer understanding of your project and how to manage it effectively."
        },
        {
          "id": "ai-safety-alignment-201-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "At the conclusion of this lesson, you will receive a defense preparation template. This template will guide you in making claims that are supported by evidence and will require you to explain any trade-offs you have considered. This process will help you articulate your reasoning clearly and prepare you for discussions about your project.\nContext recap: At the conclusion of this lesson, you will receive a defense preparation template. This template will guide you in making claims that are supported by evidence and will require you to explain any trade-offs you have considered. This process will help you articulate your reasoning clearly and prepare you for discussions about your project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-201-l08-act1",
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
          "id": "ai-safety-alignment-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
