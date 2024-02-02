import React, { Component, useState } from 'react'
import questions from '../questions.json'
import ResultComponent from './ResultComponent'
import HomeComponent from './HomeComponent'
import { Link } from 'react-router-dom'

function QuizComponent() {
    const [questionNo, changeQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [attempted, setAttempted] = useState(0)
    localStorage.setItem('score', score)
    localStorage.setItem('attempted', attempted)

    const checkAns = (ans) => {
        if (questions[questionNo].answer === ans) {
            window.alert("Right Answer!")
            setScore(score + 1)
            localStorage.setItem('score', score)

        }
        else {
            window.alert("Wrong Answer!")
        }
        setAttempted(attempted + 1)
        if (attempted == 4) { window.alert("Press Finish to end the quiz!") }
        localStorage.setItem('attempted', attempted)
        questionNo < questions.length - 1 && changeQuestion(questionNo + 1)

    }

    const handleQuit = () => {
        let isConfirmed = confirm("You really want to quit?")
        if (isConfirmed) location.href = '/'
    }
    const currentQuestion = questions[questionNo]

    return (
        <div className="quiz-comp">
            <div className='Question-Box'>
                <h1 className="text-center status">Question</h1>
                <h5 className="status">{`${questionNo + 1} of 5`}</h5>
                <h3 className="text-center status">{questions[questionNo].question}</h3>

                <div className="options-grid">
                    <div className="option text-center" onClick={() => checkAns(currentQuestion.optionA)}>{currentQuestion.optionA}</div>
                    <div className="option text-center" onClick={() => checkAns(currentQuestion.optionB)}>{currentQuestion.optionB}</div>
                    <div className="option text-center" onClick={() => checkAns(currentQuestion.optionC)}>{currentQuestion.optionC}</div>
                    <div className="option text-center" onClick={() => checkAns(currentQuestion.optionD)}>{currentQuestion.optionD}</div>
                </div>
                <div className="btns">
                    <button id='prev-btn' disabled={questionNo === 0} onClick={() => changeQuestion(questionNo - 1)}>Previous</button>
                    <button id='next-btn' disabled={questionNo === 4} onClick={() => changeQuestion(questionNo + 1)}>Next</button>
                    <button id='quit-btn' onClick={handleQuit}>Quit</button>
                    <Link to="/ResultComponent">
                        <button id="finish-btn">Finish</button>
                    </Link>


                </div>

            </div>

        </div>
    )
}

export default QuizComponent
