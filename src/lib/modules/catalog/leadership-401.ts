import type { LearningModule } from "@/lib/modules/types";

export const Leadership401Module: LearningModule = {
  id: "leadership-401",
  title: "Executive Leadership & Systems Thinking",
  description:
    "Master the highest level of leadership practice. Develop executive presence, make strategic decisions under deep ambiguity, apply systems thinking to complex organizations, lead through crisis, drive organizational transformation, ground your leadership in ethics, and craft a lasting leadership legacy.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "leadership"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Cultivate executive presence through communication and composure",
    "Apply decision-making frameworks to strategic choices under ambiguity",
    "Use Senge's five disciplines of systems thinking in organizational leadership",
    "Lead effectively during organizational crises",
    "Design and execute large-scale organizational transformations",
    "Integrate ethical reasoning and character into leadership practice",
    "Articulate and build a personal leadership legacy"
  ],
  lessons: [
    {
      id: "leadership-401-l01",
      title: "Executive Presence and Communication",
      type: "video",
      duration: 13,
      objectives: [
        "Define executive presence and its core dimensions",
        "Develop gravitas, communication, and appearance as leadership tools",
        "Apply executive communication techniques in high-stakes settings"
      ],
      chunks: [
        {
          id: "leadership-401-l01-c1",
          title: "What Is Executive Presence?",
          content:
            "Executive presence is the ability to project confidence, credibility, and composure in a way that inspires trust and commands attention. Sylvia Ann Hewlett's research identifies three pillars: gravitas (how you act — confidence, decisiveness, emotional intelligence), communication (how you speak — clarity, persuasion, ability to command a room), and appearance (how you look — polished professionalism that signals competence). Gravitas accounts for roughly 67% of executive presence — it is by far the most important dimension."
        },
        {
          id: "leadership-401-l01-c2",
          title: "Developing Gravitas",
          content:
            "Gravitas is demonstrated through several behaviors: showing grace under fire, making tough calls with confidence even when data is incomplete, speaking truth to power respectfully, projecting calm in chaos, and demonstrating the emotional intelligence to read a room and adapt. Gravitas is not about being the loudest voice; it is about being the voice people trust. Leaders build gravitas over time through consistent follow-through, owning mistakes publicly, and maintaining composure when others panic."
        },
        {
          id: "leadership-401-l01-c3",
          title: "High-Stakes Communication",
          content:
            "Executive-level communication requires mastering both content and delivery. Structure messages with a clear headline, supporting evidence, and an explicit ask or recommendation. In board presentations, lead with the conclusion — busy executives want the answer before the analysis. Use storytelling to make data memorable and emotionally resonant. Practice strategic silence — pausing for emphasis conveys confidence and gives listeners time to absorb key points. The most effective executive communicators are also exceptional listeners who make others feel heard before advancing their own agenda."
        }
      ],
      flashcards: [
        { id: "leadership-401-l01-f1", front: "Executive presence (Hewlett's three pillars)", back: "Gravitas (how you act — confidence, decisiveness, composure), Communication (how you speak — clarity, persuasion), Appearance (how you look — professional polish) — gravitas is the dominant factor at 67%" },
        { id: "leadership-401-l01-f2", front: "Gravitas in leadership", back: "Demonstrated through grace under fire, confident decision-making with incomplete data, truth-telling, calm in chaos, and emotional intelligence — built over time through consistency and composure" },
        { id: "leadership-401-l01-f3", front: "Executive communication principle: lead with the conclusion", back: "In high-stakes settings, state your recommendation or answer first, then provide supporting evidence — busy executives want the bottom line before the analysis" }
      ]
    },
    {
      id: "leadership-401-l02",
      title: "Strategic Decision-Making Under Ambiguity",
      type: "video",
      duration: 14,
      objectives: [
        "Identify cognitive biases that distort executive decision-making",
        "Apply structured decision-making frameworks to ambiguous problems",
        "Balance analysis with intuition in strategic choices"
      ],
      chunks: [
        {
          id: "leadership-401-l02-c1",
          title: "Cognitive Biases in Executive Decisions",
          content:
            "Daniel Kahneman's research revealed that even experienced executives fall prey to systematic biases. Confirmation bias leads leaders to seek information that supports existing beliefs. Anchoring causes over-reliance on the first piece of information encountered. Overconfidence bias makes leaders underestimate risks and overestimate their own judgment. Sunk cost fallacy drives continued investment in failing strategies because of past commitments. Awareness of these biases is necessary but insufficient — leaders need structural countermeasures such as devil's advocates, red teams, and diverse decision-making bodies."
        },
        {
          id: "leadership-401-l02-c2",
          title: "Frameworks for Strategic Decisions",
          content:
            "Several frameworks help executives structure decisions under ambiguity. Scenario planning develops multiple plausible futures and tests strategies against each. Real options analysis treats strategic investments like financial options — preserving flexibility to expand, contract, or abandon as uncertainty resolves. The OODA loop (Observe, Orient, Decide, Act), developed by military strategist John Boyd, emphasizes rapid iteration and adaptation. Gary Klein's recognition-primed decision model shows how experienced leaders use pattern recognition to make fast, intuitive decisions in familiar domains."
        },
        {
          id: "leadership-401-l02-c3",
          title: "Balancing Analysis and Intuition",
          content:
            "Effective strategic decision-making integrates analytical rigor with experienced intuition. Pure analysis fails when data is incomplete or the situation is unprecedented. Pure intuition fails when biases go unchecked or when complexity exceeds pattern recognition. The best executives use analysis to frame the problem and narrow options, then apply judgment to make the final call. Jeff Bezos advocates deciding with about 70% of the information you wish you had — waiting for 90% means you are probably too slow. The key is making reversible decisions quickly and irreversible ones carefully."
        }
      ],
      flashcards: [
        { id: "leadership-401-l02-f1", front: "Confirmation bias in executive decisions", back: "The tendency to seek, interpret, and remember information that confirms existing beliefs while ignoring contradictory evidence — countered by devil's advocates and red teams" },
        { id: "leadership-401-l02-f2", front: "OODA loop (Boyd)", back: "Observe, Orient, Decide, Act — a rapid decision-making cycle emphasizing speed and adaptation, where the leader who cycles through OODA faster gains a decisive advantage" },
        { id: "leadership-401-l02-f3", front: "Bezos's 70% rule", back: "Decide with roughly 70% of desired information rather than waiting for 90% — most decisions are reversible and the cost of slowness exceeds the cost of occasional mistakes" }
      ]
    },
    {
      id: "leadership-401-l03",
      title: "Systems Thinking for Leaders",
      type: "interactive",
      duration: 15,
      objectives: [
        "Explain Peter Senge's five disciplines of a learning organization",
        "Apply systems thinking to identify leverage points in complex organizations",
        "Recognize common system archetypes that trap leaders"
      ],
      chunks: [
        {
          id: "leadership-401-l03-c1",
          title: "Senge's Five Disciplines",
          content:
            "Peter Senge's 'The Fifth Discipline' argues that sustainable organizational success requires five interrelated practices: (1) Personal Mastery — individual commitment to continuous learning and growth. (2) Mental Models — surfacing and challenging deeply held assumptions that shape perception and action. (3) Shared Vision — building genuine collective commitment to a common future rather than imposing top-down mandates. (4) Team Learning — collective thinking skills where the group's intelligence exceeds individual intelligence. (5) Systems Thinking — the integrating discipline that ties the other four together by revealing the interconnections and feedback loops that drive organizational behavior."
        },
        {
          id: "leadership-401-l03-c2",
          title: "Systems Thinking in Practice",
          content:
            "Systems thinking teaches leaders to see wholes rather than parts, patterns rather than events, and feedback loops rather than linear cause-and-effect. Key concepts include reinforcing loops (virtuous or vicious cycles that amplify change), balancing loops (mechanisms that resist change and maintain equilibrium), and delays (time gaps between actions and their consequences that cause leaders to overshoot or undershoot). Leaders who think systemically look for leverage points — places where a small intervention produces large, lasting improvement rather than symptomatic quick fixes."
        },
        {
          id: "leadership-401-l03-c3",
          title: "Common System Archetypes",
          content:
            "System archetypes are recurring patterns that trap organizations. 'Shifting the Burden' occurs when symptomatic solutions undermine fundamental solutions — like relying on overtime instead of fixing understaffing. 'Limits to Growth' appears when initial success creates side effects that slow further growth — rapid scaling without infrastructure investment. 'Fixes that Fail' happen when a quick fix triggers unintended consequences that worsen the original problem. Recognizing these archetypes helps leaders avoid repeating systemic mistakes and instead design interventions that address root causes."
        }
      ],
      flashcards: [
        { id: "leadership-401-l03-f1", front: "Senge's five disciplines", back: "Personal Mastery, Mental Models, Shared Vision, Team Learning, Systems Thinking (the integrating fifth discipline) — the foundation of a learning organization" },
        { id: "leadership-401-l03-f2", front: "Leverage points (systems thinking)", back: "Places in a system where a small, well-focused intervention produces significant and lasting improvement — the goal of systems-thinking leaders over symptomatic quick fixes" },
        { id: "leadership-401-l03-f3", front: "Shifting the Burden archetype", back: "A systemic pattern where reliance on symptomatic solutions (quick fixes) gradually undermines the capacity for fundamental solutions — e.g., using overtime instead of hiring" }
      ]
    },
    {
      id: "leadership-401-l04",
      title: "Crisis Leadership",
      type: "video",
      duration: 13,
      objectives: [
        "Define crisis leadership and its unique demands",
        "Apply a structured crisis leadership framework",
        "Communicate effectively during organizational crises"
      ],
      chunks: [
        {
          id: "leadership-401-l04-c1",
          title: "The Nature of Crisis Leadership",
          content:
            "Organizational crises are low-probability, high-impact events that threaten organizational survival, reputation, or stakeholder welfare. Unlike routine challenges, crises compress decision timelines, amplify emotional intensity, attract intense scrutiny, and reveal character. Crisis leadership demands a different operating mode: rapid information gathering with incomplete data, decisive action despite uncertainty, transparent communication under pressure, and the emotional regulation to remain composed while others are destabilized."
        },
        {
          id: "leadership-401-l04-c2",
          title: "A Crisis Leadership Framework",
          content:
            "Effective crisis leadership follows a three-phase framework: (1) Pre-crisis — build organizational resilience through scenario planning, crisis response protocols, cross-functional crisis teams, and regular simulations. (2) During crisis — activate the response team, establish a single source of truth, make decisions rapidly with available information, communicate early and often with all stakeholders, and prioritize human safety above financial concerns. (3) Post-crisis — conduct a thorough after-action review, implement systemic changes to prevent recurrence, address psychological impact on employees, and rebuild stakeholder trust through transparent accountability."
        },
        {
          id: "leadership-401-l04-c3",
          title: "Crisis Communication",
          content:
            "Crisis communication can make or break an organization's response. Timothy Coombs's Situational Crisis Communication Theory advises leaders to match their communication strategy to the crisis type and the organization's responsibility level. Core principles include: communicate immediately even if you lack full information, express empathy before facts, be transparent about what you know and do not know, take responsibility proportionate to your role, outline corrective actions, and provide consistent updates. Leaders who hide, deflect blame, or minimize severity consistently worsen outcomes."
        }
      ],
      flashcards: [
        { id: "leadership-401-l04-f1", front: "Three phases of crisis leadership", back: "Pre-crisis (build resilience, plan, simulate), During crisis (activate team, single source of truth, rapid decisions, constant communication), Post-crisis (after-action review, systemic change, trust rebuilding)" },
        { id: "leadership-401-l04-f2", front: "Crisis communication first principle", back: "Communicate immediately even with incomplete information — express empathy before facts, be transparent about knowns and unknowns, and provide consistent updates" },
        { id: "leadership-401-l04-f3", front: "Coombs's Situational Crisis Communication Theory", back: "A framework advising leaders to match communication strategy to the crisis type and the organization's level of responsibility — from denial to full apology and corrective action" }
      ]
    },
    {
      id: "leadership-401-l05",
      title: "Checkpoint: Executive Skills & Systems Thinking",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "leadership-401-l05-q1",
          text: "According to Sylvia Ann Hewlett, which dimension accounts for roughly 67% of executive presence?",
          options: [
            { id: "a", text: "Communication" },
            { id: "b", text: "Appearance" },
            { id: "c", text: "Gravitas" },
            { id: "d", text: "Technical expertise" }
          ],
          correctOptionId: "c",
          explanation: "Hewlett's research found that gravitas — confidence, decisiveness, composure, and emotional intelligence — is by far the most important dimension of executive presence, accounting for about 67%."
        },
        {
          id: "leadership-401-l05-q2",
          text: "Which system archetype describes a situation where a quick fix triggers unintended consequences that worsen the original problem?",
          options: [
            { id: "a", text: "Limits to Growth" },
            { id: "b", text: "Shifting the Burden" },
            { id: "c", text: "Fixes that Fail" },
            { id: "d", text: "Tragedy of the Commons" }
          ],
          correctOptionId: "c",
          explanation: "Fixes that Fail occurs when a corrective action produces short-term improvement but triggers unintended side effects that ultimately make the original problem worse than before the intervention."
        },
        {
          id: "leadership-401-l05-q3",
          text: "In Senge's framework, which discipline involves surfacing and challenging deeply held assumptions?",
          options: [
            { id: "a", text: "Personal Mastery" },
            { id: "b", text: "Mental Models" },
            { id: "c", text: "Shared Vision" },
            { id: "d", text: "Systems Thinking" }
          ],
          correctOptionId: "b",
          explanation: "Mental Models is the discipline of surfacing, testing, and challenging the deeply held assumptions, generalizations, and images that influence how we understand the world and take action."
        },
        {
          id: "leadership-401-l05-q4",
          text: "During an active crisis, what should a leader prioritize in their first public communication?",
          options: [
            { id: "a", text: "Assigning blame to responsible parties" },
            { id: "b", text: "Expressing empathy and stating what is currently known and unknown" },
            { id: "c", text: "Waiting until all facts are gathered before saying anything" },
            { id: "d", text: "Minimizing the severity to prevent panic" }
          ],
          correctOptionId: "b",
          explanation: "Crisis communication best practice calls for immediate communication that leads with empathy, is transparent about what is known and unknown, and commits to ongoing updates — waiting, blaming, or minimizing all worsen outcomes."
        }
      ]
    },
    {
      id: "leadership-401-l06",
      title: "Leading Organizational Transformation & Ethics",
      type: "interactive",
      duration: 14,
      objectives: [
        "Apply Kotter's eight-step model for leading change",
        "Identify why transformation efforts fail and how to overcome resistance",
        "Integrate ethical reasoning into leadership decisions"
      ],
      chunks: [
        {
          id: "leadership-401-l06-c1",
          title: "Leading Organizational Transformation",
          content:
            "John Kotter's eight-step model remains the most widely used framework for organizational transformation: (1) Create urgency — help others see why change is needed now. (2) Build a guiding coalition — assemble a team with enough power and credibility to lead the effort. (3) Form a strategic vision — articulate a clear picture of the future and strategies to achieve it. (4) Enlist volunteers — communicate the vision to gain broad buy-in. (5) Enable action — remove barriers and change systems that undermine the vision. (6) Generate short-term wins — produce visible improvements quickly to build momentum. (7) Sustain acceleration — use credibility from wins to tackle bigger changes. (8) Institute change — anchor new behaviors in organizational culture."
        },
        {
          id: "leadership-401-l06-c2",
          title: "Overcoming Resistance to Change",
          content:
            "Transformation efforts fail roughly 70% of the time. Common causes include insufficient urgency, weak coalition, unclear vision, under-communicating by a factor of ten, failing to remove obstacles, not creating short-term wins, declaring victory too soon, and neglecting to embed changes in culture. Resistance is natural and often rational — people resist when they fear loss, feel excluded from decisions, distrust leadership motives, or see the change as threatening their competence or identity. Leaders overcome resistance by listening empathetically, involving resisters in design, and demonstrating quick wins."
        },
        {
          id: "leadership-401-l06-c3",
          title: "Leadership Ethics and Character",
          content:
            "Ethical leadership is the demonstration of normatively appropriate conduct through personal actions and interpersonal relationships, and the promotion of such conduct among followers. Leaders face ethical dilemmas where competing values collide — profit versus safety, loyalty versus honesty, individual versus collective welfare. Frameworks for ethical reasoning include utilitarianism (greatest good for the greatest number), deontology (duty and rules regardless of consequences), virtue ethics (what would a person of good character do?), and justice theory (fairness in distribution and procedure). Character is not a trait but a practice — built through repeated ethical choices under pressure."
        }
      ],
      flashcards: [
        { id: "leadership-401-l06-f1", front: "Kotter's eight steps for transformation", back: "Create urgency, build guiding coalition, form vision, enlist volunteers, enable action, generate short-term wins, sustain acceleration, institute change in culture" },
        { id: "leadership-401-l06-f2", front: "Why 70% of transformations fail", back: "Insufficient urgency, weak coalition, unclear vision, under-communication, unremoved obstacles, no short-term wins, premature victory declaration, failure to embed in culture" },
        { id: "leadership-401-l06-f3", front: "Four ethical reasoning frameworks", back: "Utilitarianism (greatest good for most), Deontology (duty-based rules), Virtue ethics (character-driven choices), Justice theory (fairness in distribution and procedure)" }
      ]
    },
    {
      id: "leadership-401-l07",
      title: "Final Assessment: Executive Leadership & Systems Thinking",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "leadership-401-l07-q1",
          text: "Which cognitive bias leads executives to continue investing in a failing strategy because of past commitments?",
          options: [
            { id: "a", text: "Confirmation bias" },
            { id: "b", text: "Anchoring bias" },
            { id: "c", text: "Sunk cost fallacy" },
            { id: "d", text: "Overconfidence bias" }
          ],
          correctOptionId: "c",
          explanation: "The sunk cost fallacy drives continued investment in failing strategies because leaders focus on irrecoverable past costs rather than future expected returns — 'we have already invested too much to stop now.'"
        },
        {
          id: "leadership-401-l07-q2",
          text: "In Kotter's transformation model, what is the purpose of generating short-term wins?",
          options: [
            { id: "a", text: "To declare the transformation complete" },
            { id: "b", text: "To build credibility and momentum for the broader change effort" },
            { id: "c", text: "To reward the guiding coalition financially" },
            { id: "d", text: "To eliminate all resistance to change" }
          ],
          correctOptionId: "b",
          explanation: "Short-term wins provide visible evidence that the transformation is working — they build credibility, energize supporters, silence critics, and create momentum for tackling larger and more difficult changes."
        },
        {
          id: "leadership-401-l07-q3",
          text: "Which of Senge's disciplines serves as the integrating framework that connects all the others?",
          options: [
            { id: "a", text: "Personal Mastery" },
            { id: "b", text: "Shared Vision" },
            { id: "c", text: "Team Learning" },
            { id: "d", text: "Systems Thinking" }
          ],
          correctOptionId: "d",
          explanation: "Systems Thinking is the 'fifth discipline' that integrates all the others — it reveals the interconnections and feedback loops that tie personal mastery, mental models, shared vision, and team learning into a coherent whole."
        },
        {
          id: "leadership-401-l07-q4",
          text: "An executive must choose between maximizing shareholder returns this quarter and investing in employee safety improvements. Which ethical framework asks 'what would a person of good character do?'",
          options: [
            { id: "a", text: "Utilitarianism" },
            { id: "b", text: "Deontology" },
            { id: "c", text: "Virtue ethics" },
            { id: "d", text: "Justice theory" }
          ],
          correctOptionId: "c",
          explanation: "Virtue ethics centers on character — asking what a person of integrity, courage, and wisdom would do in a given situation, rather than calculating consequences (utilitarianism) or applying rules (deontology)."
        }
      ]
    }
  ],
};
