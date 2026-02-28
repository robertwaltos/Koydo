import type { LearningModule } from "@/lib/modules/types";

export const Leadership101Module: LearningModule = {
  id: "leadership-101",
  title: "Leadership Foundations",
  description:
    "Explore the core principles that distinguish effective leaders from ordinary managers. Master early leadership theories, situational models, and diverse leadership styles while building self-awareness as the foundation for your personal leadership journey.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "leadership"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Distinguish between management and leadership",
    "Summarize early leadership theories including trait, behavioral, and Great Man approaches",
    "Apply Hersey-Blanchard situational leadership to real scenarios",
    "Explain path-goal theory and its practical implications",
    "Compare autocratic, democratic, and laissez-faire leadership styles",
    "Assess personal leadership strengths through self-awareness tools",
    "Design an initial personal leadership development plan"
  ],
  lessons: [
    {
      id: "leadership-101-l01",
      title: "Management vs. Leadership",
      type: "video",
      duration: 12,
      objectives: [
        "Define leadership and management as distinct functions",
        "Explain why organizations need both managers and leaders",
        "Identify leadership behaviors in everyday workplace situations"
      ],
      chunks: [
        {
          id: "leadership-101-l01-c1",
          title: "Defining Management and Leadership",
          content:
            "Management is the process of planning, organizing, staffing, and controlling resources to achieve organizational goals efficiently. Leadership, by contrast, is the ability to influence, inspire, and guide others toward a shared vision. While managers focus on systems, processes, and stability, leaders focus on people, change, and direction. John Kotter captured this distinction: management is about coping with complexity, while leadership is about coping with change."
        },
        {
          id: "leadership-101-l01-c2",
          title: "Why Organizations Need Both",
          content:
            "Strong management without leadership produces bureaucratic organizations that stifle innovation. Strong leadership without management creates chaos — inspiring visions with no execution plan. The most effective organizations cultivate both: managers who can lead and leaders who can manage. Abraham Zaleznik argued that leaders and managers differ in motivation, personal history, and how they think and act, yet the best executives integrate both skill sets."
        },
        {
          id: "leadership-101-l01-c3",
          title: "Recognizing Leadership in Action",
          content:
            "Leadership is not confined to titles or corner offices. It appears whenever someone takes initiative, rallies a team around a shared purpose, or challenges the status quo constructively. A frontline employee who proposes a better process and persuades colleagues to adopt it is exercising leadership. Understanding that leadership is a behavior — not a position — is the first step toward developing it in yourself and others."
        }
      ],
      flashcards: [
        { id: "leadership-101-l01-f1", front: "Management (Kotter's view)", back: "The process of coping with complexity through planning, organizing, staffing, and controlling to produce orderly, consistent results" },
        { id: "leadership-101-l01-f2", front: "Leadership (Kotter's view)", back: "The process of coping with change by setting direction, aligning people, and motivating and inspiring them toward a shared vision" },
        { id: "leadership-101-l01-f3", front: "Leadership as behavior vs. position", back: "Leadership is an influence process exercised through actions, not a formal title — anyone can demonstrate leadership regardless of their role in the hierarchy" }
      ]
    },
    {
      id: "leadership-101-l02",
      title: "Early Leadership Theories",
      type: "video",
      duration: 14,
      objectives: [
        "Describe the Great Man theory and its historical context",
        "Explain trait theory and its key findings",
        "Outline behavioral theories including the Ohio State and Michigan studies"
      ],
      chunks: [
        {
          id: "leadership-101-l02-c1",
          title: "Great Man Theory",
          content:
            "The Great Man theory, popularized by Thomas Carlyle in the 1840s, proposed that leaders are born, not made — that history is shaped by extraordinary individuals with innate qualities. This view held that great leaders such as Napoleon or Lincoln possessed inherent traits that destined them for influence. While largely discredited as overly simplistic and biased toward privileged demographics, the theory launched the formal study of leadership and raised a question still debated today: is leadership innate or developed?"
        },
        {
          id: "leadership-101-l02-c2",
          title: "Trait Theory",
          content:
            "Trait theory evolved from the Great Man approach, seeking to identify specific characteristics shared by effective leaders. Researchers like Ralph Stogdill and Edwin Ghiselli studied intelligence, self-confidence, determination, integrity, and sociability. While no universal trait list emerged, modern meta-analyses confirm that certain traits — extraversion, conscientiousness, openness to experience, and emotional stability — do correlate with leadership emergence and effectiveness, though they do not guarantee it."
        },
        {
          id: "leadership-101-l02-c3",
          title: "Behavioral Theories",
          content:
            "Frustrated by trait theory's limitations, researchers in the 1950s shifted to studying what leaders actually do. The Ohio State studies identified two key dimensions: initiating structure (task-oriented behavior) and consideration (relationship-oriented behavior). The University of Michigan studies found similar dimensions: production orientation and employee orientation. Behavioral theories demonstrated that leadership could be learned and that effectiveness depends on balancing task focus with genuine concern for people."
        }
      ],
      flashcards: [
        { id: "leadership-101-l02-f1", front: "Great Man Theory", back: "The belief that leaders are born with innate, extraordinary qualities that destine them for influence — popularized by Thomas Carlyle in the 1840s" },
        { id: "leadership-101-l02-f2", front: "Trait theory of leadership", back: "Approach seeking to identify specific characteristics (intelligence, confidence, integrity, sociability) that predict leadership effectiveness — traits correlate but do not guarantee success" },
        { id: "leadership-101-l02-f3", front: "Ohio State leadership dimensions", back: "Initiating structure (task-oriented behavior defining roles and expectations) and consideration (relationship-oriented behavior showing trust and respect for followers)" }
      ]
    },
    {
      id: "leadership-101-l03",
      title: "Situational Leadership",
      type: "interactive",
      duration: 15,
      objectives: [
        "Explain the Hersey-Blanchard situational leadership model",
        "Match leadership styles to follower readiness levels",
        "Apply situational leadership to workplace scenarios"
      ],
      chunks: [
        {
          id: "leadership-101-l03-c1",
          title: "The Situational Leadership Model",
          content:
            "Paul Hersey and Ken Blanchard proposed that no single leadership style is best. Instead, effective leaders adapt their style to the readiness level of their followers. Readiness combines ability (skills, knowledge, experience) and willingness (confidence, motivation, commitment). The model identifies four leadership styles mapped to four readiness levels, creating a practical framework for leaders to diagnose situations and adjust their approach."
        },
        {
          id: "leadership-101-l03-c2",
          title: "Four Leadership Styles",
          content:
            "The model prescribes four styles: (1) Telling (S1) — high task, low relationship direction for followers who are unable and unwilling. (2) Selling (S2) — high task, high relationship for followers who are unable but willing. (3) Participating (S3) — low task, high relationship for followers who are able but unwilling or insecure. (4) Delegating (S4) — low task, low relationship for followers who are both able and willing. Leaders must continuously reassess as followers develop."
        },
        {
          id: "leadership-101-l03-c3",
          title: "Applying Situational Leadership",
          content:
            "A new hire with enthusiasm but no experience (R2) needs a selling style — clear direction combined with encouragement and explanation. A seasoned professional who has lost motivation (R3) needs a participating style — involvement in decisions to rebuild engagement. The power of situational leadership lies in its flexibility: it prevents leaders from relying on a single default style and encourages them to meet followers where they are."
        }
      ],
      flashcards: [
        { id: "leadership-101-l03-f1", front: "Hersey-Blanchard Situational Leadership", back: "A model proposing that effective leaders adapt their style (telling, selling, participating, delegating) to the readiness level of followers based on ability and willingness" },
        { id: "leadership-101-l03-f2", front: "Follower readiness (Hersey-Blanchard)", back: "A combination of ability (skills, knowledge, experience) and willingness (confidence, motivation, commitment) that determines which leadership style is most appropriate" },
        { id: "leadership-101-l03-f3", front: "Selling style (S2)", back: "High task direction combined with high relationship support — used when followers are willing and motivated but lack the ability or experience to perform independently" }
      ]
    },
    {
      id: "leadership-101-l04",
      title: "Path-Goal Theory",
      type: "video",
      duration: 13,
      objectives: [
        "Explain the core premise of path-goal theory",
        "Describe the four leader behaviors in the model",
        "Identify how environmental and follower factors shape style selection"
      ],
      chunks: [
        {
          id: "leadership-101-l04-c1",
          title: "Path-Goal Theory Foundations",
          content:
            "Developed by Robert House in 1971, path-goal theory is grounded in expectancy motivation. Its central idea is that a leader's job is to help followers see a clear path to their goals and to make that path easier to travel. Leaders do this by clarifying expectations, removing obstacles, and providing appropriate support. The theory is named for its focus on how leaders influence followers' perceptions of work goals and the paths to achieve them."
        },
        {
          id: "leadership-101-l04-c2",
          title: "Four Leader Behaviors",
          content:
            "Path-goal theory identifies four leader behaviors: (1) Directive — providing specific guidance and clear expectations, effective when tasks are ambiguous. (2) Supportive — showing concern for well-being, effective when tasks are stressful or dissatisfying. (3) Participative — consulting followers in decision-making, effective when followers are experienced and desire autonomy. (4) Achievement-oriented — setting challenging goals and expressing confidence, effective when tasks are complex and followers need motivation."
        },
        {
          id: "leadership-101-l04-c3",
          title: "Contingency Factors",
          content:
            "Path-goal theory considers two contingency factors: follower characteristics (ability, locus of control, experience) and environmental characteristics (task structure, formal authority system, work group norms). A directive style backfires with highly capable employees who perceive it as micromanaging. A supportive style adds little when tasks are already satisfying. Effective leaders read both follower and environmental cues to choose the behavior that fills the gaps in motivation and satisfaction."
        }
      ],
      flashcards: [
        { id: "leadership-101-l04-f1", front: "Path-goal theory (Robert House)", back: "A leadership model proposing that leaders enhance follower motivation by clarifying the path to goals, removing obstacles, and providing support matched to follower and environmental needs" },
        { id: "leadership-101-l04-f2", front: "Four path-goal leader behaviors", back: "Directive (clear guidance), Supportive (concern for well-being), Participative (shared decision-making), Achievement-oriented (challenging goals with confidence)" },
        { id: "leadership-101-l04-f3", front: "Path-goal contingency factors", back: "Follower characteristics (ability, locus of control, experience) and environmental characteristics (task structure, authority system, work group norms) that determine which leader behavior is most effective" }
      ]
    },
    {
      id: "leadership-101-l05",
      title: "Checkpoint: Leadership Theories & Models",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "leadership-101-l05-q1",
          text: "What is the primary distinction between management and leadership according to John Kotter?",
          options: [
            { id: "a", text: "Management copes with complexity; leadership copes with change" },
            { id: "b", text: "Management is for senior executives; leadership is for frontline workers" },
            { id: "c", text: "Management focuses on people; leadership focuses on processes" },
            { id: "d", text: "Management is informal; leadership is formal and hierarchical" }
          ],
          correctOptionId: "a",
          explanation: "Kotter argued that management produces order and consistency through planning and controlling, while leadership produces change and movement through vision, alignment, and inspiration."
        },
        {
          id: "leadership-101-l05-q2",
          text: "In Hersey-Blanchard's model, which leadership style is appropriate for a follower who is able but unwilling or insecure?",
          options: [
            { id: "a", text: "Telling" },
            { id: "b", text: "Selling" },
            { id: "c", text: "Participating" },
            { id: "d", text: "Delegating" }
          ],
          correctOptionId: "c",
          explanation: "The participating style (S3) uses high relationship and low task behavior to re-engage capable followers who lack confidence or motivation by involving them in decisions."
        },
        {
          id: "leadership-101-l05-q3",
          text: "Which early leadership approach shifted focus from who leaders ARE to what leaders DO?",
          options: [
            { id: "a", text: "Great Man theory" },
            { id: "b", text: "Trait theory" },
            { id: "c", text: "Behavioral theory" },
            { id: "d", text: "Path-goal theory" }
          ],
          correctOptionId: "c",
          explanation: "Behavioral theories (Ohio State and Michigan studies) moved the focus from innate traits to observable behaviors — initiating structure and consideration — demonstrating that leadership can be learned."
        },
        {
          id: "leadership-101-l05-q4",
          text: "According to path-goal theory, when should a leader use a directive style?",
          options: [
            { id: "a", text: "When tasks are routine and followers are highly experienced" },
            { id: "b", text: "When tasks are ambiguous and followers need clear guidance" },
            { id: "c", text: "When followers are stressed and need emotional support" },
            { id: "d", text: "When followers desire autonomy in decision-making" }
          ],
          correctOptionId: "b",
          explanation: "Directive leadership provides specific guidance and clear expectations, which is most effective when task structure is low and followers are uncertain about what to do or how to do it."
        }
      ]
    },
    {
      id: "leadership-101-l06",
      title: "Leadership Styles in Practice",
      type: "interactive",
      duration: 14,
      objectives: [
        "Compare autocratic, democratic, and laissez-faire leadership styles",
        "Identify situations where each style is most effective",
        "Evaluate the trade-offs of each approach"
      ],
      chunks: [
        {
          id: "leadership-101-l06-c1",
          title: "Autocratic Leadership",
          content:
            "Autocratic leaders make decisions unilaterally, expecting compliance without input from subordinates. This style is efficient in crisis situations, military operations, or when rapid decisions are needed with inexperienced teams. However, it suppresses creativity, reduces employee satisfaction, and creates dependency on the leader. Research by Kurt Lewin found that autocratic groups were productive when supervised but showed hostility and aggression, and productivity dropped immediately when the leader left."
        },
        {
          id: "leadership-101-l06-c2",
          title: "Democratic Leadership",
          content:
            "Democratic leaders involve team members in decision-making, encouraging participation, discussion, and shared ownership. Lewin's research showed that democratic groups produced work of higher quality and exhibited greater satisfaction, creativity, and commitment. The trade-off is speed — consensus-building takes time. Democratic leadership is most effective with knowledgeable teams working on complex problems where diverse perspectives improve outcomes."
        },
        {
          id: "leadership-101-l06-c3",
          title: "Laissez-Faire Leadership",
          content:
            "Laissez-faire leaders provide minimal direction, granting followers maximum autonomy. This works well with highly skilled, self-motivated experts — research scientists, senior creatives, or experienced consultants who need freedom to innovate. However, it often produces the worst outcomes in Lewin's studies: confusion, low productivity, and frustration when followers need guidance. Effective use of laissez-faire requires the leader to remain available as a resource while trusting the team's competence."
        }
      ],
      flashcards: [
        { id: "leadership-101-l06-f1", front: "Autocratic leadership", back: "A style where the leader makes decisions unilaterally — effective in crises and with inexperienced teams, but suppresses creativity and satisfaction over time" },
        { id: "leadership-101-l06-f2", front: "Democratic leadership", back: "A participative style involving team members in decisions — produces higher quality work and satisfaction but is slower due to consensus-building" },
        { id: "leadership-101-l06-f3", front: "Laissez-faire leadership", back: "A hands-off style granting maximum autonomy — effective with highly skilled, self-motivated experts but often produces confusion and low productivity with less experienced teams" }
      ]
    },
    {
      id: "leadership-101-l07",
      title: "Final Assessment: Leadership Foundations",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "leadership-101-l07-q1",
          text: "Which leadership theory was criticized for ignoring situational factors and assuming leaders are born with fixed traits?",
          options: [
            { id: "a", text: "Behavioral theory" },
            { id: "b", text: "Situational leadership" },
            { id: "c", text: "Great Man / Trait theory" },
            { id: "d", text: "Path-goal theory" }
          ],
          correctOptionId: "c",
          explanation: "Great Man and trait theories assumed leaders possess innate, fixed qualities and ignored the role of context, situation, and follower characteristics in determining leadership effectiveness."
        },
        {
          id: "leadership-101-l07-q2",
          text: "Kurt Lewin's research found that which leadership style produced the highest quality work with the greatest team satisfaction?",
          options: [
            { id: "a", text: "Autocratic" },
            { id: "b", text: "Democratic" },
            { id: "c", text: "Laissez-faire" },
            { id: "d", text: "Transactional" }
          ],
          correctOptionId: "b",
          explanation: "Lewin's studies at the University of Iowa demonstrated that democratic leadership produced higher quality work, greater creativity, and more satisfaction compared to autocratic or laissez-faire styles."
        },
        {
          id: "leadership-101-l07-q3",
          text: "In path-goal theory, which leader behavior is best suited for complex tasks where followers need motivation to excel?",
          options: [
            { id: "a", text: "Directive" },
            { id: "b", text: "Supportive" },
            { id: "c", text: "Participative" },
            { id: "d", text: "Achievement-oriented" }
          ],
          correctOptionId: "d",
          explanation: "Achievement-oriented leadership sets challenging goals and expresses confidence in followers' abilities, which is most effective for complex tasks requiring high performance and motivation."
        },
        {
          id: "leadership-101-l07-q4",
          text: "A new manager uses the same directive approach with all team members regardless of their experience. Which leadership concept would best address this problem?",
          options: [
            { id: "a", text: "Trait theory — the manager lacks the right personality traits" },
            { id: "b", text: "Great Man theory — the manager was not born to lead" },
            { id: "c", text: "Situational leadership — the manager should adapt style to follower readiness" },
            { id: "d", text: "Laissez-faire leadership — the manager should stop directing entirely" }
          ],
          correctOptionId: "c",
          explanation: "Situational leadership teaches that leaders must adapt their style to follower readiness. Using a single directive style ignores differences in ability and willingness across team members."
        }
      ]
    }
  ],
};
