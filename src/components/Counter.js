import React from 'react'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import './styles.css'

const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREASE') {
    return {
      count: state.count + 1,
    }
  }

  return state
}

const Counter = () => {
  return (
    <div className="number-container">
      <p></p>
      <div className="buttons">
        {/* decrease number */}
        <button>-</button>
        {/* reset counter */}
        <button>RESET</button>
        {/* increase number */}
        <button>+</button>
      </div>
    </div>
  )
}

export {Counter}
