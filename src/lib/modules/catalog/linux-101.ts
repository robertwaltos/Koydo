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
          "content": "Linux is a fascinating and unique type of operating system that you can use for free! It was created by a talented programmer named Linus Torvalds back in 1991. What makes Linux stand out from other operating systems, like Windows or macOS, is that it is open-source. This means that anyone, including you, can look at the code that makes it work, change it to make it better, and share it with others. This openness encourages creativity and collaboration among users all around the world!\nWhen we talk about Linux, we often mention something called a distribution, or 'distro' for short. A distro is a complete version of Linux that includes the Linux kernel, which is the essential part of the operating system that manages everything. In addition to the kernel, a distro comes with various tools and programs that help you use your computer effectively.\nThere are many different Linux distributions available, each designed for different types of users and purposes. For example, some popular distros include Ubuntu, Fedora, Debian, and Arch Linux. Ubuntu is known for being user-friendly and is great for beginners. Fedora is often used by those who want the latest features, while Debian is known for its stability. Arch Linux, on the other hand, is aimed at more experienced users who enjoy customizing their systems.\nOverall, Linux offers a wonderful opportunity for anyone interested in technology to learn, explore, and create their own computing experience! Whether you're just starting out or have been using computers for a long time, there's a Linux distro that's right for you."
        },
        {
          "id": "linux-101-l01-c2",
          "title": "The Kernel: Heart of the System",
          "content": "The kernel is like the heart of the Linux operating system. Imagine it as a busy traffic manager that helps everything run smoothly on your computer. It sits right in the middle, connecting the programs you use, like games or web browsers, with the physical parts of your computer, such as the CPU, memory, and other hardware. One of the main jobs of the kernel is to manage the CPU, which is the brain of your computer. It makes sure that different tasks can run at the same time without bumping into each other, almost like a conductor leading an orchestra to ensure all the musicians play in harmony.\nAnother important role of the kernel is memory management. This means it keeps track of where each program is working in the computer's memory, ensuring that they each have their own space to operate safely. This prevents programs from interfering with one another, which could cause them to crash or behave unexpectedly.\nThe kernel also provides something called device drivers. These are special programs that help the computer talk to various hardware components, like hard drives, printers, and network cards. They translate the general requests from programs into specific instructions that the hardware can understand. Without the kernel, programs would struggle to access the computer's resources in a safe and organized way, making it difficult for everything to work together efficiently. In summary, the kernel is essential for the smooth operation of the Linux operating system, ensuring that everything runs as it should, just like a well-organized team working towards a common goal."
        },
        {
          "id": "linux-101-l01-c3",
          "title": "User Space vs. Kernel Space",
          "content": "In the world of Linux, programs operate in two distinct areas known as kernel space and user space. Let's break these down to understand them better! Kernel space is like the control center of your computer. Here, the kernel, which is the core part of the operating system, has complete access to all the hardware components. This means it can manage memory, control devices like your keyboard and mouse, and perform other critical tasks that keep your computer running smoothly. Because it has such high-level access, the kernel must be very careful to avoid mistakes that could affect the entire system.\nOn the flip side, we have user space. This is where all the applications you interact with, like web browsers and games, run. However, these applications operate with limited access to the system. This limitation is a safety feature! It ensures that if one of these applications encounters an error or crashes, it won't take down the whole computer. Instead, only that specific application will be affected, allowing the rest of the system to continue functioning normally.\nWhen you type a command into the terminal, you are using a program called the shell, which operates in user space. The shell acts as a bridge between you and the kernel. It sends requests, known as system calls, to the kernel to perform various tasks on your behalf. This separation of kernel space and user space is essential for maintaining the stability and security of your Linux system, allowing you to enjoy a smooth computing experience without worrying about crashes from faulty applications."
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
          "content": "When you open a terminal window on a Linux system, you will see a prompt that looks something like 'user@hostname:~$'. This prompt is very important because it gives you key information about your current session. The 'user' part shows who is currently logged in to the system, which helps you know whose account you are using. The 'hostname' tells you the name of the computer you are working on, which is useful if you are using multiple machines or if you are connected to a network. The tilde symbol (~) represents your home directory, which is like your personal folder where all your files and documents are stored. Finally, the dollar sign ($) indicates that you are using a regular user account, which has limited permissions. If you see a hash symbol (#) instead, it means you are logged in as the root user, who has special permissions to make changes to the system. The shell, which is usually either Bash or Zsh, is a program that reads the commands you type into the terminal. It understands what you want to do and then asks the kernel, which is the core part of the operating system, to run the programs you want to use. Understanding how to read the prompt is very helpful because it allows you to know exactly who you are, where you are in the system, and what level of access you have. This knowledge is essential for navigating and using Linux effectively."
        },
        {
          "id": "linux-101-l02-c2",
          "title": "Essential Commands",
          "content": "As you begin your journey with Linux, it's essential to familiarize yourself with some basic commands that will help you navigate the system and manage your files effectively. Here are some key commands that every Linux user should know:\n1. **'pwd'**: This command stands for 'print working directory.' When you type this command, it shows you the exact location or directory you are currently in. This is helpful to understand where you are in the file system.\n2. **'ls'**: This command lists all the files and folders in your current directory. If you want to see more details about these files, you can add the option **'-l'**, which provides a long listing format with additional information like file size and permissions. If you're curious about hidden files (those that start with a dot), you can use **'-a'** to include them in the list.\n3. **'cd'**: This command is used to change directories. For example, if you want to go up one level in the directory structure, you can type **'cd ..'**. If you want to return to your home directory, simply type **'cd ~'**.\n4. **'echo'**: This command allows you to print text directly to the terminal. It's a simple way to display messages or check the output of variables.\n5. **'cat'**: This command is used to display the contents of a file. If you want to quickly view what’s inside a text file, just type **'cat filename'**.\n6. **'man <command>'**: If you're ever unsure about how to use a command, you can access its manual page by typing **'man'** followed by the command name. This will provide you with detailed information about what the command does and how to use it.\nThese commands are designed to be safe for practice because they only read and display information without making any changes to your files or system settings. So feel free to explore and practice using them in your terminal!"
        },
        {
          "id": "linux-101-l02-c3",
          "title": "Shell Shortcuts and Piping",
          "content": "The shell in Linux is a powerful tool that comes with some really useful shortcuts designed to help you work more efficiently and save time! One of the most helpful features is called Tab completion. When you start typing a file name or a command and press the Tab key, the shell will automatically fill in the rest for you. This means you don’t have to type everything out, which can be a big time-saver!\nAnother great shortcut is the arrow-up key. If you press this key, it will bring up your previous commands one by one, allowing you to quickly reuse them without having to retype everything. If you want to see a complete list of all the commands you've entered during your current session, just type 'history' and hit Enter. This will show you everything you've done so far!\nSometimes, you might need to stop a command that is currently running. You can do this easily by pressing Ctrl+C, which will cancel the command. If your terminal screen gets cluttered and you want to start fresh, simply press Ctrl+L to clear everything off the screen.\nNow, let’s talk about a really cool feature called piping. Piping allows you to take the output of one command and use it as the input for another command. You do this by using the '|' character. For example, if you type 'ls -la | grep .txt', this command will list all the files in the current directory but will only show you the text files.\nAdditionally, you can redirect the output of a command to a file. If you want to create a new file with the output, you can use the '>' symbol. If you want to add more information to an existing file without deleting what’s already there, you can use '>>'. This way, you can keep all your data organized and easily accessible!\nThese shortcuts and features make using the shell much more efficient and enjoyable, so be sure to practice them as you learn more about Linux!"
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
          "content": "In the Linux operating system, all files are organized in a very specific way under a main directory known as the root directory, which is symbolized by the character '/'. This organization is guided by something called the Filesystem Hierarchy Standard, or FHS for short. The FHS helps users understand where different types of files should be located, making it easier to navigate the system. For instance, the '/home' directory is where you will find personal folders for each user on the system. This is where you can store your documents, pictures, and other personal files.\nAnother important directory is '/etc', which contains crucial configuration files that affect the entire system. These files help control how the system operates and can be modified to change settings. The '/var' directory is special because it holds variable data, such as logs and caches, which can change frequently as the system runs.\nYou will also find the '/usr' directory, which is where programs and libraries that users install are stored. This is important for running applications that you might want to use. The '/tmp' directory is used for temporary files, which are files that are only needed for a short time and are automatically deleted when the computer restarts. Finally, the '/dev' directory is unique because it represents hardware devices as special files, allowing the system to interact with them.\nBy understanding this structure, you can quickly locate configuration files, logs, and programs on any Linux system, making your experience more efficient and enjoyable."
        },
        {
          "id": "linux-101-l04-c2",
          "title": "Absolute and Relative Paths",
          "content": "When you are working with files in Linux, it is really important to know how to find them using different types of paths. Let's break this down! An absolute path is like a full address that tells you exactly where to find a file, starting from the very top of the file system, which is called the root directory. For example, if you see a path like '/home/alice/projects/app.py', this means you start at the root and go through the 'home' directory, then into 'alice', and finally into 'projects' to find 'app.py'. This is a complete path that leads you directly to your file.\nOn the other hand, a relative path is a bit different. It starts from where you currently are in the file system. So, if you are already in the '/home/alice' directory, you can simply use 'projects/app.py' to refer to the same file without having to write the whole path. This can save you time and make it easier to navigate!\nThere are also some special symbols that help you move around in the file system. The symbol '.' means 'here' or the current directory you are in. The symbol '..' means 'one level up' or the parent directory, which is the folder that contains your current folder. Lastly, the '~' symbol is a shortcut that takes you directly to your home directory, which is where your personal files are usually stored.\nUsing relative paths is often faster for everyday tasks, while absolute paths are very important when you are writing scripts or setting up configuration files. Understanding these concepts will help you navigate the Linux file system more effectively and efficiently!"
        },
        {
          "id": "linux-101-l04-c3",
          "title": "Creating, Copying, Moving, and Removing",
          "content": "In the Linux operating system, managing files and directories is an essential skill that you will use frequently. To create a new directory, you can use the command 'mkdir', which stands for 'make directory'. If you want to create several directories at once, including those inside other directories, you can add the '-p' option. This allows you to create a whole structure of folders in one command! For example, if you want to create a folder called 'Projects' with a subfolder called '2023', you would type 'mkdir -p Projects/2023'.\nAnother useful command is 'touch'. This command is used to create an empty file, or if the file already exists, it updates the file's timestamp to the current time. This can be helpful for keeping track of when files were last modified.\nWhen you want to copy files, you can use the 'cp' command followed by the source file and the destination where you want the copy to go. For instance, 'cp myfile.txt backup/' will copy 'myfile.txt' into the 'backup' directory. If you need to copy an entire directory and all its contents, you can use 'cp -r' which stands for 'recursive'.\nThe 'mv' command is used for moving or renaming files and directories. If you want to change the name of a file, you can simply use 'mv oldname.txt newname.txt'.\nWhen it comes to removing files, the command 'rm' is what you need. However, be very careful with this command because it permanently deletes files without sending them to a recycle bin. For example, 'rm myfile.txt' will remove 'myfile.txt' forever! If you want to delete a directory and all its contents, you would use 'rm -r directoryname'. Always double-check the paths and file names before using 'rm' to prevent losing important data. It's a good habit to practice caution when managing files in the command line."
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
          "content": "Linux is a powerful operating system that allows many people to use it at the same time. Each person who logs into a Linux system has their own user account, which is like a personal space on the computer. This account is identified by a unique number called a UID, or user ID. It's important to know that every user is also part of at least one group, which helps organize users and is identified by a GID, or group ID.\nOne special user account is called 'root.' This account has the UID of 0 and is very powerful because it has full access to everything on the system. Think of the 'root' account as the administrator or the boss of the computer. Regular users, on the other hand, have limited permissions to keep the system safe. When they need to perform tasks that require more power, they can use a command called 'sudo.' This command allows them to temporarily gain higher privileges to complete important administrative tasks.\nTo keep track of all the users and groups on the system, Linux uses two important files: '/etc/passwd' for user information and '/etc/group' for group information. Managing users and their permissions correctly is crucial for maintaining the security of the Linux system. If users have the right permissions, it helps protect the system from unauthorized access and keeps everyone's data safe. Understanding how users and groups work is a fundamental part of learning Linux and ensures that you can use the system effectively and securely."
        },
        {
          "id": "linux-101-l05-c2",
          "title": "The Permission Model: rwx",
          "content": "In the Linux operating system, every file and directory has specific permissions that control who can access them and what actions they can perform. These permissions are divided into three categories: one for the owner of the file, one for the group that the owner belongs to, and one for everyone else, often referred to as 'others.' Each of these categories has three types of permissions: read (r), write (w), and execute (x).\nFor files, the read permission allows you to view the contents of the file, the write permission lets you modify or change the file, and the execute permission means you can run the file as a program. This is especially important for scripts or applications that perform specific tasks.\nWhen it comes to directories, the permissions work a bit differently. The read permission allows you to see what files are inside the directory, the write permission enables you to create new files or delete existing ones within that directory, and the execute permission allows you to enter the directory using the 'cd' command, which stands for 'change directory.'\nTo check the permissions of files and directories, you can use the command 'ls -l'. This command displays the permissions in a special format, such as '-rwxr-xr--'. In this string, the first character indicates the type of item: a dash (-) means it's a file, while a 'd' means it's a directory. Understanding these permissions is crucial for managing files and ensuring that the right people have the right access to your data."
        },
        {
          "id": "linux-101-l05-c3",
          "title": "Changing Permissions and Ownership",
          "content": "In Linux, managing who can access and modify files is very important, and this is done using two main commands: 'chmod' and 'chown'. The 'chmod' command is used to change the permissions of a file. You can use it in two ways: symbolic notation and octal notation. For example, if you want to allow the owner of a file to run a script, you would type 'chmod u+x script.sh'. This command adds the execute permission for the owner of the file. Alternatively, you can use octal notation, which is a numerical way to set permissions. For instance, 'chmod 755 script.sh' sets the permissions so that the owner can read, write, and execute the file, while the group and others can only read and execute it.\nThe 'chown' command is used to change the ownership of a file. For example, if you want to make Alice the owner of a file named 'report.txt' and assign it to the 'developers' group, you would use the command 'chown alice:developers report.txt'. This means that Alice will have control over the file, and members of the developers group will also have certain permissions based on the file's settings.\nIt's crucial to follow the principle of least privilege when setting permissions. This principle means that you should only give users the permissions they absolutely need to perform their tasks. For example, files that a web server uses should be readable by the server process but not writable, to prevent unauthorized changes. Similarly, scripts should only be executable by the users who are supposed to run them, ensuring that only the right people have access to sensitive operations."
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
          "content": "A package manager is a really helpful tool that makes it super easy for you to install, update, configure, and remove software on your computer. Instead of having to hunt for software on random websites, Linux users can download software from safe and reliable places called repositories. Think of these repositories as big libraries filled with software that are carefully looked after by the creators of the Linux distribution. One of the best features of a package manager is its ability to automatically handle dependencies. This means that if a program needs another piece of software to work properly, the package manager will install both the main program and its required software at the same time. This ensures that everything works smoothly together and helps to avoid frustrating problems where different versions of software might clash with each other. Additionally, package managers make sure that the software you install is safe and secure because the packages are signed with special codes that verify their authenticity. This means you can trust that the software is legitimate. Keeping your software up to date is also a breeze with a package manager; you can do it all with just one simple command. This helps prevent issues that can arise when different software versions don’t get along, a problem often referred to as 'dependency hell.' Overall, package managers are essential tools for anyone using Linux, making software management much easier and safer!"
        },
        {
          "id": "linux-101-l07-c2",
          "title": "APT and DNF: Two Major Ecosystems",
          "content": "In the exciting world of Linux, managing software can vary based on the type of distribution you choose to use. For instance, if you are using a Debian-based distribution, such as Ubuntu, Mint, or Pop!_OS, you will interact with a powerful tool called APT, which stands for Advanced Package Tool. This tool works with special files known as .deb packages. Here are some important commands you might find useful when using APT: First, you can type 'sudo apt update' to refresh the list of available software, ensuring you have the latest information. If you want to install a new program, you would use 'sudo apt install <pkg>', where <pkg> is the name of the software you want. To keep all your installed software up to date, you can run 'sudo apt upgrade', which updates everything at once. If you decide that you no longer need a program, you can easily remove it by typing 'sudo apt remove <pkg>'. On the flip side, if you are using Fedora or Red Hat-based distributions, you will use a different tool called DNF, which works with .rpm packages. The commands for DNF are quite similar: you can use 'sudo dnf install <pkg>' to install software, 'sudo dnf update' to update all your programs, and 'sudo dnf remove <pkg>' to uninstall any software you don’t want anymore. Although the commands for APT and DNF are different, they both perform the same essential functions: they help you find, verify, install, track, and remove software from their respective repositories, making it easier for you to manage your system effectively."
        },
        {
          "id": "linux-101-l07-c3",
          "title": "Repositories, PPAs, and Safe Practices",
          "content": "When you start using Linux, you will often come across something called repositories. Think of repositories as special collections of software that are carefully managed by the team that creates your Linux distribution. The software found in these official repositories has been thoroughly tested to ensure it is safe for you to use. However, there are times when you might want to explore software from other sources, known as third-party repositories. In Ubuntu, these are called PPAs, or Personal Package Archives, while in Fedora, they are referred to as COPR. While these third-party options can provide you with exciting new software, they can also pose risks. Therefore, it is crucial to verify that the source is trustworthy before you decide to add it to your system. Additionally, there are universal package formats like Snap, Flatpak, and AppImage. These formats bundle all the necessary components needed to run a program, which makes it easier to use the software across different Linux distributions. However, keep in mind that they may take up more space on your computer. To keep your Linux system running smoothly and securely, it is a good practice to run the command 'apt update' before installing any new software. This ensures that you have the latest information about available packages. It’s also wise to regularly check for updates, read the changelogs before making significant changes, and avoid adding untrusted repositories, especially on systems that are important for your work or studies."
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
          "content": "In the Linux operating system, every program that is currently running is referred to as a process. Each of these processes is assigned a unique identifier known as a PID, or process ID, which helps the system keep track of them. When you decide to run a command, the Linux shell creates a new child process specifically to execute that command. This means that each time you open a program or run a command, a new process is born!\nTo see all the processes that are currently active on your system, you can use the command 'ps aux'. This command provides a detailed list that includes the PID, the user who started each process, how much CPU and memory each process is using, and the command that initiated it. This information is really helpful for understanding how your system is performing.\nIf you're curious about what’s happening in real-time, you can use the 'top' or 'htop' commands. These tools give you a live, updating view of all running processes. You can even sort the list by CPU or memory usage, which can help you identify any processes that are using an excessive amount of resources, often referred to as 'resource hogs'.\nIf you want to run a process in the background, you can simply add an '&' at the end of your command. This allows you to continue using the terminal while the process runs. To see a list of all your background jobs, you can use the 'jobs' command.\nLastly, the Linux kernel, which is the core part of the operating system, plays an important role in managing these processes. It ensures that all processes receive a fair amount of CPU time, allowing them to run smoothly and efficiently. This fair allocation helps maintain the overall performance of your system, ensuring that no single process can take over and slow everything down."
        },
        {
          "id": "linux-101-l08-c2",
          "title": "Signals and Process Control",
          "content": "In the Linux operating system, processes are managed using something called signals. You can think of signals as special messages that the system or users send to processes to tell them what to do. Each signal has a unique number associated with it, and some of the most commonly used signals are SIGTERM and SIGKILL. The SIGTERM signal, which is represented by the number 15, is a friendly way to ask a process to stop running. It gives the process a chance to finish what it’s doing and clean up any resources it was using, like files or memory. On the other hand, SIGKILL, which is represented by the number 9, is a more forceful command that tells a process to stop immediately, without giving it a chance to clean up.\nTo send a SIGTERM signal to a process, you can use the command 'kill <PID>', where <PID> is the Process ID of the process you want to stop. If the process is not responding and you need to stop it right away, you can use 'kill -9 <PID>' to send a SIGKILL signal. If you want to stop all processes that have the same name, you can use the command 'killall <name>'.\nWhen you are working with processes in the terminal, you might sometimes need to interrupt a process that is currently running in the foreground. You can do this by pressing Ctrl+C, which sends a SIGINT signal to the process, telling it to stop. If you want to pause a process instead of stopping it completely, you can press Ctrl+Z, which sends a SIGTSTP signal.\nIt’s really important to handle these signals properly. As a good practice, you should always try to use SIGTERM first before using the more forceful SIGKILL. This way, you give the process a chance to finish its work safely."
        },
        {
          "id": "linux-101-l08-c3",
          "title": "systemd and Service Management",
          "content": "systemd is a crucial component of many modern Linux operating systems. It serves two main roles: it acts as the init system, which is the first program that runs when your computer starts, and it also manages services, which are often called units. When your computer boots up, systemd begins running as the process with the ID 1 (PID 1) and takes charge of starting and managing all other services.\nFor instance, if you want to start the Nginx web server, you can use the command 'sudo systemctl start nginx'. This command tells systemd to begin running the Nginx service. If you want Nginx to automatically start every time your computer powers on, you can set it up with the command 'sudo systemctl enable nginx'. This way, you won’t have to start it manually each time.\nTo check if the Nginx service is currently running, you can use 'systemctl status nginx'. This command provides important information, such as whether the service is active, its process ID (PID), and any recent messages or logs related to the service. If you ever need to stop the Nginx service, you can do so with 'sudo systemctl stop nginx'.\nThe configuration for how services operate is stored in unit files, which you can find in the '/etc/systemd/system/' directory. These files define how services start, restart, and how they depend on one another. Additionally, you can use the command 'journalctl' to view logs from systemd. This allows you to see a centralized record of what has happened with your services, making it easier to troubleshoot any issues that may arise."
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
