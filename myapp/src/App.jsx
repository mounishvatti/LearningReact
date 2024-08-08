import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0); // useState is a hook that returns a stateful value and a function to update it (setCounter) throughout the UI

  const addValue = () => {
    setCounter(counter + 1);
  };

  const decrementValue = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(0);
  };

  const navigateToGitHub = () => {  
    window.open("https://github.com/mounishvatti/LearningReact/blob/main/myapp/src/App.jsx", "_blank");
  }


  return (
    <>
      <div className="rounded-lg p-10 flex flex-col items-center justify-center bg-gray-900">
        <h1 className="text-white/80">Counter</h1>
        <h2 className="text-9xl pt-8 text-white/90">{counter}</h2>
        <div className="flex justify-center gap-8 pt-11">
          <button
            className="bg-blue-600 text-white/90 px-4 py-2 rounded-lg text-md"
            onClick={addValue}
          >
            Increment
          </button>
          <button
            className="bg-red-600 text-white/90 px-4 py-2 rounded-lg text-md"
            onClick={resetValue}
          >
            Reset
          </button>
          <button
            className="bg-green-600 text-white/90 px-4 py-2 rounded-lg text-md"
            onClick={decrementValue}
          >
            Decrement
          </button>
        </div>
      </div>

      <button className="bg-purple-900 text-white/90 px-4 py-2 rounded-lg text-md mt-10" onClick={navigateToGitHub}>View GitHub</button>
    </>
  );
}

export default App;
