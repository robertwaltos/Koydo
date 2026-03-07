import type { LearningModule } from "@/lib/modules/types";

export const civil_engineering_401_Module: LearningModule = {
  "id": "civil-engineering-401",
  "title": "Civil Engineering IV",
  "description": "Senior civil engineering leadership including lifecycle planning, safety governance, and mega-project delivery.",
  "subject": "Civil Engineering",
  "tags": [
    "curriculum",
    "interactive",
    "leadership",
    "mega-projects"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Master the lifecycle planning phases of multi-billion dollar mega-projects.",
    "Design and implement robust safety governance frameworks.",
    "Evaluate and select appropriate project delivery methods (e.g., Design-Build, PPP).",
    "Demonstrate executive-level decision-making in civil engineering scenarios."
  ],
  "lessons": [
    {
      "id": "civil-engineering-401-l01",
      "title": "Concepts: Mega-Project Lifecycle Planning",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A high-quality, photorealistic image of a senior civil engineer looking at a glowing holographic timeline of a massive bridge construction project, modern office setting, cinematic lighting, 8k resolution.",
      "conceptVideoPrompt": "A cinematic 3D animation showing the lifecycle of a mega-project, starting from a blueprint, transitioning to a bustling construction site, and finishing with a completed futuristic transit hub, dynamic camera movements, photorealistic.",
      "learningAids": [
        {
          "id": "civil-engineering-401-l01-a1",
          "type": "image",
          "title": "Lifecycle Phases",
          "content": "Visual summary of the 5 phases: Initiation, Planning, Execution, Monitoring, and Closure/Decommissioning."
        },
        {
          "id": "civil-engineering-401-l01-a2",
          "type": "animation",
          "title": "Critical Path Method",
          "content": "Animated walkthrough of identifying the critical path in a complex project schedule."
        }
      ]
    },
    {
      "id": "civil-engineering-401-l02",
      "title": "Practice: Lifecycle Planning",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A top-down view of a large architectural blueprint on a wooden desk with a tablet displaying Gantt charts, a hard hat, and a cup of coffee, photorealistic, highly detailed.",
      "conceptVideoPrompt": "A first-person perspective video of a project manager interacting with a digital dashboard, dragging and dropping project phases on a timeline, modern UI, smooth motion.",
      "metadata": {
        "prompts": [
          "Identify the critical path in the provided schedule.",
          "Allocate contingency resources for the procurement phase.",
          "Draft a mitigation strategy for a 3-month delay in environmental permitting."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-401-l02-a1",
          "type": "practice",
          "title": "Scenario Simulator",
          "content": "Review the project dashboard and adjust the timeline to absorb the unexpected delay without shifting the final delivery date."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l02.png"
    },
    {
      "id": "civil-engineering-401-l03",
      "title": "Checkpoint 1: Lifecycle Planning",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A close-up of a glowing digital checklist on a rugged tablet held by a construction manager at a site at dusk, cinematic lighting, highly detailed.",
      "conceptVideoPrompt": "A slow pan across a completed section of a massive dam, with digital checkmarks appearing in the air to signify completed milestones, photorealistic.",
      "questions": [
        {
          "id": "civil-engineering-401-l03-q1",
          "text": "What is the primary purpose of the feasibility study phase in a mega-project lifecycle?",
          "skillId": "civil-engineering-401-skill-lifecycle",
          "options": [
            {
              "id": "a",
              "text": "To assess technical, financial, and environmental viability before committing major funds."
            },
            {
              "id": "b",
              "text": "To finalize the architectural blueprints and structural calculations."
            },
            {
              "id": "c",
              "text": "To hire the primary subcontractors for the execution phase."
            },
            {
              "id": "d",
              "text": "To hand over the completed asset to the client."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Feasibility studies determine if a project is viable and worth the investment before significant resources are committed."
        },
        {
          "id": "civil-engineering-401-l03-q2",
          "text": "In the Critical Path Method (CPM), what does a delay on the critical path indicate?",
          "skillId": "civil-engineering-401-skill-lifecycle",
          "options": [
            {
              "id": "a",
              "text": "The delay can be absorbed by project float."
            },
            {
              "id": "b",
              "text": "The entire project completion date will be delayed unless mitigated."
            },
            {
              "id": "c",
              "text": "Only the specific delayed task will be affected."
            },
            {
              "id": "d",
              "text": "The project budget will automatically decrease."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The critical path has zero float; any delay on this path directly delays the final project completion date."
        },
        {
          "id": "civil-engineering-401-l03-q3",
          "text": "Which phase involves the formal handover of the asset to the client or operator?",
          "skillId": "civil-engineering-401-skill-lifecycle",
          "options": [
            {
              "id": "a",
              "text": "Execution"
            },
            {
              "id": "b",
              "text": "Procurement"
            },
            {
              "id": "c",
              "text": "Commissioning and Closeout"
            },
            {
              "id": "d",
              "text": "Initiation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Commissioning and Closeout is the final phase where systems are tested, documentation is finalized, and the asset is handed over."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-401-l03-a1",
          "type": "mnemonic",
          "title": "Lifecycle Memory Cue",
          "content": "Remember I-P-E-M-C: Initiate, Plan, Execute, Monitor, Close."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l03.png"
    },
    {
      "id": "civil-engineering-401-l04",
      "title": "Concepts: Safety Governance & Risk Management",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A photorealistic image of a diverse group of civil engineering executives in a modern boardroom reviewing a 3D model of a skyscraper with red hazard zones highlighted, professional lighting.",
      "conceptVideoPrompt": "An educational animation demonstrating a risk matrix, showing a crane operation with potential hazards highlighted in red, then mitigated with safety protocols turning green, clear and professional.",
      "learningAids": [
        {
          "id": "civil-engineering-401-l04-a1",
          "type": "image",
          "title": "Hierarchy of Controls",
          "content": "Visual pyramid showing Elimination, Substitution, Engineering Controls, Administrative Controls, and PPE."
        },
        {
          "id": "civil-engineering-401-l04-a2",
          "type": "animation",
          "title": "Risk Matrix Application",
          "content": "Step-by-step animation plotting likelihood vs. severity for construction risks."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l04.png"
    },
    {
      "id": "civil-engineering-401-l05",
      "title": "Practice: Safety Governance",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A high-resolution image of a safety inspector's clipboard with a detailed risk assessment form, resting on a steel beam high above a city skyline, photorealistic.",
      "conceptVideoPrompt": "A virtual reality simulation view of a construction site where the user identifies safety hazards, such as unharnessed workers or unsecured scaffolding, interactive UI overlays.",
      "metadata": {
        "prompts": [
          "Identify the primary safety hazard in the site simulation.",
          "Apply the Hierarchy of Controls to draft a mitigation strategy.",
          "Explain how you would enforce this protocol across a 5,000-person workforce."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-401-l05-a1",
          "type": "practice",
          "title": "Safety Audit Simulation",
          "content": "Review the incident report and update the site's safety governance policy to prevent recurrence."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l05.png"
    },
    {
      "id": "civil-engineering-401-l06",
      "title": "Checkpoint 2: Safety Governance",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A photorealistic image of a green safety cross symbol glowing on a digital screen in a high-tech construction command center, sharp focus.",
      "conceptVideoPrompt": "A time-lapse of a construction site emphasizing safety barriers being erected and workers wearing high-visibility gear, smooth cinematic flow.",
      "questions": [
        {
          "id": "civil-engineering-401-l06-q1",
          "text": "According to the hierarchy of hazard control, which is the most effective method?",
          "skillId": "civil-engineering-401-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "Personal Protective Equipment (PPE)"
            },
            {
              "id": "b",
              "text": "Administrative Controls"
            },
            {
              "id": "c",
              "text": "Engineering Controls"
            },
            {
              "id": "d",
              "text": "Elimination of the hazard"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Elimination physically removes the hazard entirely, making it the most effective control method."
        },
        {
          "id": "civil-engineering-401-l06-q2",
          "text": "What is the main objective of a Safety Governance framework in a mega-project?",
          "skillId": "civil-engineering-401-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "To establish accountability, policies, and a culture of safety at all organizational levels."
            },
            {
              "id": "b",
              "text": "To reduce the cost of insurance premiums."
            },
            {
              "id": "c",
              "text": "To ensure the project is completed ahead of schedule."
            },
            {
              "id": "d",
              "text": "To shift all liability to the subcontractors."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Safety governance ensures that safety is a core value driven by leadership, with clear accountability and policies throughout the project."
        },
        {
          "id": "civil-engineering-401-l06-q3",
          "text": "How does a 'Leading Indicator' differ from a 'Lagging Indicator' in safety management?",
          "skillId": "civil-engineering-401-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "Leading indicators track past incidents, while lagging indicators predict future costs."
            },
            {
              "id": "b",
              "text": "Leading indicators are proactive measures (e.g., safety audits), while lagging indicators track past incidents (e.g., injury rates)."
            },
            {
              "id": "c",
              "text": "Leading indicators are used by executives, while lagging indicators are used by site workers."
            },
            {
              "id": "d",
              "text": "There is no difference; both measure the same data."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators are proactive and preventative, whereas lagging indicators measure outcomes that have already occurred."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-401-l06-a1",
          "type": "mnemonic",
          "title": "Hierarchy Cue",
          "content": "Every Student Enjoys A Party: Elimination, Substitution, Engineering, Administrative, PPE."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l06.png"
    },
    {
      "id": "civil-engineering-401-l07",
      "title": "Concepts: Mega-Project Delivery Methods",
      "type": "video",
      "duration": 15,
      "lessonImagePrompt": "A split-screen photorealistic image showing a traditional design-bid-build process on one side and an integrated project delivery (IPD) collaborative meeting on the other, high quality.",
      "conceptVideoPrompt": "A dynamic infographic animation comparing Design-Build, Design-Bid-Build, and Public-Private Partnerships (PPP) using flowing lines and building blocks, professional corporate style.",
      "learningAids": [
        {
          "id": "civil-engineering-401-l07-a1",
          "type": "image",
          "title": "Delivery Methods Matrix",
          "content": "Comparison chart of DBB, DB, CM@R, and PPP based on risk, cost, and schedule."
        },
        {
          "id": "civil-engineering-401-l07-a2",
          "type": "animation",
          "title": "PPP Structure",
          "content": "Animated flow of capital, risk, and revenue in a Public-Private Partnership."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l07.png"
    },
    {
      "id": "civil-engineering-401-l08",
      "title": "Practice: Mega-Project Delivery",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A photorealistic image of a complex contract document with a golden pen resting on it, next to a scale model of a high-speed rail network, warm lighting.",
      "conceptVideoPrompt": "A simulated negotiation scenario showing two professionals shaking hands over a glowing digital contract representing a Public-Private Partnership, cinematic.",
      "metadata": {
        "prompts": [
          "Select the best delivery method for a time-sensitive toll road project.",
          "Justify your choice based on risk transfer and financing.",
          "Outline the stakeholder communication plan for the local community."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-401-l08-a1",
          "type": "practice",
          "title": "Contract Selection Matrix",
          "content": "Evaluate three project briefs and assign the optimal delivery method for each."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l08.png"
    },
    {
      "id": "civil-engineering-401-l09",
      "title": "Checkpoint 3: Mega-Project Delivery",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A photorealistic image of a completed mega-airport terminal at sunrise, symbolizing successful project delivery, stunning architectural details, 8k.",
      "conceptVideoPrompt": "A sweeping drone shot over a newly inaugurated suspension bridge, with digital text overlays showing 'On Time' and 'Under Budget', photorealistic.",
      "questions": [
        {
          "id": "civil-engineering-401-l09-q1",
          "text": "Which project delivery method provides a single point of responsibility for both design and construction?",
          "skillId": "civil-engineering-401-skill-delivery",
          "options": [
            {
              "id": "a",
              "text": "Design-Bid-Build (DBB)"
            },
            {
              "id": "b",
              "text": "Design-Build (DB)"
            },
            {
              "id": "c",
              "text": "Construction Management at Risk (CM@R)"
            },
            {
              "id": "d",
              "text": "Multiple Prime Contracting"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In Design-Build, the owner contracts with a single entity that performs both design and construction, streamlining communication and liability."
        },
        {
          "id": "civil-engineering-401-l09-q2",
          "text": "What is a key characteristic of a Public-Private Partnership (PPP)?",
          "skillId": "civil-engineering-401-skill-delivery",
          "options": [
            {
              "id": "a",
              "text": "The government assumes 100% of the financial risk."
            },
            {
              "id": "b",
              "text": "It is only used for projects under $10 million."
            },
            {
              "id": "c",
              "text": "Long-term collaboration where the private sector bears significant financial and operational risk."
            },
            {
              "id": "d",
              "text": "The private sector owns the asset permanently."
            }
          ],
          "correctOptionId": "c",
          "explanation": "PPPs involve private entities financing, building, and often operating public infrastructure in exchange for long-term revenue streams, sharing the risk."
        },
        {
          "id": "civil-engineering-401-l09-q3",
          "text": "Why is stakeholder mapping critical in the early stages of mega-project delivery?",
          "skillId": "civil-engineering-401-skill-delivery",
          "options": [
            {
              "id": "a",
              "text": "To identify and prioritize the influence and interest of all parties to tailor communication strategies."
            },
            {
              "id": "b",
              "text": "To determine which subcontractors to fire."
            },
            {
              "id": "c",
              "text": "To calculate the exact amount of concrete needed."
            },
            {
              "id": "d",
              "text": "To bypass environmental regulations."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Stakeholder mapping helps project leaders understand who is impacted by the project and how to manage their expectations and influence effectively."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-401-l09-a1",
          "type": "mnemonic",
          "title": "Delivery Cue",
          "content": "DB = One Contract. DBB = Two Contracts. PPP = Long-term Partnership."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l09.png"
    },
    {
      "id": "civil-engineering-401-l10",
      "title": "Final Assessment: Civil Engineering Leadership",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A majestic, photorealistic portrait of a senior civil engineer standing proudly in front of a massive, completed smart city skyline, golden hour lighting, inspiring.",
      "conceptVideoPrompt": "A fast-paced montage of various civil engineering mega-projects—tunnels, bridges, skyscrapers—culminating in a glowing badge of leadership, cinematic and triumphant.",
      "questions": [
        {
          "id": "civil-engineering-401-l10-q1",
          "text": "When managing a mega-project, how should a senior leader balance lifecycle costs against initial capital expenditure?",
          "skillId": "civil-engineering-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "By minimizing upfront costs regardless of future maintenance."
            },
            {
              "id": "b",
              "text": "By optimizing total cost of ownership, including maintenance and operations, rather than just minimizing upfront costs."
            },
            {
              "id": "c",
              "text": "By ignoring capital expenditure if the project is government-funded."
            },
            {
              "id": "d",
              "text": "By spending the entire budget in the initiation phase."
            }
          ],
          "correctOptionId": "b",
          "explanation": "True leadership requires looking at the Total Cost of Ownership (TCO). Spending slightly more upfront on better materials can save millions in long-term maintenance."
        },
        {
          "id": "civil-engineering-401-l10-q2",
          "text": "If a critical safety violation occurs on a site utilizing a Design-Build contract, who holds the primary governance responsibility to halt work?",
          "skillId": "civil-engineering-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "The local municipality only."
            },
            {
              "id": "b",
              "text": "The principal contractor/Design-Builder, though the owner retains ultimate oversight."
            },
            {
              "id": "c",
              "text": "The individual worker who committed the violation."
            },
            {
              "id": "d",
              "text": "The project's financial investors."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In Design-Build, the Design-Builder controls the site and holds primary responsibility for safety governance, though the owner must ensure the contractor is enforcing the rules."
        },
        {
          "id": "civil-engineering-401-l10-q3",
          "text": "Which strategy best ensures resilience against supply chain disruptions during a 10-year mega-project?",
          "skillId": "civil-engineering-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Relying on a single, low-cost international supplier for all materials."
            },
            {
              "id": "b",
              "text": "Ordering all materials on day one and storing them on-site for 10 years."
            },
            {
              "id": "c",
              "text": "Diversifying suppliers and incorporating flexible procurement clauses in the delivery contract."
            },
            {
              "id": "d",
              "text": "Ignoring supply chain risks until a shortage occurs."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Diversification and contractual flexibility allow the project to adapt to global market shifts, ensuring continuous progress despite disruptions."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-401-l10-a1",
          "type": "mnemonic",
          "title": "Leadership Triad",
          "content": "Balance Cost, Safety, and Delivery to achieve Mega-Project Success."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-401-l10.png"
    }
  ]
};
