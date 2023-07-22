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
        <main className='about'>
            <h2>Welcome to Pony land!</h2>
            <h3> Learn about My Little Pony Types and the Mane6.</h3>
            <p>
                Home page will take you though the main and some additional types on Ponies and their Friends.
            </p>
            <p>There is also more details about the Mane6.</p>
            <p>After you can click on the Quiz page where you can answer a few questions about MLP and the Mane6.</p>
        </main>
    </>
  )
}
