// src/pages/projects.js

import React from 'react'
import { Link } from 'gatsby'

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Welcome to my projects page! Here are some of my recent projects:</p>

      {/* Project 1 */}
      <div>
        <h2>Project 1: Example Project</h2>
        <p>This is a brief description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna non odio eleifend vestibulum. Sed et nulla ac urna convallis auctor.</p>
        {/* You can add images, links, or any additional information about the project */}
      </div>

      {/* Project 2 */}
      <div>
        <h2>Project 2: Another Example Project</h2>
        <p>This is a brief description of Project 2. Duis sed velit aliquam, lobortis eros vel, interdum sem. Vivamus efficitur mi nec ex fermentum, nec aliquam enim tristique. Integer malesuada, felis in fermentum viverra, nisi libero auctor neque, sit amet accumsan arcu ligula quis purus.</p>
        {/* You can add images, links, or any additional information about the project */}
      </div>

      {/* Add navigation links */}
      <div>
        <Link to="/">Home</Link> {/* Link to home page */}
        <Link to="/about">About</Link> {/* Link to about page */}
        {/* Add more navigation links as needed */}
      </div>
    </div>
  )
}

export default ProjectsPage
