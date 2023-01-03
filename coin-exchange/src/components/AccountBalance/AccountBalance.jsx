import React, { Component } from "react";
import PropTypes from "prop-types";
//import "./AccountBalance.css";
import styled from "styled-components";

const Section1 = styled.section`
  font-size: 2rem;
  tex-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
  render() {
    return (
      <Section1 /*section className="AccountBalance"*/>
        Balance: $ {this.props.amount}
      </Section1>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
