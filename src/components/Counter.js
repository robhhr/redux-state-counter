import React from 'react'
import {connect} from 'react-redux'
import './styles.css'

const initialState = {
  count: 0,
}

const increase = {
  type: 'INCREASE',
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREASE') {
    return {
      count: state.count + 1,
    }
  }

  return state
}

const Counter = ({count, increment}) => {
  return (
    <>
      <div className="card">
        <h1 className="title">State counter</h1>
      </div>
      <p className="paragraph">Counter widget made with React and Redux</p>
      <div className="number-container">
        <p>{count}</p>
        <div className="buttons">
          {/* decrease number */}
          <button>-</button>
          {/* reset counter */}
          <button>RESET</button>
          {/* increase number */}
          <button>+</button>
        </div>
      </div>
    </>
  )
}

const currentState = state => {
  return state
}

const propsToDispatch = dispatch => {
  return {
    increment() {
      dispatch(increase())
    },
  }
}

const CounterContainer = connect(currentState, propsToDispatch)(Counter)

export {Counter, CounterContainer}
export default reducer
