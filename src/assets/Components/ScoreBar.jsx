import React from "react";

const ScoreBar = (props) => {
  return (
    <div className="mb-3 rounded-3 bg-warning-subtle">
      <div className="row row-cols-3 p-2">
        <div className="col">
          <p className="my-1">Wrong: {props.result.wrongAnswers}</p>
        </div>
        <div className="col">
          <p className="my-1">Correct: {props.result.correctAnswers}</p>
        </div>
        <div className="col">
          <p className="my-1">Score: {props.result.score}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;
