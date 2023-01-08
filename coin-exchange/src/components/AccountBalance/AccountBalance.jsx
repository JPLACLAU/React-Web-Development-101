import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section1 = styled.section`
  font-size: 2rem;
  tex-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {
  const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
  let content = null;
  if (props.showBalance) {
    content = <> Balance: $ {props.amount}</>;
  }
  return (
    <Section1>
      {content}
      <button onClick={props.handleBalanceVisibilityChance}>
        {buttonText}
      </button>
    </Section1>
  );
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
