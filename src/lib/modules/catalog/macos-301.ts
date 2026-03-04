import type { LearningModule } from "@/lib/modules/types";

export const Macos301Module: LearningModule = {
  "id": "macos-301",
  "title": "macOS Fleet Management, Security, and Performance Engineering",
  "description": "Advanced macOS engineering curriculum on fleet policy controls, endpoint telemetry, incident analysis, performance optimization, and enterprise support governance.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "macos",
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
    "Operate macOS fleets with policy-driven management and change control",
    "Correlate endpoint telemetry to diagnose reliability and security issues",
    "Design hardening baselines with exception governance and evidence trails",
    "Analyze performance bottlenecks across CPU, memory, storage, and app layers",
    "Lead incident response workflows with containment and post-incident learning",
    "Communicate fleet risk, remediation, and rollout decisions to stakeholders"
  ],
  "lessons": [
    {
      "id": "macos-301-l01",
      "title": "Fleet Policy Architecture and Management Controls",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-301-l01-c1",
          "kind": "concept",
          "title": "Policy-Centric Fleet Operations",
          "content": "When managing a large number of macOS devices, it is important to follow clear policies instead of just responding to individual requests. This means that we should have established guidelines for security, software updates, and device configurations that are regularly updated and enforced consistently across all devices. By doing this, we ensure that every device is secure and functioning properly, which helps everyone in the organization.\nContext recap: When managing a large number of macOS devices, it is important to follow clear policies instead of just responding to individual requests. This means that we should have established guidelines for security, software updates, and device configurations that are regularly updated and enforced consistently across all devices. By doing this, we ensure that every device is secure and functioning properly, which helps everyone in the organization."
        },
        {
          "id": "macos-301-l01-c2",
          "kind": "concept",
          "title": "Change Control and Drift Prevention",
          "content": "To keep our fleet of devices reliable, we need to minimize unexpected changes. This can be achieved by using controlled settings, gradually introducing updates, and keeping track of any exceptions. By doing so, we can prevent deviations from our established standards and make it easier to predict and manage any issues that arise. This proactive approach helps maintain a stable and efficient environment for all users.\nContext recap: To keep our fleet of devices reliable, we need to minimize unexpected changes. This can be achieved by using controlled settings, gradually introducing updates, and keeping track of any exceptions. By doing so, we can prevent deviations from our established standards and make it easier to predict and manage any issues that arise. This proactive approach helps maintain a stable and efficient environment for all users."
        },
        {
          "id": "macos-301-l01-c3",
          "kind": "recap",
          "title": "Governance Cadence",
          "content": "Successful teams that manage devices effectively often create regular reports to monitor any changes that occur. They might review compliance with policies every month and refresh their security standards every three months. This consistent practice helps ensure that all devices remain secure and compliant with the latest guidelines, leading to better overall performance and security.\nContext recap: Successful teams that manage devices effectively often create regular reports to monitor any changes that occur. They might review compliance with policies every month and refresh their security standards every three months. This consistent practice helps ensure that all devices remain secure and compliant with the latest guidelines, leading to better overall performance and security."
        }
      ],
      "flashcards": [
        {
          "id": "macos-301-l01-f1",
          "front": "Fleet drift",
          "back": "Unapproved divergence from standardized endpoint baseline."
        },
        {
          "id": "macos-301-l01-f2",
          "front": "Policy ring",
          "back": "Controlled cohort sequence for staged policy deployment."
        },
        {
          "id": "macos-301-l01-f3",
          "front": "Exception register",
          "back": "Tracked record of approved baseline deviations with owner and expiry."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l01-a1",
          "type": "image",
          "title": "Fleet Control Model",
          "content": "Model of baseline policy, rollout rings, exception handling, and compliance review."
        }
      ]
    },
    {
      "id": "macos-301-l02",
      "title": "Endpoint Telemetry and Performance Investigation Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "macos-301-l02-c1",
          "kind": "concept",
          "title": "Signal Correlation",
          "content": "To accurately diagnose issues with devices, it is essential to look at multiple sources of information. This includes examining logs, measuring performance metrics, and understanding how users interact with their devices. Relying on just one source can lead to missing the real problems. By correlating data from different areas, we can identify the root causes of issues more effectively and implement appropriate solutions.\nContext recap: To accurately diagnose issues with devices, it is essential to look at multiple sources of information. This includes examining logs, measuring performance metrics, and understanding how users interact with their devices. Relying on just one source can lead to missing the real problems. By correlating data from different areas, we can identify the root causes of issues more effectively and implement appropriate solutions."
        },
        {
          "id": "macos-301-l02-c2",
          "kind": "practice",
          "title": "Performance Triage",
          "content": "When analyzing performance issues, it is important to approach the situation carefully. This means forming specific hypotheses, comparing current performance to established baselines, and trying low-risk solutions before making significant changes to policies. By taking this measured approach, we can ensure that any adjustments made will not negatively impact users while still addressing the underlying issues.\nContext recap: When analyzing performance issues, it is important to approach the situation carefully. This means forming specific hypotheses, comparing current performance to established baselines, and trying low-risk solutions before making significant changes to policies. By taking this measured approach, we can ensure that any adjustments made will not negatively impact users while still addressing the underlying issues."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-301-l02-act1",
          "type": "matching_pairs",
          "title": "Signal-to-Hypothesis Match",
          "description": "Match observed endpoint behavior to likely root domain.",
          "pairs": [
            {
              "left": "Sustained high memory pressure",
              "right": "Application or workload memory contention"
            },
            {
              "left": "Frequent app launch delays",
              "right": "Storage latency or indexing overhead"
            },
            {
              "left": "Thermal throttling under normal workflow",
              "right": "CPU utilization pattern or cooling constraint"
            },
            {
              "left": "Periodic network-dependent app freezes",
              "right": "Intermittent connectivity or DNS instability"
            }
          ]
        },
        {
          "id": "macos-301-l02-act2",
          "type": "scenario_practice",
          "title": "Fleet Latency Drill",
          "description": "Investigate a region-wide endpoint slowdown without disrupting users.",
          "instructions": [
            "Pick one low-risk measurement action first.",
            "Define one mitigation safe for limited cohort deployment."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why are baseline comparisons essential for endpoint triage?",
          "Which metrics can mislead without context?",
          "How do you avoid over-correcting from limited samples?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-301-l02-a1",
          "type": "practice",
          "title": "Endpoint Incident Sheet",
          "content": "Template for timeline, correlated signals, hypothesis ranking, and mitigation validation."
        }
      ]
    },
    {
      "id": "macos-301-l03",
      "title": "Checkpoint 1: Fleet and Performance Engineering",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-301-l03-q1",
          "text": "Why use staged policy rollout for fleet changes?",
          "skillId": "macos-301-skill-fleet",
          "options": [
            {
              "id": "a",
              "text": "To increase failure blast radius"
            },
            {
              "id": "b",
              "text": "To catch regressions before full deployment"
            },
            {
              "id": "c",
              "text": "To remove need for monitoring"
            },
            {
              "id": "d",
              "text": "To avoid documentation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Staged rollout supports controlled validation and safer change velocity."
        },
        {
          "id": "macos-301-l03-q2",
          "text": "Most reliable first move in endpoint performance incidents is:",
          "skillId": "macos-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "Apply broad config changes immediately"
            },
            {
              "id": "b",
              "text": "Capture baseline telemetry and correlate symptoms"
            },
            {
              "id": "c",
              "text": "Disable all security tools"
            },
            {
              "id": "d",
              "text": "Reimage all affected devices"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Evidence-first diagnosis reduces unnecessary disruption."
        },
        {
          "id": "macos-301-l03-q3",
          "text": "A strong exception register should include:",
          "skillId": "macos-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No owner and no expiry"
            },
            {
              "id": "b",
              "text": "Owner, rationale, approved scope, and expiration"
            },
            {
              "id": "c",
              "text": "Only device serial numbers"
            },
            {
              "id": "d",
              "text": "Untracked verbal approvals"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governed exceptions prevent permanent hidden policy erosion."
        },
        {
          "id": "macos-301-l03-q4",
          "text": "What is the main risk of single-metric troubleshooting?",
          "skillId": "macos-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "Faster root-cause certainty"
            },
            {
              "id": "b",
              "text": "Misdiagnosis due to missing cross-domain context"
            },
            {
              "id": "c",
              "text": "Lower operational cost"
            },
            {
              "id": "d",
              "text": "Improved evidence quality"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Endpoint incidents are often multi-factor and require correlation."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l03-a1",
          "type": "mnemonic",
          "title": "TRACE",
          "content": "Telemetry, Relationships, Assumptions, Changes, Evidence."
        }
      ]
    },
    {
      "id": "macos-301-l04",
      "title": "Hardening Strategy and Compliance Evidence",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-301-l04-c1",
          "kind": "concept",
          "title": "Baseline Hardening Components",
          "content": "To ensure that macOS devices are secure, it is important to establish a solid foundation known as a hardening baseline. This baseline includes several important components. First, there are policies that dictate how encryption should be used to protect sensitive information. Next, we have controls that ensure only trusted software can run on the device, which helps prevent malicious programs from executing. Additionally, strategies for network security are crucial, as they help safeguard the device from external threats. Local firewall settings play a vital role in monitoring and controlling incoming and outgoing network traffic. Finally, it is essential to set boundaries for privileged access, ensuring that only authorized users can access sensitive areas of the system. By combining these elements, we create a robust hardening baseline that significantly enhances the security of macOS devices against various threats and vulnerabilities."
        },
        {
          "id": "macos-301-l04-c2",
          "kind": "concept",
          "title": "Evidence and Audit Readiness",
          "content": "To demonstrate security maturity, organizations need to provide evidence of their practices. This includes keeping records of policy versions, compliance reports, timelines for addressing issues, and any exceptions that have been tracked. The quality of this evidence is crucial, as it builds confidence during audits and shows that the organization is committed to maintaining high security standards.\nContext recap: To demonstrate security maturity, organizations need to provide evidence of their practices. This includes keeping records of policy versions, compliance reports, timelines for addressing issues, and any exceptions that have been tracked. The quality of this evidence is crucial, as it builds confidence during audits and shows that the organization is committed to maintaining high security standards."
        },
        {
          "id": "macos-301-l04-c3",
          "kind": "recap",
          "title": "Operational Fit",
          "content": "It is essential that security controls align with the workflows of the business. If the hardening measures implemented disrupt the core productivity of users, it can lead to workarounds that compromise security. Therefore, finding a balance between security and usability is critical to achieving the overall goals of protecting the organization while allowing employees to work efficiently.\nContext recap: It is essential that security controls align with the workflows of the business. If the hardening measures implemented disrupt the core productivity of users, it can lead to workarounds that compromise security. Therefore, finding a balance between security and usability is critical to achieving the overall goals of protecting the organization while allowing employees to work efficiently."
        }
      ],
      "flashcards": [
        {
          "id": "macos-301-l04-f1",
          "front": "Baseline compliance",
          "back": "Degree to which endpoints meet approved control configuration standards."
        },
        {
          "id": "macos-301-l04-f2",
          "front": "Control exception",
          "back": "Approved deviation from baseline with documented risk acceptance."
        },
        {
          "id": "macos-301-l04-f3",
          "front": "Audit evidence",
          "back": "Records proving policy enforcement, review, and remediation actions."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l04-a1",
          "type": "image",
          "title": "Hardening Evidence Map",
          "content": "Map connecting controls, telemetry, exceptions, and review cycles."
        }
      ]
    },
    {
      "id": "macos-301-l05",
      "title": "Incident Response and Change Governance Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "macos-301-l05-c1",
          "kind": "practice",
          "title": "Containment and User Impact",
          "content": "When responding to incidents on devices, it is important to find a balance between quickly containing the issue and ensuring that users can continue their work. First, we should define low-risk containment strategies that can be implemented immediately. If the situation escalates, we can then take further action based on the verified impact of the incident. This approach helps minimize disruption while addressing security concerns.\nContext recap: When responding to incidents on devices, it is important to find a balance between quickly containing the issue and ensuring that users can continue their work. First, we should define low-risk containment strategies that can be implemented immediately. If the situation escalates, we can then take further action based on the verified impact of the incident. This approach helps minimize disruption while addressing security concerns."
        },
        {
          "id": "macos-301-l05-c2",
          "kind": "recap",
          "title": "Post-Incident Improvement",
          "content": "After an incident occurs, it is important to conduct a review to learn from the experience. This review should result in specific actions that need to be taken, along with measurable deadlines for completion. Additionally, any necessary updates to policies or tools should be made to reduce the likelihood of similar incidents happening in the future. This continuous improvement process is vital for enhancing security and operational efficiency.\nContext recap: After an incident occurs, it is important to conduct a review to learn from the experience. This review should result in specific actions that need to be taken, along with measurable deadlines for completion. Additionally, any necessary updates to policies or tools should be made to reduce the likelihood of similar incidents happening in the future. This continuous improvement process is vital for enhancing security and operational efficiency."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-301-l05-act1",
          "type": "timeline_builder",
          "title": "Response Sequence Builder",
          "description": "Arrange endpoint incident phases in defensible order.",
          "data": {
            "initiatives": [
              "Confirm incident scope and affected cohort",
              "Apply low-impact containment",
              "Collect forensic and operational evidence",
              "Validate service recovery",
              "Publish prevention and ownership plan"
            ]
          }
        },
        {
          "id": "macos-301-l05-act2",
          "type": "sorting_buckets",
          "title": "Change Risk Sort",
          "description": "Classify proposed response changes by risk level.",
          "buckets": [
            "Safe Immediate",
            "Needs Review",
            "High Risk"
          ],
          "items": [
            {
              "text": "Temporary blocklist rule for affected app",
              "bucket": "Needs Review"
            },
            {
              "text": "Global profile rewrite during incident",
              "bucket": "High Risk"
            },
            {
              "text": "Targeted restart of impacted background service",
              "bucket": "Safe Immediate"
            },
            {
              "text": "Disable endpoint protection across fleet",
              "bucket": "High Risk"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which incident change types require mandatory secondary approval?",
          "How do you avoid permanent emergency fixes?",
          "What artifact best supports faster future triage?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-301-l05-a1",
          "type": "practice",
          "title": "Incident Governance Template",
          "content": "Template for severity, containment, evidence, communication, and prevention actions."
        }
      ]
    },
    {
      "id": "macos-301-l06",
      "title": "Checkpoint 2: Security and Incident Leadership",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "macos-301-l06-q1",
          "text": "Why pair hardening controls with documented exceptions?",
          "skillId": "macos-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To make controls optional permanently"
            },
            {
              "id": "b",
              "text": "To preserve operational flexibility with accountable risk tracking"
            },
            {
              "id": "c",
              "text": "To avoid policy ownership"
            },
            {
              "id": "d",
              "text": "To remove compliance obligations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governed exceptions maintain transparency while supporting real constraints."
        },
        {
          "id": "macos-301-l06-q2",
          "text": "Most valuable output of post-incident review is:",
          "skillId": "macos-301-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "A long chat transcript"
            },
            {
              "id": "b",
              "text": "Owned corrective actions with measurable deadlines"
            },
            {
              "id": "c",
              "text": "No written follow-up"
            },
            {
              "id": "d",
              "text": "Unprioritized suggestions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear ownership and deadlines convert review into prevention."
        },
        {
          "id": "macos-301-l06-q3",
          "text": "Primary purpose of ringed policy rollout is:",
          "skillId": "macos-301-skill-fleet",
          "options": [
            {
              "id": "a",
              "text": "Simultaneous global blast"
            },
            {
              "id": "b",
              "text": "Gradual validation with controlled risk exposure"
            },
            {
              "id": "c",
              "text": "Skipping observability"
            },
            {
              "id": "d",
              "text": "Removing rollback plans"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rings let teams verify effects before broad deployment."
        },
        {
          "id": "macos-301-l06-q4",
          "text": "In incident response, what makes a change reversible?",
          "skillId": "macos-301-skill-change",
          "options": [
            {
              "id": "a",
              "text": "No record of prior state"
            },
            {
              "id": "b",
              "text": "Defined rollback path and validation criteria"
            },
            {
              "id": "c",
              "text": "Ad-hoc scripting in production"
            },
            {
              "id": "d",
              "text": "Undocumented profile edits"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rollback-ready changes reduce prolonged incident impact."
        }
      ],
      "learningAids": [
        {
          "id": "macos-301-l06-a1",
          "type": "mnemonic",
          "title": "CLIP",
          "content": "Contain, Log, Improve, Prevent."
        }
      ]
    }
  ]
};
