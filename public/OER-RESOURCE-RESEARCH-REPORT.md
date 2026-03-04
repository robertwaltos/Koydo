# Open Educational Resources Research Report

**Date**: 2026-03-03
**Purpose**: Identify free and open educational resources that could enrich a K-12 through graduate-level educational platform covering STEM, business, humanities, medicine, trades, and test prep.
**Target Format**: Structured lessons with chunks (content blocks), questions (multiple choice), flashcards, and interactive activities.

---

## Table of Contents

1. [Open Textbook Projects](#1-open-textbook-projects)
2. [GitHub Curriculum Repositories](#2-github-curriculum-repositories)
3. [Question Banks & Assessment Datasets](#3-question-banks--assessment-datasets)
4. [Flashcard Datasets](#4-flashcard-datasets)
5. [Interactive Simulation / Activity Resources](#5-interactive-simulation--activity-resources)
6. [STEM-Specific Datasets & Coding Challenges](#6-stem-specific-datasets--coding-challenges)
7. [Curated Resource Lists](#7-curated-resource-lists)
8. [Integration Priority Matrix](#8-integration-priority-matrix)
9. [License Compatibility Summary](#9-license-compatibility-summary)

---

## 1. Open Textbook Projects

### 1.1 OpenStax (Rice University)

| Field | Details |
|-------|---------|
| **URL** | https://openstax.org |
| **GitHub** | https://github.com/openstax (375 repos) |
| **License** | CC-BY 4.0 |
| **Content Type** | Full textbooks (text, images, exercises) |
| **Subjects** | Math (Algebra, Precalculus, Calculus, Statistics), Physics, Chemistry, Biology, Anatomy & Physiology, Astronomy, Microbiology, Psychology, Sociology, Economics (Micro/Macro), US History, World History, American Government, Business (Intro, Accounting, Entrepreneurship, Business Law, Management, Marketing, Organizational Behavior), College Success, Writing |
| **Estimated Volume** | ~60 peer-reviewed textbooks with thousands of embedded exercises |
| **Data Format** | HTML source in GitHub repos (CNXML/HTML modules), PDF, EPUB, web reader |
| **Cost** | FREE |
| **Quality** | Peer-reviewed; Rice University institutional backing; adopted by thousands of institutions; exercises repo (AGPL-3.0) at github.com/openstax/exercises |
| **Integration Notes** | Textbook content can be chunked into lesson blocks. Exercise repo provides structured question data. CC-BY allows full commercial reuse with attribution. |

### 1.2 Open Textbook Library (University of Minnesota)

| Field | Details |
|-------|---------|
| **URL** | https://open.umn.edu/opentextbooks |
| **License** | Primarily CC-BY 4.0 (varies per textbook) |
| **Content Type** | Full textbooks |
| **Subjects** | Business, Computer Science, Education, Engineering & Technology, Humanities, Journalism, Law, Mathematics, Medicine, Natural Sciences, Social Sciences (11 major categories with many subcategories) |
| **Estimated Volume** | 1,787 open textbooks |
| **Data Format** | PDF, EPUB, HTML, various (depends on original publisher) |
| **Cost** | FREE |
| **Quality** | Faculty-reviewed; University of Minnesota / Open Education Network backing; many textbooks have peer reviews |
| **Integration Notes** | Aggregator -- links to textbooks from many publishers. Would need per-textbook license checking. Excellent discovery tool for subject gaps. |

### 1.3 LibreTexts

| Field | Details |
|-------|---------|
| **URL** | https://libretexts.org |
| **License** | Various CC licenses (primarily CC-BY, CC-BY-SA, CC-BY-NC-SA) |
| **Content Type** | Full textbooks, interactive content, homework questions |
| **Subjects** | 17 subject libraries: Biology, Business, Chemistry, Engineering, Geosciences, Humanities, Math, Medicine, Physics, Social Sciences, Statistics, Workforce, Spanish, and more |
| **Estimated Volume** | 2,000+ textbooks, 240,000+ homework/assessment elements (via ADAPT platform) |
| **Data Format** | Web-based (MediaWiki), PDF, supports embedded Jupyter notebooks, 3D visualizations, videos |
| **Cost** | FREE |
| **Quality** | NSF-funded; UC Davis institutional backing; faculty-authored; integrated homework system (ADAPT) |
| **Integration Notes** | The ADAPT homework system with 240,000+ openly licensed elements is extremely high value for question generation. Content can be scraped/parsed from wiki format. License varies by page -- must check individual resources. |

### 1.4 MIT OpenCourseWare (OCW)

| Field | Details |
|-------|---------|
| **URL** | https://ocw.mit.edu |
| **License** | CC-BY-NC-SA 4.0 |
| **Content Type** | Lecture notes, problem sets, exams, video lectures, syllabi |
| **Subjects** | Full MIT curriculum: Engineering, Computer Science, Physics, Mathematics, Biology, Chemistry, Economics, Business (Sloan), Architecture, Linguistics, Philosophy, Political Science, Literature, History, and more |
| **Estimated Volume** | 2,500+ courses |
| **Data Format** | PDF, HTML, video (YouTube), various |
| **Cost** | FREE |
| **Quality** | MIT institutional backing; world-class faculty content; 440 mirror sites worldwide |
| **Integration Notes** | NC (NonCommercial) clause limits commercial use. Problem sets and exam questions are extremely high quality but would need license compliance. Best for supplementary reference content. |

### 1.5 MERLOT

| Field | Details |
|-------|---------|
| **URL** | https://www.merlot.org |
| **License** | Various (per resource) |
| **Content Type** | Learning objects, exercises, course portfolios, simulations, tutorials |
| **Subjects** | Arts, Business, Education, Health Sciences, Humanities, Mathematics, Science & Technology, Social Sciences, Workforce Development |
| **Estimated Volume** | 109,000+ curated learning resources |
| **Data Format** | Links to external resources (aggregator), various formats |
| **Cost** | FREE to access; free authoring tools |
| **Quality** | 223,000+ members; 4,400+ institutions; peer-reviewed collections; California State University system backing |
| **Integration Notes** | Aggregator/directory model. Best used for discovering resources rather than direct data import. Individual resource licenses vary widely. |

---

## 2. GitHub Curriculum Repositories

### 2.1 Microsoft Educational Series

#### Microsoft ML-For-Beginners
| Field | Details |
|-------|---------|
| **URL** | https://github.com/microsoft/ML-For-Beginners |
| **Stars** | 84,100+ |
| **License** | MIT |
| **Content Type** | Lessons with quizzes, projects, assignments |
| **Subjects** | Machine Learning (Scikit-learn): regression, classification, clustering, NLP, time series, reinforcement learning |
| **Volume** | 12 weeks, 26 lessons, 52 quizzes |
| **Format** | Jupyter Notebooks (81.5%), HTML, Markdown |
| **Cost** | FREE |
| **Quality** | Microsoft backing; project-based pedagogy; 50+ language translations |

#### Microsoft AI-For-Beginners
| Field | Details |
|-------|---------|
| **URL** | https://github.com/microsoft/AI-For-Beginners |
| **License** | MIT |
| **Content Type** | Lessons with labs, Jupyter notebooks (PyTorch + TensorFlow) |
| **Subjects** | AI: symbolic AI, neural networks, computer vision, NLP, AI ethics |
| **Volume** | 12 weeks, 24 lessons |
| **Format** | Jupyter Notebooks, Markdown |
| **Cost** | FREE |

#### Microsoft Data-Science-For-Beginners
| Field | Details |
|-------|---------|
| **URL** | https://github.com/microsoft/Data-Science-For-Beginners |
| **License** | MIT |
| **Content Type** | Lessons with pre/post quizzes, projects, assignments |
| **Subjects** | Data Science: statistics, data types, visualization, lifecycle, cloud DS |
| **Volume** | 10 weeks, 20 lessons |
| **Format** | Markdown, Jupyter Notebooks |
| **Cost** | FREE |

#### Microsoft Web-Dev-For-Beginners
| Field | Details |
|-------|---------|
| **URL** | https://github.com/microsoft/Web-Dev-For-Beginners |
| **Stars** | 95,400+ |
| **License** | MIT |
| **Content Type** | Lessons with quizzes, projects |
| **Subjects** | Web Development: HTML, CSS, JavaScript |
| **Volume** | 12 weeks, 24 lessons |
| **Format** | Markdown, HTML, JavaScript |
| **Cost** | FREE |

#### Microsoft IoT-For-Beginners
| Field | Details |
|-------|---------|
| **URL** | https://github.com/microsoft/IoT-For-Beginners |
| **License** | MIT |
| **Content Type** | Lessons with quizzes, projects, sketchnotes |
| **Subjects** | IoT: sensors, actuators, cloud connectivity, edge computing, ML on IoT |
| **Volume** | 12 weeks, 24 lessons |
| **Format** | Markdown, Python code |
| **Cost** | FREE |

#### Microsoft Generative-AI-For-Beginners
| Field | Details |
|-------|---------|
| **URL** | https://github.com/microsoft/generative-ai-for-beginners |
| **License** | MIT |
| **Content Type** | Lessons with videos, code samples |
| **Subjects** | Generative AI: LLMs, prompt engineering, RAG, fine-tuning, AI agents |
| **Volume** | 21 lessons |
| **Format** | Markdown, Python, TypeScript |
| **Cost** | FREE |

**Integration Notes for Microsoft Series**: All MIT-licensed, structured with quizzes already built in, available in 50+ languages. Excellent fit for CS/Data Science/AI curriculum tracks. Quiz data could be extracted and reformatted into the platform's question format.

### 2.2 freeCodeCamp

| Field | Details |
|-------|---------|
| **URL** | https://github.com/freeCodeCamp/freeCodeCamp |
| **Stars** | 438,000+ |
| **License** | BSD-3-Clause (software); curriculum content copyright freeCodeCamp.org |
| **Content Type** | Interactive coding lessons, workshops, quizzes, certification exams |
| **Subjects** | Web Dev (HTML/CSS/JS), Python, Databases, Front-End Libraries, Back-End APIs, Coding Interview Prep, Project Euler integration |
| **Volume** | 6 primary certifications + language programs; thousands of exercises |
| **Format** | TypeScript/React app, structured lesson JSON |
| **Cost** | FREE |
| **Quality** | Largest open-source coding education platform; millions of users; nonprofit |
| **Integration Notes** | Curriculum content is NOT open-licensed (copyrighted by freeCodeCamp). Can reference/link but cannot import content directly. The platform code is BSD-3. |

### 2.3 The Odin Project

| Field | Details |
|-------|---------|
| **URL** | https://github.com/TheOdinProject/curriculum |
| **Stars** | 12,200+ |
| **License** | Open source (CC-BY-NC-SA 4.0 for curriculum content) |
| **Content Type** | Written lessons with projects |
| **Subjects** | Full-stack web dev: HTML, CSS, JavaScript, React, Ruby, Rails, Node.js, databases, Git |
| **Volume** | 14+ course directories, extensive lesson content |
| **Format** | Markdown, JavaScript |
| **Cost** | FREE |
| **Quality** | 5,000+ contributors; 65,000+ commits; active Discord community |
| **Integration Notes** | NC-SA license limits commercial use. Good for reference/supplementation. |

### 2.4 OSSU Computer Science

| Field | Details |
|-------|---------|
| **URL** | https://github.com/ossu/computer-science |
| **Stars** | 202,000+ |
| **License** | MIT (the curriculum guide itself) |
| **Content Type** | Curated course path (links to external courses) |
| **Subjects** | Complete CS undergraduate education: programming, math, systems, theory, applications, ethics |
| **Volume** | 60+ courses, ~2 years at 20hrs/week |
| **Format** | Markdown (links to external resources) |
| **Cost** | FREE |
| **Quality** | Sources from MIT, Stanford, Harvard; follows CS 2013 standards |
| **Integration Notes** | This is a meta-curriculum (links to courses). Cannot directly import content, but the structure/sequencing is valuable for curriculum design. |

### 2.5 TheAlgorithms/Python

| Field | Details |
|-------|---------|
| **URL** | https://github.com/TheAlgorithms/Python |
| **Stars** | 218,000+ |
| **License** | MIT |
| **Content Type** | Algorithm implementations with explanations |
| **Subjects** | Data structures, sorting, searching, dynamic programming, graph theory, ML, cryptography, linear algebra, geometry, financial algorithms, blockchain, quantum computing |
| **Volume** | 50+ algorithm categories, 1,261 contributors |
| **Format** | Python source code |
| **Cost** | FREE |
| **Quality** | Largest algorithms education repo; active community |
| **Integration Notes** | Example code could be embedded in CS/coding lessons. Also available in C, Java, JavaScript, Go, and other languages via sibling repos. |

### 2.6 Reinforcement Learning Course Materials

| Field | Details |
|-------|---------|
| **URL** | https://github.com/upb-lea/reinforcement_learning_course_materials |
| **Stars** | 1,000+ |
| **License** | Open (university course materials) |
| **Content Type** | Lecture notes, tutorials with solutions, online videos |
| **Subjects** | Reinforcement Learning |
| **Format** | Jupyter Notebooks |
| **Cost** | FREE |

### 2.7 Digital Signal Processing Lecture

| Field | Details |
|-------|---------|
| **URL** | https://github.com/spatialaudio/digital-signal-processing-lecture |
| **Stars** | 854 |
| **License** | CC-BY 4.0 |
| **Content Type** | Theory and computational examples |
| **Subjects** | Digital Signal Processing |
| **Format** | Jupyter Notebooks |
| **Cost** | FREE |

---

## 3. Question Banks & Assessment Datasets

### 3.1 MMLU (Measuring Massive Multitask Language Understanding)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/cais/mmlu |
| **License** | MIT |
| **Content Type** | Multiple-choice questions (4 options) |
| **Subjects** | 57 subjects: abstract algebra, anatomy, astronomy, business ethics, clinical knowledge, college-level sciences/math/humanities, high school subjects (biology, chemistry, CS, geography, govt, history, math, physics, psychology, statistics), professional fields (law, medicine, psychology, accounting), philosophy, world religions, and more |
| **Volume** | 14,042 test questions + 99,842 auxiliary train questions = **~114,000 total** |
| **Format** | Parquet (HuggingFace), 4-way multiple choice |
| **Cost** | FREE |
| **Quality** | Academic benchmark; widely cited (ICLR 2021); covers K-12 through professional levels |
| **Integration Notes** | EXTREMELY HIGH VALUE. Covers nearly all platform subject areas. MIT license allows full commercial use. Questions span difficulty from elementary to professional. Format maps directly to platform's MC question format. |

### 3.2 MMLU-Pro

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro |
| **License** | MIT |
| **Content Type** | Multiple-choice questions (10 options, harder) |
| **Subjects** | 14 disciplines: Math, Physics, Chemistry, Law, Engineering, Economics, Health, Psychology, Business, Biology, Philosophy, CS, History, Other |
| **Volume** | 12,032 questions |
| **Format** | Parquet; includes chain-of-thought explanations |
| **Cost** | FREE |
| **Quality** | Enhanced difficulty over MMLU; reasoning-focused; includes expert rationales |
| **Integration Notes** | Higher difficulty = good for advanced/graduate-level content. CoT explanations can be used as lesson chunk content. 10-option format can be reduced to 4-5 for platform use. |

### 3.3 ARC (AI2 Reasoning Challenge)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/allenai/ai2_arc |
| **License** | CC-BY-SA 4.0 |
| **Content Type** | Multiple-choice science questions (4 options) |
| **Subjects** | Grade-school science: Biology, Chemistry, Physics, Earth Science |
| **Volume** | 7,787 questions (2,590 Challenge + 5,197 Easy) |
| **Format** | Parquet/JSON with question, choices array, answerKey |
| **Cost** | FREE |
| **Quality** | Allen Institute for AI (AI2); genuine school exam questions; includes 14M science sentences corpus |
| **Integration Notes** | Perfect for K-8 science curriculum. SA license requires derivative works to share alike. Direct format match to platform question format. |

### 3.4 SciQ (Science Questions)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/allenai/sciq |
| **License** | CC-BY-NC 3.0 |
| **Content Type** | Multiple-choice science questions with supporting evidence paragraphs |
| **Subjects** | Physics, Chemistry, Biology, General Science |
| **Volume** | 13,679 questions |
| **Format** | Parquet; includes question, correct_answer, 3 distractors, support paragraph |
| **Cost** | FREE |
| **Quality** | AI2 (Allen Institute); crowdsourced from science exams; includes explanatory text |
| **Integration Notes** | NC license restricts commercial use. Support paragraphs are excellent for generating lesson chunk content. Each question comes with its own mini-lesson. |

### 3.5 OpenBookQA

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/allenai/openbookqa |
| **License** | Unknown/Research |
| **Content Type** | Multiple-choice science questions with core facts |
| **Subjects** | Science (physics, biology, earth science, chemistry) requiring multi-step reasoning |
| **Volume** | 5,957 questions |
| **Format** | Parquet; includes question_stem, choices, answerKey, fact1 |
| **Cost** | FREE |
| **Quality** | AI2; designed for multi-step reasoning; includes underlying science facts |

### 3.6 MedMCQA (Medical Multiple-Choice QA)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/openlifescienceai/medmcqa |
| **License** | Apache 2.0 |
| **Content Type** | Medical multiple-choice questions with expert explanations |
| **Subjects** | 21 medical subjects: Anatomy, Biochemistry, Pharmacology, Pathology, Microbiology, Physiology, Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Ophthalmology, ENT, Orthopedics, Psychiatry, Radiology, Dermatology, Forensic Medicine, Anesthesia, Dental, Preventive & Social Medicine |
| **Volume** | **194,000+ questions** across 2,400 topics |
| **Format** | Parquet; question, 4 options, correct option index, expert explanation, subject_name, topic_name |
| **Cost** | FREE |
| **Quality** | Sourced from AIIMS & NEET PG entrance exams (Indian medical licensing); expert explanations included |
| **Integration Notes** | EXTREMELY HIGH VALUE for medical curriculum. Apache 2.0 allows commercial use. 194K questions is massive. Expert explanations can serve as lesson content. Subject/topic taxonomy is well-structured. |

### 3.7 MedQA (Medical Question Answering)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/bigbio/med_qa |
| **License** | Unknown |
| **Content Type** | Free-form medical board exam questions |
| **Subjects** | Medical board exam content (USMLE-style) |
| **Volume** | 61,097 questions (12,723 English, 34,251 Chinese, 14,123 Traditional Chinese) |
| **Format** | Custom loader; includes textbook corpus |
| **Cost** | FREE |
| **Quality** | Professional medical board exams; includes supporting textbook corpus |

### 3.8 HEAD-QA (Healthcare Exam Dataset)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/dvilares/head_qa |
| **License** | MIT |
| **Content Type** | Healthcare exam questions (5 options) |
| **Subjects** | Medicine, Nursing, Psychology, Chemistry, Pharmacology, Biology |
| **Volume** | ~7,765 questions (available in Spanish and English) |
| **Format** | Parquet; includes question, 5 answer options, correct answer, category, optional images |
| **Cost** | FREE |
| **Quality** | Spain Ministry of Health official exams; bilingual (ES/EN) |

### 3.9 PubMedQA

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/qiaojin/PubMedQA |
| **License** | MIT |
| **Content Type** | Biomedical yes/no/maybe questions with PubMed abstracts |
| **Subjects** | Biomedical research across all medical domains |
| **Volume** | 273,518 questions (1K labeled, 211K artificial, 61K unlabeled) |
| **Format** | Parquet; question + context (abstracts) + answer |
| **Cost** | FREE |
| **Quality** | Based on PubMed literature; MIT license |

### 3.10 AQUA-RAT (Algebra Question Answering with Rationales)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/deepmind/aqua_rat |
| **License** | Apache 2.0 |
| **Content Type** | Algebraic word problems with step-by-step solutions |
| **Subjects** | Algebra, arithmetic, word problems |
| **Volume** | ~98,000 questions (97,467 train + 254 val + 254 test) |
| **Format** | Parquet; question, 5 options (A-E), rationale (step-by-step), correct answer |
| **Cost** | FREE |
| **Quality** | DeepMind; step-by-step rationales are excellent for learning |
| **Integration Notes** | HIGH VALUE for math curriculum. Apache 2.0 allows commercial use. Rationales serve as lesson explanations. Word problem format maps to real-world math application. |

### 3.11 GSM8K (Grade School Math 8K)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/openai/gsm8k |
| **License** | MIT |
| **Content Type** | Grade school math word problems with step-by-step solutions |
| **Subjects** | Elementary mathematics (addition, subtraction, multiplication, division) |
| **Volume** | 8,792 problems (7,473 train + 1,319 test) |
| **Format** | JSON; question + answer with calculation annotations (<<expression=result>>) |
| **Cost** | FREE |
| **Quality** | OpenAI; problems require 2-8 reasoning steps; linguistically diverse |
| **Integration Notes** | Perfect for K-8 math curriculum. MIT licensed. Calculation annotations can power step-by-step lesson content. |

### 3.12 MATH Dataset (Competition Mathematics)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/hendrycks/competition_math |
| **License** | MIT |
| **Content Type** | Math competition problems with full solutions |
| **Subjects** | Algebra, Counting & Probability, Geometry, Number Theory, Prealgebra, Precalculus, Intermediate Algebra |
| **Volume** | 12,500 problems (7,500 train + 5,000 test) |
| **Format** | Parquet; problem, solution (with LaTeX), difficulty level (1-5), subject type |
| **Cost** | FREE (Note: DMCA takedown restricts some access) |
| **Quality** | From AMC 10, AMC 12, AIME competitions; difficulty-graded |
| **Integration Notes** | Excellent for advanced math and AP/SAT prep tracks. Competition-level difficulty is well-suited for advanced math modules. |

### 3.13 TheoremQA

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/TIGER-Lab/TheoremQA |
| **License** | MIT |
| **Content Type** | University-level STEM questions applying theorems |
| **Subjects** | Mathematics, Electrical Engineering, Computer Science, Physics, Finance |
| **Volume** | 800 QA pairs covering 350+ theorems |
| **Format** | Parquet; question, answer, answer_type, optional image |
| **Cost** | FREE |
| **Quality** | Human expert-annotated; university-level difficulty |

### 3.14 RACE Dataset (Reading Comprehension)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/ehovy/race |
| **License** | Non-commercial research only |
| **Content Type** | Reading comprehension passages with questions |
| **Subjects** | English Language Arts / Reading Comprehension |
| **Volume** | 28,000+ passages, ~100,000 questions |
| **Format** | Parquet; article, question, 4 options, answer |
| **Cost** | FREE |
| **Quality** | From Chinese English exams; middle school and high school levels |
| **Integration Notes** | Non-commercial license restricts platform use. Valuable for concept/structure reference. |

### 3.15 CommonsenseQA

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/tau/commonsense_qa |
| **License** | MIT |
| **Content Type** | 5-way multiple-choice commonsense questions |
| **Subjects** | General knowledge / commonsense reasoning |
| **Volume** | 12,102 questions |
| **Format** | Parquet; question, concept, 5 choices, answer |
| **Cost** | FREE |
| **Quality** | Tel Aviv University; based on ConceptNet knowledge graph |

### 3.16 TruthfulQA

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/truthfulqa/truthful_qa |
| **License** | Apache 2.0 |
| **Content Type** | Questions designed to test for common misconceptions |
| **Subjects** | 38 categories: Health, Law, Finance, Politics, Misconceptions, Conspiracies, Science |
| **Volume** | 817 questions |
| **Format** | Parquet; question, best_answer, correct_answers[], incorrect_answers[] |
| **Cost** | FREE |
| **Quality** | Tests factual accuracy; includes curated correct and incorrect answers |
| **Integration Notes** | Excellent for critical thinking / media literacy modules. The misconception-focused format is unique and valuable for teaching discernment. |

### 3.17 BoolQ

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/google/boolq |
| **License** | CC-BY-SA 3.0 |
| **Content Type** | Yes/no question answering with passages |
| **Subjects** | General knowledge across many topics |
| **Volume** | 15,942 questions |
| **Format** | Parquet; question, passage, boolean answer |
| **Cost** | FREE |
| **Quality** | Google; naturally occurring questions |

### 3.18 SQuAD v2 (Stanford Question Answering Dataset)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/rajpurkar/squad_v2 |
| **License** | CC-BY-SA 4.0 |
| **Content Type** | Reading comprehension with extractive answers |
| **Subjects** | Wikipedia-based general knowledge (history, science, arts, geography, etc.) |
| **Volume** | 150,000+ questions (100K answerable + 50K+ unanswerable) |
| **Format** | Parquet; context passage, question, answer spans |
| **Cost** | FREE |
| **Quality** | Stanford; most-cited QA dataset; includes unanswerable questions |

### 3.19 Social IQA

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/allenai/social_i_qa |
| **License** | CC-BY 4.0 |
| **Content Type** | 3-way multiple-choice social reasoning questions |
| **Subjects** | Social intelligence, emotional reasoning, interpersonal dynamics |
| **Volume** | 37,000+ questions |
| **Format** | Parquet; context, question, 3 answer options |
| **Cost** | FREE |
| **Quality** | AI2; excellent for social-emotional learning |

### 3.20 GPQA (Graduate-Level Google-Proof Q&A)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/Idavidrein/gpqa |
| **License** | CC-BY 4.0 |
| **Content Type** | PhD-level multiple-choice questions |
| **Subjects** | Biology, Physics, Chemistry (graduate level) |
| **Volume** | 448 questions |
| **Format** | CSV, multiple-choice |
| **Cost** | FREE |
| **Quality** | Expert-validated; 65% accuracy even for PhD holders in the field |
| **Integration Notes** | Graduate-level difficulty. Small but extremely high quality. Good for advanced/mastery assessment. |

### 3.21 LinkedIn Skill Assessments Quizzes

| Field | Details |
|-------|---------|
| **URL** | https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes |
| **Stars** | 28,700+ |
| **License** | Unlicense (public domain) |
| **Content Type** | Multiple-choice skill assessment questions |
| **Subjects** | AWS, REST APIs, JavaScript, React, Python, Git, Linux, Machine Learning, C++, HTML, CSS, .NET, SQL, and 60+ technical skills |
| **Volume** | Thousands of questions across 60+ skill areas |
| **Format** | Markdown files |
| **Cost** | FREE |
| **Quality** | Community-maintained; answers may have errors; large catalog |
| **Integration Notes** | Public domain -- no license restrictions. Good for professional/technical skill assessments. Would need quality review. Markdown format needs parsing. |

---

## 4. Flashcard Datasets

### 4.1 Anki Ecosystem

| Field | Details |
|-------|---------|
| **URL (App)** | https://github.com/ankidroid/Anki-Android (10,800+ stars) |
| **URL (Shared Decks)** | https://ankiweb.net/shared/decks |
| **License** | AGPL-3.0 (AnkiDroid); individual deck licenses vary |
| **Content Type** | Spaced-repetition flashcards |
| **Subjects** | Virtually all subjects: languages, medicine, science, history, geography, law, music, etc. |
| **Volume** | Thousands of community-shared decks; individual decks range from 100 to 50,000+ cards |
| **Format** | .apkg files (SQLite databases); can export to JSON via CrowdAnki add-on |
| **Cost** | FREE |
| **Quality** | Varies widely; medical decks (e.g., AnKing) are extensively peer-reviewed; language decks are popular |
| **Integration Notes** | Anki's .apkg format can be parsed programmatically. CrowdAnki exports to JSON which is much easier to process. Key challenge is quality variance and license ambiguity of individual community decks. |

### 4.2 Ultimate Geography (Anki Deck)

| Field | Details |
|-------|---------|
| **URL** | https://github.com/anki-geo/ultimate-geography |
| **Stars** | 1,100+ |
| **License** | Open Source (see repo LICENSE.md) |
| **Content Type** | Geography flashcards with flags and maps |
| **Subjects** | Geography: all 205 sovereign states + 59 territories, oceans, continents |
| **Volume** | 319 unique notes, 978 cards, 221 flags, 319 maps |
| **Format** | JSON (CrowdAnki format) |
| **Cost** | FREE |
| **Quality** | 14 language translations; community maintained |
| **Integration Notes** | JSON format is directly parseable. Multi-language support is valuable. Cards include Country-Capital, Capital-Country, Flag-Country, Map-Country variants. |

### 4.3 MLE-Flashcards (Machine Learning Engineering)

| Field | Details |
|-------|---------|
| **URL** | https://github.com/b7leung/MLE-Flashcards |
| **Stars** | 2,300+ |
| **License** | GPL-3.0 |
| **Content Type** | Technical flashcards for ML/CS |
| **Subjects** | Computer Science fundamentals, classical ML, deep learning, computer vision, NLP, reinforcement learning, LLMs |
| **Volume** | 250+ flashcards |
| **Format** | PowerPoint (.pptx) files |
| **Cost** | FREE |
| **Quality** | Targeted at ML interview preparation; well-organized by topic |

### 4.4 JLPT Anki Decks (Japanese Language)

| Field | Details |
|-------|---------|
| **URL** | https://github.com/5mdld/anki-jlpt-decks |
| **Stars** | 2,400+ |
| **License** | Open |
| **Content Type** | Japanese vocabulary flashcards with audio |
| **Subjects** | Japanese language (JLPT N1-N5 levels) |
| **Volume** | Comprehensive N1-N5 vocabulary |
| **Format** | Anki deck format with audio |
| **Cost** | FREE |

### 4.5 Obsidian Spaced Repetition

| Field | Details |
|-------|---------|
| **URL** | https://github.com/st3v3nmw/obsidian-spaced-repetition |
| **Stars** | 2,200+ |
| **License** | MIT |
| **Content Type** | Spaced repetition plugin (tool, not dataset) |
| **Integration Notes** | Demonstrates markdown-based flashcard format that could be adopted for content authoring. |

---

## 5. Interactive Simulation / Activity Resources

### 5.1 PhET Interactive Simulations

| Field | Details |
|-------|---------|
| **URL** | https://phet.colorado.edu |
| **GitHub** | https://github.com/phetsims (206 repos) |
| **License** | Mixed: MIT (framework/libraries) and GPL-3.0 (individual simulations) |
| **Content Type** | Interactive HTML5/Java simulations |
| **Subjects** | Physics, Chemistry, Biology, Earth & Space Science, Mathematics & Statistics |
| **Volume** | 150+ simulations |
| **Format** | HTML5 (modern sims), Java (legacy); embeddable web components |
| **Cost** | FREE |
| **Quality** | University of Colorado Boulder; NSF/Hewlett/Moore Foundation funded; research-validated pedagogy; translated into 90+ languages |
| **Integration Notes** | HTML5 sims can be embedded via iframe. GPL-3.0 sims require derivative works to also be GPL -- may conflict with proprietary platform. MIT-licensed framework components are more flexible. Check per-simulation license before embedding. |

### 5.2 GeoGebra

| Field | Details |
|-------|---------|
| **URL** | https://www.geogebra.org |
| **License** | Non-commercial use free; commercial use requires license |
| **Content Type** | Interactive math tools (graphing, geometry, 3D, CAS, statistics) |
| **Subjects** | Mathematics: Number Sense, Algebra, Geometry, Measurement, Probability, Statistics, Calculus |
| **Volume** | 1,000,000+ community-created classroom resources |
| **Format** | Web-based, embeddable, mobile apps (iOS/Android) |
| **Cost** | FREE for non-commercial; commercial licensing required |
| **Quality** | Global community of millions; used in hundreds of K-12 through university institutions; BYJU's group |
| **Integration Notes** | CAUTION: Free only for non-commercial use. A commercial edtech platform would need a licensing agreement. GeoGebra materials can be embedded via iframe/API, but commercial terms must be negotiated. |

### 5.3 Scratch (MIT Media Lab)

| Field | Details |
|-------|---------|
| **URL** | https://scratch.mit.edu |
| **License** | BSD-3 (Scratch editor); CC-BY-SA 2.0 (community projects) |
| **Content Type** | Visual programming projects, tutorials, educational games |
| **Subjects** | Computer Science, Creative Computing, Interactive Stories, Games |
| **Volume** | 100+ million community-shared projects |
| **Format** | .sb3 files (JSON-based), web-based editor |
| **Cost** | FREE |
| **Quality** | MIT Media Lab; designed for ages 8-16; massive community |
| **Integration Notes** | Projects can be embedded. Community projects are CC-BY-SA 2.0. The Scratch editor itself is BSD-3. Could be used as an activity type within coding curriculum. |

### 5.4 p5.js (Processing Foundation)

| Field | Details |
|-------|---------|
| **URL** | https://github.com/processing/p5.js |
| **Stars** | 23,500+ |
| **License** | LGPL-2.1 |
| **Content Type** | Creative coding library for interactive graphics |
| **Subjects** | Computer Science, Art, Design, Creative Coding |
| **Format** | JavaScript library |
| **Cost** | FREE |
| **Quality** | Processing Foundation; widely used in education |
| **Integration Notes** | Could power interactive visual activities within lessons. LGPL allows use in proprietary software as long as the library itself remains open. |

---

## 6. STEM-Specific Datasets & Coding Challenges

### 6.1 Exercism

| Field | Details |
|-------|---------|
| **URL** | https://exercism.org / https://github.com/exercism |
| **License** | MIT (most track repos); AGPL-3.0 (website) |
| **Content Type** | Programming exercises with test suites |
| **Subjects** | 81 programming languages (Python, JavaScript, Java, C, C++, Rust, Go, Haskell, Ruby, and 70+ more) |
| **Volume** | 424+ repos; typically 70-140 exercises per language track |
| **Format** | Language-specific source files; JSON config; test suites |
| **Cost** | FREE (100% free forever) |
| **Quality** | Community mentorship model; professionally maintained; exercises are well-structured |
| **Integration Notes** | MIT-licensed track content is ideal for coding curriculum. Each exercise has a problem description, test suite, and example solution. Could be adapted into the platform's lesson/exercise format. Exercise difficulty is tiered. |

### 6.2 Project Euler

| Field | Details |
|-------|---------|
| **URL** | https://projecteuler.net |
| **License** | Copyright (problems are free to attempt, but not explicitly open-licensed for redistribution) |
| **Content Type** | Mathematical/programming challenge problems |
| **Subjects** | Mathematics, Computer Science, Number Theory, Combinatorics |
| **Volume** | 900+ problems |
| **Format** | Web-based problem statements |
| **Cost** | FREE to use (registration free) |
| **Quality** | 1.3M+ registered members; 114 programming languages used; progressive difficulty |
| **Integration Notes** | Problems are NOT explicitly open-licensed for redistribution. freeCodeCamp has a licensed integration. Use as inspiration for problem design rather than direct import. |

### 6.3 LeetCode Problems Dataset

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/greengerong/leetcode |
| **License** | MIT |
| **Content Type** | Programming problems with solutions in 4 languages |
| **Subjects** | Data Structures, Algorithms, Dynamic Programming, Graph Theory, String Processing, etc. |
| **Volume** | 2,360 problems |
| **Format** | JSON/Parquet; problem description + solutions in Java, C++, Python, JavaScript |
| **Cost** | FREE |
| **Quality** | Covers Easy/Medium/Hard difficulty levels; includes multi-language solutions |
| **Integration Notes** | MIT license allows commercial use. Problems with solutions in 4 languages are very well-suited for coding curriculum across language tracks. |

### 6.4 APPS Dataset (Automated Programming Progress Standard)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/codeparrot/apps |
| **License** | MIT |
| **Content Type** | Programming problems with test cases and solutions |
| **Subjects** | Python programming: introductory, interview, competition levels |
| **Volume** | 10,000 problems with 131,777 test cases |
| **Format** | Parquet; problem description, Python solutions, input/output test cases, difficulty, starter code |
| **Cost** | FREE |
| **Quality** | Sourced from Codewars, AtCoder, Kattis, Codeforces; 3 difficulty levels; average 21 test cases per problem |
| **Integration Notes** | Excellent for coding curriculum. Difficulty levels map to learning progression. Test cases enable auto-grading. |

### 6.5 HumanEval (OpenAI)

| Field | Details |
|-------|---------|
| **URL** | https://huggingface.co/datasets/openai/openai_humaneval |
| **License** | MIT |
| **Content Type** | Python programming problems with test suites |
| **Subjects** | Python programming fundamentals |
| **Volume** | 164 problems |
| **Format** | Parquet; function signature + docstring, canonical solution, test cases |
| **Cost** | FREE |
| **Quality** | OpenAI; handcrafted to avoid contamination |

### 6.6 Rosetta Code

| Field | Details |
|-------|---------|
| **URL** | https://rosettacode.org |
| **License** | GNU Free Documentation License 1.3 |
| **Content Type** | Programming tasks with solutions in hundreds of languages |
| **Subjects** | Computer Science, Algorithms, Data Structures, Math, String Processing |
| **Volume** | 1,347 completed tasks + 401 draft tasks across 989 programming languages |
| **Format** | Wiki (MediaWiki) -- can be scraped/exported |
| **Cost** | FREE |
| **Quality** | Community-maintained since 2007; excellent for comparing approaches across languages |
| **Integration Notes** | GFDL allows commercial use with attribution. Same task in many languages is perfect for cross-language coding curriculum. Would need wiki scraping for structured data extraction. |

### 6.7 TheAlgorithms (Multi-Language)

| Field | Details |
|-------|---------|
| **URL** | https://github.com/TheAlgorithms |
| **License** | MIT |
| **Content Type** | Algorithm implementations |
| **Subjects** | Sorting, Searching, Graph Algorithms, Dynamic Programming, ML, Cryptography, Math, etc. |
| **Volume** | 50+ categories per language; repos for Python (218K stars), Java, C, C++, JavaScript, Go, Rust, and more |
| **Format** | Source code with comments |
| **Cost** | FREE |
| **Quality** | Largest educational algorithms organization on GitHub |

### 6.8 Khan Academy Exercises (Legacy/Archived)

| Field | Details |
|-------|---------|
| **URL** | https://github.com/Khan/khan-exercises (archived) |
| **License** | MIT (framework); CC-BY-NC-SA 3.0 (exercise content) |
| **Content Type** | Interactive math/science exercises |
| **Subjects** | Mathematics, Science (legacy content) |
| **Volume** | Several hundred exercises (legacy, archived 2021) |
| **Format** | HTML + JavaScript (jQuery-based) |
| **Cost** | FREE |
| **Quality** | Khan Academy -- pioneer in online education; NOTE: archived/deprecated |
| **Integration Notes** | NC-SA license restricts commercial use. Framework is MIT but content is NC-SA. Modern Khan Academy content is NOT open. This is legacy content only. |

---

## 7. Curated Resource Lists

### 7.1 EbookFoundation/free-programming-books

| Field | Details |
|-------|---------|
| **URL** | https://github.com/EbookFoundation/free-programming-books |
| **Stars** | 384,000+ |
| **License** | CC-BY 4.0 |
| **Content Type** | Curated list of free programming books, courses, podcasts, playgrounds |
| **Subjects** | Programming in 40+ languages; CS theory; interactive resources |
| **Volume** | Thousands of links |
| **Integration Notes** | META-RESOURCE: use for discovering additional content sources. Not directly importable but invaluable for curriculum research. |

### 7.2 Awesome Edtech Tools

| Field | Details |
|-------|---------|
| **URL** | https://github.com/hkalant/awesome-edtech-tools |
| **Stars** | 200+ |
| **License** | Open |
| **Content Type** | Curated list of edtech tools and platforms |
| **Subjects** | LMS, video, assessment, accessibility, content creation |
| **Integration Notes** | Tool discovery resource; not content itself. |

### 7.3 Awesome Cyber Security University

| Field | Details |
|-------|---------|
| **URL** | https://github.com/brootware/awesome-cyber-security-university |
| **Stars** | 2,800+ |
| **License** | Open |
| **Content Type** | Curated cybersecurity learning path |
| **Integration Notes** | Curriculum structure reference for cybersecurity track. |

---

## 8. Integration Priority Matrix

Ranked by: license compatibility (commercial use), content volume, subject coverage, format ease-of-integration, and quality.

### TIER 1 -- Highest Priority (Commercially usable, large volume, structured data)

| Resource | License | Volume | Why Priority |
|----------|---------|--------|--------------|
| **MMLU** | MIT | 114K questions | 57 subjects spanning K-12 to professional. Direct MC question format. |
| **MedMCQA** | Apache 2.0 | 194K questions | 21 medical subjects with expert explanations. Massive. |
| **AQUA-RAT** | Apache 2.0 | 98K questions | Math word problems with step-by-step rationales. |
| **GSM8K** | MIT | 8.8K questions | Grade school math with annotated solutions. |
| **OpenStax** | CC-BY 4.0 | 60 textbooks | Peer-reviewed, covers math/science/business/humanities. |
| **LibreTexts (ADAPT)** | Various CC | 240K+ elements | Massive homework/assessment bank. |
| **Exercism** | MIT | 81 languages | Structured coding exercises with test suites. |
| **LeetCode Dataset** | MIT | 2,360 problems | Coding problems with multi-language solutions. |
| **APPS** | MIT | 10K problems | Python coding with test cases, tiered difficulty. |
| **LinkedIn Quizzes** | Unlicense | 1000s of Qs | 60+ technical skill areas, public domain. |

### TIER 2 -- High Priority (Commercially usable, moderate volume or specialized)

| Resource | License | Volume | Why Priority |
|----------|---------|--------|--------------|
| **MMLU-Pro** | MIT | 12K questions | Advanced difficulty with rationales. |
| **CommonsenseQA** | MIT | 12K questions | General knowledge reasoning. |
| **MATH (Competition)** | MIT | 12.5K problems | Competition math, graded difficulty. |
| **TruthfulQA** | Apache 2.0 | 817 questions | Misconception-focused, unique. |
| **TheoremQA** | MIT | 800 questions | University STEM with theorem application. |
| **GPQA** | CC-BY 4.0 | 448 questions | Graduate-level science, extremely high quality. |
| **HumanEval** | MIT | 164 problems | Clean coding problems with tests. |
| **HEAD-QA** | MIT | 7.7K questions | Healthcare exam questions, bilingual. |
| **PubMedQA** | MIT | 273K questions | Biomedical Q&A, massive volume. |
| **Social IQA** | CC-BY 4.0 | 37K questions | Social-emotional learning. |
| **Microsoft -For-Beginners** | MIT | 115+ lessons | Structured with quizzes already built in. |
| **TheAlgorithms** | MIT | 50+ categories | Algorithm education in multiple languages. |
| **Rosetta Code** | GFDL | 1,347 tasks | Cross-language programming reference. |
| **Ultimate Geography** | Open | 978 cards | Ready-to-use geography flashcards in JSON. |

### TIER 3 -- Conditional Use (NC or SA restrictions, or aggregator-only)

| Resource | License | Issue | Use Case |
|----------|---------|-------|----------|
| **ARC** | CC-BY-SA 4.0 | ShareAlike | K-8 science (7.8K questions). Must share derivatives. |
| **SciQ** | CC-BY-NC 3.0 | NonCommercial | Science with explanations (13.7K). NC restricts commercial. |
| **MIT OCW** | CC-BY-NC-SA 4.0 | NC + SA | 2,500 courses. Cannot use commercially. Reference only. |
| **SQuAD v2** | CC-BY-SA 4.0 | ShareAlike | 150K reading comprehension questions. |
| **BoolQ** | CC-BY-SA 3.0 | ShareAlike | 16K yes/no questions. |
| **RACE** | Non-commercial | NC | 100K reading comprehension. Research only. |
| **Khan Academy** | CC-BY-NC-SA 3.0 | NC + SA | Legacy exercises only. Modern content proprietary. |
| **The Odin Project** | CC-BY-NC-SA 4.0 | NC + SA | Web dev curriculum. Reference only. |
| **freeCodeCamp** | Copyright | Copyright | Curriculum is copyrighted. Software is BSD-3. |
| **GeoGebra** | Non-commercial | Requires license | Must negotiate commercial license. |
| **PhET Sims** | GPL-3.0 | Copyleft | Individual sims are GPL. Must keep derivatives GPL. |
| **Open Textbook Library** | Various | Per-textbook | Must check each textbook's license individually. |
| **MERLOT** | Various | Per-resource | Aggregator; individual resource licenses vary. |

---

## 9. License Compatibility Summary

### Fully Commercial-Compatible Licenses
These can be used in a commercial platform without restriction (beyond attribution):

| License | Attribution Required | ShareAlike | NonCommercial | Resources |
|---------|---------------------|------------|---------------|-----------|
| **MIT** | Yes | No | No | MMLU, GSM8K, MATH, HumanEval, APPS, LeetCode, CommonsenseQA, PubMedQA, HEAD-QA, TheoremQA, Exercism, Microsoft -For-Beginners, TheAlgorithms |
| **Apache 2.0** | Yes | No | No | MedMCQA, AQUA-RAT, TruthfulQA |
| **CC-BY 4.0** | Yes | No | No | OpenStax, GPQA, Social IQA, EbookFoundation list |
| **Unlicense** | No | No | No | LinkedIn Skill Quizzes |
| **Public Domain** | No | No | No | (Some individual resources) |

### Conditionally Compatible
These require legal review and/or compliance measures:

| License | Key Restriction | Implication |
|---------|----------------|-------------|
| **CC-BY-SA** | Derivatives must use same license | Platform features using this content must be open |
| **GPL-3.0** | Copyleft for software | Embedding GPL sims may require open-sourcing surrounding code |
| **GFDL** | Similar to CC-BY-SA | Must provide source of modifications |

### NOT Compatible with Commercial Use
These CANNOT be used in a commercial platform without special permission:

| License | Restriction |
|---------|------------|
| **CC-BY-NC** | No commercial use |
| **CC-BY-NC-SA** | No commercial use + ShareAlike |
| **Non-commercial research** | Research only |
| **Copyright (all rights reserved)** | No reuse without permission |

---

## Summary Statistics

| Category | Total Resources Found | Commercially Usable | Total Items (Questions/Lessons/Cards) |
|----------|----------------------|--------------------|-----------------------------------------|
| Question Banks / Assessment Datasets | 20 datasets | 14 datasets | ~950,000+ questions |
| Open Textbooks | 5 platforms | 2 fully (OpenStax, LibreTexts) | 3,800+ textbooks, 240K+ exercises |
| GitHub Curricula | 10+ repositories | 8 repositories | 200+ structured lessons |
| Flashcard Datasets | 5 resources | 3 resources | 2,000+ structured cards |
| Simulations / Interactive | 4 platforms | 1 (Scratch) | 150+ sims, 100M+ projects |
| Coding Challenges | 7 resources | 6 resources | 15,000+ problems |
| Curated Lists / Meta | 3 resources | 3 resources | Thousands of links |
| **TOTAL** | **50+ distinct resources** | **~36 resources** | **~1.2M+ content items** |

---

## Recommended Next Steps

1. **Immediate Wins**: Import MMLU (114K questions, 57 subjects, MIT) and MedMCQA (194K questions, 21 medical subjects, Apache 2.0) -- these two datasets alone provide ~308K structured questions across virtually all platform domains.

2. **Math Pipeline**: Combine AQUA-RAT (98K with rationales), GSM8K (8.8K grade school), and MATH (12.5K competition) for a comprehensive math question bank with step-by-step solutions.

3. **Coding Curriculum**: Merge Exercism (81 languages), LeetCode dataset (2.3K problems), and APPS (10K problems) for a massive coding challenge library.

4. **Textbook Content**: Process OpenStax textbooks (CC-BY 4.0) into lesson chunks. Start with subjects that overlap with existing modules.

5. **Medical Track**: Combine MedMCQA + PubMedQA + HEAD-QA for 475K+ medical questions.

6. **Quality Review Pipeline**: All imported datasets should go through a quality review process before being surfaced to students. Prioritize datasets with expert explanations (MedMCQA, AQUA-RAT, GSM8K) as these provide both questions AND lesson content.
