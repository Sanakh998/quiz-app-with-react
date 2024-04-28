import React from "react";
import { quiz } from "../data/quiz";

const Result = ({ result, restartTest }) => {
  let { totalQuestions, scorePerQuestion } = quiz;
  return (
    <div
      className={
        result.correctAnswers > result.wrongAnswers
          ? "bg-success text-center rounded-3 mb-2 mb-sm-3"
          : "bg-danger text-center rounded-3 mb-2 mb-sm-3"
      }
    >
      <h2 className="bg-warning text-dark rounded-top-3 py-2">Result</h2>
      {result.correctAnswers >= result.wrongAnswers ? (
        <div className="text-light">
          <p className="m-0 my-2">Congratulations! You have Passed Test.</p>
          <p className="m-0 my-2">
            You Scored {result.score} from {totalQuestions * scorePerQuestion}
          </p>
        </div>
      ) : (
        <div className="text-light">
          {" "}
          <p className="m-0 my-2">Sorry You are failed in Test.</p>
          <p className="m-0 my-2">
            You Scored {result.score} from {totalQuestions * scorePerQuestion}
          </p>
        </div>
      )}
      <button className="btn btn-light my-2 px-5 shadow-sm-inset" onClick={restartTest}>
        Start Test Again
      </button>
    </div>
  );
};

export default Result;
