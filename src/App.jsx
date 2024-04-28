import { useState } from "react";
import "./App.css";
import { quiz } from "../src/assets/data/quiz";
import Header from "./assets/Components/Header";
import ScoreBar from "./assets/Components/ScoreBar";
import Main from "./assets/Components/Main";
import Result from "./assets/Components/Result";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, options, correctAnswer } = questions[activeQuestion];

  const checkAnswer = (ans, index) => {
    setSelectedAnswerIndex(index);
    if (ans === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const updateResult = () => {
    setResult((prev) => {
      return selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          };
    });
  };

  const handleNext = () => {
    setSelectedAnswerIndex(null);
    setActiveQuestion((prev) => prev + 1);
    updateResult();
  };

  const finishTest = () => {
    setIsCompleted(true);
    updateResult();
  };

  const restartTest = () => {
    setActiveQuestion(0);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    }),
      setIsCompleted(false);
    setSelectedAnswerIndex(null);
  };

  return (
    <div className="container d-flex flex-column rounded-3">
      <Header />
      <ScoreBar result={result} />
      {isCompleted ? (
        <Result result={result} restartTest={restartTest} />
      ) : (
        <Main
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          selectedAnswerIndex={selectedAnswerIndex}
          options={options}
          question={question}
          questions={questions}
          activeQuestion={activeQuestion}
          finishTest={finishTest}
          handleNext={handleNext}
          checkAnswer={checkAnswer}
        />
      )}
    </div>
  );
}

export default App;
