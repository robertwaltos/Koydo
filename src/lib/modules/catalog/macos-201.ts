import type { LearningModule } from "@/lib/modules/types";

export const macos_201_Module: LearningModule = {
  "id": "macos-201",
  "title": "macOS Administration and Automation II",
  "description": "Master intermediate macOS administration by learning to manage user accounts, secure devices, deploy software safely, and automate common support tasks.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "macos"
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
    "Manage macOS accounts, permissions, and privilege boundaries safely",
    "Apply software update and package deployment workflows with rollback awareness",
    "Configure device security controls including FileVault, Gatekeeper, and privacy permissions",
    "Use system logs and activity tools for evidence-based troubleshooting",
    "Automate repetitive support tasks using Terminal and scripting basics",
    "Document support runbooks with clear escalation and recovery steps"
  ],
  "lessons": [
    {
      "id": "macos-201-l01",
      "title": "Account Governance and Privilege Management",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "macos-201-l01-c1",
          "kind": "concept",
          "title": "Identity and Role Boundaries",
          "content": "To manage macOS devices effectively, we need to separate user roles. A Standard user handles everyday tasks like browsing the web and using apps. They shouldn't be able to change critical system settings. Administrator access, which allows for major system changes like installing software, should be granted only for specific, approved tasks. All administrative actions should be logged, creating a clear record of who did what and when. This accountability helps keep the system secure."
        },
        {
          "id": "macos-201-l01-c2",
          "kind": "concept",
          "title": "Credential and Session Hygiene",
          "content": "Secure login practices are vital. This includes using strong, unique passwords and enabling two-factor authentication for an extra layer of security. Devices should be configured to lock automatically after a period of inactivity to protect data. It's also important to have a clear process for managing passwords and to promptly remove access for users who no longer need it. These habits work together to keep the system safe."
        },
        {
          "id": "macos-201-l01-c3",
          "kind": "recap",
          "title": "Least Privilege on macOS",
          "content": "The principle of least privilege is essential in macOS management. This means giving users only the access they need to perform their tasks, which helps prevent mistakes and security risks. It is also important to standardize how users can gain temporary administrator access and to keep records of any administrative actions taken."
        }
      ],
      "flashcards": [
        {
          "id": "macos-201-l01-f1",
          "front": "Least privilege",
          "back": "The access principle of granting only the minimum permissions needed for a task."
        },
        {
          "id": "macos-201-l01-f2",
          "front": "Elevation workflow",
          "back": "A controlled process for requesting, approving, and auditing temporary administrative access."
        },
        {
          "id": "macos-201-l01-f3",
          "front": "Session hygiene",
          "back": "Practices like auto-locking screens that reduce risk from unattended or over-privileged sessions."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l01-a1",
          "type": "image",
          "title": "The Access Control Map",
          "content": "Diagram mapping user roles (Standard, Admin), administrative tasks, approval workflows, and audit points."
        }
      ]
    },
    {
      "id": "macos-201-l02",
      "title": "Software Lifecycle and Managed Deployment Lab",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "macos-201-l02-c1",
          "kind": "concept",
          "title": "Update Channels and Risk",
          "content": "Managing software updates requires a careful strategy. We must prioritize urgent security patches to protect against threats. Before deploying any update, it's crucial to test it for compatibility with existing applications and workflows. To minimize disruption, updates should be released in phases or 'rings.' This staged approach allows us to catch potential issues with a small group of users before affecting everyone, ensuring a smooth and reliable update process."
        },
        {
          "id": "macos-201-l02-c2",
          "kind": "practice",
          "title": "Deployment Control Points",
          "content": "A controlled deployment process prevents chaos. Key practices include using pilot groups to test changes in a real-world environment, monitoring system health for any negative impact, defining clear rollback triggers to undo a problematic update, and communicating clearly with users about scheduled maintenance. Treating every software change with a formal process maintains stability and trust."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-201-l02-act1",
          "type": "matching_pairs",
          "title": "Deployment Control Match",
          "description": "Match deployment controls to the risk they reduce.",
          "pairs": [
            {
              "left": "Pilot ring rollout",
              "right": "Limits impact during early validation"
            },
            {
              "left": "Compatibility test matrix",
              "right": "Detects app and OS conflicts before broad push"
            },
            {
              "left": "Rollback criterion",
              "right": "Defines when a deployment must be reverted"
            },
            {
              "left": "Maintenance communication",
              "right": "Reduces user confusion and support surge"
            }
          ]
        },
        {
          "id": "macos-201-l02-act2",
          "type": "scenario_practice",
          "title": "Patch Window Exercise",
          "description": "Plan a high-priority patch deployment with limited support capacity.",
          "instructions": [
            "Choose the first cohort (group of users) for the update and explain why.",
            "Define one specific condition or threshold that would trigger an immediate halt to the rollout."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What makes a software update strategy trustworthy for users?",
          "How do you choose who should be in a pilot group?",
          "What signals should cause you to pause a software rollout immediately?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-201-l02-a1",
          "type": "practice",
          "title": "Deployment Runbook Template",
          "content": "A template for documenting an update's scope, test evidence, rollout rings, rollback triggers, and owners."
        },
        {
          "id": "macos-201-l02-a2",
          "type": "image",
          "title": "Staged Rollout Rings",
          "content": "Diagram showing software updates moving from an IT/Test group, to a Pilot group, and finally to all users."
        }
      ]
    },
    {
      "id": "macos-201-l03",
      "title": "Checkpoint 1: Access and Software Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-201-l03-q1",
          "text": "Why should administrative privileges be limited on managed macOS devices?",
          "skillId": "macos-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "To increase troubleshooting time"
            },
            {
              "id": "b",
              "text": "To reduce the impact of misconfigurations and security breaches"
            },
            {
              "id": "c",
              "text": "To prevent all software installs permanently"
            },
            {
              "id": "d",
              "text": "To remove accountability for system changes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Limiting admin rights reduces risk from both accidental mistakes and malicious attacks, and improves your ability to audit changes."
        },
        {
          "id": "macos-201-l03-q2",
          "text": "What is the best reason to stage a software rollout in rings?",
          "skillId": "macos-201-skill-deploy",
          "options": [
            {
              "id": "a",
              "text": "To maximize the initial impact on users"
            },
            {
              "id": "b",
              "text": "To detect problems before they affect all users"
            },
            {
              "id": "c",
              "text": "To skip compatibility checks"
            },
            {
              "id": "d",
              "text": "To avoid communicating with users"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ring deployment enables controlled validation, allowing you to find and fix issues with a small group before a widespread release."
        },
        {
          "id": "macos-201-l03-q3",
          "text": "A strong workflow for elevating to admin privileges should include:",
          "skillId": "macos-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "Shared admin credentials for everyone"
            },
            {
              "id": "b",
              "text": "Approval, time-limited access, and detailed logging"
            },
            {
              "id": "c",
              "text": "No controls on how long a session lasts"
            },
            {
              "id": "d",
              "text": "Permanent admin rights after the first request"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A secure elevation process is temporary, requires approval, and is auditable to ensure safety and traceability."
        },
        {
          "id": "macos-201-l03-q4",
          "text": "What is the most important safety feature of a deployment plan?",
          "skillId": "macos-201-skill-deploy",
          "options": [
            {
              "id": "a",
              "text": "A release message without a rollback plan"
            },
            {
              "id": "b",
              "text": "A rollback plan tied to measurable health signals"
            },
            {
              "id": "c",
              "text": "A screenshot of the installer's progress bar"
            },
            {
              "id": "d",
              "text": "A private note with no assigned owner"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Knowing exactly when and why to roll back an update, based on real data, is crucial for protecting users when updates fail."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l03-a1",
          "type": "mnemonic",
          "title": "ROLE",
          "content": "For admin access: Rights (temporary), Oversight (approval), Logs (auditing), Expiry (time-bound)."
        }
      ]
    },
    {
      "id": "macos-201-l04",
      "title": "Security Controls: FileVault, Gatekeeper, and Privacy",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "macos-201-l04-c1",
          "kind": "concept",
          "title": "Device Encryption and Startup Security",
          "content": "FileVault is macOS's built-in tool for full-disk encryption. It scrambles all the data on your startup disk, so it's unreadable without the login password or a special recovery key. A critical part of using FileVault is having a secure plan to manage and store these recovery keys. You must also regularly test your recovery process to ensure you can always access your data, even if a user forgets their password."
        },
        {
          "id": "macos-201-l04-c2",
          "kind": "concept",
          "title": "Application Trust and Execution Policy",
          "content": "Gatekeeper and App Notarization are macOS security features that prevent you from accidentally running malicious software. Gatekeeper ensures that apps are from identified developers, and Notarization is an additional check by Apple to scan for malware. While you can create exceptions to run unverified software, this should be rare and carefully controlled. Any exception should be documented, justified, and have an expiration date to limit long-term risk."
        },
        {
          "id": "macos-201-l04-c3",
          "kind": "recap",
          "title": "Privacy Permission Governance",
          "content": "Protecting user privacy involves managing which apps can access sensitive data and hardware. macOS requires apps to ask for permission before accessing your camera, microphone, location, contacts, and even files in your Desktop and Documents folders. It's good practice to regularly review these permissions in System Settings under 'Privacy & Security.' By granting access only to trusted applications, you maintain control over your personal information."
        }
      ],
      "flashcards": [
        {
          "id": "macos-201-l04-f1",
          "front": "FileVault",
          "back": "Full-disk encryption for protecting data at rest on macOS."
        },
        {
          "id": "macos-201-l04-f2",
          "front": "Gatekeeper",
          "back": "A security feature that helps block untrusted software from running."
        },
        {
          "id": "macos-201-l04-f3",
          "front": "Permission governance",
          "back": "The process of reviewing and limiting app access to sensitive data like the camera, microphone, and files."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l04-a1",
          "type": "image",
          "title": "macOS Security Baseline",
          "content": "A reference checklist covering key settings for encryption, execution policy, and privacy controls."
        },
        {
          "id": "macos-201-l04-a2",
          "type": "image",
          "title": "Privacy & Security Settings",
          "content": "Screenshot of the macOS System Settings > Privacy & Security pane, with callouts for FileVault, Gatekeeper, and Application Data permissions."
        }
      ]
    },
    {
      "id": "macos-201-l05",
      "title": "Troubleshooting and Automation Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "macos-201-l05-c1",
          "kind": "practice",
          "title": "Evidence-First Support",
          "content": "Effective troubleshooting starts with evidence, not guesswork. Before attempting a fix, gather information. Use built-in tools like Console to review system logs and Activity Monitor to check for unusual processes or resource usage. Combine this technical data with a clear description of the user's symptoms. This evidence-based approach helps you accurately identify the root cause and apply the correct solution."
        },
        {
          "id": "macos-201-l05-c2",
          "kind": "recap",
          "title": "Automation Safety",
          "content": "When automating tasks with scripts, safety is the top priority. A good script is idempotent, meaning it achieves the same result no matter how many times you run it, preventing accidental damage. Scripts should also be observable, logging what they do so you can verify their actions. Finally, they should be scoped to perform one specific task well. Any automated process should have a clear owner and send alerts if it fails."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Support Flow Sort",
          "description": "Sort response actions into the correct troubleshooting phase.",
          "buckets": [
            "Diagnose",
            "Remediate",
            "Verify"
          ],
          "items": [
            {
              "text": "Collect relevant system and app logs",
              "bucket": "Diagnose"
            },
            {
              "text": "Reproduce the issue on a test device",
              "bucket": "Diagnose"
            },
            {
              "text": "Apply a minimal-risk configuration fix",
              "bucket": "Remediate"
            },
            {
              "text": "Confirm the user's workflow succeeds post-fix",
              "bucket": "Verify"
            },
            {
              "text": "Document the root cause and prevention steps",
              "bucket": "Verify"
            }
          ]
        },
        {
          "id": "macos-201-l05-act2",
          "type": "scenario_practice",
          "title": "Recurring Ticket Drill",
          "description": "You are seeing the same support ticket every week. Plan how to resolve it more efficiently.",
          "instructions": [
            "Identify one repeatable step in the fix that is suitable for scripting.",
            "Define one safeguard you would implement before automating the fix for all users."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why should support runbooks include verification checkpoints?",
          "What makes a troubleshooting script safe to reuse?",
          "When should a problem be escalated instead of fixed locally?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-201-l05-a1",
          "type": "practice",
          "title": "Support Runbook Template",
          "content": "A template with sections for Symptom, Evidence, Fix, Verification, and Prevention notes."
        },
        {
          "id": "macos-201-l05-a2",
          "type": "image",
          "title": "Troubleshooting Flowchart",
          "content": "A simple flowchart showing the steps: Report -> Gather Evidence -> Diagnose -> Remediate -> Verify -> Document."
        }
      ]
    },
    {
      "id": "macos-201-l06",
      "title": "Checkpoint 2: Security and Support Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-201-l06-q1",
          "text": "Why is having a recovery key plan essential when FileVault is enforced?",
          "skillId": "macos-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To disable encryption quickly"
            },
            {
              "id": "b",
              "text": "To ensure data can be recovered if user credentials are lost"
            },
            {
              "id": "c",
              "text": "To bypass authentication permanently"
            },
            {
              "id": "d",
              "text": "To avoid needing a backup strategy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An encryption policy must include a reliable recovery process, like key escrow, to prevent data loss."
        },
        {
          "id": "macos-201-l06-q2",
          "text": "What is the best practice for handling Gatekeeper exceptions?",
          "skillId": "macos-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Allow all unsigned software to run"
            },
            {
              "id": "b",
              "text": "Use documented, time-limited exceptions with clear approval"
            },
            {
              "id": "c",
              "text": "Disable all execution controls globally"
            },
            {
              "id": "d",
              "text": "Avoid logging any exceptions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Controlled, temporary exceptions reduce long-term security risks while allowing for business needs."
        },
        {
          "id": "macos-201-l06-q3",
          "text": "A dependable support automation workflow requires:",
          "skillId": "macos-201-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "No testing before rollout"
            },
            {
              "id": "b",
              "text": "Repeatable actions, clear logging, and a rollback path"
            },
            {
              "id": "c",
              "text": "Hardcoded admin credentials in the script"
            },
            {
              "id": "d",
              "text": "No ownership assignments"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Safe automation is repeatable (idempotent), observable (logging), and reversible (rollback)."
        },
        {
          "id": "macos-201-l06-q4",
          "text": "What is the most useful first step when dealing with recurring support incidents?",
          "skillId": "macos-201-skill-support",
          "options": [
            {
              "id": "a",
              "text": "Immediately re-image all affected devices without gathering evidence"
            },
            {
              "id": "b",
              "text": "Analyze patterns across logs, timing, and affected users"
            },
            {
              "id": "c",
              "text": "Ignore user reports until they stop"
            },
            {
              "id": "d",
              "text": "Disable all security controls to see if it helps"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Analyzing patterns in the evidence helps isolate the common root cause of a recurring problem."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l06-a1",
          "type": "mnemonic",
          "title": "SCOPE",
          "content": "For troubleshooting: Signal (the alert), Correlate (find patterns), Operate (the fix), Prove (verify), Escalate (if needed)."
        }
      ]
    }
  ]
};
