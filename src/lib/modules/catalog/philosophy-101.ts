import type { LearningModule } from "@/lib/modules/types";

export const Philosophy101Module: LearningModule = {
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
  "version": "2.0.0",
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
        "Identify the major branches: metaphysics, epistemology, ethics, logic, and aesthetics",
        "Explain why philosophical inquiry remains relevant to everyday life"
      ],
      "chunks": [
        {
          "id": "philosophy-101-l01-c1",
          "title": "The Love of Wisdom",
          "content": "The word 'philosophy' comes from the Greek philosophia — literally 'love of wisdom.' Unlike the sciences, which investigate particular domains of nature, philosophy asks the most general and fundamental questions: What is real? What can we know? What should we do? How should we live together? These questions have no laboratory answers; they require careful reasoning, conceptual analysis, and the willingness to examine assumptions we normally take for granted. Philosophy began in ancient Greece around the 6th century BCE, when thinkers like Thales and Anaximander sought natural rather than mythological explanations for the world. The pre-Socratic philosophers asked what the fundamental substance of reality might be — water, air, fire, or an indefinite boundless principle — inaugurating the Western tradition of rational inquiry that persists to this day."
        },
        {
          "id": "philosophy-101-l01-c2",
          "title": "The Branches of Philosophy",
          "content": "Philosophy is traditionally divided into five major branches. Metaphysics asks what exists and what the fundamental nature of reality is — questions that Aristotle called the investigation of 'being qua being.' Epistemology investigates the nature, sources, and limits of knowledge. Ethics examines what is morally right or wrong, good or bad. Logic studies the principles of valid reasoning and argumentation. Aesthetics explores the nature of beauty, art, and taste. Political philosophy — sometimes treated as a branch of ethics — asks how societies should be organised and what legitimises political authority. Each branch generates its own questions, but they interconnect: your view of what is real (metaphysics) shapes what you think you can know (epistemology), which in turn shapes how you reason about right action (ethics) and how you evaluate political arrangements (political philosophy)."
        },
        {
          "id": "philosophy-101-l01-c3",
          "title": "Why Philosophy Matters",
          "content": "Philosophy trains the mind to think clearly, argue rigorously, and question assumptions — skills that transfer to every domain of life. Socrates famously declared that 'the unexamined life is not worth living,' insisting that self-reflection is essential to human flourishing. Philosophical reasoning underpins law, science, medicine, politics, and technology: the scientific method itself rests on philosophical ideas about evidence and causation. In an age of information overload, the ability to distinguish sound arguments from fallacies, to recognise hidden assumptions, and to think through the ethical implications of new technologies is more important than ever. As Aristotle observed, 'all men by nature desire to know' — philosophy channels that desire into disciplined inquiry, transforming raw curiosity into structured understanding."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l01-f1",
          "front": "Philosophia",
          "back": "Greek for 'love of wisdom' — the origin of the word philosophy, reflecting its core mission of pursuing fundamental understanding through reason"
        },
        {
          "id": "philosophy-101-l01-f2",
          "front": "Five major branches of philosophy",
          "back": "Metaphysics (reality), epistemology (knowledge), ethics (morality), logic (valid reasoning), aesthetics (beauty and art)"
        },
        {
          "id": "philosophy-101-l01-f3",
          "front": "Socrates: 'The unexamined life is not worth living'",
          "back": "Socrates held that self-reflection and critical inquiry are essential to human flourishing — a life lived without questioning assumptions is incomplete"
        },
        {
          "id": "philosophy-101-l01-f4",
          "front": "Metaphysics vs. epistemology",
          "back": "Metaphysics asks what exists and what reality is; epistemology asks what we can know and how we can know it. The two are deeply connected"
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
          "content": "Socrates (469–399 BCE) wrote nothing himself; we know him through the dialogues of his student Plato. His method — the Socratic method or elenchus — involved asking probing questions to expose contradictions in his interlocutors' beliefs. Rather than lecturing, Socrates acted as a 'midwife' of ideas, helping others discover truth through their own reasoning. He frequented the Athenian agora, engaging citizens in dialogue about justice, courage, piety, and the good life — always professing his own ignorance as the beginning of wisdom. He was convicted of impiety and corrupting the youth of Athens and sentenced to death by hemlock. His trial and calm acceptance of death, recorded in Plato's Apology and Phaedo, made him the archetype of the philosopher who values truth above personal safety."
        },
        {
          "id": "philosophy-101-l02-c2",
          "title": "Plato's Theory of Forms",
          "content": "Plato (428–348 BCE) argued that the physical world we perceive through our senses is merely a shadow of a higher, unchanging reality — the world of Forms or Ideas. The Form of Justice, the Form of Beauty, and the Form of the Good exist eternally and perfectly; particular just acts or beautiful objects are imperfect copies that 'participate' in these Forms. In the Allegory of the Cave (Republic, Book VII), prisoners chained in a cave see only shadows on the wall and mistake them for reality. The philosopher is one who escapes the cave, sees the sun (the Form of the Good), and returns to enlighten others — though they may resist."
        },
        {
          "id": "philosophy-101-l02-c3",
          "title": "Aristotle's Metaphysics and the Four Causes",
          "content": "Aristotle (384–322 BCE) was Plato's greatest student but rejected the Theory of Forms as separate from the physical world. In his Metaphysics, Aristotle opens with the declaration that 'all men by nature desire to know,' and notes that 'an indication of this is the delight we take in our senses; for even apart from their usefulness they are loved for themselves.' From sensation comes memory, from memory experience, and from experience the capacity for art and reasoning — 'experience made art, but inexperience luck.' He identified four causes that fully explain any object or event: the material cause (what it is made of), the formal cause (its shape or essence), the efficient cause (what brought it into being), and the final cause (its purpose or telos). Every science, Aristotle argued, 'seeks certain principles and causes for each of its objects' — and metaphysics is the science that investigates being as such, the most universal principles underlying all particular sciences."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l02-f1",
          "front": "The Socratic method (elenchus)",
          "back": "A form of cooperative dialogue in which Socrates asks probing questions to expose contradictions, helping interlocutors refine their beliefs through their own reasoning"
        },
        {
          "id": "philosophy-101-l02-f2",
          "front": "Plato's Theory of Forms",
          "back": "The physical world is an imperfect copy of an eternal, unchanging realm of perfect Forms (Justice, Beauty, the Good). True knowledge is knowledge of these Forms, not of sensory appearances"
        },
        {
          "id": "philosophy-101-l02-f3",
          "front": "Allegory of the Cave",
          "back": "Prisoners see only shadows on a cave wall and mistake them for reality. The philosopher escapes, sees the sun (the Form of the Good), and returns to enlighten others"
        },
        {
          "id": "philosophy-101-l02-f4",
          "front": "Aristotle's four causes",
          "back": "Material (what it's made of), formal (its shape/essence), efficient (what produced it), final (its purpose or telos) — together they fully explain any object or event"
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
          "content": "Deductive reasoning moves from general premises to a specific conclusion that follows necessarily if the premises are true. Aristotle formalised this in the syllogism — the first system of formal logic in Western history. A classic example: All humans are mortal (major premise); Socrates is a human (minor premise); therefore, Socrates is mortal (conclusion). A deductive argument is 'valid' when its conclusion follows logically from its premises, and 'sound' when it is both valid and its premises are actually true. Validity is about logical structure; soundness adds the requirement of truth. Understanding this distinction prevents confusing a well-structured argument with a true one. Aristotle's logical works, collectively called the Organon, dominated Western thought for nearly two thousand years and remain the foundation of formal reasoning."
        },
        {
          "id": "philosophy-101-l04-c2",
          "title": "Inductive Reasoning and Its Limits",
          "content": "Inductive reasoning moves from specific observations to general conclusions. Every swan I have observed is white; therefore, all swans are white. Unlike deduction, induction never guarantees its conclusion — the discovery of black swans in Australia refuted centuries of inductive confidence. David Hume identified the 'problem of induction': we assume the future will resemble the past, but this assumption cannot itself be justified by induction without circularity. Despite this limitation, inductive reasoning is the foundation of scientific method — we form hypotheses from observed patterns and test them, always aware that new evidence may force revision. Karl Popper later proposed falsifiability as the hallmark of science: a theory is scientific not because it can be proved true by induction, but because it makes predictions that could, in principle, be shown false."
        },
        {
          "id": "philosophy-101-l04-c3",
          "title": "Common Logical Fallacies",
          "content": "A logical fallacy is an error in reasoning that undermines an argument's validity. The ad hominem fallacy attacks the person making the argument rather than the argument itself. The straw man fallacy misrepresents an opponent's position to make it easier to refute. The appeal to authority fallacy treats someone's status as proof of a claim's truth. The false dilemma presents only two options when more exist. The slippery slope fallacy claims that one event will inevitably lead to extreme consequences without justification. The post hoc ergo propter hoc fallacy assumes that because one event followed another, the first caused the second. Recognising fallacies is essential to critical thinking — they appear constantly in political rhetoric, advertising, and everyday conversation, and learning to identify them is one of philosophy's most practical gifts."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l04-f1",
          "front": "Valid vs. sound argument",
          "back": "Valid: the conclusion follows logically from the premises. Sound: the argument is valid AND all premises are true. An argument can be valid but unsound if a premise is false"
        },
        {
          "id": "philosophy-101-l04-f2",
          "front": "Syllogism",
          "back": "Aristotle's formal structure of deductive reasoning: a major premise, a minor premise, and a conclusion that follows necessarily — e.g., All A are B; C is A; therefore C is B"
        },
        {
          "id": "philosophy-101-l04-f3",
          "front": "Hume's problem of induction",
          "back": "We cannot justify inferring general laws from particular observations without assuming the future will resemble the past — an assumption that itself requires inductive justification, creating circularity"
        },
        {
          "id": "philosophy-101-l04-f4",
          "front": "Ad hominem fallacy",
          "back": "Attacking the person making an argument rather than addressing the argument itself — e.g., dismissing a scientist's findings because of their personal beliefs"
        }
      ],
      "learningAids": [
        {
          "id": "philosophy-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Aristotle's Nicomachean Ethics asks not 'What should I do?' but 'What kind of person should I be?' The answer centres on eudaimonia — often translated as 'happiness' but better understood as 'human flourishing' or living well and doing well. Eudaimonia is achieved by cultivating virtues: stable character traits like courage, temperance, justice, and practical wisdom (phronesis). Each virtue is a mean between two extremes — courage is the mean between cowardice and recklessness, generosity the mean between prodigality and miserliness. Virtues are developed through practice and habituation, not merely by following rules — just as one becomes a skilled musician by playing, one becomes courageous by performing courageous acts. The virtuous person acts well because virtuous action has become second nature, guided by practical wisdom that discerns the right response in particular circumstances."
        },
        {
          "id": "philosophy-101-l05-c2",
          "title": "Deontological Ethics: Kant's Duty-Based Morality",
          "content": "Immanuel Kant (1724–1804) argued that morality is grounded in reason alone, not consequences, feelings, or character. An action is morally right only if it is done from duty — because it conforms to a rational moral law that any rational being would accept. Kant's supreme principle is the categorical imperative: 'Act only according to that maxim by which you can at the same time will that it should become a universal law.' In other words, before acting, ask whether everyone could consistently act the same way. Lying fails this test: if everyone lied, trust would collapse and lying itself would become impossible. Kant also formulated the principle as: always treat humanity, whether in yourself or others, as an end in itself and never merely as a means to your own purposes. This second formulation grounds the concept of human dignity that underpins modern human-rights discourse."
        },
        {
          "id": "philosophy-101-l05-c3",
          "title": "Utilitarianism: The Greatest Good for the Greatest Number",
          "content": "Utilitarianism, developed by Jeremy Bentham (1748–1832) and refined by John Stuart Mill (1806–1873), judges actions solely by their consequences. The right action is the one that produces the greatest happiness for the greatest number of people. Bentham proposed a 'felicific calculus' to quantify pleasure and pain across seven dimensions: intensity, duration, certainty, propinquity, fecundity, purity, and extent. Mill distinguished higher pleasures (intellectual, aesthetic) from lower pleasures (bodily), arguing that quality of pleasure matters, not just quantity — 'it is better to be Socrates dissatisfied than a fool satisfied.' Critics object that utilitarianism can justify sacrificing an individual's rights for the majority's benefit, raising deep questions about justice and the limits of consequentialist reasoning. Rule utilitarianism partially addresses this by evaluating rules rather than individual acts."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l05-f1",
          "front": "Eudaimonia (Aristotle)",
          "back": "Human flourishing — achieved by cultivating virtues (courage, temperance, justice, practical wisdom) through habitual practice, not by following rules or maximising pleasure"
        },
        {
          "id": "philosophy-101-l05-f2",
          "front": "Categorical imperative (Kant)",
          "back": "'Act only according to that maxim by which you can at the same time will it to become a universal law.' Also: treat humanity always as an end, never merely as a means"
        },
        {
          "id": "philosophy-101-l05-f3",
          "front": "Utilitarianism (Bentham & Mill)",
          "back": "The right action produces the greatest happiness for the greatest number. Mill added that quality of pleasure matters — higher (intellectual) pleasures outweigh lower (bodily) ones"
        },
        {
          "id": "philosophy-101-l05-f4",
          "front": "Virtue as a mean (Aristotle)",
          "back": "Each virtue is a mean between two vices of excess and deficiency — e.g., courage is the mean between cowardice (deficiency) and recklessness (excess)"
        }
      ],
      "learningAids": [
        {
          "id": "philosophy-101-l05-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Niccolò Machiavelli (1469–1527) broke decisively with the classical tradition of idealised princely conduct. For fourteen years he served the Florentine Republic as a diplomat and military organiser, observing firsthand the ruthless statecraft of Cesare Borgia at the courts of France, the Holy Roman Empire, and the papacy. When the Medici family returned to power in 1512, Machiavelli was exiled, and in forced retirement he composed The Prince — a distillation of everything he had learned about how political power is actually acquired and maintained. He insists on examining politics as it actually is rather than as it ought to be: 'many writers have imagined republics and princedoms that have never been seen or known to exist in reality.' He introduces two governing concepts: fortuna — the force of chance, compared to a flooding river — and virtu — not moral virtue but a composite of energy, intelligence, willpower, and decisive action. Fortune governs about half of human affairs, but the prince of great virtu can build 'dykes and channels' to moderate fortune's fury."
        },
        {
          "id": "philosophy-101-l07-c2",
          "title": "Hobbes: The Leviathan and Absolute Sovereignty",
          "content": "Thomas Hobbes (1588–1679) wrote Leviathan in the shadow of the English Civil War, which convinced him that the breakdown of sovereign authority leads inevitably to catastrophic violence. He imagined a 'state of nature' — life without government — and concluded it would be a 'war of all against all' in which life is 'solitary, poor, nasty, brutish, and short.' Rational self-interest drives people to surrender their natural freedom to an absolute sovereign (the Leviathan) in exchange for security and order. This agreement is the social contract. Hobbes argued that the sovereign's power must be undivided and nearly unlimited, because any weakness in authority risks a return to the chaos of the state of nature. Where Machiavelli counselled princes on practical statecraft, Hobbes sought to ground political authority in a systematic philosophical framework derived from the logic of human self-preservation."
        },
        {
          "id": "philosophy-101-l07-c3",
          "title": "Locke: Natural Rights and Limited Government",
          "content": "John Locke (1632–1704) also began from the state of nature but reached radically different conclusions. For Locke, the state of nature is not a war of all against all but a condition governed by natural law, which grants everyone natural rights to life, liberty, and property. People form governments not to escape chaos but to better protect these pre-existing rights through impartial law enforcement. Crucially, political authority is conditional: if a government violates the natural rights it was created to protect, the people have the right — indeed the duty — to revolt and establish a new government. Locke's ideas profoundly influenced the American Declaration of Independence, the French Declaration of the Rights of Man, and the broader tradition of liberal democracy. Where Hobbes justified absolute sovereignty, Locke became the philosopher of constitutional government, separation of powers, consent of the governed, and individual rights."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l07-f1",
          "front": "Machiavelli's virtu and fortuna",
          "back": "Virtu: energy, intelligence, willpower, and decisive action (not moral virtue). Fortuna: chance and circumstance, like a flooding river. The effective prince uses virtu to moderate fortuna's destructive force"
        },
        {
          "id": "philosophy-101-l07-f2",
          "front": "Hobbes: state of nature",
          "back": "Without government, life would be a 'war of all against all' — 'solitary, poor, nasty, brutish, and short.' People rationally surrender freedom to an absolute sovereign for security"
        },
        {
          "id": "philosophy-101-l07-f3",
          "front": "Locke: natural rights",
          "back": "People possess natural rights to life, liberty, and property. Government exists to protect these rights, and the people may revolt if it fails to do so — the philosophical basis of constitutional democracy"
        },
        {
          "id": "philosophy-101-l07-f4",
          "front": "Social contract",
          "back": "An agreement (real or hypothetical) by which individuals surrender some freedom to a political authority in exchange for order and the protection of rights — formulated differently by Hobbes, Locke, and Rousseau"
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
          "content": "Rationalism holds that reason, not sensory experience, is the primary source of knowledge. René Descartes (1596–1650) pioneered the method of radical doubt: he systematically doubted everything that could possibly be false — the senses can deceive, we might be dreaming, an evil demon might be distorting all our perceptions. What survived this doubt? The very act of thinking: 'I think, therefore I am' (cogito ergo sum). From this indubitable foundation, Descartes rebuilt knowledge through reason alone, arguing that certain ideas — such as the ideas of God, infinity, and mathematical truths — are innate, placed in the mind by God, not derived from experience. Rationalists like Descartes, Spinoza, and Leibniz believed that the most important truths can be known through pure thought, independent of sensory observation. Descartes's radical doubt became the methodological starting point of modern philosophy, separating it decisively from medieval scholasticism."
        },
        {
          "id": "philosophy-101-l08-c2",
          "title": "Empiricism: Hume and the Limits of Experience",
          "content": "Empiricism holds that all knowledge ultimately derives from sensory experience. David Hume (1711–1776), the most rigorous of the British empiricists, argued that the mind at birth is a blank slate and that every idea is a faded copy of a sensory impression. Hume pressed this principle to devastating conclusions. Our idea of causation, he argued, is nothing more than a habit of mind — we observe one event regularly followed by another and expect the pattern to continue, but we never perceive any necessary connection between cause and effect. As Hume wrote in his investigation of religion, 'as every enquiry which regards religion is of the utmost importance, there are two questions which challenge our attention: that concerning its foundation in reason, and that concerning its origin in human nature.' This same empirical scrutiny, applied to metaphysics and theology alike, led Hume to conclude that much of traditional philosophy rests on unjustified assumptions that dissolve under careful analysis. Hume's radical empiricism forced later philosophers — above all Kant — to rethink the very foundations of knowledge."
        },
        {
          "id": "philosophy-101-l08-c3",
          "title": "Kant's Synthesis: The Critique of Pure Reason",
          "content": "Immanuel Kant (1724–1804) was awakened from his 'dogmatic slumber' by reading Hume and set out to reconcile rationalism and empiricism in his monumental Critique of Pure Reason (1781). Kant argued that while all knowledge begins with experience, it does not all arise from experience. The mind actively structures raw sensory data through built-in categories — such as space, time, causation, and substance — that are preconditions for any experience at all. These categories are 'synthetic a priori' — they are not derived from experience yet genuinely inform us about the world as we encounter it. We can never know 'things in themselves' (noumena) as they are independent of our perception; we can only know 'things as they appear to us' (phenomena), shaped by the mind's own cognitive architecture. Kant's 'Copernican revolution' in philosophy reconceived the knowing subject as actively constructing experience rather than passively receiving it — a transformation whose influence on subsequent philosophy, psychology, and cognitive science has been incalculable."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l08-f1",
          "front": "Cogito ergo sum (Descartes)",
          "back": "'I think, therefore I am' — the one truth that survives radical doubt. Even if everything else is illusion, the act of doubting proves the existence of the thinking self"
        },
        {
          "id": "philosophy-101-l08-f2",
          "front": "Hume on causation",
          "back": "We never perceive a necessary connection between cause and effect — only a constant conjunction of events. Causation is a mental habit, not an observed fact, challenging the foundations of scientific reasoning"
        },
        {
          "id": "philosophy-101-l08-f3",
          "front": "Rationalism vs. empiricism",
          "back": "Rationalism: reason is the primary source of knowledge (Descartes, Spinoza, Leibniz). Empiricism: all knowledge derives from sensory experience (Locke, Berkeley, Hume)"
        },
        {
          "id": "philosophy-101-l08-f4",
          "front": "Kant: phenomena vs. noumena",
          "back": "Phenomena: things as they appear to us, structured by the mind's categories (space, time, causation). Noumena: things in themselves, beyond the reach of human knowledge"
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
          "content": "Three classical arguments dominate the philosophy of religion. The ontological argument (Anselm, Descartes) reasons that God, defined as the greatest conceivable being, must exist — because a being that exists in reality is greater than one that exists only in the mind. The cosmological argument (Aquinas, Aristotle) argues that every event has a cause, and this chain cannot regress infinitely, so there must be a first uncaused cause — God. The teleological or design argument reasons from the order and complexity of nature to an intelligent designer; as Hume's interlocutor Cleanthes puts it in the Dialogues Concerning Natural Religion, 'the whole frame of nature bespeaks an intelligent author.' Hume subjected all three arguments to devastating criticism through his character Philo, arguing that the idea of a 'necessary being' is incoherent, that causal chains need not terminate in a single cause, and that order in nature might result from natural processes over vast stretches of time rather than from intelligent purpose."
        },
        {
          "id": "philosophy-101-l09-c2",
          "title": "Hume: The Natural History of Religion",
          "content": "In The Natural History of Religion, Hume approaches religion not as a theologian but as a naturalistic psychologist, asking not whether God exists but why humans believe in gods. He argues that polytheism — not monotheism — was the primary religion of humanity. Early humans did not reason from the order of nature to a designer; rather, they personified the unpredictable forces that governed their lives — storms, diseases, harvests — as capricious deities to be appeased through ritual and sacrifice. Monotheism emerged later, not from rational progress but from the psychological tendency to elevate one tribal deity above others in a competitive hierarchy. Hume traces a recurring 'flux and reflux' between polytheism and theism throughout history, comparing religions 'with regard to persecution and toleration,' 'courage or abasement,' and 'reason or absurdity.' He concludes that popular religions of both kinds exert a 'bad influence on morality,' fostering superstition, intolerance, and 'impious conceptions of the divine nature.'"
        },
        {
          "id": "philosophy-101-l09-c3",
          "title": "Existentialism: Freedom, Authenticity, and the Absurd",
          "content": "Existentialism, developed by Kierkegaard, Nietzsche, Heidegger, Sartre, and Camus in the 19th and 20th centuries, places individual existence, freedom, and choice at the centre of philosophy. Søren Kierkegaard (1813–1855) emphasised the 'leap of faith' and the anxiety that accompanies authentic choice, while Friedrich Nietzsche (1844–1900) proclaimed the 'death of God' and challenged humanity to create its own values in a world without transcendent foundations. Jean-Paul Sartre (1905–1980) declared that 'existence precedes essence' — we are not born with a fixed nature or purpose; we create ourselves through our choices, and this radical freedom is inseparable from radical responsibility. Albert Camus (1913–1960) confronted the 'absurd' — the conflict between human desire for meaning and the universe's indifference — and argued that we must imagine Sisyphus happy, embracing life despite its lack of inherent purpose. Existentialism insists on authenticity: living according to one's own self-chosen values rather than conforming to social expectations or retreating into 'bad faith' — Sartre's term for the self-deception of denying one's freedom."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-101-l09-f1",
          "front": "Three classical arguments for God's existence",
          "back": "Ontological (God as greatest conceivable being must exist), cosmological (first uncaused cause), teleological/design (order in nature implies a designer). Hume critiqued all three"
        },
        {
          "id": "philosophy-101-l09-f2",
          "front": "Hume: origin of religion",
          "back": "Polytheism was humanity's primary religion — born from personifying unpredictable natural forces as gods. Monotheism arose later through psychological elevation of one deity, not rational progress"
        },
        {
          "id": "philosophy-101-l09-f3",
          "front": "Sartre: 'Existence precedes essence'",
          "back": "We are not born with a fixed nature. We create ourselves through our choices — this radical freedom entails radical responsibility and existential anxiety"
        },
        {
          "id": "philosophy-101-l09-f4",
          "front": "Camus and the absurd",
          "back": "The absurd is the conflict between our desire for meaning and the universe's indifference. Camus argues we must embrace life despite this — 'one must imagine Sisyphus happy'"
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
