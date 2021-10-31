import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import userReduder from './features/user'
import accountReduder from './features/account'
import './index.css'
import App from './App'

const store = configureStore({
  reducer: {
    user: userReduder,
    account: accountReduder
  },
})

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
