import React from "react";
import "./Paragraph.css";

const Paragraph = props => {
  return <p className="paragraph">{props.text}</p>;
};

export default Paragraph;
