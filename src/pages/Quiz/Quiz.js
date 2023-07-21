import React from 'react'
import './Quiz.css'
import { Helmet } from 'react-helmet-async'

export default function Quiz() {
    return (
        <>
            <Helmet>
                <title>My Little Website Quiz Page</title>
                <meta name='description' content='This is the quiz page for my little website'></meta>
            </Helmet>
            <main>
                <h2>Quiz</h2>
                <p>This will be a quiz page</p>
                </main>
        </>
    )
}
