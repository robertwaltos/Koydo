import type { LearningModule } from "@/lib/modules/types";

export const AiSafetyAlignment301Module: LearningModule = {
  "id": "ai-safety-alignment-301",
  "title": "AI Safety and Alignment Systems and Governance",
  "description": "Level 301 curriculum in AI Safety and Alignment, focused on risk modeling, alignment objectives, evaluation harnesses, and governance controls, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "AI Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai",
    "safety"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
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
      "id": "ai-safety-alignment-301-l01",
      "title": "AI Safety and Alignment Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will work together to build a common vocabulary that everyone can easily understand when talking about AI Safety and Alignment. This is important because having the same words helps us communicate better with each other. Additionally, we will define the boundaries within which AI systems operate. By doing this, we can better visualize how risk assessment and alignment goals come together in real-world situations. Understanding these concepts is essential for effective teamwork and collaboration in the exciting field of AI.\nContext recap: In this lesson, we will work together to build a common vocabulary that everyone can easily understand when talking about AI Safety and Alignment. This is important because having the same words helps us communicate better with each other. Additionally, we will define the boundaries within which AI systems operate. By doing this, we can better visualize how risk assessment and alignment goals come together in real-world situations."
        },
        {
          "id": "ai-safety-alignment-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this section, learners will explore how to model causal relationships within systems. This involves identifying hidden assumptions that may not be immediately obvious and applying checks to constraints before suggesting any changes or interventions. This process is essential for ensuring that our proposed solutions are well-informed and effective.\nContext recap: In this section, learners will explore how to model causal relationships within systems. This involves identifying hidden assumptions that may not be immediately obvious and applying checks to constraints before suggesting any changes or interventions. This process is essential for ensuring that our proposed solutions are well-informed and effective."
        },
        {
          "id": "ai-safety-alignment-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a methodical approach that prioritizes evidence in our decision-making process. Each claim we make will be connected to observable indicators, which helps us understand the level of uncertainty we might face. By focusing on evidence, we can make more informed decisions that are grounded in reality.\nContext recap: This module introduces a methodical approach that prioritizes evidence in our decision-making process. Each claim we make will be connected to observable indicators, which helps us understand the level of uncertainty we might face. By focusing on evidence, we can make more informed decisions that are grounded in reality."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-301-l01-f1",
          "front": "risk modeling",
          "back": "A core mechanism in AI Safety and Alignment requiring explicit assumptions and measurable controls."
        },
        {
          "id": "ai-safety-alignment-301-l01-f2",
          "front": "alignment objectives",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "ai-safety-alignment-301-l01-f3",
          "front": "evaluation harnesses",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l02",
      "title": "AI Safety and Alignment Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this engaging interactive lab, learners will have the opportunity to create a carefully crafted sequence of methods designed to effectively balance different system trade-offs. They will focus on developing a strong metrics architecture and making informed governance decisions. Once they have constructed this sequence, learners will rigorously test each step under uncertain conditions. This process will help them ensure that their methods are not only robust but also reliable in real-world applications, preparing them for future challenges in AI safety and alignment.\nContext recap: In this engaging interactive lab, learners will have the opportunity to create a carefully crafted sequence of methods designed to effectively balance different system trade-offs. They will focus on developing a strong metrics architecture and making informed governance decisions. Once they have constructed this sequence, learners will rigorously test each step under uncertain conditions. This process will help them ensure that their methods are not only robust but also reliable in real-world applications, preparing them for future challenges in AI safety and alignment."
        },
        {
          "id": "ai-safety-alignment-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure that our systems are ready for operation, we will assess readiness through several key factors. This includes mapping out who owns different aspects of the system, establishing a schedule for regular checkpoints, identifying triggers for rolling back changes if needed, and maintaining logs of evidence. These checks help us confirm that everything is functioning as intended.\nContext recap: To ensure that our systems are ready for operation, we will assess readiness through several key factors. This includes mapping out who owns different aspects of the system, establishing a schedule for regular checkpoints, identifying triggers for rolling back changes if needed, and maintaining logs of evidence. These checks help us confirm that everything is functioning as intended."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-301-l02-act1",
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
          "id": "ai-safety-alignment-301-l02-act2",
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
      "id": "ai-safety-alignment-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-301-l03-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-301-skill-risk",
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
          "id": "ai-safety-alignment-301-l03-q2",
          "text": "At level 301, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-301-skill-level",
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
          "id": "ai-safety-alignment-301-l03-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-301-skill-ops",
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
          "id": "ai-safety-alignment-301-l03-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-301-skill-eval",
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
          "id": "ai-safety-alignment-301-l03-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-301-skill-governance",
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
      "id": "ai-safety-alignment-301-l04",
      "title": "AI Safety and Alignment Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we will explore the role of an AI assistant that has been introduced in schools to help students with their learning. This AI can give convincing answers to questions, which makes it seem very helpful. However, there are times when it produces information that is not true or is made up. Because of this, it is important for students to learn how to tell the difference between what is real evidence, what are just assumptions, and what the serious risks might be if they rely too much on this technology in their education. Understanding these elements is crucial for making informed decisions about using AI in learning environments."
        },
        {
          "id": "ai-safety-alignment-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will evaluate different alternatives using a decision tradeoff matrix. Each option will be scored based on various criteria, including performance, reliability, cost, and implications for equity. This systematic approach helps us make informed choices about which intervention path to pursue.\nContext recap: In this section, we will evaluate different alternatives using a decision tradeoff matrix. Each option will be scored based on various criteria, including performance, reliability, cost, and implications for equity. This systematic approach helps us make informed choices about which intervention path to pursue."
        },
        {
          "id": "ai-safety-alignment-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "We will categorize different patterns of failure to transform isolated incidents into valuable lessons for future design. By analyzing these failure modes, we can develop reusable safeguards that enhance the reliability and safety of our AI systems.\nContext recap: We will categorize different patterns of failure to transform isolated incidents into valuable lessons for future design. By analyzing these failure modes, we can develop reusable safeguards that enhance the reliability and safety of our AI systems.\nWhy this matters: Lessons from Failure Modes helps learners in AI Ethics connect ideas from AI Safety and Alignment Systems and Governance to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "ai-safety-alignment-301-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "ai-safety-alignment-301-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l05",
      "title": "AI Safety and Alignment Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this engaging interactive simulation studio, learners will have the opportunity to create and configure a detailed scenario model. This model will incorporate specific assumptions about uncertainty, which is essential for predicting outcomes. Additionally, learners will define success metrics that are closely connected to governance controls. This setup is vital for grasping how various factors interact within the system, helping to build a solid foundation for understanding AI safety and alignment principles.\nContext recap: In this engaging interactive simulation studio, learners will have the opportunity to create and configure a detailed scenario model. This model will incorporate specific assumptions about uncertainty, which is essential for predicting outcomes. Additionally, learners will define success metrics that are closely connected to governance controls. This setup is vital for grasping how various factors interact within the system, helping to build a solid foundation for understanding AI safety and alignment principles."
        },
        {
          "id": "ai-safety-alignment-301-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a thorough review of the evidence collected. This includes checking for alignment with established policies and identifying actions for improvement. This review process is essential for refining our approach and ensuring that we are on the right track.\nContext recap: At the end of each simulation round, we will conduct a thorough review of the evidence collected. This includes checking for alignment with established policies and identifying actions for improvement. This review process is essential for refining our approach and ensuring that we are on the right track."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-301-l05-act1",
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
          "id": "ai-safety-alignment-301-l05-act2",
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
      "id": "ai-safety-alignment-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-301-l06-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-301-skill-risk",
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
          "id": "ai-safety-alignment-301-l06-q2",
          "text": "At level 301, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-301-skill-level",
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
          "id": "ai-safety-alignment-301-l06-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-301-skill-ops",
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
          "id": "ai-safety-alignment-301-l06-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-301-skill-eval",
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
          "id": "ai-safety-alignment-301-l06-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-301-skill-governance",
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
      "id": "ai-safety-alignment-301-l07",
      "title": "AI Safety and Alignment Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, learners will analyze the various stakeholders involved in AI systems. They will identify who benefits from these systems, who may face risks, and how different policy choices can influence outcomes for various groups. Understanding these dynamics is key to responsible AI governance.\nContext recap: In this section, learners will analyze the various stakeholders involved in AI systems. They will identify who benefits from these systems, who may face risks, and how different policy choices can influence outcomes for various groups. Understanding these dynamics is key to responsible AI governance."
        },
        {
          "id": "ai-safety-alignment-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This understanding is vital for ensuring that AI systems are accountable and operate within ethical guidelines.\nContext recap: We will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This understanding is vital for ensuring that AI systems are accountable and operate within ethical guidelines.\nWhy this matters: Governance and Accountability helps learners in AI Ethics connect ideas from AI Safety and Alignment Systems and Governance to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-safety-alignment-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying artificial intelligence systems, it is essential to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical capabilities, and the potential impact on users. By carefully evaluating these criteria, we can ensure that our decisions are responsible and beneficial to everyone involved.\nContext recap: Before making any decisions about deploying artificial intelligence systems, it is essential to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical capabilities, and the potential impact on users. By carefully evaluating these criteria, we can ensure that our decisions are responsible and beneficial to everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-301-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "ai-safety-alignment-301-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "ai-safety-alignment-301-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l08",
      "title": "AI Safety and Alignment Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world applications.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of the project, identify potential risks, establish metrics for measuring success, and set governance checkpoints to ensure everything stays on track. This process helps students think critically about their projects and prepares them for real-world applications."
        },
        {
          "id": "ai-safety-alignment-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the lesson, students will receive a defense preparation template. This template will guide them in presenting their projects by requiring them to support their claims with evidence and to clearly explain any trade-offs they have considered. This practice encourages critical thinking and helps students articulate their ideas effectively.\nContext recap: To conclude the lesson, students will receive a defense preparation template. This template will guide them in presenting their projects by requiring them to support their claims with evidence and to clearly explain any trade-offs they have considered. This practice encourages critical thinking and helps students articulate their ideas effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-301-l08-act1",
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
          "id": "ai-safety-alignment-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
