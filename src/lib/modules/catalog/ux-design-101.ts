import type { LearningModule } from "@/lib/modules/types";

export const UxDesign101Module: LearningModule = {
  "id": "ux-design-101",
  "title": "UX Design Foundations",
  "description": "Master the principles of user experience design — from user research and information architecture to wireframing, visual design, usability testing, and iterative refinement using industry-standard methods and tools.",
  "subject": "UX Design",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "design",
    "human-computer-interaction"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define user experience and explain the five planes of UX design",
    "Conduct user research using interviews, surveys, and persona creation",
    "Organize content through information architecture and navigation patterns",
    "Build wireframes and interactive prototypes using industry-standard tools",
    "Apply Gestalt principles, typography, and color theory to interface design",
    "Plan and execute usability tests to identify and fix interaction problems",
    "Evaluate designs against Nielsen's heuristics and WCAG accessibility guidelines"
  ],
  "lessons": [
    {
      "id": "ux-design-101-l01",
      "title": "What is UX? User-Centered Design Principles",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define user experience and distinguish UX from UI",
        "Describe the five planes of UX (strategy, scope, structure, skeleton, surface)",
        "Explain the iterative design thinking process"
      ],
      "chunks": [
        {
          "id": "ux-design-101-l01-c1",
          "title": "Defining User Experience",
          "content": "User experience, commonly known as UX, is a crucial concept that focuses on how people feel when they interact with a product, service, or system. The term was first introduced by Don Norman at Apple in 1993, and he described it as encompassing every part of a person's experience with a company, its services, and its products. Understanding UX is essential because it directly impacts how users perceive and engage with what they are using.\nIt's important to differentiate between UX and UI, which stands for user interface. While UI is all about the visual elements that users see and interact with—like buttons, icons, and screens—UX is much broader. It includes the entire journey that a user takes when they engage with a product. This journey starts from the moment they discover the product, continues as they learn how to use it, and includes seeking help when they encounter issues. It even covers the decision-making process when a user chooses to stop using the product.\nGood UX is designed to be seamless and intuitive, allowing users to accomplish their goals easily and without any obstacles. When users have a positive experience, they are more likely to continue using the product and recommend it to others. Conversely, poor UX can lead to confusion and frustration, causing users to abandon the product altogether. Therefore, creating a great user experience is essential for the success of any product or service, as it helps build trust and satisfaction among users.\nContext recap: User experience, commonly known as UX, is a crucial concept that focuses on how people feel when they interact with a product, service, or system. The term was first introduced by Don Norman at Apple in 1993, and he described it as encompassing every part of a person's experience with a company, its services, and its products. Understanding UX is essential because it directly impacts how users perceive and engage with what they are using. It's important to differentiate between UX and UI, which stands for user interface."
        },
        {
          "id": "ux-design-101-l01-c2",
          "title": "The Five Planes of UX",
          "content": "Jesse James Garrett developed a useful model called 'Elements of User Experience' that helps us understand the different layers involved in creating a great user experience. This model consists of five important planes, each one building on the one below it, like a pyramid. Let's explore each of these planes in detail:\n1. **Strategy**: This is the foundation of our design process. Here, we focus on understanding who our users are and what their needs are. We ask ourselves questions like, 'What problems are we trying to solve for them?' and 'What goals do we want to achieve with our product?' This helps us ensure that our design is purposeful and user-centered.\n2. **Scope**: Once we have a clear strategy, we move on to defining the scope of our project. This means identifying the features and content that our product will include. We need to think about what functionalities are essential for our users and how we can best present the information they need.\n3. **Structure**: The next plane is all about organizing the information and designing how users will interact with it. This involves creating a clear information architecture, which is like a blueprint for how everything fits together. We consider how users will navigate through the product and how they will find the information they are looking for.\n4. **Skeleton**: Now that we have a solid structure, we can focus on the skeleton of our design. This includes the layout of the interface, such as where buttons, menus, and other elements will be placed on the screen. A well-organized skeleton helps users understand how to use the product easily.\n5. **Surface**: Finally, we reach the surface plane, which is all about the visual design. This is where we choose colors, fonts, images, and spacing to create an appealing look for our product. Good visual design enhances the user experience and makes the product more enjoyable to use.\nDesigners start with the Strategy plane and work their way up through each layer, ensuring that every design choice is connected to a real user need. By following this model, we can create products that are not only functional but also delightful for users to interact with.\nContext recap: Jesse James Garrett developed a useful model called 'Elements of User Experience' that helps us understand the different layers involved in creating a great user experience. This model consists of five important planes, each one building on the one below it, like a pyramid. Let's explore each of these planes in detail:\n1. **Strategy**: This is the foundation of our design process.\nWhy this matters: The Five Planes of UX helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l01-c3",
          "title": "Design Thinking Process",
          "content": "Design thinking is an exciting and creative way to solve problems by really understanding what people need. This approach became well-known thanks to Stanford's d.school and a company called IDEO. The design thinking process consists of five important steps that help us create better solutions.\nThe first step is called Empathize. In this phase, we take the time to observe and talk to users. This helps us learn about their challenges and what drives them. For instance, if we are designing for new parents, we might find out that they struggle to remember feeding schedules because they are often very tired and forgetful.\nNext, we move to the Define step. Here, we gather all the information we've collected and create a clear statement about the problem we want to solve. For example, we could say, 'New parents need a way to keep track of feeding schedules because they often forget important details due to lack of sleep.' This statement helps us focus on what we need to address.\nThe third step is Ideate. During this phase, we brainstorm a lot of different ideas for solutions without judging them. The goal is to think freely and creatively, allowing all kinds of ideas to flow.\nAfter brainstorming, we reach the Prototype step. In this phase, we create simple models or representations of our ideas. These prototypes don’t have to be perfect; they just need to be good enough to test our concepts quickly.\nFinally, we arrive at the Test step. Here, we present our prototypes to real users and observe how they interact with them. This feedback is crucial because it helps us learn what works and what doesn’t.\nIt's important to remember that the design thinking process is not always a straight line. Sometimes, insights we gain from testing can lead us back to the Empathize or Define steps. This allows us to refine our understanding of the problem and improve our solutions even further. By following these steps, we can create designs that truly meet the needs of users, making their lives easier and more enjoyable.\nContext recap: Design thinking is an exciting and creative way to solve problems by really understanding what people need. This approach became well-known thanks to Stanford's d.school and a company called IDEO. The design thinking process consists of five important steps that help us create better solutions. The first step is called Empathize.\nWhy this matters: Design Thinking Process helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-101-l01-f1",
          "front": "User Experience (UX)",
          "back": "The total experience a person has when interacting with a product — covers usability, accessibility, performance, aesthetics, and emotional response"
        },
        {
          "id": "ux-design-101-l01-f2",
          "front": "UX vs. UI",
          "back": "UX: the entire user journey and how a product feels. UI: the visual and interactive elements (buttons, layouts, icons) the user directly interacts with"
        },
        {
          "id": "ux-design-101-l01-f3",
          "front": "Five planes of UX (Garrett)",
          "back": "Strategy → Scope → Structure → Skeleton → Surface — moving from abstract user needs to concrete visual design"
        },
        {
          "id": "ux-design-101-l01-f4",
          "front": "Design thinking phases",
          "back": "Empathize → Define → Ideate → Prototype → Test — an iterative, human-centered problem-solving framework"
        }
      ],
      "learningAids": [
        {
          "id": "ux-design-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "ux-design-101-l02",
      "title": "User Research and Personas",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Distinguish qualitative and quantitative research methods",
        "Conduct user interviews and create empathy maps",
        "Build research-backed personas with goals, frustrations, and scenarios"
      ],
      "chunks": [
        {
          "id": "ux-design-101-l02-c1",
          "title": "Qualitative vs. Quantitative Research",
          "content": "When we explore UX research, we typically focus on two main types: qualitative and quantitative research. Qualitative research is all about understanding the 'why' behind how users behave. We can gather this valuable information through various methods. For instance, in interviews, we talk directly to users to hear their thoughts and feelings. Another method is contextual inquiry, where we observe users in their everyday environments to see how they interact with products naturally. We also use diary studies, where users write down their experiences over time, and think-aloud sessions, where users share their thoughts while using a product. While qualitative research gives us rich stories and deep insights, it usually involves smaller groups of people, which means we get detailed information but from fewer individuals. On the flip side, quantitative research focuses on the 'what' and 'how much.' This type of research uses tools like surveys, analytics, A/B testing, and metrics to gather data that can be analyzed statistically. Although quantitative research provides broader insights and can include many participants, it might not capture the deeper motivations behind user actions. The best approach in UX research combines both types: qualitative insights can help us form hypotheses about user behavior, while quantitative data can confirm those ideas on a larger scale, giving us a well-rounded understanding of our users.\nContext recap: When we explore UX research, we typically focus on two main types: qualitative and quantitative research. Qualitative research is all about understanding the 'why' behind how users behave. We can gather this valuable information through various methods. For instance, in interviews, we talk directly to users to hear their thoughts and feelings.\nWhy this matters: Qualitative vs. Quantitative Research helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l02-c2",
          "title": "User Interviews and Empathy Maps",
          "content": "User interviews are special conversations that help us understand what users really need, how they behave, and the challenges they face. To make these interviews effective, we should follow some important guidelines. First, we want to ask open-ended questions, which are questions that can't be answered with just a 'yes' or 'no.' For example, we might ask, 'Can you tell me about the last time you used this product?' This type of question encourages users to share their experiences in detail, giving us valuable insights.\nIt's also important to avoid leading questions. These are questions that suggest a certain answer, like 'Don't you think the button should be bigger?' Such questions can influence how users respond, which is not what we want. Instead, we can ask follow-up questions that dig deeper, such as 'Why do you feel that way?' or 'Can you show me what you mean?' This helps us get a clearer picture of their thoughts and feelings. Listening is a crucial part of the interview process; we should aim to listen more than we talk. This way, we can truly understand the user's perspective.\nAfter we finish the interviews, our team can organize what we've learned using empathy maps. These maps are visual tools that help us capture what users say, think, do, and feel. By using empathy maps, we can make our research findings more concrete and relatable. They help ensure that everyone on the team understands the user's perspective before we start designing solutions. This alignment is essential for creating products that truly meet user needs and enhance their experiences.\nContext recap: User interviews are special conversations that help us understand what users really need, how they behave, and the challenges they face. To make these interviews effective, we should follow some important guidelines. First, we want to ask open-ended questions, which are questions that can't be answered with just a 'yes' or 'no.' For example, we might ask, 'Can you tell me about the last time you used this product?' This type of question encourages users to share their experiences in detail, giving us valuable insights. It's also important to avoid leading questions."
        },
        {
          "id": "ux-design-101-l02-c3",
          "title": "Building Personas",
          "content": "A persona is a fictional character that represents a specific group of users based on thorough research. Creating a strong persona is essential in understanding who we are designing for, and it involves including several key elements that make them relatable and memorable. First, we give the persona a name and a photo. This helps us visualize them and remember their story. Next, we include demographic details, such as their age, occupation, and background, which provide context about who they are. We also outline their goals, which describe what they want to achieve when using a product or service. Understanding their goals allows us to design features that help them succeed. Additionally, we note their frustrations, which highlight the challenges they face in their daily lives. This insight is crucial because it helps us identify areas where our design can improve their experience. Furthermore, we create a scenario that tells a story about how they would use the product in real life. This narrative helps us see the product from their perspective. Lastly, we include a quote that captures their attitude or feelings, giving us a deeper understanding of their mindset. Alan Cooper, a key figure in the field of user experience design, introduced the concept of personas in his influential book 'About Face.' He warned against creating vague personas like 'everyone,' as they do not provide clear guidance for design. Instead, we should aim for specificity. For example, designing for 'Maria, a 34-year-old nurse who checks patient records on a tablet between rounds' is much more effective than designing for a broad category like 'healthcare workers.' This level of detail helps designers make better decisions that truly meet the needs of users, ensuring that our designs are effective and user-friendly.\nContext recap: A persona is a fictional character that represents a specific group of users based on thorough research. Creating a strong persona is essential in understanding who we are designing for, and it involves including several key elements that make them relatable and memorable. First, we give the persona a name and a photo. This helps us visualize them and remember their story.\nWhy this matters: Building Personas helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-101-l02-a1",
          "title": "Match Research Method to Purpose",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "User interview",
              "right": "Explore motivations and pain points (qualitative)"
            },
            {
              "left": "A/B test",
              "right": "Compare two design variants with statistical significance (quantitative)"
            },
            {
              "left": "Contextual inquiry",
              "right": "Observe users in their natural environment (qualitative)"
            },
            {
              "left": "Survey",
              "right": "Gather structured data from a large sample (quantitative)"
            },
            {
              "left": "Card sorting",
              "right": "Discover how users categorize and label information"
            },
            {
              "left": "Diary study",
              "right": "Capture user behavior over time in context (qualitative)"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-101-l02-f1",
          "front": "Qualitative research",
          "back": "Explores the 'why' through interviews, observation, and think-alouds — rich insights, small samples"
        },
        {
          "id": "ux-design-101-l02-f2",
          "front": "Empathy map",
          "back": "A quadrant diagram capturing what users Say, Think, Do, and Feel — synthesizes interview data into shared team understanding"
        },
        {
          "id": "ux-design-101-l02-f3",
          "front": "Persona",
          "back": "A fictional, research-backed archetype representing a user segment — includes goals, frustrations, scenarios, and a humanizing name/photo"
        },
        {
          "id": "ux-design-101-l02-f4",
          "front": "Contextual inquiry",
          "back": "A qualitative method where the researcher observes and interviews users in their natural work or life environment"
        }
      ],
      "learningAids": [
        {
          "id": "ux-design-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "ux-design-101-l03",
      "title": "Research & Foundations Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of UX fundamentals, research methods, and persona creation"
      ],
      "questions": [
        {
          "id": "ux-design-101-l03-q1",
          "text": "Which of the following best distinguishes UX from UI?",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "UX covers the entire user journey; UI focuses on visual and interactive elements"
            },
            {
              "id": "b",
              "text": "UX and UI are exactly the same discipline"
            },
            {
              "id": "c",
              "text": "UI includes user research; UX does not"
            },
            {
              "id": "d",
              "text": "UX only applies to mobile apps"
            }
          ],
          "correctOptionId": "a",
          "explanation": "UX encompasses the full experience (usability, accessibility, emotions), while UI refers specifically to the visual layer users interact with."
        },
        {
          "id": "ux-design-101-l03-q2",
          "text": "In Garrett's five planes model, which plane deals with organizing content and defining user flows?",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Surface"
            },
            {
              "id": "b",
              "text": "Strategy"
            },
            {
              "id": "c",
              "text": "Structure"
            },
            {
              "id": "d",
              "text": "Scope"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Structure plane handles information architecture and interaction design — how content is organized and how users navigate through it."
        },
        {
          "id": "ux-design-101-l03-q3",
          "text": "A persona should be based on:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The designer's assumptions about users"
            },
            {
              "id": "b",
              "text": "Real research data including interviews and observations"
            },
            {
              "id": "c",
              "text": "Demographic data only"
            },
            {
              "id": "d",
              "text": "Competitor product reviews"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Personas must be grounded in real research — interviews, observations, and data — not assumptions, to accurately represent user needs."
        },
        {
          "id": "ux-design-101-l03-q4",
          "text": "The design thinking process is best described as:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A strictly linear, one-pass process"
            },
            {
              "id": "b",
              "text": "An iterative cycle of empathize, define, ideate, prototype, and test"
            },
            {
              "id": "c",
              "text": "A process that skips user research to save time"
            },
            {
              "id": "d",
              "text": "Only applicable to physical product design"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Design thinking is iterative and non-linear — insights from testing often cycle back to earlier phases like empathizing or redefining the problem."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "ux-design-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "ux-design-101-l04",
      "title": "Information Architecture and Navigation",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Define information architecture and its role in UX",
        "Apply card sorting and tree testing to validate IA decisions",
        "Distinguish common navigation patterns and when to use each"
      ],
      "chunks": [
        {
          "id": "ux-design-101-l04-c1",
          "title": "What is Information Architecture?",
          "content": "Information architecture, commonly known as IA, is a crucial practice in the field of design that focuses on how we organize and structure information. Imagine you are trying to find a specific book in a library. If the books are arranged in a confusing way, it would take you a long time to locate the one you want. This is similar to what IA does for websites and applications. It helps users easily find what they need and complete their tasks without unnecessary hassle. The term 'information architecture' was first introduced by Richard Saul Wurman in 1975. Later on, two experts, Peter Morville and Louis Rosenfeld, adapted this concept specifically for the internet. IA is all about understanding three main areas: the users, the content, and the context. First, we need to understand the users—what they think, what they need, and how they prefer to find information. Next, we look at the content itself, which includes how much information there is, its format (like text, images, or videos), and how it is organized. Lastly, we consider the context, which includes the goals of the business, any limitations we might face, and the technology we are using. When information architecture is poorly designed, users can become frustrated because they might struggle to find what they are looking for. This is against a fundamental principle of usability, famously expressed by Steve Krug: 'Don't make me think.' Good information architecture should be intuitive and user-friendly, allowing people to focus on their tasks without getting lost in complicated layouts. By creating a clear and organized structure, we can enhance the overall experience for users, making it easier for them to navigate and find the information they seek.\nContext recap: Information architecture, commonly known as IA, is a crucial practice in the field of design that focuses on how we organize and structure information. Imagine you are trying to find a specific book in a library. If the books are arranged in a confusing way, it would take you a long time to locate the one you want. This is similar to what IA does for websites and applications.\nWhy this matters: What is Information Architecture? helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-101-l04-c2",
          "title": "Card Sorting and Tree Testing",
          "content": "Card sorting is a fun and interactive way for users to help organize content into groups that make sense to them. Imagine you have a bunch of cards with different topics or items on them. In an open card sort, participants get to create and name their own categories based on how they think the items should be grouped. This allows them to express their ideas freely. On the other hand, in a closed card sort, the categories are already set up, and participants simply place the items into those predefined groups. This method is really useful because it helps us understand how users think and what their mental models are, which can guide us in designing better navigation structures for websites or apps.\nTree testing is another important method that works a bit differently from card sorting. Instead of sorting cards, participants are given specific tasks to complete, like 'Find the return policy.' They then navigate through a text-only hierarchy, which means they are looking at a list of options without any visual design elements to help them. This helps us see how easily they can find what they are looking for. If a lot of participants can complete their tasks successfully and find their way through the hierarchy without getting lost, it means that our information architecture is effective. However, if many participants struggle to complete their tasks, it signals that we might need to make some changes to improve the structure. Overall, both card sorting and tree testing are valuable tools in UX design that help us create better experiences for users by understanding their needs and preferences.\nContext recap: Card sorting is a fun and interactive way for users to help organize content into groups that make sense to them. Imagine you have a bunch of cards with different topics or items on them. In an open card sort, participants get to create and name their own categories based on how they think the items should be grouped. This allows them to express their ideas freely.\nWhy this matters: Card Sorting and Tree Testing helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-101-l04-c3",
          "title": "Navigation Patterns",
          "content": "Effective navigation is essential for guiding users through a website or application. It helps them understand where they are, where they can go next, and how to return to previous pages easily. Designers use several common navigation patterns to achieve this.\nOne important pattern is global navigation, which is a consistent menu that appears at the top or side of the screen. This menu shows the main sections of the site, making it easy for users to find what they are looking for. Another pattern is local navigation, which includes sub-menus that appear within specific sections of the site. This helps users dive deeper into a particular area without getting lost.\nBreadcrumbs are another useful navigation tool. They provide a visual trail that shows users their path from the homepage to their current location. This way, users can easily backtrack if they want to explore other sections.\nFaceted navigation is particularly helpful for websites with large amounts of data, such as e-commerce sites. It allows users to filter products based on various criteria, making it easier to find exactly what they want.\nLastly, we have hamburger menus, which are represented by a three-line icon. These menus hide navigation options on mobile devices to save space. While they are convenient, they can sometimes make it harder for users to discover all available options.\nWhen choosing a navigation pattern, designers must consider the depth of content, the goals of the users, and the devices being used. Research by Jakob Nielsen shows that users generally prefer visible navigation. When menus are hidden, it can increase the effort required to interact with the site, which may lead to frustration. Therefore, effective navigation design is not just about aesthetics; it is about creating a user-friendly experience that meets the needs of everyone who visits the site.\nContext recap: Effective navigation is essential for guiding users through a website or application. It helps them understand where they are, where they can go next, and how to return to previous pages easily. Designers use several common navigation patterns to achieve this. One important pattern is global navigation, which is a consistent menu that appears at the top or side of the screen.\nWhy this matters: Navigation Patterns helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-101-l04-f1",
          "front": "Information architecture (IA)",
          "back": "The practice of organizing, structuring, and labeling content so users can find information and complete tasks — operates at the intersection of users, content, and context"
        },
        {
          "id": "ux-design-101-l04-f2",
          "front": "Card sorting",
          "back": "A method where users group content into categories — open sort (users create categories) or closed sort (predefined categories) — reveals mental models"
        },
        {
          "id": "ux-design-101-l04-f3",
          "front": "Tree testing",
          "back": "A method to validate IA by asking users to find items in a text-only hierarchy — measures findability without visual design cues"
        },
        {
          "id": "ux-design-101-l04-f4",
          "front": "Breadcrumb navigation",
          "back": "A secondary navigation trail showing the user's current location within the site hierarchy — supports orientation and backtracking"
        }
      ],
      "learningAids": [
        {
          "id": "ux-design-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "ux-design-101-l05",
      "title": "Wireframing and Prototyping",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Differentiate low-fidelity, mid-fidelity, and high-fidelity prototypes",
        "Construct wireframes that prioritize content hierarchy and user flows",
        "Use prototyping tools like Figma to create clickable interactive mockups"
      ],
      "chunks": [
        {
          "id": "ux-design-101-l05-c1",
          "title": "From Sketches to Wireframes",
          "content": "Wireframes are essential tools in the world of design, acting like blueprints for how a screen will look and function. They help designers visualize where different elements, such as buttons, images, and text, will be placed on a page. Wireframes focus on the layout without getting distracted by colors, fonts, or images. This allows designers to concentrate on the structure and organization of the content.\nThere are two main types of wireframes: low-fidelity and mid-fidelity. Low-fidelity wireframes are often quick sketches made on paper or whiteboards. These sketches are intentionally rough and simple, which encourages designers to share their ideas and receive feedback without feeling too attached to any one concept. This process is crucial because it fosters collaboration and creativity among team members, allowing everyone to contribute their thoughts and suggestions.\nOn the other hand, mid-fidelity wireframes are created using specialized design tools like Figma, Sketch, or Balsamiq. These wireframes are more detailed and include precise spacing and placeholder content, which helps to give a clearer picture of how the final design will look.\nWireframes play a vital role in answering the question, 'What goes where?' They help teams decide the arrangement of elements before diving into discussions about colors or fonts. By establishing a clear layout early on, wireframes can prevent costly redesigns later in the project, saving time and resources. Overall, wireframing is a foundational step in the design process that sets the stage for successful user experiences.\nContext recap: Wireframes are essential tools in the world of design, acting like blueprints for how a screen will look and function. They help designers visualize where different elements, such as buttons, images, and text, will be placed on a page. Wireframes focus on the layout without getting distracted by colors, fonts, or images. This allows designers to concentrate on the structure and organization of the content.\nWhy this matters: From Sketches to Wireframes helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l05-c2",
          "title": "Prototyping Fidelity Spectrum",
          "content": "Prototypes are essential tools in the design process that help us understand how users will interact with a product. They come in different levels of detail, which we refer to as fidelity. Let's break this down into three main types of prototypes: low-fidelity, mid-fidelity, and high-fidelity.\nLow-fidelity prototypes are the simplest and quickest to create. Think of them as rough sketches or mock-ups made from paper cutouts or sticky notes. These prototypes can be put together in just a few hours, making them perfect for brainstorming sessions. They allow teams to test out ideas and concepts rapidly without getting bogged down in details. This is a great way to validate whether an idea is worth pursuing further.\nNext, we have mid-fidelity prototypes. These are a step up in complexity and can be created using design tools like Figma or Adobe XD. Mid-fidelity prototypes include clickable wireframes that let users navigate through basic interactions. This means you can start to see how users will move from one part of the application to another, which is crucial for understanding the user flow.\nFinally, we have high-fidelity prototypes. These are the most detailed and closely resemble the final product. They include real content, brand colors, and smooth transitions that mimic the actual user experience. High-fidelity prototypes are important for refining visual details and preparing for the hand-off to developers, ensuring that everyone is on the same page about what the final product should look like.\nWhen creating prototypes, it’s important to choose the right level of fidelity based on the specific question you are trying to answer. For example, use low-fidelity prototypes to validate your initial concepts, mid-fidelity prototypes to test how users will navigate through your design, and high-fidelity prototypes to polish the visual aspects before development begins.\nAdditionally, Fitts's Law is a principle that can be tested once you have interactive prototypes. This law states that the time it takes for a user to reach a target is influenced by the size of the target and how far away it is. By using interactive prototypes, you can observe how effectively users can interact with different elements, helping you make informed design decisions.\nContext recap: Prototypes are essential tools in the design process that help us understand how users will interact with a product. They come in different levels of detail, which we refer to as fidelity. Let's break this down into three main types of prototypes: low-fidelity, mid-fidelity, and high-fidelity. Low-fidelity prototypes are the simplest and quickest to create.\nWhy this matters: Prototyping Fidelity Spectrum helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l05-c3",
          "title": "Prototyping in Figma",
          "content": "Figma is an exciting and widely-used design tool that you can access right from your web browser. It’s perfect for working on UX (User Experience) and UI (User Interface) design projects, especially when you want to collaborate with others. This means that multiple people can work together on the same design at the same time, making it a great choice for team projects. One of the coolest features of Figma is its ability to create prototypes, which are like interactive models of your design.\nIn Figma, you can use frames to represent different screens of your app or website. Think of frames as the pages of a book, where each page shows something different. Another important feature is components. These are reusable design elements, like buttons or cards, that you can use throughout your project. The best part is that when you change a component in one place, it automatically updates everywhere else it’s used! This saves time and keeps your design consistent.\nFigma also includes an auto-layout feature, which helps you arrange your design elements in a way that looks good on different screen sizes. This is super helpful for making sure your design works well on both phones and computers. You can also create interactive connections between your frames, which lets users click, hover, or drag to navigate through your prototype. This makes it feel more real!\nAnother neat feature is smart animate, which allows for smooth transitions between different states of your design. This means that when you switch from one screen to another, it can look really polished and professional.\nTypically, designers start by building a library of components, which is like a toolbox of design elements they can use. After that, they create screens using these components. Finally, they connect these screens into a clickable prototype that can be tested by users to see how well it works. All of this can be done in one collaborative file, making it easy to share and get feedback from others!\nFigma is a powerful tool that helps designers bring their ideas to life in a fun and interactive way, and it’s a great skill to learn if you’re interested in design!\nContext recap: Figma is an exciting and widely-used design tool that you can access right from your web browser. It’s perfect for working on UX (User Experience) and UI (User Interface) design projects, especially when you want to collaborate with others. This means that multiple people can work together on the same design at the same time, making it a great choice for team projects. One of the coolest features of Figma is its ability to create prototypes, which are like interactive models of your design.\nWhy this matters: Prototyping in Figma helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-101-l05-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Low Fidelity",
            "Mid Fidelity",
            "High Fidelity"
          ],
          "items": [
            {
              "text": "Paper sketch on a napkin",
              "bucket": "Low Fidelity"
            },
            {
              "text": "Clickable Figma wireframe with placeholder text",
              "bucket": "Mid Fidelity"
            },
            {
              "text": "Fully styled prototype with micro-interactions and real content",
              "bucket": "High Fidelity"
            },
            {
              "text": "Sticky notes on a whiteboard representing screens",
              "bucket": "Low Fidelity"
            },
            {
              "text": "Balsamiq mockup with gray-box layouts",
              "bucket": "Mid Fidelity"
            },
            {
              "text": "Figma prototype with brand colors, animations, and developer specs",
              "bucket": "High Fidelity"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-101-l05-f1",
          "front": "Wireframe",
          "back": "A skeletal layout showing element placement and hierarchy without visual design details — answers 'What goes where?'"
        },
        {
          "id": "ux-design-101-l05-f2",
          "front": "Fitts's Law",
          "back": "The time to acquire a target is a function of distance to and size of the target — larger, closer buttons are faster to click"
        },
        {
          "id": "ux-design-101-l05-f3",
          "front": "Figma components",
          "back": "Reusable design elements (buttons, cards, icons) that sync changes across a file — the building blocks of a design system"
        },
        {
          "id": "ux-design-101-l05-f4",
          "front": "Prototype fidelity spectrum",
          "back": "Low-fi (paper sketches) → Mid-fi (clickable wireframes) → High-fi (polished, near-final mockups) — match fidelity to the question being tested"
        }
      ],
      "learningAids": [
        {
          "id": "ux-design-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "ux-design-101-l06",
      "title": "IA & Prototyping Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of information architecture, wireframing, and prototyping methods"
      ],
      "questions": [
        {
          "id": "ux-design-101-l06-q1",
          "text": "What does an open card sort reveal?",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "How quickly users can click a button"
            },
            {
              "id": "b",
              "text": "How users naturally group and label content categories"
            },
            {
              "id": "c",
              "text": "The visual appeal of a design"
            },
            {
              "id": "d",
              "text": "The server response time of a website"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In an open card sort, participants create their own groups and labels, revealing their mental models for organizing content."
        },
        {
          "id": "ux-design-101-l06-q2",
          "text": "Fitts's Law states that the time to reach a target depends on:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The color contrast of the target"
            },
            {
              "id": "b",
              "text": "The distance to the target and the size of the target"
            },
            {
              "id": "c",
              "text": "The number of items on the page"
            },
            {
              "id": "d",
              "text": "The user's internet connection speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fitts's Law predicts that larger, closer targets are acquired faster — a fundamental principle for sizing and placing interactive elements."
        },
        {
          "id": "ux-design-101-l06-q3",
          "text": "When should a designer use a low-fidelity prototype?",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Only after the product is launched"
            },
            {
              "id": "b",
              "text": "To validate early concepts quickly before investing in detailed design"
            },
            {
              "id": "c",
              "text": "To test micro-interactions and animations"
            },
            {
              "id": "d",
              "text": "To hand off final specs to developers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Low-fi prototypes are fast and cheap — ideal for exploring and validating concepts early before committing to detailed design work."
        },
        {
          "id": "ux-design-101-l06-q4",
          "text": "Tree testing validates information architecture by asking users to:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rate the visual design of each page"
            },
            {
              "id": "b",
              "text": "Find items in a text-only hierarchy without visual design cues"
            },
            {
              "id": "c",
              "text": "Sort cards into groups they define"
            },
            {
              "id": "d",
              "text": "Complete a survey about their demographics"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tree testing removes visual design distractions — users navigate a text-only tree to find information, isolating IA effectiveness."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "ux-design-101-l07",
      "title": "Visual Design and Interaction Design Principles",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Apply Gestalt principles of perception to interface layout",
        "Use Nielsen's 10 usability heuristics to evaluate designs",
        "Incorporate accessibility standards (WCAG) into design decisions"
      ],
      "chunks": [
        {
          "id": "ux-design-101-l07-c1",
          "title": "Gestalt Principles in UI Design",
          "content": "Gestalt psychology is a fascinating area of study that helps us understand how our brains organize visual information into meaningful patterns. This understanding is incredibly important for designers who want to create user-friendly interfaces! Let's explore some key principles that can guide us:\n1. **Proximity**: This principle tells us that when elements are placed close to each other, our brains naturally group them together. For example, when you see a form field next to its label, you immediately understand that they are related. This helps users fill out forms more easily because they can quickly see which label goes with which field.\n2. **Similarity**: Similarity refers to how our brains perceive elements that share visual traits, such as color, shape, or size, as being related. For instance, if all clickable links on a webpage are colored blue, users will recognize that these links are interactive. This consistency helps users navigate websites more intuitively.\n3. **Continuity**: Our eyes are drawn to smooth lines and curves, which is why continuity is an important principle in design. For example, progress bars that flow smoothly or navigation items that are aligned in a straight line guide our eyes naturally along the path. This makes it easier for users to follow along and understand the flow of information.\n4. **Closure**: This principle highlights our brain's ability to complete incomplete shapes. Even if a logo has gaps, our brains can fill in those gaps and recognize it as a complete form. This is why many logos are designed with clever gaps that still convey the intended image.\n5. **Figure-ground**: The figure-ground principle helps us distinguish between the main object (the figure) and the background (the ground). For example, when a modal dialog box pops up over a dimmed page, it clearly indicates what we should focus on. This helps users understand where to direct their attention without confusion.\nBy applying these Gestalt principles in design, we can create user interfaces that feel natural and intuitive. This alignment with how our brains naturally perceive and understand structure makes for a better user experience overall. Remember, good design is not just about making things look pretty; it's about making them easy to use and understand!\nContext recap: Gestalt psychology is a fascinating area of study that helps us understand how our brains organize visual information into meaningful patterns. This understanding is incredibly important for designers who want to create user-friendly interfaces! Let's explore some key principles that can guide us:\n1. **Proximity**: This principle tells us that when elements are placed close to each other, our brains naturally group them together.\nWhy this matters: Gestalt Principles in UI Design helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l07-c2",
          "title": "Nielsen's 10 Usability Heuristics",
          "content": "Jakob Nielsen, a well-known expert in user experience design, created a set of helpful guidelines called heuristics. These guidelines are essential for evaluating how easy and friendly a design is for users. Let's explore his 10 important rules that can help make digital experiences better for everyone:\n1. **Visibility of System Status**: It's crucial to keep users informed about what is happening in the system. For instance, when a webpage is loading, showing a loading spinner or a progress bar lets users know that their request is being processed. This helps reduce frustration and uncertainty.\n2. **Match Between System and Real World**: Designers should use language and concepts that users are familiar with. This means avoiding technical jargon that might confuse people. For example, using everyday terms makes it easier for users to understand what they need to do.\n3. **User Control and Freedom**: Users should feel in control of their actions. This means providing options to undo or redo actions and ensuring there are clear ways to exit processes. This empowers users and enhances their confidence while using the interface.\n4. **Consistency and Standards**: Following common conventions is important. When designers use consistent language and actions, users don’t have to guess whether different words or actions mean the same thing. This consistency helps users navigate more easily.\n5. **Error Prevention**: Good design anticipates potential mistakes and works to prevent them. For example, using confirmation dialogs before a user deletes something important can help avoid accidental errors. Inline validation can also guide users to correct mistakes as they fill out forms.\n6. **Recognition Rather Than Recall**: Instead of making users remember everything, designers should show options clearly. This means providing menus or lists that users can see, which helps them make decisions without having to rely on memory.\n7. **Flexibility and Efficiency**: Experienced users often appreciate shortcuts that allow them to navigate quickly. By offering these shortcuts, designers can cater to both new and experienced users, making the experience more efficient for everyone.\n8. **Aesthetic and Minimalist Design**: A clean design is essential. By removing unnecessary elements that could distract users, designers can create a more focused and enjoyable experience. This minimalist approach helps users concentrate on what matters most.\n9. **Help Users Recognize, Diagnose, and Recover from Errors**: When something goes wrong, clear and actionable error messages can guide users on how to fix the issue. This support is vital for helping users feel confident in resolving problems.\n10. **Help and Documentation**: Providing easily accessible help that is searchable and task-oriented is important. Users should be able to find the information they need quickly and understand it without confusion.\nBy following these heuristics, designers can create interfaces that are not only effective but also user-friendly, enhancing the overall experience for everyone who interacts with their designs.\nContext recap: Jakob Nielsen, a well-known expert in user experience design, created a set of helpful guidelines called heuristics. These guidelines are essential for evaluating how easy and friendly a design is for users. Let's explore his 10 important rules that can help make digital experiences better for everyone:\n1. **Visibility of System Status**: It's crucial to keep users informed about what is happening in the system.\nWhy this matters: Nielsen's 10 Usability Heuristics helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l07-c3",
          "title": "Accessibility and WCAG",
          "content": "Accessibility is a crucial aspect of design that ensures everyone, including individuals with various abilities, can effectively use products and services. This includes people who may have visual, auditory, motor, or cognitive impairments. To help designers create accessible content, the Web Content Accessibility Guidelines (WCAG 2.1) offer a structured approach based on four essential principles, which can be remembered using the acronym POUR:\n1. **Perceivable**: This principle emphasizes that all content should be presented in ways that users can perceive. For instance, providing alt text for images allows individuals who are visually impaired to understand what the images depict. Similarly, adding captions to videos ensures that those who are hard of hearing can follow along with the audio.\n2. **Operable**: It’s important that all interactive elements of a website or application can be used in various ways. This means that users should be able to navigate and interact with the content using a keyboard, voice commands, or assistive technologies, rather than relying solely on a mouse. This principle helps ensure that everyone can engage with the interface, regardless of their physical abilities.\n3. **Understandable**: The content and navigation of a website should be clear and predictable. This involves using straightforward language, clear labels, and consistent behavior throughout the site. When users can easily understand how to navigate and interact with content, it enhances their overall experience.\n4. **Robust**: Content must be designed to work well with current and future assistive technologies. This can be achieved by using semantic HTML and ARIA roles, which help ensure that assistive devices can interpret the content correctly.\nWCAG also outlines three levels of conformance to help guide designers: Level A (the minimum standard), Level AA (recommended for most websites, which includes a color contrast ratio of 4.5:1 for normal text), and Level AAA (the highest standard).\nDesigning with accessibility in mind is beneficial for everyone. For example, curb cuts were initially created for wheelchair users, but they also assist parents pushing strollers, travelers with luggage, and delivery workers with carts. This illustrates how inclusive design can enhance the experience for all users, making products more usable and enjoyable for everyone, regardless of their abilities.\nContext recap: Accessibility is a crucial aspect of design that ensures everyone, including individuals with various abilities, can effectively use products and services. This includes people who may have visual, auditory, motor, or cognitive impairments. To help designers create accessible content, the Web Content Accessibility Guidelines (WCAG 2.1) offer a structured approach based on four essential principles, which can be remembered using the acronym POUR:\n1. **Perceivable**: This principle emphasizes that all content should be presented in ways that users can perceive.\nWhy this matters: Accessibility and WCAG helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-101-l07-f1",
          "front": "Gestalt principle of Proximity",
          "back": "Elements placed close together are perceived as a group — used to associate labels with form fields, group related actions, and create visual sections"
        },
        {
          "id": "ux-design-101-l07-f2",
          "front": "Nielsen's heuristic: Visibility of system status",
          "back": "The system should always keep users informed about what is happening through timely feedback — e.g., loading indicators, progress bars, confirmation messages"
        },
        {
          "id": "ux-design-101-l07-f3",
          "front": "WCAG POUR principles",
          "back": "Perceivable, Operable, Understandable, Robust — the four foundational principles of web accessibility guidelines"
        },
        {
          "id": "ux-design-101-l07-f4",
          "front": "WCAG AA contrast ratio",
          "back": "Normal text requires a minimum 4.5:1 contrast ratio against its background; large text requires 3:1 — ensures readability for low-vision users"
        }
      ]
    },
    {
      "id": "ux-design-101-l08",
      "title": "Usability Testing and Iteration",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Plan and conduct a moderated usability test with 5 participants",
        "Analyze test results using task success rate, time-on-task, and error rate",
        "Apply cognitive load theory to simplify complex interfaces"
      ],
      "chunks": [
        {
          "id": "ux-design-101-l08-c1",
          "title": "Planning a Usability Test",
          "content": "A usability test is a special way to see how real users interact with a product or a prototype. This helps us understand how easy or difficult it is for them to complete specific tasks. According to research by Jakob Nielsen, if you test with just five participants, you can discover about 85% of the problems users might face. This makes usability testing a powerful and cost-effective method for improving designs. Here’s a step-by-step guide to planning a usability test:\n1. **Define Objectives**: Begin by thinking about what you want to learn from the test. What questions do you want answered? For example, you might want to know if users can easily find a specific feature.\n2. **Recruit Participants**: It’s important to find participants who are similar to your target users. This way, the feedback you receive will be more relevant and useful. You can reach out to friends, family, or even use social media to find people who fit your user profiles.\n3. **Write Task Scenarios**: Create realistic scenarios that users can follow during the test. For instance, you might say, \"Imagine you bought a pair of shoes last week, and now you want to return them. Can you find the return process on the website?\" This helps users understand what they need to do.\n4. **Prepare a Test Script**: Having a consistent set of instructions for all testing sessions is crucial. This ensures that every participant has the same experience, which makes the results fair and reliable.\n5. **Choose a Format**: Decide whether your test will be moderated or unmoderated. In a moderated test, a facilitator guides the session and helps participants if they get stuck. In an unmoderated test, participants complete tasks on their own, using online tools like Maze or UserTesting.com.\nBy carefully planning your usability test, you can gather valuable insights that will help you improve your design and make it more user-friendly. Remember, the goal is to create a product that is easy and enjoyable for everyone to use!\nContext recap: A usability test is a special way to see how real users interact with a product or a prototype. This helps us understand how easy or difficult it is for them to complete specific tasks. According to research by Jakob Nielsen, if you test with just five participants, you can discover about 85% of the problems users might face. This makes usability testing a powerful and cost-effective method for improving designs.\nWhy this matters: Planning a Usability Test helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l08-c2",
          "title": "Metrics and Analysis",
          "content": "Usability testing is an important process that helps designers understand how real users interact with their products. It provides two types of data: quantitative and qualitative. Let's break down some key metrics that are essential for evaluating usability:\n1. **Task Success Rate**: This metric tells us the percentage of users who successfully complete a specific task. A higher success rate indicates that the design is user-friendly.\n2. **Time-on-Task**: This measures how long it takes for users to finish a task. If users take a long time, it might suggest that the task is challenging or confusing.\n3. **Error Rate**: This counts the mistakes users make, such as clicking the wrong button or getting lost while navigating. A high error rate can highlight areas that need improvement.\n4. **System Usability Scale (SUS)**: After the usability test, participants fill out a 10-question survey that gives a score between 0 and 100. A score above 68 is considered above average, which means the design is generally well-received.\nWhile these metrics are helpful, they don't tell the whole story. Observing users as they interact with the design can reveal important insights that numbers alone might miss. For instance, you might notice users hesitating, looking confused, or finding creative workarounds to complete tasks.\nTo make sense of these observations, teams can use a technique called affinity diagramming. This method involves grouping similar feedback into themes, which helps teams identify the most critical issues to address based on how often they occur and how serious they are. By focusing on these themes, designers can prioritize their efforts to improve the overall user experience.\nContext recap: Usability testing is an important process that helps designers understand how real users interact with their products. It provides two types of data: quantitative and qualitative. Let's break down some key metrics that are essential for evaluating usability:\n1. **Task Success Rate**: This metric tells us the percentage of users who successfully complete a specific task.\nWhy this matters: Metrics and Analysis helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ux-design-101-l08-c3",
          "title": "Cognitive Load and Iterative Improvement",
          "content": "Cognitive load theory, first introduced by John Sweller in 1988, helps us understand how our brains process information. It tells us that our working memory has limits; specifically, we can only hold about 4 ± 1 pieces of information at any given time. When we encounter interfaces that present too much information all at once, it can lead to confusion, mistakes, and frustration. To create better user experiences, designers can use several strategies to reduce cognitive load:\n1. **Progressive Disclosure**: This technique involves showing only the information that users need at that moment. As they navigate through the interface, more information can be revealed as necessary. This keeps the interface clean and prevents overwhelming users with too much information at once.\n2. **Chunking**: This strategy involves grouping related items together to make them easier to understand. For instance, formatting phone numbers as 555-867-5309 instead of 5558675309 helps users read and remember them more easily. By breaking information into smaller, manageable pieces, users can process it better.\n3. **Consistent Patterns**: It’s important for designers to ensure that similar actions work the same way throughout the interface. This consistency helps users learn how to interact with the design more quickly and reduces confusion.\n4. **Eliminate Unnecessary Choices**: Hick's Law states that the more options we have, the longer it takes us to make a decision. By simplifying choices and reducing the number of options presented to users, designers can help them make decisions more quickly and confidently.\nOnce usability testing has been conducted and problems have been identified, designers should enter a process called iteration. This means they will focus on fixing the most critical issues first, then test the updated design with a new group of participants. This cycle of testing and improving continues until the design aligns closely with what users expect, ultimately leading to a more enjoyable and effective user experience.\nContext recap: Cognitive load theory, first introduced by John Sweller in 1988, helps us understand how our brains process information. It tells us that our working memory has limits; specifically, we can only hold about 4 ± 1 pieces of information at any given time. When we encounter interfaces that present too much information all at once, it can lead to confusion, mistakes, and frustration. To create better user experiences, designers can use several strategies to reduce cognitive load:\n1.\nWhy this matters: Cognitive Load and Iterative Improvement helps learners in UX Design connect ideas from UX Design Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-101-l08-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Quantitative Metric",
            "Qualitative Observation"
          ],
          "items": [
            {
              "text": "Task success rate of 78%",
              "bucket": "Quantitative Metric"
            },
            {
              "text": "User hesitated before clicking the submit button",
              "bucket": "Qualitative Observation"
            },
            {
              "text": "Average time-on-task: 45 seconds",
              "bucket": "Quantitative Metric"
            },
            {
              "text": "Participant said: 'I'm not sure what this icon means'",
              "bucket": "Qualitative Observation"
            },
            {
              "text": "SUS score of 72",
              "bucket": "Quantitative Metric"
            },
            {
              "text": "Three participants used the back button to recover from errors",
              "bucket": "Qualitative Observation"
            },
            {
              "text": "Error rate: 2.3 wrong clicks per task",
              "bucket": "Quantitative Metric"
            },
            {
              "text": "User squinted trying to read the small gray text",
              "bucket": "Qualitative Observation"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-101-l08-f1",
          "front": "Nielsen's 5-user rule",
          "back": "Testing with 5 participants uncovers ~85% of usability problems — a high-impact, low-cost method for finding design issues"
        },
        {
          "id": "ux-design-101-l08-f2",
          "front": "System Usability Scale (SUS)",
          "back": "A 10-question post-test questionnaire yielding a score from 0–100 — scores above 68 are considered above average usability"
        },
        {
          "id": "ux-design-101-l08-f3",
          "front": "Cognitive load theory",
          "back": "Working memory holds ~4±1 chunks simultaneously — interfaces should minimize extraneous load through progressive disclosure, chunking, and consistency"
        },
        {
          "id": "ux-design-101-l08-f4",
          "front": "Hick's Law",
          "back": "Decision time increases logarithmically with the number of options — reduce choices to speed user decisions and lower cognitive load"
        }
      ]
    },
    {
      "id": "ux-design-101-l09",
      "title": "Visual Design & Testing Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of visual design principles, accessibility, and usability testing"
      ],
      "questions": [
        {
          "id": "ux-design-101-l09-q1",
          "text": "The Gestalt principle of Similarity predicts that users will:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Perceive elements with shared visual traits (color, shape) as related"
            },
            {
              "id": "b",
              "text": "Always read text from right to left"
            },
            {
              "id": "c",
              "text": "Ignore all visual grouping cues"
            },
            {
              "id": "d",
              "text": "Prefer larger screens over smaller ones"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Similarity means elements sharing visual attributes (color, shape, size) are perceived as belonging to the same group or having the same function."
        },
        {
          "id": "ux-design-101-l09-q2",
          "text": "According to WCAG AA, the minimum contrast ratio for normal body text is:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2:1"
            },
            {
              "id": "b",
              "text": "3:1"
            },
            {
              "id": "c",
              "text": "4.5:1"
            },
            {
              "id": "d",
              "text": "7:1"
            }
          ],
          "correctOptionId": "c",
          "explanation": "WCAG AA requires 4.5:1 contrast for normal text (3:1 for large text). Level AAA requires 7:1 for normal text."
        },
        {
          "id": "ux-design-101-l09-q3",
          "text": "How many participants does Nielsen recommend for a usability test to find most problems?",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1"
            },
            {
              "id": "b",
              "text": "5"
            },
            {
              "id": "c",
              "text": "50"
            },
            {
              "id": "d",
              "text": "100"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Nielsen's research shows 5 participants uncover approximately 85% of usability issues — testing more yields diminishing returns."
        },
        {
          "id": "ux-design-101-l09-q4",
          "text": "Hick's Law implies that a designer should:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Add as many options as possible to give users freedom"
            },
            {
              "id": "b",
              "text": "Reduce the number of choices to speed up decision-making"
            },
            {
              "id": "c",
              "text": "Use only one color throughout the interface"
            },
            {
              "id": "d",
              "text": "Remove all navigation labels"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hick's Law states decision time increases logarithmically with choices — fewer, well-organized options lead to faster, more confident user decisions."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "ux-design-101-l10",
      "title": "Mastery Quiz: UX Design Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all UX design foundations concepts"
      ],
      "questions": [
        {
          "id": "ux-design-101-l10-q1",
          "text": "A designer discovers during usability testing that users cannot find the checkout button. Which Nielsen heuristic is most likely violated?",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Aesthetic and minimalist design"
            },
            {
              "id": "b",
              "text": "Visibility of system status"
            },
            {
              "id": "c",
              "text": "Recognition rather than recall"
            },
            {
              "id": "d",
              "text": "Help and documentation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "If users can't find the checkout button, key actions are not visible — forcing recall instead of recognition. The interface should make important options visible and recognizable."
        },
        {
          "id": "ux-design-101-l10-q2",
          "text": "A mobile app presents 12 equally weighted action buttons on a single screen. Users report feeling overwhelmed. Which principles explain the problem?",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Hick's Law and cognitive load theory"
            },
            {
              "id": "b",
              "text": "Fitts's Law and color theory"
            },
            {
              "id": "c",
              "text": "Card sorting and tree testing"
            },
            {
              "id": "d",
              "text": "Gestalt closure and figure-ground"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Hick's Law (decision time increases with options) and cognitive load theory (working memory is limited) both predict that too many equal-weight choices cause decision paralysis."
        },
        {
          "id": "ux-design-101-l10-q3",
          "text": "After conducting an open card sort, a UX designer should:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately begin visual design"
            },
            {
              "id": "b",
              "text": "Analyze how participants grouped items and use the patterns to inform the site's information architecture"
            },
            {
              "id": "c",
              "text": "Discard the results because users don't understand IA"
            },
            {
              "id": "d",
              "text": "Run an A/B test on color schemes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Card sort results reveal users' mental models — the groupings and labels they create inform navigation structure and category naming for the IA."
        },
        {
          "id": "ux-design-101-l10-q4",
          "text": "The WCAG 'Operable' principle ensures that:",
          "skillId": "ux-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "All images have alternative text"
            },
            {
              "id": "b",
              "text": "Interface elements can be used via keyboard, voice, or assistive technology — not just mouse"
            },
            {
              "id": "c",
              "text": "Content is available in multiple languages"
            },
            {
              "id": "d",
              "text": "The website loads in under 3 seconds"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Operable means all functionality is available via keyboard and assistive technologies — ensuring users with motor impairments can interact with every element."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    }
  ]
};
