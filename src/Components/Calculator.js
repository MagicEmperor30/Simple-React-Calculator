import React, { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(clickedInput) {
    if (clickedInput === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        console.error("Error evaluating expression:", error);
        setInput("Error");
      }
    } else if (clickedInput === "cancel") {
      setInput("");
    } else {
      setInput((prevValue) => prevValue + clickedInput);
    }
  }

  let arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "-",
    "+",
    "/",
    "*",
    "=",
    ".",
    "cancel",
    " $",
  ];

  return (
    <div className="calculator">
      <Display numberInput={input} />
      {arr.map((item) => (
        <Buttons key={item} number={item} calculator={handleClick} />
      ))}
    </div>
  );
}

export default Calculator;
