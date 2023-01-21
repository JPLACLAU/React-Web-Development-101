import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid #cccccc;
  width: 16 vw;
`;
const TdControls = styled(Td)`
  width: 30vw;
`;

const Button = styled.button`
  font-size: 11px;
  margin: 3px 5px 0;
  width: 64px;
`;

export default function Coin(props) {
  const handleRefresh = (event) => {
    event.preventDefault();
    props.handleRefresh(props.tickerId);
  };

  const handleBuyB = (event) => {
    event.preventDefault();
    props.handleBuy(props.tickerId);
  };

  const handleSellB = (event) => {
    event.preventDefault();
    props.handleSell(props.tickerId);
  };

  return (
    <tr>
      <Td>{props.name}</Td>
      <Td>{props.ticker}</Td>
      <Td>${props.price}</Td>
      {props.showBalance ? <Td>${props.balance}</Td> : null}

      <TdControls>
        <form action="#" method="POST">
          <Button className="btn btn-info" onClick={handleRefresh}>
            Refresh
          </Button>
          <Button className="btn btn-light" onClick={handleBuyB}>
            Buy
          </Button>
          <Button className="btn btn-secondary" onClick={handleSellB}>
            Sell
          </Button>
        </form>
      </TdControls>
    </tr>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
