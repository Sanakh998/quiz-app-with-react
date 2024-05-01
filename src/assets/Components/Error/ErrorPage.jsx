import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='container text-center bg-danger p-5 rounded-3 text-light'>
      <h2 className='fw-bold'>Oops!</h2>
      <h5 className='my-3'>You are Going to Wrong Way</h5>
      <Link to={"/"} className='btn btn-primary'>Go to Start Page</Link>
    </div>
  )
}

export default ErrorPage
