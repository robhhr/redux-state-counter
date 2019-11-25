import React, { useState } from "react";
import "./Number.css";

const Number = () => {
  const [number, isNumber] = useState(0);
  return (
    <div className="number-container">
      <p>{number}</p>
      <div className="buttons">
        {/* decrease number */}
        <button
          onClick={() => {
            isNumber(number - 1) || console.log("decrease");
          }}
        >
          -
        </button>
        {/* reset counter */}
        <button onClick={() => isNumber(0) || console.log("reset")}>
          RESET
        </button>
        {/* increase number */}
        <button onClick={() => isNumber(number + 1) || console.log("increase")}>
          +
        </button>
      </div>
    </div>
  );
};

export default Number;
