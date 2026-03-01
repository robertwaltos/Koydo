import type { LearningModule } from "@/lib/modules/types";

export const Linux101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Linux is a free, open-source operating system kernel first released by Linus Torvalds in 1991. Unlike proprietary systems such as Windows or macOS, anyone can inspect, modify, and distribute the Linux source code under the GNU General Public License. A complete Linux-based OS — called a distribution (distro) — bundles the kernel with system utilities, a package manager, and often a desktop environment. Popular distros include Ubuntu, Fedora, Debian, and Arch Linux, each targeting different audiences from beginners to advanced users."
        },
        {
          "id": "linux-101-l01-c2",
          "title": "The Kernel: Heart of the System",
          "content": "The kernel is the core component that sits between user applications and hardware. It manages CPU scheduling, allocating processor time to competing processes so they appear to run simultaneously. It controls memory management, ensuring each process gets its own protected address space. It provides device drivers that translate generic I/O requests into hardware-specific instructions for disks, network cards, and peripherals. Without the kernel, applications would have no standardized way to access the machine's resources."
        },
        {
          "id": "linux-101-l01-c3",
          "title": "User Space vs. Kernel Space",
          "content": "Linux separates execution into two domains: kernel space and user space. Kernel space runs with full hardware privileges and handles critical tasks like memory allocation and device access. User space is where applications run with restricted privileges — they request kernel services through system calls (syscalls). This separation prevents a buggy application from crashing the entire system. When you type a command in the terminal, the shell (a user-space program) issues syscalls that the kernel fulfills on your behalf."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "When you open a terminal, you see a prompt like 'user@hostname:~$'. The username tells you who is logged in, the hostname identifies the machine, the tilde (~) represents your home directory, and the dollar sign ($) indicates a regular user (a hash '#' means root). The shell — typically Bash or Zsh — reads your typed commands, interprets them, and asks the kernel to execute programs. Understanding the prompt helps you always know who you are, where you are, and what privilege level you have."
        },
        {
          "id": "linux-101-l02-c2",
          "title": "Essential Commands",
          "content": "Every Linux user should master a small set of foundational commands. 'pwd' prints the current working directory. 'ls' lists directory contents; add '-l' for details and '-a' for hidden files. 'cd' changes directories — 'cd ..' goes up one level, 'cd ~' returns home. 'echo' prints text to the terminal. 'cat' displays file contents. 'man <command>' opens the manual page for any installed command. These commands are non-destructive — they only read and display information, making them safe to practice freely."
        },
        {
          "id": "linux-101-l02-c3",
          "title": "Shell Shortcuts and Piping",
          "content": "The shell offers productivity shortcuts that save significant time. Tab completion auto-fills file names and commands when you press Tab. Arrow-up recalls previous commands from history, and 'history' lists them all. Ctrl+C cancels a running command, and Ctrl+L clears the screen. Piping with the '|' character sends one command's output as input to another — for example, 'ls -la | grep .txt' lists only text files. Redirection with '>' writes output to a file, and '>>' appends without overwriting."
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
          "content": "Linux organizes all files under a single root directory, '/'. The Filesystem Hierarchy Standard (FHS) defines where different types of files belong. '/home' stores personal user directories. '/etc' holds system-wide configuration files. '/var' contains variable data like logs and caches. '/usr' houses user-installed programs and libraries. '/tmp' provides temporary storage cleared on reboot. '/dev' exposes hardware devices as special files. Understanding this layout lets you find configuration, logs, and programs quickly on any Linux distribution."
        },
        {
          "id": "linux-101-l04-c2",
          "title": "Absolute and Relative Paths",
          "content": "An absolute path starts from the root '/' and specifies the complete location — for example, '/home/alice/projects/app.py'. A relative path starts from your current directory — if you are in '/home/alice', then 'projects/app.py' points to the same file. The special entry '.' refers to the current directory, '..' refers to the parent directory, and '~' is a shortcut for your home directory. Combining cd with relative paths is usually faster for everyday navigation, while absolute paths are essential in scripts and configuration files."
        },
        {
          "id": "linux-101-l04-c3",
          "title": "Creating, Copying, Moving, and Removing",
          "content": "The 'mkdir' command creates directories — add '-p' to create nested directories in one step. 'touch' creates an empty file or updates the timestamp of an existing one. 'cp source dest' copies files; use 'cp -r' to copy directories recursively. 'mv source dest' moves or renames files and directories. 'rm file' removes files permanently — there is no trash can on the command line. Use 'rm -r' to remove directories, and always double-check paths before running 'rm' to avoid accidental data loss."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Linux is a multi-user system — each person who logs in has a user account with a unique UID (user ID). Every user belongs to at least one group, identified by a GID (group ID). The 'root' account (UID 0) has unrestricted access to the entire system. Regular users operate with limited privileges and use 'sudo' to temporarily elevate when administrative tasks are necessary. The files '/etc/passwd' and '/etc/group' store user and group information respectively. Proper user management is the foundation of Linux security."
        },
        {
          "id": "linux-101-l05-c2",
          "title": "The Permission Model: rwx",
          "content": "Every file and directory has three permission sets: owner, group, and others. Each set contains three flags — read (r), write (w), and execute (x). For files: read allows viewing contents, write allows modification, and execute allows running as a program. For directories: read lists contents, write allows creating or deleting files inside, and execute allows entering the directory with cd. The command 'ls -l' displays permissions as a 10-character string like '-rwxr-xr--', where the first character indicates type (- for file, d for directory)."
        },
        {
          "id": "linux-101-l05-c3",
          "title": "Changing Permissions and Ownership",
          "content": "The 'chmod' command modifies permissions using symbolic notation (chmod u+x script.sh adds execute for the owner) or octal notation (chmod 755 script.sh sets rwxr-xr-x). The 'chown' command changes file ownership — 'chown alice:developers report.txt' sets the owner to alice and the group to developers. The principle of least privilege dictates granting only the minimum permissions necessary. A web server's files should be readable by the server process but not writable; scripts should be executable only by intended users."
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
      }
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
          "content": "A package manager is a tool that automates installing, updating, configuring, and removing software. Instead of downloading binaries from random websites, Linux users install from curated repositories — trusted servers maintained by the distribution. The package manager resolves dependencies automatically: if program A requires library B, both are installed together. This centralized approach ensures software integrity (packages are cryptographically signed), simplifies updates (one command patches everything), and prevents 'dependency hell' where conflicting library versions break applications."
        },
        {
          "id": "linux-101-l07-c2",
          "title": "APT and DNF: Two Major Ecosystems",
          "content": "Debian-based distributions (Ubuntu, Mint, Pop!_OS) use APT (Advanced Package Tool) with .deb packages. 'sudo apt update' refreshes the package index, 'sudo apt install <pkg>' installs software, 'sudo apt upgrade' updates all packages, and 'sudo apt remove <pkg>' uninstalls. Fedora and RHEL-based distros use DNF with .rpm packages: 'sudo dnf install <pkg>', 'sudo dnf update', and 'sudo dnf remove <pkg>'. Despite different commands, both managers perform the same core functions: fetch, verify, install, track, and remove packages from repositories."
        },
        {
          "id": "linux-101-l07-c3",
          "title": "Repositories, PPAs, and Safe Practices",
          "content": "Official repositories are maintained by the distro team and contain tested, signed packages. Third-party repositories (PPAs on Ubuntu, COPR on Fedora) offer additional software but carry higher risk — always verify the source before adding one. Universal package formats like Snap, Flatpak, and AppImage bundle dependencies to run on any distro, trading disk space for portability. Best practices: run 'apt update' before installing to get the latest index, schedule regular upgrades, read changelogs before major version jumps, and never add untrusted repositories to production servers."
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
          "content": "Every running program on Linux is a process identified by a unique PID (process ID). When you launch a command, the shell forks a child process that executes the program. 'ps aux' lists all running processes with their PID, user, CPU/memory usage, and command. 'top' (or 'htop') provides a live, updating view — sort by CPU or memory to spot resource hogs. Background processes can be started with '&' appended to a command, and 'jobs' lists them. The kernel's scheduler allocates CPU time slices to all processes fairly."
        },
        {
          "id": "linux-101-l08-c2",
          "title": "Signals and Process Control",
          "content": "Linux controls processes through signals — numbered messages sent by the kernel or users. The most common are SIGTERM (15), which politely asks a process to terminate and clean up, and SIGKILL (9), which forces immediate termination with no cleanup. 'kill <PID>' sends SIGTERM by default; 'kill -9 <PID>' sends SIGKILL for unresponsive processes. 'killall <name>' targets processes by name. Ctrl+C sends SIGINT (interrupt) to the foreground process, and Ctrl+Z sends SIGTSTP (suspend). Proper signal handling is essential — always try SIGTERM before resorting to SIGKILL."
        },
        {
          "id": "linux-101-l08-c3",
          "title": "systemd and Service Management",
          "content": "systemd is the init system and service manager on most modern Linux distributions. It starts as PID 1 during boot and manages all other services (called units). 'sudo systemctl start nginx' starts the Nginx web server. 'sudo systemctl enable nginx' configures it to start automatically at boot. 'systemctl status nginx' shows whether the service is active, its PID, and recent log output. 'sudo systemctl stop nginx' halts it. Unit files in '/etc/systemd/system/' define how services start, restart, and depend on each other. journalctl reads the systemd journal for centralized log viewing."
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
      }
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
      }
    }
  ]
};
