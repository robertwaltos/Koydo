import type { LearningModule } from "@/lib/modules/types";

export const law_studies_201_Module: LearningModule = {
  "id": "law-studies-201",
  "title": "Law Studies II",
  "description": "An intermediate exploration of key legal concepts, including civil procedure, statutory interpretation, contract law, torts, and the structure of legal arguments.",
  "subject": "Law",
  "tags": [
    "curriculum",
    "interactive",
    "legal reasoning",
    "civil law"
  ],
  "minAge": 16,
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
  "thumbnail": "/images/thumbnails/law-studies-201.svg",
  "learningObjectives": [
    "Understand the lifecycle of a civil lawsuit.",
    "Apply canons of construction to interpret ambiguous statutes.",
    "Identify the essential elements of a legally binding contract.",
    "Distinguish between intentional torts, negligence, and strict liability.",
    "Construct a basic legal argument using the IRAC framework."
  ],
  "lessons": [
    {
      "id": "law-studies-201-l01",
      "title": "From Complaint to Verdict: Civil Procedure",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "law-studies-201-l01-a1",
          "type": "image",
          "title": "Flowchart of a Civil Lawsuit",
          "content": "A visual diagram showing the stages: Pleadings, Discovery, Pre-Trial Motions, Trial, and Appeal."
        },
        {
          "id": "law-studies-201-l01-a2",
          "type": "animation",
          "title": "Anatomy of a Pleading",
          "content": "An animated breakdown of a sample complaint, highlighting key sections like jurisdiction, statement of facts, and prayer for relief."
        }
      ]
    },
    {
      "id": "law-studies-201-l02",
      "title": "Interactive Case File: The Motion to Dismiss",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "Read the plaintiff's complaint.",
          "Identify the relevant procedural rule for a motion to dismiss for failure to state a claim.",
          "Draft a one-sentence argument for why the case should be dismissed based on the facts provided."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-201-l02-a1",
          "type": "practice",
          "title": "Case Scenario Simulator",
          "content": "Make choices at different pre-trial stages in a hypothetical lawsuit to see their consequences."
        }
      ]
    },
    {
      "id": "law-studies-201-l03",
      "title": "Checkpoint: Civil Procedure",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-201-l03-q1",
          "text": "What is the primary purpose of the 'discovery' phase in a lawsuit?",
          "skillId": "procedure-discovery",
          "options": [
            {
              "id": "a",
              "text": "To allow parties to gather evidence and information from each other."
            },
            {
              "id": "b",
              "text": "To formally file the initial lawsuit with the court."
            },
            {
              "id": "c",
              "text": "To select the jury for the trial."
            },
            {
              "id": "d",
              "text": "To present final arguments to the judge."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "law-studies-201-l03-q2",
          "text": "A court's authority to hear a particular type of case is known as:",
          "skillId": "procedure-jurisdiction",
          "options": [
            {
              "id": "a",
              "text": "Venue"
            },
            {
              "id": "b",
              "text": "Subject-Matter Jurisdiction"
            },
            {
              "id": "c",
              "text": "A Precedent"
            },
            {
              "id": "d",
              "text": "A Pleading"
            }
          ],
          "correctOptionId": "b"
        }
      ]
    },
    {
      "id": "law-studies-201-l04",
      "title": "Reading the Law: Canons of Construction",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "law-studies-201-l04-a1",
          "type": "image",
          "title": "The Interpreter's Toolkit",
          "content": "A concept card illustrating key canons of statutory interpretation, such as the Plain Meaning Rule, Ejusdem Generis, and Expressio Unius."
        },
        {
          "id": "law-studies-201-l04-a2",
          "type": "animation",
          "title": "The 'No Vehicles in the Park' Problem",
          "content": "A classic legal hypothetical animated to show how different interpretation rules lead to different outcomes for a skateboard, an ambulance, or a bicycle."
        }
      ]
    },
    {
      "id": "law-studies-201-l05",
      "title": "You Be the Judge: The Ambiguous Statute",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Read the hypothetical statute about 'domestic animals' in a restaurant.",
          "Identify the ambiguous phrase in the statute.",
          "Apply the 'ejusdem generis' canon to argue whether a pet snake is permitted."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-201-l05-a1",
          "type": "practice",
          "title": "Statutory Analysis Sandbox",
          "content": "An interactive tool where you can highlight parts of a fictional law and apply different interpretive rules to see the resulting legal conclusion."
        }
      ]
    },
    {
      "id": "law-studies-201-l06",
      "title": "Making it Binding: Elements of a Contract",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "law-studies-201-l06-a1",
          "type": "image",
          "title": "The Triangle of Contract Formation",
          "content": "A clear diagram with three vertices: Offer, Acceptance, and Consideration, explaining how they interrelate to form a binding agreement."
        }
      ]
    },
    {
      "id": "law-studies-201-l07",
      "title": "Case Study: Is the Email a Valid Contract?",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "Analyze the provided email exchange between two parties.",
          "Identify the sentence that constitutes a potential 'offer'.",
          "Determine if valid 'consideration' exists and explain why or why not."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-201-l07-a1",
          "type": "practice",
          "title": "Contract Builder",
          "content": "Drag and drop clauses into a template to assemble a valid, simple contract for the sale of goods."
        }
      ]
    },
    {
      "id": "law-studies-201-l08",
      "title": "Checkpoint: Contracts",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-201-l08-q1",
          "text": "Which of the following is NOT an essential element of a valid contract?",
          "skillId": "contracts-formation",
          "options": [
            {
              "id": "a",
              "text": "Offer"
            },
            {
              "id": "b",
              "text": "A written document"
            },
            {
              "id": "c",
              "text": "Acceptance"
            },
            {
              "id": "d",
              "text": "Consideration"
            }
          ],
          "correctOptionId": "b",
          "explanation": "While many contracts are written, a written document is not a universal requirement; oral contracts can also be valid and enforceable."
        },
        {
          "id": "law-studies-201-l08-q2",
          "text": "In contract law, 'consideration' refers to:",
          "skillId": "contracts-consideration",
          "options": [
            {
              "id": "a",
              "text": "The time taken to think about the offer."
            },
            {
              "id": "b",
              "text": "A gesture of politeness between parties."
            },
            {
              "id": "c",
              "text": "Something of value exchanged between the parties."
            },
            {
              "id": "d",
              "text": "The formal signature on the document."
            }
          ],
          "correctOptionId": "c"
        }
      ]
    },
    {
      "id": "law-studies-201-l09",
      "title": "Beyond Crime: An Introduction to Torts",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "law-studies-201-l09-a1",
          "type": "image",
          "title": "The Three Pillars of Torts",
          "content": "A visual showing three columns for Intentional Torts, Negligence, and Strict Liability, with clear examples under each category."
        },
        {
          "id": "law-studies-201-l09-a2",
          "type": "animation",
          "title": "The Slip and Fall: Anatomy of Negligence",
          "content": "An animation breaking down the four elements—Duty, Breach, Causation, and Damages—in a classic grocery store slip-and-fall scenario."
        }
      ]
    },
    {
      "id": "law-studies-201-l10",
      "title": "Negligence Detective: The Case of the Errant Golf Ball",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "Read the scenario about a golfer whose ball breaks a nearby car window.",
          "Identify the 'duty of care' the golfer owed to others.",
          "Conclude whether all four elements of negligence are present."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-201-l10-a1",
          "type": "practice",
          "title": "Tortfeasor Triage",
          "content": "An interactive game where you quickly categorize different scenarios as intentional torts, negligence, or no tort at all."
        }
      ]
    },
    {
      "id": "law-studies-201-l11",
      "title": "Thinking Like a Lawyer: Structuring Arguments with IRAC",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "law-studies-201-l11-a1",
          "type": "image",
          "title": "The IRAC Pyramid",
          "content": "A diagram showing how to build a legal argument from the base (Issue), through the structure (Rule, Application), to the point (Conclusion)."
        }
      ]
    },
    {
      "id": "law-studies-201-l12",
      "title": "Capstone: Draft a Mock Trial Brief",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Identify the core legal Issue in the final case file.",
          "State the relevant legal Rule from contract or tort law.",
          "Apply the rule to the specific facts of the case.",
          "Write a one-sentence Conclusion summarizing your argument."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-201-l12-a1",
          "type": "practice",
          "title": "Argument Architect",
          "content": "A guided template that helps you structure your analysis of the final case file using the IRAC method."
        }
      ]
    },
    {
      "id": "law-studies-201-l13",
      "title": "Law Studies II: Final Exam",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "law-studies-201-l13-q1",
          "text": "A statute forbids 'dangerous animals' in an apartment building. A tenant has a large, but gentle, St. Bernard. Which legal field governs how a court would determine if the dog is 'dangerous' under the statute?",
          "skillId": "synthesis-stat-interp",
          "options": [
            {
              "id": "a",
              "text": "Contract Law"
            },
            {
              "id": "b",
              "text": "Civil Procedure"
            },
            {
              "id": "c",
              "text": "Statutory Interpretation"
            },
            {
              "id": "d",
              "text": "Tort Law"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "law-studies-201-l13-q2",
          "text": "To prove negligence, a plaintiff must establish Duty, Breach, Causation, and what fourth element?",
          "skillId": "torts-negligence",
          "options": [
            {
              "id": "a",
              "text": "Intent"
            },
            {
              "id": "b",
              "text": "Damages"
            },
            {
              "id": "c",
              "text": "Consideration"
            },
            {
              "id": "d",
              "text": "Jurisdiction"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "law-studies-201-l13-q3",
          "text": "In the IRAC framework, which section connects the legal rule to the specific facts of the case?",
          "skillId": "argument-structure-irac",
          "options": [
            {
              "id": "a",
              "text": "Issue"
            },
            {
              "id": "b",
              "text": "Rule"
            },
            {
              "id": "c",
              "text": "Application"
            },
            {
              "id": "d",
              "text": "Conclusion"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Application (or Analysis) is the core of the argument, where you explain *how* the established rule applies to the particular facts you are examining."
        }
      ]
    }
  ]
};
