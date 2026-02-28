import type { LearningModule } from "@/lib/modules/types";

export const OrganizationalBehavior301Module: LearningModule = {
  id: "organizational-behavior-301",
  title: "Leadership & Organizational Culture",
  description:
    "Examine the major theories of leadership from trait-based to transformational approaches, and understand how organizational culture shapes behavior. Explore emotional intelligence, servant leadership, psychological safety, and Schein's cultural model.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "organizational-behavior"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Compare trait, behavioral, and contingency theories of leadership",
    "Distinguish between transformational and transactional leadership",
    "Explain the principles and impact of servant leadership",
    "Apply Goleman's emotional intelligence framework to leadership effectiveness",
    "Analyze organizational culture using Schein's three-level model",
    "Evaluate strategies for culture change in organizations",
    "Describe the concept of psychological safety and its effects on team performance"
  ],
  lessons: [
    {
      id: "organizational-behavior-301-l01",
      title: "Trait and Behavioral Leadership Theories",
      type: "video",
      duration: 14,
      objectives: [
        "Describe the trait approach to leadership and its limitations",
        "Explain the behavioral approach including Ohio State and Michigan studies",
        "Evaluate Blake and Mouton's Managerial Grid"
      ],
      chunks: [
        {
          id: "organizational-behavior-301-l01-c1",
          title: "The Trait Approach",
          content:
            "Early leadership research sought to identify innate traits that distinguish leaders from non-leaders. Studies found correlations between leadership emergence and traits such as intelligence, self-confidence, determination, integrity, and sociability. However, the trait approach has significant limitations: it does not account for situational factors, it cannot explain why people with identical traits lead differently in different contexts, and it implies leadership is born rather than developed. Despite these critiques, trait research laid the foundation for understanding that certain personal qualities do matter."
        },
        {
          id: "organizational-behavior-301-l01-c2",
          title: "Behavioral Theories",
          content:
            "Behavioral researchers shifted focus from who leaders are to what leaders do. The Ohio State studies identified two key dimensions: initiating structure (defining roles, organizing work, establishing procedures) and consideration (showing concern for people, building trust, respecting ideas). Independently, the University of Michigan studies found similar dimensions: production orientation and employee orientation. The breakthrough insight was that leadership could be learned and trained, not just inherited."
        },
        {
          id: "organizational-behavior-301-l01-c3",
          title: "Blake and Mouton's Managerial Grid",
          content:
            "Robert Blake and Jane Mouton plotted leadership styles on a grid with concern for people (vertical axis) and concern for production (horizontal axis), each scaled 1-9. Five styles emerge: Impoverished Management (1,1), Authority-Compliance (9,1), Country Club Management (1,9), Middle-of-the-Road (5,5), and Team Management (9,9). They argued that Team Management — high concern for both people and production — is the most effective style. While the grid is useful for self-awareness, critics note it oversimplifies by ignoring situational demands."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-301-l01-f1", front: "Trait approach to leadership", back: "Identifies innate qualities (intelligence, confidence, integrity) that predict leadership emergence — limited because it ignores situational factors and implies leadership cannot be developed" },
        { id: "organizational-behavior-301-l01-f2", front: "Ohio State leadership dimensions", back: "Initiating structure (organizing work, defining roles) and Consideration (showing concern for people, building trust) — two independent dimensions of leader behavior" },
        { id: "organizational-behavior-301-l01-f3", front: "Blake & Mouton's Managerial Grid", back: "Plots leadership on concern for people vs. concern for production (1-9 each). Team Management (9,9) is considered most effective — high on both dimensions" }
      ]
    },
    {
      id: "organizational-behavior-301-l02",
      title: "Contingency Leadership Theories",
      type: "video",
      duration: 13,
      objectives: [
        "Explain Fiedler's contingency model",
        "Describe Hersey and Blanchard's situational leadership",
        "Apply path-goal theory to leadership scenarios"
      ],
      chunks: [
        {
          id: "organizational-behavior-301-l02-c1",
          title: "Fiedler's Contingency Model",
          content:
            "Fred Fiedler proposed that leadership effectiveness depends on the match between a leader's style and the favorableness of the situation. Leaders are either task-oriented or relationship-oriented (measured by the Least Preferred Coworker scale). Situational favorableness depends on leader-member relations, task structure, and position power. Task-oriented leaders perform best in very favorable or very unfavorable situations, while relationship-oriented leaders excel in moderately favorable conditions. Fiedler argued that since leadership style is relatively fixed, organizations should change the situation to fit the leader rather than trying to change the leader."
        },
        {
          id: "organizational-behavior-301-l02-c2",
          title: "Situational Leadership",
          content:
            "Paul Hersey and Ken Blanchard's Situational Leadership Theory argues that effective leadership requires adapting one's style to followers' readiness level. Four styles correspond to four readiness levels: Telling (high task, low relationship) for unable and unwilling followers. Selling (high task, high relationship) for unable but willing followers. Participating (low task, high relationship) for able but unwilling followers. Delegating (low task, low relationship) for able and willing followers. This model is widely used in management training despite limited empirical validation."
        },
        {
          id: "organizational-behavior-301-l02-c3",
          title: "Path-Goal Theory",
          content:
            "Robert House's path-goal theory states that leaders motivate followers by clarifying the path to desired goals and removing obstacles. Leaders choose from four behaviors: directive (providing structure), supportive (showing concern), participative (consulting followers), and achievement-oriented (setting challenging goals). The best behavior depends on follower characteristics (experience, locus of control) and environmental factors (task structure, formal authority). A new employee on an ambiguous task needs directive leadership; an experienced professional on routine work benefits from supportive or delegating approaches."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-301-l02-f1", front: "Fiedler's contingency model", back: "Leadership effectiveness depends on matching leader style (task vs. relationship oriented) to situational favorableness (leader-member relations, task structure, position power). Change the situation, not the leader" },
        { id: "organizational-behavior-301-l02-f2", front: "Hersey & Blanchard's situational leadership", back: "Adapt style to follower readiness: Telling (low readiness), Selling (moderate-low), Participating (moderate-high), Delegating (high readiness)" },
        { id: "organizational-behavior-301-l02-f3", front: "Path-goal theory (House)", back: "Leaders motivate by clarifying paths to goals and removing obstacles — choosing directive, supportive, participative, or achievement-oriented behavior based on follower and environmental factors" }
      ]
    },
    {
      id: "organizational-behavior-301-l03",
      title: "Transformational and Servant Leadership",
      type: "interactive",
      duration: 15,
      objectives: [
        "Contrast transformational and transactional leadership",
        "Identify the four components of transformational leadership",
        "Explain servant leadership and its organizational impact"
      ],
      chunks: [
        {
          id: "organizational-behavior-301-l03-c1",
          title: "Transactional Leadership",
          content:
            "James MacGregor Burns introduced the distinction between transactional and transformational leadership. Transactional leaders manage through exchanges — clarifying role expectations, setting goals, and providing contingent rewards or corrective actions. It operates on two dimensions: contingent reward (rewarding performance) and management by exception (intervening only when standards are not met — either actively monitoring or passively waiting for problems). Transactional leadership maintains stability and ensures reliable performance but rarely inspires beyond the minimum."
        },
        {
          id: "organizational-behavior-301-l03-c2",
          title: "Transformational Leadership",
          content:
            "Transformational leaders elevate followers' aspirations beyond self-interest toward the collective good. Bernard Bass identified four components (the Four I's): Idealized Influence (serving as a role model), Inspirational Motivation (articulating a compelling vision), Intellectual Stimulation (encouraging innovation and questioning assumptions), and Individualized Consideration (mentoring and developing each follower). Research consistently shows that transformational leadership is associated with higher follower satisfaction, commitment, and performance. Leaders like Satya Nadella at Microsoft exemplify this — transforming the culture from 'know-it-all' to 'learn-it-all.'"
        },
        {
          id: "organizational-behavior-301-l03-c3",
          title: "Servant Leadership",
          content:
            "Robert Greenleaf proposed that the most effective leaders are servants first — prioritizing the growth and well-being of followers and communities. Servant leadership emphasizes listening, empathy, stewardship, commitment to others' development, and building community. It inverts the traditional hierarchy: the leader exists to serve the team, not the other way around. Companies like Southwest Airlines, Starbucks, and Costco have embraced elements of servant leadership. Research links it to higher trust, organizational citizenship behavior, and team effectiveness, particularly in knowledge-intensive and service-oriented industries."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-301-l03-f1", front: "Transactional vs. transformational leadership", back: "Transactional: manage through exchanges (rewards for performance). Transformational: elevate followers beyond self-interest through vision, inspiration, intellectual stimulation, and individual attention" },
        { id: "organizational-behavior-301-l03-f2", front: "Bass's Four I's of transformational leadership", back: "Idealized Influence (role model), Inspirational Motivation (compelling vision), Intellectual Stimulation (encourage innovation), Individualized Consideration (mentor each person)" },
        { id: "organizational-behavior-301-l03-f3", front: "Servant leadership (Greenleaf)", back: "Leaders serve followers first — emphasizing listening, empathy, stewardship, and development. Inverts traditional hierarchy; linked to higher trust and organizational citizenship behavior" }
      ]
    },
    {
      id: "organizational-behavior-301-l04",
      title: "Emotional Intelligence and Leadership",
      type: "video",
      duration: 13,
      objectives: [
        "Define emotional intelligence and its components",
        "Explain Goleman's EI framework for leadership",
        "Assess how emotional intelligence impacts organizational outcomes"
      ],
      chunks: [
        {
          id: "organizational-behavior-301-l04-c1",
          title: "What Is Emotional Intelligence?",
          content:
            "Emotional intelligence (EI) is the ability to recognize, understand, manage, and effectively use emotions in oneself and others. Peter Salovey and John Mayer originally defined the concept in 1990 as a form of social intelligence involving the ability to monitor feelings and use emotional information to guide thinking and action. Unlike IQ, which remains relatively stable, emotional intelligence can be developed through deliberate practice and feedback over time."
        },
        {
          id: "organizational-behavior-301-l04-c2",
          title: "Goleman's Five Components",
          content:
            "Daniel Goleman popularized EI for business audiences, identifying five components critical for leadership: Self-awareness (recognizing one's emotions and their effects), Self-regulation (managing disruptive impulses and moods), Motivation (being driven by internal goals beyond money or status), Empathy (understanding others' emotional states), and Social skill (building rapport, managing relationships, inspiring others). Goleman's research at nearly 200 large companies found that EI was twice as important as technical skill and IQ combined for outstanding leadership performance."
        },
        {
          id: "organizational-behavior-301-l04-c3",
          title: "EI in Practice",
          content:
            "Leaders with high emotional intelligence create psychologically safer environments, handle conflict more constructively, and build stronger relationships. When Satya Nadella became CEO of Microsoft, he emphasized empathy as a core leadership competency — crediting his experience raising a son with special needs for deepening his emotional awareness. Practical EI development includes reflective journaling, soliciting 360-degree feedback, mindfulness practice, and coaching. Critics caution that EI measures sometimes overlap with personality traits and that emotional skills can be used manipulatively."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-301-l04-f1", front: "Emotional intelligence (EI)", back: "The ability to recognize, understand, manage, and effectively use emotions in oneself and others — originally defined by Salovey and Mayer, popularized by Goleman" },
        { id: "organizational-behavior-301-l04-f2", front: "Goleman's five EI components", back: "Self-awareness, Self-regulation, Motivation (internal drive), Empathy, Social skill — EI was found twice as important as IQ and technical skill for leadership excellence" },
        { id: "organizational-behavior-301-l04-f3", front: "How to develop EI", back: "Reflective journaling, 360-degree feedback, mindfulness practice, coaching, and deliberate attention to emotional dynamics in daily interactions" }
      ]
    },
    {
      id: "organizational-behavior-301-l05",
      title: "Checkpoint: Leadership Theories & Emotional Intelligence",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "organizational-behavior-301-l05-q1",
          text: "According to Fiedler's contingency model, what should organizations do when a leader's style does not match the situation?",
          options: [
            { id: "a", text: "Train the leader to adopt a different style" },
            { id: "b", text: "Change the situation to fit the leader's natural style" },
            { id: "c", text: "Replace the leader immediately" },
            { id: "d", text: "Ignore the mismatch and hope for the best" }
          ],
          correctOptionId: "b",
          explanation: "Fiedler argued that leadership style is relatively fixed, so organizations should engineer the situation (adjust task structure, position power, or team composition) to match the leader's style rather than trying to change the leader."
        },
        {
          id: "organizational-behavior-301-l05-q2",
          text: "Which of Bass's 'Four I's' involves encouraging followers to question assumptions and think creatively?",
          options: [
            { id: "a", text: "Idealized Influence" },
            { id: "b", text: "Inspirational Motivation" },
            { id: "c", text: "Intellectual Stimulation" },
            { id: "d", text: "Individualized Consideration" }
          ],
          correctOptionId: "c",
          explanation: "Intellectual Stimulation involves challenging followers to rethink problems, question assumptions, and approach old situations in new ways. Idealized Influence is role modeling, Inspirational Motivation is vision communication, and Individualized Consideration is personal mentoring."
        },
        {
          id: "organizational-behavior-301-l05-q3",
          text: "In Goleman's framework, which EI component involves understanding others' emotional states?",
          options: [
            { id: "a", text: "Self-awareness" },
            { id: "b", text: "Self-regulation" },
            { id: "c", text: "Motivation" },
            { id: "d", text: "Empathy" }
          ],
          correctOptionId: "d",
          explanation: "Empathy is the ability to understand and share others' emotional states — essential for managing relationships and leading effectively. Self-awareness is understanding one's own emotions, self-regulation is managing them, and motivation refers to internal drive."
        },
        {
          id: "organizational-behavior-301-l05-q4",
          text: "A leader who prioritizes followers' growth and well-being above their own status exemplifies:",
          options: [
            { id: "a", text: "Transactional leadership" },
            { id: "b", text: "Laissez-faire leadership" },
            { id: "c", text: "Servant leadership" },
            { id: "d", text: "Autocratic leadership" }
          ],
          correctOptionId: "c",
          explanation: "Servant leadership (Greenleaf) puts followers' needs first — prioritizing their growth, well-being, and development. Transactional leadership focuses on exchanges, laissez-faire is hands-off, and autocratic centralizes decision-making."
        }
      ]
    },
    {
      id: "organizational-behavior-301-l06",
      title: "Organizational Culture and Psychological Safety",
      type: "video",
      duration: 15,
      objectives: [
        "Explain Schein's three levels of organizational culture",
        "Describe strategies for changing organizational culture",
        "Define psychological safety and its role in team learning"
      ],
      chunks: [
        {
          id: "organizational-behavior-301-l06-c1",
          title: "Schein's Three Levels of Culture",
          content:
            "Edgar Schein defined organizational culture as the pattern of shared basic assumptions that a group has learned while solving problems of external adaptation and internal integration. His model has three levels: Artifacts (visible structures, dress codes, office layouts, rituals — easy to observe but hard to interpret), Espoused Values (stated strategies, goals, and philosophies — what the organization says it believes), and Basic Underlying Assumptions (unconscious, taken-for-granted beliefs that actually drive behavior). True culture lives at the deepest level; a company may espouse innovation but its underlying assumption of risk-aversion stifles new ideas."
        },
        {
          id: "organizational-behavior-301-l06-c2",
          title: "Culture Change",
          content:
            "Changing organizational culture is one of the most difficult management tasks because basic assumptions are deeply embedded. Effective culture change typically requires a triggering event (crisis, new leadership, merger), clear articulation of the desired culture, alignment of systems (hiring, rewards, promotion criteria, stories, rituals), consistent role modeling by senior leaders, and persistence over years, not months. When Alan Mulally became CEO of Ford in 2006, he systematically changed the culture from internal competition to collaborative transparency through weekly Business Plan Reviews where leaders had to honestly share problems using color-coded status reports."
        },
        {
          id: "organizational-behavior-301-l06-c3",
          title: "Psychological Safety",
          content:
            "Amy Edmondson defined psychological safety as a shared belief that the team is safe for interpersonal risk-taking — speaking up, admitting mistakes, asking questions, or proposing unconventional ideas without fear of punishment or humiliation. Her research at hospitals found that teams with higher psychological safety reported more errors — not because they made more mistakes, but because they were willing to discuss them openly, leading to faster learning and improvement. Google's Project Aristotle identified psychological safety as the single most important factor in team effectiveness. Leaders create it by framing work as learning problems, acknowledging their own fallibility, and responding constructively to bad news."
        }
      ],
      flashcards: [
        { id: "organizational-behavior-301-l06-f1", front: "Schein's three levels of culture", back: "Artifacts (visible but hard to interpret), Espoused Values (stated beliefs), Basic Underlying Assumptions (unconscious drivers of behavior) — true culture lives at the deepest level" },
        { id: "organizational-behavior-301-l06-f2", front: "Culture change requirements", back: "Triggering event, clear desired culture, system alignment (hiring, rewards, promotions), senior leader role modeling, and persistence over years — not a quick fix" },
        { id: "organizational-behavior-301-l06-f3", front: "Psychological safety (Edmondson)", back: "Shared belief that it is safe to take interpersonal risks — speak up, admit errors, ask questions. Teams with high psychological safety learn faster and perform better" }
      ]
    },
    {
      id: "organizational-behavior-301-l07",
      title: "Final Assessment: Leadership & Culture",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "organizational-behavior-301-l07-q1",
          text: "In Schein's model, the deepest level of culture that truly drives behavior is:",
          options: [
            { id: "a", text: "Artifacts" },
            { id: "b", text: "Espoused values" },
            { id: "c", text: "Basic underlying assumptions" },
            { id: "d", text: "Organizational policies" }
          ],
          correctOptionId: "c",
          explanation: "Basic underlying assumptions are unconscious, taken-for-granted beliefs that actually drive behavior. They are the hardest to observe and the hardest to change. Artifacts are surface-level, espoused values are what the organization says it believes, and policies are formal rules."
        },
        {
          id: "organizational-behavior-301-l07-q2",
          text: "Edmondson's research on hospital teams found that psychologically safe teams reported MORE errors because:",
          options: [
            { id: "a", text: "They were less skilled than other teams" },
            { id: "b", text: "They were more willing to openly discuss mistakes, enabling faster learning" },
            { id: "c", text: "Their leaders demanded detailed error logs" },
            { id: "d", text: "They worked on more complex cases" }
          ],
          correctOptionId: "b",
          explanation: "Psychologically safe teams did not make more errors — they were more willing to report and discuss them openly, which led to faster learning and improvement. The higher error reporting was a sign of transparency, not incompetence."
        },
        {
          id: "organizational-behavior-301-l07-q3",
          text: "Which leadership theory argues that leaders should adapt their style based on followers' readiness level?",
          options: [
            { id: "a", text: "Fiedler's contingency model" },
            { id: "b", text: "Path-goal theory" },
            { id: "c", text: "Hersey and Blanchard's situational leadership" },
            { id: "d", text: "Trait theory" }
          ],
          correctOptionId: "c",
          explanation: "Hersey and Blanchard's Situational Leadership Theory explicitly matches leader style (telling, selling, participating, delegating) to follower readiness (ability and willingness). Fiedler focuses on situation favorableness, path-goal on removing obstacles, and trait theory on leader characteristics."
        },
        {
          id: "organizational-behavior-301-l07-q4",
          text: "Blake and Mouton's 'Team Management' style is characterized by:",
          options: [
            { id: "a", text: "High concern for production, low concern for people" },
            { id: "b", text: "Low concern for both production and people" },
            { id: "c", text: "High concern for both production and people" },
            { id: "d", text: "Moderate concern for production and people" }
          ],
          correctOptionId: "c",
          explanation: "Team Management is the (9,9) position on the Managerial Grid — maximum concern for both production and people. Blake and Mouton considered this the most effective leadership style, though critics note it ignores situational factors."
        }
      ]
    }
  ],
};
