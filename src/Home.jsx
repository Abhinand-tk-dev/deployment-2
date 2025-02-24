import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <h1>This is home</h1>
    <Link to="/login">About</Link>
    </>
  )
}

export default Home