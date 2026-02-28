import type { LearningModule } from "@/lib/modules/types";

export const Linux101Module: LearningModule = {
  id: "linux-101",
  title: "Linux Fundamentals",
  description:
    "Learn Linux essentials for shell navigation, permissions, package basics, and safe admin habits.",
  subject: "Operating Systems",
  tags: ["curriculum", "technology", "operating-systems"],
  minAge: 12,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Navigate Linux file systems using shell-first workflows.",
    "Understand permissions and ownership in shared environments.",
    "Apply safe command habits for package and system operations.",
  ],
  lessons: [
    {
      id: "linux-101-l01",
      title: "Linux Shell Orientation",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "linux-101-l01-c1",
          title: "Filesystem Basics",
          content:
            "Understand root, home directories, and absolute vs relative paths.",
        },
        {
          id: "linux-101-l01-c2",
          title: "Command Anatomy",
          content:
            "Break commands into executable, flags, and arguments for predictable outcomes.",
        },
        {
          id: "linux-101-l01-c3",
          title: "Read-Only First",
          content:
            "Start with inspection commands before using write or delete operations.",
        },
      ],
      flashcards: [
        {
          id: "linux-101-l01-f1",
          front: "pwd",
          back: "Prints the current working directory path.",
        },
        {
          id: "linux-101-l01-f2",
          front: "ls",
          back: "Lists files and folders in the current location.",
        },
      ],
    },
    {
      id: "linux-101-l02",
      title: "Files, Paths, and Text Tools",
      type: "interactive",
      duration: 12,
      interactiveActivities: [
        {
          id: "linux-101-l02-ia1",
          type: "coding_editor",
          title: "Path and Listing Drill",
          description:
            "Practice path navigation and simple file inspection commands in a sandbox terminal.",
          estimatedMinutes: 10,
          difficultyLevel: "easy",
          instructions: [
            "Use pwd and ls -la to inspect environment state.",
            "Navigate with cd and confirm location each step.",
            "Use cat or less to inspect file contents safely.",
          ],
        },
      ],
      learningAids: [
        {
          id: "linux-101-l02-a1",
          type: "practice",
          title: "Command Safety Card",
          content: "Inspect first, then modify; never run unknown commands with sudo.",
        },
      ],
    },
    {
      id: "linux-101-l03",
      title: "Checkpoint: Linux Core Skills",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "linux-101-l03-q1",
          text: "Which command shows permissions and ownership with details?",
          skillId: "linux-101-skill-permissions",
          options: [
            { id: "a", text: "ls -la" },
            { id: "b", text: "echo" },
            { id: "c", text: "clear" },
            { id: "d", text: "whoami --help-only" },
          ],
          correctOptionId: "a",
        },
        {
          id: "linux-101-l03-q2",
          text: "What is a safe guideline for using sudo?",
          skillId: "linux-101-skill-admin",
          options: [
            { id: "a", text: "Use it only when necessary and understood." },
            { id: "b", text: "Use it on all commands by default." },
            { id: "c", text: "Share sudo password with teammates." },
            { id: "d", text: "Disable logs before running sudo commands." },
          ],
          correctOptionId: "a",
        },
        {
          id: "linux-101-l03-q3",
          text: "Which command helps read command documentation quickly?",
          skillId: "linux-101-skill-docs",
          options: [
            { id: "a", text: "man <command>" },
            { id: "b", text: "shutdown now" },
            { id: "c", text: "rm -rf /" },
            { id: "d", text: "passwd root" },
          ],
          correctOptionId: "a",
        },
      ],
      learningAids: [
        {
          id: "linux-101-l03-a1",
          type: "mnemonic",
          title: "P-H-S",
          content: "Path, Help, Safety before privileged command use.",
        },
      ],
    },
    {
      id: "linux-101-l04",
      title: "Permissions, Users, and Security Hygiene",
      type: "video",
      duration: 11,
      chunks: [
        {
          id: "linux-101-l04-c1",
          title: "Read, Write, Execute",
          content:
            "Interpret permission triplets for owner, group, and others.",
        },
        {
          id: "linux-101-l04-c2",
          title: "Ownership and Groups",
          content:
            "Understand why least privilege and correct ownership reduce risk.",
        },
        {
          id: "linux-101-l04-c3",
          title: "Patch and Package Discipline",
          content:
            "Keep packages updated and verify trusted repositories before install.",
        },
      ],
    },
    {
      id: "linux-101-l05",
      title: "Package and Process Starter Lab",
      type: "interactive",
      duration: 14,
      interactiveActivities: [
        {
          id: "linux-101-l05-ia1",
          type: "coding_editor",
          title: "Admin Awareness Lab",
          description:
            "Practice non-destructive package and process inspection commands.",
          estimatedMinutes: 12,
          difficultyLevel: "medium",
          instructions: [
            "Inspect running processes with ps and top/htop.",
            "List installed package metadata without uninstall actions.",
            "Document each command purpose before execution.",
          ],
        },
      ],
      learningAids: [
        {
          id: "linux-101-l05-a1",
          type: "mnemonic",
          title: "I-V-R",
          content: "Inspect, Verify, Run. Always verify before privileged commands.",
        },
      ],
    },
  ],
};
