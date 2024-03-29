import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Dead End.</h1>
        <Link to='/' className='btn'>Back Home</Link>
      </div>
    </section>
  )
}

export default Error
