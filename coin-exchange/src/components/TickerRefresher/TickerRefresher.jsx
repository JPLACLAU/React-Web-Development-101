import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

var node = document.querySelector(".js-container");
var text = [];

Promise.all([
  axios.get("https://api.coinpaprika.com/v1/tickers/btc-bitcoin"),
  axios.get("https://api.coinpaprika.com/v1/tickers/xrp-ripple"),
]).then((coinResponses) => {
  const coins = coinResponses
    .map(
      (response) => `
  <li>
  ${response.data.name} (${response.data.symbol}):
  ${response.data.quotes["USD"].price}
  </li>`
    )
    .join("");
  node.innerHTML = `<ol>${coins}>/ol>`;
});

export default class TickerRefresher extends Component {
  render() {
    return (
      <div>
        TickerRefresher
        {coinResponses}
      </div>
    );
  }
}
