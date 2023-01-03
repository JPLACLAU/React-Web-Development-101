import React, { Component } from "react";
import PropTypes from "prop-types";
//import "./AccountBalance.css";
import styled from "styled-components";

const Section1 = styled.section`
  border: 1px solid red;
  font-size: 2rem;
`;

export default class AccountBalance extends Component {
  render() {
    return (
      <Section1 /*section className="AccountBalance"*/>
        $ {this.props.amount}
      </Section1>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
