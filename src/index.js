import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Calculator from "./calculator.js";

class App extends Component {
  render() {
    return (
      <div className="App blue darken-3">
        <h1 className="white-text">React Caculator</h1>
        <Calculator />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
