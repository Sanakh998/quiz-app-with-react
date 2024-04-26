export const quiz = {
  topic: "JavaScript",
  description: "Test your knowledge of JavaScript fundamentals with this quiz!",
  level: "Beginner",
  totalQuestions: 5,
  scorePerQuestion: 5,
  type: "MCQs",
  questions: [
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["number", "boolean", "float", "undefined"],
      correctAnswer: "float",
    },
    {
      question: "What does NaN stand for?",
      options: ["Not a Name", "Not a Null", "Not a Number", "Not a Node"],
      correctAnswer: "Not a Number",
    },
    {
      question:
        "Which method is used to add a new item to the end of an array in JavaScript?",
      options: ["push()", "pop()", "append()", "addToEnd()"],
      correctAnswer: "push()",
    },
    {
      question:
        "What will the following code output? console.log(0.1 + 0.2 === 0.3)",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: "true",
    },
    {
      question:
        "Which operator is used for strict equality comparison in JavaScript?",
      options: ["==", "===", "!=", "!=="],
      correctAnswer: "===",
    }
  ],
};
