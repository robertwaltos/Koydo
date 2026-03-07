import type { LearningModule } from "@/lib/modules/types";

export const ap_prep_101_Module: LearningModule = {
  "id": "ap-prep-101",
  "title": "AP Exam Prep Toolkit",
  "description": "A comprehensive guide to Advanced Placement exam strategy. Learn how to tackle DBQs, experimental design FRQs, rhetorical analysis, and calculus free-response questions with proven frameworks and scoring-aligned techniques.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "curriculum",
    "interactive"
  ],
  "minAge": 15,
  "maxAge": 19,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Describe the structure and scoring of AP exams across major subjects",
    "Apply the DBQ rubric to construct a thesis-driven, evidence-based essay",
    "Design controlled experiments and write CER-format responses for AP Science",
    "Use the SOAPSTone method for AP English rhetorical analysis",
    "Employ AP Calculus FRQ strategies including full justification and partial-credit techniques",
    "Demonstrate AP-ready knowledge through timed practice assessments"
  ],
  "lessons": [
    {
      "id": "ap-prep-101-l01",
      "title": "Understanding AP Exams",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain the general structure and scoring of AP exams",
        "Identify the key question formats across major AP subjects",
        "Describe the AP registration and score-reporting process"
      ],
      "lessonImagePrompt": "Imagen 4 prompt: A cinematic, high-contrast illustration of a focused high school student sitting at a modern desk, looking at a glowing holographic display showing a '5' on an AP scoring scale, surrounded by floating books and digital notes.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, dynamic 3D motion graphics sequence showing a blank test paper transforming into a college acceptance letter, with glowing numbers 1 through 5 lighting up sequentially, ending on a bright, golden 5.",
      "chunks": [
        {
          "id": "ap-prep-101-l01-c1",
          "title": "AP Exam Structure and Scoring",
          "content": "AP exams are your ticket to earning college credit before you even graduate high school. They're broken down into two main arenas: the Multiple-Choice Questions (MCQ) and the Free-Response Questions (FRQ). The MCQ section usually packs 40 to 60 questions that test your rapid recall and concept application. The FRQ section is where you show your work—writing essays, solving complex math problems, or designing experiments.\n\nScoring works on a 1 to 5 scale. A 5 means you're 'extremely well qualified,' while a 1 means 'no recommendation.' Most colleges will grant you credit or let you skip intro-level courses if you score a 3 or higher. However, highly selective universities often look for 4s and 5s. The MCQs are graded by machines for speed, but your FRQs are read by actual human beings—trained AP educators—every June. Your raw scores from both sections are combined and curved to fit the 1-5 scale, ensuring fairness across different years. Knowing how the game is scored is your first step to winning it."
        },
        {
          "id": "ap-prep-101-l01-c2",
          "title": "Subject Overview — What Each AP Expects",
          "content": "Every AP subject has its own unique boss battle. In AP U.S. History (APUSH) or AP World, you'll face the Document-Based Question (DBQ). This isn't just an essay; it's a puzzle where you analyze 7 primary sources and weave them into a rock-solid historical argument.\n\nIn AP Science courses like Biology or Chemistry, the FRQs will test your ability to interpret raw data and design controlled experiments. You'll need to think like a scientist, not just memorize facts.\n\nTaking AP Calculus? The golden rule is: Show. Your. Work. Even if you calculate the right answer in your head, a naked number gets zero points. You have to prove how you got there.\n\nFinally, AP English Language is all about rhetorical analysis. You'll dissect how authors use tone, structure, and word choice to manipulate their audience. By knowing exactly what your specific exam demands, you can stop studying blindly and start training strategically."
        },
        {
          "id": "ap-prep-101-l01-c3",
          "title": "Registration and Score Reporting",
          "content": "AP exams happen every May during an intense two-week window. To get a seat, you usually have to register through your school's AP coordinator in the fall. Don't sleep on this deadline! Each exam costs around $98, but if that's a barrier, talk to your counselor—there are fee reductions available for students who qualify.\n\nFast forward to July: scores are released online. It's a nerve-wracking but exciting moment. When you register, you get the option to send your score report to one college for free. Use it! If you miss that window, you'll have to pay to send them later.\n\nWhat if you bomb an exam? Don't panic. You have the power to cancel or withhold specific scores from colleges. You just have to submit the request before the scores are officially sent out. You are in control of your academic narrative. Now, let's dive into specific strategies to make sure you don't have to cancel anything."
        }
      ],
      "flashcards": [
        {
          "id": "ap-prep-101-l01-f1",
          "front": "AP Scoring Scale",
          "back": "AP exams are scored 1-5. A 5 means 'extremely well qualified,' a 3 means 'qualified.' Most colleges accept a 3 or higher for credit or placement."
        },
        {
          "id": "ap-prep-101-l01-f2",
          "front": "Document-Based Question (DBQ)",
          "back": "An essay prompt on AP History exams that provides a set of primary-source documents. Students must analyze the documents and use them as evidence, along with outside knowledge, to support a thesis."
        },
        {
          "id": "ap-prep-101-l01-f3",
          "front": "Free-Response Question (FRQ)",
          "back": "An open-ended exam question requiring a written answer, mathematical solution, or experimental analysis — as opposed to selecting from given choices. FRQs are scored by trained human readers."
        }
      ],
      "learningAids": [
        {
          "id": "ap-prep-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the AP Exam structure, highlighting the split between MCQ and FRQ sections and the 1-5 scoring scale."
        }
      ],
      "imageUrl": "/generated-images/refinery/ap-prep-101-l01.png"
    },
    {
      "id": "ap-prep-101-l02",
      "title": "AP History — Document-Based Questions",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain the structure and rubric of a DBQ",
        "Apply the AAHC method to analyze primary sources",
        "Construct a historically defensible thesis that addresses all parts of the prompt"
      ],
      "lessonImagePrompt": "Imagen 4 prompt: A stylized, moody image of a vintage magnifying glass hovering over aged historical documents, with glowing neon annotations and connecting lines highlighting key text.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A top-down, stop-motion style animation of historical photos, letters, and maps sliding across a wooden desk, seamlessly folding and organizing themselves into a structured, glowing essay outline.",
      "chunks": [
        {
          "id": "ap-prep-101-l02-c1",
          "title": "What Is a DBQ?",
          "content": "The Document-Based Question (DBQ) is the heavyweight champion of the AP History exam. You're handed 7 primary-source documents and tasked with building a persuasive, evidence-backed essay. \n\nThe official AP rubric gives you 7 possible points:\n1. Thesis (1 point): A clear, historically defensible argument.\n2. Contextualization (1 point): Setting the scene by explaining the broader historical events surrounding the prompt.\n3. Evidence (up to 3 points): Using the provided documents AND your own outside knowledge to back up your claims.\n4. Analysis & Reasoning (up to 2 points): Explaining *how* the evidence supports your argument, including sourcing at least 3 documents.\n\nYou get 60 minutes total. Spend the first 15 minutes reading, grouping the documents, and outlining. Use the remaining 45 minutes to write. If you master the rubric, the DBQ becomes a predictable formula rather than a terrifying mystery."
        },
        {
          "id": "ap-prep-101-l02-c2",
          "title": "Reading Primary Sources with AAHC",
          "content": "When you look at a historical document, don't just read what it says—read *why* it says it. The AAHC framework is your cheat code for this.\n\n- **Author**: Who wrote this? What is their background, class, or bias? A factory owner and a factory worker will describe the Industrial Revolution very differently.\n- **Audience**: Who is this meant for? A private diary entry is usually more honest than a speech given to thousands of voters.\n- **Historical Context**: What was happening at the exact moment this was created? A letter written during the height of a war carries a different weight than one written in peacetime.\n- **Connection**: How does this tie back to your thesis? \n\nAP readers don't want you to just quote the document. They want you to explain how the Author's bias or the intended Audience impacts the reliability or meaning of the text. That's how you earn the complex analysis points."
        },
        {
          "id": "ap-prep-101-l02-c3",
          "title": "Constructing a Strong Thesis",
          "content": "Your thesis is the steering wheel of your essay. If it's weak, your whole essay goes off a cliff. A historically defensible thesis must make a specific, debatable claim that answers the entire prompt.\n\nAvoid weak, generic statements like, 'There were many causes of the Civil War.' That tells the reader nothing. Instead, level it up: 'While economic differences between the North and South contributed to sectional tension, the expansion of slavery into western territories was the primary catalyst for the Civil War because it threatened the political balance of power.'\n\nSee the difference? The second thesis sets up a clear argument (slavery expansion was the primary catalyst) while acknowledging a counter-argument (economic differences). Put your thesis in your introduction so the AP reader knows exactly where you're going. Don't make them hunt for your argument."
        }
      ],
      "flashcards": [
        {
          "id": "ap-prep-101-l02-f1",
          "front": "AAHC Method",
          "back": "A framework for analyzing primary sources: Author (who wrote it and their bias), Audience (who it was written for), Historical Context (what was happening at the time), Connection (how it ties to your argument)."
        },
        {
          "id": "ap-prep-101-l02-f2",
          "front": "Contextualization (DBQ rubric)",
          "back": "Worth 1 point on the DBQ rubric. Requires you to situate the topic within broader historical events, developments, or processes occurring before, during, or after the time frame of the question."
        },
        {
          "id": "ap-prep-101-l02-f3",
          "front": "LEQ vs. DBQ",
          "back": "Both are AP History essays. The DBQ provides 7 documents to analyze; the LEQ provides no documents — you must rely entirely on your own knowledge. The LEQ tests the same thesis and evidence skills but without source analysis."
        }
      ],
      "learningAids": [
        {
          "id": "ap-prep-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "A visual breakdown of the 7-point DBQ Rubric, showing how points are distributed across Thesis, Contextualization, Evidence, and Analysis."
        }
      ],
      "imageUrl": "/generated-images/refinery/ap-prep-101-l02.png"
    },
    {
      "id": "ap-prep-101-l03",
      "title": "AP Science — Experimental Design",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Identify independent, dependent, and controlled variables in an experiment",
        "Structure AP Biology FRQ responses using the CER format",
        "Describe key laboratory concepts tested on AP Science exams"
      ],
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern chemistry and biology lab setup with glowing neon liquids in beakers, a digital tablet displaying dynamic line graphs, and a futuristic microscope.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A high-quality time-lapse of a plant growing rapidly under different colored LED lights, with sleek floating UI labels pointing to the light source as 'Independent Variable' and the plant height as 'Dependent Variable'.",
      "chunks": [
        {
          "id": "ap-prep-101-l03-c1",
          "title": "Variables in Experimental Design",
          "content": "If you want to crush the AP Science FRQs, you need to master experimental design. Every experiment revolves around three types of variables: Independent, Dependent, and Controlled.\n\nThe **Independent Variable** is what YOU change. It's the cause. If you're testing how caffeine affects heart rate, the caffeine dose is the independent variable.\n\nThe **Dependent Variable** is what you measure. It's the effect. In the caffeine experiment, the heart rate (measured in beats per minute) is the dependent variable.\n\n**Controlled Variables** (or constants) are everything you keep exactly the same so they don't mess up your results. You'd use the same age group, same time of day, and same resting conditions. If you don't control these, you can't prove that the caffeine actually caused the heart rate spike. AP graders love to test whether you can spot a flawed experiment that forgot its controls."
        },
        {
          "id": "ap-prep-101-l03-c2",
          "title": "AP Biology FRQ Format and CER",
          "content": "The AP Biology exam throws 6 FRQs at you: 2 long ones and 4 short ones. To guarantee you hit the scoring points, use the CER framework: Claim, Evidence, Reasoning.\n\n- **Claim**: Answer the prompt directly in one sentence. No fluff.\n- **Evidence**: Pull specific data from the graph or table provided. Don't just say 'it went up.' Say 'the reaction rate increased from 2.5 to 8.0 mmol/sec.'\n- **Reasoning**: This is where you earn your money. Connect the evidence to the biological concept. \n\nExample:\n*Claim*: The enzyme denatures above 40°C.\n*Evidence*: The graph shows product formation dropping to zero at 45°C.\n*Reasoning*: High temperatures disrupt the hydrogen bonds in the enzyme, altering the shape of its active site so the substrate can no longer bind.\n\nStick to CER, and you'll stop rambling and start scoring."
        },
        {
          "id": "ap-prep-101-l03-c3",
          "title": "Key Laboratory Concepts",
          "content": "AP Science exams expect you to be familiar with standard lab techniques, even if you didn't get to do them all in class.\n\nKnow **Gel Electrophoresis**: It uses an electrical current to separate DNA fragments by size. Smaller fragments move faster and further through the gel. It's a staple for genetics questions.\n\nUnderstand **Hardy-Weinberg Equilibrium**: It's a baseline model showing a population that is NOT evolving. For it to work, you need 5 conditions: no mutations, random mating, no natural selection, massive population size, and no gene flow. If a question shows allele frequencies changing, one of these rules was broken.\n\nFinally, know how to measure **Photosynthesis and Cellular Respiration**. You can measure photosynthesis by tracking oxygen production (like counting bubbles from an aquatic plant) or carbon dioxide consumption. Knowing the mechanics of these labs will save you when an FRQ asks you to design an experiment on the fly."
        }
      ],
      "flashcards": [
        {
          "id": "ap-prep-101-l03-f1",
          "front": "Independent Variable",
          "back": "The variable the experimenter deliberately changes or manipulates. In a plant growth experiment testing fertilizer, the independent variable is the amount of fertilizer applied."
        },
        {
          "id": "ap-prep-101-l03-f2",
          "front": "CER Format",
          "back": "Claim-Evidence-Reasoning: a structured response framework for AP Science FRQs. State a claim, support it with specific evidence, then explain the biological reasoning that connects them."
        },
        {
          "id": "ap-prep-101-l03-f3",
          "front": "Hardy-Weinberg Equilibrium",
          "back": "A model describing a non-evolving population where allele frequencies remain constant. Requires five conditions: no mutation, random mating, no natural selection, infinite population size, and no gene flow."
        }
      ],
      "learningAids": [
        {
          "id": "ap-prep-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "A visual diagram showing the relationship between Independent, Dependent, and Controlled variables using a simple plant growth experiment."
        }
      ],
      "imageUrl": "/generated-images/refinery/ap-prep-101-l03.png"
    },
    {
      "id": "ap-prep-101-interactive-lab",
      "title": "AP Exam Prep Toolkit Practice Lab",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, futuristic digital interface showing a practice exam with a countdown timer, holographic checkmarks, and a sleek stylus resting on a tablet.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person perspective of a student interacting with a sleek digital quiz interface. As they select the correct answers, satisfying green checkmarks and subtle glowing particle effects appear.",
      "metadata": {
        "prompts": [
          "Summarize the key idea from AP Exam Prep Toolkit in one concise statement.",
          "Apply that idea to one realistic Exam Prep scenario and justify your choice.",
          "Reflect on one mistake to avoid in your next attempt."
        ]
      },
      "interactiveActivities": [
        {
          "id": "ap-prep-101-interactive-lab-act1",
          "type": "scenario_practice",
          "title": "Guided Scenario Drill",
          "description": "Work through a realistic prompt, explain your reasoning, and compare your answer with a model approach."
        },
        {
          "id": "ap-prep-101-interactive-lab-act2",
          "type": "frq_deconstruction",
          "title": "FRQ Deconstruction",
          "description": "Break down a sample AP Biology FRQ using the CER (Claim, Evidence, Reasoning) framework to identify where points are awarded."
        }
      ],
      "learningAids": [
        {
          "id": "ap-prep-101-interactive-lab-a1",
          "type": "practice",
          "title": "Practice Playbook",
          "content": "Use Explain -> Apply -> Reflect to complete this Exam Prep practice lab with clear reasoning."
        }
      ],
      "imageUrl": "/generated-images/refinery/ap-prep-101-interactive-lab.png"
    },
    {
      "id": "ap-prep-101-l04",
      "title": "AP Knowledge Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Recall key facts about DBQ structure and experimental design",
        "Demonstrate understanding of AP exam scoring and question formats"
      ],
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic glowing checkpoint gate in a cyber-environment, with a bright green checkmark hovering in the center.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a complex metallic lock clicking open, revealing a glowing core of light as a quiz is successfully completed.",
      "questions": [
        {
          "id": "ap-prep-101-l04-q1",
          "text": "In a Document-Based Question (DBQ), how many documents are typically provided?",
          "skillId": "ap-prep-101-skill-history",
          "options": [
            {
              "id": "a",
              "text": "7"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "10"
            },
            {
              "id": "d",
              "text": "5"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The AP History DBQ provides exactly 7 primary-source documents. Students must analyze these documents and incorporate them as evidence in a thesis-driven essay."
        },
        {
          "id": "ap-prep-101-l04-q2",
          "text": "Which variable does the scientist deliberately CHANGE in an experiment?",
          "skillId": "ap-prep-101-skill-science",
          "options": [
            {
              "id": "a",
              "text": "Independent variable"
            },
            {
              "id": "b",
              "text": "Dependent variable"
            },
            {
              "id": "c",
              "text": "Controlled variable"
            },
            {
              "id": "d",
              "text": "Confounding variable"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The independent variable is the factor the experimenter deliberately manipulates. The dependent variable is what gets measured in response, and controlled variables are kept constant."
        },
        {
          "id": "ap-prep-101-l04-q3",
          "text": "What AP score do most colleges require for credit or advanced placement?",
          "skillId": "ap-prep-101-skill-general",
          "options": [
            {
              "id": "a",
              "text": "3 or higher"
            },
            {
              "id": "b",
              "text": "5 only"
            },
            {
              "id": "c",
              "text": "2 or higher"
            },
            {
              "id": "d",
              "text": "4 or higher exclusively"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Most colleges accept a score of 3 or higher for credit or placement, though more selective institutions may require a 4 or 5. A score of 3 is officially classified as 'qualified' by the College Board."
        },
        {
          "id": "ap-prep-101-l04-q4",
          "text": "When analyzing a primary source using the AAHC method, what does the 'C' stand for?",
          "skillId": "ap-prep-101-skill-history",
          "options": [
            {
              "id": "a",
              "text": "Connection"
            },
            {
              "id": "b",
              "text": "Context"
            },
            {
              "id": "c",
              "text": "Conclusion"
            },
            {
              "id": "d",
              "text": "Causation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "In the AAHC method (Author, Audience, Historical Context, Connection), the 'C' stands for Connection. It reminds you to explicitly tie the document's analysis back to your thesis."
        },
        {
          "id": "ap-prep-101-l04-q5",
          "text": "In the CER framework for AP Science, what is the primary purpose of the 'Reasoning' section?",
          "skillId": "ap-prep-101-skill-science",
          "options": [
            {
              "id": "a",
              "text": "To connect the evidence to a biological or scientific concept"
            },
            {
              "id": "b",
              "text": "To state the initial hypothesis"
            },
            {
              "id": "c",
              "text": "To list the raw data from the experiment"
            },
            {
              "id": "d",
              "text": "To identify the independent variable"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Reasoning section is where you explain *why* the evidence supports your claim by applying scientific principles and concepts. It bridges the gap between raw data and your conclusion."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 1
        }
      },
      "imageUrl": "/generated-images/refinery/ap-prep-101-l04.png"
    },
    {
      "id": "ap-prep-101-l05",
      "title": "AP English & Calculus Strategies",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Apply the SOAPSTone method to analyze rhetorical texts",
        "Identify common AP Calculus FRQ types and demonstrate show-all-work strategy",
        "Use precise justification language in math and science responses"
      ],
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen artistic composition. The left side features elegant cursive writing on parchment with ink splatters, while the right side features glowing neon calculus equations floating in a dark space.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic zoom-in on a complex 3D calculus graph that smoothly morphs into a glowing web of interconnected words representing rhetorical analysis, blending math and language arts.",
      "chunks": [
        {
          "id": "ap-prep-101-l05-c1",
          "title": "AP English — Rhetorical Analysis with SOAPSTone",
          "content": "When you face the rhetorical analysis essay in AP English Language, you can't just summarize what the author said. You have to explain *how* and *why* they said it. Enter SOAPSTone:\n\n- **Speaker**: Who is the voice? What gives them authority?\n- **Occasion**: What event triggered this piece of writing?\n- **Audience**: Who is the target demographic, and how does the author manipulate them?\n- **Purpose**: What is the ultimate goal? To persuade? To incite anger? To comfort?\n- **Subject**: What is the core topic?\n- **Tone**: What is the author's attitude? (e.g., sarcastic, urgent, melancholic).\n\nBefore you write a single word of your essay, jot down the SOAPSTone elements. It forces you to look at the text like a mechanic looking at a car engine. You'll stop focusing on the paint job (the summary) and start explaining how the pistons work (the rhetorical strategies)."
        },
        {
          "id": "ap-prep-101-l05-c2",
          "title": "AP Calculus FRQ Strategies",
          "content": "AP Calculus FRQs are notorious, but they are highly predictable. You'll almost always see questions on Area/Volume, Related Rates, and Accumulation Functions. \n\nThe golden rule of Calc FRQs: The grader is not a mind reader. If you punch an integral into your calculator and just write down '42.5', you get zero points. You must write the mathematical setup (like the integral notation with bounds) on your paper first.\n\nAlso, never leave a question blank. AP readers award partial credit for correct methods, even if your final arithmetic is wrong. If you set up the derivative correctly but mess up the subtraction at the end, you still get the majority of the points. Write down your formulas, show your steps, and let the partial credit stack up."
        },
        {
          "id": "ap-prep-101-l05-c3",
          "title": "Justification Language That Earns Points",
          "content": "In AP math and science, casual language will cost you points. You have to sound like a professional.\n\nIn Calculus, don't say, 'The graph goes up so it's a maximum.' Say, 'Because the derivative f'(x) changes from positive to negative at x=3, f(x) has a relative maximum at x=3.' \n\nIn Biology, don't say, 'The animals changed to survive.' Say, 'Natural selection favored the darker phenotype, leading to a shift in allele frequencies over ten generations.'\n\nAP graders are looking for specific trigger words. They have a rubric, and they want to check off boxes. Give them the exact vocabulary they are looking for. Practice translating your casual thoughts into formal AP justification language, and watch your FRQ scores jump."
        }
      ],
      "flashcards": [
        {
          "id": "ap-prep-101-l05-f1",
          "front": "SOAPSTone",
          "back": "A rhetorical analysis framework: Speaker, Occasion, Audience, Purpose, Subject, Tone. Used on AP English exams to systematically analyze how an author constructs an argument."
        },
        {
          "id": "ap-prep-101-l05-f2",
          "front": "Related Rates (AP Calculus)",
          "back": "A type of FRQ where two or more quantities are changing over time and are related by an equation. You use implicit differentiation with respect to time to connect their rates of change."
        },
        {
          "id": "ap-prep-101-l05-f3",
          "front": "Partial Credit Strategy",
          "back": "On AP Calculus FRQs, showing a correct method earns points even if arithmetic is wrong. Always write the integral or derivative setup first, then compute. Never leave a question blank — partial credit adds up."
        }
      ],
      "learningAids": [
        {
          "id": "ap-prep-101-l05-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "A visual cheat sheet comparing 'Casual Language' vs 'AP Justification Language' for common Calculus and Biology scenarios."
        }
      ],
      "imageUrl": "/generated-images/refinery/ap-prep-101-l05.png"
    },
    {
      "id": "ap-prep-101-l06",
      "title": "AP Prep Final Assessment",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Apply rhetorical analysis concepts to identify devices",
        "Evaluate experimental design scenarios",
        "Synthesize AP scoring strategies across subjects"
      ],
      "lessonImagePrompt": "Imagen 4 prompt: A gleaming golden trophy shaped like a '5' sitting on a sleek pedestal, surrounded by subtle falling confetti and dramatic studio lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic reveal of a digital screen displaying a perfect score, with dynamic lighting sweeping across the screen and a burst of celebratory digital fireworks.",
      "questions": [
        {
          "id": "ap-prep-101-l06-q1",
          "text": "A speaker says 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.' Which rhetorical device is being used?",
          "skillId": "ap-prep-101-skill-english",
          "options": [
            {
              "id": "a",
              "text": "Anaphora — repetition of a phrase at the beginning of successive clauses"
            },
            {
              "id": "b",
              "text": "Chiasmus — reversal of grammatical structure in successive phrases"
            },
            {
              "id": "c",
              "text": "Hyperbole — deliberate exaggeration for emphasis"
            },
            {
              "id": "d",
              "text": "Litotes — understatement using double negatives"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses or sentences. Here, 'we shall fight' is repeated to build emphasis and momentum. This is a common rhetorical device tested on AP English exams."
        },
        {
          "id": "ap-prep-101-l06-q2",
          "text": "A student is testing whether light color affects plant growth. They use red, blue, and white light on three groups of identical plants. What is the dependent variable?",
          "skillId": "ap-prep-101-skill-science",
          "options": [
            {
              "id": "a",
              "text": "The color of light used"
            },
            {
              "id": "b",
              "text": "The amount of plant growth measured"
            },
            {
              "id": "c",
              "text": "The type of soil in each pot"
            },
            {
              "id": "d",
              "text": "The species of plant chosen"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The dependent variable is what the experimenter measures in response to changes in the independent variable. Here, the independent variable is light color (what is changed), and the dependent variable is plant growth (what is measured). Soil type and plant species should be controlled variables."
        },
        {
          "id": "ap-prep-101-l06-q3",
          "text": "On an AP Calculus FRQ, a student arrives at the correct numerical answer but shows no supporting work. What is the most likely outcome?",
          "skillId": "ap-prep-101-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "The student earns zero points because supporting work is required"
            },
            {
              "id": "b",
              "text": "The student earns full credit since the answer is correct"
            },
            {
              "id": "c",
              "text": "The student earns half credit automatically"
            },
            {
              "id": "d",
              "text": "The question is thrown out and not scored"
            }
          ],
          "correctOptionId": "a",
          "explanation": "AP Calculus FRQs require all supporting work to be shown. A correct answer with no work earns zero points. Conversely, showing a correct method with a minor arithmetic error can still earn most of the available points through partial credit. Always write out your setup, steps, and reasoning."
        },
        {
          "id": "ap-prep-101-l06-q4",
          "text": "Which element of the SOAPSTone framework focuses on the specific event or catalyst that prompted the author to write the piece?",
          "skillId": "ap-prep-101-skill-english",
          "options": [
            {
              "id": "a",
              "text": "Occasion"
            },
            {
              "id": "b",
              "text": "Subject"
            },
            {
              "id": "c",
              "text": "Audience"
            },
            {
              "id": "d",
              "text": "Purpose"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 'Occasion' refers to the time, place, and specific context or event that triggered the writing. Understanding the occasion helps explain why the author chose specific rhetorical strategies."
        },
        {
          "id": "ap-prep-101-l06-q5",
          "text": "Why is it critical to use precise vocabulary, like 'relative maximum' instead of 'the graph goes up', on AP FRQs?",
          "skillId": "ap-prep-101-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "AP graders use specific rubrics that require precise terminology to award points"
            },
            {
              "id": "b",
              "text": "It saves time during the exam"
            },
            {
              "id": "c",
              "text": "It proves you didn't use a calculator"
            },
            {
              "id": "d",
              "text": "It is required for the multiple-choice section"
            }
          ],
          "correctOptionId": "a",
          "explanation": "AP graders are trained to look for specific 'trigger words' that match their scoring rubrics. Casual language often fails to meet the rigorous standards required to earn justification points."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "understand": 2,
          "apply": 2,
          "analyze": 1
        }
      },
      "imageUrl": "/generated-images/refinery/ap-prep-101-l06.png"
    }
  ]
};
