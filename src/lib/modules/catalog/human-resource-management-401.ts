import type { LearningModule } from "@/lib/modules/types";

export const HumanResourceManagement401Module: LearningModule = {
  id: "human-resource-management-401",
  title: "Strategic HR & Future of Work",
  description:
    "Explore HR as a strategic business partner through the Ulrich model, people analytics and data-driven HR, diversity equity and inclusion strategy, remote and hybrid work management, the gig economy and contingent workforce, HR technology including HRIS and AI recruiting, and future of work trends reshaping the profession.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "human-resources"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Apply the Ulrich HR Business Partner model to elevate HR's strategic role",
    "Use people analytics to make data-driven workforce decisions",
    "Design a comprehensive diversity, equity, and inclusion strategy",
    "Develop policies for managing remote and hybrid workforces effectively",
    "Evaluate the implications of the gig economy for HR strategy",
    "Assess HR technology solutions including HRIS platforms and AI recruiting tools",
    "Anticipate future of work trends and their impact on talent management"
  ],
  lessons: [
    {
      id: "human-resource-management-401-l01",
      title: "HR as Strategic Business Partner: The Ulrich Model",
      type: "video",
      duration: 14,
      objectives: [
        "Explain Dave Ulrich's four-role HR model",
        "Describe how HR creates value as a strategic partner",
        "Identify capabilities HR professionals need to be credible business partners"
      ],
      chunks: [
        {
          id: "human-resource-management-401-l01-c1",
          title: "Ulrich's Four HR Roles",
          content:
            "Dave Ulrich's seminal 1997 framework defines four roles HR must play simultaneously: (1) Strategic Partner — aligning HR strategy with business strategy, participating in business planning, and translating strategy into HR priorities. (2) Administrative Expert — designing efficient HR processes and leveraging technology to deliver flawless transactions. (3) Employee Champion — listening to employees, responding to their needs, and ensuring the employee value proposition is compelling. (4) Change Agent — facilitating organizational transformation, building change capacity, and managing culture shifts. The model argued that HR must transcend administrative tasks to sit at the strategic table."
        },
        {
          id: "human-resource-management-401-l01-c2",
          title: "Evolution to the HR Value Proposition",
          content:
            "Ulrich later evolved his model into the HR Competency Study, identifying competencies that make HR professionals effective: credible activist (trusted and willing to take positions), strategic positioner (understanding the business context), capability builder (creating organizational capabilities), change champion (driving transformation), HR innovator and integrator (designing integrated talent practices), and technology proponent (leveraging HR tech). The core message: HR creates value not by what it does, but by what it delivers — talent, leadership, and organizational capability that drive business results."
        },
        {
          id: "human-resource-management-401-l01-c3",
          title: "Building HR's Strategic Credibility",
          content:
            "For HR to be a genuine strategic partner, professionals need business acumen — understanding financial statements, competitive dynamics, and industry trends. They must speak the language of the business, not just HR jargon. This means leading with business outcomes ('reducing time-to-market through faster hiring') rather than HR activities ('improving our recruitment process'). CHROs who serve on executive committees demonstrate this by linking workforce planning to revenue forecasts, connecting engagement scores to customer satisfaction, and showing the ROI of talent investments in financial terms."
        }
      ],
      flashcards: [
        { id: "human-resource-management-401-l01-f1", front: "Ulrich's four HR roles", back: "Strategic Partner (align HR with business), Administrative Expert (efficient processes), Employee Champion (employee advocacy), Change Agent (facilitate transformation)" },
        { id: "human-resource-management-401-l01-f2", front: "Credible activist (Ulrich competency)", back: "An HR professional who is both trusted (credible through expertise and relationships) and willing to take positions and challenge the status quo (activist)" },
        { id: "human-resource-management-401-l01-f3", front: "How HR builds strategic credibility", back: "Developing business acumen, speaking in business outcomes (not HR jargon), linking workforce metrics to financial results, connecting people data to customer and revenue impact" }
      ]
    },
    {
      id: "human-resource-management-401-l02",
      title: "People Analytics and Data-Driven HR",
      type: "video",
      duration: 13,
      objectives: [
        "Define people analytics and its four maturity levels",
        "Apply predictive analytics to workforce challenges like turnover",
        "Address ethical concerns in people analytics"
      ],
      chunks: [
        {
          id: "human-resource-management-401-l02-c1",
          title: "What Is People Analytics?",
          content:
            "People analytics (also called HR analytics or workforce analytics) is the use of data and statistical methods to understand and improve workforce performance. It transforms HR from intuition-driven to evidence-based decision-making. The analytics maturity model has four levels: (1) Descriptive — what happened? (dashboards showing turnover rates, headcount trends). (2) Diagnostic — why did it happen? (analyzing drivers of turnover). (3) Predictive — what will happen? (modeling which employees are flight risks). (4) Prescriptive — what should we do? (recommending retention interventions for at-risk employees). Most organizations are at Levels 1-2; leading firms like Google and Microsoft operate at Levels 3-4."
        },
        {
          id: "human-resource-management-401-l02-c2",
          title: "Key Applications of People Analytics",
          content:
            "People analytics addresses critical business questions. Workforce planning uses demographic data and attrition models to forecast future talent needs. Recruitment analytics identifies which sourcing channels produce the highest-quality hires at the lowest cost. Engagement analytics correlates survey responses with productivity and retention to prioritize interventions. Compensation analytics detects pay inequities across gender, race, and tenure. Network analysis (organizational network analysis or ONA) maps informal collaboration patterns to identify hidden influencers and information bottlenecks. Google's Project Oxygen used analytics to identify the eight behaviors of great managers, fundamentally improving management quality."
        },
        {
          id: "human-resource-management-401-l02-c3",
          title: "Ethics and Privacy in People Analytics",
          content:
            "People analytics raises significant ethical concerns. Employee surveillance (monitoring emails, keystrokes, location) can erode trust and psychological safety. Algorithmic bias in predictive models can perpetuate discrimination — if historical hiring data reflects bias, models trained on that data will reproduce it. Best practices include transparency (telling employees what data is collected and how it is used), purpose limitation (using data only for stated purposes), de-identification (analyzing aggregate patterns, not targeting individuals), consent (where legally required), human oversight (never fully automating decisions about people), and regular bias audits of algorithms."
        }
      ],
      flashcards: [
        { id: "human-resource-management-401-l02-f1", front: "Four levels of people analytics maturity", back: "Descriptive (what happened), Diagnostic (why), Predictive (what will happen), Prescriptive (what to do) — most organizations are at Levels 1-2" },
        { id: "human-resource-management-401-l02-f2", front: "Google's Project Oxygen", back: "Used people analytics to identify eight behaviors of great managers — showed that technical expertise mattered less than coaching, communication, and supporting career development" },
        { id: "human-resource-management-401-l02-f3", front: "Ethics in people analytics", back: "Key principles: transparency, purpose limitation, de-identification, consent, human oversight of decisions, and regular bias audits of algorithms to prevent perpetuating discrimination" }
      ]
    },
    {
      id: "human-resource-management-401-l03",
      title: "Diversity, Equity, and Inclusion Strategy",
      type: "interactive",
      duration: 15,
      objectives: [
        "Distinguish between diversity, equity, and inclusion as distinct concepts",
        "Analyze the business case and moral case for DEI",
        "Design evidence-based DEI interventions that produce measurable results"
      ],
      chunks: [
        {
          id: "human-resource-management-401-l03-c1",
          title: "Defining Diversity, Equity, and Inclusion",
          content:
            "Diversity refers to the representation of different identities in the workforce — including race, ethnicity, gender, age, disability, sexual orientation, religion, socioeconomic background, neurodiversity, and cognitive styles. Equity means ensuring fair treatment, access, and opportunity by identifying and removing barriers — it is not the same as equality (treating everyone identically) because people start from different positions. Inclusion is the experience of belonging — feeling valued, respected, and empowered to contribute fully. An organization can be diverse without being inclusive if minority voices are marginalized. True DEI requires all three dimensions working together."
        },
        {
          id: "human-resource-management-401-l03-c2",
          title: "The Business Case for DEI",
          content:
            "McKinsey's research consistently shows that companies in the top quartile for ethnic and gender diversity on executive teams are 36% more likely to have above-average profitability. Diverse teams make better decisions because they bring varied perspectives, challenge groupthink, and process information more carefully. Boston Consulting Group found that diverse management teams generate 19% more revenue from innovation. Beyond the business case, there is a moral imperative: organizations have a responsibility to provide fair opportunity and combat systemic disadvantage. The strongest DEI programs are motivated by both business results and ethical commitment."
        },
        {
          id: "human-resource-management-401-l03-c3",
          title: "Evidence-Based DEI Interventions",
          content:
            "Research shows that some DEI interventions work better than others. Effective approaches include structured interviews (reduce bias in hiring by 40-60%), diverse hiring panels, blind resume screening, mentoring and sponsorship programs for underrepresented groups, inclusive leadership training focused on specific behaviors, employee resource groups (ERGs) with executive sponsors and budgets, and transparent reporting of diversity metrics. Less effective approaches include mandatory diversity training (which can trigger backlash) and one-time events without sustained commitment. Successful DEI strategy requires CEO commitment, accountability metrics tied to leadership compensation, and long-term cultural change."
        }
      ],
      flashcards: [
        { id: "human-resource-management-401-l03-f1", front: "Diversity vs. Equity vs. Inclusion", back: "Diversity: representation of different identities; Equity: removing barriers for fair access (not identical treatment); Inclusion: belonging and empowerment to contribute fully" },
        { id: "human-resource-management-401-l03-f2", front: "McKinsey DEI research finding", back: "Companies in top quartile for ethnic and gender diversity on executive teams are 36% more likely to have above-average profitability" },
        { id: "human-resource-management-401-l03-f3", front: "Most effective DEI interventions", back: "Structured interviews, diverse hiring panels, blind resume screening, mentoring/sponsorship, inclusive leadership training, ERGs, transparent metrics — with CEO commitment and accountability" }
      ]
    },
    {
      id: "human-resource-management-401-l04",
      title: "Remote, Hybrid, and Flexible Work Management",
      type: "video",
      duration: 12,
      objectives: [
        "Evaluate remote and hybrid work models and their trade-offs",
        "Design policies that maintain productivity and culture in distributed teams",
        "Address challenges of managing across time zones and virtual environments"
      ],
      chunks: [
        {
          id: "human-resource-management-401-l04-c1",
          title: "Remote and Hybrid Work Models",
          content:
            "The post-pandemic workplace offers a spectrum of work models. Fully remote organizations have no physical office — GitLab and Automattic operate with global distributed workforces. Hybrid models combine office and remote work — structured hybrid (specific days in office, like Google's three-day policy) or flexible hybrid (employee choice with guidelines). Office-first with flexibility allows occasional remote work for specific needs. Each model has trade-offs: fully remote maximizes talent access and reduces real estate costs but challenges culture-building and spontaneous collaboration. Hybrid seeks balance but creates 'proximity bias' where in-office employees receive more visibility and promotion opportunities."
        },
        {
          id: "human-resource-management-401-l04-c2",
          title: "Managing Distributed Teams Effectively",
          content:
            "Effective remote management requires intentional practices that replace the organic interactions of office life. Key strategies include: asynchronous communication as the default (written documentation over meetings), structured rituals (daily standups, weekly team syncs, quarterly offsites), results-based performance management (measuring outcomes not hours logged), deliberate culture-building (virtual social events, shared digital spaces, team norms documents), equitable meeting design (if one person is remote, everyone joins individually to level the playing field), and investment in collaboration technology (video conferencing, project management tools, digital whiteboards). Trust is the foundation — micromanagement destroys remote team effectiveness."
        },
        {
          id: "human-resource-management-401-l04-c3",
          title: "Challenges and HR Policy Implications",
          content:
            "Distributed work creates new HR challenges. Legal complexity arises when employees work across state or national borders — each jurisdiction may have different tax, labor, and benefits laws. Compensation geography (paying based on employee location vs. role value) is hotly debated. Employee wellbeing risks include isolation, burnout from always-on culture, and blurred work-life boundaries. Onboarding remote employees requires deliberate socialization structures. Equipment and home office stipends address ergonomic and technology needs. HR must develop clear remote work policies covering eligibility, expectations, communication norms, data security, and performance standards."
        }
      ],
      flashcards: [
        { id: "human-resource-management-401-l04-f1", front: "Proximity bias in hybrid work", back: "The tendency for in-office employees to receive more visibility, mentoring, and promotion opportunities than remote colleagues — a key equity challenge of hybrid models" },
        { id: "human-resource-management-401-l04-f2", front: "Key principles for managing distributed teams", back: "Async-first communication, structured rituals, results-based performance, deliberate culture-building, equitable meetings, and trust as the foundation" },
        { id: "human-resource-management-401-l04-f3", front: "Compensation geography debate", back: "Should remote employees be paid based on their physical location's cost of living or the market value of their role? No industry consensus — each approach has equity implications" }
      ]
    },
    {
      id: "human-resource-management-401-l05",
      title: "Checkpoint: Strategic HR, Analytics & DEI",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "human-resource-management-401-l05-q1",
          text: "In Ulrich's HR model, which role involves facilitating organizational transformation and managing culture change?",
          options: [
            { id: "a", text: "Strategic Partner" },
            { id: "b", text: "Administrative Expert" },
            { id: "c", text: "Employee Champion" },
            { id: "d", text: "Change Agent" }
          ],
          correctOptionId: "d",
          explanation: "The Change Agent role focuses on facilitating organizational transformation, building change capacity, and managing culture shifts — helping the organization adapt to evolving business conditions."
        },
        {
          id: "human-resource-management-401-l05-q2",
          text: "At which level of people analytics maturity does an organization model which employees are likely to leave?",
          options: [
            { id: "a", text: "Descriptive" },
            { id: "b", text: "Diagnostic" },
            { id: "c", text: "Predictive" },
            { id: "d", text: "Prescriptive" }
          ],
          correctOptionId: "c",
          explanation: "Predictive analytics (Level 3) uses statistical models to forecast future outcomes — such as predicting which employees are flight risks based on patterns in engagement, tenure, compensation, and manager quality data."
        },
        {
          id: "human-resource-management-401-l05-q3",
          text: "Which DEI concept specifically focuses on removing systemic barriers rather than treating everyone identically?",
          options: [
            { id: "a", text: "Diversity" },
            { id: "b", text: "Equality" },
            { id: "c", text: "Equity" },
            { id: "d", text: "Inclusion" }
          ],
          correctOptionId: "c",
          explanation: "Equity focuses on identifying and removing barriers to ensure fair access and opportunity. Unlike equality (identical treatment), equity recognizes that people start from different positions and may need different support to achieve fair outcomes."
        },
        {
          id: "human-resource-management-401-l05-q4",
          text: "What is 'proximity bias' in the context of hybrid work?",
          options: [
            { id: "a", text: "Preferring candidates who live near the office during recruitment" },
            { id: "b", text: "The tendency for in-office employees to receive more visibility and promotion opportunities than remote colleagues" },
            { id: "c", text: "Favoring employees who sit near executives in the office" },
            { id: "d", text: "A preference for hiring from geographically proximate universities" }
          ],
          correctOptionId: "b",
          explanation: "Proximity bias in hybrid work refers to the systemic advantage that in-office employees gain through more frequent face-time with managers, more visibility during meetings, and greater access to informal mentoring and promotion opportunities."
        }
      ]
    },
    {
      id: "human-resource-management-401-l06",
      title: "Gig Economy, HR Technology, and AI in Recruiting",
      type: "video",
      duration: 14,
      objectives: [
        "Analyze the gig economy's implications for workforce strategy",
        "Evaluate HRIS platforms and their role in HR transformation",
        "Assess the benefits and risks of AI in recruiting"
      ],
      chunks: [
        {
          id: "human-resource-management-401-l06-c1",
          title: "The Gig Economy and Contingent Workforce",
          content:
            "The gig economy encompasses independent contractors, freelancers, temporary workers, and platform-based workers (Uber, Upwork, Fiverr). Estimates suggest 36% of U.S. workers participate in gig work in some form. For organizations, contingent workers provide flexibility, specialized skills, and cost savings (no benefits, no long-term commitments). HR challenges include worker classification (employee vs. independent contractor — legal violations carry heavy penalties), engagement of non-permanent workers, knowledge retention when contractors leave, creating a cohesive culture across employment types, and ensuring fair treatment. A blended workforce strategy that intentionally mixes permanent employees with contingent talent requires new HR policies and management approaches."
        },
        {
          id: "human-resource-management-401-l06-c2",
          title: "Human Resource Information Systems (HRIS)",
          content:
            "An HRIS is an integrated software platform that manages core HR functions — employee records, payroll, benefits enrollment, time and attendance, compliance, and reporting. Modern HRIS platforms (Workday, SAP SuccessFactors, Oracle HCM, BambooHR) are cloud-based and offer modules for talent acquisition, performance management, learning, compensation, and workforce analytics. They serve as the 'single source of truth' for people data. Selection criteria include scalability, user experience, integration capabilities, reporting power, mobile access, and vendor support. Implementation is a major change management effort — success depends on clean data migration, thorough training, and executive sponsorship."
        },
        {
          id: "human-resource-management-401-l06-c3",
          title: "AI in Recruiting: Promise and Peril",
          content:
            "Artificial intelligence is transforming recruitment through resume screening algorithms (parsing thousands of applications in seconds), chatbots (answering candidate questions and scheduling interviews), video interview analysis (assessing communication patterns), and predictive matching (identifying candidates most likely to succeed). AI can reduce time-to-hire by 75% and improve candidate experience through faster responses. However, significant risks exist: Amazon famously scrapped an AI recruiting tool that penalized female candidates because it was trained on historically male-dominated hiring data. Responsible AI recruiting requires diverse training data, regular bias audits, human oversight at decision points, transparency about AI use, and compliance with emerging AI employment regulations."
        }
      ],
      flashcards: [
        { id: "human-resource-management-401-l06-f1", front: "Gig economy HR challenges", back: "Worker classification (employee vs. contractor), engagement of non-permanent workers, knowledge retention, cultural cohesion across employment types, and ensuring fair treatment" },
        { id: "human-resource-management-401-l06-f2", front: "HRIS (Human Resource Information System)", back: "Integrated cloud-based platform managing HR functions (records, payroll, benefits, talent, analytics) — serves as single source of truth for people data; major vendors include Workday, SAP, Oracle" },
        { id: "human-resource-management-401-l06-f3", front: "Amazon's AI recruiting lesson", back: "Amazon scrapped an AI recruiting tool that penalized women because it trained on biased historical data — highlights need for diverse data, bias audits, and human oversight in AI hiring" }
      ]
    },
    {
      id: "human-resource-management-401-l07",
      title: "Final Assessment: Strategic HR & Future of Work",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "human-resource-management-401-l07-q1",
          text: "Which Ulrich HR competency describes an HR professional who is both trusted by stakeholders and willing to challenge the status quo?",
          options: [
            { id: "a", text: "Strategic positioner" },
            { id: "b", text: "Capability builder" },
            { id: "c", text: "Credible activist" },
            { id: "d", text: "Technology proponent" }
          ],
          correctOptionId: "c",
          explanation: "A credible activist combines credibility (earned through expertise, track record, and trustworthy relationships) with activism (willingness to take positions, voice concerns, and push for change) — it is the foundational competency in Ulrich's model."
        },
        {
          id: "human-resource-management-401-l07-q2",
          text: "Why did Amazon discontinue its AI recruiting tool?",
          options: [
            { id: "a", text: "It was too expensive to maintain" },
            { id: "b", text: "It was trained on biased historical data and penalized female candidates" },
            { id: "c", text: "Candidates refused to interact with AI systems" },
            { id: "d", text: "It violated GDPR regulations in Europe" }
          ],
          correctOptionId: "b",
          explanation: "Amazon's AI recruiting tool was trained on 10 years of predominantly male hiring data, causing it to systematically downgrade resumes containing words like 'women's' — demonstrating how AI can perpetuate and amplify existing human biases."
        },
        {
          id: "human-resource-management-401-l07-q3",
          text: "Which of the following is the MOST significant legal risk when using gig workers?",
          options: [
            { id: "a", text: "Gig workers demanding health insurance" },
            { id: "b", text: "Misclassifying employees as independent contractors" },
            { id: "c", text: "Gig workers joining labor unions" },
            { id: "d", text: "Paying gig workers above market rate" }
          ],
          correctOptionId: "b",
          explanation: "Misclassification of employees as independent contractors carries severe legal penalties including back taxes, benefits owed, fines, and class-action lawsuits. Courts apply tests (ABC test, economic reality test) examining the degree of control and independence."
        },
        {
          id: "human-resource-management-401-l07-q4",
          text: "According to McKinsey's research, companies in the top quartile for ethnic and gender diversity on executive teams are how much more likely to have above-average profitability?",
          options: [
            { id: "a", text: "10% more likely" },
            { id: "b", text: "21% more likely" },
            { id: "c", text: "36% more likely" },
            { id: "d", text: "50% more likely" }
          ],
          correctOptionId: "c",
          explanation: "McKinsey's 'Diversity Wins' research found that companies in the top quartile for ethnic and gender diversity on executive teams were 36% more likely to achieve above-average profitability compared to those in the bottom quartile."
        }
      ]
    }
  ],
};
