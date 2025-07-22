import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import Provider component from react-redux to enable all components to access the Redux store
import { Provider } from 'react-redux'
// Import the Redux store from store.js - this store holds the application's state
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App component with Provider and pass the Redux store as a prop */}
    {/* This allows all components in the app to access and interact with the global state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
