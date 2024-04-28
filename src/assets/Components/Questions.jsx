import React from "react";

const Questions = ({activeQuestion, question}) => {
  return (
    <p className="ps-2 fw-bold" >
      {activeQuestion + 1}. {question}
    </p>
  );
};

export default Questions;
