import type { LearningModule } from "@/lib/modules/types";

export const BusinessEthics401Module: LearningModule = {
  id: "business-ethics-401",
  title: "Ethical Leadership & Sustainable Business",
  description:
    "Master the principles of ethical leadership and sustainable business models. Explore how leaders build ethical cultures, the stakeholder vs shareholder capitalism debate, B Corps, triple bottom line thinking, circular economy models, and the emerging ethics of AI and technology in business.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "ethics"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Compare ethical leadership models and their impact on organizational culture",
    "Design strategies for building and sustaining an ethical organizational culture",
    "Evaluate the stakeholder capitalism vs shareholder capitalism debate",
    "Analyze B Corps, social enterprises, and purpose-driven business models",
    "Apply triple bottom line thinking to business strategy",
    "Assess circular economy models and their viability",
    "Anticipate ethical challenges posed by AI and emerging technology in business"
  ],
  lessons: [
    {
      id: "business-ethics-401-l01",
      title: "Ethical Leadership Models",
      type: "video",
      duration: 14,
      objectives: [
        "Define ethical leadership and distinguish it from other leadership styles",
        "Compare servant leadership, authentic leadership, and transformational leadership",
        "Explain how ethical leaders influence organizational behavior"
      ],
      chunks: [
        {
          id: "business-ethics-401-l01-c1",
          title: "What Makes Leadership Ethical?",
          content:
            "Ethical leadership is the demonstration of normatively appropriate conduct through personal actions and interpersonal relationships, and the promotion of such conduct to followers through communication, reinforcement, and decision-making. Research by Brown, Trevino, and Harrison identifies two pillars: being a moral person (integrity, trustworthiness, fairness) and being a moral manager (actively promoting ethics through visible actions, rewards, and discipline). Leaders who are moral persons but passive moral managers send ambiguous signals — their ethical standards are invisible to the organization."
        },
        {
          id: "business-ethics-401-l01-c2",
          title: "Servant, Authentic, and Transformational Leadership",
          content:
            "Servant leadership, developed by Robert Greenleaf, prioritizes the needs of followers and the community over the leader's own interests. The servant leader asks: 'Do those served grow as persons? Do they become healthier, wiser, freer?' Authentic leadership emphasizes self-awareness, relational transparency, balanced processing of information, and internalized moral perspective. Transformational leadership inspires followers to transcend self-interest for collective goals through idealized influence, inspirational motivation, intellectual stimulation, and individualized consideration. Each model places ethics at the center of effective leadership."
        },
        {
          id: "business-ethics-401-l01-c3",
          title: "The Influence Mechanism",
          content:
            "Ethical leaders shape behavior through social learning — employees observe and emulate leaders they perceive as credible, attractive, and legitimate role models. Research consistently shows that ethical leadership reduces employee deviance, increases organizational citizenship behavior, improves job satisfaction, and strengthens commitment. Critically, the effect cascades: ethical top leaders influence middle managers, who in turn shape frontline employee behavior. This 'trickle-down' effect means ethical leadership — or its absence — reverberates throughout the entire organization."
        }
      ],
      flashcards: [
        { id: "business-ethics-401-l01-f1", front: "Two pillars of ethical leadership (Brown, Trevino, Harrison)", back: "Being a moral person (integrity, trustworthiness, fairness) AND being a moral manager (actively promoting ethics through visible actions, rewards, and discipline)" },
        { id: "business-ethics-401-l01-f2", front: "Servant leadership (Greenleaf)", back: "Prioritizes the needs of followers and community over the leader's interests — the test: do those served grow as persons, become healthier, wiser, freer?" },
        { id: "business-ethics-401-l01-f3", front: "Trickle-down effect in ethical leadership", back: "Ethical top leaders influence middle managers who shape frontline behavior — social learning cascades through organizational levels, making leadership ethics (or their absence) pervasive" }
      ]
    },
    {
      id: "business-ethics-401-l02",
      title: "Building Ethical Organizational Culture",
      type: "video",
      duration: 13,
      objectives: [
        "Identify the components of an ethical organizational culture",
        "Explain how formal and informal systems shape ethical behavior",
        "Design interventions to strengthen organizational ethics"
      ],
      chunks: [
        {
          id: "business-ethics-401-l02-c1",
          title: "Ethical Culture vs. Ethical Climate",
          content:
            "Ethical culture refers to the formal and informal systems that promote ethical conduct — codes of conduct, reward systems, authority structures, training programs, rituals, and stories. Ethical climate is the shared perception of 'how things are done around here' regarding ethics. Linda Trevino's research shows that ethical culture is more predictive of employee behavior than formal compliance programs alone. An organization can have an impressive code of ethics but a toxic ethical climate if leaders routinely tolerate or reward unethical behavior."
        },
        {
          id: "business-ethics-401-l02-c2",
          title: "Formal Systems: Codes, Training, and Incentives",
          content:
            "Formal ethics programs include codes of conduct, ethics training, hotlines, ethics officers, and compliance audits. However, research shows that these programs are effective only when they are perceived as values-based rather than compliance-driven. A values-based program helps employees understand why ethical conduct matters and how to reason through dilemmas. A compliance-only program focused on rules and punishment can actually increase unethical behavior by creating a game of avoiding detection. Incentive systems must also align — if rewards drive aggressive behavior, no code of conduct will counteract that signal."
        },
        {
          id: "business-ethics-401-l02-c3",
          title: "Informal Systems: Norms, Heroes, and Stories",
          content:
            "Informal cultural elements are often more powerful than formal programs. The stories employees tell about what really gets rewarded or punished shape behavior more than written policies. Organizational heroes — the people celebrated in the culture — signal what the organization truly values. Peer norms create powerful conformity pressure: if 'everyone does it,' individuals rationalize unethical behavior. Leaders build ethical culture by being intentional about all these elements — telling stories of ethical courage, celebrating integrity, confronting misconduct publicly, and ensuring that ethical behavior is never punished by the system."
        }
      ],
      flashcards: [
        { id: "business-ethics-401-l02-f1", front: "Ethical culture vs. ethical climate", back: "Culture: formal and informal systems promoting ethics (codes, rewards, stories). Climate: shared perception of 'how things are done around here' — climate can contradict formal culture" },
        { id: "business-ethics-401-l02-f2", front: "Values-based vs. compliance-based ethics programs", back: "Values-based: helps employees understand why ethics matters and reason through dilemmas. Compliance-only: focuses on rules and punishment, can increase unethical behavior by creating avoidance games" },
        { id: "business-ethics-401-l02-f3", front: "Most powerful informal culture shapers", back: "Stories about what gets rewarded/punished, organizational heroes who are celebrated, and peer norms — often more influential than written codes of conduct" }
      ]
    },
    {
      id: "business-ethics-401-l03",
      title: "Stakeholder Capitalism vs. Shareholder Capitalism",
      type: "interactive",
      duration: 15,
      objectives: [
        "Trace the historical evolution from shareholder to stakeholder capitalism",
        "Analyze the arguments for and against each model",
        "Evaluate the practical implications for corporate strategy and governance"
      ],
      chunks: [
        {
          id: "business-ethics-401-l03-c1",
          title: "The Shareholder Primacy Era",
          content:
            "Shareholder capitalism dominated from the 1970s through the 2010s, driven by Milton Friedman's doctrine and the agency theory of Jensen and Meckling. Under this model, maximizing shareholder value is the corporation's primary obligation. Executive compensation was tied to stock price, hostile takeovers disciplined underperforming management, and share buybacks returned capital to owners. Proponents argue this model creates accountability and allocates capital efficiently. Critics counter that it drove short-termism, wage stagnation, environmental degradation, and the financial crisis of 2008."
        },
        {
          id: "business-ethics-401-l03-c2",
          title: "The Stakeholder Capitalism Movement",
          content:
            "The 2019 Business Roundtable statement and the World Economic Forum's Davos Manifesto signaled a shift toward stakeholder capitalism — the idea that corporations should serve all stakeholders: employees, customers, suppliers, communities, and shareholders. Klaus Schwab argues that stakeholder capitalism generates better long-term outcomes because it builds trust, reduces regulatory risk, attracts talent, and creates more resilient business models. The European Union has moved further, mandating supply chain due diligence, ESG disclosure, and board-level worker representation in some member states."
        },
        {
          id: "business-ethics-401-l03-c3",
          title: "The Practical Tension",
          content:
            "The stakeholder model faces genuine practical challenges. When stakeholder interests conflict — layoffs that benefit shareholders but harm employees, or environmental investments that reduce short-term profits — who decides? Without clear metrics for stakeholder value, managers gain discretion that could shield self-serving behavior. Lucian Bebchuk and Roberto Tallarita argue that stakeholderism is largely rhetoric, as most signatory CEOs made no governance changes after the Business Roundtable statement. The resolution may lie in defining specific, measurable commitments to each stakeholder group rather than vague purpose statements."
        }
      ],
      flashcards: [
        { id: "business-ethics-401-l03-f1", front: "Shareholder capitalism criticism", back: "Drove short-termism through stock-price-linked pay, encouraged share buybacks over investment, contributed to wage stagnation, environmental harm, and the 2008 financial crisis" },
        { id: "business-ethics-401-l03-f2", front: "Stakeholder capitalism (Schwab/Davos)", back: "Corporations serve all stakeholders — builds trust, reduces regulatory risk, attracts talent, and creates resilient models; but faces criticism as potentially vague and unaccountable" },
        { id: "business-ethics-401-l03-f3", front: "Bebchuk and Tallarita's critique of stakeholderism", back: "Business Roundtable signatory CEOs made few actual governance changes — stakeholderism may be rhetoric that gives managers discretion to shield self-serving behavior without clear metrics" }
      ]
    },
    {
      id: "business-ethics-401-l04",
      title: "B Corps, Social Enterprises & Triple Bottom Line",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the B Corp certification process and its significance",
        "Distinguish between social enterprises and traditional businesses",
        "Apply the triple bottom line framework to evaluate business performance"
      ],
      chunks: [
        {
          id: "business-ethics-401-l04-c1",
          title: "Certified B Corporations",
          content:
            "B Corps are for-profit companies certified by B Lab to meet rigorous standards of social and environmental performance, accountability, and transparency. Certification requires scoring at least 80 out of 200 on the B Impact Assessment, which evaluates governance, workers, community, environment, and customers. B Corps also amend their legal governing documents to require consideration of all stakeholders, not just shareholders. As of 2025, over 8,000 companies across 90 countries are certified, including Patagonia, Ben & Jerry's, and Danone North America."
        },
        {
          id: "business-ethics-401-l04-c2",
          title: "Social Enterprises",
          content:
            "Social enterprises are organizations that apply commercial strategies to maximize social or environmental impact alongside financial returns. They exist on a spectrum: from nonprofits with earned revenue streams, to hybrid organizations like L3Cs (low-profit limited liability companies), to for-profit companies with embedded social missions. Muhammad Yunus' Grameen Bank pioneered microfinance as a social enterprise model. The key distinction is that social enterprises measure success by impact delivered, not just profit generated, though financial sustainability remains essential."
        },
        {
          id: "business-ethics-401-l04-c3",
          title: "The Triple Bottom Line",
          content:
            "John Elkington coined the 'triple bottom line' (TBL) in 1994, arguing that companies should measure success across three dimensions: profit (economic value), people (social impact), and planet (environmental impact). TBL challenged the assumption that business exists solely for financial returns. However, Elkington himself recalled the concept in 2018, arguing it had been reduced to an accounting tool rather than driving the systemic change he intended. True TBL thinking requires integrating social and environmental considerations into core strategy, not treating them as separate reporting exercises."
        }
      ],
      flashcards: [
        { id: "business-ethics-401-l04-f1", front: "B Corp certification", back: "Certified by B Lab; requires 80+ on B Impact Assessment (governance, workers, community, environment, customers) plus legal amendments to consider all stakeholders" },
        { id: "business-ethics-401-l04-f2", front: "Social enterprise", back: "Organization applying commercial strategies to maximize social/environmental impact alongside financial returns — measures success by impact delivered, not just profit" },
        { id: "business-ethics-401-l04-f3", front: "Triple bottom line (Elkington, 1994)", back: "Profit, People, Planet — measuring success across economic, social, and environmental dimensions; Elkington recalled the concept in 2018, arguing it became a mere accounting tool rather than driving systemic change" }
      ]
    },
    {
      id: "business-ethics-401-l05",
      title: "Checkpoint: Ethical Leadership & Sustainable Models",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "business-ethics-401-l05-q1",
          text: "According to research on ethical leadership, a leader who is personally ethical but does not actively promote ethics in the organization is:",
          options: [
            { id: "a", text: "An ethical leader because personal integrity is sufficient" },
            { id: "b", text: "A moral person but not a moral manager — sending ambiguous signals to the organization" },
            { id: "c", text: "A transformational leader who leads by quiet example" },
            { id: "d", text: "A servant leader focused on follower needs" }
          ],
          correctOptionId: "b",
          explanation: "Brown, Trevino, and Harrison's research identifies two pillars: being a moral person AND being a moral manager. A leader who is ethical personally but passive about promoting ethics is invisible as an ethical role model — the organization receives ambiguous signals."
        },
        {
          id: "business-ethics-401-l05-q2",
          text: "Why did John Elkington 'recall' his own triple bottom line concept in 2018?",
          options: [
            { id: "a", text: "He decided profit should be the only measure of success" },
            { id: "b", text: "Environmental metrics proved impossible to measure" },
            { id: "c", text: "It was being used as an accounting tool rather than driving systemic change" },
            { id: "d", text: "Governments mandated a different framework" }
          ],
          correctOptionId: "c",
          explanation: "Elkington argued that TBL had been captured as a mere accounting and reporting tool, rather than driving the fundamental transformation of capitalism he intended. He wanted companies to go beyond measurement to systemic change."
        },
        {
          id: "business-ethics-401-l05-q3",
          text: "A key criticism of stakeholder capitalism is that:",
          options: [
            { id: "a", text: "It focuses too narrowly on shareholder returns" },
            { id: "b", text: "Without clear metrics, managers gain discretion that could shield self-serving behavior" },
            { id: "c", text: "It was never endorsed by any major business organization" },
            { id: "d", text: "It requires companies to become nonprofit organizations" }
          ],
          correctOptionId: "b",
          explanation: "Critics like Bebchuk and Tallarita argue that vague stakeholder commitments without measurable targets give managers unaccountable discretion — potentially worse than the shareholder model's clear accountability for financial performance."
        },
        {
          id: "business-ethics-401-l05-q4",
          text: "To become a certified B Corp, a company must:",
          options: [
            { id: "a", text: "Convert to nonprofit status" },
            { id: "b", text: "Score at least 80 on the B Impact Assessment and amend legal governing documents" },
            { id: "c", text: "Donate at least 50% of profits to charity" },
            { id: "d", text: "Be headquartered in the United States" }
          ],
          correctOptionId: "b",
          explanation: "B Corp certification requires scoring at least 80 out of 200 on B Lab's B Impact Assessment and amending corporate legal documents to require consideration of all stakeholders. Companies remain for-profit and can be based anywhere in the world."
        }
      ]
    },
    {
      id: "business-ethics-401-l06",
      title: "Circular Economy Business Models",
      type: "video",
      duration: 13,
      objectives: [
        "Define the circular economy and contrast it with the linear model",
        "Identify circular business model strategies",
        "Evaluate the business case for circular economy adoption"
      ],
      chunks: [
        {
          id: "business-ethics-401-l06-c1",
          title: "Linear vs. Circular Economy",
          content:
            "The traditional linear economy follows a 'take-make-dispose' model: extract raw materials, manufacture products, sell them, and discard them as waste. This model assumes infinite resources and unlimited waste absorption capacity — both false. The circular economy, popularized by the Ellen MacArthur Foundation, redesigns the system to eliminate waste and keep materials in use. It is inspired by natural systems where one organism's waste becomes another's nutrient. The three principles are: eliminate waste and pollution by design, circulate products and materials at their highest value, and regenerate natural systems."
        },
        {
          id: "business-ethics-401-l06-c2",
          title: "Circular Business Model Strategies",
          content:
            "Companies adopt circularity through several strategies. Product-as-a-service replaces ownership with access — Philips leases lighting rather than selling bulbs, maintaining ownership and responsibility for the product lifecycle. Design for disassembly and remanufacturing allows products to be rebuilt — Caterpillar remanufactures engines at 60% of the cost of new ones. Closed-loop recycling recovers materials — Interface carpet tiles are made from recycled fishing nets. Sharing platforms extend product utilization — car-sharing reduces the need for individual ownership. Each model decouples revenue from virgin resource consumption."
        },
        {
          id: "business-ethics-401-l06-c3",
          title: "The Business Case and Challenges",
          content:
            "The circular economy presents compelling economics: reduced raw material costs, new revenue streams from remanufacturing, stronger customer relationships through service models, and resilience against supply chain disruptions and resource price volatility. The Ellen MacArthur Foundation estimates the circular economy represents a $4.5 trillion opportunity by 2030. However, challenges include: redesigning products for circularity requires significant upfront investment, reverse logistics infrastructure is underdeveloped, consumer behavior change is slow, and regulatory frameworks often favor linear models through subsidies for virgin materials."
        }
      ],
      flashcards: [
        { id: "business-ethics-401-l06-f1", front: "Circular economy (three principles)", back: "Eliminate waste and pollution by design, circulate products and materials at highest value, regenerate natural systems — contrasts with linear take-make-dispose model" },
        { id: "business-ethics-401-l06-f2", front: "Product-as-a-service model", back: "Replaces ownership with access — the manufacturer retains ownership and lifecycle responsibility (e.g., Philips leasing lighting), decoupling revenue from virgin resource consumption" },
        { id: "business-ethics-401-l06-f3", front: "Key challenge for circular economy adoption", back: "Significant upfront product redesign investment, underdeveloped reverse logistics, slow consumer behavior change, and regulatory frameworks that subsidize virgin materials over recycled ones" }
      ]
    },
    {
      id: "business-ethics-401-l07",
      title: "Final Assessment: Ethical Leadership & Sustainable Business",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "business-ethics-401-l07-q1",
          text: "Which circular economy strategy does Caterpillar use when it rebuilds used engines at 60% of the cost of new ones?",
          options: [
            { id: "a", text: "Product-as-a-service" },
            { id: "b", text: "Closed-loop recycling" },
            { id: "c", text: "Remanufacturing" },
            { id: "d", text: "Sharing platform" }
          ],
          correctOptionId: "c",
          explanation: "Remanufacturing restores used products to like-new condition, extending their lifecycle and recovering embodied value. Caterpillar's remanufacturing program rebuilds engines and components, saving materials and costs."
        },
        {
          id: "business-ethics-401-l07-q2",
          text: "Research on ethical organizational culture shows that the most effective ethics programs are:",
          options: [
            { id: "a", text: "Compliance-based programs focused on rules and punishment" },
            { id: "b", text: "Values-based programs that help employees reason through ethical dilemmas" },
            { id: "c", text: "Programs that rely exclusively on written codes of conduct" },
            { id: "d", text: "Programs managed entirely by the legal department" }
          ],
          correctOptionId: "b",
          explanation: "Research shows values-based programs are more effective because they help employees understand why ethics matters and develop moral reasoning skills. Compliance-only programs can actually increase unethical behavior by turning ethics into a rule-avoidance game."
        },
        {
          id: "business-ethics-401-l07-q3",
          text: "A social enterprise differs from a traditional for-profit business primarily because it:",
          options: [
            { id: "a", text: "Cannot generate any profit" },
            { id: "b", text: "Measures success by social or environmental impact alongside financial returns" },
            { id: "c", text: "Must be organized as a nonprofit" },
            { id: "d", text: "Is exempt from all tax obligations" }
          ],
          correctOptionId: "b",
          explanation: "Social enterprises use commercial strategies but measure success by impact delivered alongside financial returns. They can be for-profit or hybrid organizations — financial sustainability is essential, but impact is the primary mission."
        },
        {
          id: "business-ethics-401-l07-q4",
          text: "The 'trickle-down' effect in ethical leadership research demonstrates that:",
          options: [
            { id: "a", text: "Ethics policies automatically flow from headquarters to subsidiaries" },
            { id: "b", text: "Top leaders' ethical behavior cascades through middle managers to frontline employees" },
            { id: "c", text: "Ethical culture only matters at the executive level" },
            { id: "d", text: "Financial performance always improves when leaders are ethical" }
          ],
          correctOptionId: "b",
          explanation: "The trickle-down effect shows that ethical leadership cascades through organizational levels: ethical top leaders influence middle managers' behavior, who in turn shape how frontline employees act — making leadership ethics pervasive throughout the organization."
        }
      ]
    }
  ],
};
