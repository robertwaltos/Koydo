import type { LearningModule } from "@/lib/modules/types";

export const psychology_101_Module: LearningModule = {
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
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Trace the historical development of psychology from philosophy to modern science.",
    "Describe the structure and function of the nervous system and key brain regions.",
    "Explain how sensory systems transform physical stimuli into perception.",
    "Compare classical conditioning, operant conditioning, and cognitive models of memory.",
    "Analyze the biological and psychological bases of motivation and emotion.",
    "Explain the neuroscience of reward and the role of dopamine in the pleasure system.",
    "Evaluate major personality theories including psychoanalytic, trait, and humanistic approaches.",
    "Identify key principles of social influence, conformity, and deception detection.",
    "Recognize common cognitive biases and their impact on decision-making.",
    "Distinguish major categories of psychological disorders and their diagnostic criteria.",
    "Apply psychological concepts from Freud, Wiseman, Wallenstein, and Ekman to real-world scenarios."
  ],
  "lessons": [
    {
      "id": "psychology-101-l01",
      "title": "The History of Psychology",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the philosophical roots of psychology in ancient and Enlightenment thought.",
        "Describe the founding of experimental psychology by Wilhelm Wundt.",
        "Compare the major early schools: structuralism, functionalism, psychoanalysis, and behaviorism."
      ],
      "chunks": [
        {
          "id": "psychology-101-l01-c1",
          "title": "Philosophical Roots",
          "content": "The roots of psychology trace back to ancient Greece, where philosophers like Plato and Aristotle debated the nature of the mind. Plato believed knowledge is innate, meaning we are born with it. In contrast, Aristotle argued that knowledge is acquired through experience. This classic debate, known as nature versus nurture (or nativism versus empiricism), remains a central theme in psychology.\nFast forward to the 17th century, René Descartes proposed mind-body dualism, the idea that the mind and body are separate entities that interact through the brain's pineal gland. In contrast, John Locke described the mind as a 'tabula rasa' or 'blank slate,' filled by sensory experiences. These philosophical discussions about rationalism versus empiricism laid the groundwork for psychology to emerge as a distinct scientific discipline in the late 19th century, ready to be studied through observation and experimentation.",
          "visualPrompts": [
            "A split-screen image showing a bust of Plato on one side with a brain icon labeled 'Innate Knowledge' and a bust of Aristotle on the other with a book icon labeled 'Learned Experience'.",
            "A simple diagram illustrating Descartes' mind-body dualism, with the mind and body as separate entities connected at the pineal gland.",
            "An animation of a blank slate ('tabula rasa') being filled with images representing sensory experiences."
          ]
        },
        {
          "id": "psychology-101-l01-c2",
          "title": "Birth of Experimental Psychology",
          "content": "In 1879, a pivotal moment occurred when Wilhelm Wundt opened the first psychology laboratory in Leipzig, Germany. This event officially marked psychology's separation from philosophy and its birth as a distinct science. Wundt used a method called introspection, where trained observers reported their own thoughts and feelings to break down conscious experience into its basic elements. His student, Edward Titchener, later named this approach structuralism.\nMeanwhile, at Harvard University, William James introduced a different perspective called functionalism. James argued that psychology should focus on how the mind helps people adapt to their environment, rather than just its components. His influential 1890 textbook, 'The Principles of Psychology,' introduced key concepts like the 'stream of consciousness' and habit formation, which remain relevant today. To further establish the field, G. Stanley Hall, Wundt's first American student, founded the American Psychological Association (APA) in 1892, solidifying psychology's status as a profession.",
          "visualPrompts": [
            "An old photograph or illustration of Wilhelm Wundt's laboratory in Leipzig.",
            "A simple chart comparing Structuralism (What is the mind?) versus Functionalism (What is the mind for?).",
            "An animation depicting a flowing river to represent William James' 'stream of consciousness'."
          ]
        },
        {
          "id": "psychology-101-l01-c3",
          "title": "Psychoanalysis and Behaviorism",
          "content": "Sigmund Freud revolutionized psychology with his theory of psychoanalysis. He proposed that our behavior is driven by unconscious desires, childhood experiences, and internal conflicts. In his 1900 book, 'The Interpretation of Dreams,' Freud argued that dreams are a 'royal road to the unconscious,' revealing hidden wishes. He explained that a dream's hidden meaning (latent content) is disguised as its storyline (manifest content) through processes like condensation and displacement.\nIn stark contrast, John B. Watson launched behaviorism in 1913, arguing that psychology should be the scientific study of observable behavior, rejecting any focus on internal mental states. B. F. Skinner later expanded on these ideas with his theory of operant conditioning, which examined how rewards and punishments shape behavior. This focus on the external dominated psychology for decades until the 1960s, when the cognitive revolution brought renewed interest in studying mental processes like memory and problem-solving, bridging the gap between behavior and the mind.",
          "visualPrompts": [
            "An iceberg diagram illustrating Freud's concept of the conscious, preconscious, and unconscious mind.",
            "A simple animation showing a neutral stimulus (bell) being paired with an unconditioned stimulus (food) to create a conditioned response.",
            "A timeline showing the progression from Psychoanalysis to Behaviorism to the Cognitive Revolution."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l01-f1",
          "front": "Wilhelm Wundt (1879)",
          "back": "Founded the first psychology laboratory in Leipzig, Germany; used introspection to study conscious experience. Considered the father of experimental psychology."
        },
        {
          "id": "psychology-101-l01-f2",
          "front": "Structuralism vs. Functionalism",
          "back": "Structuralism (Wundt/Titchener): Analyze the basic elements of consciousness. Functionalism (James): Study how mental processes help organisms adapt to their environment."
        },
        {
          "id": "psychology-101-l01-f3",
          "front": "Psychoanalysis (Freud)",
          "back": "Theory that unconscious desires and childhood experiences drive behavior. Believed dreams are disguised wish fulfillments that reveal the unconscious mind."
        },
        {
          "id": "psychology-101-l01-f4",
          "front": "Behaviorism (Watson & Skinner)",
          "back": "School of thought that restricts psychology to observable behavior, rejecting introspection. Emphasizes learning through conditioning and reinforcement."
        },
        {
          "id": "psychology-101-l01-f5",
          "front": "Cognitive Revolution (1960s)",
          "back": "A shift away from strict behaviorism toward studying internal mental processes like memory, attention, and problem-solving using scientific methods."
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
        "Describe the structure and function of a neuron, including synaptic transmission.",
        "Identify the major regions of the brain, from the brainstem to the cerebral cortex.",
        "Explain the role of key neurotransmitters like dopamine, serotonin, and GABA in behavior."
      ],
      "chunks": [
        {
          "id": "psychology-101-l02-c1",
          "title": "Neurons and Synaptic Transmission",
          "content": "The nervous system is a complex network of approximately 86 billion specialized cells called neurons. Each neuron connects to thousands of others, forming about 100 trillion synapses in the brain. Neurons have three main parts: dendrites, which receive signals; the cell body (soma), which processes information; and the axon, which transmits signals away. Many axons are covered by a myelin sheath, an insulating layer that speeds up signal transmission through a process called saltatory conduction.\nWhen a neuron is sufficiently stimulated, it fires an action potential—an all-or-nothing electrical impulse that travels down the axon at speeds up to 120 meters per second. When this impulse reaches the axon terminal, it triggers the release of chemical messengers called neurotransmitters into the synapse, a tiny gap between neurons. These neurotransmitters cross the gap and bind to receptors on the next neuron, passing the signal along. This intricate electrochemical process occurs billions of times per second, forming the basis of all thought, feeling, and action.",
          "visualPrompts": [
            "A clear, labeled diagram of a neuron, highlighting the dendrites, cell body, axon, and myelin sheath.",
            "An animation showing an action potential traveling down an axon, with a 'zoom-in' on the synapse to show neurotransmitters being released and binding to receptors.",
            "A side-by-side comparison of a myelinated and unmyelinated axon to illustrate the speed difference of saltatory conduction."
          ]
        },
        {
          "id": "psychology-101-l02-c2",
          "title": "Major Brain Regions",
          "content": "The brain is organized into several key regions. The brainstem, which includes the medulla, pons, and midbrain, controls essential automatic functions like breathing, heart rate, and sleep-wake cycles. Tucked at the back, the cerebellum coordinates voluntary movement, balance, and motor learning. Damage here can cause ataxia, or uncoordinated movement, without affecting cognitive functions.\nThe limbic system, often called the 'emotional brain,' includes the amygdala for processing fear, the hippocampus for forming new memories, and the hypothalamus for regulating basic drives like hunger and thirst. The brain's outer layer, the cerebral cortex, makes up 80% of its mass and is divided into four lobes. The frontal lobe handles planning and personality, the parietal lobe integrates sensory information, the temporal lobe processes sound and language, and the occipital lobe is dedicated to vision. The prefrontal cortex, responsible for impulse control and complex reasoning, doesn't fully mature until around age 25.",
          "visualPrompts": [
            "A 3D rotating model of the human brain, with different regions (brainstem, cerebellum, limbic system, cortex) lighting up as they are described.",
            "A color-coded map of the four lobes of the cerebral cortex, with icons representing their primary functions (e.g., an eye for the occipital lobe, an ear for the temporal lobe).",
            "An infographic showing the developmental timeline of the prefrontal cortex from childhood to young adulthood."
          ]
        },
        {
          "id": "psychology-101-l02-c3",
          "title": "Neurotransmitters and Behavior",
          "content": "Neurotransmitters are the chemical messengers that regulate our mood, thoughts, and actions. Dopamine is central to the brain's reward and pleasure system, released in the nucleus accumbens during the anticipation of a reward, which motivates us to repeat behaviors. Serotonin helps regulate mood, sleep, and appetite; low levels are linked to depression, which is why SSRI medications are prescribed to increase its availability.\nGABA is the brain's main inhibitory neurotransmitter, calming neural activity and reducing anxiety. Medications like benzodiazepines enhance GABA's effects. In contrast, glutamate is the primary excitatory neurotransmitter, essential for learning and memory. Finally, norepinephrine helps control alertness and the 'fight-or-flight' stress response. Imbalances in these neurotransmitter systems are linked to various psychological disorders, and understanding their function is key to developing effective psychiatric treatments.",
          "visualPrompts": [
            "A simple chart listing key neurotransmitters (Dopamine, Serotonin, GABA, Glutamate) with their primary functions and associated disorders.",
            "An animation of a synapse showing how an SSRI works by blocking the reuptake of serotonin, increasing its concentration in the synaptic cleft.",
            "A visual scale showing the balance between inhibitory (GABA) and excitatory (Glutamate) neurotransmitters."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l02-f1",
          "front": "Action Potential",
          "back": "An all-or-nothing electrical impulse that travels down a neuron's axon when its firing threshold is reached. Its speed is enhanced by myelination."
        },
        {
          "id": "psychology-101-l02-f2",
          "front": "Synapse",
          "back": "The tiny junction between two neurons where neurotransmitters are released from the presynaptic terminal and bind to postsynaptic receptors to transmit a signal."
        },
        {
          "id": "psychology-101-l02-f3",
          "front": "Dopamine",
          "back": "A neurotransmitter central to the reward system, motivation, and pleasure. Released in the nucleus accumbens during reward anticipation. Dysregulation is linked to addiction and Parkinson's disease."
        },
        {
          "id": "psychology-101-l02-f4",
          "front": "Four Lobes of the Cerebral Cortex",
          "back": "Frontal (planning, personality), Parietal (sensory integration), Temporal (hearing, language), and Occipital (vision)."
        },
        {
          "id": "psychology-101-l02-f5",
          "front": "Myelin Sheath",
          "back": "A fatty insulating layer around axons that speeds up neural transmission via saltatory conduction. Damage can cause disorders like multiple sclerosis."
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
      "id": "psychology-101-l03",
      "title": "Foundations of Psychology Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of psychology's historical schools of thought.",
        "Recall the structure of neurons and key brain regions.",
        "Identify the functions of major neurotransmitters."
      ],
      "questions": [
        {
          "id": "psychology-101-l03-q1",
          "text": "Who established the first psychology laboratory in 1879, marking the formal beginning of psychology as a science?",
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
          "hint": "Think about which psychologist is specifically associated with Leipzig, Germany, and the formal start of experimental psychology."
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
          "hint": "Consider which neurotransmitter is released in the nucleus accumbens and is linked to motivation."
        },
        {
          "id": "psychology-101-l03-q4",
          "text": "The prefrontal cortex, which does not fully mature until the mid-20s, is primarily responsible for:",
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
          "hint": "Think about which brain region is associated with 'executive functions' and late maturation."
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
        "Distinguish between sensation (detecting stimuli) and perception (interpreting stimuli).",
        "Explain absolute thresholds, difference thresholds (Weber's Law), and signal detection theory.",
        "Describe how Gestalt principles organize raw visual input into coherent perceptions."
      ],
      "chunks": [
        {
          "id": "psychology-101-l04-c1",
          "title": "Sensation vs. Perception",
          "content": "Sensation and perception are two distinct but related processes that shape our experience of the world. Sensation is the initial step, where our sensory receptors detect physical energy from the environment—like light, sound, or pressure. This energy is then converted into neural signals through a process called transduction, translating the world into a language our brain can understand.\nPerception is what happens next: the brain organizes and interprets these neural signals, giving them meaning. For example, your eyes sense light waves, but your brain perceives a smiling face. This distinction is crucial because two people can sense the same stimulus but perceive it differently based on their expectations, past experiences, and even their current mood. Optical illusions like the Necker cube or Rubin's vase perfectly illustrate this, showing that perception is not a passive recording of reality but an active construction created by the brain.",
          "visualPrompts": [
            "A simple flowchart showing Sensation (stimulus -> sensory receptors -> transduction) leading to Perception (brain interpretation).",
            "An animation of the Rubin's vase illusion, morphing between showing two faces and a vase.",
            "An image of the Necker cube, demonstrating how perception can shift without the stimulus changing."
          ]
        },
        {
          "id": "psychology-101-l04-c2",
          "title": "Thresholds and Signal Detection",
          "content": "Psychologists study the limits of our senses using thresholds. The absolute threshold is the minimum amount of a stimulus that can be detected 50% of the time. For example, on a clear, dark night, the human eye can detect a candle flame from 30 miles away. The difference threshold, or just noticeable difference (JND), is the smallest change in a stimulus we can detect. According to Weber's Law, this difference is a constant proportion of the original stimulus; you'd notice the addition of 1 pound to a 10-pound weight, but not to a 100-pound weight.\nSignal Detection Theory expands on this, proposing that detecting a stimulus isn't just about its intensity but also involves the observer's expectations and motivation. For instance, a radiologist looking for a tumor must balance finding a real tumor (a 'hit') against misidentifying healthy tissue (a 'false alarm'). Their decision can be influenced by factors like fatigue or how high the stakes are, showing that perception is a decision-making process.",
          "visualPrompts": [
            "An infographic with real-world examples of absolute thresholds (e.g., a drop of perfume in a large room, a teaspoon of sugar in gallons of water).",
            "A visual representation of Weber's Law using weights of different sizes to show proportional JND.",
            "A 2x2 grid illustrating the outcomes of Signal Detection Theory: Hit, Miss, False Alarm, and Correct Rejection, using the radiologist example."
          ]
        },
        {
          "id": "psychology-101-l04-c3",
          "title": "Gestalt Principles of Perception",
          "content": "Developed by German psychologists in the early 20th century, Gestalt psychology explores how our brains automatically organize sensory information into meaningful wholes. The core idea is that 'the whole is different from the sum of its parts.' Our brains use several principles to achieve this:\n- **Proximity:** We group nearby figures together.\n- **Similarity:** We group similar figures together.\n- **Closure:** We fill in gaps to create a complete, whole object.\n- **Continuity:** We perceive smooth, continuous patterns rather than discontinuous ones.\n- **Figure-Ground:** We organize our perception into a main object (the figure) and its surroundings (the ground).\nThese principles are mental shortcuts that help us make sense of a complex world quickly and efficiently. Optical illusions often work by playing on these automatic organizational rules, tricking our brains into perceiving something that isn't really there.",
          "visualPrompts": [
            "A series of simple diagrams, one for each Gestalt principle, clearly illustrating the concept (e.g., rows of dots for proximity, a mix of circles and squares for similarity).",
            "An animation showing the WWF panda logo to demonstrate the principle of closure.",
            "An image that can be perceived in two ways to illustrate figure-ground, like M.C. Escher's 'Sky and Water'."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l04-f1",
          "front": "Transduction",
          "back": "The process of converting physical stimulus energy (like light or sound waves) into neural signals that the brain can interpret."
        },
        {
          "id": "psychology-101-l04-f2",
          "front": "Absolute Threshold",
          "back": "The minimum intensity of a stimulus that a person can detect 50% of the time."
        },
        {
          "id": "psychology-101-l04-f3",
          "front": "Weber's Law",
          "back": "The principle that the just noticeable difference (JND) between two stimuli is a constant proportion of the original stimulus intensity."
        },
        {
          "id": "psychology-101-l04-f4",
          "front": "Gestalt Principle of Closure",
          "back": "The brain's tendency to fill in missing parts of a figure to perceive it as a complete, familiar shape."
        },
        {
          "id": "psychology-101-l04-f5",
          "front": "Signal Detection Theory",
          "back": "A theory stating that stimulus detection depends on signal strength, background noise, and the observer's psychological state (e.g., expectations, motivation)."
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
        "Compare classical conditioning (Pavlov), operant conditioning (Skinner), and the overjustification effect.",
        "Describe the multi-store (Atkinson-Shiffrin) model of memory and Baddeley's working memory refinement.",
        "Explain how reinforcement schedules, spaced practice, and the testing effect influence learning."
      ],
      "chunks": [
        {
          "id": "psychology-101-l05-c1",
          "title": "Classical and Operant Conditioning",
          "content": "Learning is often explained through conditioning. In classical conditioning, discovered by Ivan Pavlov, a neutral stimulus (like a bell) becomes associated with an unconditioned stimulus (food) that naturally produces a response (salivation). After repeated pairings, the neutral stimulus becomes a conditioned stimulus, triggering a conditioned response on its own. Key concepts include extinction (the fading of the response), spontaneous recovery (its reappearance), and generalization (responding to similar stimuli).\nIn operant conditioning, studied by B. F. Skinner, behavior is shaped by its consequences. Positive reinforcement adds a desirable stimulus to increase a behavior (e.g., praise for good work), while negative reinforcement removes an unpleasant stimulus (e.g., no chores for good grades). Punishment, in contrast, is used to decrease a behavior. Interestingly, research by Richard Wiseman and Mark Lepper revealed the overjustification effect: giving external rewards (like medals) for an activity someone already enjoys can undermine their intrinsic motivation, making them less likely to do it for fun later.",
          "visualPrompts": [
            "A step-by-step animation of Pavlov's dog experiment, clearly labeling the US, UR, NS, CS, and CR at each stage.",
            "A simple 2x2 grid illustrating the principles of operant conditioning: Positive/Negative Reinforcement and Positive/Negative Punishment, with clear examples for each.",
            "A cartoon showing two groups of children drawing: one group gets a medal and later looks bored, the other gets no medal and continues drawing happily, illustrating the overjustification effect."
          ]
        },
        {
          "id": "psychology-101-l05-c2",
          "title": "Memory Systems",
          "content": "The Atkinson-Shiffrin model proposes that memory consists of three stores. Sensory memory is a brief, fleeting snapshot of sensory information (iconic for visual, echoic for auditory). Information we attend to moves to short-term memory (or working memory), which holds about 7 items for 20-30 seconds. Alan Baddeley refined this concept, describing working memory as an active system with components like the phonological loop (for verbal information) and the visuospatial sketchpad (for visual information), managed by a central executive. We can expand its capacity through rehearsal and chunking (grouping items into meaningful units).\nInformation is then encoded into long-term memory, which has a vast, potentially unlimited capacity. It is divided into explicit memory (conscious recall of facts and events) and implicit memory (unconscious skills and habits). The hippocampus is a brain structure crucial for consolidating new explicit memories, as famously demonstrated by the case of patient H.M., who could not form new memories after its removal.",
          "visualPrompts": [
            "A flowchart diagram of the Atkinson-Shiffrin model, showing the flow of information from Sensory Memory to Short-Term Memory to Long-Term Memory, with arrows for attention, encoding, and retrieval.",
            "An animated diagram of Baddeley's working memory model, showing the central executive coordinating the phonological loop and visuospatial sketchpad.",
            "A simple illustration of the brain highlighting the hippocampus and its role in memory formation."
          ]
        },
        {
          "id": "psychology-101-l05-c3",
          "title": "Forgetting and Retrieval",
          "content": "Forgetting is a natural process. Ebbinghaus's forgetting curve shows that we lose most information shortly after learning it, with the rate of forgetting leveling off over time. Often, forgetting is due to retrieval failure: the memory exists but we can't access it without the right cues. Context-dependent memory shows we recall information better in the same environment where we learned it, while state-dependent memory links recall to our internal state (e.g., mood).\nForgetting can also be caused by interference. Proactive interference is when old information hinders the recall of new information, while retroactive interference is when new information makes it hard to recall old information. To combat forgetting, research shows that active retrieval, or testing yourself, is more effective than simply rereading material—a phenomenon known as the testing effect. Furthermore, spaced practice (studying over several sessions) leads to far better long-term retention than cramming (massed practice).",
          "visualPrompts": [
            "A graph showing the steep initial drop and subsequent leveling of the Ebbinghaus forgetting curve.",
            "A simple diagram illustrating proactive interference (Old -> New) and retroactive interference (New -> Old).",
            "A split-screen comparison showing one student cramming for an exam (massed practice) and another studying in short bursts over a week (spaced practice), with a final graph showing better long-term retention for the second student."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l05-f1",
          "front": "Classical Conditioning",
          "back": "A type of learning where a neutral stimulus becomes associated with a meaningful stimulus, eventually triggering a similar response. Discovered by Pavlov."
        },
        {
          "id": "psychology-101-l05-f2",
          "front": "Overjustification Effect",
          "back": "The tendency for extrinsic rewards (like money or medals) to undermine a person's intrinsic motivation for an activity they already enjoy."
        },
        {
          "id": "psychology-101-l05-f3",
          "front": "Hippocampus",
          "back": "A limbic system structure essential for converting short-term memories into long-term explicit memories. Damage can cause anterograde amnesia."
        },
        {
          "id": "psychology-101-l05-f4",
          "front": "Ebbinghaus Forgetting Curve",
          "back": "A graph showing that memory declines rapidly within the first hour after learning, then levels off. Spaced repetition and active retrieval (the testing effect) counteract this decline."
        },
        {
          "id": "psychology-101-l05-f5",
          "front": "Working Memory Capacity",
          "back": "The short-term store holds about 7 ± 2 items for 20–30 seconds. Its capacity can be expanded through chunking (grouping items into meaningful units)."
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
        "Apply knowledge of sensory thresholds and perceptual principles.",
        "Demonstrate understanding of classical and operant conditioning.",
        "Analyze the relationship between reinforcement, motivation, and memory."
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
          "explanation": "Weber's Law shows that the JND is proportional to the stimulus magnitude—heavier objects require larger weight changes to notice a difference.",
          "hint": "Consider whether the JND depends on the size of the original stimulus."
        },
        {
          "id": "psychology-101-l06-q2",
          "text": "In Pavlov's experiment, the bell *before* conditioning is called the:",
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
          "explanation": "Research shows that offering extrinsic rewards for inherently enjoyable activities can reduce intrinsic motivation—people begin performing for the reward rather than for enjoyment.",
          "hint": "Think about what happens when an external reward is added to an already enjoyable activity."
        },
        {
          "id": "psychology-101-l06-q4",
          "text": "Spaced practice is more effective for long-term memory than massed practice (cramming) because it:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increases sensory memory capacity"
            },
            {
              "id": "b",
              "text": "Strengthens retrieval pathways through distributed repetition over time"
            },
            {
              "id": "c",
              "text": "Eliminates the need for the hippocampus"
            },
            {
              "id": "d",
              "text": "Works only for procedural memory"
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
      "title": "Introduction to Psychology Practice Lab",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Summarize a key idea from psychology in one concise statement.",
          "Apply that idea to a realistic scenario and justify your choice.",
          "Reflect on one mistake to avoid in your next attempt."
        ]
      },
      "interactiveActivities": [
        {
          "id": "psychology-101-l07-act1",
          "type": "scenario_practice",
          "title": "Guided Scenario Drill",
          "description": "Work through a realistic prompt, explain your reasoning, and compare your answer with a model approach."
        }
      ],
      "learningAids": [
        {
          "id": "psychology-101-l07-a1",
          "type": "practice",
          "title": "Practice Playbook",
          "content": "Use Explain -> Apply -> Reflect to complete this psychology practice lab with clear reasoning."
        }
      ]
    },
    {
      "id": "psychology-101-l08",
      "title": "Motivation and Emotion",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare drive-reduction, arousal, and incentive theories of motivation.",
        "Explain how the mesolimbic dopamine pathway drives pleasure, reward anticipation, and reinforcement.",
        "Describe the major theories of emotion: James-Lange, Cannon-Bard, and Schachter-Singer two-factor."
      ],
      "chunks": [
        {
          "id": "psychology-101-l08-c1",
          "title": "Theories of Motivation",
          "content": "Motivation is the force that energizes and directs our behavior. Drive-reduction theory, proposed by Clark Hull, suggests that physiological needs (like hunger or thirst) create an internal tension, or drive, that motivates us to restore balance (homeostasis). While this explains basic survival behaviors, it doesn't account for why we seek excitement when our needs are met.\nArousal theory addresses this, proposing that we seek an optimal level of stimulation. Too little arousal leads to boredom, while too much leads to anxiety. The Yerkes-Dodson law states that performance peaks at a moderate level of arousal, especially for complex tasks. Finally, Abraham Maslow's hierarchy of needs organizes motivation into a pyramid. Basic physiological and safety needs must be met before we are motivated by higher-level needs for belonging, esteem, and ultimately, self-actualization—the drive to achieve our full potential.",
          "visualPrompts": [
            "A diagram illustrating drive-reduction theory: Need (e.g., hunger) -> Drive (internal tension) -> Behavior (eating) -> Homeostasis.",
            "A graph showing the inverted U-shape of the Yerkes-Dodson law, plotting performance against arousal level.",
            "An animated pyramid of Maslow's hierarchy of needs, with each level lighting up from bottom to top."
          ]
        },
        {
          "id": "psychology-101-l08-c2",
          "title": "The Pleasure Instinct and Reward Systems",
          "content": "Neuroscience reveals that pleasure is an evolutionary mechanism for survival. The brain's core reward circuit is the mesolimbic dopamine pathway. When we encounter rewarding stimuli—like tasty food, social connection, or new experiences—this pathway releases the neurotransmitter dopamine, signaling that the experience is good and should be repeated. As neuroscientist Gene Wallenstein explains, this 'pleasure instinct' evolved to motivate our ancestors to seek high-calorie food and form social bonds.\nInterestingly, research shows that dopamine surges more strongly in *anticipation* of a reward than from the reward itself. This is why the pursuit of a goal can be more exciting than its achievement. Unpredictable rewards, like those in slot machines or video games, are particularly powerful because they keep the dopamine system highly engaged. Understanding this system helps explain motivation, learning, and the mechanisms of addiction.",
          "visualPrompts": [
            "A simplified diagram of the brain highlighting the mesolimbic dopamine pathway, showing the connection from the VTA to the nucleus accumbens.",
            "A graph comparing dopamine levels, showing a higher spike during 'Reward Anticipation' than during 'Reward Received'.",
            "An animation of a slot machine, with dopamine icons being released in the brain each time the user pulls the lever, illustrating unpredictable rewards."
          ]
        },
        {
          "id": "psychology-101-l08-c3",
          "title": "Theories of Emotion",
          "content": "How do we experience emotion? The James-Lange theory argues that our body's physiological response comes first, and our emotion is our awareness of that response. In short: 'We feel afraid because we tremble.' The Cannon-Bard theory counters this, stating that the physiological response and the emotional experience occur simultaneously and independently. Your brain signals your body to react and your mind to feel fear at the same time.\nSchachter and Singer's two-factor theory offers a middle ground: emotion requires both physiological arousal and a cognitive label. We experience a general state of arousal, and then we interpret that arousal based on the context. A racing heart at a rock concert is labeled 'excitement,' while the same feeling in a dark alley is labeled 'fear.' Research by Sonja Lyubomirsky supports the importance of interpretation, showing that happiness depends less on our circumstances and more on how we think about them.",
          "visualPrompts": [
            "A simple flowchart for each theory of emotion. James-Lange: Stimulus -> Arousal -> Emotion. Cannon-Bard: Stimulus -> Arousal + Emotion (simultaneously). Two-Factor: Stimulus -> Arousal + Cognitive Label -> Emotion.",
            "A split-screen cartoon showing a person with a racing heart. On one side, they are at a concert and smiling ('Excitement'). On the other, they are in a dark alley and look scared ('Fear').",
            "An infographic summarizing Sonja Lyubomirsky's findings on the components of happiness (e.g., genetics, circumstances, intentional activities)."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l08-f1",
          "front": "Yerkes-Dodson Law",
          "back": "The principle that performance increases with arousal up to an optimal point, after which it declines. Moderate arousal is best for complex tasks."
        },
        {
          "id": "psychology-101-l08-f2",
          "front": "Mesolimbic Dopamine Pathway",
          "back": "The brain's core reward circuit. Dopamine surges in this pathway, especially during reward anticipation, reinforce survival-relevant behaviors."
        },
        {
          "id": "psychology-101-l08-f3",
          "front": "Schachter-Singer Two-Factor Theory",
          "back": "The theory that emotion is the result of physiological arousal plus a cognitive label. The same arousal can be interpreted as different emotions depending on the context."
        },
        {
          "id": "psychology-101-l08-f4",
          "front": "Maslow's Hierarchy of Needs",
          "back": "A pyramid model of motivation where basic needs (physiological, safety) must be met before higher-level needs (belonging, esteem, self-actualization) become primary motivators."
        },
        {
          "id": "psychology-101-l08-f5",
          "front": "James-Lange Theory of Emotion",
          "back": "The theory that emotions arise from our perception of our own bodily changes. We feel sad because we cry, not the other way around."
        }
      ]
    },
    {
      "id": "psychology-101-l09",
      "title": "Personality and Abnormal Psychology",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare psychoanalytic, trait, and humanistic approaches to personality.",
        "Explain Freud's structural model (id, ego, superego) and defense mechanisms.",
        "Identify the major categories of psychological disorders using the DSM-5 and the biopsychosocial model."
      ],
      "chunks": [
        {
          "id": "psychology-101-l09-c1",
          "title": "Freud's Psychoanalytic Theory",
          "content": "Sigmund Freud proposed that personality arises from the conflict between three mental structures. The id operates on the pleasure principle, seeking immediate gratification of basic instincts. The superego is our moral compass, representing internalized societal rules and ideals. The ego, operating on the reality principle, mediates the demands of the id, the superego, and the external world.\nWhen this conflict creates anxiety, the ego employs defense mechanisms—unconscious strategies to cope. These include repression (pushing threatening thoughts into the unconscious), projection (attributing one's own unacceptable feelings to others), rationalization (creating logical excuses for behavior), displacement (shifting impulses to a less threatening target), and sublimation (channeling unacceptable urges into socially acceptable activities). Freud also believed that dreams provide a window into the unconscious, where hidden wishes are disguised through symbolism.",
          "visualPrompts": [
            "An animated iceberg diagram showing the id entirely submerged (unconscious), the ego mostly above water (conscious), and the superego spanning both.",
            "A series of short, simple cartoons illustrating different defense mechanisms (e.g., someone angry at their boss yelling at their dog for displacement).",
            "An image of a dream with symbolic elements, with labels explaining their potential hidden meanings according to Freud."
          ]
        },
        {
          "id": "psychology-101-l09-c2",
          "title": "Trait and Humanistic Approaches",
          "content": "In contrast to Freud, trait theory describes personality using stable, measurable characteristics. The most widely accepted model is the Big Five, often remembered by the acronym OCEAN: Openness to experience (curious, creative), Conscientiousness (organized, dependable), Extraversion (sociable, assertive), Agreeableness (cooperative, trusting), and Neuroticism (anxious, emotionally unstable). These traits are partly heritable and tend to be stable over a person's lifetime, though they can shift with major life experiences.\nThe humanistic approach, championed by Carl Rogers and Abraham Maslow, emphasizes personal growth and human potential. Rogers believed that a healthy personality requires unconditional positive regard—being accepted and valued by others without conditions. When people feel they must meet certain conditions to be loved, it can create a gap between their real self and their ideal self, leading to anxiety and incongruence. This perspective focuses on our innate drive toward self-actualization.",
          "visualPrompts": [
            "An infographic of the Big Five (OCEAN) traits, with a slider for each to show it exists on a spectrum (e.g., Introversion to Extraversion).",
            "A visual showing two circles, one for 'Real Self' and one for 'Ideal Self'. In a healthy personality, the circles overlap significantly (congruence); in an unhealthy one, they are far apart (incongruence).",
            "A quote from Carl Rogers or Abraham Maslow about human potential, set against an inspiring background."
          ]
        },
        {
          "id": "psychology-101-l09-c3",
          "title": "Abnormal Psychology",
          "content": "Abnormal psychology studies behaviors that are unusual or problematic. Psychologists often use the 'four Ds' to define abnormality: Deviance (violating social norms), Distress (causing personal suffering), Dysfunction (interfering with daily life), and Danger (posing a risk to self or others). No single criterion is sufficient; context and severity are key.\nThe Diagnostic and Statistical Manual of Mental Disorders (DSM-5) is the standard classification system. It groups disorders into categories like Anxiety Disorders (e.g., generalized anxiety), Mood Disorders (e.g., major depression, bipolar disorder), Psychotic Disorders (e.g., schizophrenia), and Personality Disorders (e.g., borderline personality disorder).\nThe modern biopsychosocial model explains that psychological disorders arise from a complex interplay of biological factors (genetics, brain chemistry), psychological influences (thought patterns, trauma), and social conditions (poverty, discrimination). This integrated approach highlights that effective treatment must address all three areas.",
          "visualPrompts": [
            "An infographic with four icons representing the 'Four Ds' of abnormality (Deviance, Distress, Dysfunction, Danger).",
            "A visual of the DSM-5 cover, with callout boxes listing major disorder categories.",
            "A Venn diagram with three overlapping circles for 'Biological,' 'Psychological,' and 'Social' factors, with 'Mental Health' in the center where they intersect."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l09-f1",
          "front": "Id, Ego, Superego",
          "back": "Freud's structural model of personality: Id (pleasure-seeking drives), Ego (rational mediator with reality), and Superego (internalized moral standards)."
        },
        {
          "id": "psychology-101-l09-f2",
          "front": "Big Five Personality Traits (OCEAN)",
          "back": "The five core dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism."
        },
        {
          "id": "psychology-101-l09-f3",
          "front": "Defense Mechanisms",
          "back": "Unconscious ego strategies used to reduce anxiety, such as repression, projection, and sublimation."
        },
        {
          "id": "psychology-101-l09-f4",
          "front": "Biopsychosocial Model",
          "back": "A framework explaining that psychological disorders are the product of interacting biological, psychological, and social-cultural factors."
        },
        {
          "id": "psychology-101-l09-f5",
          "front": "DSM-5",
          "back": "The Diagnostic and Statistical Manual of Mental Disorders, 5th Edition; the standard classification system for psychological disorders used by mental health professionals."
        }
      ]
    },
    {
      "id": "psychology-101-l10",
      "title": "Social Psychology and Cognitive Biases",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain conformity, obedience, and the bystander effect as demonstrations of situational influence.",
        "Describe how nonverbal cues and cognitive load relate to deception detection.",
        "Identify common cognitive biases that systematically distort judgment and decision-making."
      ],
      "chunks": [
        {
          "id": "psychology-101-l10-c1",
          "title": "Social Influence: Conformity and Obedience",
          "content": "Social psychology examines how situations and other people influence our behavior. In his classic 1951 study, Solomon Asch found that 75% of participants conformed to a group's obviously wrong answer at least once, demonstrating normative social influence—our desire to fit in. We also conform due to informational social influence, looking to others for guidance in ambiguous situations.\nStanley Milgram's 1963 obedience study revealed that a shocking 65% of participants administered what they believed were life-threatening electric shocks to another person simply because an authority figure told them to. This highlights the powerful pressure of obedience to authority. Another powerful situational effect is the bystander effect, where the presence of others discourages an individual from intervening in an emergency. This is due to a diffusion of responsibility, where each person assumes someone else will help, leading to inaction.",
          "visualPrompts": [
            "An illustration of Asch's line experiment, showing a participant looking conflicted as a group of actors gives the wrong answer.",
            "A simplified graph showing the high percentage of participants who administered the maximum shock in Milgram's experiment.",
            "A cartoon strip showing a person in need of help on a crowded street, with thought bubbles from bystanders saying 'Someone else will help,' illustrating diffusion of responsibility."
          ]
        },
        {
          "id": "psychology-101-l10-c2",
          "title": "Deception Detection and Nonverbal Communication",
          "content": "Despite our confidence, most people—including trained professionals—detect lies with only about 54% accuracy, barely better than chance. According to researcher David Craig, there is no single 'Pinocchio's nose' for lying. Instead of relying on myths like lack of eye contact, effective deception detection involves establishing a person's behavioral baseline—how they act when telling the truth—and then looking for deviations from it.\nCues to deception often relate to cognitive load, as lying is mentally taxing. Liars may take longer to respond, provide fewer details, or tell inconsistent stories. Paul Ekman's research on microexpressions—brief, involuntary facial expressions that last only a fraction of a second—shows that true emotions can 'leak' out, even when a person tries to conceal them. Spotting these clusters of cues, rather than a single sign, is the key to more accurate detection.",
          "visualPrompts": [
            "A large '54%' statistic on screen with icons of police officers, judges, and therapists to emphasize the difficulty of lie detection.",
            "A split-screen video showing a person's 'baseline' behavior (calm, detailed) versus their 'deceptive' behavior (hesitant, fidgeting).",
            "An animation of a face showing a neutral expression, which then flashes a 'microexpression' of fear for a split second before returning to neutral."
          ]
        },
        {
          "id": "psychology-101-l10-c3",
          "title": "Cognitive Biases and Heuristics",
          "content": "Our brains use mental shortcuts, or heuristics, to make quick judgments, but these can lead to systematic errors in thinking called cognitive biases. The confirmation bias is our tendency to seek out and favor information that confirms our existing beliefs, which can lead to echo chambers. The availability heuristic causes us to overestimate the likelihood of events that are easily recalled, such as dramatic news stories about plane crashes, making us think flying is more dangerous than driving.\nThe anchoring effect occurs when we rely too heavily on the first piece of information offered when making decisions. Finally, the fundamental attribution error is our tendency to overemphasize personality traits to explain others' behavior (e.g., 'He's a rude driver') while attributing our own behavior to the situation ('I was in a hurry'). Awareness of these biases is the first step toward making more rational, evidence-based decisions.",
          "visualPrompts": [
            "An animation of a person inside an 'echo chamber,' where only information confirming their beliefs can get in.",
            "A visual comparison of a shark and a coconut, with statistics showing coconuts cause more deaths per year, illustrating the availability heuristic.",
            "A cartoon showing two drivers. One cuts the other off, and the victim thinks 'What a jerk!' Later, the victim cuts someone else off and thinks 'I'm late for a meeting!' This illustrates the fundamental attribution error."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "psychology-101-l10-f1",
          "front": "Asch Conformity Experiment",
          "back": "Demonstrated that people will often conform to a group's incorrect answer due to normative social pressure (the desire to be accepted)."
        },
        {
          "id": "psychology-101-l10-f2",
          "front": "Fundamental Attribution Error",
          "back": "The tendency to overemphasize personality traits and underestimate situational factors when explaining the behavior of others."
        },
        {
          "id": "psychology-101-l10-f3",
          "front": "Confirmation Bias",
          "back": "The tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs."
        },
        {
          "id": "psychology-101-l10-f4",
          "front": "Microexpressions",
          "back": "Brief, involuntary facial expressions (lasting ~1/25th of a second) that can reveal concealed emotions. Studied by Paul Ekman."
        },
        {
          "id": "psychology-101-l10-f5",
          "front": "Availability Heuristic",
          "back": "A mental shortcut where people judge the probability of an event by how easily examples come to mind. Vivid or recent events are often overestimated."
        }
      ]
    },
    {
      "id": "psychology-101-l11",
      "title": "Mastery Quiz: Introduction to Psychology",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Synthesize concepts across all introductory psychology topics.",
        "Apply psychological theories to novel scenarios.",
        "Analyze connections between neuroscience, behavior, and social influence."
      ],
      "questions": [
        {
          "id": "psychology-101-l11-q1",
          "text": "According to Freud, the process by which the hidden, unconscious meaning of a dream is transformed into its remembered storyline involves:",
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
          "explanation": "Freud described 'dream-work' mechanisms—condensation (combining elements), displacement (shifting emotional significance), and symbolism—that disguise unconscious wishes (latent content) into the dream's manifest storyline.",
          "hint": "Recall Freud's specific 'dream-work' processes described in The Interpretation of Dreams."
        },
        {
          "id": "psychology-101-l11-q2",
          "text": "Neuroscience research shows that dopamine release in the mesolimbic pathway responds most strongly to:",
          "skillId": "psychology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The consumption of the reward itself"
            },
            {
              "id": "b",
              "text": "The anticipation of a potential reward"
            },
            {
              "id": "c",
              "text": "The removal of a negative stimulus"
            },
            {
              "id": "d",
              "text": "A state of low arousal or relaxation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Research on reward circuitry shows dopamine surges most during the anticipation of a reward, not during its consumption. This explains why the pursuit of a goal is often more exciting than its attainment.",
          "hint": "Think about when dopamine activity peaks—before or after receiving a reward."
        },
        {
          "id": "psychology-101-l11-q3",
          "text": "In Milgram's original obedience study, approximately what percentage of participants delivered the maximum shock level under the experimenter's orders?",
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
          "hint": "Remember the specific, and surprisingly high, percentage from Milgram's original obedience experiment."
        },
        {
          "id": "psychology-101-l11-q4",
          "text": "The biopsychosocial model explains psychological disorders as being:",
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
              "text": "The result of an interaction between biological, psychological, and social factors"
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
          "id": "psychology-101-l11-q5",
          "text": "According to modern research on deception detection, the most reliable method is to look for:",
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
              "text": "A single, reliable indicator that guarantees lie detection"
            },
            {
              "id": "d",
              "text": "Whether the person is sweating or fidgeting"
            }
          ],
          "correctOptionId": "b",
          "explanation": "No single cue reliably indicates deception. Effective detection requires establishing a truthful baseline and then identifying clusters of deviation—such as microexpression leakage and signs of increased cognitive load.",
          "hint": "Think about what Craig and Ekman found regarding single cues versus patterns of behavior."
        },
        {
          "id": "psychology-101-l11-q6",
          "text": "The Gestalt principle that explains why we perceive a series of disconnected dashes forming a circle as a complete circle is:",
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
          "explanation": "Closure is the Gestalt principle where the brain fills in missing parts to perceive a complete, familiar shape—even when portions are obscured or absent.",
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
