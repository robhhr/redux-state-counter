import React from 'react'
import {connect} from 'react-redux'
import './styles.css'
import {bindActionCreators} from 'redux'

const initialState = {
  count: 0,
}

const increase = () => ({
  type: 'INCREASE',
})

const decrease = () => ({
  type: 'DECREASE',
})

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREASE') {
    return {
      count: state.count + 1,
    }
  } else if (action.type === 'DECREASE') {
    return {
      count: state.count - 1,
    }
  }

  return state
}

const Counter = ({count, increase, decrease}) => {
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
          <button onClick={decrease}>-</button>
          {/* reset counter */}
          <button>RESET</button>
          {/* increase number */}
          <button onClick={increase}>+</button>
        </div>
      </div>
    </>
  )
}

const currentState = state => {
  return state
}

const propsToDispatch = dispatch => {
  return bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  )
}

const CounterContainer = connect(currentState, propsToDispatch)(Counter)

export {CounterContainer}
export default reducer
