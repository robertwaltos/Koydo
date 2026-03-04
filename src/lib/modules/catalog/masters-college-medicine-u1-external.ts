import type { LearningModule } from "@/lib/modules/types";

export const MastersCollegeMedicineU1ExternalModule: LearningModule = {
  "id": "masters-college-medicine-u1-external",
  "title": "College Medicine (Master's Level)",
  "description": "College Medicine curriculum from 1 open-source datasets. MMLU (cais/mmlu).",
  "subject": "Science",
  "lessons": [
    {
      "id": "masters-college-medicine-u1-external-l01",
      "title": "College Medicine — Quiz 1",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-83d43ddb6e038a7a",
          "text": "A police officer carries out hundreds of traffic stops every year. When his supervisor is reviewing the officer’s records for the past year, he notices that the officer is equally likely to stop people of various genders, ages, and races. However, he is significantly more likely to write tickets for middle-aged white males with dark hair and eyes. When confronted with this fact, the officer truthfully states that he has no idea why that is, and that it must simply be a coincidence. Unbeknownst to the officer, this behavior is tied to the fact that these men look like his father, with whom he had an abusive relationship as a child. What psychological framework would directly address the unconscious bias in his behavior?",
          "options": [
            {
              "id": "opt-A",
              "text": "Behaviorist"
            },
            {
              "id": "opt-B",
              "text": "Psychoanalytic"
            },
            {
              "id": "opt-C",
              "text": "Cognitive behavioral"
            },
            {
              "id": "opt-D",
              "text": "Humanistic"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-09753a90d628160f",
          "text": "Who set the world record for the mile race in 1886?",
          "options": [
            {
              "id": "opt-A",
              "text": "R Bannister"
            },
            {
              "id": "opt-B",
              "text": "S Coe"
            },
            {
              "id": "opt-C",
              "text": "J DiMaggio"
            },
            {
              "id": "opt-D",
              "text": "WG George"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-febc181eda75fb53",
          "text": "Which of the following statements identifies a chemically based sensory system?\nI. Gustatory system\nII. Auditory system\nIII. Olfactory system",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and III only"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c7219b79fa10191f",
          "text": "A race car attempting to jump a series of 8 buses is set up on a flat track with a ramp at the end. Engineers assigned to the project have determined that, in order to jump the buses, the car must reach a velocity of 130 km/h. If the distance of the track is 50m, at what rate must the car accelerate to reach this velocity?",
          "options": [
            {
              "id": "opt-A",
              "text": "13 m/s^2"
            },
            {
              "id": "opt-B",
              "text": "26 m/s^2"
            },
            {
              "id": "opt-C",
              "text": "7 m/s^2"
            },
            {
              "id": "opt-D",
              "text": "17 m/s^2"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a0adffa3be3970ac",
          "text": "Sauna use, sometimes referred to as \"sauna bathing,\" is characterized by short-term passive exposure to extreme heat. This exposure elicits mild hyperthermia – an increase in the body's core temperature – that induces a thermoregulatory response involving neuroendocrine, cardiovascular, and cytoprotective mechanisms that work together to restore homeostasis and condition the body for future heat stressors… In recent decades, sauna bathing has emerged as a means to increase lifespan and improve overall health, based on compelling data from observational, interventional, and mechanistic studies. Of particular interest are the findings from studies of participants in the Kuopio Ischemic Heart Disease Risk Factor (KIHD) Study, an ongoing prospective population-based cohort study of health outcomes in more than 2,300 middle-aged men from eastern Finland, which identified strong links between sauna use and reduced death and disease… The KIHD findings showed that men who used the sauna two to three times per week were 27 percent less likely to die from cardiovascular-related causes than men who didn't use the sauna.[2] Furthermore, the benefits they experienced were found to be dose-dependent: Men who used the sauna roughly twice as often, about four to seven times per week, experienced roughly twice the benefits – and were 50 percent less likely to die from cardiovascular-related causes.[2] In addition, frequent sauna users were found to be 40 percent less likely to die from all causes of premature death. These findings held true even when considering age, activity levels, and lifestyle factors that might have influenced the men's health.[2]... The KIHD also revealed that frequent sauna use reduced the risk of developing dementia and Alzheimer's disease in a dose-dependent manner. Men who used the sauna two to three times per week had a 66 percent lower risk of developing dementia and a 65 percent lower risk of developing Alzheimer's disease, compared to men who used the sauna only one time per week… The health benefits associated with sauna use extended to other aspects of mental health, as well. Men participating in the KIHD study who used the sauna four to seven times per week were 77 percent less likely to develop psychotic disorders, regardless of the men's dietary habits, socioeconomic status, physical activity, and inflammatory status (as measured by C-reactive protein)…Exposure to high temperature stresses the body, eliciting a rapid, robust response. The skin and core body temperatures increase markedly, and sweating ensues. The skin heats first, rising to 40°C (104°F), and then changes in core body temperature occur, rising slowly from 37°C (98.6°F, or normal) to 38°C (100.4°F) and then rapidly increasing to 39°C (102.2°F)…  Cardiac output, a measure of the amount of work the heart performs in response to the body's need for oxygen, increases by 60 to 70 percent, while the heart rate (the number of beats per minute) increases and the stroke volume (the amount of blood pumped) remains unchanged.[5] During this time, approximately 50 to 70 percent of the body's blood flow is redistributed from the core to the skin to facilitate sweating. The average person loses approximately 0.5 kg of sweat while sauna bathing.[11] Acute heat exposure also induces a transient increase in overall plasma volume to mitigate the decrease in core blood volume. This increase in plasma volume not only provides a reserve source of fluid for sweating, but it also acts like the water in a car's radiator, cooling the body to prevent rapid increases in core body temperature and promoting heat tolerance… Repeated sauna use acclimates the body to heat and optimizes the body's response to future exposures, likely due to a biological phenomenon known as hormesis, a compensatory defense response following exposure to a mild stressor that is disproportionate to the magnitude of the stressor. Hormesis triggers a vast array of protective mechanisms that not only repair cell damage but also provide protection from subsequent exposures to more devastating stressors… The physiological responses to sauna use are remarkably similar to those experienced during moderate- to vigorous-intensity exercise. In fact, sauna use has been proposed as an alternative to exercise for people who are unable to engage in physical activity due to chronic disease or physical limitations.[13]\n\nBased on the article, which of the following statements is the author likely to agree with?",
          "options": [
            {
              "id": "opt-A",
              "text": "Heart surgery patients who cannot run on treadmills may benefit from sauna use."
            },
            {
              "id": "opt-B",
              "text": "Patients on a diet would benefit from sauna use."
            },
            {
              "id": "opt-C",
              "text": "Salt restriction would be equal to sauna use for hypertensive patients."
            },
            {
              "id": "opt-D",
              "text": "Patients with skin conditions may be cured with sauna use."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-eca31aa66474998d",
          "text": "Diisopropylfluorophosphate (DFP) binds to the active site of acetylcholinesterase (ACE) in the synapses of neurons. When DFP binds to ACE, the ACE enzyme is rendered permanently inactive. This makes DFP a potent toxin, with lethal amounts at less than 100 mg. The interaction between DFP and ACE can best be characterized as:",
          "options": [
            {
              "id": "opt-A",
              "text": "Competitive inhibition"
            },
            {
              "id": "opt-B",
              "text": "Noncompetitive inhibition"
            },
            {
              "id": "opt-C",
              "text": "Irreversible inhibition"
            },
            {
              "id": "opt-D",
              "text": "Partially competitive inhibition"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5066b7acbe9dddc0",
          "text": "Perchloric acid (HClO4) is considered one of the stronger acids in existence. Which of the following statements corresponds most accurately with strong acids?",
          "options": [
            {
              "id": "opt-A",
              "text": "Ka is less than 1"
            },
            {
              "id": "opt-B",
              "text": "They have an open electron spot on their outer valence rings"
            },
            {
              "id": "opt-C",
              "text": "They have stable conjugate bases"
            },
            {
              "id": "opt-D",
              "text": "They remain bound in the presence of water."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-32dfef262118b69b",
          "text": "A descript amount of 2-bromobutane is placed into a strong solution of ethanol and allowed to complete a reaction. The result of this reaction produces a major product of 2-butene and a minor product of 1-butene. Which of the following descriptions of the starting compound explains why 2-butene is the major product?",
          "options": [
            {
              "id": "opt-A",
              "text": "Carbon 3 has less hydrogen atoms"
            },
            {
              "id": "opt-B",
              "text": "1-butene rearranges to 2-butene in solution"
            },
            {
              "id": "opt-C",
              "text": "Ethanol prefers the second carbon in any chain"
            },
            {
              "id": "opt-D",
              "text": "Cyclic aromatization"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-2426d48e1beef303",
          "text": "A hedonic teenager of wayward morals, in one night, sequentially i) has consensual sexual intercourse with his sister, ii) leaves no tip at the bar, iii) has non-censual sexual relations with an unknown woman, and iv) vomits on the steps to the door of a local church. The teenager has violated society’s norms sequentially (to the greatest degree) on the order of:",
          "options": [
            {
              "id": "opt-A",
              "text": "mores, mores, the law, mores"
            },
            {
              "id": "opt-B",
              "text": "taboo, folkways, the law, and taboo"
            },
            {
              "id": "opt-C",
              "text": "the law, folkways, folkways, and folkways"
            },
            {
              "id": "opt-D",
              "text": "taboo, folkways, the law, and mores"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-6b72e0f41e98c83c",
          "text": "A patient comes into the ER looking extremely agitated. They are acting aggressive, and claiming they need medication or “bad things will happen”. What is the likely state of this patient’s dopamine system?",
          "options": [
            {
              "id": "opt-A",
              "text": "There is decreased dopamine in the synaptic cleft."
            },
            {
              "id": "opt-B",
              "text": "There are decreased dopamine receptors on the post-synaptic membrane."
            },
            {
              "id": "opt-C",
              "text": "There is cell death in the areas with high dopamine cells."
            },
            {
              "id": "opt-D",
              "text": "There is seizure-like activity in the dopamine brain areas."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-f3d550fba2305ff5",
          "text": "A scientist carrying out experiments on hearing aids fits 30 mice that were genetically modified to lose their hearing with the latest technology and were tested to press a lever when they heard a bell. This was set to varying levels of power. At 80% power, 20 mice pressed the lever. At 70% power, 15 mice pressed the lever. At 60% power, 10 mice pressed the lever. Which of the following power levels corresponds to the absolute threshold for hearing the decibels produced by the bell?",
          "options": [
            {
              "id": "opt-A",
              "text": "80%"
            },
            {
              "id": "opt-B",
              "text": "70%"
            },
            {
              "id": "opt-C",
              "text": "60%"
            },
            {
              "id": "opt-D",
              "text": "Not enough information given."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-8a673266aadd3a45",
          "text": "A new enzyme is found in a transgenic mice that participates in synthesis of an unknown product using two reactants. When using radiolabeled compounds to study the enzyme, it is found that the enzyme catalyzes a process that switches a nitrogen group on one reactant to the other reactant. Which of the following categories would this new enzyme fall under?",
          "options": [
            {
              "id": "opt-A",
              "text": "Oxidoreductase"
            },
            {
              "id": "opt-B",
              "text": "Transferase"
            },
            {
              "id": "opt-C",
              "text": "Hydrolase"
            },
            {
              "id": "opt-D",
              "text": "Lyase"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e20d0aa13cf75737",
          "text": "For a very weak base, the pKb of a solution would likely be:",
          "options": [
            {
              "id": "opt-A",
              "text": "Equal to the pOH"
            },
            {
              "id": "opt-B",
              "text": "Higher than the pOH"
            },
            {
              "id": "opt-C",
              "text": "Lower than the pOH"
            },
            {
              "id": "opt-D",
              "text": "Near 7 at 25ºC"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-108d43242e77b536",
          "text": "Which of the following are steroid-based molecules?\nI. Testosterone\nII. Triglycerides\nIII. Progesterone\nIV. DNA",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "I, II, and III"
            },
            {
              "id": "opt-C",
              "text": "I and III"
            },
            {
              "id": "opt-D",
              "text": "I, III, and IV"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d309fafcedbfd7a7",
          "text": "Living cells require constant interaction with the outside environment in order to attain the materials they need for survival, as well as to rid themselves of waste. Of the following processes, which uses only the gradient of material to control the direction in which the material moves across the cell membrane?",
          "options": [
            {
              "id": "opt-A",
              "text": "Osmosis"
            },
            {
              "id": "opt-B",
              "text": "Passive Transport"
            },
            {
              "id": "opt-C",
              "text": "Active Transport"
            },
            {
              "id": "opt-D",
              "text": "Endocytosis"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-college-medicine-u1-external-l02",
      "title": "College Medicine — Quiz 2",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-2bfc10eaf029a822",
          "text": "A segment of DNA from a lab mouse is determined to be 5’ – GGATCCTCATG – 3’. Which of the following DNA segments would be the result of this original DNA sequence experiencing both a point mutation and a deletion?",
          "options": [
            {
              "id": "opt-A",
              "text": "5’ – GCATCCTCATG – 3’"
            },
            {
              "id": "opt-B",
              "text": "5’ – TGATCCCAG – 3’"
            },
            {
              "id": "opt-C",
              "text": "5’ – GGTCCTCATC – 3’"
            },
            {
              "id": "opt-D",
              "text": "5’ – GGATCCATG – 3’"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c12f84f7f241d1e8",
          "text": "While working on a scene for an action movie, a sound technician is given the task of changing the frequency of a gunshot to more accurately reflect the normal speed of sound. The gunshot came from an actor inside a car traveling 108 km/h, and it was recorded by a camera on a platform 200 meters away traveling at 72 km/h in the same direction. If the frequency of the gunshot is normally 800Hz, what is the perceived frequency which the camera picks up the gunshot at?",
          "options": [
            {
              "id": "opt-A",
              "text": "941 Hz"
            },
            {
              "id": "opt-B",
              "text": "787 Hz"
            },
            {
              "id": "opt-C",
              "text": "924 Hz"
            },
            {
              "id": "opt-D",
              "text": "912 Hz"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e9e0e06f3c6a0711",
          "text": "An object rests on a plane, with an angle of incline, ?, an acceleration due to gravity, g, and a coefficient of friction µ between the object and the plane. Which of the following gives the acceleration of the object?",
          "options": [
            {
              "id": "opt-A",
              "text": "a = g sin ?"
            },
            {
              "id": "opt-B",
              "text": "a = g (sin ? – cos ?)"
            },
            {
              "id": "opt-C",
              "text": "a = g (cos ? – µ sin ?)"
            },
            {
              "id": "opt-D",
              "text": "a = g (sin ? – µ cos ?)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-5f7a6d98b32e9958",
          "text": "David is a nationally ranked cellist who recently accepted a scholarship to a major college to perform in the orchestra. Over the summer, he has been given a packet of sheet music to be proficient in by fall semester. David is a perfectionist when it comes to his craft. He always compares himself to better players, and is very hard on himself when he cannot master a section of one of his pieces. Which of the following answers best describes David?",
          "options": [
            {
              "id": "opt-A",
              "text": "Low self-esteem, strong self-efficacy, internal locus of control"
            },
            {
              "id": "opt-B",
              "text": "High self-esteem, strong self-efficacy, internal locus of control"
            },
            {
              "id": "opt-C",
              "text": "Low self-esteem, strong self-efficacy, external locus of control"
            },
            {
              "id": "opt-D",
              "text": "Low self-esteem, low self-efficacy, internal locus of control"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-430338f5bed9800e",
          "text": "A common heart defect in humans is a ventricular septal defect, in which there is a hole in the septum between the right and left ventricles. If a patient were to have this defect, which of the following statements is correct?",
          "options": [
            {
              "id": "opt-A",
              "text": "The percentage of oxygen in the left atrium would be lower."
            },
            {
              "id": "opt-B",
              "text": "The percentage of CO2 in the right ventricle would be higher."
            },
            {
              "id": "opt-C",
              "text": "The percentage of oxygen in the right atrium would be lower."
            },
            {
              "id": "opt-D",
              "text": "The percentage of oxygen in the right ventricle would be higher."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-2955a14ebbb418de",
          "text": "When preparing for the MCAT exam, a student begins studying electrochemical cells. He learns the basic information needed by actively relating it to previous information he has learned about redox reactions. He then builds from that knowledge to learn the advanced concepts needed. The student’s process is best characterized as:",
          "options": [
            {
              "id": "opt-A",
              "text": "Chunking"
            },
            {
              "id": "opt-B",
              "text": "A network model"
            },
            {
              "id": "opt-C",
              "text": "Maintenance rehearsal"
            },
            {
              "id": "opt-D",
              "text": "Elaborative rehearsal"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-2e837bb7f39ea9c8",
          "text": "Two scientists at a conference on evolution take to the stage on day 3 to argue their theories against one other. Each is a devout student of their own philosophy. The first scientist contends that organisms evolved via the increase of organs that were used the most during their time. They would then pass these on to subsequent generations. The second scientist, however, believed that advantages each organism possessed were absent for a long time, randomly occurred, and when they were beneficial, that organism would rapidly populate the population over a short period of time, evolutionarily speaking. Which of the following statements would strengthen the second scientist’s argument?",
          "options": [
            {
              "id": "opt-A",
              "text": "A study that shows that bodybuilders who train more have larger children."
            },
            {
              "id": "opt-B",
              "text": "A taxonomy study that shows long periods of stagnant growth followed by short burst of massive evolution."
            },
            {
              "id": "opt-C",
              "text": "A study that showed a species who were more successful due to the things they learned over their lifetime that they passed on to their children."
            },
            {
              "id": "opt-D",
              "text": "A study that showed a consistent amount of time between the emergence of each new species."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-ca5e9a06caa3c252",
          "text": "A source emits a sound from one medium with a certain velocity, intensity, frequency and wavelength. When the sound exits the first medium and enters a denser medium, all of the following changes EXCEPT:",
          "options": [
            {
              "id": "opt-A",
              "text": "velocity"
            },
            {
              "id": "opt-B",
              "text": "intensity"
            },
            {
              "id": "opt-C",
              "text": "frequency"
            },
            {
              "id": "opt-D",
              "text": "wavelength"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-96366b47b742e13f",
          "text": "The body compensates for increased environmental temperature by:",
          "options": [
            {
              "id": "opt-A",
              "text": "decreasing salt retention"
            },
            {
              "id": "opt-B",
              "text": "increasing respiration rate"
            },
            {
              "id": "opt-C",
              "text": "increasing heart rate"
            },
            {
              "id": "opt-D",
              "text": "increasing water lost through skin"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-3bdb0e15700383c4",
          "text": "An individual is born with a mutation causing her to partially retain a form of fetal hemoglobin into adulthood. Compared to a normal individual, this person would exhibit:",
          "options": [
            {
              "id": "opt-A",
              "text": "no differences from a normal adult."
            },
            {
              "id": "opt-B",
              "text": "significantly reduced oxygen binding in the lungs."
            },
            {
              "id": "opt-C",
              "text": "no symptoms, since retention of fetal hemoglobin would be fatal."
            },
            {
              "id": "opt-D",
              "text": "increased oxygen binding to hemoglobin in the tissues."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-14c0d56547805c7a",
          "text": "During muscular contraction, interactions between myosin and actin allow for shortening of each sarcomere. In addition to the power stroke, what other process of muscle contraction requires ATP?",
          "options": [
            {
              "id": "opt-A",
              "text": "Tropomyosin-troponin interaction"
            },
            {
              "id": "opt-B",
              "text": "Myosin-actin interaction"
            },
            {
              "id": "opt-C",
              "text": "Calcium-troponin interaction"
            },
            {
              "id": "opt-D",
              "text": "Myosin-actin detachment"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-66ca544c390829fc",
          "text": "A teacher sets up a reward system for her elementary school students. At the end of each day, she gives a sticker to each student who showed up on time that morning. At the end of each week, she gives a sticker to any student who got above a 90% on three quizzes in a row. After months of this regimen, she finds that performance on the quizzes has increased significantly but that tardiness has only decreased slightly. Which of the following best explains the teacher’s observation?",
          "options": [
            {
              "id": "opt-A",
              "text": "Variable ratio schedules create the strongest responses and behavior that is the least susceptible to extinction."
            },
            {
              "id": "opt-B",
              "text": "The students had more intrinsic motivation to do well on quizzes than to show up on time."
            },
            {
              "id": "opt-C",
              "text": "The students’ behavior change was stronger in response to a fixed-ratio schedule than it was to a continuous reinforcement schedule."
            },
            {
              "id": "opt-D",
              "text": "The students’ behavior change was stronger in response to a fixed-ratio schedule than it was to a variable-interval schedule."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4e994f4a0b558fa5",
          "text": "Pregnancy tests are extremely sensitive and function by detecting levels of B-hCG, or human chorionic gonadotropin, in urine. This hormone is secreted by what tissue, and what is its function?",
          "options": [
            {
              "id": "opt-A",
              "text": "Corpus luteum, self-maintenance"
            },
            {
              "id": "opt-B",
              "text": "Endometrium, cell division"
            },
            {
              "id": "opt-C",
              "text": "Blastocyst, increase in blood flow"
            },
            {
              "id": "opt-D",
              "text": "Blastocyst, corpus luteum maintenance"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a5a9c1b229ed16c5",
          "text": "The son of a bricklayer goes to college and i) becomes a teacher at a medical school, ii) gets promoted to tenured professor, and iii) moves across the country for a new tenured professor position at a different school. Sequentially, this man has experienced:",
          "options": [
            {
              "id": "opt-A",
              "text": "intergenerational mobility with respect to the father, horizontal mobility, horizontal mobility"
            },
            {
              "id": "opt-B",
              "text": "intragenerational mobility with respect to the son, upward mobility, upward mobility"
            },
            {
              "id": "opt-C",
              "text": "intergenerational mobility with respect to the father, upward mobility, horizontal mobility"
            },
            {
              "id": "opt-D",
              "text": "intragenerational mobility with respect to the son, horizontal mobility, upward mobility"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-04097d4658548309",
          "text": "DNA polymerase creates new DNA by adding complimentary nucleotides to a template strand from the original double-stranded DNA. If a section of the template strand had a ration of 3:2 of A:T bases, what is the ration of A:T in the newly synthesized complimentary strand of DNA?",
          "options": [
            {
              "id": "opt-A",
              "text": "3:02"
            },
            {
              "id": "opt-B",
              "text": "1:01"
            },
            {
              "id": "opt-C",
              "text": "2:03"
            },
            {
              "id": "opt-D",
              "text": "cannot be determined"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-college-medicine-u1-external-l03",
      "title": "College Medicine — Quiz 3",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-974e9b5470cadefc",
          "text": "A young child is brought to a psychologist for evaluation of their home situation. The child is placed in the middle of the floor, with the mother on one side and the psychologist on the other. The mother then leaves for a short while, and then returns. Which of the following would be a concerning sign during this evaluation?",
          "options": [
            {
              "id": "opt-A",
              "text": "Decreased exploration when the mother is out of the room."
            },
            {
              "id": "opt-B",
              "text": "Crying and returning to the mother upon return."
            },
            {
              "id": "opt-C",
              "text": "Avoiding the mother upon return."
            },
            {
              "id": "opt-D",
              "text": "Exploring the room before the mother leaves."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-456aef9b5919935f",
          "text": "In a fit of passion, the spectator of a political debate exclaims that “welfare recipients are all lazy.” The spectator’s thought process is an example of:",
          "options": [
            {
              "id": "opt-A",
              "text": "prejudice"
            },
            {
              "id": "opt-B",
              "text": "discrimination"
            },
            {
              "id": "opt-C",
              "text": "ethnocentrism"
            },
            {
              "id": "opt-D",
              "text": "conflict theory"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-f1c15ae0d5ec2aea",
          "text": "Neonatal Respiratory Distress Syndrome (NRDS) is a serious complication seen in infants born prematurely who have a compromised ability to facilitate oxygen diffusion across their alveolar membranes. This is caused by inadequate surfactant production. What role does surfactant play in facilitating oxygen diffusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "Increases surface permeability"
            },
            {
              "id": "opt-B",
              "text": "Maintains alveoli in an open state"
            },
            {
              "id": "opt-C",
              "text": "Depresses cilia of the lung"
            },
            {
              "id": "opt-D",
              "text": "Dilates blood vessels"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-81c21591d588c53a",
          "text": "Using this formula, if a reaction was provided with 84g of ethane and unlimited oxygen, how many grams of carbon dioxide would result (Carbon atomic weight: 12amu, Hydrogen atomic weight: 1amu, Oxygen atomic weight: 16amu)?\n﻿\nThe unbalanced reaction of ethane gas to carbon dioxide and water is as follows:\n\n C2H4 + O2 —> CO2 + H2O",
          "options": [
            {
              "id": "opt-A",
              "text": "78g"
            },
            {
              "id": "opt-B",
              "text": "528g"
            },
            {
              "id": "opt-C",
              "text": "264g"
            },
            {
              "id": "opt-D",
              "text": "156g"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b17b91180b48754c",
          "text": "Sauna use, sometimes referred to as \"sauna bathing,\" is characterized by short-term passive exposure to extreme heat. This exposure elicits mild hyperthermia – an increase in the body's core temperature – that induces a thermoregulatory response involving neuroendocrine, cardiovascular, and cytoprotective mechanisms that work together to restore homeostasis and condition the body for future heat stressors… In recent decades, sauna bathing has emerged as a means to increase lifespan and improve overall health, based on compelling data from observational, interventional, and mechanistic studies. Of particular interest are the findings from studies of participants in the Kuopio Ischemic Heart Disease Risk Factor (KIHD) Study, an ongoing prospective population-based cohort study of health outcomes in more than 2,300 middle-aged men from eastern Finland, which identified strong links between sauna use and reduced death and disease… The KIHD findings showed that men who used the sauna two to three times per week were 27 percent less likely to die from cardiovascular-related causes than men who didn't use the sauna.[2] Furthermore, the benefits they experienced were found to be dose-dependent: Men who used the sauna roughly twice as often, about four to seven times per week, experienced roughly twice the benefits – and were 50 percent less likely to die from cardiovascular-related causes.[2] In addition, frequent sauna users were found to be 40 percent less likely to die from all causes of premature death. These findings held true even when considering age, activity levels, and lifestyle factors that might have influenced the men's health.[2]... The KIHD also revealed that frequent sauna use reduced the risk of developing dementia and Alzheimer's disease in a dose-dependent manner. Men who used the sauna two to three times per week had a 66 percent lower risk of developing dementia and a 65 percent lower risk of developing Alzheimer's disease, compared to men who used the sauna only one time per week… The health benefits associated with sauna use extended to other aspects of mental health, as well. Men participating in the KIHD study who used the sauna four to seven times per week were 77 percent less likely to develop psychotic disorders, regardless of the men's dietary habits, socioeconomic status, physical activity, and inflammatory status (as measured by C-reactive protein)…Exposure to high temperature stresses the body, eliciting a rapid, robust response. The skin and core body temperatures increase markedly, and sweating ensues. The skin heats first, rising to 40°C (104°F), and then changes in core body temperature occur, rising slowly from 37°C (98.6°F, or normal) to 38°C (100.4°F) and then rapidly increasing to 39°C (102.2°F)…  Cardiac output, a measure of the amount of work the heart performs in response to the body's need for oxygen, increases by 60 to 70 percent, while the heart rate (the number of beats per minute) increases and the stroke volume (the amount of blood pumped) remains unchanged.[5] During this time, approximately 50 to 70 percent of the body's blood flow is redistributed from the core to the skin to facilitate sweating. The average person loses approximately 0.5 kg of sweat while sauna bathing.[11] Acute heat exposure also induces a transient increase in overall plasma volume to mitigate the decrease in core blood volume. This increase in plasma volume not only provides a reserve source of fluid for sweating, but it also acts like the water in a car's radiator, cooling the body to prevent rapid increases in core body temperature and promoting heat tolerance… Repeated sauna use acclimates the body to heat and optimizes the body's response to future exposures, likely due to a biological phenomenon known as hormesis, a compensatory defense response following exposure to a mild stressor that is disproportionate to the magnitude of the stressor. Hormesis triggers a vast array of protective mechanisms that not only repair cell damage but also provide protection from subsequent exposures to more devastating stressors… The physiological responses to sauna use are remarkably similar to those experienced during moderate- to vigorous-intensity exercise. In fact, sauna use has been proposed as an alternative to exercise for people who are unable to engage in physical activity due to chronic disease or physical limitations.[13]\n\nBased on the article, what would be an important thing for a person to do after sauna use?",
          "options": [
            {
              "id": "opt-A",
              "text": "Shower in cold water."
            },
            {
              "id": "opt-B",
              "text": "Exercise."
            },
            {
              "id": "opt-C",
              "text": "Eat a meal."
            },
            {
              "id": "opt-D",
              "text": "Replenish fluids with filtered water."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0f9c8d701683ab4e",
          "text": "When branched chain amino acids are deaminated in muscle, the ammonia produced is mostly:",
          "options": [
            {
              "id": "opt-A",
              "text": "converted into arginine and released from the muscle."
            },
            {
              "id": "opt-B",
              "text": "converted into alanine and glutamine and released from the muscle."
            },
            {
              "id": "opt-C",
              "text": "converted into urea and released from the muscle."
            },
            {
              "id": "opt-D",
              "text": "used to synthesise purines and pyrimidines in the muscle."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-015d78d3b8ec8255",
          "text": "A certain molecule acts by binding to cytochrome oxidase A3, the final enzyme in the electron transport chain. Administration of a large dose of this substance to a human would likely:",
          "options": [
            {
              "id": "opt-A",
              "text": "Lead to death due to an inability of the cell to pass electrons to oxygen, thus stopping aerobic respiration and asphyxiating the cells."
            },
            {
              "id": "opt-B",
              "text": "Lead to death due to an inadequate supply of ADP to accept a phosphate group at the ATP synthase enzyme."
            },
            {
              "id": "opt-C",
              "text": "Have no effect as cells would switch which macronutrient they metabolize to circumvent the blocked biochemical pathway."
            },
            {
              "id": "opt-D",
              "text": "Increase the cell’s ATP production as negative feedback would cause the cell to up-regulate anaerobic pathways."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c5655534e628b1f3",
          "text": "In response to period of extreme psychological trauma, a patient begins experiencing a feeling of detachment. He says, “I felt like it wasn’t real while it was happening. I was just watching myself do it without any control. I mean, you know, I knew it was happening but I didn’t feel like it was.” The patient is describing:",
          "options": [
            {
              "id": "opt-A",
              "text": "Dissociative identity disorder"
            },
            {
              "id": "opt-B",
              "text": "An anxiety disorder"
            },
            {
              "id": "opt-C",
              "text": "Depersonalization disorder"
            },
            {
              "id": "opt-D",
              "text": "A schizophrenic episode"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-8ad4db6d842144c8",
          "text": "In order to determine the doppler shift in perceived sound frequency, the following variables must be known:\nI. speed of sound in medium\nII. Time of interaction between sound source and detector\nIII. distance between source and detector\nIV. frequency of emitted sound",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "I and III"
            },
            {
              "id": "opt-C",
              "text": "II and IV"
            },
            {
              "id": "opt-D",
              "text": "I and IV"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-5a7ddddb319a88c5",
          "text": "Which of the following phases are common to cells undergoing meiosis and mitosis?\nI. G0\nII. phase G2\nIII. phase S phase",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "I and II only"
            },
            {
              "id": "opt-C",
              "text": "II and III only"
            },
            {
              "id": "opt-D",
              "text": "I, II, and III"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-44130d5327bd1270",
          "text": "Sauna use, sometimes referred to as \"sauna bathing,\" is characterized by short-term passive exposure to extreme heat. This exposure elicits mild hyperthermia – an increase in the body's core temperature – that induces a thermoregulatory response involving neuroendocrine, cardiovascular, and cytoprotective mechanisms that work together to restore homeostasis and condition the body for future heat stressors… In recent decades, sauna bathing has emerged as a means to increase lifespan and improve overall health, based on compelling data from observational, interventional, and mechanistic studies. Of particular interest are the findings from studies of participants in the Kuopio Ischemic Heart Disease Risk Factor (KIHD) Study, an ongoing prospective population-based cohort study of health outcomes in more than 2,300 middle-aged men from eastern Finland, which identified strong links between sauna use and reduced death and disease… The KIHD findings showed that men who used the sauna two to three times per week were 27 percent less likely to die from cardiovascular-related causes than men who didn't use the sauna.[2] Furthermore, the benefits they experienced were found to be dose-dependent: Men who used the sauna roughly twice as often, about four to seven times per week, experienced roughly twice the benefits – and were 50 percent less likely to die from cardiovascular-related causes.[2] In addition, frequent sauna users were found to be 40 percent less likely to die from all causes of premature death. These findings held true even when considering age, activity levels, and lifestyle factors that might have influenced the men's health.[2]... The KIHD also revealed that frequent sauna use reduced the risk of developing dementia and Alzheimer's disease in a dose-dependent manner. Men who used the sauna two to three times per week had a 66 percent lower risk of developing dementia and a 65 percent lower risk of developing Alzheimer's disease, compared to men who used the sauna only one time per week… The health benefits associated with sauna use extended to other aspects of mental health, as well. Men participating in the KIHD study who used the sauna four to seven times per week were 77 percent less likely to develop psychotic disorders, regardless of the men's dietary habits, socioeconomic status, physical activity, and inflammatory status (as measured by C-reactive protein)…Exposure to high temperature stresses the body, eliciting a rapid, robust response. The skin and core body temperatures increase markedly, and sweating ensues. The skin heats first, rising to 40°C (104°F), and then changes in core body temperature occur, rising slowly from 37°C (98.6°F, or normal) to 38°C (100.4°F) and then rapidly increasing to 39°C (102.2°F)…  Cardiac output, a measure of the amount of work the heart performs in response to the body's need for oxygen, increases by 60 to 70 percent, while the heart rate (the number of beats per minute) increases and the stroke volume (the amount of blood pumped) remains unchanged.[5] During this time, approximately 50 to 70 percent of the body's blood flow is redistributed from the core to the skin to facilitate sweating. The average person loses approximately 0.5 kg of sweat while sauna bathing.[11] Acute heat exposure also induces a transient increase in overall plasma volume to mitigate the decrease in core blood volume. This increase in plasma volume not only provides a reserve source of fluid for sweating, but it also acts like the water in a car's radiator, cooling the body to prevent rapid increases in core body temperature and promoting heat tolerance… Repeated sauna use acclimates the body to heat and optimizes the body's response to future exposures, likely due to a biological phenomenon known as hormesis, a compensatory defense response following exposure to a mild stressor that is disproportionate to the magnitude of the stressor. Hormesis triggers a vast array of protective mechanisms that not only repair cell damage but also provide protection from subsequent exposures to more devastating stressors… The physiological responses to sauna use are remarkably similar to those experienced during moderate- to vigorous-intensity exercise. In fact, sauna use has been proposed as an alternative to exercise for people who are unable to engage in physical activity due to chronic disease or physical limitations.[13]\n\nThe review article sources a lot of data from Finland population studies, where the incidence of sauna use is substantially higher than most countries. Using the data, which of the following is something that is more plausible in Finland than elsewhere?",
          "options": [
            {
              "id": "opt-A",
              "text": "More gold medals in adolescent skiing."
            },
            {
              "id": "opt-B",
              "text": "An 86-year old male mayor who is revered in the community."
            },
            {
              "id": "opt-C",
              "text": "Increased rate of pets in the household."
            },
            {
              "id": "opt-D",
              "text": "Improved marriage satisfaction rates."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e379ad4ea5ea4097",
          "text": "Karen is a college student working on developing a stronger sense of self-esteem and self-efficacy with her therapist. She has noticed a great change in her ability to handle situations after 3 months of therapy. Which of the following would NOT be a strategy that her therapist would ask her to employ to raise her sense of self-efficacy?",
          "options": [
            {
              "id": "opt-A",
              "text": "Seek positive feedback from friends."
            },
            {
              "id": "opt-B",
              "text": "Put in daily practice on the tasks she wishes to improve on."
            },
            {
              "id": "opt-C",
              "text": "Find others her age and ability who excel at tasks she is interested in."
            },
            {
              "id": "opt-D",
              "text": "Avoid potential pitfalls by withholding from tasks she is not proficient in."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-817fd0be6b9497a9",
          "text": "A thin layer chromatography is performed on both the reactants and products of a reaction. It is found that the products have an Rf value that is significantly higher than the reactants. Which of the following could adequately describe this reaction:",
          "options": [
            {
              "id": "opt-A",
              "text": "SN2 reaction converting an alkyl bromide to an alkyl chloride"
            },
            {
              "id": "opt-B",
              "text": "Addition reaction converting an alkene to an alcohol"
            },
            {
              "id": "opt-C",
              "text": "Nucleophilic acyl substitution reaction converting an ester to an anhydride"
            },
            {
              "id": "opt-D",
              "text": "Elimination reaction converting an alcohol to an alkene"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-fa5077d7f54c11ee",
          "text": "Which of the following best accounts for the negative slope of the liquid-solid equilibrium line in the phase diagram for water?",
          "options": [
            {
              "id": "opt-A",
              "text": "H2O(s) has a greater density than H2O(l), which causes the solid to form liquid under high pressure conditions."
            },
            {
              "id": "opt-B",
              "text": "H2O(s) has a greater density than H2O(l), which results from the hydrogen bonds formed between water molecules."
            },
            {
              "id": "opt-C",
              "text": "H2O(s) has a lower density than H2O(l) which results from the crystalline framework that forms due to hydrogen bonds."
            },
            {
              "id": "opt-D",
              "text": "H2O(s) has a lower density than H2O(l) which causes the solid to form liquid under low pressure conditions."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c656bd447f8a10d1",
          "text": "Mg(OH)2 is slowly dissolved in 500 mL of 25 oC water until the solution becomes fully saturated. Which of the following occurs when 10.0 mL of 0.1 M HCl is added?",
          "options": [
            {
              "id": "opt-A",
              "text": "MgCl2 precipitates"
            },
            {
              "id": "opt-B",
              "text": "Mg(OH)2 precipitates"
            },
            {
              "id": "opt-C",
              "text": "Ksp for Mg(OH)2 increases"
            },
            {
              "id": "opt-D",
              "text": "[H2O] increases"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-college-medicine-u1-external-l04",
      "title": "College Medicine — Quiz 4",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-bcafe42b1691c78d",
          "text": "Myoclonic epilepsy and ragged-red fiber (MERRF) is an extremely rare disorder that affects neuromuscular systems. MERRF results from a mutation in mitochondrial DNA (mtDNA) that impairs protein synthesis, oxygen consumption, and energy production. When an affected male and a normal female reproduce, which of the following best predicts the expected phenotypic ratios of the offspring?",
          "options": [
            {
              "id": "opt-A",
              "text": "None of the offspring will be affected"
            },
            {
              "id": "opt-B",
              "text": "All males and no females will be affected"
            },
            {
              "id": "opt-C",
              "text": "Half of males and half of females will be affected"
            },
            {
              "id": "opt-D",
              "text": "One-fourth of the offspring will be affected"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-9ab35956c64e7247",
          "text": "All of the following are example of sensory, or neural, adaptation EXCEPT:",
          "options": [
            {
              "id": "opt-A",
              "text": "After putting on a shirt, you eventually no longer feel the sensation of the fabric on your back."
            },
            {
              "id": "opt-B",
              "text": "After first walking into a crowded room, you no longer are distracted by the buzz of conversation around you."
            },
            {
              "id": "opt-C",
              "text": "After first walking outside on a sunny day, you no longer are blinded by the initial brightness of the light."
            },
            {
              "id": "opt-D",
              "text": "After first walking into an anatomy lab, you no longer notice the smell of formaldehyde."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-056443b790c37c5d",
          "text": "A scientist, using electrodes, is stimulating a group of neurons in the hypothalamus and recording their membrane potential changes. She observes a sharp rise in membrane potential when she first stimulates them, the the difference of 100mV. When she tries another stimulation immediately after the first, there is no response. However, when she increase the amount of voltage she supplies to the second shock, she observes a similar response to the first. What time period of stimulation would the second shock be characterized in regards to membrane potential?",
          "options": [
            {
              "id": "opt-A",
              "text": "Depolarization"
            },
            {
              "id": "opt-B",
              "text": "Repolarization"
            },
            {
              "id": "opt-C",
              "text": "Hyperpolarization"
            },
            {
              "id": "opt-D",
              "text": "Resting potential"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1a9bab7f102493c5",
          "text": "What is the most likely outcome of this modification?\n﻿\nAn RNA strand that normally produces a transmembrane protein that facilitates potassium entry into muscle cells is modified to produce a different strand. The original strand is as follows:\n\n GAAUAGAUGGGAAGCGCCAGAUACAGUAACAGA… \n\nThe modified sequence is as follows:\n\n GAAUAGAUGGGAAGCGCCAGAUACAGUACCAGA…",
          "options": [
            {
              "id": "opt-A",
              "text": "Absence of the protein"
            },
            {
              "id": "opt-B",
              "text": "Production of a similar-sized but dysfunctional protein"
            },
            {
              "id": "opt-C",
              "text": "No change"
            },
            {
              "id": "opt-D",
              "text": "Production of a larger, likely dysfunctional protein"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-cc8ed8315cb23f34",
          "text": "Glycolysis is the name given to the pathway involving the conversion of:",
          "options": [
            {
              "id": "opt-A",
              "text": "glycogen to glucose-1-phosphate."
            },
            {
              "id": "opt-B",
              "text": "glycogen or glucose to fructose."
            },
            {
              "id": "opt-C",
              "text": "glycogen or glucose to pyruvate or lactate."
            },
            {
              "id": "opt-D",
              "text": "glycogen or glucose to pyruvate or acetyl CoA."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-16c05e09e23bce14",
          "text": "A psychologist conducts an experiment in which subjects are asked to learn a series of “facts” which are actually statements that have been fabricated by the research team. The subjects consist of undergraduate students at the university where the experiment is being conducted. The subjects are randomly assigned to groups that are compensated either $10 or $20 for their participation, are given either 15 minutes or 30 minutes to learn the facts, and are asked to recall the facts either in the same room in which they learned the facts or in a very different, unfamiliar setting. Which of the following are dependent variables in this experiment?\nI. The amount the subjects were compensated.\nII. The room in which the subjects were asked to recall facts.\nIII. The number of facts the subjects can recall.\nIV. The time the subjects were given to learn the facts.",
          "options": [
            {
              "id": "opt-A",
              "text": "II only"
            },
            {
              "id": "opt-B",
              "text": "III only"
            },
            {
              "id": "opt-C",
              "text": "I and IV only"
            },
            {
              "id": "opt-D",
              "text": "I and III and IV only"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-559cc5d88dd35c3e",
          "text": "A dentist that is performing procedures in his clinic is brought out to the front desk one day to handle a dispute between one of his patients and the clerk. The patient is a middle-aged businessman who is irate and creating a scene because he was told he would have to see the dental hygienist instead of the dentist. The patient loudly rants that he makes too much money to be subjected to treatment by a half-trained associate. The clerk explains to the dentist that the patient was 40 minutes late to his appointment, and the only opening now was with the hygienist. The patient snaps back that his time is worth more than any of the people in the office. What personality disorder is this patient likely exhibiting?",
          "options": [
            {
              "id": "opt-A",
              "text": "Histrionic"
            },
            {
              "id": "opt-B",
              "text": "Narcissistic"
            },
            {
              "id": "opt-C",
              "text": "Paranoid"
            },
            {
              "id": "opt-D",
              "text": "Obsessive-compulsive"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-95c430517a80a2ca",
          "text": "Vygotsky’s sociocultural development theory attempts to describe the interaction between the mental function children are born with and how they develop those into what they possess as adults. One of the important components of this is the zone of proximal development. Which of the following statements accurately describes an individual in the zone of proximal development?",
          "options": [
            {
              "id": "opt-A",
              "text": "A baseball player hits baseballs from a tee in order to build muscle memory."
            },
            {
              "id": "opt-B",
              "text": "A concert flute player falls short of finishing a piece that has a very complex ending without mistakes"
            },
            {
              "id": "opt-C",
              "text": "A high school English student submits a paper for review by his professor."
            },
            {
              "id": "opt-D",
              "text": "A high diver takes instruction from her coach to improve her form on a specific move."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-e700a4a8b0bc6ab7",
          "text": "A young man working with a therapist on becoming more productive is expressing many of his desires throughout growing up and how he feels that it has affected him. Through discernment, the therapist states that he believes the young man’s development is stuck in a stage that reflects itself by his inability to keep his house clean. According to Freud’s theory of psychosexual development, what stage would this young man be fixated in?",
          "options": [
            {
              "id": "opt-A",
              "text": "Anal"
            },
            {
              "id": "opt-B",
              "text": "Phallic"
            },
            {
              "id": "opt-C",
              "text": "Latent"
            },
            {
              "id": "opt-D",
              "text": "Genital"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-aad500c7c08c4cb2",
          "text": "Walking down a street late at night, an adult male pedestrian notices a young female on the ground, not moving. The female is on the opposite side of the street. Crossing the street, the pedestrian notices that the young woman appears both much wealthier than he is and is of a different ethnicity. Seeing no one else present, the pedestrian renders aid. According to the bystander effect, which of the following would change how the pedestrian reacts?",
          "options": [
            {
              "id": "opt-A",
              "text": "The person requiring aid appearing to be of a lower socioeconomic class rather than a higher one"
            },
            {
              "id": "opt-B",
              "text": "The presence of another group of people one block up the street"
            },
            {
              "id": "opt-C",
              "text": "The person requiring aid appearing to be the same ethnicity rather than a different one"
            },
            {
              "id": "opt-D",
              "text": "The presence of one other person who is already approaching the girl"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b50c6f448fc10a0b",
          "text": "Sauna use, sometimes referred to as \"sauna bathing,\" is characterized by short-term passive exposure to extreme heat. This exposure elicits mild hyperthermia – an increase in the body's core temperature – that induces a thermoregulatory response involving neuroendocrine, cardiovascular, and cytoprotective mechanisms that work together to restore homeostasis and condition the body for future heat stressors… In recent decades, sauna bathing has emerged as a means to increase lifespan and improve overall health, based on compelling data from observational, interventional, and mechanistic studies. Of particular interest are the findings from studies of participants in the Kuopio Ischemic Heart Disease Risk Factor (KIHD) Study, an ongoing prospective population-based cohort study of health outcomes in more than 2,300 middle-aged men from eastern Finland, which identified strong links between sauna use and reduced death and disease… The KIHD findings showed that men who used the sauna two to three times per week were 27 percent less likely to die from cardiovascular-related causes than men who didn't use the sauna.[2] Furthermore, the benefits they experienced were found to be dose-dependent: Men who used the sauna roughly twice as often, about four to seven times per week, experienced roughly twice the benefits – and were 50 percent less likely to die from cardiovascular-related causes.[2] In addition, frequent sauna users were found to be 40 percent less likely to die from all causes of premature death. These findings held true even when considering age, activity levels, and lifestyle factors that might have influenced the men's health.[2]... The KIHD also revealed that frequent sauna use reduced the risk of developing dementia and Alzheimer's disease in a dose-dependent manner. Men who used the sauna two to three times per week had a 66 percent lower risk of developing dementia and a 65 percent lower risk of developing Alzheimer's disease, compared to men who used the sauna only one time per week… The health benefits associated with sauna use extended to other aspects of mental health, as well. Men participating in the KIHD study who used the sauna four to seven times per week were 77 percent less likely to develop psychotic disorders, regardless of the men's dietary habits, socioeconomic status, physical activity, and inflammatory status (as measured by C-reactive protein)…Exposure to high temperature stresses the body, eliciting a rapid, robust response. The skin and core body temperatures increase markedly, and sweating ensues. The skin heats first, rising to 40°C (104°F), and then changes in core body temperature occur, rising slowly from 37°C (98.6°F, or normal) to 38°C (100.4°F) and then rapidly increasing to 39°C (102.2°F)…  Cardiac output, a measure of the amount of work the heart performs in response to the body's need for oxygen, increases by 60 to 70 percent, while the heart rate (the number of beats per minute) increases and the stroke volume (the amount of blood pumped) remains unchanged.[5] During this time, approximately 50 to 70 percent of the body's blood flow is redistributed from the core to the skin to facilitate sweating. The average person loses approximately 0.5 kg of sweat while sauna bathing.[11] Acute heat exposure also induces a transient increase in overall plasma volume to mitigate the decrease in core blood volume. This increase in plasma volume not only provides a reserve source of fluid for sweating, but it also acts like the water in a car's radiator, cooling the body to prevent rapid increases in core body temperature and promoting heat tolerance… Repeated sauna use acclimates the body to heat and optimizes the body's response to future exposures, likely due to a biological phenomenon known as hormesis, a compensatory defense response following exposure to a mild stressor that is disproportionate to the magnitude of the stressor. Hormesis triggers a vast array of protective mechanisms that not only repair cell damage but also provide protection from subsequent exposures to more devastating stressors… The physiological responses to sauna use are remarkably similar to those experienced during moderate- to vigorous-intensity exercise. In fact, sauna use has been proposed as an alternative to exercise for people who are unable to engage in physical activity due to chronic disease or physical limitations.[13]\n\nWhich of the following is a likely paragraph that follows this excerpt in the article?",
          "options": [
            {
              "id": "opt-A",
              "text": "A paragraph on a protein that facilitates intracellular function in response to heat."
            },
            {
              "id": "opt-B",
              "text": "A paragraph on increased heart attacks in Eskimo populations."
            },
            {
              "id": "opt-C",
              "text": "A recap of Finland’s water polo team excellence."
            },
            {
              "id": "opt-D",
              "text": "A study on rats exposed to high levels of heat."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-0d5439630d7a7070",
          "text": "Triacylglycerides consist of I. A ribose backbone II. a glycerol backbone III. three phosphodiester linkages IV. three ester linkages",
          "options": [
            {
              "id": "opt-A",
              "text": "I and III"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "II and III"
            },
            {
              "id": "opt-D",
              "text": "II and IV"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a846a8c194b8a967",
          "text": "Noncompetitive inhibition differs from uncompetitive inhibition in that a noncompetitive inhibitor binds to an allosteric site on the enzyme and prevents it from catalyzing a reaction, whereas uncompetitive inhibitors bind to the enzymesubstrate complex and prevent catalysis. Increasing the substrate concentration would have which of the following effects?",
          "options": [
            {
              "id": "opt-A",
              "text": "Increasing impact of uncompetitive inhibitor and decreasing concentration of noncompetitive inhibitor"
            },
            {
              "id": "opt-B",
              "text": "Decreasing impact of uncompetitive inhibitor and increasing impact of noncompetitive inhibitor."
            },
            {
              "id": "opt-C",
              "text": "Increasing impact of uncompetitive inhibitor"
            },
            {
              "id": "opt-D",
              "text": "No effect"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4133e5124c788c63",
          "text": "Tyler is a high school student who is planning on becoming an engineer. In his calculus II class sophomore year, he receives an F on his first test. Which of the following responses to this event would indicate that Tyler has a higher likelihood of improving in subsequent exams?",
          "options": [
            {
              "id": "opt-A",
              "text": "He decides that the first test is always harder than the others."
            },
            {
              "id": "opt-B",
              "text": "He says the teacher graded his exam harder because she doesn’t like him."
            },
            {
              "id": "opt-C",
              "text": "He says it was due to some home circumstances that won’t be present during the next exam."
            },
            {
              "id": "opt-D",
              "text": "He critiques his study methods and tries to find out which led to poor returns."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-0c85a4e9bc0f0731",
          "text": "In nerve cells, microtubule-associated proteins (MAPs), most notably MAP2 and MAP tau, act to stabilize microtubules. In a mouse model, a mutant is developed that vastly reduced function across all families of MAPs, leading to increased microtubule degradation. Which cellular activity would likely be most affected?",
          "options": [
            {
              "id": "opt-A",
              "text": "Cardiac muscle contraction"
            },
            {
              "id": "opt-B",
              "text": "Transcription of mRNA from DNA"
            },
            {
              "id": "opt-C",
              "text": "Krebs cycle"
            },
            {
              "id": "opt-D",
              "text": "Meiosis"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-college-medicine-u1-external-l05",
      "title": "College Medicine — Quiz 5",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-aa42f40c91f53543",
          "text": "Rational choice theory is premised on the concept that actions are chosen based on the benefit to the individual. The three main assumptions of rational theory are completeness, transitivity, and independence of variables. This is most accurately described as what kind of system?",
          "options": [
            {
              "id": "opt-A",
              "text": "Hierarchical"
            },
            {
              "id": "opt-B",
              "text": "Patriarchal"
            },
            {
              "id": "opt-C",
              "text": "Matriarchal"
            },
            {
              "id": "opt-D",
              "text": "Oligarchic"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-21fb5a6a22b00116",
          "text": "Type I muscle fibres have the following characteristics:",
          "options": [
            {
              "id": "opt-A",
              "text": "white, glycolytic, slow contracting."
            },
            {
              "id": "opt-B",
              "text": "white, oxidative, slow contracting."
            },
            {
              "id": "opt-C",
              "text": "red, oxidative, fast contracting."
            },
            {
              "id": "opt-D",
              "text": "red, oxidative, slow contracting."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-baf6ea8acbac82c3",
          "text": "If a gas occupies 0.1L at 200atm, what will its volume be at 1atm?",
          "options": [
            {
              "id": "opt-A",
              "text": "slightly less than 20L"
            },
            {
              "id": "opt-B",
              "text": "20L"
            },
            {
              "id": "opt-C",
              "text": "slightly more than 20L"
            },
            {
              "id": "opt-D",
              "text": "2000L"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-5288cb575a6cc7c8",
          "text": "Assuming the circulatory system in humans obeys Bernoulli’s principle of fluid dynamics, which of the statements most accurately compares the blood pressure in a capillary of the neck to a capillary with an equal crosssectional area in the right knee?",
          "options": [
            {
              "id": "opt-A",
              "text": "The pressure in the neck is greater than the pressure in the knee because of the increase in pressure head"
            },
            {
              "id": "opt-B",
              "text": "The pressure in the neck is equal to the pressure in the knee because of the equal dynamic pressure according to the continuity equation"
            },
            {
              "id": "opt-C",
              "text": "The pressure in the knee is greater than the pressure in the neck because of the increase in pressure head"
            },
            {
              "id": "opt-D",
              "text": "An accurate comparison cannot be given without knowledge of the fluid’s density and viscosity"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-de9cbd1d65014504",
          "text": "An individual presents to the clinic for initial evaluation and establishment of care. The patient was born 46, XY, but identifies as a female. Her preferred pronouns are She/Her. Additionally, she is sexually active with females only. What would describe the gender and orientation of this individual?",
          "options": [
            {
              "id": "opt-A",
              "text": "Cis-gender, heterosexual"
            },
            {
              "id": "opt-B",
              "text": "Transgender, heterosexual"
            },
            {
              "id": "opt-C",
              "text": "Cis-gender, homosexual"
            },
            {
              "id": "opt-D",
              "text": "Transgender, homosexual"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-aca9e1388910b6e0",
          "text": "A team of engineers constructing signal lights for airplanes that they can use to guide them to runways are attempting to determine the brightness needed for the pilot to be able to detect the tower at 1 mile away. They set the light to a test brightness and establish communication with an inbound pilot. When the pilot is 1 mile away from the tower, he says he cannot see the light. In terms of Signal Detection Theory, what would this be called?",
          "options": [
            {
              "id": "opt-A",
              "text": "Hit"
            },
            {
              "id": "opt-B",
              "text": "Miss"
            },
            {
              "id": "opt-C",
              "text": "False alarm"
            },
            {
              "id": "opt-D",
              "text": "Correct rejection"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-9e1215e2e48a503f",
          "text": "New York City is home to over 7 million inhabitants from a diverse range of backgrounds. Although the city itself has characteristics, there are several smaller areas, usually congregations of people from the same nationality, who adhere to customs from their prior country of inhabitance. For example, in Little Italy, a small town in the city, it is still customary to greet people with cheek kisses. This is an example of what kind of phenomenon?",
          "options": [
            {
              "id": "opt-A",
              "text": "Subculture"
            },
            {
              "id": "opt-B",
              "text": "Counterculture"
            },
            {
              "id": "opt-C",
              "text": "Microculture"
            },
            {
              "id": "opt-D",
              "text": "Culture lag"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-97197805a0030848",
          "text": "All of the following are true regarding the function of neurons EXCEPT:",
          "options": [
            {
              "id": "opt-A",
              "text": "Hyperpolarization at the end of an action potential is one mechanism by which neurons limit the rate at which action potentials may fire."
            },
            {
              "id": "opt-B",
              "text": "The flow of sodium into the neuron depolarizes the membrane in the first phase of an action potential."
            },
            {
              "id": "opt-C",
              "text": "The transmitting neuron secretes neurotransmitters into the synaptic cleft from its dendrites."
            },
            {
              "id": "opt-D",
              "text": "An action potential is initiated when the axon hillock reaches the threshold potential."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-98dfc248e548b894",
          "text": "The electron transport chain, which is embedded in the mitochondrial membrane, exists primarily to generate new molecules of ATP for use by the cell. This is accomplished by a positive gradient of H+ ions that are formed outside the membrane which then pass back through a specialized channel known as ATP synthase. The energy created from this phosphorylates an ATP to an ATP, known as oxidative phosphorylation. The mechanism by which H+ returns to the inside of the mitochondria is known as what?",
          "options": [
            {
              "id": "opt-A",
              "text": "Passive transport"
            },
            {
              "id": "opt-B",
              "text": "Passive diffusion"
            },
            {
              "id": "opt-C",
              "text": "Active transport"
            },
            {
              "id": "opt-D",
              "text": "Endocytosis"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b307ee066b520761",
          "text": "Which of the following molecules will stop being produced first when oxygen is no longer supplied to the cell?",
          "options": [
            {
              "id": "opt-A",
              "text": "Oxaloacetate"
            },
            {
              "id": "opt-B",
              "text": "Pyruvate"
            },
            {
              "id": "opt-C",
              "text": "Water"
            },
            {
              "id": "opt-D",
              "text": "Adenosine triphosphate"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e5f7557f6e371900",
          "text": "As a result of substance abuse throughout adolescence, a young adult suffers from a number of psychological symptoms reflecting diminished executive functioning. Which of the following are likely true of this patient?\nI. Pathological changes to the prefrontal cortex.\nII. Increased susceptibility to auditory hallucinations.\nIII. Reduced behavioral impulse control.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "III only"
            },
            {
              "id": "opt-C",
              "text": "I and III only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-db3f01e2cd26b7cf",
          "text": "A wrestler attempting to lose weight for a match in December commits himself to dropping 30lbs over 2 months. Which of the following is NOT a good method to restrict his caloric intake?",
          "options": [
            {
              "id": "opt-A",
              "text": "Study at a health smoothie store instead of a coffee shop."
            },
            {
              "id": "opt-B",
              "text": "Reward himself with a savory meal every Saturday for meeting his calorie goals."
            },
            {
              "id": "opt-C",
              "text": "Snap himself with a rubber band when he eats a high calorie snack."
            },
            {
              "id": "opt-D",
              "text": "Hide snack food out of sight within his house."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d95d584305a51bd4",
          "text": "In an SDS-PAGE procedure, the SDS serves as a detergent. Why are the proteins treated with a detergent before being run through the electrophoresis gel?",
          "options": [
            {
              "id": "opt-A",
              "text": "To coat the proteins with a large positive charge, since amino acid side chains may have positive, negative, or neutral charges, and a large uniform charge is necessary to get good separation in the gel."
            },
            {
              "id": "opt-B",
              "text": "To allow the electrophoresis to separate the proteins solely on the basis of the length of the primary sequence."
            },
            {
              "id": "opt-C",
              "text": "To prevent the protein from denaturing so that the electrophoresis can accurately resolve the proteins on the basis of tertiary structure."
            },
            {
              "id": "opt-D",
              "text": "To break the intramolecular bonds holding the tertiary and primary structure of the protein together, thereby generating linear fragments that may be sorted on size."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-bdebb2f61965a61d",
          "text": "The lining of the digestive tract and the respiratory tract develops from which germ layer? I. Endoderm II. Mesoderm III. Ectoderm",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-21b7547986eef04a",
          "text": "A transmembrane protein being isolated in the laboratory is found to be composed of four different amino acids in varying quantity. They are, in order of frequency, glycine, tyrosine, arginine, and isoleucine. Of these amino acids, which is most likely to be inside the transmembrane domain?",
          "options": [
            {
              "id": "opt-A",
              "text": "Glycine"
            },
            {
              "id": "opt-B",
              "text": "Tyrosine"
            },
            {
              "id": "opt-C",
              "text": "Arginine"
            },
            {
              "id": "opt-D",
              "text": "Isoleucine"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-college-medicine-u1-external-l06",
      "title": "College Medicine — Quiz 6",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-42b53806f3ebc1ef",
          "text": "Acute Myeloid Leukemia is a malignant cancer in which myeloid progenitor cells become rapidly dividing and retain their semi-stem cell state. Under normal circumstances, which of the following cell types would arise from this stem cell?",
          "options": [
            {
              "id": "opt-A",
              "text": "NK cell"
            },
            {
              "id": "opt-B",
              "text": "Platelet"
            },
            {
              "id": "opt-C",
              "text": "T cell"
            },
            {
              "id": "opt-D",
              "text": "Lymphoid progenitor"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-876bfd6259f0fde1",
          "text": "There are five stages of mitosis that must be carried out correctly for a cell to properly divide. Match the stage of mitosis with its proper component:\nProphase — Dissolution of nucleoli",
          "options": [
            {
              "id": "opt-A",
              "text": "Metaphase — Formation of two distinct nuclear membranes"
            },
            {
              "id": "opt-B",
              "text": "Cytokinesis — Separation of sister chromatids to their respective poles"
            },
            {
              "id": "opt-C",
              "text": "Telophase — Formation of the equatorial plate"
            },
            {
              "id": "opt-D",
              "text": "Anaphase — Separation of the cytoplasm and organelles"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-076e7ca6454317c8",
          "text": "A study examined admissions to exceptionally selective colleges. When examining the correlates of admission acceptance, two obvious factors that strongly correlated with admissions were GPA and standardized test scores, with correlation values of +0.41 and +0.55 respectively. However, the study also demonstrated that those students who had social networks that overlapped with the alumni networks of the selective colleges were even more likely to be admitted, with a correlation between social network and alumni network of +0.61. This correlation demonstrates:",
          "options": [
            {
              "id": "opt-A",
              "text": "the value of cultural capital."
            },
            {
              "id": "opt-B",
              "text": "a meritocracy."
            },
            {
              "id": "opt-C",
              "text": "he value of social capital."
            },
            {
              "id": "opt-D",
              "text": "a false association."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-988e737ca73ecb59",
          "text": "A patient comes into the hospital after being bit by a dog who he stated was “acting crazy”. The wound is open and bleeding. Animal control captured the dog and said that it was foaming at the mouth and extremely aggressive. Suspecting a rabies infection, the patient is given a serum that contains rabies antibodies that were grown inside a horse. This is an example of what kind of immunity?",
          "options": [
            {
              "id": "opt-A",
              "text": "Passive"
            },
            {
              "id": "opt-B",
              "text": "Active"
            },
            {
              "id": "opt-C",
              "text": "Natural"
            },
            {
              "id": "opt-D",
              "text": "Artificial"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-65db9de10e52a89d",
          "text": "The World Systems Theory divides the world as a unit into three subcategories: core countries, periphery countries, and semi-periphery countries. Which of the following answers correlates best with semi-periphery countries?",
          "options": [
            {
              "id": "opt-A",
              "text": "Strong central government."
            },
            {
              "id": "opt-B",
              "text": "An economy centralized around one natural resource."
            },
            {
              "id": "opt-C",
              "text": "A diversified and developed economy."
            },
            {
              "id": "opt-D",
              "text": "Small percentage of very high class individuals."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c73af68de637e349",
          "text": "According to attachment theory, which of the following children is most likely to attach to a male psychologist, previously unknown to the child, in the course of a psychological study?",
          "options": [
            {
              "id": "opt-A",
              "text": "A two month old female infant raised in a safe, stable environment"
            },
            {
              "id": "opt-B",
              "text": "A five month old male infant raised in a safe, stable environment"
            },
            {
              "id": "opt-C",
              "text": "An eight month old male infant raised by a single caregiver who frequently neglect the child"
            },
            {
              "id": "opt-D",
              "text": "A thirteen month old female infant raised by two caregivers who occasionally neglect the child"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-836c87022affe900",
          "text": "The hypothalamus controls the stress response of the body by releasing CRF, which leads to eventual release of cortisol, the body’s stress hormone, systemically. This trigger is eventually suppressed by which mechanism?",
          "options": [
            {
              "id": "opt-A",
              "text": "Constriction of blood flow to the adrenal gland."
            },
            {
              "id": "opt-B",
              "text": "Exhaustion of the body’s store of CRF."
            },
            {
              "id": "opt-C",
              "text": "Negative feedback loop of cortisol."
            },
            {
              "id": "opt-D",
              "text": "Release of CRF-inhibitory factor."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-57c1b6ca536a51e6",
          "text": "A local politician starts a task force to reduce prejudice and hate crimes, and the task force provides recommendations for increased access to education, paid community improvement projects open to people from different, possibly conflicted, groups, and stricter anti-hate ordinances to be passed at the local level. These recommendations are based on:\nI. Self-esteem hypothesis\nII. Contact hypothesis\nIII. Hypothesis\nIV. Legal hypothesis",
          "options": [
            {
              "id": "opt-A",
              "text": "I, II, and III"
            },
            {
              "id": "opt-B",
              "text": "II, III, and IV"
            },
            {
              "id": "opt-C",
              "text": "I, III, and IV"
            },
            {
              "id": "opt-D",
              "text": "I, II, and IV"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d8464e0f90e26374",
          "text": "The energy for all forms of muscle contraction is provided by:",
          "options": [
            {
              "id": "opt-A",
              "text": "ATP."
            },
            {
              "id": "opt-B",
              "text": "ADP."
            },
            {
              "id": "opt-C",
              "text": "phosphocreatine."
            },
            {
              "id": "opt-D",
              "text": "oxidative phosphorylation."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-56160ce61ae7a1dc",
          "text": "How can several different proteins be produced from the same gene?",
          "options": [
            {
              "id": "opt-A",
              "text": "By selective transcription of different parts of the DNA in the gene."
            },
            {
              "id": "opt-B",
              "text": "By doubling or tripling the length of the mRNA molecule produced from the primary transcript."
            },
            {
              "id": "opt-C",
              "text": "The primary transcripts of many genes can be spliced in various ways to produce different mRNAs, a process known as alternative RNA splicing."
            },
            {
              "id": "opt-D",
              "text": "By splicing of the mRNA molecule after it has been formed from the primary transcript."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-f12df29379cf8afb",
          "text": "A scientist using mouse models to determine the response of blood hormones to large levels of glucose in the body discovers a new hormone not previously described. According to his data, this hormone is found both inside and out of cells when carrying out its function, increase the amount of nucleic acid in the cell while functioning, and are derived from a structure containing four hydroxycarbon rings. This will likely be categorized as which type of hormone?",
          "options": [
            {
              "id": "opt-A",
              "text": "Enzymatic"
            },
            {
              "id": "opt-B",
              "text": "Steroid"
            },
            {
              "id": "opt-C",
              "text": "Peptide"
            },
            {
              "id": "opt-D",
              "text": "Amino acid"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-5fbca4da8a3c1eb9",
          "text": "The coding sequences of genes are called:",
          "options": [
            {
              "id": "opt-A",
              "text": "extrons."
            },
            {
              "id": "opt-B",
              "text": "exons."
            },
            {
              "id": "opt-C",
              "text": "introns."
            },
            {
              "id": "opt-D",
              "text": "codons."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-545d5b50045b2fe9",
          "text": "Each of the following is an example of the transmission of knowledge through symbolic culture EXCEPT:\nI. A young macaque monkey learning to rinse off food in the ocean from an older monkey, even when the food is not covered in dirt or sand.\nII. A child learning the rules of baseball from a parent.\nIII. A new group of inductees in a military organization experiencing hazing rituals from older students, which they then later carry out on new recruits.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "III only"
            },
            {
              "id": "opt-C",
              "text": "I and III only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-2d81500096193f66",
          "text": "One of the many reasons that the eukaryotic cell can possess so much information in its DNA is the ability to condense coding regions when they are not being expressed. When acting on DNA, which of the following processes will usually lead to a decrease in gene expression?",
          "options": [
            {
              "id": "opt-A",
              "text": "Increased histone acetyltransferase activity"
            },
            {
              "id": "opt-B",
              "text": "Decrease in histone deacetyltransferase activity"
            },
            {
              "id": "opt-C",
              "text": "Increase in methylation activity"
            },
            {
              "id": "opt-D",
              "text": "Increase in heterochromatin:euchromatin ratio"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-df7718f7222d6fc8",
          "text": "How many electrons does gold (Au) possess that have a quantum number l = 2?",
          "options": [
            {
              "id": "opt-A",
              "text": "9"
            },
            {
              "id": "opt-B",
              "text": "23"
            },
            {
              "id": "opt-C",
              "text": "29"
            },
            {
              "id": "opt-D",
              "text": "79"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-college-medicine-u1-external-l07",
      "title": "College Medicine — Quiz 7",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-4d7afea92be6455d",
          "text": "Sauna use, sometimes referred to as \"sauna bathing,\" is characterized by short-term passive exposure to extreme heat. This exposure elicits mild hyperthermia – an increase in the body's core temperature – that induces a thermoregulatory response involving neuroendocrine, cardiovascular, and cytoprotective mechanisms that work together to restore homeostasis and condition the body for future heat stressors… In recent decades, sauna bathing has emerged as a means to increase lifespan and improve overall health, based on compelling data from observational, interventional, and mechanistic studies. Of particular interest are the findings from studies of participants in the Kuopio Ischemic Heart Disease Risk Factor (KIHD) Study, an ongoing prospective population-based cohort study of health outcomes in more than 2,300 middle-aged men from eastern Finland, which identified strong links between sauna use and reduced death and disease… The KIHD findings showed that men who used the sauna two to three times per week were 27 percent less likely to die from cardiovascular-related causes than men who didn't use the sauna.[2] Furthermore, the benefits they experienced were found to be dose-dependent: Men who used the sauna roughly twice as often, about four to seven times per week, experienced roughly twice the benefits – and were 50 percent less likely to die from cardiovascular-related causes.[2] In addition, frequent sauna users were found to be 40 percent less likely to die from all causes of premature death. These findings held true even when considering age, activity levels, and lifestyle factors that might have influenced the men's health.[2]... The KIHD also revealed that frequent sauna use reduced the risk of developing dementia and Alzheimer's disease in a dose-dependent manner. Men who used the sauna two to three times per week had a 66 percent lower risk of developing dementia and a 65 percent lower risk of developing Alzheimer's disease, compared to men who used the sauna only one time per week… The health benefits associated with sauna use extended to other aspects of mental health, as well. Men participating in the KIHD study who used the sauna four to seven times per week were 77 percent less likely to develop psychotic disorders, regardless of the men's dietary habits, socioeconomic status, physical activity, and inflammatory status (as measured by C-reactive protein)…Exposure to high temperature stresses the body, eliciting a rapid, robust response. The skin and core body temperatures increase markedly, and sweating ensues. The skin heats first, rising to 40°C (104°F), and then changes in core body temperature occur, rising slowly from 37°C (98.6°F, or normal) to 38°C (100.4°F) and then rapidly increasing to 39°C (102.2°F)…  Cardiac output, a measure of the amount of work the heart performs in response to the body's need for oxygen, increases by 60 to 70 percent, while the heart rate (the number of beats per minute) increases and the stroke volume (the amount of blood pumped) remains unchanged.[5] During this time, approximately 50 to 70 percent of the body's blood flow is redistributed from the core to the skin to facilitate sweating. The average person loses approximately 0.5 kg of sweat while sauna bathing.[11] Acute heat exposure also induces a transient increase in overall plasma volume to mitigate the decrease in core blood volume. This increase in plasma volume not only provides a reserve source of fluid for sweating, but it also acts like the water in a car's radiator, cooling the body to prevent rapid increases in core body temperature and promoting heat tolerance… Repeated sauna use acclimates the body to heat and optimizes the body's response to future exposures, likely due to a biological phenomenon known as hormesis, a compensatory defense response following exposure to a mild stressor that is disproportionate to the magnitude of the stressor. Hormesis triggers a vast array of protective mechanisms that not only repair cell damage but also provide protection from subsequent exposures to more devastating stressors… The physiological responses to sauna use are remarkably similar to those experienced during moderate- to vigorous-intensity exercise. In fact, sauna use has been proposed as an alternative to exercise for people who are unable to engage in physical activity due to chronic disease or physical limitations.[13]\n\nAccording to the article, which of the following is NOT a benefit of sauna use?",
          "options": [
            {
              "id": "opt-A",
              "text": "Decreased risk of heart attacks."
            },
            {
              "id": "opt-B",
              "text": "Increase in stroke volume."
            },
            {
              "id": "opt-C",
              "text": "Improved mental health."
            },
            {
              "id": "opt-D",
              "text": "Decreased rate of erectile dysfunction."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-7d0780b28efaa88b",
          "text": "Fire hoses always have a nozzle on the end of the hose, which in part works by decreasing the area of the water exiting the fire hydrant to create a more forceful stream. If the starting velocity of water from a fire hydrant is 2 m/s, pressure is kept constant, and the end of the nozzle is 1/3 the area of the start of the hose, what is the final velocity of water as it exits?",
          "options": [
            {
              "id": "opt-A",
              "text": "2 m/s"
            },
            {
              "id": "opt-B",
              "text": "8 m/s"
            },
            {
              "id": "opt-C",
              "text": "5 m/s"
            },
            {
              "id": "opt-D",
              "text": "6 m/s"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ba2bd70e7ba83060",
          "text": "During DNA replication, mistakes are coded into the leading strand about once every 100,000/1 million copies. This DNA is subject to proofreading by several mechanisms. If a mistake is noted and the incorrect base is removed shortly following the time RNA primer is removed, this would most likely be the work of which repair mechanism?",
          "options": [
            {
              "id": "opt-A",
              "text": "DNA polymerase I"
            },
            {
              "id": "opt-B",
              "text": "DNA polymerase III"
            },
            {
              "id": "opt-C",
              "text": "Mismatch repair mechanism"
            },
            {
              "id": "opt-D",
              "text": "Endonuclease repair"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-e0723faa76874185",
          "text": "Each of the following are aspects of the McDonaldization of Society EXCEPT:",
          "options": [
            {
              "id": "opt-A",
              "text": "Rationalization of decisions into cost/benefit analysis structures and away from traditional modes of thinking"
            },
            {
              "id": "opt-B",
              "text": "Bureaucratic organization that formalizes well-establish division of labor and impersonal structures"
            },
            {
              "id": "opt-C",
              "text": "A dissolution of hierarchical modes of authority into collaborative teambased decision protocols"
            },
            {
              "id": "opt-D",
              "text": "An intense effort on achieving sameness across diverse markets"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a231e0806c5a2748",
          "text": "The descending loop of Henle of the nephron of the kidney is permeable to which of the following substances?",
          "options": [
            {
              "id": "opt-A",
              "text": "Na+"
            },
            {
              "id": "opt-B",
              "text": "H2O"
            },
            {
              "id": "opt-C",
              "text": "K+"
            },
            {
              "id": "opt-D",
              "text": "Cl-"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-76fbecf020f169e2",
          "text": "A student observes that mercury forms a convex meniscus in the graduated cylinder but that water forms a concave one. This behavior is best explained by the fact that:",
          "options": [
            {
              "id": "opt-A",
              "text": "the two liquids are being kept in graduated cylinders made of different materials."
            },
            {
              "id": "opt-B",
              "text": "the adhesive forces between water and the walls of the graduated cylinder are greater than the adhesive forces between the mercury and the walls of the graduated cylinder."
            },
            {
              "id": "opt-C",
              "text": "the cohesive forces between two mercury atoms are stronger than the cohesive forces between two water molecules."
            },
            {
              "id": "opt-D",
              "text": "the mercury has strong cohesive than adhesive forces, whereas water has strong adhesive than cohesive ones."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f9fceb914d72123f",
          "text": "Human beings require many outside resources in order to survive. An individual will not survive without water, air, etc. Thankfully, the human brain is wired to seek out these resources when they are depleted before harm occurs to the individual. The downside of this, however, is that they can produce too much reward, and become a temptation. Which of the following statements would mean a desire has become a temptation?",
          "options": [
            {
              "id": "opt-A",
              "text": "A person desiring to lose weight makes a late night snack to quell a craving."
            },
            {
              "id": "opt-B",
              "text": "A marathon runner seeks out water after finishing a race."
            },
            {
              "id": "opt-C",
              "text": "A free diver delays leaving the beach after a dive by a few minutes in order to regain their breath."
            },
            {
              "id": "opt-D",
              "text": "A person pauses their show on TV in order to grab a blanket because they are cold."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-626aff66ba19899b",
          "text": "Which of the following would be the most accurate definition of Nietzsche’s Will to Truth?\"",
          "options": [
            {
              "id": "opt-A",
              "text": "An intrinsic desire to know the truth."
            },
            {
              "id": "opt-B",
              "text": "Moral drive to act toward what is good."
            },
            {
              "id": "opt-C",
              "text": "A subset of our ego that acts towards what is right."
            },
            {
              "id": "opt-D",
              "text": "Our desire for love."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a0bbb7bab2e3fddc",
          "text": "A young adult man begins seeing a therapist and tells the therapist that he has homosexual feelings, and that he self-identifies as gay. He is plagued by feelings of worthlessness and fears that he will be subject to what his religion terms “eternal damnation”. He feels alienated from his family and friends, as he knows of no other homosexuals in his peer group or family. In the course of working with the man, the therapist helps him see that his feelings are exceptionally common among people who have recently discovered their same-sex feelings, and encourages him to attend a support group for newly “out” gay men. The therapist’s approach demonstrates which of the following phenomena?",
          "options": [
            {
              "id": "opt-A",
              "text": "Stereotype threat"
            },
            {
              "id": "opt-B",
              "text": "Groupthink"
            },
            {
              "id": "opt-C",
              "text": "Universalization"
            },
            {
              "id": "opt-D",
              "text": "Spatial discrimination"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-54d32d3072f63b77",
          "text": "A 1 meter tall jug of water, while sitting on a countertop 2 meters high with its lid open, springs a leak from a weak spot in the plastic at the very bottom of the side. How fast will water empty from the jug?",
          "options": [
            {
              "id": "opt-A",
              "text": "4.47 m/s"
            },
            {
              "id": "opt-B",
              "text": "6.25 m/s"
            },
            {
              "id": "opt-C",
              "text": "8.26 m/s"
            },
            {
              "id": "opt-D",
              "text": "2.22 m/s"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-77f9f9ea4b80d039",
          "text": "A psychology study run on a college campus was set up right outside of the gym on a weekday. Chocolate chip cookies were offered right outside the door, and then a sign was placed 15 feet further down the hall that asked people to avoid using the stairs, forcing them to go around in a longer hallway. There were no barriers to using the stairs other than the sign. The results returned, and it showed that individuals who took a sweet from the tray were twice as likely to use the longer hallway as individuals who refused. This is an example of what psychological concept?",
          "options": [
            {
              "id": "opt-A",
              "text": "Learned helplessness"
            },
            {
              "id": "opt-B",
              "text": "Insecure attachment"
            },
            {
              "id": "opt-C",
              "text": "Ego depletion"
            },
            {
              "id": "opt-D",
              "text": "Tyranny of choice"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d482da993f6e1f34",
          "text": "Cystic Fibrosis (CF) patients often have a loss of pancreas activity during their adolescent years. Loss of which enzyme, if isolated would lead to the most extensive effects on nutrient absorption?",
          "options": [
            {
              "id": "opt-A",
              "text": "Lipase"
            },
            {
              "id": "opt-B",
              "text": "Elastinogen"
            },
            {
              "id": "opt-C",
              "text": "Trypsinogen"
            },
            {
              "id": "opt-D",
              "text": "Carboxypeptidase"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c8eedc5bc8f42367",
          "text": "Somatic eukaryotic cells in the human body proceed normally through repetitive phases of the cell cycle in order to divide and make replicates of themselves. The point at which a cell commits to dividing is known as the restriction point (R). Prior to this, how many chromosomes and chromatids does the cell have?",
          "options": [
            {
              "id": "opt-A",
              "text": "23 chromosomes, 46 chromatids"
            },
            {
              "id": "opt-B",
              "text": "46 chromosomes, 92 chromatids"
            },
            {
              "id": "opt-C",
              "text": "23 chromosomes, 23 chromatids"
            },
            {
              "id": "opt-D",
              "text": "46 chromosomes, 46 chromatids"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b07159798ba9c657",
          "text": "A person suffering from severe dehydration and starvation would NOT be expected to have elevated plasma concentrations for which of the following hormones?",
          "options": [
            {
              "id": "opt-A",
              "text": "ADH"
            },
            {
              "id": "opt-B",
              "text": "Cortisol"
            },
            {
              "id": "opt-C",
              "text": "Aldosterone"
            },
            {
              "id": "opt-D",
              "text": "Insulin"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a98fe566530919c6",
          "text": "A young woman comes to the clinic for feeling like her “heart is beating too fast”. When her pulse is recorded it is in normal range. Upon interview, you learn that she is often concerned about lots of things. In fact, she can’t remember many instances in which she has not had some event playing over and over in her head. She says that she often seeks out relationships to comfort her self-esteem, and admits she stays in these relationships too long for fear of being alone. What personality cluster would this person fall under?",
          "options": [
            {
              "id": "opt-A",
              "text": "Cluster A"
            },
            {
              "id": "opt-B",
              "text": "Cluster B"
            },
            {
              "id": "opt-C",
              "text": "Cluster C"
            },
            {
              "id": "opt-D",
              "text": "This does not seem like a personality disorder."
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-college-medicine-u1-external-l08",
      "title": "College Medicine — Quiz 8",
      "type": "quiz",
      "duration": 5,
      "questions": [
        {
          "id": "mmlu-7e4105a6c818893c",
          "text": "The social phenomenon of groupthink is characterized by all of the following EXCEPT:",
          "options": [
            {
              "id": "opt-A",
              "text": "A significant over-rating of the decision-making abilities of members of the ingroup."
            },
            {
              "id": "opt-B",
              "text": "A decrease in the creativity of individual group members in contributing to solutions the ingroup wants to achieve."
            },
            {
              "id": "opt-C",
              "text": "High loyalty and group cohesiveness causing members to feel safe raising controversial issues and proposing alternative solutions."
            },
            {
              "id": "opt-D",
              "text": "An effort to minimize conflict and ensure consensus."
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    }
  ],
  "tags": [
    "external-ai",
    "curriculum-import",
    "masters",
    "college-medicine",
    "mmlu"
  ],
  "minAge": 21,
  "maxAge": 99,
  "version": "external-1.0",
  "difficultyBand": "advanced",
  "gradeBand": "graduate",
  "learningObjectives": [
    "Master key concepts in college medicine",
    "Apply analytical reasoning to college medicine problems",
    "Demonstrate proficiency through assessments and case analysis"
  ],
  "external": {
    "sources": [
      "mmlu"
    ],
    "licenses": [
      "MIT"
    ],
    "attributions": [
      "MMLU (cais/mmlu)"
    ],
    "itemCounts": {
      "questions": 106,
      "flashcards": 0,
      "chunks": 0
    },
    "importedAt": "2026-03-03T05:42:54.859Z",
    "totalLessons": 8,
    "overflow": 0
  },
  "metadata": {
    "generatedBy": "ingest-universal-curriculum.mjs",
    "importDate": "2026-03-03T05:42:54.859Z"
  }
};
