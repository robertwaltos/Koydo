import type { LearningModule } from "@/lib/modules/types";

export const macos_101_Module: LearningModule = {
  "id": "macos-101",
  "title": "macOS Fundamentals",
  "description": "A beginner's guide to mastering macOS. Learn to navigate the interface, manage files, customize settings, and use the Terminal safely.",
  "subject": "Operating Systems",
  "tags": [
    "curriculum",
    "technology",
    "operating-systems",
    "macOS",
    "beginner"
  ],
  "minAge": 12,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Navigate the macOS desktop, Dock, and Finder with confidence.",
    "Organize files and folders effectively using naming conventions, tags, and iCloud.",
    "Customize System Settings to personalize the user experience and boost productivity.",
    "Manage application installations, privacy permissions, and system security features.",
    "Understand the importance of backups and how to use Time Machine.",
    "Execute basic, non-destructive commands in the Terminal."
  ],
  "lessons": [
    {
      "id": "macos-101-l01",
      "title": "Welcome to macOS",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "macos-101-l01-c1",
          "title": "The Desktop, Dock, and Menu Bar",
          "content": "Your Mac's screen is your digital workspace. At the bottom, the Dock holds your favorite apps for quick access. At the very top, the Menu Bar changes to show you relevant commands for whatever app you're using. Understanding these three areas is the first step to becoming a Mac power user!",
          "visualPrompts": [
            "Full-screen view of the macOS desktop.",
            "Zoom in on the Dock, highlighting the application icons.",
            "Animation showing the Menu Bar at the top changing as different applications are selected."
          ]
        },
        {
          "id": "macos-101-l01-c2",
          "title": "Mastering Window Management",
          "content": "Don't let your windows get cluttered! Use Mission Control to see all your open windows at a glance. You can also create multiple 'Spaces' or virtual desktops to organize your work by task, and even use Split View to see two apps side-by-side for ultimate focus.",
          "visualPrompts": [
            "Screencast of a four-finger swipe up to activate Mission Control.",
            "Animation showing a window being dragged to a new 'Space' at the top of the screen.",
            "Demonstration of entering Split View by hovering over the green window button."
          ]
        },
        {
          "id": "macos-101-l01-c3",
          "title": "Finder and Spotlight Essentials",
          "content": "Finder is your map to every file on your Mac. You can browse folders, preview documents, and get organized. For an even faster way to find anything, use Spotlight. Just press Command-Space and type what you're looking for—it can find files, launch apps, and even do quick calculations!",
          "visualPrompts": [
            "Screencast of a Finder window, clicking through different views like 'Columns' and 'Gallery'.",
            "Animation of the Command-Space shortcut being pressed, followed by the Spotlight search bar appearing.",
            "Example Spotlight search for an application ('Pages') and a file ('science-report.pdf')."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "macos-101-l01-f1",
          "front": "Dock",
          "back": "The customizable bar of app icons at the bottom or side of the screen."
        },
        {
          "id": "macos-101-l01-f2",
          "front": "Mission Control",
          "back": "A feature that shows all open windows, desktop spaces, and full-screen apps."
        },
        {
          "id": "macos-101-l01-f3",
          "front": "Spotlight",
          "back": "A system-wide search tool for finding files, apps, and information quickly."
        }
      ]
    },
    {
      "id": "macos-101-l02",
      "title": "Organizing Your Digital World",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "macos-101-l02-c1",
          "title": "Smart File and Folder Naming",
          "content": "A messy desktop can slow you down. Let's learn how to create a clean folder structure for your projects, schoolwork, and hobbies. We'll also cover a simple naming system, like '2024-10-26_History-Essay_V1.pages', so your files automatically sort by date and are easy to identify.",
          "visualPrompts": [
            "Screencast showing the creation of a 'Schoolwork' folder with subfolders for 'Math' and 'History'.",
            "Text overlay showing a good file name vs. a bad file name ('FinalEssay.pages')."
          ]
        },
        {
          "id": "macos-101-l02-c2",
          "title": "Tagging and iCloud Drive",
          "content": "Tags are like colorful labels you can add to any file or folder, no matter where it's saved. You can tag all your 'Urgent' files with red, for example. We'll also explore iCloud Drive, which lets you safely store your files in the cloud and access them from any Apple device.",
          "visualPrompts": [
            "Demonstration of right-clicking a file and adding a color tag.",
            "Screencast of the Finder sidebar, showing the 'Tags' section.",
            "Close-up on the cloud status icons next to files in an iCloud Drive folder."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Digital Filing Drill",
          "description": "Organize these files into the correct project folders based on their names and purpose.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "school",
                "label": "Schoolwork Folder"
              },
              {
                "id": "icloud",
                "label": "iCloud Shared Project"
              },
              {
                "id": "archive",
                "label": "Archive (Old Files)"
              }
            ],
            "items": [
              {
                "id": "m1",
                "label": "draft-history-notes.pages",
                "correctTargetId": "school"
              },
              {
                "id": "m2",
                "label": "team-presentation.key",
                "correctTargetId": "icloud"
              },
              {
                "id": "m3",
                "label": "2022-science-fair.zip",
                "correctTargetId": "archive"
              },
              {
                "id": "m4",
                "label": "group-meeting-audio.m4a",
                "correctTargetId": "icloud"
              },
              {
                "id": "m5",
                "label": "math-homework-week3.numbers",
                "correctTargetId": "school"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "macos-101-l03",
      "title": "Making Your Mac Your Own",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "macos-101-l03-c1",
          "title": "Personalizing Your Desktop and Dock",
          "content": "Make your Mac feel like home by choosing a custom wallpaper and arranging your Dock. You can add the apps you use most often for easy access and remove the ones you don't need. A personalized workspace is a productive workspace!",
          "visualPrompts": [
            "Screencast of opening System Settings and changing the desktop wallpaper.",
            "Demonstration of dragging an application icon from the Applications folder to the Dock.",
            "Animation showing an icon being dragged off the Dock and disappearing in a 'poof'."
          ]
        },
        {
          "id": "macos-101-l03-c2",
          "title": "Configuring System Settings",
          "content": "The System Settings app is the control center for your Mac. Here you can switch to Dark Mode to be easier on your eyes, adjust sound effects, and fine-tune how your trackpad or mouse works. We'll explore the most useful settings to get you started.",
          "visualPrompts": [
            "Tour of the System Settings app window.",
            "Screencast of switching between Light and Dark mode in the 'Appearance' settings.",
            "Close-up on the 'Trackpad' settings, demonstrating different gestures."
          ]
        },
        {
          "id": "macos-101-l03-c3",
          "title": "Managing Notifications and Control Center",
          "content": "Tired of constant pop-ups? Learn how to manage your notifications so you only see what's important. We'll also customize the Control Center in your menu bar to give you one-click access to controls like Wi-Fi, Bluetooth, and screen brightness.",
          "visualPrompts": [
            "Screencast of opening Notification Center and adjusting settings for an app.",
            "Demonstration of opening Control Center from the menu bar.",
            "Animation showing a control being dragged from System Settings into the Control Center."
          ]
        }
      ]
    },
    {
      "id": "macos-101-l04",
      "title": "Apps, Security, and Privacy",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "macos-101-l04-c1",
          "title": "Installing and Removing Apps",
          "content": "There are two main ways to get apps: the secure App Store and downloading from the web. We'll cover both, including how macOS's Gatekeeper feature protects you from harmful software. You'll also learn the right way to uninstall apps to keep your Mac clean.",
          "visualPrompts": [
            "Side-by-side comparison of the Mac App Store interface and a website's download page.",
            "Screencast of the Gatekeeper warning pop-up when trying to open an app from an unidentified developer.",
            "Demonstration of dragging an app from the Applications folder to the Trash to uninstall it."
          ]
        },
        {
          "id": "macos-101-l04-c2",
          "title": "Managing Privacy and Permissions",
          "content": "Your data is important. In System Settings, you can see exactly which apps have asked for permission to use your location, camera, microphone, and files. It's a good habit to review these settings regularly to make sure only trusted apps have access to your information.",
          "visualPrompts": [
            "Screencast navigating to 'Privacy & Security' in System Settings.",
            "Close-up on the list of permissions, showing how to toggle access on and off for an application."
          ]
        },
        {
          "id": "macos-101-l04-c3",
          "title": "Keeping Your Mac Secure",
          "content": "The best defense is a good offense! Keeping your macOS and apps up to date is the single most important thing you can do for security. We'll show you how to check for updates and explain how the built-in firewall adds another layer of protection.",
          "visualPrompts": [
            "Screencast of the 'Software Update' pane in System Settings, showing an available update.",
            "Animation illustrating how a firewall blocks unwanted incoming connections."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "macos-101-l04-f1",
          "front": "Gatekeeper",
          "back": "A security feature that helps protect your Mac from apps that could harm it."
        },
        {
          "id": "macos-101-l04-f2",
          "front": "App Store",
          "back": "Apple's official marketplace for finding and downloading safe, reviewed applications."
        }
      ]
    },
    {
      "id": "macos-101-l05",
      "title": "Never Lose a File: Time Machine Backups",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "macos-101-l05-c1",
          "title": "Why Backups Are Your Safety Net",
          "content": "Accidents happen—files can be deleted, or a computer might stop working. A backup is a copy of your important files stored on a separate drive. It's a safety net that ensures your precious photos, documents, and projects are never truly lost.",
          "visualPrompts": [
            "Simple animation of a file icon being accidentally dragged to the Trash and disappearing.",
            "Follow-up animation showing the file being restored from an external hard drive icon."
          ]
        },
        {
          "id": "macos-101-l05-c2",
          "title": "Setting Up Time Machine",
          "content": "macOS has a fantastic built-in backup tool called Time Machine. All you need is an external hard drive. We'll walk you through the simple steps of connecting the drive and telling your Mac to use it for automatic, hourly backups.",
          "visualPrompts": [
            "Screencast showing an external drive being plugged into the Mac.",
            "Demonstration of opening Time Machine settings and selecting the drive as a backup disk."
          ]
        },
        {
          "id": "macos-101-l05-c3",
          "title": "Restoring a Lost File",
          "content": "Need to recover a file? Time Machine makes it easy and even a little fun. When you 'Enter Time Machine,' you can travel back in time through your backups to find the exact version of the file you need and restore it with a single click.",
          "visualPrompts": [
            "Screencast of clicking 'Enter Time Machine' from the menu bar icon.",
            "View of the Time Machine 'starfield' interface, with the timeline on the right.",
            "Animation of a file flying from the background back into the current Finder window."
          ]
        }
      ]
    },
    {
      "id": "macos-101-l06",
      "title": "Checkpoint: Core Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-101-l06-q1",
          "text": "What is the most effective way to organize project files in Finder?",
          "skillId": "macos-101-s-navigation",
          "options": [
            {
              "id": "a",
              "text": "Using a clear folder structure and consistent file naming conventions."
            },
            {
              "id": "b",
              "text": "Saving everything directly to the Desktop."
            },
            {
              "id": "c",
              "text": "Giving files random names so they are hard to guess."
            },
            {
              "id": "d",
              "text": "Putting all files from every project into a single folder."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l06-q2",
          "text": "Where would you go to change your Mac's desktop wallpaper and switch to Dark Mode?",
          "skillId": "macos-101-s-customization",
          "options": [
            {
              "id": "a",
              "text": "In the Finder menu."
            },
            {
              "id": "b",
              "text": "In the System Settings app."
            },
            {
              "id": "c",
              "text": "In the App Store."
            },
            {
              "id": "d",
              "text": "In Mission Control."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "macos-101-l06-q3",
          "text": "A new app is asking for access to your microphone. Where can you manage this permission?",
          "skillId": "macos-101-s-security",
          "options": [
            {
              "id": "a",
              "text": "The 'Privacy & Security' section of System Settings."
            },
            {
              "id": "b",
              "text": "The Dock settings."
            },
            {
              "id": "c",
              "text": "The application's own preferences menu."
            },
            {
              "id": "d",
              "text": "The Spotlight search bar."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l06-q4",
          "text": "What is the main purpose of using Time Machine?",
          "skillId": "macos-101-s-backup",
          "options": [
            {
              "id": "a",
              "text": "To speed up your computer."
            },
            {
              "id": "b",
              "text": "To create automatic backups of your files to an external drive."
            },
            {
              "id": "c",
              "text": "To browse the internet."
            },
            {
              "id": "d",
              "text": "To install new applications."
            }
          ],
          "correctOptionId": "b"
        }
      ]
    },
    {
      "id": "macos-101-l07",
      "title": "Introduction to the Terminal",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-101-l07-c1",
          "title": "What is the Command Line?",
          "content": "The Terminal gives you a powerful way to talk to your computer directly using text commands. While Finder is like using a map, the Terminal is like giving turn-by-turn directions. It's a tool used by developers and tech experts, and you can learn the basics safely!",
          "visualPrompts": [
            "Animation showing the Terminal app icon in the Utilities folder.",
            "Side-by-side view of a Finder window showing the 'Documents' folder and a Terminal window showing the output of 'ls ~/Documents'."
          ]
        },
        {
          "id": "macos-101-l07-c2",
          "title": "Your First Safe Commands",
          "content": "We'll start with commands that are 'read-only'—they just look at information without changing anything. `pwd` (print working directory) tells you where you are, `ls` (list) shows you what files are in that directory, and `whoami` tells you your username.",
          "visualPrompts": [
            "Screencast of typing 'pwd' into the Terminal and pressing Enter, with the output highlighted.",
            "Screencast of typing 'ls -l' and explaining what the different columns of the output mean."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-101-l07-ia1",
          "type": "coding_editor",
          "title": "Command-Line Orientation",
          "description": "Practice path, listing, and help commands without making any system changes. Type the commands and press Enter.",
          "estimatedMinutes": 10,
          "difficultyLevel": "easy",
          "instructions": [
            "Use `pwd` to see your current location (your 'home' folder).",
            "Use `ls` to see the contents of your home folder.",
            "Use `ls -a` to see all contents, including hidden files.",
            "Use `man ls` to read the manual page for the `ls` command. (Type 'q' to quit the manual)."
          ]
        }
      ],
      "learningAids": [
        {
          "id": "macos-101-l07-a1",
          "type": "mnemonic",
          "title": "P-L-M",
          "content": "Print location (`pwd`), List contents (`ls`), Manual for help (`man`). Your first safe steps in the Terminal."
        }
      ]
    },
    {
      "id": "macos-101-l08",
      "title": "Final Checkpoint: macOS Pro",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-101-l08-q1",
          "text": "Which keyboard shortcut opens the Spotlight search bar by default?",
          "skillId": "macos-101-s-navigation",
          "options": [
            {
              "id": "a",
              "text": "Command + Space"
            },
            {
              "id": "b",
              "text": "Command + C"
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
          "id": "macos-101-l08-q2",
          "text": "When first learning Terminal, which command is a safe, 'read-only' choice?",
          "skillId": "macos-101-s-cli",
          "options": [
            {
              "id": "a",
              "text": "`ls` (list files)"
            },
            {
              "id": "b",
              "text": "`rm` (remove files)"
            },
            {
              "id": "c",
              "text": "`sudo` (run as super user)"
            },
            {
              "id": "d",
              "text": "`mkdir` (make directory)"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l08-q3",
          "text": "What is the most comprehensive strategy to prevent accidental file loss?",
          "skillId": "macos-101-s-backup",
          "options": [
            {
              "id": "a",
              "text": "Using Time Machine for automatic backups and occasionally using iCloud Drive."
            },
            {
              "id": "b",
              "text": "Saving multiple copies of a file on the Desktop."
            },
            {
              "id": "c",
              "text": "Emailing important files to yourself once a year."
            },
            {
              "id": "d",
              "text": "Hoping for the best and never deleting anything."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "macos-101-l08-q4",
          "text": "Which combination of actions most improves your Mac's overall security?",
          "skillId": "macos-101-s-security",
          "options": [
            {
              "id": "a",
              "text": "Regularly installing software updates, using a strong password, and reviewing app permissions."
            },
            {
              "id": "b",
              "text": "Installing apps from any website and disabling the firewall."
            },
            {
              "id": "c",
              "text": "Never updating your system so nothing changes."
            },
            {
              "id": "d",
              "text": "Sharing your administrator password with friends."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    }
  ]
};
