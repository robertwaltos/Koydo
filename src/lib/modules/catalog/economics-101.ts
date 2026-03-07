import type { LearningModule } from "@/lib/modules/types";

export const economics_101_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "Economics is a fascinating field that explores how societies manage their limited resources to satisfy their many desires. Scarcity is a key concept in economics, which means that while our wants are endless, the resources we have—such as land, labor, capital, and entrepreneurship—are limited. This creates a situation where every choice we make comes with a cost. When we decide to pursue one option, we often have to give up another. This idea of trade-offs is central to understanding economics, as it helps us navigate the choices we face every day. For example, if you choose to spend your time studying for a test, you might miss out on hanging out with friends. By recognizing that every choice has consequences, we can become more thoughtful about how we use our resources and prioritize our wants and needs.\n\n**Visual Prompt:** An animated scale balancing unlimited wants (a massive pile of diverse goods and experiences) against limited resources (a small pile of coins, a patch of land, and a ticking clock)."
        },
        {
          "id": "economics-101-l01-c2",
          "title": "Opportunity Cost",
          "content": "Opportunity cost is a key idea that helps us understand how to make better decisions in our lives. It represents the value of the next best alternative that we give up when we choose one option over another. For instance, imagine you have an hour to spend. If you decide to dedicate that hour to studying economics, the opportunity cost is everything else you could have done with that time. This could include working at a part-time job, catching up on sleep, or enjoying some time playing video games with friends. It's important to remember that opportunity cost isn't just about money; it also encompasses the time you spend, the enjoyment you might miss out on, and any other benefits that could have come from your alternative choices. By understanding opportunity costs, we can become more rational decision-makers, ensuring that we make the most of our time and resources.\n\n**Visual Prompt:** A fork in the road. One path shows a student studying (getting an A), the other shows them at a party. A glowing price tag on the studying path reads 'Cost: Missing the party'."
        },
        {
          "id": "economics-101-l01-c3",
          "title": "The Production Possibilities Frontier",
          "content": "The Production Possibilities Frontier, often abbreviated as PPF, is an important graph that helps us understand how a society can allocate its resources to produce two different goods. Imagine a simple scenario where a country can produce either cars or computers. The PPF shows all the possible combinations of cars and computers that can be produced with the resources available, such as labor, materials, and technology. Points located directly on the curve indicate efficient production, meaning the society is using all of its resources without waste. Points inside the curve indicate inefficiency, where resources are sitting idle. Points outside the curve are currently unattainable. The shape of the PPF is typically bowed outward, representing the law of increasing opportunity costs: as you produce more of one good, you must give up increasingly larger amounts of the other because resources are not perfectly adaptable.\n\n**Visual Prompt:** A 2D graph showing a bowed-out curve. The X-axis is 'Computers' and the Y-axis is 'Cars'. Dots appear on the curve (labeled 'Efficient'), inside (labeled 'Inefficient'), and outside (labeled 'Unattainable')."
        },
        {
          "id": "economics-101-l01-c4",
          "title": "The Economics of Incentives",
          "content": "Economics is all about understanding what motivates people to make choices. This motivation is known as an incentive, and they come in three main types: economic, social, and moral. Economic incentives are related to money—rewards for good behavior or penalties for bad behavior. Social incentives involve how we are perceived by others, like wanting to be liked or accepted. Moral incentives are about our personal beliefs of what is right and wrong. Often, the most powerful situations in economics involve a mix of these three. If incentives are not designed well, they can lead to surprising negative results. For example, when an Israeli daycare center charged parents a fine for picking up their children late, more parents started arriving late! The fine changed how parents viewed their responsibility: instead of feeling guilty (a moral incentive), they saw it as a simple transaction (an economic incentive). This shows us how important it is to think carefully about how we set up rules and rewards.\n\n**Visual Prompt:** A cartoon showing three jars labeled 'Economic', 'Social', and 'Moral'. Coins drop into the Economic jar, a thumbs-up drops into Social, and a glowing heart drops into Moral."
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
          "front": "Three types of incentives",
          "back": "Economic (financial rewards/penalties), social (reputation, peer pressure), and moral (sense of right and wrong)."
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l01-a1",
          "type": "image",
          "title": "Concept Card: Scarcity & Choice",
          "content": "A visual infographic summarizing Scarcity, Opportunity Cost, and the PPF curve with real-world examples."
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
          "content": "The demand curve is an important tool in economics that visually represents how the price of a good influences the quantity that consumers are willing to purchase. This curve typically slopes downward, illustrating the law of demand: when the price of a good rises, the quantity demanded by consumers tends to fall. Conversely, when prices decrease, consumers buy more. Several factors can cause the entire demand curve to shift, meaning that at every price level, the quantity demanded changes. These factors include changes in consumer income, shifts in consumer preferences, and the prices of related goods (substitutes and complements). Additionally, expectations about future prices and changes in population size can also influence demand. By understanding these factors, we can better predict how demand for a good might change in different situations.\n\n**Visual Prompt:** A downward-sloping line on a graph. As a slider for 'Price' goes down, an arrow points right along the 'Quantity' axis, showing an increase in demand."
        },
        {
          "id": "economics-101-l02-c2",
          "title": "The Supply Curve",
          "content": "The supply curve helps us understand how the price of a good affects how much of it producers are willing to sell. Typically, the supply curve slopes upward, which means that when the price of a good increases, producers are encouraged to supply more of it. This relationship is known as the law of supply. Several factors can influence the position of the supply curve, causing it to shift. For example, if the costs of materials needed to produce a good go up, producers might supply less of it at the same price. On the other hand, if there are advancements in technology that make production easier or cheaper, producers may be able to supply more. The number of sellers in the market, government regulations, and expectations of future prices also play a major role in shifting supply.\n\n**Visual Prompt:** An upward-sloping line. A factory icon grows larger as the price on the Y-axis increases, illustrating producers' willingness to supply more goods at higher prices."
        },
        {
          "id": "economics-101-l02-c3",
          "title": "Market Equilibrium",
          "content": "Market equilibrium occurs when the amount of a good that producers are willing to sell exactly matches the amount that consumers are willing to buy. This balance is achieved at a specific price known as the equilibrium price. When prices are set higher than this equilibrium price, it creates a surplus—there is more of the good available than people want to buy, which usually leads to a decrease in prices as sellers try to attract buyers. If prices drop below the equilibrium price, a shortage occurs, causing prices to rise as buyers compete for the limited supply. The market has a natural tendency to move toward this equilibrium point through the price mechanism. This concept, often referred to as the 'invisible hand' by Adam Smith, illustrates how individual actions in the marketplace lead to a balanced allocation of resources.\n\n**Visual Prompt:** The supply and demand curves intersecting to form an 'X'. The center point glows, labeled 'Equilibrium: No Shortage, No Surplus'."
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
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice: Shifting Curves",
          "content": "Interactive graph where learners drag the supply or demand curve based on real-world news headlines."
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
          "content": "Remember: Supply goes UP to the Sky, Demand goes DOWN to the Dirt."
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
          "content": "Elasticity is a key idea in economics that helps us understand how much the quantity of a product that people want to buy changes when its price goes up or down. To figure out elasticity, we use a simple formula: we take the percentage change in the quantity demanded and divide it by the percentage change in price. This gives us a number that tells us how sensitive consumers are to price changes. If this number is greater than 1, we say that demand is elastic. This means that when prices change, people really notice and adjust how much they want to buy. This often happens with luxury items or products that have many alternatives. On the other hand, if the number is less than 1, we call it inelastic demand. This means that even if prices change, people will still buy about the same amount, which is typical for essential goods like food or medicine.\n\n**Visual Prompt:** A rubber band stretching easily (Elastic Demand) next to a rigid steel bar (Inelastic Demand) when pulled by a 'Price Change' weight."
        },
        {
          "id": "economics-101-l04-c2",
          "title": "Determinants of Elasticity",
          "content": "Several important factors influence how sensitive the demand for a product is to changes in price. First, consider the availability of substitutes. When there are many alternatives available for a product, such as different brands of soda, the demand for that product tends to be more elastic. Second, we need to think about whether a product is a necessity or a luxury. Necessities, like basic food items or medicine, usually have inelastic demand, meaning people will buy them regardless of price changes. Third, the time horizon is crucial; over time, as consumers have more opportunities to find alternatives, demand can become more elastic. Fourth, the proportion of income spent on a good also plays a role; generally, expensive goods that take up a larger share of a consumer's budget will have more elastic demand. Understanding these factors helps businesses predict how changes in price will affect consumer behavior.\n\n**Visual Prompt:** A split screen. Left: A generic soda with many alternative brands behind it (Elastic). Right: A life-saving medicine bottle with no alternatives (Inelastic)."
        },
        {
          "id": "economics-101-l04-c3",
          "title": "Elasticity and Revenue",
          "content": "Understanding elasticity is essential for businesses because it reveals how changes in price can influence total revenue. When demand is elastic, consumers are very responsive to price changes. If a company raises its prices, many customers might decide not to buy the product anymore, leading to a significant drop in sales. In this case, the decrease in the number of items sold is greater than the increase in price, resulting in lower total revenue. On the other hand, if demand is inelastic, consumers are less sensitive to price changes. This means that even if a company raises its prices, the quantity sold will not change much, allowing the company to increase its total revenue. This concept helps explain why pharmaceutical companies can charge high prices for their medications, while airlines frequently offer sales and discounts to attract leisure travelers.\n\n**Visual Prompt:** A bar chart showing Total Revenue. For an elastic good, raising the price shrinks the revenue bar. For an inelastic good, raising the price grows the revenue bar."
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
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l04-a1",
          "type": "image",
          "title": "Concept Card: Elasticity",
          "content": "Visual summary showing steep curves for inelastic goods and flat curves for elastic goods."
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
          "content": "Markets can be categorized based on how much competition exists among sellers, ranging from highly competitive to monopolistic. In a perfectly competitive market, there are many sellers who provide identical products, meaning no single seller can influence the overall market price (e.g., agriculture). Monopolistic competition also has many sellers, but the products they offer are different enough that each seller has some power to set prices (e.g., restaurants, clothing brands). An oligopoly is a market structure where only a few sellers dominate the market. These sellers are interdependent, meaning the decisions made by one seller significantly affect the others (e.g., airlines, telecommunications). Finally, a monopoly occurs when there is only one seller in the market providing a unique product, giving them maximum control over the market (e.g., local water utilities).\n\n**Visual Prompt:** A horizontal spectrum line. Left end: 'Perfect Competition' (many small farms). Middle: 'Oligopoly' (a few airlines). Right end: 'Monopoly' (one water company)."
        },
        {
          "id": "economics-101-l05-c2",
          "title": "Perfect Competition",
          "content": "In a perfectly competitive market, businesses are referred to as 'price takers.' This means that they must accept the market price as it is, without the ability to change it. This occurs because no single business is large enough to have a significant impact on the overall market price. In this type of market, the products sold by different firms are identical, or homogeneous, which means that consumers do not have a preference for one seller over another. Furthermore, there are no barriers to entering or exiting the market, which allows new businesses to join freely when they see the opportunity to make a profit. Over time, in a perfectly competitive market, firms tend to earn zero economic profit. This happens because when existing firms are making profits, new firms will enter the market, increasing supply and driving prices down until no economic profit remains.\n\n**Visual Prompt:** A bustling farmer's market where dozens of stalls sell identical red apples. A sign reads 'Market Price: $1 - Take it or leave it!'"
        },
        {
          "id": "economics-101-l05-c3",
          "title": "Monopoly and Oligopoly",
          "content": "A monopoly is a market structure where one single company has complete control over the entire market for a specific product or service. This means the company can set prices much higher than they would be in a competitive market. This situation can lead to inefficiencies known as deadweight loss, where resources are not being used in the best possible way. Monopolies often form due to barriers to entry, such as patents, control over essential resources, or massive economies of scale. On the other hand, an oligopoly is a market structure where a small number of large firms hold significant power. These companies pay close attention to each other's actions, leading to strategic decision-making. Game theory helps us understand why companies in an oligopoly might decide to work together (collude) to set prices, or why they might choose to compete fiercely against each other instead.\n\n**Visual Prompt:** A single giant castle with a moat (Monopoly with high barriers to entry) compared to three large fortresses eyeing each other suspiciously (Oligopoly)."
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
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice: Identify the Market",
          "content": "A scenario-based exercise where learners read a business description and classify its market structure."
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
          "content": "Consumer surplus is an important concept in economics that helps us understand the benefits consumers receive when they buy products at prices lower than what they are willing to pay. Imagine you really want a cup of coffee and you would be willing to spend up to $5 for it. If you find that the coffee shop is selling it for only $3, you end up saving $2. This $2 is your consumer surplus, which represents the extra satisfaction or benefit you gain from the purchase. On the other hand, producer surplus is the benefit that producers receive when they sell their products for a price that is higher than the minimum price they would accept to sell them. For instance, if a producer is willing to sell coffee for $2 but sells it for $3, they gain a $1 producer surplus. When we add together consumer surplus and producer surplus, we arrive at total surplus. This total surplus is maximized when the market reaches competitive equilibrium, ensuring that both consumers and producers benefit as much as possible.\n\n**Visual Prompt:** A graph with the demand curve. The area above the price line and below the demand curve fills with green, labeled 'Consumer Surplus (The Bonus!)'."
        },
        {
          "id": "economics-101-l07-c2",
          "title": "Price Floors and Ceilings",
          "content": "A price floor is a rule set by the government that establishes a minimum price for a product or service, which is usually higher than what the market would naturally set. A common example is the minimum wage. When a price floor is put in place, it can lead to a situation where there is more of a product available than people want to buy, creating a surplus. On the other hand, a price ceiling is a limit on how high a price can go, set below the equilibrium price. An example is rent control, designed to keep housing affordable. However, this can result in a shortage, where the demand for housing exceeds the available supply. Both price floors and ceilings disrupt the natural balance of the market, leading to a decrease in overall economic surplus. This reduction in surplus is referred to as deadweight loss, representing a cost to society because it distorts the natural flow of supply and demand.\n\n**Visual Prompt:** A graph showing a horizontal line above equilibrium (Price Floor) creating a gap labeled 'Surplus', and a line below equilibrium (Price Ceiling) creating a gap labeled 'Shortage'."
        },
        {
          "id": "economics-101-l07-c3",
          "title": "Taxes and Surplus",
          "content": "When the government decides to impose a tax on a good or service, it can have significant effects on the market. Typically, when a tax is introduced, the price that consumers pay for the good increases, while the price that sellers actually keep decreases. The difference between the higher price paid by consumers and the lower price received by sellers is collected by the government as tax revenue. However, this tax also leads to a decrease in the quantity of the good that is traded in the market, creating deadweight loss. Tax incidence is a term for how the burden of the tax is shared between buyers and sellers. The distribution of this burden depends on the elasticity of demand and supply. If demand is inelastic, meaning consumers are not very sensitive to price changes, they will end up bearing a larger portion of the tax burden. If people really need a product, they will pay most of the tax.\n\n**Visual Prompt:** A wedge being driven between the price buyers pay and the price sellers receive. The gap turns into a gold coin labeled 'Tax Revenue', while a small grey triangle appears labeled 'Deadweight Loss'."
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
          "title": "Concept Card: Surplus",
          "content": "Visual summary of the lesson's main concept showing the triangles of consumer and producer surplus."
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
          "content": "An externality is an effect that occurs when a transaction between two parties impacts a third party who is not directly involved. There are two main types: negative and positive. A negative externality occurs when the actions of a producer impose costs on society that they do not have to pay for. For example, a factory that releases pollution into the air harms the health of nearby residents, creating costs the factory ignores. A positive externality arises when an action creates benefits for others beyond the individual involved. A great example is education; when someone receives an education, they contribute positively to society by being more informed and productive citizens. When externalities are present, it leads to market failures because prices do not accurately reflect true social costs or benefits. As a result, markets overproduce goods with negative externalities and underproduce those with positive externalities.\n\n**Visual Prompt:** A factory emitting green smog that drifts over a nearby neighborhood (Negative Externality), contrasted with a beautifully landscaped front yard that makes the whole street look nicer (Positive Externality)."
        },
        {
          "id": "economics-101-l08-c2",
          "title": "Correcting Market Failures",
          "content": "To tackle negative externalities, governments can adopt several strategies. One common method is the implementation of Pigouvian taxes. These are special taxes imposed on activities that create negative externalities, such as pollution. By taxing these harmful activities, the government encourages companies to take responsibility for the damage they cause, effectively internalizing the external costs. Another approach is cap-and-trade systems, where companies buy or sell a limited number of pollution permits. For positive externalities, governments can provide subsidies, lowering the cost of goods that have a positive impact on society (like vaccines or solar panels). The Coase theorem also suggests that if property rights are clearly defined and transaction costs are low, individuals and businesses can negotiate solutions to externalities among themselves, without needing government intervention.\n\n**Visual Prompt:** A giant 'Tax' stamp coming down on the polluting factory, while a glowing 'Subsidy' check is handed to a school."
        },
        {
          "id": "economics-101-l08-c3",
          "title": "Government's Role: The Gardener Metaphor",
          "content": "Economist Greg Ip shares a unique view on how the government should function within the economy. He suggests that instead of simply allowing the market to operate freely without any interference (laissez-faire) or controlling every aspect of the economy (central planning), the government should take on the role of a gardener. Just like a gardener prepares the soil for plants to grow, the government can invest in essential infrastructure and education. The government also protects the economy from harmful practices, much like a gardener protects plants from pests, using regulations and antitrust laws to maintain fair competition. During tough economic times, the government can provide support, similar to watering plants during a drought. However, it’s important to strike a balance and avoid excessive regulations that could hinder growth, just as a gardener must be careful not to trample on the plants they are nurturing.\n\n**Visual Prompt:** An animation of a gardener (the government) watering plants (subsidies), pulling weeds (regulations), and building a trellis (infrastructure), rather than trying to grow the plants by force."
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
        }
      ],
      "learningAids": [
        {
          "id": "economics-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice: Spot the Externality",
          "content": "Read short news clippings and identify whether they describe a positive or negative externality, and propose a solution."
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
          "content": "To maximize profits, firms must carefully evaluate their production decisions using a method called marginal analysis. This involves looking at two important concepts: marginal revenue (MR) and marginal cost (MC). Marginal revenue refers to the extra income a firm earns from selling one additional unit of a product. Marginal cost is the expense incurred when producing that extra unit. When a firm finds that the marginal revenue from selling an additional unit is greater than the marginal cost of producing it, this indicates a good opportunity to increase production. However, if the marginal cost surpasses the marginal revenue, producing that extra unit would actually reduce profits. The golden rule of profit maximization is to produce exactly where MR = MC. Interestingly, marginal analysis extends beyond business. If you are contemplating whether to study for one more hour, you should consider the marginal benefit of a better grade against the marginal cost of sacrificing sleep.\n\n**Visual Prompt:** A scale weighing 'Marginal Revenue' (a gold coin) against 'Marginal Cost' (a bill). As long as the coin is heavier, a green 'Produce!' light flashes."
        },
        {
          "id": "economics-101-l11-c2",
          "title": "Cost Structures",
          "content": "Understanding cost structures is crucial for businesses to make smart choices about production and pricing. Fixed costs are expenses that remain constant no matter how much a company produces, like rent and insurance. Variable costs change depending on the level of output, such as materials and hourly wages. To calculate the total cost of production, you add fixed and variable costs. To find the average total cost (ATC), you divide the total cost by the number of goods produced. This ATC often takes on a U-shaped curve. Initially, it decreases as fixed costs are spread over a larger number of units. However, as production continues to increase, the ATC can rise due to diminishing returns, where each additional unit becomes less efficient to produce. Marginal cost (MC) intersects with the average total cost at its lowest point, indicating the most efficient level of production.\n\n**Visual Prompt:** A U-shaped curve labeled 'Average Total Cost'. A swooping 'Marginal Cost' curve cuts perfectly through the lowest point of the U."
        },
        {
          "id": "economics-101-l11-c3",
          "title": "Shutdown Decision",
          "content": "A firm must sometimes make the difficult decision about whether to continue operating or to shut down temporarily. One key factor is the relationship between the market price of the product and the average variable cost (AVC) of producing it. If the market price falls below the AVC, the firm is not even able to cover the costs that vary with production, such as materials and labor. In this situation, it is wise for the firm to stop production immediately. Fixed costs, like rent, still need to be paid no matter what; these are 'sunk' costs since they cannot be recovered. As long as the price received for each unit sold is greater than or equal to the AVC, the firm should stay open in the short run to help pay off those fixed costs. However, if the market price stays below the average total cost (ATC) for a long time, the firm will eventually have to exit the market altogether.\n\n**Visual Prompt:** A storefront with a 'Temporarily Closed' sign. A thought bubble shows the owner calculating that staying open wouldn't even cover the cost of the electricity and hourly wages (Variable Costs)."
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
          "content": "Uber's surge pricing is a fascinating example of how the principles of supply and demand operate in real life. Imagine a scenario where there is a sudden increase in the number of people needing rides, like during a heavy rainstorm or on New Year's Eve. In these situations, the prices for rides increase. This rise in price serves two key purposes: first, it helps to decrease the number of people who want to take a ride at that moment. Some riders might decide to wait until the prices go down or look for other ways to get where they need to go. Second, the higher prices encourage more drivers to log into the app and offer their services, which helps to meet the increased demand for rides. While some people criticize this practice and call it price gouging, many economists believe that it is an effective way to manage resources in a busy market. This situation brings up an important discussion about the balance between efficiency and fairness.\n\n**Visual Prompt:** A smartphone screen showing a ride-hailing app during a rainstorm. A lightning bolt icon appears with 'Surge Pricing: 2x', and the number of available cars slowly increases."
        },
        {
          "id": "economics-101-l13-c2",
          "title": "Netflix and Market Power",
          "content": "Netflix is a great example of a company that operates in a type of market called monopolistic competition. In this kind of market, there are many different streaming services available, but each one has its own unique content that sets it apart from the others. When it comes to pricing, Netflix uses a strategy that takes into account how sensitive their customers are to changes in price (demand elasticity). For example, when Netflix decides to raise its prices, they notice that in some markets where viewers have many other options to choose from (elastic markets), a number of subscribers decide to cancel. On the other hand, in markets where viewers are really interested in exclusive shows that only Netflix offers (inelastic markets), most subscribers choose to stay with the service. This real-world scenario is a clear example of microeconomics in action.\n\n**Visual Prompt:** A user looking at a 'Price Increase' email. They glance at a shelf of other streaming options (Elastic) vs. a shelf with only one exclusive show they love (Inelastic)."
        },
        {
          "id": "economics-101-l13-c3",
          "title": "Carbon Taxes: Externalities in Policy",
          "content": "Climate change is a major challenge that impacts everyone on our planet, and it is often referred to as a massive negative externality. When individuals and companies burn fossil fuels, they contribute to serious issues such as rising sea levels and extreme weather events. These consequences affect many people who did not make the choice to pollute the environment. To tackle this problem, some governments have implemented a carbon tax, which is a specific type of Pigouvian tax. This tax requires those who emit carbon dioxide to pay for the social costs associated with their actions. By doing so, it encourages them to explore and invest in cleaner and more sustainable alternatives. The ongoing debate among policymakers focuses on finding the right level for this tax and determining the best ways to utilize the revenue generated from it.\n\n**Visual Prompt:** A gas pump showing the price per gallon, with a small highlighted portion labeled 'Carbon Tax: Paying for the Planet's Future'."
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
          "content": "In the study of economics, one of the most frequent errors that learners encounter is the misunderstanding between a shift of a curve and a movement along it. Let's break this down. When we talk about the demand curve, a change in the price of a good leads to a movement along that curve. This means that the quantity demanded by consumers changes in response to the price change. For example, if the price of ice cream goes down, more people might want to buy it, which is a movement along the demand curve. On the other hand, if something else changes—like an increase in people's incomes, a change in their preferences, or a rise in the price of substitute goods—this causes the entire demand curve to shift. This means that at every price level, the quantity demanded changes. To avoid making mistakes, always ask yourself: did the price of this specific good change, or did something else influence the situation?\n\n**Visual Prompt:** An animation showing a dot sliding down an existing line (Movement = Price Change), followed by the entire line physically sliding to the right (Shift = Non-Price Change)."
        },
        {
          "id": "economics-101-l14-c2",
          "title": "The Sunk Cost Fallacy",
          "content": "The sunk cost fallacy is a common mistake that many people make when they continue to invest time, money, or effort into something simply because they have already put so much into it. Instead of looking at what they can gain or lose in the future, they let their past investments cloud their judgment. For instance, imagine you start watching a movie that turns out to be really boring. After two hours, you might think, 'I've already spent so much time on this movie, I should just finish it.' But the truth is, those two hours are gone, and they can't be changed. Rational decision-making means focusing on what you can still influence, like whether the rest of the movie will be enjoyable or if you could spend that time doing something more fun. Businesses can fall into the same trap, pouring money into a failing project instead of stopping and finding better opportunities.\n\n**Visual Prompt:** A person sitting in a movie theater looking miserable. A thought bubble shows a burning $15 ticket. A neon sign flashes: 'The money is gone! You can still save your time!'"
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
