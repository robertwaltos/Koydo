import type { LearningModule } from "@/lib/modules/types";

export const philosophy_401_Module: LearningModule = {
  "id": "philosophy-401",
  "title": "Philosophy Mastery and Leadership",
  "description": "An advanced curriculum in philosophy emphasizing rigorous argument construction, epistemology, ethical and political theory, and applied reasoning. Students will learn to analyze complex problems, evaluate evidence, and make high-quality decisions through structured case studies and assessments.",
  "subject": "Humanities",
  "tags": [
    "philosophy",
    "critical-thinking",
    "ethics",
    "logic",
    "advanced"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for argument structure and epistemology.",
    "Apply structured methods to analyze complex ethical and political problems.",
    "Evaluate evidence based on established criteria, constraints, and context.",
    "Diagnose common fallacies and errors in reasoning, and design corrective approaches.",
    "Communicate complex philosophical positions and their tradeoffs clearly.",
    "Build repeatable systems for sustained improvement in philosophical inquiry."
  ],
  "lessons": [
    {
      "id": "philosophy-401-l01",
      "title": "Foundational Models for Philosophical Inquiry",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "philosophy-401-l01-a1",
          "type": "image",
          "title": "Diagram: Scoping an Argument",
          "content": "A Venn diagram showing the relationship between a broad topic, the specific question (unit of analysis), and the defined scope of the inquiry."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-401-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Vocabulary",
          "content": "In advanced philosophy, precision is paramount. Before analyzing an argument, we must first define its scope and establish a clear operating vocabulary. This involves identifying the core question, or 'unit of analysis,' and setting the boundaries for our discussion. By ensuring all participants use terms consistently, we create a shared foundation for productive debate and prevent misunderstandings. This initial step is crucial for constructing sound arguments and making defensible claims."
        },
        {
          "id": "philosophy-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning and Constraints",
          "content": "Effective philosophical analysis goes beyond identifying what happened to understand *why* it happened. This requires causal reasoning—examining the assumptions, dependencies, and logical constraints that shape an argument. By mapping these relationships, we can distinguish between necessary and sufficient conditions and identify the root premises of a conclusion. This focus on underlying causes, rather than surface-level claims, allows for more profound critiques and robust arguments."
        },
        {
          "id": "philosophy-401-l01-c3",
          "kind": "recap",
          "title": "Epistemic Responsibility",
          "content": "This lesson introduces core principles of epistemic responsibility. This includes the non-negotiable practices of documenting your reasoning process, adhering to high standards of evidence, and creating accountability loops to check your own biases and assumptions. These habits ensure that our philosophical work is rigorous, transparent, and trustworthy, forming a solid foundation for all future inquiry."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-401-l01-f1",
          "front": "Unit of Analysis",
          "back": "The specific concept, question, or entity being evaluated in a philosophical inquiry."
        },
        {
          "id": "philosophy-401-l01-f2",
          "front": "Constraint Analysis",
          "back": "A method for identifying the logical, ethical, or practical boundaries that shape a philosophical problem and its possible solutions."
        },
        {
          "id": "philosophy-401-l01-f3",
          "front": "Standard of Evidence",
          "back": "The threshold of justification and quality that a piece of evidence must meet to be considered in an argument."
        }
      ]
    },
    {
      "id": "philosophy-401-l02",
      "title": "Structuring a Philosophical Inquiry",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "philosophy-401-l02-a1",
          "type": "image",
          "title": "Flowchart: The Inquiry Process",
          "content": "An interactive flowchart illustrating the steps of a philosophical inquiry: from formulating a question, gathering evidence, structuring the argument, testing for fallacies, to drawing a conclusion."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-401-l02-c1",
          "kind": "practice",
          "title": "Constructing an Inquiry Workflow",
          "content": "In this interactive activity, you will build a structured workflow for a philosophical inquiry. You will learn to organize the process into distinct stages: defining premises and evidence (inputs), applying logical checks and balances (checkpoints), formulating a conclusion (output), and identifying points where you might need to revisit assumptions (feedback loops). This hands-on practice will help you develop a systematic and effective approach to tackling complex philosophical questions."
        },
        {
          "id": "philosophy-401-l02-c2",
          "kind": "recap",
          "title": "Argument Journaling",
          "content": "We will recap the importance of documenting your reasoning process. For every key step in your inquiry, you should log the rationale for your decision, its expected impact on your argument, and a verification point to check if your reasoning holds up. This practice of 'argument journaling' is essential for critical self-reflection and allows you to analyze and refine your thinking over time."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-401-l02-act1",
          "type": "matching_pairs",
          "title": "Argument Structure and Function",
          "description": "Match each component of a structured inquiry to its primary function.",
          "pairs": [
            {
              "left": "Premise Evaluation",
              "right": "Ensures the argument is built on a solid foundation."
            },
            {
              "left": "Logical Fallacy Check",
              "right": "Prevents errors in reasoning from weakening the conclusion."
            },
            {
              "left": "Conclusion Strength Test",
              "right": "Measures how well the conclusion is supported by the evidence."
            },
            {
              "left": "Assumption Review",
              "right": "Identifies hidden beliefs that could be challenged."
            }
          ]
        },
        {
          "id": "philosophy-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Classifying Argumentative Flaws",
          "description": "Sort each flaw into the correct category of error.",
          "buckets": [
            "Logical Fallacy",
            "Epistemic Error",
            "Rhetorical Device"
          ],
          "items": [
            {
              "text": "Ad Hominem Attack",
              "bucket": "Logical Fallacy"
            },
            {
              "text": "Confirmation Bias",
              "bucket": "Epistemic Error"
            },
            {
              "text": "Appeal to Emotion",
              "bucket": "Rhetorical Device"
            },
            {
              "text": "Overlooking contradictory evidence",
              "bucket": "Epistemic Error"
            },
            {
              "text": "Straw Man Argument",
              "bucket": "Logical Fallacy"
            }
          ]
        }
      ]
    },
    {
      "id": "philosophy-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-401-l03-a1",
          "type": "practice",
          "title": "Review Prompt",
          "content": "Before starting, briefly review your notes on 'unit of analysis,' 'causal reasoning,' and the steps of a structured inquiry."
        }
      ],
      "questions": [
        {
          "id": "philosophy-401-l03-q1",
          "text": "Which action best improves the rigor of a philosophical argument?",
          "skillId": "philosophy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Using emotionally charged language to be more persuasive."
            },
            {
              "id": "b",
              "text": "Clearly defining terms, testing assumptions, and evaluating alternative viewpoints."
            },
            {
              "id": "c",
              "text": "Focusing only on evidence that supports your initial hypothesis."
            },
            {
              "id": "d",
              "text": "Keeping your reasoning process private to avoid criticism."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigor in philosophy comes from clarity, self-critique, and a thorough examination of the logical space, which includes defining terms and testing assumptions."
        },
        {
          "id": "philosophy-401-l03-q2",
          "text": "In epistemology, what is the strongest indicator of a high-quality inquiry process?",
          "skillId": "philosophy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The speed at which a conclusion is reached."
            },
            {
              "id": "b",
              "text": "A transparent process with traceable steps, logical checks, and measurable outcomes."
            },
            {
              "id": "c",
              "text": "An unstructured approach that relies purely on intuition."
            },
            {
              "id": "d",
              "text": "The popularity of the final conclusion."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A high-quality epistemic process is observable, repeatable, and justifiable at every step, ensuring the conclusion is well-founded."
        },
        {
          "id": "philosophy-401-l03-q3",
          "text": "When analyzing an ethical theory, which practice supports a trustworthy evaluation?",
          "skillId": "philosophy-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignoring hypothetical edge cases and counterexamples."
            },
            {
              "id": "b",
              "text": "Using baseline comparisons against other theories and analyzing potential failure modes."
            },
            {
              "id": "c",
              "text": "Changing the criteria for what counts as 'good' after seeing the theory's results."
            },
            {
              "id": "d",
              "text": "Removing the historical and social context from the theory's development."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Trustworthy evaluations require context and comparison. Baselines and failure analysis prevent biased assessments and improve critical understanding."
        },
        {
          "id": "philosophy-401-l03-q4",
          "text": "A mature strategy for applied reasoning should prioritize:",
          "skillId": "philosophy-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Optimizing for a single principle (e.g., utility) at any cost."
            },
            {
              "id": "b",
              "text": "Balancing competing values and considering the long-term implications of a decision."
            },
            {
              "id": "c",
              "text": "Making decisions based only on gut feeling or intuition."
            },
            {
              "id": "d",
              "text": "Avoiding a post-decision review to maintain confidence."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature reasoning acknowledges complexity and seeks balanced, sustainable outcomes rather than relying on oversimplified metrics or unexamined intuition."
        }
      ]
    },
    {
      "id": "philosophy-401-l04",
      "title": "Methods, Criteria, and Errors in Reasoning",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "philosophy-401-l04-a1",
          "type": "image",
          "title": "Decision Tree: Choosing a Method",
          "content": "A flowchart guiding the student through questions to help select the best philosophical method (e.g., 'Is the question conceptual or empirical?') for a given problem."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Different philosophical questions require different methods of inquiry. We will explore how to select and justify the appropriate method—such as Socratic dialogue, thought experiments, or formal logic—based on the nature of the problem, the available evidence, and the potential consequences of flawed reasoning. This strategic choice is fundamental to conducting an effective and efficient philosophical investigation."
        },
        {
          "id": "philosophy-401-l04-c2",
          "kind": "example",
          "title": "Developing Evaluation Criteria",
          "content": "How do we know if an argument is good? We need clear criteria. This involves establishing standards for logical consistency, empirical adequacy, and explanatory power. We'll examine how to connect predictive criteria (e.g., 'Does this ethical theory anticipate difficult cases?') with outcome evaluations (e.g., 'Does the theory produce a just result?'). This framework allows us to assess arguments systematically and identify weaknesses early."
        },
        {
          "id": "philosophy-401-l04-c3",
          "kind": "recap",
          "title": "A Taxonomy of Errors in Reasoning",
          "content": "This recap introduces a structured classification of common errors in reasoning. We will categorize failures by their source: formal fallacies (errors in logical structure), informal fallacies (errors in content and context), and cognitive biases (systematic patterns of deviation from rational judgment). By understanding this taxonomy, we can diagnose flaws in arguments more precisely and develop targeted strategies to avoid them in our own work."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-401-l04-f1",
          "front": "Predictive Criterion",
          "back": "A standard used to evaluate the likely success or coherence of an argument before its final conclusion is reached."
        },
        {
          "id": "philosophy-401-l04-f2",
          "front": "Taxonomy of Errors",
          "back": "A structured classification of types of flawed reasoning, used to diagnose and correct arguments."
        },
        {
          "id": "philosophy-401-l04-f3",
          "front": "Consequences of Flawed Reasoning",
          "back": "The logical, ethical, or practical impact of reaching an incorrect conclusion due to errors in an argument."
        }
      ]
    },
    {
      "id": "philosophy-401-l05",
      "title": "Case Study: Analyzing an Ethical Framework",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "philosophy-401-l05-a1",
          "type": "image",
          "title": "Case Study Brief",
          "content": "A one-page summary of a complex ethical dilemma, highlighting the key stakeholders, conflicting values, and the central question to be resolved."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will analyze a realistic ethical dilemma. You will break the case down into its core components: the primary objective, the contextual factors, the ethical constraints, and potential courses of action. For each option, you will explicitly map the trade-offs between competing values (e.g., liberty vs. security). This exercise will sharpen your analytical skills and your ability to navigate complex moral landscapes."
        },
        {
          "id": "philosophy-401-l05-c2",
          "kind": "recap",
          "title": "Proposing a Refined Position",
          "content": "Based on your case analysis, you will formulate and defend a refined ethical position. This proposal must include clear criteria for what constitutes a successful resolution, an acknowledgment of the strongest counter-arguments, and a plan for how your position could be implemented or tested. This final step practices the crucial skill of moving from analysis to a well-reasoned, actionable conclusion."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-401-l05-act1",
          "type": "scenario_practice",
          "title": "Ethical Framework Simulation",
          "description": "You are on a bioethics committee. Apply one of three frameworks (Utilitarian, Deontological, Virtue Ethics) to a gene-editing dilemma and justify your decision.",
          "instructions": [
            "Define your success criteria before selecting a framework.",
            "Document one short-term tradeoff and one long-term benefit of your chosen path.",
            "Specify a metric or principle that would confirm the success of your decision."
          ]
        },
        {
          "id": "philosophy-401-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Principles to Implications",
          "description": "Connect each philosophical principle or method with its most likely implication.",
          "pairs": [
            {
              "left": "Applying the Veil of Ignorance",
              "right": "Leads to impartial principles of justice."
            },
            {
              "left": "The Categorical Imperative",
              "right": "Establishes universal moral duties."
            },
            {
              "left": "Seeking the Golden Mean",
              "right": "Identifies virtue as a balance between extremes."
            },
            {
              "left": "Maximizing Overall Happiness",
              "right": "Prioritizes consequences in ethical calculations."
            }
          ]
        }
      ]
    },
    {
      "id": "philosophy-401-l06",
      "title": "Checkpoint 2: Applied Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Review the Taxonomy of Errors and the ethical frameworks from the case study before you begin."
        }
      ],
      "questions": [
        {
          "id": "philosophy-401-l06-q1",
          "text": "An argument claims that because a new technology is 'natural,' it must be morally good. According to the taxonomy of errors, this is an example of:",
          "skillId": "philosophy-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "A formal fallacy."
            },
            {
              "id": "b",
              "text": "An appeal to nature, which is an informal fallacy."
            },
            {
              "id": "c",
              "text": "A cognitive bias."
            },
            {
              "id": "d",
              "text": "A sound deductive argument."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The 'appeal to nature' is a common informal fallacy that incorrectly assumes that what is natural is inherently good or right. It's an error in the content and context of the argument, not its logical form."
        },
        {
          "id": "philosophy-401-l06-q2",
          "text": "When analyzing a complex ethical case study, what is the most critical first step?",
          "skillId": "philosophy-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Immediately choosing a solution that feels right."
            },
            {
              "id": "b",
              "text": "Identifying the core ethical conflict and the primary stakeholders involved."
            },
            {
              "id": "c",
              "text": "Finding historical precedents without considering the current context."
            },
            {
              "id": "d",
              "text": "Focusing only on the potential legal implications."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Before any framework can be applied or a solution proposed, one must first decompose the problem to understand the central tension and who is affected by the outcome."
        },
        {
          "id": "philosophy-401-l06-q3",
          "text": "A policy analyst uses a utilitarian framework to justify a decision that benefits the majority but severely harms a minority. A deontological critique of this decision would most likely focus on:",
          "skillId": "philosophy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Whether the calculation of overall happiness was accurate."
            },
            {
              "id": "b",
              "text": "Whether the decision violates a universal moral duty or the rights of individuals."
            },
            {
              "id": "c",
              "text": "Whether the analyst is a virtuous person."
            },
            {
              "id": "d",
              "text": "Whether the policy will lead to long-term economic growth."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Deontology prioritizes duties, rules, and rights over consequences. It would question whether the action itself is permissible, regardless of the positive outcome for the majority."
        },
        {
          "id": "philosophy-401-l06-q4",
          "text": "Which of the following represents the strongest 'evaluation criterion' for a political theory of justice?",
          "skillId": "philosophy-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The theory was proposed by a famous philosopher."
            },
            {
              "id": "b",
              "text": "The theory is described in a very long and complex book."
            },
            {
              "id": "c",
              "text": "The theory's principles, when applied, consistently resolve conflicts and protect basic rights under various conditions."
            },
            {
              "id": "d",
              "text": "The theory is very popular on social media."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The strongest criterion for evaluating a theory is its functional success: its logical consistency, explanatory power, and ability to be applied effectively to real-world or hypothetical problems."
        }
      ]
    }
  ]
};
