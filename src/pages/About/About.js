import React from 'react'
import './About.css'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
        <Helmet>
            <title>My Little Website About Page</title>
            <meta name='description' content='This is the about page for my little website'></meta>
        </Helmet>
        <main>
            <h2>Welcome to Pony land!</h2>
            <h3> Learn about the Mane6, their Friends and more!</h3>
            <p>
                stuff
            </p>
        </main>
    </>
  )
}
