import React, { Component, useState } from 'react'
import questions from '../questions.json'
import ResultComponent from './ResultComponent'
import HomeComponent from './HomeComponent'
import { Link } from 'react-router-dom'
// export default class QuizComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             questionNo: 0,
//             score: 0,
//             attempted: 0
//         }
//     }
//     // to handle the accuracy and question numbers


//     //to move to the next question
//     moveToNext = () => {
//         if (this.state.questionNo < questions.length - 1) {
//             this.setState(prevState => ({
//                 questionNo: prevState.questionNo + 1
//             }))
//         }
//         else {
//             this.props.handleClick(this.state.score, this.state.attempted)
//         }
//     }

//     //to move back to previous question
//     moveToPrev = () => {
//         if (this.state.questionNo < questions.length - 1) {
//             this.setState(prevState => ({
//                 questionNo: prevState.questionNo - 1,
//                 attempted: prevState.attempted - 1
//             }))
//         }
//     }

//     //to quit the game
//     checkOut = () =>{
//         let quit = window.confirm("Are you sure you want to quit ?")
//         if(quit){this.props.handleClick(this.state.score, this.state.attempted)}
//         else{return}
//     }
//     render() {
//         return (

//         )s
//     }
// }


function QuizComponent() {
    const [questionNo, changeQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [attempted, setAttempted] = useState(0)

    const checkAns = (ans) => {
        if (questions[questionNo].answer === ans) {
            setScore(score + 1)
            setAttempted(attempted + 1)
            localStorage.setItem('score', score)
            localStorage.setItem('attempted', attempted)
        }
        questionNo < questions.length - 1 && changeQuestion(questionNo + 1)

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
                    <button id='next-btn' onClick={() => changeQuestion(questionNo + 1)}>Next</button>
                    <Link to="/">
                        <button id='quit-btn'>Quit</button>
                    </Link>
                    <Link to="/ResultComponent">
                        <button id="quit-btn">Finish</button>
                    </Link>


                </div>

            </div>

        </div>
    )
}

export default QuizComponent
