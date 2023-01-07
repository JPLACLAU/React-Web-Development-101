import React from "react";
import CoinList from "./components/CoinList/CoinList";
import ExchangeHeader from "./components/ExchangeHeader/ExchangeHeader";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  text-align: center;
  background-color: #152c5c;
  color: #cccccc;
`;

const COIN_COUNT = 10;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [],
  };
  componentDidMount = async () => {
    const response = await axios.get("https://api.coinpaprika.com/v1/coins");
    const coinIds = response.data.slice(0, COIN_COUNT).map((coin) => coin.id);
    const ticketURL = "https://api.coinpaprika.com/v1/tickers/";
    const promises = coinIds.map((id) => axios.get(ticketURL + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function (response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
      };
    });

    this.setState({ coinData: coinPriceData });
  };

  handleBalanceVisibilityChance = () => {
    this.setState(function (oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance,
      };
    });
  };
  handleRefresh = async () => {
    const response = await axios.get("https://api.coinpaprika.com/v1/coins");
    const coinIds = response.data.slice(0, COIN_COUNT).map((coin) => coin.id);
    const ticketURL = "https://api.coinpaprika.com/v1/tickers/";
    const promises = coinIds.map((id) => axios.get(ticketURL + id));
    const coinData = await Promise.all(promises);
    const newCoinData = coinData.map(function (response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
      };
    });

    /*this.state.coinData.map(function ({
      ticker,
      name,
      price,
      balance,
    }) {
      let newPrice = price;
      if (valueChangeTicker === ticker) {
        const randomPercentage = 0.0995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice,
        balance,
      };
    });
*/
    this.setState({ coinData: newCoinData });
  };

  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleBalanceVisibilityChance={this.handleBalanceVisibilityChance}
        />
        <CoinList
          coinData={this.state.coinData}
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh}
        />
      </Div>
    );
  }
}

export default App;
