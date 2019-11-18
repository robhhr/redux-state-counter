import React, { Component, useState } from "react";
import { Global, css } from "@emotion/core";
import "./App.css";
import Card from "./components/Card";
import Number from "./components/Number/Number";

const App = () => {
  return (
    <>
      <Card />
      <Number />
    </>
  );
};

export default App;
