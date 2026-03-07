import type { LearningModule } from "@/lib/modules/types";

export const nursing_101_Module: LearningModule = {
  "id": "nursing-101",
  "title": "Nursing Foundations",
  "description": "Master the essential principles of professional nursing — from the nursing process and patient assessment to infection control, medication administration, ethical practice, and clinical documentation.",
  "subject": "Nursing",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "healthcare",
    "nursing"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Apply the five steps of the nursing process to organize patient care systematically",
    "Perform a head-to-toe patient assessment and accurately measure vital signs",
    "Implement standard precautions and infection control practices in clinical settings",
    "Administer medications safely using the rights of medication administration",
    "Uphold ethical principles including patient autonomy, confidentiality, and informed consent",
    "Construct SOAP notes, nursing care plans, and SBAR handoff communications",
    "Demonstrate therapeutic communication techniques with patients and interdisciplinary teams"
  ],
  "lessons": [
    {
      "id": "nursing-101-l01",
      "title": "The Nursing Process",
      "type": "video",
      "duration": 12,
      "objectives": [
        "List the five steps of the nursing process in order",
        "Explain the purpose of each step using clinical examples",
        "Describe how the nursing process guides evidence-based care"
      ],
      "chunks": [
        {
          "id": "nursing-101-l01-c1",
          "title": "Assessment and Nursing Diagnosis",
          "content": "The nursing process is a five-step method nurses use to provide patient-centered care: Assessment, Diagnosis, Planning, Implementation, and Evaluation (ADPIE). The first step, Assessment, is the foundation. During this phase, nurses gather subjective data (what the patient says, like 'I feel dizzy') and objective data (measurable facts, like blood pressure readings or lab results). This information leads to the second step, Diagnosis. A nursing diagnosis differs from a medical diagnosis; it describes a patient's response to a health problem. For example, while a doctor diagnoses 'pneumonia' (the disease), a nurse diagnoses 'Impaired Gas Exchange' (the patient's response), which guides nursing-specific care."
        },
        {
          "id": "nursing-101-l01-c2",
          "title": "Planning and Implementation",
          "content": "In the Planning phase, the nurse collaborates with the patient to set SMART goals—Specific, Measurable, Achievable, Relevant, and Time-bound. An example is, 'The patient will walk 20 feet with a walker by the end of the day.' These goals guide the development of a care plan. The next step is Implementation, where the nurse executes the plan. This involves performing interventions such as administering medications, providing wound care, educating the patient, and collaborating with other healthcare team members. Throughout this phase, the nurse continuously monitors the patient's condition and documents all actions taken, ensuring care is safe and responsive."
        },
        {
          "id": "nursing-101-l01-c3",
          "title": "Evaluation and Reassessment",
          "content": "Evaluation is the final step, where the nurse determines if the patient has met the goals set during the Planning phase. If a goal was met, the intervention may be continued or discontinued. If a goal was not met, the process becomes cyclical. The nurse must reassess the situation, analyze why the goal was not achieved, and modify the care plan. This may involve revising the nursing diagnosis, setting new goals, or trying different interventions. This continuous loop of reassessment ensures that patient care is dynamic and adjusted based on the patient's progress and changing needs."
        }
      ],
      "flashcards": [
        {
          "id": "nursing-101-l01-f1",
          "front": "What does ADPIE stand for?",
          "back": "Assessment, Diagnosis, Planning, Implementation, Evaluation — the five steps of the nursing process"
        },
        {
          "id": "nursing-101-l01-f2",
          "front": "Subjective vs. objective data",
          "back": "Subjective: what the patient tells you (symptoms, feelings). Objective: measurable findings (vital signs, lab values, observations)"
        },
        {
          "id": "nursing-101-l01-f3",
          "front": "How does a nursing diagnosis differ from a medical diagnosis?",
          "back": "A nursing diagnosis focuses on the patient's response to illness (e.g., 'Risk for Falls'), while a medical diagnosis identifies the disease (e.g., 'osteoporosis')"
        },
        {
          "id": "nursing-101-l01-f4",
          "front": "What makes the nursing process cyclical?",
          "back": "If goals are not met during Evaluation, the nurse reassesses and revises the care plan, restarting the cycle"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-101-l01-a1",
          "type": "diagram",
          "title": "The ADPIE Cycle",
          "content": "A circular diagram illustrating the five steps of the nursing process (Assessment, Diagnosis, Planning, Implementation, Evaluation) to emphasize its continuous nature."
        }
      ]
    },
    {
      "id": "nursing-101-l02",
      "title": "Patient Assessment and Vital Signs",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Perform a systematic head-to-toe assessment",
        "Measure and interpret the five vital signs",
        "Document assessment findings accurately and concisely"
      ],
      "chunks": [
        {
          "id": "nursing-101-l02-c1",
          "title": "Head-to-Toe Assessment",
          "content": "A head-to-toe assessment is a systematic physical examination to gather comprehensive data about a patient's health. It begins with a general survey of the patient's consciousness, posture, and appearance. The nurse then methodically evaluates each body system, starting from the head and moving to the feet. This includes assessing neurological status, listening to heart and lung sounds, examining the abdomen, checking skin integrity, and evaluating musculoskeletal strength and range of motion. Following a consistent sequence ensures that no critical details are missed, allowing for a thorough and efficient evaluation of the patient's condition."
        },
        {
          "id": "nursing-101-l02-c2",
          "title": "The Five Vital Signs",
          "content": "Vital signs are key indicators of a person's health. The five traditional signs are temperature, pulse, respiration rate, blood pressure, and pain. Many clinicians also consider oxygen saturation (SpO₂) a sixth vital sign. For adults, normal ranges are typically: Temperature 36.1–37.2 °C (97–99 °F), Pulse 60–100 beats/min, Respiration 12–20 breaths/min, Blood Pressure <120/80 mmHg, and SpO₂ ≥95%. Pain is assessed on a 0-10 scale. Deviations from these ranges, such as a high heart rate (tachycardia) or low blood pressure (hypotension), can signal a change in a patient's condition and require further investigation. Accurate measurement requires calibrated equipment and consistent technique."
        },
        {
          "id": "nursing-101-l02-c3",
          "title": "Documentation of Assessment",
          "content": "Accurate and timely documentation is a critical nursing responsibility. It creates a legal record of patient care and facilitates communication among the healthcare team. Assessment findings should be recorded objectively and specifically. For example, instead of 'lungs sound fine,' a nurse should document 'Lungs clear to auscultation bilaterally, respiratory rate 16, SpO₂ 98% on room air.' Any changes from the patient's baseline should be noted, along with the time of observation and any interventions performed. The principle 'if it wasn't documented, it wasn't done' highlights the importance of thorough charting for patient safety and legal protection."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Classify Assessment Data",
          "description": "Sort each clinical finding into Subjective Data or Objective Data.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "subjective",
                "label": "Subjective Data"
              },
              {
                "id": "objective",
                "label": "Objective Data"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Patient states 'I feel dizzy'",
                "correctBucketId": "subjective"
              },
              {
                "id": "i2",
                "label": "Blood pressure 142/90 mmHg",
                "correctBucketId": "objective"
              },
              {
                "id": "i3",
                "label": "Patient reports nausea after eating",
                "correctBucketId": "subjective"
              },
              {
                "id": "i4",
                "label": "SpO₂ reading of 94%",
                "correctBucketId": "objective"
              },
              {
                "id": "i5",
                "label": "Patient describes pain as 7/10 in the right knee",
                "correctBucketId": "subjective"
              },
              {
                "id": "i6",
                "label": "Temperature 38.4 °C (101.1 °F)",
                "correctBucketId": "objective"
              },
              {
                "id": "i7",
                "label": "Patient says 'I haven't slept in two days'",
                "correctBucketId": "subjective"
              },
              {
                "id": "i8",
                "label": "Heart rate 112 bpm on monitor",
                "correctBucketId": "objective"
              }
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "nursing-101-l02-f1",
          "front": "Normal adult resting heart rate",
          "back": "60–100 beats per minute"
        },
        {
          "id": "nursing-101-l02-f2",
          "front": "Normal adult blood pressure",
          "back": "Less than 120/80 mmHg (systolic/diastolic)"
        },
        {
          "id": "nursing-101-l02-f3",
          "front": "Cephalocaudal assessment",
          "back": "A systematic examination performed from head to toe to ensure no body system is overlooked"
        },
        {
          "id": "nursing-101-l02-f4",
          "front": "Normal adult respiratory rate",
          "back": "12–20 breaths per minute; rates above 20 (tachypnea) or below 12 (bradypnea) are abnormal"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        },
        {
          "id": "nursing-101-l02-a2",
          "type": "chart",
          "title": "Normal Adult Vital Signs",
          "content": "A reference chart showing the normal ranges for adult temperature, pulse, respirations, blood pressure, and oxygen saturation."
        }
      ]
    },
    {
      "id": "nursing-101-l03",
      "title": "Nursing Process & Assessment Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of the nursing process and patient assessment techniques"
      ],
      "questions": [
        {
          "id": "nursing-101-l03-q1",
          "text": "What is the correct order of the nursing process?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Assessment, Diagnosis, Planning, Implementation, Evaluation"
            },
            {
              "id": "b",
              "text": "Diagnosis, Assessment, Implementation, Planning, Evaluation"
            },
            {
              "id": "c",
              "text": "Planning, Assessment, Diagnosis, Evaluation, Implementation"
            },
            {
              "id": "d",
              "text": "Implementation, Evaluation, Assessment, Diagnosis, Planning"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The nursing process follows ADPIE: Assessment first gathers data, Diagnosis identifies the problem, Planning sets goals, Implementation carries out interventions, and Evaluation determines outcomes."
        },
        {
          "id": "nursing-101-l03-q2",
          "text": "A patient tells the nurse 'My chest feels tight.' This is an example of:",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Objective data"
            },
            {
              "id": "b",
              "text": "Subjective data"
            },
            {
              "id": "c",
              "text": "A nursing diagnosis"
            },
            {
              "id": "d",
              "text": "An evaluation finding"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Subjective data comes from the patient's own perception and cannot be independently measured — statements about symptoms, feelings, and sensations."
        },
        {
          "id": "nursing-101-l03-q3",
          "text": "Which vital sign finding in an adult requires immediate follow-up?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Heart rate 72 bpm"
            },
            {
              "id": "b",
              "text": "Blood pressure 118/76 mmHg"
            },
            {
              "id": "c",
              "text": "Respiratory rate 28 breaths/min"
            },
            {
              "id": "d",
              "text": "Temperature 36.8 °C"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A respiratory rate of 28 is tachypnea (normal is 12–20). This could indicate respiratory distress, pain, fever, or metabolic acidosis and requires prompt assessment."
        },
        {
          "id": "nursing-101-l03-q4",
          "text": "What distinguishes a nursing diagnosis from a medical diagnosis?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A nursing diagnosis identifies the disease causing symptoms"
            },
            {
              "id": "b",
              "text": "A nursing diagnosis focuses on the patient's response to a health condition"
            },
            {
              "id": "c",
              "text": "A nursing diagnosis can only be made by a physician"
            },
            {
              "id": "d",
              "text": "A nursing diagnosis requires laboratory confirmation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Nursing diagnoses address human responses to actual or potential health problems (e.g., 'Impaired Mobility'), whereas medical diagnoses identify the disease itself (e.g., 'fractured femur')."
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
          "id": "nursing-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "nursing-101-l04",
      "title": "Infection Control and Patient Safety",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the chain of infection and how to break each link",
        "Demonstrate correct hand hygiene and PPE use",
        "Identify key patient safety protocols including fall prevention"
      ],
      "chunks": [
        {
          "id": "nursing-101-l04-c1",
          "title": "Chain of Infection and Standard Precautions",
          "content": "The chain of infection describes how pathogens spread. It consists of six links: an infectious agent (germ), a reservoir (where it lives), a portal of exit (how it leaves), a mode of transmission (how it travels), a portal of entry (how it enters a new host), and a susceptible host. Breaking any link stops the infection. Standard precautions are infection control practices applied to every patient. They include proper hand hygiene, using Personal Protective Equipment (PPE) when anticipating contact with body fluids, safe injection practices, and safe handling of contaminated materials. Effective hand hygiene is the single most important way to prevent healthcare-associated infections."
        },
        {
          "id": "nursing-101-l04-c2",
          "title": "Personal Protective Equipment (PPE)",
          "content": "PPE creates a barrier between healthcare workers and infectious agents. The correct sequence for putting on (donning) full PPE is: hand hygiene, gown, mask/respirator, eye protection, and finally gloves. The sequence for taking off (doffing) is designed to prevent self-contamination: remove gloves, eye protection, gown, and then the mask, followed by hand hygiene. In addition to standard precautions, transmission-based precautions are used for specific diseases. Contact precautions (e.g., for MRSA) require a gown and gloves. Droplet precautions (e.g., for influenza) require a surgical mask. Airborne precautions (e.g., for tuberculosis) require an N95 respirator and a negative-pressure room."
        },
        {
          "id": "nursing-101-l04-c3",
          "title": "Patient Safety and Fall Prevention",
          "content": "Patient safety is a top nursing priority. Falls are the most common adverse event in hospitals, with risk factors including advanced age, certain medications, confusion, and mobility issues. Evidence-based fall prevention strategies include hourly rounding, keeping the call light within reach, using non-slip footwear, and activating bed alarms for high-risk patients. Another key safety measure, mandated by The Joint Commission's National Patient Safety Goals, is using at least two patient identifiers (e.g., full name and date of birth) before administering medications, performing procedures, or transfusing blood to ensure the correct patient receives the correct care."
        }
      ],
      "flashcards": [
        {
          "id": "nursing-101-l04-f1",
          "front": "Six links in the chain of infection",
          "back": "Infectious agent → Reservoir → Portal of exit → Mode of transmission → Portal of entry → Susceptible host"
        },
        {
          "id": "nursing-101-l04-f2",
          "front": "Correct PPE donning order",
          "back": "Hand hygiene → Gown → Mask/respirator → Eye protection → Gloves"
        },
        {
          "id": "nursing-101-l04-f3",
          "front": "When to use airborne precautions",
          "back": "For pathogens that remain suspended in air (tuberculosis, measles, varicella) — requires N95 respirator and negative-pressure room"
        },
        {
          "id": "nursing-101-l04-f4",
          "front": "Two patient identifiers",
          "back": "Full name and date of birth — required before medications, procedures, and blood transfusions per Joint Commission NPSGs"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-101-l04-a1",
          "type": "diagram",
          "title": "PPE Donning & Doffing Sequence",
          "content": "A two-panel visual guide showing the correct step-by-step order for putting on (donning) and taking off (doffing) Personal Protective Equipment."
        }
      ]
    },
    {
      "id": "nursing-101-l05",
      "title": "Medication Administration",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Apply the rights of medication administration to prevent errors",
        "Differentiate common medication routes and their characteristics",
        "Perform basic dosage calculations"
      ],
      "chunks": [
        {
          "id": "nursing-101-l05-c1",
          "title": "The Rights of Medication Administration",
          "content": "To prevent medication errors, nurses use a checklist known as the 'rights' of medication administration. The core rights are: Right Patient (verified with two identifiers), Right Medication (checked against the order), Right Dose (calculated correctly), Right Route (e.g., oral, IV, IM), Right Time (within the facility's window), and Right Documentation (charted immediately after giving). Many institutions add more rights, such as Right Reason (is the drug appropriate?), Right Response (did it work as intended?), and Right to Refuse (patients can decline medication). Adhering to these rights is a critical safety measure to prevent patient harm."
        },
        {
          "id": "nursing-101-l05-c2",
          "title": "Routes of Administration",
          "content": "The route of administration affects how quickly a medication works. Intravenous (IV) is the fastest, with an onset of seconds to minutes, making it ideal for emergencies. Intramuscular (IM) injections are absorbed over 10-30 minutes from large muscles. Subcutaneous (subQ) injections into fatty tissue, used for drugs like insulin, have a slower absorption. The oral (PO) route is most common and convenient but has the slowest onset and is affected by digestion and liver metabolism (the 'first-pass effect'). Other routes include sublingual (under the tongue), transdermal (skin patch), topical (on the skin), and inhaled, each with specific uses and absorption characteristics."
        },
        {
          "id": "nursing-101-l05-c3",
          "title": "Basic Dosage Calculations",
          "content": "Nurses must ensure the prescribed medication dose is administered accurately. A common formula is: (Desired dose / Available dose) × Quantity = Amount to administer. For example, if a doctor orders 500 mg and the tablets on hand are 250 mg, the calculation is (500 mg / 250 mg) × 1 tablet = 2 tablets. For IV infusions, a different formula calculates the drip rate. In pediatrics, dosing is often based on the child's weight in kilograms. If a calculation results in an unusual amount (e.g., 10 tablets or 50 mL for an injection), the nurse must stop, recheck the math, and verify the order with the provider or pharmacist to prevent a serious error."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-101-l05-a1",
          "type": "matching_pairs",
          "title": "Match the Route to Its Characteristic",
          "description": "Pair each medication route with its key feature.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "left": "Intravenous (IV)",
                "right": "Fastest onset — seconds to minutes; used in emergencies"
              },
              {
                "left": "Oral (PO)",
                "right": "Most common route; requires functioning GI tract"
              },
              {
                "left": "Intramuscular (IM)",
                "right": "Injected into muscle; absorbs over 10–30 minutes"
              },
              {
                "left": "Subcutaneous (subQ)",
                "right": "Injected into fatty tissue; used for insulin and heparin"
              },
              {
                "left": "Sublingual",
                "right": "Dissolves under the tongue; bypasses first-pass metabolism"
              },
              {
                "left": "Transdermal",
                "right": "Absorbed through skin via patch; provides sustained release"
              }
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "nursing-101-l05-f1",
          "front": "The six traditional rights of medication administration",
          "back": "Right Patient, Right Medication, Right Dose, Right Route, Right Time, Right Documentation"
        },
        {
          "id": "nursing-101-l05-f2",
          "front": "First-pass metabolism",
          "back": "Oral drugs are absorbed from the GI tract and pass through the liver before reaching systemic circulation, which can reduce the active drug amount"
        },
        {
          "id": "nursing-101-l05-f3",
          "front": "Basic dosage formula",
          "back": "Desired dose ÷ Available dose × Quantity = Amount to administer"
        },
        {
          "id": "nursing-101-l05-f4",
          "front": "When to question a dosage calculation",
          "back": "Any result that seems unusually large or small (e.g., 10 tablets, 50 mL IM) should be rechecked and verified with pharmacy"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        },
        {
          "id": "nursing-101-l05-a2",
          "type": "diagram",
          "title": "Common Injection Sites",
          "content": "An anatomical illustration showing the recommended sites for Intramuscular (deltoid, ventrogluteal, vastus lateralis) and Subcutaneous injections."
        }
      ]
    },
    {
      "id": "nursing-101-l06",
      "title": "Safety & Medications Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of infection control, patient safety, and medication administration"
      ],
      "questions": [
        {
          "id": "nursing-101-l06-q1",
          "text": "Which is the FIRST item donned when applying full PPE?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Gloves"
            },
            {
              "id": "b",
              "text": "Gown (after hand hygiene)"
            },
            {
              "id": "c",
              "text": "N95 respirator"
            },
            {
              "id": "d",
              "text": "Eye protection"
            }
          ],
          "correctOptionId": "b",
          "explanation": "After performing hand hygiene, the gown is donned first, followed by mask/respirator, eye protection, and gloves last. This sequence minimizes contamination risk."
        },
        {
          "id": "nursing-101-l06-q2",
          "text": "A patient is prescribed 750 mg of a medication. The available tablets are 250 mg each. How many tablets should the nurse administer?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2 tablets"
            },
            {
              "id": "b",
              "text": "3 tablets"
            },
            {
              "id": "c",
              "text": "4 tablets"
            },
            {
              "id": "d",
              "text": "1.5 tablets"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using the formula: 750 mg ÷ 250 mg × 1 tablet = 3 tablets."
        },
        {
          "id": "nursing-101-l06-q3",
          "text": "Which transmission-based precaution requires an N95 respirator and a negative-pressure room?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Contact precautions"
            },
            {
              "id": "b",
              "text": "Droplet precautions"
            },
            {
              "id": "c",
              "text": "Airborne precautions"
            },
            {
              "id": "d",
              "text": "Standard precautions only"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Airborne precautions are used for pathogens that remain suspended in air over long distances (tuberculosis, measles, varicella) and require an N95 respirator and negative-pressure room."
        },
        {
          "id": "nursing-101-l06-q4",
          "text": "Which is the MOST effective single intervention to reduce healthcare-associated infections?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Wearing gloves at all times"
            },
            {
              "id": "b",
              "text": "Administering prophylactic antibiotics"
            },
            {
              "id": "c",
              "text": "Proper hand hygiene"
            },
            {
              "id": "d",
              "text": "Using UV light sterilization in hallways"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The CDC identifies hand hygiene as the single most important measure to prevent HAIs, capable of reducing infection rates by up to 50%."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "nursing-101-l07",
      "title": "Ethics and Communication in Nursing",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain the four core bioethical principles in nursing practice",
        "Describe informed consent and patient rights",
        "Apply therapeutic communication techniques in clinical interactions"
      ],
      "chunks": [
        {
          "id": "nursing-101-l07-c1",
          "title": "Ethical Principles and Patient Rights",
          "content": "Nursing practice is guided by core ethical principles. Autonomy respects the patient's right to make their own healthcare decisions. Beneficence means acting in the patient's best interest ('doing good'). Nonmaleficence means avoiding harm ('do no harm'). Justice requires treating all patients fairly and equitably. The American Nurses Association (ANA) Code of Ethics provides a framework for professional conduct, emphasizing patient advocacy and confidentiality. Patients have the right to refuse treatment, access their medical records, and be treated with dignity. Nurses must honor these rights, even when they present ethical dilemmas."
        },
        {
          "id": "nursing-101-l07-c2",
          "title": "Informed Consent and HIPAA",
          "content": "Informed consent is the process of ensuring a patient understands a procedure's risks, benefits, and alternatives before agreeing to it. While the provider explains the procedure, the nurse's role is to witness the patient's signature, verify their understanding, and advocate for them if they seem confused or coerced. Separately, the Health Insurance Portability and Accountability Act (HIPAA) is a federal law that protects the privacy of patient health information (PHI). Nurses must safeguard PHI by not discussing patients in public areas, logging out of electronic health records, and sharing information only with those directly involved in the patient's care. HIPAA violations can result in severe legal and professional consequences."
        },
        {
          "id": "nursing-101-l07-c3",
          "title": "Therapeutic Communication",
          "content": "Therapeutic communication is a patient-centered interaction that builds trust and promotes healing. Key techniques include using open-ended questions (e.g., 'Tell me more about your pain') to encourage dialogue, and active listening to show engagement. Reflecting or restating what the patient says confirms understanding. Conversely, nurses should avoid non-therapeutic techniques like giving false reassurance ('Everything will be fine'), offering unsolicited advice, or changing the subject. It is also vital to be culturally sensitive, as communication styles and norms vary. Adapting communication to the individual patient enhances the nurse-patient relationship and improves care outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "nursing-101-l07-f1",
          "front": "Four bioethical principles",
          "back": "Autonomy (self-determination), Beneficence (do good), Nonmaleficence (do no harm), Justice (fairness)"
        },
        {
          "id": "nursing-101-l07-f2",
          "front": "Nurse's role in informed consent",
          "back": "Witness the signature, verify patient understanding, and advocate if the patient seems confused — the provider is responsible for explaining the procedure"
        },
        {
          "id": "nursing-101-l07-f3",
          "front": "HIPAA",
          "back": "Health Insurance Portability and Accountability Act — protects patient health information (PHI) from unauthorized disclosure"
        },
        {
          "id": "nursing-101-l07-f4",
          "front": "Therapeutic vs. non-therapeutic communication",
          "back": "Therapeutic: open-ended questions, active listening, restating. Non-therapeutic: false reassurance, giving unsolicited advice, changing the subject"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-101-l07-a1",
          "type": "infographic",
          "title": "The Four Bioethical Principles",
          "content": "A visual summary defining Autonomy, Beneficence, Nonmaleficence, and Justice with simple icons and examples for each."
        }
      ]
    },
    {
      "id": "nursing-101-l08",
      "title": "Documentation and Care Planning",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Construct a SOAP note from clinical scenario data",
        "Develop a basic nursing care plan with goals and interventions",
        "Use SBAR format for clinical handoff communication"
      ],
      "chunks": [
        {
          "id": "nursing-101-l08-c1",
          "title": "SOAP Notes",
          "content": "SOAP notes are a structured method for documenting patient information. The acronym stands for: Subjective (what the patient says, e.g., 'My incision hurts, a 6/10 pain'), Objective (measurable data, e.g., 'T: 37.8°C, incision site with 2 cm erythema, no drainage'), Assessment (the nurse's interpretation, e.g., 'Acute pain related to surgical incision; risk for infection'), and Plan (the next steps, e.g., 'Administer prescribed analgesic, monitor site, and reassess pain in 30 minutes'). This format organizes clinical data logically, improving clarity and communication."
        },
        {
          "id": "nursing-101-l08-c2",
          "title": "Nursing Care Plans",
          "content": "A nursing care plan is a formal document that provides individualized, goal-directed care. It includes several key components: a nursing diagnosis (e.g., 'Risk for Impaired Skin Integrity'), an expected outcome with measurable criteria (e.g., 'Patient's skin will remain intact throughout hospital stay'), a list of nursing interventions with rationales (e.g., 'Reposition patient every 2 hours to relieve pressure'), and an evaluation of whether the outcome was met. Care plans are dynamic and should be updated as the patient's condition changes, ensuring care remains relevant and effective."
        },
        {
          "id": "nursing-101-l08-c3",
          "title": "SBAR Communication",
          "content": "SBAR is a standardized communication tool used to relay critical patient information clearly and concisely, especially during shift changes or when contacting a provider. The acronym stands for: Situation (a brief statement of the problem, e.g., 'Mr. Smith in Room 312 has new onset shortness of breath'), Background (relevant context, e.g., 'He is 2 days post-op from hip surgery with a history of COPD'), Assessment (the nurse's clinical findings, e.g., 'His SpO₂ has dropped to 89% and his respiratory rate is 26'), and Recommendation (what the nurse suggests, e.g., 'I recommend you come see him; should I apply oxygen?'). Using SBAR reduces errors by structuring communication."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nursing-101-l08-a1",
          "type": "sorting_buckets",
          "title": "Sort SBAR Components",
          "description": "Classify each statement into the correct SBAR category.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "situation",
                "label": "Situation"
              },
              {
                "id": "background",
                "label": "Background"
              },
              {
                "id": "assessment",
                "label": "Assessment"
              },
              {
                "id": "recommendation",
                "label": "Recommendation"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Patient in 204B has new onset chest pain",
                "correctBucketId": "situation"
              },
              {
                "id": "i2",
                "label": "History of hypertension and type 2 diabetes",
                "correctBucketId": "background"
              },
              {
                "id": "i3",
                "label": "BP 168/98, HR 110, diaphoretic, ECG shows ST elevation",
                "correctBucketId": "assessment"
              },
              {
                "id": "i4",
                "label": "Please come evaluate; I recommend a stat 12-lead ECG and cardiology consult",
                "correctBucketId": "recommendation"
              },
              {
                "id": "i5",
                "label": "Admitted two days ago for elective cholecystectomy",
                "correctBucketId": "background"
              },
              {
                "id": "i6",
                "label": "I believe this is a possible cardiac event requiring urgent intervention",
                "correctBucketId": "recommendation"
              }
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "nursing-101-l08-f1",
          "front": "SOAP",
          "back": "Subjective, Objective, Assessment, Plan — a structured format for clinical documentation"
        },
        {
          "id": "nursing-101-l08-f2",
          "front": "SBAR",
          "back": "Situation, Background, Assessment, Recommendation — a standardized handoff communication framework to reduce errors"
        },
        {
          "id": "nursing-101-l08-f3",
          "front": "Components of a nursing care plan",
          "back": "Nursing diagnosis, expected outcomes (measurable), interventions with rationales, and evaluation of outcome achievement"
        },
        {
          "id": "nursing-101-l08-f4",
          "front": "Why is SBAR important?",
          "back": "It ensures critical patient information is communicated clearly and completely during care transitions, reducing miscommunication-related errors"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-101-l08-a1",
          "type": "template",
          "title": "SBAR Handoff Tool",
          "content": "A fillable template showing the structure of an SBAR report with prompts for Situation, Background, Assessment, and Recommendation."
        }
      ]
    },
    {
      "id": "nursing-101-l09",
      "title": "Ethics & Documentation Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of nursing ethics, therapeutic communication, and clinical documentation"
      ],
      "questions": [
        {
          "id": "nursing-101-l09-q1",
          "text": "A patient refuses a blood transfusion based on religious beliefs. The nurse's BEST action is to:",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Administer the transfusion anyway because it is medically necessary"
            },
            {
              "id": "b",
              "text": "Respect the patient's decision, document the refusal, and notify the provider"
            },
            {
              "id": "c",
              "text": "Ask the family to convince the patient to accept the transfusion"
            },
            {
              "id": "d",
              "text": "Defer the decision until the next shift"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Autonomy is a core ethical principle. A competent patient has the right to refuse any treatment. The nurse must respect this decision, document it thoroughly, and communicate it to the care team."
        },
        {
          "id": "nursing-101-l09-q2",
          "text": "In the SBAR format, which section includes vital signs and clinical findings?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Situation"
            },
            {
              "id": "b",
              "text": "Background"
            },
            {
              "id": "c",
              "text": "Assessment"
            },
            {
              "id": "d",
              "text": "Recommendation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Assessment section of SBAR includes the nurse's clinical findings (vital signs, physical exam data) and professional judgment about the patient's condition."
        },
        {
          "id": "nursing-101-l09-q3",
          "text": "Which is an example of therapeutic communication?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "'Don't worry, everything will be fine.'"
            },
            {
              "id": "b",
              "text": "'Tell me more about what you're experiencing.'"
            },
            {
              "id": "c",
              "text": "'You should try not to think about it.'"
            },
            {
              "id": "d",
              "text": "'I know exactly how you feel.'"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Open-ended questions like 'Tell me more...' encourage the patient to share information and feelings, which is a core therapeutic communication technique."
        },
        {
          "id": "nursing-101-l09-q4",
          "text": "What is the 'A' component in a SOAP note?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Actions taken by the nurse during the shift"
            },
            {
              "id": "b",
              "text": "Allergies and adverse reactions"
            },
            {
              "id": "c",
              "text": "The nurse's clinical interpretation and nursing diagnosis"
            },
            {
              "id": "d",
              "text": "Administrations of prescribed medications"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Assessment in SOAP refers to the nurse's clinical judgment — the interpretation of the subjective and objective data, including the nursing diagnosis and progress toward goals."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "nursing-101-l10",
      "title": "Mastery Quiz: Nursing Foundations",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive mastery of nursing foundations across all module topics"
      ],
      "questions": [
        {
          "id": "nursing-101-l10-q1",
          "text": "During the Evaluation step of the nursing process, the nurse finds that the patient's pain goal was NOT met. The appropriate NEXT action is to:",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Document that the goal was not met and discontinue the care plan"
            },
            {
              "id": "b",
              "text": "Reassess the patient, modify the plan, and implement revised interventions"
            },
            {
              "id": "c",
              "text": "Repeat the same interventions and re-evaluate tomorrow"
            },
            {
              "id": "d",
              "text": "Delegate the reassessment to unlicensed personnel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The nursing process is cyclical: when evaluation shows goals are unmet, the nurse reassesses, revises the nursing diagnosis and care plan, and implements adjusted interventions."
        },
        {
          "id": "nursing-101-l10-q2",
          "text": "A nurse is preparing to administer an IM injection. Which site is recommended for adults due to its thick muscle mass and absence of major nerves?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dorsogluteal"
            },
            {
              "id": "b",
              "text": "Ventrogluteal"
            },
            {
              "id": "c",
              "text": "Dorsal forearm"
            },
            {
              "id": "d",
              "text": "Anterior thigh only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The ventrogluteal site is the preferred IM injection site for adults because it has dense muscle, minimal subcutaneous fat, and no major blood vessels or nerves nearby."
        },
        {
          "id": "nursing-101-l10-q3",
          "text": "A nurse discusses a patient's diagnosis loudly in the hospital cafeteria. This PRIMARILY violates:",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The principle of beneficence"
            },
            {
              "id": "b",
              "text": "HIPAA regulations on protecting patient health information"
            },
            {
              "id": "c",
              "text": "The nursing process Evaluation step"
            },
            {
              "id": "d",
              "text": "Standard precautions for infection control"
            }
          ],
          "correctOptionId": "b",
          "explanation": "HIPAA prohibits discussing identifiable patient health information in public areas. Violations can lead to civil penalties, criminal charges, and loss of nursing licensure."
        },
        {
          "id": "nursing-101-l10-q4",
          "text": "When removing PPE after caring for a patient on contact precautions, which item is removed FIRST?",
          "skillId": "nursing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Mask"
            },
            {
              "id": "b",
              "text": "Gown"
            },
            {
              "id": "c",
              "text": "Gloves"
            },
            {
              "id": "d",
              "text": "Eye protection"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Gloves are the most contaminated item and are removed first during doffing. The sequence then continues with eye protection, gown, and mask, followed by hand hygiene."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    }
  ]
};
