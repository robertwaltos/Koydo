import type { LearningModule } from "@/lib/modules/types";

export const windows_101_Module: LearningModule = {
  "id": "windows-101",
  "title": "Windows Fundamentals",
  "description": "Build practical Windows skills for navigation, file management, security, and terminal workflows.",
  "subject": "Operating Systems",
  "tags": [
    "curriculum",
    "technology",
    "operating-systems"
  ],
  "minAge": 12,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Describe the Windows NT architecture and differentiate major Windows editions",
    "Navigate the desktop, taskbar, Start menu, and system tray confidently",
    "Organize files and folders using File Explorer and practical workflows",
    "Manage user accounts, UAC prompts, and NTFS permissions",
    "Configure system settings through both Settings and Control Panel",
    "Monitor performance and manage startup programs with Task Manager",
    "Apply security and maintenance best practices across Windows environments"
  ],
  "lessons": [
    {
      "id": "windows-101-l01",
      "title": "Windows Architecture and Editions",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain the layered architecture of Windows NT",
        "Differentiate between Windows Home, Pro, and Enterprise editions",
        "Describe the roles of the kernel, HAL, and user-mode subsystems"
      ],
      "chunks": [
        {
          "id": "windows-101-l01-c1",
          "title": "The Windows NT Kernel Architecture",
          "content": "Imagine a busy restaurant. The dining area is where customers eat and chat, while the kitchen is where the chefs work with the raw ingredients. Modern Windows works in a similar way, using a structure called the Windows NT architecture. It divides the operating system into two main areas: User Mode (the dining area) and Kernel Mode (the kitchen).\n\nIn Kernel Mode, we find the core components of the operating system. This includes the NT kernel, which acts like the head chef managing all essential functions. There is also the Hardware Abstraction Layer (HAL), which helps the operating system communicate with the physical hardware, and device drivers, which are instructions that let Windows control devices like printers and graphics cards. These components have direct access to the computer's hardware and memory.\n\nUser Mode is where all the applications you use every day run—like web browsers, word processors, and games. These programs cannot touch the hardware directly. Instead, they interact with the kernel through 'system calls,' which are like waiters taking your order to the kitchen. This separation is crucial for stability. If a program in User Mode crashes, it won't bring down the entire system, because it doesn't have access to the core hardware."
        },
        {
          "id": "windows-101-l01-c2",
          "title": "Key System Components",
          "content": "The Windows Executive is like the restaurant manager, providing important services that help the system run smoothly. It manages resources through different specialized 'managers.' For example, the Object Manager keeps track of everything the computer needs to function. The I/O (Input/Output) Manager helps the computer communicate with devices like keyboards and mice.\n\nAnother essential component is the Memory Manager. It takes care of 'virtual memory,' a clever trick that allows the computer to use hard drive space as if it were extra RAM. This helps you run more programs at once without your computer freezing up.\n\nThe Security Reference Monitor acts as a bouncer, making sure only authorized users can access certain files. Beneath all this, the kernel schedules tasks across your CPU cores based on priority, deciding which jobs are most important. Finally, the Registry is a massive database that stores all the settings for your hardware, software, and user preferences. Knowing how these parts work together makes troubleshooting computer problems much easier!"
        },
        {
          "id": "windows-101-l01-c3",
          "title": "Windows Editions Compared",
          "content": "Windows comes in several different 'flavors' or editions, each tailored for different types of users.\n\nFirst, we have Windows Home. This edition is perfect for everyday use—browsing the internet, doing homework, and playing games. It includes essential features like Windows Defender to protect against viruses, and basic device encryption. However, it lacks advanced professional tools.\n\nNext is Windows Pro. Designed for businesses and power users, it includes everything in Home, plus advanced tools. It features Hyper-V for running virtual machines (computers within your computer), BitLocker for full-disk encryption to lock down your data, and Remote Desktop hosting so you can access your PC from far away.\n\nFinally, there is Windows Enterprise. This is used by large organizations and schools. It includes all Pro features plus top-tier security options like AppLocker, which lets IT administrators control exactly which apps are allowed to run. When choosing an edition, think about what you need: everyday tasks, advanced professional tools, or massive organizational control."
        }
      ],
      "flashcards": [
        {
          "id": "windows-101-l01-f1",
          "front": "Kernel mode vs. user mode",
          "back": "Kernel mode has unrestricted hardware access (kernel, HAL, drivers). User mode runs applications in isolated address spaces, accessing hardware only through system calls."
        },
        {
          "id": "windows-101-l01-f2",
          "front": "Hardware Abstraction Layer (HAL)",
          "back": "A component that sits between the kernel and hardware, providing a consistent interface so Windows can run on different processor and chipset architectures."
        },
        {
          "id": "windows-101-l01-f3",
          "front": "Windows Registry",
          "back": "A hierarchical database (stored in hive files) that centralizes configuration for hardware, software, user preferences, and system policies."
        },
        {
          "id": "windows-101-l01-f4",
          "front": "Windows Pro vs. Home",
          "back": "Pro adds Group Policy Editor, BitLocker encryption, Remote Desktop hosting, Hyper-V, and Active Directory domain join — features absent in Home."
        }
      ],
      "learningAids": [
        {
          "id": "windows-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "[Visual Prompt: An illustration of a restaurant. The dining area is labeled 'User Mode' with apps like browsers sitting at tables. The kitchen doors are labeled 'System Calls'. Inside the kitchen, chefs labeled 'Kernel' and 'HAL' are cooking with hardware ingredients.] Visual summary of the Windows NT architecture."
        }
      ]
    },
    {
      "id": "windows-101-l02",
      "title": "Desktop, Taskbar, and Start Menu Navigation",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Identify major desktop elements including the taskbar, system tray, and notification center",
        "Use Snap Layouts, virtual desktops, and keyboard shortcuts for window management",
        "Customize the Start menu and search to launch apps efficiently"
      ],
      "chunks": [
        {
          "id": "windows-101-l02-c1",
          "title": "The Desktop and Taskbar",
          "content": "The Windows desktop is your personal digital workspace. It features a background wallpaper where you can place shortcuts to your favorite files and apps. At the bottom of the screen is the taskbar, the control center of your desktop. The taskbar shows icons for pinned applications, allowing you to open them with a single click, and displays currently open windows so you can switch between them easily.\n\nIn the lower-right corner is the system tray (or notification area). This spot is incredibly useful because it shows background services at a glance. You can check your Wi-Fi connection, adjust the volume, monitor battery life, and check the time. \n\nYou can customize your taskbar by right-clicking it and selecting 'Taskbar Settings.' Here, you can turn the search bar on or off, add widgets, and choose which icons appear. Keeping your taskbar organized helps you work faster and stay focused."
        },
        {
          "id": "windows-101-l02-c2",
          "title": "Window Management and Virtual Desktops",
          "content": "Have you ever had too many windows open at once? Windows has a fantastic feature called Snap Layouts to help you organize your screen. If you hover your mouse over the maximize button (the square in the top right corner of any window), a menu of layout options appears. You can snap windows side-by-side, in a grid, or in columns. You can also use keyboard shortcuts: hold the Windows key and press the Left or Right arrow keys to snap a window instantly.\n\nAnother powerful tool is Virtual Desktops. This lets you create entirely separate workspaces. For example, you could have Desktop 1 for schoolwork and Desktop 2 for gaming. To create a new virtual desktop, press Win + Ctrl + D. To switch between them, press Win + Ctrl + Left or Right arrow.\n\nTo see everything you have open at once, press Alt + Tab to cycle through your current windows, or press Win + Tab to open Task View, which shows all your open apps and virtual desktops on one screen."
        },
        {
          "id": "windows-101-l02-c3",
          "title": "Start Menu and Search",
          "content": "The Start menu is your computer's central hub, accessed by clicking the Windows icon or pressing the Win key. Inside, you'll find 'Pinned apps' (your favorites), 'Recommended' files you've recently used, and an 'All apps' button that lists every program alphabetically.\n\nYou can customize the Start menu by right-clicking any app to pin or unpin it, and you can drag pinned apps around to organize them exactly how you like.\n\nWindows Search is built right in. Just press Win + S (or simply open the Start menu and start typing) to find apps, files, or web results instantly. You can even use filters by clicking tabs like 'Apps' or 'Documents' to narrow down your search.\n\nFor power users, there is the Run dialog box. Press Win + R to open it, and you can type specific commands (like 'calc' for the calculator or 'control' for the Control Panel) to launch tools instantly without clicking through menus."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-101-l02-a1",
          "title": "Match Shortcut to Action",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Win + D",
              "right": "Show / hide the desktop"
            },
            {
              "left": "Win + E",
              "right": "Open File Explorer"
            },
            {
              "left": "Alt + Tab",
              "right": "Switch between open windows"
            },
            {
              "left": "Win + Ctrl + D",
              "right": "Create a new virtual desktop"
            },
            {
              "left": "Win + L",
              "right": "Lock the computer"
            },
            {
              "left": "Win + I",
              "right": "Open Settings"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "windows-101-l02-f1",
          "front": "System tray (notification area)",
          "back": "The area in the lower-right corner of the taskbar showing background service icons — network, volume, battery, clock, and hidden overflow icons."
        },
        {
          "id": "windows-101-l02-f2",
          "front": "Snap Layouts",
          "back": "A feature that lets you arrange windows into predefined layouts (side-by-side, quadrants, columns) by hovering over the maximize button or using Win + Arrow keys."
        },
        {
          "id": "windows-101-l02-f3",
          "front": "Virtual desktops",
          "back": "Separate workspaces that let you organize open windows by task — create with Win + Ctrl + D, switch with Win + Ctrl + Left/Right."
        },
        {
          "id": "windows-101-l02-f4",
          "front": "Win + R (Run dialog)",
          "back": "Opens a quick-launch dialog for system commands like msconfig, regedit, control, or cmd — bypasses menus for power-user access."
        }
      ],
      "learningAids": [
        {
          "id": "windows-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "[Visual Prompt: An interactive graphic of a keyboard highlighting the Windows key, Ctrl, Alt, and Arrow keys.] Practice using the keyboard shortcuts mentioned in this lesson to navigate your desktop without touching the mouse."
        }
      ]
    },
    {
      "id": "windows-101-l03",
      "title": "Desktop & Navigation Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of Windows architecture, desktop navigation, and window management"
      ],
      "questions": [
        {
          "id": "windows-101-l03-q1",
          "text": "What is the primary purpose of the Hardware Abstraction Layer (HAL)?",
          "skillId": "windows-101-skill-arch",
          "options": [
            {
              "id": "a",
              "text": "To display the graphical desktop interface"
            },
            {
              "id": "b",
              "text": "To provide a consistent interface between the kernel and different hardware platforms"
            },
            {
              "id": "c",
              "text": "To manage user account passwords"
            },
            {
              "id": "d",
              "text": "To compress files on the hard drive"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The HAL abstracts hardware differences so the kernel can run on various processor architectures without modification."
        },
        {
          "id": "windows-101-l03-q2",
          "text": "Which keyboard shortcut creates a new virtual desktop?",
          "skillId": "windows-101-skill-nav",
          "options": [
            {
              "id": "a",
              "text": "Win + D"
            },
            {
              "id": "b",
              "text": "Alt + F4"
            },
            {
              "id": "c",
              "text": "Win + Ctrl + D"
            },
            {
              "id": "d",
              "text": "Ctrl + Shift + Esc"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Win + Ctrl + D creates a new virtual desktop. Win + D shows the desktop, and Alt + F4 closes the active window."
        },
        {
          "id": "windows-101-l03-q3",
          "text": "Which feature is available in Windows Pro but NOT in Windows Home?",
          "skillId": "windows-101-skill-arch",
          "options": [
            {
              "id": "a",
              "text": "Microsoft Edge browser"
            },
            {
              "id": "b",
              "text": "BitLocker full-disk encryption"
            },
            {
              "id": "c",
              "text": "Windows Defender antivirus"
            },
            {
              "id": "d",
              "text": "File Explorer"
            }
          ],
          "correctOptionId": "b",
          "explanation": "BitLocker full-disk encryption is exclusive to Pro and Enterprise editions. Home includes only basic device encryption."
        },
        {
          "id": "windows-101-l03-q4",
          "text": "The system tray (notification area) is located:",
          "skillId": "windows-101-skill-nav",
          "options": [
            {
              "id": "a",
              "text": "In the center of the Start menu"
            },
            {
              "id": "b",
              "text": "At the top of every application window"
            },
            {
              "id": "c",
              "text": "In the lower-right corner of the taskbar"
            },
            {
              "id": "d",
              "text": "Inside File Explorer only"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The system tray sits in the lower-right corner of the taskbar and shows icons for background services like network, volume, and clock."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "windows-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "[Visual Prompt: A graphic of a brain lifting weights.] Remember: HAL helps Hardware, Pro protects with BitLocker, and the Tray tracks time!"
        }
      ]
    },
    {
      "id": "windows-101-l04",
      "title": "File Explorer and File Management",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Navigate File Explorer's ribbon, address bar, and navigation pane",
        "Organize files using folders, naming conventions, and metadata",
        "Use search, filters, and file properties for efficient retrieval"
      ],
      "chunks": [
        {
          "id": "windows-101-l04-c1",
          "title": "File Explorer Interface",
          "content": "File Explorer is your map to everything stored on your computer. You can open it instantly by pressing Win + E. On the left side is the Navigation Pane. This is your quick-travel menu. It shows 'Quick Access' (your favorite and recent folders), 'This PC' (your hard drives), and 'OneDrive' (your cloud storage).\n\nAt the top is the Address Bar, which shows exactly where you are, like a breadcrumb trail (e.g., This PC > Documents > School). You can click any part of that trail to jump back to a previous folder.\n\nRight below the address bar is the Command Bar. This gives you buttons to create new folders, copy, paste, rename, or delete files. You can also change how your files look by clicking the 'View' button—switch to 'Large Icons' to see picture previews, or 'Details' to see exactly when a file was created and how big it is."
        },
        {
          "id": "windows-101-l04-c2",
          "title": "Organizing Files and Folders",
          "content": "Keeping your files organized is like keeping your room clean—it saves you a lot of time when you're looking for something! Instead of dumping everything on your desktop, create a folder structure. For example: Documents > School > Science > Project1.\n\nIt's also smart to name your files clearly. Instead of naming a file 'document1.docx', name it '2023-10-15_Science_Volcano_Draft.docx'. Adding dates or version numbers makes sorting a breeze.\n\nBe careful with special characters. Windows won't let you use characters like \\, /, :, *, ?, <, >, or | in file names because the system uses those symbols for its own background coding. Also, try not to make your folder names too long. Windows has a default path limit of 260 characters. If your folders are nested too deep with super long names, Windows might throw an error when you try to open them!"
        },
        {
          "id": "windows-101-l04-c3",
          "title": "Search, Filters, and File Properties",
          "content": "Finding a lost file doesn't have to be a treasure hunt. In File Explorer, you can use the search box in the top right corner (or press Ctrl + F). Windows keeps an invisible index of your files, so searches are usually lightning fast.\n\nYou can use 'filters' to narrow things down. If you type 'kind:document', Windows will only show you documents, ignoring pictures and music. If you type 'datemodified:this week', it only shows recent files. You can even combine them!\n\nWant to know more about a file? Right-click it and select 'Properties'. This opens a window showing the file's exact size, creation date, and hidden attributes. If you click the 'Details' tab, you can see extra metadata, like the dimensions of a photograph or the author of a document."
        }
      ],
      "flashcards": [
        {
          "id": "windows-101-l04-f1",
          "front": "Quick Access",
          "back": "A section in File Explorer's navigation pane that shows pinned folders and recently/frequently used folders and files for fast access."
        },
        {
          "id": "windows-101-l04-f2",
          "front": "File path maximum (default)",
          "back": "260 characters (MAX_PATH) — deep folder nesting with long names can exceed this limit and cause errors unless long path support is enabled."
        },
        {
          "id": "windows-101-l04-f3",
          "front": "File Explorer search filters",
          "back": "Refine searches with syntax like kind:document, datemodified:this week, size:>1MB — combine filters to narrow results quickly."
        },
        {
          "id": "windows-101-l04-f4",
          "front": "Hidden files attribute",
          "back": "A file property that prevents the file from appearing in normal Explorer views — toggle visibility via View > Show > Hidden items."
        }
      ],
      "learningAids": [
        {
          "id": "windows-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "[Visual Prompt: A diagram showing a messy room transforming into a neatly organized filing cabinet, with labels pointing to 'Navigation Pane', 'Address Bar', and 'Command Bar' on a File Explorer window.] Visual summary of File Explorer organization."
        }
      ]
    },
    {
      "id": "windows-101-l05",
      "title": "User Accounts, UAC, and Permissions",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Differentiate between administrator and standard user accounts",
        "Explain how User Account Control (UAC) protects the system",
        "Read and modify basic NTFS file permissions"
      ],
      "chunks": [
        {
          "id": "windows-101-l05-c1",
          "title": "Account Types and Profiles",
          "content": "In Windows, there are two main types of user accounts: Administrator and Standard User.\n\nAdministrator accounts are like the superheroes of the computer. They have the power to install new software, change security settings, and access any file on the system. Because they have so much power, they also carry the most risk if a hacker or virus gets in.\n\nStandard User accounts are the everyday heroes. They can run apps, browse the web, and change their own desktop wallpaper, but they cannot make changes that affect the whole computer. For daily tasks, it is highly recommended to use a Standard User account to keep your computer safe from accidental damage.\n\nEvery user gets their own personal folder located at C:\\Users\\[YourName]. Inside, you have your own private Desktop, Documents, and Downloads folders that other Standard Users cannot peek into."
        },
        {
          "id": "windows-101-l05-c2",
          "title": "User Account Control (UAC)",
          "content": "User Account Control (UAC) is like a security guard for your computer. Even if you are logged in as an Administrator, Windows runs your apps with Standard permissions by default. This prevents sneaky viruses from installing themselves in the background.\n\nWhen you try to do something major—like installing a new game or changing a firewall setting—the screen will dim and a UAC prompt will pop up. It asks, 'Do you want to allow this app to make changes to your device?' If you are an Admin, you just click 'Yes'. If you are a Standard User, you will have to type in an Admin's password to proceed.\n\nYou can spot actions that will trigger this security guard by looking for a small blue and yellow shield icon next to buttons or menus. Never turn UAC off; it is one of your best defenses against malware!"
        },
        {
          "id": "windows-101-l05-c3",
          "title": "NTFS Permissions Basics",
          "content": "NTFS permissions are rules that decide exactly who can look at, change, or delete a file. The main permission levels are: Full Control, Modify, Read & Execute, Read, and Write.\n\nThese rules can be set to 'Allow' or 'Deny'. Here is a golden rule of Windows: a 'Deny' permission always beats an 'Allow' permission. If you are in a group that is allowed to read a file, but also in a group that is denied, you will be blocked.\n\nBy default, files inherit permissions from the folder they are inside. If you put a file into a highly secure folder, the file automatically becomes highly secure too. To check these rules, right-click a file, select 'Properties', and click the 'Security' tab. If you ever get an 'Access Denied' error, this is the tab you need to check!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-101-l05-a1",
          "title": "Sort Account Capabilities",
          "type": "sorting_buckets",
          "buckets": [
            "Administrator Account",
            "Standard User Account"
          ],
          "items": [
            {
              "text": "Install system-wide software",
              "bucket": "Administrator Account"
            },
            {
              "text": "Change personal desktop wallpaper",
              "bucket": "Standard User Account"
            },
            {
              "text": "Modify Windows Update settings",
              "bucket": "Administrator Account"
            },
            {
              "text": "Browse the web and use Office apps",
              "bucket": "Standard User Account"
            },
            {
              "text": "Create or delete other user accounts",
              "bucket": "Administrator Account"
            },
            {
              "text": "Change own password",
              "bucket": "Standard User Account"
            },
            {
              "text": "Disable Windows Firewall",
              "bucket": "Administrator Account"
            },
            {
              "text": "Run apps already installed on the PC",
              "bucket": "Standard User Account"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "windows-101-l05-f1",
          "front": "User Account Control (UAC)",
          "back": "A security feature that runs apps with standard privileges by default and prompts for elevation when system-wide changes are requested — prevents silent unauthorized modifications."
        },
        {
          "id": "windows-101-l05-f2",
          "front": "Standard User account",
          "back": "An account type that can run most applications and change personal settings but cannot install system software, modify system files, or alter other users' data."
        },
        {
          "id": "windows-101-l05-f3",
          "front": "NTFS permissions inheritance",
          "back": "By default, files and subfolders inherit the permissions of their parent folder. Inheritance can be broken to set custom permissions on individual items."
        },
        {
          "id": "windows-101-l05-f4",
          "front": "Deny vs. Allow in NTFS",
          "back": "Deny permissions always override Allow permissions. If a user belongs to two groups — one granting Allow and one granting Deny — the Deny wins."
        }
      ],
      "learningAids": [
        {
          "id": "windows-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "[Visual Prompt: An image of a blue and yellow security shield blocking a virus character.] Next time you see the UAC shield icon, pause and read what program is asking for permission before clicking 'Yes'."
        }
      ]
    },
    {
      "id": "windows-101-l06",
      "title": "Files & Security Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of file management, user accounts, UAC, and permissions"
      ],
      "questions": [
        {
          "id": "windows-101-l06-q1",
          "text": "What is the default maximum file path length in Windows?",
          "skillId": "windows-101-skill-files",
          "options": [
            {
              "id": "a",
              "text": "128 characters"
            },
            {
              "id": "b",
              "text": "260 characters"
            },
            {
              "id": "c",
              "text": "512 characters"
            },
            {
              "id": "d",
              "text": "There is no limit"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The default MAX_PATH in Windows is 260 characters. Long path support can be enabled via Group Policy but is not on by default."
        },
        {
          "id": "windows-101-l06-q2",
          "text": "When a user is a member of two groups — one with Allow Read and one with Deny Read — what happens?",
          "skillId": "windows-101-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Allow takes precedence"
            },
            {
              "id": "b",
              "text": "The permissions cancel out and default to Read"
            },
            {
              "id": "c",
              "text": "Deny always overrides Allow"
            },
            {
              "id": "d",
              "text": "The user is prompted to choose"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In NTFS, Deny permissions always override Allow permissions, regardless of which group the permission comes from."
        },
        {
          "id": "windows-101-l06-q3",
          "text": "What does the shield icon on a button or menu item indicate?",
          "skillId": "windows-101-skill-security",
          "options": [
            {
              "id": "a",
              "text": "The action is disabled"
            },
            {
              "id": "b",
              "text": "Clicking it will trigger a UAC elevation prompt"
            },
            {
              "id": "c",
              "text": "The setting has been changed from its default"
            },
            {
              "id": "d",
              "text": "An antivirus scan is required first"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The shield icon signals that the action requires administrator privileges and will trigger a User Account Control prompt."
        },
        {
          "id": "windows-101-l06-q4",
          "text": "Why is it recommended to use a standard user account for daily work?",
          "skillId": "windows-101-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Standard accounts are faster"
            },
            {
              "id": "b",
              "text": "Standard accounts can still install any software"
            },
            {
              "id": "c",
              "text": "It reduces the risk of malware making system-wide changes without your knowledge"
            },
            {
              "id": "d",
              "text": "Administrator accounts cannot access the internet"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Standard accounts limit the blast radius of malware — malicious software cannot silently install system-wide components without triggering a UAC prompt for admin credentials."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "windows-101-l07",
      "title": "Settings vs. Control Panel and System Configuration",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Navigate the modern Settings app and locate key configuration areas",
        "Use Control Panel for legacy settings not yet migrated to Settings",
        "Apply system configuration tools like msconfig and System Information"
      ],
      "chunks": [
        {
          "id": "windows-101-l07-c1",
          "title": "The Settings App",
          "content": "The Settings app (press Win + I to open it) is your modern control center for Windows. It is designed to be clean, easy to read, and touch-friendly. Inside, you'll find several categories:\n\n- **System**: Adjust your screen brightness, sound volume, and check your storage space.\n- **Bluetooth & Devices**: Connect wireless headphones, mice, or printers.\n- **Network & Internet**: Manage your Wi-Fi passwords and connection status.\n- **Personalization**: Change your desktop background, colors, and themes.\n- **Apps**: Uninstall programs or choose your default web browser.\n- **Windows Update**: Download the latest security patches to keep your PC safe.\n\nIf you ever can't find a setting, just use the search bar at the top left of the Settings app. It's the fastest way to jump straight to what you need."
        },
        {
          "id": "windows-101-l07-c2",
          "title": "Control Panel: Legacy but Still Needed",
          "content": "Before the Settings app existed, Windows used the Control Panel. You can still open it by pressing Win + R, typing 'control', and hitting Enter. \n\nWhile Microsoft has moved most everyday settings to the modern Settings app, the Control Panel is still required for deep, advanced configurations. For example, if you need to set up complex rules for the Windows Defender Firewall, manage advanced network adapter properties, or configure legacy email profiles, you will find yourself back in the Control Panel.\n\nThink of the Settings app as the dashboard of a car (easy to use, handles the basics) and the Control Panel as popping the hood (complex, but necessary for deep maintenance). IT professionals need to be comfortable navigating both."
        },
        {
          "id": "windows-101-l07-c3",
          "title": "System Configuration Tools",
          "content": "Sometimes you need special tools to fix computer problems. **MSConfig** (System Configuration) is a powerful tool you can open via the Run dialog. It allows you to boot your computer into 'Safe Mode'. Safe Mode loads only the absolute bare minimum files needed to run Windows, which is incredibly helpful if a bad driver or virus is preventing your PC from starting normally.\n\nAnother great tool is **System Information** (type 'msinfo32' in the Start menu). It generates a massive, detailed report of every piece of hardware inside your computer, including your exact processor model, BIOS version, and how much RAM is installed.\n\nFinally, **Device Manager** (type 'devmgmt.msc') shows a list of all your hardware. If a piece of hardware isn't working right, it will show up here with a yellow warning triangle, letting you know the driver needs to be updated or fixed."
        }
      ],
      "flashcards": [
        {
          "id": "windows-101-l07-f1",
          "front": "Settings app (Win + I)",
          "back": "The modern configuration interface for Windows — organized by category (System, Network, Accounts, etc.) with search and touch-friendly design."
        },
        {
          "id": "windows-101-l07-f2",
          "front": "Control Panel",
          "back": "The legacy configuration interface using applets — still needed for advanced firewall rules, network adapter settings, Programs and Features, and credential management."
        },
        {
          "id": "windows-101-l07-f3",
          "front": "MSConfig (System Configuration)",
          "back": "A tool for controlling boot options, enabling Safe Mode, and selectively disabling startup services — useful for clean-boot troubleshooting."
        },
        {
          "id": "windows-101-l07-f4",
          "front": "System Information (msinfo32)",
          "back": "Displays a comprehensive report of hardware specifications, software environment, BIOS version, installed RAM, and driver details."
        }
      ]
    },
    {
      "id": "windows-101-l08",
      "title": "Task Manager, Services, and Startup Programs",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Use Task Manager tabs to monitor processes, performance, and resource usage",
        "Differentiate between applications, background processes, and Windows services",
        "Manage startup programs to improve boot time"
      ],
      "chunks": [
        {
          "id": "windows-101-l08-c1",
          "title": "Task Manager Overview",
          "content": "Task Manager is like a heart monitor for your computer. You can open it instantly by pressing Ctrl + Shift + Esc. \n\nThe **Processes** tab shows a live list of every app and background program currently running. Next to each app, you'll see columns for CPU (the brain), Memory (short-term storage), Disk (hard drive), and Network (internet). If your computer is freezing, you can look here to see which app is hogging 100% of your resources. If an app is completely stuck, you can right-click it and select 'End Task' to force it to close.\n\nThe **Performance** tab is visually stunning. It provides live, moving graphs of your computer's hardware. You can watch your CPU usage spike when you open a game, or see your Wi-Fi data flowing in real-time."
        },
        {
          "id": "windows-101-l08-c2",
          "title": "Services and Background Processes",
          "content": "Windows services are invisible helpers that run in the background. They don't have windows or buttons you can click, but they do vital jobs. For example, the 'Print Spooler' service waits quietly until you hit print, then manages the data sent to your printer. 'Windows Update' is a service that silently checks for security patches.\n\nYou can view these in the **Services** tab of Task Manager. If you want more control, you can open the Services console (type 'services.msc' in the Run dialog). Here, you can change how a service starts. 'Automatic' means it boots up with your PC. 'Manual' means it only turns on when an app specifically asks for it. Be careful: disabling the wrong service can break important Windows features!"
        },
        {
          "id": "windows-101-l08-c3",
          "title": "Managing Startup Programs",
          "content": "Does your computer take a long time to wake up when you turn it on? The culprit is usually too many Startup Programs. \n\nIn Task Manager, click the **Startup Apps** tab. This shows a list of every program that tries to launch the second you log in. Windows even gives each app a 'Startup impact' rating: Low, Medium, or High. A 'High' impact app slows down your boot time significantly.\n\nYou don't need every app to start automatically. Things like game launchers, chat apps, or music players can be opened manually later. To speed up your PC, simply right-click non-essential apps in this list and select 'Disable'. Don't worry, disabling them here doesn't delete the app; it just stops it from launching automatically when you turn on the computer."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-101-l08-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Should Remain Enabled at Startup",
            "Safe to Disable at Startup"
          ],
          "items": [
            {
              "text": "Windows Defender / Security",
              "bucket": "Should Remain Enabled at Startup"
            },
            {
              "text": "Cloud gaming launcher updater",
              "bucket": "Safe to Disable at Startup"
            },
            {
              "text": "Audio driver service",
              "bucket": "Should Remain Enabled at Startup"
            },
            {
              "text": "Chat application auto-start",
              "bucket": "Safe to Disable at Startup"
            },
            {
              "text": "Graphics driver control panel",
              "bucket": "Should Remain Enabled at Startup"
            },
            {
              "text": "Manufacturer bloatware helper",
              "bucket": "Safe to Disable at Startup"
            },
            {
              "text": "Touchpad / keyboard driver",
              "bucket": "Should Remain Enabled at Startup"
            },
            {
              "text": "Software update notifier for rarely used app",
              "bucket": "Safe to Disable at Startup"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "windows-101-l08-f1",
          "front": "Task Manager (Ctrl + Shift + Esc)",
          "back": "The primary system monitoring tool — shows running processes, CPU/memory/disk/network usage, services, and startup programs in real time."
        },
        {
          "id": "windows-101-l08-f2",
          "front": "Windows services",
          "back": "Background programs without a UI that run continuously — e.g., Print Spooler, Windows Update. Managed via services.msc or Task Manager's Services tab."
        },
        {
          "id": "windows-101-l08-f3",
          "front": "Startup impact rating",
          "back": "Task Manager rates each startup program as Low, Medium, or High impact based on how much CPU and disk I/O it consumes during login."
        },
        {
          "id": "windows-101-l08-f4",
          "front": "HKCU\\...\\Run registry key",
          "back": "A Registry location (HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run) where per-user startup programs are registered."
        }
      ],
      "learningAids": [
        {
          "id": "windows-101-l08-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "[Visual Prompt: A dashboard showing a speedometer labeled 'CPU', a fuel gauge labeled 'Memory', and a list of heavy boxes labeled 'Startup Apps' weighing down a booting computer.] Visual summary of Task Manager monitoring."
        }
      ]
    },
    {
      "id": "windows-101-l09",
      "title": "Configuration & Performance Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate knowledge of system configuration tools, Task Manager, services, and startup management"
      ],
      "questions": [
        {
          "id": "windows-101-l09-q1",
          "text": "Which tool lets you enable Safe Mode and perform a diagnostic startup?",
          "skillId": "windows-101-skill-config",
          "options": [
            {
              "id": "a",
              "text": "Device Manager"
            },
            {
              "id": "b",
              "text": "MSConfig (System Configuration)"
            },
            {
              "id": "c",
              "text": "File Explorer"
            },
            {
              "id": "d",
              "text": "Windows Search"
            }
          ],
          "correctOptionId": "b",
          "explanation": "MSConfig provides boot options including Safe Mode, diagnostic startup, and selective startup for troubleshooting."
        },
        {
          "id": "windows-101-l09-q2",
          "text": "In Task Manager, which tab shows live CPU, memory, and disk usage graphs?",
          "skillId": "windows-101-skill-perf",
          "options": [
            {
              "id": "a",
              "text": "Processes"
            },
            {
              "id": "b",
              "text": "App History"
            },
            {
              "id": "c",
              "text": "Performance"
            },
            {
              "id": "d",
              "text": "Startup Apps"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Performance tab displays real-time graphs for CPU, memory, disk, network, and GPU activity."
        },
        {
          "id": "windows-101-l09-q3",
          "text": "What is the risk of disabling a critical Windows service?",
          "skillId": "windows-101-skill-config",
          "options": [
            {
              "id": "a",
              "text": "It will improve boot speed with no side effects"
            },
            {
              "id": "b",
              "text": "It can break Windows functionality or prevent features from working"
            },
            {
              "id": "c",
              "text": "It only affects apps from the Microsoft Store"
            },
            {
              "id": "d",
              "text": "It automatically re-enables after restart"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Critical services (networking, security, print spooler) are required for core Windows features — disabling them causes functionality loss."
        },
        {
          "id": "windows-101-l09-q4",
          "text": "Which setting should you check first when boot times are gradually getting slower?",
          "skillId": "windows-101-skill-perf",
          "options": [
            {
              "id": "a",
              "text": "Desktop wallpaper resolution"
            },
            {
              "id": "b",
              "text": "Startup Apps tab in Task Manager — disable high-impact non-essential programs"
            },
            {
              "id": "c",
              "text": "Number of desktop shortcut icons"
            },
            {
              "id": "d",
              "text": "Mouse pointer speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Startup programs accumulate as software is installed. Disabling high-impact non-essential entries is the fastest way to improve boot time."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "windows-101-l10",
      "title": "Mastery Quiz: Windows Fundamentals",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Synthesize all Windows fundamentals concepts across architecture, navigation, files, security, configuration, and performance"
      ],
      "questions": [
        {
          "id": "windows-101-l10-q1",
          "text": "Why does Windows separate kernel mode from user mode?",
          "skillId": "windows-101-skill-arch",
          "options": [
            {
              "id": "a",
              "text": "To make the desktop load faster"
            },
            {
              "id": "b",
              "text": "To prevent a crashing application from accessing hardware directly and destabilizing the entire system"
            },
            {
              "id": "c",
              "text": "To allow only one application to run at a time"
            },
            {
              "id": "d",
              "text": "To disable antivirus software automatically"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The kernel/user mode boundary isolates applications from hardware and each other — a crash in user mode does not bring down the OS."
        },
        {
          "id": "windows-101-l10-q2",
          "text": "A file named 'report_final.docx' has both Allow Read (from Group A) and Deny Read (from Group B) applied to a user. What is the effective permission?",
          "skillId": "windows-101-skill-security",
          "options": [
            {
              "id": "a",
              "text": "Allow Read — Allow always wins"
            },
            {
              "id": "b",
              "text": "Deny Read — Deny always overrides Allow"
            },
            {
              "id": "c",
              "text": "The user is prompted each time"
            },
            {
              "id": "d",
              "text": "Full Control by default"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In NTFS, explicit Deny permissions always override Allow permissions, regardless of group membership."
        },
        {
          "id": "windows-101-l10-q3",
          "text": "You need to configure advanced Windows Firewall rules. Which interface should you use?",
          "skillId": "windows-101-skill-config",
          "options": [
            {
              "id": "a",
              "text": "Settings > Personalization"
            },
            {
              "id": "b",
              "text": "Task Manager > Performance tab"
            },
            {
              "id": "c",
              "text": "Control Panel > Windows Defender Firewall with Advanced Security"
            },
            {
              "id": "d",
              "text": "File Explorer > Quick Access"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Advanced firewall rules (inbound/outbound, port-specific, program-specific) are configured through the legacy Control Panel's Firewall with Advanced Security applet."
        },
        {
          "id": "windows-101-l10-q4",
          "text": "What does the 'Startup impact' rating in Task Manager indicate?",
          "skillId": "windows-101-skill-perf",
          "options": [
            {
              "id": "a",
              "text": "How much RAM the program needs to install"
            },
            {
              "id": "b",
              "text": "How much CPU and disk I/O the program consumes during login"
            },
            {
              "id": "c",
              "text": "The age of the software"
            },
            {
              "id": "d",
              "text": "Whether the program is a Microsoft product"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Task Manager measures each startup program's CPU and disk I/O impact during login and rates it Low, Medium, or High."
        },
        {
          "id": "windows-101-l10-q5",
          "text": "A colleague cannot install a printer driver and gets a UAC prompt asking for admin credentials. What is the most likely reason?",
          "skillId": "windows-101-skill-security",
          "options": [
            {
              "id": "a",
              "text": "The printer is incompatible with Windows"
            },
            {
              "id": "b",
              "text": "They are using a standard user account, which cannot install drivers without admin approval"
            },
            {
              "id": "c",
              "text": "Their antivirus is blocking the installation"
            },
            {
              "id": "d",
              "text": "The printer cable is faulty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Standard user accounts trigger a UAC prompt requiring administrator credentials for system-wide changes like driver installation."
        },
        {
          "id": "windows-101-l10-q6",
          "text": "You want to find all PDF documents modified in the last week inside a specific folder. Which approach is most efficient?",
          "skillId": "windows-101-skill-files",
          "options": [
            {
              "id": "a",
              "text": "Manually open every subfolder and check file dates"
            },
            {
              "id": "b",
              "text": "Use File Explorer search with filters: kind:document datemodified:this week .pdf"
            },
            {
              "id": "c",
              "text": "Reinstall Windows and check the recent files list"
            },
            {
              "id": "d",
              "text": "Use Device Manager to locate the files"
            }
          ],
          "correctOptionId": "b",
          "explanation": "File Explorer search supports filters like kind:, datemodified:, and file extensions to quickly narrow results without manual browsing."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 2
        }
      }
    }
  ]
};
