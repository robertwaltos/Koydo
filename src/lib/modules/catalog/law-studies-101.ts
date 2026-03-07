import type { LearningModule } from "@/lib/modules/types";

export const law_studies_101_Module: LearningModule = {
  "id": "law-studies-101",
  "title": "Introduction to Law",
  "description": "Explore the foundations of legal systems, constitutional principles, criminal and civil law, contract and tort doctrine, and legal reasoning methods used to analyze cases and resolve disputes.",
  "subject": "Law",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "legal",
    "pre-law"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Distinguish between common law, civil law, statutory law, and constitutional law systems",
    "Explain the structure of the court system including trial, appellate, and supreme court levels",
    "Identify fundamental constitutional rights and the role of judicial review",
    "Analyze the elements of a crime including actus reus, mens rea, and available defenses",
    "Apply the elements of a valid contract and distinguish breach remedies from tort remedies",
    "Evaluate legal problems using the IRAC method (Issue, Rule, Application, Conclusion)",
    "Interpret the role of precedent and stare decisis in shaping legal outcomes"
  ],
  "lessons": [
    {
      "id": "law-studies-101-l01",
      "title": "Sources and Types of Law",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "law-studies-101-l01-c1",
          "title": "Common Law vs. Civil Law Systems",
          "content": "Legal systems around the world are generally divided into two main families: common law and civil law. Common law, used in countries like the United States, the United Kingdom, and Canada, is like a story that judges write over time. Decisions in past cases create binding precedents that future courts must follow. This principle, known as 'stare decisis' (to stand by things decided), makes judicial interpretation a powerful force in shaping the law.\n\nIn contrast, civil law systems, found in most of continental Europe, Latin America, and parts of Asia, rely on comprehensive legal codes created by legislatures. Think of these codes as detailed instruction manuals. Judges in these systems primarily apply the rules from the code to the facts of a case, rather than creating new law through their rulings. This makes the law highly structured and predictable. Some places, like Louisiana and Quebec, have unique hybrid systems that blend elements of both traditions. Understanding which system is in place is the first step to analyzing any legal question."
        },
        {
          "id": "law-studies-101-l01-c2",
          "title": "The Hierarchy of Law",
          "content": "Laws come from different sources, organized in a clear hierarchy of authority. At the very top is constitutional law. The U.S. Constitution is the 'supreme law of the land,' meaning no other law can violate its principles. If a law passed by a legislature conflicts with the Constitution, courts can declare it unconstitutional and void.\n\nBelow the Constitution is statutory law. These are the laws, or statutes, passed by legislative bodies like the U.S. Congress or your state legislature. Next comes administrative law, which consists of the rules and regulations created by government agencies (like the EPA or the SEC) to implement and enforce statutes.\n\nFinally, we have case law, also known as common law or judge-made law. This body of law is created from the decisions judges make in court cases. When judges interpret the Constitution and statutes, their rulings become precedents that lower courts in their jurisdiction must follow, ensuring that the law is applied consistently."
        },
        {
          "id": "law-studies-101-l01-c3",
          "title": "Jurisdiction and the Rule of Law",
          "content": "Jurisdiction is a court's authority to hear a case. For a court to make a valid ruling, it must have two types of jurisdiction. First is subject-matter jurisdiction, which is the power to hear a specific type of case. For example, federal courts handle cases involving federal laws, while state courts handle most other matters like family law and contract disputes. Second is personal jurisdiction, which is the court's power over the specific people or parties in the lawsuit. This usually requires that the parties have some connection to the state where the court is located.\n\nUnderpinning the entire legal system is the rule of law. This is the core principle that everyone, including government officials, is accountable under the law. It requires that laws be clear, public, stable, and applied evenly. Without the rule of law, a legal system cannot be fair or predictable."
        }
      ],
      "flashcards": [
        {
          "id": "law-studies-101-l01-f1",
          "front": "Legal system where judges follow precedent from prior court decisions.",
          "back": "Common law system (used in the US, UK, Canada, Australia)."
        },
        {
          "id": "law-studies-101-l01-f2",
          "front": "Legal system built on comprehensive written codes rather than judicial precedent.",
          "back": "Civil law system (used in France, Germany, Japan, and most of continental Europe)."
        },
        {
          "id": "law-studies-101-l01-f3",
          "front": "The doctrine that courts must follow decisions of higher courts in the same jurisdiction.",
          "back": "Stare decisis (Latin: 'to stand by things decided')."
        },
        {
          "id": "law-studies-101-l01-f4",
          "front": "The supreme law of the land in the United States, which overrides all conflicting statutes.",
          "back": "The U.S. Constitution."
        }
      ],
      "learningAids": [
        {
          "id": "law-studies-101-l01-a1",
          "type": "image",
          "title": "Hierarchy of U.S. Law",
          "content": "A pyramid diagram illustrating the hierarchy of U.S. law: U.S. Constitution at the top, followed by Federal Statutes & Treaties, State Constitutions, State Statutes, Administrative Regulations, and finally Common/Case Law at the base."
        }
      ]
    },
    {
      "id": "law-studies-101-l02",
      "title": "The Court System and Legal Process",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "law-studies-101-l02-c1",
          "title": "Trial Courts vs. Appellate Courts",
          "content": "The legal journey for most cases begins in a trial court, also known as a court of first instance. This is where the action happens: evidence is presented, witnesses testify, and a judge or jury determines the facts of the case. In the federal system, these are the U.S. District Courts.\n\nIf a party is unhappy with the trial court's decision, they can appeal to an appellate court. Appellate courts do not conduct new trials. They don't hear from witnesses or examine new evidence. Instead, their job is to review the record from the trial court to determine if the judge made any legal errors that affected the outcome. The U.S. Courts of Appeals handle federal appeals.\n\nAt the top of the pyramid is the U.S. Supreme Court, the highest appellate court. It hears only a small fraction of cases it is asked to review each year, typically those involving major constitutional questions. Most state court systems mirror this three-tiered structure of trial courts, intermediate appellate courts, and a state supreme court."
        },
        {
          "id": "law-studies-101-l02-c2",
          "title": "Federal vs. State Court Systems",
          "content": "The United States has a dual court system, with federal courts and state courts operating side-by-side. Federal courts have limited jurisdiction, meaning they can only hear specific types of cases. These include cases involving federal laws, the U.S. Constitution, or disputes between citizens of different states where the amount in controversy exceeds $75,000.\n\nState courts, on the other hand, are courts of general jurisdiction. They handle the vast majority of legal disputes in the country—over 95% of all cases. This includes most criminal prosecutions, family law matters, contract disputes, and personal injury claims.\n\nSometimes, a case can be filed in either federal or state court, a situation known as concurrent jurisdiction. In these situations, the parties may have strategic reasons for choosing one system over the other, as each has its own set of procedural rules."
        },
        {
          "id": "law-studies-101-l02-c3",
          "title": "Civil vs. Criminal Procedure",
          "content": "Legal cases are broadly divided into two categories: civil and criminal. A civil case involves a dispute between private parties (individuals, businesses, etc.). The person who brings the lawsuit is the plaintiff, and the person being sued is the defendant. The goal is usually to obtain a remedy, like monetary damages. To win, the plaintiff must prove their case by a 'preponderance of the evidence,' meaning it is more likely than not (>50%) that their claim is true.\n\nA criminal case is brought by the government (the prosecution) against a defendant accused of committing a crime. The stakes are much higher, as a conviction can result in fines, imprisonment, or even death. Because of this, the burden of proof is much stricter: the prosecution must prove the defendant's guilt 'beyond a reasonable doubt.' Defendants in criminal cases also have significant constitutional protections, such as the right to an attorney and the right to remain silent."
        }
      ],
      "interactiveActivities": [
        {
          "id": "law-studies-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Federal vs. State Court",
          "description": "Sort these cases into Federal Court or State Court: Constitutional rights violation (Federal), Dispute between citizens of different states over $75,000 (Federal), Divorce proceeding (State), Robbery charge under state penal code (State), Patent infringement (Federal), Car accident personal injury suit (State), Violation of federal securities law (Federal), Landlord-tenant dispute (State)."
        }
      ],
      "flashcards": [
        {
          "id": "law-studies-101-l02-f1",
          "front": "Court where a case is first heard, evidence is presented, and facts are determined.",
          "back": "Trial court (e.g., U.S. District Court at the federal level)."
        },
        {
          "id": "law-studies-101-l02-f2",
          "front": "The standard of proof required to win a civil case.",
          "back": "Preponderance of the evidence (more likely than not, >50%)."
        },
        {
          "id": "law-studies-101-l02-f3",
          "front": "The standard of proof required to convict in a criminal case.",
          "back": "Beyond a reasonable doubt (the highest standard of proof)."
        },
        {
          "id": "law-studies-101-l02-f4",
          "front": "The process by which the U.S. Supreme Court selects cases to hear.",
          "back": "Writ of certiorari (cert) — the Court grants cert to about 70–80 cases per year."
        }
      ],
      "learningAids": [
        {
          "id": "law-studies-101-l02-a1",
          "type": "image",
          "title": "U.S. Court Structures",
          "content": "A dual-path flowchart showing the structure of the U.S. Federal Court System (District Court -> Circuit Court of Appeals -> Supreme Court) alongside a typical State Court System (Trial Court -> Intermediate Appellate Court -> State Supreme Court)."
        }
      ]
    },
    {
      "id": "law-studies-101-l03",
      "title": "Legal Foundations Checkpoint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-101-l03-q1",
          "text": "Which legal system relies primarily on judicial precedent and the doctrine of stare decisis?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Common law"
            },
            {
              "id": "b",
              "text": "Civil law"
            },
            {
              "id": "c",
              "text": "Administrative law"
            },
            {
              "id": "d",
              "text": "Canon law"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Common law systems (US, UK, Canada, Australia) build legal rules through judicial decisions. The doctrine of stare decisis requires courts to follow precedent set by higher courts in the same jurisdiction."
        },
        {
          "id": "law-studies-101-l03-q2",
          "text": "What is the burden of proof in a criminal case?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Beyond a reasonable doubt"
            },
            {
              "id": "b",
              "text": "Preponderance of the evidence"
            },
            {
              "id": "c",
              "text": "Clear and convincing evidence"
            },
            {
              "id": "d",
              "text": "Probable cause"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Criminal cases require proof 'beyond a reasonable doubt' — the highest standard — because a conviction can result in loss of liberty or life. Civil cases use the lower 'preponderance' standard."
        },
        {
          "id": "law-studies-101-l03-q3",
          "text": "An appellate court's primary function is to:",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Review the trial court's application of law for errors"
            },
            {
              "id": "b",
              "text": "Hear new witness testimony"
            },
            {
              "id": "c",
              "text": "Empanel a jury to retry the case"
            },
            {
              "id": "d",
              "text": "Negotiate a plea bargain"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Appellate courts review whether the trial court correctly applied the law. They do not hear new evidence, call witnesses, or use juries — they review the existing record and legal arguments."
        },
        {
          "id": "law-studies-101-l03-q4",
          "text": "A patent infringement case would most likely be filed in:",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Federal court, because patent law is federal law"
            },
            {
              "id": "b",
              "text": "State court, because it involves a private dispute"
            },
            {
              "id": "c",
              "text": "Small claims court, because no jury is needed"
            },
            {
              "id": "d",
              "text": "Family court, because it involves property"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Patent law is exclusively federal under Article I, Section 8 of the Constitution. Federal courts have exclusive subject-matter jurisdiction over patent cases, regardless of the amount in controversy."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "flashcards": [
        {
          "id": "law-studies-101-l03-f1",
          "front": "Approximately what percentage of all US litigation is handled by state courts?",
          "back": "About 95% — state courts handle the vast majority of legal disputes."
        },
        {
          "id": "law-studies-101-l03-f2",
          "front": "Minimum amount in controversy for federal diversity jurisdiction.",
          "back": "$75,000 (plus the parties must be citizens of different states)."
        },
        {
          "id": "law-studies-101-l03-f3",
          "front": "The principle that no person — including government officials — is above the law.",
          "back": "The rule of law."
        },
        {
          "id": "law-studies-101-l03-f4",
          "front": "The three-tier structure of most US court systems.",
          "back": "Trial court → Intermediate appellate court → Supreme court."
        }
      ],
      "learningAids": [
        {
          "id": "law-studies-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "For complex questions, use the 'IRAC' method to structure your reasoning: Identify the Issue, state the Rule, Apply it to the facts, and form a Conclusion."
        }
      ]
    },
    {
      "id": "law-studies-101-l04",
      "title": "Constitutional Law and Rights",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "law-studies-101-l04-c1",
          "title": "The Bill of Rights and Fundamental Freedoms",
          "content": "The Bill of Rights consists of the first ten amendments to the U.S. Constitution, ratified in 1791 to protect individual liberties. The First Amendment guarantees core freedoms of expression: speech, religion, press, assembly, and petition. The Fourth Amendment protects our privacy by prohibiting unreasonable searches and seizures by the government, generally requiring a warrant based on probable cause. The Fifth Amendment provides crucial protections for those accused of crimes, including the right against self-incrimination (you can't be forced to testify against yourself) and protection from double jeopardy (being tried twice for the same crime). The Sixth Amendment ensures a fair trial by guaranteeing the rights to a speedy and public trial, an impartial jury, and the assistance of legal counsel. Originally, these rights only limited the federal government, but through a process called incorporation via the Fourteenth Amendment, most now apply to state governments as well."
        },
        {
          "id": "law-studies-101-l04-c2",
          "title": "Due Process and Equal Protection",
          "content": "The Fourteenth Amendment, ratified after the Civil War, is a cornerstone of civil rights. It contains two vital clauses. The Due Process Clause prevents states from depriving any person of 'life, liberty, or property, without due process of law.' This has two aspects: procedural due process (requiring fair procedures, like notice and a hearing) and substantive due process (protecting fundamental rights not explicitly listed in the Constitution, like the right to privacy).\n\nThe Equal Protection Clause requires states to apply their laws equally to all people in similar situations. This clause is central to combating discrimination. Courts use different levels of scrutiny to evaluate laws that treat groups of people differently. Classifications based on race or national origin face 'strict scrutiny,' the highest standard, and are almost always struck down. Classifications based on gender face 'intermediate scrutiny,' while most economic and social laws are subject to the much more lenient 'rational basis review.'"
        },
        {
          "id": "law-studies-101-l04-c3",
          "title": "Judicial Review and Separation of Powers",
          "content": "The U.S. government is built on the principle of separation of powers, dividing authority among three branches: the legislative (Congress, which makes laws), the executive (the President, who enforces laws), and the judicial (the courts, which interpret laws). To prevent any one branch from becoming too powerful, the Constitution created a system of checks and balances.\n\nA key power of the judicial branch is judicial review, established in the landmark 1803 case Marbury v. Madison. This is the authority of courts to review laws and actions taken by the other branches and to declare them unconstitutional if they conflict with the Constitution. For example, the President can veto a law passed by Congress, but Congress can override the veto. The courts, through judicial review, can then strike down that law if it violates the Constitution, ensuring that the Constitution remains the supreme law of the land."
        }
      ],
      "flashcards": [
        {
          "id": "law-studies-101-l04-f1",
          "front": "The landmark 1803 case that established judicial review in the United States.",
          "back": "Marbury v. Madison — Chief Justice Marshall declared the judiciary has the power to strike down unconstitutional laws."
        },
        {
          "id": "law-studies-101-l04-f2",
          "front": "Amendment that protects against unreasonable searches and seizures.",
          "back": "The Fourth Amendment (requires probable cause for warrants)."
        },
        {
          "id": "law-studies-101-l04-f3",
          "front": "The highest level of judicial scrutiny, applied to government classifications by race.",
          "back": "Strict scrutiny — the government must show a compelling interest and narrowly tailored means."
        },
        {
          "id": "law-studies-101-l04-f4",
          "front": "Two types of due process protected by the Fifth and Fourteenth Amendments.",
          "back": "Procedural due process (fair procedures) and substantive due process (protection of fundamental rights)."
        }
      ],
      "learningAids": [
        {
          "id": "law-studies-101-l04-a1",
          "type": "image",
          "title": "The Bill of Rights",
          "content": "An infographic of the Bill of Rights, with icons representing the core freedom of each of the first ten amendments (e.g., a microphone for the 1st, a shield for the 4th, scales of justice for the 6th)."
        }
      ]
    },
    {
      "id": "law-studies-101-l05",
      "title": "Criminal Law Fundamentals",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "law-studies-101-l05-c1",
          "title": "Elements of a Crime: Actus Reus and Mens Rea",
          "content": "For a person to be convicted of most crimes, the prosecution must prove two essential elements. The first is the actus reus, or the 'guilty act.' This is the physical act (or in some cases, a failure to act) that is forbidden by law, such as taking someone's property or driving while intoxicated. The second element is the mens rea, or the 'guilty mind.' This refers to the defendant's mental state or level of intent at the time of the act. The Model Penal Code, a framework used by many states, defines four levels of mens rea: \n1. **Purposely**: The defendant had a conscious objective to cause the result. \n2. **Knowingly**: The defendant was practically certain their conduct would cause the result. \n3. **Recklessly**: The defendant consciously disregarded a substantial and unjustifiable risk. \n4. **Negligently**: The defendant should have been aware of a substantial risk. \nThe required mens rea can determine the severity of the crime; for example, acting purposely could lead to a first-degree murder charge, while acting negligently could result in a lesser charge of involuntary manslaughter."
        },
        {
          "id": "law-studies-101-l05-c2",
          "title": "Categories of Crime and Inchoate Offenses",
          "content": "Crimes are generally categorized by their seriousness. Felonies are the most serious crimes, such as murder, robbery, and arson, punishable by more than one year in prison. Misdemeanors are less serious offenses, like petty theft or simple assault, typically punishable by up to one year in jail. The least serious offenses are infractions, like traffic violations, which usually result only in a fine.\n\nCriminal law also punishes inchoate, or incomplete, offenses. These are crimes that are stopped before they are fully carried out. The main types are: \n- **Attempt**: Taking a substantial step toward committing a crime with the intent to complete it. \n- **Conspiracy**: An agreement between two or more people to commit a crime, plus an overt act in furtherance of the agreement. \n- **Solicitation**: Asking, encouraging, or commanding someone else to commit a crime."
        },
        {
          "id": "law-studies-101-l05-c3",
          "title": "Defenses in Criminal Law",
          "content": "A criminal defendant can raise several types of defenses. Justification defenses argue that the defendant's conduct was not wrongful under the circumstances. A classic example is self-defense, where a person may use reasonable force to protect themselves from imminent harm. Another is necessity, which may justify an act done to prevent a greater harm.\n\nExcuse defenses argue that while the act was wrong, the defendant should not be held fully responsible. These include the insanity defense (the defendant lacked the mental capacity to understand their actions were wrong), duress (the defendant was forced to commit the crime under threat of serious harm), and infancy (the defendant is too young to be held criminally responsible).\n\nFinally, procedural defenses focus on improper conduct by the government. These include entrapment (police induced the defendant to commit a crime they otherwise wouldn't have) and violations of constitutional rights, such as an illegal search."
        }
      ],
      "interactiveActivities": [
        {
          "id": "law-studies-101-l05-a1",
          "type": "matching_pairs",
          "title": "Mens Rea Matching",
          "description": "Match the mens rea level to its definition: Purposely → Conscious objective to cause a result, Knowingly → Awareness that conduct will almost certainly cause a result, Recklessly → Conscious disregard of a substantial risk, Negligently → Failure to perceive a substantial risk."
        }
      ],
      "flashcards": [
        {
          "id": "law-studies-101-l05-f1",
          "front": "The voluntary physical act or omission that constitutes a crime.",
          "back": "Actus reus (Latin: 'guilty act')."
        },
        {
          "id": "law-studies-101-l05-f2",
          "front": "The four levels of mens rea under the Model Penal Code.",
          "back": "Purposely, knowingly, recklessly, negligently (in descending order of culpability)."
        },
        {
          "id": "law-studies-101-l05-f3",
          "front": "An agreement between two or more persons to commit a crime, plus an overt act.",
          "back": "Conspiracy (an inchoate offense)."
        },
        {
          "id": "law-studies-101-l05-f4",
          "front": "The insanity defense standard asking whether the defendant knew the act was wrong.",
          "back": "The M'Naghten rule (also spelled McNaughtan)."
        }
      ],
      "learningAids": [
        {
          "id": "law-studies-101-l05-a1",
          "type": "image",
          "title": "Levels of Mens Rea",
          "content": "A chart matching the four levels of Mens Rea (Purposely, Knowingly, Recklessly, Negligently) with simple definitions and a clear example for each."
        }
      ]
    },
    {
      "id": "law-studies-101-l06",
      "title": "Constitutional & Criminal Law Checkpoint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-101-l06-q1",
          "text": "Which case established the power of judicial review — the authority of courts to declare laws unconstitutional?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Marbury v. Madison (1803)"
            },
            {
              "id": "b",
              "text": "Brown v. Board of Education (1954)"
            },
            {
              "id": "c",
              "text": "Miranda v. Arizona (1966)"
            },
            {
              "id": "d",
              "text": "Roe v. Wade (1973)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "In Marbury v. Madison, Chief Justice John Marshall established that the Supreme Court has the power to review acts of Congress and declare them void if they conflict with the Constitution."
        },
        {
          "id": "law-studies-101-l06-q2",
          "text": "A defendant who consciously disregards a substantial and unjustifiable risk acts with which level of mens rea?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Recklessly"
            },
            {
              "id": "b",
              "text": "Purposely"
            },
            {
              "id": "c",
              "text": "Negligently"
            },
            {
              "id": "d",
              "text": "Knowingly"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Recklessness under the Model Penal Code means the defendant was aware of a substantial risk but consciously chose to disregard it. This differs from negligence (unaware of the risk) and purposefulness (intended the result)."
        },
        {
          "id": "law-studies-101-l06-q3",
          "text": "The Equal Protection Clause of the Fourteenth Amendment requires government classifications based on race to survive:",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Strict scrutiny — compelling interest and narrowly tailored means"
            },
            {
              "id": "b",
              "text": "Rational basis review — any legitimate government interest"
            },
            {
              "id": "c",
              "text": "Intermediate scrutiny — important government interest"
            },
            {
              "id": "d",
              "text": "No scrutiny — racial classifications are always permitted"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Race is a suspect classification triggering strict scrutiny, the most demanding standard. The government must prove a compelling interest and that the classification is narrowly tailored to achieve it. Very few racial classifications survive this standard."
        },
        {
          "id": "law-studies-101-l06-q4",
          "text": "Which criminal defense argues that the defendant's conduct was not wrongful because it was necessary to prevent a greater harm?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Necessity (justification defense)"
            },
            {
              "id": "b",
              "text": "Insanity (excuse defense)"
            },
            {
              "id": "c",
              "text": "Entrapment (procedural defense)"
            },
            {
              "id": "d",
              "text": "Statute of limitations (procedural defense)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Necessity is a justification defense — the defendant admits to committing the act but argues it was the lesser evil. For example, breaking into a cabin during a blizzard to avoid freezing to death. The defendant must show there was no reasonable legal alternative."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "flashcards": [
        {
          "id": "law-studies-101-l06-f1",
          "front": "The two essential elements required for most crimes.",
          "back": "Actus reus (guilty act) and mens rea (guilty mind)."
        },
        {
          "id": "law-studies-101-l06-f2",
          "front": "Amendment that guarantees the right to counsel, a speedy trial, and an impartial jury.",
          "back": "The Sixth Amendment."
        },
        {
          "id": "law-studies-101-l06-f3",
          "front": "Three categories of criminal defense.",
          "back": "Justification (e.g., self-defense), Excuse (e.g., insanity), and Procedural (e.g., entrapment)."
        },
        {
          "id": "law-studies-101-l06-f4",
          "front": "Three inchoate (incomplete) offenses.",
          "back": "Attempt, conspiracy, and solicitation."
        }
      ]
    },
    {
      "id": "law-studies-101-l07",
      "title": "Contract Law and Torts",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "law-studies-101-l07-c1",
          "title": "Elements of a Valid Contract",
          "content": "A contract is a legally enforceable agreement. For a contract to be valid, four elements must be present. First, there must be an **Offer** by one party. Second, there must be **Acceptance** of that offer by the other party. Third, there must be **Consideration**, which means both sides must exchange something of value (e.g., money for goods). Finally, both parties must have the legal **Capacity** to enter into a contract (they must be of legal age and sound mind). Some contracts, such as those for the sale of land or for goods over $500, must be in writing to be enforceable under a rule called the Statute of Frauds."
        },
        {
          "id": "law-studies-101-l07-c2",
          "title": "Breach of Contract and Remedies",
          "content": "When a party fails to perform their obligations under a contract without a valid legal excuse, it's called a breach of contract. If the breach is material (serious), the non-breaching party is excused from their own performance and can sue for damages. If the breach is minor, the non-breaching party must still perform but can sue for any losses caused by the minor breach. The most common remedy for breach is compensatory damages, which is money intended to put the injured party in the position they would have been in if the contract had been fulfilled. In rare cases involving unique items like real estate or a one-of-a-kind painting, a court might order specific performance, forcing the breaching party to actually perform the contract."
        },
        {
          "id": "law-studies-101-l07-c3",
          "title": "Tort Law: Negligence and Strict Liability",
          "content": "A tort is a civil wrong that causes harm to another person, leading to legal liability. The most common tort is negligence. To win a negligence lawsuit, a plaintiff must prove four elements: (1) **Duty** (the defendant had a duty to act with reasonable care), (2) **Breach** (the defendant failed to meet that duty), (3) **Causation** (the defendant's breach actually and foreseeably caused the plaintiff's injury), and (4) **Damages** (the plaintiff suffered a legally recognized injury). Another type of tort is strict liability, where a defendant can be held liable for harm even without being negligent. This typically applies to abnormally dangerous activities (like using explosives) or to manufacturers of defective products that cause injury."
        }
      ],
      "flashcards": [
        {
          "id": "law-studies-101-l07-f1",
          "front": "The four elements required to form a valid contract.",
          "back": "Offer, Acceptance, Consideration, and Capacity."
        },
        {
          "id": "law-studies-101-l07-f2",
          "front": "The four elements of a negligence claim.",
          "back": "Duty, Breach, Causation (actual + proximate), and Damages."
        },
        {
          "id": "law-studies-101-l07-f3",
          "front": "A remedy requiring the breaching party to actually perform the contract (common for unique goods).",
          "back": "Specific performance."
        },
        {
          "id": "law-studies-101-l07-f4",
          "front": "Liability imposed without fault — often for abnormally dangerous activities or defective products.",
          "back": "Strict liability."
        }
      ],
      "learningAids": [
        {
          "id": "law-studies-101-l07-a1",
          "type": "image",
          "title": "Civil Law: Contracts vs. Torts",
          "content": "A Venn diagram showing the relationship between Contract Law and Tort Law as two major branches of Civil Law. The diagram can highlight key differences (e.g., contracts arise from agreements, torts arise from duties imposed by law) and overlaps (e.g., a single action can be both a breach of contract and a tort)."
        }
      ]
    },
    {
      "id": "law-studies-101-l08",
      "title": "Legal Reasoning and Case Analysis",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "law-studies-101-l08-c1",
          "title": "The IRAC Method",
          "content": "Legal analysis requires a structured approach. The most common framework taught in law schools is the IRAC method. IRAC is an acronym that stands for:\n- **Issue**: Identify the specific legal question that needs to be answered.\n- **Rule**: State the relevant legal rule or principle that governs the issue. This could come from a statute or a prior court case.\n- **Application**: Apply the rule to the specific facts of the case. This is the most critical step, where you analyze how the facts fit (or don't fit) the rule.\n- **Conclusion**: State the likely outcome of the issue based on your application. \nUsing IRAC ensures your legal analysis is organized, thorough, and logical."
        },
        {
          "id": "law-studies-101-l08-c2",
          "title": "Precedent, Stare Decisis, and Distinguishing Cases",
          "content": "In a common law system, the doctrine of stare decisis requires courts to follow precedent—the decisions of higher courts in the same jurisdiction. This ensures consistency and predictability. Precedent can be binding, meaning a lower court must follow it, or persuasive, meaning the court may consider it but is not required to follow it (e.g., a decision from another state). A key skill for a lawyer is distinguishing a case. This involves arguing that a prior precedent should not apply to the current case because the material facts are significantly different. In rare instances, a higher court may overrule its own precedent if it finds the prior decision was wrongly decided or is no longer workable, as the Supreme Court did in Brown v. Board of Education when it overturned Plessy v. Ferguson."
        },
        {
          "id": "law-studies-101-l08-c3",
          "title": "Statutory Interpretation",
          "content": "When the language of a statute is ambiguous, courts must interpret its meaning. Judges use several tools for this. The first step is often the plain meaning rule, which looks at the ordinary, everyday meaning of the words. If the meaning is still unclear, courts may look at legislative history—the reports, debates, and other documents created when the law was passed—to understand the legislature's intent. Courts also use canons of construction, which are general principles for interpreting text. For example, the rule of lenity requires that ambiguous criminal laws be interpreted in favor of the defendant. The goal of statutory interpretation is to apply the law as the legislature intended it."
        }
      ],
      "interactiveActivities": [
        {
          "id": "law-studies-101-l08-a1",
          "type": "matching_pairs",
          "title": "Legal Reasoning Concepts",
          "description": "Match each term to its definition: IRAC → Framework for legal analysis (Issue, Rule, Application, Conclusion), Ratio decidendi → The binding legal reasoning in a judicial opinion, Obiter dicta → Non-binding observations in a court decision, Stare decisis → Doctrine that courts follow established precedent, Distinguishing → Arguing precedent does not apply because facts differ materially, Rule of lenity → Ambiguous criminal statutes favor the defendant."
        }
      ],
      "flashcards": [
        {
          "id": "law-studies-101-l08-f1",
          "front": "The four steps of the IRAC legal analysis framework.",
          "back": "Issue, Rule, Application, Conclusion."
        },
        {
          "id": "law-studies-101-l08-f2",
          "front": "The binding part of a judicial opinion that establishes precedent.",
          "back": "Ratio decidendi (the 'reason for deciding')."
        },
        {
          "id": "law-studies-101-l08-f3",
          "front": "Non-binding observations made 'by the way' in a judicial opinion.",
          "back": "Obiter dicta (singular: obiter dictum)."
        },
        {
          "id": "law-studies-101-l08-f4",
          "front": "The rule requiring ambiguous criminal statutes to be interpreted in favor of the defendant.",
          "back": "The rule of lenity."
        }
      ],
      "learningAids": [
        {
          "id": "law-studies-101-l08-a1",
          "type": "image",
          "title": "The IRAC Framework",
          "content": "A flowchart or graphic organizer that visually breaks down the IRAC method into four distinct boxes: 1. Issue (The Question), 2. Rule (The Law), 3. Application (Connecting Facts to Law), 4. Conclusion (The Answer)."
        }
      ]
    },
    {
      "id": "law-studies-101-l09",
      "title": "Contracts, Torts & Reasoning Checkpoint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-101-l09-q1",
          "text": "Which of the following is NOT a required element for forming a valid contract?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Notarization by a public official"
            },
            {
              "id": "b",
              "text": "Offer and acceptance"
            },
            {
              "id": "c",
              "text": "Consideration (bargained-for exchange)"
            },
            {
              "id": "d",
              "text": "Legal capacity of both parties"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The four required elements are offer, acceptance, consideration, and capacity. Notarization is not required for most contracts — though certain contracts must satisfy the Statute of Frauds (a signed writing), notarization is a separate concept."
        },
        {
          "id": "law-studies-101-l09-q2",
          "text": "In a negligence case, the 'but-for' test is used to establish:",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Actual causation — the harm would not have occurred 'but for' the defendant's conduct"
            },
            {
              "id": "b",
              "text": "The defendant's duty of care to the plaintiff"
            },
            {
              "id": "c",
              "text": "The amount of damages to be awarded"
            },
            {
              "id": "d",
              "text": "Whether the defendant's conduct was intentional"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The but-for test establishes actual (cause-in-fact) causation: 'But for the defendant's negligent act, would the harm have occurred?' If the answer is no, actual causation is established. Proximate causation separately asks whether the harm was foreseeable."
        },
        {
          "id": "law-studies-101-l09-q3",
          "text": "Using IRAC, which step involves stating the relevant legal principle that governs the issue?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rule"
            },
            {
              "id": "b",
              "text": "Issue"
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
          "correctOptionId": "a",
          "explanation": "The 'Rule' step requires identifying and stating the relevant legal principle, statute, or case law that governs the issue. This comes after identifying the Issue and before applying the rule to the facts (Application)."
        },
        {
          "id": "law-studies-101-l09-q4",
          "text": "A manufacturer sells a toaster with a defective wiring design that causes a house fire. Under which theory is the manufacturer most likely liable?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Strict products liability — manufacturers are liable for defective products regardless of fault"
            },
            {
              "id": "b",
              "text": "Breach of contract — the buyer had a contract with the manufacturer"
            },
            {
              "id": "c",
              "text": "Intentional tort — the manufacturer intended to cause the fire"
            },
            {
              "id": "d",
              "text": "Criminal negligence — the manufacturer was criminally reckless"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Under strict products liability, a manufacturer is liable for injuries caused by defective products without the plaintiff needing to prove negligence or intent. A design defect that makes the product unreasonably dangerous is sufficient for liability."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "flashcards": [
        {
          "id": "law-studies-101-l09-f1",
          "front": "Statute requiring certain contracts to be in writing (e.g., land sales, agreements lasting over one year).",
          "back": "Statute of Frauds."
        },
        {
          "id": "law-studies-101-l09-f2",
          "front": "Legal principle: 'expressing one thing excludes others'.",
          "back": "Expressio unius est exclusio alterius (canon of statutory interpretation)."
        },
        {
          "id": "law-studies-101-l09-f3",
          "front": "Damages intended to restore the plaintiff to the position they would have been in without the breach.",
          "back": "Compensatory damages."
        },
        {
          "id": "law-studies-101-l09-f4",
          "front": "The technique of arguing that a prior case should not apply because the material facts differ.",
          "back": "Distinguishing a case."
        }
      ]
    },
    {
      "id": "law-studies-101-l10",
      "title": "Mastery Quiz: Legal Foundations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "law-studies-101-l10-q1",
          "text": "Which source of law sits at the top of the legal hierarchy in the United States?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The U.S. Constitution"
            },
            {
              "id": "b",
              "text": "Federal statutes"
            },
            {
              "id": "c",
              "text": "Administrative regulations"
            },
            {
              "id": "d",
              "text": "State constitutions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The U.S. Constitution is the supreme law of the land under the Supremacy Clause (Article VI). Any federal statute, state law, or regulation that conflicts with it can be struck down through judicial review."
        },
        {
          "id": "law-studies-101-l10-q2",
          "text": "The doctrine of stare decisis promotes which fundamental value in the legal system?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Predictability and consistency — similar cases are decided similarly"
            },
            {
              "id": "b",
              "text": "Innovation — courts are encouraged to reject all prior rulings"
            },
            {
              "id": "c",
              "text": "Speed — cases are decided without research"
            },
            {
              "id": "d",
              "text": "Secrecy — prior decisions are kept confidential"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Stare decisis ('to stand by things decided') ensures predictability, consistency, and fairness by requiring courts to follow established precedent. Parties can anticipate how courts will rule based on prior decisions in similar cases."
        },
        {
          "id": "law-studies-101-l10-q3",
          "text": "A state legislature passes a law banning all political speech in public parks. A citizen challenges the law. Which constitutional provision is most directly at issue, and what standard will the court apply?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "First Amendment (free speech) — strict scrutiny because political speech is core protected expression"
            },
            {
              "id": "b",
              "text": "Fourth Amendment (search and seizure) — probable cause standard"
            },
            {
              "id": "c",
              "text": "Equal Protection Clause — rational basis review"
            },
            {
              "id": "d",
              "text": "Fifth Amendment (self-incrimination) — beyond a reasonable doubt"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Content-based restrictions on political speech — the most protected category of expression under the First Amendment — trigger strict scrutiny. The government must prove a compelling interest and that the law is narrowly tailored. A blanket ban on all political speech in public parks would almost certainly fail this standard."
        },
        {
          "id": "law-studies-101-l10-q4",
          "text": "In a common law jurisdiction, a lower court finds a binding precedent from its appellate court that appears unjust. What is the court's proper course of action?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Follow the precedent but note its concerns for potential appeal and reconsideration by the higher court"
            },
            {
              "id": "b",
              "text": "Ignore the precedent and decide based on its own sense of justice"
            },
            {
              "id": "c",
              "text": "Apply civil law principles from another country instead"
            },
            {
              "id": "d",
              "text": "Refuse to hear the case entirely"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Under stare decisis, lower courts must follow binding precedent from higher courts in their jurisdiction, even if they disagree. The proper approach is to follow the precedent while noting concerns in the opinion, signaling to the appellate court that reconsideration may be warranted."
        },
        {
          "id": "law-studies-101-l10-q5",
          "text": "Sarah agrees to sell her car to Tom for $5,000. Tom pays but Sarah refuses to deliver the car. Which remedy is a court most likely to award?",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Compensatory damages for breach of contract (money to cover the cost of a comparable car)"
            },
            {
              "id": "b",
              "text": "Specific performance (ordering Sarah to deliver the car)"
            },
            {
              "id": "c",
              "text": "Criminal prosecution of Sarah for theft"
            },
            {
              "id": "d",
              "text": "An injunction preventing Sarah from selling any cars"
            }
          ],
          "correctOptionId": "a",
          "explanation": "For a breach involving ordinary goods (not unique items), courts typically award compensatory damages — the money needed to put Tom in the position he would have been in (e.g., the cost of buying a comparable car). Specific performance is usually reserved for unique goods like land or rare items."
        },
        {
          "id": "law-studies-101-l10-q6",
          "text": "A defendant is charged with robbery. The prosecution proves the defendant took property from the victim by force but presents no evidence of intent to permanently deprive the victim. Applying IRAC analysis, the most likely conclusion is:",
          "skillId": "law-studies-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Not guilty of robbery — robbery requires both actus reus (taking by force) and mens rea (intent to permanently deprive), and the prosecution failed to prove mens rea"
            },
            {
              "id": "b",
              "text": "Guilty of robbery — the use of force alone is sufficient"
            },
            {
              "id": "c",
              "text": "Guilty of negligence — the defendant should have known better"
            },
            {
              "id": "d",
              "text": "The case should be dismissed because robbery is a civil matter"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Applying IRAC: Issue — did the defendant commit robbery? Rule — robbery requires (1) taking property from another (2) by force or threat (actus reus) with (3) intent to permanently deprive (mens rea). Application — the prosecution proved the taking by force but not the intent element. Conclusion — without proof of mens rea beyond a reasonable doubt, the defendant cannot be convicted of robbery."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 2
        }
      },
      "flashcards": [
        {
          "id": "law-studies-101-l10-f1",
          "front": "The two main families of legal systems worldwide.",
          "back": "Common law (precedent-based) and civil law (code-based)."
        },
        {
          "id": "law-studies-101-l10-f2",
          "front": "The four elements of negligence.",
          "back": "Duty, Breach, Causation, Damages."
        },
        {
          "id": "law-studies-101-l10-f3",
          "front": "The four requirements for a valid contract.",
          "back": "Offer, Acceptance, Consideration, Capacity."
        },
        {
          "id": "law-studies-101-l10-f4",
          "front": "IRAC stands for:",
          "back": "Issue, Rule, Application, Conclusion — the standard legal analysis framework."
        }
      ]
    }
  ]
};
