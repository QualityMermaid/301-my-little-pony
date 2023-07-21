import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
    return (
        <header>
            <h1>My Little Website</h1>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/quiz"}>Quiz</Link></li>
                </ul>
            </nav>
        </header>
    )
}
