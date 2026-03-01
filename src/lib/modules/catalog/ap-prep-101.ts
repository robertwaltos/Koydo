import type { LearningModule } from "@/lib/modules/types";

export const ApPrep101Module: LearningModule = {
  id: "ap-prep-101",
  title: "AP Exam Prep Toolkit",
  description:
    "A comprehensive guide to Advanced Placement exam strategy. Learn how to tackle DBQs, experimental design FRQs, rhetorical analysis, and calculus free-response questions with proven frameworks and scoring-aligned techniques.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced", "curriculum"],
  minAge: 15,
  maxAge: 19,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe the structure and scoring of AP exams across major subjects",
    "Apply the DBQ rubric to construct a thesis-driven, evidence-based essay",
    "Design controlled experiments and write CER-format responses for AP Science",
    "Use the SOAPSTone method for AP English rhetorical analysis",
    "Employ AP Calculus FRQ strategies including full justification and partial-credit techniques",
    "Demonstrate AP-ready knowledge through timed practice assessments"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Understanding AP Exams  (video)
    ────────────────────────────────────────────── */
    {
      id: "ap-prep-101-l01",
      title: "Understanding AP Exams",
      type: "video",
      duration: 12,
      objectives: [
        "Explain the general structure and scoring of AP exams",
        "Identify the key question formats across major AP subjects",
        "Describe the AP registration and score-reporting process"
      ],
      chunks: [
        {
          id: "ap-prep-101-l01-c1",
          title: "AP Exam Structure and Scoring",
          content:
            "Every AP exam has two main sections: a multiple-choice question (MCQ) section containing 40 to 60 questions and a free-response question (FRQ) section that requires written or problem-solved answers. Exams are scored on a scale from 1 to 5, where 5 means 'extremely well qualified' and 1 means 'no recommendation.' Most colleges grant credit or placement for scores of 3 or higher, though selective institutions often require a 4 or 5. The MCQ section is machine-scored while the FRQ section is graded by trained AP readers each June. Your raw scores from both sections are combined and converted to the 1-5 scale using a statistical process that ensures consistency across years."
        },
        {
          id: "ap-prep-101-l01-c2",
          title: "Subject Overview — What Each AP Expects",
          content:
            "AP exams differ significantly by subject. AP U.S. History (APUSH) features a Document-Based Question (DBQ) that requires analyzing primary sources and a Long Essay Question (LEQ) that tests argumentative writing. AP Biology includes lab-based FRQs where you must interpret experimental data and design investigations. AP Calculus AB and BC require you to show all mathematical work — a correct answer with no supporting steps earns zero credit. AP English Language and Literature exams center on rhetorical analysis, asking you to dissect how authors use language to achieve their purpose. Understanding these subject-specific demands is the first step to targeted preparation."
        },
        {
          id: "ap-prep-101-l01-c3",
          title: "Registration and Score Reporting",
          content:
            "AP exams are administered each May over a two-week testing window. Students typically register through their school's AP coordinator in the fall or early spring. Each exam costs approximately $98, though fee reductions are available for students with financial need. After scoring in June and July, the College Board releases scores online. Students can send score reports to colleges for free during the registration period or for a fee afterward. You may also cancel or withhold specific scores if you are unsatisfied, though this must be requested before scores are sent to colleges."
        }
      ],
      flashcards: [
        {
          id: "ap-prep-101-l01-f1",
          front: "AP Scoring Scale",
          back: "AP exams are scored 1-5. A 5 means 'extremely well qualified,' a 3 means 'qualified.' Most colleges accept a 3 or higher for credit or placement."
        },
        {
          id: "ap-prep-101-l01-f2",
          front: "Document-Based Question (DBQ)",
          back: "An essay prompt on AP History exams that provides a set of primary-source documents. Students must analyze the documents and use them as evidence, along with outside knowledge, to support a thesis."
        },
        {
          id: "ap-prep-101-l01-f3",
          front: "Free-Response Question (FRQ)",
          back: "An open-ended exam question requiring a written answer, mathematical solution, or experimental analysis — as opposed to selecting from given choices. FRQs are scored by trained human readers."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  AP History — Document-Based Questions  (video)
    ────────────────────────────────────────────── */
    {
      id: "ap-prep-101-l02",
      title: "AP History — Document-Based Questions",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the structure and rubric of a DBQ",
        "Apply the AAHC method to analyze primary sources",
        "Construct a historically defensible thesis that addresses all parts of the prompt"
      ],
      chunks: [
        {
          id: "ap-prep-101-l02-c1",
          title: "What Is a DBQ?",
          content:
            "The Document-Based Question asks you to analyze 7 provided primary-source documents and write a persuasive essay using evidence from those documents plus your own outside knowledge. The official AP rubric awards up to 7 points: 1 point for a historically defensible thesis, 1 point for contextualization (placing the topic in broader historical context), up to 3 points for evidence (using documents and outside knowledge effectively), and up to 2 points for analysis and reasoning (explaining how or why the evidence supports your argument, including sourcing at least 3 documents). You have 60 minutes total — 15 minutes suggested for reading and planning and 45 minutes for writing."
        },
        {
          id: "ap-prep-101-l02-c2",
          title: "Reading Primary Sources with AAHC",
          content:
            "To effectively analyze documents, use the AAHC framework. Author: Who created this document and what is their perspective or bias? Audience: Who was the intended audience, and how might that shape the content? Historical Context: What was happening at the time this document was produced, and how does that context influence its meaning? Connection: How does this document connect to the broader argument you are making? By applying AAHC to each document, you demonstrate the sourcing and analysis skills that earn full rubric points. AP readers specifically look for students who go beyond summarizing documents to explaining why the source's perspective matters."
        },
        {
          id: "ap-prep-101-l02-c3",
          title: "Constructing a Strong Thesis",
          content:
            "A historically defensible thesis must make a claim that can be supported with evidence and that addresses ALL parts of the prompt. Avoid vague statements like 'There were many causes of the Civil War.' Instead, write something specific and arguable: 'While economic differences between the North and South contributed to sectional tension, the expansion of slavery into western territories was the primary catalyst for the Civil War because it threatened the political balance of power.' Your thesis should appear in your introduction and set up the categories or arguments your body paragraphs will develop. A strong thesis takes a clear position — it does not simply restate the question or list topics."
        }
      ],
      flashcards: [
        {
          id: "ap-prep-101-l02-f1",
          front: "AAHC Method",
          back: "A framework for analyzing primary sources: Author (who wrote it and their bias), Audience (who it was written for), Historical Context (what was happening at the time), Connection (how it ties to your argument)."
        },
        {
          id: "ap-prep-101-l02-f2",
          front: "Contextualization (DBQ rubric)",
          back: "Worth 1 point on the DBQ rubric. Requires you to situate the topic within broader historical events, developments, or processes occurring before, during, or after the time frame of the question."
        },
        {
          id: "ap-prep-101-l02-f3",
          front: "LEQ vs. DBQ",
          back: "Both are AP History essays. The DBQ provides 7 documents to analyze; the LEQ provides no documents — you must rely entirely on your own knowledge. The LEQ tests the same thesis and evidence skills but without source analysis."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  AP Science — Experimental Design  (video)
    ────────────────────────────────────────────── */
    {
      id: "ap-prep-101-l03",
      title: "AP Science — Experimental Design",
      type: "video",
      duration: 13,
      objectives: [
        "Identify independent, dependent, and controlled variables in an experiment",
        "Structure AP Biology FRQ responses using the CER format",
        "Describe key laboratory concepts tested on AP Science exams"
      ],
      chunks: [
        {
          id: "ap-prep-101-l03-c1",
          title: "Variables in Experimental Design",
          content:
            "Every well-designed experiment involves three types of variables. The independent variable is the factor the scientist deliberately changes — for example, the amount of fertilizer applied to plants. The dependent variable is what is measured in response — such as plant height in centimeters. Controlled variables (constants) are all the factors kept the same across experimental groups to ensure a fair test — same soil type, same amount of water, same light exposure, and same plant species. Without proper controls, you cannot determine whether changes in the dependent variable were actually caused by the independent variable. AP Science FRQs frequently ask you to identify these variables or design an experiment with appropriate controls."
        },
        {
          id: "ap-prep-101-l03-c2",
          title: "AP Biology FRQ Format and CER",
          content:
            "The AP Biology exam includes 6 free-response questions: 2 long-form questions worth 8-10 points each and 4 short-answer questions worth 4 points each. The most effective framework for answering these is CER: Claim-Evidence-Reasoning. First, state your Claim — a direct answer to the question. Next, provide Evidence — specific data, observations, or biological facts that support your claim. Finally, explain your Reasoning — the biological principle or mechanism that connects the evidence to your claim. For example: Claim — 'The enzyme reaction rate will decrease above 40 degrees C.' Evidence — 'The data shows a sharp decline in product formation at 45 degrees C.' Reasoning — 'High temperatures denature proteins by disrupting hydrogen bonds, changing the active site shape so substrate can no longer bind.'"
        },
        {
          id: "ap-prep-101-l03-c3",
          title: "Key Laboratory Concepts",
          content:
            "Several laboratory techniques appear repeatedly on AP Science exams. Gel electrophoresis separates DNA fragments by size using an electric field — smaller fragments travel farther through the gel. Hardy-Weinberg equilibrium describes a theoretical population where allele frequencies do not change across generations, requiring five conditions: no mutation, random mating, no natural selection, infinite population size, and no gene flow. Any violation causes evolution. Measuring photosynthesis rate is another common topic — methods include tracking oxygen production, carbon dioxide consumption, or the floating leaf disk assay. Understanding these core labs and their underlying principles is essential for earning full credit on experimental design questions."
        }
      ],
      flashcards: [
        {
          id: "ap-prep-101-l03-f1",
          front: "Independent Variable",
          back: "The variable the experimenter deliberately changes or manipulates. In a plant growth experiment testing fertilizer, the independent variable is the amount of fertilizer applied."
        },
        {
          id: "ap-prep-101-l03-f2",
          front: "CER Format",
          back: "Claim-Evidence-Reasoning: a structured response framework for AP Science FRQs. State a claim, support it with specific evidence, then explain the biological reasoning that connects them."
        },
        {
          id: "ap-prep-101-l03-f3",
          front: "Hardy-Weinberg Equilibrium",
          back: "A model describing a non-evolving population where allele frequencies remain constant. Requires five conditions: no mutation, random mating, no natural selection, infinite population size, and no gene flow."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L04  AP Knowledge Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "ap-prep-101-l04",
      title: "AP Knowledge Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Recall key facts about DBQ structure and experimental design",
        "Demonstrate understanding of AP exam scoring and question formats"
      ],
      questions: [
        {
          id: "ap-prep-101-l04-q1",
          text: "In a Document-Based Question (DBQ), how many documents are typically provided?",
          skillId: "ap-prep-101-skill-history",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "3" },
            { id: "c", text: "10" },
            { id: "d", text: "5" }
          ],
          correctOptionId: "a",
          explanation:
            "The AP History DBQ provides exactly 7 primary-source documents. Students must analyze these documents and incorporate them as evidence in a thesis-driven essay."
        },
        {
          id: "ap-prep-101-l04-q2",
          text: "Which variable does the scientist deliberately CHANGE in an experiment?",
          skillId: "ap-prep-101-skill-science",
          options: [
            { id: "a", text: "Independent variable" },
            { id: "b", text: "Dependent variable" },
            { id: "c", text: "Controlled variable" },
            { id: "d", text: "Confounding variable" }
          ],
          correctOptionId: "a",
          explanation:
            "The independent variable is the factor the experimenter deliberately manipulates. The dependent variable is what gets measured in response, and controlled variables are kept constant."
        },
        {
          id: "ap-prep-101-l04-q3",
          text: "What AP score do most colleges require for credit or advanced placement?",
          skillId: "ap-prep-101-skill-general",
          options: [
            { id: "a", text: "3 or higher" },
            { id: "b", text: "5 only" },
            { id: "c", text: "2 or higher" },
            { id: "d", text: "4 or higher exclusively" }
          ],
          correctOptionId: "a",
          explanation:
            "Most colleges accept a score of 3 or higher for credit or placement, though more selective institutions may require a 4 or 5. A score of 3 is officially classified as 'qualified' by the College Board."
        }
      ],
      quizBlueprint: {
        totalQuestions: 3,
        bloomProfile: { remember: 2, understand: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L05  AP English & Calculus Strategies  (video)
    ────────────────────────────────────────────── */
    {
      id: "ap-prep-101-l05",
      title: "AP English & Calculus Strategies",
      type: "video",
      duration: 14,
      objectives: [
        "Apply the SOAPSTone method to analyze rhetorical texts",
        "Identify common AP Calculus FRQ types and demonstrate show-all-work strategy",
        "Use precise justification language in math and science responses"
      ],
      chunks: [
        {
          id: "ap-prep-101-l05-c1",
          title: "AP English — Rhetorical Analysis with SOAPSTone",
          content:
            "The AP English Language exam asks you to analyze how authors construct arguments using rhetorical strategies. The SOAPSTone framework is your essential tool: Speaker — who is the voice behind the text, and what is their credibility or perspective? Occasion — what event, situation, or context prompted the writing? Audience — who is the intended reader, and how does that shape the author's choices? Purpose — what is the author trying to achieve (persuade, inform, entertain, call to action)? Subject — what is the main topic or issue being discussed? Tone — what is the author's attitude, and how is it conveyed through diction, syntax, and imagery? By systematically working through SOAPSTone before you write, you ensure your analysis essay addresses the full rhetorical situation rather than simply summarizing the passage."
        },
        {
          id: "ap-prep-101-l05-c2",
          title: "AP Calculus FRQ Strategies",
          content:
            "AP Calculus AB and BC exams each include 6 free-response questions. You must show ALL work — a correct numerical answer without supporting steps earns zero points. Common FRQ types include: area and volume problems (finding area between curves using definite integrals), related rates (connecting rates of change of related quantities using implicit differentiation), and accumulation functions (interpreting integrals as net change). For calculator-active questions, write the mathematical setup before using your calculator, and record the equation you entered. For non-calculator questions, show every algebraic and calculus step. AP readers award partial credit for correct methods even with arithmetic errors, so a well-organized solution with a minor calculation mistake can still earn most of the available points."
        },
        {
          id: "ap-prep-101-l05-c3",
          title: "Justification Language That Earns Points",
          content:
            "AP readers look for precise mathematical and scientific language in your justifications. Instead of writing 'the function goes up then down,' write 'Because f prime of x changes from positive to negative at x equals 3, f has a relative maximum at x equals 3 by the First Derivative Test.' For AP Biology, instead of 'the population changed,' write 'The allele frequency shifted from 0.6 to 0.4 over ten generations, indicating that natural selection acted against the dominant phenotype, violating Hardy-Weinberg equilibrium.' This kind of precise, mechanism-driven language earns full justification points. Practice converting casual observations into formal AP language — it is one of the highest-leverage skills you can develop."
        }
      ],
      flashcards: [
        {
          id: "ap-prep-101-l05-f1",
          front: "SOAPSTone",
          back: "A rhetorical analysis framework: Speaker, Occasion, Audience, Purpose, Subject, Tone. Used on AP English exams to systematically analyze how an author constructs an argument."
        },
        {
          id: "ap-prep-101-l05-f2",
          front: "Related Rates (AP Calculus)",
          back: "A type of FRQ where two or more quantities are changing over time and are related by an equation. You use implicit differentiation with respect to time to connect their rates of change."
        },
        {
          id: "ap-prep-101-l05-f3",
          front: "Partial Credit Strategy",
          back: "On AP Calculus FRQs, showing a correct method earns points even if arithmetic is wrong. Always write the integral or derivative setup first, then compute. Never leave a question blank — partial credit adds up."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  AP Prep Final Assessment  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "ap-prep-101-l06",
      title: "AP Prep Final Assessment",
      type: "quiz",
      duration: 10,
      objectives: [
        "Apply rhetorical analysis concepts to identify devices",
        "Evaluate experimental design scenarios",
        "Synthesize AP scoring strategies across subjects"
      ],
      questions: [
        {
          id: "ap-prep-101-l06-q1",
          text: "A speaker says 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.' Which rhetorical device is being used?",
          skillId: "ap-prep-101-skill-english",
          options: [
            { id: "a", text: "Anaphora — repetition of a phrase at the beginning of successive clauses" },
            { id: "b", text: "Chiasmus — reversal of grammatical structure in successive phrases" },
            { id: "c", text: "Hyperbole — deliberate exaggeration for emphasis" },
            { id: "d", text: "Litotes — understatement using double negatives" }
          ],
          correctOptionId: "a",
          explanation:
            "Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses or sentences. Here, 'we shall fight' is repeated to build emphasis and momentum. This is a common rhetorical device tested on AP English exams."
        },
        {
          id: "ap-prep-101-l06-q2",
          text: "A student is testing whether light color affects plant growth. They use red, blue, and white light on three groups of identical plants. What is the dependent variable?",
          skillId: "ap-prep-101-skill-science",
          options: [
            { id: "a", text: "The color of light used" },
            { id: "b", text: "The amount of plant growth measured" },
            { id: "c", text: "The type of soil in each pot" },
            { id: "d", text: "The species of plant chosen" }
          ],
          correctOptionId: "b",
          explanation:
            "The dependent variable is what the experimenter measures in response to changes in the independent variable. Here, the independent variable is light color (what is changed), and the dependent variable is plant growth (what is measured). Soil type and plant species should be controlled variables."
        },
        {
          id: "ap-prep-101-l06-q3",
          text: "On an AP Calculus FRQ, a student arrives at the correct numerical answer but shows no supporting work. What is the most likely outcome?",
          skillId: "ap-prep-101-skill-strategy",
          options: [
            { id: "a", text: "The student earns zero points because supporting work is required" },
            { id: "b", text: "The student earns full credit since the answer is correct" },
            { id: "c", text: "The student earns half credit automatically" },
            { id: "d", text: "The question is thrown out and not scored" }
          ],
          correctOptionId: "a",
          explanation:
            "AP Calculus FRQs require all supporting work to be shown. A correct answer with no work earns zero points. Conversely, showing a correct method with a minor arithmetic error can still earn most of the available points through partial credit. Always write out your setup, steps, and reasoning."
        }
      ],
      quizBlueprint: {
        totalQuestions: 3,
        bloomProfile: { understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
