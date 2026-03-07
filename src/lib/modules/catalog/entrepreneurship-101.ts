import type { LearningModule } from "@/lib/modules/types";

export const entrepreneurship_101_Module: LearningModule = {
  "id": "entrepreneurship-101",
  "title": "Entrepreneurship Fundamentals",
  "description": "Master the foundations of building a startup — from identifying real customer problems and validating solutions to crafting business models, securing funding, and scaling a venture.",
  "subject": "Entrepreneurship",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "startup",
    "business",
    "enriched-from-epub"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Identify genuine customer pain points using structured discovery frameworks",
    "Apply customer development and validation techniques before building a product",
    "Design and evaluate business models using the Lean Canvas and Business Model Canvas",
    "Build and test a minimum viable product using Lean Startup methodology",
    "Articulate a compelling investor pitch and understand key funding mechanisms",
    "Analyze unit economics including CAC, LTV, burn rate, and runway",
    "Plan a scaling strategy encompassing growth levers, hiring, and culture"
  ],
  "lessons": [
    {
      "id": "entrepreneurship-101-l01",
      "title": "Problem Discovery and Customer Pain Points",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Distinguish between real customer problems and assumed problems",
        "Apply the Jobs-to-be-Done framework to uncover unmet needs",
        "Evaluate problem severity using frequency, intensity, and willingness-to-pay criteria"
      ],
      "chunks": [
        {
          "id": "entrepreneurship-101-l01-c1",
          "title": "Why Problems Come First",
          "content": "When starting a new business, one of the most important things to remember is that many new companies fail because they create products or services that people do not actually want or need. According to research from CB Insights, the leading reason for business failure is a lack of market demand, which is even more significant than running out of money. This means that before you even think about designing a product, it is essential to take the time to understand the problems that your potential customers are facing.\n\nFor instance, let’s look at the story of Airbnb. The founders of Airbnb didn’t set out to create a technology platform right away. Instead, they noticed that many people who were attending conferences in San Francisco were having a hard time finding affordable places to stay. To see if their idea could work, they decided to test it by renting out air mattresses in their own apartment. This simple action helped them understand the needs of their customers better.\n\nThe key takeaway from this example is that it is crucial to focus on understanding the problem before jumping to a solution. By falling in love with the problem, you can create a product or service that truly meets the needs of your customers. This approach not only increases your chances of success but also helps you build a business that makes a real difference in people’s lives. So, remember, always start with the problem, and the right solution will follow!",
          "visualPrompt": "A split screen showing a frustrated person struggling with a poorly designed tool on the left, and a lightbulb illuminating over a notebook on the right."
        },
        {
          "id": "entrepreneurship-101-l01-c2",
          "title": "The Jobs-to-be-Done Framework",
          "content": "Clayton Christensen introduced a very helpful idea called the Jobs-to-be-Done (JTBD) framework. This concept suggests that customers 'hire' products to help them accomplish specific tasks or 'jobs' in their lives. These jobs can have different aspects: functional, emotional, and social.\n\nLet's break these down a bit. The functional aspect is about what the product does. For example, when someone buys a coffee during their morning commute, they are looking for caffeine, which is the functional benefit. However, there’s more to it than just that. The emotional aspect refers to how the product makes the customer feel. In this case, the coffee provides a comforting routine that helps start their day on a positive note. Lastly, the social aspect is about how the product affects their relationships with others. For instance, enjoying a coffee can make someone feel more productive and ready to tackle the day, which can influence how they interact with colleagues or friends.\n\nAn interesting study showed that milkshake sales at a fast-food restaurant doubled after researchers discovered that commuters were 'hiring' milkshakes to make their boring drives more enjoyable, rather than just seeing them as a dessert. This means that the milkshake was not just a treat; it was a way to add excitement to their daily routine. This framework encourages entrepreneurs to ask deeper questions, such as 'What progress is the customer trying to make?' instead of just focusing on what features they should build into their products. By understanding the true needs and desires of customers, entrepreneurs can create solutions that really resonate with them and improve their lives in meaningful ways.",
          "visualPrompt": "A person buying a coffee, with thought bubbles showing functional (caffeine), emotional (comfort), and social (productivity) benefits."
        },
        {
          "id": "entrepreneurship-101-l01-c3",
          "title": "Evaluating Problem Severity",
          "content": "Not every problem is suitable for solving in a business context. When thinking about starting a business, it's essential to identify a strong problem that can be addressed effectively. To determine if a problem is worth pursuing, it must pass three important tests that help evaluate its potential:\n\n1. **Frequency**: This refers to how often customers encounter the problem. Problems that occur daily are generally more significant and pressing than those that happen only once a year. For instance, if someone struggles with a daily task, it’s likely that they would be more interested in a solution than if it were a rare inconvenience.\n2. **Intensity**: This test looks at how severe or painful the problem is when it occurs. A severe issue, like a migraine, is much more impactful than a mild annoyance. If the problem causes significant discomfort or frustration, customers are more likely to seek out a solution.\n3. **Willingness-to-pay**: This aspect examines whether customers are already investing money, time, or effort to address the issue. If people are using spreadsheets, hiring assistants, or trying to piece together different applications to manage a problem, it indicates that there is a real market demand for a better solution.\n\nA great example of this is Dropbox. The company found success because many individuals were already emailing files to themselves, which highlighted a common and frustrating experience. This demonstrated a high-frequency and high-friction pain point that Dropbox was able to solve effectively. By understanding these tests, aspiring entrepreneurs can better identify valuable problems to tackle in their business ventures.",
          "visualPrompt": "A thermometer graphic labeled 'Problem Severity' with three indicators: Frequency, Intensity, and Willingness-to-pay."
        },
        {
          "id": "entrepreneurship-101-l01-c4",
          "title": "Aulet's 24 Steps: A Systematic Framework",
          "content": "In his insightful book 'Disciplined Entrepreneurship,' Bill Aulet presents a comprehensive 24-step framework designed to transform the journey of entrepreneurship into a structured and teachable process. This framework is particularly valuable for aspiring entrepreneurs who want to understand the essential steps needed to build a successful business. The journey begins with Step 0, which encourages you to reflect on your motivations. Are you inspired by a unique idea, a groundbreaking technology, or perhaps a deep passion for a particular field? Understanding your driving force is crucial as it sets the foundation for your entrepreneurial adventure.\n\nOnce you have identified your motivation, the framework guides you through several important steps. Step 1 focuses on Market Segmentation, where you learn to identify different groups of potential customers. This is followed by Step 2, where you select a Beachhead Market, which is essentially the first market segment you will target. This step is vital because it allows you to concentrate your efforts on a specific group of customers who are most likely to benefit from your product or service.\n\nNext, in Step 3, you create an End User Profile, which helps you understand the characteristics and needs of your ideal customer. This is followed by Step 4, where you calculate the Total Addressable Market (TAM), giving you a clearer picture of the potential size of your market. Finally, in Step 5, you develop a detailed Persona, which is a fictional representation of your ideal customer based on real data and insights.\n\nThese early steps are essential because they ensure that you, as a founder, are laser-focused on a specific customer before you start designing any solutions. Bill Aulet emphasizes a key point: 'The single necessary and sufficient condition for a business is a paying customer.' This means that without customers who are willing to pay for your product or service, your business cannot succeed. The 24 Steps framework provides a clear and systematic roadmap that complements the Lean Startup's experimental approach, allowing you to conduct thorough market analysis and make informed decisions as you move forward in your entrepreneurial journey.",
          "visualPrompt": "A winding roadmap with 24 stepping stones, highlighting the first few steps like Market Segmentation and Beachhead Market."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-101-l01-f1",
          "front": "Jobs-to-be-Done (JTBD)",
          "back": "A framework stating customers 'hire' products to make progress — jobs have functional, emotional, and social dimensions"
        },
        {
          "id": "entrepreneurship-101-l01-f2",
          "front": "Top reason startups fail",
          "back": "No market need — building something nobody wants, per CB Insights analysis of 100+ startup post-mortems"
        },
        {
          "id": "entrepreneurship-101-l01-f3",
          "front": "Problem severity criteria",
          "back": "Frequency (how often), Intensity (how painful), Willingness-to-pay (are customers already using workarounds?)"
        },
        {
          "id": "entrepreneurship-101-l01-f4",
          "front": "Problem-first mindset",
          "back": "Start by deeply understanding the customer pain point before designing any solution — fall in love with the problem, not the solution"
        },
        {
          "id": "entrepreneurship-101-l01-f5",
          "front": "Aulet's 24 Steps framework",
          "back": "Bill Aulet's 'Disciplined Entrepreneurship' breaks entrepreneurship into 24 teachable steps — starting with Market Segmentation, Beachhead Market selection, and End User Profiling before any product is built"
        },
        {
          "id": "entrepreneurship-101-l01-f6",
          "front": "Beachhead Market (Aulet Step 2)",
          "back": "Select ONE market from your top 6–12 opportunities and ignore the rest. Focusing on a single beachhead market maximizes your odds — pursuing multiple markets simultaneously dilutes effort and increases failure risk"
        }
      ],
      "learningAids": [
        {
          "id": "entrepreneurship-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept.",
          "visualPrompt": "A minimalist infographic showing a magnifying glass over a puzzle piece, representing problem discovery."
        }
      ]
    },
    {
      "id": "entrepreneurship-101-l02",
      "title": "Customer Development and Validation",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Conduct effective customer discovery interviews using open-ended questions",
        "Distinguish between vanity signals and genuine validation evidence",
        "Design a concierge or Wizard-of-Oz test to validate demand before building"
      ],
      "chunks": [
        {
          "id": "entrepreneurship-101-l02-c1",
          "title": "The Mom Test: Asking the Right Questions",
          "content": "In his insightful book 'The Mom Test,' Rob Fitzpatrick shares an important lesson for anyone thinking about starting a business: many entrepreneurs often ask questions that lead to misleading answers. This can happen even when asking someone close to you, like your mom, who might say your idea is amazing just to support you! To get the most honest and useful feedback, it’s crucial to focus on what people have actually done in the past instead of what they might do in the future.\n\nFor instance, instead of asking, 'Would you use an app that does X?' which is a hypothetical question, you should ask, 'How do you currently solve this problem?' This approach encourages people to share their real experiences and challenges. Good questions can help you uncover valuable information. You might ask, 'Can you tell me about the last time you faced [specific problem]?' or 'What solutions have you tried in the past?' These types of questions are more likely to reveal the truth about the problem you’re trying to solve.\n\nIf a customer hasn’t actively tried to address the issue, it probably means that the problem isn’t serious enough for them to want a solution. Understanding this can help you determine whether your business idea is worth pursuing or if you need to rethink your approach. By asking the right questions, you can gather the insights necessary to build a successful business that truly meets the needs of your customers.",
          "visualPrompt": "A teenager asking their mom about an app idea, with the mom giving a thumbs up, contrasted with a scene of asking a stranger about their past behavior."
        },
        {
          "id": "entrepreneurship-101-l02-c2",
          "title": "Validation Evidence Hierarchy",
          "content": "When you're trying to find out if your business idea is good, it's important to understand that not all feedback is equally valuable. Here’s a helpful way to think about the different types of feedback you might receive, ranked from the least helpful to the most helpful:\n\n1. **Compliments**: When someone says, 'That’s a cool idea,' this kind of comment is nice to hear, but it doesn’t really mean much. It’s almost like a compliment without any real commitment.\n2. **Waitlists**: If people sign up for a waitlist, that’s a bit better. It shows some interest, but since they don’t have to put anything on the line, it’s still not a strong indicator of true demand.\n3. **Interviews**: When people agree to share their email and take the time to talk with you in an interview, that’s a moderate signal. It shows they are interested enough to engage further.\n4. **Pre-orders**: If people are willing to pre-order your product or put down a deposit, that’s a strong signal! It means they are ready to commit some of their money, which is a good sign of interest.\n5. **Paid Prototypes**: The strongest signal you can get is when people actually pay for a rough version of your product, like a prototype. This is considered the gold standard of validation because it shows they believe in your idea enough to invest in it.\n\nA great example of this is the Pebble Watch, which raised an incredible $10 million from 69,000 backers on Kickstarter before it was even fully developed. This clearly demonstrated that there was a real demand for the product. So, always strive to gather the strongest validation possible before you dive into developing your idea further. This way, you can be more confident that your efforts will pay off!",
          "visualPrompt": "A pyramid showing validation signals, from 'Compliments' at the bottom to 'Pre-orders' and 'Paid Prototypes' at the top."
        },
        {
          "id": "entrepreneurship-101-l02-c3",
          "title": "Concierge and Wizard-of-Oz Testing",
          "content": "A concierge minimum viable product (MVP) is a way to test your business idea by providing the value of your product or service directly to a small group of customers, but in a manual way. For example, the company Food on the Table began its journey by having the founder personally visit customers' homes. During these visits, he would help them plan their meals and shop for groceries, all before any software was developed. This hands-on approach allowed him to understand what customers really wanted and needed.\n\nOn the other hand, a Wizard-of-Oz MVP gives the impression that the service is automated, but in reality, it is supported by people working behind the scenes. A great example of this is Zappos, which wanted to see if people would buy shoes online. To test this, they took pictures of shoes that were available in local stores and posted them online. When customers placed orders, they would go to the store, buy the shoes, and then ship them to the customers. This method helped them learn about customer demand without spending a lot of money.\n\nBoth of these strategies are valuable because they allow you to validate whether there is a demand for your product or service at a low cost. The most important thing to remember is that the goal is to learn about your customers and their preferences. You should focus on gathering insights and understanding what they truly value before you think about expanding your business. Only after you have confirmed that customers appreciate what you are offering should you consider scaling up your operations.",
          "visualPrompt": "A split illustration: one side shows a founder personally delivering groceries (Concierge), the other shows a robotic storefront with a human pulling levers behind a curtain (Wizard of Oz)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-101-l02-a1",
          "title": "Sort Validation Signals",
          "type": "sorting_buckets",
          "buckets": [
            "Weak Signal",
            "Strong Signal"
          ],
          "items": [
            {
              "text": "A friend says 'That's a great idea!'",
              "bucket": "Weak Signal"
            },
            {
              "text": "A stranger pre-pays $50 for early access",
              "bucket": "Strong Signal"
            },
            {
              "text": "500 people sign up for a free waitlist",
              "bucket": "Weak Signal"
            },
            {
              "text": "A pilot customer uses the MVP daily for two weeks",
              "bucket": "Strong Signal"
            },
            {
              "text": "An investor says the market is big",
              "bucket": "Weak Signal"
            },
            {
              "text": "A customer switches from their current tool to your prototype",
              "bucket": "Strong Signal"
            },
            {
              "text": "A survey shows 80% of respondents 'like' the concept",
              "bucket": "Weak Signal"
            },
            {
              "text": "A business signs a letter of intent to purchase",
              "bucket": "Strong Signal"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-101-l02-f1",
          "front": "The Mom Test",
          "back": "Ask about past behavior and real problems, not hypothetical interest — 'How do you currently solve this?' instead of 'Would you use this?'"
        },
        {
          "id": "entrepreneurship-101-l02-f2",
          "front": "Concierge MVP",
          "back": "Delivering the value proposition manually to early customers to test demand before building technology — e.g., Food on the Table"
        },
        {
          "id": "entrepreneurship-101-l02-f3",
          "front": "Wizard-of-Oz MVP",
          "back": "A product that appears automated to the user but is powered by humans behind the scenes — e.g., early Zappos"
        },
        {
          "id": "entrepreneurship-101-l02-f4",
          "front": "Strongest validation signal",
          "back": "Customers paying real money for a rough prototype — far more meaningful than verbal interest or free signups"
        },
        {
          "id": "entrepreneurship-101-l02-f5",
          "front": "End User Profile & Persona (Aulet Steps 3 & 5)",
          "back": "Build a detailed profile of your target end user, then create a specific Persona — a single archetypal customer who guides all product decisions. The Persona tells you what to do and what NOT to do"
        },
        {
          "id": "entrepreneurship-101-l02-f6",
          "front": "Early adopter validation (Cooper)",
          "back": "Early adopters who pre-order based on just a landing page and video provide the strongest lean validation — their feedback forces you to simplify, focus, and find what truly moves the needle"
        }
      ],
      "learningAids": [
        {
          "id": "entrepreneurship-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning.",
          "visualPrompt": "A notebook icon with a pencil, indicating a practical exercise."
        }
      ]
    },
    {
      "id": "entrepreneurship-101-l03",
      "title": "Problem Discovery & Validation Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of problem discovery, JTBD, and customer validation techniques"
      ],
      "questions": [
        {
          "id": "entrepreneurship-101-l03-q1",
          "text": "According to CB Insights, the number-one reason startups fail is:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Running out of cash"
            },
            {
              "id": "b",
              "text": "No market need — building something nobody wants"
            },
            {
              "id": "c",
              "text": "Hiring the wrong team"
            },
            {
              "id": "d",
              "text": "Legal or regulatory issues"
            }
          ],
          "correctOptionId": "b",
          "explanation": "CB Insights consistently finds 'no market need' as the top failure cause, even ahead of running out of money."
        },
        {
          "id": "entrepreneurship-101-l03-q2",
          "text": "The Jobs-to-be-Done framework focuses on:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The technical features of a product"
            },
            {
              "id": "b",
              "text": "The progress a customer is trying to make in their life"
            },
            {
              "id": "c",
              "text": "Competitor analysis and market share"
            },
            {
              "id": "d",
              "text": "Pricing strategy optimization"
            }
          ],
          "correctOptionId": "b",
          "explanation": "JTBD says customers 'hire' products to accomplish a job — understanding that job (functional, emotional, social) drives innovation."
        },
        {
          "id": "entrepreneurship-101-l03-q3",
          "text": "Which is the strongest form of customer validation?",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A friend saying 'Great idea!'"
            },
            {
              "id": "b",
              "text": "High waitlist signups"
            },
            {
              "id": "c",
              "text": "Customers paying for a rough prototype"
            },
            {
              "id": "d",
              "text": "Positive survey responses"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Real money is the strongest validation signal — it proves willingness to pay, unlike free signups or verbal encouragement."
        },
        {
          "id": "entrepreneurship-101-l03-q4",
          "text": "The Mom Test recommends founders should:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Ask friends and family if they would buy the product"
            },
            {
              "id": "b",
              "text": "Ask about real past behavior and current pain points, not hypothetical interest"
            },
            {
              "id": "c",
              "text": "Only survey strangers anonymously online"
            },
            {
              "id": "d",
              "text": "Avoid talking to customers until the product is ready"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Mom Test says to ask about past behavior ('How do you currently solve this?') because hypothetical questions produce misleading answers."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "entrepreneurship-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response.",
          "visualPrompt": "A brain icon with gears turning inside."
        }
      ]
    },
    {
      "id": "entrepreneurship-101-l04",
      "title": "Business Models and Revenue Strategies",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Map the nine building blocks of the Business Model Canvas",
        "Compare common revenue models: subscription, marketplace, freemium, and transactional",
        "Use the Lean Canvas to rapidly articulate a startup hypothesis"
      ],
      "chunks": [
        {
          "id": "entrepreneurship-101-l04-c1",
          "title": "The Business Model Canvas",
          "content": "Alexander Osterwalder developed a helpful tool called the Business Model Canvas (BMC) that helps entrepreneurs understand their business by breaking it down into nine important sections. These sections are: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partners, and Cost Structure. Each part is connected, meaning that changes in one area can affect the others. This canvas encourages entrepreneurs to look at their business as a complete picture rather than just focusing on one part.\n\nFor instance, even if you have an amazing product, it might not succeed if you can't get it to the customers or if the costs are too high for the price you want to charge. A great example of this is Amazon. Their Business Model Canvas shows a flywheel effect: when they lower prices, more customers come in. This increase in customers attracts more sellers to the platform, which leads to a wider variety of products available. As a result, even more customers are drawn in. This cycle continues to grow, showing how interconnected these elements are.\n\nAdditionally, it's important to remember that the Business Model Canvas is not a one-time project. It is a living document that should change and adapt as you learn more about your business and your customers. By regularly updating your canvas, you can ensure that your business strategy remains relevant and effective as you grow and evolve in the marketplace.",
          "visualPrompt": "A large 9-block canvas on a wall with colorful sticky notes being placed in sections like 'Value Propositions' and 'Customer Segments'."
        },
        {
          "id": "entrepreneurship-101-l04-c2",
          "title": "Revenue Models",
          "content": "Choosing the right revenue model is very important for any business because it affects many aspects, including how you create your product and how you build relationships with your customers. Let's explore some popular revenue models that businesses use today:\n\n1. **Subscription Model**: This model is used by companies like Netflix and various Software as a Service (SaaS) platforms. It allows businesses to earn a steady stream of income because customers pay a regular fee, usually monthly or annually. The key here is to keep customers satisfied so they continue their subscriptions.\n2. **Marketplace Model**: Companies like Airbnb and Uber operate on this model. They connect buyers and sellers and take a small fee or commission for each transaction. However, these businesses face a unique challenge known as the 'chicken-and-egg problem'—they need to attract both buyers and sellers to be successful.\n3. **Freemium Model**: This model is popular with services like Spotify and Slack. It offers a free version of the product to attract a large number of users. Then, it provides a premium version with additional features that users can pay for. Typically, only about 2-5% of users will upgrade to the paid version, but this can still be very profitable.\n4. **Transactional Model**: This is commonly seen in e-commerce businesses where customers make one-time purchases. The focus here is on encouraging customers to return and buy again in the future.\n5. **Ad-Supported Model**: Companies like Google and Instagram use this model, where they offer their products for free but earn money by displaying advertisements. They rely on attracting a large number of users to make this model work.\n\nEach of these revenue models has its own unique financial aspects, known as unit economics. Many successful companies often combine different models to maximize their revenue potential and adapt to their market needs. Understanding these models can help you make informed decisions when starting your own business.",
          "visualPrompt": "Icons representing different revenue models: a calendar for Subscription, a handshake for Marketplace, a gift box for Freemium, and a shopping cart for Transactional."
        },
        {
          "id": "entrepreneurship-101-l04-c3",
          "title": "The Lean Canvas",
          "content": "Ash Maurya took the idea of the Business Model Canvas and created the Lean Canvas, which is a tool made especially for startups that are trying to find their way in uncertain situations. The Lean Canvas changes some of the original sections to better fit the needs of new businesses. For example, instead of Key Partners, it focuses on the Problem that the business aims to solve. Instead of Key Activities, it emphasizes the Solution that the startup offers. Key Resources are replaced with Key Metrics, which help you measure success, and Customer Relationships are transformed into Unfair Advantage, highlighting what makes your business special.\n\nOne of the great things about the Lean Canvas is that you can fill it out in less than 20 minutes, making it a quick and easy way to create a one-page business plan. This is especially useful for entrepreneurs who need to move fast and adapt to changes. The process begins with identifying the Problem and Customer Segments, which is crucial because it encourages the entrepreneur to think about who their customers are and what they really need before rushing into finding a solution.\n\nYour Unfair Advantage is a key part of your business strategy. It refers to something unique about your business that others cannot easily replicate. This could be insider knowledge that you have, a special dataset that gives you an edge, the benefits of network effects where your product becomes more valuable as more people use it, or a strong community that supports your business. If you can't pinpoint what your Unfair Advantage is, your business might be at risk of being quickly copied by competitors who can offer similar solutions. Understanding and clearly defining your Unfair Advantage is essential for standing out in the marketplace and ensuring long-term success.",
          "visualPrompt": "A side-by-side comparison of the Business Model Canvas and the Lean Canvas, highlighting the 'Problem', 'Solution', and 'Unfair Advantage' blocks."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-101-l04-f1",
          "front": "Business Model Canvas (BMC)",
          "back": "A strategic tool with nine blocks — Customer Segments, Value Props, Channels, Relationships, Revenue, Resources, Activities, Partners, Costs — for mapping an entire business"
        },
        {
          "id": "entrepreneurship-101-l04-f2",
          "front": "Freemium model",
          "back": "Free basic tier to acquire users, premium paid tier to monetize — typically 2–5% convert; used by Spotify, Slack, Dropbox"
        },
        {
          "id": "entrepreneurship-101-l04-f3",
          "front": "Lean Canvas",
          "back": "Ash Maurya's startup-focused adaptation of the BMC — starts with Problem, adds Key Metrics and Unfair Advantage, fits on one page"
        },
        {
          "id": "entrepreneurship-101-l04-f4",
          "front": "Marketplace chicken-and-egg problem",
          "back": "A marketplace needs supply to attract demand and demand to attract supply — solving this cold-start problem is the critical early challenge"
        },
        {
          "id": "entrepreneurship-101-l04-f5",
          "front": "Total Addressable Market calculation (Aulet Step 4)",
          "back": "Use bottom-up analysis (count customers × revenue per customer) rather than top-down estimates. TAM should be large enough to sustain a business but specific enough to dominate as a beachhead"
        },
        {
          "id": "entrepreneurship-101-l04-f6",
          "front": "Lean Value Stream (Cooper)",
          "back": "All activities undertaken to provide value to the customer. Eliminate non-value-added activities while never degrading real value — optimization without value destruction is the core lean principle"
        }
      ],
      "learningAids": [
        {
          "id": "entrepreneurship-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept.",
          "visualPrompt": "A colorful grid representing the 9 blocks of a business model."
        }
      ]
    },
    {
      "id": "entrepreneurship-101-l05",
      "title": "Lean Startup and MVP Development",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain the Build-Measure-Learn feedback loop and identify each stage",
        "Design a minimum viable product that tests the riskiest assumption first",
        "Analyze pivot-or-persevere decisions using actionable metrics"
      ],
      "chunks": [
        {
          "id": "entrepreneurship-101-l05-c1",
          "title": "The Build-Measure-Learn Loop",
          "content": "Eric Ries's Lean Startup method is an innovative approach that treats a startup like a series of exciting experiments. At the heart of this method is a process called the Build-Measure-Learn (BML) feedback loop, which includes three important steps:\n\n1. **Build** — this is where you create the simplest version of your idea to test your hypothesis. This simple version is known as a minimum viable product, or MVP. Think of it as a prototype that allows you to see if your idea resonates with potential customers.\n2. **Measure** — in this step, you gather data on how customers interact with your MVP. You will use actionable metrics, which are specific measurements that help you understand customer behavior and preferences.\n3. **Learn** — after collecting data, you need to analyze it to see if it supports your original hypothesis. If the data shows that your idea is not working as expected, you may need to change direction, which is often referred to as pivoting.\n\nThe ultimate goal is to cycle through this loop as quickly as possible. Eric Ries emphasizes that the most important measure of progress for a startup is learning, not just the number of features you launch or the lines of code you write. The faster you learn from your experiments, the better your chances of success in the competitive world of entrepreneurship. By focusing on learning, you can make informed decisions that will help your startup grow and thrive.",
          "visualPrompt": "A circular diagram with three arrows forming a loop, labeled Build, Measure, and Learn, with a gear, a ruler, and a brain icon respectively."
        },
        {
          "id": "entrepreneurship-101-l05-c2",
          "title": "Designing an Effective MVP",
          "content": "A minimum viable product, or MVP, is not just a poorly made product; rather, it is the simplest version you can create to test whether your idea holds value for potential customers. Think of it as a way to learn about your audience's needs without investing too much time or money upfront. For instance, Drew Houston, the co-founder of Dropbox, started with an MVP that was a three-minute demo video. This video showcased how Dropbox would work, and it was so effective that it caused signups to jump from 5,000 to an incredible 75,000 in just one night! This surge in interest confirmed that there was a demand for the product before any actual engineering or development took place.\n\nAnother great example is Buffer, a social media management tool. Buffer began with a very simple two-page landing page that explained its pricing options. When visitors clicked on the 'buy' button, they were greeted with a 'coming soon' message instead of a fully functioning product. This clever approach allowed Buffer to measure how many people were interested in purchasing the service, which validated that there was a willingness to pay for it.\n\nThe key principle behind creating an MVP is to identify your riskiest assumption. This is often the question, 'Will anyone want this product?' Once you have pinpointed this assumption, your goal is to design the most cost-effective test that directly addresses it. By doing so, you can gather valuable feedback and insights that will help you refine your product before fully launching it to the market. Remember, the MVP is all about learning and adapting, so don’t be afraid to experiment and iterate based on what you discover!",
          "visualPrompt": "A simple landing page with a 'Coming Soon' button and an email signup form, representing a low-fidelity MVP."
        },
        {
          "id": "entrepreneurship-101-l05-c3",
          "title": "Pivot or Persevere",
          "content": "After experimenting with different ideas and collecting feedback from users, entrepreneurs face an important decision: should they pivot or persevere? To pivot means to make a thoughtful and strategic change to one part of the business model while keeping the elements that are already successful. For instance, Slack was originally created as a tool for gaming within a company, but the founders realized that it could be more useful for team communication, so they shifted their focus. Similarly, Instagram started as an app for checking in at locations, but it decided to concentrate solely on sharing and editing photos, which turned out to be a much better fit for its users.\n\nThere are various types of pivots that entrepreneurs can consider. One type is a customer segment pivot, where a business changes its target audience to better meet their needs. Another type is a zoom-in pivot, where a company narrows its focus to a specific feature that is working well. There are also channel pivots, which involve changing how a product is delivered to customers, and revenue model pivots, where a business alters how it makes money.\n\nWhen making these decisions, it’s crucial for entrepreneurs to focus on metrics that truly matter. For example, they should look at how many users continue to engage with the product over time, known as the retention rate, or how much revenue each user generates. These actionable metrics provide real insights into the business's performance. In contrast, vanity metrics, like total signups or page views, may sound impressive but can be misleading. Successful entrepreneurs understand the importance of making decisions based on data rather than personal feelings or assumptions. This disciplined approach helps them avoid running out of resources too quickly and increases their chances of building a sustainable business.",
          "visualPrompt": "A signpost with two arrows: one pointing straight ahead labeled 'Persevere' and one making a sharp turn labeled 'Pivot'."
        },
        {
          "id": "entrepreneurship-101-l05-c4",
          "title": "Lean Experimentation and Viability Testing",
          "content": "In his insightful book 'The Lean Entrepreneur,' Brant Cooper highlights a crucial step in the entrepreneurial journey: understanding your customers before you even think about creating a product. It's not enough to say that your target audience is 'everyone' or even 'young women.' Instead, you should focus on identifying a specific group of people who face similar challenges and communicate in a way that resonates with them. This targeted approach helps you determine if your idea truly addresses their needs and desires.\n\nCooper emphasizes that you only gain a real understanding of your value proposition when you have customers who are willing to pay for what you offer. This means that before you dive into building your product, you need to engage with potential customers and see if they find value in your idea. To do this effectively, you should conduct experiments that test whether your vision actually provides benefits to customers, rather than just checking if the technology works. This process is known as viability testing, and it is essential for ensuring that your product will be successful in the market.\n\nAdditionally, Bill Aulet's book 'Disciplined Entrepreneurship' reinforces these concepts by guiding you through a specific step called Step 8: Quantify the Value Proposition. This step encourages you to compare the current state of your customers' experiences with the potential improvements your product can offer. By doing this, you can ensure that the changes you propose are not only meaningful but also measurable. This means that you should be able to show how your product can significantly enhance the lives of your customers compared to their current situation.\n\nTogether, these frameworks illustrate that lean entrepreneurship is not just about moving quickly and making mistakes; it's about moving quickly and learning valuable lessons along the way. By focusing on understanding your customers and testing your ideas, you can create products that truly meet their needs and provide real value. This approach fosters a culture of innovation and adaptability, which is essential for any aspiring entrepreneur looking to make a positive impact in the world.",
          "visualPrompt": "A scientist looking through a magnifying glass at a target audience, with a checklist labeled 'Viability Test'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-101-l05-a1",
          "title": "Match the Concept",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Build",
              "right": "Create the smallest test of a hypothesis"
            },
            {
              "left": "Measure",
              "right": "Collect actionable metrics on customer behavior"
            },
            {
              "left": "Learn",
              "right": "Decide to pivot or persevere based on data"
            },
            {
              "left": "Customer segment pivot",
              "right": "Slack pivoting from gamers to enterprise teams"
            },
            {
              "left": "Zoom-in pivot",
              "right": "Instagram stripping Burbn down to photo filters only"
            },
            {
              "left": "Vanity metric",
              "right": "Total signups with no retention context"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-101-l05-f1",
          "front": "Build-Measure-Learn loop",
          "back": "The core Lean Startup engine: build an MVP, measure customer behavior with actionable metrics, learn whether to pivot or persevere"
        },
        {
          "id": "entrepreneurship-101-l05-f2",
          "front": "Minimum Viable Product (MVP)",
          "back": "The smallest thing you can build to learn whether your value hypothesis is true — e.g., Dropbox's demo video, Buffer's landing page"
        },
        {
          "id": "entrepreneurship-101-l05-f3",
          "front": "Pivot",
          "back": "A structured course correction in one element of the business model based on validated learning — not a random change"
        },
        {
          "id": "entrepreneurship-101-l05-f4",
          "front": "Vanity metrics vs. actionable metrics",
          "back": "Vanity: total signups, page views (look good, don't inform decisions). Actionable: retention rate, activation rate, revenue per user (drive decisions)"
        },
        {
          "id": "entrepreneurship-101-l05-f5",
          "front": "Viability experiments (Cooper)",
          "back": "Test whether the vision creates real customer value — not just whether the technology works. Until customers have paid for something, you don't truly know your value proposition"
        },
        {
          "id": "entrepreneurship-101-l05-f6",
          "front": "Quantify the Value Proposition (Aulet Step 8)",
          "back": "Compare the customer's 'as-is' state vs. the 'possible' state with your product — the improvement must be concrete, measurable, and aligned with the Persona's priorities"
        },
        {
          "id": "entrepreneurship-101-l05-f7",
          "front": "Precise segment definition (Cooper)",
          "back": "Define customers not as demographics ('women 18–73') but as a specific group sharing the same problem and speaking the same language — vague segments are neither realistic nor helpful"
        }
      ],
      "learningAids": [
        {
          "id": "entrepreneurship-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning.",
          "visualPrompt": "A clipboard with a checklist and a pen."
        }
      ]
    },
    {
      "id": "entrepreneurship-101-l06",
      "title": "Business Models & Lean Startup Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of business model design, MVP strategy, and Lean Startup methodology"
      ],
      "questions": [
        {
          "id": "entrepreneurship-101-l06-q1",
          "text": "The Lean Canvas differs from the Business Model Canvas by:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Removing all financial considerations"
            },
            {
              "id": "b",
              "text": "Adding Problem, Solution, Key Metrics, and Unfair Advantage blocks"
            },
            {
              "id": "c",
              "text": "Focusing exclusively on revenue models"
            },
            {
              "id": "d",
              "text": "Being designed only for large corporations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ash Maurya replaced Partners, Activities, Resources, and Relationships with Problem, Solution, Key Metrics, and Unfair Advantage to better suit startups."
        },
        {
          "id": "entrepreneurship-101-l06-q2",
          "text": "Dropbox validated demand by:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Building the full product and launching it publicly"
            },
            {
              "id": "b",
              "text": "Creating a three-minute demo video that drove signups from 5,000 to 75,000"
            },
            {
              "id": "c",
              "text": "Conducting focus groups with enterprise customers"
            },
            {
              "id": "d",
              "text": "Running paid advertising before building anything"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Drew Houston's demo video was a classic MVP — it tested demand with minimal investment before engineering the full product."
        },
        {
          "id": "entrepreneurship-101-l06-q3",
          "text": "A 'zoom-in pivot' means:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Expanding into many new markets simultaneously"
            },
            {
              "id": "b",
              "text": "Focusing on a single feature that gets the most traction and making it the whole product"
            },
            {
              "id": "c",
              "text": "Increasing the price to target premium customers"
            },
            {
              "id": "d",
              "text": "Copying a competitor's business model exactly"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Instagram zoom-pivoted from Burbn (a feature-rich check-in app) to focus exclusively on photo sharing and filters — the feature users loved most."
        },
        {
          "id": "entrepreneurship-101-l06-q4",
          "text": "In the freemium model, the typical paid conversion rate is:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "50–70% of users convert to paid"
            },
            {
              "id": "b",
              "text": "2–5% of users convert to paid"
            },
            {
              "id": "c",
              "text": "Less than 0.1% of users"
            },
            {
              "id": "d",
              "text": "100% — all users eventually pay"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Freemium businesses typically convert 2–5% to paid, so they need very large free user bases to generate meaningful revenue."
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
      "id": "entrepreneurship-101-l07",
      "title": "Funding, Pitching, and Financial Basics",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare bootstrapping, angel investment, venture capital, and crowdfunding",
        "Structure a compelling investor pitch using a proven framework",
        "Calculate and interpret burn rate, runway, CAC, and LTV"
      ],
      "chunks": [
        {
          "id": "entrepreneurship-101-l07-c1",
          "title": "Funding Sources and Stages",
          "content": "When starting a new business, also known as a startup, there are many different ways to find the money you need to grow. Each of these methods has its own pros and cons, which is important to understand. One way to fund a startup is called bootstrapping. This means that the entrepreneur uses their own savings or income to support the business. The great thing about bootstrapping is that it allows the entrepreneur to keep full control over their company. However, it can also slow down how quickly the business can grow. A good example of this is Mailchimp, which started out small and grew to be worth $12 billion without outside funding.\n\nAnother option is to seek help from angel investors. These are wealthy individuals who are willing to invest between $25,000 and $500,000 in new businesses. They often bring valuable experience and advice to the table, in addition to their financial support.\n\nVenture capital (VC) firms are another source of funding. They invest much larger amounts of money, usually from $1 million to over $100 million, at different stages of a startup's development. In the very early stages, known as Pre-seed and Seed, the funding helps to develop the initial idea. Then, during Series A, the focus is on finding a good fit for the product in the market. As the business grows, Series B and later stages help with scaling up operations. VCs typically expect a return of ten times their investment and often want to have a say in how the company is run.\n\nLastly, there are crowdfunding platforms like Kickstarter and Indiegogo. These platforms allow entrepreneurs to raise money while also checking if people are interested in their product. This method works best for products aimed at consumers. Each of these funding options can change how much control you have over your business, how fast you can grow, and how much of your ownership you might need to share with others.",
          "visualPrompt": "A staircase showing funding stages: Bootstrapping at the bottom, moving up to Angel Investors, and reaching Venture Capital at the top."
        },
        {
          "id": "entrepreneurship-101-l07-c2",
          "title": "The Investor Pitch",
          "content": "When you're preparing to pitch your business idea to investors, creating a strong pitch deck is crucial. A pitch deck is a visual presentation that outlines your business concept and persuades investors to support you. To make your pitch effective, it should follow a clear and logical structure. Start by identifying the Problem your product or service addresses. This is where you explain the specific challenge or pain point that your target audience faces. Next, present your Solution, which is your unique approach to solving that problem. This is your chance to showcase what makes your idea special and how it stands out from the competition.\n\nAfter discussing the problem and your solution, it's important to talk about the Market Size. This includes understanding terms like Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM). These terms help investors understand the potential scale of your business and how many customers you could realistically reach.\n\nThen, you should explain your Business Model. This part details how your company plans to make money. Investors want to know how you will generate revenue and sustain your business over time. Following that, you need to show Traction. This means providing evidence that your idea is already working. You can share important metrics like revenue figures, the number of users, or your growth rate to demonstrate that your business is gaining momentum.\n\nDon't forget to introduce your Team. Highlight why you and your co-founders are the right people to lead this venture. Investors invest in people as much as they invest in ideas, so showcasing your team's strengths is essential. Finally, make your Ask clear. This is where you state how much money you are looking to raise and what you plan to do with it.\n\nKeep in mind that investors see many pitches, so yours needs to grab their attention quickly—ideally within the first 30 seconds. Focus on the problem rather than just the product, and use specific examples to illustrate your points. For instance, saying, 'We have 2,000 paying users growing at a rate of 20% each month,' is much more impactful than using vague descriptions. Guy Kawasaki, a well-known entrepreneur, suggests following his 10/20/30 rule: limit your presentation to 10 slides, keep it under 20 minutes, and use a font size of at least 30 points to ensure readability. This approach helps keep your pitch concise and engaging, making it easier for investors to follow along and understand your vision.",
          "visualPrompt": "An entrepreneur confidently presenting a 10-slide pitch deck to a panel of investors, with a timer showing 20 minutes."
        },
        {
          "id": "entrepreneurship-101-l07-c3",
          "title": "Unit Economics: The Numbers That Matter",
          "content": "When starting a new business, it's important to understand four key numbers that can help you figure out if your startup can be successful. The first number is called Customer Acquisition Cost (CAC). This tells you how much money you spend on sales and marketing to get each new customer. To find this number, you take the total amount of money spent on these activities and divide it by the number of new customers you gained. This helps you see if your spending is effective.\n\nThe second important number is Lifetime Value (LTV). This measures how much money a customer will bring to your business over the entire time they stay with you. For businesses that offer subscriptions, you can calculate LTV by multiplying the average revenue you earn from each user by the gross margin (which is the profit you make after costs) and the average time a customer stays subscribed. A good rule of thumb is that your LTV should be at least three times higher than your CAC. This means that for every dollar you spend to get a customer, you should earn three dollars back from them.\n\nNext, we have Burn Rate. This number shows how much money your startup spends each month after subtracting what you earn. It’s important to keep track of this to ensure you don’t run out of money too quickly.\n\nFinally, there’s Runway, which tells you how long your startup can keep going with the cash you have left. You calculate it by dividing the cash you have in the bank by your monthly burn rate. This gives you a number of months that you can continue operating without needing more money. It’s wise for founders to start looking for funding when they have at least six months of runway left. This gives them enough time to find the resources they need to keep their business running smoothly.",
          "visualPrompt": "A dashboard showing key metrics: CAC (a price tag on a customer), LTV (a growing stack of coins), and Runway (a plane taking off from a runway)."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-101-l07-f1",
          "front": "Burn rate",
          "back": "Monthly cash outflow minus inflow — measures how fast a startup is spending its capital"
        },
        {
          "id": "entrepreneurship-101-l07-f2",
          "front": "LTV:CAC ratio",
          "back": "Lifetime Value divided by Customer Acquisition Cost — should be at least 3:1 for a sustainable business"
        },
        {
          "id": "entrepreneurship-101-l07-f3",
          "front": "TAM / SAM / SOM",
          "back": "Total Addressable Market (everyone), Serviceable Addressable Market (reachable with your model), Serviceable Obtainable Market (realistic near-term capture)"
        },
        {
          "id": "entrepreneurship-101-l07-f4",
          "front": "Runway",
          "back": "Cash in the bank divided by monthly burn rate — the number of months a startup can survive before needing more funding"
        }
      ]
    },
    {
      "id": "entrepreneurship-101-l08",
      "title": "Scaling, Growth, and Team Building",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Identify the key growth levers: viral, paid, and sticky engines of growth",
        "Design an early hiring plan prioritizing the right roles at the right stage",
        "Recognize common scaling pitfalls and how to avoid them"
      ],
      "chunks": [
        {
          "id": "entrepreneurship-101-l08-c1",
          "title": "Engines of Growth",
          "content": "In the world of startups, understanding how to grow your business is crucial, and Eric Ries has identified three important engines of growth that can help you achieve success. The first engine is called the Sticky Engine. This engine is all about keeping your customers happy and engaged. For example, if your business loses 2% of its customers each month (this is known as the churn rate) but gains 3% new customers, you will actually see a net growth of 1% each month. Companies like Notion, which provide software as a service (SaaS), rely heavily on this model to ensure that their users stick around and continue using their services.\n\nThe second engine is known as the Viral Engine. This engine thrives on the idea that each user can help bring in new users without much extra effort. A classic example of this is Hotmail, which included a message in every email sent that encouraged recipients to sign up for a free email account. For this engine to work effectively, the viral coefficient (often represented as K) must be greater than 1. This means that each user needs to invite more than one new user to create exponential growth.\n\nThe third engine is called the Paid Engine. This engine is effective when the lifetime value (LTV) of a customer is greater than the cost of acquiring that customer (CAC). This allows the company to reinvest its profits into marketing and growth. For instance, if it costs $50 to acquire a customer who will generate $200 in revenue, the business can afford to spend more on marketing to attract even more customers.\n\nMost successful companies focus on mastering one of these engines before they start to layer in others. By understanding and applying these engines of growth, you can create a solid foundation for your business and set it up for long-term success.",
          "visualPrompt": "Three gears turning together, labeled Sticky, Viral, and Paid, with a speedometer showing growth."
        },
        {
          "id": "entrepreneurship-101-l08-c2",
          "title": "Building the Founding Team",
          "content": "The first ten people you hire for your startup are incredibly important because they help shape the company’s culture and future direction. Paul Graham, a well-known entrepreneur, suggests that startups should take their time when hiring new team members. This means carefully considering each candidate to ensure they fit well with the team. However, if someone isn’t a good fit, it’s better to let them go quickly. A single poor hire can create problems that affect the company culture for many years.\n\nAn ideal founding team should include individuals with different but complementary skills. For instance, a great combination is having a technical expert, often referred to as the builder, who can create and develop products, alongside someone who excels in business and sales, known as the hustler. This pairing can help the startup grow effectively.\n\nWhen you are building your early team, it’s essential to prioritize certain roles. First, look for a product engineer who can quickly develop and launch products. This person will be responsible for turning ideas into reality. Next, you’ll need a growth or marketing leader who understands how to attract new customers and expand your market reach. Finally, consider hiring a customer success representative. This person will be crucial in gathering user feedback and making improvements to the product based on what customers say.\n\nAdditionally, it’s important to discuss how to share ownership of the company, known as equity, among co-founders early in the process. This agreement should reflect each person’s long-term contributions to the startup. Typically, equity should vest over four years with a one-year cliff, which means that co-founders earn their shares gradually over time. This approach helps prevent conflicts and misunderstandings later on, ensuring everyone is on the same page as the company grows.",
          "visualPrompt": "A diverse trio of founders: a 'Builder' coding, a 'Hustler' shaking hands, and a 'Designer' sketching."
        },
        {
          "id": "entrepreneurship-101-l08-c3",
          "title": "Scaling Pitfalls",
          "content": "One of the biggest challenges that new businesses, or startups, face is called premature scaling. This happens when a startup tries to grow too quickly without having a strong foundation in place. According to research from the Startup Genome Project, a surprising 74% of startups that experience high growth end up failing because they expand too soon. This can occur in several ways, such as hiring too many employees too quickly, spending a lot of money on marketing campaigns that may not be effective, or trying to enter new markets before they have established a solid product-market fit.\n\nSo, what exactly is product-market fit? It’s when a startup has created a product that meets the needs of its customers so well that they want to share it with others. Some signs that a startup has achieved product-market fit include organic growth through word-of-mouth, which means customers are telling their friends about the product, and a steady retention rate, indicating that users keep coming back to use the product. Additionally, if customers express frustration when the product is unavailable, that’s another good sign that the product is valuable to them.\n\nA well-known entrepreneur, Reid Hoffman, introduced the concept of 'blitzscaling.' This idea focuses on growing quickly, even if it means sacrificing efficiency. However, it’s important to remember that blitzscaling should only be applied after a startup has confirmed that it has achieved product-market fit. Before reaching that stage, it’s crucial for startups to prioritize learning quickly and operating efficiently rather than simply trying to increase the number of employees or boost revenue. By doing so, they can build a strong foundation for sustainable growth in the future.",
          "visualPrompt": "A race car trying to speed up while its wheels are falling off, symbolizing premature scaling."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-101-l08-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Before Product-Market Fit",
            "After Product-Market Fit"
          ],
          "items": [
            {
              "text": "Run Build-Measure-Learn loops rapidly",
              "bucket": "Before Product-Market Fit"
            },
            {
              "text": "Aggressively scale paid acquisition spending",
              "bucket": "After Product-Market Fit"
            },
            {
              "text": "Conduct customer development interviews weekly",
              "bucket": "Before Product-Market Fit"
            },
            {
              "text": "Expand to international markets",
              "bucket": "After Product-Market Fit"
            },
            {
              "text": "Keep the team small and iterate fast",
              "bucket": "Before Product-Market Fit"
            },
            {
              "text": "Hire a VP of Sales and build a sales team",
              "bucket": "After Product-Market Fit"
            },
            {
              "text": "Test multiple value propositions",
              "bucket": "Before Product-Market Fit"
            },
            {
              "text": "Invest in brand marketing and PR",
              "bucket": "After Product-Market Fit"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-101-l08-f1",
          "front": "Viral coefficient (K)",
          "back": "The number of new users each existing user generates — K > 1 means exponential growth; Hotmail and Dropbox referrals are classic examples"
        },
        {
          "id": "entrepreneurship-101-l08-f2",
          "front": "Premature scaling",
          "back": "Hiring, spending, or expanding before achieving product-market fit — the Startup Genome Project found 74% of fast-growing startups fail from this"
        },
        {
          "id": "entrepreneurship-101-l08-f3",
          "front": "Four-year vesting with one-year cliff",
          "back": "Standard equity vesting schedule — nothing vests in year one, then 25% vests at the cliff, remaining vests monthly over 3 more years"
        },
        {
          "id": "entrepreneurship-101-l08-f4",
          "front": "Product-market fit signals",
          "back": "Organic word-of-mouth, retention curves that flatten, customers upset when product is unavailable, pull exceeding push"
        },
        {
          "id": "entrepreneurship-101-l08-f5",
          "front": "Beachhead expansion strategy (Aulet)",
          "back": "After dominating your beachhead market, expand to adjacent markets using the credibility and resources gained — like D-Day, secure one beach first before advancing inland"
        },
        {
          "id": "entrepreneurship-101-l08-f6",
          "front": "Vision, Values, and Culture (Cooper)",
          "back": "Start with a big Vision (capital V) but hold it loosely — the end success rarely matches the initial vision exactly. Strong values and culture sustain the team through pivots when the vision changes"
        }
      ]
    },
    {
      "id": "entrepreneurship-101-l09",
      "title": "Funding & Scaling Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of funding mechanisms, unit economics, and scaling strategy"
      ],
      "questions": [
        {
          "id": "entrepreneurship-101-l09-q1",
          "text": "A startup has $600,000 in the bank and burns $50,000 per month. Its runway is:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "6 months"
            },
            {
              "id": "b",
              "text": "12 months"
            },
            {
              "id": "c",
              "text": "18 months"
            },
            {
              "id": "d",
              "text": "24 months"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Runway = cash ÷ monthly burn = $600,000 ÷ $50,000 = 12 months. Founders should start fundraising with 6+ months remaining."
        },
        {
          "id": "entrepreneurship-101-l09-q2",
          "text": "The viral engine of growth requires a viral coefficient (K) that is:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Less than 0.5"
            },
            {
              "id": "b",
              "text": "Exactly 1.0"
            },
            {
              "id": "c",
              "text": "Greater than 1.0"
            },
            {
              "id": "d",
              "text": "Negative"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When K > 1, each user brings in more than one new user, creating exponential growth — the defining feature of viral growth."
        },
        {
          "id": "entrepreneurship-101-l09-q3",
          "text": "Premature scaling refers to:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Growing too slowly after finding product-market fit"
            },
            {
              "id": "b",
              "text": "Hiring, spending, or expanding before achieving product-market fit"
            },
            {
              "id": "c",
              "text": "Raising too much venture capital"
            },
            {
              "id": "d",
              "text": "Launching in only one market"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Startup Genome Project found that 74% of high-growth startup failures result from scaling before product-market fit is proven."
        },
        {
          "id": "entrepreneurship-101-l09-q4",
          "text": "A healthy LTV:CAC ratio for a sustainable business is at least:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1:1"
            },
            {
              "id": "b",
              "text": "3:1"
            },
            {
              "id": "c",
              "text": "0.5:1"
            },
            {
              "id": "d",
              "text": "10:1 minimum"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An LTV:CAC ratio of at least 3:1 ensures enough margin to cover overhead and reinvest in growth after acquisition costs."
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
      "id": "entrepreneurship-101-l10",
      "title": "Mastery Quiz: Entrepreneurship Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all entrepreneurship foundations concepts"
      ],
      "questions": [
        {
          "id": "entrepreneurship-101-l10-q1",
          "text": "A founder discovers that users love one specific feature of their multi-feature app and decides to make it the entire product. This is an example of:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A customer segment pivot"
            },
            {
              "id": "b",
              "text": "A zoom-in pivot"
            },
            {
              "id": "c",
              "text": "Premature scaling"
            },
            {
              "id": "d",
              "text": "A revenue model pivot"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A zoom-in pivot focuses on one high-traction feature and makes it the whole product — exactly what Instagram did by stripping Burbn down to photo filters."
        },
        {
          "id": "entrepreneurship-101-l10-q2",
          "text": "Which combination correctly represents the Build-Measure-Learn loop in order?",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Learn → Measure → Build"
            },
            {
              "id": "b",
              "text": "Build → Measure → Learn"
            },
            {
              "id": "c",
              "text": "Measure → Build → Learn"
            },
            {
              "id": "d",
              "text": "Build → Learn → Measure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Lean Startup loop proceeds: Build an MVP, Measure customer behavior with actionable metrics, Learn whether to pivot or persevere."
        },
        {
          "id": "entrepreneurship-101-l10-q3",
          "text": "An investor asks about your SAM. This refers to:",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The total global demand for all products in every category"
            },
            {
              "id": "b",
              "text": "The portion of the total market you can reach with your current business model and channels"
            },
            {
              "id": "c",
              "text": "Your startup's current annual revenue"
            },
            {
              "id": "d",
              "text": "The number of employees in your startup"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Serviceable Addressable Market (SAM) is the segment of TAM targeted by your product and reachable with your business model."
        },
        {
          "id": "entrepreneurship-101-l10-q4",
          "text": "A startup's monthly burn rate is $80,000, it acquires 200 customers per month at $100 CAC each, and the average customer LTV is $450. Which statement is most accurate?",
          "skillId": "entrepreneurship-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The LTV:CAC ratio is 4.5:1, which is healthy"
            },
            {
              "id": "b",
              "text": "The LTV:CAC ratio is 1:4.5, which indicates the business is unsustainable"
            },
            {
              "id": "c",
              "text": "Burn rate is irrelevant if LTV:CAC is positive"
            },
            {
              "id": "d",
              "text": "CAC cannot be calculated without knowing the total market size"
            }
          ],
          "correctOptionId": "a",
          "explanation": "LTV:CAC = $450 ÷ $100 = 4.5:1 — above the 3:1 threshold, indicating healthy unit economics. Burn rate still matters for runway planning."
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
