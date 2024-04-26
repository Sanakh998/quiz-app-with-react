import React from "react";

const Questions = ({activeQuestion, question}) => {
  return (
    <h5 className="ps-2">
      {activeQuestion + 1}. {question}
    </h5>
  );
};

export default Questions;
