import type { LearningModule } from "@/lib/modules/types";

export const Linux201Module: LearningModule = {
  "id": "linux-201",
  "title": "Linux Administration and Automation II",
  "description": "Intermediate Linux operations curriculum on package lifecycle, identity and access control, service management, storage operations, logging, and practical automation.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "operating-systems",
    "linux"
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
    "Manage software lifecycle with distribution package tools and repository hygiene",
    "Apply least-privilege user and group administration with safe sudo practices",
    "Operate Linux services with systemd, journald, and startup policy controls",
    "Administer storage, mounts, and backup patterns for resilient operations",
    "Use shell scripting and scheduled jobs for repeatable maintenance tasks",
    "Diagnose and recover from common Linux operational incidents"
  ],
  "lessons": [
    {
      "id": "linux-201-l01",
      "title": "Package Management and Repository Operations",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "linux-201-l01-c1",
          "kind": "concept",
          "title": "Package Ecosystem Models",
          "content": "Linux distributions, which are different versions of the Linux operating system, each have their own methods for packaging software. However, they all share some key concepts that are important for managing software effectively. One of these concepts is the use of trusted repositories. These are secure places where software is stored and can be safely downloaded. Another important idea is refreshing metadata, which means updating the information about the software to ensure it is current and accurate. Additionally, resolving dependencies is crucial; this means making sure that all the necessary components for a piece of software are available before it can be installed. Version pinning is another concept, which helps keep software stable by locking it to a specific version, preventing unexpected changes. Finally, controlling updates is essential to avoid surprises when new software versions are released. For anyone managing a Linux system, it is vital to know which package management tool they are using, such as apt or dnf. Understanding how these tools categorize software into installed, available, and held versions is key to ensuring smooth software management and maintaining the reliability of the system."
        },
        {
          "id": "linux-201-l01-c2",
          "kind": "concept",
          "title": "Update Strategy and Risk",
          "content": "When we update software, we need to be very careful, especially in places where everything needs to work perfectly, like in production environments. If we just update everything without thinking, it can cause big problems. To manage updates wisely, we should follow some important steps. First, we should test updates in a safe environment before applying them everywhere. Next, we should look at changelogs, which are like notes that tell us what changes are being made, so we know what to expect. After that, we need to check that all our services will still work after the update. It's also smart to have plans ready to go back to the old version or to take snapshots of our system, just in case something doesn’t work as planned. Finally, we must find a good balance between quickly applying security updates and keeping everything stable, choosing the right times for maintenance to avoid interrupting our work."
        },
        {
          "id": "linux-201-l01-c3",
          "kind": "recap",
          "title": "Repository Hygiene",
          "content": "When we talk about keeping our computer systems safe, one of the most important things to consider is where we get our software from. This is known as repository trust. It’s essential to know exactly which sources you are using for your software. Always choose well-known and reliable sources, and be cautious about using unknown third-party channels, as they may not be safe. To ensure that the software you download is genuine, check that the proper signing practices are being followed. This means that the software has been verified and is safe to use. Additionally, it’s a good idea to regularly clean up your package caches and remove any software that you no longer need. This helps to minimize the risk of security issues and keeps your system running efficiently. By practicing good repository hygiene, you are taking important steps to protect your system from potential threats and ensuring that it operates smoothly."
        }
      ],
      "flashcards": [
        {
          "id": "linux-201-l01-f1",
          "front": "Dependency resolution",
          "back": "Process of selecting compatible supporting packages required by a target installation."
        },
        {
          "id": "linux-201-l01-f2",
          "front": "Version pinning",
          "back": "Holding software to an approved version to avoid unplanned upgrades."
        },
        {
          "id": "linux-201-l01-f3",
          "front": "Repository trust",
          "back": "Confidence that package sources are authentic, signed, and maintained."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l01-a1",
          "type": "image",
          "title": "Package Lifecycle Map",
          "content": "Diagram of install, upgrade, hold, rollback, and cleanup workflows."
        }
      ]
    },
    {
      "id": "linux-201-l02",
      "title": "Users, Groups, Sudo, and Access Control Lab",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "linux-201-l02-c1",
          "kind": "concept",
          "title": "Identity Model",
          "content": "In Linux, managing who can access what is based on a system of users, groups, file ownership, and permission bits. This means that instead of giving individual users direct access to everything, it's safer to grant permissions based on roles through groups. This approach not only simplifies management but also enhances security by ensuring that users only have access to what they need to perform their tasks. Understanding this identity model is crucial for maintaining a secure and organized system.\nContext recap: In Linux, managing who can access what is based on a system of users, groups, file ownership, and permission bits. This means that instead of giving individual users direct access to everything, it's safer to grant permissions based on roles through groups. This approach not only simplifies management but also enhances security by ensuring that users only have access to what they need to perform their tasks. Understanding this identity model is crucial for maintaining a secure and organized system."
        },
        {
          "id": "linux-201-l02-c2",
          "kind": "practice",
          "title": "Privilege Boundaries",
          "content": "When using sudo, which allows users to run commands with elevated privileges, it's important to keep policies focused and manageable. This means that sudo permissions should be narrow, easy to audit, and tailored to specific tasks. Instead of granting unrestricted access, it's better to use command-scoped privileges and create separate service accounts for automation tasks. This practice helps minimize risks and ensures that users have only the permissions they need to perform their jobs effectively.\nContext recap: When using sudo, which allows users to run commands with elevated privileges, it's important to keep policies focused and manageable. This means that sudo permissions should be narrow, easy to audit, and tailored to specific tasks. Instead of granting unrestricted access, it's better to use command-scoped privileges and create separate service accounts for automation tasks. This practice helps minimize risks and ensures that users have only the permissions they need to perform their jobs effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-201-l02-act1",
          "type": "matching_pairs",
          "title": "Access Model Match",
          "description": "Match access control concept to its operational purpose.",
          "pairs": [
            {
              "left": "Primary group",
              "right": "Baseline collaboration and file ownership context"
            },
            {
              "left": "sudoers rule",
              "right": "Controlled privilege elevation for approved commands"
            },
            {
              "left": "service account",
              "right": "Non-human identity for predictable automation"
            },
            {
              "left": "least privilege",
              "right": "Minimum required access to reduce blast radius"
            }
          ]
        },
        {
          "id": "linux-201-l02-act2",
          "type": "scenario_practice",
          "title": "Privilege Review Drill",
          "description": "Review a risky access request and define a safer policy.",
          "instructions": [
            "Choose one scoped permission set instead of full admin.",
            "State one logging control to monitor privileged use."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What is the downside of granting broad sudo rights to all developers?",
          "When should a dedicated service account be created?",
          "How do group-based permissions simplify audits?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-201-l02-a1",
          "type": "practice",
          "title": "Access Review Checklist",
          "content": "Checklist for role, scope, logging, expiration, and approval evidence."
        }
      ]
    },
    {
      "id": "linux-201-l03",
      "title": "Checkpoint 1: Package and Access Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "linux-201-l03-q1",
          "text": "Why use staged updates in Linux operations?",
          "skillId": "linux-201-skill-packages",
          "options": [
            {
              "id": "a",
              "text": "To reduce visibility into changes"
            },
            {
              "id": "b",
              "text": "To detect regressions before broad production impact"
            },
            {
              "id": "c",
              "text": "To avoid documenting updates"
            },
            {
              "id": "d",
              "text": "To disable security patches"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Staging catches compatibility issues with lower blast radius."
        },
        {
          "id": "linux-201-l03-q2",
          "text": "Best principle for assigning sudo permissions is:",
          "skillId": "linux-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "Grant full root to all power users"
            },
            {
              "id": "b",
              "text": "Use least privilege with command-scoped elevation"
            },
            {
              "id": "c",
              "text": "Avoid all privilege logging"
            },
            {
              "id": "d",
              "text": "Store shared root password in chat"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scoped privilege and auditability reduce operational and security risk."
        },
        {
          "id": "linux-201-l03-q3",
          "text": "A key reason to avoid untrusted repositories is:",
          "skillId": "linux-201-skill-packages",
          "options": [
            {
              "id": "a",
              "text": "They improve deterministic builds"
            },
            {
              "id": "b",
              "text": "They may introduce unsigned or compromised packages"
            },
            {
              "id": "c",
              "text": "They always use fewer dependencies"
            },
            {
              "id": "d",
              "text": "They remove need for patching"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Repository trust directly affects host integrity and supply-chain exposure."
        },
        {
          "id": "linux-201-l03-q4",
          "text": "Why prefer group-based access over per-user permission sprawl?",
          "skillId": "linux-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "It makes audits and role changes easier to manage"
            },
            {
              "id": "b",
              "text": "It removes the need for ownership"
            },
            {
              "id": "c",
              "text": "It bypasses file permission checks"
            },
            {
              "id": "d",
              "text": "It guarantees no mistakes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Group-centered policy scales better and simplifies governance."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l03-a1",
          "type": "mnemonic",
          "title": "SAFE",
          "content": "Source trust, Access scope, Fix windows, Evidence logs."
        }
      ]
    },
    {
      "id": "linux-201-l04",
      "title": "Storage, Mounts, and Backup Reliability",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "linux-201-l04-c1",
          "kind": "concept",
          "title": "Filesystem and Mount Strategy",
          "content": "To ensure reliable operations in Linux, it's essential to understand how partitioning works, the different filesystem options available, and how to configure persistent mounts correctly. Operators should be able to distinguish between temporary mounts, which are only active during a session, and boot-time definitions, which are set to load automatically when the system starts. After making changes, it's also important to validate that the mount behavior is as expected after a restart to avoid any surprises.\nContext recap: To ensure reliable operations in Linux, it's essential to understand how partitioning works, the different filesystem options available, and how to configure persistent mounts correctly. Operators should be able to distinguish between temporary mounts, which are only active during a session, and boot-time definitions, which are set to load automatically when the system starts. After making changes, it's also important to validate that the mount behavior is as expected after a restart to avoid any surprises."
        },
        {
          "id": "linux-201-l04-c2",
          "kind": "concept",
          "title": "Capacity and Failure Signals",
          "content": "When it comes to storage systems, problems can often begin with subtle warning signs that might seem minor at first. For example, you might notice that you are running low on inodes, which are essential for managing files, or that your input/output (IO) operations are becoming slower than usual. Additionally, if log files are growing unchecked, they can take up valuable space and lead to issues. To avoid these potential problems from becoming serious, it's crucial to keep an eye on both the available storage space and the inode headroom. By regularly monitoring these metrics and setting specific thresholds, you can receive alerts before any write failures happen. This proactive approach allows you to take necessary actions to keep your services running smoothly and efficiently."
        },
        {
          "id": "linux-201-l04-c3",
          "kind": "recap",
          "title": "Backup and Restore Thinking",
          "content": "Having backups is crucial, but they are only truly reliable if the procedures for restoring data are regularly tested. It's important to define your recovery point objective (RPO) and recovery time objective (RTO) to understand how much data loss is acceptable and how quickly you need to restore services. After defining these objectives, you should verify that your backup tools and retention policies align with these requirements to ensure that you can recover effectively when needed.\nContext recap: Having backups is crucial, but they are only truly reliable if the procedures for restoring data are regularly tested. It's important to define your recovery point objective (RPO) and recovery time objective (RTO) to understand how much data loss is acceptable and how quickly you need to restore services. After defining these objectives, you should verify that your backup tools and retention policies align with these requirements to ensure that you can recover effectively when needed."
        }
      ],
      "flashcards": [
        {
          "id": "linux-201-l04-f1",
          "front": "RPO",
          "back": "Maximum acceptable data loss window measured in time."
        },
        {
          "id": "linux-201-l04-f2",
          "front": "RTO",
          "back": "Maximum acceptable service restoration time after failure."
        },
        {
          "id": "linux-201-l04-f3",
          "front": "Inode exhaustion",
          "back": "Condition where file metadata entries run out before disk space does."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l04-a1",
          "type": "image",
          "title": "Storage Health Dashboard",
          "content": "Sample dashboard for space, inodes, latency, and backup freshness."
        }
      ]
    },
    {
      "id": "linux-201-l05",
      "title": "Service Operations, Logging, and Scheduled Automation",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "linux-201-l05-c1",
          "kind": "practice",
          "title": "Service Lifecycle",
          "content": "In Linux, making sure that services run reliably is very important. This means we need to have a clear plan for how services start up, how they restart if something goes wrong, and how we can see logs to help us fix issues. One great tool for managing these services is called systemd. It helps us keep everything organized and running smoothly. Additionally, we can look at logs using a tool called the journal. This helps us understand what happened during any problems we face. By combining these tools into one easy process, we can quickly figure out what went wrong and keep our services running well."
        },
        {
          "id": "linux-201-l05-c2",
          "kind": "recap",
          "title": "Automation Quality",
          "content": "When automating tasks in Linux, it's important to ensure that the automation is idempotent, meaning that it can be safely run multiple times without causing unintended effects. Additionally, all automated actions should be logged, and there should be a clear ownership structure in place for scheduled tasks. Monitoring these tasks and having a system for notifying users of any failures can help prevent silent issues from arising, ensuring that everything continues to function as expected.\nContext recap: When automating tasks in Linux, it's important to ensure that the automation is idempotent, meaning that it can be safely run multiple times without causing unintended effects. Additionally, all automated actions should be logged, and there should be a clear ownership structure in place for scheduled tasks. Monitoring these tasks and having a system for notifying users of any failures can help prevent silent issues from arising, ensuring that everything continues to function as expected."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Task Ownership Sort",
          "description": "Sort operations tasks by execution model.",
          "buckets": [
            "On-demand",
            "Scheduled",
            "Event-driven"
          ],
          "items": [
            {
              "text": "Weekly log rotation validation",
              "bucket": "Scheduled"
            },
            {
              "text": "Manual service restart during maintenance",
              "bucket": "On-demand"
            },
            {
              "text": "Alert-triggered disk cleanup playbook",
              "bucket": "Event-driven"
            },
            {
              "text": "Nightly backup integrity check",
              "bucket": "Scheduled"
            }
          ]
        },
        {
          "id": "linux-201-l05-act2",
          "type": "scenario_practice",
          "title": "Failed Job Response",
          "description": "Respond to a failed scheduled task with structured diagnosis.",
          "instructions": [
            "Identify the first log source to inspect.",
            "Define one preventive control for repeat failure."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "How do you ensure scheduled jobs remain visible and auditable?",
          "What makes an automation script safe to rerun?",
          "When should a service be configured to auto-restart?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-201-l05-a1",
          "type": "practice",
          "title": "Automation Runbook",
          "content": "Template for trigger, command flow, log path, rollback, and owner."
        }
      ]
    },
    {
      "id": "linux-201-l06",
      "title": "Checkpoint 2: Services, Storage, and Recovery",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "linux-201-l06-q1",
          "text": "Why test restore workflows instead of only checking backup completion logs?",
          "skillId": "linux-201-skill-recovery",
          "options": [
            {
              "id": "a",
              "text": "Completion logs prove full recoverability"
            },
            {
              "id": "b",
              "text": "Only restore tests validate data integrity and recovery speed"
            },
            {
              "id": "c",
              "text": "Restore tests are never needed"
            },
            {
              "id": "d",
              "text": "Restore tests replace all monitoring"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A successful backup job can still produce unusable restore artifacts."
        },
        {
          "id": "linux-201-l06-q2",
          "text": "A robust scheduled automation practice requires:",
          "skillId": "linux-201-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "No ownership or alerting"
            },
            {
              "id": "b",
              "text": "Owner assignment, log visibility, and failure notification"
            },
            {
              "id": "c",
              "text": "Hidden scripts without documentation"
            },
            {
              "id": "d",
              "text": "Manual execution only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Visibility and accountability are required for reliable automation."
        },
        {
          "id": "linux-201-l06-q3",
          "text": "Which indicator most directly signals metadata pressure despite free disk space?",
          "skillId": "linux-201-skill-storage",
          "options": [
            {
              "id": "a",
              "text": "Inode exhaustion"
            },
            {
              "id": "b",
              "text": "CPU utilization"
            },
            {
              "id": "c",
              "text": "Timezone mismatch"
            },
            {
              "id": "d",
              "text": "Swap disable"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Hosts can fail file writes when inode count reaches zero."
        },
        {
          "id": "linux-201-l06-q4",
          "text": "Most useful first step in service incident triage is:",
          "skillId": "linux-201-skill-service",
          "options": [
            {
              "id": "a",
              "text": "Restart repeatedly without checking evidence"
            },
            {
              "id": "b",
              "text": "Inspect recent unit and journal events for failure signatures"
            },
            {
              "id": "c",
              "text": "Delete logs immediately"
            },
            {
              "id": "d",
              "text": "Disable the service permanently"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Evidence-first triage speeds root-cause isolation and safe remediation."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l06-a1",
          "type": "mnemonic",
          "title": "CARE",
          "content": "Check logs, Assess risk, Recover service, Evaluate prevention."
        }
      ]
    }
  ]
};
