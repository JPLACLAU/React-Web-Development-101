import logo from "./logo.svg";
import "./App.css";

import React, { Component } from 'react'

export default class Coin extends Component {
  render() {
    return (
      <div>This is a coin. Name: {this.props.name}</div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coin Exchange </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
