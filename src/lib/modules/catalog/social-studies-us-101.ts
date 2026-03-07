import type { LearningModule } from "@/lib/modules/types";

export const social_studies_us_101_Module: LearningModule = {
  "id": "social-studies-us-101",
  "title": "Social Studies: United States",
  "description": "Learn about the US government, Constitution, Bill of Rights, geography, regions, American history milestones, and civic participation.",
  "subject": "Social Studies US",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Explain why the US Constitution was written and what it establishes",
    "Describe the three branches of government and the system of checks and balances",
    "Identify key rights protected by the Bill of Rights",
    "Explain how elections and voting work in the United States",
    "Locate the five US regions and describe their geographic features",
    "Recognize important American symbols, landmarks, and national holidays",
    "Summarize major milestones in American history from colonial times through the Civil War",
    "Participate in a civic scenario by analyzing a community issue and proposing a solution"
  ],
  "lessons": [
    {
      "id": "social-studies-us-101-l01",
      "title": "Foundations of US Government",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Explain why the American colonies declared independence from Britain",
        "Describe the purpose of the US Constitution",
        "Understand what 'We the People' means"
      ],
      "chunks": [
        {
          "id": "social-studies-us-101-l01-c1",
          "title": "Why a New Government?",
          "content": "Before 1776, the 13 American colonies were ruled by Great Britain. Colonists had to pay taxes to the British king but had no representatives in the British government to speak for them. This was called 'taxation without representation,' and it made many colonists angry. Leaders like Thomas Jefferson, Benjamin Franklin, and John Adams began to speak up for independence. They believed the colonies should govern themselves. This idea grew, leading to the creation of a new nation where the people would have the power."
        },
        {
          "id": "social-studies-us-101-l01-c2",
          "title": "The Declaration of Independence",
          "content": "On July 4, 1776, leaders from the colonies adopted the Declaration of Independence. Written mostly by Thomas Jefferson, this document announced that the colonies were now free and independent states. It famously says that 'all men are created equal' and have rights to 'Life, Liberty and the pursuit of Happiness.' This was a bold statement to the world that America was forming its own nation based on freedom and the rights of its citizens."
        },
        {
          "id": "social-studies-us-101-l01-c3",
          "title": "The US Constitution",
          "content": "After winning the Revolutionary War, the new country needed a plan for its government. The first attempt, called the Articles of Confederation, was too weak. So, in 1787, leaders met to write the Constitution. This document is the supreme law of the United States. It starts with the words 'We the People,' showing that the government gets its power from the citizens, not a king. The Constitution creates the structure for our government and protects the rights of the people."
        },
        {
          "id": "social-studies-us-101-l01-c4",
          "title": "A Living Document",
          "content": "The writers of the Constitution knew that the world would change, so they created a way to update it through amendments, or official changes. The first ten amendments are called the Bill of Rights, added in 1791 to protect basic freedoms like freedom of speech and religion. Since then, 17 more amendments have been added. For example, the 13th Amendment ended slavery, and the 19th Amendment gave women the right to vote. These changes show that the Constitution can grow and adapt with the country."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-101-l01-f1",
          "front": "Declaration of Independence",
          "back": "Document adopted July 4, 1776, declaring the 13 colonies free from British rule; written primarily by Thomas Jefferson."
        },
        {
          "id": "social-studies-us-101-l01-f2",
          "front": "US Constitution",
          "back": "The supreme law of the United States, written in 1787; it establishes the structure of government and protects citizens' rights."
        },
        {
          "id": "social-studies-us-101-l01-f3",
          "front": "'Taxation without representation'",
          "back": "The colonists' complaint that they paid British taxes but had no voice in the British Parliament."
        },
        {
          "id": "social-studies-us-101-l01-f4",
          "front": "Amendment",
          "back": "A formal change or addition to the Constitution. There are 27 amendments in total."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l01-a1",
          "type": "image",
          "title": "Timeline: Road to a New Nation",
          "content": "Illustrated timeline showing key events: Stamp Act (1765) → Boston Tea Party (1773) → Declaration of Independence (1776) → Constitution (1787)."
        },
        {
          "id": "social-studies-us-101-l01-a2",
          "type": "image",
          "title": "From a King to 'We the People'",
          "content": "Infographic comparing rule by a monarch (power flows from the top down) to a democracy (power flows from the people up to the government)."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l02",
      "title": "Three Branches of Government",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Name the three branches and their main jobs",
        "Explain checks and balances with a real example",
        "Identify who leads each branch"
      ],
      "metadata": {
        "prompts": [
          "Which branch writes new laws? Which branch enforces them? Which branch interprets them?",
          "Give one example of how one branch can 'check' another branch's power.",
          "Why did the Founders split government power into three branches instead of giving it all to one person?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "social-studies-us-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Sort the Powers",
          "description": "Place each power or role into the correct branch of government.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "legislative",
                "label": "Legislative (Congress)"
              },
              {
                "id": "executive",
                "label": "Executive (President)"
              },
              {
                "id": "judicial",
                "label": "Judicial (Supreme Court)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Writes and passes new laws",
                "correctBucketId": "legislative"
              },
              {
                "id": "i2",
                "label": "Signs or vetoes bills",
                "correctBucketId": "executive"
              },
              {
                "id": "i3",
                "label": "Decides if laws follow the Constitution",
                "correctBucketId": "judicial"
              },
              {
                "id": "i4",
                "label": "Controls the federal budget",
                "correctBucketId": "legislative"
              },
              {
                "id": "i5",
                "label": "Commands the military",
                "correctBucketId": "executive"
              },
              {
                "id": "i6",
                "label": "Interprets the meaning of laws",
                "correctBucketId": "judicial"
              }
            ]
          }
        },
        {
          "id": "social-studies-us-101-l02-ia2",
          "type": "matching_pairs",
          "title": "Checks and Balances Match",
          "description": "Match each 'check' to the branch that performs it.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "President vetoes a bill"
              },
              {
                "id": "l2",
                "label": "Congress overrides a veto with a 2/3 vote"
              },
              {
                "id": "l3",
                "label": "Supreme Court declares a law unconstitutional"
              },
              {
                "id": "l4",
                "label": "Senate confirms or rejects Supreme Court nominees"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Executive checks Legislative"
              },
              {
                "id": "r2",
                "label": "Legislative checks Executive"
              },
              {
                "id": "r3",
                "label": "Judicial checks Legislative"
              },
              {
                "id": "r4",
                "label": "Legislative checks Judicial"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l02-a1",
          "type": "mnemonic",
          "title": "Branch Jobs",
          "content": "Legislative = Laws, Executive = Enforces, Judicial = Judges. Remember: L-E-J."
        },
        {
          "id": "social-studies-us-101-l02-a2",
          "type": "image",
          "title": "Diagram: Checks and Balances",
          "content": "A visual diagram showing the three branches in a triangle, with arrows pointing between them labeled with specific powers (e.g., arrow from President to Congress labeled 'Vetoes bills')."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l03",
      "title": "Checkpoint: Government Foundations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-101-l03-q1",
          "text": "What was the main complaint that led American colonists to seek independence?",
          "skillId": "social-studies-us-101-skill-foundations",
          "options": [
            {
              "id": "a",
              "text": "They wanted to become part of France"
            },
            {
              "id": "b",
              "text": "Taxation without representation — they paid taxes but had no voice in Parliament"
            },
            {
              "id": "c",
              "text": "They disagreed about which language to speak"
            },
            {
              "id": "d",
              "text": "They wanted a king of their own"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Colonists objected to paying British taxes when they had no elected representatives in the British Parliament to vote on their behalf."
        },
        {
          "id": "social-studies-us-101-l03-q2",
          "text": "Which branch of government has the power to declare a law unconstitutional?",
          "skillId": "social-studies-us-101-skill-branches",
          "options": [
            {
              "id": "a",
              "text": "Legislative branch (Congress)"
            },
            {
              "id": "b",
              "text": "Executive branch (President)"
            },
            {
              "id": "c",
              "text": "Judicial branch (Supreme Court)"
            },
            {
              "id": "d",
              "text": "The military"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The judicial branch, led by the Supreme Court, has the power of judicial review, which allows it to strike down laws that violate the Constitution."
        },
        {
          "id": "social-studies-us-101-l03-q3",
          "text": "The Constitution begins with 'We the People.' What does this phrase establish?",
          "skillId": "social-studies-us-101-skill-constitution",
          "options": [
            {
              "id": "a",
              "text": "That only wealthy landowners can vote"
            },
            {
              "id": "b",
              "text": "That the government's power comes from the citizens"
            },
            {
              "id": "c",
              "text": "That the President has unlimited power"
            },
            {
              "id": "d",
              "text": "That states are independent countries"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'We the People' establishes the principle of popular sovereignty — the idea that the government gets its authority from the people."
        },
        {
          "id": "social-studies-us-101-l03-q4",
          "text": "Why did the Founders create a system of checks and balances?",
          "skillId": "social-studies-us-101-skill-checks",
          "options": [
            {
              "id": "a",
              "text": "To make the government work faster"
            },
            {
              "id": "b",
              "text": "To give all power to the President"
            },
            {
              "id": "c",
              "text": "To prevent any one branch from becoming too powerful"
            },
            {
              "id": "d",
              "text": "To eliminate the need for elections"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Checks and balances ensure that no single branch of government can dominate. Each branch can limit the powers of the others."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": []
    },
    {
      "id": "social-studies-us-101-l04",
      "title": "Rights and Responsibilities",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Name at least five rights protected by the Bill of Rights",
        "Explain the difference between a right and a responsibility",
        "Identify key amendments beyond the Bill of Rights"
      ],
      "chunks": [
        {
          "id": "social-studies-us-101-l04-c1",
          "title": "The Bill of Rights",
          "content": "The Bill of Rights is the first ten amendments to the Constitution, added in 1791. They protect our most important individual freedoms. The 1st Amendment protects five key freedoms: speech, religion, the press, peaceful assembly, and the right to petition the government. The 2nd Amendment protects the right to bear arms. The 4th Amendment protects us from unreasonable searches. The 5th and 6th Amendments guarantee fair treatment in the legal system, including the right to a speedy trial and the right to remain silent."
        },
        {
          "id": "social-studies-us-101-l04-c2",
          "title": "Rights vs. Responsibilities",
          "content": "In a democracy, citizens have both rights and responsibilities. Rights are freedoms the government must protect, like freedom of speech. Responsibilities are duties we perform to help our country run well. These include obeying laws, paying taxes, serving on a jury if called, and voting in elections. A healthy democracy needs citizens who both exercise their rights and fulfill their responsibilities."
        },
        {
          "id": "social-studies-us-101-l04-c3",
          "title": "Landmark Amendments",
          "content": "Beyond the Bill of Rights, other amendments have made America more free and fair. The 13th Amendment (1865) abolished slavery. The 14th Amendment (1868) granted citizenship and equal protection under the law to all people born in the US. The 15th Amendment (1870) gave voting rights to men of all races. The 19th Amendment (1920) gave women the right to vote. And the 26th Amendment (1971) lowered the voting age to 18. These amendments expanded freedom to more people."
        },
        {
          "id": "social-studies-us-101-l04-c4",
          "title": "Rights in Daily Life",
          "content": "You use your rights every day, maybe without even realizing it! When you share your opinion in class, you're using your freedom of speech. When you read the news online, you're benefiting from freedom of the press. If you attend a religious service or join a school club, you are using your freedoms of religion and assembly. Understanding your rights helps you become an active and engaged citizen who can stand up for yourself and others."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-101-l04-f1",
          "front": "1st Amendment",
          "back": "Protects five freedoms: speech, religion, press, assembly, and petition."
        },
        {
          "id": "social-studies-us-101-l04-f2",
          "front": "13th Amendment",
          "back": "Abolished slavery in the United States (1865)."
        },
        {
          "id": "social-studies-us-101-l04-f3",
          "front": "19th Amendment",
          "back": "Gave women the right to vote (1920)."
        },
        {
          "id": "social-studies-us-101-l04-f4",
          "front": "Civic Responsibility",
          "back": "Duties of citizens, such as obeying laws, paying taxes, voting, and serving on juries."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l04-a1",
          "type": "mnemonic",
          "title": "1st Amendment Freedoms",
          "content": "Remember RAPPS: Religion, Assembly, Press, Petition, Speech."
        },
        {
          "id": "social-studies-us-101-l04-a2",
          "type": "image",
          "title": "T-Chart: Rights vs. Responsibilities",
          "content": "A simple T-chart graphic. The left column is titled 'Rights (Freedoms You Have)' with examples like 'Free Speech' and 'Fair Trial'. The right column is titled 'Responsibilities (Duties You Do)' with examples like 'Vote' and 'Obey Laws'."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l05",
      "title": "Elections and Voting",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Describe the basic steps of a US presidential election",
        "Explain the role of the Electoral College",
        "Give reasons why voting is important in a democracy"
      ],
      "metadata": {
        "prompts": [
          "Why do we have an Electoral College instead of a direct popular vote for President?",
          "What are two things a citizen can do besides voting to participate in government?",
          "Describe what happens on Election Day from a voter's perspective."
        ]
      },
      "chunks": [
        {
          "id": "social-studies-us-101-l05-c1",
          "title": "Why Voting Matters",
          "content": "In a democracy, the power of the government comes from the people. The most important way people use that power is by voting. When you vote, you help choose the leaders who will make decisions about your community, state, and country. Elections are how we hold leaders accountable and make our voices heard on important issues. It is both a right and a key responsibility of being a citizen."
        }
      ],
      "interactiveActivities": [
        {
          "id": "social-studies-us-101-l05-ia1",
          "type": "drag_and_drop",
          "title": "Election Process Order",
          "description": "Put the steps of a presidential election in the correct order.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "step1",
                "label": "Step 1 (First)"
              },
              {
                "id": "step2",
                "label": "Step 2"
              },
              {
                "id": "step3",
                "label": "Step 3"
              },
              {
                "id": "step4",
                "label": "Step 4"
              },
              {
                "id": "step5",
                "label": "Step 5 (Last)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Candidates campaign across the country",
                "correctTargetId": "step2"
              },
              {
                "id": "d2",
                "label": "Parties hold primaries to choose their nominee",
                "correctTargetId": "step1"
              },
              {
                "id": "d3",
                "label": "The President is inaugurated on January 20",
                "correctTargetId": "step5"
              },
              {
                "id": "d4",
                "label": "Citizens vote on Election Day in November",
                "correctTargetId": "step3"
              },
              {
                "id": "d5",
                "label": "Electoral College casts official votes",
                "correctTargetId": "step4"
              }
            ]
          }
        },
        {
          "id": "social-studies-us-101-l05-ia2",
          "type": "sorting_buckets",
          "title": "Rights vs. Responsibilities Sort",
          "description": "Classify each item as a right or a civic responsibility.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "right",
                "label": "Rights"
              },
              {
                "id": "responsibility",
                "label": "Responsibilities"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Freedom of speech",
                "correctBucketId": "right"
              },
              {
                "id": "i2",
                "label": "Paying taxes",
                "correctBucketId": "responsibility"
              },
              {
                "id": "i3",
                "label": "Freedom of religion",
                "correctBucketId": "right"
              },
              {
                "id": "i4",
                "label": "Serving on a jury when called",
                "correctBucketId": "responsibility"
              },
              {
                "id": "i5",
                "label": "Right to a fair trial",
                "correctBucketId": "right"
              },
              {
                "id": "i6",
                "label": "Voting in elections",
                "correctBucketId": "responsibility"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l05-a1",
          "type": "image",
          "title": "Electoral College Map",
          "content": "US map showing Electoral College votes per state, with a total of 538 and the 'magic number' of 270 needed to win highlighted."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l06",
      "title": "Checkpoint: Rights & Civic Participation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-101-l06-q1",
          "text": "Which amendment gave women the right to vote?",
          "skillId": "social-studies-us-101-skill-amendments",
          "options": [
            {
              "id": "a",
              "text": "13th Amendment"
            },
            {
              "id": "b",
              "text": "15th Amendment"
            },
            {
              "id": "c",
              "text": "19th Amendment"
            },
            {
              "id": "d",
              "text": "26th Amendment"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The 19th Amendment (1920) prohibited denying the right to vote based on sex, securing women's suffrage."
        },
        {
          "id": "social-studies-us-101-l06-q2",
          "text": "The 1st Amendment protects all of the following EXCEPT:",
          "skillId": "social-studies-us-101-skill-billofrights",
          "options": [
            {
              "id": "a",
              "text": "Freedom of speech"
            },
            {
              "id": "b",
              "text": "Right to bear arms"
            },
            {
              "id": "c",
              "text": "Freedom of the press"
            },
            {
              "id": "d",
              "text": "Freedom of religion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The right to bear arms is protected by the 2nd Amendment. The 1st Amendment covers speech, religion, press, assembly, and petition (RAPPS)."
        },
        {
          "id": "social-studies-us-101-l06-q3",
          "text": "How many electoral votes does a presidential candidate need to win?",
          "skillId": "social-studies-us-101-skill-elections",
          "options": [
            {
              "id": "a",
              "text": "100"
            },
            {
              "id": "b",
              "text": "538"
            },
            {
              "id": "c",
              "text": "270"
            },
            {
              "id": "d",
              "text": "435"
            }
          ],
          "correctOptionId": "c",
          "explanation": "There are 538 total Electoral College votes. A candidate needs a majority — at least 270 — to win the presidency."
        },
        {
          "id": "social-studies-us-101-l06-q4",
          "text": "Which is an example of a civic RESPONSIBILITY, not a right?",
          "skillId": "social-studies-us-101-skill-civic",
          "options": [
            {
              "id": "a",
              "text": "Freedom to practice any religion"
            },
            {
              "id": "b",
              "text": "Right to a fair trial"
            },
            {
              "id": "c",
              "text": "Serving on a jury when called"
            },
            {
              "id": "d",
              "text": "Right to peaceful assembly"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Jury service is a civic responsibility — a duty citizens perform to maintain the justice system. The others are rights protected by the Constitution."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "social-studies-us-101-l06-a1",
          "type": "mnemonic",
          "title": "Electoral Math",
          "content": "538 total electors = 435 House + 100 Senate + 3 for D.C. You need 270 to win!"
        }
      ]
    },
    {
      "id": "social-studies-us-101-l07",
      "title": "US Geography and Regions",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the five major US regions and states in each",
        "Describe key geographic features of each region",
        "Explain how geography affects where people live and work"
      ],
      "chunks": [
        {
          "id": "social-studies-us-101-l07-c1",
          "title": "Five Regions of the United States",
          "content": "The United States is a huge country, often divided into five main regions: the Northeast, Southeast, Midwest, Southwest, and West. Each region has its own unique geography, climate, and culture. For example, the landforms and weather in a region often shape the jobs people have and the way they live. Learning about these regions helps us understand the diversity of America."
        },
        {
          "id": "social-studies-us-101-l07-c2",
          "title": "Northeast and Southeast",
          "content": "The Northeast has big cities like New York City and Boston, rocky coastlines, and cold, snowy winters. Its many ports and rivers led to early growth in shipping and industry. The Southeast, stretching from Virginia to Florida, is known for its warm, humid climate. This weather is perfect for farming crops like cotton and citrus fruits. The region also includes the Appalachian Mountains and the Mississippi River delta, making tourism a major industry."
        },
        {
          "id": "social-studies-us-101-l07-c3",
          "title": "Midwest and Southwest",
          "content": "The Midwest is often called 'America's Breadbasket' because its flat, fertile plains are perfect for growing corn and wheat. It's also home to the Great Lakes, which provide fresh water and shipping routes. The Southwest, including states like Arizona and Texas, is known for its deserts, canyons, and hot, dry climate. Natural wonders like the Grand Canyon attract tourists, while resources like oil and natural gas are important to its economy."
        },
        {
          "id": "social-studies-us-101-l07-c4",
          "title": "The West",
          "content": "The West is a region of dramatic landscapes, including the Rocky Mountains, the Pacific coast, and the volcanoes of Hawaii. California is the most populous state in the country. The region's diverse geography supports many industries. Technology thrives in Silicon Valley, movies are made in Hollywood, and fishing and logging are important in the Pacific Northwest. The West's wide-open spaces and natural beauty have always attracted people seeking new opportunities."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-101-l07-f1",
          "front": "America's Breadbasket",
          "back": "A nickname for the Midwest region, where its Great Plains produce much of the nation's wheat, corn, and soybeans."
        },
        {
          "id": "social-studies-us-101-l07-f2",
          "front": "Great Lakes (HOMES)",
          "back": "Huron, Ontario, Michigan, Erie, Superior — the five large freshwater lakes on the US-Canada border."
        },
        {
          "id": "social-studies-us-101-l07-f3",
          "front": "Grand Canyon",
          "back": "A massive canyon in Arizona carved by the Colorado River; one of the Southwest's most famous landmarks."
        },
        {
          "id": "social-studies-us-101-l07-f4",
          "front": "Five US Regions",
          "back": "Northeast, Southeast, Midwest, Southwest, and West."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l07-a1",
          "type": "image",
          "title": "US Regions Map",
          "content": "A color-coded map of the five US regions with major states, landforms, and cities labeled."
        },
        {
          "id": "social-studies-us-101-l07-a2",
          "type": "image",
          "title": "A Glimpse into Each Region",
          "content": "A photo collage with one iconic image for each region: a skyscraper for the Northeast, a sunny beach for the Southeast, a wheat field for the Midwest, a desert canyon for the Southwest, and a mountain range for the West."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l08",
      "title": "Maps, Symbols, and Landmarks",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Read a basic political map using a legend, compass rose, and scale",
        "Identify important US national symbols",
        "Match famous landmarks to their locations"
      ],
      "metadata": {
        "prompts": [
          "Look at a US map. Which ocean borders the East Coast? Which borders the West Coast?",
          "What do the 50 stars and 13 stripes on the American flag represent?",
          "Name one national landmark you would like to visit and explain why it is important to American history."
        ]
      },
      "chunks": [
        {
          "id": "social-studies-us-101-l08-c1",
          "title": "What Are National Symbols?",
          "content": "Every country has symbols—special objects, images, or songs that represent its identity, values, and history. In the United States, these symbols help unite people from different backgrounds and remind us of our shared story. The American flag, the bald eagle, and the national anthem are all symbols that stand for the ideas of freedom, strength, and patriotism."
        }
      ],
      "interactiveActivities": [
        {
          "id": "social-studies-us-101-l08-ia1",
          "type": "matching_pairs",
          "title": "Landmark Location Match",
          "description": "Match each famous landmark to its state or city.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Statue of Liberty"
              },
              {
                "id": "l2",
                "label": "Grand Canyon"
              },
              {
                "id": "l3",
                "label": "Mount Rushmore"
              },
              {
                "id": "l4",
                "label": "Golden Gate Bridge"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "New York Harbor"
              },
              {
                "id": "r2",
                "label": "Arizona"
              },
              {
                "id": "r3",
                "label": "South Dakota"
              },
              {
                "id": "r4",
                "label": "San Francisco, California"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        },
        {
          "id": "social-studies-us-101-l08-ia2",
          "type": "sorting_buckets",
          "title": "US Symbols Sort",
          "description": "Sort each item as a national symbol or not a national symbol.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "symbol",
                "label": "US National Symbols"
              },
              {
                "id": "notsymbol",
                "label": "Not a US National Symbol"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Bald Eagle",
                "correctBucketId": "symbol"
              },
              {
                "id": "i2",
                "label": "The American Flag (Stars and Stripes)",
                "correctBucketId": "symbol"
              },
              {
                "id": "i3",
                "label": "The Eiffel Tower",
                "correctBucketId": "notsymbol"
              },
              {
                "id": "i4",
                "label": "The Liberty Bell",
                "correctBucketId": "symbol"
              },
              {
                "id": "i5",
                "label": "The Maple Leaf",
                "correctBucketId": "notsymbol"
              },
              {
                "id": "i6",
                "label": "The Star-Spangled Banner (national anthem)",
                "correctBucketId": "symbol"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l08-a1",
          "type": "image",
          "title": "Map Reading Guide",
          "content": "An annotated map showing a compass rose (N/S/E/W), a map legend (explaining what symbols like stars and lines mean), and a scale bar with example distances."
        },
        {
          "id": "social-studies-us-101-l08-a2",
          "type": "image",
          "title": "Image Gallery: US National Symbols",
          "content": "A gallery of high-quality images showing the American Flag, a Bald Eagle, and the Liberty Bell, each with a short caption explaining its meaning."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l09",
      "title": "Checkpoint: Geography & Symbols",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-101-l09-q1",
          "text": "Which US region is known as 'America's Breadbasket' for its wheat and corn production?",
          "skillId": "social-studies-us-101-skill-regions",
          "options": [
            {
              "id": "a",
              "text": "Northeast"
            },
            {
              "id": "b",
              "text": "Southeast"
            },
            {
              "id": "c",
              "text": "Midwest"
            },
            {
              "id": "d",
              "text": "Southwest"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Midwest's flat Great Plains are ideal for farming. States like Iowa, Kansas, and Nebraska produce huge amounts of grain."
        },
        {
          "id": "social-studies-us-101-l09-q2",
          "text": "The 50 stars on the American flag represent:",
          "skillId": "social-studies-us-101-skill-symbols",
          "options": [
            {
              "id": "a",
              "text": "The 50 original colonies"
            },
            {
              "id": "b",
              "text": "The 50 states in the Union today"
            },
            {
              "id": "c",
              "text": "The 50 signers of the Declaration"
            },
            {
              "id": "d",
              "text": "The 50 amendments to the Constitution"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The 50 stars represent the 50 current states. The 13 stripes represent the original 13 colonies."
        },
        {
          "id": "social-studies-us-101-l09-q3",
          "text": "Which body of water borders the eastern coast of the United States?",
          "skillId": "social-studies-us-101-skill-geography",
          "options": [
            {
              "id": "a",
              "text": "Pacific Ocean"
            },
            {
              "id": "b",
              "text": "Gulf of Mexico"
            },
            {
              "id": "c",
              "text": "Atlantic Ocean"
            },
            {
              "id": "d",
              "text": "Arctic Ocean"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Atlantic Ocean borders the East Coast. The Pacific Ocean borders the West Coast."
        },
        {
          "id": "social-studies-us-101-l09-q4",
          "text": "Mount Rushmore features the carved faces of four presidents. In which state is it located?",
          "skillId": "social-studies-us-101-skill-landmarks",
          "options": [
            {
              "id": "a",
              "text": "Colorado"
            },
            {
              "id": "b",
              "text": "South Dakota"
            },
            {
              "id": "c",
              "text": "Virginia"
            },
            {
              "id": "d",
              "text": "Montana"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mount Rushmore is in the Black Hills of South Dakota. It features Washington, Jefferson, Theodore Roosevelt, and Lincoln."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "social-studies-us-101-l09-a1",
          "type": "mnemonic",
          "title": "Great Lakes: HOMES",
          "content": "Huron, Ontario, Michigan, Erie, Superior."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l10",
      "title": "American History Milestones",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Place major events on a timeline from the colonial era through the Civil War",
        "Identify key historical figures and their contributions",
        "Explain the significance of westward expansion"
      ],
      "chunks": [
        {
          "id": "social-studies-us-101-l10-c1",
          "title": "Colonial America (1600s–1770s)",
          "content": "In the 1600s, settlers from England began building colonies in North America. Jamestown, Virginia (1607) was the first permanent English settlement. In 1620, the Pilgrims arrived at Plymouth, Massachusetts, seeking religious freedom. Over time, 13 colonies grew along the East Coast. These colonies developed their own local governments, but they were still ruled by Great Britain, which eventually led to conflict."
        },
        {
          "id": "social-studies-us-101-l10-c2",
          "title": "Revolution and a New Nation (1775–1800)",
          "content": "The American Revolutionary War (1775–1783) was fought for independence from Britain. George Washington led the Continental Army and became the first president. Thomas Jefferson wrote the Declaration of Independence, and Benjamin Franklin served as a key diplomat. After the war, the new nation created the Constitution in 1787 and added the Bill of Rights in 1791, establishing a government that has lasted for over 200 years."
        },
        {
          "id": "social-studies-us-101-l10-c3",
          "title": "Westward Expansion (1800s)",
          "content": "In 1803, the Louisiana Purchase doubled the size of the United States. This kicked off a period of westward expansion, as explorers like Lewis and Clark mapped the new territory. Many Americans believed in 'Manifest Destiny'—the idea that the country was meant to stretch from the Atlantic to the Pacific. Settlers traveled west on trails like the Oregon Trail, but this expansion came at a great cost to Native American peoples, who were often forced from their lands, such as during the Trail of Tears."
        },
        {
          "id": "social-studies-us-101-l10-c4",
          "title": "The Civil War (1861–1865)",
          "content": "Deep disagreements over slavery led to the Civil War. Southern states seceded, or left, the United States to form the Confederacy. The war was fought between the Union (the North) and the Confederacy (the South). President Abraham Lincoln led the Union, issuing the Emancipation Proclamation in 1863 to free enslaved people in the Confederate states. The Union won the war, preserving the nation and leading to the 13th Amendment, which ended slavery everywhere in the US."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-101-l10-f1",
          "front": "Jamestown, 1607",
          "back": "The first permanent English settlement in North America, located in Virginia."
        },
        {
          "id": "social-studies-us-101-l10-f2",
          "front": "Louisiana Purchase, 1803",
          "back": "The US bought a huge territory from France, doubling the nation's size and sparking westward expansion."
        },
        {
          "id": "social-studies-us-101-l10-f3",
          "front": "Emancipation Proclamation, 1863",
          "back": "An order by President Lincoln that declared enslaved people in Confederate states to be free."
        },
        {
          "id": "social-studies-us-101-l10-f4",
          "front": "Trail of Tears",
          "back": "The forced relocation of Native American nations from the southeastern US to Oklahoma in the 1830s, causing thousands of deaths."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l10-a1",
          "type": "image",
          "title": "US History Timeline",
          "content": "Illustrated timeline: Jamestown (1607) → Pilgrims (1620) → Revolution (1776) → Constitution (1787) → Louisiana Purchase (1803) → Civil War (1861–1865)."
        },
        {
          "id": "social-studies-us-101-l10-a2",
          "type": "image",
          "title": "Portraits of Key Leaders",
          "content": "A gallery of portraits for George Washington, Thomas Jefferson, and Abraham Lincoln, each with a one-sentence caption describing their main contribution."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l11",
      "title": "Culture and Diversity",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Explain the motto 'E Pluribus Unum' (Out of Many, One)",
        "Describe how immigration has shaped American culture",
        "Identify cultural contributions from different groups"
      ],
      "metadata": {
        "prompts": [
          "What does 'E Pluribus Unum' mean, and why is it a fitting motto for the US?",
          "Name one cultural tradition in your community that came from another country.",
          "Why is the United States sometimes called a 'nation of immigrants'?"
        ]
      },
      "chunks": [
        {
          "id": "social-studies-us-101-l11-c1",
          "title": "A Nation of Immigrants",
          "content": "The United States has always been a nation of immigrants—people who move from other countries to make a new home here. From the first colonists to people arriving today, immigrants have brought their unique foods, music, languages, and traditions. This has created a rich and diverse American culture. The US motto, 'E Pluribus Unum,' is Latin for 'Out of Many, One.' It means that out of many different peoples and cultures, we come together to form one nation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "social-studies-us-101-l11-ia1",
          "type": "matching_pairs",
          "title": "Cultural Contributions Match",
          "description": "Match each cultural contribution to the group most associated with it.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Jazz music"
              },
              {
                "id": "l2",
                "label": "Thanksgiving harvest celebration"
              },
              {
                "id": "l3",
                "label": "Tacos, tamales, and salsa"
              },
              {
                "id": "l4",
                "label": "St. Patrick's Day parade"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "African American communities"
              },
              {
                "id": "r2",
                "label": "Native American and Pilgrim traditions"
              },
              {
                "id": "r3",
                "label": "Mexican and Latin American heritage"
              },
              {
                "id": "r4",
                "label": "Irish American heritage"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        },
        {
          "id": "social-studies-us-101-l11-ia2",
          "type": "sorting_buckets",
          "title": "National Holiday Sort",
          "description": "Sort each holiday by what it commemorates.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "independence",
                "label": "Celebrates Independence or Founding"
              },
              {
                "id": "people",
                "label": "Honors People or Groups"
              },
              {
                "id": "service",
                "label": "Honors Service and Sacrifice"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Independence Day (July 4th)",
                "correctBucketId": "independence"
              },
              {
                "id": "i2",
                "label": "Martin Luther King Jr. Day",
                "correctBucketId": "people"
              },
              {
                "id": "i3",
                "label": "Veterans Day",
                "correctBucketId": "service"
              },
              {
                "id": "i4",
                "label": "Presidents' Day",
                "correctBucketId": "people"
              },
              {
                "id": "i5",
                "label": "Memorial Day",
                "correctBucketId": "service"
              },
              {
                "id": "i6",
                "label": "Constitution Day (Sept 17)",
                "correctBucketId": "independence"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l11-a1",
          "type": "mnemonic",
          "title": "US Motto",
          "content": "E Pluribus Unum = 'Out of Many, One' — many people and cultures united as one nation."
        },
        {
          "id": "social-studies-us-101-l11-a2",
          "type": "image",
          "title": "Infographic: A Nation of Immigrants",
          "content": "A visual showing a map of the world with arrows pointing to the United States, surrounded by icons representing food, music, and art, illustrating cultural contributions from around the globe."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l12",
      "title": "Checkpoint: History & Culture",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-101-l12-q1",
          "text": "What was the first permanent English settlement in North America?",
          "skillId": "social-studies-us-101-skill-colonial",
          "options": [
            {
              "id": "a",
              "text": "Plymouth, Massachusetts"
            },
            {
              "id": "b",
              "text": "Jamestown, Virginia"
            },
            {
              "id": "c",
              "text": "Philadelphia, Pennsylvania"
            },
            {
              "id": "d",
              "text": "Boston, Massachusetts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Jamestown was founded in 1607 in Virginia — 13 years before the Pilgrims arrived at Plymouth."
        },
        {
          "id": "social-studies-us-101-l12-q2",
          "text": "The Louisiana Purchase in 1803 was significant because it:",
          "skillId": "social-studies-us-101-skill-expansion",
          "options": [
            {
              "id": "a",
              "text": "Ended the Revolutionary War"
            },
            {
              "id": "b",
              "text": "Abolished slavery"
            },
            {
              "id": "c",
              "text": "Doubled the size of the United States"
            },
            {
              "id": "d",
              "text": "Gave women the right to vote"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Louisiana Purchase from France for about $15 million doubled the nation's territory and spurred westward expansion."
        },
        {
          "id": "social-studies-us-101-l12-q3",
          "text": "Which president issued the Emancipation Proclamation?",
          "skillId": "social-studies-us-101-skill-civilwar",
          "options": [
            {
              "id": "a",
              "text": "George Washington"
            },
            {
              "id": "b",
              "text": "Thomas Jefferson"
            },
            {
              "id": "c",
              "text": "Abraham Lincoln"
            },
            {
              "id": "d",
              "text": "Theodore Roosevelt"
            }
          ],
          "correctOptionId": "c",
          "explanation": "President Abraham Lincoln issued the Emancipation Proclamation in 1863, declaring enslaved people in Confederate states to be free."
        },
        {
          "id": "social-studies-us-101-l12-q4",
          "text": "'E Pluribus Unum' is the US motto. What does it mean?",
          "skillId": "social-studies-us-101-skill-culture",
          "options": [
            {
              "id": "a",
              "text": "In God We Trust"
            },
            {
              "id": "b",
              "text": "Liberty and Justice for All"
            },
            {
              "id": "c",
              "text": "Land of the Free"
            },
            {
              "id": "d",
              "text": "Out of Many, One"
            }
          ],
          "correctOptionId": "d",
          "explanation": "'E Pluribus Unum' is Latin for 'Out of Many, One' — reflecting the idea that many people and cultures come together as one nation."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "social-studies-us-101-l12-a1",
          "type": "mnemonic",
          "title": "History Order",
          "content": "Colonies → Revolution → Constitution → Westward Expansion → Civil War"
        }
      ]
    },
    {
      "id": "social-studies-us-101-l13",
      "title": "Community Government Scenario Lab",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Analyze a local government budget scenario",
        "Apply knowledge of government structure to a community decision",
        "Evaluate trade-offs in civic decision-making"
      ],
      "chunks": [
        {
          "id": "social-studies-us-101-l13-c1",
          "title": "The Scenario",
          "content": "Imagine your town council has an extra $500,000 in its budget. They are considering three options: 1) Build a new community park with a playground, 2) Hire five more police officers to improve safety, or 3) Repair crumbling roads and sidewalks. The council will hold a public hearing where any citizen can speak for two minutes to support one of the proposals. Which option would you choose, and how would you convince the council?"
        },
        {
          "id": "social-studies-us-101-l13-c2",
          "title": "Gathering Evidence",
          "content": "A strong argument uses evidence, not just opinions. For the park, you could cite studies showing that parks can reduce youth crime by 20%. For more police, you could point out that your town's emergency response time is 12 minutes, while the state average is only 8. For road repair, you could mention that a recent report found 34% of your town's roads are in 'poor condition.' Using facts makes your argument much more persuasive."
        },
        {
          "id": "social-studies-us-101-l13-c3",
          "title": "Making Your Argument",
          "content": "To make an effective two-minute speech, structure it clearly. First, state your position. Second, give two reasons supported by evidence. Third, acknowledge a counter-argument (what someone who disagrees might say) and explain why your choice is still better. Finally, end with a strong call to action, urging the council to vote for your proposal. For example: 'I support road repair because 34% of our roads are unsafe. While a park would be nice, safe roads benefit every single resident every day.'"
        },
        {
          "id": "social-studies-us-101-l13-c4",
          "title": "How the Vote Works",
          "content": "After the public hearing, the elected town council members will vote. A proposal usually needs a simple majority (more than half the votes) to pass. These council members were elected to represent the citizens, so public input is very important. If you disagree with the council's final decision, you can continue to participate by attending future meetings, writing to your representative, or voting in the next election. This is democracy in action at the local level."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-101-l13-f1",
          "front": "Town Council",
          "back": "A group of elected officials who govern a town or city; they pass local laws and set budgets."
        },
        {
          "id": "social-studies-us-101-l13-f2",
          "front": "Public Hearing",
          "back": "A meeting where citizens can speak to government officials about proposed decisions."
        },
        {
          "id": "social-studies-us-101-l13-f3",
          "front": "Simple Majority",
          "back": "More than half of the votes — the number needed to pass most local government decisions."
        },
        {
          "id": "social-studies-us-101-l13-f4",
          "front": "Evidence-Based Argument",
          "back": "A position supported by facts and data, not just personal opinion."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l13-a1",
          "type": "practice",
          "title": "Speech Builder",
          "content": "Write a 2-minute speech for one of the three proposals. Include: your position, two evidence-backed reasons, a response to a counter-argument, and a call to action."
        },
        {
          "id": "social-studies-us-101-l13-a2",
          "type": "image",
          "title": "Flowchart: Local Decision-Making Process",
          "content": "A simple flowchart showing the steps: 1. Issue Identified → 2. Public Hearing (Citizen Input) → 3. Town Council Vote → 4. Decision Made."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l14",
      "title": "Civic Action Studio",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify a community issue and connect it to a level of government",
        "Plan a civic action using the tools of democracy",
        "Evaluate which civic actions are most effective for different issues"
      ],
      "metadata": {
        "prompts": [
          "Pick one problem in your school or community. Which level of government (local, state, or federal) is responsible for addressing it?",
          "List three actions a citizen could take to help solve this problem.",
          "Which of your three actions would have the biggest impact? Why?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "social-studies-us-101-l14-ia1",
          "type": "sorting_buckets",
          "title": "Level of Government Sort",
          "description": "Sort each issue to the level of government most responsible for it.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "local",
                "label": "Local Government"
              },
              {
                "id": "state",
                "label": "State Government"
              },
              {
                "id": "federal",
                "label": "Federal Government"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A pothole on your street",
                "correctBucketId": "local"
              },
              {
                "id": "i2",
                "label": "Setting the state minimum wage",
                "correctBucketId": "state"
              },
              {
                "id": "i3",
                "label": "Declaring war on another country",
                "correctBucketId": "federal"
              },
              {
                "id": "i4",
                "label": "Funding the local fire department",
                "correctBucketId": "local"
              },
              {
                "id": "i5",
                "label": "Issuing driver's licenses",
                "correctBucketId": "state"
              },
              {
                "id": "i6",
                "label": "Printing money and setting interest rates",
                "correctBucketId": "federal"
              }
            ]
          }
        },
        {
          "id": "social-studies-us-101-l14-ia2",
          "type": "drag_and_drop",
          "title": "Civic Action Plan Builder",
          "description": "Drag each civic action to the step where it best fits.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "identify",
                "label": "Step 1: Identify the Problem"
              },
              {
                "id": "research",
                "label": "Step 2: Research & Gather Evidence"
              },
              {
                "id": "act",
                "label": "Step 3: Take Action"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Notice that the school playground has broken equipment",
                "correctTargetId": "identify"
              },
              {
                "id": "d2",
                "label": "Find out how much new equipment costs and who approves the budget",
                "correctTargetId": "research"
              },
              {
                "id": "d3",
                "label": "Write a letter to the school board with a petition signed by students",
                "correctTargetId": "act"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-101-l14-a1",
          "type": "mnemonic",
          "title": "Government Levels",
          "content": "Local = your town, State = your state's laws, Federal = the whole country."
        }
      ]
    },
    {
      "id": "social-studies-us-101-l15",
      "title": "Mastery Sprint: US Social Studies",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "social-studies-us-101-l15-q1",
          "text": "The Constitution divides power among three branches to prevent any one branch from becoming too powerful. This principle is called:",
          "skillId": "social-studies-us-101-skill-separation",
          "options": [
            {
              "id": "a",
              "text": "Federalism"
            },
            {
              "id": "b",
              "text": "Checks and balances"
            },
            {
              "id": "c",
              "text": "Popular sovereignty"
            },
            {
              "id": "d",
              "text": "Judicial review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Checks and balances is the system where each branch can limit the others' powers, preventing any single branch from dominating."
        },
        {
          "id": "social-studies-us-101-l15-q2",
          "text": "Which amendment abolished slavery in the United States?",
          "skillId": "social-studies-us-101-skill-amendments-mastery",
          "options": [
            {
              "id": "a",
              "text": "1st Amendment"
            },
            {
              "id": "b",
              "text": "13th Amendment"
            },
            {
              "id": "c",
              "text": "19th Amendment"
            },
            {
              "id": "d",
              "text": "26th Amendment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The 13th Amendment (1865) abolished slavery throughout the United States."
        },
        {
          "id": "social-studies-us-101-l15-q3",
          "text": "A broken traffic light in your town would be fixed by which level of government?",
          "skillId": "social-studies-us-101-skill-levels",
          "options": [
            {
              "id": "a",
              "text": "Federal government"
            },
            {
              "id": "b",
              "text": "State government"
            },
            {
              "id": "c",
              "text": "Local government"
            },
            {
              "id": "d",
              "text": "The United Nations"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Local government handles town infrastructure like roads, traffic lights, and public utilities."
        },
        {
          "id": "social-studies-us-101-l15-q4",
          "text": "The Lewis and Clark expedition explored territory gained through which event?",
          "skillId": "social-studies-us-101-skill-expansion-mastery",
          "options": [
            {
              "id": "a",
              "text": "The Revolutionary War"
            },
            {
              "id": "b",
              "text": "The Louisiana Purchase"
            },
            {
              "id": "c",
              "text": "The Civil War"
            },
            {
              "id": "d",
              "text": "The Gold Rush"
            }
          ],
          "correctOptionId": "b",
          "explanation": "President Jefferson sent Lewis and Clark to explore the vast territory acquired in the Louisiana Purchase (1803) from France."
        },
        {
          "id": "social-studies-us-101-l15-q5",
          "text": "Which region of the United States includes the Rocky Mountains, Pacific coast, and Silicon Valley?",
          "skillId": "social-studies-us-101-skill-regions-mastery",
          "options": [
            {
              "id": "a",
              "text": "Midwest"
            },
            {
              "id": "b",
              "text": "Northeast"
            },
            {
              "id": "c",
              "text": "Southwest"
            },
            {
              "id": "d",
              "text": "West"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The West region includes the Rocky Mountains, Pacific coast states (California, Oregon, Washington), Alaska, and Hawaii."
        },
        {
          "id": "social-studies-us-101-l15-q6",
          "text": "A citizen who wants to change a local policy can do all of the following EXCEPT:",
          "skillId": "social-studies-us-101-skill-civic-mastery",
          "options": [
            {
              "id": "a",
              "text": "Attend a town council meeting"
            },
            {
              "id": "b",
              "text": "Write a letter to their elected representative"
            },
            {
              "id": "c",
              "text": "Declare the law unconstitutional on their own"
            },
            {
              "id": "d",
              "text": "Start a petition and gather signatures"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Only the judicial branch (courts) can declare a law unconstitutional. Citizens can attend meetings, contact representatives, and petition — but they cannot independently strike down laws."
        }
      ],
      "interactiveActivities": [
        {
          "id": "social-studies-us-101-l15-ia1",
          "type": "matching_pairs",
          "title": "Key Figures and Contributions",
          "description": "Match each historical figure to their major contribution.",
          "estimatedMinutes": 6,
          "difficultyLevel": "hard",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Thomas Jefferson"
              },
              {
                "id": "l2",
                "label": "George Washington"
              },
              {
                "id": "l3",
                "label": "Abraham Lincoln"
              },
              {
                "id": "l4",
                "label": "Benjamin Franklin"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Primary author of the Declaration of Independence"
              },
              {
                "id": "r2",
                "label": "First President; Commander-in-Chief in the Revolution"
              },
              {
                "id": "r3",
                "label": "Preserved the Union; issued the Emancipation Proclamation"
              },
              {
                "id": "r4",
                "label": "Diplomat who secured French support; inventor and printer"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "social-studies-us-101-l15-a1",
          "type": "mnemonic",
          "title": "Key Dates",
          "content": "1607 Jamestown | 1776 Declaration | 1787 Constitution | 1803 Louisiana Purchase | 1861–1865 Civil War"
        }
      ]
    }
  ]
};
