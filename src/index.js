import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './components/Counter'
import {CounterContainer} from './components'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
)
