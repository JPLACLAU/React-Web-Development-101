import React from "react";
import CoinList from "./components/CoinList/CoinList";
import ExchangeHeader from "./components/ExchangeHeader/ExchangeHeader";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import { uuid } from "uuidv4";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  background-color: #152c5c;
  color: #cccccc;
`;

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
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker) {
    this.state.coinData.find(({ ticker }) => ticker === valueChangeTicker);
    console.log(coin);
  }
  /*
  remember to remove the header and put it in a block
  */
  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance amount={10000} />
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
}

export default App;
