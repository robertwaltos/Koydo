export type ExamRegion =
  | "Global"
  | "US"
  | "UK"
  | "India"
  | "China"
  | "Australia"
  | "Other";

export type ExamSection = {
  id: string;
  title: string;
  durationMinutes?: number;
  questionCount?: number;
  focus: string;
};

export type ExamTrackProfile = {
  key: string;
  displayName: string;
  region: ExamRegion;
  scoreScale?: string;
  sectionOrder: ExamSection[];
  skillDomains: string[];
};

export const examTrackProfiles: Record<string, ExamTrackProfile> = {
  sat: {
    key: "sat",
    displayName: "SAT",
    region: "US",
    scoreScale: "400-1600",
    sectionOrder: [
      { id: "sat-rw", title: "Reading and Writing", durationMinutes: 64, questionCount: 54, focus: "Comprehension, grammar, rhetoric" },
      { id: "sat-math", title: "Math", durationMinutes: 70, questionCount: 44, focus: "Algebra, advanced math, problem solving" },
    ],
    skillDomains: ["evidence-based reading", "grammar", "algebra", "data analysis"],
  },
  act: {
    key: "act",
    displayName: "ACT",
    region: "US",
    scoreScale: "1-36",
    sectionOrder: [
      { id: "act-english", title: "English", durationMinutes: 45, questionCount: 75, focus: "Usage, punctuation, rhetorical skills" },
      { id: "act-math", title: "Math", durationMinutes: 60, questionCount: 60, focus: "Algebra, geometry, trigonometry" },
      { id: "act-reading", title: "Reading", durationMinutes: 35, questionCount: 40, focus: "Passage analysis and inference" },
      { id: "act-science", title: "Science", durationMinutes: 35, questionCount: 40, focus: "Data interpretation and experiments" },
    ],
    skillDomains: ["grammar", "math fluency", "reading speed", "science reasoning"],
  },
  ap: {
    key: "ap",
    displayName: "AP",
    region: "US",
    scoreScale: "1-5",
    sectionOrder: [
      { id: "ap-mcq", title: "Multiple Choice", focus: "Content recall and applied reasoning" },
      { id: "ap-frq", title: "Free Response", focus: "Constructed response and evidence-based writing" },
    ],
    skillDomains: ["content mastery", "argumentation", "problem solving"],
  },
  gcse: {
    key: "gcse",
    displayName: "GCSE",
    region: "UK",
    sectionOrder: [
      { id: "gcse-paper1", title: "Paper 1", focus: "Core concepts and recall" },
      { id: "gcse-paper2", title: "Paper 2", focus: "Application and analysis" },
    ],
    skillDomains: ["core subject fluency", "exam technique", "command words"],
  },
  "a-level": {
    key: "a-level",
    displayName: "A-Level",
    region: "UK",
    sectionOrder: [
      { id: "alevel-paper1", title: "Paper 1", focus: "Core theory and principles" },
      { id: "alevel-paper2", title: "Paper 2", focus: "Application and synthesis" },
      { id: "alevel-paper3", title: "Paper 3", focus: "Advanced problem solving / practicals" },
    ],
    skillDomains: ["deep conceptual understanding", "extended responses", "multi-step reasoning"],
  },
  ib: {
    key: "ib",
    displayName: "IB Diploma",
    region: "Global",
    sectionOrder: [
      { id: "ib-paper1", title: "Paper 1", focus: "Structured or source-based questions" },
      { id: "ib-paper2", title: "Paper 2", focus: "Extended response and comparative analysis" },
    ],
    skillDomains: ["international-minded analysis", "evidence use", "argument structure"],
  },
  "jee-neet": {
    key: "jee-neet",
    displayName: "JEE/NEET",
    region: "India",
    sectionOrder: [
      { id: "jee-math", title: "Math / Quantitative", focus: "High-speed numerical problem solving" },
      { id: "jee-physics", title: "Physics", focus: "Mechanics, electromagnetism, modern physics" },
      { id: "jee-chemistry", title: "Chemistry", focus: "Physical, organic, inorganic chemistry" },
      { id: "neet-biology", title: "Biology", focus: "Cell biology, genetics, physiology" },
    ],
    skillDomains: ["speed + accuracy", "formula retention", "multistep logic"],
  },
  cuet: {
    key: "cuet",
    displayName: "CUET",
    region: "India",
    sectionOrder: [
      { id: "cuet-language", title: "Language", focus: "Comprehension and verbal ability" },
      { id: "cuet-domain", title: "Domain Subjects", focus: "Subject mastery by stream" },
      { id: "cuet-general", title: "General Test", focus: "Reasoning, quant, general awareness" },
    ],
    skillDomains: ["domain readiness", "reasoning speed", "reading comprehension"],
  },
  gaokao: {
    key: "gaokao",
    displayName: "Gaokao",
    region: "China",
    sectionOrder: [
      { id: "gaokao-chinese", title: "Chinese", focus: "Language and composition" },
      { id: "gaokao-math", title: "Math", focus: "Advanced quantitative reasoning" },
      { id: "gaokao-foreign", title: "Foreign Language", focus: "Reading and listening proficiency" },
      { id: "gaokao-combined", title: "Comprehensive Track", focus: "Science or humanities integrated paper" },
    ],
    skillDomains: ["endurance", "precision", "multi-day pacing"],
  },
  atar: {
    key: "atar",
    displayName: "ATAR",
    region: "Australia",
    sectionOrder: [
      { id: "atar-coursework", title: "Coursework + Internal Assessments", focus: "Continuous performance" },
      { id: "atar-exams", title: "Final Examinations", focus: "State-based exam performance" },
    ],
    skillDomains: ["subject consistency", "exam execution", "long-term revision planning"],
  },
  toefl: {
    key: "toefl",
    displayName: "TOEFL",
    region: "Global",
    scoreScale: "0-120",
    sectionOrder: [
      { id: "toefl-reading", title: "Reading", focus: "Academic passage comprehension" },
      { id: "toefl-listening", title: "Listening", focus: "Lecture and conversation analysis" },
      { id: "toefl-speaking", title: "Speaking", focus: "Integrated spoken responses" },
      { id: "toefl-writing", title: "Writing", focus: "Integrated and independent essays" },
    ],
    skillDomains: ["academic English", "integrated responses", "time-managed writing"],
  },
  ielts: {
    key: "ielts",
    displayName: "IELTS",
    region: "Global",
    scoreScale: "Band 1-9",
    sectionOrder: [
      { id: "ielts-listening", title: "Listening", focus: "Audio comprehension under timed conditions" },
      { id: "ielts-reading", title: "Reading", focus: "Skimming, scanning, detail questions" },
      { id: "ielts-writing", title: "Writing", focus: "Task 1 data response + Task 2 essay" },
      { id: "ielts-speaking", title: "Speaking", focus: "Fluency, coherence, lexical range" },
    ],
    skillDomains: ["language fluency", "writing coherence", "timed comprehension"],
  },
};

export function getTrackKeyFromModuleId(moduleId: string) {
  const match = moduleId.match(/^(.+?)-prep-/i);
  if (!match) return null;
  return match[1].toLowerCase();
}

export function getExamTrackProfileByModuleId(moduleId: string): ExamTrackProfile | null {
  const trackKey = getTrackKeyFromModuleId(moduleId);
  if (!trackKey) return null;
  return examTrackProfiles[trackKey] ?? null;
}
