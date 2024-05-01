import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className="text-center bg-success-subtle p-3 rounded-3">
          <h3 className="mb-4">Welcome To React Quiz App</h3>
          <Link to={"/quizApp"} className="btn btn-primary px-5">Start Test</Link>
        </div>
  )
}

export default StartPage
