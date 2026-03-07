import type { LearningModule } from "@/lib/modules/types";

export const organizational_behavior_301_Module: LearningModule = {
  "id": "organizational-behavior-301",
  "title": "Leadership & Organizational Culture",
  "description": "Examine the major theories of leadership from trait-based to transformational approaches, and understand how organizational culture shapes behavior. Explore emotional intelligence, servant leadership, psychological safety, and Schein's cultural model.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "organizational-behavior"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Compare trait, behavioral, and contingency theories of leadership",
    "Distinguish between transformational and transactional leadership",
    "Explain the principles and impact of servant leadership",
    "Apply Goleman's emotional intelligence framework to leadership effectiveness",
    "Analyze organizational culture using Schein's three-level model",
    "Evaluate strategies for culture change in organizations",
    "Describe the concept of psychological safety and its effects on team performance"
  ],
  "lessons": [
    {
      "id": "organizational-behavior-301-l01",
      "title": "Trait and Behavioral Leadership Theories",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Describe the trait approach to leadership and its limitations",
        "Explain the behavioral approach including Ohio State and Michigan studies",
        "Evaluate Blake and Mouton's Managerial Grid"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-301-l01-c1",
          "title": "The Trait Approach",
          "content": "Early leadership research focused on identifying innate qualities that differentiated leaders from non-leaders. This trait approach suggested that characteristics like intelligence, self-confidence, determination, integrity, and sociability were common among effective leaders. The core assumption was that leaders are born, not made. However, this perspective has significant limitations. It fails to account for situational variables, meaning it cannot explain why a leader with certain traits might succeed in one context but fail in another. Furthermore, it largely dismisses the possibility of leadership development. Despite these critiques, the trait approach was foundational, highlighting that certain personal attributes can indeed influence leadership emergence and effectiveness.",
          "visualPrompt": "A word cloud featuring key leadership traits like 'Integrity,' 'Confidence,' 'Intelligence,' and 'Sociability' in varying sizes."
        },
        {
          "id": "organizational-behavior-301-l01-c2",
          "title": "Behavioral Theories",
          "content": "Shifting focus from *who* leaders are to *what* leaders *do*, behavioral theories proposed that leadership effectiveness stems from specific, learnable behaviors. Seminal research from The Ohio State University identified two independent dimensions: 'initiating structure' (defining roles, organizing tasks) and 'consideration' (fostering trust and respecting team members' ideas). Similarly, the University of Michigan studies distinguished between 'production-oriented' leaders (focused on task accomplishment) and 'employee-oriented' leaders (focused on interpersonal relationships and employee well-being). The critical insight from this research is that leadership is a skill that can be developed through training and experience, opening the door for widespread leadership development programs.",
          "visualPrompt": "A 2x2 grid with 'Initiating Structure' on the Y-axis and 'Consideration' on the X-axis, showing four quadrants of leader behavior."
        },
        {
          "id": "organizational-behavior-301-l01-c3",
          "title": "Blake and Mouton's Managerial Grid",
          "content": "The Managerial Grid, developed by Robert Blake and Jane Mouton, provides a framework for understanding leadership styles based on two dimensions: concern for production and concern for people. Each dimension is rated on a 1-to-9 scale, creating a grid with five distinct leadership styles. These include Impoverished Management (1,1), with low concern for both; Authority-Compliance (9,1), with high concern for production but low for people; Country Club Management (1,9), with high concern for people but low for production; and Middle-of-the-Road (5,5), which balances both concerns. The model posits that Team Management (9,9), characterized by high concern for both people and production, is the most effective style. While a valuable tool for self-assessment, critics argue the grid oversimplifies leadership by not accounting for situational context.",
          "visualPrompt": "An illustration of the 9x9 Managerial Grid, clearly labeling the five key leadership styles at their respective coordinates (1,1), (9,1), (1,9), (5,5), and (9,9)."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-301-l01-f1",
          "front": "Trait approach to leadership",
          "back": "Identifies innate qualities (intelligence, confidence, integrity) that predict leadership emergence — limited because it ignores situational factors and implies leadership cannot be developed."
        },
        {
          "id": "organizational-behavior-301-l01-f2",
          "front": "Ohio State leadership dimensions",
          "back": "Initiating structure (organizing work, defining roles) and Consideration (showing concern for people, building trust) — two independent dimensions of leader behavior."
        },
        {
          "id": "organizational-behavior-301-l01-f3",
          "front": "Blake & Mouton's Managerial Grid",
          "back": "Plots leadership on concern for people vs. concern for production (1-9 each). Team Management (9,9) is considered most effective — high on both dimensions."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-301-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "organizational-behavior-301-l02",
      "title": "Contingency Leadership Theories",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain Fiedler's contingency model",
        "Describe Hersey and Blanchard's situational leadership",
        "Apply path-goal theory to leadership scenarios"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-301-l02-c1",
          "title": "Fiedler's Contingency Model",
          "content": "Fred Fiedler's Contingency Model was a major step forward, proposing that leadership effectiveness depends on the match between a leader's style and the favorableness of the situation. Fiedler identified two leadership styles—task-oriented and relationship-oriented—which he argued are relatively fixed. Style is measured using the Least Preferred Coworker (LPC) scale. Situational favorableness is determined by three factors: leader-member relations, task structure, and the leader's position power. The model predicts that task-oriented leaders are most effective in highly favorable or highly unfavorable situations, while relationship-oriented leaders excel in moderately favorable situations. Crucially, Fiedler suggested that instead of changing a leader's style, organizations should engineer the situation to fit the leader.",
          "visualPrompt": "A flowchart diagram showing the three situational factors (Leader-Member Relations, Task Structure, Position Power) leading to a 'Situational Favorableness' score, which then matches with either 'Task-Oriented' or 'Relationship-Oriented' leadership for optimal effectiveness."
        },
        {
          "id": "organizational-behavior-301-l02-c2",
          "title": "Situational Leadership Theory",
          "content": "Developed by Paul Hersey and Ken Blanchard, the Situational Leadership Theory posits that effective leaders must adapt their style to the 'readiness' or development level of their followers. Follower readiness is a combination of their ability and willingness to perform a specific task. The model outlines four leadership styles: Telling (high task, low relationship) for followers with low readiness; Selling (high task, high relationship) for those unable but willing; Participating (low task, high relationship) for those able but unwilling or insecure; and Delegating (low task, low relationship) for followers with high readiness. This dynamic model is widely used in corporate training for its intuitive appeal, though it has faced criticism for a lack of robust empirical validation.",
          "visualPrompt": "A four-quadrant model with 'Task Behavior' on the Y-axis and 'Relationship Behavior' on the X-axis. Each quadrant is labeled with a leadership style (Telling, Selling, Participating, Delegating) and matched to a corresponding follower readiness level (R1, R2, R3, R4)."
        },
        {
          "id": "organizational-behavior-301-l02-c3",
          "title": "Path-Goal Theory",
          "content": "Robert House's Path-Goal Theory suggests that a leader's primary role is to motivate followers by clarifying the path to their goals and removing obstacles. The leader must choose a behavior that best complements the follower's characteristics and the environmental context. The theory specifies four leadership behaviors: Directive (providing clear expectations), Supportive (showing concern for followers' well-being), Participative (involving followers in decision-making), and Achievement-Oriented (setting challenging goals). For instance, a directive style is effective when tasks are ambiguous, while a supportive style is beneficial in stressful environments. The leader's flexibility in applying these behaviors is key to enhancing follower motivation, satisfaction, and performance.",
          "visualPrompt": "An infographic showing a leader character at a fork in the road, choosing one of four paths (labeled Directive, Supportive, Participative, Achievement-Oriented) to help a follower character navigate around obstacles (like 'Ambiguity' or 'Low Motivation') to reach a goal."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-301-l02-f1",
          "front": "Fiedler's contingency model",
          "back": "Leadership effectiveness depends on matching leader style (task vs. relationship oriented) to situational favorableness (leader-member relations, task structure, position power). Change the situation, not the leader."
        },
        {
          "id": "organizational-behavior-301-l02-f2",
          "front": "Hersey & Blanchard's situational leadership",
          "back": "Adapt style to follower readiness: Telling (low readiness), Selling (moderate-low), Participating (moderate-high), Delegating (high readiness)."
        },
        {
          "id": "organizational-behavior-301-l02-f3",
          "front": "Path-goal theory (House)",
          "back": "Leaders motivate by clarifying paths to goals and removing obstacles — choosing directive, supportive, participative, or achievement-oriented behavior based on follower and environmental factors."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-301-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "organizational-behavior-301-l03",
      "title": "Transformational and Servant Leadership",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Contrast transformational and transactional leadership",
        "Identify the four components of transformational leadership",
        "Explain servant leadership and its organizational impact"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-301-l03-c1",
          "title": "Transactional Leadership",
          "content": "Transactional leadership, as conceptualized by James MacGregor Burns, focuses on the exchanges between leaders and followers. This style is grounded in clarifying roles, setting goals, and providing rewards or corrective actions based on performance. Its primary mechanisms are 'contingent reward,' where followers are rewarded for meeting agreed-upon objectives, and 'management by exception,' where leaders intervene only when standards are not met. While highly effective for maintaining stability and ensuring consistent performance on routine tasks, transactional leadership typically does not inspire followers to go beyond their basic job requirements or foster deep organizational commitment.",
          "visualPrompt": "A simple diagram of a balance scale, with 'Task Performance' on one side and 'Rewards/Consequences' on the other, illustrating the exchange-based nature of the leadership style."
        },
        {
          "id": "organizational-behavior-301-l03-c2",
          "title": "Transformational Leadership",
          "content": "In contrast, transformational leaders inspire and motivate followers to transcend their own self-interests for the good of the organization. They elevate followers' commitment and performance to extraordinary levels. Researcher Bernard Bass expanded on this concept, identifying four key components known as the 'Four I's': Idealized Influence (acting as a charismatic role model), Inspirational Motivation (articulating a compelling vision), Intellectual Stimulation (challenging assumptions and encouraging creativity), and Individualized Consideration (providing personal support and mentorship). Research consistently links transformational leadership to higher follower satisfaction, motivation, and performance. Satya Nadella's cultural shift at Microsoft from a 'know-it-all' to a 'learn-it-all' mindset is a prime example.",
          "visualPrompt": "A central icon representing a leader, with four radiating spokes each leading to an icon representing one of the 'Four I's': a star for Idealized Influence, a megaphone for Inspirational Motivation, a lightbulb for Intellectual Stimulation, and a helping hand for Individualized Consideration."
        },
        {
          "id": "organizational-behavior-301-l03-c3",
          "title": "Servant Leadership",
          "content": "Coined by Robert Greenleaf, servant leadership inverts the traditional leadership hierarchy. It posits that the leader's primary role is to serve others—their followers, customers, and the community—first. This approach prioritizes the growth and well-being of people. Key characteristics of servant leaders include listening, empathy, stewardship, and a commitment to the personal and professional development of their team. Instead of the team working to serve the leader, the leader exists to serve the team. Companies like Southwest Airlines and Starbucks have incorporated elements of servant leadership into their cultures. Studies suggest this style fosters higher levels of trust, organizational citizenship behavior, and team effectiveness, particularly in service-oriented environments.",
          "visualPrompt": "An inverted pyramid diagram. The top, widest section is labeled 'Customers & Community,' the middle section 'Employees/Team,' and the bottom, pointed section is labeled 'Servant Leader,' visually representing that the leader supports everyone else."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-301-l03-f1",
          "front": "Transactional vs. transformational leadership",
          "back": "Transactional: manage through exchanges (rewards for performance). Transformational: elevate followers beyond self-interest through vision, inspiration, intellectual stimulation, and individual attention."
        },
        {
          "id": "organizational-behavior-301-l03-f2",
          "front": "Bass's Four I's of transformational leadership",
          "back": "Idealized Influence (role model), Inspirational Motivation (compelling vision), Intellectual Stimulation (encourage innovation), Individualized Consideration (mentor each person)."
        },
        {
          "id": "organizational-behavior-301-l03-f3",
          "front": "Servant leadership (Greenleaf)",
          "back": "Leaders serve followers first — emphasizing listening, empathy, stewardship, and development. Inverts traditional hierarchy; linked to higher trust and organizational citizenship behavior."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "organizational-behavior-301-l04",
      "title": "Emotional Intelligence and Leadership",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Define emotional intelligence and its components",
        "Explain Goleman's EI framework for leadership",
        "Assess how emotional intelligence impacts organizational outcomes"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-301-l04-c1",
          "title": "What Is Emotional Intelligence?",
          "content": "Emotional intelligence (EI) is the capacity to recognize, understand, manage, and effectively use one's own emotions and the emotions of others. First defined by psychologists Peter Salovey and John Mayer, EI encompasses the ability to monitor feelings and use this emotional information to guide thinking and behavior. Unlike IQ, which is considered relatively stable throughout life, EI is a flexible set of skills that can be acquired and improved with practice, feedback, and self-reflection. This makes it a critical competency for effective leadership, as it underpins the ability to navigate complex social dynamics, build relationships, and inspire teams.",
          "visualPrompt": "A simple graphic comparing two brains. One is labeled 'IQ (Largely Fixed)' with a static, rigid pattern. The other is labeled 'EI (Developable)' with a dynamic, growing pattern inside."
        },
        {
          "id": "organizational-behavior-301-l04-c2",
          "title": "Goleman's Five Components",
          "content": "Daniel Goleman popularized EI in the business context, identifying five essential components for leadership. The first two are personal competencies: Self-awareness (knowing one's emotions and their effects) and Self-regulation (managing one's impulses and emotions). The third, Motivation, is an internal drive to achieve for the sake of achievement itself. The final two are social competencies: Empathy (understanding the emotional makeup of others) and Social Skill (proficiency in managing relationships and building networks). Goleman's research across nearly 200 companies concluded that for high-level leadership roles, EI was twice as important as technical skills and IQ combined.",
          "visualPrompt": "A hub-and-spoke diagram with 'Emotional Intelligence' in the center. Five spokes connect to icons representing each component: a mirror for Self-Awareness, a pause button for Self-Regulation, a mountain peak for Motivation, linked figures for Empathy, and a network graphic for Social Skill."
        },
        {
          "id": "organizational-behavior-301-l04-c3",
          "title": "EI in Practice",
          "content": "Leaders with high emotional intelligence excel at creating positive work climates, managing conflict constructively, and fostering psychological safety. Microsoft CEO Satya Nadella, for example, champions empathy as a core business asset, crediting his personal experiences for deepening his emotional awareness. Leaders can develop their EI through practices like reflective journaling, soliciting 360-degree feedback, mindfulness meditation, and executive coaching. However, it's important to acknowledge critiques of EI, including the potential overlap with personality traits and the risk of 'emotional manipulation' if not paired with strong ethics. Ultimately, authentic EI is about building genuine connection and fostering a supportive environment.",
          "visualPrompt": "A series of icons representing methods for developing EI: a journal, a 360-degree feedback chart, a person meditating, and two people in a coaching session."
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-301-l04-f1",
          "front": "Emotional intelligence (EI)",
          "back": "The ability to recognize, understand, manage, and effectively use emotions in oneself and others — originally defined by Salovey and Mayer, popularized by Goleman."
        },
        {
          "id": "organizational-behavior-301-l04-f2",
          "front": "Goleman's five EI components",
          "back": "Self-awareness, Self-regulation, Motivation (internal drive), Empathy, Social skill — EI was found twice as important as IQ and technical skill for leadership excellence."
        },
        {
          "id": "organizational-behavior-301-l04-f3",
          "front": "How to develop EI",
          "back": "Reflective journaling, 360-degree feedback, mindfulness practice, coaching, and deliberate attention to emotional dynamics in daily interactions."
        }
      ],
      "learningAids": [
        {
          "id": "organizational-behavior-301-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "organizational-behavior-301-l05",
      "title": "Checkpoint: Leadership Theories & Emotional Intelligence",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "organizational-behavior-301-l05-q1",
          "text": "According to Fiedler's contingency model, what should organizations do when a leader's style does not match the situation?",
          "options": [
            {
              "id": "a",
              "text": "Train the leader to adopt a different style"
            },
            {
              "id": "b",
              "text": "Change the situation to fit the leader's natural style"
            },
            {
              "id": "c",
              "text": "Replace the leader immediately"
            },
            {
              "id": "d",
              "text": "Ignore the mismatch and hope for the best"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fiedler argued that leadership style is relatively fixed, so organizations should engineer the situation (adjust task structure, position power, or team composition) to match the leader's style rather than trying to change the leader."
        },
        {
          "id": "organizational-behavior-301-l05-q2",
          "text": "Which of Bass's 'Four I's' involves encouraging followers to question assumptions and think creatively?",
          "options": [
            {
              "id": "a",
              "text": "Idealized Influence"
            },
            {
              "id": "b",
              "text": "Inspirational Motivation"
            },
            {
              "id": "c",
              "text": "Intellectual Stimulation"
            },
            {
              "id": "d",
              "text": "Individualized Consideration"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Intellectual Stimulation involves challenging followers to rethink problems, question assumptions, and approach old situations in new ways. Idealized Influence is role modeling, Inspirational Motivation is vision communication, and Individualized Consideration is personal mentoring."
        },
        {
          "id": "organizational-behavior-301-l05-q3",
          "text": "In Goleman's framework, which EI component involves understanding others' emotional states?",
          "options": [
            {
              "id": "a",
              "text": "Self-awareness"
            },
            {
              "id": "b",
              "text": "Self-regulation"
            },
            {
              "id": "c",
              "text": "Motivation"
            },
            {
              "id": "d",
              "text": "Empathy"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Empathy is the ability to understand and share others' emotional states — essential for managing relationships and leading effectively. Self-awareness is understanding one's own emotions, self-regulation is managing them, and motivation refers to internal drive."
        },
        {
          "id": "organizational-behavior-301-l05-q4",
          "text": "A leader who prioritizes followers' growth and well-being above their own status exemplifies:",
          "options": [
            {
              "id": "a",
              "text": "Transactional leadership"
            },
            {
              "id": "b",
              "text": "Laissez-faire leadership"
            },
            {
              "id": "c",
              "text": "Servant leadership"
            },
            {
              "id": "d",
              "text": "Autocratic leadership"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Servant leadership (Greenleaf) puts followers' needs first — prioritizing their growth, well-being, and development. Transactional leadership focuses on exchanges, laissez-faire is hands-off, and autocratic centralizes decision-making."
        }
      ]
    },
    {
      "id": "organizational-behavior-301-l06",
      "title": "Organizational Culture and Psychological Safety",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Explain Schein's three levels of organizational culture",
        "Describe strategies for changing organizational culture",
        "Define psychological safety and its role in team learning"
      ],
      "chunks": [
        {
          "id": "organizational-behavior-301-l06-c1",
          "title": "Schein's Three Levels of Culture",
          "content": "Edgar Schein defined organizational culture as a pattern of shared basic assumptions learned by a group as it solved problems of external adaptation and internal integration. His influential model presents culture at three levels of visibility. The most visible level is Artifacts—the observable elements like office layout, dress code, and company rituals. While easy to see, they are difficult to interpret. The second level is Espoused Values, which are the organization's stated goals, strategies, and philosophies. This is what the company says it values. The deepest, least visible level is Basic Underlying Assumptions. These are the unconscious, taken-for-granted beliefs and perceptions that are the true drivers of behavior. A disconnect between espoused values and basic assumptions often reveals cultural problems.",
          "visualPrompt": "An iceberg diagram. The tip above the water is labeled 'Artifacts (Visible).' The section at the waterline is 'Espoused Values.' The large, hidden mass below the water is 'Basic Underlying Assumptions (Invisible, Unconscious).'"
        },
        {
          "id": "organizational-behavior-301-l06-c2",
          "title": "Culture Change",
          "content": "Changing an organization's culture is a profound leadership challenge because it requires altering deeply embedded assumptions. Meaningful change often requires a significant triggering event, such as a crisis, a leadership transition, or a merger. The process demands a clear vision for the new culture and a systematic alignment of organizational systems—including hiring criteria, reward systems, and promotion processes—to reinforce desired behaviors. Senior leaders must consistently model the new values. This is a long-term endeavor, often taking years. Alan Mulally's transformation of Ford's culture from one of internal competition to one of collaborative transparency, through mechanisms like his Business Plan Review meetings, serves as a classic case study in successful culture change.",
          "visualPrompt": "A timeline graphic spanning several years. Key points on the timeline are marked with icons representing interventions: a new CEO, a revised mission statement, a new performance review system, and senior leaders modeling new behaviors."
        },
        {
          "id": "organizational-behavior-301-l06-c3",
          "title": "Psychological Safety",
          "content": "Defined by Amy Edmondson, psychological safety is a shared belief held by members of a team that the team is safe for interpersonal risk-taking. It means individuals feel comfortable speaking up, asking questions, admitting mistakes, or proposing new ideas without fear of punishment or humiliation. Edmondson's research in hospitals found that teams with higher psychological safety reported more errors—not because they were less competent, but because they were more willing to discuss them, leading to faster learning. Google's Project Aristotle identified psychological safety as the single most important dynamic of effective teams. Leaders foster it by framing work as a learning problem, acknowledging their own fallibility, and modeling curiosity.",
          "visualPrompt": "An illustration of a team at a meeting table. A speech bubble from one member says, 'What if we tried this?' and another says, 'I made a mistake.' The other team members are shown with supportive, engaged expressions, all under a protective umbrella icon labeled 'Psychological Safety.'"
        }
      ],
      "flashcards": [
        {
          "id": "organizational-behavior-301-l06-f1",
          "front": "Schein's three levels of culture",
          "back": "Artifacts (visible but hard to interpret), Espoused Values (stated beliefs), Basic Underlying Assumptions (unconscious drivers of behavior) — true culture lives at the deepest level."
        },
        {
          "id": "organizational-behavior-301-l06-f2",
          "front": "Culture change requirements",
          "back": "Triggering event, clear desired culture, system alignment (hiring, rewards, promotions), senior leader role modeling, and persistence over years — not a quick fix."
        },
        {
          "id": "organizational-behavior-301-l06-f3",
          "front": "Psychological safety (Edmondson)",
          "back": "Shared belief that it is safe to take interpersonal risks — speak up, admit errors, ask questions. Teams with high psychological safety learn faster and perform better."
        }
      ]
    },
    {
      "id": "organizational-behavior-301-l07",
      "title": "Final Assessment: Leadership & Culture",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "organizational-behavior-301-l07-q1",
          "text": "In Schein's model, the deepest level of culture that truly drives behavior is:",
          "options": [
            {
              "id": "a",
              "text": "Artifacts"
            },
            {
              "id": "b",
              "text": "Espoused values"
            },
            {
              "id": "c",
              "text": "Basic underlying assumptions"
            },
            {
              "id": "d",
              "text": "Organizational policies"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Basic underlying assumptions are unconscious, taken-for-granted beliefs that actually drive behavior. They are the hardest to observe and the hardest to change. Artifacts are surface-level, espoused values are what the organization says it believes, and policies are formal rules."
        },
        {
          "id": "organizational-behavior-301-l07-q2",
          "text": "Edmondson's research on hospital teams found that psychologically safe teams reported MORE errors because:",
          "options": [
            {
              "id": "a",
              "text": "They were less skilled than other teams"
            },
            {
              "id": "b",
              "text": "They were more willing to openly discuss mistakes, enabling faster learning"
            },
            {
              "id": "c",
              "text": "Their leaders demanded detailed error logs"
            },
            {
              "id": "d",
              "text": "They worked on more complex cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Psychologically safe teams did not make more errors — they were more willing to report and discuss them openly, which led to faster learning and improvement. The higher error reporting was a sign of transparency, not incompetence."
        },
        {
          "id": "organizational-behavior-301-l07-q3",
          "text": "Which leadership theory argues that leaders should adapt their style based on followers' readiness level?",
          "options": [
            {
              "id": "a",
              "text": "Fiedler's contingency model"
            },
            {
              "id": "b",
              "text": "Path-goal theory"
            },
            {
              "id": "c",
              "text": "Hersey and Blanchard's situational leadership"
            },
            {
              "id": "d",
              "text": "Trait theory"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Hersey and Blanchard's Situational Leadership Theory explicitly matches leader style (telling, selling, participating, delegating) to follower readiness (ability and willingness). Fiedler focuses on situation favorableness, path-goal on removing obstacles, and trait theory on leader characteristics."
        },
        {
          "id": "organizational-behavior-301-l07-q4",
          "text": "Blake and Mouton's 'Team Management' style is characterized by:",
          "options": [
            {
              "id": "a",
              "text": "High concern for production, low concern for people"
            },
            {
              "id": "b",
              "text": "Low concern for both production and people"
            },
            {
              "id": "c",
              "text": "High concern for both production and people"
            },
            {
              "id": "d",
              "text": "Moderate concern for production and people"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Team Management is the (9,9) position on the Managerial Grid — maximum concern for both production and people. Blake and Mouton considered this the most effective leadership style, though critics note it ignores situational factors."
        }
      ]
    }
  ]
};
