import type { LearningModule } from "@/lib/modules/types";

export const BusinessEthics101Module: LearningModule = {
  id: "business-ethics-101",
  title: "Business Ethics Foundations",
  description:
    "Explore the moral principles that guide business conduct. Learn major ethical theories, stakeholder analysis, corporate social responsibility, and practical frameworks for making sound ethical decisions in complex business environments.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "ethics"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define business ethics and explain its importance in modern organizations",
    "Compare utilitarian, deontological, and virtue ethics approaches",
    "Distinguish stakeholder theory from shareholder primacy",
    "Explain the core principles of corporate social responsibility",
    "Apply ethical decision-making frameworks to business dilemmas",
    "Analyze how personal values shape professional conduct",
    "Evaluate real-world ethical scenarios using structured reasoning"
  ],
  lessons: [
    {
      id: "business-ethics-101-l01",
      title: "What Is Business Ethics?",
      type: "video",
      duration: 12,
      objectives: [
        "Define business ethics and distinguish it from personal morality",
        "Explain why ethical conduct matters for organizational success",
        "Identify key areas where ethical issues arise in business"
      ],
      chunks: [
        {
          id: "business-ethics-101-l01-c1",
          title: "Defining Business Ethics",
          content:
            "Business ethics is the study of appropriate business policies and practices regarding potentially controversial subjects such as corporate governance, insider trading, bribery, discrimination, and fiduciary responsibilities. It goes beyond legal compliance to examine what organizations ought to do, not just what they are permitted to do. While personal morality guides individual behavior, business ethics applies moral reasoning to organizational decisions that affect employees, customers, communities, and the environment."
        },
        {
          id: "business-ethics-101-l01-c2",
          title: "Why Ethics Matters in Business",
          content:
            "Ethical conduct is not merely a moral luxury — it is a strategic necessity. Companies with strong ethical cultures experience lower employee turnover, fewer lawsuits, stronger brand loyalty, and better long-term financial performance. The 2001 Enron scandal destroyed $74 billion in shareholder value and eliminated 20,000 jobs, demonstrating how ethical failures can annihilate entire organizations. Trust, once broken, is extraordinarily expensive to rebuild."
        },
        {
          id: "business-ethics-101-l01-c3",
          title: "Where Ethical Issues Arise",
          content:
            "Ethical challenges surface across every business function. Marketing faces questions about truth in advertising and data privacy. Finance confronts dilemmas around earnings manipulation and insider information. Human resources deals with discrimination, harassment, and fair compensation. Supply chain management grapples with labor conditions and environmental impact. Recognizing these pressure points is the first step toward building an ethically aware organization."
        }
      ],
      flashcards: [
        { id: "business-ethics-101-l01-f1", front: "Business ethics", back: "The study of appropriate business policies and practices regarding controversial subjects — examining what organizations ought to do beyond mere legal compliance" },
        { id: "business-ethics-101-l01-f2", front: "Why does ethics matter strategically?", back: "Ethical cultures produce lower turnover, fewer lawsuits, stronger brand loyalty, and better long-term financial performance; ethical failures can destroy entire organizations" },
        { id: "business-ethics-101-l01-f3", front: "Key business functions where ethical issues arise", back: "Marketing (truth in advertising, privacy), Finance (earnings manipulation, insider info), HR (discrimination, compensation), Supply chain (labor conditions, environment)" }
      ]
    },
    {
      id: "business-ethics-101-l02",
      title: "Ethical Theories: Utilitarianism & Consequentialism",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the principle of utility and its application to business decisions",
        "Distinguish between act and rule utilitarianism",
        "Identify strengths and limitations of consequentialist thinking in business"
      ],
      chunks: [
        {
          id: "business-ethics-101-l02-c1",
          title: "The Utilitarian Framework",
          content:
            "Utilitarianism, developed by Jeremy Bentham and John Stuart Mill, judges actions by their consequences: the right action is the one that produces the greatest good for the greatest number. In business, this translates to cost-benefit analysis — weighing the total positive and negative effects of a decision on all affected parties. A pharmaceutical company deciding whether to release a drug weighs the benefits to patients against potential side effects and costs."
        },
        {
          id: "business-ethics-101-l02-c2",
          title: "Act vs. Rule Utilitarianism",
          content:
            "Act utilitarianism evaluates each individual action on its own merits — what produces the most good in this specific situation? Rule utilitarianism asks which general rules, if followed consistently, would produce the greatest overall good. A business applying act utilitarianism might justify breaking a contract if doing so maximizes total welfare. Rule utilitarianism would argue that a general rule of keeping contracts produces more good over time, even if breaking one particular contract seems beneficial."
        },
        {
          id: "business-ethics-101-l02-c3",
          title: "Strengths and Limitations",
          content:
            "Utilitarianism is practical and widely used in policy and business analysis because it provides a clear decision procedure: calculate outcomes and choose the option with the highest net benefit. However, it has significant limitations. It can justify harming minorities if doing so benefits the majority. It struggles to quantify intangible values like dignity, fairness, or justice. And predicting all consequences of a complex business decision is often impossible."
        }
      ],
      flashcards: [
        { id: "business-ethics-101-l02-f1", front: "Utilitarianism", back: "Ethical theory judging actions by consequences — the right action produces the greatest good for the greatest number (Bentham and Mill)" },
        { id: "business-ethics-101-l02-f2", front: "Act vs. Rule utilitarianism", back: "Act: evaluates each action individually for maximum good. Rule: asks which general rules, if consistently followed, produce the greatest overall good" },
        { id: "business-ethics-101-l02-f3", front: "Key limitation of utilitarianism in business", back: "Can justify harming minorities for majority benefit, struggles to quantify intangible values like dignity and justice, and predicting all consequences is often impossible" }
      ]
    },
    {
      id: "business-ethics-101-l03",
      title: "Deontology, Virtue Ethics, and Other Frameworks",
      type: "interactive",
      duration: 15,
      objectives: [
        "Explain Kant's categorical imperative and its business applications",
        "Describe Aristotle's virtue ethics and character-based reasoning",
        "Compare deontological, virtue-based, and rights-based approaches"
      ],
      chunks: [
        {
          id: "business-ethics-101-l03-c1",
          title: "Kantian Deontology",
          content:
            "Immanuel Kant argued that morality is grounded in duty, not outcomes. His categorical imperative states: act only according to rules you could will to be universal laws. In business, this means asking: 'If every company did what we are about to do, would the system still function?' Deception in negotiations fails this test because universal lying would destroy trust. Kant also insisted on treating people as ends in themselves, never merely as means — a principle that challenges exploitative labor practices."
        },
        {
          id: "business-ethics-101-l03-c2",
          title: "Virtue Ethics",
          content:
            "Virtue ethics, rooted in Aristotle, focuses not on rules or outcomes but on the character of the decision-maker. It asks: 'What would a person of good character do?' The key virtues in business include honesty, courage, fairness, prudence, and temperance. Rather than following a formula, virtue ethics encourages developing practical wisdom (phronesis) — the ability to discern the right action in particular circumstances through experience and reflection."
        },
        {
          id: "business-ethics-101-l03-c3",
          title: "Rights-Based Ethics and Social Contract Theory",
          content:
            "Rights-based ethics holds that individuals possess fundamental rights — to life, liberty, privacy, property, and fair treatment — that must not be violated regardless of the consequences. Social contract theory, from thinkers like Rawls, argues that ethical rules are those that rational people would agree to from behind a 'veil of ignorance,' not knowing their position in society. This framework powerfully challenges policies that benefit the privileged at the expense of the vulnerable."
        }
      ],
      flashcards: [
        { id: "business-ethics-101-l03-f1", front: "Kant's categorical imperative", back: "Act only according to rules you could will to be universal laws — if every company did it, would the system still function? Also: treat people as ends, never merely as means" },
        { id: "business-ethics-101-l03-f2", front: "Virtue ethics (Aristotle)", back: "Focuses on the character of the decision-maker rather than rules or outcomes; develops practical wisdom (phronesis) through experience and reflection" },
        { id: "business-ethics-101-l03-f3", front: "Rawls' veil of ignorance", back: "Ethical rules are those rational people would agree to without knowing their position in society — challenges policies that benefit the privileged at the expense of the vulnerable" }
      ]
    },
    {
      id: "business-ethics-101-l04",
      title: "Stakeholder vs. Shareholder Perspectives",
      type: "video",
      duration: 13,
      objectives: [
        "Explain Milton Friedman's shareholder primacy doctrine",
        "Describe R. Edward Freeman's stakeholder theory",
        "Evaluate the strengths and weaknesses of each perspective"
      ],
      chunks: [
        {
          id: "business-ethics-101-l04-c1",
          title: "Shareholder Primacy",
          content:
            "Milton Friedman argued in 1970 that the sole social responsibility of business is to increase its profits within the rules of the game. Managers are agents of shareholders and should maximize shareholder value. Spending corporate resources on social causes, Friedman contended, amounts to an unauthorized tax on shareholders. This view dominated corporate governance for decades and remains influential, particularly in American business culture and financial markets."
        },
        {
          id: "business-ethics-101-l04-c2",
          title: "Stakeholder Theory",
          content:
            "R. Edward Freeman's stakeholder theory, introduced in 1984, argues that businesses should create value for all stakeholders — employees, customers, suppliers, communities, and shareholders — not just owners. Freeman contended that managing stakeholder relationships effectively is what actually generates sustainable shareholder value. Ignoring stakeholders creates risks: unhappy employees reduce productivity, alienated communities impose regulations, and dissatisfied customers defect to competitors."
        },
        {
          id: "business-ethics-101-l04-c3",
          title: "The Modern Debate",
          content:
            "The 2019 Business Roundtable statement, signed by 181 CEOs, redefined the purpose of a corporation to include commitment to all stakeholders. Critics argue this dilutes accountability — if managers serve everyone, they are accountable to no one. Supporters counter that narrow shareholder focus encourages short-termism, environmental destruction, and inequality. The practical reality for most firms lies somewhere in between: balancing stakeholder needs while maintaining financial viability."
        }
      ],
      flashcards: [
        { id: "business-ethics-101-l04-f1", front: "Shareholder primacy (Friedman)", back: "The sole social responsibility of business is to increase profits within the rules — managers are agents of shareholders and should maximize their value" },
        { id: "business-ethics-101-l04-f2", front: "Stakeholder theory (Freeman)", back: "Businesses should create value for all stakeholders — employees, customers, suppliers, communities, shareholders — not just owners" },
        { id: "business-ethics-101-l04-f3", front: "2019 Business Roundtable statement", back: "181 CEOs redefined corporate purpose to include commitment to all stakeholders, moving beyond shareholder primacy" }
      ]
    },
    {
      id: "business-ethics-101-l05",
      title: "Checkpoint: Ethical Theories & Perspectives",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "business-ethics-101-l05-q1",
          text: "A company decides to close a profitable factory because the environmental damage it causes harms the surrounding community. Which ethical framework best supports this decision?",
          options: [
            { id: "a", text: "Shareholder primacy — the factory is profitable and should stay open" },
            { id: "b", text: "Utilitarianism — the harm to the community outweighs the profit generated" },
            { id: "c", text: "Act utilitarianism — each factory should be evaluated individually for profit" },
            { id: "d", text: "Friedman's doctrine — social spending is an unauthorized tax on shareholders" }
          ],
          correctOptionId: "b",
          explanation: "Utilitarianism weighs total consequences for all affected parties. If the environmental harm to the community outweighs the profit benefit to shareholders and employees, closing the factory maximizes overall good."
        },
        {
          id: "business-ethics-101-l05-q2",
          text: "Kant's categorical imperative would most likely prohibit which of the following business practices?",
          options: [
            { id: "a", text: "Charging premium prices for luxury goods" },
            { id: "b", text: "Systematically deceiving customers about product quality" },
            { id: "c", text: "Entering a highly competitive market" },
            { id: "d", text: "Paying dividends to shareholders" }
          ],
          correctOptionId: "b",
          explanation: "Systematic deception fails the universalizability test — if every company deceived customers, trust in markets would collapse. Kant requires that actions be based on principles that could function as universal laws."
        },
        {
          id: "business-ethics-101-l05-q3",
          text: "Which statement best reflects stakeholder theory as defined by R. Edward Freeman?",
          options: [
            { id: "a", text: "Shareholders are the only legitimate claimants on corporate profits" },
            { id: "b", text: "Government regulation is the best way to protect non-shareholder interests" },
            { id: "c", text: "Managing relationships with all stakeholders effectively generates sustainable value" },
            { id: "d", text: "Corporate social responsibility is an unauthorized tax on shareholders" }
          ],
          correctOptionId: "c",
          explanation: "Freeman argued that creating value for all stakeholders — employees, customers, suppliers, communities — is what actually drives long-term shareholder value and organizational success."
        },
        {
          id: "business-ethics-101-l05-q4",
          text: "A virtue ethicist evaluating a business leader would primarily focus on:",
          options: [
            { id: "a", text: "Whether the leader's actions produced the maximum profit" },
            { id: "b", text: "Whether the leader followed all applicable laws and regulations" },
            { id: "c", text: "The leader's character traits such as honesty, courage, and practical wisdom" },
            { id: "d", text: "Whether the leader's actions could be universalized as a rule" }
          ],
          correctOptionId: "c",
          explanation: "Virtue ethics focuses on the character of the moral agent rather than on rules (deontology) or outcomes (consequentialism). It asks whether the person demonstrates virtues like honesty, courage, fairness, and practical wisdom."
        }
      ]
    },
    {
      id: "business-ethics-101-l06",
      title: "Corporate Social Responsibility & Ethical Decision-Making",
      type: "video",
      duration: 14,
      objectives: [
        "Explain Carroll's CSR pyramid and its four levels of responsibility",
        "Apply a structured ethical decision-making framework",
        "Recognize how personal values influence professional ethical choices"
      ],
      chunks: [
        {
          id: "business-ethics-101-l06-c1",
          title: "Carroll's CSR Pyramid",
          content:
            "Archie Carroll's CSR pyramid identifies four levels of corporate responsibility. At the base is economic responsibility — being profitable, since without profit no other responsibilities can be met. Next is legal responsibility — obeying laws and regulations. Third is ethical responsibility — doing what is right, fair, and just beyond legal requirements. At the top is philanthropic responsibility — contributing to community and quality of life. All four levels operate simultaneously, not sequentially."
        },
        {
          id: "business-ethics-101-l06-c2",
          title: "Ethical Decision-Making Frameworks",
          content:
            "A practical framework for ethical decision-making involves six steps: (1) Identify the ethical issue clearly. (2) Gather all relevant facts. (3) Identify all stakeholders affected. (4) Evaluate options using multiple ethical lenses — utilitarian, deontological, virtue-based, and rights-based. (5) Make a decision and test it: Would you be comfortable if your reasoning appeared on the front page of a newspaper? (6) Implement the decision, monitor outcomes, and reflect on lessons learned."
        },
        {
          id: "business-ethics-101-l06-c3",
          title: "Personal Values in Business",
          content:
            "Personal values — integrity, honesty, fairness, compassion — form the foundation of ethical behavior in organizations. Research shows that individuals are more likely to act ethically when they have reflected on and articulated their own values. The 'Giving Voice to Values' approach developed by Mary Gentile encourages professionals to prepare scripts and action plans for situations where their values conflict with organizational pressure. Ethical behavior is a skill that can be developed through practice."
        }
      ],
      flashcards: [
        { id: "business-ethics-101-l06-f1", front: "Carroll's CSR Pyramid (bottom to top)", back: "Economic (be profitable) → Legal (obey laws) → Ethical (do what is right beyond law) → Philanthropic (contribute to community) — all operate simultaneously" },
        { id: "business-ethics-101-l06-f2", front: "Six-step ethical decision-making framework", back: "Identify issue → Gather facts → Identify stakeholders → Evaluate with multiple ethical lenses → Decide and test (newspaper test) → Implement and reflect" },
        { id: "business-ethics-101-l06-f3", front: "Giving Voice to Values (Mary Gentile)", back: "Approach encouraging professionals to prepare scripts and action plans for situations where personal values conflict with organizational pressure" }
      ]
    },
    {
      id: "business-ethics-101-l07",
      title: "Final Assessment: Business Ethics Foundations",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "business-ethics-101-l07-q1",
          text: "In Carroll's CSR pyramid, which responsibility forms the base?",
          options: [
            { id: "a", text: "Philanthropic responsibility" },
            { id: "b", text: "Legal responsibility" },
            { id: "c", text: "Ethical responsibility" },
            { id: "d", text: "Economic responsibility" }
          ],
          correctOptionId: "d",
          explanation: "Economic responsibility — being profitable — forms the base of Carroll's pyramid because without financial viability, a company cannot fulfill any other responsibilities."
        },
        {
          id: "business-ethics-101-l07-q2",
          text: "Which ethical approach would ask: 'What would a person of excellent character do in this situation?'",
          options: [
            { id: "a", text: "Utilitarianism" },
            { id: "b", text: "Deontology" },
            { id: "c", text: "Virtue ethics" },
            { id: "d", text: "Social contract theory" }
          ],
          correctOptionId: "c",
          explanation: "Virtue ethics, rooted in Aristotle, focuses on the character of the decision-maker and asks what a virtuous person — one possessing practical wisdom — would do in the circumstances."
        },
        {
          id: "business-ethics-101-l07-q3",
          text: "Rule utilitarianism differs from act utilitarianism in that it:",
          options: [
            { id: "a", text: "Ignores consequences entirely" },
            { id: "b", text: "Evaluates general rules rather than individual actions for producing the greatest good" },
            { id: "c", text: "Focuses exclusively on shareholder value" },
            { id: "d", text: "Requires unanimous stakeholder agreement" }
          ],
          correctOptionId: "b",
          explanation: "Rule utilitarianism asks which general rules, if consistently followed by everyone, would produce the greatest overall good — unlike act utilitarianism, which evaluates each individual action separately."
        },
        {
          id: "business-ethics-101-l07-q4",
          text: "A manager faces pressure to misreport financial figures. According to the 'Giving Voice to Values' approach, the best preparation is to:",
          options: [
            { id: "a", text: "Wait until the situation arises and then decide spontaneously" },
            { id: "b", text: "Always defer to the supervisor's judgment" },
            { id: "c", text: "Prepare scripts and action plans in advance for values conflicts" },
            { id: "d", text: "Focus solely on the legal consequences of misreporting" }
          ],
          correctOptionId: "c",
          explanation: "The Giving Voice to Values approach emphasizes proactive preparation — developing scripts, arguments, and action plans before values conflicts arise so professionals can respond effectively under pressure."
        }
      ]
    }
  ],
};
