import React from 'react'

const StartPage = ({onStart}) => {
  return (
    <div className="text-center bg-success-subtle p-3 rounded-3">
          <h3 className="mb-4">Welcome To React Quiz App</h3>
          <button className="btn btn-primary px-5" onClick={onStart}>Start Test</button>
        </div>
  )
}

export default StartPage
