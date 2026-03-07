import type { LearningModule } from "@/lib/modules/types";

export const us_civics_201_Module: LearningModule = {
  "id": "us-civics-201",
  "title": "U.S. Civics: Government & the Constitution",
  "description": "Explore the foundations of American democracy — from the Constitution and Bill of Rights to the amendment process, federal courts, elections, and state and local government. Understand how citizens shape their government.",
  "subject": "Social Studies",
  "tags": [
    "civics",
    "government",
    "history",
    "curriculum",
    "interactive"
  ],
  "minAge": 12,
  "maxAge": 18,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Explain the structure and purpose of the U.S. Constitution",
    "Identify key rights protected by the Bill of Rights and their modern applications",
    "Describe how the amendment process works and why it is intentionally difficult",
    "Explain the role of federal courts and the power of judicial review",
    "Analyze the U.S. election process including the Electoral College",
    "Compare the roles of state and local government to the federal government"
  ],
  "lessons": [
    {
      "id": "us-civics-201-l01",
      "title": "The U.S. Constitution",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "us-civics-201-l01-c1",
          "title": "Why a Constitution?",
          "content": "The U.S. Constitution, officially ratified in 1788, is the highest law in the United States. It replaced an earlier, flawed document called the Articles of Confederation. The Articles created a national government that was simply too weak—it couldn't effectively collect taxes, regulate trade, or enforce laws. Recognizing these critical weaknesses, a group of leaders known as the Founding Fathers gathered in Philadelphia in 1787 for the Constitutional Convention. Their primary goal was to design a new framework: a government strong enough to operate effectively and unite the states, but limited enough to protect individual freedoms. This delicate balance between government power and personal liberty is the cornerstone of American democracy.",
          "visualPrompt": "An illustration of the Founding Fathers debating at the Constitutional Convention in Philadelphia, 1787, with a glowing parchment representing the new Constitution."
        },
        {
          "id": "us-civics-201-l01-c2",
          "title": "Three Branches of Government",
          "content": "To prevent any single group or person from gaining too much power, the Constitution divides the federal government into three distinct branches. This concept is known as the **separation of powers**. \n\n1. **Legislative Branch**: Made up of Congress (the Senate and the House of Representatives), this branch is responsible for writing and passing laws.\n2. **Executive Branch**: Led by the President and supported by the Cabinet, this branch enforces the laws and directs national policy.\n3. **Judicial Branch**: Consisting of the Supreme Court and lower federal courts, this branch interprets the laws to ensure they align with the Constitution.\n\nThese branches are tied together by a system of **checks and balances**. For example, Congress can pass a law, but the President can veto (reject) it. Congress can override that veto with a two-thirds vote. Meanwhile, the Supreme Court can strike down the law entirely if it violates the Constitution.",
          "visualPrompt": "A graphic of a three-pillar building. The pillars are labeled 'Legislative', 'Executive', and 'Judicial', all equally supporting a roof labeled 'U.S. Government'."
        },
        {
          "id": "us-civics-201-l01-c3",
          "title": "Federalism and the Preamble",
          "content": "**Federalism** is the system that divides power between the national (federal) government and the individual state governments. The federal government handles big-picture issues like national defense, printing money, and foreign policy. State governments handle local matters like education, driver's licenses, and local law enforcement. \n\nThe Constitution begins with the **Preamble**, a powerful introduction starting with the words 'We the People.' This phrase establishes the principle of popular sovereignty—the idea that the government's power comes directly from its citizens. The Preamble outlines six main goals: to form a more perfect union, establish justice, ensure domestic tranquility (peace at home), provide for the common defense, promote the general welfare, and secure the blessings of liberty for current and future generations.",
          "visualPrompt": "A Venn diagram showing 'Federal Powers' on the left (e.g., military, currency), 'State Powers' on the right (e.g., schools, local police), and 'Shared Powers' in the overlapping middle (e.g., taxes, courts)."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l01-f1",
          "front": "The year the U.S. Constitution was ratified",
          "back": "1788"
        },
        {
          "id": "us-civics-201-l01-f2",
          "front": "The principle of dividing government into three branches",
          "back": "Separation of powers"
        },
        {
          "id": "us-civics-201-l01-f3",
          "front": "System dividing power between national and state governments",
          "back": "Federalism"
        },
        {
          "id": "us-civics-201-l01-f4",
          "front": "The ability of each branch to limit the others' power",
          "back": "Checks and balances"
        }
      ],
      "questions": [
        {
          "id": "us-civics-201-l01-q1",
          "text": "Which branch of government makes laws?",
          "options": [
            {
              "id": "a",
              "text": "Legislative (Congress)"
            },
            {
              "id": "b",
              "text": "Executive (President)"
            },
            {
              "id": "c",
              "text": "Judicial (Supreme Court)"
            },
            {
              "id": "d",
              "text": "Military"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Congress (Senate + House) is the legislative branch — they write and pass laws!"
        },
        {
          "id": "us-civics-201-l01-q2",
          "text": "The Constitution replaced the",
          "options": [
            {
              "id": "a",
              "text": "Articles of Confederation"
            },
            {
              "id": "b",
              "text": "Declaration of Independence"
            },
            {
              "id": "c",
              "text": "Magna Carta"
            },
            {
              "id": "d",
              "text": "Emancipation Proclamation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Articles of Confederation were too weak — the Constitution created a stronger federal government!"
        },
        {
          "id": "us-civics-201-l01-q3",
          "text": "'We the People' in the Preamble means",
          "options": [
            {
              "id": "a",
              "text": "The government's power comes from the citizens"
            },
            {
              "id": "b",
              "text": "Only elected officials have rights"
            },
            {
              "id": "c",
              "text": "The President rules alone"
            },
            {
              "id": "d",
              "text": "Laws cannot be changed"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Popular sovereignty — the people are the source of government power!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-201-l01-act1",
          "type": "sorting_buckets",
          "title": "Branch sorting",
          "description": "Sort these powers into the correct branch: Makes laws, Vetoes bills, Rules laws unconstitutional, Commands the military, Confirms judges, Interprets the Constitution."
        }
      ],
      "learningAids": [
        {
          "id": "us-civics-201-l01-a1",
          "type": "image",
          "title": "Concept Card: Checks and Balances",
          "content": "Visual summary of the lesson's main concept.",
          "visualPrompt": "An infographic showing arrows connecting the Capitol Building, the White House, and the Supreme Court, with labels like 'Veto Power', 'Override Veto', and 'Judicial Review'."
        }
      ]
    },
    {
      "id": "us-civics-201-l02",
      "title": "The Bill of Rights",
      "type": "interactive",
      "duration": 13,
      "chunks": [
        {
          "id": "us-civics-201-l02-c1",
          "title": "Why the Bill of Rights?",
          "content": "When the Constitution was first written, many people—known as Anti-Federalists—were hesitant to approve it. They worried that the new national government was too powerful and might trample on individual liberties. To win their support, James Madison drafted the **Bill of Rights**, which consists of the first ten amendments to the Constitution. Ratified in 1791, these amendments act as a protective shield for citizens, explicitly listing rights that the government cannot take away. Without the promise of the Bill of Rights, the Constitution likely would never have been approved.",
          "visualPrompt": "A historical illustration of James Madison drafting a document with a quill pen, with the words 'Bill of Rights' glowing at the top."
        },
        {
          "id": "us-civics-201-l02-c2",
          "title": "Key Amendments 1-5",
          "content": "The **First Amendment** is the bedrock of American freedom, protecting five core rights: freedom of speech, religion, press, assembly (gathering peacefully), and petition (asking the government to fix problems).\n\nThe **Second Amendment** protects the right to bear arms, which allows individuals to own weapons subject to certain legal regulations. The **Third Amendment** prevents the government from forcing citizens to house soldiers in their homes during peacetime.\n\nThe **Fourth Amendment** protects your privacy. Police cannot search you, your home, or your belongings without a warrant issued by a judge based on probable cause. The **Fifth Amendment** protects the rights of the accused. It guarantees due process, prevents 'double jeopardy' (being tried twice for the same crime), and gives you the right to remain silent so you don't have to testify against yourself (often called 'pleading the Fifth').",
          "visualPrompt": "Five distinct icons representing the first five amendments: a megaphone (1st), a musket (2nd), a house with a 'no entry' sign (3rd), a magnifying glass over a document (4th), and a person with a zipped mouth (5th)."
        },
        {
          "id": "us-civics-201-l02-c3",
          "title": "Key Amendments 6-10",
          "content": "The **Sixth Amendment** guarantees a fair, speedy, and public trial by a jury in criminal cases, and ensures you have the right to a lawyer. The **Seventh Amendment** guarantees a jury trial in civil cases (lawsuits involving money or property).\n\nThe **Eighth Amendment** protects citizens from excessive bail and fines, and bans 'cruel and unusual punishment.' The **Ninth Amendment** is a safety net: it states that just because a right isn't specifically listed in the Constitution doesn't mean the people don't have it. Finally, the **Tenth Amendment** reinforces federalism. It declares that any power not specifically given to the federal government by the Constitution belongs to the states or to the people.",
          "visualPrompt": "A graphic showing a judge's gavel (6th/7th), a broken chain (8th), a silhouette of a crowd of people (9th), and a map of the 50 states (10th)."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l02-f1",
          "front": "The first 10 amendments to the Constitution",
          "back": "The Bill of Rights (ratified 1791)"
        },
        {
          "id": "us-civics-201-l02-f2",
          "front": "Amendment protecting freedom of speech, religion, press, assembly, and petition",
          "back": "1st Amendment"
        },
        {
          "id": "us-civics-201-l02-f3",
          "front": "Amendment requiring police to have a warrant for searches",
          "back": "4th Amendment"
        },
        {
          "id": "us-civics-201-l02-f4",
          "front": "The right to remain silent and not incriminate yourself",
          "back": "5th Amendment ('pleading the Fifth')"
        }
      ],
      "questions": [
        {
          "id": "us-civics-201-l02-q1",
          "text": "The 1st Amendment protects all of these EXCEPT",
          "options": [
            {
              "id": "a",
              "text": "The right to bear arms"
            },
            {
              "id": "b",
              "text": "Freedom of speech"
            },
            {
              "id": "c",
              "text": "Freedom of religion"
            },
            {
              "id": "d",
              "text": "Freedom of the press"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The right to bear arms is the 2nd Amendment, not the 1st!"
        },
        {
          "id": "us-civics-201-l02-q2",
          "text": "'Pleading the Fifth' means",
          "options": [
            {
              "id": "a",
              "text": "Exercising the right not to incriminate yourself"
            },
            {
              "id": "b",
              "text": "Asking for a jury trial"
            },
            {
              "id": "c",
              "text": "Requesting a lawyer"
            },
            {
              "id": "d",
              "text": "Appealing a court decision"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 5th Amendment protects you from being forced to testify against yourself!"
        },
        {
          "id": "us-civics-201-l02-q3",
          "text": "The 10th Amendment says powers not given to the federal government belong to",
          "options": [
            {
              "id": "a",
              "text": "The states or the people"
            },
            {
              "id": "b",
              "text": "The President"
            },
            {
              "id": "c",
              "text": "The Supreme Court"
            },
            {
              "id": "d",
              "text": "The military"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 10th Amendment reserves unlisted powers to states and citizens!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-201-l02-act1",
          "type": "matching_pairs",
          "title": "Amendment matcher",
          "description": "Match each amendment number with its protection: 1st → Free speech/religion, 2nd → Bear arms, 4th → No unreasonable search, 5th → No self-incrimination, 6th → Speedy trial, 8th → No cruel punishment."
        }
      ],
      "learningAids": [
        {
          "id": "us-civics-201-l02-a1",
          "type": "image",
          "title": "Concept Card: The Bill of Rights",
          "content": "Visual summary of the lesson's main concept.",
          "visualPrompt": "A stylized scroll listing the numbers 1 through 10, with a small icon next to each representing the core right protected."
        }
      ]
    },
    {
      "id": "us-civics-201-l03",
      "title": "The Amendment Process",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "us-civics-201-l03-c1",
          "title": "How Amendments Are Proposed",
          "content": "The U.S. Constitution is a 'living document,' meaning it can be changed or updated through an **amendment**. However, the Founding Fathers intentionally made this process difficult to ensure that only changes with overwhelming support would become law. \n\nThe first step is proposing the amendment. There are two ways to do this. The most common method requires a two-thirds (2/3) majority vote in both the House of Representatives and the Senate. All 27 current amendments were proposed this way. The second method, which has never been used, allows two-thirds of the state legislatures to call a national constitutional convention to propose changes.",
          "visualPrompt": "An infographic showing the U.S. Capitol building with a '2/3 Vote' badge over both the House and Senate chambers."
        },
        {
          "id": "us-civics-201-l03-c2",
          "title": "How Amendments Are Ratified",
          "content": "Once an amendment is proposed, it must be **ratified** (officially approved) by the states. This is the second step, and the bar is set even higher. An amendment must be ratified by three-fourths (3/4) of the states. Today, that means 38 out of 50 states must agree.\n\nStates can ratify an amendment in two ways: either through a vote in their state legislatures or by holding special state conventions. Interestingly, the 21st Amendment (which ended the prohibition of alcohol) is the only amendment to be ratified using the state convention method. This rigorous two-step process—proposal and ratification—ensures the Constitution remains stable over time.",
          "visualPrompt": "A map of the United States with 38 states highlighted in green, representing the 3/4 majority needed for ratification."
        },
        {
          "id": "us-civics-201-l03-c3",
          "title": "Important Amendments Beyond the Bill of Rights",
          "content": "Since the Bill of Rights, the Constitution has been amended 17 more times, often to expand civil rights and voting access. \n\nThe **13th Amendment** (1865) abolished slavery. The **14th Amendment** (1868) guaranteed equal protection under the law and established birthright citizenship. The **15th Amendment** (1870) prohibited denying the right to vote based on race.\n\nLater, the **19th Amendment** (1920) granted women the right to vote. The **22nd Amendment** (1951) limited the President to serving two terms. Finally, the **26th Amendment** (1971) lowered the national voting age from 21 to 18. Each of these amendments represents a major milestone in the ongoing evolution of American democracy.",
          "visualPrompt": "A timeline graphic highlighting the years 1865, 1868, 1870, 1920, 1951, and 1971, with brief labels for the 13th, 14th, 15th, 19th, 22nd, and 26th Amendments."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l03-f1",
          "front": "Fraction of Congress needed to propose an amendment",
          "back": "Two-thirds of both the House and Senate"
        },
        {
          "id": "us-civics-201-l03-f2",
          "front": "Fraction of states needed to ratify an amendment",
          "back": "Three-fourths (38 out of 50)"
        },
        {
          "id": "us-civics-201-l03-f3",
          "front": "Amendment that abolished slavery (1865)",
          "back": "13th Amendment"
        },
        {
          "id": "us-civics-201-l03-f4",
          "front": "Amendment that gave women the right to vote (1920)",
          "back": "19th Amendment"
        }
      ],
      "questions": [
        {
          "id": "us-civics-201-l03-q1",
          "text": "How many states must ratify an amendment for it to become law?",
          "options": [
            {
              "id": "a",
              "text": "Three-fourths (38 out of 50)"
            },
            {
              "id": "b",
              "text": "Half (25 out of 50)"
            },
            {
              "id": "c",
              "text": "All 50"
            },
            {
              "id": "d",
              "text": "Two-thirds (34 out of 50)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Three-fourths = 75% of states must approve — a very high bar!"
        },
        {
          "id": "us-civics-201-l03-q2",
          "text": "The 19th Amendment (1920) gave which group the right to vote?",
          "options": [
            {
              "id": "a",
              "text": "Women"
            },
            {
              "id": "b",
              "text": "18-year-olds"
            },
            {
              "id": "c",
              "text": "Non-citizens"
            },
            {
              "id": "d",
              "text": "Formerly enslaved people"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 19th Amendment guaranteed women's suffrage nationwide!"
        },
        {
          "id": "us-civics-201-l03-q3",
          "text": "How many times has the Constitution been amended?",
          "options": [
            {
              "id": "a",
              "text": "27 times"
            },
            {
              "id": "b",
              "text": "10 times"
            },
            {
              "id": "c",
              "text": "50 times"
            },
            {
              "id": "d",
              "text": "100 times"
            }
          ],
          "correctOptionId": "a",
          "explanation": "27 amendments total — 10 were the Bill of Rights, 17 came later!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-201-l03-act1",
          "type": "timeline_builder",
          "title": "Amendment timeline",
          "description": "Put these amendments in chronological order: Bill of Rights (1791), 13th Abolishes Slavery (1865), 19th Women's Vote (1920), 26th Voting Age 18 (1971)."
        }
      ],
      "learningAids": [
        {
          "id": "us-civics-201-l03-a1",
          "type": "image",
          "title": "Concept Card: The Amendment Process",
          "content": "Visual summary of the lesson's main concept.",
          "visualPrompt": "A flowchart showing 'Step 1: Proposal (2/3 Congress)' leading to 'Step 2: Ratification (3/4 States)' resulting in 'New Amendment'."
        }
      ]
    },
    {
      "id": "us-civics-201-l04",
      "title": "Civics Checkpoint",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "us-civics-201-l04-q1",
          "text": "Which branch of government interprets laws and can declare them unconstitutional?",
          "options": [
            {
              "id": "a",
              "text": "Judicial (Supreme Court)"
            },
            {
              "id": "b",
              "text": "Legislative (Congress)"
            },
            {
              "id": "c",
              "text": "Executive (President)"
            },
            {
              "id": "d",
              "text": "Military"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The judicial branch interprets the Constitution and can strike down unconstitutional laws!"
        },
        {
          "id": "us-civics-201-l04-q2",
          "text": "The 4th Amendment protects citizens from",
          "options": [
            {
              "id": "a",
              "text": "Unreasonable search and seizure without a warrant"
            },
            {
              "id": "b",
              "text": "Being forced to house soldiers"
            },
            {
              "id": "c",
              "text": "Excessive taxes"
            },
            {
              "id": "d",
              "text": "Having to serve on a jury"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 4th Amendment requires police to obtain a warrant based on probable cause!"
        },
        {
          "id": "us-civics-201-l04-q3",
          "text": "The amendment process requires two steps:",
          "options": [
            {
              "id": "a",
              "text": "Proposal (2/3 of Congress) then ratification (3/4 of states)"
            },
            {
              "id": "b",
              "text": "The President signs it alone"
            },
            {
              "id": "c",
              "text": "The Supreme Court votes on it"
            },
            {
              "id": "d",
              "text": "A national popular vote"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Two-thirds of Congress proposes, then three-fourths of states ratify!"
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l04-f1",
          "front": "Total number of amendments to the U.S. Constitution",
          "back": "27"
        },
        {
          "id": "us-civics-201-l04-f2",
          "front": "Who wrote the Bill of Rights?",
          "back": "James Madison"
        },
        {
          "id": "us-civics-201-l04-f3",
          "front": "Government system where power is divided between national and state levels",
          "back": "Federalism"
        },
        {
          "id": "us-civics-201-l04-f4",
          "front": "Amendment that abolished slavery",
          "back": "13th Amendment (1865)"
        }
      ],
      "learningAids": [
        {
          "id": "us-civics-201-l04-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response.",
          "visualPrompt": "A graphic of a brain lifting weights, symbolizing a mental checkpoint and review."
        }
      ]
    },
    {
      "id": "us-civics-201-l05",
      "title": "Federal Courts",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "us-civics-201-l05-c1",
          "title": "The Court System Structure",
          "content": "The federal court system is organized into a three-level pyramid. At the base are the 94 **District Courts**. These are the trial courts where federal cases begin. Here, juries hear evidence, witnesses testify, and initial rulings are made.\n\nIf someone loses their case in a District Court and believes the law was applied unfairly, they can appeal. This brings us to the middle level: the 13 **Circuit Courts of Appeals**. These courts don't hold new trials or use juries. Instead, panels of judges review the District Court's decision to ensure proper legal procedures were followed.\n\nAt the very top is the **Supreme Court**, the highest court in the land. It consists of nine justices. The Supreme Court's decisions are final and apply to the entire country. However, they are highly selective, choosing to hear only about 80 cases out of the thousands of requests they receive each year.",
          "visualPrompt": "A pyramid diagram showing 94 District Courts at the wide base, 13 Circuit Courts in the middle, and 1 Supreme Court at the peak."
        },
        {
          "id": "us-civics-201-l05-c2",
          "title": "Judicial Review",
          "content": "**Judicial review** is the Supreme Court's most significant power: the ability to evaluate laws and executive actions and declare them unconstitutional. If a law conflicts with the Constitution, the Supreme Court can strike it down. \n\nInterestingly, this power isn't explicitly written in the Constitution. It was established in 1803 by the landmark case *Marbury v. Madison*, led by Chief Justice John Marshall. This ruling cemented the judicial branch as a co-equal partner to the legislative and executive branches.\n\nJudicial review has shaped American history. In *Brown v. Board of Education* (1954), the Court used it to declare racial segregation in public schools unconstitutional. In *Miranda v. Arizona* (1966), the Court ruled that police must inform suspects of their rights before questioning them.",
          "visualPrompt": "An illustration of a judge's gavel striking down a document labeled 'Unconstitutional Law', with the scales of justice in the background."
        },
        {
          "id": "us-civics-201-l05-c3",
          "title": "How Justices Are Selected",
          "content": "Selecting a Supreme Court justice is a shared responsibility between the executive and legislative branches. When there is a vacancy, the President nominates a candidate. However, the nominee must then be confirmed by the Senate with a majority vote. \n\nOnce confirmed, Supreme Court justices (and all federal judges) serve for life, assuming 'good behavior.' This lifetime appointment is intentional: it protects judges from political pressure and the need to win elections, allowing them to make decisions based strictly on the law and the Constitution rather than public opinion.\n\nThe Court is led by one Chief Justice and eight Associate Justices. Because their rulings can impact generations of Americans, the confirmation hearings in the Senate are often highly scrutinized and widely watched.",
          "visualPrompt": "A split-screen graphic: on the left, the President handing a nomination folder to a judge; on the right, the Senate voting 'Yea' or 'Nay'."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l05-f1",
          "front": "The power to declare laws unconstitutional",
          "back": "Judicial review (established by Marbury v. Madison, 1803)"
        },
        {
          "id": "us-civics-201-l05-f2",
          "front": "Case that declared school segregation unconstitutional (1954)",
          "back": "Brown v. Board of Education"
        },
        {
          "id": "us-civics-201-l05-f3",
          "front": "Number of justices on the Supreme Court",
          "back": "9 (1 Chief Justice + 8 Associate Justices)"
        },
        {
          "id": "us-civics-201-l05-f4",
          "front": "How long Supreme Court justices serve",
          "back": "For life (during good behavior)"
        }
      ],
      "questions": [
        {
          "id": "us-civics-201-l05-q1",
          "text": "Judicial review was established by which landmark case?",
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
          "explanation": "Marbury v. Madison established the Supreme Court's power to strike down unconstitutional laws!"
        },
        {
          "id": "us-civics-201-l05-q2",
          "text": "How many Supreme Court justices are there?",
          "options": [
            {
              "id": "a",
              "text": "9"
            },
            {
              "id": "b",
              "text": "12"
            },
            {
              "id": "c",
              "text": "7"
            },
            {
              "id": "d",
              "text": "15"
            }
          ],
          "correctOptionId": "a",
          "explanation": "9 justices: 1 Chief Justice and 8 Associate Justices!"
        },
        {
          "id": "us-civics-201-l05-q3",
          "text": "Who nominates Supreme Court justices?",
          "options": [
            {
              "id": "a",
              "text": "The President"
            },
            {
              "id": "b",
              "text": "Congress"
            },
            {
              "id": "c",
              "text": "State governors"
            },
            {
              "id": "d",
              "text": "The existing justices"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The President nominates, and the Senate confirms by majority vote!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-201-l05-act1",
          "type": "matching_pairs",
          "title": "Landmark case matcher",
          "description": "Match each landmark case to its ruling: Marbury v. Madison → Judicial review, Brown v. Board → End school segregation, Miranda v. Arizona → Right to be informed of rights."
        }
      ]
    },
    {
      "id": "us-civics-201-l06",
      "title": "Elections and Voting",
      "type": "video",
      "duration": 13,
      "chunks": [
        {
          "id": "us-civics-201-l06-c1",
          "title": "The Electoral College",
          "content": "In the United States, the President is not chosen directly by a nationwide popular vote. Instead, the Constitution established the **Electoral College**. \n\nHere is how it works: Each state is assigned a specific number of 'electors' based on its total representation in Congress (the number of its Representatives plus its 2 Senators). There are 538 electoral votes in total across the country. To win the presidency, a candidate must secure a majority, which is at least 270 electoral votes.\n\nMost states use a 'winner-take-all' system. If a candidate wins the most individual votes in a state, they receive all of that state's electoral votes. Because of this system, it is mathematically possible for a candidate to win the presidency by securing the right combination of electoral votes, even if they receive fewer individual votes nationwide. This occurred in the elections of 2000 and 2016.",
          "visualPrompt": "A map of the United States with numbers on each state representing their electoral votes, with a counter at the top showing 'Target: 270 out of 538'."
        },
        {
          "id": "us-civics-201-l06-c2",
          "title": "Voting Rights and Barriers",
          "content": "The history of voting in the U.S. is a story of gradual expansion. Initially, only white male property owners could vote. Over time, constitutional amendments expanded this right: the 15th Amendment (preventing racial discrimination), the 19th Amendment (women's suffrage), the 24th Amendment (banning poll taxes), and the 26th Amendment (lowering the voting age to 18).\n\nThe **Voting Rights Act of 1965** was a landmark law that banned literacy tests and other discriminatory practices used to prevent minorities from voting. \n\nToday, debates over election laws continue. Topics like voter ID requirements, mail-in voting, and **gerrymandering** (the drawing of political district lines to favor one party) are frequently discussed as lawmakers try to balance the security of elections with ensuring access for all eligible voters.",
          "visualPrompt": "A collage showing historical voting rights marches alongside modern voting booths and a ballot box."
        },
        {
          "id": "us-civics-201-l06-c3",
          "title": "How Elections Work",
          "content": "Presidential elections occur every four years in November, but the process takes almost a full year. It begins in the spring with **primaries and caucuses**, where voters in each state help political parties choose their final nominees. In the summer, parties hold national conventions to officially announce their candidates.\n\nThe general election campaign runs through the fall, culminating on Election Day (the first Tuesday after the first Monday in November). \n\nHowever, the President isn't the only one on the ballot. Every two years, all 435 members of the House of Representatives and about one-third of the Senate are up for election. The elections that happen right in the middle of a President's four-year term are called **midterm elections**. Midterms are crucial because they determine which political party controls Congress, heavily impacting the President's ability to pass laws.",
          "visualPrompt": "A calendar graphic showing the election cycle: Spring (Primaries), Summer (Conventions), Fall (Campaigning), and November (Election Day)."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l06-f1",
          "front": "Number of electoral votes needed to win the presidency",
          "back": "270 out of 538"
        },
        {
          "id": "us-civics-201-l06-f2",
          "front": "Drawing district boundaries to favor one party",
          "back": "Gerrymandering"
        },
        {
          "id": "us-civics-201-l06-f3",
          "front": "Law that banned literacy tests and discriminatory voting practices (1965)",
          "back": "Voting Rights Act"
        },
        {
          "id": "us-civics-201-l06-f4",
          "front": "Elections held between presidential elections",
          "back": "Midterm elections"
        }
      ],
      "questions": [
        {
          "id": "us-civics-201-l06-q1",
          "text": "How many electoral votes are needed to win the presidency?",
          "options": [
            {
              "id": "a",
              "text": "270"
            },
            {
              "id": "b",
              "text": "200"
            },
            {
              "id": "c",
              "text": "538"
            },
            {
              "id": "d",
              "text": "435"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A candidate needs a majority of the 538 electoral votes — that's 270!"
        },
        {
          "id": "us-civics-201-l06-q2",
          "text": "The 24th Amendment (1964) banned",
          "options": [
            {
              "id": "a",
              "text": "Poll taxes"
            },
            {
              "id": "b",
              "text": "Slavery"
            },
            {
              "id": "c",
              "text": "Alcohol"
            },
            {
              "id": "d",
              "text": "Cruel punishment"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Poll taxes had been used to prevent poor people and minorities from voting!"
        },
        {
          "id": "us-civics-201-l06-q3",
          "text": "Gerrymandering means",
          "options": [
            {
              "id": "a",
              "text": "Drawing district boundaries to favor one political party"
            },
            {
              "id": "b",
              "text": "Registering to vote"
            },
            {
              "id": "c",
              "text": "Counting ballots"
            },
            {
              "id": "d",
              "text": "Running for office"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Gerrymandering manipulates district maps to give one party an unfair advantage!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-201-l06-act1",
          "type": "timeline_builder",
          "title": "Voting rights timeline",
          "description": "Arrange these voting expansions chronologically: 15th Amendment (race), 19th Amendment (women), 24th Amendment (poll taxes), Voting Rights Act, 26th Amendment (age 18)."
        }
      ]
    },
    {
      "id": "us-civics-201-l07",
      "title": "State and Local Government",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "us-civics-201-l07-c1",
          "title": "State Government Structure",
          "content": "While the federal government handles national issues, the 10th Amendment reserves many powers for the states. Each of the 50 states has its own constitution, which outlines its specific laws and government structure.\n\nState governments mirror the federal system. They have an executive branch led by a **Governor**, who is elected by the state's residents. They have a legislative branch (usually a state Senate and a state House or Assembly) that writes state laws. They also have their own state court systems.\n\nStates are responsible for managing areas that heavily impact daily life. This includes funding and regulating public education, maintaining state highways, managing healthcare programs like Medicaid, and issuing licenses for drivers and businesses.",
          "visualPrompt": "An illustration of a state capitol building with a governor standing in front, surrounded by icons of a school bus, a highway, and a driver's license."
        },
        {
          "id": "us-civics-201-l07-c2",
          "title": "Local Government",
          "content": "Local governments—which include counties, cities, and towns—are the level of government closest to the people. They handle the immediate needs of a community.\n\nLocal governments oversee police and fire departments, manage public parks and libraries, and maintain local roads, water, and trash collection. They also create **zoning laws**, which dictate where houses, businesses, and factories can be built.\n\nThese decisions are made by local officials such as mayors, city council members, and county commissioners. Another vital local body is the **school board**, a group of elected citizens who make decisions about local public school budgets, policies, and curriculums. Because local government handles the services you use every single day, local elections have a massive impact on your quality of life.",
          "visualPrompt": "A vibrant map of a town showing a fire station, a public park, a school, and a neighborhood, representing local government services."
        },
        {
          "id": "us-civics-201-l07-c3",
          "title": "How Citizens Participate",
          "content": "A democracy relies on **civic engagement**—the active participation of its citizens. Voting in elections is crucial, but it is only one way to be involved.\n\nYou can make your voice heard by attending town hall meetings or speaking at school board hearings. Writing letters or emails to your elected representatives is a highly effective way to advocate for issues you care about. \n\nCitizens also participate by serving on juries, organizing community events, signing petitions, or volunteering for political campaigns. Some even choose to run for local office themselves. As the famous saying goes, 'all politics is local.' By getting involved in your community, you have the power to directly shape the world around you.",
          "visualPrompt": "A diverse group of citizens raising their hands at a town hall meeting, with one person speaking at a microphone."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l07-f1",
          "front": "The chief executive of a state government",
          "back": "Governor"
        },
        {
          "id": "us-civics-201-l07-f2",
          "front": "Local government bodies that oversee public education",
          "back": "School boards"
        },
        {
          "id": "us-civics-201-l07-f3",
          "front": "Laws that determine what types of buildings can be built where",
          "back": "Zoning laws"
        },
        {
          "id": "us-civics-201-l07-f4",
          "front": "The principle that citizens actively participate in their government",
          "back": "Civic engagement"
        }
      ],
      "questions": [
        {
          "id": "us-civics-201-l07-q1",
          "text": "Which level of government typically manages public schools?",
          "options": [
            {
              "id": "a",
              "text": "Local government (school boards)"
            },
            {
              "id": "b",
              "text": "The President"
            },
            {
              "id": "c",
              "text": "The Supreme Court"
            },
            {
              "id": "d",
              "text": "The United Nations"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Local school boards make decisions about curriculum, budgets, and school policies!"
        },
        {
          "id": "us-civics-201-l07-q2",
          "text": "A governor is the chief executive of",
          "options": [
            {
              "id": "a",
              "text": "A state"
            },
            {
              "id": "b",
              "text": "The nation"
            },
            {
              "id": "c",
              "text": "A city"
            },
            {
              "id": "d",
              "text": "A county"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The governor leads the state government, similar to how the President leads the federal government!"
        },
        {
          "id": "us-civics-201-l07-q3",
          "text": "Citizens can participate in government by doing all of these EXCEPT",
          "options": [
            {
              "id": "a",
              "text": "Declaring laws unconstitutional"
            },
            {
              "id": "b",
              "text": "Attending town hall meetings"
            },
            {
              "id": "c",
              "text": "Voting in elections"
            },
            {
              "id": "d",
              "text": "Writing to representatives"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Only the courts can declare laws unconstitutional — citizens participate through voting, attending meetings, and civic engagement!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-201-l07-act1",
          "type": "sorting_buckets",
          "title": "Government level sort",
          "description": "Sort these responsibilities: Federal, State, or Local? National defense, Public schools, Fire department, Interstate highways, Driver's licenses, Foreign policy, Parks and recreation, Criminal law."
        }
      ]
    },
    {
      "id": "us-civics-201-l08",
      "title": "Civics Final Assessment",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "us-civics-201-l08-q1",
          "text": "The system of checks and balances means",
          "options": [
            {
              "id": "a",
              "text": "Each branch can limit the power of the other branches"
            },
            {
              "id": "b",
              "text": "The President controls all branches"
            },
            {
              "id": "c",
              "text": "Laws cannot be changed"
            },
            {
              "id": "d",
              "text": "States have no power"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Checks and balances prevent any one branch from becoming too powerful!"
        },
        {
          "id": "us-civics-201-l08-q2",
          "text": "Brown v. Board of Education (1954) ruled that",
          "options": [
            {
              "id": "a",
              "text": "School segregation is unconstitutional"
            },
            {
              "id": "b",
              "text": "Women can vote"
            },
            {
              "id": "c",
              "text": "The President can serve three terms"
            },
            {
              "id": "d",
              "text": "Poll taxes are legal"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Supreme Court declared 'separate but equal' schools violated the 14th Amendment!"
        },
        {
          "id": "us-civics-201-l08-q3",
          "text": "Each state's number of electoral votes equals",
          "options": [
            {
              "id": "a",
              "text": "Its total members of Congress (senators + representatives)"
            },
            {
              "id": "b",
              "text": "Its population in millions"
            },
            {
              "id": "c",
              "text": "The number of counties in the state"
            },
            {
              "id": "d",
              "text": "10 per state equally"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Electoral votes = 2 senators + number of House representatives (based on population)!"
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-201-l08-f1",
          "front": "The supreme law of the United States",
          "back": "The Constitution"
        },
        {
          "id": "us-civics-201-l08-f2",
          "front": "Number of electoral votes to win the presidency",
          "back": "270 out of 538"
        },
        {
          "id": "us-civics-201-l08-f3",
          "front": "Case establishing judicial review",
          "back": "Marbury v. Madison (1803)"
        },
        {
          "id": "us-civics-201-l08-f4",
          "front": "The first three words of the Constitution",
          "back": "'We the People'"
        }
      ]
    }
  ]
};
