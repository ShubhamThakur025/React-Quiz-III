import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import QuizComponent from './QuizComponent'

export default function ResultComponent() {
    const score = localStorage.getItem('score')
    const attempted = localStorage.getItem('attempted')
    const remarks = (percent) => {
        switch (true) {
            case percent <= 30:
                return "You Need Practice!"
            case percent <= 60:
                return "You did good!"
            case percent <= 90:
                return "Almost there!"
            case percent > 90:
                return "Perfecto!"
        }
    }
    const percentage = (score / 5) * 100
    if (attempted < 0) { attempted = 0 }
    return (
        <div>
            <div className='result-card'>
                <h1 className='text-center title-prime' style={{ color: "green" }}>Result</h1>
                <div className="result">

                    <div className="status">
                        <h3 className="text-center top-heading">{remarks(percentage)}</h3>
                        <h1 className='text-center' style={{ color: "blue" }}>{`Your score is ${percentage}%`}</h1>

                        <table id='stats-table'>
                            <tbody>
                                <tr>
                                    <td>Total number of questions</td>
                                    <td className='text-right'>5</td>
                                </tr>
                                <tr>
                                    <td>Number of attempted questions</td>
                                    <td className='text-right'>{attempted}</td>
                                </tr>
                                <tr>
                                    <td>Number of corrected questions</td>
                                    <td className='text-right'>{score}</td>
                                </tr>

                                <tr>
                                    <td>Number of wrong questions</td>
                                    <td className='text-right'>{attempted - score}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="result-button">
                    <Link to="/QuizComponent">
                        <button id="play-again-btn">Play Again</button>
                    </Link>
                    <Link to="/">
                        <button id="backto-home-btn">Back to Home</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}


