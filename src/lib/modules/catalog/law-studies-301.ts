import type { LearningModule } from "@/lib/modules/types";

export const law_studies_301_Module: LearningModule = {
  "id": "law-studies-301",
  "title": "Law Studies III",
  "description": "An advanced exploration of legal analysis, litigation strategy, and comparative legal systems, designed for students pursuing a deeper understanding of jurisprudence and legal practice.",
  "subject": "Law",
  "tags": [
    "curriculum",
    "interactive",
    "jurisprudence",
    "litigation"
  ],
  "minAge": 17,
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
  "thumbnail": "/icons/scales-of-justice.svg",
  "learningObjectives": [
    "Analyze complex legal texts using principles of statutory interpretation and precedent.",
    "Outline the key stages of civil litigation from complaint to verdict.",
    "Compare and contrast the jurisprudential foundations of common law and civil law systems.",
    "Synthesize legal principles to formulate basic litigation strategies."
  ],
  "lessons": [
    {
      "id": "law-studies-301-l01",
      "title": "Statutory Interpretation & Precedent",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "law-studies-301-l01-a1",
          "type": "image",
          "title": "Diagram of Stare Decisis",
          "content": "A flowchart illustrating the hierarchy of binding vs. persuasive precedent from the Supreme Court down to district courts."
        },
        {
          "id": "law-studies-301-l01-a2",
          "type": "animation",
          "title": "Applying Canons of Construction",
          "content": "An animated scenario showing how the 'Plain Meaning Rule' and 'Ejusdem Generis' are applied to interpret a fictional statute."
        }
      ]
    },
    {
      "id": "law-studies-301-l02",
      "title": "Interactive Case Briefing Workshop",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Read the provided summary of a landmark case.",
          "Identify and state the core legal issue the court had to decide.",
          "Summarize the court's final holding and the key reasoning behind it.",
          "Explain how this case could be used as precedent in a future hypothetical scenario."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-301-l02-a1",
          "type": "practice",
          "title": "Case Briefing Tool",
          "content": "An interactive tool that guides you through structuring a case brief using the IRAC (Issue, Rule, Application, Conclusion) method."
        }
      ]
    },
    {
      "id": "law-studies-301-l03",
      "title": "Checkpoint: Legal Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-301-l03-q1",
          "text": "In a common law system, what is the doctrine that obligates courts to follow historical cases when making a ruling on a similar case?",
          "skillId": "law-studies-301-skill-precedent",
          "options": [
            {
              "id": "a",
              "text": "Stare decisis"
            },
            {
              "id": "b",
              "text": "Res judicata"
            },
            {
              "id": "c",
              "text": "Habeas corpus"
            },
            {
              "id": "d",
              "text": "Inquisitorial principle"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Stare decisis, Latin for 'to stand by things decided,' is the legal principle of determining points in litigation according to precedent."
        },
        {
          "id": "law-studies-301-l03-q2",
          "text": "A court is interpreting a statute that lists 'cars, trucks, motorcycles, and other motor vehicles.' According to the canon of 'ejusdem generis,' which of the following would most likely be included as an 'other motor vehicle'?",
          "skillId": "law-studies-301-skill-interpretation",
          "options": [
            {
              "id": "a",
              "text": "A motorized scooter"
            },
            {
              "id": "b",
              "text": "A bicycle"
            },
            {
              "id": "c",
              "text": "A passenger airplane"
            },
            {
              "id": "d",
              "text": "A skateboard"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Ejusdem generis ('of the same kind') suggests that a general term following a list of specific terms should be interpreted in light of the specific terms. A scooter is in the same class as cars, trucks, and motorcycles."
        }
      ]
    },
    {
      "id": "law-studies-301-l04",
      "title": "The Anatomy of a Lawsuit",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "law-studies-301-l04-a1",
          "type": "image",
          "title": "Flowchart of Civil Litigation",
          "content": "A visual map of the litigation process, from filing a complaint and serving process, through discovery, trial, and the appellate process."
        }
      ]
    },
    {
      "id": "law-studies-301-l05",
      "title": "Mock Trial Prep: Witness Examination",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Review the witness profile and case facts provided.",
          "Draft three open-ended questions for the direct examination of your witness.",
          "Anticipate the opposing counsel's strategy and draft two leading questions for their cross-examination.",
          "Identify a potential evidentiary objection (e.g., hearsay, relevance) to one of the opposing counsel's likely questions."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-301-l05-a1",
          "type": "practice",
          "title": "Witness Profile Simulator",
          "content": "A dynamic scenario with case files and a witness statement to use for drafting your examination questions."
        }
      ]
    },
    {
      "id": "law-studies-301-l06",
      "title": "Checkpoint: Litigation Strategy",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "law-studies-301-l06-q1",
          "text": "What is the primary purpose of the discovery phase in civil litigation?",
          "skillId": "law-studies-301-skill-discovery",
          "options": [
            {
              "id": "a",
              "text": "To allow parties to obtain evidence from each other to prevent surprises at trial."
            },
            {
              "id": "b",
              "text": "To formally charge the defendant with a wrongdoing."
            },
            {
              "id": "c",
              "text": "To select the jury for the trial."
            },
            {
              "id": "d",
              "text": "To have the judge issue a final ruling on the case."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Discovery includes depositions, interrogatories, and requests for documents, all designed to let both sides see the evidence before trial."
        },
        {
          "id": "law-studies-301-l06-q2",
          "text": "A 'motion for summary judgment' is properly filed when:",
          "skillId": "law-studies-301-skill-motions",
          "options": [
            {
              "id": "a",
              "text": "The plaintiff first files the complaint."
            },
            {
              "id": "b",
              "text": "There are no genuine disputes over the material facts, and the moving party is entitled to judgment as a matter of law."
            },
            {
              "id": "c",
              "text": "A party wishes to exclude a piece of evidence from trial."
            },
            {
              "id": "d",
              "text": "The jury has delivered a verdict the judge disagrees with."
            }
          ],
          "correctOptionId": "b",
          "explanation": "This motion argues that the undisputed facts are so compelling that a trial is unnecessary and the judge can rule in their favor immediately."
        }
      ]
    },
    {
      "id": "law-studies-301-l07",
      "title": "Common Law vs. Civil Law Systems",
      "type": "video",
      "duration": 16,
      "learningAids": [
        {
          "id": "law-studies-301-l07-a1",
          "type": "image",
          "title": "Comparative Table of Legal Systems",
          "content": "A side-by-side comparison of Common Law (e.g., USA, UK) and Civil Law (e.g., France, Germany) on key features like sources of law, role of judges, and use of precedent."
        },
        {
          "id": "law-studies-301-l07-a2",
          "type": "animation",
          "title": "The Inquisitorial Judge",
          "content": "An animation showing the active role of a judge in a civil law (inquisitorial) system, who often leads the investigation of facts, contrasting with the more passive, referee-like role in a common law (adversarial) system."
        }
      ]
    },
    {
      "id": "law-studies-301-l08",
      "title": "Global Law Scenario",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Analyze a contract dispute between a company in Japan (civil law) and a company in Canada (common law).",
          "Identify which country's legal system would likely govern the dispute based on the contract's 'choice of law' clause.",
          "Explain one key difference in how evidence would be presented in a Japanese court versus a Canadian court.",
          "Propose a legal strategy that takes advantage of the designated legal system."
        ]
      },
      "learningAids": [
        {
          "id": "law-studies-301-l08-a1",
          "type": "practice",
          "title": "Interactive World Map of Legal Systems",
          "content": "Click on different countries to see their primary legal system (Common, Civil, Religious, or Mixed) and key characteristics."
        }
      ]
    },
    {
      "id": "law-studies-301-l09",
      "title": "Final Assessment: Comprehensive Case Study",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "law-studies-301-l09-q1",
          "text": "Based on the case study provided, which of the following represents the strongest argument for a motion to dismiss the plaintiff's claim?",
          "skillId": "law-studies-301-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "The plaintiff has failed to state a claim upon which relief can be granted."
            },
            {
              "id": "b",
              "text": "A key piece of evidence was obtained improperly."
            },
            {
              "id": "c",
              "text": "The defendant's main witness is not credible."
            },
            {
              "id": "d",
              "text": "The damages requested by the plaintiff are excessive."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A motion to dismiss argues that even if all the facts alleged by the plaintiff are true, there is no legal basis for a lawsuit. The other options relate to evidence or damages, which are addressed later in litigation."
        },
        {
          "id": "law-studies-301-l09-q2",
          "text": "If the case study's dispute were adjudicated in Germany (a civil law system) instead of the United States, what would be the most significant difference in the trial process?",
          "skillId": "law-studies-301-skill-comparative",
          "options": [
            {
              "id": "a",
              "text": "The judge would take an active, inquisitorial role in investigating the facts of the case."
            },
            {
              "id": "b",
              "text": "There would be no lawyers representing the parties."
            },
            {
              "id": "c",
              "text": "The outcome would be decided by a jury of citizens."
            },
            {
              "id": "d",
              "text": "The primary source of law would be judicial precedent from prior cases."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Civil law systems are typically inquisitorial, where the judge is an active fact-finder. Common law systems are adversarial, where the judge acts as a neutral referee between opposing lawyers. Juries are rare in civil law systems."
        },
        {
          "id": "law-studies-301-l09-q3",
          "text": "The central statute in the case study is ambiguous. Applying the principle of 'legislative intent,' what would be the most crucial piece of evidence for a lawyer to present to the court?",
          "skillId": "law-studies-301-skill-interpretation",
          "options": [
            {
              "id": "a",
              "text": "The official record of legislative debates (e.g., Congressional Record) when the law was passed."
            },
            {
              "id": "b",
              "text": "A public opinion poll on what the law should mean."
            },
            {
              "id": "c",
              "text": "A newspaper article written about the law after it was enacted."
            },
            {
              "id": "d",
              "text": "A decision from a court in a different, non-binding jurisdiction."
            }
          ],
          "correctOptionId": "a",
          "explanation": "To determine legislative intent, courts look to the official history and records created by the legislature during the drafting and passing of the law to understand its original purpose."
        }
      ]
    }
  ]
};
