import type { LearningModule } from "@/lib/modules/types";

export const philosophy_101_Module: LearningModule = {
  "id": "philosophy-101",
  "title": "Introduction to Philosophy",
  "description": "A comprehensive introduction to the major branches and thinkers of Western philosophy — from the ancient Greeks through modern existentialism. Covers metaphysics, epistemology, ethics, political philosophy, logic, and the philosophy of religion, drawing on primary texts by Aristotle, Machiavelli, and Hume. Students will develop skills in critical analysis, logical argumentation, and ethical reasoning applicable to every domain of life.",
  "subject": "Philosophy",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "philosophy",
    "critical-thinking",
    "enriched-from-epub"
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
    "Define philosophy and identify its major branches",
    "Explain the contributions of Socrates, Plato, and Aristotle to Western thought",
    "Construct and evaluate deductive and inductive arguments",
    "Compare virtue ethics, deontological ethics, and utilitarianism",
    "Analyse Machiavelli's political realism and the social-contract tradition",
    "Distinguish rationalism and empiricism as epistemological frameworks",
    "Assess classical arguments for and against the existence of God, including Hume's critiques"
  ],
  "lessons": [
    {
      "id": "philosophy-101-l01",
      "title": "What Is Philosophy?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define philosophy as the disciplined love of wisdom",
        "Identify the major branches: metaphysics, epistemology, ethics, logic, aesthetics, and political philosophy",
        "Explain why philosophical inquiry remains relevant to everyday life"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l01-c1",
          "title": "The Love of Wisdom",
          "content": "The word 'philosophy' comes from the Greek term 'philosophia,' which means 'love of wisdom.' This field of study is distinct from the sciences, which focus on specific areas of the natural world. Instead, philosophy dives into the big, essential questions that shape our understanding of life: What is real? What can we truly know? What is right or wrong? How should we live together? Unlike scientific questions answered through experiments, philosophical questions require deep thinking, conceptual analysis, and challenging our most basic beliefs.\n\nThis tradition of rational inquiry began in ancient Greece around the 6th century BCE. Early thinkers like Thales and Anaximander, known as the pre-Socratics, sought explanations for the world based on nature rather than myth. They wondered about the fundamental substance of reality—was it water, air, or something more abstract? This marked the beginning of a tradition of rational thought that continues to shape our world. Philosophy encourages us to think critically, question our assumptions, and explore profound ideas about existence, knowledge, and morality. It is not just an academic discipline but a way of thinking that enriches our lives and helps us navigate the complexities of human experience.",
          "visualPrompt": "An animation of the word 'Philosophia' breaking into 'Philo' (love) and 'Sophia' (wisdom), with icons representing big questions: a question mark over a brain, a heart, and a gear."
        },
        {
          "id": "philosophy-101-l01-c2",
          "title": "The Branches of Philosophy",
          "content": "Philosophy is often divided into several main branches, each focusing on different fundamental questions. The primary branches are:\n1. **Metaphysics**: This branch explores the nature of reality, existence, and being. It asks the biggest questions, such as: What truly exists? What does it mean to be?\n2. **Epistemology**: This is the theory of knowledge. It investigates what knowledge is, where it comes from, and what its limits are. It helps us think critically about what we believe and why.\n3. **Ethics**: Also known as moral philosophy, ethics is the study of right and wrong conduct. It guides our moral decisions and helps us understand values, responsibilities, and how to live a good life.\n4. **Logic**: This branch focuses on the principles of valid reasoning and argumentation. It teaches us how to construct sound arguments and identify fallacies, improving our ability to think clearly and communicate effectively.\n5. **Aesthetics**: This branch explores the nature of beauty, art, and taste. It asks what makes something beautiful and how art affects our emotions and perceptions.\n6. **Political Philosophy**: This branch examines how societies should be organized. It raises questions about justice, rights, liberty, and the legitimate role of government.\nThese branches are all interconnected. Your beliefs about reality (metaphysics) can influence what you think you can know (epistemology), which in turn affects your views on moral action (ethics) and political systems.",
          "visualPrompt": "A mind map with 'Philosophy' at the center and branches for Metaphysics, Epistemology, Ethics, Logic, Aesthetics, and Political Philosophy, each with a simple icon (e.g., a question mark for Metaphysics, a lightbulb for Epistemology)."
        },
        {
          "id": "philosophy-101-l01-c3",
          "title": "Why Philosophy Matters",
          "content": "Studying philosophy trains our minds to think more clearly and deeply. It develops crucial skills in critical thinking, logical argumentation, and self-reflection. These skills are valuable in every part of life, from academics to personal relationships and future careers. As Socrates famously said, 'the unexamined life is not worth living,' meaning that reflecting on our thoughts and actions is essential for personal growth.\n\nPhilosophy is also the foundation of many other fields. Law requires critical thinking about justice and fairness. Science relies on philosophical reasoning about evidence and causation. Medicine raises ethical questions about patient care, and politics is guided by philosophical ideas about rights and responsibilities. Even technology requires us to consider the ethical implications of new inventions.\n\nIn today's information-saturated world, the ability to identify sound arguments and recognize hidden assumptions is more important than ever. As Aristotle observed, 'all men by nature desire to know.' Philosophy channels this natural curiosity into a disciplined inquiry, helping us navigate complex issues and make informed decisions. By engaging with philosophy, we not only enrich our minds but also prepare ourselves to be thoughtful and engaged citizens.",
          "visualPrompt": "A collage of images showing philosophy's application: a courtroom (law), a science lab (science), a hospital (medicine), and a voting booth (politics)."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l01-f1",
          "front": "Philosophia",
          "back": "Greek for 'love of wisdom' — the origin of the word philosophy, reflecting its core mission of pursuing fundamental understanding through reason."
        },
        {
          "id": "philosophy-101-l01-f2",
          "front": "Six major branches of philosophy",
          "back": "Metaphysics (reality), epistemology (knowledge), ethics (morality), logic (reasoning), aesthetics (beauty), and political philosophy (justice and society)."
        },
        {
          "id": "philosophy-101-l01-f3",
          "front": "Socrates: 'The unexamined life is not worth living'",
          "back": "Socrates held that self-reflection and critical inquiry are essential to human flourishing — a life lived without questioning assumptions is incomplete."
        },
        {
          "id": "philosophy-101-l01-f4",
          "front": "Metaphysics vs. epistemology",
          "back": "Metaphysics asks what exists and what reality is; epistemology asks what we can know and how we can know it. The two are deeply connected."
        }
      ],
      "learningAids": [
        {
          "id": "philosophy-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "philosophy-101-l02",
      "title": "Ancient Greek Philosophy: Socrates, Plato, and Aristotle",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the Socratic method and its purpose",
        "Explain Plato's Theory of Forms and the Allegory of the Cave",
        "Outline Aristotle's metaphysics, including the doctrine of the four causes"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l02-c1",
          "title": "Socrates and the Examined Life",
          "content": "Socrates (469–399 BCE) is a foundational figure in Western philosophy, yet he never wrote anything down. We know him through the dialogues of his student, Plato. Socrates is famous for his method of teaching, the Socratic method or 'elenchus.' This involves asking a series of probing questions to help people examine their own beliefs, uncover contradictions in their thinking, and arrive at truths for themselves.\n\nHe spent his days in the Athenian public square, the agora, discussing concepts like justice, courage, and the good life with anyone who would talk to him. A key belief was that wisdom begins with recognizing one's own ignorance; he famously claimed to be wise only because he knew that he knew nothing.\n\nUltimately, Socrates was put on trial for impiety and corrupting the youth of Athens. He chose to accept his death sentence—drinking poison hemlock—rather than abandon his philosophical principles. His trial and dignified death, chronicled in Plato's 'Apology' and 'Phaedo,' have made him an enduring symbol of intellectual integrity and the pursuit of truth, even in the face of death.",
          "visualPrompt": "An illustration of Socrates in the Athenian agora, engaging in dialogue with a citizen, with question marks floating between them."
        },
        {
          "id": "philosophy-101-l02-c2",
          "title": "Plato's Theory of Forms",
          "content": "Plato (428–348 BCE) believed that the physical world we perceive with our senses is not the real world; it is merely a shadow of a higher, unchanging reality called the world of Forms or Ideas. For Plato, concepts like Justice, Beauty, and the Good exist as perfect, eternal Forms. The particular just acts or beautiful objects we encounter are only imperfect copies of these perfect ideals.\n\nPlato's most famous illustration of this theory is the Allegory of the Cave, from his work 'The Republic.' He imagines prisoners chained in a cave their whole lives, able to see only shadows cast on a wall. They mistake these shadows for reality. The philosopher is like a prisoner who escapes the cave and sees the real world illuminated by the sun, which represents the Form of the Good. This experience reveals the true nature of reality. The philosopher then feels a duty to return to the cave and enlighten the other prisoners, even if they resist the truth. The allegory highlights the challenge of gaining true knowledge and the importance of seeking truth beyond sensory appearances.",
          "visualPrompt": "A step-by-step animation of the Allegory of the Cave: 1. Prisoners watching shadows. 2. One prisoner is freed and turns around. 3. The prisoner climbs out of the cave. 4. The prisoner sees the real world and the sun. 5. The prisoner returns to the cave."
        },
        {
          "id": "philosophy-101-l02-c3",
          "title": "Aristotle's Metaphysics and the Four Causes",
          "content": "Aristotle (384–322 BCE), Plato's student, disagreed with his teacher on the Theory of Forms. While Plato believed Forms existed in a separate realm, Aristotle argued that the form of an object exists within the object itself. In his work 'Metaphysics,' Aristotle sought to understand the fundamental nature of being and reality.\n\nTo fully understand any object or phenomenon, Aristotle proposed that we must ask four questions, known as the four causes:\n1. **Material Cause**: What is it made of? (e.g., the wood of a table).\n2. **Formal Cause**: What is its form or essence? (e.g., the design or blueprint of the table).\n3. **Efficient Cause**: What brought it into being? (e.g., the carpenter who built it).\n4. **Final Cause**: What is its purpose or 'telos'? (e.g., to provide a surface for eating or working).\n\nAristotle believed that everything in nature has a purpose or end goal. This teleological worldview was incredibly influential, shaping Western science and philosophy for centuries. By analyzing things through the lens of the four causes, he provided a comprehensive framework for understanding the world around us.",
          "visualPrompt": "A diagram of a statue. Arrows point to: the marble (Material Cause), the sculptor (Efficient Cause), the final shape of the figure (Formal Cause), and its purpose as a piece of art (Final Cause)."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l02-f1",
          "front": "The Socratic method (elenchus)",
          "back": "A form of cooperative dialogue in which Socrates asks probing questions to expose contradictions, helping interlocutors refine their beliefs through their own reasoning."
        },
        {
          "id": "philosophy-101-l02-f2",
          "front": "Plato's Theory of Forms",
          "back": "The physical world is an imperfect copy of an eternal, unchanging realm of perfect Forms (Justice, Beauty, the Good). True knowledge is knowledge of these Forms, not of sensory appearances."
        },
        {
          "id": "philosophy-101-l02-f3",
          "front": "Allegory of the Cave",
          "back": "Prisoners see only shadows on a cave wall and mistake them for reality. The philosopher escapes, sees the sun (the Form of the Good), and returns to enlighten others."
        },
        {
          "id": "philosophy-101-l02-f4",
          "front": "Aristotle's four causes",
          "back": "Material (what it's made of), formal (its shape/essence), efficient (what produced it), final (its purpose or telos) — together they fully explain any object or event."
        }
      ],
      "learningAids": [
        {
          "id": "philosophy-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "philosophy-101-interactive-lab",
      "title": "Introduction to Philosophy Practice Lab",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Summarize the key idea from Introduction to Philosophy in one concise statement.",
          "Apply that idea to one realistic Philosophy scenario and justify your choice.",
          "Reflect on one mistake to avoid in your next attempt."
        ]
      },
      "interactiveActivities": [
        {
          "id": "philosophy-101-interactive-lab-act1",
          "type": "scenario_practice",
          "title": "Guided Scenario Drill",
          "description": "Work through a realistic prompt, explain your reasoning, and compare your answer with a model approach."
        }
      ],
      "learningAids": [
        {
          "id": "philosophy-101-interactive-lab-a1",
          "type": "practice",
          "title": "Practice Playbook",
          "content": "Use Explain -> Apply -> Reflect to complete this Philosophy practice lab with clear reasoning."
        }
      ]
    },
    {
      "id": "philosophy-101-l03",
      "title": "Foundations of Philosophy Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of philosophy's branches, methods, and ancient Greek thinkers"
      ],
      "questions": [
        {
          "id": "philosophy-101-l03-q1",
          "text": "Which branch of philosophy investigates the nature and limits of human knowledge?",
          "options": [
            {
              "id": "a",
              "text": "Metaphysics"
            },
            {
              "id": "b",
              "text": "Epistemology"
            },
            {
              "id": "c",
              "text": "Ethics"
            },
            {
              "id": "d",
              "text": "Aesthetics"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Epistemology is the branch of philosophy concerned with the nature, sources, and limits of knowledge — asking questions like 'What can we know?' and 'What counts as justified belief?'"
        },
        {
          "id": "philosophy-101-l03-q2",
          "text": "In Plato's Allegory of the Cave, what does the sun outside the cave represent?",
          "options": [
            {
              "id": "a",
              "text": "Physical light and warmth"
            },
            {
              "id": "b",
              "text": "The Form of the Good — ultimate truth and reality"
            },
            {
              "id": "c",
              "text": "The authority of the Athenian state"
            },
            {
              "id": "d",
              "text": "Scientific empiricism"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The sun represents the Form of the Good, the highest object of knowledge, which illuminates all other Forms just as the sun illuminates visible objects."
        },
        {
          "id": "philosophy-101-l03-q3",
          "text": "Aristotle's 'final cause' refers to:",
          "options": [
            {
              "id": "a",
              "text": "The material an object is made of"
            },
            {
              "id": "b",
              "text": "The agent that brought the object into being"
            },
            {
              "id": "c",
              "text": "The purpose or goal for which something exists"
            },
            {
              "id": "d",
              "text": "The last event in a causal chain"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The final cause (telos) is the purpose or end for which something exists — e.g., the final cause of an acorn is to become an oak tree."
        },
        {
          "id": "philosophy-101-l03-q4",
          "text": "The Socratic method primarily involves:",
          "options": [
            {
              "id": "a",
              "text": "Delivering lectures on moral truths"
            },
            {
              "id": "b",
              "text": "Conducting scientific experiments"
            },
            {
              "id": "c",
              "text": "Asking probing questions to expose contradictions in beliefs"
            },
            {
              "id": "d",
              "text": "Writing systematic treatises"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Socrates used cooperative questioning (elenchus) to help interlocutors discover contradictions in their own beliefs, guiding them toward more consistent understanding."
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
          "id": "philosophy-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "philosophy-101-l04",
      "title": "Logic and Argumentation",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Distinguish between deductive and inductive reasoning",
        "Identify the components of a valid syllogism",
        "Recognise common logical fallacies and explain why they fail"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l04-c1",
          "title": "Deductive Reasoning and the Syllogism",
          "content": "Deductive reasoning is a logical process that moves from general statements, or premises, to a specific conclusion that is guaranteed to be true if the premises are true. This method was first formalized by Aristotle, whose system of syllogisms became the foundation of Western logic for nearly two thousand years.\n\nA classic syllogism has a major premise, a minor premise, and a conclusion. For example: Major premise: 'All humans are mortal.' Minor premise: 'Socrates is a human.' Conclusion: 'Therefore, Socrates is mortal.' If the premises are true, the conclusion must also be true.\n\nIn logic, it's important to distinguish between 'validity' and 'soundness.' A deductive argument is 'valid' if its conclusion logically follows from its premises, regardless of whether the premises are actually true. An argument is 'sound' if it is both valid and all of its premises are true. Understanding this distinction is key to evaluating arguments properly. Aristotle's work on logic, compiled in the 'Organon,' laid the groundwork for formal reasoning and remains a vital part of critical thinking today.",
          "visualPrompt": "A funnel diagram for deductive reasoning, starting with a wide top labeled 'General Premise (All humans are mortal)' and narrowing to a point labeled 'Specific Conclusion (Socrates is mortal)'."
        },
        {
          "id": "philosophy-101-l04-c2",
          "title": "Inductive Reasoning and Its Limits",
          "content": "Inductive reasoning works in the opposite direction of deduction. It draws general conclusions from specific observations. For example, if every swan you have ever seen is white, you might inductively conclude that 'all swans are white.' However, unlike deduction, induction does not guarantee the truth of its conclusions. The discovery of black swans in Australia famously proved the long-held European conclusion wrong.\n\nThe philosopher David Hume identified the 'problem of induction,' arguing that we have no logical justification for assuming the future will resemble the past. We believe the sun will rise tomorrow because it always has, but this is a belief based on habit, not logical certainty. This challenges the foundation of scientific reasoning, which relies on induction to form general laws from experimental data.\n\nDespite its limits, induction is essential to the scientific method. Scientists use it to form hypotheses based on observed patterns. The philosopher Karl Popper later suggested that a key feature of a scientific theory is not that it can be proven true by induction, but that it is 'falsifiable'—it makes predictions that could potentially be proven false. This openness to being disproven is what allows scientific knowledge to advance.",
          "visualPrompt": "An animation showing a person observing several white swans, forming the conclusion 'All swans are white.' Then, a black swan appears, shattering the conclusion with a question mark."
        },
        {
          "id": "philosophy-101-l04-c3",
          "title": "Common Logical Fallacies",
          "content": "A logical fallacy is a flaw in reasoning that weakens an argument. Recognizing fallacies is a crucial skill for critical thinking, as they are common in advertising, politics, and everyday discussions. Some common examples include:\n\n- **Ad Hominem**: Attacking the person making the argument instead of the argument itself. (e.g., 'You can't trust his opinion on economics; he's a terrible dresser.')\n- **Straw Man**: Misrepresenting an opponent's position to make it easier to attack. (e.g., 'You want to increase school funding? So you must want to bankrupt the country!')\n- **False Dilemma**: Presenting only two choices when more options exist. (e.g., 'You're either with us or against us.')\n- **Slippery Slope**: Arguing that a small first step will inevitably lead to extreme consequences without sufficient evidence. (e.g., 'If we allow this, it's only a matter of time before society collapses.')\n- **Post Hoc Ergo Propter Hoc**: Assuming that because one event followed another, the first event caused the second. (e.g., 'I wore my lucky socks and my team won; therefore, my socks caused the victory.')\n\nLearning to identify these errors in reasoning is one of the most practical skills philosophy offers.",
          "visualPrompt": "A series of cartoon strips, each illustrating a different logical fallacy. For 'Straw Man,' a debater ignores their opponent and instead argues with a scarecrow wearing a sign with a distorted version of the argument."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l04-f1",
          "front": "Valid vs. sound argument",
          "back": "Valid: the conclusion follows logically from the premises. Sound: the argument is valid AND all premises are true. An argument can be valid but unsound if a premise is false."
        },
        {
          "id": "philosophy-101-l04-f2",
          "front": "Syllogism",
          "back": "Aristotle's formal structure of deductive reasoning: a major premise, a minor premise, and a conclusion that follows necessarily — e.g., All A are B; C is A; therefore C is B."
        },
        {
          "id": "philosophy-101-l04-f3",
          "front": "Hume's problem of induction",
          "back": "We cannot justify inferring general laws from particular observations without assuming the future will resemble the past — an assumption that itself requires inductive justification, creating circularity."
        },
        {
          "id": "philosophy-101-l04-f4",
          "front": "Ad hominem fallacy",
          "back": "Attacking the person making an argument rather than addressing the argument itself — e.g., dismissing a scientist's findings because of their personal beliefs."
        }
      ],
      "learningAids": [
        {
          "id": "philosophy-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        },
        {
          "id": "philosophy-101-l04-a2",
          "type": "worksheet",
          "title": "Fallacy Spotter's Guide",
          "content": "A downloadable PDF with definitions and examples of common logical fallacies to practice identifying them in real-world arguments."
        }
      ]
    },
    {
      "id": "philosophy-101-l05",
      "title": "Ethics: How Should We Live?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain Aristotle's virtue ethics and the concept of eudaimonia",
        "Describe Kant's deontological ethics and the categorical imperative",
        "Outline utilitarian ethics as developed by Bentham and Mill"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l05-c1",
          "title": "Virtue Ethics: Aristotle and Eudaimonia",
          "content": "In his 'Nicomachean Ethics,' Aristotle shifts the focus of morality from 'What should I do?' to 'What kind of person should I be?' This approach is known as virtue ethics. The ultimate goal of life, for Aristotle, is to achieve 'eudaimonia,' a state best translated as 'human flourishing' or living a fulfilling life. We achieve eudaimonia by cultivating virtues, which are stable character traits like courage, temperance, justice, and practical wisdom ('phronesis').\n\nAristotle famously described virtue as a 'mean' between two extremes of vice. For example, courage is the mean between cowardice (a deficiency of confidence) and recklessness (an excess of confidence). These virtues are not learned from a rulebook but are developed through practice and habit, much like learning a musical instrument. A virtuous person does the right thing because it has become part of their character. Their practical wisdom helps them determine the right course of action in any given situation, allowing them to flourish as human beings.",
          "visualPrompt": "A diagram of a balance scale. In the center is 'Courage' (the mean). On one end is 'Cowardice' (deficiency), and on the other is 'Recklessness' (excess)."
        },
        {
          "id": "philosophy-101-l05-c2",
          "title": "Deontological Ethics: Kant's Duty-Based Morality",
          "content": "Immanuel Kant (1724–1804) argued that morality is not based on consequences or character, but on duty and reason. This is known as deontology. For Kant, an action is morally right only if it is performed out of a sense of duty, in accordance with a rational moral law that any reasonable person would accept.\n\nKant's central principle is the 'categorical imperative.' One formulation of this principle is: 'Act only according to that maxim by which you can at the same time will that it should become a universal law.' In other words, before you act, you should ask if it would be logically possible and desirable for everyone to act in the same way. Lying, for example, fails this test because if everyone lied, trust would collapse and the very concept of a promise would become meaningless.\n\nA second formulation of the categorical imperative states that we must always treat humanity, in ourselves and in others, as an end in itself, and never merely as a means to an end. This principle emphasizes the inherent dignity and worth of every person, forming a powerful foundation for modern theories of human rights.",
          "visualPrompt": "A flowchart illustrating the Categorical Imperative. Start with 'Proposed Action (Maxim).' Arrow to 'Can this be a universal law for everyone?' If yes, 'Morally Permissible.' If no, 'Not Morally Permissible.'"
        },
        {
          "id": "philosophy-101-l05-c3",
          "title": "Utilitarianism: The Greatest Good for the Greatest Number",
          "content": "Utilitarianism, developed by Jeremy Bentham and John Stuart Mill, is a consequentialist theory, meaning it judges the morality of an action based on its outcome. The core principle is that the right action is the one that maximizes overall happiness and minimizes suffering for the greatest number of people.\n\nBentham proposed a 'felicific calculus' to measure the amount of pleasure or pain an action would produce, considering factors like intensity, duration, and certainty. He believed all pleasures were equal. John Stuart Mill refined this idea, arguing for a distinction between 'higher' pleasures (intellectual, artistic) and 'lower' pleasures (bodily sensations). He famously stated, 'it is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied.'\n\nCritics of utilitarianism argue that it can justify sacrificing the rights of an individual for the benefit of the majority, raising serious questions about justice. To address this, some philosophers distinguish between 'act utilitarianism' (judging each act individually) and 'rule utilitarianism' (following rules that generally produce the greatest good).",
          "visualPrompt": "An animated scale balancing the happiness of a few individuals against the happiness of a large crowd, illustrating the 'greatest good for the greatest number' principle."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l05-f1",
          "front": "Eudaimonia (Aristotle)",
          "back": "Human flourishing — achieved by cultivating virtues (courage, temperance, justice, practical wisdom) through habitual practice, not by following rules or maximising pleasure."
        },
        {
          "id": "philosophy-101-l05-f2",
          "front": "Categorical imperative (Kant)",
          "back": "'Act only according to that maxim by which you can at the same time will it to become a universal law.' Also: treat humanity always as an end, never merely as a means."
        },
        {
          "id": "philosophy-101-l05-f3",
          "front": "Utilitarianism (Bentham & Mill)",
          "back": "The right action produces the greatest happiness for the greatest number. Mill added that quality of pleasure matters — higher (intellectual) pleasures outweigh lower (bodily) ones."
        },
        {
          "id": "philosophy-101-l05-f4",
          "front": "Virtue as a mean (Aristotle)",
          "back": "Each virtue is a mean between two vices of excess and deficiency — e.g., courage is the mean between cowardice (deficiency) and recklessness (excess)."
        }
      ],
      "learningAids": [
        {
          "id": "philosophy-101-l05-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        },
        {
          "id": "philosophy-101-l05-a2",
          "type": "worksheet",
          "title": "Ethical Dilemmas",
          "content": "A set of scenarios (like the trolley problem) for students to analyze using virtue ethics, deontology, and utilitarianism."
        }
      ]
    },
    {
      "id": "philosophy-101-l06",
      "title": "Ethics and Logic Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Assess understanding of logical reasoning, fallacies, and the three major ethical theories"
      ],
      "questions": [
        {
          "id": "philosophy-101-l06-q1",
          "text": "A deductive argument is 'valid' when:",
          "options": [
            {
              "id": "a",
              "text": "Its premises are true"
            },
            {
              "id": "b",
              "text": "Its conclusion follows necessarily from its premises"
            },
            {
              "id": "c",
              "text": "It uses inductive reasoning correctly"
            },
            {
              "id": "d",
              "text": "It avoids all logical fallacies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Validity is a property of logical structure: if the premises are true, the conclusion must be true. An argument can be valid even if its premises happen to be false."
        },
        {
          "id": "philosophy-101-l06-q2",
          "text": "Kant's categorical imperative requires that you:",
          "options": [
            {
              "id": "a",
              "text": "Maximise happiness for the greatest number"
            },
            {
              "id": "b",
              "text": "Act only on maxims you could will to become universal laws"
            },
            {
              "id": "c",
              "text": "Develop virtuous character traits through habituation"
            },
            {
              "id": "d",
              "text": "Follow the moral teachings of your community"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Kant's categorical imperative tests moral actions by universalisability: an action is permissible only if the principle behind it could consistently apply to everyone."
        },
        {
          "id": "philosophy-101-l06-q3",
          "text": "According to Aristotle, virtue is best described as:",
          "options": [
            {
              "id": "a",
              "text": "Strict obedience to divine commands"
            },
            {
              "id": "b",
              "text": "A stable character trait that is a mean between excess and deficiency"
            },
            {
              "id": "c",
              "text": "Whatever action produces the most pleasure"
            },
            {
              "id": "d",
              "text": "Following one's natural instincts without reflection"
            }
          ],
          "correctOptionId": "b",
          "explanation": "For Aristotle, each virtue (courage, temperance, etc.) is a mean between two extremes — developed through practice until it becomes second nature."
        },
        {
          "id": "philosophy-101-l06-q4",
          "text": "The straw man fallacy involves:",
          "options": [
            {
              "id": "a",
              "text": "Attacking the person rather than the argument"
            },
            {
              "id": "b",
              "text": "Presenting only two options when more exist"
            },
            {
              "id": "c",
              "text": "Misrepresenting an opponent's position to make it easier to refute"
            },
            {
              "id": "d",
              "text": "Claiming an event will lead to extreme consequences without evidence"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A straw man distorts or oversimplifies an opponent's argument so that the weakened version is easy to defeat — while the actual argument remains unaddressed."
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
      "id": "philosophy-101-l07",
      "title": "Political Philosophy: Power, Justice, and the Social Contract",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Analyse Machiavelli's political realism and his concepts of virtu and fortuna",
        "Explain Hobbes's and Locke's contrasting social-contract theories",
        "Evaluate the tension between political power and moral principle"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l07-c1",
          "title": "Machiavelli and Political Realism",
          "content": "Niccolò Machiavelli (1469–1527) was a Renaissance thinker who revolutionized political philosophy. In his famous work, 'The Prince,' he broke from the tradition of describing ideal states and instead focused on how power is actually acquired, maintained, and used. This approach is known as political realism. Machiavelli argued that a ruler must be concerned with what is effective, not necessarily what is morally good. He famously stated that it is safer for a prince to be feared than loved, if he cannot be both.\n\nTo explain the dynamics of power, Machiavelli introduced two key concepts: 'fortuna' and 'virtù.' 'Fortuna' represents the unpredictable forces of chance and circumstance, which he compared to a raging river that can destroy everything in its path. 'Virtù,' on the other hand, is not moral virtue but rather the skill, intelligence, and decisive action a leader uses to impose order on fortune. A successful prince uses virtù to build defenses against fortuna's whims, mastering the art of politics to ensure the stability of the state.",
          "visualPrompt": "An image of a raging river labeled 'Fortuna' (chance). A figure representing a prince is shown building a dam and canals, labeled 'Virtù' (skill/action), to control the river's flow."
        },
        {
          "id": "philosophy-101-l07-c2",
          "title": "Hobbes: The Leviathan and Absolute Sovereignty",
          "content": "Writing during the English Civil War, Thomas Hobbes (1588–1679) was deeply concerned with preventing social collapse. In his masterpiece, 'Leviathan,' he imagined a 'state of nature'—a condition without government or laws. He argued that in this state, driven by self-interest and a desire for self-preservation, life would be a 'war of all against all,' which he famously described as 'solitary, poor, nasty, brutish, and short.'\n\nTo escape this chaos, Hobbes proposed that rational individuals would agree to a 'social contract.' They would surrender some of their individual freedoms to a powerful, absolute sovereign (the 'Leviathan') in exchange for security and order. For Hobbes, the sovereign's power must be nearly unlimited, because any challenge to its authority risks a return to the terrifying state of nature. His work provides a powerful philosophical justification for strong, centralized government as the only alternative to anarchy.",
          "visualPrompt": "A dark, chaotic scene labeled 'State of Nature' with individuals fighting. An arrow leads to a scene of an orderly society under the watch of a giant crowned figure (the Leviathan), representing the social contract."
        },
        {
          "id": "philosophy-101-l07-c3",
          "title": "Locke: Natural Rights and Limited Government",
          "content": "John Locke (1632–1704) offered a more optimistic view of the social contract. Unlike Hobbes, Locke believed the state of nature was governed by natural law, where all individuals possess inherent 'natural rights' to life, liberty, and property. People form governments not to escape a brutal war, but to better protect these pre-existing rights.\n\nAccording to Locke, political authority is based on the 'consent of the governed.' The government's power is limited and its primary purpose is to serve the people by protecting their rights. If a government violates this contract and becomes tyrannical, the people have the right to revolt and establish a new government. Locke's ideas about natural rights, limited government, and the right of revolution were profoundly influential, directly shaping the American Declaration of Independence and the foundations of modern liberal democracy.",
          "visualPrompt": "A diagram showing a government with chains on its wrists, labeled 'Limited Government.' The chains are held by citizens holding signs that say 'Life,' 'Liberty,' and 'Property' (Natural Rights)."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l07-f1",
          "front": "Machiavelli's virtu and fortuna",
          "back": "Virtu: energy, intelligence, willpower, and decisive action (not moral virtue). Fortuna: chance and circumstance, like a flooding river. The effective prince uses virtu to moderate fortuna's destructive force."
        },
        {
          "id": "philosophy-101-l07-f2",
          "front": "Hobbes: state of nature",
          "back": "Without government, life would be a 'war of all against all' — 'solitary, poor, nasty, brutish, and short.' People rationally surrender freedom to an absolute sovereign for security."
        },
        {
          "id": "philosophy-101-l07-f3",
          "front": "Locke: natural rights",
          "back": "People possess natural rights to life, liberty, and property. Government exists to protect these rights, and the people may revolt if it fails to do so — the philosophical basis of constitutional democracy."
        },
        {
          "id": "philosophy-101-l07-f4",
          "front": "Social contract",
          "back": "An agreement (real or hypothetical) by which individuals surrender some freedom to a political authority in exchange for order and the protection of rights — formulated differently by Hobbes, Locke, and Rousseau."
        }
      ]
    },
    {
      "id": "philosophy-101-l08",
      "title": "Epistemology: How Do We Know?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Contrast rationalism and empiricism as accounts of the sources of knowledge",
        "Explain Descartes's method of doubt and the cogito",
        "Describe Hume's empiricism and his critique of causation"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l08-c1",
          "title": "Rationalism: Descartes and Innate Ideas",
          "content": "Rationalism is the view that reason is the primary source of knowledge. Rationalists believe that the most fundamental truths about the world can be discovered through pure thought, independent of sensory experience. The most famous rationalist is René Descartes (1596–1650). To find a certain foundation for knowledge, Descartes developed a method of 'radical doubt,' resolving to question everything he thought he knew. He noted that his senses could deceive him, that he could be dreaming, or that an evil demon could be tricking him.\n\nThrough this process, Descartes arrived at one truth he could not doubt: the very act of thinking proved his own existence. This is famously expressed as 'Cogito, ergo sum' ('I think, therefore I am'). From this single point of certainty, Descartes sought to rebuild all of knowledge based on reason. He argued that certain ideas, such as God, infinity, and mathematical truths, are 'innate'—they are part of the mind from birth and not learned from experience. This emphasis on reason as the path to truth marked the beginning of modern philosophy.",
          "visualPrompt": "An animation of a brain. A thought bubble appears with 'I think...' which then solidifies into a figure of a person labeled '...therefore I am.' This represents the Cogito."
        },
        {
          "id": "philosophy-101-l08-c2",
          "title": "Empiricism: Hume and the Limits of Experience",
          "content": "Empiricism is the opposing view that all knowledge originates from sensory experience. Empiricists like John Locke argued that the mind at birth is a 'tabula rasa,' or blank slate, upon which experience writes. The most radical empiricist was David Hume (1711–1776). He argued that all our ideas are just faint copies of our sensory impressions. If an idea cannot be traced back to a specific sensory experience, Hume claimed it was meaningless.\n\nHume applied this principle to the concept of 'causation.' We believe that one event (like a billiard ball striking another) causes a second event (the second ball moving). But Hume pointed out that we never actually perceive the 'causal connection' itself. All we observe is a 'constant conjunction' of events—one thing regularly follows another. Our belief in causation, he concluded, is a mental habit based on past experience, not a logical certainty or an observed fact. This skeptical conclusion challenged the very foundations of science and philosophy, awakening later philosophers like Kant from their 'dogmatic slumber.'",
          "visualPrompt": "An image of a blank slate or whiteboard ('tabula rasa'). Sensory inputs (sight, sound, touch) are shown as paint splatters, forming ideas on the slate."
        },
        {
          "id": "philosophy-101-l08-c3",
          "title": "Kant's Synthesis: The Critique of Pure Reason",
          "content": "Immanuel Kant (1724–1804) was so troubled by Hume's skepticism that he sought to bridge the gap between rationalism and empiricism. In his 'Critique of Pure Reason,' Kant agreed with the empiricists that all knowledge begins with experience. However, he argued that our minds are not passive blank slates. Instead, the mind actively structures and organizes the raw data of our senses using innate 'categories' of understanding.\n\nThese categories include concepts like space, time, and causation. They are not derived from experience; rather, they are the necessary preconditions for having any experience at all. Kant called this his 'Copernican Revolution' in philosophy: instead of the mind conforming to objects, objects must conform to the structure of our mind. This means we can never know things as they are 'in themselves' (noumena), only as they appear to us (phenomena), shaped by our mental framework. Kant's synthesis profoundly reshaped philosophy, arguing that both reason and experience are essential for human knowledge.",
          "visualPrompt": "A diagram showing sensory data (squiggles and colors) flowing into a brain-shaped factory. Inside, the data is sorted into boxes labeled 'Space,' 'Time,' and 'Causation' before emerging as an organized picture of the world ('Phenomena')."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l08-f1",
          "front": "Cogito ergo sum (Descartes)",
          "back": "'I think, therefore I am' — the one truth that survives radical doubt. Even if everything else is illusion, the act of doubting proves the existence of the thinking self."
        },
        {
          "id": "philosophy-101-l08-f2",
          "front": "Hume on causation",
          "back": "We never perceive a necessary connection between cause and effect — only a constant conjunction of events. Causation is a mental habit, not an observed fact, challenging the foundations of scientific reasoning."
        },
        {
          "id": "philosophy-101-l08-f3",
          "front": "Rationalism vs. empiricism",
          "back": "Rationalism: reason is the primary source of knowledge (Descartes, Spinoza, Leibniz). Empiricism: all knowledge derives from sensory experience (Locke, Berkeley, Hume)."
        },
        {
          "id": "philosophy-101-l08-f4",
          "front": "Kant: phenomena vs. noumena",
          "back": "Phenomena: things as they appear to us, structured by the mind's categories (space, time, causation). Noumena: things in themselves, beyond the reach of human knowledge."
        }
      ]
    },
    {
      "id": "philosophy-101-l09",
      "title": "Philosophy of Religion and Existentialism",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Evaluate the main arguments for and against God's existence, including Hume's critiques",
        "Explain Hume's natural history of religion and the evolution from polytheism to theism",
        "Describe existentialism's core themes: freedom, authenticity, and the absurd"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l09-c1",
          "title": "Arguments for God's Existence",
          "content": "The philosophy of religion uses reason to examine fundamental questions about faith and divinity. Three classical arguments for God's existence have been debated for centuries:\n\n1. **The Ontological Argument**: First proposed by Anselm, this argument defines God as 'that than which nothing greater can be conceived.' It argues that such a being must exist in reality, because a being that exists in reality is greater than one that exists only in the mind.\n2. **The Cosmological Argument**: Championed by thinkers like Aquinas, this argument states that everything that exists has a cause. This chain of causes cannot go back infinitely, so there must be a first, uncaused cause, which is God.\n3. **The Teleological Argument (Argument from Design)**: This argument points to the order and complexity in the natural world (like the human eye or the solar system) as evidence of an intelligent designer, which is God.\n\nPhilosophers like David Hume have offered powerful critiques of these arguments, questioning the logic of a 'necessary being,' the assumption that the universe needs a single cause, and suggesting that the appearance of design could arise from natural processes rather than a divine creator.",
          "visualPrompt": "Three panels. Panel 1 (Ontological): A thought bubble with 'Greatest Being' that pops into reality. Panel 2 (Cosmological): A line of dominoes falling, leading back to a first domino that stands on its own. Panel 3 (Teleological): A close-up of a complex watch mechanism next to a close-up of an eye, implying a designer for both."
        },
        {
          "id": "philosophy-101-l09-c2",
          "title": "Hume: The Natural History of Religion",
          "content": "In 'The Natural History of Religion,' David Hume shifted the question from 'Does God exist?' to 'Why do people believe in God?' He argued that humanity's original religion was not monotheism (belief in one God) but polytheism (belief in many gods). Early humans, he claimed, did not see the order of nature as evidence of a single creator. Instead, they personified the unpredictable forces that governed their lives—storms, disease, harvests—as capricious deities who needed to be appeased through rituals and sacrifice.\n\nHume suggested that monotheism arose later, not from rational progress, but from a psychological tendency to elevate one tribal god above others in a competitive hierarchy. He was critical of the effects of popular religion on morality, arguing that it often fosters superstition, intolerance, and a focus on appeasing a deity rather than cultivating genuine virtue. His work was a pioneering attempt to explain religion as a natural, human phenomenon.",
          "visualPrompt": "A simple animation showing early humans cowering from a storm cloud with an angry face (polytheism). The scene then transitions to a society building a giant temple for a single, powerful sun-god (monotheism)."
        },
        {
          "id": "philosophy-101-l09-c3",
          "title": "Existentialism: Freedom, Authenticity, and the Absurd",
          "content": "Existentialism is a 19th and 20th-century philosophical movement that emphasizes individual existence, freedom, and choice. It holds that humans are not defined by a pre-ordained 'essence' but must create their own meaning in a meaningless world. Key thinkers include Kierkegaard, Nietzsche, Sartre, and Camus.\n\nJean-Paul Sartre famously declared that 'existence precedes essence.' This means we are born without a fixed nature or purpose; we are 'condemned to be free' and must define ourselves through our choices and actions. This radical freedom comes with radical responsibility for who we become. Living authentically means embracing this freedom, while 'bad faith' is the self-deception of pretending we are not free.\n\nAlbert Camus explored the concept of the 'absurd'—the conflict between our human desire for meaning and the universe's silent indifference. In 'The Myth of Sisyphus,' he compares the human condition to Sisyphus, who is condemned to endlessly roll a boulder up a hill. Camus argues that we must rebel against the absurd by embracing life's struggles. The ultimate triumph is to find meaning in the struggle itself: 'one must imagine Sisyphus happy.'",
          "visualPrompt": "A person standing at a crossroads with infinite paths stretching out, symbolizing radical freedom and choice. The caption reads: 'Existence precedes essence.'"
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l09-f1",
          "front": "Three classical arguments for God's existence",
          "back": "Ontological (God as greatest conceivable being must exist), cosmological (first uncaused cause), teleological/design (order in nature implies a designer). Hume critiqued all three."
        },
        {
          "id": "philosophy-101-l09-f2",
          "front": "Hume: origin of religion",
          "back": "Polytheism was humanity's primary religion — born from personifying unpredictable natural forces as gods. Monotheism arose later through psychological elevation of one deity, not rational progress."
        },
        {
          "id": "philosophy-101-l09-f3",
          "front": "Sartre: 'Existence precedes essence'",
          "back": "We are not born with a fixed nature. We create ourselves through our choices — this radical freedom entails radical responsibility and existential anxiety."
        },
        {
          "id": "philosophy-101-l09-f4",
          "front": "Camus and the absurd",
          "back": "The absurd is the conflict between our human search for meaning and the universe's silent indifference. Camus argues we must rebel by embracing life—'one must imagine Sisyphus happy.'"
        }
      ]
    },
    {
      "id": "philosophy-101-l10",
      "title": "Comprehensive Philosophy Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate mastery across all major topics in introductory philosophy"
      ],
      "questions": [
        {
          "id": "philosophy-101-l10-q1",
          "text": "Machiavelli's concept of 'la verità effettuale' (the effectual truth) means:",
          "options": [
            {
              "id": "a",
              "text": "The moral truths revealed by Christian theology"
            },
            {
              "id": "b",
              "text": "Analysing politics as it actually is, not as it ideally ought to be"
            },
            {
              "id": "c",
              "text": "The scientific method of controlled experimentation"
            },
            {
              "id": "d",
              "text": "The legal truth established by courts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Machiavelli rejected the 'mirror for princes' tradition of idealised advice, insisting on examining political reality as it is actually practised — the founding move of modern political realism."
        },
        {
          "id": "philosophy-101-l10-q2",
          "text": "Descartes's 'cogito ergo sum' establishes:",
          "options": [
            {
              "id": "a",
              "text": "That God necessarily exists"
            },
            {
              "id": "b",
              "text": "That sensory experience is always reliable"
            },
            {
              "id": "c",
              "text": "That the thinking self is the one indubitable truth surviving radical doubt"
            },
            {
              "id": "d",
              "text": "That all knowledge comes from experience"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Even if an evil demon deceives us about everything else, the very act of doubting proves that a thinking subject exists — 'I think, therefore I am.'"
        },
        {
          "id": "philosophy-101-l10-q3",
          "text": "According to Hume, polytheism arose because early humans:",
          "options": [
            {
              "id": "a",
              "text": "Rationally inferred a designer from the order of nature"
            },
            {
              "id": "b",
              "text": "Personified unpredictable natural forces as capricious deities"
            },
            {
              "id": "c",
              "text": "Were taught monotheism and then fragmented it into many gods"
            },
            {
              "id": "d",
              "text": "Inherited the idea of multiple gods from a single ancestor"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hume argued that early humans personified the forces that controlled their lives — storms, disease, harvests — as gods to be feared and appeased, making polytheism humanity's primary religion."
        },
        {
          "id": "philosophy-101-l10-q4",
          "text": "Sartre's claim that 'existence precedes essence' means:",
          "options": [
            {
              "id": "a",
              "text": "Humans are born with a fixed nature determined by God"
            },
            {
              "id": "b",
              "text": "The essence of an object is more important than whether it exists"
            },
            {
              "id": "c",
              "text": "We have no predetermined nature — we create ourselves through our choices"
            },
            {
              "id": "d",
              "text": "Material existence is an illusion projected by consciousness"
            }
          ],
          "correctOptionId": "c",
          "explanation": "For Sartre, there is no pre-given human nature or divine blueprint. We first exist, then define ourselves through free choices, bearing full responsibility for who we become."
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
