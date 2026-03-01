import type { LearningModule } from "@/lib/modules/types";

export const Economics101Module: LearningModule = {
  "id": "economics-101",
  "title": "Microeconomics Foundations",
  "description": "Understand how individuals and firms make decisions about scarce resources. Master supply and demand, market structures, pricing, and the invisible hand that shapes economies.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "economics",
    "enriched-from-epub"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "learningObjectives": [
    "Define economics and the fundamental problem of scarcity",
    "Analyze supply and demand curves and predict market equilibrium shifts",
    "Calculate and interpret price elasticity of demand and supply",
    "Compare perfect competition, monopoly, oligopoly, and monopolistic competition",
    "Explain how firms maximize profit using marginal analysis",
    "Identify market failures and the role of government intervention",
    "Apply opportunity cost and comparative advantage to decision-making"
  ],
  "lessons": [
    {
      "id": "economics-101-l01",
      "title": "Scarcity, Choice, and Opportunity Cost",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define scarcity as the central problem in economics",
        "Explain opportunity cost as the value of the next best alternative forgone",
        "Interpret a production possibilities frontier (PPF)"
      ],
      "chunks": [
        {
          "id": "economics-101-l01-c1",
          "title": "The Economic Problem",
          "content": "Economics is the study of how societies allocate scarce resources among competing wants. Scarcity means that our wants are unlimited but our resources — land, labor, capital, and entrepreneurship — are finite. Every choice has a cost: choosing one thing means giving up something else. This trade-off is the heartbeat of economics."
        },
        {
          "id": "economics-101-l01-c2",
          "title": "Opportunity Cost",
          "content": "Opportunity cost is the value of the next best alternative you give up when making a decision. If you spend an hour studying economics, the opportunity cost is whatever else you would have done with that hour (working, sleeping, playing). Opportunity cost isn't just money — it includes time, enjoyment, and any other benefit. Rational decision-makers compare opportunity costs before choosing."
        },
        {
          "id": "economics-101-l01-c3",
          "title": "The Production Possibilities Frontier",
          "content": "The PPF is a graph showing all combinations of two goods a society can produce with its available resources. Points on the curve are efficient (all resources used). Points inside are inefficient (wasted resources). Points outside are unattainable (not enough resources). The PPF is bowed outward because of increasing opportunity costs — as you produce more of one good, you sacrifice increasingly more of the other."
        },
        {
          "id": "economics-101-l01-c4",
          "title": "The Economics of Incentives",
          "content": "Freakonomics reveals that economics is, at root, the study of incentives: how people get what they want or need, especially when others want the same thing. Incentives come in three flavors — economic (financial rewards and penalties), social (reputation and peer pressure), and moral (sense of right and wrong). The most powerful real-world situations involve all three types simultaneously. A key insight: poorly designed incentives can backfire dramatically. When an Israeli day-care center introduced fines for parents who picked up their children late, tardiness actually increased — the fine converted a moral obligation ('I shouldn't make the teacher wait') into a market transaction ('I'm paying for extra time'), removing the guilt that had previously kept most parents punctual."
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l01-f1",
          "front": "Scarcity",
          "back": "The fundamental economic problem: unlimited wants but limited resources to satisfy them"
        },
        {
          "id": "economics-101-l01-f2",
          "front": "Opportunity cost",
          "back": "The value of the next best alternative forgone when making a choice"
        },
        {
          "id": "economics-101-l01-f3",
          "front": "Production Possibilities Frontier (PPF)",
          "back": "A curve showing all efficient combinations of two goods an economy can produce with available resources"
        },
        {
          "id": "economics-101-l01-f4",
          "front": "Four factors of production",
          "back": "Land, labor, capital, and entrepreneurship — the resources used to produce goods and services"
        },
        {
          "id": "economics-101-l01-f5",
          "front": "Three types of incentives (Freakonomics)",
          "back": "Economic (financial rewards/penalties), social (reputation, peer pressure), and moral (sense of right and wrong). Real-world decisions reflect all three — and poorly designed incentives can backfire dramatically."
        },
        {
          "id": "economics-101-l01-f6",
          "front": "GDP per capita",
          "back": "Total economic output divided by population — the single best measure of material living standards because it accounts for both output and population size (The Little Book of Economics)."
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-101-l02",
      "title": "Supply and Demand",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Draw and interpret supply and demand curves",
        "Identify factors that shift supply and demand",
        "Determine equilibrium price and quantity"
      ],
      "chunks": [
        {
          "id": "economics-101-l02-c1",
          "title": "The Demand Curve",
          "content": "The demand curve shows the relationship between a good's price and the quantity consumers want to buy (holding all else constant). It slopes downward: as price rises, quantity demanded falls (law of demand). Factors that shift the entire demand curve include income changes, consumer preferences, prices of related goods (substitutes and complements), expectations, and population size."
        },
        {
          "id": "economics-101-l02-c2",
          "title": "The Supply Curve",
          "content": "The supply curve shows the relationship between a good's price and the quantity producers are willing to sell. It slopes upward: as price rises, quantity supplied increases (law of supply). Factors that shift supply include input costs, technology changes, number of sellers, government regulations, and expectations about future prices."
        },
        {
          "id": "economics-101-l02-c3",
          "title": "Market Equilibrium",
          "content": "Equilibrium occurs where supply meets demand — the price at which quantity supplied equals quantity demanded. At prices above equilibrium, there's a surplus (excess supply) that pushes prices down. At prices below equilibrium, there's a shortage (excess demand) that pushes prices up. Markets naturally gravitate toward equilibrium through the price mechanism — Adam Smith's 'invisible hand.'"
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-101-l02-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Shifts Demand Right",
            "Shifts Demand Left",
            "Shifts Supply Right",
            "Shifts Supply Left"
          ],
          "items": [
            {
              "text": "Consumer income increases (normal good)",
              "bucket": "Shifts Demand Right"
            },
            {
              "text": "Price of a complement rises",
              "bucket": "Shifts Demand Left"
            },
            {
              "text": "New technology reduces production costs",
              "bucket": "Shifts Supply Right"
            },
            {
              "text": "Government imposes a new tax on producers",
              "bucket": "Shifts Supply Left"
            },
            {
              "text": "Consumer preferences shift toward the good",
              "bucket": "Shifts Demand Right"
            },
            {
              "text": "Input costs (wages, materials) increase",
              "bucket": "Shifts Supply Left"
            },
            {
              "text": "Price of a substitute falls",
              "bucket": "Shifts Demand Left"
            },
            {
              "text": "New firms enter the market",
              "bucket": "Shifts Supply Right"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l02-f1",
          "front": "Law of demand",
          "back": "As price increases, quantity demanded decreases (all else equal) — demand curves slope downward"
        },
        {
          "id": "economics-101-l02-f2",
          "front": "Law of supply",
          "back": "As price increases, quantity supplied increases (all else equal) — supply curves slope upward"
        },
        {
          "id": "economics-101-l02-f3",
          "front": "Market equilibrium",
          "back": "The price and quantity where supply equals demand — no tendency for change"
        },
        {
          "id": "economics-101-l02-f4",
          "front": "Surplus vs. shortage",
          "back": "Surplus: Qs > Qd (price too high). Shortage: Qd > Qs (price too low)"
        },
        {
          "id": "economics-101-l02-f5",
          "front": "Information asymmetry (Freakonomics)",
          "back": "When one party in a transaction has more or better information than the other — creates market power and distorts outcomes. Freakonomics shows how real-estate agents exploit information gaps to serve their own interests over clients'."
        },
        {
          "id": "economics-101-l02-f6",
          "front": "Three drivers of economic growth",
          "back": "People (labor), capital (tools/machines/infrastructure), and ideas (technology/innovation). These combine through a production function to generate output (The Little Book of Economics)."
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-101-l03",
      "title": "Foundations Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of scarcity, opportunity cost, supply, and demand"
      ],
      "questions": [
        {
          "id": "economics-101-l03-q1",
          "text": "What does the production possibilities frontier illustrate?",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The maximum profit a firm can earn"
            },
            {
              "id": "b",
              "text": "All efficient combinations of two goods an economy can produce"
            },
            {
              "id": "c",
              "text": "The relationship between price and quantity demanded"
            },
            {
              "id": "d",
              "text": "How interest rates affect investment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The PPF shows the trade-offs between producing two goods with limited resources."
        },
        {
          "id": "economics-101-l03-q2",
          "text": "If the price of coffee rises and tea is a substitute, what happens to demand for tea?",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Demand for tea decreases"
            },
            {
              "id": "b",
              "text": "Supply of tea decreases"
            },
            {
              "id": "c",
              "text": "Demand for tea increases"
            },
            {
              "id": "d",
              "text": "No change — they are unrelated"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When the price of a substitute rises, consumers switch to the other good, increasing its demand."
        },
        {
          "id": "economics-101-l03-q3",
          "text": "A surplus in a market occurs when:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Quantity demanded exceeds quantity supplied"
            },
            {
              "id": "b",
              "text": "The market is at equilibrium"
            },
            {
              "id": "c",
              "text": "Quantity supplied exceeds quantity demanded"
            },
            {
              "id": "d",
              "text": "Both supply and demand shift right"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A surplus means producers are supplying more than consumers want at the current price."
        },
        {
          "id": "economics-101-l03-q4",
          "text": "Opportunity cost is best defined as:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The total cost of producing a good"
            },
            {
              "id": "b",
              "text": "The monetary price of a good"
            },
            {
              "id": "c",
              "text": "The value of the next best alternative forgone"
            },
            {
              "id": "d",
              "text": "The cost of raw materials"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Opportunity cost measures what you give up — not just in money, but in value — when choosing one option over another."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "economics-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "economics-101-l04",
      "title": "Elasticity: How Sensitive Are Markets?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define price elasticity of demand and supply",
        "Calculate elasticity using the midpoint method",
        "Explain what makes goods elastic vs. inelastic"
      ],
      "chunks": [
        {
          "id": "economics-101-l04-c1",
          "title": "Price Elasticity of Demand",
          "content": "Elasticity measures how responsive quantity demanded is to a price change. Formula: % change in quantity demanded ÷ % change in price. If elasticity > 1, demand is elastic (sensitive to price — luxury goods, goods with many substitutes). If elasticity < 1, demand is inelastic (insensitive — necessities, addictive goods, goods with few substitutes). If elasticity = 1, it's unit elastic."
        },
        {
          "id": "economics-101-l04-c2",
          "title": "Determinants of Elasticity",
          "content": "What makes demand more elastic? (1) Availability of substitutes — more substitutes = more elastic. (2) Necessity vs. luxury — necessities are inelastic, luxuries are elastic. (3) Time horizon — demand becomes more elastic over time as consumers find alternatives. (4) Proportion of income — expensive goods tend to be more elastic. (5) Definition of the market — narrowly defined markets (Pepsi) are more elastic than broadly defined ones (soft drinks)."
        },
        {
          "id": "economics-101-l04-c3",
          "title": "Elasticity and Revenue",
          "content": "Elasticity determines whether raising prices increases or decreases total revenue. If demand is elastic, a price increase reduces revenue (the quantity drop outweighs the price gain). If demand is inelastic, a price increase raises revenue (quantity barely changes). This is why pharmaceutical companies can charge high prices (inelastic demand) but airlines constantly run sales (elastic demand for leisure travel)."
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l04-f1",
          "front": "Price elasticity of demand",
          "back": "% change in quantity demanded ÷ % change in price — measures sensitivity of demand to price changes"
        },
        {
          "id": "economics-101-l04-f2",
          "front": "Elastic demand (Ed > 1)",
          "back": "Quantity demanded is very responsive to price changes — luxury goods, goods with many substitutes"
        },
        {
          "id": "economics-101-l04-f3",
          "front": "Inelastic demand (Ed < 1)",
          "back": "Quantity demanded is not very responsive to price changes — necessities, addictive goods"
        },
        {
          "id": "economics-101-l04-f4",
          "front": "Total revenue test",
          "back": "If demand is elastic, lower prices to increase revenue. If inelastic, raise prices to increase revenue."
        },
        {
          "id": "economics-101-l04-f5",
          "front": "Day-care fine experiment (Freakonomics)",
          "back": "When an Israeli day-care center fined parents for late pickups, tardiness increased — the fine replaced a moral incentive with a market price, demonstrating that incentives interact with social norms in unexpected ways."
        },
        {
          "id": "economics-101-l04-f6",
          "front": "Federal funds rate",
          "back": "The interest rate at which banks lend to each other overnight — the Fed's primary policy instrument. Raising it cools the economy; lowering it stimulates spending and investment (The Little Book of Economics)."
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-101-l05",
      "title": "Market Structures",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Compare perfect competition, monopolistic competition, oligopoly, and monopoly",
        "Identify real-world examples of each structure",
        "Explain how market power affects pricing and output"
      ],
      "chunks": [
        {
          "id": "economics-101-l05-c1",
          "title": "The Spectrum of Competition",
          "content": "Markets range from highly competitive to monopolistic. Perfect competition: many sellers, identical products, no market power (agriculture, commodities). Monopolistic competition: many sellers, differentiated products, some market power (restaurants, clothing). Oligopoly: few dominant sellers, interdependent decisions, significant market power (airlines, telecom). Monopoly: one seller, unique product, maximum market power (utilities, patented drugs)."
        },
        {
          "id": "economics-101-l05-c2",
          "title": "Perfect Competition",
          "content": "In perfect competition, firms are 'price takers' — they accept the market price because no single firm is large enough to influence it. Products are identical (homogeneous). Entry and exit are free. Profit in the long run is zero (economic profit, not accounting profit) because new firms enter whenever profits exist, driving prices down. Agriculture and commodity markets approximate this model."
        },
        {
          "id": "economics-101-l05-c3",
          "title": "Monopoly and Oligopoly",
          "content": "A monopoly exists when one firm controls the entire market. It sets prices above competitive levels and produces less, creating deadweight loss (inefficiency). Monopolies arise from barriers to entry: patents, control of resources, government licenses, economies of scale. An oligopoly has a few large firms that watch each other closely. Game theory (the prisoner's dilemma) explains why oligopolists sometimes collude and sometimes compete fiercely."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-101-l05-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Perfect Competition",
            "Monopolistic Competition",
            "Oligopoly",
            "Monopoly"
          ],
          "items": [
            {
              "text": "Wheat farming",
              "bucket": "Perfect Competition"
            },
            {
              "text": "Local restaurants",
              "bucket": "Monopolistic Competition"
            },
            {
              "text": "Commercial airlines",
              "bucket": "Oligopoly"
            },
            {
              "text": "Local water utility",
              "bucket": "Monopoly"
            },
            {
              "text": "Clothing brands",
              "bucket": "Monopolistic Competition"
            },
            {
              "text": "Smartphone operating systems",
              "bucket": "Oligopoly"
            },
            {
              "text": "Patented pharmaceutical drug",
              "bucket": "Monopoly"
            },
            {
              "text": "Corn commodities market",
              "bucket": "Perfect Competition"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l05-f1",
          "front": "Perfect competition",
          "back": "Many sellers, identical products, free entry/exit, zero economic profit in long run"
        },
        {
          "id": "economics-101-l05-f2",
          "front": "Monopoly",
          "back": "One seller, unique product, high barriers to entry, sets price above competitive level"
        },
        {
          "id": "economics-101-l05-f3",
          "front": "Oligopoly",
          "back": "Few dominant firms, interdependent decisions, significant barriers to entry — game theory applies"
        },
        {
          "id": "economics-101-l05-f4",
          "front": "Deadweight loss",
          "back": "The loss of economic efficiency when market output is below the competitive level — caused by monopoly power or taxes"
        },
        {
          "id": "economics-101-l05-f5",
          "front": "Tournament economics (Freakonomics)",
          "back": "In tournament-style markets, many low-level participants accept poor compensation for the chance to reach highly rewarded top positions — explaining why drug dealers earn less than minimum wage while hoping to rise in the hierarchy."
        },
        {
          "id": "economics-101-l05-f6",
          "front": "Conventional wisdom (Galbraith / Freakonomics)",
          "back": "Ideas we accept not because they are true, but because they are simple, convenient, and comfortable. Freakonomics uses data to overturn these assumptions and reveal hidden economic truths."
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-101-l06",
      "title": "Elasticity & Markets Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of elasticity and market structures"
      ],
      "questions": [
        {
          "id": "economics-101-l06-q1",
          "text": "If a 10% price increase causes a 5% drop in quantity demanded, demand is:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Elastic"
            },
            {
              "id": "b",
              "text": "Inelastic"
            },
            {
              "id": "c",
              "text": "Unit elastic"
            },
            {
              "id": "d",
              "text": "Perfectly elastic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Elasticity = 5%/10% = 0.5, which is less than 1 (inelastic)."
        },
        {
          "id": "economics-101-l06-q2",
          "text": "Which market structure features many sellers with differentiated products?",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Perfect competition"
            },
            {
              "id": "b",
              "text": "Oligopoly"
            },
            {
              "id": "c",
              "text": "Monopolistic competition"
            },
            {
              "id": "d",
              "text": "Monopoly"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Monopolistic competition has many sellers offering slightly different products (e.g., restaurants, clothing brands)."
        },
        {
          "id": "economics-101-l06-q3",
          "text": "When demand is elastic, raising the price will:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increase total revenue"
            },
            {
              "id": "b",
              "text": "Decrease total revenue"
            },
            {
              "id": "c",
              "text": "Have no effect on revenue"
            },
            {
              "id": "d",
              "text": "Double total revenue"
            }
          ],
          "correctOptionId": "b",
          "explanation": "With elastic demand, the drop in quantity is proportionally larger than the price increase, reducing total revenue."
        },
        {
          "id": "economics-101-l06-q4",
          "text": "Deadweight loss from a monopoly occurs because:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The monopolist produces too much output"
            },
            {
              "id": "b",
              "text": "The monopolist charges below competitive prices"
            },
            {
              "id": "c",
              "text": "The monopolist restricts output and charges above competitive prices"
            },
            {
              "id": "d",
              "text": "There are too many competitors"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Monopolists maximize profit by producing less than the competitive quantity and charging higher prices."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "economics-101-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "economics-101-l07",
      "title": "Consumer and Producer Surplus",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Define consumer surplus as the difference between willingness to pay and actual price",
        "Define producer surplus as the difference between actual price and cost of production",
        "Explain how government interventions (price floors, ceilings, taxes) affect surplus"
      ],
      "chunks": [
        {
          "id": "economics-101-l07-c1",
          "title": "Measuring Market Welfare",
          "content": "Consumer surplus is the benefit consumers get from buying at a price lower than they'd be willing to pay. If you'd pay $5 for coffee but it costs $3, your consumer surplus is $2. On a graph, it's the area between the demand curve and the market price. Producer surplus is the benefit producers get from selling at a price higher than their minimum acceptable price. Total surplus (consumer + producer) is maximized at the competitive equilibrium."
        },
        {
          "id": "economics-101-l07-c2",
          "title": "Price Floors and Ceilings",
          "content": "A price floor sets a minimum price above equilibrium (e.g., minimum wage, agricultural price supports). It creates a surplus of the good. A price ceiling sets a maximum price below equilibrium (e.g., rent control). It creates a shortage. Both reduce total surplus by moving the market away from equilibrium. The lost surplus is deadweight loss — a cost to society from the intervention."
        },
        {
          "id": "economics-101-l07-c3",
          "title": "Taxes and Surplus",
          "content": "When the government imposes a tax on a good, the price buyers pay rises and the price sellers receive falls. The difference goes to the government as tax revenue. But the tax also reduces the quantity traded, creating deadweight loss. Tax incidence (who bears the tax burden) depends on elasticity: the more inelastic side bears more of the tax. If demand is inelastic, consumers bear most of it."
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l07-f1",
          "front": "Consumer surplus",
          "back": "The difference between what consumers are willing to pay and what they actually pay — the 'bonus' from buying"
        },
        {
          "id": "economics-101-l07-f2",
          "front": "Producer surplus",
          "back": "The difference between the market price and the minimum price sellers would accept — the 'bonus' from selling"
        },
        {
          "id": "economics-101-l07-f3",
          "front": "Price floor",
          "back": "A government-set minimum price above equilibrium — creates surplus (e.g., minimum wage)"
        },
        {
          "id": "economics-101-l07-f4",
          "front": "Tax incidence",
          "back": "How the burden of a tax is split between buyers and sellers — depends on relative elasticity"
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l07-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-101-l08",
      "title": "Externalities and Market Failures",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Define positive and negative externalities",
        "Explain why externalities cause market failure",
        "Identify government solutions: taxes, subsidies, regulation, property rights"
      ],
      "chunks": [
        {
          "id": "economics-101-l08-c1",
          "title": "What Are Externalities?",
          "content": "An externality is a cost or benefit that affects a third party not involved in a transaction. A negative externality (pollution from a factory) imposes costs on society that the producer doesn't pay. A positive externality (education) creates benefits for society beyond the individual student. Markets fail when externalities exist because the market price doesn't reflect the full social cost or benefit."
        },
        {
          "id": "economics-101-l08-c2",
          "title": "Correcting Market Failures",
          "content": "For negative externalities: Pigouvian taxes (taxing pollution to internalize the cost), cap-and-trade systems (tradeable pollution permits), or direct regulation. For positive externalities: subsidies (reducing the price to encourage more consumption/production), public provision (government provides the good directly, like public education), or mandates. The Coase theorem suggests that if property rights are clear and transaction costs are low, private bargaining can also solve externalities."
        },
        {
          "id": "economics-101-l08-c3",
          "title": "Government's Role: The Gardener Metaphor",
          "content": "Greg Ip's The Little Book of Economics argues that government's most important economic function is neither laissez-faire nor central planning, but acting as a gardener. Government should prepare the soil (infrastructure, education), protect against pests (regulation, antitrust enforcement), provide water during droughts (counter-cyclical fiscal and monetary policy), and avoid trampling the plants (excessive regulation, corruption). Government provides public goods that private markets cannot efficiently supply — basic scientific research, transportation infrastructure, primary education, and safety nets — because the social returns of these investments far exceed the private returns any single firm could capture. This middle-ground approach recognizes that markets are powerful but imperfect, and that smart government intervention corrects market failures without replacing the market mechanisms that drive innovation and growth."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-101-l08-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Negative Externality",
            "Positive Externality"
          ],
          "items": [
            {
              "text": "Factory pollution affecting nearby residents",
              "bucket": "Negative Externality"
            },
            {
              "text": "A neighbor's beautiful garden raising property values",
              "bucket": "Positive Externality"
            },
            {
              "text": "Secondhand cigarette smoke",
              "bucket": "Negative Externality"
            },
            {
              "text": "Flu vaccination reducing disease spread",
              "bucket": "Positive Externality"
            },
            {
              "text": "Traffic congestion from commuters",
              "bucket": "Negative Externality"
            },
            {
              "text": "Education creating a more productive workforce",
              "bucket": "Positive Externality"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l08-f1",
          "front": "Negative externality",
          "back": "A cost imposed on third parties not involved in a transaction — e.g., pollution. Market overproduces."
        },
        {
          "id": "economics-101-l08-f2",
          "front": "Positive externality",
          "back": "A benefit received by third parties not involved in a transaction — e.g., education. Market underproduces."
        },
        {
          "id": "economics-101-l08-f3",
          "front": "Pigouvian tax",
          "back": "A tax on activities that generate negative externalities, designed to make producers internalize the social cost"
        },
        {
          "id": "economics-101-l08-f4",
          "front": "Coase theorem",
          "back": "If property rights are clear and transaction costs are low, private bargaining can resolve externalities without government"
        },
        {
          "id": "economics-101-l08-f5",
          "front": "Government as gardener (Greg Ip)",
          "back": "Government should prepare soil (infrastructure, education), protect against pests (regulation), provide water in droughts (counter-cyclical policy) — but not design the garden. Correct market failures without replacing market mechanisms."
        },
        {
          "id": "economics-101-l08-f6",
          "front": "Total factor productivity (TFP)",
          "back": "The portion of output growth unexplained by increases in labor or capital — captures technology, organization, and education. Accounted for the majority of 20th-century U.S. growth (The Little Book of Economics)."
        },
        {
          "id": "economics-101-l08-f7",
          "front": "Non-rival goods: Ideas",
          "back": "Unlike physical inputs, ideas can be used by millions simultaneously without depletion. This property allows innovation to overcome diminishing returns and drive sustained economic growth."
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-101-l09",
      "title": "Welfare & Externalities Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of surplus, government intervention, and externalities"
      ],
      "questions": [
        {
          "id": "economics-101-l09-q1",
          "text": "Consumer surplus is the area between the:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Supply curve and the market price"
            },
            {
              "id": "b",
              "text": "Demand curve and the market price"
            },
            {
              "id": "c",
              "text": "Supply and demand curves"
            },
            {
              "id": "d",
              "text": "PPF and the origin"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Consumer surplus is the difference between willingness to pay (demand curve) and the actual price."
        },
        {
          "id": "economics-101-l09-q2",
          "text": "A price ceiling set below equilibrium creates a:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Surplus"
            },
            {
              "id": "b",
              "text": "Shortage"
            },
            {
              "id": "c",
              "text": "Equilibrium"
            },
            {
              "id": "d",
              "text": "Decrease in demand"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A price ceiling below equilibrium makes the good artificially cheap, causing quantity demanded to exceed quantity supplied."
        },
        {
          "id": "economics-101-l09-q3",
          "text": "A Pigouvian tax is designed to correct:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Positive externalities"
            },
            {
              "id": "b",
              "text": "Monopoly power"
            },
            {
              "id": "c",
              "text": "Negative externalities"
            },
            {
              "id": "d",
              "text": "Income inequality"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A Pigouvian tax makes producers pay for the social cost of negative externalities like pollution."
        },
        {
          "id": "economics-101-l09-q4",
          "text": "When a tax is imposed, which side bears more of the burden?",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Whichever side the law says pays the tax"
            },
            {
              "id": "b",
              "text": "The side with more elastic demand or supply"
            },
            {
              "id": "c",
              "text": "The side with more inelastic demand or supply"
            },
            {
              "id": "d",
              "text": "Both sides always share equally"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The more inelastic side can't easily change behavior, so it absorbs more of the tax burden."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "economics-101-l10",
      "title": "Mastery Quiz: Microeconomics",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all microeconomics concepts"
      ],
      "questions": [
        {
          "id": "economics-101-l10-q1",
          "text": "If two goods are complements, a rise in the price of one will:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increase demand for the other"
            },
            {
              "id": "b",
              "text": "Decrease demand for the other"
            },
            {
              "id": "c",
              "text": "Increase supply of the other"
            },
            {
              "id": "d",
              "text": "Have no effect on the other"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Complements are used together — if one becomes more expensive, demand for both decreases."
        },
        {
          "id": "economics-101-l10-q2",
          "text": "In the long run, firms in perfect competition earn:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Maximum economic profit"
            },
            {
              "id": "b",
              "text": "Zero economic profit"
            },
            {
              "id": "c",
              "text": "Negative economic profit"
            },
            {
              "id": "d",
              "text": "Accounting losses"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Free entry drives profits to zero: when firms profit, new entrants arrive until excess profit disappears."
        },
        {
          "id": "economics-101-l10-q3",
          "text": "The 'invisible hand' refers to:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Government regulation of markets"
            },
            {
              "id": "b",
              "text": "Self-interested individuals unintentionally promoting social welfare through market prices"
            },
            {
              "id": "c",
              "text": "Central planning of the economy"
            },
            {
              "id": "d",
              "text": "Charitable donations by wealthy individuals"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adam Smith's 'invisible hand' describes how self-interested behavior, guided by market prices, can benefit society."
        },
        {
          "id": "economics-101-l10-q4",
          "text": "Comparative advantage means a country should produce goods where it has:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The highest absolute productivity"
            },
            {
              "id": "b",
              "text": "The most workers"
            },
            {
              "id": "c",
              "text": "The lowest opportunity cost"
            },
            {
              "id": "d",
              "text": "The most natural resources"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Comparative advantage is about relative efficiency — produce what you sacrifice the least to make."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    },
    {
      "id": "economics-101-l11",
      "title": "Firm Decision-Making Lab",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Apply marginal analysis (MC = MR) to profit maximization",
        "Distinguish between fixed and variable costs",
        "Determine when a firm should shut down vs. continue operating"
      ],
      "chunks": [
        {
          "id": "economics-101-l11-c1",
          "title": "Marginal Analysis",
          "content": "Firms maximize profit by producing where marginal revenue (MR) equals marginal cost (MC). If MR > MC, producing one more unit adds to profit — keep going. If MR < MC, the last unit costs more than it earns — stop. This principle applies beyond business: you should study one more hour if the marginal benefit (better grade) exceeds the marginal cost (lost sleep, social time)."
        },
        {
          "id": "economics-101-l11-c2",
          "title": "Cost Structures",
          "content": "Fixed costs don't change with output (rent, insurance, salaries). Variable costs change with output (materials, hourly wages, utilities). Total cost = fixed + variable. Average total cost (ATC) = TC/Q. It typically U-shaped: falls first (spreading fixed costs) then rises (diminishing returns). Marginal cost (MC) is the cost of one more unit — it intersects ATC at its minimum point."
        },
        {
          "id": "economics-101-l11-c3",
          "title": "Shutdown Decision",
          "content": "A firm should shut down (temporarily stop producing) if price falls below average variable cost (AVC). Why not average total cost? Because fixed costs are paid regardless — they're 'sunk.' As long as price covers AVC, each unit sold contributes something toward fixed costs. In the long run, the firm exits the market if price stays below ATC (can't cover all costs)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-101-l11-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Fixed cost",
              "right": "Rent, insurance — doesn't change with output"
            },
            {
              "left": "Variable cost",
              "right": "Materials, hourly wages — changes with output"
            },
            {
              "left": "Marginal cost",
              "right": "Cost of producing one additional unit"
            },
            {
              "left": "Average total cost",
              "right": "Total cost divided by quantity (TC/Q)"
            },
            {
              "left": "MR = MC",
              "right": "Profit-maximizing output level"
            },
            {
              "left": "Price < AVC",
              "right": "Firm should shut down in the short run"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l11-f1",
          "front": "Marginal revenue (MR)",
          "back": "The additional revenue from selling one more unit — in perfect competition, MR = price"
        },
        {
          "id": "economics-101-l11-f2",
          "front": "Profit maximization rule",
          "back": "Produce where MR = MC — the point where the last unit just covers its cost"
        },
        {
          "id": "economics-101-l11-f3",
          "front": "Shutdown rule",
          "back": "Shut down if price < AVC in the short run; exit if price < ATC in the long run"
        },
        {
          "id": "economics-101-l11-f4",
          "front": "Sunk cost",
          "back": "A cost already incurred that cannot be recovered — should not influence future decisions"
        },
        {
          "id": "economics-101-l11-f5",
          "front": "Incentives and cheating (Freakonomics)",
          "back": "When Chicago teachers' jobs depended on student standardized test scores, some teachers cheated by changing answers — demonstrating that high-stakes incentives can corrupt the very metrics they are designed to improve."
        },
        {
          "id": "economics-101-l11-f6",
          "front": "Business cycle (Little Book of Economics)",
          "back": "The rhythmic alternation of expansion and contraction. Expansions overshoot (over-investment, excess debt); recessions correct these excesses. Attempts to prevent all recessions may worsen eventual corrections."
        }
      ]
    },
    {
      "id": "economics-101-l12",
      "title": "Mastery Retest",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive microeconomics mastery"
      ],
      "questions": [
        {
          "id": "economics-101-l12-q1",
          "text": "The shutdown rule says a firm should stop producing when:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Price < ATC"
            },
            {
              "id": "b",
              "text": "Price < AVC"
            },
            {
              "id": "c",
              "text": "MR > MC"
            },
            {
              "id": "d",
              "text": "Total revenue = total cost"
            }
          ],
          "correctOptionId": "b",
          "explanation": "If price falls below AVC, each unit sold loses money even before fixed costs — better to produce nothing."
        },
        {
          "id": "economics-101-l12-q2",
          "text": "Which of these is a sunk cost?",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Next month's rent"
            },
            {
              "id": "b",
              "text": "Money already spent on a non-refundable concert ticket"
            },
            {
              "id": "c",
              "text": "The cost of raw materials for tomorrow's production"
            },
            {
              "id": "d",
              "text": "Employee wages for next week"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A sunk cost is already incurred and cannot be recovered — the concert ticket money is gone regardless."
        },
        {
          "id": "economics-101-l12-q3",
          "text": "Positive externalities cause markets to:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Overproduce the good"
            },
            {
              "id": "b",
              "text": "Underproduce the good"
            },
            {
              "id": "c",
              "text": "Produce the efficient quantity"
            },
            {
              "id": "d",
              "text": "Eliminate consumer surplus"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The market doesn't account for the external benefit, so it produces less than the socially optimal amount."
        },
        {
          "id": "economics-101-l12-q4",
          "text": "Game theory is most relevant to which market structure?",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Perfect competition"
            },
            {
              "id": "b",
              "text": "Monopoly"
            },
            {
              "id": "c",
              "text": "Oligopoly"
            },
            {
              "id": "d",
              "text": "Monopolistic competition"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In oligopoly, firms are interdependent — each firm's decisions affect the others, making game theory essential."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    },
    {
      "id": "economics-101-l13",
      "title": "Real-World Microeconomics",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply supply and demand analysis to real market events",
        "Analyze pricing strategies through an economic lens",
        "Connect textbook models to everyday business decisions"
      ],
      "chunks": [
        {
          "id": "economics-101-l13-c1",
          "title": "Surge Pricing and Elasticity",
          "content": "Uber's surge pricing is pure supply and demand in action. When demand spikes (rainstorm, New Year's Eve), prices rise to balance the market. The price increase serves two functions: it reduces quantity demanded (some riders wait or take alternatives) and increases quantity supplied (more drivers come online). Critics call it price gouging; economists call it efficient allocation. The debate highlights the tension between efficiency and fairness."
        },
        {
          "id": "economics-101-l13-c2",
          "title": "Netflix and Market Power",
          "content": "Netflix operates in monopolistic competition — many streaming services, but each offers differentiated content. Their pricing strategy reflects demand elasticity: they test price sensitivity across markets and tiers. When they raised prices in 2022, subscribers in elastic markets (with many alternatives) left, while subscribers in inelastic markets (hooked on exclusive content) stayed. This is microeconomics in action."
        },
        {
          "id": "economics-101-l13-c3",
          "title": "Carbon Taxes: Externalities in Policy",
          "content": "Climate change is the textbook negative externality: burning fossil fuels imposes costs (rising seas, extreme weather) on people who didn't choose to pollute. A carbon tax is a Pigouvian tax — it makes polluters pay the social cost, incentivizing cleaner alternatives. Countries like Sweden, Canada, and the EU have implemented carbon pricing. The debate centers on the right tax level and how to use the revenue."
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l13-f1",
          "front": "Surge pricing",
          "back": "Dynamic pricing that increases with demand — efficient allocation but raises fairness concerns"
        },
        {
          "id": "economics-101-l13-f2",
          "front": "Product differentiation",
          "back": "Making a product distinct from competitors' to gain some market power — key to monopolistic competition"
        },
        {
          "id": "economics-101-l13-f3",
          "front": "Carbon tax",
          "back": "A Pigouvian tax on CO₂ emissions — internalizes the externality of climate change into market prices"
        },
        {
          "id": "economics-101-l13-f4",
          "front": "Freakonomics approach to economics",
          "back": "Use data and economic reasoning to challenge conventional wisdom, reveal hidden incentives, and understand that people respond to incentives in predictable — but sometimes surprising — ways."
        },
        {
          "id": "economics-101-l13-f5",
          "front": "Inflation targeting as credibility game",
          "back": "If businesses and consumers believe the Fed will maintain its 2% target, they set prices accordingly — making it self-fulfilling. Loss of credibility triggers pre-emptive price increases and inflationary spirals (Little Book of Economics)."
        }
      ]
    },
    {
      "id": "economics-101-l14",
      "title": "Coaching Clinic: Common Economics Mistakes",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify common misconceptions in microeconomics",
        "Distinguish between shifts of and movements along supply/demand curves",
        "Avoid the sunk cost fallacy in decision-making"
      ],
      "chunks": [
        {
          "id": "economics-101-l14-c1",
          "title": "Shift vs. Movement",
          "content": "The #1 mistake in economics: confusing a shift of a curve with a movement along it. A change in price causes a movement along the demand curve (quantity demanded changes). A change in anything else (income, preferences, price of substitutes) shifts the entire curve. Same for supply: price changes cause movement; input cost changes, technology, and regulation shift the curve. Always ask: did the price of THIS good change, or did something ELSE change?"
        },
        {
          "id": "economics-101-l14-c2",
          "title": "The Sunk Cost Fallacy",
          "content": "The sunk cost fallacy is continuing an activity because of what you've already invested, rather than based on future benefits and costs. 'I've already watched two hours of this terrible movie, I should finish it.' No — the two hours are gone regardless. Rational decisions are forward-looking: only consider costs and benefits you can still influence. Businesses fall into this trap with failing projects all the time."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-101-l14-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Shift of Demand Curve",
            "Movement Along Demand Curve"
          ],
          "items": [
            {
              "text": "Price of the good decreases",
              "bucket": "Movement Along Demand Curve"
            },
            {
              "text": "Consumer income increases",
              "bucket": "Shift of Demand Curve"
            },
            {
              "text": "Price of a substitute falls",
              "bucket": "Shift of Demand Curve"
            },
            {
              "text": "A sale reduces the good's price by 20%",
              "bucket": "Movement Along Demand Curve"
            },
            {
              "text": "A viral trend makes the good popular",
              "bucket": "Shift of Demand Curve"
            },
            {
              "text": "The good's price rises due to tariffs",
              "bucket": "Movement Along Demand Curve"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-101-l14-f1",
          "front": "Sunk cost fallacy",
          "back": "The error of continuing an action because of past costs rather than future benefits — irrational but common"
        },
        {
          "id": "economics-101-l14-f2",
          "front": "Shift vs. movement",
          "back": "Price change = movement along curve. Non-price factor change = shift of the entire curve"
        }
      ]
    },
    {
      "id": "economics-101-l15",
      "title": "Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive mastery of microeconomics"
      ],
      "questions": [
        {
          "id": "economics-101-l15-q1",
          "text": "An increase in consumer income shifts the demand curve for a normal good:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Left (demand decreases)"
            },
            {
              "id": "b",
              "text": "Right (demand increases)"
            },
            {
              "id": "c",
              "text": "It doesn't shift — it causes a movement along the curve"
            },
            {
              "id": "d",
              "text": "The supply curve shifts instead"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Higher income means consumers can buy more at every price — the demand curve shifts right."
        },
        {
          "id": "economics-101-l15-q2",
          "text": "According to the Coase theorem, externalities can be resolved privately when:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The government intervenes with taxes"
            },
            {
              "id": "b",
              "text": "Property rights are clear and transaction costs are low"
            },
            {
              "id": "c",
              "text": "All goods are public goods"
            },
            {
              "id": "d",
              "text": "There is perfect competition"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Coase showed that clear property rights and low transaction costs allow private parties to negotiate efficient outcomes."
        },
        {
          "id": "economics-101-l15-q3",
          "text": "Which factor makes demand MORE elastic?",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The good is a necessity"
            },
            {
              "id": "b",
              "text": "There are few substitutes"
            },
            {
              "id": "c",
              "text": "Many close substitutes are available"
            },
            {
              "id": "d",
              "text": "The good takes a small share of income"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When many substitutes exist, consumers easily switch when price rises — making demand highly elastic."
        },
        {
          "id": "economics-101-l15-q4",
          "text": "The average total cost curve is U-shaped because:",
          "skillId": "economics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Fixed costs always increase"
            },
            {
              "id": "b",
              "text": "Spreading fixed costs lowers ATC at first, then diminishing returns raises it"
            },
            {
              "id": "c",
              "text": "Variable costs are constant"
            },
            {
              "id": "d",
              "text": "Marginal revenue always exceeds marginal cost"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Initially, ATC falls as fixed costs are spread over more units. Eventually, diminishing returns cause variable costs to rise faster."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    }
  ]
};
