import type { LearningModule } from "@/lib/modules/types";

export const marketing_management_101_Module: LearningModule = {
  "id": "marketing-management-101",
  "title": "Marketing Fundamentals",
  "description": "Understand how firms create, communicate, and deliver value to customers. Master the marketing mix, segmentation, targeting, positioning, consumer behavior, and the strategic role of marketing in driving business growth.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "marketing"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define marketing and explain the marketing concept",
    "Apply the marketing mix (4Ps) to product strategy decisions",
    "Segment markets using demographic, psychographic, and behavioral criteria",
    "Position products using perceptual maps and value propositions",
    "Explain key consumer behavior models and purchase decision stages",
    "Distinguish between B2C and B2B marketing contexts",
    "Analyze real-world marketing campaigns for strategic effectiveness"
  ],
  "lessons": [
    {
      "id": "marketing-management-101-l01",
      "title": "What Is Marketing?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define marketing beyond advertising",
        "Explain the evolution from product to customer orientation",
        "Describe how marketing creates value for both firms and customers"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l01-c1",
          "title": "Marketing Defined",
          "content": "Marketing is the process of creating, communicating, and delivering value to customers to meet their needs profitably. It's more than just advertising; it includes product design, pricing, distribution, and building long-term customer relationships. The goal is to create an exchange that benefits both the customer and the organization."
        },
        {
          "id": "marketing-management-101-l01-c2",
          "title": "From Product to Customer Orientation",
          "content": "Marketing has evolved through several stages. It began with a Production focus (make it cheap and available), moved to a Product focus (make it high-quality), then a Selling focus (persuade people to buy). The modern era began with the Marketing concept, which prioritizes understanding customer needs first. The most advanced stage is the Societal Marketing concept, which balances customer wants, company profits, and society's long-term interests. Companies like Patagonia exemplify this by building their brand around environmental responsibility."
        },
        {
          "id": "marketing-management-101-l01-c3",
          "title": "Value Creation",
          "content": "Value is at the heart of marketing. Customer value is the difference between the benefits a customer gets from a product and the cost to obtain it. For example, Apple provides high value through design and user experience, justifying a premium price. In contrast, a store like Costco provides value through low prices. A key goal is to maximize Customer Lifetime Value (CLV), which is the total profit a company expects to make from a customer over their entire relationship. Loyal customers are incredibly valuable because they make repeat purchases, refer others, and are less expensive to serve."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l01-f1",
          "front": "Marketing",
          "back": "The process of creating, communicating, and delivering value to customers to meet their needs profitably."
        },
        {
          "id": "marketing-management-101-l01-f2",
          "front": "Five Eras of Marketing",
          "back": "Production → Product → Selling → Marketing (customer-centric) → Societal Marketing (long-term welfare)."
        },
        {
          "id": "marketing-management-101-l01-f3",
          "front": "Customer Lifetime Value (CLV)",
          "back": "The total profit a company expects from a customer over their entire relationship with the brand."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l01-a1",
          "type": "image",
          "title": "The Value Exchange Diagram",
          "content": "A visual showing how a company offers value (products/services) in exchange for value from the customer (money, data, loyalty)."
        }
      ]
    },
    {
      "id": "marketing-management-101-l02",
      "title": "The Marketing Mix (4Ps)",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain each element of the marketing mix",
        "Design a coherent marketing mix for a product",
        "Extend the 4Ps to the 7Ps for services"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l02-c1",
          "title": "Product",
          "content": "The 'Product' is the core offering that satisfies a customer's need. It includes the physical item or service, but also its features, design, quality, branding, and packaging. We can think of a product on three levels: the core benefit (the fundamental need it meets), the actual product (the tangible features), and the augmented product (extra services like warranties or customer support). Products also have a lifecycle: Introduction, Growth, Maturity, and Decline. Each stage requires a different marketing approach."
        },
        {
          "id": "marketing-management-101-l02-c2",
          "title": "Price, Place, and Promotion",
          "content": "The other three Ps are Price, Place, and Promotion. Price is what the customer pays. Pricing strategies include penetration pricing (starting low to gain market share) and price skimming (starting high for a new, unique product). Place refers to how the product gets to the customer, including distribution channels like retail stores, e-commerce, or direct sales. Promotion is how you communicate with your audience. This includes advertising, public relations, sales promotions, and digital marketing on social media."
        },
        {
          "id": "marketing-management-101-l02-c3",
          "title": "The Extended Mix: 7Ps for Services",
          "content": "For services, the marketing mix is extended to 7Ps. The three additional Ps are: People, the employees who deliver the service and represent the brand; Process, the systems and steps used to deliver a consistent service (like a fast-food chain's ordering system); and Physical Evidence, the tangible cues that signal quality, such as a clean hotel lobby or a well-designed website. All seven Ps must work together to create a cohesive and effective marketing strategy."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l02-f1",
          "front": "Marketing Mix (4Ps)",
          "back": "Product (what you sell), Price (what you charge), Place (where you sell), Promotion (how you communicate) — all must be aligned."
        },
        {
          "id": "marketing-management-101-l02-f2",
          "front": "Product Lifecycle Stages",
          "back": "Introduction → Growth → Maturity → Decline — each stage needs different marketing strategies."
        },
        {
          "id": "marketing-management-101-l02-f3",
          "front": "7Ps for Services",
          "back": "The 4Ps plus People (service employees), Process (service delivery systems), and Physical Evidence (tangible quality cues)."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l02-a1",
          "type": "image",
          "title": "The 4Ps Marketing Mix Diagram",
          "content": "A visual graphic illustrating the four core components: Product, Price, Place, and Promotion."
        }
      ]
    },
    {
      "id": "marketing-management-101-l03",
      "title": "Understanding the Market: Research Essentials",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Outline the market research process",
        "Distinguish between primary and secondary data",
        "Compare qualitative and quantitative research methods"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l03-c1",
          "title": "The Market Research Process",
          "content": "Market research is the systematic process of gathering and analyzing information to help make better marketing decisions. It typically follows five key steps: 1. Define the Problem: Clearly state the question you need to answer. 2. Develop the Research Plan: Decide what information you need and how you'll get it. 3. Collect Information: Gather data using primary or secondary sources. 4. Analyze the Findings: Look for patterns and insights in the data. 5. Present the Findings & Make a Decision: Share the results and use them to guide your strategy. It's crucial to avoid common pitfalls like biased questions or misinterpreting data."
        },
        {
          "id": "marketing-management-101-l03-c2",
          "title": "Primary vs. Secondary Data",
          "content": "Researchers use two main types of data. Secondary data is information that already exists, collected by someone else for another purpose. Examples include government reports, industry articles, and company databases. It's often quick and inexpensive to get. Primary data is information you collect yourself for your specific research project. Methods for collecting primary data include surveys, interviews, focus groups, and direct observation. While more time-consuming and expensive, primary data is tailored to your exact needs."
        },
        {
          "id": "marketing-management-101-l03-c3",
          "title": "Qualitative vs. Quantitative Research",
          "content": "Primary research can be either qualitative or quantitative. Qualitative research aims to understand the 'why' behind consumer behavior. It uses methods like in-depth interviews and focus groups to gather rich, non-numerical insights. Quantitative research focuses on the 'how many' by collecting numerical data that can be statistically analyzed, often through surveys and experiments. A powerful approach is to use both: start with qualitative research to explore ideas, then use quantitative research to validate those ideas with a larger audience."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l03-f1",
          "front": "Market Research Process",
          "back": "Define Problem → Develop Plan → Collect Information → Analyze Findings → Make Decision."
        },
        {
          "id": "marketing-management-101-l03-f2",
          "front": "Primary vs. Secondary Data",
          "back": "Primary: collected firsthand for your specific project (surveys, interviews). Secondary: already exists (reports, databases)."
        },
        {
          "id": "marketing-management-101-l03-f3",
          "front": "Qualitative vs. Quantitative",
          "back": "Qualitative explores 'why' (interviews, focus groups). Quantitative measures 'how many' (surveys, experiments)."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l03-a1",
          "type": "image",
          "title": "The Market Research Process Flowchart",
          "content": "A flowchart illustrating the five key steps of the market research process, from defining the problem to making a decision."
        }
      ]
    },
    {
      "id": "marketing-management-101-l04",
      "title": "Segmentation, Targeting & Positioning (STP)",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Segment markets using multiple criteria",
        "Evaluate segments for targeting attractiveness",
        "Create positioning statements and perceptual maps"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l04-c1",
          "title": "Market Segmentation",
          "content": "A company can't appeal to everyone. Market segmentation is the process of dividing a broad market into smaller groups (segments) of consumers with similar needs or characteristics. The main ways to segment are: Demographic (age, gender, income), Geographic (country, city, climate), Psychographic (lifestyle, personality, values), and Behavioral (how they use a product, brand loyalty). For example, a car company might have one segment for families needing safety and space, and another for young professionals wanting style and performance."
        },
        {
          "id": "marketing-management-101-l04-c2",
          "title": "Targeting Strategies",
          "content": "After segmenting, a company must choose which groups to target. Common targeting strategies include: Undifferentiated (Mass) Marketing, offering one product to the entire market; Differentiated Marketing, creating different offerings for different segments (e.g., Gap Inc. owns Gap, Old Navy, and Banana Republic); Concentrated (Niche) Marketing, focusing on one specific, smaller segment (e.g., a company making only vegan hiking boots); and Micromarketing, tailoring products to individuals (e.g., Nike's custom shoe builder)."
        },
        {
          "id": "marketing-management-101-l04-c3",
          "title": "Positioning",
          "content": "Positioning is about creating a clear and distinct image of your brand in the customer's mind. It's how you want to be perceived relative to competitors. A positioning statement is a concise summary, often following the format: 'For [target segment], [brand] is the [category] that provides [key benefit].' For example, Volvo positioned itself as the safest car. Marketers often use perceptual maps, which are visual diagrams that show how customers perceive different brands based on key attributes like price and quality. This helps identify opportunities in the market."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l04-f1",
          "front": "STP Process",
          "back": "Segmentation (divide market) → Targeting (choose segments) → Positioning (differentiate in customer minds)."
        },
        {
          "id": "marketing-management-101-l04-f2",
          "front": "Effective Segment Criteria",
          "back": "Measurable, Substantial, Accessible, Differentiable, and Actionable."
        },
        {
          "id": "marketing-management-101-l04-f3",
          "front": "Positioning Statement Template",
          "back": "For [target segment], [brand] is the [category] that provides [key benefit]."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l04-a1",
          "type": "image",
          "title": "Example Perceptual Map",
          "content": "A visual map plotting car brands on two axes (e.g., 'Luxury vs. Economy' and 'Sporty vs. Family') to show their relative positions."
        }
      ]
    },
    {
      "id": "marketing-management-101-l05",
      "title": "Consumer Behavior",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Map the consumer decision-making process",
        "Identify psychological factors affecting purchase behavior",
        "Distinguish between high and low involvement purchases"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l05-c1",
          "title": "The Consumer Decision Process",
          "content": "The Consumer Decision Process outlines the five stages a buyer typically goes through: 1. Problem Recognition: Realizing you have a need (e.g., 'My phone is broken'). 2. Information Search: Gathering information about solutions (e.g., reading online reviews). 3. Evaluation of Alternatives: Comparing different options (e.g., iPhone vs. Samsung). 4. Purchase Decision: Choosing one option and buying it. 5. Post-Purchase Behavior: Evaluating the purchase and feeling either satisfied or experiencing 'buyer's remorse'. Marketers aim to influence each stage of this process."
        },
        {
          "id": "marketing-management-101-l05-c2",
          "title": "Psychological Influences",
          "content": "Several psychological factors influence our buying choices. Motivation is the internal drive to satisfy a need. Perception is how we select, organize, and interpret information to create a meaningful picture of the world. Our attitudes, which are our learned feelings and beliefs about a product, also guide our decisions. A powerful influence is social proof—the tendency to follow the actions of others. This is why online reviews, testimonials, and influencer marketing are so effective."
        },
        {
          "id": "marketing-management-101-l05-c3",
          "title": "Involvement Levels",
          "content": "The effort we put into a purchase decision depends on our involvement level. High-involvement purchases are for expensive, important items like a car or a laptop. They involve significant risk and require extensive research. Low-involvement purchases are for everyday, low-cost items like a candy bar or soap. These are often bought out of habit with little thought. Marketing for high-involvement products must provide detailed information and build trust, while marketing for low-involvement products relies on brand awareness, availability, and eye-catching packaging."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l05-f1",
          "front": "Five-Stage Purchase Decision Process",
          "back": "Problem Recognition → Information Search → Evaluation of Alternatives → Purchase → Post-Purchase Behavior."
        },
        {
          "id": "marketing-management-101-l05-f2",
          "front": "High vs. Low Involvement",
          "back": "High: extensive research, careful evaluation (cars, houses). Low: minimal search, habitual buying (toothpaste). Marketing strategies differ for each."
        },
        {
          "id": "marketing-management-101-l05-f3",
          "front": "Social Proof",
          "back": "The tendency to look to others' behavior to guide our decisions. Powers reviews, recommendations, and influencer marketing."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l05-a1",
          "type": "image",
          "title": "Consumer Decision Process Diagram",
          "content": "A visual diagram showing the five stages of the consumer decision-making process, from problem recognition to post-purchase behavior."
        }
      ]
    },
    {
      "id": "marketing-management-101-l06",
      "title": "Checkpoint: Core Concepts",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "marketing-management-101-l06-q1",
          "text": "A company that first researches what customers want before developing products follows which orientation?",
          "options": [
            {
              "id": "a",
              "text": "Production concept"
            },
            {
              "id": "b",
              "text": "Selling concept"
            },
            {
              "id": "c",
              "text": "Marketing concept"
            },
            {
              "id": "d",
              "text": "Product concept"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The marketing concept starts with customer needs and works backward to develop products — unlike the product concept (build a better mousetrap) or selling concept (push what we make)."
        },
        {
          "id": "marketing-management-101-l06-q2",
          "text": "Setting a low initial price to quickly capture market share is called:",
          "options": [
            {
              "id": "a",
              "text": "Price skimming"
            },
            {
              "id": "b",
              "text": "Penetration pricing"
            },
            {
              "id": "c",
              "text": "Premium pricing"
            },
            {
              "id": "d",
              "text": "Value-based pricing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Penetration pricing sets a low initial price to rapidly attract customers and build market share — the opposite of skimming, which starts high."
        },
        {
          "id": "marketing-management-101-l06-q3",
          "text": "Nike targeting 'achiever' personalities is an example of which segmentation basis?",
          "options": [
            {
              "id": "a",
              "text": "Demographic"
            },
            {
              "id": "b",
              "text": "Geographic"
            },
            {
              "id": "c",
              "text": "Psychographic"
            },
            {
              "id": "d",
              "text": "Behavioral"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Psychographic segmentation divides markets based on lifestyle, personality, values, and attitudes — targeting 'achievers' is a personality/lifestyle-based psychographic approach."
        },
        {
          "id": "marketing-management-101-l06-q4",
          "text": "Post-purchase dissonance (buyer's remorse) occurs at which stage?",
          "options": [
            {
              "id": "a",
              "text": "Problem recognition"
            },
            {
              "id": "b",
              "text": "Information search"
            },
            {
              "id": "c",
              "text": "Evaluation of alternatives"
            },
            {
              "id": "d",
              "text": "Post-purchase behavior"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Post-purchase behavior is when consumers assess their satisfaction — dissonance (doubt about the choice) often occurs with high-involvement purchases."
        }
      ]
    },
    {
      "id": "marketing-management-101-l07",
      "title": "B2B vs. B2C Marketing",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Contrast B2B and B2C marketing",
        "Identify key characteristics of business markets",
        "Describe the roles in a B2B buying center"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l07-c1",
          "title": "Key Differences",
          "content": "Marketing can be broadly split into two contexts: B2C (Business-to-Consumer) and B2B (Business-to-Business). B2C marketing targets individual consumers for personal use (e.g., Nike selling shoes to you). B2B marketing targets other organizations that use products to run their business or create other products (e.g., Intel selling computer chips to Dell). B2B markets typically have fewer but larger buyers, longer sales cycles, and more complex decision-making processes."
        },
        {
          "id": "marketing-management-101-l07-c2",
          "title": "Characteristics of Business Markets",
          "content": "B2B markets have unique features. Derived demand is a key concept: the demand for business products is derived from the demand for consumer goods. For example, a steel company's sales depend on car and construction demand. Relationships are also critical in B2B. Building long-term trust with clients is often more important than mass advertising. The sales process is more professional and often involves formal proposals and negotiations."
        },
        {
          "id": "marketing-management-101-l07-c3",
          "title": "The Buying Center",
          "content": "Unlike a single consumer, B2B purchase decisions are often made by a group called a buying center. This group includes several roles: the Initiator (who first suggests the purchase), the Influencer (who provides technical expertise), the Gatekeeper (who controls the flow of information), the Decider (who has the formal authority to approve the purchase), the Buyer (who handles the logistics of the order), and the User (who will actually use the product). Marketers must understand and address the needs of each person in the buying center."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l07-f1",
          "front": "B2B vs. B2C",
          "back": "B2B (Business-to-Business): Sells to other organizations. Fewer, larger buyers; complex decisions. B2C (Business-to-Consumer): Sells to individuals for personal use."
        },
        {
          "id": "marketing-management-101-l07-f2",
          "front": "Derived Demand",
          "back": "A core B2B concept where the demand for a business product (like steel) depends on the demand for a consumer product (like cars)."
        },
        {
          "id": "marketing-management-101-l07-f3",
          "front": "Buying Center Roles",
          "back": "A group of people involved in a B2B purchase decision, including Initiators, Influencers, Deciders, Buyers, and Users."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l07-a1",
          "type": "image",
          "title": "B2B vs. B2C Comparison Table",
          "content": "A side-by-side table comparing key characteristics of B2B and B2C markets, such as audience, decision process, and relationship focus."
        }
      ]
    },
    {
      "id": "marketing-management-101-l08",
      "title": "Marketing Strategy & Campaign Analysis",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Define marketing strategy and its components",
        "Outline the steps in a marketing plan",
        "Analyze a marketing campaign using a structured framework"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l08-c1",
          "title": "What is Marketing Strategy?",
          "content": "A marketing strategy is a company's long-term game plan for reaching its business goals. It's about making deliberate choices. The foundation of any good strategy is Segmentation, Targeting, and Positioning (STP). Once a company decides who to serve (targeting) and how it wants to be perceived (positioning), it uses the marketing mix (the 4Ps) as tactics to execute that strategy. Strategy is the 'why' and 'what,' while tactics are the 'how'."
        },
        {
          "id": "marketing-management-101-l08-c2",
          "title": "The Marketing Plan",
          "content": "The strategy is formalized in a marketing plan. A typical plan includes: 1. Situation Analysis: Where are we now? (Analyzing the market, competitors, and our own strengths/weaknesses - SWOT). 2. Objectives: Where do we want to go? (Setting specific, measurable goals). 3. Strategy: How will we get there? (Defining the STP). 4. Tactics: What specific actions will we take? (Detailing the 4Ps). 5. Budget: How much will it cost? 6. Controls: How will we track progress?"
        },
        {
          "id": "marketing-management-101-l08-c3",
          "title": "Analyzing a Marketing Campaign",
          "content": "We can analyze the effectiveness of a marketing campaign by deconstructing it. A simple framework is to ask: Goal: What was the campaign trying to achieve? (e.g., raise awareness, drive sales). Audience: Who was it trying to reach? Message: What was the core message? Media: Where did the campaign run? (e.g., TV, social media, events). Results: How did it perform? (e.g., sales lift, social media engagement). Let's apply this to a famous campaign like Spotify's 'Wrapped'."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l08-f1",
          "front": "Strategy vs. Tactics",
          "back": "Strategy is the long-term plan (the 'why'), built on STP. Tactics are the short-term actions used to execute the strategy (the 4Ps)."
        },
        {
          "id": "marketing-management-101-l08-f2",
          "front": "Marketing Plan Components",
          "back": "Situation Analysis (SWOT) → Objectives (SMART goals) → Strategy (STP) → Tactics (4Ps) → Budget → Controls."
        },
        {
          "id": "marketing-management-101-l08-f3",
          "front": "Campaign Analysis Framework",
          "back": "Goal (What?), Audience (Who?), Message (What?), Media (Where?), Results (How well?)."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l08-a1",
          "type": "practice",
          "title": "Guided Campaign Analysis",
          "content": "Choose a recent marketing campaign and analyze it using the Goal, Audience, Message, Media, and Results framework."
        }
      ]
    },
    {
      "id": "marketing-management-101-l09",
      "title": "Final Assessment: Marketing Fundamentals",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "marketing-management-101-l09-q1",
          "text": "Which is NOT one of the 7Ps of services marketing?",
          "options": [
            {
              "id": "a",
              "text": "People"
            },
            {
              "id": "b",
              "text": "Process"
            },
            {
              "id": "c",
              "text": "Profit"
            },
            {
              "id": "d",
              "text": "Physical evidence"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The 7Ps are Product, Price, Place, Promotion, People, Process, and Physical Evidence. Profit is an outcome of effective marketing, not a mix element."
        },
        {
          "id": "marketing-management-101-l09-q2",
          "text": "A positioning statement should include all EXCEPT:",
          "options": [
            {
              "id": "a",
              "text": "Target segment"
            },
            {
              "id": "b",
              "text": "Key benefit"
            },
            {
              "id": "c",
              "text": "Reason to believe"
            },
            {
              "id": "d",
              "text": "Exact price point"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A positioning statement specifies target segment, brand category, key benefit, and reason to believe — not the exact price, which is a tactical marketing mix decision."
        },
        {
          "id": "marketing-management-101-l09-q3",
          "text": "Demand for industrial steel depends on demand for cars and buildings. This is called:",
          "options": [
            {
              "id": "a",
              "text": "Elastic demand"
            },
            {
              "id": "b",
              "text": "Derived demand"
            },
            {
              "id": "c",
              "text": "Inelastic demand"
            },
            {
              "id": "d",
              "text": "Seasonal demand"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Derived demand means B2B demand is derived from (depends on) consumer market demand — steel demand depends on demand for end products like cars and buildings."
        },
        {
          "id": "marketing-management-101-l09-q4",
          "text": "Spotify creating personalized playlists for each user is an example of which targeting strategy?",
          "options": [
            {
              "id": "a",
              "text": "Undifferentiated marketing"
            },
            {
              "id": "b",
              "text": "Differentiated marketing"
            },
            {
              "id": "c",
              "text": "Concentrated marketing"
            },
            {
              "id": "d",
              "text": "Micromarketing"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Micromarketing tailors the offering to individual customers — Spotify's algorithmic personalization creates unique playlists for every single user."
        }
      ]
    }
  ]
};
