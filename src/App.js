import React from 'react'
import Card from './components/Card'
import Number from './components/Number/Number'
import './components/styles.css'

const App = () => {
  return (
    <>
      <Card />
      <p className="paragraph">Counter widget made with React and Redux</p>
      <Number />
    </>
  )
}

export default App
