import type { LearningModule } from "@/lib/modules/types";

export const Economics401Module: LearningModule = {
  id: "economics-401",
  title: "Behavioral Economics & Advanced Topics",
  description:
    "Explore the intersection of psychology and economics. Master cognitive biases, prospect theory, nudge architecture, game theory, and the frontiers of modern economic thought — from information asymmetry to mechanism design.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "economics", "behavioral"],
  minAge: 16,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Identify key cognitive biases and heuristics that violate rational choice assumptions",
    "Apply prospect theory to explain risk-seeking and loss-averse behavior",
    "Design nudges using choice architecture principles",
    "Analyze strategic interactions using game theory frameworks",
    "Evaluate problems of asymmetric information: adverse selection and moral hazard",
    "Explain mechanism design and its applications in auctions and matching markets",
    "Synthesize behavioral insights with traditional economic analysis for policy design"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  The Behavioral Revolution  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l01",
      title: "The Behavioral Revolution",
      type: "video",
      duration: 13,
      objectives: [
        "Explain why standard rational-choice models are incomplete",
        "Identify the pioneers of behavioral economics (Kahneman, Tversky, Thaler)",
        "Distinguish System 1 (fast, intuitive) from System 2 (slow, deliberate) thinking"
      ],
      chunks: [
        {
          id: "economics-401-l01-c1",
          title: "Limits of Homo Economicus",
          content:
            "Traditional economics models assume 'homo economicus' — a perfectly rational agent with unlimited cognitive capacity, complete self-control, and purely self-interested preferences. Behavioral economics challenges each assumption. Real humans use mental shortcuts (heuristics) that are often effective but systematically biased. We procrastinate, we're swayed by irrelevant information, and we care deeply about fairness — even at a cost to ourselves."
        },
        {
          id: "economics-401-l01-c2",
          title: "System 1 and System 2",
          content:
            "Daniel Kahneman's dual-process theory distinguishes System 1 (fast, automatic, effortless, emotional) from System 2 (slow, deliberate, effortful, logical). Most daily decisions run on System 1 — you intuitively catch a ball or read an angry face. System 2 kicks in for complex problems like calculating a tip or comparing mortgages. Biases arise when System 1 answers a hard question by substituting an easier one (attribute substitution) and System 2 fails to catch the error."
        },
        {
          id: "economics-401-l01-c3",
          title: "Key Pioneers",
          content:
            "Daniel Kahneman and Amos Tversky's research on heuristics and biases (1970s) laid the foundation. Kahneman won the Nobel Prize in Economics in 2002. Richard Thaler extended behavioral findings into economics — showing how mental accounting, the endowment effect, and self-control problems affect consumer behavior. Thaler won the Nobel in 2017. Their work transformed policy: governments worldwide now use 'nudge units' to design better policies using behavioral insights."
        }
      ],
      flashcards: [
        { id: "economics-401-l01-f1", front: "Homo economicus", back: "The traditional economic model of a perfectly rational, self-interested agent with unlimited cognitive capacity" },
        { id: "economics-401-l01-f2", front: "System 1 vs. System 2", back: "System 1: fast, automatic, intuitive. System 2: slow, deliberate, analytical. Biases often arise from System 1 shortcuts." },
        { id: "economics-401-l01-f3", front: "Behavioral economics", back: "Field combining psychology and economics to study how cognitive biases, heuristics, and social factors affect economic decisions" },
        { id: "economics-401-l01-f4", front: "Attribute substitution", back: "When facing a hard question, System 1 unconsciously substitutes an easier related question — often causing systematic errors" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Cognitive Biases & Heuristics  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l02",
      title: "Cognitive Biases & Heuristics",
      type: "interactive",
      duration: 15,
      objectives: [
        "Define anchoring, availability, representativeness, and status quo bias",
        "Recognize how biases affect economic decisions",
        "Apply debiasing strategies in business contexts"
      ],
      chunks: [
        {
          id: "economics-401-l02-c1",
          title: "Anchoring and Adjustment",
          content:
            "Anchoring occurs when an initial number (the 'anchor') disproportionately influences subsequent judgments, even when the anchor is irrelevant. In a famous experiment, Kahneman and Tversky spun a rigged wheel showing either 10 or 65, then asked 'What percentage of African countries are in the UN?' Those who saw 65 estimated much higher. In business, listing a high 'original price' before a discount anchors consumers to perceive greater value. Salary negotiations are heavily influenced by whoever names the first number."
        },
        {
          id: "economics-401-l02-c2",
          title: "Availability and Representativeness",
          content:
            "The availability heuristic judges probability by how easily examples come to mind. Plane crashes (vivid, memorable) seem more dangerous than car accidents (common but forgettable). Representativeness judges probability by resemblance to a stereotype. 'Linda is a bank teller who is active in the feminist movement' — people rate 'feminist bank teller' as more likely than just 'bank teller,' violating basic probability (conjunction fallacy). In investing, availability drives investors to overweight recent dramatic events."
        },
        {
          id: "economics-401-l02-c3",
          title: "Status Quo Bias and Endowment Effect",
          content:
            "Status quo bias is the tendency to prefer the current state, even when changing would be objectively better. It explains why default options are so powerful — most people never switch from the pre-set 401(k) allocation. The endowment effect (Thaler) shows people value things more once they own them. In experiments, owners demand roughly twice what buyers are willing to pay for the same mug. Loss aversion amplifies both biases: losing something feels about twice as painful as gaining it feels good."
        }
      ],
      activities: [
        {
          id: "economics-401-l02-a1",
          title: "Match Biases to Business Scenarios",
          type: "matching_pairs" as const,
          pairs: [
            { id: "cb1", left: "Listing 'was $199, now $99'", right: "Anchoring — the original price frames perception of the deal" },
            { id: "cb2", left: "CEO overestimates cyber risk after a publicized breach", right: "Availability heuristic — recent vivid events inflate perceived probability" },
            { id: "cb3", left: "Employees never change their default retirement contribution", right: "Status quo bias — the default option feels safer than actively choosing" },
            { id: "cb4", left: "Seller demands $50 for a mug they wouldn't pay $25 for", right: "Endowment effect — ownership increases perceived value" },
            { id: "cb5", left: "Investor assumes a streak of gains will continue", right: "Representativeness — pattern-matching overrides base rates" },
            { id: "cb6", left: "Manager ignores sunk costs but team votes to continue a failing project", right: "Sunk cost fallacy — reluctance to abandon investments already made" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-401-l02-f1", front: "Anchoring bias", back: "An initial number disproportionately influences subsequent estimates, even when irrelevant to the judgment" },
        { id: "economics-401-l02-f2", front: "Availability heuristic", back: "Judging probability by how easily examples come to mind — vivid events seem more likely" },
        { id: "economics-401-l02-f3", front: "Endowment effect", back: "People value things more once they own them; owners demand more to sell than buyers would pay to acquire the same item" },
        { id: "economics-401-l02-f4", front: "Status quo bias", back: "Preference for the current state of affairs; makes default options extremely powerful" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Biases Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l03",
      title: "Cognitive Biases Quiz",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate understanding of key cognitive biases and heuristics"
      ],
      questions: [
        {
          id: "economics-401-l03-q1",
          text: "A real estate agent shows you an overpriced house first, then a fairly priced one that looks like a bargain by comparison. This exploits:",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "Availability heuristic" },
            { id: "b", text: "Anchoring bias" },
            { id: "c", text: "Sunk cost fallacy" },
            { id: "d", text: "Representativeness heuristic" }
          ],
          correctOptionId: "b",
          explanation: "The overpriced house sets a high anchor. The 'fairly priced' house seems like a deal relative to that anchor."
        },
        {
          id: "economics-401-l03-q2",
          text: "In experiments, people who own a coffee mug demand about twice what non-owners would pay. This illustrates:",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "The endowment effect" },
            { id: "b", text: "Prospect theory's certainty effect" },
            { id: "c", text: "Hyperbolic discounting" },
            { id: "d", text: "The winner's curse" }
          ],
          correctOptionId: "a",
          explanation: "The endowment effect: ownership increases perceived value, creating a gap between willingness to accept (WTA) and willingness to pay (WTP)."
        },
        {
          id: "economics-401-l03-q3",
          text: "After seeing news about a factory explosion, a manager doubles the safety budget despite no change in actual risk data. This reflects:",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "Status quo bias" },
            { id: "b", text: "Conjunction fallacy" },
            { id: "c", text: "Availability heuristic" },
            { id: "d", text: "Mental accounting" }
          ],
          correctOptionId: "c",
          explanation: "The vivid, recent explosion makes the risk feel more probable (availability heuristic), even though base-rate data hasn't changed."
        },
        {
          id: "economics-401-l03-q4",
          text: "System 1 thinking is best described as:",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "Slow, effortful, and analytical" },
            { id: "b", text: "Fast, automatic, and intuitive" },
            { id: "c", text: "Only activated during exams" },
            { id: "d", text: "Perfectly rational but slower than System 2" }
          ],
          correctOptionId: "b",
          explanation: "System 1 operates automatically, quickly, and with little effort — it handles most daily decisions but is prone to systematic biases."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L04  Prospect Theory & Loss Aversion  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l04",
      title: "Prospect Theory & Loss Aversion",
      type: "video",
      duration: 13,
      objectives: [
        "Contrast prospect theory with expected utility theory",
        "Explain the S-shaped value function and its implications",
        "Apply loss aversion and reference dependence to business decisions"
      ],
      chunks: [
        {
          id: "economics-401-l04-c1",
          title: "Expected Utility vs. Prospect Theory",
          content:
            "Expected utility theory (von Neumann-Morgenstern) says rational agents maximize the weighted average of utilities across possible outcomes. Prospect theory (Kahneman & Tversky, 1979) describes how people actually choose under risk. Key differences: people evaluate outcomes relative to a reference point (not absolute wealth), overweight small probabilities (buying lottery tickets) and underweight large ones, and experience losses more intensely than equivalent gains (loss aversion)."
        },
        {
          id: "economics-401-l04-c2",
          title: "The Value Function",
          content:
            "Prospect theory's value function is S-shaped: concave for gains (risk-averse — you prefer a sure $100 over a 50% chance of $200) and convex for losses (risk-seeking — you prefer a 50% chance of losing $200 over a sure loss of $100). It's steeper for losses than gains — losing $100 hurts roughly 2-2.5 times as much as gaining $100 feels good. This asymmetry explains why investors hold losing stocks too long (hoping to avoid crystallizing a loss) while selling winners too early (locking in gains)."
        },
        {
          id: "economics-401-l04-c3",
          title: "Reference Dependence in Business",
          content:
            "Reference points shape perception of value. A $5 discount on a $15 item feels great; the same $5 off a $500 item feels trivial (even though $5 is $5). Pricing strategies exploit reference dependence: 'was $100, now $70' creates a reference point that frames $70 as a gain. In negotiations, the first offer sets a reference — concessions from that anchor feel like 'giving.' In corporate strategy, managers evaluate projects relative to last year's performance (the reference), not the objectively optimal benchmark."
        }
      ],
      flashcards: [
        { id: "economics-401-l04-f1", front: "Prospect theory", back: "Descriptive theory of choice under risk: people evaluate outcomes relative to a reference point, are loss-averse, and overweight small probabilities" },
        { id: "economics-401-l04-f2", front: "Loss aversion", back: "Losses loom larger than gains — losing $100 feels about 2-2.5x as painful as gaining $100 feels good" },
        { id: "economics-401-l04-f3", front: "Reference dependence", back: "People evaluate outcomes as gains or losses relative to a reference point, not in absolute terms" },
        { id: "economics-401-l04-f4", front: "Disposition effect", back: "Investors hold losing stocks too long and sell winners too early — driven by loss aversion and reference dependence" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Nudges & Choice Architecture  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l05",
      title: "Nudges & Choice Architecture",
      type: "interactive",
      duration: 14,
      objectives: [
        "Define nudging and distinguish it from mandates and bans",
        "Identify the six NUDGES principles (Thaler & Sunstein)",
        "Design choice architectures for health, finance, and environmental goals"
      ],
      chunks: [
        {
          id: "economics-401-l05-c1",
          title: "What Is a Nudge?",
          content:
            "A nudge is any aspect of choice architecture that alters behavior predictably without forbidding options or significantly changing economic incentives. It's libertarian paternalism — preserving freedom of choice while steering toward better outcomes. Placing fruit at eye level in a cafeteria is a nudge; banning junk food is not. Nudges exploit the very biases behavioral economics identifies: defaults (status quo bias), framing (loss aversion), and social norms (conformity)."
        },
        {
          id: "economics-401-l05-c2",
          title: "The NUDGES Framework",
          content:
            "Thaler and Sunstein's acronym: iNcentives (make costs visible — show monthly energy cost, not annual), Understand mappings (translate complex choices into understandable terms), Defaults (set the best option as default — auto-enroll in retirement savings), Give feedback (real-time alerts on spending), Expect error (design for mistakes — 'are you sure?' prompts), Structure complex choices (simplify menus, use filters). Each principle leverages a behavioral insight to improve outcomes."
        },
        {
          id: "economics-401-l05-c3",
          title: "Nudges in Practice",
          content:
            "UK's Behavioural Insights Team ('Nudge Unit') increased tax collection by telling late payers that most neighbors had already paid (social norms). Auto-enrollment in 401(k) plans in the U.S. boosted retirement savings participation from ~60% to 90% (defaults). Organ donation rates are dramatically higher in opt-out countries (Austria: 99%) vs. opt-in (Germany: 12%). In all cases, no option is removed — the architecture just makes the better choice easier."
        }
      ],
      activities: [
        {
          id: "economics-401-l05-a1",
          title: "Classify Interventions: Nudge vs. Not a Nudge",
          type: "sorting_buckets" as const,
          buckets: ["Nudge", "Not a Nudge (Mandate/Ban/Tax)"],
          items: [
            { id: "nd1", text: "Auto-enrolling employees in retirement savings", bucket: "Nudge" },
            { id: "nd2", text: "Banning trans fats in restaurants", bucket: "Not a Nudge (Mandate/Ban/Tax)" },
            { id: "nd3", text: "Placing healthy food at eye level in the cafeteria", bucket: "Nudge" },
            { id: "nd4", text: "Taxing sugary drinks at $0.02 per ounce", bucket: "Not a Nudge (Mandate/Ban/Tax)" },
            { id: "nd5", text: "Showing energy usage compared to neighbors on the bill", bucket: "Nudge" },
            { id: "nd6", text: "Requiring calorie counts on menus", bucket: "Not a Nudge (Mandate/Ban/Tax)" },
            { id: "nd7", text: "Using opt-out organ donation rather than opt-in", bucket: "Nudge" },
            { id: "nd8", text: "Sending a text reminder before a doctor's appointment", bucket: "Nudge" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-401-l05-f1", front: "Nudge", back: "Any choice architecture element that predictably alters behavior without forbidding options or significantly changing incentives" },
        { id: "economics-401-l05-f2", front: "Libertarian paternalism", back: "Philosophy behind nudging: guide people toward better choices while preserving freedom to choose otherwise" },
        { id: "economics-401-l05-f3", front: "Default effect", back: "Pre-selected options are chosen far more often because switching requires effort (status quo bias)" },
        { id: "economics-401-l05-f4", front: "Choice architecture", back: "The design of the environment in which people make decisions — including defaults, framing, ordering, and simplification" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Nudges & Prospect Theory Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l06",
      title: "Prospect Theory & Nudges Quiz",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate understanding of prospect theory and choice architecture"
      ],
      questions: [
        {
          id: "economics-401-l06-q1",
          text: "According to prospect theory, a person is most likely to be risk-seeking when:",
          skillId: "economics-401-skill-prospect",
          options: [
            { id: "a", text: "Choosing between certain gains" },
            { id: "b", text: "Evaluating small probabilities of gains" },
            { id: "c", text: "Facing a choice between certain losses" },
            { id: "d", text: "Making decisions with complete information" }
          ],
          correctOptionId: "c",
          explanation: "The value function is convex in the loss domain — people become risk-seeking to avoid a certain loss, preferring a gamble with a chance of avoiding any loss."
        },
        {
          id: "economics-401-l06-q2",
          text: "Auto-enrollment in 401(k) plans dramatically increases participation because of:",
          skillId: "economics-401-skill-prospect",
          options: [
            { id: "a", text: "Anchoring bias" },
            { id: "b", text: "The availability heuristic" },
            { id: "c", text: "Status quo bias / default effect" },
            { id: "d", text: "The conjunction fallacy" }
          ],
          correctOptionId: "c",
          explanation: "People tend to stick with the default option (status quo bias). When the default is enrollment rather than non-enrollment, participation jumps from ~60% to ~90%."
        },
        {
          id: "economics-401-l06-q3",
          text: "Loss aversion predicts that investors will tend to:",
          skillId: "economics-401-skill-prospect",
          options: [
            { id: "a", text: "Sell losing stocks quickly to limit losses" },
            { id: "b", text: "Hold losing stocks too long and sell winners too early" },
            { id: "c", text: "Invest only in risk-free bonds" },
            { id: "d", text: "Diversify perfectly across all asset classes" }
          ],
          correctOptionId: "b",
          explanation: "The disposition effect: investors hold losers (hoping to avoid realizing a loss) and sell winners early (locking in a sure gain) — driven by loss aversion."
        },
        {
          id: "economics-401-l06-q4",
          text: "Which of the following is NOT a nudge?",
          skillId: "economics-401-skill-prospect",
          options: [
            { id: "a", text: "Placing fruit at eye level in a cafeteria" },
            { id: "b", text: "Taxing sugary drinks at $0.02 per ounce" },
            { id: "c", text: "Auto-enrolling employees in a pension plan" },
            { id: "d", text: "Showing neighbors' energy usage on a utility bill" }
          ],
          correctOptionId: "b",
          explanation: "A tax significantly changes economic incentives — it's a traditional policy tool, not a nudge. Nudges alter choice architecture without changing prices or banning options."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L07  Game Theory for Business  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l07",
      title: "Game Theory for Business",
      type: "video",
      duration: 14,
      objectives: [
        "Model strategic interactions using payoff matrices",
        "Identify Nash equilibrium and dominant strategies",
        "Apply prisoner's dilemma, coordination games, and signaling to business"
      ],
      chunks: [
        {
          id: "economics-401-l07-c1",
          title: "The Prisoner's Dilemma",
          content:
            "Two suspects are interrogated separately. If both stay silent, each gets 1 year. If one defects (confesses) while the other stays silent, the defector goes free and the silent one gets 10 years. If both defect, each gets 5 years. The Nash equilibrium is (Defect, Defect) — each player's best response to the other's strategy is to defect, even though mutual cooperation yields a better outcome. In business: price wars, arms races in advertising, and the tragedy of the commons all mirror this structure."
        },
        {
          id: "economics-401-l07-c2",
          title: "Nash Equilibrium and Dominant Strategies",
          content:
            "A Nash equilibrium is a set of strategies where no player can improve their payoff by unilaterally changing strategy. A dominant strategy is one that is best regardless of what others do. Not all games have dominant strategies, but all finite games have at least one Nash equilibrium (possibly in mixed strategies). In the Cournot duopoly model, two firms choosing output quantities reach a Nash equilibrium where each produces the best response to the other's output — resulting in prices between monopoly and perfect competition."
        },
        {
          id: "economics-401-l07-c3",
          title: "Signaling and Credible Commitment",
          content:
            "In games with asymmetric information, players use signals to convey private knowledge. Michael Spence's job market signaling: college degrees may not increase productivity but signal ability to employers. For a signal to work, it must be costly for low types to fake (separating equilibrium). Credible commitments change the game structure — Cortés burning his ships made retreat impossible, committing his army to fight. In business, money-back guarantees signal product quality because low-quality firms would face unsustainable return costs."
        }
      ],
      flashcards: [
        { id: "economics-401-l07-f1", front: "Nash equilibrium", back: "A strategy profile where no player can improve their payoff by unilaterally changing their strategy" },
        { id: "economics-401-l07-f2", front: "Prisoner's dilemma", back: "A game where individual incentives to defect lead both players to a worse outcome than if both cooperated" },
        { id: "economics-401-l07-f3", front: "Dominant strategy", back: "A strategy that is optimal for a player regardless of what the other players choose" },
        { id: "economics-401-l07-f4", front: "Signaling (Spence)", back: "Costly actions taken to credibly convey private information — e.g., degrees signal ability because they're costly for low-ability types" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Information Asymmetry  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l08",
      title: "Information Asymmetry: Adverse Selection & Moral Hazard",
      type: "interactive",
      duration: 14,
      objectives: [
        "Distinguish adverse selection (pre-contract) from moral hazard (post-contract)",
        "Apply Akerlof's 'market for lemons' to real markets",
        "Design contracts that mitigate information asymmetry"
      ],
      chunks: [
        {
          id: "economics-401-l08-c1",
          title: "Adverse Selection — The Market for Lemons",
          content:
            "George Akerlof (1970) showed how asymmetric information can destroy markets. In a used car market, sellers know car quality but buyers don't. Buyers offer a price reflecting average quality. Owners of good cars won't sell at that price, so they exit. Now average quality drops further. In the extreme, only 'lemons' remain and the market collapses. Adverse selection also threatens insurance: if only high-risk people buy insurance (knowing their risk), premiums spiral upward, driving out low-risk buyers."
        },
        {
          id: "economics-401-l08-c2",
          title: "Moral Hazard",
          content:
            "Moral hazard occurs after a contract is signed: one party takes more risk because the other bears the consequences. A fully insured driver may drive less carefully. A bank expecting a government bailout takes excessive risks ('too big to fail'). The principal-agent problem is a moral hazard framework: the principal (employer) can't perfectly observe the agent's (employee's) effort. Solutions include monitoring, performance-based pay, deductibles and copays in insurance, and clawback provisions."
        },
        {
          id: "economics-401-l08-c3",
          title: "Market Solutions to Asymmetry",
          content:
            "Markets develop mechanisms to overcome information problems. Warranties and guarantees signal quality (adverse selection). Brand reputation aggregates historical performance information. Third-party ratings (credit scores, restaurant reviews) reduce search costs. Screening occurs when the uninformed party designs a menu of options to reveal information — insurance companies offering high-deductible (cheap) and low-deductible (expensive) plans to separate high-risk from low-risk customers."
        }
      ],
      activities: [
        {
          id: "economics-401-l08-a1",
          title: "Classify Information Problems",
          type: "sorting_buckets" as const,
          buckets: ["Adverse Selection", "Moral Hazard"],
          items: [
            { id: "ia1", text: "High-risk individuals disproportionately buying health insurance", bucket: "Adverse Selection" },
            { id: "ia2", text: "Insured homeowner not installing a security system", bucket: "Moral Hazard" },
            { id: "ia3", text: "Used car buyer unable to distinguish good cars from lemons", bucket: "Adverse Selection" },
            { id: "ia4", text: "Employee shirking because supervisor can't monitor effort", bucket: "Moral Hazard" },
            { id: "ia5", text: "Bank taking excessive risk knowing government will bail it out", bucket: "Moral Hazard" },
            { id: "ia6", text: "Only the sickest patients choosing the most comprehensive plan", bucket: "Adverse Selection" },
            { id: "ia7", text: "Borrower investing a loan in riskier projects than disclosed", bucket: "Moral Hazard" },
            { id: "ia8", text: "Best employees leaving a firm that pays flat wages regardless of skill", bucket: "Adverse Selection" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-401-l08-f1", front: "Adverse selection", back: "Pre-contract problem: the uninformed party attracts an unfavorable mix of the informed party (lemons, high-risk buyers)" },
        { id: "economics-401-l08-f2", front: "Moral hazard", back: "Post-contract problem: one party takes more risk or less care because the other party bears the cost" },
        { id: "economics-401-l08-f3", front: "Market for lemons (Akerlof)", back: "Model showing how information asymmetry can cause market failure: good products exit, only lemons remain" },
        { id: "economics-401-l08-f4", front: "Screening", back: "When the uninformed party designs a menu of contracts that induces the informed party to self-select and reveal their type" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Game Theory & Info Asymmetry Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l09",
      title: "Game Theory & Information Asymmetry Quiz",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate understanding of game theory and information economics"
      ],
      questions: [
        {
          id: "economics-401-l09-q1",
          text: "In the prisoner's dilemma, the Nash equilibrium is:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Both cooperate" },
            { id: "b", text: "Both defect" },
            { id: "c", text: "One cooperates, one defects" },
            { id: "d", text: "There is no equilibrium" }
          ],
          correctOptionId: "b",
          explanation: "Each player's best response to the other's strategy is to defect, so (Defect, Defect) is the unique Nash equilibrium — even though mutual cooperation would be better for both."
        },
        {
          id: "economics-401-l09-q2",
          text: "Akerlof's 'market for lemons' demonstrates which problem?",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Moral hazard" },
            { id: "b", text: "Adverse selection" },
            { id: "c", text: "Free riding" },
            { id: "d", text: "Monopoly pricing" }
          ],
          correctOptionId: "b",
          explanation: "The lemons problem is the canonical example of adverse selection — asymmetric information causes good sellers to exit, leaving only low-quality (lemons)."
        },
        {
          id: "economics-401-l09-q3",
          text: "A bank takes excessive risk because it expects a government bailout. This is an example of:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Adverse selection" },
            { id: "b", text: "The endowment effect" },
            { id: "c", text: "Moral hazard" },
            { id: "d", text: "Anchoring bias" }
          ],
          correctOptionId: "c",
          explanation: "The bank changes its behavior after the implicit insurance contract (bailout expectation), taking more risk because it doesn't bear the full downside — classic moral hazard."
        },
        {
          id: "economics-401-l09-q4",
          text: "In Spence's signaling model, a college degree works as a signal because:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "College directly increases productivity" },
            { id: "b", text: "It is costlier for low-ability individuals to obtain" },
            { id: "c", text: "All employers require degrees" },
            { id: "d", text: "The government mandates degree requirements" }
          ],
          correctOptionId: "b",
          explanation: "For a signal to create a separating equilibrium, it must be differentially costly — low-ability types find it too expensive to mimic, so the degree credibly reveals type."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l10",
      title: "Behavioral Economics Mastery Quiz",
      type: "quiz",
      duration: 15,
      objectives: [
        "Synthesize knowledge across behavioral economics and advanced topics"
      ],
      questions: [
        {
          id: "economics-401-l10-q1",
          text: "Loss aversion means that:",
          skillId: "economics-401-skill-prospect",
          options: [
            { id: "a", text: "People prefer avoiding risk in all situations" },
            { id: "b", text: "Losses feel roughly twice as painful as equivalent gains feel good" },
            { id: "c", text: "People always choose the safe option" },
            { id: "d", text: "People are unable to evaluate probability" }
          ],
          correctOptionId: "b",
          explanation: "Kahneman and Tversky estimated loss aversion at about 2-2.5x — losing $100 hurts about twice as much as gaining $100 feels good."
        },
        {
          id: "economics-401-l10-q2",
          text: "Which bias is exploited by 'opt-out' organ donation systems?",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "Anchoring" },
            { id: "b", text: "Representativeness" },
            { id: "c", text: "Status quo bias" },
            { id: "d", text: "Overconfidence" }
          ],
          correctOptionId: "c",
          explanation: "People tend to stick with the default. When the default is 'donor' (opt-out), participation rates reach ~99% vs. ~12% in opt-in systems."
        },
        {
          id: "economics-401-l10-q3",
          text: "In the value function of prospect theory, the curve in the loss domain is:",
          skillId: "economics-401-skill-prospect",
          options: [
            { id: "a", text: "Concave (risk-averse)" },
            { id: "b", text: "Convex (risk-seeking)" },
            { id: "c", text: "Linear" },
            { id: "d", text: "Undefined" }
          ],
          correctOptionId: "b",
          explanation: "The value function is convex in the loss domain — people become risk-seeking when facing losses, preferring a gamble to a sure loss."
        },
        {
          id: "economics-401-l10-q4",
          text: "A dominant strategy in game theory is one that:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Requires coordination with other players" },
            { id: "b", text: "Is optimal regardless of what other players do" },
            { id: "c", text: "Can only exist in zero-sum games" },
            { id: "d", text: "Guarantees the best possible outcome" }
          ],
          correctOptionId: "b",
          explanation: "A dominant strategy yields the highest payoff no matter what the other player(s) choose — you never regret playing it."
        },
        {
          id: "economics-401-l10-q5",
          text: "Insurance companies offering menus of high-deductible and low-deductible plans are using:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Price discrimination" },
            { id: "b", text: "Screening to separate risk types" },
            { id: "c", text: "Nudging" },
            { id: "d", text: "Anchoring" }
          ],
          correctOptionId: "b",
          explanation: "Screening: the uninformed insurer designs contracts that cause high-risk customers to self-select expensive comprehensive plans and low-risk customers to choose cheap high-deductible plans."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L11  Applied Challenge: Mechanism Design  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l11",
      title: "Applied Challenge: Mechanism Design & Auctions",
      type: "interactive",
      duration: 18,
      objectives: [
        "Explain mechanism design as 'reverse game theory'",
        "Compare auction formats and their strategic properties",
        "Apply matching market design to real-world problems"
      ],
      chunks: [
        {
          id: "economics-401-l11-c1",
          title: "Mechanism Design: Reverse Game Theory",
          content:
            "Game theory takes the rules as given and predicts behavior. Mechanism design works backward — it asks: what rules should we design to achieve a desired outcome? Leonid Hurwicz, Roger Myerson, and Eric Maskin won the 2007 Nobel for this field. Key concepts: incentive compatibility (the mechanism makes truthful reporting optimal), individual rationality (participation is voluntary and beneficial), and efficiency (the outcome maximizes total surplus). Applications include auction design, public goods provision, and matching markets."
        },
        {
          id: "economics-401-l11-c2",
          title: "Auction Formats",
          content:
            "English auction (ascending): bidders raise prices until one remains. Dutch auction (descending): price drops until a bidder accepts. First-price sealed-bid: highest bidder wins, pays their bid (strategic shading). Second-price sealed-bid (Vickrey): highest bidder wins, pays the second-highest bid — truthful bidding is the dominant strategy. The Revenue Equivalence Theorem says that under standard assumptions, all four formats yield the same expected revenue. In practice, differences in risk aversion, information structure, and collusion create distinctions."
        },
        {
          id: "economics-401-l11-c3",
          title: "Matching Markets",
          content:
            "Some markets can't use prices effectively (organ donation, school assignment, medical residencies). Alvin Roth and Lloyd Shapley (Nobel 2012) developed stable matching algorithms. The Deferred Acceptance algorithm (Gale-Shapley) matches residents to hospitals: each round, applicants propose to their top choice; hospitals tentatively accept their best offers and reject others; rejected applicants propose to their next choice. The result is a stable matching — no pair would prefer to break from their assigned match to be together."
        }
      ],
      activities: [
        {
          id: "economics-401-l11-a1",
          title: "Match Auction Types to Properties",
          type: "matching_pairs" as const,
          pairs: [
            { id: "au1", left: "English auction", right: "Ascending bids; winner pays slightly above second-highest valuation" },
            { id: "au2", left: "Dutch auction", right: "Descending price; first bidder to accept wins at that price" },
            { id: "au3", left: "First-price sealed-bid", right: "Highest bid wins; strategic bid shading is optimal" },
            { id: "au4", left: "Vickrey (second-price sealed-bid)", right: "Highest bid wins but pays second-highest bid; truthful bidding is dominant" },
            { id: "au5", left: "Deferred Acceptance algorithm", right: "Produces stable matchings in two-sided markets like residency placement" },
            { id: "au6", left: "Revenue Equivalence Theorem", right: "Under standard assumptions, all common auction formats yield equal expected revenue" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-401-l11-f1", front: "Mechanism design", back: "Designing rules/institutions to achieve desired outcomes — 'reverse game theory' (Hurwicz, Myerson, Maskin; Nobel 2007)" },
        { id: "economics-401-l11-f2", front: "Vickrey auction", back: "Second-price sealed-bid: winner pays second-highest bid; truthful bidding is the dominant strategy" },
        { id: "economics-401-l11-f3", front: "Stable matching", back: "An assignment where no two participants would prefer to be matched with each other over their current partners" },
        { id: "economics-401-l11-f4", front: "Incentive compatibility", back: "A mechanism is incentive compatible when truthful reporting is each player's best strategy" }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l12",
      title: "Behavioral Economics Mastery Retest",
      type: "quiz",
      duration: 15,
      objectives: [
        "Demonstrate mastery of behavioral economics and advanced topics on second attempt"
      ],
      questions: [
        {
          id: "economics-401-l12-q1",
          text: "The conjunction fallacy occurs when people judge that:",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "Two independent events are always independent" },
            { id: "b", text: "A specific combination of events is more likely than either event alone" },
            { id: "c", text: "Past events influence future probabilities" },
            { id: "d", text: "Large samples are less reliable than small ones" }
          ],
          correctOptionId: "b",
          explanation: "The conjunction fallacy: P(A and B) cannot exceed P(A) or P(B), but representativeness heuristic makes detailed scenarios feel more probable than general ones."
        },
        {
          id: "economics-401-l12-q2",
          text: "In a Vickrey auction, the dominant strategy is to:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Bid below your true valuation" },
            { id: "b", text: "Bid above your true valuation" },
            { id: "c", text: "Bid exactly your true valuation" },
            { id: "d", text: "Wait until the last moment to bid" }
          ],
          correctOptionId: "c",
          explanation: "In a second-price sealed-bid auction, you pay the second-highest bid regardless. Bidding your true value ensures you win whenever it's profitable and never overpay."
        },
        {
          id: "economics-401-l12-q3",
          text: "The principal-agent problem is a form of:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Adverse selection" },
            { id: "b", text: "Moral hazard" },
            { id: "c", text: "Anchoring bias" },
            { id: "d", text: "Loss aversion" }
          ],
          correctOptionId: "b",
          explanation: "The principal can't perfectly observe the agent's effort after contracting — the agent may shirk. This hidden action is moral hazard."
        },
        {
          id: "economics-401-l12-q4",
          text: "Richard Thaler's concept of mental accounting describes:",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "Keeping detailed financial spreadsheets" },
            { id: "b", text: "Treating money differently depending on its source or intended use" },
            { id: "c", text: "Inflation-adjusted accounting methods" },
            { id: "d", text: "Government budget accounting standards" }
          ],
          correctOptionId: "b",
          explanation: "Mental accounting: people compartmentalize money into mental categories (vacation fund, daily budget) and treat them non-fungibly — $20 found on the street is spent more freely than $20 from wages."
        },
        {
          id: "economics-401-l12-q5",
          text: "A stable matching produced by the Deferred Acceptance algorithm means:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Everyone gets their first choice" },
            { id: "b", text: "No unmatched pair would prefer each other over their current match" },
            { id: "c", text: "The algorithm always terminates in one round" },
            { id: "d", text: "Revenue is maximized" }
          ],
          correctOptionId: "b",
          explanation: "Stability means there's no 'blocking pair' — no two participants who would both prefer to be matched with each other over their assigned partners."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L13  Real-World Application  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l13",
      title: "Real-World Application: Behavioral Economics in Action",
      type: "video",
      duration: 14,
      objectives: [
        "Analyze real-world applications of behavioral economics in policy and business",
        "Evaluate the effectiveness and ethics of nudging"
      ],
      chunks: [
        {
          id: "economics-401-l13-c1",
          title: "Nudge Units Around the World",
          content:
            "The UK's Behavioural Insights Team (BIT), established in 2010, was the first government nudge unit. They boosted tax compliance by adding social norm messages ('9 out of 10 people in your area pay on time'), increased organ donation sign-ups by simplifying the registration page, and improved job seeker outcomes by using implementation intentions ('Write down exactly when and where you will search for jobs this week'). The model has spread to 200+ government organizations worldwide, from the White House's SBST to Singapore's BIG."
        },
        {
          id: "economics-401-l13-c2",
          title: "Behavioral Finance",
          content:
            "Behavioral finance applies psychology to financial markets. Key findings: overconfidence leads to excessive trading (which underperforms buy-and-hold); herding behavior creates bubbles and crashes; myopic loss aversion makes investors check portfolios too frequently, seeing short-term losses and becoming too conservative; and the disposition effect causes tax-inefficient selling. Robo-advisors and target-date funds are 'behavioral architecture' — automating good decisions to bypass human biases."
        },
        {
          id: "economics-401-l13-c3",
          title: "Ethics of Nudging",
          content:
            "Critics raise important concerns: nudges can be manipulative (who decides what's 'better'?), they can be used by companies to exploit consumers ('dark nudges' — hidden fees, confusing cancellation processes), and they may reduce individual autonomy. Defenders argue nudges are transparent, preserving freedom, and far less coercive than bans or mandates. The ethical standard: nudges should be easy to opt out of, promote the chooser's own interests, and be transparent about their intent."
        }
      ],
      flashcards: [
        { id: "economics-401-l13-f1", front: "Behavioural Insights Team (BIT)", back: "UK's 'Nudge Unit' — first government team applying behavioral science to policy; model replicated in 200+ organizations worldwide" },
        { id: "economics-401-l13-f2", front: "Dark nudge", back: "Manipulative use of choice architecture to exploit rather than help: hidden fees, confusing unsubscribe processes, pre-checked boxes" },
        { id: "economics-401-l13-f3", front: "Myopic loss aversion", back: "Checking portfolios too frequently causes investors to over-react to short-term losses and invest too conservatively" }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Coaching Clinic  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l14",
      title: "Coaching Clinic: Common Behavioral Economics Mistakes",
      type: "interactive",
      duration: 12,
      objectives: [
        "Identify and correct common mistakes in applying behavioral economics"
      ],
      chunks: [
        {
          id: "economics-401-l14-c1",
          title: "Misconceptions and Pitfalls",
          content:
            "Common mistakes: (1) Thinking behavioral economics replaces traditional economics — it supplements it; markets still tend toward equilibrium, incentives still matter. (2) Assuming one bias explains everything — behavior is multi-causal. (3) Designing nudges without testing — what works in one context may backfire in another (context dependence). (4) Ignoring that biases can be beneficial — heuristics often produce good-enough decisions quickly. (5) Confusing correlation in behavioral experiments with causation in complex real-world settings."
        }
      ],
      activities: [
        {
          id: "economics-401-l14-a1",
          title: "Match Mistakes to Corrections",
          type: "matching_pairs" as const,
          pairs: [
            { id: "bm1", left: "Behavioral economics proves people are irrational", right: "People are predictably biased but often reasonably adaptive — heuristics work well in many contexts" },
            { id: "bm2", left: "Nudges always work the same way", right: "Nudge effectiveness is highly context-dependent — always test before scaling" },
            { id: "bm3", left: "Loss aversion means people never take risks", right: "People are risk-seeking in the loss domain — loss aversion is about the asymmetric weighting, not risk avoidance" },
            { id: "bm4", left: "Nash equilibrium is the best possible outcome", right: "Nash equilibrium is stable, not necessarily optimal — the prisoner's dilemma Nash outcome is worse than mutual cooperation" },
            { id: "bm5", left: "All defaults are nudges", right: "Defaults can be accidental or bureaucratic; nudges are deliberately designed to improve outcomes" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-401-l14-f1", front: "Why doesn't behavioral economics replace traditional economics?", back: "It supplements traditional models — incentives, supply/demand, and equilibrium still drive markets; behavioral insights explain predictable deviations" },
        { id: "economics-401-l14-f2", front: "Why must nudges be tested?", back: "Context dependence: what works in one population or setting may backfire in another — always run controlled experiments before scaling" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-401-l15",
      title: "Behavioral Economics Mastery Sprint",
      type: "quiz",
      duration: 12,
      objectives: [
        "Achieve final mastery of behavioral economics and advanced topics"
      ],
      questions: [
        {
          id: "economics-401-l15-q1",
          text: "Prospect theory's probability weighting function shows that people:",
          skillId: "economics-401-skill-prospect",
          options: [
            { id: "a", text: "Accurately assess all probabilities" },
            { id: "b", text: "Overweight small probabilities and underweight large ones" },
            { id: "c", text: "Ignore probabilities entirely" },
            { id: "d", text: "Only respond to certain outcomes" }
          ],
          correctOptionId: "b",
          explanation: "The probability weighting function is concave for small p (overweight — explaining lottery ticket purchases) and convex for large p (underweight — explaining insurance for near-certain events)."
        },
        {
          id: "economics-401-l15-q2",
          text: "In mechanism design, 'incentive compatibility' means:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "All participants receive equal payments" },
            { id: "b", text: "Truthful reporting is each participant's best strategy" },
            { id: "c", text: "The mechanism is free to operate" },
            { id: "d", text: "No participant can exit the mechanism" }
          ],
          correctOptionId: "b",
          explanation: "A mechanism is incentive compatible when truth-telling maximizes each player's payoff — they have no reason to lie or strategize."
        },
        {
          id: "economics-401-l15-q3",
          text: "The Deferred Acceptance algorithm is used to solve problems in:",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "Auction revenue optimization" },
            { id: "b", text: "Two-sided matching markets (e.g., medical residencies)" },
            { id: "c", text: "Stock price prediction" },
            { id: "d", text: "Central bank interest rate setting" }
          ],
          correctOptionId: "b",
          explanation: "Gale-Shapley's Deferred Acceptance algorithm produces stable matchings in two-sided markets — it's used in the National Resident Matching Program, school choice, and kidney exchange."
        },
        {
          id: "economics-401-l15-q4",
          text: "Which of the following is an example of screening?",
          skillId: "economics-401-skill-game",
          options: [
            { id: "a", text: "A company offering money-back guarantees" },
            { id: "b", text: "An insurer offering plans with different deductible levels" },
            { id: "c", text: "A government nudging citizens toward healthier eating" },
            { id: "d", text: "A firm advertising on television" }
          ],
          correctOptionId: "b",
          explanation: "Screening: the uninformed party (insurer) designs a menu of options that causes the informed party (customers) to self-select and reveal their risk type through their plan choice."
        },
        {
          id: "economics-401-l15-q5",
          text: "A 'dark nudge' is best described as:",
          skillId: "economics-401-skill-biases",
          options: [
            { id: "a", text: "A nudge applied in poorly lit environments" },
            { id: "b", text: "Choice architecture designed to exploit consumers rather than help them" },
            { id: "c", text: "A government mandate disguised as a nudge" },
            { id: "d", text: "Any nudge that fails to achieve its goal" }
          ],
          correctOptionId: "b",
          explanation: "Dark nudges use the same behavioral principles (defaults, framing, complexity) to exploit consumers — hidden fees, confusing cancellation processes, pre-checked add-on boxes."
        }
      ]
    }
  ]
};
