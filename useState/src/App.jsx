import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState({ name: "xyz", age: 30 });
  let change = () => {
    const data={...count}
    data.name="sujit"
    data.age=20
    setCount(data)
  };
  return (
    <>
      <h1>
        {count.name},{count.age}
      </h1>
      <button onClick={change}>click</button>
    </>
  );
}

export default App;
