import React, { useState } from "react";

const Number = () => {
  const [number, isNumber] = useState(0);

  return (
    <>
      <p>{number}</p>
      <button onClick={() => isNumber(number + 1)}>+</button>
      <button onClick={() => isNumber(number - 1)}>-</button>
    </>
  );
};

export default Number;
