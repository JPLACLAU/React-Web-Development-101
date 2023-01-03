import React, { Component } from "react";

export default class AccountBalance extends Component {
  render() {
    return <React.Fragment>$ {this.props.amount}</React.Fragment>;
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
