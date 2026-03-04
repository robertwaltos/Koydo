import type { LearningModule } from "@/lib/modules/types";

export const Windows301Module: LearningModule = {
  "id": "windows-301",
  "title": "Windows Fleet Reliability, Security, and Performance Engineering",
  "description": "Advanced Windows engineering curriculum on fleet policy governance, endpoint telemetry, performance diagnosis, incident containment, and resilient operations design.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "windows",
    "security"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Operate Windows fleets through policy-driven governance and staged control rollout",
    "Correlate endpoint telemetry for accurate reliability and performance diagnosis",
    "Design hardening baselines with measurable compliance and exception controls",
    "Lead incident workflows that balance containment speed and user impact",
    "Apply controlled change practices with rollback and audit evidence",
    "Communicate fleet risk and remediation priorities to technical and business stakeholders"
  ],
  "lessons": [
    {
      "id": "windows-301-l01",
      "title": "Fleet Policy Architecture and Drift Control",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "windows-301-l01-c1",
          "kind": "concept",
          "title": "Policy at Scale",
          "content": "In large environments that use Windows, it is important to have a set of basic policies that are well-defined, can be tested, and are applied consistently. When individuals make random changes locally, it can lead to inconsistencies and unexpected problems. By having a structured approach, we can ensure that everyone is following the same guidelines, which helps maintain stability and reliability across the system.\nContext recap: In large environments that use Windows, it is important to have a set of basic policies that are well-defined, can be tested, and are applied consistently. When individuals make random changes locally, it can lead to inconsistencies and unexpected problems. By having a structured approach, we can ensure that everyone is following the same guidelines, which helps maintain stability and reliability across the system."
        },
        {
          "id": "windows-301-l01-c2",
          "kind": "concept",
          "title": "Ringed Policy Promotion",
          "content": "When making changes to policies, it is best to do so gradually and in a controlled manner. This means introducing changes to small groups first and checking their effectiveness before rolling them out to everyone. By having clear checkpoints to assess the health of the system, we can reduce the chances of widespread issues that might arise from poorly tested changes.\nContext recap: When making changes to policies, it is best to do so gradually and in a controlled manner. This means introducing changes to small groups first and checking their effectiveness before rolling them out to everyone. By having clear checkpoints to assess the health of the system, we can reduce the chances of widespread issues that might arise from poorly tested changes."
        },
        {
          "id": "windows-301-l01-c3",
          "kind": "recap",
          "title": "Governance Rhythm",
          "content": "Effective teams that manage endpoints regularly check for any discrepancies, review exceptions, and gather evidence to ensure compliance with policies. This ongoing process helps maintain smooth operations and allows teams to quickly identify and address any issues that may arise, ensuring that everything runs as expected.\nContext recap: Effective teams that manage endpoints regularly check for any discrepancies, review exceptions, and gather evidence to ensure compliance with policies. This ongoing process helps maintain smooth operations and allows teams to quickly identify and address any issues that may arise, ensuring that everything runs as expected."
        }
      ],
      "flashcards": [
        {
          "id": "windows-301-l01-f1",
          "front": "Policy drift",
          "back": "Deviation of endpoints from approved configuration baseline over time."
        },
        {
          "id": "windows-301-l01-f2",
          "front": "Promotion gate",
          "back": "Metric threshold required before rollout can advance to larger cohort."
        },
        {
          "id": "windows-301-l01-f3",
          "front": "Exception register",
          "back": "Tracked record of policy deviations with owner, scope, and expiry."
        }
      ],
      "learningAids": [
        {
          "id": "windows-301-l01-a1",
          "type": "image",
          "title": "Windows Fleet Governance Model",
          "content": "Model of baseline policy lifecycle, rollout rings, and exception controls."
        }
      ]
    },
    {
      "id": "windows-301-l02",
      "title": "Telemetry Correlation and Performance Triage Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "windows-301-l02-c1",
          "kind": "concept",
          "title": "Multi-Signal Diagnosis",
          "content": "When we face challenges with endpoints, it's usually because the CPU, memory, disk, and network are all working together in complex ways. To truly understand and fix these problems, we must examine all these signals at the same time. This method is crucial because it helps us avoid making mistakes in identifying the actual cause of the issue. By doing so, we can develop better and more effective solutions to the problems we encounter.\nContext recap: When we face challenges with endpoints, it's usually because the CPU, memory, disk, and network are all working together in complex ways. To truly understand and fix these problems, we must examine all these signals at the same time. This method is crucial because it helps us avoid making mistakes in identifying the actual cause of the issue. By doing so, we can develop better and more effective solutions to the problems we encounter.\nContext recap: When we face challenges with endpoints, it's usually because the CPU, memory, disk, and network are all working together in complex ways. To truly understand and fix these problems, we must examine all these signals at the same time. This method is crucial because it helps us avoid making mistakes in identifying the actual cause of the issue. By doing so, we can develop better and more effective solutions to the problems we encounter.\nWhy this matters: Multi-Signal Diagnosis helps learners in Operating Systems connect ideas from Windows Fleet Reliability, Security, and Performance Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "windows-301-l02-c2",
          "kind": "practice",
          "title": "Evidence-First Response",
          "content": "Before making any major changes to policies, it is crucial to gather baseline data about the system's performance and correlate it with any user impact over time. By doing this, we can implement temporary fixes that can be reversed if necessary, ensuring that we do not disrupt the entire system without understanding the full impact of our changes.\nContext recap: Before making any major changes to policies, it is crucial to gather baseline data about the system's performance and correlate it with any user impact over time. By doing this, we can implement temporary fixes that can be reversed if necessary, ensuring that we do not disrupt the entire system without understanding the full impact of our changes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-301-l02-act1",
          "type": "matching_pairs",
          "title": "Signal-to-Domain Match",
          "description": "Match endpoint signal patterns to likely root domains.",
          "pairs": [
            {
              "left": "Sustained high CPU queue",
              "right": "Compute contention"
            },
            {
              "left": "Growing commit charge with paging",
              "right": "Memory pressure"
            },
            {
              "left": "Spikes in disk response time",
              "right": "Storage bottleneck"
            },
            {
              "left": "Packet retransmission and app stalls",
              "right": "Network path instability"
            }
          ]
        },
        {
          "id": "windows-301-l02-act2",
          "type": "scenario_practice",
          "title": "Regional Slowdown Exercise",
          "description": "Investigate endpoint latency increase affecting one business region.",
          "instructions": [
            "Choose first measurement to reduce ambiguity.",
            "Define one low-risk mitigation while analysis continues."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why are baseline comparisons mandatory in performance triage?",
          "What is the risk of patching without evidence?",
          "How do you separate symptom noise from causal signal?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-301-l02-a1",
          "type": "practice",
          "title": "Performance Investigation Sheet",
          "content": "Template for timeline, signal capture, hypothesis ranking, and test outcomes."
        }
      ]
    },
    {
      "id": "windows-301-l03",
      "title": "Checkpoint 1: Fleet and Performance Engineering",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "windows-301-l03-q1",
          "text": "Why use ring-based policy promotion in Windows fleets?",
          "skillId": "windows-301-skill-fleet",
          "options": [
            {
              "id": "a",
              "text": "To accelerate global blast radius"
            },
            {
              "id": "b",
              "text": "To validate behavior before broad rollout"
            },
            {
              "id": "c",
              "text": "To disable telemetry"
            },
            {
              "id": "d",
              "text": "To avoid change ownership"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ring-based rollout reduces risk and improves change confidence."
        },
        {
          "id": "windows-301-l03-q2",
          "text": "Most reliable first step in endpoint slowdown incidents is:",
          "skillId": "windows-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "Apply registry tweaks everywhere"
            },
            {
              "id": "b",
              "text": "Capture baseline multi-domain telemetry"
            },
            {
              "id": "c",
              "text": "Reimage all impacted devices"
            },
            {
              "id": "d",
              "text": "Disable endpoint controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline evidence prevents misdiagnosis and unnecessary changes."
        },
        {
          "id": "windows-301-l03-q3",
          "text": "A strong exception governance record includes:",
          "skillId": "windows-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No owner and no expiry"
            },
            {
              "id": "b",
              "text": "Owner, rationale, scope, and expiration"
            },
            {
              "id": "c",
              "text": "Only ticket number"
            },
            {
              "id": "d",
              "text": "Verbal approval only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Structured exception records maintain accountability and risk visibility."
        },
        {
          "id": "windows-301-l03-q4",
          "text": "Single-signal diagnosis is risky because:",
          "skillId": "windows-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "It always reveals root cause faster"
            },
            {
              "id": "b",
              "text": "It ignores interacting factors across system domains"
            },
            {
              "id": "c",
              "text": "It increases observability quality"
            },
            {
              "id": "d",
              "text": "It reduces false positives by default"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Endpoint incidents are often multi-factor and require cross-domain evidence."
        }
      ],
      "learningAids": [
        {
          "id": "windows-301-l03-a1",
          "type": "mnemonic",
          "title": "BASE",
          "content": "Baseline, Analyze, Stabilize, Evaluate."
        }
      ]
    },
    {
      "id": "windows-301-l04",
      "title": "Hardening Strategy and Compliance Evidence",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "windows-301-l04-c1",
          "kind": "concept",
          "title": "Defense-in-Depth Endpoint Baseline",
          "content": "A strong strategy for hardening Windows systems involves multiple layers of protection. This includes controls to safeguard endpoints, measures to protect user identities, strict enforcement of policies, and automated checks to ensure compliance. By combining these elements, we can create a more secure environment that is resilient against threats.\nContext recap: A strong strategy for hardening Windows systems involves multiple layers of protection. This includes controls to safeguard endpoints, measures to protect user identities, strict enforcement of policies, and automated checks to ensure compliance. By combining these elements, we can create a more secure environment that is resilient against threats."
        },
        {
          "id": "windows-301-l04-c2",
          "kind": "concept",
          "title": "Evidence Quality",
          "content": "To ensure that operations are ready for audits, it is essential to maintain clear records of policy versions, compliance snapshots, timelines for remediation, and histories of any exceptions. This documentation not only helps in demonstrating compliance but also aids in identifying areas for improvement.\nContext recap: To ensure that operations are ready for audits, it is essential to maintain clear records of policy versions, compliance snapshots, timelines for remediation, and histories of any exceptions. This documentation not only helps in demonstrating compliance but also aids in identifying areas for improvement."
        },
        {
          "id": "windows-301-l04-c3",
          "kind": "recap",
          "title": "Usability and Security Balance",
          "content": "It is important to test security controls in real-world scenarios to ensure they do not create unnecessary obstacles for users. If controls are too cumbersome, users may find ways to bypass them, which can lead to security risks. Striking a balance between usability and security is key to maintaining a safe and efficient environment.\nContext recap: It is important to test security controls in real-world scenarios to ensure they do not create unnecessary obstacles for users. If controls are too cumbersome, users may find ways to bypass them, which can lead to security risks. Striking a balance between usability and security is key to maintaining a safe and efficient environment."
        }
      ],
      "flashcards": [
        {
          "id": "windows-301-l04-f1",
          "front": "Compliance snapshot",
          "back": "Point-in-time evidence of endpoint adherence to required controls."
        },
        {
          "id": "windows-301-l04-f2",
          "front": "Defense in depth",
          "back": "Multiple coordinated controls reducing likelihood and impact of compromise."
        },
        {
          "id": "windows-301-l04-f3",
          "front": "Compensating control",
          "back": "Alternative safeguard used when primary control is temporarily unavailable."
        }
      ],
      "learningAids": [
        {
          "id": "windows-301-l04-a1",
          "type": "image",
          "title": "Hardening Evidence Pipeline",
          "content": "Pipeline showing policy definition, enforcement telemetry, and exception review."
        }
      ]
    },
    {
      "id": "windows-301-l05",
      "title": "Incident Command and Controlled Change Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "windows-301-l05-c1",
          "kind": "practice",
          "title": "Containment Under Pressure",
          "content": "When a serious incident occurs that affects computer endpoints, it is crucial for teams to respond swiftly and effectively. They must work to contain the situation while keeping risks as low as possible. This means taking careful steps to preserve any evidence related to the incident, which can help in understanding what happened. Additionally, teams should focus on preventing any further outages, which could disrupt services even more. Acting quickly and thoughtfully is key to managing the incident successfully and ensuring that systems can be restored to normal operations as soon as possible.\nContext recap: When a serious incident occurs that affects computer endpoints, it is crucial for teams to respond swiftly and effectively. They must work to contain the situation while keeping risks as low as possible. This means taking careful steps to preserve any evidence related to the incident, which can help in understanding what happened. Additionally, teams should focus on preventing any further outages, which could disrupt services even more."
        },
        {
          "id": "windows-301-l05-c2",
          "kind": "recap",
          "title": "Learning System",
          "content": "When an incident happens, we need to carefully look at what went wrong and learn from it. This process involves taking the lessons we learned and turning them into specific actions that we can take to improve our systems. This means we might need to update our policies to reflect these changes and set clear, measurable goals to ensure that similar incidents do not happen again. By learning from our past experiences, we can make our systems stronger and more reliable for everyone involved.\nContext recap: When an incident happens, we need to carefully look at what went wrong and learn from it. This process involves taking the lessons we learned and turning them into specific actions that we can take to improve our systems. This means we might need to update our policies to reflect these changes and set clear, measurable goals to ensure that similar incidents do not happen again. By learning from our past experiences, we can make our systems stronger and more reliable for everyone involved.\nContext recap: When an incident happens, we need to carefully look at what went wrong and learn from it. This process involves taking the lessons we learned and turning them into specific actions that we can take to improve our systems. This means we might need to update our policies to reflect these changes and set clear, measurable goals to ensure that similar incidents do not happen again. By learning from our past experiences, we can make our systems stronger and more reliable for everyone involved.\nWhy this matters: Learning System helps learners in Operating Systems connect ideas from Windows Fleet Reliability, Security, and Performance Engineering to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-301-l05-act1",
          "type": "timeline_builder",
          "title": "Incident Flow Sequencing",
          "description": "Sequence high-severity endpoint incident actions in proper order.",
          "data": {
            "initiatives": [
              "Declare severity and command owner",
              "Capture baseline evidence",
              "Apply low-risk containment",
              "Validate recovery metrics",
              "Publish prevention backlog with owners"
            ]
          }
        },
        {
          "id": "windows-301-l05-act2",
          "type": "sorting_buckets",
          "title": "Change Risk Classification",
          "description": "Sort response changes by risk profile.",
          "buckets": [
            "Safe Immediate",
            "Needs Review",
            "High Risk"
          ],
          "items": [
            {
              "text": "Targeted service restart on affected cohort",
              "bucket": "Safe Immediate"
            },
            {
              "text": "Global policy rewrite mid-incident",
              "bucket": "High Risk"
            },
            {
              "text": "Temporary detection-rule adjustment",
              "bucket": "Needs Review"
            },
            {
              "text": "Disable endpoint security tooling fleet-wide",
              "bucket": "High Risk"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What makes an emergency change safe enough for immediate use?",
          "How do you prevent incident fixes from becoming unmanaged permanent changes?",
          "Which post-incident artifact best improves future response speed?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-301-l05-a1",
          "type": "practice",
          "title": "Incident Governance Template",
          "content": "Template for command role, containment actions, rollback, and prevention owners."
        }
      ]
    },
    {
      "id": "windows-301-l06",
      "title": "Checkpoint 2: Security and Incident Engineering",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "windows-301-l06-q1",
          "text": "Why must security exceptions include owner and expiration?",
          "skillId": "windows-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To normalize permanent bypasses"
            },
            {
              "id": "b",
              "text": "To ensure temporary risk acceptance is reviewed and closed"
            },
            {
              "id": "c",
              "text": "To avoid audits"
            },
            {
              "id": "d",
              "text": "To remove accountability"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ownership and expiry prevent invisible long-term control erosion."
        },
        {
          "id": "windows-301-l06-q2",
          "text": "Most valuable post-incident output is:",
          "skillId": "windows-301-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Unstructured timeline notes only"
            },
            {
              "id": "b",
              "text": "Owned corrective actions with due dates and success metrics"
            },
            {
              "id": "c",
              "text": "No written report"
            },
            {
              "id": "d",
              "text": "Only executive summary without tasks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Actionable ownership converts analysis into prevention."
        },
        {
          "id": "windows-301-l06-q3",
          "text": "Primary risk of high-impact change without rollback planning is:",
          "skillId": "windows-301-skill-change",
          "options": [
            {
              "id": "a",
              "text": "Faster stabilization"
            },
            {
              "id": "b",
              "text": "Longer outage if mitigation fails"
            },
            {
              "id": "c",
              "text": "Lower coordination needs"
            },
            {
              "id": "d",
              "text": "More deterministic recovery"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rollback paths reduce time-to-recovery when interventions fail."
        },
        {
          "id": "windows-301-l06-q4",
          "text": "A robust hardening baseline should prioritize:",
          "skillId": "windows-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Feature breadth over control quality"
            },
            {
              "id": "b",
              "text": "Layered controls, telemetry, and governed exceptions"
            },
            {
              "id": "c",
              "text": "Unreviewed local admin autonomy"
            },
            {
              "id": "d",
              "text": "No compliance measurement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Layered controls and evidence create resilient, auditable posture."
        }
      ],
      "learningAids": [
        {
          "id": "windows-301-l06-a1",
          "type": "mnemonic",
          "title": "SHIELD",
          "content": "Scope, Harden, Investigate, Escalate, Learn, Document."
        }
      ]
    }
  ]
};
