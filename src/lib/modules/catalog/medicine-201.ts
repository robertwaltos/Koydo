import type { LearningModule } from "@/lib/modules/types";

export const medicine_201_Module: LearningModule = {
  "id": "medicine-201",
  "title": "Medicine: Clinical Systems",
  "description": "An intermediate module on clinical systems thinking, covering the principles of diagnostics, evidence-based treatment planning, and patient safety protocols.",
  "subject": "Medicine",
  "tags": [
    "clinical reasoning",
    "diagnostics",
    "patient safety",
    "interactive"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-medical-chart.svg",
  "learningObjectives": [
    "Master the process of clinical history taking and physical examination.",
    "Develop and prioritize a differential diagnosis based on clinical findings.",
    "Apply principles of evidence-based medicine to formulate a treatment plan.",
    "Analyze medical errors using a systems-based approach to improve patient safety."
  ],
  "lessons": [
    {
      "id": "medicine-201-l01",
      "title": "The Clinical Encounter: History & Examination",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "medicine-201-l01-a1",
          "type": "image",
          "title": "SOAP Note Structure",
          "content": "A visual diagram illustrating the components of a SOAP note: Subjective, Objective, Assessment, and Plan."
        },
        {
          "id": "medicine-201-l01-a2",
          "type": "animation",
          "title": "Review of Systems",
          "content": "An animated walkthrough of a systematic head-to-toe review of systems, highlighting key questions for each organ system."
        }
      ]
    },
    {
      "id": "medicine-201-l02",
      "title": "Practice: Taking a Patient History",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Given the patient's chief complaint, list five essential questions for the History of Present Illness.",
          "Document the provided physical exam findings using standard medical terminology.",
          "Formulate a one-sentence summary statement for this patient encounter."
        ]
      },
      "learningAids": [
        {
          "id": "medicine-201-l02-a1",
          "type": "practice",
          "title": "Virtual Patient Case",
          "content": "Interact with a simulated patient to gather a complete medical history based on their presenting symptoms."
        }
      ]
    },
    {
      "id": "medicine-201-l03",
      "title": "Checkpoint: Patient Assessment",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-201-l03-q1",
          "text": "A patient describes chest pain as 'crushing' and radiating to the left arm. In which section of the SOAP note should this be documented?",
          "skillId": "clinical-documentation",
          "options": [
            {
              "id": "a",
              "text": "Subjective"
            },
            {
              "id": "b",
              "text": "Objective"
            },
            {
              "id": "c",
              "text": "Assessment"
            },
            {
              "id": "d",
              "text": "Plan"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 'Subjective' section includes the patient's own description of their symptoms, history, and chief complaint."
        },
        {
          "id": "medicine-201-l03-q2",
          "text": "Which of the following is an example of an 'Objective' finding?",
          "skillId": "clinical-examination",
          "options": [
            {
              "id": "a",
              "text": "Patient reports feeling dizzy."
            },
            {
              "id": "b",
              "text": "Blood pressure measured at 145/90 mmHg."
            },
            {
              "id": "c",
              "text": "Patient's family history of heart disease."
            },
            {
              "id": "d",
              "text": "Patient states they have a headache."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The 'Objective' section contains measurable and observable data, such as vital signs, lab results, and physical exam findings."
        }
      ]
    },
    {
      "id": "medicine-201-l04",
      "title": "Principles of Diagnostics & Differential Diagnosis",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "medicine-201-l04-a1",
          "type": "image",
          "title": "The Diagnostic Funnel",
          "content": "A funnel diagram showing how clinicians narrow down a broad list of potential diagnoses to a final diagnosis using tests and data."
        },
        {
          "id": "medicine-201-l04-a2",
          "type": "animation",
          "title": "Bayesian Reasoning in Medicine",
          "content": "An animation explaining how pre-test probability is updated with new information (e.g., a test result) to determine post-test probability."
        }
      ]
    },
    {
      "id": "medicine-201-l05",
      "title": "Practice: Formulating a Differential Diagnosis",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Based on the patient's symptoms of cough and fever, list at least five possible diagnoses.",
          "Prioritize your list from most likely to least likely, providing a brief justification for your top three choices.",
          "What single lab test would be most useful to differentiate between your top two diagnoses?"
        ]
      },
      "learningAids": [
        {
          "id": "medicine-201-l05-a1",
          "type": "practice",
          "title": "Diagnostic Challenge",
          "content": "Analyze a complex clinical vignette and build a prioritized differential diagnosis."
        }
      ]
    },
    {
      "id": "medicine-201-l06",
      "title": "Checkpoint: The Diagnostic Process",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-201-l06-q1",
          "text": "What is the primary purpose of creating a differential diagnosis?",
          "skillId": "diagnostic-principles",
          "options": [
            {
              "id": "a",
              "text": "To immediately select the correct treatment."
            },
            {
              "id": "b",
              "text": "To consider all plausible causes of a patient's symptoms before settling on a final diagnosis."
            },
            {
              "id": "c",
              "text": "To document every possible disease known to medicine."
            },
            {
              "id": "d",
              "text": "To order every available laboratory test."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A differential diagnosis is a systematic method to consider and rule out various possible conditions that share similar clinical presentations."
        },
        {
          "id": "medicine-201-l06-q2",
          "text": "A highly sensitive test is most useful for what purpose?",
          "skillId": "diagnostic-testing",
          "options": [
            {
              "id": "a",
              "text": "Confirming a diagnosis (ruling in)."
            },
            {
              "id": "b",
              "text": "Screening for a disease (ruling out)."
            },
            {
              "id": "c",
              "text": "Determining the prognosis of a disease."
            },
            {
              "id": "d",
              "text": "Monitoring treatment effectiveness."
            }
          ],
          "correctOptionId": "b",
          "explanation": "High sensitivity means a test has a low false-negative rate. A negative result from a highly sensitive test is very good at ruling out a disease (Mnemonic: SNOUT - SeNsitive test, when Negative, rules OUT)."
        }
      ]
    },
    {
      "id": "medicine-201-l07",
      "title": "Evidence-Based Medicine & Treatment Planning",
      "type": "video",
      "duration": 9,
      "learningAids": [
        {
          "id": "medicine-201-l07-a1",
          "type": "image",
          "title": "Hierarchy of Evidence",
          "content": "A pyramid diagram showing the levels of medical evidence, from expert opinion at the bottom to systematic reviews/meta-analyses at the top."
        }
      ]
    },
    {
      "id": "medicine-201-l08",
      "title": "Practice: Developing a Treatment Plan",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "For a patient diagnosed with Type 2 Diabetes, propose a first-line pharmacological treatment based on current guidelines.",
          "List three non-pharmacological interventions (lifestyle modifications) you would recommend.",
          "How would you monitor the effectiveness and potential side effects of your proposed plan?"
        ]
      },
      "learningAids": [
        {
          "id": "medicine-201-l08-a1",
          "type": "practice",
          "title": "Treatment Plan Simulation",
          "content": "Use a patient profile and diagnosis to construct a comprehensive, evidence-based treatment plan."
        }
      ]
    },
    {
      "id": "medicine-201-l09",
      "title": "Systems Thinking in Patient Safety",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "medicine-201-l09-a1",
          "type": "image",
          "title": "Swiss Cheese Model",
          "content": "A diagram of James Reason's Swiss Cheese Model, illustrating how errors occur when holes in multiple layers of system defenses align."
        },
        {
          "id": "medicine-201-l09-a2",
          "type": "animation",
          "title": "Root Cause Analysis",
          "content": "An animated example of a root cause analysis, tracing a medication error back to underlying system failures rather than individual blame."
        }
      ]
    },
    {
      "id": "medicine-201-l10",
      "title": "Final Checkpoint: Clinical Systems Integration",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "medicine-201-l10-q1",
          "text": "According to the 'Swiss Cheese Model' of accident causation, where do the most effective safety interventions focus?",
          "skillId": "patient-safety",
          "options": [
            {
              "id": "a",
              "text": "Punishing the individual who made the final error."
            },
            {
              "id": "b",
              "text": "Adding more layers of defense and reducing 'holes' in the system."
            },
            {
              "id": "c",
              "text": "Asking clinicians to simply 'be more careful'."
            },
            {
              "id": "d",
              "text": "Focusing only on technological solutions."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The model emphasizes that accidents happen due to systemic flaws (holes in the cheese). The best approach is to improve the system by adding redundant safeguards and closing existing gaps."
        },
        {
          "id": "medicine-201-l10-q2",
          "text": "A 65-year-old patient with a new diagnosis of hypertension is started on a new medication. Which of the following represents the best integrated treatment plan?",
          "skillId": "treatment-planning",
          "options": [
            {
              "id": "a",
              "text": "Prescribe the medication and schedule a follow-up in one year."
            },
            {
              "id": "b",
              "text": "Prescribe the medication, provide education on a low-sodium diet, recommend an exercise plan, and schedule a 4-week follow-up."
            },
            {
              "id": "c",
              "text": "Only recommend diet and exercise without medication."
            },
            {
              "id": "d",
              "text": "Tell the patient to check their blood pressure at a pharmacy and call if it's high."
            }
          ],
          "correctOptionId": "b",
          "explanation": "An effective treatment plan is comprehensive, combining pharmacological treatment with patient education, lifestyle modifications, and a clear follow-up schedule to monitor efficacy and safety."
        },
        {
          "id": "medicine-201-l10-q3",
          "text": "A patient presents with symptoms that could be either a simple viral infection or a rare, serious bacterial infection. What is the most prudent initial diagnostic step?",
          "skillId": "clinical-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Immediately start treatment for the rare bacterial infection without testing."
            },
            {
              "id": "b",
              "text": "Dismiss the patient's concerns and assume it is the common viral infection."
            },
            {
              "id": "c",
              "text": "Include both conditions in the differential diagnosis and order tests to distinguish between them."
            },
            {
              "id": "d",
              "text": "Order a full-body MRI scan."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Good clinical reasoning involves considering both common and serious 'can't miss' diagnoses, and using targeted investigations to confirm or exclude them."
        }
      ]
    }
  ]
};
