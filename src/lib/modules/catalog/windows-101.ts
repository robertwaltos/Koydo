import type { LearningModule } from "@/lib/modules/types";

export const Windows101Module: LearningModule = {
  id: "windows-101",
  title: "Windows Fundamentals",
  description:
    "Build practical Windows skills for navigation, file management, security, and terminal workflows.",
  subject: "Operating Systems",
  tags: ["curriculum", "technology", "operating-systems"],
  minAge: 12,
  maxAge: 99,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Navigate the Windows desktop and settings confidently.",
    "Organize files and folders using practical workflows.",
    "Use PowerShell and CMD for core system tasks.",
  ],
  lessons: [
    {
      id: "windows-101-l01",
      title: "Desktop and System Navigation",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "windows-101-l01-c1",
          title: "Desktop Essentials",
          content:
            "Learn the taskbar, Start menu, notification center, and quick settings for daily navigation.",
        },
        {
          id: "windows-101-l01-c2",
          title: "Settings Structure",
          content:
            "Map major settings categories: personalization, system, network, accounts, and accessibility.",
        },
        {
          id: "windows-101-l01-c3",
          title: "Window Management",
          content:
            "Use snapping, virtual desktops, and shortcuts to work faster and reduce context switching.",
        },
      ],
      flashcards: [
        {
          id: "windows-101-l01-f1",
          front: "Taskbar",
          back: "The primary launch and switching strip for apps and system actions.",
        },
        {
          id: "windows-101-l01-f2",
          front: "Virtual desktop",
          back: "A separate workspace for organizing apps by task.",
        },
      ],
    },
    {
      id: "windows-101-l02",
      title: "Files, Folders, and Search",
      type: "interactive",
      duration: 12,
      interactiveActivities: [
        {
          id: "windows-101-l02-ia1",
          type: "sorting_buckets",
          title: "Folder Structure Lab",
          description: "Sort sample files into a clean project directory structure.",
          estimatedMinutes: 9,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "docs", label: "Documents" },
              { id: "media", label: "Media" },
              { id: "data", label: "Data" },
            ],
            items: [
              { id: "w1", label: "project-plan.docx", correctTargetId: "docs" },
              { id: "w2", label: "demo-video.mp4", correctTargetId: "media" },
              { id: "w3", label: "results.csv", correctTargetId: "data" },
              { id: "w4", label: "meeting-notes.txt", correctTargetId: "docs" },
            ],
          },
        },
      ],
      learningAids: [
        {
          id: "windows-101-l02-a1",
          type: "practice",
          title: "Search Checklist",
          content: "Practice filtering by file type, modified date, and location.",
        },
      ],
    },
    {
      id: "windows-101-l03",
      title: "Checkpoint: Core Windows Skills",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "windows-101-l03-q1",
          text: "Which built-in feature helps place two windows side-by-side quickly?",
          skillId: "windows-101-skill-layout",
          options: [
            { id: "a", text: "Snap layouts" },
            { id: "b", text: "Disk cleanup" },
            { id: "c", text: "Task scheduler" },
            { id: "d", text: "Recovery mode" },
          ],
          correctOptionId: "a",
        },
        {
          id: "windows-101-l03-q2",
          text: "What is the safest default for regular work accounts?",
          skillId: "windows-101-skill-security",
          options: [
            { id: "a", text: "Use a standard user account, not admin, for daily tasks." },
            { id: "b", text: "Disable updates permanently." },
            { id: "c", text: "Turn off device encryption." },
            { id: "d", text: "Share one password across all services." },
          ],
          correctOptionId: "a",
        },
        {
          id: "windows-101-l03-q3",
          text: "Which tool is most appropriate to script repeatable commands?",
          skillId: "windows-101-skill-cli",
          options: [
            { id: "a", text: "PowerShell" },
            { id: "b", text: "Paint" },
            { id: "c", text: "Notepad in plain mode only" },
            { id: "d", text: "Calculator" },
          ],
          correctOptionId: "a",
        },
      ],
      learningAids: [
        {
          id: "windows-101-l03-a1",
          type: "mnemonic",
          title: "S-C-P",
          content: "Secure settings, clean files, and practice commands.",
        },
      ],
    },
    {
      id: "windows-101-l04",
      title: "Security, Updates, and Recovery Basics",
      type: "video",
      duration: 11,
      chunks: [
        {
          id: "windows-101-l04-c1",
          title: "Defender and Firewall",
          content:
            "Understand the role of real-time protection, scans, and firewall profiles.",
        },
        {
          id: "windows-101-l04-c2",
          title: "Update Strategy",
          content:
            "Balance security patches with downtime planning and staged restarts.",
        },
        {
          id: "windows-101-l04-c3",
          title: "Backup and Restore",
          content:
            "Use restore points and file backup habits to reduce risk before major changes.",
        },
      ],
    },
    {
      id: "windows-101-l05",
      title: "PowerShell and CMD Starter Lab",
      type: "interactive",
      duration: 14,
      interactiveActivities: [
        {
          id: "windows-101-l05-ia1",
          type: "coding_editor",
          title: "Terminal Basics",
          description: "Run read-only commands for location, listing, and help discovery.",
          estimatedMinutes: 12,
          difficultyLevel: "medium",
          instructions: [
            "Use pwd/Get-Location to check current path.",
            "Use dir/ls to list files.",
            "Use Get-Help or command /? to inspect syntax safely.",
          ],
        },
      ],
      learningAids: [
        {
          id: "windows-101-l05-a1",
          type: "mnemonic",
          title: "P-L-H",
          content: "Path, List, Help: the first three terminal checks before any change.",
        },
      ],
    },
  ],
};
