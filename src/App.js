import React from 'react'
import {Counter} from './components'
import './components/styles.css'

const App = () => {
  return (
    <>
      <div className="card">
        <h1 className="title">State counter</h1>
      </div>
      <p className="paragraph">Counter widget made with React and Redux</p>
      <Counter />
    </>
  )
}

export default App
