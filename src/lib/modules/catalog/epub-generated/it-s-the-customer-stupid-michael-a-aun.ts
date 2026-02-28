import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file000127.epub
// Author: Michael A. Aun  |  Subject: Customer Strategy

export const ItSTheCustomerStupidMichaelAAunModule: LearningModule = {
  id: "it-s-the-customer-stupid-michael-a-aun",
  title: "It's the Customer, Stupid! 34 Wake-Up Calls to Help You Stay Client-Focused",
  description:
    "Award-winning speaker Michael Aun delivers a data-driven and story-rich playbook for transforming every touchpoint into a loyalty-building moment — from handling complaints with grace to creating raving customer advocates through trust, listening, and service recovery.",
  subject: "Business",
  tags: ["epub-derived", "curriculum", "interactive", "mba", "customer-service", "sales"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Quantify the financial consequences of poor customer service using real statistics",
    "Design a systematic feedback loop that captures actionable insight from customers",
    "Apply a problem-resolution framework that fixes issues without assigning internal blame",
    "Explain the principle of going beyond the expected to create memorable customer experiences",
    "Analyse how a single trust violation permanently damages a client relationship",
    "Implement a customer-retention strategy grounded in the 80/20 principle",
    "Build a customer-centric culture where every staff member sees themselves as part of the solution",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  The Real Cost of Losing a Customer
    ───────────────────────────────────────────────── */
    {
      id: "customer-stupid-l01",
      title: "The Real Cost of an Unhappy Customer",
      type: "video",
      duration: 12,
      objectives: [
        "State the key statistics about dissatisfied customer behaviour",
        "Calculate the lifetime value impact of a single customer lost",
        "Explain why the 'silent majority' of unhappy customers is the most dangerous group",
      ],
      chunks: [
        {
          id: "customer-stupid-l01-c1",
          title: "What Unhappy Customers Actually Do",
          content:
            "Every company talks about providing dynamite customer service, yet most build elaborate walls to prevent customers from voicing complaints. The gap between stated intentions and real practice is colossal. Michael Aun opens with a stark set of statistics that should alarm any business leader: dissatisfied customers tell an average of ten other people about their bad experience, and twelve percent tell up to twenty. This is not a trivial ripple — it is a multiplication problem. One poorly handled customer interaction generates negative word of mouth that reaches a network of ten to twenty potential future customers, shaping their perceptions before your brand even has a chance to make its case. In the social media era, these numbers are far higher: a single viral complaint post can reach tens of thousands within hours. The first step toward customer-centricity is acknowledging that service failures are never private events.",
        },
        {
          id: "customer-stupid-l01-c2",
          title: "The Silent Majority: Customers Who Leave Without a Word",
          content:
            "Perhaps the most alarming finding in Aun's research is what unhappy customers choose NOT to do. The majority simply leave. As he documents, nineteen of twenty dissatisfied clients will not bother to tell you they are unhappy — and fourteen of those twenty will simply take their business elsewhere without explanation. This means for every complaint you receive, there are approximately nineteen silent departures you will never learn about. Companies that measure customer satisfaction only by the volume of formal complaints are dangerously misinformed: silence is not satisfaction; it is resignation. An effective customer service strategy does not wait for complaints to arrive — it proactively seeks feedback through structured follow-up, post-transaction surveys, and outbound relationship calls that make customers feel heard before frustration reaches the boiling point.",
        },
        {
          id: "customer-stupid-l01-c3",
          title: "The Financial Mathematics of Customer Loss",
          content:
            "Customer acquisition is expensive. Research consistently shows it costs five to fifteen times more money to attract a new customer than to retain an existing one. When you compound this across a client's projected lifetime value — the total revenue they would have generated over years of repeat business — a single preventable defection represents a devastating financial loss that is almost never captured in an organisation's service failure reporting. Aun's message to leaders is direct: stop measuring service quality only through the lens of customer satisfaction scores and start calculating the cost of defection. When retention is reframed as a revenue and cost equation rather than a 'nice-to-have' cultural aspiration, the business case for investing in excellent service becomes unarguable. Every dollar spent on service training is a multiplier on lifetime customer value.",
        },
      ],
      flashcards: [
        {
          id: "customer-stupid-l01-f1",
          front: "Negative word-of-mouth multiplier",
          back: "Dissatisfied customers tell an average of 10 others about bad experience (12% tell up to 20); service failures are never private events",
        },
        {
          id: "customer-stupid-l01-f2",
          front: "Silent customer defection",
          back: "19 of 20 unhappy customers do not complain — they simply leave quietly; measuring satisfaction only by complaint volume dramatically understates the true problem",
        },
        {
          id: "customer-stupid-l01-f3",
          front: "Customer acquisition cost",
          back: "The total marketing, sales, and onboarding cost to win a new customer; typically 5–15x higher than the cost of retaining an existing one, making retention a superior investment",
        },
        {
          id: "customer-stupid-l01-f4",
          front: "Customer lifetime value (CLV)",
          back: "The total projected revenue a customer will generate over the entire duration of their relationship with a business; the true financial benchmark for evaluating service investment decisions",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Feedback Systems — Listening to Win
    ───────────────────────────────────────────────── */
    {
      id: "customer-stupid-l02",
      title: "Great Customer Service Starts with Great Listening",
      type: "video",
      duration: 11,
      objectives: [
        "Explain how feedback systems create the foundation for excellent service",
        "Describe the Milliken & Company model of structured customer feedback",
        "Identify the link between employee rewards and customer service behaviour",
      ],
      chunks: [
        {
          id: "customer-stupid-l02-c1",
          title: "Why Most Companies Fail at Feedback",
          content:
            "Michael Aun's wife Christine represents what he calls 'the perfect customer': patient, genuinely willing to give companies the benefit of the doubt, methodically navigating the corporate maze to find a solution. But even Christine's patience wears thin when companies design their customer experience not to listen to feedback but to deflect it — routing callers through endless phone trees, requiring repeated explanation to multiple agents, and never closing the loop with the person who raised the original concern. Most organisations gather customer feedback reactively (when complaints arrive) and sporadically (through annual surveys). Both approaches are insufficient. Reactive feedback captures only the most motivated complainers — a small, unrepresentative sample. Annual surveys are too infrequent to support operational improvement. The organisations that build genuine customer loyalty collect feedback at every meaningful interaction and act visibly on what they hear.",
        },
        {
          id: "customer-stupid-l02-c2",
          title: "The Milliken Model: Feedback as a Strategic Process",
          content:
            "Milliken & Company — one of the world's most celebrated manufacturers — provides a model of systematic customer feedback that Aun holds up as a gold standard. Rather than treating customer input as a reactive crisis-management tool, Milliken built structured listening processes into every supplier and customer relationship. Account managers conducted regular, structured review conversations not just about product performance but about the entire experience of doing business together: responsiveness, accuracy, communication, and long-term goals. The insights gathered fed directly into product development and operational improvement cycles. Milliken won the Malcolm Baldrige National Quality Award — the highest US business excellence recognition — in part because it demonstrated that customer feedback was not a department or a hotline but a strategic capability woven throughout the entire organisation. Consistent, disciplined listening is itself a competitive differentiator.",
        },
        {
          id: "customer-stupid-l02-c3",
          title: "You Get the Behaviour You Reward",
          content:
            "One of Aun's most actionable principles is deceptively simple: organisations get the customer service behaviour they reward. If customer service representatives are evaluated only on call duration and case closure speed, they will close cases quickly — whether or not the customer's problem is actually solved. If sales staff are compensated purely on new account acquisition, they will prioritise hunting over farming existing relationships, even though existing customers are far more profitable. Conversely, when companies explicitly measure, recognise, and reward behaviours that build long-term customer loyalty — genuine problem resolution, proactive follow-up, going beyond the expected — those behaviours become part of the culture rather than exceptions celebrated in company newsletters. The performance management system is the most powerful cultural signal a business sends about what it actually values.",
        },
      ],
      flashcards: [
        {
          id: "customer-stupid-l02-f1",
          front: "Customer feedback loop",
          back: "A systematic process that collects customer input at every meaningful interaction, analyses it promptly, and feeds it visibly into operational improvements — not just annual surveys",
        },
        {
          id: "customer-stupid-l02-f2",
          front: "Malcolm Baldrige National Quality Award",
          back: "The United States' highest formal recognition for business excellence in quality, performance, and customer focus; awarded by the President, held by Milliken & Company among others",
        },
        {
          id: "customer-stupid-l02-f3",
          front: "'You get what you reward'",
          back: "Aun's principle that performance management systems shape culture: rewarding speed over resolution produces rushed, unresolved interactions; rewarding genuine loyalty-building behaviours cultivates a customer-first culture",
        },
        {
          id: "customer-stupid-l02-f4",
          front: "Hunting vs farming (sales)",
          back: "Hunting focuses on acquiring new customers; farming focuses on deepening and expanding existing relationships — most profitability comes from farming, yet many incentive systems over-reward hunting",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Fix the Problem, Not the Blame
    ───────────────────────────────────────────────── */
    {
      id: "customer-stupid-l03",
      title: "Fix the Problem, Not the Blame: Mastering Service Recovery",
      type: "video",
      duration: 11,
      objectives: [
        "Apply Aun's 'Stop the Frame' service-recovery sequence",
        "Calculate the hidden opportunity cost of a lost customer",
        "Explain the role of customer service empowerment in rapid resolution",
      ],
      chunks: [
        {
          id: "customer-stupid-l03-c1",
          title: "The Grocery Store Lesson",
          content:
            "When Michael Aun had to find a new grocery store after his family's business closed, he selected a chain he describes cryptically as one that 'rhymes with ogre.' Loading twin sons and three shopping carts into an old pickup truck for a weekly shop was a significant investment of time and effort — and that effort was the backdrop against which every service interaction at the new store would be judged. What struck him was not the occasional mistake — all businesses make mistakes — but how the store responded when errors occurred. The employees' first instinct when something went wrong was to find whose fault it was, then pass the customer down the chain while the internal blame game played out. This sequence leaves the customer waiting, frustrated, and feeling irrelevant to a process that is ostensibly about serving them. Aun's core insight: when internal blame-fixing takes priority over customer problem-fixing, you lose the customer even if you eventually solve the problem.",
        },
        {
          id: "customer-stupid-l03-c2",
          title: "Stop the Frame: The Service Recovery Sequence",
          content:
            "Aun's service recovery framework begins with what he calls 'Stop the Frame' — pausing the conversation to focus entirely on the customer's experience rather than the technical cause of the failure. Step one: acknowledge the customer's frustration directly and sincerely, without minimising or deflecting. Step two: take immediate ownership, even if the problem originated in another department — from the customer's perspective, every employee represents the entire company. Step three: resolve the issue as quickly as possible, ideally in the same conversation. Step four: follow up after resolution to confirm the customer is satisfied and to demonstrate that the relationship continues beyond crisis management. This sequence is powerful not just for its direct effect on the individual customer but because it signals organisational values: customers matter more than internal defensiveness.",
        },
        {
          id: "customer-stupid-l03-c3",
          title: "Empowerment: Giving Staff the Authority to Fix Things",
          content:
            "Ninety percent of customers, Aun documents, make their purchasing decisions based primarily on service quality. Yet most organisations keep the authority to resolve problems concentrated at management levels that are several escalation steps removed from the customer interaction. The result is well-intentioned front-line employees who genuinely want to help but cannot: they have neither the tools nor the discretionary authority to resolve the very problems customers call about. Aun argues forcefully for a different model — one in which front-line staff are trained, trusted, and explicitly empowered to resolve common customer problems without escalation. The cost of this empowerment is minimal compared to the cost of the customer making fourteen friends before walking out the door permanently.",
        },
      ],
      flashcards: [
        {
          id: "customer-stupid-l03-f1",
          front: "'Stop the Frame'",
          back: "Aun's service recovery opening move: pause the transaction, focus entirely on the customer's experience, and acknowledge frustration before attempting to explain or resolve the technical issue",
        },
        {
          id: "customer-stupid-l03-f2",
          front: "Service recovery paradox",
          back: "The counterintuitive finding that customers who experience a problem that is then excellently resolved sometimes end up more loyal than customers who never experienced a problem at all",
        },
        {
          id: "customer-stupid-l03-f3",
          front: "Front-line empowerment",
          back: "Giving customer-facing employees the training, tools, and discretionary authority to resolve common service failures without escalation — reducing resolution time and improving customer experience simultaneously",
        },
        {
          id: "customer-stupid-l03-f4",
          front: "Opportunity cost of a lost patron",
          back: "Not just the lost sale value but all future purchases, referrals, and positive word-of-mouth that would have been generated over the customer's lifetime had the relationship been retained",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Quiz — Customer Economics Checkpoint
    ───────────────────────────────────────────────── */
    {
      id: "customer-stupid-l04",
      title: "Customer Economics and Recovery Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Test understanding of customer retention statistics and service recovery principles"],
      questions: [
        {
          id: "customer-stupid-l04-q1",
          text: "According to Aun's data, what fraction of dissatisfied customers will tell you about their bad experience before leaving?",
          options: [
            { id: "a", text: "Approximately half — most customers want to give companies a chance to fix things" },
            { id: "b", text: "1 in 20 — the vast majority leave silently without complaint" },
            { id: "c", text: "9 in 10 — customers are becoming more vocal in the social media era" },
            { id: "d", text: "2 in 3 — most companies have reasonable complaint channels that customers use" },
          ],
          correctOptionId: "b",
          explanation:
            "Aun's research shows 19 of 20 unhappy customers do not complain. The silent majority just leave — and 14 of those 20 take their business elsewhere permanently. This makes proactive feedback-seeking, not reactive complaint handling, the strategic imperative.",
        },
        {
          id: "customer-stupid-l04-q2",
          text: "The statement 'you get the behaviour you reward' most directly implies that customer service culture is best shaped by:",
          options: [
            { id: "a", text: "Posting mission statements and service values prominently in the break room" },
            { id: "b", text: "Aligning performance management, recognition, and incentive systems with loyalty-building behaviours" },
            { id: "c", text: "Hiring only candidates who score above 80% on empathy assessments" },
            { id: "d", text: "Requiring all employees to read Aun's book and pass a comprehension test" },
          ],
          correctOptionId: "b",
          explanation:
            "Culture is shaped by what organisations measure and reward in practice. Staff will naturally optimise for what earns them praise, promotion, or bonuses — so performance management must explicitly reward the behaviours that build genuine customer loyalty.",
        },
        {
          id: "customer-stupid-l04-q3",
          text: "What is the first step in Aun's 'Stop the Frame' service recovery framework?",
          options: [
            { id: "a", text: "Escalate the complaint to management immediately" },
            { id: "b", text: "Investigate the root cause of the service failure before engaging with the customer" },
            { id: "c", text: "Acknowledge the customer's frustration directly and sincerely before attempting to explain or resolve" },
            { id: "d", text: "Offer a discount voucher to de-escalate the situation quickly" },
          ],
          correctOptionId: "c",
          explanation:
            "Aun's recovery sequence prioritises emotional acknowledgement first: the customer needs to feel heard and valued before any technical discussion begins. Jumping straight to explanation or resolution without acknowledgement feels defensive and dismissive.",
        },
        {
          id: "customer-stupid-l04-q4",
          text: "It costs five to fifteen times more to attract a new customer than to retain an existing one. This statistic most directly argues for:",
          options: [
            { id: "a", text: "Reducing the marketing budget and reinvesting the savings in product development" },
            { id: "b", text: "Treating customer retention as a high-priority financial investment rather than a soft cultural aspiration" },
            { id: "c", text: "Focusing all sales effort on existing accounts and ceasing new business development" },
            { id: "d", text: "Offering existing customers a permanent 15% loyalty discount to offset the acquisition cost differential" },
          ],
          correctOptionId: "b",
          explanation:
            "The acquisition-cost multiple makes the ROI case for retention investment extremely clear. When service improvement is framed as a revenue-protection strategy rather than a cost centre, it commands the attention and resources it warrants.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Baker's Dozen — Exceeding Expectations
    ───────────────────────────────────────────────── */
    {
      id: "customer-stupid-l05",
      title: "Always Give Them a Baker's Dozen: Exceeding Customer Expectations",
      type: "video",
      duration: 11,
      objectives: [
        "Define the 'baker's dozen' philosophy in a business context",
        "Apply the NUMMI/Geo Prism case study lessons to service design",
        "Design one concrete 'extra mile' practice for a business context",
      ],
      chunks: [
        {
          id: "customer-stupid-l05-c1",
          title: "What a Baker's Dozen Means for Business",
          content:
            "A baker's dozen is thirteen — one more than the twelve expected. For centuries, bakers gave an extra roll or loaf to protect against the risk of shortfall, but the practice evolved into a powerful signal of generosity beyond obligation. Aun uses the metaphor to define a customer service philosophy: doing not just what the transaction requires but one demonstrably more. This is not about giving things away at a financial loss — the extra value delivered is often as simple as remembering a customer's name, following up after a service call to confirm satisfaction, or going slightly out of your way to resolve an issue the customer did not yet know they had. The baker's dozen principle is transformational because it changes the customer's mental model: instead of evaluating service against the minimum acceptable standard, they begin evaluating it against the memory of the last time someone exceeded their expectations.",
        },
        {
          id: "customer-stupid-l05-c2",
          title: "The NUMMI Lesson: Culture Beats Systems",
          content:
            "Aun recounts how New United Motors (NUMMI) — a groundbreaking joint venture between Toyota and General Motors, producing the Geo Prism — demonstrated that a culture of genuine customer service can succeed even with a workforce initially shaped by very different norms. Toyota brought its famous management philosophy and quality systems; GM contributed an American workforce from a plant previously shut down for poor performance. The seemingly risky combination worked — not because the systems were perfect, but because management invested in treating workers as partners in quality rather than adversaries to be managed. The parallel for customer service is direct: no CRM software, feedback form, or escalation procedure can substitute for a workforce that genuinely understands why the customer matters and feels personally invested in that customer's experience.",
        },
        {
          id: "customer-stupid-l05-c3",
          title: "Great Customer Service Demands Great Listening",
          content:
            "Aun's baker's dozen principle is inseparable from active listening: you can only reliably exceed someone's expectations if you understand what their actual expectations are. Most service failures are not failures of intention — the overwhelming majority of staff genuinely want to be helpful. They are failures of comprehension: the company or the employee did not accurately grasp what the customer actually needed, and therefore delivered something that was competent but wrong. Active listening in a customer context means paraphrasing what you heard, asking confirmation questions before acting, and resisting the temptation to assume you know the answer before the customer finishes speaking. The companies that build legendary customer loyalty — Nordstrom, Ritz-Carlton, Chick-fil-A — are not staffed by people with unusual abilities. They are staffed by people who have been trained to listen with uncommon discipline.",
        },
      ],
      flashcards: [
        {
          id: "customer-stupid-l05-f1",
          front: "Baker's dozen service philosophy",
          back: "Delivering one demonstrably more than what the transaction requires; shifting the customer's benchmark from minimum acceptable to the last time someone exceeded their expectations",
        },
        {
          id: "customer-stupid-l05-f2",
          front: "NUMMI (New United Motors)",
          back: "Toyota-GM joint venture that produced the Geo Prism; demonstrated that cultural investment in workers as quality partners can dramatically outperform purely system-based quality management",
        },
        {
          id: "customer-stupid-l05-f3",
          front: "Active listening (customer context)",
          back: "Paraphrasing, asking clarifying questions, and confirming understanding before acting — prevents service failures rooted in misunderstanding rather than bad intentions",
        },
        {
          id: "customer-stupid-l05-f4",
          front: "Customer expectation benchmark",
          back: "The mental reference point customers use to evaluate service quality; the baker's dozen philosophy deliberately raises this benchmark by consistently delivering beyond the minimum",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Trust and the 80/20 Rule of Customer Retention
    ───────────────────────────────────────────────── */
    {
      id: "customer-stupid-l06",
      title: "Trust, Retention, and the 80/20 Rule",
      type: "video",
      duration: 12,
      objectives: [
        "Explain why trust violations permanently end client relationships",
        "Apply the 80/20 Pareto principle to customer retention strategy",
        "Design a retention programme targeting the most valuable customer segment",
      ],
      chunks: [
        {
          id: "customer-stupid-l06-c1",
          title: "Trust, Once Violated, Negates a Relationship",
          content:
            "Aun's mentor John Savage — one of the most successful life insurance professionals of his era — left one sentence tattooed on his professional consciousness: 'Trust, once violated, negates a relationship.' The research Aun presents reinforces this principle with unsettling precision: if twenty clients are unhappy with your service, nineteen will not tell you. Fourteen will simply take their business elsewhere. The violation of trust is the number one reason customers seek out a competitor. And trust violations are rarely dramatic: they are often a promise that was not kept, a deadline that was missed without communication, information that turned out to be inaccurate, or a tone that felt dismissive. These small violations accumulate into a threshold crossing — and once a customer mentally decides the relationship cannot be trusted, no amount of subsequent good service fully recovers it.",
        },
        {
          id: "customer-stupid-l06-c2",
          title: "The 80/20 Principle and Customer Segmentation",
          content:
            "The Pareto principle — familiar to most business leaders as the '80/20 rule' — holds that roughly 80% of outcomes come from 20% of inputs. In a customer retention context, this means approximately 80% of a company's revenue comes from 20% of its customer base. This asymmetry has profound strategic implications. A blanket retention programme that treats all customers identically misallocates resources: it invests roughly the same in preserving a marginally profitable occasional buyer as in protecting a deeply embedded, high-volume key account. Aun argues that customer retention must be stratified: identify the top 20% (by revenue, by referral value, or by strategic importance), understand their specific needs and trust-building requirements, and invest disproportionately in those relationships. Not because other customers do not matter, but because the consequences of losing a top-tier client are categorically different from the consequences of losing the bottom tier.",
        },
        {
          id: "customer-stupid-l06-c3",
          title: "Building a Trust-Based Retention Strategy",
          content:
            "A trust-based retention strategy has two distinct components. First, prevention: create systems that consistently deliver on promises. This means setting realistic commitments (never overpromising), communicating proactively when circumstances change before the customer discovers the problem independently, and ensuring every person who touches a client account understands and enforces the organisation's trust standards. Second, recovery: when trust is violated — and in any sustained business relationship, it eventually will be — activate an immediate, personal, and transparent response. Aun makes the crucial point that up to 90% of unhappy clients will not buy from you again if their experience is not resolved — but the inverse is also true: clients whose trust is violated and then visibly and sincerely restored often become the most loyal advocates, because they have direct evidence of how the organisation behaves under pressure.",
        },
      ],
      flashcards: [
        {
          id: "customer-stupid-l06-f1",
          front: "'Trust, once violated, negates a relationship'",
          back: "John Savage's maxim, cited by Aun: trust is the foundation of every client relationship; once broken by a missed promise, misleading information, or dismissive treatment, it cannot be fully rebuilt",
        },
        {
          id: "customer-stupid-l06-f2",
          front: "Pareto 80/20 principle (customer application)",
          back: "Roughly 80% of business revenue comes from 20% of customers; effective retention strategy invests disproportionately in understanding and serving those high-value accounts",
        },
        {
          id: "customer-stupid-l06-f3",
          front: "Customer trust cycle",
          back: "The sequence from trust-building (consistent promise-keeping) to trust violation (unmet commitment) to trust recovery (transparent, empathetic resolution) — each stage shapes long-term loyalty",
        },
        {
          id: "customer-stupid-l06-f4",
          front: "Proactive communication",
          back: "Notifying customers of a problem or delay before they discover it themselves; transforms a trust-damaging surprise into a trust-building demonstration of respect and transparency",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Final Quiz — Customer Mastery
    ───────────────────────────────────────────────── */
    {
      id: "customer-stupid-l07",
      title: "Customer-Centricity: Final Mastery Check",
      type: "quiz",
      duration: 9,
      objectives: ["Synthesise the book's core customer service and retention principles"],
      questions: [
        {
          id: "customer-stupid-l07-q1",
          text: "According to Aun, the central reason customers stop doing business with a company is:",
          options: [
            { id: "a", text: "Price — they find a less expensive option elsewhere" },
            { id: "b", text: "Product quality — the product no longer meets their technical specifications" },
            { id: "c", text: "Violation of trust — a broken promise, inaccurate information, or dismissive treatment" },
            { id: "d", text: "Natural attrition — customers simply move on regardless of service quality" },
          ],
          correctOptionId: "c",
          explanation:
            "John Savage's principle is Aun's central thesis: trust is the single most powerful glue in a business relationship. Most defections are not primarily about price or features — they are about a moment when the client's trust was violated and not repaired.",
        },
        {
          id: "customer-stupid-l07-q2",
          text: "If 96% of unhappy clients do not complain about poor service, the most strategically effective response is to:",
          options: [
            { id: "a", text: "Reduce the customer service budget as complaints are rare and the cost is not justified" },
            { id: "b", text: "Implement proactive outreach that seeks feedback before frustration reaches a department-filing threshold" },
            { id: "c", text: "Train customer service agents to resolve the 4% who do complain as cheaply as possible" },
            { id: "d", text: "Accept that most customer dissatisfaction is undetectable and focus investment on new customer acquisition" },
          ],
          correctOptionId: "b",
          explanation:
            "If 96% of unhappy clients say nothing, waiting passively for complaints means you are responding to a 4% sample and ignoring 96% of your service problem. Proactive feedback mechanisms — regular check-in calls, post-transaction surveys — surface the silent majority before they leave.",
        },
        {
          id: "customer-stupid-l07-q3",
          text: "The NUMMI/Geo Prism case study most directly illustrates that outstanding customer service depends on:",
          options: [
            { id: "a", text: "Advanced CRM technology that tracks every customer interaction in real time" },
            { id: "b", text: "Hiring staff with prior experience exclusively from luxury service industries" },
            { id: "c", text: "A culture in which employees are treated as quality partners and genuinely understand why the customer matters" },
            { id: "d", text: "A formal ISO-certified quality management system that defines service standards in measurable KPIs" },
          ],
          correctOptionId: "c",
          explanation:
            "NUMMI's success came from cultural investment — treating the initially resistant workforce as partners in quality. The parallel for service businesses: no system or technology substitutes for staff who are genuinely motivated by customer outcomes.",
        },
        {
          id: "customer-stupid-l07-q4",
          text: "Applying the 80/20 Pareto principle to customer retention means a company should:",
          options: [
            { id: "a", text: "Spend 80% of the marketing budget on retaining the top 20% of customers and ignore the remaining 80%" },
            { id: "b", text: "Treat all customers identically to avoid the accusation of favouritism" },
            { id: "c", text: "Identify the top 20% of customers by value, understand their specific trust requirements, and invest disproportionately in those relationships" },
            { id: "d", text: "Reduce service standards for the bottom 80% of customers to fund premium service for the top 20%" },
          ],
          correctOptionId: "c",
          explanation:
            "The 80/20 rule argues for strategic prioritisation, not customer neglect. Retaining a top-tier client provides a categorically different financial return than retaining a low-frequency, low-value buyer — so investment must match the asymmetry of value.",
        },
        {
          id: "customer-stupid-l07-q5",
          text: "The 'baker's dozen' philosophy in customer service is best captured by which organisational practice?",
          options: [
            { id: "a", text: "Providing a 10% discount to every customer on their third purchase" },
            { id: "b", text: "Consistently delivering one demonstrably more than the transaction requires — remembering names, following up after resolution, anticipating unstated needs" },
            { id: "c", text: "Hiring more customer service representatives than competitors to reduce call wait times" },
            { id: "d", text: "Offering a premium loyalty programme that charges customers an annual fee for priority service access" },
          ],
          correctOptionId: "b",
          explanation:
            "The baker's dozen is not a loyalty scheme or a discount — it is a consistent habit of going slightly beyond what is expected. The accumulated effect reshapes the customer's mental benchmark from what service is to what it can be.",
        },
      ],
    },
  ],
};
