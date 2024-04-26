import React from "react";

const NextBtn = (props) => {
  return (
    <button
      className="btn btn-primary mt-3 px-5"
      onClick={props.handleNext}
      disabled={props.selectedAnswerIndex === null}
    >
      Next
    </button>
  );
};

export default NextBtn;
