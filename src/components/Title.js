import React from "react";
import { jsx, css, Global } from "@emotion/core";

const Title = ({ title, props }) => (
  <h1
    styles={css`
      color: red;
    `}
  >
    {title}
  </h1>
);

export default Title;
