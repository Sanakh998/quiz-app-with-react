import React from "react";

const ScoreBar = (props) => {
  return (
    <div className="mb-2 mb-sm-3 rounded-3 bg-warning-subtle">
      <div className="row row-cols-3 p-2 text-center">
        <div className="col">
          <p className="my-0 my-sm-1 lh-sm-1.2">Wrong: {props.result.wrongAnswers}</p>
        </div>
        <div className="col">
          <p className="my-0 my-sm-1 lh-sm-1.2">Correct: {props.result.correctAnswers}</p>
        </div>
        <div className="col">
          <p className="my-0 my-sm-1 lh-sm-1.2">Score: {props.result.score}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;
