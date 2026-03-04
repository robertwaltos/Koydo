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
          "content": "Modern Windows is built on a special structure known as the Windows NT architecture. This architecture is designed to keep the operating system organized and efficient by dividing it into two main parts: kernel mode and user mode.\nIn kernel mode, we find the core components of the operating system. This includes the NT kernel, which acts like the heart of the system, managing all the essential functions. Additionally, there is the Hardware Abstraction Layer (HAL), which helps the operating system communicate with the hardware, and device drivers, which are programs that allow the operating system to control various hardware devices like printers and graphics cards. These components in kernel mode have direct access to the computer's hardware and memory, enabling them to manage resources effectively and perform tasks quickly.\nOn the other hand, user mode is where all the applications, services, and processes that we use every day run. This includes everything from web browsers to games. These programs interact with the kernel through specific system calls, which are like requests for help or services from the operating system. This interaction is crucial because it allows applications to function without needing to know the details of how the hardware works.\nThe separation between kernel mode and user mode is very important for the stability of the system. If a program running in user mode crashes, it won't affect the entire system. This is because user-mode applications cannot directly access hardware or the memory of other processes. This design helps ensure that the operating system remains stable and that other applications can continue to run smoothly, even if one encounters a problem.\nContext recap: Modern Windows is built on a special structure known as the Windows NT architecture. This architecture is designed to keep the operating system organized and efficient by dividing it into two main parts: kernel mode and user mode. In kernel mode, we find the core components of the operating system. This includes the NT kernel, which acts like the heart of the system, managing all the essential functions.\nWhy this matters: The Windows NT Kernel Architecture helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "windows-101-l01-c2",
          "title": "Key System Components",
          "content": "The Windows Executive is a key part of the Windows operating system, and it provides many important services that help the system run smoothly. One of its main functions is to manage various system resources through different managers. For example, the Object Manager is responsible for handling all the system resources, which means it keeps track of everything the computer needs to function properly. The I/O Manager is another important part; it helps the computer communicate with devices like printers and keyboards, ensuring that they work correctly together.\nAnother essential component is the Memory Manager, which takes care of virtual memory. This is a technique that allows the computer to use hard drive space as if it were additional RAM, using a method called paging. This helps the computer run more programs at once without slowing down.\nThe Security Reference Monitor is also crucial because it makes sure that only authorized users can access certain files and resources, keeping the system secure.\nBeneath the Windows Executive, the kernel plays a vital role in managing how tasks, or threads, are scheduled across the CPU cores. It uses a priority-based system, which means it decides which tasks should be done first based on their importance.\nLastly, the Registry is like a big database that stores all the settings for hardware, software, and user preferences in a structured way. Understanding these components is very helpful when you need to troubleshoot problems, such as when your computer won't start up, when you encounter permission errors, or when the system is running slowly. By knowing how these parts work together, you can better understand and fix issues that may arise with your computer.\nContext recap: The Windows Executive is a key part of the Windows operating system, and it provides many important services that help the system run smoothly. One of its main functions is to manage various system resources through different managers. For example, the Object Manager is responsible for handling all the system resources, which means it keeps track of everything the computer needs to function properly. The I/O Manager is another important part; it helps the computer communicate with devices like printers and keyboards, ensuring that they work correctly together.\nWhy this matters: Key System Components helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "windows-101-l01-c3",
          "title": "Windows Editions Compared",
          "content": "Windows is available in several different editions, each tailored to meet the needs of various users. Let's explore these editions to understand which one might be right for you!\nFirst, we have **Windows Home**. This edition is perfect for everyday consumers who use their computers for tasks like browsing the internet, streaming videos, and playing games. Windows Home comes with essential features such as **Windows Defender**, which helps protect your computer from viruses and malware, and the **Edge** web browser for safe and fast internet surfing. It also includes basic device encryption to help keep your files secure. However, Windows Home does not have some advanced tools that are often needed in professional settings. For example, it lacks the **Group Policy Editor**, which helps manage settings across multiple computers, and **BitLocker**, which provides full-disk encryption to protect all your data. Additionally, it does not support **Remote Desktop hosting**, which allows you to access your computer from another device.\nNext up is **Windows Pro**. This edition is designed for businesses and professionals who need more advanced features. In addition to everything in Windows Home, Windows Pro includes tools like **Hyper-V**, which allows users to create and run virtual machines. It also offers **assigned access**, enabling you to set up a computer in kiosk mode, which is useful for public access points. Furthermore, Windows Pro allows users to join an **Active Directory domain**, making it easier to manage multiple devices in a business environment.\nFinally, we have **Windows Enterprise**. This edition is available only through volume licensing, which means it’s typically used by larger organizations. Windows Enterprise includes all the features of Windows Pro, plus advanced security options like **Credential Guard** and **AppLocker**, which help protect sensitive information and control which applications can run on the device. It also offers long-term servicing options for organizations that need stability over frequent updates.\nWhen deciding which edition of Windows to choose, think about what features are most important for your needs. Do you need to manage multiple devices? Are you looking for advanced security for your data? Or do you want to run virtual machines? Understanding these differences will help you make the best choice for your situation.\nContext recap: Windows is available in several different editions, each tailored to meet the needs of various users. Let's explore these editions to understand which one might be right for you! First, we have **Windows Home**. This edition is perfect for everyday consumers who use their computers for tasks like browsing the internet, streaming videos, and playing games.\nWhy this matters: Windows Editions Compared helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "The Windows desktop is like your personal workspace that you see right after you log in to your computer. It has a beautiful wallpaper area where you can place shortcuts to your favorite applications, making it easy to access them quickly. At the bottom of the screen, you will find the taskbar, which is an important part of the desktop. The taskbar shows icons for applications that you have pinned, which means you can open them with just one click. It also displays the currently open windows, so you can easily switch between them, and the Start button, which is your main way to access all the programs and settings on your computer.\nIn the lower-right corner of the screen, there is a system tray. This area is very useful because it shows important information about background services. For example, you can see your network status, adjust the volume, check your battery life, and even see the current time on the clock.\nIf you want to customize your taskbar, you can right-click on it. This will open up Taskbar Settings, where you can change options like enabling search, adding widgets, using task view, and selecting which icons you want to display. Keeping your taskbar organized and clean is really important because it can help you work more efficiently. When everything is in its right place, you can find what you need quickly and focus on your tasks without distractions.\nContext recap: The Windows desktop is like your personal workspace that you see right after you log in to your computer. It has a beautiful wallpaper area where you can place shortcuts to your favorite applications, making it easy to access them quickly. At the bottom of the screen, you will find the taskbar, which is an important part of the desktop. The taskbar shows icons for applications that you have pinned, which means you can open them with just one click.\nWhy this matters: The Desktop and Taskbar helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "windows-101-l02-c2",
          "title": "Window Management and Virtual Desktops",
          "content": "Windows has a fantastic feature called Snap Layouts that makes it super easy to organize your open windows on the screen. When you hover your mouse over the maximize button (the square button in the top right corner of a window), you will see different layout options. You can choose to arrange your windows side-by-side, in a quadrant, or in a three-column format. This helps you see multiple applications at once without overlapping them. Additionally, there are handy keyboard shortcuts that you can use to snap a window into place. For example, by pressing the Windows key along with the Arrow keys, you can quickly move a window to the left side, right side, or even into the corners of your screen.\nAnother amazing feature is called Virtual Desktops. This allows you to create separate workspaces for different activities, which can help you stay organized. For instance, you could keep all your school-related applications on Desktop 1 and use Desktop 2 for your personal browsing or gaming. To create a new virtual desktop, simply press the Windows key along with Ctrl and D. You can easily switch between your virtual desktops by pressing Windows key + Ctrl + Left or Right arrow keys.\nIf you want to see all your open windows and desktops at the same time, you can use the Alt + Tab shortcut to cycle through them. Alternatively, pressing Windows key + Tab opens Task View, where you can see all your desktops and recent activities at a glance. This makes it easier to manage your tasks and stay focused on what you need to do!\nContext recap: Windows has a fantastic feature called Snap Layouts that makes it super easy to organize your open windows on the screen. When you hover your mouse over the maximize button (the square button in the top right corner of a window), you will see different layout options. You can choose to arrange your windows side-by-side, in a quadrant, or in a three-column format. This helps you see multiple applications at once without overlapping them.\nWhy this matters: Window Management and Virtual Desktops helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "windows-101-l02-c3",
          "title": "Start Menu and Search",
          "content": "The Start menu is an important part of the Windows operating system that you can easily access by pressing the Win key on your keyboard. This menu serves as a central hub where you can find and open your applications and files. When you open the Start menu, you will see a list of pinned apps, which are the programs you use most often. You will also find recommended files that Windows thinks you might want to access, and an All Apps list that is organized alphabetically, making it easy to find what you need.\nIf you want to customize your Start menu, you can pin or unpin apps by right-clicking on them. This means you can choose which apps you want to keep handy and which ones you want to remove from the pinned section. Additionally, you can rearrange the order of your pinned apps by simply dragging them around, allowing you to organize your Start menu in a way that works best for you.\nAnother useful feature is Windows Search, which you can access by pressing Win + S or just by starting to type in the Start menu. This search tool helps you quickly find installed apps, settings, files, and even results from the web. To make your search easier, you can use search filters to narrow down your results to specific categories like Apps, Documents, Settings, or Web.\nFor those who are more experienced with using Windows, there is a shortcut that allows you to access commands quickly. By pressing Win + R, you can open the Run dialog box. This feature lets you enter commands like 'msconfig', 'regedit', or 'control' directly, which can save you time by bypassing the need to navigate through menus. Understanding how to use the Start menu and these search features will help you become more efficient in using your computer.\nContext recap: The Start menu is an important part of the Windows operating system that you can easily access by pressing the Win key on your keyboard. This menu serves as a central hub where you can find and open your applications and files. When you open the Start menu, you will see a list of pinned apps, which are the programs you use most often. You will also find recommended files that Windows thinks you might want to access, and an All Apps list that is organized alphabetically, making it easy to find what you need.\nWhy this matters: Start Menu and Search helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
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
          "content": "File Explorer is a very important tool in Windows that helps you browse and manage all your files easily. You can open it quickly by pressing the Windows key and the letter E at the same time (Win + E). When you look at the left side of the File Explorer window, you'll see something called the navigation pane. This pane is like a map for your files. It shows you Quick Access, which is where you can find your pinned folders and the ones you use most often. Then there's This PC, which gives you access to your local drives where your files are stored. You can also see Network locations, which are shared resources on your network, and OneDrive, which is a cloud storage service that lets you save files online so you can access them from anywhere.\nAt the top of the File Explorer window, there's an address bar. This bar shows you where you currently are in the file system. If you want to go back to a different folder, you can click on any part of the address to jump there. Alternatively, if you know the exact path to a folder, you can type it directly into the address bar.\nThe command bar is another important feature. It provides you with various actions that you can take depending on what you're doing with your files. For example, you can create a new folder, cut or copy files, paste them in a new location, rename files, delete files, sort them, and choose how you want to view them. You can switch between different views like Details, List, and Large Icons. This helps you find your files quickly, depending on whether you want to see more information about them or just a visual preview. Understanding how to use File Explorer effectively will make managing your files much easier and more organized.\nContext recap: File Explorer is a very important tool in Windows that helps you browse and manage all your files easily. You can open it quickly by pressing the Windows key and the letter E at the same time (Win + E). When you look at the left side of the File Explorer window, you'll see something called the navigation pane. This pane is like a map for your files.\nWhy this matters: File Explorer Interface helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "windows-101-l04-c2",
          "title": "Organizing Files and Folders",
          "content": "Keeping your files organized is not just a good habit; it can save you a lot of time and frustration in the future! One effective way to do this is by creating a folder structure based on your different projects. For instance, instead of just putting everything on your desktop where it can get messy, you could create a hierarchy like this: Documents/School/Math/Homework-Ch5. This way, you know exactly where to find your schoolwork when you need it.\nAnother important tip is to use consistent naming conventions for your files. This means that you should name your files in a way that makes sense and is easy to understand. For example, including the date in the format YYYY-MM-DD, adding version numbers, or using descriptive keywords can help your files sort logically. This makes it easier to find what you need quickly.\nAlso, be careful about using special characters in your filenames. Characters like \\, /, :, *, ?, <, >, and | are reserved by Windows for system paths, so using them can cause problems. Lastly, keep in mind that the maximum path length for files is 260 characters by default. This means that if your folder names and paths are too long, you might run into errors. So, try to keep your folder names and paths concise and clear to avoid any issues!\nContext recap: Keeping your files organized is not just a good habit; it can save you a lot of time and frustration in the future! One effective way to do this is by creating a folder structure based on your different projects. For instance, instead of just putting everything on your desktop where it can get messy, you could create a hierarchy like this: Documents/School/Math/Homework-Ch5. This way, you know exactly where to find your schoolwork when you need it.\nWhy this matters: Organizing Files and Folders helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "windows-101-l04-c3",
          "title": "Search, Filters, and File Properties",
          "content": "When you use File Explorer on your computer, finding files can be super easy! You can quickly search for files by pressing Ctrl + F on your keyboard or by clicking the search box located at the top of the File Explorer window. This search feature is really helpful because it keeps track of file names and even the contents of files in places you commonly use, which means you can find what you're looking for without having to dig through folders manually.\nTo make your searches even better, you can use filters. For example, if you want to find only documents, you can type 'kind:document'. If you're looking for files that were modified this week, you can use 'datemodified:this week'. You can also search for files that are larger than a certain size, like 'size:>1MB'. The cool part is that you can combine these filters to get very specific results that match exactly what you need!\nOnce you find a file, you can learn more about it by right-clicking on it and selecting 'Properties'. This will show you important details such as the file's size, where it is located on your computer, when it was created, when it was last modified, and whether it has special attributes like being read-only or hidden.\nIf you click on the 'Details' tab in the Properties window, you can see even more information, like who the author is, any tags that are associated with the file, and dimensions for image files.\nFor those who want to speed up their searches even more, Windows has a feature called the Windows Search Indexer. This tool creates a background database that helps your searches run faster. You can also choose which locations you want to include in this indexing by going to the Indexing Options found in the Control Panel. This way, you can customize your search experience to fit your needs!\nContext recap: When you use File Explorer on your computer, finding files can be super easy! You can quickly search for files by pressing Ctrl + F on your keyboard or by clicking the search box located at the top of the File Explorer window. This search feature is really helpful because it keeps track of file names and even the contents of files in places you commonly use, which means you can find what you're looking for without having to dig through folders manually. To make your searches even better, you can use filters.\nWhy this matters: Search, Filters, and File Properties helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
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
          "content": "In the Windows operating system, there are two main types of user accounts that you should know about: Administrator accounts and Standard User accounts. Let's explore what each type can do!\nAdministrator accounts are like the superheroes of the computer world. They have special powers that allow them to install new software, change important system settings, and even modify files that belong to other users. This means they can make big changes to the computer, which is great for managing the system but also comes with a lot of responsibility.\nOn the other hand, we have Standard User accounts. These accounts are like the everyday heroes. They can run most applications and change their personal settings, such as their desktop background or password. However, they cannot make changes that affect the entire system, which helps keep the computer safe from accidental mistakes.\nEvery user on a Windows computer has a profile folder located in C:\\Users\\<username>. This folder is very important because it contains several subfolders, including Desktop, Documents, Downloads, and AppData. These folders help you organize your files and keep everything in one place.\nIf you choose to use a Microsoft account, your settings, themes, and passwords can be synced across different devices using the cloud. This means that you can access your personalized settings from any device that you log into. On the other hand, if you use a local account, your information is stored only on that specific computer, which can be safer in some situations.\nFor your daily tasks, it's a good idea to use a Standard User account. This helps keep your computer secure by limiting the changes you can make, reducing the risk of accidentally altering important system settings or files. Remember, safety first when using technology!\nContext recap: In the Windows operating system, there are two main types of user accounts that you should know about: Administrator accounts and Standard User accounts. Let's explore what each type can do! Administrator accounts are like the superheroes of the computer world. They have special powers that allow them to install new software, change important system settings, and even modify files that belong to other users.\nWhy this matters: Account Types and Profiles helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "windows-101-l05-c2",
          "title": "User Account Control (UAC)",
          "content": "User Account Control, commonly known as UAC, is an important security feature that was introduced in Windows Vista. Its main purpose is to help protect your computer from unauthorized changes that could harm the operating system. Even if you are logged in as an administrator, which is a user with higher privileges, most applications will run with standard permissions by default. This means that they cannot make significant changes to your system without your approval.\nWhen you attempt to perform an action that requires elevated permissions—like installing new software, modifying system files, or adjusting Windows Update settings—a UAC prompt will pop up. This prompt will ask for your consent if you are logged in as an administrator, or it will request your credentials (like a password) if you are using a standard user account.\nTo help you recognize actions that will trigger a UAC prompt, look for a shield icon next to buttons or menu items. This icon serves as a warning that clicking on it will require additional permission.\nUAC has four different notification levels that you can choose from, ranging from 'Always Notify' to 'Never Notify.' It's important to be careful when adjusting these settings because lowering the notification level can significantly reduce your computer's security. If you set it to 'Never Notify,' your system may become vulnerable to harmful software or unauthorized changes. Therefore, it's best to keep UAC enabled and set at a level that keeps you informed while still allowing you to use your computer effectively.\nContext recap: User Account Control, commonly known as UAC, is an important security feature that was introduced in Windows Vista. Its main purpose is to help protect your computer from unauthorized changes that could harm the operating system. Even if you are logged in as an administrator, which is a user with higher privileges, most applications will run with standard permissions by default. This means that they cannot make significant changes to your system without your approval.\nWhy this matters: User Account Control (UAC) helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "windows-101-l05-c3",
          "title": "NTFS Permissions Basics",
          "content": "The NTFS file system is an important part of Windows that helps manage how files and folders are accessed. It allows for detailed control over who can do what with your files. There are several main permission levels you should know about: Full Control, Modify, Read & Execute, Read, Write, and List Folder Contents. Each of these permissions can be given to individual users or groups of users, and they can be set to either Allow or Deny. It's very important to remember that if a permission is set to Deny, it will always take priority over an Allow permission.\nBy default, permissions are inherited from parent folders. This means that if a folder gives a group permission to Read its contents, all the subfolders and files inside that folder will automatically have the same Read permission unless you specifically change this setting. This feature helps keep things organized and secure, but it can also lead to confusion if you're not aware of how it works.\nTo check or change the permissions for a file, you can right-click on the file, choose Properties, and then go to the Security tab. Here, you can see who has access to the file and what they can do with it. Understanding NTFS permissions is really important, especially when you encounter problems like 'Access Denied' errors. Knowing how to manage these permissions can help you troubleshoot and resolve access issues effectively.\nContext recap: The NTFS file system is an important part of Windows that helps manage how files and folders are accessed. It allows for detailed control over who can do what with your files. There are several main permission levels you should know about: Full Control, Modify, Read & Execute, Read, Write, and List Folder Contents. Each of these permissions can be given to individual users or groups of users, and they can be set to either Allow or Deny.\nWhy this matters: NTFS Permissions Basics helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "The Settings app, which you can easily open by pressing the Windows key and the letter I at the same time (Win + I), serves as a modern control center for your Windows computer. It is thoughtfully organized into various categories, making it simple for you to find what you need. Here’s a closer look at these categories:\n1. **System**: This section allows you to adjust important settings like your display (how things look on your screen), sound (volume and audio settings), power options (how your computer uses energy), and storage (how much space you have left on your device).\n2. **Bluetooth & Devices**: Here, you can manage any devices that are connected to your computer, like headphones, printers, or keyboards.\n3. **Network & Internet**: This category is where you can set up your Wi-Fi and internet connections, ensuring you stay connected online.\n4. **Personalization**: In this section, you can customize the look of your computer by changing themes, colors, and even your lock screen background.\n5. **Apps**: This area helps you manage the applications installed on your computer, including setting default apps for tasks like browsing the web or viewing photos.\n6. **Accounts**: Here, you can manage user settings, including your account information and how you log in.\n7. **Time & Language**: This section allows you to set your time zone, date, and language preferences.\n8. **Gaming**: If you enjoy playing games, this category lets you adjust settings specifically for gaming experiences.\n9. **Accessibility**: This area provides features that assist users with disabilities, making it easier for everyone to use the computer.\n10. **Privacy & Security**: Here, you can manage your personal data and security settings to keep your information safe.\n11. **Windows Update**: This section is crucial for keeping your system up to date with the latest features and security improvements.\nEach of these categories has sub-pages that offer even more specific options to help you fine-tune your settings. The Settings app is designed to work smoothly with both touch screens and mouse clicks, making it user-friendly. Plus, there’s a handy search bar at the top that helps you quickly find what you’re looking for. Since the release of Windows 10, Microsoft has been moving many settings from the older Control Panel into this app, making it the primary place for most everyday adjustments. Whether you need to connect to Wi-Fi, change the size of your display, or set your default web browser, the Settings app is the quickest way to make those changes to your computer's configuration.\nContext recap: The Settings app, which you can easily open by pressing the Windows key and the letter I at the same time (Win + I), serves as a modern control center for your Windows computer. It is thoughtfully organized into various categories, making it simple for you to find what you need. Here’s a closer look at these categories:\n1. **System**: This section allows you to adjust important settings like your display (how things look on your screen), sound (volume and audio settings), power options (how your computer uses energy), and storage (how much space you have left on your device)."
        },
        {
          "id": "windows-101-l07-c2",
          "title": "Control Panel: Legacy but Still Needed",
          "content": "The Control Panel is a classic and important part of the Windows operating system that you can easily access by typing 'control' in the Run dialog, which you can open by pressing Win + R on your keyboard. This feature uses an older style of organization, where settings are grouped into different categories. Some of these categories include System and Security, Network and Sharing Center, Programs and Features, and Administrative Tools. Although many settings have been moved to the newer Settings app, there are still some advanced options that can only be found in the Control Panel. For instance, if you want to adjust detailed settings for the Windows Defender Firewall, configure your network adapter, manage your email profiles, or handle credential management, you will need to use the Control Panel. Additionally, the Programs and Features section allows you to view traditional desktop applications that were installed using the Win32 format. In contrast, the Settings app displays both these traditional applications and those downloaded from the Microsoft Store. Many experienced users find that they need to use both the Settings app and the Control Panel to effectively manage their computer. Therefore, understanding when to use each interface can save you valuable time and help you troubleshoot any issues that may arise with your computer more efficiently.\nContext recap: The Control Panel is a classic and important part of the Windows operating system that you can easily access by typing 'control' in the Run dialog, which you can open by pressing Win + R on your keyboard. This feature uses an older style of organization, where settings are grouped into different categories. Some of these categories include System and Security, Network and Sharing Center, Programs and Features, and Administrative Tools. Although many settings have been moved to the newer Settings app, there are still some advanced options that can only be found in the Control Panel.\nWhy this matters: Control Panel: Legacy but Still Needed helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "windows-101-l07-c3",
          "title": "System Configuration Tools",
          "content": "MSConfig, also known as System Configuration, is a very useful tool that helps you manage how your computer starts up. When you open MSConfig, you can choose to start your computer in Safe Mode. Safe Mode is a special way to run Windows that only loads the most essential parts of the system, which can be really helpful when you're trying to fix problems. Additionally, MSConfig allows you to turn off certain startup services. This means you can stop some programs from running when your computer starts, which can help you figure out what might be causing issues. If you select 'diagnostic startup,' your computer will only load the basic drivers and services it needs to function, making it easier to troubleshoot problems.\nAnother important tool is System Information, which you can access by typing 'msinfo32' into the search bar. This tool provides a detailed report about your computer's hardware and software. It includes key information like the version of your BIOS, how much RAM you have installed, and details about your drivers. This information can be very useful when you're trying to understand your computer's performance.\nLastly, there's Device Manager, which you can find by typing 'devmgmt.msc.' Device Manager shows you all the hardware devices connected to your computer and their driver status. If you see a yellow warning triangle next to a device, it means there's a problem with its driver, which could be causing issues. Together, these tools are crucial for diagnosing and fixing problems when your Windows computer is running slowly, acting strangely, or having trouble starting up.\nContext recap: MSConfig, also known as System Configuration, is a very useful tool that helps you manage how your computer starts up. When you open MSConfig, you can choose to start your computer in Safe Mode. Safe Mode is a special way to run Windows that only loads the most essential parts of the system, which can be really helpful when you're trying to fix problems. Additionally, MSConfig allows you to turn off certain startup services.\nWhy this matters: System Configuration Tools helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
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
          "content": "Task Manager is an essential tool that helps you keep an eye on how your computer is performing. You can easily open it by pressing Ctrl + Shift + Esc on your keyboard. Once it's open, you'll see several tabs that give you different kinds of information. In the Processes tab, you can find a list of all the applications and background processes that are currently running on your computer. This includes everything from the games you play to the programs that help your computer run smoothly. Each item on the list shows how much CPU (the brain of your computer), memory (short-term storage), disk space (where files are saved), network (internet activity), and GPU (graphics processing) resources it is using.\nThe Performance tab is particularly interesting because it provides live graphs that visually display how much CPU is being used, how much memory is available versus how much is being used, and how quickly data is being read from or written to your disk. It also shows how much network activity is happening and how hard your GPU is working. This information can help you understand if your computer is running efficiently or if something is slowing it down.\nAnother useful feature is the App History tab, which keeps track of how much resources each app has used over time. This can help you identify which applications are using a lot of your computer's power. If you ever find that an application is not responding, you can easily close it by right-clicking on it in the Processes tab and selecting 'End Task.' However, it's important to be cautious when ending system processes, as doing so can lead to your computer becoming unstable or even crashing. Always make sure you know what you're closing to keep your computer running smoothly and safely.\nContext recap: Task Manager is an essential tool that helps you keep an eye on how your computer is performing. You can easily open it by pressing Ctrl + Shift + Esc on your keyboard. Once it's open, you'll see several tabs that give you different kinds of information. In the Processes tab, you can find a list of all the applications and background processes that are currently running on your computer.\nWhy this matters: Task Manager Overview helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "windows-101-l08-c2",
          "title": "Services and Background Processes",
          "content": "Windows services are unique programs that work quietly in the background of your computer, without needing any visible interface. They play important roles in keeping your system running smoothly. For instance, Windows Update is a service that helps ensure your computer has the latest features and security updates. The Print Spooler is another service that helps manage all the print jobs you send to your printer, making sure they are processed in the right order. Additionally, Windows Defender is a vital service that protects your computer from viruses and other harmful software, keeping your data safe.\nIn the Task Manager, there's a special tab just for services. Here, you can see a list of all the services running on your computer. Each service is listed with its name, a unique process ID (PID), a brief description of what it does, its current status (like whether it is Running or Stopped), and the group it belongs to. If you want to manage these services, you can easily start, stop, or restart them by right-clicking on the service name.\nFor those who want to dive deeper, there's a tool called the Services management console. You can access it by typing 'services.msc' in the Run dialog. This console gives you even more control over how services operate. You can change a service's startup type to Automatic, which means it starts on its own when your computer boots up; Manual, which means it only starts when you need it; or Disabled, which means it won't run at all. While turning off services that you don't need can help your computer run faster by freeing up resources, be careful! Disabling important services can cause problems and disrupt how Windows works. Always make sure you know what a service does before deciding to turn it off.\nContext recap: Windows services are unique programs that work quietly in the background of your computer, without needing any visible interface. They play important roles in keeping your system running smoothly. For instance, Windows Update is a service that helps ensure your computer has the latest features and security updates. The Print Spooler is another service that helps manage all the print jobs you send to your printer, making sure they are processed in the right order.\nWhy this matters: Services and Background Processes helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "windows-101-l08-c3",
          "title": "Managing Startup Programs",
          "content": "When you log into your computer, there are many programs that can start automatically. The Startup Apps tab in Task Manager is a special place where you can see all these programs. Here, you can find important information about each program, such as its name, who created it (the publisher), whether it is currently Enabled or Disabled, and how much it affects how quickly your computer starts up. The impact is rated as Low, Medium, or High. Programs that are rated as High impact can slow down your computer's boot time significantly because they use a lot of your computer's processing power (CPU) and storage (disk I/O) when you log in.\nTo help your computer start faster, you can choose to disable programs that you don’t need to run right away. For example, you might want to disable update utilities, cloud sync programs, or chat applications that you can open manually later when you need them.\nThese startup programs can come from different places on your computer. They might be listed in the Registry, which is a special database that stores settings and options for Windows. They can also be found in the Startup folder in the Start menu, or they might be scheduled to run through Task Scheduler.\nIt’s a good idea to check the programs that start with your computer regularly. This way, you can keep your boot time fast and efficient, especially as you install more software over time. By managing your startup programs, you can ensure that your computer runs smoothly and quickly, making your overall experience much better.\nContext recap: When you log into your computer, there are many programs that can start automatically. The Startup Apps tab in Task Manager is a special place where you can see all these programs. Here, you can find important information about each program, such as its name, who created it (the publisher), whether it is currently Enabled or Disabled, and how much it affects how quickly your computer starts up. The impact is rated as Low, Medium, or High.\nWhy this matters: Managing Startup Programs helps learners in Operating Systems connect ideas from Windows Fundamentals to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
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
