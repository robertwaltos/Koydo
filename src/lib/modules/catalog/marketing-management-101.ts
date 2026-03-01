import type { LearningModule } from "@/lib/modules/types";

export const MarketingManagement101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Marketing is the process of identifying, anticipating, and satisfying customer needs profitably. It goes far beyond advertising — it encompasses product design, pricing, distribution, branding, customer experience, and relationship building. Philip Kotler defines it as 'creating, communicating, and delivering value to customers and managing customer relationships in ways that benefit the organization and its stakeholders.'"
        },
        {
          "id": "marketing-management-101-l01-c2",
          "title": "From Product to Customer Orientation",
          "content": "Marketing thinking evolved through five eras: Production concept (make it cheap and available), Product concept (make it better), Selling concept (push it harder), Marketing concept (understand what customers want first), and Societal marketing concept (consider society's long-term welfare). Modern firms are customer-centric — Amazon's obsession with customer experience, Apple's focus on design delight, and Zappos' legendary service all demonstrate the marketing concept in practice."
        },
        {
          "id": "marketing-management-101-l01-c3",
          "title": "Value Creation",
          "content": "Marketing creates value through the exchange process. Customer value equals perceived benefits minus perceived costs. A firm that delivers superior value captures customers willing to pay premium prices (Apple) or attracts massive volume at competitive prices (Costco). The customer lifetime value (CLV) perspective recognizes that a loyal customer represents years of purchases, referrals, and reduced acquisition costs — far more valuable than a single transaction."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l01-f1",
          "front": "Marketing",
          "back": "The process of creating, communicating, and delivering value to customers — encompasses product, price, distribution, branding, and relationships"
        },
        {
          "id": "marketing-management-101-l01-f2",
          "front": "Five eras of marketing",
          "back": "Production → Product → Selling → Marketing (customer-centric) → Societal marketing (long-term welfare)"
        },
        {
          "id": "marketing-management-101-l01-f3",
          "front": "Customer Lifetime Value (CLV)",
          "back": "The total value a customer generates over their entire relationship with a firm — purchases, referrals, and reduced acquisition costs"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Product encompasses everything the customer receives: the core benefit, the actual product (features, quality, design, branding, packaging), and augmented elements (warranty, customer service, delivery). Products move through a lifecycle — introduction, growth, maturity, decline — each stage requiring different marketing strategies. Product decisions include: what to offer, how to brand it, what features to include, and how to package it."
        },
        {
          "id": "marketing-management-101-l02-c2",
          "title": "Price, Place, and Promotion",
          "content": "Price is what customers pay — it directly affects revenue and signals quality. Pricing strategies include penetration (low price to gain share), skimming (high initial price for innovators), and value-based pricing (set by perceived customer value). Place (distribution) gets the product to the customer — direct sales, retailers, e-commerce, or distributors. Promotion communicates value through advertising, public relations, sales promotions, personal selling, and increasingly digital and social media channels."
        },
        {
          "id": "marketing-management-101-l02-c3",
          "title": "The Extended Mix: 7Ps for Services",
          "content": "Services — intangible, inseparable from production, variable, and perishable — require three additional Ps. People: employees who deliver the service are part of the product (a rude barista ruins the coffee shop experience). Process: the systems and flow of activities (how Starbucks consistently produces your order). Physical evidence: tangible cues that signal quality (restaurant décor, airline seating, hospital cleanliness). All seven Ps must be aligned for a coherent market offering."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l02-f1",
          "front": "Marketing Mix (4Ps)",
          "back": "Product (what you sell), Price (what you charge), Place (where you sell), Promotion (how you communicate) — all must be aligned"
        },
        {
          "id": "marketing-management-101-l02-f2",
          "front": "Product lifecycle stages",
          "back": "Introduction → Growth → Maturity → Decline — each stage needs different marketing strategies (e.g., heavy promotion at intro, differentiation at maturity)"
        },
        {
          "id": "marketing-management-101-l02-f3",
          "front": "7Ps for services",
          "back": "The 4Ps plus People (service employees), Process (service delivery systems), and Physical Evidence (tangible quality cues)"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "marketing-management-101-l03",
      "title": "Segmentation, Targeting & Positioning",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Segment markets using multiple criteria",
        "Evaluate segments for targeting attractiveness",
        "Create positioning statements and perceptual maps"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l03-c1",
          "title": "Market Segmentation",
          "content": "Market segmentation divides a broad market into distinct subgroups with shared characteristics. Segmentation bases include: demographic (age, income, education), geographic (country, city, climate), psychographic (lifestyle, personality, values — Nike targets achievers; Patagonia targets eco-conscious adventurers), and behavioral (usage rate, brand loyalty, benefits sought). Effective segments are measurable, substantial, accessible, differentiable, and actionable."
        },
        {
          "id": "marketing-management-101-l03-c2",
          "title": "Targeting Strategies",
          "content": "After segmenting, firms choose targeting strategies: undifferentiated (mass marketing — one offering for all), differentiated (multiple segments with tailored offerings — Toyota with Lexus, Toyota, Scion), concentrated (one niche — Rolls-Royce), or micromarketing (individual customization — Spotify's personalized playlists). The choice depends on firm resources, market variability, and competitive landscape."
        },
        {
          "id": "marketing-management-101-l03-c3",
          "title": "Positioning",
          "content": "Positioning is how you want customers to perceive your brand relative to competitors. A positioning statement follows the template: 'For [target segment], [brand] is the [category] that [key benefit] because [reason to believe].' Volvo positions as the safest car; FedEx as the most reliable shipper. Perceptual maps plot brands on two key dimensions (price vs. quality, for example) to visualize competitive positions and find unoccupied spaces."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l03-f1",
          "front": "STP process",
          "back": "Segmentation (divide market) → Targeting (choose segments) → Positioning (differentiate in customer minds)"
        },
        {
          "id": "marketing-management-101-l03-f2",
          "front": "Effective segment criteria",
          "back": "Measurable, Substantial, Accessible, Differentiable, and Actionable"
        },
        {
          "id": "marketing-management-101-l03-f3",
          "front": "Positioning statement template",
          "back": "For [target], [brand] is the [category] that [benefit] because [reason to believe]"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "marketing-management-101-l04",
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
          "id": "marketing-management-101-l04-c1",
          "title": "The Purchase Decision Process",
          "content": "Consumers typically follow five stages: (1) Problem recognition — becoming aware of a need. (2) Information search — seeking alternatives (internal memory first, then external sources). (3) Evaluation of alternatives — comparing options against criteria. (4) Purchase decision — choosing and buying. (5) Post-purchase evaluation — satisfaction or regret. Marketers can influence each stage: triggering need recognition through ads, providing information via content marketing, and reducing post-purchase dissonance through follow-up communications."
        },
        {
          "id": "marketing-management-101-l04-c2",
          "title": "Psychological Influences",
          "content": "Consumer behavior is shaped by perception (how we interpret stimuli — brands spend billions on sensory marketing), motivation (Maslow's hierarchy: physiological → safety → social → esteem → self-actualization), attitudes (learned predispositions toward products), and learning (through experience and association). Social proof — seeing others buy or recommend — is one of the most powerful influences, which is why reviews and influencer marketing are so effective."
        },
        {
          "id": "marketing-management-101-l04-c3",
          "title": "Involvement Levels",
          "content": "High-involvement purchases (cars, houses, education) involve extensive research, careful evaluation, and significant risk. Consumers follow the full decision process. Low-involvement purchases (toothpaste, snacks) involve minimal search and habitual buying. Marketing strategies differ: high-involvement products need detailed information and trust-building; low-involvement products need repetitive exposure, shelf placement, and simple messaging. Brand loyalty can shortcut the decision process at any involvement level."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l04-f1",
          "front": "Five-stage purchase decision process",
          "back": "Problem recognition → Information search → Evaluation → Purchase → Post-purchase evaluation"
        },
        {
          "id": "marketing-management-101-l04-f2",
          "front": "High vs. low involvement",
          "back": "High: extensive research, careful evaluation (cars, houses). Low: minimal search, habitual buying (toothpaste). Marketing strategies differ for each."
        },
        {
          "id": "marketing-management-101-l04-f3",
          "front": "Social proof",
          "back": "People look to others' behavior to guide decisions — reviews, recommendations, and influencer endorsements are powerful because of this principle"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "marketing-management-101-l05",
      "title": "Checkpoint: Marketing Fundamentals",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "marketing-management-101-l05-q1",
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
          "id": "marketing-management-101-l05-q2",
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
          "id": "marketing-management-101-l05-q3",
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
          "id": "marketing-management-101-l05-q4",
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
              "text": "Post-purchase evaluation"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Post-purchase evaluation is when consumers assess their satisfaction — dissonance (doubt about the choice) often occurs with high-involvement purchases."
        }
      ]
    },
    {
      "id": "marketing-management-101-l06",
      "title": "B2B Marketing & Market Research",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Contrast B2B and B2C marketing characteristics",
        "Design a basic market research process",
        "Interpret qualitative and quantitative research data"
      ],
      "chunks": [
        {
          "id": "marketing-management-101-l06-c1",
          "title": "B2B vs. B2C Marketing",
          "content": "Business-to-business marketing differs from consumer marketing in key ways: fewer but larger buyers, professional purchasing processes, derived demand (B2B demand depends on consumer demand), longer sales cycles, multiple decision-makers (buying center: initiator, gatekeeper, influencer, decider, buyer, user), and rational evaluation criteria (though emotions still matter). Relationship-building and technical expertise are more important than mass advertising."
        },
        {
          "id": "marketing-management-101-l06-c2",
          "title": "The Market Research Process",
          "content": "Market research follows six steps: (1) Define the problem and objectives. (2) Develop the research plan (what data, from whom, how). (3) Collect information — primary data (surveys, interviews, experiments, observation) or secondary data (existing reports, databases). (4) Analyze the data. (5) Present findings. (6) Make decisions. Common pitfalls include: asking leading questions, sampling bias, confirmation bias in interpretation, and acting on insufficient data."
        },
        {
          "id": "marketing-management-101-l06-c3",
          "title": "Qualitative vs. Quantitative Research",
          "content": "Qualitative research explores 'why' through focus groups, depth interviews, and ethnographic observation — rich insights but not statistically generalizable. Quantitative research measures 'how many' through surveys, experiments, and data analysis — statistically robust but may miss nuance. The best approach often combines both: qualitative research first to identify key themes, then quantitative to measure their prevalence. Modern marketing also uses big data and A/B testing for rapid, data-driven insights."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-101-l06-f1",
          "front": "B2B buying center roles",
          "back": "Initiator, Gatekeeper, Influencer, Decider, Buyer, User — multiple people involved in organizational purchasing"
        },
        {
          "id": "marketing-management-101-l06-f2",
          "front": "Primary vs. secondary data",
          "back": "Primary: collected firsthand for this study (surveys, interviews). Secondary: pre-existing data (reports, databases, public records)"
        },
        {
          "id": "marketing-management-101-l06-f3",
          "front": "Qualitative vs. quantitative research",
          "back": "Qualitative: explores 'why' (focus groups, interviews). Quantitative: measures 'how many' (surveys, experiments). Best results combine both."
        }
      ]
    },
    {
      "id": "marketing-management-101-l07",
      "title": "Final Assessment: Marketing Fundamentals",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "marketing-management-101-l07-q1",
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
          "id": "marketing-management-101-l07-q2",
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
          "id": "marketing-management-101-l07-q3",
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
          "id": "marketing-management-101-l07-q4",
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
