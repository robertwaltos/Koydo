import type { LearningModule } from "@/lib/modules/types";

export const Psychology101Module: LearningModule = {
  "id": "psychology-101",
  "title": "Introduction to Psychology",
  "description": "A comprehensive introduction to psychology — from its philosophical origins and the structure of the brain to perception, memory, motivation, personality, social influence, abnormal behavior, and cognitive biases. This module draws on foundational works including Freud's psychoanalytic theory, Richard Wiseman's behavioral science research, Gene Wallenstein's neuroscience of pleasure, and David Craig's deception detection methods. Enriched with insights from classic and contemporary psychological literature to provide real-world depth.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "psychology",
    "behavioral-science",
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
    "Trace the historical development of psychology from philosophy to modern science",
    "Describe the structure and function of the nervous system and key brain regions",
    "Explain how sensory systems transform physical stimuli into perception",
    "Compare classical conditioning, operant conditioning, and cognitive models of memory",
    "Analyze the biological and psychological bases of motivation and emotion",
    "Explain the neuroscience of reward and the role of dopamine in the pleasure system",
    "Evaluate major personality theories including psychoanalytic, trait, and humanistic approaches",
    "Identify key principles of social influence, conformity, and deception detection",
    "Recognize common cognitive biases and their impact on decision-making",
    "Distinguish major categories of psychological disorders and their diagnostic criteria",
    "Apply psychological concepts from Freud, Wiseman, Wallenstein, and Ekman to real-world scenarios"
  ],
  "lessons": [
    {
      "id": "psychology-101-l01",
      "title": "The History of Psychology",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the philosophical roots of psychology in ancient and Enlightenment thought",
        "Describe the founding of experimental psychology by Wilhelm Wundt",
        "Compare the major early schools: structuralism, functionalism, psychoanalysis, and behaviorism"
      ],
      "chunks": [
        {
          "id": "psychology-101-l01-c1",
          "title": "Philosophical Roots",
          "content": "Psychology's origins stretch back to ancient Greece. Plato believed knowledge was innate, while Aristotle argued it was acquired through experience — a debate (nativism vs. empiricism) that persists today. In the 17th century, René Descartes proposed mind-body dualism, suggesting the mind and body are separate substances that interact through the pineal gland. John Locke countered with the idea of the mind as a 'tabula rasa' — a blank slate shaped entirely by sensory experience and reflection. These philosophical tensions — rationalism versus empiricism, nature versus nurture — set the stage for psychology to emerge as a distinct experimental science in the late 19th century."
        },
        {
          "id": "psychology-101-l01-c2",
          "title": "Birth of Experimental Psychology",
          "content": "In 1879, Wilhelm Wundt opened the first psychology laboratory in Leipzig, Germany, marking psychology's formal separation from philosophy. Wundt used introspection — trained self-observation of conscious experience — to study the basic elements of thought, a method his student Edward Titchener named structuralism. William James at Harvard countered with functionalism, arguing that psychologists should study how the mind helps organisms adapt to their environment rather than cataloguing its contents. James's 1890 textbook 'The Principles of Psychology' introduced concepts like the stream of consciousness and habit formation that remain influential today. G. Stanley Hall, Wundt's first American student, founded the American Psychological Association (APA) in 1892, institutionalizing psychology as a profession."
        },
        {
          "id": "psychology-101-l01-c3",
          "title": "Psychoanalysis and Behaviorism",
          "content": "Sigmund Freud revolutionized psychology with psychoanalysis, proposing that unconscious desires, childhood experiences, and internal conflicts drive behavior. In 'The Interpretation of Dreams' (1900), Freud argued that dreams are the 'royal road to the unconscious' — disguised wish fulfillments where latent content is transformed into manifest content through processes like condensation and displacement. Meanwhile, John B. Watson's behaviorism (1913) rejected the study of consciousness entirely, insisting psychology should focus only on observable behavior. B. F. Skinner later extended behaviorism through operant conditioning, while the cognitive revolution of the 1960s restored interest in mental processes."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l01-f1",
          "front": "Wilhelm Wundt (1879)",
          "back": "Founded the first psychology laboratory in Leipzig, Germany — used introspection to study conscious experience; considered the father of experimental psychology"
        },
        {
          "id": "psychology-101-l01-f2",
          "front": "Structuralism vs. Functionalism",
          "back": "Structuralism (Wundt/Titchener): analyze the elements of consciousness. Functionalism (James): study how mental processes help organisms adapt"
        },
        {
          "id": "psychology-101-l01-f3",
          "front": "Psychoanalysis (Freud)",
          "back": "Theory that unconscious desires and childhood experiences drive behavior; dreams are disguised wish fulfillments revealing the unconscious"
        },
        {
          "id": "psychology-101-l01-f4",
          "front": "Behaviorism (Watson & Skinner)",
          "back": "School that restricts psychology to observable behavior, rejecting introspection; emphasizes conditioning and reinforcement"
        },
        {
          "id": "psychology-101-l01-f5",
          "front": "Cognitive revolution (1960s)",
          "back": "Shift away from strict behaviorism toward studying internal mental processes — memory, attention, language, problem-solving — using experimental methods"
        }
      ],
      "learningAids": [
        {
          "id": "psychology-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "psychology-101-l02",
      "title": "Brain and Behavior",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the structure and function of a neuron including synaptic transmission",
        "Identify the levels of structural organization in the brain from brainstem to cortex",
        "Explain the role of key neurotransmitters: dopamine, serotonin, GABA, glutamate, and norepinephrine"
      ],
      "chunks": [
        {
          "id": "psychology-101-l02-c1",
          "title": "Neurons and Synaptic Transmission",
          "content": "The nervous system contains roughly 86 billion neurons, each forming thousands of synaptic connections for an estimated 100 trillion synapses in the brain. Each neuron has dendrites (receive signals), a cell body (soma), and an axon (transmits signals). The axon is often insulated by a myelin sheath that speeds transmission via saltatory conduction. When a neuron reaches its threshold, it fires an all-or-nothing electrical impulse called an action potential that travels down the axon at speeds up to 120 m/s. At the synapse, the electrical signal triggers the release of chemical neurotransmitters into the synaptic cleft, where they bind to receptors on the next neuron. This electrochemical process — repeated billions of times per second — is the foundation of all thought, emotion, and behavior."
        },
        {
          "id": "psychology-101-l02-c2",
          "title": "Major Brain Regions",
          "content": "The brainstem (medulla, pons, midbrain) controls vital autonomous functions like breathing, heart rate, and sleep-wake cycles. The cerebellum, located at the back of the brain, coordinates voluntary movement, balance, and motor learning — damage produces ataxia (uncoordinated movement) but leaves cognition intact. The limbic system, sometimes called the 'emotional brain,' includes the amygdala (processing fear, anxiety, and emotional memories), hippocampus (essential for forming new declarative memories), and hypothalamus (regulating hunger, thirst, body temperature, and the endocrine system via the pituitary gland). The cerebral cortex — the brain's wrinkled outer layer comprising about 80% of brain mass — is divided into four lobes: the frontal lobe (planning, decision-making, personality, voluntary movement via the motor cortex), parietal lobe (integrating sensory information, spatial awareness), temporal lobe (auditory processing, language comprehension in Wernicke's area), and occipital lobe (visual processing). The prefrontal cortex, which does not fully mature until approximately age 25, is critical for impulse control, complex reasoning, and anticipating consequences."
        },
        {
          "id": "psychology-101-l02-c3",
          "title": "Neurotransmitters and Behavior",
          "content": "Neurotransmitters are chemical messengers that regulate mood, cognition, and bodily functions. Dopamine is central to the brain's reward and pleasure systems — research shows that anticipation of reward triggers dopamine release in the nucleus accumbens, driving motivation and reinforcement learning. Serotonin regulates mood, sleep, and appetite; low serotonin levels are implicated in depression, which is why selective serotonin reuptake inhibitors (SSRIs) are commonly prescribed antidepressants. GABA is the brain's main inhibitory neurotransmitter, calming neural activity; deficiency is linked to anxiety disorders, and drugs like benzodiazepines enhance GABA's effects. Glutamate is the primary excitatory neurotransmitter, essential for learning and memory. Norepinephrine governs alertness and the fight-or-flight response. Imbalances in these systems underlie many psychological disorders and are key targets for psychiatric medication."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l02-f1",
          "front": "Action potential",
          "back": "An all-or-nothing electrical impulse that travels down a neuron's axon when the firing threshold is reached — speed enhanced by myelination"
        },
        {
          "id": "psychology-101-l02-f2",
          "front": "Synapse",
          "back": "The junction between two neurons where neurotransmitters are released from the presynaptic terminal and bind to postsynaptic receptors"
        },
        {
          "id": "psychology-101-l02-f3",
          "front": "Dopamine",
          "back": "Neurotransmitter central to the reward system, motivation, and pleasure — released in the nucleus accumbens during anticipation of reward; dysregulation linked to addiction and Parkinson's disease"
        },
        {
          "id": "psychology-101-l02-f4",
          "front": "Four lobes of the cerebral cortex",
          "back": "Frontal (planning, personality), Parietal (sensory), Temporal (hearing, language), Occipital (vision)"
        },
        {
          "id": "psychology-101-l02-f5",
          "front": "Myelin sheath",
          "back": "Fatty insulating layer around axons that speeds neural transmission via saltatory conduction — damage causes disorders like multiple sclerosis"
        }
      ],
      "learningAids": [
        {
          "id": "psychology-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "psychology-101-interactive-lab",
      "title": "Introduction to Psychology Practice Lab",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Summarize the key idea from Introduction to Psychology in one concise statement.",
          "Apply that idea to one realistic Psychology scenario and justify your choice.",
          "Reflect on one mistake to avoid in your next attempt."
        ]
      },
      "interactiveActivities": [
        {
          "id": "psychology-101-interactive-lab-act1",
          "type": "scenario_practice",
          "title": "Guided Scenario Drill",
          "description": "Work through a realistic prompt, explain your reasoning, and compare your answer with a model approach."
        }
      ],
      "learningAids": [
        {
          "id": "psychology-101-interactive-lab-a1",
          "type": "practice",
          "title": "Practice Playbook",
          "content": "Use Explain -> Apply -> Reflect to complete this Psychology practice lab with clear reasoning."
        }
      ]
    },
    {
      "id": "psychology-101-l03",
      "title": "Foundations of Psychology Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of psychology's historical schools of thought",
        "Recall the structure of neurons and key brain regions",
        "Identify the functions of major neurotransmitters"
      ],
      "questions": [
        {
          "id": "psychology-101-l03-q1",
          "text": "Who established the first psychology laboratory in 1879?",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sigmund Freud"
            },
            {
              "id": "b",
              "text": "William James"
            },
            {
              "id": "c",
              "text": "Wilhelm Wundt"
            },
            {
              "id": "d",
              "text": "John B. Watson"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Wilhelm Wundt founded the first experimental psychology laboratory in Leipzig, Germany, marking psychology's formal birth as a science.",
          "hint": "Think about which psychologist is specifically associated with Leipzig, Germany."
        },
        {
          "id": "psychology-101-l03-q2",
          "text": "In Freud's theory, the 'latent content' of a dream refers to:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The dream's literal storyline as remembered"
            },
            {
              "id": "b",
              "text": "The hidden unconscious wishes and desires the dream disguises"
            },
            {
              "id": "c",
              "text": "The brain regions active during REM sleep"
            },
            {
              "id": "d",
              "text": "The emotional tone of the dream"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Freud distinguished manifest content (the dream's surface story) from latent content (the underlying unconscious wishes being expressed in disguised form).",
          "hint": "Recall Freud's distinction between what a dream appears to be about and what it actually means."
        },
        {
          "id": "psychology-101-l03-q3",
          "text": "The neurotransmitter most associated with the brain's reward and pleasure system is:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "GABA"
            },
            {
              "id": "b",
              "text": "Serotonin"
            },
            {
              "id": "c",
              "text": "Acetylcholine"
            },
            {
              "id": "d",
              "text": "Dopamine"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Dopamine is released in the nucleus accumbens during reward anticipation and is central to motivation, pleasure, and reinforcement learning.",
          "hint": "Consider which neurotransmitter is released in the nucleus accumbens."
        },
        {
          "id": "psychology-101-l03-q4",
          "text": "The prefrontal cortex is primarily responsible for:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Processing visual information"
            },
            {
              "id": "b",
              "text": "Coordinating balance and movement"
            },
            {
              "id": "c",
              "text": "Planning, decision-making, and impulse control"
            },
            {
              "id": "d",
              "text": "Regulating heart rate and breathing"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The prefrontal cortex handles executive functions like planning, decision-making, and impulse control, and does not fully mature until the mid-20s.",
          "hint": "Think about which brain region is associated with executive functions and late maturation."
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
          "id": "psychology-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "psychology-101-l04",
      "title": "Sensation and Perception",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Distinguish between sensation (detecting stimuli) and perception (interpreting stimuli)",
        "Explain absolute thresholds, difference thresholds (Weber's Law), and signal detection theory",
        "Describe how Gestalt principles organize raw visual input into coherent perception"
      ],
      "chunks": [
        {
          "id": "psychology-101-l04-c1",
          "title": "Sensation vs. Perception",
          "content": "Sensation is the process by which sensory receptors detect physical energy from the environment — light, sound, pressure, chemicals — and convert it into neural signals through transduction. Perception is the brain's interpretation of those signals, giving them meaning and organizing them into coherent experiences. You sense wavelengths of electromagnetic radiation hitting your retina, but you perceive a friend's smiling face. This distinction matters because two people can sense the identical stimulus yet perceive it very differently based on expectations, prior experience, cultural context, and emotional state. Optical illusions and perceptual ambiguities (like the Necker cube or Rubin's vase) exploit this gap, demonstrating that perception is an active construction by the brain, not a passive recording of reality."
        },
        {
          "id": "psychology-101-l04-c2",
          "title": "Thresholds and Signal Detection",
          "content": "The absolute threshold is the minimum stimulus intensity detectable 50% of the time — for example, a candle flame visible 30 miles away on a clear dark night, or a single teaspoon of sugar dissolved in two gallons of water. The difference threshold (just noticeable difference, or JND) is the smallest change in a stimulus that can be detected, governed by Weber's Law: the JND is a constant proportion of the original stimulus intensity (about 1/50 for lifted weights, 1/333 for pitch). Signal Detection Theory moved beyond fixed thresholds, recognizing that detection depends on signal strength, background noise, and the observer's expectations, motivation, and response criteria. A radiologist searching for tumors, for instance, must balance hits (correctly detecting cancer) against false alarms (flagging healthy tissue), and fatigue or expectations shift that balance."
        },
        {
          "id": "psychology-101-l04-c3",
          "title": "Gestalt Principles of Perception",
          "content": "Gestalt psychologists in early 20th-century Germany discovered that the brain organizes sensory input into meaningful wholes rather than processing isolated elements — 'the whole is different from the sum of its parts.' Key organizational principles include: proximity (elements near each other are perceived as belonging together), similarity (elements that share color, shape, or size are grouped), closure (the brain fills in gaps to complete familiar shapes, as with partially obscured letters), continuity (we perceive smooth, continuous patterns rather than abrupt directional changes), and figure-ground segregation (we automatically separate a main object from its background, though ambiguous figures like Rubin's vase can flip between interpretations). Common fate groups elements moving in the same direction together. These principles operate automatically and preconsciously, long before deliberate thought occurs. They explain why optical illusions consistently fool us — they exploit the brain's built-in organizational shortcuts that normally serve us well but can be systematically tricked."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l04-f1",
          "front": "Transduction",
          "back": "The conversion of physical stimulus energy (light, sound, pressure) into neural signals by sensory receptors"
        },
        {
          "id": "psychology-101-l04-f2",
          "front": "Absolute threshold",
          "back": "The minimum stimulus intensity detectable 50% of the time — the faintest sound, dimmest light, lightest touch a person can detect"
        },
        {
          "id": "psychology-101-l04-f3",
          "front": "Weber's Law",
          "back": "The just noticeable difference (JND) is a constant proportion of the original stimulus — e.g., ~1/50 for weight, ~1/333 for pitch; larger stimuli require larger changes to be noticed"
        },
        {
          "id": "psychology-101-l04-f4",
          "front": "Gestalt principle of closure",
          "back": "The brain's tendency to fill in missing parts of a figure to perceive a complete, familiar shape"
        },
        {
          "id": "psychology-101-l04-f5",
          "front": "Signal Detection Theory",
          "back": "Framework stating that stimulus detection depends on signal strength, background noise, and the observer's expectations and response criteria — not just a fixed threshold"
        }
      ],
      "learningAids": [
        {
          "id": "psychology-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "psychology-101-l05",
      "title": "Learning and Memory",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare classical conditioning (Pavlov), operant conditioning (Skinner), and the overjustification effect",
        "Describe the multi-store (Atkinson-Shiffrin) model of memory and Baddeley's working memory refinement",
        "Explain how reinforcement schedules, spaced practice, and the testing effect influence learning"
      ],
      "chunks": [
        {
          "id": "psychology-101-l05-c1",
          "title": "Classical and Operant Conditioning",
          "content": "Ivan Pavlov discovered classical conditioning when his dogs began salivating at the sound of a bell paired with food. A neutral stimulus (bell) becomes a conditioned stimulus that elicits a conditioned response (salivation) after repeated pairing with an unconditioned stimulus (food). Key phenomena include extinction (the conditioned response fades when the CS is presented without the US), spontaneous recovery (the extinguished response briefly returns), and generalization (similar stimuli also trigger the response). B. F. Skinner's operant conditioning focuses on consequences: positive reinforcement (adding a reward) increases behavior, negative reinforcement (removing something unpleasant) also increases behavior, while punishment decreases it. Research highlighted by Richard Wiseman and Stanford psychologist Mark Lepper has shown that intrinsic motivation often outperforms extrinsic rewards — children promised a 'good player' medal for drawing later showed significantly less interest in drawing than those who received no reward, a phenomenon called the overjustification effect."
        },
        {
          "id": "psychology-101-l05-c2",
          "title": "Memory Systems",
          "content": "The Atkinson-Shiffrin model proposes three memory stores arranged sequentially. Sensory memory holds a brief, raw impression of stimuli — iconic memory for vision lasts approximately 0.5 seconds (demonstrated by Sperling's partial-report experiments), while echoic memory for sound persists for about 3–4 seconds. Short-term (working) memory, refined by Alan Baddeley's model into a phonological loop, visuospatial sketchpad, and central executive, holds about 7 ± 2 items for 20–30 seconds; rehearsal and chunking (grouping items into meaningful units) extend retention. Long-term memory has virtually unlimited capacity and duration, subdivided into explicit (declarative) memory — episodic (personal autobiographical events) and semantic (general facts and concepts) — and implicit (procedural) memory for motor skills and habits. The hippocampus is critical for consolidating information from short-term to long-term storage, as demonstrated by the famous case of patient H.M., who lost the ability to form new explicit memories after bilateral hippocampal removal."
        },
        {
          "id": "psychology-101-l05-c3",
          "title": "Forgetting and Retrieval",
          "content": "Forgetting follows Ebbinghaus's forgetting curve: most memory loss occurs within the first hour after learning, then levels off gradually. Retrieval failure explains much forgetting — the information is encoded and stored but cannot be accessed without the right retrieval cue. Context-dependent memory means recall improves when the retrieval environment matches the encoding environment; state-dependent memory extends this to internal states (mood, arousal). Interference also causes forgetting: proactive interference (old memories block new ones) and retroactive interference (new learning disrupts old memories). The testing effect shows that actively retrieving information strengthens memory more than passive re-reading. Spaced practice (distributed over time) produces far stronger long-term retention than massed practice (cramming), a finding replicated across hundreds of behavioral science studies and central to modern evidence-based learning strategies."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l05-f1",
          "front": "Classical conditioning",
          "back": "Learning where a neutral stimulus becomes associated with a meaningful stimulus, eventually triggering a similar response — discovered by Pavlov via salivation in dogs"
        },
        {
          "id": "psychology-101-l05-f2",
          "front": "Overjustification effect",
          "back": "When extrinsic rewards (medals, money) undermine intrinsic motivation — people lose interest in activities they once enjoyed doing for free"
        },
        {
          "id": "psychology-101-l05-f3",
          "front": "Hippocampus",
          "back": "Limbic system structure essential for converting short-term memories into long-term memories — bilateral damage (as in patient H.M.) causes anterograde amnesia"
        },
        {
          "id": "psychology-101-l05-f4",
          "front": "Ebbinghaus forgetting curve",
          "back": "Memory declines rapidly within the first hour after learning, then levels off — spaced repetition and active retrieval practice (the testing effect) counteract this decline"
        },
        {
          "id": "psychology-101-l05-f5",
          "front": "Working memory capacity",
          "back": "Short-term store holds about 7 ± 2 items for 20–30 seconds — capacity can be expanded through chunking (grouping items into meaningful units)"
        }
      ],
      "learningAids": [
        {
          "id": "psychology-101-l05-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "psychology-101-l06",
      "title": "Sensation, Perception & Learning Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Apply knowledge of sensory thresholds and perceptual principles",
        "Demonstrate understanding of classical and operant conditioning",
        "Analyze the relationship between reinforcement, motivation, and memory"
      ],
      "questions": [
        {
          "id": "psychology-101-l06-q1",
          "text": "Weber's Law states that the just noticeable difference (JND) is:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A fixed absolute amount regardless of stimulus intensity"
            },
            {
              "id": "b",
              "text": "A constant proportion of the original stimulus intensity"
            },
            {
              "id": "c",
              "text": "Only applicable to visual stimuli"
            },
            {
              "id": "d",
              "text": "Determined entirely by motivation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Weber's Law shows that the JND is proportional to the stimulus magnitude — heavier objects require larger weight changes to notice a difference.",
          "hint": "Consider whether the JND depends on the size of the original stimulus."
        },
        {
          "id": "psychology-101-l06-q2",
          "text": "In Pavlov's experiment, the bell before conditioning is called the:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Conditioned stimulus"
            },
            {
              "id": "b",
              "text": "Unconditioned stimulus"
            },
            {
              "id": "c",
              "text": "Neutral stimulus"
            },
            {
              "id": "d",
              "text": "Conditioned response"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Before conditioning, the bell is a neutral stimulus that does not elicit salivation. After repeated pairing with food, it becomes a conditioned stimulus.",
          "hint": "What is a stimulus called before any learning association has been formed?"
        },
        {
          "id": "psychology-101-l06-q3",
          "text": "The overjustification effect occurs when:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Intrinsic motivation increases after receiving external rewards"
            },
            {
              "id": "b",
              "text": "External rewards undermine a person's intrinsic motivation for an activity"
            },
            {
              "id": "c",
              "text": "Punishment increases the frequency of a behavior"
            },
            {
              "id": "d",
              "text": "Sensory adaptation makes stimuli undetectable"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Research shows that offering extrinsic rewards for inherently enjoyable activities can reduce intrinsic motivation — people begin performing for the reward rather than for enjoyment.",
          "hint": "Think about what happens when an external reward is added to an already enjoyable activity."
        },
        {
          "id": "psychology-101-l06-q4",
          "text": "Spaced practice is more effective than massed practice because:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It increases sensory memory capacity"
            },
            {
              "id": "b",
              "text": "It strengthens retrieval pathways through distributed repetition over time"
            },
            {
              "id": "c",
              "text": "It eliminates the need for the hippocampus"
            },
            {
              "id": "d",
              "text": "It works only for procedural memory"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Distributing study sessions over time forces the brain to repeatedly reconstruct memories, strengthening neural pathways and producing more durable long-term retention.",
          "hint": "Consider which practice schedule forces the brain to reconstruct memories across sessions."
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
      "id": "psychology-101-l07",
      "title": "Motivation and Emotion",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare drive-reduction, arousal, and incentive theories of motivation",
        "Explain how the mesolimbic dopamine pathway drives pleasure, reward anticipation, and reinforcement",
        "Describe the major theories of emotion: James-Lange, Cannon-Bard, and Schachter-Singer two-factor"
      ],
      "chunks": [
        {
          "id": "psychology-101-l07-c1",
          "title": "Theories of Motivation",
          "content": "Motivation is the force that initiates, directs, and sustains behavior toward goals. Drive-reduction theory (Clark Hull) proposes that physiological needs create internal tension (drives) that motivate behavior to restore homeostasis — hunger drives eating, thirst drives drinking. However, this theory cannot explain curiosity, thrill-seeking, or the drive to explore novel environments when all basic needs are met. Arousal theory suggests humans seek an optimal level of stimulation: too little arousal leads to boredom, too much causes anxiety (the Yerkes-Dodson law predicts moderate arousal yields peak performance on complex tasks). Abraham Maslow's hierarchy of needs arranges motivations in a pyramid from basic survival (food, water, safety) through belonging and esteem to self-actualization — the realization of one's full potential. These theories complement rather than replace each other, reflecting that motivation is multi-layered and context-dependent."
        },
        {
          "id": "psychology-101-l07-c2",
          "title": "The Pleasure Instinct and Reward Systems",
          "content": "Neuroscience reveals that pleasure is not a luxury but an evolutionary imperative hardwired into the brain. The mesolimbic dopamine pathway — running from the ventral tegmental area (VTA) to the nucleus accumbens — is the core reward circuit. When we encounter food, social connection, music, or novel experiences, dopamine surges signal that the experience is worth repeating and encode its value for future decision-making. Gene Wallenstein's research on the 'pleasure instinct' demonstrates that this system evolved to reinforce survival behaviors: the same circuits that drove our ancestors to seek calorie-rich food and social bonds now respond to chocolate, adventure, pheromones, and music. Crucially, neuroscientific studies show dopamine responds most strongly to the anticipation of reward, not the reward itself — explaining why the pursuit often feels more exhilarating than the prize, and why unpredictable rewards (like variable-ratio reinforcement in slot machines) are the most addictive."
        },
        {
          "id": "psychology-101-l07-c3",
          "title": "Theories of Emotion",
          "content": "The James-Lange theory proposes that emotions arise from our perception of bodily responses: we feel afraid because we notice our heart racing, not the reverse. The Cannon-Bard theory counters that physiological arousal and emotional experience occur simultaneously and independently — the thalamus sends signals to both the cortex (conscious feeling) and the autonomic nervous system (bodily response) at the same time. Schachter and Singer's two-factor theory integrates both: we experience undifferentiated physiological arousal first, then cognitively label it based on situational context — the same racing heart might be labeled 'excitement' at a concert or 'fear' in a dark alley. Research by Sonja Lyubomirsky at the University of California, reviewing hundreds of studies with over a quarter million participants, shows that happiness is less about external circumstances and more about cognitive interpretation — happy people consistently display more sociable, altruistic, creative, and resilient behavior patterns, and these traits in turn attract further success."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l07-f1",
          "front": "Yerkes-Dodson Law",
          "back": "Performance increases with arousal up to an optimum, then declines — moderate arousal is best for complex tasks, higher arousal for simple tasks"
        },
        {
          "id": "psychology-101-l07-f2",
          "front": "Mesolimbic dopamine pathway",
          "back": "The brain's core reward circuit running from the ventral tegmental area (VTA) to the nucleus accumbens — dopamine surges reinforce survival-relevant behaviors and respond most to reward anticipation"
        },
        {
          "id": "psychology-101-l07-f3",
          "front": "Schachter-Singer two-factor theory",
          "back": "Emotion = physiological arousal + cognitive label — the same arousal can be interpreted as different emotions depending on context"
        },
        {
          "id": "psychology-101-l07-f4",
          "front": "Maslow's hierarchy of needs",
          "back": "Pyramid model of motivation: physiological → safety → love/belonging → esteem → self-actualization — lower needs must be met before higher ones"
        },
        {
          "id": "psychology-101-l07-f5",
          "front": "James-Lange theory of emotion",
          "back": "Emotions arise from perception of bodily changes — we feel afraid because our heart races, not the other way around; challenged by Cannon-Bard and two-factor theories"
        }
      ]
    },
    {
      "id": "psychology-101-l08",
      "title": "Personality Theories and Abnormal Psychology",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare psychoanalytic, trait, and humanistic approaches to personality structure and development",
        "Explain Freud's structural model (id, ego, superego), defense mechanisms, and dream interpretation theory",
        "Identify the major categories of psychological disorders using the DSM-5 and the biopsychosocial model"
      ],
      "chunks": [
        {
          "id": "psychology-101-l08-c1",
          "title": "Freud's Psychoanalytic Theory",
          "content": "Freud proposed that personality emerges from conflict among three psychic structures: the id (primitive drives seeking immediate gratification, operating on the pleasure principle), the ego (the rational mediator that navigates reality using the reality principle), and the superego (internalized moral standards from parents and society that generate guilt when violated). When conflict among these structures creates anxiety, the ego deploys defense mechanisms — repression (pushing threatening thoughts into the unconscious), projection (attributing one's own unacceptable feelings to others), rationalization (constructing logical excuses for irrational behavior), displacement (redirecting emotions toward a safer target), and sublimation (channeling unacceptable urges into socially productive activities). In 'The Interpretation of Dreams,' Freud argued that dreams are the 'royal road to the unconscious': the manifest content (the dream's remembered storyline) disguises latent content (hidden wishes) through dream-work processes of condensation, displacement, and symbolism."
        },
        {
          "id": "psychology-101-l08-c2",
          "title": "Trait and Humanistic Approaches",
          "content": "Trait theory describes personality through stable, measurable dimensions rather than hidden dynamics. The Big Five model (OCEAN) identifies five broad traits: Openness to experience (curiosity, creativity), Conscientiousness (organization, dependability), Extraversion (sociability, assertiveness), Agreeableness (cooperativeness, trust), and Neuroticism (emotional instability, anxiety). These traits are partly heritable (about 40–60% genetic influence based on twin studies) and remain relatively stable across adulthood, though they can shift gradually with major life experiences. In contrast, humanistic psychologists like Carl Rogers and Abraham Maslow rejected both Freud's pessimism and behaviorism's mechanism, emphasizing personal growth and self-actualization. Rogers proposed that unconditional positive regard — warm acceptance without judgment — is essential for healthy personality development, while conditions of worth create incongruence between the real self and the ideal self."
        },
        {
          "id": "psychology-101-l08-c3",
          "title": "Abnormal Psychology",
          "content": "Abnormal behavior is typically defined by four criteria known as the 'four Ds': deviance from cultural norms, distress experienced by the individual, dysfunction in daily life functioning, and danger to self or others. No single criterion is sufficient — context and severity matter. The DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, 5th edition) classifies disorders into categories including anxiety disorders (generalized anxiety disorder, specific phobias, panic disorder, social anxiety disorder), mood disorders (major depressive disorder, bipolar I and II), psychotic disorders (schizophrenia, characterized by hallucinations, delusions, and disorganized thinking), and personality disorders (borderline, antisocial, narcissistic). The biopsychosocial model explains disorders as arising from the interaction of biological vulnerabilities (genetics, neurotransmitter imbalances, brain abnormalities), psychological factors (maladaptive thought patterns, unresolved trauma, learned helplessness), and social influences (poverty, discrimination, social isolation, adverse childhood experiences). No single factor is sufficient — mental illness is always multifactorial, and effective treatment often addresses all three domains."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l08-f1",
          "front": "Id, Ego, Superego",
          "back": "Freud's structural model: Id (pleasure-seeking drives), Ego (rational mediator with reality), Superego (internalized moral standards)"
        },
        {
          "id": "psychology-101-l08-f2",
          "front": "Big Five personality traits (OCEAN)",
          "back": "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism — stable, partly heritable dimensions of personality"
        },
        {
          "id": "psychology-101-l08-f3",
          "front": "Defense mechanisms",
          "back": "Unconscious ego strategies to reduce anxiety — repression (burying threats), projection (attributing own feelings to others), rationalization (logical excuses), displacement (redirecting emotions), sublimation (channeling urges productively)"
        },
        {
          "id": "psychology-101-l08-f4",
          "front": "Biopsychosocial model",
          "back": "Framework explaining psychological disorders as the product of interacting biological, psychological, and social factors"
        },
        {
          "id": "psychology-101-l08-f5",
          "front": "DSM-5 (Diagnostic and Statistical Manual)",
          "back": "Standard classification system for psychological disorders — organizes conditions into categories (anxiety, mood, psychotic, personality disorders) using specific diagnostic criteria"
        }
      ]
    },
    {
      "id": "psychology-101-l09",
      "title": "Social Psychology and Cognitive Biases",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain conformity, obedience, and bystander effects as demonstrations of situational influence on behavior",
        "Describe how nonverbal cues, microexpressions, and cognitive load indicators relate to deception detection",
        "Identify common cognitive biases and heuristics that systematically distort judgment and decision-making"
      ],
      "chunks": [
        {
          "id": "psychology-101-l09-c1",
          "title": "Social Influence: Conformity and Obedience",
          "content": "Solomon Asch's conformity experiments (1951) showed that about 75% of participants conformed to an obviously wrong group answer at least once, demonstrating the power of normative social influence — the desire to be accepted and avoid rejection. Informational social influence also plays a role: in ambiguous situations, people look to others for guidance on correct behavior. Stanley Milgram's obedience studies (1963) revealed that 65% of participants administered what they believed were potentially lethal electric shocks when instructed by an authority figure in a lab coat. These findings expose a troubling truth: situational pressures and perceived authority can override personal morality. The bystander effect, demonstrated by Darley and Latané after the Kitty Genovese case, shows that people are less likely to intervene in emergencies when others are present — responsibility diffuses across the group, and pluralistic ignorance leads each person to assume someone else will act."
        },
        {
          "id": "psychology-101-l09-c2",
          "title": "Deception Detection and Nonverbal Communication",
          "content": "Research on deception detection shows that most people — including police, judges, and therapists — perform only slightly better than chance (about 54%) at spotting lies. David Craig's work on detecting deceit identifies key behavioral clusters that may signal deception: increased self-touching (adaptor gestures), inconsistencies between verbal content and facial microexpressions, narrative changes under repeated questioning, and cognitive load indicators such as longer response latencies and reduced detail in fabricated stories. Importantly, no single cue reliably indicates lying — common beliefs like 'liars avoid eye contact' are largely myths. Effective detection requires establishing a behavioral baseline during truthful conversation and then looking for clusters of deviation when critical topics arise. Paul Ekman's research on microexpressions — brief involuntary facial expressions lasting roughly 1/25th of a second — demonstrates that genuine emotions 'leak' through even when individuals actively try to conceal them, providing trained observers with subtle but meaningful cues."
        },
        {
          "id": "psychology-101-l09-c3",
          "title": "Cognitive Biases and Heuristics",
          "content": "Cognitive biases are systematic errors in thinking that arise from mental shortcuts called heuristics — fast, efficient, but often inaccurate. The confirmation bias leads people to seek, interpret, and remember evidence supporting their existing beliefs while discounting contradictory data, reinforcing echo chambers in both personal life and media consumption. The availability heuristic causes people to overestimate the likelihood of vivid, memorable events — airplane crashes feel more probable than car accidents because media coverage makes them more mentally 'available.' The anchoring effect shows that initial information (even arbitrary numbers) disproportionately influences subsequent judgments: real-estate agents shown a high listing price consistently appraise homes higher, even when they deny being influenced. The fundamental attribution error leads people to overemphasize personality traits and underestimate situational factors when explaining others' behavior, while attributing their own behavior to circumstances. Awareness of these biases does not eliminate them, but metacognitive strategies — pausing to consider alternatives, seeking disconfirming evidence — can reduce their impact on decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l09-f1",
          "front": "Asch conformity experiment",
          "back": "Demonstrated that ~75% of participants conformed to an obviously incorrect group answer at least once due to normative social pressure — the desire to be accepted by the group"
        },
        {
          "id": "psychology-101-l09-f2",
          "front": "Fundamental attribution error",
          "back": "The tendency to overemphasize personality traits and underestimate situational factors when explaining others' behavior"
        },
        {
          "id": "psychology-101-l09-f3",
          "front": "Confirmation bias",
          "back": "The tendency to search for, interpret, and recall information that confirms one's preexisting beliefs while ignoring contradictory evidence"
        },
        {
          "id": "psychology-101-l09-f4",
          "front": "Microexpressions",
          "back": "Brief involuntary facial expressions (~1/25 second) that reveal concealed emotions — studied by Paul Ekman for deception detection"
        },
        {
          "id": "psychology-101-l09-f5",
          "front": "Availability heuristic",
          "back": "Mental shortcut where people judge probability by how easily examples come to mind — vivid, recent, or emotional events are overestimated (e.g., plane crashes vs. car accidents)"
        }
      ]
    },
    {
      "id": "psychology-101-l10",
      "title": "Mastery Quiz: Introduction to Psychology",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Synthesize concepts across all introductory psychology topics",
        "Apply psychological theories to novel scenarios",
        "Analyze connections between neuroscience, behavior, and social influence"
      ],
      "questions": [
        {
          "id": "psychology-101-l10-q1",
          "text": "According to Freud, the process by which latent dream content is transformed into manifest content involves:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Classical conditioning and reinforcement"
            },
            {
              "id": "b",
              "text": "Condensation, displacement, and symbolism"
            },
            {
              "id": "c",
              "text": "The Gestalt principles of perception"
            },
            {
              "id": "d",
              "text": "Retroactive and proactive interference"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Freud described dream-work mechanisms — condensation (combining elements), displacement (shifting emotional significance), and symbolism — that disguise unconscious wishes into the dream's manifest storyline.",
          "hint": "Recall Freud's specific dream-work processes described in The Interpretation of Dreams."
        },
        {
          "id": "psychology-101-l10-q2",
          "text": "Dopamine in the mesolimbic pathway responds most strongly to:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The consumption of the reward itself"
            },
            {
              "id": "b",
              "text": "The anticipation of a reward before it is received"
            },
            {
              "id": "c",
              "text": "Removal of a negative stimulus"
            },
            {
              "id": "d",
              "text": "The absence of any stimulation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Research on reward circuitry shows dopamine surges most during anticipation of reward, not during consumption — explaining why pursuit is often more exciting than attainment.",
          "hint": "Think about when dopamine activity peaks — before or after receiving a reward."
        },
        {
          "id": "psychology-101-l10-q3",
          "text": "In Milgram's obedience study, approximately what percentage of participants delivered the maximum shock level?",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "10%"
            },
            {
              "id": "b",
              "text": "35%"
            },
            {
              "id": "c",
              "text": "65%"
            },
            {
              "id": "d",
              "text": "90%"
            }
          ],
          "correctOptionId": "c",
          "explanation": "About 65% of participants obeyed the experimenter's instructions to deliver the maximum shock, demonstrating the powerful influence of perceived authority on behavior.",
          "hint": "Remember the specific percentage from Milgram's original obedience experiment."
        },
        {
          "id": "psychology-101-l10-q4",
          "text": "The biopsychosocial model explains psychological disorders as:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Purely the result of neurotransmitter imbalances"
            },
            {
              "id": "b",
              "text": "Caused exclusively by childhood trauma"
            },
            {
              "id": "c",
              "text": "The interaction of biological, psychological, and social factors"
            },
            {
              "id": "d",
              "text": "Inherited conditions that cannot be treated"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The biopsychosocial model integrates biological vulnerabilities (genetics, neurochemistry), psychological factors (cognition, trauma), and social influences (poverty, relationships) to explain mental illness.",
          "hint": "Consider which model emphasizes multiple interacting factors rather than a single cause."
        },
        {
          "id": "psychology-101-l10-q5",
          "text": "According to research on deception detection, trained observers primarily look for:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Whether the person avoids eye contact"
            },
            {
              "id": "b",
              "text": "Clusters of behavioral deviations from an established baseline"
            },
            {
              "id": "c",
              "text": "A single reliable indicator that guarantees lie detection"
            },
            {
              "id": "d",
              "text": "Whether the person is sweating"
            }
          ],
          "correctOptionId": "b",
          "explanation": "No single cue reliably indicates deception. Effective detection requires establishing a truthful baseline and identifying clusters of deviation — including adaptor gestures, microexpression leakage, and increased cognitive load.",
          "hint": "Think about what Craig and Ekman found regarding single cues versus patterns of behavior."
        },
        {
          "id": "psychology-101-l10-q6",
          "text": "The Gestalt principle that explains why we perceive a partially hidden circle as complete is:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proximity"
            },
            {
              "id": "b",
              "text": "Similarity"
            },
            {
              "id": "c",
              "text": "Closure"
            },
            {
              "id": "d",
              "text": "Common fate"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Closure is the Gestalt principle where the brain fills in missing parts to perceive a complete, familiar shape — even when portions are obscured or absent.",
          "hint": "Which principle involves the brain 'completing' incomplete figures?"
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 2,
          "analyze": 1
        }
      }
    }
  ]
};
