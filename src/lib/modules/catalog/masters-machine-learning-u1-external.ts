import type { LearningModule } from "@/lib/modules/types";

export const MastersMachineLearningU1ExternalModule: LearningModule = {
  "id": "masters-machine-learning-u1-external",
  "title": "Machine Learning (Master's Level)",
  "description": "Machine Learning curriculum from 1 open-source datasets. MMLU (cais/mmlu).",
  "subject": "Science",
  "lessons": [
    {
      "id": "masters-machine-learning-u1-external-l01",
      "title": "Machine Learning — Quiz 1",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-45d3af24a1d89bdc",
          "text": "Statement 1| Linear regression estimator has the smallest variance among all unbiased estimators. Statement 2| The coefficients α assigned to the classifiers assembled by AdaBoost are always non-negative.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9512b0bbb405df2d",
          "text": "Statement 1| RoBERTa pretrains on a corpus that is approximate 10x larger than the corpus BERT pretrained on. Statement 2| ResNeXts in 2018 usually used tanh activation functions.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d7085c565d314fe4",
          "text": "Statement 1| Support vector machines, like logistic regression models, give a probability distribution over the possible labels given an input example. Statement 2| We would expect the support vectors to remain the same in general as we move from a linear kernel to higher order polynomial kernels.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-7d061e3c25e6f04a",
          "text": "A machine learning problem involves four attributes plus a class. The attributes have 3, 2, 2, and 2 possible values each. The class has 3 possible values. How many maximum possible different examples are there?",
          "options": [
            {
              "id": "opt-A",
              "text": "12"
            },
            {
              "id": "opt-B",
              "text": "24"
            },
            {
              "id": "opt-C",
              "text": "48"
            },
            {
              "id": "opt-D",
              "text": "72"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-52db7ff7c7f9bfd3",
          "text": "As of 2020, which architecture is best for classifying high-resolution images?",
          "options": [
            {
              "id": "opt-A",
              "text": "convolutional networks"
            },
            {
              "id": "opt-B",
              "text": "graph networks"
            },
            {
              "id": "opt-C",
              "text": "fully connected networks"
            },
            {
              "id": "opt-D",
              "text": "RBF networks"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-16d3b634d3b634f9",
          "text": "Statement 1| The log-likelihood of the data will always increase through successive iterations of the expectation maximation algorithm. Statement 2| One disadvantage of Q-learning is that it can only be used when the learner has prior knowledge of how its actions affect its environment.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-bfb43b97dc70a556",
          "text": "Let us say that we have computed the gradient of our cost function and stored it in a vector g. What is the cost of one gradient descent update given the gradient?",
          "options": [
            {
              "id": "opt-A",
              "text": "O(D)"
            },
            {
              "id": "opt-B",
              "text": "O(N)"
            },
            {
              "id": "opt-C",
              "text": "O(ND)"
            },
            {
              "id": "opt-D",
              "text": "O(ND^2)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-92ed7e07f4e4870d",
          "text": "Statement 1| For a continuous random variable x and its probability distribution function p(x), it holds that 0 ≤ p(x) ≤ 1 for all x. Statement 2| Decision tree is learned by minimizing information gain.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-7f9dc321c74f20d6",
          "text": "Consider the Bayesian network given below. How many independent parameters are needed for this Bayesian Network H -> U <- P <- W?",
          "options": [
            {
              "id": "opt-A",
              "text": "2"
            },
            {
              "id": "opt-B",
              "text": "4"
            },
            {
              "id": "opt-C",
              "text": "8"
            },
            {
              "id": "opt-D",
              "text": "16"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-47a3a27cccecde3d",
          "text": "As the number of training examples goes to infinity, your model trained on that data will have:",
          "options": [
            {
              "id": "opt-A",
              "text": "Lower variance"
            },
            {
              "id": "opt-B",
              "text": "Higher variance"
            },
            {
              "id": "opt-C",
              "text": "Same variance"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b4a0a3e88aee5768",
          "text": "Statement 1| The set of all rectangles in the 2D plane (which includes non axisaligned rectangles) can shatter a set of 5 points. Statement 2| The VC-dimension of k-Nearest Neighbour classifier when k = 1 is infinite.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-eb5340116b07cd42",
          "text": "_ refers to a model that can neither model the training data nor generalize to new data.",
          "options": [
            {
              "id": "opt-A",
              "text": "good fitting"
            },
            {
              "id": "opt-B",
              "text": "overfitting"
            },
            {
              "id": "opt-C",
              "text": "underfitting"
            },
            {
              "id": "opt-D",
              "text": "all of the above"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e6db1d69d7082269",
          "text": "Statement 1| The F1 score can be especially useful for datasets with class high imbalance. Statement 2| The area under the ROC curve is one of the main metrics used to assess anomaly detectors.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-6ed4808b9fe8eefc",
          "text": "Statement 1| The back-propagation algorithm learns a globally optimal neural network with hidden layers. Statement 2| The VC dimension of a line should be at most 2, since I can find at least one case of 3 points that cannot be shattered by any line.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-07b484c39358d26d",
          "text": "High entropy means that the partitions in classification are",
          "options": [
            {
              "id": "opt-A",
              "text": "pure"
            },
            {
              "id": "opt-B",
              "text": "not pure"
            },
            {
              "id": "opt-C",
              "text": "useful"
            },
            {
              "id": "opt-D",
              "text": "useless"
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l02",
      "title": "Machine Learning — Quiz 2",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-91d1053a7922658f",
          "text": "Statement 1| Layer Normalization is used in the original ResNet paper, not Batch Normalization. Statement 2| DCGANs use self-attention to stabilize training.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-6f6b27b3816bbf6a",
          "text": "In building a linear regression model for a particular data set, you observe the coefficient of one of the features having a relatively high negative value. This suggests that",
          "options": [
            {
              "id": "opt-A",
              "text": "This feature has a strong effect on the model (should be retained)"
            },
            {
              "id": "opt-B",
              "text": "This feature does not have a strong effect on the model (should be ignored)"
            },
            {
              "id": "opt-C",
              "text": "It is not possible to comment on the importance of this feature without additional information"
            },
            {
              "id": "opt-D",
              "text": "Nothing can be determined."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5876382e493b2de2",
          "text": "For a neural network, which one of these structural assumptions is the one that most affects the trade-off between underfitting (i.e. a high bias model) and overfitting (i.e. a high variance model):",
          "options": [
            {
              "id": "opt-A",
              "text": "The number of hidden nodes"
            },
            {
              "id": "opt-B",
              "text": "The learning rate"
            },
            {
              "id": "opt-C",
              "text": "The initial choice of weights"
            },
            {
              "id": "opt-D",
              "text": "The use of a constant-term unit input"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a2ab41589f2b991a",
          "text": "For polynomial regression, which one of these structural assumptions is the one that most affects the trade-off between underfitting and overfitting:",
          "options": [
            {
              "id": "opt-A",
              "text": "The polynomial degree"
            },
            {
              "id": "opt-B",
              "text": "Whether we learn the weights by matrix inversion or gradient descent"
            },
            {
              "id": "opt-C",
              "text": "The assumed variance of the Gaussian noise"
            },
            {
              "id": "opt-D",
              "text": "The use of a constant-term unit input"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-1435bc7211303678",
          "text": "Statement 1| As of 2020, some models attain greater than 98% accuracy on CIFAR-10. Statement 2| The original ResNets were not optimized with the Adam optimizer.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-837081a42c66b289",
          "text": "The K-means algorithm:",
          "options": [
            {
              "id": "opt-A",
              "text": "Requires the dimension of the feature space to be no bigger than the number of samples"
            },
            {
              "id": "opt-B",
              "text": "Has the smallest value of the objective function when K = 1"
            },
            {
              "id": "opt-C",
              "text": "Minimizes the within class variance for a given number of clusters"
            },
            {
              "id": "opt-D",
              "text": "Converges to the global optimum if and only if the initial means are chosen as some of the samples themselves"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1667fabadad6986d",
          "text": "Statement 1| VGGNets have convolutional kernels of smaller width and height than AlexNet's first-layer kernels. Statement 2| Data-dependent weight initialization procedures were introduced before Batch Normalization.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-d17f731cb26b688f",
          "text": "What is the rank of the following matrix? A = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]",
          "options": [
            {
              "id": "opt-A",
              "text": "0"
            },
            {
              "id": "opt-B",
              "text": "1"
            },
            {
              "id": "opt-C",
              "text": "2"
            },
            {
              "id": "opt-D",
              "text": "3"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-f4bafe5c984658d2",
          "text": "Statement 1| Density estimation (using say, the kernel density estimator) can be used to perform classification. Statement 2| The correspondence between logistic regression and Gaussian Naive Bayes (with identity class covariances) means that there is a one-to-one correspondence between the parameters of the two classifiers.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4e254051c1f27204",
          "text": "Suppose we would like to perform clustering on spatial data such as the geometrical locations of houses. We wish to produce clusters of many different sizes and shapes. Which of the following methods is the most appropriate?",
          "options": [
            {
              "id": "opt-A",
              "text": "Decision Trees"
            },
            {
              "id": "opt-B",
              "text": "Density-based clustering"
            },
            {
              "id": "opt-C",
              "text": "Model-based clustering"
            },
            {
              "id": "opt-D",
              "text": "K-means clustering"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-b8492ff43460a120",
          "text": "Statement 1| In AdaBoost weights of the misclassified examples go up by the same multiplicative factor. Statement 2| In AdaBoost, weighted training error e_t of the tth weak classifier on training data with weights D_t tends to increase as a function of t.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-23f9e0488fbf84b4",
          "text": "MLE estimates are often undesirable because",
          "options": [
            {
              "id": "opt-A",
              "text": "they are biased"
            },
            {
              "id": "opt-B",
              "text": "they have high variance"
            },
            {
              "id": "opt-C",
              "text": "they are not consistent estimators"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e26154bd6b3c5656",
          "text": "Computational complexity of Gradient descent is,",
          "options": [
            {
              "id": "opt-A",
              "text": "linear in D"
            },
            {
              "id": "opt-B",
              "text": "linear in N"
            },
            {
              "id": "opt-C",
              "text": "polynomial in D"
            },
            {
              "id": "opt-D",
              "text": "dependent on the number of iterations"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d6fb8c3e9e350877",
          "text": "Averaging the output of multiple decision trees helps _.",
          "options": [
            {
              "id": "opt-A",
              "text": "Increase bias"
            },
            {
              "id": "opt-B",
              "text": "Decrease bias"
            },
            {
              "id": "opt-C",
              "text": "Increase variance"
            },
            {
              "id": "opt-D",
              "text": "Decrease variance"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-dae136198f901113",
          "text": "The model obtained by applying linear regression on the identified subset of features may differ from the model obtained at the end of the process of identifying the subset during",
          "options": [
            {
              "id": "opt-A",
              "text": "Best-subset selection"
            },
            {
              "id": "opt-B",
              "text": "Forward stepwise selection"
            },
            {
              "id": "opt-C",
              "text": "Forward stage wise selection"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l03",
      "title": "Machine Learning — Quiz 3",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-1c54cb8c2bba79f8",
          "text": "Neural networks:",
          "options": [
            {
              "id": "opt-A",
              "text": "Optimize a convex objective function"
            },
            {
              "id": "opt-B",
              "text": "Can only be trained with stochastic gradient descent"
            },
            {
              "id": "opt-C",
              "text": "Can use a mix of different activation functions"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b636730b5203c27b",
          "text": "Say the incidence of a disease D is about 5 cases per 100 people (i.e., P(D) = 0.05). Let Boolean random variable D mean a patient “has disease D” and let Boolean random variable TP stand for \"tests positive.\" Tests for disease D are known to be very accurate in the sense that the probability of testing positive when you have the disease is 0.99, and the probability of testing negative when you do not have the disease is 0.97. What is P(TP), the prior probability of testing positive.",
          "options": [
            {
              "id": "opt-A",
              "text": "0.0368"
            },
            {
              "id": "opt-B",
              "text": "0.473"
            },
            {
              "id": "opt-C",
              "text": "0.078"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-63d64360cd0eb442",
          "text": "Statement 1| After mapped into feature space Q through a radial basis kernel function, 1-NN using unweighted Euclidean distance may be able to achieve better classification performance than in original space (though we can’t guarantee this). Statement 2| The VC dimension of a Perceptron is smaller than the VC dimension of a simple linear SVM.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-69cff1248ba6ca55",
          "text": "The disadvantage of Grid search is",
          "options": [
            {
              "id": "opt-A",
              "text": "It can not be applied to non-differentiable functions."
            },
            {
              "id": "opt-B",
              "text": "It can not be applied to non-continuous functions."
            },
            {
              "id": "opt-C",
              "text": "It is hard to implement."
            },
            {
              "id": "opt-D",
              "text": "It runs reasonably slow for multiple linear regression."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b02a9fcc300c7b34",
          "text": "Predicting the amount of rainfall in a region based on various cues is a ______ problem.",
          "options": [
            {
              "id": "opt-A",
              "text": "Supervised learning"
            },
            {
              "id": "opt-B",
              "text": "Unsupervised learning"
            },
            {
              "id": "opt-C",
              "text": "Clustering"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-4d9acab5119ad1cb",
          "text": "Which of the following sentence is FALSE regarding regression?",
          "options": [
            {
              "id": "opt-A",
              "text": "It relates inputs to outputs."
            },
            {
              "id": "opt-B",
              "text": "It is used for prediction."
            },
            {
              "id": "opt-C",
              "text": "It may be used for interpretation."
            },
            {
              "id": "opt-D",
              "text": "It discovers causal relationships"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-421e4383552153ae",
          "text": "Which one of the following is the main reason for pruning a Decision Tree?",
          "options": [
            {
              "id": "opt-A",
              "text": "To save computing time during testing"
            },
            {
              "id": "opt-B",
              "text": "To save space for storing the Decision Tree"
            },
            {
              "id": "opt-C",
              "text": "To make the training set error smaller"
            },
            {
              "id": "opt-D",
              "text": "To avoid overfitting the training set"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-8cc1375c4c38d718",
          "text": "Statement 1| The kernel density estimator is equivalent to performing kernel regression with the value Yi = 1/n at each point Xi in the original data set. Statement 2| The depth of a learned decision tree can be larger than the number of training examples used to create the tree.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-9a779a5155a66cd5",
          "text": "Suppose your model is overfitting. Which of the following is NOT a valid way to try and reduce the overfitting?",
          "options": [
            {
              "id": "opt-A",
              "text": "Increase the amount of training data."
            },
            {
              "id": "opt-B",
              "text": "Improve the optimisation algorithm being used for error minimisation."
            },
            {
              "id": "opt-C",
              "text": "Decrease the model complexity."
            },
            {
              "id": "opt-D",
              "text": "Reduce the noise in the training data."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-469c1702055b817a",
          "text": "Statement 1| The softmax function is commonly used in mutliclass logistic regression. Statement 2| The temperature of a nonuniform softmax distribution affects its entropy.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-efe1c052bf9407df",
          "text": "Which of the following is/are true regarding an SVM?",
          "options": [
            {
              "id": "opt-A",
              "text": "For two dimensional data points, the separating hyperplane learnt by a linear SVM will be a straight line."
            },
            {
              "id": "opt-B",
              "text": "In theory, a Gaussian kernel SVM cannot model any complex separating hyperplane."
            },
            {
              "id": "opt-C",
              "text": "For every kernel function used in a SVM, one can obtain an equivalent closed form basis expansion."
            },
            {
              "id": "opt-D",
              "text": "Overfitting in an SVM is not a function of number of support vectors."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-81f13329d21d319f",
          "text": "Which of the following is the joint probability of H, U, P, and W described by the given Bayesian Network H -> U <- P <- W? [note: as the product of the conditional probabilities]",
          "options": [
            {
              "id": "opt-A",
              "text": "P(H, U, P, W) = P(H) * P(W) * P(P) * P(U)"
            },
            {
              "id": "opt-B",
              "text": "P(H, U, P, W) = P(H) * P(W) * P(P | W) * P(W | H, P)"
            },
            {
              "id": "opt-C",
              "text": "P(H, U, P, W) = P(H) * P(W) * P(P | W) * P(U | H, P)"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a5219a788035be94",
          "text": "Statement 1| Since the VC dimension for an SVM with a Radial Base Kernel is infinite, such an SVM must be worse than an SVM with polynomial kernel which has a finite VC dimension. Statement 2| A two layer neural network with linear activation functions is essentially a weighted combination of linear separators, trained on a given dataset; the boosting algorithm built on linear separators also finds a combination of linear separators, therefore these two algorithms will give the same result.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-7a5dcb91f5fdb208",
          "text": "Statement 1| The ID3 algorithm is guaranteed to find the optimal decision tree. Statement 2| Consider a continuous probability distribution with density f() that is nonzero everywhere. The probability of a value x is equal to f(x).",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-94073bb3b01c1579",
          "text": "Given a Neural Net with N input nodes, no hidden layers, one output node, with Entropy Loss and Sigmoid Activation Functions, which of the following algorithms (with the proper hyper-parameters and initialization) can be used to find the global optimum?",
          "options": [
            {
              "id": "opt-A",
              "text": "Stochastic Gradient Descent"
            },
            {
              "id": "opt-B",
              "text": "Mini-Batch Gradient Descent"
            },
            {
              "id": "opt-C",
              "text": "Batch Gradient Descent"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l04",
      "title": "Machine Learning — Quiz 4",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-cefd7823a2326e72",
          "text": "Adding more basis functions in a linear model, pick the most probably option:",
          "options": [
            {
              "id": "opt-A",
              "text": "Decreases model bias"
            },
            {
              "id": "opt-B",
              "text": "Decreases estimation bias"
            },
            {
              "id": "opt-C",
              "text": "Decreases variance"
            },
            {
              "id": "opt-D",
              "text": "Doesn’t affect bias and variance"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-07ec3a0dc2f90f83",
          "text": "Consider the Bayesian network given below. How many independent parameters would we need if we made no assumptions about independence or conditional independence H -> U <- P <- W?",
          "options": [
            {
              "id": "opt-A",
              "text": "3"
            },
            {
              "id": "opt-B",
              "text": "4"
            },
            {
              "id": "opt-C",
              "text": "7"
            },
            {
              "id": "opt-D",
              "text": "15"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c601b7427968d282",
          "text": "Another term for out-of-distribution detection is?",
          "options": [
            {
              "id": "opt-A",
              "text": "anomaly detection"
            },
            {
              "id": "opt-B",
              "text": "one-class detection"
            },
            {
              "id": "opt-C",
              "text": "train-test mismatch robustness"
            },
            {
              "id": "opt-D",
              "text": "background detection"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-fa90300b9c861cd3",
          "text": "Statement 1| We learn a classifier f by boosting weak learners h. The functional form of f’s decision boundary is the same as h’s, but with different parameters. (e.g., if h was a linear classifier, then f is also a linear classifier). Statement 2| Cross validation can be used to select the number of iterations in boosting; this procedure may help reduce overfitting.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-838791e914bd2c73",
          "text": "Statement 1| Highway networks were introduced after ResNets and eschew max pooling in favor of convolutions. Statement 2| DenseNets usually cost more memory than ResNets.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-3050a3c3cb313b7d",
          "text": "If N is the number of instances in the training dataset, nearest neighbors has a classification run time of",
          "options": [
            {
              "id": "opt-A",
              "text": "O(1)"
            },
            {
              "id": "opt-B",
              "text": "O( N )"
            },
            {
              "id": "opt-C",
              "text": "O(log N )"
            },
            {
              "id": "opt-D",
              "text": "O( N^2 )"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-0b71f1fa4d274454",
          "text": "Statement 1| The original ResNets and Transformers are feedforward neural networks. Statement 2| The original Transformers use self-attention, but the original ResNet does not.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-d76afdf90f1f9b97",
          "text": "Statement 1| RELUs are not monotonic, but sigmoids are monotonic. Statement 2| Neural networks trained with gradient descent with high probability converge to the global optimum.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-6bdc90c2a30df32d",
          "text": "The numerical output of a sigmoid node in a neural network:",
          "options": [
            {
              "id": "opt-A",
              "text": "Is unbounded, encompassing all real numbers."
            },
            {
              "id": "opt-B",
              "text": "Is unbounded, encompassing all integers."
            },
            {
              "id": "opt-C",
              "text": "Is bounded between 0 and 1."
            },
            {
              "id": "opt-D",
              "text": "Is bounded between -1 and 1."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-0a67954fa0bcd299",
          "text": "Which of the following can only be used when training data are linearly separable?",
          "options": [
            {
              "id": "opt-A",
              "text": "Linear hard-margin SVM."
            },
            {
              "id": "opt-B",
              "text": "Linear Logistic Regression."
            },
            {
              "id": "opt-C",
              "text": "Linear Soft margin SVM."
            },
            {
              "id": "opt-D",
              "text": "The centroid method."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-38c2eb58b0396d23",
          "text": "Which of the following are the spatial clustering algorithms?",
          "options": [
            {
              "id": "opt-A",
              "text": "Partitioning based clustering"
            },
            {
              "id": "opt-B",
              "text": "K-means clustering"
            },
            {
              "id": "opt-C",
              "text": "Grid based clustering"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c314b164861bdafb",
          "text": "Statement 1| The maximum margin decision boundaries that support vector machines construct have the lowest generalization error among all linear classifiers. Statement 2| Any decision boundary that we get from a generative model with classconditional Gaussian distributions could in principle be reproduced with an SVM and a polynomial kernel of degree less than or equal to three.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0dce5429ae96cba2",
          "text": "Statement 1| L2 regularization of linear models tends to make models more sparse than L1 regularization. Statement 2| Residual connections can be found in ResNets and Transformers.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-424ab79857c596b2",
          "text": "Suppose we like to calculate P(H|E, F) and we have no conditional independence information. Which of the following sets of numbers are sufficient for the calculation?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(E, F), P(H), P(E|H), P(F|H)"
            },
            {
              "id": "opt-B",
              "text": "P(E, F), P(H), P(E, F|H)"
            },
            {
              "id": "opt-C",
              "text": "P(H), P(E|H), P(F|H)"
            },
            {
              "id": "opt-D",
              "text": "P(E, F), P(E|H), P(F|H)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-d928e9641d61d0d4",
          "text": "Which among the following prevents overfitting when we perform bagging?",
          "options": [
            {
              "id": "opt-A",
              "text": "The use of sampling with replacement as the sampling technique"
            },
            {
              "id": "opt-B",
              "text": "The use of weak classifiers"
            },
            {
              "id": "opt-C",
              "text": "The use of classification algorithms which are not prone to overfitting"
            },
            {
              "id": "opt-D",
              "text": "The practice of validation performed on every classifier trained"
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l05",
      "title": "Machine Learning — Quiz 5",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-6182a92fdcd9adac",
          "text": "Statement 1| PCA and Spectral Clustering (such as Andrew Ng’s) perform eigendecomposition on two different matrices. However, the size of these two matrices are the same. Statement 2| Since classification is a special case of regression, logistic regression is a special case of linear regression.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-544169f2fae6c0a2",
          "text": "Statement 1| The Stanford Sentiment Treebank contained movie reviews, not book reviews. Statement 2| The Penn Treebank has been used for language modeling.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-60ddb64cd295b4d3",
          "text": "What is the dimensionality of the null space of the following matrix? A = [[3, 2, −9], [−6, −4, 18], [12, 8, −36]]",
          "options": [
            {
              "id": "opt-A",
              "text": "0"
            },
            {
              "id": "opt-B",
              "text": "1"
            },
            {
              "id": "opt-C",
              "text": "2"
            },
            {
              "id": "opt-D",
              "text": "3"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a523722ce10a89ed",
          "text": "What are support vectors?",
          "options": [
            {
              "id": "opt-A",
              "text": "The examples farthest from the decision boundary."
            },
            {
              "id": "opt-B",
              "text": "The only examples necessary to compute f(x) in an SVM."
            },
            {
              "id": "opt-C",
              "text": "The data centroid."
            },
            {
              "id": "opt-D",
              "text": "All the examples that have a non-zero weight αk in a SVM."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-11f247ea4409a79c",
          "text": "Statement 1| Word2Vec parameters were not initialized using a Restricted Boltzman Machine. Statement 2| The tanh function is a nonlinear activation function.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-4e6a660f2a2cc245",
          "text": "If your training loss increases with number of epochs, which of the following could be a possible issue with the learning process?",
          "options": [
            {
              "id": "opt-A",
              "text": "Regularization is too low and model is overfitting"
            },
            {
              "id": "opt-B",
              "text": "Regularization is too high and model is underfitting"
            },
            {
              "id": "opt-C",
              "text": "Step size is too large"
            },
            {
              "id": "opt-D",
              "text": "Step size is too small"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-493ddb08d24339b7",
          "text": "Say the incidence of a disease D is about 5 cases per 100 people (i.e., P(D) = 0.05). Let Boolean random variable D mean a patient “has disease D” and let Boolean random variable TP stand for \"tests positive.\" Tests for disease D are known to be very accurate in the sense that the probability of testing positive when you have the disease is 0.99, and the probability of testing negative when you do not have the disease is 0.97. What is P(D | TP), the posterior probability that you have disease D when the test is positive?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.0495"
            },
            {
              "id": "opt-B",
              "text": "0.078"
            },
            {
              "id": "opt-C",
              "text": "0.635"
            },
            {
              "id": "opt-D",
              "text": "0.97"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-95d0f4b798571a39",
          "text": "Statement 1| Traditional machine learning results assume that the train and test sets are independent and identically distributed. Statement 2| In 2017, COCO models were usually pretrained on ImageNet.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-3cb61836450fb9a2",
          "text": "Statement 1| The values of the margins obtained by two different kernels K1(x, x0) and K2(x, x0) on the same training set do not tell us which classifier will perform better on the test set. Statement 2| The activation function of BERT is the GELU.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-2939c8d1b4bbbcef",
          "text": "Which of the following is a clustering algorithm in machine learning?",
          "options": [
            {
              "id": "opt-A",
              "text": "Expectation Maximization"
            },
            {
              "id": "opt-B",
              "text": "CART"
            },
            {
              "id": "opt-C",
              "text": "Gaussian Naïve Bayes"
            },
            {
              "id": "opt-D",
              "text": "Apriori"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-0ea9eb41a5061557",
          "text": "You've just finished training a decision tree for spam classification, and it is getting abnormally bad performance on both your training and test sets. You know that your implementation has no bugs, so what could be causing the problem?",
          "options": [
            {
              "id": "opt-A",
              "text": "Your decision trees are too shallow."
            },
            {
              "id": "opt-B",
              "text": "You need to increase the learning rate."
            },
            {
              "id": "opt-C",
              "text": "You are overfitting."
            },
            {
              "id": "opt-D",
              "text": "None of the above."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-75a7543a83e760be",
          "text": "K-fold cross-validation is",
          "options": [
            {
              "id": "opt-A",
              "text": "linear in K"
            },
            {
              "id": "opt-B",
              "text": "quadratic in K"
            },
            {
              "id": "opt-C",
              "text": "cubic in K"
            },
            {
              "id": "opt-D",
              "text": "exponential in K"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b7a6350a8fa2fa1f",
          "text": "Statement 1| Industrial-scale neural networks are normally trained on CPUs, not GPUs. Statement 2| The ResNet-50 model has over 1 billion parameters.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-886167173806852e",
          "text": "Given two Boolean random variables, A and B, where P(A) = 1/2, P(B) = 1/3, and P(A | ¬B) = 1/4, what is P(A | B)?",
          "options": [
            {
              "id": "opt-A",
              "text": "1/6"
            },
            {
              "id": "opt-B",
              "text": "1/4"
            },
            {
              "id": "opt-C",
              "text": "3/4"
            },
            {
              "id": "opt-D",
              "text": "1"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-697c3f6ba7b48717",
          "text": "Existential risks posed by AI are most commonly associated with which of the following professors?",
          "options": [
            {
              "id": "opt-A",
              "text": "Nando de Frietas"
            },
            {
              "id": "opt-B",
              "text": "Yann LeCun"
            },
            {
              "id": "opt-C",
              "text": "Stuart Russell"
            },
            {
              "id": "opt-D",
              "text": "Jitendra Malik"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l06",
      "title": "Machine Learning — Quiz 6",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-08add8ef339b19f6",
          "text": "Statement 1| Maximizing the likelihood of logistic regression model yields multiple local optimums. Statement 2| No classifier can do better than a naive Bayes classifier if the distribution of the data is known.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e7ee704c7f84a2c6",
          "text": "For Kernel Regression, which one of these structural assumptions is the one that most affects the trade-off between underfitting and overfitting:",
          "options": [
            {
              "id": "opt-A",
              "text": "Whether kernel function is Gaussian versus triangular versus box-shaped"
            },
            {
              "id": "opt-B",
              "text": "Whether we use Euclidian versus L1 versus L∞ metrics"
            },
            {
              "id": "opt-C",
              "text": "The kernel width"
            },
            {
              "id": "opt-D",
              "text": "The maximum height of the kernel function"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-60582486a2f5f4fe",
          "text": "Statement 1| The SVM learning algorithm is guaranteed to find the globally optimal hypothesis with respect to its object function. Statement 2| After being mapped into feature space Q through a radial basis kernel function, a Perceptron may be able to achieve better classification performance than in its original space (though we can’t guarantee this).",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-ac6422cc19033f71",
          "text": "For a Gaussian Bayes classifier, which one of these structural assumptions is the one that most affects the trade-off between underfitting and overfitting:",
          "options": [
            {
              "id": "opt-A",
              "text": "Whether we learn the class centers by Maximum Likelihood or Gradient Descent"
            },
            {
              "id": "opt-B",
              "text": "Whether we assume full class covariance matrices or diagonal class covariance matrices"
            },
            {
              "id": "opt-C",
              "text": "Whether we have equal class priors or priors estimated from the data."
            },
            {
              "id": "opt-D",
              "text": "Whether we allow classes to have different mean vectors or we force them to share the same mean vector"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-25b713162131875e",
          "text": "Statement 1| Overfitting is more likely when the set of training data is small. Statement 2| Overfitting is more likely when the hypothesis space is small.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-1f8f09f28d5f6c75",
          "text": "Statement 1| Besides EM, gradient descent can be used to perform inference or learning on Gaussian mixture model. Statement 2 | Assuming a fixed number of attributes, a Gaussian-based Bayes optimal classifier can be learned in time linear in the number of records in the dataset.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-6556c1fedcd1b552",
          "text": "Statement 1| In a Bayesian network, the inference results of the junction tree algorithm are the same as the inference results of variable elimination. Statement 2| If two random variable X and Y are conditionally independent given another random variable Z, then in the corresponding Bayesian network, the nodes for X and Y are d-separated given Z.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-67f5086d7fdfa3fa",
          "text": "Given a large dataset of medical records from patients suffering from heart disease, try to learn whether there might be different clusters of such patients for which we might tailor separate treatments. What kind of learning problem is this?",
          "options": [
            {
              "id": "opt-A",
              "text": "Supervised learning"
            },
            {
              "id": "opt-B",
              "text": "Unsupervised learning"
            },
            {
              "id": "opt-C",
              "text": "Both (a) and (b)"
            },
            {
              "id": "opt-D",
              "text": "Neither (a) nor (b)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-bc7731a2834abb7d",
          "text": "What would you do in PCA to get the same projection as SVD?",
          "options": [
            {
              "id": "opt-A",
              "text": "Transform data to zero mean"
            },
            {
              "id": "opt-B",
              "text": "Transform data to zero median"
            },
            {
              "id": "opt-C",
              "text": "Not possible"
            },
            {
              "id": "opt-D",
              "text": "None of these"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-839f7c9e36ef31a9",
          "text": "Statement 1| The training error of 1-nearest neighbor classifier is 0. Statement 2| As the number of data points grows to infinity, the MAP estimate approaches the MLE estimate for all possible priors. In other words, given enough data, the choice of prior is irrelevant.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-eb1e1c1b251b0d5d",
          "text": "When doing least-squares regression with regularisation (assuming that the optimisation can be done exactly), increasing the value of the regularisation parameter λ the testing error.",
          "options": [
            {
              "id": "opt-A",
              "text": "will never decrease the training error."
            },
            {
              "id": "opt-B",
              "text": "will never increase the training error."
            },
            {
              "id": "opt-C",
              "text": "will never decrease the testing error."
            },
            {
              "id": "opt-D",
              "text": "will never increase"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-656b9d5d3b8ce6e2",
          "text": "Which of the following best describes what discriminative approaches try to model? (w are the parameters in the model)",
          "options": [
            {
              "id": "opt-A",
              "text": "p(y|x, w)"
            },
            {
              "id": "opt-B",
              "text": "p(y, x)"
            },
            {
              "id": "opt-C",
              "text": "p(w|x, w)"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a3a20c5851a2d80d",
          "text": "Statement 1| CIFAR-10 classification performance for convolution neural networks can exceed 95%. Statement 2| Ensembles of neural networks do not improve classification accuracy since the representations they learn are highly correlated.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-65870dedb54bed49",
          "text": "Which of the following points would Bayesians and frequentists disagree on?",
          "options": [
            {
              "id": "opt-A",
              "text": "The use of a non-Gaussian noise model in probabilistic regression."
            },
            {
              "id": "opt-B",
              "text": "The use of probabilistic modelling for regression."
            },
            {
              "id": "opt-C",
              "text": "The use of prior distributions on the parameters in a probabilistic model."
            },
            {
              "id": "opt-D",
              "text": "The use of class priors in Gaussian Discriminant Analysis."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-6473c4bfd4bcc3f8",
          "text": "Statement 1| The BLEU metric uses precision, while the ROGUE metric uses recall. Statement 2| Hidden markov models were frequently used to model English sentences.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l07",
      "title": "Machine Learning — Quiz 7",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-e788a8ae67e702db",
          "text": "Statement 1| ImageNet has images of various resolutions. Statement 2| Caltech-101 has more images than ImageNet.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-3fac34ef82262647",
          "text": "Which of the following is more appropriate to do feature selection?",
          "options": [
            {
              "id": "opt-A",
              "text": "Ridge"
            },
            {
              "id": "opt-B",
              "text": "Lasso"
            },
            {
              "id": "opt-C",
              "text": "both (a) and (b)"
            },
            {
              "id": "opt-D",
              "text": "neither (a) nor (b)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-284756f784356f28",
          "text": "Suppose you are given an EM algorithm that finds maximum likelihood estimates for a model with latent variables. You are asked to modify the algorithm so that it finds MAP estimates instead. Which step or steps do you need to modify?",
          "options": [
            {
              "id": "opt-A",
              "text": "Expectation"
            },
            {
              "id": "opt-B",
              "text": "Maximization"
            },
            {
              "id": "opt-C",
              "text": "No modification necessary"
            },
            {
              "id": "opt-D",
              "text": "Both"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-b834c7208d3ff9d3",
          "text": "Statement 1| For any two variables x and y having joint distribution p(x, y), we always have H[x, y] ≥ H[x] + H[y] where H is entropy function. Statement 2| For some directed graphs, moralization decreases the number of edges present in the graph.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-fc530252e1315075",
          "text": "Which of the following is NOT supervised learning?",
          "options": [
            {
              "id": "opt-A",
              "text": "PCA"
            },
            {
              "id": "opt-B",
              "text": "Decision Tree"
            },
            {
              "id": "opt-C",
              "text": "Linear Regression"
            },
            {
              "id": "opt-D",
              "text": "Naive Bayesian"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-0332b02c66339969",
          "text": "Statement 1| A neural network's convergence depends on the learning rate. Statement 2| Dropout multiplies randomly chosen activation values by zero.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-7c58626c6db42f62",
          "text": "Which one of the following is equal to P(A, B, C) given Boolean random variables A, B and C, and no independence or conditional independence assumptions between any of them?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(A | B) * P(B | C) * P(C | A)"
            },
            {
              "id": "opt-B",
              "text": "P(C | A, B) * P(A) * P(B)"
            },
            {
              "id": "opt-C",
              "text": "P(A, B | C) * P(C)"
            },
            {
              "id": "opt-D",
              "text": "P(A | B, C) * P(B | A, C) * P(C | A, B)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-91509cb5709a05a9",
          "text": "Which of the following tasks can be best solved using Clustering.",
          "options": [
            {
              "id": "opt-A",
              "text": "Predicting the amount of rainfall based on various cues"
            },
            {
              "id": "opt-B",
              "text": "Detecting fraudulent credit card transactions"
            },
            {
              "id": "opt-C",
              "text": "Training a robot to solve a maze"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-be12134c713dd19c",
          "text": "After applying a regularization penalty in linear regression, you find that some of the coefficients of w are zeroed out. Which of the following penalties might have been used?",
          "options": [
            {
              "id": "opt-A",
              "text": "L0 norm"
            },
            {
              "id": "opt-B",
              "text": "L1 norm"
            },
            {
              "id": "opt-C",
              "text": "L2 norm"
            },
            {
              "id": "opt-D",
              "text": "either (a) or (b)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0baf3cb6c6d46b74",
          "text": "A and B are two events. If P(A, B) decreases while P(A) increases, which of the following is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(A|B) decreases"
            },
            {
              "id": "opt-B",
              "text": "P(B|A) decreases"
            },
            {
              "id": "opt-C",
              "text": "P(B) decreases"
            },
            {
              "id": "opt-D",
              "text": "All of above"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-0847e78f1e4d0340",
          "text": "Statement 1| When learning an HMM for a fixed set of observations, assume we do not know the true number of hidden states (which is often the case), we can always increase the training data likelihood by permitting more hidden states. Statement 2| Collaborative filtering is often a useful model for modeling users' movie preference.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-5a6fe4217d162247",
          "text": "You are training a linear regression model for a simple estimation task, and notice that the model is overfitting to the data. You decide to add in $\\ell_2$ regularization to penalize the weights. As you increase the $\\ell_2$ regularization coefficient, what will happen to the bias and variance of the model?",
          "options": [
            {
              "id": "opt-A",
              "text": "Bias increase ; Variance increase"
            },
            {
              "id": "opt-B",
              "text": "Bias increase ; Variance decrease"
            },
            {
              "id": "opt-C",
              "text": "Bias decrease ; Variance increase"
            },
            {
              "id": "opt-D",
              "text": "Bias decrease ; Variance decrease"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-8246254dc865f77d",
          "text": "Which PyTorch 1.8 command(s) produce $10\\times 5$ Gaussian matrix with each entry i.i.d. sampled from $\\mathcal{N}(\\mu=5,\\sigma^2=16)$ and a $10\\times 10$ uniform matrix with each entry i.i.d. sampled from $U[-1,1)$?",
          "options": [
            {
              "id": "opt-A",
              "text": "\\texttt{5 + torch.randn(10,5) * 16} ; \\texttt{torch.rand(10,10,low=-1,high=1)}"
            },
            {
              "id": "opt-B",
              "text": "\\texttt{5 + torch.randn(10,5) * 16} ; \\texttt{(torch.rand(10,10) - 0.5) / 0.5}"
            },
            {
              "id": "opt-C",
              "text": "\\texttt{5 + torch.randn(10,5) * 4} ; \\texttt{2 * torch.rand(10,10) - 1}"
            },
            {
              "id": "opt-D",
              "text": "\\texttt{torch.normal(torch.ones(10,5)*5,torch.ones(5,5)*16)} ; \\texttt{2 * torch.rand(10,10) - 1}"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-174b2777bf5328db",
          "text": "Statement 1| The ReLU's gradient is zero for $x<0$, and the sigmoid gradient $\\sigma(x)(1-\\sigma(x))\\le \\frac{1}{4}$ for all $x$. Statement 2| The sigmoid has a continuous gradient and the ReLU has a discontinuous gradient.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c5ebad27d9e36589",
          "text": "Which is true about Batch Normalization?",
          "options": [
            {
              "id": "opt-A",
              "text": "After applying batch normalization, the layer’s activations will follow a standard Gaussian distribution."
            },
            {
              "id": "opt-B",
              "text": "The bias parameter of affine layers becomes redundant if a batch normalization layer follows immediately afterward."
            },
            {
              "id": "opt-C",
              "text": "The standard weight initialization must be changed when using Batch Normalization."
            },
            {
              "id": "opt-D",
              "text": "Batch Normalization is equivalent to Layer Normalization for convolutional neural networks."
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l08",
      "title": "Machine Learning — Quiz 8",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-a71946cf500a5fe2",
          "text": "Suppose we have the following objective function: $\\argmin_{w} \\frac{1}{2} \\norm{Xw-y}^2_2 + \\frac{1}{2}\\gamma \\norm{w}^2_2$ What is the gradient of $\\frac{1}{2} \\norm{Xw-y}^2_2 + \\frac{1}{2}\\lambda \\norm{w}^2_2$ with respect to $w$?",
          "options": [
            {
              "id": "opt-A",
              "text": "$\\nabla_w f(w) = (X^\\top X + \\lambda I)w - X^\\top y + \\lambda w$"
            },
            {
              "id": "opt-B",
              "text": "$\\nabla_w f(w) = X^\\top X w - X^\\top y + \\lambda$"
            },
            {
              "id": "opt-C",
              "text": "$\\nabla_w f(w) = X^\\top X w - X^\\top y + \\lambda w$"
            },
            {
              "id": "opt-D",
              "text": "$\\nabla_w f(w) = X^\\top X w - X^\\top y + (\\lambda+1) w$"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-0b28d540eee6f03b",
          "text": "Which of the following is true of a convolution kernel?",
          "options": [
            {
              "id": "opt-A",
              "text": "Convolving an image with $\\begin{bmatrix}1 & 0 & 0\\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$ would not change the image"
            },
            {
              "id": "opt-B",
              "text": "Convolving an image with $\\begin{bmatrix}0 & 0 & 0\\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$ would not change the image"
            },
            {
              "id": "opt-C",
              "text": "Convolving an image with $\\begin{bmatrix}1 & 1 & 1\\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{bmatrix}$ would not change the image"
            },
            {
              "id": "opt-D",
              "text": "Convolving an image with $\\begin{bmatrix}0 & 0 & 0\\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$ would not change the image"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-90b9652dd66005e3",
          "text": "Which of the following is false?",
          "options": [
            {
              "id": "opt-A",
              "text": "Semantic segmentation models predict the class of each pixel, while multiclass image classifiers predict the class of entire image."
            },
            {
              "id": "opt-B",
              "text": "A bounding box with an IoU (intersection over union) equal to $96\\%$ would likely be considered at true positive."
            },
            {
              "id": "opt-C",
              "text": "When a predicted bounding box does not correspond to any object in the scene, it is considered a false positive."
            },
            {
              "id": "opt-D",
              "text": "A bounding box with an IoU (intersection over union) equal to $3\\%$ would likely be considered at false negative."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a1b79f82a5aa1621",
          "text": "We are training fully connected network with two hidden layers to predict housing prices. Inputs are $100$-dimensional, and have several features such as the number of square feet, the median family income, etc. The first hidden layer has $1000$ activations. The second hidden layer has $10$ activations. The output is a scalar representing the house price. Assuming a vanilla network with affine transformations and with no batch normalization and no learnable parameters in the activation function, how many parameters does this network have?",
          "options": [
            {
              "id": "opt-A",
              "text": "111021"
            },
            {
              "id": "opt-B",
              "text": "110010"
            },
            {
              "id": "opt-C",
              "text": "111110"
            },
            {
              "id": "opt-D",
              "text": "110011"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-7ea09af103d1d864",
          "text": "Statement 1| The derivative of the sigmoid $\\sigma(x)=(1+e^{-x})^{-1}$ with respect to $x$ is equal to $\\text{Var}(B)$ where $B\\sim \\text{Bern}(\\sigma(x))$ is a Bernoulli random variable. Statement 2| Setting the bias parameters in each layer of neural network to 0 changes the bias-variance trade-off such that the model's variance increases and the model's bias decreases",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-16ea041f53a958eb",
          "text": "Which of the following guidelines is applicable to initialization of the weight vector in a fully connected neural network.",
          "options": [
            {
              "id": "opt-A",
              "text": "Should not set it to zero since otherwise it will cause overfitting"
            },
            {
              "id": "opt-B",
              "text": "Should not set it to zero since otherwise (stochastic) gradient descent will explore a very small space"
            },
            {
              "id": "opt-C",
              "text": "Should set it to zero since otherwise it causes a bias"
            },
            {
              "id": "opt-D",
              "text": "Should set it to zero in order to preserve symmetry across all neurons"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-a374b1491e03aee3",
          "text": "Which of the following statements about Naive Bayes is incorrect?",
          "options": [
            {
              "id": "opt-A",
              "text": "Attributes are equally important."
            },
            {
              "id": "opt-B",
              "text": "Attributes are statistically dependent of one another given the class value."
            },
            {
              "id": "opt-C",
              "text": "Attributes are statistically independent of one another given the class value."
            },
            {
              "id": "opt-D",
              "text": "Attributes can be nominal or numeric"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-bb8b80aeec5b3c52",
          "text": "Statement 1| The L2 penalty in a ridge regression is equivalent to a Laplace prior on the weights. Statement 2| There is at least one set of 4 points in R^3 that can be shattered by the hypothesis set of all 2D planes in R^3.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ebb90a0562975f06",
          "text": "For the one-parameter model, mean-Square error (MSE) is defined as follows: 1/(2N) \\sum (y_n − β_0)^2 . We have a half term in the front because,",
          "options": [
            {
              "id": "opt-A",
              "text": "scaling MSE by half makes gradient descent converge faster."
            },
            {
              "id": "opt-B",
              "text": "presence of half makes it easy to do grid search."
            },
            {
              "id": "opt-C",
              "text": "it does not matter whether half is there or not."
            },
            {
              "id": "opt-D",
              "text": "none of the above"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-8df8a7fc597eeaf1",
          "text": "In Yann LeCun's cake, the cherry on top is",
          "options": [
            {
              "id": "opt-A",
              "text": "reinforcement learning"
            },
            {
              "id": "opt-B",
              "text": "self-supervised learning"
            },
            {
              "id": "opt-C",
              "text": "unsupervised learning"
            },
            {
              "id": "opt-D",
              "text": "supervised learning"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a76de5e3a8fd6541",
          "text": "What is the dimensionality of the null space of the following matrix? A = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]",
          "options": [
            {
              "id": "opt-A",
              "text": "0"
            },
            {
              "id": "opt-B",
              "text": "1"
            },
            {
              "id": "opt-C",
              "text": "2"
            },
            {
              "id": "opt-D",
              "text": "3"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-51fe9daf584932c7",
          "text": "The number of test examples needed to get statistically significant results should be _",
          "options": [
            {
              "id": "opt-A",
              "text": "Larger if the error rate is larger."
            },
            {
              "id": "opt-B",
              "text": "Larger if the error rate is smaller."
            },
            {
              "id": "opt-C",
              "text": "Smaller if the error rate is smaller."
            },
            {
              "id": "opt-D",
              "text": "It does not matter."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-eeb20f0c32ac7f22",
          "text": "Compared to the variance of the Maximum Likelihood Estimate (MLE), the variance of the Maximum A Posteriori (MAP) estimate is ________",
          "options": [
            {
              "id": "opt-A",
              "text": "higher"
            },
            {
              "id": "opt-B",
              "text": "same"
            },
            {
              "id": "opt-C",
              "text": "lower"
            },
            {
              "id": "opt-D",
              "text": "it could be any of the above"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-9fd6061d0d17570c",
          "text": "Which of the following best describes the joint probability distribution P(X, Y, Z) for the given Bayes net. X <- Y -> Z?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(X, Y, Z) = P(Y) * P(X|Y) * P(Z|Y)"
            },
            {
              "id": "opt-B",
              "text": "P(X, Y, Z) = P(X) * P(Y|X) * P(Z|Y)"
            },
            {
              "id": "opt-C",
              "text": "P(X, Y, Z) = P(Z) * P(X|Z) * P(Y|Z)"
            },
            {
              "id": "opt-D",
              "text": "P(X, Y, Z) = P(X) * P(Y) * P(Z)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-09bd85c957fad84b",
          "text": "You observe the following while fitting a linear regression to the data: As you increase the amount of training data, the test error decreases and the training error increases. The train error is quite low (almost what you expect it to), while the test error is much higher than the train error. What do you think is the main reason behind this behavior. Choose the most probable option.",
          "options": [
            {
              "id": "opt-A",
              "text": "High variance"
            },
            {
              "id": "opt-B",
              "text": "High model bias"
            },
            {
              "id": "opt-C",
              "text": "High estimation bias"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-machine-learning-u1-external-l09",
      "title": "Machine Learning — Quiz 9",
      "type": "quiz",
      "duration": 5,
      "questions": [
        {
          "id": "mmlu-4663682b7f8439d9",
          "text": "Statement 1| If there exists a set of k instances that cannot be shattered by H, then VC(H) < k. Statement 2| If two hypothesis classes H1 and H2 satisfy H1 ⊆ H2, then VC(H1) ≤ VC(H2).",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    }
  ],
  "tags": [
    "external-ai",
    "curriculum-import",
    "masters",
    "machine-learning",
    "mmlu"
  ],
  "minAge": 21,
  "maxAge": 99,
  "version": "external-1.0",
  "difficultyBand": "advanced",
  "gradeBand": "graduate",
  "learningObjectives": [
    "Master key concepts in machine learning",
    "Apply analytical reasoning to machine learning problems",
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
      "questions": 121,
      "flashcards": 0,
      "chunks": 0
    },
    "importedAt": "2026-03-03T05:42:54.860Z",
    "totalLessons": 9,
    "overflow": 0
  },
  "metadata": {
    "generatedBy": "ingest-universal-curriculum.mjs",
    "importDate": "2026-03-03T05:42:54.860Z"
  }
};
