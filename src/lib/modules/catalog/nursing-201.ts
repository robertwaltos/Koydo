import type { LearningModule } from "@/lib/modules/types";

export const nursing_201_Module: LearningModule = {
  "id": "nursing-201",
  "title": "Nursing Clinical Practice",
  "description": "Intermediate nursing: assessment workflows, medication safety, care planning, and clinical reasoning.",
  "subject": "Nursing",
  "tags": [
    "clinical skills",
    "patient safety",
    "care planning"
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
  "thumbnail": "/images/thumbnails/nursing-clinical-practice.svg",
  "learningObjectives": [
    "Perform a systematic head-to-toe patient assessment.",
    "Apply the 'Five Rights' of medication administration to ensure patient safety.",
    "Develop a patient-centered nursing care plan using the ADPIE framework.",
    "Utilize clinical reasoning to prioritize patient care in various scenarios."
  ],
  "lessons": [
    {
      "id": "nursing-201-l01",
      "title": "Patient Assessment Workflows",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "nursing-201-l01-a1",
          "type": "image",
          "title": "Infographic: Head-to-Toe Assessment",
          "content": "A visual guide showing the sequence and key focus areas for a comprehensive patient assessment."
        },
        {
          "id": "nursing-201-l01-a2",
          "type": "animation",
          "title": "Auscultating Lung Sounds",
          "content": "Animated diagram demonstrating correct stethoscope placement for identifying normal and adventitious breath sounds."
        }
      ]
    },
    {
      "id": "nursing-201-l02",
      "title": "Practice: Virtual Patient Assessment",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Review the virtual patient's chart and vital signs. What is your initial impression?",
          "Perform a focused respiratory assessment. Document your findings (e.g., breath sounds, respiratory rate, oxygen saturation).",
          "Based on your assessment, identify two priority nursing concerns for this patient."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-201-l02-a1",
          "type": "practice",
          "title": "Guided Simulation",
          "content": "Interact with a virtual patient to practice your assessment skills in a safe environment."
        }
      ]
    },
    {
      "id": "nursing-201-l03",
      "title": "Checkpoint 1: Assessment",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "nursing-201-l03-q1",
          "text": "When performing an abdominal assessment, which action should be performed first?",
          "skillId": "nursing-assessment",
          "options": [
            {
              "id": "a",
              "text": "Palpation"
            },
            {
              "id": "b",
              "text": "Auscultation"
            },
            {
              "id": "c",
              "text": "Percussion"
            },
            {
              "id": "d",
              "text": "Inspection"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The correct order for abdominal assessment is Inspection, Auscultation, Percussion, then Palpation (IAPP). Palpating first can alter bowel sounds."
        }
      ]
    },
    {
      "id": "nursing-201-l04",
      "title": "Medication Safety and Administration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "nursing-201-l04-a1",
          "type": "image",
          "title": "Chart: The Five Rights",
          "content": "A downloadable chart detailing the Five Rights of Medication Administration: Right Patient, Right Drug, Right Dose, Right Route, Right Time."
        }
      ]
    },
    {
      "id": "nursing-201-l05",
      "title": "Practice: Medication Pass Simulation",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Review the Medication Administration Record (MAR) for your assigned patient.",
          "Identify the correct medication from the virtual pharmacy. Verify the dose and expiration date.",
          "Document the administration, including the time and your initials, on the MAR."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-201-l05-a1",
          "type": "practice",
          "title": "Virtual Medication Cart",
          "content": "Use a simulated medication cart and electronic MAR to practice safe medication administration procedures."
        }
      ]
    },
    {
      "id": "nursing-201-l06",
      "title": "Checkpoint 2: Medication Safety",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "nursing-201-l06-q1",
          "text": "A physician orders 'Digoxin .125 mg PO daily'. The pharmacy supplies tablets that are 0.25 mg each. How many tablets should the nurse administer?",
          "skillId": "medication-safety",
          "options": [
            {
              "id": "a",
              "text": "2 tablets"
            },
            {
              "id": "b",
              "text": "1 tablet"
            },
            {
              "id": "c",
              "text": "0.5 tablets"
            },
            {
              "id": "d",
              "text": "0.25 tablets"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Dosage calculation: (Dose Ordered / Dose on Hand) = (0.125 mg / 0.25 mg) = 0.5 tablets."
        }
      ]
    },
    {
      "id": "nursing-201-l07",
      "title": "Developing a Nursing Care Plan",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "nursing-201-l07-a1",
          "type": "image",
          "title": "Diagram: The ADPIE Process",
          "content": "A circular flow diagram illustrating the five stages of the nursing process: Assessment, Diagnosis, Planning, Implementation, and Evaluation."
        }
      ]
    },
    {
      "id": "nursing-201-l08",
      "title": "Practice: Building a Care Plan",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Based on the patient scenario, formulate one priority nursing diagnosis (e.g., 'Ineffective Airway Clearance').",
          "Write one SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goal for your diagnosis.",
          "List three nursing interventions you would implement to help the patient achieve this goal."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-201-l08-a1",
          "type": "practice",
          "title": "Interactive Care Plan Template",
          "content": "Fill out a guided digital template to construct a complete nursing care plan for a case study patient."
        }
      ]
    },
    {
      "id": "nursing-201-l09",
      "title": "Final Checkpoint: Clinical Reasoning",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "nursing-201-l09-q1",
          "text": "You are caring for four patients. Which patient should you assess first?",
          "skillId": "clinical-reasoning",
          "options": [
            {
              "id": "a",
              "text": "A patient scheduled for discharge who needs teaching materials."
            },
            {
              "id": "b",
              "text": "A patient with a post-operative wound who is requesting pain medication."
            },
            {
              "id": "c",
              "text": "A patient with asthma who is reporting sudden shortness of breath."
            },
            {
              "id": "d",
              "text": "An elderly patient who is confused and trying to get out of bed."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Prioritization is based on the Airway, Breathing, Circulation (ABC) framework. The patient with shortness of breath has a potential airway/breathing compromise, which is the highest priority."
        },
        {
          "id": "nursing-201-l09-q2",
          "text": "Which of the following is an example of a correctly written nursing diagnosis?",
          "skillId": "care-planning",
          "options": [
            {
              "id": "a",
              "text": "Pneumonia."
            },
            {
              "id": "b",
              "text": "Patient is short of breath."
            },
            {
              "id": "c",
              "text": "Ineffective Breathing Pattern related to alveolar-capillary membrane changes as evidenced by dyspnea and O2 saturation of 88%."
            },
            {
              "id": "d",
              "text": "Administer oxygen at 2L/min via nasal cannula."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A correct nursing diagnosis includes the problem, etiology ('related to'), and defining characteristics ('as evidenced by'). 'Pneumonia' is a medical diagnosis, 'short of breath' is a symptom, and administering oxygen is an intervention."
        }
      ]
    }
  ]
};
