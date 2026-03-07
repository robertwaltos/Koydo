import type { LearningModule } from "@/lib/modules/types";

export const accounting_finance_101_Module: LearningModule = {
  "id": "accounting-finance-101",
  "title": "Accounting & Finance Fundamentals",
  "description": "Master the language of business. Learn the accounting equation, double-entry bookkeeping, financial statements, the time value of money, financial ratios, and budgeting — the essential toolkit for understanding any organization's financial health.",
  "subject": "Accounting and Finance",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "finance"
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
    "Apply the accounting equation (Assets = Liabilities + Equity) to classify transactions",
    "Record business transactions using double-entry bookkeeping with debits and credits",
    "Read and interpret the three core financial statements (income statement, balance sheet, cash flow statement)",
    "Calculate present and future value using time value of money formulas",
    "Analyze business performance using liquidity, profitability, and leverage ratios",
    "Create basic budgets, forecasts, and break-even analyses for business planning",
    "Reference GAAP and IFRS frameworks when discussing accounting standards and reporting"
  ],
  "lessons": [
    {
      "id": "accounting-finance-101-l01",
      "title": "The Accounting Equation",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A balanced golden scale with a glowing coin on one side and a stack of documents and a building on the other, modern 3D illustration style, vibrant colors, studio lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic 3D animation showing a glowing scale balancing. On the left, a pile of gold coins and a small factory appear, labeled 'Assets'. On the right, a bank vault labeled 'Liabilities' and a glowing shield labeled 'Equity' appear, perfectly balancing the scale. Smooth camera pan, soft studio lighting, 4k resolution.",
      "objectives": [
        "State the accounting equation and identify its three components",
        "Demonstrate how every transaction keeps the equation in balance",
        "Classify common accounts as assets, liabilities, or equity"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l01-c1",
          "title": "Assets = Liabilities + Equity",
          "content": "The accounting equation is a key concept in accounting that helps us understand how a business's finances are organized. This equation can be written as: Assets = Liabilities + Equity. Let's explore what each part means in more detail.\n\nFirst, we have Assets. These are all the valuable things that a business owns. Think of assets as the resources that help a business operate and grow. Examples of assets include cash (money in the bank), equipment (like computers and machinery), inventory (products ready to be sold), buildings (offices or stores), and accounts receivable (money that customers owe the business for products or services they have received but not yet paid for).\n\nNext, we have Liabilities. These are the obligations or debts that a business has to pay to others. Liabilities include loans (money borrowed from banks), accounts payable (money owed to suppliers for goods or services received), mortgages (loans taken out to buy property), and unearned revenue (payments received in advance for services that have not yet been delivered).\n\nFinally, we have Equity. This represents the owner's claim on the business. It is what is left over after all liabilities are subtracted from assets. In simpler terms, equity shows how much of the business the owner truly owns. For example, if a company has $500,000 in assets and $200,000 in liabilities, we can calculate the owner's equity by subtracting the liabilities from the assets, which gives us $300,000.\n\nUnderstanding this equation is very important because it must always balance. This means that the total value of assets must equal the total value of liabilities plus equity. Both the Generally Accepted Accounting Principles (GAAP) and the International Financial Reporting Standards (IFRS) require that this equation remains balanced at all times. This balance is essential for accurate financial reporting and helps ensure that businesses are operating responsibly and transparently.\n\n**Why This Matters:** The equation Assets = Liabilities + Equity is the foundation of all financial decisions. It helps you verify that a business's resources are properly accounted for.\n\n**Self-Check:** Can you define the three parts of the equation? Remember: Assets are what you own, Liabilities are what you owe, and Equity is what is left for the owners."
        },
        {
          "id": "accounting-finance-101-l01-c2",
          "title": "How Transactions Affect the Equation",
          "content": "In the world of accounting, every time a business makes a financial transaction, it impacts at least two accounts. This is a fundamental concept known as the duality principle, which ensures that the accounting equation remains balanced. Let's explore this idea with some examples to make it clearer.\n\nImagine you decide to start your own business and invest $10,000. In this case, your cash increases by $10,000, which is considered an asset. At the same time, your owner's equity also increases by $10,000 because this money belongs to you. This shows how one transaction can affect both sides of the equation equally.\n\nNow, consider a different scenario where you buy equipment for your business that costs $3,000. You pay for this equipment using cash. Here, your equipment (another asset) increases by $3,000, but your cash decreases by the same amount, $3,000. Even though you have traded one asset for another, the total value of your assets remains the same. This is an important point to remember: the total assets do not change, even though their composition does.\n\nNext, let's say you take out a bank loan for $5,000. In this situation, your cash increases by $5,000, which is great for your business! However, you also have a new liability of $5,000 because you owe that money to the bank. Again, both sides of the accounting equation increase equally, maintaining balance.\n\nLastly, some transactions can affect all three components of the accounting equation. For example, if you purchase inventory on credit, your assets increase because you now have more inventory, but your liabilities also increase because you owe money for that inventory.\n\n**Why This Matters:** Understanding how each transaction impacts the accounting equation is essential for keeping accurate financial records. This knowledge will help you manage your business finances effectively and ensure that everything is in order.\n\n**Self-Check:** If you buy a $2,000 computer on credit, how does the equation change? (Hint: Your assets increase by $2,000, and your liabilities increase by $2,000, keeping the equation perfectly balanced!)"
        },
        {
          "id": "accounting-finance-101-l01-c3",
          "title": "Types of Accounts",
          "content": "In the world of accounting, we categorize financial activities into different types of accounts to better understand a business's financial health. Let's explore these categories together!\n\nFirst, we have **asset accounts**. These accounts represent valuable resources that a business owns. Some common examples include:\n- **Cash**: This is the money a business has on hand or in the bank.\n- **Accounts Receivable**: This is the money that customers owe to the business for products or services they have received but not yet paid for.\n- **Inventory**: This refers to the goods that a business has available for sale.\n- **Prepaid Expenses**: These are payments made in advance for services or goods that will be received in the future.\n- **Equipment & Buildings**: The physical tools, machinery, and structures owned by the business.\n\nNext, we have **liability accounts**. These accounts track what the business owes to others. Some key examples are:\n- **Accounts Payable**: This is the money that the business owes to its suppliers for goods or services received.\n- **Notes Payable**: This refers to formal loans that the business has taken out.\n- **Unearned Revenue**: This is money received from customers before the business has delivered the goods or services.\n- **Accrued Expenses**: These are costs that the business has incurred but has not yet paid, such as wages owed to employees.\n\nFinally, we have **equity accounts**. These accounts show the owner's interest in the business. They include:\n- **Owner's Capital**: This represents the initial and any additional investments made by the owner.\n- **Retained Earnings**: This is the accumulated net income that has been reinvested in the business rather than distributed to the owners.\n- **Dividends or Drawings**: These are payments made to the owners from the business profits.\n\nIt's essential to understand that revenue (money earned from sales) increases equity, while expenses (costs incurred) decrease it. In some accounting frameworks, like IFRS, equity may also be called 'net assets,' but the idea remains the same.\n\n**Why This Matters:** Categorizing accounts correctly allows you to build accurate financial statements. If you misclassify a liability as an asset, your entire understanding of the business's health will be flawed.\n\n**Self-Check:** Is 'Accounts Receivable' an asset or a liability? (Answer: It's an asset, because it represents future cash coming into the business!)"
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l01-f1",
          "front": "The fundamental accounting equation",
          "back": "Assets = Liabilities + Equity — must balance after every transaction"
        },
        {
          "id": "accounting-finance-101-l01-f2",
          "front": "Accounts Receivable",
          "back": "Money that customers owe the business for goods or services delivered on credit — classified as a current asset"
        },
        {
          "id": "accounting-finance-101-l01-f3",
          "front": "Accounts Payable",
          "back": "Money the business owes to suppliers for goods or services received on credit — classified as a current liability"
        },
        {
          "id": "accounting-finance-101-l01-f4",
          "front": "Retained Earnings",
          "back": "Accumulated net income that has not been distributed to owners as dividends — part of equity"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l02",
      "title": "Double-Entry Bookkeeping and Journal Entries",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: An open antique leather-bound ledger book with glowing digital numbers floating above the pages, blending historical accounting with modern technology, cinematic lighting, macro photography.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation of a split screen. On the left, a green arrow points up with the word 'Debit'. On the right, a blue arrow points up with the word 'Credit'. Coins flow from the credit side to the debit side, maintaining a perfect equilibrium. High-tech, sleek visual style, smooth 60fps motion.",
      "objectives": [
        "Explain the double-entry system and why debits must equal credits",
        "Record common transactions as properly formatted journal entries",
        "Post journal entries to a general ledger and prepare a trial balance"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l02-c1",
          "title": "Debits and Credits",
          "content": "Double-entry bookkeeping is an essential method used in accounting that helps ensure accuracy in financial records. In this system, every financial transaction is recorded with at least one debit and one credit. This means that the total amount of debits must always equal the total amount of credits, creating a balanced record. To understand how this works, let's look at the T-account, which is a visual tool used in accounting. Debits, often abbreviated as Dr, are placed on the left side of the T-account, while credits, abbreviated as Cr, are placed on the right side.\n\nThe rules governing debits and credits are quite clear: when you record a debit, it increases assets and expenses. For example, if a business buys new equipment, that purchase is recorded as a debit because it increases the company's assets. On the other hand, credits increase liabilities, equity, and revenue. For instance, if a company takes out a loan, that loan is recorded as a credit because it increases the company's liabilities.\n\nIt's important to note that the terms 'debit' and 'credit' do not refer to adding or subtracting amounts; instead, they are simply labels that indicate where the entry is recorded in the accounting system. This double-entry bookkeeping system was first formalized by the Italian mathematician Luca Pacioli in 1494 in his influential book 'Summa de Arithmetica.' His work laid the groundwork for modern accounting practices. Today, all contemporary accounting software, such as QuickBooks and SAP, is built upon this foundational principle, ensuring that businesses can maintain accurate and reliable financial records.\n\n**Why This Matters:** Mastering debits and credits is like learning the alphabet of business. Once you know which accounts increase with a debit and which increase with a credit, you can read any financial transaction.\n\n**Self-Check:** If you want to increase an asset account, do you debit or credit it? (Answer: Debit!)"
        },
        {
          "id": "accounting-finance-101-l02-c2",
          "title": "Recording Journal Entries",
          "content": "When you record a journal entry, you are capturing important details about a specific transaction. Each entry includes the date of the transaction, the accounts that are involved, the amounts of money being exchanged, and a short description of what the transaction is about. To format a journal entry correctly, you start by listing the account that is being debited first. This means you are showing that money is being taken out of that account. You should align this account name to the left side of the page. Next, you indent and write the account that is being credited, which shows that money is being added to that account.\n\nFor example, if you buy $2,000 worth of inventory using cash, your journal entry would look like this:\nDr Inventory $2,000\n   Cr Cash $2,000.\n\nIn another situation, if you provide $500 worth of consulting services on credit, you would record it as follows:\nDr Accounts Receivable $500\n   Cr Service Revenue $500.\n\nIf you receive a payment of $1,200 from a customer who owed you money, you would write it like this:\nDr Cash $1,200\n   Cr Accounts Receivable $1,200.\n\nSometimes, transactions can involve more than two accounts, and these are known as compound entries. For instance, if you purchase a vehicle for $10,000, paying $3,000 in cash and taking out a $7,000 loan, your journal entry would be recorded as:\nDr Vehicle $10,000\n   Cr Cash $3,000\n   Cr Notes Payable $7,000.\n\n**Why This Matters:** Properly formatted journal entries create a clear, chronological history of a business's financial life. This makes it easy to track where money came from and where it went.\n\n**Self-Check:** In a journal entry, which comes first: the debit or the credit? (Answer: The debit is always listed first!)"
        },
        {
          "id": "accounting-finance-101-l02-c3",
          "title": "The General Ledger and Trial Balance",
          "content": "The general ledger is like a big notebook that keeps track of all the accounts a business uses. Imagine each account as a separate page in this notebook, which is often called a T-account. On these pages, every time money comes in or goes out, we write it down as either a debit (left side) or a credit (right side). This helps us see the running balance of how much money we have and how much we owe.\n\nAfter we have written down all the transactions in the general ledger, we need to create something called a trial balance. This is a special list that shows all the accounts along with their balances at a specific date. When we add up all the debits and all the credits, they should be equal. If they are, it means our accounts are mathematically balanced, which is a great sign!\n\nHowever, we need to be careful because just because the trial balance is balanced doesn't mean everything is perfect. Sometimes, mistakes can happen, like writing down a transaction in the wrong account or forgetting to write one down altogether. These errors might not show up in the trial balance because the total debits and credits might still equal each other.\n\nThe trial balance is very important because it helps us prepare financial statements, which are documents that show how well a business is doing financially. Both GAAP and IFRS rules say businesses must keep a complete and accurate general ledger. This is essential for making sure that everyone can trust the financial information the business provides.\n\n**Why This Matters:** The general ledger and trial balance act as the bridge between daily transactions and the final financial statements. They are your primary tools for catching mathematical errors before reporting to investors or the government.\n\n**Self-Check:** Does a balanced trial balance guarantee that no mistakes were made? (Answer: No, it only proves that total debits equal total credits. You could still have recorded a transaction to the wrong account!)"
        }
      ],
      "interactiveActivities": [
        {
          "id": "accounting-finance-101-l02-a1",
          "title": "Debit or Credit?",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Increase Cash",
              "right": "Debit"
            },
            {
              "left": "Increase Revenue",
              "right": "Credit"
            },
            {
              "left": "Increase Accounts Payable",
              "right": "Credit"
            },
            {
              "left": "Increase Expenses",
              "right": "Debit"
            },
            {
              "left": "Increase Owner's Equity",
              "right": "Credit"
            },
            {
              "left": "Increase Equipment",
              "right": "Debit"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l02-f1",
          "front": "Double-entry bookkeeping",
          "back": "Every transaction must be recorded with equal debits and credits — codified by Luca Pacioli in 1494"
        },
        {
          "id": "accounting-finance-101-l02-f2",
          "front": "Debit (Dr)",
          "back": "Left side of a T-account — increases assets and expenses, decreases liabilities, equity, and revenue"
        },
        {
          "id": "accounting-finance-101-l02-f3",
          "front": "Credit (Cr)",
          "back": "Right side of a T-account — increases liabilities, equity, and revenue, decreases assets and expenses"
        },
        {
          "id": "accounting-finance-101-l02-f4",
          "front": "Trial balance",
          "back": "A list of all ledger accounts with their debit or credit balances — total debits must equal total credits"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l03",
      "title": "Foundations Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing question mark made of stacked gold coins and financial charts, set against a dark blue background with subtle grid lines, 3D render, neon accents.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of accounting symbols—scales, ledgers, and calculators—spinning and locking into place like a puzzle, ending with a bright glowing checkmark. 4k resolution, smooth motion, dynamic lighting.",
      "objectives": [
        "Demonstrate understanding of the accounting equation, debits/credits, and journal entries"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l03-q1",
          "text": "If a company has $200,000 in assets and $120,000 in equity, what are the liabilities?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$80,000"
            },
            {
              "id": "b",
              "text": "$320,000"
            },
            {
              "id": "c",
              "text": "$200,000"
            },
            {
              "id": "d",
              "text": "$120,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A = L + E → $200,000 = L + $120,000 → L = $80,000. The equation must always balance."
        },
        {
          "id": "accounting-finance-101-l03-q2",
          "text": "To record an increase in revenue, you enter a:",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Debit"
            },
            {
              "id": "b",
              "text": "Credit"
            },
            {
              "id": "c",
              "text": "Withdrawal"
            },
            {
              "id": "d",
              "text": "Closing entry"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Revenue increases with credits (right side) — the same direction as liabilities and equity."
        },
        {
          "id": "accounting-finance-101-l03-q3",
          "text": "A business buys $4,000 of supplies with cash. Which journal entry is correct?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dr Supplies $4,000 / Cr Cash $4,000"
            },
            {
              "id": "b",
              "text": "Dr Cash $4,000 / Cr Supplies $4,000"
            },
            {
              "id": "c",
              "text": "Dr Supplies $4,000 / Cr Revenue $4,000"
            },
            {
              "id": "d",
              "text": "Dr Expenses $4,000 / Cr Equity $4,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Supplies (asset) increases → debit. Cash (asset) decreases → credit. Debits equal credits."
        },
        {
          "id": "accounting-finance-101-l03-q4",
          "text": "A trial balance proves that:",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Total debits equal total credits in the ledger"
            },
            {
              "id": "b",
              "text": "All transactions were recorded to the correct accounts"
            },
            {
              "id": "c",
              "text": "The company is profitable"
            },
            {
              "id": "d",
              "text": "No transactions were omitted"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A trial balance only confirms mathematical equality of debits and credits — it cannot detect errors like misclassified accounts or missing entries."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 1,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "accounting-finance-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l04",
      "title": "Financial Statements: Income Statement, Balance Sheet, and Cash Flow",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: Three glowing holographic documents floating in mid-air above a sleek modern desk. One shows a rising line graph, another a balanced scale, and the third a flowing river of coins. Cyberpunk corporate aesthetic, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation zooming into a corporate building. Inside, a holographic display projects three financial statements. The Income Statement glows green with profit, the Balance Sheet snaps into perfect symmetry, and the Cash Flow statement shows a continuous loop of glowing blue energy representing cash. Cinematic lighting, smooth dolly-in.",
      "objectives": [
        "Explain the purpose and structure of the three core financial statements",
        "Calculate gross profit, operating income, and net income from an income statement",
        "Distinguish between operating, investing, and financing activities on a cash flow statement"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l04-c1",
          "title": "The Income Statement (Profit & Loss)",
          "content": "The income statement, often referred to as the profit and loss statement, is an important financial document that summarizes a company's revenues and expenses over a specific time frame, such as a month, a quarter, or a year. This statement helps businesses understand how much money they are making and how much they are spending. The structure of the income statement is quite simple and follows a clear format. It starts with Revenue, which is the total amount of money earned from sales. From this, we subtract the Cost of Goods Sold (COGS), which represents the direct costs associated with producing the goods sold by the company. The result of this calculation is called Gross Profit.\n\nNext, we take the Gross Profit and subtract Operating Expenses. Operating Expenses include various costs that a business incurs during its normal operations, such as rent for the building, salaries for employees, utility bills, and depreciation of equipment. After subtracting these expenses, we arrive at Operating Income, which is also known as Earnings Before Interest and Taxes (EBIT).\n\nFinally, to find the Net Income, we subtract any Interest Expenses and Taxes from the Operating Income. This final figure represents the company's profit after all expenses have been accounted for.\n\nFor example, let's consider a bakery that earns $120,000 in annual revenue. If it spends $45,000 on ingredients (this is the COGS) and incurs $40,000 in operating expenses, we can calculate the Gross Profit as $75,000 and the Operating Income as $35,000.\n\nWhen it comes to reporting, companies can choose between two formats under Generally Accepted Accounting Principles (GAAP). They can use a single-step format, which simply subtracts total expenses from total revenues, or a multi-step format, which separates gross profit from other income and expenses. Understanding these concepts is crucial for anyone interested in finance and accounting, as they provide insight into a company's financial health and operational efficiency.\n\n**Why This Matters:** The income statement tells the story of a company's profitability over time. It answers the ultimate question: 'Is this business actually making money from its operations?'\n\n**Self-Check:** What is the difference between Gross Profit and Net Income? (Answer: Gross Profit only subtracts the direct costs of making the product, while Net Income subtracts all expenses, including operating costs, interest, and taxes.)"
        },
        {
          "id": "accounting-finance-101-l04-c2",
          "title": "The Balance Sheet",
          "content": "The balance sheet is an important financial statement that gives us a clear picture of a company's financial health at a specific moment in time. Think of it as a snapshot that shows what the company owns (its assets), what it owes (its liabilities), and how much it is worth (its equity). This statement is based on a fundamental accounting equation: Assets = Liabilities + Equity.\n\nLet's break it down further. The assets section lists everything the company owns, and these are organized by how quickly they can be turned into cash. Current assets, such as cash, accounts receivable (money owed to the company), and inventory (products ready to be sold), are listed first because they can be converted to cash within one year. Following current assets, we find non-current assets, which include things like property, buildings, equipment, and intangible assets such as patents and goodwill. These are valuable but not as easily converted to cash in the short term.\n\nNext, we look at liabilities, which are the company's debts or obligations. Similar to assets, liabilities are also organized by their due dates. Current liabilities, such as accounts payable (money the company owes to suppliers), short-term debt, and accrued wages (salaries that have been earned but not yet paid), are listed first. Long-term liabilities, like mortgages and bonds payable, come next, as these are obligations that will be paid off over a longer period.\n\nThe equity section of the balance sheet shows the owner's contributions to the business, which includes contributed capital and retained earnings (profits that have been reinvested in the company). It also accounts for treasury stock, which is stock that the company has repurchased.\n\nIn some regions, particularly under International Financial Reporting Standards (IFRS), the balance sheet is called the 'Statement of Financial Position.' Finally, the net book value, which is calculated by subtracting total liabilities from total assets, gives us the accounting net worth of the company. This figure can be different from the market value, which is what the company would sell for in the open market.\n\n**Why This Matters:** While the income statement shows performance over time, the balance sheet shows the company's financial standing at a single point in time. It helps investors see if the company has too much debt or plenty of assets.\n\n**Self-Check:** Why are assets listed in a specific order on the balance sheet? (Answer: They are listed by liquidity, meaning how quickly they can be converted into cash.)"
        },
        {
          "id": "accounting-finance-101-l04-c3",
          "title": "The Cash Flow Statement",
          "content": "The cash flow statement is a crucial financial document that helps us understand how cash moves in and out of a company. This statement is divided into three main sections, each serving a different purpose.\n\nThe first section is called Operating Activities. This part tracks the cash generated from the company's core business operations. For example, it includes the money a company receives from its customers when they make purchases, as well as the payments the company makes to its suppliers and employees. Companies can report this information using two different methods. Under GAAP, they can choose the direct method, which lists all actual cash receipts and payments, or the indirect method, which starts with the company's net income and then adjusts for non-cash items, like depreciation and changes in working capital.\n\nThe second section is known as Investing Activities. This part focuses on cash flows related to buying or selling long-term assets. For instance, when a company purchases new equipment, this is considered a cash outflow because money is going out of the company. Conversely, if the company sells a building, this is a cash inflow because money is coming into the company.\n\nThe third section is called Financing Activities. This section includes transactions that involve the company's owners and creditors. For example, when a company issues stock to raise money, this is a cash inflow. On the other hand, when the company repays loans or pays dividends to its shareholders, these are considered cash outflows.\n\nIt's essential to understand that a company can show profits on its income statement, which indicates that it is making money, but it can still run out of cash. This situation emphasizes the important saying in corporate finance: 'Cash is king.' This means that having enough cash on hand is vital for a company's survival, even if it appears profitable on paper.\n\n**Why This Matters:** Accrual accounting (used in the income statement) records revenue when it's earned, not when the cash is received. The cash flow statement strips away the accounting rules to show you exactly how much real money is entering and leaving the bank account.\n\n**Self-Check:** If a company buys a new delivery truck, which section of the cash flow statement does this affect? (Answer: Investing Activities, because it is a purchase of a long-term asset.)"
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l04-f1",
          "front": "Revenue − COGS",
          "back": "Gross Profit — measures profitability before operating expenses are deducted"
        },
        {
          "id": "accounting-finance-101-l04-f2",
          "front": "Financial statement that is a 'snapshot' at one point in time",
          "back": "Balance Sheet (called Statement of Financial Position under IFRS)"
        },
        {
          "id": "accounting-finance-101-l04-f3",
          "front": "Three sections of the Cash Flow Statement",
          "back": "Operating (core business cash flows), Investing (long-term asset transactions), Financing (debt and equity capital transactions)"
        },
        {
          "id": "accounting-finance-101-l04-f4",
          "front": "Why can a profitable company go bankrupt?",
          "back": "Accrual accounting recognizes revenue when earned, not when cash arrives — a company can show profit on paper yet run out of actual cash"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l05",
      "title": "Time Value of Money: Present and Future Value",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing hourglass where the sand at the bottom turns into gold coins, with a futuristic digital clock in the background, 3D illustration, warm ambient lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a single gold coin planted in the ground, growing into a glowing, metallic tree with coins for leaves. A digital counter rapidly increases in the background, illustrating compound interest. High-quality 3D render, warm lighting, smooth orbit camera.",
      "objectives": [
        "Explain why a dollar today is worth more than a dollar in the future",
        "Calculate future value using the compound interest formula FV = PV × (1 + r)^n",
        "Calculate present value using the discounting formula PV = FV ÷ (1 + r)^n"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l05-c1",
          "title": "Why a Dollar Today Is Worth More",
          "content": "The Time Value of Money (TVM) is a key concept in finance that helps us understand why having a dollar today is more valuable than having a dollar in the future. This idea is based on three important reasons. \n\nFirst, we have something called opportunity cost. This means that if you have money right now, you can invest it and potentially earn more money over time. For example, if you invest a dollar today, it could grow into more dollars in the future.\n\nSecond, there's inflation. Inflation is when prices of goods and services increase over time. This means that the money you have today will not buy as much in the future. For instance, if inflation is 3% each year, a dollar today will only be able to buy what about 74 cents can buy in ten years. This shows how inflation can reduce the purchasing power of your money over time.\n\nThird, we must consider risk. When someone promises to pay you money in the future, there is always a chance that they might not be able to keep that promise. This uncertainty makes future money less reliable than money you have right now.\n\nUnderstanding the Time Value of Money is essential for making smart financial choices. It helps us in many areas, such as deciding how much to charge for loans, figuring out how much a company is worth, assessing whether an investment project is a good idea, and planning for our retirement. For example, when a bank charges 7% interest on a car loan, they are taking into account these three factors: opportunity cost, inflation, and risk.\n\n**Why This Matters:** TVM is the core principle behind all investing and borrowing. It explains why banks charge interest on loans and why investors demand a return on their capital.\n\n**Self-Check:** What are the three reasons a dollar today is worth more than a dollar tomorrow? (Answer: Opportunity cost, inflation, and risk.)"
        },
        {
          "id": "accounting-finance-101-l05-c2",
          "title": "Future Value and Compound Interest",
          "content": "Future Value (FV) is an important concept in finance that helps us understand how much our money can grow over time. It answers the question: 'What will my money be worth in the future?' To calculate Future Value, we use a specific formula: FV = PV × (1 + r)^n. \n\nIn this formula, PV stands for present value, which is the amount of money you start with. The letter 'r' represents the interest rate, which is the percentage of your money that you earn each period, and 'n' is the number of compounding periods, or how many times the interest is applied.\n\nLet's look at an example to make this clearer. Imagine you decide to invest $1,000 at an interest rate of 6% that compounds annually for 10 years. To find out how much your investment will be worth in the future, you would plug the numbers into the formula: FV = $1,000 × (1.06)^10. When you calculate this, you find that your Future Value is approximately $1,790.85. This means that after 10 years, your initial investment of $1,000 has grown significantly!\n\nThe magic of compounding is that you earn interest not only on your original investment but also on the interest that accumulates over time. For example, in the first year, at a 6% interest rate, you would earn $60 in interest. However, by the tenth year, the interest earned in that year alone would be about $101! This shows how powerful compounding can be.\n\nA useful tool to estimate how long it will take for your money to double is called the Rule of 72. This rule is simple: you divide 72 by the annual interest rate. For instance, if your interest rate is 6%, you would calculate 72 ÷ 6, which tells you that your money will double in about 12 years. If the interest rate were 12%, your money would double in about 6 years.\n\n**Why This Matters:** Compound interest is how wealth is built over time. By understanding how to calculate future value, you can set realistic goals for retirement or large purchases.\n\n**Self-Check:** Using the Rule of 72, how long would it take your money to double if you earn an 8% interest rate? (Answer: 72 ÷ 8 = 9 years.)"
        },
        {
          "id": "accounting-finance-101-l05-c3",
          "title": "Present Value and Discounting",
          "content": "Present Value (PV) is an important financial concept that helps us answer the question, 'What is a future cash flow worth today?' This is crucial for making smart financial decisions. To calculate Present Value, we use the formula: PV = FV ÷ (1 + r)^n. \n\nIn this formula, FV stands for Future Value, which is the amount of money we expect to receive in the future. The letter 'r' represents the discount rate, which reflects the return we expect to earn on our investment, and 'n' is the number of periods (like years) until we receive that cash flow.\n\nLet's look at an example to make this clearer. Imagine you have a bond that promises to pay you $10,000 in 5 years. If we want to find out how much that future payment is worth today, we can use an 8% discount rate. Plugging the numbers into our formula, we get: PV = $10,000 ÷ (1.08)^5. When we do the math, we find that the Present Value is approximately $6,805.83. This means that if you invest $6,805.83 today at an 8% interest rate, you will have exactly $10,000 in 5 years.\n\nBusinesses also use a method called Net Present Value (NPV) to help them decide whether to invest in projects. The NPV formula is: NPV = Σ [Cash Flow_t ÷ (1 + r)^t] − Initial Investment. In simple terms, if the NPV is greater than 0, it means the project is expected to create value, and the company should go ahead with it. If the NPV is less than 0, it suggests that the project might not be a good idea because it could destroy value. Big companies like Apple and Toyota use NPV analysis to make important decisions about where to invest billions of dollars.\n\n**Why This Matters:** Present value allows you to compare money across different time periods fairly. It helps you decide if a long-term investment is actually worth the upfront cost today.\n\n**Self-Check:** If you want to know how much you need to invest today to reach a goal in 10 years, do you use the Future Value formula or the Present Value formula? (Answer: The Present Value formula.)"
        }
      ],
      "interactiveActivities": [
        {
          "id": "accounting-finance-101-l05-a1",
          "title": "Compound Interest Calculator",
          "type": "simulation",
          "description": "Calculate: (1) Invest $500 at 7% annual compound interest for 5 years — FV = 500 × (1.07)^5 ≈ $701.28. (2) Use the Rule of 72 to estimate when $500 doubles at 7% (72 ÷ 7 ≈ 10.3 years). (3) Find the present value of $20,000 due in 8 years at a 5% discount rate: PV = $20,000 ÷ (1.05)^8 ≈ $13,537."
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l05-f1",
          "front": "Time Value of Money (TVM)",
          "back": "The principle that money available now is worth more than the same amount in the future — due to earning potential, inflation, and risk"
        },
        {
          "id": "accounting-finance-101-l05-f2",
          "front": "FV = PV × (1 + r)^n",
          "back": "Future Value formula — calculates what a present investment will be worth after n compounding periods at rate r"
        },
        {
          "id": "accounting-finance-101-l05-f3",
          "front": "PV = FV ÷ (1 + r)^n",
          "back": "Present Value formula — discounts a future cash flow back to today's dollars using discount rate r"
        },
        {
          "id": "accounting-finance-101-l05-f4",
          "front": "Rule of 72",
          "back": "Divide 72 by the annual interest rate to estimate the number of years needed to double an investment"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l06",
      "title": "Financial Statements & TVM Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic digital padlock unlocking to reveal a glowing dollar sign, surrounded by floating financial charts and graphs, 3D render, depth of field.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A sleek animation of a vault door spinning and unlocking. Inside, glowing financial formulas and charts float in the air, representing the mastery of financial statements and time value of money. Cinematic camera movement, volumetric lighting.",
      "objectives": [
        "Apply knowledge of financial statements and time value of money calculations"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l06-q1",
          "text": "A bakery earns $120,000 in revenue and spends $45,000 on ingredients (COGS). What is the gross profit?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$75,000"
            },
            {
              "id": "b",
              "text": "$165,000"
            },
            {
              "id": "c",
              "text": "$45,000"
            },
            {
              "id": "d",
              "text": "$120,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Gross Profit = Revenue − COGS = $120,000 − $45,000 = $75,000."
        },
        {
          "id": "accounting-finance-101-l06-q2",
          "text": "Which section of the cash flow statement reports loan repayments and dividend payments?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Financing Activities"
            },
            {
              "id": "b",
              "text": "Operating Activities"
            },
            {
              "id": "c",
              "text": "Investing Activities"
            },
            {
              "id": "d",
              "text": "Revenue Activities"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Financing Activities cover transactions with creditors (loan repayments) and owners (dividends, stock issuance)."
        },
        {
          "id": "accounting-finance-101-l06-q3",
          "text": "Using the Rule of 72, approximately how many years does it take to double money at 9% interest?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "8 years"
            },
            {
              "id": "b",
              "text": "9 years"
            },
            {
              "id": "c",
              "text": "72 years"
            },
            {
              "id": "d",
              "text": "12 years"
            }
          ],
          "correctOptionId": "a",
          "explanation": "72 ÷ 9 = 8. At 9% annual interest, an investment roughly doubles in 8 years."
        },
        {
          "id": "accounting-finance-101-l06-q4",
          "text": "A company invests $5,000 at 10% for 2 years. What is the future value?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$6,050"
            },
            {
              "id": "b",
              "text": "$6,000"
            },
            {
              "id": "c",
              "text": "$5,500"
            },
            {
              "id": "d",
              "text": "$7,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "FV = PV × (1 + r)^n = $5,000 × (1.10)^2 = $5,000 × 1.21 = $6,050. The extra $50 beyond simple interest ($6,000) is compound interest on first-year interest."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 2
        }
      }
    },
    {
      "id": "accounting-finance-101-l07",
      "title": "Financial Ratios and Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A magnifying glass focusing on a complex financial chart, with glowing percentages and ratios popping out in 3D, modern corporate style, crisp focus.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated dashboard with various dials and gauges. The needles on the gauges move into the green zones as glowing text like 'ROE', 'Current Ratio', and 'Gross Margin' appear. Sleek, high-tech interface design, smooth UI animation.",
      "objectives": [
        "Calculate and interpret key profitability ratios including gross margin and ROE",
        "Evaluate short-term solvency using the current ratio and quick ratio",
        "Assess financial leverage using the debt-to-equity ratio and efficiency using turnover ratios"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l07-c1",
          "title": "Profitability Ratios",
          "content": "Profitability ratios are essential tools that help us understand how effectively a company is turning its sales into actual profit. One of the most important profitability ratios is the Gross Profit Margin. This ratio is calculated by taking the total revenue a company earns and subtracting the cost of goods sold (COGS). After that, we divide the result by the total revenue and multiply by 100 to express it as a percentage. For example, if a company has $200,000 in revenue and its COGS is $120,000, we can calculate the gross profit margin as follows: (200,000 - 120,000) ÷ 200,000 × 100, which equals 40%. This means that for every dollar the company earns, 40 cents is used to cover costs and contribute to profit.\n\nAnother crucial ratio is the Net Profit Margin. This ratio is calculated by dividing the net income by the total revenue and then multiplying by 100. The net profit margin gives us the true profit percentage after all expenses, including taxes and operating costs, are taken into account.\n\nAdditionally, we have the Return on Equity (ROE), which measures how well a company uses its shareholders' equity to generate profit. It is calculated by dividing net income by shareholders' equity and multiplying by 100. For instance, if a company earns $50,000 with $250,000 in equity, the ROE would be calculated as follows: (50,000 ÷ 250,000) × 100, resulting in an ROE of 20%. This indicates that for every dollar invested by shareholders, they earn 20 cents back.\n\nSuccessful investors, like Warren Buffett, often look for companies that maintain a sustained ROE of over 15%, as this suggests strong financial performance. It's also important to compare these ratios to industry standards. For example, grocery stores typically operate with low net profit margins around 2%, while software companies can achieve much higher margins, often exceeding 25%.\n\n**Why This Matters:** Profitability ratios allow you to compare companies of different sizes on an equal playing field. A 10% profit margin means the same thing whether a company makes $100,000 or $100 million.\n\n**Self-Check:** If a company has a high Gross Profit Margin but a very low Net Profit Margin, what does that tell you? (Answer: It means their direct production costs are low, but their operating expenses, interest, or taxes are very high.)"
        },
        {
          "id": "accounting-finance-101-l07-c2",
          "title": "Liquidity Ratios",
          "content": "Liquidity ratios are very important tools that help us understand if a company can pay its short-term bills and obligations, like rent, salaries, and other debts. One of the most popular liquidity ratios is called the Current Ratio. To find this ratio, we take the company's current assets and divide them by its current liabilities. Current assets are things like cash, accounts receivable (money owed to the company), and other assets that can be quickly turned into cash. \n\nFor example, if a company has $80,000 in current assets and $40,000 in current liabilities, we can calculate the Current Ratio like this: Current Ratio = Current Assets ÷ Current Liabilities, which gives us 2.0. This means that for every $1 the company owes in the short term, it has $2 available in liquid assets, which is generally a positive indicator of financial health. A Current Ratio above 1.0 usually suggests that the company is in a good position to handle its short-term debts without any trouble.\n\nAnother important liquidity measure is the Quick Ratio, often referred to as the Acid Test. This ratio is calculated a bit differently. To find the Quick Ratio, we add together cash, marketable securities (like stocks or bonds that can be quickly sold), and accounts receivable, and then divide that total by current liabilities. The Quick Ratio does not include inventory because inventory can take time to sell and may not always be converted to cash quickly. \n\nFor instance, a technology company that has very little inventory might have a Current Ratio and a Quick Ratio that are almost the same. In contrast, a furniture retailer, which typically has a lot of inventory, might show a much lower Quick Ratio because it has more goods that are not immediately cash. Lenders and suppliers pay close attention to these ratios when deciding whether to lend money or offer favorable payment terms.\n\n**Why This Matters:** A company can be highly profitable but still go bankrupt if it lacks liquidity. These ratios tell you if a business can survive a sudden cash crunch.\n\n**Self-Check:** Why is inventory excluded from the Quick Ratio? (Answer: Because inventory cannot always be sold quickly for cash in an emergency.)"
        },
        {
          "id": "accounting-finance-101-l07-c3",
          "title": "Leverage and Efficiency Ratios",
          "content": "Leverage and efficiency ratios are important tools that help us understand how well a company is handling its debt and how effectively it is using its resources. One of the most important ratios is the Debt-to-Equity Ratio (D/E Ratio). This ratio is calculated by dividing the total liabilities of a company by its total equity. \n\nFor example, if a company has a D/E ratio of 1.5, it means that for every dollar of equity, the company has $1.50 in debt. This higher level of debt can lead to greater profits when things go well, but it can also result in larger losses if the company faces difficulties. Companies in stable industries, such as utilities, often have D/E ratios above 1.0 because they have steady cash flows that can support higher levels of debt. In contrast, startups usually aim for lower D/E ratios to reduce their risk and maintain financial stability.\n\nAnother important measure is Inventory Turnover. This ratio is calculated by dividing the cost of goods sold (COGS) by the average inventory. It tells us how many times a company sells and replaces its inventory in a year. For instance, a grocery store might have an inventory turnover of 15 times, which means it sells its stock approximately every 24 days. On the other hand, a luxury jewelry store might only turn its inventory 2 to 3 times a year, indicating that their products sell more slowly.\n\nLastly, we have Days Sales Outstanding (DSO), which helps us understand how long it takes for a company to collect payments from its customers. To calculate DSO, you divide accounts receivable by revenue and then multiply by 365. For example, if a company has $50,000 in accounts receivable and $600,000 in annual revenue, the DSO would be about 30 days. A rising DSO can be a warning sign that customers are taking longer to pay their bills, which can create cash flow problems for the company.\n\n**Why This Matters:** Leverage ratios show you how risky a company's financial structure is, while efficiency ratios show you how well management is running the day-to-day operations.\n\n**Self-Check:** If a company's Days Sales Outstanding (DSO) goes from 30 days to 60 days, is that a good sign or a bad sign? (Answer: A bad sign. It means it is taking twice as long to collect cash from customers.)"
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l07-f1",
          "front": "Gross Profit Margin formula",
          "back": "(Revenue − COGS) ÷ Revenue × 100 — percentage of each revenue dollar remaining after direct production costs"
        },
        {
          "id": "accounting-finance-101-l07-f2",
          "front": "Current Ratio",
          "back": "Current Assets ÷ Current Liabilities — measures ability to pay short-term obligations; above 1.0 is generally healthy"
        },
        {
          "id": "accounting-finance-101-l07-f3",
          "front": "ROE (Return on Equity)",
          "back": "Net Income ÷ Shareholders' Equity × 100 — measures how effectively equity capital generates profit"
        },
        {
          "id": "accounting-finance-101-l07-f4",
          "front": "Debt-to-Equity Ratio",
          "back": "Total Liabilities ÷ Total Equity — measures financial leverage; higher ratio means more debt relative to owner investment = more risk"
        }
      ]
    },
    {
      "id": "accounting-finance-101-l08",
      "title": "Budgeting, Forecasting, and Break-Even Analysis",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing target with an arrow hitting the dead center, surrounded by floating budget spreadsheets and a rising trend line, 3D illustration, vibrant colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation showing a line graph drawing itself. A red line representing costs and a green line representing revenue intersect at a glowing point labeled 'Break-Even'. The green line then shoots upwards, turning into a shower of coins. Bright, engaging visuals, 4k.",
      "objectives": [
        "Construct a basic operating budget with fixed costs, variable costs, and contingency",
        "Perform variance analysis by comparing budgeted to actual results",
        "Calculate the break-even point using Break-Even Units = Fixed Costs ÷ (Price − Variable Cost per Unit)"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l08-c1",
          "title": "Building a Budget",
          "content": "Creating a budget is a vital skill for managing your finances wisely. A budget acts as a financial roadmap for a specific time frame, which can be a month, a quarter, or even a full year. The first step in building a budget is to estimate your expected revenue. This can be based on how much money you made in the past, the current market conditions, and any potential sales opportunities you foresee.\n\nNext, it's important to identify your fixed costs. These are expenses that stay the same no matter how much you produce or sell. Common examples of fixed costs include rent, salaries for employees, and insurance payments. For instance, if your rent is $3,000 each month, your total salaries amount to $8,000, and your insurance costs $500, you would include these figures in your budget.\n\nAfter identifying fixed costs, you should estimate your variable costs. These are expenses that can change based on how much you produce or sell. Examples of variable costs include the price of raw materials, sales commissions, shipping fees, and hourly labor costs. It's essential to keep track of these expenses because they can significantly impact your overall budget.\n\nAdditionally, it's a good idea to include a contingency reserve in your budget. This reserve, typically around 5% to 10% of your total budget, is set aside to cover any unexpected expenses that might come up. This way, you won't be caught off guard if something unexpected happens.\n\nThere are three main approaches to budgeting that you can consider:\n1. **Top-Down Budgeting**: Leadership sets overall financial targets, and departments allocate their budgets based on those targets.\n2. **Bottom-Up Budgeting**: Each department creates its own budget estimates, which are combined to form the overall company budget.\n3. **Zero-Based Budgeting (ZBB)**: Every expense must be justified from scratch at the beginning of each budgeting period, with no automatic carryovers from previous budgets.\n\n**Why This Matters:** A budget is your financial plan of attack. Without it, a business is just guessing how much money it can afford to spend, which often leads to cash shortages.\n\n**Self-Check:** What is the difference between a fixed cost and a variable cost? (Answer: Fixed costs stay the same regardless of sales volume, like rent. Variable costs change based on how much you sell, like raw materials.)"
        },
        {
          "id": "accounting-finance-101-l08-c2",
          "title": "Forecasting and Variance Analysis",
          "content": "Forecasting is an essential process that helps businesses make educated guesses about their future financial performance. This is done by analyzing historical data, conducting market research, and making certain assumptions about future conditions. One of the simplest ways to forecast is by looking at past revenue growth. For example, if a company saw an 8% increase in revenue last year and the market conditions are expected to remain stable, it would be logical to predict another 8% growth for the upcoming year. However, businesses can also use more sophisticated forecasting methods, like moving averages or scenario planning (preparing for best-case, base-case, and worst-case scenarios).\n\nAnother important concept in financial management is variance analysis. This tool helps companies compare their budgeted figures—what they planned to earn or spend—with their actual results. \n\nA favorable variance occurs when a company earns more than expected or spends less than planned. On the other hand, an unfavorable variance happens when a company earns less or spends more than it budgeted. For instance, if a company budgeted $10,000 for materials but ended up spending $11,200, this would result in a $1,200 unfavorable variance.\n\nIt is crucial for businesses to investigate significant variances on a monthly basis. Companies usually focus on three main categories of variances: revenue variances (did sales meet expectations?), cost variances (was spending in line with the budget?), and volume variances (did production levels match planned quantities?). By closely monitoring these variances, businesses can make informed decisions to improve their financial performance.\n\n**Why This Matters:** A budget is useless if you don't check your actual performance against it. Variance analysis acts as an early warning system, letting managers fix small problems before they become massive financial disasters.\n\n**Self-Check:** If you budgeted $500 for marketing but actually spent $400, is that a favorable or unfavorable variance? (Answer: Favorable, because you spent less than planned!)"
        },
        {
          "id": "accounting-finance-101-l08-c3",
          "title": "Break-Even Analysis",
          "content": "Break-even analysis is an important concept in accounting and finance that helps businesses understand how many products they need to sell in order to cover all their costs. When a company reaches its break-even point, it means that the total money earned from sales is exactly equal to the total costs incurred, resulting in neither profit nor loss. \n\nTo calculate the break-even point, we use a specific formula: Break-Even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit). \n\nThe part of the formula that subtracts variable costs from the selling price is called the contribution margin per unit. This margin tells us how much money each sale contributes to covering fixed costs and eventually making a profit. \n\nFor instance, let's consider a candle company. If this company has fixed costs of $6,000 every month and sells each candle for $25, while it costs $10 to produce each candle, we can calculate the contribution margin. Here, the contribution margin would be $25 (selling price) minus $10 (variable cost), which equals $15 per candle.\n\nNow, to find out how many candles the company needs to sell to break even, we divide the fixed costs of $6,000 by the contribution margin of $15. This calculation shows that the company needs to sell 400 candles each month to cover all its costs. If they sell 401 candles, they will start making a profit, but if they only sell 399, they will incur a loss.\n\nAdditionally, we can calculate the Break-Even Revenue, which is the total amount of money the company needs to earn to break even. This is done by multiplying the break-even units (400 candles) by the selling price ($25), resulting in a total of $10,000.\n\n**Why This Matters:** Break-even analysis is the ultimate reality check for a business idea. It tells you exactly what your sales target must be just to survive.\n\n**Self-Check:** If your fixed costs are $1,000, your selling price is $20, and your variable cost is $10, how many units must you sell to break even? (Answer: 100 units. $20 - $10 = $10 contribution margin. $1,000 ÷ $10 = 100.)"
        }
      ],
      "interactiveActivities": [
        {
          "id": "accounting-finance-101-l08-a1",
          "title": "Coffee Shop Budget & Break-Even",
          "type": "project_builder",
          "description": "Build a monthly budget and break-even for a coffee shop. Fixed costs: rent $3,500 + wages $6,000 + insurance $400 = $9,900. Average coffee price $5.50, variable cost per cup $1.80. Contribution margin = $3.70. Break-even = $9,900 ÷ $3.70 ≈ 2,676 cups/month (≈ 89 cups/day). If you sell 3,200 cups, projected monthly profit = (3,200 × $3.70) − $9,900 = $1,940. Add a 7% contingency ($693) and recalculate net profit."
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l08-f1",
          "front": "Break-Even Point (units)",
          "back": "Fixed Costs ÷ (Selling Price − Variable Cost per Unit) — the volume at which total revenue equals total cost"
        },
        {
          "id": "accounting-finance-101-l08-f2",
          "front": "Contribution Margin",
          "back": "Selling Price − Variable Cost per Unit — the amount each unit sale contributes toward covering fixed costs and generating profit"
        },
        {
          "id": "accounting-finance-101-l08-f3",
          "front": "Zero-Based Budgeting (ZBB)",
          "back": "Every expense must be justified from $0 each period — no automatic carryover from previous budget periods"
        },
        {
          "id": "accounting-finance-101-l08-f4",
          "front": "Variance (favorable vs. unfavorable)",
          "back": "Favorable: actual results beat the budget (more revenue or less cost). Unfavorable: actual results trail the budget (less revenue or more cost)"
        }
      ]
    },
    {
      "id": "accounting-finance-101-l09",
      "title": "Ratios, Budgets, and Break-Even Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital calculator with a holographic projection of a rising bar chart and a target, set against a dark background, 3D render, neon blue and green.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced animation of financial puzzle pieces coming together to form a complete picture of a thriving business. Glowing lines connect ratios, budgets, and break-even points. High-tech, sleek visual style, dynamic camera angles.",
      "objectives": [
        "Apply financial ratio analysis, budgeting concepts, and break-even calculations"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l09-q1",
          "text": "A company has $80,000 in current assets and $40,000 in current liabilities. What is its current ratio?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2.0"
            },
            {
              "id": "b",
              "text": "0.5"
            },
            {
              "id": "c",
              "text": "40,000"
            },
            {
              "id": "d",
              "text": "120,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Current Ratio = Current Assets ÷ Current Liabilities = $80,000 ÷ $40,000 = 2.0. The company has $2 for every $1 of short-term debt."
        },
        {
          "id": "accounting-finance-101-l09-q2",
          "text": "If revenue is $200,000 and COGS is $120,000, what is the gross profit margin?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "40%"
            },
            {
              "id": "b",
              "text": "60%"
            },
            {
              "id": "c",
              "text": "80%"
            },
            {
              "id": "d",
              "text": "20%"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Gross Profit = $200,000 − $120,000 = $80,000. Margin = $80,000 ÷ $200,000 × 100 = 40%."
        },
        {
          "id": "accounting-finance-101-l09-q3",
          "text": "A product sells for $50, variable cost is $20 per unit, and monthly fixed costs are $9,000. What is the break-even quantity?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "300 units"
            },
            {
              "id": "b",
              "text": "180 units"
            },
            {
              "id": "c",
              "text": "450 units"
            },
            {
              "id": "d",
              "text": "9,000 units"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Contribution margin = $50 − $20 = $30. Break-even = $9,000 ÷ $30 = 300 units per month."
        },
        {
          "id": "accounting-finance-101-l09-q4",
          "text": "An unfavorable budget variance means:",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Actual costs exceeded the budget or actual revenue fell short"
            },
            {
              "id": "b",
              "text": "The company spent less than planned"
            },
            {
              "id": "c",
              "text": "Revenue exceeded forecasts"
            },
            {
              "id": "d",
              "text": "The budget was perfectly accurate"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Unfavorable means actual results were worse than budgeted — either higher costs or lower revenue than planned."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 2
        }
      }
    },
    {
      "id": "accounting-finance-101-l10",
      "title": "Mastery Quiz: Accounting & Finance Foundations",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A golden trophy shaped like a rising stock chart, resting on a stack of leather-bound accounting ledgers, cinematic lighting, 3D render, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A grand, cinematic animation of a golden vault opening to reveal a glowing, floating diploma surrounded by gold coins and financial symbols. Confetti falls in slow motion. Epic, triumphant lighting, 4k resolution.",
      "objectives": [
        "Synthesize and apply all accounting and finance fundamentals"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l10-q1",
          "text": "A company reports assets of $350,000, liabilities of $150,000, and revenue of $200,000. What is the owner's equity?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$200,000"
            },
            {
              "id": "b",
              "text": "$350,000"
            },
            {
              "id": "c",
              "text": "$500,000"
            },
            {
              "id": "d",
              "text": "$150,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Equity = Assets − Liabilities = $350,000 − $150,000 = $200,000. Revenue appears on the income statement, not directly in this balance-sheet calculation."
        },
        {
          "id": "accounting-finance-101-l10-q2",
          "text": "You invest $2,000 at 8% annual compound interest. Using FV = PV × (1 + r)^n, what is the value after 3 years?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$2,519.42"
            },
            {
              "id": "b",
              "text": "$2,480.00"
            },
            {
              "id": "c",
              "text": "$2,160.00"
            },
            {
              "id": "d",
              "text": "$2,600.00"
            }
          ],
          "correctOptionId": "a",
          "explanation": "FV = $2,000 × (1.08)^3 = $2,000 × 1.259712 = $2,519.42. Compound interest earns $39.42 more than simple interest ($2,480)."
        },
        {
          "id": "accounting-finance-101-l10-q3",
          "text": "A company earns net income of $60,000 on shareholders' equity of $300,000. What is the ROE?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "20%"
            },
            {
              "id": "b",
              "text": "5%"
            },
            {
              "id": "c",
              "text": "50%"
            },
            {
              "id": "d",
              "text": "200%"
            }
          ],
          "correctOptionId": "a",
          "explanation": "ROE = Net Income ÷ Shareholders' Equity × 100 = $60,000 ÷ $300,000 × 100 = 20%."
        },
        {
          "id": "accounting-finance-101-l10-q4",
          "text": "A product has a $40 selling price, $16 variable cost, and $7,200 in monthly fixed costs. How many units must sell to break even?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "300 units"
            },
            {
              "id": "b",
              "text": "180 units"
            },
            {
              "id": "c",
              "text": "450 units"
            },
            {
              "id": "d",
              "text": "7,200 units"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Contribution margin = $40 − $16 = $24. Break-even = $7,200 ÷ $24 = 300 units. Selling unit 301 generates profit."
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
