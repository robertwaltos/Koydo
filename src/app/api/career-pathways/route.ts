import { NextResponse } from "next/server";

// Career pathways with role-based learning tracks
const CAREER_PATHWAYS = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    icon: "\u{1F4BB}",
    description: "Build applications and systems with code. Learn programming, algorithms, and software design.",
    skills: ["Programming Basics", "Data Structures", "Web Development", "Databases", "Version Control"],
    relatedModules: ["coding-basics", "web-development", "algebra-foundations"],
    salaryRange: "$70K - $150K+",
    demandLevel: "Very High",
    ageGroup: "13+",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "\u{1F4CA}",
    description: "Analyze data to find patterns and insights. Combine math, statistics, and programming.",
    skills: ["Statistics", "Python", "Machine Learning", "Data Visualization", "Linear Algebra"],
    relatedModules: ["algebra-foundations", "pre-calculus", "calculus-mastery", "coding-basics"],
    salaryRange: "$80K - $160K+",
    demandLevel: "Very High",
    ageGroup: "15+",
  },
  {
    id: "doctor",
    title: "Medical Doctor",
    icon: "\u{1FA7A}",
    description: "Diagnose and treat patients. Requires deep knowledge of biology, chemistry, and anatomy.",
    skills: ["Biology", "Chemistry", "Anatomy", "Patient Communication", "Critical Thinking"],
    relatedModules: ["science-explorer", "advanced-science"],
    salaryRange: "$200K - $400K+",
    demandLevel: "High",
    ageGroup: "13+",
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    icon: "\u{1F33F}",
    description: "Study and protect the environment. Work on climate, ecosystems, and sustainability.",
    skills: ["Earth Science", "Biology", "Data Analysis", "Field Research", "Policy"],
    relatedModules: ["science-explorer", "advanced-science"],
    salaryRange: "$50K - $100K",
    demandLevel: "Growing",
    ageGroup: "13+",
  },
  {
    id: "journalist",
    title: "Journalist / Writer",
    icon: "\u{270D}\u{FE0F}",
    description: "Research and communicate stories to the public. Strong writing and analysis skills essential.",
    skills: ["Writing", "Research", "Critical Reading", "Interviewing", "Media Literacy"],
    relatedModules: ["reading-fluency", "critical-analysis"],
    salaryRange: "$35K - $80K",
    demandLevel: "Moderate",
    ageGroup: "13+",
  },
  {
    id: "teacher",
    title: "Teacher / Educator",
    icon: "\u{1F468}\u{200D}\u{1F3EB}",
    description: "Inspire and educate the next generation. Specialize in any subject area.",
    skills: ["Subject Expertise", "Communication", "Lesson Planning", "Patience", "Assessment"],
    relatedModules: ["reading-fluency", "algebra-foundations", "science-explorer"],
    salaryRange: "$40K - $80K",
    demandLevel: "High",
    ageGroup: "13+",
  },
  {
    id: "game-developer",
    title: "Game Developer",
    icon: "\u{1F3AE}",
    description: "Design and build video games. Combines programming, art, and storytelling.",
    skills: ["Programming", "Game Design", "3D Math", "Physics", "Creative Writing"],
    relatedModules: ["coding-basics", "web-development", "algebra-foundations"],
    salaryRange: "$60K - $130K+",
    demandLevel: "High",
    ageGroup: "13+",
  },
  {
    id: "historian",
    title: "Historian / Researcher",
    icon: "\u{1F4DC}",
    description: "Study the past to understand the present. Research, analyze, and write about historical events.",
    skills: ["Research", "Critical Analysis", "Writing", "Archival Skills", "Languages"],
    relatedModules: ["world-history", "reading-fluency", "critical-analysis"],
    salaryRange: "$45K - $90K",
    demandLevel: "Moderate",
    ageGroup: "13+",
  },
];

const DEMAND_COLORS: Record<string, string> = {
  "Very High": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  High: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Growing: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Moderate: "bg-gray-100 text-gray-600 dark:bg-gray-800/30 dark:text-gray-400",
};

/** GET /api/career-pathways — list all career pathways */
export async function GET() {
  return NextResponse.json({
    pathways: CAREER_PATHWAYS,
    demandColors: DEMAND_COLORS,
  });
}
