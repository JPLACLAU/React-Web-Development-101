import React from "react";
import Coin from "../Coin/Coin";
import styled from "styled-components";

const Table = styled.table`
  margin: 10px 10px 50px 50px;
  display: inline-block;
  font-size: 1.4rem;
`;

export default function CoinList(props) {
  return (
    <Table className="table table-primary table-unbordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          {props.showBalance ? <th>Balance</th> : null}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.coinData.map(({ key, name, ticker, price, balance }) => (
          <Coin
            key={key}
            handleRefresh={props.handleRefresh}
            handleSell={props.handleSell}
            handleBuy={props.handleBuy}
            name={name}
            ticker={ticker}
            price={price}
            balance={balance}
            showBalance={props.showBalance}
            tickerId={key}
          />
        ))}
      </tbody>
    </Table>
  );
}
