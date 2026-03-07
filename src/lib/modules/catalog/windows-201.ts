import type { LearningModule } from "@/lib/modules/types";

export const windows_201_Module: LearningModule = {
  "id": "windows-201",
  "title": "Windows Administration and Automation II",
  "description": "Intermediate Windows operations curriculum on identity governance, update lifecycle, endpoint hardening, event-driven troubleshooting, and automation with PowerShell.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "windows"
  ],
  "minAge": 13,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Administer Windows accounts, groups, and privilege boundaries with least-privilege principles",
    "Operate update and patch workflows using staged deployment and rollback planning",
    "Apply endpoint hardening controls including Defender, firewall, and policy governance",
    "Use Event Viewer, Task Scheduler, and service controls for structured troubleshooting",
    "Automate recurring operations safely with PowerShell scripts",
    "Create support runbooks with evidence, escalation, and recovery standards"
  ],
  "lessons": [
    {
      "id": "windows-201-l01",
      "title": "Identity, Privilege, and Access Governance",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "windows-201-l01-c1",
          "kind": "concept",
          "title": "Access Boundaries in Windows Operations",
          "content": "To manage Windows systems effectively, it's important to understand the difference between what regular users can do and what actions need special permissions. Imagine your computer system is a school: not everyone gets the master keys. This clear separation helps keep the system safe. Instead of giving individual permissions to each user, which can be confusing, we use groups to control access. This makes it easy to scale and manage user permissions as the number of users grows.\nContext recap: Separating regular user actions from special permissions keeps systems safe. Using groups instead of individual permissions makes managing access much easier and more organized."
        },
        {
          "id": "windows-201-l01-c2",
          "kind": "concept",
          "title": "Privilege Elevation Discipline",
          "content": "When someone needs 'admin' powers to fix something, this elevation must be carefully controlled. Each request for elevated access should be approved, documented, and monitored. Allowing broad and ongoing administrative rights is like leaving the vault door open—it increases security risks and the chance of accidental damage. Permissions should only be elevated when absolutely necessary.\nContext recap: Elevated access should be temporary, approved, and tracked. Permanent admin rights create unnecessary security risks."
        },
        {
          "id": "windows-201-l01-c3",
          "kind": "recap",
          "title": "Governance Signals",
          "content": "Good governance means regularly reviewing who has access to what, cleaning up old accounts that are no longer in use, and having clear rules for any exceptions. This helps ensure that the system remains secure and that access is granted only when truly necessary.\nContext recap: Regular reviews and cleanups of user accounts ensure that only the right people have access to sensitive parts of the system."
        }
      ],
      "flashcards": [
        {
          "id": "windows-201-l01-f1",
          "front": "Least privilege",
          "back": "Operational principle of granting only the minimum required rights for a task."
        },
        {
          "id": "windows-201-l01-f2",
          "front": "Elevation policy",
          "back": "Rules controlling who may run privileged actions and under what conditions."
        },
        {
          "id": "windows-201-l01-f3",
          "front": "Access review",
          "back": "Regular validation that assigned permissions remain justified and current."
        }
      ],
      "learningAids": [
        {
          "id": "windows-201-l01-a1",
          "type": "image",
          "title": "Privilege Governance Map",
          "content": "Visual Prompt: A flowchart showing a regular user requesting access, a manager approving it, and a timer ticking down until the access expires."
        }
      ]
    },
    {
      "id": "windows-201-l02",
      "title": "Patch Lifecycle and Controlled Rollout Lab",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "windows-201-l02-c1",
          "kind": "concept",
          "title": "Update Rings and Validation",
          "content": "When updating Windows systems, we don't update everyone at once. We use a phased approach called 'update rings'. This means rolling out updates in stages—starting with a small test group, checking for compatibility, and using health monitoring tools to ensure everything works before updating everyone else. This careful process prevents widespread issues.\nContext recap: Update rings allow us to test new patches on a small group of computers first, ensuring they are safe before rolling them out to the entire network."
        },
        {
          "id": "windows-201-l02-c2",
          "kind": "practice",
          "title": "Rollback and Recovery Readiness",
          "content": "Sometimes updates break things. A rollback plan is our 'undo' button. It clearly outlines when and how to reverse an update if necessary. It's crucial to assign specific roles to team members so everyone knows what to do during an emergency. Setting up clear communication channels ensures support teams can quickly tackle any issues that pop up.\nContext recap: Always have a rollback plan ready. Knowing exactly how to undo an update and who is responsible saves time and reduces panic during system failures."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-201-l02-act1",
          "type": "matching_pairs",
          "title": "Rollout Control Match",
          "description": "Match rollout controls to their primary risk reduction outcome.",
          "pairs": [
            {
              "left": "Pilot ring",
              "right": "Detects regressions before broad impact"
            },
            {
              "left": "Health gate threshold",
              "right": "Blocks progression when stability drops"
            },
            {
              "left": "Rollback trigger",
              "right": "Defines automatic or manual reversion point"
            },
            {
              "left": "User comms plan",
              "right": "Reduces support noise and confusion"
            }
          ]
        },
        {
          "id": "windows-201-l02-act2",
          "type": "scenario_practice",
          "title": "Urgent Patch Exercise",
          "description": "Plan deployment of a critical security patch under time pressure.",
          "instructions": [
            "Choose first rollout cohort and justify choice.",
            "Define one metric that pauses rollout immediately."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "How do you balance patch urgency and compatibility risk?",
          "Which telemetry signals should gate rollout expansion?",
          "What makes rollback execution credible during incidents?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-201-l02-a1",
          "type": "practice",
          "title": "Patch Runbook",
          "content": "Visual Prompt: A checklist graphic showing 'Test Group', 'Main Group', and a big red 'Undo' button representing the rollback plan."
        }
      ]
    },
    {
      "id": "windows-201-l03",
      "title": "Checkpoint 1: Access and Update Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "windows-201-l03-q1",
          "text": "Why should broad permanent admin rights be minimized?",
          "skillId": "windows-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "They simplify audit trails"
            },
            {
              "id": "b",
              "text": "They increase misconfiguration and security blast radius"
            },
            {
              "id": "c",
              "text": "They improve rollback speed"
            },
            {
              "id": "d",
              "text": "They reduce support workload automatically"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Broad privileges amplify both accidental and malicious impact."
        },
        {
          "id": "windows-201-l03-q2",
          "text": "Primary purpose of staged patch rings is:",
          "skillId": "windows-201-skill-patch",
          "options": [
            {
              "id": "a",
              "text": "Immediate global rollout"
            },
            {
              "id": "b",
              "text": "Controlled validation before full deployment"
            },
            {
              "id": "c",
              "text": "Removing telemetry dependence"
            },
            {
              "id": "d",
              "text": "Avoiding rollback planning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rings reduce exposure while confirming update behavior."
        },
        {
          "id": "windows-201-l03-q3",
          "text": "A high-quality elevation workflow includes:",
          "skillId": "windows-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "Shared local admin credentials"
            },
            {
              "id": "b",
              "text": "Approval, scope limits, and activity logging"
            },
            {
              "id": "c",
              "text": "No documentation requirements"
            },
            {
              "id": "d",
              "text": "One-time approval for lifetime elevation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scoped and logged elevation supports accountable operations."
        },
        {
          "id": "windows-201-l03-q4",
          "text": "Most critical rollout safety artifact is:",
          "skillId": "windows-201-skill-patch",
          "options": [
            {
              "id": "a",
              "text": "A broad completion email"
            },
            {
              "id": "b",
              "text": "A measurable rollback trigger tied to health data"
            },
            {
              "id": "c",
              "text": "A screenshot of update settings"
            },
            {
              "id": "d",
              "text": "A private undocumented checklist"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear rollback conditions are essential when regressions occur."
        }
      ],
      "learningAids": [
        {
          "id": "windows-201-l03-a1",
          "type": "mnemonic",
          "title": "RISK",
          "content": "Visual Prompt: A shield icon with the letters R.I.S.K. spelled out vertically: Rights, Indicators, Staging, Kill-switch."
        }
      ]
    },
    {
      "id": "windows-201-l04",
      "title": "Endpoint Hardening and Security Baselines",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "windows-201-l04-c1",
          "kind": "concept",
          "title": "Baseline Security Components",
          "content": "To keep Windows systems safe, we create a baseline security policy—a digital suit of armor. This includes protecting endpoints (devices connected to the network), managing firewalls to control traffic, safeguarding passwords, and controlling which scripts are allowed to run. By combining all these elements, we build a strong defense against potential threats.\nContext recap: A security baseline is a standard set of rules that protects devices, firewalls, and passwords from unauthorized access."
        },
        {
          "id": "windows-201-l04-c2",
          "kind": "concept",
          "title": "Policy Exceptions and Evidence",
          "content": "Sometimes, a user needs to bypass a security rule to do their job. We call this an exception. Exceptions should be limited in time and clearly assigned to specific individuals. Without proper documentation, these temporary exceptions can become permanent risks. It is important to keep track of these exceptions to maintain a secure environment.\nContext recap: Security exceptions must be temporary and documented. If left unchecked, they create permanent holes in your security armor."
        },
        {
          "id": "windows-201-l04-c3",
          "kind": "recap",
          "title": "Operational Fit",
          "content": "Security shouldn't make computers impossible to use. While enhancing security, it is crucial to ensure that the core functions and workflows of users are not disrupted. Security measures should be tested in real-world scenarios to confirm they do not interfere with productivity.\nContext recap: The best security policies balance safety with usability, ensuring users can still do their jobs efficiently."
        }
      ],
      "flashcards": [
        {
          "id": "windows-201-l04-f1",
          "front": "Security baseline",
          "back": "Approved minimum configuration standard for endpoint protection and policy."
        },
        {
          "id": "windows-201-l04-f2",
          "front": "Exception expiry",
          "back": "Predefined end date for temporary control bypass approval."
        },
        {
          "id": "windows-201-l04-f3",
          "front": "Threat surface",
          "back": "Set of exposed pathways through which systems can be compromised."
        }
      ],
      "learningAids": [
        {
          "id": "windows-201-l04-a1",
          "type": "image",
          "title": "Windows Hardening Matrix",
          "content": "Visual Prompt: A grid showing different security locks (firewall, passwords, antivirus) and how often they are checked."
        }
      ]
    },
    {
      "id": "windows-201-l05",
      "title": "Event-Driven Troubleshooting and PowerShell Lab",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "windows-201-l05-c1",
          "kind": "practice",
          "title": "Evidence-First Triage",
          "content": "When a computer breaks, don't just guess the problem. Be a digital detective. Start by looking at event logs, reviewing the state of services, and testing ideas in a controlled way before making big changes. This evidence-first approach ensures your actions are based on facts, reducing the risk of making the problem worse.\nContext recap: Always look for evidence in system logs before trying to fix a problem. Guessing can lead to bigger issues."
        },
        {
          "id": "windows-201-l05-c2",
          "kind": "recap",
          "title": "Automation Safety",
          "content": "PowerShell is a tool that lets you write scripts to do tasks automatically. But with great power comes great responsibility. Scripts should be 'idempotent', meaning they can be run multiple times without causing errors. They should also keep logs of what they do. Clear ownership and verification checkpoints help maintain control over automated processes.\nContext recap: Safe automation scripts can be run multiple times without breaking things, and they always log their actions so you know exactly what happened."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Response Flow Sort",
          "description": "Sort support actions into Diagnose, Mitigate, and Verify.",
          "buckets": [
            "Diagnose",
            "Mitigate",
            "Verify"
          ],
          "items": [
            {
              "text": "Collect relevant event logs",
              "bucket": "Diagnose"
            },
            {
              "text": "Apply minimal-risk service fix",
              "bucket": "Mitigate"
            },
            {
              "text": "Confirm user workflow success",
              "bucket": "Verify"
            },
            {
              "text": "Document root cause and preventive action",
              "bucket": "Verify"
            }
          ]
        },
        {
          "id": "windows-201-l05-act2",
          "type": "scenario_practice",
          "title": "Recurring Error Drill",
          "description": "Resolve repeated endpoint failure and propose one automation improvement.",
          "instructions": [
            "Pick one repeatable diagnostic step for scripting.",
            "Define one script safeguard before broad use."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why should event evidence lead troubleshooting decisions?",
          "What makes PowerShell automation production-safe?",
          "When should escalation happen instead of local remediation?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-201-l05-a1",
          "type": "practice",
          "title": "Troubleshooting Runbook",
          "content": "Visual Prompt: A magnifying glass over a computer log file, leading to a wrench fixing a gear."
        }
      ]
    },
    {
      "id": "windows-201-l06",
      "title": "Checkpoint 2: Security and Automation Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "windows-201-l06-q1",
          "text": "Why should security exceptions always include expiration?",
          "skillId": "windows-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To make exceptions permanent"
            },
            {
              "id": "b",
              "text": "To force review and prevent hidden long-term risk"
            },
            {
              "id": "c",
              "text": "To remove accountability"
            },
            {
              "id": "d",
              "text": "To skip policy documentation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Expiration ensures risk acceptance is revisited and closed."
        },
        {
          "id": "windows-201-l06-q2",
          "text": "A production-ready script should include:",
          "skillId": "windows-201-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "Hardcoded credentials"
            },
            {
              "id": "b",
              "text": "Input validation, logging, and safe rerun behavior"
            },
            {
              "id": "c",
              "text": "No error handling"
            },
            {
              "id": "d",
              "text": "Unbounded destructive actions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Safe scripts are controlled, observable, and repeatable."
        },
        {
          "id": "windows-201-l06-q3",
          "text": "Most valuable first step in recurring endpoint incidents is:",
          "skillId": "windows-201-skill-support",
          "options": [
            {
              "id": "a",
              "text": "Immediate full reimage"
            },
            {
              "id": "b",
              "text": "Pattern analysis across logs and affected cohorts"
            },
            {
              "id": "c",
              "text": "Disable protections broadly"
            },
            {
              "id": "d",
              "text": "Ignore prior tickets"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Pattern evidence improves root-cause quality and prevents churn."
        },
        {
          "id": "windows-201-l06-q4",
          "text": "Why should support runbooks include explicit verification steps?",
          "skillId": "windows-201-skill-support",
          "options": [
            {
              "id": "a",
              "text": "To increase ticket volume"
            },
            {
              "id": "b",
              "text": "To confirm recovery and prevent false closure"
            },
            {
              "id": "c",
              "text": "To avoid escalation records"
            },
            {
              "id": "d",
              "text": "To remove user communication"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Verification ensures fixes are real and durable."
        }
      ],
      "learningAids": [
        {
          "id": "windows-201-l06-a1",
          "type": "mnemonic",
          "title": "EVIDE",
          "content": "Visual Prompt: A 5-step staircase showing the E.V.I.D.E. process: Events, Validate, Intervene, Document, Escalate."
        }
      ]
    }
  ]
};
