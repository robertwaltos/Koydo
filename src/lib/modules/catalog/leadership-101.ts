import type { LearningModule } from "@/lib/modules/types";

export const leadership_101_Module: LearningModule = {
  "id": "leadership-101",
  "title": "Leadership Foundations",
  "description": "Explore the core principles that distinguish effective leaders from ordinary managers. Master early leadership theories, situational models, and diverse leadership styles while building self-awareness as the foundation for your personal leadership journey.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "leadership",
    "enriched-from-epub"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Distinguish between management and leadership",
    "Summarize early leadership theories including trait, behavioral, and Great Man approaches",
    "Apply Hersey-Blanchard situational leadership to real scenarios",
    "Explain path-goal theory and its practical implications",
    "Compare autocratic, democratic, and laissez-faire leadership styles",
    "Assess personal leadership strengths through self-awareness tools",
    "Design an initial personal leadership development plan"
  ],
  "lessons": [
    {
      "id": "leadership-101-l01",
      "title": "Management vs. Leadership",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define leadership and management as distinct functions",
        "Explain why organizations need both managers and leaders",
        "Identify leadership behaviors in everyday workplace situations"
      ],
      "chunks": [
        {
          "id": "leadership-101-l01-c1",
          "title": "Defining Management and Leadership",
          "content": "Management and leadership are two essential functions for any successful organization. Management is the process of dealing with complexity; it brings order and predictability to a situation. Core management activities include planning, budgeting, organizing, staffing, and problem-solving. Think of a manager as the ship's engineer, ensuring the engine runs smoothly and all systems are operational.\n\nIn contrast, leadership is about coping with change. Leaders set a direction, develop a vision for the future, and align people by communicating this vision and inspiring them to overcome hurdles. The leader is the ship's captain, charting the course and motivating the crew to sail toward a new destination. As leadership expert John Kotter explains, management is about navigating complexity, while leadership is about navigating change. Understanding this distinction is the first step toward developing both skill sets."
        },
        {
          "id": "leadership-101-l01-c2",
          "title": "Why Organizations Need Both",
          "content": "For an organization to thrive, it needs a healthy balance of strong management and effective leadership. An organization with strong management but weak leadership can become rigid and bureaucratic, focused on rules and procedures at the expense of innovation. Conversely, an organization with strong leadership but weak management may have a compelling vision but descend into chaos, lacking the systems and processes to make that vision a reality. The most successful organizations cultivate leaders who can manage and managers who can lead. This integration ensures that the organization is both efficient in its current operations and adaptive to future challenges, creating a work environment that is both productive and innovative."
        },
        {
          "id": "leadership-101-l01-c3",
          "title": "Recognizing Leadership in Action",
          "content": "Leadership is not confined to a formal title or a corner office; it is a behavior that can be demonstrated by anyone. Leadership emerges whenever someone takes the initiative to inspire positive change, unite a group around a shared goal, or challenge the status quo in a constructive way. For example, a team member who identifies a more efficient workflow and persuades their colleagues to adopt it is demonstrating leadership. Recognizing that leadership is a behavior, not a position, is a crucial mindset shift. It empowers you to develop your own leadership skills and to see the leadership potential in others, fostering a more collaborative and dynamic team culture."
        },
        {
          "id": "leadership-101-l01-c4",
          "title": "Covey's Principle-Centered Leadership",
          "content": "Stephen Covey, in 'The 7 Habits of Highly Effective People,' provides a powerful framework for personal leadership. He distinguishes between the 'Personality Ethic,' which focuses on surface-level techniques and public image, and the 'Character Ethic,' which is built on a foundation of timeless principles like integrity, fairness, and service. Covey argues that true leadership stems from character.\n\nHis seven habits guide a journey from dependence to interdependence. Habits 1-3 (Be Proactive, Begin with the End in Mind, Put First Things First) focus on self-mastery and moving from dependence to independence. Habits 4-6 (Think Win-Win, Seek First to Understand, Then to Be Understood, Synergize) focus on collaboration and achieving interdependence with others. Finally, Habit 7 (Sharpen the Saw) emphasizes continuous renewal. Covey's work teaches that effective leadership is an inside-out process, starting with one's own character and principles."
        }
      ],
      "flashcards": [
        {
          "id": "leadership-101-l01-f1",
          "front": "Management (Kotter's view)",
          "back": "The process of coping with complexity through planning, organizing, staffing, and controlling to produce orderly, consistent results."
        },
        {
          "id": "leadership-101-l01-f2",
          "front": "Leadership (Kotter's view)",
          "back": "The process of coping with change by setting direction, aligning people, and motivating and inspiring them toward a shared vision."
        },
        {
          "id": "leadership-101-l01-f3",
          "front": "Leadership as behavior vs. position",
          "back": "Leadership is an influence process exercised through actions, not a formal title. Anyone can demonstrate leadership regardless of their role."
        },
        {
          "id": "leadership-101-l01-f4",
          "front": "Character Ethic vs. Personality Ethic (Covey)",
          "back": "The Character Ethic grounds leadership in enduring principles like integrity and fairness. The Personality Ethic relies on superficial techniques and image. Covey argues only the Character Ethic creates lasting effectiveness."
        },
        {
          "id": "leadership-101-l01-f5",
          "front": "Covey's 7 Habits Journey",
          "back": "Habits 1-3 achieve independence (self-mastery). Habits 4-6 achieve interdependence (teamwork). Habit 7 sustains renewal."
        }
      ],
      "learningAids": [
        {
          "id": "leadership-101-l01-a1",
          "type": "image",
          "title": "Management vs. Leadership",
          "content": "A Venn diagram showing the overlapping and distinct functions of management (planning, budgeting, organizing) and leadership (setting vision, motivating, inspiring change)."
        }
      ]
    },
    {
      "id": "leadership-101-l02",
      "title": "Early Leadership Theories",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Describe the Great Man theory and its historical context",
        "Explain trait theory and its key findings",
        "Outline behavioral theories including the Ohio State and Michigan studies"
      ],
      "chunks": [
        {
          "id": "leadership-101-l02-c1",
          "title": "Great Man Theory",
          "content": "The Great Man theory, popularized by Thomas Carlyle in the 1840s, was one of the first attempts to understand leadership. It proposed that leaders are born, not made. This theory suggests that history is shaped by the influence of extraordinary individuals, or 'Great Men,' who possess innate qualities that destine them for leadership. Historical figures like Napoleon Bonaparte or Abraham Lincoln were often cited as examples. While this theory has been largely discredited for its simplicity and for ignoring the role of context and environment, it was a crucial first step. It sparked the fundamental debate that continues today: Are leaders born or are they developed?"
        },
        {
          "id": "leadership-101-l02-c2",
          "title": "Trait Theory",
          "content": "Evolving from the Great Man theory, trait theory shifted the focus to identifying the specific personal characteristics, or traits, that effective leaders share. Researchers like Ralph Stogdill analyzed numerous studies to find a consistent set of leadership traits. While no definitive list emerged, key traits often associated with successful leaders include intelligence, self-confidence, determination, integrity, and sociability. Modern research, such as the Big Five personality framework, has linked traits like extraversion, conscientiousness, and openness to experience with leadership effectiveness. However, trait theory's main limitation is that it overlooks the situation; possessing these traits doesn't guarantee success in every context."
        },
        {
          "id": "leadership-101-l02-c3",
          "title": "Behavioral Theories",
          "content": "By the 1950s, researchers grew frustrated with the limitations of trait theory and shifted their focus from *who* leaders are to *what* leaders *do*. This led to behavioral theories. Two major research programs were pivotal. The Ohio State University studies identified two key leadership behaviors: 'initiating structure' (task-oriented behaviors like organizing work and defining roles) and 'consideration' (relationship-oriented behaviors like building trust and respect). Similarly, the University of Michigan studies identified 'production orientation' (focus on tasks) and 'employee orientation' (focus on people). This shift was revolutionary because it suggested that leadership is a set of behaviors that can be learned and developed, rather than a collection of innate traits."
        }
      ],
      "flashcards": [
        {
          "id": "leadership-101-l02-f1",
          "front": "Great Man Theory",
          "back": "The belief that leaders are born with innate, extraordinary qualities that destine them for influence, popularized by Thomas Carlyle."
        },
        {
          "id": "leadership-101-l02-f2",
          "front": "Trait Theory of Leadership",
          "back": "An approach that seeks to identify specific personal characteristics (e.g., intelligence, confidence, integrity) that predict leadership effectiveness."
        },
        {
          "id": "leadership-101-l02-f3",
          "front": "Ohio State Leadership Dimensions",
          "back": "Two key leader behaviors: Initiating Structure (task-oriented) and Consideration (relationship-oriented)."
        },
        {
          "id": "leadership-101-l02-f4",
          "front": "Key Shift from Trait to Behavioral Theory",
          "back": "The focus moved from identifying innate personal characteristics of leaders to identifying observable behaviors that could be learned and developed."
        }
      ],
      "learningAids": [
        {
          "id": "leadership-101-l02-a1",
          "type": "image",
          "title": "Evolution of Leadership Theories",
          "content": "A timeline graphic showing the progression from Great Man Theory to Trait Theory to Behavioral Theories, highlighting the key shift in focus for each."
        }
      ]
    },
    {
      "id": "leadership-101-l03",
      "title": "Situational Leadership",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Explain the Hersey-Blanchard situational leadership model",
        "Match leadership styles to follower readiness levels",
        "Apply situational leadership to workplace scenarios"
      ],
      "chunks": [
        {
          "id": "leadership-101-l03-c1",
          "title": "The Situational Leadership Model",
          "content": "Developed by Paul Hersey and Ken Blanchard, the Situational Leadership® Model is a powerful framework built on a simple premise: there is no single best way to lead. Effective leadership is adaptive. The model suggests that leaders should adjust their style to fit the development level, or readiness, of their followers for a specific task. Follower readiness is determined by two factors: their competence (ability, knowledge, and skill) and their commitment (confidence and motivation). By diagnosing a follower's readiness, a leader can apply the most effective leadership style to help them succeed."
        },
        {
          "id": "leadership-101-l03-c2",
          "title": "Four Leadership Styles",
          "content": "The model outlines four distinct leadership styles based on the level of task behavior (directive) and relationship behavior (supportive) a leader provides:\n\n1.  **Telling (S1):** High task, low relationship. The leader provides specific instructions and closely supervises performance. This is for followers who are unable but willing or confident (low competence, high commitment).\n2.  **Selling (S2):** High task, high relationship. The leader explains decisions and provides opportunities for clarification. This is for followers who are unable but willing or motivated (low competence, low commitment).\n3.  **Participating (S3):** Low task, high relationship. The leader shares ideas and facilitates in decision-making. This is for followers who are able but unwilling or insecure (high competence, low commitment).\n4.  **Delegating (S4):** Low task, low relationship. The leader turns over responsibility for decisions and implementation. This is for followers who are both able and willing (high competence, high commitment)."
        },
        {
          "id": "leadership-101-l03-c3",
          "title": "Applying Situational Leadership",
          "content": "The key to situational leadership is flexibility. For example, with a new, enthusiastic employee, a leader might start with a 'Selling' or 'Telling' style, providing clear direction and support. As that employee gains skills and confidence, the leader should gradually shift their style toward 'Participating' and eventually 'Delegating.' Conversely, if a seasoned, high-performing employee is assigned a completely new and challenging task, they might temporarily move to a lower readiness level. The effective leader recognizes this and adjusts their style to provide more direction or support as needed. The goal is to meet your followers where they are and provide what they need to succeed and grow."
        }
      ],
      "flashcards": [
        {
          "id": "leadership-101-l03-f1",
          "front": "Situational Leadership®",
          "back": "A model by Hersey and Blanchard proposing that leaders adapt their style (telling, selling, participating, delegating) to the development level of their followers."
        },
        {
          "id": "leadership-101-l03-f2",
          "front": "Follower Readiness",
          "back": "The combination of competence (ability, skill) and commitment (confidence, motivation) that determines which leadership style is most appropriate for a given task."
        },
        {
          "id": "leadership-101-l03-f3",
          "front": "Participating Style (S3)",
          "back": "High relationship, low task behavior. Used when followers are capable but lack confidence or motivation. The leader facilitates and supports."
        },
        {
          "id": "leadership-101-l03-f4",
          "front": "Delegating Style (S4)",
          "back": "Low relationship, low task behavior. Used when followers are highly competent and committed. The leader empowers them with autonomy."
        }
      ],
      "learningAids": [
        {
          "id": "leadership-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        },
        {
          "id": "leadership-101-l03-a2",
          "type": "image",
          "title": "Situational Leadership® Model",
          "content": "A visual grid with two axes (Task Behavior and Relationship Behavior) showing the four leadership styles (S1-Telling, S2-Selling, S3-Participating, S4-Delegating) and their corresponding follower readiness levels."
        }
      ]
    },
    {
      "id": "leadership-101-l04",
      "title": "Path-Goal Theory",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain the core premise of path-goal theory",
        "Describe the four leader behaviors in the model",
        "Identify how environmental and follower factors shape style selection"
      ],
      "chunks": [
        {
          "id": "leadership-101-l04-c1",
          "title": "Path-Goal Theory Foundations",
          "content": "Developed by Robert House, path-goal theory is a contingency model that focuses on leader behavior and follower motivation. The theory's core idea is that a leader's primary job is to motivate followers by clarifying the 'path' to their work 'goals' and removing obstacles along the way. The leader's role is to complement the work environment and compensate for any deficiencies. By providing necessary support, guidance, and resources, the leader enhances follower satisfaction and performance, making the journey to the goal clearer and easier."
        },
        {
          "id": "leadership-101-l04-c2",
          "title": "Four Leader Behaviors",
          "content": "Path-goal theory specifies four types of leader behaviors that can be used interchangeably depending on the situation:\n\n1.  **Directive:** The leader provides clear expectations, specific guidance, and a schedule for tasks. This is most effective when tasks are ambiguous or stressful.\n2.  **Supportive:** The leader is friendly, approachable, and shows concern for the well-being of followers. This is best for structured, routine, or frustrating tasks.\n3.  **Participative:** The leader consults with followers and uses their suggestions before making a decision. This is ideal when followers are experienced and their input is valuable.\n4.  **Achievement-oriented:** The leader sets challenging goals and expects followers to perform at their highest level, showing confidence in their abilities. This works well in complex, challenging work environments."
        },
        {
          "id": "leadership-101-l04-c3",
          "title": "Contingency Factors",
          "content": "The effectiveness of each leadership behavior depends on two types of contingency factors: follower characteristics and environmental factors. Follower characteristics include their need for affiliation, desire for control (locus of control), and perceived ability. For example, a follower with a high need for structure will appreciate a directive leader. Environmental factors include the task structure, the formal authority system, and the primary work group. For instance, if a task is already highly structured and routine, adding more directive leadership would be redundant and could decrease satisfaction. An effective leader analyzes these factors and chooses the behavior that best fits the situation to motivate their team."
        }
      ],
      "flashcards": [
        {
          "id": "leadership-101-l04-f1",
          "front": "Path-Goal Theory (Robert House)",
          "back": "A leadership model where leaders motivate followers by clarifying the path to goals, removing obstacles, and providing support matched to follower and environmental needs."
        },
        {
          "id": "leadership-101-l04-f2",
          "front": "Four Path-Goal Leader Behaviors",
          "back": "Directive (clear guidance), Supportive (concern for well-being), Participative (shared decision-making), and Achievement-oriented (challenging goals)."
        },
        {
          "id": "leadership-101-l04-f3",
          "front": "Path-Goal Contingency Factors",
          "back": "Follower characteristics (e.g., ability, locus of control) and environmental characteristics (e.g., task structure, authority system) that determine which leader behavior is most effective."
        }
      ],
      "learningAids": [
        {
          "id": "leadership-101-l04-a1",
          "type": "image",
          "title": "Path-Goal Theory Model",
          "content": "A flowchart showing how a leader chooses a behavior (Directive, Supportive, etc.) based on Follower and Environmental factors to clear the path to the follower's goals and desired outcomes."
        }
      ]
    },
    {
      "id": "leadership-101-l05",
      "title": "Checkpoint: Leadership Theories & Models",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "leadership-101-l05-q1",
          "text": "What is the primary distinction between management and leadership according to John Kotter?",
          "options": [
            {
              "id": "a",
              "text": "Management copes with complexity; leadership copes with change"
            },
            {
              "id": "b",
              "text": "Management is for senior executives; leadership is for frontline workers"
            },
            {
              "id": "c",
              "text": "Management focuses on people; leadership focuses on processes"
            },
            {
              "id": "d",
              "text": "Management is informal; leadership is formal and hierarchical"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Kotter argued that management produces order and consistency through planning and controlling, while leadership produces change and movement through vision, alignment, and inspiration."
        },
        {
          "id": "leadership-101-l05-q2",
          "text": "In Hersey-Blanchard's model, which leadership style is appropriate for a follower who is able but unwilling or insecure?",
          "options": [
            {
              "id": "a",
              "text": "Telling"
            },
            {
              "id": "b",
              "text": "Selling"
            },
            {
              "id": "c",
              "text": "Participating"
            },
            {
              "id": "d",
              "text": "Delegating"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The participating style (S3) uses high relationship and low task behavior to re-engage capable followers who lack confidence or motivation by involving them in decisions."
        },
        {
          "id": "leadership-101-l05-q3",
          "text": "Which early leadership approach shifted focus from who leaders ARE to what leaders DO?",
          "options": [
            {
              "id": "a",
              "text": "Great Man theory"
            },
            {
              "id": "b",
              "text": "Trait theory"
            },
            {
              "id": "c",
              "text": "Behavioral theory"
            },
            {
              "id": "d",
              "text": "Path-goal theory"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Behavioral theories (Ohio State and Michigan studies) moved the focus from innate traits to observable behaviors — initiating structure and consideration — demonstrating that leadership can be learned."
        },
        {
          "id": "leadership-101-l05-q4",
          "text": "According to path-goal theory, when should a leader use a directive style?",
          "options": [
            {
              "id": "a",
              "text": "When tasks are routine and followers are highly experienced"
            },
            {
              "id": "b",
              "text": "When tasks are ambiguous and followers need clear guidance"
            },
            {
              "id": "c",
              "text": "When followers are stressed and need emotional support"
            },
            {
              "id": "d",
              "text": "When followers desire autonomy in decision-making"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Directive leadership provides specific guidance and clear expectations, which is most effective when task structure is low and followers are uncertain about what to do or how to do it."
        }
      ]
    },
    {
      "id": "leadership-101-l06",
      "title": "Leadership Styles in Practice",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Compare autocratic, democratic, and laissez-faire leadership styles",
        "Identify situations where each style is most effective",
        "Connect leadership styles to modern motivation theory"
      ],
      "chunks": [
        {
          "id": "leadership-101-l06-c1",
          "title": "Autocratic Leadership",
          "content": "Autocratic leadership, also known as authoritarian leadership, is a style where the leader holds all decision-making power and provides clear expectations for what needs to be done, when it should be done, and how it should be done. This style is most effective in situations requiring rapid decisions, such as in a crisis, or when working with inexperienced teams who need clear direction. However, this top-down approach can stifle creativity, lower team morale, and create a dependency on the leader. While it can be productive in the short term, it often leads to lower job satisfaction and higher turnover over time."
        },
        {
          "id": "leadership-101-l06-c2",
          "title": "Democratic Leadership",
          "content": "Democratic leadership, or participative leadership, involves team members in the decision-making process. The leader encourages discussion and considers feedback from the team before making a final decision. This approach fosters a sense of ownership and commitment, leading to higher quality work, greater creativity, and increased job satisfaction. The primary drawback is that it can be time-consuming, as building consensus takes longer than a unilateral decision. This style is most effective when working with skilled, knowledgeable teams on complex problems where diverse perspectives can lead to better outcomes."
        },
        {
          "id": "leadership-101-l06-c3",
          "title": "Laissez-Faire Leadership",
          "content": "Laissez-faire leadership is a hands-off approach where leaders delegate decision-making authority to their team members. This style provides the most freedom and autonomy. It works best with teams of highly skilled, self-motivated experts, such as research scientists or senior consultants, who are capable of managing their own work. However, when applied to teams that lack the necessary skills or motivation, this style can lead to confusion, low productivity, and a lack of direction. An effective laissez-faire leader remains available as a resource and provides support when needed, rather than being completely absent."
        },
        {
          "id": "leadership-101-l06-c4",
          "title": "Pink's Motivation Framework",
          "content": "Modern leadership styles are deeply connected to motivation. In his book 'Drive,' Daniel Pink argues that for complex, creative work, traditional 'carrot and stick' motivators are ineffective. Instead, he identifies three powerful intrinsic motivators that great leaders foster:\n\n1.  **Autonomy:** The desire to direct our own lives. Democratic and laissez-faire styles directly support autonomy.\n2.  **Mastery:** The urge to get better at something that matters. Leaders can support mastery by providing challenging work and opportunities for skill development.\n3.  **Purpose:** The yearning to do what we do in the service of something larger than ourselves. Leaders instill purpose by clearly communicating the vision and impact of the team's work.\n\nBy creating an environment that nurtures autonomy, mastery, and purpose, leaders can unlock higher levels of engagement and performance, moving beyond simple compliance to genuine commitment."
        }
      ],
      "flashcards": [
        {
          "id": "leadership-101-l06-f1",
          "front": "Autocratic Leadership",
          "back": "A style where the leader makes decisions unilaterally. Effective in crises but can suppress creativity and satisfaction."
        },
        {
          "id": "leadership-101-l06-f2",
          "front": "Democratic Leadership",
          "back": "A participative style involving team members in decisions. Produces higher quality work and satisfaction but can be slower."
        },
        {
          "id": "leadership-101-l06-f3",
          "front": "Laissez-Faire Leadership",
          "back": "A hands-off style granting maximum autonomy. Effective with highly skilled experts but can lead to confusion with less experienced teams."
        },
        {
          "id": "leadership-101-l06-f4",
          "front": "Autonomy, Mastery, Purpose (Daniel Pink)",
          "back": "Pink's three intrinsic motivators: Autonomy (self-direction), Mastery (improving at something meaningful), and Purpose (contributing to a larger cause)."
        }
      ],
      "learningAids": [
        {
          "id": "leadership-101-l06-a1",
          "type": "image",
          "title": "Leadership Styles Comparison",
          "content": "A table comparing Autocratic, Democratic, and Laissez-Faire styles across key dimensions: Decision-Making, Team Involvement, Best For, and Potential Downsides."
        }
      ]
    },
    {
      "id": "leadership-101-l07",
      "title": "Building Your Leadership Plan",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Reflect on personal leadership strengths and weaknesses",
        "Synthesize learnings from leadership models and theories",
        "Draft an initial personal leadership development plan"
      ],
      "chunks": [
        {
          "id": "leadership-101-l07-c1",
          "title": "Self-Assessment: Where Are You Now?",
          "content": "Effective leadership begins with self-awareness. Before you can grow, you need an honest understanding of your starting point. Think about your natural tendencies. When you lead a project, do you focus more on the task (initiating structure) or the people (consideration)? What is your default leadership style under pressure—autocratic, democratic, or laissez-faire? Consider a recent situation where you took the lead. Which situational leadership style did you use? Was it appropriate for the team member's readiness? Use the concepts from this module as a mirror to reflect on your current behaviors, strengths, and areas for improvement."
        },
        {
          "id": "leadership-101-l07-c2",
          "title": "Defining Your Leadership Vision",
          "content": "With a clear picture of your present, you can now define your future. Drawing on Stephen Covey's habit, 'Begin with the End in Mind,' what kind of leader do you aspire to be? What values will guide your decisions? Do you want to be known as a leader who empowers others, drives innovation, or builds resilient teams? Write a brief personal leadership vision statement. This isn't about a title or position; it's about the impact you want to have on others. For example: 'My vision is to be a leader who fosters a collaborative environment where every team member feels empowered to contribute their best work and grow their skills.'"
        },
        {
          "id": "leadership-101-l07-c3",
          "title": "Creating Actionable Steps",
          "content": "A vision without a plan is just a dream. Now, translate your vision into concrete actions. Based on your self-assessment, identify one or two specific skills or behaviors you want to develop. Make your goals SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. For example, instead of 'be a better listener,' a SMART goal would be: 'For the next month, in every team meeting, I will practice active listening by summarizing a colleague's point before sharing my own opinion.' This creates a clear, actionable step that connects your daily behavior to your long-term leadership vision."
        }
      ],
      "flashcards": [
        {
          "id": "leadership-101-l07-f1",
          "front": "Personal Leadership Vision",
          "back": "A statement that defines the kind of leader you aspire to be, focusing on your values and the impact you want to have on others."
        },
        {
          "id": "leadership-101-l07-f2",
          "front": "SMART Goals",
          "back": "A framework for setting effective goals that are Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
          "id": "leadership-101-l07-f3",
          "front": "First Step in Leadership Development",
          "back": "Self-awareness. Understanding your current strengths, weaknesses, and default behaviors is the foundation for growth."
        }
      ],
      "learningAids": [
        {
          "id": "leadership-101-l07-a1",
          "type": "document",
          "title": "Personal Leadership Plan Template",
          "content": "A downloadable worksheet to guide learners through self-assessment, vision setting, and creating actionable development goals."
        }
      ]
    },
    {
      "id": "leadership-101-l08",
      "title": "Final Assessment: Leadership Foundations",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "leadership-101-l08-q1",
          "text": "Which leadership theory was criticized for ignoring situational factors and assuming leaders are born with fixed traits?",
          "options": [
            {
              "id": "a",
              "text": "Behavioral theory"
            },
            {
              "id": "b",
              "text": "Situational leadership"
            },
            {
              "id": "c",
              "text": "Great Man / Trait theory"
            },
            {
              "id": "d",
              "text": "Path-goal theory"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Great Man and trait theories assumed leaders possess innate, fixed qualities and ignored the role of context, situation, and follower characteristics in determining leadership effectiveness."
        },
        {
          "id": "leadership-101-l08-q2",
          "text": "A manager notices a highly skilled but unmotivated employee. According to Situational Leadership®, which style should they adopt?",
          "options": [
            {
              "id": "a",
              "text": "Telling (S1)"
            },
            {
              "id": "b",
              "text": "Selling (S2)"
            },
            {
              "id": "c",
              "text": "Participating (S3)"
            },
            {
              "id": "d",
              "text": "Delegating (S4)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The employee has high competence but low commitment (able but unwilling). The 'Participating' style, with high relationship and low task focus, is designed to support and re-engage them."
        },
        {
          "id": "leadership-101-l08-q3",
          "text": "In path-goal theory, which leader behavior is best suited for stressful, routine tasks to increase team morale?",
          "options": [
            {
              "id": "a",
              "text": "Directive"
            },
            {
              "id": "b",
              "text": "Supportive"
            },
            {
              "id": "c",
              "text": "Participative"
            },
            {
              "id": "d",
              "text": "Achievement-oriented"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Supportive leadership focuses on the well-being of followers and is most effective for increasing satisfaction and morale when tasks are structured, stressful, or frustrating."
        },
        {
          "id": "leadership-101-l08-q4",
          "text": "What is the foundational first step in creating a personal leadership development plan?",
          "options": [
            {
              "id": "a",
              "text": "Asking for a promotion"
            },
            {
              "id": "b",
              "text": "Writing a vision statement"
            },
            {
              "id": "c",
              "text": "Conducting a self-assessment"
            },
            {
              "id": "d",
              "text": "Finding a mentor"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective leadership development begins with self-awareness. You must first understand your current strengths, weaknesses, and tendencies before you can create a meaningful plan for growth."
        }
      ]
    }
  ]
};
