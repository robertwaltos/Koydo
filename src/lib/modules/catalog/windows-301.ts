import type { LearningModule } from "@/lib/modules/types";

export const windows_301_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "In large Windows environments, establishing a well-defined, testable, and consistently applied set of core policies is critical. When administrators or users make ad-hoc local changes, it leads to configuration drift, inconsistencies, and unpredictable system behavior. A structured governance approach ensures uniform guidelines, maintaining stability and reliability across the entire fleet."
        },
        {
          "id": "windows-301-l01-c2",
          "kind": "concept",
          "title": "Ringed Policy Promotion",
          "content": "When deploying policy changes, it is best practice to use a phased, controlled rollout. This involves introducing changes to small, low-risk groups (rings) first, validating their effectiveness and system health, before expanding to the broader fleet. Establishing clear promotion gates reduces the risk of widespread outages caused by untested configurations."
        },
        {
          "id": "windows-301-l01-c3",
          "kind": "recap",
          "title": "Governance Rhythm",
          "content": "Effective endpoint management teams establish a regular rhythm for auditing policy drift, reviewing exceptions, and gathering compliance evidence. This continuous feedback loop helps maintain smooth operations, allowing teams to quickly identify anomalies and ensure the fleet remains secure and compliant."
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
          "content": "Visual prompt: A flowchart illustrating the baseline policy lifecycle, showing deployment rings (e.g., Canary, Fast, Broad) and a side-process for exception controls."
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
          "content": "Endpoint performance issues rarely stem from a single source; CPU, memory, disk, and network resources interact in complex ways. To accurately diagnose root causes, engineers must correlate multiple telemetry signals simultaneously. This multi-signal approach prevents misdiagnosis and ensures effective remediation.\n\nStep-by-step approach:\n1. Define the investigation goal.\n2. Gather cross-domain evidence.\n3. Analyze how each signal impacts your hypothesis.\n4. Verify the conclusion against the initial constraints."
        },
        {
          "id": "windows-301-l02-c2",
          "kind": "practice",
          "title": "Evidence-First Response",
          "content": "Before applying broad policy changes during an incident, it is crucial to capture baseline performance data and correlate it with user impact. This evidence-first approach allows engineers to implement targeted, low-risk mitigations that can be easily rolled back, preventing further disruption while the root cause is investigated."
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
          "content": "Visual prompt: A digital worksheet template displaying a timeline axis, sections for capturing CPU/Memory/Disk/Network signals, a hypothesis ranking table, and a test outcome log."
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
          "content": "Visual prompt: A stylized shield icon divided into four quadrants, each containing one letter of the BASE acronym: Baseline, Analyze, Stabilize, Evaluate."
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
          "content": "A robust Windows hardening strategy relies on defense-in-depth—layering multiple security controls to protect the system. This includes endpoint safeguards, identity protection, strict policy enforcement, and automated compliance checks. Together, these layers create a resilient environment capable of withstanding diverse cyber threats."
        },
        {
          "id": "windows-301-l04-c2",
          "kind": "concept",
          "title": "Evidence Quality",
          "content": "To maintain audit readiness, organizations must keep meticulous records of policy versions, compliance snapshots, remediation timelines, and exception histories. High-quality documentation not only proves regulatory compliance but also highlights systemic vulnerabilities and areas for operational improvement."
        },
        {
          "id": "windows-301-l04-c3",
          "kind": "recap",
          "title": "Usability and Security Balance",
          "content": "Security controls must be tested against real-world user workflows to prevent excessive friction. If security measures are too restrictive, users often find dangerous workarounds, inadvertently increasing organizational risk. Striking the right balance between robust security and seamless usability is essential for a healthy IT ecosystem."
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
          "content": "Visual prompt: A pipeline diagram showing data flowing from 'Policy Definition' to 'Enforcement Telemetry', ending at a 'Compliance & Exception Review' dashboard."
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
          "content": "During high-severity endpoint incidents, rapid and coordinated response is critical. Incident commanders must balance swift containment with risk minimization. This involves preserving forensic evidence for root-cause analysis while applying targeted mitigations to prevent further service degradation. Decisive, well-documented actions ensure systems are restored safely and efficiently."
        },
        {
          "id": "windows-301-l05-c2",
          "kind": "recap",
          "title": "Learning System",
          "content": "Post-incident analysis transforms operational failures into systemic improvements. This process requires translating lessons learned into actionable, owned tasks—such as updating baseline policies, adjusting telemetry alerts, and setting measurable prevention goals. A mature learning system ensures that the same incident does not occur twice, continuously strengthening fleet resilience."
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
          "content": "Visual prompt: A structured incident response dashboard mockup featuring fields for Command Role, Active Containment Actions, Rollback Procedures, and Prevention Task Owners."
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
          "content": "Visual prompt: An infographic of a tactical shield, spelling out SHIELD vertically with corresponding icons for Scope, Harden, Investigate, Escalate, Learn, and Document."
        }
      ]
    }
  ]
};
