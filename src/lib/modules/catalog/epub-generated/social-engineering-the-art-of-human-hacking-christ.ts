import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file005374.epub
// Author: Christopher Hadnagy  |  Subject: Computer Science / Cybersecurity

export const SocialEngineeringTheArtOfHumanHackingChristModule: LearningModule = {
  id: "social-engineering-the-art-of-human-hacking-christ",
  title: "Social Engineering: The Art of Human Hacking",
  description:
    "Christopher Hadnagy's comprehensive guide to social engineering reveals how attackers exploit human psychology — not technical vulnerabilities — to breach security. Drawing on intelligence gathering, elicitation, pretexting, psychological influence, persuasion, and non-verbal communication, the book equips security professionals to understand, simulate, and defend against the human element of hacking.",
  subject: "Technology",
  tags: ["epub-derived", "curriculum", "interactive", "cybersecurity", "social-engineering", "infosec"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Define social engineering and explain why it exploits people rather than technology",
    "Describe the information-gathering phase and the types of data attackers collect",
    "Explain elicitation techniques and why they are so effective",
    "Analyse pretexting as the construction and maintenance of a false identity",
    "Identify psychological principles attackers exploit: reciprocity, authority, social proof, scarcity",
    "Describe the influence and persuasion techniques used in social engineering attacks",
    "Apply defensive strategies to protect organisations against social engineering",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  What Is Social Engineering?
    ───────────────────────────────────────────────── */
    {
      id: "se-l01",
      title: "A Look into the World of Social Engineering",
      type: "video",
      duration: 12,
      objectives: [
        "Define social engineering in a cybersecurity context",
        "Explain why the human element is the weakest link in security",
        "Distinguish social engineering from traditional hacking",
      ],
      chunks: [
        {
          id: "se-l01-c1",
          title: "Beyond the Keyboard: The Human Vulnerability",
          content:
            "Social engineering has been largely misunderstood, leading to many differing opinions on what it is and how it works. Some view it as simply lying to scam trivial free items like pizza; others confuse it with confidence tricks or impersonation. Hadnagy defines social engineering as the act of manipulating a person to take an action that may or may not be in that person's best interest — encompassing information gathering, psychological manipulation, pretexting, and the exploitation of human trust. The critical insight is that social engineering attacks target people, not systems. The most sophisticated firewall, the strongest encryption, and the most rigorous patch management are all irrelevant if an attacker can convince an authorised user to reveal credentials, click a malicious link, or open a secured door. Sun Tzu wrote that if you know the enemy and know yourself you need not fear the results of a hundred battles. Social engineers operationalise this wisdom by learning everything about their targets before making any direct contact.",
        },
        {
          id: "se-l01-c2",
          title: "The Social Engineering Framework",
          content:
            "Hadnagy organises social engineering into a systematic framework with distinct phases: information gathering (reconnaissance), elicitation (drawing information from targets through conversation), pretexting (constructing and maintaining a false identity), influence and persuasion (applying psychological principles to manipulate behaviour), and the attack itself (executing the breach). Each phase builds on the previous one. Information gathering provides the raw material for constructing a convincing pretext. The pretext enables close-enough contact for elicitation. Elicitation yields the specific data needed for the attack. And psychological principles — reciprocity, authority, social proof, scarcity — amplify the effectiveness of every interaction. The framework demonstrates that social engineering is not an improvised art but a disciplined methodology, as structured and repeatable as any technical penetration test.",
        },
        {
          id: "se-l01-c3",
          title: "Why Social Engineering Works",
          content:
            "Social engineering works because it exploits fundamental features of human cognition that cannot be patched like software. Humans are wired to trust people who appear friendly and authoritative. We are inclined to reciprocate favours, comply with authority, follow social norms, and avoid confrontation. We make rapid judgements based on limited information — what psychologists call cognitive shortcuts or heuristics — and these shortcuts can be systematically exploited by someone who understands them. An attacker who calls a helpdesk, uses the correct internal jargon, cites a plausible urgency, and drops the name of a senior manager is exploiting at least three psychological principles simultaneously: authority (the manager's name), social proof (correct jargon suggesting insider status), and scarcity (urgency suggesting time pressure). The target processes these signals automatically, often without conscious deliberation — and complies because every heuristic points toward the same conclusion: this person is legitimate.",
        },
      ],
      flashcards: [
        {
          id: "se-l01-f1",
          front: "Social engineering (Hadnagy's definition)",
          back: "The act of manipulating a person to take an action that may or may not be in their best interest — exploiting human trust, psychology, and social dynamics rather than technical vulnerabilities.",
        },
        {
          id: "se-l01-f2",
          front: "The social engineering framework (phases)",
          back: "1) Information gathering (reconnaissance); 2) Elicitation (drawing information through conversation); 3) Pretexting (constructing a false identity); 4) Influence/persuasion (applying psychological principles); 5) The attack.",
        },
        {
          id: "se-l01-f3",
          front: "Why social engineering bypasses technical security",
          back: "It targets people, not systems. Firewalls, encryption, and patch management are irrelevant if an authorised user can be manipulated into revealing credentials, clicking malicious links, or granting physical access.",
        },
        {
          id: "se-l01-f4",
          front: "Cognitive shortcuts exploited by social engineers",
          back: "Heuristics: rapid judgements based on limited signals (authority, social proof, urgency). Attackers stack multiple psychological cues so that every shortcut points toward the same conclusion — 'this person is legitimate.'",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Information Gathering
    ───────────────────────────────────────────────── */
    {
      id: "se-l02",
      title: "Information Gathering: The Foundation of Every Attack",
      type: "video",
      duration: 12,
      objectives: [
        "Explain why no information is irrelevant in social engineering",
        "Describe OSINT sources used for reconnaissance",
        "Explain communication modelling and its role in attack planning",
      ],
      chunks: [
        {
          id: "se-l02-c1",
          title: "War Is Ninety Percent Information",
          content:
            "Napoleon Bonaparte declared that war is ninety percent information. Those words ring especially true in social engineering. Even the slightest detail can lead to a successful breach. Hadnagy's mentor, professional pentester Mati Aharoni, emphasised that no piece of information about a target should be considered irrelevant. An employee's pet's name discovered on social media may be the answer to a password reset question. A photo of an office badge reveals the badge format, enabling forgery. A company's job postings reveal what technologies they use, which departments are understaffed, and what projects are underway. The information-gathering phase transforms scattered public data into a comprehensive profile of the target organisation, its personnel, its culture, its technology stack, and its security posture — all before a single phone call is made or a single email is sent.",
        },
        {
          id: "se-l02-c2",
          title: "Sources for Information Gathering",
          content:
            "Hadnagy catalogues a wide range of open-source intelligence (OSINT) sources. Corporate websites reveal organisational structure, executive names, press contacts, and often detailed technical documentation. Social media profiles on LinkedIn, Facebook, Twitter, and personal blogs expose employees' job titles, professional connections, personal interests, travel schedules, and even daily routines. Public records — court filings, property records, business registrations — provide addresses, phone numbers, and financial information. Technical reconnaissance through tools like WHOIS lookups, DNS enumeration, and web crawler harvesting reveals the organisation's internet infrastructure, email formats, web application technologies, and server configurations. Dumpster diving — physically searching discarded materials — can yield internal memos, organisational charts, network diagrams, and discarded hardware containing sensitive data. Each source individually may seem harmless, but when combined they create a detailed operational picture that makes subsequent attack phases dramatically more effective.",
        },
        {
          id: "se-l02-c3",
          title: "Communication Modelling: Understanding the Target",
          content:
            "Beyond collecting facts, Hadnagy emphasises the importance of communication modelling — understanding how the target organisation and its individuals communicate. This includes identifying the communication channels they use (email, phone, Slack, in-person meetings), the linguistic patterns and jargon specific to the organisation, the decision-making hierarchy (who approves what), and the emotional and cultural norms that govern interpersonal interactions. A social engineer who understands that a company's culture is informal and first-name-based will construct a very different pretext than one targeting a formal, hierarchical organisation. An attacker who knows that a particular department is under pressure from a recent merger can exploit the resulting confusion, anxiety, and disrupted routines. Communication modelling transforms raw intelligence into actionable operational understanding — turning facts into leverage.",
        },
      ],
      flashcards: [
        {
          id: "se-l02-f1",
          front: "OSINT (Open Source Intelligence)",
          back: "Publicly available information — corporate websites, social media, public records, DNS data, job postings — that social engineers collect during reconnaissance to build comprehensive target profiles.",
        },
        {
          id: "se-l02-f2",
          front: "Dumpster diving",
          back: "Physically searching discarded materials for internal documents, network diagrams, organisational charts, and hardware — a surprisingly effective OSINT source that many organisations fail to protect against.",
        },
        {
          id: "se-l02-f3",
          front: "Communication modelling",
          back: "Understanding how the target communicates — channels used, jargon, hierarchy, cultural norms, emotional state — to construct pretexts and elicitation strategies tailored to the specific organisation.",
        },
        {
          id: "se-l02-f4",
          front: "Why no information is irrelevant",
          back: "Individually harmless data points (pet names, badge photos, job postings) combine to reveal security answers, enable badge forgery, and expose technology stacks — creating actionable intelligence for attacks.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Elicitation and Pretexting
    ───────────────────────────────────────────────── */
    {
      id: "se-l03",
      title: "Elicitation and Pretexting: Drawing Out Secrets",
      type: "video",
      duration: 13,
      objectives: [
        "Define elicitation and explain why it is the supreme art of social engineering",
        "Describe key elicitation techniques: flattery, false statements, mutual interest",
        "Explain pretexting and the principles of constructing and maintaining a false identity",
      ],
      chunks: [
        {
          id: "se-l03-c1",
          title: "Elicitation: The Art of Conversation as Weapon",
          content:
            "Elicitation is the ability to extract information from people through seemingly natural conversation — without them realising they are being interrogated. Sun Tzu described this as 'the supreme art of war: to subdue the enemy without fighting.' In social engineering, elicitation is the most refined skill because it requires no technical tools, leaves no forensic evidence, and exploits the human desire to be helpful and sociable. An effective social engineer makes people feel at ease and makes them want to share. Key elicitation techniques include: genuine-seeming interest in the target's work and opinions, strategic use of flattery ('I've heard your team is the best at this'), deliberate false statements that provoke correction ('I heard your company uses Oracle, right?' — prompting 'No, we actually use Postgres'), appeals to shared interests or mutual acquaintances, and the simple power of buying someone a coffee and letting them talk.",
        },
        {
          id: "se-l03-c2",
          title: "Pretexting: Becoming Someone Else",
          content:
            "Pretexting is the creation and maintenance of a fictional identity — a pretext — that provides a plausible reason for the social engineer to interact with the target and request specific information or access. Hadnagy describes it as far more than simply lying: it is method acting applied to penetration testing. A good pretext has several essential elements: a believable backstory that explains why the person is present and why they need what they are asking for, supporting props (a fake badge, a branded polo shirt, a toolbox), appropriate body language and vocal patterns, and knowledge of the organisation's culture and jargon. The pretext must answer the target's implicit question — 'Why should I help this person?' — before the target consciously formulates it. A social engineer posing as an IT auditor from a known consulting firm, carrying a clipboard, using the correct technical vocabulary, and referencing a recent email from the CTO has constructed a multi-layered pretext that stacks credibility signals.",
        },
        {
          id: "se-l03-c3",
          title: "Maintaining the Pretext Under Pressure",
          content:
            "The most dangerous moment for a social engineer is when the pretext is challenged. Hadnagy emphasises that preparation is the key to survival under pressure. The social engineer must have anticipated likely questions: 'Who sent you?' 'Can I see your authorisation?' 'What's the project number?' Every plausible challenge should have a rehearsed, confident response that reinforces rather than undermines the pretext. If the social engineer is posing as a vendor technician, they should know the vendor's real phone number (for call-back verification), the model numbers of equipment they claim to be servicing, and the names of actual employees at the vendor company. The deeper principle is that a pretext is not a single lie but a complete narrative — and every element of that narrative must be internally consistent, externally verifiable where the target might check, and delivered with the confidence and naturalness of someone who is simply doing their job.",
        },
      ],
      flashcards: [
        {
          id: "se-l03-f1",
          front: "Elicitation",
          back: "Extracting information through natural-seeming conversation without the target realising they are being interrogated. Techniques include flattery, deliberate false statements (provoking correction), mutual interest, and creating a comfortable social atmosphere.",
        },
        {
          id: "se-l03-f2",
          front: "Pretexting",
          back: "Creating and maintaining a fictional identity with a believable backstory, supporting props, appropriate behaviour, and cultural knowledge — providing a plausible reason for the attacker's presence and requests.",
        },
        {
          id: "se-l03-f3",
          front: "Deliberate false statement technique",
          back: "Making an intentionally incorrect claim ('You use Oracle, right?') to provoke the target into correcting you with accurate information ('No, we use Postgres') — exploiting the human impulse to correct errors.",
        },
        {
          id: "se-l03-f4",
          front: "Key principle of pretexting",
          back: "A pretext is not a single lie but a complete, internally consistent narrative. Every element must be verifiable where the target might check and delivered with natural confidence.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Psychological Principles and Influence
    ───────────────────────────────────────────────── */
    {
      id: "se-l04",
      title: "Mind Tricks: Psychological Principles of Manipulation",
      type: "video",
      duration: 13,
      objectives: [
        "Identify Cialdini's six principles of influence and how attackers exploit each",
        "Explain microexpressions and non-verbal cues in social engineering",
        "Describe defence strategies against psychological manipulation",
      ],
      chunks: [
        {
          id: "se-l04-c1",
          title: "Cialdini's Six Weapons of Influence",
          content:
            "Hadnagy draws heavily on Robert Cialdini's research to explain why social engineering attacks are effective. Cialdini identified six universal principles of influence: reciprocity (people feel obligated to return favours), commitment and consistency (people honour commitments and seek to appear consistent), social proof (people follow the actions of others in uncertain situations), authority (people comply with perceived authority figures), liking (people are more easily influenced by those they like), and scarcity (people value things more when they are perceived as limited or disappearing). A sophisticated social engineering attack typically exploits multiple principles simultaneously. An attacker who arrives with coffee and donuts (reciprocity), wears a uniform (authority), mentions that 'the team on the fourth floor already let me in' (social proof), and says 'I only have twenty minutes before my next appointment' (scarcity) has created a nearly irresistible combination of psychological pressures that makes non-compliance feel socially awkward and unnecessarily difficult.",
        },
        {
          id: "se-l04-c2",
          title: "Non-Verbal Communication and Microexpressions",
          content:
            "Hadnagy devotes significant attention to non-verbal communication — the 55 percent of human communication that occurs through body language, facial expressions, and physical positioning. Social engineers must both read and project non-verbal signals effectively. Reading: detecting signs of suspicion, anxiety, or deception in the target — crossed arms, averted gaze, changes in vocal pitch, or fleeting facial expressions called microexpressions that reveal emotions the person is trying to conceal. Projecting: the social engineer's own body language must communicate confidence, trustworthiness, and ease. Open posture, appropriate eye contact, mirrored body positioning, and a relaxed vocal tone all signal that the interaction is routine and non-threatening. Hadnagy notes that inconsistency between verbal and non-verbal channels is the most common way pretexts fail — if someone says 'I'm supposed to be here' while avoiding eye contact and shifting weight nervously, the verbal message is undermined by the physical one.",
        },
        {
          id: "se-l04-c3",
          title: "Defence: Building Human Firewalls",
          content:
            "If social engineering exploits predictable human psychology, defence must also be built on psychological principles. Hadnagy advocates creating a 'human firewall' through several integrated strategies. First, security awareness training that uses realistic simulations — not just slides and lectures, but actual phishing campaigns, vishing (voice phishing) calls, and physical penetration tests that give employees visceral experience of being targeted. Second, clear policies and procedures that give employees explicit permission to verify identities, refuse requests, and escalate suspicious interactions without fear of appearing rude or insubordinate. Third, a culture of constructive scepticism: employees should be praised for questioning unusual requests, even when those requests turn out to be legitimate. Fourth, regular testing and feedback loops that measure vulnerability over time and adapt training to address emerging weaknesses. The goal is not to eliminate human trust — which would be organisationally toxic — but to channel it through verification processes that make exploitation substantially more difficult.",
        },
      ],
      flashcards: [
        {
          id: "se-l04-f1",
          front: "Cialdini's six principles of influence",
          back: "Reciprocity, commitment/consistency, social proof, authority, liking, and scarcity — universal psychological principles that social engineers exploit to manipulate targets into compliance.",
        },
        {
          id: "se-l04-f2",
          front: "Stacking influence principles",
          back: "Sophisticated attacks combine multiple principles simultaneously (e.g., coffee = reciprocity, uniform = authority, 'team upstairs let me in' = social proof, time pressure = scarcity) to create nearly irresistible compliance pressure.",
        },
        {
          id: "se-l04-f3",
          front: "Microexpressions",
          back: "Fleeting involuntary facial expressions (lasting fractions of a second) that reveal emotions a person is trying to conceal — social engineers learn to both read them in targets and suppress them in themselves.",
        },
        {
          id: "se-l04-f4",
          front: "Human firewall",
          back: "Defence strategy combining realistic simulation training, explicit verification policies, a culture of constructive scepticism, and regular testing — channelling trust through verification rather than eliminating it.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "se-l05",
      title: "Social Engineering: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of SE framework, elicitation, pretexting, and influence"],
      questions: [
        {
          id: "se-l05-q1",
          text: "Why does Hadnagy define social engineering as targeting people rather than systems?",
          options: [
            { id: "a", text: "People are cheaper targets than computer systems" },
            { id: "b", text: "Technical security controls are irrelevant if an authorised user can be manipulated into granting access, revealing credentials, or executing malicious actions" },
            { id: "c", text: "Computer systems cannot be hacked" },
            { id: "d", text: "Only people have access to physical buildings" },
          ],
          correctOptionId: "b",
          explanation:
            "The strongest technical controls are bypassed when a trusted insider is manipulated. Social engineering exploits the human element — the one component that firewalls and encryption cannot protect.",
        },
        {
          id: "se-l05-q2",
          text: "What is the 'deliberate false statement' elicitation technique?",
          options: [
            { id: "a", text: "Telling the target your real name to build trust" },
            { id: "b", text: "Making an intentionally incorrect statement to provoke the target into correcting you with accurate information" },
            { id: "c", text: "Reading a false report to distract the target" },
            { id: "d", text: "Sending a falsified email to a mailing list" },
          ],
          correctOptionId: "b",
          explanation:
            "By saying something wrong ('You use Oracle, right?'), the attacker exploits the human impulse to correct errors, prompting the target to reveal accurate technical details ('No, we actually use Postgres').",
        },
        {
          id: "se-l05-q3",
          text: "Which of Cialdini's influence principles does an attacker exploit by arriving with coffee and donuts?",
          options: [
            { id: "a", text: "Authority" },
            { id: "b", text: "Scarcity" },
            { id: "c", text: "Reciprocity — the target feels obligated to return the favour" },
            { id: "d", text: "Commitment and consistency" },
          ],
          correctOptionId: "c",
          explanation:
            "Reciprocity is the principle that people feel obligated to return favours. By offering refreshments, the attacker creates a social debt that makes the target more likely to comply with subsequent requests.",
        },
        {
          id: "se-l05-q4",
          text: "What does Hadnagy mean by a 'human firewall'?",
          options: [
            { id: "a", text: "Hiring security guards to monitor all employees" },
            { id: "b", text: "A defence strategy combining realistic training, verification policies, constructive scepticism culture, and regular testing" },
            { id: "c", text: "A software firewall that monitors employee communications" },
            { id: "d", text: "Eliminating all human interaction in the workplace" },
          ],
          correctOptionId: "b",
          explanation:
            "The human firewall is not about eliminating trust but channelling it through verification. It combines simulated attacks, explicit policies permitting verification, a culture that rewards scepticism, and regular testing.",
        },
        {
          id: "se-l05-q5",
          text: "Why is communication modelling important in the information-gathering phase?",
          options: [
            { id: "a", text: "It eliminates the need for pretexting" },
            { id: "b", text: "It reveals how the target communicates — channels, jargon, hierarchy, cultural norms — enabling construction of more convincing pretexts and elicitation strategies" },
            { id: "c", text: "It provides direct access to the target's email" },
            { id: "d", text: "It replaces the need for technical reconnaissance" },
          ],
          correctOptionId: "b",
          explanation:
            "Communication modelling transforms raw intelligence into actionable understanding. Knowing how an organisation talks, who decides what, and what emotional state the team is in enables tailored, convincing social engineering approaches.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "se-l06",
      title: "Social Engineering: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of all social engineering concepts"],
      questions: [
        {
          id: "se-l06-q1",
          text: "An attacker calls a helpdesk, uses internal jargon, references the CTO by name, and urgently requests a password reset. Which influence principles are being exploited?",
          options: [
            { id: "a", text: "Only authority and reciprocity" },
            { id: "b", text: "Authority (CTO name), social proof (internal jargon implying insider status), and scarcity (urgency creating time pressure)" },
            { id: "c", text: "Only scarcity and liking" },
            { id: "d", text: "Commitment and consistency only" },
          ],
          correctOptionId: "b",
          explanation:
            "The attacker stacks three principles: authority (the CTO's name as an authority signal), social proof (correct jargon suggesting legitimate insider status), and scarcity (urgency creating pressure to act without verification).",
        },
        {
          id: "se-l06-q2",
          text: "What is the most common way pretexts fail during social engineering engagements?",
          options: [
            { id: "a", text: "The attacker forgets the target's name" },
            { id: "b", text: "Inconsistency between verbal claims and non-verbal signals — saying 'I belong here' while displaying nervous, avoidant body language" },
            { id: "c", text: "The attacker uses too much technical jargon" },
            { id: "d", text: "The target organisation has no security cameras" },
          ],
          correctOptionId: "b",
          explanation:
            "Hadnagy notes that verbal-non-verbal inconsistency is the primary failure mode. Targets may not consciously analyse body language, but they instinctively sense when something 'feels wrong' about an interaction.",
        },
        {
          id: "se-l06-q3",
          text: "Why does Hadnagy argue that security awareness training should use realistic simulations rather than just lectures?",
          options: [
            { id: "a", text: "Lectures are more expensive than simulations" },
            { id: "b", text: "Simulations give employees visceral experience of being targeted, making them more likely to recognise and resist real attacks" },
            { id: "c", text: "Lectures violate employment law in most countries" },
            { id: "d", text: "Simulations require no planning or resources" },
          ],
          correctOptionId: "b",
          explanation:
            "Experiential learning is more effective than theoretical instruction. Employees who have been targeted by a realistic simulated phishing campaign or vishing call develop intuitive recognition of attack patterns that lectures alone cannot provide.",
        },
        {
          id: "se-l06-q4",
          text: "What elements make a pretext convincing according to Hadnagy?",
          options: [
            { id: "a", text: "A celebrity name and expensive clothing" },
            { id: "b", text: "A believable backstory, supporting props, appropriate body language, cultural/jargon knowledge, and prepared responses to likely challenges" },
            { id: "c", text: "A genuine ID and a real job title" },
            { id: "d", text: "Only a confident speaking voice" },
          ],
          correctOptionId: "b",
          explanation:
            "A pretext is a complete narrative, not a single lie. It requires a plausible backstory, physical props, correct body language, knowledge of the target's culture and jargon, and rehearsed responses to anticipated challenges.",
        },
        {
          id: "se-l06-q5",
          text: "What is the goal of a human firewall defence strategy?",
          options: [
            { id: "a", text: "To prevent employees from talking to anyone outside the company" },
            { id: "b", text: "To channel trust through verification processes — not eliminate trust, but make exploitation substantially more difficult" },
            { id: "c", text: "To replace all human interactions with automated systems" },
            { id: "d", text: "To monitor all employee communications for suspicious keywords" },
          ],
          correctOptionId: "b",
          explanation:
            "Eliminating trust would be organisationally destructive. The human firewall channels trust through structured verification — employees are empowered and expected to verify identities and escalate suspicious interactions without social penalty.",
        },
      ],
    },
  ],
};
