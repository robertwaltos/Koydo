import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file005606.epub
// Author: Daniel H. Pink  |  Subject: Motivation & Leadership

export const DriveTheSurprisingTruthAboutWhatMotivatesUsModule: LearningModule = {
  id: "drive-the-surprising-truth-about-what-motivates-us",
  title: "Drive: The Surprising Truth About What Motivates Us",
  description:
    "Daniel Pink dismantles a century of management orthodoxy to reveal that the carrot-and-stick model of motivation is not only outdated but actively counterproductive. Drawing on decades of behavioural science from Harlow to Deci to Csikszentmihalyi, Pink shows why autonomy, mastery, and purpose — not rewards and punishments — are the true fuels of high performance.",
  subject: "Business",
  tags: ["epub-derived", "curriculum", "interactive", "mba", "leadership", "motivation"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Trace the scientific discovery of intrinsic motivation from Harlow's primates to Deci's experiments",
    "Explain why Motivation 2.0 (carrot-and-stick) is insufficient for 21st-century knowledge work",
    "Identify at least five specific ways rewards and punishments crowd out intrinsic motivation",
    "Distinguish Type I (intrinsically motivated) behaviour from Type X (extrinsically motivated) behaviour",
    "Apply the four dimensions of autonomy to design higher-engagement work environments",
    "Describe Csikszentmihalyi's concept of flow and its relationship to mastery",
    "Connect an organisation's purpose motive to its employees' long-term engagement and wellbeing",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  The Discovery of the Third Drive
    ───────────────────────────────────────────────── */
    {
      id: "drive-l01",
      title: "The Monkey Puzzle: Discovering a Third Drive",
      type: "video",
      duration: 12,
      objectives: [
        "Describe Harry Harlow's 1949 experiment and its unexpected finding",
        "Explain Edward Deci's 1969 study and the concept of intrinsic motivation",
        "Name and distinguish the three basic human motivation drives",
      ],
      chunks: [
        {
          id: "drive-l01-c1",
          title: "Harlow's Primates and the Puzzle Nobody Expected to Solve",
          content:
            "In 1949, University of Wisconsin professor Harry Harlow gave eight rhesus monkeys a simple mechanical puzzle — the kind with a pin, a hinge, and a hasp — with no reward attached, purely to observe learning behaviour. Within a few days, and without any prompting or incentive, the monkeys had solved the puzzles — repeatedly and with what appeared to be genuine enthusiasm. This confounded everything Harlow knew about motivation. The reigning scientific model held that organisms were driven by two primary forces: biological drives (hunger, thirst, reproduction) and conditioned responses to external rewards and punishments. But these monkeys were performing a cognitively demanding task not because they were hungry, not to earn food, and not to avoid pain. They were doing it because, apparently, solving the puzzle was itself pleasurable. Harlow's tentative name for this anomalous finding: an intrinsic drive.",
        },
        {
          id: "drive-l01-c2",
          title: "Deci's University Students and the Hidden Cost of Rewards",
          content:
            "Twenty years later, a young psychology researcher named Edward Deci designed an experiment at Carnegie Mellon that directly confronted the same paradox. Students working on an intrinsically interesting Soma puzzle were randomly divided into two groups. One group was told they would be paid a small sum for each puzzle solution; the other worked with no monetary incentive. After several sessions, the paid group received no more compensation — and the researchers secretly watched to see whether students continued working on puzzles in their free time. The paid students showed a marked decline in voluntary engagement once compensation ceased, while those never paid remained as interested as when they began. Deci's interpretation: the external reward had not supplemented their motivation, it had partially displaced it. Rewards changed the psychological framing from 'I do this because I find it interesting' to 'I do this for the money' — and when the money stopped, so did the behaviour.",
        },
        {
          id: "drive-l01-c3",
          title: "The Three Drives and Why the Third Is Different",
          content:
            "Pink synthesises this research into a framework of three sequential motivation operating systems. Drive 1 is biological: the survival imperatives of hunger, thirst, sex, and safety. Drive 2 — what Pink calls Motivation 2.0 — is the system of external rewards and punishments built by behavioural economists and management theorists through the early twentieth century: pay higher wages for harder work; impose penalties for failure; attach bonuses to performance targets. Drive 3 is intrinsic motivation: the deeply human desire to direct our own lives, to extend our abilities in ways that have meaning, and to contribute to something larger than ourselves. The key difference is not just the source of motivation but its durability and quality. External rewards produce compliance; intrinsic motivation produces commitment. For simple, algorithmic tasks, compliance may be sufficient. But for complex, creative, and morally demanding work — the kind that actually characterises most knowledge-economy roles — only commitment will do.",
        },
      ],
      flashcards: [
        {
          id: "drive-l01-f1",
          front: "Harry Harlow's 1949 discovery",
          back: "Rhesus monkeys solved mechanical puzzles repeatedly with no external reward, demonstrating a 'third drive' — motivation derived purely from the pleasure of the activity itself, now called intrinsic motivation",
        },
        {
          id: "drive-l01-f2",
          front: "Edward Deci",
          back: "Psychologist who ran the 1969 Soma puzzle study demonstrating that external monetary rewards for intrinsically interesting tasks reduced voluntary engagement once compensation was removed — the foundational crowding-out effect",
        },
        {
          id: "drive-l01-f3",
          front: "Motivation 2.0 (Drive 2)",
          back: "The dominant 20th-century management model built on external rewards and punishments (carrot-and-stick); effective for simple, algorithmic work but actively counterproductive for creative and complex tasks",
        },
        {
          id: "drive-l01-f4",
          front: "Intrinsic motivation (Drive 3)",
          back: "The human desire to direct our own lives, extend our abilities meaningfully, and contribute to something larger than ourselves; produces commitment, creativity, and sustained engagement that external rewards cannot replicate",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  The Rise and Fall of Motivation 2.0
    ───────────────────────────────────────────────── */
    {
      id: "drive-l02",
      title: "The Rise and Fall of Motivation 2.0",
      type: "video",
      duration: 11,
      objectives: [
        "Explain the Microsoft vs. Wikipedia thought experiment",
        "Describe why Motivation 2.0 was adequate for the industrial era but fails the knowledge economy",
        "Name the three operating system failures of Motivation 2.0",
      ],
      chunks: [
        {
          id: "drive-l02-c1",
          title: "The Wikipedia Thought Experiment",
          content:
            "Pink invites his readers to run a mental film back to 1995 and predict the outcome of a business competition. In one corner: Microsoft — funded by billions, staffed by the world's top engineers, equipped with comprehensive development tools and a generous compensation programme. In the other: a non-profit encyclopaedia to be written by tens of thousands of volunteers, working for free, under peer review, without job titles or monetary incentive. Any rational investor of 1995 would have bet on Microsoft — and they would have been catastrophically wrong. Encarta, Microsoft's premium paid encyclopaedia, ceased publication in 2009. Wikipedia, the 'volunteer project,' became the largest and most consulted reference work in human history. Pink's point is not that money is irrelevant but that for inherently meaningful, intellectually engaging collaborative work, intrinsic motivation mobilises more talent at greater quality than any compensation structure can match.",
        },
        {
          id: "drive-l02-c2",
          title: "Operating System Incompatibility",
          content:
            "Pink argues that organisations are running Motivation 2.0 software on a world that has changed fundamentally. The industrial economy produced primarily routine, algorithmic work — assembly lines, data entry, ledger-keeping — where standardised inputs reliably generate standardised outputs and where monitoring compliance is feasible. That world still exists, but an ever-growing proportion of valuable economic activity involves heuristic work: open-ended problems with no single correct answer, requiring judgement, creativity, and intrinsic investment. Motivation 2.0 is not merely suboptimal for heuristic work — it is actively destructive. External controls signal that the work is not worth doing for its own sake; rewards narrow focus in ways that reduce creative thinking; threat of punishment induces risk-avoidance that prevents exactly the experimentation that innovation requires.",
        },
        {
          id: "drive-l02-c3",
          title: "Three Compatibility Problems With Motivation 2.0",
          content:
            "Pink identifies three fundamental incompatibilities between Motivation 2.0 and the modern workplace. First, it assumes human beings are fundamentally passive — requiring external stimulation to act — when research consistently shows humans are naturally curious and self-directed. Second, it assumes engagement is purchased through reward, when the evidence shows engagement is cultivated through meaning, mastery, and relationships. Third, it treats work as a zero-sum exchange — time for money — when some of the most productive human contributions (open source, Wikipedia, creative and scientific work) voluntarily extend far beyond any contractual obligation. These are not minor calibration problems; they are deep structural mismatches between how Motivation 2.0 imagines human behaviour and how humans actually function when given the conditions to thrive.",
        },
      ],
      flashcards: [
        {
          id: "drive-l02-f1",
          front: "Microsoft Encarta vs Wikipedia",
          back: "Pink's thought experiment: Microsoft's paid, professionally-staffed encyclopaedia lost to a volunteer-written free one — demonstrating that intrinsic motivation can mobilise more talent at higher quality than external compensation for meaningful collaborative work",
        },
        {
          id: "drive-l02-f2",
          front: "Algorithmic vs heuristic work",
          back: "Algorithmic: routine tasks with specified steps and predictable outputs (suits Motivation 2.0). Heuristic: open-ended problems requiring creative judgement with no guaranteed solution (requires Motivation 3.0 — intrinsic investment)",
        },
        {
          id: "drive-l02-f3",
          front: "Sawyer Effect",
          back: "Named after Huck Finn's fence-whitewashing ploy: making an intrinsically engaging activity into a paid task transforms it from 'play' to 'work' — externalising the reward reduces subsequent voluntary engagement (crowding out)",
        },
        {
          id: "drive-l02-f4",
          front: "Motivation 2.0's three incompatibilities",
          back: "1) assumes humans are passive; 2) assumes engagement is purchased; 3) treats work as zero-sum exchange — all three contradict how humans actually function when given meaningful, self-directed conditions",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Seven Reasons Carrots and Sticks Don't Work
    ───────────────────────────────────────────────── */
    {
      id: "drive-l03",
      title: "Seven Reasons Carrots and Sticks Often Fail",
      type: "video",
      duration: 13,
      objectives: [
        "List at least five of Pink's seven failure modes of external motivation",
        "Explain the concept of cognitive dissonance in reward programmes",
        "Describe when conditional rewards are appropriate versus counterproductive",
      ],
      chunks: [
        {
          id: "drive-l03-c1",
          title: "The Carrot-and-Stick Failure Modes: Extinguishing Intrinsic Motivation and Reducing Performance",
          content:
            "Pink documents seven systematic ways that if-then incentive structures undermine the very goals they are designed to achieve. The first and perhaps most consequential is the extinguishing of intrinsic motivation: as Deci and decades of subsequent research demonstrated, rewarding an activity the person already finds meaningful changes the psychological framing from internal commitment to contingent compliance. Remove the reward and the behaviour often degrades below baseline. Second, external incentives reduce performance quality on complex tasks: the classic Amabile creativity candle experiment showed that groups working for a prize produced less innovative and less intrinsically evaluated solutions than control groups working for nothing. The cognitive load of tracking reward progress competes directly with the cognitive resources needed for creative thinking.",
        },
        {
          id: "drive-l03-c2",
          title: "Short-Termism, Risk Avoidance, and Ethical Erosion",
          content:
            "Pink's third and fourth failure modes address temporal distortion. Rewards and deadlines are anchoring tools: they focus human attention on the target and the timeline, which is precisely what you want in a straight-line production task. But in complex work, the most valuable contributions often have long lead times, non-obvious pathways, and uncertain outcomes. When performance-based rewards attach to quarterly metrics, employees rationally prioritise short-term results over longer-term, higher-value activities. Fifth, and most sobering: reward systems can erode ethical behaviour. Pink documents experiments in which participants offered larger bonuses for task completion were significantly more likely to lie about their results. When the size of the prize grows, the psychological cost of minor ethical violations shrinks in proportion — leading to the ratchet dynamic that characterised Enron, Wells Fargo, and many financial crisis scandals.",
        },
        {
          id: "drive-l03-c3",
          title: "Addiction Dynamics and the 'Special Circumstances' Exception",
          content:
            "Two final failure modes complete Pink's account: rewards become addictive — escalating doses are required to maintain the same motivational impact, creating an ever-more-expensive treadmill — and they foster a zero-sum, competitive identity that erodes the collaboration on which most organisations depend. But Pink is careful not to condemn all external rewards categorically. The distinction that matters is if-then versus now-that. If-then rewards ('If you hit the target, you will receive the bonus') create the contingency dynamics that crowd out intrinsic motivation. Now-that rewards ('You completed this project with exceptional quality — here is a recognition bonus not discussed when you started') are less likely to corrupt motivation because they are not the anticipated reason for the work. Unexpected, non-contingent rewards for excellent work are among the least damaging forms of external positive feedback.",
        },
      ],
      flashcards: [
        {
          id: "drive-l03-f1",
          front: "Crowding out (extrinsic rewards)",
          back: "The psychological mechanism by which external rewards displace intrinsic motivation: reframing the activity as done 'for the reward' rather than 'because it is meaningful,' reducing engagement when the reward is removed",
        },
        {
          id: "drive-l03-f2",
          front: "If-then vs now-that rewards",
          back: "If-then: contingent 'do X → get Y' structures that create anticipation and modify framing (most damaging to intrinsic motivation). Now-that: unexpected bonuses given after excellent work that do not become anticipated future expectations (less damaging)",
        },
        {
          id: "drive-l03-f3",
          front: "Ethical erosion under high-reward conditions",
          back: "Research finding that larger bonuses create stronger pressure to achieve targets, increasing the likelihood of rationalised dishonesty; explains the dynamic behind many corporate fraud scandals involving incentive-heavy compensation structures",
        },
        {
          id: "drive-l03-f4",
          front: "Reward addiction / escalating dose",
          back: "The pattern whereby a reward level that was initially motivating becomes inadequate after exposure, requiring ever-higher bonuses to maintain the same motivational effect — creating expensive and ultimately unsustainable incentive spirals",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Type I vs Type X Behaviour
    ───────────────────────────────────────────────── */
    {
      id: "drive-l04",
      title: "Type I and Type X: Self-Determination Theory in Practice",
      type: "video",
      duration: 11,
      objectives: [
        "Explain Deci and Ryan's Self-Determination Theory",
        "Contrast Type I and Type X motivational orientations",
        "Describe the three core psychological needs identified by SDT",
      ],
      chunks: [
        {
          id: "drive-l04-c1",
          title: "Self-Determination Theory: A New Science of Motivation",
          content:
            "In the early 1970s, Edward Deci teamed with Richard Ryan at the University of Rochester to build a comprehensive theory that could account for the full range of human motivation — from the most robotic compliance to the most freely chosen engagements. Their Self-Determination Theory (SDT), developed over three decades of experimental research, identifies three universal psychological needs whose satisfaction is necessary for intrinsic motivation to flourish: competence (the need to feel capable and effective), autonomy (the need to direct one's own actions and choices), and relatedness (the need for meaningful connections with others). When these needs are satisfied, SDT predicts, humans will naturally tend toward high motivation, wellbeing, and psychological growth. When they are frustrated — particularly by controlling environments — the opposite follows: amotivation, anxiety, and disengagement.",
        },
        {
          id: "drive-l04-c2",
          title: "Type X and Type I Behaviour",
          content:
            "Pink translates SDT into a simple but powerful behavioural typology. Type X behaviour is 'fuelled more by extrinsic desires than intrinsic ones' — oriented primarily toward external rewards, external validation, and the avoidance of external penalties. Type X people and organisations are not bad; they can achieve significant outcomes through controlling environments and conditional incentives. But their achievements are typically more fragile, less creative, and more dependent on continuous external augmentation than those driven by Type I orientation. Type I behaviour, by contrast, is 'fuelled more by intrinsic desires than extrinsic ones' — motivated by the inherent interest of the work, the satisfaction of mastery, and intrinsically valued goals. Type I people can still receive and appreciate external rewards; they just do not fundamentally organise their behaviour around them.",
        },
        {
          id: "drive-l04-c3",
          title: "Type I Organisations: Evidence in the Wild",
          content:
            "Pink provides multiple examples of Type I organisational practices in apparently unlikely contexts. Results-Only Work Environments (ROWEs) — first implemented at Best Buy under executives Cali Ressler and Jody Thompson — eliminated scheduled work hours entirely, measuring contribution solely on results. Employee engagement and productivity rose significantly; voluntary attrition fell. Google's famous 20-percent time, which asks employees to dedicate a fifth of their working hours to self-directed projects, produced Gmail, Google News, and AdSense — products that account for a disproportionate share of the company's revenue. Australian software company Atlassian implemented 'FedEx Days' inviting engineers to spend 24 hours working on anything they chose; the single-day experiments consistently produced more novel product innovations than conventional sprint cycles. These outcomes are precisely what SDT predicts: when competence, autonomy, and relatedness needs are met, engagement and creative output surge.",
        },
      ],
      flashcards: [
        {
          id: "drive-l04-f1",
          front: "Self-Determination Theory (SDT)",
          back: "Deci and Ryan's comprehensive motivation framework identifying three universal psychological needs — competence, autonomy, and relatedness — whose satisfaction produces intrinsic motivation, wellbeing, and psychological growth",
        },
        {
          id: "drive-l04-f2",
          front: "Type I behaviour",
          back: "Intrinsically driven orientation: motivated primarily by the inherent interest of the work, mastery satisfaction, and self-chosen goals — produces more creative, durable, and self-sustaining high performance than Type X",
        },
        {
          id: "drive-l04-f3",
          front: "Type X behaviour",
          back: "Extrinsically driven orientation: primarily motivated by external rewards, validation, and avoiding penalties — can produce results in routine, controlled tasks but tends toward fragility, short-termism, and ethical risk under high-incentive conditions",
        },
        {
          id: "drive-l04-f4",
          front: "Results-Only Work Environment (ROWE)",
          back: "Management model, pioneered at Best Buy, that eliminates scheduled hours entirely and measures employees solely on outcomes — a practical implementation of Type I principles showing engagement and productivity gains from autonomy restoration",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Quiz — Drives, Types, and the Science of Motivation
    ───────────────────────────────────────────────── */
    {
      id: "drive-l05",
      title: "The Science of Motivation: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Test comprehension of the three drives, SDT, and Type I/X typology"],
      questions: [
        {
          id: "drive-l05-q1",
          text: "What was the most surprising feature of Harlow's 1949 rhesus monkey experiment?",
          options: [
            { id: "a", text: "The monkeys solved puzzles faster when food was used as a reward, confirming Drive 1" },
            { id: "b", text: "The monkeys refused to engage with puzzles when placed in groups, revealing a social inhibition" },
            { id: "c", text: "The monkeys solved mechanical puzzles repeatedly and eagerly with no external reward, suggesting an intrinsic drive" },
            { id: "d", text: "The monkeys showed competence on day one but lost interest by day three, demonstrating cognitive fatigue" },
          ],
          correctOptionId: "c",
          explanation:
            "Harlow's experiment confounded the biological-drive and reward-punishment model by showing that the monkeys were motivated by the puzzle itself — the activity was its own reward. This was the first laboratory evidence for what Pink calls the Third Drive.",
        },
        {
          id: "drive-l05-q2",
          text: "Edward Deci's Soma puzzle study found that paying students to solve puzzles had what long-term effect?",
          options: [
            { id: "a", text: "Students who were paid continued solving puzzles in free time at higher rates because of positive reinforcement" },
            { id: "b", text: "Students who were paid showed reduced voluntary engagement once compensation stopped, suggesting reward had crowded out intrinsic motivation" },
            { id: "c", text: "Both groups showed identical engagement in free time, suggesting rewards neither help nor harm intrinsic motivation" },
            { id: "d", text: "Students who were not paid gave up more quickly on difficult puzzles, demonstrating that rewards support perseverance" },
          ],
          correctOptionId: "b",
          explanation:
            "Deci's key finding was that the paid students' baseline motivation declined after compensation was removed, while the unpaid students maintained stable engagement. The reward had transformed the psychological framing from intrinsic interest to contingent transaction.",
        },
        {
          id: "drive-l05-q3",
          text: "Which of the following is NOT one of the three universal psychological needs identified by Deci and Ryan's Self-Determination Theory?",
          options: [
            { id: "a", text: "Competence — the need to feel effective and capable" },
            { id: "b", text: "Recognition — the need to receive public acknowledgement of achievements" },
            { id: "c", text: "Autonomy — the need to direct one's own actions and choices" },
            { id: "d", text: "Relatedness — the need for meaningful connections with others" },
          ],
          correctOptionId: "b",
          explanation:
            "SDT's three universal needs are competence, autonomy, and relatedness. Recognition (external validation) is not one of them — in fact, programmes that substitute external recognition for genuine competence, autonomy, and relatedness often fail to produce the sustained engagement that SDT predicts.",
        },
        {
          id: "drive-l05-q4",
          text: "The Microsoft Encarta versus Wikipedia comparison is best used to argue that:",
          options: [
            { id: "a", text: "Paid professional contributors always produce higher quality output than unpaid volunteers" },
            { id: "b", text: "Large organisations should eliminate compensation entirely and rely on volunteer labour" },
            { id: "c", text: "For meaningful, collaborative, intellectually engaging work, intrinsic motivation can mobilise more talent at higher quality than compensation-based incentives" },
            { id: "d", text: "The internet made paid encyclopaedia production economically unviable regardless of motivation structure" },
          ],
          correctOptionId: "c",
          explanation:
            "Pink's point is not anti-compensation but about the relative power of intrinsic motivation for a specific class of work. Wikipedia's volunteers were not superior writers — they were more engaged because the work itself was personally meaningful and self-directed.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Autonomy — The First Pillar
    ───────────────────────────────────────────────── */
    {
      id: "drive-l06",
      title: "Autonomy: The First Pillar of Drive 3",
      type: "video",
      duration: 12,
      objectives: [
        "Define autonomy in Pink's framework and distinguish it from independence",
        "Explain the four dimensions of autonomy in work contexts",
        "Describe at least two real-world ROWE or self-management implementations and their results",
      ],
      chunks: [
        {
          id: "drive-l06-c1",
          title: "What Autonomy Actually Means",
          content:
            "Pink is precise about what autonomy means in the context of Drive 3 and what it does not. Autonomy does not mean isolation or the absence of accountability. Pink distinguishes between autonomy and independence: independence is doing things alone and on your own terms, disconnected from others; autonomy is acting with volition — choosing to commit to goals, relationships, and obligations because they reflect your own values and judgements. A person can be deeply embedded in a team structure, meeting demanding performance standards, and still be autonomous if the work reflects genuine choices rather than external control. This distinction matters because many objections to autonomy in organisations confuse it with the abolition of structure. Pink's argument is not structural anarchy; it is about the psychological experience of self-direction within structures that employees have genuine input in shaping.",
        },
        {
          id: "drive-l06-c2",
          title: "The Four Dimensions: Task, Time, Team, and Technique",
          content:
            "Pink's framework for implementing workplace autonomy identifies four distinct dimensions. Task autonomy means the ability to choose, at least partly, what work you do — the principle behind Google's 20-percent time and Atlassian's FedEx Days. Time autonomy means the ability to choose when you do your work — the principle behind Jeff Gunther's Charlottesville software company, which eliminated mandatory hours and measured only results. Team autonomy means the ability to choose, at least in part, who you work with — the principle used by the video game studio Valve, which famously has no managers and lets employees self-assign to projects by 'voting with their feet.' Technique autonomy means the freedom to choose how you approach a task — the space for personal experimentation that produces the most rapid professional development and the most novel solutions.",
        },
        {
          id: "drive-l06-c3",
          title: "Results-Only Work: The Evidence",
          content:
            "Jeff Gunther's Meddius, a small healthcare software company in Charlottesville, Virginia, became one of the earliest and most closely studied ROWE implementations outside of Best Buy. Gunther abolished mandatory office hours and attendance requirements, requiring only that employees meet their commitments and deliverables. The initial reaction from his own employees was confusion followed by anxiety: many had internalised the cultural equation of physical presence with professional legitimacy. Within months, however, the picture changed dramatically. Productivity rose, employee-reported stress declined, and turnover fell. Pink also describes Cali Ressler and Jody Thompson's documented case at Best Buy's corporate headquarters: after ROWE implementation, employee productivity increased by an average of 35%, and voluntary turnover was dramatically lower in ROWE-converted teams than in conventional ones. The pattern is consistent: when adults are treated as capable of managing their own time and held accountable for real outcomes rather than observable inputs, they typically rise to the responsibility.",
        },
      ],
      flashcards: [
        {
          id: "drive-l06-f1",
          front: "Autonomy vs independence (Pink's distinction)",
          back: "Independence = acting alone, disconnected from others. Autonomy = acting with volition — choosing commitments that reflect your own values within relationships and structures. Autonomy is compatible with teamwork and accountability; independence undermines collaboration.",
        },
        {
          id: "drive-l06-f2",
          front: "Four dimensions of workplace autonomy",
          back: "Task (what you work on), Time (when you work), Team (who you work with), Technique (how you approach the work) — restoring any of these dimensions increases engagement; restoring all four characterises high-autonomy organisations",
        },
        {
          id: "drive-l06-f3",
          front: "Jeff Gunther / Meddius ROWE",
          back: "Healthcare software CEO in Charlottesville, VA who abolished mandatory hours and measured only deliverables — saw productivity increases, stress reduction, and lower turnover as employees took genuine ownership of their output",
        },
        {
          id: "drive-l06-f4",
          front: "Google 20-percent time",
          back: "Policy directing engineers to spend one fifth of their working hours on self-chosen projects; produced Gmail, Google News, and AdSense — disproportionately high innovation yield demonstrating task autonomy's ROI",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Mastery and Purpose — The Second and Third Pillars
    ───────────────────────────────────────────────── */
    {
      id: "drive-l07",
      title: "Mastery and Purpose: The Second and Third Pillars of Drive 3",
      type: "video",
      duration: 12,
      objectives: [
        "Define mastery using Csikszentmihalyi's flow concept",
        "Explain the Goldilocks task principle and its managerial implications",
        "Connect purpose motive to long-term employee engagement and organisational performance",
      ],
      chunks: [
        {
          id: "drive-l07-c1",
          title: "Mastery and Csikszentmihalyi's Flow",
          content:
            "Mihaly Csikszentmihalyi — the Hungarian-American psychologist who, as a ten-year-old on a train platform in Budapest in 1944, watched the adults around him literally unmoor from their previous sense of identity under the pressure of war — spent his career studying the conditions under which humans experience what he called 'optimal experience': the absorbed, deeply satisfying state of being fully engaged in an intrinsically rewarding activity. He named this state 'flow' — the colloquial term his research subjects spontaneously used. Flow is characterised by complete concentration, loss of self-consciousness, distorted time perception, and a sense of effortless control. Pink's key insight is that flow is not simply pleasant — it is the affective signature of mastery in progress. People experience flow when they are working at the exact edge of their capabilities: challenged enough to be fully engaged, but not so overwhelmed that anxiety replaces absorption.",
        },
        {
          id: "drive-l07-c2",
          title: "The Goldilocks Principle for Task Design",
          content:
            "The flow concept implies a specific model for how mastery develops over time, which Pink calls the Goldilocks Task Principle: tasks must be neither too easy (producing boredom and disengagement) nor too difficult (producing anxiety and withdrawal) but calibrated exactly to the edge of current capability. This is not a fixed property of a task but a dynamic relationship between the task's demands and the performer's current skill level. As mastery grows, the same task becomes too easy — flow migrates upward to harder challenges. This has direct implications for how managers design roles and development pathways: the manager's job is not to protect employees from challenging work but to calibrate the difficulty of challenges to the edge of each person's current capability, ensuring continuous progress without demoralising overload. Mastery is not a destination; it is a perpetually approaching asymptote.",
        },
        {
          id: "drive-l07-c3",
          title: "Purpose: The Third Pillar",
          content:
            "Pink's third pillar — purpose — is both the most ambitious and the most difficult to operationalise. As North American baby boomers began turning 60 in 2006, Pink notes, the generation that redefined every life stage it passed through was arriving at the question of meaning with unprecedented urgency. His argument is that humans are uniquely capable of orienting their behaviour toward goals that transcend personal benefit — and that this capacity, when activated in an organisational context, produces engagement levels that neither autonomy nor mastery alone can fully explain. Purpose motive manifests in three ways: in organisational mission statements that actually reflect values rather than performance targets; in goal-setting that connects individual contribution to outcomes that matter to others; and — increasingly — in business models that treat profit as the means to a purpose rather than as the purpose itself. Organisations that combine all three pillars — autonomy, mastery, and purpose — build what Pink calls a 'Type I organisation': one tuned for the sustained high performance that the 21st century demands.",
        },
      ],
      flashcards: [
        {
          id: "drive-l07-f1",
          front: "Flow state (Csikszentmihalyi)",
          back: "The optimal experience of complete absorption, effortless control, and time distortion that occurs when a challenge exactly matches current skill level — the affective signature of mastery in progress",
        },
        {
          id: "drive-l07-f2",
          front: "Goldilocks Task Principle",
          back: "For sustained engagement and mastery development, tasks must be calibrated to the exact edge of current capability — too easy produces boredom; too hard produces anxiety; the optimal challenge zone sustains flow and growth",
        },
        {
          id: "drive-l07-f3",
          front: "Purpose motive",
          back: "The human capacity to orient behaviour toward goals that transcend personal benefit; in organisations, most powerfully activated when mission connects individual contribution to outcomes that genuinely matter to others",
        },
        {
          id: "drive-l07-f4",
          front: "Mastery as asymptote",
          back: "Pink's metaphor for the nature of mastery: it is a line you can approach indefinitely but never fully reach — this perpetual approach is motivating, not demoralising, because progress itself is intrinsically rewarding",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L08  Final Quiz — Autonomy, Mastery, Purpose
    ───────────────────────────────────────────────── */
    {
      id: "drive-l08",
      title: "Drive: Final Mastery Quiz",
      type: "quiz",
      duration: 9,
      objectives: ["Synthesise key insights from all three Drive 3 pillars: autonomy, mastery, and purpose"],
      questions: [
        {
          id: "drive-l08-q1",
          text: "According to Pink's framework, which of the following activities would most reliably produce 'flow'?",
          options: [
            { id: "a", text: "Data entry tasks with a clearly specified format and a tight deadline" },
            { id: "b", text: "A problem slightly beyond current skill level, requiring genuine concentration but not overwhelming" },
            { id: "c", text: "A familiar task you have performed hundreds of times — repetition deepens mastery" },
            { id: "d", text: "A high-stakes presentation on a topic you are highly knowledgeable about" },
          ],
          correctOptionId: "b",
          explanation:
            "Flow requires Csikszentmihalyi's Goldilocks balance: challenge at the edge of current capability. Familiar tasks produce boredom; overwhelming tasks produce anxiety. Option B describes the exact calibration that produces absorbed, self-directed engagement.",
        },
        {
          id: "drive-l08-q2",
          text: "Pink distinguishes autonomy from independence primarily to address the concern that:",
          options: [
            { id: "a", text: "Total independence is economically inefficient in large organisations" },
            { id: "b", text: "Some employees prefer external direction and should not be forced into self-managed roles" },
            { id: "c", text: "Autonomy in his sense describes acting with genuine volition within structures, not working alone and unaccountably" },
            { id: "d", text: "Legal and compliance requirements prevent true employee independence in publicly traded companies" },
          ],
          correctOptionId: "c",
          explanation:
            "Pink's argument is not for structural anarchy. Autonomy means choosing to commit to goals and relationships because they reflect your own values — fully compatible with accountability, teams, and demanding performance standards. Independence would indeed undermine collaboration.",
        },
        {
          id: "drive-l08-q3",
          text: "Which scenario best demonstrates the 'mastery as asymptote' principle?",
          options: [
            { id: "a", text: "A concert pianist who declares, after 40 years of performance, that they have finally mastered Beethoven's complete sonata cycle" },
            { id: "b", text: "A chess player whose drive to improve continues even after becoming world champion, because each game reveals new depths to explore" },
            { id: "c", text: "A junior accountant who stops learning once they have passed all required professional exams" },
            { id: "d", text: "A product manager who celebrates their product's market success as evidence that they have fully mastered their craft" },
          ],
          correctOptionId: "b",
          explanation:
            "The asymptote metaphor describes mastery as a line you approach indefinitely without fully reaching. The world chess champion who continues to deepen their understanding represents perpetual approach — the motivating force that sustains engagement far beyond achievement of external milestones.",
        },
        {
          id: "drive-l08-q4",
          text: "Pink's 'purpose motive' most directly challenges which common management belief?",
          options: [
            { id: "a", text: "That employee skill development should be tied to specific performance outcomes" },
            { id: "b", text: "That the primary purpose of a business is to generate profit for shareholders, with all other goals subordinate" },
            { id: "c", text: "That customer satisfaction is more important than employee satisfaction" },
            { id: "d", text: "That team cohesion is more important than individual performance" },
          ],
          correctOptionId: "b",
          explanation:
            "Pink's purpose motive argues that the most sustainably engaged organisations are those that treat profit as a means to a mission, not the mission itself. Organizations whose purpose narrative is purely financial fail to activate the transcendent goal-orientation that produces the highest levels of human engagement.",
        },
        {
          id: "drive-l08-q5",
          text: "The evidence from ROWE implementations at Best Buy and Meddius is most directly relevant to which of Pink's three Drive 3 pillars?",
          options: [
            { id: "a", text: "Mastery — because flexibility allows employees to concentrate uninterrupted on skill development" },
            { id: "b", text: "Purpose — because measuring only results forces employees to reflect on why their contribution matters" },
            { id: "c", text: "Autonomy — specifically the time and technique dimensions, which ROWE explicitly restores by eliminating mandatory presence requirements" },
            { id: "d", text: "Relatedness (SDT) — because self-determined schedules improve work-life balance and therefore social wellbeing" },
          ],
          correctOptionId: "c",
          explanation:
            "ROWE is an autonomy implementation — specifically targeting the time and technique dimensions by eliminating mandatory hours and measuring outcomes rather than physical presence. The productivity and retention gains Pink cites are the practical evidence base for time and technique autonomy's impact.",
        },
      ],
    },
  ],
};
