import React from "react";
import "./App.css";
import CoinList from "./components/CoinList/CoinList";
import logo from "./logo.svg";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import { uuid } from "uuidv4";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: "16600.59",
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: "1201.48",
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: "1.0",
        },
        {
          name: "Ripple",
          ticker: "XRP",
          price: "0.2",
        },
        {
          name: "BTC Cash",
          ticker: "BCH",
          price: "0.01",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="React logo" className="App-logo" />
          <h1 className="App-title"> Coin Exchange </h1>
        </header>
        <AccountBalance amount={10000} />
        <CoinList coinData={this.state.coinData} />
      </div>
    );
  }
}

export default App;
