import React, { Component } from "react";

export default class AccountBalance extends Component {
  render() {
    return <>$ {this.props.amount}</>;
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
