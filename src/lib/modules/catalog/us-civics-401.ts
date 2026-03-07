import type { LearningModule } from "@/lib/modules/types";

export const us_civics_401_Module: LearningModule = {
  "id": "us-civics-401",
  "title": "U.S. Civics Mastery and Leadership",
  "description": "An advanced curriculum in U.S. Civics, emphasizing constitutional principles, institutional processes, public policy analysis, and effective, real-world civic engagement through structured practice and assessment.",
  "subject": "Social Studies",
  "tags": [
    "civics",
    "government",
    "history",
    "public policy",
    "leadership"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Develop sophisticated analytical frameworks for constitutional principles and institutional design.",
    "Apply structured methods to plan, execute, and review public policy analysis.",
    "Interpret historical and statistical evidence using metrics, constraints, and context.",
    "Diagnose common governance failure modes and design effective remedies.",
    "Communicate complex policy trade-offs clearly to diverse audiences.",
    "Build repeatable systems for sustained improvement in civic analysis and participation."
  ],
  "lessons": [
    {
      "id": "us-civics-401-l01",
      "title": "Foundational Concepts in U.S. Civics",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "us-civics-401-l01-a1",
          "type": "image",
          "title": "Conceptual Framework",
          "content": "A tripartite flowchart illustrating the flow from Constitutional Principles (e.g., Federalism) to Institutional Design (e.g., Bicameralism), culminating in Policy Outcomes, with feedback loops representing judicial review and elections.",
          "imageUrl": "https://example.com/images/conceptual_framework.png"
        },
        {
          "id": "us-civics-401-l01-a2",
          "type": "practice",
          "title": "Guided Analysis",
          "content": "Use the provided structured prompt to analyze a primary source document, such as a Federalist Paper, identifying its core thesis and underlying assumptions."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-401-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Vocabulary",
          "content": "In advanced U.S. Civics, precision is paramount. This begins with clearly defining the scope of our inquiry and establishing a shared vocabulary. Terms like 'federalism,' 'judicial review,' and 'due process' have specific legal and historical parameters that shape political debates. By defining our unit of analysis—whether it is a specific statute, a landmark court case, or an executive agency—and utilizing precise language, we ensure our discussions are focused, coherent, and yield defensible conclusions."
        },
        {
          "id": "us-civics-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning and Constraints",
          "content": "To comprehend why our government functions as it does, we must elevate our analysis from simple description to causal reasoning. This requires mapping the cause-and-effect relationships driving historical events and policy decisions. Crucially, we must also identify the constraints—constitutional boundaries, legal precedents, economic realities, and political dynamics—that limit the spectrum of possible actions. This methodology empowers us to target the root causes of civic challenges rather than merely addressing their symptoms."
        },
        {
          "id": "us-civics-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "This lesson introduces the core practices of evidence-based analysis and institutional accountability. We will explore rigorous standards for credible evidence, ranging from primary source documents to empirical statistical data, and underscore the importance of a transparent public record. A systematic approach includes: (1) Defining the inquiry, (2) Gathering and evaluating relevant evidence, (3) Analyzing how the evidence substantiates or refutes a claim, and (4) Formulating a conclusion that explicitly acknowledges any methodological limitations."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-401-l01-f1",
          "front": "Unit of Analysis",
          "back": "The primary subject of a civic inquiry, such as a specific law, court case, or government agency, chosen to establish boundaries for research and decision-making."
        },
        {
          "id": "us-civics-401-l01-f2",
          "front": "Constraint Analysis",
          "back": "A systematic method for identifying the constitutional, legal, economic, and political boundaries that restrict or shape possible government actions."
        },
        {
          "id": "us-civics-401-l01-f3",
          "front": "Standard of Evidence",
          "back": "The rigorous criteria used to determine if data and sources are credible, objective, and sufficient to support a definitive conclusion regarding a civic issue."
        }
      ]
    },
    {
      "id": "us-civics-401-l02",
      "title": "Mapping Civic Processes: From Bill to Law",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "us-civics-401-l02-a1",
          "type": "image",
          "title": "Process Flowchart",
          "content": "A detailed swimlane diagram mapping the lifecycle of a bill, featuring distinct lanes for the House, Senate, Executive Branch, and Judiciary, highlighting critical decision gates, veto points, and committee markups.",
          "imageUrl": "https://example.com/images/process_flowchart.png"
        }
      ],
      "chunks": [
        {
          "id": "us-civics-401-l02-c1",
          "kind": "practice",
          "title": "Constructing a Process Map",
          "content": "In this interactive lab, you will construct a comprehensive process map illustrating the legislative journey of a bill. This involves identifying pivotal stages such as sponsorship, committee hearings, markups, floor debates, reconciliation, and executive action. By mapping these checkpoints and decision gates, you will visualize the complex, multi-stage friction intentionally built into American governance to prevent hasty legislation."
        },
        {
          "id": "us-civics-401-l02-c2",
          "kind": "recap",
          "title": "The Public Record",
          "content": "We will recap the critical role of documenting the civic process. The public record—encompassing legislative history, committee reports, floor speeches, and judicial opinions—provides an indispensable log of the rationale behind each decision. This transparency is vital for post-enactment analysis, enabling citizens, journalists, and scholars to decipher legislative intent and evaluate eventual policy outcomes against original promises."
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-401-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Governance Functions",
          "description": "Match each stage of the legislative process to its primary institutional function.",
          "pairs": [
            {
              "left": "Committee Hearing",
              "right": "Gathers expert testimony and conducts detailed scrutiny"
            },
            {
              "left": "Floor Debate",
              "right": "Allows for broad public deliberation and amendment proposals"
            },
            {
              "left": "Presidential Veto",
              "right": "Provides an executive check on legislative overreach"
            },
            {
              "left": "Judicial Review",
              "right": "Ensures the enacted law complies with constitutional boundaries"
            }
          ]
        },
        {
          "id": "us-civics-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Identifying Political Risks",
          "description": "Sort potential legislative obstacles into strategic, procedural, or public-opinion categories.",
          "buckets": [
            "Strategic",
            "Procedural",
            "Public Opinion"
          ],
          "items": [
            {
              "text": "Opposing party's unified agenda",
              "bucket": "Strategic"
            },
            {
              "text": "A Senate filibuster threat",
              "bucket": "Procedural"
            },
            {
              "text": "Negative grassroots polling data",
              "bucket": "Public Opinion"
            },
            {
              "text": "Lack of a key committee chair endorsement",
              "bucket": "Strategic"
            }
          ]
        }
      ]
    },
    {
      "id": "us-civics-401-l03",
      "title": "Checkpoint 1: Concepts and Processes",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write out your analytical reasoning before finalizing your answers."
        }
      ],
      "questions": [
        {
          "id": "us-civics-401-l03-q1",
          "text": "When analyzing the application of the First Amendment to a modern issue, what is the most effective first analytical step?",
          "skillId": "us-civics-401-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Assume its meaning is universally agreed upon based on plain text."
            },
            {
              "id": "b",
              "text": "Define the 'unit of analysis' (e.g., 'freedom of speech' in public schools) and review relevant Supreme Court precedents."
            },
            {
              "id": "c",
              "text": "Focus exclusively on contemporary public opinion polls regarding the issue."
            },
            {
              "id": "d",
              "text": "Read secondary opinion editorials without consulting the primary constitutional text."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining the specific scope of the inquiry and utilizing primary evidence (legal precedents) are foundational analytical skills for rigorous constitutional law evaluation."
        },
        {
          "id": "us-civics-401-l03-q2",
          "text": "What is the primary institutional purpose of the committee review stage in the federal legislative process?",
          "skillId": "us-civics-401-skill-process-design",
          "options": [
            {
              "id": "a",
              "text": "To expedite the passage of all bills introduced by the majority party."
            },
            {
              "id": "b",
              "text": "To act as a rigorous quality gate, allowing for expert testimony, detailed amendment, and the filtering of flawed legislation."
            },
            {
              "id": "c",
              "text": "To ensure the Executive Branch formally agrees with the bill before a floor vote."
            },
            {
              "id": "d",
              "text": "To conduct the final, binding vote on the legislation's passage."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Committees serve as critical quality control checkpoints, providing the detailed scrutiny and subject-matter expertise that is impractical on the full chamber floor."
        },
        {
          "id": "us-civics-401-l03-q3",
          "text": "In evaluating the efficacy of a new environmental regulation, what constitutes the strongest 'standard of evidence'?",
          "skillId": "us-civics-401-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Anecdotal reports from a single affected municipality."
            },
            {
              "id": "b",
              "text": "Comparing post-policy empirical data against a pre-policy baseline and an unaffected control group."
            },
            {
              "id": "c",
              "text": "The stated aspirational goals of the legislators who drafted the regulation."
            },
            {
              "id": "d",
              "text": "A consensus of op-eds praising the policy's intent."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible conclusions require measurable, empirical data compared against a baseline to demonstrate a definitive causal link between the policy intervention and the outcome."
        },
        {
          "id": "us-civics-401-l03-q4",
          "text": "A mature strategy for civic participation (e.g., a grassroots advocacy campaign) should primarily prioritize:",
          "skillId": "us-civics-401-skill-strategic-thinking",
          "options": [
            {
              "id": "a",
              "text": "Maximizing raw outreach numbers, regardless of message accuracy or community impact."
            },
            {
              "id": "b",
              "text": "Balancing outreach efforts with data privacy, message integrity, and the cultivation of long-term community trust."
            },
            {
              "id": "c",
              "text": "Relying solely on leadership intuition without establishing metrics to track results."
            },
            {
              "id": "d",
              "text": "Ignoring feedback from volunteers and constituents to maintain strict message discipline."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective and ethical civic strategies require a holistic balance of factors, including quality of engagement, risk mitigation (such as maintaining trust), and long-term sustainability, rather than optimizing for a single vanity metric."
        }
      ]
    },
    {
      "id": "us-civics-401-l04",
      "title": "Analytical Methods for Civic Evaluation",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "us-civics-401-l04-a1",
          "type": "image",
          "title": "Decision Tree",
          "content": "A diagnostic decision tree guiding users through civic inquiry: starting with 'What is the core issue?' branching into Legal Analysis (precedent), Historical Analysis (primary sources), and Quantitative Policy Evaluation (statistical metrics).",
          "imageUrl": "https://example.com/images/decision_tree.png"
        }
      ],
      "chunks": [
        {
          "id": "us-civics-401-l04-c1",
          "kind": "concept",
          "title": "Selecting Analytical Methods",
          "content": "Complex civic questions demand tailored analytical tools. In this lesson, we explore how to select the most rigorous method for your inquiry. Questions of constitutionality require legal analysis of precedent. Questions of historical causality demand qualitative analysis of primary sources. Questions of policy efficacy necessitate quantitative analysis of empirical data. Explicitly justifying your choice of methodology is a critical step in producing a credible, unassailable analysis."
        },
        {
          "id": "us-civics-401-l04-c2",
          "kind": "example",
          "title": "Measuring Policy Impact",
          "content": "To objectively evaluate a policy, we must establish a framework of metrics. This includes 'leading indicators' that predict emerging trends (e.g., enrollment rates in a new job training program) and 'lagging indicators' that measure final, definitive outcomes (e.g., long-term employment rates five years post-program). By monitoring both, policymakers can identify early if an initiative is veering off track and implement course corrections, rather than waiting years for a final autopsy."
        },
        {
          "id": "us-civics-401-l04-c3",
          "kind": "recap",
          "title": "Analyzing Governance Failures",
          "content": "We will classify governance failures to better diagnose and rectify them. We distinguish between 'policy design flaws' (the underlying theory of change was incorrect), 'implementation failures' (the execution or administration was incompetent), and 'unintended consequences' (the policy succeeded in its primary goal but triggered unforeseen negative externalities). This structured taxonomy allows for precise, targeted solutions instead of generic political posturing."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-401-l04-f1",
          "front": "Leading Indicator",
          "back": "An early, predictive metric that suggests future policy outcomes, allowing for proactive adjustments. Example: The volume of small business loan applications immediately following an economic stimulus."
        },
        {
          "id": "us-civics-401-l04-f2",
          "front": "Governance Failure Analysis",
          "back": "A structured diagnostic method for classifying policy shortcomings (e.g., design flaws vs. implementation errors) to identify root causes and engineer effective remedies."
        },
        {
          "id": "us-civics-401-l04-f3",
          "front": "Cost of Inaction",
          "back": "The quantifiable social, economic, or political consequences of failing to address a public problem, often used as a baseline to justify the expense or disruption of a proposed policy intervention."
        }
      ]
    },
    {
      "id": "us-civics-401-l05",
      "title": "Case Study: Reforming a Civic Process",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "us-civics-401-l05-a1",
          "type": "image",
          "title": "Stakeholder Map",
          "content": "A concentric stakeholder mapping matrix categorizing actors by 'Influence' (high/low) and 'Interest' (high/low), using campaign finance reform as the central case study.",
          "imageUrl": "https://example.com/images/stakeholder_map.png"
        }
      ],
      "chunks": [
        {
          "id": "us-civics-401-l05-c1",
          "kind": "practice",
          "title": "Deconstructing a Case Study",
          "content": "In this interactive case study on campaign finance reform, you will deconstruct a complex issue into its core systemic components. You will identify the primary objectives (e.g., mitigating corruption, ensuring free speech), the legal context (e.g., Supreme Court precedents like Citizens United), key stakeholders (e.g., PACs, political parties, grassroots organizations), and evaluate various reform proposals by explicitly mapping their respective trade-offs."
        },
        {
          "id": "us-civics-401-l05-c2",
          "kind": "recap",
          "title": "Drafting a Policy Proposal",
          "content": "Synthesizing your case study analysis, you will draft a structured policy proposal. This transcends a mere opinion piece; it must incorporate clear success criteria (how improvement will be empirically measured), an accountability framework (who bears responsibility for implementation), and a timeline for iterative review. This exercise hones the critical leadership skill of translating abstract analysis into an actionable, defensible plan."
        },
        {
          "id": "us-civics-401-l05-c3",
          "kind": "concept",
          "title": "Communicating Trade-offs to Diverse Audiences",
          "content": "A technically perfect policy will fail if it cannot be communicated effectively. You must learn to tailor your communication of policy trade-offs to diverse audiences. This means translating dense statistical metrics into compelling, accessible narratives for the general public, while simultaneously maintaining technical rigor and legal precision when briefing policymakers or legal counsel. Mastery of civics requires mastery of civic translation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-401-l05-act1",
          "type": "scenario_practice",
          "title": "Policy Reform Simulation",
          "description": "You are a senior legislative aide tasked with improving voter turnout. Choose among three policy interventions, weighing budget constraints against political feasibility.",
          "instructions": [
            "Define your empirical success criteria before selecting an intervention (e.g., 'increase turnout by 5% in the next midterm election').",
            "Document one short-term trade-off (e.g., high upfront implementation cost) and one long-term systemic benefit for your chosen path.",
            "Specify a leading indicator that will confirm the policy is on track prior to the next election cycle."
          ]
        },
        {
          "id": "us-civics-401-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Reforms to Systemic Effects",
          "description": "Connect each proposed structural reform to its most likely systemic outcome or trade-off.",
          "pairs": [
            {
              "left": "Public financing of elections",
              "right": "Reduces reliance on private mega-donors but requires significant taxpayer funding"
            },
            {
              "left": "Automatic voter registration",
              "right": "Increases baseline participation rates but requires robust cybersecurity and data integration"
            },
            {
              "left": "Independent redistricting commissions",
              "right": "Reduces partisan gerrymandering but shifts power to unelected appointees"
            },
            {
              "left": "Strengthened ethics oversight",
              "right": "Increases public trust but may slow down administrative efficiency"
            }
          ]
        }
      ]
    },
    {
      "id": "us-civics-401-l06",
      "title": "Checkpoint 2: Applying Systems Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write out your analytical reasoning before finalizing your answers."
        }
      ],
      "questions": [
        {
          "id": "us-civics-401-l06-q1",
          "text": "A municipality notices that a newly constructed public transit line is severely underutilized. Which 'leading indicator' would best help administrators diagnose the problem early?",
          "skillId": "us-civics-401-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "The final annual ridership and revenue report published at the end of the fiscal year."
            },
            {
              "id": "b",
              "text": "Real-time daily data on station entry/exit times combined with immediate user feedback surveys."
            },
            {
              "id": "c",
              "text": "The total sunk cost of constructing the transit line."
            },
            {
              "id": "d",
              "text": "National macroeconomic trends regarding public transit usage."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Real-time data and immediate user feedback serve as leading indicators, allowing for rapid diagnosis and agile adjustments, unlike lagging indicators such as annual reports."
        },
        {
          "id": "us-civics-401-l06-q2",
          "text": "A major federal IT project (e.g., a new healthcare enrollment portal) crashes immediately upon launch. A rigorous 'governance failure analysis' would most likely classify this as:",
          "skillId": "us-civics-401-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "A fundamental failure of constitutional principles."
            },
            {
              "id": "b",
              "text": "An implementation failure, likely stemming from poor project management, inadequate load testing, or misaligned vendor incentives."
            },
            {
              "id": "c",
              "text": "An unavoidable unintended consequence of complex legislation."
            },
            {
              "id": "d",
              "text": "A policy design flaw, indicating the core idea of providing healthcare was wrong."
            }
          ],
          "correctOptionId": "b",
          "explanation": "This represents a classic implementation failure, where the execution and administration of the policy—not necessarily the underlying policy objective itself—were critically flawed."
        },
        {
          "id": "us-civics-401-l06-q3",
          "text": "When drafting a proposal to reform the Electoral College, what is the most critical component of a comprehensive 'Case Decomposition'?",
          "skillId": "us-civics-401-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Dismissing the historical context of its creation as irrelevant to modern politics."
            },
            {
              "id": "b",
              "text": "Focusing exclusively on the moral superiority of one's personal opinion."
            },
            {
              "id": "c",
              "text": "Systematically analyzing the objectives (e.g., democratic proportionality), constraints (e.g., the Article V amendment process), and competing stakeholder interests (e.g., small vs. large states)."
            },
            {
              "id": "d",
              "text": "Assuming the proposed reform will be universally accepted and have no unintended consequences."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A thorough case decomposition requires a dispassionate, systematic analysis of the goals, the legal/procedural constraints, and the competing interests of all affected parties."
        },
        {
          "id": "us-civics-401-l06-q4",
          "text": "In a policy simulation, you must choose between a low-cost, low-impact intervention and a high-cost, high-impact intervention. What represents the most mature analytical approach?",
          "skillId": "us-civics-401-skill-strategic-thinking",
          "options": [
            {
              "id": "a",
              "text": "Always default to the cheapest option to minimize taxpayer burden."
            },
            {
              "id": "b",
              "text": "Always select the high-impact option, regardless of budget constraints or political capital."
            },
            {
              "id": "c",
              "text": "Rigorously analyze the trade-offs, factoring in the 'cost of inaction' and calculating the long-term return on investment for each option."
            },
            {
              "id": "d",
              "text": "Make a decision based primarily on which option generates the most favorable immediate press coverage."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Advanced strategic thinking involves weighing complex trade-offs and making decisions based on a comprehensive cost-benefit analysis, which explicitly includes the long-term value and the negative consequences of maintaining the status quo."
        }
      ]
    }
  ]
};
