import React from "react";
import NextBtn from "./Buttons/NextBtn";
import FinishBtn from "./Buttons/FinishBtn";
import Options from "./Options";
import Questions from "./Questions";

const Main = (props) => {
  return (
    <div className="p-3 bg-dark-subtle rounded-3">
      <Questions
        activeQuestion={props.activeQuestion}
        question={props.question}
      />
      <Options
        options={props.options}
        selectedAnswer={props.selectedAnswer}
        selectedAnswerIndex={props.selectedAnswerIndex}
        checkAnswer={props.checkAnswer}
        correctAnswer={props.correctAnswer}
      />
      <div className="text-center">
        {props.activeQuestion === props.questions.length - 1 ? (
          <FinishBtn
            finishTest={props.finishTest}
            selectedAnswerIndex={props.selectedAnswerIndex}
          />
        ) : (
          <NextBtn
            handleNext={props.handleNext}
            selectedAnswerIndex={props.selectedAnswerIndex}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
