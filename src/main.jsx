import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from "@reduxjs/toolkit"
import DonarReducer from './DonarReducer.jsx'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer:{
    donar: DonarReducer,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
