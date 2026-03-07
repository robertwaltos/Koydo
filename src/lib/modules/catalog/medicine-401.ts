import type { LearningModule } from "@/lib/modules/types";

export const medicine_401_Module: LearningModule = {
  "id": "medicine-401",
  "title": "Medicine IV: Systems, Synthesis, and Leadership",
  "description": "An advanced module for senior medical learners focusing on healthcare systems analysis, safety governance, complex clinical case synthesis, and leadership in high-stakes decision-making.",
  "subject": "Medicine",
  "tags": [
    "systems thinking",
    "patient safety",
    "clinical reasoning",
    "leadership",
    "interactive"
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
  "thumbnail": "/placeholders/lesson-caduceus.svg",
  "learningObjectives": [
    "Analyze healthcare systems using established models (e.g., SEIPS 2.0) to identify sources of error.",
    "Lead a root cause analysis (RCA) for a complex patient safety incident.",
    "Synthesize multi-source data to formulate a differential diagnosis for complex, multi-morbidity patient cases.",
    "Demonstrate leadership principles in clinical decision-making and team communication during high-stakes scenarios."
  ],
  "lessons": [
    {
      "id": "medicine-401-l01",
      "title": "Clinical Systems & Safety Governance",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "medicine-401-l01-a1",
          "type": "image",
          "title": "Infographic: The SEIPS 2.0 Model",
          "content": "A visual breakdown of the Systems Engineering Initiative for Patient Safety (SEIPS) model, illustrating the interaction between work system elements and patient outcomes."
        },
        {
          "id": "medicine-401-l01-a2",
          "type": "animation",
          "title": "Latent vs. Active Failures",
          "content": "Animated scenario showing how a latent system failure (e.g., confusing medication labeling) leads to an active failure (e.g., incorrect dose administration)."
        }
      ]
    },
    {
      "id": "medicine-401-l02",
      "title": "Interactive Lab: Root Cause Analysis",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Review the provided sentinel event report involving a delayed diagnosis in the emergency department.",
          "Using the '5 Whys' technique and a fishbone diagram, identify the contributing factors and root causes.",
          "Propose three system-level interventions to prevent recurrence, distinguishing between weak, intermediate, and strong actions."
        ]
      },
      "learningAids": [
        {
          "id": "medicine-401-l02-a1",
          "type": "practice",
          "title": "Guided RCA Simulation",
          "content": "Follow the structured workflow to analyze the case, document your findings, and submit your proposed solutions."
        }
      ]
    },
    {
      "id": "medicine-401-l03",
      "title": "Checkpoint 1: Systems & Safety",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-401-l03-q1",
          "text": "In a 'Just Culture' model, which of the following actions would most likely be subject to punitive measures?",
          "skillId": "medicine-401-skill-safety-governance",
          "options": [
            {
              "id": "a",
              "text": "A nurse makes a human error by grabbing the wrong concentration of a medication."
            },
            {
              "id": "b",
              "text": "A physician intentionally ignores a required safety protocol, believing it to be inefficient."
            },
            {
              "id": "c",
              "text": "A resident, under pressure, makes a risky choice that was encouraged by the system's design."
            },
            {
              "id": "d",
              "text": "A pharmacist misreads a poorly written prescription, resulting in a dispensing error."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A Just Culture distinguishes between human error, at-risk behavior, and reckless behavior. Intentionally ignoring a safety protocol constitutes reckless behavior and is subject to punitive action."
        },
        {
          "id": "medicine-401-l03-q2",
          "text": "Which of the following is the best example of a latent system failure?",
          "skillId": "medicine-401-skill-systems-thinking",
          "options": [
            {
              "id": "a",
              "text": "A surgeon's hand slips during a delicate procedure."
            },
            {
              "id": "b",
              "text": "A hospital's electronic health record (EHR) system does not automatically flag dangerously high potassium levels."
            },
            {
              "id": "c",
              "text": "A nurse forgets to administer a patient's 4 PM dose of antibiotics."
            },
            {
              "id": "d",
              "text": "A patient falls while trying to get out of bed unassisted."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Latent failures are hidden problems within systems (e.g., poor design, inadequate training) that only become apparent when they contribute to an active failure. The EHR's lack of a critical alert is a classic latent failure."
        }
      ]
    },
    {
      "id": "medicine-401-l04",
      "title": "Synthesizing Complex Clinical Cases",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "medicine-401-l04-a1",
          "type": "image",
          "title": "Cognitive Biases in Diagnosis",
          "content": "Concept card illustrating common diagnostic pitfalls like anchoring bias, availability heuristic, and premature closure."
        },
        {
          "id": "medicine-401-l04-a2",
          "type": "animation",
          "title": "Building a Differential Diagnosis",
          "content": "Step-by-step walkthrough of synthesizing history, exam, lab, and imaging data for a patient with undifferentiated shock."
        }
      ]
    },
    {
      "id": "medicine-401-l05",
      "title": "Interactive Case: Atypical Presentation",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "A 78-year-old patient with dementia, COPD, and CKD presents with acute confusion and lethargy. Synthesize the provided clinical data.",
          "Formulate your top three differential diagnoses, justifying your reasoning and explicitly stating which cognitive biases you are trying to avoid.",
          "Outline your initial management plan, including both diagnostic tests and therapeutic interventions."
        ]
      },
      "learningAids": [
        {
          "id": "medicine-401-l05-a1",
          "type": "practice",
          "title": "Virtual Patient Encounter",
          "content": "Navigate the case, order tests, review results, and document your clinical reasoning in a simulated EHR."
        }
      ]
    },
    {
      "id": "medicine-401-l06",
      "title": "Checkpoint 2: Complex Synthesis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-401-l06-q1",
          "text": "A patient with a known history of panic attacks presents to the ED with chest pain and shortness of breath. The initial EKG and troponin are normal. The team diagnoses another panic attack. This reasoning is most at risk for which cognitive bias?",
          "skillId": "medicine-401-skill-clinical-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Availability Heuristic"
            },
            {
              "id": "b",
              "text": "Confirmation Bias"
            },
            {
              "id": "c",
              "text": "Premature Closure"
            },
            {
              "id": "d",
              "text": "Base Rate Neglect"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Premature closure is the tendency to stop the diagnostic process once a plausible explanation is found, failing to consider other reasonable alternatives. Attributing the symptoms to a panic attack without ruling out life-threatening causes like a pulmonary embolism is a classic example."
        },
        {
          "id": "medicine-401-l06-q2",
          "text": "In managing a patient with sepsis, acute kidney injury, and decompensated heart failure, which principle is most critical?",
          "skillId": "medicine-401-skill-case-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Treating each problem sequentially based on a standardized protocol."
            },
            {
              "id": "b",
              "text": "Prioritizing the most immediately life-threatening condition while considering the impact of interventions on other comorbidities."
            },
            {
              "id": "c",
              "text": "Focusing solely on the primary diagnosis (sepsis) and addressing other issues after it resolves."
            },
            {
              "id": "d",
              "text": "Consulting every possible subspecialty before initiating any treatment."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In multi-morbidity cases, the key is to prioritize the most acute threat (e.g., shock from sepsis) while being mindful that treatments (like aggressive fluid resuscitation) can worsen other conditions (like heart failure)."
        }
      ]
    },
    {
      "id": "medicine-401-l07",
      "title": "Leadership in Clinical Governance",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "medicine-401-l07-a1",
          "type": "image",
          "title": "Flowchart: M&M Conference Structure",
          "content": "A visual guide to structuring a Morbidity & Mortality conference for systems-based learning rather than individual blame."
        },
        {
          "id": "medicine-401-l07-a2",
          "type": "animation",
          "title": "Closed-Loop Communication",
          "content": "An animated scenario in a trauma bay demonstrating effective closed-loop communication to ensure orders are heard, understood, and confirmed."
        }
      ]
    },
    {
      "id": "medicine-401-l08",
      "title": "Simulation: Leading a Team Discussion",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "You are the team leader. A junior colleague insists on a course of action you believe is unsafe. How do you open the conversation to challenge them respectfully?",
          "Use the CUS (I am Concerned, I am Uncomfortable, this is a Safety issue) framework to articulate your position clearly and professionally.",
          "Guide the team to a consensus on the safest path forward, ensuring all voices are heard and psychological safety is maintained."
        ]
      },
      "learningAids": [
        {
          "id": "medicine-401-l08-a1",
          "type": "practice",
          "title": "Role-Play Scenario",
          "content": "Engage with a branching-logic conversation simulator to practice difficult leadership conversations."
        }
      ]
    },
    {
      "id": "medicine-401-l09",
      "title": "Checkpoint 3: Clinical Leadership",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "medicine-401-l09-q1",
          "text": "What is the primary, modern goal of a Morbidity & Mortality (M&M) conference?",
          "skillId": "medicine-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for adverse outcomes to specific individuals."
            },
            {
              "id": "b",
              "text": "To identify and correct system-level vulnerabilities to improve patient safety."
            },
            {
              "id": "c",
              "text": "To fulfill a legal requirement for hospital accreditation."
            },
            {
              "id": "d",
              "text": "To educate junior staff by reviewing clinical mistakes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "While education is a component, the primary modern focus of M&M conferences is on systems improvement, moving away from a culture of individual blame to one of collective learning and safety enhancement."
        },
        {
          "id": "medicine-401-l09-q2",
          "text": "When disclosing a medical error to a patient and their family, which of the following is the most critical first step?",
          "skillId": "medicine-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Explaining in detail which team member was responsible."
            },
            {
              "id": "b",
              "text": "Clearly and compassionately stating that an error occurred, and taking responsibility on behalf of the system."
            },
            {
              "id": "c",
              "text": "Waiting until a full root cause analysis is complete before saying anything."
            },
            {
              "id": "d",
              "text": "Offering financial compensation immediately."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective disclosure begins with a prompt, clear, and empathetic apology that takes ownership of the event on behalf of the care team and institution, without blaming individuals. This builds trust and is the foundation for subsequent steps."
        }
      ]
    },
    {
      "id": "medicine-401-l10",
      "title": "Capstone Assessment: Integrated Scenario",
      "type": "quiz",
      "duration": 25,
      "questions": [
        {
          "id": "medicine-401-l10-q1",
          "text": "A patient on the surgical ward develops a fever, hypotension, and tachycardia 48 hours post-op. The covering intern, having recently seen several cases of pneumonia, diagnoses it as such and starts antibiotics. The patient worsens. What is the most likely cognitive error at play?",
          "skillId": "medicine-401-skill-clinical-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Anchoring Bias"
            },
            {
              "id": "b",
              "text": "Availability Heuristic"
            },
            {
              "id": "c",
              "text": "Bandwagon Effect"
            },
            {
              "id": "d",
              "text": "Zebra Retreat"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The availability heuristic is a mental shortcut that relies on immediate examples that come to mind. Because the intern recently saw similar cases, they over-estimated the likelihood of that diagnosis, potentially missing other causes like an anastomotic leak."
        },
        {
          "id": "medicine-401-l10-q2",
          "text": "It is later discovered the patient's worsening condition was due to a medication error where a decimal point was misplaced, resulting in a 10x overdose of a sedative. As the team leader, what is your most appropriate immediate action?",
          "skillId": "medicine-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Immediately stabilize the patient and ensure their safety."
            },
            {
              "id": "b",
              "text": "Identify and reprimand the nurse who administered the medication."
            },
            {
              "id": "c",
              "text": "Alert the hospital's legal department before taking any other action."
            },
            {
              "id": "d",
              "text": "Quietly correct the error in the chart to avoid a formal report."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The absolute first priority in any adverse event is the patient's immediate safety. All other actions—reporting, analysis, and disclosure—follow after the patient has been stabilized."
        },
        {
          "id": "medicine-401-l10-q3",
          "text": "During the subsequent root cause analysis of the medication overdose, which finding would point toward a critical system-level failure requiring a high-leverage intervention?",
          "skillId": "medicine-401-skill-systems-thinking",
          "options": [
            {
              "id": "a",
              "text": "The nurse who gave the dose was working a double shift and was fatigued."
            },
            {
              "id": "b",
              "text": "The pharmacy information system allows orders to be entered without a leading zero (e.g., '.5 mg' instead of '0.5 mg')."
            },
            {
              "id": "c",
              "text": "The ordering physician has a history of poor handwriting."
            },
            {
              "id": "d",
              "text": "The patient did not question the dose they were being given."
            }
          ],
          "correctOptionId": "b",
          "explanation": "While fatigue and handwriting are contributing factors, the system design that allows ambiguous and dangerous orders is a major latent failure. A high-leverage intervention would be a forcing function in the software that requires a leading zero, making the system safer by design."
        }
      ]
    }
  ]
};
