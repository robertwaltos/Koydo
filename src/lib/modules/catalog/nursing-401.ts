import type { LearningModule } from "@/lib/modules/types";

export const nursing_401_Module: LearningModule = {
  "id": "nursing-401",
  "title": "Nursing Leadership and Systems",
  "description": "An advanced module on nursing leadership principles, quality improvement systems, patient safety governance, and effective interdisciplinary collaboration.",
  "subject": "Nursing",
  "tags": [
    "leadership",
    "quality improvement",
    "patient safety",
    "systems thinking"
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
  "thumbnail": "/thumbnails/nursing-leadership-systems.svg",
  "learningObjectives": [
    "Analyze various nursing leadership theories and their application in clinical settings.",
    "Apply quality improvement models, such as PDSA and Root Cause Analysis, to enhance patient safety.",
    "Develop strategies for fostering effective communication and collaboration within interdisciplinary healthcare teams.",
    "Evaluate system-level factors that impact healthcare quality and patient outcomes."
  ],
  "lessons": [
    {
      "id": "nursing-401-l01",
      "title": "Foundations of Nursing Leadership",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "nursing-401-l01-a1",
          "type": "image",
          "title": "Infographic: Transformational vs. Transactional Leadership",
          "content": "A visual comparison of key characteristics, motivations, and outcomes of transformational and transactional leadership styles."
        },
        {
          "id": "nursing-401-l01-a2",
          "type": "animation",
          "title": "Animation: Applying Situational Leadership",
          "content": "An animated scenario showing a nurse leader adapting their style from directing to coaching as a new graduate nurse gains competence."
        }
      ]
    },
    {
      "id": "nursing-401-l02",
      "title": "Leadership in Practice: A Clinical Scenario",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze the provided clinical scenario and identify the primary leadership challenge.",
          "Select a leadership style (e.g., transformational, democratic, autocratic) and justify your choice for this situation.",
          "Outline three key actions you would take as the nurse leader to address the challenge and support your team."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-401-l02-a1",
          "type": "practice",
          "title": "Scenario Simulator",
          "content": "Engage with a dynamic scenario involving a staffing shortage and rising patient acuity. Your choices will affect team morale and patient outcomes."
        }
      ]
    },
    {
      "id": "nursing-401-l03",
      "title": "Quality Improvement Systems in Healthcare",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "nursing-401-l03-a1",
          "type": "image",
          "title": "Flowchart: The PDSA (Plan-Do-Study-Act) Cycle",
          "content": "A detailed flowchart illustrating each phase of the PDSA cycle for iterative quality improvement."
        },
        {
          "id": "nursing-401-l03-a2",
          "type": "animation",
          "title": "Walkthrough: Using a Fishbone Diagram",
          "content": "A step-by-step animated guide on how to construct an Ishikawa (fishbone) diagram to perform a root cause analysis of a patient fall."
        }
      ]
    },
    {
      "id": "nursing-401-l04",
      "title": "Patient Safety Workshop: Root Cause Analysis",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Review the provided sentinel event report for a medication error.",
          "Using the '5 Whys' technique, drill down to identify the root cause of the error.",
          "Propose a system-level change to prevent recurrence and explain how you would measure its effectiveness."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-401-l04-a1",
          "type": "practice",
          "title": "Guided Root Cause Analysis",
          "content": "Follow a structured workflow to analyze a realistic case study of an adverse event and develop a corrective action plan."
        }
      ]
    },
    {
      "id": "nursing-401-l05",
      "title": "Checkpoint: Leadership and Quality",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "nursing-401-l05-q1",
          "text": "A nurse manager who encourages team input on unit policies and fosters a collaborative environment is primarily demonstrating which leadership style?",
          "skillId": "nursing-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Autocratic"
            },
            {
              "id": "b",
              "text": "Laissez-faire"
            },
            {
              "id": "c",
              "text": "Democratic"
            },
            {
              "id": "d",
              "text": "Transactional"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Democratic leadership involves team participation and shared decision-making, which is key to fostering collaboration and buy-in."
        },
        {
          "id": "nursing-401-l05-q2",
          "text": "When implementing a new workflow to reduce catheter-associated urinary tract infections (CAUTI), which model provides a framework for small-scale, iterative testing?",
          "skillId": "nursing-401-skill-quality",
          "options": [
            {
              "id": "a",
              "text": "Root Cause Analysis (RCA)"
            },
            {
              "id": "b",
              "text": "The PDSA Cycle"
            },
            {
              "id": "c",
              "text": "Six Sigma"
            },
            {
              "id": "d",
              "text": "SWOT Analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Plan-Do-Study-Act (PDSA) cycle is specifically designed for testing changes on a small scale before broader implementation."
        },
        {
          "id": "nursing-401-l05-q3",
          "text": "A 'Just Culture' in a healthcare setting primarily aims to:",
          "skillId": "nursing-401-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "Assign blame to individuals for all errors."
            },
            {
              "id": "b",
              "text": "Eliminate all forms of accountability."
            },
            {
              "id": "c",
              "text": "Focus only on punishing reckless behavior."
            },
            {
              "id": "d",
              "text": "Differentiate between human error, at-risk behavior, and reckless behavior."
            }
          ],
          "correctOptionId": "d",
          "explanation": "A Just Culture balances accountability with learning, recognizing that system flaws often contribute to human error, while still holding individuals accountable for reckless choices."
        }
      ]
    },
    {
      "id": "nursing-401-l06",
      "title": "Building High-Performance Interdisciplinary Teams",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "nursing-401-l06-a1",
          "type": "image",
          "title": "Diagram: Key Components of TeamSTEPPS®",
          "content": "A visual breakdown of the TeamSTEPPS® framework, including communication, leadership, situation monitoring, and mutual support."
        },
        {
          "id": "nursing-401-l06-a2",
          "type": "animation",
          "title": "Scenario: Effective Handoff Communication using SBAR",
          "content": "An animated interaction showing a nurse giving a concise and structured report to a physician using the SBAR (Situation, Background, Assessment, Recommendation) tool."
        }
      ]
    },
    {
      "id": "nursing-401-l07",
      "title": "Conflict Resolution Simulation",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Identify the source of conflict between the physician and nurse in the video scenario regarding a patient's plan of care.",
          "Choose a conflict resolution strategy (e.g., collaborating, compromising) and explain your rationale.",
          "Draft a script for a conversation to de-escalate the situation and find a patient-centered solution."
        ]
      },
      "learningAids": [
        {
          "id": "nursing-401-l07-a1",
          "type": "practice",
          "title": "Role-Play Dialogue Builder",
          "content": "Engage in a simulated conversation where your choices in dialogue affect the outcome of an interprofessional conflict."
        }
      ]
    },
    {
      "id": "nursing-401-l08",
      "title": "Final Assessment: Systems Leadership Challenge",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "nursing-401-l08-q1",
          "text": "A hospital unit has a sudden increase in patient falls. As the nurse leader, your FIRST step from a systems thinking perspective should be to:",
          "skillId": "nursing-401-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "Write up the nurses who were on duty during the falls."
            },
            {
              "id": "b",
              "text": "Conduct a comprehensive analysis of potential contributing factors (e.g., staffing, environment, patient acuity)."
            },
            {
              "id": "c",
              "text": "Immediately implement a new fall prevention protocol without investigation."
            },
            {
              "id": "d",
              "text": "Require all patients to have bed alarms, regardless of their fall risk."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A systems approach requires investigating the multiple interconnected factors that may contribute to a problem before implementing a solution."
        },
        {
          "id": "nursing-401-l08-q2",
          "text": "During an interdisciplinary meeting, a physical therapist strongly disagrees with your nursing assessment. The most effective communication strategy is to:",
          "skillId": "nursing-401-skill-collaboration",
          "options": [
            {
              "id": "a",
              "text": "Ignore their comment and continue with your report."
            },
            {
              "id": "b",
              "text": "State, 'I am the nurse, and my assessment is correct.'"
            },
            {
              "id": "c",
              "text": "Acknowledge their perspective and ask, 'Can you help me understand what you are seeing from your point of view?'"
            },
            {
              "id": "d",
              "text": "Report the therapist to their supervisor for being uncooperative."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Seeking to understand another discipline's perspective fosters mutual respect and collaborative problem-solving, which is essential for patient safety."
        },
        {
          "id": "nursing-401-l08-q3",
          "text": "Which of the following is the best example of a high-reliability organizing (HRO) principle in action?",
          "skillId": "nursing-401-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "A charge nurse who defers to the senior surgeon's opinion, even when they suspect an error."
            },
            {
              "id": "b",
              "text": "A unit that simplifies its medication administration process to reduce the chance of mistakes."
            },
            {
              "id": "c",
              "text": "A hospital that celebrates a full year with zero reported safety incidents and reduces its safety budget."
            },
            {
              "id": "d",
              "text": "A team that dismisses a near-miss event because no actual harm occurred."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simplification of processes is a key HRO principle. HROs work to reduce complexity to minimize the potential for error. Deference to expertise (not rank), preoccupation with failure, and sensitivity to operations are other key principles."
        }
      ]
    }
  ]
};
