import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <h1>Hello World</h1>
)

const reactElement = React.createElement(
  'h1', 
  {}, 
  'Hello World made using React.createElement'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {anotherElement}
    <App />
    {reactElement}
  </React.StrictMode>,
)
