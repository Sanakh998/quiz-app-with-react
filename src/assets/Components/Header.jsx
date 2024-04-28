import React from "react";
import { quiz } from "../data/quiz";

const Header = () => {
  let {topic, level, totalQuestions, scorePerQuestion} = quiz;
  return (
    <>
      <h1 className="bg-dark text-light text-center rounded-3 p-2 my-2 my-sm-3 shadow">
        Quiz App
      </h1>
      <div className="mb-2 mb-sm-3 bg-info-subtle rounded-3 shadow">
        <div className="row row-cols-1 p-2 text-center row-cols-sm-2">
          <div className="col">
            <p className="my-0 my-sm-1 lh-1.2">Topic: {topic}</p>
          </div>
          <div className="col">
            <p className="my-0 my-sm-1 lh-1.2">Level: {level}</p>
          </div>
          <div className="col">
            <p className="my-0 my-sm-1 lh-1.2">Total Questions: {totalQuestions}</p>
          </div>
          <div className="col">
            <p className="my-0 my-sm-1 lh-1.2">Score Per Question: {scorePerQuestion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
