import type { LearningModule } from "@/lib/modules/types";

export const Windows101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Modern Windows is built on the Windows NT architecture, which separates the operating system into two broad layers: kernel mode and user mode. The kernel mode contains the NT kernel (ntoskrnl.exe), the Hardware Abstraction Layer (HAL), and device drivers — these components have direct access to hardware and memory. User mode contains applications, services, and subsystem processes that interact with the kernel through well-defined system calls. This separation prevents a crashing application from bringing down the entire system, because user-mode code cannot directly access hardware or another process's memory."
        },
        {
          "id": "windows-101-l01-c2",
          "title": "Key System Components",
          "content": "The Windows Executive provides core OS services: the Object Manager handles system resources, the I/O Manager coordinates device communication, the Memory Manager implements virtual memory with paging, and the Security Reference Monitor enforces access control on every object. Below the Executive, the kernel schedules threads across CPU cores using a priority-based preemptive algorithm. The Registry — a hierarchical database stored in hive files — centralizes configuration for hardware, software, and user preferences. Understanding these building blocks helps you troubleshoot boot failures, permission errors, and performance bottlenecks."
        },
        {
          "id": "windows-101-l01-c3",
          "title": "Windows Editions Compared",
          "content": "Windows Home is designed for consumers and includes Defender, Edge, and basic device encryption, but it lacks Group Policy Editor, BitLocker full-disk encryption, and Remote Desktop host capabilities. Windows Pro adds those enterprise-oriented features plus Hyper-V virtualization, assigned access (kiosk mode), and the ability to join an Active Directory domain. Windows Enterprise — available only through volume licensing — adds advanced security features like Credential Guard and AppLocker, plus long-term servicing options. Choosing the right edition depends on whether you need centralized management, advanced encryption, or virtualization."
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
          "content": "Visual summary of the lesson's main concept."
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
          "content": "The Windows desktop is the primary workspace after login, consisting of a wallpaper area for shortcuts, a taskbar along the bottom edge, and a system tray (notification area) in the lower-right corner. The taskbar displays pinned application icons, currently open windows, and the Start button. The system tray shows background services like network, volume, battery, and clock. Right-clicking the taskbar opens Taskbar Settings where you can toggle search, widgets, task view, and choose which icons appear — keeping the taskbar clean improves productivity."
        },
        {
          "id": "windows-101-l02-c2",
          "title": "Window Management and Virtual Desktops",
          "content": "Snap Layouts let you arrange windows by hovering over the maximize button: choose from side-by-side, quadrant, or three-column layouts. The keyboard shortcut Win + Arrow keys snaps a window to the left, right, or corners. Virtual desktops (Win + Ctrl + D to create, Win + Ctrl + Left/Right to switch) let you separate tasks — for example, keeping school apps on Desktop 1 and personal browsing on Desktop 2. Alt + Tab cycles through all open windows, while Win + Tab opens Task View where you can see all desktops and recent activities at a glance."
        },
        {
          "id": "windows-101-l02-c3",
          "title": "Start Menu and Search",
          "content": "The Start menu (Win key) displays pinned apps, recommended files, and an All Apps list sorted alphabetically. You can pin or unpin apps by right-clicking them, and drag to rearrange. Windows Search (Win + S or just start typing on the Start menu) indexes installed apps, settings, files, and even web results. Search filters let you narrow results to Apps, Documents, Settings, or Web. For power users, Win + R opens the Run dialog for quick access to commands like 'msconfig', 'regedit', or 'control' — bypassing menus entirely."
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
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "Use Plan, Solve, Explain to structure each response."
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
          "content": "File Explorer (Win + E) is the primary tool for browsing and managing files. The navigation pane on the left shows Quick Access (pinned/frequent folders), This PC (local drives), Network locations, and OneDrive. The address bar at the top displays the current path — you can click any segment to jump to that level, or type a path directly. The command bar provides context-sensitive actions: New, Cut, Copy, Paste, Rename, Delete, Sort, and View options. Switching between Details, List, and Large Icons views helps you find files quickly depending on whether you need metadata or visual previews."
        },
        {
          "id": "windows-101-l04-c2",
          "title": "Organizing Files and Folders",
          "content": "A well-organized file system saves hours over time. Best practices include creating a project-based folder hierarchy (e.g., Documents/School/Math/Homework-Ch5) rather than dumping everything on the desktop. Use consistent naming conventions — include dates (YYYY-MM-DD), version numbers, or descriptive keywords so files sort logically. Avoid special characters like \\, /, :, *, ?, <, >, and | in filenames because Windows reserves them for system paths. The maximum path length is 260 characters by default, so deep nesting with long names can cause errors — keep paths concise."
        },
        {
          "id": "windows-101-l04-c3",
          "title": "Search, Filters, and File Properties",
          "content": "File Explorer search (Ctrl + F or click the search box) indexes file names and contents inside known locations. You can refine searches with filters: 'kind:document', 'datemodified:this week', 'size:>1MB', or combine them. Right-clicking a file and selecting Properties reveals its size, location, creation and modification dates, and attributes (read-only, hidden). The Details tab exposes metadata such as author, tags, and dimensions for images. For advanced indexing, Windows Search Indexer (searchindexer.exe) builds a background database — you can add or remove locations in Indexing Options from Control Panel."
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
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Windows supports two primary account types: Administrator and Standard User. Administrator accounts can install software, change system settings, and modify other users' files. Standard User accounts can run most applications and change personal settings but are blocked from system-wide changes. Each user gets a profile folder under C:\\Users\\<username> containing Desktop, Documents, Downloads, and AppData subfolders. Microsoft accounts sync settings, themes, and passwords across devices via the cloud, while local accounts store credentials only on that machine. For security, daily work should use a standard account."
        },
        {
          "id": "windows-101-l05-c2",
          "title": "User Account Control (UAC)",
          "content": "User Account Control is a security feature introduced in Windows Vista that prevents unauthorized changes to the operating system. Even when logged in as an administrator, applications run with standard privileges by default. When an action requires elevation — such as installing software, modifying system files, or changing Windows Update settings — a UAC prompt appears asking for consent (admin) or credentials (standard user). The shield icon on buttons and menu items indicates that clicking will trigger a UAC prompt. UAC has four notification levels from Always Notify to Never Notify, but lowering it reduces security significantly."
        },
        {
          "id": "windows-101-l05-c3",
          "title": "NTFS Permissions Basics",
          "content": "The NTFS file system supports granular permissions on files and folders. The core permission levels are Full Control, Modify, Read & Execute, Read, Write, and List Folder Contents. Permissions are assigned to users or groups and can be set to Allow or Deny — Deny always overrides Allow. Permissions inherit from parent folders by default: if a folder grants Read to a group, all subfolders and files inside inherit that permission unless inheritance is explicitly broken. You can view and edit permissions from a file's Properties > Security tab. Understanding NTFS permissions is essential for troubleshooting 'Access Denied' errors."
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
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "The Settings app (Win + I) is the modern control center for Windows, organized into categories: System (display, sound, power, storage), Bluetooth & Devices, Network & Internet, Personalization (themes, colors, lock screen), Apps (installed apps, default apps, startup), Accounts, Time & Language, Gaming, Accessibility, Privacy & Security, and Windows Update. Each category drills down into sub-pages. Settings is designed for touch and mouse, supports search at the top, and is where Microsoft has been migrating configuration options from the legacy Control Panel since Windows 10. For most everyday adjustments — Wi-Fi, display scaling, default browser — Settings is the fastest path."
        },
        {
          "id": "windows-101-l07-c2",
          "title": "Control Panel: Legacy but Still Needed",
          "content": "Control Panel (run 'control' from Win + R) uses the classic applet-based interface with categories like System and Security, Network and Sharing Center, Programs and Features, and Administrative Tools. Some advanced settings still live only here: advanced firewall rules (Windows Defender Firewall with Advanced Security), detailed network adapter configuration, mail profiles, and credential manager. Programs and Features shows traditionally installed (Win32) desktop apps, whereas Settings > Apps shows both Win32 and Microsoft Store apps. Power users often need both interfaces — learning when to reach for Control Panel saves troubleshooting time."
        },
        {
          "id": "windows-101-l07-c3",
          "title": "System Configuration Tools",
          "content": "MSConfig (System Configuration) lets you control boot options, enable Safe Mode, and selectively disable startup services for troubleshooting — its 'diagnostic startup' loads only basic drivers and services. System Information (msinfo32) displays a comprehensive report of hardware, software, and system components including BIOS version, installed RAM, and driver details. Device Manager (devmgmt.msc) lists all hardware devices and their driver status — yellow warning triangles indicate driver issues. Together, these tools form the first line of defense when diagnosing why Windows is slow, unstable, or failing to boot."
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
          "content": "Task Manager (Ctrl + Shift + Esc) is the primary tool for real-time system monitoring. The Processes tab shows every running application and background process along with their CPU, memory, disk, network, and GPU usage. The Performance tab displays live graphs for CPU utilization, memory consumption (committed vs. available), disk read/write rates, network throughput, and GPU activity. The App History tab tracks cumulative resource usage per app over time. When an application freezes, right-clicking it in the Processes tab and selecting 'End Task' terminates it — but ending system processes can cause instability, so caution is required."
        },
        {
          "id": "windows-101-l08-c2",
          "title": "Services and Background Processes",
          "content": "Windows services are long-running programs that operate in the background without a user interface — examples include Windows Update (wuauserv), Print Spooler (spoolsv), and Windows Defender (WinDefend). The Services tab in Task Manager shows each service's name, PID, description, status (Running or Stopped), and group. Services can be started, stopped, or restarted by right-clicking them. The Services management console (services.msc) provides additional control: you can change a service's startup type to Automatic, Manual, or Disabled. Disabling unnecessary services can free resources, but disabling critical ones will break Windows functionality."
        },
        {
          "id": "windows-101-l08-c3",
          "title": "Managing Startup Programs",
          "content": "The Startup Apps tab in Task Manager lists every program configured to run at login, along with its publisher, status (Enabled/Disabled), and startup impact rating (Low, Medium, High). High-impact startup programs significantly increase boot time because they consume CPU and disk I/O during login. To speed up boot, disable non-essential items like updater utilities, cloud sync agents, or chat apps that you can launch manually when needed. Startup entries come from the Registry (HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run), the Startup folder in the Start menu, or Task Scheduler. Reviewing startup programs regularly prevents gradual boot-time degradation as more software is installed."
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
