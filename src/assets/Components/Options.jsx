import React from "react";
import './Options.css'

const Options = ({options, selectedAnswer, selectedAnswerIndex, correctAnswer, checkAnswer}) => {
  return (
    <div className="list-group">
      {options.map((option, index) => (
        <button
          key={index}
          className={
            (selectedAnswer && selectedAnswerIndex === index) ||
            (option === correctAnswer && selectedAnswerIndex !== null)
              ? "list-group-item list-group-item-action list-group-item-success"
              : selectedAnswer === false && selectedAnswerIndex === index
              ? "list-group-item list-group-item-action list-group-item-danger"
              : "list-group-item list-group-item-action"
          }
          onClick={() => {
            checkAnswer(option, index);
          }}
          disabled={selectedAnswerIndex !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
