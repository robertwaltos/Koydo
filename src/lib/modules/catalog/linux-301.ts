import type { LearningModule } from "@/lib/modules/types";

export const Linux301Module: LearningModule = {
  "id": "linux-301",
  "title": "Linux Reliability, Networking, and Security Engineering",
  "description": "Advanced Linux engineering curriculum on production reliability, performance analysis, network stack behavior, security hardening, and incident response operations.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "linux",
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
    "Engineer Linux services for reliability with systemd and dependency-aware startup",
    "Analyze performance bottlenecks using CPU, memory, IO, and network evidence",
    "Design secure Linux baselines using hardening and access governance controls",
    "Interpret logs and telemetry for faster incident containment and root-cause analysis",
    "Apply automation and change controls to reduce production drift",
    "Communicate operational risk and remediation plans clearly to stakeholders"
  ],
  "lessons": [
    {
      "id": "linux-301-l01",
      "title": "Boot Flow, systemd Graph, and Service Topology",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "linux-301-l01-c1",
          "kind": "concept",
          "title": "Boot Path as a Reliability Surface",
          "content": "To ensure that Linux systems run smoothly and reliably, it's important to understand that the process begins even before any application code is executed. Key components such as firmware, the bootloader, kernel parameters, the behavior of initramfs, and the order in which systemd units are started all play a crucial role in determining how successfully a system starts up and how quickly it can recover from any issues. By focusing on these elements, we can enhance the reliability of our Linux systems right from the very beginning.\nContext recap: To ensure that Linux systems run smoothly and reliably, it's important to understand that the process begins even before any application code is executed. Key components such as firmware, the bootloader, kernel parameters, the behavior of initramfs, and the order in which systemd units are started all play a crucial role in determining how successfully a system starts up and how quickly it can recover from any issues. By focusing on these elements, we can enhance the reliability of our Linux systems right from the very beginning."
        },
        {
          "id": "linux-301-l01-c2",
          "kind": "concept",
          "title": "Dependency Graph Thinking",
          "content": "Understanding how different services depend on each other is essential for managing Linux systems effectively. The dependencies defined by systemd units help determine the order in which services start, how they restart after a failure, and how faults are isolated. If these dependencies are not modeled correctly, a small issue in one service can lead to larger problems, potentially causing the entire system to go down. Therefore, careful planning and modeling of these dependencies are vital to maintaining system stability.\nContext recap: Understanding how different services depend on each other is essential for managing Linux systems effectively. The dependencies defined by systemd units help determine the order in which services start, how they restart after a failure, and how faults are isolated. If these dependencies are not modeled correctly, a small issue in one service can lead to larger problems, potentially causing the entire system to go down. Therefore, careful planning and modeling of these dependencies are vital to maintaining system stability."
        },
        {
          "id": "linux-301-l01-c3",
          "kind": "recap",
          "title": "Operational Guardrails",
          "content": "Successful teams recognize the importance of treating unit files as important documents that require careful management. This includes having processes for peer review, keeping records of changes made, and having plans in place to revert changes if necessary. Additionally, it is crucial for the service topology, which shows how different services interact, to be clear and version-controlled. This approach helps ensure that the system remains reliable and manageable over time.\nContext recap: Successful teams recognize the importance of treating unit files as important documents that require careful management. This includes having processes for peer review, keeping records of changes made, and having plans in place to revert changes if necessary. Additionally, it is crucial for the service topology, which shows how different services interact, to be clear and version-controlled. This approach helps ensure that the system remains reliable and manageable over time."
        }
      ],
      "flashcards": [
        {
          "id": "linux-301-l01-f1",
          "front": "Unit dependency graph",
          "back": "Relationship map of service ordering and requirement constraints in systemd."
        },
        {
          "id": "linux-301-l01-f2",
          "front": "Fault isolation",
          "back": "Design principle that limits failure spread across service boundaries."
        },
        {
          "id": "linux-301-l01-f3",
          "front": "Initramfs",
          "back": "Early userspace used during boot to prepare root filesystem mounting and kernel handoff."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l01-a1",
          "type": "image",
          "title": "Boot and Service Topology Map",
          "content": "Reference flow from bootloader to systemd targets and service dependencies."
        }
      ]
    },
    {
      "id": "linux-301-l02",
      "title": "Observability and Performance Investigation Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "linux-301-l02-c1",
          "kind": "concept",
          "title": "Four-Domain Diagnosis",
          "content": "When investigating issues in Linux systems, it's important to consider how different factors interact with each other. Most incidents involve constraints across four main areas: CPU, memory, storage input/output, and network. Focusing on just one of these areas can lead to misunderstandings, as problems in one domain can affect others. Therefore, a holistic approach that takes into account the interactions between these domains is essential for effective troubleshooting and resolution.\nContext recap: When investigating issues in Linux systems, it's important to consider how different factors interact with each other. Most incidents involve constraints across four main areas: CPU, memory, storage input/output, and network. Focusing on just one of these areas can lead to misunderstandings, as problems in one domain can affect others. Therefore, a holistic approach that takes into account the interactions between these domains is essential for effective troubleshooting and resolution."
        },
        {
          "id": "linux-301-l02-c2",
          "kind": "practice",
          "title": "Evidence-Driven Triage",
          "content": "To effectively diagnose issues in Linux systems, it's important to gather evidence that is time-correlated. This means looking at logs, the state of processes, kernel signals, and symptoms at the service level all at once. Collecting this baseline evidence before making any changes is crucial, as it helps to ensure that any adjustments made are informed and effective, leading to better outcomes in resolving the issues.\nContext recap: To effectively diagnose issues in Linux systems, it's important to gather evidence that is time-correlated. This means looking at logs, the state of processes, kernel signals, and symptoms at the service level all at once. Collecting this baseline evidence before making any changes is crucial, as it helps to ensure that any adjustments made are informed and effective, leading to better outcomes in resolving the issues."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-301-l02-act1",
          "type": "matching_pairs",
          "title": "Signal-to-Domain Match",
          "description": "Match incident signals to likely resource domain.",
          "pairs": [
            {
              "left": "High run queue with low idle",
              "right": "CPU contention"
            },
            {
              "left": "Rising page faults and swap pressure",
              "right": "Memory stress"
            },
            {
              "left": "Increasing await latency on block device",
              "right": "Storage IO bottleneck"
            },
            {
              "left": "Packet drops under burst traffic",
              "right": "Network saturation or queue pressure"
            }
          ]
        },
        {
          "id": "linux-301-l02-act2",
          "type": "scenario_practice",
          "title": "Latency Incident Drill",
          "description": "Investigate sudden service latency increase with mixed symptoms.",
          "instructions": [
            "Select one first measurement to disambiguate root causes.",
            "Propose one low-risk mitigation while diagnosis continues."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why is time correlation critical in Linux incident analysis?",
          "What is the risk of tuning without baseline evidence?",
          "Which domain usually shows secondary symptoms first in your case?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-301-l02-a1",
          "type": "practice",
          "title": "Incident Evidence Sheet",
          "content": "Template for symptom timeline, signal capture, hypothesis ranking, and test results."
        }
      ]
    },
    {
      "id": "linux-301-l03",
      "title": "Checkpoint 1: Reliability and Performance",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "linux-301-l03-q1",
          "text": "Why model systemd dependencies explicitly in production?",
          "skillId": "linux-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To increase restart storms"
            },
            {
              "id": "b",
              "text": "To control startup order and limit failure cascades"
            },
            {
              "id": "c",
              "text": "To avoid documenting services"
            },
            {
              "id": "d",
              "text": "To disable health checks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Dependency clarity improves determinism and failure containment."
        },
        {
          "id": "linux-301-l03-q2",
          "text": "Best first step in performance triage is:",
          "skillId": "linux-301-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "Apply random kernel tuning immediately"
            },
            {
              "id": "b",
              "text": "Capture baseline multi-domain evidence"
            },
            {
              "id": "c",
              "text": "Restart all services"
            },
            {
              "id": "d",
              "text": "Delete historic metrics"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Evidence-first triage avoids bias and unnecessary changes."
        },
        {
          "id": "linux-301-l03-q3",
          "text": "A high page-fault rate with swap growth most directly indicates:",
          "skillId": "linux-301-skill-observability",
          "options": [
            {
              "id": "a",
              "text": "CPU overclock instability"
            },
            {
              "id": "b",
              "text": "Memory pressure"
            },
            {
              "id": "c",
              "text": "DNS cache miss"
            },
            {
              "id": "d",
              "text": "Filesystem permission issue"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Page faults and swap growth are classic memory stress indicators."
        },
        {
          "id": "linux-301-l03-q4",
          "text": "What makes a temporary incident mitigation safe?",
          "skillId": "linux-301-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "No record of change"
            },
            {
              "id": "b",
              "text": "Low blast radius and explicit rollback path"
            },
            {
              "id": "c",
              "text": "Permanent policy updates during outage"
            },
            {
              "id": "d",
              "text": "Ignoring service dependencies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Containment actions should be reversible and bounded."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l03-a1",
          "type": "mnemonic",
          "title": "BASE",
          "content": "Baseline, Assess domains, Stabilize, Evaluate cause."
        }
      ]
    },
    {
      "id": "linux-301-l04",
      "title": "Security Hardening, Compliance, and Access Governance",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "linux-301-l04-c1",
          "kind": "concept",
          "title": "Baseline Hardening Controls",
          "content": "The process of hardening Linux systems to make them more secure starts with establishing secure defaults. This includes minimizing the number of packages installed, maintaining a regular schedule for applying patches, enforcing strict policies for SSH access, monitoring file integrity, and managing user accounts carefully throughout their lifecycle. By implementing these foundational controls, we can significantly enhance the security posture of our Linux environments.\nContext recap: The process of hardening Linux systems to make them more secure starts with establishing secure defaults. This includes minimizing the number of packages installed, maintaining a regular schedule for applying patches, enforcing strict policies for SSH access, monitoring file integrity, and managing user accounts carefully throughout their lifecycle. By implementing these foundational controls, we can significantly enhance the security posture of our Linux environments."
        },
        {
          "id": "linux-301-l04-c2",
          "kind": "concept",
          "title": "Policy and Evidence",
          "content": "Being ready for compliance is not just about having the right technical settings; it also involves maintaining clear evidence trails. This includes documenting the process of patching, reviewing privileged access, and noting any security exceptions. By keeping thorough records, organizations can demonstrate their commitment to security and compliance, which is essential for maintaining trust and meeting regulatory requirements.\nContext recap: Being ready for compliance is not just about having the right technical settings; it also involves maintaining clear evidence trails. This includes documenting the process of patching, reviewing privileged access, and noting any security exceptions. By keeping thorough records, organizations can demonstrate their commitment to security and compliance, which is essential for maintaining trust and meeting regulatory requirements."
        },
        {
          "id": "linux-301-l04-c3",
          "kind": "recap",
          "title": "Operational Trade-offs",
          "content": "When we talk about hardening systems, we need to remember that they should still work well for everyone who uses them. It's really important for teams to test their security measures in real-life situations. This way, they can make sure that users don’t end up finding unsafe shortcuts to get their work done. By finding the right balance between security and ease of use, organizations can keep their systems safe while also allowing people to be productive and efficient.\nContext recap: When we talk about hardening systems, we need to remember that they should still work well for everyone who uses them. It's really important for teams to test their security measures in real-life situations. This way, they can make sure that users don’t end up finding unsafe shortcuts to get their work done. By finding the right balance between security and ease of use, organizations can keep their systems safe while also allowing people to be productive and efficient."
        }
      ],
      "flashcards": [
        {
          "id": "linux-301-l04-f1",
          "front": "Configuration drift",
          "back": "Divergence from approved baseline settings over time."
        },
        {
          "id": "linux-301-l04-f2",
          "front": "Exception register",
          "back": "Tracked list of approved deviations with owner, rationale, and expiry."
        },
        {
          "id": "linux-301-l04-f3",
          "front": "Least privilege",
          "back": "Granting only the minimum permissions needed to perform a task."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l04-a1",
          "type": "image",
          "title": "Linux Security Baseline",
          "content": "Checklist view of patching, access, network, and audit controls."
        }
      ]
    },
    {
      "id": "linux-301-l05",
      "title": "Incident Response and Controlled Change Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "linux-301-l05-c1",
          "kind": "practice",
          "title": "Containment Decision Framework",
          "content": "During incidents involving Linux systems, responders often face the challenge of balancing the need for quick action with the necessity of being certain about their decisions. Implementing controlled change workflows can help manage this balance, allowing teams to contain issues promptly while minimizing the risk of causing additional outages. This approach ensures that responses are both timely and effective.\nContext recap: During incidents involving Linux systems, responders often face the challenge of balancing the need for quick action with the necessity of being certain about their decisions. Implementing controlled change workflows can help manage this balance, allowing teams to contain issues promptly while minimizing the risk of causing additional outages. This approach ensures that responses are both timely and effective."
        },
        {
          "id": "linux-301-l05-c2",
          "kind": "recap",
          "title": "Learning Loop",
          "content": "After an incident occurs, it's important for teams to conduct reviews that focus on understanding what contributed to the issue, identifying gaps in controls, and determining measurable actions to prevent similar incidents in the future. These reviews should prioritize learning and improvement rather than assigning blame, fostering a culture of growth and resilience within the team.\nContext recap: After an incident occurs, it's important for teams to conduct reviews that focus on understanding what contributed to the issue, identifying gaps in controls, and determining measurable actions to prevent similar incidents in the future. These reviews should prioritize learning and improvement rather than assigning blame, fostering a culture of growth and resilience within the team."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-301-l05-act1",
          "type": "timeline_builder",
          "title": "Incident Timeline Builder",
          "description": "Place key response actions in the correct operational order.",
          "data": {
            "initiatives": [
              "Declare incident scope and severity",
              "Collect baseline evidence",
              "Apply low-risk containment",
              "Validate service recovery",
              "Publish prevention actions with owners"
            ]
          }
        },
        {
          "id": "linux-301-l05-act2",
          "type": "sorting_buckets",
          "title": "Change Risk Sort",
          "description": "Classify changes by risk posture.",
          "buckets": [
            "Safe Immediate",
            "Needs Review",
            "High Risk"
          ],
          "items": [
            {
              "text": "Restart one stateless worker with rollback",
              "bucket": "Safe Immediate"
            },
            {
              "text": "Kernel parameter change on all hosts",
              "bucket": "High Risk"
            },
            {
              "text": "Adjust alert threshold temporarily",
              "bucket": "Needs Review"
            },
            {
              "text": "Privilege policy change during outage",
              "bucket": "High Risk"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What criteria define a safe emergency change?",
          "How do you prevent recurring incidents after service restoration?",
          "Which incident artifact most improves future response speed?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-301-l05-a1",
          "type": "practice",
          "title": "Response Runbook Template",
          "content": "Template for detection, triage, containment, recovery, and prevention records."
        }
      ]
    },
    {
      "id": "linux-301-l06",
      "title": "Checkpoint 2: Security and Incident Engineering",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "linux-301-l06-q1",
          "text": "Why track security exceptions with expiration dates?",
          "skillId": "linux-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To make exceptions permanent by default"
            },
            {
              "id": "b",
              "text": "To ensure temporary risk acceptance is reviewed and closed"
            },
            {
              "id": "c",
              "text": "To avoid audit records"
            },
            {
              "id": "d",
              "text": "To disable baseline controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Time-bounded exceptions prevent hidden long-term exposure."
        },
        {
          "id": "linux-301-l06-q2",
          "text": "Most useful post-incident output is:",
          "skillId": "linux-301-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Only a timeline of events"
            },
            {
              "id": "b",
              "text": "Actionable prevention tasks with owners and due dates"
            },
            {
              "id": "c",
              "text": "Unstructured chat logs only"
            },
            {
              "id": "d",
              "text": "No written report"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ownership and deadlines convert learning into measurable improvement."
        },
        {
          "id": "linux-301-l06-q3",
          "text": "What is the primary risk of change without rollback planning?",
          "skillId": "linux-301-skill-change",
          "options": [
            {
              "id": "a",
              "text": "Faster learning"
            },
            {
              "id": "b",
              "text": "Extended outage if mitigation fails"
            },
            {
              "id": "c",
              "text": "Lower documentation burden"
            },
            {
              "id": "d",
              "text": "More deterministic startup"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rollback paths reduce recovery time when interventions misbehave."
        },
        {
          "id": "linux-301-l06-q4",
          "text": "A secure Linux baseline should prioritize:",
          "skillId": "linux-301-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Expanded package footprint"
            },
            {
              "id": "b",
              "text": "Minimal services, patch discipline, and strict access controls"
            },
            {
              "id": "c",
              "text": "Shared privileged accounts"
            },
            {
              "id": "d",
              "text": "No logging to reduce storage"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reduced attack surface and accountable access are foundational."
        }
      ],
      "learningAids": [
        {
          "id": "linux-301-l06-a1",
          "type": "mnemonic",
          "title": "SHIELD",
          "content": "Scope, Harden, Investigate, Escalate, Learn, Document."
        }
      ]
    }
  ]
};
