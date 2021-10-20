// External imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import { configureStore } from '@reduxjs/toolkit'

// Local imports
import App from './App'
import rootReducer from './slices'

const store = configureStore({ reducer: rootReducer })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
