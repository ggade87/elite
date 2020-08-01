import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../../../components/common/form";
class CardPayment extends Form {
  state = {
    status: false,
    promoCode: 0,
    data: { cardNumber: "", month: "", year: "", ccv: "" },
    errors: {},
    month: [
      { _id: 1, name: 1 },
      { _id: 2, name: 2 },
      { _id: 3, name: 3 },
      { _id: 4, name: 4 },
      { _id: 5, name: 5 },
      { _id: 6, name: 6 },
      { _id: 7, name: 7 },
      { _id: 8, name: 8 },
      { _id: 9, name: 9 },
      { _id: 10, name: 10 },
      { _id: 11, name: 11 },
      { _id: 12, name: 12 },
    ],
    year: [
      { _id: 1, name: 2020 },
      { _id: 1, name: 2021 },
      { _id: 1, name: 2022 },
      { _id: 1, name: 2023 },
      { _id: 1, name: 20254 },
      { _id: 1, name: 2026 },
      { _id: 1, name: 2027 },
      { _id: 1, name: 2028 },
      { _id: 1, name: 2029 },
      { _id: 1, name: 2030 },
      { _id: 1, name: 2031 },
      { _id: 1, name: 2032 },
      { _id: 1, name: 2033 },
      { _id: 1, name: 2034 },
      { _id: 1, name: 2035 },
      { _id: 1, name: 2036 },
      { _id: 1, name: 2037 },
    ],
  };
  schema = {
    cardNumber: Joi.number().required().label("Card Number"),
    month: Joi.string().required().label("Month"),
    year: Joi.string().required().label("Year"),
    ccv: Joi.number().required().label("CCV"),
  };
  paymentHandler = () => {
    this.setState({ status: true });
    this.props.onPayment();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.paymentHandler}>
          {this.renderInput("cardNumber", "CardNumber")}
          {this.renderSelect("month", "Month", this.state.month)}
          {this.renderSelect("year", "Year", this.state.year)}
          {this.renderButton("PAY " + this.props.rechargeAmount)}
        </form>
      </div>
    );
  }
}

export default CardPayment;
