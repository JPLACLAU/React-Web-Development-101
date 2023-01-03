import React from "react";
import "./App.css";
import Coin from "./components/Coin/Coin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coin Exchange </h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price="$16600.59" />
          <Coin name="Ethereum" ticker="ETH" price="$1201.48" />
        </tbody>
      </table>
    </div>
  );
}

export default App;
