import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizComponent from './QuizComponent';

export default function HomeComponent() {
  return (
    <div>
      <div className='home'>
        <h2 className="title">Quiz App</h2>
        <Link to="/QuizComponent">
          <button id="play-btn">Play Quiz</button>
        </Link>
      </div>
    </div>
  )
}


