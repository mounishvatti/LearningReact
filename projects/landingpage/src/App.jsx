// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from "./components/Card";
import "./App.css";
import Button from "./components/Button";

function App() {
  // const [count, setCount] = useState(0)

  let buttoncontent = {
    name: "View GitHub Repo",
    link: "https://github.com/mounishvatti/LearningReact"
  }

  let firstproject = {
    name: "Counter App",
    description:
      "A simple counter app to increment/decrement built with React.js shows the usecase of useState hook.",
    link: "https://counterapp-one-lac.vercel.app/",
    image:
      "https://cdn6.aptoide.com/imgs/4/0/d/40da1d8253999be584e7ee2c89249326_icon.png",
  };

  let secondproject = {
    name: "Background Color Changer",
    description:
      "A simple background color changer app built with React.js shows the usecase of useState hook.",
    link: "https://background-changer-one-psi.vercel.app/",
    image:
      "https://reactjsexample.com/content/images/2017/03/Color-Changer-ReactJS.gif",
  };

  let thirdproject = {
    name: "Password generator",
    description:
      "Shows the usecase of useState, useCallback, useEffect, and useRef hooks.",
    link: "https://passwordgenerator-six-psi.vercel.app/",
    image: "https://play-lh.googleusercontent.com/1_Yqavw9mMbBwp42yl88chb2pXYa2IM-rzV34yOkP6onPlMTcEJl2Zp-_HNYyxV14A-w",
  };

  return (
    <>
      <div className="pb-8 w-full">
        <h1 className="text-5xl pt-16">
          Learn{" "}
          <span id="reactname" className="text-sky-500">
            React.js
          </span>{" "}
          by building projects.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4 py-2 pt-10 ">
        <Card project={firstproject} />
        <Card project={secondproject} />
        <Card project={thirdproject} />
      </div>

      <div className="pt-16">
        <Button text={buttoncontent} />
      </div>
      <div>
        <p className="text-center text-md text-gray-500 p-12">
          Made with 🩵 by{" "}
          <a
            href="https://github.com/mounishvatti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500"
          >
            Mounish Vatti
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
