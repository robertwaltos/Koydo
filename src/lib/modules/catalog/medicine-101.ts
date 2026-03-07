import type { LearningModule } from "@/lib/modules/types";

export const medicine_101_Module: LearningModule = {
  "id": "medicine-101",
  "title": "Medicine Foundations",
  "description": "Explore the scientific basis of modern medicine — from cell biology and organ systems to pathology, pharmacology, and evidence-based clinical reasoning.",
  "subject": "Medicine",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "pre-med",
    "health-sciences"
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
    "Describe the levels of structural organization in the human body",
    "Explain homeostasis and the role of feedback loops in maintaining health",
    "Identify the major organ systems and their primary functions",
    "Distinguish between types of pathogens and mechanisms of disease",
    "Outline the principles of pharmacokinetics and pharmacodynamics",
    "Interpret basic vital signs and laboratory values",
    "Apply evidence-based reasoning to clinical scenarios"
  ],
  "lessons": [
    {
      "id": "medicine-101-l01",
      "title": "Levels of Organization and Homeostasis",
      "type": "video",
      "duration": 12,
      "objectives": [
        "List the levels of structural organization from atoms to organ systems",
        "Define homeostasis and give examples of physiological set points",
        "Compare negative and positive feedback loops"
      ],
      "chunks": [
        {
          "id": "medicine-101-l01-c1",
          "title": "From Atoms to Organisms",
          "content": "The human body is organized in a hierarchy, from the smallest chemical building blocks to the entire organism. At the base are atoms, which combine to form molecules. These molecules assemble into organelles, the functional components of cells. Cells are the fundamental units of life. Groups of similar cells form tissues, which perform specific functions. The four primary tissue types are epithelial (covering), connective (support), muscle (movement), and nervous (communication). Tissues combine to form organs, such as the heart and lungs, each with a distinct role. Finally, organs work together in organ systems (e.g., the circulatory system) to maintain the health of the organism. Understanding this structural organization is key to diagnosing and treating disease, as problems can arise at any level."
        },
        {
          "id": "medicine-101-l01-c2",
          "title": "Homeostasis: Maintaining Balance",
          "content": "Homeostasis is the body's ability to maintain a stable internal environment, despite changes in external conditions. Think of it as a dynamic state of equilibrium. The body maintains physiological variables, like body temperature (~37°C or 98.6°F), blood pH (~7.4), and blood glucose (~90 mg/dL), within a narrow range or 'set point.' This process involves three components: a sensor (or receptor) that detects a change, a control center that processes the information, and an effector that carries out the response to restore balance. This constant monitoring and adjustment is essential for survival and overall health."
        },
        {
          "id": "medicine-101-l01-c3",
          "title": "Negative and Positive Feedback",
          "content": "The body uses two primary feedback mechanisms to maintain homeostasis. The most common is the negative feedback loop, which opposes the initial change to return a variable to its set point. For example, if your body temperature rises, negative feedback triggers sweating to cool you down. Conversely, a positive feedback loop amplifies the initial change, pushing a process to completion. This is much rarer and always has a defined endpoint. Key examples include the release of oxytocin during childbirth to intensify contractions until the baby is born, and the cascade of clotting factors that rapidly seal a wound to stop bleeding. Understanding the difference is crucial, as runaway positive feedback can be dangerous, while failures in negative feedback are a common cause of disease."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-101-l01-f1",
          "front": "Homeostasis",
          "back": "The body's ability to maintain stable internal conditions (temperature, pH, glucose) despite external changes."
        },
        {
          "id": "medicine-101-l01-f2",
          "front": "Negative Feedback Loop",
          "back": "A regulatory mechanism that opposes change to return a variable to its set point. The most common type in physiology."
        },
        {
          "id": "medicine-101-l01-f3",
          "front": "Four Primary Tissue Types",
          "back": "Epithelial (covering), connective (support), muscle (movement), and nervous (communication)."
        },
        {
          "id": "medicine-101-l01-f4",
          "front": "Positive Feedback Loop",
          "back": "A mechanism that amplifies change until a process completes, e.g., childbirth contractions or blood clotting."
        }
      ],
      "learningAids": [
        {
          "id": "medicine-101-l01-a1",
          "type": "image",
          "title": "Levels of Organization",
          "content": "A hierarchical diagram showing the levels of organization from atom to molecule, organelle, cell, tissue, organ, organ system, and organism."
        },
        {
          "id": "medicine-101-l01-a2",
          "type": "image",
          "title": "Feedback Loop Diagram",
          "content": "A visual comparison of a negative feedback loop (thermostat analogy) and a positive feedback loop (domino effect analogy)."
        }
      ]
    },
    {
      "id": "medicine-101-l02",
      "title": "Major Organ Systems",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Name the 11 major organ systems and their primary roles",
        "Explain how organ systems work together to maintain homeostasis",
        "Identify representative organs for each system"
      ],
      "chunks": [
        {
          "id": "medicine-101-l02-c1",
          "title": "Transport and Exchange Systems",
          "content": "Several organ systems manage the transport of substances and exchange with the environment. The Cardiovascular System, comprising the heart, blood, and blood vessels, acts as the body's transport network, pumping oxygen and nutrients to tissues and removing waste products like carbon dioxide. The Respiratory System, including the lungs and airways, is responsible for gas exchange. It brings oxygen into the body and expels carbon dioxide through breathing. The Urinary System, featuring the kidneys, bladder, and ureters, filters waste products from the blood to produce urine, while also regulating blood volume, pressure, and electrolyte balance. These systems work in close coordination to supply cells and remove metabolic byproducts."
        },
        {
          "id": "medicine-101-l02-c2",
          "title": "Control and Coordination Systems",
          "content": "Two major systems coordinate the body's functions. The Nervous System, consisting of the brain, spinal cord, and nerves, provides rapid, short-term control by transmitting electrical signals. It processes sensory information and directs immediate responses. The Endocrine System, composed of glands that secrete hormones, regulates slower, long-term processes such as growth, metabolism, and reproduction. Hormones travel through the bloodstream to target cells, providing chemical communication throughout the body. Together, these systems ensure all parts of the body work in a coordinated fashion."
        },
        {
          "id": "medicine-101-l02-c3",
          "title": "Structure, Support, and Movement",
          "content": "The Musculoskeletal System provides the body's framework and enables movement. It consists of the skeleton (bones, cartilage, ligaments) which provides structure and protection, and the skeletal muscles which contract to produce movement. The Integumentary System, which is the skin, hair, and nails, forms a protective outer barrier against pathogens and dehydration. It also plays a key role in temperature regulation and synthesizes vitamin D upon exposure to sunlight."
        },
        {
          "id": "medicine-101-l02-c4",
          "title": "Nutrition, Defense, and Reproduction",
          "content": "The Digestive System breaks down food into absorbable nutrients, providing the body with fuel and raw materials. It includes the gastrointestinal tract and accessory organs like the liver and pancreas. The Immune and Lymphatic Systems work together to defend the body. The lymphatic system returns fluid to the blood and is a key site for immune cells, while the immune system itself deploys cells like lymphocytes to identify and destroy pathogens. Finally, the Reproductive System, consisting of male (testes, penis) and female (ovaries, uterus) organs, is responsible for producing offspring and ensuring the continuation of the species."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-101-l02-a1",
          "title": "Match Organ to System",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Heart",
              "right": "Cardiovascular System"
            },
            {
              "left": "Alveoli",
              "right": "Respiratory System"
            },
            {
              "left": "Pancreas",
              "right": "Digestive & Endocrine Systems"
            },
            {
              "left": "Kidneys",
              "right": "Urinary System"
            },
            {
              "left": "Lymph Node",
              "right": "Lymphatic / Immune System"
            },
            {
              "left": "Femur",
              "right": "Musculoskeletal System"
            },
            {
              "left": "Brain",
              "right": "Nervous System"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "medicine-101-l02-f1",
          "front": "Cardiovascular System",
          "back": "Heart, blood vessels, and blood. Pumps oxygenated blood to tissues and returns deoxygenated blood to the lungs."
        },
        {
          "id": "medicine-101-l02-f2",
          "front": "Nervous vs. Endocrine Systems",
          "back": "Nervous: fast, electrical signals for short-term control. Endocrine: slow, hormonal signals for long-term regulation."
        },
        {
          "id": "medicine-101-l02-f3",
          "front": "Integumentary System",
          "back": "Skin, hair, and nails. Provides a protective barrier, regulates temperature, and synthesizes vitamin D."
        },
        {
          "id": "medicine-101-l02-f4",
          "front": "Immune & Lymphatic Systems",
          "back": "A network of cells, tissues, and organs that work together to defend the body against pathogens."
        }
      ],
      "learningAids": [
        {
          "id": "medicine-101-l02-a1",
          "type": "interactive_diagram",
          "title": "Human Body Explorer",
          "content": "An interactive human body diagram. Users can click on organs to reveal their name, function, and associated organ system."
        }
      ]
    },
    {
      "id": "medicine-101-l03",
      "title": "Anatomy & Physiology Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of body organization, homeostasis, and organ systems"
      ],
      "questions": [
        {
          "id": "medicine-101-l03-q1",
          "text": "Which feedback mechanism is responsible for maintaining body temperature at ~37 °C?",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Positive feedback"
            },
            {
              "id": "b",
              "text": "Negative feedback"
            },
            {
              "id": "c",
              "text": "Feed-forward control"
            },
            {
              "id": "d",
              "text": "No feedback is involved"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Thermoregulation uses negative feedback: when body temperature rises, sweating and vasodilation cool the body back toward the set point."
        },
        {
          "id": "medicine-101-l03-q2",
          "text": "Gas exchange in the lungs occurs primarily in the:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Bronchi"
            },
            {
              "id": "b",
              "text": "Trachea"
            },
            {
              "id": "c",
              "text": "Alveoli"
            },
            {
              "id": "d",
              "text": "Pleural cavity"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Alveoli are tiny air sacs with thin walls and a rich blood supply, optimized for O₂/CO₂ exchange by diffusion."
        },
        {
          "id": "medicine-101-l03-q3",
          "text": "Which organ system is primarily responsible for filtering waste from the blood and regulating electrolyte balance?",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Digestive system"
            },
            {
              "id": "b",
              "text": "Cardiovascular system"
            },
            {
              "id": "c",
              "text": "Urinary system"
            },
            {
              "id": "d",
              "text": "Integumentary system"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The kidneys in the urinary system filter about 180 liters of blood daily, removing waste products as urine and maintaining water and electrolyte balance."
        },
        {
          "id": "medicine-101-l03-q4",
          "text": "Positive feedback differs from negative feedback because it:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Opposes change and stabilizes variables"
            },
            {
              "id": "b",
              "text": "Amplifies change until a process completes"
            },
            {
              "id": "c",
              "text": "Only operates in the nervous system"
            },
            {
              "id": "d",
              "text": "Maintains a constant set point"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Positive feedback drives processes to completion (e.g., childbirth contractions) by amplifying the stimulus, rather than stabilizing a variable around a set point."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "medicine-101-l04",
      "title": "Pathology: How Disease Develops",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Distinguish between infectious and non-infectious disease",
        "Classify the major types of pathogens",
        "Explain the general sequence from exposure to clinical symptoms"
      ],
      "chunks": [
        {
          "id": "medicine-101-l04-c1",
          "title": "Infectious vs. Non-Infectious Disease",
          "content": "Diseases can be broadly categorized as infectious or non-infectious. Infectious diseases are caused by pathogens—such as bacteria and viruses—and can be transmitted between individuals. Examples include influenza and COVID-19. Non-infectious diseases are not caused by pathogens and cannot be spread from person to person. Their causes, or etiology, are diverse and include genetic factors (e.g., sickle cell disease), lifestyle choices (e.g., type 2 diabetes), environmental exposures (e.g., asbestosis), and autoimmune disorders where the immune system attacks the body's own tissues (e.g., rheumatoid arthritis). Many chronic conditions, like heart disease, are multifactorial, involving a combination of genetic, lifestyle, and environmental influences."
        },
        {
          "id": "medicine-101-l04-c2",
          "title": "Types of Pathogens",
          "content": "There are four main types of pathogens. Bacteria are single-celled prokaryotic organisms that can cause disease by invading tissues or releasing toxins. They are treated with antibiotics. Viruses are non-living infectious particles that must hijack a host cell to replicate. They are treated with antiviral drugs and prevented with vaccines. Fungi are eukaryotic organisms that can cause infections ranging from superficial skin conditions (e.g., athlete's foot) to life-threatening systemic diseases. Parasites are organisms that live on or in a host, causing harm. They include single-celled protozoa (e.g., malaria) and multi-celled worms (e.g., tapeworms). Identifying the specific pathogen is critical for selecting the correct treatment."
        },
        {
          "id": "medicine-101-l04-c3",
          "title": "The Disease Process",
          "content": "The progression of an infectious disease typically follows several distinct stages. It begins with exposure to a pathogen, followed by the incubation period, where the pathogen multiplies without causing symptoms. The prodromal phase is next, marked by early, non-specific symptoms like fatigue. This leads to the acute phase, where symptoms are most severe as the immune system mounts a full response. Finally, during the convalescence phase, symptoms subside as the body recovers and repairs damage. Complications can arise at any stage. For example, an excessive immune response can lead to sepsis, a life-threatening condition where the body's response to infection damages its own tissues."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-101-l04-f1",
          "front": "Etiology",
          "back": "The cause or origin of a disease, which may be infectious, genetic, environmental, or multifactorial."
        },
        {
          "id": "medicine-101-l04-f2",
          "front": "Incubation Period",
          "back": "The time between pathogen exposure and the appearance of first symptoms. Varies from hours to weeks."
        },
        {
          "id": "medicine-101-l04-f3",
          "front": "Bacteria vs. Viruses",
          "back": "Bacteria: living prokaryotic cells, treated with antibiotics. Viruses: non-living particles that hijack host cells, treated with antivirals/vaccines."
        },
        {
          "id": "medicine-101-l04-f4",
          "front": "Sepsis",
          "back": "A life-threatening systemic inflammatory response to infection, where the immune system damages the body's own tissues."
        }
      ],
      "learningAids": [
        {
          "id": "medicine-101-l04-a1",
          "type": "image",
          "title": "The Disease Timeline",
          "content": "A timeline graphic illustrating the stages of an infectious disease: Exposure, Incubation, Prodromal, Acute, and Convalescence."
        }
      ]
    },
    {
      "id": "medicine-101-l05",
      "title": "The Immune Response in Action",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Differentiate innate and adaptive immunity",
        "Trace the steps of the inflammatory response",
        "Explain how vaccines produce immunological memory"
      ],
      "chunks": [
        {
          "id": "medicine-101-l05-c1",
          "title": "Innate Immunity: The First Line of Defense",
          "content": "The immune system has two main branches. The first is innate immunity, the body's immediate, non-specific defense system. It includes physical barriers like the skin and mucous membranes, chemical barriers like stomach acid, and specialized cells. Phagocytes, such as neutrophils and macrophages, engulf and destroy pathogens. Natural killer (NK) cells eliminate virus-infected cells. A key part of the innate response is inflammation, characterized by redness, heat, swelling, and pain. This response is triggered by tissue damage and helps recruit immune cells to the site of injury or infection to clear debris and fight invaders."
        },
        {
          "id": "medicine-101-l05-c2",
          "title": "Adaptive Immunity: A Targeted and Memorable Response",
          "content": "The second branch is adaptive immunity, a highly specific system that develops over days and creates immunological memory. Its key players are lymphocytes: T cells and B cells. Cell-mediated immunity involves T cells. Helper T cells coordinate the immune response, while cytotoxic T cells directly kill infected cells. Humoral immunity involves B cells, which produce antibodies. These Y-shaped proteins bind to specific antigens on pathogens, neutralizing them or marking them for destruction. After an infection is cleared, some T and B cells become long-lived memory cells, enabling a faster and stronger response upon future exposure to the same pathogen."
        },
        {
          "id": "medicine-101-l05-c3",
          "title": "Vaccines and Immunological Memory",
          "content": "Vaccines leverage the principle of immunological memory to protect against future infections without causing disease. They introduce a safe form of a pathogen—or a piece of it, like a protein—to the body. This harmless antigen triggers an adaptive immune response, leading to the production of antibodies and memory cells. If the vaccinated person is later exposed to the actual pathogen, their memory cells mount a rapid and powerful secondary immune response, often preventing illness entirely. When a large portion of a community is vaccinated, it creates herd immunity, which reduces the spread of disease and protects vulnerable individuals who cannot be vaccinated."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-101-l05-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Innate Immunity",
            "Adaptive Immunity"
          ],
          "items": [
            {
              "text": "Skin acting as a physical barrier",
              "bucket": "Innate Immunity"
            },
            {
              "text": "B cells producing specific antibodies",
              "bucket": "Adaptive Immunity"
            },
            {
              "text": "Macrophages engulfing bacteria",
              "bucket": "Innate Immunity"
            },
            {
              "text": "Memory T cells from a previous infection",
              "bucket": "Adaptive Immunity"
            },
            {
              "text": "Inflammatory response (redness, swelling)",
              "bucket": "Innate Immunity"
            },
            {
              "text": "Cytotoxic T cells killing virus-infected cells",
              "bucket": "Adaptive Immunity"
            },
            {
              "text": "Stomach acid destroying ingested pathogens",
              "bucket": "Innate Immunity"
            },
            {
              "text": "Antibodies binding to a specific antigen",
              "bucket": "Adaptive Immunity"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "medicine-101-l05-f1",
          "front": "Phagocytosis",
          "back": "The process by which immune cells (like neutrophils and macrophages) engulf and digest pathogens."
        },
        {
          "id": "medicine-101-l05-f2",
          "front": "Antibodies",
          "back": "Y-shaped proteins produced by B cells that bind to specific antigens, neutralizing pathogens or marking them for destruction."
        },
        {
          "id": "medicine-101-l05-f3",
          "front": "Helper T Cells",
          "back": "Coordinate the adaptive immune response by activating B cells, cytotoxic T cells, and other immune cells."
        },
        {
          "id": "medicine-101-l05-f4",
          "front": "Herd Immunity",
          "back": "Indirect protection from infectious disease that occurs when a large percentage of a population has become immune."
        }
      ],
      "learningAids": [
        {
          "id": "medicine-101-l05-a1",
          "type": "animated_infographic",
          "title": "Immune Response Comparison",
          "content": "An animation comparing the innate (fast, general) and adaptive (slow, specific, memory-based) immune responses to a pathogen."
        }
      ]
    },
    {
      "id": "medicine-101-l06",
      "title": "Pathology & Immunity Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of pathogens, disease processes, and immune defenses"
      ],
      "questions": [
        {
          "id": "medicine-101-l06-q1",
          "text": "Which type of pathogen is treated with antibiotics?",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Viruses"
            },
            {
              "id": "b",
              "text": "Bacteria"
            },
            {
              "id": "c",
              "text": "Prions"
            },
            {
              "id": "d",
              "text": "All pathogens"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Antibiotics target specific structures in bacteria, such as their cell walls or ribosomes. They are ineffective against viruses, which lack these structures and require antiviral medications."
        },
        {
          "id": "medicine-101-l06-q2",
          "text": "Memory B and T cells are responsible for:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The inflammatory response"
            },
            {
              "id": "b",
              "text": "Immediate non-specific defense"
            },
            {
              "id": "c",
              "text": "A faster, stronger immune response upon re-exposure to a pathogen"
            },
            {
              "id": "d",
              "text": "Producing histamine during inflammation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Memory cells persist after an initial infection, enabling the adaptive immune system to respond rapidly and powerfully on subsequent encounters with the same pathogen."
        },
        {
          "id": "medicine-101-l06-q3",
          "text": "The inflammatory response, a key feature of innate immunity, is characterized by all of the following EXCEPT:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Redness and heat from increased blood flow"
            },
            {
              "id": "b",
              "text": "Production of specific antibodies"
            },
            {
              "id": "c",
              "text": "Swelling from fluid accumulation"
            },
            {
              "id": "d",
              "text": "Pain from pressure on nerve endings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Antibody production is a hallmark of the adaptive immune response, not the innate inflammatory response. Inflammation is a non-specific process."
        },
        {
          "id": "medicine-101-l06-q4",
          "text": "During the incubation period of an infection:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Symptoms are at their peak"
            },
            {
              "id": "b",
              "text": "The patient has fully recovered"
            },
            {
              "id": "c",
              "text": "The pathogen is multiplying but symptoms have not yet appeared"
            },
            {
              "id": "d",
              "text": "The immune system has already eliminated the pathogen"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The incubation period is the silent phase between exposure and the onset of symptoms, during which the pathogen replicates within the host."
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
      "id": "medicine-101-l07",
      "title": "Pharmacology: How Drugs Work",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define pharmacokinetics (ADME) and pharmacodynamics",
        "Explain the concepts of drug half-life and therapeutic window",
        "Distinguish agonists from antagonists"
      ],
      "chunks": [
        {
          "id": "medicine-101-l07-c1",
          "title": "Pharmacokinetics: What the Body Does to a Drug",
          "content": "Pharmacokinetics describes what the body does to a drug. It involves four main processes, abbreviated as ADME. Absorption is the process of a drug entering the bloodstream. Distribution is the movement of the drug from the blood to the body's tissues. Metabolism is the chemical conversion of the drug, primarily by enzymes in the liver (like the cytochrome P450 family), into metabolites that are easier to excrete. Elimination is the removal of the drug and its metabolites from the body, mainly by the kidneys via urine. These four processes determine the concentration of a drug at its site of action and the duration of its effect."
        },
        {
          "id": "medicine-101-l07-c2",
          "title": "Half-Life and Therapeutic Window",
          "content": "Two key pharmacokinetic concepts are half-life and the therapeutic window. A drug's half-life is the time it takes for its concentration in the plasma to decrease by 50%. Drugs with a short half-life (e.g., ibuprofen, ~2 hours) require more frequent dosing than those with a long half-life (e.g., amiodarone, ~40 days). The therapeutic window is the range of drug concentrations that produces a therapeutic effect without causing toxicity. Drugs with a narrow therapeutic window (e.g., warfarin, lithium) require careful monitoring, as small changes in dose can lead to either ineffectiveness or dangerous side effects."
        },
        {
          "id": "medicine-101-l07-c3",
          "title": "Pharmacodynamics: What a Drug Does to the Body",
          "content": "Pharmacodynamics describes what a drug does to the body—its mechanism of action and effects. Most drugs work by binding to specific protein targets, usually receptors on or inside cells. Drugs that bind to a receptor and activate it to produce a biological response are called agonists (e.g., morphine activating opioid receptors for pain relief). Drugs that bind to a receptor but do not activate it, thereby blocking it from being activated by a natural agonist, are called antagonists (e.g., naloxone blocking opioid receptors to reverse an overdose). Understanding pharmacodynamics helps predict a drug's therapeutic effects and potential side effects."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-101-l07-f1",
          "front": "ADME",
          "back": "Absorption, Distribution, Metabolism, Elimination — the four phases of pharmacokinetics describing a drug's journey through the body."
        },
        {
          "id": "medicine-101-l07-f2",
          "front": "Drug Half-Life",
          "back": "The time required for the plasma concentration of a drug to decrease by 50%."
        },
        {
          "id": "medicine-101-l07-f3",
          "front": "Therapeutic Window",
          "back": "The concentration range between the minimum effective dose and the toxic dose. Narrow for drugs like warfarin, lithium, and digoxin."
        },
        {
          "id": "medicine-101-l07-f4",
          "front": "Agonist vs. Antagonist",
          "back": "Agonist: binds and activates a receptor. Antagonist: binds and blocks a receptor without activating it."
        }
      ],
      "learningAids": [
        {
          "id": "medicine-101-l07-a1",
          "type": "image",
          "title": "Drug Concentration Curve",
          "content": "A graph illustrating a drug's concentration in the blood over time, showing its half-life and the therapeutic window between the minimum effective concentration and the toxic concentration."
        }
      ]
    },
    {
      "id": "medicine-101-l08",
      "title": "Vital Signs and Clinical Reasoning",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Interpret the five vital signs and recognize abnormal values",
        "Apply evidence-based medicine principles to clinical decisions",
        "Distinguish between sensitivity and specificity of diagnostic tests"
      ],
      "chunks": [
        {
          "id": "medicine-101-l08-c1",
          "title": "The Five Vital Signs",
          "content": "Vital signs are fundamental clinical measurements that indicate a person's basic body functions. There are five main vital signs: 1) Heart Rate: Normal resting rate is 60-100 beats per minute (bpm). A rate >100 bpm is tachycardia. 2) Blood Pressure: Normal is around 120/80 mmHg. Persistently >140/90 mmHg is hypertension. 3) Respiratory Rate: Normal is 12-20 breaths per minute. 4) Body Temperature: Normal is approximately 37°C (98.6°F). An elevated temperature is a fever. 5) Oxygen Saturation (SpO₂): Normal is 95-100%. Below 90% indicates hypoxemia. Monitoring these signs provides a rapid, low-cost assessment of a patient's physiological state."
        },
        {
          "id": "medicine-101-l08-c2",
          "title": "Evidence-Based Medicine",
          "content": "Evidence-based medicine (EBM) is the integration of the best available research evidence with clinical expertise and patient values to make healthcare decisions. This approach relies on a hierarchy of evidence to assess the quality of research. At the top are systematic reviews and meta-analyses, which synthesize results from multiple high-quality studies. Below them are randomized controlled trials (RCTs), followed by observational studies like cohort and case-control studies. At the bottom are case reports and expert opinion. EBM represents a shift from relying solely on authority to using a systematic, data-driven approach to patient care."
        },
        {
          "id": "medicine-101-l08-c3",
          "title": "Diagnostic Test Accuracy: Sensitivity and Specificity",
          "content": "Evaluating diagnostic tests involves two key metrics. Sensitivity measures a test's ability to correctly identify those with the disease (the true positive rate). A highly sensitive test is good for screening because it rarely misses a case (Mnemonic: SnNOut - a Sensitive test with a Negative result rules Out the disease). Specificity measures a test's ability to correctly identify those without the disease (the true negative rate). A highly specific test is good for confirming a diagnosis because it rarely gives a false positive (Mnemonic: SpPIn - a Specific test with a Positive result rules In the disease). There is often a trade-off between sensitivity and specificity, which clinicians must balance when choosing a test."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-101-l08-a1",
          "title": "Sort Vital Signs",
          "type": "sorting_buckets",
          "buckets": [
            "Normal Finding",
            "Abnormal Finding"
          ],
          "items": [
            {
              "text": "Heart rate 72 bpm at rest",
              "bucket": "Normal Finding"
            },
            {
              "text": "Blood pressure 180/110 mmHg",
              "bucket": "Abnormal Finding"
            },
            {
              "text": "Respiratory rate 16 breaths/min",
              "bucket": "Normal Finding"
            },
            {
              "text": "SpO₂ of 85% on room air",
              "bucket": "Abnormal Finding"
            },
            {
              "text": "Temperature 37.1 °C",
              "bucket": "Normal Finding"
            },
            {
              "text": "Heart rate 130 bpm at rest",
              "bucket": "Abnormal Finding"
            },
            {
              "text": "Blood pressure 118/76 mmHg",
              "bucket": "Normal Finding"
            },
            {
              "text": "Temperature 39.5 °C",
              "bucket": "Abnormal Finding"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "medicine-101-l08-f1",
          "front": "Tachycardia",
          "back": "Heart rate above 100 bpm at rest. May indicate fever, dehydration, pain, anxiety, or cardiac arrhythmia."
        },
        {
          "id": "medicine-101-l08-f2",
          "front": "Hypertension",
          "back": "Persistently elevated blood pressure (>140/90 mmHg). A major risk factor for stroke, heart disease, and kidney damage."
        },
        {
          "id": "medicine-101-l08-f3",
          "front": "Sensitivity of a Test",
          "back": "The proportion of true positives detected. A sensitive test is good for ruling OUT disease (SnNOut: Sensitive, Negative, rule Out)."
        },
        {
          "id": "medicine-101-l08-f4",
          "front": "Specificity of a Test",
          "back": "The proportion of true negatives detected. A specific test is good for ruling IN disease (SpPIn: Specific, Positive, rule In)."
        }
      ],
      "learningAids": [
        {
          "id": "medicine-101-l08-a1",
          "type": "image",
          "title": "Diagnostic Accuracy Table",
          "content": "A 2x2 contingency table explaining True Positives, False Positives, True Negatives, and False Negatives, used to visualize the concepts of sensitivity and specificity."
        }
      ]
    },
    {
      "id": "medicine-101-l09",
      "title": "Pharmacology & Clinical Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of pharmacology principles and clinical reasoning"
      ],
      "questions": [
        {
          "id": "medicine-101-l09-q1",
          "text": "A drug with a narrow therapeutic window requires:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "No monitoring, as it is very safe"
            },
            {
              "id": "b",
              "text": "Careful dose monitoring because the effective and toxic doses are close together"
            },
            {
              "id": "c",
              "text": "Only topical administration"
            },
            {
              "id": "d",
              "text": "A very long half-life"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A narrow therapeutic window means there is a small difference between effective and toxic concentrations, requiring close monitoring to prevent adverse effects."
        },
        {
          "id": "medicine-101-l09-q2",
          "text": "In the ADME model of pharmacokinetics, metabolism primarily occurs in the:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Kidneys"
            },
            {
              "id": "b",
              "text": "Lungs"
            },
            {
              "id": "c",
              "text": "Liver"
            },
            {
              "id": "d",
              "text": "Small intestine"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The liver is the primary site of drug metabolism, using enzymes (especially the cytochrome P450 family) to convert drugs into metabolites."
        },
        {
          "id": "medicine-101-l09-q3",
          "text": "A test with high sensitivity is best used for:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Confirming a diagnosis"
            },
            {
              "id": "b",
              "text": "Screening, as it rarely misses true cases"
            },
            {
              "id": "c",
              "text": "Replacing clinical judgment entirely"
            },
            {
              "id": "d",
              "text": "Measuring drug half-life"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High sensitivity means a high true positive rate, making the test ideal for screening where missing a case (a false negative) would be dangerous."
        },
        {
          "id": "medicine-101-l09-q4",
          "text": "An antagonist drug works by:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Activating receptors to produce a stronger effect"
            },
            {
              "id": "b",
              "text": "Binding to and blocking receptors without activating them"
            },
            {
              "id": "c",
              "text": "Increasing the half-life of other drugs"
            },
            {
              "id": "d",
              "text": "Speeding up drug elimination"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Antagonists bind to receptors but do not activate them, thereby blocking the action of natural agonists or agonist drugs (e.g., naloxone blocks opioid receptors)."
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
      "id": "medicine-101-l10",
      "title": "Mastery Quiz: Medicine Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all medicine foundations concepts"
      ],
      "questions": [
        {
          "id": "medicine-101-l10-q1",
          "text": "A patient presents with an oxygen saturation (SpO₂) of 88% while breathing room air. This value is:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Within the normal range"
            },
            {
              "id": "b",
              "text": "Below normal and indicates potential hypoxemia"
            },
            {
              "id": "c",
              "text": "Only concerning in children"
            },
            {
              "id": "d",
              "text": "A measure of blood glucose"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Normal SpO₂ is 95–100%. A reading of 88% is below the 90% threshold and indicates hypoxemia (low oxygen in the blood), which may require supplemental oxygen."
        },
        {
          "id": "medicine-101-l10-q2",
          "text": "Vaccines produce long-term immunity by:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Killing all pathogens currently in the body"
            },
            {
              "id": "b",
              "text": "Providing ready-made antibiotics to prevent infection"
            },
            {
              "id": "c",
              "text": "Exposing the immune system to a harmless form of a pathogen to generate memory cells"
            },
            {
              "id": "d",
              "text": "Bypassing the immune system entirely"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Vaccines trigger the adaptive immune system to produce memory B and T cells without causing disease, enabling a rapid and effective response to future infections."
        },
        {
          "id": "medicine-101-l10-q3",
          "text": "Which level of evidence is considered the strongest foundation for a clinical decision in evidence-based medicine?",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Expert opinion"
            },
            {
              "id": "b",
              "text": "Individual case reports"
            },
            {
              "id": "c",
              "text": "Systematic reviews and meta-analyses of randomized controlled trials"
            },
            {
              "id": "d",
              "text": "A single observational study"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Systematic reviews and meta-analyses sit at the top of the evidence hierarchy because they synthesize data from multiple high-quality studies, providing the most reliable evidence."
        },
        {
          "id": "medicine-101-l10-q4",
          "text": "A state of disease often represents a disruption of homeostasis. This occurs when:",
          "skillId": "medicine-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Negative feedback loops function correctly to maintain set points"
            },
            {
              "id": "b",
              "text": "The body maintains blood pH at a stable 7.4"
            },
            {
              "id": "c",
              "text": "Feedback mechanisms fail, and physiological variables deviate significantly from their normal range"
            },
            {
              "id": "d",
              "text": "A positive feedback loop, like blood clotting, terminates normally"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Disease often results from the failure of homeostatic mechanisms. When the body can no longer maintain its stable internal conditions, cellular and organ function can become impaired."
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
