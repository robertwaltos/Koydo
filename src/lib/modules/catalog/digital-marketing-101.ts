import type { LearningModule } from "@/lib/modules/types";

export const digital_marketing_101_Module: LearningModule = {
  "id": "digital-marketing-101",
  "title": "Digital Marketing Fundamentals",
  "description": "Master the foundations of digital marketing — from SEO and content strategy to paid advertising, email automation, analytics, and conversion optimization across the modern customer journey.",
  "subject": "Digital Marketing",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "marketing"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Map the digital marketing landscape and trace the modern customer journey from awareness to advocacy",
    "Apply on-page and technical SEO fundamentals to improve organic search visibility",
    "Develop a content marketing strategy aligned with audience personas and funnel stages",
    "Design email marketing campaigns using segmentation, automation, and A/B testing",
    "Configure and optimize paid advertising campaigns across search, display, and social channels",
    "Interpret analytics dashboards and key performance indicators to measure marketing ROI",
    "Apply conversion rate optimization techniques to landing pages and campaign funnels"
  ],
  "lessons": [
    {
      "id": "digital-marketing-101-l01",
      "title": "Digital Marketing Landscape & Customer Journey",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the major digital marketing channels and their roles in a marketing mix",
        "Describe the stages of the modern customer journey from awareness to advocacy",
        "Explain the AIDA framework and how it maps to the marketing funnel"
      ],
      "chunks": [
        {
          "id": "digital-marketing-101-l01-c1",
          "title": "The Digital Marketing Ecosystem",
          "content": "Digital marketing is the strategic use of digital channels to connect with audiences, build brand awareness, and drive sales. It encompasses a variety of interconnected methods, including Search Engine Optimization (SEO), Pay-Per-Click advertising (PPC), social media marketing, email marketing, and content marketing.\n\nOne of the greatest advantages of digital marketing over traditional media (like billboards or print ads) is precision targeting. Instead of broadcasting a message to everyone, businesses can show their ads specifically to people who have demonstrated interest in their niche. For example, a local bakery can target ads exclusively to users within a 5-mile radius who frequently search for custom cakes.\n\nAdditionally, digital marketing provides real-time data. Marketers can see exactly how many people clicked an ad, visited a website, or made a purchase. This allows for rapid adjustments to improve campaign performance.\n\nA successful strategy rarely relies on just one channel. Instead, it creates an ecosystem. A helpful blog post might attract visitors via SEO. Those visitors might then be retargeted with a social media ad, which encourages them to sign up for an email newsletter. By integrating these methods, businesses create a seamless and engaging experience for potential customers.",
          "visualPrompt": "A vibrant infographic showing a central 'Brand' hub connected to various digital channels (SEO, Email, Social Media, PPC) with arrows illustrating the flow of data and user traffic between them."
        },
        {
          "id": "digital-marketing-101-l01-c2",
          "title": "The Modern Customer Journey",
          "content": "The customer journey is the path a person takes from the moment they first discover a brand to the point they become a loyal advocate. We often visualize this as a funnel with five key stages:\n\n1. **Awareness**: The customer realizes they have a problem or need and discovers your brand through an ad, social media post, or search result.\n2. **Consideration**: The customer researches their options. They read reviews, compare features, and consume educational content to see if your solution is the best fit.\n3. **Conversion**: The pivotal moment where the customer decides to make a purchase or sign up for a service.\n4. **Retention**: Post-purchase, the brand works to keep the customer engaged and satisfied through excellent support, onboarding, and follow-up emails.\n5. **Advocacy**: Highly satisfied customers become brand promoters, recommending your product to friends and leaving positive reviews.\n\nIn reality, this journey is rarely a straight line. Customers might bounce between your website, a competitor's social media, and third-party review sites before converting. Marketers use 'touchpoint mapping' to track these interactions, ensuring the brand's message remains consistent and helpful at every step.",
          "visualPrompt": "A dynamic funnel diagram labeled with the 5 stages (Awareness, Consideration, Conversion, Retention, Advocacy). Beside the funnel, a squiggly, looping line represents the actual, non-linear path a modern consumer takes across different devices."
        },
        {
          "id": "digital-marketing-101-l01-c3",
          "title": "The AIDA Framework",
          "content": "To guide customers smoothly through their journey, marketers rely on a classic copywriting and advertising model known as the AIDA framework. AIDA stands for Attention, Interest, Desire, and Action.\n\n1. **Attention**: First, you must cut through the noise. This is achieved with a bold headline, a striking image, or a highly relevant hook that stops the user from scrolling.\n2. **Interest**: Once you have their attention, you need to hold it. You do this by addressing their specific pain points or sharing fascinating facts that resonate with their needs.\n3. **Desire**: Next, you transition from logic to emotion. You build desire by illustrating how your product will improve their life. Testimonials, before-and-after photos, and case studies are highly effective here.\n4. **Action**: Finally, you must tell them exactly what to do next. A clear, compelling Call-To-Action (CTA) like 'Start Your Free Trial' or 'Download the Guide' provides the final push.\n\nWhether you are writing a 280-character social media post or designing a comprehensive landing page, applying the AIDA structure ensures your message is persuasive and conversion-focused.",
          "visualPrompt": "An inverted pyramid divided into four horizontal sections: Attention (widest, top), Interest, Desire, and Action (narrowest, bottom), with a cursor clicking a bright 'Buy Now' button at the very tip."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-101-l01-f1",
          "front": "Marketing funnel stages",
          "back": "Awareness → Consideration → Conversion → Retention → Advocacy — the path a customer follows from discovery to brand loyalty"
        },
        {
          "id": "digital-marketing-101-l01-f2",
          "front": "AIDA framework",
          "back": "Attention, Interest, Desire, Action — a copywriting and advertising model that guides prospects toward a conversion step"
        },
        {
          "id": "digital-marketing-101-l01-f3",
          "front": "Touchpoint mapping",
          "back": "Identifying every interaction a customer has with your brand across channels to ensure a consistent and coherent experience"
        },
        {
          "id": "digital-marketing-101-l01-f4",
          "front": "Omnichannel marketing",
          "back": "An integrated approach where all digital and offline channels work together to deliver a seamless customer experience"
        }
      ],
      "learningAids": [
        {
          "id": "digital-marketing-101-l01-a1",
          "type": "image",
          "title": "The Customer Journey Funnel",
          "content": "Visual summary mapping the AIDA framework directly onto the Awareness, Consideration, and Conversion stages of the marketing funnel."
        }
      ]
    },
    {
      "id": "digital-marketing-101-l02",
      "title": "SEO Fundamentals & On-Page Optimization",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how search engines crawl, index, and rank web pages",
        "Apply on-page SEO techniques including title tags, meta descriptions, and header hierarchy",
        "Conduct basic keyword research using search intent categories"
      ],
      "chunks": [
        {
          "id": "digital-marketing-101-l02-c1",
          "title": "How Search Engines Work",
          "content": "Search engines like Google are the librarians of the internet. To organize billions of web pages, they rely on a three-step process: Crawling, Indexing, and Ranking.\n\nFirst, automated programs called 'crawlers' or 'spiders' scour the web. They start on known pages and follow links to discover new content. When a crawler finds a new page, it analyzes the text, images, and video, and stores this information in a massive database called the Index.\n\nWhen you type a query into the search bar, the search engine's ranking algorithm instantly sifts through the Index to find the most relevant answers. The algorithm evaluates hundreds of factors, but the most critical are:\n\n1. **Relevance**: Does your content directly answer the user's query?\n2. **Authority**: Do other reputable websites link to your page? (These are called backlinks, and they act like votes of confidence).\n3. **User Experience (UX)**: Does your page load quickly? Is it mobile-friendly and easy to navigate?\n\nBecause organic search drives massive amounts of high-quality traffic, optimizing your website to align with these ranking factors—a practice known as Search Engine Optimization (SEO)—is one of the most valuable digital marketing skills you can develop.",
          "visualPrompt": "An animated sequence showing a robotic spider 'crawling' along a web of interconnected documents, filing them into a massive digital library (Indexing), and then a user receiving a neatly sorted list of the best documents (Ranking)."
        },
        {
          "id": "digital-marketing-101-l02-c2",
          "title": "On-Page SEO Elements",
          "content": "On-page SEO involves optimizing the individual elements on your website to help search engines understand your content and rank it higher. \n\nThe most critical element is the **Title Tag**. This is the clickable blue link that appears in search results. It should include your primary keyword and be kept under 60 characters so it doesn't get cut off. Right below it is the **Meta Description**, a 150-160 character summary. While it doesn't directly impact rankings, a compelling meta description acts as a mini-ad that dramatically increases the likelihood a user will click your link.\n\nOn the page itself, structure matters. You should use a single **H1 tag** for your main headline, signaling the core topic to search engines. Break up the rest of your text using H2 and H3 subheadings. This hierarchy makes the content scannable for both humans and algorithms.\n\nFinally, don't forget your images. Search engines can't 'see' pictures, so you must provide **Alt Text**—a brief, descriptive text that explains the image. This improves accessibility for visually impaired users and gives search engines more context, helping your images appear in Google Image Search.",
          "visualPrompt": "A wireframe of a webpage with callout boxes pointing to the Title Tag (in the browser tab), the H1 main heading, H2 subheadings, and an image with an 'Alt Text' tag hovering over it."
        },
        {
          "id": "digital-marketing-101-l02-c3",
          "title": "Keyword Research & Search Intent",
          "content": "Keyword research is the process of discovering the exact words and phrases your target audience types into search engines. Using tools like Google Keyword Planner, Ahrefs, or SEMrush, marketers analyze search volume (how many people search for a term) and keyword difficulty (how hard it is to rank for it).\n\nHowever, finding the right keyword is only half the battle; you must also understand **Search Intent**—the underlying goal behind the user's search. There are four main types of intent:\n\n1. **Informational**: The user wants to learn something (e.g., 'how to tie a tie').\n2. **Navigational**: The user is looking for a specific website (e.g., 'Netflix login').\n3. **Commercial Investigation**: The user is researching options before buying (e.g., 'best running shoes 2024').\n4. **Transactional**: The user is ready to buy right now (e.g., 'buy Nike Pegasus size 10').\n\nTo succeed in SEO, your content must match the intent. If someone searches for 'best running shoes', they want a comparison guide, not a product page to buy a single pair of shoes. \n\nAdditionally, smart marketers often target **long-tail keywords**—phrases containing three or more words (like 'best trail running shoes for flat feet'). While fewer people search for these specific phrases, the users who do are highly motivated and much more likely to convert.",
          "visualPrompt": "A magnifying glass focusing on a search bar. Inside the search bar, the phrase 'buy running shoes online' is highlighted, with a tag pointing to it that reads 'Transactional Intent - High Conversion Probability'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-101-l02-a1",
          "title": "Match SEO Element to Best Practice",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Title tag",
              "right": "Primary keyword, under 60 characters"
            },
            {
              "left": "Meta description",
              "right": "Compelling summary, 150–160 characters"
            },
            {
              "left": "H1 heading",
              "right": "One per page, main topic"
            },
            {
              "left": "Image alt text",
              "right": "Descriptive text for accessibility and SEO"
            },
            {
              "left": "URL slug",
              "right": "Short, readable, includes target keyword"
            },
            {
              "left": "Internal links",
              "right": "Connect related pages to distribute authority"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-101-l02-f1",
          "front": "Organic search",
          "back": "Unpaid search engine results earned through SEO — contrasted with paid results (PPC ads) that appear above or beside organic listings"
        },
        {
          "id": "digital-marketing-101-l02-f2",
          "front": "Search intent categories",
          "back": "Informational (learn), navigational (find a site), transactional (buy), commercial investigation (compare options before buying)"
        },
        {
          "id": "digital-marketing-101-l02-f3",
          "front": "Long-tail keywords",
          "back": "Specific, multi-word search phrases with lower volume but higher conversion rates — e.g., 'best vegan protein powder for runners'"
        },
        {
          "id": "digital-marketing-101-l02-f4",
          "front": "Backlinks",
          "back": "Links from external websites pointing to your site — a major authority signal in Google's ranking algorithm"
        }
      ],
      "learningAids": [
        {
          "id": "digital-marketing-101-l02-a1",
          "type": "practice",
          "title": "Keyword Intent Mapping",
          "content": "Take a list of 5 keywords related to your favorite hobby and categorize each one into Informational, Navigational, Commercial, or Transactional intent."
        }
      ]
    },
    {
      "id": "digital-marketing-101-l03",
      "title": "SEO & Digital Landscape Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of the digital marketing ecosystem, customer journey, and SEO fundamentals"
      ],
      "questions": [
        {
          "id": "digital-marketing-101-l03-q1",
          "text": "In the AIDA framework, what does the 'D' stand for?",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Distribution"
            },
            {
              "id": "b",
              "text": "Desire"
            },
            {
              "id": "c",
              "text": "Data"
            },
            {
              "id": "d",
              "text": "Demand"
            }
          ],
          "correctOptionId": "b",
          "explanation": "AIDA stands for Attention, Interest, Desire, Action — 'Desire' is the stage where you build emotional motivation to convert."
        },
        {
          "id": "digital-marketing-101-l03-q2",
          "text": "A user searching 'best CRM software 2026' most likely has which type of search intent?",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Navigational"
            },
            {
              "id": "b",
              "text": "Informational"
            },
            {
              "id": "c",
              "text": "Commercial investigation"
            },
            {
              "id": "d",
              "text": "Transactional"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Comparative queries ('best X') indicate commercial investigation — the user is researching before making a purchase decision."
        },
        {
          "id": "digital-marketing-101-l03-q3",
          "text": "Which on-page SEO element should be limited to one per page and contain the primary keyword?",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Meta description"
            },
            {
              "id": "b",
              "text": "Image alt text"
            },
            {
              "id": "c",
              "text": "H1 heading"
            },
            {
              "id": "d",
              "text": "Footer link"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The H1 tag serves as the main heading of the page and should appear only once, clearly signaling the topic to search engines."
        },
        {
          "id": "digital-marketing-101-l03-q4",
          "text": "Long-tail keywords typically offer:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The highest search volume of any keyword type"
            },
            {
              "id": "b",
              "text": "Lower search volume but higher conversion rates"
            },
            {
              "id": "c",
              "text": "No value for SEO"
            },
            {
              "id": "d",
              "text": "Only navigational intent"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Long-tail keywords are specific multi-word phrases — fewer people search for them, but those who do are closer to taking action."
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
          "id": "digital-marketing-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Remember AIDA: Attention (Look!), Interest (Oh, cool), Desire (I want that), Action (Click buy)."
        }
      ]
    },
    {
      "id": "digital-marketing-101-l04",
      "title": "Content Marketing & Social Media Strategy",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Define content marketing and explain its role at each stage of the funnel",
        "Develop a social media strategy aligned with audience personas and platform strengths",
        "Distinguish between organic and paid social media tactics"
      ],
      "chunks": [
        {
          "id": "digital-marketing-101-l04-c1",
          "title": "Content Marketing Fundamentals",
          "content": "Content marketing is the art of creating and sharing valuable, relevant information to attract and engage a specific audience. Unlike traditional advertising, which interrupts people to pitch a product, content marketing provides upfront value—educating or entertaining the audience first to build trust.\n\nTo be effective, your content must align with the customer journey. We categorize this into three funnel stages:\n\n1. **Top-of-Funnel (TOFU)**: The goal here is awareness. You want to cast a wide net using blog posts, infographics, and short-form videos that answer common industry questions.\n2. **Middle-of-Funnel (MOFU)**: The goal is consideration and lead generation. Prospects know they have a problem and are evaluating solutions. In-depth guides, webinars, and case studies work best here.\n3. **Bottom-of-Funnel (BOFU)**: The goal is conversion. The prospect is ready to buy but needs a final nudge. Product demonstrations, free trials, and customer testimonials provide the reassurance needed to close the deal.\n\nCompanies with a documented content strategy are three times more likely to report positive ROI. Planning what to create, who it's for, and where it fits in the funnel is the secret to content that actually drives revenue.",
          "visualPrompt": "A three-tiered funnel graphic. Top tier (TOFU) shows icons for blogs and social posts. Middle tier (MOFU) shows icons for webinars and ebooks. Bottom tier (BOFU) shows icons for free trials and shopping carts."
        },
        {
          "id": "digital-marketing-101-l04-c2",
          "title": "Social Media Platform Strategy",
          "content": "A common mistake in digital marketing is treating all social media platforms the same. Each platform has a unique demographic, content style, and algorithm. A successful strategy requires tailoring your approach to the environment.\n\n- **Instagram & TikTok**: Highly visual, fast-paced, and driven by short-form video (Reels/TikToks). These platforms excel at brand storytelling, influencer partnerships, and reaching Gen Z and Millennial audiences.\n- **LinkedIn**: The undisputed king of B2B (Business-to-Business) marketing. It's the ideal space for sharing industry insights, networking, and publishing thought leadership articles.\n- **X (formerly Twitter)**: The hub for real-time conversations, trending news, and rapid customer service.\n- **Facebook**: Despite an aging demographic, it remains the largest platform globally. Its powerful Meta Business Suite makes it a cornerstone for community building (Facebook Groups) and highly targeted advertising.\n\nBefore creating content, conduct audience research to find out where your target customers actually spend their time. It is far more effective to dominate one or two platforms where your audience lives than to spread yourself thin across all of them.",
          "visualPrompt": "A grid of social media logos (TikTok, LinkedIn, X, Facebook) with a brief persona next to each: a trendy youth for TikTok, a professional in a suit for LinkedIn, a news reporter for X, and a community group for Facebook."
        },
        {
          "id": "digital-marketing-101-l04-c3",
          "title": "Organic vs. Paid Social Media",
          "content": "Social media marketing is divided into two distinct but complementary strategies: Organic and Paid.\n\n**Organic social media** refers to the free content you post on your profile—your daily updates, stories, and community interactions. It is essential for establishing your brand's voice and nurturing relationships. However, due to algorithm changes, organic reach has plummeted. On platforms like Facebook, a standard organic post might only be seen by 2% to 5% of your followers.\n\n**Paid social media** involves paying the platform to push your content to a highly specific audience, guaranteeing visibility. You can target users based on granular data: age, location, interests, and even recent purchasing behavior. You can also create 'Lookalike Audiences'—groups of new users who share traits with your best existing customers.\n\nThe most effective modern strategy is a hybrid approach. Use organic content as a testing ground. When an organic post naturally performs well and generates high engagement, put paid budget behind it to 'boost' it to a wider audience. This ensures you are only spending money to promote proven, high-quality content.",
          "visualPrompt": "A split-screen illustration. On the left (Organic), a person speaking to a small, close-knit group of followers. On the right (Paid), the same person using a megaphone to broadcast a message to a massive, diverse crowd."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-101-l04-f1",
          "front": "TOFU / MOFU / BOFU",
          "back": "Top, Middle, Bottom of Funnel — content marketing framework mapping content types to awareness, consideration, and conversion stages"
        },
        {
          "id": "digital-marketing-101-l04-f2",
          "front": "Organic social reach",
          "back": "The number of unique users who see your unpaid social content — typically 2–5% of followers on Facebook due to algorithmic filtering"
        },
        {
          "id": "digital-marketing-101-l04-f3",
          "front": "Lookalike audience",
          "back": "An ad targeting method that finds new users who share characteristics with your existing customers — available on Meta, LinkedIn, and other platforms"
        },
        {
          "id": "digital-marketing-101-l04-f4",
          "front": "Content calendar",
          "back": "A planning document that schedules what content to publish, on which channels, and when — ensures consistency and strategic alignment"
        }
      ],
      "learningAids": [
        {
          "id": "digital-marketing-101-l04-a1",
          "type": "image",
          "title": "The Content Matrix",
          "content": "A visual matrix showing how content types map to the buyer's journey, from entertaining viral videos to logical, detailed whitepapers."
        }
      ]
    },
    {
      "id": "digital-marketing-101-l05",
      "title": "Email Marketing & Marketing Automation",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Design effective email campaigns using segmentation and personalization",
        "Build automated email workflows for lead nurturing and onboarding",
        "Interpret email marketing KPIs including open rate, click-through rate, and list health"
      ],
      "chunks": [
        {
          "id": "digital-marketing-101-l05-c1",
          "title": "Email Marketing Fundamentals",
          "content": "Despite the rise of social media, email marketing remains one of the most profitable digital channels, boasting an average Return on Investment (ROI) of $36 for every $1 spent. Why? Because you own your email list, free from the unpredictable algorithms of social platforms.\n\nSuccess in email marketing relies on three pillars: building a healthy, opt-in list (never buy email lists!), delivering valuable content, and sending it at the right time. \n\nMarketers use several types of emails to engage their audience:\n- **Welcome Sequences**: Sent immediately after someone subscribes, introducing the brand and setting expectations.\n- **Newsletters**: Regular updates containing educational content, industry news, and tips to stay top-of-mind.\n- **Promotional Emails**: Targeted campaigns announcing sales, product launches, or limited-time discounts.\n- **Transactional Emails**: Automated receipts, shipping updates, and password resets.\n\nWhen executing campaigns via platforms like Mailchimp or HubSpot, compliance is mandatory. Laws like CAN-SPAM (US) and GDPR (Europe) require that you always include a clear 'unsubscribe' link and a physical mailing address in every email.",
          "visualPrompt": "An illustration of a smartphone displaying an email inbox. The emails are color-coded and labeled: Welcome, Newsletter, Promo, and Receipt, highlighting the variety of email types."
        },
        {
          "id": "digital-marketing-101-l05-c2",
          "title": "Segmentation, Personalization & A/B Testing",
          "content": "The era of the 'email blast'—sending the exact same message to your entire list—is over. Today, relevance is everything. \n\n**Segmentation** is the practice of dividing your email list into smaller, targeted groups based on demographics, past purchases, or engagement levels. For example, a clothing retailer might segment their list by gender or climate. Segmented campaigns generate up to a 14% increase in open rates and a massive 100% increase in clicks compared to unsegmented blasts.\n\n**Personalization** takes this a step further. Beyond just using a subscriber's first name in the subject line, advanced personalization uses dynamic content to show different product recommendations to different users within the exact same email.\n\nTo continuously improve, marketers rely on **A/B Testing** (or split testing). This involves creating two variations of an email—perhaps testing a funny subject line against a serious one. You send Version A to 15% of your list, and Version B to another 15%. The email marketing software tracks which version gets more opens or clicks, and automatically sends the winning version to the remaining 70% of your list.",
          "visualPrompt": "A graphic showing a large group of diverse people being sorted into three distinct, color-coded groups (Segmentation), followed by a split path showing an A/B test between a red button and a blue button."
        },
        {
          "id": "digital-marketing-101-l05-c3",
          "title": "Marketing Automation Workflows",
          "content": "Marketing automation uses software to send emails automatically based on specific user behaviors or time triggers. Instead of manually hitting 'send', you build a workflow once, and it runs in the background 24/7.\n\nA classic example is the **Abandoned Cart Workflow**. If a user adds a product to their online shopping cart but leaves the website without paying, the system waits an hour and automatically sends a friendly reminder email. If they still don't buy, it might send a second email 24 hours later offering a 10% discount. This simple automation recovers 10-15% of lost sales on average.\n\nAnother powerful automation feature is **Lead Scoring**. The software assigns points to subscribers based on their actions. Opening an email might be worth 1 point; clicking a link is 3 points; visiting the pricing page is 10 points. Once a subscriber hits a threshold (e.g., 50 points), the system flags them as a 'Hot Lead' and automatically notifies the sales team to reach out.\n\nTools like ActiveCampaign and HubSpot provide visual, drag-and-drop builders, allowing marketers to create complex, highly personalized customer journeys without writing a single line of code.",
          "visualPrompt": "A flowchart diagram showing an Abandoned Cart sequence: User leaves site -> Wait 1 hour -> Send Email 1 -> Did they buy? (Yes/No) -> If No, Wait 24 hours -> Send Email 2 with 10% discount."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-101-l05-a1",
          "title": "Sort Email Types by Funnel Stage",
          "type": "sorting_buckets",
          "buckets": [
            "Awareness / TOFU",
            "Consideration / MOFU",
            "Conversion / BOFU"
          ],
          "items": [
            {
              "text": "Welcome email introducing your brand story",
              "bucket": "Awareness / TOFU"
            },
            {
              "text": "Case study showcasing client results",
              "bucket": "Consideration / MOFU"
            },
            {
              "text": "Abandoned cart reminder with discount code",
              "bucket": "Conversion / BOFU"
            },
            {
              "text": "Educational newsletter with industry tips",
              "bucket": "Awareness / TOFU"
            },
            {
              "text": "Product comparison guide",
              "bucket": "Consideration / MOFU"
            },
            {
              "text": "Limited-time promotional offer email",
              "bucket": "Conversion / BOFU"
            },
            {
              "text": "Webinar invitation on industry trends",
              "bucket": "Consideration / MOFU"
            },
            {
              "text": "Free trial activation prompt",
              "bucket": "Conversion / BOFU"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-101-l05-f1",
          "front": "Email open rate",
          "back": "Percentage of delivered emails that recipients opened — industry average is 20–25%; affected primarily by subject line and sender name"
        },
        {
          "id": "digital-marketing-101-l05-f2",
          "front": "Click-through rate (CTR)",
          "back": "Percentage of email recipients who clicked at least one link — measures content relevance and CTA effectiveness"
        },
        {
          "id": "digital-marketing-101-l05-f3",
          "front": "Lead scoring",
          "back": "Assigning numerical values to prospect actions (email opens, page visits, downloads) to prioritize sales-ready leads automatically"
        },
        {
          "id": "digital-marketing-101-l05-f4",
          "front": "Abandoned cart email",
          "back": "An automated email triggered when a user adds products to their cart but does not complete checkout — recovers 10–15% of lost revenue on average"
        }
      ],
      "learningAids": [
        {
          "id": "digital-marketing-101-l05-a1",
          "type": "practice",
          "title": "Design an A/B Test",
          "content": "Think of a promotional email for a new pair of sneakers. Write two different subject lines to A/B test: one focusing on a discount, and one focusing on the shoe's unique style."
        }
      ]
    },
    {
      "id": "digital-marketing-101-l06",
      "title": "Content, Social & Email Marketing Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of content marketing strategy, social media channels, and email marketing best practices"
      ],
      "questions": [
        {
          "id": "digital-marketing-101-l06-q1",
          "text": "Which type of content is best suited for the bottom of the marketing funnel (BOFU)?",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Awareness blog posts"
            },
            {
              "id": "b",
              "text": "Educational infographics"
            },
            {
              "id": "c",
              "text": "Product demos and free trials"
            },
            {
              "id": "d",
              "text": "Industry news roundups"
            }
          ],
          "correctOptionId": "c",
          "explanation": "BOFU content like demos, free trials, and testimonials targets prospects ready to convert — they need final reassurance, not education."
        },
        {
          "id": "digital-marketing-101-l06-q2",
          "text": "Segmented email campaigns compared to non-segmented blasts typically show:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Lower open rates and higher unsubscribes"
            },
            {
              "id": "b",
              "text": "No measurable difference in performance"
            },
            {
              "id": "c",
              "text": "Higher open rates and significantly higher click-through rates"
            },
            {
              "id": "d",
              "text": "Higher cost with no ROI improvement"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Segmented campaigns deliver more relevant content, generating ~14% higher open rates and up to 100% higher CTR."
        },
        {
          "id": "digital-marketing-101-l06-q3",
          "text": "An abandoned cart email workflow is triggered when a user:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Opens a newsletter"
            },
            {
              "id": "b",
              "text": "Unsubscribes from the mailing list"
            },
            {
              "id": "c",
              "text": "Adds items to their cart but leaves without completing the purchase"
            },
            {
              "id": "d",
              "text": "Visits the homepage for the first time"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Abandoned cart automations re-engage shoppers who showed purchase intent but didn't complete checkout."
        },
        {
          "id": "digital-marketing-101-l06-q4",
          "text": "When A/B testing an email campaign, the best practice is to:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Change every element at once to find the best combination"
            },
            {
              "id": "b",
              "text": "Test one variable at a time on a significant sample, then send the winner to the rest"
            },
            {
              "id": "c",
              "text": "Always test on your entire list simultaneously"
            },
            {
              "id": "d",
              "text": "Skip testing if your open rate is above 10%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Testing one variable at a time isolates its effect. Testing on a subset (20–30%) before rolling out the winner ensures reliable results."
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
      "id": "digital-marketing-101-l07",
      "title": "Paid Advertising: PPC, Display & Social Ads",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain how Google Ads auction-based bidding and Quality Score determine ad placement",
        "Compare search ads, display ads, and social media advertising formats",
        "Calculate and interpret key paid media metrics: CPC, CTR, ROAS, and CAC"
      ],
      "chunks": [
        {
          "id": "digital-marketing-101-l07-c1",
          "title": "Search Advertising & Google Ads",
          "content": "Pay-Per-Click (PPC) search advertising allows you to display text ads at the very top of search engine results pages (SERPs). When a user searches for a specific keyword, your ad appears, and you only pay when they actually click on it.\n\nGoogle Ads, the largest PPC platform, operates on a lightning-fast auction system. Advertisers bid on keywords, but the highest bidder doesn't automatically win the top spot. Google wants to show users relevant, high-quality ads, so it uses a formula called **Ad Rank**.\n\nAd Rank is calculated by multiplying your Bid Amount by your **Quality Score**. Quality Score is a 1-to-10 rating based on three factors: your expected click-through rate, the relevance of your ad text to the search query, and the quality of your landing page. If your Quality Score is high enough, you can actually pay less per click than a competitor and still rank above them!\n\nTo control costs, advertisers use 'match types' (broad, phrase, and exact match) to dictate how closely a user's search must match their keyword. They also use 'negative keywords' to prevent ads from showing on irrelevant searches, ensuring the budget is only spent on high-intent prospects.",
          "visualPrompt": "A mockup of a Google Search Results page. The top two results have a small 'Sponsored' tag next to them. An overlay shows a math equation: Ad Rank = Max Bid x Quality Score."
        },
        {
          "id": "digital-marketing-101-l07-c2",
          "title": "Display Advertising & Retargeting",
          "content": "While search ads capture people actively looking for a solution, **Display Advertising** builds brand awareness while people are browsing the web. Display ads are the visual banners, images, and videos you see on news sites, blogs, and YouTube, primarily served through the Google Display Network (GDN), which reaches 90% of internet users.\n\nDisplay ads offer powerful targeting options:\n- **Contextual**: Placing ads on websites related to your product (e.g., a tent ad on a hiking blog).\n- **Demographic**: Targeting by age, gender, or income.\n- **Affinity**: Targeting users based on their long-term interests and hobbies.\n\nHowever, the most profitable use of display advertising is **Retargeting** (or Remarketing). Have you ever looked at a pair of shoes online, and then seen ads for those exact shoes following you around the internet? That's retargeting. \n\nBy placing a small piece of tracking code (a pixel) on your website, you can serve ads specifically to people who have already visited your site but didn't buy. Because these users are already familiar with your brand, retargeting ads typically achieve 2 to 3 times higher click-through rates than standard display ads.",
          "visualPrompt": "A three-step comic strip: 1. A user looks at a red bicycle on a store website. 2. The user leaves the site and goes to a news blog. 3. An ad for the exact same red bicycle appears on the sidebar of the news blog."
        },
        {
          "id": "digital-marketing-101-l07-c3",
          "title": "Social Media Advertising & Metrics",
          "content": "Social media advertising combines the visual appeal of display ads with incredibly precise audience targeting. Platforms like Meta (Facebook/Instagram), LinkedIn, and TikTok allow you to serve ads directly in users' feeds.\n\nAd formats vary widely: single images, engaging video reels, interactive carousels, and even lead-generation forms that let users submit their email without leaving the app.\n\nTo determine if your paid campaigns are actually making money, you must track key metrics:\n- **Cost Per Click (CPC)**: The actual price you pay for each click on your ad.\n- **Click-Through Rate (CTR)**: The percentage of people who saw your ad and clicked it. A high CTR means your ad is highly relevant to the audience.\n- **Return on Ad Spend (ROAS)**: The revenue generated for every dollar spent. A ROAS of 4:1 means you earn $4 for every $1 spent on ads.\n- **Customer Acquisition Cost (CAC)**: The total cost to acquire one paying customer. If you spend $100 on ads and get 2 customers, your CAC is $50.\n\nMastering these metrics allows marketers to scale profitable campaigns and quickly shut down losing ones.",
          "visualPrompt": "A digital dashboard displaying four gauges: CPC ($1.20), CTR (3.5%), ROAS (4.2x), and CAC ($45.00), with green arrows indicating positive performance."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-101-l07-f1",
          "front": "Quality Score (Google Ads)",
          "back": "A 1–10 rating based on expected CTR, ad relevance, and landing page experience — higher scores lower your CPC and improve ad position"
        },
        {
          "id": "digital-marketing-101-l07-f2",
          "front": "ROAS (Return on Ad Spend)",
          "back": "Revenue generated divided by advertising cost — a ROAS of 4:1 means every $1 in ad spend generates $4 in revenue"
        },
        {
          "id": "digital-marketing-101-l07-f3",
          "front": "Retargeting / Remarketing",
          "back": "Serving ads to users who previously visited your site or engaged with your content — achieves 2–3× higher CTR than prospecting campaigns"
        },
        {
          "id": "digital-marketing-101-l07-f4",
          "front": "CAC (Customer Acquisition Cost)",
          "back": "Total marketing and sales expenditure divided by the number of new customers acquired during that period"
        }
      ]
    },
    {
      "id": "digital-marketing-101-l08",
      "title": "Analytics, KPIs & Conversion Optimization",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Navigate Google Analytics 4 to interpret traffic sources, user behavior, and conversion events",
        "Select and track the right KPIs for each marketing channel",
        "Apply conversion rate optimization (CRO) techniques to landing pages"
      ],
      "chunks": [
        {
          "id": "digital-marketing-101-l08-c1",
          "title": "Google Analytics 4 Essentials",
          "content": "To know if your marketing is working, you need data. Google Analytics 4 (GA4) is the industry-standard tool for tracking website and app performance. GA4 uses an 'event-based' model, meaning every user interaction—a page view, a button click, a video play, or a purchase—is recorded as a specific event.\n\nGA4 organizes data into several core reports:\n1. **Acquisition**: Answers 'Where did our users come from?' It breaks down traffic by channel: Organic Search, Paid Social, Direct, or Referral.\n2. **Engagement**: Answers 'What did users do once they arrived?' It tracks average engagement time, pages viewed, and specific events triggered.\n3. **Monetization**: Answers 'How much money did we make?' It tracks e-commerce purchases, revenue, and buyer journeys.\n\nTo make Acquisition data accurate, marketers use **UTM Parameters**. These are short text codes added to the end of a URL. For example, a link ending in `?utm_source=facebook&utm_medium=cpc&utm_campaign=spring_sale` tells GA4 exactly which specific ad campaign drove the click. Without UTMs, traffic sources can become jumbled and untrackable.",
          "visualPrompt": "A screenshot of a Google Analytics 4 dashboard showing a bar chart of 'Traffic Acquisition' with columns for Organic Search, Direct, Paid Search, and Social."
        },
        {
          "id": "digital-marketing-101-l08-c2",
          "title": "Choosing the Right KPIs",
          "content": "Data is only useful if it helps you make decisions. Key Performance Indicators (KPIs) are the specific metrics you choose to measure the success of your goals. Effective KPIs should always be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.\n\nDifferent channels require different KPIs:\n- **SEO**: Track organic sessions, keyword rankings, and organic conversion rate.\n- **Email**: Track open rates, click-through rates, and revenue per email sent.\n- **Paid Ads**: Track Cost Per Click (CPC), Return on Ad Spend (ROAS), and Customer Acquisition Cost (CAC).\n- **Social Media**: Track engagement rate (likes/comments divided by followers) and referral traffic to your website.\n\nA critical rule in analytics is to avoid **Vanity Metrics**. These are numbers that look impressive on paper—like having 100,000 Instagram followers or a million raw page views—but don't actually translate to business revenue. Always prioritize KPIs that tie directly to your bottom line, like conversion rates and customer lifetime value.",
          "visualPrompt": "A target board with a dart in the center. Next to it, a checklist spelling out S.M.A.R.T. (Specific, Measurable, Achievable, Relevant, Time-bound)."
        },
        {
          "id": "digital-marketing-101-l08-c3",
          "title": "Conversion Rate Optimization (CRO)",
          "content": "Driving traffic to your website is expensive. Conversion Rate Optimization (CRO) is the science of tweaking your website to ensure more of that traffic actually takes action (buys a product, signs up for a newsletter, etc.).\n\nYour **Conversion Rate** is calculated simply: (Number of Conversions ÷ Total Visitors) × 100. If 1,000 people visit your landing page and 50 buy, your conversion rate is 5%. (Average landing pages convert at 2-5%, while top performers exceed 10%).\n\nHow do you improve this rate? By reducing friction and increasing trust:\n- **Simplify Forms**: Every extra field on a form reduces completion rates by about 10%. Only ask for the information you absolutely need.\n- **Clear CTAs**: Replace vague buttons like 'Submit' with action-oriented text like 'Get My Free Quote'.\n- **Social Proof**: Add customer testimonials, 5-star reviews, and trust badges (like 'Secure Checkout') near the buy button.\n- **Page Speed**: A 1-second delay in page load time can drop conversions by 7%. Fast pages make for happy buyers.\n\nMarketers use tools like Optimizely or VWO to run A/B tests on landing pages, constantly experimenting with headlines, colors, and layouts to find the highest-converting combination.",
          "visualPrompt": "A split screen showing a 'Before' and 'After' landing page. The Before has a long, 10-field form and a tiny 'Submit' button. The After has a short, 3-field form, a bright 'Start Free Trial' button, and 5-star customer reviews below it."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-101-l08-a1",
          "title": "Match KPI to Marketing Channel",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Organic sessions & keyword rankings",
              "right": "SEO"
            },
            {
              "left": "Open rate & revenue per email",
              "right": "Email Marketing"
            },
            {
              "left": "ROAS & Cost Per Click",
              "right": "Paid Advertising"
            },
            {
              "left": "Engagement rate & referral traffic",
              "right": "Social Media"
            },
            {
              "left": "Conversion rate & bounce rate",
              "right": "Landing Page / CRO"
            },
            {
              "left": "Customer Lifetime Value (CLV)",
              "right": "Overall Business Health"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-101-l08-f1",
          "front": "UTM parameters",
          "back": "Tags added to URLs (source, medium, campaign, term, content) that let Google Analytics track which campaigns drive traffic and conversions"
        },
        {
          "id": "digital-marketing-101-l08-f2",
          "front": "Conversion rate formula",
          "back": "Conversions ÷ Total Visitors × 100 — average landing page rate is 2–5%, top performers exceed 10%"
        },
        {
          "id": "digital-marketing-101-l08-f3",
          "front": "Bounce rate",
          "back": "Percentage of visitors who leave a page without taking any further action — high bounce rates often indicate poor content relevance or slow load times"
        },
        {
          "id": "digital-marketing-101-l08-f4",
          "front": "Vanity metrics",
          "back": "Numbers (total followers, raw page views) that look impressive but don't indicate business impact — always prioritize KPIs tied to revenue"
        }
      ]
    },
    {
      "id": "digital-marketing-101-l09",
      "title": "Paid Advertising & Analytics Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of paid advertising mechanics, analytics interpretation, and conversion optimization"
      ],
      "questions": [
        {
          "id": "digital-marketing-101-l09-q1",
          "text": "In Google Ads, Ad Rank is calculated using:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Budget size alone — the highest spender always wins"
            },
            {
              "id": "b",
              "text": "Bid amount multiplied by Quality Score"
            },
            {
              "id": "c",
              "text": "Number of keywords in the ad group"
            },
            {
              "id": "d",
              "text": "The age of the Google Ads account"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ad Rank = Bid × Quality Score. A high Quality Score (based on CTR, relevance, and landing page) can let you pay less and rank higher."
        },
        {
          "id": "digital-marketing-101-l09-q2",
          "text": "Retargeting campaigns typically achieve higher CTR because they:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Use larger ad budgets than prospecting campaigns"
            },
            {
              "id": "b",
              "text": "Target cold audiences who have never interacted with the brand"
            },
            {
              "id": "c",
              "text": "Re-engage users who have already shown interest by visiting the site"
            },
            {
              "id": "d",
              "text": "Only run on weekends when competition is lower"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Retargeting serves ads to warm audiences — users who already visited your site — resulting in 2–3× higher CTR than cold prospecting."
        },
        {
          "id": "digital-marketing-101-l09-q3",
          "text": "Which CRO technique most directly reduces form abandonment?",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Adding more form fields to gather comprehensive data"
            },
            {
              "id": "b",
              "text": "Removing the CTA button"
            },
            {
              "id": "c",
              "text": "Reducing the number of form fields"
            },
            {
              "id": "d",
              "text": "Using auto-playing background video"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Each additional form field reduces completion rates by approximately 10%. Minimizing fields lowers friction and increases conversions."
        },
        {
          "id": "digital-marketing-101-l09-q4",
          "text": "UTM parameters in a URL allow marketers to:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Block bots from clicking ads"
            },
            {
              "id": "b",
              "text": "Improve page load speed"
            },
            {
              "id": "c",
              "text": "Track which specific campaign, source, and medium drove a visit in Google Analytics"
            },
            {
              "id": "d",
              "text": "Increase the Quality Score of Google Ads"
            }
          ],
          "correctOptionId": "c",
          "explanation": "UTM tags (source, medium, campaign) are appended to URLs so analytics tools can attribute traffic to specific marketing efforts."
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
      "id": "digital-marketing-101-l10",
      "title": "Mastery Quiz: Digital Marketing Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all digital marketing foundations concepts across channels, strategy, and analytics"
      ],
      "questions": [
        {
          "id": "digital-marketing-101-l10-q1",
          "text": "A company's ROAS is 3:1. This means:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "They spent $3 for every $1 in revenue"
            },
            {
              "id": "b",
              "text": "They generated $3 in revenue for every $1 spent on ads"
            },
            {
              "id": "c",
              "text": "Their Quality Score is 3 out of 10"
            },
            {
              "id": "d",
              "text": "Three percent of visitors converted"
            }
          ],
          "correctOptionId": "b",
          "explanation": "ROAS (Return on Ad Spend) of 3:1 means every dollar invested in advertising produced three dollars in revenue."
        },
        {
          "id": "digital-marketing-101-l10-q2",
          "text": "Which combination of strategies best targets all stages of the marketing funnel?",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Only paid search ads for every stage"
            },
            {
              "id": "b",
              "text": "Blog content for awareness, case studies for consideration, free trials for conversion"
            },
            {
              "id": "c",
              "text": "Only email marketing for all stages"
            },
            {
              "id": "d",
              "text": "Social media posts without any landing pages"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An effective funnel uses TOFU content (blogs) for awareness, MOFU content (case studies) for consideration, and BOFU offers (trials) for conversion."
        },
        {
          "id": "digital-marketing-101-l10-q3",
          "text": "A landing page has 5,000 visitors and 200 conversions. The conversion rate is:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2%"
            },
            {
              "id": "b",
              "text": "4%"
            },
            {
              "id": "c",
              "text": "20%"
            },
            {
              "id": "d",
              "text": "0.4%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Conversion rate = 200 ÷ 5,000 × 100 = 4%. This is at the higher end of the average 2–5% range for landing pages."
        },
        {
          "id": "digital-marketing-101-l10-q4",
          "text": "An email marketer notices low open rates. The MOST impactful element to A/B test first is:",
          "skillId": "digital-marketing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The footer disclaimer text"
            },
            {
              "id": "b",
              "text": "The subject line"
            },
            {
              "id": "c",
              "text": "The unsubscribe link placement"
            },
            {
              "id": "d",
              "text": "The email signature font"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The subject line is the primary factor influencing whether a recipient opens an email — it should be tested first when open rates are low."
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
