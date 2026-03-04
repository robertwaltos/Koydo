import type { LearningModule } from "@/lib/modules/types";

export const Macos201Module: LearningModule = {
  "id": "macos-201",
  "title": "macOS Administration and Automation II",
  "description": "Intermediate macOS operations curriculum on account governance, device hardening, software lifecycle, automation workflows, and support-ready troubleshooting.",
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
  "version": "2.0.0",
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
          "content": "To effectively manage macOS systems, it's crucial to establish clear boundaries for different types of users. Standard users are those who perform everyday tasks, like browsing the internet or using applications. They should not have access to sensitive system settings. On the other hand, elevated rights, which allow users to make significant changes to the system, should only be granted for specific, approved activities, such as installing software or changing system preferences. Furthermore, there should be well-defined paths for administrative access, which means that any actions taken by users with elevated rights can be tracked and reviewed. This helps ensure accountability and enhances security, making the system safer for everyone."
        },
        {
          "id": "macos-201-l01-c2",
          "kind": "concept",
          "title": "Credential and Session Hygiene",
          "content": "To effectively manage macOS systems, it's important to have secure methods for logging in. This means using strong passwords and two-factor authentication when possible. Additionally, setting up policies that automatically lock devices when they are not being used helps protect sensitive information. It's also crucial to have a plan for managing passwords over time, ensuring they are updated regularly and not shared. Finally, if someone no longer needs access to the system, it's essential to remove their privileges quickly. These practices work together to keep the system safe and secure for everyone."
        },
        {
          "id": "macos-201-l01-c3",
          "kind": "recap",
          "title": "Least Privilege on macOS",
          "content": "Using the principle of least privilege is essential in macOS management. This means giving users only the access they need to perform their tasks, which helps prevent mistakes and security risks. It is also important to standardize how users can gain elevated access and to keep records of any administrative actions taken.\nContext recap: Using the principle of least privilege is essential in macOS management. This means giving users only the access they need to perform their tasks, which helps prevent mistakes and security risks. It is also important to standardize how users can gain elevated access and to keep records of any administrative actions taken."
        }
      ],
      "flashcards": [
        {
          "id": "macos-201-l01-f1",
          "front": "Least privilege",
          "back": "Access principle granting only minimum permissions needed for a task."
        },
        {
          "id": "macos-201-l01-f2",
          "front": "Elevation workflow",
          "back": "Controlled process for temporary administrative action and approval."
        },
        {
          "id": "macos-201-l01-f3",
          "front": "Session hygiene",
          "back": "Practices that reduce risk from unattended or overprivileged sessions."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l01-a1",
          "type": "image",
          "title": "Access Governance Map",
          "content": "Diagram mapping user roles, admin tasks, approvals, and audit points."
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
          "content": "When we manage the software lifecycle on macOS, it's very important to understand a few key ideas. First, we need to pay attention to how urgent security updates are. Some updates are critical and need to be done right away to keep our systems safe. Next, we should always test these updates to make sure they work well with the programs and systems we already have. Finally, we must think about how these updates will affect the users who rely on the system. To make things easier and safer, we can roll out updates in stages. This means we can introduce them gradually, which helps reduce the chances of any major problems or outages happening. By doing this, we can ensure a smoother experience for everyone involved."
        },
        {
          "id": "macos-201-l02-c2",
          "kind": "practice",
          "title": "Deployment Control Points",
          "content": "To ensure a successful software deployment, it is important to have controlled processes in place. This includes setting up pilot groups to test changes, performing health checks to monitor system performance, having triggers for rolling back changes if needed, and communicating clearly with users about updates. Treating software changes as important events helps maintain order and security.\nContext recap: To ensure a successful software deployment, it is important to have controlled processes in place. This includes setting up pilot groups to test changes, performing health checks to monitor system performance, having triggers for rolling back changes if needed, and communicating clearly with users about updates. Treating software changes as important events helps maintain order and security."
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
              "right": "Defines when deployment must be reverted"
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
            "Choose first cohort and explain why.",
            "Define one abort threshold for the rollout."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What makes a software update strategy trustworthy for users?",
          "How do you choose pilot cohort composition?",
          "Which signals should pause rollout immediately?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-201-l02-a1",
          "type": "practice",
          "title": "Deployment Runbook",
          "content": "Template for scope, test evidence, rollout rings, rollback triggers, and owner."
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
              "text": "To reduce misconfiguration and security blast radius"
            },
            {
              "id": "c",
              "text": "To prevent all software installs permanently"
            },
            {
              "id": "d",
              "text": "To remove accountability"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scoped admin rights reduce risk and improve auditability."
        },
        {
          "id": "macos-201-l03-q2",
          "text": "Best reason to stage software rollout in rings is:",
          "skillId": "macos-201-skill-deploy",
          "options": [
            {
              "id": "a",
              "text": "To maximize early blast radius"
            },
            {
              "id": "b",
              "text": "To detect regressions before broad user impact"
            },
            {
              "id": "c",
              "text": "To skip compatibility checks"
            },
            {
              "id": "d",
              "text": "To avoid communication plans"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ring deployment enables controlled validation."
        },
        {
          "id": "macos-201-l03-q3",
          "text": "A strong elevation workflow should include:",
          "skillId": "macos-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "Shared admin credentials"
            },
            {
              "id": "b",
              "text": "Approval, time-bounded access, and logging"
            },
            {
              "id": "c",
              "text": "No session controls"
            },
            {
              "id": "d",
              "text": "Permanent privilege after first request"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Time-bounded, auditable elevation supports safety and traceability."
        },
        {
          "id": "macos-201-l03-q4",
          "text": "Most important deployment safety artifact is:",
          "skillId": "macos-201-skill-deploy",
          "options": [
            {
              "id": "a",
              "text": "A release message without rollback plan"
            },
            {
              "id": "b",
              "text": "A rollback criterion tied to measurable health signals"
            },
            {
              "id": "c",
              "text": "A screenshot of installer progress"
            },
            {
              "id": "d",
              "text": "A private note with no owner"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Measurable rollback gates protect users when updates misbehave."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l03-a1",
          "type": "mnemonic",
          "title": "ROLE",
          "content": "Rights, Oversight, Logs, Expiry."
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
          "content": "FileVault is a special tool designed to keep the information on your macOS device safe and secure. It works by encrypting your data, which means that it scrambles the information so that only authorized users can read it. To make sure FileVault works well, it's important to have a plan for managing the keys that unlock your data and for recovering your information if you ever need to. This includes regularly testing your recovery methods to confirm that you can access your data when necessary, ensuring that your encryption policy is effective and reliable."
        },
        {
          "id": "macos-201-l04-c2",
          "kind": "concept",
          "title": "Application Trust and Execution Policy",
          "content": "Gatekeeper and notarization are important tools that help keep your macOS system safe by reducing the chances of running untrusted applications. When you download an app, Gatekeeper checks if it is from a trusted source. Notarization is a process where developers submit their apps to Apple for a security check before they can be distributed. It's important to remember that if you ever need to make an exception to these rules, it should be a rare situation. You should have a good reason for doing so, and you should keep track of these exceptions, including who made them and when they expire. This way, we can ensure that our systems remain secure and that we are protected from potential threats that could harm our devices or compromise our personal information."
        },
        {
          "id": "macos-201-l04-c3",
          "kind": "recap",
          "title": "Privacy Permission Governance",
          "content": "To keep your personal information safe, it's essential to check the permissions for features like the camera, microphone, and full-disk access on your device. By doing this regularly, you can make sure that only the apps you trust can access these sensitive areas. This practice helps protect your privacy and gives you control over who can see or hear what you do on your device. Remember, staying aware of your privacy settings is a key part of using technology responsibly.\nContext recap: To keep your personal information safe, it's essential to check the permissions for features like the camera, microphone, and full-disk access on your device. By doing this regularly, you can make sure that only the apps you trust can access these sensitive areas. This practice helps protect your privacy and gives you control over who can see or hear what you do on your device. Remember, staying aware of your privacy settings is a key part of using technology responsibly."
        }
      ],
      "flashcards": [
        {
          "id": "macos-201-l04-f1",
          "front": "FileVault",
          "back": "Full-disk encryption mechanism for protecting data at rest on macOS."
        },
        {
          "id": "macos-201-l04-f2",
          "front": "Gatekeeper",
          "back": "Execution policy control that helps block untrusted software."
        },
        {
          "id": "macos-201-l04-f3",
          "front": "Permission governance",
          "back": "Process for reviewing and limiting sensitive app permissions."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l04-a1",
          "type": "image",
          "title": "macOS Security Baseline",
          "content": "Reference matrix of encryption, execution policy, and privacy controls."
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
          "content": "To provide effective support for macOS issues, it is essential to avoid making guesses. Instead, support teams should look at logs, understand user symptoms, and assess the current state of the system before taking action to fix the problem. This evidence-first approach leads to better outcomes.\nContext recap: To provide effective support for macOS issues, it is essential to avoid making guesses. Instead, support teams should look at logs, understand user symptoms, and assess the current state of the system before taking action to fix the problem. This evidence-first approach leads to better outcomes."
        },
        {
          "id": "macos-201-l05-c2",
          "kind": "recap",
          "title": "Automation Safety",
          "content": "When creating automation scripts for macOS, it is important that they are idempotent, meaning they can be run multiple times without causing issues. These scripts should also be observable, allowing users to see what they do, and scoped to specific tasks. Additionally, scheduled maintenance tasks should have clear ownership and alerts for any failures to ensure everything runs smoothly.\nContext recap: When creating automation scripts for macOS, it is important that they are idempotent, meaning they can be run multiple times without causing issues. These scripts should also be observable, allowing users to see what they do, and scoped to specific tasks. Additionally, scheduled maintenance tasks should have clear ownership and alerts for any failures to ensure everything runs smoothly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Support Flow Sort",
          "description": "Sort response actions into Diagnose, Remediate, and Verify.",
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
              "text": "Apply minimal-risk configuration fix",
              "bucket": "Remediate"
            },
            {
              "text": "Confirm user workflow succeeds post-fix",
              "bucket": "Verify"
            },
            {
              "text": "Record root cause and prevention action",
              "bucket": "Verify"
            }
          ]
        },
        {
          "id": "macos-201-l05-act2",
          "type": "scenario_practice",
          "title": "Recurring Ticket Drill",
          "description": "Resolve a repeating issue and define one automation improvement.",
          "instructions": [
            "Identify one repeatable step suitable for scripting.",
            "Define one safeguard before automating at scale."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Why should support runbooks include verification checkpoints?",
          "What makes a troubleshooting script safe for reuse?",
          "When should a ticket be escalated instead of patched locally?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-201-l05-a1",
          "type": "practice",
          "title": "Support Runbook Template",
          "content": "Template for symptom, evidence, fix, verification, and prevention notes."
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
          "text": "Why is key escrow important when FileVault is enforced?",
          "skillId": "macos-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "To disable encryption quickly"
            },
            {
              "id": "b",
              "text": "To ensure recoverability if user credentials are unavailable"
            },
            {
              "id": "c",
              "text": "To bypass authentication permanently"
            },
            {
              "id": "d",
              "text": "To avoid backup strategy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Encryption policy must include reliable recovery operations."
        },
        {
          "id": "macos-201-l06-q2",
          "text": "Best practice for Gatekeeper exceptions is:",
          "skillId": "macos-201-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Allow all unsigned software"
            },
            {
              "id": "b",
              "text": "Use documented, time-bounded exceptions with owner approval"
            },
            {
              "id": "c",
              "text": "Disable execution controls globally"
            },
            {
              "id": "d",
              "text": "Skip exception logs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Controlled exceptions reduce long-term trust exposure."
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
              "text": "Idempotent actions, logging, and rollback path"
            },
            {
              "id": "c",
              "text": "Hardcoded admin credentials"
            },
            {
              "id": "d",
              "text": "No ownership assignments"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Safe automation is repeatable, observable, and reversible."
        },
        {
          "id": "macos-201-l06-q4",
          "text": "Most useful first step in recurring support incidents is:",
          "skillId": "macos-201-skill-support",
          "options": [
            {
              "id": "a",
              "text": "Immediate broad reimage without evidence"
            },
            {
              "id": "b",
              "text": "Pattern analysis across logs, timing, and affected cohorts"
            },
            {
              "id": "c",
              "text": "Ignore user reports"
            },
            {
              "id": "d",
              "text": "Disable all security controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Pattern evidence helps isolate common root causes."
        }
      ],
      "learningAids": [
        {
          "id": "macos-201-l06-a1",
          "type": "mnemonic",
          "title": "SCOPE",
          "content": "Signal, Correlate, Operate, Prove, Escalate."
        }
      ]
    }
  ]
};
