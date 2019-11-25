import React from "react";
import "./App.css";
import Card from "./components/Card";
import Number from "./components/Number/Number";
import Paragraph from "./components/Paragraph/Paragraph";

const App = () => {
  return (
    <>
      <Card />
      <Paragraph text="Toggler widget made with React Hooks" />
      <Number />
    </>
  );
};

export default App;
