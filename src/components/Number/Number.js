import React, { useState } from "react";
import "./Number.css";

const Number = () => {
  const [number, isNumber] = useState(0);
  return (
    <div className="number-container">
      <p>{number}</p>
      <div className="buttons">
        <button onClick={() => isNumber(number + 1)}>+</button>
        <button onClick={() => isNumber(0)}>RESET</button>
        <button onClick={() => isNumber(number - 1)}>-</button>
      </div>
    </div>
  );
};

export default Number;
