import type { LearningModule } from "@/lib/modules/types";

export const medicine_301_Module: LearningModule = {
  "id": "medicine-301",
  "title": "Medicine III",
  "description": "Advanced clinical medicine principles including differential reasoning, pathway selection, and systems integration.",
  "subject": "Medicine",
  "tags": [
    "clinical reasoning",
    "diagnostics",
    "systems-based practice"
  ],
  "minAge": 18,
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
  "thumbnail": "/images/thumbnails/medicine-clinical-reasoning.svg",
  "learningObjectives": [
    "Develop a systematic framework for generating and refining differential diagnoses.",
    "Critically evaluate and apply evidence-based clinical pathways to patient care scenarios.",
    "Analyze complex cases using a systems-based approach to improve patient safety and outcomes.",
    "Integrate diagnostic, therapeutic, and systems-level thinking in a comprehensive capstone assessment."
  ],
  "lessons": [
    {
      "id": "medicine-301-l01",
      "title": "Mastering Differential Diagnosis: A Framework Approach",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "medicine-301-l01-a1",
          "type": "image",
          "title": "VINDICATE Mnemonic Chart",
          "content": "A visual chart outlining the VINDICATE (Vascular, Inflammatory, Neoplastic, etc.) framework for building a comprehensive differential diagnosis."
        },
        {
          "id": "medicine-301-l01-a2",
          "type": "animation",
          "title": "From Complaint to Differential List",
          "content": "Animated walkthrough showing how to process a chief complaint and patient history to generate and prioritize a differential diagnosis list."
        }
      ]
    },
    {
      "id": "medicine-301-l02",
      "title": "Case Simulation: Atypical Chest Pain",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Given the patient's presentation (48yo F, intermittent substernal pressure, non-exertional), list your top 5 differential diagnoses.",
          "Which initial diagnostic tests are most critical to rule out life-threatening conditions? Justify your choices.",
          "The initial ECG and troponins are negative. How does this information refine your differential diagnosis and what is your next step?"
        ]
      },
      "learningAids": [
        {
          "id": "medicine-301-l02-a1",
          "type": "practice",
          "title": "Interactive Patient Chart",
          "content": "Work through a simulated electronic health record to gather information and make decisions."
        }
      ]
    },
    {
      "id": "medicine-301-l03",
      "title": "Checkpoint 1: Differential Reasoning",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-301-l03-q1",
          "text": "A clinician focuses on their initial impression of GERD for a patient with chest pain, downplaying other signs. This is an example of which cognitive bias?",
          "skillId": "medicine-301-skill-ddx-bias",
          "options": [
            {
              "id": "a",
              "text": "Anchoring bias"
            },
            {
              "id": "b",
              "text": "Availability heuristic"
            },
            {
              "id": "c",
              "text": "Confirmation bias"
            },
            {
              "id": "d",
              "text": "Hindsight bias"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Anchoring bias is the tendency to rely too heavily on the first piece of information offered when making decisions."
        },
        {
          "id": "medicine-301-l03-q2",
          "text": "When prioritizing a differential diagnosis for a patient with acute shortness of breath, which principle is most important?",
          "skillId": "medicine-301-skill-ddx-prioritization",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the most common diagnoses first, regardless of severity."
            },
            {
              "id": "b",
              "text": "Prioritize the most life-threatening conditions that must not be missed."
            },
            {
              "id": "c",
              "text": "Prioritize the diagnoses that are easiest to treat."
            },
            {
              "id": "d",
              "text": "Prioritize the diagnosis that best fits a single symptom."
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "learningAids": []
    },
    {
      "id": "medicine-301-l04",
      "title": "Navigating Clinical Pathways and Guidelines",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "medicine-301-l04-a1",
          "type": "image",
          "title": "Sepsis Management Pathway",
          "content": "A flowchart illustrating the evidence-based clinical pathway for managing a patient with suspected sepsis, from identification to treatment."
        },
        {
          "id": "medicine-301-l04-a2",
          "type": "animation",
          "title": "Applying a Guideline",
          "content": "An animated decision tree showing how to apply a clinical guideline (e.g., ACC/AHA) to a specific patient profile."
        }
      ]
    },
    {
      "id": "medicine-301-l05",
      "title": "Case Simulation: Managing New-Onset Atrial Fibrillation",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "A 72-year-old patient with hypertension and diabetes presents with new-onset atrial fibrillation. Calculate their CHA2DS2-VASc score.",
          "Based on current guidelines and the calculated score, what is the recommended approach for anticoagulation?",
          "The patient has a history of a major GI bleed. How does this influence your management plan and what alternatives would you consider?"
        ]
      },
      "learningAids": [
        {
          "id": "medicine-301-l05-a1",
          "type": "practice",
          "title": "Guideline Application Tool",
          "content": "Use an interactive tool to input patient data and receive guideline-based recommendations."
        }
      ]
    },
    {
      "id": "medicine-301-l06",
      "title": "Checkpoint 2: Pathway Selection",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-301-l06-q1",
          "text": "According to the PERC rule, which of the following criteria, if present, would require further testing for pulmonary embolism in a low-risk patient?",
          "skillId": "medicine-301-skill-pathway-application",
          "options": [
            {
              "id": "a",
              "text": "Age 45"
            },
            {
              "id": "b",
              "text": "Heart rate of 95 bpm"
            },
            {
              "id": "c",
              "text": "Unilateral leg swelling"
            },
            {
              "id": "d",
              "text": "Room air O2 saturation of 96%"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Unilateral leg swelling is one of the 8 PERC criteria; its presence means the patient 'fails' the rule and requires further workup."
        },
        {
          "id": "medicine-301-l06-q2",
          "text": "When is it most appropriate for a clinician to deviate from a standard clinical pathway?",
          "skillId": "medicine-301-skill-pathway-reasoning",
          "options": [
            {
              "id": "a",
              "text": "When the clinician has a personal preference for a different treatment."
            },
            {
              "id": "b",
              "text": "When unique patient factors (comorbidities, values) are not fully addressed by the pathway."
            },
            {
              "id": "c",
              "text": "When the pathway is more than one year old."
            },
            {
              "id": "d",
              "text": "Never; pathways must be followed rigidly to ensure standard of care."
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "learningAids": []
    },
    {
      "id": "medicine-301-l07",
      "title": "Integrating Care: A Systems-Based Approach",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "medicine-301-l07-a1",
          "type": "image",
          "title": "The 'Swiss Cheese' Model",
          "content": "Diagram of James Reason's 'Swiss Cheese' model, illustrating how latent system errors can align to cause adverse events."
        },
        {
          "id": "medicine-301-l07-a2",
          "type": "animation",
          "title": "Root Cause Analysis of a Medication Error",
          "content": "An animated walkthrough of a root cause analysis, tracing a medication error back to underlying system failures."
        }
      ]
    },
    {
      "id": "medicine-301-l08",
      "title": "Case Simulation: Complex Geriatric Patient",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Review the medication list for an 85-year-old patient with 5 chronic conditions. Identify potential polypharmacy issues using the Beers Criteria.",
          "Outline a plan for coordinating care and communication between the patient's cardiologist, nephrologist, and primary care physician.",
          "What system-level interventions (e.g., pharmacist consultation, shared care plan) could prevent future adverse events for this patient?"
        ]
      },
      "learningAids": [
        {
          "id": "medicine-301-l08-a1",
          "type": "practice",
          "title": "Interprofessional Care Plan Builder",
          "content": "Develop a shared care plan by assigning roles and communication tasks to different members of a healthcare team."
        }
      ]
    },
    {
      "id": "medicine-301-l09",
      "title": "Checkpoint 3: Systems Integration",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-301-l09-q1",
          "text": "A safe and effective patient handoff between an ED physician and a hospitalist should primarily use what structured communication tool?",
          "skillId": "medicine-301-skill-systems-communication",
          "options": [
            {
              "id": "a",
              "text": "SOAP (Subjective, Objective, Assessment, Plan)"
            },
            {
              "id": "b",
              "text": "SBAR (Situation, Background, Assessment, Recommendation)"
            },
            {
              "id": "c",
              "text": "VINDICATE (Vascular, Inflammatory, Neoplastic...)"
            },
            {
              "id": "d",
              "text": "A brief, informal conversation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "SBAR is a standardized framework for communication in healthcare, designed to ensure clarity and completeness during patient handoffs."
        },
        {
          "id": "medicine-301-l09-q2",
          "text": "In a root cause analysis of a wrong-site surgery, a 'latent error' would be:",
          "skillId": "medicine-301-skill-systems-error-analysis",
          "options": [
            {
              "id": "a",
              "text": "The surgeon making the initial incision on the wrong limb."
            },
            {
              "id": "b",
              "text": "The hospital having no mandatory pre-operative 'time-out' policy."
            },
            {
              "id": "c",
              "text": "The nurse failing to notice the incorrect site marking."
            },
            {
              "id": "d",
              "text": "The patient incorrectly stating which limb was to be operated on."
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "learningAids": []
    },
    {
      "id": "medicine-301-l10",
      "title": "Capstone Assessment: Multi-System Trauma",
      "type": "quiz",
      "duration": 25,
      "questions": [
        {
          "id": "medicine-301-l10-q1",
          "text": "A 34-year-old male arrives after a high-speed MVA. He is hypotensive and tachycardic with a distended abdomen. Following ATLS protocol, what is the most appropriate initial diagnostic step?",
          "skillId": "medicine-301-skill-integration-dx",
          "options": [
            {
              "id": "a",
              "text": "Abdominal X-ray"
            },
            {
              "id": "b",
              "text": "CT scan of the abdomen with contrast"
            },
            {
              "id": "c",
              "text": "FAST (Focused Assessment with Sonography for Trauma) exam"
            },
            {
              "id": "d",
              "text": "Diagnostic Peritoneal Lavage (DPL)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In an unstable trauma patient, the FAST exam is the rapid, non-invasive first choice to identify intra-abdominal hemorrhage at the bedside."
        },
        {
          "id": "medicine-301-l10-q2",
          "text": "The FAST exam is positive. The patient remains hemodynamically unstable despite fluid resuscitation. What is the definitive next step in management?",
          "skillId": "medicine-301-skill-integration-pathway",
          "options": [
            {
              "id": "a",
              "text": "Administer vasopressors"
            },
            {
              "id": "b",
              "text": "Immediate exploratory laparotomy"
            },
            {
              "id": "c",
              "text": "Transfer to CT scanner for more detailed imaging"
            },
            {
              "id": "d",
              "text": "Massive transfusion protocol and observation in the ICU"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "medicine-301-l10-q3",
          "text": "To ensure optimal care for this patient post-operatively, which system-level action is most critical during the handoff from the surgical team to the ICU team?",
          "skillId": "medicine-301-skill-integration-systems",
          "options": [
            {
              "id": "a",
              "text": "Ensuring the family is updated on the patient's condition."
            },
            {
              "id": "b",
              "text": "Completing all billing and coding paperwork immediately."
            },
            {
              "id": "c",
              "text": "A structured handoff (e.g., I-PASS) detailing intraoperative events, patient stability, and anticipated issues."
            },
            {
              "id": "d",
              "text": "Documenting the procedure in the EHR within 24 hours."
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "learningAids": [
        {
          "id": "medicine-301-l10-a1",
          "type": "mnemonic",
          "title": "Clinical Reasoning Checklist",
          "content": "For this complex case, review: 1. Diagnosis (What's the problem?), 2. Treatment (What's the plan?), 3. Systems (How do we ensure safety?)."
        }
      ]
    }
  ]
};
