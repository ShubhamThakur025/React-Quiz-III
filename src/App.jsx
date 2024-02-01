import './App.css'
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeComponent />}></Route>
        <Route path='/QuizComponent' element={<QuizComponent />}></Route>
        <Route path='/ResultComponent' element={<ResultComponent />}></Route>
      </Routes>
    </div>
  )
}

export default App
