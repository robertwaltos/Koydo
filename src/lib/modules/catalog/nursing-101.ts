import type { LearningModule } from "@/lib/modules/types";

export const Nursing101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "The nursing process is a systematic, patient-centered framework with five steps: Assessment, Diagnosis, Planning, Implementation, and Evaluation (ADPIE). Assessment is the first and most critical step — the nurse collects subjective data (what the patient reports, such as pain level or symptoms) and objective data (measurable findings like blood pressure, temperature, and lab results). A thorough assessment forms the foundation for all subsequent care decisions. The nursing diagnosis differs from a medical diagnosis: it focuses on the patient's response to illness rather than the disease itself — for example, 'Impaired Gas Exchange' rather than 'pneumonia.'"
        },
        {
          "id": "nursing-101-l01-c2",
          "title": "Planning and Implementation",
          "content": "During Planning, the nurse establishes measurable, patient-centered goals and selects evidence-based interventions. Goals should be SMART — Specific, Measurable, Achievable, Relevant, and Time-bound. For example, 'Patient will ambulate 50 feet with a walker by discharge day 3.' Implementation is carrying out the care plan: administering medications, performing wound care, educating the patient, and coordinating with the interdisciplinary team. The nurse must continuously assess the patient during implementation, as conditions can change rapidly. Accurate documentation of every intervention is essential for continuity of care and legal protection."
        },
        {
          "id": "nursing-101-l01-c3",
          "title": "Evaluation and Reassessment",
          "content": "Evaluation is the final step where the nurse determines whether the patient has met the established goals. If a goal is met, the care plan may be continued or discontinued. If not met, the nurse reassesses, modifies the nursing diagnosis, adjusts the plan, and re-implements — making the nursing process cyclical rather than linear. For instance, if a patient's pain goal was 'rate pain ≤ 3/10 within one hour of analgesic,' but the patient still reports 6/10, the nurse would reassess the pain source, consult the provider, and adjust the intervention. This iterative loop ensures care is always responsive to the patient's evolving needs."
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
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "A head-to-toe assessment is a systematic physical examination performed in a cephalocaudal (head-to-foot) direction. It begins with a general survey — observing the patient's level of consciousness, posture, skin color, and overall appearance. The nurse then assesses each body region: neurological status (orientation, pupil reaction), respiratory (lung sounds, breathing pattern, SpO₂), cardiovascular (heart sounds, peripheral pulses, capillary refill), abdominal (bowel sounds, tenderness, distension), musculoskeletal (range of motion, strength), and integumentary (skin integrity, wounds, edema). Consistency in the assessment sequence prevents omissions in busy clinical settings."
        },
        {
          "id": "nursing-101-l02-c2",
          "title": "The Five Vital Signs",
          "content": "The five vital signs are temperature, pulse, respiration, blood pressure, and pain. Normal adult ranges: temperature 36.1–37.2 °C (97–99 °F), pulse 60–100 bpm, respirations 12–20 breaths/min, blood pressure <120/80 mmHg, and pain assessed on a 0–10 scale. SpO₂ (oxygen saturation) ≥95% is often considered a sixth vital sign. Abnormal findings — such as tachycardia (>100 bpm), hypotension (<90/60 mmHg), or tachypnea (>20/min) — may indicate deterioration. Vital signs should be measured with calibrated equipment, at consistent times, and compared with previous readings to identify trends rather than relying on a single value."
        },
        {
          "id": "nursing-101-l02-c3",
          "title": "Documentation of Assessment",
          "content": "Accurate documentation transforms assessment findings into a permanent legal record and communication tool. Each finding should be recorded objectively and promptly — for example, 'Lungs clear to auscultation bilaterally, RR 16, SpO₂ 98% on room air' rather than 'lungs sound fine.' Document deviations from baseline with the time noted and any interventions performed. Electronic health records (EHRs) standardize charting with drop-down fields and free-text areas. The principle 'if it wasn't documented, it wasn't done' underscores that thorough charting protects the patient, the nurse, and the healthcare institution."
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
          "content": "The chain of infection has six links: infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host. Breaking any link prevents infection spread. Standard precautions — applied to every patient regardless of diagnosis — include hand hygiene before and after patient contact, use of personal protective equipment (PPE) when exposure to blood or body fluids is anticipated, safe injection practices, and proper handling of contaminated linens and sharps. The CDC estimates that proper hand hygiene alone can reduce healthcare-associated infections (HAIs) by up to 50%. Alcohol-based hand rub is preferred unless hands are visibly soiled, in which case soap and water with 20 seconds of friction is required."
        },
        {
          "id": "nursing-101-l04-c2",
          "title": "Personal Protective Equipment (PPE)",
          "content": "PPE creates a barrier between the nurse and infectious material. The correct donning order is: hand hygiene → gown → mask or respirator → eye protection → gloves. Doffing (removal) follows the reverse principle to avoid self-contamination: gloves (most contaminated) → eye protection → gown → mask → hand hygiene. Transmission-based precautions add to standard precautions: contact precautions (gown and gloves for MRSA, C. difficile), droplet precautions (surgical mask for influenza, pertussis), and airborne precautions (N95 respirator and negative-pressure room for tuberculosis, measles, varicella). Selecting the correct level of PPE is determined by the mode of transmission of the specific pathogen."
        },
        {
          "id": "nursing-101-l04-c3",
          "title": "Patient Safety and Fall Prevention",
          "content": "Patient safety is a core nursing responsibility encompassing fall prevention, pressure injury prevention, and error reduction. Falls are the most common adverse event in hospitals: risk factors include advanced age, medication effects (sedatives, antihypertensives), altered mental status, and mobility impairment. Evidence-based interventions include hourly rounding, keeping the call light within reach, ensuring non-slip footwear, locking bed wheels, and using bed alarms for high-risk patients. The National Patient Safety Goals (NPSGs) from The Joint Commission also require two patient identifiers before any procedure, medication, or blood transfusion — typically the patient's full name and date of birth."
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
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Safe medication administration is anchored by the 'rights' — a checklist verified before every dose. The traditional six rights are: Right Patient (verify using two identifiers), Right Medication (compare the order to the label), Right Dose (calculate and double-check), Right Route (oral, IV, IM, subcutaneous, topical, etc.), Right Time (within the facility's accepted window, typically ±30 minutes), and Right Documentation (chart immediately after administration). Many institutions now include additional rights: right reason (indication matches the drug), right response (monitor for therapeutic and adverse effects), and right to refuse (patients can decline a medication). Medication errors are a leading cause of preventable patient harm, making this checklist non-negotiable."
        },
        {
          "id": "nursing-101-l05-c2",
          "title": "Routes of Administration",
          "content": "The route of administration affects how quickly a drug reaches its target. Intravenous (IV) provides the fastest onset — seconds to minutes — and is used in emergencies and when precise blood levels are needed. Intramuscular (IM) injections absorb over 10–30 minutes from well-vascularized muscle tissue (deltoid, vastus lateralis, ventrogluteal). Subcutaneous (subQ) injections deliver smaller volumes into fatty tissue (insulin, heparin) with slower absorption. Oral (PO) is the most common, safest, and most convenient route but requires a functioning GI tract and undergoes first-pass metabolism in the liver. Topical, transdermal, rectal, sublingual, and inhaled routes each have specific indications based on drug properties and patient factors."
        },
        {
          "id": "nursing-101-l05-c3",
          "title": "Basic Dosage Calculations",
          "content": "Nurses must verify that the prescribed dose matches the available supply. The basic formula is: Desired dose ÷ Available dose × Quantity = Amount to administer. For example, if 500 mg is ordered and the available tablets are 250 mg each, then 500 ÷ 250 × 1 = 2 tablets. For IV drip rates, the formula is: (Volume in mL × Drop factor) ÷ Time in minutes = drops per minute. Weight-based dosing (common in pediatrics) uses mg/kg: multiply the patient's weight in kilograms by the mg/kg dose, then apply the basic formula. Dimensional analysis is an alternative method that chains conversion factors. Regardless of method, any calculation resulting in an unusual quantity (e.g., 10 tablets or 50 mL IM) should trigger a recheck and verification with pharmacy."
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
          "content": "Nursing ethics are grounded in four bioethical principles: autonomy (respecting the patient's right to make informed decisions about their own care), beneficence (acting in the patient's best interest), nonmaleficence (do no harm), and justice (fair and equitable distribution of care). The ANA Code of Ethics further obligates nurses to advocate for patients, maintain competence, and protect patient privacy. Patients have the right to refuse treatment, access their medical records, receive information in a language they understand, and be treated with dignity. When ethical dilemmas arise — such as a competent patient refusing life-sustaining treatment — the nurse must respect autonomy while ensuring the patient fully understands the consequences."
        },
        {
          "id": "nursing-101-l07-c2",
          "title": "Informed Consent and HIPAA",
          "content": "Informed consent requires that a patient receives a clear explanation of the proposed procedure, its risks, benefits, alternatives, and the right to refuse — before signing authorization. The physician or provider is responsible for obtaining informed consent; the nurse's role is to witness the signature, ensure the patient understands, and advocate if the patient appears confused or pressured. HIPAA (Health Insurance Portability and Accountability Act) protects patient health information (PHI). Nurses must not discuss patient details in public areas, must log out of EHRs when away from the station, and may only share PHI with those involved in the patient's care or with patient authorization. Violations can result in civil penalties, criminal charges, and loss of licensure."
        },
        {
          "id": "nursing-101-l07-c3",
          "title": "Therapeutic Communication",
          "content": "Therapeutic communication is purposeful, patient-centered interaction that promotes healing and trust. Core techniques include open-ended questions ('Tell me more about your pain'), active listening (maintaining eye contact, nodding, reflecting), silence (allowing the patient time to process thoughts), and restating (paraphrasing to confirm understanding: 'So you're saying the pain worsens at night?'). Non-therapeutic responses to avoid include giving unsolicited advice ('You should just relax'), false reassurance ('Everything will be fine'), and changing the subject when the patient is expressing concerns. Cultural sensitivity is essential — communication styles, personal space, eye contact norms, and family involvement in decisions vary across cultures. The nurse should assess each patient's preferences and adapt accordingly."
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
          "content": "SOAP is a structured documentation format: Subjective (what the patient reports — symptoms, concerns, pain level), Objective (measurable data — vital signs, lab results, physical exam findings), Assessment (the nurse's clinical interpretation — nursing diagnoses, patient status, progress toward goals), and Plan (next steps — continue current interventions, modify medications, order diagnostic tests, patient education topics, follow-up schedule). For example: S – 'My incision is throbbing, 6/10.' O – T 37.8 °C, incision site with 2 cm erythema, no purulent drainage. A – Acute pain related to surgical incision; monitor for early signs of surgical site infection. P – Administer prescribed analgesic, recheck in 30 minutes, notify provider if erythema increases."
        },
        {
          "id": "nursing-101-l08-c2",
          "title": "Nursing Care Plans",
          "content": "A nursing care plan translates assessment data into an organized framework for individualized care. Its components include: the nursing diagnosis (e.g., 'Risk for Impaired Skin Integrity related to prolonged immobility'), expected outcomes with measurable criteria (e.g., 'Patient's skin will remain intact with no redness over bony prominences throughout hospitalization'), nursing interventions with rationales (e.g., 'Reposition every 2 hours to redistribute pressure'), and an evaluation column to record whether outcomes are met, partially met, or not met. Care plans are living documents — they must be updated as the patient's condition changes. Standardized care plans exist for common diagnoses but should always be individualized to the specific patient."
        },
        {
          "id": "nursing-101-l08-c3",
          "title": "SBAR Communication",
          "content": "SBAR (Situation, Background, Assessment, Recommendation) is a standardized handoff communication framework designed to reduce errors during care transitions. The Situation states the current concern concisely: 'I'm calling about Mr. Smith in Room 312 who is experiencing acute shortness of breath.' Background provides relevant clinical context: '68-year-old male, post-op day 2 from hip replacement, history of COPD.' Assessment shares the nurse's clinical findings and judgment: 'SpO₂ dropped from 96% to 89% on room air, lung sounds diminished in the right base, RR 26.' Recommendation proposes the action needed: 'I recommend a chest X-ray and possible supplemental oxygen.' SBAR ensures that critical information is communicated clearly and completely between providers, shifts, and facilities."
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
