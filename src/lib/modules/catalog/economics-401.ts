import type { LearningModule } from "@/lib/modules/types";

export const economics_401_Module: LearningModule = {
  "id": "economics-401",
  "title": "Behavioral Economics & Advanced Topics",
  "description": "Explore the intersection of psychology and economics. Master cognitive biases, prospect theory, nudge architecture, game theory, and the frontiers of modern economic thought — from information asymmetry to mechanism design.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "economics",
    "behavioral"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "learningObjectives": [
    "Identify key cognitive biases and heuristics that violate rational choice assumptions",
    "Apply prospect theory to explain risk-seeking and loss-averse behavior",
    "Design nudges using choice architecture principles",
    "Analyze strategic interactions using game theory frameworks",
    "Evaluate problems of asymmetric information: adverse selection and moral hazard",
    "Explain mechanism design and its applications in auctions and matching markets",
    "Synthesize behavioral insights with traditional economic analysis for policy design"
  ],
  "lessons": [
    {
      "id": "economics-401-l01",
      "title": "The Behavioral Revolution",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain why standard rational-choice models are incomplete",
        "Identify the pioneers of behavioral economics (Kahneman, Tversky, Thaler)",
        "Distinguish System 1 (fast, intuitive) from System 2 (slow, deliberate) thinking"
      ],
      "chunks": [
        {
          "id": "economics-401-l01-c1",
          "title": "Limits of Homo Economicus",
          "content": "Traditional economics is built on the idea of 'homo economicus'—an ideal person who is perfectly rational, has unlimited brainpower, and is completely self-interested. But behavioral economics shows that real people are different. We don't make flawless calculations. Instead, we often use mental shortcuts, or heuristics, to make decisions quickly. These shortcuts are useful, but they can lead to predictable errors. For example, we procrastinate, get influenced by irrelevant information, and care deeply about fairness, sometimes even more than our own financial gain. Understanding these human quirks is key to seeing why people don't always act like the perfect economic models predict.",
          "visualPrompt": "An illustration comparing a perfectly rational 'robot' (Homo Economicus) with a real person making a decision, surrounded by thought bubbles of emotions, biases, and social pressures."
        },
        {
          "id": "economics-401-l01-c2",
          "title": "System 1 and System 2",
          "content": "Psychologist Daniel Kahneman introduced the dual-process theory to explain our two modes of thinking. System 1 is our fast, automatic, and intuitive mode. It's the gut feeling you get, the snap judgment you make when you see a frowning face, or your reaction when a ball is thrown at you. It operates effortlessly. System 2 is our slow, deliberate, and analytical mode. It's what you use to solve a complex math problem, compare two different mortgage options, or learn a new skill. Because System 1 is always on, it sometimes substitutes an easy question for a hard one, and our lazy System 2 doesn't always double-check the work. This interaction is a major source of cognitive biases.",
          "visualPrompt": "A split-screen animation: one side shows a brain with fast-moving gears (System 1) for an instinctual reaction, the other side shows slow, deliberate gears (System 2) for solving a math problem."
        },
        {
          "id": "economics-401-l01-c3",
          "title": "Key Pioneers",
          "content": "The field of behavioral economics was pioneered in the 1970s by psychologists Daniel Kahneman and Amos Tversky. Their research on heuristics and biases showed that people make systematic errors in judgment, laying the foundation for the entire field. For this work, Kahneman was awarded the Nobel Prize in Economics in 2002. Later, economist Richard Thaler built on their work, exploring concepts like mental accounting, where we treat money differently based on its source, and the endowment effect, where we overvalue things we own. His work showed how these psychological quirks impact consumer behavior and financial markets, earning him the Nobel Prize in 2017. Their research has had a huge real-world impact, leading governments worldwide to create 'nudge units' that use behavioral insights to design better public policy.",
          "visualPrompt": "A timeline graphic featuring portraits of Kahneman, Tversky, and Thaler, with lines connecting them to their key concepts (Heuristics, Prospect Theory, Nudging)."
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l01-f1",
          "front": "Homo economicus",
          "back": "The traditional economic model of a perfectly rational, self-interested agent with unlimited cognitive capacity."
        },
        {
          "id": "economics-401-l01-f2",
          "front": "System 1 vs. System 2",
          "back": "System 1: fast, automatic, intuitive. System 2: slow, deliberate, analytical. Biases often arise from System 1 shortcuts."
        },
        {
          "id": "economics-401-l01-f3",
          "front": "Behavioral economics",
          "back": "A field that combines psychology and economics to study how cognitive biases, heuristics, and social factors affect economic decisions."
        },
        {
          "id": "economics-401-l01-f4",
          "front": "Heuristic",
          "back": "A mental shortcut that allows for quick, efficient problem-solving and decision-making, but can sometimes lead to systematic errors."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-401-l02",
      "title": "Cognitive Biases & Heuristics",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Define anchoring, availability, representativeness, and status quo bias",
        "Recognize how biases affect economic decisions",
        "Apply debiasing strategies in business contexts"
      ],
      "chunks": [
        {
          "id": "economics-401-l02-c1",
          "title": "Anchoring and Adjustment",
          "content": "Anchoring is a cognitive bias where we rely too heavily on the first piece of information we receive—the 'anchor'—when making decisions. Even if the anchor is completely random, it can still influence our judgment. In a famous study, participants spun a wheel of fortune. They were then asked to estimate the percentage of African countries in the UN. Those who landed on a high number from the wheel gave a much higher estimate than those who landed on a low number. In business, anchoring is used everywhere. A high 'original price' on a sale item makes the discounted price seem like a bargain. In salary negotiations, the first number mentioned becomes a powerful anchor that shapes the rest of the conversation.",
          "visualPrompt": "Animation showing a boat dropping an anchor next to a price tag. The boat can't move far from the anchor, just as the final price estimate doesn't move far from the initial number."
        },
        {
          "id": "economics-401-l02-c2",
          "title": "Availability and Representativeness",
          "content": "The availability heuristic is a mental shortcut where we judge the likelihood of an event by how easily we can recall examples of it. Because plane crashes are dramatic and heavily reported, we often overestimate their probability compared to car accidents, which are far more common but less memorable. The representativeness heuristic is a shortcut where we judge something based on how well it matches a stereotype. This can lead to the conjunction fallacy, where people mistakenly believe specific conditions (e.g., 'Linda is a bank teller and a feminist') are more probable than a single general one ('Linda is a bank teller'). In investing, these biases cause people to overreact to dramatic news and chase hot trends, often leading to poor decisions.",
          "visualPrompt": "A split screen. On the left, a person thinking of a shark after hearing 'ocean danger' (Availability). On the right, a person guessing a quiet, bookish man is a librarian, not a salesman (Representativeness)."
        },
        {
          "id": "economics-401-l02-c3",
          "title": "Status Quo Bias and Endowment Effect",
          "content": "Status quo bias is our tendency to prefer that things stay the same. We often stick with the current situation, even if a change would be better. This is why default options are so powerful. Most people never change the default settings on their phone or the default investment option in their retirement plan. The endowment effect, closely related, describes how we value things more highly simply because we own them. In experiments, people who are given a coffee mug demand about twice as much money to sell it as non-owners are willing to pay for it. Both of these biases are amplified by loss aversion—the feeling that losses hurt more than equivalent gains feel good. The fear of losing what we have keeps us stuck in the status quo.",
          "visualPrompt": "An animation of a person sitting comfortably on a chair labeled 'Default Option' while ignoring a slightly better, but different, chair nearby. The person is protectively hugging an object labeled 'Mine!'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-401-l02-a1",
          "title": "Match Biases to Business Scenarios",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "cb1",
              "left": "Listing 'was $199, now $99'",
              "right": "Anchoring — the original price frames perception of the deal"
            },
            {
              "id": "cb2",
              "left": "CEO overestimates cyber risk after a publicized breach",
              "right": "Availability heuristic — recent vivid events inflate perceived probability"
            },
            {
              "id": "cb3",
              "left": "Employees never change their default retirement contribution",
              "right": "Status quo bias — the default option feels safer than actively choosing"
            },
            {
              "id": "cb4",
              "left": "Seller demands $50 for a mug they wouldn't pay $25 for",
              "right": "Endowment effect — ownership increases perceived value"
            },
            {
              "id": "cb5",
              "left": "Investor assumes a streak of gains will continue",
              "right": "Representativeness — pattern-matching overrides base rates"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l02-f1",
          "front": "Anchoring bias",
          "back": "An initial number disproportionately influences subsequent estimates, even when irrelevant to the judgment."
        },
        {
          "id": "economics-401-l02-f2",
          "front": "Availability heuristic",
          "back": "Judging probability by how easily examples come to mind — vivid events seem more likely."
        },
        {
          "id": "economics-401-l02-f3",
          "front": "Endowment effect",
          "back": "People value things more once they own them; owners demand more to sell than buyers would pay to acquire the same item."
        },
        {
          "id": "economics-401-l02-f4",
          "front": "Status quo bias",
          "back": "A preference for the current state of affairs; makes default options extremely powerful."
        },
        {
          "id": "economics-401-l02-f5",
          "front": "Overconfidence bias",
          "back": "The tendency for people to be more confident in their own abilities and judgments than is objectively warranted."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-401-l03",
      "title": "Cognitive Biases Quiz",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of key cognitive biases and heuristics"
      ],
      "questions": [
        {
          "id": "economics-401-l03-q1",
          "text": "A real estate agent shows you an overpriced house first, then a fairly priced one that looks like a bargain by comparison. This exploits:",
          "skillId": "economics-401-skill-biases",
          "options": [
            {
              "id": "a",
              "text": "Availability heuristic"
            },
            {
              "id": "b",
              "text": "Anchoring bias"
            },
            {
              "id": "c",
              "text": "Sunk cost fallacy"
            },
            {
              "id": "d",
              "text": "Representativeness heuristic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The overpriced house sets a high anchor. The 'fairly priced' house seems like a deal relative to that anchor."
        },
        {
          "id": "economics-401-l03-q2",
          "text": "In experiments, people who own a coffee mug demand about twice what non-owners would pay. This illustrates:",
          "skillId": "economics-401-skill-biases",
          "options": [
            {
              "id": "a",
              "text": "The endowment effect"
            },
            {
              "id": "b",
              "text": "Prospect theory's certainty effect"
            },
            {
              "id": "c",
              "text": "Hyperbolic discounting"
            },
            {
              "id": "d",
              "text": "The winner's curse"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The endowment effect: ownership increases perceived value, creating a gap between willingness to accept (WTA) and willingness to pay (WTP)."
        },
        {
          "id": "economics-401-l03-q3",
          "text": "After seeing news about a factory explosion, a manager doubles the safety budget despite no change in actual risk data. This reflects:",
          "skillId": "economics-401-skill-biases",
          "options": [
            {
              "id": "a",
              "text": "Status quo bias"
            },
            {
              "id": "b",
              "text": "Conjunction fallacy"
            },
            {
              "id": "c",
              "text": "Availability heuristic"
            },
            {
              "id": "d",
              "text": "Mental accounting"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The vivid, recent explosion makes the risk feel more probable (availability heuristic), even though base-rate data hasn't changed."
        },
        {
          "id": "economics-401-l03-q4",
          "text": "System 1 thinking is best described as:",
          "skillId": "economics-401-skill-biases",
          "options": [
            {
              "id": "a",
              "text": "Slow, effortful, and analytical"
            },
            {
              "id": "b",
              "text": "Fast, automatic, and intuitive"
            },
            {
              "id": "c",
              "text": "Only activated during exams"
            },
            {
              "id": "d",
              "text": "Perfectly rational but slower than System 2"
            }
          ],
          "correctOptionId": "b",
          "explanation": "System 1 operates automatically, quickly, and with little effort — it handles most daily decisions but is prone to systematic biases."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "economics-401-l04",
      "title": "Prospect Theory & Loss Aversion",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Contrast prospect theory with expected utility theory",
        "Explain the S-shaped value function and its implications",
        "Apply loss aversion and reference dependence to business decisions"
      ],
      "chunks": [
        {
          "id": "economics-401-l04-c1",
          "title": "Expected Utility vs. Prospect Theory",
          "content": "Traditional economics assumes people make choices to maximize 'expected utility,' weighing outcomes by their probabilities to get the best average result. However, Kahneman and Tversky's prospect theory provides a more realistic model of how we decide under risk. It shows three key departures from the rational model. First, we evaluate outcomes based on a reference point (like our current status), not on absolute wealth. Second, we are loss averse: the pain of a loss is felt much more intensely than the pleasure of an equivalent gain. Third, we misjudge probabilities, overweighting small chances (like winning the lottery) and underweighting large ones.",
          "visualPrompt": "A side-by-side comparison. Left side: A scale perfectly balancing potential utility (Expected Utility Theory). Right side: A tilted scale, with a small weight labeled 'Loss' pulling it down much more than a large weight labeled 'Gain' (Prospect Theory)."
        },
        {
          "id": "economics-401-l04-c2",
          "title": "The Value Function",
          "content": "The core of prospect theory is its S-shaped value function. For gains, the curve is concave, meaning we are risk-averse. We'd rather take a sure gain of $100 than a 50% chance of winning $200. The first $100 feels great, but the next $100 adds less happiness. For losses, the curve is convex, meaning we become risk-seeking. We'd rather take a 50% chance of losing $200 than accept a sure loss of $100, because we're gambling to get back to our reference point. Most importantly, the curve is much steeper for losses than for gains. This shows loss aversion: losing $100 hurts about twice as much as gaining $100 feels good. This explains why investors often hold losing stocks too long (hoping to avoid the pain of a realized loss) and sell winning stocks too soon.",
          "visualPrompt": "An animated graph of the S-shaped value function. As a dot moves into the 'gains' quadrant, a small smiley face appears. As it moves into the 'losses' quadrant, a much larger frowny face appears, emphasizing the steeper slope."
        },
        {
          "id": "economics-401-l04-c3",
          "title": "Reference Dependence in Business",
          "content": "Our decisions are heavily influenced by our reference point. A $5 discount on a $15 lunch feels like a great deal, but the same $5 discount on a $500 appliance feels insignificant. The value is the same, but the reference point is different. Businesses use this constantly. When a product is advertised as 'was $100, now $70,' the original price becomes the reference point, making the new price seem more attractive. In negotiations, the first offer sets a powerful reference point, and any concession from that point feels like a loss. In corporate settings, managers often evaluate projects against last year's performance (the reference point) instead of against the best possible outcome. Understanding reference dependence is crucial for pricing, marketing, and negotiation.",
          "visualPrompt": "An animation showing two price tags. One shows a $15 item with a large '$5 OFF!' sticker. The other shows a $500 item with a tiny '$5 OFF!' sticker. A customer smiles at the first and shrugs at the second."
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l04-f1",
          "front": "Prospect theory",
          "back": "A descriptive theory of choice under risk: people evaluate outcomes relative to a reference point, are loss-averse, and overweight small probabilities."
        },
        {
          "id": "economics-401-l04-f2",
          "front": "Loss aversion",
          "back": "Losses loom larger than gains — losing $100 feels about 2-2.5x as painful as gaining $100 feels good."
        },
        {
          "id": "economics-401-l04-f3",
          "front": "Reference dependence",
          "back": "People evaluate outcomes as gains or losses relative to a reference point, not in absolute terms."
        },
        {
          "id": "economics-401-l04-f4",
          "front": "Disposition effect",
          "back": "The tendency for investors to hold losing stocks too long and sell winners too early, driven by loss aversion and reference dependence."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-401-l05",
      "title": "Nudges & Choice Architecture",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Define nudging and distinguish it from mandates and bans",
        "Identify key principles of choice architecture",
        "Design choice architectures for health, finance, and environmental goals"
      ],
      "chunks": [
        {
          "id": "economics-401-l05-c1",
          "title": "What Is a Nudge?",
          "content": "A nudge is a small change in the way choices are presented that influences people to make better decisions, without forbidding any options or significantly changing their economic incentives. The philosophy behind it is called 'libertarian paternalism'—preserving freedom of choice (libertarian) while guiding people toward better outcomes (paternalism). For example, placing healthy food at eye level in a cafeteria is a nudge. Banning junk food is not a nudge; it's a mandate. Nudges work by using our predictable biases, like our tendency to stick with the default option (status quo bias) or our sensitivity to how choices are framed. They help us overcome our own limitations and make choices that align with our long-term goals.",
          "visualPrompt": "A simple animation showing two paths. One is straight but has a small hurdle (opting in). The other is slightly curved but clear (the default path). A character naturally follows the clear, default path."
        },
        {
          "id": "economics-401-l05-c2",
          "title": "Principles of Choice Architecture",
          "content": "Choice architecture is the environment in which we make decisions. Designing it well can dramatically improve outcomes. Key principles include: Defaults: Since people tend to stick with the pre-set option, make the best choice the default (e.g., auto-enrollment in retirement plans). Expect Error: Design systems that are forgiving. A question like 'Are you sure you want to transfer your entire savings?' can prevent costly mistakes. Give Feedback: Provide clear, immediate feedback on actions. An energy bill that compares your usage to your neighbors' can encourage conservation. Simplify Choices: When faced with too many options, people often choose poorly or not at all. Structure complex choices by using filters or breaking them down into manageable steps. Make it Salient: Draw attention to important information. Placing calorie counts on menus makes health considerations more visible at the moment of decision.",
          "visualPrompt": "An infographic with icons for each principle: a pre-checked box (Defaults), a warning sign (Expect Error), a comparison chart (Feedback), and a funnel simplifying many items into one (Simplify Choices)."
        },
        {
          "id": "economics-401-l05-c3",
          "title": "Nudges in Practice",
          "content": "Governments and businesses have successfully used nudges to achieve major goals. The UK's Behavioural Insights Team found that telling late taxpayers that 'most people in your town have already paid' significantly increased payment rates by using social norms. In the U.S., changing retirement plans from opt-in to opt-out (auto-enrollment) boosted participation rates from around 60% to over 90%. The power of defaults is also seen in organ donation. Countries with an opt-out system, where you are presumed to be a donor unless you say otherwise, have rates near 99%. Countries with an opt-in system, like Germany, have rates as low as 12%. These examples show how small changes in choice architecture can lead to massive changes in behavior, all while preserving individual freedom.",
          "visualPrompt": "A world map highlighting countries with opt-in vs. opt-out organ donation systems, showing the dramatic difference in participation rates with bar graphs."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-401-l05-a1",
          "title": "Classify Interventions: Nudge vs. Not a Nudge",
          "type": "sorting_buckets",
          "buckets": [
            "Nudge",
            "Not a Nudge (Mandate/Ban/Tax)"
          ],
          "items": [
            {
              "id": "nd1",
              "text": "Auto-enrolling employees in retirement savings",
              "bucket": "Nudge"
            },
            {
              "id": "nd2",
              "text": "Banning trans fats in restaurants",
              "bucket": "Not a Nudge (Mandate/Ban/Tax)"
            },
            {
              "id": "nd3",
              "text": "Placing healthy food at eye level in the cafeteria",
              "bucket": "Nudge"
            },
            {
              "id": "nd4",
              "text": "Taxing sugary drinks at $0.02 per ounce",
              "bucket": "Not a Nudge (Mandate/Ban/Tax)"
            },
            {
              "id": "nd5",
              "text": "Showing energy usage compared to neighbors on the bill",
              "bucket": "Nudge"
            },
            {
              "id": "nd6",
              "text": "Mandating seatbelt installation in all new cars",
              "bucket": "Not a Nudge (Mandate/Ban/Tax)"
            },
            {
              "id": "nd7",
              "text": "Using opt-out organ donation rather than opt-in",
              "bucket": "Nudge"
            },
            {
              "id": "nd8",
              "text": "Sending a text reminder before a doctor's appointment",
              "bucket": "Nudge"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l05-f1",
          "front": "Nudge",
          "back": "Any choice architecture element that predictably alters behavior without forbidding options or significantly changing incentives."
        },
        {
          "id": "economics-401-l05-f2",
          "front": "Libertarian paternalism",
          "back": "The philosophy behind nudging: guide people toward better choices while preserving their freedom to choose otherwise."
        },
        {
          "id": "economics-401-l05-f3",
          "front": "Default effect",
          "back": "Pre-selected options are chosen far more often because switching requires effort (status quo bias)."
        },
        {
          "id": "economics-401-l05-f4",
          "front": "Choice architecture",
          "back": "The design of the environment in which people make decisions — including defaults, framing, ordering, and simplification."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-401-l06",
      "title": "Prospect Theory & Nudges Quiz",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of prospect theory and choice architecture"
      ],
      "questions": [
        {
          "id": "economics-401-l06-q1",
          "text": "According to prospect theory, a person is most likely to be risk-seeking when:",
          "skillId": "economics-401-skill-prospect",
          "options": [
            {
              "id": "a",
              "text": "Choosing between certain gains"
            },
            {
              "id": "b",
              "text": "Evaluating small probabilities of gains"
            },
            {
              "id": "c",
              "text": "Facing a choice between certain losses"
            },
            {
              "id": "d",
              "text": "Making decisions with complete information"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The value function is convex in the loss domain — people become risk-seeking to avoid a certain loss, preferring a gamble with a chance of avoiding any loss."
        },
        {
          "id": "economics-401-l06-q2",
          "text": "Auto-enrollment in 401(k) plans dramatically increases participation because of:",
          "skillId": "economics-401-skill-prospect",
          "options": [
            {
              "id": "a",
              "text": "Anchoring bias"
            },
            {
              "id": "b",
              "text": "The availability heuristic"
            },
            {
              "id": "c",
              "text": "Status quo bias / default effect"
            },
            {
              "id": "d",
              "text": "The conjunction fallacy"
            }
          ],
          "correctOptionId": "c",
          "explanation": "People tend to stick with the default option (status quo bias). When the default is enrollment rather than non-enrollment, participation jumps from ~60% to ~90%."
        },
        {
          "id": "economics-401-l06-q3",
          "text": "Loss aversion predicts that investors will tend to:",
          "skillId": "economics-401-skill-prospect",
          "options": [
            {
              "id": "a",
              "text": "Sell losing stocks quickly to limit losses"
            },
            {
              "id": "b",
              "text": "Hold losing stocks too long and sell winners too early"
            },
            {
              "id": "c",
              "text": "Invest only in risk-free bonds"
            },
            {
              "id": "d",
              "text": "Diversify perfectly across all asset classes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is the disposition effect: investors hold losers (hoping to avoid realizing a loss) and sell winners early (locking in a sure gain), a behavior driven by loss aversion."
        },
        {
          "id": "economics-401-l06-q4",
          "text": "Which of the following is NOT a nudge?",
          "skillId": "economics-401-skill-prospect",
          "options": [
            {
              "id": "a",
              "text": "Placing fruit at eye level in a cafeteria"
            },
            {
              "id": "b",
              "text": "Taxing sugary drinks at $0.02 per ounce"
            },
            {
              "id": "c",
              "text": "Auto-enrolling employees in a pension plan"
            },
            {
              "id": "d",
              "text": "Showing neighbors' energy usage on a utility bill"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tax significantly changes economic incentives — it's a traditional policy tool, not a nudge. Nudges alter choice architecture without changing prices or banning options."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "economics-401-l07",
      "title": "Game Theory for Business",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Model strategic interactions using payoff matrices",
        "Identify Nash equilibrium and dominant strategies",
        "Apply prisoner's dilemma, coordination games, and signaling to business"
      ],
      "chunks": [
        {
          "id": "economics-401-l07-c1",
          "title": "The Prisoner's Dilemma",
          "content": "Imagine two partners in crime are arrested and questioned in separate rooms. Each can either confess or stay silent. If both stay silent, they each get one year in prison. If one confesses and the other stays silent, the confessor goes free while the silent one gets ten years. If both confess, they each get five years. What should they do? From each individual's perspective, confessing is the best strategy, no matter what the other does. This leads to a situation where both confess and get five years, even though they would have been better off if they had both stayed silent. This is the prisoner's dilemma. The outcome where both confess is a 'Nash equilibrium.' This model applies to business situations like price wars, advertising battles, and overuse of shared resources.",
          "visualPrompt": "A classic 2x2 payoff matrix for the Prisoner's Dilemma, with icons of prisoners and years of sentence in each quadrant. An animation highlights the Nash Equilibrium quadrant."
        },
        {
          "id": "economics-401-l07-c2",
          "title": "Nash Equilibrium and Dominant Strategies",
          "content": "A Nash equilibrium is a stable outcome in a game where no player can do better by unilaterally changing their strategy, assuming all other players keep their strategies the same. It's a point of mutual best response. A dominant strategy is a strategy that is best for a player regardless of what the other players do. In the prisoner's dilemma, confessing is a dominant strategy for both players. Not all games have a dominant strategy, but every finite game has at least one Nash equilibrium. In business, this helps us understand market outcomes. For example, in a market with two competing firms, the Nash equilibrium might be a price and quantity level where neither firm wants to change its output, leading to prices higher than perfect competition but lower than a monopoly.",
          "visualPrompt": "An animation of two chess players. One player considers a move, and the opponent's possible counter-moves light up. The player chooses the move that is best given those counters. Then the board flips, showing the other player doing the same. When neither can improve their position, the board glows, labeled 'Nash Equilibrium'."
        },
        {
          "id": "economics-401-l07-c3",
          "title": "Signaling and Credible Commitment",
          "content": "In many situations, one party has more information than another. Game theory shows how the informed party can 'signal' their private information. For a signal to be credible, it must be costly—so costly that a lower-quality type wouldn't want to fake it. Michael Spence's Nobel-winning theory of job market signaling argues that a college degree signals high ability because it's harder and more costly for a low-ability person to obtain. In business, a money-back guarantee is a credible signal of product quality, because a company with a bad product couldn't afford to offer it. Credible commitments can also change a game's outcome. When Cortés burned his ships upon arriving in the Americas, he credibly committed his army to fighting, removing the option of retreat and changing the strategic calculus for both sides.",
          "visualPrompt": "A simple animation showing two job candidates. One holds an expensive, hard-to-get diploma (the signal), and an employer points to them. The other candidate looks on, unable to afford the 'cost' of the signal."
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l07-f1",
          "front": "Nash equilibrium",
          "back": "A strategy profile where no player can improve their payoff by unilaterally changing their strategy."
        },
        {
          "id": "economics-401-l07-f2",
          "front": "Prisoner's dilemma",
          "back": "A game where individual incentives to defect lead both players to a worse outcome than if both cooperated."
        },
        {
          "id": "economics-401-l07-f3",
          "front": "Dominant strategy",
          "back": "A strategy that is optimal for a player regardless of what the other players choose."
        },
        {
          "id": "economics-401-l07-f4",
          "front": "Signaling",
          "back": "A costly action taken by an informed party to credibly convey private information to an uninformed party."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l07-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-401-l08",
      "title": "Information Asymmetry",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Distinguish adverse selection (pre-contract) from moral hazard (post-contract)",
        "Apply Akerlof's 'market for lemons' to real markets",
        "Design contracts that mitigate information asymmetry"
      ],
      "chunks": [
        {
          "id": "economics-401-l08-c1",
          "title": "Adverse Selection — The Market for Lemons",
          "content": "Adverse selection is a problem of hidden information that occurs before a transaction. The classic example is George Akerlof's 'market for lemons.' In the used car market, sellers know the quality of their car, but buyers don't. Buyers, fearing they'll get a low-quality car (a 'lemon'), are only willing to pay a price for average quality. But owners of high-quality cars won't sell at an average price, so they leave the market. This lowers the average quality of cars for sale, which lowers the price buyers are willing to pay, and so on. In the extreme, only lemons remain, and the market collapses. This problem also affects insurance markets, where the sickest people are the most likely to buy insurance, driving up premiums for everyone.",
          "visualPrompt": "An animation of a marketplace where shiny, high-quality cars drive away, leaving only sputtering, smoking 'lemon' cars behind. A frustrated buyer looks on."
        },
        {
          "id": "economics-401-l08-c2",
          "title": "Moral Hazard",
          "content": "Moral hazard is a problem of hidden action that occurs after a transaction. It happens when one party takes on more risk because they know someone else will bear the cost. If you have full car insurance, you might drive a little less carefully because the insurance company will cover the damages. This is moral hazard. It's also known as the principal-agent problem: a principal (e.g., an employer) cannot fully monitor the actions of an agent (e.g., an employee), so the agent may shirk their duties. Solutions to moral hazard include monitoring, performance-based pay, and requiring the agent to have some 'skin in the game,' like insurance deductibles and co-pays, which make the insured person bear some of the cost of their risky behavior.",
          "visualPrompt": "A split screen. On the left, a person without insurance drives very carefully. On the right, the same person, now holding an insurance policy, drives recklessly while a thought bubble shows an insurance company paying for damages."
        },
        {
          "id": "economics-401-l08-c3",
          "title": "Market Solutions to Asymmetry",
          "content": "Markets have developed ways to solve information problems. To fight adverse selection, sellers use signaling (like warranties and brand reputation) to convey quality. Buyers use screening, where the uninformed party designs choices that cause the informed party to reveal their type. For example, an insurance company might offer a cheap, high-deductible plan and an expensive, low-deductible plan. Low-risk people will choose the cheap plan, and high-risk people will choose the expensive one, effectively sorting themselves. To fight moral hazard, contracts are designed to align incentives. Performance bonuses, stock options for CEOs, and deductibles are all tools to make sure the agent's interests are closer to the principal's.",
          "visualPrompt": "A toolbox graphic with tools labeled 'Warranties,' 'Deductibles,' 'Brand Reputation,' and 'Performance Bonuses.' Each tool is shown fixing a crack in a market stall."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-401-l08-a1",
          "title": "Classify Information Problems",
          "type": "sorting_buckets",
          "buckets": [
            "Adverse Selection",
            "Moral Hazard"
          ],
          "items": [
            {
              "id": "ia1",
              "text": "High-risk individuals disproportionately buying health insurance",
              "bucket": "Adverse Selection"
            },
            {
              "id": "ia2",
              "text": "Insured homeowner not installing a security system",
              "bucket": "Moral Hazard"
            },
            {
              "id": "ia3",
              "text": "Used car buyer unable to distinguish good cars from lemons",
              "bucket": "Adverse Selection"
            },
            {
              "id": "ia4",
              "text": "Employee shirking because supervisor can't monitor effort",
              "bucket": "Moral Hazard"
            },
            {
              "id": "ia5",
              "text": "Bank taking excessive risk knowing government will bail it out",
              "bucket": "Moral Hazard"
            },
            {
              "id": "ia6",
              "text": "Only the sickest patients choosing the most comprehensive plan",
              "bucket": "Adverse Selection"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l08-f1",
          "front": "Adverse selection",
          "back": "Pre-contract problem: the uninformed party attracts an unfavorable mix of the informed party (lemons, high-risk buyers)."
        },
        {
          "id": "economics-401-l08-f2",
          "front": "Moral hazard",
          "back": "Post-contract problem: one party takes more risk or less care because the other party bears the cost."
        },
        {
          "id": "economics-401-l08-f3",
          "front": "Market for lemons (Akerlof)",
          "back": "A model showing how information asymmetry can cause market failure: good products exit, only lemons remain."
        },
        {
          "id": "economics-401-l08-f4",
          "front": "Screening",
          "back": "When the uninformed party designs a menu of contracts that induces the informed party to self-select and reveal their type."
        }
      ],
      "learningAids": [
        {
          "id": "economics-401-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-401-l09",
      "title": "Game Theory & Information Asymmetry Quiz",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of game theory and information economics"
      ],
      "questions": [
        {
          "id": "economics-401-l09-q1",
          "text": "In the prisoner's dilemma, the Nash equilibrium is:",
          "skillId": "economics-401-skill-game",
          "options": [
            {
              "id": "a",
              "text": "Both cooperate"
            },
            {
              "id": "b",
              "text": "Both defect"
            },
            {
              "id": "c",
              "text": "One cooperates, one defects"
            },
            {
              "id": "d",
              "text": "There is no equilibrium"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Each player's best response to the other's strategy is to defect, so (Defect, Defect) is the unique Nash equilibrium — even though mutual cooperation would be better for both."
        },
        {
          "id": "economics-401-l09-q2",
          "text": "Akerlof's 'market for lemons' demonstrates which problem?",
          "skillId": "economics-401-skill-game",
          "options": [
            {
              "id": "a",
              "text": "Moral hazard"
            },
            {
              "id": "b",
              "text": "Adverse selection"
            },
            {
              "id": "c",
              "text": "Free riding"
            },
            {
              "id": "d",
              "text": "Monopoly pricing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The lemons problem is the canonical example of adverse selection — asymmetric information causes good sellers to exit, leaving only low-quality products (lemons)."
        },
        {
          "id": "economics-401-l09-q3",
          "text": "A bank takes excessive risk because it expects a government bailout. This is an example of:",
          "skillId": "economics-401-skill-game",
          "options": [
            {
              "id": "a",
              "text": "Adverse selection"
            },
            {
              "id": "b",
              "text": "The endowment effect"
            },
            {
              "id": "c",
              "text": "Moral hazard"
            },
            {
              "id": "d",
              "text": "Anchoring bias"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The bank changes its behavior after the implicit insurance contract (bailout expectation), taking more risk because it doesn't bear the full downside — classic moral hazard."
        },
        {
          "id": "economics-401-l09-q4",
          "text": "In Spence's signaling model, a college degree works as a signal because:",
          "skillId": "economics-401-skill-game",
          "options": [
            {
              "id": "a",
              "text": "College directly increases productivity"
            },
            {
              "id": "b",
              "text": "It is costlier for low-ability individuals to obtain"
            },
            {
              "id": "c",
              "text": "All employers require degrees"
            },
            {
              "id": "d",
              "text": "The government mandates degree requirements"
            }
          ],
          "correctOptionId": "b",
          "explanation": "For a signal to create a separating equilibrium, it must be differentially costly — low-ability types find it too expensive to mimic, so the degree credibly reveals type."
        }
      ]
    },
    {
      "id": "economics-401-l10",
      "title": "Applied Challenge: Mechanism Design & Auctions",
      "type": "interactive",
      "duration": 18,
      "objectives": [
        "Explain mechanism design as 'reverse game theory'",
        "Compare auction formats and their strategic properties",
        "Apply matching market design to real-world problems"
      ],
      "chunks": [
        {
          "id": "economics-401-l10-c1",
          "title": "Mechanism Design: Reverse Game Theory",
          "content": "While game theory analyzes the outcomes of games with pre-set rules, mechanism design works backwards. It starts with a desired outcome (like efficiency or fairness) and asks: what rules can we design to guarantee that outcome? It's sometimes called 'reverse game theory.' The field's pioneers won the Nobel Prize in 2007. A well-designed mechanism should be incentive compatible, meaning it's in every participant's best interest to be truthful. It should also be individually rational, meaning no one is forced to participate against their will. Mechanism design is used to create auctions, allocate public goods, and design matching markets.",
          "visualPrompt": "An animation of a blueprint with the title 'Desired Outcome.' A hand draws rules and structures around it, building the 'game' or 'mechanism' that leads to the outcome in the center."
        },
        {
          "id": "economics-401-l10-c2",
          "title": "Auction Formats",
          "content": "Different auction rules lead to different bidding strategies. In an English (ascending) auction, the price goes up until one bidder is left. In a Dutch (descending) auction, the price starts high and drops until someone accepts. In a first-price sealed-bid auction, the highest bidder wins and pays their bid, which encourages bidders to 'shade' their bid below their true value. But in a second-price sealed-bid (or Vickrey) auction, the highest bidder wins but pays the second-highest bid. This clever design makes it a dominant strategy for everyone to bid their true value. The Revenue Equivalence Theorem states that, under ideal conditions, all four of these auction types are expected to generate the same revenue for the seller.",
          "visualPrompt": "Four animated panels, each showing a different auction type. The Vickrey auction panel has a thought bubble above the winner showing 'I bid $100!' but the price tag shows '$90' (the second-highest bid)."
        },
        {
          "id": "economics-401-l10-c3",
          "title": "Matching Markets",
          "content": "In some markets, prices can't be used to allocate resources. Think of assigning students to schools, or medical residents to hospitals. These are matching markets. Nobel laureates Alvin Roth and Lloyd Shapley developed algorithms to create stable and efficient matches. The famous Gale-Shapley 'Deferred Acceptance' algorithm works by having one side of the market (e.g., residents) propose to the other (hospitals). Hospitals tentatively accept their best offers and reject the rest. The rejected residents then propose to their next choice. This continues until no resident is rejected or all their choices are exhausted. The result is a stable matching, meaning there is no pair of a resident and a hospital who would both prefer to be matched with each other over their current assignments.",
          "visualPrompt": "An animation showing two groups of icons (students and schools). Lines are drawn from students to their top-choice schools. Some lines are erased and redrawn to their next choice until a final, stable set of connections is formed."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-401-l10-a1",
          "title": "Match Auction Types to Properties",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "au1",
              "left": "English auction",
              "right": "Ascending bids; winner pays slightly above second-highest valuation"
            },
            {
              "id": "au2",
              "left": "Dutch auction",
              "right": "Descending price; first bidder to accept wins at that price"
            },
            {
              "id": "au3",
              "left": "First-price sealed-bid",
              "right": "Highest bid wins; strategic bid shading is optimal"
            },
            {
              "id": "au4",
              "left": "Vickrey (second-price sealed-bid)",
              "right": "Highest bid wins but pays second-highest bid; truthful bidding is dominant"
            },
            {
              "id": "au5",
              "left": "Deferred Acceptance algorithm",
              "right": "Produces stable matchings in two-sided markets like residency placement"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l10-f1",
          "front": "Mechanism design",
          "back": "Designing rules or institutions to achieve desired outcomes — 'reverse game theory'."
        },
        {
          "id": "economics-401-l10-f2",
          "front": "Vickrey auction",
          "back": "A second-price sealed-bid auction where the winner pays the second-highest bid; truthful bidding is the dominant strategy."
        },
        {
          "id": "economics-401-l10-f3",
          "front": "Stable matching",
          "back": "An assignment where no two participants would prefer to be matched with each other over their current partners."
        },
        {
          "id": "economics-401-l10-f4",
          "front": "Incentive compatibility",
          "back": "A mechanism is incentive compatible when truthful reporting is each player's best strategy."
        }
      ]
    },
    {
      "id": "economics-401-l11",
      "title": "Real-World Applications & Ethics",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Analyze real-world applications of behavioral economics in policy and business",
        "Evaluate the effectiveness and ethics of nudging"
      ],
      "chunks": [
        {
          "id": "economics-401-l11-c1",
          "title": "Nudge Units Around the World",
          "content": "In 2010, the UK launched the Behavioural Insights Team (BIT), the world's first government 'nudge unit.' Its mission was to apply behavioral science to public policy. Early successes included increasing tax compliance by adding a simple sentence to letters stating that most people in the recipient's area had already paid. They also boosted organ donation rates by redesigning the registration process and promoted employment by having job seekers make specific plans for their job search. The success of the BIT has been replicated globally, with over 200 similar units now operating in governments and organizations like the World Bank, using behavioral insights to improve health, wealth, and happiness.",
          "visualPrompt": "A spinning globe with pins dropping on various countries (UK, USA, Singapore, Australia), each pin expanding to show a logo of a 'Nudge Unit' and a successful policy icon (tax, health, etc.)."
        },
        {
          "id": "economics-401-l11-c2",
          "title": "Behavioral Finance",
          "content": "Behavioral finance applies psychological insights to financial decision-making, explaining market anomalies that traditional finance can't. For example, overconfidence leads many investors to trade too frequently, which is proven to hurt returns. Herding behavior, where investors follow the crowd, can inflate market bubbles and deepen crashes. Myopic loss aversion describes how investors who check their portfolios too often overreact to short-term losses and invest too conservatively. To combat these biases, financial products like target-date funds and robo-advisors have been designed to automate good investment practices, like diversification and long-term planning, taking emotional decision-making out of the equation.",
          "visualPrompt": "An animation of a roller coaster representing the stock market. One investor is frantically buying and selling at every peak and valley, losing money. Another investor sits calmly with eyes closed, ending up higher at the finish line."
        },
        {
          "id": "economics-401-l11-c3",
          "title": "The Ethics of Nudging",
          "content": "While nudges can do good, they also raise ethical questions. Critics worry that nudging can be manipulative, and they ask: who decides what's 'better' for people? This concern is especially valid when companies use 'dark patterns' or 'dark nudges' to trick consumers, such as hiding fees, designing confusing cancellation processes, or using pre-checked boxes for unwanted add-ons. Proponents argue that choice architecture is unavoidable—there is no neutral design—so we have a responsibility to design it to help people. To be ethical, a nudge should be transparent, easy to opt out of, and designed with the best interests of the person being nudged in mind. The goal should be to empower, not to exploit.",
          "visualPrompt": "A visual of a fork in the road. One signpost, brightly lit and labeled 'Helpful Nudge,' points to a clear, easy path. The other signpost, in shadows and labeled 'Dark Nudge,' points to a confusing, tangled path with hidden traps."
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l11-f1",
          "front": "Behavioural Insights Team (BIT)",
          "back": "The UK's 'Nudge Unit' — the first government team to apply behavioral science to policy, now a global model."
        },
        {
          "id": "economics-401-l11-f2",
          "front": "Dark nudge / Dark pattern",
          "back": "Manipulative use of choice architecture to exploit rather than help, such as hidden fees or confusing unsubscribe processes."
        },
        {
          "id": "economics-401-l11-f3",
          "front": "Myopic loss aversion",
          "back": "The tendency for investors who check their portfolios frequently to over-react to short-term losses and invest too conservatively."
        }
      ]
    },
    {
      "id": "economics-401-l12",
      "title": "Common Mistakes & Review",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify and correct common mistakes in applying behavioral economics"
      ],
      "chunks": [
        {
          "id": "economics-401-l12-c1",
          "title": "Misconceptions and Pitfalls",
          "content": "When applying behavioral economics, it's easy to fall into common traps. First, don't assume behavioral economics replaces traditional economics; it complements it. Incentives and market forces are still fundamental. Second, avoid attributing every behavior to a single bias. Human action is complex and often driven by multiple factors. Third, remember that context is king. A nudge that works in one culture or situation may fail or even backfire in another. Always test interventions before scaling them up. Finally, don't assume that biases are always bad. Heuristics are mental shortcuts that work well most of the time; they are what allow us to function without being paralyzed by analysis. The key is to understand when they lead us astray.",
          "visualPrompt": "A series of 'myth vs. fact' slides. Myth: 'Nudges are magic bullets.' Fact: 'Effectiveness is context-dependent. Test everything!'"
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-401-l12-a1",
          "title": "Match Mistakes to Corrections",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "bm1",
              "left": "Behavioral economics proves people are irrational.",
              "right": "People are predictably biased but often reasonably adaptive; heuristics work well in many contexts."
            },
            {
              "id": "bm2",
              "left": "Nudges always work the same way.",
              "right": "Nudge effectiveness is highly context-dependent; always test before scaling."
            },
            {
              "id": "bm3",
              "left": "Loss aversion means people never take risks.",
              "right": "People are risk-seeking in the loss domain; loss aversion is about asymmetric weighting, not total risk avoidance."
            },
            {
              "id": "bm4",
              "left": "Nash equilibrium is the best possible outcome.",
              "right": "Nash equilibrium is stable, not necessarily optimal. The prisoner's dilemma outcome is worse for both than cooperation."
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-401-l12-f1",
          "front": "Why doesn't behavioral economics replace traditional economics?",
          "back": "It supplements traditional models. Incentives, supply/demand, and equilibrium still drive markets; behavioral insights explain predictable deviations."
        },
        {
          "id": "economics-401-l12-f2",
          "front": "Why must nudges be tested?",
          "back": "Because of context dependence: what works in one population or setting may backfire in another. Always run controlled experiments before scaling."
        }
      ]
    },
    {
      "id": "economics-401-l13",
      "title": "Final Mastery Quiz",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Synthesize knowledge across behavioral economics and advanced topics"
      ],
      "questions": [
        {
          "id": "economics-401-l13-q1",
          "text": "Loss aversion means that:",
          "skillId": "economics-401-skill-prospect",
          "options": [
            {
              "id": "a",
              "text": "People prefer avoiding risk in all situations"
            },
            {
              "id": "b",
              "text": "Losses feel roughly twice as painful as equivalent gains feel good"
            },
            {
              "id": "c",
              "text": "People always choose the safe option"
            },
            {
              "id": "d",
              "text": "People are unable to evaluate probability"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Kahneman and Tversky estimated loss aversion at about 2-2.5x — losing $100 hurts about twice as much as gaining $100 feels good."
        },
        {
          "id": "economics-401-l13-q2",
          "text": "Which bias is most directly exploited by 'opt-out' organ donation systems?",
          "skillId": "economics-401-skill-biases",
          "options": [
            {
              "id": "a",
              "text": "Anchoring"
            },
            {
              "id": "b",
              "text": "Representativeness"
            },
            {
              "id": "c",
              "text": "Status quo bias"
            },
            {
              "id": "d",
              "text": "Overconfidence"
            }
          ],
          "correctOptionId": "c",
          "explanation": "People tend to stick with the default option (status quo bias). When the default is 'donor' (opt-out), participation rates are dramatically higher than in opt-in systems."
        },
        {
          "id": "economics-401-l13-q3",
          "text": "The principal-agent problem, where an employer cannot fully monitor an employee's effort, is a form of:",
          "skillId": "economics-401-skill-game",
          "options": [
            {
              "id": "a",
              "text": "Adverse selection"
            },
            {
              "id": "b",
              "text": "Moral hazard"
            },
            {
              "id": "c",
              "text": "Anchoring bias"
            },
            {
              "id": "d",
              "text": "Loss aversion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The principal can't perfectly observe the agent's effort after contracting — the agent may shirk. This hidden action is a classic example of moral hazard."
        },
        {
          "id": "economics-401-l13-q4",
          "text": "In a Vickrey (second-price sealed-bid) auction, the dominant strategy is to:",
          "skillId": "economics-401-skill-game",
          "options": [
            {
              "id": "a",
              "text": "Bid below your true valuation"
            },
            {
              "id": "b",
              "text": "Bid above your true valuation"
            },
            {
              "id": "c",
              "text": "Bid exactly your true valuation"
            },
            {
              "id": "d",
              "text": "Wait until the last moment to bid"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In a second-price auction, you pay the second-highest bid. Bidding your true value ensures you win whenever it's profitable and never overpay, making it the optimal strategy."
        },
        {
          "id": "economics-401-l13-q5",
          "text": "Richard Thaler's concept of mental accounting describes:",
          "skillId": "economics-401-skill-biases",
          "options": [
            {
              "id": "a",
              "text": "Keeping detailed financial spreadsheets"
            },
            {
              "id": "b",
              "text": "Treating money differently depending on its source or intended use"
            },
            {
              "id": "c",
              "text": "Inflation-adjusted accounting methods"
            },
            {
              "id": "d",
              "text": "Government budget accounting standards"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mental accounting is the tendency to put money into different mental categories (e.g., 'vacation fund,' 'windfall money') and treat them as non-interchangeable."
        },
        {
          "id": "economics-401-l13-q6",
          "text": "A 'dark nudge' is best described as:",
          "skillId": "economics-401-skill-biases",
          "options": [
            {
              "id": "a",
              "text": "A nudge applied in poorly lit environments"
            },
            {
              "id": "b",
              "text": "Choice architecture designed to exploit consumers rather than help them"
            },
            {
              "id": "c",
              "text": "A government mandate disguised as a nudge"
            },
            {
              "id": "d",
              "text": "Any nudge that fails to achieve its goal"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Dark nudges use behavioral principles (defaults, framing, complexity) to trick consumers into actions they wouldn't otherwise take, like signing up for hidden fees or making cancellation difficult."
        }
      ]
    }
  ]
};
