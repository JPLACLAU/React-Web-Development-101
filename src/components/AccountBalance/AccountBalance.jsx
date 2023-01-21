import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";

const Section1 = styled.section`
  font-size: 2rem;
  tex-align: center;
  margin: 0 auto 2rem auto;
  margin-bottom: 2rem;
  line-height: 3rem;
  text-align: left;
`;

const Button = styled.button`
  margin: 0 8px;
`;

const BalanceButton = styled(Button)`
  width: 150px;
`;

const Balance = styled.div`
  min-width: 250px;
  margin: 0.5rem 0 0 2.5rem;
  font-size: 1.5em;
  vertical-align: middle;
`;

var formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function AccountBalance(props) {
  const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
  const hbuttonText = " Helicopter Money";
  let content = "\u00A0";
  if (props.showBalance) {
    content = <> {formatter.format(props.amount)}</>;
  }
  const buttonClass = "btn btn-primary";

  return (
    <>
      <Balance>{content}</Balance>

      <Section1>
        <BalanceButton
          onClick={props.handleBalanceVisibilityChance}
          className={buttonClass}
        >
          {buttonText}
        </BalanceButton>
        <Button className="btn btn-success" onClick={props.handleBrrr}>
          <i className="fa-solid fa-helicopter"></i>
          {hbuttonText}{" "}
        </Button>
      </Section1>
    </>
  );
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
