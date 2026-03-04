import type { LearningModule } from "@/lib/modules/types";

export const OperationsManagement301Module: LearningModule = {
  "id": "operations-management-301",
  "title": "Supply Chain & Inventory Management",
  "description": "Design resilient supply chains and optimize inventory decisions. Master EOQ models, safety stock calculations, JIT delivery systems, demand forecasting, and supplier relationship strategies that balance cost, speed, and reliability across global networks.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "operations"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design a supply chain network that balances cost, speed, and resilience",
    "Calculate Economic Order Quantity, reorder points, and safety stock levels",
    "Explain Just-in-Time delivery and the conditions required for its success",
    "Select and apply appropriate demand forecasting methods",
    "Describe the bullwhip effect and implement strategies to mitigate it",
    "Evaluate and structure supplier relationships from arm's length to strategic partnership",
    "Optimize logistics and distribution network design for cost and service"
  ],
  "lessons": [
    {
      "id": "operations-management-301-l01",
      "title": "Supply Chain Design and Architecture",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Define supply chain management and map a multi-tier supply chain",
        "Compare responsive versus efficient supply chain strategies",
        "Explain the concept of supply chain fit with product characteristics"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l01-c1",
          "title": "What Is a Supply Chain?",
          "content": "A supply chain is like a big team that works together to help move a product from its very beginning as raw materials all the way to the person who buys it. This team includes many different organizations, activities, and resources that all play important roles. For example, when we think about a company like Apple, their supply chain is not just about what happens in their own buildings. It involves many places around the world. There are mining companies in Congo that extract cobalt, which is a key material for making batteries. Then, there are refineries in China that process these materials, and factories in South Korea and Japan that create the various parts needed for the products. After that, assembly plants in China and India put everything together to make the final product. Finally, there are retail stores and delivery networks that help get the products to customers everywhere. Supply chain management is all about making sure that materials, information, and money flow smoothly through this entire network. This coordination is essential to ensure that customers receive the best value possible for the products they purchase. By understanding how a supply chain works, we can appreciate the complexity and effort that goes into delivering goods to our doorsteps, and why it is important for businesses to manage these processes effectively.\nContext recap: A supply chain is like a big team that works together to help move a product from its very beginning as raw materials all the way to the person who buys it. This team includes many different organizations, activities, and resources that all play important roles. For example, when we think about a company like Apple, their supply chain is not just about what happens in their own buildings. It involves many places around the world.\nWhy this matters: What Is a Supply Chain? helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "operations-management-301-l01-c2",
          "title": "Efficient vs. Responsive Supply Chains",
          "content": "Marshall Fisher introduced a very useful way to understand how supply chains work by categorizing them into two main strategies: efficient and responsive. Let's break these down! Efficient supply chains are all about keeping costs as low as possible. They are best for products that have stable and predictable demand, such as canned soup. In these situations, businesses focus on having minimal inventory, which means they don’t keep too many products on hand, and they aim to run their operations as smoothly as possible. This helps them save money and ensure that they can meet customer needs without wasting resources.\nOn the flip side, we have responsive supply chains. These are designed to be quick and flexible, which is especially important for products that are new or trendy, where demand can change very quickly. A great example of this is Zara, a well-known clothing brand. Zara can create and deliver new clothing designs in just two weeks! This speed allows them to keep up with the latest fashion trends. In contrast, a company that produces basic chemicals might focus more on keeping costs low over a longer time frame, rather than being super quick.\nBy understanding these two strategies, businesses can make better decisions about how to manage their products and meet customer needs effectively. Knowing when to be efficient and when to be responsive is key to success in supply chain management.\nContext recap: Marshall Fisher introduced a very useful way to understand how supply chains work by categorizing them into two main strategies: efficient and responsive. Let's break these down! Efficient supply chains are all about keeping costs as low as possible. They are best for products that have stable and predictable demand, such as canned soup.\nWhy this matters: Efficient vs. Responsive Supply Chains helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "operations-management-301-l01-c3",
          "title": "Supply Chain Fit",
          "content": "In today's business world, it's crucial for companies to align their supply chain strategies with the types of products they offer. When a company sells basic commodities, like sugar or flour, using a supply chain that is too responsive can lead to unnecessary costs. This means they might spend more money than needed to keep up with changes in demand. On the other hand, if a company sells trendy fashion items, relying solely on an efficient supply chain can be risky. They might find themselves running out of popular items that customers want, or they may have to lower prices on items that aren't selling well, which can hurt their profits. Hau Lee's uncertainty framework is a helpful tool that shows us how to navigate these challenges. It highlights that when both demand and supply are unpredictable—like when launching new technology products—companies need an agile supply chain. This type of supply chain combines quick responses to customer needs with strategies to manage risks related to supply. A great example of this is Dell, which has pioneered a method called postponement. This means they wait to customize their products until they receive actual orders from customers. By doing this, they can be both efficient in their operations and responsive to what customers want, ensuring they meet demand without overproducing. Understanding these concepts can help businesses thrive in a competitive market by making smarter decisions about their supply chains.\nContext recap: In today's business world, it's crucial for companies to align their supply chain strategies with the types of products they offer. When a company sells basic commodities, like sugar or flour, using a supply chain that is too responsive can lead to unnecessary costs. This means they might spend more money than needed to keep up with changes in demand. On the other hand, if a company sells trendy fashion items, relying solely on an efficient supply chain can be risky.\nWhy this matters: Supply Chain Fit helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l01-f1",
          "front": "Supply chain management",
          "back": "Coordinating flows of materials, information, and money across all organizations from raw materials to end customer to maximize total value delivered"
        },
        {
          "id": "operations-management-301-l01-f2",
          "front": "Efficient vs. responsive supply chain",
          "back": "Efficient: minimizes cost for stable-demand products (low inventory, high utilization). Responsive: prioritizes speed and flexibility for uncertain-demand products (quick reaction, buffer capacity)"
        },
        {
          "id": "operations-management-301-l01-f3",
          "front": "Postponement strategy",
          "back": "Delaying final product customization until customer orders are received — combining upstream efficiency with downstream responsiveness (e.g., Dell's build-to-order model)"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-301-l02",
      "title": "Inventory Management Models",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Calculate Economic Order Quantity and total inventory cost",
        "Determine reorder points and safety stock levels",
        "Apply ABC analysis to prioritize inventory management effort"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l02-c1",
          "title": "The Economic Order Quantity (EOQ)",
          "content": "The Economic Order Quantity, often abbreviated as EOQ, is an important concept in inventory management that helps businesses determine the optimal amount of inventory to order each time they make a purchase. This is crucial because ordering the right amount can significantly affect a company's overall costs. When businesses choose to order in large quantities, they can reduce certain costs associated with placing orders. For example, they will have fewer purchase orders to manage, which means less paperwork and fewer deliveries to coordinate. This can lead to savings in time and resources. However, there is a downside to ordering too much at once. When companies hold large amounts of inventory, they incur higher holding costs. These costs can include expenses for storage space, the capital tied up in unsold goods, and the risk that some products may become outdated or obsolete before they can be sold. The EOQ formula is designed to help businesses find the ideal balance between these ordering and holding costs, ensuring that total costs are minimized. The formula is expressed as EOQ = sqrt(2DS/H). In this formula, 'D' stands for the annual demand for the product, 'S' represents the cost incurred for each order placed, and 'H' is the annual holding cost for each unit of inventory. To illustrate this with an example, let's say a distributor has an annual demand of 10,000 units, incurs a cost of $50 for each order, and has a holding cost of $5 for each unit. By plugging these numbers into the EOQ formula, they would calculate their optimal order quantity to be approximately 447 units per order. This calculation helps the distributor manage their inventory more effectively, balancing the costs of ordering and holding stock while meeting customer demand efficiently.\nContext recap: The Economic Order Quantity, often abbreviated as EOQ, is an important concept in inventory management that helps businesses determine the optimal amount of inventory to order each time they make a purchase. This is crucial because ordering the right amount can significantly affect a company's overall costs. When businesses choose to order in large quantities, they can reduce certain costs associated with placing orders. For example, they will have fewer purchase orders to manage, which means less paperwork and fewer deliveries to coordinate.\nWhy this matters: The Economic Order Quantity (EOQ) helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-301-l02-c2",
          "title": "Reorder Point and Safety Stock",
          "content": "The reorder point, often abbreviated as ROP, is a vital figure for businesses that helps them determine the right moment to place a new order for inventory. This ensures that they do not run out of stock and can meet customer demand without delays. The formula to calculate the reorder point is: ROP = (average daily demand × lead time) + safety stock. Let's break this down with an example: if a company sells 40 units of a product each day and it takes 5 days to receive a new shipment, we can calculate the basic reorder point. In this case, the calculation would be 40 units per day multiplied by 5 days, which equals 200 units. This means that when the inventory level reaches 200 units, the company should place a new order to replenish stock. However, it’s important to note that both customer demand and lead time can fluctuate. This is where safety stock comes into play. Safety stock is like a cushion that helps businesses prepare for unexpected changes in demand or delays in receiving new products. It acts as a buffer to ensure that there are enough products available to meet customer needs even when things don’t go as planned. To calculate safety stock, we use the formula: SS = z × σ_dLT. In this formula, 'SS' stands for safety stock, 'z' represents the number of standard deviations that corresponds to the desired service level (for example, a 'z' value of 1.65 is used for a 95% service level), and 'σ_dLT' is the standard deviation of demand during the lead time. It’s important to understand that higher service levels require more safety stock. This means that if a business wants to ensure that they can meet customer demand almost all the time, they will need to keep a larger amount of safety stock on hand. This careful planning helps businesses maintain good relationships with their customers by ensuring that products are available when they are needed most.\nContext recap: The reorder point, often abbreviated as ROP, is a vital figure for businesses that helps them determine the right moment to place a new order for inventory. This ensures that they do not run out of stock and can meet customer demand without delays. The formula to calculate the reorder point is: ROP = (average daily demand × lead time) + safety stock. Let's break this down with an example: if a company sells 40 units of a product each day and it takes 5 days to receive a new shipment, we can calculate the basic reorder point.\nWhy this matters: Reorder Point and Safety Stock helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-301-l02-c3",
          "title": "ABC Analysis",
          "content": "In a business, not every item in the inventory is equally important, and that's where ABC analysis comes in. This method helps businesses decide how much attention to give to different items based on their value. It is based on the Pareto principle, which states that a small number of items often represent a large portion of value. In this case, A items, which are about 20% of all items, make up around 80% of the total inventory value. Because of their high value, A items require the most careful management. This includes practices like frequent inventory checks, accurate forecasting of how much will be needed, and close communication with suppliers to ensure these important items are always available.\nNext, we have B items. These make up about 30% of the inventory and account for approximately 15% of the total value. B items receive moderate attention, meaning they are monitored regularly but not as intensely as A items. Finally, there are C items, which represent about 50% of the inventory but only contribute to 5% of the total value. These items are managed using simpler methods, such as a two-bin system, where there are two containers for each item, making it easy to track when to reorder.\nFor instance, in a hospital pharmacy, expensive chemotherapy drugs would be classified as A items and would be closely monitored to ensure they are always in stock. On the other hand, less expensive items like bandages would be considered C items and could be reordered automatically when supplies run low. This approach helps businesses focus their resources where they matter most, ensuring efficiency and cost-effectiveness in inventory management.\nContext recap: In a business, not every item in the inventory is equally important, and that's where ABC analysis comes in. This method helps businesses decide how much attention to give to different items based on their value. It is based on the Pareto principle, which states that a small number of items often represent a large portion of value. In this case, A items, which are about 20% of all items, make up around 80% of the total inventory value.\nWhy this matters: ABC Analysis helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l02-f1",
          "front": "Economic Order Quantity (EOQ)",
          "back": "EOQ = sqrt(2DS/H) — the order size that minimizes total inventory cost by balancing ordering costs (S) and holding costs (H) for annual demand (D)"
        },
        {
          "id": "operations-management-301-l02-f2",
          "front": "Reorder point formula",
          "back": "ROP = (Average daily demand × Lead time) + Safety stock. Safety stock = z × σ of demand during lead time, where z reflects the desired service level"
        },
        {
          "id": "operations-management-301-l02-f3",
          "front": "ABC analysis",
          "back": "Pareto-based classification: A items (20% of SKUs, 80% of value) get tight controls; B items (30%, 15%) get moderate controls; C items (50%, 5%) use simple rules"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-301-l03",
      "title": "Just-in-Time Delivery and Pull Systems",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Contrast push and pull inventory systems",
        "Explain the prerequisites for successful JIT delivery",
        "Evaluate the risks and benefits of JIT in different contexts"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l03-c1",
          "title": "Push vs. Pull Systems",
          "content": "In the world of supply chain management, understanding the difference between push and pull systems is essential. Let's break it down! In a push system, companies make products based on predictions about what customers will want. They produce these items and push them through the supply chain, hoping that customers will purchase them. This approach can lead to excess inventory if the predictions are incorrect, as companies might end up with more products than they can sell.\nOn the other hand, a pull system operates differently. It is driven by actual customer demand. This means that when a customer buys a product, it triggers a process to restock that item. A fantastic example of a pull system is Walmart's Retail Link system. Imagine this: when you scan a tube of toothpaste at the checkout, that information is sent back to Procter & Gamble. This company then knows it needs to make and ship a new tube to the store.\nThe pull system is advantageous because it helps keep inventory levels low. Instead of relying on guesses about what customers might want, it responds directly to what they actually buy. This approach not only saves money but also ensures that products are available when customers need them. Understanding these systems is crucial for anyone interested in how businesses operate efficiently and meet customer needs effectively.\nContext recap: In the world of supply chain management, understanding the difference between push and pull systems is essential. Let's break it down! In a push system, companies make products based on predictions about what customers will want. They produce these items and push them through the supply chain, hoping that customers will purchase them.\nWhy this matters: Push vs. Pull Systems helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "operations-management-301-l03-c2",
          "title": "JIT Delivery Requirements",
          "content": "Just-in-time (JIT) delivery is a special method used in supply chain management that helps companies operate more efficiently. For JIT to work well, it needs a strong support system made up of several important factors. First, suppliers must be reliable, meaning they can be counted on to deliver materials on time and in good condition. It is often beneficial for these suppliers to be located close to the manufacturing plants. For example, Toyota has its suppliers located within 60 miles of its assembly plants, which helps ensure timely deliveries.\nNext, transportation plays a key role in JIT delivery. It needs to be frequent and dependable, which means that companies prefer smaller shipments that arrive more often instead of large shipments that come less frequently. This approach helps keep inventory levels low while still meeting production needs.\nQuality is another crucial aspect of JIT delivery. Since there is no extra stock available to cover any defective items, it is essential that the materials received are of consistently high quality. If a supplier delivers faulty products, it can disrupt the entire production process.\nMoreover, sharing information between suppliers and manufacturers must be clear and timely. This transparency allows suppliers to understand real-time demand and adjust their deliveries accordingly.\nFinally, setup times for production processes must be kept short. This allows companies to produce smaller batches of products more frequently, which aligns with the JIT philosophy. Without these essential elements in place, JIT delivery can lead to stock shortages instead of the intended savings and efficiency improvements.\nContext recap: Just-in-time (JIT) delivery is a special method used in supply chain management that helps companies operate more efficiently. For JIT to work well, it needs a strong support system made up of several important factors. First, suppliers must be reliable, meaning they can be counted on to deliver materials on time and in good condition. It is often beneficial for these suppliers to be located close to the manufacturing plants.\nWhy this matters: JIT Delivery Requirements helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-301-l03-c3",
          "title": "JIT Risks and Resilience",
          "content": "Just-in-time (JIT) delivery is a popular method used by many businesses to keep their inventory levels low, which can save money and reduce waste. However, this approach also comes with some risks. For instance, significant events like the 2011 Tohoku earthquake in Japan and the 2021 blockage of the Suez Canal highlighted how having very little inventory can create big problems when unexpected disruptions happen in global supply chains. A clear example of this is when car manufacturers had to halt their production for several weeks because they were waiting for just one missing part to arrive. This situation shows how interconnected and fragile supply chains can be.\nIn response to these challenges, many companies have started to change their strategies. After the pandemic, a lot of businesses began adopting what is known as 'just-in-case' strategies. This means they decided to keep some extra stock on hand and also source critical components from multiple suppliers instead of relying on just one. This way, if one supplier faces a problem, they can still get the parts they need from another source.\nThe important takeaway is to use a risk-adjusted approach to JIT. This means applying lean inventory management techniques in situations where disruptions are unlikely and the consequences of a delay are manageable. At the same time, it’s crucial to maintain safety stock for essential items that are hard to replace, ensuring that businesses can continue to operate smoothly even when unexpected issues arise.\nContext recap: Just-in-time (JIT) delivery is a popular method used by many businesses to keep their inventory levels low, which can save money and reduce waste. However, this approach also comes with some risks. For instance, significant events like the 2011 Tohoku earthquake in Japan and the 2021 blockage of the Suez Canal highlighted how having very little inventory can create big problems when unexpected disruptions happen in global supply chains. A clear example of this is when car manufacturers had to halt their production for several weeks because they were waiting for just one missing part to arrive.\nWhy this matters: JIT Risks and Resilience helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l03-f1",
          "front": "Push vs. pull inventory systems",
          "back": "Push: production driven by forecasts, products pushed to market. Pull: actual customer demand triggers replenishment backward through the supply chain"
        },
        {
          "id": "operations-management-301-l03-f2",
          "front": "JIT delivery prerequisites",
          "back": "Reliable nearby suppliers, frequent dependable transport, consistently high quality, transparent information sharing, and short setup times"
        },
        {
          "id": "operations-management-301-l03-f3",
          "front": "Just-in-case strategy",
          "back": "Post-pandemic shift from pure JIT to maintaining strategic buffer stocks and dual-sourcing critical components to improve supply chain resilience"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "operations-management-301-l04",
      "title": "Demand Forecasting Methods",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Distinguish between qualitative and quantitative forecasting methods",
        "Apply moving averages and exponential smoothing techniques",
        "Measure forecast accuracy using MAD, MSE, and MAPE"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l04-c1",
          "title": "Qualitative Forecasting",
          "content": "Qualitative forecasting methods are essential tools used by businesses when there isn't enough reliable historical data to make accurate predictions. This situation often arises during new product launches or significant changes in the market. One widely recognized qualitative method is the Delphi method. This approach involves gathering insights from a group of experts who provide their opinions through several rounds of anonymous surveys. The goal is to reach a consensus, meaning that the experts work together to agree on the best possible forecast.\nAnother important qualitative method is market research. This involves collecting information directly from potential customers through surveys and focus groups. These tools help businesses understand consumer preferences and behaviors, which can significantly influence demand. Additionally, sales force composites are used, where individual sales representatives share their estimates based on their interactions with customers. This method aggregates various perspectives to create a more comprehensive forecast.\nMoreover, executive opinions are also valuable in this process. Senior leadership can provide strategic insights based on their experience and understanding of the market. While these qualitative methods may be subjective, they play a crucial role in predicting demand for new products that lack a sales history. A notable example is when Apple forecasted the demand for the first iPhone, relying on these qualitative techniques to gauge interest and potential sales before the product was even launched.\nContext recap: Qualitative forecasting methods are essential tools used by businesses when there isn't enough reliable historical data to make accurate predictions. This situation often arises during new product launches or significant changes in the market. One widely recognized qualitative method is the Delphi method. This approach involves gathering insights from a group of experts who provide their opinions through several rounds of anonymous surveys.\nWhy this matters: Qualitative Forecasting helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "operations-management-301-l04-c2",
          "title": "Quantitative Forecasting",
          "content": "Quantitative forecasting methods are essential tools that businesses use to predict future demand based on historical data. One of the most popular techniques is the time-series method, which analyzes past sales patterns to make informed predictions about future sales. This method is particularly useful because it allows businesses to identify trends and seasonal variations over time.\nA simple moving average is one way to smooth out fluctuations in sales data. It does this by calculating the average sales over a specific number of periods. For instance, if a company has sales figures of 100, 120, and 110 over the last three months, the 3-month moving average would forecast future sales to be 110. This approach helps to reduce the impact of random variations in sales data, providing a clearer picture of overall trends.\nAnother technique is the weighted moving average, which assigns more significance to the most recent data points. This means that recent sales figures have a greater influence on the forecast than older figures, making it a more responsive method.\nExponential smoothing is another widely used forecasting method in demand planning. It uses a formula to combine the most recent actual sales data with the previous forecast. The formula is: Forecast = α × (latest actual) + (1 − α) × (previous forecast). In this formula, α is a coefficient that ranges from 0 to 1, determining how quickly the forecast will adjust to new information. A higher α value, such as between 0.3 and 0.5, means the forecast will react quickly to changes in sales data, while a lower α value, like between 0.05 and 0.1, results in a more stable forecast that is less sensitive to short-term fluctuations. Understanding these methods is crucial for effective demand planning and inventory management.\nContext recap: Quantitative forecasting methods are essential tools that businesses use to predict future demand based on historical data. One of the most popular techniques is the time-series method, which analyzes past sales patterns to make informed predictions about future sales. This method is particularly useful because it allows businesses to identify trends and seasonal variations over time. A simple moving average is one way to smooth out fluctuations in sales data.\nWhy this matters: Quantitative Forecasting helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-301-l04-c3",
          "title": "Measuring Forecast Accuracy",
          "content": "Forecasting demand is a crucial part of managing supply chains, but it's important to remember that no forecast can be perfect. Therefore, measuring how accurate our forecasts are is essential for making informed decisions. One common method to assess forecast accuracy is called Mean Absolute Deviation, or MAD for short. MAD calculates the average of the absolute differences between what we predicted and what actually happened in terms of sales. This is helpful because it gives us a clear understanding of the typical error in the same units as the demand we are measuring.\nAnother method we can use is Mean Squared Error, or MSE. This technique takes the errors from our forecasts, squares them, and then averages those squared values. By squaring the errors, MSE places more emphasis on larger mistakes, which can help us identify significant issues in our forecasting process.\nWe also have the Mean Absolute Percentage Error, known as MAPE. This method expresses errors as percentages, making it easier to compare the accuracy of forecasts across different products, especially when those products have varying levels of demand. For instance, if we have a MAPE of 15%, it means that our forecasts are typically off by 15%.\nLastly, it’s important to keep an eye on any bias in our forecasts. Bias occurs when we consistently overestimate or underestimate demand. Tracking this bias helps us improve our forecasting methods over time, ensuring that we make better predictions in the future.\nContext recap: Forecasting demand is a crucial part of managing supply chains, but it's important to remember that no forecast can be perfect. Therefore, measuring how accurate our forecasts are is essential for making informed decisions. One common method to assess forecast accuracy is called Mean Absolute Deviation, or MAD for short. MAD calculates the average of the absolute differences between what we predicted and what actually happened in terms of sales.\nWhy this matters: Measuring Forecast Accuracy helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l04-f1",
          "front": "Delphi method",
          "back": "Qualitative forecasting technique using multiple anonymous rounds of expert surveys that converge toward consensus — useful when no historical data exists"
        },
        {
          "id": "operations-management-301-l04-f2",
          "front": "Exponential smoothing formula",
          "back": "Forecast = α × (latest actual) + (1 − α) × (previous forecast). Alpha (0–1) controls responsiveness: higher α reacts faster to changes"
        },
        {
          "id": "operations-management-301-l04-f3",
          "front": "MAPE (Mean Absolute Percentage Error)",
          "back": "Average of absolute forecast errors expressed as percentages of actual demand — enables comparison of accuracy across products with different volume levels"
        }
      ],
      "learningAids": [
        {
          "id": "operations-management-301-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "operations-management-301-l05",
      "title": "Checkpoint: Supply Chain & Inventory Decisions",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "operations-management-301-l05-q1",
          "text": "Annual demand is 5,000 units, ordering cost is $40 per order, and holding cost is $2 per unit per year. What is the EOQ?",
          "options": [
            {
              "id": "a",
              "text": "200 units"
            },
            {
              "id": "b",
              "text": "316 units"
            },
            {
              "id": "c",
              "text": "447 units"
            },
            {
              "id": "d",
              "text": "500 units"
            }
          ],
          "correctOptionId": "c",
          "explanation": "EOQ = sqrt(2 × 5,000 × 40 / 2) = sqrt(200,000) = 447 units. This is the order quantity that minimizes total ordering plus holding costs."
        },
        {
          "id": "operations-management-301-l05-q2",
          "text": "Which supply chain strategy is best suited for fashion apparel with unpredictable demand?",
          "options": [
            {
              "id": "a",
              "text": "Efficient supply chain with lean inventory"
            },
            {
              "id": "b",
              "text": "Responsive supply chain with speed and flexibility"
            },
            {
              "id": "c",
              "text": "Cost-minimizing supply chain with large batch production"
            },
            {
              "id": "d",
              "text": "Stable supply chain with long planning horizons"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fashion products have uncertain demand, so a responsive supply chain that can quickly react to trends (like Zara's model) is the best fit."
        },
        {
          "id": "operations-management-301-l05-q3",
          "text": "In exponential smoothing, what happens when you increase the smoothing constant alpha toward 1?",
          "options": [
            {
              "id": "a",
              "text": "The forecast becomes more stable and ignores recent changes"
            },
            {
              "id": "b",
              "text": "The forecast reacts more quickly to recent actual demand"
            },
            {
              "id": "c",
              "text": "The forecast always equals the historical average"
            },
            {
              "id": "d",
              "text": "The forecast becomes a simple moving average"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Higher alpha gives more weight to the latest actual value and less to previous forecasts, making the forecast more responsive (but also more volatile)."
        },
        {
          "id": "operations-management-301-l05-q4",
          "text": "In ABC analysis, which category of items should receive the most management attention?",
          "options": [
            {
              "id": "a",
              "text": "A items — 20% of SKUs representing 80% of value"
            },
            {
              "id": "b",
              "text": "B items — 30% of SKUs representing 15% of value"
            },
            {
              "id": "c",
              "text": "C items — 50% of SKUs representing 5% of value"
            },
            {
              "id": "d",
              "text": "All items should receive equal attention"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A items account for the vast majority of inventory value, so they deserve tight controls including frequent counts, precise forecasting, and close supplier management."
        }
      ]
    },
    {
      "id": "operations-management-301-l06",
      "title": "The Bullwhip Effect and Supplier Management",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain the causes and consequences of the bullwhip effect",
        "Identify strategies to mitigate demand amplification",
        "Design supplier relationship structures from transactional to strategic partnerships"
      ],
      "chunks": [
        {
          "id": "operations-management-301-l06-c1",
          "title": "The Bullwhip Effect Explained",
          "content": "The bullwhip effect is a key idea in supply chain management that illustrates how small changes in customer demand can lead to much larger changes in the orders that businesses place. Imagine a situation where a retail store sees a 5% increase in sales. To keep up with this demand, the distributor might decide to increase their orders by 10%. This decision then influences the manufacturer, who may feel the need to raise their orders by 20% to ensure they have enough products available. Finally, the supplier of raw materials could react by increasing their orders by an even larger amount, say 40%. This chain reaction occurs because each link in the supply chain tends to add a little extra to their orders as a precaution, which can result in significant fluctuations in production and inventory levels. A famous example of the bullwhip effect can be seen in Procter & Gamble's experience with Pampers diapers. Despite the fact that consumer usage of diapers remained stable, the orders placed by factories varied greatly. This situation highlights how the bullwhip effect can lead to confusion and inefficiencies within supply chains, making it crucial for businesses to understand and manage these dynamics effectively. By recognizing the bullwhip effect, companies can work to create smoother operations and better meet customer needs without overreacting to minor changes in demand.\nContext recap: The bullwhip effect is a key idea in supply chain management that illustrates how small changes in customer demand can lead to much larger changes in the orders that businesses place. Imagine a situation where a retail store sees a 5% increase in sales. To keep up with this demand, the distributor might decide to increase their orders by 10%. This decision then influences the manufacturer, who may feel the need to raise their orders by 20% to ensure they have enough products available.\nWhy this matters: The Bullwhip Effect Explained helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-301-l06-c2",
          "title": "Mitigating the Bullwhip Effect",
          "content": "The bullwhip effect is a phenomenon that can create significant challenges in supply chain management, and it arises from four main causes, each of which has a corresponding solution. The first cause is demand signal processing, which occurs when businesses overreact to short-term changes in customer demand. This can lead to inefficiencies and excess inventory. To mitigate this issue, companies can share real-time point-of-sale data across the entire supply chain. By doing so, all parties involved can make more informed decisions based on actual sales trends rather than reacting impulsively to temporary spikes in demand.\nThe second cause is order batching, which refers to the practice of placing large, infrequent orders. This can create fluctuations in inventory levels and complicate logistics. To address this, businesses can opt for smaller, more frequent orders and consider consolidating shipments whenever possible. This approach helps maintain a steadier flow of products and reduces the risk of stockouts.\nThe third cause involves price fluctuations, particularly when customers buy in larger quantities during promotional sales. This behavior can lead to unpredictable demand patterns. To counteract this, companies can implement everyday low pricing strategies, which help stabilize prices and encourage consistent purchasing behavior from customers.\nLastly, shortage gaming occurs when businesses inflate their orders during times of supply constraints, anticipating that they might not receive enough stock. This can be managed by basing orders on actual sales history rather than inflated expectations. A practical example of effective management in this area is Walmart's Vendor Managed Inventory program. In this program, suppliers monitor and manage stock levels based on real-time data, which fosters collaboration and efficiency throughout the supply chain. By understanding and addressing these root causes, businesses can significantly reduce the impact of the bullwhip effect and enhance their overall supply chain performance.\nContext recap: The bullwhip effect is a phenomenon that can create significant challenges in supply chain management, and it arises from four main causes, each of which has a corresponding solution. The first cause is demand signal processing, which occurs when businesses overreact to short-term changes in customer demand. This can lead to inefficiencies and excess inventory. To mitigate this issue, companies can share real-time point-of-sale data across the entire supply chain.\nWhy this matters: Mitigating the Bullwhip Effect helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "operations-management-301-l06-c3",
          "title": "Supplier Relationship Management",
          "content": "Supplier relationships play a vital role in how businesses manage their supply chains, and it's important to understand the different types of relationships that can exist. At one end of the spectrum, we have arm's-length transactions. These are straightforward purchases, like buying office supplies from the vendor that offers the lowest price. This type of relationship is common when switching suppliers is easy and costs are low. Moving along the spectrum, we find preferred supplier agreements. In these arrangements, businesses agree to buy larger quantities from a supplier in exchange for better terms, such as discounts or improved service. This can create a win-win situation for both parties. At the far end of the spectrum are strategic partnerships, which involve a much deeper level of collaboration. These partnerships can include shared systems, joint product development, and long-term contracts that benefit both the supplier and the buyer. A great example of this is Toyota, which has developed strong strategic partnerships with its key suppliers. Toyota invests in the capabilities of these suppliers and shares the benefits of increased productivity with them. This collaborative approach, known as Keiretsu, has turned Toyota's supplier relationships into a significant competitive advantage. As a result, they have managed to reduce costs by 3% each year while also enhancing the quality of their products. Understanding these different types of supplier relationships can help businesses make better decisions in their supply chain management.\nContext recap: Supplier relationships play a vital role in how businesses manage their supply chains, and it's important to understand the different types of relationships that can exist. At one end of the spectrum, we have arm's-length transactions. These are straightforward purchases, like buying office supplies from the vendor that offers the lowest price. This type of relationship is common when switching suppliers is easy and costs are low.\nWhy this matters: Supplier Relationship Management helps learners in Business connect ideas from Supply Chain & Inventory Management to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "operations-management-301-l06-f1",
          "front": "Bullwhip effect",
          "back": "Amplification of demand variability as orders move upstream through a supply chain — small consumer demand changes create massive swings at the supplier level"
        },
        {
          "id": "operations-management-301-l06-f2",
          "front": "Four causes of the bullwhip effect",
          "back": "1) Demand signal processing (overreacting) 2) Order batching (lumpy orders) 3) Price fluctuations (forward-buying) 4) Shortage gaming (inflating orders)"
        },
        {
          "id": "operations-management-301-l06-f3",
          "front": "Vendor Managed Inventory (VMI)",
          "back": "Supplier manages the buyer's inventory levels using shared real-time demand data — reduces bullwhip effect and shifts replenishment decisions to the party with better supply-side information"
        }
      ]
    },
    {
      "id": "operations-management-301-l07",
      "title": "Final Assessment: Supply Chain & Inventory Management",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "operations-management-301-l07-q1",
          "text": "What is the primary vulnerability of a pure Just-in-Time delivery system?",
          "options": [
            {
              "id": "a",
              "text": "It requires too many workers"
            },
            {
              "id": "b",
              "text": "It is too expensive to implement"
            },
            {
              "id": "c",
              "text": "Minimal inventory buffers amplify the impact of supply disruptions"
            },
            {
              "id": "d",
              "text": "It only works for service industries"
            }
          ],
          "correctOptionId": "c",
          "explanation": "JIT's strength (minimal inventory) becomes a vulnerability during disruptions — with no buffer stock, even a small supply interruption can halt entire production lines, as seen during the 2011 Japan earthquake."
        },
        {
          "id": "operations-management-301-l07-q2",
          "text": "Which forecasting accuracy metric penalizes large errors more heavily than small ones?",
          "options": [
            {
              "id": "a",
              "text": "MAD (Mean Absolute Deviation)"
            },
            {
              "id": "b",
              "text": "MAPE (Mean Absolute Percentage Error)"
            },
            {
              "id": "c",
              "text": "MSE (Mean Squared Error)"
            },
            {
              "id": "d",
              "text": "Bias"
            }
          ],
          "correctOptionId": "c",
          "explanation": "MSE squares each error before averaging, so a single large error contributes disproportionately. MAD treats all errors linearly, and MAPE expresses errors as percentages."
        },
        {
          "id": "operations-management-301-l07-q3",
          "text": "Procter & Gamble found that Pampers diaper consumer usage was stable, but factory orders fluctuated wildly. This illustrates which phenomenon?",
          "options": [
            {
              "id": "a",
              "text": "Economies of scale"
            },
            {
              "id": "b",
              "text": "The bullwhip effect"
            },
            {
              "id": "c",
              "text": "Diminishing returns"
            },
            {
              "id": "d",
              "text": "Diseconomies of scope"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The bullwhip effect causes small demand fluctuations at the consumer level to amplify progressively at each upstream stage of the supply chain."
        },
        {
          "id": "operations-management-301-l07-q4",
          "text": "Dell's build-to-order model, where computers are customized only after customer orders are placed, is an example of which strategy?",
          "options": [
            {
              "id": "a",
              "text": "Forward integration"
            },
            {
              "id": "b",
              "text": "Postponement"
            },
            {
              "id": "c",
              "text": "Vertical integration"
            },
            {
              "id": "d",
              "text": "Push-based manufacturing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Postponement delays final product configuration until actual demand is known. Dell holds generic components and assembles customized computers only when orders arrive, combining upstream efficiency with downstream responsiveness."
        }
      ]
    }
  ]
};
