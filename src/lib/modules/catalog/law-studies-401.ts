import type { LearningModule } from "@/lib/modules/types";

export const law_studies_401_Module: LearningModule = {
  "id": "law-studies-401",
  "title": "Law Studies IV: Systems, Policy, and Advocacy",
  "description": "An advanced exploration of legal systems, policy analysis, and persuasive legal argumentation. Students will deconstruct judicial philosophies, analyze legislative impacts, and craft professional-grade legal documents.",
  "subject": "Law",
  "tags": [
    "curriculum",
    "interactive",
    "jurisprudence",
    "policy",
    "legal writing"
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
  "thumbnail": "/placeholders/courthouse-icon.svg",
  "learningObjectives": [
    "Analyze major schools of jurisprudence and their impact on judicial decisions.",
    "Evaluate the lifecycle of public policy and its interaction with the legal framework.",
    "Construct persuasive legal arguments in written and oral formats, citing relevant precedent and statutes."
  ],
  "lessons": [
    {
      "id": "law-studies-401-l01",
      "title": "Jurisprudence: The Philosophy of Law",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "law-studies-401-l01-a1",
          "type": "image",
          "title": "Philosopher's Tree",
          "content": "A diagram showing the relationships between Natural Law, Legal Positivism, and Legal Realism."
        },
        {
          "id": "law-studies-401-l01-a2",
          "type": "animation",
          "title": "Judicial Decision Flow",
          "content": "An animated scenario showing how a judge's philosophy influences their ruling on a case."
        }
      ]
    },
    {
      "id": "law-studies-401-l02",
      "title": "Case Analysis: Applying Jurisprudence",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Read the provided summary of a landmark case (e.g., Marbury v. Madison).",
          "Identify the majority opinion's underlying jurisprudential school of thought and provide textual evidence.",
          "How might a judge from a different school (e.g., Legal Realism) have ruled differently? Justify your answer."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-401-l02-a1",
          "type": "practice",
          "title": "Interactive Case Brief",
          "content": "A fillable template for the IRAC (Issue, Rule, Application, Conclusion) method."
        }
      ]
    },
    {
      "id": "law-studies-401-l03",
      "title": "Checkpoint 1: Legal Philosophies",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-401-l03-q1",
          "text": "A judge states, 'The law is what is written and duly enacted by the legislature, nothing more.' This statement most closely aligns with which school of thought?",
          "skillId": "law-studies-401-jurisprudence",
          "options": [
            {
              "id": "a",
              "text": "Legal Positivism"
            },
            {
              "id": "b",
              "text": "Natural Law"
            },
            {
              "id": "c",
              "text": "Legal Realism"
            },
            {
              "id": "d",
              "text": "Critical Legal Studies"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Legal Positivism asserts that law is a human-made construct, defined by the rules and conventions of a given society, separate from any moral considerations."
        },
        {
          "id": "law-studies-401-l03-q2",
          "text": "What is the primary function of the doctrine of *stare decisis*?",
          "skillId": "law-studies-401-legal-systems",
          "options": [
            {
              "id": "a",
              "text": "To ensure consistency and predictability by adhering to precedent."
            },
            {
              "id": "b",
              "text": "To allow judges to ignore previous rulings they disagree with."
            },
            {
              "id": "c",
              "text": "To prioritize statutory law over common law in all cases."
            },
            {
              "id": "d",
              "text": "To appeal a case to a higher court."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "law-studies-401-l04",
      "title": "From Bill to Law: Statutory Interpretation",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "law-studies-401-l04-a1",
          "type": "image",
          "title": "Legislative Process Infographic",
          "content": "A visual flowchart from bill introduction to enactment, including committee review and executive signature."
        },
        {
          "id": "law-studies-401-l04-a2",
          "type": "animation",
          "title": "Interpreting Ambiguity",
          "content": "An animation showing how Textualism and Purposivism lead to different outcomes for the same vague statute."
        }
      ]
    },
    {
      "id": "law-studies-401-l05",
      "title": "Policy Memo Workshop",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Analyze the provided draft legislation on data privacy.",
          "Identify two potential unintended consequences of this policy, citing specific clauses.",
          "Draft a one-paragraph recommendation for a legislative committee: 'Pass As Is,' 'Amend,' or 'Reject,' with justification."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-401-l05-a1",
          "type": "practice",
          "title": "Policy Analysis Matrix",
          "content": "A structured table to help organize pros, cons, stakeholders, and potential economic and social impacts."
        }
      ]
    },
    {
      "id": "law-studies-401-l06",
      "title": "Checkpoint 2: Legislation and Policy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-401-l06-q1",
          "text": "Which method of statutory interpretation focuses primarily on the plain meaning of the words in the law, rather than the legislature's intent?",
          "skillId": "law-studies-401-statutory-interpretation",
          "options": [
            {
              "id": "a",
              "text": "Textualism"
            },
            {
              "id": "b",
              "text": "Purposivism"
            },
            {
              "id": "c",
              "text": "Originalism"
            },
            {
              "id": "d",
              "text": "Realism"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "law-studies-401-l06-q2",
          "text": "A proposed environmental regulation is projected to reduce pollution but also increase costs for small businesses. This cost increase is an example of:",
          "skillId": "law-studies-401-policy-analysis",
          "options": [
            {
              "id": "a",
              "text": "A policy trade-off"
            },
            {
              "id": "b",
              "text": "A procedural error"
            },
            {
              "id": "c",
              "text": "A constitutional violation"
            },
            {
              "id": "d",
              "text": "A judicial precedent"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Policy analysis often involves balancing competing interests and accepting trade-offs, where achieving one positive outcome may lead to a negative secondary effect."
        }
      ]
    },
    {
      "id": "law-studies-401-l07",
      "title": "Crafting the Persuasive Legal Argument",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "law-studies-401-l07-a1",
          "type": "image",
          "title": "Anatomy of a Legal Brief",
          "content": "A labeled diagram of a brief's sections: Question Presented, Statement of Facts, Argument, and Conclusion."
        },
        {
          "id": "law-studies-401-l07-a2",
          "type": "animation",
          "title": "Weak vs. Strong Argument",
          "content": "Shows a poorly constructed argument being revised into a powerful, evidence-based one using clear topic sentences and supporting citations."
        }
      ]
    },
    {
      "id": "law-studies-401-l08",
      "title": "Drafting an Amicus Curiae Brief",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "For the provided hypothetical Supreme Court case, state the position your 'friend of the court' brief will take.",
          "Outline your primary line of reasoning, referencing at least one provided precedent.",
          "Write a compelling 'Question Presented' for the Court that frames the issue in your favor."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-401-l08-a1",
          "type": "practice",
          "title": "Argument Outline Tool",
          "content": "A structured text editor to help build the logical flow of the brief from thesis to conclusion."
        }
      ]
    },
    {
      "id": "law-studies-401-l09",
      "title": "Checkpoint 3: Legal Writing and Advocacy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-401-l09-q1",
          "text": "What is the primary purpose of the 'Statement of Facts' in a legal brief?",
          "skillId": "law-studies-401-legal-writing",
          "options": [
            {
              "id": "a",
              "text": "To present a neutral, chronological account of the events leading to the lawsuit."
            },
            {
              "id": "b",
              "text": "To persuasively frame the narrative in a light favorable to your client while remaining factually accurate."
            },
            {
              "id": "c",
              "text": "To argue the legal points of the case using precedent."
            },
            {
              "id": "d",
              "text": "To list all potential witnesses and evidence to be presented at trial."
            }
          ],
          "correctOptionId": "b",
          "explanation": "While it must be factually accurate, the Statement of Facts is a key opportunity for advocacy, allowing the writer to emphasize details that support their legal argument."
        }
      ]
    },
    {
      "id": "law-studies-401-l10",
      "title": "Capstone: Moot Court Simulation",
      "type": "interactive_project",
      "duration": 45,
      "metadata": {
        "prompts": [
          "Submit your final written brief (as Petitioner or Respondent) based on the provided case file.",
          "Record a 3-minute oral argument summarizing your key points.",
          "Provide a peer review of another student's oral argument, focusing on clarity, persuasiveness, and use of authority."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-401-l10-a1",
          "type": "practice",
          "title": "Moot Court Case Packet",
          "content": "A downloadable PDF with all the facts, relevant statutes, and binding precedents for the simulation."
        },
        {
          "id": "law-studies-401-l10-a2",
          "type": "rubric",
          "title": "Oral Argument Scoring Rubric",
          "content": "A guide detailing assessment criteria, including legal accuracy, poise, and responsiveness to questions."
        }
      ]
    }
  ]
};
