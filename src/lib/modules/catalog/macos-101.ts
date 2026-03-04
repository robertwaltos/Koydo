import type { LearningModule } from "@/lib/modules/types";

export const Macos101Module: LearningModule = {
  "id": "macos-101",
  "title": "macOS Fundamentals",
  "description": "Learn practical macOS workflows for Finder, system settings, security, and Terminal basics.",
  "subject": "Operating Systems",
  "tags": [
    "curriculum",
    "technology",
    "operating-systems"
  ],
  "minAge": 12,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Use Finder and Spotlight to manage files efficiently.",
    "Configure macOS settings for productivity and safety.",
    "Run core Terminal commands responsibly."
  ],
  "lessons": [
    {
      "id": "macos-101-l01",
      "title": "Desktop, Dock, and Finder",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "macos-101-l01-c1",
          "title": "Dock and Menu Bar",
          "content": "The Dock is a special area at the bottom of your screen that helps you quickly open your favorite applications and switch between them easily. The menu bar, located at the top of the screen, provides you with different options and controls that change depending on what you are doing. This means you can find the tools you need right when you need them, making your work more efficient and fun!\nContext recap: The Dock is a special area at the bottom of your screen that helps you quickly open your favorite applications and switch between them easily. The menu bar, located at the top of the screen, provides you with different options and controls that change depending on what you are doing. This means you can find the tools you need right when you need them, making your work more efficient and fun!"
        },
        {
          "id": "macos-101-l01-c2",
          "title": "Finder Navigation",
          "content": "Navigating through the Finder is like exploring a treasure map on your computer! You can use sidebars to quickly jump to different folders, tags to categorize your files, and various views to see your content in a way that makes sense to you. This helps you find and organize your documents, pictures, and other important files in no time at all!\nContext recap: Navigating through the Finder is like exploring a treasure map on your computer! You can use sidebars to quickly jump to different folders, tags to categorize your files, and various views to see your content in a way that makes sense to you. This helps you find and organize your documents, pictures, and other important files in no time at all!"
        },
        {
          "id": "macos-101-l01-c3",
          "title": "Spotlight Workflow",
          "content": "Spotlight is a powerful search tool that lets you find apps, files, and even quick information all from one place. By simply typing in what you are looking for, you can quickly access everything you need without having to search through multiple folders. This makes it super easy to stay organized and find what you need for your school projects or personal interests!\nContext recap: Spotlight is a powerful search tool that lets you find apps, files, and even quick information all from one place. By simply typing in what you are looking for, you can quickly access everything you need without having to search through multiple folders. This makes it super easy to stay organized and find what you need for your school projects or personal interests!"
        }
      ],
      "flashcards": [
        {
          "id": "macos-101-l01-f1",
          "front": "Finder",
          "back": "The main file manager for browsing, organizing, and previewing files."
        },
        {
          "id": "macos-101-l01-f2",
          "front": "Spotlight",
          "back": "A system-wide search and launcher shortcut for apps and files."
        }
      ]
    },
    {
      "id": "macos-101-l02",
      "title": "File Management and iCloud Awareness",
      "type": "interactive",
      "duration": 12,
      "interactiveActivities": [
        {
          "id": "macos-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Finder Organization Drill",
          "description": "Sort project assets into local and cloud-aware folders.",
          "estimatedMinutes": 9,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "local",
                "label": "Local Work Folder"
              },
              {
                "id": "icloud",
                "label": "iCloud Shared Folder"
              },
              {
                "id": "archive",
                "label": "Archive"
              }
            ],
            "items": [
              {
                "id": "m1",
                "label": "draft-notes.pages",
                "correctTargetId": "local"
              },
              {
                "id": "m2",
                "label": "team-summary.key",
                "correctTargetId": "icloud"
              },
              {
                "id": "m3",
                "label": "old-export.zip",
                "correctTargetId": "archive"
              },
              {
                "id": "m4",
                "label": "meeting-audio.m4a",
                "correctTargetId": "icloud"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "macos-101-l02-a1",
          "type": "practice",
          "title": "Naming Convention Guide",
          "content": "Use date-prefix + project name + version to keep files sortable."
        }
      ]
    },
    {
      "id": "macos-101-l03",
      "title": "Checkpoint: Core macOS Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-101-l03-q1",
          "text": "Which shortcut opens Spotlight search by default?",
          "skillId": "macos-101-skill-navigation",
          "options": [
            {
              "id": "a",
              "text": "Command + Space"
            },
            {
              "id": "b",
              "text": "Command + Shift + N"
            },
            {
              "id": "c",
              "text": "Control + Escape"
            },
            {
              "id": "d",
              "text": "Option + Tab"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l03-q2",
          "text": "Which setting should remain enabled for device security?",
          "skillId": "macos-101-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Automatic updates and built-in firewall"
            },
            {
              "id": "b",
              "text": "Disable all lock screen requirements"
            },
            {
              "id": "c",
              "text": "Install unknown apps without checks"
            },
            {
              "id": "d",
              "text": "Turn off account password"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l03-q3",
          "text": "What is a safe first command pattern in Terminal learning?",
          "skillId": "macos-101-skill-cli",
          "options": [
            {
              "id": "a",
              "text": "Start with read-only commands like pwd, ls, and man."
            },
            {
              "id": "b",
              "text": "Run delete commands immediately."
            },
            {
              "id": "c",
              "text": "Disable SIP for convenience."
            },
            {
              "id": "d",
              "text": "Force root shell by default."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "learningAids": [
        {
          "id": "macos-101-l03-a1",
          "type": "mnemonic",
          "title": "F-S-T",
          "content": "Finder, Spotlight, Terminal: core tools in order of safe exploration."
        }
      ]
    },
    {
      "id": "macos-101-l04",
      "title": "System Settings, Privacy, and Backup",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "macos-101-l04-c1",
          "title": "Permissions and Privacy",
          "content": "It's important to check the permissions for the apps you use on your Mac. This means looking at what access they have to your camera, microphone, files, and location. By understanding these permissions, you can keep your personal information safe and make sure that only the apps you trust can access what they need to work properly.\nContext recap: It's important to check the permissions for the apps you use on your Mac. This means looking at what access they have to your camera, microphone, files, and location. By understanding these permissions, you can keep your personal information safe and make sure that only the apps you trust can access what they need to work properly."
        },
        {
          "id": "macos-101-l04-c2",
          "title": "Software Updates",
          "content": "Keeping your macOS and applications up to date is essential for security and performance. You can schedule updates to happen at times that work best for you, like after school or during your free time. This way, you can enjoy the latest features and improvements without interrupting your important tasks or fun activities!\nContext recap: Keeping your macOS and applications up to date is essential for security and performance. You can schedule updates to happen at times that work best for you, like after school or during your free time. This way, you can enjoy the latest features and improvements without interrupting your important tasks or fun activities!"
        },
        {
          "id": "macos-101-l04-c3",
          "title": "Time Machine Basics",
          "content": "Time Machine is a built-in feature that helps you back up your files automatically. It creates incremental backups, which means it saves changes over time, allowing you to recover lost files easily. This is a great way to protect your work and reduce the chances of losing important documents due to accidental deletions or other mishaps.\nContext recap: Time Machine is a built-in feature that helps you back up your files automatically. It creates incremental backups, which means it saves changes over time, allowing you to recover lost files easily. This is a great way to protect your work and reduce the chances of losing important documents due to accidental deletions or other mishaps."
        }
      ]
    },
    {
      "id": "macos-101-l05",
      "title": "Terminal Starter Lab",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "macos-101-l05-ia1",
          "type": "coding_editor",
          "title": "Command-Line Orientation",
          "description": "Practice path, listing, and help commands without making system changes.",
          "estimatedMinutes": 12,
          "difficultyLevel": "medium",
          "instructions": [
            "Use pwd to view location.",
            "Use ls -la to inspect directory contents.",
            "Use man <command> to read command documentation."
          ]
        }
      ],
      "learningAids": [
        {
          "id": "macos-101-l05-a1",
          "type": "mnemonic",
          "title": "L-D-C",
          "content": "Locate, Display, Confirm before any command action."
        }
      ]
    },
    {
      "id": "macos-101-l06",
      "title": "Checkpoint 2: Practical macOS Workflow",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-101-l06-q1",
          "text": "Which workflow best reduces accidental file loss on macOS?",
          "skillId": "macos-101-skill-backup",
          "options": [
            {
              "id": "a",
              "text": "Use Time Machine backups and verify restore points regularly."
            },
            {
              "id": "b",
              "text": "Rely only on desktop copies with no backups."
            },
            {
              "id": "c",
              "text": "Disable backup prompts permanently."
            },
            {
              "id": "d",
              "text": "Store all files only in Downloads forever."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l06-q2",
          "text": "When practicing Terminal basics, what is the safest approach?",
          "skillId": "macos-101-skill-cli",
          "options": [
            {
              "id": "a",
              "text": "Start with read-only commands and review docs before changes."
            },
            {
              "id": "b",
              "text": "Run destructive commands to learn faster."
            },
            {
              "id": "c",
              "text": "Always use elevated privileges by default."
            },
            {
              "id": "d",
              "text": "Disable system protections for convenience."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l06-q3",
          "text": "What improves device security posture the most for everyday users?",
          "skillId": "macos-101-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Keep updates current, require login protection, and review permissions."
            },
            {
              "id": "b",
              "text": "Install software from unknown sources without checks."
            },
            {
              "id": "c",
              "text": "Turn off update reminders and firewall settings."
            },
            {
              "id": "d",
              "text": "Share admin credentials with all users."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l06-q4",
          "text": "A strong Finder organization system should include:",
          "skillId": "macos-101-skill-navigation",
          "options": [
            {
              "id": "a",
              "text": "Consistent naming, folder structure, and periodic cleanup reviews."
            },
            {
              "id": "b",
              "text": "Random names and mixed file locations."
            },
            {
              "id": "c",
              "text": "No tags, no folders, and no archive approach."
            },
            {
              "id": "d",
              "text": "Only one folder for every project forever."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "learningAids": [
        {
          "id": "macos-101-l06-a1",
          "type": "practice",
          "title": "Daily Ops Checklist",
          "content": "Check navigation, security, backup, and command-safety habits each week."
        }
      ]
    }
  ]
};
