import React, {useState} from 'react'
import './styles.css'

const Counter = () => {
  const [counter, isCounter] = useState(0)
  return (
    <div className="number-container">
      <p>{counter}</p>
      <div className="buttons">
        {/* decrease number */}
        <button
          onClick={() => {
            isCounter(counter - 1) || console.log('decrease')
          }}
        >
          -
        </button>
        {/* reset counter */}
        <button onClick={() => isCounter(0) || console.log('reset')}>
          RESET
        </button>
        {/* increase number */}
        <button
          onClick={() => isCounter(counter + 1) || console.log('increase')}
        >
          +
        </button>
      </div>
    </div>
  )
}

export {Counter}
