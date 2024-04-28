import React from "react";

const FinishBtn = (props) => {
  return (
    <button
      className="btn btn-primary mt-3 px-5 shadow-lg"
      onClick={props.finishTest}
      disabled={props.selectedAnswerIndex === null}
    >
      Finish
    </button>
  );
};

export default FinishBtn;
