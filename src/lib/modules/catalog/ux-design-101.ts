import type { LearningModule } from "@/lib/modules/types";

export const UxDesign101Module: LearningModule = {
  id: "ux-design-101",
  title: "UX Design Foundations",
  description:
    "Master the principles of user experience design — from user research and information architecture to wireframing, visual design, usability testing, and iterative refinement using industry-standard methods and tools.",
  subject: "UX Design",
  tags: ["core", "curriculum", "interactive", "design", "human-computer-interaction"],
  minAge: 14,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define user experience and explain the five planes of UX design",
    "Conduct user research using interviews, surveys, and persona creation",
    "Organize content through information architecture and navigation patterns",
    "Build wireframes and interactive prototypes using industry-standard tools",
    "Apply Gestalt principles, typography, and color theory to interface design",
    "Plan and execute usability tests to identify and fix interaction problems",
    "Evaluate designs against Nielsen's heuristics and WCAG accessibility guidelines"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  What is UX? — User-Centered Design Principles  (video)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l01",
      title: "What is UX? User-Centered Design Principles",
      type: "video",
      duration: 12,
      objectives: [
        "Define user experience and distinguish UX from UI",
        "Describe the five planes of UX (strategy, scope, structure, skeleton, surface)",
        "Explain the iterative design thinking process"
      ],
      chunks: [
        {
          id: "ux-design-101-l01-c1",
          title: "Defining User Experience",
          content:
            "User experience (UX) encompasses every aspect of a person's interaction with a product, service, or system. Don Norman, who coined the term at Apple in 1993, defined it as covering 'all aspects of the end-user's interaction with the company, its services, and its products.' UX is not the same as UI (user interface): UI refers to the visual elements — buttons, icons, screens — while UX includes the entire journey: discovering the product, learning it, using it, getting help, and even uninstalling it. Good UX is invisible; users accomplish their goals without friction. Bad UX creates confusion, frustration, and abandonment."
        },
        {
          id: "ux-design-101-l01-c2",
          title: "The Five Planes of UX",
          content:
            "Jesse James Garrett's 'Elements of User Experience' model describes five planes, each building on the one below. (1) Strategy — user needs and business objectives: who are we designing for and why? (2) Scope — features and content requirements: what will the product do? (3) Structure — information architecture and interaction design: how is content organized and how do users move through it? (4) Skeleton — interface layout, navigation, and information design: where do elements appear on screen? (5) Surface — visual design: colors, typography, imagery, and spacing. Designers work from strategy upward, ensuring every visual decision traces back to a real user need."
        },
        {
          id: "ux-design-101-l01-c3",
          title: "Design Thinking Process",
          content:
            "Design thinking, popularized by Stanford's d.school and IDEO, is an iterative, human-centered problem-solving framework with five phases. (1) Empathize — observe and interview users to understand their pain points and motivations. (2) Define — synthesize research into a clear problem statement (e.g., 'New parents need a way to track feeding schedules because they are sleep-deprived and forget details'). (3) Ideate — brainstorm many possible solutions without judgment. (4) Prototype — build low-fidelity representations to test ideas quickly. (5) Test — put prototypes in front of real users and learn from their behavior. The process is non-linear: insights from testing often loop back to empathizing or redefining the problem."
        }
      ],
      flashcards: [
        { id: "ux-design-101-l01-f1", front: "User Experience (UX)", back: "The total experience a person has when interacting with a product — covers usability, accessibility, performance, aesthetics, and emotional response" },
        { id: "ux-design-101-l01-f2", front: "UX vs. UI", back: "UX: the entire user journey and how a product feels. UI: the visual and interactive elements (buttons, layouts, icons) the user directly interacts with" },
        { id: "ux-design-101-l01-f3", front: "Five planes of UX (Garrett)", back: "Strategy → Scope → Structure → Skeleton → Surface — moving from abstract user needs to concrete visual design" },
        { id: "ux-design-101-l01-f4", front: "Design thinking phases", back: "Empathize → Define → Ideate → Prototype → Test — an iterative, human-centered problem-solving framework" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  User Research & Personas  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l02",
      title: "User Research and Personas",
      type: "interactive",
      duration: 14,
      objectives: [
        "Distinguish qualitative and quantitative research methods",
        "Conduct user interviews and create empathy maps",
        "Build research-backed personas with goals, frustrations, and scenarios"
      ],
      chunks: [
        {
          id: "ux-design-101-l02-c1",
          title: "Qualitative vs. Quantitative Research",
          content:
            "UX research falls into two broad categories. Qualitative research explores the 'why' behind user behavior through methods like interviews, contextual inquiry (observing users in their natural environment), diary studies, and think-aloud usability sessions. It produces rich narratives but small sample sizes. Quantitative research measures the 'what' and 'how much' through surveys, analytics, A/B tests, and task-completion metrics. It yields statistically significant data but may miss underlying motivations. Strong UX research combines both: qualitative insights generate hypotheses, quantitative data validates them at scale."
        },
        {
          id: "ux-design-101-l02-c2",
          title: "User Interviews and Empathy Maps",
          content:
            "User interviews are semi-structured conversations designed to uncover needs, behaviors, and pain points. Best practices include: ask open-ended questions ('Tell me about the last time you…'), avoid leading questions ('Don't you think the button should be bigger?'), probe deeper with 'Why?' and 'Can you show me?', and listen more than talk. After interviews, teams synthesize findings using empathy maps — a quadrant diagram capturing what users Say, Think, Do, and Feel. Empathy maps make abstract research tangible and help the entire team align on user perspectives before designing solutions."
        },
        {
          id: "ux-design-101-l02-c3",
          title: "Building Personas",
          content:
            "A persona is a fictional but research-grounded archetype representing a key user segment. A strong persona includes: a name and photo (for memorability), demographics, goals (what they want to achieve), frustrations (what blocks them), a scenario (a narrative of how they use the product), and a quote capturing their attitude. Alan Cooper, who popularized personas in 'About Face' (1999), warned against 'elastic users' — vague audiences like 'everyone.' Personas force specificity: designing for 'Maria, a 34-year-old nurse who checks patient records on a tablet between rounds' yields better decisions than designing for 'healthcare workers.'"
        }
      ],
      interactiveActivities: [
        {
          id: "ux-design-101-l02-a1",
          title: "Match Research Method to Purpose",
          type: "matching_pairs",
          pairs: [
            { left: "User interview", right: "Explore motivations and pain points (qualitative)" },
            { left: "A/B test", right: "Compare two design variants with statistical significance (quantitative)" },
            { left: "Contextual inquiry", right: "Observe users in their natural environment (qualitative)" },
            { left: "Survey", right: "Gather structured data from a large sample (quantitative)" },
            { left: "Card sorting", right: "Discover how users categorize and label information" },
            { left: "Diary study", right: "Capture user behavior over time in context (qualitative)" }
          ]
        }
      ],
      flashcards: [
        { id: "ux-design-101-l02-f1", front: "Qualitative research", back: "Explores the 'why' through interviews, observation, and think-alouds — rich insights, small samples" },
        { id: "ux-design-101-l02-f2", front: "Empathy map", back: "A quadrant diagram capturing what users Say, Think, Do, and Feel — synthesizes interview data into shared team understanding" },
        { id: "ux-design-101-l02-f3", front: "Persona", back: "A fictional, research-backed archetype representing a user segment — includes goals, frustrations, scenarios, and a humanizing name/photo" },
        { id: "ux-design-101-l02-f4", front: "Contextual inquiry", back: "A qualitative method where the researcher observes and interviews users in their natural work or life environment" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Research & Foundations Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l03",
      title: "Research & Foundations Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate understanding of UX fundamentals, research methods, and persona creation"],
      questions: [
        {
          id: "ux-design-101-l03-q1",
          text: "Which of the following best distinguishes UX from UI?",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "UX covers the entire user journey; UI focuses on visual and interactive elements" },
            { id: "b", text: "UX and UI are exactly the same discipline" },
            { id: "c", text: "UI includes user research; UX does not" },
            { id: "d", text: "UX only applies to mobile apps" }
          ],
          correctOptionId: "a",
          explanation: "UX encompasses the full experience (usability, accessibility, emotions), while UI refers specifically to the visual layer users interact with."
        },
        {
          id: "ux-design-101-l03-q2",
          text: "In Garrett's five planes model, which plane deals with organizing content and defining user flows?",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Surface" },
            { id: "b", text: "Strategy" },
            { id: "c", text: "Structure" },
            { id: "d", text: "Scope" }
          ],
          correctOptionId: "c",
          explanation: "The Structure plane handles information architecture and interaction design — how content is organized and how users navigate through it."
        },
        {
          id: "ux-design-101-l03-q3",
          text: "A persona should be based on:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "The designer's assumptions about users" },
            { id: "b", text: "Real research data including interviews and observations" },
            { id: "c", text: "Demographic data only" },
            { id: "d", text: "Competitor product reviews" }
          ],
          correctOptionId: "b",
          explanation: "Personas must be grounded in real research — interviews, observations, and data — not assumptions, to accurately represent user needs."
        },
        {
          id: "ux-design-101-l03-q4",
          text: "The design thinking process is best described as:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "A strictly linear, one-pass process" },
            { id: "b", text: "An iterative cycle of empathize, define, ideate, prototype, and test" },
            { id: "c", text: "A process that skips user research to save time" },
            { id: "d", text: "Only applicable to physical product design" }
          ],
          correctOptionId: "b",
          explanation: "Design thinking is iterative and non-linear — insights from testing often cycle back to earlier phases like empathizing or redefining the problem."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Information Architecture & Navigation  (video)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l04",
      title: "Information Architecture and Navigation",
      type: "video",
      duration: 13,
      objectives: [
        "Define information architecture and its role in UX",
        "Apply card sorting and tree testing to validate IA decisions",
        "Distinguish common navigation patterns and when to use each"
      ],
      chunks: [
        {
          id: "ux-design-101-l04-c1",
          title: "What is Information Architecture?",
          content:
            "Information architecture (IA) is the practice of organizing, structuring, and labeling content so users can find what they need and complete tasks efficiently. Richard Saul Wurman coined the term in 1975, and Peter Morville and Louis Rosenfeld formalized it for the web. IA operates at the intersection of users (their mental models and information needs), content (volume, format, structure), and context (business goals, constraints, technology). A poor IA forces users to think about where things are instead of what they want to do — violating Steve Krug's first law of usability: 'Don't make me think.'"
        },
        {
          id: "ux-design-101-l04-c2",
          title: "Card Sorting and Tree Testing",
          content:
            "Card sorting is a participatory method where users organize content into groups that make sense to them. In an open card sort, participants create and name their own categories; in a closed card sort, categories are predefined and participants place items into them. Results reveal users' mental models and suggest navigation structures. Tree testing (reverse card sorting) validates a proposed IA: participants are given tasks ('Find the return policy') and navigate a text-only hierarchy without visual design cues. High task-completion rates and direct navigation paths confirm the IA works; low rates signal restructuring is needed."
        },
        {
          id: "ux-design-101-l04-c3",
          title: "Navigation Patterns",
          content:
            "Effective navigation helps users understand where they are, where they can go, and how to get back. Common patterns include: global navigation (persistent top or side bar with primary sections), local navigation (sub-menus within a section), breadcrumbs (a trail showing the user's path from the homepage), faceted navigation (filters for large datasets, e.g., e-commerce), and hamburger menus (a three-line icon hiding navigation on mobile — convenient but reduces discoverability). The choice depends on content depth, user goals, and device constraints. Jakob Nielsen's research shows users prefer visible navigation; hidden menus increase interaction cost."
        }
      ],
      flashcards: [
        { id: "ux-design-101-l04-f1", front: "Information architecture (IA)", back: "The practice of organizing, structuring, and labeling content so users can find information and complete tasks — operates at the intersection of users, content, and context" },
        { id: "ux-design-101-l04-f2", front: "Card sorting", back: "A method where users group content into categories — open sort (users create categories) or closed sort (predefined categories) — reveals mental models" },
        { id: "ux-design-101-l04-f3", front: "Tree testing", back: "A method to validate IA by asking users to find items in a text-only hierarchy — measures findability without visual design cues" },
        { id: "ux-design-101-l04-f4", front: "Breadcrumb navigation", back: "A secondary navigation trail showing the user's current location within the site hierarchy — supports orientation and backtracking" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Wireframing & Prototyping  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l05",
      title: "Wireframing and Prototyping",
      type: "interactive",
      duration: 14,
      objectives: [
        "Differentiate low-fidelity, mid-fidelity, and high-fidelity prototypes",
        "Construct wireframes that prioritize content hierarchy and user flows",
        "Use prototyping tools like Figma to create clickable interactive mockups"
      ],
      chunks: [
        {
          id: "ux-design-101-l05-c1",
          title: "From Sketches to Wireframes",
          content:
            "Wireframes are skeletal blueprints of a screen's layout — they show what elements appear, their relative size, and their hierarchy, without color, typography, or imagery details. Low-fidelity wireframes are quick paper sketches or whiteboard drawings used to explore ideas in minutes; they are intentionally rough to encourage feedback without attachment. Mid-fidelity wireframes (in tools like Figma, Sketch, or Balsamiq) add more precise spacing and placeholder content. Wireframes answer the question 'What goes where?' before anyone debates fonts or button colors, saving teams from costly late-stage redesigns."
        },
        {
          id: "ux-design-101-l05-c2",
          title: "Prototyping Fidelity Spectrum",
          content:
            "Prototypes simulate the user experience at varying levels of fidelity. Low-fidelity prototypes (paper cutouts, sticky notes on a wall) are fast — a team can build and test one in an afternoon. Mid-fidelity prototypes (clickable wireframes in Figma or Adobe XD) add navigation flows and basic interactivity. High-fidelity prototypes closely resemble the final product with real content, brand colors, micro-interactions, and transitions. Fidelity should match the question you're answering: use low-fi to validate concepts, mid-fi to test flows, and high-fi to refine visual polish and developer hand-off. Fitts's Law (the time to reach a target depends on distance and target size) becomes testable once interactive prototypes are built."
        },
        {
          id: "ux-design-101-l05-c3",
          title: "Prototyping in Figma",
          content:
            "Figma is a browser-based collaborative design tool that has become the industry standard for UX/UI design. Key prototyping features include: frames (artboards representing screens), components (reusable elements like buttons and cards that sync changes across a file), auto-layout (responsive spacing and alignment), interactive connections (linking frames with click, hover, or drag triggers), and smart animate (smoothly transitioning between frame states). Designers typically create a component library (design system) first, then compose screens from these components, and finally wire screens together into a clickable prototype for usability testing — all within a single collaborative file."
        }
      ],
      interactiveActivities: [
        {
          id: "ux-design-101-l05-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Low Fidelity", "Mid Fidelity", "High Fidelity"],
          items: [
            { text: "Paper sketch on a napkin", bucket: "Low Fidelity" },
            { text: "Clickable Figma wireframe with placeholder text", bucket: "Mid Fidelity" },
            { text: "Fully styled prototype with micro-interactions and real content", bucket: "High Fidelity" },
            { text: "Sticky notes on a whiteboard representing screens", bucket: "Low Fidelity" },
            { text: "Balsamiq mockup with gray-box layouts", bucket: "Mid Fidelity" },
            { text: "Figma prototype with brand colors, animations, and developer specs", bucket: "High Fidelity" }
          ]
        }
      ],
      flashcards: [
        { id: "ux-design-101-l05-f1", front: "Wireframe", back: "A skeletal layout showing element placement and hierarchy without visual design details — answers 'What goes where?'" },
        { id: "ux-design-101-l05-f2", front: "Fitts's Law", back: "The time to acquire a target is a function of distance to and size of the target — larger, closer buttons are faster to click" },
        { id: "ux-design-101-l05-f3", front: "Figma components", back: "Reusable design elements (buttons, cards, icons) that sync changes across a file — the building blocks of a design system" },
        { id: "ux-design-101-l05-f4", front: "Prototype fidelity spectrum", back: "Low-fi (paper sketches) → Mid-fi (clickable wireframes) → High-fi (polished, near-final mockups) — match fidelity to the question being tested" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  IA & Prototyping Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l06",
      title: "IA & Prototyping Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of information architecture, wireframing, and prototyping methods"],
      questions: [
        {
          id: "ux-design-101-l06-q1",
          text: "What does an open card sort reveal?",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "How quickly users can click a button" },
            { id: "b", text: "How users naturally group and label content categories" },
            { id: "c", text: "The visual appeal of a design" },
            { id: "d", text: "The server response time of a website" }
          ],
          correctOptionId: "b",
          explanation: "In an open card sort, participants create their own groups and labels, revealing their mental models for organizing content."
        },
        {
          id: "ux-design-101-l06-q2",
          text: "Fitts's Law states that the time to reach a target depends on:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "The color contrast of the target" },
            { id: "b", text: "The distance to the target and the size of the target" },
            { id: "c", text: "The number of items on the page" },
            { id: "d", text: "The user's internet connection speed" }
          ],
          correctOptionId: "b",
          explanation: "Fitts's Law predicts that larger, closer targets are acquired faster — a fundamental principle for sizing and placing interactive elements."
        },
        {
          id: "ux-design-101-l06-q3",
          text: "When should a designer use a low-fidelity prototype?",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Only after the product is launched" },
            { id: "b", text: "To validate early concepts quickly before investing in detailed design" },
            { id: "c", text: "To test micro-interactions and animations" },
            { id: "d", text: "To hand off final specs to developers" }
          ],
          correctOptionId: "b",
          explanation: "Low-fi prototypes are fast and cheap — ideal for exploring and validating concepts early before committing to detailed design work."
        },
        {
          id: "ux-design-101-l06-q4",
          text: "Tree testing validates information architecture by asking users to:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Rate the visual design of each page" },
            { id: "b", text: "Find items in a text-only hierarchy without visual design cues" },
            { id: "c", text: "Sort cards into groups they define" },
            { id: "d", text: "Complete a survey about their demographics" }
          ],
          correctOptionId: "b",
          explanation: "Tree testing removes visual design distractions — users navigate a text-only tree to find information, isolating IA effectiveness."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Visual Design & Interaction Design Principles  (video)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l07",
      title: "Visual Design and Interaction Design Principles",
      type: "video",
      duration: 13,
      objectives: [
        "Apply Gestalt principles of perception to interface layout",
        "Use Nielsen's 10 usability heuristics to evaluate designs",
        "Incorporate accessibility standards (WCAG) into design decisions"
      ],
      chunks: [
        {
          id: "ux-design-101-l07-c1",
          title: "Gestalt Principles in UI Design",
          content:
            "Gestalt psychology explains how the human brain organizes visual information into meaningful patterns. Key principles for designers include: Proximity — elements close together are perceived as a group (form fields with their labels). Similarity — elements sharing visual traits (color, shape, size) appear related (all clickable links in blue). Continuity — the eye follows smooth lines and curves (progress bars, aligned navigation items). Closure — the brain completes incomplete shapes (logos with gaps still read as whole forms). Figure-ground — users distinguish a foreground object from its background (modal dialogs over dimmed pages). Applying these principles creates interfaces that feel intuitive because they align with how the brain naturally perceives structure."
        },
        {
          id: "ux-design-101-l07-c2",
          title: "Nielsen's 10 Usability Heuristics",
          content:
            "Jakob Nielsen's heuristics are broad rules for evaluating interaction design. (1) Visibility of system status — always inform users about what is happening (loading spinners, progress bars). (2) Match between system and real world — use familiar language and concepts, not technical jargon. (3) User control and freedom — provide undo, redo, and clear exit paths. (4) Consistency and standards — follow platform conventions so users don't wonder whether different words or actions mean the same thing. (5) Error prevention — design to prevent errors before they occur (confirmation dialogs, inline validation). (6) Recognition rather than recall — show options instead of forcing users to remember them. (7) Flexibility and efficiency — offer shortcuts for expert users. (8) Aesthetic and minimalist design — remove unnecessary elements. (9) Help users recognize, diagnose, and recover from errors — write clear, actionable error messages. (10) Help and documentation — provide searchable, task-oriented help when needed."
        },
        {
          id: "ux-design-101-l07-c3",
          title: "Accessibility and WCAG",
          content:
            "Accessibility ensures products are usable by people with diverse abilities, including those with visual, auditory, motor, and cognitive impairments. The Web Content Accessibility Guidelines (WCAG 2.1) are organized around four principles (POUR): Perceivable — content must be presentable in ways users can perceive (alt text for images, captions for video). Operable — interface elements must be usable via keyboard, voice, or assistive technology (no mouse-only interactions). Understandable — content and navigation must be predictable and readable (clear labels, consistent behavior). Robust — content must work with current and future assistive technologies (semantic HTML, ARIA roles). WCAG defines three conformance levels: A (minimum), AA (recommended for most sites — includes 4.5:1 color contrast ratio for normal text), and AAA (highest). Designing for accessibility benefits everyone — curb cuts, originally for wheelchair users, help parents with strollers, travelers with luggage, and delivery workers with carts."
        }
      ],
      flashcards: [
        { id: "ux-design-101-l07-f1", front: "Gestalt principle of Proximity", back: "Elements placed close together are perceived as a group — used to associate labels with form fields, group related actions, and create visual sections" },
        { id: "ux-design-101-l07-f2", front: "Nielsen's heuristic: Visibility of system status", back: "The system should always keep users informed about what is happening through timely feedback — e.g., loading indicators, progress bars, confirmation messages" },
        { id: "ux-design-101-l07-f3", front: "WCAG POUR principles", back: "Perceivable, Operable, Understandable, Robust — the four foundational principles of web accessibility guidelines" },
        { id: "ux-design-101-l07-f4", front: "WCAG AA contrast ratio", back: "Normal text requires a minimum 4.5:1 contrast ratio against its background; large text requires 3:1 — ensures readability for low-vision users" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Usability Testing & Iteration  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l08",
      title: "Usability Testing and Iteration",
      type: "interactive",
      duration: 14,
      objectives: [
        "Plan and conduct a moderated usability test with 5 participants",
        "Analyze test results using task success rate, time-on-task, and error rate",
        "Apply cognitive load theory to simplify complex interfaces"
      ],
      chunks: [
        {
          id: "ux-design-101-l08-c1",
          title: "Planning a Usability Test",
          content:
            "A usability test puts a real product (or prototype) in front of real users and observes how they perform specific tasks. Jakob Nielsen's research demonstrated that testing with just 5 participants uncovers approximately 85% of usability problems — making it a high-impact, low-cost method. Planning requires: (1) defining objectives (what questions do we want answered?), (2) recruiting representative participants matching your persona profiles, (3) writing realistic task scenarios ('You need to return a pair of shoes you bought last week — find the return process'), (4) preparing a test script with consistent instructions for all sessions, and (5) choosing a format: moderated (a facilitator guides the session) or unmoderated (participants complete tasks remotely using tools like Maze or UserTesting.com)."
        },
        {
          id: "ux-design-101-l08-c2",
          title: "Metrics and Analysis",
          content:
            "Usability testing produces both quantitative and qualitative data. Key metrics include: task success rate (percentage of participants who complete a task), time-on-task (how long each task takes — longer usually means harder), error rate (wrong clicks, misnavigation, backtracking), and System Usability Scale (SUS) — a 10-question post-test questionnaire yielding a score from 0–100 (above 68 is above average). Beyond metrics, observing user behavior reveals issues numbers miss: hesitation, confusion expressions, reading patterns, and workaround strategies. Affinity diagramming groups observations into themes, helping teams prioritize fixes by severity and frequency."
        },
        {
          id: "ux-design-101-l08-c3",
          title: "Cognitive Load and Iterative Improvement",
          content:
            "Cognitive load theory (John Sweller, 1988) explains that working memory is limited — people can hold roughly 4 ± 1 chunks of information simultaneously. Interfaces that overload working memory cause errors and frustration. Strategies to reduce cognitive load: progressive disclosure (show only what's needed now, reveal more on demand), chunking (group related items — phone numbers as 555-867-5309 instead of 5558675309), consistent patterns (same actions work the same way everywhere), and eliminating unnecessary choices (Hick's Law: decision time increases with the number of options). After usability testing identifies problems, designers iterate: fix the highest-severity issues, re-test with a new set of participants, and repeat. Each cycle narrows the gap between the current design and the user's mental model."
        }
      ],
      interactiveActivities: [
        {
          id: "ux-design-101-l08-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Quantitative Metric", "Qualitative Observation"],
          items: [
            { text: "Task success rate of 78%", bucket: "Quantitative Metric" },
            { text: "User hesitated before clicking the submit button", bucket: "Qualitative Observation" },
            { text: "Average time-on-task: 45 seconds", bucket: "Quantitative Metric" },
            { text: "Participant said: 'I'm not sure what this icon means'", bucket: "Qualitative Observation" },
            { text: "SUS score of 72", bucket: "Quantitative Metric" },
            { text: "Three participants used the back button to recover from errors", bucket: "Qualitative Observation" },
            { text: "Error rate: 2.3 wrong clicks per task", bucket: "Quantitative Metric" },
            { text: "User squinted trying to read the small gray text", bucket: "Qualitative Observation" }
          ]
        }
      ],
      flashcards: [
        { id: "ux-design-101-l08-f1", front: "Nielsen's 5-user rule", back: "Testing with 5 participants uncovers ~85% of usability problems — a high-impact, low-cost method for finding design issues" },
        { id: "ux-design-101-l08-f2", front: "System Usability Scale (SUS)", back: "A 10-question post-test questionnaire yielding a score from 0–100 — scores above 68 are considered above average usability" },
        { id: "ux-design-101-l08-f3", front: "Cognitive load theory", back: "Working memory holds ~4±1 chunks simultaneously — interfaces should minimize extraneous load through progressive disclosure, chunking, and consistency" },
        { id: "ux-design-101-l08-f4", front: "Hick's Law", back: "Decision time increases logarithmically with the number of options — reduce choices to speed user decisions and lower cognitive load" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Visual Design & Testing Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l09",
      title: "Visual Design & Testing Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of visual design principles, accessibility, and usability testing"],
      questions: [
        {
          id: "ux-design-101-l09-q1",
          text: "The Gestalt principle of Similarity predicts that users will:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Perceive elements with shared visual traits (color, shape) as related" },
            { id: "b", text: "Always read text from right to left" },
            { id: "c", text: "Ignore all visual grouping cues" },
            { id: "d", text: "Prefer larger screens over smaller ones" }
          ],
          correctOptionId: "a",
          explanation: "Similarity means elements sharing visual attributes (color, shape, size) are perceived as belonging to the same group or having the same function."
        },
        {
          id: "ux-design-101-l09-q2",
          text: "According to WCAG AA, the minimum contrast ratio for normal body text is:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "2:1" },
            { id: "b", text: "3:1" },
            { id: "c", text: "4.5:1" },
            { id: "d", text: "7:1" }
          ],
          correctOptionId: "c",
          explanation: "WCAG AA requires 4.5:1 contrast for normal text (3:1 for large text). Level AAA requires 7:1 for normal text."
        },
        {
          id: "ux-design-101-l09-q3",
          text: "How many participants does Nielsen recommend for a usability test to find most problems?",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "1" },
            { id: "b", text: "5" },
            { id: "c", text: "50" },
            { id: "d", text: "100" }
          ],
          correctOptionId: "b",
          explanation: "Nielsen's research shows 5 participants uncover approximately 85% of usability issues — testing more yields diminishing returns."
        },
        {
          id: "ux-design-101-l09-q4",
          text: "Hick's Law implies that a designer should:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Add as many options as possible to give users freedom" },
            { id: "b", text: "Reduce the number of choices to speed up decision-making" },
            { id: "c", text: "Use only one color throughout the interface" },
            { id: "d", text: "Remove all navigation labels" }
          ],
          correctOptionId: "b",
          explanation: "Hick's Law states decision time increases logarithmically with choices — fewer, well-organized options lead to faster, more confident user decisions."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: UX Design Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "ux-design-101-l10",
      title: "Mastery Quiz: UX Design Foundations",
      type: "quiz",
      duration: 12,
      objectives: ["Synthesize all UX design foundations concepts"],
      questions: [
        {
          id: "ux-design-101-l10-q1",
          text: "A designer discovers during usability testing that users cannot find the checkout button. Which Nielsen heuristic is most likely violated?",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Aesthetic and minimalist design" },
            { id: "b", text: "Visibility of system status" },
            { id: "c", text: "Recognition rather than recall" },
            { id: "d", text: "Help and documentation" }
          ],
          correctOptionId: "c",
          explanation: "If users can't find the checkout button, key actions are not visible — forcing recall instead of recognition. The interface should make important options visible and recognizable."
        },
        {
          id: "ux-design-101-l10-q2",
          text: "A mobile app presents 12 equally weighted action buttons on a single screen. Users report feeling overwhelmed. Which principles explain the problem?",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Hick's Law and cognitive load theory" },
            { id: "b", text: "Fitts's Law and color theory" },
            { id: "c", text: "Card sorting and tree testing" },
            { id: "d", text: "Gestalt closure and figure-ground" }
          ],
          correctOptionId: "a",
          explanation: "Hick's Law (decision time increases with options) and cognitive load theory (working memory is limited) both predict that too many equal-weight choices cause decision paralysis."
        },
        {
          id: "ux-design-101-l10-q3",
          text: "After conducting an open card sort, a UX designer should:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "Immediately begin visual design" },
            { id: "b", text: "Analyze how participants grouped items and use the patterns to inform the site's information architecture" },
            { id: "c", text: "Discard the results because users don't understand IA" },
            { id: "d", text: "Run an A/B test on color schemes" }
          ],
          correctOptionId: "b",
          explanation: "Card sort results reveal users' mental models — the groupings and labels they create inform navigation structure and category naming for the IA."
        },
        {
          id: "ux-design-101-l10-q4",
          text: "The WCAG 'Operable' principle ensures that:",
          skillId: "ux-design-101-skill-core",
          options: [
            { id: "a", text: "All images have alternative text" },
            { id: "b", text: "Interface elements can be used via keyboard, voice, or assistive technology — not just mouse" },
            { id: "c", text: "Content is available in multiple languages" },
            { id: "d", text: "The website loads in under 3 seconds" }
          ],
          correctOptionId: "b",
          explanation: "Operable means all functionality is available via keyboard and assistive technologies — ensuring users with motor impairments can interact with every element."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
