import type { LearningModule } from "@/lib/modules/types";

export const arts_401_Module: LearningModule = {
  "id": "arts-401",
  "title": "Arts Leadership, Curation, and Professional Practice",
  "description": "Expert-level arts curriculum focused on artistic direction, critical frameworks, exhibition curation, audience strategy, and sustainable professional practice across visual and interdisciplinary arts.",
  "subject": "Arts",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "arts",
    "curation",
    "professional-practice"
  ],
  "minAge": 12,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Develop a coherent artistic voice across a body of work",
    "Apply advanced critique frameworks with evidence-based interpretation",
    "Design curatorial narratives for exhibitions and digital showcases",
    "Evaluate ethical, cultural, and contextual dimensions of artistic production",
    "Build professional workflows for portfolio, documentation, and audience engagement",
    "Create strategic project plans balancing creative ambition and practical constraints"
  ],
  "lessons": [
    {
      "id": "arts-401-l01",
      "title": "Artistic Direction and Visual Language Systems",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A diverse group of artists in a bright, modern studio, looking at a wall covered in sketches, color palettes, and material samples, connecting them with red string. Cinematic lighting, highly detailed, Imagen 4.",
      "conceptVideoPrompt": "Time-lapse of an artist's workspace evolving, showing different artworks being created that all share a distinct color palette and thematic motif, demonstrating the emergence of an artistic voice. Veo 3.1, 4k resolution.",
      "chunks": [
        {
          "id": "arts-401-l01-c1",
          "kind": "concept",
          "title": "From Style to Voice",
          "content": "Style is like a favorite outfit that many people can wear, but voice is your own special way of expressing yourself that grows as you create more art. It comes from the choices you make and the meanings behind them. When artists become more experienced, they start to think deeply about how their choices in things like colors, shapes, and ideas connect with each other. Having a consistent voice doesn’t mean making the exact same artwork repeatedly; it means that no matter what medium or style you use, your unique identity and message are clear and recognizable in all your creations."
        },
        {
          "id": "arts-401-l01-c2",
          "kind": "concept",
          "title": "Visual Language Components",
          "content": "Visual language is a fascinating concept that includes several key elements artists use to communicate their ideas. These elements are: compositional rhythm (how we arrange different parts of an artwork), color systems (the colors we select and how they interact), material decisions (choosing the right physical mediums), mark logic (the way we create lines and textures), pacing (the speed at which we present visual information), and narrative framing (how we tell stories through our art). Professionals take careful notes on these choices to keep their projects clear and connected over time."
        },
        {
          "id": "arts-401-l01-c3",
          "kind": "recap",
          "title": "Direction Statements",
          "content": "A strong direction statement acts like a roadmap for an artist, helping them navigate their creative journey. It clearly explains what the artist is exploring in their work, why that exploration is significant, and how the choices they make—like colors, shapes, and materials—support their investigation. This statement is crucial because it not only guides the artist in creating their artwork but also helps them effectively present and share their ideas with others, ensuring the audience engages with the work in meaningful ways."
        }
      ],
      "flashcards": [
        {
          "id": "arts-401-l01-f1",
          "front": "Artistic voice",
          "back": "Distinctive conceptual and formal identity that persists across a body of work."
        },
        {
          "id": "arts-401-l01-f2",
          "front": "Visual language",
          "back": "System of artistic choices (form, color, composition, material, rhythm) that communicates intent."
        },
        {
          "id": "arts-401-l01-f3",
          "front": "Direction statement",
          "back": "A concise articulation of thematic focus, motivations, and formal strategy."
        }
      ],
      "learningAids": [
        {
          "id": "arts-401-l01-a1",
          "type": "image",
          "title": "Voice Mapping Canvas",
          "content": "Framework connecting themes, materials, recurring motifs, and audience effect goals."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-401-l01.png"
    },
    {
      "id": "arts-401-l02",
      "title": "Advanced Critique and Interpretation Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A gallery setting where a diverse group of people of varying ages are closely examining a large abstract painting, pointing at specific details and having a thoughtful discussion. Warm gallery lighting, Imagen 4.",
      "conceptVideoPrompt": "A split-screen showing a close-up of a painting's brushstrokes on one side, and a person writing notes on a clipboard on the other, symbolizing the transition from observation to interpretation. Veo 3.1, smooth motion.",
      "chunks": [
        {
          "id": "arts-401-l02-c1",
          "kind": "concept",
          "title": "Critique as Inquiry",
          "content": "Advanced critique is an important skill that helps us appreciate art more fully. Instead of just expressing whether we like or dislike something, we learn to carefully analyze what we see. This means we look closely at our observations, share our interpretations, and evaluate the artwork based on clear evidence and its context. By doing this, we can engage in meaningful discussions and gain a deeper understanding of the art around us. A good step-by-step approach is to: (1) define the artist's goal, (2) identify visual evidence, (3) explain how the evidence shapes the meaning, and (4) evaluate the final impact."
        },
        {
          "id": "arts-401-l02-c2",
          "kind": "practice",
          "title": "Framework Integration",
          "content": "When we explore a piece of art, it's important to look at it from various perspectives, often called lenses. We can examine the formal aspects (arrangement and colors), the historical context (time and place of creation), the social implications (how it relates to society), and the material choices. Finally, we should consider how different audiences might interpret the piece based on their own backgrounds. Strong critics take the time to compare these different perspectives and clearly explain why they prefer one interpretation over another, encouraging open discussions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-401-l02-act1",
          "type": "sorting_buckets",
          "title": "Critique Evidence Sort",
          "description": "Sort statements into observation, interpretation, or evaluation.",
          "buckets": [
            "Observation",
            "Interpretation",
            "Evaluation"
          ],
          "items": [
            {
              "text": "The work uses three dominant blue tones",
              "bucket": "Observation"
            },
            {
              "text": "The repeated blue suggests emotional distance",
              "bucket": "Interpretation"
            },
            {
              "text": "The composition effectively sustains tension",
              "bucket": "Evaluation"
            },
            {
              "text": "Foreground figures are cropped at the frame edge",
              "bucket": "Observation"
            },
            {
              "text": "Cropping implies instability in perspective",
              "bucket": "Interpretation"
            }
          ]
        },
        {
          "id": "arts-401-l02-act2",
          "type": "scenario_practice",
          "title": "Panel Critique Exercise",
          "description": "Prepare a concise critique for a mixed-experience audience panel.",
          "instructions": [
            "State one evidence-based strength.",
            "State one revision suggestion tied to artist intent.",
            "Ensure your language is accessible to non-experts."
          ]
        }
      ],
      "learningAids": [
        {
          "id": "arts-401-l02-a1",
          "type": "practice",
          "title": "Critique Protocol Card",
          "content": "Observe, Interpret, Evaluate, Recommend - with evidence for each step."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-401-l02.png"
    },
    {
      "id": "arts-401-l03",
      "title": "Checkpoint 1: Voice and Critique",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized glowing checkpoint gate in an art museum, with floating holographic icons representing voice, critique, and visual language. High-tech yet artistic aesthetic, Imagen 4.",
      "conceptVideoPrompt": "A dynamic 3D animation of puzzle pieces coming together to form a complete artwork, symbolizing the integration of artistic voice and critique skills. Veo 3.1, vibrant colors.",
      "questions": [
        {
          "id": "arts-401-l03-q1",
          "text": "Which statement best defines artistic voice?",
          "skillId": "arts-401-skill-voice",
          "options": [
            {
              "id": "a",
              "text": "A single favorite technique used once"
            },
            {
              "id": "b",
              "text": "A recurring conceptual and formal identity across works"
            },
            {
              "id": "c",
              "text": "Only the medium selected"
            },
            {
              "id": "d",
              "text": "Any trend copied from peers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Voice emerges from coherent meaning and formal choices over time."
        },
        {
          "id": "arts-401-l03-q2",
          "text": "In critique practice, which comes first?",
          "skillId": "arts-401-skill-critique",
          "options": [
            {
              "id": "a",
              "text": "Evaluation"
            },
            {
              "id": "b",
              "text": "Interpretation"
            },
            {
              "id": "c",
              "text": "Observation"
            },
            {
              "id": "d",
              "text": "Revision plan"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Grounded critique starts with evidence-based observation."
        },
        {
          "id": "arts-401-l03-q3",
          "text": "A useful direction statement should include:",
          "skillId": "arts-401-skill-voice",
          "options": [
            {
              "id": "a",
              "text": "Only artist biography"
            },
            {
              "id": "b",
              "text": "Theme, motivation, and formal strategy link"
            },
            {
              "id": "c",
              "text": "Only sales goals"
            },
            {
              "id": "d",
              "text": "A list of tools used"
            }
          ],
          "correctOptionId": "b",
          "explanation": "It should connect what is explored, why, and how form supports meaning."
        },
        {
          "id": "arts-401-l03-q4",
          "text": "Which critique claim is most defensible?",
          "skillId": "arts-401-skill-critique",
          "options": [
            {
              "id": "a",
              "text": "I just do not like it"
            },
            {
              "id": "b",
              "text": "It is good because it is popular"
            },
            {
              "id": "c",
              "text": "Repeated vertical compression and muted palette reinforce the work's anxiety theme"
            },
            {
              "id": "d",
              "text": "It looks expensive"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Strong critique ties interpretation to observable formal evidence."
        },
        {
          "id": "arts-401-l03-q5",
          "text": "Why is it important to view art through multiple lenses (formal, historical, social)?",
          "skillId": "arts-401-skill-critique",
          "options": [
            {
              "id": "a",
              "text": "To make the critique process longer"
            },
            {
              "id": "b",
              "text": "To build a well-rounded understanding and avoid bias"
            },
            {
              "id": "c",
              "text": "To prove the artist made a mistake"
            },
            {
              "id": "d",
              "text": "To focus only on the materials used"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using multiple lenses helps critics see the full context and meaning of an artwork."
        }
      ],
      "learningAids": [
        {
          "id": "arts-401-l03-a1",
          "type": "mnemonic",
          "title": "OIER",
          "content": "Observe, Interpret, Evaluate, Recommend."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-401-l03.png"
    },
    {
      "id": "arts-401-l04",
      "title": "Curation, Sequencing, and Exhibition Design",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A curator carefully arranging miniature paintings and sculptures inside a glowing 3D architectural model of a gallery space, planning the exhibition flow. Soft, focused lighting, Imagen 4.",
      "conceptVideoPrompt": "A smooth tracking shot moving through a beautifully curated art exhibition, showing how the placement of artworks creates a visual rhythm and narrative journey for the viewer. Veo 3.1, cinematic lighting.",
      "chunks": [
        {
          "id": "arts-401-l04-c1",
          "kind": "concept",
          "title": "Curatorial Narrative",
          "content": "Curation is a fascinating process that involves making thoughtful decisions about which artworks to include in an exhibition and how to arrange them. By choosing the right pieces and placing them next to each other, curators can create a unique story or message. For example, the same artwork can look and feel very different depending on its surroundings, the lighting used, and the information shared about it. This shows how important curators are in helping us understand and appreciate art in new ways."
        },
        {
          "id": "arts-401-l04-c2",
          "kind": "concept",
          "title": "Spatial and Digital Experience",
          "content": "When we visit a physical exhibition, many things shape our experience. The paths we walk along, the sightlines from different angles, and even the sounds we hear all help us understand the artwork better. In digital exhibitions, how the information is organized is equally important. This includes the quality of the images and how the artwork is revealed to us over time (pacing). In both physical and digital settings, design choices have a massive impact on how much we connect with the art and how well we remember it later."
        },
        {
          "id": "arts-401-l04-c3",
          "kind": "recap",
          "title": "Ethical Curation",
          "content": "Responsible curation means being aware of the context in which art is presented, ensuring that all voices are represented fairly, designing for accessibility, and being sensitive to cultural differences in how art is framed and discussed. This ethical approach helps create a more inclusive and respectful environment for all audiences, ensuring that art spaces are welcoming to everyone."
        }
      ],
      "flashcards": [
        {
          "id": "arts-401-l04-f1",
          "front": "Curatorial narrative",
          "back": "Conceptual storyline created through selection and arrangement of works."
        },
        {
          "id": "arts-401-l04-f2",
          "front": "Adjacency effect",
          "back": "Interpretive shift produced when works are placed near specific other works."
        },
        {
          "id": "arts-401-l04-f3",
          "front": "Accessibility in exhibition design",
          "back": "Designing multiple pathways for engagement, including language, physical, and sensory access."
        }
      ],
      "learningAids": [
        {
          "id": "arts-401-l04-a1",
          "type": "image",
          "title": "Exhibition Flow Blueprint",
          "content": "Template showing entry thesis, section transitions, and closure sequence for curated shows."
        }
      ]
    },
    {
      "id": "arts-401-l05",
      "title": "Professional Practice and Audience Strategy Lab",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "An artist sitting at a sleek desk, organizing a digital portfolio on a large monitor, with physical prints and a notebook neatly arranged beside them. Professional, inspiring atmosphere, Imagen 4.",
      "conceptVideoPrompt": "Over-the-shoulder view of an artist dragging and dropping images into different portfolio folders labeled 'Curator', 'Collector', and 'Collaborator', showing audience adaptation. Veo 3.1, clear interface.",
      "chunks": [
        {
          "id": "arts-401-l05-c1",
          "kind": "concept",
          "title": "Portfolio as Argument",
          "content": "A professional portfolio is not simply a scrapbook filled with random pieces of art; instead, it serves as a carefully organized showcase that makes a strong case for the artist's abilities, the consistency in their work, and their development over time. When creating a portfolio, it is important to thoughtfully choose which artworks to include, how to arrange them, and how to describe each piece. This careful selection should work together to clearly express the artist's individual style and talents."
        },
        {
          "id": "arts-401-l05-c2",
          "kind": "practice",
          "title": "Audience and Platform Fit",
          "content": "When artists share their work, they encounter various audiences, including collectors, curators, educators, and collaborators. Each of these groups has unique interests and needs, which means that artists must tailor their communication to effectively engage with them. For instance, an artist might create different versions of their artist statement or adjust how they document their work to resonate with each audience. By being strategic in their communication, artists can connect more deeply with each audience while staying true to their artistic voice."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-401-l05-act1",
          "type": "matching_pairs",
          "title": "Audience-to-Artifact Match",
          "description": "Match audience types with strongest supporting portfolio artifact.",
          "pairs": [
            {
              "left": "Curator",
              "right": "Cohesive project series with curatorial statement"
            },
            {
              "left": "Collaborator",
              "right": "Process documentation and workflow reliability evidence"
            },
            {
              "left": "Collector",
              "right": "High-quality final work documentation and edition context"
            },
            {
              "left": "Educator/mentor",
              "right": "Reflective growth narrative with iterative studies"
            }
          ]
        },
        {
          "id": "arts-401-l05-act2",
          "type": "scenario_practice",
          "title": "Portfolio Revision Sprint",
          "description": "Prioritize edits before a major submission deadline.",
          "instructions": [
            "Select two high-impact improvements for your portfolio.",
            "Explain what tasks to defer until after the deadline and why.",
            "Ensure your choices align with the specific audience reviewing the submission."
          ]
        }
      ],
      "learningAids": [
        {
          "id": "arts-401-l05-a1",
          "type": "practice",
          "title": "Professional Readiness Checklist",
          "content": "Checklist for documentation quality, statement clarity, sequencing logic, and submission packaging."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-401-l05.png"
    },
    {
      "id": "arts-401-l06",
      "title": "Checkpoint 2: Curation and Practice",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "A glowing digital quiz interface floating in a modern art gallery, with abstract sculptures in the background. Clean, modern design, Imagen 4.",
      "conceptVideoPrompt": "A fast-paced montage of artworks being rearranged on a gallery wall, followed by a checkmark appearing, symbolizing successful curation and practice. Veo 3.1, upbeat rhythm.",
      "questions": [
        {
          "id": "arts-401-l06-q1",
          "text": "Primary function of curatorial sequencing is to:",
          "skillId": "arts-401-skill-curation",
          "options": [
            {
              "id": "a",
              "text": "Randomize viewing to avoid patterns"
            },
            {
              "id": "b",
              "text": "Shape interpretation through order and context"
            },
            {
              "id": "c",
              "text": "Reduce number of artworks only"
            },
            {
              "id": "d",
              "text": "Replace artist intent"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sequence and adjacency directly influence how meaning is constructed."
        },
        {
          "id": "arts-401-l06-q2",
          "text": "Which portfolio approach is strongest for professional review?",
          "skillId": "arts-401-skill-practice",
          "options": [
            {
              "id": "a",
              "text": "All works shown in upload order"
            },
            {
              "id": "b",
              "text": "Curated sequence with concise context and consistent documentation"
            },
            {
              "id": "c",
              "text": "Only social media screenshots"
            },
            {
              "id": "d",
              "text": "No written context provided"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Intentional sequence and context improve reviewer understanding and credibility."
        },
        {
          "id": "arts-401-l06-q3",
          "text": "Which statement best reflects ethical curation practice?",
          "skillId": "arts-401-skill-curation",
          "options": [
            {
              "id": "a",
              "text": "Context is optional if visuals are strong"
            },
            {
              "id": "b",
              "text": "Representation and context framing should be explicit and responsible"
            },
            {
              "id": "c",
              "text": "Audience accessibility is not part of curation"
            },
            {
              "id": "d",
              "text": "Only market value matters"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ethical curation includes context, accessibility, and representation awareness."
        },
        {
          "id": "arts-401-l06-q4",
          "text": "Best reason to maintain multiple statement versions for different audiences?",
          "skillId": "arts-401-skill-practice",
          "options": [
            {
              "id": "a",
              "text": "To change artistic intent each time"
            },
            {
              "id": "b",
              "text": "To preserve core intent while improving communication relevance"
            },
            {
              "id": "c",
              "text": "To avoid all feedback"
            },
            {
              "id": "d",
              "text": "To remove conceptual language"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Audience-adapted framing can improve clarity without losing core meaning."
        },
        {
          "id": "arts-401-l06-q5",
          "text": "What is the strongest indicator of a coherent body of work?",
          "skillId": "arts-401-skill-voice",
          "options": [
            {
              "id": "a",
              "text": "Randomly changing style each piece"
            },
            {
              "id": "b",
              "text": "Recurring conceptual throughline supported by formal consistency"
            },
            {
              "id": "c",
              "text": "Using only one color forever"
            },
            {
              "id": "d",
              "text": "Avoiding reflection and revision"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Coherence comes from sustained intent linked to formal choices across works."
        }
      ],
      "learningAids": [
        {
          "id": "arts-401-l06-a1",
          "type": "mnemonic",
          "title": "VOICE",
          "content": "Vision, Observation, Intent, Context, Evidence."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-401-l06.png"
    },
    {
      "id": "arts-401-l07",
      "title": "Capstone: Curated Body-of-Work Proposal",
      "type": "interactive",
      "duration": 18,
      "lessonImagePrompt": "A comprehensive exhibition proposal laid out on a large wooden table, featuring architectural blueprints, artwork thumbnails, and a typed curatorial statement, illuminated by a warm desk lamp. Imagen 4.",
      "conceptVideoPrompt": "A cinematic zoom-out from a single written thesis statement on a paper, revealing a fully realized 3D gallery exhibition bustling with engaged visitors. Veo 3.1, inspiring tone.",
      "chunks": [
        {
          "id": "arts-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "As part of your capstone project, you will develop a detailed proposal for a curated body of work that showcases your artistic vision. This proposal must include several key components: first, a clear thematic thesis that explains the central idea or message of your exhibition. Next, you should outline the reasoning behind your selection of artworks, detailing why each piece is important to your theme. Additionally, think about how you will arrange the artworks in the exhibition; this is known as the exhibition sequence, and it should create a meaningful flow for your audience. You will also need to devise a strategy for engaging your audience, ensuring they connect with your work on a deeper level. Finally, include a plan for documenting the exhibition and a framework for reflecting on the entire process."
        },
        {
          "id": "arts-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "To achieve a strong submission for your capstone project, it is important to demonstrate clear conceptual coherence, show your curatorial intentions, frame your work ethically, and exhibit practical readiness for professional opportunities. Practical readiness means your proposal includes realistic timelines, clear documentation strategies, and an understanding of the physical or digital space required. These criteria will help ensure that your proposal is well-received, impactful, and ready for real-world application."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-401-l07-act1",
          "type": "scenario_practice",
          "title": "Drafting the Thesis",
          "description": "Write a compelling two-sentence thesis for your proposed exhibition.",
          "instructions": [
            "Identify the core theme or message.",
            "Explain how the selected artworks will communicate this theme to the audience."
          ]
        },
        {
          "id": "arts-401-l07-act2",
          "type": "sorting_buckets",
          "title": "Organizing the Exhibition Flow",
          "description": "Categorize the steps of planning your exhibition sequence.",
          "buckets": [
            "Entry/Introduction",
            "Main Narrative",
            "Conclusion/Reflection"
          ],
          "items": [
            {
              "text": "Placing the most visually striking piece to grab attention",
              "bucket": "Entry/Introduction"
            },
            {
              "text": "Grouping artworks by sub-themes to build the story",
              "bucket": "Main Narrative"
            },
            {
              "text": "Providing a space for audience feedback and thoughts",
              "bucket": "Conclusion/Reflection"
            },
            {
              "text": "Displaying the artist's overarching statement",
              "bucket": "Entry/Introduction"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "arts-401-l07-a1",
          "type": "practice",
          "title": "Curatorial Proposal Template",
          "content": "Template covering thesis, section plan, audience goals, production timeline, and review criteria."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-401-l07.png"
    }
  ]
};
