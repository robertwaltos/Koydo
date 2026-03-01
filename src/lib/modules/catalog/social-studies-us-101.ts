import type { LearningModule } from "@/lib/modules/types";

export const SocialStudiesUs101Module: LearningModule = {
  id: "social-studies-us-101",
  title: "Social Studies: United States",
  description:
    "Learn about the US government, Constitution, Bill of Rights, geography, regions, American history milestones, and civic participation.",
  subject: "Social Studies US",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  version: "2.0.0",
  learningObjectives: [
    "Explain why the US Constitution was written and what it establishes",
    "Describe the three branches of government and the system of checks and balances",
    "Identify key rights protected by the Bill of Rights",
    "Explain how elections and voting work in the United States",
    "Locate the five US regions and describe their geographic features",
    "Recognize important American symbols, landmarks, and national holidays",
    "Summarize major milestones in American history from colonial times through the Civil War",
    "Participate in a civic scenario by analyzing a community issue and proposing a solution"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Foundations of US Government  (video)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l01",
      title: "Foundations of US Government",
      type: "video",
      duration: 10,
      objectives: [
        "Explain why the American colonies declared independence from Britain",
        "Identify the purpose of the US Constitution",
        "Describe what 'We the People' means in practice"
      ],
      chunks: [
        {
          id: "social-studies-us-101-l01-c1",
          title: "Why a New Government?",
          content:
            "Before 1776, the 13 American colonies were ruled by Great Britain. Colonists had to pay taxes to the British king but had no representatives in the British Parliament — 'taxation without representation.' Growing frustration led colonial leaders like Thomas Jefferson, Benjamin Franklin, and John Adams to call for independence."
        },
        {
          id: "social-studies-us-101-l01-c2",
          title: "The Declaration of Independence",
          content:
            "On July 4, 1776, the Continental Congress adopted the Declaration of Independence, written primarily by Thomas Jefferson. Its most famous line: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.' This document announced that the colonies were free from British rule."
        },
        {
          id: "social-studies-us-101-l01-c3",
          title: "The US Constitution",
          content:
            "After winning the Revolutionary War, the new nation needed rules for governing. In 1787, delegates met in Philadelphia to write the Constitution — the supreme law of the United States. It begins with 'We the People,' meaning the government gets its power from the citizens, not a king. The Constitution sets up the structure of government, defines its powers, and protects individual rights."
        },
        {
          id: "social-studies-us-101-l01-c4",
          title: "A Living Document",
          content:
            "The Founders knew times would change, so they included a way to add amendments (changes). The first 10 amendments, added in 1791, are called the Bill of Rights. Since then, 17 more amendments have been added, including ones that abolished slavery (13th), granted citizenship to all born in the US (14th), and gave women the right to vote (19th)."
        }
      ],
      flashcards: [
        { id: "social-studies-us-101-l01-f1", front: "Declaration of Independence", back: "Document adopted July 4, 1776, declaring the 13 colonies free from British rule; written primarily by Thomas Jefferson" },
        { id: "social-studies-us-101-l01-f2", front: "US Constitution", back: "The supreme law of the United States, written in 1787; establishes the structure of government and protects citizens' rights" },
        { id: "social-studies-us-101-l01-f3", front: "'Taxation without representation'", back: "The colonists' complaint that they paid British taxes but had no voice in the British Parliament" },
        { id: "social-studies-us-101-l01-f4", front: "Amendment", back: "A formal change or addition to the Constitution; 27 amendments have been ratified so far" }
      ],
      learningAids: [
        { id: "social-studies-us-101-l01-a1", type: "image", title: "Timeline: Road to Independence", content: "Timeline from the Stamp Act (1765) → Boston Tea Party (1773) → Declaration of Independence (1776) → Constitution (1787)." }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Three Branches of Government  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l02",
      title: "Three Branches of Government",
      type: "interactive",
      duration: 12,
      objectives: [
        "Name the three branches and their main jobs",
        "Explain checks and balances with a real example",
        "Identify who leads each branch"
      ],
      metadata: {
        prompts: [
          "Which branch writes new laws? Which branch enforces them? Which branch interprets them?",
          "Give one example of how one branch can 'check' another branch's power.",
          "Why did the Founders split government power into three branches instead of giving it all to one person?"
        ]
      },
      interactiveActivities: [
        {
          id: "social-studies-us-101-l02-ia1",
          type: "sorting_buckets",
          title: "Sort the Powers",
          description: "Place each power or role into the correct branch of government.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "legislative", label: "Legislative (Congress)" },
              { id: "executive", label: "Executive (President)" },
              { id: "judicial", label: "Judicial (Supreme Court)" }
            ],
            items: [
              { id: "i1", label: "Writes and passes new laws", correctBucketId: "legislative" },
              { id: "i2", label: "Signs or vetoes bills", correctBucketId: "executive" },
              { id: "i3", label: "Decides if laws follow the Constitution", correctBucketId: "judicial" },
              { id: "i4", label: "Controls the federal budget", correctBucketId: "legislative" },
              { id: "i5", label: "Commands the military", correctBucketId: "executive" },
              { id: "i6", label: "Interprets the meaning of laws", correctBucketId: "judicial" }
            ]
          }
        },
        {
          id: "social-studies-us-101-l02-ia2",
          type: "matching_pairs",
          title: "Checks and Balances Match",
          description: "Match each 'check' to the branch that performs it.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "President vetoes a bill" },
              { id: "l2", label: "Congress overrides a veto with 2/3 vote" },
              { id: "l3", label: "Supreme Court strikes down a law as unconstitutional" },
              { id: "l4", label: "Senate confirms or rejects Supreme Court nominees" }
            ],
            right: [
              { id: "r1", label: "Executive checks Legislative" },
              { id: "r2", label: "Legislative checks Executive" },
              { id: "r3", label: "Judicial checks Legislative" },
              { id: "r4", label: "Legislative checks Judicial" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "social-studies-us-101-l02-a1", type: "mnemonic", title: "Branch Jobs", content: "Legislative = Laws, Executive = Enforce, Judicial = Judge. Remember: L-E-J." }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Checkpoint: Government Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l03",
      title: "Checkpoint: Government Foundations",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-101-l03-q1",
          text: "What was the main complaint that led American colonists to seek independence?",
          skillId: "social-studies-us-101-skill-foundations",
          options: [
            { id: "a", text: "They wanted to become part of France" },
            { id: "b", text: "Taxation without representation — they paid taxes but had no voice in Parliament" },
            { id: "c", text: "They disagreed about which language to speak" },
            { id: "d", text: "They wanted a king of their own" }
          ],
          correctOptionId: "b",
          explanation: "Colonists objected to paying British taxes when they had no elected representatives in the British Parliament."
        },
        {
          id: "social-studies-us-101-l03-q2",
          text: "Which branch of government has the power to declare a law unconstitutional?",
          skillId: "social-studies-us-101-skill-branches",
          options: [
            { id: "a", text: "Legislative branch (Congress)" },
            { id: "b", text: "Executive branch (President)" },
            { id: "c", text: "Judicial branch (Supreme Court)" },
            { id: "d", text: "The military" }
          ],
          correctOptionId: "c",
          explanation: "The judicial branch (Supreme Court) has the power of judicial review — it can strike down laws that violate the Constitution."
        },
        {
          id: "social-studies-us-101-l03-q3",
          text: "The Constitution begins with 'We the People.' What does this phrase establish?",
          skillId: "social-studies-us-101-skill-constitution",
          options: [
            { id: "a", text: "That only wealthy landowners can vote" },
            { id: "b", text: "That the government's power comes from the citizens" },
            { id: "c", text: "That the President has unlimited power" },
            { id: "d", text: "That states are independent countries" }
          ],
          correctOptionId: "b",
          explanation: "'We the People' means popular sovereignty — the government gets its authority from the people, not from a monarch or ruling class."
        },
        {
          id: "social-studies-us-101-l03-q4",
          text: "Why did the Founders create a system of checks and balances?",
          skillId: "social-studies-us-101-skill-checks",
          options: [
            { id: "a", text: "To make the government work faster" },
            { id: "b", text: "To give all power to the President" },
            { id: "c", text: "To prevent any one branch from becoming too powerful" },
            { id: "d", text: "To eliminate the need for elections" }
          ],
          correctOptionId: "c",
          explanation: "Checks and balances ensure that no single branch of government can dominate. Each branch can limit the powers of the others."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "social-studies-us-101-l03-a1", type: "mnemonic", title: "Three Branches", content: "Congress makes laws, the President enforces laws, the Supreme Court interprets laws." }
      ]
    },

    /* ──────────────────────────────────────────────
       L04  Rights and Responsibilities  (video)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l04",
      title: "Rights and Responsibilities",
      type: "video",
      duration: 11,
      objectives: [
        "Name at least five rights protected by the Bill of Rights",
        "Explain the difference between a right and a responsibility",
        "Identify key amendments beyond the Bill of Rights"
      ],
      chunks: [
        {
          id: "social-studies-us-101-l04-c1",
          title: "The Bill of Rights",
          content:
            "The Bill of Rights is the first 10 amendments to the Constitution, ratified in 1791. Key protections include: 1st Amendment — freedom of speech, religion, press, assembly, and petition; 2nd — right to bear arms; 4th — protection against unreasonable searches; 5th — right to due process and not to testify against yourself; 6th — right to a speedy and public trial."
        },
        {
          id: "social-studies-us-101-l04-c2",
          title: "Rights vs Responsibilities",
          content:
            "Rights are freedoms the government must protect. Responsibilities are duties citizens have to keep democracy working. Examples of responsibilities: obeying laws, paying taxes, serving on a jury, voting in elections, and staying informed about community issues. Rights and responsibilities go together — a strong democracy depends on both."
        },
        {
          id: "social-studies-us-101-l04-c3",
          title: "Landmark Amendments",
          content:
            "Beyond the Bill of Rights, several amendments transformed the nation. The 13th Amendment (1865) abolished slavery. The 14th Amendment (1868) guaranteed equal protection under the law for all citizens. The 15th Amendment (1870) prohibited denying the vote based on race. The 19th Amendment (1920) gave women the right to vote. The 26th Amendment (1971) lowered the voting age to 18."
        },
        {
          id: "social-studies-us-101-l04-c4",
          title: "Rights in Daily Life",
          content:
            "You exercise your rights every day. Reading a newspaper or website uses freedom of the press. Attending a church, mosque, or synagogue uses freedom of religion. Joining a school club uses freedom of assembly. Speaking your mind about a school policy uses freedom of speech. Understanding your rights helps you protect them."
        }
      ],
      flashcards: [
        { id: "social-studies-us-101-l04-f1", front: "1st Amendment", back: "Protects five freedoms: speech, religion, press, assembly, and petition" },
        { id: "social-studies-us-101-l04-f2", front: "13th Amendment", back: "Abolished slavery in the United States (1865)" },
        { id: "social-studies-us-101-l04-f3", front: "19th Amendment", back: "Gave women the right to vote (1920)" },
        { id: "social-studies-us-101-l04-f4", front: "Civic responsibility", back: "Duties of citizens: obey laws, pay taxes, vote, serve on juries, stay informed" }
      ],
      learningAids: [
        { id: "social-studies-us-101-l04-a1", type: "mnemonic", title: "1st Amendment Freedoms", content: "RAPPS: Religion, Assembly, Press, Petition, Speech." }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Elections and Voting  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l05",
      title: "Elections and Voting",
      type: "interactive",
      duration: 12,
      objectives: [
        "Describe how US presidential elections work",
        "Explain what the Electoral College does",
        "Give reasons why voting is important in a democracy"
      ],
      metadata: {
        prompts: [
          "Why do we have an Electoral College instead of a direct popular vote for President?",
          "What are two things a citizen can do besides voting to participate in government?",
          "Describe what happens on Election Day from a voter's perspective."
        ]
      },
      interactiveActivities: [
        {
          id: "social-studies-us-101-l05-ia1",
          type: "drag_and_drop",
          title: "Election Process Order",
          description: "Put the steps of a presidential election in the correct order.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "step1", label: "Step 1 (First)" },
              { id: "step2", label: "Step 2" },
              { id: "step3", label: "Step 3" },
              { id: "step4", label: "Step 4" },
              { id: "step5", label: "Step 5 (Last)" }
            ],
            draggables: [
              { id: "d1", label: "Candidates campaign across the country", correctTargetId: "step2" },
              { id: "d2", label: "Parties hold primaries to choose their nominee", correctTargetId: "step1" },
              { id: "d3", label: "The President is inaugurated on January 20", correctTargetId: "step5" },
              { id: "d4", label: "Citizens vote on Election Day in November", correctTargetId: "step3" },
              { id: "d5", label: "Electoral College casts official votes", correctTargetId: "step4" }
            ]
          }
        },
        {
          id: "social-studies-us-101-l05-ia2",
          type: "sorting_buckets",
          title: "Rights vs Responsibilities Sort",
          description: "Classify each item as a right or a civic responsibility.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "right", label: "Rights" },
              { id: "responsibility", label: "Responsibilities" }
            ],
            items: [
              { id: "i1", label: "Freedom of speech", correctBucketId: "right" },
              { id: "i2", label: "Paying taxes", correctBucketId: "responsibility" },
              { id: "i3", label: "Freedom of religion", correctBucketId: "right" },
              { id: "i4", label: "Serving on a jury when called", correctBucketId: "responsibility" },
              { id: "i5", label: "Right to a fair trial", correctBucketId: "right" },
              { id: "i6", label: "Voting in elections", correctBucketId: "responsibility" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "social-studies-us-101-l05-a1", type: "image", title: "Electoral College Map", content: "US map showing Electoral College votes per state, with total of 538 and 270 needed to win." }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Checkpoint: Rights & Civic Participation  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l06",
      title: "Checkpoint: Rights & Civic Participation",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-101-l06-q1",
          text: "Which amendment gave women the right to vote?",
          skillId: "social-studies-us-101-skill-amendments",
          options: [
            { id: "a", text: "13th Amendment" },
            { id: "b", text: "15th Amendment" },
            { id: "c", text: "19th Amendment" },
            { id: "d", text: "26th Amendment" }
          ],
          correctOptionId: "c",
          explanation: "The 19th Amendment (1920) prohibited denying the right to vote based on sex, securing women's suffrage."
        },
        {
          id: "social-studies-us-101-l06-q2",
          text: "The 1st Amendment protects all of the following EXCEPT:",
          skillId: "social-studies-us-101-skill-billofrights",
          options: [
            { id: "a", text: "Freedom of speech" },
            { id: "b", text: "Right to bear arms" },
            { id: "c", text: "Freedom of the press" },
            { id: "d", text: "Freedom of religion" }
          ],
          correctOptionId: "b",
          explanation: "The right to bear arms is the 2nd Amendment. The 1st Amendment covers speech, religion, press, assembly, and petition (RAPPS)."
        },
        {
          id: "social-studies-us-101-l06-q3",
          text: "How many electoral votes does a presidential candidate need to win?",
          skillId: "social-studies-us-101-skill-elections",
          options: [
            { id: "a", text: "100" },
            { id: "b", text: "538" },
            { id: "c", text: "270" },
            { id: "d", text: "435" }
          ],
          correctOptionId: "c",
          explanation: "There are 538 total Electoral College votes. A candidate needs a majority — at least 270 — to win the presidency."
        },
        {
          id: "social-studies-us-101-l06-q4",
          text: "Which is an example of a civic RESPONSIBILITY, not a right?",
          skillId: "social-studies-us-101-skill-civic",
          options: [
            { id: "a", text: "Freedom to practice any religion" },
            { id: "b", text: "Right to a fair trial" },
            { id: "c", text: "Serving on a jury when called" },
            { id: "d", text: "Right to peaceful assembly" }
          ],
          correctOptionId: "c",
          explanation: "Jury service is a civic responsibility — a duty citizens perform to maintain the justice system. The others are rights protected by the Constitution."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "social-studies-us-101-l06-a1", type: "mnemonic", title: "Electoral Math", content: "538 total electors = 435 House + 100 Senate + 3 DC. Need 270 to win." }
      ]
    },

    /* ──────────────────────────────────────────────
       L07  US Geography and Regions  (video)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l07",
      title: "US Geography and Regions",
      type: "video",
      duration: 12,
      objectives: [
        "Identify the five major US regions and states in each",
        "Describe key geographic features of each region",
        "Explain how geography affects where people live and work"
      ],
      chunks: [
        {
          id: "social-studies-us-101-l07-c1",
          title: "Five Regions of the United States",
          content:
            "The US is often divided into five regions: Northeast (New England + Mid-Atlantic), Southeast, Midwest, Southwest, and West. Each region has distinct landforms, climate, and culture shaped by its geography."
        },
        {
          id: "social-studies-us-101-l07-c2",
          title: "Northeast and Southeast",
          content:
            "The Northeast includes cities like New York and Boston. It has cold winters, rocky coasts, and was the center of early American history. The Southeast stretches from Virginia to Florida. It features warm, humid climates, the Appalachian Mountains, and the Mississippi River delta. Agriculture (cotton, tobacco, citrus) and tourism are major industries."
        },
        {
          id: "social-studies-us-101-l07-c3",
          title: "Midwest and Southwest",
          content:
            "The Midwest (Ohio to the Dakotas) is called 'America's Breadbasket' because its flat Great Plains are ideal for farming wheat, corn, and soybeans. The Great Lakes — Superior, Michigan, Huron, Erie, Ontario — hold 20% of the world's fresh surface water. The Southwest (Texas, New Mexico, Arizona) has deserts, canyons, and hot, dry climates. The Grand Canyon is one of its most famous landmarks."
        },
        {
          id: "social-studies-us-101-l07-c4",
          title: "The West",
          content:
            "The West includes the Rocky Mountains, Pacific coast, Alaska, and Hawaii. California is the most populous state. The region has diverse geography: snowy mountains, lush forests, volcanic islands, and arid deserts. Major industries include technology (Silicon Valley), entertainment (Hollywood), fishing, and timber."
        }
      ],
      flashcards: [
        { id: "social-studies-us-101-l07-f1", front: "America's Breadbasket", back: "The Midwest region — its Great Plains produce much of the nation's wheat, corn, and soybeans" },
        { id: "social-studies-us-101-l07-f2", front: "Great Lakes (HOMES)", back: "Huron, Ontario, Michigan, Erie, Superior — the five Great Lakes on the US-Canada border" },
        { id: "social-studies-us-101-l07-f3", front: "Grand Canyon", back: "A massive canyon in Arizona carved by the Colorado River; one of the Southwest's most famous landmarks" },
        { id: "social-studies-us-101-l07-f4", front: "Five US Regions", back: "Northeast, Southeast, Midwest, Southwest, West" }
      ],
      learningAids: [
        { id: "social-studies-us-101-l07-a1", type: "image", title: "US Regions Map", content: "Color-coded map of the five US regions with major states, landforms, and cities labeled." }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Maps, Symbols, and Landmarks  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l08",
      title: "Maps, Symbols, and Landmarks",
      type: "interactive",
      duration: 12,
      objectives: [
        "Read a basic political map using a legend, compass rose, and scale",
        "Identify important US national symbols",
        "Match famous landmarks to their locations"
      ],
      metadata: {
        prompts: [
          "Look at a US map. Which ocean borders the East Coast? Which borders the West Coast?",
          "What do the 50 stars and 13 stripes on the American flag represent?",
          "Name one national landmark you would like to visit and explain why it is important to American history."
        ]
      },
      interactiveActivities: [
        {
          id: "social-studies-us-101-l08-ia1",
          type: "matching_pairs",
          title: "Landmark Location Match",
          description: "Match each famous landmark to its state or city.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Statue of Liberty" },
              { id: "l2", label: "Grand Canyon" },
              { id: "l3", label: "Mount Rushmore" },
              { id: "l4", label: "Golden Gate Bridge" }
            ],
            right: [
              { id: "r1", label: "New York Harbor" },
              { id: "r2", label: "Arizona" },
              { id: "r3", label: "South Dakota" },
              { id: "r4", label: "San Francisco, California" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        },
        {
          id: "social-studies-us-101-l08-ia2",
          type: "sorting_buckets",
          title: "US Symbols Sort",
          description: "Sort each item as a national symbol or not a national symbol.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "symbol", label: "US National Symbols" },
              { id: "notsymbol", label: "Not a US National Symbol" }
            ],
            items: [
              { id: "i1", label: "Bald Eagle", correctBucketId: "symbol" },
              { id: "i2", label: "The American Flag (Stars and Stripes)", correctBucketId: "symbol" },
              { id: "i3", label: "The Eiffel Tower", correctBucketId: "notsymbol" },
              { id: "i4", label: "The Liberty Bell", correctBucketId: "symbol" },
              { id: "i5", label: "The Maple Leaf", correctBucketId: "notsymbol" },
              { id: "i6", label: "The Star-Spangled Banner (national anthem)", correctBucketId: "symbol" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "social-studies-us-101-l08-a1", type: "image", title: "Map Reading Guide", content: "Annotated map showing compass rose (N/S/E/W), map legend, and scale bar with example distances." }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Checkpoint: Geography & Symbols  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l09",
      title: "Checkpoint: Geography & Symbols",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-101-l09-q1",
          text: "Which US region is known as 'America's Breadbasket' for its wheat and corn production?",
          skillId: "social-studies-us-101-skill-regions",
          options: [
            { id: "a", text: "Northeast" },
            { id: "b", text: "Southeast" },
            { id: "c", text: "Midwest" },
            { id: "d", text: "Southwest" }
          ],
          correctOptionId: "c",
          explanation: "The Midwest's flat Great Plains are ideal for farming. States like Iowa, Kansas, and Nebraska produce huge amounts of grain."
        },
        {
          id: "social-studies-us-101-l09-q2",
          text: "The 50 stars on the American flag represent:",
          skillId: "social-studies-us-101-skill-symbols",
          options: [
            { id: "a", text: "The 50 original colonies" },
            { id: "b", text: "The 50 states in the Union today" },
            { id: "c", text: "The 50 signers of the Declaration" },
            { id: "d", text: "The 50 amendments to the Constitution" }
          ],
          correctOptionId: "b",
          explanation: "The 50 stars represent the 50 current states. The 13 stripes represent the original 13 colonies."
        },
        {
          id: "social-studies-us-101-l09-q3",
          text: "Which body of water borders the eastern coast of the United States?",
          skillId: "social-studies-us-101-skill-geography",
          options: [
            { id: "a", text: "Pacific Ocean" },
            { id: "b", text: "Gulf of Mexico" },
            { id: "c", text: "Atlantic Ocean" },
            { id: "d", text: "Arctic Ocean" }
          ],
          correctOptionId: "c",
          explanation: "The Atlantic Ocean borders the East Coast. The Pacific Ocean borders the West Coast."
        },
        {
          id: "social-studies-us-101-l09-q4",
          text: "Mount Rushmore features the carved faces of four presidents. In which state is it located?",
          skillId: "social-studies-us-101-skill-landmarks",
          options: [
            { id: "a", text: "Colorado" },
            { id: "b", text: "South Dakota" },
            { id: "c", text: "Virginia" },
            { id: "d", text: "Montana" }
          ],
          correctOptionId: "b",
          explanation: "Mount Rushmore is in the Black Hills of South Dakota. It features Washington, Jefferson, Theodore Roosevelt, and Lincoln."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "social-studies-us-101-l09-a1", type: "mnemonic", title: "Great Lakes: HOMES", content: "Huron, Ontario, Michigan, Erie, Superior." }
      ]
    },

    /* ──────────────────────────────────────────────
       L10  American History Milestones  (video)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l10",
      title: "American History Milestones",
      type: "video",
      duration: 13,
      objectives: [
        "Place major events on a timeline from the colonial era through the Civil War",
        "Identify key historical figures and their contributions",
        "Explain the significance of westward expansion"
      ],
      chunks: [
        {
          id: "social-studies-us-101-l10-c1",
          title: "Colonial America (1600s–1770s)",
          content:
            "English settlers established Jamestown, Virginia in 1607 — the first permanent English colony. The Pilgrims arrived at Plymouth, Massachusetts in 1620 seeking religious freedom. By the 1770s, 13 colonies stretched along the East Coast. Colonists developed self-governing assemblies, but tensions with Britain grew over taxes and control."
        },
        {
          id: "social-studies-us-101-l10-c2",
          title: "Revolution and a New Nation (1775–1800)",
          content:
            "The Revolutionary War (1775–1783) won American independence. Key figures: George Washington (Commander-in-Chief, 1st President), Benjamin Franklin (diplomat, inventor), Thomas Jefferson (Declaration author). The Constitution was ratified in 1788, and the Bill of Rights followed in 1791. Washington, D.C. was established as the nation's capital."
        },
        {
          id: "social-studies-us-101-l10-c3",
          title: "Westward Expansion (1800s)",
          content:
            "The Louisiana Purchase (1803) doubled the nation's size. Lewis and Clark explored the new territory. The idea of 'Manifest Destiny' — that the US was destined to stretch from coast to coast — drove settlers westward. The Oregon Trail, Gold Rush (1849), and transcontinental railroad (completed 1869) transformed the nation. Native American peoples were forcibly displaced, including the Trail of Tears (1830s)."
        },
        {
          id: "social-studies-us-101-l10-c4",
          title: "The Civil War (1861–1865)",
          content:
            "The nation split over slavery. Southern states seceded to form the Confederacy. The Union (North) fought the Confederacy (South) for four years. Key figures: President Abraham Lincoln, who issued the Emancipation Proclamation (1863) freeing enslaved people in Confederate states. General Ulysses S. Grant led the Union to victory. The 13th Amendment (1865) abolished slavery nationwide."
        }
      ],
      flashcards: [
        { id: "social-studies-us-101-l10-f1", front: "Jamestown, 1607", back: "The first permanent English settlement in North America, in Virginia" },
        { id: "social-studies-us-101-l10-f2", front: "Louisiana Purchase, 1803", back: "The US bought 828,000 square miles from France, doubling the nation's size; cost about $15 million" },
        { id: "social-studies-us-101-l10-f3", front: "Emancipation Proclamation, 1863", back: "Executive order by President Lincoln that declared enslaved people in Confederate states to be free" },
        { id: "social-studies-us-101-l10-f4", front: "Trail of Tears", back: "Forced relocation of Native American nations (especially Cherokee) from southeastern US to Oklahoma in the 1830s" }
      ],
      learningAids: [
        { id: "social-studies-us-101-l10-a1", type: "image", title: "US History Timeline", content: "Illustrated timeline: Jamestown (1607) → Pilgrims (1620) → Revolution (1776) → Constitution (1787) → Louisiana Purchase (1803) → Civil War (1861–1865)." }
      ]
    },

    /* ──────────────────────────────────────────────
       L11  Culture and Diversity  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l11",
      title: "Culture and Diversity",
      type: "interactive",
      duration: 12,
      objectives: [
        "Explain the motto 'E Pluribus Unum' (Out of Many, One)",
        "Describe how immigration has shaped American culture",
        "Identify cultural contributions from different groups"
      ],
      metadata: {
        prompts: [
          "What does 'E Pluribus Unum' mean, and why is it the US motto?",
          "Name one cultural tradition in your community that came from another country.",
          "Why is the United States sometimes called a 'nation of immigrants'?"
        ]
      },
      interactiveActivities: [
        {
          id: "social-studies-us-101-l11-ia1",
          type: "matching_pairs",
          title: "Cultural Contributions Match",
          description: "Match each cultural contribution to the group most associated with it.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Jazz music" },
              { id: "l2", label: "Thanksgiving harvest celebration" },
              { id: "l3", label: "Tacos, tamales, and salsa" },
              { id: "l4", label: "St. Patrick's Day parade" }
            ],
            right: [
              { id: "r1", label: "African American communities" },
              { id: "r2", label: "Native American and Pilgrim traditions" },
              { id: "r3", label: "Mexican and Latin American heritage" },
              { id: "r4", label: "Irish American heritage" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        },
        {
          id: "social-studies-us-101-l11-ia2",
          type: "sorting_buckets",
          title: "National Holiday Sort",
          description: "Sort each holiday by what it commemorates.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "independence", label: "Celebrates Independence or Founding" },
              { id: "people", label: "Honors People or Groups" },
              { id: "service", label: "Honors Service and Sacrifice" }
            ],
            items: [
              { id: "i1", label: "Independence Day (July 4th)", correctBucketId: "independence" },
              { id: "i2", label: "Martin Luther King Jr. Day", correctBucketId: "people" },
              { id: "i3", label: "Veterans Day", correctBucketId: "service" },
              { id: "i4", label: "Presidents' Day", correctBucketId: "people" },
              { id: "i5", label: "Memorial Day", correctBucketId: "service" },
              { id: "i6", label: "Constitution Day (Sept 17)", correctBucketId: "independence" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "social-studies-us-101-l11-a1", type: "mnemonic", title: "US Motto", content: "E Pluribus Unum = 'Out of Many, One' — many people and cultures united as one nation." }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Checkpoint: History & Culture  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l12",
      title: "Checkpoint: History & Culture",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "social-studies-us-101-l12-q1",
          text: "What was the first permanent English settlement in North America?",
          skillId: "social-studies-us-101-skill-colonial",
          options: [
            { id: "a", text: "Plymouth, Massachusetts" },
            { id: "b", text: "Jamestown, Virginia" },
            { id: "c", text: "Philadelphia, Pennsylvania" },
            { id: "d", text: "Boston, Massachusetts" }
          ],
          correctOptionId: "b",
          explanation: "Jamestown was founded in 1607 in Virginia — 13 years before the Pilgrims arrived at Plymouth."
        },
        {
          id: "social-studies-us-101-l12-q2",
          text: "The Louisiana Purchase in 1803 was significant because it:",
          skillId: "social-studies-us-101-skill-expansion",
          options: [
            { id: "a", text: "Ended the Revolutionary War" },
            { id: "b", text: "Abolished slavery" },
            { id: "c", text: "Doubled the size of the United States" },
            { id: "d", text: "Gave women the right to vote" }
          ],
          correctOptionId: "c",
          explanation: "The Louisiana Purchase bought 828,000 square miles from France for about $15 million, doubling the nation's territory."
        },
        {
          id: "social-studies-us-101-l12-q3",
          text: "Which president issued the Emancipation Proclamation?",
          skillId: "social-studies-us-101-skill-civilwar",
          options: [
            { id: "a", text: "George Washington" },
            { id: "b", text: "Thomas Jefferson" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "Theodore Roosevelt" }
          ],
          correctOptionId: "c",
          explanation: "President Abraham Lincoln issued the Emancipation Proclamation in 1863, declaring enslaved people in Confederate states to be free."
        },
        {
          id: "social-studies-us-101-l12-q4",
          text: "'E Pluribus Unum' is the US motto. What does it mean?",
          skillId: "social-studies-us-101-skill-culture",
          options: [
            { id: "a", text: "In God We Trust" },
            { id: "b", text: "Liberty and Justice for All" },
            { id: "c", text: "Land of the Free" },
            { id: "d", text: "Out of Many, One" }
          ],
          correctOptionId: "d",
          explanation: "'E Pluribus Unum' is Latin for 'Out of Many, One' — reflecting the idea that many people and cultures come together as one nation."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "social-studies-us-101-l12-a1", type: "mnemonic", title: "History Order", content: "Colonies → Revolution → Constitution → Westward Expansion → Civil War" }
      ]
    },

    /* ──────────────────────────────────────────────
       L13  Community Government Scenario Lab  (video)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l13",
      title: "Community Government Scenario Lab",
      type: "video",
      duration: 13,
      objectives: [
        "Analyze a local government budget scenario",
        "Apply knowledge of government structure to a community decision",
        "Evaluate trade-offs in civic decision-making"
      ],
      chunks: [
        {
          id: "social-studies-us-101-l13-c1",
          title: "The Scenario",
          content:
            "Your town council has $500,000 in extra budget this year. Three proposals are on the table: (A) Build a new community park with a playground, (B) Hire five more police officers, (C) Repair roads and sidewalks. The town will hold a public hearing. Each citizen can speak for 2 minutes. How do you make your case?"
        },
        {
          id: "social-studies-us-101-l13-c2",
          title: "Gathering Evidence",
          content:
            "Good civic decisions use evidence, not just opinions. For the park proposal: research shows communities with parks have 20% less youth crime. For police: the town's response time is 12 minutes (state average is 8). For roads: 34% of town roads are rated 'poor condition.' Each side has real data to support it."
        },
        {
          id: "social-studies-us-101-l13-c3",
          title: "Making Your Argument",
          content:
            "Structure your 2-minute speech: (1) State your position clearly, (2) Give two specific reasons with evidence, (3) Address one counter-argument, (4) End with a call to action. Example: 'I support road repair because 34% of our roads are in poor condition, which causes $200 per car in annual damage. While the park is important, roads affect every resident daily.'"
        },
        {
          id: "social-studies-us-101-l13-c4",
          title: "How the Vote Works",
          content:
            "In local government, the town council votes after hearing from citizens. A simple majority (more than half) wins. Council members are elected by residents — they represent the community's voice. If you disagree with the outcome, you can attend the next meeting, write to your council member, or vote in the next election. This is democracy in action at the local level."
        }
      ],
      flashcards: [
        { id: "social-studies-us-101-l13-f1", front: "Town council", back: "A group of elected officials who govern a town or city; they pass local laws and set budgets" },
        { id: "social-studies-us-101-l13-f2", front: "Public hearing", back: "A meeting where citizens can speak to government officials about proposed decisions" },
        { id: "social-studies-us-101-l13-f3", front: "Simple majority", back: "More than half of the votes — the threshold for most local government decisions" },
        { id: "social-studies-us-101-l13-f4", front: "Evidence-based argument", back: "A position supported by facts and data, not just personal opinion" }
      ],
      learningAids: [
        { id: "social-studies-us-101-l13-a1", type: "practice", title: "Speech Builder", content: "Write a 2-minute speech for one of the three proposals. Include: position, two evidence-backed reasons, one counter-argument response, and a call to action." }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Civic Action Studio  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l14",
      title: "Civic Action Studio",
      type: "interactive",
      duration: 13,
      objectives: [
        "Identify a community issue and connect it to a level of government",
        "Plan a civic action using the tools of democracy",
        "Evaluate which civic actions are most effective for different issues"
      ],
      metadata: {
        prompts: [
          "Pick one problem in your school or community. Which level of government (local, state, or federal) is responsible for addressing it?",
          "List three actions a citizen could take to help solve this problem.",
          "Which of your three actions would have the biggest impact? Why?"
        ]
      },
      interactiveActivities: [
        {
          id: "social-studies-us-101-l14-ia1",
          type: "sorting_buckets",
          title: "Level of Government Sort",
          description: "Sort each issue to the level of government most responsible for it.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "local", label: "Local Government" },
              { id: "state", label: "State Government" },
              { id: "federal", label: "Federal Government" }
            ],
            items: [
              { id: "i1", label: "A pothole on your street", correctBucketId: "local" },
              { id: "i2", label: "Setting the state minimum wage", correctBucketId: "state" },
              { id: "i3", label: "Declaring war on another country", correctBucketId: "federal" },
              { id: "i4", label: "Funding the local fire department", correctBucketId: "local" },
              { id: "i5", label: "Issuing driver's licenses", correctBucketId: "state" },
              { id: "i6", label: "Printing money and setting interest rates", correctBucketId: "federal" }
            ]
          }
        },
        {
          id: "social-studies-us-101-l14-ia2",
          type: "drag_and_drop",
          title: "Civic Action Plan Builder",
          description: "Drag each civic action to the step where it best fits.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "identify", label: "Step 1: Identify the Problem" },
              { id: "research", label: "Step 2: Research & Gather Evidence" },
              { id: "act", label: "Step 3: Take Action" }
            ],
            draggables: [
              { id: "d1", label: "Notice that the school playground has broken equipment", correctTargetId: "identify" },
              { id: "d2", label: "Find out how much new equipment costs and who approves the budget", correctTargetId: "research" },
              { id: "d3", label: "Write a letter to the school board with a petition signed by students", correctTargetId: "act" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "social-studies-us-101-l14-a1", type: "mnemonic", title: "Government Levels", content: "Local = your town, State = your state's laws, Federal = the whole country." }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint: US Social Studies  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "social-studies-us-101-l15",
      title: "Mastery Sprint: US Social Studies",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "social-studies-us-101-l15-q1",
          text: "The Constitution divides power among three branches to prevent any one branch from becoming too powerful. This principle is called:",
          skillId: "social-studies-us-101-skill-separation",
          options: [
            { id: "a", text: "Federalism" },
            { id: "b", text: "Checks and balances" },
            { id: "c", text: "Popular sovereignty" },
            { id: "d", text: "Judicial review" }
          ],
          correctOptionId: "b",
          explanation: "Checks and balances is the system where each branch can limit the others' powers, preventing any single branch from dominating."
        },
        {
          id: "social-studies-us-101-l15-q2",
          text: "Which amendment abolished slavery in the United States?",
          skillId: "social-studies-us-101-skill-amendments-mastery",
          options: [
            { id: "a", text: "1st Amendment" },
            { id: "b", text: "13th Amendment" },
            { id: "c", text: "19th Amendment" },
            { id: "d", text: "26th Amendment" }
          ],
          correctOptionId: "b",
          explanation: "The 13th Amendment (1865) abolished slavery throughout the United States."
        },
        {
          id: "social-studies-us-101-l15-q3",
          text: "A broken traffic light in your town would be fixed by which level of government?",
          skillId: "social-studies-us-101-skill-levels",
          options: [
            { id: "a", text: "Federal government" },
            { id: "b", text: "State government" },
            { id: "c", text: "Local government" },
            { id: "d", text: "The United Nations" }
          ],
          correctOptionId: "c",
          explanation: "Local government handles town infrastructure like roads, traffic lights, and public utilities."
        },
        {
          id: "social-studies-us-101-l15-q4",
          text: "The Lewis and Clark expedition explored territory gained through which event?",
          skillId: "social-studies-us-101-skill-expansion-mastery",
          options: [
            { id: "a", text: "The Revolutionary War" },
            { id: "b", text: "The Louisiana Purchase" },
            { id: "c", text: "The Civil War" },
            { id: "d", text: "The Gold Rush" }
          ],
          correctOptionId: "b",
          explanation: "President Jefferson sent Lewis and Clark to explore the territory acquired in the Louisiana Purchase (1803) from France."
        },
        {
          id: "social-studies-us-101-l15-q5",
          text: "Which region of the United States includes the Rocky Mountains, Pacific coast, and Silicon Valley?",
          skillId: "social-studies-us-101-skill-regions-mastery",
          options: [
            { id: "a", text: "Midwest" },
            { id: "b", text: "Northeast" },
            { id: "c", text: "Southwest" },
            { id: "d", text: "West" }
          ],
          correctOptionId: "d",
          explanation: "The West region includes the Rocky Mountains, Pacific coast states (California, Oregon, Washington), Alaska, and Hawaii."
        },
        {
          id: "social-studies-us-101-l15-q6",
          text: "A citizen who wants to change a local policy can do all of the following EXCEPT:",
          skillId: "social-studies-us-101-skill-civic-mastery",
          options: [
            { id: "a", text: "Attend a town council meeting" },
            { id: "b", text: "Write a letter to their elected representative" },
            { id: "c", text: "Declare the law unconstitutional on their own" },
            { id: "d", text: "Start a petition and gather signatures" }
          ],
          correctOptionId: "c",
          explanation: "Only the judicial branch (courts) can declare a law unconstitutional. Citizens can attend meetings, contact representatives, and petition — but they cannot independently strike down laws."
        }
      ],
      interactiveActivities: [
        {
          id: "social-studies-us-101-l15-ia1",
          type: "matching_pairs",
          title: "Key Figures and Contributions",
          description: "Match each historical figure to their major contribution.",
          estimatedMinutes: 6,
          difficultyLevel: "hard",
          data: {
            left: [
              { id: "l1", label: "Thomas Jefferson" },
              { id: "l2", label: "George Washington" },
              { id: "l3", label: "Abraham Lincoln" },
              { id: "l4", label: "Benjamin Franklin" }
            ],
            right: [
              { id: "r1", label: "Primary author of the Declaration of Independence" },
              { id: "r2", label: "First President; Commander-in-Chief in the Revolution" },
              { id: "r3", label: "Preserved the Union; issued the Emancipation Proclamation" },
              { id: "r4", label: "Diplomat who secured French support; inventor and printer" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 6,
        totalQuestions: 6,
        timeLimitMinutes: 12,
        questionTypes: [{ type: "mcq_single", count: 6, pointsEach: 1, bloomsLevels: [1, 2, 3, 4] }],
        difficultyDistribution: { easy: 1, medium: 3, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "social-studies-us-101-l15-a1", type: "mnemonic", title: "Key Dates", content: "1607 Jamestown | 1776 Declaration | 1787 Constitution | 1803 Louisiana Purchase | 1861–1865 Civil War" }
      ]
    }
  ]
};
