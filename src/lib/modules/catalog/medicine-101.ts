import type { LearningModule } from "@/lib/modules/types";

export const Medicine101Module: LearningModule = {
  id: "medicine-101",
  title: "Medicine Foundations",
  description:
    "Explore the scientific basis of modern medicine — from cell biology and organ systems to pathology, pharmacology, and evidence-based clinical reasoning.",
  subject: "Medicine",
  tags: ["core", "curriculum", "interactive", "pre-med", "health-sciences"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe the levels of structural organization in the human body",
    "Explain homeostasis and the role of feedback loops in maintaining health",
    "Identify the major organ systems and their primary functions",
    "Distinguish between types of pathogens and mechanisms of disease",
    "Outline the principles of pharmacokinetics and pharmacodynamics",
    "Interpret basic vital signs and laboratory values",
    "Apply evidence-based reasoning to clinical scenarios"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Levels of Organization & Homeostasis  (video)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l01",
      title: "Levels of Organization and Homeostasis",
      type: "video",
      duration: 12,
      objectives: [
        "List the levels of structural organization from atoms to organ systems",
        "Define homeostasis and give examples of physiological set points",
        "Compare negative and positive feedback loops"
      ],
      chunks: [
        {
          id: "medicine-101-l01-c1",
          title: "From Cells to Systems",
          content:
            "The human body is organized hierarchically: atoms form molecules, molecules form organelles, organelles form cells, cells form tissues, tissues form organs, and organs form organ systems. There are four primary tissue types — epithelial (covering surfaces), connective (support and binding), muscle (movement), and nervous (communication). Understanding this hierarchy is essential because disease can originate at any level, from a single mutated gene to a failing organ system."
        },
        {
          id: "medicine-101-l01-c2",
          title: "Homeostasis",
          content:
            "Homeostasis is the body's ability to maintain a stable internal environment despite external changes. Core body temperature stays near 37 °C, blood pH near 7.4, and blood glucose near 90 mg/dL. When a variable drifts from its set point, sensors detect the change, a control center processes the signal, and effectors bring the variable back toward normal. This self-correcting process is a negative feedback loop — the most common regulatory mechanism in physiology."
        },
        {
          id: "medicine-101-l01-c3",
          title: "Positive vs. Negative Feedback",
          content:
            "Negative feedback opposes change and stabilizes systems (e.g., thermoregulation: sweating cools the body when it overheats). Positive feedback amplifies change and drives processes to completion: during childbirth, oxytocin increases uterine contractions, which push the baby further down, triggering more oxytocin release until delivery occurs. Blood clotting is another example — each clotting factor activates the next, rapidly sealing a wound. Positive feedback loops always have a terminating event."
        }
      ],
      flashcards: [
        { id: "medicine-101-l01-f1", front: "Homeostasis", back: "The body's ability to maintain stable internal conditions (temperature, pH, glucose) despite external changes" },
        { id: "medicine-101-l01-f2", front: "Negative feedback loop", back: "A regulatory mechanism that opposes change to return a variable to its set point — the most common type in physiology" },
        { id: "medicine-101-l01-f3", front: "Four primary tissue types", back: "Epithelial (covering), connective (support), muscle (movement), nervous (communication)" },
        { id: "medicine-101-l01-f4", front: "Positive feedback loop", back: "A mechanism that amplifies change until a process completes — e.g., childbirth contractions, blood clotting" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Major Organ Systems  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l02",
      title: "Major Organ Systems",
      type: "interactive",
      duration: 14,
      objectives: [
        "Name the 11 major organ systems and their primary roles",
        "Explain how organ systems work together to maintain homeostasis",
        "Identify representative organs for each system"
      ],
      chunks: [
        {
          id: "medicine-101-l02-c1",
          title: "Cardiovascular, Respiratory, and Digestive Systems",
          content:
            "The cardiovascular system (heart, blood vessels, blood) pumps oxygen-rich blood to tissues and returns deoxygenated blood to the lungs. The respiratory system (lungs, trachea, diaphragm) exchanges gases — O₂ in, CO₂ out — across 300 million alveoli with a surface area the size of a tennis court. The digestive system (mouth to anus plus liver, pancreas, gallbladder) breaks food into absorbable nutrients through mechanical and chemical digestion. These three systems cooperate to deliver energy and oxygen to every cell."
        },
        {
          id: "medicine-101-l02-c2",
          title: "Nervous, Endocrine, and Musculoskeletal Systems",
          content:
            "The nervous system (brain, spinal cord, nerves) processes sensory input and coordinates rapid responses via electrical impulses. The endocrine system (glands secreting hormones) regulates slower, longer-lasting processes like growth, metabolism, and reproduction. The musculoskeletal system (206 bones, 600+ muscles, cartilage, tendons) provides structure, protection, and movement. The nervous and endocrine systems both regulate homeostasis — the nervous system acts in seconds, hormones over hours to days."
        },
        {
          id: "medicine-101-l02-c3",
          title: "Immune, Urinary, and Integumentary Systems",
          content:
            "The immune system (white blood cells, lymph nodes, spleen, thymus) defends against pathogens through innate (immediate, non-specific) and adaptive (targeted, memory-forming) responses. The urinary system (kidneys, ureters, bladder, urethra) filters blood, removes waste as urine, and regulates water and electrolyte balance. The integumentary system (skin, hair, nails) forms a physical barrier against infection, regulates temperature through sweating and vasodilation, and synthesizes vitamin D from sunlight."
        }
      ],
      interactiveActivities: [
        {
          id: "medicine-101-l02-a1",
          title: "Match Organ to System",
          type: "matching_pairs",
          pairs: [
            { left: "Heart", right: "Cardiovascular system" },
            { left: "Alveoli", right: "Respiratory system" },
            { left: "Pancreas", right: "Digestive / Endocrine system" },
            { left: "Kidneys", right: "Urinary system" },
            { left: "Thymus", right: "Immune system" },
            { left: "Femur", right: "Musculoskeletal system" }
          ]
        }
      ],
      flashcards: [
        { id: "medicine-101-l02-f1", front: "Cardiovascular system", back: "Heart, blood vessels, and blood — pumps oxygenated blood to tissues and returns deoxygenated blood to the lungs" },
        { id: "medicine-101-l02-f2", front: "Alveoli", back: "Tiny air sacs in the lungs (~300 million) where gas exchange occurs — O₂ diffuses in, CO₂ diffuses out" },
        { id: "medicine-101-l02-f3", front: "Innate vs. adaptive immunity", back: "Innate: immediate, non-specific (skin, phagocytes). Adaptive: slow, specific, creates memory (T cells, B cells, antibodies)" },
        { id: "medicine-101-l02-f4", front: "Endocrine system", back: "Glands (pituitary, thyroid, adrenals, pancreas) that secrete hormones to regulate growth, metabolism, and reproduction" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Anatomy & Physiology Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l03",
      title: "Anatomy & Physiology Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate understanding of body organization, homeostasis, and organ systems"],
      questions: [
        {
          id: "medicine-101-l03-q1",
          text: "Which feedback mechanism is responsible for maintaining body temperature at ~37 °C?",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Positive feedback" },
            { id: "b", text: "Negative feedback" },
            { id: "c", text: "Feed-forward control" },
            { id: "d", text: "No feedback is involved" }
          ],
          correctOptionId: "b",
          explanation: "Thermoregulation uses negative feedback: when body temperature rises, sweating and vasodilation cool the body back toward the set point."
        },
        {
          id: "medicine-101-l03-q2",
          text: "Gas exchange in the lungs occurs primarily in the:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Bronchi" },
            { id: "b", text: "Trachea" },
            { id: "c", text: "Alveoli" },
            { id: "d", text: "Pleural cavity" }
          ],
          correctOptionId: "c",
          explanation: "Alveoli are tiny air sacs with thin walls and rich blood supply, optimized for O₂/CO₂ exchange by diffusion."
        },
        {
          id: "medicine-101-l03-q3",
          text: "Which organ system is primarily responsible for filtering waste from the blood?",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Digestive system" },
            { id: "b", text: "Cardiovascular system" },
            { id: "c", text: "Urinary system" },
            { id: "d", text: "Integumentary system" }
          ],
          correctOptionId: "c",
          explanation: "The kidneys in the urinary system filter about 180 liters of blood daily, removing waste products as urine."
        },
        {
          id: "medicine-101-l03-q4",
          text: "Positive feedback differs from negative feedback because it:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Opposes change and stabilizes variables" },
            { id: "b", text: "Amplifies change until a process completes" },
            { id: "c", text: "Only operates in the nervous system" },
            { id: "d", text: "Maintains a constant set point" }
          ],
          correctOptionId: "b",
          explanation: "Positive feedback drives processes to completion (e.g., childbirth contractions) rather than stabilizing a variable."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Pathology: Mechanisms of Disease  (video)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l04",
      title: "Pathology: How Disease Develops",
      type: "video",
      duration: 13,
      objectives: [
        "Distinguish between infectious and non-infectious disease",
        "Classify the major types of pathogens",
        "Explain the general sequence from exposure to clinical symptoms"
      ],
      chunks: [
        {
          id: "medicine-101-l04-c1",
          title: "Infectious vs. Non-Infectious Disease",
          content:
            "Infectious diseases are caused by pathogenic microorganisms — bacteria, viruses, fungi, and parasites — that can spread between hosts. Non-infectious diseases arise from genetic mutations (sickle cell disease), lifestyle factors (type 2 diabetes), autoimmune dysfunction (rheumatoid arthritis), or environmental exposures (asbestosis). Many diseases are multifactorial: heart disease involves genetics, diet, exercise, and stress. Understanding the etiology (cause) of a disease is the first step in treatment and prevention."
        },
        {
          id: "medicine-101-l04-c2",
          title: "Types of Pathogens",
          content:
            "Bacteria are single-celled prokaryotes; some cause disease by producing toxins or invading tissues (e.g., Streptococcus, E. coli). Antibiotics target bacterial structures like cell walls and ribosomes. Viruses are non-living particles that hijack host cells to replicate (e.g., influenza, SARS-CoV-2). Antivirals and vaccines are the primary defenses. Fungi cause infections ranging from superficial (athlete's foot) to systemic (Candida). Parasites include protozoa (malaria) and helminths (tapeworms). Each pathogen type requires different treatment strategies."
        },
        {
          id: "medicine-101-l04-c3",
          title: "The Disease Process",
          content:
            "Infection follows a predictable course: (1) Exposure — the pathogen contacts the host. (2) Incubation — the pathogen multiplies without symptoms (hours to weeks). (3) Prodromal phase — vague early symptoms (fatigue, mild fever). (4) Acute phase — peak symptoms as the immune response intensifies. (5) Convalescence — the immune system gains control and the patient recovers. Complications occur when the immune response is insufficient, excessive (sepsis), or misdirected (autoimmunity). Immunocompromised patients face greater risk at every stage."
        }
      ],
      flashcards: [
        { id: "medicine-101-l04-f1", front: "Etiology", back: "The cause or origin of a disease — may be infectious, genetic, environmental, or multifactorial" },
        { id: "medicine-101-l04-f2", front: "Incubation period", back: "The time between pathogen exposure and the appearance of first symptoms — varies from hours to weeks" },
        { id: "medicine-101-l04-f3", front: "Bacteria vs. viruses", back: "Bacteria: living prokaryotic cells, treated with antibiotics. Viruses: non-living particles that hijack host cells, treated with antivirals/vaccines" },
        { id: "medicine-101-l04-f4", front: "Sepsis", back: "A life-threatening systemic inflammatory response to infection — the immune system damages the body's own tissues" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  The Immune Response  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l05",
      title: "The Immune Response in Action",
      type: "interactive",
      duration: 14,
      objectives: [
        "Differentiate innate and adaptive immunity",
        "Trace the steps of the inflammatory response",
        "Explain how vaccines produce immunological memory"
      ],
      chunks: [
        {
          id: "medicine-101-l05-c1",
          title: "Innate Immunity: First Line of Defense",
          content:
            "Innate immunity provides immediate, non-specific defense. Physical barriers (skin, mucous membranes) block entry. Chemical barriers (stomach acid, lysozyme in tears) destroy pathogens. Cellular defenses include phagocytes (neutrophils and macrophages) that engulf microbes, and natural killer (NK) cells that destroy virus-infected cells. The inflammatory response — redness, heat, swelling, pain — occurs when damaged tissues release histamine, increasing blood flow and attracting immune cells to the site of infection."
        },
        {
          id: "medicine-101-l05-c2",
          title: "Adaptive Immunity: Targeted Response",
          content:
            "Adaptive immunity takes days to develop but is highly specific and creates memory. T cells (cell-mediated immunity) directly kill infected cells: helper T cells coordinate the response, cytotoxic T cells destroy targets. B cells (humoral immunity) produce antibodies — Y-shaped proteins that bind to specific antigens, neutralizing pathogens or marking them for destruction. After infection, memory B and T cells persist for years, enabling a faster response on re-exposure. This is the basis of vaccination."
        },
        {
          id: "medicine-101-l05-c3",
          title: "Vaccines and Immunological Memory",
          content:
            "Vaccines expose the immune system to a harmless form of a pathogen (inactivated, attenuated, mRNA-encoded protein, or subunit) to trigger adaptive immunity without causing disease. The immune system produces antibodies and memory cells. On future exposure to the real pathogen, memory cells mount a rapid, overwhelming response that prevents illness. Herd immunity occurs when enough of the population is vaccinated that the pathogen cannot spread effectively, protecting those who cannot be vaccinated."
        }
      ],
      interactiveActivities: [
        {
          id: "medicine-101-l05-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Innate Immunity", "Adaptive Immunity"],
          items: [
            { text: "Skin acting as a physical barrier", bucket: "Innate Immunity" },
            { text: "B cells producing specific antibodies", bucket: "Adaptive Immunity" },
            { text: "Macrophages engulfing bacteria", bucket: "Innate Immunity" },
            { text: "Memory T cells from a previous infection", bucket: "Adaptive Immunity" },
            { text: "Inflammatory response (redness, swelling)", bucket: "Innate Immunity" },
            { text: "Cytotoxic T cells killing virus-infected cells", bucket: "Adaptive Immunity" },
            { text: "Stomach acid destroying ingested pathogens", bucket: "Innate Immunity" },
            { text: "Antibodies binding to a specific antigen", bucket: "Adaptive Immunity" }
          ]
        }
      ],
      flashcards: [
        { id: "medicine-101-l05-f1", front: "Phagocytosis", back: "The process by which immune cells (neutrophils, macrophages) engulf and digest pathogens" },
        { id: "medicine-101-l05-f2", front: "Antibodies", back: "Y-shaped proteins produced by B cells that bind specific antigens — neutralize pathogens or mark them for destruction" },
        { id: "medicine-101-l05-f3", front: "Helper T cells", back: "Coordinate the adaptive immune response by activating B cells, cytotoxic T cells, and macrophages via cytokines" },
        { id: "medicine-101-l05-f4", front: "Herd immunity", back: "When enough people are immune (via vaccination or prior infection) that a pathogen cannot spread effectively in the population" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Pathology & Immunity Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l06",
      title: "Pathology & Immunity Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of pathogens, disease processes, and immune defenses"],
      questions: [
        {
          id: "medicine-101-l06-q1",
          text: "Which type of pathogen is treated with antibiotics?",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Viruses" },
            { id: "b", text: "Bacteria" },
            { id: "c", text: "Prions" },
            { id: "d", text: "All pathogens" }
          ],
          correctOptionId: "b",
          explanation: "Antibiotics target bacterial structures (cell walls, ribosomes). They are ineffective against viruses, which require antivirals."
        },
        {
          id: "medicine-101-l06-q2",
          text: "Memory B and T cells are responsible for:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "The inflammatory response" },
            { id: "b", text: "Immediate non-specific defense" },
            { id: "c", text: "Faster immune response upon re-exposure to a pathogen" },
            { id: "d", text: "Producing histamine during inflammation" }
          ],
          correctOptionId: "c",
          explanation: "Memory cells persist after an initial infection, enabling the adaptive immune system to respond rapidly and powerfully on re-exposure."
        },
        {
          id: "medicine-101-l06-q3",
          text: "The inflammatory response is characterized by all EXCEPT:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Redness and heat from increased blood flow" },
            { id: "b", text: "Production of specific antibodies" },
            { id: "c", text: "Swelling from fluid accumulation" },
            { id: "d", text: "Pain from pressure on nerve endings" }
          ],
          correctOptionId: "b",
          explanation: "Antibody production is part of the adaptive immune response. Inflammation is an innate, non-specific response."
        },
        {
          id: "medicine-101-l06-q4",
          text: "During the incubation period of an infection:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Symptoms are at their peak" },
            { id: "b", text: "The patient has fully recovered" },
            { id: "c", text: "The pathogen is multiplying but symptoms have not appeared" },
            { id: "d", text: "The immune system has already eliminated the pathogen" }
          ],
          correctOptionId: "c",
          explanation: "The incubation period is the silent phase where the pathogen multiplies before the host shows symptoms."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Pharmacology Basics  (video)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l07",
      title: "Pharmacology: How Drugs Work",
      type: "video",
      duration: 12,
      objectives: [
        "Define pharmacokinetics (ADME) and pharmacodynamics",
        "Explain the concepts of drug half-life and therapeutic window",
        "Distinguish agonists from antagonists"
      ],
      chunks: [
        {
          id: "medicine-101-l07-c1",
          title: "Pharmacokinetics: What the Body Does to a Drug",
          content:
            "Pharmacokinetics describes a drug's journey through the body in four stages (ADME): Absorption — the drug enters the bloodstream (oral drugs must survive stomach acid and pass through the intestinal wall). Distribution — blood carries the drug to target tissues (lipid-soluble drugs cross the blood-brain barrier more easily). Metabolism — primarily in the liver, enzymes (cytochrome P450 family) convert drugs into metabolites. Elimination — the kidneys excrete water-soluble metabolites in urine. Each stage affects how much drug reaches the target and for how long."
        },
        {
          id: "medicine-101-l07-c2",
          title: "Half-Life and Therapeutic Window",
          content:
            "A drug's half-life is the time required for its plasma concentration to fall by 50%. Short half-life drugs (e.g., ibuprofen, ~2 hours) must be dosed frequently; long half-life drugs (e.g., amiodarone, ~40 days) accumulate over time. The therapeutic window is the range between the minimum effective concentration (below which the drug doesn't work) and the toxic concentration (above which side effects become dangerous). Drugs with narrow therapeutic windows (warfarin, lithium, digoxin) require careful monitoring."
        },
        {
          id: "medicine-101-l07-c3",
          title: "Pharmacodynamics: What a Drug Does to the Body",
          content:
            "Pharmacodynamics studies how drugs produce their effects. Most drugs work by binding to receptors — protein molecules on or inside cells. An agonist activates the receptor (e.g., morphine activates opioid receptors to relieve pain). An antagonist blocks the receptor without activating it (e.g., naloxone blocks opioid receptors, reversing overdose). Drug potency refers to the dose needed for an effect; efficacy refers to the maximum effect achievable. Understanding receptor interactions helps predict both therapeutic effects and side effects."
        }
      ],
      flashcards: [
        { id: "medicine-101-l07-f1", front: "ADME", back: "Absorption, Distribution, Metabolism, Elimination — the four phases of pharmacokinetics describing a drug's journey through the body" },
        { id: "medicine-101-l07-f2", front: "Drug half-life", back: "The time required for the plasma concentration of a drug to decrease by 50%" },
        { id: "medicine-101-l07-f3", front: "Therapeutic window", back: "The concentration range between the minimum effective dose and the toxic dose — narrow for warfarin, lithium, digoxin" },
        { id: "medicine-101-l07-f4", front: "Agonist vs. antagonist", back: "Agonist: binds and activates a receptor. Antagonist: binds and blocks a receptor without activating it" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Clinical Reasoning  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l08",
      title: "Vital Signs and Clinical Reasoning",
      type: "interactive",
      duration: 14,
      objectives: [
        "Interpret the five vital signs and recognize abnormal values",
        "Apply evidence-based medicine principles to clinical decisions",
        "Distinguish between sensitivity and specificity of diagnostic tests"
      ],
      chunks: [
        {
          id: "medicine-101-l08-c1",
          title: "The Five Vital Signs",
          content:
            "Vital signs are the first clinical data gathered for any patient. (1) Heart rate: normal 60–100 bpm; tachycardia (>100) may indicate fever, dehydration, or cardiac issues. (2) Blood pressure: normal ~120/80 mmHg; hypertension (>140/90) damages vessels over time. (3) Respiratory rate: normal 12–20 breaths/min. (4) Temperature: normal ~37 °C; fever suggests infection or inflammation. (5) Oxygen saturation (SpO₂): normal 95–100%; below 90% indicates hypoxemia. Vital signs are fast, cheap, and reveal life-threatening changes before labs return."
        },
        {
          id: "medicine-101-l08-c2",
          title: "Evidence-Based Medicine",
          content:
            "Evidence-based medicine (EBM) integrates three pillars: the best available research evidence, clinical expertise, and patient values/preferences. The hierarchy of evidence places systematic reviews and meta-analyses at the top, followed by randomized controlled trials (RCTs), cohort studies, case-control studies, case reports, and expert opinion at the bottom. EBM replaced 'authority-based medicine' — the idea that a senior doctor's experience alone determines treatment. Modern clinicians ask: what does the data show?"
        },
        {
          id: "medicine-101-l08-c3",
          title: "Diagnostic Test Accuracy",
          content:
            "Sensitivity measures a test's ability to correctly identify those WITH the disease (true positive rate). A highly sensitive test rarely misses a case — good for screening. Specificity measures the ability to correctly identify those WITHOUT the disease (true negative rate). A highly specific test rarely gives false positives — good for confirming a diagnosis. The ideal test is both sensitive and specific, but in practice, increasing one often decreases the other. Clinicians choose tests based on whether missing a case or a false alarm is more dangerous."
        }
      ],
      interactiveActivities: [
        {
          id: "medicine-101-l08-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Normal Finding", "Abnormal Finding"],
          items: [
            { text: "Heart rate 72 bpm at rest", bucket: "Normal Finding" },
            { text: "Blood pressure 180/110 mmHg", bucket: "Abnormal Finding" },
            { text: "Respiratory rate 16 breaths/min", bucket: "Normal Finding" },
            { text: "SpO₂ of 85% on room air", bucket: "Abnormal Finding" },
            { text: "Temperature 37.1 °C", bucket: "Normal Finding" },
            { text: "Heart rate 130 bpm at rest", bucket: "Abnormal Finding" },
            { text: "Blood pressure 118/76 mmHg", bucket: "Normal Finding" },
            { text: "Temperature 39.5 °C", bucket: "Abnormal Finding" }
          ]
        }
      ],
      flashcards: [
        { id: "medicine-101-l08-f1", front: "Tachycardia", back: "Heart rate above 100 bpm at rest — may indicate fever, dehydration, pain, anxiety, or cardiac arrhythmia" },
        { id: "medicine-101-l08-f2", front: "Hypertension", back: "Persistently elevated blood pressure (>140/90 mmHg) — a major risk factor for stroke, heart disease, and kidney damage" },
        { id: "medicine-101-l08-f3", front: "Sensitivity of a test", back: "The proportion of true positives detected — a sensitive test is good for ruling OUT disease (SnNOut: Sensitive, Negative, rule Out)" },
        { id: "medicine-101-l08-f4", front: "Specificity of a test", back: "The proportion of true negatives detected — a specific test is good for ruling IN disease (SpPIn: Specific, Positive, rule In)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Pharmacology & Clinical Reasoning Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l09",
      title: "Pharmacology & Clinical Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of pharmacology principles and clinical reasoning"],
      questions: [
        {
          id: "medicine-101-l09-q1",
          text: "A drug with a narrow therapeutic window requires:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "No monitoring — it is very safe" },
            { id: "b", text: "Careful dose monitoring because the effective and toxic doses are close together" },
            { id: "c", text: "Only topical administration" },
            { id: "d", text: "A very long half-life" }
          ],
          correctOptionId: "b",
          explanation: "Narrow therapeutic window means a small difference between effective and toxic concentrations, requiring close monitoring."
        },
        {
          id: "medicine-101-l09-q2",
          text: "In the ADME model, metabolism primarily occurs in the:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Kidneys" },
            { id: "b", text: "Lungs" },
            { id: "c", text: "Liver" },
            { id: "d", text: "Small intestine" }
          ],
          correctOptionId: "c",
          explanation: "The liver is the primary site of drug metabolism, using enzymes (especially cytochrome P450) to convert drugs into metabolites."
        },
        {
          id: "medicine-101-l09-q3",
          text: "A test with high sensitivity is best used for:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Confirming a diagnosis" },
            { id: "b", text: "Screening — it rarely misses true cases" },
            { id: "c", text: "Replacing clinical judgment entirely" },
            { id: "d", text: "Measuring drug half-life" }
          ],
          correctOptionId: "b",
          explanation: "High sensitivity catches nearly all true positives, making it ideal for screening where missing a case would be dangerous."
        },
        {
          id: "medicine-101-l09-q4",
          text: "An antagonist drug works by:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Activating receptors to produce a stronger effect" },
            { id: "b", text: "Blocking receptors without activating them" },
            { id: "c", text: "Increasing the half-life of other drugs" },
            { id: "d", text: "Speeding up drug elimination" }
          ],
          correctOptionId: "b",
          explanation: "Antagonists bind to receptors but do not activate them, blocking the action of agonists (e.g., naloxone blocks opioid receptors)."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Medicine Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "medicine-101-l10",
      title: "Mastery Quiz: Medicine Foundations",
      type: "quiz",
      duration: 12,
      objectives: ["Synthesize all medicine foundations concepts"],
      questions: [
        {
          id: "medicine-101-l10-q1",
          text: "A patient presents with SpO₂ of 88%. This value is:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Within the normal range" },
            { id: "b", text: "Below normal and indicates potential hypoxemia" },
            { id: "c", text: "Only concerning in children" },
            { id: "d", text: "A measure of blood glucose" }
          ],
          correctOptionId: "b",
          explanation: "Normal SpO₂ is 95–100%. A reading of 88% indicates hypoxemia and may require supplemental oxygen."
        },
        {
          id: "medicine-101-l10-q2",
          text: "Vaccines produce immunity by:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Killing all pathogens currently in the body" },
            { id: "b", text: "Providing antibiotics to prevent infection" },
            { id: "c", text: "Exposing the immune system to a harmless form of a pathogen to generate memory cells" },
            { id: "d", text: "Bypassing the immune system entirely" }
          ],
          correctOptionId: "c",
          explanation: "Vaccines trigger adaptive immunity without causing disease, producing memory cells for rapid future response."
        },
        {
          id: "medicine-101-l10-q3",
          text: "Which level of evidence is considered strongest in EBM?",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Expert opinion" },
            { id: "b", text: "Case reports" },
            { id: "c", text: "Systematic reviews and meta-analyses" },
            { id: "d", text: "Anecdotal evidence" }
          ],
          correctOptionId: "c",
          explanation: "Systematic reviews pool data from multiple studies, providing the most reliable evidence for clinical decisions."
        },
        {
          id: "medicine-101-l10-q4",
          text: "Homeostasis is disrupted when:",
          skillId: "medicine-101-skill-core",
          options: [
            { id: "a", text: "Negative feedback loops function correctly" },
            { id: "b", text: "The body maintains blood pH at 7.4" },
            { id: "c", text: "Feedback mechanisms fail and variables deviate significantly from set points" },
            { id: "d", text: "A positive feedback loop terminates normally" }
          ],
          correctOptionId: "c",
          explanation: "Disease often results from failure of homeostatic mechanisms — when the body can no longer maintain stable internal conditions."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
