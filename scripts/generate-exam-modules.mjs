import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");

const exams = [
  {
    id: "sat-prep-101",
    constName: "SatPrep101Module",
    title: "SAT Prep Foundations",
    subject: "Exam Prep",
    description: "Build evidence-based reading, writing, and math fluency for the SAT.",
    minAge: 14,
    maxAge: 19,
    difficultyBand: "advanced",
    focus: "SAT readiness",
    strands: ["reading", "writing", "algebra", "timing"],
    lessonTitles: [
      "SAT Structure and Strategy",
      "Reading Evidence Skills",
      "Writing and Language Rules",
      "Algebra and Data Essentials",
      "Advanced Math Problem Solving",
      "Timing and Pacing Practice",
      "Error Analysis Workshop",
      "Section Drill: Reading + Writing",
      "Section Drill: Math",
      "Full SAT Mock and Review",
    ],
  },
  {
    id: "act-prep-101",
    constName: "ActPrep101Module",
    title: "ACT Prep Foundations",
    subject: "Exam Prep",
    description: "Prepare for ACT English, Math, Reading, and Science with targeted drills.",
    minAge: 14,
    maxAge: 19,
    difficultyBand: "advanced",
    focus: "ACT readiness",
    strands: ["english", "math", "reading", "science reasoning"],
    lessonTitles: [
      "ACT Overview and Scoring",
      "English Usage and Rhetoric",
      "Math Core Skill Review",
      "Reading Passage Strategy",
      "Science Reasoning Techniques",
      "Pacing Under Time Limits",
      "Error Log and Recovery",
      "Section Drill: English + Reading",
      "Section Drill: Math + Science",
      "Full ACT Mock and Review",
    ],
  },
  {
    id: "ap-prep-101",
    constName: "ApPrep101Module",
    title: "AP Exam Prep Toolkit",
    subject: "Exam Prep",
    description: "Master AP-style multiple-choice and free-response performance strategies.",
    minAge: 14,
    maxAge: 19,
    difficultyBand: "advanced",
    focus: "AP exam success",
    strands: ["frq planning", "mcq strategy", "evidence", "rubrics"],
    lessonTitles: [
      "AP Exam Formats by Subject",
      "AP Multiple-Choice Strategy",
      "Free-Response Planning",
      "Evidence and Explanation Quality",
      "Scoring Rubric Deep Dive",
      "Time Management in FRQ",
      "Common Pitfalls and Fixes",
      "Practice Set: MCQ",
      "Practice Set: FRQ",
      "Mock AP Session and Reflection",
    ],
  },
  {
    id: "gcse-prep-101",
    constName: "GcsePrep101Module",
    title: "GCSE Prep Foundations",
    subject: "Exam Prep",
    description: "Prepare for GCSE core papers with structured revision and exam technique.",
    minAge: 14,
    maxAge: 18,
    difficultyBand: "advanced",
    focus: "GCSE readiness",
    strands: ["revision planning", "math", "english", "science"],
    lessonTitles: [
      "GCSE Pathway Planning",
      "English Language Techniques",
      "Math Non-Calculator Skills",
      "Math Calculator Skills",
      "Science Command Words",
      "Structured Long Answers",
      "Revision Timetable Execution",
      "Past Paper Strategy",
      "Exam-Day Readiness",
      "Full Mock Cycle and Review",
    ],
  },
  {
    id: "a-level-prep-101",
    constName: "ALevelPrep101Module",
    title: "A-Level Prep Foundations",
    subject: "Exam Prep",
    description: "Strengthen deep content mastery and analytical writing for A-Level exams.",
    minAge: 15,
    maxAge: 19,
    difficultyBand: "advanced",
    focus: "A-Level readiness",
    strands: ["depth mastery", "analysis", "extended response", "synoptic links"],
    lessonTitles: [
      "A-Level Standards and Targets",
      "Knowledge Retrieval Systems",
      "High-Value Topic Prioritization",
      "Analytical Essay Construction",
      "Data and Source Evaluation",
      "Synoptic Question Strategy",
      "Revision Under Time Pressure",
      "Past Paper Mark-Scheme Analysis",
      "Coursework/Practical Integration",
      "Full Mock and Gap Closure",
    ],
  },
  {
    id: "jee-neet-prep-101",
    constName: "JeeNeetPrep101Module",
    title: "JEE / NEET Prep Foundations",
    subject: "Exam Prep",
    description: "Develop high-intensity PCM/PCB practice workflows for JEE and NEET.",
    minAge: 15,
    maxAge: 20,
    difficultyBand: "advanced",
    focus: "JEE and NEET readiness",
    strands: ["physics", "chemistry", "math/biology", "accuracy speed"],
    lessonTitles: [
      "JEE/NEET Pattern and Cutoff Basics",
      "Physics Problem Frameworks",
      "Chemistry Memory + Application",
      "Math Track: Speed and Precision",
      "Biology Track: NCERT Mastery",
      "Question Selection Strategy",
      "Negative Marking Risk Control",
      "Timed Mixed Subject Drill",
      "Mock Test Analysis Loop",
      "Final 60-Day Exam Plan",
    ],
  },
  {
    id: "gaokao-prep-101",
    constName: "GaokaoPrep101Module",
    title: "Gaokao Prep Foundations",
    subject: "Exam Prep",
    description: "Prepare for Gaokao with disciplined study cycles and exam-specific strategy.",
    minAge: 15,
    maxAge: 20,
    difficultyBand: "advanced",
    focus: "Gaokao readiness",
    strands: ["core subjects", "speed", "accuracy", "stress control"],
    lessonTitles: [
      "Gaokao Structure and Planning",
      "Chinese Language Performance",
      "Mathematics Intensive Strategy",
      "English Exam Techniques",
      "Elective Subject Mastery",
      "Speed and Accuracy Training",
      "Error Notebook Method",
      "Past Paper Sequencing",
      "Performance Week Simulation",
      "Final Sprint and Recovery Plan",
    ],
  },
  {
    id: "ib-prep-101",
    constName: "IbPrep101Module",
    title: "IB Diploma Prep Foundations",
    subject: "Exam Prep",
    description: "Build planning, IA/EE workflows, and exam strategy for the IB Diploma Programme.",
    minAge: 15,
    maxAge: 19,
    difficultyBand: "advanced",
    focus: "IB Diploma readiness",
    strands: ["HL/SL planning", "TOK", "extended essay", "internal assessment"],
    lessonTitles: [
      "IB Diploma Structure and Subject Planning",
      "Higher Level and Standard Level Strategy",
      "Theory of Knowledge Reasoning Skills",
      "Extended Essay Research Workflow",
      "Internal Assessment Quality Standards",
      "Command Terms and Markscheme Use",
      "Time Management Across Components",
      "Past Paper Analysis Loop",
      "Exam Session Simulation",
      "Final IB Sprint and Reflection",
    ],
  },
  {
    id: "toefl-prep-101",
    constName: "ToeflPrep101Module",
    title: "TOEFL iBT Prep Foundations",
    subject: "Exam Prep",
    description: "Prepare for TOEFL reading, listening, speaking, and writing with timed skill routines.",
    minAge: 14,
    maxAge: 24,
    difficultyBand: "advanced",
    focus: "TOEFL readiness",
    strands: ["reading", "listening", "speaking", "writing"],
    lessonTitles: [
      "TOEFL Format and Score Goals",
      "Academic Reading Strategy",
      "Listening for Main Ideas and Detail",
      "Integrated Speaking Frameworks",
      "Independent Speaking Clarity",
      "Integrated Writing Structure",
      "Independent Writing Organization",
      "Timing and Note-Taking Systems",
      "Full Section Drill and Review",
      "Mock TOEFL and Gap Closure Plan",
    ],
  },
  {
    id: "ielts-prep-101",
    constName: "IeltsPrep101Module",
    title: "IELTS Prep Foundations",
    subject: "Exam Prep",
    description: "Develop IELTS Academic performance across listening, reading, writing, and speaking.",
    minAge: 14,
    maxAge: 24,
    difficultyBand: "advanced",
    focus: "IELTS readiness",
    strands: ["task response", "coherence", "lexical resource", "fluency"],
    lessonTitles: [
      "IELTS Band Descriptors and Targets",
      "Listening Section Strategy",
      "Academic Reading Passage Tactics",
      "Writing Task 1 Visual Analysis",
      "Writing Task 2 Argument Strategy",
      "Speaking Part 1 and 2 Fluency",
      "Speaking Part 3 Depth and Logic",
      "Error Patterns and Band Improvement",
      "Timed Multi-Skill Drill",
      "Full IELTS Mock and Improvement Plan",
    ],
  },
  {
    id: "cuet-prep-101",
    constName: "CuetPrep101Module",
    title: "CUET Prep Foundations",
    subject: "Exam Prep",
    description: "Prepare for India's CUET with domain practice, language strategy, and test timing.",
    minAge: 15,
    maxAge: 21,
    difficultyBand: "advanced",
    focus: "CUET readiness",
    strands: ["domain subjects", "general test", "language sections", "time control"],
    lessonTitles: [
      "CUET Pattern and University Mapping",
      "Language Section Scoring Strategy",
      "Domain Subject Prioritization",
      "General Test Logical Reasoning",
      "Quantitative Aptitude Drills",
      "Current Affairs and GK Workflow",
      "Mistake Log and Recovery Plan",
      "Timed Domain Mix Practice",
      "CUET Mock Review Cycle",
      "Final Revision and Exam-Day Plan",
    ],
  },
  {
    id: "atar-prep-101",
    constName: "AtarPrep101Module",
    title: "ATAR Prep Foundations",
    subject: "Exam Prep",
    description: "Prepare for ATAR pathways with subject scaling awareness and disciplined revision systems.",
    minAge: 15,
    maxAge: 20,
    difficultyBand: "advanced",
    focus: "ATAR readiness",
    strands: ["subject scaling", "exam technique", "revision cycles", "performance stability"],
    lessonTitles: [
      "ATAR Pathways and Subject Selection",
      "Study Design Interpretation",
      "Exam Technique by Subject Type",
      "ATAR High-Value Topic Prioritization",
      "Timed Response Quality Control",
      "Marking Criteria and Self-Assessment",
      "Revision Cycle Planning",
      "Mock Exam Analytics",
      "Stress and Consistency Routines",
      "Final ATAR Readiness Blueprint",
    ],
  },
];

function toTitleWords(value) {
  return String(value ?? "")
    .split(/[^a-zA-Z0-9]+/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function expandedLessonTitles(exam) {
  const titles = Array.isArray(exam?.lessonTitles)
    ? exam.lessonTitles.map((title) => String(title ?? "").trim()).filter(Boolean)
    : [];
  if (titles.length === 0) return titles;
  if (titles.length >= 15) return titles;

  const finalTitle = titles[titles.length - 1];
  const bodyTitles = titles.slice(0, -1);
  const [strandA, strandB] = Array.isArray(exam?.strands) ? exam.strands : ["core strategy", "timing"];
  const focusLabel = toTitleWords(exam?.focus || "exam readiness");

  const additions = [
    `Targeted ${toTitleWords(strandA)} Remediation`,
    `Timed ${toTitleWords(strandB)} Sprint`,
    "Mixed-Section Decision Drill",
    "Adaptive Retry and Transfer Check",
    `${focusLabel} Stability Checkpoint`,
  ];

  const merged = [...bodyTitles];
  for (const title of additions) {
    if (!merged.includes(title)) merged.push(title);
  }
  while (merged.length < 14) {
    merged.push(`${focusLabel} Guided Practice ${merged.length - bodyTitles.length + 1}`);
  }
  return [...merged.slice(0, 14), finalTitle];
}

const examActivityProfiles = {
  "sat-prep-101": {
    planLabel: "Blueprint",
    executeLabel: "Evidence Solve",
    reflectLabel: "Error Review",
    planTactic: "Preview command words and time checkpoints before each SAT section",
    executeTactic: "Annotate evidence lines and algebra constraints before locking an answer",
    reflectTactic: "Tag misses by reading, writing, or math pattern in the error log",
    signalA: "Evidence question missed because support line was not located",
    actionA: "Underline claim + best support line before evaluating answer choices",
    signalB: "Grammar boundary mistake repeats in writing sets",
    actionB: "Run a punctuation boundary checklist before finalizing the sentence",
    signalC: "Algebra item solved correctly untimed but missed in sprint mode",
    actionC: "Practice a 2-step SAT math setup routine with strict time caps",
    mockConceptLabel: "Reading/Writing Concept Gap",
    mockStrategyLabel: "Math Strategy Gap",
    mockTimingLabel: "Pacing Gap",
    mockConceptItem: "Missed central-idea evidence mapping in two passages",
    mockStrategyItem: "Chose fastest-looking equation instead of validated model",
    mockTimingItem: "Final math cluster unanswered due late section slowdown",
    mockTransferItem: "Correct in review but repeated same pacing error next drill",
  },
  "act-prep-101": {
    planLabel: "Section Plan",
    executeLabel: "Rapid Solve",
    reflectLabel: "Precision Review",
    planTactic: "Set ACT per-section checkpoints for English, Math, Reading, and Science",
    executeTactic: "Use elimination-first workflow on dense passages and data tables",
    reflectTactic: "Classify misses by concept, interpretation, or timing pressure",
    signalA: "English rhetoric items missed despite knowing grammar rules",
    actionA: "Mark author-purpose signal words before selecting revision choices",
    signalB: "Science reasoning misses when comparing two experiments",
    actionB: "Map variable changes and outcomes before selecting claims",
    signalC: "Reading accuracy drops in final passage due rush",
    actionC: "Adopt fixed passage split and verification checkpoint at minute marks",
    mockConceptLabel: "Content Gap",
    mockStrategyLabel: "Passage/Data Strategy Gap",
    mockTimingLabel: "Section Timing Gap",
    mockConceptItem: "Repeated mistakes on science data interpretation",
    mockStrategyItem: "Skipped comparison cues in dual-passage reading set",
    mockTimingItem: "Ran out of time in final English cluster",
    mockTransferItem: "Error fixed in review but not in next timed set",
  },
  "ap-prep-101": {
    planLabel: "Prompt Plan",
    executeLabel: "Evidence Build",
    reflectLabel: "Rubric Calibration",
    planTactic: "Break AP prompt into claim, evidence, and reasoning requirements",
    executeTactic: "Draft thesis and evidence map before writing final response",
    reflectTactic: "Score response using rubric rows and identify one-point gains",
    signalA: "FRQ response lacks direct evidence integration",
    actionA: "Add explicit source reference + commentary for each body point",
    signalB: "MCQ misses cluster around nuanced wording traps",
    actionB: "Annotate qualifier words and eliminate absolute distractors",
    signalC: "Strong ideas but response not aligned to rubric language",
    actionC: "Rewrite one paragraph using exact rubric success criteria",
    mockConceptLabel: "Content Knowledge Gap",
    mockStrategyLabel: "Rubric/Response Strategy Gap",
    mockTimingLabel: "FRQ Timing Gap",
    mockConceptItem: "Missed key concept terms expected in rubric row",
    mockStrategyItem: "Evidence listed without explanation linkage",
    mockTimingItem: "Last FRQ response left incomplete under time pressure",
    mockTransferItem: "Rubric feedback understood but not reflected in next draft",
  },
  "gcse-prep-101": {
    planLabel: "Revision Plan",
    executeLabel: "Paper Execution",
    reflectLabel: "Markscheme Review",
    planTactic: "Map revision blocks to GCSE paper weight and weak topics",
    executeTactic: "Apply command-word decoding before each constructed response",
    reflectTactic: "Compare response against markscheme and recover missed marks",
    signalA: "Long-answer command words misunderstood",
    actionA: "Translate command words into a response checklist before writing",
    signalB: "Calculator section marks lost to setup errors",
    actionB: "Write equation + units before calculator entry",
    signalC: "Past paper review completed but same errors persist",
    actionC: "Create targeted reattempt set from missed markscheme points",
    mockConceptLabel: "Topic Knowledge Gap",
    mockStrategyLabel: "Markscheme Strategy Gap",
    mockTimingLabel: "Paper Timing Gap",
    mockConceptItem: "Forgot method step for high-frequency maths topic",
    mockStrategyItem: "Answer format missed required comparison statement",
    mockTimingItem: "Final long-answer left underdeveloped",
    mockTransferItem: "Markscheme note taken but not used in reattempt",
  },
  "a-level-prep-101": {
    planLabel: "Synoptic Plan",
    executeLabel: "Analytical Execution",
    reflectLabel: "Depth Review",
    planTactic: "Prioritize A-Level high-weight synoptic topics before timed papers",
    executeTactic: "Structure argument with claim, evidence, analysis, and evaluation",
    reflectTactic: "Audit depth, precision, and link quality after each practice response",
    signalA: "Essay has knowledge but weak analytical linkage",
    actionA: "Insert explicit because-therefore reasoning after each evidence point",
    signalB: "Data/source question misses evaluation criteria",
    actionB: "Apply reliability, validity, and bias checklist before conclusion",
    signalC: "Revision broad but not deep in core themes",
    actionC: "Run focused depth sprint on one high-yield topic per day",
    mockConceptLabel: "Depth Knowledge Gap",
    mockStrategyLabel: "Analysis Strategy Gap",
    mockTimingLabel: "Extended Response Timing Gap",
    mockConceptItem: "Synoptic link omitted between two core topics",
    mockStrategyItem: "Evaluation statement lacked explicit judgement criteria",
    mockTimingItem: "Final essay conclusion truncated due pacing",
    mockTransferItem: "Feedback noted but same structural gap reappeared",
  },
  "jee-neet-prep-101": {
    planLabel: "Attempt Order Plan",
    executeLabel: "Accuracy Pass",
    reflectLabel: "Negative-Mark Review",
    planTactic: "Choose question attempt order by confidence and mark value",
    executeTactic: "Apply formula-memory plus unit-check verification before submit",
    reflectTactic: "Track negative-mark causes and convert into avoidance rules",
    signalA: "High-confidence item lost due sign/unit mistake",
    actionA: "Add final sign and unit verification before locking response",
    signalB: "Too much time spent on one low-probability question",
    actionB: "Use cut-loss timer and move to next high-yield item",
    signalC: "Concept known but recall fails under pressure",
    actionC: "Run spaced recall drills with mixed timed question blocks",
    mockConceptLabel: "Concept Retention Gap",
    mockStrategyLabel: "Attempt Strategy Gap",
    mockTimingLabel: "Speed/Accuracy Gap",
    mockConceptItem: "NCERT fact recall failed in biology section",
    mockStrategyItem: "Attempted low-return question before easy marks",
    mockTimingItem: "Late-section rush increased negative marks",
    mockTransferItem: "Error tagged but same attempt-order issue persisted",
  },
  "gaokao-prep-101": {
    planLabel: "Discipline Plan",
    executeLabel: "Section Control",
    reflectLabel: "Notebook Review",
    planTactic: "Set daily Gaokao subject cycles with strict recovery windows",
    executeTactic: "Use section checkpoints to protect accuracy under pace pressure",
    reflectTactic: "Update error notebook with cause, fix, and retest date",
    signalA: "Chinese reading response misses key inference cue",
    actionA: "Highlight claim transition words before drafting response",
    signalB: "Math section stalls on mid-paper hard cluster",
    actionB: "Apply skip-return protocol and secure medium-difficulty marks first",
    signalC: "Error notebook exists but review loop is inconsistent",
    actionC: "Schedule fixed weekly retest of top repeated errors",
    mockConceptLabel: "Core Subject Gap",
    mockStrategyLabel: "Execution Strategy Gap",
    mockTimingLabel: "Mock Pace Gap",
    mockConceptItem: "Repeated miss on high-frequency mathematics pattern",
    mockStrategyItem: "No skip-return trigger on difficult cluster",
    mockTimingItem: "Section end rushed with preventable accuracy drop",
    mockTransferItem: "Notebook correction not validated in next simulation",
  },
  "ib-prep-101": {
    planLabel: "Programme Plan",
    executeLabel: "Criterion Execution",
    reflectLabel: "Criterion Review",
    planTactic: "Balance HL/SL demands with IA, TOK, and EE milestones",
    executeTactic: "Answer using command terms aligned to IB markscheme criteria",
    reflectTactic: "Review each response against criterion language and evidence quality",
    signalA: "Response ignores command term nuance",
    actionA: "Translate command term into explicit response requirement before writing",
    signalB: "IA draft has evidence but weak methodological justification",
    actionB: "Add criterion-linked method rationale with reliability discussion",
    signalC: "TOK reasoning lacks clear claim-counterclaim structure",
    actionC: "Use claim/counterclaim/evaluation scaffold for each TOK paragraph",
    mockConceptLabel: "Criterion Knowledge Gap",
    mockStrategyLabel: "Command-Term Strategy Gap",
    mockTimingLabel: "Assessment Timing Gap",
    mockConceptItem: "Criterion descriptor missed in subject response",
    mockStrategyItem: "Command term treated as summary instead of evaluation",
    mockTimingItem: "Final section left unreviewed in timed paper",
    mockTransferItem: "Criterion feedback not integrated in next attempt",
  },
  "toefl-prep-101": {
    planLabel: "Task Plan",
    executeLabel: "Language Execution",
    reflectLabel: "Score Review",
    planTactic: "Set target score goals per TOEFL section before each session",
    executeTactic: "Use note-taking template for lecture/listening integration tasks",
    reflectTactic: "Audit speaking/writing responses against scoring rubric descriptors",
    signalA: "Integrated writing misses source-listening linkage",
    actionA: "Map reading claim to listening contrast before drafting response",
    signalB: "Speaking response is fluent but underdeveloped",
    actionB: "Use 2-point support structure with example before closing",
    signalC: "Listening detail questions missed after long passage",
    actionC: "Capture main idea + transition cues in compact notes",
    mockConceptLabel: "Language Form Gap",
    mockStrategyLabel: "Task Strategy Gap",
    mockTimingLabel: "Section Timing Gap",
    mockConceptItem: "Academic vocabulary usage too limited in writing",
    mockStrategyItem: "Integrated task response omitted listening evidence",
    mockTimingItem: "Speaking prep time overrun reduced answer quality",
    mockTransferItem: "Correction understood but missing in next timed response",
  },
  "ielts-prep-101": {
    planLabel: "Band Plan",
    executeLabel: "Task Execution",
    reflectLabel: "Descriptor Review",
    planTactic: "Set IELTS band target by criterion before each practice block",
    executeTactic: "Structure writing around task response, coherence, and lexical control",
    reflectTactic: "Score output using band descriptors and log weakest criterion",
    signalA: "Task 2 response drifts from prompt position",
    actionA: "Write one-sentence thesis and topic map before drafting",
    signalB: "Speaking answer fluent but lacks depth in Part 3",
    actionB: "Add reason-example-extension pattern for every Part 3 answer",
    signalC: "Reading accuracy drops on True/False/Not Given",
    actionC: "Track evidence sentence before assigning T/F/NG judgement",
    mockConceptLabel: "Criterion Language Gap",
    mockStrategyLabel: "Task Strategy Gap",
    mockTimingLabel: "Band Stability Timing Gap",
    mockConceptItem: "Lexical repetition lowers band potential",
    mockStrategyItem: "Task achievement weakened by missing data comparison",
    mockTimingItem: "Writing Task 2 consumed too much section time",
    mockTransferItem: "Band feedback logged but not reflected in next draft",
  },
  "cuet-prep-101": {
    planLabel: "Domain Plan",
    executeLabel: "Section Execution",
    reflectLabel: "Attempt Review",
    planTactic: "Prioritize CUET domain sections by university target weight",
    executeTactic: "Use language-domain-general section transitions with time guards",
    reflectTactic: "Track misses by domain concept and reasoning pattern",
    signalA: "Domain section accuracy good but language section inconsistent",
    actionA: "Add daily language micro-drill before domain practice",
    signalB: "General test reasoning errors repeat under time pressure",
    actionB: "Apply fixed logic question elimination sequence",
    signalC: "Current affairs recall weak in mixed sets",
    actionC: "Run spaced current-affairs recall with weekly mixed quizzes",
    mockConceptLabel: "Domain Content Gap",
    mockStrategyLabel: "Section Strategy Gap",
    mockTimingLabel: "Transition Timing Gap",
    mockConceptItem: "High-frequency domain topic not retained",
    mockStrategyItem: "No consistent approach for logical reasoning traps",
    mockTimingItem: "Late transition into final section caused rushed guesses",
    mockTransferItem: "Fix identified but not validated in next CUET mock",
  },
  "atar-prep-101": {
    planLabel: "Scaling Plan",
    executeLabel: "Assessment Execution",
    reflectLabel: "Performance Review",
    planTactic: "Align weekly revision to ATAR scaling and subject priorities",
    executeTactic: "Use exam-condition response protocol with quality checkpoints",
    reflectTactic: "Review mark criteria and track consistent score drifts",
    signalA: "Strong content but criteria marks missed in extended response",
    actionA: "Annotate criteria language and map each paragraph to requirement",
    signalB: "Revision effort high but impact uneven across subjects",
    actionB: "Rebalance study plan to highest scaling and weakest outcomes",
    signalC: "Mock scores fluctuate despite similar preparation time",
    actionC: "Add pre-mock readiness checklist and post-mock variance log",
    mockConceptLabel: "Subject Content Gap",
    mockStrategyLabel: "Criteria Strategy Gap",
    mockTimingLabel: "Performance Stability Gap",
    mockConceptItem: "Topic recall failed in high-weight subject paper",
    mockStrategyItem: "Criteria term ignored in response structure",
    mockTimingItem: "Last section decisions rushed under pressure",
    mockTransferItem: "Review complete but next mock showed same instability",
  },
};

function activityProfileFor(exam) {
  const fallbackStrand = strandAt(exam, 0, "core reasoning");
  const profile = examActivityProfiles[exam.id];
  if (profile) return profile;
  return {
    planLabel: "Plan",
    executeLabel: "Execute",
    reflectLabel: "Reflect",
    planTactic: `Set ${sanitizeSentence(exam.focus)} checkpoints before practice.`,
    executeTactic: `Apply ${fallbackStrand} checks during each attempt.`,
    reflectTactic: "Tag errors and convert them into a remediation sprint.",
    signalA: `Repeated misses on ${fallbackStrand} items.`,
    actionA: `Run a short correction routine for ${fallbackStrand}.`,
    signalB: "Pacing drift appears in timed sets.",
    actionB: "Use checkpoint pacing and cut-loss rules.",
    signalC: "Fixed in review but repeated in next drill.",
    actionC: "Retest same objective with timing constraints.",
    mockConceptLabel: "Concept Gap",
    mockStrategyLabel: "Strategy Gap",
    mockTimingLabel: "Timing Gap",
    mockConceptItem: `Missed reusable ${fallbackStrand} concept.`,
    mockStrategyItem: "Used weak elimination strategy.",
    mockTimingItem: "Timed out in final cluster.",
    mockTransferItem: "Correction not transferred to next attempt.",
  };
}

function slugToFileName(id) {
  return `${id}.ts`;
}

function trackKeyFromModuleId(moduleId) {
  return String(moduleId).replace(/-prep-.+$/i, "");
}

function lessonPrefixFromModuleId(moduleId) {
  const trackKey = trackKeyFromModuleId(moduleId);
  switch (trackKey) {
    case "sat":
      return "SAT";
    case "act":
      return "ACT";
    case "ap":
      return "AP";
    case "toefl":
      return "TOEFL";
    case "ielts":
      return "IELTS";
    case "gcse":
      return "GCSE";
    case "a-level":
      return "A-Level";
    case "ib":
      return "IB";
    case "jee-neet":
      return "JEE/NEET";
    case "cuet":
      return "CUET";
    case "gaokao":
      return "Gaokao";
    case "atar":
      return "ATAR";
    default:
      return trackKey.toUpperCase();
  }
}

function sanitizeSentence(value) {
  return String(value ?? "")
    .replace(/"/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function strandAt(exam, index, fallback) {
  const value = exam.strands?.[index];
  if (typeof value === "string" && value.trim().length > 0) {
    return sanitizeSentence(value);
  }
  return fallback;
}

function skillSlug(value) {
  return sanitizeSentence(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function jsonBlock(value, indent = 6) {
  const spacing = " ".repeat(indent);
  return JSON.stringify(value, null, 2)
    .split("\n")
    .map((line, index) => (index === 0 ? line : `${spacing}${line}`))
    .join("\n");
}

function buildOptions(correctText, distractors, correctIndex) {
  const ids = ["a", "b", "c", "d"];
  const safeDistractors = Array.from(new Set(distractors)).slice(0, 3);
  while (safeDistractors.length < 3) {
    safeDistractors.push("Choose the strongest strategy grounded in the lesson workflow.");
  }
  const options = [];
  let distractorIndex = 0;
  for (let index = 0; index < ids.length; index += 1) {
    if (index === correctIndex) {
      options.push({ id: ids[index], text: correctText });
      continue;
    }
    options.push({ id: ids[index], text: safeDistractors[distractorIndex] });
    distractorIndex += 1;
  }
  return {
    options,
    correctOptionId: ids[correctIndex],
  };
}

function hashSeed(value) {
  let hash = 0;
  const text = String(value ?? "");
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function topicContext(topic) {
  const lower = String(topic).toLowerCase();
  if (/(reading|writing|language|english|essay|speaking|listening|tok|argument)/.test(lower)) {
    return {
      category: "verbal",
      unit: "passage set",
      artifact: "annotation map",
      focus: "evidence and language precision",
    };
  }
  if (/(math|algebra|quant|physics|chemistry|biology|science|calculator|problem)/.test(lower)) {
    return {
      category: "quantitative",
      unit: "problem set",
      artifact: "setup sheet",
      focus: "method and accuracy precision",
    };
  }
  if (/(timing|pacing|time|speed|pressure|stress|sprint)/.test(lower)) {
    return {
      category: "timing",
      unit: "timed block",
      artifact: "checkpoint log",
      focus: "pace and decision stability",
    };
  }
  if (/(error|review|analysis|pitfall|markscheme|rubric|notebook)/.test(lower)) {
    return {
      category: "diagnostic",
      unit: "review cycle",
      artifact: "error taxonomy",
      focus: "root-cause and correction quality",
    };
  }
  if (/(section drill|practice set|past paper|mock|simulation)/.test(lower)) {
    return {
      category: "simulation",
      unit: "section simulation",
      artifact: "attempt-order sheet",
      focus: "section execution consistency",
    };
  }
  return {
    category: "general",
    unit: "practice set",
    artifact: "strategy log",
    focus: "decision quality under constraints",
  };
}

function withArticle(nounPhrase) {
  const phrase = sanitizeSentence(nounPhrase);
  return /^[aeiou]/i.test(phrase) ? `an ${phrase}` : `a ${phrase}`;
}

function tokensFromText(text) {
  return String(text ?? "")
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((token) => token.length >= 3);
}

function strandScoreForTopic(strand, topicLower, contextCategory) {
  const strandLower = String(strand ?? "").toLowerCase();
  const strandTokens = tokensFromText(strandLower);
  let score = 0;

  for (const token of strandTokens) {
    if (topicLower.includes(token)) {
      score += 5;
    }
  }

  if (contextCategory === "verbal" && /(read|writ|lang|english|speak|listen|essay|evidence|rhetoric)/.test(strandLower)) {
    score += 4;
  }
  if (contextCategory === "quantitative" && /(math|algebra|quant|physics|chemistry|biology|science|data|calc)/.test(strandLower)) {
    score += 4;
  }
  if (contextCategory === "timing" && /(time|timing|pace|speed|pressure|stability)/.test(strandLower)) {
    score += 4;
  }
  if (contextCategory === "diagnostic" && /(error|analysis|review|rubric|markscheme|pitfall|recovery)/.test(strandLower)) {
    score += 4;
  }
  if (contextCategory === "simulation" && /(mock|section|drill|strategy|attempt|control)/.test(strandLower)) {
    score += 3;
  }

  return score;
}

function orderedStrandsForTopic(exam, topic) {
  const base = [
    strandAt(exam, 0, "core reasoning"),
    strandAt(exam, 1, "analysis"),
    strandAt(exam, 2, "application"),
    strandAt(exam, 3, "timing"),
  ];
  const unique = Array.from(new Set(base));
  const context = topicContext(topic);
  const topicLower = String(topic).toLowerCase();

  const scored = unique.map((strand, index) => ({
    strand,
    index,
    score: strandScoreForTopic(strand, topicLower, context.category),
  }));

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });

  const ordered = scored.map((entry) => entry.strand);
  while (ordered.length < 4) {
    ordered.push(`core-skill-${ordered.length + 1}`);
  }
  return ordered.slice(0, 4);
}

const examQuestionProfiles = {
  sat: {
    sectionA: "Reading and Writing module",
    sectionB: "Math module",
    artifact: "evidence-to-equation journal",
    mistakeA: "evidence-line mismatch",
    mistakeB: "constraint parsing miss",
    actionA: "Underline claim + cited line before selecting an answer choice.",
    actionB: "Rewrite variable constraints, then validate with one substitution check.",
  },
  act: {
    sectionA: "English section",
    sectionB: "Science section",
    artifact: "passage-data decision log",
    mistakeA: "rhetorical-purpose confusion",
    mistakeB: "data-trend misread",
    actionA: "Tag sentence purpose before evaluating revision options.",
    actionB: "Note variable shift + trend direction before drawing conclusions.",
  },
  ap: {
    sectionA: "MCQ set",
    sectionB: "FRQ set",
    artifact: "rubric evidence checklist",
    mistakeA: "prompt misread",
    mistakeB: "evidence-without-analysis",
    actionA: "Highlight command terms and restate prompt requirements in one line.",
    actionB: "Attach one explicit because-therefore analysis to every evidence point.",
  },
  gcse: {
    sectionA: "Paper 1",
    sectionB: "Paper 2",
    artifact: "markscheme response log",
    mistakeA: "command-word drift",
    mistakeB: "method-step omission",
    actionA: "Convert command word into a response checklist before writing.",
    actionB: "Write method and units before entering any calculated result.",
  },
  "a-level": {
    sectionA: "extended-response section",
    sectionB: "synoptic section",
    artifact: "analysis depth tracker",
    mistakeA: "assertion without analytical link",
    mistakeB: "missing synoptic bridge",
    actionA: "Add explicit because-therefore reasoning after each claim.",
    actionB: "Link at least two themes with one evaluative judgement statement.",
  },
  ib: {
    sectionA: "criterion-marked response",
    sectionB: "command-term question",
    artifact: "criterion alignment sheet",
    mistakeA: "criterion language omission",
    mistakeB: "command-term mismatch",
    actionA: "Map each paragraph to the targeted criterion descriptor.",
    actionB: "Translate command terms into required response moves before drafting.",
  },
  "jee-neet": {
    sectionA: "high-yield PCM/PCB block",
    sectionB: "mixed timed block",
    artifact: "negative-marking control card",
    mistakeA: "attempt-order error",
    mistakeB: "sign/unit slip",
    actionA: "Use skip-return triggers to secure easier marks first.",
    actionB: "Run sign-unit verification before final option lock.",
  },
  cuet: {
    sectionA: "domain section",
    sectionB: "general test section",
    artifact: "section-transition checklist",
    mistakeA: "domain-priority drift",
    mistakeB: "logic trap selection",
    actionA: "Prioritize domain questions by target university weighting.",
    actionB: "Apply elimination order: assumption, evidence, conclusion.",
  },
  gaokao: {
    sectionA: "core language section",
    sectionB: "mathematics section",
    artifact: "error notebook retest sheet",
    mistakeA: "inference cue miss",
    mistakeB: "mid-section pace collapse",
    actionA: "Mark transition cues and author stance before final response choice.",
    actionB: "Trigger skip-return protocol on high-friction clusters.",
  },
  atar: {
    sectionA: "criteria-heavy response section",
    sectionB: "timed mixed section",
    artifact: "criteria variance log",
    mistakeA: "criteria-term underuse",
    mistakeB: "late-section instability",
    actionA: "Integrate criteria terms directly into topic sentences.",
    actionB: "Use fixed section checkpoints and a final review window.",
  },
  toefl: {
    sectionA: "integrated task section",
    sectionB: "independent task section",
    artifact: "note-to-response mapping sheet",
    mistakeA: "source-listening disconnect",
    mistakeB: "support-depth gap",
    actionA: "Link each claim to one reading cue and one listening cue.",
    actionB: "Use reason-example-extension structure for each main point.",
  },
  ielts: {
    sectionA: "Writing Task 1/2 block",
    sectionB: "Speaking Part 2/3 block",
    artifact: "band-descriptor action grid",
    mistakeA: "task-response drift",
    mistakeB: "criterion imbalance",
    actionA: "Write thesis and paragraph map before drafting.",
    actionB: "Balance fluency, lexical range, and coherence checks per response.",
  },
};

function questionProfileFor(exam, strandPrimary, strandSecondary) {
  const fallbackA = sanitizeSentence(strandPrimary || "core reasoning");
  const fallbackB = sanitizeSentence(strandSecondary || "timing");
  const fallback = {
    sectionA: "primary section",
    sectionB: "secondary section",
    artifact: "section improvement log",
    mistakeA: `${fallbackA} execution gap`,
    mistakeB: `${fallbackB} pacing gap`,
    actionA: `Apply a repeatable ${fallbackA} decision routine before locking answers.`,
    actionB: `Add timed checkpoints to stabilize ${fallbackB} decisions.`,
  };
  return examQuestionProfiles[trackKeyFromModuleId(exam.id)] ?? fallback;
}

function supplementalQuestionSpecs(exam, params) {
  const { examLabel, topic, strandPrimary, strandSecondary, context } = params;
  const profile = questionProfileFor(exam, strandPrimary, strandSecondary);
  return [
    {
      skill: `${strandPrimary}-section-application`,
      text: `In ${examLabel} ${profile.sectionA}, ${profile.mistakeA} appears during ${topic}. What is the strongest immediate correction?`,
      correct: profile.actionA,
      distractors: [
        `Ignore ${profile.sectionA} diagnostics and continue for volume.`,
        "Re-read notes without running a corrected attempt.",
        "Delay correction until after several unrelated drills.",
      ],
      hint: `Choose the option that directly fixes ${profile.mistakeA}.`,
      explanation: `Immediate correction inside ${profile.sectionA} improves transfer to the next timed ${context.unit}.`,
    },
    {
      skill: `${strandSecondary}-section-application`,
      text: `During ${examLabel} ${profile.sectionB}, ${profile.mistakeB} repeats in ${topic}. Which plan should be applied before the next retest?`,
      correct: `${profile.actionB} Track outcomes in ${withArticle(profile.artifact)} and retest the same pattern.`,
      distractors: [
        "Switch to new content before validating the fix.",
        "Increase speed without updating process controls.",
        "Retake the section with no checkpoint changes.",
      ],
      hint: "Best plans combine targeted correction with measurable tracking.",
      explanation: `A logged correction cycle in ${profile.artifact} makes the pacing fix visible and repeatable.`,
    },
  ];
}

function baseQuestionSpec(slot, variant, params) {
  const { examLabel, topic, strandPrimary, strandSecondary, strandThird, strandFourth, focus, context } = params;
  switch (slot) {
    case 0:
      switch (variant) {
        case 1:
          return {
            skill: `${strandPrimary}-workflow`,
            text: `${examLabel} coaching notes show repeated ${strandPrimary} misses in ${topic}. What should the learner do before the next ${context.unit}?`,
            correct: `Rebuild the solve workflow on two representative ${context.unit} items, then retest with the same constraints.`,
            distractors: [
              "Jump to harder content before confirming the root cause.",
              "Track only final score and ignore process notes.",
              `Switch strands even though ${strandPrimary} is still the top weakness.`,
            ],
            hint: `Choose the option that improves process quality, not just volume.`,
            explanation: `When ${strandPrimary} is unstable, workflow repair plus immediate retest creates the fastest reliable gains.`,
          };
        case 2:
          return {
            skill: `${strandPrimary}-workflow`,
            text: `During ${topic}, early guesses are causing ${strandPrimary} losses. Which intervention should happen first?`,
            correct: `Use a short verification pass and log decision triggers in ${withArticle(context.artifact)} before restarting the drill.`,
            distractors: [
              "Keep the same pace and hope accuracy normalizes later.",
              "Memorize answer patterns instead of checking reasoning.",
              "Delay all correction until the weekend review session.",
            ],
            hint: "Pick the option that creates immediate corrective feedback.",
            explanation: `Quick structured verification catches repeatable process errors before they spread across the next set.`,
          };
        default:
          return {
            skill: `${strandPrimary}-workflow`,
            text: `In ${topic}, a learner keeps missing ${strandPrimary} items during ${examLabel} practice. Which adjustment should happen before the next timed ${context.unit}?`,
            correct: `Run a short ${strandPrimary} checkpoint routine and annotate why each miss occurred in ${withArticle(context.artifact)} before retesting.`,
            distractors: [
              "Skip review and jump directly to harder questions.",
              "Track only total score with no error categories.",
              `Switch topics even if ${strandPrimary} is still the dominant weakness.`,
            ],
            hint: `Choose the action that creates a repeatable feedback loop for ${strandPrimary}.`,
            explanation: `Fast targeted feedback plus immediate correction is the most reliable way to improve ${strandPrimary}.`,
          };
      }
    case 1:
      switch (variant) {
        case 1:
          return {
            skill: `${strandSecondary}-diagnosis`,
            text: `A ${examLabel} ${topic} session ends with unstable timing. What should be diagnosed first?`,
            correct: `Locate the exact ${strandSecondary} decision point where time spikes, then set micro-checkpoints for that phase.`,
            distractors: [
              "Retake the session immediately without diagnostics.",
              "Increase total question count and keep the same attempt order.",
              "Use one pacing rule for all sections regardless of load.",
            ],
            hint: "Find the answer that isolates a measurable bottleneck.",
            explanation: `Pacing stabilizes when the highest-cost decision point is measured and corrected directly.`,
          };
        case 2:
          return {
            skill: `${strandSecondary}-diagnosis`,
            text: `In ${topic}, pace drops late even when early accuracy is strong. Which move best addresses this ${examLabel} pattern?`,
            correct: `Introduce phase checkpoints and a cut-loss rule around high-friction ${strandSecondary} items.`,
            distractors: [
              "Spend more time on every item to avoid mistakes.",
              "Memorize answer keys without tracking timing behavior.",
              "Use random breaks with no fixed transition points.",
            ],
            hint: "Look for a solution tied to timing behavior, not memory.",
            explanation: `Late-section drift usually comes from unmanaged friction points, not lack of content knowledge.`,
          };
        default:
          return {
            skill: `${strandSecondary}-diagnosis`,
            text: `A ${examLabel} drill on ${topic} ends with unstable pacing. What should be diagnosed first?`,
            correct: `Pinpoint where ${strandSecondary} decisions consume extra time, then redesign attempt order with checkpoints.`,
            distractors: [
              "Retake the same drill immediately without analysis.",
              "Memorize answer keys without tracking timing behavior.",
              "Increase question volume while keeping the same pacing errors.",
            ],
            hint: "Look for the answer that isolates a measurable timing bottleneck.",
            explanation: `Pacing issues usually come from specific ${strandSecondary} decision points, not from total question count alone.`,
          };
      }
    case 2:
      switch (variant) {
        case 1:
          return {
            skill: `${strandThird}-transfer`,
            text: `Which one-week sprint most improves ${strandThird} transfer for ${topic} in ${examLabel}?`,
            correct: `Run two targeted correction blocks, one mixed timed ${context.unit}, and one retest focused on the same ${strandThird} objective.`,
            distractors: [
              "Use only untimed review until confidence feels high.",
              "Rotate random topics daily with no retest queue.",
              "Delay all error correction until the final day.",
            ],
            hint: "Best plans combine remediation and timed validation.",
            explanation: `Transfer improves when learners re-encounter corrected skills under realistic constraints.`,
          };
        case 2:
          return {
            skill: `${strandThird}-transfer`,
            text: `${examLabel} practice shows correction is happening but not sticking in ${topic}. What plan fixes this fastest?`,
            correct: `Pair each corrected ${strandThird} error with a near-transfer item in the next timed block and track it in ${withArticle(context.artifact)}.`,
            distractors: [
              "Keep reviewing notes and avoid new timed attempts.",
              "Increase difficulty only, without targeted rematches.",
              "Rewatch lesson content without logging applied changes.",
            ],
            hint: "The strongest option forces immediate transfer testing.",
            explanation: `Correction becomes durable when each fix is tested on a similar item during the next constrained attempt.`,
          };
        default:
          return {
            skill: `${strandThird}-transfer`,
            text: `Which one-week plan best improves ${strandThird} transfer for ${focus} in ${examLabel}?`,
            correct: `Alternate mixed-difficulty sets with targeted remediation, then re-test the same ${strandThird} objective under timing constraints.`,
            distractors: [
              "Use only untimed warmups and avoid mixed sets.",
              "Choose random topics daily without a remediation queue.",
              "Delay all review tasks until the final week.",
            ],
            hint: "The strongest plan combines correction and timed transfer.",
            explanation: `Transfer improves when correction cycles are followed by fresh timed retrieval of the same ${strandThird} target.`,
          };
      }
    case 3:
      switch (variant) {
        case 1:
          return {
            skill: `${strandFourth}-priority`,
            text: `After a ${topic} drill, which remediation should be prioritized first for score impact in ${examLabel}?`,
            correct: `Fix repeated ${strandFourth} breakdowns first because they scale across many items in the same run.`,
            distractors: [
              "Start with already-mastered tasks to build comfort.",
              "Rewrite notes without testing changes in a timed set.",
              "Ignore pacing because content accuracy matters more.",
            ],
            hint: "Choose the fix with the widest downstream effect.",
            explanation: `High-frequency process breakdowns usually produce the largest immediate score delta when corrected first.`,
          };
        case 2:
          return {
            skill: `${strandFourth}-priority`,
            text: `In ${examLabel} ${topic}, there are both content misses and pacing slips. What should the learner fix first?`,
            correct: `Prioritize the repeated ${strandFourth} process issue, then apply the same correction across the next timed block.`,
            distractors: [
              "Tackle the rarest concept gap first for variety.",
              "Review only confidence items and skip timing analysis.",
              "Change resources without identifying what failed.",
            ],
            hint: "Look for the answer that addresses recurrence.",
            explanation: `Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction.`,
          };
        default:
          return {
            skill: `${strandFourth}-priority`,
            text: `During post-drill review for ${topic}, which fix should be prioritized first for score impact in ${examLabel}?`,
            correct: `Address repeated ${strandFourth} and pacing errors first because they affect many questions in one run.`,
            distractors: [
              "Polish already-mastered question types first.",
              "Ignore pacing and focus only on confidence items.",
              "Rewrite notes without validating changes in timed practice.",
            ],
            hint: "Prioritize changes that influence the largest question set.",
            explanation: `Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps.`,
          };
      }
    default:
      return {
        skill: "general-workflow",
        text: `How should a learner improve ${topic} performance?`,
        correct: "Use targeted correction loops and timed rechecks.",
        distractors: [
          "Keep volume high without diagnostics.",
          "Use random review with no tracking.",
          "Delay all corrections until test week.",
        ],
        hint: "Choose the systematic approach.",
        explanation: "Process-driven loops outperform random volume.",
      };
  }
}

function qBlock(exam, lessonId, topicText, lessonIndex, isFullMock) {
  const focus = sanitizeSentence(exam.focus);
  const examLabel = lessonPrefixFromModuleId(exam.id);
  const topic = sanitizeSentence(topicText);
  const [strandPrimary, strandSecondary, strandThird, strandFourth] = orderedStrandsForTopic(exam, topic);
  const context = topicContext(topic);
  const seed = hashSeed(`${exam.id}|${lessonId}|${topic}`);

  const baseQuestions = [0, 1, 2, 3].map((slot) =>
    baseQuestionSpec(slot, (seed + lessonIndex + slot) % 3, {
      examLabel,
      topic,
      strandPrimary,
      strandSecondary,
      strandThird,
      strandFourth,
      focus,
      context,
    }),
  );
  const supplementalQuestions = supplementalQuestionSpecs(exam, {
    examLabel,
    topic,
    strandPrimary,
    strandSecondary,
    strandThird,
    strandFourth,
    focus,
    context,
  });

  const fullMockQuestions = [
    {
      skill: "mock-triage",
      text: `In a full ${examLabel} mock, misses appear across multiple strands. What triage order is strongest?`,
      correct: "Group misses by concept, strategy, and timing first, then sequence fixes by expected score gain.",
      distractors: [
        "Review only the most recent mistakes.",
        "Retake the full mock without a remediation plan.",
        "Choose revision topics only by preference.",
      ],
      hint: "The right choice creates a stable remediation queue.",
      explanation: "Process-level triage finds leverage points that improve many future items.",
    },
    {
      skill: "section-pacing",
      text: `A learner finishes one section early but times out on another in ${examLabel}. What is the best pacing fix?`,
      correct: "Set section-specific checkpoints and rehearse transitions so pace remains stable end-to-end.",
      distractors: [
        "Use the same checkpoint target for every section.",
        "Speed up all sections equally without checking accuracy.",
        "Add extra questions without tracking section pace.",
      ],
      hint: "Section load differences require section-level pacing plans.",
      explanation: "One-size pacing causes uneven performance; section-specific pacing is more reliable.",
    },
    {
      skill: "quality-control",
      text: `Before submitting a high-stakes ${examLabel} section, which quality-control habit is most reliable?`,
      correct: "Run a brief targeted verification pass on flagged items and known error patterns.",
      distractors: [
        "Change random answers to distribute letters evenly.",
        "Skip verification to preserve confidence.",
        "Review only the first third of the section.",
      ],
      hint: "Targeted verification beats random checking.",
      explanation: "Focused verification catches preventable mistakes without excessive time cost.",
    },
    {
      skill: "remediation-loop",
      text: `After full-mock review in ${examLabel}, which next-step plan yields the best one-week improvement?`,
      correct: "Build a remediation sprint with two top weak strands, one pacing drill, and one timed re-check.",
      distractors: [
        "Repeat the same mock daily with no targeted fixes.",
        "Study only easiest content to boost confidence.",
        "Pause all timed practice until every concept feels perfect.",
      ],
      hint: "The strongest plan includes targeted fixes plus timed validation.",
      explanation: "Improvement requires focused remediation and a timed checkpoint to verify transfer.",
    },
  ];

  const questionSpecs = isFullMock
    ? [...baseQuestions, ...supplementalQuestions, ...fullMockQuestions]
    : [...baseQuestions, ...supplementalQuestions];

  return questionSpecs.map((spec, index) => {
    const optionSet = buildOptions(spec.correct, spec.distractors, (lessonIndex + index) % 4);
    return {
      id: `${lessonId}-q${index + 1}`,
      text: spec.text,
      skillId: `${exam.id}-skill-${skillSlug(spec.skill)}`,
      options: optionSet.options,
      correctOptionId: optionSet.correctOptionId,
      hint: spec.hint,
      explanation: spec.explanation,
    };
  });
}

function quizBlueprintBlock(isFullMock, questionCount) {
  const hard = isFullMock ? Math.max(2, Math.round(questionCount * 0.3)) : Math.max(1, Math.round(questionCount * 0.2));
  const easy = isFullMock ? Math.max(2, Math.round(questionCount * 0.2)) : Math.max(2, Math.round(questionCount * 0.35));
  const medium = Math.max(1, questionCount - easy - hard);
  return {
    frequency: isFullMock ? "mock_assessment" : "lesson_assessment",
    questionsPerCheck: questionCount,
    totalQuestions: questionCount,
    timeLimitMinutes: isFullMock ? Math.max(20, Math.round(questionCount * 2.4)) : Math.max(12, Math.round(questionCount * 1.9)),
    questionTypes: [{ type: "mcq_single", count: questionCount, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
    difficultyDistribution: { easy, medium, hard },
    feedbackMode: "after_submit",
    adaptive: false,
    masteryThreshold: isFullMock ? 0.82 : 0.75,
  };
}

function quizInteractiveActivityBlock(exam, lessonId, title, isFullMock) {
  const profile = activityProfileFor(exam);
  const context = topicContext(title);

  if (isFullMock) {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "sorting_buckets",
        title: `${title} Error Taxonomy Sort`,
        description: "Sort mock errors into concept, strategy, or timing remediation lanes.",
        estimatedMinutes: 10,
        difficultyLevel: "adaptive",
        instructions: ["Review each error pattern.", "Sort into best remediation lane.", "Use output to plan your next practice sprint."],
        data: {
          buckets: [
            { id: "concept", label: profile.mockConceptLabel },
            { id: "strategy", label: profile.mockStrategyLabel },
            { id: "timing", label: profile.mockTimingLabel },
          ],
          items: [
            { id: "i1", label: profile.mockConceptItem, correctBucketId: "concept" },
            { id: "i2", label: profile.mockStrategyItem, correctBucketId: "strategy" },
            { id: "i3", label: profile.mockTimingItem, correctBucketId: "timing" },
            { id: "i4", label: profile.mockTransferItem, correctBucketId: "timing" },
          ],
        },
      },
    ];
  }

  if (context.category === "timing") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "drag_and_drop",
        title: `${title} Pace Control Board`,
        description: "Place each tactic in the right phase to stabilize pacing.",
        estimatedMinutes: 8,
        difficultyLevel: "medium",
        instructions: [
          "Assign each tactic to Plan, Execute, or Recover.",
          "Check your placements.",
          "Apply one tactic in your next timed drill.",
        ],
        data: {
          targets: [
            { id: "plan", label: "Plan" },
            { id: "execute", label: "Execute" },
            { id: "recover", label: "Recover" },
          ],
          draggables: [
            { id: "d1", label: profile.planTactic, correctTargetId: "plan" },
            { id: "d2", label: profile.executeTactic, correctTargetId: "execute" },
            { id: "d3", label: profile.reflectTactic, correctTargetId: "recover" },
          ],
        },
      },
    ];
  }

  if (context.category === "simulation") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "sorting_buckets",
        title: `${title} Attempt-Order Sort`,
        description: "Sort each scenario into first-pass, flag, or deep-review lanes.",
        estimatedMinutes: 9,
        difficultyLevel: "adaptive",
        instructions: [
          "Read each scenario.",
          "Sort into the best execution lane.",
          "Use the result to set your next section workflow.",
        ],
        data: {
          buckets: [
            { id: "first_pass", label: "First Pass" },
            { id: "flag", label: "Flag and Return" },
            { id: "deep_review", label: "Deep Review" },
          ],
          items: [
            { id: "i1", label: profile.mockTimingItem, correctBucketId: "flag" },
            { id: "i2", label: profile.mockStrategyItem, correctBucketId: "flag" },
            { id: "i3", label: profile.mockConceptItem, correctBucketId: "deep_review" },
            { id: "i4", label: "High-confidence medium-difficulty cluster", correctBucketId: "first_pass" },
          ],
        },
      },
    ];
  }

  if (context.category === "diagnostic") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "matching_pairs",
        title: `${title} Root-Cause Match`,
        description: "Match each repeated error signal to the correction with highest score impact.",
        estimatedMinutes: 8,
        difficultyLevel: "medium",
        instructions: ["Match each pair.", "Check your result.", "Apply one correction in your next drill."],
        data: {
          left: [
            { id: "l1", label: profile.signalA },
            { id: "l2", label: profile.signalB },
            { id: "l3", label: profile.signalC },
          ],
          right: [
            { id: "r1", label: profile.actionA },
            { id: "r2", label: profile.actionB },
            { id: "r3", label: profile.actionC },
          ],
          pairs: [
            { leftId: "l1", rightId: "r1" },
            { leftId: "l2", rightId: "r2" },
            { leftId: "l3", rightId: "r3" },
          ],
        },
      },
    ];
  }

  return [
    {
      id: `${lessonId}-ia1`,
      type: "matching_pairs",
      title: `${title} Correction Alignment`,
      description: `Align each recurring signal with the strongest correction action for ${context.focus}.`,
      estimatedMinutes: 8,
      difficultyLevel: "medium",
      instructions: ["Align each pair.", "Check your result.", "Apply one correction in the next drill."],
      data: {
        left: [
          { id: "l1", label: profile.signalA },
          { id: "l2", label: profile.signalB },
          { id: "l3", label: profile.signalC },
        ],
        right: [
          { id: "r1", label: profile.actionA },
          { id: "r2", label: profile.actionB },
          { id: "r3", label: profile.actionC },
        ],
        pairs: [
          { leftId: "l1", rightId: "r1" },
          { leftId: "l2", rightId: "r2" },
          { leftId: "l3", rightId: "r3" },
        ],
      },
    },
  ];
}

function interactiveActivityBlock(exam, lessonId, title) {
  const profile = activityProfileFor(exam);
  const context = topicContext(title);

  if (context.category === "timing") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "sorting_buckets",
        title: `${title} Time-Checkpoint Sort`,
        description: "Sort execution decisions into before-timer, in-section, and recovery lanes.",
        estimatedMinutes: 8,
        difficultyLevel: "medium",
        instructions: ["Read each decision cue.", "Sort into the strongest checkpoint lane.", "Apply one lane in your next timed drill."],
        data: {
          buckets: [
            { id: "before_timer", label: "Before Timer" },
            { id: "in_section", label: "In Section" },
            { id: "recovery", label: "Recovery" },
          ],
          items: [
            { id: "i1", label: profile.planTactic, correctBucketId: "before_timer" },
            { id: "i2", label: profile.executeTactic, correctBucketId: "in_section" },
            { id: "i3", label: profile.reflectTactic, correctBucketId: "recovery" },
          ],
        },
      },
    ];
  }

  if (context.category === "diagnostic") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "matching_pairs",
        title: `${title} Diagnostic Match`,
        description: "Match recurring error signals to the highest-impact correction routine.",
        estimatedMinutes: 8,
        difficultyLevel: "medium",
        instructions: ["Match each error signal.", "Verify all pairings.", "Use one correction in your next attempt."],
        data: {
          left: [
            { id: "l1", label: profile.signalA },
            { id: "l2", label: profile.signalB },
            { id: "l3", label: profile.signalC },
          ],
          right: [
            { id: "r1", label: profile.actionA },
            { id: "r2", label: profile.actionB },
            { id: "r3", label: profile.actionC },
          ],
          pairs: [
            { leftId: "l1", rightId: "r1" },
            { leftId: "l2", rightId: "r2" },
            { leftId: "l3", rightId: "r3" },
          ],
        },
      },
    ];
  }

  if (context.category === "simulation") {
    return [
      {
        id: `${lessonId}-ia1`,
        type: "drag_and_drop",
        title: `${title} Attempt-Order Builder`,
        description: "Place each move in the strongest simulation sequence.",
        estimatedMinutes: 9,
        difficultyLevel: "adaptive",
        instructions: [
          "Assign each move to Launch, Stabilize, or Close.",
          "Check ordering logic.",
          "Carry one sequence rule into your next simulation.",
        ],
        data: {
          targets: [
            { id: "launch", label: "Launch" },
            { id: "stabilize", label: "Stabilize" },
            { id: "close", label: "Close" },
          ],
          draggables: [
            { id: "d1", label: profile.planTactic, correctTargetId: "launch" },
            { id: "d2", label: profile.executeTactic, correctTargetId: "stabilize" },
            { id: "d3", label: profile.reflectTactic, correctTargetId: "close" },
          ],
        },
      },
    ];
  }

  return [
    {
      id: `${lessonId}-ia1`,
      type: "drag_and_drop",
      title: `${title} Decision-Phase Mapping`,
      description: "Map each decision cue to Plan, Execute, or Reflect.",
      estimatedMinutes: 8,
      difficultyLevel: "medium",
      instructions: ["Assign each decision cue to the best phase.", "Check all mappings.", "Capture one improvement target."],
      data: {
        targets: [
          { id: "plan", label: profile.planLabel },
          { id: "execute", label: profile.executeLabel },
          { id: "reflect", label: profile.reflectLabel },
        ],
        draggables: [
          { id: "d1", label: profile.planTactic, correctTargetId: "plan" },
          { id: "d2", label: profile.executeTactic, correctTargetId: "execute" },
          { id: "d3", label: profile.reflectTactic, correctTargetId: "reflect" },
        ],
      },
    },
  ];
}

function interactivePromptsForLesson(exam, title) {
  const context = topicContext(title);
  const [strandPrimary, strandSecondary] = orderedStrandsForTopic(exam, title);
  const focus = sanitizeSentence(exam.focus);
  return [
    `Identify one ${strandPrimary} decision rule in ${title}.`,
    `Apply it in one ${context.unit} and show how it improves ${context.focus}.`,
    `Set one next-step target for ${strandSecondary} before your next ${focus} session.`,
  ];
}

function learningAidsForLesson(exam, lessonId, title) {
  const context = topicContext(title);
  const [strandPrimary, strandSecondary] = orderedStrandsForTopic(exam, title);
  return [
    {
      id: `${lessonId}-a1`,
      type: "image",
      title: `${toTitleWords(strandPrimary)} Snapshot`,
      content: `Visual anchor for ${title} with emphasis on ${strandPrimary} within ${context.unit} planning.`,
    },
    {
      id: `${lessonId}-a2`,
      type: "animation",
      title: `${toTitleWords(strandSecondary)} Walkthrough`,
      content: `Stepwise walkthrough for ${title} showing ${strandSecondary} decisions and ${context.artifact} checks.`,
    },
  ];
}

function makeLesson(exam, index, title, totalLessons) {
  const lessonNumber = String(index + 1).padStart(2, "0");
  const lessonId = `${exam.id}-l${lessonNumber}`;
  const isFullMock = index === totalLessons - 1;
  const isQuiz = (index + 1) % 3 === 0 || isFullMock;
  const isInteractive = !isQuiz && (index + 1) % 2 === 0;
  const duration = isQuiz ? (isFullMock ? 20 : 12) : isInteractive ? 14 : 11;
  const aids = learningAidsForLesson(exam, lessonId, title);

  if (isQuiz) {
    const questions = qBlock(exam, lessonId, title, index, isFullMock);
    const quizBlueprint = quizBlueprintBlock(isFullMock, questions.length);
    const interactiveActivities = quizInteractiveActivityBlock(exam, lessonId, title, isFullMock);
    return `{
      id: "${lessonId}",
      title: "${title}",
      type: "quiz",
      duration: ${duration},
      questions: ${jsonBlock(questions, 6)},
      interactiveActivities: ${jsonBlock(interactiveActivities, 6)},
      quizBlueprint: ${jsonBlock(quizBlueprint, 6)},
      metadata: {
        examDrill: "${isFullMock ? "full_mock" : title.toLowerCase().includes("section drill") ? "section_drill" : "lesson_drill"}"
      },
      learningAids: ${jsonBlock(aids, 6)}
    }`;
  }

  if (isInteractive) {
    const prompts = interactivePromptsForLesson(exam, title);
    const interactiveActivities = interactiveActivityBlock(exam, lessonId, title);
    return `{
      id: "${lessonId}",
      title: "${title}",
      type: "interactive",
      duration: ${duration},
      metadata: {
        prompts: ${jsonBlock(prompts, 8)}
      },
      interactiveActivities: ${jsonBlock(interactiveActivities, 6)},
      learningAids: ${jsonBlock(aids, 6)}
    }`;
  }

  return `{
      id: "${lessonId}",
      title: "${title}",
      type: "video",
      duration: ${duration},
      learningAids: ${jsonBlock(aids, 6)}
    }`;
}

function moduleSource(exam) {
  const lessonPrefix = lessonPrefixFromModuleId(exam.id);
  const lessonTitles = expandedLessonTitles(exam);
  const lessons = lessonTitles
    .map((title, index) => makeLesson(exam, index, `${lessonPrefix}: ${title}`, lessonTitles.length))
    .join(",\n    ");

  return `import type { LearningModule } from "@/lib/modules/types";

export const ${exam.constName}: LearningModule = {
  id: "${exam.id}",
  title: "${exam.title}",
  description: "${exam.description}",
  subject: "${exam.subject}",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: ${exam.minAge},
  maxAge: ${exam.maxAge},
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "${exam.difficultyBand}",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured ${exam.focus} workflows",
    "Improve speed and accuracy under timed constraints",
    "Use analytics-based revision loops to close weak areas"
  ],
  quizBlueprint: {
    frequency: "weekly_assessment",
    questionsPerCheck: 20,
    totalQuestions: 20,
    timeLimitMinutes: 25,
    questionTypes: [{ type: "mcq_single", percentage: 100, pointsEach: 1, bloomsLevels: [1, 2, 3, 4] }],
    difficultyDistribution: { easy: 6, medium: 10, hard: 4 },
    feedbackMode: "after_submit",
    adaptive: false,
    masteryThreshold: 0.8
  },
  lessons: [
    ${lessons}
  ],
};
`;
}

async function main() {
  await fs.mkdir(catalogDir, { recursive: true });
  for (const exam of exams) {
    const content = moduleSource(exam);
    const out = path.join(catalogDir, slugToFileName(exam.id));
    await fs.writeFile(out, content, "utf8");
    console.log(`Wrote ${path.relative(projectRoot, out)}`);
  }
}

main();
