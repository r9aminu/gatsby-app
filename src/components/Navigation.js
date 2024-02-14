import React from 'react'
import { Link } from 'gatsby'

// Navigation component
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">My Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
