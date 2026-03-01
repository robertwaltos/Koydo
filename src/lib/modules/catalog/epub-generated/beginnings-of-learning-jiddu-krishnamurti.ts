import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:/My Drive/15_E-BOOKS/file002209.epub
// Author: Jiddu Krishnamurti  |  Subject: Philosophy/Education

export const BeginningsOfLearningJidduKrishnamurtiModule: LearningModule = {
  id: "beginnings-of-learning-jiddu-krishnamurti",
  title: "Beginnings of Learning",
  description:
    "A comprehensive educational module derived from Beginnings of Learning by Jiddu Krishnamurti. This course provides structured video lessons and interactive quizzes exploring the key themes, arguments, and insights of the work.",
  subject: "Philosophy/Education",
  tags: ["epub-derived", "curriculum", "interactive", "philosophy", "education"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Understand and critically analyze the concepts related to quotations",
    "Understand and critically analyze the concepts related to part one conversations with students and staff at brockwood park",
    "Understand and critically analyze the concepts related to 8 the sense of beauty",
    "Understand and critically analyze the concepts related to quotations",
    "Understand and critically analyze the concepts related to part two conversations with parents and teachers",
    "Understand and critically analyze the concepts related to 2 you cannot get the whole feeling of a country unless you",
    "Understand and critically analyze the concepts related to 3 in the early morning before the sun was up there was",
  ],
  lessons: [
    /* ─────────────────────────────────────────────────
       L01  QUOTATIONS
    ───────────────────────────────────────────────── */
    {
      id: "bl-l01",
      title: "QUOTATIONS",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to quotations",
        "Examine the key ideas and arguments related to part one conversations with students and staff at brockwood park",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "bl-l01-c1",
          title: "QUOTATIONS",
          content:
            "PART I: QUOTATIONS The world is that way, deceptive, the deceiving politicians, the money-minded... If you are not properly educated you’ll just slip into it. So what do you think is education? Is it to help you to fit into the mechanism of the present order, or disorder, of things? Or do you think it should be something else? Is our education at Brockwood helping you to be intelligent? I mean by that word to be very sensitive, not to your own desires, to your own demands, but to be sensitive to the world, to what is going on in the world. Surely education is not merely to give you knowledge, but also to give you the capacity to look at the world objectively.",
        },
        {
          id: "bl-l01-c2",
          title: "PART ONE Conversations with Students and Staff at Brockwood Park",
          content:
            "PART ONE Conversations with Students and Staff at Brockwood Park 1 Problems of living at Brockwood where there is no authority. Difference between sentiment and affection. The feeling of being ‘at home’. KRISHNAMURTI: Most people work either to avoid punishment or to gain something in the way of possessions, money, fame and so on. So most people work under great pressure. Here at Brockwood there is not that extreme pressure, or any kind of pressure put upon you. Therefore there is a tendency, if I may point out, to slacken, to let go, to become rather empty and lose that vitality that youth generally has—that feeling of urgency, the flame of doing something.",
        },
        {
          id: "bl-l01-c3",
          title: "Deeper Analysis: QUOTATIONS",
          content:
            "The function of education is to help you to face the world in a totally different intelligent way. When you have that seed, and it is flowering here, then you will keep it going all your life. But if this doesn’t operate, then the world will destroy you. The world makes you what it wants you to be: a cunning animal.",
        },
      ],
      flashcards: [
        {
          id: "bl-l01-f1",
          front: "QUOTATIONS",
          back:
            "The function of education is to help you to face the world in a totally different intelligent way.",
        },
        {
          id: "bl-l01-f2",
          front: "PART ONE Conversations with Students and Staff at Brockwood Park",
          back:
            "All that gradually disappears and you are left here to be responsible to yourself, which is rather difficult.",
        },
        {
          id: "bl-l01-f3",
          front: "Key concept: QUOTATIONS",
          back:
            "The function of education is to help you to face the world in a totally different intelligent way.",
        },
        {
          id: "bl-l01-f4",
          front: "Key concept: PART ONE Conversations with Students and Staff at Brockwo",
          back:
            "Brockwood is supposed to give you—and I hope it does—the terrain, the environment, the atmosphere in which this self-generating energy can go on.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L02  8 The sense of beauty and QUOTATIONS
    ───────────────────────────────────────────────── */
    {
      id: "bl-l02",
      title: "8 The sense of beauty and QUOTATIONS",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to 8 the sense of beauty",
        "Examine the key ideas and arguments related to quotations",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "bl-l02-c1",
          title: "8 The sense of beauty",
          content:
            "8 The sense of beauty. Questioner: There is something I’d like to discuss. I see that like and dislike are a matter of opinion—as what is ugly and what is beautiful—everyone has their own ideas. If I have no image about things, is there anything beautiful or ugly? KRISHNAMURTI: To like: has that anything to do with affection, with love? Questioner: No. KRISHNAMURTI: Don’t say, no or yes, go into it. And the feeling of beauty, does it come out of an image? Look at it—don’t answer. I see a building created in space, and I say, ‘How beautiful that is.’ Now that expression, ‘How beautiful’, is it born of an image? Or is there no image, but the perception of something which has proportion, depth, quality, workmanship?",
        },
        {
          id: "bl-l02-c2",
          title: "QUOTATIONS",
          content:
            "PART II: QUOTATIONS It is not that there must be an end to seeking, but rather the beginning of learning. Learning is far more important than finding. As long as education is concerned merely with the culture of the outer ... the inner movement with its immense depth will inevitably be for the few and in that there lies great sorrow. Sorrow cannot be solved, cannot be understood when you are running with tremendous energy along the superficial. Unless you solve this through self-knowing you will have revolt after revolt, reforms which need further reformation, and the endless antagonism of man against man will go on.",
        },
        {
          id: "bl-l02-c3",
          title: "Deeper Analysis: 8 The sense of beauty",
          content:
            "Questioner: You have an image of what is beautiful or of what you like: you are comparing it with something else. Your conditioning comes in. KRISHNAMURTI: That’s right. Watch it, it is much more complex than that. You see that tree—do you say it is beautiful? Why do you say it is beautiful, who has told you? Or, apart from the images, do you feel from everything a sense of beauty?—not related to trees, buildings, people. You understand?—the sense of beauty—not looking at anything particular. Questioner: If you really look, it doesn’t only happen with trees.",
        },
      ],
      flashcards: [
        {
          id: "bl-l02-f1",
          front: "8 The sense of beauty",
          back:
            "Questioner: You have an image of what is beautiful or of what you like: you are comparing it with something else.",
        },
        {
          id: "bl-l02-f2",
          front: "QUOTATIONS",
          back:
            "The heart of the matter is education, it is the total understanding of man and not an emphasis on one fragment of his life ...",
        },
        {
          id: "bl-l02-f3",
          front: "Key concept: 8 The sense of beauty",
          back:
            "KRISHNAMURTI: You see a building and you say, ‘How beautiful that is.’ Is it because you have compared it with other buildings?—or because it is a famous building by Wren or the An...",
        },
        {
          id: "bl-l02-f4",
          front: "Key concept: QUOTATIONS",
          back:
            "The heart of the matter is education, it is the total understanding of man and not an emphasis on one fragment of his life ...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L03  PART TWO Conversations with Parents and Teachers
    ───────────────────────────────────────────────── */
    {
      id: "bl-l03",
      title: "PART TWO Conversations with Parents and Teachers",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to part two conversations with parents and teachers",
        "Examine the key ideas and arguments related to 2 you cannot get the whole feeling of a country unless you",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "bl-l03-c1",
          title: "PART TWO Conversations with Parents and Teachers",
          content:
            "PART TWO Conversations with Parents and Teachers 1 It is always exciting to go to a new country, especially when you are very young. One feels that very much in this country where there is great physical freedom, where everyone seems to have so much energy, where there is a restless, changing activity that seems to have no end. From coast to coast, except for one or two cities, the great towns are all alike. But the country is vast and extraordinarily beautiful with its great spaces, deserts and long, winding deep rivers. You can find all climates here from the tropics to high, snowy mountains. Overlooking the blue Pacific, in a large room several of us were talking about education.",
        },
        {
          id: "bl-l03-c2",
          title: "2 You cannot get the whole feeling of a country unless you",
          content:
            "2 You cannot get the whole feeling of a country unless you have lived in it for some time. Yet the people who live there, who spend their days and years and die there, seldom, it seems, have a feeling for the whole of their own country. People in this vast country with so many languages, generally are very secular and provincial. The different class divisions which at one time bound them together through religion, chants and stories, are rapidly going; this unity, this feeling of sacredness of life, of things that are beyond thought is disappearing.",
        },
        {
          id: "bl-l03-c3",
          title: "Deeper Analysis: PART TWO Conversations with Parents and Teachers",
          content:
            "A tall man in a tweed jacket said: ‘My sons and daughters are in revolt. They seem to regard their home as a passage to somewhere else. They have a feeling that they cannot be told anything, that they have all the answers. They dislike any form of authority or what they think is authority. They are naturally against war, not because they have thought a great deal about the causes of war, but because they are against killing other human beings; yet they would approve of war for certain causes. They are strangely violent, not only with us, but they are against the government, against this and that.",
        },
      ],
      flashcards: [
        {
          id: "bl-l03-f1",
          front: "PART TWO Conversations with Parents and Teachers",
          back:
            "A tall man in a tweed jacket said: ‘My sons and daughters are in revolt.",
        },
        {
          id: "bl-l03-f2",
          front: "2 You cannot get the whole feeling of a country unless you",
          back:
            "When you came year after year and spent several months here, you would notice the general decline; you would see in every big town the enormous increase in population; and walking...",
        },
        {
          id: "bl-l03-f3",
          front: "Key concept: PART TWO Conversations with Parents and Teachers",
          back:
            "They say they are against conformity but from what I have seen of them and the friends they bring home they are as conforming in their way as we ever were.",
        },
        {
          id: "bl-l03-f4",
          front: "Key concept: 2 You cannot get the whole feeling of a country unless yo",
          back:
            "The people are concerned with politics—one group against another group—the encroaching poverty, the squalor, the filth, but very few talk about the beauty of the land.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "bl-l04",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "bl-l04-q1",
          text: "Which of the following best describes a key idea from the section on QUOTATIONS?",
          options: [
            { id: "a", text: "PART ONE Conversations with Students and Staff at Brockwood Park 1 Problems of living at Brockwood w..." },
            { id: "b", text: "8 The sense of beauty." },
            { id: "c", text: "PART I: QUOTATIONS The world is that way, deceptive, the deceiving politicians, the money-minded..." },
            { id: "d", text: "PART II: QUOTATIONS It is not that there must be an end to seeking, but rather the beginning of lear..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to QUOTATIONS. PART I: QUOTATIONS The world is that way, deceptive, the deceiving politicians, the money-minded...",
        },
        {
          id: "bl-l04-q2",
          text: "Which of the following best describes a key idea from the section on PART ONE Conversations with Students and Staff at Brockwood Park?",
          options: [
            { id: "a", text: "PART ONE Conversations with Students and Staff at Brockwood Park 1 Problems of living at Brockwood w..." },
            { id: "b", text: "8 The sense of beauty." },
            { id: "c", text: "PART II: QUOTATIONS It is not that there must be an end to seeking, but rather the beginning of lear..." },
            { id: "d", text: "PART I: QUOTATIONS The world is that way, deceptive, the deceiving politicians, the money-minded..." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to PART ONE Conversations with Students and Staff at Brockwood Park. PART ONE Conversations with Students and Staff at Brockwood Park 1 Problems of living at Brockwood w...",
        },
        {
          id: "bl-l04-q3",
          text: "Which of the following best describes a key idea from the section on 8 The sense of beauty?",
          options: [
            { id: "a", text: "8 The sense of beauty." },
            { id: "b", text: "PART I: QUOTATIONS The world is that way, deceptive, the deceiving politicians, the money-minded..." },
            { id: "c", text: "PART II: QUOTATIONS It is not that there must be an end to seeking, but rather the beginning of lear..." },
            { id: "d", text: "PART ONE Conversations with Students and Staff at Brockwood Park 1 Problems of living at Brockwood w..." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to 8 The sense of beauty. 8 The sense of beauty.",
        },
        {
          id: "bl-l04-q4",
          text: "Which of the following best describes a key idea from the section on QUOTATIONS?",
          options: [
            { id: "a", text: "PART I: QUOTATIONS The world is that way, deceptive, the deceiving politicians, the money-minded..." },
            { id: "b", text: "8 The sense of beauty." },
            { id: "c", text: "PART II: QUOTATIONS It is not that there must be an end to seeking, but rather the beginning of lear..." },
            { id: "d", text: "PART ONE Conversations with Students and Staff at Brockwood Park 1 Problems of living at Brockwood w..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to QUOTATIONS. PART II: QUOTATIONS It is not that there must be an end to seeking, but rather the beginning of lear...",
        },
        {
          id: "bl-l04-q5",
          text: "Which of the following best describes a key idea from the section on PART TWO Conversations with Parents and Teachers?",
          options: [
            { id: "a", text: "8 The sense of beauty." },
            { id: "b", text: "PART TWO Conversations with Parents and Teachers 1 It is always exciting to go to a new country, esp..." },
            { id: "c", text: "PART I: QUOTATIONS The world is that way, deceptive, the deceiving politicians, the money-minded..." },
            { id: "d", text: "PART ONE Conversations with Students and Staff at Brockwood Park 1 Problems of living at Brockwood w..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to PART TWO Conversations with Parents and Teachers. PART TWO Conversations with Parents and Teachers 1 It is always exciting to go to a new country, esp...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L05  3 In the early morning before the sun was up there was
    ───────────────────────────────────────────────── */
    {
      id: "bl-l05",
      title: "3 In the early morning before the sun was up there was",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to 3 in the early morning before the sun was up there was",
        "Examine the key ideas and arguments related to 4 it was an old, vast byzantine building which had become a",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "bl-l05-c1",
          title: "3 In the early morning before the sun was up there was",
          content:
            "3 In the early morning before the sun was up there was a haze over the river. You could dimly see the other bank. It was still rather dark and the trees were shadows against the light sky. The fishing boats were still there: they had been there all night with their little lanterns. Dark and almost motionless, they had been fishing all night and there was not a sound from them. Occasionally of an evening you would hear the fishermen singing but now in the early dawn they were very quiet, tired out and sleepy. The current was carrying them gently along and they would presently return with their catch to their little village on this side of the river further down.",
        },
        {
          id: "bl-l05-c2",
          title: "4 It was an old, vast Byzantine building which had become a",
          content:
            "4 It was an old, vast Byzantine building which had become a mosque. It was immense. Inside they were chanting the Koran and one sat beside a beggar on a carpet under the huge dome. The chanting was magnificent, echoing in the great space. There was no difference here between the beggar and that well-dressed man, apparently well-to-do. There were no women here. The men had their heads bowed, muttering to themselves silently. Light came through the coloured glass and made patterns on the carpet. Outside were many beggars, so many people wanting things; and down there was the blue sea, dividing the East and the West. It was a very ancient temple.",
        },
        {
          id: "bl-l05-c3",
          title: "Deeper Analysis: 3 In the early morning before the sun was up there was",
          content:
            "As you watched, the rising sun would light up a few clouds in the sky. They were golden and full of that strange beauty of a morning. The light was spreading, making everything visible; the sun lately rising over the trees caught the few parrots screeching their way to the fields that lay beyond the river. They flew noisily, swiftly—green and red beaked—and they would return in an hour or more to their little holes in the tamarind tree across the garden. As you watched they blended into the green leaves so that you could scarcely see them except for their bright red beaks.",
        },
      ],
      flashcards: [
        {
          id: "bl-l05-f1",
          front: "3 In the early morning before the sun was up there was",
          back:
            "As you watched, the rising sun would light up a few clouds in the sky.",
        },
        {
          id: "bl-l05-f2",
          front: "4 It was an old, vast Byzantine building which had become a",
          back:
            "They really couldn’t tell how old it was but they loved to exaggerate the antiquity of their temples.",
        },
        {
          id: "bl-l05-f3",
          front: "Key concept: 3 In the early morning before the sun was up there was",
          back:
            "The sun was making a golden path over the water and a train rattled by across the bridge with a hideous noise; but it was the water that held the beauty of the morning.",
        },
        {
          id: "bl-l05-f4",
          front: "Key concept: 4 It was an old, vast Byzantine building which had become",
          back:
            "All the pillars were carved; there was a great sense of space and heavy dignity, and because it was so bright outside in the dazzling sun, here it was cool.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L06  5 Most of us do not seem to give sufficient importance to
    ───────────────────────────────────────────────── */
    {
      id: "bl-l06",
      title: "5 Most of us do not seem to give sufficient importance to",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to 5 most of us do not seem to give sufficient importance to",
        "Examine the key ideas and arguments related to 6 there is no sequence in meditation",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "bl-l06-c1",
          title: "5 Most of us do not seem to give sufficient importance to",
          content:
            "5 Most of us do not seem to give sufficient importance to meditation. For most it is a passing thing in which some kind of experience is expected, some transcendental attainment, a fulfilment after all other attempts at fulfilment have failed. Meditation becomes a self-hypnotic movement in which appear various projections and symbols. But these are a continuity of what has been, perhaps modified or enlarged, but always within the area of some achievement. All this is rather immature and childish without great significance, and without breaking away from the established order—or disorder—of past events. These happenings become extraordinarily significant to a mind that is concerned with its own advancement, improvement and self-determined expectations.",
        },
        {
          id: "bl-l06-c2",
          title: "6 There is no sequence in meditation",
          content:
            "6 There is no sequence in meditation. There is no continuity for this implies time and space and action within that. Our whole psychological activity is within the field of time and space and from this follows action which is always incomplete. Our mind is conditioned to the acceptance of time and space. From here to there, the chain of this and that, is time-sequence. In this movement action will bring about contradiction and therefore conflict. This is our life. Can action ever be free of time, so that there are neither regrets nor anticipation, the backward and forward looking of action? Seeing is acting. It is not first understanding and then acting, but rather seeing which in itself is action.",
        },
        {
          id: "bl-l06-c3",
          title: "Deeper Analysis: 5 Most of us do not seem to give sufficient importance to",
          content:
            "When the mind breaks through all this rubbish, which can only happen with self-knowing, then what happens can never be told to another. Even in the telling things have already changed. It is like describing a storm. It is already over the hills, the valleys, and gone beyond. And so the telling of it becomes something of the past and therefore no longer what is actually taking place. One can describe something accurately—an event—but the very accuracy of it becomes inaccurate when the thing has moved away. The accuracy of memory is a fact but memory is the result of something that has already happened. If the mind is following the flow of a river it has no time for description, nor for memory to gather itself.",
        },
      ],
      flashcards: [
        {
          id: "bl-l06-f1",
          front: "5 Most of us do not seem to give sufficient importance to",
          back:
            "When the mind breaks through all this rubbish, which can only happen with self-knowing, then what happens can never be told to another.",
        },
        {
          id: "bl-l06-f2",
          front: "6 There is no sequence in meditation",
          back:
            "In this there is no element of time, so the mind is always free.",
        },
        {
          id: "bl-l06-f3",
          front: "Key concept: 5 Most of us do not seem to give sufficient importance to",
          back:
            "When this kind of meditation is going on a great many things take place which are not the projection of thought.",
        },
        {
          id: "bl-l06-f4",
          front: "Key concept: 6 There is no sequence in meditation",
          back:
            "This goes on throughout the day and at night sleep is the emptiness of yesterday and therefore the mind touches that which is timeless.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L07  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "bl-l07",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "bl-l07-q1",
          text: "Which of the following best describes a key idea from the section on 3 In the early morning before the sun was up there was?",
          options: [
            { id: "a", text: "6 There is no sequence in meditation." },
            { id: "b", text: "4 It was an old, vast Byzantine building which had become a mosque." },
            { id: "c", text: "5 Most of us do not seem to give sufficient importance to meditation." },
            { id: "d", text: "3 In the early morning before the sun was up there was a haze over the river." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to 3 In the early morning before the sun was up there was. 3 In the early morning before the sun was up there was a haze over the river.",
        },
        {
          id: "bl-l07-q2",
          text: "Which of the following best describes a key idea from the section on 4 It was an old, vast Byzantine building which had become a?",
          options: [
            { id: "a", text: "5 Most of us do not seem to give sufficient importance to meditation." },
            { id: "b", text: "3 In the early morning before the sun was up there was a haze over the river." },
            { id: "c", text: "4 It was an old, vast Byzantine building which had become a mosque." },
            { id: "d", text: "6 There is no sequence in meditation." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to 4 It was an old, vast Byzantine building which had become a. 4 It was an old, vast Byzantine building which had become a mosque.",
        },
        {
          id: "bl-l07-q3",
          text: "Which of the following best describes a key idea from the section on 5 Most of us do not seem to give sufficient importance to?",
          options: [
            { id: "a", text: "4 It was an old, vast Byzantine building which had become a mosque." },
            { id: "b", text: "3 In the early morning before the sun was up there was a haze over the river." },
            { id: "c", text: "5 Most of us do not seem to give sufficient importance to meditation." },
            { id: "d", text: "6 There is no sequence in meditation." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to 5 Most of us do not seem to give sufficient importance to. 5 Most of us do not seem to give sufficient importance to meditation.",
        },
        {
          id: "bl-l07-q4",
          text: "Which of the following best describes a key idea from the section on 6 There is no sequence in meditation?",
          options: [
            { id: "a", text: "6 There is no sequence in meditation." },
            { id: "b", text: "3 In the early morning before the sun was up there was a haze over the river." },
            { id: "c", text: "5 Most of us do not seem to give sufficient importance to meditation." },
            { id: "d", text: "4 It was an old, vast Byzantine building which had become a mosque." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to 6 There is no sequence in meditation. 6 There is no sequence in meditation.",
        },
        {
          id: "bl-l07-q5",
          text: "Which of the following best describes a key idea from the section on 7 You leave the sea behind and go inland?",
          options: [
            { id: "a", text: "3 In the early morning before the sun was up there was a haze over the river." },
            { id: "b", text: "7 You leave the sea behind and go inland." },
            { id: "c", text: "5 Most of us do not seem to give sufficient importance to meditation." },
            { id: "d", text: "4 It was an old, vast Byzantine building which had become a mosque." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to 7 You leave the sea behind and go inland. 7 You leave the sea behind and go inland.",
        },
      ],
    },
  ],
};
