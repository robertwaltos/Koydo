import type { LearningModule } from "@/lib/modules/types";

export const SupplyChainManagement101Module: LearningModule = {
  "id": "supply-chain-management-101",
  "title": "Supply Chain Fundamentals",
  "description": "Understand how products move from raw materials to end consumers. Master the SCOR model, key supply chain metrics, and the critical role of information flow in designing efficient, responsive supply chains.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "supply-chain"
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
    "Define supply chain management and its strategic importance",
    "Map the end-to-end supply chain from supplier to consumer",
    "Distinguish between supply chain management and logistics",
    "Explain the five SCOR model processes: Plan, Source, Make, Deliver, Return",
    "Calculate and interpret key supply chain metrics",
    "Describe how information flow improves supply chain performance",
    "Identify the bullwhip effect and strategies to mitigate it"
  ],
  "lessons": [
    {
      "id": "supply-chain-management-101-l01",
      "title": "What Is Supply Chain Management?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define supply chain management in modern business",
        "Explain why supply chains matter for competitive advantage",
        "Identify the main participants in a supply chain"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l01-c1",
          "title": "Defining Supply Chain Management",
          "content": "Supply chain management, commonly known as SCM, is a crucial process that helps ensure products reach consumers efficiently and effectively. Imagine it as a large puzzle where each piece represents a different step in getting a product from its origin to the final buyer. This journey starts with sourcing the right raw materials needed to create a product. After that, manufacturers take these materials and transform them into finished goods. Once the products are made, they need to be delivered to various locations, such as stores or directly to customers' homes.\nIn this process, many different groups work together harmoniously. For instance, suppliers provide the essential raw materials, manufacturers are responsible for producing the items, and retailers are the ones who sell these products to consumers. SCM is not just about one single job; it is an integrative discipline that connects various activities and organizations. This collaboration ensures that everything operates smoothly and that customer demands are met effectively. Understanding SCM is essential for anyone interested in how businesses function and succeed in delivering products to people who need them.\nContext recap: Supply chain management, commonly known as SCM, is a crucial process that helps ensure products reach consumers efficiently and effectively. Imagine it as a large puzzle where each piece represents a different step in getting a product from its origin to the final buyer. This journey starts with sourcing the right raw materials needed to create a product. After that, manufacturers take these materials and transform them into finished goods.\nWhy this matters: Defining Supply Chain Management helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "supply-chain-management-101-l01-c2",
          "title": "Why Supply Chains Matter",
          "content": "Supply chains play a crucial role in the business world because they significantly influence the overall cost of producing goods. In fact, they can account for about 60 to 70 percent of the total expenses involved in making a product. This is why companies like Amazon, Zara, and Toyota have achieved remarkable success; they have mastered the art of managing their supply chains effectively. A well-organized supply chain can lead to lower production costs, quicker delivery of products to customers, better quality of goods, and ultimately, happier customers. When everything runs smoothly, businesses can thrive and grow. However, if there are problems in the supply chain, such as running out of stock, experiencing delays, or having quality issues, it can have serious consequences. These failures can lead to lost sales and can damage a company's reputation, making it harder for them to earn the trust of their customers. Therefore, understanding and managing supply chains is essential for any business aiming to succeed in today's competitive market.\nContext recap: Supply chains play a crucial role in the business world because they significantly influence the overall cost of producing goods. In fact, they can account for about 60 to 70 percent of the total expenses involved in making a product. This is why companies like Amazon, Zara, and Toyota have achieved remarkable success; they have mastered the art of managing their supply chains effectively. A well-organized supply chain can lead to lower production costs, quicker delivery of products to customers, better quality of goods, and ultimately, happier customers."
        },
        {
          "id": "supply-chain-management-101-l01-c3",
          "title": "Key Participants in a Supply Chain",
          "content": "In every supply chain, there are various groups of people and companies that play crucial roles in making sure products get from the beginning to the end. The 'upstream' part of the supply chain includes those who provide the raw materials needed to create products. For example, farmers grow crops, and miners extract minerals. These raw materials are then sent to component manufacturers who create parts for the final products. The main company, often referred to as the focal company, takes these materials and transforms them into the finished goods that we see in stores.\nOn the other hand, the 'downstream' part of the supply chain involves getting these products into the hands of customers. This includes distributors who move products to different locations, wholesalers who buy in bulk, retailers who sell directly to consumers, and of course, the end consumers who purchase and use the products.\nAdditionally, there are supporting players in the supply chain, such as logistics providers who ensure that goods are transported efficiently, financial institutions that handle payments and transactions, and technology vendors that supply the tools and systems needed to keep everything running smoothly. All these participants work together to create a seamless flow of goods, information, and funds throughout the entire supply chain process.\nContext recap: In every supply chain, there are various groups of people and companies that play crucial roles in making sure products get from the beginning to the end. The 'upstream' part of the supply chain includes those who provide the raw materials needed to create products. For example, farmers grow crops, and miners extract minerals. These raw materials are then sent to component manufacturers who create parts for the final products.\nWhy this matters: Key Participants in a Supply Chain helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l01-f1",
          "front": "Supply chain management (SCM)",
          "back": "The coordination of sourcing, procurement, production, and delivery activities across multiple organizations from raw materials to the final consumer"
        },
        {
          "id": "supply-chain-management-101-l01-f2",
          "front": "Why do supply chains matter competitively?",
          "back": "They account for 60–70% of total product cost and directly impact speed, quality, cost, and customer satisfaction — making them a key source of competitive advantage"
        },
        {
          "id": "supply-chain-management-101-l01-f3",
          "front": "Upstream vs. downstream supply chain",
          "back": "Upstream: suppliers, component makers, sub-assemblers (toward raw materials). Downstream: distributors, retailers, consumers (toward the end customer)"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l02",
      "title": "The End-to-End Supply Chain",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Trace the journey of a product from raw material to consumer",
        "Identify the three main flows in a supply chain",
        "Explain the concept of supply chain tiers"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l02-c1",
          "title": "Product Journey: Raw Material to Consumer",
          "content": "Let’s explore the fascinating journey of a smartphone from its raw materials to the hands of consumers! It all begins with lithium, a key component that is mined in Australia. This lithium is then transformed into battery cells in China, which are essential for powering the phone. Next, the smartphone is assembled in Vietnam, where it comes together with various parts sourced from different countries, including chips from Taiwan and glass from Japan.\nOnce the smartphones are fully assembled and ready for use, they are shipped to distribution centers located all around the globe. From these centers, the phones are then sent out to retail stores or made available for purchase online. Each step of this journey is crucial because it adds value to the final product. However, it’s important to note that each handoff also introduces costs, takes time, and carries certain risks. By understanding this entire process, companies can identify opportunities to improve efficiency and reduce expenses at every stage, ultimately benefiting both the business and the consumer.\nContext recap: Let’s explore the fascinating journey of a smartphone from its raw materials to the hands of consumers! It all begins with lithium, a key component that is mined in Australia. This lithium is then transformed into battery cells in China, which are essential for powering the phone. Next, the smartphone is assembled in Vietnam, where it comes together with various parts sourced from different countries, including chips from Taiwan and glass from Japan.\nWhy this matters: Product Journey: Raw Material to Consumer helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "supply-chain-management-101-l02-c2",
          "title": "Three Flows in a Supply Chain",
          "content": "In the world of supply chains, there are three essential types of flows that help businesses operate smoothly. The first type is called product flow. This refers to the journey that products take as they move from suppliers, through the production process, and finally to the customers who purchase them. Understanding this flow is crucial because it ensures that the right products are available at the right time.\nThe second type is known as information flow. This flow includes important details such as demand forecasts, which predict how much of a product will be needed, the status of orders, current inventory levels, and tracking information for shipments. This information moves back and forth between companies, allowing them to make informed decisions and respond quickly to changes in demand.\nLastly, we have financial flow. This involves all the financial transactions that occur within the supply chain, including payments made for goods, credit terms that dictate how long a buyer has to pay, invoicing details, and cost data.\nTo achieve success in supply chain management, it is vital for companies to optimize all three of these flows—product, information, and financial—simultaneously. When they do this effectively, they create a supply chain that operates at its best, leading to greater efficiency and customer satisfaction.\nContext recap: In the world of supply chains, there are three essential types of flows that help businesses operate smoothly. The first type is called product flow. This refers to the journey that products take as they move from suppliers, through the production process, and finally to the customers who purchase them. Understanding this flow is crucial because it ensures that the right products are available at the right time.\nWhy this matters: Three Flows in a Supply Chain helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "supply-chain-management-101-l02-c3",
          "title": "Supply Chain Tiers",
          "content": "Supply chains are organized into different levels, known as tiers, which help us understand how products move from creation to the final customer. At the top level, we have Tier 1 suppliers. These are the companies that sell their products directly to the main company that manufactures the final product. For example, if a company makes smartphones, a Tier 1 supplier might provide the screens or batteries directly to them. Below Tier 1, we find Tier 2 suppliers. These suppliers provide materials or components to the Tier 1 suppliers. This structure can continue down to Tier 3 and even further, creating a complex web of suppliers. On the customer side, Tier 1 customers are those who purchase directly from the main company, such as distributors who buy in bulk. Tier 2 customers, on the other hand, are further along in the process, like retailers who sell the products to the public. It's important to note that many companies only have a clear view of their immediate Tier 1 suppliers and customers. This limited visibility can lead to risks, as any disruptions or issues at Tier 3 can have a ripple effect, impacting the entire supply chain and causing delays or shortages. Understanding these tiers helps businesses manage their supply chains more effectively and prepare for potential challenges.\nContext recap: Supply chains are organized into different levels, known as tiers, which help us understand how products move from creation to the final customer. At the top level, we have Tier 1 suppliers. These are the companies that sell their products directly to the main company that manufactures the final product. For example, if a company makes smartphones, a Tier 1 supplier might provide the screens or batteries directly to them.\nWhy this matters: Supply Chain Tiers helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l02-f1",
          "front": "Three flows in a supply chain",
          "back": "Product flow (physical goods), Information flow (data and forecasts, bidirectional), Financial flow (payments, credit, invoicing)"
        },
        {
          "id": "supply-chain-management-101-l02-f2",
          "front": "Supply chain tiers",
          "back": "Tier 1 suppliers deal directly with the focal company; Tier 2 supply to Tier 1; Tier 3 supply to Tier 2 — visibility typically drops beyond Tier 1"
        },
        {
          "id": "supply-chain-management-101-l02-f3",
          "front": "Why is end-to-end visibility important?",
          "back": "Disruptions at any tier can cascade through the entire chain — limited visibility beyond Tier 1 creates hidden risks and missed optimization opportunities"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l03",
      "title": "Supply Chain vs. Logistics",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Define logistics and its core functions",
        "Explain how logistics fits within the broader supply chain",
        "Distinguish between inbound, outbound, and reverse logistics"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l03-c1",
          "title": "Logistics Defined",
          "content": "Logistics is a crucial part of how we ensure that products and services are delivered efficiently. It involves careful planning and management of the entire process that starts from the point where goods are produced to the point where they are consumed or used. This means thinking about how to transport these goods, where to store them, how to keep track of inventory, how to fulfill customer orders, and how to handle materials safely and effectively. Imagine it like a well-organized team working together to make sure everything runs smoothly. While logistics plays a significant role in supply chain management, it is important to remember that it is just one piece of a much larger puzzle. Understanding logistics helps us see how different parts of the supply chain connect and work together to meet the needs of customers and businesses alike.\nContext recap: Logistics is a crucial part of how we ensure that products and services are delivered efficiently. It involves careful planning and management of the entire process that starts from the point where goods are produced to the point where they are consumed or used. This means thinking about how to transport these goods, where to store them, how to keep track of inventory, how to fulfill customer orders, and how to handle materials safely and effectively. Imagine it like a well-organized team working together to make sure everything runs smoothly.\nWhy this matters: Logistics Defined helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "supply-chain-management-101-l03-c2",
          "title": "Supply Chain Management Is Broader",
          "content": "Logistics is an essential part of supply chain management, but it only covers the physical movement and storage of products. Supply chain management, on the other hand, is much broader and involves several key activities that are crucial for a successful business. For instance, it includes finding and managing suppliers, which means building strong relationships with those who provide the materials needed for production. Additionally, supply chain management involves planning for demand, which is about predicting how much of a product customers will want and ensuring that enough is available. Another important aspect is designing products in a way that makes them easy to manufacture, which can save time and reduce costs. Furthermore, supply chain management emphasizes collaboration among different organizations, ensuring that everyone involved works together effectively. To put it simply, you can think of logistics as the 'how we move things' part of the process, while supply chain management is about understanding 'how the entire network of businesses works together to create value for customers and stakeholders.' This holistic view is essential for optimizing operations and achieving success in today's interconnected marketplace.\nContext recap: Logistics is an essential part of supply chain management, but it only covers the physical movement and storage of products. Supply chain management, on the other hand, is much broader and involves several key activities that are crucial for a successful business. For instance, it includes finding and managing suppliers, which means building strong relationships with those who provide the materials needed for production. Additionally, supply chain management involves planning for demand, which is about predicting how much of a product customers will want and ensuring that enough is available.\nWhy this matters: Supply Chain Management Is Broader helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "supply-chain-management-101-l03-c3",
          "title": "Types of Logistics",
          "content": "Logistics is a crucial part of the supply chain, and it can be divided into three main types, each serving a unique purpose. First, we have inbound logistics. This type focuses on the movement of raw materials and components from suppliers to manufacturers. It ensures that manufacturers have the necessary materials to create their products. Next is outbound logistics, which is all about delivering finished goods from manufacturers to customers. This step is vital because it connects the products with the people who need them. Lastly, we have reverse logistics. This area deals with the return of products, handling recalls, recycling, and disposal. Essentially, it involves moving products backward through the supply chain. Each type of logistics has specific requirements and different cost factors associated with it. Interestingly, reverse logistics is often overlooked, but it can account for a significant portion of total supply chain costs, typically around 5-10%. Understanding these logistics types helps businesses manage their operations more effectively and improve overall efficiency in the supply chain.\nContext recap: Logistics is a crucial part of the supply chain, and it can be divided into three main types, each serving a unique purpose. First, we have inbound logistics. This type focuses on the movement of raw materials and components from suppliers to manufacturers. It ensures that manufacturers have the necessary materials to create their products.\nWhy this matters: Types of Logistics helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l03-f1",
          "front": "Logistics",
          "back": "The planning, execution, and control of the movement and storage of goods, services, and information from origin to consumption"
        },
        {
          "id": "supply-chain-management-101-l03-f2",
          "front": "How does SCM differ from logistics?",
          "back": "SCM is broader — it includes strategic sourcing, demand planning, supplier relationships, and cross-organizational optimization, while logistics focuses on movement and storage"
        },
        {
          "id": "supply-chain-management-101-l03-f3",
          "front": "Three types of logistics",
          "back": "Inbound (materials to manufacturer), Outbound (finished goods to customer), Reverse (returns, recycling, disposal — flowing backward through the chain)"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l04",
      "title": "The SCOR Model",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain the five processes of the SCOR model",
        "Describe how Plan integrates the other four processes",
        "Apply SCOR to benchmark supply chain performance"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l04-c1",
          "title": "Overview of the SCOR Model",
          "content": "The Supply Chain Operations Reference (SCOR) model is an important framework developed by the Supply Chain Council, which is now known as the Association for Supply Chain Management (ASCM). This model serves as a guide for businesses to effectively describe, measure, and enhance their supply chain processes. It breaks down the supply chain into five essential processes: Plan, Source, Make, Deliver, and Return. Each of these processes plays a crucial role in ensuring that products move smoothly from the initial planning stages all the way to the final delivery to customers. By utilizing the SCOR model, companies can benchmark their performance against others in the industry, which helps them identify areas where they may need to improve. Additionally, the SCOR model encourages organizations to adopt best practices that have been proven effective, all while using a common vocabulary that makes communication easier across different teams and departments. This shared understanding is vital for collaboration and efficiency in supply chain management.\nContext recap: The Supply Chain Operations Reference (SCOR) model is an important framework developed by the Supply Chain Council, which is now known as the Association for Supply Chain Management (ASCM). This model serves as a guide for businesses to effectively describe, measure, and enhance their supply chain processes. It breaks down the supply chain into five essential processes: Plan, Source, Make, Deliver, and Return. Each of these processes plays a crucial role in ensuring that products move smoothly from the initial planning stages all the way to the final delivery to customers."
        },
        {
          "id": "supply-chain-management-101-l04-c2",
          "title": "Plan, Source, and Make",
          "content": "In supply chain management, the planning process is essential and involves several key activities. First, demand forecasting helps businesses predict how much of a product will be needed in the future. This is followed by supply planning, where companies determine how to obtain the necessary materials. Creating an inventory strategy is also important, as it ensures that there is enough stock on hand without overstocking. Capacity planning helps businesses figure out how much they can produce based on their resources. All of these planning activities work together to coordinate the other processes in the supply chain effectively.\nNext, the sourcing process is all about finding and qualifying suppliers who can provide the materials needed. This includes purchasing the materials and ensuring they are received on time. Finally, the making process involves everything related to production. This includes manufacturing products, assembling them, testing for quality, packaging, and making sure everything meets the required standards. Each of these processes has specific steps and requirements that help ensure everything runs smoothly and efficiently.\nContext recap: In supply chain management, the planning process is essential and involves several key activities. First, demand forecasting helps businesses predict how much of a product will be needed in the future. This is followed by supply planning, where companies determine how to obtain the necessary materials. Creating an inventory strategy is also important, as it ensures that there is enough stock on hand without overstocking.\nWhy this matters: Plan, Source, and Make helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "supply-chain-management-101-l04-c3",
          "title": "Deliver and Return",
          "content": "In the world of supply chain management, the delivery process is crucial for ensuring that products reach customers efficiently and effectively. This process involves several key activities, including managing customer orders, organizing warehousing, coordinating transportation, and overseeing the distribution of products. Specifically, the delivery phase includes important tasks such as picking items from inventory, packing them securely for shipment, and arranging for shipping to the customer’s location. The final step, known as last-mile delivery, is particularly important as it involves getting the product directly to the customer’s doorstep.\nOn the other hand, the return process is equally significant as it addresses the reverse flow of products. This includes managing defective items that need to be returned, processing warranty claims for products that have issues, handling excess inventory that may not be sold, and ensuring that recyclable materials are dealt with properly.\nAdditionally, the SCOR model introduces the concept of 'Enable' processes. These are the management activities that support the five core processes of supply chain management. They include establishing rules, managing data, overseeing the workforce, and handling contracts. Together, all these elements create a comprehensive overview of how supply chain operations function, ensuring that both delivery and return processes are handled smoothly and efficiently.\nContext recap: In the world of supply chain management, the delivery process is crucial for ensuring that products reach customers efficiently and effectively. This process involves several key activities, including managing customer orders, organizing warehousing, coordinating transportation, and overseeing the distribution of products. Specifically, the delivery phase includes important tasks such as picking items from inventory, packing them securely for shipment, and arranging for shipping to the customer’s location. The final step, known as last-mile delivery, is particularly important as it involves getting the product directly to the customer’s doorstep.\nWhy this matters: Deliver and Return helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l04-f1",
          "front": "SCOR model",
          "back": "Supply Chain Operations Reference — a standardized framework with five core processes (Plan, Source, Make, Deliver, Return) for describing, measuring, and improving supply chains"
        },
        {
          "id": "supply-chain-management-101-l04-f2",
          "front": "The five SCOR processes",
          "back": "Plan (orchestrates all), Source (purchasing/receiving), Make (production/assembly), Deliver (order fulfillment/shipping), Return (reverse flow/returns)"
        },
        {
          "id": "supply-chain-management-101-l04-f3",
          "front": "SCOR Enable processes",
          "back": "Management activities — business rules, data management, workforce skills, contracts — that support the five core SCOR processes"
        }
      ],
      "learningAids": [
        {
          "id": "supply-chain-management-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l05",
      "title": "Checkpoint: Supply Chain Foundations",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "supply-chain-management-101-l05-q1",
          "text": "Which of the following is NOT one of the five core SCOR model processes?",
          "options": [
            {
              "id": "a",
              "text": "Plan"
            },
            {
              "id": "b",
              "text": "Source"
            },
            {
              "id": "c",
              "text": "Market"
            },
            {
              "id": "d",
              "text": "Return"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The five SCOR processes are Plan, Source, Make, Deliver, and Return. 'Market' is not one of them."
        },
        {
          "id": "supply-chain-management-101-l05-q2",
          "text": "What is the key difference between logistics and supply chain management?",
          "options": [
            {
              "id": "a",
              "text": "Logistics is broader than supply chain management"
            },
            {
              "id": "b",
              "text": "Supply chain management includes logistics plus strategic sourcing, demand planning, and cross-organizational coordination"
            },
            {
              "id": "c",
              "text": "They are identical concepts with different names"
            },
            {
              "id": "d",
              "text": "Logistics deals with information while SCM deals with physical goods"
            }
          ],
          "correctOptionId": "b",
          "explanation": "SCM is the broader discipline that encompasses logistics (movement and storage) plus strategic sourcing, supplier management, demand planning, and cross-organizational collaboration."
        },
        {
          "id": "supply-chain-management-101-l05-q3",
          "text": "Which type of logistics handles product returns, recalls, and recycling?",
          "options": [
            {
              "id": "a",
              "text": "Inbound logistics"
            },
            {
              "id": "b",
              "text": "Outbound logistics"
            },
            {
              "id": "c",
              "text": "Reverse logistics"
            },
            {
              "id": "d",
              "text": "Forward logistics"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Reverse logistics manages the backward flow of products — returns, recalls, recycling, and disposal — and can represent 5–10% of total supply chain cost."
        },
        {
          "id": "supply-chain-management-101-l05-q4",
          "text": "A Tier 2 supplier in a supply chain is best described as:",
          "options": [
            {
              "id": "a",
              "text": "A company that sells directly to end consumers"
            },
            {
              "id": "b",
              "text": "A supplier that provides materials to the focal company's direct suppliers"
            },
            {
              "id": "c",
              "text": "The most important supplier in the network"
            },
            {
              "id": "d",
              "text": "A backup supplier used only during disruptions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tier 2 suppliers provide materials to Tier 1 suppliers, who in turn sell directly to the focal company. The tier number indicates distance from the focal firm, not importance."
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l06",
      "title": "Supply Chain Metrics & Performance",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Calculate fill rate, lead time, and inventory turns",
        "Explain the trade-offs between supply chain metrics",
        "Use metrics to diagnose supply chain problems"
      ],
      "chunks": [
        {
          "id": "supply-chain-management-101-l06-c1",
          "title": "Fill Rate and Order Accuracy",
          "content": "Fill rate is a key performance indicator that helps us understand how effectively a company can satisfy customer demand right away using the inventory they currently have available. For instance, if a company reports a fill rate of 95%, this indicates that 5% of customer orders may not be fulfilled immediately due to items being out of stock. This is important because it shows how well the company can respond to customer needs in real-time. On the other hand, order accuracy is another critical metric that measures how many orders are delivered correctly, without any mistakes. This includes ensuring that the right item is sent, the correct quantity is provided, and that the goods are not damaged during transit. Leading supply chains strive to achieve fill rates that exceed 98% and order accuracy rates above 99%. These two metrics are vital because they directly influence customer satisfaction and loyalty. When customers receive their orders accurately and on time, they are more likely to return for future purchases, which is essential for the success of any business.\nContext recap: Fill rate is a key performance indicator that helps us understand how effectively a company can satisfy customer demand right away using the inventory they currently have available. For instance, if a company reports a fill rate of 95%, this indicates that 5% of customer orders may not be fulfilled immediately due to items being out of stock. This is important because it shows how well the company can respond to customer needs in real-time. On the other hand, order accuracy is another critical metric that measures how many orders are delivered correctly, without any mistakes."
        },
        {
          "id": "supply-chain-management-101-l06-c2",
          "title": "Lead Time and Cycle Time",
          "content": "Lead time is an important idea in supply chain management. It refers to the total amount of time that passes from when a customer places an order until they receive their product. This time includes several different stages: first, there is the processing time, which is how long it takes to handle the order; next, there is the production time, which is the time needed to actually make the product; and finally, there is the transportation time, which is how long it takes to deliver the product to the customer. On the other hand, cycle time is a bit different. It measures how long it takes to finish one specific internal process, such as the time it takes to manufacture a product from start to finish. Reducing lead time is very important for companies because it can give them a big advantage over their competitors. For example, Amazon has become a leader in the supply chain industry by consistently finding ways to reduce delivery lead times, shrinking them from several days down to just a few hours. This improvement makes it much more convenient for customers to receive their orders quickly, which is a key factor in their success.\nContext recap: Lead time is an important idea in supply chain management. It refers to the total amount of time that passes from when a customer places an order until they receive their product. This time includes several different stages: first, there is the processing time, which is how long it takes to handle the order; next, there is the production time, which is the time needed to actually make the product; and finally, there is the transportation time, which is how long it takes to deliver the product to the customer. On the other hand, cycle time is a bit different."
        },
        {
          "id": "supply-chain-management-101-l06-c3",
          "title": "Inventory Turns and Cash-to-Cash Cycle",
          "content": "Inventory turns are an important concept in business that helps us understand how efficiently a company is managing its stock. Specifically, inventory turns indicate how many times a company sells and replaces its inventory over a specific period, such as a month or a year. To calculate inventory turns, you divide the cost of goods sold (which is the total cost of the products that were sold during that period) by the average inventory that the company holds. A higher number of inventory turns is generally a positive sign, as it means that the company is selling its products quickly and not tying up too much money in unsold stock. This efficiency can lead to better financial health for the business.\nOn the other hand, the cash-to-cash cycle is another key metric that measures the time it takes for cash to flow through a company. It starts from the moment a company pays its suppliers for the materials needed to create its products and ends when the company receives payment from its customers for those products. A fascinating example of effective cash management is Dell, a company that transformed the computing industry. Dell was able to achieve a negative cash-to-cash cycle, meaning they collected payments from customers before they had to pay their suppliers. This innovative approach allowed Dell to maintain a strong cash flow, which is crucial for any business's success.\nContext recap: Inventory turns are an important concept in business that helps us understand how efficiently a company is managing its stock. Specifically, inventory turns indicate how many times a company sells and replaces its inventory over a specific period, such as a month or a year. To calculate inventory turns, you divide the cost of goods sold (which is the total cost of the products that were sold during that period) by the average inventory that the company holds. A higher number of inventory turns is generally a positive sign, as it means that the company is selling its products quickly and not tying up too much money in unsold stock.\nWhy this matters: Inventory Turns and Cash-to-Cash Cycle helps learners in Business connect ideas from Supply Chain Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "supply-chain-management-101-l06-f1",
          "front": "Fill rate",
          "back": "Percentage of customer demand met immediately from available stock — world-class supply chains achieve above 98%"
        },
        {
          "id": "supply-chain-management-101-l06-f2",
          "front": "Inventory turns",
          "back": "Cost of goods sold ÷ average inventory — measures how often inventory is sold and replaced; higher turns mean less capital tied up"
        },
        {
          "id": "supply-chain-management-101-l06-f3",
          "front": "Cash-to-cash cycle",
          "back": "Time from paying suppliers to collecting from customers — shorter (or negative) cycles free working capital for other investments"
        }
      ]
    },
    {
      "id": "supply-chain-management-101-l07",
      "title": "Final Assessment: Supply Chain Fundamentals",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "supply-chain-management-101-l07-q1",
          "text": "A company has COGS of $10 million and average inventory of $2 million. What is its inventory turns?",
          "options": [
            {
              "id": "a",
              "text": "2 turns"
            },
            {
              "id": "b",
              "text": "5 turns"
            },
            {
              "id": "c",
              "text": "8 turns"
            },
            {
              "id": "d",
              "text": "20 turns"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Inventory turns = COGS ÷ Average Inventory = $10M ÷ $2M = 5 turns. The company sells and replaces its inventory five times per period."
        },
        {
          "id": "supply-chain-management-101-l07-q2",
          "text": "The bullwhip effect is best described as:",
          "options": [
            {
              "id": "a",
              "text": "A reduction in demand variability as orders move upstream"
            },
            {
              "id": "b",
              "text": "An amplification of demand variability as orders move upstream through the supply chain"
            },
            {
              "id": "c",
              "text": "The tendency for lead times to decrease at each supply chain tier"
            },
            {
              "id": "d",
              "text": "A method for improving forecast accuracy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The bullwhip effect describes how small fluctuations in consumer demand get amplified as orders move upstream — each tier over-reacts, causing excessive inventory swings."
        },
        {
          "id": "supply-chain-management-101-l07-q3",
          "text": "Which of the three supply chain flows moves BIDIRECTIONALLY?",
          "options": [
            {
              "id": "a",
              "text": "Product flow"
            },
            {
              "id": "b",
              "text": "Financial flow"
            },
            {
              "id": "c",
              "text": "Information flow"
            },
            {
              "id": "d",
              "text": "All three flows are strictly one-directional"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Information flow moves bidirectionally — demand data flows upstream while supply status and tracking data flow downstream. Product flow is primarily downstream (with reverse logistics exceptions), and financial flow is primarily upstream."
        },
        {
          "id": "supply-chain-management-101-l07-q4",
          "text": "Which SCOR process orchestrates and integrates all other supply chain processes?",
          "options": [
            {
              "id": "a",
              "text": "Source"
            },
            {
              "id": "b",
              "text": "Make"
            },
            {
              "id": "c",
              "text": "Plan"
            },
            {
              "id": "d",
              "text": "Deliver"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Plan is the integrating process in SCOR — it encompasses demand forecasting, supply planning, inventory strategy, and capacity planning that coordinate Source, Make, Deliver, and Return."
        }
      ]
    }
  ]
};
