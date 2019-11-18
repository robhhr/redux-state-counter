import React, { Component } from "react";
import { Global, css } from "@emotion/core";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
            }
          `}
        />
        <Card />
      </>
    );
  }
}

export default App;
