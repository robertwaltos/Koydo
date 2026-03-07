import type { LearningModule } from "@/lib/modules/types";

export const linux_101_Module: LearningModule = {
  "id": "linux-101",
  "title": "Linux Fundamentals",
  "description": "Master the foundations of Linux — from the kernel and shell to file-system navigation, permissions, package management, and process control using real command-line workflows.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
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
    "Explain what Linux is and how the kernel mediates between hardware and software",
    "Navigate the terminal confidently using common shell commands and shortcuts",
    "Describe the Filesystem Hierarchy Standard and locate key directories",
    "Manage users, groups, and file permissions following least-privilege principles",
    "Install, update, and remove software using package managers",
    "Inspect and manage running processes and systemd services",
    "Apply safe command habits for everyday system administration"
  ],
  "lessons": [
    {
      "id": "linux-101-l01",
      "title": "What Is Linux and the Kernel",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define Linux and distinguish it from other operating systems",
        "Explain the role of the kernel in managing hardware resources",
        "Identify major Linux distributions and their use cases"
      ],
      "chunks": [
        {
          "id": "linux-101-l01-c1",
          "title": "Linux: An Open-Source Operating System",
          "content": "Linux is a powerful and free operating system, first created by Linus Torvalds in 1991. Unlike Windows or macOS, Linux is open-source, which means its source code is available for anyone to view, modify, and share. This openness encourages creativity and collaboration among users all around the world.\nWhen we talk about Linux, we often mention a distribution, or 'distro' for short. A 'distro' is a complete operating system that bundles the Linux kernel with other software, like system tools and applications.\nThere are many different Linux distributions available, each designed for different types of users and purposes. For example, Ubuntu is known for being user-friendly and is great for beginners. Fedora is often used by those who want the latest features, while Debian is known for its stability. Arch Linux is aimed at more experienced users who enjoy customizing their systems.\nOverall, Linux offers a wonderful opportunity for anyone interested in technology to learn, explore, and create their own computing experience."
        },
        {
          "id": "linux-101-l01-c2",
          "title": "The Kernel: Heart of the System",
          "content": "The kernel is the core of the Linux operating system, acting like a bridge between your software and the computer's hardware. It manages the computer's resources, ensuring everything runs smoothly. One of the kernel's main jobs is to manage the CPU, which is the brain of your computer. It schedules tasks so that different programs can run at the same time without interfering with each other, much like a conductor leading an orchestra.\nAnother important role of the kernel is memory management. It keeps track of where each program is working in the computer's memory, ensuring that they each have their own space to operate safely. This prevents programs from interfering with one another, which could cause them to crash.\nThe kernel also provides device drivers, which are special programs that help the computer talk to hardware components like hard drives, printers, and network cards. They translate general requests from programs into specific instructions that the hardware can understand. Without the kernel, programs would struggle to access the computer's resources in a safe and organized way."
        },
        {
          "id": "linux-101-l01-c3",
          "title": "User Space vs. Kernel Space",
          "content": "To keep the system stable, Linux separates operations into two areas: kernel space and user space. Kernel space is a protected area where the kernel runs. It has full access to hardware and manages critical system functions. Because it has such high-level access, the kernel must be very careful to avoid mistakes that could affect the entire system.\nUser space is where your applications, like web browsers and games, run. These applications have restricted access, which is a key safety feature. If an app crashes in user space, it won't crash the entire operating system; only that specific application will be affected.\nWhen you type a command into the terminal, you are using a program called the shell, which operates in user space. The shell acts as a bridge between you and the kernel. It sends requests, known as system calls, to the kernel to perform various tasks on your behalf. This separation of kernel space and user space is essential for maintaining the stability and security of your Linux system."
        }
      ],
      "flashcards": [
        {
          "id": "linux-101-l01-f1",
          "front": "Linux kernel",
          "back": "The core software layer that manages CPU scheduling, memory, device drivers, and system calls between applications and hardware"
        },
        {
          "id": "linux-101-l01-f2",
          "front": "Distribution (distro)",
          "back": "A complete Linux-based operating system that bundles the kernel with utilities, a package manager, and optionally a desktop environment — e.g., Ubuntu, Fedora"
        },
        {
          "id": "linux-101-l01-f3",
          "front": "System call (syscall)",
          "back": "The mechanism by which user-space programs request services from the kernel — e.g., opening a file, allocating memory"
        },
        {
          "id": "linux-101-l01-f4",
          "front": "User space vs. kernel space",
          "back": "User space: restricted-privilege area where applications run. Kernel space: full-privilege area where the kernel manages hardware directly"
        }
      ],
      "learningAids": [
        {
          "id": "linux-101-l01-a1",
          "type": "image",
          "title": "Kernel, User Space, and Hardware Interaction",
          "content": "A diagram showing applications in user space making system calls to the kernel, which in turn manages the CPU, memory, and devices."
        }
      ]
    },
    {
      "id": "linux-101-l02",
      "title": "The Terminal and Shell Basics",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Open a terminal emulator and identify the shell prompt components",
        "Execute fundamental commands: pwd, ls, cd, echo, cat, man",
        "Use shell features like tab completion, history, and piping"
      ],
      "chunks": [
        {
          "id": "linux-101-l02-c1",
          "title": "Anatomy of the Shell Prompt",
          "content": "When you open a terminal, you'll see a shell prompt, which often looks like this: `user@hostname:~$`. This prompt gives you key information. The `user` part shows who is logged in. The `hostname` is the name of the computer you are working on. The tilde symbol (`~`) is a shortcut for your home directory, your personal folder for files. Finally, the dollar sign (`$`) indicates you are a regular user with standard permissions. If you see a hash symbol (`#`), it means you are the 'root' user, who has administrative privileges to change anything on the system. The shell (like Bash or Zsh) is the program that interprets your commands and tells the kernel what to do. Understanding the prompt helps you know who you are, where you are, and what level of access you have."
        },
        {
          "id": "linux-101-l02-c2",
          "title": "Essential Commands",
          "content": "As you begin your journey with Linux, it's essential to learn some basic commands to navigate the system and manage files. Here are some key commands to know:\n1. **`pwd`**: Stands for 'print working directory' and shows you your current location in the file system.\n2. **`ls`**: Lists all files and folders in your current directory. Use `ls -l` for a detailed view and `ls -a` to include hidden files.\n3. **`cd`**: Used to change directories. `cd ..` moves you up one level, and `cd ~` takes you back to your home directory.\n4. **`echo`**: Prints text to the terminal. It's a simple way to display messages or variable values.\n5. **`cat`**: Displays the contents of a file. To view a text file, just type `cat filename`.\n6. **`man <command>`**: Accesses the manual page for a command. If you're unsure how a command works, this provides detailed documentation.\nThese commands are safe for practice because they only read and display information without modifying your files or system."
        },
        {
          "id": "linux-101-l02-c3",
          "title": "Shell Shortcuts and Piping",
          "content": "The shell includes powerful shortcuts to help you work faster. One of the most helpful is Tab completion. Start typing a file name or command, press the Tab key, and the shell will try to complete it for you, saving time and preventing typos.\nUse the up and down arrow keys to cycle through your command history. To see a full list of recent commands, type `history`.\nTo stop a command that is currently running, press `Ctrl+C`. To clear your terminal screen, press `Ctrl+L`.\nPiping, using the `|` symbol, lets you send the output of one command directly as the input to another. For example, `ls -la | grep .txt` lists all files and then filters the list to show only lines containing '.txt'.\nYou can also redirect output to a file. Use `>` to create a new file with the output, or `>>` to add the output to the end of an existing file. These features make the shell a very efficient tool for managing your system."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-101-l02-a1",
          "title": "Match Command to Description",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "pwd",
              "right": "Print current working directory"
            },
            {
              "left": "ls -la",
              "right": "List all files with details"
            },
            {
              "left": "cd ..",
              "right": "Move up one directory level"
            },
            {
              "left": "man grep",
              "right": "Open the manual for grep"
            },
            {
              "left": "cat file.txt",
              "right": "Display contents of file.txt"
            },
            {
              "left": "history",
              "right": "Show previously run commands"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "linux-101-l02-f1",
          "front": "pwd",
          "back": "Print Working Directory — displays the absolute path of your current location in the file system"
        },
        {
          "id": "linux-101-l02-f2",
          "front": "Piping ( | )",
          "back": "Sends the output of one command as input to another — e.g., 'ls | grep .conf' filters listing for .conf files"
        },
        {
          "id": "linux-101-l02-f3",
          "front": "man <command>",
          "back": "Opens the manual page for any installed command — the primary built-in documentation system on Linux"
        },
        {
          "id": "linux-101-l02-f4",
          "front": "Tab completion",
          "back": "Pressing Tab auto-completes file names, directory names, and commands — reduces typos and speeds up navigation"
        }
      ],
      "learningAids": [
        {
          "id": "linux-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "linux-101-l03",
      "title": "Kernel and Shell Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of the Linux kernel, distributions, and basic shell commands"
      ],
      "questions": [
        {
          "id": "linux-101-l03-q1",
          "text": "What is the primary role of the Linux kernel?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Provide a graphical desktop environment"
            },
            {
              "id": "b",
              "text": "Manage hardware resources and mediate between applications and hardware"
            },
            {
              "id": "c",
              "text": "Install software packages from the internet"
            },
            {
              "id": "d",
              "text": "Display the shell prompt to the user"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The kernel is the core layer that handles CPU scheduling, memory management, device drivers, and system calls between user applications and hardware."
        },
        {
          "id": "linux-101-l03-q2",
          "text": "Which command displays the absolute path of your current directory?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "ls"
            },
            {
              "id": "b",
              "text": "cd"
            },
            {
              "id": "c",
              "text": "pwd"
            },
            {
              "id": "d",
              "text": "echo"
            }
          ],
          "correctOptionId": "c",
          "explanation": "pwd (Print Working Directory) outputs the full absolute path of the directory you are currently in."
        },
        {
          "id": "linux-101-l03-q3",
          "text": "What does the pipe operator ( | ) do in a shell command?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Deletes the output of the first command"
            },
            {
              "id": "b",
              "text": "Sends the output of one command as input to another command"
            },
            {
              "id": "c",
              "text": "Runs two commands simultaneously in separate terminals"
            },
            {
              "id": "d",
              "text": "Writes output to a file on disk"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The pipe ( | ) takes stdout from the command on the left and feeds it as stdin to the command on the right, enabling powerful command chaining."
        },
        {
          "id": "linux-101-l03-q4",
          "text": "User space differs from kernel space in that:",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "User space has full hardware access while kernel space is restricted"
            },
            {
              "id": "b",
              "text": "User space runs applications with restricted privileges; kernel space has full hardware access"
            },
            {
              "id": "c",
              "text": "They are identical in privilege level"
            },
            {
              "id": "d",
              "text": "Kernel space is only used during system shutdown"
            }
          ],
          "correctOptionId": "b",
          "explanation": "User space runs applications with limited privileges, while kernel space operates with full access to hardware — this separation protects system stability."
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
          "id": "linux-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "linux-101-l04",
      "title": "File System Hierarchy and Navigation",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the Filesystem Hierarchy Standard (FHS) and the purpose of key directories",
        "Distinguish between absolute and relative paths",
        "Use commands to create, move, copy, and remove files and directories"
      ],
      "chunks": [
        {
          "id": "linux-101-l04-c1",
          "title": "The Filesystem Hierarchy Standard",
          "content": "In Linux, everything is organized in a single tree structure starting from the root directory, represented by a forward slash (`/`). This organization follows the Filesystem Hierarchy Standard (FHS), which helps users and programs find files. For instance, `/home` contains personal folders for each user. `/etc` holds system-wide configuration files. `/var` stores variable data like logs and caches, which change frequently as the system runs. `/usr` is where user-installed programs and libraries are stored. `/tmp` is for temporary files that are deleted on reboot. Finally, `/dev` is a special directory that represents hardware devices as files, allowing the system to interact with them. Understanding this structure helps you quickly locate files on any Linux system."
        },
        {
          "id": "linux-101-l04-c2",
          "title": "Absolute and Relative Paths",
          "content": "An absolute path is a file's full address, always starting from the root directory (`/`). For example: `/home/alice/projects/app.py`. This path is unambiguous and works from anywhere in the system.\nA relative path is a shortcut that starts from your current directory. If you are in `/home/alice`, you can just use `projects/app.py` to access the same file. This is often faster for navigating.\nThere are also special symbols to help you move around. A single dot (`.`) represents your current directory. Two dots (`..`) represent the parent directory (one level up). A tilde (`~`) is a shortcut for your home directory. Using relative paths is great for quick navigation, while absolute paths are essential for scripts and configuration files where the exact location must be specified."
        },
        {
          "id": "linux-101-l04-c3",
          "title": "Creating, Copying, Moving, and Removing",
          "content": "Managing files and directories is an essential skill. To create a new directory, use `mkdir`. The `-p` option lets you create a nested structure, like `mkdir -p Projects/2023`. The `touch` command creates an empty file or updates the timestamp of an existing one.\nTo copy files, use `cp source destination`. For example, `cp myfile.txt backup/` copies the file into the `backup` directory. To copy an entire directory and its contents, use `cp -r` (recursive).\nThe `mv` command moves or renames files. To rename a file, use `mv oldname.txt newname.txt`.\nTo remove files, use `rm`. Use `rm` with extreme caution! It permanently deletes files and directories, bypassing any trash or recycle bin. To delete a directory and all its contents, use `rm -r directoryname`. Always double-check your path before using `rm` to avoid accidental data loss."
        }
      ],
      "flashcards": [
        {
          "id": "linux-101-l04-f1",
          "front": "/etc",
          "back": "Directory containing system-wide configuration files — e.g., /etc/hosts, /etc/fstab, /etc/ssh/sshd_config"
        },
        {
          "id": "linux-101-l04-f2",
          "front": "/var/log",
          "back": "Directory holding system and application log files — essential for troubleshooting and auditing"
        },
        {
          "id": "linux-101-l04-f3",
          "front": "Absolute vs. relative path",
          "back": "Absolute: starts from root '/' (e.g., /home/alice). Relative: starts from current directory (e.g., ../alice). Use absolute in scripts, relative for navigation"
        },
        {
          "id": "linux-101-l04-f4",
          "front": "rm -r",
          "back": "Recursively remove a directory and all its contents — irreversible on the command line, so always verify the path first"
        }
      ],
      "learningAids": [
        {
          "id": "linux-101-l04-a1",
          "type": "image",
          "title": "The Filesystem Hierarchy Standard (FHS) Tree",
          "content": "A visual tree diagram of the Linux file system, starting from the root '/' and branching out to key directories like /home, /etc, /var, and /usr, with brief descriptions for each."
        }
      ]
    },
    {
      "id": "linux-101-l05",
      "title": "Users, Permissions, and Ownership",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Interpret the rwx permission triplet for owner, group, and others",
        "Use chmod and chown to modify permissions and ownership",
        "Apply the principle of least privilege to file access"
      ],
      "chunks": [
        {
          "id": "linux-101-l05-c1",
          "title": "Users and Groups",
          "content": "Linux is a multi-user operating system, meaning many people can have accounts on the same machine. Each user account has a unique number called a UID (user ID). Every user is also part of at least one group, identified by a GID (group ID), which helps organize permissions.\nOne special user is 'root' (UID 0), the administrator account with full access to the system. Regular users have limited permissions for safety. To perform administrative tasks, a regular user can use the `sudo` command to temporarily gain higher privileges.\nLinux stores user and group information in the `/etc/passwd` and `/etc/group` files, respectively. Proper management of users and groups is crucial for system security, ensuring that people can only access the files and programs they are supposed to."
        },
        {
          "id": "linux-101-l05-c2",
          "title": "The Permission Model: rwx",
          "content": "Every file and directory in Linux has permissions that control who can access it. Permissions apply to three distinct categories: the file's **owner**, the **group** associated with the file, and **others** (everyone else). Each category has three types of permissions: read (r), write (w), and execute (x).\nFor files, 'read' lets you view contents, 'write' lets you modify the file, and 'execute' lets you run it as a program.\nFor directories, permissions work differently. 'Read' lets you list the contents of the directory, 'write' lets you create or delete files within it, and 'execute' lets you enter the directory with the `cd` command.\nYou can view permissions with `ls -l`, which displays them as a string like `-rwxr-xr--`. The first character indicates the type ( `-` for file, `d` for directory). Understanding these permissions is key to securing your files."
        },
        {
          "id": "linux-101-l05-c3",
          "title": "Changing Permissions and Ownership",
          "content": "You can manage file access with two key commands: `chmod` and `chown`. The `chmod` command changes permissions. You can use symbolic notation (e.g., `chmod u+x script.sh` to add execute permission for the user) or octal notation (e.g., `chmod 755 script.sh` to set rwx for owner and r-x for group and others).\nThe `chown` command changes the owner and group of a file. For example, `chown alice:developers report.txt` makes 'alice' the owner and 'developers' the group.\nWhen setting permissions, always follow the principle of least privilege: grant only the minimum permissions necessary for a user or process to do its job. For example, web server files should be readable by the server but not writable, and scripts should only be executable by users who need to run them. This practice enhances system security."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-101-l05-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Owner Permission",
            "Group Permission",
            "Others Permission"
          ],
          "items": [
            {
              "text": "First rwx triplet in ls -l output",
              "bucket": "Owner Permission"
            },
            {
              "text": "Second rwx triplet in ls -l output",
              "bucket": "Group Permission"
            },
            {
              "text": "Third rwx triplet in ls -l output",
              "bucket": "Others Permission"
            },
            {
              "text": "Changed with chmod u+x",
              "bucket": "Owner Permission"
            },
            {
              "text": "Changed with chmod g-w",
              "bucket": "Group Permission"
            },
            {
              "text": "Changed with chmod o-r",
              "bucket": "Others Permission"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "linux-101-l05-f1",
          "front": "chmod",
          "back": "Change file permissions — symbolic (chmod u+x file) or octal (chmod 755 file) notation"
        },
        {
          "id": "linux-101-l05-f2",
          "front": "chown",
          "back": "Change file ownership — syntax: chown user:group file — requires root or sudo"
        },
        {
          "id": "linux-101-l05-f3",
          "front": "Permission octal 755",
          "back": "Owner: rwx (7), Group: r-x (5), Others: r-x (5) — common for executable scripts and program directories"
        },
        {
          "id": "linux-101-l05-f4",
          "front": "Principle of least privilege",
          "back": "Grant only the minimum permissions necessary for a user or process to perform its task — reduces attack surface"
        }
      ],
      "learningAids": [
        {
          "id": "linux-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "linux-101-l06",
      "title": "File System and Permissions Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate knowledge of the FHS, path navigation, and Linux permission model"
      ],
      "questions": [
        {
          "id": "linux-101-l06-q1",
          "text": "Which directory contains system-wide configuration files on a Linux system?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "/home"
            },
            {
              "id": "b",
              "text": "/etc"
            },
            {
              "id": "c",
              "text": "/tmp"
            },
            {
              "id": "d",
              "text": "/dev"
            }
          ],
          "correctOptionId": "b",
          "explanation": "/etc holds system-wide configuration files such as /etc/hosts, /etc/fstab, and service configuration files."
        },
        {
          "id": "linux-101-l06-q2",
          "text": "The permission string '-rwxr--r--' means:",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Everyone can read, write, and execute the file"
            },
            {
              "id": "b",
              "text": "Owner can read/write/execute; group and others can only read"
            },
            {
              "id": "c",
              "text": "Only root can access the file"
            },
            {
              "id": "d",
              "text": "The file is a directory with restricted access"
            }
          ],
          "correctOptionId": "b",
          "explanation": "rwx for owner (read, write, execute), r-- for group (read only), r-- for others (read only). The leading '-' indicates a regular file."
        },
        {
          "id": "linux-101-l06-q3",
          "text": "What does 'chmod 644 file.txt' set the permissions to?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Owner: rw-, Group: r--, Others: r--"
            },
            {
              "id": "b",
              "text": "Owner: rwx, Group: rwx, Others: rwx"
            },
            {
              "id": "c",
              "text": "Owner: r--, Group: r--, Others: r--"
            },
            {
              "id": "d",
              "text": "Owner: rwx, Group: r-x, Others: r-x"
            }
          ],
          "correctOptionId": "a",
          "explanation": "6 = rw- (4+2), 4 = r-- (4), 4 = r-- (4). This is the standard permission for regular files — owner can edit, everyone else can read."
        },
        {
          "id": "linux-101-l06-q4",
          "text": "Which path notation refers to the parent directory?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "."
            },
            {
              "id": "b",
              "text": "~"
            },
            {
              "id": "c",
              "text": ".."
            },
            {
              "id": "d",
              "text": "/"
            }
          ],
          "correctOptionId": "c",
          "explanation": "'..' refers to the parent directory. '.' is the current directory, '~' is your home directory, and '/' is the root of the file system."
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
          "id": "linux-101-l06-a1",
          "type": "mnemonic",
          "title": "Permission Decoder",
          "content": "Remember 'rwx' order. For '-rwxr-xr--', break it down: (1) Owner: rwx, (2) Group: r-x, (3) Others: r--."
        }
      ]
    },
    {
      "id": "linux-101-l07",
      "title": "Package Management and Software Installation",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain what a package manager does and why it matters for system integrity",
        "Compare APT (Debian/Ubuntu) and DNF (Fedora/RHEL) workflows",
        "Describe repositories, dependencies, and safe update practices"
      ],
      "chunks": [
        {
          "id": "linux-101-l07-c1",
          "title": "What Is a Package Manager?",
          "content": "A package manager is a tool that automates installing, updating, and removing software. Instead of searching websites, you use the package manager to download software from trusted sources called repositories. A key feature is dependency resolution: if a program needs other software to run, the package manager automatically installs all required components. This prevents conflicts and ensures software works correctly. Package managers also verify the authenticity of software using digital signatures, protecting your system from malicious code. With a single command, you can keep all your software up-to-date. This system avoids a problem known as 'dependency hell,' where conflicting software requirements can break applications."
        },
        {
          "id": "linux-101-l07-c2",
          "title": "APT and DNF: Two Major Ecosystems",
          "content": "Different Linux families use different package managers. Debian-based distros (like Ubuntu, Mint) use APT (Advanced Package Tool) with `.deb` packages. Common APT commands, which usually require `sudo`, include:\n- `sudo apt update`: Refreshes the list of available software.\n- `sudo apt install <pkg>`: Installs a new package.\n- `sudo apt upgrade`: Upgrades all installed packages.\n- `sudo apt remove <pkg>`: Removes a package.\nFedora and Red Hat-based distros use DNF with `.rpm` packages. The commands are similar:\n- `sudo dnf install <pkg>`: Installs a package.\n- `sudo dnf update`: Updates all packages.\n- `sudo dnf remove <pkg>`: Removes a package.\nThough the commands differ, both tools perform the same core functions: finding, installing, tracking, and removing software from their repositories."
        },
        {
          "id": "linux-101-l07-c3",
          "title": "Repositories, PPAs, and Safe Practices",
          "content": "Repositories are collections of software managed by your Linux distribution's team. Software in these official repositories is tested and considered safe. Sometimes, you might want software from third-party repositories. On Ubuntu, these are often PPAs (Personal Package Archives); on Fedora, they are called COPR. While useful, they can pose security risks, so always verify the source is trustworthy before adding one.\nUniversal package formats like Snap, Flatpak, and AppImage bundle an application with all its dependencies, allowing it to run on almost any Linux distro. They are convenient but may use more disk space.\nFor a safe and stable system, always run `apt update` (or `dnf check-update`) before installing software. Regularly check for system updates, and avoid adding untrusted repositories, especially on critical systems."
        }
      ],
      "flashcards": [
        {
          "id": "linux-101-l07-f1",
          "front": "sudo apt update",
          "back": "Refreshes the local package index from configured repositories — does not install or upgrade anything, just fetches metadata"
        },
        {
          "id": "linux-101-l07-f2",
          "front": "Dependency resolution",
          "back": "The package manager automatically installs all libraries and components that a program requires to function"
        },
        {
          "id": "linux-101-l07-f3",
          "front": "Repository",
          "back": "A trusted server hosting curated, signed software packages — the official source for installing and updating programs on Linux"
        },
        {
          "id": "linux-101-l07-f4",
          "front": "Snap / Flatpak / AppImage",
          "back": "Universal package formats that bundle dependencies for cross-distro compatibility — trade disk space for portability and isolation"
        }
      ],
      "learningAids": [
        {
          "id": "linux-101-l07-a1",
          "type": "image",
          "title": "Package Management Workflow",
          "content": "A flowchart illustrating the package management process: User runs 'apt install', APT checks dependencies, downloads packages from a trusted repository, and installs them."
        }
      ]
    },
    {
      "id": "linux-101-l08",
      "title": "Processes, Services, and systemd",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Distinguish between processes and services",
        "Use ps, top, and kill to inspect and manage running processes",
        "Control services with systemctl and understand unit files"
      ],
      "chunks": [
        {
          "id": "linux-101-l08-c1",
          "title": "Processes: The Building Blocks of a Running System",
          "content": "Every running program on a Linux system is a process. Each process is assigned a unique process ID (PID) by the kernel. When you run a command, the shell creates a new child process to execute it.\nTo see all active processes, use the command `ps aux`. This provides a detailed list showing the PID, user, CPU/memory usage, and the command that started it. For a live, updating view of your system's processes, use `top` or `htop`. These tools are great for identifying processes that are using too many resources.\nTo run a command in the background, add an ampersand (`&`) to the end. This lets you continue using the terminal while the process runs. The `jobs` command lists your background jobs. The kernel acts as a scheduler, ensuring all processes get a fair share of CPU time to keep the system responsive."
        },
        {
          "id": "linux-101-l08-c2",
          "title": "Signals and Process Control",
          "content": "Signals are messages sent to processes to control them. The two most common signals are SIGTERM (15) and SIGKILL (9). SIGTERM is a polite request for a process to shut down, giving it time to save its work and clean up. SIGKILL is a forceful command that terminates a process immediately, without cleanup.\nTo send a signal, use the `kill` command. `kill <PID>` sends a SIGTERM by default. To force-stop a non-responsive process, use `kill -9 <PID>`. The `killall <name>` command can stop all processes with a specific name.\nIn the terminal, you can press `Ctrl+C` to send a SIGINT signal, which interrupts the foreground process. `Ctrl+Z` sends a SIGTSTP signal, which pauses the process. As a best practice, always try SIGTERM before resorting to SIGKILL."
        },
        {
          "id": "linux-101-l08-c3",
          "title": "systemd and Service Management",
          "content": "On most modern Linux systems, `systemd` is the init system—the first process to start at boot (PID 1). It is responsible for starting and managing background services, such as web servers or databases.\nYou control services with the `systemctl` command. For example, `sudo systemctl start nginx` starts the Nginx web server. To make it start automatically every time the computer boots, use `sudo systemctl enable nginx`.\nTo check a service's status, use `systemctl status nginx`. This shows if it's active, its PID, and recent log messages. To stop it, use `sudo systemctl stop nginx`.\nService configurations are defined in unit files, located in directories like `/etc/systemd/system/`. To view logs from all services managed by systemd, use the `journalctl` command. This provides a centralized way to troubleshoot system issues."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-101-l08-a1",
          "title": "Match Command to Purpose",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "ps aux",
              "right": "List all running processes with details"
            },
            {
              "left": "kill -9 <PID>",
              "right": "Force-terminate a process immediately"
            },
            {
              "left": "systemctl status nginx",
              "right": "Check if the Nginx service is running"
            },
            {
              "left": "systemctl enable sshd",
              "right": "Configure sshd to start at boot"
            },
            {
              "left": "top",
              "right": "Live view of system resource usage"
            },
            {
              "left": "journalctl -u nginx",
              "right": "View logs for the Nginx service"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "linux-101-l08-f1",
          "front": "PID (Process ID)",
          "back": "A unique numeric identifier assigned by the kernel to every running process — used to monitor, signal, and manage processes"
        },
        {
          "id": "linux-101-l08-f2",
          "front": "SIGTERM vs. SIGKILL",
          "back": "SIGTERM (15): graceful termination request, allows cleanup. SIGKILL (9): forced immediate termination, no cleanup — use as last resort"
        },
        {
          "id": "linux-101-l08-f3",
          "front": "systemctl enable <service>",
          "back": "Configures a systemd service to start automatically at boot — does not start it immediately (use 'start' for that)"
        },
        {
          "id": "linux-101-l08-f4",
          "front": "journalctl",
          "back": "Reads the systemd journal — centralized log viewer for all services. Use '-u <service>' to filter by unit, '-f' to follow live"
        }
      ],
      "learningAids": [
        {
          "id": "linux-101-l08-a2",
          "type": "image",
          "title": "Process and Service Control",
          "content": "A diagram comparing a temporary process (started by a user command) with a persistent service (managed by systemd). Shows commands like 'ps', 'kill', and 'systemctl' interacting with them."
        }
      ]
    },
    {
      "id": "linux-101-l09",
      "title": "Packages and Processes Checkpoint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate knowledge of package management, process control, and systemd"
      ],
      "questions": [
        {
          "id": "linux-101-l09-q1",
          "text": "What does 'sudo apt update' do?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Installs all available packages"
            },
            {
              "id": "b",
              "text": "Refreshes the local package index from configured repositories"
            },
            {
              "id": "c",
              "text": "Removes unused packages"
            },
            {
              "id": "d",
              "text": "Upgrades the Linux kernel to the latest version"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'apt update' downloads the latest package lists from repositories so the system knows what versions are available. It does not install or upgrade anything."
        },
        {
          "id": "linux-101-l09-q2",
          "text": "Which signal should you try first when stopping an unresponsive process?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "SIGKILL (9) — to ensure it stops immediately"
            },
            {
              "id": "b",
              "text": "SIGTERM (15) — to allow graceful shutdown and cleanup"
            },
            {
              "id": "c",
              "text": "SIGSTOP — to pause it indefinitely"
            },
            {
              "id": "d",
              "text": "SIGHUP — to restart the terminal"
            }
          ],
          "correctOptionId": "b",
          "explanation": "SIGTERM requests graceful termination, giving the process a chance to save state and release resources. Use SIGKILL only if SIGTERM fails."
        },
        {
          "id": "linux-101-l09-q3",
          "text": "The command 'systemctl enable nginx' does what?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Starts Nginx immediately"
            },
            {
              "id": "b",
              "text": "Configures Nginx to start automatically at boot"
            },
            {
              "id": "c",
              "text": "Installs the Nginx package"
            },
            {
              "id": "d",
              "text": "Displays the Nginx access log"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'enable' creates symbolic links so systemd starts the service at boot. To start it right now, use 'systemctl start nginx'."
        },
        {
          "id": "linux-101-l09-q4",
          "text": "Why do Linux package managers resolve dependencies automatically?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To increase download size"
            },
            {
              "id": "b",
              "text": "To ensure all required libraries are installed so the software functions correctly"
            },
            {
              "id": "c",
              "text": "To prevent users from choosing their own software"
            },
            {
              "id": "d",
              "text": "To bypass repository signing checks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Dependency resolution ensures that all libraries and components a program needs are present, preventing 'dependency hell' and runtime errors."
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
          "id": "linux-101-l09-a1",
          "type": "mnemonic",
          "title": "Command Quick Reference",
          "content": "APT/DNF: update, install, remove. systemctl: start, stop, enable, status. kill: SIGTERM (15) is polite, SIGKILL (9) is force."
        }
      ]
    },
    {
      "id": "linux-101-l10",
      "title": "Mastery Quiz: Linux Fundamentals",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Synthesize all Linux fundamentals concepts across kernel, shell, file system, permissions, packages, and processes"
      ],
      "questions": [
        {
          "id": "linux-101-l10-q1",
          "text": "A user runs 'ls -l report.txt' and sees '-rw-r-----'. Who can read this file?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Only the owner"
            },
            {
              "id": "b",
              "text": "Owner and group members"
            },
            {
              "id": "c",
              "text": "Everyone on the system"
            },
            {
              "id": "d",
              "text": "No one — the file is locked"
            }
          ],
          "correctOptionId": "b",
          "explanation": "rw- for owner (read, write), r-- for group (read only), --- for others (no access). Both owner and group members can read the file."
        },
        {
          "id": "linux-101-l10-q2",
          "text": "Which directory in the FHS stores variable data such as system logs?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "/usr"
            },
            {
              "id": "b",
              "text": "/etc"
            },
            {
              "id": "c",
              "text": "/var"
            },
            {
              "id": "d",
              "text": "/home"
            }
          ],
          "correctOptionId": "c",
          "explanation": "/var holds variable data that changes during operation — logs (/var/log), mail spools, caches, and temporary processing files."
        },
        {
          "id": "linux-101-l10-q3",
          "text": "You want to find which process is using the most CPU. Which command provides a live, updating view?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "ls -la"
            },
            {
              "id": "b",
              "text": "cat /proc/cpuinfo"
            },
            {
              "id": "c",
              "text": "top"
            },
            {
              "id": "d",
              "text": "chmod 755"
            }
          ],
          "correctOptionId": "c",
          "explanation": "'top' (or 'htop') provides a real-time, updating display of processes sorted by CPU usage, memory, and other metrics."
        },
        {
          "id": "linux-101-l10-q4",
          "text": "After adding a third-party PPA on Ubuntu, what should you run before installing packages from it?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "sudo apt remove"
            },
            {
              "id": "b",
              "text": "sudo apt update"
            },
            {
              "id": "c",
              "text": "sudo reboot"
            },
            {
              "id": "d",
              "text": "sudo systemctl restart apt"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'sudo apt update' refreshes the package index to include the new repository's packages. Without it, APT won't know about the new software available."
        },
        {
          "id": "linux-101-l10-q5",
          "text": "A shell script fails with 'Permission denied'. Which command grants the owner execute permission?",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "chown +x script.sh"
            },
            {
              "id": "b",
              "text": "chmod u+x script.sh"
            },
            {
              "id": "c",
              "text": "mv script.sh /usr/bin/"
            },
            {
              "id": "d",
              "text": "sudo rm script.sh"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'chmod u+x script.sh' adds execute permission for the owner (u). 'chown' changes ownership, not permissions."
        },
        {
          "id": "linux-101-l10-q6",
          "text": "systemd's journalctl command is used to:",
          "skillId": "linux-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Install new systemd services"
            },
            {
              "id": "b",
              "text": "Edit unit files in /etc/systemd/system/"
            },
            {
              "id": "c",
              "text": "View centralized logs from all systemd-managed services"
            },
            {
              "id": "d",
              "text": "Change file permissions on log files"
            }
          ],
          "correctOptionId": "c",
          "explanation": "journalctl reads the systemd journal, providing centralized access to logs from all services. Filter by unit with '-u <service>'."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 2
        }
      },
      "learningAids": [
        {
          "id": "linux-101-l10-a1",
          "type": "checklist",
          "title": "Final Review Checklist",
          "content": "Have you reviewed: Kernel vs. User Space? Shell commands (ls, cd, pwd)? FHS directories (/etc, /var, /home)? Permissions (rwx, chmod)? Package management (apt)? Process control (ps, kill, systemctl)?"
        }
      ]
    }
  ]
};
