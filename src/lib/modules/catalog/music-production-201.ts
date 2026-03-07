import type { LearningModule } from "@/lib/modules/types";

export const music_production_201_Module: LearningModule = {
  "id": "music-production-201",
  "title": "Music Production Applied Practice",
  "description": "A level 201 curriculum in Music Production that builds practical skills in DAW workflows, sound design, and mixing. Learn to make better creative decisions through hands-on labs and real-world case studies.",
  "subject": "Music",
  "tags": [
    "DAW",
    "Mixing",
    "Sound Design",
    "Audio Engineering",
    "Creative Technology"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Build efficient and repeatable workflows in your Digital Audio Workstation (DAW).",
    "Use a step-by-step process to plan, execute, and critically review your mixes.",
    "Use audio meters and critical listening to make informed mixing decisions.",
    "Identify and fix common problems in your productions, like muddy mixes or weak dynamics.",
    "Explain your creative and technical choices to collaborators and clients.",
    "Develop a personal system for tracking your progress and continuously improving your skills."
  ],
  "lessons": [
    {
      "id": "music-production-201-l01",
      "title": "The Producer's Mindset: Planning for Success",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "music-production-201-l01-a1",
          "type": "image",
          "title": "DAW Project Template",
          "content": "A visual of a well-organized DAW project template, with color-coded tracks for drums, bass, synths, and vocals."
        }
      ],
      "chunks": [
        {
          "id": "music-production-201-l01-c1",
          "kind": "concept",
          "title": "Setting the Stage: Your Project's Blueprint",
          "content": "Great music production starts with a clear plan. Before you even press record, it's vital to define your goals. Are you making a high-energy dance track or a quiet acoustic ballad? Knowing your destination helps you make smart choices from the start. We'll cover how to set up your project, organize your tracks, and establish a clear vocabulary for giving and receiving feedback, ensuring your creative vision stays on track."
        },
        {
          "id": "music-production-201-l01-c2",
          "kind": "concept",
          "title": "Thinking Like an Engineer: Cause and Effect",
          "content": "To master music production, you need to understand not just *what* to do, but *why* you're doing it. This means thinking about signal flow—the path your audio takes. If you add a compressor, how does it affect the vocal? If you add reverb, how does it change the perception of space? We'll explore how to work within your technical limits, like computer processing power, to make intentional choices that serve the song."
        },
        {
          "id": "music-production-201-l01-c3",
          "kind": "recap",
          "title": "Trust Your Ears (and Your Tools)",
          "content": "While music is creative, great production relies on objective evidence. In this lesson, we'll introduce the essential practice of A/B comparison—switching between your mix and a professional reference track to guide your decisions. We'll also cover how to use your DAW's meters (like peak and LUFS) to measure loudness and avoid distortion. Combining what you hear with what you see is the key to reliable, professional-sounding results."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-201-l01-f1",
          "front": "Reference Track",
          "back": "A professionally mixed song you use as a benchmark for your own mix's loudness, dynamics, and tonal balance."
        },
        {
          "id": "music-production-201-l01-f2",
          "front": "Signal Flow",
          "back": "The path an audio signal takes from its source, through effects and processing, to the final output."
        },
        {
          "id": "music-production-201-l01-f3",
          "front": "A/B Comparison",
          "back": "Switching between two audio sources (e.g., your mix and a reference, or processed and unprocessed audio) to make an objective judgment."
        }
      ]
    },
    {
      "id": "music-production-201-l02",
      "title": "DAW Workflow in Action",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "music-production-201-l02-a1",
          "type": "practice",
          "title": "Signal Flow Diagram",
          "content": "An interactive diagram where you can drag and drop effects (EQ, Compressor, Reverb) into a virtual signal chain for a vocal track."
        }
      ],
      "chunks": [
        {
          "id": "music-production-201-l02-c1",
          "kind": "practice",
          "title": "Building Your Production Chain",
          "content": "In this interactive lab, you'll build a production workflow from start to finish. We'll begin by importing audio files, then move on to organizing and color-coding tracks for clarity. You'll learn to apply basic effects like EQ and compression, and set up busses for processing groups of instruments together. This hands-on practice will solidify your understanding of a professional DAW workflow."
        },
        {
          "id": "music-production-201-l02-c2",
          "kind": "recap",
          "title": "Making and Tracking Your Mix Decisions",
          "content": "Every move you make in a mix is a decision. We'll practice using your DAW's notes feature or a simple text file to track key changes and, most importantly, the reason behind them. Documenting choices like 'Boosted vocals at 3kHz to add presence' or 'Cut bass at 200Hz to reduce mud' helps you learn from your successes and mistakes, making you a more intentional and effective producer."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-201-l02-act1",
          "type": "matching_pairs",
          "title": "Effects Chain Order",
          "description": "Drag the audio effects into the correct order for a standard vocal chain.",
          "pairs": [
            {
              "left": "EQ (Subtractive)",
              "right": "Cleans up unwanted frequencies before compression."
            },
            {
              "left": "Compressor",
              "right": "Controls dynamics and adds punch."
            },
            {
              "left": "EQ (Additive)",
              "right": "Shapes the tone and adds character after dynamics are controlled."
            },
            {
              "left": "Reverb/Delay",
              "right": "Adds space and depth, usually last in the chain."
            }
          ]
        },
        {
          "id": "music-production-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Frequency Spectrum Sorting",
          "description": "Sort each instrument into the primary frequency range it occupies.",
          "buckets": [
            "Lows (Sub-bass & Bass)",
            "Mids (Body & Warmth)",
            "Highs (Clarity & Air)"
          ],
          "items": [
            {
              "text": "Kick Drum (Thump)",
              "bucket": "Lows (Sub-bass & Bass)"
            },
            {
              "text": "Snare Drum (Crack)",
              "bucket": "Mids (Body & Warmth)"
            },
            {
              "text": "Lead Vocal (Presence)",
              "bucket": "Mids (Body & Warmth)"
            },
            {
              "text": "Hi-Hats (Sizzle)",
              "bucket": "Highs (Clarity & Air)"
            },
            {
              "text": "Sub Bass Synth",
              "bucket": "Lows (Sub-bass & Bass)"
            }
          ]
        }
      ]
    },
    {
      "id": "music-production-201-l03",
      "title": "Checkpoint 1: Workflow Foundations",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-production-201-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "A simple graphic of a notepad icon, reminding the user to look back at their notes from the first two lessons before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "music-production-201-l03-q1",
          "text": "When starting a new project in your DAW, what is the most effective first step?",
          "skillId": "music-production-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately add reverb to everything"
            },
            {
              "id": "b",
              "text": "Organize, name, and color-code your tracks"
            },
            {
              "id": "c",
              "text": "Turn the master volume all the way up"
            },
            {
              "id": "d",
              "text": "Record all your ideas on a single track"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A well-organized project saves time and prevents confusion later. It's the foundation of a professional workflow."
        },
        {
          "id": "music-production-201-l03-q2",
          "text": "What is the main purpose of using a reference track?",
          "skillId": "music-production-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To copy its melody exactly"
            },
            {
              "id": "b",
              "text": "To check if your song is loud and clear enough compared to a pro track"
            },
            {
              "id": "c",
              "text": "To make your track sound identical to the reference"
            },
            {
              "id": "d",
              "text": "To see if you used the same plugins"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reference tracks provide an objective benchmark for loudness, dynamics, and tonal balance, helping you make better mixing decisions."
        },
        {
          "id": "music-production-201-l03-q3",
          "text": "In a standard effects chain, why does subtractive EQ often come before a compressor?",
          "skillId": "music-production-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "It makes the compressor work harder"
            },
            {
              "id": "b",
              "text": "It doesn't matter what order they are in"
            },
            {
              "id": "c",
              "text": "To remove unwanted frequencies so the compressor only reacts to the good parts of the sound"
            },
            {
              "id": "d",
              "text": "Because the EQ plugin looks better on the left"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Cleaning up the signal with EQ first ensures the compressor isn't triggered by unwanted rumble or harshness, leading to a cleaner, more controlled sound."
        },
        {
          "id": "music-production-201-l03-q4",
          "text": "What does 'A/B comparison' mean in mixing?",
          "skillId": "music-production-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Choosing between two different song ideas"
            },
            {
              "id": "b",
              "text": "Using two computer monitors"
            },
            {
              "id": "c",
              "text": "Quickly switching between two audio sources to hear the difference"
            },
            {
              "id": "d",
              "text": "Asking your two best friends for their opinion"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A/B comparison, like bypassing an effect or switching to a reference track, is a crucial technique for making objective decisions about your sound."
        }
      ]
    },
    {
      "id": "music-production-201-l04",
      "title": "Tools and Techniques: EQ, Compression, and Common Problems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "music-production-201-l04-a1",
          "type": "image",
          "title": "EQ Curve Visualizer",
          "content": "An animation showing how a parametric EQ boosts and cuts frequencies on a spectrum analyzer, with labels for 'mud,' 'harshness,' and 'air'."
        }
      ],
      "chunks": [
        {
          "id": "music-production-201-l04-c1",
          "kind": "concept",
          "title": "Choosing the Right Tool for the Job",
          "content": "Is a vocal too 'boomy' or just not loud enough? Learning to diagnose the problem helps you choose the right tool. In this lesson, we'll explore the fundamental differences between an Equalizer (EQ) and a Compressor. You'll learn when to reach for an EQ to shape an instrument's tone and when to use a compressor to control its dynamics and energy."
        },
        {
          "id": "music-production-201-l04-c2",
          "kind": "example",
          "title": "Using Your Meters: Loudness and Peaks",
          "content": "Your DAW's meters aren't just flashy lights; they are critical tools. We'll learn what Peak, RMS, and LUFS meters tell us about our track's dynamics and overall loudness. Understanding these metrics is essential for avoiding digital clipping (distortion) and ensuring your music translates well across different platforms, from your headphones to streaming services."
        },
        {
          "id": "music-production-201-l04-c3",
          "kind": "recap",
          "title": "Fixing Common Mix Problems",
          "content": "Every producer runs into the same common issues. In this recap, we'll identify and provide clear solutions for frequent mix problems. You'll learn how to fix a 'muddy' mix caused by too much low-mid frequency buildup, tame harsh-sounding cymbals or vocals, and help key elements like the lead vocal cut through a dense arrangement."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-201-l04-f1",
          "front": "Peak Meter",
          "back": "Shows the loudest instantaneous point of your audio signal. Use it to make sure you're not clipping (distorting)."
        },
        {
          "id": "music-production-201-l04-f2",
          "front": "Muddy Mix",
          "back": "A common problem caused by too many instruments competing in the low-mid frequencies (around 200-500 Hz). Often fixed with subtractive EQ."
        },
        {
          "id": "music-production-201-l04-f3",
          "front": "Clipping",
          "back": "Digital distortion caused by a signal that's too loud for the system to handle. It's irreversible and should be avoided."
        }
      ]
    },
    {
      "id": "music-production-201-l05",
      "title": "Case Study: Rescuing a Muddy Mix",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "music-production-201-l05-a1",
          "type": "practice",
          "title": "Before & After Audio",
          "content": "An interactive audio player that lets the user switch between a 'muddy' version of a mix and a 'cleaned up' version, with on-screen notes highlighting the changes made."
        }
      ],
      "chunks": [
        {
          "id": "music-production-201-l05-c1",
          "kind": "practice",
          "title": "Analyzing the Problem Mix",
          "content": "You've been given a mix where the vocals are buried and the low-end is unclear. In this case study, you'll act as the mix engineer. We'll use a spectrum analyzer and our ears to identify the problem frequencies and diagnose what's wrong with the mix. You'll learn to listen critically and pinpoint specific issues that need to be addressed."
        },
        {
          "id": "music-production-201-l05-c2",
          "kind": "recap",
          "title": "Creating a Mix Rescue Plan",
          "content": "Based on your analysis, you will create a step-by-step plan to fix the mix. This isn't about random adjustments; it's about targeted solutions. Your plan might include: 1. Use a high-pass filter on guitars to remove low-end rumble. 2. Cut 300Hz on the synth pad to make space for the vocal. 3. Use sidechain compression on the bass from the kick drum. This exercise teaches you to think strategically about mixing."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-201-l05-act1",
          "type": "scenario_practice",
          "title": "Interactive EQ Challenge",
          "description": "You are given a muddy bass track. Use a virtual EQ to cut the problem frequencies and boost the good ones to make it sit better with the kick drum.",
          "instructions": [
            "Listen to the bass in solo and with the kick drum.",
            "Identify the frequency range where the bass and kick are clashing.",
            "Apply an EQ cut to the bass in that range to create clarity."
          ]
        },
        {
          "id": "music-production-201-l05-act2",
          "type": "matching_pairs",
          "title": "Problem and Solution Matching",
          "description": "Match the common mix problem to its most effective solution.",
          "pairs": [
            {
              "left": "Vocals are buried in the mix",
              "right": "Carve out space with EQ in other instruments around 2-5kHz"
            },
            {
              "left": "The kick drum has no punch",
              "right": "Use a compressor with a slow attack to enhance the transient"
            },
            {
              "left": "The mix sounds dull and lacks excitement",
              "right": "Apply a gentle high-shelf EQ boost to the master bus"
            },
            {
              "left": "The mix sounds too 'busy'",
              "right": "Use panning to create space and separation for each instrument"
            }
          ]
        }
      ]
    },
    {
      "id": "music-production-201-l06",
      "title": "Checkpoint 2: Mixing Techniques",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-production-201-l06-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "A simple graphic of a notepad icon, reminding the user to look back at their notes from lessons 4 and 5 before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "music-production-201-l06-q1",
          "text": "Your mix sounds 'muddy.' Which frequency range is the most likely culprit to investigate with an EQ?",
          "skillId": "music-production-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "10-20 Hz (Subsonic Rumble)"
            },
            {
              "id": "b",
              "text": "200-500 Hz (Low-Mids)"
            },
            {
              "id": "c",
              "text": "5-8 kHz (Presence/Sibilance)"
            },
            {
              "id": "d",
              "text": "15-20 kHz (Air/Brilliance)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A buildup of energy in the 200-500 Hz range from multiple instruments often causes a mix to sound muddy and unclear. Cutting frequencies in this area on instruments like guitars, synths, and even vocals can add clarity."
        },
        {
          "id": "music-production-201-l06-q2",
          "text": "What is the primary function of a compressor in sound design?",
          "skillId": "music-production-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To change the pitch of a sound"
            },
            {
              "id": "b",
              "text": "To add reverb and echo"
            },
            {
              "id": "c",
              "text": "To reduce the dynamic range (the difference between the loudest and quietest parts)"
            },
            {
              "id": "d",
              "text": "To remove unwanted background noise"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A compressor automatically turns down the loudest parts of a signal, reducing the dynamic range. This can make a track sound more consistent, punchy, and controlled."
        },
        {
          "id": "music-production-201-l06-q3",
          "text": "You see your master channel meter turning red and hitting '0 dBFS'. What does this indicate?",
          "skillId": "music-production-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Your mix is finished and ready for release"
            },
            {
              "id": "b",
              "text": "Your computer's CPU is working hard"
            },
            {
              "id": "c",
              "text": "Your audio is clipping, which causes digital distortion"
            },
            {
              "id": "d",
              "text": "You have achieved the perfect volume"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Hitting 0 dBFS (decibels Full Scale) means the signal is at the maximum level the digital system can handle. Going over it causes clipping, an unpleasant-sounding distortion that should be avoided by turning down your tracks."
        },
        {
          "id": "music-production-201-l06-q4",
          "text": "When would you use a high-pass filter (HPF) on an instrument like an acoustic guitar?",
          "skillId": "music-production-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "To make the guitar sound much bassier"
            },
            {
              "id": "b",
              "text": "To remove unnecessary low-frequency rumble and clean up the mix"
            },
            {
              "id": "c",
              "text": "To boost the sparkling high frequencies"
            },
            {
              "id": "d",
              "text": "To add distortion to the guitar"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A high-pass filter cuts out low frequencies below a certain point. On instruments that don't need a lot of low-end, like guitars, vocals, or cymbals, this is a key technique to remove mud and create space for the bass and kick drum."
        }
      ]
    }
  ]
};
