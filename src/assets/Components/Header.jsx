import React from "react";

const Header = (props) => {
  let {topic, level, totalQuestions, scorePerQuestion} = props;
  return (
    <>
      <h1 className="bg-dark text-light text-center rounded-3 p-2 my-3">
        Quiz App
      </h1>
      <div className="mb-3 bg-info-subtle rounded-3">
        <div className="row row-cols-2 p-2">
          <div className="col">
            <p className="my-1">Topic: {topic}</p>
          </div>
          <div className="col">
            <p className="my-1">Level: {level}</p>
          </div>
          <div className="col">
            <p className="my-1">Total Questions: {totalQuestions}</p>
          </div>
          <div className="col">
            <p className="my-1">Score Per Question: {scorePerQuestion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
