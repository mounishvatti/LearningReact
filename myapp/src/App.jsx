import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0) // useState is a hook that returns a stateful value and a function to update it (setCounter) throughout the UI 

  const addValue = () => {
    setCounter(counter + 1)
  }

  const decrementValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increment</button>

      <button onClick={decrementValue}>Decrement</button>
    </>
  )
}

export default App
