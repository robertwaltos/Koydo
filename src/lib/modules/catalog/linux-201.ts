import type { LearningModule } from "@/lib/modules/types";

export const linux_201_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "title": "Understanding Package Management",
          "content": "Every Linux version, or 'distribution', has a tool called a package manager to install, update, and remove software. Think of it like an app store for your server. While tools like `apt` (for Debian/Ubuntu) and `dnf` (for Fedora/CentOS) are different, they share key ideas. They connect to trusted online 'repositories' to download software safely. They keep a local list, or 'metadata', of available software, which you must refresh to see new updates. They automatically figure out 'dependencies'—other software a program needs to run. You can also 'pin' a package to a specific version to prevent unwanted updates and maintain stability. Understanding these concepts is key to keeping your system's software healthy and secure."
        },
        {
          "id": "linux-201-l01-c2",
          "kind": "concept",
          "title": "Update Strategy and Risk",
          "content": "Updating software on a critical system isn't as simple as clicking 'update all'. In professional environments, a single bad update can cause major outages. A smart update strategy involves testing updates in a safe, non-production environment first. Always read the 'changelogs' to understand what's new or fixed. Before updating, verify that your applications will still work. It's also wise to have a rollback plan, like using system snapshots, in case something goes wrong. The goal is to balance applying important security patches quickly with keeping the system stable and predictable."
        },
        {
          "id": "linux-201-l01-c3",
          "kind": "recap",
          "title": "Repository Hygiene",
          "content": "Where you get your software from is critical for security. This is called 'repository trust'. Stick to official, well-maintained repositories from your Linux distribution. Be very cautious about adding third-party sources, as they could contain insecure or malicious software. Ensure your package manager is checking for digital signatures, which prove the software is authentic and hasn't been tampered with. Periodically, it's good practice to clean out old package files from your cache and remove software you no longer use. This 'repository hygiene' reduces security risks and keeps your system tidy."
        }
      ],
      "flashcards": [
        {
          "id": "linux-201-l01-f1",
          "front": "Dependency resolution",
          "back": "The process of identifying and installing all supporting software required by a target package."
        },
        {
          "id": "linux-201-l01-f2",
          "front": "Version pinning",
          "back": "Locking a software package to a specific version to prevent automatic or unplanned upgrades."
        },
        {
          "id": "linux-201-l01-f3",
          "front": "Repository trust",
          "back": "Confidence that software sources are authentic, secure, and well-maintained."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l01-a1",
          "type": "image",
          "title": "Package Lifecycle Map",
          "content": "A visual flowchart showing the journey of a software package: from installation (`apt install`), upgrading (`apt upgrade`), being held at a specific version, and finally removed (`apt remove`). Includes key commands for each stage."
        }
      ]
    },
    {
      "id": "linux-201-l02",
      "title": "Users, Groups, and Access Control Lab",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "linux-201-l02-c1",
          "kind": "concept",
          "title": "The Linux Identity Model",
          "content": "In Linux, security starts with identity. Every file and process is owned by a 'user' and a 'group'. Permissions—who can read, write, or execute a file—are assigned based on this ownership. Instead of giving permissions to individual users one by one, it's much more efficient and secure to grant permissions to a group, and then add users to that group. This is called role-based access control. It makes managing permissions easier and helps enforce the principle of least privilege, where users only have access to what they absolutely need."
        },
        {
          "id": "linux-201-l02-c2",
          "kind": "practice",
          "title": "Safe Privilege Elevation with Sudo",
          "content": "The `sudo` command is a powerful tool that lets a user run a command as another user, usually the 'root' superuser. However, giving out full `sudo` access is risky. A better practice is to define narrow, specific rules in the `sudoers` file. For example, allow a user to restart a specific web server service, but nothing else. For automated tasks, create dedicated 'service accounts' with limited permissions instead of using a person's account. This approach makes your system more secure, easier to audit, and reduces the potential damage from a mistake or a security breach."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-201-l02-act1",
          "type": "matching_pairs",
          "title": "Access Model Match",
          "description": "Match each access control concept to its operational purpose.",
          "pairs": [
            {
              "left": "Primary group",
              "right": "Default context for collaboration and new file ownership"
            },
            {
              "left": "sudoers rule",
              "right": "Controlled privilege elevation for a specific, approved command"
            },
            {
              "left": "Service account",
              "right": "A non-human identity used for predictable, automated tasks"
            },
            {
              "left": "Least privilege",
              "right": "Granting only the minimum access required to perform a task"
            }
          ]
        },
        {
          "id": "linux-201-l02-act2",
          "type": "scenario_practice",
          "title": "Privilege Review Drill",
          "description": "Review a risky access request and define a safer policy.",
          "instructions": [
            "Given a request for full admin access to restart a service, define a safer, single-command `sudo` rule.",
            "Describe how you would audit the usage of this new, limited privilege."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "What is the downside of granting broad sudo rights to all developers?",
          "When should a dedicated service account be created?",
          "How do group-based permissions simplify security audits?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-201-l02-a1",
          "type": "practice",
          "title": "Access Review Checklist",
          "content": "A printable checklist formatted like a security audit form, with sections for Role, Scope, Logging, Expiration, and Approval Evidence. Helps ensure no step is missed when granting privileges."
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
          "text": "Why is it important to test software updates in a staging environment before deploying to production?",
          "skillId": "linux-201-skill-packages",
          "options": [
            {
              "id": "a",
              "text": "To make the update process take longer"
            },
            {
              "id": "b",
              "text": "To find and fix any issues before they affect real users"
            },
            {
              "id": "c",
              "text": "To avoid reading the update's changelog"
            },
            {
              "id": "d",
              "text": "To disable security patches"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A staging environment lets you safely test for compatibility issues or bugs with a limited 'blast radius', preventing production outages."
        },
        {
          "id": "linux-201-l03-q2",
          "text": "What is the best principle for assigning `sudo` permissions?",
          "skillId": "linux-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "Grant full root access to all experienced users"
            },
            {
              "id": "b",
              "text": "Apply the principle of least privilege with command-specific rules"
            },
            {
              "id": "c",
              "text": "Avoid logging any privileged commands to save disk space"
            },
            {
              "id": "d",
              "text": "Share the root password with the team in a private chat"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Granting only the specific permissions needed for a task (least privilege) and ensuring actions are auditable reduces both operational and security risks."
        },
        {
          "id": "linux-201-l03-q3",
          "text": "What is a key security risk of using untrusted software repositories?",
          "skillId": "linux-201-skill-packages",
          "options": [
            {
              "id": "a",
              "text": "They provide software that is always more stable"
            },
            {
              "id": "b",
              "text": "They may contain malicious or compromised software packages"
            },
            {
              "id": "c",
              "text": "They use fewer dependencies"
            },
            {
              "id": "d",
              "text": "They eliminate the need for future patching"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Repository trust is a cornerstone of system security. Untrusted sources can compromise your entire system and expose you to supply-chain attacks."
        },
        {
          "id": "linux-201-l03-q4",
          "text": "Why is it better to manage permissions using groups instead of assigning them to each user individually?",
          "skillId": "linux-201-skill-access",
          "options": [
            {
              "id": "a",
              "text": "It makes managing roles, onboarding, and audits much simpler"
            },
            {
              "id": "b",
              "text": "It removes the need for file ownership"
            },
            {
              "id": "c",
              "text": "It allows users to bypass file permission checks"
            },
            {
              "id": "d",
              "text": "It guarantees that no configuration mistakes will ever be made"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Group-based permissions scale effectively. When a person's role changes, you only need to change their group membership, not hundreds of individual file permissions."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l03-a1",
          "type": "mnemonic",
          "title": "SAFE",
          "content": "Source trust, Access scope, Fix windows, Evidence logs. A mnemonic for core operational security principles."
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
          "content": "Properly managing storage is key to a stable Linux system. This involves understanding how to partition disks, choosing the right filesystem type (like ext4 or XFS), and ensuring storage is available where it's needed. We 'mount' a storage device to a directory to make it accessible. It's crucial to know how to make these mounts permanent by editing the `/etc/fstab` file, so they are automatically reconnected after a reboot. Always test your `/etc/fstab` changes and verify mounts after restarting to prevent boot failures."
        },
        {
          "id": "linux-201-l04-c2",
          "kind": "concept",
          "title": "Capacity and Failure Signals",
          "content": "Storage problems often start with subtle warnings. You might run out of 'inodes' (data structures that store file metadata) even with plenty of disk space left, which prevents new files from being created. Or, you might see disk input/output (I/O) operations slowing down. Unchecked log file growth can also quickly fill up a disk. To prevent these issues from causing an outage, you must monitor both disk space and inode usage. Setting up alerts for when usage crosses a certain threshold (e.g., 85% full) gives you time to act before services fail."
        },
        {
          "id": "linux-201-l04-c3",
          "kind": "recap",
          "title": "Backup and Restore Thinking",
          "content": "Backups are useless if you can't restore from them. The only way to know if your backups work is to test them regularly. Before setting up backups, you must define two key goals: the Recovery Point Objective (RPO), which is the maximum amount of data you can afford to lose (e.g., 1 hour), and the Recovery Time Objective (RTO), which is how quickly you need to be back online after a failure (e.g., 15 minutes). Your backup tools, schedule, and restore procedures must all be designed to meet these RPO and RTO goals."
        }
      ],
      "flashcards": [
        {
          "id": "linux-201-l04-f1",
          "front": "RPO (Recovery Point Objective)",
          "back": "The maximum acceptable amount of data loss, measured in time (e.g., 1 hour of data)."
        },
        {
          "id": "linux-201-l04-f2",
          "front": "RTO (Recovery Time Objective)",
          "back": "The maximum acceptable amount of time to restore a service after a failure (e.g., 15 minutes)."
        },
        {
          "id": "linux-201-l04-f3",
          "front": "Inode exhaustion",
          "back": "A condition where a filesystem runs out of file metadata entries, preventing new file creation, even if disk space is available."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l04-a1",
          "type": "image",
          "title": "Storage Health Dashboard",
          "content": "An illustration of a monitoring dashboard with gauges and charts showing disk space usage (in GB and %), inode count, I/O latency, and a 'Last Successful Backup' status indicator with a timestamp."
        }
      ]
    },
    {
      "id": "linux-201-l05",
      "title": "Service Management, Logging, and Automation",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "linux-201-l05-c1",
          "kind": "concept",
          "title": "Managing Services with systemd",
          "content": "Most modern Linux systems use `systemd` to manage services, which are programs that run in the background, like a web server or a database. As an administrator, you need to know the basic lifecycle commands: `systemctl start` to turn a service on, `systemctl stop` to turn it off, and `systemctl status` to check if it's running correctly. To ensure a service starts automatically when the server boots, you use `systemctl enable`. Understanding this lifecycle is the first step to ensuring your applications are reliable."
        },
        {
          "id": "linux-201-l05-c2",
          "kind": "concept",
          "title": "Investigating with Logs",
          "content": "When a service fails, the first place to look for clues is in the logs. Logs are records of events that happen on the system. `systemd` has its own logging system called the journal, which you can view with the `journalctl` command (e.g., `journalctl -u nginx.service`). Many applications also write to text files in the `/var/log` directory. Learning to use tools like `tail -f` to watch logs in real-time and `grep` to search for specific errors is an essential skill for troubleshooting any problem."
        },
        {
          "id": "linux-201-l05-c3",
          "kind": "practice",
          "title": "Automating Tasks with Cron",
          "content": "Many administrative tasks are repetitive, like running backups, cleaning up temporary files, or checking for updates. Instead of doing these manually, we can automate them. The classic tool for scheduling tasks in Linux is `cron`. You edit a special file called a `crontab` to define a command and the exact time or interval it should run (e.g., every night at 2 AM). This 'set it and forget it' approach saves time and ensures important maintenance happens consistently."
        },
        {
          "id": "linux-201-l05-c4",
          "kind": "recap",
          "title": "Reliable Automation",
          "content": "Good automation is more than just a script. It should be 'idempotent', meaning it can be run multiple times without causing problems. Every automated action should be logged, so there's a record of what happened. Every scheduled job needs a clear owner who is responsible for it. Finally, you must monitor your automation and set up alerts for failures. Without monitoring, a silent failure in a backup script could go unnoticed for weeks, leading to disaster."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Task Trigger Sort",
          "description": "Sort these administrative tasks by how they are typically triggered.",
          "buckets": [
            "On-demand (Manual)",
            "Scheduled (Time-based)",
            "Event-driven (Reactive)"
          ],
          "items": [
            {
              "text": "Weekly log rotation validation",
              "bucket": "Scheduled (Time-based)"
            },
            {
              "text": "Manual service restart during a planned maintenance window",
              "bucket": "On-demand (Manual)"
            },
            {
              "text": "An alert-triggered script that cleans up disk space",
              "bucket": "Event-driven (Reactive)"
            },
            {
              "text": "Nightly backup integrity check",
              "bucket": "Scheduled (Time-based)"
            }
          ]
        },
        {
          "id": "linux-201-l05-act2",
          "type": "scenario_practice",
          "title": "Failed Job Response",
          "description": "Respond to a failed scheduled task with structured diagnosis.",
          "instructions": [
            "Scenario: A scheduled script to clean up old log files failed last night. The only alert is 'Job failed'.",
            "Task 1: List the first two commands you would run to investigate what happened.",
            "Task 2: Suggest one improvement to the script to prevent this failure from happening silently again."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "How do you ensure scheduled jobs remain visible and auditable?",
          "What makes an automation script 'idempotent' and why is it important?",
          "When should a service be configured to automatically restart on failure?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-201-l05-a1",
          "type": "practice",
          "title": "Automation Runbook",
          "content": "A template document formatted like a standard operating procedure, with fields for Job Name, Schedule, Command/Script Path, Expected Outcome, Logging, Alerting, and Owner Contact."
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
          "text": "Why must you test your data restore process, instead of just confirming that backups completed successfully?",
          "skillId": "linux-201-skill-recovery",
          "options": [
            {
              "id": "a",
              "text": "Backup completion logs are a perfect guarantee of recoverability"
            },
            {
              "id": "b",
              "text": "Only a restore test can validate data integrity and recovery time (RTO)"
            },
            {
              "id": "c",
              "text": "Restore tests are an outdated practice and no longer needed"
            },
            {
              "id": "d",
              "text": "Restore tests replace the need for all other system monitoring"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A backup job can complete 'successfully' but still produce a corrupted or unusable file. Only by performing a test restore can you be certain the data is valid and that you can meet your RTO."
        },
        {
          "id": "linux-201-l06-q2",
          "text": "A reliable scheduled task requires which of the following?",
          "skillId": "linux-201-skill-automation",
          "options": [
            {
              "id": "a",
              "text": "No assigned owner or alerting"
            },
            {
              "id": "b",
              "text": "Clear ownership, visible logs, and failure notifications"
            },
            {
              "id": "c",
              "text": "Scripts that are hidden and have no documentation"
            },
            {
              "id": "d",
              "text": "It should only ever be run manually"
            }
          ],
          "correctOptionId": "b",
          "explanation": "For automation to be reliable, it must be visible and accountable. This includes knowing who owns it, where to find its logs, and being alerted if it fails."
        },
        {
          "id": "linux-201-l06-q3",
          "text": "Which issue can prevent you from creating new files, even if you have plenty of free disk space?",
          "skillId": "linux-201-skill-storage",
          "options": [
            {
              "id": "a",
              "text": "Inode exhaustion"
            },
            {
              "id": "b",
              "text": "High CPU utilization"
            },
            {
              "id": "c",
              "text": "Incorrect timezone settings"
            },
            {
              "id": "d",
              "text": "Swap space is disabled"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Every file requires an inode to store its metadata. If the filesystem runs out of inodes, no new files can be created, regardless of available disk space."
        },
        {
          "id": "linux-201-l06-q4",
          "text": "When a critical service stops working, what is the most useful first step in troubleshooting?",
          "skillId": "linux-201-skill-service",
          "options": [
            {
              "id": "a",
              "text": "Restart the service repeatedly without looking at any evidence"
            },
            {
              "id": "b",
              "text": "Inspect recent service and system logs for error messages"
            },
            {
              "id": "c",
              "text": "Delete all log files to get a fresh start"
            },
            {
              "id": "d",
              "text": "Disable the service permanently to prevent more errors"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An evidence-first approach is the fastest way to find the root cause. Logs from `journalctl` or in `/var/log` provide the clues needed for a safe and effective fix."
        }
      ],
      "learningAids": [
        {
          "id": "linux-201-l06-a1",
          "type": "mnemonic",
          "title": "CARE",
          "content": "Check logs, Assess risk, Recover service, Evaluate prevention. A mnemonic for a structured incident response process."
        }
      ]
    }
  ]
};
