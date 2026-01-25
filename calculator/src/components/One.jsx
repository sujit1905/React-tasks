import React, { useState } from "react";

function One() {
  const [value, setValue] = useState("");
  const handleClick = (input) => {
    setValue(value + input);
  };
  const clearAll = () => {
    setValue("");
  };
  const backspace = () => {
    setValue(value.slice(0, -1));
  };
  const calculate = () => {
  try {
    setValue(eval(value));
  } catch {
    setValue("Error");
  }
};


  return (
    <div className="calculator-wrapper">
      <h1>Calculator</h1>

      <div className="calculator-box">
        {/* Display */}
        <div className="calculator-display">{value || "00"}</div>

        {/* Buttons */}
        <div className="calculator-buttons">
          <button onClick={() => clearAll()}>C</button>
          <button onClick={() => backspace()}>⌫</button>
          <button onClick={() => handleClick("+")}>%</button>
          <button onClick={() => handleClick("+")}>/</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button className="zero" onClick={() => handleClick("0")}>
            0
          </button>
          <button onClick={() => handleClick(".")}>
            .
          </button>
          <button className="equal" onClick={()=>calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default One;
