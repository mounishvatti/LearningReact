import { useState } from "react";

function App() {
  const [color, setColor] = useState("#212121");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg">
            <button
              className="outline-none px-4 py-2 te"
              style={{ backgroundColor: "red", borderRadius: "20px" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1"
              style={{ backgroundColor: "blue", borderRadius: "20px" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1"
              style={{ backgroundColor: "green", borderRadius: "20px" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1"
              style={{ backgroundColor: "orange", borderRadius: "20px" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1"
              style={{ backgroundColor: "black", borderRadius: "20px" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
