import type { LearningModule } from "@/lib/modules/types";

export const nursing_301_Module: LearningModule = {
  "id": "nursing-301",
  "title": "Nursing Advanced Clinical Practice",
  "description": "A module on advanced clinical reasoning, care coordination, and managing high-acuity patients, designed for experienced nursing professionals.",
  "subject": "Nursing",
  "tags": [
    "clinical reasoning",
    "advanced practice",
    "patient management"
  ],
  "minAge": 22,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
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
  "thumbnail": "/placeholders/lesson-stethoscope.svg",
  "learningObjectives": [
    "Formulate differential diagnoses for complex patient presentations.",
    "Develop evidence-based pharmacotherapeutic plans for patients with multi-morbidity.",
    "Lead an interprofessional team in managing high-acuity patient care scenarios.",
    "Evaluate patient outcomes and refine care plans based on continuous assessment."
  ],
  "lessons": [
    {
      "id": "nursing-301-l01",
      "title": "Advanced Health Assessment and Diagnostic Reasoning",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "nursing-301-l01-a1",
          "type": "image",
          "title": "Diagnostic Reasoning Model",
          "content": "A flowchart illustrating the cyclical process of cue acquisition, hypothesis generation, and problem synthesis."
        },
        {
          "id": "nursing-301-l01-a2",
          "type": "animation",
          "title": "Animated Patient Interview",
          "content": "A step-by-step animation showing how to use therapeutic communication to gather a comprehensive patient history."
        }
      ]
    },
    {
      "id": "nursing-301-l02",
      "title": "Interactive Case Study: Differential Diagnosis",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "List three potential differential diagnoses for a 68-year-old male with acute dyspnea and a history of COPD.",
          "Justify your primary diagnosis using evidence from the provided patient chart and lab results.",
          "Outline the next diagnostic tests you would order to confirm your diagnosis."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-301-l02-a1",
          "type": "practice",
          "title": "Simulated Patient Chart",
          "content": "Access a realistic electronic health record with patient history, vital signs, and initial lab work to inform your decisions."
        }
      ]
    },
    {
      "id": "nursing-301-l03",
      "title": "Checkpoint: Diagnostic Reasoning",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "nursing-301-l03-q1",
          "text": "In a patient with chest pain, which finding is most indicative of a life-threatening condition requiring immediate intervention?",
          "skillId": "nursing-301-skill-triage",
          "options": [
            {
              "id": "a",
              "text": "ST-segment elevation on a 12-lead ECG"
            },
            {
              "id": "b",
              "text": "Pain reproducible on palpation"
            },
            {
              "id": "c",
              "text": "History of gastroesophageal reflux disease"
            },
            {
              "id": "d",
              "text": "Normal troponin levels on admission"
            }
          ],
          "correctOptionId": "a",
          "explanation": "ST-segment elevation is a classic sign of an acute myocardial infarction, a medical emergency."
        },
        {
          "id": "nursing-301-l03-q2",
          "text": "When formulating a differential diagnosis, what is the primary purpose of the 'review of systems'?",
          "skillId": "nursing-301-skill-assessment",
          "options": [
            {
              "id": "a",
              "text": "To uncover associated symptoms and rule out other conditions"
            },
            {
              "id": "b",
              "text": "To document the patient's family medical history"
            },
            {
              "id": "c",
              "text": "To finalize the primary diagnosis immediately"
            },
            {
              "id": "d",
              "text": "To prescribe initial medications"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-301-l03-a1",
          "type": "mnemonic",
          "title": "VINDICATE Mnemonic",
          "content": "Use VINDICATE (Vascular, Inflammatory/Infectious, Neoplastic, etc.) to build a comprehensive differential diagnosis list."
        }
      ]
    },
    {
      "id": "nursing-301-l04",
      "title": "Complex Pharmacotherapeutics in Multi-Morbidity",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "nursing-301-l04-a1",
          "type": "image",
          "title": "Polypharmacy Interaction Matrix",
          "content": "A visual guide to common drug-drug and drug-disease interactions in elderly patients with multiple chronic conditions."
        },
        {
          "id": "nursing-301-l04-a2",
          "type": "animation",
          "title": "Mechanism of Action: SGLT2 Inhibitors",
          "content": "An animation detailing how SGLT2 inhibitors work in the kidneys to manage type 2 diabetes and heart failure."
        }
      ]
    },
    {
      "id": "nursing-301-l05",
      "title": "Interactive Scenario: Medication Reconciliation",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Identify three potential medication-related problems in the provided patient's medication list.",
          "Propose a modification to the treatment plan to mitigate the risk of an adverse drug event.",
          "Draft a patient education script explaining the medication changes in clear, simple language."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-301-l05-a1",
          "type": "practice",
          "title": "Virtual Medication Administration Record (MAR)",
          "content": "Analyze a complex MAR for a patient with diabetes, hypertension, and chronic kidney disease to identify safety risks."
        }
      ]
    },
    {
      "id": "nursing-301-l06",
      "title": "Checkpoint: Advanced Pharmacology",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "nursing-301-l06-q1",
          "text": "A patient with an estimated GFR of 25 mL/min is prescribed a renally-cleared antibiotic. What is the most appropriate action?",
          "skillId": "nursing-301-skill-pharmacology",
          "options": [
            {
              "id": "a",
              "text": "Consult pharmacology resources to determine the correct dose adjustment."
            },
            {
              "id": "b",
              "text": "Administer the standard dose as prescribed."
            },
            {
              "id": "c",
              "text": "Hold the medication indefinitely."
            },
            {
              "id": "d",
              "text": "Advise the patient to double their fluid intake."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Renal impairment requires dose adjustment for many medications to prevent toxicity. Always consult reliable resources."
        },
        {
          "id": "nursing-301-l06-q2",
          "text": "What is the primary safety concern when a patient is taking both an ACE inhibitor and spironolactone?",
          "skillId": "nursing-301-skill-pharmacology",
          "options": [
            {
              "id": "a",
              "text": "Hyperkalemia"
            },
            {
              "id": "b",
              "text": "Hypoglycemia"
            },
            {
              "id": "c",
              "text": "Respiratory depression"
            },
            {
              "id": "d",
              "text": "Thrombocytopenia"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "learningAids": []
    },
    {
      "id": "nursing-301-l07",
      "title": "Management of High-Acuity Patients: Sepsis Protocol",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "nursing-301-l07-a1",
          "type": "image",
          "title": "Surviving Sepsis Campaign: 1-Hour Bundle",
          "content": "An infographic detailing the critical interventions to be completed within one hour of recognizing sepsis."
        },
        {
          "id": "nursing-301-l07-a2",
          "type": "animation",
          "title": "Pathophysiology of Septic Shock",
          "content": "An animated sequence showing the progression from systemic inflammatory response to vasodilation and organ dysfunction."
        }
      ]
    },
    {
      "id": "nursing-301-l08",
      "title": "Simulation: Rapid Response Team Activation",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Based on the patient's deteriorating vital signs, what is your immediate priority?",
          "Delegate specific tasks to the members of the rapid response team using closed-loop communication.",
          "Document the key events and interventions using the SBAR (Situation, Background, Assessment, Recommendation) format."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-301-l08-a1",
          "type": "practice",
          "title": "Virtual Crash Cart",
          "content": "Select the correct emergency equipment and medications from a virtual crash cart for a patient in respiratory distress."
        }
      ]
    },
    {
      "id": "nursing-301-l09",
      "title": "Leadership and Interprofessional Collaboration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "nursing-301-l09-a1",
          "type": "image",
          "title": "TeamSTEPPS Communication Model",
          "content": "A diagram illustrating key principles for effective team communication in healthcare, such as SBAR, call-outs, and check-backs."
        },
        {
          "id": "nursing-301-l09-a2",
          "type": "animation",
          "title": "Scenario: Resolving Inter-departmental Conflict",
          "content": "An animated scenario showing an advanced practice nurse facilitating a conversation between surgery and ICU staff to improve patient handoffs."
        }
      ]
    },
    {
      "id": "nursing-301-l10",
      "title": "Final Capstone: Integrated Clinical Scenario",
      "type": "quiz",
      "duration": 25,
      "questions": [
        {
          "id": "nursing-301-l10-q1",
          "text": "A 72-year-old patient with heart failure presents to the ED with worsening shortness of breath and a 3kg weight gain in 3 days. Which order should you prioritize?",
          "skillId": "nursing-301-skill-integration",
          "options": [
            {
              "id": "a",
              "text": "Administer IV furosemide"
            },
            {
              "id": "b",
              "text": "Obtain a dietary consult"
            },
            {
              "id": "c",
              "text": "Administer a scheduled beta-blocker"
            },
            {
              "id": "d",
              "text": "Request a chest X-ray"
            }
          ],
          "correctOptionId": "a",
          "explanation": "In acute decompensated heart failure with fluid overload, the priority is diuresis to reduce preload and improve respiratory status."
        },
        {
          "id": "nursing-301-l10-q2",
          "text": "For the patient in the previous question, you note their potassium is 3.2 mEq/L. How does this finding affect your plan?",
          "skillId": "nursing-301-skill-integration",
          "options": [
            {
              "id": "a",
              "text": "Administer potassium replacement before or concurrently with the diuretic."
            },
            {
              "id": "b",
              "text": "It does not affect the plan; proceed with the diuretic."
            },
            {
              "id": "c",
              "text": "Hold the diuretic and administer a fluid bolus."
            },
            {
              "id": "d",
              "text": "Switch the diuretic to spironolactone."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "nursing-301-l10-q3",
          "text": "When coordinating this patient's discharge, which action best demonstrates effective interprofessional leadership?",
          "skillId": "nursing-301-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Initiating a care conference with the physician, pharmacist, and social worker to align the discharge plan."
            },
            {
              "id": "b",
              "text": "Writing all discharge orders without consulting other team members."
            },
            {
              "id": "c",
              "text": "Providing the patient with a stack of educational pamphlets."
            },
            {
              "id": "d",
              "text": "Delegating all discharge planning to the case manager."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "learningAids": [
        {
          "id": "nursing-301-l10-a1",
          "type": "mnemonic",
          "title": "ADPIE Framework",
          "content": "Use the ADPIE (Assessment, Diagnosis, Planning, Implementation, Evaluation) nursing process to structure your approach to the final scenario."
        }
      ]
    }
  ]
};
