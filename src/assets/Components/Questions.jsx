import React from "react";

const Questions = ({activeQuestion, question}) => {
  return (
    <p className="ps-2" style={{fontSize: "18px", fontWeight: 600}}>
      {activeQuestion + 1}. {question}
    </p>
  );
};

export default Questions;
