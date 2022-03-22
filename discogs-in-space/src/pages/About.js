import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-lime-100 ">
      <img className="h-64 m-auto pt-6" src="https://i.imgur.com/zgogwSF.jpg" />
      <p className="max-w-md text-center m-auto mt-4">
        Crate Dig is a simple app that repackages the Discogs search function in
        a new user interface, built as a personal project to practice with
        React.js, 3rd party API integration, and Tailwind.css. The GitHub repo
        for the project can be found HERE.
      </p>
    </div>
  )
}

export default About
