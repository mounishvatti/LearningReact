import { useState, useCallback, useEffect, useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharactersAllowed, setSpecialCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook to store the reference of the password input element
  const pwdRef = useRef(null); 

  const navigateToGithub = () => {
    window.open("https://github.com/mounishvatti", "_blank");
  }

  const generatePassword = useCallback(() => { // useCallback hook to prevent infinite loop and improve performance by caching the function (memorization)
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (specialCharactersAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>/?~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharactersAllowed, setPassword]);

  const copyPasswordToClipboard = () => {
    const clicked = document.getElementById("copy-button");
    clicked.classList.add("bg-blue-800");
    clicked.classList.remove("bg-blue-600");
    clicked.innerHTML = "copied!";
    pwdRef.current?.select();
    window.navigator.clipboard.writeText(pwdRef.current.value);
  }

  useEffect(() => { // useEffect hook to run the generatePassword function on component mount because we need to render the password whenever we change the length, numberAllowed or specialCharactersAllowed values 
    generatePassword();
  }, [length, numberAllowed, specialCharactersAllowed, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white text-black">
        <h1 className="text-blue-950 text-center my-3 p-4 text-3xl">Generate passwords 🔐</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref = {pwdRef}
          />
          <button
            id="copy-button"
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev)=>!prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={specialCharactersAllowed}
              className="cursor-pointer"
              onChange={() => {
                setSpecialCharactersAllowed((prev)=>!prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
        <div className="flex justify-center pt-8 pb-4">
          <button onClick={navigateToGithub} className="bg-slate-900 text-white px-3 py-1 shrink-0 rounded-lg">View GitHub</button>
        </div>
      </div>
    </>
  );
}

export default App;
