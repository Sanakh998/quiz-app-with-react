import React from "react";

const Result = (props) => {
  return (
    <div
      className={
        props.result.correctAnswers > props.result.wrongAnswers
          ? "bg-success text-center rounded-3"
          : "bg-danger text-center rounded-3"
      }
    >
      <h2 className="bg-warning text-dark rounded-top-3 py-2">Result</h2>
      {props.result.correctAnswers >= props.result.wrongAnswers ? (
        <div className="text-light">
          <p className="m-0 my-2">Congratulations! You have Passed Test.</p>
          <p className="m-0 my-2">
            You Scored {props.result.score} from {props.totalQuestions * props.scorePerQuestion}
          </p>
        </div>
      ) : (
        <div className="text-light">
          {" "}
          <p className="m-0 my-2">Sorry You are failed in Test.</p>
          <p className="m-0 my-2">
            You Scored {props.result.score} from {props.totalQuestions * props.scorePerQuestion}
          </p>
        </div>
      )}
      <button className="btn btn-light my-2 px-5" onClick={props.restartTest}>
        Start Test Again
      </button>
    </div>
  );
};

export default Result;
